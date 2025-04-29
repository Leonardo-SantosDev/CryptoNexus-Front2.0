import React from 'react';
import styles from '../../styles/sobre.module.css';
import { FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function Sobre() {
  const navigate = useNavigate();

  return (
    <div className={styles.pageContainer}>
      <div className={styles.sobre}>
        <button
          className={styles.closeButton}
          onClick={() => navigate("/")}
          aria-label="Fechar"
        >
          <FaTimes size={20} />
        </button>

        <h2>Sobre o CryptoNexus</h2>
        <p className={styles.subtitulo}>
          Uma plataforma feita para quem quer entender, simular e investir em criptomoedas com segurança.
        </p>

        <div className={styles.conteudo}>
          <p>
            Nosso objetivo é tornar o mundo das criptomoedas acessível e seguro para todos, especialmente iniciantes. 
            Com simulações realistas, conteúdo educativo e visualização em tempo real, o CryptoNexus te prepara para tomar decisões informadas.
          </p>
          <p>
            Acreditamos que a educação financeira é a chave para um futuro mais livre e autônomo. Por isso, nossa plataforma é intuitiva, moderna e focada em você.
          </p>
          <p>
            Estamos sempre em evolução para trazer novas funcionalidades, integrar novas moedas e garantir a melhor experiência possível.
          </p>
        </div>
      </div>
    </div>
  );
}
