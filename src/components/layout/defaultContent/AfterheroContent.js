import React from "react";
import { Container, Row, Col } from 'reactstrap';
import Paragraph  from '../../shared/Paragraph/Paragraph'
import Subhead  from '../../shared/Paragraph/Paragraph'
import { DefaultContent } from '../../../constants/defaultContent'


const defaultContent = () => (
    <Container>
      <Row>
          <Col xl='3' lg='3' sm='3' xs="12" className="connections">
            <img src={require('../../../assets/images/content/connections.png')} alt='' />
          </Col>
          <Col xl='7' lg="7" sm='9' xs="12" className="right-part">
          <Subhead copy={DefaultContent.line1} customClasses="orange-head" />
          <Paragraph copy={DefaultContent.line2} />
          <Paragraph copy={DefaultContent.line3} customClasses="p-blue-head"/>
          <Paragraph copy={DefaultContent.line4} />
          <Paragraph copy={DefaultContent.line5} customClasses="p-blue-head"/>
          <Paragraph copy={DefaultContent.line6} />
          <Paragraph copy={DefaultContent.line7} customClasses="p-blue-head"/>
          <Paragraph copy={DefaultContent.line8} />
          <Paragraph copy={DefaultContent.line9} customClasses="p-blue-head"/>
          <Paragraph copy={DefaultContent.line10} />
          </Col>
      </Row>
    </Container>

);

export default defaultContent;
