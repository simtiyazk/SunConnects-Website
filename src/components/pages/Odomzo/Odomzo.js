import React from "react";
import { Col, Row } from 'reactstrap';
import HeroBrand from "../../shared/heroBrand/heroBrand"
import { odomzo } from '../../../constants/odomzo'
import Paragraph from '../../shared/Paragraph/Paragraph'
import Button from '../../shared/Button/Button'
import ButtonText from '../../shared/Button/ButtonText'
import ProgramService from '../../shared/ProgramService/ProgramService'
import Card from '../../shared/Card/Card'
import ImageTitle from '../../shared/ImageTitle/ImageTitle'
import ISI from "../../layout/ISI/ISI";
import DownloadableResources from '../../shared/DownloadableResources/DownloadableResources'
import { Element } from 'react-scroll'
import SimpleTable from '../../shared/Cequa/SimpleTable'


const title = 'Access and reimbursement<br/>support for ODOMZO<sup>&reg;</sup>';
const subT = ''
const btnArr = [
  { textBtn: 'Programs & Services', anchorBtn: 'programs' },
  { textBtn: 'Tools & Resources', anchorBtn: 'tools' },
  { textBtn: 'Brand Website ↗', externalLink: 'https://www.odomzo.com/hcp/' }
];

function Odomzo() {


  const generateCequa = () => {
    return odomzo.buttons.map((e, i) => {
      return <ButtonText
        link={e.slug}
        copy={e.text}
        img={e.icon}
        color="odomzo"
        alt={e.icon}
        type={e.size}
        key={i}
      />
    });
  }

  // const generateCards = () =>{
  //   return odomzo.cardOne.table1.map((e,i)=>{
  //     return i === 1 ? <p className="rr">{e.or}</p> : <CequaCard card={e} key={i}/>
  //   })
  // }

  const generateSimpleTable = () => {
    return odomzo.cardOne.table3.map((e, i) => {
      return <SimpleTable text={e} key={i} classs={`${i === 2 ? 'show-line' : ''}`} />
    })
  }

  const generateRefs = () => {
    return odomzo.cardOne.references.map((e, i) => {
      return <Paragraph customClasses="reference" copy={e} />
    })
  }

  const generateULs = () => {
    return odomzo.cardOne.ul.map((e, i) => {
      return <li key={i} className="normal-dot" dangerouslySetInnerHTML={{ __html: e }} />
    })
  }

  const generateULsCardTwo = () => {
    return odomzo.cardTwo.ul.map((e, i) => {
      return <li key={i} className="normal-dot pad-40" dangerouslySetInnerHTML={{ __html: e }} />
    })
  }

  const generateMoreText = () => {
    return odomzo.cardOne.list1.cardR.map((e, i) => {
      return <Paragraph customClasses="more-tex" copy={e} />
    })
  }

  const generateRefes = () => {
    return odomzo.cardThree.references.map((e, i) => {
      return <Paragraph customClasses="reference pad-l-8" copy={e} />
    })
  }

  const generateULsEligibilityRules = () => {
    return odomzo.eligibilityRules.ul.map((e, i) => {
      return <li key={i} className="normal-dot mb-0" dangerouslySetInnerHTML={{ __html: e }} />
    })
  }

  const generateULsEligibilityRulesHyphen = () => {
    return odomzo.eligibilityRules.ulHyphen.map((e, i) => {
      return <li key={i} className="hypen mb-0" dangerouslySetInnerHTML={{ __html: e }} />
    })
  }

  const generateULsTermsConditions = () => {
    return odomzo.termsConditions.ul.map((e, i) => {
      return <li key={i} className="normal-dot mb-0" dangerouslySetInnerHTML={{ __html: e }} />
    })
  }

  const generateULsDisclosures = () => {
    return odomzo.disclosures.ul.map((e, i) => {
      return <li key={i} className="normal-dot mb-0" dangerouslySetInnerHTML={{ __html: e }} />
    })
  }

  return (
    <div className="odomzo-page">
      <HeroBrand brandName='odomzo' title={title} subtitle={subT} btnArr={btnArr} />
      <Element name="programs">
        <ProgramService classNames="odomzo" title="Programs & Services">
          <Row className="justify-content-center mt-5 no-gutters">
            {generateCequa()}
          </Row>

          <Row className="justify-content-center no-gutters">
            <Element name="support">
              <Card classNames='card-odomzo mt-0'>
                <ImageTitle
                  alt="logo-hand"
                  img={odomzo.cardOne.image}
                  title={odomzo.cardOne.title}
                  colorCircle="odomzo w30"
                  colorText="odomzoText mb-0"
                  type="small"
                />
                <Row className="pd-20">
                  <Col xl='11' lg="11" md='11' sm='10' xs='10' className="pdt-30">
                    <Paragraph copy={odomzo.cardOne.text1} />
                  </Col>

                  <Col xl='12' lg="12" md='12' sm='12' xs='12' >
                    <Button buttonType="small odomzo white" copy={odomzo.cardOne.button1.text} isExternal={odomzo.cardOne.button1.isExternal} link={odomzo.cardOne.button1.url} />
                    <Paragraph copy={odomzo.cardOne.reference} customClasses='reference mt-4' />
                  </Col>
                </Row>
              </Card>
            </Element>
          </Row>
          <Row className="justify-content-center no-gutters">
            <Element name="retail">
              <Card classNames='card-cequa'>
                <ImageTitle
                  alt="logo-hand"
                  img={odomzo.cardTwo.image}
                  title={odomzo.cardTwo.title}
                  colorCircle="odomzo"
                  colorText="odomzoText mt-2 mb-0"
                  type="small"
                />
                <Paragraph customClasses="green cardtwo-subtitle" copy={odomzo.cardTwo.text} />
                <Row className="no-gutters">
                  <Col xl='7' lg="7" md='7' sm='7' xs='12'>
                    <img className="copay-card-ceq" src={require('../../../assets/images/icon/odomzo/copay-card.png')} alt="copay-card" />
                  </Col>
                  <Col xl='5' lg="5" md='5' sm='5' xs='12' className="acenter">
                    <Paragraph customClasses="fs-14 pd-30" copy={odomzo.cardTwo.text2} />
                    <Button buttonType="small odomzo mt-4 mb-4" copy={odomzo.cardTwo.button.label} isExternal={odomzo.cardTwo.button.isExternal} link={odomzo.cardTwo.button.url} />
                  </Col>
                </Row>
                <ul>
                  {generateULsCardTwo()}
                </ul>
                <Paragraph copy={odomzo.cardTwo.reference} customClasses='reference mt-4' />
              </Card>
            </Element>
          </Row>
          <Row className="justify-content-center no-gutters">
            <Element name="compare">
              <Card classNames='card-cequa'>
                <ImageTitle
                  alt="logo-hand"
                  img={odomzo.cardThree.image}
                  title={odomzo.cardThree.title}
                  colorCircle="odomzo w35"
                  colorText="odomzoText mb-0"
                  type="small"
                />
                <Row className="no-gutters">
                  <Paragraph customClasses="mt-4 mb-4" copy={odomzo.cardThree.text1} />
                  <Button buttonType="small odomzo" copy={odomzo.cardThree.button.label} isExternal={odomzo.cardThree.button.isExternal} link={odomzo.cardThree.button.url} />
                </Row>
              </Card>
            </Element>
          </Row>
          <Row className='entireRef'>
            <Paragraph copy={odomzo.entireReference} customClasses='yonsaOutColor' />
            <Paragraph copy={odomzo.eligibilityRules.title} customClasses='yonsaOutColor mb-0' />
            <ul className="mb-0">
              {generateULsEligibilityRules()}
            </ul>
            <ul className="pl-3 mb-4">
              {generateULsEligibilityRulesHyphen()}
            </ul>
            <Paragraph copy={odomzo.termsConditions.title} customClasses='yonsaOutColor mb-0' />
            <ul className="mb-4">
              {generateULsTermsConditions()}
            </ul>
            <Paragraph copy={odomzo.disclosures.title} customClasses='yonsaOutColor mb-0' />
            <ul className="mb-0">
              {generateULsDisclosures()}
            </ul>
          </Row>
        </ProgramService>
      </Element>
      <Element name="tools">
        <h2 className={`odomzoText mt-text`}>Tools & Resources</h2>
        <DownloadableResources
          numberCols={12} title='Downloadable Resources'
          buttons={odomzo.tools} classNames="odomzo w-486" bClass="odomzoButton"
        />
      </Element>
      <Element name="isi-top-element">
      </Element>
      <ISI wichPage="odomzo" />
    </div>
  )
}
export default Odomzo;
