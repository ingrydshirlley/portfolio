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

  const downloadResume = () => {
    const resumePath = '/cv-front.pdf';

    const link = document.createElement('a');
    link.href = resumePath;
    link.download = 'cv-front.pdf';
    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
  };

  const openWhatsApp = () => {
    const phoneNumber = '5511949676202';
    
    const message = 'Olá, estou entrando em contato através do seu site.';

    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappLink, '_blank');
  };

  return (
    <div className="Home" id='home'>
      <div>
        <div className="textos">
          <h2 className='white'>Olá, eu sou a</h2>
          <h2>{textoDigitado}</h2>
          <p>Desenvolvedora Front-End</p>

          <div className="buttons">
            <button id='cv' onClick={downloadResume}> Download CV </button>
            <button onClick={openWhatsApp}> Entrar em contato </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
