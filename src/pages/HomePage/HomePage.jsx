import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button.jsx';
import './HomePage.css';

const HomePage = () => {
    return (
        <div className="homepage">
            <h1>Home Page</h1>
            <Link to="/modal">
                <Button label='Modal Page' />
            </Link>
            <Link to="/image">
                <Button label='Image Page' />
            </Link>
            <Link to="/button">
                <Button label='Button Page' />
            </Link>
        </div>
    )
}

export default HomePage;