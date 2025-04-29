import styles from "../styles/impactoSocial.module.css";
import { mdiCurrencyBtc, mdiAccountGroupOutline, mdiLightbulbOnOutline } from "@mdi/js";
import Icon from "@mdi/react";

export function ImpactoSocial() {
  return (
    <section className={styles.ImpactoSocial}>
      <h2 className={styles.titulo}>O Impacto das Criptomoedas na Sociedade</h2>

      <div className={styles.containerConteudos}>
        <div className={styles.blocoTexto}>
          <h3>Educação Financeira Acessível</h3>
          <p>
            Democratizamos o conhecimento sobre investimentos em criptomoedas para todos os níveis de experiência.
          </p>
        </div>
        <div className={styles.blocoTexto}>
          <h3>Inclusão Econômica</h3>
          <p>
            Proporcionamos oportunidades para que qualquer pessoa possa começar a investir com pouco dinheiro.
          </p>
        </div>
        <div className={styles.blocoTexto}>
          <h3>Transformação Digital</h3>
          <p>
            Ajudamos a construir um futuro descentralizado, transparente e com mais autonomia para os usuários.
          </p>
        </div>
      </div>

      <div className={styles.cardsContainer}>
        <div className={styles.card}>
          <Icon path={mdiCurrencyBtc} size={1.5} />
        </div>
        <div className={styles.card}>
          <Icon path={mdiAccountGroupOutline} size={1.5} />
        </div>
        <div className={styles.card}>
          <Icon path={mdiLightbulbOnOutline} size={1.5} />
        </div>
      </div>

      <p className={styles.textoFinal}>
        Nosso objetivo é tornar o mundo das criptomoedas mais acessível, confiável e impactante positivamente.
      </p>
      <hr className={styles.linha} />
    </section>
  );
}
