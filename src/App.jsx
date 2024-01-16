import './App.css';
import { Fade } from 'react-reveal';
import Menu from './components/Menu/Menu';
import Home from './components/Home/Home';
import Sobre from './components/Sobre/Sobre';
import Projetos from './components/Projetos/Projetos';
import Servicos from './components/Servicos/Servicos';
import Skills from './components/Skills/Skills';
import Top from './components/TopButton.jsx';

function App() {
  return (
    <div className="App">
      <Menu />

      <Fade duration={1000} delay={200}>
        <Home />
        <Sobre />
        <Projetos />
        <Servicos />
        <Skills />
      </Fade>

      <Top/>
    </div>
  );
}

export default App;
