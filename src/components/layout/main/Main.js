import React from "react";
import { Redirect, Switch, Route } from "react-router-dom";

import Home from "../../pages/Home/Home";
import Contact from "../../pages/Contact/Contact";
import About from "../../pages/About/About";
import Halog from "../../pages/Halog/Halog";
import Bromsite from "../../pages/Bromsite/Bromsite";
import Levulan from "../../pages/Levulan/Levulan";
import Ilumya from "../../pages/Ilumya/Ilumya";
import Ultravate from "../../pages/Ultravate/Ultravate";
import Absorica from "../../pages/Absorica/Absorica";
import Cequa from "../../pages/Cequa/Cequa";
import Winlevi from "../../pages/Winlevi/Winlevi";
import Riomet from "../../pages/Riomet/Riomet";
import Xelpros from "../../pages/Xelpros/Xelpros";
import Kapspargo from "../../pages/Kapspargo/Kapspargo";
import Drizalma from "../../pages/Drizalma/Drizalma";
import Ezallor from "../../pages/Ezallor/Ezallor";
import Infugem from "../../pages/Infugem/Infugem";
import Odomzo from "../../pages/Odomzo/Odomzo";
import NotFound from "../NotFound/NotFound";
import Yonsa from "../../pages/Yonsa/Yonsa"
import  ScrollToTop  from 'react-scroll-up';

import ScrollTop from '../ScrollTop/ScrollTop';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { getScrollHeight } from '../../../utilities';
import { useLocation } from 'react-router-dom';

let tam = 2000;

function Main(){
  const isDesktop = useMediaQuery('(min-width:768px)');
  const isMb = useMediaQuery('(min-width:360px) and (max-width: 413px)');
  let location = useLocation();
  const isHome = (location.pathname === '/') ? 1 : 0;
  const isWinlevi = (location.pathname === '/dermatology/winlevi') ? 1 : 0;

  const val= () =>{
    return isDesktop ? { bottom: '290px', zIndex: '100', right: '20%' } : { bottom: '400px', zIndex: '100', right: validate2() }
  }

  const validate2 = () =>{
    return isMb ? '6%' : '8%'
  }

  setTimeout(()=>{
    const rest = getScrollHeight();
    if(rest <= 1000){
      tam = 1500;
    }else if(rest > 1000 && rest <= 2000){
      tam = 2500;
    }
    else
      tam = 3000;
  },100);


  return(
  <div className="content-full">
    <ScrollTop />
    { !isHome && <ScrollToTop duration={tam} showUnder={isDesktop ? 600: 1000} className="top-line" easing="easeInOutQuad" style={val()}>
      <button className="to-top" style={{border: 'none', background: 'transparent'}}>
        {isWinlevi
          ? <img src={require('../../../assets/images/arrow-top-winlevi.png')} alt="" style={{width: '24px'}} />
          : <img src={require('../../../assets/images/arrow-top.png')} alt="" style={{width: '24px'}} />
        }
      </button>
    </ScrollToTop> }

    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/contact" component={Contact} />
      <Route path="/about" component={About} />
      <Route exact path="/dermatology/absorica" component={Absorica} />
      <Route exact path="/dermatology/ilumya" component={Ilumya} />
      <Route exact path="/dermatology/levulan" component={Levulan} />
      <Route exact path="/dermatology/ultravate" component={Ultravate} />
      <Route exact path="/dermatology/halog" component={Halog} />
      <Route exact path="/ophthalmology/bromsite" component={Bromsite} />
      <Route exact path="/ophthalmology/cequa" component={Cequa} />
      <Route exact path="/dermatology/winlevi" component={Winlevi} />
      <Route exact path="/ophthalmology/xelpros" component={Xelpros} />
      <Route exact path="/oncology/odomzo" component={Odomzo} />
      <Route exact path="/oncology/yonsa" component={Yonsa} />
      <Route exact path="/all/drizalma-sprinkle" component={Drizalma} />
      <Route exact path="/all/ezallor" component={Ezallor} />
      <Route exact path="/all/kapspargo" component={Kapspargo} />
      <Route exact path="/all/riomet" component={Riomet} />
      <Route exact path="/oncology" component={Home} />
      <Route exact path="/ophthalmology" component={Home} />
      <Route exact path="/dermatology" component={Home} />
      <Route exact path="/all" component={Home} />
      <Redirect from="/longTerm/drizalma-sprinkle" to="/all/drizalma-sprinkle" />
      <Redirect from="/longTerm/ezallor" to="/all/ezallor" />
      <Redirect from="/longTerm/kapspargo" to="/all/kapspargo" />
      <Redirect from="/longTerm/riomet" to="/all/riomet" />
      <Route path="/*" component={NotFound} />
      <Redirect to="/404" />
    </Switch>
  </div>
  )
}


export default Main;
