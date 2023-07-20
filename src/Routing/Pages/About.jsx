import { Button, Col, Container, Row } from "react-bootstrap"

export const About = () => {
  return (
    <div className="jumbotron">
          <Container className='text-white'>
              <Row>
                <Col id="#display">
                <div className="banner text-center">
                <h1 className="display-1">Hi, I'M <b><span className="nameset text-primary">M RIZKI</span></b></h1>
                <h1 className="display-3 mt-3"><b>Instagram</b></h1>
                    <Button variant="dark mt-3">
                      Hire me
                    </Button>
                  </div>
                </Col>
              </Row>
          </Container>
        </div>
  )
}

export default About