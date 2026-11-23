import type { Lesson } from "../../../types.ts";

export const lesson53: Lesson = {
  id: "m4-u5-lesson-5-3",
  code: "5-3",
  title: "Decimals",
  goal: "I CAN read, write and compare decimals to hundredths.",
  standards: ["4.NF.C.6", "4.NF.C.7"],
  vocabulary: [
    { term: "Decimal", definition: "Base-ten fraction." },
    { term: "Tenths", definition: "First decimal place." },
    { term: "Hundredths", definition: "Second decimal place." },
    { term: "Point", definition: "Decimal point." },
    { term: "Compare", definition: "See which is more." },
    { term: "Order", definition: "Sort decimals." },
    { term: "Equivalent", definition: "Same value." },
    { term: "Place value", definition: "Position in number." },
  ],
  concepts: [
    {
      id: "m4-u5-decimals",
      title: "Decimals",
      skill: "Read, write and compare decimals to hundredths.",
      lesson: {
        sections: [
          {
            heading: "Decimal places",
            body: "After the decimal point: **tenths** (0.1), **hundredths** (0.01), **thousandths** (0.001). 0.25 = 2 tenths + 5 hundredths = 25 hundredths.",
          },
          {
            heading: "Compare decimals",
            body: "Compare digit by digit: 0.35 > 0.34 because 5 > 4 in hundredths place.",
          },
        ],
        keyFormulas: [
          { name: "Decimal", statement: "0.25 = 25/100 = 2 tenths + 5 hundredths." },
          { name: "Compare", statement: "Left to right; first different digit decides." },
        ],
        workedExample: {
          problem: "Compare 0.45 and 0.5. Which is greater?",
          solution: "0.5 = 0.50 > 0.45, so **0.5 > 0.45**.",
        },
      },
      questions: [
        {
          id: "m4-u5-decimals-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is greater: 0.45 or 0.5?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "0.45"
                    },
                    {
                              "id": "b",
                              "text": "0.5"
                    },
                    {
                              "id": "c",
                              "text": "equal"
                    },
                    {
                              "id": "d",
                              "text": "cannot tell"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "0.5 = 0.50 > 0.45."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "0.5 = 0.50 > 0.45.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "0.5",
          "commonErrors": [
                    "Thinks 45 > 50."
          ]
},
        },
        {
          id: "m4-u5-decimals-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is 0.35 in words?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "thirty-five tenths"
                    },
                    {
                              "id": "b",
                              "text": "thirty-five hundredths"
                    },
                    {
                              "id": "c",
                              "text": "three fifths"
                    },
                    {
                              "id": "d",
                              "text": "zero point thirty-five"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "0.35 = 35 hundredths."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "0.35 = 35 hundredths.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "thirty-five hundredths",
          "commonErrors": [
                    "Wrong place value."
          ]
},
        },
        {
          id: "m4-u5-decimals-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Order these decimals from least to greatest: 0.25, 0.5, 0.45, 0.05.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Decimals",
                              "statement": "0.05 < 0.25 < 0.45 < 0.5."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Orders correctly.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**0.05 < 0.25 < 0.45 < 0.5**",
          "commonErrors": [
                    "Wrong order.",
                    "Missing decimals."
          ]
},
        },
        {
          id: "m4-u5-decimals-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which decimal is equivalent to $\\frac{1}{2}$?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "0.5"
                    },
                    {
                              "id": "b",
                              "text": "0.05"
                    },
                    {
                              "id": "c",
                              "text": "0.2"
                    },
                    {
                              "id": "d",
                              "text": "0.02"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "1/2 = 0.5."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "1/2 = 0.5.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "0.5",
          "commonErrors": [
                    "Wrong conversion."
          ]
},
        },
        {
          id: "m4-u5-decimals-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Compare 0.75 and 0.7. Which is greater? Explain using place value.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Decimals",
                              "statement": "0.75 > 0.7."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Names greater.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Explains place value.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**0.75 > 0.7; 75 hundredths > 70 hundredths**",
          "commonErrors": [
                    "Wrong comparison.",
                    "No explanation."
          ]
},
        },
        {
          id: "m4-u5-decimals-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Decimal\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "First decimal place."
                    },
                    {
                              "id": "b",
                              "text": "Base-ten fraction."
                    },
                    {
                              "id": "c",
                              "text": "Second decimal place."
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
          id: "m4-u5-decimals-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Tenths\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Second decimal place."
                    },
                    {
                              "id": "b",
                              "text": "Decimal point."
                    },
                    {
                              "id": "c",
                              "text": "See which is more."
                    },
                    {
                              "id": "d",
                              "text": "First decimal place."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Tenths\" means First decimal place."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Tenths\" means First decimal place.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Tenths** = First decimal place.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m4-u5-decimals-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Hundredths\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Decimal point."
                    },
                    {
                              "id": "b",
                              "text": "Second decimal place."
                    },
                    {
                              "id": "c",
                              "text": "See which is more."
                    },
                    {
                              "id": "d",
                              "text": "Sort decimals."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Hundredths\" means Second decimal place."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Hundredths\" means Second decimal place.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Hundredths** = Second decimal place.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
