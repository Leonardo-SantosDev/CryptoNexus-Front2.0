// import React, { useState } from "react";
// import styles from "../styles/alertasMercado.module.css";

// const AlertasMercado = () => {
//   const [alertas, setAlertas] = useState([
//     {
//       titulo: "Bitcoin atinge nova máxima semanal!",
//       descricao: "O BTC superou os US$ 65.000 nesta manhã, impulsionado por demanda institucional."
//     },
//     {
//       titulo: "Ethereum com alta de 10%",
//       descricao: "O ETH segue valorizando com expectativas de atualizações na rede."
//     },
//     {
//       titulo: "Mercado reage a decisão do FED",
//       descricao: "Investidores observam com cautela o impacto da política monetária americana."
//     }
//   ]);

//   return (
//     <section className={styles.alertasSection}>
//       <h2 className={styles.sectionTitle}>Alertas de Mercado</h2>
//       <div className={styles.alertasContainer}>
//         {alertas.map((item, index) => (
//           <div className={styles.alertaCard} key={index}>
//             <h3>{item.titulo}</h3>
//             <p>{item.descricao}</p>
//           </div>
//         ))}
//       </div>
//       <hr className={styles.linha} />
//     </section>
//   );
// };


// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import styles from "../styles/alertasMercado.module.css";

// const AlertasMercado = () => {
//   const [alertas, setAlertas] = useState([]);

//   useEffect(() => {
//     async function fetchAlertas() {
//       try {
//         const response = await axios.get(
//           "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd"
//         );
//         const moedas = response.data;

//         const novosAlertas = moedas.map((item) => ({
//           titulo: `Tendência: ${item.name}`,
//           descricao: `Preço Atual: $${item.current_price.toFixed(2)} USD`,
//           imagem: item.image || "/default-coin.png" // usa padrão se não tiver imagem
//         }));

//         setAlertas(novosAlertas);
//       } catch (error) {
//         console.error("Erro ao buscar alertas de mercado:", error);
//       }
//     }

//     fetchAlertas();
//     const interval = setInterval(fetchAlertas, 60000); 

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className={styles.alertasSection}>
//       <h2 className={styles.sectionTitle}>Alertas de Mercado</h2>
//       <div className={styles.alertasContainer}>
//         {alertas.map((item, index) => (
//           <div className={styles.alertaCard} key={index}>
//             <img 
//               src={item.imagem} 
//               alt={item.titulo} 
//               className={styles.alertaImagem} 
//               onError={(e) => {
//                 e.target.onerror = null;
//                 e.target.src = "/default-coin.png"; // Se imagem der erro, troca na hora
//               }}
//             />
//             <h3>{item.titulo}</h3>
//             <p>{item.descricao}</p>
//           </div>
//         ))}
//       </div>
//       <hr className={styles.linha} />
//     </section>
//   );
// };

// export default AlertasMercado;




import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "../styles/alertasMercado.module.css";

const AlertasMercado = () => {
  const [alertas, setAlertas] = useState([]);  // Guarda todas as moedas
  const [paginaAtual, setPaginaAtual] = useState(0);  // Controle da página atual

  // Quantidade de moedas exibidas por vez
  const moedasPorPagina = 10;

  // Função para dividir as moedas em grupos de 10
  const paginarAlertas = () => {
    const inicio = paginaAtual * moedasPorPagina;
    const fim = inicio + moedasPorPagina;
    return alertas.slice(inicio, fim); // Retorna o pedaço da lista de moedas baseado na página
  };

  useEffect(() => {
    async function fetchAlertas() {
      try {
        console.log("Requisitando dados da API...");
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd"
        );
        console.log("Resposta da API:", response.data); // Log para ver a resposta da API

        const moedas = response.data;

        const novosAlertas = moedas.map((item) => ({
          titulo: `Tendência: ${item.name}`,
          descricao: `Preço Atual: $${item.current_price.toFixed(2)} USD`,
          imagem: item.image || "/default-coin.png", // usa padrão se não tiver imagem
        }));

        setAlertas(novosAlertas);
        console.log("Alertas atualizados:", novosAlertas); // Log para verificar os alertas processados
      } catch (error) {
        console.error("Erro ao buscar alertas de mercado:", error);
      }
    }

    fetchAlertas();
    const interval = setInterval(() => {
      console.log("Atualizando dados...");
      fetchAlertas(); // Recarrega os dados a cada 60 segundos
    }, 60000); // Atualiza a cada 60 segundos

    return () => clearInterval(interval); // Limpa o intervalo quando o componente for desmontado
  }, []);

  // Função para ir para a próxima página
  const proximaPagina = () => {
    if ((paginaAtual + 1) * moedasPorPagina < alertas.length) {
      setPaginaAtual(paginaAtual + 1);
    }
  };

  // Função para voltar para a página anterior
  const paginaAnterior = () => {
    if (paginaAtual > 0) {
      setPaginaAtual(paginaAtual - 1);
    }
  };

  return (
    <section className={styles.alertasSection}>
      <h2 className={styles.sectionTitle}>Alertas de Mercado</h2>
      <div className={styles.alertasContainer}>
        {paginarAlertas().map((item, index) => (
          <div className={styles.alertaCard} key={index}>
            <img
              src={item.imagem}
              alt={item.titulo}
              className={styles.alertaImagem}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "/default-coin.png"; // Se imagem der erro, troca na hora
              }}
            />
            <h3>{item.titulo}</h3>
            <p>{item.descricao}</p>
          </div>
        ))}
      </div>
      <div className={styles.botoesCarrossel}>
        <button
          className={styles.botaoCarrossel}
          onClick={paginaAnterior}
          disabled={paginaAtual === 0}
        >
          &lt; {/* Seta para o lado esquerdo */}
        </button>
        <button
          className={styles.botaoCarrossel}
          onClick={proximaPagina}
          disabled={(paginaAtual + 1) * moedasPorPagina >= alertas.length}
        >
          &gt; {/* Seta para o lado direito */}
        </button>
      </div>
      <hr className={styles.linha} />
    </section>
  );
};

export default AlertasMercado;
