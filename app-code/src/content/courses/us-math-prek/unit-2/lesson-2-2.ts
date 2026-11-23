import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "mpk-u2-lesson-2-2",
  code: "2-2",
  title: "Numbers 6 to 10",
  goal: "I CAN count and recognize quantities from 6 to 10.",
  standards: ["ELOF-PK.MATH.NUM.2"],
  vocabulary: [
    { term: "Six", definition: "The number after 5." },
    { term: "Ten", definition: "The number after 9; two hands of fingers." },
    { term: "Double", definition: "Two of the same amount." },
    { term: "Half", definition: "Splitting a group into two equal parts." },
    { term: "Numeral", definition: "A written number symbol." },
  ],
  concepts: [
    {
      id: "mpk-u2-numbers-6-10",
      title: "Numbers 6 to 10",
      skill: "Count groups of 6-10 objects and match numerals.",
      lesson: {
        sections: [
          {
            heading: "Two hands make ten",
            body: "Ten is special: two hands have 5 fingers each, and 5 + 5 = 10. Counting by tens helps us count bigger groups fast.",
          },
          {
            heading: "Making ten",
            body: "Numbers 6-9 can be thought of as 'ten take away some': 8 is 10 - 2. This 'make ten' idea helps with adding later.",
          },
        ],
        keyFormulas: [
          { name: "Ten", statement: "5 + 5 = 10; two hands of fingers." },
        ],
        workedExample: {
          problem: "Hold up fingers to show 7.",
          solution: "5 fingers on one hand + 2 on the other = **7**.",
        },
      },
      questions: [
        {
          id: "mpk-u2-numbers-6-10-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many dots? (9 dots)",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "How many",
                              "answer": 9
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Count to 9."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Count to 9.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$9$",
          "commonErrors": [
                    "Loses count at 7 or 8."
          ]
},
        },
        {
          id: "mpk-u2-numbers-6-10-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which group shows 8?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "7 dots"
                    },
                    {
                              "id": "b",
                              "text": "8 dots"
                    },
                    {
                              "id": "c",
                              "text": "10 dots"
                    },
                    {
                              "id": "d",
                              "text": "6 dots"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "8 objects for the numeral 8."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "8 objects for the numeral 8.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**8 dots**",
          "commonErrors": [
                    "Miscounts by one."
          ]
},
        },
        {
          id: "mpk-u2-numbers-6-10-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What comes after 9?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "8"
                    },
                    {
                              "id": "b",
                              "text": "10"
                    },
                    {
                              "id": "c",
                              "text": "11"
                    },
                    {
                              "id": "d",
                              "text": "7"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "The order is 8, 9, 10."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The order is 8, 9, 10.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**10**",
          "commonErrors": [
                    "Skips 10 and says 11."
          ]
},
        },
        {
          id: "mpk-u2-numbers-6-10-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is 5 + 5?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Sum",
                              "answer": 10
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Count on from 5: 6, ..., 10. 5 + 5 = 10."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Count on from 5: 6, ..., 10. 5 + 5 = 10.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$10$",
          "commonErrors": [
                    "Counts both numbers again instead of counting on."
          ]
},
        },
        {
          id: "mpk-u2-numbers-6-10-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is 5 + 5?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "10"
                    },
                    {
                              "id": "b",
                              "text": "11"
                    },
                    {
                              "id": "c",
                              "text": "8"
                    },
                    {
                              "id": "d",
                              "text": "13"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Make a ten or count on: 5 + 5 = 10."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Make a ten or count on: 5 + 5 = 10.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**10**",
          "commonErrors": [
                    "Adds the digits instead of the quantities."
          ]
},
        },
        {
          id: "mpk-u2-numbers-6-10-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Two hands have 5 fingers each. How many fingers in all?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "9"
                    },
                    {
                              "id": "b",
                              "text": "10"
                    },
                    {
                              "id": "c",
                              "text": "11"
                    },
                    {
                              "id": "d",
                              "text": "12"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "5 + 5 = 10."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "5 + 5 = 10.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**10**",
          "commonErrors": [
                    "Counts one hand twice."
          ]
},
        },
        {
          id: "mpk-u2-numbers-6-10-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Six\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The number after 9; two hands of fingers."
                    },
                    {
                              "id": "b",
                              "text": "The number after 5."
                    },
                    {
                              "id": "c",
                              "text": "Two of the same amount."
                    },
                    {
                              "id": "d",
                              "text": "Splitting a group into two equal parts."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Six\" means The number after 5."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Six\" means The number after 5.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Six** = The number after 5.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "mpk-u2-numbers-6-10-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Ten\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Two of the same amount."
                    },
                    {
                              "id": "b",
                              "text": "Splitting a group into two equal parts."
                    },
                    {
                              "id": "c",
                              "text": "A written number symbol."
                    },
                    {
                              "id": "d",
                              "text": "The number after 9; two hands of fingers."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Ten\" means The number after 9; two hands of fingers."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Ten\" means The number after 9; two hands of fingers.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Ten** = The number after 9; two hands of fingers.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "mpk-u2-numbers-6-10-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Double\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Splitting a group into two equal parts."
                    },
                    {
                              "id": "b",
                              "text": "Two of the same amount."
                    },
                    {
                              "id": "c",
                              "text": "A written number symbol."
                    },
                    {
                              "id": "d",
                              "text": "The number after 5."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Double\" means Two of the same amount."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Double\" means Two of the same amount.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Double** = Two of the same amount.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
