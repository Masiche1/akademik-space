import type { Lesson } from "../../../types.ts";

export const lesson74: Lesson = {
  id: "s0-u7-lesson-7-4",
  code: "7-4",
  title: "Caring for Habitats",
  goal: "I CAN describe how we can care for habitats and living things.",
  standards: ["K-ESS2-2", "K-LS1-1"],
  vocabulary: [
    { term: "Care", definition: "Look after and protect." },
    { term: "Protect", definition: "Keep safe." },
    { term: "Clean", definition: "Remove trash/dirt." },
    { term: "Save", definition: "Keep for the future." },
    { term: "Trash", definition: "Things we throw away." },
    { term: "Pollution", definition: "Harmful things in environment." },
    { term: "Recycle", definition: "Reuse materials." },
    { term: "Habitat", definition: "Living place." },
  ],
  concepts: [
    {
      id: "s0-u7-habitat-care",
      title: "Caring for habitats",
      skill: "Describe ways to care for habitats and protect living things.",
      lesson: {
        sections: [
          {
            heading: "Help habitats",
            body: "We can **care** for habitats by **protecting** them, keeping them **clean** (no **trash**), reducing **pollution**, and **recycling**.",
          },
          {
            heading: "Why it matters",
            body: "When we **save** habitats and keep them healthy, the animals and plants that live there can **survive** and **thrive**.",
          },
        ],
        keyFormulas: [
          { name: "Care for habitats", statement: "Protect + clean + reduce pollution + recycle = healthy habitats." },
        ],
        workedExample: {
          problem: "How can you help keep a park habitat clean?",
          solution: "Pick up **trash**, **recycle** what you can, and **do not litter**.",
        },
      },
      questions: [
        {
          id: "s0-u7-habitat-care-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "To care for a habitat, we should...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "litter"
                    },
                    {
                              "id": "b",
                              "text": "keep it clean and protect it"
                    },
                    {
                              "id": "c",
                              "text": "pollute it"
                    },
                    {
                              "id": "d",
                              "text": "ignore it"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Keep clean + protect."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Keep clean + protect.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**clean + protect**",
          "commonErrors": [
                    "Picks harmful action."
          ]
},
        },
        {
          id: "s0-u7-habitat-care-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "'Pollution' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "clean air"
                    },
                    {
                              "id": "b",
                              "text": "harmful things in the environment"
                    },
                    {
                              "id": "c",
                              "text": "a habitat"
                    },
                    {
                              "id": "d",
                              "text": "a plant"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Pollution = harmful things."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Pollution = harmful things.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**harmful things**",
          "commonErrors": [
                    "Confuses with clean."
          ]
},
        },
        {
          id: "s0-u7-habitat-care-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "List two ways you can help care for a habitat (like a park or pond).",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Care for habitats",
                              "statement": "2 ways to help."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Lists 2 ways.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**e.g., 'Pick up trash; do not feed wild animals.'**",
          "commonErrors": [
                    "Cannot list.",
                    "Harmful actions."
          ]
},
        },
        {
          id: "s0-u7-habitat-care-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Recycle' means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "throw away"
                    },
                    {
                              "id": "b",
                              "text": "reuse materials instead of throwing them"
                    },
                    {
                              "id": "c",
                              "text": "pollute"
                    },
                    {
                              "id": "d",
                              "text": "litter"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Recycle = reuse materials."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Recycle = reuse materials.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**reuse materials**",
          "commonErrors": [
                    "Confuses with trash."
          ]
},
        },
        {
          id: "s0-u7-habitat-care-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Describe two ways humans can harm habitats and two ways we can help them.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Habitat care",
                              "statement": "2 harms + 2 helps."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Names 2 harms.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Names 2 helps.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'Harm: littering, pollution. Help: recycle, protect.'**",
          "commonErrors": [
                    "Only one type.",
                    "Cannot describe."
          ]
},
        },
        {
          id: "s0-u7-habitat-care-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Care\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Keep safe."
                    },
                    {
                              "id": "b",
                              "text": "Look after and protect."
                    },
                    {
                              "id": "c",
                              "text": "Remove trash/dirt."
                    },
                    {
                              "id": "d",
                              "text": "Keep for the future."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Care\" means Look after and protect."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Care\" means Look after and protect.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Care** = Look after and protect.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "s0-u7-habitat-care-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Protect\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Remove trash/dirt."
                    },
                    {
                              "id": "b",
                              "text": "Keep for the future."
                    },
                    {
                              "id": "c",
                              "text": "Things we throw away."
                    },
                    {
                              "id": "d",
                              "text": "Keep safe."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Protect\" means Keep safe."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Protect\" means Keep safe.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Protect** = Keep safe.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "s0-u7-habitat-care-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Clean\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Keep for the future."
                    },
                    {
                              "id": "b",
                              "text": "Remove trash/dirt."
                    },
                    {
                              "id": "c",
                              "text": "Things we throw away."
                    },
                    {
                              "id": "d",
                              "text": "Harmful things in environment."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Clean\" means Remove trash/dirt."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Clean\" means Remove trash/dirt.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Clean** = Remove trash/dirt.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
