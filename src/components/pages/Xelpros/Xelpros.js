import React from "react";
import { Container, Row } from 'reactstrap';
import HeroBrand from "../../shared/heroBrand/heroBrand"
import  ProgramService from '../../shared/ProgramService/ProgramService'
import  Card  from '../../shared/Card/Card'
import ImageTitle from '../../shared/ImageTitle/ImageTitle'
import ISI from "../../layout/ISI/ISI";
import {xelpros} from "../../../constants/xelpros"
import DownloadableResources from '../../shared/DownloadableResources/DownloadableResources'
import Paragraph from '../../shared/Paragraph/Paragraph'
import { Element  } from 'react-scroll'



const buttonExample2 = [{
  label:'XELPROS Xpress Brochure',
  link: `/data/resources/PM-US-XPS-0298_Xelpros_Informational.pdf`,
  isExternal: true,
  download : true
},
{
  label:'Prescription Order Form',
  link: `/data/resources/PM-US-XPS-0288_Xelpros_Prescription.pdf`,
  isExternal: true,
  download : true
}
]


const title = 'Access and reimbursement support&nbsp;for XELPROS<sup>&trade;</sup>';
const subT = ''
const btnArr =  [
  {textBtn: 'Programs & Services', anchorBtn:'programs'},
  {textBtn: 'Tools & Resources', anchorBtn:'tools'},
  {textBtn: 'Brand Website ↗', externalLink: 'https://www.xelpros.com/'}
  ];

const Xelpros = () => (
  <div className="xelpros-page">
    <HeroBrand brandName='xelpros' title={title} subtitle={subT} btnArr={btnArr} />
      <Element name="programs">
        <Container>
          <Row>
            <ProgramService classNames="xelprosText" >
              <>
                <Card classNames='card-about'>
                  <>
                    <ImageTitle
                      alt="logo-hand"
                      img={xelpros.image1}
                      type="small"
                    />
                    {/** start insert code here for each card  */}
                    <Row className="pd-24">
                      <Paragraph copy={xelpros.boxpara} customClasses='box-para' />
                      <ul>
                          <li className="normal-dot"dangerouslySetInnerHTML={{ __html: xelpros.ul[0] }} />
                          <li className="normal-dot" dangerouslySetInnerHTML={{ __html: xelpros.ul[1] }} />
                          <li className="normal-dot"dangerouslySetInnerHTML={{ __html: xelpros.ul[2] }} />
                          <li className="normal-dot" dangerouslySetInnerHTML={{ __html: xelpros.ul[3] }} />
                          <li className="normal-dot" dangerouslySetInnerHTML={{ __html: xelpros.ul[4] }} />
                      </ul>
                      <Paragraph copy={xelpros.note} customClasses='note-p' />
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
      <h2 className={`xelprosText`}>Tools & Resources</h2>
      <DownloadableResources
          numberCols={12} title='Downloadable Resources'
          buttons={buttonExample2} classNames="red xelpros-blue xelpros w-486" bClass="xelpros-blue"
      />

    </Element>
    <Element name="isi-top-element">
    </Element>
    <ISI wichPage="xelpros"/>
  </div>
);

export default Xelpros;
