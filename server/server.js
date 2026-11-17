
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const artistRoutes = require('./views/musicViews');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Homepage route
app.get('/', (req, res) => {
    res.send(`
        <h1>Aerosmith Albums API</h1>
        <p>Server is running successfully!</p>
        <p>Visit /api to access the API.</p>
    `);
});

// API routes
app.use('/api', artistRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
