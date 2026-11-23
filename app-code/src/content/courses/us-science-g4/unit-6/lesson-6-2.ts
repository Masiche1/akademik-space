import type { Lesson } from "../../../types.ts";

export const lesson62: Lesson = {
  id: "sci4-u6-lesson-6-2",
  code: "6-2",
  title: "Weathering and Erosion",
  goal: "I CAN explain how weathering and erosion change Earth's surface.",
  standards: ["ESS2.A"],
  vocabulary: [
    { term: "Weathering", definition: "Break down rocks." },
    { term: "Erosion", definition: "Move material." },
    { term: "Physical", definition: "Break without chemical." },
    { term: "Chemical", definition: "Change composition." },
    { term: "Water", definition: "Main eroder." },
    { term: "Wind", definition: "Moves material." },
    { term: "Ice", definition: "Freezes and breaks." },
    { term: "Sediment", definition: "Moved particles." },
  ],
  concepts: [
    {
      id: "sci4-u6-weathering-erosion",
      title: "Weathering and erosion",
      skill: "Explain how weathering breaks rocks and erosion moves material.",
      lesson: {
        sections: [
          {
            heading: "Break then move",
            body: "**Weathering** **breaks down** rocks (physical: freeze/thaw, chemical: acid rain); **erosion** **moves** the broken material (water, wind, ice).",
          },
          {
            heading: "Landforms",
            body: "Erosion creates **canyons**, **valleys**, **deltas**; deposition creates **beaches**, **floodplains**.",
          },
        ],
        keyFormulas: [
          { name: "Surface change", statement: "Weathering (break) -> erosion (move) -> deposition (drop)." },
        ],
        workedExample: {
          problem: "How does a canyon form?",
          solution: "Water **erodes** rock over millions of years, cutting deep into the earth.",
        },
      },
      questions: [
        {
          id: "sci4-u6-weathering-erosion-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Weathering' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "moving material"
                    },
                    {
                              "id": "b",
                              "text": "breaking down rocks"
                    },
                    {
                              "id": "c",
                              "text": "depositing sediment"
                    },
                    {
                              "id": "d",
                              "text": "melting rock"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Weathering = break down."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Weathering = break down.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "breaking down rocks",
          "commonErrors": [
                    "Confuses with erosion."
          ]
},
        },
        {
          id: "sci4-u6-weathering-erosion-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "'Erosion' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "breaking rocks"
                    },
                    {
                              "id": "b",
                              "text": "moving material"
                    },
                    {
                              "id": "c",
                              "text": "weathering"
                    },
                    {
                              "id": "d",
                              "text": "deposition"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Erosion = move material."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Erosion = move material.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "moving material",
          "commonErrors": [
                    "Confuses with weathering."
          ]
},
        },
        {
          id: "sci4-u6-weathering-erosion-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain the difference between weathering and erosion with examples.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Weathering/erosion",
                              "statement": "Difference + examples."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Explains difference.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Gives examples.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'Weathering: freeze-thaw cracks rock; Erosion: river carries broken pieces downstream.'**",
          "commonErrors": [
                    "Cannot explain.",
                    "No examples."
          ]
},
        },
        {
          id: "sci4-u6-weathering-erosion-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Physical weathering includes...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "acid rain"
                    },
                    {
                              "id": "b",
                              "text": "freeze-thaw cracking"
                    },
                    {
                              "id": "c",
                              "text": "rusting"
                    },
                    {
                              "id": "d",
                              "text": "dissolving"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Freeze-thaw = physical."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Freeze-thaw = physical.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "freeze-thaw cracking",
          "commonErrors": [
                    "Confuses with chemical."
          ]
},
        },
        {
          id: "sci4-u6-weathering-erosion-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Describe how water causes both weathering and erosion. Give a specific example.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Weathering/erosion",
                              "statement": "Water effects + example."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Explains both effects.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Gives example.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'Water seeps into cracks (weathering), then carries sediment downstream (erosion) -> canyon.'**",
          "commonErrors": [
                    "Only one effect.",
                    "No example."
          ]
},
        },
        {
          id: "sci4-u6-weathering-erosion-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Weathering\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Move material."
                    },
                    {
                              "id": "b",
                              "text": "Break down rocks."
                    },
                    {
                              "id": "c",
                              "text": "Break without chemical."
                    },
                    {
                              "id": "d",
                              "text": "Change composition."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Weathering\" means Break down rocks."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Weathering\" means Break down rocks.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Weathering** = Break down rocks.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci4-u6-weathering-erosion-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Erosion\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Break without chemical."
                    },
                    {
                              "id": "b",
                              "text": "Change composition."
                    },
                    {
                              "id": "c",
                              "text": "Main eroder."
                    },
                    {
                              "id": "d",
                              "text": "Move material."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Erosion\" means Move material."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Erosion\" means Move material.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Erosion** = Move material.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci4-u6-weathering-erosion-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Physical\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Change composition."
                    },
                    {
                              "id": "b",
                              "text": "Break without chemical."
                    },
                    {
                              "id": "c",
                              "text": "Main eroder."
                    },
                    {
                              "id": "d",
                              "text": "Moves material."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Physical\" means Break without chemical."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Physical\" means Break without chemical.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Physical** = Break without chemical.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
