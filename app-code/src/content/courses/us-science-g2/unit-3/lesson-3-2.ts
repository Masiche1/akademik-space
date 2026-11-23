import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "sci2-u3-lesson-3-2",
  code: "3-2",
  title: "Reflection",
  goal: "I CAN describe how light reflects off surfaces.",
  standards: ["NGSS 2-PS4-1"],
  vocabulary: [
    { term: "Reflect", definition: "Bounce off surface." },
    { term: "Mirror", definition: "Reflects light clearly." },
    { term: "Smooth", definition: "Flat surface." },
    { term: "Rough", definition: "Bumpy surface." },
    { term: "Bounce", definition: "Rebound." },
    { term: "Angle", definition: "Direction of light." },
    { term: "Image", definition: "What we see." },
    { term: "Surface", definition: "What light hits." },
    { term: "Shiny", definition: "Reflects well." },
    { term: "Dull", definition: "Reflects poorly." },
  ],
  concepts: [
    {
      id: "sci2-u3-reflection",
      title: "Reflection",
      skill: "Describe how light reflects off different surfaces.",
      lesson: {
        sections: [
          {
            heading: "Light bounces",
            body: "When light hits a surface, it **reflects** (bounces off). A **mirror** reflects light **clearly**, letting us see our **image**.",
          },
          {
            heading: "Smooth vs rough",
            body: "**Smooth** surfaces reflect light well (mirror). **Rough** surfaces scatter light in many directions, making it harder to see clearly.",
          },
        ],
        keyFormulas: [
          { name: "Reflect", statement: "Light bounces off surface; smooth reflects clearly, rough scatters." },
        ],
        workedExample: {
          problem: "Why can you see your face in a mirror but not in a rough wall?",
          solution: "Mirror is **smooth** and reflects light **clearly**; rough wall **scatters** light.",
        },
      },
      questions: [
        {
          id: "sci2-u3-reflection-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Reflect' means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "absorb"
                    },
                    {
                              "id": "b",
                              "text": "bounce off a surface"
                    },
                    {
                              "id": "c",
                              "text": "stop"
                    },
                    {
                              "id": "d",
                              "text": "bend through"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Reflect = bounce off."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Reflect = bounce off.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**bounce off**",
          "commonErrors": [
                    "Confuses with absorb."
          ]
},
        },
        {
          id: "sci2-u3-reflection-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "A mirror reflects light well because it is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "rough"
                    },
                    {
                              "id": "b",
                              "text": "smooth"
                    },
                    {
                              "id": "c",
                              "text": "dark"
                    },
                    {
                              "id": "d",
                              "text": "soft"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Smooth surface reflects clearly."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Smooth surface reflects clearly.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**smooth**",
          "commonErrors": [
                    "Picks rough."
          ]
},
        },
        {
          id: "sci2-u3-reflection-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Compare how light reflects off a mirror vs a rough piece of paper.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Reflection",
                              "statement": "Smooth vs rough reflection."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes mirror reflection.",
                              "marks": 1,
                              "markCode": "M1"
                    },
                    {
                              "reasoning": "Describes paper reflection.",
                              "marks": 1,
                              "markCode": "M1"
                    }
          ],
          "finalAnswer": "**e.g., 'Mirror: clear image. Paper: scattered light, no clear image.'**",
          "commonErrors": [
                    "Cannot compare.",
                    "Same result."
          ]
},
        },
        {
          id: "sci2-u3-reflection-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'rough' surface reflects light...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "clearly"
                    },
                    {
                              "id": "b",
                              "text": "in many directions (scatters)"
                    },
                    {
                              "id": "c",
                              "text": "not at all"
                    },
                    {
                              "id": "d",
                              "text": "only straight"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Rough scatters light."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Rough scatters light.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**scatters**",
          "commonErrors": [
                    "Thinks rough reflects clearly."
          ]
},
        },
        {
          id: "sci2-u3-reflection-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Find a shiny object and a dull object. Describe how each reflects light.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Reflection",
                              "statement": "Shiny vs dull."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes shiny object.",
                              "marks": 1,
                              "markCode": "M1"
                    },
                    {
                              "reasoning": "Describes dull object.",
                              "marks": 1,
                              "markCode": "M1"
                    }
          ],
          "finalAnswer": "**e.g., 'Metal spoon: shiny, reflects clearly. Wood: dull, scatters.'**",
          "commonErrors": [
                    "Cannot find.",
                    "Both same."
          ]
},
        },
        {
          id: "sci2-u3-reflection-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Reflect\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Reflects light clearly."
                    },
                    {
                              "id": "b",
                              "text": "Bounce off surface."
                    },
                    {
                              "id": "c",
                              "text": "Flat surface."
                    },
                    {
                              "id": "d",
                              "text": "Bumpy surface."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Reflect\" means Bounce off surface."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Reflect\" means Bounce off surface.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Reflect** = Bounce off surface.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci2-u3-reflection-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Mirror\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Flat surface."
                    },
                    {
                              "id": "b",
                              "text": "Bumpy surface."
                    },
                    {
                              "id": "c",
                              "text": "Rebound."
                    },
                    {
                              "id": "d",
                              "text": "Reflects light clearly."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Mirror\" means Reflects light clearly."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Mirror\" means Reflects light clearly.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Mirror** = Reflects light clearly.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci2-u3-reflection-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Smooth\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Bumpy surface."
                    },
                    {
                              "id": "b",
                              "text": "Flat surface."
                    },
                    {
                              "id": "c",
                              "text": "Rebound."
                    },
                    {
                              "id": "d",
                              "text": "Direction of light."
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
