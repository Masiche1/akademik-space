import type { Lesson } from "../../../types.ts";

export const lesson54: Lesson = {
  id: "m6-u5-lesson-5-4",
  code: "5-4",
  title: "Probability Basics",
  goal: "I CAN find simple probabilities.",
  standards: ["6.SP.A.4"],
  vocabulary: [
    { term: "Probability", definition: "Likelihood of event." },
    { term: "Event", definition: "What might happen." },
    { term: "Outcome", definition: "Result." },
    { term: "Sample space", definition: "All outcomes." },
    { term: "Fraction", definition: "Part/whole." },
    { term: "Percent", definition: "Per hundred." },
    { term: "Independent", definition: "Unrelated events." },
    { term: "Certain", definition: "Will happen." },
  ],
  concepts: [
    {
      id: "m6-u5-probability-basics",
      title: "Probability basics",
      skill: "Find simple probabilities as fractions, decimals or percents.",
      lesson: {
        sections: [
          {
            heading: "Likelihood",
            body: "**Probability** = favorable outcomes / total outcomes, from 0 (impossible) to 1 (certain).",
          },
          {
            heading: "Example",
            body: "P(rolling a 3 on die) = 1/6 ≈ 0.167 ≈ 16.7%.",
          },
        ],
        keyFormulas: [
          { name: "Probability", statement: "Favorable / total outcomes." },
        ],
        workedExample: {
          problem: "What is P(drawing a red marble from 3 red, 5 blue)?",
          solution: "3/8 = 0.375 = 37.5%.",
        },
      },
      questions: [
        {
          id: "m6-u5-probability-basics-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Probability of rolling a 6 on a die is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "1/6"
                    },
                    {
                              "id": "b",
                              "text": "1/2"
                    },
                    {
                              "id": "c",
                              "text": "1/3"
                    },
                    {
                              "id": "d",
                              "text": "6"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "1 favorable / 6 total."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "1 favorable / 6 total.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "1/6",
          "commonErrors": [
                    "Wrong probability."
          ]
},
        },
        {
          id: "m6-u5-probability-basics-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Probability ranges from...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "0 to 100"
                    },
                    {
                              "id": "b",
                              "text": "0 to 1"
                    },
                    {
                              "id": "c",
                              "text": "-1 to 1"
                    },
                    {
                              "id": "d",
                              "text": "1 to 10"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "0 to 1."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "0 to 1.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "0 to 1",
          "commonErrors": [
                    "Wrong range."
          ]
},
        },
        {
          id: "m6-u5-probability-basics-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Find the probability of: drawing a king from a deck (4/52), rolling an even number (3/6), flipping heads (1/2).",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Probability",
                              "statement": "4/52=1/13, 1/2, 1/2."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Finds all three.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**King: 4/52 = 1/13; Even: 3/6 = 1/2; Heads: 1/2.**",
          "commonErrors": [
                    "Wrong probabilities.",
                    "Missing events."
          ]
},
        },
        {
          id: "m6-u5-probability-basics-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A probability of 1 means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "impossible"
                    },
                    {
                              "id": "b",
                              "text": "certain"
                    },
                    {
                              "id": "c",
                              "text": "unlikely"
                    },
                    {
                              "id": "d",
                              "text": "50%"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Certain."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Certain.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "certain",
          "commonErrors": [
                    "Wrong meaning."
          ]
},
        },
        {
          id: "m6-u5-probability-basics-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Explain how you calculate probability and what each part of the fraction means.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Probability",
                              "statement": "Favorable/total."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Explains calculation.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Explains parts.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**Numerator = favorable outcomes; Denominator = total possible outcomes.**",
          "commonErrors": [
                    "Cannot explain.",
                    "No parts."
          ]
},
        },
        {
          id: "m6-u5-probability-basics-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Probability\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "What might happen."
                    },
                    {
                              "id": "b",
                              "text": "Likelihood of event."
                    },
                    {
                              "id": "c",
                              "text": "Result."
                    },
                    {
                              "id": "d",
                              "text": "All outcomes."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Probability\" means Likelihood of event."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Probability\" means Likelihood of event.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Probability** = Likelihood of event.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m6-u5-probability-basics-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Event\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Result."
                    },
                    {
                              "id": "b",
                              "text": "All outcomes."
                    },
                    {
                              "id": "c",
                              "text": "Part/whole."
                    },
                    {
                              "id": "d",
                              "text": "What might happen."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Event\" means What might happen."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Event\" means What might happen.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Event** = What might happen.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m6-u5-probability-basics-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Outcome\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "All outcomes."
                    },
                    {
                              "id": "b",
                              "text": "Result."
                    },
                    {
                              "id": "c",
                              "text": "Part/whole."
                    },
                    {
                              "id": "d",
                              "text": "Per hundred."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Outcome\" means Result."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Outcome\" means Result.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Outcome** = Result.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
