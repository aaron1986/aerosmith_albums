
const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const musicRoutes = require('./views/musicViews');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// API routes
app.use('/api', musicRoutes);

// Homepage
app.get('/', (req, res) => {
    res.send('Aerosmith Albums API is running!');
});

// React frontend (production)
app.use(express.static(
    path.join(__dirname, '../client/dist')
));

app.get('*', (req, res) => {
    res.sendFile(
        path.join(__dirname, '../client/dist/index.html')
    );
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
