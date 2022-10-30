import React from "react";
import { Container, Row, Col } from 'reactstrap';
import { useLocation } from 'react-router-dom'
import Paragraph from '../../shared/Paragraph/Paragraph'
import { footerData } from '../../../constants/footer';
import { connect } from 'react-redux';

function Footer(props) {

  let location = useLocation();
  let inHome, is404 = false;
  if(props.products !== null){ // check first empty round
    inHome = props.products.routes.home.includes(location.pathname); // verification if we are in home
    if(!props.products.routes.home.includes(location.pathname) && !props.products.routes.internal.includes(location.pathname)){ // check is the route is a 404 page or not
      is404 = true;
      console.log('enter here')
    }
  }
  const isHome = ((inHome || location.pathname === '/') || is404) ? 1 : 0; // check the type of content in the footer to display
  return (
    <div>
      {!isHome &&
     <div className="sub-footer">
       <img src={require('../../../assets/images/phone.png')} alt={'phone'}/>
       <p>For reporting adverse drug events<br className="show-mobile"/> (ADEs) related to Sun Pharma<br className="show-mobile"/> products, please contact<br className="show-mobile"/> 1-800-818-4555 and choose Option 3.</p>
    </div>
    }
   <div className='footer'>
      <Container>
        {isHome ?
          <>
            <Row>
              <Col xl='12' lg="12" sm='12'>
                <Paragraph copy={footerData.line1} customClasses="l-left" />
                <Paragraph copy={footerData.line2} customClasses="l-left" />
                <Paragraph copy={footerData.line3} customClasses="l-left" />
                <Paragraph copy={footerData.line4} customClasses="l-left" />
              </Col>
            </Row>
            <Row>
              <Col xl='12' lg='12' sm='12' className="mobil-hide">
                <a target="_blank" rel="noopener noreferrer" href={footerData.links.legal.link}>{footerData.links.legal.text}</a> | <a target="_blank" rel="noopener noreferrer" href={footerData.links.policy.link}>{footerData.links.policy.text}</a>
              </Col>

              <Col xl='12' lg='12' sm='12' className="foot-mobile-links">
                <a target="_blank" rel="noopener noreferrer" href={footerData.links.legal.link}>{footerData.links.legal.text}</a>
                <a target="_blank" rel="noopener noreferrer" href={footerData.links.policy.link}>{footerData.links.policy.text}</a>
              </Col>
            </Row>
          </>
          :
          <Row>
            <Col xl='12' lg="12" sm='12'>
              <Paragraph copy={footerData.line5} />
            </Col>
          </Row>
        }
      </Container>
    </div>
    </div>

  )
}


const mapState = state => {
  return{
    products : state.products.items,
  }
}

const mapDispatch = dispatch => ({
  getProducts : url => dispatch.products.getProducts(url),
})

export default connect(mapState, mapDispatch)(Footer);
