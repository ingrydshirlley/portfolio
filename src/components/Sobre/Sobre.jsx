import React from 'react';
import './Sobre.scss';
import { FaRegFaceSmile } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { AiOutlineLinkedin } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { Fade } from 'react-reveal';

function Sobre() {
    return (
        <section id="Sobre">
            <Fade duration={1000} delay={100}>
                <div className='text-sobre'>
                    <h2>Sobre Mim</h2>
                    <span>Eu sou uma entusiasta de desenvolvimento front-end apaixonada 
                        por criar experiências web incríveis. Me formei em Análise e Desenvolvimento de Sistemas pelo SENAI, 
                        onde adquiri uma base sólida em programação e resolução de problemas.
                        <br/>Minha jornada no mundo da tecnologia começou durante meus estudos, onde mergulhei nas linguagens de programação 
                        e descobri minha paixão por criar interfaces intuitivas e visualmente atraentes. Desde então, venho aprimorando 
                        minhas habilidades em HTML, CSS, JavaScript e React, buscando sempre aprender as últimas tendências e melhores práticas 
                        do desenvolvimento front-end.

                        <br/>Estou constantemente buscando novos desafios para expandir meu conhecimento e aprimorar minhas habilidades. 
                        <span> Vamos construir algo incrível juntos!</span>
                    </span>
                </div>

                <div className='container-sobre'>
                    <div className="box">
                        <div className="icon"><FaRegFaceSmile /></div>
                        <span>Meu Nome:</span>
                        <p>Ingryd Shirlley</p>
                    </div>
                    <div className="box">
                        <div className="icon"><MdOutlineMail /></div>
                        <span>E-mail:</span>
                        <p>ingryddasilva7@gmail.com</p>
                    </div>
                    <div className="box">
                        <div className="icon"><AiOutlineLinkedin /></div>
                        <span>LinkedIn:</span>
                        <p>@ingryd-shirlley</p>
                    </div>
                    <div className="box">
                        <div className="icon"><BsTelephone /></div>
                        <span>Telefone:</span>
                        <p>(11)94967-6202</p>
                    </div>
                </div>
            </Fade>
        </section>
    );
}

export default Sobre;