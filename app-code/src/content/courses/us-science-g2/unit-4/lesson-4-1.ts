import type { Lesson } from "../../../types.ts";

export const lesson41: Lesson = {
  id: "sci2-u4-lesson-4-1",
  code: "4-1",
  title: "What Plants Need",
  goal: "I CAN describe what plants need to grow.",
  standards: ["NGSS 2-LS2-1"],
  vocabulary: [
    { term: "Plant", definition: "Living thing that makes food." },
    { term: "Root", definition: "Part that absorbs water." },
    { term: "Stem", definition: "Supports plant." },
    { term: "Leaf", definition: "Makes food from sunlight." },
    { term: "Sunlight", definition: "Energy for plants." },
    { term: "Water", definition: "Needed for growth." },
    { term: "Soil", definition: "Where roots grow." },
    { term: "Nutrient", definition: "Food for plant." },
    { term: "Grow", definition: "Get bigger." },
    { term: "Photosynthesis", definition: "Process making food." },
  ],
  concepts: [
    {
      id: "sci2-u4-plant-needs",
      title: "What plants need",
      skill: "Describe what plants need to grow: sunlight, water, soil, air.",
      lesson: {
        sections: [
          {
            heading: "Plants need four things",
            body: "Plants need **sunlight** (energy), **water**, **soil** (nutrients), and **air** to **grow**. Roots absorb water and nutrients; leaves use sunlight to make food (**photosynthesis**).",
          },
          {
            heading: "Parts of a plant",
            body: "**Roots** absorb water, **stem** supports the plant, **leaves** make food. All parts work together for growth.",
          },
        ],
        keyFormulas: [
          { name: "Plant needs", statement: "Sunlight + water + soil + air = plant growth." },
        ],
        workedExample: {
          problem: "What happens if you don't water a plant?",
          solution: "It will **wilt** and eventually **die** because it lacks **water**.",
        },
      },
      questions: [
        {
          id: "sci2-u4-plant-needs-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Plants need which of these to grow?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "candy"
                    },
                    {
                              "id": "b",
                              "text": "sunlight, water, soil, air"
                    },
                    {
                              "id": "c",
                              "text": "only water"
                    },
                    {
                              "id": "d",
                              "text": "only soil"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Sunlight + water + soil + air."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Sunlight + water + soil + air.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**all four**",
          "commonErrors": [
                    "Picks one need."
          ]
},
        },
        {
          id: "sci2-u4-plant-needs-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Leaves make food using...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "soil"
                    },
                    {
                              "id": "b",
                              "text": "sunlight"
                    },
                    {
                              "id": "c",
                              "text": "water only"
                    },
                    {
                              "id": "d",
                              "text": "air only"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Leaves use sunlight for photosynthesis."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Leaves use sunlight for photosynthesis.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**sunlight**",
          "commonErrors": [
                    "Picks wrong input."
          ]
},
        },
        {
          id: "sci2-u4-plant-needs-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Name four things plants need and what each does.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Plant needs",
                              "statement": "Sunlight, water, soil, air."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Names 4 needs + functions.",
                              "marks": 1,
                              "markCode": "M1"
                    }
          ],
          "finalAnswer": "**e.g., 'Sunlight: energy. Water: transport. Soil: nutrients. Air: gases.'**",
          "commonErrors": [
                    "Cannot name.",
                    "Fewer than 4."
          ]
},
        },
        {
          id: "sci2-u4-plant-needs-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Roots are important because they...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "make flowers"
                    },
                    {
                              "id": "b",
                              "text": "absorb water and nutrients"
                    },
                    {
                              "id": "c",
                              "text": "make seeds"
                    },
                    {
                              "id": "d",
                              "text": "attract bees"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Roots absorb water/nutrients."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Roots absorb water/nutrients.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**absorb**",
          "commonErrors": [
                    "Picks wrong function."
          ]
},
        },
        {
          id: "sci2-u4-plant-needs-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Describe how a plant uses sunlight, water, and soil to grow.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Plant needs",
                              "statement": "Sunlight + water + soil = growth."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes sunlight use.",
                              "marks": 1,
                              "markCode": "M1"
                    },
                    {
                              "reasoning": "Describes water + soil use.",
                              "marks": 1,
                              "markCode": "M1"
                    }
          ],
          "finalAnswer": "**e.g., 'Sunlight: energy for food. Water: transport. Soil: nutrients.'**",
          "commonErrors": [
                    "Cannot describe.",
                    "Missing parts."
          ]
},
        },
        {
          id: "sci2-u4-plant-needs-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Plant\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Part that absorbs water."
                    },
                    {
                              "id": "b",
                              "text": "Living thing that makes food."
                    },
                    {
                              "id": "c",
                              "text": "Supports plant."
                    },
                    {
                              "id": "d",
                              "text": "Makes food from sunlight."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Plant\" means Living thing that makes food."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Plant\" means Living thing that makes food.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Plant** = Living thing that makes food.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci2-u4-plant-needs-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Root\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Supports plant."
                    },
                    {
                              "id": "b",
                              "text": "Makes food from sunlight."
                    },
                    {
                              "id": "c",
                              "text": "Energy for plants."
                    },
                    {
                              "id": "d",
                              "text": "Part that absorbs water."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Root\" means Part that absorbs water."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Root\" means Part that absorbs water.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Root** = Part that absorbs water.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci2-u4-plant-needs-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Stem\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Makes food from sunlight."
                    },
                    {
                              "id": "b",
                              "text": "Supports plant."
                    },
                    {
                              "id": "c",
                              "text": "Energy for plants."
                    },
                    {
                              "id": "d",
                              "text": "Needed for growth."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Stem\" means Supports plant."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Stem\" means Supports plant.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Stem** = Supports plant.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
