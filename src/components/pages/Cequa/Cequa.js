import React from "react";
import { Col, Row } from 'reactstrap';
import HeroBrand from "../../shared/heroBrand/heroBrand"
import { cequa } from '../../../constants/cequa'
import Paragraph from '../../shared/Paragraph/Paragraph'
import Button from '../../shared/Button/Button'
import ButtonText from '../../shared/Button/ButtonText'
import  ProgramService from '../../shared/ProgramService/ProgramService'
import  Card  from '../../shared/Card/Card'
import ISI from "../../layout/ISI/ISI";
import ImageTitle from '../../shared/ImageTitle/ImageTitle'
import DownloadableResources from '../../shared/DownloadableResources/DownloadableResources'
import { Element  } from 'react-scroll'
import CequaCard from '../../shared/Card/CequaCard'
import TableHeader from '../../shared/Cequa/TableHeader'
import SimpleTable from '../../shared/Cequa/SimpleTable'
import { Link } from 'react-scroll';
import useMediaQuery from '@material-ui/core/useMediaQuery';


const title = 'Access and reimbursement<br/>support for Cequa<sup>&trade;</sup>';
const subT = ''


  const validateName = (isDesktop) => {
    if(isDesktop){
      return 'Obtaining Cequa<sup>&trade;</sup>'
    }else{
      if(/Android/i.test(navigator.userAgent) || /iPhone|iPad|iPod/i.test(navigator.userAgent)){
        return 'Obtaining Cequa™';
      }
      return 'Obtaining Cequa<sup>&trade;</sup>'
    }
  }

function Cequa(){

  const isDesktop = useMediaQuery('(min-width:1024px)');

  const btnArr =  [
    {textBtn: validateName() , anchorBtn:'programs'},
    {textBtn: 'Tools & Resources', anchorBtn:'tools'},
    {textBtn: 'Brand Website ↗', externalLink: 'http://www.cequapro.com'}
    ];

  const generateCequa = () =>{
    return cequa.buttons.map((e,i) => {
      return <ButtonText
              link={e.slug}
              copy={e.text}
              img={e.icon}
              color="cequa"
              alt={e.icon}
              type="big"
              key={i}
            />
    });
  }

  const generateCards = () =>{
    return cequa.cardOne.table1.map((e,i)=>{
      return i === 1 ? <p className="rr">{e.or}</p> : <CequaCard card={e} key={i}/>
    })
  }

  const generateSimpleTable = () =>{
    return cequa.cardOne.table3.map((e,i)=>{
      return <SimpleTable text={e} key={i} classs={`${i === 2 || i===3 ? 'show-line': ''}`} />
    })
  }

  const generateRefs = () =>{
    return cequa.cardOne.references.map((e,i)=>{
      return <Paragraph customClasses="reference" copy={e}/>
    })
  }

  const generateULs = () =>{
    return cequa.cardOne.ul.map((e,i)=>{
      if(e.link !== 'undefined' ){
      let retStr = <li key={i} className="normal-dot">{e.copy && e.copy}<Link to='tools' spy={false} smooth='easeInOutQuart' offset={50} duration={1500} dangerouslySetInnerHTML={{ __html: e.link }} />{e.afterCopy && e.afterCopy}</li>;
        return retStr;
      } else{
        return <li key={i} className="normal-dot" dangerouslySetInnerHTML={{ __html: e }}/>
      }
    })
  }

  const generateULsCardTwo = () =>{
    return cequa.cardTwo.ul.map((e,i)=>{
      return <li key={i} className="normal-dot pad-40" dangerouslySetInnerHTML={{ __html: e }}/>
    })
  }

  const generateMoreText = () =>{
    return cequa.cardOne.list1.cardR.map((e,i)=>{
      return <Paragraph customClasses="more-tex" copy={e}/>
    })
  }

  const generateRefes = () => {
    return cequa.cardThree.references.map((e,i)=>{
      return <Paragraph customClasses="reference pad-l-8" copy={e}/>
    })
  }

  const generateULsEligibilityRules = () => {
    return cequa.eligibilityRules.ul.map((e, i) => {
      return <li key={i} className="normal-dot mb-0" dangerouslySetInnerHTML={{ __html: e }} />
    })
  }

  const generateULsEligibilityRulesHyphen = () => {
    return cequa.eligibilityRules.ulHyphen.map((e, i) => {
      return <li key={i} className="hypen mb-0" dangerouslySetInnerHTML={{ __html: e }} />
    })
  }

  const generateULsTermsConditions = () => {
    return cequa.termsConditions.ul.map((e, i) => {
      return <li key={i} className="normal-dot mb-0" dangerouslySetInnerHTML={{ __html: e }} />
    })
  }

  const generateULsDisclosures = () => {
    return cequa.disclosures.ul.map((e, i) => {
      return <li key={i} className="normal-dot mb-0" dangerouslySetInnerHTML={{ __html: e }} />
    })
  }

  const rationalebullets = () => {
    return cequa.pharmabox.rationalebullets.ul.map((e, i) => {
      return <li key={i} className="hyphen mb-0" dangerouslySetInnerHTML={{ __html: e }} />
    })
  }

  const createTable = () =>{
    return cequa.cardFour.table.map((e,i)=>{
      return <TableHeader key={i} header={e.title} subheader={e.subhead}>
                <ul>
                  {e.tableBullets.map((e, i) => (
                    <li key={i} className="normal-dot" dangerouslySetInnerHTML={{ __html: e }} />
                  ))}
                </ul>
              </TableHeader>
    })
  }

  return(
    <div className="cequa-page">
      <HeroBrand brandName='cequa' title={title} subtitle={subT} btnArr={btnArr} />
      <Element name="programs">
        <ProgramService classNames="cequa" title="Obtaining Cequa<sup>™</sup>">
          <Row className="justify-content-center mt-5 no-gutters">
            {generateCequa()}
          </Row>
            <Row className="justify-content-center no-gutters">
              <Element name="retail">
                <Card classNames='card-cequa'>
                  <img src={require('../../../assets/images/icon/cequa/2.png')} width="71" alt="1" style={{position: "absolute", top: '-1px', right: '-1px'}}/>
                  <ImageTitle
                  alt="logo-hand"
                  img={cequa.cardTwo.image}
                  title={cequa.cardTwo.title}
                  colorCircle="cequa"
                  colorText="cequaText mt-2 mb-0"
                  type="small"
                  />
                  <Paragraph customClasses="mt-3" copy={cequa.cardTwo.text}/>
                  <Row className="no-gutters d-flex justify-content-center">
                    <img className="copay-card-ceq img-fluid" height='auto' width='auto' src={require('../../../assets/images/icon/cequa/copay-card.png')}  alt="copay-card"/>
                    <Button buttonType="small cequa al-center mt-4 mb-4" copy={cequa.cardTwo.button.label} isExternal={cequa.cardTwo.button.isExternal} link={cequa.cardTwo.button.url}/>
                  </Row>
                  <div className="pd-box-parent">
                  <Row className="no-gutters d-flex justify-content-center pd-box">
                    <img className="icons-left" height='auto' width='auto' src={require('../../../assets/images/icon/cequa/RX-Logo.png')}  alt=""/>
                    <Paragraph className="" copy={cequa.greenbox.p1} />
                  </Row>
                  <Row className="no-gutters d-flex justify-content-center pd-box">
                    <img className="icons-left" height='auto' width='auto' src={require('../../../assets/images/icon/cequa/copay-savings.png')}  alt=""/>
                    <Paragraph className="" copy={cequa.greenbox.p2} />
                  </Row>
                  <Row className="no-gutters d-flex justify-content-center pd-box">
                    <img className="icons-left" height='auto' width='auto' src={require('../../../assets/images/icon/cequa/downwardarrow.png')}  alt=""/>
                    <Paragraph className="" copy={cequa.greenbox.p3} />
                  </Row>
                  </div>
                  {/* <ul>
                    {generateULsCardTwo()}
                  </ul> */}

                  <Paragraph customClasses="reference mb-0 pl-8"  copy={cequa.cardTwo.terms.reference}/>
                </Card>
              </Element>
            </Row>
            <Row className="justify-content-center no-gutters">
              <Element name="compare">
                <Card classNames='card-cequa'>
                  <ImageTitle
                      alt="logo-hand"
                      img={cequa.cardThree.image}
                      title={cequa.cardThree.title}
                      colorCircle="cequa"
                      colorText="cequaText mb-0"
                      type="small"
                  />
                  <Row className="no-gutters">
                  <Paragraph customClasses="mt-3"  copy={cequa.cardThree.subtitle} />
                  </Row>
                  {/* <Row className="no-gutters">
                    <img className="copay-card-ceq-2" src={require('../../../assets/images/icon/cequa/chart.png')}  alt="chart"/>
                    <img className="copay-card-ceq-3" src={require('../../../assets/images/icon/cequa/chart-mb.png')}  alt="chart"/>
                  </Row> */}
                  {/* {generateRefes()} */}
                  <div className="pharma-box">
                    <img className="logo-left-pharma" height='auto' width='auto' src={require('../../../assets/images/icon/cequa/covermymeds.png')}  alt=""/>
                    <Paragraph className="" copy={cequa.pharmabox.covermedp1} />
                  <Row className="no-gutters d-flex justify-content-center pd-box">
                    <Paragraph className="" copy={cequa.pharmabox.covermedp2} />
                  </Row>
                  <img className="logo-left-pharma" height='auto' width='auto' src={require('../../../assets/images/icon/cequa/PARx_logo.png')}  alt=""/>
                    <Paragraph className="" copy={cequa.pharmabox.rxp1} />
                    <Row className="no-gutters d-flex justify-content-center pd-box">
                  </Row>
                  <Row className="no-gutters">
                    <Paragraph className="" copy={cequa.pharmabox.p6} />
                    <Paragraph className="" copy={cequa.pharmabox.p7} />
                    <ul className="mb-0 rationale">
                      {rationalebullets()}
                    </ul>
                    <Paragraph customClasses="blue mt-3" copy={cequa.pharmabox.p8} />
                    <Paragraph customClasses="" copy={cequa.pharmabox.p9} />
                    <Paragraph customClasses="blue mb-0" copy={cequa.pharmabox.p10} />
                    <Paragraph copy={cequa.pharmabox.p11} />
                    <Paragraph className="" copy={cequa.pharmabox.p12} />
                  </Row>
                  </div>
                </Card>
                </Element>
            </Row>
            <Row className="justify-content-center no-gutters">
              <Element name="share">
                <Card classNames='card-cequa'>
                  <ImageTitle
                      alt="logo-hand"
                      img={cequa.cardFour.image}
                      title={cequa.cardFour.title}
                      colorCircle="cequa"
                      colorText="cequaText mb-0"
                      type="small"
                      inlineLogo={cequa.cardThree.image}
                  />
                  <h2 className="text-left h2-cequa mb-0 mt-4" dangerouslySetInnerHTML={{ __html: cequa.cardFour.subhead }} />
                  <Paragraph customClasses="mt-3" copy={cequa.cardFour.copy1} />
                  <Row className="row-2 mt-5 mb-4">
                    {createTable()}
                  </Row>
                  <Paragraph customClasses="mt-2 fz-18" copy={cequa.cardFour.learnMoreText} />
                  <h2 className="text-left h2-cequa mb-0" dangerouslySetInnerHTML={{ __html: cequa.cardFour.needHelp.title }} />
                  <Paragraph customClasses="" copy={cequa.cardFour.needHelp.body} />
                  <Paragraph customClasses="mt-4" copy={cequa.cardFour.needHelp.contactInfo} />
                </Card>
              </Element>
            </Row>
            <Row className='entireRef'>
            <Paragraph copy={cequa.entireReference} customClasses='yonsaOutColor' />
            <Paragraph copy={cequa.eligibilityRules.title} customClasses='yonsaOutColor mb-0' />
            <ul className="mb-0">
              {generateULsEligibilityRules()}
            </ul>
            <ul className="pl-3 mb-4">
              {generateULsEligibilityRulesHyphen()}
            </ul>
            <Paragraph copy={cequa.termsConditions.title} customClasses='yonsaOutColor mb-0' />
            <ul className="mb-4">
              {generateULsTermsConditions()}
            </ul>
            <Paragraph copy={cequa.disclosures.title} customClasses='yonsaOutColor mb-0' />
            <ul className="mb-0">
              {generateULsDisclosures()}
            </ul>
          </Row>
        </ProgramService>
      </Element>
      <Element name="tools">
        <h2 className={`cequaText mt-text`}>Tools & Resources</h2>
        <DownloadableResources
          numberCols={12} title='Downloadable Resources'
          buttons={cequa.tools} classNames="cequa w-486" bClass="cequaButton"
        />
      </Element>
    <Element name="isi-top-element">
    </Element>
    <ISI wichPage="cequa"/>
    </div>
  )
}
export default Cequa;
