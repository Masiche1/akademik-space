import type { Lesson } from "../../../types.ts";

export const lesson34: Lesson = {
  id: "satm-u3-lesson-3-4",
  code: "3-4",
  title: "Data Interpretation",
  goal: "I CAN read tables, graphs, and scatterplots to answer questions.",
  standards: ["SAT M 3.x"],
  vocabulary: [
    { term: "Data table", definition: "Organized numerical information." },
    { term: "Scatterplot", definition: "Graph showing relationship between two variables." },
    { term: "Trend line", definition: "Line showing general direction of data." },
    { term: "Correlation", definition: "Strength of linear relationship (-1 to 1)." },
    { term: "Outlier", definition: "Point far from the trend." },
    { term: "Interpolation", definition: "Estimating within data range." },
    { term: "Extrapolation", definition: "Predicting beyond data — risky." },
  ],
  concepts: [
    {
      id: "satm-u3-data-interpretation",
      title: "Data interpretation",
      skill: "Extract information from tables, graphs, and scatterplots.",
      lesson: {
        sections: [
          {
            heading: "Reading data displays",
            body: "**Tables**: find row/column intersection; watch units. **Scatterplots**: each point = (x,y) pair; look for pattern — upward trend = positive correlation, downward = negative, no pattern = weak/no correlation. **Trend line**: best-fit line showing general direction; steeper = stronger relationship.",
          },
          {
            heading: "Interpolation vs extrapolation",
            body: "**Interpolation** (estimating within data range) is reliable — the trend is supported by data. **Extrapolation** (predicting beyond range) is risky — the relationship may not continue; SAT questions test whether you recognize when extrapolation is unsupported.",
          },
        ],
        keyFormulas: [
          { name: "Correlation", statement: "$-1$ to $1$: negative/none/positive" },
          { name: "Interpolation", statement: "Within range = reliable; beyond = risky" },
        ],
        workedExample: {
          problem: "Scatterplot shows study hours vs test scores, upward trend. What does this indicate?",
          solution: "Positive correlation — more study hours associated with higher scores; the upward trend line shows the relationship; correlation doesn't prove causation but suggests association.",
        },
      },
      questions: [
        {
          id: "satm-u3-data-interpretation-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A scatterplot with points trending upward shows ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "negative correlation"
                    },
                    {
                              "id": "b",
                              "text": "positive correlation"
                    },
                    {
                              "id": "c",
                              "text": "no correlation"
                    },
                    {
                              "id": "d",
                              "text": "causation"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Positive correlation",
                              "statement": "Both increase together."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Upward trend = positive correlation — as x increases, y tends to increase; doesn't prove causation.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Positive correlation",
          "commonErrors": [
                    "Confusing correlation with causation."
          ]
},
        },
        {
          id: "satm-u3-data-interpretation-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Extrapolation means ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "reading within data range"
                    },
                    {
                              "id": "b",
                              "text": "predicting beyond observed data"
                    },
                    {
                              "id": "c",
                              "text": "drawing the trend line"
                    },
                    {
                              "id": "d",
                              "text": "counting points"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Extrapolation",
                              "statement": "Beyond data range."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Extrapolation predicts outside the observed range — risky because the relationship may not continue; interpolation stays within range.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Beyond data range",
          "commonErrors": [
                    "Confusing with interpolation."
          ]
},
        },
        {
          id: "satm-u3-data-interpretation-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "A table shows: hours studied 1→score 70, 2→80, 3→90, 4→100. What score for 5 hours (linear extrapolation)?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Score",
                              "answer": 110
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Extend pattern",
                              "statement": "+10 per hour."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Pattern: +10 points per hour; 5 hours → $100 + 10 = 110$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Answer: 110 (though real scores max at 100 — extrapolation has limits!).",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "110",
          "commonErrors": [
                    "Ignoring that scores cap at 100 — extrapolation limit."
          ]
},
        },
        {
          id: "satm-u3-data-interpretation-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain why extrapolation is risky even when a trend is clear, using the study-hours example.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "Extrapolation risk",
                              "statement": "Relationship may change."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The linear trend (+10/hour) holds WITHIN the data range but may break beyond — study effectiveness often diminishes (diminishing returns); predicting 110 for 5 hours assumes the trend continues indefinitely.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Real scores cap at 100 — extrapolating to 110 is impossible; the model fails at boundaries.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Interpolation (predicting 85 for 2.5 hours) is safe — within range; extrapolation requires assuming the relationship persists, which evidence doesn't guarantee.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Trend may not continue; boundaries exist",
          "commonErrors": [
                    "Trusting linear extrapolation blindly."
          ]
},
        },
      ],
    },
  ],
};
