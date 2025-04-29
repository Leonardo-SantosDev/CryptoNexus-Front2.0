import React from 'react';
import styles from '../../styles/funcionalidades.module.css';
import { FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function Funcionalidades() {
  const navigate = useNavigate();

  return (
    <div className={styles.pageContainer}>
      <div className={styles.funcionalidades}>
        <button
          className={styles.closeButton}
          onClick={() => navigate("/")}
          aria-label="Fechar"
        >
          <FaTimes size={20} />
        </button>

        <h2>Funcionalidades do CryptoNexus</h2>
        <p className={styles.subtitulo}>
          Descubra como o CryptoNexus pode te ajudar a explorar o universo das criptomoedas.
        </p>

        <ul className={styles.lista}>
          <li>
            <strong>💹 Simulador de Investimentos:</strong> simule ganhos e perdas com diferentes criptos sem arriscar nada.
          </li>
          <li>
            <strong>📊 Acompanhamento em Tempo Real:</strong> veja as variações de preços e gráficos atualizados ao vivo.
          </li>
          <li>
            <strong>🔒 Segurança em Primeiro Lugar:</strong> dados protegidos e navegação segura em toda a plataforma.
          </li>
          <li>
            <strong>📚 Conteúdo Educativo:</strong> aprenda sobre blockchain, criptomoedas e como investir com responsabilidade.
          </li>
          <li>
            <strong>🌐 Acesso Intuitivo:</strong> uma interface limpa, moderna e fácil de usar, mesmo para iniciantes.
          </li>
        </ul>
      </div>
    </div>
  );
}
