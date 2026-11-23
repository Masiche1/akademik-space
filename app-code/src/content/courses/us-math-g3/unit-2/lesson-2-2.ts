import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "m3-u2-lesson-2-2",
  code: "2-2",
  title: "Multiplication Facts to 10",
  goal: "I CAN recall multiplication facts to 10 x 10.",
  standards: ["3.OA.A.1", "3.OA.C.7"],
  vocabulary: [
    { term: "Fact", definition: "Multiplication equation." },
    { term: "Product", definition: "Answer." },
    { term: "Factor", definition: "Numbers multiplied." },
    { term: "Commutative", definition: "Order doesn't matter." },
    { term: "Zero", definition: "Anything x 0 = 0." },
    { term: "One", definition: "Anything x 1 = itself." },
    { term: "Square", definition: "Number x itself." },
    { term: "Fluency", definition: "Fast recall." },
  ],
  concepts: [
    {
      id: "m3-u2-multiply-facts",
      title: "Multiplication facts",
      skill: "Recall multiplication facts within 100 quickly and accurately.",
      lesson: {
        sections: [
          {
            heading: "Facts to know",
            body: "Know all multiplication facts through **10 x 10**. Special facts: anything x **0** = 0, anything x **1** = itself, **squares** (same number x itself).",
          },
          {
            heading: "Commutative property",
            body: "**Commutative** means order doesn't matter: $3 \\times 5 = 5 \\times 3 = 15$. This halves the facts you need to memorize.",
          },
        ],
        keyFormulas: [
          { name: "Facts", statement: "a x b = b x a." },
          { name: "Zero", statement: "a x 0 = 0." },
          { name: "One", statement: "a x 1 = a." },
        ],
        workedExample: {
          problem: "What is $7 \\times 8$? Use commutative property if needed.",
          solution: "$7 \\times 8 = 56$ (or $8 \\times 7 = 56$).",
        },
      },
      questions: [
        {
          id: "m3-u2-multiply-facts-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "$9 \\times 9$ equals...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "72"
                    },
                    {
                              "id": "b",
                              "text": "81"
                    },
                    {
                              "id": "c",
                              "text": "90"
                    },
                    {
                              "id": "d",
                              "text": "99"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "9 x 9 = 81."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "9 x 9 = 81.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "81",
          "commonErrors": [
                    "Wrong product."
          ]
},
        },
        {
          id: "m3-u2-multiply-facts-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "$5 \\times 6$ equals $6 \\times 5$ because...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "they are different"
                    },
                    {
                              "id": "b",
                              "text": "multiplication is commutative"
                    },
                    {
                              "id": "c",
                              "text": "they are both 30"
                    },
                    {
                              "id": "d",
                              "text": "zero property"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Commutative: order doesn't matter."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Commutative: order doesn't matter.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "commutative",
          "commonErrors": [
                    "Thinks different."
          ]
},
        },
        {
          id: "m3-u2-multiply-facts-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Solve $8 \\times 8$.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Answer",
                              "answer": 64
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "reasoning",
                              "statement": "8 x 8 = 64."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "64",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "64",
          "commonErrors": [
                    "Wrong product."
          ]
},
        },
        {
          id: "m3-u2-multiply-facts-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "Solve $10 \\times 7$.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Answer",
                              "answer": 70
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "reasoning",
                              "statement": "10 x 7 = 70."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "70",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "70",
          "commonErrors": [
                    "Wrong product."
          ]
},
        },
        {
          id: "m3-u2-multiply-facts-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Solve $6 \\times 9$ and $9 \\times 6$. Why are they the same?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Facts",
                              "statement": "6 x 9 = 54 = 9 x 6."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Solves both.",
                              "marks": 1,
                              "markCode": "M1"
                    },
                    {
                              "reasoning": "Explains commutative.",
                              "marks": 1,
                              "markCode": "M1"
                    }
          ],
          "finalAnswer": "**54 both; commutative**",
          "commonErrors": [
                    "Wrong answer.",
                    "No explanation."
          ]
},
        },
        {
          id: "m3-u2-multiply-facts-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Fact\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Answer."
                    },
                    {
                              "id": "b",
                              "text": "Multiplication equation."
                    },
                    {
                              "id": "c",
                              "text": "Numbers multiplied."
                    },
                    {
                              "id": "d",
                              "text": "Order doesn't matter."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Fact\" means Multiplication equation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Fact\" means Multiplication equation.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Fact** = Multiplication equation.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m3-u2-multiply-facts-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Product\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Numbers multiplied."
                    },
                    {
                              "id": "b",
                              "text": "Order doesn't matter."
                    },
                    {
                              "id": "c",
                              "text": "Anything x 0 = 0."
                    },
                    {
                              "id": "d",
                              "text": "Answer."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Product\" means Answer."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Product\" means Answer.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Product** = Answer.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m3-u2-multiply-facts-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Factor\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Order doesn't matter."
                    },
                    {
                              "id": "b",
                              "text": "Numbers multiplied."
                    },
                    {
                              "id": "c",
                              "text": "Anything x 0 = 0."
                    },
                    {
                              "id": "d",
                              "text": "Anything x 1 = itself."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Factor\" means Numbers multiplied."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Factor\" means Numbers multiplied.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Factor** = Numbers multiplied.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
