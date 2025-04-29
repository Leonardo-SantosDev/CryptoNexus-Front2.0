import { useState } from "react";
import styles from "../../styles/cadastro.module.css";
import { FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


const paises = [
  "Afeganistão", "África do Sul", "Alemanha", "Arábia Saudita", "Argentina", "Austrália", "Áustria", "Bélgica", "Bolívia", "Brasil",
  "Canadá", "Chile", "China", "Colômbia", "Coreia do Sul", "Cuba", "Dinamarca", "Egito", "Emirados Árabes Unidos", "Equador", "Espanha",
  "Estados Unidos", "Filipinas", "Finlândia", "França", "Grécia", "Guatemala", "Haiti", "Holanda", "Honduras", "Índia", "Indonésia",
  "Inglaterra", "Irlanda", "Islândia", "Israel", "Itália", "Japão", "Jordânia", "Líbano", "Luxemburgo", "México", "Moçambique", "Nigéria",
  "Noruega", "Nova Zelândia", "Panamá", "Paraguai", "Peru", "Polônia", "Portugal", "Quênia", "Reino Unido", "República Dominicana",
  "Rússia", "Suécia", "Suíça", "Tailândia", "Turquia", "Ucrânia", "Uruguai", "Venezuela", "Vietnã", "Zimbábue",
];

export function Cadastro() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: "",
    pais: "",
    cpf: "",
    nascimento: "",
    telefone: "",
    cep: "",
    estado: "",
    cidade: "",
    endereco: "",
    numero: "",
    bairro: "",
    senha: "",
  });
  const [errors, setErrors] = useState({
    step1: "",
    step2: "",
    step3: "",
    step4: "",
    step5: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCpfChange = (e) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length <= 11) {
      value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{1})/, "$1.$2.$3-$4");
    }
    setFormData({ ...formData, cpf: value });
  };

  const handleTelefoneChange = (e) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length <= 11) {
      value = value.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
    }
    setFormData({ ...formData, telefone: value });
  };

  const handleCepChange = (e) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length <= 8) {
      value = value.replace(/(\d{5})(\d{3})/, "$1-$2");
    }
    setFormData({ ...formData, cep: value });
  };

  const handleDateChange = (e) => {
    const { value } = e.target;
    if (/^\d{4}-\d{2}-\d{2}$/.test(value) || value === "") {
      setFormData({ ...formData, nascimento: value });
    }
  };

  const validateStep = () => {
    if (step === 1) {
      if (!formData.email || !formData.pais) {
        setErrors({
          ...errors,
          step1:
            "Para prosseguir para a etapa 2, você deve preencher todos os campos.",
        });
        return false;
      }
    }
    if (step === 2) {
      if (!formData.cpf || !formData.nascimento) {
        setErrors({
          ...errors,
          step2:
            "Para prosseguir para a etapa 3, você deve preencher todos os campos.",
        });
        return false;
      }
    }
    if (step === 3) {
      if (!formData.telefone || !formData.cep) {
        setErrors({
          ...errors,
          step3:
            "Para prosseguir para a etapa 4, você deve preencher todos os campos.",
        });
        return false;
      }
    }
    if (step === 4) {
      if (!formData.estado || !formData.cidade) {
        setErrors({
          ...errors,
          step4:
            "Para prosseguir para a etapa 5, você deve preencher todos os campos.",
        });
        return false;
      }
    }
    if (step === 5) {
      if (
        !formData.endereco ||
        !formData.numero ||
        !formData.bairro ||
        !formData.senha
      ) {
        setErrors({
          ...errors,
          step5: "Para finalizar, você deve preencher todos os campos.",
        });
        return false;
      }
    }
    setErrors({ ...errors, [`step${step}`]: "" });
    return true;
  };

  const nextStep = () => {
    if (validateStep()) {
      setStep(step + 1);
    }
  };

  const prevStep = () => setStep(step - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const navigate = useNavigate();

  return (
    <div className={styles.cadastroBackground}>
      <div className={styles.cardCadastro}>
        <button
          className={styles.closeButton}
          onClick={() => navigate("/")}
          aria-label="Fechar"
        >
          <FaTimes size={20} />
        </button>

        <form onSubmit={handleSubmit} className={styles.formCadastro}>
        <p className={styles.etapaTexto}>Etapa {step.toString().padStart(2, '0')} de 05</p>
          <h1 className={styles.titulo}>CryptoNexus  - Crie sua conta!</h1>
          {step === 1 && (
            <>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className={styles.input}
                required
              />
              <select
                name="pais"
                value={formData.pais}
                onChange={handleChange}
                className={styles.input}
                required
              >
                <option value="">Selecione o país</option>
                {paises.map((pais, index) => (
                  <option key={index} value={pais}>
                    {pais}
                  </option>
                ))}
              </select>
              {errors.step1 && (
                <p className={styles.errorMessage}>{errors.step1}</p>
              )}
            </>
          )}

          {step === 2 && (
            <>
              <input
                type="text"
                name="cpf"
                placeholder="CPF"
                value={formData.cpf}
                onChange={handleCpfChange}
                className={styles.input}
                maxLength="14"
                required
              />
              <input
                type="date"
                name="nascimento"
                placeholder="Data de Nascimento"
                value={formData.nascimento}
                onChange={handleDateChange}
                className={styles.input}
                required
              />
              {errors.step2 && (
                <p className={styles.errorMessage}>{errors.step2}</p>
              )}
            </>
          )}

          {step === 3 && (
            <>
              <input
                type="tel"
                name="telefone"
                placeholder="Telefone"
                value={formData.telefone}
                onChange={handleTelefoneChange}
                className={styles.input}
                maxLength="15"
                required
              />
              <input
                type="text"
                name="cep"
                placeholder="CEP"
                value={formData.cep}
                onChange={handleCepChange}
                className={styles.input}
                maxLength="9"
                required
              />
              {errors.step3 && (
                <p className={styles.errorMessage}>{errors.step3}</p>
              )}
            </>
          )}

          {step === 4 && (
            <>
              <input
                type="text"
                name="estado"
                placeholder="Estado"
                value={formData.estado}
                onChange={handleChange}
                className={styles.input}
                required
              />
              <input
                type="text"
                name="cidade"
                placeholder="Cidade"
                value={formData.cidade}
                onChange={handleChange}
                className={styles.input}
                required
              />
              {errors.step4 && (
                <p className={styles.errorMessage}>{errors.step4}</p>
              )}
            </>
          )}

          {step === 5 && (
            <>
              <input
                type="text"
                name="endereco"
                placeholder="Endereço"
                value={formData.endereco}
                onChange={handleChange}
                className={styles.input}
                required
              />
              <input
                type="text"
                name="numero"
                placeholder="Número"
                value={formData.numero}
                onChange={handleChange}
                className={styles.input}
                required
              />
              <input
                type="text"
                name="bairro"
                placeholder="Bairro"
                value={formData.bairro}
                onChange={handleChange}
                className={styles.input}
                required
              />
              <input
                type="password"
                name="senha"
                placeholder="Senha"
                value={formData.senha}
                onChange={handleChange}
                className={styles.input}
                required
              />
              {errors.step5 && (
                <p className={styles.errorMessage}>{errors.step5}</p>
              )}
            </>
          )}

          <div className={styles.buttons}>
            {step > 1 && (
              <button
                type="button"
                onClick={prevStep}
                className={styles.btnVoltar}
              >
                Voltar
              </button>
            )}
            {step < 5 ? (
              <button
                type="button"
                onClick={nextStep}
                className={styles.btnProximo}
              >
                Próxima
              </button>
            ) : (
              <button type="submit" className={styles.btnFinalizar}>
                Finalizar
              </button>
            )}
          </div>
        </form>
        <footer className={styles.footer}>
          <p>&copy; 2025 CryptoNexus - Todos os direitos reservados.</p>
          <p>
            Se tiver dúvidas, entre em contato conosco pelo e-mail:{" "}
            <a href="mailto:support@cryptoNexus.com">support@cryptoNexus.com</a>
          </p>
        </footer>
      </div>
    </div>
  );
}
