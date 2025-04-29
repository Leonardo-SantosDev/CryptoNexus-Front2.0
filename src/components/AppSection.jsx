import styles from "../styles/appSection.module.css";
import lockImage from "../assets/img/SegurançaCripto.png"; 

const SecuritySection = () => {
  return (
    <section className={styles.appSection}>
      <div className={styles.contentWrapper}>
        <div className={styles.imageContainer}>
          <img src={lockImage} alt="Segurança e confiança CryptoNexus" />
        </div>

        <div className={styles.textContent}>
          <h2>Segurança e Confiança para Investir com Consciência</h2>

          <div className={styles.featuresGrid}>
            <div className={styles.featureBox}>
              <svg className={styles.icon} viewBox="0 0 24 24" width="32" height="32">
                <circle cx="12" cy="12" r="10" stroke="url(#grad1)" strokeWidth="2" fill="none" />
                <path d="M8 12l2 2l4-4" stroke="url(#grad1)" strokeWidth="2" fill="none" />
                <defs>
                  <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00f0ff" />
                    <stop offset="100%" stopColor="#a04cf0" />
                  </linearGradient>
                </defs>
              </svg>
              <p>Criptografia e Proteção de Dados</p>
            </div>

            <div className={styles.featureBox}>
              <svg className={styles.icon} viewBox="0 0 24 24" width="32" height="32">
                <path d="M12 2l7 4v6c0 5.25-7 10-7 10s-7-4.75-7-10V6l7-4z" fill="url(#grad2)" />
                <defs>
                  <linearGradient id="grad2" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#00f0ff" />
                    <stop offset="100%" stopColor="#a04cf0" />
                  </linearGradient>
                </defs>
              </svg>
              <p>Conteúdo Verificado e Atualizado</p>
            </div>

            <div className={styles.featureBox}>
              <svg className={styles.icon} viewBox="0 0 24 24" width="32" height="32">
                <path d="M3 12h18M3 6h18M3 18h18" stroke="url(#grad3)" strokeWidth="2" />
                <defs>
                  <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00f0ff" />
                    <stop offset="100%" stopColor="#a04cf0" />
                  </linearGradient>
                </defs>
              </svg>
              <p>Transparência e Simplicidade</p>
            </div>

            <div className={styles.featureBox}>
              <svg className={styles.icon} viewBox="0 0 24 24" width="32" height="32">
                <path d="M5 12h14M12 5l7 7-7 7" fill="none" stroke="url(#grad4)" strokeWidth="2" />
                <defs>
                  <linearGradient id="grad4" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00f0ff" />
                    <stop offset="100%" stopColor="#a04cf0" />
                  </linearGradient>
                </defs>
              </svg>
              <p>Acesso Livre para Explorar, Cadastro só para Investir</p>
            </div>
          </div>

          <p className={styles.description}>
            No CryptoNexus, priorizamos sua segurança. Explore nosso conteúdo sem precisar se cadastrar. Simulações, alertas e investimentos exigem login — para garantir sua proteção e uma experiência personalizada.
          </p>
        </div>
      </div>
      <hr className={styles.linha} />
    </section>
  );
};

export default SecuritySection;
