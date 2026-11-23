import type { Lesson } from "../../../types.ts";

export const lesson83: Lesson = {
  id: "sci4-u8-lesson-8-3",
  code: "8-3",
  title: "Engineering Applications",
  goal: "I CAN identify engineering solutions in everyday life.",
  standards: ["ETS1.C"],
  vocabulary: [
    { term: "Application", definition: "Real-world use." },
    { term: "Solution", definition: "Answer to problem." },
    { term: "Everyday", definition: "Daily life." },
    { term: "Technology", definition: "Tools/machines." },
    { term: "Bridge", definition: "Spans gap." },
    { term: "Vehicle", definition: "Transport." },
    { term: "Building", definition: "Structure." },
    { term: "Device", definition: "Tool/machine." },
  ],
  concepts: [
    {
      id: "sci4-u8-engineering-applications",
      title: "Engineering applications",
      skill: "Identify engineering solutions in everyday objects and structures.",
      lesson: {
        sections: [
          {
            heading: "Engineering everywhere",
            body: "**Engineering** solves problems we face daily: **bridges** span gaps, **vehicles** transport us, **buildings** protect us, **devices** make tasks easier.",
          },
          {
            heading: "Design thinking",
            body: "Every engineered object went through the **design process** — someone identified a **problem**, brainstormed **solutions**, and **tested/improved** the design.",
          },
        ],
        keyFormulas: [
          { name: "Applications", statement: "Problem + design process = engineered solution." },
        ],
        workedExample: {
          problem: "How is a bridge an engineering solution?",
          solution: "Problem: need to cross water; Solution: bridge design tested for strength, materials chosen for durability.",
        },
      },
      questions: [
        {
          id: "sci4-u8-engineering-applications-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Engineering is important because...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "it's math"
                    },
                    {
                              "id": "b",
                              "text": "it solves real-world problems"
                    },
                    {
                              "id": "c",
                              "text": "it's required"
                    },
                    {
                              "id": "d",
                              "text": "nothing"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Solves real problems."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Solves real problems.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "it solves real-world problems",
          "commonErrors": [
                    "Thinks it's abstract."
          ]
},
        },
        {
          id: "sci4-u8-engineering-applications-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Everyday engineering examples include...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only rockets"
                    },
                    {
                              "id": "b",
                              "text": "bridges, vehicles, buildings, devices"
                    },
                    {
                              "id": "c",
                              "text": "only computers"
                    },
                    {
                              "id": "d",
                              "text": "only phones"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "All everyday objects."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "All everyday objects.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "bridges, vehicles, buildings, devices",
          "commonErrors": [
                    "Only advanced tech."
          ]
},
        },
        {
          id: "sci4-u8-engineering-applications-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Pick an everyday object. Explain what problem it solves and how engineering design was used.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Applications",
                              "statement": "Problem + design explanation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Identifies problem.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Explains design process.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'Backpack: problem=carry books; design=padded straps, compartments tested for comfort.'**",
          "commonErrors": [
                    "Cannot explain.",
                    "No design link."
          ]
},
        },
        {
          id: "sci4-u8-engineering-applications-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'device' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a building"
                    },
                    {
                              "id": "b",
                              "text": "a tool or machine"
                    },
                    {
                              "id": "c",
                              "text": "a bridge"
                    },
                    {
                              "id": "d",
                              "text": "a vehicle only"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Device = tool/machine."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Device = tool/machine.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "a tool or machine",
          "commonErrors": [
                    "Confuses with other structures."
          ]
},
        },
        {
          id: "sci4-u8-engineering-applications-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Choose three engineered objects around you. For each, identify the problem it solves and one design feature.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Applications",
                              "statement": "Three objects + problems + features."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Identifies three.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Names problems + features.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'Chair: sit comfortably, four legs for stability; Phone: communicate, screen for display.'**",
          "commonErrors": [
                    "Fewer than three.",
                    "No features."
          ]
},
        },
        {
          id: "sci4-u8-engineering-applications-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Application\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Answer to problem."
                    },
                    {
                              "id": "b",
                              "text": "Real-world use."
                    },
                    {
                              "id": "c",
                              "text": "Daily life."
                    },
                    {
                              "id": "d",
                              "text": "Tools/machines."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Application\" means Real-world use."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Application\" means Real-world use.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Application** = Real-world use.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci4-u8-engineering-applications-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Solution\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Daily life."
                    },
                    {
                              "id": "b",
                              "text": "Tools/machines."
                    },
                    {
                              "id": "c",
                              "text": "Spans gap."
                    },
                    {
                              "id": "d",
                              "text": "Answer to problem."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Solution\" means Answer to problem."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Solution\" means Answer to problem.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Solution** = Answer to problem.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci4-u8-engineering-applications-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Everyday\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Tools/machines."
                    },
                    {
                              "id": "b",
                              "text": "Daily life."
                    },
                    {
                              "id": "c",
                              "text": "Spans gap."
                    },
                    {
                              "id": "d",
                              "text": "Transport."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Everyday\" means Daily life."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Everyday\" means Daily life.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Everyday** = Daily life.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
