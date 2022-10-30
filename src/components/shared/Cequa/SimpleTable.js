import React from 'react';
import { Card, CardBody } from 'reactstrap';

function SimpleTable (props) {
  const { text, classs } = props;
  return (
    <Card className={`simple-table ${classs}`}>
        <CardBody>
          <p dangerouslySetInnerHTML={{ __html: text }}/>
        </CardBody>
    </Card>
  );
};

export default SimpleTable;
