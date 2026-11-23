import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "mpk-u2-lesson-2-3",
  code: "2-3",
  title: "Zero Means None",
  goal: "I CAN show that zero means no objects.",
  standards: ["ELOF-PK.MATH.ZERO.1"],
  vocabulary: [
    { term: "Empty", definition: "Having nothing inside." },
    { term: "None", definition: "Not any; zero of something." },
    { term: "Zero", definition: "The number that means none." },
    { term: "Nothing", definition: "No objects at all." },
    { term: "Blank", definition: "Empty space with nothing in it." },
  ],
  concepts: [
    {
      id: "mpk-u2-zero-none",
      title: "Understanding zero",
      skill: "Recognize zero as 'none' in real situations.",
      lesson: {
        sections: [
          {
            heading: "Zero in the world",
            body: "An empty bird feeder has **0** seeds. A jar with no marbles has **0** marbles. Zero is a number we use every day.",
          },
          {
            heading: "Zero and counting",
            body: "When you count and reach a group with nothing in it, you say 'zero' — you do not skip it. Zero comes before 1.",
          },
        ],
        keyFormulas: [
          { name: "Zero", statement: "0 = none; it comes before 1 in counting order." },
        ],
        workedExample: {
          problem: "There are no balloons left. How many balloons?",
          solution: "No balloons means **0 balloons**.",
        },
      },
      questions: [
        {
          id: "mpk-u2-zero-none-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A bird feeder is empty. How many seeds are in it?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "1"
                    },
                    {
                              "id": "b",
                              "text": "0"
                    },
                    {
                              "id": "c",
                              "text": "10"
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
                              "statement": "Empty means 0."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Empty means 0.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**0**",
          "commonErrors": [
                    "Thinks empty means 1."
          ]
},
        },
        {
          id: "mpk-u2-zero-none-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Where does 0 come in counting order?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "After 1"
                    },
                    {
                              "id": "b",
                              "text": "Before 1"
                    },
                    {
                              "id": "c",
                              "text": "After 10"
                    },
                    {
                              "id": "d",
                              "text": "Nowhere"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Counting starts 0, 1, 2, 3... or 1, 2, 3 with 0 meaning none."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Counting starts 0, 1, 2, 3... or 1, 2, 3 with 0 meaning none.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Before 1**",
          "commonErrors": [
                    "Puts zero at the end."
          ]
},
        },
        {
          id: "mpk-u2-zero-none-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "You have 3 cookies and give all 3 away. How many cookies do you have now?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Cookies",
                              "answer": 0
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "3 - 3 = 0."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "3 - 3 = 0.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$0$",
          "commonErrors": [
                    "Says 1 cookie is always left."
          ]
},
        },
        {
          id: "mpk-u2-zero-none-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is 4 - 4?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Difference",
                              "answer": 0
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Count back from 4: 3, ..., 0. 4 - 4 = 0."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Count back from 4: 3, ..., 0. 4 - 4 = 0.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$0$",
          "commonErrors": [
                    "Adds instead of subtracting."
          ]
},
        },
        {
          id: "mpk-u2-zero-none-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is 4 - 4?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "0"
                    },
                    {
                              "id": "b",
                              "text": "1"
                    },
                    {
                              "id": "c",
                              "text": "3"
                    },
                    {
                              "id": "d",
                              "text": "5"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Take away 4 from 4: 4 - 4 = 0."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Take away 4 from 4: 4 - 4 = 0.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**0**",
          "commonErrors": [
                    "Reverses the subtraction."
          ]
},
        },
        {
          id: "mpk-u2-zero-none-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which picture shows zero?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "3 dots"
                    },
                    {
                              "id": "b",
                              "text": "empty space"
                    },
                    {
                              "id": "c",
                              "text": "1 dot"
                    },
                    {
                              "id": "d",
                              "text": "5 dots"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Zero means no objects — empty space."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Zero means no objects — empty space.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Empty**",
          "commonErrors": [
                    "Picks the smallest group instead of empty."
          ]
},
        },
        {
          id: "mpk-u2-zero-none-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Empty\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Not any; zero of something."
                    },
                    {
                              "id": "b",
                              "text": "Having nothing inside."
                    },
                    {
                              "id": "c",
                              "text": "The number that means none."
                    },
                    {
                              "id": "d",
                              "text": "No objects at all."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Empty\" means Having nothing inside."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Empty\" means Having nothing inside.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Empty** = Having nothing inside.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "mpk-u2-zero-none-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"None\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The number that means none."
                    },
                    {
                              "id": "b",
                              "text": "No objects at all."
                    },
                    {
                              "id": "c",
                              "text": "Empty space with nothing in it."
                    },
                    {
                              "id": "d",
                              "text": "Not any; zero of something."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"None\" means Not any; zero of something."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"None\" means Not any; zero of something.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**None** = Not any; zero of something.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "mpk-u2-zero-none-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Zero\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "No objects at all."
                    },
                    {
                              "id": "b",
                              "text": "The number that means none."
                    },
                    {
                              "id": "c",
                              "text": "Empty space with nothing in it."
                    },
                    {
                              "id": "d",
                              "text": "Having nothing inside."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Zero\" means The number that means none."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Zero\" means The number that means none.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Zero** = The number that means none.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
