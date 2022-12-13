import React from "react";
import './nav.css';
import {BsLinkedin} from 'react-icons/bs';
import {RiMailSendFill} from 'react-icons/ri';
import {BsGithub} from 'react-icons/bs';
import {BsFillFileEarmarkPdfFill} from 'react-icons/bs';
import CV from '../../assets/cv.pdf'

const Nav = () => {
    return (
        <nav className="nav_container">
            <ul className="nav_container_list">
                <li className="list_items linkedin"> <a href="https://www.linkedin.com/in/marieledu/" target="_blank" rel="noreferrer"><BsLinkedin/></a></li>
                <li className="list_items github"> <a href="https://github.com/MoumouLD" target="_blank" rel="noreferrer"><BsGithub/></a></li>
                <li className="list_items mail"> <a href='#contact_container' ><RiMailSendFill/></a></li>
                <li className="list_items pdf"><a href={CV} target="_blank" rel="noreferrer"><BsFillFileEarmarkPdfFill/></a></li>
            </ul>
        </nav>
    )
}

export default Nav;