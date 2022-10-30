import React from "react";
import { Container, Row, Col } from 'reactstrap';
import { useLocation } from 'react-router-dom';
import {  animateScroll as scroll} from 'react-scroll';


function BacktoTop(props) {
  let location = useLocation();
  const isHome = (location.pathname === '/') ? 1 : 0;

const scrollToTop = () => scroll.scrollToTop();

return (
    <Container>
      {isHome ?
          <>
        </>
          :
      <Row>
          <Col xl='12' lg='12' sm='12' xs="12" >
          <button
          className={`back-to-top`}
          onClick={scrollToTop}
          title="Go to Top"
        />
          </Col>
      </Row>
      }
    </Container>

);
}

export default BacktoTop;
