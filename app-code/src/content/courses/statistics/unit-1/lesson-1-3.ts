import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "stats-u1-lesson-1-3",
  code: "1-3",
  title: "Two-Way Tables",
  goal: "I CAN interpret and construct two-way frequency tables.",
  standards: ["S-ID.A.4", "S-ID.B.6"],
  vocabulary: [
    { term: "Two-way table", definition: "Cross-classification." },
    { term: "Marginal", definition: "Row/column totals." },
    { term: "Joint frequency", definition: "Cell count." },
    { term: "Conditional", definition: "Within a category." },
    { term: "Relative frequency", definition: "Proportion of total." },
  ],
  concepts: [
    {
      id: "stats-u1-two-way-tables",
      title: "Two-way tables",
      skill: "Interpret and construct two-way frequency tables.",
      lesson: {
        sections: [
          {
            heading: "Reading tables",
            body: "Two-way tables classify individuals by two categorical variables (e.g., gender × preference). Marginal frequencies are row/column totals; joint frequencies are cell counts; conditional frequencies are within a row or column.",
          },
          {
            heading: "Relative frequencies",
            body: "Dividing by total gives proportions. Dividing by row/column total gives conditional proportions — e.g., P(prefer A | female) uses only the female row total.",
          },
        ],
        keyFormulas: [
          { name: "Marginal", statement: "Row/column total." },
          { name: "Joint", statement: "Cell count." },
          { name: "Conditional", statement: "Within category." },
        ],
        workedExample: {
          problem: "A table shows 30 males, 20 prefer A; 50 females, 40 prefer A. What is P(prefer A | female)?",
          solution: "$40/(50) = 0.8$ — 80% of females prefer A.",
        },
      },
      questions: [
        {
          id: "stats-u1-two-way-tables-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A marginal frequency is ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a cell count"
                    },
                    {
                              "id": "b",
                              "text": "a row or column total"
                    },
                    {
                              "id": "c",
                              "text": "a percentage"
                    },
                    {
                              "id": "d",
                              "text": "the grand total"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Marginal",
                              "statement": "Row/column total."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Marginal frequencies are the row and column totals in a two-way table.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(b)** a row or column total",
          "commonErrors": [
                    "Confusing with joint frequency."
          ]
},
        },
        {
          id: "stats-u1-two-way-tables-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "P(prefer A | female) means ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "of all females, proportion preferring A"
                    },
                    {
                              "id": "b",
                              "text": "of all who prefer A, proportion female"
                    },
                    {
                              "id": "c",
                              "text": "total preferring A"
                    },
                    {
                              "id": "d",
                              "text": "total females"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Conditional",
                              "statement": "Condition first = denominator."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "P(A|female) = prefer A among females only = female row count preferring A / total females.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(a)** of all females, proportion preferring A",
          "commonErrors": [
                    "Reversing the condition."
          ]
},
        },
        {
          id: "stats-u1-two-way-tables-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "A two-way table has 3 rows and 4 columns. How many cells?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Cells",
                              "answer": 12
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Multiply",
                              "statement": "$3 \\times 4 = 12$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$3 \\times 4 = 12$ cells.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$12$",
          "commonErrors": [
                    "Adding instead of multiplying."
          ]
},
        },
        {
          id: "stats-u1-two-way-tables-q4",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "In a survey, 60 students were asked about lunch preference: 30 chose pizza, 30 chose salad. Of pizza choosers, 18 were male; of salad choosers, 12 were male. Find P(male | chose pizza).",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Conditional",
                              "statement": "Within pizza group."
                    },
                    {
                              "kind": "technique",
                              "name": "Compute",
                              "statement": "18/30."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "P(male|pizza) = males who chose pizza / total pizza choosers = $18/30 = 0.6$ = 60%.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Correct conditional probability.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**0.6 (60%).**",
          "commonErrors": [
                    "Using total males as denominator."
          ]
},
        },
      ],
    },
  ],
};
