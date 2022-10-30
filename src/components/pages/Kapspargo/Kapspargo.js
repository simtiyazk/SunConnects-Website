import React from "react";
import HeroBrand from "../../shared/heroBrand/heroBrand"
import DownloadableResources from '../../shared/DownloadableResources/DownloadableResources'
import { Element  } from 'react-scroll'
import ISI from "../../layout/ISI/ISI";

const downloadableResources = [
  {
    label:'Sample Letter of Medical Necessity',
    link: `/data/resources/PM-US-KAP-0061_KAPSPARGO_Sample Letter of Medical Necessity.pdf`,
    isExternal: true,
    download : true
  },
  {
    label:'Sample Letter of Appeal',
    link: `/data/resources/PM-US-KAP-0062_KAPSPARGO_Sample Letter of Appeal.pdf`,
    isExternal: true,
    download : true
  },
  ]
const title = 'Access and reimbursement support for Kapspargo Sprinkle<sup>&trade;</sup>';
const subT = '';
const btnArr =  [
  {textBtn: 'Tools & Resources', anchorBtn:'tools'},
  {textBtn: 'Brand Website ↗', externalLink: 'https://www.kapspargosprinkle.com/'},
  ];

const Kapspargo = () => (
  <div className="kapspargo-page">
    <HeroBrand brandName='kapspargo' title={title} subtitle={subT} btnArr={btnArr} />

    <Element name="tools" className='mt-special'>
      <h2 className="kapspargoText">Tools & Resources</h2>
      <DownloadableResources
        numberCols={12} title='Downloadable Resources'
        buttons={downloadableResources} classNames="kapspargo w-450" bClass="kapspargoBtn"
      />
    </Element>
    <Element name="isi-top-element">
      </Element>
    <ISI wichPage="kapspargo"/>
  </div>
);

export default Kapspargo;
