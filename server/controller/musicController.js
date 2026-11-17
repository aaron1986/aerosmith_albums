
const musicModel = require('../models/musicModel');

const getAllMusic = async (req, res) => {
    try {
        const albums = await musicModel.getAllMusic();
        res.status(200).json(albums);
    } catch (error) {
        console.error('Error fetching albums:', error);

        res.status(500).json({
            message: 'Failed to retrieve albums'
        });
    }
};

module.exports = {
    getAllMusic
};
