import React from 'react'
import { Link } from 'react-router-dom';

function Back(props) {
  const { link, copy } = props;

  return (
    <>
      <Link className="button-back" to={link}>
        <img src={require(`../../../assets/images/global/arrow-back.png`)} alt="arrow" />
        <p dangerouslySetInnerHTML={{ __html: copy }} />
      </Link>
    </>
  )
}

export default Back;
