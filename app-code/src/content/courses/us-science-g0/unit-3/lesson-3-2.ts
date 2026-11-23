import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "s0-u3-lesson-3-2",
  code: "3-2",
  title: "Making Things Move",
  goal: "I CAN make objects move by pushing or pulling them.",
  standards: ["K-PS2-1", "K-PS2-2"],
  vocabulary: [
    { term: "Move", definition: "Change position." },
    { term: "Push", definition: "Force away." },
    { term: "Pull", definition: "Force toward." },
    { term: "Object", definition: "A thing you can touch." },
    { term: "Roll", definition: "Move by turning over and over." },
    { term: "Slide", definition: "Move smoothly along a surface." },
    { term: "Speed", definition: "How fast something moves." },
    { term: "Stop", definition: "Make something not move." },
  ],
  concepts: [
    {
      id: "s0-u3-make-things-move",
      title: "Making things move",
      skill: "Make objects move by pushing or pulling, and observe how they move.",
      lesson: {
        sections: [
          {
            heading: "Forces make things move",
            body: "To make an **object** **move**, apply a **push** or **pull**. The object might **roll** (turn over), **slide** (smoothly along), or **stop** if you push against it.",
          },
          {
            heading: "How it moves",
            body: "A stronger **push** makes things move **faster** or **farther**. Different objects move differently — a ball **rolls**, a box **slides**.",
          },
        ],
        keyFormulas: [
          { name: "Move", statement: "Push/pull -> roll, slide, stop; stronger force = faster/farther." },
        ],
        workedExample: {
          problem: "You push a toy car gently vs hard. What happens differently?",
          solution: "Gently: car moves **slowly**/short distance. Hard: car moves **fast**/far.",
        },
      },
      questions: [
        {
          id: "s0-u3-make-things-move-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "To make an object move, you need to...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "look at it"
                    },
                    {
                              "id": "b",
                              "text": "push or pull it"
                    },
                    {
                              "id": "c",
                              "text": "name it"
                    },
                    {
                              "id": "d",
                              "text": "color it"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Push or pull = force makes it move."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Push or pull = force makes it move.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**push or pull**",
          "commonErrors": [
                    "Thinks looking moves it."
          ]
},
        },
        {
          id: "s0-u3-make-things-move-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "A ball typically...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "slides"
                    },
                    {
                              "id": "b",
                              "text": "rolls"
                    },
                    {
                              "id": "c",
                              "text": "stays still"
                    },
                    {
                              "id": "d",
                              "text": "floats"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Balls roll."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Balls roll.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**rolls**",
          "commonErrors": [
                    "Confuses with slide."
          ]
},
        },
        {
          id: "s0-u3-make-things-move-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Push or pull an object. Describe how it moved (roll, slide, stop) and how fast.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Make move",
                              "statement": "Push/pull + movement description."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Pushes/pulls + describes movement.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**e.g., 'Pushed the car; it rolled fast across the floor.'**",
          "commonErrors": [
                    "No force.",
                    "Cannot describe."
          ]
},
        },
        {
          id: "s0-u3-make-things-move-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A stronger push makes an object move...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "slower"
                    },
                    {
                              "id": "b",
                              "text": "faster or farther"
                    },
                    {
                              "id": "c",
                              "text": "nowhere"
                    },
                    {
                              "id": "d",
                              "text": "backward only"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Stronger force = faster/farther."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Stronger force = faster/farther.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**faster/farther**",
          "commonErrors": [
                    "Thinks stronger is slower."
          ]
},
        },
        {
          id: "s0-u3-make-things-move-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Push the same object gently and then hard. Describe the difference in how it moves.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Force and motion",
                              "statement": "Gentle vs hard push comparison."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Pushes gently.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Pushes hard + compares.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'Gentle: slow. Hard: fast/far.'**",
          "commonErrors": [
                    "Same force twice.",
                    "Cannot compare."
          ]
},
        },
        {
          id: "s0-u3-make-things-move-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Move\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Force away."
                    },
                    {
                              "id": "b",
                              "text": "Change position."
                    },
                    {
                              "id": "c",
                              "text": "Force toward."
                    },
                    {
                              "id": "d",
                              "text": "A thing you can touch."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Move\" means Change position."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Move\" means Change position.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Move** = Change position.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "s0-u3-make-things-move-q7",
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
                              "text": "A thing you can touch."
                    },
                    {
                              "id": "c",
                              "text": "Move by turning over and over."
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
          id: "s0-u3-make-things-move-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Pull\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A thing you can touch."
                    },
                    {
                              "id": "b",
                              "text": "Force toward."
                    },
                    {
                              "id": "c",
                              "text": "Move by turning over and over."
                    },
                    {
                              "id": "d",
                              "text": "Move smoothly along a surface."
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
