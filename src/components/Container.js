import React from "react";
import '../styles/container.css';

const Container = (props) => {
    return(
        <div className="container cal-container">
            {props.children}
        </div>
    );
}

export { Container };