import React from 'react';
import './footer.css'
import {FaTelegramPlane, FaTwitter, FaGithub, FaInfo} from 'react-icons/fa'

const Footer = () => {
    return (
    <footer className="foot">
    <div className="links">
        <div className="link">
            <h3 className='title'>React-SPA </h3>
            <p className='copy'>©Copiright.All rights reserved.</p>
        </div>
    </div>
    <hr/>
    <div className="social">
        <a href="" className='foot-a'><FaTelegramPlane/></a>
        <a href="" className='foot-a'><FaGithub/></a>
        <a href="" className='foot-a'><FaInfo/></a>
        <a href="" className='foot-a'><FaTwitter/></a>    
        
    </div>
</footer>
    );
};

export default Footer;