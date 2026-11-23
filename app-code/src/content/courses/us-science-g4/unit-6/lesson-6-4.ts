import type { Lesson } from "../../../types.ts";

export const lesson64: Lesson = {
  id: "sci4-u6-lesson-6-4",
  code: "6-4",
  title: "Earth's Changes",
  goal: "I CAN explain how Earth's surface changes over time.",
  standards: ["ESS2.A"],
  vocabulary: [
    { term: "Change", definition: "Over time." },
    { term: "Slow", definition: "Gradual." },
    { term: "Fast", definition: "Sudden." },
    { term: "Erosion", definition: "Move material." },
    { term: "Volcano", definition: "Erupts magma." },
    { term: "Earthquake", definition: "Ground shakes." },
    { term: "Weathering", definition: "Break rocks." },
    { term: "Time", definition: "Long periods." },
  ],
  concepts: [
    {
      id: "sci4-u6-earth-changes",
      title: "Earth's changes",
      skill: "Explain how Earth's surface changes slowly (erosion) and suddenly (volcanoes, earthquakes).",
      lesson: {
        sections: [
          {
            heading: "Slow and fast",
            body: "Earth's surface changes **slowly** (erosion over millions of years) and **suddenly** (volcanoes, earthquakes). Both are natural processes.",
          },
          {
            heading: "Examples",
            body: "**Slow**: Grand Canyon carved by river; **Fast**: Mount St. Helens erupted 1980, changing landscape instantly.",
          },
        ],
        keyFormulas: [
          { name: "Changes", statement: "Slow erosion + fast events = Earth's surface changes." },
        ],
        workedExample: {
          problem: "Which changed faster: Grand Canyon or Mount St. Helens?",
          solution: "Grand Canyon formed over **millions of years** (slow); Mount St. Helens changed in **days** (fast).",
        },
      },
      questions: [
        {
          id: "sci4-u6-earth-changes-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Earth's surface changes...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only slowly"
                    },
                    {
                              "id": "b",
                              "text": "slowly and suddenly"
                    },
                    {
                              "id": "c",
                              "text": "only suddenly"
                    },
                    {
                              "id": "d",
                              "text": "never"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Slow + sudden."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Slow + sudden.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "slowly and suddenly",
          "commonErrors": [
                    "Only one type."
          ]
},
        },
        {
          id: "sci4-u6-earth-changes-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Erosion is an example of...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "fast change"
                    },
                    {
                              "id": "b",
                              "text": "slow change"
                    },
                    {
                              "id": "c",
                              "text": "volcanic"
                    },
                    {
                              "id": "d",
                              "text": "earthquake"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Erosion = slow."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Erosion = slow.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "slow change",
          "commonErrors": [
                    "Wrong type."
          ]
},
        },
        {
          id: "sci4-u6-earth-changes-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Give one example of slow change and one of fast change to Earth's surface.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Changes",
                              "statement": "Slow + fast examples."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Gives both examples.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**Slow: erosion forming canyon; Fast: volcano eruption changing landscape.**",
          "commonErrors": [
                    "Only one type.",
                    "Wrong examples."
          ]
},
        },
        {
          id: "sci4-u6-earth-changes-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'volcano' changes Earth's surface by...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "slow erosion"
                    },
                    {
                              "id": "b",
                              "text": "erupting magma and lava"
                    },
                    {
                              "id": "c",
                              "text": "weathering"
                    },
                    {
                              "id": "d",
                              "text": "water flow"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Volcano = erupts magma."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Volcano = erupts magma.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "erupting magma and lava",
          "commonErrors": [
                    "Wrong mechanism."
          ]
},
        },
        {
          id: "sci4-u6-earth-changes-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Explain how both slow and fast processes shape Earth's surface. Give examples of each.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Changes",
                              "statement": "Both processes + examples."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Explains both.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Gives examples.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'Slow: erosion carves canyons over time; Fast: earthquakes/volcanoes change instantly.'**",
          "commonErrors": [
                    "Only one process.",
                    "No examples."
          ]
},
        },
        {
          id: "sci4-u6-earth-changes-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Change\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Gradual."
                    },
                    {
                              "id": "b",
                              "text": "Over time."
                    },
                    {
                              "id": "c",
                              "text": "Sudden."
                    },
                    {
                              "id": "d",
                              "text": "Move material."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Change\" means Over time."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Change\" means Over time.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Change** = Over time.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci4-u6-earth-changes-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Slow\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Sudden."
                    },
                    {
                              "id": "b",
                              "text": "Move material."
                    },
                    {
                              "id": "c",
                              "text": "Erupts magma."
                    },
                    {
                              "id": "d",
                              "text": "Gradual."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Slow\" means Gradual."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Slow\" means Gradual.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Slow** = Gradual.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci4-u6-earth-changes-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Fast\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Move material."
                    },
                    {
                              "id": "b",
                              "text": "Sudden."
                    },
                    {
                              "id": "c",
                              "text": "Erupts magma."
                    },
                    {
                              "id": "d",
                              "text": "Ground shakes."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Fast\" means Sudden."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Fast\" means Sudden.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Fast** = Sudden.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
