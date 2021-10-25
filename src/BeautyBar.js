import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'

export const BeautyBar = () => (
    <Navbar bg="dark" variant="dark">
        <Container className="nav-justified"> 
            <Navbar.Brand href="#home" className="mx-auto fs-1 fw-bold">
                React Bootstrap
            </Navbar.Brand>
        </Container>
    </Navbar>
);
