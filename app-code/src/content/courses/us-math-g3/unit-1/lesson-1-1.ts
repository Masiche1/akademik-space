import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "m3-u1-lesson-1-1",
  code: "1-1",
  title: "Place Value to 1000",
  goal: "I CAN read, write and compare numbers to 1000.",
  standards: ["3.NBT.A.1"],
  vocabulary: [
    { term: "Place value", definition: "Hundreds, tens, ones." },
    { term: "Three-digit", definition: "Number with 3 digits." },
    { term: "Hundreds", definition: "The 100s place." },
    { term: "Tens", definition: "The 10s place." },
    { term: "Ones", definition: "The 1s place." },
    { term: "Compare", definition: "See which is more." },
    { term: "Greater than", definition: "Bigger number." },
    { term: "Less than", definition: "Smaller number." },
  ],
  concepts: [
    {
      id: "m3-u1-place-value-1000",
      title: "Place value to 1000",
      skill: "Read, write and compare numbers to 1000.",
      lesson: {
        sections: [
          {
            heading: "Three-digit numbers",
            body: "Numbers to **1000** have **hundreds**, **tens** and **ones** places. In 472, the 4 is hundreds (400), 7 is tens (70), 2 is ones (2).",
          },
          {
            heading: "Comparing",
            body: "To **compare**, look at the **hundreds** digit first: 472 > 385 because 4 hundreds > 3 hundreds. If hundreds are equal, compare tens, then ones.",
          },
        ],
        keyFormulas: [
          { name: "Place value", statement: "Hundreds + tens + ones = number." },
          { name: "Compare", statement: "Hundreds first, then tens, then ones." },
        ],
        workedExample: {
          problem: "Compare 472 and 385. Which is greater?",
          solution: "**472** — 4 hundreds > 3 hundreds.",
        },
      },
      questions: [
        {
          id: "m3-u1-place-value-1000-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In 745, the value of 7 is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "7"
                    },
                    {
                              "id": "b",
                              "text": "70"
                    },
                    {
                              "id": "c",
                              "text": "700"
                    },
                    {
                              "id": "d",
                              "text": "7000"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "7 is in hundreds place = 700."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "7 is in hundreds place = 700.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "700",
          "commonErrors": [
                    "Reads digit only."
          ]
},
        },
        {
          id: "m3-u1-place-value-1000-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is greater: 472 or 385?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "385"
                    },
                    {
                              "id": "b",
                              "text": "472"
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
                              "statement": "4 hundreds > 3 hundreds."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "4 hundreds > 3 hundreds.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "472",
          "commonErrors": [
                    "Compares wrong digit."
          ]
},
        },
        {
          id: "m3-u1-place-value-1000-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is 10 more than 345?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Answer",
                              "answer": 355
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "reasoning",
                              "statement": "Add 10 to tens place."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "355",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "355",
          "commonErrors": [
                    "Adds to ones."
          ]
},
        },
        {
          id: "m3-u1-place-value-1000-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is 100 less than 500?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Answer",
                              "answer": 400
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "reasoning",
                              "statement": "Subtract 100 from hundreds."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "400",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "400",
          "commonErrors": [
                    "Subtracts wrong amount."
          ]
},
        },
        {
          id: "m3-u1-place-value-1000-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Write the number that has 3 hundreds, 4 tens, 5 ones. Then compare it to 340.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Place value",
                              "statement": "3 hundreds + 4 tens + 5 ones = 345."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Writes 345.",
                              "marks": 1,
                              "markCode": "M1"
                    },
                    {
                              "reasoning": "Compares to 340 correctly.",
                              "marks": 1,
                              "markCode": "M1"
                    }
          ],
          "finalAnswer": "**345; 345 > 340**",
          "commonErrors": [
                    "Wrong number.",
                    "Wrong comparison."
          ]
},
        },
        {
          id: "m3-u1-place-value-1000-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Place value\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Number with 3 digits."
                    },
                    {
                              "id": "b",
                              "text": "Hundreds, tens, ones."
                    },
                    {
                              "id": "c",
                              "text": "The 100s place."
                    },
                    {
                              "id": "d",
                              "text": "The 10s place."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Place value\" means Hundreds, tens, ones."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Place value\" means Hundreds, tens, ones.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Place value** = Hundreds, tens, ones.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m3-u1-place-value-1000-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Three-digit\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The 100s place."
                    },
                    {
                              "id": "b",
                              "text": "The 10s place."
                    },
                    {
                              "id": "c",
                              "text": "The 1s place."
                    },
                    {
                              "id": "d",
                              "text": "Number with 3 digits."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Three-digit\" means Number with 3 digits."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Three-digit\" means Number with 3 digits.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Three-digit** = Number with 3 digits.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m3-u1-place-value-1000-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Hundreds\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The 10s place."
                    },
                    {
                              "id": "b",
                              "text": "The 100s place."
                    },
                    {
                              "id": "c",
                              "text": "The 1s place."
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
                              "statement": "\"Hundreds\" means The 100s place."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Hundreds\" means The 100s place.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Hundreds** = The 100s place.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
