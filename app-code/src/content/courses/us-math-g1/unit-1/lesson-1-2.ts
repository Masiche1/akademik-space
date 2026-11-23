import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "m1-u1-lesson-1-2",
  code: "1-2",
  title: "Numbers to 120",
  goal: "I CAN read, write and compare numbers to 120.",
  standards: ["1.NBT.A.1", "1.NBT.B.2"],
  vocabulary: [
    { term: "Number", definition: "Shows how many." },
    { term: "Digit", definition: "One number symbol: 0-9." },
    { term: "Three-digit", definition: "A number with three digits like 100." },
    { term: "Place", definition: "Position of a digit." },
    { term: "Compare", definition: "See which is more or less." },
    { term: "Greater than", definition: "A bigger number." },
    { term: "Less than", definition: "A smaller number." },
    { term: "Equal to", definition: "Same amount." },
  ],
  concepts: [
    {
      id: "m1-u1-numbers-to-120",
      title: "Numbers to 120",
      skill: "Read, write and compare numbers to 120.",
      lesson: {
        sections: [
          {
            heading: "Numbers to 120",
            body: "We can count and write numbers up to **120**. Numbers like **100** and **120** are called **three-digit** numbers because they use three digits.",
          },
          {
            heading: "Comparing numbers",
            body: "To **compare** numbers, look at which is **greater than** (more), **less than** (fewer), or **equal to** (same). 50 is greater than 30; 30 is less than 50.",
          },
        ],
        keyFormulas: [
          { name: "Compare", statement: "Greater = more, Less = fewer, Equal = same." },
        ],
        workedExample: {
          problem: "Compare 45 and 54. Which is greater?",
          solution: "**54 is greater than 45** because 5 tens > 4 tens.",
        },
      },
      questions: [
        {
          id: "m1-u1-numbers-to-120-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which number is greater: 45 or 54?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "45"
                    },
                    {
                              "id": "b",
                              "text": "54"
                    },
                    {
                              "id": "c",
                              "text": "They are equal"
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
                              "statement": "54 has 5 tens > 4 tens."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "54 has 5 tens > 4 tens.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**54**",
          "commonErrors": [
                    "Compares wrong digit."
          ]
},
        },
        {
          id: "m1-u1-numbers-to-120-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "What number is 10 more than 45?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "10 more",
                              "answer": 55
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Add 10 to the tens place."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Add 10 to the tens place.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(55)**",
          "commonErrors": [
                    "Adds to ones place."
          ]
},
        },
        {
          id: "m1-u1-numbers-to-120-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "What number is 10 less than 80?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "10 less",
                              "answer": 70
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Subtract 10 from tens place."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Subtract 10 from tens place.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(70)**",
          "commonErrors": [
                    "Subtracts wrong amount."
          ]
},
        },
        {
          id: "m1-u1-numbers-to-120-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Greater than' means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "smaller"
                    },
                    {
                              "id": "b",
                              "text": "bigger/more"
                    },
                    {
                              "id": "c",
                              "text": "equal"
                    },
                    {
                              "id": "d",
                              "text": "unknown"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Greater = more."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Greater = more.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**bigger**",
          "commonErrors": [
                    "Confuses with less."
          ]
},
        },
        {
          id: "m1-u1-numbers-to-120-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Compare 67 and 76. Which is greater? How do you know?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Compare",
                              "statement": "Look at tens first."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Compares tens correctly.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Says 76 is greater.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**76 > 67**",
          "commonErrors": [
                    "Wrong comparison.",
                    "Cannot compare."
          ]
},
        },
        {
          id: "m1-u1-numbers-to-120-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Number\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "One number symbol: 0-9."
                    },
                    {
                              "id": "b",
                              "text": "Shows how many."
                    },
                    {
                              "id": "c",
                              "text": "A number with three digits like 100."
                    },
                    {
                              "id": "d",
                              "text": "Position of a digit."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Number\" means Shows how many."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Number\" means Shows how many.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Number** = Shows how many.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m1-u1-numbers-to-120-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Digit\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A number with three digits like 100."
                    },
                    {
                              "id": "b",
                              "text": "Position of a digit."
                    },
                    {
                              "id": "c",
                              "text": "See which is more or less."
                    },
                    {
                              "id": "d",
                              "text": "One number symbol: 0-9."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Digit\" means One number symbol: 0-9."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Digit\" means One number symbol: 0-9.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Digit** = One number symbol: 0-9.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m1-u1-numbers-to-120-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Three-digit\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Position of a digit."
                    },
                    {
                              "id": "b",
                              "text": "A number with three digits like 100."
                    },
                    {
                              "id": "c",
                              "text": "See which is more or less."
                    },
                    {
                              "id": "d",
                              "text": "A bigger number."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Three-digit\" means A number with three digits like 100."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Three-digit\" means A number with three digits like 100.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Three-digit** = A number with three digits like 100.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m1-u1-numbers-to-120-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Place\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "See which is more or less."
                    },
                    {
                              "id": "b",
                              "text": "A bigger number."
                    },
                    {
                              "id": "c",
                              "text": "A smaller number."
                    },
                    {
                              "id": "d",
                              "text": "Position of a digit."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Place\" means Position of a digit."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Place\" means Position of a digit.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Place** = Position of a digit.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
