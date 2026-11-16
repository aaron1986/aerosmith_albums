
const artistModel = require('../model/musicModel');

const getAllMusic = async (req, res) => {

    try {

        const musicData = await artistModel.getAllMusic();

        res.status(200).json(musicData);

    } catch (error) {

        console.error('Error retrieving music:', error);

        res.status(500).json({
            error: error.message
        });

    }
};

module.exports = {
    getAllMusic,
};
