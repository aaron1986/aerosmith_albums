const express = require('express');
const cors = require('cors');
require('dotenv').config();

const artistRoutes = require('./views/musicViews');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/api', artistRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});