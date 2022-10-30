import React, { useState } from "react";
import { connect } from "react-redux";
import { Element, scroller, animateScroll as scroll } from "react-scroll";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-scroll";
import { Waypoint } from "react-waypoint";
import classNames from "classnames";
import useMediaQuery from "@material-ui/core/useMediaQuery";

var scrollD;
window.addEventListener("scroll", function (event) {
  scrollD = this.scrollY;
});

function ISI(props) {
  const { wichPage, isSticky } = props;

  const isDesktop = useMediaQuery("(min-width:992px)");
  const isDesktopL = useMediaQuery("(min-width:1200px)");
  const isDesktopLw = useMediaQuery("(max-width:1999px)");
  const isTablet = useMediaQuery("(min-width:768px)");
  const [hideSticky, setHideSticky] = useState(false);
  const [showWarnings, setshowWarnings] = useState(false);

  const handleISIEnter = () => {
    setHideSticky(true);
  };

  const handleISILeave = () => {
    setHideSticky(false);
  };

  const cganetotop = (val) => {
    if (!val) {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
    }
    setshowWarnings(val);
  };

  const handlePosition = () => {
    if (isDesktopL) {
      return -scrollD / 2;
    }

    if (isDesktop) {
      return -document.documentElement.scrollTop - 200;
    }
    if (isTablet) {
      return -scrollD;
    }
    return -(scrollD / 30);
  };

  const scrollToTop = () => {
    !isDesktopL && scroll.scrollToTop();
    isDesktopL && scrollFcuntion();
  };

  const IsiHeadMobile = () => {
    let mobilehead;

    switch (wichPage) {
      case "absorica":
        mobilehead = (
          <div className="absorica">
            <p className="sub-head">Important Safety Information</p>
            <p>
              ABSORICA LD (isotretinoin) capsules is indicated for the treatment
              of severe recalcitrant nodular acne in non-pregnant patients 12
              years of age and older with multiple inflammatory nodules with a
              diameter of 5 mm or greater. Because of significant adverse
              reactions associated with its
            </p>
          </div>
        );
        break;
      case "ilumyna":
        mobilehead = (
          <div className="ilumyna">
            <p className="sub-head">
              INDICATION AND IMPORTANT SAFETY INFORMATION
            </p>
            <p>
              ILUMYA<sup>&reg;</sup> (tildrakizumab-asmn) is indicated for the
              treatment of adults with moderate-to-severe plaque psoriasis who
              are candidates for systemic therapy or phototherapy.
            </p>
            <p className="sub-head">CONTRAINDICATIONS</p>
          </div>
        );
        break;
      case "ultravate":
        mobilehead = (
          <div className="ultravate">
            <p className="sub-head">INDICATIONS AND USAGE</p>
            <p>
              ULTRAVATE (halobetasol propionate) Lotion, 0.05% is indicated for
              the topical treatment of plaque psoriasis in patients 18 years of
              age and older.
            </p>
            <p>
              Treatment beyond 2 weeks is not recommended, and the total dosage
              should not exceed 50 grams per week because of the potential for
            </p>
          </div>
        );
        break;
      case "halog":
        mobilehead = (
          <div className="halog">
            <p>
              <b>INDICATIONS AND USAGE:</b> HALOG (Halcinonide, USP) Cream or
              Ointment 0.1% is indicated for the relief of the inflammatory and
              pruritic manifestations of corticosteroid-responsive dermatoses.
            </p>
            <p className="sub-head">IMPORTANT SAFETY INFORMATION</p>
            <p>
              <b>CONTRAINDICATIONS:</b> Topical corticosteroids are
              contraindicated in those patients with a{" "}
            </p>
          </div>
        );
        break;

      case "cequa":
        mobilehead = (
          <div className="cequa">
            <p className="sub-head">INDICATIONS AND USAGE</p>
            <p className="sub-head">IMPORTANT SAFETY INFORMATION</p>
            <p>
              CEQUA<sup>&trade;</sup> (cyclosporine ophthalmic solution) 0.09%
              is a calcineurin inhibitor immunosuppressant indicated to increase
              tear production in patients with keratoconjunctivitis sicca (dry
              eye).
            </p>
          </div>
        );
        break;

      case "winlevi":
        mobilehead = (
          <div className="winlevi">
            <p className="sub-head">INDICATION</p>
            <p>
              WINLEVI (clascoterone)
              cream 1% is an androgen receptor
              inhibitor indicated for the topical
              treatment of acne vulgaris in patients 12
              years of age and older.
            </p>
          </div>
        );
        break;

      case "xelpros":
        mobilehead = (
          <div className="xelpros">
            <p className="sub-head">IMPORTANT SAFETY INFORMATION</p>
            <p className="sub-head">INDICATIONS AND USAGE</p>
            <p>
              XELPROS<sup>&trade;</sup> (latanoprost ophthalmic emulsion) 0.005%
              is indicated for the reduction of elevated intraocular pressure
              (IOP) in patients with open-angle glaucoma or ocular hypertension.
            </p>
            <p className="sub-head">IMPORTANT SAFETY INFORMATION</p>
          </div>
        );
        break;

      case "bromsite":
        mobilehead = (
          <div className="bromsite">
            <p className="sub-head">IMPORTANT SAFETY INFORMATION</p>
            <p>
              <b>Indications and Usage</b>
              <br />
              BromSite<sup>&reg;</sup> (bromfenac ophthalmic solution) 0.075% is
              a nonsteroidal anti-inflammatory drug (NSAID) indicated for the
              treatment of postoperative inflammation and prevention of ocular
              pain in patients undergoing cataract surgery.
            </p>
          </div>
        );
        break;

      case "infugem":
        mobilehead = (
          <div className="infugem">
            <p className="sub-head">INDICATIONS AND USAGE</p>
            <p>
              INFUGEM (gemcitabine hydrochloride in 0.9% sodium chloride
              injection) is a nucleoside metabolic inhibitor indicated for:
            </p>
            <p>
              <b>Ovarian Cancer:</b> in combination with carboplatin, for the
              treatment of advanced ovarian cancer that has relapsed at least 6
              months after completion of platinum-based therapy.
            </p>
          </div>
        );
        break;

      case "ezallor":
        mobilehead = (
          <div className="ezallor">
            <p className="sub-head">INDICATIONS AND USAGE</p>
            <p>
              Ezallor<sup>&trade;</sup> Sprinkle (rosuvastatin) capsules are
              indicated as an:
            </p>
            <ul>
            <li>
                <p>
                  Adjunctive therapy to diet for the treatment of adult patients with hypertriglyceridemia
                </p>
              </li>
              <li>
                <p>
                Adjunct to diet for the treatment of adult patients with primary dysbetalipoproteinemia (Type III hyperlipoproteinemia)
                </p>
              </li>
              <li>
                <p>
                Adjunctive therapy to other lipid-lowering treatments (e.g., LDL apheresis) or alone if such treatments are unavailable to reduce LDL-C, total-C, and ApoB in adult patients with homozygous familial hypercholesterolemia
                </p>
              </li>
            </ul>
          </div>
        );
        break;

      case "levulan":
        mobilehead = (
          <div className="levulan">
            <p className="sub-head">IMPORTANT SAFETY INFORMATION</p>
            <p>
              LEVULAN<sup>&reg;</sup> KERASTICK<sup>&reg;</sup> (aminolevulinic
              acid HCl) for topical solution, 20%, plus blue light illumination
              using the BLU- U<sup>&reg;</sup> Blue Light Photodynamic Therapy
              Illuminator is indicated for the treatment of minimally to
              moderately thick actinic keratoses of the face or scalp, or
              actinic keratosis of the upper extremities.
            </p>
          </div>
        );
        break;

      case "yonsa":
        mobilehead = (
          <div className="yonsa">
            <p className="sub-head fs-20">IMPORTANT SAFETY INFORMATION</p>
            <p className="sub-head dark-blue">INDICATION</p>
            <p>
              YONSA<sup>&reg;</sup> (abiraterone acetate) in combination with
              methylprednisolone is indicated for the treatment of patients with
              metastatic castration-resistant prostate cancer (CRPC).
            </p>
          </div>
        );
        break;

      case "kapspargo":
        mobilehead = (
          <div className="kapspargo">
            <p className="sub-head">INDICATIONS AND USAGE</p>
            <p>
              Kapspargo Sprinkle<sup>&trade;</sup> (metoprolol succinate)
              extended-release capsules are beta<sub>1</sub>-selective
              adrenoceptor blocking agent indicated for the treatment of:
            </p>
            <ul>
              <li>
                <p>
                  Hypertension, to lower blood pressure. Lowering blood pressure
                  reduces the risk of fatal and nonfatal cardiovascular events,
                  primarily stroke and myocardial infarction
                </p>
              </li>
            </ul>
          </div>
        );
        break;

      case "drizalma":
        mobilehead = (
          <div className="drizalma">
            <p className="sub-head">INDICATIONS AND USAGE</p>
            <p>
              DRIZALMA SPRINKLE<sup>&trade;</sup> (duloxetine) delayed-release
              capsules are indicated for the treatment of:
            </p>
            <ul>
              <li>
                <p>Major depressive disorder in adults</p>
              </li>
              <li>
                <p>
                  Generalized anxiety disorder in adults and pediatric patients
                  aged 7 to 17 years
                </p>
              </li>
              <li>
                <p>Diabetic peripheral neuropathy in adults</p>
              </li>
            </ul>
          </div>
        );
        break;
      case "riomet":
        mobilehead = (
          <div className="riomet">
            <p className="sub-head">INDICATIONS AND USAGE</p>
            <p>
              RIOMET ER<sup>&trade;</sup> (metformin hydrochloride for
              extended-release oral suspension) is indicated as an adjunct to
              diet and exercise to improve glycemic control in adults and
              pediatric patients 10 years of age and older with type 2 diabetes
              mellitus.
            </p>
            <p className="sub-head">IMPORTANT SAFETY INFORMATION</p>
          </div>
        );
        break;
      case "odomzo":
        mobilehead = (
          <div className="odomzo">
            <p className="sub-head">INDICATION</p>
            <p>
              ODOMZO<sup>&reg;</sup> (sonidegib) is indicated for the treatment
              of adult patients with locally advanced basal cell carcinoma (BCC)
              that has recurred following surgery or radiation therapy, or those
              who are not candidates for surgery or radiation therapy.
            </p>
            <p className="sub-head">IMPORTANT SAFETY INFORMATION</p>
          </div>
        );
        break;

      case "resources":
        mobilehead = null;
        break;
      default:
        return null;
    }

    return mobilehead;
  };

  const IsiHead = () => {
    let headisi;

    switch (wichPage) {
      case "absorica":
        headisi = (
          <div className="absorica">
            <p className="sub-head">Important Safety Information</p>
            <p>
              <b>INDICATIONS AND USAGE</b>
            </p>
            <p>
              ABSORICA LD (isotretinoin) capsules is indicated for the treatment
              of severe recalcitrant nodular acne in non-pregnant patients 12
              years of age and older with multiple inflammatory nodules with a
              diameter of 5 mm or greater. Because of significant adverse
              reactions associated with its use, ABSORICA LD is reserved for
              patients with severe nodular acne who are unresponsive to
              conventional therapy, including systemic antibiotics.
            </p>
            <p>
              <b>Limitations of Use:</b>
            </p>
            <p>
              If a second course of ABSORICA LD therapy is needed, it is not
              recommended before a two-month waiting period because the
              patient’s acne may continue to improve following a 15 to 20-week
              course of therapy.
            </p>
          </div>
        );
        break;
      case "ilumyna":
        headisi = (
          <div className="ilumyna">
            <p className="sub-head">
              INDICATION AND IMPORTANT SAFETY INFORMATION
            </p>
            <p>
              ILUMYA<sup>&reg;</sup> (tildrakizumab-asmn) is indicated for the
              treatment of adults with moderate-to-severe plaque psoriasis who
              are candidates for systemic therapy or phototherapy.
            </p>
            <p className="sub-head">CONTRAINDICATIONS</p>
          </div>
        );
        break;
      case "ultravate":
        headisi = (
          <div className="ultravate">
            <p className="sub-head">INDICATIONS AND USAGE</p>
            <p>
              ULTRAVATE (halobetasol propionate) Lotion, 0.05% is indicated for
              the topical treatment of plaque psoriasis in patients 18 years of
              age and older.
            </p>
          </div>
        );
        break;

      case "halog":
        headisi = (
          <div className="halog">
            <p>
              <b>INDICATIONS AND USAGE:</b> HALOG (Halcinonide, USP) Cream or
              Ointment 0.1% is indicated for the relief of the inflammatory and
              pruritic manifestations of corticosteroid-responsive dermatoses.
            </p>
            <p className="sub-head">IMPORTANT SAFETY INFORMATION</p>
          </div>
        );
        break;

      case "cequa":
        headisi = (
          <div className="cequa">
            <p className="sub-head">INDICATIONS AND USAGE</p>
            <p>
              CEQUA<sup>&trade;</sup> (cyclosporine ophthalmic solution) 0.09%
              is a calcineurin inhibitor immunosuppressant indicated to increase
              tear production in patients with keratoconjunctivitis sicca (dry
              eye).
            </p>
            <br />
          </div>
        );
        break;

      case "winlevi":
        headisi = (
          <div className="winlevi">
            <p className="sub-head">INDICATION</p>
            <p>
              WINLEVI (clascoterone)
              cream 1% is an androgen receptor
              inhibitor indicated for the topical
              treatment of acne vulgaris in patients 12
              years of age and older.
            </p>
            <br />
          </div>
        );
        break;

      case "xelpros":
        headisi = (
          <div className="xelpros">
            <p className="sub-head fs-20">IMPORTANT SAFETY INFORMATION</p>
            <p className="sub-head">INDICATIONS AND USAGE</p>
            <p>
              XELPROS<sup>&trade;</sup> (latanoprost ophthalmic emulsion) 0.005%
              is indicated for the reduction of elevated intraocular pressure
              (IOP) in patients with open-angle glaucoma or ocular hypertension.
            </p>
          </div>
        );
        break;

      case "bromsite":
        headisi = (
          <div className="bromsite">
            <p className="sub-head">IMPORTANT SAFETY INFORMATION</p>
            <p>
              <b>Indications and Usage</b>
              <br />
              BromSite<sup>&reg;</sup> (bromfenac ophthalmic solution) 0.075% is
              a nonsteroidal anti-inflammatory drug (NSAID) indicated for the
              treatment of postoperative inflammation and prevention of ocular
              pain in patients undergoing cataract surgery.
            </p>
            <p>
              <b>Important Safety Information</b>
            </p>
            <p>
              <b>• Slow or Delayed Healing:</b> All topical nonsteroidal
              anti-inflammatory drugs (NSAIDs), including BromSite
              <sup>&reg;</sup>, may slow or delay healing. Topical
              corticosteroids are also known to slow or delay healing.
              Concomitant use of topical NSAIDs and topical steroids may
              increase the potential for healing problems.
            </p>
          </div>
        );
        break;

      case "infugem":
        headisi = (
          <div className="infugem">
            <p className="sub-head">INDICATIONS AND USAGE</p>
            <p>
              INFUGEM (gemcitabine hydrochloride in 0.9% sodium chloride
              injection) is a nucleoside metabolic inhibitor indicated for:
            </p>
            <p>
              <b>Ovarian Cancer:</b> in combination with carboplatin, for the
              treatment of advanced ovarian cancer that has relapsed at least 6
              months after completion of platinum-based therapy.
            </p>
            <p>
              <b>Breast Cancer:</b> in combination with paclitaxel, for
              first-line treatment of metastatic breast cancer after failure of
              prior anthracycline-containing adjuvant chemotherapy, unless
              anthracyclines were clinically contraindicated.
            </p>
            <p>
              <b>Non-Small Cell Lung Cancer:</b> in combination with cisplatin
              for the first-line treatment of patients with inoperable, locally
              advanced (Stage IIIA or IIIB) or metastatic (Stage IV) non-small
              cell lung cancer.
            </p>
          </div>
        );
        break;

      case "ezallor":
        headisi = (
          <div className="ezallor">
            <p className="sub-head">INDICATIONS AND USAGE</p>
            <p>
              Ezallor Sprinkle<sup>&trade;</sup> (rosuvastatin) capsules are
              indicated as an:
            </p>
            <ul>
              <li>
                <p>
                  Adjunctive therapy to diet for the treatment of adult patients with hypertriglyceridemia
                </p>
              </li>
              <li>
                <p>
                Adjunct to diet for the treatment of adult patients with primary dysbetalipoproteinemia (Type III hyperlipoproteinemia)
                </p>
              </li>
              <li>
                <p>
                Adjunctive therapy to other lipid-lowering treatments (e.g., LDL apheresis) or alone if such treatments are unavailable to reduce LDL-C, total-C, and ApoB in adult patients with homozygous familial hypercholesterolemia
                </p>
              </li>
            </ul>
          </div>
        );
        break;

      case "levulan":
        headisi = (
          <div className="levulan">
            <p className="sub-head">IMPORTANT SAFETY INFORMATION</p>
            <p>
              LEVULAN<sup>&reg;</sup> KERASTICK<sup>&reg;</sup> (aminolevulinic
              acid HCl) for topical solution, 20%, plus blue light illumination
              using the BLU- U<sup>&reg;</sup> Blue Light Photodynamic Therapy
              Illuminator is indicated for the treatment of minimally to
              moderately thick actinic keratoses of the face or scalp, or
              actinic keratosis of the upper extremities.
            </p>
          </div>
        );
        break;

      case "yonsa":
        headisi = (
          <div className="yonsa">
            <p className="sub-head fs-20">INDICATION</p>
            <p>
              YONSA<sup>&reg;</sup> (abiraterone acetate) in combination with
              methylprednisolone is indicated for the treatment of patients with
              metastatic castration-resistant prostate cancer (CRPC).
            </p>
          </div>
        );
        break;

      case "kapspargo":
        headisi = (
          <div className="kapspargo">
            <p className="sub-head">INDICATIONS AND USAGE</p>
            <p>
              <b>
                Kapspargo Sprinkle<sup>&trade;</sup>
              </b>{" "}
              (metoprolol succinate) extended-release capsules are beta
              <sub>1</sub>-selective adrenoceptor blocking agent indicated for
              the treatment of:
            </p>
            <ul>
              <li>
                <p>
                  Hypertension, to lower blood pressure. Lowering blood pressure
                  reduces the risk of fatal and nonfatal cardiovascular events,
                  primarily stroke and myocardial infarction.
                </p>
              </li>
            </ul>
          </div>
        );
        break;

      case "drizalma":
        headisi = (
          <div className="drizalma">
            <p className="sub-head">INDICATIONS AND USAGE</p>
            <p>
              DRIZALMA SPRINKLE<sup>&trade;</sup> (duloxetine) delayed-release
              capsules are indicated for the treatment of:
            </p>
            <ul>
              <li>
                <p>Major depressive disorder in adults</p>
              </li>
              <li>
                <p>
                  Generalized anxiety disorder in adults and pediatric patients
                  aged 7 to 17 years
                </p>
              </li>
              <li>
                <p>Diabetic Peripheral Neuropathic Pain (DPNP) in adults</p>
              </li>
            </ul>
          </div>
        );
        break;
      case "riomet":
        headisi = (
          <div className="riomet">
            <p className="sub-head">INDICATIONS AND USAGE</p>
            <p>
              RIOMET ER<sup>&trade;</sup> (metformin hydrochloride for
              extended-release oral suspension) is indicated as an adjunct to
              diet and exercise to improve glycemic control in adults and
              pediatric patients 10 years of age and older with type 2 diabetes
              mellitus.
            </p>
            <p className="sub-head">IMPORTANT SAFETY INFORMATION</p>
          </div>
        );
        break;
      case "odomzo":
        headisi = (
          <div className="odomzo">
            <p className="sub-head">INDICATION</p>
            <p>
              ODOMZO<sup>&reg;</sup> (sonidegib) is indicated for the treatment
              of adult patients with locally advanced basal cell carcinoma (BCC)
              that has recurred following surgery or radiation therapy, or those
              who are not candidates for surgery or radiation therapy.
            </p>
            <p className="sub-head">IMPORTANT SAFETY INFORMATION</p>
          </div>
        );
        break;

      case "resources":
        headisi = null;
        break;
      default:
        return null;
    }

    return headisi;
  };

  const IsiWarnings = () => {
    let warningisi;

    switch (wichPage) {
      case "absorica":
        warningisi = (
          <div className="absorica">
            <p>
              <b>IMPORTANT SAFETY INFORMATION</b>
            </p>
            <div className="border-content">
              <p>
                WARNING: EMBRYO-FETAL TOXICITY – CONTRAINDICATED IN PREGNANCY
              </p>
              <p className="m-custom">
                ABSORICA LD can cause severe life-threatening birth defects and
                is contraindicated in pregnancy. There is an extremely high risk
                that severe birth defects will result if pregnancy occurs while
                taking any amount of ABSORICA LD even for short periods of time.
                Potentially any fetus exposed during pregnancy can be affected.
                There are no accurate means of determining prenatally whether an
                exposed fetus has been affected. If pregnancy occurs,
                discontinue ABSORICA LD immediately and refer the patient to an
                Obstetrician-Gynecologist experienced in reproductive toxicity
                for further evaluation and counseling.
              </p>
              <p>
                Because of the risk of embryo-fetal toxicity, ABSORICA LD is
                available only through a restricted program under a Risk
                Evaluation and Mitigation Strategy (REMS) called the iPLEDGE
                REMS.
              </p>
            </div>
            <p>
              <b>CONTRAINDICATIONS</b>
            </p>
            <p>
              <b>Pregnancy:</b> ABSORICA LD is contraindicated in pregnancy.
              <br />
              Hypersensitivity: ABSORICA LD is contraindicated in patients with
              hypersensitivity to isotretinoin (or Vitamin A, given the chemical
              similarity to isotretinoin) or to any of its components
              (anaphylaxis and other allergic reactions have occurred).
            </p>
            <p>
              <b>WARNINGS AND PRECAUTIONS</b>
            </p>
            <p>
              ABSORICA and ABSORICA LD are Not Substitutable: The
              bioavailability and the recommended dosage of ABSORICA and
              ABSORICA LD are different. For example, while ABSORICA and
              ABSORICA LD both have a 20 mg strength, these strengths have
              different bioavailability and are not substitutable.
            </p>
            <p>
              <b>Psychiatric Disorders:</b> ABSORICA LD may cause depression,
              psychosis and, rarely, suicidal ideation, suicide attempts,
              suicide, and aggressive and/or violent behaviors. Prior to and
              during therapy, assess for these conditions.
            </p>
            <p>
              Patients should immediately stop ABSORICA LD and promptly contact
              their prescriber if they develop depression, mood disturbance,
              psychosis, or aggression. Discontinuation of ABSORICA LD may be
              insufficient; further evaluation may be necessary such as a
              referral to a mental healthcare professional.
            </p>
            <p>
              <b>Intracranial Hypertension (Pseudotumor Cerebri):</b>{" "}
              Isotretinoin use has been associated with cases of intracranial
              hypertension (pseudotumor cerebri), some of which involved
              concomitant use of tetracyclines. Concomitant treatment with
              tetracyclines should therefore be avoided with ABSORICA LD use.
            </p>
            <p>
              <b>Serious Skin Reactions:</b> There have been postmarketing
              reports of erythema multiforme and severe skin reactions [e.g.,
              Stevens-Johnson syndrome (SJS), toxic epidermal necrolysis (TEN)]
              associated with isotretinoin use. These reactions may be serious
              and result in death, life-threatening events, hospitalization, or
              disability. Patients should be monitored closely for severe skin
              reactions, and ABSORICA LD should be discontinued if they occur.
            </p>
            <p>
              <b>Acute Pancreatitis:</b> Acute pancreatitis has been reported
              with isotretinoin use in patients with either elevated or normal
              serum triglyceride levels. In rare instances, fatal hemorrhagic
              pancreatitis has been reported. If symptoms of pancreatitis occur,
              the patient should discontinue ABSORICA LD and seek medical
              attention.
            </p>
            <p>
              <b>Lipid Abnormalities:</b> Elevations of serum triglycerides
              above 800 mg/dL have been reported with isotretinoin use. These
              lipid changes were reversible upon isotretinoin capsule cessation.
              Some patients have been able to reverse triglyceride elevation by
              reduction in weight and restriction of dietary fat and alcohol
              while continuing isotretinoin or through dosage reduction. The
              cardiovascular consequences of hypertriglyceridemia associated
              with isotretinoin are unknown.
            </p>
            <p>
              <b>Hearing Impairment:</b> Impaired hearing has been reported in
              patients taking isotretinoin; in some cases, the impairment has
              been reported to persist after therapy has been discontinued.
              Mechanism(s) and causality for this reaction have not been
              established. Patients who experience tinnitus or hearing
              impairment should discontinue ABSORICA LD treatment and be
              referred for specialized care for further evaluation.
            </p>
            <p>
              <b>Hepatotoxicity:</b> Clinical hepatitis has been reported with
              isotretinoin use. Additionally, mild to moderate elevations of
              liver enzymes have been observed in approximately 15% of
              individuals treated during clinical trials with isotretinoin
              capsules, some of which normalized with dosage reduction or
              continued administration of the drug. If normalization does not
              readily occur or if hepatitis is suspected during treatment,
              ABSORICA LD should be discontinued.
            </p>
            <p>
              <b>Inflammatory Bowel Disease:</b> Isotretinoin has been
              associated with inflammatory bowel disease (including regional
              ileitis) in patients without a prior history of intestinal
              disorders. In some instances, symptoms have been reported to
              persist after isotretinoin treatment has been stopped. Patients
              experiencing abdominal pain, rectal bleeding or severe diarrhea
              should discontinue ABSORICA LD immediately.
            </p>
            <p>
              <b>Musculoskeletal Abnormalities:</b> Effects of multiple courses
              of isotretinoin on the developing musculoskeletal system are
              unknown. There is some evidence that long-term, high-dose, or
              multiple courses of therapy with isotretinoin have more of an
              effect than a single course of therapy on the musculoskeletal
              system. It is important that ABSORICA LD be given at the
              recommended dose for no longer than the recommended duration.
            </p>
            <p>
              <b>Ocular Abnormalities:</b> Visual problems should be carefully
              monitored. If visual difficulties occur, the patient should
              discontinue ABSORICA LD treatment and obtain an ophthalmological
              examination.
            </p>
            <p>
              <b>ADVERSE REACTIONS</b>
            </p>
            <p>
              Most common adverse reactions (incidence ≥ 5%) are: dry lips, dry
              skin, back pain, dry eye, arthralgia, epistaxis, headache,
              nasopharyngitis, chapped lips, dermatitis, increased creatine
              kinase, cheilitis, musculoskeletal discomfort, upper respiratory
              tract infection, reduced visual acuity.
            </p>
            <p>
              <b>DRUG INTERACTIONS</b>
            </p>
            <p>
              <b>Vitamin A:</b> ABSORICA LD is closely related to vitamin A.
              Therefore, the use of both vitamin A and ABSORICA LD at the same
              time may lead to vitamin A related adverse reactions. Patients
              treated with ABSORICA LD should be advised against taking
              supplements containing Vitamin A to avoid additive toxic effects.
            </p>
            <p>
              <b>Tetracyclines:</b> Concomitant treatment with ABSORICA LD and
              tetracyclines should be avoided because isotretinoin use has been
              associated with a number of cases of intracranial hypertension
              (pseudotumor cerebri), some of which involved concomitant use of
              tetracyclines.
            </p>
            <p>
              <b>USE IN SPECIFIC POPULATIONS</b>
            </p>
            <p>
              There are no data on the presence of isotretinoin in either animal
              or human milk, the effects on the breastfed infant, or the effects
              on milk production. Because of the potential for serious adverse
              reactions in nursing infants from isotretinoin, advise patients
              that breastfeeding is not recommended during treatment with
              ABSORICA LD, and for at least 8 days after the last dose of
              ABSORICA LD.
            </p>
            <p>
              <b>
                You are encouraged to report all side effects or Adverse Drug
                Events (ADEs) of prescription drugs to the FDA. Visit MedWatch
                or call 1-800-FDA-1088.
              </b>{" "}
              You are also encouraged to report side effects or ADEs to our Drug
              Safety Department at 1-800-406-7984 or
              drug.safetyUSA@sunpharma.com (preferred) with as much information
              as available.
            </p>
            <p>
              Please see full <a href="">Prescribing Information</a> for
              ABSORICA LD for Boxed Warning, Contraindications, and other
              important Warnings and Precautions.
            </p>
          </div>
        );
        break;
      case "ilumyna":
        warningisi = (
          <div className="ilumyna">
            <p>
              ILUMYA<sup>&reg;</sup> is contraindicated in patients with a
              previous serious hypersensitivity reaction to tildrakizumab or to
              any of the excipients.
            </p>
            <p className="sub-head">WARNINGS AND PRECAUTIONS</p>
            <p>
              <b>Hypersensitivity</b>
            </p>
            <p>
              Cases of angioedema and urticaria occurred in ILUMYA
              <sup>&reg;</sup>-treated subjects in clinical trials. If a serious
              allergic reaction occurs, discontinue ILUMYA<sup>&reg;</sup>{" "}
              immediately and initiate appropriate therapy.
            </p>
            <p>
              <b>Infections</b>
            </p>
            <p>
              ILUMYA<sup>&reg;</sup> may increase the risk of infection.
              Treatment with ILUMYA<sup>&reg;</sup> should not be initiated in
              patients with a clinically important active infection until the
              infection resolves or is adequately treated.
              <br />
              <br />
              Consider the risks and benefits of treatment prior to prescribing
              ILUMYA<sup>&reg;</sup> in patients with a chronic infection or a
              history of recurrent infection. Instruct patients receiving ILUMYA
              <sup>&reg;</sup> to seek medical help if signs or symptoms of
              clinically important chronic or acute infection occur. If a
              patient develops a clinically important or serious infection, or
              is not responding to standard therapy, closely monitor and
              consider discontinuation of ILUMYA<sup>&reg;</sup> until the
              infection resolves.
            </p>
            <p>
              <b>Pretreatment Evaluation for Tuberculosis</b>
            </p>
            <p>
              Evaluate patients for tuberculosis (TB) infection prior to
              initiating treatment with ILUMYA<sup>&reg;</sup>. Do not
              administer ILUMYA<sup>&reg;</sup> to patients with active TB
              infection. Initiate treatment of latent TB prior to administering
              ILUMYA<sup>&reg;</sup>. Consider anti-TB therapy prior to
              initiation of ILUMYA<sup>&reg;</sup> in patients with a past
              history of latent or active TB in whom an adequate course of
              treatment cannot be confirmed. Patients receiving ILUMYA
              <sup>&reg;</sup> should be monitored closely for signs and
              symptoms of active TB during and after treatment.
            </p>
            <p>
              <b>Immunizations</b>
            </p>
            <p>
              Prior to initiating therapy with ILUMYA<sup>&reg;</sup>, consider
              completion of all age-appropriate immunizations according to
              current immunization guidelines. Patients treated with ILUMYA
              <sup>&reg;</sup> should not receive live vaccines.
            </p>
            <p>
              <b>Adverse Reactions</b>
            </p>
            <p>
              The most common (&ge;1%) adverse reactions associated with ILUMYA
              <sup>&reg;</sup> treatment that were more frequent than in the
              placebo group are upper respiratory infections, injection-site
              reactions, and diarrhea.
            </p>
            <p>
              <b>
                Please see{" "}
                <a
                  href="https://ypd57my3oo168lx16fbexdxu-wpengine.netdna-ssl.com/wp-content/uploads/sites/9/Sun_Pharma_ILUMYA_US_Prescribing_Information.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ins>full Prescribing Information</ins>.
                </a>
              </b>
            </p>
          </div>
        );
        break;
      case "ultravate":
        warningisi = (
          <div className="ultravate">
            <p>
              Treatment beyond 2 weeks is not recommended, and the total dosage
              should not exceed 50 grams per week because of the potential for
              the drug to suppress the hypothalamic-pituitary-adrenal (HPA)
              axis.
            </p>
            <p>
              Discontinue therapy when control is achieved. If no improvement is
              seen within 2 weeks, reassessment of the diagnosis may be
              necessary.
            </p>
            <p className="sub-head">IMPORTANT SAFETY INFORMATION</p>
            <p>
              <b>PRECAUTIONS:</b> In a study of 20 adult subjects with moderate
              to severe plaque psoriasis, ULTRAVATE Lotion produced HPA axis
              suppression when used twice daily for 2 weeks in 5 out of 20 (25%)
              patients. If HPA axis suppression is documented, attempt to
              gradually withdraw the drug, reduce the frequency of application,
              or substitute a less potent steroid. Manifestations of adrenal
              insufficiency may require supplemental systemic corticosteroids.
              Recovery of HPA axis function is generally prompt and complete
              upon discontinuation of topical corticosteroids.
            </p>
            <p>
              Allergic contact dermatitis with corticosteroids is usually
              diagnosed by observing failure to heal, rather than noting a
              clinical exacerbation. Consider confirmation of a clinical
              diagnosis of allergic contact dermatitis by appropriate patch
              testing. Discontinue ULTRAVATE Lotion if allergic contact
              dermatitis is established.
            </p>
            <p>
              If concomitant skin infections are present or develop, an
              appropriate antimicrobial agent should be used. If a favorable
              response does not occur promptly, the use of ULTRAVATE Lotion
              should be discontinued until the infection has been adequately
              treated.
            </p>
            <p>
              The treated skin area should not be bandaged, covered, or wrapped
              with occlusive dressings, unless directed by the physician.
            </p>
            <p>
              The safety and effectiveness of ULTRAVATE Lotion in patients
              younger than 18 years of age have not been established.
            </p>
            <p>
              <b>
                ULTRAVATE Lotion is for external use only. Avoid use on the
                face, scalp, groin, or axillae.
              </b>
            </p>
            <p>
              <b>ADVERSE REACTIONS:</b> In controlled clinical trials, the most
              frequent adverse events reported for ULTRAVATE Lotion included
              telangiectasia, application site atrophy, and headache in 1% of
              patients. Less frequently reported adverse reactions were
              application site discoloration, herpes zoster, influenza,
              nasopharyngitis, otitis media acute, throat infection, wound, and
              increased blood pressure.
            </p>
            <p>
              This preparation is not for ophthalmic, oral, or intravaginal use.
            </p>
            <p>
              <b>For external use only.</b>
            </p>
            <p>
              <b>
                If you experience any Adverse Events you are encouraged to
                report them to the Drug Safety Department at 1-800-406-7984 or
                email{" "}
                <a href="mailto:Drug.Safety@ranbaxy.com">
                  <ins>Drug.Safety@ranbaxy.com.</ins>
                </a>{" "}
                You can also report to the FDA at 1-800-FDA-1088 or{" "}
                <a
                  href="https://www.fda.gov/medwatch"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ins>www.fda.gov/medwatch.</ins>
                </a>
              </b>
            </p>
            <p>
              <b>
                Please see{" "}
                <a
                  href="https://ultravatelotion.com/wp-content/uploads/2020/03/Ultravate-Lotion-PI.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ins>Full Prescribing Information.</ins>
                </a>
              </b>
            </p>
          </div>
        );
        break;
      case "halog":
        warningisi = (
          <div className="halog">
            <p>
              <b>CONTRAINDICATIONS:</b> Topical corticosteroids are
              contraindicated in those patients with a history of
              hypersensitivity to any of the components of the preparations.
            </p>
            <p>
              <b>PRECAUTIONS:</b> Systemic absorption of topical corticosteroids
              has produced reversible hypothalamic-pituitary-adrenal (HPA) axis
              suppression, manifestations of Cushing’s syndrome, hyperglycemia,
              and glucosuria in some patients.
            </p>
            <p>
              Conditions which augment systemic absorption include the
              application of the more potent steroids, use over large surface
              areas, prolonged use, and the addition of occlusive dressings.
            </p>
            <p>
              Children may absorb proportionally larger amounts of topical
              corticosteroids and thus be more susceptible to systemic toxicity.
              Administration of topical corticosteroids to children should be
              limited to the least amount compatible with an effective
              therapeutic regimen. Chronic corticosteroid therapy may interfere
              with the growth and development of children.
            </p>
            <p>
              This medication is to be used as directed by the physician. It is
              for dermatologic use only. Avoid contact with the eyes. Patients
              should be advised not to use this medication for any disorder
              other than for which it was prescribed.
            </p>
            <p>
              Patients should report any signs of local adverse reactions
              especially under occlusive dressing.
            </p>
            <p>
              The treated skin area should not be bandaged or otherwise covered
              or wrapped as to be occlusive unless directed by the physician.
              Parents of pediatric patients should be advised not to use
              tight-fitting diapers or plastic pants on a child being treated in
              the diaper area, as these garments may constitute occlusive
              dressings.
            </p>
            <p>
              Topical corticosteroids should be used during pregnancy only if
              the potential benefit justifies the potential risk to the fetus.
              Drugs of this class should not be used extensively on pregnant
              patients, in large amounts, or for prolonged periods of time.
            </p>
            <p>
              Systemically administered corticosteroids are secreted into breast
              milk in quantities not likely to have a deleterious effect on the
              infant. Nevertheless, caution should be exercised when topical
              corticosteroids are administered to a nursing woman.{" "}
              <b>ADVERSE REACTIONS:</b> The following local adverse reactions
              are reported infrequently with topical corticosteroids, but may
              occur more frequently with the use of occlusive dressings
              (reactions are listed in an approximate decreasing order of
              occurrence): burning, itching, irritation, dryness, folliculitis,
              hypertrichosis, acneiform eruptions, hypopigmentation, perioral
              dermatitis, allergic contact dermatitis, maceration of the skin,
              secondary infection, skin atrophy, striae, and miliaria. This
              preparation is not for ophthalmic, oral, or intravaginal use.
            </p>
            <p>
              <b>
                For topical use only. Please see{" "}
                <a
                  href="https://haloghcp.com/wp-content/uploads/2020/07/HALOGSolution-2019_Ointment_Cream-2018_PI.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Full Prescribing Information.
                </a>
              </b>
            </p>
            <p>
              <b>
                If you experience any Adverse Events you are encouraged to
                report them to the Drug Safety Department at 1-800-406-7984 or
                email{" "}
                <a href="mailto:Drug.Safety@ranbaxy.com">
                  Drug.Safety@ranbaxy.com.
                </a>{" "}
                You can also report to the FDA at 1-800-FDA-1088 or{" "}
                <a
                  href="https://www.fda.gov/safety/medwatch-fda-safety-information-and-adverse-event-reporting-program"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.fda.gov/medwatch.
                </a>
              </b>
            </p>
          </div>
        );
        break;

      case "cequa":
        warningisi = (
          <div className="cequa">
            <p className="sub-head">IMPORTANT SAFETY INFORMATION</p>
            <p>
              <b>WARNINGS AND PRECAUTIONS</b>
            </p>
            <p>
              <b>Potential for Eye Injury and Contamination:</b> To avoid the
              potential for eye injury and contamination, advise patients not to
              touch the vial tip to the eye or other surfaces.
            </p>
            <p>
              <b>Use with Contact Lenses:</b> CEQUA<sup>&trade;</sup> should not be administered
              while wearing contact lenses. If contact lenses are worn, they
              should be removed prior to administration of the solution. Lenses
              may be reinserted 15 minutes following administration of CEQUA<sup>&trade;</sup> ophthalmic solution.
            </p>
            <p>
              <b>ADVERSE REACTIONS</b>
            </p>
            <p>
              The most common adverse reactions reported in greater than 5% of
              patients were pain on instillation of drops (22%) and conjunctival
              hyperemia (6%). Other adverse reactions reported in 1% to 5% of
              patients were blepharitis, eye irritation, headache, and urinary
              tract infection.
            </p>
            <p>
              <b>
                Please see the{" "}
                <a
                  href="https://cequapro.com/pdf/CequaPI.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Full Prescribing Information.
                </a>
              </b>
            </p>
          </div>
        );
        break;

      case "winlevi":
        warningisi = (
          <div className="winlevi">
            <p className="sub-head">IMPORTANT SAFETY INFORMATION</p>
            <p><b>CONTRADICTIONS:</b> None.</p>
            <p>
              <b>WARNINGS AND PRECAUTIONS</b>
            </p>
            <p>
              <b>Local Irritation:</b> Pruritus, burning, skin redness or peeling may be experienced with WINLEVI cream.
              If these effects occur, discontinue or reduce the frequency of application of WINLEVI cream.</p>
            <p>
              Hypothalamic-pituitary-adrenal (HPA) axis suppression may occur during or after treatment with
              WINLEVI. In the PK trial, HPA axis suppression was observed in 5% of adult subjects and 9% of
              adolescent subjects at Day 14. All subjects returned to normal HPA axis function at follow-up 4
              weeks after stopping treatment. Conditions which augment systemic absorption include use over
              large surface areas, prolonged use, and the use of occlusive dressings. Attempt to withdraw use if
              HPA axis suppression develops.</p>
            <p>Pediatric patients may be more susceptible to systemic toxicity.</p>
            <p>
              <b>Hyperkalemia:</b> Elevated potassium levels were observed in some subjects during the clinical trials.
              Shifts from normal to elevated potassium levels were observed in 5% of WINLEVI-treated subjects
              and 4% of vehicle-treated subjects
            </p>
            <p>
              <b>ADVERSE REACTIONS</b>
            </p>
            <p>
              Most common adverse reactions occurring in 7% to 12% of patients are
              erythema/reddening, pruritus and scaling/dryness. Additionally,
              edema, stinging,
              and burning occurred in >3% of patients and were reported in a similar
              percentage of subjects treated with vehicle.</p>
            <p>
              <b>To report SUSPECTED ADVERSE REACTIONS, contact Sun
              Pharmaceutical Industries, Inc. at 1-800-818-4555 or FDA at 1-800-
              FDA-1088
              or <a
              href="http://www.fda.gov/medwatch"
              target="_blank"
              rel="noopener noreferrer"
                >http://www.fda.gov/medwatch.</a></b>
            </p>
            <p>
              <b>
                Please see the full{" "}
                <a
                  href="https://www.winlevi-hcp.com/pdf/winlevi-prescribing-information.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Prescribing Information
                </a>
                {" "}and the{" "}
                <a
                  href="https://www.winlevi-hcp.com/pdf/winlevi-prescribing-information.pdf#page=2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Patient Information
                </a>
              </b>
            </p>
          </div>
        );
        break;

      case "xelpros":
        warningisi = (
          <div className="xelpros">
            <p className="sub-head">IMPORTANT SAFETY INFORMATION</p>
            <p className="sub-head">CONTRAINDICATIONS</p>
            <p>
              XELPROS is contraindicated in patients with a known
              hypersensitivity to latanoprost, or any other ingredients in this
              product.
            </p>
            <p className="sub-head">WARNINGS AND PRECAUTIONS</p>
            <p>
              <b>Pigmentation:</b> XELPROS may cause changes to pigmented
              tissues. The most frequently reported changes are increased
              pigmentation of the iris, periorbital tissue (eyelid), and
              eyelashes. Pigmentation is expected to increase as long as XELPROS
              is administered. After discontinuation of XELPROS, iris
              pigmentation is likely to be permanent. Patients who receive
              treatment should be informed of the possibility of increased
              pigmentation. The long-term effects of increased pigmentation are
              not known.
            </p>
            <p>
              <b>Eyelash Changes:</b> XELPROS may gradually change eyelashes and
              vellus hair in the treated eye, including increased length,
              thickness, pigmentation, and number of lashes. The changes are
              usually reversible upon discontinuation of treatment.
            </p>
            <p>
              <b>Intraocular Inflammation:</b> XELPROS should be used with
              caution in patients with a history of intraocular inflammation
              (iritis/uveitis) and should generally not be used in patients with
              active intraocular inflammation.
            </p>
            <p>
              <b>Macular Edema:</b> XELPROS should be used with caution in
              aphakic patients, in pseudophakic patients with a torn posterior
              lens capsule, or in patients with known risk factors for macular
              edema.
            </p>
            <p>
              <b>Herpetic Keratitis:</b> XELPROS should be used with caution in
              patients with a history of herpetic keratitis. XELPROS should be
              avoided in cases of active herpes simplex keratitis because
              inflammation may be exacerbated.
            </p>
            <p>
              <b>Bacterial Keratitis:</b> There have been reports of bacterial
              keratitis associated with the use of multiple- dose containers of
              topical ophthalmic products.
            </p>
            <p>
              <b>Use with Contact Lenses:</b> Contact lenses should be removed
              prior to administration of XELPROS and may be reinserted 15
              minutes following administration.
            </p>
            <p className="sub-head">ADVERSE REACTIONS</p>
            <p>
              The most common ocular adverse reactions in clinical trials
              (incidence ≥5%) for XELPROS were eye pain/stinging, ocular
              hyperemia, conjunctival hyperemia, eye discharge, growth of
              eyelashes, and eyelash thickening.
            </p>
            <p className="sub-head">DRUG INTERACTIONS</p>
            <p>
              Precipitation may occur if drugs containing thimerosal are used
              concomitantly with XELPROS. If such drugs are used, they should be
              administered at least 5 minutes apart.
            </p>
            <p>
              <b>
                Please see the{" "}
                <a
                  href="https://xelpros.com/pdf/XelprosPI.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ins>Full Prescribing Information.</ins>
                </a>
              </b>
            </p>
          </div>
        );
        break;

      case "bromsite":
        warningisi = (
          <div className="bromsite">
            <p>
              <b>• Potential for Cross-Sensitivity:</b> There is the potential
              for cross-sensitivity to acetylsalicylic acid, phenylacetic acid
              derivatives, and other NSAIDs, including BromSite<sup>&reg;</sup>.
              Therefore, caution should be used when treating individuals who
              have previously exhibited sensitivities to these drugs.
            </p>
            <p>
              <b>• Increased Bleeding Time of Ocular Tissue:</b> With some
              NSAIDs, including BromSite<sup>&reg;</sup>, there exists the
              potential for increased bleeding time due to interference with
              platelet aggregation. There have been reports that ocularly
              applied NSAIDs may cause increased bleeding of ocular tissues
              (including hyphemas) in conjunction with ocular surgery. It is
              recommended that BromSite<sup>&reg;</sup> be used with caution in
              patients with known bleeding tendencies or who are receiving other
              medications which may prolong bleeding time.
            </p>
            <p>
              <b>• Keratitis and Corneal Effects:</b> Use of topical NSAIDs may
              result in keratitis. In some susceptible patients, continued use
              of topical NSAIDs may result in epithelial breakdown, corneal
              thinning, corneal erosion, corneal ulceration or corneal
              perforation. Patients with evidence of corneal epithelial
              breakdown should immediately discontinue use of topical NSAIDs,
              including BromSite<sup>&reg;</sup>, and should be closely
              monitored for corneal health. Patients with complicated ocular
              surgeries, corneal denervation, corneal epithelial defects,
              diabetes mellitus, ocular surface diseases (e.g., dry eye
              syndrome), rheumatoid arthritis, or repeat ocular surgeries within
              a short period of time may be at increased risk for corneal
              adverse events which may become sight threatening. Topical NSAIDs
              should be used with caution in these patients. Post-marketing
              experience with topical NSAIDs also suggests that use more than 24
              hours prior to surgery or use beyond 14 days postsurgery may
              increase patient risk for the occurrence and severity of corneal
              adverse events.
            </p>
            <p>
              <b>• Contact Lens Wear:</b> BromSite<sup>&reg;</sup> should not be
              administered while wearing contact lenses. The preservative in
              BromSite<sup>&reg;</sup>, benzalkonium chloride, may be absorbed
              by soft contact lenses.
            </p>
            <p>
              <b>• Adverse Reactions:</b> The most commonly reported adverse
              reactions in 1% to 8% of patients were anterior chamber
              inflammation, headache, vitreous floaters, iritis, eye pain, and
              ocular hypertension.
            </p>
            <br />
            <p>
              <b>
                Please click{" "}
                <a
                  href="https://www.bromsite.com/media/wwflxhdl/bromsitepi.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ins>here</ins>
                </a>{" "}
                to see full prescribing information.
              </b>
            </p>
          </div>
        );
        break;

      case "infugem":
        warningisi = (
          <div className="infugem">
            <p>
              <b>Pancreatic Cancer:</b> as first-line treatment for patients
              with locally advanced (nonresectable Stage II or Stage III) or
              metastatic (Stage IV) adenocarcinoma of the pancreas. INFUGEM is
              indicated for patients previously treated with fluorouracil.
            </p>
            <br />
            <p className="sub-head">IMPORTANT SAFETY INFORMATION</p>
            <p className="sub-head fs-16">CONTRAINDICATIONS</p>
            <p>
              INFUGEM is contraindicated in patients with a known
              hypersensitivity to gemcitabine. Reactions include anaphylaxis.
            </p>
            <p className="sub-head fs-16">WARNINGS AND PRECAUTIONS</p>
            <p>
              <b>Schedule-Dependent Toxicity:</b> In clinical trials evaluating
              the maximum tolerated dose of gemcitabine, prolongation of the
              infusion time beyond 60 minutes or more frequent than weekly
              dosing resulted in an increased incidence of clinically
              significant hypotension, severe flu-like symptoms,
              myelosuppression, and asthenia.
            </p>
            <p>
              <b>Myelosuppression:</b> Myelosuppression manifested by
              neutropenia, thrombocytopenia, and anemia occurs with INFUGEM as a
              single agent. The risks are increased when INFUGEM is combined
              with other cytotoxic drugs. Monitor patients receiving INFUGEM
              prior to each dose with a complete blood count (CBC), including
              differential and platelet count, and modify the dosage as
              recommended.
            </p>
            <p>
              <b>Pulmonary Toxicity and Respiratory Failure:</b> Permanently
              discontinue INFUGEM in patients who develop unexplained dyspnea,
              with or without bronchospasm, or have any evidence of pulmonary
              toxicity.
            </p>
            <p>
              <b>Hemolytic Uremic Syndrome:</b> Hemolytic uremic syndrome (HUS),
              including fatalities from renal failure or the requirement for
              dialysis, can occur in patients treated with INFUGEM. Most fatal
              cases of renal failure were due to HUS. Serious cases of
              thrombotic microangiopathy other than HUS have been reported with
              gemcitabine. Assess renal function prior to initiation of INFUGEM
              and periodically during treatment. Permanently discontinue INFUGEM
              in patients with HUS or severe renal impairment. Renal failure may
              not be reversible even with discontinuation of therapy.
            </p>
            <p>
              <b>Hepatic Toxicity:</b> Drug-induced liver injury, including
              liver failure and death, has been reported in patients receiving
              gemcitabine alone or in combination with other potentially
              hepatotoxic drugs. Assess hepatic function prior to initiation of
              INFUGEM and periodically during treatment. Permanently discontinue
              INFUGEM in patients that develop severe liver injury.
            </p>
            <p>
              <b>Embryo-Fetal Toxicity:</b> INFUGEM can cause harm to the fetus
              when administered to a pregnant woman. Advise females of
              reproductive potential to use effective contraception during
              treatment with INFUGEM and for 6 months after the final dose.
              Advise male patients with female partners of reproductive
              potential to use effective contraception during and for 3 months
              following the final dose of INFUGEM.
            </p>
            <p>
              <b>Exacerbation of Radiation Therapy Toxicity:</b> INFUGEM is not
              recommended for use in combination with radiation therapy, either
              concurrently or ≤7 days apart. Life-threatening mucositis,
              especially esophagitis and pneumonitis occurred in a trial in
              which gemcitabine was administered at a dose of 1000 mg/m2 to
              patients with non-small cell lung cancer for up to 6 consecutive
              weeks concurrently with thoracic radiation. Excessive toxicity has
              not been observed when gemcitabine is administered more than 7
              days before or after radiation. Radiation recall has been reported
              in patients who receive gemcitabine after prior radiation.
            </p>
            <p>
              <b>Capillary Leak Syndrome:</b> Capillary leak syndrome (CLS) with
              severe consequences has been reported in patients receiving
              gemcitabine as a single agent or in combination with other
              chemotherapeutic agents. Permanently discontinue INFUGEM if CLS
              develops during therapy.
            </p>
            <p>
              <b>Posterior Reversible Encephalopathy Syndrome (PRES):</b> PRES
              has been reported in patients receiving gemcitabine as a single
              agent or in combination with other chemotherapeutic agents, and
              can present with headache, seizure, lethargy, hypertension,
              confusion, blindness, and other visual and neurologic
              disturbances. Confirm the diagnosis of PRES with magnetic
              resonance imaging (MRI) and permanently discontinue INFUGEM if
              PRES develops during therapy.
            </p>
            <p className="sub-head fs-16">ADVERSE REACTIONS</p>
            <p>
              The most common adverse reactions for the single agent (≥20%) are
              nausea/vomiting, anemia, hepatic transaminitis, neutropenia,
              increased alkaline phosphatase, proteinuria, fever, hematuria,
              rash, thrombocytopenia, dyspnea, and peripheral edema.
            </p>
            <p className="sub-head fs-16">USE IN SPECIFIC POPULATIONS</p>
            <p>
              Due to the potential for serious adverse reactions in nursing
              infants from INFUGEM, women should not breastfeed during treatment
              with INFUGEM and for at least one week after the last dose. The
              safety and effectiveness of INFUGEM have not been established in
              pediatric patients.
            </p>
            <p>
              <b>
                You are encouraged to report all side effects or Adverse Drug
                Events (ADEs) of prescription drugs to the FDA. Visit MedWatch
                or call 1-800-FDA-1088.
              </b>{" "}
              You are also encouraged to report side effects or ADEs to our Drug
              Safety Department at 1-800-406-7984 or
              drug.safetyUSA@sunpharma.com (preferred) with as much information
              as available.
            </p>
            <p>
              <b>
                Please see Full Prescribing Information for INFUGEM
                <sup>&trade;</sup> at{" "}
                <a
                  href="http://www.infugem.com/infugem-PI"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ins>http://www.infugem.com/infugem-PI</ins>
                </a>
              </b>
            </p>
          </div>
        );
        break;

      case "ezallor":
        warningisi = (
          <div className="ezallor">
            <p className="sub-head">LIMITATIONS OF USE</p>
            <p>
              Ezallor Sprinkle<sup>&trade;</sup> has not been studied in Fredrickson Type I and V dyslipidemias. Ezallor Sprinkle<sup>&trade;</sup> is indicated only for use in patients 18 and older.
            </p>
            <p className="sub-head">IMPORTANT SAFETY INFORMATION</p>
            <p className="sub-head">CONTRAINDICATIONS</p>
            <ul>
              <li>
                <p>
                  Patients with a known hypersensitivity to any component of this product.
                  Hypersensitivity reactions including rash, pruritus, urticaria, and angioedema
                  have been reported with rosuvastatin.
                </p>
              </li>
              <li>
                <p>
                  Patients with active liver disease, which may include unexplained
                  persistent elevations of hepatic transaminase levels.
                </p>
              </li>
              <li>
                <p>
                  Pregnancy: advise females of reproductive potential to use effective contraception
                  during treatment with Ezallor Sprinkle<sup>&trade;</sup>.
                </p>
              </li>
              <li>
                <p>
                  Lactation: limited data indicate that rosuvastatin is present in human
                  milk. Because statins have the potential for serious adverse
                  reactions in nursing infants, women who require Ezallor
                  Sprinkle<sup>&trade;</sup> treatment should not breastfeed their infants.
                </p>
              </li>
            </ul>
            <p className="sub-head">WARNINGS AND PRECAUTIONS</p>
            <ul>
              <li>
                <p>
                  <b>Skeletal Muscle Effects:</b> Cases of myopathy and rhabdomyolysis
                  with acute renal failure secondary to myoglobinuria have been reported
                  with HMG-CoA reductase inhibitors, including rosuvastatin.
                  These risks can occur at any dose level, but are increased at
                  the highest dose (40 mg). Ezallor Sprinkle<sup>&trade;</sup> should be prescribed with caution in patients with predisposing
                  factors for myopathy (e.g. aged ≥65 years, inadequately treated hypothyroidism,
                  renal impairment). The risk of myopathy during treatment with Ezallor Sprinkle<sup>&trade;</sup> may be increased with concurrent administration of gemfibrozil, some other lipid-lowering
                  therapies (other fibrates or niacin), cyclosporine, darolutamide, regorafenib,
                  atazanavir/ritonavir, lopinavir/ritonavir, simeprevir or combination of
                  sofosbuvir/velpatasvir/voxilaprevir, dasabuvir/ombitasvir/paritaprevir/ritonavir,
                  elbasvir/grazoprevir, sofosbuvir/velpatasvir, glecaprevir/pibrentasvir,
                  all combinations with ledipasvir (including ledipasvir/sofosbuvir).
                  Ezallor Sprinkle<sup>&trade;</sup> therapy should be discontinued if markedly
                  elevated CK levels occur or myopathy is diagnosed or suspected.
                </p>
              </li>
              <li>
                <p>
                  <b>Immune-Mediated Necrotizing Myopathy (IMNM):</b> There have been
                  rare reports of IMNM, an autoimmune myopathy, associated with statin use.
                  IMNM is characterized by proximal muscle weakness and elevated serum
                  creatine kinase, which persist despite discontinuation of statin treatment;
                  positive anti-HMG-CoA reductase antibody; muscle biopsy showing necrotizing
                  myopathy; and improvement with immunosuppressive agents.
                </p>
              </li>
              <li>
                <p>
                  <b>Liver Enzyme Abnormalities:</b> It is recommended that liver enzyme tests
                  be performed before the initiation of Ezallor Sprinkle<sup>&trade;</sup>,
                  and if signs or symptoms of liver injury occur.
                  There have been rare postmarketing reports of fatal and non-fatal
                  hepatic failure in patients taking statins, including rosuvastatin.
                  If serious liver injury with clinical symptoms and/or hyperbilirubinemia
                  or jaundice occurs during treatment with Ezallor Sprinkle<sup>&trade;</sup>,
                  promptly interrupt therapy. If an alternate etiology is not found,
                  do not restart Ezallor Sprinkle<sup>&trade;</sup>. Ezallor Sprinkle<sup>&trade;</sup> should be used with caution
                  in patients who consume substantial quantities of alcohol and/or have a history of
                  chronic liver disease. Active liver disease, which may include unexplained
                  persistent transaminase elevations, is a contraindication to the use of Ezallor Sprinkle<sup>&trade;</sup>
                </p>
              </li>
              <li>
                <p>
                  <b>Concomitant Coumarin Anticoagulants:</b> Caution should be exercised when
                  anticoagulants are given in conjunction with Ezallor Sprinkle<sup>&trade;</sup> because of its potentiation of the effect of coumarin-type anticoagulants
                  in prolonging the prothrombin time/INR. In patients taking coumarin anticoagulants
                  and Ezallor Sprinkle<sup>&trade;</sup> concomitantly, INR should be determined before starting
                  Ezallor Sprinkle<sup>&trade;</sup> and frequently enough during early therapy
                  to ensure that no significant alteration of INR occurs.
                </p>
              </li>
              <li>
                <p>
                  <b>Proteinuria and Hematuria:</b> Dipstick-positive proteinuria and microscopic
                  hematuria were observed among patients treated with rosuvastatin.
                  These findings were more frequent in patients taking rosuvastatin 40 mg,
                  though it was generally transient and was not associated with worsening
                  renal function. Although the clinical significance of this finding is unknown,
                  dose reduction should be considered for patients on Ezallor Sprinkle<sup>&trade;</sup> therapy with unexplained persistent proteinuria and/or hematuria during
                  routine urinalysis testing
                </p>
              </li>
              <li>
                <p>
                  <b>Endocrine Effects:</b> Increases in HbA1c and fasting serum glucose levels have been
                  reported with statins, including rosuvastatin.
                  Based on clinical trial data with rosuvastatin, in some instances these increases may
                  exceed the threshold for the diagnosis of diabetes mellitus.
                </p>
              </li>
            </ul>
            <p className="sub-head">ADVERSE REACTIONS</p>
            <p>
              In the controlled clinical trials database, the most common
              adverse reactions were headache, myalgia, abdominal pain, asthenia, and nausea.
            </p>
            <p>
              There have been rare reports of immune-mediated myopathy associated with statin use. There have been rare postmarketing reports of cognitive impairment (e.g. memory loss, forgetfulness, amnesia, memory impairment, and confusion) associated with statin use. These cognitive issues have been reported for all statins. The reports are generally non-serious, and reversible upon statin discontinuation, with variable times to symptom onset (1 day to years) and symptom resolution (median of 3 weeks).
            </p>
            <p>
              To report SUSPECTED ADVERSE REACTIONS, contact Sun Pharmaceutical Industries, Inc. at 1-800-818-4555 or FDA at 1-800-FDA-1088 or <a href="https://www.fda.gov/medwatch"><b><ins>www.fda.gov/medwatch</ins></b></a>.
            </p>
            <p>
              Please see{" "}
              <a
                href="https://www.ezallorsprinkle.com/options/full-prescribing-information/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <b>
                  <ins>Full Prescribing Information.</ins>
                </b>
              </a>
            </p>
          </div>
        );
        break;

      case "levulan":
        warningisi = (
          <div className="levulan">
            <p>
              Contraindicated in patients with cutaneous photosensitivity at
              wavelengths of 400–450 nm, porphyria, or known allergies to
              porphyrins, and in patients with known sensitivity to any of the
              components of the LEVULAN KERASTICK topical solution.
            </p>
            <p>
              Application of LEVULAN KERASTICK topical solution should involve
              lesions on the face or scalp, or upper extremities. Multiple
              lesions can be treated within a treatment region, but multiple
              treatment regions should not be treated simultaneously.
            </p>
            <p>
              Do not apply to the eyes or to mucus membranes. Irritation may be
              experienced if LEVULAN KERASTICK topical solution is applied to
              eyes or mucous membranes. Treatment of upper extremities is
              approved after an incubation time of 3 hours under occlusion.
              Excessive irritation may be experienced if this product is applied
              under occlusion longer than 3 hours.
            </p>
            <p>
              Transient amnestic episodes have been reported during
              postmarketing use of LEVULAN KERASTICK in combination with BLU-U
              Blue Light Photodynamic Therapy Illuminator. Inform patients and
              their caregivers that LEVULAN KERASTICK in combination with PDT
              may cause transient amnestic episodes. Advise them to contact the
              healthcare provider if the patient develops amnesia after
              treatment.
            </p>
            <p>
              After LEVULAN KERASTICK topical solution has been applied, the
              treatment site will become photosensitive and patients should
              avoid exposure of the photosensitive treatment sites to sunlight
              or bright indoor light (e.g., examination lamps, operating room
              lamps, tanning beds, or lights at close proximity) for 40 hours.
              To avoid unintended photosensitivity, LEVULAN KERASTICK topical
              solution should be applied by a qualified health professional to
              no more than 5 mm of perilesional skin surrounding each target
              actinic keratosis lesion.
            </p>
            <p>
              Advise patients to wear a wide-brimmed hat or similar head
              covering of light-opaque material or a long-sleeved shirt and/or
              gloves to shade the treated actinic keratoses from sunlight or
              other bright light sources until at least 40 hours after the
              application of LEVULAN KERASTICK topical solution. Sunscreens will
              not protect against photosensitivity reactions caused by visible
              light. The patient should be advised to reduce light exposure if
              the sensations of stinging and/or burning are experienced.
            </p>
            <p>
              LEVULAN KERASTICK topical solution has not been tested on patients
              with inherited or acquired coagulation defects.
            </p>
            <p>
              It is possible that concomitant use of other known
              photosensitizing agents such as St. John’s wort, griseofulvin,
              thiazide diuretics, sulfonylureas, phenothiazines, sulfonamides
              and tetracyclines might increase the photosensitivity reaction of
              actinic keratoses treated with the LEVULAN KERASTICK topical
              solution.
            </p>
            <p>
              During light treatment, both patients and medical personnel should
              be provided with blue blocking protective eyewear as specified in
              the BLU-U Blue Light Photodynamic Therapy Illuminator Operating
              Instructions.
            </p>
            <p>
              The most common local adverse reactions (incidence ≥ 10%) were
              erythema, edema, stinging/burning, scaling/ crusting, itching,
              erosion, hypo/hyperpigmentation, oozing/vesiculation/crusting,
              scaling and dryness.
            </p>
            <p>
              In clinical trials, severe stinging and/or burning was reported by
              at least 50% of face and scalp patients and 9% of upper extremity
              patients at some time during treatment. However, less than 3% of
              subjects receiving treatment for face or scalp lesions
              discontinued light treatment because of stinging/burning. No
              subjects discontinued light treatment in the trial for upper
              extremity lesions.
            </p>
            <p>
              <b>
                Please refer to the{" "}
                <a
                  href="https://www.levulanhcp.com/assets/pdf/levulan-prescribing-information.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ins>full Prescribing Information</ins>
                </a>{" "}
                for complete discussion of the risks associated with LEVULAN
                KERASTICK (aminolevulinic acid HCl) for topical solution, 20%.
              </b>
            </p>
          </div>
        );
        break;

      case "yonsa":
        warningisi = (
          <div className="yonsa">
            <p className="sub-head dark-blue">IMPORTANT SAFETY INFORMATION</p>
            <p className="sub-head">WARNINGS AND PRECAUTIONS</p>
            <p>
              <b className="dark-blue">
                Hypertension, Hypokalemia, and Fluid Retention Due to
                Mineralocorticoid Excess:
              </b>{" "}
              YONSA<sup>&reg;</sup> may cause hypertension, hypokalemia, and
              fluid retention due to increased mineralocorticoid levels
              resulting from CYP17 inhibition. Monitor patients at least once a
              month. Control hypertension and correct hypokalemia before and
              during treatment with YONSA<sup>&reg;</sup>.
            </p>
            <p>
              Closely monitor patients whose underlying medical conditions might
              be compromised by increases in blood pressure, hypokalemia, or
              fluid retention, such as those with heart failure, recent
              myocardial infarction, cardiovascular disease, or ventricular
              arrhythmia. In postmarketing experience, QT prolongation and
              Torsades de Pointes have been observed in patients who develop
              hypokalemia while taking abiraterone acetate.
            </p>
            <p>
              The safety of YONSA<sup>&reg;</sup> in patients with left
              ventricular ejection fraction &lt;50%, or New York Heart
              Association (NYHA) Class III or IV heart failure (in Study 1) or
              NYHA Class II to IV heart failure (in Study 2), was not evaluated
              because these patients were excluded from randomized clinical
              trials.
            </p>
            <p>
              <b className="dark-blue">Adrenocortical Insufficiency:</b>{" "}
              Adrenocortical insufficiency (AI) was reported in patients
              receiving abiraterone acetate in combination with corticosteroid,
              following an interruption of daily steroids and/or with concurrent
              infection or stress. Monitor patients for symptoms and signs of
              AI, particularly if patients are withdrawn from corticosteroids,
              have corticosteroid dose reductions, or experience unusual stress.
              Symptoms and signs of AI may be masked by adverse reactions
              associated with mineralocorticoid excess seen in patients treated
              with YONSA<sup>&reg;</sup>. Perform appropriate tests, if
              indicated, to confirm AI. Increased dosages of corticosteroids may
              be used before, during, and after stressful situations.
            </p>
            <p>
              <b className="dark-blue">Hepatotoxicity:</b> In postmarketing
              experience, there has been abiraterone acetate-associated severe
              hepatic toxicity, including reports of fulminant hepatitis, acute
              liver failure, and deaths. Measure serum transaminases (ALT and
              AST) and bilirubin levels prior to starting treatment with YONSA
              <sup>&reg;</sup>, every two weeks for the first three months of
              treatment, and monthly thereafter. In patients with baseline
              moderate hepatic impairment receiving a reduced YONSA
              <sup>&reg;</sup> dose of 125 mg, measure ALT, AST, and bilirubin
              prior to the start of treatment, every week for the first month,
              every two weeks for the following two months of treatment, and
              monthly thereafter.
            </p>
            <p>
              Promptly measure serum total bilirubin, AST, and ALT if clinical
              symptoms or signs suggestive of hepatotoxicity develop. Elevations
              of AST, ALT, or bilirubin from the patient’s baseline should
              prompt more frequent monitoring. If at any time AST or ALT rise
              above five times the upper limit of normal (ULN), or the bilirubin
              rises above three times the ULN, interrupt YONSA<sup>&reg;</sup>{" "}
              treatment and closely monitor liver function.
            </p>
            <p>
              Re-treatment with YONSA<sup>&reg;</sup> at a reduced dose level
              may take place only after return of liver function tests to the
              patient’s baseline, or to AST and ALT less than or equal to 2.5X
              ULN and total bilirubin less than or equal to 1.5X ULN.
            </p>
            <p>
              Permanently discontinue treatment with abiraterone acetate for
              patients who develop a concurrent elevation of ALT greater than 3X
              ULN and total bilirubin greater than 2X ULN in the absence of
              biliary obstruction or other causes responsible for the concurrent
              elevation.
            </p>
            <p>
              The safety of YONSA<sup>&reg;</sup> re-treatment of patients who
              develop AST or ALT greater than or equal to 20X ULN and/or
              bilirubin greater than or equal to 10X ULN has not been evaluated.
            </p>
            <p>
              <b className="dark-blue">
                Increased Fractures and Mortality in Combination with Radium Ra
                223 Dichloride:
              </b>{" "}
              YONSA<sup>&reg;</sup> plus methylprednisolone is not recommended
              for use in combination with radium Ra 223 dichloride outside of
              clinical trials.
            </p>
            <p>
              Increased incidences of fractures (28.6% vs 11.4%) and deaths
              (38.5% vs 35.5%) have been observed in patients who received
              abiraterone acetate plus a corticosteroid in combination with
              radium Ra 223 dichloride compared to patients who received placebo
              in combination with abiraterone acetate plus a corticosteroid.
            </p>
            <p>
              <b className="dark-blue">Embryo-Fetal Toxicity:</b> The safety and
              efficacy of YONSA<sup>&reg;</sup> have not been established in
              females. Based on animal reproductive studies and mechanism of
              action, YONSA<sup>&reg;</sup> can cause fetal harm and loss of
              pregnancy when administered to a pregnant female. Advise males
              with female partners of reproductive potential to use effective
              contraception during treatment with YONSA<sup>&reg;</sup> and for
              3 weeks after the final dose of YONSA<sup>&reg;</sup>.
            </p>
            <p>
              Females who are pregnant or may be pregnant should not handle
              YONSA<sup>&reg;</sup> tablets if broken, crushed, or damaged
              without protection, eg, gloves.
            </p>
            <p>
              <b className="dark-blue">Hypoglycemia:</b> Severe hypoglycemia has
              been reported when abiraterone acetate was administered to
              patients with pre-existing diabetes receiving medications
              containing thiazolidinediones (including pioglitazone) or
              repaglinide. Monitor blood glucose in patients with diabetes
              during and after discontinuation of treatment with abiraterone
              acetate. Assess if antidiabetic drug dosage needs to be adjusted
              to minimize the risk of hypoglycemia.
            </p>
            <p className="sub-head">ADVERSE REACTIONS</p>
            <p>
              The most common adverse reactions (≥10%) are fatigue, joint
              swelling or discomfort, edema, hot flush, diarrhea, vomiting,
              cough, hypertension, dyspnea, urinary tract infection, and
              contusion.
            </p>
            <p>
              The most common laboratory abnormalities (>20%) are anemia,
              elevated alkaline phosphatase, hypertriglyceridemia, lymphopenia,
              hypercholesterolemia, hyperglycemia, elevated AST,
              hypophosphatemia, elevated ALT, and hypokalemia.
            </p>
            <p className="sub-head">DRUG INTERACTIONS</p>
            <p>
              <b className="dark-blue">
                Drugs that Inhibit or Induce CYP3A4 Enzymes:
              </b>{" "}
              Based on <i>in vitro</i> data, YONSA<sup>&reg;</sup> is a substrate of
              CYP3A4. In a drug interaction trial, co-administration of
              rifampin, a strong CYP3A4 inducer, decreased exposure of
              abiraterone by 55%. Avoid concomitant strong CYP3A4 inducers
              during YONSA<sup>&reg;</sup> treatment. If a strong CYP3A4 inducer
              must be co-administered, increase the YONSA<sup>&reg;</sup> dosing
              frequency only during the co-administration period.
            </p>
            <p>
              <b className="dark-blue">
                Effects of Abiraterone on Drug-Metabolizing Enzymes:
              </b>{" "}
              Abiraterone is an inhibitor of the hepatic drug-metabolizing
              enzymes CYP2D6 and CYP2C8. Avoid co-administration of abiraterone
              acetate with substrates of CYP2D6 with a narrow therapeutic index
              (eg, thioridazine). If alternative treatments cannot be used,
              exercise caution and consider a dose reduction of the concomitant
              CYP2D6 substrate drug. In a CYP2C8 drug-drug interaction trial in
              healthy subjects, the AUC of pioglitazone (CYP2C8 substrate) was
              increased by 46% when pioglitazone was given together with an
              abiraterone acetate single-dose equivalent to YONSA
              <sup>&reg;</sup> 500 mg. Therefore, patients should be monitored
              closely for signs of toxicity related to a CYP2C8 substrate with a
              narrow therapeutic index if used concomitantly with abiraterone
              acetate.
            </p>
            <p>
              <b>
                Please see{" "}
                <a
                  href="http://www.yonsarx.com/wp-content/uploads/2018/12/Yonsa-PI.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ins>full Prescribing Information</ins>.
                </a>
              </b>
            </p>
          </div>
        );
        break;

      case "kapspargo":
        warningisi = (
          <div className="kapspargo">
            <ul>
              <li>
                <p>
                  Angina pectoris. Long-term treatment to reduce angina attacks
                  and to improve exercise tolerance
                </p>
              </li>
              <li>
                <p>
                  Heart failure, to reduce the risk of cardiovascular mortality
                  and hospitalization in patients with heart failure
                </p>
              </li>
            </ul>
            <p className="sub-head">IMPORTANT SAFETY INFORMATION</p>
            <p className="sub-head">Contraindications</p>
            <p>
              <b>
                Kapspargo Sprinkle<sup>&trade;</sup>
              </b>{" "}
              (metoprolol succinate)
            </p>
            <ul>
              <li>
                <p>Known hypersensitivity to the product components</p>
              </li>
              <li>
                <p>
                  Severe bradycardia, greater than first-degree heart block, or
                  sick sinus syndrome without a pacemaker
                </p>
              </li>
              <li>
                <p>Cardiogenic shock or decompensated heart failure</p>
              </li>
            </ul>
            <p className="sub-head">Warnings and Precautions</p>
            <ul>
              <li>
                <p>
                  <b>Abrupt Cessation of Therapy:</b> Following abrupt cessation
                  of therapy with certain beta-blocking agents, exacerbations of
                  angina pectoris and, in some cases, myocardial infarction have
                  occurred. When discontinuing chronically administered
                  metoprolol succinate, particularly in patients with ischemic
                  heart disease, gradually reduce the dosage over a period of 1
                  to 2 weeks and monitor the patient. If angina markedly worsens
                  or acute coronary ischemia develops, promptly reinstate
                  metoprolol succinate, and take measures appropriate for the
                  management of unstable angina. Warn patients not to interrupt
                  therapy without their physician’s advice. Because coronary
                  artery disease is common and may be unrecognized, avoid
                  abruptly discontinuing metoprolol succinate in patients
                  treated only for hypertension.
                </p>
              </li>
              <li>
                <p>
                  <b>Heart Failure:</b> Worsening cardiac failure may occur
                  during up-titration of metoprolol succinate. If such symptoms
                  occur, increase diuretics and restore clinical stability
                  before advancing the dose of metoprolol succinate.
                </p>
              </li>
              <li>
                <p>
                  <b>Bronchospastic Disease:</b> PATIENTS WITH BRONCHOSPASTIC
                  DISEASES SHOULD, IN GENERAL, NOT RECEIVE BETA-BLOCKERS.
                  Because beta<sub>1</sub>-selectivity is not absolute, use the
                  lowest possible dose of metoprolol succinate. Bronchodilators,
                  including beta<sub>2</sub>-agonists, should be readily
                  available or administered concomitantly.
                </p>
              </li>
              <li>
                <p>
                  <b>Pheochromocytoma:</b> If metoprolol succinate is used in
                  the setting of pheochromocytoma, it should be given in
                  combination with an alpha blocker, and only after the alpha
                  blocker has been initiated. Administration of beta-blockers
                  alone in the setting of pheochromocytoma has been associated
                  with a paradoxical increase in blood pressure due to the
                  attenuation of beta-mediated vasodilatation in skeletal
                  muscle.
                </p>
              </li>
              <li>
                <p>
                  <b>Major Surgery:</b> Avoid initiation of a high-dose regimen
                  of extended-release metoprolol in patients undergoing
                  noncardiac surgery, since such use in patients with
                  cardiovascular risk factors has been associated with
                  bradycardia, hypotension, stroke, and death. Do not routinely
                  withdraw chronic beta-blocker therapy prior to surgery.
                </p>
              </li>
              <li>
                <p>
                  <b>Masked Symptoms of Hypoglycemia:</b> Beta-blockers may mask
                  tachycardia occurring with hypoglycemia, but other
                  manifestations such as dizziness and sweating may not be
                  significantly affected.
                </p>
              </li>
              <li>
                <p>
                  <b>Thyrotoxicosis:</b> Beta-adrenergic blockade may mask
                  certain clinical signs of hyperthyroidism, such as
                  tachycardia. Abrupt withdrawal of beta-blockade may
                  precipitate a thyroid storm.
                </p>
              </li>
              <li>
                <p>
                  <b>Peripheral Vascular Disease:</b> Beta-blockers can
                  precipitate or aggravate symptoms of arterial insufficiency in
                  patients with peripheral vascular disease.
                </p>
              </li>
            </ul>
            <p className="sub-head">Adverse Reactions</p>
            <p>
              In clinical trials, most common adverse reactions were tiredness,
              dizziness, depression, shortness of breath, bradycardia,
              hypotension, diarrhea, pruritus, and rash.
            </p>
            <p className="sub-head">Drug Interactions</p>
            <ul>
              <li>
                <p>
                  <b>Catecholamine-Depleting Drugs</b> may have an additive
                  effect when given with beta-blocking agents. Observe patients
                  treated with metoprolol succinate plus a catecholamine
                  depleter for evidence of hypotension or marked bradycardia,
                  which may produce vertigo, syncope, or postural hypotension.
                </p>
              </li>
              <li>
                <p>
                  <b>Epinephrine:</b> Patients with a history of severe
                  anaphylactic reactions to a variety of allergens may be more
                  reactive and may be unresponsive to the usual doses of
                  epinephrine used to treat allergic reaction.
                </p>
              </li>
              <li>
                <p>
                  <b>CYP2D6 Inhibitors:</b> Drugs that are strong inhibitors of
                  CYP2D6, such as quinidine, fluoxetine, paroxetine, and
                  propafenone, were shown to double metoprolol concentrations.
                </p>
              </li>
              <li>
                <p>
                  <b>Digitalis, Clonidine, and Calcium Channel Blockers:</b>{" "}
                  Concomitant use of glycosides, clonidine, diltiazem, and
                  verapamil with beta-blockers can increase the risk of
                  bradycardia. Betablockers including metoprolol may exacerbate
                  the rebound hypertension that can follow the withdrawal of
                  clonidine.
                </p>
              </li>
              <li>
                <p>
                  <b>Alcohol:</b> Metoprolol succinate is released faster from
                  KAPSPARGO Sprinkle in the presence of alcohol. Avoid alcohol
                  consumption when taking KAPSPARGO Sprinkle.
                </p>
              </li>
            </ul>
            <p className="sub-head">Use in Specific Populations</p>
            <ul>
              <li>
                <p>
                  <b>Hepatic Impairment:</b> Consider initiating therapy with
                  metoprolol at low doses, and gradually increase dosage to
                  optimize therapy while monitoring closely for adverse events.
                </p>
              </li>
            </ul>
            <p>
              Please see{" "}
              <a
                href="https://www.kapspargosprinkle.com/options/full-prescribing-information/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <b>
                  <ins>Full Prescribing Information.</ins>
                </b>
              </a>
            </p>
          </div>
        );
        break;

      case "drizalma":
        warningisi = (
          <div className="drizalma">
            <ul>
              <li>
                <p>Chronic musculoskeletal pain in adults</p>
              </li>
              <li>
                <p>Fibromyalgia (FM) in adults</p>
              </li>
            </ul>
            <p className="sub-head">IMPORTANT SAFETY INFORMATION</p>
            <div className="border-content">
              <p>WARNING: SUICIDAL THOUGHTS AND BEHAVIORS</p>
              <p>
                Antidepressants increased the risk of suicidal thoughts and
                behavior in pediatric and young adult patients in short-term
                studies.
              </p>
              <p>
                Closely monitor all antidepressant-treated patients for clinical
                worsening and for emergence of suicidal thoughts and behaviors.
              </p>
            </div>
            <p className="sub-head">CONTRAINDICATIONS</p>
            <p>
              <b>Serotonin Syndrome and MAOIs:</b> Do not use MAOIs intended to
              treat psychiatric disorders with DRIZALMA SPRINKLE or within 5 days of stopping treatment with
              DRIZALMA SPRINKLE. Do not use DRIZALMA SPRINKLE
              within 14 days of stopping an MAOI intended to
              treat psychiatric disorders. In addition, do not start DRIZALMA SPRINKLE in a patient who is being treated with
              linezolid or intravenous methylene blue.
            </p>
            <p className="sub-head">WARNINGS AND PRECAUTIONS</p>
            <ul>
              <li>
                <p>
                  <b>Hepatotoxicity: </b>
                  Hepatic failure, sometimes fatal, has been reported.
                  Discontinue DRIZALMA SPRINKLE in patients who develop jaundice or other
                  evidence of clinically significant liver dysfunction and should not be
                  resumed unless another cause can be established. Avoid use in patients
                  with substantial alcohol use or evidence of chronic liver disease.
                </p>
              </li>
              <li>
                <p>
                  <b>Orthostatic Hypotension, Falls, and Syncope:</b> Consider dosage reduction or discontinuation if these events occur
                </p>
              </li>
              <li>
                <p>
                  <b>Serotonin Syndrome: </b>
                  Increased risk when co-administered with other serotonergic agents (e.g.,
                  SSRIs, SNRIs, triptans), but also when taken alone. If it occurs, discontinue DRIZALMA
                  SPRINKLE and initiate supportive treatment
                </p>
              </li>
              <li>
                <p>
                  <b>Increased Risk of Bleeding:</b> May increase the risk of bleeding events. Concomitant use of antiplatelet drugs and anticoagulants may increase this risk
                </p>
              </li>
              <li>
                <p>
                  <b>Severe Skin Reactions:</b> Severe skin reactions, including erythema multiforme and Stevens-Johnson Syndrome, can occur with duloxetine. Discontinue at the first appearance of blisters, peeling rash, mucosal erosions, or any other sign of hypersensitivity if no other etiology can be identified
                </p>
              </li>
              <li>
                <p>
                  <b>Discontinuation Syndrome:</b> Adverse reactions after
                  discontinuation of serotonergic antidepressants, particularly
                  after abrupt discontinuation, include nausea, sweating,
                  dysphoric mood, irritability, agitation, dizziness, sensory
                  disturbances (e.g., paresthesias, such as electric shock
                  sensations), tremor, anxiety, confusion, headache, lethargy,
                  emotional lability, insomnia, hypomania, tinnitus, and
                  seizures. A gradual reduction in dosage rather than abrupt
                  cessation is recommended whenever possible
                </p>
              </li>
              <li>
                <p>
                  <b>Activation of Mania or Hypomania:</b> In patients with
                  bipolar disorder, treating a depressive episode with
                  duloxetine or another antidepressant may precipitate a
                  mixed/manic episode. Use cautiously in patients with bipolar
                  disorder. Prior to initiating treatment with DRIZALMA SPRINKLE, screen patients for any personal or family
                  history of bipolar disorder, mania, or hypomania
                </p>
              </li>
              <li>
                <p>
                  <b>Angle-Closure Glaucoma:</b> Has occurred in patients with untreated, anatomically narrow angles treated with antidepressants
                </p>
              </li>
              <li>
                <p>
                  <b>Seizures:</b> DRIZALMA SPRINKLE should be
                  prescribed with care in patients with a history of seizure
                  disorder
                </p>
              </li>
              <li>
                <p>
                  <b>Blood Pressure Increase:</b> Monitor blood pressure prior to
                  initiating treatment and periodically throughout treatment
                </p>
              </li>
              <li>
                <p>
                  <b>Hyponatremia:</b>  Can occur in association with SIADH; consider discontinuation
                </p>
              </li>
              <li>
                <p>
                  <b>Glucose Control in Diabetes:</b> In diabetic peripheral neuropathic pain patients, increases in fasting blood glucose and HbA<sub>1c</sub> have been observed
                </p>
              </li>
              <li>
                <p>
                  <b>Condition that Slow Gastric Emptying:</b> Use cautiously in these patients
                </p>
              </li>
              <li>
                <p>
                  <b>Sexual Dysfunction:</b> DRIZALMA SPRINKLE may cause symptoms of sexual dysfunction
                </p>
              </li>
            </ul>
            <p className="sub-head">ADVERSE REACTIONS</p>
            <p>
              The most common adverse reactions (≥5% and at least twice the incidence of placebo-treated patients) were:<br/>
              Adults: nausea, dry mouth, somnolence, constipation, decreased appetite, and hyperhidrosis.<br/> Pediatric Patients: nausea, diarrhea, decreased weight.
            </p>
            <p className="sub-head">DOSING AND ADMINISTRATION</p>
            <p>
              Take DRIZALMA SPRINKLE with or without food.
              DRIZALMA SPRINKLE may be swallowed whole (do not crush or chew capsule);
              opened and sprinkled over applesauce; or administered via nasogastric tube.
              Take a missed dose as soon as it is remembered. Do not take two doses of DRIZALMA SPRINKLE at the same time.
            </p>
            <p className="sub-head">DRUG INTERACTIONS</p>
            <ul>
              <li>
                <p>Avoid concomitant use with potent CYP1A2 inhibitors</p>
              </li>
              <li>
                <p>
                  Consider dose reduction with concomitant use with CYP2D6
                  substrates
                </p>
              </li>
            </ul>
            <p className="sub-head">USE IN SPECIFIC POPULATIONS</p>
            <ul>
              <li>
                <p>
                  <b>Hepatic Impairment:</b> Avoid use in patients with chronic liver disease or cirrhosis
                </p>
              </li>
              <li>
                <p>
                  <b>Renal Impairment:</b> Avoid use in patients with severe renal impairment, GFR, 30mL/minute.
                </p>
              </li>
              <li>
                <p>
                  <b>Pregnancy:</b> Third trimester use may increase risk for symptoms of poor adaptation (respiratory distress, temperature instability, feeding difficulty, hypotonia, tremor, irritability) in the neonate.
                </p>
              </li>
              <li>
                <p>
                  <b>Lactation:</b> Advise breastfeeding women using duloxetine to monitor infants for sedation, poor feeding and poor weight gain, and to seek medical care if they notice these signs.
                </p>
              </li>
            </ul>
            <p>
              <b>To report SUSPECTED ADVERSE REACTIONS, contact Sun Pharmaceutical Industries, Inc. at 1-800-818-4555 or FDA at 1-800-FDA-1088 or <a
              href="https://www.fda.gov/medwatch"
              target="_blank"
              rel="noopener noreferrer"
              >www.fda.gov/medwatch</a>.</b>
            </p>
            <p>
              <b>
              Please see{" "}
              <a
                href="https://drizalmasprinkle.com/full-prescribing-information/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <b>
                  <ins>Full Prescribing Information</ins>
                </b>
              </a>
              , including BOXED WARNING.
              </b>
            </p>
          </div>
        );
        break;
      case "riomet":
        warningisi = (
          <div className="riomet">
            <p>
              RIOMET ER<sup>&trade;</sup> (metformin hydrochloride for
              extended-release oral suspension) is indicated as an adjunct to
              diet and exercise to improve glycemic control in adults and
              pediatric patients 10 years of age and older with type 2 diabetes
              mellitus.
            </p>
            <div className="border-content">
              <b>
                <p align="center">WARNING: LACTIC ACIDOSIS</p>
                <p>
                  Postmarketing cases of metformin-associated lactic acidosis
                  have resulted in death, hypothermia, hypotension, and
                  resistant bradyarrhythmias. The onset of metformin-associated
                  lactic acidosis is often subtle, accompanied only by
                  nonspecific symptoms such as malaise, myalgias, respiratory
                  distress, somnolence, and abdominal pain. <br></br>
                  Metformin-associated lactic acidosis was characterized by
                  elevated blood lactate levels&nbsp;(>5&nbsp;mmol/L), anion gap
                  acidosis (without evidence of ketonuria or ketonemia), an
                  increased lactate/pyruvate ratio; and metformin plasma levels
                  generally&nbsp;>5&nbsp;mcg/mL.
                </p>
                <p>
                  Risk factors for metformin-associated lactic acidosis include
                  renal impairment, concomitant use of certain drugs (eg,
                  carbonic anhydrase inhibitors such as topiramate), age 65
                  years old or greater, having a radiological study with
                  contrast, surgery and other procedures, hypoxic states (eg,
                  acute congestive heart failure), excessive alcohol intake, and
                  hepatic impairment.
                </p>
                <p>
                  Steps to reduce the risk of and manage metformin-associated
                  lactic acidosis in these high-risk groups are provided.
                </p>
                <p>
                  If metformin-associated lactic acidosis is suspected,
                  immediately discontinue Riomet ER<sup>&trade;</sup> and
                  institute general supportive measures in a hospital setting.
                  Prompt hemodialysis is recommended.
                </p>
              </b>
            </div>
            <p className="minor-head">
              <b>CONTRAINDICATIONS</b>
            </p>
            <p>
              Riomet ER<sup>&trade;</sup> is contraindicated in patients with:
            </p>
            <ul>
              <li>
                Severe renal impairment (eGFR below 30&nbsp;mL/min/1.73 m2)
              </li>
              <li>Hypersensitivity to metformin</li>
              <li>
                Acute or chronic metabolic acidosis, including diabetic
                ketoacidosis, with or without coma
              </li>
            </ul>
            <p className="minor-head">
              <b>WARNINGS AND PRECAUTIONS</b>
            </p>
            <ul>
              <li>
                <b>Lactic Acidosis:</b> See boxed warning
              </li>
              <li>
                <b>Vitamin B12 Deficiency:</b> Metformin may lower vitamin B12
                levels. Individuals with inadequate vitamin B12 or calcium
                intake or absorption appear to be predisposed to developing
                subnormal vitamin B12 levels. Measure hematologic parameters on
                an annual basis and vitamin B12 at 2 to 3 year intervals in
                patients on Riomet ER<sup>&trade;</sup> and manage any
                abnormalities.
              </li>
              <li>
                <b>
                  Hypoglycemia With Concomitant Use With Insulin and Insulin
                  Secretagogues:
                </b>{" "}
                Insulin and insulin secretagogues (eg, sulfonylurea) are known
                to cause hypoglycemia. Riomet ER<sup>&trade;</sup> may increase
                the risk of hypoglycemia when combined with insulin and/or an
                insulin secretagogue. Therefore, a lower dose of insulin or
                insulin secretagogue may be required to minimize the risk of
                hypoglycemia when used in combination with Riomet ER
                <sup>&trade;</sup>.
              </li>
            </ul>
            <p className="minor-head">
              <b>ADVERSE REACTIONS</b>
            </p>
            <p class="mb-4">
              The most common adverse reactions (>5.0%) are diarrhea,
              nausea/vomiting, flatulence, asthenia, indigestion, abdominal
              discomfort, and headache.
            </p>
            <p className="minor-head">
              <b>DRUG INTERACTIONS</b>
            </p>
            <ul>
              <li>
                <b>Carbonic Anhydrase Inhibitors:</b> may increase the risk of
                lactic acidosis. Consider more frequent monitoring of these
                patients
              </li>
              <li>
                <b>Drugs That Reduce Metformin Clearance:</b> (such as
                ranolazine, vandetanib, dolutegravir, and cimetidine) may
                increase the accumulation of metformin. Consider the benefits
                and risks of concomitant use with Riomet ER<sup>&trade;</sup>
              </li>
              <li>
                <b>Alcohol and Medications Containing Alcohol:</b> Alcohol is
                known to increase the effect of metformin on lactate metabolism.
                Warn patients against excessive alcohol intake while receiving
                Riomet ER<sup>&trade;</sup>
              </li>
              <li>
                <b>Drugs Affecting Glycemic Control:</b> Certain drugs (eg,
                thiazides and other diuretics) tend to produce hyperglycemia and
                may lead to loss of glycemic control. When such drugs are
                administered concomitantly with Riomet ER<sup>&trade;</sup>,
                observe the patient closely for loss of blood glucose control.
                When such drugs are withdrawn from a patient receiving Riomet ER
                <sup>&trade;</sup>, observe the patient closely for hypoglycemia
              </li>
            </ul>
            <p className="minor-head">
              <b>USE IN SPECIFIC POPULATIONS</b>
            </p>
            <ul>
              <li>
                <b>Pregnancy:</b> Poorly controlled diabetes mellitus in
                pregnancy increases the maternal risk for diabetic ketoacidosis,
                preeclampsia, spontaneous abortions, preterm delivery,
                stillbirth, and delivery complications. Poorly controlled
                diabetes mellitus increases the fetal risk for major birth
                defects, stillbirth, and macrosomia-related morbidity
              </li>
              <li>
                <b>Females and Males of Reproductive Potential:</b> Advise
                premenopausal females of the potential for an unintended
                pregnancy. Riomet ER<sup>&trade;</sup> can cause ovulation,
                increasing the chance of getting pregnant
              </li>
              <li>
                <b>Geriatric Use:</b> Dose selection for an elderly patient
                should be cautious, usually starting at the low end of the
                dosing range to reflect the greater frequency of decreased
                hepatic, renal, or cardiac function and of concomitant disease
                or other drug therapy, and the higher risk of lactic acidosis.
                Assess renal function more frequently in elderly patients
              </li>
              <li>
                <b>Hepatic Impairment:</b> Use of metformin in patients with
                hepatic impairment has been associated with some cases of lactic
                acidosis. Riomet ER<sup>&trade;</sup> is not recommended in
                patients with hepatic impairment
              </li>
            </ul>
            <p>
              Please see full{" "}
              <a
                className="linkNormal"
                href="https://www.riometer.com/Riomet_ER_Final_PI.pdf"
                target="_new"
              >
                Prescribing Information
              </a>
              , including <b>BOXED WARNING.</b>
            </p>
            <p class="reference">
              To report SUSPECTED ADVERSE REACTIONS, contact Sun Pharmaceutical
              Industries, Inc. at 1-800-818-4555 or FDA at<br></br>{" "}
              1-800-FDA-1088 or{" "}
              <a
                class="linkGold"
                href="http://www.fda.gov/medwatch"
                target="_new"
              >
                www.fda.gov/medwatch
              </a>
              .
            </p>
          </div>
        );
        break;
      case "odomzo":
        warningisi = (
          <div className="odomzo">
            <div className="border-content">
              <p className="tl-ct">WARNING: EMBRYO-FETAL TOXICITY</p>
              <p>
                {" "}
                • &nbsp;ODOMZO can cause embryo-fetal death or severe birth
                defects when administered to a pregnant woman. ODOMZO is
                embryotoxic, fetotoxic, and teratogenic in animals
              </p>
              <p>
                • &nbsp;Verify the pregnancy status of females of reproductive
                potential prior to initiating therapy. Advise females of
                reproductive potential to use effective contraception during
                treatment with ODOMZO and for at least 20 months after the last
                dose
              </p>
              <p>
                • &nbsp;Advise males of the potential risk of exposure through
                semen and to use condoms with a pregnant partner or a female
                partner of reproductive potential during treatment with ODOMZO
                and for at least 8 months after the last dose
              </p>
            </div>
            <p>
              <b>Embryo-fetal Toxicity:</b> ODOMZO can cause embryo-fetal death
              or severe birth defects when administered to a pregnant woman.
              Females of Reproductive Potential: Verify pregnancy status prior
              to initiating ODOMZO. Advise females to use effective
              contraception and not to breastfeed, due to the potential for
              serious adverse reactions in breastfed infants, during treatment
              and for at least 20 months after the last dose. Report pregnancies
              to Sun Pharmaceutical Industries, Inc. at 1-800-406-7984.
            </p>
            <p>
              Males: Advise males to use condoms, even after a vasectomy, and to
              not donate semen during treatment and for at least 8 months after
              the last dose to avoid potential drug exposure in pregnant females
              or females of reproductive potential.
            </p>
            <p>
              Blood Donation: Advise patients not to donate blood or blood
              products while taking ODOMZO, and for at least 20 months after the
              last dose because their blood or blood products might be given to
              a female of reproductive potential.
            </p>
            <p>
              <b>Musculoskeletal Adverse Reactions:</b> Musculoskeletal adverse
              reactions, which may be accompanied by serum creatine kinase (CK)
              elevations, occur with ODOMZO and other drugs which inhibit the
              hedgehog (Hh) pathway. Obtain serum CK and creatinine levels prior
              to initiating therapy, periodically during treatment, and as
              clinically indicated. Temporary dose interruption or
              discontinuation of ODOMZO may be required based on the severity of
              musculoskeletal adverse reactions.
            </p>
            <p>
              <b>Premature Fusion of the Epiphyses:</b> ODOMZO is not indicated
              for use in pediatric patients. Premature fusion of the epiphyses
              has been reported in pediatric patients exposed to ODOMZO and
              other Hh pathway inhibitors. In some cases, fusion progressed
              after discontinuation.
            </p>
            <p>
              <b>Drug Interactions:</b> Avoid concomitant administration of
              ODOMZO with strong and moderate CYP3A inhibitors. If a moderate
              CYP3A inhibitor must be used, administer for less than 14 days and
              monitor closely for adverse reactions, particularly
              musculoskeletal. Avoid concomitant administration of ODOMZO with
              strong and moderate CYP3A inducers.
            </p>
            <p>
              <b>Geriatric Use:</b> There was a higher incidence of serious
              adverse events, Grade 3 and 4, and events requiring dose
              interruption or discontinuation in patients ≥65 years compared
              with younger patients; this was not attributable to an increase in
              any specific adverse event.
            </p>
            <p>
              <b>Most Common Adverse Reactions:</b> The most common adverse
              reactions occurring in ≥10% of patients were muscle spasms (54%),
              alopecia (53%), dysgeusia (46%), fatigue (41%), nausea (39%),
              musculoskeletal pain (32%), diarrhea (32%), decreased weight
              (30%), decreased appetite (23%), myalgia (19%), abdominal pain
              (18%), headache (15%), pain (14%), vomiting (11%), and pruritus
              (10%).
            </p>
            <p>
              <a
                href="https://www.odomzo.com/themes/custom/odomzo/global/pdfs/pi.pdf"
                target="_new"
              >
                <ins>
                  <b>Click here</b>
                </ins>
              </a>{" "}
              to see the full Prescribing Information for ODOMZO, including{" "}
              <strong>Boxed WARNING.</strong>
            </p>
          </div>
        );
        break;

      case "resources":
        warningisi = null;
        break;
      default:
        return null;
    }
    return warningisi;
  };

  const scrollFcuntion = () => {
    // Somewhere else, even another file
    scroller.scrollTo("isi-top-element", {
      duration: 700,
      smooth: true,
      offset: -scrollD / 1.2, // Scrolls to element + 50 pixels down the page
    });
  };

  const IsiBottomWrapper = ({ isDesktop }) => (
    <div className="isi-bottom-wrapper">
      <div className="container">
        <div className="row">
          <div className="col">
            {isDesktop && <IsiHead />}
            <Waypoint
              onEnter={handleISIEnter}
              onLeave={handleISILeave}
              scrollableAncestor={window}
            >
              <div>
                {!isDesktop && <IsiHead />}

                <IsiWarnings />

                {isDesktop && isDesktopLw ? (
                  <a className="go-to-icon" onClick={scrollToTop.bind(this)}>
                    <p className="icon-isi">-</p>
                  </a>
                ) : (
                  <Link
                    className="go-to-icon"
                    duration={0}
                    offset={handlePosition()}
                    smooth={true}
                    to="isi-top-element"
                  >
                    <p className="icon-isi">-</p>
                  </Link>
                )}
              </div>
            </Waypoint>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="isi-main-wrapper">
      <div
        id="isi-sticky"
        className={classNames(
          { hide: hideSticky },
          "isi-sticky",
          `${showWarnings && "show-full"}`
        )}
      >
        <Container>
          <Row className="no-gutters">
            <Col xs={12}>
              <div className="sticky-wrapper">
                {isDesktop ? (
                  <>
                    <IsiHead />
                    {showWarnings && <IsiWarnings />}
                    <div
                      onClick={cganetotop.bind(this, !showWarnings)}
                      className="go-to-icon"
                    >
                      <p className="icon-isi">{showWarnings ? "-" : "+"}</p>
                    </div>
                  </>
                ) : (
                  <>
                    <IsiHeadMobile />
                    {showWarnings && <IsiWarnings />}
                    <div
                      onClick={cganetotop.bind(this, !showWarnings)}
                      className="go-to-icon"
                    >
                      <p className="icon-isi">{showWarnings ? "-" : "+"}</p>
                    </div>
                  </>
                )}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Element name="isi-bottom-element">
        <IsiBottomWrapper isDesktop={isDesktop} />
      </Element>
    </section>
  );
}

const mapState = (state) => {
  return {
    isSticky: state.menu.isSticky,
  };
};

export default connect(mapState, null)(ISI);
