import React from 'react';
import Image from '../../components/Image/Image.jsx';
import myImage from '../../assets/image1.jpg';
import './ImagePage.css';

const ImagePage = () => {
    return (
        <div className="imagepage">
            <h1>Image Page</h1>
            <div className='container'>
                <Image source={myImage} alt='jaguar'/>
            </div>   
        </div>
    )
}

export default ImagePage;