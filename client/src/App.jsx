import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import MainPage from './components/MainPage'
import AlbumDetails from './components/AlbumDetails'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
            <Navbar />

            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/album/:id" element={<AlbumDetails />} />
            </Routes>
        </Router>

    </>
  )
}

export default App
