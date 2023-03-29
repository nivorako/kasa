import { NavLink } from "react-router-dom";

function Navigation() {
    return (
        <nav className="navigation">
            <ul>
                <li>
                    <NavLink to="/" className="navigation__nav">
                        <span> Accueil</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/About" className="navigation__nav">
                        <span>A Propos</span>
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;
