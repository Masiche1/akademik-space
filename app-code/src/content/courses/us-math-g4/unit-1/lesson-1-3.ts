import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "m4-u1-lesson-1-3",
  code: "1-3",
  title: "Rounding",
  goal: "I CAN round numbers to any place value.",
  standards: ["4.NBT.A.3"],
  vocabulary: [
    { term: "Round", definition: "Make approximate." },
    { term: "Nearest", definition: "Closest value." },
    { term: "Digit", definition: "Single number." },
    { term: "Round up", definition: "Go to next." },
    { term: "Round down", definition: "Stay same." },
    { term: "Place value", definition: "Position in number." },
    { term: "Approximate", definition: "Close enough." },
    { term: "Estimate", definition: "Good guess." },
  ],
  concepts: [
    {
      id: "m4-u1-rounding",
      title: "Rounding",
      skill: "Round numbers to the nearest ten, hundred, thousand, etc.",
      lesson: {
        sections: [
          {
            heading: "How to round",
            body: "To **round**, look at the digit to the **right** of the place you're rounding to. If it's **5 or more**, **round up**; if **less than 5**, **round down**.",
          },
          {
            heading: "Example",
            body: "Round 4,567 to nearest hundred: look at tens digit (6 >= 5), so round up to **4,600**.",
          },
        ],
        keyFormulas: [
          { name: "Round", statement: "Right digit >= 5 -> up; < 5 -> down." },
        ],
        workedExample: {
          problem: "Round 3,456 to the nearest thousand.",
          solution: "Hundreds digit is 4 (< 5), so round down to **3,000**.",
        },
      },
      questions: [
        {
          id: "m4-u1-rounding-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Round 4,567 to the nearest hundred.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "4,500"
                    },
                    {
                              "id": "b",
                              "text": "4,600"
                    },
                    {
                              "id": "c",
                              "text": "4,570"
                    },
                    {
                              "id": "d",
                              "text": "5,000"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Tens digit 6 >= 5, round up to 4,600."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Tens digit 6 >= 5, round up to 4,600.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "4,600",
          "commonErrors": [
                    "Looks at wrong digit."
          ]
},
        },
        {
          id: "m4-u1-rounding-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Round 7,432 to the nearest thousand.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "7,000"
                    },
                    {
                              "id": "b",
                              "text": "7,400"
                    },
                    {
                              "id": "c",
                              "text": "8,000"
                    },
                    {
                              "id": "d",
                              "text": "7,500"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Hundreds digit 4 < 5, round down to 7,000."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Hundreds digit 4 < 5, round down to 7,000.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "7,000",
          "commonErrors": [
                    "Rounds wrong place."
          ]
},
        },
        {
          id: "m4-u1-rounding-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Round 5,678 to the nearest ten AND the nearest hundred.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Round",
                              "statement": "Nearest ten + hundred."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Rounds to ten.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Rounds to hundred.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**Nearest ten: 5,680; nearest hundred: 5,700**",
          "commonErrors": [
                    "Wrong rounding.",
                    "Only one place."
          ]
},
        },
        {
          id: "m4-u1-rounding-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Round 9,876 to the nearest thousand.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "9,000"
                    },
                    {
                              "id": "b",
                              "text": "10,000"
                    },
                    {
                              "id": "c",
                              "text": "9,900"
                    },
                    {
                              "id": "d",
                              "text": "9,800"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Hundreds digit 8 >= 5, round up to 10,000."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Hundreds digit 8 >= 5, round up to 10,000.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "10,000",
          "commonErrors": [
                    "Rounds down instead."
          ]
},
        },
        {
          id: "m4-u1-rounding-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Round 2,345 to the nearest hundred and explain your reasoning.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Round",
                              "statement": "2,300 or 2,400."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Rounds correctly.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Explains reasoning.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**2,300; tens digit 4 < 5, round down**",
          "commonErrors": [
                    "Wrong rounding.",
                    "No explanation."
          ]
},
        },
        {
          id: "m4-u1-rounding-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Round\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Closest value."
                    },
                    {
                              "id": "b",
                              "text": "Make approximate."
                    },
                    {
                              "id": "c",
                              "text": "Single number."
                    },
                    {
                              "id": "d",
                              "text": "Go to next."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Round\" means Make approximate."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Round\" means Make approximate.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Round** = Make approximate.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m4-u1-rounding-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Nearest\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Single number."
                    },
                    {
                              "id": "b",
                              "text": "Go to next."
                    },
                    {
                              "id": "c",
                              "text": "Stay same."
                    },
                    {
                              "id": "d",
                              "text": "Closest value."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Nearest\" means Closest value."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Nearest\" means Closest value.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Nearest** = Closest value.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m4-u1-rounding-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Digit\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Go to next."
                    },
                    {
                              "id": "b",
                              "text": "Single number."
                    },
                    {
                              "id": "c",
                              "text": "Stay same."
                    },
                    {
                              "id": "d",
                              "text": "Position in number."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Digit\" means Single number."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Digit\" means Single number.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Digit** = Single number.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
