import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import { NewsLetter, FooterOverlay } from '../../components';
import './Footer.css';

const Footer = () => {
    return (
        <div className='app__footer section__padding'>
            <FooterOverlay />
            <NewsLetter />

        </div>
    )
}

export default Footer;