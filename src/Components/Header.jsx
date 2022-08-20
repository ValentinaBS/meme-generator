import React from "react"

export default function Header() {
    return (
        <header className="header">
            <img 
                src="/images/troll-face.png" 
                className="header--image"
                alt="Troll face"
            />
            <h2 className="header--title">
                Meme Generator
            </h2>
            <a 
                className="header--socials"
                href="https://github.com/ValentinaBS">
                    <img
                        alt="GitHub logo" 
                        src="/images/github-logo.svg" 
                    />
                    <h3 className="header--socials-text">
                        ValentinaBS
                    </h3>
            </a>
            <a 
                className="header--socials"
                href="https://github.com/ValentinaBS">
                    <img 
                        alt="Linkedin logo" 
                        src="/images/linkedin-logo.svg"
                    />
                    <h3 className="header--socials-text">
                        Valentina Belén Sánchez
                    </h3>
            </a>
        </header>
    )
}