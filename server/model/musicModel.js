const supabase = require('../config/supabase');

const getAllMusic = async (req, res) => {
    try {
        const { data, error } = await supabase
            .from('music')
            .select('*');

        if (error) {
            throw error;
        }

        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getAllMusic,
};