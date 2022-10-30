import React from "react";
import { Container, Row, Col } from 'reactstrap';
import HeroBrand from "../../shared/heroBrand/heroBrand"
import  ProgramService from '../../shared/ProgramService/ProgramService'
import  Card  from '../../shared/Card/Card'
import ImageTitle from '../../shared/ImageTitle/ImageTitle'
import ISI from "../../layout/ISI/ISI";
import {infugem} from "../../../constants/infugem"
import DownloadableResources from '../../shared/DownloadableResources/DownloadableResources'
import Paragraph from '../../shared/Paragraph/Paragraph'
import { Element  } from 'react-scroll'
import { Link } from 'react-scroll';



const buttonExample2 = [{
  label:'INFUGEM Support™ Enrollment Form',
  link: `/data/resources/PM-US-INF-0216 Infugem Support Enrollment Form.pdf`,
  isExternal: true,
  download : true
},
{
  label:'Prior Authorization Checklist',
  link: `/data/resources/PM-US-INF-0148_INFUGEM_Prior Authorization Checklist.pdf`,
  isExternal: true,
  download : true
},
{
  label:'Sample Letter of Medical Necessity',
  link: `/data/resources/PM-US-INF-0056_INFUGEM_Sample Letter of Medical Necessity.pdf`,
  isExternal: true,
  download : true
},
{
  label:'Sample Letter of Appeal',
  link: `/data/resources/PM-US-INF-0055_INFUGEM_Sample Letter of Appeal.pdf`,
  isExternal: true,
  download : true
},
{
  label:'Frequently Asked Questions (FAQs)',
  link: `/data/resources/PM-US-INF-0217 Infugem Support Topline FAQ.pdf`,
  isExternal: true,
  download : true
},

{
  label:'Billing and Coding Guide',
  link: `/data/resources/IPM-US-INF-0208 nfugem Office Kit - Billing and Coding Guide.pdf`,
  isExternal: true,
  download : true
},

{
  label:'Dosing Guide',
  link: `/data/resources/PM-US-INF-0179_INFUGEM_Dosing Guide.pdf`,
  isExternal: true,
  download : true
},

]


const title = 'Access and reimbursement support&nbsp;for INFUGEM<sup>&trade;</sup>';
const subT = ''
const btnArr =  [
  {textBtn: 'Programs & Services', anchorBtn:'programs'},
  {textBtn: 'Tools & Resources', anchorBtn:'tools'},
  {textBtn: 'Brand Website ↗', externalLink: 'https://www.infugem.com/'}
  ];

const Infugem = () => (
  <>
    <HeroBrand brandName='infugem' title={title} subtitle={subT} btnArr={btnArr} />
      <Element name="programs">
        <Container>
          <Row>
            <ProgramService classNames="infugemText" >
              <>
                <Card classNames='card-about'>
                  <>
                    <ImageTitle
                      alt="logo-hand"
                      img={infugem.image1}
                      title={infugem.title}
                      colorCircle="infugemCircle w35"
                      colorText="infugemText"
                      type="small"
                    />
                    {/** start insert code here for each card  */}
                    <Row>

                      <Col xl='12' lg="12" md='12' sm='12' xs='12' className="m-auto">
                        <Paragraph copy={infugem.subtitle} customClasses='infugem-subtitle' />
                      </Col>
                      <Col xl='12' lg="12" md='12' sm='12' xs='12' className="m-auto">
                        <Paragraph copy={infugem.greysubhead} customClasses='' />
                        <Paragraph copy={infugem.greytxt} customClasses='' />
                      </Col>
                    </Row>

                    <Row className="pd-20 ">

                      <Col xl='1' lg="1" md='1' sm='2' xs='2' className="pdr-0">
                        <img src={require('../../../assets/images/icon/infugem/Billing.png')} alt='' className="icon-small" />
                      </Col>
                      <Col xl='11' lg="11" md='11' sm='10' xs='10' className="">
                        <h6 dangerouslySetInnerHTML={{ __html: infugem.bluesubhead1 }} className='blue' />
                        <ul>
                          <li className="normal-dot"dangerouslySetInnerHTML={{ __html: infugem.ul1[0] }} />
                      </ul>
                      </Col>
                    </Row>
                    <Row className="pd-20 pd-normal">

                      <Col xl='1' lg="1" md='1' sm='2' xs='2' className="pdr-0">
                        <img src={require('../../../assets/images/icon/infugem/Benefit.png')} alt='' className="icon-small" />
                      </Col>
                      <Col xl='11' lg="11" md='11' sm='10' xs='10' className="">
                        <h6 dangerouslySetInnerHTML={{ __html: infugem.bluesubhead2 }} className='blue' />
                        <ul>
                          <li className="normal-dot"dangerouslySetInnerHTML={{ __html: infugem.ul2[0] }} />
                          <li className="normal-dot"dangerouslySetInnerHTML={{ __html: infugem.ul2[1] }} />
                      </ul>
                      </Col>
                    </Row>
                    <Row className="pd-20">

                      <Col xl='1' lg="1" md='1' sm='2' xs='2' className="pdr-0">
                        <img src={require('../../../assets/images/icon/infugem/Support.png')} alt='' className="icon-small" />
                      </Col>
                      <Col xl='11' lg="11" md='11' sm='10' xs='10' className="">
                        <h6 dangerouslySetInnerHTML={{ __html: infugem.bluesubhead3 }} className='blue' />
                        <ul>
                          <li className="normal-dot"dangerouslySetInnerHTML={{ __html: infugem.ul3[0] }} />
                      </ul>
                      </Col>
                    </Row>
                    <Row className="pd-20">

                      <Col xl='1' lg="1" md='1' sm='2' xs='2' className="pdr-0">
                        <img src={require('../../../assets/images/icon/infugem/Box-Arrows.png')} alt='' className="icon-small" />
                      </Col>
                      <Col xl='11' lg="11" md='11' sm='10' xs='10' className="">
                        <h6 dangerouslySetInnerHTML={{ __html: infugem.bluesubhead4 }} className='blue' />
                        <ul>
                          <li className="normal-dot"dangerouslySetInnerHTML={{ __html: infugem.ul4[0] }} />
                          <li className="normal-dot"dangerouslySetInnerHTML={{ __html: infugem.ul4[1] }} />
                      </ul>
                      </Col>
                    </Row>
                    <Row className="pd-20">
                      <Col xl='12' lg="12" md='12' sm='12' xs='12' className="">
                        <h6 dangerouslySetInnerHTML={{ __html: infugem.gettingstarted }} className='blue' />
                      </Col>
                    </Row>
                    <Row className="pd-30">

                      <Col xl='1' lg="1" md='1' sm='2' xs='2' className="pdr-0">
                        <h6 dangerouslySetInnerHTML={{ __html: '1.' }} className='blue' />
                      </Col>
                      <Col xl='11' lg="11" md='11' sm='10' xs='10' className="pdl-0">
                        <h6 dangerouslySetInnerHTML={{ __html: infugem.bluesubhead5 }} className='blue' />
                        <Link className='button-link small infugem white' to='tools' spy={false} smooth='easeInOutQuart' offset={50} duration={1500}>
                          <p dangerouslySetInnerHTML={{ __html: infugem.button1.text }} />
                        </Link>
                        <Paragraph copy={infugem.subhead5para} customClasses='' />
                      </Col>
                      <Col xl='1' lg="1" md='1' sm='2' xs='2' className="pdr-0">
                        <h6 dangerouslySetInnerHTML={{ __html: '2.' }} className='blue' />
                      </Col>
                      <Col xl='11' lg="11" md='11' sm='10' xs='10' className="pdl-0">
                        <h6 dangerouslySetInnerHTML={{ __html: infugem.bluesubhead6 }} className='blue' />
                        <Link className='button-link small infugem white w-300' to='tools' spy={false} smooth='easeInOutQuart' offset={50} duration={1500}>
                          <p dangerouslySetInnerHTML={{ __html: infugem.button2.text }} />
                        </Link>
                      </Col>
                      <Col xl='1' lg="1" md='1' sm='2' xs='2' className="pdr-0">
                        <h6 dangerouslySetInnerHTML={{ __html: '3.' }} className='blue' />
                      </Col>
                      <Col xl='11' lg="11" md='11' sm='10' xs='10' className="pdl-0">
                        <h6 dangerouslySetInnerHTML={{ __html: infugem.bluesubhead7 }} className='blue' />
                        <Paragraph copy={infugem.subhead7para} customClasses='f-18' />
                        <ul>
                          <li className="normal-dot"dangerouslySetInnerHTML={{ __html: infugem.ul7[0] }} />
                          <li className="normal-dot"dangerouslySetInnerHTML={{ __html: infugem.ul7[1] }} />
                        </ul>
                      <Paragraph copy={infugem.cpt} customClasses='fs-12' />
                      </Col>
                    </Row>
                    {/** end insert code here for each card  */}
                  </>
                </Card>
              </>
            </ProgramService>
          </Row>
        </Container>
    </Element>
    <Element name="tools">
      <h2 className={`infugemText pd-64`}>Tools & Resources</h2>
      {/* <DownloadableResources
          numberCols={6} title='Downloadable Resources'
          buttons={buttonExample2} classNames="infugem w-358" bClass="infugem-blue"
          numberCols={6}
          buttons={buttonExample3} classNames="infugem w-358" bClass="infugem-blue"
      /> */}
      <DownloadableResources
        numberCols={6} title='Downloadable Resources'
        buttons={buttonExample2} classNames="infugem w-486" bClass="infugemBtn"
        />

    </Element>
    <Element name="isi-top-element">
      </Element>
    <ISI wichPage="infugem"/>
  </>
);

export default Infugem;
