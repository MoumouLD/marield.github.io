import React from "react";
import './header.css';
import Photo from '../../assets/Marie-1.jpg'

const Header = () => {
    return (
        <header>
            <div className="header_text">
                <p>Hey, I am glad you stopped by. I am</p>
                <h1>Marie LE DÛ</h1>
                <p>Student in Web Development</p>
            </div>
        
            <img id="profil-pic" src={Photo} alt='profil'/>

        </header>
    )
}

export default Header;