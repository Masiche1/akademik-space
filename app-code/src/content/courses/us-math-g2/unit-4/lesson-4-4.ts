import type { Lesson } from "../../../types.ts";

export const lesson44: Lesson = {
  id: "m2-u4-lesson-4-4",
  code: "4-4",
  title: "Fact Families",
  goal: "I CAN use fact families to solve addition and subtraction.",
  standards: ["2.OA.B.2", "2.NBT.B.7"],
  vocabulary: [
    { term: "Fact family", definition: "Related facts." },
    { term: "Inverse", definition: "Opposite operation." },
    { term: "Add", definition: "Combine amounts." },
    { term: "Subtract", definition: "Take away." },
    { term: "Missing", definition: "Unknown number." },
    { term: "Check", definition: "Verify answer." },
    { term: "True", definition: "Correct." },
    { term: "Balance", definition: "Equal on both sides." },
  ],
  concepts: [
    {
      id: "m2-u4-fact-families",
      title: "Fact families",
      skill: "Use related addition and subtraction facts to solve problems.",
      lesson: {
        sections: [
          {
            heading: "Facts work together",
            body: "A **fact family** is a set of related facts. If 5 + 3 = 8, then 8 - 3 = 5 and 8 - 5 = 3. Knowing one fact helps you know the others.",
          },
          {
            heading: "Use for missing numbers",
            body: "To find a **missing number**, use the **inverse** operation. 45 + ? = 72 -> 72 - 45 = 27.",
          },
        ],
        keyFormulas: [
          { name: "Fact family", statement: "If a + b = c, then c - b = a and c - a = b." },
        ],
        workedExample: {
          problem: "If 7 + 8 = 15, what is 15 - 8?",
          solution: "**7** — same fact family.",
        },
      },
      questions: [
        {
          id: "m2-u4-fact-families-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "If 6 + 7 = 13, what is 13 - 7?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "5"
                    },
                    {
                              "id": "b",
                              "text": "6"
                    },
                    {
                              "id": "c",
                              "text": "20"
                    },
                    {
                              "id": "d",
                              "text": "7"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Same fact family -> 6."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Same fact family -> 6.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "6",
          "commonErrors": [
                    "Wrong fact."
          ]
},
        },
        {
          id: "m2-u4-fact-families-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "A 'fact family' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "one fact"
                    },
                    {
                              "id": "b",
                              "text": "related addition/subtraction facts"
                    },
                    {
                              "id": "c",
                              "text": "a story"
                    },
                    {
                              "id": "d",
                              "text": "a graph"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Fact family = related facts."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Fact family = related facts.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "related facts",
          "commonErrors": [
                    "Picks wrong meaning."
          ]
},
        },
        {
          id: "m2-u4-fact-families-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Write the fact family for 9 + 6 = 15.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "fact",
                              "name": "Fact family",
                              "statement": "4 related facts."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "9 + 6 = 15.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "6 + 9 = 15.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "15 - 9 = 6.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "15 - 6 = 9.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "9+6=15; 6+9=15; 15-9=6; 15-6=9",
          "commonErrors": "Missing facts."
},
        },
        {
          id: "m2-u4-fact-families-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "If 8 + 7 = 15, what is 15 - 8?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Answer",
                              "answer": 7
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "reasoning",
                              "statement": "Same fact family -> 7."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "7",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "7",
          "commonErrors": [
                    "Wrong fact."
          ]
},
        },
        {
          id: "m2-u4-fact-families-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Use fact families to find: ? + 8 = 15 and 15 - ? = 7.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "fact",
                              "name": "Missing numbers",
                              "statement": "Use inverse."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "15 - 8 = 7.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "15 - 7 = 8.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "7 and 8",
          "commonErrors": "Wrong answers."
},
        },
        {
          id: "m2-u4-fact-families-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Fact family\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Opposite operation."
                    },
                    {
                              "id": "b",
                              "text": "Related facts."
                    },
                    {
                              "id": "c",
                              "text": "Combine amounts."
                    },
                    {
                              "id": "d",
                              "text": "Take away."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Fact family\" means Related facts."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Fact family\" means Related facts.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Fact family** = Related facts.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m2-u4-fact-families-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Inverse\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Combine amounts."
                    },
                    {
                              "id": "b",
                              "text": "Take away."
                    },
                    {
                              "id": "c",
                              "text": "Unknown number."
                    },
                    {
                              "id": "d",
                              "text": "Opposite operation."
                    }
          ],
          "correctChoiceId": "d"
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
          id: "m2-u4-fact-families-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Add\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Take away."
                    },
                    {
                              "id": "b",
                              "text": "Combine amounts."
                    },
                    {
                              "id": "c",
                              "text": "Unknown number."
                    },
                    {
                              "id": "d",
                              "text": "Verify answer."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Add\" means Combine amounts."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Add\" means Combine amounts.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Add** = Combine amounts.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
