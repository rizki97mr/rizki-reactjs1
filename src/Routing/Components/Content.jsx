import { Col, Container, Row } from 'react-bootstrap';

const Content = ({name}) => {
    return (
        <div className="text">
          <Container className='text-white'>
              <Row>
                <Col>
                    <div className="bio text-center">
                         <h2>Coding Journey {name} </h2>
                    </div>
                </Col>
              </Row>
          </Container>
      </div>
    )
}

export default Content;