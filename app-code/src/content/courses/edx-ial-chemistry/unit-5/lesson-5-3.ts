import type { Lesson } from "../../../types.ts";

export const lesson53: Lesson = {
  "id": "edialchem-u5-lesson-5-3",
  "code": "5-3",
  "title": "Processing Data and Evaluating Results",
  "goal": "I CAN process data, identify trends and evaluate the reliability of a practical result.",
  "standards": [
    "WCH13 Practical Skills in Chemistry I"
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
      "id": "edialchem-u5-l3c1-processing",
      "title": "Processing and presenting data",
      "skill": "Plot, describe and interpret practical data.",
      "lesson": {
        "sections": [
          {
            "heading": "Variables and fair testing",
            "body": "Investigations of titration volumes, temperature changes and gas volumes must identify the independent variable (what is changed), dependent variable (what is measured) and control variables (what is kept constant). At IAL you should also justify why each control matters and predict how changing it would affect the result."
          },
          {
            "heading": "Reliability and validity",
            "body": "Reliability is improved by repeats, averaging and checking calibration. Validity means the method actually measures the intended quantity — for example, using the correct wavelength filter in titration volumes, temperature changes and gas volumes. Discuss systematic error, random error and how each affects validity and reliability."
          },
          {
            "heading": "Anomalies and improvements",
            "body": "Anomalous results should be identified, not deleted automatically. Check apparatus, technique and calculations before deciding whether to exclude them. Suggest quantitative improvements such as narrower uncertainty intervals, more repeats or a refined method."
          }
        ],
        "keyFormulas": [
          {
            "name": "Key principle",
            "statement": "titration volumes, temperature changes and gas volumes: identify variables, control conditions, repeat measurements and evaluate uncertainty."
          }
        ],
        "workedExample": {
          "problem": "Describe how you would make a measurement in titration volumes, temperature changes and gas volumes reliable.",
          "solution": "Identify the variables, keep controls constant, repeat readings, calculate uncertainty and suggest improvements."
        }
      },
      "questions": [
        {
          "id": "edialchem-u5-l3c1-q1",
          "difficulty": "foundation",
          "totalMarks": 1,
          "stem": "Which graph is most appropriate for showing how titration volumes, temperature changes and gas volumes changes with time?",
          "response": {
            "type": "mcq",
            "choices": [
              {
                "id": "a",
                "text": "A bar chart of categories"
              },
              {
                "id": "b",
                "text": "A pictogram"
              },
              {
                "id": "c",
                "text": "A pie chart"
              },
              {
                "id": "d",
                "text": "A line graph"
              }
            ],
            "correctChoiceId": "d"
          },
          "markscheme": {
            "principles": [
              {
                "kind": "convention",
                "name": "Graph choice",
                "statement": "Continuous variables use line graphs."
              }
            ],
            "steps": [
              {
                "reasoning": "Time against a continuous variable uses a line graph.",
                "marks": 1,
                "markCode": "B"
              }
            ],
            "finalAnswer": "**(b)** Time against a continuous variable uses a line graph.",
            "commonErrors": [
              "Choosing a chart for categorical data."
            ]
          }
        },
        {
          "id": "edialchem-u5-l3c1-q2",
          "difficulty": "core",
          "totalMarks": 3,
          "stem": "The mean of $4.2, 4.5, 4.4, 4.3$ and $4.6$ is required to 2 significant figures.",
          "response": {
            "type": "numeric",
            "parts": [
              {
                "label": "Answer",
                "answer": 4.4,
                "tolerance": 0.05,
                "unit": ""
              }
            ]
          },
          "markscheme": {
            "principles": [
              {
                "kind": "method",
                "name": "Mean",
                "statement": "Mean = sum / count."
              }
            ],
            "steps": [
              {
                "reasoning": "Sum $=4.2+4.5+4.4+4.3+4.6=22.0$.",
                "marks": 1,
                "markCode": "M"
              },
              {
                "reasoning": "Divide by 5: $22.0/5=4.40$.",
                "marks": 1,
                "markCode": "M"
              },
              {
                "reasoning": "Mean $=4.4$ to 2 s.f.",
                "marks": 1,
                "markCode": "A"
              }
            ],
            "finalAnswer": "4.4",
            "commonErrors": [
              "Rounding before adding."
            ]
          }
        },
        {
          "id": "edialchem-u5-l3c1-q3",
          "difficulty": "challenge",
          "totalMarks": 4,
          "stem": "Explain how to process and present data from titration volumes, temperature changes and gas volumes, including axes, units and how to identify a trend.",
          "response": {
            "type": "open"
          },
          "markscheme": {
            "principles": [
              {
                "kind": "convention",
                "name": "Data presentation",
                "statement": "Axes, units, trend."
              }
            ],
            "steps": [
              {
                "reasoning": "Independent variable on x-axis, dependent on y-axis.",
                "marks": 1,
                "markCode": "B"
              },
              {
                "reasoning": "Both axes labelled with units.",
                "marks": 1,
                "markCode": "A"
              },
              {
                "reasoning": "Trend described using data.",
                "marks": 1,
                "markCode": "A"
              },
              {
                "reasoning": "Anomalies/errors considered.",
                "marks": 1,
                "markCode": "A"
              }
            ],
            "finalAnswer": "Correct axes/units and trend interpretation",
            "commonErrors": [
              "Plotting without units."
            ]
          }
        },
        {
          "id": "edialchem-u5-l3c1-q4",
          "difficulty": "challenge",
          "totalMarks": 10,
          "stem": "Data for titration volumes, temperature changes and gas volumes are shown in a table described in words. (a) State how the data should be plotted. (b) Describe the trend shown. (c) Explain how the data support a conclusion about titration volumes, temperature changes and gas volumes.",
          "parts": [
            {
              "label": "a",
              "prompt": "Plotting",
              "marks": 3
            },
            {
              "label": "b",
              "prompt": "Trend",
              "marks": 3
            },
            {
              "label": "c",
              "prompt": "Conclusion",
              "marks": 4
            }
          ],
          "response": {
            "type": "open"
          },
          "markscheme": {
            "principles": [
              {
                "kind": "convention",
                "name": "Data analysis",
                "statement": "Plot, trend, conclusion."
              }
            ],
            "steps": [
              {
                "reasoning": "Correct graph type and axes.",
                "marks": 1,
                "markCode": "M",
                "part": "a"
              },
              {
                "reasoning": "Units and labels included.",
                "marks": 1,
                "markCode": "A",
                "part": "a"
              },
              {
                "reasoning": "Scale appropriate.",
                "marks": 1,
                "markCode": "A",
                "part": "a"
              },
              {
                "reasoning": "Trend described quantitatively.",
                "marks": 1,
                "markCode": "M",
                "part": "b"
              },
              {
                "reasoning": "Trend linked to titration volumes, temperature changes and gas volumes.",
                "marks": 1,
                "markCode": "A",
                "part": "b"
              },
              {
                "reasoning": "Direction/magnitude stated.",
                "marks": 1,
                "markCode": "A",
                "part": "b"
              },
              {
                "reasoning": "Conclusion supported by data.",
                "marks": 1,
                "markCode": "B",
                "part": "c"
              },
              {
                "reasoning": "Evidence referenced.",
                "marks": 1,
                "markCode": "A",
                "part": "c"
              },
              {
                "reasoning": "Limitations considered.",
                "marks": 1,
                "markCode": "A",
                "part": "c"
              },
              {
                "reasoning": "Final judgement.",
                "marks": 1,
                "markCode": "R",
                "part": "c"
              }
            ],
            "finalAnswer": "Correct plotting; trend; supported conclusion",
            "commonErrors": [
              "Conclusion not linked to evidence."
            ]
          }
        }
      ]
    },
    {
      "id": "edialchem-u5-l3c2-evaluation",
      "title": "Evaluation and uncertainty",
      "skill": "Assess uncertainty, limitations and improvements.",
      "lesson": {
        "sections": [
          {
            "heading": "Variables and fair testing",
            "body": "Investigations of chemical measurement uncertainty and yield calculations must identify the independent variable (what is changed), dependent variable (what is measured) and control variables (what is kept constant). At IAL you should also justify why each control matters and predict how changing it would affect the result."
          },
          {
            "heading": "Reliability and validity",
            "body": "Reliability is improved by repeats, averaging and checking calibration. Validity means the method actually measures the intended quantity — for example, using the correct wavelength filter in chemical measurement uncertainty and yield calculations. Discuss systematic error, random error and how each affects validity and reliability."
          },
          {
            "heading": "Anomalies and improvements",
            "body": "Anomalous results should be identified, not deleted automatically. Check apparatus, technique and calculations before deciding whether to exclude them. Suggest quantitative improvements such as narrower uncertainty intervals, more repeats or a refined method."
          }
        ],
        "keyFormulas": [
          {
            "name": "Key principle",
            "statement": "chemical measurement uncertainty and yield calculations: identify variables, control conditions, repeat measurements and evaluate uncertainty."
          }
        ],
        "workedExample": {
          "problem": "Describe how you would make a measurement in chemical measurement uncertainty and yield calculations reliable.",
          "solution": "Identify the variables, keep controls constant, repeat readings, calculate uncertainty and suggest improvements."
        }
      },
      "questions": [
        {
          "id": "edialchem-u5-l3c2-q1",
          "difficulty": "foundation",
          "totalMarks": 1,
          "stem": "Which is the best definition of validity in chemical measurement uncertainty and yield calculations?",
          "response": {
            "type": "mcq",
            "choices": [
              {
                "id": "a",
                "text": "Using the most expensive apparatus"
              },
              {
                "id": "b",
                "text": "Measuring what the investigation claims to measure"
              },
              {
                "id": "c",
                "text": "Taking many readings"
              },
              {
                "id": "d",
                "text": "Consistency of repeats"
              }
            ],
            "correctChoiceId": "b"
          },
          "markscheme": {
            "principles": [
              {
                "kind": "definition",
                "name": "Validity",
                "statement": "Measuring the intended quantity."
              }
            ],
            "steps": [
              {
                "reasoning": "Validity means measuring what is claimed.",
                "marks": 1,
                "markCode": "B"
              }
            ],
            "finalAnswer": "**(b)** Validity means measuring what is claimed.",
            "commonErrors": [
              "Confusing validity with reliability."
            ]
          }
        },
        {
          "id": "edialchem-u5-l3c2-q2",
          "difficulty": "challenge",
          "totalMarks": 5,
          "stem": "A hydrated salt loses $0.36$ g of water from $2.0$ g of sample. Calculate the percentage of water.",
          "response": {
            "type": "numeric",
            "parts": [
              {
                "label": "Answer",
                "answer": 18,
                "tolerance": 0.1,
                "unit": "%"
              }
            ]
          },
          "markscheme": {
            "principles": [
              {
                "kind": "formula",
                "name": "Evaluation",
                "statement": "percentage = part / whole × 100%"
              }
            ],
            "steps": [
              {
                "reasoning": "Use $\\%=(0.36/2.0)\\times100$.",
                "marks": 1,
                "markCode": "M"
              },
              {
                "reasoning": "$=0.18\\times100$.",
                "marks": 1,
                "markCode": "M"
              },
              {
                "reasoning": "$=18.0$%.",
                "marks": 1,
                "markCode": "M"
              },
              {
                "reasoning": "$=18.0$%.",
                "marks": 1,
                "markCode": "M"
              },
              {
                "reasoning": "Percentage water = 18.0%",
                "marks": 1,
                "markCode": "A"
              }
            ],
            "finalAnswer": "18.0%",
            "commonErrors": [
              "Using the mass of anhydrous salt as the whole."
            ]
          }
        },
        {
          "id": "edialchem-u5-l3c2-q3",
          "difficulty": "challenge",
          "totalMarks": 4,
          "stem": "Evaluate the method used for chemical measurement uncertainty and yield calculations, identifying one strength and one limitation.",
          "response": {
            "type": "open"
          },
          "markscheme": {
            "principles": [
              {
                "kind": "principle",
                "name": "Evaluation",
                "statement": "Strengths and limitations."
              }
            ],
            "steps": [
              {
                "reasoning": "Strength identified.",
                "marks": 1,
                "markCode": "B"
              },
              {
                "reasoning": "Strength justified.",
                "marks": 1,
                "markCode": "A"
              },
              {
                "reasoning": "Limitation identified.",
                "marks": 1,
                "markCode": "B"
              },
              {
                "reasoning": "Limitation justified/suggested improvement.",
                "marks": 1,
                "markCode": "A"
              }
            ],
            "finalAnswer": "Balanced evaluation",
            "commonErrors": [
              "Listing strengths only."
            ]
          }
        },
        {
          "id": "edialchem-u5-l3c2-q4",
          "difficulty": "challenge",
          "totalMarks": 10,
          "stem": "A student concludes that chemical measurement uncertainty and yield calculations gives a reliable result. (a) State two reasons supporting reliability. (b) Identify one limitation of the method. (c) Suggest how the investigation could be improved and justify the improvement.",
          "parts": [
            {
              "label": "a",
              "prompt": "Reliability",
              "marks": 3
            },
            {
              "label": "b",
              "prompt": "Limitation",
              "marks": 3
            },
            {
              "label": "c",
              "prompt": "Improvement",
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
                "name": "Evaluation",
                "statement": "Reliability, limitations, improvement."
              }
            ],
            "steps": [
              {
                "reasoning": "Reliability point 1.",
                "marks": 1,
                "markCode": "M",
                "part": "a"
              },
              {
                "reasoning": "Reliability point 2.",
                "marks": 1,
                "markCode": "A",
                "part": "a"
              },
              {
                "reasoning": "Link to chemical measurement uncertainty and yield calculations.",
                "marks": 1,
                "markCode": "A",
                "part": "a"
              },
              {
                "reasoning": "Limitation identified.",
                "marks": 1,
                "markCode": "B",
                "part": "b"
              },
              {
                "reasoning": "Limitation explained.",
                "marks": 1,
                "markCode": "A",
                "part": "b"
              },
              {
                "reasoning": "Effect on result considered.",
                "marks": 1,
                "markCode": "A",
                "part": "b"
              },
              {
                "reasoning": "Improvement suggested.",
                "marks": 1,
                "markCode": "M",
                "part": "c"
              },
              {
                "reasoning": "Improvement justified.",
                "marks": 1,
                "markCode": "A",
                "part": "c"
              },
              {
                "reasoning": "Expected effect stated.",
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
            "finalAnswer": "Reliability, limitation and justified improvement",
            "commonErrors": [
              "Suggesting improvements without justification."
            ]
          }
        }
      ]
    }
  ]
};
