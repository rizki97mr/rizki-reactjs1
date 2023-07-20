import { Button, Col, Container, Row } from "react-bootstrap"
import { useParams } from "react-router-dom"

export const Category = () => {
    const params  = useParams();
  return (
    <div className="jumbotron">
          <Container className='text-white'>
              <Row>
                <Col id="#display">
                <div className="banner text-center">
                <h1 className="display-1">MY CATEGORY <b><span className="nameset text-danger">{params.name}</span></b></h1>
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

export default Category