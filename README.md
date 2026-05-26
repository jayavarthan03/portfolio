<<<<<<< HEAD
# Premium Glassmorphic Developer Portfolio Website

A modern, highly-aesthetic, responsive full-stack developer portfolio website designed for software developer students. It features a beautiful **Blue & Black** glassmorphism style, smooth scrolling navigation, dark/light theme toggle, interactive typing animation, technical skills progress indicators, contact form integration with an Express REST API, and MongoDB data storage.

---

## 🌟 Tech Stack

### Frontend
*   **React.js** (scaffolded via Vite)
*   **Tailwind CSS** (v4 utility styling)
*   **Framer Motion** (smooth fade-ins, float animations, and transitions)
*   **React Icons** & **React Scroll** (smooth navigation)
*   **Axios** (REST API request communication)

### Backend
*   **Node.js** & **Express.js** (structured RESTful API)
*   **MongoDB** (database message storage)
*   **Mongoose** (schema-based ODM modeling)
*   **Cors** & **Dotenv** (configuration & cross-origin safety)

---

## 📂 Project Directory Structure

```
portfolio/
├── backend/
│   ├── config/
│   │   └── db.js                 # MongoDB connection configuration
│   ├── controllers/
│   │   └── contactController.js  # Contact form request handlers
│   ├── middleware/
│   │   └── errorHandler.js       # Centralized error handler response middleware
│   ├── models/
│   │   └── Message.js            # Message database collection Schema
│   ├── routes/
│   │   └── contactRoutes.js      # API endpoint routing definitions
│   ├── .env                      # Local environment configurations (Git ignored)
│   ├── .env.example              # Env configuration template 
│   ├── package.json              # Backend dependencies & scripts
│   └── server.js                 # Express application entry point
├── frontend/
│   ├── public/
│   │   └── resume.pdf            # Placeholder PDF for resume downloads
│   ├── src/
│   │   ├── components/           # Reusable UI component layer
│   │   │   ├── About.jsx         # Personal intro & quick stats
│   │   │   ├── Contact.jsx       # Contact form with validation & Axios hooks
│   │   │   ├── Footer.jsx        # Branding, quick links, & socials
│   │   │   ├── Hero.jsx          # Typerwriter effect & mock terminal
│   │   │   ├── Navbar.jsx        # Sticky navigation & responsive drawer
│   │   │   ├── Projects.jsx      # Glass cards with Github & Demo links
│   │   │   ├── Skills.jsx        # Tabbed animated skill-level meters
│   │   │   └── ThemeToggle.jsx   # Dark/Light selector
│   │   ├── context/
│   │   │   └── ThemeContext.jsx  # Dark/Light style provider
│   │   ├── App.jsx               # Main SPA routing & wrapper
│   │   ├── index.css             # Glassmorphic components & ambient lights
│   │   └── main.jsx              # React DOM mounting entry point
│   ├── postcss.config.js         # PostCSS compiler configurations
│   ├── tailwind.config.js        # Custom theme extensions & colors
│   ├── vite.config.js            # Vite build parameters
│   └── package.json              # Frontend dependencies & scripts
└── README.md                     # Extensive walkthrough & instruction handbook
```

---

## ⚙️ Local Installation & Setup

Follow these steps to run the application locally on your computer.

### Prerequisites
*   [Node.js](https://nodejs.org/) installed (v18 or higher recommended).
*   [MongoDB Community Server](https://www.mongodb.com/try/download/community) installed and running locally, or a remote MongoDB Atlas cluster connection string.

---

### Step 1: Configure the Backend

1.  Navigate into the `backend/` directory:
    ```bash
    cd backend
    ```
2.  Install backend dependencies:
    ```bash
    npm install
    ```
3.  Set up your environment variables. Copy the `.env.example` file to `.env`:
    ```bash
    cp .env.example .env
    ```
4.  Open `.env` in a text editor and customize the values if needed:
    *   `PORT=5000` (Port the server will run on)
    *   `MONGODB_URI=mongodb://127.0.0.1:27017/portfolio` (Local MongoDB connection path)
    *   `NODE_ENV=development`
5.  Start the backend development server (runs with Nodemon for hot-reloading):
    ```bash
    npm run dev
    ```
    You should see `Server is running in development mode on port 5000` and `MongoDB Connected`.

---

### Step 2: Configure the Frontend

1.  Open a new terminal window and navigate into the `frontend/` directory:
    ```bash
    cd frontend
    ```
2.  Install frontend dependencies:
    ```bash
    npm install
    ```
3.  Create an environment variable file `.env.local` to link the API:
    Create a new file named `.env.local` in `/frontend` and add:
    ```env
    VITE_API_URL=http://localhost:5000
    ```
4.  Start the frontend development server:
    ```bash
    npm run dev
    ```
5.  Open your browser and navigate to **`http://localhost:5173`** to view the live portfolio!

---

## 📄 Customizing Your Resume
In the frontend, we have loaded a lightweight placeholder PDF at `frontend/public/resume.pdf`. To make this download button work with your actual credentials:
1.  Save your resume file as a PDF.
2.  Rename your resume file to exactly `resume.pdf`.
3.  Replace the placeholder file located at `frontend/public/resume.pdf` with your own file.
4.  Now, when users click "Resume" or "Download Resume", they will instantly download your real document!

---

## 🚀 Deployment Guide

### Option A: Deploying Frontend to Vercel (Free & Easy)

[Vercel](https://vercel.com/) is the absolute best place to host static React frontends.

1.  Sign up or log in to [Vercel](https://vercel.com/).
2.  Install the Vercel CLI globally or use the Vercel Dashboard:
    *   **Dashboard Way**:
        *   Push your project to GitHub (see GitHub steps below).
        *   Import your repository on Vercel.
        *   In the **Framework Preset**, select **Vite**.
        *   Set **Root Directory** to `frontend`.
        *   Under **Environment Variables**, add:
            *   `VITE_API_URL` = *Your deployed Backend URL* (e.g., `https://portfolio-backend.onrender.com`)
        *   Click **Deploy**.
3.  Vercel will build and host your portfolio React site, providing you with a custom production link.

---

### Option B: Deploying Backend to Render (Free & Easy)

[Render](https://render.com/) is perfect for hosting Express Node.js servers and connecting them to databases.

#### Prerequisites: Create a Free MongoDB Atlas Database
1.  Create a free account on [MongoDB Atlas](https://www.mongodb.com/products/platform/atlas-database).
2.  Deploy a free shared cluster (M0) and copy your **connection connection string**.
3.  Under Database Access, create a user and password, and under Network Access, allow access from anywhere (`0.0.0.0/0`) so Render can connect to it.

#### Deploy on Render:
1.  Sign up or log in to [Render](https://render.com/).
2.  Click **New +** and select **Web Service**.
3.  Connect your GitHub repository.
4.  Configure the service details:
    *   **Name**: `portfolio-backend`
    *   **Root Directory**: `backend`
    *   **Runtime**: `Node`
    *   **Build Command**: `npm install`
    *   **Start Command**: `node server.js`
5.  Scroll down, click **Advanced**, and add the following **Environment Variables**:
    *   `PORT` = `10000`
    *   `NODE_ENV` = `production`
    *   `MONGODB_URI` = *Your MongoDB Atlas Connection String* (e.g. `mongodb+srv://user:pass@cluster.mongodb.net/dbname`)
6.  Click **Create Web Service**. Render will build and deploy your API! Use the provided web service URL as your `VITE_API_URL` variable in your frontend Vercel settings.

---

## 🖥️ How to Upload to GitHub

Follow these steps to upload your newly created project to a GitHub repository:

1.  Initialize Git in the root directory:
    ```bash
    git init
    ```
2.  Create a `.gitignore` file in the root workspace folder to ensure dependencies and environment keys are not uploaded:
    Create a `.gitignore` file and add:
    ```gitignore
    node_modules/
    .env
    .env.local
    dist/
    .DS_Store
    ```
3.  Add all files to staging:
    ```bash
    git add .
    ```
4.  Create your initial commit:
    ```bash
    git commit -m "feat: Initialize modern full-stack developer portfolio"
    ```
5.  Go to [GitHub](https://github.com/) and create a new public repository (e.g., `developer-portfolio`). Leave "Initialize this repository with README" **unchecked**.
6.  Copy the remote repository commands from GitHub and run them in your terminal:
    ```bash
    git remote add origin https://github.com/your-username/developer-portfolio.git
    git branch -M main
    git push -u origin main
    ```
7.  Your complete codebase is now safely backed up on GitHub!
#   p o r t f o l i o  
 
=======
# portfolio
About me and How i work
>>>>>>> a09bf24cc126be9237d7074d9255687391c9fd22
