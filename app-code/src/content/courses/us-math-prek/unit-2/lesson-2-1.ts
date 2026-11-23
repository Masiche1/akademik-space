import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "mpk-u2-lesson-2-1",
  code: "2-1",
  title: "Numbers 0 to 5",
  goal: "I CAN match number names 0-5 to the right amount of objects.",
  standards: ["ELOF-PK.MATH.NUM.1"],
  vocabulary: [
    { term: "Numeral", definition: "The written symbol for a number, like 3." },
    { term: "Zero", definition: "The number that means none or nothing." },
    { term: "Amount", definition: "How many of something there is." },
    { term: "Digit", definition: "A single written number symbol." },
    { term: "Quantity", definition: "The number of objects in a group." },
  ],
  concepts: [
    {
      id: "mpk-u2-numbers-0-5",
      title: "Numbers 0 to 5",
      skill: "Match numerals 0-5 to groups of objects.",
      lesson: {
        sections: [
          {
            heading: "Zero means none",
            body: "Zero is a real number — it means **no objects at all**. An empty plate has 0 cookies.",
          },
          {
            heading: "Match the numeral",
            body: "The numeral 3 matches a group of 3 objects. Practice saying the number name and holding up the right number of fingers.",
          },
        ],
        keyFormulas: [
          { name: "0-5", statement: "0 = none, 1 = one, 2 = two, 3 = three, 4 = four, 5 = five." },
        ],
        workedExample: {
          problem: "Show the number 4 with your fingers.",
          solution: "Hold up 4 fingers: one, two, three, four. **4**",
        },
      },
      questions: [
        {
          id: "mpk-u2-numbers-0-5-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which numeral means 'none at all'?",
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
                              "text": "5"
                    },
                    {
                              "id": "d",
                              "text": "2"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Zero means none."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Zero means none.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**0**",
          "commonErrors": [
                    "Thinks zero means one."
          ]
},
        },
        {
          id: "mpk-u2-numbers-0-5-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which group shows the number 3?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "2 dots"
                    },
                    {
                              "id": "b",
                              "text": "3 dots"
                    },
                    {
                              "id": "c",
                              "text": "4 dots"
                    },
                    {
                              "id": "d",
                              "text": "1 dot"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "3 objects = the numeral 3."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "3 objects = the numeral 3.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**3 dots**",
          "commonErrors": [
                    "Counts the dots wrong."
          ]
},
        },
        {
          id: "mpk-u2-numbers-0-5-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "How many fingers do you hold up for the number 5?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Fingers",
                              "answer": 5
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "5 fingers: 1, 2, 3, 4, 5."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "5 fingers: 1, 2, 3, 4, 5.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$5$",
          "commonErrors": [
                    "Holds up 4 or 6."
          ]
},
        },
        {
          id: "mpk-u2-numbers-0-5-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "Group A has 0 dots. Group B has 3 dots. Which group has more?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Group A"
                    },
                    {
                              "id": "b",
                              "text": "Group B"
                    },
                    {
                              "id": "c",
                              "text": "They are the same"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Count each group: 3 > 0, so Group B has more."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Count each group: 3 > 0, so Group B has more.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Group B**",
          "commonErrors": [
                    "Picks the group that looks bigger without counting."
          ]
},
        },
        {
          id: "mpk-u2-numbers-0-5-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "Group A has 0 dots. Group B has 3 dots. How many more does the larger group have?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "More",
                              "answer": 3
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "3 - 0 = 3."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "3 - 0 = 3.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$3$",
          "commonErrors": [
                    "Adds the two groups instead of subtracting."
          ]
},
        },
        {
          id: "mpk-u2-numbers-0-5-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "A plate has no cookies on it. How many cookies are there?",
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
                              "statement": "No cookies means 0."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "No cookies means 0.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**0**",
          "commonErrors": [
                    "Says 'none' is not a number."
          ]
},
        },
        {
          id: "mpk-u2-numbers-0-5-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Numeral\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The number that means none or nothing."
                    },
                    {
                              "id": "b",
                              "text": "The written symbol for a number, like 3."
                    },
                    {
                              "id": "c",
                              "text": "How many of something there is."
                    },
                    {
                              "id": "d",
                              "text": "A single written number symbol."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Numeral\" means The written symbol for a number, like 3."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Numeral\" means The written symbol for a number, like 3.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Numeral** = The written symbol for a number, like 3.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "mpk-u2-numbers-0-5-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Zero\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "How many of something there is."
                    },
                    {
                              "id": "b",
                              "text": "A single written number symbol."
                    },
                    {
                              "id": "c",
                              "text": "The number of objects in a group."
                    },
                    {
                              "id": "d",
                              "text": "The number that means none or nothing."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Zero\" means The number that means none or nothing."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Zero\" means The number that means none or nothing.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Zero** = The number that means none or nothing.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "mpk-u2-numbers-0-5-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Amount\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A single written number symbol."
                    },
                    {
                              "id": "b",
                              "text": "How many of something there is."
                    },
                    {
                              "id": "c",
                              "text": "The number of objects in a group."
                    },
                    {
                              "id": "d",
                              "text": "The written symbol for a number, like 3."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Amount\" means How many of something there is."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Amount\" means How many of something there is.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Amount** = How many of something there is.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
