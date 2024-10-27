import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../../styles/NavBar.scss'

export default function NavBar() {
    return (
        <>
            <Navbar expand="lg" className='fixed-top'>
                <Container fluid className='container-nav'>
                    <Navbar.Brand href="#">CryptoNexus</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" className='menu-toogle' />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-0 my-lg-0"
                            style={{ maxHeight: '200px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#action1">Home</Nav.Link>
                            <Nav.Link href="#action2">Sobre nós</Nav.Link>
                            <NavDropdown title="Outros" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3">Produtos</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">
                                    Nosso time
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                    Investimentos
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action6">
                                    Simulações
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action7">
                                    Calculadora de conversão
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Button className="btn-Login">Login</Button>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            

        </>
    )
}