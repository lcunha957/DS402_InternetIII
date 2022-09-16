import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from './Logo';

function Menu() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
      <Navbar.Brand>  <img src={Logo} />
</Navbar.Brand>
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="#alunos">Alunos</Nav.Link>
            <Nav.Link href="#cursos">Cursos</Nav.Link>
            <Nav.Link href="#carometro">Carometro</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Menu;
