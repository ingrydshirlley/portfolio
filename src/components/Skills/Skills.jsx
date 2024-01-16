import React from 'react';
import './Skills.scss';

import { IoLogoJavascript } from "react-icons/io5";
import { FaSass } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { TbBrandNextjs } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";


function Skills() {
    return (
        <section id="Skills">
            <div className="container">
                <span className='titulo'>Skills</span>

                <div className='container-geral'>
                    <div className="box">
                        <span><IoLogoJavascript /></span>
                    </div>

                    <div className="box">
                        <span><FaSass /></span>
                    </div>

                    <div className="box">
                        <span><IoLogoCss3 /></span>
                    </div>

                    <div className="box">
                        <span><TbBrandNextjs /></span>
                    </div>

                    <div className="box">
                        <span><FaReact /></span>
                    </div>

                    <div className="box">
                        <span><FaHtml5 /></span>
                    </div>
                </div>
            </div>


            <div className="Footer">
                <div>
                    <span>
                        Orgulhosamente feito por <span>Ingryd Shirlley</span>
                    </span>
                </div>
            </div>
        </section>
    );
}

export default Skills;