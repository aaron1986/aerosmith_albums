
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const musicRoutes = require('./views/musicViews');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
    origin: [
        'http://localhost:5173',
        'https://aerosmith-albums.netlify.app'
    ]
}));

app.use(express.json());

// Health check
app.get('/', (req, res) => {
    res.send('Aerosmith Albums API is running!');
});

// API routes
app.use('/api', musicRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
