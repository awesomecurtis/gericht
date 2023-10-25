import React from 'react';
import { SubHeading } from '../../components';
import { images, data } from '../../constants';
import './Laurels.css';

const Laurels = () => {
    return (
        <div className='app__bg app__wrapper section__padding' id='awards'>
            < div className='app__wrapper_info'>
                <SubHeading title='Awards & Recognition' />
                <h1 className='headtext__cormorant'>Our Laurels</h1>
                <div className='app__laurels_awards'>
                    {data.awards.map((award, index) => (
                        <div className='app__laurels_awards-container'>
                            <div className='app__laurels_awards-img'>
                            <img src={award.imgUrl} alt='award' />
                            </div>
                            <div className='app__laurels_awards-info'>
                                <div className='app__laurels_awards-info_title'>
                                    <h3 className='p__cormorant'>{ award.title}</h3>
                                </div>
                                <div className='app__laurels_awards-info_sub'>
                                    <p className='p__opensans'>{ award.subtitle}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='app__wrapper__img'>

            </div>
        </div>
    )
}

export default Laurels;