import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaTimes, FaEye, FaEyeSlash } from "react-icons/fa";
import styles from "../../styles/login.module.css";

export function Login() {
  const [cpf, setCpf] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleClose = () => navigate("/");
  const toggleModal = () => setShowModal(!showModal);

  // Função para aplicar a máscara de CPF
  const handleCpfChange = (e) => {
    let value = e.target.value.replace(/\D/g, "");
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    setCpf(value);
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <button className={styles.closeButton} onClick={handleClose} aria-label="Fechar">
          <FaTimes size={20} />
        </button>

        <h1 className={styles.title}>CryptoNexus - faça seu login!</h1>

        <input
          type="text"
          placeholder="CPF"
          value={cpf}
          onChange={handleCpfChange}
          className={styles.input}
          maxLength={14}
        />

        <div className={styles.passwordContainer}>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.input}
          />
          <button
            type="button"
            className={styles.eyeButton}
            onClick={() => setShowPassword(!showPassword)}
            aria-label="Mostrar ou ocultar senha"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>

        <button className={styles.forgotPassword} onClick={toggleModal}>
          Esqueci minha senha
        </button>

        <button className={styles.loginButton}>Acessar conta</button>

        <footer className={styles.footer}>
          <p>&copy; 2025 CryptoNexus - Todos os direitos reservados.</p>
          <p>
            Dúvidas? Contate:{" "}
            <a href="mailto:support@cryptoNexus.com">support@cryptoNexus.com</a>
          </p>
        </footer>
      </div>

      {showModal && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <h2>Redefinir senha</h2>
            <p>Digite seu e-mail ou CPF para redefinir a senha:</p>
            <input type="text" placeholder="E-mail ou CPF" className={styles.input} />

            <div className={styles.modalButtons}>
              <button onClick={toggleModal} className={styles.cancelButton}>
                Cancelar
              </button>
              <button className={styles.confirmButton}>Enviar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
