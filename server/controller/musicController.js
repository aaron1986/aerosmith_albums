const artistModel = require('../model/musicModel');

const getAllMusic = async (req, res) => {
    try {
        const musicData = await artistModel.getAllMusic(req, res);
        res.status(200).json(musicData);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getAllMusic,
};  