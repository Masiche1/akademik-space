import type { Lesson } from "../../../types.ts";

export const lesson84: Lesson = {
  id: "mpk-u8-lesson-8-4",
  code: "8-4",
  title: "Review: Patterns",
  goal: "I CAN recognize, continue and create patterns.",
  standards: ["ELOF-PK.MATH.REVIEW.4"],
  vocabulary: [
    { term: "Pattern", definition: "Something that repeats." },
    { term: "Core", definition: "The smallest repeating part." },
    { term: "AB", definition: "Two items alternating." },
    { term: "ABC", definition: "Three items repeating." },
    { term: "Extend", definition: "Make a pattern longer." },
  ],
  concepts: [
    {
      id: "mpk-u8-review-patterns",
      title: "Patterns review",
      skill: "Work with AB and ABC patterns confidently.",
      lesson: {
        sections: [
          {
            heading: "Find the core",
            body: "Every pattern has a **core** — the smallest part that repeats. AB = two items, ABC = three items, AAB = two then one.",
          },
          {
            heading: "Continue and create",
            body: "To continue, repeat the core. To create, choose a core and repeat it. Describe your pattern by naming its core.",
          },
        ],
        keyFormulas: [
          { name: "Core", statement: "Smallest repeating unit" },
          { name: "AB", statement: "A B A B" },
          { name: "ABC", statement: "A B C A B C" },
          { name: "AAB", statement: "A A B A A B" },
        ],
        workedExample: {
          problem: "Continue: circle, triangle, square, circle, triangle, square, __",
          solution: "Core circle-triangle-square repeats: next is **circle**.",
        },
      },
      questions: [
        {
          id: "mpk-u8-review-patterns-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Continue: red, blue, red, blue, __",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "red"
                    },
                    {
                              "id": "b",
                              "text": "blue"
                    },
                    {
                              "id": "c",
                              "text": "green"
                    },
                    {
                              "id": "d",
                              "text": "red blue"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "AB repeats: after blue comes red."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "AB repeats: after blue comes red.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Red**",
          "commonErrors": [
                    "Repeats last item."
          ]
},
        },
        {
          id: "mpk-u8-review-patterns-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The core of circle, circle, triangle, circle, circle, triangle is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "circle"
                    },
                    {
                              "id": "b",
                              "text": "circle triangle"
                    },
                    {
                              "id": "c",
                              "text": "circle circle triangle"
                    },
                    {
                              "id": "d",
                              "text": "the whole pattern"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Core = circle-circle-triangle."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Core = circle-circle-triangle.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Circle circle triangle**",
          "commonErrors": [
                    "Picks wrong core."
          ]
},
        },
        {
          id: "mpk-u8-review-patterns-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Pattern: A B C A B C A B C. How many C's?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "C's",
                              "answer": 3
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Count C: positions 3,6,9 = 3."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Count C: positions 3,6,9 = 3.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$3$",
          "commonErrors": [
                    "Counts all items."
          ]
},
        },
        {
          id: "mpk-u8-review-patterns-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is an ABC pattern?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "circle triangle circle triangle"
                    },
                    {
                              "id": "b",
                              "text": "circle triangle square circle triangle square"
                    },
                    {
                              "id": "c",
                              "text": "circle circle triangle circle circle triangle"
                    },
                    {
                              "id": "d",
                              "text": "circle circle circle triangle triangle triangle"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Circle-triangle-square repeats = ABC."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Circle-triangle-square repeats = ABC.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Circle triangle square**",
          "commonErrors": [
                    "Picks AB or AAB."
          ]
},
        },
        {
          id: "mpk-u8-review-patterns-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Create an AAB pattern and explain its core. Then say what comes next after the last item.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "AAB core",
                              "statement": "Two of one, then one of another."
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        {
                                                  "reasoning": "Creates valid AAB pattern.",
                                                  "marks": 1,
                                                  "markCode": "M"
                                        },
                                        {
                                                  "reasoning": "Correctly names core and next item.",
                                                  "marks": 1,
                                                  "markCode": "A"
                                        }
                              ],
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "**e.g., circle circle triangle -> core circle-circle-triangle, next circle**",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": [
                    "Makes AB instead.",
                    "Wrong next item."
          ]
},
        },
        {
          id: "mpk-u8-review-patterns-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Pattern\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The smallest repeating part."
                    },
                    {
                              "id": "b",
                              "text": "Something that repeats."
                    },
                    {
                              "id": "c",
                              "text": "Two items alternating."
                    },
                    {
                              "id": "d",
                              "text": "Three items repeating."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Pattern\" means Something that repeats."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Pattern\" means Something that repeats.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Pattern** = Something that repeats.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "mpk-u8-review-patterns-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Core\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Two items alternating."
                    },
                    {
                              "id": "b",
                              "text": "Three items repeating."
                    },
                    {
                              "id": "c",
                              "text": "Make a pattern longer."
                    },
                    {
                              "id": "d",
                              "text": "The smallest repeating part."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Core\" means The smallest repeating part."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Core\" means The smallest repeating part.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Core** = The smallest repeating part.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "mpk-u8-review-patterns-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"AB\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Three items repeating."
                    },
                    {
                              "id": "b",
                              "text": "Two items alternating."
                    },
                    {
                              "id": "c",
                              "text": "Make a pattern longer."
                    },
                    {
                              "id": "d",
                              "text": "Something that repeats."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"AB\" means Two items alternating."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"AB\" means Two items alternating.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**AB** = Two items alternating.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
