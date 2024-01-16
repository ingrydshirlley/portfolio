import React from 'react';
import './Servicos.scss';
import { IoCode } from "react-icons/io5";
import { FaFigma } from "react-icons/fa";
import { IoPhonePortraitOutline } from "react-icons/io5";

function Servicos() {
    return (
        <section id="Servicos">
            <span className='titulo'>Serviços</span>
            <div className='container-geral'>
                <div className="box">
                    <span><IoCode /></span>
                    <p>Criação de Sites</p>
                </div>

                <div className="box">
                    <span><FaFigma /></span>
                    <p>Prototipação e
                        Design</p>
                </div>

                <div className="box">
                    <span><IoPhonePortraitOutline /></span>
                    <p>Sites
                        responsivos</p>
                </div>
            </div>
        </section>
    );
}

export default Servicos;