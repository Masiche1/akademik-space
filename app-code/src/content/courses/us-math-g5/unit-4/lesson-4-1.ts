import type { Lesson } from "../../../types.ts";

export const lesson41: Lesson = {
  id: "m5-u4-lesson-4-1",
  code: "4-1",
  title: "Decimal Place Value",
  goal: "I CAN read, write and compare decimals to thousandths.",
  standards: ["5.NBT.A.3"],
  vocabulary: [
    { term: "Decimal", definition: "Base-ten fraction." },
    { term: "Tenths", definition: "First decimal." },
    { term: "Hundredths", definition: "Second decimal." },
    { term: "Thousandths", definition: "Third decimal." },
    { term: "Point", definition: "Decimal point." },
    { term: "Place value", definition: "Position." },
    { term: "Compare", definition: "More or less." },
    { term: "Order", definition: "Sort." },
  ],
  concepts: [
    {
      id: "m5-u4-decimal-place-value",
      title: "Decimal place value",
      skill: "Read, write and compare decimals to thousandths.",
      lesson: {
        sections: [
          {
            heading: "Decimal places",
            body: "After the point: **tenths** (0.1), **hundredths** (0.01), **thousandths** (0.001). 0.345 = 3 tenths + 4 hundredths + 5 thousandths.",
          },
          {
            heading: "Compare",
            body: "Compare digit by digit: 0.456 > 0.445 because 5 > 4 in hundredths.",
          },
        ],
        keyFormulas: [
          { name: "Decimal", statement: "0.345 = 345/1000 = 3 tenths + 4 hundredths + 5 thousandths." },
        ],
        workedExample: {
          problem: "Write 0.625 in words.",
          solution: "Six hundred twenty-five thousandths.",
        },
      },
      questions: [
        {
          id: "m5-u4-decimal-place-value-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In 0.345, the 4 is in the...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "tenths"
                    },
                    {
                              "id": "b",
                              "text": "hundredths"
                    },
                    {
                              "id": "c",
                              "text": "thousandths"
                    },
                    {
                              "id": "d",
                              "text": "ones"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "4 is in hundredths place."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "4 is in hundredths place.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "hundredths",
          "commonErrors": [
                    "Wrong place."
          ]
},
        },
        {
          id: "m5-u4-decimal-place-value-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is greater: 0.456 or 0.445?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "0.445"
                    },
                    {
                              "id": "b",
                              "text": "0.456"
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
                              "statement": "5 > 4 in hundredths."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "5 > 4 in hundredths.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "0.456",
          "commonErrors": [
                    "Wrong comparison."
          ]
},
        },
        {
          id: "m5-u4-decimal-place-value-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Order these decimals: 0.5, 0.45, 0.05, 0.55, 0.005 from least to greatest.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Decimals",
                              "statement": "0.005 < 0.05 < 0.45 < 0.5 < 0.55."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Orders correctly.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**0.005 < 0.05 < 0.45 < 0.5 < 0.55**",
          "commonErrors": [
                    "Wrong order.",
                    "Missing decimals."
          ]
},
        },
        {
          id: "m5-u4-decimal-place-value-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "0.7 is equivalent to...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "7/10"
                    },
                    {
                              "id": "b",
                              "text": "7/100"
                    },
                    {
                              "id": "c",
                              "text": "70/100"
                    },
                    {
                              "id": "d",
                              "text": "0.07"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "0.7 = 7/10."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "0.7 = 7/10.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "7/10",
          "commonErrors": [
                    "Wrong fraction."
          ]
},
        },
        {
          id: "m5-u4-decimal-place-value-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Compare 0.345 and 0.35. Which is greater? Explain using place value.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Decimals",
                              "statement": "0.35 > 0.345."
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
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**0.35 > 0.345; 35 hundredths > 34.5 hundredths**",
          "commonErrors": [
                    "Wrong comparison.",
                    "No explanation."
          ]
},
        },
        {
          id: "m5-u4-decimal-place-value-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Decimal\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "First decimal."
                    },
                    {
                              "id": "b",
                              "text": "Base-ten fraction."
                    },
                    {
                              "id": "c",
                              "text": "Second decimal."
                    },
                    {
                              "id": "d",
                              "text": "Third decimal."
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
          id: "m5-u4-decimal-place-value-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Tenths\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Second decimal."
                    },
                    {
                              "id": "b",
                              "text": "Third decimal."
                    },
                    {
                              "id": "c",
                              "text": "Decimal point."
                    },
                    {
                              "id": "d",
                              "text": "First decimal."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Tenths\" means First decimal."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Tenths\" means First decimal.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Tenths** = First decimal.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m5-u4-decimal-place-value-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Hundredths\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Third decimal."
                    },
                    {
                              "id": "b",
                              "text": "Second decimal."
                    },
                    {
                              "id": "c",
                              "text": "Decimal point."
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
                              "statement": "\"Hundredths\" means Second decimal."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Hundredths\" means Second decimal.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Hundredths** = Second decimal.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
