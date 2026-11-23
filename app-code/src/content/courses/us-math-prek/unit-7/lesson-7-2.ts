import type { Lesson } from "../../../types.ts";

export const lesson72: Lesson = {
  id: "mpk-u7-lesson-7-2",
  code: "7-2",
  title: "Count to 20",
  goal: "I CAN count objects and number names up to 20.",
  standards: ["ELOF-PK.MATH.COUNT.5"],
  vocabulary: [
    { term: "Twenty", definition: "The number after 19." },
    { term: "Count by tens", definition: "Count 10, 20, 30..." },
    { term: "Score", definition: "A group of twenty." },
    { term: "Two tens", definition: "20 = 10 + 10." },
    { term: "Full count", definition: "Counting all the way to 20." },
  ],
  concepts: [
    {
      id: "mpk-u7-count-to-20",
      title: "Counting to 20",
      skill: "Count groups up to 20 and recognize 20 as two tens.",
      lesson: {
        sections: [
          {
            heading: "Up to 20",
            body: "After 19 comes **20** — two full groups of ten. Counting to 20 is a big skill; use groups of ten to keep track.",
          },
          {
            heading: "Count by tens",
            body: "10, 20, 30... counting by tens is a fast way to count bigger groups. Ten and twenty are anchor numbers.",
          },
        ],
        keyFormulas: [
          { name: "20", statement: "10 + 10 = 20; two tens make twenty." },
          { name: "Count by tens", statement: "10, 20, 30, 40..." },
        ],
        workedExample: {
          problem: "Count by tens: 10, __, __, __",
          solution: "10, 20, 30, 40.",
        },
      },
      questions: [
        {
          id: "mpk-u7-count-to-20-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many objects? (18 objects)",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "How many",
                              "answer": 18
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Count to 18."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Count to 18.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$18$",
          "commonErrors": [
                    "Loses count in the teens."
          ]
},
        },
        {
          id: "mpk-u7-count-to-20-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What comes after 19?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "18"
                    },
                    {
                              "id": "b",
                              "text": "20"
                    },
                    {
                              "id": "c",
                              "text": "21"
                    },
                    {
                              "id": "d",
                              "text": "10"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Order: 19, 20."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Order: 19, 20.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**20**",
          "commonErrors": [
                    "Says 21 or repeats 19."
          ]
},
        },
        {
          id: "mpk-u7-count-to-20-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "20 is the same as...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "10 + 1"
                    },
                    {
                              "id": "b",
                              "text": "10 + 10"
                    },
                    {
                              "id": "c",
                              "text": "20 + 0 only"
                    },
                    {
                              "id": "d",
                              "text": "15 + 5"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "20 = two tens = 10 + 10."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "20 = two tens = 10 + 10.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**10 + 10**",
          "commonErrors": [
                    "Thinks 20 is just 'a big number'."
          ]
},
        },
        {
          id: "mpk-u7-count-to-20-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "Count by tens: 10, 20, __, __",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Next two",
                              "answer": 30
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "After 20 comes 30, then 40."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "After 20 comes 30, then 40.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$30, 40$",
          "commonErrors": [
                    "Counts by ones instead of tens."
          ]
},
        },
        {
          id: "mpk-u7-count-to-20-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "Group A has 16 dots. Group B has 19 dots. Which group has more?",
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
                              "statement": "Count each group: 19 > 16, so Group B has more."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Count each group: 19 > 16, so Group B has more.",
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
          id: "mpk-u7-count-to-20-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Group A has 16 dots. Group B has 19 dots. How many more does the larger group have?",
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
                              "statement": "19 - 16 = 3."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "19 - 16 = 3.",
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
          id: "mpk-u7-count-to-20-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is the biggest number?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "9"
                    },
                    {
                              "id": "b",
                              "text": "15"
                    },
                    {
                              "id": "c",
                              "text": "20"
                    },
                    {
                              "id": "d",
                              "text": "12"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "20 > 15 > 12 > 9."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "20 > 15 > 12 > 9.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**20**",
          "commonErrors": [
                    "Thinks two-digit numbers are all equal."
          ]
},
        },
        {
          id: "mpk-u7-count-to-20-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Twenty\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Count 10, 20, 30..."
                    },
                    {
                              "id": "b",
                              "text": "The number after 19."
                    },
                    {
                              "id": "c",
                              "text": "A group of twenty."
                    },
                    {
                              "id": "d",
                              "text": "20 = 10 + 10."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Twenty\" means The number after 19."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Twenty\" means The number after 19.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Twenty** = The number after 19.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "mpk-u7-count-to-20-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Count by tens\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A group of twenty."
                    },
                    {
                              "id": "b",
                              "text": "20 = 10 + 10."
                    },
                    {
                              "id": "c",
                              "text": "Counting all the way to 20."
                    },
                    {
                              "id": "d",
                              "text": "Count 10, 20, 30..."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Count by tens\" means Count 10, 20, 30..."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Count by tens\" means Count 10, 20, 30...",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Count by tens** = Count 10, 20, 30...",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
