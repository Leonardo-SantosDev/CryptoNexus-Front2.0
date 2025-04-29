import React from 'react';
import styles from '../styles/educacaoFinanceira.module.css';

const EducacaoFinanceira = () => {
  return (
    <section className={styles.financeSection}>
      <h2 className={styles.sectionTitle}>Educação Financeira: Segurança & Boas Práticas</h2>
      <div className={styles.tipsContainer}>
        <div className={styles.tipCard}>
          <h3>1. Nunca compartilhe suas senhas</h3>
          <p>Mantenha suas credenciais em segurança e evite armazená-las em locais desprotegidos.</p>
        </div>
        <div className={styles.tipCard}>
          <h3>2. Use autenticação de dois fatores</h3>
          <p>Adicione uma camada extra de proteção usando 2FA em todas as plataformas de criptomoeda.</p>
        </div>
        <div className={styles.tipCard}>
          <h3>3. Estude antes de investir</h3>
          <p>Evite decisões impulsivas. Entenda o funcionamento do mercado e os riscos envolvidos.</p>
        </div>
        <div className={styles.tipCard}>
          <h3>4. Desconfie de promessas de lucros fáceis</h3>
          <p>Golpistas usam táticas de ganho rápido. Sempre verifique a origem das informações.</p>
        </div>
      </div>
      <hr className={styles.linha} />
    </section>
  );
};

export default EducacaoFinanceira;
