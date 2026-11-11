# Make directory
mkdir aerosmith_db_project</br>
cd aerosmith_db_project</br></br>

# Create React frontend
npm create vite@latest client -- --template react

# Create backend
mkdir server</br>
cd server</br>
npm init -y</br>
npm install @supabase/supabase-js

# Install backend dependencies
npm install express cors dotenv</br>
npm install -D nodemon

# Install frontend dependencies
cd ../client</br>
npm install</br>
npm i react-router-dom

# Project Directory
<pre>
aerosmith_db_project/
│
├── client/                         # React frontend (View)
│   ├── public/
│   └── src/
│       ├── assets/                 # Images and static assets
│       │
│       ├── components/             # Reusable React components
│       │   ├── Navbar.jsx
│       │   └── MainPage.jsx
│       │
│       ├── services/               # API requests
│       │   └── api.js
│       │
│       ├── App.jsx                 # Main React application
│       └── main.jsx                # React entry point
│
├── server/                         # Express backend (MVC)
│   ├── config/                     # Database configuration
│   │   └── database.js             # Supabase connection
│   │
│   ├── models/                     # Model layer
│   │   └── musicModel.js           # Database queries
│   │
│   ├── controllers/                # Controller layer
│   │   └── musicController.js      # Handles API requests
│   │
│   ├── views/                      # View-related logic
│   │   └── musicViews.js
│   │
│   ├── .env                        # Environment variables
│   ├── server.js                   # Express server entry point
│   └── package.json                # Backend dependencies
│
└── .gitignore                      # Files excluded from Git
</pre>