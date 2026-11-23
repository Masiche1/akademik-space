import type { Lesson } from "../../../types.ts";

export const lesson42: Lesson = {
  id: "m5-u4-lesson-4-2",
  code: "4-2",
  title: "Decimal Addition and Subtraction",
  goal: "I CAN add and subtract decimals.",
  standards: ["5.NBT.B.7"],
  vocabulary: [
    { term: "Decimal", definition: "Base-ten fraction." },
    { term: "Add", definition: "Combine." },
    { term: "Subtract", definition: "Take away." },
    { term: "Point", definition: "Decimal point." },
    { term: "Align", definition: "Line up points." },
    { term: "Place value", definition: "Position." },
    { term: "Regroup", definition: "Carry/borrow." },
    { term: "Estimate", definition: "Check." },
  ],
  concepts: [
    {
      id: "m5-u4-decimal-add-sub",
      title: "Decimal addition and subtraction",
      skill: "Add and subtract decimals by aligning decimal points.",
      lesson: {
        sections: [
          {
            heading: "Align points",
            body: "To add/subtract decimals, **line up decimal points** and operate right to left, just like whole numbers.",
          },
          {
            heading: "Example",
            body: "$3.45 + 2.7$: align points: 3.45 + 2.70 = **6.15**.",
          },
        ],
        keyFormulas: [
          { name: "Add/subtract", statement: "Align decimal points -> operate -> keep point." },
        ],
        workedExample: {
          problem: "Calculate $5.67 - 2.34$.",
          solution: "5.67 - 2.34 = **3.33**.",
        },
      },
      questions: [
        {
          id: "m5-u4-decimal-add-sub-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is $3.45 + 2.7$?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "6.15"
                    },
                    {
                              "id": "b",
                              "text": "6.05"
                    },
                    {
                              "id": "c",
                              "text": "5.15"
                    },
                    {
                              "id": "d",
                              "text": "61.5"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "3.45 + 2.70 = 6.15."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "3.45 + 2.70 = 6.15.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "6.15",
          "commonErrors": [
                    "Wrong sum."
          ]
},
        },
        {
          id: "m5-u4-decimal-add-sub-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is $8.9 - 3.45$?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "5.55"
                    },
                    {
                              "id": "b",
                              "text": "5.45"
                    },
                    {
                              "id": "c",
                              "text": "4.55"
                    },
                    {
                              "id": "d",
                              "text": "55.5"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "8.90 - 3.45 = 5.45."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "8.90 - 3.45 = 5.45.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "5.45",
          "commonErrors": [
                    "Wrong difference."
          ]
},
        },
        {
          id: "m5-u4-decimal-add-sub-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Add $4.56 + 3.7$ and subtract $9.8 - 4.56$. Show aligned decimals.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Decimal ops",
                              "statement": "8.26 and 5.24."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Adds and subtracts.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**4.56+3.70 = 8.26; 9.80-4.56 = 5.24**",
          "commonErrors": [
                    "Wrong answers.",
                    "Not aligned."
          ]
},
        },
        {
          id: "m5-u4-decimal-add-sub-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "When adding decimals, you should...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "add right to left ignoring points"
                    },
                    {
                              "id": "b",
                              "text": "line up decimal points"
                    },
                    {
                              "id": "c",
                              "text": "move points"
                    },
                    {
                              "id": "d",
                              "text": "round first"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Align decimal points."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Align decimal points.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "line up decimal points",
          "commonErrors": [
                    "Wrong method."
          ]
},
        },
        {
          id: "m5-u4-decimal-add-sub-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Add $12.34 + 5.6 + 0.789$. Show each step.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Decimal ops",
                              "statement": "18.729."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Aligns correctly.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Correct sum.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**12.340 + 5.600 + 0.789 = 18.729**",
          "commonErrors": [
                    "Wrong sum.",
                    "Not aligned."
          ]
},
        },
        {
          id: "m5-u4-decimal-add-sub-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Decimal\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Combine."
                    },
                    {
                              "id": "b",
                              "text": "Base-ten fraction."
                    },
                    {
                              "id": "c",
                              "text": "Take away."
                    },
                    {
                              "id": "d",
                              "text": "Decimal point."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Decimal\" means Base-ten fraction."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Decimal\" means Base-ten fraction.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Decimal** = Base-ten fraction.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m5-u4-decimal-add-sub-q7",
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
                              "text": "Decimal point."
                    },
                    {
                              "id": "c",
                              "text": "Line up points."
                    },
                    {
                              "id": "d",
                              "text": "Combine."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Add\" means Combine."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Add\" means Combine.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Add** = Combine.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m5-u4-decimal-add-sub-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Subtract\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Decimal point."
                    },
                    {
                              "id": "b",
                              "text": "Take away."
                    },
                    {
                              "id": "c",
                              "text": "Line up points."
                    },
                    {
                              "id": "d",
                              "text": "Position."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Subtract\" means Take away."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Subtract\" means Take away.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Subtract** = Take away.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
