import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "sci6-u2-lesson-2-3",
  code: "2-3",
  title: "Energy Conservation",
  goal: "I CAN explain energy conservation.",
  standards: ["MS-PS3-1"],
  vocabulary: [
    { term: "Conservation", definition: "Never created/destroyed." },
    { term: "Transform", definition: "Change form." },
    { term: "Efficiency", definition: "How well used." },
    { term: "Waste", definition: "Lost energy." },
    { term: "Input", definition: "Energy in." },
    { term: "Output", definition: "Energy out." },
    { term: "Total", definition: "Sum." },
    { term: "Law", definition: "Scientific principle." },
  ],
  concepts: [
    {
      id: "sci6-u2-energy-conservation",
      title: "Energy conservation",
      skill: "Explain the law of conservation of energy and energy efficiency.",
      lesson: {
        sections: [
          {
            heading: "Conservation law",
            body: "**Energy is never created or destroyed** — it only transforms from one form to another. Total energy stays constant.",
          },
          {
            heading: "Efficiency",
            body: "No machine is 100% efficient — some energy is always 'wasted' as heat/sound. **Efficiency** = useful output / total input.",
          },
        ],
        keyFormulas: [
          { name: "Conservation", statement: "Energy in = energy out (transformed)." },
          { name: "Efficiency", statement: "Useful output / total input x 100%." },
        ],
        workedExample: {
          problem: "A car engine uses 100 J of fuel energy but only 25 J moves the car. Where did the rest go?",
          solution: "**75 J transformed to heat and sound — energy conserved but not all useful.**",
        },
      },
      questions: [
        {
          id: "sci6-u2-energy-conservation-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The law of conservation of energy states that energy...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "is created"
                    },
                    {
                              "id": "b",
                              "text": "is never created or destroyed"
                    },
                    {
                              "id": "c",
                              "text": "disappears"
                    },
                    {
                              "id": "d",
                              "text": "only transforms to heat"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Never created/destroyed."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Never created/destroyed.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "is never created or destroyed",
          "commonErrors": [
                    "Violates law."
          ]
},
        },
        {
          id: "sci6-u2-energy-conservation-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "'Efficiency' measures...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "total energy"
                    },
                    {
                              "id": "b",
                              "text": "how much useful energy vs wasted"
                    },
                    {
                              "id": "c",
                              "text": "only speed"
                    },
                    {
                              "id": "d",
                              "text": "only power"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Useful vs wasted."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Useful vs wasted.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "how much useful energy vs wasted",
          "commonErrors": [
                    "Wrong meaning."
          ]
},
        },
        {
          id: "sci6-u2-energy-conservation-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "A light bulb uses 60 J of electricity but only 10 J becomes light. Calculate efficiency and explain what happened to the rest.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Conservation",
                              "statement": "16.7% efficiency."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Calculates efficiency.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Explains waste.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**Efficiency = 10/60 = 16.7%; 50 J transformed to heat — energy conserved.**",
          "commonErrors": [
                    "Wrong efficiency.",
                    "No explanation."
          ]
},
        },
        {
          id: "sci6-u2-energy-conservation-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Energy efficiency is always less than 100% because...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "it's impossible"
                    },
                    {
                              "id": "b",
                              "text": "some energy is always wasted as heat/sound"
                    },
                    {
                              "id": "c",
                              "text": "machines are bad"
                    },
                    {
                              "id": "d",
                              "text": "energy disappears"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Always wasted."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Always wasted.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "some energy is always wasted as heat/sound",
          "commonErrors": [
                    "Violates conservation."
          ]
},
        },
        {
          id: "sci6-u2-energy-conservation-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Explain the law of conservation of energy and give an example of energy transformation with efficiency loss.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Conservation",
                              "statement": "Law + example."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Explains law.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Gives example.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**Energy conserved (transforms); Example: car engine — chemical -> mechanical + heat; not 100% efficient.**",
          "commonErrors": [
                    "Cannot explain.",
                    "No example."
          ]
},
        },
        {
          id: "sci6-u2-energy-conservation-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Conservation\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Change form."
                    },
                    {
                              "id": "b",
                              "text": "Never created/destroyed."
                    },
                    {
                              "id": "c",
                              "text": "How well used."
                    },
                    {
                              "id": "d",
                              "text": "Lost energy."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Conservation\" means Never created/destroyed."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Conservation\" means Never created/destroyed.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Conservation** = Never created/destroyed.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci6-u2-energy-conservation-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Transform\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "How well used."
                    },
                    {
                              "id": "b",
                              "text": "Lost energy."
                    },
                    {
                              "id": "c",
                              "text": "Energy in."
                    },
                    {
                              "id": "d",
                              "text": "Change form."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Transform\" means Change form."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Transform\" means Change form.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Transform** = Change form.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci6-u2-energy-conservation-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Efficiency\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Lost energy."
                    },
                    {
                              "id": "b",
                              "text": "How well used."
                    },
                    {
                              "id": "c",
                              "text": "Energy in."
                    },
                    {
                              "id": "d",
                              "text": "Energy out."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Efficiency\" means How well used."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Efficiency\" means How well used.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Efficiency** = How well used.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
