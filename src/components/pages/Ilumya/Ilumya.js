import React from "react";
import { Row, Col } from 'reactstrap';
import Paragraph from '../../shared/Paragraph/Paragraph'
import Button from '../../shared/Button/Button'
import HeroBrand from "../../shared/heroBrand/heroBrand"
import ISI from "../../layout/ISI/ISI";
import { Element } from 'react-scroll'
import ButtonText from '../../shared/Button/ButtonText'
import ProgramService from '../../shared/ProgramService/ProgramService'
import Card from '../../shared/Card/Card'
import ImageTitle from '../../shared/ImageTitle/ImageTitle'
import DownloadableResources from '../../shared/DownloadableResources/DownloadableResources'
import { ilumyaData } from '../../../constants/ilumya'
import useMediaQuery from '@material-ui/core/useMediaQuery';

const title = 'Access and reimbursement<br/>support for ILUMYA<sup>&reg;</sup>';
const subT = ''



const validateName = (isDesktop) => {
  if (isDesktop) {
    return 'Purchasing ILUMYA<sup>&reg;</sup>'
  } else {
    if (/Android/i.test(navigator.userAgent) || /iPhone|iPad|iPod/i.test(navigator.userAgent)) {
      return 'Purchasing ILUMYA®';
    }
    return 'Purchasing ILUMYA<sup>&reg;</sup>'
  }
}


function Ilumya(props) {

  const isDesktop = useMediaQuery('(min-width:1024px)');

  const btnArr = [
    { textBtn: 'Programs & Services', anchorBtn: 'programs' },
    { textBtn: validateName(isDesktop), anchorBtn: 'purchasing-title' },
    { textBtn: 'Tools & Resources', anchorBtn: 'tools' },
    { textBtn: 'Brand Website ↗', externalLink: 'http://www.ilumyapro.com' }
  ];

  const generateBtns = (data) => {
    return data.map((e, i) => {
      return <ButtonText
        link={e.slug}
        copy={e.text}
        img={e.icon}
        color="ilumya"
        alt={e.icon}
        type={`big ${i === 2 || i === 3 ? "upper" : ''} `}
        key={i}
      />
    });
  }

  const generateULs = (arr) => {
    return arr.map((e, i) => {
      return <li key={i} className="normal-dot mb-4" dangerouslySetInnerHTML={{ __html: e }} />
    })
  }

  return (
    <>
      <div className="ilumya-page">
        <HeroBrand brandName='ilumya' title={title} subtitle={subT} btnArr={btnArr} />
        <Element name="programs">
          <ProgramService classNames="ilumya">
            <Row className="justify-content-center mt-5 no-gutters">
              <Col md='12' className='d-flex justify-content-center'>
                <Paragraph copy={ilumyaData.programs.cardOne.copy} customClasses='copy-w mb-5' />
              </Col>
              {generateBtns(ilumyaData.programs.cardOne.buttons)}
            </Row>
            <Row className="justify-content-center no-gutters">
              <Element name="copay-programs">
                <Card classNames='more'>
                  <ImageTitle
                    alt="logo-hand"
                    img={ilumyaData.programs.cardOne.image}
                    title={ilumyaData.programs.cardOne.title}
                    colorCircle="ilumya"
                    colorText="red"
                    type="small"
                  />
                  <Row>
                    <Col md='12'>
                      <h6 dangerouslySetInnerHTML={{ __html: ilumyaData.programs.cardOne.subhead1 }} className='' />
                    </Col>
                    <Col md='12'><ul>{generateULs(ilumyaData.programs.cardOne.ul)}</ul></Col>
                    <Col md='12'>
                      <section className='whiteBox'>
                        <Row>
                          <Col md='6'>
                            <h6 dangerouslySetInnerHTML={{ __html: ilumyaData.programs.cardOne.whiteBox.text }} className='' />
                          </Col>
                          <Col md='6' className='mb-mob'>
                            <Button buttonType="ilumya" copy={ilumyaData.programs.cardOne.whiteBox.btnPurple} isExternal={true} link={ilumyaData.programs.cardOne.whiteBox.link} />
                          </Col>
                        </Row>
                      </section>
                    </Col>
                    <Col md='12'>
                      <h6 dangerouslySetInnerHTML={{ __html: ilumyaData.programs.cardOne.subhead2 }} className='' />
                      <Row className='text-center'>
                        <Col md='6' lg='6' sm='12' xs='12' className='mb-fix'>
                          <img src={require('../../../assets/images/icon/ilumya/pencil.png')} width="60" alt="pencil" />
                          <h6 dangerouslySetInnerHTML={{ __html: ilumyaData.programs.cardOne.littleBoxes.box1.title }} className='' />
                          <p dangerouslySetInnerHTML={{ __html: ilumyaData.programs.cardOne.littleBoxes.box1.text }} className='p-14' />
                          <a href={ilumyaData.programs.cardOne.littleBoxes.box1.link} target='_new' dangerouslySetInnerHTML={{ __html: ilumyaData.programs.cardOne.littleBoxes.box1.textLink }} className='purpleLink p-14' />
                        </Col>
                        <Col md='6' lg='6' sm='12' xs='12' className='mb-fix'>
                          <img src={require('../../../assets/images/icon/ilumya/tool.png')} width="60" alt="tool" />
                          <h6 dangerouslySetInnerHTML={{ __html: ilumyaData.programs.cardOne.littleBoxes.box2.title }} className='' />
                          <p dangerouslySetInnerHTML={{ __html: ilumyaData.programs.cardOne.littleBoxes.box2.text }} className='' />
                        </Col>
                        <Col md='6' lg='6' sm='12' xs='12' className='mb-fix'>
                          <img src={require('../../../assets/images/icon/ilumya/box.png')} width="60" alt="box" />
                          <h6 dangerouslySetInnerHTML={{ __html: ilumyaData.programs.cardOne.littleBoxes.box3.title }} className='' />
                          <p dangerouslySetInnerHTML={{ __html: ilumyaData.programs.cardOne.littleBoxes.box3.text }} className='' />
                        </Col>
                        <Col md='6' lg='6' sm='12' xs='12' className='mb-fix'>
                          <img src={require('../../../assets/images/icon/ilumya/export.png')} width="60" alt="export" />
                          <h6 dangerouslySetInnerHTML={{ __html: ilumyaData.programs.cardOne.littleBoxes.box4.title }} className='' />
                          <p dangerouslySetInnerHTML={{ __html: ilumyaData.programs.cardOne.littleBoxes.box4.text }} className='' />
                        </Col>
                      </Row>
                    </Col>
                    <Col md='12'>
                      <h6 dangerouslySetInnerHTML={{ __html: ilumyaData.programs.cardOne.subhead3 }} className='' />
                    </Col>
                    <Col md='12'>
                      <ul>
                        <p dangerouslySetInnerHTML={{ __html: ilumyaData.programs.cardOne.text }} className='mb-3' />
                        <li className="normal-dot mb-3" dangerouslySetInnerHTML={{ __html: ilumyaData.programs.cardOne.ulOuter1 }} />
                        <li className="normal-dot mb-3" dangerouslySetInnerHTML={{ __html: ilumyaData.programs.cardOne.ulOuter2 }} />
                        <li className="normal-dot mb-3" dangerouslySetInnerHTML={{ __html: ilumyaData.programs.cardOne.ulOuter3 }} />
                      </ul>
                    </Col>
                    <Col md='12'><Paragraph copy={ilumyaData.programs.cardOne.reference} customClasses='reference' /></Col>
                  </Row>
                </Card>
                <Card classNames='access'>
                  <ImageTitle
                    alt="logo-hand"
                    img={ilumyaData.programs.card2.image}
                    title={ilumyaData.programs.card2.title}
                    colorCircle="ilumya"
                    colorText="red"
                    type="small"
                  />
                  <Row className='mt-5'>
                    <Col md='12'><ul>{generateULs(ilumyaData.programs.card2.ul)}</ul></Col>
                    <Col md='12'><Paragraph copy={ilumyaData.programs.card2.reference1} customClasses="reference" /></Col>
                    <Col md='12'><Paragraph copy={ilumyaData.programs.card2.reference2} customClasses="reference" /></Col>
                  </Row>
                </Card>
                <Card classNames='copay-program'>
                  <ImageTitle
                    alt="logo-hand"
                    img={ilumyaData.programs.card3.image}
                    title={ilumyaData.programs.card3.title}
                    colorCircle="ilumya"
                    colorText="red"
                    type="small"
                  />
                  <Row className='mt-5 no-gutters'>
                    <Col md='7' lg='7' sm='12' xs='12'>
                      <img src={require('../../../assets/images/icon/ilumya/copayCard.svg')} width="100%" alt="export" />
                    </Col>
                    <Col md='5' lg='5' sm='12' xs='12'>
                      <Col md='12' className='mt-4 fix-pd-mob'>
                        <Paragraph copy={ilumyaData.programs.card3.sideText} customClasses='mb-3' />
                        <Paragraph copy={ilumyaData.programs.card3.underSide} customClasses='mb-3' />
                      </Col>
                    </Col>
                    <Col md='12'>
                      <Paragraph copy={ilumyaData.programs.card3.reference} customClasses='reference' />
                    </Col>
                    <Col md='12'>
                      <Paragraph copy={ilumyaData.programs.card3.reference2} customClasses='reference' />
                    </Col>
                  </Row>
                </Card>
                <Card classNames='pap'>
                  <ImageTitle
                    alt="logo-hand"
                    img={ilumyaData.programs.card4.image}
                    title={ilumyaData.programs.card4.title}
                    colorCircle="ilumya"
                    colorText="red"
                    type="small"
                  />
                  <Row className='mt-5'>
                    <Col md='12' className='mb-4'>
                      <Paragraph copy={ilumyaData.programs.card4.content1} customClasses='' />
                    </Col>
                    <Col md='12'>
                      <Paragraph copy={ilumyaData.programs.card4.content2} customClasses='reference' />
                    </Col>
                    <Col md='12'>
                      <Paragraph copy={ilumyaData.programs.card4.content3} customClasses='reference' />
                    </Col>
                    <Col md='12'>
                      <Paragraph copy={ilumyaData.programs.card4.content4} customClasses='reference' />
                    </Col>
                  </Row>
                </Card>
                <Card classNames='foundation'>
                  <ImageTitle
                    alt="logo-hand"
                    img={ilumyaData.programs.card5.image}
                    title={ilumyaData.programs.card5.title}
                    colorCircle="ilumya"
                    colorText="red"
                    type="small"
                  />
                  <Row className='mt-5'>
                    <Col md='12'>
                      <Paragraph copy={ilumyaData.programs.card5.content1} customClasses='' />
                    </Col>
                    <Col md='12' className='mt-4'>
                      <Paragraph copy={ilumyaData.programs.card5.content2} customClasses='' />
                    </Col>
                    <Col md='12'><Paragraph copy={ilumyaData.programs.card5.reference} customClasses='reference' /></Col>
                  </Row>
                </Card>
              </Element>
            </Row>
          </ProgramService>
        </Element>
        <Element name="purchasing-title" className='space-btw'>
          <h2 className={`ilumyaText`}>Purchasing ILUMYA<sup>&reg;</sup></h2>
          <hr />
          <Row className="justify-content-center mt-5 no-gutters">
            {generateBtns(ilumyaData.purchasing.buttons)}
          </Row>
          <Row className="justify-content-center no-gutters">
            <Element name="">
              <Card classNames='options'>
                <ImageTitle
                  alt="logo-hand"
                  img={ilumyaData.purchasing.cardOne.image}
                  title={ilumyaData.purchasing.cardOne.title}
                  colorCircle="ilumya"
                  colorText="red"
                  type="small"
                />
                <Row className='mt-5'>
                  <Col md='12'>
                    <Paragraph copy={ilumyaData.purchasing.cardOne.subtitle} customClasses='' />
                  </Col>
                  <Col md='12'>
                    <h6 dangerouslySetInnerHTML={{ __html: ilumyaData.purchasing.cardOne.table.row1 }} className='' />
                  </Col>
                  <Col md='12'>
                    <Row>
                      <Col md='4' sm='4' xs='4'><Paragraph copy={ilumyaData.purchasing.cardOne.table.td1} customClasses='strong600' /></Col>
                      <Col md='4' sm='4' xs='4'><Paragraph copy={ilumyaData.purchasing.cardOne.table.td2} customClasses='strong600' /></Col>
                      <Col md='4' sm='4' xs='4'><Paragraph copy={ilumyaData.purchasing.cardOne.table.td3} customClasses='strong600' /></Col>
                    </Row>
                  </Col>
                  <Col md='12'>
                    <h6 dangerouslySetInnerHTML={{ __html: ilumyaData.purchasing.cardOne.table.row2 }} className='' />
                  </Col>
                  <Col md='12'>
                    <Row>
                      <Col md='4' sm='6' xs='6'><Paragraph copy={ilumyaData.purchasing.cardOne.table.line1} customClasses='' /></Col>
                      <Col md='8' sm='6' xs='6'><Paragraph copy={ilumyaData.purchasing.cardOne.table.line2} customClasses='' /></Col>
                    </Row>
                  </Col>
                  <Col md='12'>
                    <h6 dangerouslySetInnerHTML={{ __html: ilumyaData.purchasing.cardOne.content }} className='' />
                  </Col>
                  <Col md='12'>
                    <Paragraph copy={ilumyaData.purchasing.cardOne.pointA} customClasses='no-pb' />
                    <Paragraph copy={ilumyaData.purchasing.cardOne.pointB} customClasses='no-pb' />
                    <Paragraph copy={ilumyaData.purchasing.cardOne.pointC} customClasses='no-pb' />
                  </Col>
                  <Col md='12' className='mt-4'>
                    <Paragraph copy={ilumyaData.purchasing.cardOne.footer} customClasses='strong600' />
                  </Col>
                </Row>
              </Card>
              <Card classNames='billing'>
                <ImageTitle
                  alt="logo-hand"
                  img={ilumyaData.purchasing.card2.image}
                  title={ilumyaData.purchasing.card2.title}
                  colorCircle="ilumya"
                  colorText="red"
                  type="small"
                />
                <Row className='mt-5'>
                  <Col md='12'>
                    <Paragraph copy={ilumyaData.purchasing.card2.subtitle} customClasses='' />
                  </Col>
                  <Col md='12' className='mt-5'>
                    <section className='table'>
                      <Row className='no-gutters'><Col md='12'><Paragraph copy={ilumyaData.purchasing.card2.table.header} customClasses='header' /></Col></Row>
                      <Row className='no-gutters'>
                        <Col md='6' sm='6' xs='6'><Paragraph copy={ilumyaData.purchasing.card2.table.row1.td1} customClasses='postHeader mx-1 mb-1' /></Col>
                        <Col md='6' sm='6' xs='6'><Paragraph copy={ilumyaData.purchasing.card2.table.row1.td2} customClasses='postHeader mr-1' /></Col>
                      </Row>
                      <Row className='no-gutters'>
                        <Col md='4' sm='4' xs='4'><Paragraph copy={ilumyaData.purchasing.card2.table.row2.td1} customClasses='greyBoxes mx-1 mb-1' /></Col>
                        <Col md='4' sm='4' xs='4'><Paragraph copy={ilumyaData.purchasing.card2.table.row2.td2} customClasses='greyBoxes mr-1' /></Col>
                        <Col md='4' sm='4' xs='4'><Paragraph copy={ilumyaData.purchasing.card2.table.row2.td3} customClasses='greyBoxes mr-1' /></Col>
                      </Row>
                      <Row className='no-gutters'>
                        <Col md='4' sm='4' xs='4'><Paragraph copy={ilumyaData.purchasing.card2.table.row3.td1} customClasses='lightGreyBoxes mx-1 mb-1 borderL pt-4 fix-pt-mob' /></Col>
                        <Col md='4' sm='4' xs='4'><Paragraph copy={ilumyaData.purchasing.card2.table.row3.td2} customClasses='lightGreyBoxes mr-1' /></Col>
                        <Col md='4' sm='4' xs='4'><Paragraph copy={ilumyaData.purchasing.card2.table.row3.td3} customClasses='lightGreyBoxes mr-1 borderR' /></Col>
                      </Row>
                    </section>
                  </Col>
                  <Col md='12'>
                    <Paragraph copy={ilumyaData.purchasing.card2.contentTitle} customClasses='mt-5 strong600' />
                  </Col>
                  <Col md='12' className='mt-5'>
                    <ul>{generateULs(ilumyaData.purchasing.card2.ul)}</ul>
                  </Col>
                  <Col md='12'>
                    <Paragraph copy={ilumyaData.purchasing.card2.footer} customClasses='mt-4' />
                  </Col>
                  <Col md='12'>
                    <Paragraph copy={ilumyaData.purchasing.card2.reference} customClasses='mt-4 reference' />
                  </Col>
                </Row>
              </Card>
            </Element>
          </Row>
        </Element>
        <Element name="tools" className='space-btw'>
          <h2 className={`ilumyaText`}>Tools & Resources</h2>
          <hr />
          <Row className="justify-content-center mt-5 no-gutters">
            {generateBtns(ilumyaData.toolsbuttons)}
          </Row>
          <Row className="justify-content-center no-gutters">
            <Element name="">
              <Card classNames='nica'>
                <ImageTitle
                  alt="logo-hand"
                  img={ilumyaData.toolsCard.image}
                  title={ilumyaData.toolsCard.title}
                  colorCircle="ilumya"
                  colorText="red"
                  type="small"
                />
                <Row>
                  <Col md='12'>
                    <Row className='mt-5 d-flex'>
                      <Col lg={{ size: 6, order: 1 }} md={{ size: 6, order: 2 }} sm={{ size: 12, order: 2 }} xs={{ size: 12, order: 2 }} className='fix-pt-mob'>
                        <Paragraph copy={ilumyaData.toolsCard.content} customClasses='' />
                      </Col>
                      <Col lg={{ size: 6, order: 2 }} md={{ size: 6, order: 1 }} sm={{ size: 12, order: 1 }} xs={{ size: 12, order: 1 }} className='mt-5 centerImg'>
                        <img src={require('../../../assets/images/icon/ilumya/nicaLogo.svg')} width="241" alt="pencil" />
                      </Col>
                    </Row>
                  </Col>
                  <Col md='6'>
                    <Button buttonType="ilumya mt-4 mb-4" isLongScroll='true' copy={ilumyaData.toolsCard.btnText} isExternal={ilumyaData.toolsCard.isExternal} link={ilumyaData.toolsCard.link} />
                  </Col>
                </Row>
              </Card>
            </Element>
          </Row>
          <DownloadableResources
            numberCols={12} title='Downloadable Resources'
            buttons={ilumyaData.tools} classNames="ilumya w-560 tools-down" bClass="ilumyaBtn"
          />
        </Element>

        <Element name="isi-top-element">
        </Element>
        <ISI wichPage="ilumyna" />
      </div>
    </>
  );
}


export default Ilumya;
