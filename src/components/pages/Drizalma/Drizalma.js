import React from "react";
import HeroBrand from "../../shared/heroBrand/heroBrand"
import DownloadableResources from '../../shared/DownloadableResources/DownloadableResources'
import { Element  } from 'react-scroll'
import ISI from "../../layout/ISI/ISI";

const downloadableResources = [{
  label:'Sample Letter of Medical Necessity',
  link: `/data/resources/PM-US-DRI-0008_Drizalma_Sample Letter of Medical Necessity.pdf`,
  isExternal: true,
  download : true
},
{
  label:'Sample Letter of Appeal',
  link: `/data/resources/PM-US-DRI-0009_DRIZALMA_Sample Letter of Appeal.pdf`,
  isExternal: true,
  download : true
}
]
const title = `Access and reimbursement support for Drizalma Sprinkle<sup>&trade;</sup>`;
const subT = ''
const btnArr =  [
  {textBtn: 'Tools & Resources', anchorBtn:'tools'},
  {textBtn: 'Brand Website ↗', externalLink: 'https://www.drizalmasprinkle.com/'}
  ];

const Drizalma = () => (
  <div className="drizalma-page">
    <HeroBrand brandName='drizalma' title={title} subtitle={subT} btnArr={btnArr} />

    <Element name="tools" className='mt-special'>
      <h2 className={`drizalmaText`}>Tools & Resources</h2>
      <DownloadableResources
        numberCols={12} title='Downloadable Resources'
        buttons={downloadableResources} classNames="drizalma w-450" bClass="drizalmaBtn"
      />
    </Element>
    <Element name="isi-top-element">
      </Element>
    <ISI wichPage="drizalma"/>
  </div>
);

export default Drizalma;
