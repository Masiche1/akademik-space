import type { Lesson } from "../../../types.ts";

export const lesson42: Lesson = {
  id: "s0-u4-lesson-4-2",
  code: "4-2",
  title: "Material Properties",
  goal: "I CAN describe how materials feel, bend, stretch and break.",
  standards: ["K-PS1-1", "K-PS1-2"],
  vocabulary: [
    { term: "Property", definition: "Something we can observe about a material." },
    { term: "Hard", definition: "Does not bend easily." },
    { term: "Soft", definition: "Easy to squeeze or bend." },
    { term: "Bendy", definition: "Can bend without breaking." },
    { term: "Stiff", definition: "Does not bend." },
    { term: "Rough", definition: "Not smooth." },
    { term: "Smooth", definition: "Not rough." },
    { term: "Break", definition: "Come apart." },
  ],
  concepts: [
    {
      id: "s0-u4-material-properties",
      title: "Material properties",
      skill: "Describe observable properties: hard, soft, bendy, stiff, rough, smooth.",
      lesson: {
        sections: [
          {
            heading: "Properties we can feel",
            body: "Materials have **properties** we can observe: **hard** vs **soft**, **bendy** vs **stiff**, **rough** vs **smooth**. These tell us what a material can do.",
          },
          {
            heading: "Test materials",
            body: "To find properties, **test** the material — try to bend it, squeeze it, rub it. Does it bend? Is it smooth? Does it break?",
          },
        ],
        keyFormulas: [
          { name: "Properties", statement: "Hard/soft, bendy/stiff, rough/smooth, break — test to find." },
        ],
        workedExample: {
          problem: "Test a rubber band and a ruler. Which is bendy? Which is stiff?",
          solution: "**Rubber band is bendy** (stretches/bends). **Ruler is stiff** (does not bend easily).",
        },
      },
      questions: [
        {
          id: "s0-u4-material-properties-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'property' of a material is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "its name"
                    },
                    {
                              "id": "b",
                              "text": "something we can observe about it"
                    },
                    {
                              "id": "c",
                              "text": "its color only"
                    },
                    {
                              "id": "d",
                              "text": "its price"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Property = observable quality."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Property = observable quality.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**observable quality**",
          "commonErrors": [
                    "Confuses with name."
          ]
},
        },
        {
          id: "s0-u4-material-properties-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "A 'bendy' material...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "breaks easily"
                    },
                    {
                              "id": "b",
                              "text": "can bend without breaking"
                    },
                    {
                              "id": "c",
                              "text": "is hard"
                    },
                    {
                              "id": "d",
                              "text": "is rough"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Bendy = bends without breaking."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Bendy = bends without breaking.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**bends without breaking**",
          "commonErrors": [
                    "Confuses with break."
          ]
},
        },
        {
          id: "s0-u4-material-properties-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Choose two materials. Describe a property of each (hard/soft, bendy/stiff, rough/smooth).",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Properties",
                              "statement": "2 materials + properties."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes properties of 2 materials.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**e.g., 'Cloth is soft; ruler is stiff.'**",
          "commonErrors": [
                    "Cannot describe.",
                    "Same property."
          ]
},
        },
        {
          id: "s0-u4-material-properties-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Stiff' means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "bendy"
                    },
                    {
                              "id": "b",
                              "text": "does not bend easily"
                    },
                    {
                              "id": "c",
                              "text": "soft"
                    },
                    {
                              "id": "d",
                              "text": "rough"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Stiff = does not bend."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Stiff = does not bend.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**does not bend**",
          "commonErrors": [
                    "Confuses with bendy."
          ]
},
        },
        {
          id: "s0-u4-material-properties-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Test two materials (bend, squeeze, rub). Describe one property of each and how you tested it.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Properties",
                              "statement": "Test + describe property."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Tests materials.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Describes property + method.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'Bend ruler -> stiff; rub cloth -> soft.'**",
          "commonErrors": [
                    "No test.",
                    "No property."
          ]
},
        },
        {
          id: "s0-u4-material-properties-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Property\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Does not bend easily."
                    },
                    {
                              "id": "b",
                              "text": "Something we can observe about a material."
                    },
                    {
                              "id": "c",
                              "text": "Easy to squeeze or bend."
                    },
                    {
                              "id": "d",
                              "text": "Can bend without breaking."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Property\" means Something we can observe about a material."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Property\" means Something we can observe about a material.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Property** = Something we can observe about a material.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "s0-u4-material-properties-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Hard\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Easy to squeeze or bend."
                    },
                    {
                              "id": "b",
                              "text": "Can bend without breaking."
                    },
                    {
                              "id": "c",
                              "text": "Does not bend."
                    },
                    {
                              "id": "d",
                              "text": "Does not bend easily."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Hard\" means Does not bend easily."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Hard\" means Does not bend easily.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Hard** = Does not bend easily.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "s0-u4-material-properties-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Soft\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Can bend without breaking."
                    },
                    {
                              "id": "b",
                              "text": "Easy to squeeze or bend."
                    },
                    {
                              "id": "c",
                              "text": "Does not bend."
                    },
                    {
                              "id": "d",
                              "text": "Not smooth."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Soft\" means Easy to squeeze or bend."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Soft\" means Easy to squeeze or bend.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Soft** = Easy to squeeze or bend.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
