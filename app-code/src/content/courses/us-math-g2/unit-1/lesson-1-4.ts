import type { Lesson } from "../../../types.ts";

export const lesson14: Lesson = {
  id: "m2-u1-lesson-1-4",
  code: "1-4",
  title: "Number Patterns",
  goal: "I CAN identify and continue number patterns.",
  standards: ["2.NBT.A.2"],
  vocabulary: [
    { term: "Pattern", definition: "Repeated rule." },
    { term: "Sequence", definition: "Order of numbers." },
    { term: "Rule", definition: "How pattern works." },
    { term: "Continue", definition: "Keep going." },
    { term: "Next", definition: "What comes after." },
    { term: "Skip", definition: "Count by jumps." },
    { term: "Increase", definition: "Get bigger." },
    { term: "Decrease", definition: "Get smaller." },
  ],
  concepts: [
    {
      id: "m2-u1-number-patterns",
      title: "Number patterns",
      skill: "Identify rules in number patterns and continue them.",
      lesson: {
        sections: [
          {
            heading: "Find the rule",
            body: "A **pattern** follows a **rule** — like counting by 5s or 10s. Find the rule, then **continue** the pattern.",
          },
          {
            heading: "Increasing and decreasing",
            body: "Patterns can **increase** (get bigger) or **decrease** (get smaller). 5, 10, 15 increases; 30, 25, 20 decreases.",
          },
        ],
        keyFormulas: [
          { name: "Pattern", statement: "Find rule -> continue sequence." },
          { name: "Example", statement: "5,10,15,20 -> next is 25 (add 5)" },
        ],
        workedExample: {
          problem: "Continue: 100, 200, 300, ___.",
          solution: "**400** — add 100 each time.",
        },
      },
      questions: [
        {
          id: "m2-u1-number-patterns-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What comes next: 5, 10, 15, 20, ___?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "21"
                    },
                    {
                              "id": "b",
                              "text": "25"
                    },
                    {
                              "id": "c",
                              "text": "30"
                    },
                    {
                              "id": "d",
                              "text": "22"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Add 5 each time -> 25."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Add 5 each time -> 25.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "25",
          "commonErrors": [
                    "Adds 1."
          ]
},
        },
        {
          id: "m2-u1-number-patterns-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "In the pattern 50, 45, 40, the rule is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "add 5"
                    },
                    {
                              "id": "b",
                              "text": "subtract 5"
                    },
                    {
                              "id": "c",
                              "text": "add 10"
                    },
                    {
                              "id": "d",
                              "text": "subtract 10"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Decreasing by 5."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Decreasing by 5.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "subtract 5",
          "commonErrors": [
                    "Picks wrong rule."
          ]
},
        },
        {
          id: "m2-u1-number-patterns-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Continue the pattern: 200, 300, 400, ___. What is the rule?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "pattern",
                              "name": "Find rule",
                              "statement": "Add 100."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Next is 500.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Rule: add 100.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "500; rule: add 100",
          "commonErrors": "Wrong next or rule."
},
        },
        {
          id: "m2-u1-number-patterns-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "What comes next: 1000, 900, 800, ___?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Answer",
                              "answer": 700
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "reasoning",
                              "statement": "Subtract 100 -> 700."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "700",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "700",
          "commonErrors": [
                    "Wrong next."
          ]
},
        },
        {
          id: "m2-u1-number-patterns-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Create your own number pattern that increases by 25. Write the first 5 terms.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "pattern",
                              "name": "Create",
                              "statement": "Rule + 5 terms."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Creates pattern with +25 rule.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Writes 5 correct terms.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "e.g., 25, 50, 75, 100, 125",
          "commonErrors": "Wrong rule or terms."
},
        },
        {
          id: "m2-u1-number-patterns-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Pattern\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Order of numbers."
                    },
                    {
                              "id": "b",
                              "text": "Repeated rule."
                    },
                    {
                              "id": "c",
                              "text": "How pattern works."
                    },
                    {
                              "id": "d",
                              "text": "Keep going."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Pattern\" means Repeated rule."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Pattern\" means Repeated rule.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Pattern** = Repeated rule.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m2-u1-number-patterns-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Sequence\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "How pattern works."
                    },
                    {
                              "id": "b",
                              "text": "Keep going."
                    },
                    {
                              "id": "c",
                              "text": "What comes after."
                    },
                    {
                              "id": "d",
                              "text": "Order of numbers."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Sequence\" means Order of numbers."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Sequence\" means Order of numbers.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Sequence** = Order of numbers.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m2-u1-number-patterns-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Rule\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Keep going."
                    },
                    {
                              "id": "b",
                              "text": "How pattern works."
                    },
                    {
                              "id": "c",
                              "text": "What comes after."
                    },
                    {
                              "id": "d",
                              "text": "Count by jumps."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Rule\" means How pattern works."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Rule\" means How pattern works.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Rule** = How pattern works.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
