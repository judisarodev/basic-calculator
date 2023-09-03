import React from "react";
import '../styles/mainMenu.css'

const MainMenu = () => {
    return(
        <nav class="navbar navbar-dark bg-dark">
                <ul class="navbar-nav menu">
                    <li class="nav-item active menu-item">
                        <a class="nav-link">Calculadora Básica</a>
                    </li>
                </ul>
        </nav>
    );
}

export { MainMenu }; 