import React, { useEffect, useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { useLocation } from 'react-router-dom'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { withRouter } from "react-router-dom";

function SelectProduct(props) {
  const location = useLocation().pathname;
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(prevState => !prevState);
  useEffect(() => {
      setTimeout(() => {
        if(props.products !== null && props.currentItem === null){
            props.setCurrentItem(location.split('/')[1]);
        }
      }, 500);
  })

  const getProductFiltered = () =>{
    return props.products.product.filter( e =>{
          if(props.currentItem === 'all'){
            return true;
          }
         return e.category === props.currentItem;
    });
  }
  const getCategoryName = () =>{
    if(props.products !== null && props.currentItem !== null ){
        let val = props.products.category.filter( e => {
          if(props.currentItem === e.category){
            return(e.name);
          }
       })
       return ( val[0].name );
    } else{
      return props.currentItem
    }
  }

  /**
   * Function to compare and order alfabethical
   * @param {} a
   * @param {*} b
   */
  function orderByName( a, b ) {
    return ( a.name < b.name )? -1: (( a.name > b.name )?1 : 0);
  }
  /**
   * function to call the especial Sort to order alphabetical
   */
  const sortProducts = () =>{
    return props.products.product.sort(orderByName);
  }

  const parentClick = (pageUrl, e) =>{
    props.setCurrentItem(e.category);
    const isIE11 = !!window.MSInputMethodContext && !!document.documentMode;
    isIE11 && props.history.push(pageUrl);
  }


  return (
    <div className="productSelector">
      <img src={require('../../../assets/images/header/separator-logo.png')} alt='Logos Sun Connect' className="separatorSecond" />
      <p className="categoryHeader">{getCategoryName()}</p>
      <img src={require('../../../assets/images/header/separator-logo.png')} alt='Logos Sun Connect' className="separatorThird" />
      <Dropdown isOpen={dropdownOpen} toggle={toggle} className="selectorInput">
      <DropdownToggle tag="span" data-toggle="dropdown" aria-expanded={dropdownOpen}>
        Select a Different Product <img className='caret' alt="" src={require('../../../assets/images/arrowDown.png')} />
      </DropdownToggle>
      <DropdownMenu>
        {props.currentItem && sortProducts().map((e, i) => {
            return <DropdownItem onClick={parentClick.bind(this, e.pageUrl, e)} key={'drop'+i}><Link to={e.pageUrl} dangerouslySetInnerHTML={{ __html: e.name }}/></DropdownItem>
        })}
      </DropdownMenu>
    </Dropdown>
    </div>
  )
}

const mapState = state => {
  return{
    products : state.products.items,
    currentItem : state.products.currentItem,
  }
}

const mapDispatch = dispatch => ({
  getProducts : url => dispatch.products.getProducts(url),
  setCurrentItem : item => dispatch.products.setCurrentItem(item),
})

export default connect(mapState, mapDispatch)(withRouter(SelectProduct));
