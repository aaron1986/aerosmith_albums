
const supabase = require('../config/database');

const getAllMusic = async () => {
    const { data, error } = await supabase
        .from('studio_albums')
        .select('*')
        .order('year_released', { ascending: true });

    if (error) {
        throw error;
    }

    return data;
};

module.exports = {
    getAllMusic
};
