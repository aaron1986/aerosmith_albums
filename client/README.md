mkdir aerosmith_db_project
cd aerosmith_db_project

# Create React frontend
npm create vite@latest client -- --template react

# Create backend
mkdir server
cd server
npm init -y
npm install @supabase/supabase-js

# Install backend dependencies
npm install express cors dotenv
npm install -D nodemon

# Install frontend dependencies
cd ../client
npm install
npm i react-router-dom


aerosmith_db_project/
│
├── client/                      
│   ├── public/
│   └── src/
│       ├── assets/
│       ├── components/
│       │   ├── Navbar.jsx
│       │   ├── MainPage.jsx
│       ├── services/
│       │   └── api.js
│       ├── App.jsx
│       └── main.jsx
│
├── server/                         
│   ├── config/
│   │   └── database.js
│   │
│   ├── models/                     
│   │   └── musicModel.js
│   │
│   ├── controllers/               
│   │   └── musicController.js
│   │
│   ├── views/                    
│   │   └── musicViews.js
│   │
│   ├── .env
│   ├── server.js
│   └── package.json
│
└── .gitignore