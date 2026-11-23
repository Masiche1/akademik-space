import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "sci6-u1-lesson-1-1",
  code: "1-1",
  title: "Motion Basics",
  goal: "I CAN describe and measure motion.",
  standards: ["MS-PS2-1"],
  vocabulary: [
    { term: "Motion", definition: "Change in position." },
    { term: "Speed", definition: "Distance/time." },
    { term: "Velocity", definition: "Speed + direction." },
    { term: "Acceleration", definition: "Change in velocity." },
    { term: "Distance", definition: "How far." },
    { term: "Displacement", definition: "Change in position." },
    { term: "Frame of reference", definition: "Point of view." },
    { term: "Relative", definition: "Compared to something." },
  ],
  concepts: [
    {
      id: "sci6-u1-motion-basics",
      title: "Motion basics",
      skill: "Describe motion using distance, speed, velocity and acceleration.",
      lesson: {
        sections: [
          {
            heading: "What is motion?",
            body: "**Motion** is a change in position over time. **Speed** = distance/time. **Velocity** = speed + direction. **Acceleration** = change in velocity.",
          },
          {
            heading: "Measuring",
            body: "Use **distance** (how far) and **time** to calculate speed: $speed = distance / time$.",
          },
        ],
        keyFormulas: [
          { name: "Speed", statement: "distance / time" },
          { name: "Velocity", statement: "speed + direction" },
          { name: "Acceleration", statement: "change in velocity / time" },
        ],
        workedExample: {
          problem: "A car travels 300 miles in 5 hours. What is its speed?",
          solution: "300 / 5 = **60 mph**.",
        },
      },
      questions: [
        {
          id: "sci6-u1-motion-basics-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Speed' is calculated as...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "time / distance"
                    },
                    {
                              "id": "b",
                              "text": "distance / time"
                    },
                    {
                              "id": "c",
                              "text": "distance x time"
                    },
                    {
                              "id": "d",
                              "text": "time x distance"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Distance / time."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Distance / time.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "distance / time",
          "commonErrors": [
                    "Wrong formula."
          ]
},
        },
        {
          id: "sci6-u1-motion-basics-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "'Velocity' differs from 'speed' because velocity includes...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only magnitude"
                    },
                    {
                              "id": "b",
                              "text": "direction"
                    },
                    {
                              "id": "c",
                              "text": "only distance"
                    },
                    {
                              "id": "d",
                              "text": "only time"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Direction."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Direction.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "direction",
          "commonErrors": [
                    "Confuses with speed."
          ]
},
        },
        {
          id: "sci6-u1-motion-basics-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "A cyclist travels 45 miles in 3 hours. Calculate speed. Then explain how velocity would differ.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Motion",
                              "statement": "15 mph + direction."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Calculates speed.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Explains velocity.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**Speed = 45/3 = 15 mph; Velocity = 15 mph in a specific direction.**",
          "commonErrors": [
                    "Wrong speed.",
                    "No velocity explained."
          ]
},
        },
        {
          id: "sci6-u1-motion-basics-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Acceleration' refers to...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "speed only"
                    },
                    {
                              "id": "b",
                              "text": "change in velocity over time"
                    },
                    {
                              "id": "c",
                              "text": "distance only"
                    },
                    {
                              "id": "d",
                              "text": "direction only"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Change in velocity."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Change in velocity.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "change in velocity over time",
          "commonErrors": [
                    "Confuses with speed."
          ]
},
        },
        {
          id: "sci6-u1-motion-basics-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Describe the motion of an object and calculate its speed, then explain how acceleration differs.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Motion",
                              "statement": "Motion + speed + acceleration."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes motion.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Explains acceleration.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'Car moves 100m in 10s = 10 m/s; if it speeds up, acceleration increases velocity.'**",
          "commonErrors": [
                    "Cannot describe.",
                    "No acceleration explained."
          ]
},
        },
        {
          id: "sci6-u1-motion-basics-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Motion\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Distance/time."
                    },
                    {
                              "id": "b",
                              "text": "Change in position."
                    },
                    {
                              "id": "c",
                              "text": "Speed + direction."
                    },
                    {
                              "id": "d",
                              "text": "Change in velocity."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Motion\" means Change in position."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Motion\" means Change in position.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Motion** = Change in position.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci6-u1-motion-basics-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Speed\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Speed + direction."
                    },
                    {
                              "id": "b",
                              "text": "Change in velocity."
                    },
                    {
                              "id": "c",
                              "text": "How far."
                    },
                    {
                              "id": "d",
                              "text": "Distance/time."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Speed\" means Distance/time."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Speed\" means Distance/time.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Speed** = Distance/time.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci6-u1-motion-basics-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Velocity\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Change in velocity."
                    },
                    {
                              "id": "b",
                              "text": "Speed + direction."
                    },
                    {
                              "id": "c",
                              "text": "How far."
                    },
                    {
                              "id": "d",
                              "text": "Change in position."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Velocity\" means Speed + direction."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Velocity\" means Speed + direction.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Velocity** = Speed + direction.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
