export const odomzo = {
  buttons: [
    {
      icon: "odomzo/pa.png",
      text: "Patient Assistance Program (PAP)",
      slug: "support",
      size: "big",
    },
    {
      icon: "odomzo/SPP.png",
      text: "Copay Card Program",
      slug: "retail",
      size: "big",
    },
    {
      icon: "odomzo/hand.png",
      text:
        "Prior Authorization Assistance&nbsp;Powered by CoverMyMeds<sup>&reg;</sup>",
      slug: "compare",
      size: "bigger",
    },
  ],
  cardOne: {
    title: "Patient Assistance Program (PAP)",
    image: "odomzo/pa.png",
    text1:
      'Patients who are underinsured or uninsured may be eligible to receive free medication.<sup>*</sup> To get your patients started with the Patient Assistance Program, simply <b class="just-green">complete the ODOMZO SUPPORT<sup>&trade;</sup> Patient Assistance Program Application, which is available in the Downloadable Resources section below.</b>',
    button1: {
      text: "Learn More",
      isExternal: true,
      url:
        "https://www.odomzo.com/hcp/financial-assistance?gclid=EAIaIQobChMIn7qhtNPm6AIVAZ6fCh3PRQmXEAAYASAAEgKzuvD_BwE",
    },
    reference:
      "<sup>*</sup>Income documentation is required. Subject to terms and conditions. Available to US, Guam, Virgin Islands, or Puerto Rico residents only.",
  },

  cardTwo: {
    title: "Copay Card Program<sup>†</sup>",
    image: "odomzo/SPP.png",
    text: "<b>For commercially insured patients</b>",
    image2: "odomzo/copay-card.png",
    text2:
      '<b>Patients can activate this card by calling 877-ODOMZO-1 <br>(877-636-6961) or visiting<a href="https://www.activatethecard.com/7436/" target="_blank"><span class="green fs-14 pd-30"> activatethecard.com/7436</span></a></b>',
    ul: [
      "The ODOMZO Co-pay Program helps eligible commercially insured patients 18 years or older access their ODOMZO® prescriptions<sup>‡</sup>",
      'Patients can check eligibility and activate the co-pay card by visiting <a href="https://www.activatethecard.com/7436/" target="_blank"><span class="green fs-14 pd-30"> www.activatethecard.com/7436</span></a>',
    ],
    reference:
      "<sup>‡</sup>Eligibility criteria apply.  See below for full terms and conditions.",
    button: {
      label: "Learn More",
      url: "https://www.activatethecard.com/7436/",
      isExternal: true,
    },
  },

  cardThree: {
    title:
      "Prior Authorization Assistance</br>Powered by CoverMyMeds<sup>&reg;</sup>",
    image: "odomzo/hand.png",
    text1:
      'Sun Pharma and CoverMyMeds are working together to expedite the prior authorization process to help your patients receive their ODOMZO<sup>&reg;</sup> therapy <br class="d-none d-md-block d-lg-block"/>as prescribed.</br><b class="just-green">For more information, contact CoverMyMeds at 1-866-452-5017.</b>',
    button: {
      label: "Learn More",
      url: "https://www.covermymeds.com/main/",
      isExternal: true,
    },
  },
  entireReference:
    "<sup>†</sup>To participate in the ODOMZO<sup>&reg;</sup> (sonidegib) Co-Pay Program (“Program”), you must present this card, along with a valid prescription for ODOMZO<sup>&reg;</sup>, to your pharmacist. Patients with commercial health insurance who qualify to participate can pay as little as $10 per month, with a maximum annual benefit of $15,000 per calendar year. Enrollment is subject to the Eligibility Rules and Terms and Conditions, stated below. If you have any questions regarding Eligibility, the Terms and Conditions, or to discontinue participation, please call 1-877-ODOMZO-1 (1-877-636-6961) (8:00 AM-8:00 PM EST, Monday-Friday).",
  eligibilityRules: {
    title: "<b><ins>Eligibility Rules</ins></b>",
    ul: [
      "To participate in this Program, you must have commercial health insurance and be a resident of the United States, Puerto Rico, Guam, or the Virgin Islands.",
      "The following patients are ineligible for this Program.",
    ],
    ulHyphen: [
      "Patients covered under Medicaid (including Medicaid patients enrolled in a Medicaid Managed Care Plan or a qualified health plan purchased through a health insurance exchange marketplace established by a state government or the federal government).",
      "Patients covered by Medicare, a Medicare Part D or Medicare Advantage plan (regardless of whether a specific prescription is covered).",
      "Patients who have coverage that imposes no co-pay or co-insurance charge (i.e., insurance covering the full cost of Yonsa<sup>&reg;</sup>).",
      "Patients covered by TRICARE, CHAMPUS, Puerto Rico Government Health Insurance Plan or any other state or federal medical or pharmaceutical benefit program or pharmaceutical assistance program.",
      "Patients with no insurance.",
    ],
  },
  termsConditions: {
    title: "<b><ins>Terms and Conditions</ins></b>",
    ul: [
      "You agree to not to seek any reimbursement for all or any part of the co-pay assistance received through the Program. By using this card, you are certifying that you understand the Eligibility Rules and Terms and Conditions, that you have responded truthfully to questions when activating the card, and that you will disclose and report your receipt of any Program benefits to your insurer, health plan, or any third party that pays or reimburses you for the cost of medications, if required.",
      "This offer may be rescinded, revoked or cancelled at any time without further notice and the rules may be amended at any time without further notice.",
    ],
  },
  disclosures: {
    title: "<b><ins>Disclosures</ins></b>",
    ul: [
      "This Program is not insurance.",
      "The Program is void where prohibited by law, taxed, or restricted. Any benefit provided is not transferable and cannot be combined with any other program, free trial, discount, prescription savings card, or other offer. No purchase other than for an ODOMZO<sup>&reg;</sup> prescription, is required to participate.",
      "Personal data that you provide to the Program may be collected, analyzed, and shared with the program sponsor for market research and other lawful purposes but only in aggregated and de-identified form.",
    ],
  },
  tools: [
    {
      label: "ODOMZO SUPPORT<sup>&trade;</sup> Resource Guide",
      isExternal: true,
      morePadd: true,
      link: `/data/resources/PM-US-ODZ-0406_Support_Services_Guide_DIGITAL[7].pdf`,
      download: true,
    },
    {
      label: "ODOMZO SUPPORT<sup>&trade;</sup> Patient Assistance Program Application",
      link: `/data/resources/PM-US-ODZ-0303 Odomzo Support Patient Assistance Program Application.pdf`,
      download: true,
      isExternal: true,
      morePadd: true,
    },
  ],
};
