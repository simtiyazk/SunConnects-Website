import React from 'react';

function Paragraph(props) {
  const { copy, customClasses } = props;

  return (
    <p className={`paragraph ${customClasses}`} dangerouslySetInnerHTML={{ __html: copy }} />
  )
}

Paragraph.defaultProps = {
  copy: "",
  customClasses: ""
};

export default Paragraph;
