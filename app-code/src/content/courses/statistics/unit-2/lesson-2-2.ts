import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "stats-u2-lesson-2-2",
  code: "2-2",
  title: "Probability Rules",
  goal: "I CAN apply addition and multiplication rules for probability.",
  standards: ["S-CP.A.1", "S-CP.A.2", "S-CP.A.3", "S-CP.A.4", "S-CP.A.5", "S-CP.B.6", "S-CP.B.7", "S-CP.B.8", "S-CP.B.9"],
  vocabulary: [
    { term: "Sample space", definition: "All possible outcomes." },
    { term: "Event", definition: "Subset of outcomes." },
    { term: "Mutually exclusive", definition: "Can't both happen." },
    { term: "Independent", definition: "One doesn't affect other." },
    { term: "Conditional", definition: "Given another event." },
  ],
  concepts: [
    {
      id: "stats-u2-probability-rules",
      title: "Probability rules",
      skill: "Apply addition and multiplication rules.",
      lesson: {
        sections: [
          {
            heading: "Addition rule",
            body: "P(A or B) = P(A) + P(B) - P(A and B). For mutually exclusive events, P(A and B) = 0, so P(A or B) = P(A) + P(B).",
          },
          {
            heading: "Multiplication rule",
            body: "P(A and B) = P(A) × P(B|A). For independent events, P(B|A) = P(B), so P(A and B) = P(A) × P(B). Conditional probability P(A|B) = P(A and B)/P(B).",
          },
        ],
        keyFormulas: [
          { name: "Addition", statement: "P(A)+P(B)-P(A∩B)." },
          { name: "Multiplication", statement: "P(A)×P(B|A)." },
          { name: "Conditional", statement: "P(A|B)=P(A∩B)/P(B)." },
        ],
        workedExample: {
          problem: "P(rain) = 0.3, P(cloudy) = 0.5, P(both) = 0.2. Find P(rain or cloudy).",
          solution: "$0.3 + 0.5 - 0.2 = 0.6$.",
        },
      },
      questions: [
        {
          id: "stats-u2-probability-rules-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "For mutually exclusive events, P(A and B) = ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "P(A) + P(B)"
                    },
                    {
                              "id": "b",
                              "text": "0"
                    },
                    {
                              "id": "c",
                              "text": "1"
                    },
                    {
                              "id": "d",
                              "text": "P(A) × P(B)"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Mutually exclusive",
                              "statement": "Can't co-occur, P(A∩B)=0."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Mutually exclusive events can't happen together, so P(A and B) = 0.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(b)** 0",
          "commonErrors": [
                    "Adding the probabilities."
          ]
},
        },
        {
          id: "stats-u2-probability-rules-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "P(A) = 0.4, P(B) = 0.5, independent. P(A and B) = ?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "0.9"
                    },
                    {
                              "id": "b",
                              "text": "0.2"
                    },
                    {
                              "id": "c",
                              "text": "0.45"
                    },
                    {
                              "id": "d",
                              "text": "0.1"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Independent",
                              "statement": "P(A)×P(B) = 0.4×0.5."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Independent: $P(A \\cap B) = 0.4 \\times 0.5 = 0.2$.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(b)** 0.2",
          "commonErrors": [
                    "Adding instead of multiplying."
          ]
},
        },
        {
          id: "stats-u2-probability-rules-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "P(A) = 0.6, P(B|A) = 0.5. What is P(A and B)?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Probability",
                              "answer": 0.3
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Multiplication",
                              "statement": "$P(A) \\times P(B|A) = 0.6 \\times 0.5$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$0.6 \\times 0.5 = 0.3$.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$0.3$",
          "commonErrors": [
                    "Adding instead of multiplying."
          ]
},
        },
        {
          id: "stats-u2-probability-rules-q4",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "P(A) = 0.5, P(B) = 0.4, P(A and B) = 0.2. Are A and B independent? Show your reasoning.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Independent",
                              "statement": "P(A)×P(B) = P(A∩B)."
                    },
                    {
                              "kind": "skill",
                              "name": "Test",
                              "statement": "Compare values."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "If independent, P(A∩B) should equal $0.5 \\times 0.4 = 0.2$. Since actual P(A∩B) = 0.2, the events ARE independent.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Correctly tests independence.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Yes — $0.5 \\times 0.4 = 0.2$ matches.**",
          "commonErrors": [
                    "Not comparing the two values."
          ]
},
        },
      ],
    },
  ],
};
