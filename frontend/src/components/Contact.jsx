import React, { useState } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSend, FiMail, FiPhone, FiMapPin, FiCheckCircle, FiAlertCircle, FiLoader } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({ show: false, type: '', message: '' });

  // Handle inputs changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Trigger temporary success or error popups
  const showAlert = (type, message) => {
    setAlert({ show: true, type, message });
    setTimeout(() => {
      setAlert({ show: false, type: '', message: '' });
    }, 6000); // Alert automatically closes after 6 seconds
  };

  // Validate form and submit via Axios
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;

    // Simple clientside validation
    if (!name || !email || !subject || !message) {
      showAlert('error', 'Please fill in all the fields in the form.');
      return;
    }

    setLoading(true);

    try {
      // Send data to express backend API
      // Fallbacks to localhost in dev. Can easily be adjusted via build envs
      const backendUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      const response = await axios.post(`${backendUrl}/api/contact`, formData);

      if (response.data.success) {
        showAlert('success', response.data.message || 'Your message has been sent successfully!');
        // Clear fields on success
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        showAlert('error', response.data.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Contact Form Submission Error:', error);
      const errMsg = error.response?.data?.message || 'Failed to connect to the backend server. Please verify if the API is running.';
      showAlert('error', errMsg);
    } finally {
      setLoading(false);
    }
  };

  const contactInfos = [
    { icon: <FiMail className="w-5 h-5" />, label: 'Email', value: 'varthanjai123@gmail.com', href: 'mailto:varthanjai123@gmail.com' },
    { icon: <FiPhone className="w-5 h-5" />, label: 'Phone', value: '8754051456', href: 'tel:8754051456' },
    { icon: <FiMapPin className="w-5 h-5" />, label: 'Location', value: 'Ariyalur, Tamil Nadu', href: '#' },
  ];

  return (
    <section id="contact" className="py-24 relative bg-lightBg dark:bg-darkBg overflow-hidden">
      {/* Background ambient orbs */}
      <div className="absolute top-[20%] right-[-10%] w-[350px] h-[350px] rounded-full ambient-glow-1 pointer-events-none" />

      {/* Floating Success/Error Alert Bar */}
      <AnimatePresence>
        {alert.show && (
          <motion.div
            initial={{ opacity: 0, y: -50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className={`fixed top-24 left-4 right-4 md:left-auto md:right-6 md:w-96 z-50 p-4 rounded-2xl backdrop-blur-md shadow-2xl flex items-start gap-3 border ${
              alert.type === 'success'
                ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-600 dark:text-emerald-400'
                : 'bg-rose-500/10 border-rose-500/20 text-rose-600 dark:text-rose-400'
            }`}
          >
            <div className="mt-0.5">
              {alert.type === 'success' ? (
                <FiCheckCircle className="w-5 h-5 flex-shrink-0" />
              ) : (
                <FiAlertCircle className="w-5 h-5 flex-shrink-0" />
              )}
            </div>
            <div className="flex-1 text-sm font-medium">
              <p className="font-bold">{alert.type === 'success' ? 'Success' : 'Error'}</p>
              <p className="opacity-90 mt-0.5 leading-relaxed">{alert.message}</p>
            </div>
            <button
              onClick={() => setAlert({ show: false, type: '', message: '' })}
              className="text-xs font-bold hover:opacity-75"
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white"
          >
            Get In <span className="text-gradient">Touch</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 60 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-blue-600 to-cyan-400 mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
          {/* Left Column: Contact Details Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            <div className="space-y-6">
              <motion.h3
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-2xl font-bold text-slate-800 dark:text-white"
              >
                Let's discuss something <span className="text-primary-light dark:text-cyan-400">awesome</span>
              </motion.h3>
              
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm md:text-base"
              >
                Feel free to reach out to me for internship opportunities, project collaborations, open-source discussions, or just to say hi! I'll do my best to get back to you as quickly as possible.
              </motion.p>
            </div>

            {/* Quick Details Cards */}
            <div className="space-y-4">
              {contactInfos.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-2xl glass border border-slate-200/50 dark:border-slate-800/40 hover:border-primary-light/35 dark:hover:border-primary-light/35 transition-all duration-300 shadow-sm"
                >
                  <div className="text-primary-light dark:text-cyan-400 bg-blue-100/50 dark:bg-blue-950/20 border border-blue-200/50 dark:border-blue-800/20 rounded-xl p-3 shadow-inner">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold tracking-widest text-slate-400 dark:text-slate-500 leading-none">
                      {info.label}
                    </p>
                    <p className="text-slate-800 dark:text-slate-200 font-semibold text-sm md:text-base mt-1">
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass rounded-3xl p-6 md:p-10 shadow-2xl relative"
            >
              {/* Inner ambient card glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 to-cyan-500/5 rounded-3xl pointer-events-none" />

              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name field */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="w-full glass-input rounded-xl px-4 py-3 text-sm focus:ring-2"
                    />
                  </div>

                  {/* Email field */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className="w-full glass-input rounded-xl px-4 py-3 text-sm focus:ring-2"
                    />
                  </div>
                </div>

                {/* Subject field */}
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Collaboration"
                    required
                    className="w-full glass-input rounded-xl px-4 py-3 text-sm focus:ring-2"
                  />
                </div>

                {/* Message field */}
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Let's build something awesome together..."
                    required
                    className="w-full glass-input rounded-xl px-4 py-3 text-sm focus:ring-2 resize-none"
                  />
                </div>

                {/* Submit button with loader */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl text-white font-semibold text-sm bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 dark:from-blue-500 dark:to-cyan-400 dark:hover:from-blue-600 dark:hover:to-cyan-500 transition-all duration-300 hover:shadow-lg disabled:opacity-75 disabled:cursor-not-allowed shadow-md"
                >
                  {loading ? (
                    <>
                      <FiLoader className="w-4 h-4 animate-spin" />
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <FiSend className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
