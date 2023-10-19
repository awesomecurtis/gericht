import React from 'react';
import {SubHeading} from '../../components/';
import { images } from '../../constants/';
import './Header.css';

const Header = () => {
    return (
        <div className='app__header app__wrapper section__padding' id='home'>
            <div className='app__header_info'>
                <SubHeading title='Chase the new flavour'/>
                <h1 className='app__header-h1'>The Key To Fine Dining</h1>
                <p className='p__opensans' style={{margin: '2rem 0'}}>hChase the new flavoureader ChaChase the new flavourse the new flavourapp The Key Chase the new flavourTo Fine Dining</p>
                <button type='button' className='custom__button'>Explore Menu</button>
            </div>
            <div className='app__header-img'>
                <img src={images.welcome} alt='welcome' />
            </div>
        </div>
    )
}

export default Header;