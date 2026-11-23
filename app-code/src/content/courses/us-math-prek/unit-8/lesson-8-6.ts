import type { Lesson } from "../../../types.ts";

export const lesson86: Lesson = {
  id: "mpk-u8-lesson-8-6",
  code: "8-6",
  title: "Money and Shape Review",
  goal: "I CAN identify coins and review shape names.",
  standards: ["ELOF-PK.MATH.APPLY.2"],
  vocabulary: [
    { term: "Coin", definition: "A small round piece of money." },
    { term: "Penny", definition: "A copper-colored coin worth 1 cent." },
    { term: "Nickel", definition: "A larger coin worth 5 cents." },
    { term: "Dollar", definition: "Paper money or a large coin worth 100 cents." },
    { term: "Value", definition: "What something is worth." },
    { term: "Sort", definition: "Group objects by a feature." },
  ],
  concepts: [
    {
      id: "mpk-u8-money-shapes-review",
      title: "Coins and shapes",
      skill: "Recognize common coins and review 2D/3D shape names.",
      lesson: {
        sections: [
          {
            heading: "Coins",
            body: "A **penny** is copper and small (1 cent). A **nickel** is bigger and silver (5 cents). A **dime** is small and silver (10 cents). A **quarter** is large (25 cents).",
          },
          {
            heading: "Shapes again",
            body: "Review: circle (round), square (4 equal sides), triangle (3 sides), rectangle (4 sides). Solids: sphere (ball), cube (box), cylinder (can), cone (ice-cream cone).",
          },
        ],
        keyFormulas: [
          { name: "Coins", statement: "Penny=1c, Nickel=5c, Dime=10c, Quarter=25c" },
          { name: "Shapes", statement: "Circle/Square/Triangle/Rectangle; Sphere/Cube/Cylinder/Cone" },
        ],
        workedExample: {
          problem: "Name the coin worth 5 cents.",
          solution: "5 cents = **nickel**.",
        },
      },
      questions: [
        {
          id: "mpk-u8-money-shapes-review-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which coin is worth 5 cents?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Penny"
                    },
                    {
                              "id": "b",
                              "text": "Nickel"
                    },
                    {
                              "id": "c",
                              "text": "Dime"
                    },
                    {
                              "id": "d",
                              "text": "Quarter"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Nickel = 5 cents."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Nickel = 5 cents.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Nickel**",
          "commonErrors": [
                    "Confuses nickel with dime."
          ]
},
        },
        {
          id: "mpk-u8-money-shapes-review-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "A basketball is a...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "cube"
                    },
                    {
                              "id": "b",
                              "text": "sphere"
                    },
                    {
                              "id": "c",
                              "text": "cone"
                    },
                    {
                              "id": "d",
                              "text": "cylinder"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Basketball = sphere."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Basketball = sphere.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Sphere**",
          "commonErrors": [
                    "Calls it a circle (2D)."
          ]
},
        },
        {
          id: "mpk-u8-money-shapes-review-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "How many sides does a triangle have?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Sides",
                              "answer": 3
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Triangle = 3 sides."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Triangle = 3 sides.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$3$",
          "commonErrors": [
                    "Says 4."
          ]
},
        },
        {
          id: "mpk-u8-money-shapes-review-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is a cylinder?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A ball"
                    },
                    {
                              "id": "b",
                              "text": "A soup can"
                    },
                    {
                              "id": "c",
                              "text": "A dice"
                    },
                    {
                              "id": "d",
                              "text": "An ice-cream cone"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Soup can = cylinder."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Soup can = cylinder.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Soup can**",
          "commonErrors": [
                    "Confuses cylinder with cone."
          ]
},
        },
        {
          id: "mpk-u8-money-shapes-review-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Sort these coins by value: penny, nickel, dime, quarter. Then name one 3D shape and one 2D shape you know.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Order by value",
                              "statement": "Penny=1, Nickel=5, Dime=10, Quarter=25."
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        {
                                                  "reasoning": "Orders coins correctly.",
                                                  "marks": 1,
                                                  "markCode": "M"
                                        },
                                        {
                                                  "reasoning": "Names one 3D and one 2D shape correctly.",
                                                  "marks": 1,
                                                  "markCode": "A"
                                        }
                              ],
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "**Penny, Nickel, Dime, Quarter; e.g., sphere + circle**",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": [
                    "Wrong coin order.",
                    "Cannot name shapes."
          ]
},
        },
        {
          id: "mpk-u8-money-shapes-review-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Coin\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A copper-colored coin worth 1 cent."
                    },
                    {
                              "id": "b",
                              "text": "A small round piece of money."
                    },
                    {
                              "id": "c",
                              "text": "A larger coin worth 5 cents."
                    },
                    {
                              "id": "d",
                              "text": "Paper money or a large coin worth 100 cents."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Coin\" means A small round piece of money."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Coin\" means A small round piece of money.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Coin** = A small round piece of money.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "mpk-u8-money-shapes-review-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Penny\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A larger coin worth 5 cents."
                    },
                    {
                              "id": "b",
                              "text": "Paper money or a large coin worth 100 cents."
                    },
                    {
                              "id": "c",
                              "text": "What something is worth."
                    },
                    {
                              "id": "d",
                              "text": "A copper-colored coin worth 1 cent."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Penny\" means A copper-colored coin worth 1 cent."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Penny\" means A copper-colored coin worth 1 cent.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Penny** = A copper-colored coin worth 1 cent.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "mpk-u8-money-shapes-review-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Nickel\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Paper money or a large coin worth 100 cents."
                    },
                    {
                              "id": "b",
                              "text": "A larger coin worth 5 cents."
                    },
                    {
                              "id": "c",
                              "text": "What something is worth."
                    },
                    {
                              "id": "d",
                              "text": "Group objects by a feature."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Nickel\" means A larger coin worth 5 cents."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Nickel\" means A larger coin worth 5 cents.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Nickel** = A larger coin worth 5 cents.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
