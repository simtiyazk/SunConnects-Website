import React from 'react';
import { Button, Modal, ModalBody, ModalFooter, Col } from 'reactstrap';
import { connect } from 'react-redux';

const Interstitial = (props) => {
  const {
    className,
    open,
    url,
    setOpen,
    setUrl
  } = props;

  const toggle = (val) => {
    val && window.open(url,'_blank')
    setUrl('')
    setOpen(!open);
  }

  return (
      <Modal isOpen={open} toggle={toggle.bind(this,false)} className={className}>
        <ModalBody>
          <h2 className='title'>Link to Third-Party Site</h2>
          <p className="mid-content">You are about to leave the Sun Connects website to go to an external website. Your use of third-party websites is subject to the terms and conditions and the privacy policies of those individual sites.</p>
        </ModalBody>
        <ModalFooter>
            <Col lg='5' xs='12'>
             <Button className='btn-default btn' onClick={toggle.bind(this,false)}>Stay on this page</Button>
            </Col>
            <Col lg='5' xs='12'>
             <Button className='btn-primary btn' onClick={toggle.bind(this,true)}>Leave this page</Button>{' '}
            </Col>
        </ModalFooter>
      </Modal>
  );
}

const mapState = state => {
  return {
    open: state.menu.open,
    url: state.menu.currentUrl
  }
}

const mapDispatch = dispatch => ({
  setUrl: url => dispatch.menu.setUrl(url),
  setOpen: open => dispatch.menu.setOpen(open)
})

export default connect(mapState,mapDispatch)(Interstitial);
