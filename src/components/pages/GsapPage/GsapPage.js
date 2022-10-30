import React, { Component } from 'react';
import { Tween } from 'react-gsap';
import FadeIn from '../../shared/fadeIn/FadeIn'
import './GsapPage.css';

class GsapPage extends Component {


  logo = 'https://via.placeholder.com/75';
  listOfNumbers = [12,3,14,31,21,13,16,15,8]
  listItem = [];


  componentDidMount() {

  }

  render() {
    let stager = 0;
    this.listItem = this.listOfNumbers.map((el,i)=>{
        return(
        <Tween from={{ x: '-500px', delay:stager += 0.2 }} key={i} >
          <li className="dataCard" key={i} ref={e => (this.listOfNumbers[i] = e)} data-value={el}>
            <p>ID: <span>{i}</span></p>
            <p>Value: <span>{el}</span></p>
          </li>
        </Tween>
        );
    })

    return (
      <div className="my-content">
        <h1> Hi, im GSAP </h1>
        <ul>
          {this.listItem}
        </ul>

        <FadeIn>
          <div>
            IM from fade IN
          </div>
        </FadeIn>
      </div>
    );
  }
}

export default GsapPage;
