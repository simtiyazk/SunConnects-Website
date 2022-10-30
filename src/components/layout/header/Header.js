import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import classNames from 'classnames';
import { getNavigationHeight } from '../../../utilities';
import { homeData } from '../../../constants/home';
import Paragraph from '../../shared/Paragraph/Paragraph';
import SelectProduct from '../../shared/SelectProduct/SelectProduct';

function Header(props) {
  const {
    isMenuOpen,
    getProducts,
    setScrollToTop,
  } = props;

  const MOBILE_MENU_OPEN = 'body--menu-open';


  const getData = async () => {
    try {
      const goal = await getProducts(`${process.env.PUBLIC_URL}/data/products.json`)
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(
    () => {
      getData();
    }
  );

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(
    () => {
      if (isMenuOpen) document.body.classList.add(MOBILE_MENU_OPEN);
      else document.body.classList.remove(MOBILE_MENU_OPEN);
      return () => {
        document.body.classList.remove(MOBILE_MENU_OPEN);
      };
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isMenuOpen],
  );
  const handleScroll = async () => {
    const navigationHeights = getNavigationHeight();
    await setScrollToTop(window.scrollY > navigationHeights.mainHeight);
  };
  const menuWrapperClassess = classNames({
    'open': isMenuOpen,
  });


  let location = useLocation();
  const isHome = (location.pathname === '/') ? 1 : 0;
  const headerClass = (isHome) ? "header" : "header brand";

  return (
    <div className={headerClass}>
      <Container fluid>
        <Row className="bottom-orange-separator no-gutters">
          <Col lg={12} xl={12} md={12} sm={12} xs={12}>
            <Row className="no-gutters">
              <Col lg={1} xl={1} md={1} sm={1} xs={1} className='noMargin mobile-hide'></Col>
              <Col lg={11} xl={11} md={11} sm={11} xs={11} className="noMargin fixPos-mobile">
                <Row className="no-gutters center-mob">
                  <Col lg={10} xl={10}  md={!isHome ? 12: 8} sm={12} xs={12} className='orderSize w-100'>
                    <Row className='no-gutters d-flex setDirection'>
                      <div>
                        <a href="https://www.sunpharma.com" target="_new">
                            <img src={require('../../../assets/images/header/sun_logo.svg')} alt='Logos Sun Connect' className="sunlogo" />
                          </a>
                          <img src={require('../../../assets/images/header/separator-logo.png')} alt='Logos Sun Connect' className="separatorLogo" />
                          <a href="/">
                            <img src={require('../../../assets/images/header/sun_connects.svg')} alt='Logos Sun Connect' className="sunConn img-responsive" />
                          </a>
                      </div>
                    {!isHome &&
                      <div className='posSelector'>
                        <div className='selectProductBox'>
                          <SelectProduct />
                        </div>
                      </div>
                      }
                  </Row>
                  </Col>
                  <Col lg={2} xl={2} md={!isHome ? 12: 4} sm={12} xs={12} className= {`order0 ${!isHome ? 'centerT': 'fixTextRight'}`}>
                    <Paragraph copy={homeData.textRight} customClasses="text-header" />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>

        </ Row>
      </Container>
      <nav className={`bl-component-navitation ${menuWrapperClassess} `}>
        <div className="main-navigation">
          <Container>
            <Row className="no-gutters justify-content-center">
              <Col lg={12} xl={12} md={12} sm={12} xs={12}>
              </Col>
            </Row>
          </Container>
        </div>
      </nav>
    </div>
  )
}

const mapState = state => {
  return {
    showScrollToTop: state.menu.showScrollToTop,
  }
}

const mapDispatch = dispatch => ({
  getProducts: url => dispatch.products.getProducts(url),
  setScrollToTop: value => dispatch.menu.setScrollToTop(value),
})

export default connect(mapState, mapDispatch)(withRouter(Header));
