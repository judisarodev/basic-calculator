import React from "react";
import '../styles/mainMenu.css'

const MainMenu = () => {
    return(
        <nav className="navbar navbar-dark bg-dark">
                <ul className="navbar-nav menu">
                    <li className="nav-item active menu-item">
                        <a className="nav-link">Calculadora Básica</a>
                    </li>
                </ul>
        </nav>
    );
}

export { MainMenu }; 