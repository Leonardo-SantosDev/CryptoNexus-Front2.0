import { useState } from "react";
import styles from "../styles/footer.module.css";

export function Footer() {
  const [openItem, setOpenItem] = useState(null);

  const toggleItem = (index) => {
    setOpenItem(openItem === index ? null : index);
  };

  const items = [
    {
      title: "Suporte e Parcerias",
      content:
        "Entre em contato por e-mail, telefone ou redes sociais para suporte e oportunidades de parceria.",
    },
    {
      title: "Perguntas Frequentes (FAQ)",
      content:
        "Encontre respostas para as dúvidas mais comuns sobre o uso do sistema Nexus.",
    },
    {
      title: "Canal Aberto para Feedback",
      content:
        "Envie suas sugestões e ideias para nos ajudar a melhorar continuamente.",
    },
  ];

  return (
    <section className={styles.footer}>
      <h2 className={styles.title}>
        Fale Conosco: <span>Sua Opinião Importa!</span>
      </h2>
      <div className={styles.accordion}>
        {items.map((item, index) => (
          <div key={index} className={styles.item}>
            <button className={styles.toggle} onClick={() => toggleItem(index)}>
              <span className={styles.icon}>
                {openItem === index ? "\u25BC" : "\u25B6"}
              </span>
              {item.title}
            </button>
            {openItem === index && (
              <div className={styles.content}>
                <p>{item.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
      <p className={styles.note}>
        Estamos sempre à disposição para ouvir você e aprimorar nossos serviços.
      </p>
      <hr className={styles.linha} />
    </section>
  );
}
