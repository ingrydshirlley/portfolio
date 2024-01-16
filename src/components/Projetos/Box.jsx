import React from 'react';
import './Projetos.scss';

function Projetos(props) {
    return (
        <div className="box">
            <div className="imagem">
                <img src={props.imagem} alt="Meu projeto" />
            </div>
            <span>{props.title}</span>
            <p>Tecnologias: {props.tecs}</p>
        </div>
    )
}

export default Projetos;