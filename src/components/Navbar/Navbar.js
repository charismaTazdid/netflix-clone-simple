import React, { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import './Navbar.css'

const Navbar = () => {

    const [showLogoBg, setShowLogoBg] =useState([false])
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 200) {
                setShowLogoBg(true);
            }
            else setShowLogoBg(false);
        })
        return () => {
            window.removeEventListener("scroll");
        };

    }, [])
    return (
        <div className={`nav ${showLogoBg && "nav-black"}`}>
            <img
                className='netflix-logo'
                src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Nexflix logo" />

            <img
                className='netflix-avatar'
                src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Netflix logo" />
        </div>
    );
};

export default Navbar;