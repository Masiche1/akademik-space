import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  "id": "ediasbio-u3-lesson-3-3",
  "code": "3-3",
  "title": "Processing Data and Evaluating Results",
  "goal": "I CAN process data, identify trends and evaluate the reliability of a practical result.",
  "standards": [
    "WBI13 Practical Skills in Biology I"
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
      "id": "ediasbio-u3-l3c1-processing",
      "title": "Processing and presenting data",
      "skill": "Plot, describe and interpret practical data.",
      "lesson": {
        "sections": [
          {
            "heading": "Variables and fair testing",
            "body": "Investigations of rates of reaction and population density data must identify the independent variable (what is changed), dependent variable (what is measured) and control variables (what is kept constant). At IAS you should be able to state the controls needed for a standard core practical."
          },
          {
            "heading": "Reliability and validity",
            "body": "Reliability is improved by repeats, averaging and checking calibration. Validity means the method actually measures the intended quantity — for example, using the correct wavelength filter in rates of reaction and population density data. Identify whether an error is systematic or random and suggest one improvement."
          },
          {
            "heading": "Anomalies and improvements",
            "body": "Anomalous results should be identified, not deleted automatically. Check apparatus, technique and calculations before deciding whether to exclude them. Suggest one practical improvement that would make the result more reliable."
          }
        ],
        "keyFormulas": [
          {
            "name": "Key principle",
            "statement": "rates of reaction and population density data: identify variables, control conditions, repeat measurements and evaluate uncertainty."
          }
        ],
        "workedExample": {
          "problem": "Describe how you would make a measurement in rates of reaction and population density data reliable.",
          "solution": "Identify the variables, keep controls constant, repeat readings, calculate uncertainty and suggest improvements."
        }
      },
      "questions": [
        {
          "id": "ediasbio-u3-l3c1-q1",
          "difficulty": "foundation",
          "totalMarks": 1,
          "stem": "Which graph is most appropriate for showing how rates of reaction and population density data changes with time?",
          "response": {
            "type": "mcq",
            "choices": [
              {
                "id": "a",
                "text": "A pictogram"
              },
              {
                "id": "b",
                "text": "A pie chart"
              },
              {
                "id": "c",
                "text": "A bar chart of categories"
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
          "id": "ediasbio-u3-l3c1-q2",
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
          "id": "ediasbio-u3-l3c1-q3",
          "difficulty": "challenge",
          "totalMarks": 4,
          "stem": "Explain how to process and present data from rates of reaction and population density data, including axes, units and how to identify a trend.",
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
          "id": "ediasbio-u3-l3c1-q4",
          "difficulty": "challenge",
          "totalMarks": 10,
          "stem": "Data for rates of reaction and population density data are shown in a table described in words. (a) State how the data should be plotted. (b) Describe the trend shown. (c) Explain how the data support a conclusion about rates of reaction and population density data.",
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
                "reasoning": "Trend linked to rates of reaction and population density data.",
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
      "id": "ediasbio-u3-l3c2-evaluation",
      "title": "Evaluation and uncertainty",
      "skill": "Assess uncertainty, limitations and improvements.",
      "lesson": {
        "sections": [
          {
            "heading": "Variables and fair testing",
            "body": "Investigations of biological measurement uncertainty and sampling must identify the independent variable (what is changed), dependent variable (what is measured) and control variables (what is kept constant). At IAS you should be able to state the controls needed for a standard core practical."
          },
          {
            "heading": "Reliability and validity",
            "body": "Reliability is improved by repeats, averaging and checking calibration. Validity means the method actually measures the intended quantity — for example, using the correct wavelength filter in biological measurement uncertainty and sampling. Identify whether an error is systematic or random and suggest one improvement."
          },
          {
            "heading": "Anomalies and improvements",
            "body": "Anomalous results should be identified, not deleted automatically. Check apparatus, technique and calculations before deciding whether to exclude them. Suggest one practical improvement that would make the result more reliable."
          }
        ],
        "keyFormulas": [
          {
            "name": "Key principle",
            "statement": "biological measurement uncertainty and sampling: identify variables, control conditions, repeat measurements and evaluate uncertainty."
          }
        ],
        "workedExample": {
          "problem": "Describe how you would make a measurement in biological measurement uncertainty and sampling reliable.",
          "solution": "Identify the variables, keep controls constant, repeat readings, calculate uncertainty and suggest improvements."
        }
      },
      "questions": [
        {
          "id": "ediasbio-u3-l3c2-q1",
          "difficulty": "foundation",
          "totalMarks": 1,
          "stem": "Which is the best definition of validity in biological measurement uncertainty and sampling?",
          "response": {
            "type": "mcq",
            "choices": [
              {
                "id": "a",
                "text": "Taking many readings"
              },
              {
                "id": "b",
                "text": "Using the most expensive apparatus"
              },
              {
                "id": "c",
                "text": "Measuring what the investigation claims to measure"
              },
              {
                "id": "d",
                "text": "Consistency of repeats"
              }
            ],
            "correctChoiceId": "c"
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
          "id": "ediasbio-u3-l3c2-q2",
          "difficulty": "challenge",
          "totalMarks": 5,
          "stem": "Two students estimate the same population density as 72 and 80 organisms m$^{-2}$. Calculate the percentage difference.",
          "response": {
            "type": "numeric",
            "parts": [
              {
                "label": "Answer",
                "answer": 10.5,
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
                "statement": "percentage difference = |a-b| / mean × 100%"
              }
            ],
            "steps": [
              {
                "reasoning": "Difference $=|72-80|=8$.",
                "marks": 1,
                "markCode": "M"
              },
              {
                "reasoning": "Mean $=(72+80)/2=76$.",
                "marks": 1,
                "markCode": "M"
              },
              {
                "reasoning": "$\\%\\text{diff}=(8/76)\\times100=10.5$%.",
                "marks": 1,
                "markCode": "M"
              },
              {
                "reasoning": "$=10.5$%.",
                "marks": 1,
                "markCode": "M"
              },
              {
                "reasoning": "Percentage difference = 10.5%",
                "marks": 1,
                "markCode": "A"
              }
            ],
            "finalAnswer": "10.5%",
            "commonErrors": [
              "Dividing by one value instead of the mean."
            ]
          }
        },
        {
          "id": "ediasbio-u3-l3c2-q3",
          "difficulty": "challenge",
          "totalMarks": 4,
          "stem": "Evaluate the method used for biological measurement uncertainty and sampling, identifying one strength and one limitation.",
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
          "id": "ediasbio-u3-l3c2-q4",
          "difficulty": "challenge",
          "totalMarks": 10,
          "stem": "A student concludes that biological measurement uncertainty and sampling gives a reliable result. (a) State two reasons supporting reliability. (b) Identify one limitation of the method. (c) Suggest how the investigation could be improved and justify the improvement.",
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
                "reasoning": "Link to biological measurement uncertainty and sampling.",
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
