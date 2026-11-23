import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "sci2-u1-lesson-1-2",
  code: "1-2",
  title: "Friction",
  goal: "I CAN describe how friction slows things down.",
  standards: ["NGSS 2-PS2-1"],
  vocabulary: [
    { term: "Friction", definition: "Force that slows motion." },
    { term: "Rough", definition: "Bumpy surface." },
    { term: "Smooth", definition: "Flat surface." },
    { term: "Slow", definition: "Reduce speed." },
    { term: "Surface", definition: "What things touch." },
    { term: "Rub", definition: "Move against surface." },
    { term: "Grip", definition: "Hold on to things." },
    { term: "Slide", definition: "Move smoothly." },
  ],
  concepts: [
    {
      id: "sci2-u1-friction",
      title: "Friction",
      skill: "Describe how friction slows motion on different surfaces.",
      lesson: {
        sections: [
          {
            heading: "What is friction?",
            body: "**Friction** is a force that **slows** things down when they rub against a **surface**. A **rough** surface has more friction than a **smooth** one.",
          },
          {
            heading: "More or less?",
            body: "On **rough** surfaces (carpet, sand), things **slow** down faster. On **smooth** surfaces (ice, floor), things slide farther.",
          },
        ],
        keyFormulas: [
          { name: "Friction", statement: "Rough surface = more friction = slower. Smooth = less = faster." },
        ],
        workedExample: {
          problem: "Which slides farther: a toy car on carpet or on a smooth floor?",
          solution: "It slides farther on the **smooth floor** — less friction.",
        },
      },
      questions: [
        {
          id: "sci2-u1-friction-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Friction' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a push"
                    },
                    {
                              "id": "b",
                              "text": "a force that slows things down"
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
                              "statement": "Friction slows motion."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Friction slows motion.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**slows motion**",
          "commonErrors": [
                    "Confuses with push/pull."
          ]
},
        },
        {
          id: "sci2-u1-friction-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which has MORE friction?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "ice"
                    },
                    {
                              "id": "b",
                              "text": "carpet"
                    },
                    {
                              "id": "c",
                              "text": "smooth floor"
                    },
                    {
                              "id": "d",
                              "text": "glass"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Carpet is rough = more friction."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Carpet is rough = more friction.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**carpet**",
          "commonErrors": [
                    "Picks smooth surface."
          ]
},
        },
        {
          id: "sci2-u1-friction-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Push a toy car on two surfaces. Which stops faster? Why?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Friction",
                              "statement": "Rough=more friction=stops faster."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Names which stops faster.",
                              "marks": 1,
                              "markCode": "M1"
                    },
                    {
                              "reasoning": "Gives reason (friction).",
                              "marks": 1,
                              "markCode": "M1"
                    }
          ],
          "finalAnswer": "**e.g., 'Carpet stops faster because it has more friction.'**",
          "commonErrors": [
                    "Cannot compare.",
                    "No reason."
          ]
},
        },
        {
          id: "sci2-u1-friction-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "On a 'smooth' surface, friction is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "high"
                    },
                    {
                              "id": "b",
                              "text": "low"
                    },
                    {
                              "id": "c",
                              "text": "zero"
                    },
                    {
                              "id": "d",
                              "text": "infinite"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Smooth = low friction."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Smooth = low friction.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**low**",
          "commonErrors": [
                    "Thinks smooth has high friction."
          ]
},
        },
        {
          id: "sci2-u1-friction-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Slide a block on rough sandpaper vs smooth table. Describe the difference.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Friction",
                              "statement": "Rough vs smooth surface."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes rough surface result.",
                              "marks": 1,
                              "markCode": "M1"
                    },
                    {
                              "reasoning": "Describes smooth surface result.",
                              "marks": 1,
                              "markCode": "M1"
                    }
          ],
          "finalAnswer": "**e.g., 'Sandpaper: stops fast. Table: slides far.'**",
          "commonErrors": [
                    "Cannot compare.",
                    "Same result."
          ]
},
        },
        {
          id: "sci2-u1-friction-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Friction\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Bumpy surface."
                    },
                    {
                              "id": "b",
                              "text": "Force that slows motion."
                    },
                    {
                              "id": "c",
                              "text": "Flat surface."
                    },
                    {
                              "id": "d",
                              "text": "Reduce speed."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Friction\" means Force that slows motion."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Friction\" means Force that slows motion.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Friction** = Force that slows motion.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci2-u1-friction-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Rough\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Flat surface."
                    },
                    {
                              "id": "b",
                              "text": "Reduce speed."
                    },
                    {
                              "id": "c",
                              "text": "What things touch."
                    },
                    {
                              "id": "d",
                              "text": "Bumpy surface."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Rough\" means Bumpy surface."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Rough\" means Bumpy surface.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Rough** = Bumpy surface.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci2-u1-friction-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Smooth\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Reduce speed."
                    },
                    {
                              "id": "b",
                              "text": "Flat surface."
                    },
                    {
                              "id": "c",
                              "text": "What things touch."
                    },
                    {
                              "id": "d",
                              "text": "Move against surface."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Smooth\" means Flat surface."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Smooth\" means Flat surface.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Smooth** = Flat surface.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
