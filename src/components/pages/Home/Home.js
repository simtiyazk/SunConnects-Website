import React, { Component } from 'react';
import { connect } from 'react-redux';
import Hero from "../../layout/hero/hero"
import { Container, Row, Col } from 'reactstrap';
import AfterheroContent from "../../layout/defaultContent/AfterheroContent";
import ProductBox from '../../shared/productBox/productBox';
import Megamenu from '../../shared/megaMenu/megaMenu';
import { Link } from 'react-router-dom';

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      image3 : "https://brightcove04pmdo-a.akamaihd.net/5104226627001/5104226627001_5297440765001_5280261645001-vs.jpg?pubId=5104226627001&videoId=5280261645001",
      image4 : "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/empire-state-building-black-and-white-square-format-john-farnan.jpg",
      insideStyles : {
        background: "white",
        padding: 20,
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)"
      },
      height: props.height
    }
  }
  setCurrentItem(id){
      this.props.setCurrentItem(id)
  }

  // function to filter by producto
  filterByid(element){
    if(this.props.currentItem === 'all'){
      return element;
    }
    if(this.props.currentItem === element.category){
      return element;
    }
    if(this.props.currentItem === null){
      return element;
    }
  }

  getSimpleProducts(e){
    return {
      'category' : e.category,
      'link': e.pageUrl,
      'name' : e.name
    }
  }

  componentWillMount(){
    this.setState({ height: window.innerHeight });
  }

  render() {
    const current = this.props.currentItem;
    let content;
    // select default page or content with products
    if (current === null) {
      content = <Container className='defaultContent'>
                  <Row>
                    <Col xl='12' lg="12" sm='12'>
                      <AfterheroContent />
                    </Col>
                  </Row>
                </Container>;
    } else {
      let innerContent = this.props.products && this.props.products.product.filter(
        this.filterByid.bind(this)).map(
        e => <ProductBox
                textUnderLogo={e.textUnderLogo}
                isiText={e.isiText}
                imgAlt={e.alt}
                imgUrl={e.logoName}
                pageLink={e.pageUrl}
                category={e.category} />)
        content = <Container><Row className="productFilters mobile-hide">{innerContent}</Row></Container>;
    }
    return (
      <section>
        <Hero />
        <div className="my-content">
        <div className="homeIcons mobile-hide">
          <Container>
            <Row className="fix-icons justify-content-around">
              <Col xl='1' lg="1" sm='1'></Col>
              <Col xl='2' lg="2" sm='2'>
                <Link to='/dermatology'>
                  <section className='icon-brand' onClick={this.setCurrentItem.bind(this,'dermatology')}>
                    {(this.props.currentItem === null || this.props.currentItem !== 'dermatology') && <img src={require('../../../assets/images/homeIcons/dermatology.svg')} alt="" className='icon-derma'/>}
                    <img src={require('../../../assets/images/homeIcons/dermatology-active.svg')} alt="" className={((this.props.currentItem === 'dermatology')?'show icon-derma':'hide icon-derma')}/>
                  </section>
                </Link>
              </Col>
              <Col xl='2' lg="2" sm='2'>
              <Link to='/ophthalmology'>
                  <section className='icon-brand' onClick={this.setCurrentItem.bind(this,'ophthalmology')}>
                    {(this.props.currentItem === null || this.props.currentItem !== 'ophthalmology') && <img src={require('../../../assets/images/homeIcons/ophthalmology.svg')} alt="" className='icon-ophtha'/>}
                    <img src={require('../../../assets/images/homeIcons/ophthalmology-active.svg')} alt="" className={((this.props.currentItem === 'ophthalmology')?'show icon-ophtha':'hide icon-ophtha')}/>
                  </section>
                </Link>
              </Col>
              <Col xl='2' lg="2" sm='2'>
                <Link to='/oncology'>
                  <section className='icon-brand' onClick={this.setCurrentItem.bind(this,'oncology')}>
                  {(this.props.currentItem === null || this.props.currentItem !== 'oncology') && <img src={require('../../../assets/images/homeIcons/oncology.svg')} alt="" className='icon-onco'/>}
                  <img src={require('../../../assets/images/homeIcons/oncology-active.svg')} alt="" className={((this.props.currentItem === 'oncology')?'show icon-onco':'hide icon-onco')}/>
                  </section>
                </Link>
              </Col>
              <Col xl='2' lg="2" sm='2'>
                <Link to='/all'>
                  <section className='icon-brand' onClick={this.setCurrentItem.bind(this,'all')}>
                  {(this.props.currentItem === null || this.props.currentItem !== 'all') && <img src={require('../../../assets/images/homeIcons/all.svg')} alt="" className='icon-all'/>}
                  <img src={require('../../../assets/images/homeIcons/all-active.svg')} alt="" className={((this.props.currentItem === 'all')?'show icon-all':'hide icon-all')}/>
                  </section>
                </Link>
              </Col>
              <Col xl='1' lg="1" sm='1'></Col>
            </Row>
          </Container>
        </div>
        <div className="megaMenu mobile-show desktop-hide">
            {this.props.products && <Megamenu
              menuItems={this.props.products.category} allItems={this.props.products.product}
              className='mobile-show desktop-hide'
            />}
        </div>
        <div className='content'>
            {content}
        </div>
      </div>
      </section>
    );
  }
}

const mapState = state => {
  return{
    products : state.products.items,
    currentItem : state.products.currentItem,
  }
}

const mapDispatch = dispatch => ({
  setUrl: url => dispatch.menu.setUrl(url),
  setOpen: open => dispatch.menu.setOpen(open),
  getProducts : url => dispatch.products.getProducts(url),
  setCurrentItem : item => dispatch.products.setCurrentItem(item),
})
export default connect(mapState, mapDispatch)(Home);
