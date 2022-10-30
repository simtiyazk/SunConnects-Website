import React from 'react';
import { connect } from 'react-redux';
import { Col, Row } from 'reactstrap';
import Paragraph from '../Paragraph/Paragraph';
import { Link } from 'react-router-dom';
function ProductBox(props) {
  const { textUnderLogo, isiText, imgAlt, imgUrl, pageLink, category } = props;
  return (
    <Col xl='4' md='6' xs='12' sm="6" className="productBox">
      <Row className='d-flex fullW no-gutters'>
        <Col xl='12' className="laterals align-self-center text-center d-flex">
          <Link to={pageLink} alt={imgAlt} onClick={function () {(props.setCurrentItem(category))}}>
            <img src={require('../../../assets/images/products/' + imgUrl)} alt={imgAlt} className={imgUrl.slice(0,-4)} />
          </Link>
          {textUnderLogo && <Paragraph copy={textUnderLogo} customClasses={`underLogo ${imgUrl.slice(0,-4)} `} />}
          {isiText && <Paragraph copy={isiText} customClasses="isiText" />}
        </Col>
      </Row>
    </Col>
  )
}
const mapState = state => {
  return{
    currentItem : state.products.currentItem,
  }
}

const mapDispatch = dispatch => ({
  setCurrentItem : item => dispatch.products.setCurrentItem(item),
})
export default connect(mapState, mapDispatch)(ProductBox);
