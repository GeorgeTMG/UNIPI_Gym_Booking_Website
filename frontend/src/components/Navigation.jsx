import {useNavigate} from 'react-router-dom';  
import { NavLink } from "react-router-dom";

export default function Navigation() {
    const navigate = useNavigate();

    return (
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark p-3">
            <div className="container">
                <a className="navbar-brand fw-bold fs-2 me-5">Gym Booking</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav fs-4">
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link active me-3" aria-current="homepage" id="nav-links">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/services" className="nav-link active" aria-current="services" id="nav-links">Services</NavLink>
                        </li>
                    </ul>
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item pe-4">
                        <button className="btn btn-outline-primary bg-light fw-bold text-dark fs-5" id="login">Login</button>
                        </li>
                        <li className="nav-item">
                            <button
                                className="btn btn-outline-danger bg-light fw-bold text-dark fs-5"
                                id="register"
                                onClick={() => navigate('/register')}
                            >Register</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};