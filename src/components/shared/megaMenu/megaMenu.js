import React, { useState, useEffect } from 'react';
import { Nav, NavItem, Col, Row, Container } from 'reactstrap';
import Paragraph from '../Paragraph/Paragraph';
import { Link } from 'react-router-dom';

let selectedCategory;

function Megamenu(props) {
  const {menuItems, allItems} = props;
  let [second, setSecond] = useState('');

  useEffect(() => {
    handleMenuPosition(2);
  }, [])

  const handleMenuPosition = number => {
    switch (number) {
      case 1:
        level1Open();
        break;
      case 2:
        level1Back();
        break;
      default:
        level1Open();
    }
  };

  const filterByCat = (e, cur) =>{
    if(e === 'all'){
      return {
        name : cur.name,
        url : cur.pageUrl
      };
    }
    if(e === cur.category){
      return {
        name : cur.name,
        url : cur.pageUrl
      };
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

  const handleMenuItemClick = item => {
    selectedCategory =item.category;
    second =[<Container><Row key={item.name} className=" header-subMenu" onClick={handleMenuPosition.bind(this, 2)}>
      <Col xl='1' lg='1' sm='1' xs="1" className='menu-back'>
        <img
          src={require('../../../assets/images/megaMenu/back.svg')}
          alt="goPage"
        />
      </Col>
      <Col xl='10' lg='10' sm='10' xs="10">
        <p className="subMenu-title">{item.name}</p>
      </Col>
    </Row></Container>];
    second.push(allItems.filter(filterByCat.bind(this,selectedCategory)).sort(orderByName).map((e, i) => {
      return (
        <NavItem key={i}>
          <Row className='no-gutters border-itemMenu'>
              <Col xl='10' lg='10' sm='10' xs="10">
                <Link to={e.pageUrl}>
                <Paragraph copy={e.name} customClasses={'item'} />
                </Link>
              </Col>
              <Col xl='2' lg='2' sm='2' xs="2">
                <Link href={e.pageUrl}>
                  <img
                    src={require('../../../assets/images/megaMenu/arrow-r.svg')}
                    alt="goPage"
                    className="icon-menu-r"
                  />
                </Link>
            </Col>
            </Row>

        </NavItem>
      );
    }));
    handleMenuPosition(1);
    setSecond(second);
};

  const renderMainMenuItems = items => {
    return items.map((item, i) => {
      return (
        <div key={i} className='' >
            <NavItem key={i}>
              <Row className='no-gutters border-itemMenu'>
                <Col xl='10' lg='10' sm='10' xs="10">
                  <p className='item' onClick={handleMenuItemClick.bind(this, item)}>
                   {item.name}
                  </p>
                </Col>
                <Col xl='2' lg='2' sm='2' xs="2">
                  <img
                    src={require('../../../assets/images/megaMenu/arrow-r.svg')}
                    alt="back"
                    className="icon-menu-r"
                  />
                </Col>
              </Row>
            </NavItem>
        </div>
      );
    });
  };

  const level1Open = () => {
    const level1 = document.getElementById('level-1');
    const level2 = document.getElementById('level-2');
    const menuHold = document.getElementById('menuHold');

    level1.style.left = level1 && '-100%';
    level2.style.left = level2 && '0px';

    setTimeout(() => {
      menuHold.style.height = level2.offsetHeight+'px';
    }, 200);
  };

  const level1Back = () => {
    const level1 = document.getElementById('level-1');
    const level2 = document.getElementById('level-2');
    const menuHold = document.getElementById('menuHold');


    setTimeout(() => {
      level1.style.left = level1 && '0px';
      level2.style.left = level2 && '100%';
      menuHold.style.height = level1.offsetHeight+'px';
      setSecond('')
    }, 10);

  };

  return (
    <div id="menuHold" className='w-100 pos-rel'>
      <Nav navbar className="level-1" id="level-1">
      {menuItems.length > 0 && renderMainMenuItems(menuItems)}
      </Nav>
      <Nav navbar className="level-2" id="level-2">
        {second}
      </Nav>
    </div>
  )
}

export default Megamenu;
