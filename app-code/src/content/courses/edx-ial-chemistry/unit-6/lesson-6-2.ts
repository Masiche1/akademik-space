import type { Lesson } from "../../../types.ts";

export const lesson62: Lesson = {
  "id": "edialchem-u6-lesson-6-2",
  "code": "6-2",
  "title": "Apparatus, Measurement and Techniques",
  "goal": "I CAN select apparatus, estimate uncertainty and describe core practical techniques.",
  "standards": [
    "WCH16 Practical Skills in Chemistry II"
  ],
  "vocabulary": [
    {
      "term": "Independent variable",
      "definition": "The variable deliberately changed by the investigator."
    },
    {
      "term": "Dependent variable",
      "definition": "The variable measured or observed as a result."
    },
    {
      "term": "Control variable",
      "definition": "A variable kept constant so the test is fair."
    },
    {
      "term": "Reliability",
      "definition": "Consistency of repeated measurements or results."
    },
    {
      "term": "Validity",
      "definition": "Whether the method measures what it claims to measure."
    },
    {
      "term": "Anomalous result",
      "definition": "A result that does not fit the pattern of the others."
    },
    {
      "term": "Uncertainty",
      "definition": "Estimated range of doubt in a measurement."
    },
    {
      "term": "Chemistry core practical",
      "definition": "A specified practical technique required by the Pearson Edexcel Chemistry specification."
    }
  ],
  "concepts": [
    {
      "id": "edialchem-u6-l2c1-apparatus",
      "title": "Apparatus and measurement",
      "skill": "Choose instruments and estimate uncertainty.",
      "lesson": {
        "sections": [
          {
            "heading": "Variables and fair testing",
            "body": "Investigations of burettes, pipettes, thermometers, gas syringes and balances must identify the independent variable (what is changed), dependent variable (what is measured) and control variables (what is kept constant). At IAL you should also justify why each control matters and predict how changing it would affect the result."
          },
          {
            "heading": "Reliability and validity",
            "body": "Reliability is improved by repeats, averaging and checking calibration. Validity means the method actually measures the intended quantity — for example, using the correct wavelength filter in burettes, pipettes, thermometers, gas syringes and balances. Discuss systematic error, random error and how each affects validity and reliability."
          },
          {
            "heading": "Anomalies and improvements",
            "body": "Anomalous results should be identified, not deleted automatically. Check apparatus, technique and calculations before deciding whether to exclude them. Suggest quantitative improvements such as narrower uncertainty intervals, more repeats or a refined method."
          }
        ],
        "keyFormulas": [
          {
            "name": "Key principle",
            "statement": "burettes, pipettes, thermometers, gas syringes and balances: identify variables, control conditions, repeat measurements and evaluate uncertainty."
          }
        ],
        "workedExample": {
          "problem": "Describe how you would make a measurement in burettes, pipettes, thermometers, gas syringes and balances reliable.",
          "solution": "Identify the variables, keep controls constant, repeat readings, calculate uncertainty and suggest improvements."
        }
      },
      "questions": [
        {
          "id": "edialchem-u6-l2c1-q1",
          "difficulty": "foundation",
          "totalMarks": 1,
          "stem": "What is the resolution of a metre rule graduated in millimetres?",
          "response": {
            "type": "mcq",
            "choices": [
              {
                "id": "a",
                "text": "0.1 mm"
              },
              {
                "id": "b",
                "text": "1 mm"
              },
              {
                "id": "c",
                "text": "1 cm"
              },
              {
                "id": "d",
                "text": "1 m"
              }
            ],
            "borrectChoiceId": "c"
          },
          "markscheme": {
            "principles": [
              {
                "kind": "definition",
                "name": "Resolution",
                "statement": "Smallest readable division."
              }
            ],
            "steps": [
              {
                "reasoning": "A mm-graduated rule has 1 mm resolution.",
                "marks": 1,
                "markCode": "B"
              }
            ],
            "finalAnswer": "**(c)** A mm-graduated rule has 1 mm resolution.",
            "commonErrors": [
              "Confusing resolution with range."
            ]
          }
        },
        {
          "id": "edialchem-u6-l2c1-q2",
          "difficulty": "core",
          "totalMarks": 3,
          "stem": "Convert $2500$ mm to metres.",
          "response": {
            "type": "numeric",
            "parts": [
              {
                "label": "Answer",
                "answer": 2.5,
                "tolerance": 0.01,
                "unit": "m"
              }
            ]
          },
          "markscheme": {
            "principles": [
              {
                "kind": "definition",
                "name": "Unit conversion",
                "statement": "$1\\text{ mm}=0.001\\text{ m}$."
              }
            ],
            "steps": [
              {
                "reasoning": "$1\\text{ mm}=0.001\\text{ m}$.",
                "marks": 1,
                "markCode": "M"
              },
              {
                "reasoning": "$2500\\times0.001=2.5$.",
                "marks": 1,
                "markCode": "M"
              },
              {
                "reasoning": "$=2.5\\text{ m}$.",
                "marks": 1,
                "markCode": "A"
              }
            ],
            "finalAnswer": "2.5 m",
            "commonErrors": [
              "Dividing instead of multiplying."
            ]
          }
        },
        {
          "id": "edialchem-u6-l2c1-q3",
          "difficulty": "challenge",
          "totalMarks": 4,
          "stem": "Explain two sources of uncertainty when using burettes, pipettes, thermometers, gas syringes and balances apparatus and how to reduce each.",
          "response": {
            "type": "open"
          },
          "markscheme": {
            "principles": [
              {
                "kind": "principle",
                "name": "Uncertainty",
                "statement": "Resolution and technique affect uncertainty."
              }
            ],
            "steps": [
              {
                "reasoning": "Source 1: instrument resolution/zero error.",
                "marks": 1,
                "markCode": "B"
              },
              {
                "reasoning": "Reduce by calibration/zeroing.",
                "marks": 1,
                "markCode": "A"
              },
              {
                "reasoning": "Source 2: parallax or technique.",
                "marks": 1,
                "markCode": "B"
              },
              {
                "reasoning": "Reduce by consistent technique/repeats.",
                "marks": 1,
                "markCode": "A"
              }
            ],
            "finalAnswer": "Resolution/zero error and parallax/technique; reductions",
            "commonErrors": [
              "Listing uncertainties without reductions."
            ]
          }
        },
        {
          "id": "edialchem-u6-l2c1-q4",
          "difficulty": "challenge",
          "totalMarks": 10,
          "stem": "For burettes, pipettes, thermometers, gas syringes and balances, a student records a volume as $25.0 \\pm 0.5$ cm$^3$. (a) State the resolution of the apparatus used. (b) Calculate the percentage uncertainty. (c) Suggest two improvements to reduce the uncertainty.",
          "parts": [
            {
              "label": "a",
              "prompt": "Resolution",
              "marks": 2
            },
            {
              "label": "b",
              "prompt": "Percentage uncertainty",
              "marks": 4
            },
            {
              "label": "c",
              "prompt": "Improvements",
              "marks": 4
            }
          ],
          "response": {
            "type": "open"
          },
          "markscheme": {
            "principles": [
              {
                "kind": "formula",
                "name": "Uncertainty",
                "statement": "Resolution and $\\%\\text{unc}=(\\Delta x/x)\\times100$."
              }
            ],
            "steps": [
              {
                "reasoning": "Resolution $\\approx 1$ cm$^3$ (or consistent with $\\pm0.5$).",
                "marks": 1,
                "markCode": "B",
                "part": "a"
              },
              {
                "reasoning": "Uncertainty stated as half the smallest division.",
                "marks": 1,
                "markCode": "A",
                "part": "a"
              },
              {
                "reasoning": "Use $\\%\\text{unc}=(0.5/25.0)\\times100$.",
                "marks": 1,
                "markCode": "M",
                "part": "b"
              },
              {
                "reasoning": "$=0.02\\times100$.",
                "marks": 1,
                "markCode": "M",
                "part": "b"
              },
              {
                "reasoning": "$=2.0$%.",
                "marks": 1,
                "markCode": "M",
                "part": "b"
              },
              {
                "reasoning": "Percentage uncertainty = 2.0%.",
                "marks": 1,
                "markCode": "A",
                "part": "b"
              },
              {
                "reasoning": "Improvement 1: use a more precise instrument.",
                "marks": 1,
                "markCode": "B",
                "part": "c"
              },
              {
                "reasoning": "Improvement 2: repeat and average/consistent reading.",
                "marks": 1,
                "markCode": "A",
                "part": "c"
              },
              {
                "reasoning": "Both linked to reduced uncertainty.",
                "marks": 1,
                "markCode": "A",
                "part": "c"
              },
              {
                "reasoning": "Conclusion.",
                "marks": 1,
                "markCode": "R",
                "part": "c"
              }
            ],
            "finalAnswer": "Resolution stated; $2.0$%; two improvements",
            "commonErrors": [
              "Using full range instead of half for uncertainty."
            ]
          }
        }
      ]
    },
    {
      "id": "edialchem-u6-l2c2-techniques",
      "title": "Core practical techniques",
      "skill": "Apply the required practical method safely and accurately.",
      "lesson": {
        "sections": [
          {
            "heading": "Variables and fair testing",
            "body": "Investigations of carrying out a titration or measuring a rate of reaction must identify the independent variable (what is changed), dependent variable (what is measured) and control variables (what is kept constant). At IAL you should also justify why each control matters and predict how changing it would affect the result."
          },
          {
            "heading": "Reliability and validity",
            "body": "Reliability is improved by repeats, averaging and checking calibration. Validity means the method actually measures the intended quantity — for example, using the correct wavelength filter in carrying out a titration or measuring a rate of reaction. Discuss systematic error, random error and how each affects validity and reliability."
          },
          {
            "heading": "Anomalies and improvements",
            "body": "Anomalous results should be identified, not deleted automatically. Check apparatus, technique and calculations before deciding whether to exclude them. Suggest quantitative improvements such as narrower uncertainty intervals, more repeats or a refined method."
          }
        ],
        "keyFormulas": [
          {
            "name": "Key principle",
            "statement": "carrying out a titration or measuring a rate of reaction: identify variables, control conditions, repeat measurements and evaluate uncertainty."
          }
        ],
        "workedExample": {
          "problem": "Describe how you would make a measurement in carrying out a titration or measuring a rate of reaction reliable.",
          "solution": "Identify the variables, keep controls constant, repeat readings, calculate uncertainty and suggest improvements."
        }
      },
      "questions": [
        {
          "id": "edialchem-u6-l2c2-q1",
          "difficulty": "foundation",
          "totalMarks": 1,
          "stem": "Which technique is most appropriate for carrying out a titration or measuring a rate of reaction?",
          "response": {
            "type": "mcq",
            "choices": [
              {
                "id": "a",
                "text": "record the titre to the nearest 0.05 cm³"
              },
              {
                "id": "b",
                "text": "use a beaker for the titre"
              },
              {
                "id": "c",
                "text": "ignore the meniscus"
              },
              {
                "id": "d",
                "text": "add indicator after the endpoint"
              }
            ],
            "correctChoiceId": "a"
          },
          "markscheme": {
            "principles": [
              {
                "kind": "definition",
                "name": "Technique",
                "statement": "Correct method for carrying out a titration or measuring a rate of reaction."
              }
            ],
            "steps": [
              {
                "reasoning": "The appropriate technique is record the titre to the nearest 0.05 cm³.",
                "marks": 1,
                "markCode": "B"
              }
            ],
            "finalAnswer": "**(b)** The appropriate technique is record the titre to the nearest 0.05 cm³.",
            "commonErrors": [
              "Choosing an unrelated technique."
            ]
          }
        },
        {
          "id": "edialchem-u6-l2c2-q2",
          "difficulty": "challenge",
          "totalMarks": 3,
          "stem": "$25.0$ cm³ of $0.100$ mol dm$^{-3}$ NaOH neutralises $20.0$ cm³ of an acid. Calculate the acid concentration assuming a 1:1 reaction.",
          "response": {
            "type": "numeric",
            "parts": [
              {
                "label": "Answer",
                "answer": 0.125,
                "tolerance": 0.001,
                "unit": "mol dm⁻³"
              }
            ]
          },
          "markscheme": {
            "principles": [
              {
                "kind": "formula",
                "name": "Calculation",
                "statement": "moles acid = moles alkali for a 1:1 reaction"
              }
            ],
            "steps": [
              {
                "reasoning": "Moles NaOH $=0.0250\\times0.100=0.00250$ mol.",
                "marks": 1,
                "markCode": "M"
              },
              {
                "reasoning": "Moles acid $=0.00250$ mol.",
                "marks": 1,
                "markCode": "M"
              },
              {
                "reasoning": "Acid concentration $=0.00250/0.0200=0.125$ mol dm$^{-3}$.",
                "marks": 1,
                "markCode": "A"
              }
            ],
            "finalAnswer": "0.125 mol dm⁻³",
            "commonErrors": [
              "Not converting cm³ to dm³."
            ]
          }
        },
        {
          "id": "edialchem-u6-l2c2-q3",
          "difficulty": "challenge",
          "totalMarks": 4,
          "stem": "Describe the procedure for carrying out a titration or measuring a rate of reaction, including the key measurement and one safety consideration.",
          "response": {
            "type": "open"
          },
          "markscheme": {
            "principles": [
              {
                "kind": "method",
                "name": "Procedure",
                "statement": "Ordered steps, measurement and safety."
              }
            ],
            "steps": [
              {
                "reasoning": "First step of the procedure.",
                "marks": 1,
                "markCode": "B"
              },
              {
                "reasoning": "Key measurement identified.",
                "marks": 1,
                "markCode": "B"
              },
              {
                "reasoning": "Second step/recording.",
                "marks": 1,
                "markCode": "A"
              },
              {
                "reasoning": "Safety consideration appropriate to carrying out a titration or measuring a rate of reaction.",
                "marks": 1,
                "markCode": "A"
              }
            ],
            "finalAnswer": "Coherent procedure with measurement and safety",
            "commonErrors": [
              "Missing the measured quantity."
            ]
          }
        },
        {
          "id": "edialchem-u6-l2c2-q4",
          "difficulty": "challenge",
          "totalMarks": 10,
          "stem": "A student carries out carrying out a titration or measuring a rate of reaction. (a) State the independent, dependent and control variables. (b) Describe how the key measurement is made. (c) Evaluate the reliability of the method and suggest one improvement.",
          "parts": [
            {
              "label": "a",
              "prompt": "Variables",
              "marks": 3
            },
            {
              "label": "b",
              "prompt": "Measurement",
              "marks": 3
            },
            {
              "label": "c",
              "prompt": "Evaluation",
              "marks": 4
            }
          ],
          "response": {
            "type": "open"
          },
          "markscheme": {
            "principles": [
              {
                "kind": "method",
                "name": "Practical evaluation",
                "statement": "Variables, measurement and reliability."
              }
            ],
            "steps": [
              {
                "reasoning": "Independent variable identified.",
                "marks": 1,
                "markCode": "M",
                "part": "a"
              },
              {
                "reasoning": "Dependent variable identified.",
                "marks": 1,
                "markCode": "A",
                "part": "a"
              },
              {
                "reasoning": "Control variable identified.",
                "marks": 1,
                "markCode": "A",
                "part": "a"
              },
              {
                "reasoning": "Apparatus/technique for measurement described.",
                "marks": 1,
                "markCode": "M",
                "part": "b"
              },
              {
                "reasoning": "Units and repeats mentioned.",
                "marks": 1,
                "markCode": "A",
                "part": "b"
              },
              {
                "reasoning": "Measurement linked to result.",
                "marks": 1,
                "markCode": "A",
                "part": "b"
              },
              {
                "reasoning": "Reliability assessed.",
                "marks": 1,
                "markCode": "B",
                "part": "c"
              },
              {
                "reasoning": "Systematic/random error considered.",
                "marks": 1,
                "markCode": "A",
                "part": "c"
              },
              {
                "reasoning": "Valid improvement suggested.",
                "marks": 1,
                "markCode": "M",
                "part": "c"
              },
              {
                "reasoning": "Conclusion.",
                "marks": 1,
                "markCode": "R",
                "part": "c"
              }
            ],
            "finalAnswer": "Variables, measurement and evaluation",
            "commonErrors": [
              "Describing apparatus without linking to the result."
            ]
          }
        }
      ]
    }
  ]
};
