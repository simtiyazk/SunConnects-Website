import React from "react";
import { Row } from 'reactstrap';
import HeroBrand from "../../shared/heroBrand/heroBrand"
import ButtonText from '../../shared/Button/ButtonText'
import  ProgramService from '../../shared/ProgramService/ProgramService'
import  Card  from '../../shared/Card/Card'
import ImageTitle from '../../shared/ImageTitle/ImageTitle'
import ISI from "../../layout/ISI/ISI";
import DownloadableResources from '../../shared/DownloadableResources/DownloadableResources'
import { Element  } from 'react-scroll'
import { levulanData } from '../../../constants/levulan'
import Paragraph from '../../shared/Paragraph/Paragraph'
import Subhead from '../../shared/Subhead/Subhead'
import TableHeader from '../../shared/Cequa/TableHeader'

import Button from '../../shared/Button/Button'

const title = 'Access and reimbursement support for LEVULAN<sup>&reg;</sup> KERASTICK<sup>&reg;</sup> + BLU-U<sup>&reg;</sup>';
const subT = ''
const btnArr =  [
  {textBtn: 'Programs & Services', anchorBtn:'programs'},
  {textBtn: 'Tools & Resources', anchorBtn:'tools'},
  {textBtn: 'Ordering LEVULAN KERASTICK', anchorBtn:'ordering'},
  {textBtn: 'Brand Website ↗', externalLink: 'http://www.levulanhcp.com'}
  ];


function Levulan (props) {

  const generateLevulan = (arrayTo) =>{
    return arrayTo.map((e,i) => {
      return <ButtonText
              link={e.slug}
              copy={e.text}
              img={e.icon}
              color="levulan"
              alt={e.icon}
              type={`big`}
              key={i}
            />
    });
  }

  const generateULs = (arryTo) =>{
    return arryTo.map((e,i)=>{
      return <li key={i} className="normal-dot" dangerouslySetInnerHTML={{ __html: e }}/>
    })
  }

  const generateULsWithChild = (arryTo) =>{
    return arryTo.map((e,i)=>{
      if(e.lis){
        return <li key={i} className="normal-dot pad-40">
          {e.text}
          <ul>
          {e.lis.map((ele,index)=>{
            return <li key={index} className={`hypen pad-40 ${index === 0 ? 'mt-3' : 'mt-1'}`} dangerouslySetInnerHTML={{ __html: ele }}/>
          })}
          </ul>
        </li>
      }
      return <li key={i} className="normal-dot pad-40" dangerouslySetInnerHTML={{ __html: e }}/>
    })
  }

  const generateNumber = () =>{
    return levulanData.cardFive.numbers.map((e,i)=>{
      if(e.button){
        return  <li>
            {e.text}
            <Button buttonType="big dark-blue mt-4 mb-4" isLongScroll='true' copy={e.button.label} isExternal={e.button.isExternal} link={e.button.url}/>
        </li>
      }
      return <li key={i} dangerouslySetInnerHTML={{ __html: e }}/>
    })
  }

  const generateImgs = () =>{
    return levulanData.cardFour.images.map((e,i)=>{
      return <img key={i} alt={e} src={require(`../../../assets/images/icon/${e}`)}/>
    })
  }

  const createTable = () =>{
    return levulanData.cardSix.table.map((e,i)=>{
      return <TableHeader key={i} header={e.title}>
                  <Paragraph copy={e.text}/>
              </TableHeader>
    })
  }

  return(
    <div className="levulan-page">
      <HeroBrand brandName='levulan' title={title} subtitle={subT} btnArr={btnArr} />
      <Element name="programs">
        <ProgramService classNames="levulan" >
          <Row className="justify-content-center mt-5 no-gutters">
            {generateLevulan(levulanData.buttons)}
          </Row>
          <Row className="justify-content-center no-gutters">
            <Element name="medical-supp">
              <Card classNames='card-levulan'>
                <ImageTitle
                  alt="logo-hand"
                  img={levulanData.cardOne.image}
                  title={levulanData.cardOne.title}
                  colorCircle="levulan"
                  colorText="red"
                  type="small center-flow"
                />
                <Paragraph copy={levulanData.cardOne.text1} customClasses="bold mt-4" />
                <ul>
                  {generateULs(levulanData.cardOne.ul)}
                </ul>
                <Paragraph copy={levulanData.cardOne.text2} customClasses="bold mt-4" />
                <Paragraph copy={levulanData.cardOne.text3} customClasses="bold mt-4" />
                <Row className="blue-box">
                  <Paragraph copy={levulanData.cardOne.box.sub} customClasses="bold mb-4"/>
                  <Paragraph copy={levulanData.cardOne.box.phone} customClasses="bold"/>
                  <Paragraph copy={levulanData.cardOne.box.fax} customClasses="bold"/>
                </Row>
              </Card>
            </Element>
          </Row>

          <Row className="justify-content-center no-gutters">
            <Element name="pharmacy-supp">
              <Card classNames='card-levulan'>
                <ImageTitle
                  alt="logo-hand"
                  img={levulanData.cardTwo.image}
                  title={levulanData.cardTwo.title}
                  colorCircle="levulan"
                  colorText="red"
                  type="small center-flow"
                />
                <Paragraph copy={levulanData.cardTwo.text1} customClasses="bold mt-4" />
                <ul>
                  {generateULsWithChild(levulanData.cardTwo.ul)}
                </ul>
                <Row className="blue-box">
                  <Paragraph copy={levulanData.cardTwo.box.sub} customClasses="bold mb-4"/>
                  <Paragraph copy={levulanData.cardTwo.box.phone} customClasses="bold"/>
                  <Paragraph copy={levulanData.cardTwo.box.fax} customClasses="bold"/>
                  <Paragraph copy={levulanData.cardTwo.box.script} customClasses="bold"/>
                </Row>
              </Card>
            </Element>
          </Row>

        </ProgramService>
      </Element>

      <Element name="tools">
        <ProgramService classNames="levulan" title="Tools & Resources">
          <Row className="justify-content-center mt-5 no-gutters">
            {generateLevulan(levulanData.buttons2)}
          </Row>
          <Row className="justify-content-center no-gutters">
            <Element name="heart-supp">
              <Card classNames='card-levulan'>
                <ImageTitle
                  alt="logo-hand"
                  img={levulanData.cardThree.image}
                  title={levulanData.cardThree.title}
                  colorCircle="levulan"
                  colorText="red"
                  type="small center-flow"
                />
                <Subhead copy={levulanData.cardThree.sub} customClasses="bold mt-4 medium"/>
                <Paragraph copy={levulanData.cardThree.text1} customClasses="bold mt-4 pr-10" />
                <ul>
                  {generateULs(levulanData.cardThree.ul)}
                </ul>
                <Paragraph copy={levulanData.cardThree.text2} customClasses="bold mt-4 pr-10" />
                <ul>
                  {generateULsWithChild(levulanData.cardThree.ul2)}
                </ul>
                <Paragraph copy={levulanData.cardThree.text3} customClasses=" mt-4" />
                <Paragraph copy={levulanData.cardThree.text4} customClasses="pr-40 mt-4" />
                <Subhead copy={levulanData.cardThree.sub2} customClasses="bold mt-4 medium"/>
                <Paragraph copy={levulanData.cardThree.text5} customClasses="pr-40 mt-4" />
                <ul>
                  {generateULs(levulanData.cardThree.ul3)}
                </ul>
                <Subhead copy={levulanData.cardThree.sub3} customClasses="bold mt-4 medium"/>
                <Paragraph copy={levulanData.cardThree.text6} customClasses=" mt-4" />
              </Card>
            </Element>
          </Row>

          <Element name="download-supp">
            <DownloadableResources
              numberCols={12} title='Downloadable Resources'
              buttons={levulanData.tools} classNames="levulan w-358" bClass="dark-blue"
            />
          </Element>


          <Row className="justify-content-center no-gutters">
            <Element name="sun-supp">
              <Card classNames='card-levulan'>
                <ImageTitle
                  alt="logo-hand"
                  img={levulanData.cardFour.image}
                  title={levulanData.cardFour.title}
                  colorCircle="levulan "
                  colorText="red"
                  type="small center-flow"
                />
                <div className="image-box">
                  {generateImgs()}
                </div>
                <Paragraph copy={levulanData.cardFour.text1} customClasses=" mt-4" />
                <ul>
                  {generateULs(levulanData.cardFour.ul)}
                </ul>
                <Button buttonType="big dark-blue mt-4 mb-4"  copy={levulanData.cardFour.button.label} isExternal={levulanData.cardFour.button.isExternal} link={levulanData.cardFour.button.url}/>
                <Paragraph copy={levulanData.cardFour.text2} customClasses="bold"/>
              </Card>
            </Element>
          </Row>
        </ProgramService>

      </Element>

      <Element name="ordering">
        <ProgramService classNames="levulan" title="Ordering LEVULAN KERASTICK">
          <Row className="justify-content-center mt-5 no-gutters">
            {generateLevulan(levulanData.buttons3)}
          </Row>
          <Row className="justify-content-center no-gutters">
            <Element name="bb-supp">
              <Card classNames='card-levulan'>
                <ImageTitle
                  alt="logo-hand"
                  img={levulanData.cardFive.image}
                  title={levulanData.cardFive.title}
                  colorCircle="levulan "
                  colorText="red"
                  type="small center-flow"
                />
                <Paragraph copy={levulanData.cardFive.text1} customClasses="bold mt-4" />
                <ol className="numbers">
                  {generateNumber()}
                </ol>
                <Subhead copy={levulanData.cardFive.sub} customClasses="bold mt-4 medium"/>
                <ul>
                  {generateULs(levulanData.cardFive.ul)}
                </ul>
                <Row className="blue-box">
                  <Paragraph copy={levulanData.cardFive.box} customClasses="bold mb-0"/>
                </Row>
              </Card>
            </Element>
          </Row>

          <Row className="justify-content-center no-gutters">
            <Element name="cc-supp">
              <Card classNames='card-levulan'>
                <ImageTitle
                  alt="logo-hand"
                  img={levulanData.cardSix.image}
                  title={levulanData.cardSix.title}
                  colorCircle="levulan "
                  colorText="red"
                  type="small center-flow"
                />
                <Paragraph copy={levulanData.cardSix.text1} customClasses="mt-4 pr-40" />

                <div className="semi-box">
                  <div className="l-side">
                    <div className="small-blue-bpx">
                    {levulanData.cardSix.semiCard.jcode}
                  </div>
                    <p className="code">{levulanData.cardSix.semiCard.code}</p>
                  </div>
                  <div className="r-side">
                    <p className="text">{levulanData.cardSix.semiCard.text}</p>
                  </div>
                </div>

                <Subhead copy={levulanData.cardSix.sub} customClasses="bold mt-4 medium"/>
                <ul>
                  {generateULsWithChild(levulanData.cardSix.ul)}
                </ul>
                <div className="small-blue-bpx mt-5 mb-4">
                  {levulanData.cardSix.jcode}
                </div>
                <Paragraph copy={levulanData.cardSix.textN} customClasses="mt-4 mb-0 pr-40" />
                <Row className="row-2 mt-5 mb-5">
                  {createTable()}
                </Row>
                <ul>
                  {generateULsWithChild(levulanData.cardSix.ul2)}
                </ul>
                <Paragraph copy={levulanData.cardSix.text2} customClasses="bold mt-4" />
                <Paragraph copy={levulanData.cardSix.text3} customClasses="bold mt-2" />
                <Paragraph copy={levulanData.cardSix.text4} customClasses="mt-4" />
                <Paragraph copy={levulanData.cardSix.ref} customClasses="reference mb-0" />
              </Card>
            </Element>
          </Row>
        </ProgramService>
      </Element>
      <Row className="justify-content-center no-gutters m-600-w">
        <Paragraph copy={levulanData.ref} customClasses="reference" />
      </Row>

      <Element name="isi-top-element">
      </Element>
      <ISI wichPage="levulan"/>
    </div>
  );
}

export default Levulan;
