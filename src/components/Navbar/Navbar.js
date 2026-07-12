import "./Navbar.css";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.jpg";
function Navbar() {
    return (
        <nav>
            <img src={logo} alt="Little Lemon Logo"/>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink to="/menu">Menu</NavLink>
                </li>
                <li>
                    <NavLink to="/reservations">Reservations</NavLink>
                </li>
                <li>
                    <NavLink to="/order-online">Order Online</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;