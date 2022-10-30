import React from 'react';
import CircleImage from '../CircleImage/CircleImage'
import Subhead from '../Subhead/Subhead'

function ImageTitle (props) {
  const { alt, img, title, colorText, colorCircle, type } = props;
  return (
    <div className={`image-title ${colorText} ${type}`}>
      <CircleImage
        img={img}
        color={colorCircle}
        type="small"
        alt={alt}
      />
      <Subhead
        copy={title}
        customClasses={colorText}
      />
    </div>
  );
};

export default ImageTitle;
