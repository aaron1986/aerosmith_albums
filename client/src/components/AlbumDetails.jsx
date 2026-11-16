
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

export default function AlbumDetails() {

    const { id } = useParams()

    const [album, setAlbum] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    // YouTube recording
    const youtubeLink =
        'https://www.youtube.com/embed/8W79PjWNC4Y?list=PLj4ufAHTM-E2nAHg_tuSyzFaDAifHrFNW'

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
                    <strong>Release Type:</strong> {album.release_type}
                </p>

                 {/* YouTube Audio Player */}

            <div className="album-audio">

                <h2>Listen to Recording</h2>

                <iframe
                    width="100%"
                    height="180"
                    src={youtubeLink}
                    title={`${album.title} - YouTube recording`}
                    frameBorder="0"
                    allow="encrypted-media; picture-in-picture"
                    allowFullScreen
                />

                </div>

            </div>

        </div>

      

    )
}
