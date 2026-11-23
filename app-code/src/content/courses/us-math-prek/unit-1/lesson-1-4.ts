import type { Lesson } from "../../../types.ts";

export const lesson14: Lesson = {
  id: "mpk-u1-lesson-1-4",
  code: "1-4",
  title: "Count to 10",
  goal: "I CAN count objects and number names up to 10.",
  standards: ["ELOF-PK.MATH.COUNT.2"],
  vocabulary: [
    { term: "Count on", definition: "Keep saying the next numbers after a starting number." },
    { term: "Ten", definition: "The number after 9; a full group of ten." },
    { term: "Number line", definition: "Numbers in order on a line." },
    { term: "Sequence", definition: "Numbers said in order." },
    { term: "Ones", definition: "Single objects counted one at a time." },
  ],
  concepts: [
    {
      id: "mpk-u1-count-to-10",
      title: "Counting to 10",
      skill: "Count a group of up to 10 objects.",
      lesson: {
        sections: [
          {
            heading: "Past 5",
            body: "After 5 comes 6, 7, 8, 9, 10. Count slowly and touch each object once. Ten is special — it is a whole group of ten ones.",
          },
          {
            heading: "Count on",
            body: "If you already know there are 4, you can **count on**: 5, 6, 7 for 3 more. Counting on is faster than starting over at 1.",
          },
        ],
        keyFormulas: [
          { name: "Count to 10", statement: "1, 2, 3, 4, 5, 6, 7, 8, 9, 10 — one name per object." },
        ],
        workedExample: {
          problem: "Count 11 dots. Can you count them all?",
          solution: "Yes — count slowly: 1 through 10, then 11. **11 dots.**",
        },
      },
      questions: [
        {
          id: "mpk-u1-count-to-10-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many dots? (10 dots)",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "How many",
                              "answer": 10
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Count each dot once: 1 to 10."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Count each dot once: 1 to 10.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$10$",
          "commonErrors": [
                    "Loses count past 5."
          ]
},
        },
        {
          id: "mpk-u1-count-to-10-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What number comes after 7?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "6"
                    },
                    {
                              "id": "b",
                              "text": "8"
                    },
                    {
                              "id": "c",
                              "text": "9"
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
                              "statement": "The order is 7, 8, 9, 10."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The order is 7, 8, 9, 10.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**8**",
          "commonErrors": [
                    "Says 9 because it is close to 10."
          ]
},
        },
        {
          id: "mpk-u1-count-to-10-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Start at 5 and count on 3. Where do you stop?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "7"
                    },
                    {
                              "id": "b",
                              "text": "8"
                    },
                    {
                              "id": "c",
                              "text": "9"
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
                              "statement": "5, then 6, 7, 8 — three more lands on 8."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "5, then 6, 7, 8 — three more lands on 8.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**8**",
          "commonErrors": [
                    "Counts the 5 as one of the 3 steps."
          ]
},
        },
        {
          id: "mpk-u1-count-to-10-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "Group A has 7 dots. Group B has 9 dots. Which group has more?",
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
                              "statement": "Count each group: 9 > 7, so Group B has more."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Count each group: 9 > 7, so Group B has more.",
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
          id: "mpk-u1-count-to-10-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "Group A has 7 dots. Group B has 9 dots. How many more does the larger group have?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "More",
                              "answer": 2
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "9 - 7 = 2."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "9 - 7 = 2.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$2$",
          "commonErrors": [
                    "Adds the two groups instead of subtracting."
          ]
},
        },
        {
          id: "mpk-u1-count-to-10-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which shows counting on from 4 by 2s?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "4, 5, 6"
                    },
                    {
                              "id": "b",
                              "text": "4, 6, 8"
                    },
                    {
                              "id": "c",
                              "text": "4, 3, 2"
                    },
                    {
                              "id": "d",
                              "text": "2, 4, 6"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Count on by twos: 4, 6, 8."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Count on by twos: 4, 6, 8.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**4, 6, 8**",
          "commonErrors": [
                    "Counts by ones instead of twos."
          ]
},
        },
        {
          id: "mpk-u1-count-to-10-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Count on\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The number after 9; a full group of ten."
                    },
                    {
                              "id": "b",
                              "text": "Keep saying the next numbers after a starting number."
                    },
                    {
                              "id": "c",
                              "text": "Numbers in order on a line."
                    },
                    {
                              "id": "d",
                              "text": "Numbers said in order."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Count on\" means Keep saying the next numbers after a starting number."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Count on\" means Keep saying the next numbers after a starting number.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Count on** = Keep saying the next numbers after a starting number.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "mpk-u1-count-to-10-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Ten\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Numbers in order on a line."
                    },
                    {
                              "id": "b",
                              "text": "Numbers said in order."
                    },
                    {
                              "id": "c",
                              "text": "Single objects counted one at a time."
                    },
                    {
                              "id": "d",
                              "text": "The number after 9; a full group of ten."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Ten\" means The number after 9; a full group of ten."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Ten\" means The number after 9; a full group of ten.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Ten** = The number after 9; a full group of ten.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
