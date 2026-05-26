const Message = require('../models/Message');

/**
 * @desc    Submit a contact form message
 * @route   POST /api/contact
 * @access  Public
 */
const submitContactForm = async (req, res, next) => {
  try {
    const { name, email, subject, message } = req.body;

    // 1. Simple validation check (Mongoose schema also validates, but checking beforehand provides better response latency)
    if (!name || !email || !subject || !message) {
      res.status(400);
      throw new Error('Please fill in all fields (name, email, subject, message)');
    }

    // Email pattern check
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(email)) {
      res.status(400);
      throw new Error('Please provide a valid email address');
    }

    // 2. Save the message to MongoDB
    const newMessage = await Message.create({
      name,
      email,
      subject,
      message,
    });

    // 3. Return a success JSON response
    res.status(201).json({
      success: true,
      message: 'Your message has been received! Thank you for reaching out.',
      data: {
        id: newMessage._id,
        name: newMessage.name,
        createdAt: newMessage.createdAt
      }
    });
  } catch (error) {
    // Pass errors down to the centralized error handling middleware
    next(error);
  }
};

module.exports = {
  submitContactForm,
};
