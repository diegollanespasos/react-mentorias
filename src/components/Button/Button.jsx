import React from 'react';
import './Button.css';

const Button = ({ label, toggleModal }) => (
    <button className='button' onClick={toggleModal}>
        {label}
    </button>
)

export default Button;