import React from 'react';
import { Card, CardHeader, CardBody,
  CardTitle, CardText } from 'reactstrap';

function CequaCard (props) {
  const { card } = props;
  return (
    <Card className="cequa-card">
        <CardHeader dangerouslySetInnerHTML={{ __html: card.header }} />
        <CardBody>
          <CardTitle dangerouslySetInnerHTML={{ __html: card.small }} />
          <CardText className="number" dangerouslySetInnerHTML={{ __html: card.number }} />
          <CardText dangerouslySetInnerHTML={{ __html: card.text }} />
        </CardBody>
    </Card>
  );
};

export default CequaCard;
