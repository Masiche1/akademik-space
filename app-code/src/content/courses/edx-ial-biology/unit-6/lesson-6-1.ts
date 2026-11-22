import type { Lesson } from "../../../types.ts";

export const lesson61: Lesson = {
  "id": "edialbio-u6-lesson-6-1",
  "code": "6-1",
  "title": "Designing and Controlling Investigations",
  "goal": "I CAN identify variables, controls, reliability and validity in a practical investigation.",
  "standards": [
    "WBI16 Practical Skills in Biology II"
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
      "term": "Biology core practical",
      "definition": "A specified practical technique required by the Pearson Edexcel Biology specification."
    }
  ],
  "concepts": [
    {
      "id": "edialbio-u6-l1c1-variables",
      "title": "Variables and fair testing",
      "skill": "Identify independent, dependent and control variables.",
      "lesson": {
        "sections": [
          {
            "heading": "Variables and fair testing",
            "body": "Investigations of osmosis in dialysis tubing and enzyme-rate investigations must identify the independent variable (what is changed), dependent variable (what is measured) and control variables (what is kept constant). At IAL you should also justify why each control matters and predict how changing it would affect the result."
          },
          {
            "heading": "Reliability and validity",
            "body": "Reliability is improved by repeats, averaging and checking calibration. Validity means the method actually measures the intended quantity — for example, using the correct wavelength filter in osmosis in dialysis tubing and enzyme-rate investigations. Discuss systematic error, random error and how each affects validity and reliability."
          },
          {
            "heading": "Anomalies and improvements",
            "body": "Anomalous results should be identified, not deleted automatically. Check apparatus, technique and calculations before deciding whether to exclude them. Suggest quantitative improvements such as narrower uncertainty intervals, more repeats or a refined method."
          }
        ],
        "keyFormulas": [
          {
            "name": "Key principle",
            "statement": "osmosis in dialysis tubing and enzyme-rate investigations: identify variables, control conditions, repeat measurements and evaluate uncertainty."
          }
        ],
        "workedExample": {
          "problem": "Describe how you would make a measurement in osmosis in dialysis tubing and enzyme-rate investigations reliable.",
          "solution": "Identify the variables, keep controls constant, repeat readings, calculate uncertainty and suggest improvements."
        }
      },
      "questions": [
        {
          "id": "edialbio-u6-l1c1-q1",
          "difficulty": "foundation",
          "totalMarks": 1,
          "stem": "In an investigation of osmosis in dialysis tubing and enzyme-rate investigations, which variable is the dependent variable?",
          "response": {
            "type": "mcq",
            "choices": [
              {
                "id": "a",
                "text": "The variable measured as the result"
              },
              {
                "id": "b",
                "text": "The variable deliberately changed"
              },
              {
                "id": "c",
                "text": "The instrument used"
              },
              {
                "id": "d",
                "text": "A variable kept constant"
              }
            ],
            "correctChoiceId": "a"
          },
          "markscheme": {
            "principles": [
              {
                "kind": "definition",
                "name": "Variables",
                "statement": "Dependent variable = measured result."
              }
            ],
            "steps": [
              {
                "reasoning": "The dependent variable is the result being measured.",
                "marks": 1,
                "markCode": "B"
              }
            ],
            "finalAnswer": "**(a)** The dependent variable is the result being measured.",
            "commonErrors": [
              "Choosing the independent variable."
            ]
          }
        },
        {
          "id": "edialbio-u6-l1c1-q2",
          "difficulty": "core",
          "totalMarks": 3,
          "stem": "Three repeat readings of a length are 12.4 cm, 12.5 cm and 12.3 cm. Calculate the mean to 3 significant figures.",
          "response": {
            "type": "numeric",
            "parts": [
              {
                "label": "Answer",
                "answer": 12.4,
                "tolerance": 0.01,
                "unit": "cm"
              }
            ]
          },
          "markscheme": {
            "principles": [
              {
                "kind": "method",
                "name": "Mean",
                "statement": "Mean = sum / number of readings."
              }
            ],
            "steps": [
              {
                "reasoning": "Add the readings: $12.4+12.5+12.3=37.2$.",
                "marks": 1,
                "markCode": "M"
              },
              {
                "reasoning": "Divide by 3: $37.2/3=12.4$.",
                "marks": 1,
                "markCode": "M"
              },
              {
                "reasoning": "Mean = 12.4 cm.",
                "marks": 1,
                "markCode": "A"
              }
            ],
            "finalAnswer": "12.4 cm",
            "commonErrors": [
              "Dividing by the wrong number of readings."
            ]
          }
        },
        {
          "id": "edialbio-u6-l1c1-q3",
          "difficulty": "challenge",
          "totalMarks": 4,
          "stem": "Explain why control variables are needed in a osmosis in dialysis tubing and enzyme-rate investigations investigation and give two examples of controls.",
          "response": {
            "type": "open"
          },
          "markscheme": {
            "principles": [
              {
                "kind": "principle",
                "name": "Fair test",
                "statement": "Only the independent variable should affect the dependent variable."
              }
            ],
            "steps": [
              {
                "reasoning": "Control variables keep conditions constant.",
                "marks": 1,
                "markCode": "B"
              },
              {
                "reasoning": "Without them the result may be affected by another factor.",
                "marks": 1,
                "markCode": "B"
              },
              {
                "reasoning": "Example control 1 appropriate to osmosis in dialysis tubing and enzyme-rate investigations.",
                "marks": 1,
                "markCode": "A"
              },
              {
                "reasoning": "Example control 2 appropriate to osmosis in dialysis tubing and enzyme-rate investigations.",
                "marks": 1,
                "markCode": "A"
              }
            ],
            "finalAnswer": "Controls make the test fair; two valid controls",
            "commonErrors": [
              "Listing variables without explaining why."
            ]
          }
        },
        {
          "id": "edialbio-u6-l1c1-q4",
          "difficulty": "challenge",
          "totalMarks": 10,
          "stem": "A student investigates osmosis in dialysis tubing and enzyme-rate investigations. (a) Identify the independent, dependent and two control variables. (b) Explain why repeating the measurement improves reliability. (c) Suggest one improvement to the method and justify it.",
          "parts": [
            {
              "label": "a",
              "prompt": "Variables",
              "marks": 3
            },
            {
              "label": "b",
              "prompt": "Reliability",
              "marks": 4
            },
            {
              "label": "c",
              "prompt": "Improvement",
              "marks": 3
            }
          ],
          "response": {
            "type": "open"
          },
          "markscheme": {
            "principles": [
              {
                "kind": "principle",
                "name": "Experimental design",
                "statement": "Variables, repeats and validity."
              }
            ],
            "steps": [
              {
                "reasoning": "Independent and dependent variables identified.",
                "marks": 1,
                "markCode": "M",
                "part": "a"
              },
              {
                "reasoning": "Two valid control variables.",
                "marks": 1,
                "markCode": "A",
                "part": "a"
              },
              {
                "reasoning": "Variables linked to osmosis in dialysis tubing and enzyme-rate investigations.",
                "marks": 1,
                "markCode": "A",
                "part": "a"
              },
              {
                "reasoning": "Repeats reduce random error.",
                "marks": 1,
                "markCode": "M",
                "part": "b"
              },
              {
                "reasoning": "Averaging improves precision.",
                "marks": 1,
                "markCode": "M",
                "part": "b"
              },
              {
                "reasoning": "Anomalies can be identified.",
                "marks": 1,
                "markCode": "A",
                "part": "b"
              },
              {
                "reasoning": "Reliability defined and applied.",
                "marks": 1,
                "markCode": "A",
                "part": "b"
              },
              {
                "reasoning": "Valid improvement suggested.",
                "marks": 1,
                "markCode": "M",
                "part": "c"
              },
              {
                "reasoning": "Improvement linked to validity/reliability.",
                "marks": 1,
                "markCode": "A",
                "part": "c"
              },
              {
                "reasoning": "Justification given.",
                "marks": 1,
                "markCode": "A",
                "part": "c"
              }
            ],
            "finalAnswer": "Variables identified; repeats improve reliability; justified improvement",
            "commonErrors": [
              "Changing more than one variable."
            ]
          }
        }
      ]
    },
    {
      "id": "edialbio-u6-l1c2-reliability",
      "title": "Reliability, validity and anomalies",
      "skill": "Evaluate repeatability, validity and anomalous results.",
      "lesson": {
        "sections": [
          {
            "heading": "Variables and fair testing",
            "body": "Investigations of osmosis in dialysis tubing and enzyme-rate investigations must identify the independent variable (what is changed), dependent variable (what is measured) and control variables (what is kept constant). At IAL you should also justify why each control matters and predict how changing it would affect the result."
          },
          {
            "heading": "Reliability and validity",
            "body": "Reliability is improved by repeats, averaging and checking calibration. Validity means the method actually measures the intended quantity — for example, using the correct wavelength filter in osmosis in dialysis tubing and enzyme-rate investigations. Discuss systematic error, random error and how each affects validity and reliability."
          },
          {
            "heading": "Anomalies and improvements",
            "body": "Anomalous results should be identified, not deleted automatically. Check apparatus, technique and calculations before deciding whether to exclude them. Suggest quantitative improvements such as narrower uncertainty intervals, more repeats or a refined method."
          }
        ],
        "keyFormulas": [
          {
            "name": "Key principle",
            "statement": "osmosis in dialysis tubing and enzyme-rate investigations: identify variables, control conditions, repeat measurements and evaluate uncertainty."
          }
        ],
        "workedExample": {
          "problem": "Describe how you would make a measurement in osmosis in dialysis tubing and enzyme-rate investigations reliable.",
          "solution": "Identify the variables, keep controls constant, repeat readings, calculate uncertainty and suggest improvements."
        }
      },
      "questions": [
        {
          "id": "edialbio-u6-l1c2-q1",
          "difficulty": "foundation",
          "totalMarks": 1,
          "stem": "Which action most improves the reliability of a osmosis in dialysis tubing and enzyme-rate investigations measurement?",
          "response": {
            "type": "mcq",
            "choices": [
              {
                "id": "a",
                "text": "Repeating and averaging readings"
              },
              {
                "id": "b",
                "text": "Using a bigger apparatus"
              },
              {
                "id": "c",
                "text": "Taking one reading carefully"
              },
              {
                "id": "d",
                "text": "Guessing the result"
              }
            ],
            "correctChoiceId": "a"
          },
          "markscheme": {
            "principles": [
              {
                "kind": "definition",
                "name": "Reliability",
                "statement": "Consistency through repeats."
              }
            ],
            "steps": [
              {
                "reasoning": "Repeats and averaging improve reliability.",
                "marks": 1,
                "markCode": "B"
              }
            ],
            "finalAnswer": "**(a)** Repeats and averaging improve reliability.",
            "commonErrors": [
              "Assuming one careful reading is enough."
            ]
          }
        },
        {
          "id": "edialbio-u6-l1c2-q2",
          "difficulty": "core",
          "totalMarks": 3,
          "stem": "A measurement is $4.00 \\pm 0.20$ cm. Calculate the percentage uncertainty.",
          "response": {
            "type": "numeric",
            "parts": [
              {
                "label": "Answer",
                "answer": 5,
                "tolerance": 0.1,
                "unit": "%"
              }
            ]
          },
          "markscheme": {
            "principles": [
              {
                "kind": "formula",
                "name": "Percentage uncertainty",
                "statement": "$\\%\\text{ uncertainty}=(\\Delta x/x)\\times100$."
              }
            ],
            "steps": [
              {
                "reasoning": "Use $\\%\\text{unc}=(0.20/4.00)\\times100$.",
                "marks": 1,
                "markCode": "M"
              },
              {
                "reasoning": "$=0.05\\times100=5.0$.",
                "marks": 1,
                "markCode": "M"
              },
              {
                "reasoning": "Percentage uncertainty = 5.0%.",
                "marks": 1,
                "markCode": "A"
              }
            ],
            "finalAnswer": "5.0%",
            "commonErrors": [
              "Using the absolute uncertainty as a percentage."
            ]
          }
        },
        {
          "id": "edialbio-u6-l1c2-q3",
          "difficulty": "challenge",
          "totalMarks": 4,
          "stem": "Distinguish between random and systematic error in a osmosis in dialysis tubing and enzyme-rate investigations investigation, giving one example of each.",
          "response": {
            "type": "open"
          },
          "markscheme": {
            "principles": [
              {
                "kind": "definition",
                "name": "Errors",
                "statement": "Random = scatter; systematic = consistent offset."
              }
            ],
            "steps": [
              {
                "reasoning": "Random error causes scatter around the mean.",
                "marks": 1,
                "markCode": "B"
              },
              {
                "reasoning": "Example: reaction time or reading inconsistencies.",
                "marks": 1,
                "markCode": "A"
              },
              {
                "reasoning": "Systematic error shifts all results the same way.",
                "marks": 1,
                "markCode": "B"
              },
              {
                "reasoning": "Example: zero error or calibration fault.",
                "marks": 1,
                "markCode": "A"
              }
            ],
            "finalAnswer": "Random=scatter; systematic=consistent offset",
            "commonErrors": [
              "Saying repeats remove systematic error."
            ]
          }
        },
        {
          "id": "edialbio-u6-l1c2-q4",
          "difficulty": "challenge",
          "totalMarks": 10,
          "stem": "Results for osmosis in dialysis tubing and enzyme-rate investigations are 8.1, 8.4, 8.0 and 12.9. (a) Identify the anomalous result and justify your choice. (b) Calculate the mean after removing it. (c) Explain how the anomaly affects reliability and validity.",
          "parts": [
            {
              "label": "a",
              "prompt": "Anomaly",
              "marks": 3
            },
            {
              "label": "b",
              "prompt": "Mean",
              "marks": 3
            },
            {
              "label": "c",
              "prompt": "Effect",
              "marks": 4
            }
          ],
          "response": {
            "type": "open"
          },
          "markscheme": {
            "principles": [
              {
                "kind": "principle",
                "name": "Data evaluation",
                "statement": "Anomalies, mean and validity."
              }
            ],
            "steps": [
              {
                "reasoning": "12.9 identified as anomalous.",
                "marks": 1,
                "markCode": "B",
                "part": "a"
              },
              {
                "reasoning": "It is far from the cluster 8.0-8.4.",
                "marks": 1,
                "markCode": "A",
                "part": "a"
              },
              {
                "reasoning": "Justification based on pattern.",
                "marks": 1,
                "markCode": "A",
                "part": "a"
              },
              {
                "reasoning": "Mean of 8.1, 8.4, 8.0 = $24.5/3$.",
                "marks": 1,
                "markCode": "M",
                "part": "b"
              },
              {
                "reasoning": "$=8.17$ (3 s.f.).",
                "marks": 1,
                "markCode": "M",
                "part": "b"
              },
              {
                "reasoning": "Mean $\\approx 8.17$.",
                "marks": 1,
                "markCode": "A",
                "part": "b"
              },
              {
                "reasoning": "Anomaly reduces reliability if included.",
                "marks": 1,
                "markCode": "B",
                "part": "c"
              },
              {
                "reasoning": "It may indicate a procedural mistake.",
                "marks": 1,
                "markCode": "A",
                "part": "c"
              },
              {
                "reasoning": "Removing it can improve validity if justified.",
                "marks": 1,
                "markCode": "A",
                "part": "c"
              },
              {
                "reasoning": "Conclusion stated.",
                "marks": 1,
                "markCode": "R",
                "part": "c"
              }
            ],
            "finalAnswer": "Anomaly identified; mean $\\approx8.17$; effect explained",
            "commonErrors": [
              "Deleting anomalies without justification."
            ]
          }
        }
      ]
    }
  ]
};
