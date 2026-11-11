import { Link } from 'react-router-dom'
import aerosmithLogo from '../assets/aerosmith-logo.png';

export default function Navbar() {
    return (
<div className="aerosmith-logo">
    <img src={aerosmithLogo} alt="Aerosmith Logo" />

    <nav>
        <ul id="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </ul>
    </nav>
</div>
    )
}
