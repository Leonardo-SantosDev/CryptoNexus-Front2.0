import { useState } from 'react';
import styles from '../styles/Navbar.module.css';
import { Link } from 'react-router-dom';



export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.navbar}>
      <div className={styles.logoContainer}>
        <span className={styles.logo}>CryptoNexus</span>
      </div>

      <nav className={`${styles.navLinks} ${menuOpen ? styles.active : ''}`}>
        <a href="#">Home</a>
        <Link to="/Funcionalidade">Funcionalidades</Link>
        <Link to="/Sobre">Sobre</Link>
        <Link to="/Contato">Contato</Link>
        <Link to="/Login"><button className={styles.loginBtn}>Entrar</button></Link>
        <Link to="/Cadastro">
        <button className={styles.conta}>Crie sua conta agora!</button>
      </Link>
      </nav>

      <div className={styles.menuToggle} onClick={() => setMenuOpen(!menuOpen)}>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </div>
    </header>
  );
}
