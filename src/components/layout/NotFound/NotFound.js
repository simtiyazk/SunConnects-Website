import React, { Component } from 'react';
import { Row, Col, Container } from 'reactstrap';
import { Link } from 'react-router-dom';

class NotFound extends Component {
  render() {
    return (
      <div className="p404-page">
        <Container>
          <Row className='p-page'>
            <Col md='12' className='d-flex justify-content-center'>
              <img src={require('../../../assets/images/icon/404.svg')} alt="404 Page" className=''/>
            </Col>
            <Col md='12' className='d-flex justify-content-center my-3'>
              <h1>404 Error - Page Not Found</h1>
            </Col>
            <Col md={{ size: 8, offset: 2 }} className='d-flex justify-content-center mt-5'>
              <p>We’re sorry, but the page you are looking for cannot be found. Please check the web address or return to the <Link to='/'>homepage</Link>.</p>
            </Col>
            </Row>
        </Container>
      </div>
    );
  }
}

export default NotFound;
