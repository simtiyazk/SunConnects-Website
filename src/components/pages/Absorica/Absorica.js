import React from "react";
import { Container, Row, Col } from 'reactstrap';
import HeroBrand from "../../shared/heroBrand/heroBrand"
import { absoricaData } from '../../../constants/absorica'
import Paragraph from '../../shared/Paragraph/Paragraph'
import Button from '../../shared/Button/Button'
import ISI from "../../layout/ISI/ISI";
import ButtonText from '../../shared/Button/ButtonText'
import  ProgramService from '../../shared/ProgramService/ProgramService'
import  Card  from '../../shared/Card/Card'
import ImageTitle from '../../shared/ImageTitle/ImageTitle'
import DownloadableResources from '../../shared/DownloadableResources/DownloadableResources'
import { Element  } from 'react-scroll'

var isIE11 = !!window.MSInputMethodContext && !!document.documentMode;
const title = 'Access and reimbursement<br/> support for ABSORICA LD<sup>&trade;</sup>';
const subT = '<strong>REINFORCE YOUR DECISION TO PRESCRIBE ABSORICA LD BY WRITING DAW-1 EVERY TIME</strong> <br><span class="subUnderText">DAW=dispense as written.</span>'
const btnArr =  [
  {textBtn: 'Programs & Services', anchorBtn:'programs'},
  {textBtn: 'Tools & Resources', anchorBtn:'tools'},
  {textBtn: 'Brand Website ↗', externalLink: 'https://www.absoricald-hcp.com'}
  ];

function Absorica () {

  const generateAbsorica = () =>{
    return absoricaData.buttons.map((e,i) => {
      return <ButtonText
              link={e.slug}
              copy={e.text}
              img={e.icon}
              color="absorica"
              alt={e.icon}
              type={`big ${i === 2 || i === 3 ? "upper" : ''} `}
              key={i}
            />
    });
  }

  return(
  <div className="absorica-page">
    <HeroBrand brandName='absorica' title={title} subtitle={subT} btnArr={btnArr} />
    <Element name="programs">
      <ProgramService classNames="absorica" >
        <Row className="justify-content-center mt-5 no-gutters">
          {generateAbsorica()}
        </Row>
        <Row className="justify-content-center no-gutters">
          <Element name="copay-program">
            <Card classNames='card-about'>
            <ImageTitle
              alt="logo-hand"
              img={absoricaData.cardOne.image}
              title={absoricaData.cardOne.title}
              colorCircle="absorica"
              colorText="red"
              type="small"
            />
            <Row className="justify-content-center no-gutters mt-3">
              <Col xs="12" lg="7" md="7" xl='7' sm='12'>
                <img className="img-ab"   src={require(`../../../assets/images/icon/absorica/absorica.png`)} alt='absorica-card'/>
              </Col>
              <Col xs="12" lg="5" md="5" xl='5' sm='12'>
                <Paragraph customClasses="mt-4 pr-24" copy={absoricaData.cardOne.text1}/>
                <Button buttonType="small blue mb-4" copy={absoricaData.cardOne.button.label} isExternal={absoricaData.cardOne.button.isExternal} link={absoricaData.cardOne.button.url}/>
              </Col>
            </Row>
            <Paragraph customClasses="black-sec"  copy={absoricaData.cardOne.title2}/>
            <Paragraph customClasses={`reference pr-4mb mb-0 ${isIE11 ? 'ie11': ''}`}  copy={absoricaData.cardOne.text2}/>
            </Card>
          </Element>
        </Row>
        <Row className="justify-content-center no-gutters">
          <Element name="patient-program">
            <Card classNames='card-about'>
            <ImageTitle
              alt="logo-hand"
              img={absoricaData.cardTwo.image}
              title={absoricaData.cardTwo.title}
              colorCircle="absorica"
              colorText="red"
              type="small"
            />
            <Paragraph customClasses={`mt-4 ${isIE11 ? 'ie11': 'w-540'}`} copy={absoricaData.cardTwo.text1}/>
            <ol className="numbers">
              <li><p>{absoricaData.cardTwo.ul.line1}</p></li>
              <li><p className="two-sings">{absoricaData.cardTwo.ul.line2}</p>
              <Button buttonType="big blue move-r mt-0 mb-4 w-560" copy={absoricaData.cardTwo.button.label} isExternal={absoricaData.cardTwo.button.isExternal} link={absoricaData.cardTwo.button.url}  isLongScroll/>
              </li>
              <li><p>{absoricaData.cardTwo.ul.line3}</p></li>
            </ol>
            <Paragraph customClasses="reference" copy={absoricaData.cardTwo.text2}/>
            <Paragraph customClasses="pr-4-mb cvmed-2" copy={absoricaData.cardTwo.title2}/>
            <Paragraph customClasses="reference mb-0" copy={absoricaData.cardTwo.text3}/>
            </Card>
          </Element>
        </Row>
        <Row className="justify-content-center no-gutters">
          <Element name="covermymeds">
            <Card classNames='card-about'>
              <ImageTitle
                alt="logo-hand"
                img={absoricaData.cardThree.image}
                title={absoricaData.cardThree.title}
                colorCircle="absorica w35"
                colorText="t-bot"
                type="small"
              />
              <Paragraph customClasses="mt-4 pr-24 cv-med" copy={absoricaData.cardThree.text}/>
              <Paragraph customClasses="cvmed-2" copy={absoricaData.cardThree.text2}/>
              <Button buttonType="small blue mb-0" copy={absoricaData.cardThree.button.label} isExternal={absoricaData.cardThree.button.isExternal} link={absoricaData.cardThree.button.url}/>
            </Card>
          </Element>
        </Row>
        <Row className="justify-content-center no-gutters">
          <Element name="ipledge">
            <Card classNames='card-about'>
              <ImageTitle
                alt="logo-hand"
                img={absoricaData.cardFour.image}
                title={absoricaData.cardFour.title}
                colorCircle="absorica w37 pd-1"
                colorText="t-bot"
                type="small"
              />
              <Paragraph customClasses="mt-4 pr-24 mb-3"  copy={absoricaData.cardFour.text}/>
              <Paragraph customClasses="mb-3"  copy={absoricaData.cardFour.text2}/>
              <Button buttonType="small blue" copy={absoricaData.cardFour.button.label} isExternal={absoricaData.cardFour.button.isExternal} link={absoricaData.cardFour.button.url}/>
              <Paragraph customClasses="reference mt-3 mb-0" copy={absoricaData.cardFour.reference}/>
            </Card>
            <Container>
              <Row className="justify-content-center no-gutters">
                <Paragraph customClasses="referenceLast" copy={absoricaData.reference}/>
              </Row>
            </Container>
          </Element>
        </Row>
      </ProgramService>
    </Element>

    <Element name="tools">
      <h2 className={`absoricaText`}>Tools & Resources</h2>
      <DownloadableResources
        numberCols={12} title='Downloadable Resources'
        buttons={absoricaData.tools} classNames="absorica w-560" bClass="blue"
      />
    </Element>
      <Element name="isi-top-element">
      </Element>
    <ISI wichPage="absorica"/>
  </div>
  )
}

export default Absorica;
