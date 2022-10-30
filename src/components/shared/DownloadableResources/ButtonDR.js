import React from 'react';
import { Col } from 'reactstrap';
import Button from '../Button/Button'

function ButtonDR (props) {
  const { numberCols, button , classNames, bClass } = props;
  return (
      <Col sm={12} md={12} lg={12} xl={numberCols} >
        <div className={`button-resources ${classNames}`}>
          <div className="text-section">
            <p dangerouslySetInnerHTML={{ __html: button.label }}/>
          </div>
          <Button
            copy='Download'
            isExternal={true}
            isDownload={true}
            link={button.link}
            buttonType={bClass}
            isSVG={true}
            urlImage='icon/download.svg'
          />
        </div>
      </Col>
  );
};

export default ButtonDR;
