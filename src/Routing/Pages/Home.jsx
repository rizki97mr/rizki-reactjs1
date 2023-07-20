import { Button, Col, Container, Row } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

const Home = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('../Category/Job')
    }
    return (
        <div className="jumbotron">
          <Container className='text-white'>
              <Row>
                <Col id="#display">
                <div className="banner text-center">
                <h1 className="display-1">THIS IS <b><span className="nameset text-danger">MY HOME !</span></b></h1>
                    <Button onClick={handleClick} variant="dark mt-3">
                      Go Category
                    </Button>
                  </div>
                </Col>
              </Row>
          </Container>
        </div>
    )
}

export default Home 