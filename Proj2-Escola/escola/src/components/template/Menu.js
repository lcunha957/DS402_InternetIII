import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logotipo from './logo_escola.png';

function Menu() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
            <Container>
          <Nav className="me-auto">
          
            <img alt="" src="public/logo_escola.png" 
            width="100" height="50" className="d-inline-block align-top"></img>
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
