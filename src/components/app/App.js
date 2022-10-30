import React from "react";
import Main from "../layout/main/Main";
import Header from "../layout/header/Header";
import Footer from "../layout/footer/Footer";
import Interstitial from '../layout/interstitial/Interstitial'
import 'react-app-polyfill/ie9';
import 'react-app-polyfill/ie11';


const App = () => (
  <div style={{position: 'relative'}}>
    <Header />
    <Interstitial />
    <Main className="my-content"/>
    <Footer />
  </div>
);
export default App;
