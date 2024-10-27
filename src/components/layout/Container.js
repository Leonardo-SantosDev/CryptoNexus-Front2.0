import '../../styles/Container.scss'; //importando meu sass
import scrollToSection from '../scripts/scrollToSection'; 
import React, { useEffect, useState } from 'react';

// imports do boostrap
import { Card, Button, Modal, Row, Col } from 'react-bootstrap';
import { FaRocket, FaMoneyBillWave, FaLock, FaUsers, FaWallet, FaCoins, FaShieldAlt, FaChartLine } from 'react-icons/fa'

import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import GraphicsAnim from '../Anim/Graphics.lottie';

export default function Container() {
    const bitCoin = '../../img/bitcoin.png';
    const ether = '../../img/Ethereum.png';
    const liteCoin = '../../img/litecoin.png';


    // Estado para controlar a visibilidade dos modais
    const [showBitcoin, setShowBitcoin] = useState(false);
    const [showEthereum, setShowEthereum] = useState(false);
    const [showLitecoin, setShowLitecoin] = useState(false);

    useEffect(() => {
        // Adiciona o evento de clique para o botão de explorar
        document.getElementById('explorar-btn').addEventListener('click', () => {
            scrollToSection('crypto-info', 1500);  // Rolagem suave até a seção "crypto-info"
        });

        // Adiciona o evento de clique para o botão de criptomoedas
        document.getElementById('btnCrypto').addEventListener('click', () => {
            scrollToSection('coins-info', 1500);  // Rolagem suave até a seção "coins-info"
        });

        document.getElementById('btn-cryptoAgr').addEventListener('click', () => {
            scrollToSection('start-now', 1500);  // Rolagem suave até a seção "coins-info"
        });

        return () => {
            // Remove os event listeners ao desmontar o componente para evitar leaks de memória
            document.getElementById('explorar-btn').removeEventListener('click', () => scrollToSection('crypto-info', 1500));
            document.getElementById('btnCrypto').removeEventListener('click', () => scrollToSection('coins-info', 1500));
            document.getElementById('btn-cryptoAgr').removeEventListener('click', () => scrollToSection('start-now', 1500));
        };
    }, [])





    return (
        <>
            {/* sessão 1 */}
            <section className="hero" id="home-page">
                <div className="hero__left">
                    <h1 className="hero__title">Bem-vindo ao CryptoNexus</h1>
                    <h2 className="hero__description">
                        Na CryptoNexus, nossa missão é capacitar você a navegar pelo mundo das criptomoedas com confiança e
                        facilidade. Oferecemos uma plataforma interativa onde você pode aprender sobre investimentos,
                        realizar
                        simulações de transações e trocar diferentes moedas digitais de maneira segura e eficiente.
                    </h2>
                    <a href="/cadastro"><button className="hero_btnCadastro">Comece Agora!</button></a>
                    <button className="hero_btn" id="explorar-btn">Explorar</button>
                </div>
                <div className="hero__right">
                    <DotLottieReact src={GraphicsAnim} loop autoplay className="hero__img" />
                </div>
            </section>

            {/* sessão 2 */}
            <section className="coins-info" id="crypto-info">
                <h2>Principais Criptomoedas</h2>
                <button className="hero_btnCrypto" id="btnCrypto">Vantagens das criptomoedas</button>
                <div className="cards-container">
                    {/* Cartão Bitcoin */}
                    <Card style={{ width: '19rem' }}>
                        <Card.Img variant="top" style={{ width: 80, height: 80 }} src={bitCoin} className="coin-img" />
                        <Card.Body>
                            <Card.Title>Bitcoin (BTC)</Card.Title>
                            <Card.Text>
                                A primeira e mais conhecida criptomoeda.
                            </Card.Text>
                            <Button className='btn-infosCrypto' onClick={() => setShowBitcoin(true)}>
                                Saiba Mais sobre Bitcoin
                            </Button>
                        </Card.Body>
                    </Card>

                    {/* Cartão Ethereum */}
                    <Card style={{ width: '19rem' }}>
                        <Card.Img variant="top" style={{ width: 80, height: 80 }} src={ether} className="coin-img" />
                        <Card.Body>
                            <Card.Title>Ethereum (ETH)</Card.Title>
                            <Card.Text>
                                Plataforma de contratos inteligentes e finanças descentralizadas.
                            </Card.Text>
                            <Button className='btn-infosCrypto' onClick={() => setShowEthereum(true)}>
                                Saiba Mais sobre Ethereum
                            </Button>
                        </Card.Body>
                    </Card>

                    {/* Cartão Litecoin */}
                    <Card style={{ width: '19rem' }}>
                        <Card.Img variant="top" style={{ width: 80, height: 80 }} src={liteCoin} className="coin-img" />
                        <Card.Body>
                            <Card.Title>Litecoin (LTC)</Card.Title>
                            <Card.Text>
                                Uma versão mais rápida e leve do Bitcoin.
                            </Card.Text>
                            <Button className='btn-infosCrypto' onClick={() => setShowLitecoin(true)}>
                                Saiba Mais sobre Litecoin
                            </Button>
                        </Card.Body>
                    </Card>
                </div>

            </section >

            {/* Modal Bitcoin */}
            <Modal show={showBitcoin} onHide={() => setShowBitcoin(false)} className="modal-custom">
                <Modal.Header closeButton>
                    <Modal.Title>Mais sobre Bitcoin (BTC)</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Bitcoin é a primeira criptomoeda e a mais conhecida no mercado. Criada em 2009 por uma entidade desconhecida sob o pseudônimo de Satoshi Nakamoto, o Bitcoin permite transações diretas entre os usuários, sem a necessidade de intermediários.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowBitcoin(false)}>
                        Fechar
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* Modal Ethereum */}
            <Modal show={showEthereum} onHide={() => setShowEthereum(false)} className="modal-custom">
                <Modal.Header closeButton>
                    <Modal.Title>Mais sobre Ethereum (ETH)</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Ethereum é uma plataforma que permite a criação de contratos inteligentes e aplicativos descentralizados (dApps). Lançada em 2015, é a segunda maior criptomoeda em termos de capitalização de mercado.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowEthereum(false)}>
                        Fechar
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* Modal Litecoin */}
            <Modal show={showLitecoin} onHide={() => setShowLitecoin(false)} className="modal-custom">
                <Modal.Header closeButton>
                    <Modal.Title>Mais sobre Litecoin (LTC)</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Litecoin é uma criptomoeda criada em 2011 como uma versão mais leve e rápida do Bitcoin. Com confirmações de transação mais rápidas e taxas menores, o Litecoin é frequentemente usado para transações diárias.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowLitecoin(false)}>
                        Fechar
                    </Button>
                </Modal.Footer>
            </Modal>


            <section className="crypto-advantages" id="coins-info">
                <h2 className="text-center mb-4">Vantagens das Criptomoedas</h2>
                <Row className="g-4 justify-content-center">
                    <Col xs={12} md={3} className="d-flex justify-content-center mb-3">
                        <Card className="w-100">
                            <Card.Body className="text-center">
                                <FaRocket size={40} className="mb-3" />
                                <Card.Title>Transações Rápidas e Globais</Card.Title>
                                <Card.Text>
                                    "Envie e receba pagamentos em qualquer lugar do mundo em minutos."
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={3} className="d-flex justify-content-center mb-3">
                        <Card className="w-100">
                            <Card.Body className="text-center">
                                <FaMoneyBillWave size={40} className="mb-3" />
                                <Card.Title>Baixas Taxas</Card.Title>
                                <Card.Text>
                                    "Economize com taxas mais baixas em comparação com bancos tradicionais."
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={3} className="d-flex justify-content-center mb-4">
                        <Card className="w-100">
                            <Card.Body className="text-center">
                                <FaLock size={40} className="mb-3" />
                                <Card.Title>Segurança com Blockchain</Card.Title>
                                <Card.Text>
                                    "A tecnologia de blockchain garante transparência e segurança nas transações."
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={3} className="d-flex justify-content-center mb-3">
                        <Card className="w-100">
                            <Card.Body className="text-center">
                                <FaUsers size={40} className="mb-3" />
                                <Card.Title>Descentralização</Card.Title>
                                <Card.Text>
                                    "Sem intermediários, você controla seus próprios ativos."
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <button className="btn-crypto" id="btn-cryptoAgr">Como começar com Criptomoedas?</button>
            </section>



            <section className="start-now-crypto" id="start-now">
                <h2>Como Começar com Criptomoedas</h2>
                <Row className="g-5 mt-4 justify-content-center">
                    <Col xs={12} md={3} className="d-flex justify-content-center">
                        <Card className="w-100">
                            <Card.Body>
                                <FaWallet className="mb-3" size={40} />
                                <Card.Title>Passo 1: Crie uma Carteira Digital</Card.Title>
                                <Card.Text>
                                    "Escolha uma carteira segura para armazenar suas criptomoedas."
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={3} className="d-flex justify-content-center">
                        <Card className="w-100">
                            <Card.Body>
                                <FaCoins className="mb-3" size={40} />
                                <Card.Title>Passo 2: Compre Criptomoedas</Card.Title>
                                <Card.Text>
                                    "Use nossa plataforma para comprar suas primeiras moedas."
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={3} className="d-flex justify-content-center">
                        <Card className="w-100">
                            <Card.Body>
                                <FaShieldAlt className="mb-3" size={40} />
                                <Card.Title>Passo 3: Invista com Segurança</Card.Title>
                                <Card.Text>
                                    "Diversifique seu portfólio e explore o mundo das finanças descentralizadas."
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={3} className="d-flex justify-content-center">
                        <Card className="w-100">
                            <Card.Body>
                                <FaChartLine className="mb-3" size={40} />
                                <Card.Title>Passo 4: Monitore Seus Investimentos</Card.Title>
                                <Card.Text>
                                    "Acompanhe o desempenho de suas criptomoedas e ajuste suas estratégias."
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </section>


            <div className="container-fluid"> {/* Altera para container-fluid para ocupar toda a tela */}
                <section className="investment-tips-section">
                    <h2 className="investment-tips-title">Dicas para Investidores Iniciantes</h2>
                    <ul className="investment-tips-list">
                        <li className="investment-tip-item">
                            <i className="bi bi-check-circle"></i> Pesquise antes de investir: entenda no que você está investindo.
                        </li>
                        <li className="investment-tip-item">
                            <i className="bi bi-check-circle"></i> Nunca invista mais do que você pode perder.
                        </li>
                        <li className="investment-tip-item">
                            <i className="bi bi-check-circle"></i> Diversifique suas criptomoedas para reduzir riscos.
                        </li>
                        <li className="investment-tip-item">
                            <i className="bi bi-check-circle"></i> Use carteiras seguras para armazenar suas criptomoedas.
                        </li>
                        <li className="investment-tip-item">
                            <i className="bi bi-check-circle"></i> Mantenha-se informado sobre as notícias do mercado.
                        </li>
                        <li className="investment-tip-item">
                            <i className="bi bi-check-circle"></i> Evite seguir a manada; faça sua própria pesquisa.
                        </li>
                        <li className="investment-tip-item">
                            <i className="bi bi-check-circle"></i> Tenha paciência e não se deixe levar pela volatilidade do mercado.
                        </li>
                    </ul>
                </section>
            </div>

            <section className="testimonials">
                <Row className="text-center">
                    <Col>
                        <h2>O que Nossos Usuários Dizem</h2>

                        <blockquote className="blockquote">
                            <p>"Investir em criptomoedas transformou minha vida financeira. A CryptoNexus tornou o processo fácil e seguro!"</p>
                            <footer className="blockquote-footer">João S.</footer>
                        </blockquote>

                        <blockquote className="blockquote">
                            <p>"Graças à CryptoNexus, consegui diversificar meus investimentos e aumentar meus lucros. As dicas são muito úteis!"</p>
                            <footer className="blockquote-footer">Maria F.</footer>
                        </blockquote>

                        <blockquote className="blockquote">
                            <p>"O simulador de investimentos é uma ferramenta incrível! Me ajudou a entender como funcionam as criptomoedas." </p>
                            <footer className="blockquote-footer">Carlos T.</footer>
                        </blockquote>

                        <blockquote className="blockquote">
                            <p>"Recomendo a CryptoNexus a todos que desejam entrar no mundo das criptomoedas. É fácil e seguro!"</p>
                            <footer className="blockquote-footer">Ana L.</footer>
                        </blockquote>

                        <blockquote className="blockquote">
                            <p>"A equipe da CryptoNexus é muito atenciosa e sempre pronta para ajudar. Meus investimentos nunca estiveram tão seguros!"</p>
                            <footer className="blockquote-footer">Ricardo P.</footer>
                        </blockquote>

                        <blockquote className="blockquote">
                            <p>"Com as orientações da CryptoNexus, consegui dobrar meu investimento inicial em apenas seis meses. Estou muito satisfeito!"</p>
                            <footer className="blockquote-footer">Fernanda G.</footer>
                        </blockquote>
                    </Col>
                </Row>
            </section>


        </>
    );
}