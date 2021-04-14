import React, { useState } from 'react';
import Modal from '../../components/Modal/Modal.jsx';
import Button from '../../components/Button/Button.jsx';
import './ButtonModalPage.css';

const ButtonModalPage = () => {
    const [activated, setActivated] = useState(false);

    const toggleModal = () => {
        setActivated(!activated);
    }

    return(
        <div className='container'>
            <div className='container-left'>
                <Modal title='Modal Title' message='Hello world!' isActivated ={activated}/>
            </div>
            <div className='container-right'>
                <Button label='Toggle' toggleModal={toggleModal} />
            </div> 
        </div>
    )
}

export default ButtonModalPage;