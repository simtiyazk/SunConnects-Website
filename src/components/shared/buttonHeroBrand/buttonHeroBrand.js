import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-scroll';
import { getScrollHeight } from '../../../utilities'

function ButtonHeroBrand(props) {
  const { textBtn, anchorBtn, brand, externalLink, setUrl, setOpen } = props;

  let tam = 2000;

  setTimeout(()=>{
    const rest = getScrollHeight();
    if(rest <= 1000){
      tam = 3000;
    }else if(rest > 1000 && rest <= 2000){
      tam = 4000;
    }
    else
      tam = 5000;
  },100);


  const openInsterstial = e => {
    setUrl(externalLink);
    setOpen(true);
  }

  return <>
   {externalLink ? (
     <a href='#' onClick={openInsterstial.bind(this)} className="brand-a">
       <div className={brand+'-color brand-btn'}>
              <span dangerouslySetInnerHTML={{ __html: textBtn }} />
           </div>
     </a>
   ):
    (<Link to={anchorBtn} spy={false} smooth='easeInOutQuad' offset={anchorBtn === 'tools'? -20 : 0} duration={tam} className="brand-a">
            <div className={brand+'-color brand-btn'}>
              <span dangerouslySetInnerHTML={{ __html: textBtn }} />
           </div>
    </Link>)
  }
  </>

}

const mapDispatch = dispatch => ({
  setUrl: url => dispatch.menu.setUrl(url),
  setOpen: open => dispatch.menu.setOpen(open),
})
export default connect(null, mapDispatch)(ButtonHeroBrand);

