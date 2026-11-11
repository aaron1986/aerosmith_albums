import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

export default function MainPage() {
    const [music, setMusic] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        const fetchMusic = async () => {

            try {

                const response = await fetch(
                    'http://localhost:5000/api/music'
                );

                if (!response.ok) {
                    throw new Error('Unable to retrieve music data');
                }

                const result = await response.json();

                setMusic(result);

            } catch (err) {

                setError(err.message);

            } finally {

                setLoading(false);

            }

        };

        fetchMusic();

    }, []);

    return (

<>
    <div className="article_title">
        Aerosmith Collection
    </div>

    <div className="about-container">

        {loading && <p>Loading music...</p>}

        {error && <p>Error: {error}</p>}

        {!loading && !error && (

            <div className="img-container">

                {music.length === 0 ? (

                    <p>No music records found.</p>

                ) : (

                    music.map((item) => (

                        <div className="album_page" key={item.id}>

                            <h2>{item.title}</h2>

                            {item.cover_img && (
                                <Link to={`/album/${item.id}`}>
                                    <img
                                        src={item.cover_img}
                                        alt={item.title}
                                        className="card_image"
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                        }}
                                    />
                                </Link>
                            )}

                            <p className="album_page_description">
                                Released in {item.year_released}
                            </p>

                        </div>

                    ))

                )}

            </div>

        )}

    </div>
</>

    )
}