import type { Lesson } from "../../../types.ts";

export const lesson72: Lesson = {
  id: "m4-u7-lesson-7-2",
  code: "7-2",
  title: "Angles",
  goal: "I CAN identify and measure angles.",
  standards: ["4.MD.C.5", "4.MD.C.6"],
  vocabulary: [
    { term: "Angle", definition: "Two rays from a point." },
    { term: "Vertex", definition: "Corner point." },
    { term: "Ray", definition: "Line from vertex." },
    { term: "Degree", definition: "Unit of angle." },
    { term: "Right angle", definition: "90 degrees." },
    { term: "Acute", definition: "Less than 90." },
    { term: "Obtuse", definition: "More than 90." },
    { term: "Straight", definition: "180 degrees." },
  ],
  concepts: [
    {
      id: "m4-u7-angles",
      title: "Angles",
      skill: "Identify and measure angles: acute, right, obtuse, straight.",
      lesson: {
        sections: [
          {
            heading: "What is an angle?",
            body: "An **angle** is formed by two **rays** from a common **vertex**. We measure angles in **degrees** (°).",
          },
          {
            heading: "Types",
            body: "**Acute** < 90°, **right** = 90°, **obtuse** > 90° but < 180°, **straight** = 180°.",
          },
        ],
        keyFormulas: [
          { name: "Angle", statement: "Vertex + two rays = angle." },
          { name: "Types", statement: "Acute < 90 < Obtuse < 180 = Straight." },
        ],
        workedExample: {
          problem: "An angle measures 45°. What type is it?",
          solution: "**Acute** — less than 90°.",
        },
      },
      questions: [
        {
          id: "m4-u7-angles-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "An angle of 45° is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "right"
                    },
                    {
                              "id": "b",
                              "text": "acute"
                    },
                    {
                              "id": "c",
                              "text": "obtuse"
                    },
                    {
                              "id": "d",
                              "text": "straight"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "45 < 90 = acute."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "45 < 90 = acute.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "acute",
          "commonErrors": [
                    "Wrong type."
          ]
},
        },
        {
          id: "m4-u7-angles-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "An angle of 120° is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "acute"
                    },
                    {
                              "id": "b",
                              "text": "right"
                    },
                    {
                              "id": "c",
                              "text": "obtuse"
                    },
                    {
                              "id": "d",
                              "text": "straight"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "120 > 90 and < 180 = obtuse."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "120 > 90 and < 180 = obtuse.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "obtuse",
          "commonErrors": [
                    "Wrong type."
          ]
},
        },
        {
          id: "m4-u7-angles-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Identify the type of angle for each measurement: 30°, 90°, 135°, 180°.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Angles",
                              "statement": "Acute, right, obtuse, straight."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Identifies all four types.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**30°=acute, 90°=right, 135°=obtuse, 180°=straight**",
          "commonErrors": [
                    "Wrong types.",
                    "Missing angles."
          ]
},
        },
        {
          id: "m4-u7-angles-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'right angle' measures...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "45°"
                    },
                    {
                              "id": "b",
                              "text": "90°"
                    },
                    {
                              "id": "c",
                              "text": "180°"
                    },
                    {
                              "id": "d",
                              "text": "60°"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Right angle = 90°."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Right angle = 90°.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "90°",
          "commonErrors": [
                    "Wrong measurement."
          ]
},
        },
        {
          id: "m4-u7-angles-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Draw or describe an acute angle and an obtuse angle. Explain the difference.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Angles",
                              "statement": "Acute < 90 < Obtuse."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes acute.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Describes obtuse + difference.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**Acute: < 90° (e.g., 45°); Obtuse: > 90° but < 180° (e.g., 120°)**",
          "commonErrors": [
                    "Cannot describe.",
                    "Wrong types."
          ]
},
        },
        {
          id: "m4-u7-angles-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Angle\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Corner point."
                    },
                    {
                              "id": "b",
                              "text": "Two rays from a point."
                    },
                    {
                              "id": "c",
                              "text": "Line from vertex."
                    },
                    {
                              "id": "d",
                              "text": "Unit of angle."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Angle\" means Two rays from a point."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Angle\" means Two rays from a point.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Angle** = Two rays from a point.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m4-u7-angles-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Vertex\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Line from vertex."
                    },
                    {
                              "id": "b",
                              "text": "Unit of angle."
                    },
                    {
                              "id": "c",
                              "text": "90 degrees."
                    },
                    {
                              "id": "d",
                              "text": "Corner point."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Vertex\" means Corner point."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Vertex\" means Corner point.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Vertex** = Corner point.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m4-u7-angles-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Ray\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Unit of angle."
                    },
                    {
                              "id": "b",
                              "text": "Line from vertex."
                    },
                    {
                              "id": "c",
                              "text": "90 degrees."
                    },
                    {
                              "id": "d",
                              "text": "Less than 90."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Ray\" means Line from vertex."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Ray\" means Line from vertex.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Ray** = Line from vertex.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
