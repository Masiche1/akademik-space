import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "sci6-u1-lesson-1-2",
  code: "1-2",
  title: "Forces Basics",
  goal: "I CAN describe forces and their effects.",
  standards: ["MS-PS2-1"],
  vocabulary: [
    { term: "Force", definition: "Push or pull." },
    { term: "Push", definition: "Force away." },
    { term: "Pull", definition: "Force toward." },
    { term: "Contact", definition: "Touching." },
    { term: "Non-contact", definition: "Not touching." },
    { term: "Magnitude", definition: "Strength." },
    { term: "Direction", definition: "Which way." },
    { term: "Net force", definition: "Total force." },
  ],
  concepts: [
    {
      id: "sci6-u1-forces-basics",
      title: "Forces basics",
      skill: "Describe forces as pushes and pulls and their effects on objects.",
      lesson: {
        sections: [
          {
            heading: "Push and pull",
            body: "A **force** is a push or pull. Forces can be **contact** (touching) or **non-contact** (gravity, magnetism).",
          },
          {
            heading: "Effects",
            body: "Forces can change an object's **motion** (speed, direction) or **shape**. **Net force** = total force on object.",
          },
        ],
        keyFormulas: [
          { name: "Force", statement: "Push or pull that changes motion/shape." },
        ],
        workedExample: {
          problem: "A ball rolls and stops. What force caused it to stop?",
          solution: "**Friction** — a contact force that opposes motion.",
        },
      },
      questions: [
        {
          id: "sci6-u1-forces-basics-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'force' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "energy"
                    },
                    {
                              "id": "b",
                              "text": "a push or pull"
                    },
                    {
                              "id": "c",
                              "text": "motion"
                    },
                    {
                              "id": "d",
                              "text": "mass"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Push or pull."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Push or pull.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "a push or pull",
          "commonErrors": [
                    "Confuses with energy."
          ]
},
        },
        {
          id: "sci6-u1-forces-basics-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "'Contact force' means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "not touching"
                    },
                    {
                              "id": "b",
                              "text": "objects touching"
                    },
                    {
                              "id": "c",
                              "text": "only gravity"
                    },
                    {
                              "id": "d",
                              "text": "only magnets"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Objects touching."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Objects touching.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "objects touching",
          "commonErrors": [
                    "Confuses with non-contact."
          ]
},
        },
        {
          id: "sci6-u1-forces-basics-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Identify the force in each scenario: kicking a ball, dropping a book, a magnet picking up a paperclip.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Forces",
                              "statement": "All three identified."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Identifies forces.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**Kicking: contact force; Dropping: gravity (non-contact); Magnet: magnetic force (non-contact).**",
          "commonErrors": [
                    "Wrong forces.",
                    "Missing scenarios."
          ]
},
        },
        {
          id: "sci6-u1-forces-basics-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Net force' refers to...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "one force"
                    },
                    {
                              "id": "b",
                              "text": "total force on object"
                    },
                    {
                              "id": "c",
                              "text": "no force"
                    },
                    {
                              "id": "d",
                              "text": "only gravity"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Total force."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Total force.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "total force on object",
          "commonErrors": [
                    "Too narrow."
          ]
},
        },
        {
          id: "sci6-u1-forces-basics-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Describe two different forces acting on an object and explain their effects.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Forces",
                              "statement": "Two forces + effects."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes forces.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Explains effects.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'Gravity pulls down; Friction opposes motion; Together they determine how object falls/moves.'**",
          "commonErrors": [
                    "Cannot describe.",
                    "No effects explained."
          ]
},
        },
        {
          id: "sci6-u1-forces-basics-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Force\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Force away."
                    },
                    {
                              "id": "b",
                              "text": "Push or pull."
                    },
                    {
                              "id": "c",
                              "text": "Force toward."
                    },
                    {
                              "id": "d",
                              "text": "Touching."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Force\" means Push or pull."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Force\" means Push or pull.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Force** = Push or pull.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci6-u1-forces-basics-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Push\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Force toward."
                    },
                    {
                              "id": "b",
                              "text": "Touching."
                    },
                    {
                              "id": "c",
                              "text": "Not touching."
                    },
                    {
                              "id": "d",
                              "text": "Force away."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Push\" means Force away."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Push\" means Force away.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Push** = Force away.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci6-u1-forces-basics-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Pull\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Touching."
                    },
                    {
                              "id": "b",
                              "text": "Force toward."
                    },
                    {
                              "id": "c",
                              "text": "Not touching."
                    },
                    {
                              "id": "d",
                              "text": "Strength."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Pull\" means Force toward."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Pull\" means Force toward.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Pull** = Force toward.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
