import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export default function Menu(props) { return (
     <Navbar bg="light" expand="lg">
      <Container>
      <Navbar.Collapse id="basic-navbar-nav">
          <nav class="menu">
            <Nav.Link href="#alunos">Alunos</Nav.Link>
            <Nav.Link href="#cursos">Cursos</Nav.Link>
            <Nav.Link href="#carometro">Carômetro</Nav.Link>
          </nav>
          </Navbar.Collapse>
      </Container>
    </Navbar>

) }