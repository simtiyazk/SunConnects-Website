import React from "react";
import HeroBrand from "../../shared/heroBrand/heroBrand"
import DownloadableResources from '../../shared/DownloadableResources/DownloadableResources'
import { Element  } from 'react-scroll'
import ISI from "../../layout/ISI/ISI";

const downloadableResources = [
{
  label:'Sample Letter of Medical Necessity',
  link: `/data/resources/PM-US-EZA-0043_EZALLOR_Sample Letter of Medical Necessity.pdf`,
  isExternal: true,
  download : true
},
{
  label:'Sample Letter of Appeal',
  link: `/data/resources/PM-US-EZA-0044_EZALLOR_Sample Letter of Appeal.pdf`,
  isExternal: true,
  download : true
},
]
const title = `Access and reimbursement support for Ezallor Sprinkle<sup>&trade;</sup>`;
const subT = ''
const btnArr =  [
  {textBtn: 'Tools & Resources', anchorBtn:'tools'},
  {textBtn: 'Brand Website ↗', externalLink: 'https://www.ezallorsprinkle.com/'}
  ];

const Ezallor = () => (
  <div className="ezallor-page">
    <HeroBrand brandName='ezallor' title={title} subtitle={subT} btnArr={btnArr} />

    <Element name="tools" className='mt-special'>
      <h2 className={`ezallorText`}>Tools & Resources</h2>
      <DownloadableResources
        numberCols={12} title='Downloadable Resources'
        buttons={downloadableResources} classNames="ezallor w-450" bClass="ezallorBtn"
      />
    </Element>
    <Element name="isi-top-element">
      </Element>
    <ISI wichPage="ezallor"/>
  </div>
);

export default Ezallor;
