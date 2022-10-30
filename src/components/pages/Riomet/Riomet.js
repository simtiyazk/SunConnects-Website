import React from "react";
import { Container, Row, Col } from 'reactstrap';
import HeroBrand from "../../shared/heroBrand/heroBrand"
import  ProgramService from '../../shared/ProgramService/ProgramService'
import  Card  from '../../shared/Card/Card'
import ImageTitle from '../../shared/ImageTitle/ImageTitle'
import {riomet} from "../../../constants/riomet"
import DownloadableResources from '../../shared/DownloadableResources/DownloadableResources'
import { Element  } from 'react-scroll'
import Paragraph from '../../shared/Paragraph/Paragraph'
import Button from '../../shared/Button/Button';
import ISI from "../../layout/ISI/ISI";

const downloadableResources = [{
  label:'Riomet ER™ Coupon',
  link: `/data/resources/PM-US-RER-0037_RIOMET_Riomet ER Coupon.png`,
  isExternal: true,
  download : true
},
{
  label:'Sample Letter of Medical Necessity',
  link: `/data/resources/PM-US-RER-0022_RIOMET ER_Sample Letter of Medical Necessity.pdf`,
  isExternal: true,
  download : true
},
{
  label:'Sample Letter of Appeal',
  link: `/data/resources/PM-US-RER-0023_RIOMET ER_Sample Letter of Appeal.pdf`,
  isExternal: true,
  download : true
},
]
const title = `Access and reimbursement support for Riomet ER<sup>&trade;</sup>`;
const subT = ''
const btnArr =  [
  {textBtn: 'Programs & Services', anchorBtn:'programs'},
  {textBtn: 'Tools & Resources', anchorBtn:'tools'},
  {textBtn: 'Brand Website ↗', externalLink: 'https://www.riometer.com/'}
  ];

const Riomet = () => (
  <div className="riomet-page">
    <HeroBrand brandName='riomet' title={title} subtitle={subT} btnArr={btnArr} />
    <Element name="programs">
        <Container>
          <Row>
            <ProgramService classNames="riometText" >
              <>
                <Card classNames='card-about'>
                  <>
                    <ImageTitle
                      alt="logo-hand"
                      img={riomet.image1}
                      title={riomet.title}
                      colorCircle="riometCircle"
                      colorText="riometText"
                      type="small"
                    />
                    {/** start insert code here for each card  */}
                    <Row>
                      <Col xl='8' lg="8" md='8' sm='12' xs='12'>
                        <img className='img-fluid float-left' src={require('../../../assets/images/icon/riomet/copayCard.png')} alt='Co-Pay Card' />
                      </Col>
                      <Col xl='12' lg="12" md='12' sm='12' xs='12'>
                        <Paragraph copy={riomet.subtitle} customClasses='subtitle' />
                        <Paragraph copy={riomet.underTitle} customClasses='underTitle' />
                      </Col>
                      <Col xl='12' lg="12" md='12' sm='12' xs='12'>
                        <Button buttonType="small riomet button-link-card" copy={riomet.button.text} isExternal={riomet.button.isExternal} link={riomet.button.url}/>
                      </Col>
                      <Col xl='12' lg="12" md='12' sm='12' xs='12'>
                        <Paragraph copy={riomet.bottomText} customClasses='subtitle' />
                        <p dangerouslySetInnerHTML={{ __html: riomet.reference }} className='reference'/>
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
      <h2 className={`riometText`}>Tools & Resources</h2>
      <DownloadableResources
        numberCols={12} title='Downloadable Resources'
        buttons={downloadableResources} classNames="riomet w-450" bClass="rioBtn"
      />
    </Element>
    <ISI wichPage="riomet"/>
  </div>
);

export default Riomet;
