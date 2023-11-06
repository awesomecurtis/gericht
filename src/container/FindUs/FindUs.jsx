import React from 'react';
import { images } from '../../constants';
import {SubHeading} from '../../components';

const FindUs = () => {
    return (
        <div className='app__wrapper app__bg section__padding' id='contact'>
            <div className='app__wrapper_info'>
                <SubHeading title='Contact' />
                <h1 className='headtext__cormorant' style={{marginBottom: 64}}>Find Us</h1>
                <p className='p__opensans'>Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG</p>
                <p className='p__cormorant' style={{color: '#DCCA87', margin: '32px 0' }}>Opening Hours</p>
                <p className='p__opensans'>Mon - Fri: 10:00 am - 02:00 am</p>
                <p className='p__opensans'>Sat - Sun: 10:00 am - 03:00 am</p>
                <button type='button' className='custom__button' style={{marginTop: 64}}>Visit Us</button>
            </div>
            <div className='app__wrapper_img'>
                <img src={images.findus} alt='findus' />
            </div>
        </div>
    )
}

export default FindUs;