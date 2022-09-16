import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export default function Menu(props) { return (
     <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#alunos">React com Dot.Net</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#alunos">Alunos</Nav.Link>
            <Nav.Link href="#cursos">Cursos</Nav.Link>
            <Nav.Link href="#carometro">Carômetro</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

) }