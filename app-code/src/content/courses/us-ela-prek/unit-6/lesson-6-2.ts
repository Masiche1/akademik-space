import type { Lesson } from "../../../types.ts";

export const lesson62: Lesson = {
  id: "epk-u6-lesson-6-2",
  code: "6-2",
  title: "Letter Formation",
  goal: "I CAN form uppercase and lowercase letters correctly.",
  standards: ["ELOF-PK.LL.WRITE.2"],
  vocabulary: [
    { term: "Form", definition: "The shape and strokes of a letter." },
    { term: "Stroke", definition: "One line or curve in a letter." },
    { term: "Start point", definition: "Where you begin writing a letter." },
    { term: "Direction", definition: "Which way the strokes go." },
    { term: "Practice", definition: "Do it again to get better." },
  ],
  concepts: [
    {
      id: "epk-u6-letter-formation",
      title: "Letter formation",
      skill: "Form letters with correct strokes and direction.",
      lesson: {
        sections: [
          {
            heading: "How letters are made",
            body: "Each letter is made of **strokes** — lines and curves. 'L' is one vertical line and one horizontal line. 'O' is one circle. Start at the right point and go the right direction.",
          },
          {
            heading: "Practice strokes",
            body: "Trace letters in the air, on sand, or on paper. Say the letter name as you form it. Repetition builds muscle memory.",
          },
        ],
        keyFormulas: [
          { name: "Letter formation", statement: "Correct start point, stroke direction, and shape for each letter." },
        ],
        workedExample: {
          problem: "How do you write the letter 'T'?",
          solution: "Start at the top, draw a **horizontal line**, then a **vertical line down** through the middle.",
        },
      },
      questions: [
        {
          id: "epk-u6-letter-formation-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'stroke' in letter formation is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a whole word"
                    },
                    {
                              "id": "b",
                              "text": "one line or curve in a letter"
                    },
                    {
                              "id": "c",
                              "text": "a page"
                    },
                    {
                              "id": "d",
                              "text": "a sentence"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "A stroke is one line or curve."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "A stroke is one line or curve.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**One line or curve**",
          "commonErrors": [
                    "Confuses stroke with word."
          ]
},
        },
        {
          id: "epk-u6-letter-formation-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "To write 'L', you draw...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a circle"
                    },
                    {
                              "id": "b",
                              "text": "a vertical line and a horizontal line"
                    },
                    {
                              "id": "c",
                              "text": "a zigzag"
                    },
                    {
                              "id": "d",
                              "text": "two circles"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "L = vertical line down + horizontal line right."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "L = vertical line down + horizontal line right.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Vertical + horizontal lines**",
          "commonErrors": [
                    "Wrong strokes."
          ]
},
        },
        {
          id: "epk-u6-letter-formation-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Form the letter 'O' in the air. Describe the stroke you made.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Letter formation",
                              "statement": "O = one continuous circle."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Forms O as a circle.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**One continuous circle**",
          "commonErrors": [
                    "Cannot form O.",
                    "Wrong shape."
          ]
},
        },
        {
          id: "epk-u6-letter-formation-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why do we practice letter formation?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "It is boring"
                    },
                    {
                              "id": "b",
                              "text": "To build muscle memory for writing"
                    },
                    {
                              "id": "c",
                              "text": "To make letters big"
                    },
                    {
                              "id": "d",
                              "text": "No reason"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Practice builds the muscle memory for correct letters."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Practice builds the muscle memory for correct letters.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Build muscle memory**",
          "commonErrors": [
                    "Thinks practice is pointless."
          ]
},
        },
        {
          id: "epk-u6-letter-formation-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Write the letters A, B and C three times each. Are the strokes consistent?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Letter formation",
                              "statement": "Consistent strokes for each letter."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Writes each letter 3 times.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Strokes are consistent.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Yes, consistent strokes**",
          "commonErrors": [
                    "Inconsistent letters.",
                    "Cannot form letters."
          ]
},
        },
        {
          id: "epk-u6-letter-formation-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Form\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "One line or curve in a letter."
                    },
                    {
                              "id": "b",
                              "text": "The shape and strokes of a letter."
                    },
                    {
                              "id": "c",
                              "text": "Where you begin writing a letter."
                    },
                    {
                              "id": "d",
                              "text": "Which way the strokes go."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Form\" means The shape and strokes of a letter."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Form\" means The shape and strokes of a letter.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Form** = The shape and strokes of a letter.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "epk-u6-letter-formation-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Stroke\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Where you begin writing a letter."
                    },
                    {
                              "id": "b",
                              "text": "Which way the strokes go."
                    },
                    {
                              "id": "c",
                              "text": "Do it again to get better."
                    },
                    {
                              "id": "d",
                              "text": "One line or curve in a letter."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Stroke\" means One line or curve in a letter."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Stroke\" means One line or curve in a letter.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Stroke** = One line or curve in a letter.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "epk-u6-letter-formation-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Start point\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Which way the strokes go."
                    },
                    {
                              "id": "b",
                              "text": "Where you begin writing a letter."
                    },
                    {
                              "id": "c",
                              "text": "Do it again to get better."
                    },
                    {
                              "id": "d",
                              "text": "The shape and strokes of a letter."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Start point\" means Where you begin writing a letter."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Start point\" means Where you begin writing a letter.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Start point** = Where you begin writing a letter.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
