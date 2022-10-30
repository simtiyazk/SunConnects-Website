import React from 'react';
import { Card, CardHeader, CardBody } from 'reactstrap';

function TableHeader (props) {
  const { header, children, customClass, subheader } = props;
  return (
    <Card className={`table-header ${customClass}`}>
        <CardHeader>
          {header}
          {subheader ? <p>{subheader}</p> : ''}
        </CardHeader>
        <CardBody>
          {children}
        </CardBody>
    </Card>
  );
};

export default TableHeader;
