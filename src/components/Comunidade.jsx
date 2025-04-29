import styles from "../styles/comunidade.module.css";

export function Comunidade() {
  return (
    <section className={styles.comunidade}>
      <div className={styles.wrapper}>
        <h2 className={styles.titulo}>Benefícios para a Comunidade</h2>
      </div>

      <div className={styles.cardsContainer}>
        <div className={styles.card}>
          <h3 className={styles.cardTitulo}>Educação Acessível</h3>
          <p className={styles.cardTexto}>
            Facilitamos o entendimento sobre criptomoedas e blockchain de forma simples e acessível para todos os níveis de conhecimento.
          </p>
        </div>

        <div className={styles.card}>
          <h3 className={styles.cardTitulo}>Inclusão Financeira</h3>
          <p className={styles.cardTexto}>
            Democratizamos o acesso a ativos digitais, promovendo a inclusão financeira e autonomia dos usuários.
          </p>
        </div>

        <div className={styles.card}>
          <h3 className={styles.cardTitulo}>Comunidade Colaborativa</h3>
          <p className={styles.cardTexto}>
            Incentivamos a troca de experiências e a construção de uma comunidade que cresce junto no mundo cripto.
          </p>
        </div>
      </div>

      <p className={styles.textoFinal}>
        O CryptoNexus conecta pessoas, conhecimento e oportunidades no universo das criptomoedas.
      </p>
      <hr className={styles.linha} />
    </section>
  );
}
