import React, { useState, useEffect } from 'react';
import './Home.scss';

function Home() {
  const [textoDigitado, setTextoDigitado] = useState('');
  const textoAlvo = "Ingryd Shirlley :)";

  useEffect(() => {
    let indiceAtual = 0;

    const intervaloId = setInterval(() => {
      setTextoDigitado(textoAlvo.substring(0, indiceAtual));
      indiceAtual += 1;
    }, 300);

    return () => clearInterval(intervaloId);
  }, []);

  return (
    <div className="Home" id='home'>
      <div>
        <div className="textos">
          <h2 className='white'>Olá, eu sou a</h2>
          <h2>{textoDigitado}</h2>
          <p>Desenvolvedora Front-End</p>

          <div className="buttons">
            <button id='cv'> Download CV </button>
            <button> Entrar em contato </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
