import React from "react";
import { Container, Row, Col } from 'reactstrap';
import HeroBrand from "../../shared/heroBrand/heroBrand"
import  ProgramService from '../../shared/ProgramService/ProgramService'
import  Card  from '../../shared/Card/Card'
import ISI from "../../layout/ISI/ISI";
import ImageTitle from '../../shared/ImageTitle/ImageTitle'
import {ultravate} from "../../../constants/ultravate"
import DownloadableResources from '../../shared/DownloadableResources/DownloadableResources'
import { Element  } from 'react-scroll'
import Paragraph from '../../shared/Paragraph/Paragraph'
import Button from '../../shared/Button/Button'

const buttonExample2 = [{
  label:'Copay Card',
  link: `/data/resources/PM-US-HLG-0046_ULTRAVATE%20LOTION_Co-Pay%20Card.pdf`,
  isExternal: true,
  download : true
},
]
const title = 'Access and reimbursement<br/> support for ULTRAVATE<sup>&reg;</sup> Lotion';
const subT = ''
const btnArr =  [
  {textBtn: 'Programs & Services', anchorBtn:'programs'},
  {textBtn: 'Tools & Resources', anchorBtn:'tools'},
  {textBtn: 'Brand Website ↗', externalLink: 'https://ultravatelotion.com/'}
  ];

const Ultravate = () => (
  <div className="ultravate-page">
    <HeroBrand brandName='ultravate' title={title} subtitle={subT} btnArr={btnArr} />
    <Element name="programs">
        <Container>
          <Row>
            <ProgramService classNames="ultravateText" >
              <>
                <Card classNames='card-about'>
                  <>
                    <ImageTitle
                      alt="logo-hand"
                      img={ultravate.image1}
                      title={ultravate.title}
                      colorCircle="ultravate"
                      colorText="red"
                      type="small"
                    />
                    {/** start insert code here for each card  */}
                    <Row className='mt-5'>
                      <Col xl='6' lg="6" md='12' sm='12' xs='12'>
                        <img className='img-fluid' src={require('../../../assets/images/icon/ultravate/coPay.png')} alt='Co-Pay Card' />
                      </Col>
                      <Col xl='6' lg="6" md='12' sm='12' xs='12' className='mt-4'>
                        <Paragraph copy={ultravate.ulTitle} customClasses='subtitle' />
                        <ul>
                          <li className="normal-dot"dangerouslySetInnerHTML={{ __html: ultravate.ul[0] }} />
                          <li className="normal-dot" dangerouslySetInnerHTML={{ __html: ultravate.ul[1] }} />
                        </ul>
                        <Button buttonType="small halog button-link-card" copy={ultravate.button.text} isExternal={ultravate.button.isExternal} link={ultravate.button.url}/>
                      </Col>
                      <Col xl='12' lg="12" md='12' sm='12' xs='12'>
                        <Paragraph copy={ultravate.bottomText} customClasses='subtitle' />
                        <p dangerouslySetInnerHTML={{ __html: ultravate.reference }} className='reference'/>
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
      <h2 className={`ultravateText`}>Tools & Resources</h2>
      <DownloadableResources
        numberCols={12} title='Downloadable Resources'
        buttons={buttonExample2} classNames="ultravate w-358" bClass="cyan"
      />
    </Element>
    <Element name="isi-top-element">
      </Element>
    <ISI wichPage="ultravate"/>
  </div>
);

export default Ultravate;
