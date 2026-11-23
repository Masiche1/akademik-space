import type { Lesson } from "../../../types.ts";

export const lesson54: Lesson = {
  id: "sci5-u5-lesson-5-4",
  code: "5-4",
  title: "Climate Zones",
  goal: "I CAN describe different climate zones and their characteristics.",
  standards: ["ESS2.D"],
  vocabulary: [
    { term: "Climate zone", definition: "Region with similar climate." },
    { term: "Tropical", definition: "Hot, near equator." },
    { term: "Temperate", definition: "Moderate." },
    { term: "Polar", definition: "Cold, near poles." },
    { term: "Desert", definition: "Dry." },
    { term: "Rainforest", definition: "Wet, hot." },
    { term: "Season", definition: "Part of year." },
    { term: "Latitude", definition: "Distance from equator." },
  ],
  concepts: [
    {
      id: "sci5-u5-climate-zones",
      title: "Climate zones",
      skill: "Describe different climate zones and their characteristics.",
      lesson: {
        sections: [
          {
            heading: "Zones",
            body: "Earth has **climate zones**: **tropical** (hot, near equator), **temperate** (moderate), **polar** (cold, near poles). Also **desert** (dry) and **rainforest** (wet).",
          },
          {
            heading: "Latitude",
            body: "Climate is largely determined by **latitude** — distance from the **equator**. Near equator = hot; near poles = cold.",
          },
        ],
        keyFormulas: [
          { name: "Climate zones", statement: "Latitude determines temperature = climate zones." },
        ],
        workedExample: {
          problem: "Why is the equator hot and poles cold?",
          solution: "**Sunlight hits equator more directly; poles get less direct sunlight.**",
        },
      },
      questions: [
        {
          id: "sci5-u5-climate-zones-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Tropical' climates are...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "cold"
                    },
                    {
                              "id": "b",
                              "text": "hot, near equator"
                    },
                    {
                              "id": "c",
                              "text": "moderate"
                    },
                    {
                              "id": "d",
                              "text": "dry"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Hot, near equator."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Hot, near equator.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "hot, near equator",
          "commonErrors": [
                    "Confuses with other zones."
          ]
},
        },
        {
          id: "sci5-u5-climate-zones-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "'Polar' climates are...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "hot"
                    },
                    {
                              "id": "b",
                              "text": "cold, near poles"
                    },
                    {
                              "id": "c",
                              "text": "moderate"
                    },
                    {
                              "id": "b",
                              "text": "wet"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Cold, near poles."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Cold, near poles.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "cold, near poles",
          "commonErrors": [
                    "Confuses with other zones."
          ]
},
        },
        {
          id: "sci5-u5-climate-zones-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Describe two different climate zones and their characteristics.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Climate zones",
                              "statement": "Two zones described."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes two.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**e.g., 'Tropical: hot, wet; Polar: cold, dry.'**",
          "commonErrors": [
                    "Fewer than two.",
                    "Wrong characteristics."
          ]
},
        },
        {
          id: "sci5-u5-climate-zones-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Climate zones are mainly determined by...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "altitude only"
                    },
                    {
                              "id": "b",
                              "text": "latitude (distance from equator)"
                    },
                    {
                              "id": "c",
                              "text": "longitude"
                    },
                    {
                              "id": "d",
                              "text": "random"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Latitude."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Latitude.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "latitude (distance from equator)",
          "commonErrors": [
                    "Wrong factor."
          ]
},
        },
        {
          id: "sci5-u5-climate-zones-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Explain how latitude affects climate. Why is it hotter at equator?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Climate zones",
                              "statement": "Latitude effect."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Explains latitude.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Explains equator heat.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**Equator gets more direct sunlight; poles get less — latitude determines temperature.**",
          "commonErrors": [
                    "Cannot explain.",
                    "No equator explanation."
          ]
},
        },
        {
          id: "sci5-u5-climate-zones-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Climate zone\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Hot, near equator."
                    },
                    {
                              "id": "b",
                              "text": "Region with similar climate."
                    },
                    {
                              "id": "c",
                              "text": "Moderate."
                    },
                    {
                              "id": "d",
                              "text": "Cold, near poles."
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
          id: "sci5-u5-climate-zones-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Tropical\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Moderate."
                    },
                    {
                              "id": "b",
                              "text": "Cold, near poles."
                    },
                    {
                              "id": "c",
                              "text": "Dry."
                    },
                    {
                              "id": "d",
                              "text": "Hot, near equator."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Tropical\" means Hot, near equator."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Tropical\" means Hot, near equator.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Tropical** = Hot, near equator.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci5-u5-climate-zones-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Temperate\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Cold, near poles."
                    },
                    {
                              "id": "b",
                              "text": "Moderate."
                    },
                    {
                              "id": "c",
                              "text": "Dry."
                    },
                    {
                              "id": "d",
                              "text": "Wet, hot."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Temperate\" means Moderate."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Temperate\" means Moderate.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Temperate** = Moderate.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
