import React from "react";

const Banner = props => {

  const { children , classBanner, id } = props;

  return (
    <div className={`main-banner ${classBanner}`} id={id}>
      {children}
    </div>
  );
};

export default Banner;
