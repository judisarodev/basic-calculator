import React from "react";
import { container } from '../styles/container.css';

const Container = (props) => {
    return(
        <div className="container">
            {props.children}
        </div>
    );
}

export { Container };