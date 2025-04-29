import React, { useState } from 'react';
import styles from "../styles/cryptoSimulation.module.css"; // Importando o CSS module

const CryptoSimulation = () => {
  const [investment, setInvestment] = useState(1000);
  const [crypto, setCrypto] = useState('BTC');

  const handleInvestmentChange = (e) => {
    setInvestment(e.target.value);
  };

  const handleCryptoChange = (e) => {
    setCrypto(e.target.value);
  };

  return (
    <section className={styles.containerCriptos}>
      <h2 className={styles.tituloCripto}>Simule seu Investimento em Criptomoedas</h2>
      <div className={styles.cryptoInput}>
        <label htmlFor="investment">Valor do Investimento:</label>
        <input
          type="number"
          id="investment"
          value={investment}
          onChange={handleInvestmentChange}
        />
      </div>
      <div className={styles.cryptoSelect}>
        <label htmlFor="crypto">Escolha a Criptomoeda:</label>
        <select id="crypto" value={crypto} onChange={handleCryptoChange}>
          <option value="BTC">Bitcoin (BTC)</option>
          <option value="ETH">Ethereum (ETH)</option>
          <option value="SOL">Solana (SOL)</option>
        </select>
      </div>
      <div className={styles.simulationResult}>
        <h3>Resultado da Simulação</h3>
        <p>Investimento inicial: R${investment}</p>
        <p>Criptomoeda escolhida: {crypto}</p>
        <p>Potencial de retorno: {crypto === 'BTC' ? investment * 1.2 : crypto === 'ETH' ? investment * 1.15 : investment * 1.3}</p>
      </div>
      <hr className={styles.linha} />
    </section>
  );
}

export default CryptoSimulation;
