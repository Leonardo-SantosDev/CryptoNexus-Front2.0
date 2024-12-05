import React, { useState } from 'react';
import { Container, Card, Form, Button, Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faAddressCard, faEye, faEyeSlash, faTimes, faPhone } from '@fortawesome/free-solid-svg-icons';
import '../../styles/Cadastro.scss';
import InputMask from 'react-input-mask';

const FormularioCadastro = () => {
  const [mostrarModal, setMostrarModal] = useState(false);
  const [conteudoModal, setConteudoModal] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [mostrarConfirmarSenha, setMostrarConfirmarSenha] = useState(false);

  const abrirModal = (conteudo) => {
    setConteudoModal(conteudo);
    setMostrarModal(true);
  };

  const fecharModal = () => setMostrarModal(false);

  const voltarParaPaginaInicial = () => {
    window.location.href = '/';
  };

  const alternarVisibilidadeSenha = () => {
    setMostrarSenha(!mostrarSenha);
  };

  const alternarVisibilidadeConfirmarSenha = () => {
    setMostrarConfirmarSenha(!mostrarConfirmarSenha);
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Card style={{ width: '30rem', borderRadius: '20px' }} className="p-4 position-relative rounded-card">
        <FontAwesomeIcon 
          icon={faTimes} 
          className="position-absolute" 
          style={{ right: '15px', top: '15px', cursor: 'pointer' }} 
          onClick={voltarParaPaginaInicial} 
        />
        <Card.Title className="text-center">CryptoNexus-Cadastro</Card.Title>
        <Form action="/submit" method="POST">
          <Form.Group controlId="nome" className="mb-3">
            <Form.Label>Nome e sobrenome</Form.Label>
            <div className="input-icon d-flex justify-content-center">
              <Form.Control 
                type="text" 
                placeholder="Ex: Pedro nascimento" 
                required 
                className="rounded-input" 
                style={{ width: '60%' }} 
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
                style={{ width: '60%' }} 
              />
              <FontAwesomeIcon icon={faEnvelope} className="position-absolute icon-input" />
            </div>
          </Form.Group>
  
          <Form.Group controlId="Telefone" className="mb-3">
            <Form.Label>Telefone</Form.Label>
            <div className="input-icon d-flex justify-content-center">
              <InputMask 
                mask="(99) 99999-9999" 
                placeholder="(99) 9 9999-9999" 
                required 
                className="form-control rounded-input" 
                style={{ width: '60%' }} 
              />
              <FontAwesomeIcon icon={faPhone} className="position-absolute icon-input" />
            </div>
          </Form.Group>


          <Form.Group controlId="cpf" className="mb-3">
            <Form.Label>CPF</Form.Label>
            <div className="input-icon d-flex justify-content-center">
              <InputMask 
                mask="999.999.999-99" 
                placeholder="999.764.842-98" 
                required 
                className="form-control rounded-input" 
                style={{ width: '60%' }} 
              />
              <FontAwesomeIcon icon={faAddressCard} className="position-absolute icon-input" />
            </div>
          </Form.Group>
  
          <Form.Group controlId="senha" className="mb-3">
            <Form.Label>Senha</Form.Label>
            <div className="input-icon d-flex justify-content-center">
              <Form.Control 
                type={mostrarSenha ? 'text' : 'password'} 
                placeholder="•••••" 
                required 
                className="rounded-input" 
                style={{ width: '60%' }} 
              />
              <FontAwesomeIcon 
                icon={mostrarSenha ? faEyeSlash : faEye} 
                className="position-absolute icon-input" 
                onClick={alternarVisibilidadeSenha} 
                style={{ cursor: 'pointer' }} 
              />
            </div>
          </Form.Group>
  
          <Form.Group controlId="confirmarSenha" className="mb-3">
            <Form.Label>Confirmar Senha</Form.Label>
            <div className="input-icon d-flex justify-content-center">
              <Form.Control 
                type={mostrarConfirmarSenha ? 'text' : 'password'} 
                placeholder="•••••" 
                required 
                className="rounded-input" 
                style={{ width: '60%' }} 
              />
              <FontAwesomeIcon 
                icon={mostrarConfirmarSenha ? faEyeSlash : faEye} 
                className="position-absolute icon-input" 
                onClick={alternarVisibilidadeConfirmarSenha} 
                style={{ cursor: 'pointer' }} 
              />
            </div>
          </Form.Group>
  
          <Form.Group className="mb-3 terms-container">
            <Form.Check 
              type="checkbox" 
              id="termos" 
              label={(
                <>
                  Aceito os <span onClick={() => abrirModal('termos')} style={{ cursor: 'pointer', color: '#811dc3' }}>termos e condições</span> | <span onClick={() => abrirModal('privacidade')} style={{ cursor: 'pointer', color: '#811dc3' }}>política de privacidade</span>
                </>
              )}
              required 
            />
          </Form.Group>
  
          <Button type="submit" className="w-70 btn-cadastro" >
            Finalizar cadastro
          </Button>
  
          <div className="text-center mt-3">
            <a href="/Login">Ou iniciar sessão</a>
          </div>
        </Form>
      </Card>
  
      <Modal show={mostrarModal} onHide={fecharModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>{conteudoModal === 'termos' ? 'Termos e Condições' : 'Política de Privacidade'}</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ marginTop: '20px' }}>
          {conteudoModal === 'termos' ? (
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
              Coletamos informações pessoais, como nome, e-mail e número de CPF, para fornecer os serviços da plataforma. Também coletamos dados de navegação e transações para melhorar a experiência do usuário.</p>
  
              <p>2. Como Usamos as Informações<br />
              As informações coletadas são usadas para fornecer e melhorar os serviços da plataforma, como a criação de contas, simulações de transações e troca de moedas.</p>
  
              <p>3. Proteção das Informações<br />
              Tomamos medidas razoáveis para proteger as informações pessoais contra acesso não autorizado, alteração, divulgação ou destruição.</p>
  
              <p>4. Compartilhamento de Informações<br />
              Não compartilhamos suas informações pessoais com terceiros, exceto quando necessário para cumprir com as leis ou em resposta a uma solicitação legal.</p>
  
              <p>5. Seus Direitos<br />
              Você tem o direito de acessar, corrigir e excluir suas informações pessoais armazenadas conosco. Se desejar exercer esses direitos, entre em contato conosco através do e-mail [cryptonexusinvestimentos@gmail.com].</p>
            </div>
          )}
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default FormularioCadastro;
