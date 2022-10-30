import React from 'react';
import { Container, Col, Row } from 'reactstrap';
import ButtonDR from './ButtonDR'

function DownloadableResources (props) {
  const { numberCols, title, buttons , classNames, bClass } = props;

  const renderButtons = () => {
    return buttons.map((e,i) => {
      return <ButtonDR key={i} numberCols={numberCols} button={e} classNames={classNames} bClass={bClass}/>
    })
  }

  return (
      <Container className={`downloadable-resources container-fluid ${classNames}`}>
        <Row className={`no-gutters ${numberCols === 12 ? 'justify-content-center' : ''} `}>
          <Col sm={12} md={12} lg={12} xl={12} >
            <h6 className={classNames}>{title}</h6>
            <Container>
              <Row className={`no-gutters ${numberCols === 12 ? 'justify-content-center' : ''} `}>
                {renderButtons()}
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
  );
};

export default DownloadableResources;
