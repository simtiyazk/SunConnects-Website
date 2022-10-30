import React from 'react'
import { Link } from 'react-scroll';
import CircleImage from '../CircleImage/CircleImage'


function ButtonText(props) {
  const { link, copy, img, color, alt, type } = props;
  return (
    <>
      <Link className={`button-text ${color} mb-5`} to={link} spy={false} smooth='easeInOutCubic' offset={0} duration={1500}>
        <CircleImage
          img={img}
          color={color}
          type={type}
          alt={alt}
        />
        <p dangerouslySetInnerHTML={{ __html: copy }} className={`${color}`} />
      </Link>
    </>
  )
}

export default ButtonText;
