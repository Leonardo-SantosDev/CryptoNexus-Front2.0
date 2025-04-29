import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import styles from '../../styles/contato.module.css';

export default function Contato() {
  const navigate = useNavigate();

  return (
    <div className={styles.pageContainer}>
      <div className={styles.contato}>
        <button
          className={styles.closeButton}
          onClick={() => navigate("/")}
          aria-label="Fechar"
        >
          <FaTimes size={20} />
        </button>

        <h2>Fale com a gente</h2>
        <p>Tem alguma dúvida ou sugestão? Preencha o formulário abaixo e entraremos em contato!</p>

        <form className={styles.formulario}>
          <div className={styles.inputGroup}>
            <label htmlFor="nome">Nome</label>
            <input type="text" id="nome" name="nome" placeholder="Seu nome" />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="seuemail@exemplo.com" />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="mensagem">Mensagem</label>
            <textarea id="mensagem" name="mensagem" rows="5" placeholder="Digite sua mensagem..."></textarea>
          </div>

          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
}
