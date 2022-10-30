import React from 'react'
import { Link } from 'react-router-dom';
import { Link as LongScroll } from 'react-scroll';
import { connect } from 'react-redux';

function Button(props) {
  const { setUrl, isDownload, isSVG, setOpen, copy, isExternal, link, buttonType, showImage, urlImage, download, isLongScroll } = props;

  // var to log the button not external no download,
  const long = () =>{
    return (
      isLongScroll ?
        <LongScroll className={`button-link ${buttonType}`} to={link} spy={false} smooth='easeInOutCubic' offset={0} duration={2000}>
        <p dangerouslySetInnerHTML={{ __html: copy }}/>
        {showImage && <img src={require(`../../../assets/images/${urlImage}`)} alt="arrow"/>}
        </LongScroll>
        :
        ( <Link className={`button-link ${buttonType}`} to={link}>
        <p dangerouslySetInnerHTML={{ __html: copy }}/>
        {showImage && <img src={require(`../../../assets/images/${urlImage}`)} alt="arrow"/>}
        </Link>)
    )
  }

  const openI = (e) =>{
    e.preventDefault();
    setUrl(link)
    setOpen(true);
  }

  return (
    <>
      {isExternal ? (( !isDownload)?  // download button with interstitial
      <a className={`button-link ${buttonType}`} href={link} onClick={openI.bind(this)} download={download}>
        <p dangerouslySetInnerHTML={{ __html: copy }}/>
        {showImage && <img src={require(`../../../assets/images/${urlImage}`)} alt="arrow"/>}
        {isSVG && <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.0797 7.6203L7.97706 11.1897L11.8785 7.6203L10.7736 6.50283L8.77603 8.49904V0.396484H7.19766L7.19554 8.49832L5.19795 6.50211L4.0797 7.6203Z"/>
          <path d="M0.5 14.6822H15.5V10.7933L14.0876 10.7883V13.3253H1.91683V10.7883H0.5V14.6822Z"/>
          </svg>
        }
      </a>:  // download button without external interstitial
        <a className={`button-link ${buttonType}`} href={link} target='_new' download={download}>
        <p dangerouslySetInnerHTML={{ __html: copy }}/>
        {showImage && <img src={require(`../../../assets/images/${urlImage}`)} alt="arrow"/>}
        {isSVG && <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.0797 7.6203L7.97706 11.1897L11.8785 7.6203L10.7736 6.50283L8.77603 8.49904V0.396484H7.19766L7.19554 8.49832L5.19795 6.50211L4.0797 7.6203Z"/>
          <path d="M0.5 14.6822H15.5V10.7933L14.0876 10.7883V13.3253H1.91683V10.7883H0.5V14.6822Z"/>
          </svg>
        }
      </a>) : // call long button no external no download
        long()}
    </>
  )
}


const mapDispatch = dispatch => ({
  setUrl: url => dispatch.menu.setUrl(url),
  setOpen: open => dispatch.menu.setOpen(open)
})

export default connect(null, mapDispatch)(Button);
