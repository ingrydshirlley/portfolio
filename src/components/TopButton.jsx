import React from 'react';
import './../App.css';
import { SlArrowUp } from "react-icons/sl";

function Top() {
    const irParaOTopo = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <button className='top' onClick={irParaOTopo}>
            <SlArrowUp />
        </button>
    );
}

export default Top;