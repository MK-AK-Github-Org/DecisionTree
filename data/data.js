const data = {
  inclusion: [
    {
      criterion_id: "A",
      criterion_description:
        "Continuation requests for a not-approvable medication shall be exempt from this NCH policy provided:",
      subcriterion_logical_operator: "and",
      subcriteria: [
        {
          criterion_id: "A.1",
          criterion_description: "The requested medication was used within the last year",
          subcriteria: [],
        },
        {
          criterion_id: "A.2",
          criterion_description:
            "The member has not experienced disease progression and/or no intolerance to the requested medication",
          subcriteria: [],
        },
        {
          criterion_id: "A.3",
          criterion_description:
            "Additional medication(s) are not being added to the continuation request",
          subcriteria: [],
        },
      ],
    },
    {
      criterion_id: "B",
      criterion_description: "Brain Necrosis",
      subcriterion_logical_operator: "or",
      subcriteria: [
        {
          criterion_id: "B.1",
          criterion_description:
            "Bevacizumab/bevacizumab biosimilar may be used as monotherapy for members with brain necrosis or edema due to cranial irradiation",
          subcriteria: [],
        },
      ],
    },
    {
      criterion_id: "C",
      criterion_description: "Cervical Cancer",
      subcriterion_logical_operator: "or",
      subcriteria: [
        {
          criterion_id: "C.1",
          criterion_description:
            "For members with metastatic/recurrent/unresectable cervical cancer with tumor PD-L1 staining showing a CPS of less than 1%, bevacizumab/bevacizumab biosimilar may be used as first line/initial therapy in any one of the following regimens:",
          subcriterion_logical_operator: "or",
          subcriteria: [
            {
              criterion_id: "C.1.a",
              criterion_description: "In combination with cisplatin/carboplatin + paclitaxel",
              subcriteria: [],
            },
            {
              criterion_id: "C.1.b",
              criterion_description: "In combination with topotecan + paclitaxel",
              subcriteria: [],
            },
          ],
        },
      ],
    },
    {
      criterion_id: "D",
      criterion_description: "Colorectal Cancer",
      subcriterion_logical_operator: "or",
      subcriteria: [
        {
          criterion_id: "D.1",
          criterion_description:
            "The member has unresectable advanced or metastatic colorectal cancer and bevacizumab/bevacizumab biosimilar is being used as ONE of the following:",
          subcriterion_logical_operator: "or",
          subcriteria: [
            {
              criterion_id: "D.1.a",
              criterion_description:
                "As initial therapy in combination with capecitabine or with FOLFOX, FOLFIRI, FOLFIRINOX (fluorouracil, leucovorin, irinotecan, and oxaliplatin), 5-FU/LV (fluorouracil and leucovorin), or CapeOX (capecitabine and oxaliplatin)",
              subcriteria: [],
            },
            {
              criterion_id: "D.1.b",
              criterion_description:
                "As subsequent line of therapy given in combination with FOLFOX, FOLFIRI, XELIRI, and XELOX/CapeOX",
              subcriteria: [],
            },
            {
              criterion_id: "D.1.c",
              criterion_description:
                "Bevacizumab/bevacizumab biosimilar may be used for up to 2 lines of therapy in the metastatic setting or up to 3 lines of therapy for bevacizumab/bevacizumab biosimilar + Lonsurf (trifluridine and tipiracil)",
              subcriteria: [],
            },
          ],
        },
      ],
    },
    {
      criterion_id: "E",
      criterion_description: "Glioblastoma",
      subcriterion_logical_operator: "or",
      subcriteria: [
        {
          criterion_id: "E.1",
          criterion_description:
            "The member has glioblastoma, anaplastic astrocytoma, or high-grade glioma and bevacizumab/bevacizumab biosimilar is being used as a single agent",
          subcriteria: [],
        },
        {
          criterion_id: "E.2",
          criterion_description:
            "Bevacizumab/bevacizumab biosimilar may be used in combination with irinotecan, carboplatin, carmustine, lomustine, or temozolomide for recurrent glioblastoma, anaplastic astrocytoma, or high-grade glioma",
          subcriteria: [],
        },
      ],
    },
    {
      criterion_id: "F",
      criterion_description: "Hepatocellular Carcinoma",
      subcriteria: [
        {
          criterion_id: "F.1",
          criterion_description:
            "The member has metastatic/inoperable/advanced hepatocellular carcinoma (Child-Pugh Class A or B) and bevacizumab/bevacizumab biosimilar will be used in combination with Tecentriq (atezolizumab) for initial therapy",
          subcriteria: [],
        },
      ],
    },
    {
      criterion_id: "H",
      criterion_description: "Ovarian Cancer",
      subcriterion_logical_operator: "or",
      subcriteria: [
        {
          criterion_id: "H.1",
          criterion_description:
            "The member has recurrent or metastatic ovarian cancer and bevacizumab/bevacizumab biosimilar may be used in any of the following clinical settings:",
          subcriterion_logical_operator: "or",
          subcriteria: [
            {
              criterion_id: "H.1.a",
              criterion_description:
                "For initial/first line therapy of stage II- IV, with chemotherapy",
              subcriteria: [],
            },
            {
              criterion_id: "H.1.b",
              criterion_description:
                "For maintenance therapy after complete/partial response to primary chemotherapy + bevacizumab/bevacizumab biosimilar, for stage II-IV disease",
              subcriterion_logical_operator: "or",
              subcriteria: [
                {
                  criterion_id: "H.1.b.i",
                  criterion_description:
                    "As monotherapy for BRCA 1 or 2 Wild-Type or Unknown, HRD negative (Homologous Recombination Deficiency negative) or HRD unknown",
                  subcriteria: [],
                },
                {
                  criterion_id: "H.1.b.ii",
                  criterion_description:
                    "In combination with Lynparza (olaparib) for BRCA 1 or 2 mutation (germline or somatic) or HRD positive",
                  subcriteria: [],
                },
              ],
            },
          ],
        },
        {
          criterion_id: "H.2",
          criterion_description:
            "For therapy of relapsed/recurrent ovarian cancer, bevacizumab/bevacizumab biosimilar may be used as monotherapy or with chemotherapy",
          subcriteria: [],
        },
      ],
    },
  ],
  exclusion: [
    {
      criterion_id: "G",
      criterion_description: "Non-Small Cell Lung Cancer (NSCLC)",
      subcriterion_logical_operator: "or",
      subcriteria: [
        {
          criterion_id: "G.1",
          criterion_description:
            "Bevacizumab/bevacizumab biosimilar based regimens are not supported by NCH Policy",
          subcriterion_logical_operator: "and",
          subcriteria: [
            {
              criterion_id: "G.1.a",
              criterion_description:
                "Lack of data supporting the use of such regimens in 2nd line or later lines of therapy",
              subcriteria: [],
            },
            {
              criterion_id: "G.1.b",
              criterion_description: "Increased risk of serious adverse effects",
              subcriteria: [],
            },
            {
              criterion_id: "G.1.c",
              criterion_description:
                "Marginal PFS and OS benefit in the first line setting as shown in randomized trials",
              subcriteria: [],
            },
            {
              criterion_id: "G.1.d",
              criterion_description: "Alternative agents/regimens recommended by NCH",
              subcriteria: [],
            },
          ],
        },
        {
          criterion_id: "G.2",
          criterion_description:
            "[Bevacizumab/bevacizumab biosimilar + Tarceva (erlotinib)] is not supported by NCH policy for the treatment of metastatic Non-Small Cell Lung Cancer",
          subcriteria: [],
        },
      ],
    },
    {
      criterion_id: "I",
      criterion_description:
        "Bevacizumab/bevacizumab biosimilars are not supported by NCH Policy for use in metastatic renal cell carcinoma",
      subcriteria: [],
    },
    {
      criterion_id: "III.A",
      criterion_description:
        "Bevacizumab/bevacizumab biosimilar is being used on or after disease progression on a bevacizumab containing regimen; except in colorectal cancer, bevacizumab may be used up to 2 lines of therapy in the metastatic setting or up to 3 lines of therapy for bevacizumab /bevacizumab biosimilar + Lonsurf (trifluridine and tipiracil)",
      subcriteria: [],
    },
    {
      criterion_id: "III.B",
      criterion_description: "Members with Child-Pugh Class B or C hepatocellular carcinoma",
      subcriteria: [],
    },
    {
      criterion_id: "III.C",
      criterion_description:
        "Dosing exceeds single dose limit of bevacizumab/bevacizumab biosimilar 15 mg/kg. Per NCH Policy, the maximum dose of bevacizumab when used in combination with irinotecan/FOLFIRI/FOLOX/IROX regimen is 5 mg/kg.",
      subcriteria: [],
    },
    {
      criterion_id: "III.D",
      criterion_description:
        "For Brain Necrosis: Treatment exceeds the maximum duration limit of 4 doses (dose range from 5 mg/kg every 2 weeks to 7.5 mg/kg every 3 weeks)",
      subcriteria: [],
    },
    {
      criterion_id: "III.E",
      criterion_description:
        "Investigational use of bevacizumab products with an off-label indication that is not sufficient in evidence or is not generally accepted by the medical community",
      subcriterion_logical_operator: "or",
      subcriteria: [
        {
          criterion_id: "III.E.1",
          criterion_description:
            "Whether the clinical characteristics of the patient and the cancer are adequately represented in the published evidence",
          subcriteria: [],
        },
        {
          criterion_id: "III.E.2",
          criterion_description:
            "Whether the administered chemotherapy/biologic therapy/immune therapy/targeted therapy/other oncologic therapy regimen is adequately represented in the published evidence",
          subcriteria: [],
        },
        {
          criterion_id: "III.E.3",
          criterion_description:
            "Whether the reported study outcomes represent clinically meaningful outcomes experienced by patients",
          subcriteria: [],
        },
        {
          criterion_id: "III.E.4",
          criterion_description:
            "Whether the experimental design, considering the drugs and conditions under investigation, is appropriate to address the investigative question",
          subcriteria: [],
        },
        {
          criterion_id: "III.E.5",
          criterion_description:
            "That non-randomized clinical trials with a significant number of subjects may be a basis for supportive clinical evidence for determining accepted uses of drugs",
          subcriteria: [],
        },
        {
          criterion_id: "III.E.6",
          criterion_description:
            "That case reports are generally considered uncontrolled and anecdotal information and do not provide adequate supportive clinical evidence for determining accepted uses of drugs",
          subcriteria: [],
        },
        {
          criterion_id: "III.E.7",
          criterion_description:
            "That abstracts (including meeting abstracts) without the full article from the approved peer-reviewed journals lack supporting clinical evidence for determining accepted uses of drugs",
          subcriteria: [],
        },
      ],
    },
  ],
};

export default data;
