export const levulanData = {
  buttons :[
    {
      icon: 'levulan/med-kit.png',
      text: 'Medical Benefit Support',
      slug: 'medical-supp'
    },
    {
      icon: 'levulan/pharma.png',
      text: 'Pharmacy Benefit Support',
      slug: 'pharmacy-supp'
    }
  ],

  buttons2 :[
    {
      icon: 'levulan/heart.png',
      text: 'Coverage Help',
      slug: 'heart-supp'
    },
    {
      icon: 'levulan/download.png',
      text: 'Downloadable Resources',
      slug: 'download-supp'
    },
    {
      icon: 'levulan/sun-hand.png',
      text: 'Support for Your Practice',
      slug: 'sun-supp'
    }
  ],


  buttons3 :[
    {
      icon: 'levulan/block.png',
      text: 'Purchasing',
      slug: 'bb-supp'
    },
    {
      icon: 'levulan/co-pay.png',
      text: 'Billing & Coding',
      slug: 'cc-supp'
    }
  ],


  cardOne: {
    title: 'Medical benefit support through Pinnacle Health Group',
    image: 'levulan/med-kit.png',
    text1: 'Receive assistance with:',
    ul : [
      'Medical benefits investigations',
      'Prior authorizations',
      'Claim denials and appeals',
      'Payer policy updates research'
    ],
    text2: 'Payer research on the contracted rates for the top 5 payers',
    text3: 'Portal allows offices to upload notes and documents',
    box: {
      sub: 'Contact Pinnacle Health Group for medical benefit support at:',
      phone: 'Phone: <a href="tel:8663699290">866-369-9290</a>',
      fax: 'Fax: 877-499-2986 or<br class="show-mobile"/>215-369-9198'
    }
  },

  cardTwo:{
    title: 'Pharmacy benefit support through Foundation Care<sup>&trade;</sup> Specialty Pharmacy',
    image:'levulan/pharma.png',
    text1: 'Receive assistance with:',
    ul:[
      'Verifying pharmacy benefits',
      {
        text: 'Dispensing prescriptions',
        lis: [
          'Units will be shipped to your office          ',
          'Prescriptions will be labeled with patient-specific information',
          'Office will store prescription until patient’s scheduled appointment'
        ]
      },
      'Billing insurance',
      'Collecting patient copayments'
    ],
    box: {
      sub: 'Contact Foundation Care Specialty Pharmacy for pharmacy benefit support at:',
      phone: 'Phone: <a href="tel:87729111220">877-291-1122</a>',
      fax: 'Fax: 877-291-1155',
      script: 'E-script ID: NPI 1205831963'
    }
  },

  cardThree: {
    title: 'Coverage help',
    image: 'levulan/heart.png',
    sub: 'Helpful tips',
    text1: 'Verify patient coverage by utilizing the following:',
    ul:[
      'Individual online payer portals',
      'Provider services hotline on patient’s ID card',
      'Pinnacle Health Group medical benefit investigation service: 866-369-9290',
      'Foundation Care Specialty Pharmacy benefits: 877-291-1122 or E-script ID: NPI 1205831963'
    ],
    text2: 'Review patient benefits for LEVULAN KERASTICK plus BLU-U and provider-specified photodynamic therapy (PDT) Current Procedural Terminology (CPT<sup>&reg;</sup>) code for:',
    ul2:[
      'Deductible',
      'Copay',
      'Coinsurance',
      {
        text: 'LEVULAN KERASTICK plus BLU-U coverage',
        lis: [
          'Check coverage for body site and number of sticks requested'
        ]
      }
    ],
    text3: 'Identify whether treatment will fall under medical and/or pharmacy benefit.',
    text4: 'Identify any potential policy restrictions such as stick limitations, step edits, or coverage limitations for the treatment of the face, scalp, and upper extremities.',
    sub2: 'Patient documentation',
    text5: 'Proper documentation is a vital part of the billing and reimbursement process. To help ensure a seamless experience, be sure to keep the following records:',
    ul3:[
      'Pretreatment information sheet (similar to presurgery sheet)',
      'Informed consent for treatment',
      'Photos',
      'Number, location, and grade of lesions',
      'Medical necessity for treatment',
      'Plan of care',
      'Appropriate International Classification of Disease, Tenth Revision (ICD-10) code',
      'Appropriate CPT code',
      'Qualified healthcare professional involvement',
      'Postcare instructions'
    ],
    sub3:'Verifying patient coverage',
    text6: 'Our partners at The Pinnacle Health Group and Foundation Care Specialty Pharmacy are available to assist with verifying patient coverage.'
  },

  tools: [
    {
      label: 'Order Form',
      link: '/data/resources/PM-US-LEV-0442_LEVULAN_Purchasing Order Form.pdf',
      isExternal: true,
      morePadd: true
    },
  ],

  cardFour: {
    title: 'PDT in the physician office: Exclusive LEVULAN<sup>&reg;</sup> KERASTICK<sup>&reg;</sup> live speaker dinner meetings',
    image: 'levulan/sun-hand.png',
    images: [
      'levulan/levulon-icon1.png',
      'levulan/levulon-icon2.png',
      'levulan/levulon-icon3.png',
      'levulan/levulon-icon4.png'
    ],
    text1: 'During this live, peer-to-peer speaker program, you’ll learn about:',
    ul:[
      'Setting up PDT in your practice',
      'Coverage',
      'Coding and billing',
      'Reimbursement',
      'Medical benefit support through The Pinnacle Health Group',
      'Additional practice considerations',
      'Sun Dermatology support',
    ],
    button:{
      label: 'Find a Speaker Program',
      url: 'http://sunaccessmeetings.com/',
      isExternal: true
    },
    text2: 'To request a speaker program in your area, please speak to your Field Reimbursement Manager.'
  },

  cardFive: {
    title: 'Purchasing',
    image: 'levulan/block.png',
    text1: 'To order LEVULAN KERASTICK, please follow these instructions:',
    numbers:[
      {
        text: 'Please download/save this form to your computer.',
        button: {
          label: 'Download Order Form',
          url: 'download-supp',
          isExternal: false
        }
      },
      'Open the form in Adobe Acrobat or your PDF reader application of choice.',
      'Fill out the form electronically and save it.<br/><b>Please note:</b> You must sign and date the form for the order to be processed.',
      'Email the completed form to <br class="show-mobile"/>cs-inbox@sunpharma.com.<br/>If you are paying via credit card, please fax your order to<br/>877-909-3872 or call 877-533-3872. <b>Please note:</b> We do not accept credit card information via email.'
    ],
    sub: 'Existing, non-purchase agreement accounts can now order LEVULAN KERASTICK online at OrderLevulan.com:',
    ul: [
      'For more information on ordering LEVULAN KERASTICK, please contact your Territory Manager',
      'For all other issues or troubleshooting help, please contact Customer Support at 877-533-3872'
    ],
    box: 'If you are a new customer and would like to place an order, or an existing account currently on a purchase agreement and would like to change a currently scheduled order, please call us at 877-533-3872, option #5, and then option #4.'
  },

  cardSix: {
    title: 'Billing & coding',
    image: 'levulan/co-pay.png',
    text1: 'We understand that the coverage, coding, and billing process can be complicated. Let us be your resource for any and all questions you may have about reimbursement for LEVULAN KERASTICK plus BLU-U.',
    semiCard : {
      jcode: 'J-CODE',
      code: 'J7308',
      text: 'This J-code is exclusive to LEVULAN KERASTICK and should be reported for each unit utilized.'
    },
    sub:'Important information to know about the HCPCS J-code',
    ul: [
      'It is against the law to bill another drug or variation of concentration under this code, including compounded formulas',
      'Reimbursement is dependent upon the payer’s payment policy and physician contracted rates',
      {
        text: 'Medicare physician office payment:',
        lis: [
          'Basis of payment is average sales price (ASP) plus 6%',
          'ASP is updated quarterly by the Centers for Medicare & Medicaid Services (CMS)'
        ]
      }
    ],
    jcode: 'CPT CODES',
    textN : 'There are multiple CPT codes associated with PDT treatment, 2 of which apply to LEVULAN KERASTICK. Use the codes that are best supported by the patient’s medical record.',
    table:[
      {
        title: '96567',
        text: '<b>PDT by external application of light</b> to destroy premalignant lesions of the skin and adjacent mucosa (eg, lip) <b>by activation of photosensitive drug(s), per day</b>'
      },
      {
        title: '96573',
        text: '<b>PDT by external application</b> of light to destroy premalignant lesions of the skin and adjacent mucosa with application and illumination/activation of photosensitizing drug(s) <b>provided by a physician or other qualified HCP, per day</b>'
      }
    ],
    ul2: [
      'The provider must report the most appropriate CPT code. Regardless of the CPT code reported, the first stage (application) must always be performed by a qualified HCP',
      'LEVULAN KERASTICK plus blue light illumination using the BLU-U<sup>®</sup> Blue Light Photodynamic Therapy Illuminator is indicated for the treatment of minimally to moderately thick actinic keratoses of the face or scalp, or actinic keratosis of the upper extremities. Please see Important Safety Information below',
      'Any one of these codes may be used to report a single PDT treatment per patient, per day, regardless of length or number of lesions treated',
      'There is no global period for any of these codes',
      'Follow-up evaluation and management visits are permissible',
      'Only 1 CPT code is billable per day',
      'It is up to the HCP’s discretion to use the appropriate code for the treatment performed',
      {
        text: 'These codes allow you to code to the highest specificity',
        lis: [
          'Use the codes that are best supported by the patient’s medical record'
        ]
      }
    ],
    text2: 'LEVULAN KERASTICK should only be used by a qualified HCP.',
    text3: 'LEVULAN KERASTICK is not intended for application by patients or unqualified staff.',
    text4: 'CPT<sup>®</sup> 5-digit numeric codes, descriptions, and numeric modifiers only are copyright 2019 American Medical Association (AMA). All rights reserved. ',
    ref: 'HCP=healthcare professional; HCPCS=Healthcare Common Procedure Coding System.'
  },
  ref: 'Sun Pharma provides this information for your convenience only. It does not constitute legal advice or a recommendation regarding clinical practice. Information provided is gathered from third-party sources and is subject to change without notice due to frequently changing laws, rules and regulations. The provider has the responsibility to determine medical necessity and to submit appropriate codes and charges for care provided. Sun Pharma makes no guarantee that the use of this information will prevent differences of opinion or disputes with Medicare or other payers as to the correct form of billing or the amount that will be paid to providers of service. Please contact your Medicare contractor, other payers, reimbursement specialists and/or legal counsel for interpretation of coding, coverage and payment policies. This information provides assistance for FDA approved or cleared indications. Where reimbursement is sought for use of a product that may be inconsistent with, or not expressly specified in, the FDA cleared or approved labeling (e.g., instructions for use, operator’s manual or package insert), consult with your billing advisors or payers on handling such billing issues. Some payers may have policies that make it inappropriate to submit claims for such items or related service.'
}













































