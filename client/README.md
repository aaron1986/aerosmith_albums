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
aerosmith_db_project/</br>
│
├── client/                 
│   ├── public/</br>
│   └── src/</br>
│       ├── assets/</br>
│       ├── components/</br>
│       │   ├── Navbar.jsx</br>
│       │   ├── MainPage.jsx</br>
│       ├── services/</br>
│       │   └── api.js</br>
│       ├── App.jsx</br>
│       └── main.jsx</br>
│
├── server/                         
│   ├── config/</br>
│   │   └── database.js
│   │
│   ├── models/                    
│   │   └── musicModel.js</br>
│   │
│   ├── controllers/            
│   │   └── musicController.js
│   │
│   ├── views/              
│   │   └── musicViews.js
│   │
│   ├── .env</br>
│   ├── server.js</br>
│   └── package.json</br>
│
└── .gitignore