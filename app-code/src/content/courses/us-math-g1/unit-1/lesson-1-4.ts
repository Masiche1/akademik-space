import type { Lesson } from "../../../types.ts";

export const lesson14: Lesson = {
  id: "m1-u1-lesson-1-4",
  code: "1-4",
  title: "Place Value and Comparing",
  goal: "I CAN use tens and ones to compare numbers.",
  standards: ["1.NBT.B.2", "1.NBT.A.1"],
  vocabulary: [
    { term: "Place value", definition: "What a digit is worth based on position." },
    { term: "Tens", definition: "Worth 10 each." },
    { term: "Ones", definition: "Worth 1 each." },
    { term: "Compare", definition: "See which is more." },
    { term: "Greater", definition: "More tens or ones." },
    { term: "Less", definition: "Fewer tens or ones." },
    { term: "Order", definition: "Arrange by size." },
    { term: "Sequence", definition: "Numbers in order." },
  ],
  concepts: [
    {
      id: "m1-u1-place-value-compare",
      title: "Place value and comparing",
      skill: "Use tens and ones place value to compare and order numbers.",
      lesson: {
        sections: [
          {
            heading: "Place value decides",
            body: "The **tens** digit tells us more than the **ones** digit. **45** has 4 tens; **54** has 5 tens — so 54 is greater even though 5 < ... wait, compare the tens first.",
          },
          {
            heading: "Compare step by step",
            body: "To compare: look at **tens** first. If tens are equal, look at **ones**. 67 vs 76: 7 tens vs 6 tens — 76 is greater.",
          },
        ],
        keyFormulas: [
          { name: "Compare", statement: "Tens first, then ones." },
        ],
        workedExample: {
          problem: "Compare 82 and 79. Which is greater?",
          solution: "**82 > 79** — 8 tens > 7 tens.",
        },
      },
      questions: [
        {
          id: "m1-u1-place-value-compare-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is greater: 63 or 36?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "36"
                    },
                    {
                              "id": "b",
                              "text": "63"
                    },
                    {
                              "id": "c",
                              "text": "Equal"
                    },
                    {
                              "id": "d",
                              "text": "Cannot tell"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "63 has 6 tens > 3 tens."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "63 has 6 tens > 3 tens.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**63**",
          "commonErrors": [
                    "Compares ones first."
          ]
},
        },
        {
          id: "m1-u1-place-value-compare-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is less: 91 or 89?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "91"
                    },
                    {
                              "id": "b",
                              "text": "89"
                    },
                    {
                              "id": "c",
                              "text": "Equal"
                    },
                    {
                              "id": "d",
                              "text": "Cannot tell"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "89 has 8 tens < 9 tens."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "89 has 8 tens < 9 tens.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**89**",
          "commonErrors": [
                    "Wrong comparison."
          ]
},
        },
        {
          id: "m1-u1-place-value-compare-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "What number is between 45 and 47?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Between",
                              "answer": 46
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "46 is between 45 and 47."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "46 is between 45 and 47.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(46)**",
          "commonErrors": [
                    "Picks wrong number."
          ]
},
        },
        {
          id: "m1-u1-place-value-compare-q4",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Order these numbers from least to greatest: 52, 25, 45.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Order",
                              "statement": "Compare tens first."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Orders correctly.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Gives 25, 45, 52.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**25, 45, 52**",
          "commonErrors": [
                    "Wrong order.",
                    "Cannot order."
          ]
},
        },
        {
          id: "m1-u1-place-value-compare-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Place value\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Worth 10 each."
                    },
                    {
                              "id": "b",
                              "text": "What a digit is worth based on position."
                    },
                    {
                              "id": "c",
                              "text": "Worth 1 each."
                    },
                    {
                              "id": "d",
                              "text": "See which is more."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Place value\" means What a digit is worth based on position."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Place value\" means What a digit is worth based on position.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Place value** = What a digit is worth based on position.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m1-u1-place-value-compare-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Tens\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Worth 1 each."
                    },
                    {
                              "id": "b",
                              "text": "See which is more."
                    },
                    {
                              "id": "c",
                              "text": "More tens or ones."
                    },
                    {
                              "id": "d",
                              "text": "Worth 10 each."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Tens\" means Worth 10 each."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Tens\" means Worth 10 each.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Tens** = Worth 10 each.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m1-u1-place-value-compare-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Ones\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "See which is more."
                    },
                    {
                              "id": "b",
                              "text": "Worth 1 each."
                    },
                    {
                              "id": "c",
                              "text": "More tens or ones."
                    },
                    {
                              "id": "d",
                              "text": "Fewer tens or ones."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Ones\" means Worth 1 each."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Ones\" means Worth 1 each.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Ones** = Worth 1 each.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m1-u1-place-value-compare-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Compare\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "More tens or ones."
                    },
                    {
                              "id": "b",
                              "text": "Fewer tens or ones."
                    },
                    {
                              "id": "c",
                              "text": "Arrange by size."
                    },
                    {
                              "id": "d",
                              "text": "See which is more."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Compare\" means See which is more."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Compare\" means See which is more.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Compare** = See which is more.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
