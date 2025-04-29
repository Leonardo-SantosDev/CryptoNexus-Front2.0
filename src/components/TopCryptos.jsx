import { useState } from "react";
import { FaTimes } from 'react-icons/fa';
import styles from "../styles/topcryptos.module.css";

// imports das imgs

import bitcoinImg from "../assets/img/Bitcoin.png";
import ethereumImg from "../assets/img/Ether.png";
import binanceImg from "../assets/img/Binance.png";
import solanaImg from "../assets/img/Solana.png";
import cardanoImg from "../assets/img/Cardano.png";


const criptos = [
  {
    nome: "Bitcoin (BTC)",
    descricao: "O Bitcoin é a primeira criptomoeda do mundo, criada em 2009 por um autor anônimo chamado Satoshi Nakamoto.",
    historia: "O Bitcoin surgiu como resposta à crise financeira de 2008, com o objetivo de oferecer um sistema financeiro descentralizado e seguro.",
    imagem: bitcoinImg,
  },
  {
    nome: "Ethereum (ETH)",
    descricao: "O Ethereum introduziu contratos inteligentes e permitiu a criação de aplicações descentralizadas.",
    historia: "Lançado em 2015 por Vitalik Buterin, o Ethereum revolucionou o mercado com sua blockchain programável.",
    imagem: ethereumImg,
  },
  {
    nome: "Binance Coin (BNB)",
    descricao: "BNB é o token nativo da exchange Binance, usado para taxas e benefícios na plataforma.",
    historia: "Criado para reduzir taxas de transação, o BNB se tornou um dos principais ativos no ecossistema da Binance.",
    imagem: binanceImg,
  },
  {
    nome: "Solana (SOL)",
    descricao: "Solana é uma blockchain conhecida pela alta velocidade e baixas taxas.",
    historia: "Com arquitetura única chamada Proof of History, a Solana oferece escalabilidade sem abrir mão da segurança.",
    imagem: solanaImg,
  },
  {
    nome: "Cardano (ADA)",
    descricao: "Cardano é uma blockchain com foco acadêmico e abordagem científica para resolver problemas de escalabilidade.",
    historia: "Desenvolvida por uma equipe liderada por Charles Hoskinson, a Cardano é baseada em revisões por pares e pesquisa formal.",
    imagem: cardanoImg,
  },
];


export default function TopCriptos() {
  const [modalAberto, setModalAberto] = useState(false);
  const [criptoSelecionada, setCriptoSelecionada] = useState(null);

  const abrirModal = (cripto) => {
    setCriptoSelecionada(cripto);
    setModalAberto(true);
  };

  const fecharModal = () => {
    setModalAberto(false);
    setCriptoSelecionada(null);
  };

  return (
    <section className={styles.containerCriptos}>
      <h2 className={styles.tituloCripto}>Top 5 Criptomoedas em Destaque</h2>

      <div className={styles.cardsWrapper}>
        {criptos.map((cripto, index) => (
          <div key={index} className={styles.cardCripto}>
            <img
              src={cripto.imagem}
              alt={`Logo da ${cripto.nome}`}
              className={styles.criptoImage}
            />
            <h3>{cripto.nome}</h3>
            <p>{cripto.descricao}</p>
            <button
              className={styles.botaoCripto}
              onClick={() => abrirModal(cripto)}
            >
              Saiba mais sobre essa Cripto
            </button>
          </div>
        ))}
      </div>

      {modalAberto && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <button
              className={styles.closeButton}
              onClick={fecharModal}
              aria-label="Fechar"
            >
              <FaTimes size={20} />
            </button>
            <h3>{criptoSelecionada.nome}</h3>
            <p>{criptoSelecionada.historia}</p>
          </div>
        </div>
      )}
      <hr className={styles.linha} />
    </section>
  );
}
