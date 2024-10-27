import React, { useState } from 'react';
import { Container, Card, Form, Button, Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faEnvelope, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'; // Importar os ícones para o olho
import { faGoogle, faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons';

import '../../styles/Login.scss'

const LoginScreen = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState('');
  const [showPassword, setShowPassword] = useState(false); // Estado para controlar o tipo de input de senha

  const handleGoBack = () => {
    // Lógica para voltar
  };

  const handleShowModal = (content) => {
    setModalContent(content);
    setShowModal(true);
  };

  const handleCloseModal = () => setShowModal(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState); // Alterna entre mostrar/ocultar senha
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Card style={{ width: '30rem', borderRadius: '20px' }} className="p-4 position-relative rounded-card">
        <FontAwesomeIcon 
          icon={faTimes} 
          className="position-absolute" 
          style={{ right: '15px', top: '15px', cursor: 'pointer' }} 
          onClick={handleGoBack} 
        />
        <Card.Title className="text-center">CryptoNexus - Login</Card.Title>
        
        <Form action="/submit" method="POST">
          <Form.Group controlId="email" className="mb-3">
            <Form.Label>E-mail</Form.Label>
            <div className="input-icon d-flex justify-content-center">
              <Form.Control 
                type="email" 
                placeholder="Ex: cryptonxs@gmail.com" 
                required 
                className="rounded-input" 
                style={{ width: '60%' }} // Ajusta a largura do input
              />
              <FontAwesomeIcon icon={faEnvelope} className="position-absolute icon-input" />
            </div>
          </Form.Group>

          <Form.Group controlId="password" className="mb-3">
            <Form.Label>Senha</Form.Label>
            <div className="input-icon d-flex justify-content-center">
              <Form.Control 
                type={showPassword ? 'text' : 'password'} // Alterna entre "password" e "text"
                placeholder="•••••" 
                required 
                className="rounded-input" 
                style={{ width: '60%' }} // Ajusta a largura do input
              />
              <FontAwesomeIcon 
                icon={showPassword ? faEyeSlash : faEye} // Alterna o ícone de olho
                className="position-absolute icon-input" 
                onClick={togglePasswordVisibility} // Adiciona a função de clique para alternar
                style={{ cursor: 'pointer' }} // Define o cursor de clique
              />
            </div>
          </Form.Group>

          <div className="text-center mb-3">
            <Button variant="link" onClick={() => handleShowModal('forgotPassword')}>
              Esqueceu sua senha?
            </Button>
          </div>

          <Button variant="primary" type="submit" className="w-70 mb-3">
            Fazer login
          </Button>

          <div className="text-center mb-3">
            <span>Ou faça login com:</span>
          </div>

          <div className="d-flex justify-content-around mb-3">
            <Button variant="light" onClick={() => {}} className="d-flex align-items-center">
              <FontAwesomeIcon icon={faGoogle} className="me-2" />
              Google
            </Button>
            <Button variant="light" onClick={() => {}} className="d-flex align-items-center">
              <FontAwesomeIcon icon={faFacebook} className="me-2" />
              Facebook
            </Button>
            <Button variant="light" onClick={() => {}} className="d-flex align-items-center">
              <FontAwesomeIcon icon={faGithub} className="me-2" />
              GitHub
            </Button>
          </div>

          <div className="text-center">
            <span>Ainda não tem uma conta? <a href="../auth/signup.js">Cadastre-se</a></span>
          </div>
        </Form>
      </Card>

      {/* Modal para recuperação de senha */}
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Recuperar Senha</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Preencha o campo abaixo com seu e-mail e clique em recuperar senha.</p>
          <Form.Group controlId="recoverEmail">
            <Form.Control 
              type="email" 
              placeholder="Ex: cryptonxs@gmail.com" 
              required 
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleCloseModal}>
            Cancelar
          </Button>
          <Button onClick={() => {}}>
            Recuperar Senha
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default LoginScreen;
