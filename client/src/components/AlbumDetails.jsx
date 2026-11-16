
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

export default function AlbumDetails() {

    const { id } = useParams()

    const [album, setAlbum] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {

        const fetchAlbum = async () => {

            try {
                setLoading(true)
                setError(null)

                const response = await fetch(
                    'http://localhost:5000/api/music'
                )

                if (!response.ok) {
                    throw new Error('Unable to retrieve albums')
                }

                const data = await response.json()
                const selectedAlbum = data.find(
                    item => String(item.id) === id
                )

                if (!selectedAlbum) {
                    throw new Error('Album not found')
                }

                setAlbum(selectedAlbum)

            } catch (err) {

                setError(err.message)

            } finally {

                setLoading(false)

            }
        }

        fetchAlbum()

    }, [id])


    if (loading) {
        return <p>Loading album details...</p>
    }

    if (error) {
        return <p>Error: {error}</p>
    }

    return (

        <div className="album-details">

            <h1 className="album-details-title">
                {album.title}
            </h1>

            <img
                src={album.cover_img}
                alt={album.title}
                className="album-details-image"
            />

            <div className="album-information">

                <p>
                    <strong>Release Year:</strong> {album.year_released}
                </p>
                <p>
                    <strong>Record Label:</strong> {album.record_label}
                </p>
                   <p>
                    <strong>Billboard Chart Position:</strong> {album.us_chart_position}
                </p>
                   <p>
                    <strong>Billboard Certification:</strong> {album.us_certification}
                </p>
                                   <p>
                    <strong>Number of Tracks:</strong> {album.tracks}
                </p>
                                   <p>
                    <strong>Album Duration:</strong> {album.duration}
                </p>

<div className="album-audio">

    <h2>Listen to Album</h2>

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

        

            </div>

        </div>

      

    )
}
