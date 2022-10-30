import React from 'react';
import { Col } from 'reactstrap';

function Card (props) {
  const { children , classNames } = props;
  return (
    <Col sm="12" lg="12" md="12" xl="12" >
      <div className={`card ${classNames}`}>
        {children}
      </div>
    </Col>
  );
};

export default Card;
