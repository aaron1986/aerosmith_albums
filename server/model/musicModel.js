
const supabase = require('../config/supabase');

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
    getAllMusic,
};
