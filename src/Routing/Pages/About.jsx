import { Button, Col, Container, Row } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

export const About = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('../Home')
  }
  return (
    <div className="jumbotron">
          <Container className='text-white'>
              <Row>
                <Col id="#display">
                <div className="banner text-center">
                <h1 className="display-1">Hi, I'M <b><span className="nameset text-primary">M RIZKI</span></b></h1>
                <h1 className="display-3 mt-3"><b>Instagram</b></h1>
                    <Button onClick={handleClick} variant="dark mt-3">
                      Go Home
                    </Button>
                  </div>
                </Col>
              </Row>
          </Container>
        </div>
  )
}

export default About