import type { Lesson } from "../../../types.ts";

export const lesson73: Lesson = {
  id: "m4-u7-lesson-7-3",
  code: "7-3",
  title: "Lines and Angles",
  goal: "I CAN identify parallel, perpendicular and intersecting lines.",
  standards: ["4.G.A.1", "4.G.A.2"],
  vocabulary: [
    { term: "Line", definition: "Straight path." },
    { term: "Parallel", definition: "Never meet." },
    { term: "Perpendicular", definition: "Meet at 90°." },
    { term: "Intersect", definition: "Cross each other." },
    { term: "Right angle", definition: "90 degrees." },
    { term: "Angle", definition: "Two rays from point." },
    { term: "Point", definition: "Exact location." },
    { term: "Ray", definition: "Half of a line." },
  ],
  concepts: [
    {
      id: "m4-u7-lines",
      title: "Lines and angles",
      skill: "Identify parallel, perpendicular and intersecting lines and angles.",
      lesson: {
        sections: [
          {
            heading: "Types of lines",
            body: "**Parallel** lines never meet; **perpendicular** lines meet at **90°**; **intersecting** lines cross but not at 90°.",
          },
          {
            heading: "Angles",
            body: "When lines intersect, they form **angles**. Perpendicular lines form **right angles** (90°).",
          },
        ],
        keyFormulas: [
          { name: "Parallel", statement: "Never meet." },
          { name: "Perpendicular", statement: "Meet at 90°." },
          { name: "Intersecting", statement: "Cross but not 90°." },
        ],
        workedExample: {
          problem: "Two lines cross at 90°. What type are they?",
          solution: "**Perpendicular** — they meet at right angles.",
        },
      },
      questions: [
        {
          id: "m4-u7-lines-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Parallel lines...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "meet at 90°"
                    },
                    {
                              "id": "b",
                              "text": "never meet"
                    },
                    {
                              "id": "c",
                              "text": "cross"
                    },
                    {
                              "id": "d",
                              "text": "are curved"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Parallel = never meet."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Parallel = never meet.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "never meet",
          "commonErrors": [
                    "Thinks they meet."
          ]
},
        },
        {
          id: "m4-u7-lines-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Perpendicular lines meet at...",
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
                              "statement": "Perpendicular = 90°."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Perpendicular = 90°.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "90°",
          "commonErrors": [
                    "Wrong angle."
          ]
},
        },
        {
          id: "m4-u7-lines-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Identify whether these are parallel, perpendicular, or intersecting: railroad tracks, a cross, and an X shape.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Lines",
                              "statement": "Parallel, perpendicular, intersecting."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Identifies all three.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**Railroad tracks=parallel; cross=perpendicular; X=intersecting**",
          "commonErrors": [
                    "Wrong identifications.",
                    "Missing types."
          ]
},
        },
        {
          id: "m4-u7-lines-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Intersecting lines...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "never meet"
                    },
                    {
                              "id": "b",
                              "text": "meet at 90°"
                    },
                    {
                              "id": "c",
                              "text": "cross but not necessarily at 90°"
                    },
                    {
                              "id": "d",
                              "text": "are parallel"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Intersecting = cross, not necessarily 90°."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Intersecting = cross, not necessarily 90°.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "cross but not necessarily at 90°",
          "commonErrors": [
                    "Confuses with perpendicular."
          ]
},
        },
        {
          id: "m4-u7-lines-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Give an example of parallel lines and perpendicular lines in real life. Explain the difference.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Lines",
                              "statement": "Parallel + perpendicular examples."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Gives parallel example.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Gives perpendicular example + difference.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**Parallel: train tracks (never meet); Perpendicular: floor meets wall (90°)**",
          "commonErrors": [
                    "Cannot give examples.",
                    "Wrong types."
          ]
},
        },
        {
          id: "m4-u7-lines-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Line\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Never meet."
                    },
                    {
                              "id": "b",
                              "text": "Straight path."
                    },
                    {
                              "id": "c",
                              "text": "Meet at 90°."
                    },
                    {
                              "id": "d",
                              "text": "Cross each other."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Line\" means Straight path."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Line\" means Straight path.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Line** = Straight path.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m4-u7-lines-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Parallel\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Meet at 90°."
                    },
                    {
                              "id": "b",
                              "text": "Cross each other."
                    },
                    {
                              "id": "c",
                              "text": "90 degrees."
                    },
                    {
                              "id": "d",
                              "text": "Never meet."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Parallel\" means Never meet."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Parallel\" means Never meet.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Parallel** = Never meet.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m4-u7-lines-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Perpendicular\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Cross each other."
                    },
                    {
                              "id": "b",
                              "text": "Meet at 90°."
                    },
                    {
                              "id": "c",
                              "text": "90 degrees."
                    },
                    {
                              "id": "d",
                              "text": "Two rays from point."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Perpendicular\" means Meet at 90°."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Perpendicular\" means Meet at 90°.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Perpendicular** = Meet at 90°.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
