import React, { useState } from "react";
import styles from "../styles/quizInterativo.module.css";

const perguntas = [
  {
    pergunta: "Você já possui uma reserva de emergência?",
    opcoes: ["Sim", "Não"]
  },
  {
    pergunta: "Você entende os riscos das criptomoedas?",
    opcoes: ["Sim", "Não"]
  },
  {
    pergunta: "Você já investe em outros ativos (ações, fundos)?",
    opcoes: ["Sim", "Não"]
  }
];

const QuizInterativo = () => {
  const [respostas, setRespostas] = useState([]);
  const [etapa, setEtapa] = useState(0);

  const handleResposta = (resposta) => {
    const novasRespostas = [...respostas, resposta];
    setRespostas(novasRespostas);
    if (etapa + 1 < perguntas.length) {
      setEtapa(etapa + 1);
    } else {
      alert("Obrigado por participar do quiz! Em breve, traremos recomendações personalizadas.");
    }
  };

  return (
    <section className={styles.quizSection}>
      <h2 className={styles.sectionTitle}>Você está pronto para investir?</h2>
      {etapa < perguntas.length && (
        <div className={styles.perguntaCard}>
          <h3>{perguntas[etapa].pergunta}</h3>
          <div className={styles.opcoes}>
            {perguntas[etapa].opcoes.map((opcao, index) => (
              <button key={index} onClick={() => handleResposta(opcao)}>{opcao}</button>
            ))}
          </div>
        </div>
      )}
      <hr className={styles.linha} />
    </section>
  );
};

export default QuizInterativo;
