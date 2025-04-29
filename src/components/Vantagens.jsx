import styles from "../styles/vantagens.module.css";
import vantagensImage from "../assets/img/tst.png"; 

export function Vantagens() {
  return (
    <section className={styles.vantagens}>
      <div className={styles.content}>
        <h2 className={styles.title}>
          Confiança e Segurança no CryptoNexus
        </h2>

        <div className={styles.blocos}>
          <div className={styles.bloco}>
            <div className={styles.etapa}>1</div>
            <div>
              <h3>Proteção de Dados</h3>
              <p>Suas informações são criptografadas de ponta a ponta e nunca compartilhadas com terceiros.</p>
            </div>
          </div>

          <div className={styles.bloco}>
            <div className={styles.etapa}>2</div>
            <div>
              <h3>Conteúdo Verificado</h3>
              <p>Todo o material disponível é revisado por especialistas, garantindo credibilidade e confiança.</p>
            </div>
          </div>

          <div className={styles.bloco}>
            <div className={styles.etapa}>3</div>
            <div>
              <h3>Transparência Total</h3>
              <p>Mostramos de forma clara como funcionam as simulações e alertas para que você invista com consciência.</p>
            </div>
          </div>
        </div>

        <p className={styles.footer}>
          No CryptoNexus, a sua segurança e confiança vêm em primeiro lugar.
        </p>
      </div>

      <div className={styles.imageContainer}>
        <img src={vantagensImage} alt="Segurança Digital" />
      </div>
    </section>
  );
}
