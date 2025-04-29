import styles from "../styles/explorarNexus.module.css";
import { Link } from 'react-router-dom';

export function ExplorarNexus() {
  return (
    <section className={styles.explorarNexus}>
      <h2 className={styles.titulo}>Explore o CryptoNexus</h2>

      <div className={styles.cards}>
        <div className={styles.card}>
          <h3 className={styles.cardTitulo}>Segurança em Primeiro Lugar</h3>
          <p className={styles.cardTexto}>
            Seus dados estão protegidos com criptografia avançada e práticas de segurança de ponta. Aqui, sua privacidade é levada a sério.
          </p>
        </div>

        <div className={styles.card}>
          <h3 className={styles.cardTitulo}>Acesso Livre ao Conteúdo</h3>
          <p className={styles.cardTexto}>
            Explore artigos, cotações em tempo real e simulações básicas sem precisar criar uma conta.
          </p>
        </div>

        <div className={styles.card}>
          <h3 className={styles.cardTitulo}>Cadastro para Funcionalidades Extras</h3>
          <p className={styles.cardTexto}>
            Crie uma conta para acompanhar investimentos, personalizar alertas e realizar simulações completas.
          </p>
        </div>
      </div>
      <hr className={styles.linha} />
    </section>
  );
}
