import React from "react";
import { Container, Row, Col } from "reactstrap";
import HeroBrand from "../../shared/heroBrand/heroBrand";
import ProgramService from "../../shared/ProgramService/ProgramService";
import Card from "../../shared/Card/Card";
import ImageTitle from "../../shared/ImageTitle/ImageTitle";
import ISI from "../../layout/ISI/ISI";
import { yonsaData } from "../../../constants/yonsa";
import DownloadableResources from "../../shared/DownloadableResources/DownloadableResources";
import Paragraph from "../../shared/Paragraph/Paragraph";
import Button from "../../shared/Button/Button";
import ButtonText from "../../shared/Button/ButtonText";
import { Element } from "react-scroll";

const buttonDRYonsa = [
  {
    label:
      "YONSA SUPPORT<sup>&reg;</sup> Patient Assistance Program Application",
    link: `/data/resources/PM-US-YON-0425 - Yonsa Support Patient Assistance Program (PAP) Application V3[91].pdf`,
    isExternal: true,
    download: true,
  },
  {
    label: "YONSA SUPPORT<sup>&reg;</sup> Resource Guide",
    link: `/data/resources/PM-US-YON-0430_Yonsa%20Support%20Resource%20Guide.pdf`,
    isExternal: true,
    download: true,
  },
  {
    label: "Sample Letter of Medical Necessity",
    link: `/data/resources/PM-US-YON-0274_YONSA_Sample Letter of Medical Necessity.pdf`,
    isExternal: true,
    download: true,
  },
  {
    label: "Sample Letter of Appeal",
    link: `/data/resources/PM-US-YON-0273_YONSA_Sample Letter of Appeal.pdf`,
    isExternal: true,
    download: true,
  },
];

const title = "Access and reimbursement support for YONSA<sup>&reg;</sup>";
const subT = "";
const btnArr = [
  { textBtn: "Programs & Services", anchorBtn: "programs" },
  { textBtn: "Tools & Resources", anchorBtn: "tools" },
  { textBtn: "Brand Website ↗", externalLink: "https://www.yonsarx.com/" },
];

const generateYonsa = () => {
  return yonsaData.buttons.map((e, i) => {
    return (
      <ButtonText
        link={e.slug}
        copy={e.text}
        img={e.icon}
        color="absorica"
        alt={e.icon}
        type={`big ${i === 2 || i === 3 ? "upper" : ""} `}
        key={i}
      />
    );
  });
};

const generateULsCopay = () => {
  return yonsaData.boxCopay.ul.map((e, i) => {
    return (
      <li
        key={i}
        className="normal-dot pad-40"
        dangerouslySetInnerHTML={{ __html: e }}
      />
    );
  });
};

const generateULsEligibilityRules = () => {
  return yonsaData.eligibilityRules.ul.map((e, i) => {
    return (
      <li
        key={i}
        className="normal-dot mb-0"
        dangerouslySetInnerHTML={{ __html: e }}
      />
    );
  });
};

const generateULsEligibilityRulesHyphen = () => {
  return yonsaData.eligibilityRules.ulHyphen.map((e, i) => {
    return (
      <li
        key={i}
        className="hypen mb-0"
        dangerouslySetInnerHTML={{ __html: e }}
      />
    );
  });
};

const generateULsTermsConditions = () => {
  return yonsaData.termsConditions.ul.map((e, i) => {
    return (
      <li
        key={i}
        className="normal-dot mb-0"
        dangerouslySetInnerHTML={{ __html: e }}
      />
    );
  });
};

const generateULsDisclosures = () => {
  return yonsaData.disclosures.ul.map((e, i) => {
    return (
      <li
        key={i}
        className="normal-dot mb-0"
        dangerouslySetInnerHTML={{ __html: e }}
      />
    );
  });
};

const Yonsa = () => (
  <div className="yonsaPage">
    <HeroBrand
      brandName="yonsa"
      title={title}
      subtitle={subT}
      btnArr={btnArr}
    />
    <Element name="programs">
      <Container>
        <Row>
          <ProgramService classNames="yonsaText">
            <Row className="justify-content-center mt-5 no-gutters">
              {generateYonsa()}
            </Row>
            <Card classNames="pa-program">
              {/** start insert code here for each card  */}
              <ImageTitle
                alt="logo-hand"
                img={yonsaData.boxPap.image}
                title={yonsaData.boxPap.title}
                colorCircle="absorica"
                colorText="red"
                type="small"
              />
              <Row className="pd-24">
                <Col md="12" lg="12" sm="12">
                  <Paragraph
                    copy={yonsaData.boxPap.subtitle}
                    customClasses="mt-4 pr-24 subtitle"
                  />
                </Col>
                <Col md="12" lg="12" sm="12">
                  <Paragraph
                    copy={yonsaData.boxPap.reference}
                    customClasses="reference"
                  />
                </Col>
              </Row>
              {/** end insert code here for each card  */}
            </Card>
            <Card classNames="copay-program">
              {/** start insert code here for each card  */}
              <ImageTitle
                alt="logo-hand"
                img={yonsaData.boxCopay.image}
                title={yonsaData.boxCopay.title}
                colorCircle="absorica"
                colorText="t-bot"
                type="small"
              />
              <Row className="">
                <Col md="12" lg="12" sm="12">
                  <Paragraph
                    copy={yonsaData.boxCopay.subtitle}
                    customClasses="mt-4 pr-24 subtitle"
                  />
                </Col>
              </Row>
              <ul>{generateULsCopay()}</ul>
              <Paragraph
                copy={yonsaData.boxCopay.reference}
                customClasses="reference"
              />
              {/** end insert code here for each card  */}
            </Card>
            <Card classNames="reimb-assist">
              {/** start insert code here for each card  */}
              <ImageTitle
                alt="logo-hand"
                img={yonsaData.boxReimbAssit.image}
                title={yonsaData.boxReimbAssit.title}
                colorCircle="absorica"
                colorText="red"
                type="small"
              />
              <Row className="pd-24">
                <Col md="12" lg="12" sm="12">
                  <Paragraph
                    copy={yonsaData.boxReimbAssit.subtitle}
                    customClasses="mt-4 pr-24 subtitle"
                  />
                  <Button
                    buttonType="small yonsa mt-4 mb-4"
                    copy={yonsaData.boxReimbAssit.button.label}
                    isExternal={yonsaData.boxReimbAssit.button.isExternal}
                    link={yonsaData.boxReimbAssit.button.url}
                  />
                </Col>
              </Row>
              {/** end insert code here for each card  */}
            </Card>
            <Row className="entireRef">
              <Paragraph
                copy={yonsaData.entireReference}
                customClasses="yonsaOutColor"
              />
              <Paragraph
                copy={yonsaData.eligibilityRules.title}
                customClasses="yonsaOutColor mb-0"
              />
              <ul className="mb-0">{generateULsEligibilityRules()}</ul>
              <ul className="pl-3 mb-4">
                {generateULsEligibilityRulesHyphen()}
              </ul>
              <Paragraph
                copy={yonsaData.termsConditions.title}
                customClasses="yonsaOutColor mb-0"
              />
              <ul className="mb-4">{generateULsTermsConditions()}</ul>
              <Paragraph
                copy={yonsaData.disclosures.title}
                customClasses="yonsaOutColor mb-0"
              />
              <ul className="mb-0">{generateULsDisclosures()}</ul>
            </Row>
          </ProgramService>
        </Row>
      </Container>
    </Element>
    <Element name="tools">
      <h2 className="yonsaText">Tools & Resources</h2>
      <DownloadableResources
        numberCols={12}
        title="Downloadable Resources"
        buttons={buttonDRYonsa}
        classNames="yonsaDR w-560"
        bClass="yonsaBtn"
      />
    </Element>

    <Element name="isi-top-element"></Element>
    <ISI wichPage="yonsa" />
  </div>
);

export default Yonsa;
