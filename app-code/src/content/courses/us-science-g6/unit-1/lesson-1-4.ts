import type { Lesson } from "../../../types.ts";

export const lesson14: Lesson = {
  id: "sci6-u1-lesson-1-4",
  code: "1-4",
  title: "Balanced and Unbalanced Forces",
  goal: "I CAN identify balanced and unbalanced forces.",
  standards: ["MS-PS2-1"],
  vocabulary: [
    { term: "Balanced", definition: "Equal forces, no change." },
    { term: "Unbalanced", definition: "Different forces, motion." },
    { term: "Net force", definition: "Total force." },
    { term: "Equilibrium", definition: "Balanced state." },
    { term: "Static", definition: "Not moving." },
    { term: "Dynamic", definition: "Moving." },
    { term: "Friction", definition: "Opposing force." },
    { term: "Gravity", definition: "Pulling force." },
  ],
  concepts: [
    {
      id: "sci6-u1-balanced-unbalanced",
      title: "Balanced and unbalanced forces",
      skill: "Distinguish between balanced and unbalanced forces and their effects.",
      lesson: {
        sections: [
          {
            heading: "Balanced",
            body: "When forces are **balanced** (equal), net force = 0, object stays at rest or moves at constant velocity.",
          },
          {
            heading: "Unbalanced",
            body: "When forces are **unbalanced** (different), net force > 0, object accelerates.",
          },
        ],
        keyFormulas: [
          { name: "Balanced", statement: "F_net = 0 -> no acceleration." },
          { name: "Unbalanced", statement: "F_net > 0 -> acceleration." },
        ],
        workedExample: {
          problem: "Two people push a box from opposite sides with equal force. What happens?",
          solution: "**Balanced forces -> box doesn't move (net force = 0).**",
        },
      },
      questions: [
        {
          id: "sci6-u1-balanced-unbalanced-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Balanced forces' result in...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "acceleration"
                    },
                    {
                              "id": "b",
                              "text": "no change in motion"
                    },
                    {
                              "id": "c",
                              "text": "deceleration"
                    },
                    {
                              "id": "d",
                              "text": "movement"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "No change."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "No change.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "no change in motion",
          "commonErrors": [
                    "Wrong result."
          ]
},
        },
        {
          id: "sci6-u1-balanced-unbalanced-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "'Unbalanced forces' result in...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "no motion"
                    },
                    {
                              "id": "b",
                              "text": "acceleration"
                    },
                    {
                              "id": "c",
                              "text": "constant velocity"
                    },
                    {
                              "id": "d",
                              "text": "rest"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Acceleration."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Acceleration.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "acceleration",
          "commonErrors": [
                    "Wrong result."
          ]
},
        },
        {
          id: "sci6-u1-balanced-unbalanced-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Two forces act on a box: 10N to the right, 6N to the left. Is this balanced or unbalanced? What happens?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Forces",
                              "statement": "Unbalanced -> moves right."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Identifies unbalanced.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Predicts motion.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**Unbalanced (net = 4N right); box accelerates to the right.**",
          "commonErrors": [
                    "Wrong balance.",
                    "Wrong prediction."
          ]
},
        },
        {
          id: "sci6-u1-balanced-unbalanced-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Net force' is calculated by...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "adding all forces"
                    },
                    {
                              "id": "b",
                              "text": "adding forces in same direction, subtracting opposite"
                    },
                    {
                              "id": "c",
                              "text": "multiplying forces"
                    },
                    {
                              "id": "d",
                              "text": "ignoring forces"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Add same, subtract opposite."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Add same, subtract opposite.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "adding forces in same direction, subtracting opposite",
          "commonErrors": [
                    "Wrong calculation."
          ]
},
        },
        {
          id: "sci6-u1-balanced-unbalanced-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Give an example of balanced forces and one of unbalanced forces, explaining the result in each case.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Forces",
                              "statement": "Both examples."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Gives balanced example.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Gives unbalanced example.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**Balanced: book on table (gravity = normal force); Unbalanced: pushing car (push > friction -> accelerates).**",
          "commonErrors": [
                    "Only one example.",
                    "Wrong explanations."
          ]
},
        },
        {
          id: "sci6-u1-balanced-unbalanced-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Balanced\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Different forces, motion."
                    },
                    {
                              "id": "b",
                              "text": "Equal forces, no change."
                    },
                    {
                              "id": "c",
                              "text": "Total force."
                    },
                    {
                              "id": "d",
                              "text": "Balanced state."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Balanced\" means Equal forces, no change."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Balanced\" means Equal forces, no change.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Balanced** = Equal forces, no change.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci6-u1-balanced-unbalanced-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Unbalanced\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Total force."
                    },
                    {
                              "id": "b",
                              "text": "Balanced state."
                    },
                    {
                              "id": "c",
                              "text": "Not moving."
                    },
                    {
                              "id": "d",
                              "text": "Different forces, motion."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Unbalanced\" means Different forces, motion."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Unbalanced\" means Different forces, motion.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Unbalanced** = Different forces, motion.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci6-u1-balanced-unbalanced-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Net force\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Balanced state."
                    },
                    {
                              "id": "b",
                              "text": "Total force."
                    },
                    {
                              "id": "c",
                              "text": "Not moving."
                    },
                    {
                              "id": "d",
                              "text": "Moving."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Net force\" means Total force."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Net force\" means Total force.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Net force** = Total force.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
