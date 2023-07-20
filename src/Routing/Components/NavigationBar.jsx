import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavigationBar = () => {
    return (
        <div className="navigation">
                <Navbar bg="dark" data-bs-theme="dark">
                    <Container>
                    <Navbar.Brand Nav href="#home">M Rizki.</Navbar.Brand>
                    <Nav className="{menu ms-auto mb-2 mt-2}">
                        <Nav.Link ><Link to="/home">Home</Link></Nav.Link>
                        <Nav.Link ><Link to="/about">About</Link></Nav.Link>
                        <Nav.Link ><Link to="/contact">Contact</Link></Nav.Link>
                        <Nav.Link ><Link to="/category/EDUCATION">Education</Link></Nav.Link>
                        <Nav.Link ><Link to="/category/JOB">Job</Link></Nav.Link>
                    </Nav>
                    </Container>
                </Navbar>
        </div>
    )
}

export default NavigationBar