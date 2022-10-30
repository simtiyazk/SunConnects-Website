import React, { Component } from 'react';
import ImageTitle from '../../shared/ImageTitle/ImageTitle'
import  Card  from '../../shared/Card/Card'
import  ButtonText  from '../../shared/Button/ButtonText'
import { ilumyaData } from '../../../constants/ilumya'
import { Row } from 'reactstrap';
import  ProgramService from '../../shared/ProgramService/ProgramService'
import  Button  from '../../shared/Button/Button'
import  PresentationIcon  from '../../shared/PresentationIcon/PresentationIcon'
import DownloadableResources from '../../shared/DownloadableResources/DownloadableResources'


const buttonExample2 = [{
  label:'Patient Assistance Program Enrollment Form',
  link: 'http://www.google.com'
},
{
  label:'Patient Assistance Program Enrollment Form',
  link: 'http://www.google.com'
}
]

class About extends Component {

  generateExample = () =>{
    return ilumyaData.buttons.map((e,i) => {
      return <ButtonText
              link=""
              copy={e.text}
              img={e.icon}
              color="purple"
              alt={e.icon}
              type="big"
              key={i}
            />
    });
  }

  render() {
    return (
      <div className="my-content">
        <h1> Hi im About </h1>


        <ProgramService classNames="blue" >
          <Row className="justify-content-center mt-5">
            {this.generateExample()}
          </Row>
        </ProgramService>

        <Card classNames='card-about'>
          <>
            <ImageTitle
              alt="logo-hand"
              img='card-hand.png'
              title="ABSORICA LD Copay Card Program"
              color="blue"
              type="small"
            />

            <ul>
              <li className="normal-dot">The CABOSUN safety proﬁle was generally consistent with that of the initial CABOMETYX product approval, which was supported by results from the METEOR trial</li>
              <li className="outline">The CABOSUN safety proﬁle was generally consistent with that of the initial CABOMETYX product approval, which was supported by results from the METEOR trial</li>
            </ul>

            <Button
              copy="Show me"
              isExternal='true'
              link="http://google.com"
              buttonType="small blue"
            />

            <PresentationIcon
              img="icon/pencil.png"
              alt="pencil"
              title='Step 1: Enroll'
              text="Start by submitting a completed ILUMYA&nbsp;SUPPORT™ Patient Services Enrollment Form. HCPs can also enroll patients through the ILUMYA™ Provider Portal at www.ILUMYASUPPORT.com"
              classNames="purple"
            />

          </>
        </Card>

        <DownloadableResources
        numberCols={12} title='Downloadable Resources'
        buttons={buttonExample2} classNames="blue w-560" bClass="blue"
        />

      <DownloadableResources
        numberCols={6} title='Downloadable Resources'
        buttons={buttonExample2} classNames="blue w-486" bClass="blue"
        />
      </div>
    );
  }
}

export default About;
