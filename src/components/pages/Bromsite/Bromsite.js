import React from "react";
import { Container, Row, Col } from 'reactstrap';
import HeroBrand from "../../shared/heroBrand/heroBrand"
import  ProgramService from '../../shared/ProgramService/ProgramService'
import  Card  from '../../shared/Card/Card'
import ImageTitle from '../../shared/ImageTitle/ImageTitle'
import ISI from "../../layout/ISI/ISI";
import {bromsite} from "../../../constants/bromsite"
import DownloadableResources from '../../shared/DownloadableResources/DownloadableResources'
import Paragraph from '../../shared/Paragraph/Paragraph'
import Button from '../../shared/Button/Button'
import { Element  } from 'react-scroll'



const buttonExample2 = [{
  label:'Copay Card',
  link: '/data/resources/PM-US-BRO-0118_BROMSITE_Copay%20Card.pdf',
  isExternal: true,
  download : true
}]

const title = 'Access and reimbursement support&nbsp;for BromSite<sup>&reg;</sup>';
const subT = ''
const btnArr =  [
  {textBtn: 'Programs & Services', anchorBtn:'programs'},
  {textBtn: 'Tools & Resources', anchorBtn:'tools'},
  {textBtn: 'Brand Website ↗', externalLink: 'https://www.bromsite.com/'}
  ];

const Bromsite = () => (
  <>
    <HeroBrand brandName='bromsite' title={title} subtitle={subT} btnArr={btnArr} />
      <Element name="programs">
        <Container>
          <Row>
            <ProgramService classNames="bromsiteText" >
              <>
                <Card classNames='card-about'>
                  <>
                    <ImageTitle
                      alt="logo-hand"
                      img={bromsite.image1}
                      title={bromsite.title}
                      colorCircle="bromsiteCircle"
                      colorText="bromsiteText"
                      type="small"
                    />
                    {/** start insert code here for each card  */}
                    <Row>
                      <Col xl='7' lg="7" md='12' sm='12' xs='12' className="pd-0">
                        <img className='img-fluid' src={require('../../../assets/images/icon/bromsite/coPay.png')} alt='Co-Pay Card' />
                      </Col>
                      <Col xl='5' lg="5" md='12' sm='12' xs='12' className="m-auto">
                        <Paragraph copy={bromsite.subtitle} customClasses='subtitle' />
                        <Button buttonType="small bromsite" copy={bromsite.button.text} isExternal={bromsite.button.isExternal} link={bromsite.button.url}/>
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
      <h2 className={`bromsiteText`}>Tools & Resources</h2>
      <DownloadableResources
          numberCols={12} title='Downloadable Resources'
          buttons={buttonExample2} classNames="red bromsite-red bromsite w-358" bClass="bromsiteBtn"
      />
    </Element>
    <Element name="isi-top-element">
    </Element>
    <ISI wichPage="bromsite"/>
  </>
);

export default Bromsite;
