import styles from "../styles/recursos.module.css";

export function Recursos() {
  return (
    <section className={styles.recursos}>
      <div className={styles.content}>
        <h2 className={styles.title}>Comece sua Jornada no CryptoNexus!</h2>
        <div className={styles.blocos}>
          <div className={styles.bloco}>
            <div className={styles.etapa1}>1</div>
            <div>
              <h3>Aprenda com Conteúdo Verificado</h3>
              <p>Explore artigos, vídeos e dicas para entender o mundo das criptomoedas.</p>
              <hr className={styles.divisor} />
            </div>
          </div>

          <div className={styles.bloco}>
            <div className={styles.etapa2}>2</div>
            <div>
              <h3>Simule sem Riscos</h3>
              <p className={styles.texto1}>
                Use nosso simulador para testar estratégias e entender como investir com segurança.
              </p>
              <hr className={styles.divisor} />
            </div>
          </div>

          <div className={styles.bloco}>
            <div className={styles.etapa3}>3</div>
            <div>
              <h3>Invista com Transparência</h3>
              <p>Após aprender e simular, cadastre-se para começar a investir com responsabilidade.</p>
              <hr className={styles.divisor} />
            </div>
          </div>
        </div>
        <p className={styles.footer}>
          Nossa missão é ajudar iniciantes a dar os primeiros passos no universo cripto com confiança e informação.
        </p>
      </div>
    </section>
  );
}
