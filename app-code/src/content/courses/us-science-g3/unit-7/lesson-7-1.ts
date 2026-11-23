import type { Lesson } from "../../../types.ts";

export const lesson71: Lesson = {
  id: "sci3-u7-lesson-7-1",
  code: "7-1",
  title: "Soil",
  goal: "I CAN describe what soil is made of and why it is important.",
  standards: ["ESS2.A", "ESS3.A"],
  vocabulary: [
    { term: "Soil", definition: "Dirt on Earth's surface." },
    { term: "Sand", definition: "Tiny rock pieces." },
    { term: "Clay", definition: "Fine particles." },
    { term: "Silt", definition: "Medium particles." },
    { term: "Humus", definition: "Decomposed plants/animals." },
    { term: "Nutrient", definition: "Food for plants." },
    { term: "Erode", definition: "Worn away." },
    { term: "Important", definition: "Needed for life." },
  ],
  concepts: [
    {
      id: "sci3-u7-soil",
      title: "Soil",
      skill: "Describe soil composition (sand, clay, silt, humus) and its importance.",
      lesson: {
        sections: [
          {
            heading: "What is soil?",
            body: "**Soil** is the top layer of Earth's surface. It's made of **sand**, **clay**, **silt**, and **humus** (decomposed plants and animals).",
          },
          {
            heading: "Why soil matters",
            body: "Soil is **important** — it holds **nutrients** for plants, and plants feed animals and humans. Soil can be **eroded** by wind and water.",
          },
        ],
        keyFormulas: [
          { name: "Soil", statement: "Sand + clay + silt + humus = soil; soil -> nutrients -> plants -> life." },
        ],
        workedExample: {
          problem: "Why do plants need soil?",
          solution: "Soil provides **nutrients** (food) for plants to grow.",
        },
      },
      questions: [
        {
          id: "sci3-u7-soil-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Soil is made of...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only sand"
                    },
                    {
                              "id": "b",
                              "text": "sand, clay, silt and humus"
                    },
                    {
                              "id": "c",
                              "text": "only clay"
                    },
                    {
                              "id": "d",
                              "text": "rocks only"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Soil = sand+clay+silt+humus."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Soil = sand+clay+silt+humus.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "sand, clay, silt and humus",
          "commonErrors": [
                    "Thinks soil is just sand."
          ]
},
        },
        {
          id: "sci3-u7-soil-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "'Humus' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "sand"
                    },
                    {
                              "id": "b",
                              "text": "decomposed plants and animals"
                    },
                    {
                              "id": "c",
                              "text": "clay"
                    },
                    {
                              "id": "d",
                              "text": "rock"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Humus = decomposed matter."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Humus = decomposed matter.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "decomposed plants and animals",
          "commonErrors": [
                    "Thinks humus is rock."
          ]
},
        },
        {
          id: "sci3-u7-soil-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two things soil is made of and explain why soil is important.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Soil",
                              "statement": "2 components + importance."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Names 2 components.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Explains importance.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'Sand and clay; soil gives plants nutrients.'**",
          "commonErrors": [
                    "Cannot name components.",
                    "No importance."
          ]
},
        },
        {
          id: "sci3-u7-soil-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Soil is important because...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "it's pretty"
                    },
                    {
                              "id": "b",
                              "text": "it provides nutrients for plants"
                    },
                    {
                              "id": "c",
                              "text": "it's hard"
                    },
                    {
                              "id": "d",
                              "text": "it's wet"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Soil = nutrients for plants."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Soil = nutrients for plants.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "it provides nutrients for plants",
          "commonErrors": [
                    "Thinks soil is useless."
          ]
},
        },
        {
          id: "sci3-u7-soil-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "What is soil erosion? Give an example and explain why it matters.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Soil",
                              "statement": "Erosion + example + why."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Defines erosion.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Gives example + why matters.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'Wind/water carries soil away — loses nutrients for plants.'**",
          "commonErrors": [
                    "Cannot define.",
                    "No example."
          ]
},
        },
        {
          id: "sci3-u7-soil-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Soil\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Tiny rock pieces."
                    },
                    {
                              "id": "b",
                              "text": "Dirt on Earth's surface."
                    },
                    {
                              "id": "c",
                              "text": "Fine particles."
                    },
                    {
                              "id": "d",
                              "text": "Medium particles."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Soil\" means Dirt on Earth's surface."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Soil\" means Dirt on Earth's surface.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Soil** = Dirt on Earth's surface.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci3-u7-soil-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Sand\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Fine particles."
                    },
                    {
                              "id": "b",
                              "text": "Medium particles."
                    },
                    {
                              "id": "c",
                              "text": "Decomposed plants/animals."
                    },
                    {
                              "id": "d",
                              "text": "Tiny rock pieces."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Sand\" means Tiny rock pieces."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Sand\" means Tiny rock pieces.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Sand** = Tiny rock pieces.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci3-u7-soil-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Clay\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Medium particles."
                    },
                    {
                              "id": "b",
                              "text": "Fine particles."
                    },
                    {
                              "id": "c",
                              "text": "Decomposed plants/animals."
                    },
                    {
                              "id": "d",
                              "text": "Food for plants."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Clay\" means Fine particles."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Clay\" means Fine particles.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Clay** = Fine particles.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
