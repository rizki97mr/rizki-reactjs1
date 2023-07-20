import { Button, Col, Container, Row } from "react-bootstrap"

export const Contact = () => {
  return (
    <div className="jumbotron">
          <Container className='text-white'>
              <Row>
                <Col id="#display">
                <div className="banner text-center">
                <h1 className="display-1">Ini Halaman<b><span className="nameset text-primary">CONTACT</span></b></h1>
                <h1 className="display-3 mt-3"><b>08XXXXX</b></h1>
                <p>Whatsup</p>
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

export default Contact