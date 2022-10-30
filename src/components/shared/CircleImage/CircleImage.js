import React from 'react';

function CircleImage (props) {
  const { img, color, type, alt } = props;
  return (
    <div className={`circle-image ${color} ${type}`}>
      <img src={require(`../../../assets/images/icon/${img}`)} alt={alt} />
    </div>
  );
};

export default CircleImage;
