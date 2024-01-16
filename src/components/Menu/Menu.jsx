import React from 'react';
import './Menu.scss';

function Menu() {
    return (
        <div className="Menu">
            <div>
                <a href="#home" className="logo"> Portfólio<span>.</span></a>

                <nav>
                    <a href="#Sobre">Sobre</a>
                    <a href="#Projetos">Projetos</a>
                    <a href="#Servicos">Serviços</a>
                    <a href="#Skills">Skills</a>
                </nav>
            </div>
        </div>
    );
}

export default Menu;