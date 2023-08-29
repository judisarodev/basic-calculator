import React from "react";
import '../styles/footer.css'; 

const Footer = () => {
    return(<>
        <div className="footer-container bg-dark">
            <FooterItem text={"Visita el proyecto en "} linkText={"GitHub"} link={"https://github.com/judisarodev/basic-calculator.git"}/>
            <FooterItem text={"No te pierdas mi "} linkText={"portafolio"} link={"#"}/>
        </div>
    </>);
}

const FooterItem = ({text, linkText, link}) => {
    return(
    <>
        <p>
            <span className="footer-text">{text}</span>
            <a className="footer-link" href={link}>{linkText}</a>
        </p>
    </>);
}

export { Footer }; 