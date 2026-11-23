import type { Lesson } from "../../../types.ts";

export const lesson34: Lesson = {
  id: "s0-u3-lesson-3-4",
  code: "3-4",
  title: "Observing Motion",
  goal: "I CAN describe how objects move and what makes them move.",
  standards: ["K-PS2-1", "K-PS2-2"],
  vocabulary: [
    { term: "Motion", definition: "Movement." },
    { term: "Fast", definition: "Quick movement." },
    { term: "Slow", definition: "Not quick." },
    { term: "Speed", definition: "How fast." },
    { term: "Direction", definition: "Which way." },
    { term: "Path", definition: "The route something takes." },
    { term: "Cause", definition: "What makes it happen." },
    { term: "Effect", definition: "What happens." },
    { term: "Change", definition: "Something different." },
  ],
  concepts: [
    {
      id: "s0-u3-motion-observe",
      title: "Observing motion",
      skill: "Describe object motion: speed, direction, path and cause.",
      lesson: {
        sections: [
          {
            heading: "Describe motion",
            body: "Objects **move** in different ways — **fast** or **slow**, in different **directions**, along different **paths** (straight, curved, zigzag).",
          },
          {
            heading: "Cause and effect",
            body: "Something **causes** motion — a push, pull, or gravity. The **effect** is the movement we observe.",
          },
        ],
        keyFormulas: [
          { name: "Motion", statement: "Speed + direction + path + cause = describing movement." },
        ],
        workedExample: {
          problem: "Describe a toy car rolling down a ramp: fast or slow? What direction? What path?",
          solution: "**Fast**, moving **down** the ramp, in a **straight** path.",
        },
      },
      questions: [
        {
          id: "s0-u3-motion-observe-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Motion' means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "being still"
                    },
                    {
                              "id": "b",
                              "text": "movement"
                    },
                    {
                              "id": "c",
                              "text": "a color"
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
                              "statement": "Motion = movement."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Motion = movement.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**movement**",
          "commonErrors": [
                    "Confuses with stillness."
          ]
},
        },
        {
          id: "s0-u3-motion-observe-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "A 'cause' of motion is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "the result"
                    },
                    {
                              "id": "b",
                              "text": "what makes it move"
                    },
                    {
                              "id": "c",
                              "text": "the path"
                    },
                    {
                              "id": "d",
                              "text": "the speed"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Cause = what makes it move."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Cause = what makes it move.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**what makes it move**",
          "commonErrors": [
                    "Confuses with effect."
          ]
},
        },
        {
          id: "s0-u3-motion-observe-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Watch an object move (a ball, a car, a person). Describe: fast/slow, direction, path.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Motion",
                              "statement": "Speed + direction + path."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes motion fully.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**e.g., 'Ball rolled fast down the hill in a curve.'**",
          "commonErrors": [
                    "Cannot describe.",
                    "Missing parts."
          ]
},
        },
        {
          id: "s0-u3-motion-observe-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Path' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "speed"
                    },
                    {
                              "id": "b",
                              "text": "the route something takes"
                    },
                    {
                              "id": "c",
                              "text": "direction only"
                    },
                    {
                              "id": "d",
                              "text": "a cause"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Path = route taken."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Path = route taken.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**route**",
          "commonErrors": [
                    "Confuses with direction."
          ]
},
        },
        {
          id: "s0-u3-motion-observe-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Make an object move. Describe its motion: how fast, which direction, what path, and what caused it.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Motion",
                              "statement": "Full motion description."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes speed + direction.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Describes path + cause.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'I pushed the ball; it rolled fast to the left in a straight path.'**",
          "commonErrors": [
                    "Cannot describe.",
                    "Missing parts."
          ]
},
        },
        {
          id: "s0-u3-motion-observe-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Motion\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Quick movement."
                    },
                    {
                              "id": "b",
                              "text": "Movement."
                    },
                    {
                              "id": "c",
                              "text": "Not quick."
                    },
                    {
                              "id": "d",
                              "text": "How fast."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Motion\" means Movement."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Motion\" means Movement.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Motion** = Movement.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "s0-u3-motion-observe-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Fast\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Not quick."
                    },
                    {
                              "id": "b",
                              "text": "How fast."
                    },
                    {
                              "id": "c",
                              "text": "Which way."
                    },
                    {
                              "id": "d",
                              "text": "Quick movement."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Fast\" means Quick movement."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Fast\" means Quick movement.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Fast** = Quick movement.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "s0-u3-motion-observe-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Slow\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "How fast."
                    },
                    {
                              "id": "b",
                              "text": "Not quick."
                    },
                    {
                              "id": "c",
                              "text": "Which way."
                    },
                    {
                              "id": "d",
                              "text": "The route something takes."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Slow\" means Not quick."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Slow\" means Not quick.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Slow** = Not quick.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
