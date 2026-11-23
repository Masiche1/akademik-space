import type { Lesson } from "../../../types.ts";

export const lesson63: Lesson = {
  id: "sci4-u6-lesson-6-3",
  code: "6-3",
  title: "Landforms",
  goal: "I CAN identify and describe different landforms.",
  standards: ["ESS2.A"],
  vocabulary: [
    { term: "Landform", definition: "Natural feature." },
    { term: "Mountain", definition: "High land." },
    { term: "Valley", definition: "Low land between mountains." },
    { term: "Canyon", definition: "Deep valley." },
    { term: "Plateau", definition: "Flat high land." },
    { term: "Plain", definition: "Flat low land." },
    { term: "Hill", definition: "Small raised land." },
    { term: "Basin", definition: "Depressed area." },
  ],
  concepts: [
    {
      id: "sci4-u6-landforms",
      title: "Landforms",
      skill: "Identify mountains, valleys, canyons, plateaus, plains and other landforms.",
      lesson: {
        sections: [
          {
            heading: "Earth's features",
            body: "**Landforms** are natural features: **mountains** (high), **valleys** (low between mountains), **canyons** (deep valleys), **plateaus** (flat high), **plains** (flat low), **hills** (small raised).",
          },
          {
            heading: "How they form",
            body: "**Tectonic forces** (mountains), **erosion** (canyons, valleys), **deposition** (plains, deltas) shape landforms.",
          },
        ],
        keyFormulas: [
          { name: "Landforms", statement: "Mountains + valleys + canyons + plateaus + plains = Earth's features." },
        ],
        workedExample: {
          problem: "The Grand Canyon is an example of...",
          solution: "A **canyon** — a deep valley carved by erosion.",
        },
      },
      questions: [
        {
          id: "sci4-u6-landforms-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'canyon' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a mountain"
                    },
                    {
                              "id": "b",
                              "text": "a deep valley"
                    },
                    {
                              "id": "c",
                              "text": "a plateau"
                    },
                    {
                              "id": "d",
                              "text": "a plain"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Canyon = deep valley."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Canyon = deep valley.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "a deep valley",
          "commonErrors": [
                    "Confuses with other landforms."
          ]
},
        },
        {
          id: "sci4-u6-landforms-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "A 'plateau' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "low land"
                    },
                    {
                              "id": "b",
                              "text": "flat high land"
                    },
                    {
                              "id": "c",
                              "text": "a valley"
                    },
                    {
                              "id": "d",
                              "text": "a hill"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Plateau = flat high."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Plateau = flat high.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "flat high land",
          "commonErrors": [
                    "Confuses with plain."
          ]
},
        },
        {
          id: "sci4-u6-landforms-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Identify these landforms: Rocky Mountains, Grand Canyon, Kansas plains, Colorado plateau.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Landforms",
                              "statement": "Identification."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Identifies all four.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**Mountains; Canyon; Plains; Plateau.**",
          "commonErrors": [
                    "Wrong identifications.",
                    "Missing landforms."
          ]
},
        },
        {
          id: "sci4-u6-landforms-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Valley' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "high land"
                    },
                    {
                              "id": "b",
                              "text": "low land between mountains"
                    },
                    {
                              "id": "c",
                              "text": "flat land"
                    },
                    {
                              "id": "d",
                              "text": "deep water"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Valley = low between mountains."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Valley = low between mountains.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "low land between mountains",
          "commonErrors": [
                    "Confuses with plateau."
          ]
},
        },
        {
          id: "sci4-u6-landforms-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Compare mountains and plateaus. How are they similar and different?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Landforms",
                              "statement": "Comparison."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Compares landforms.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Identifies similarities/differences.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'Both high; mountains=peaked/rocky, plateaus=flat-topped.'**",
          "commonErrors": [
                    "Cannot compare.",
                    "Wrong facts."
          ]
},
        },
        {
          id: "sci4-u6-landforms-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Landform\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "High land."
                    },
                    {
                              "id": "b",
                              "text": "Natural feature."
                    },
                    {
                              "id": "c",
                              "text": "Low land between mountains."
                    },
                    {
                              "id": "d",
                              "text": "Deep valley."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Landform\" means Natural feature."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Landform\" means Natural feature.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Landform** = Natural feature.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci4-u6-landforms-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Mountain\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Low land between mountains."
                    },
                    {
                              "id": "b",
                              "text": "Deep valley."
                    },
                    {
                              "id": "c",
                              "text": "Flat high land."
                    },
                    {
                              "id": "d",
                              "text": "High land."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Mountain\" means High land."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Mountain\" means High land.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Mountain** = High land.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci4-u6-landforms-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Valley\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Deep valley."
                    },
                    {
                              "id": "b",
                              "text": "Low land between mountains."
                    },
                    {
                              "id": "c",
                              "text": "Flat high land."
                    },
                    {
                              "id": "d",
                              "text": "Flat low land."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Valley\" means Low land between mountains."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Valley\" means Low land between mountains.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Valley** = Low land between mountains.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
