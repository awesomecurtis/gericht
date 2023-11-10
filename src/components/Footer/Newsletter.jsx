import React from 'react';
import {SubHeading} from  '../../components';
import './Newsletter.css';

const NewsLetter = () => {
    return (
        <div className='app__newsletter' flex__center>
            <div className='app__newsletter-info'>
                <SubHeading title="Newsletter" />
                <h1 className='headtext__cormorant'>Subscribe to Our Newsletter</h1>
                <p className='p__opensans'>And never miss latest Updates!</p>
            </div>
            <div className='app__newsletter-input'>
                <input type='email' placeholder='Enter your email address' />
                <button type='button' className='custom__button'>Subscribe</button>
            </div>
        </div>
    )
}

export default NewsLetter;