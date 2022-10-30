import React from "react";
import { Container, Row, Col } from 'reactstrap';
import HeroBrand from "../../shared/heroBrand/heroBrand"
import  ProgramService from '../../shared/ProgramService/ProgramService'
import  Card  from '../../shared/Card/Card'
import ISI from "../../layout/ISI/ISI";
import ImageTitle from '../../shared/ImageTitle/ImageTitle'
import {halog} from "../../../constants/halog"
import DownloadableResources from '../../shared/DownloadableResources/DownloadableResources'
import Paragraph from '../../shared/Paragraph/Paragraph'
import Button from '../../shared/Button/Button'
import { Element  } from 'react-scroll'



const buttonExample2 = [{
  label:'Copay Card',
  link: `/data/resources/PM-US-HLG-0046_HALOG_Co-Pay%20Card.pdf`,
  isExternal: true,
  download : true
}]

const title = 'Access and reimbursement support&nbsp;for HALOG<sup>&reg;</sup>';
const subT = ''
const btnArr =  [
  {textBtn: 'Programs & Services', anchorBtn:'programs'},
  {textBtn: 'Tools & Resources', anchorBtn:'tools'},
  {textBtn: 'Brand Website ↗', externalLink: 'https://haloghcp.com/'}
  ];

const Halog = () => (
  <div className="halog-page">
    <HeroBrand brandName='halog' title={title} subtitle={subT} btnArr={btnArr} />
      <Element name="programs">
        <Container>
          <Row>
            <ProgramService classNames="halogText" >
              <>
                <Card classNames='card-about'>
                  <>
                    <ImageTitle
                      alt="logo-hand"
                      img={halog.image1}
                      title={halog.title}
                      colorCircle="halogCircle"
                      colorText="halogText"
                      type="small"
                    />
                    {/** start insert code here for each card  */}
                    <Row>
                      <Col xl='6' lg="6" md='12' sm='12' xs='12'>
                        <img className='img-fluid' src={require('../../../assets/images/icon/halog/coPay.png')} alt='Co-Pay Card' />
                      </Col>
                      <Col xl='6' lg="6" md='12' sm='12' xs='12'>
                        <ul>
                          <li className="normal-dot mt-5"dangerouslySetInnerHTML={{ __html: halog.ul[0] }} />
                          <li className="normal-dot" dangerouslySetInnerHTML={{ __html: halog.ul[1] }} />
                        </ul>
                        <Paragraph copy={halog.subtitle} customClasses='subtitle' />
                        <Button buttonType="small halog button-card" copy={halog.button.text} isExternal={halog.button.isExternal} link={halog.button.url}/>
                      </Col>
                      <Col xl='12' lg="12" md='12' sm='12' xs='12'>
                        <p dangerouslySetInnerHTML={{ __html: halog.reference }} className='reference'/>
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
      <h2 className={`halogText`}>Tools & Resources</h2>
      <DownloadableResources
          numberCols={12} title='Downloadable Resources'
          buttons={buttonExample2} classNames="red halog w-358" bClass="cyan"
      />
    </Element>
    <Element name="isi-top-element">
      </Element>
    <ISI wichPage="halog"/>
  </div>
);

export default Halog;
