import React from 'react';
import './Projetos.scss';
import Box from './Box.jsx';
import Carousel from "react-elastic-carousel";

function Projetos() {
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 1 },
        { width: 768, itemsToShow: 1 },
        { width: 1200, itemsToShow: 1 },
    ];

    return (
        <section id="Projetos">
            <div className='container-geral'>
                <span className='titulo'>Projetos</span>

                <Carousel breakPoints={breakPoints}>
                    <div className='container'>
                        <Box imagem={"./hospital.gif"} title="Landing-Page Hospital" tecs="CSS, HTML, Markdown e JS" />
                        <Box imagem={"./tm.gif"} title="Site Ong TomorrowsWater" tecs="HTML, CSS, VLibras e JS" />
                    </div>

                    <div className='container'>
                        <Box imagem={"./tcc.jpg"} title="Landing-Page Bebê-Vindo" tecs="Next, SCSS e Rest API" />
                        <Box imagem={"./pikachu.gif"} title="Landing-Page Pikachu" tecs="HTML e CSS" />
                    </div>

                    <div className='container'>
                        <Box imagem={"./loki.gif"} title="Landing-Page Loki" tecs="React e CSS" />
                        <Box imagem={"./juice.gif"} title="Landing-Page Juice" tecs="HTML e CSS" />
                    </div>

                    <div className='container'>
                        <Box imagem={"./jordan.gif"} title="Landing-Page Jordan" tecs="React e CSS" />
                        <Box imagem={"./travel.gif"} title="Landing-Page Travel" tecs="React, MobileFisrt e SCSS" />
                    </div>

                    <div className='container'>
                        <Box imagem={"./login.gif"} title="Tela de Login" tecs="React e SCSS" />
                        <Box imagem={"./clone.gif"} title="Clone - Escritório Bizarro" tecs="HTML e CSS" />
                    </div>
                </Carousel>
            </div>
        </section>
    );
}

export default Projetos;