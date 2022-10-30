import React from "react";
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import { heroData } from '../../../constants/hero'
import useMediaQuery from '@material-ui/core/useMediaQuery';
import AutocompleteBox from '../../shared/autocompleteBox/autocompleteBox';

function Hero({ products }) {
  const isDesktop = useMediaQuery('(min-width:1024px)');
  let heroType = isDesktop ? 'desk' : 'mobile';
  const items = products ? products.product.map(e => ({ text: e.name, link: e.pageUrl })) : [];

  return <div className='hero'>
    <div className={`hero-${heroType} hero-image`}>
      <Container>
        <Row>
          <Col xl='12' lg="12" sm='12'>
            <div className="hero-text">
              <h1 className='title-hero' dangerouslySetInnerHTML={{ __html: heroData.title }} />
              <h5 className='sub-hero' dangerouslySetInnerHTML={{ __html: heroData.subtitle }} />
              <AutocompleteBox items={items} />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  </div>;
}

function mapStateToProps(state) {
  return {
    products: state.products.items
  }
}

export default connect(mapStateToProps)(Hero);
