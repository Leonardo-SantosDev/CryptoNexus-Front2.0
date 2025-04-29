import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styles from './App.module.css';
import './global.css';

import { Login } from './pages/auth/Login';
import { Cadastro } from '../src/pages/auth/Cadastro';
import Home from '../src/pages/home/Home';
import Contato from './pages/home/Contato';
import Sobre from './pages/home/Sobre';
import Funcionalidades from './pages/home/Funcionalidades';

function App() {
  return (
    <div className={styles.App}>
      <Router basename="/CryptoNexus-Front2.0">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/funcionalidade" element={<Funcionalidades />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
