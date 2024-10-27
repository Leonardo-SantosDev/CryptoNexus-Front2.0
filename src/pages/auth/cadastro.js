import React, { useState } from 'react';
import { Container, Card, Form, Button, Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faAddressCard, faEye, faEyeSlash, faTimes } from '@fortawesome/free-solid-svg-icons';
import '../../styles/Cadastro.scss'; // Importar um arquivo CSS separado para estilos
import InputMask from 'react-input-mask'; // Importação da biblioteca de máscara

const RegistrationForm = () => {
  const [showModal, setShowModal] = useState(false); // Estado para controlar a exibição do modal
  const [modalContent, setModalContent] = useState(''); // Estado para definir o conteúdo do modal
  const [showPassword, setShowPassword] = useState(false); // Estado para controlar a visibilidade da senha
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // Estado para controlar a visibilidade da senha de confirmação

  // Função para abrir o modal com o conteúdo correto (termos ou política)
  const handleShowModal = (content) => {
    setModalContent(content);
    setShowModal(true);
  };

  // Função para fechar o modal
  const handleCloseModal = () => setShowModal(false);

  // Função para redirecionar para a página inicial
  const handleGoBack = () => {
    window.location.href = '/'; // Ajuste esta linha conforme necessário
  };

  // Função para alternar a visibilidade da senha
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Função para alternar a visibilidade da senha de confirmação
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
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
        <Card.Title className="text-center">CryptoNexus-Cadastro</Card.Title>
        <Form action="/submit" method="POST">
          <Form.Group controlId="name" className="mb-3">
            <Form.Label>Nome e sobrenome</Form.Label>
            <div className="input-icon d-flex justify-content-center">
              <Form.Control 
                type="text" 
                placeholder="Ex: Pedro nascimento" 
                required 
                className="rounded-input" 
                style={{ width: '60%' }} // Ajusta a largura do input
              />
              <FontAwesomeIcon icon={faUser} className="position-absolute icon-input" />
            </div>
          </Form.Group>
  
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
  
          <Form.Group controlId="cpf" className="mb-3">
            <Form.Label>CPF</Form.Label>
            <div className="input-icon d-flex justify-content-center">
              {/* O componente InputMask é usado aqui para aplicar a máscara de CPF */}
              <InputMask 
                mask="999.999.999-99" // Define a máscara para o formato do CPF
                placeholder="999.764.842-98" 
                required 
                className="form-control rounded-input" 
                style={{ width: '60%' }} // Ajusta a largura do input
              />
              <FontAwesomeIcon icon={faAddressCard} className="position-absolute icon-input" />
            </div>
          </Form.Group>
  
          <Form.Group controlId="password" className="mb-3">
            <Form.Label>Senha</Form.Label>
            <div className="input-icon d-flex justify-content-center">
              <Form.Control 
                type={showPassword ? 'text' : 'password'} // Altera entre 'text' e 'password'
                placeholder="•••••" 
                required 
                className="rounded-input" 
                style={{ width: '60%' }} // Ajusta a largura do input
              />
              <FontAwesomeIcon 
                icon={showPassword ? faEyeSlash : faEye} // Altera o ícone dependendo do estado
                className="position-absolute icon-input" 
                onClick={togglePasswordVisibility} // Alterna a visibilidade
                style={{ cursor: 'pointer' }} 
              />
            </div>
          </Form.Group>
  
          <Form.Group controlId="confirmPassword" className="mb-3">
            <Form.Label>Confirmar Senha</Form.Label>
            <div className="input-icon d-flex justify-content-center">
              <Form.Control 
                type={showConfirmPassword ? 'text' : 'password'} // Altera entre 'text' e 'password'
                placeholder="•••••" 
                required 
                className="rounded-input" 
                style={{ width: '60%' }} // Ajusta a largura do input
              />
              <FontAwesomeIcon 
                icon={showConfirmPassword ? faEyeSlash : faEye} // Altera o ícone dependendo do estado
                className="position-absolute icon-input" 
                onClick={toggleConfirmPasswordVisibility} // Alterna a visibilidade
                style={{ cursor: 'pointer' }} 
              />
            </div>
          </Form.Group>
  
          <Form.Group className="mb-3 terms-container">
            <Form.Check 
              type="checkbox" 
              id="terms" 
              label={
                <>
                  Aceito os <span onClick={() => handleShowModal('terms')} style={{ cursor: 'pointer', color: '#811dc3' }}>termos e condições</span> | <span onClick={() => handleShowModal('privacy')} style={{ cursor: 'pointer', color: '#811dc3' }}>política de privacidade</span>
                </>
              }
              required 
            />
          </Form.Group>
  
          <Button variant="primary" type="submit" className="w-70">
            Finalizar cadastro
          </Button>
  
          <div className="text-center mt-3">
            <a href="../auth/login.js">Ou iniciar sessão</a>
          </div>
        </Form>
      </Card>
  
            {/* Modal */}
            <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>{modalContent === 'terms' ? 'Termos e Condições' : 'Política de Privacidade'}</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ marginTop: '20px' }}>
          {modalContent === 'terms' ? (
            <div>
              <h5>Termos e Condições</h5>
              <p>1. Aceitação dos Termos<br />
              Ao acessar e utilizar a plataforma CryptoNexus, você concorda em cumprir e estar sujeito a estes Termos e Condições. Se você não concorda com algum dos termos, por favor, não utilize a plataforma.</p>
  
              <p>2. Alterações aos Termos<br />
              O CryptoNexus reserva-se o direito de modificar estes termos a qualquer momento. Quaisquer alterações serão publicadas nesta página e sua continuação no uso da plataforma após tais modificações constituirá sua aceitação dos novos termos.</p>
  
              <p>3. Uso da Plataforma<br />
              O CryptoNexus é uma plataforma destinada a educar os usuários sobre investimentos em criptomoedas, simulações de transações e troca de moedas. Você concorda em usar a plataforma apenas para fins legais e de acordo com as leis aplicáveis.</p>
  
              <p>4. Registro de Conta<br />
              Para acessar determinados recursos do CryptoNexus, pode ser necessário criar uma conta. Ao criar uma conta, você concorda em fornecer informações precisas e completas, bem como em manter suas informações atualizadas. Você é responsável por manter a confidencialidade da sua senha e por todas as atividades que ocorrem em sua conta.</p>
  
              <p>5. Limitação de Responsabilidade<br />
              O CryptoNexus não será responsável por quaisquer danos diretos, indiretos, incidentais ou consequenciais que possam surgir do uso ou da incapacidade de usar a plataforma. As informações fornecidas no CryptoNexus não constituem aconselhamento financeiro e não garantimos resultados específicos.</p>
  
              <p>6. Propriedade Intelectual<br />
              Todos os conteúdos e materiais disponíveis na plataforma CryptoNexus, incluindo, mas não se limitando a, texto, gráficos, logos e software, são propriedade do CryptoNexus ou de seus licenciadores. Você concorda em não reproduzir, duplicar, copiar, vender ou explorar qualquer parte da plataforma sem a permissão expressa por escrito do CryptoNexus.</p>
  
              <p>7. Legislação Aplicável<br />
              Estes Termos e Condições são regidos pelas leis do [seu país ou estado]. Qualquer disputa relacionada a estes termos deverá ser resolvida nos tribunais competentes da [localização do seu país ou estado].</p>
  
              <p>8. Contato<br />
              Se você tiver alguma dúvida sobre estes Termos e Condições, entre em contato conosco através do e-mail [cryptonexusinvestimentos@gmail.com].</p>
            </div>
          ) : (
            <div>
              <h5>Política de Privacidade</h5>
              <p>A política de privacidade do CryptoNexus descreve como coletamos, usamos e protegemos as informações dos usuários. Ao utilizar a plataforma, você concorda com a coleta e uso de suas informações de acordo com esta política.</p>
  
              <p>1. Informações que Coletamos<br />
              Coletamos informações pessoais, como nome, e-mail e CPF, quando você se registra na plataforma. Também podemos coletar informações não pessoais, como dados de uso e cookies, para melhorar sua experiência.</p>
  
              <p>2. Uso das Informações<br />
              Utilizamos suas informações para fornecer e melhorar nossos serviços, entrar em contato com você sobre sua conta e enviar informações relevantes sobre investimentos em criptomoedas.</p>
  
              <p>3. Compartilhamento de Informações<br />
              Não compartilhamos suas informações pessoais com terceiros sem sua permissão, exceto quando exigido por lei ou para proteger nossos direitos.</p>
  
              <p>4. Segurança das Informações<br />
              Tomamos medidas razoáveis para proteger suas informações pessoais contra acesso não autorizado, uso indevido ou divulgação. No entanto, nenhuma transmissão de dados pela Internet pode ser garantida como 100% segura.</p>
  
              <p>5. Seus Direitos<br />
              Você tem o direito de acessar, corrigir ou excluir suas informações pessoais a qualquer momento. Entre em contato conosco se desejar exercer esses direitos.</p>
  
              <p>6. Alterações na Política<br />
              Reservamo-nos o direito de modificar esta política de privacidade a qualquer momento. Quaisquer alterações serão publicadas nesta página e sua continuação no uso da plataforma após tais modificações constituirá sua aceitação da nova política.</p>
  
              <p>7. Contato<br />
              Se você tiver dúvidas sobre nossa política de privacidade, entre em contato conosco através do e-mail [cryptonexusinvestimentos@gmail.com].</p>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default RegistrationForm;
