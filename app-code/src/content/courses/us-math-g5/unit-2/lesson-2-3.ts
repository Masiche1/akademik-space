import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "m5-u2-lesson-2-3",
  code: "2-3",
  title: "Mixed Numbers",
  goal: "I CAN add and subtract mixed numbers.",
  standards: ["5.NF.A.1"],
  vocabulary: [
    { term: "Mixed number", definition: "Whole + fraction." },
    { term: "Improper fraction", definition: "Top > bottom." },
    { term: "Convert", definition: "Change form." },
    { term: "Add", definition: "Combine." },
    { term: "Subtract", definition: "Take away." },
    { term: "Regroup", definition: "Borrow." },
    { term: "Simplify", definition: "Make smaller." },
    { term: "Equivalent", definition: "Same amount." },
  ],
  concepts: [
    {
      id: "m5-u2-mixed-numbers",
      title: "Mixed numbers",
      skill: "Add and subtract mixed numbers by converting or regrouping.",
      lesson: {
        sections: [
          {
            heading: "Two methods",
            body: "Either convert to **improper fractions**, operate, convert back; or add/subtract **whole numbers** and **fractions** separately, regrouping if needed.",
          },
          {
            heading: "Example",
            body: "$2\\frac{1}{2} + 1\\frac{3}{4}$: wholes 2+1=3; fractions 1/2+3/4=5/4=1 1/4; total **4 3/4**.",
          },
        ],
        keyFormulas: [
          { name: "Mixed", statement: "Wholes + fractions separately, then combine." },
        ],
        workedExample: {
          problem: "Calculate $3\\frac{1}{2} - 1\\frac{3}{4}$.",
          solution: "Wholes: 3-1=2; fractions: 1/2-3/4 needs borrow: 1 2/4 - 3/4 = 2/4; total **1 3/4**.",
        },
      },
      questions: [
        {
          id: "m5-u2-mixed-numbers-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is $2\\frac{1}{2} + 1\\frac{1}{4}$?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "3 1/4"
                    },
                    {
                              "id": "b",
                              "text": "3 3/4"
                    },
                    {
                              "id": "c",
                              "text": "4 1/4"
                    },
                    {
                              "id": "d",
                              "text": "3 1/2"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Wholes 3; fractions 1/2+1/4=3/4; total 3 3/4."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Wholes 3; fractions 1/2+1/4=3/4; total 3 3/4.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "3 3/4",
          "commonErrors": [
                    "Wrong fractions."
          ]
},
        },
        {
          id: "m5-u2-mixed-numbers-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is $4\\frac{1}{3} - 2\\frac{1}{2}$?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "1 5/6"
                    },
                    {
                              "id": "b",
                              "text": "2 5/6"
                    },
                    {
                              "id": "c",
                              "text": "1 1/6"
                    },
                    {
                              "id": "d",
                              "text": "2 1/6"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Wholes 2; fractions 1/3-1/2 borrow: 1 1/3 - 1/2 = 5/6; total 1 5/6."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Wholes 2; fractions 1/3-1/2 borrow: 1 1/3 - 1/2 = 5/6; total 1 5/6.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "1 5/6",
          "commonErrors": [
                    "Wrong regrouping."
          ]
},
        },
        {
          id: "m5-u2-mixed-numbers-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Add $3\\frac{2}{3} + 2\\frac{1}{4}$ and subtract $5\\frac{1}{2} - 2\\frac{3}{4}$. Show work.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Mixed",
                              "statement": "6 1/12 and 2 3/4."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Adds and subtracts.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**3 2/3+2 1/4 = 6 1/12; 5 1/2-2 3/4 = 2 3/4**",
          "commonErrors": [
                    "Wrong answers.",
                    "No regrouping."
          ]
},
        },
        {
          id: "m5-u2-mixed-numbers-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "To subtract mixed numbers, you may need to...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "add them"
                    },
                    {
                              "id": "b",
                              "text": "regroup/borrow from whole number"
                    },
                    {
                              "id": "c",
                              "text": "convert to decimals"
                    },
                    {
                              "id": "d",
                              "text": "ignore fractions"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Regroup/borrow."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Regroup/borrow.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "regroup/borrow from whole number",
          "commonErrors": [
                    "Wrong method."
          ]
},
        },
        {
          id: "m5-u2-mixed-numbers-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Calculate $7\\frac{3}{4} - 4\\frac{5}{8}$. Show how you borrow.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Mixed",
                              "statement": "3 1/8."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Borrows correctly.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Correct answer.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**Wholes 3; fractions 3/4-5/8 = 6/8-5/8 = 1/8; total 3 1/8**",
          "commonErrors": [
                    "Wrong answer.",
                    "No borrowing."
          ]
},
        },
        {
          id: "m5-u2-mixed-numbers-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Mixed number\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Top > bottom."
                    },
                    {
                              "id": "b",
                              "text": "Whole + fraction."
                    },
                    {
                              "id": "c",
                              "text": "Change form."
                    },
                    {
                              "id": "d",
                              "text": "Combine."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Mixed number\" means Whole + fraction."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Mixed number\" means Whole + fraction.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Mixed number** = Whole + fraction.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m5-u2-mixed-numbers-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Improper fraction\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Change form."
                    },
                    {
                              "id": "b",
                              "text": "Combine."
                    },
                    {
                              "id": "c",
                              "text": "Take away."
                    },
                    {
                              "id": "d",
                              "text": "Top > bottom."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Improper fraction\" means Top > bottom."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Improper fraction\" means Top > bottom.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Improper fraction** = Top > bottom.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m5-u2-mixed-numbers-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Convert\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Combine."
                    },
                    {
                              "id": "b",
                              "text": "Change form."
                    },
                    {
                              "id": "c",
                              "text": "Take away."
                    },
                    {
                              "id": "d",
                              "text": "Borrow."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Convert\" means Change form."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Convert\" means Change form.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Convert** = Change form.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
