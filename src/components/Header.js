// Libs
import { NavLink } from "react-router-dom";

// Constans
import { routes } from "../constans";



const Header = () => {
    return(
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <a className="navbar-brand" href="#">LOGO</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {routes.map((route) => (
                            <li className="nav-item">
                            <NavLink className="nav-link" to={route.path}>{route.name}</NavLink>
                            </li>
                        ))}
                    </ul>

                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;