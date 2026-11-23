import type { Lesson } from "../../../types.ts";

export const lesson71: Lesson = {
  id: "sci2-u7-lesson-7-1",
  code: "7-1",
  title: "Natural Resources",
  goal: "I CAN identify natural resources and their uses.",
  standards: ["NGSS 2-ESS2-1"],
  vocabulary: [
    { term: "Resource", definition: "Something we use from nature." },
    { term: "Water", definition: "Essential resource." },
    { term: "Soil", definition: "Grows food." },
    { term: "Trees", definition: "Wood and oxygen." },
    { term: "Sun", definition: "Energy source." },
    { term: "Air", definition: "We breathe it." },
    { term: "Rock", definition: "Building material." },
    { term: "Coal", definition: "Energy resource." },
    { term: "Renewable", definition: "Replaced naturally." },
    { term: "Nonrenewable", definition: "Limited supply." },
  ],
  concepts: [
    {
      id: "sci2-u7-natural-resources",
      title: "Natural resources",
      skill: "Identify natural resources and how we use them.",
      lesson: {
        sections: [
          {
            heading: "Resources from Earth",
            body: "**Natural resources** come from nature: **water**, **soil**, **trees**, **sun**, **air**, **rocks**, **coal**, **oil**. We use them for food, energy, building, and more.",
          },
          {
            heading: "Renewable vs nonrenewable",
            body: "**Renewable** resources are replaced naturally (sunlight, water, trees). **Nonrenewable** resources are limited (coal, oil, metals) and can run out.",
          },
        ],
        keyFormulas: [
          { name: "Resources", statement: "Water + soil + trees + sun + air + rock + coal = natural resources." },
        ],
        workedExample: {
          problem: "Is sunlight renewable or nonrenewable?",
          solution: "It's **renewable** — the sun will keep shining.",
        },
      },
      questions: [
        {
          id: "sci2-u7-natural-resources-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'natural resource' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "something made by humans"
                    },
                    {
                              "id": "b",
                              "text": "something we get from nature"
                    },
                    {
                              "id": "c",
                              "text": "a machine"
                    },
                    {
                              "id": "d",
                              "text": "a tool"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Natural resource = from nature."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Natural resource = from nature.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**from nature**",
          "commonErrors": [
                    "Confuses with human-made."
          ]
},
        },
        {
          id: "sci2-u7-natural-resources-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is a renewable resource?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "coal"
                    },
                    {
                              "id": "b",
                              "text": "sunlight"
                    },
                    {
                              "id": "c",
                              "text": "oil"
                    },
                    {
                              "id": "d",
                              "text": "metal"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Sunlight is renewable."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Sunlight is renewable.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**sunlight**",
          "commonErrors": [
                    "Picks nonrenewable."
          ]
},
        },
        {
          id: "sci2-u7-natural-resources-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Name three natural resources and how we use each.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Natural resources",
                              "statement": "Name + use."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Names 3 resources + uses.",
                              "marks": 1,
                              "markCode": "M1"
                    }
          ],
          "finalAnswer": "**e.g., 'Water: drink. Trees: wood. Sun: energy.'**",
          "commonErrors": [
                    "Cannot name.",
                    "Fewer than 3."
          ]
},
        },
        {
          id: "sci2-u7-natural-resources-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Nonrenewable' means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "replaced naturally"
                    },
                    {
                              "id": "b",
                              "text": "limited supply that can run out"
                    },
                    {
                              "id": "c",
                              "text": "free"
                    },
                    {
                              "id": "d",
                              "text": "abundant"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Nonrenewable = limited."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Nonrenewable = limited.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**limited**",
          "commonErrors": [
                    "Confuses with renewable."
          ]
},
        },
        {
          id: "sci2-u7-natural-resources-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Compare renewable and nonrenewable resources. Give examples of each.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Resources",
                              "statement": "Renewable vs nonrenewable."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Names renewable examples.",
                              "marks": 1,
                              "markCode": "M1"
                    },
                    {
                              "reasoning": "Names nonrenewable examples.",
                              "marks": 1,
                              "markCode": "M1"
                    }
          ],
          "finalAnswer": "**e.g., 'Renewable: sun, water. Nonrenewable: coal, oil.'**",
          "commonErrors": [
                    "Cannot compare.",
                    "Wrong categories."
          ]
},
        },
        {
          id: "sci2-u7-natural-resources-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Resource\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Essential resource."
                    },
                    {
                              "id": "b",
                              "text": "Something we use from nature."
                    },
                    {
                              "id": "c",
                              "text": "Grows food."
                    },
                    {
                              "id": "d",
                              "text": "Wood and oxygen."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Resource\" means Something we use from nature."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Resource\" means Something we use from nature.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Resource** = Something we use from nature.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci2-u7-natural-resources-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Water\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Grows food."
                    },
                    {
                              "id": "b",
                              "text": "Wood and oxygen."
                    },
                    {
                              "id": "c",
                              "text": "Energy source."
                    },
                    {
                              "id": "d",
                              "text": "Essential resource."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Water\" means Essential resource."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Water\" means Essential resource.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Water** = Essential resource.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci2-u7-natural-resources-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Soil\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Wood and oxygen."
                    },
                    {
                              "id": "b",
                              "text": "Grows food."
                    },
                    {
                              "id": "c",
                              "text": "Energy source."
                    },
                    {
                              "id": "d",
                              "text": "We breathe it."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Soil\" means Grows food."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Soil\" means Grows food.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Soil** = Grows food.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
