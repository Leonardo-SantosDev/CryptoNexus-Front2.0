import styles from '../styles/hero.module.css';

export function Hero() {
  return (
    <section className={styles.heroContainer}>
      <video
        className={styles.videoBackground}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        disablePictureInPicture
      >
        <source src="/videos/Crypto.mp4" type="video/mp4" />
        Seu navegador não suporta vídeos HTML5.
      </video>

      <div className={styles.overlay}></div>

      <div className={styles.content}>
        <h2 className={styles.titulo}>Seja bem-vindo ao CryptoNexus</h2>
        <p className={styles.texto}>
          Uma plataforma intuitiva para quem quer entrar no mundo das
          criptomoedas. Com o CryptoNexus, você pode simular investimentos,
          acompanhar valores em tempo real, entender como funcionam as
          transações e dar os primeiros passos com segurança no universo cripto.
        </p>
      </div>
    </section>
  );
}
