import React from 'react';

import './Image.css';

const Image = ({ source, alt }) => <img src={source} className='image' alt={alt}/>

export default Image;