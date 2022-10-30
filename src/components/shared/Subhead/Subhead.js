import React from 'react';

function Subhead(props) {
  const { copy, customClasses } = props;

  return (
    <h2 className={`subhead-h2 ${customClasses}`} dangerouslySetInnerHTML={{ __html: copy }} />
  )
}

Subhead.defaultProps = {
  copy: "",
  customClasses: ""
};

export default Subhead;
