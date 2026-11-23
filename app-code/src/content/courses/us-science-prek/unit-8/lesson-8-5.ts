import type { Lesson } from "../../../types.ts";

export const lesson85: Lesson = {
  id: "spk-u8-lesson-8-5",
  code: "8-5",
  title: "Review: Everything",
  goal: "I CAN use all Pre-K science skills together.",
  standards: ["ELOF-PK.SCI.REVIEW.5"],
  vocabulary: [
    { term: "Science", definition: "Studying the natural world." },
    { term: "Observe", definition: "Use senses to notice." },
    { term: "Living", definition: "Grows, reproduces, needs." },
    { term: "Weather", definition: "Current conditions." },
    { term: "Material", definition: "What something is made of." },
    { term: "Force", definition: "Push or pull." },
    { term: "Body", definition: "Our physical self." },
    { term: "Earth", definition: "Our planet and sky." },
  ],
  concepts: [
    {
      id: "spk-u8-review-everything",
      title: "Everything review",
      skill: "Combine all Pre-K science: observing, weather, life, earth, materials, forces, body.",
      lesson: {
        sections: [
          {
            heading: "All the science",
            body: "Pre-K science covers: **observing** (senses, details, sorting, comparing), **weather/seasons**, **living things** (plants, animals, habitats), **earth/sky** (sun, moon, stars, day/night), **materials** (properties, jobs, tests), **forces/machines** (push, pull, gravity, simple machines), and **our bodies** (parts, senses, health).",
          },
          {
            heading: "You are a scientist!",
            body: "You already observe, ask questions, sort, compare, describe, and explore the natural world. These are the foundations of scientific thinking!",
          },
        ],
        keyFormulas: [
          { name: "Pre-K science", statement: "Observing + weather + life + earth + materials + forces + body = scientific foundation." },
        ],
        workedExample: {
          problem: "Show science: observe an object, describe weather, name a living thing, identify a material, and name a force.",
          solution: "Observe leaf (smooth, green), weather (sunny), living thing (plant), material (wood), force (gravity pulls down).",
        },
      },
      questions: [
        {
          id: "spk-u8-review-everything-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Pre-K science includes which topics?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Only plants"
                    },
                    {
                              "id": "b",
                              "text": "Observing, weather, life, earth, materials, forces, body"
                    },
                    {
                              "id": "c",
                              "text": "Only weather"
                    },
                    {
                              "id": "d",
                              "text": "Only animals"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "All science topics together."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "All science topics together.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**All science topics**",
          "commonErrors": [
                    "Lists one topic."
          ]
},
        },
        {
          id: "spk-u8-review-everything-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which shows 'observing'?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "guessing"
                    },
                    {
                              "id": "b",
                              "text": "using senses to notice details"
                    },
                    {
                              "id": "c",
                              "text": "ignoring"
                    },
                    {
                              "id": "d",
                              "text": "sleeping"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Observing = senses + details."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Observing = senses + details.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**senses + details**",
          "commonErrors": [
                    "Thinks observing is guessing."
          ]
},
        },
        {
          id: "spk-u8-review-everything-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Show science: observe an object, describe the weather, name a living thing, identify a material, and name a force.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "All science",
                              "statement": "Observe + weather + life + material + force."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Demonstrates all 5 skills.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "**e.g., 'Leaf smooth+green, sunny, plant, wood, gravity.'**",
          "commonErrors": [
                    "Only does one.",
                    "Cannot demonstrate."
          ]
},
        },
        {
          id: "spk-u8-review-everything-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "You are ready for Kindergarten science because you can...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "do calculus"
                    },
                    {
                              "id": "b",
                              "text": "observe, ask questions, sort, compare, describe, explore"
                    },
                    {
                              "id": "c",
                              "text": "read textbooks"
                    },
                    {
                              "id": "d",
                              "text": "write essays"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Pre-K science skills prepare you: observe, ask, sort, compare, describe."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Pre-K science skills prepare you: observe, ask, sort, compare, describe.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Pre-K science skills**",
          "commonErrors": [
                    "Thinks you need advanced skills."
          ]
},
        },
        {
          id: "spk-u8-review-everything-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Create a 'science portfolio': draw or describe one thing you observed, the weather, a living thing, a material, and a force. Label everything.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "All science",
                              "statement": "Portfolio with all topics."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Includes all 5 elements.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Labels correctly.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'Observed leaf, sunny weather, dog (living), plastic (material), push (force).'**",
          "commonErrors": [
                    "Missing elements.",
                    "Cannot label."
          ]
},
        },
        {
          id: "spk-u8-review-everything-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Science\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Use senses to notice."
                    },
                    {
                              "id": "b",
                              "text": "Studying the natural world."
                    },
                    {
                              "id": "c",
                              "text": "Grows, reproduces, needs."
                    },
                    {
                              "id": "d",
                              "text": "Current conditions."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Science\" means Studying the natural world."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Science\" means Studying the natural world.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Science** = Studying the natural world.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "spk-u8-review-everything-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Observe\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Grows, reproduces, needs."
                    },
                    {
                              "id": "b",
                              "text": "Current conditions."
                    },
                    {
                              "id": "c",
                              "text": "What something is made of."
                    },
                    {
                              "id": "d",
                              "text": "Use senses to notice."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Observe\" means Use senses to notice."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Observe\" means Use senses to notice.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Observe** = Use senses to notice.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "spk-u8-review-everything-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Living\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Current conditions."
                    },
                    {
                              "id": "b",
                              "text": "Grows, reproduces, needs."
                    },
                    {
                              "id": "c",
                              "text": "What something is made of."
                    },
                    {
                              "id": "d",
                              "text": "Push or pull."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Living\" means Grows, reproduces, needs."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Living\" means Grows, reproduces, needs.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Living** = Grows, reproduces, needs.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
