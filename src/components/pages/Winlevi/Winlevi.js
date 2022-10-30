import React from "react";
import { Row } from 'reactstrap';
import HeroBrand from "../../shared/heroBrand/heroBrand"
import { winlevi } from '../../../constants/winlevi'
import Paragraph from '../../shared/Paragraph/Paragraph'
import Button from '../../shared/Button/Button'
import ButtonText from '../../shared/Button/ButtonText'
import  ProgramService from '../../shared/ProgramService/ProgramService'
import  Card  from '../../shared/Card/Card'
import ISI from "../../layout/ISI/ISI";
import ImageTitle from '../../shared/ImageTitle/ImageTitle'
import DownloadableResources from '../../shared/DownloadableResources/DownloadableResources'
import { Element  } from 'react-scroll'
// import CequaCard from '../../shared/Card/CequaCard'
import TableHeader from '../../shared/Cequa/TableHeader'
// import SimpleTable from '../../shared/Cequa/SimpleTable'
// import { Link } from 'react-scroll';
// import useMediaQuery from '@material-ui/core/useMediaQuery';


const title = 'Access and reimbursement support for Winlevi<sup>&reg;</sup>';
const subT = ''


  const validateName = (isDesktop) => {
    if(isDesktop){
      return 'Obtaining Winlevi<sup>&reg;</sup>'
    }else{
      if(/Android/i.test(navigator.userAgent) || /iPhone|iPad|iPod/i.test(navigator.userAgent)){
        return 'Obtaining Winlevi®';
      }
      return 'Obtaining Winlevi®'
    }
  }

function Winlevi(){

  // const isDesktop = useMediaQuery('(min-width:1024px)');

  const btnArr =  [
    {textBtn: validateName() , anchorBtn:'programs'},
    {textBtn: 'Tools & Resources', anchorBtn:'tools'},
    {textBtn: 'Brand Website ↗', externalLink: 'https://www.winlevi-hcp.com/'}
    ];

  const generateWinlevi = () =>{
    return winlevi.buttons.map((e,i) => {
      return <ButtonText
              link={e.slug}
              copy={e.text}
              img={e.icon}
              color="winlevi"
              alt={e.icon}
              type="big"
              key={i}
            />
    });
  }

  // const generateCards = () =>{
  //   return winlevi.cardOne.table1.map((e,i)=>{
  //     return i === 1 ? <p className="rr">{e.or}</p> : <CequaCard card={e} key={i}/>
  //   })
  // }

  // const generateSimpleTable = () =>{
  //   return winlevi.cardOne.table3.map((e,i)=>{
  //     return <SimpleTable text={e} key={i} classs={`${i === 2 || i===3 ? 'show-line': ''}`} />
  //   })
  // }

  // const generateRefs = () =>{
  //   return winlevi.cardOne.references.map((e,i)=>{
  //     return <Paragraph customClasses="reference" copy={e}/>
  //   })
  // }

  // const generateULs = () =>{
  //   return winlevi.cardOne.ul.map((e,i)=>{
  //     if(e.link !== 'undefined' ){
  //     let retStr = <li key={i} className="normal-dot">{e.copy && e.copy}<Link to='tools' spy={false} smooth='easeInOutQuart' offset={50} duration={1500} dangerouslySetInnerHTML={{ __html: e.link }} />{e.afterCopy && e.afterCopy}</li>;
  //       return retStr;
  //     } else{
  //       return <li key={i} className="normal-dot" dangerouslySetInnerHTML={{ __html: e }}/>
  //     }
  //   })
  // }

  // const generateULsCardTwo = () =>{
  //   return winlevi.cardTwo.ul.map((e,i)=>{
  //     return <li key={i} className="normal-dot pad-40" dangerouslySetInnerHTML={{ __html: e }}/>
  //   })
  // }

  // const generateMoreText = () =>{
  //   return winlevi.cardOne.list1.cardR.map((e,i)=>{
  //     return <Paragraph customClasses="more-tex" copy={e}/>
  //   })
  // }

  // const generateRefes = () => {
  //   return winlevi.cardThree.references.map((e,i)=>{
  //     return <Paragraph customClasses="reference pad-l-8" copy={e}/>
  //   })
  // }

  const generateULsEligibilityRules = () => {
    return winlevi.eligibilityRules.ul.map((e, i) => {
      return <li key={i} className="normal-dot mb-0" dangerouslySetInnerHTML={{ __html: e }} />
    })
  }

  const generateULsEligibilityRulesHyphen = () => {
    return winlevi.eligibilityRules.ulHyphen.map((e, i) => {
      return <li key={i} className="hypen mb-0" dangerouslySetInnerHTML={{ __html: e }} />
    })
  }

  const generateULsTermsConditions = () => {
    return winlevi.termsConditions.ul.map((e, i) => {
      return <li key={i} className="normal-dot mb-0" dangerouslySetInnerHTML={{ __html: e }} />
    })
  }

  const generateULsDisclosures = () => {
    return winlevi.disclosures.ul.map((e, i) => {
      return <li key={i} className="normal-dot mb-0" dangerouslySetInnerHTML={{ __html: e }} />
    })
  }

  const rationalebullets = () => {
    return winlevi.pharmabox.rationalebullets.ul.map((e, i) => {
      return <li key={i} className="hyphen mb-0" dangerouslySetInnerHTML={{ __html: e }} />
    })
  }

  const createTable = () =>{
    return winlevi.cardFour.table.map((e,i)=>{
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
    <div className="winlevi-page">
      <HeroBrand brandName='winlevi' title={title} subtitle={subT} btnArr={btnArr} />
      <Element name="programs">
        <ProgramService classNames="winlevi" title="Obtaining Winlevi®">
          <Row className="justify-content-center mt-5 no-gutters">
            {generateWinlevi()}
          </Row>
            <Row className="justify-content-center no-gutters">
              <Element name="retail">
                <Card classNames='card-winlevi'>
                  <ImageTitle
                  alt="logo-hand"
                  img={winlevi.cardTwo.image}
                  title={winlevi.cardTwo.title}
                  colorCircle="winlevi"
                  colorText="winleviText mt-2 mb-0"
                  type="small"
                  />
                  <Paragraph customClasses="mt-3" copy={winlevi.cardTwo.text}/>
                  <Paragraph copy={winlevi.cardTwo.text2}/>
                  <Row className="no-gutters d-flex justify-content-center">
                    <img className="copay-card-ceq img-fluid" height='auto' width='auto' src={require('../../../assets/images/icon/winlevi/copay-card.png')}  alt="copay-card"/>
                    <Button buttonType="small winlevi al-center mt-4 mb-4" copy={winlevi.cardTwo.button.label} isExternal={winlevi.cardTwo.button.isExternal} link={winlevi.cardTwo.button.url}/>
                  </Row>
                  <div className="pd-box-parent">
                  <Row className="no-gutters d-flex justify-content-center pd-box">
                    <img className="icons-left" height='auto' width='auto' src={require('../../../assets/images/icon/winlevi/RX-logo.png')}  alt=""/>
                    <Paragraph className="" copy={winlevi.greenbox.p1} />
                  </Row>
                  <Row className="no-gutters d-flex justify-content-center pd-box">
                    <img className="icons-left" height='auto' width='auto' src={require('../../../assets/images/icon/winlevi/copay-savings.png')}  alt=""/>
                    <Paragraph className="" copy={winlevi.greenbox.p2} />
                  </Row>
                  <Row className="no-gutters d-flex justify-content-center pd-box">
                    <img className="icons-left" height='auto' width='auto' src={require('../../../assets/images/icon/winlevi/downwardarrow.png')}  alt=""/>
                    <Paragraph className="" copy={winlevi.greenbox.p3} />
                  </Row>
                  </div>
                  {/* <ul>
                    {generateULsCardTwo()}
                  </ul> */}

                  <Paragraph customClasses="reference mb-0 pl-8"  copy={winlevi.cardTwo.terms.reference}/>
                </Card>
              </Element>
            </Row>
            <Row className="justify-content-center no-gutters">
              <Element name="compare">
                <Card classNames='card-winlevi'>
                  <ImageTitle
                      alt="logo-hand"
                      img={winlevi.cardThree.image}
                      title={winlevi.cardThree.title}
                      colorCircle="winlevi"
                      colorText="winleviText mb-0"
                      type="small"
                  />
                  <Row className="no-gutters">
                  <Paragraph customClasses="mt-3"  copy={winlevi.cardThree.subtitle} />
                  </Row>
                  {/* <Row className="no-gutters">
                    <img className="copay-card-ceq-2" src={require('../../../assets/images/icon/cequa/chart.png')}  alt="chart"/>
                    <img className="copay-card-ceq-3" src={require('../../../assets/images/icon/cequa/chart-mb.png')}  alt="chart"/>
                  </Row> */}
                  {/* {generateRefes()} */}
                  <div className="pharma-box">
                    <img className="logo-left-pharma" height='auto' width='auto' src={require('../../../assets/images/icon/cequa/covermymeds.png')}  alt=""/>
                    <Paragraph className="" copy={winlevi.pharmabox.covermedp1} />
                  <Row className="no-gutters d-flex justify-content-center pd-box">
                    <Paragraph className="" copy={winlevi.pharmabox.covermedp2} />
                  </Row>
                  <img className="logo-left-pharma" height='auto' width='auto' src={require('../../../assets/images/icon/cequa/PARx_logo.png')}  alt=""/>
                    <Paragraph className="" copy={winlevi.pharmabox.rxp1} />
                    <Row className="no-gutters d-flex justify-content-center pd-box">
                  </Row>
                  <Row className="no-gutters">
                    <Paragraph className="" copy={winlevi.pharmabox.p6} />
                    <Paragraph className="" copy={winlevi.pharmabox.p7} />
                    <ul className="mb-0 rationale">
                      {rationalebullets()}
                    </ul>
                    <Paragraph customClasses="blue mt-3" copy={winlevi.pharmabox.p8} />
                    <Paragraph customClasses="" copy={winlevi.pharmabox.p9} />
                    <Paragraph customClasses="blue mb-0" copy={winlevi.pharmabox.p10} />
                    <Paragraph customClasses="w-100" copy={winlevi.pharmabox.p11} />
                    <Paragraph className="" copy={winlevi.pharmabox.p12} />
                  </Row>
                  </div>
                </Card>
                </Element>
            </Row>
            <Row className="justify-content-center no-gutters">
              <Element name="share">
                <Card classNames='card-winlevi'>
                  <ImageTitle
                      alt="logo-hand"
                      img={winlevi.cardFour.image}
                      title={winlevi.cardFour.title}
                      colorCircle="winlevi"
                      colorText="winleviText mb-0"
                      type="small"
                      inlineLogo={winlevi.cardThree.image}
                  />
                  <h2 className="text-left h2-winlevi mb-0 mt-4" dangerouslySetInnerHTML={{ __html: winlevi.cardFour.subhead }} />
                  <Paragraph customClasses="mt-3" copy={winlevi.cardFour.copy1} />
                  <Row className="row-2 mt-5 mb-4">
                    {createTable()}
                  </Row>
                  <Paragraph customClasses="mt-2 fz-18" copy={winlevi.cardFour.learnMoreText} />
                  <h2 className="text-left h2-winlevi mb-0" dangerouslySetInnerHTML={{ __html: winlevi.cardFour.needHelp.title }} />
                  <Paragraph customClasses="" copy={winlevi.cardFour.needHelp.body} />
                  <Paragraph customClasses="mt-4" copy={winlevi.cardFour.needHelp.contactInfo} />
                </Card>
              </Element>
            </Row>
            <Row className='entireRef'>
            <Paragraph copy={winlevi.entireReference} customClasses='yonsaOutColor' />
            <Paragraph copy={winlevi.eligibilityRules.title} customClasses='yonsaOutColor mb-0' />
            <ul className="mb-0">
              {generateULsEligibilityRules()}
            </ul>
            <ul className="pl-3 mb-4">
              {generateULsEligibilityRulesHyphen()}
            </ul>
            <Paragraph copy={winlevi.termsConditions.title} customClasses='yonsaOutColor mb-0' />
            <ul className="mb-4">
              {generateULsTermsConditions()}
            </ul>
            <Paragraph copy={winlevi.disclosures.title} customClasses='yonsaOutColor mb-0' />
            <ul className="mb-0">
              {generateULsDisclosures()}
            </ul>
          </Row>
        </ProgramService>
      </Element>
      <Element name="tools">
        <h2 className={`winleviText mt-text`}>Tools & Resources</h2>
        <DownloadableResources
          numberCols={12} title='Downloadable Resources'
          buttons={winlevi.tools} classNames="winlevi w-486" bClass="winleviButton"
        />
      </Element>
    <Element name="isi-top-element">
    </Element>
    <ISI wichPage="winlevi"/>
    </div>
  )
}
export default Winlevi;
