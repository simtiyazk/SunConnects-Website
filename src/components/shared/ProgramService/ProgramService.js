import React from 'react';
import { Col } from 'reactstrap';

function ProgramService (props) {
  const { children , classNames, title } = props;
  const ti = title ? title : 'Programs & Services';
  return (
    <Col sm="12" lg="12" md="12" xl="12" className="pr-0 pl-0" >
      <div className={`program ${classNames} `}>
        <h2 className={`${classNames}`} dangerouslySetInnerHTML={{ __html: ti }}  ></h2>
        <hr/>
        {children}
      </div>
    </Col>
  );
};

export default ProgramService;
