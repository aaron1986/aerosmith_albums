
const API_URL = import.meta.env.VITE_API_URL;

export const getAllMusic = async () => {
    const response = await fetch(`${API_URL}/music`);

    if (!response.ok) {
        throw new Error('Failed to fetch albums');
    }

    return response.json();
};
