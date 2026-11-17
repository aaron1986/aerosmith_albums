
import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getAllMusic } from '../services/api';

export default function AlbumDetails() {

    const { id } = useParams();

    const [album, setAlbum] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        const fetchAlbum = async () => {

            try {
                setLoading(true);
                setError(null);

                const data = await getAllMusic();

                const selectedAlbum = data.find(
                    item => String(item.id) === String(id)
                );

                if (!selectedAlbum) {
                    throw new Error('Album not found');
                }

                setAlbum(selectedAlbum);

            } catch (err) {

                setError(err.message);

            } finally {

                setLoading(false);

            }
        };

        fetchAlbum();

    }, [id]);

    if (loading) {
        return <p>Loading album details...</p>;
    }

    if (error) {
        return (
            <div className="album-details">
                <h2>Unable to load album</h2>
                <p>Error: {error}</p>
                <Link to="/">Back to albums</Link>
            </div>
        );
    }

    if (!album) {
        return <p>Album not found.</p>;
    }

    return (

        <div className="album-details">

            <h1 className="album-details-title">
                Album Details
            </h1>

            <div className="album-main">

                <img
                    src={album.cover_img}
                    alt={album.title}
                    className="album-details-image"
                    onError={(e) => {
                        e.currentTarget.style.display = 'none';
                    }}
                />

                <div className="album-information">

                    <p>
                        <strong>Album Information:</strong>
                        {' '}{album.title}
                    </p>

                    <p>
                        <strong>Release Year:</strong>
                        {' '}{album.year_released ?? 'Unknown'}
                    </p>

                    <p>
                        <strong>Billboard Chart Position:</strong>
                        {' '}{album.us_chart_position ?? 'Unknown'}
                    </p>

                    <p>
                        <strong>Certification:</strong>
                        {' '}{album.us_certification ?? 'Unknown'}
                    </p>

                    <p>
                        <strong>Record Label:</strong>
                        {' '}{album.record_label ?? 'Unknown'}
                    </p>

                    <p>
                        <strong>Number of Tracks:</strong>
                        {' '}{album.tracks ?? 'Unknown'}
                    </p>

                </div>

            </div>

            <div className="album-audio">

                <h2>Listen to the Album</h2>

                {album.audio_url ? (

                    <audio
                        controls
                        preload="metadata"
                        className="audio-player"
                    >
                        <source
                            src={album.audio_url}
                            type="audio/mpeg"
                        />

                        Your browser does not support audio playback.

                    </audio>

                ) : (

                    <p>Audio currently unavailable.</p>

                )}

            </div>

            <div className="album-back">

                <Link to="/">
                    ← Back to Aerosmith Collection
                </Link>

            </div>

        </div>

    );
}
