import React from 'react'
import { Container, Row, Col, Input } from 'reactstrap';
import ButtonHeroBrand from '../buttonHeroBrand/buttonHeroBrand';
import { scroller } from 'react-scroll'
import { getScrollHeight } from '../../../utilities';
import { connect } from 'react-redux';

function HeroBrand(props) {
  const { brandName, title, subtitle, btnArr, setUrl, setOpen  } = props;

  const change = (event) => {

    let tam = 6000;

    const rest = getScrollHeight();
    if(rest <= 1000){
      tam = 2000;
    }else if(rest > 1000 && rest <= 2000){
      tam = 3000;
    }
    else
      tam = 4000;

    if(event.target.value.includes("http")){
      setUrl(event.target.value);
      setOpen(true);
      document.getElementById('optSel').value = "-1";
    }else{
      scroller.scrollTo(event.target.value, {
        duration: tam,
        delay: 10,
        smooth: 'easeInOutQuint',
        offset: event.target.value === 'tools' ? -20 :0, // Scrolls to element + 50 pixels down the page
      })
    }
  }

  return <div className='hero-brand'>
      <div className={brandName+'Bg hero-image'}>
        <Container>
          <Row>
            <Col xl='12' lg="12" sm='12'>
              <Row>
                <Col xl='3' lg="3" md='4' sm='12' xs='12'>
                  <img src={require(`../../../assets/images/heroBrand/logo/${brandName}.svg`)} alt='' className="logo-brand img-fluid mx-auto d-block" />
                </Col>
                <Col xl='8' lg="8" md='8' sm='12' xs='12'>
                  <div className="text-content">
                    <h1 className='title-hero' dangerouslySetInnerHTML={{ __html: title }} />
                    <p className='sub-hero' dangerouslySetInnerHTML={{ __html: subtitle }} />
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col xl='12' lg="12" sm='12' className='align-items-end mobile-hide'>
                <Row className='justify-content-center'>
                {btnArr && btnArr.map((e,i) => ( <ButtonHeroBrand key={i} externalLink={e.externalLink} textBtn={e.textBtn} anchorBtn={e.anchorBtn} brand={brandName}/> ))}
                </Row>
            </Col>
            <Col xl='12' lg="12" sm='12' md='12' className='mobile-show desktop-hide align-self-center select-section'>
              <Input id='optSel' type="select" name="select" onChange={change.bind(this)} location='(this.value)'>
                <option value='-1' disabled selected>Navigate To</option>
                {btnArr && btnArr.map(e => (<option value={e.anchorBtn || (e.externalLink)} option={(e.anchorBtn && '#'+e.anchorBtn)|| (e.externalLink)}>{e.textBtn}</option>))}
              </Input>
            </Col>
          </Row>
        </Container>
      </div>
    </div>;
}

const mapDispatch = dispatch => ({
  setUrl: url => dispatch.menu.setUrl(url),
  setOpen: open => dispatch.menu.setOpen(open)
})

export default connect(null,mapDispatch)(HeroBrand);

