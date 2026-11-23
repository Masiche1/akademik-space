import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "m1-u2-lesson-2-3",
  code: "2-3",
  title: "Fact Families",
  goal: "I CAN use fact families to solve addition problems.",
  standards: ["1.OA.C.5", "1.OA.A.1", "1.OA.B.3"],
  vocabulary: [
    { term: "Fact family", definition: "Related addition and subtraction facts." },
    { term: "Related facts", definition: "Facts that use the same three numbers." },
    { term: "Inverse", definition: "Opposite operation." },
    { term: "Missing addend", definition: "The number you do not know." },
    { term: "Equation", definition: "Math sentence." },
    { term: "True", definition: "The equation is correct." },
    { term: "False", definition: "The equation is wrong." },
    { term: "Check", definition: "Verify the answer." },
  ],
  concepts: [
    {
      id: "m1-u2-fact-families",
      title: "Fact families",
      skill: "Use related addition facts (fact families) to find missing addends.",
      lesson: {
        sections: [
          {
            heading: "Fact families",
            body: "A **fact family** is a group of related facts using the same three numbers. For 3, 4, 7: $3 + 4 = 7$, $4 + 3 = 7$, $7 - 3 = 4$, $7 - 4 = 3$.",
          },
          {
            heading: "Find missing addend",
            body: "If you know $7 - 3 = 4$, then $3 + 4 = 7$ and $4 + ? = 7$ has answer 3. Fact families help us find **missing addends**.",
          },
        ],
        keyFormulas: [
          { name: "Fact family", statement: "3 + 4 = 7 and 4 + 3 = 7 (and 7-3=4, 7-4=3)" },
        ],
        workedExample: {
          problem: "If $5 + ? = 12$, what is the missing addend? Use fact family.",
          solution: "Fact family: 5, 7, 12. $5 + 7 = 12$, so **missing addend = 7**.",
        },
      },
      questions: [
        {
          id: "m1-u2-fact-families-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "If $6 + ? = 13$, what is the missing addend?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Missing",
                              "answer": 7
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "6 + 7 = 13."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "6 + 7 = 13.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(7)**",
          "commonErrors": [
                    "Adds wrong."
          ]
},
        },
        {
          id: "m1-u2-fact-families-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "If $8 + ? = 15$, what is the missing addend?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Missing",
                              "answer": 7
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "8 + 7 = 15."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "8 + 7 = 15.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(7)**",
          "commonErrors": [
                    "Adds wrong."
          ]
},
        },
        {
          id: "m1-u2-fact-families-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is in the same fact family as $4 + 5 = 9$?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "9 + 5 = 14"
                    },
                    {
                              "id": "b",
                              "text": "5 + 4 = 9"
                    },
                    {
                              "id": "c",
                              "text": "4 + 6 = 10"
                    },
                    {
                              "id": "d",
                              "text": "9 - 5 = 5"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Same numbers: 4, 5, 9."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Same numbers: 4, 5, 9.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**5 + 4 = 9**",
          "commonErrors": [
                    "Different numbers."
          ]
},
        },
        {
          id: "m1-u2-fact-families-q4",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Write the fact family for 6, 5, 11. Include two addition and two subtraction facts.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Fact family",
                              "statement": "6+5=11, 5+6=11, 11-6=5, 11-5=6."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Writes addition facts.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Writes subtraction facts.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**6+5=11, 5+6=11, 11-6=5, 11-5=6**",
          "commonErrors": [
                    "Wrong facts.",
                    "Missing type."
          ]
},
        },
        {
          id: "m1-u2-fact-families-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Fact family\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Facts that use the same three numbers."
                    },
                    {
                              "id": "b",
                              "text": "Related addition and subtraction facts."
                    },
                    {
                              "id": "c",
                              "text": "Opposite operation."
                    },
                    {
                              "id": "d",
                              "text": "The number you do not know."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Fact family\" means Related addition and subtraction facts."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Fact family\" means Related addition and subtraction facts.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Fact family** = Related addition and subtraction facts.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m1-u2-fact-families-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Related facts\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Opposite operation."
                    },
                    {
                              "id": "b",
                              "text": "The number you do not know."
                    },
                    {
                              "id": "c",
                              "text": "Math sentence."
                    },
                    {
                              "id": "d",
                              "text": "Facts that use the same three numbers."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Related facts\" means Facts that use the same three numbers."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Related facts\" means Facts that use the same three numbers.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Related facts** = Facts that use the same three numbers.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m1-u2-fact-families-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Inverse\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The number you do not know."
                    },
                    {
                              "id": "b",
                              "text": "Opposite operation."
                    },
                    {
                              "id": "c",
                              "text": "Math sentence."
                    },
                    {
                              "id": "d",
                              "text": "The equation is correct."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Inverse\" means Opposite operation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Inverse\" means Opposite operation.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Inverse** = Opposite operation.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m1-u2-fact-families-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Missing addend\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Math sentence."
                    },
                    {
                              "id": "b",
                              "text": "The equation is correct."
                    },
                    {
                              "id": "c",
                              "text": "The equation is wrong."
                    },
                    {
                              "id": "d",
                              "text": "The number you do not know."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Missing addend\" means The number you do not know."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Missing addend\" means The number you do not know.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Missing addend** = The number you do not know.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
