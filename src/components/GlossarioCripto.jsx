import React from "react";
import styles from "../styles/glossarioCripto.module.css";

const termos = [
  {
    termo: "Blockchain",
    descricao: "Uma tecnologia de registro distribuído usada para manter um histórico seguro e imutável de transações."
  },
  {
    termo: "Wallet (Carteira)",
    descricao: "Ferramenta que permite armazenar, enviar e receber criptomoedas. Pode ser digital ou física."
  },
  {
    termo: "Token",
    descricao: "Um ativo digital que pode representar valor, utilidade ou até mesmo propriedade em uma blockchain."
  },
  {
    termo: "NFT",
    descricao: "Token não-fungível, ou seja, um item digital único, como arte, música ou colecionáveis."
  }
];

const GlossarioCripto = () => {
  return (
    <section className={styles.glossarioSection}>
      <h2 className={styles.sectionTitle}>Glossário Cripto</h2>
      <div className={styles.termosContainer}>
        {termos.map((item, index) => (
          <div className={styles.termoCard} key={index}>
            <h3>{item.termo}</h3>
            <p>{item.descricao}</p>
          </div>
        ))}
      </div>
      <hr className={styles.linha} />
    </section>
  );
};

export default GlossarioCripto;
