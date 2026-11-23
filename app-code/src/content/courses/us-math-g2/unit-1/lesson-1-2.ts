import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "m2-u1-lesson-1-2",
  code: "1-2",
  title: "Tens and Ones",
  goal: "I CAN identify tens and ones in numbers to 100.",
  standards: ["2.NBT.A.1"],
  vocabulary: [
    { term: "Tens", definition: "Groups of ten." },
    { term: "Ones", definition: "Single digits." },
    { term: "Digit", definition: "A number symbol." },
    { term: "Place value", definition: "What a digit is worth." },
    { term: "Decompose", definition: "Break into parts." },
    { term: "Compose", definition: "Put parts together." },
    { term: "Bundle", definition: "Group ten ones." },
    { term: "Unbundle", definition: "Break a ten." },
  ],
  concepts: [
    {
      id: "m2-u1-tens-ones",
      title: "Tens and ones",
      skill: "Numbers have tens and ones; decompose and compose them.",
      lesson: {
        sections: [
          {
            heading: "Two-digit numbers",
            body: "A two-digit number has a **tens** digit and an **ones** digit. 47 = 4 tens + 7 ones = 40 + 7.",
          },
          {
            heading: "Decompose and compose",
            body: "**Decompose** means break apart (47 = 40 + 7). **Compose** means put together (40 + 7 = 47).",
          },
        ],
        keyFormulas: [
          { name: "Tens and ones", statement: "47 = 4 tens + 7 ones = 40 + 7." },
          { name: "Compose", statement: "40 + 7 = 47" },
        ],
        workedExample: {
          problem: "Decompose 63 into tens and ones.",
          solution: "63 = 6 tens + 3 ones = 60 + 3.",
        },
      },
      questions: [
        {
          id: "m2-u1-tens-ones-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In 58, what is the tens digit?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "8"
                    },
                    {
                              "id": "b",
                              "text": "5"
                    },
                    {
                              "id": "c",
                              "text": "3"
                    },
                    {
                              "id": "d",
                              "text": "0"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "5 is in the tens place."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "5 is in the tens place.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "5",
          "commonErrors": [
                    "Picks ones digit."
          ]
},
        },
        {
          id: "m2-u1-tens-ones-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Decompose 72.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "7 + 2"
                    },
                    {
                              "id": "b",
                              "text": "70 + 2"
                    },
                    {
                              "id": "c",
                              "text": "60 + 12"
                    },
                    {
                              "id": "d",
                              "text": "7 + 20"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "72 = 70 + 2."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "72 = 70 + 2.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "70 + 2",
          "commonErrors": [
                    "Doesn't use place value."
          ]
},
        },
        {
          id: "m2-u1-tens-ones-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Decompose 85 into tens and ones. Then compose 60 + 4.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "place",
                              "name": "Tens/ones",
                              "statement": "Decompose + compose."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "85 = 80 + 5.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "60 + 4 = 64.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "85 = 80 + 5; 60 + 4 = 64",
          "commonErrors": "Wrong decomposition."
},
        },
        {
          id: "m2-u1-tens-ones-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "How many tens are in 90?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Answer",
                              "answer": 9
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "reasoning",
                              "statement": "90 = 9 tens."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "9",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "9",
          "commonErrors": [
                    "Counts ones."
          ]
},
        },
        {
          id: "m2-u1-tens-ones-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Decompose 46 and compose 30 + 8. Explain what each digit means.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "place",
                              "name": "Tens/ones",
                              "statement": "Decompose + compose + meaning."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "46 = 40 + 6.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "30 + 8 = 38.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "46 = 40 + 6; 30 + 8 = 38",
          "commonErrors": "Wrong values."
},
        },
        {
          id: "m2-u1-tens-ones-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Tens\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Single digits."
                    },
                    {
                              "id": "b",
                              "text": "Groups of ten."
                    },
                    {
                              "id": "c",
                              "text": "A number symbol."
                    },
                    {
                              "id": "d",
                              "text": "What a digit is worth."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Tens\" means Groups of ten."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Tens\" means Groups of ten.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Tens** = Groups of ten.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m2-u1-tens-ones-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Ones\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A number symbol."
                    },
                    {
                              "id": "b",
                              "text": "What a digit is worth."
                    },
                    {
                              "id": "c",
                              "text": "Break into parts."
                    },
                    {
                              "id": "d",
                              "text": "Single digits."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Ones\" means Single digits."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Ones\" means Single digits.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Ones** = Single digits.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m2-u1-tens-ones-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Digit\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "What a digit is worth."
                    },
                    {
                              "id": "b",
                              "text": "A number symbol."
                    },
                    {
                              "id": "c",
                              "text": "Break into parts."
                    },
                    {
                              "id": "d",
                              "text": "Put parts together."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Digit\" means A number symbol."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Digit\" means A number symbol.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Digit** = A number symbol.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
