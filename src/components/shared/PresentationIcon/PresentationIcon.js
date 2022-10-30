import React from 'react';

function PresentationIcon (props) {
  const { img, alt, title, text , classNames } = props;
  return (
      <div className={`presentation-icons ${classNames}`}>
        <img  src={require(`../../../assets/images/${img}`)} alt={alt}/>
        <h6 className={classNames}>{title}</h6>
        <p dangerouslySetInnerHTML={{ __html: text }}/>
      </div>
  );
};

export default PresentationIcon;
