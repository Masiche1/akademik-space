import type { Lesson } from "../../../types.ts";

export const lesson74: Lesson = {
  id: "sci3-u7-lesson-7-4",
  code: "7-4",
  title: "How Earth's Surface Changes",
  goal: "I CAN describe how weathering and erosion change Earth's surface.",
  standards: ["ESS2.A", "ESS2.B"],
  vocabulary: [
    { term: "Weathering", definition: "Breaking down rocks." },
    { term: "Erosion", definition: "Moving broken pieces." },
    { term: "Wind", definition: "Moves soil/rocks." },
    { term: "Water", definition: "Carries soil/rocks." },
    { term: "Ice", definition: "Freezes and breaks rocks." },
    { term: "Deposit", definition: "Where material lands." },
    { term: "Landform", definition: "Shape of land." },
    { term: "Change", definition: "Over time." },
  ],
  concepts: [
    {
      id: "sci3-u7-earth-changes",
      title: "How Earth's surface changes",
      skill: "Describe weathering (breaking down) and erosion (moving) of Earth's surface.",
      lesson: {
        sections: [
          {
            heading: "Weathering breaks, erosion moves",
            body: "**Weathering** breaks rocks into smaller pieces (by water, ice, wind, plants). **Erosion** moves those pieces to new places (rivers carry soil, wind blows sand).",
          },
          {
            heading: "Over time",
            body: "Together, weathering and erosion slowly change Earth's surface — mountains wear down, valleys form, soil moves. This happens over **long time**.",
          },
        ],
        keyFormulas: [
          { name: "Weathering", statement: "Breaks rocks into pieces." },
          { name: "Erosion", statement: "Moves pieces to new places." },
        ],
        workedExample: {
          problem: "What is the difference between weathering and erosion?",
          solution: "**Weathering** breaks rocks down; **erosion** moves the broken pieces.",
        },
      },
      questions: [
        {
          id: "sci3-u7-earth-changes-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Weathering is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "moving rocks"
                    },
                    {
                              "id": "b",
                              "text": "breaking down rocks"
                    },
                    {
                              "id": "c",
                              "text": "making mountains"
                    },
                    {
                              "id": "d",
                              "text": "creating soil only"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Weathering = breaking down."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Weathering = breaking down.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "breaking down rocks",
          "commonErrors": [
                    "Thinks weathering is erosion."
          ]
},
        },
        {
          id: "sci3-u7-earth-changes-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Erosion is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "breaking rocks"
                    },
                    {
                              "id": "b",
                              "text": "moving broken pieces to new places"
                    },
                    {
                              "id": "c",
                              "text": "freezing water"
                    },
                    {
                              "id": "d",
                              "text": "growing plants"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Erosion = moving pieces."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Erosion = moving pieces.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "moving broken pieces to new places",
          "commonErrors": [
                    "Thinks erosion is weathering."
          ]
},
        },
        {
          id: "sci3-u7-earth-changes-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain the difference between weathering and erosion with an example.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Weathering/erosion",
                              "statement": "Break vs move + example."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Explains difference.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Gives example.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'Weathering: ice cracks rock. Erosion: river carries pieces downstream.'**",
          "commonErrors": [
                    "Cannot distinguish.",
                    "No example."
          ]
},
        },
        {
          id: "sci3-u7-earth-changes-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which can cause weathering?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only wind"
                    },
                    {
                              "id": "b",
                              "text": "water, ice, wind, and plants"
                    },
                    {
                              "id": "c",
                              "text": "only animals"
                    },
                    {
                              "id": "d",
                              "text": "only humans"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Many things cause weathering."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Many things cause weathering.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "water, ice, wind, and plants",
          "commonErrors": [
                    "Thinks only wind does it."
          ]
},
        },
        {
          id: "sci3-u7-earth-changes-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Describe how weathering and erosion work together to change Earth's surface.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Earth changes",
                              "statement": "Weathering + erosion + together."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes weathering.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Describes erosion + together.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'Weathering breaks rocks; erosion moves pieces; together they reshape land over time.'**",
          "commonErrors": [
                    "Cannot describe.",
                    "Only one process."
          ]
},
        },
        {
          id: "sci3-u7-earth-changes-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Weathering\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Moving broken pieces."
                    },
                    {
                              "id": "b",
                              "text": "Breaking down rocks."
                    },
                    {
                              "id": "c",
                              "text": "Moves soil/rocks."
                    },
                    {
                              "id": "d",
                              "text": "Carries soil/rocks."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Weathering\" means Breaking down rocks."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Weathering\" means Breaking down rocks.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Weathering** = Breaking down rocks.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci3-u7-earth-changes-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Erosion\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Moves soil/rocks."
                    },
                    {
                              "id": "b",
                              "text": "Carries soil/rocks."
                    },
                    {
                              "id": "c",
                              "text": "Freezes and breaks rocks."
                    },
                    {
                              "id": "d",
                              "text": "Moving broken pieces."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Erosion\" means Moving broken pieces."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Erosion\" means Moving broken pieces.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Erosion** = Moving broken pieces.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci3-u7-earth-changes-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Wind\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Carries soil/rocks."
                    },
                    {
                              "id": "b",
                              "text": "Moves soil/rocks."
                    },
                    {
                              "id": "c",
                              "text": "Freezes and breaks rocks."
                    },
                    {
                              "id": "d",
                              "text": "Where material lands."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Wind\" means Moves soil/rocks."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Wind\" means Moves soil/rocks.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Wind** = Moves soil/rocks.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
