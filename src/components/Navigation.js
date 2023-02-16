import { NavLink } from "react-router-dom"

function Navigation(){
    return(
        <nav className="navigation">
            <ul>
                <li>
                    <NavLink 
                        to="/"
                    >
                        <span>  Acceuil</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/About">
                        <span>A Propos</span>
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation