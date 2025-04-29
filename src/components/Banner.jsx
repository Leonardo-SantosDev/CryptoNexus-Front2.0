import styles from "../styles/banner.module.css";

export function Banner() {
  return (
    <section className={styles.banner}>
      <div className={styles.wrapper}>
        <h2 className={styles.titulo}>Como a CryptoNexus Funciona?</h2>
      </div>
      <div className={styles.cardsContainer}>
        <div className={styles.card}>
          <h3 className={styles.cardTitulo}>Acompanhamento em Tempo Real</h3>
          <p className={styles.cardTexto}>
            Monitoramos os preços das principais criptomoedas em tempo real,
            ajudando você a tomar decisões mais rápidas e informadas.
          </p>
        </div>

        <div className={styles.card}>
          <h3 className={styles.cardTitulo}>Educação para Iniciantes</h3>
          <p className={styles.cardTexto}>
            Explicamos o mercado cripto de forma simples, com conteúdos e simulações para quem está começando.
          </p>
        </div>

        <div className={styles.card}>
          <h3 className={styles.cardTitulo}>Ferramentas Inteligentes</h3>
          <p className={styles.cardTexto}>
            Oferecemos recursos como simuladores de investimento e alertas para que você aprenda praticando.
          </p>
        </div>
      </div>
      <p className={styles.textoFinal}>
        A CryptoNexus une informação, prática e tecnologia para te guiar no mundo das criptomoedas.
      </p>
      <hr className={styles.linha} />
    </section>
  );
}
