import type { Lesson } from "../../../types.ts";

export const lesson53: Lesson = {
  id: "sci3-u5-lesson-5-3",
  code: "5-3",
  title: "Friction",
  goal: "I CAN describe friction as a force that slows motion.",
  standards: ["PS2.A"],
  vocabulary: [
    { term: "Friction", definition: "Force that slows motion." },
    { term: "Rough", definition: "Textured surface." },
    { term: "Smooth", definition: "Flat surface." },
    { term: "Surface", definition: "What things slide on." },
    { term: "Rub", definition: "Touch and move." },
    { term: "Heat", definition: "Energy from rubbing." },
    { term: "Brake", definition: "Stops motion." },
    { term: "Slide", definition: "Move smoothly." },
  ],
  concepts: [
    {
      id: "sci3-u5-friction",
      title: "Friction",
      skill: "Describe friction as a force that opposes motion between surfaces.",
      lesson: {
        sections: [
          {
            heading: "Friction slows things",
            body: "**Friction** is a force that **opposes** motion when two surfaces **rub**. Rough surfaces have **more** friction; smooth surfaces have **less**.",
          },
          {
            heading: "Friction is useful",
            body: "Friction lets us **walk** without slipping, **brake** cars, and hold things. It also creates **heat** when rubbing.",
          },
        ],
        keyFormulas: [
          { name: "Friction", statement: "Rough surface = more friction; smooth = less; friction opposes motion." },
        ],
        workedExample: {
          problem: "Why is it easier to slide on ice than on carpet?",
          solution: "Ice is **smooth** — **less friction**, so things slide easily. Carpet is **rough** — **more friction**.",
        },
      },
      questions: [
        {
          id: "sci3-u5-friction-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Friction is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a push"
                    },
                    {
                              "id": "b",
                              "text": "a force that opposes motion between surfaces"
                    },
                    {
                              "id": "c",
                              "text": "gravity"
                    },
                    {
                              "id": "d",
                              "text": "a magnet"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Friction opposes motion."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Friction opposes motion.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "a force that opposes motion between surfaces",
          "commonErrors": [
                    "Thinks friction is gravity."
          ]
},
        },
        {
          id: "sci3-u5-friction-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which has more friction?",
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
                              "text": "glass"
                    },
                    {
                              "id": "d",
                              "text": "waxed floor"
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
          "finalAnswer": "carpet",
          "commonErrors": [
                    "Thinks ice has more friction."
          ]
},
        },
        {
          id: "sci3-u5-friction-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Explain why rough surfaces slow things down more than smooth surfaces.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Friction",
                              "statement": "Rough = more friction."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Explains rough = more friction.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**e.g., 'Rough surfaces have more bumps that rub, creating more friction that slows motion.'**",
          "commonErrors": [
                    "Says smooth is slower.",
                    "Cannot explain."
          ]
},
        },
        {
          id: "sci3-u5-friction-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Friction is useful because it lets us...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "fly"
                    },
                    {
                              "id": "b",
                              "text": "walk without slipping and brake"
                    },
                    {
                              "id": "c",
                              "text": "float"
                    },
                    {
                              "id": "d",
                              "text": "see"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Friction helps us walk and brake."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Friction helps us walk and brake.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "walk without slipping and brake",
          "commonErrors": [
                    "Thinks friction is always bad."
          ]
},
        },
        {
          id: "sci3-u5-friction-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Design an experiment to test which surface has more friction: sandpaper or glass.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Friction",
                              "statement": "Experiment design."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Designs experiment.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Predicts result.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'Push block on each surface; sandpaper slows faster = more friction.'**",
          "commonErrors": [
                    "Cannot design.",
                    "No prediction."
          ]
},
        },
        {
          id: "sci3-u5-friction-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Friction\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Textured surface."
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
                              "text": "What things slide on."
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
          id: "sci3-u5-friction-q7",
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
                              "text": "What things slide on."
                    },
                    {
                              "id": "c",
                              "text": "Touch and move."
                    },
                    {
                              "id": "d",
                              "text": "Textured surface."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Rough\" means Textured surface."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Rough\" means Textured surface.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Rough** = Textured surface.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci3-u5-friction-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Smooth\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "What things slide on."
                    },
                    {
                              "id": "b",
                              "text": "Flat surface."
                    },
                    {
                              "id": "c",
                              "text": "Touch and move."
                    },
                    {
                              "id": "d",
                              "text": "Energy from rubbing."
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
