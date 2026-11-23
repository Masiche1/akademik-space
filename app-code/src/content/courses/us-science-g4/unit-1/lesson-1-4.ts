import type { Lesson } from "../../../types.ts";

export const lesson14: Lesson = {
  id: "sci4-u1-lesson-1-4",
  code: "1-4",
  title: "Energy Conservation",
  goal: "I CAN explain that energy is conserved during heat transfer.",
  standards: ["PS3.A"],
  vocabulary: [
    { term: "Conserve", definition: "Keep the same total." },
    { term: "Energy", definition: "Ability to do work." },
    { term: "Transfer", definition: "Move from one place." },
    { term: "Lose", definition: "Disappear." },
    { term: "Gain", definition: "Receive." },
    { term: "Total", definition: "Sum of all." },
    { term: "Balance", definition: "Equal on both sides." },
    { term: "System", definition: "What we're studying." },
  ],
  concepts: [
    {
      id: "sci4-u1-energy-conservation",
      title: "Energy conservation",
      skill: "Explain that energy is conserved — it transfers but total stays the same.",
      lesson: {
        sections: [
          {
            heading: "Energy doesn't disappear",
            body: "**Energy is conserved** — when heat transfers from hot to cold, the hot object **loses** energy and the cold object **gains** it, but the **total** stays the **same**.",
          },
          {
            heading: "Example",
            body: "Hot coffee + cold milk: coffee cools down, milk warms up — total energy unchanged.",
          },
        ],
        keyFormulas: [
          { name: "Conservation", statement: "Energy lost = energy gained; total stays same." },
        ],
        workedExample: {
          problem: "A hot metal block cools in cold water. What happens to energy?",
          solution: "Heat transfers from block to water: block **loses** energy (cools), water **gains** energy (warms) — total conserved.",
        },
      },
      questions: [
        {
          id: "sci4-u1-energy-conservation-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Energy conservation means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "energy disappears"
                    },
                    {
                              "id": "b",
                              "text": "total energy stays the same"
                    },
                    {
                              "id": "c",
                              "text": "energy is created"
                    },
                    {
                              "id": "d",
                              "text": "energy is lost"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Total stays same."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Total stays same.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "total energy stays the same",
          "commonErrors": [
                    "Thinks energy disappears."
          ]
},
        },
        {
          id: "sci4-u1-energy-conservation-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "When hot coffee cools in cold milk...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "energy is destroyed"
                    },
                    {
                              "id": "b",
                              "text": "coffee loses energy, milk gains it, total same"
                    },
                    {
                              "id": "c",
                              "text": "milk loses energy"
                    },
                    {
                              "id": "d",
                              "text": "nothing happens"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Coffee loses, milk gains."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Coffee loses, milk gains.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "coffee loses energy, milk gains it, total same",
          "commonErrors": [
                    "Wrong direction."
          ]
},
        },
        {
          id: "sci4-u1-energy-conservation-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Explain what happens to energy when a cold drink sits in warm air.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Conservation",
                              "statement": "Energy transfer explanation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Explains transfer + conservation.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**e.g., 'Warm air transfers heat to cold drink; drink warms, air cools, total energy same.'**",
          "commonErrors": [
                    "Thinks energy disappears.",
                    "No conservation."
          ]
},
        },
        {
          id: "sci4-u1-energy-conservation-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Conserved' means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "created"
                    },
                    {
                              "id": "b",
                              "text": "kept the same total"
                    },
                    {
                              "id": "c",
                              "text": "lost"
                    },
                    {
                              "id": "d",
                              "text": "destroyed"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Conserved = same total."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Conserved = same total.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "kept the same total",
          "commonErrors": [
                    "Wrong meaning."
          ]
},
        },
        {
          id: "sci4-u1-energy-conservation-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Design an experiment to show energy conservation during heat transfer. What would you measure?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Conservation",
                              "statement": "Experiment design."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Designs experiment.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Identifies measurement.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'Measure temperatures of hot and cold objects before/after mixing; total should stay same.'**",
          "commonErrors": [
                    "Cannot design.",
                    "No measurement."
          ]
},
        },
        {
          id: "sci4-u1-energy-conservation-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Conserve\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Ability to do work."
                    },
                    {
                              "id": "b",
                              "text": "Keep the same total."
                    },
                    {
                              "id": "c",
                              "text": "Move from one place."
                    },
                    {
                              "id": "d",
                              "text": "Disappear."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Conserve\" means Keep the same total."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Conserve\" means Keep the same total.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Conserve** = Keep the same total.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci4-u1-energy-conservation-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Energy\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Move from one place."
                    },
                    {
                              "id": "b",
                              "text": "Disappear."
                    },
                    {
                              "id": "c",
                              "text": "Receive."
                    },
                    {
                              "id": "d",
                              "text": "Ability to do work."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Energy\" means Ability to do work."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Energy\" means Ability to do work.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Energy** = Ability to do work.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci4-u1-energy-conservation-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Transfer\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Disappear."
                    },
                    {
                              "id": "b",
                              "text": "Move from one place."
                    },
                    {
                              "id": "c",
                              "text": "Receive."
                    },
                    {
                              "id": "d",
                              "text": "Sum of all."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Transfer\" means Move from one place."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Transfer\" means Move from one place.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Transfer** = Move from one place.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
