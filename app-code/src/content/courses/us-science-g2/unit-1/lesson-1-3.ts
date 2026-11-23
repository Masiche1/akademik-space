import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "sci2-u1-lesson-1-3",
  code: "1-3",
  title: "Gravity",
  goal: "I CAN describe how gravity pulls things down.",
  standards: ["NGSS 2-PS2-1"],
  vocabulary: [
    { term: "Gravity", definition: "Force pulling down." },
    { term: "Down", definition: "Toward the ground." },
    { term: "Fall", definition: "Drop to ground." },
    { term: "Pull", definition: "Force toward center." },
    { term: "Weight", definition: "How heavy something is." },
    { term: "Heavy", definition: "More weight." },
    { term: "Light", definition: "Less weight." },
    { term: "Earth", definition: "Our planet pulling us." },
  ],
  concepts: [
    {
      id: "sci2-u1-gravity",
      title: "Gravity",
      skill: "Describe how gravity pulls objects toward Earth's center.",
      lesson: {
        sections: [
          {
            heading: "What is gravity?",
            body: "**Gravity** is a force that **pulls** things **down** toward Earth's center. It makes things **fall** when you drop them.",
          },
          {
            heading: "Heavy or light?",
            body: "Gravity pulls on **all** objects. **Heavy** things have more weight but still fall the same way as **light** things (without air).",
          },
        ],
        keyFormulas: [
          { name: "Gravity", statement: "Force pulling everything toward Earth." },
        ],
        workedExample: {
          problem: "What happens when you drop a ball? Why?",
          solution: "It **falls** because **gravity** pulls it down.",
        },
      },
      questions: [
        {
          id: "sci2-u1-gravity-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Gravity is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a push"
                    },
                    {
                              "id": "b",
                              "text": "a force that pulls things down"
                    },
                    {
                              "id": "c",
                              "text": "a color"
                    },
                    {
                              "id": "d",
                              "text": "a sound"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Gravity pulls down."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Gravity pulls down.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**pulls down**",
          "commonErrors": [
                    "Confuses with push."
          ]
},
        },
        {
          id: "sci2-u1-gravity-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "When you drop a ball, it falls because of...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "wind"
                    },
                    {
                              "id": "b",
                              "text": "gravity"
                    },
                    {
                              "id": "c",
                              "text": "friction"
                    },
                    {
                              "id": "d",
                              "text": "nothing"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Gravity pulls it down."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Gravity pulls it down.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**gravity**",
          "commonErrors": [
                    "Picks wrong force."
          ]
},
        },
        {
          id: "sci2-u1-gravity-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Drop two objects of different weights. Do they fall at the same speed? Why or why not?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Gravity",
                              "statement": "Gravity pulls all objects down."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Says they fall same speed.",
                              "marks": 1,
                              "markCode": "M1"
                    },
                    {
                              "reasoning": "Gives reason (gravity affects all).",
                              "marks": 1,
                              "markCode": "M1"
                    }
          ],
          "finalAnswer": "**e.g., 'Same speed — gravity pulls both equally.'**",
          "commonErrors": []
},
        },
        {
          id: "sci2-u1-gravity-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Weight' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a color"
                    },
                    {
                              "id": "b",
                              "text": "how heavy something is"
                    },
                    {
                              "id": "c",
                              "text": "a size"
                    },
                    {
                              "id": "d",
                              "text": "a shape"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Weight = how heavy."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Weight = how heavy.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**how heavy**",
          "commonErrors": [
                    "Confuses with size."
          ]
},
        },
        {
          id: "sci2-u1-gravity-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Find examples of gravity: things that fall, things held up. Describe each.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Gravity",
                              "statement": "Find gravity examples."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Gives fall example.",
                              "marks": 1,
                              "markCode": "M1"
                    },
                    {
                              "reasoning": "Gives held-up example.",
                              "marks": 1,
                              "markCode": "M1"
                    }
          ],
          "finalAnswer": "**e.g., 'Fall: dropped pencil. Held: table legs.'**",
          "commonErrors": [
                    "Cannot find examples.",
                    "Both same type."
          ]
},
        },
        {
          id: "sci2-u1-gravity-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Gravity\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Toward the ground."
                    },
                    {
                              "id": "b",
                              "text": "Force pulling down."
                    },
                    {
                              "id": "c",
                              "text": "Drop to ground."
                    },
                    {
                              "id": "d",
                              "text": "Force toward center."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Gravity\" means Force pulling down."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Gravity\" means Force pulling down.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Gravity** = Force pulling down.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci2-u1-gravity-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Down\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Drop to ground."
                    },
                    {
                              "id": "b",
                              "text": "Force toward center."
                    },
                    {
                              "id": "c",
                              "text": "How heavy something is."
                    },
                    {
                              "id": "d",
                              "text": "Toward the ground."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Down\" means Toward the ground."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Down\" means Toward the ground.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Down** = Toward the ground.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci2-u1-gravity-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Fall\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Force toward center."
                    },
                    {
                              "id": "b",
                              "text": "Drop to ground."
                    },
                    {
                              "id": "c",
                              "text": "How heavy something is."
                    },
                    {
                              "id": "d",
                              "text": "More weight."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Fall\" means Drop to ground."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Fall\" means Drop to ground.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Fall** = Drop to ground.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
