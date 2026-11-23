import type { Lesson } from "../../../types.ts";

export const lesson74: Lesson = {
  id: "sci4-u7-lesson-7-4",
  code: "7-4",
  title: "Climate Zones",
  goal: "I CAN describe different climate zones and their characteristics.",
  standards: ["ESS2.C"],
  vocabulary: [
    { term: "Climate zone", definition: "Region with similar climate." },
    { term: "Tropical", definition: "Hot and wet." },
    { term: "Desert", definition: "Hot and dry." },
    { term: "Temperate", definition: "Moderate." },
    { term: "Polar", definition: "Cold." },
    { term: "Arid", definition: "Very dry." },
    { term: "Humid", definition: "Very wet." },
    { term: "Latitude", definition: "Distance from equator." },
  ],
  concepts: [
    {
      id: "sci4-u7-climate-zones",
      title: "Climate zones",
      skill: "Describe tropical, desert, temperate and polar climate zones.",
      lesson: {
        sections: [
          {
            heading: "Different climates",
            body: "**Climate zones** have characteristic patterns: **tropical** (hot, wet), **desert** (hot, dry), **temperate** (moderate seasons), **polar** (cold).",
          },
          {
            heading: "Why they differ",
            body: "**Latitude** (distance from equator) affects temperature; **prevailing winds** and **ocean currents** affect precipitation.",
          },
        ],
        keyFormulas: [
          { name: "Climate", statement: "Latitude + winds + oceans = climate zones." },
        ],
        workedExample: {
          problem: "Why is the equator hot and poles cold?",
          solution: "Sunlight hits equator more directly; poles get slanted light = less energy.",
        },
      },
      questions: [
        {
          id: "sci4-u7-climate-zones-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'tropical' climate is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "cold"
                    },
                    {
                              "id": "b",
                              "text": "hot and wet"
                    },
                    {
                              "id": "c",
                              "text": "dry"
                    },
                    {
                              "id": "d",
                              "text": "moderate"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Tropical = hot + wet."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Tropical = hot + wet.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "hot and wet",
          "commonErrors": [
                    "Wrong climate."
          ]
},
        },
        {
          id: "sci4-u7-climate-zones-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "'Desert' climate is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "wet"
                    },
                    {
                              "id": "b",
                              "text": "hot and dry"
                    },
                    {
                              "id": "c",
                              "text": "cold"
                    },
                    {
                              "id": "d",
                              "text": "humid"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Desert = dry."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Desert = dry.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "hot and dry",
          "commonErrors": [
                    "Wrong climate."
          ]
},
        },
        {
          id: "sci4-u7-climate-zones-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Describe the characteristics of tropical, desert, temperate and polar climates.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Climate",
                              "statement": "Four climate descriptions."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes all four.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**Tropical: hot/wet; Desert: hot/dry; Temperate: moderate/seasons; Polar: cold.**",
          "commonErrors": [
                    "Missing zones.",
                    "Wrong descriptions."
          ]
},
        },
        {
          id: "sci4-u7-climate-zones-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Latitude' affects climate because...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "it's random"
                    },
                    {
                              "id": "b",
                              "text": "distance from equator affects sunlight"
                    },
                    {
                              "id": "c",
                              "text": "it's about height"
                    },
                    {
                              "id": "d",
                              "text": "it's about wind only"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Latitude = sunlight angle."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Latitude = sunlight angle.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "distance from equator affects sunlight",
          "commonErrors": [
                    "Wrong factor."
          ]
},
        },
        {
          id: "sci4-u7-climate-zones-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Compare two climate zones. How do their characteristics affect the organisms that live there?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Climate",
                              "statement": "Comparison + organism link."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Compares zones.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Links to organisms.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'Desert: few plants, nocturnal animals; Rainforest: many plants, diverse species.'**",
          "commonErrors": [
                    "Cannot compare.",
                    "No organism link."
          ]
},
        },
        {
          id: "sci4-u7-climate-zones-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Climate zone\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Hot and wet."
                    },
                    {
                              "id": "b",
                              "text": "Region with similar climate."
                    },
                    {
                              "id": "c",
                              "text": "Hot and dry."
                    },
                    {
                              "id": "d",
                              "text": "Moderate."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Climate zone\" means Region with similar climate."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Climate zone\" means Region with similar climate.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Climate zone** = Region with similar climate.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci4-u7-climate-zones-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Tropical\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Hot and dry."
                    },
                    {
                              "id": "b",
                              "text": "Moderate."
                    },
                    {
                              "id": "c",
                              "text": "Cold."
                    },
                    {
                              "id": "d",
                              "text": "Hot and wet."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Tropical\" means Hot and wet."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Tropical\" means Hot and wet.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Tropical** = Hot and wet.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci4-u7-climate-zones-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Desert\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Moderate."
                    },
                    {
                              "id": "b",
                              "text": "Hot and dry."
                    },
                    {
                              "id": "c",
                              "text": "Cold."
                    },
                    {
                              "id": "d",
                              "text": "Very dry."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Desert\" means Hot and dry."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Desert\" means Hot and dry.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Desert** = Hot and dry.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
