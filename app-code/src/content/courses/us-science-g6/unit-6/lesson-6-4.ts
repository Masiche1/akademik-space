import type { Lesson } from "../../../types.ts";

export const lesson64: Lesson = {
  id: "sci6-u6-lesson-6-4",
  code: "6-4",
  title: "Earth Systems Interactions",
  goal: "I CAN explain how Earth's systems interact.",
  standards: ["ESS2.A", "ESS2.C"],
  vocabulary: [
    { term: "Interaction", definition: "How systems connect." },
    { term: "Cycle", definition: "Continuous process." },
    { term: "Feedback", definition: "Loop effect." },
    { term: "Human impact", definition: "Human effect." },
    { term: "Weathering", definition: "Rock breakdown." },
    { term: "Erosion", definition: "Material movement." },
    { term: "Climate", definition: "Long-term weather." },
    { term: "Balance", definition: "System stability." },
  ],
  concepts: [
    {
      id: "sci6-u6-earth-systems-interactions",
      title: "Earth systems interactions",
      skill: "Explain how Earth's systems interact and how humans affect these interactions.",
      lesson: {
        sections: [
          {
            heading: "Interconnections",
            body: "Earth's systems are **interconnected** — changes in one affect others. Example: deforestation (biosphere) affects climate (atmosphere) and soil erosion (geosphere).",
          },
          {
            heading: "Human impact",
            body: "Humans affect Earth's systems through **pollution**, **climate change**, **habitat destruction**, and **resource use**.",
          },
        ],
        keyFormulas: [
          { name: "Interactions", statement: "All systems connected -> changes affect all." },
        ],
        workedExample: {
          problem: "How does cutting down forests affect multiple Earth systems?",
          solution: "**Biosphere: loses habitat; Atmosphere: less CO2 absorbed -> more warming; Geosphere: more erosion; Hydrosphere: altered water cycle.**",
        },
      },
      questions: [
        {
          id: "sci6-u6-earth-systems-interactions-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Earth's systems are interconnected because...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "they're separate"
                    },
                    {
                              "id": "b",
                              "text": "changes in one affect others"
                    },
                    {
                              "id": "c",
                              "text": "they don't interact"
                    },
                    {
                              "id": "d",
                              "text": "only one matters"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Changes affect all."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Changes affect all.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "changes in one affect others",
          "commonErrors": [
                    "Thinks they're separate."
          ]
},
        },
        {
          id: "sci6-u6-earth-systems-interactions-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "'Feedback loop' means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "one-time event"
                    },
                    {
                              "id": "b",
                              "text": "effect causes more of same effect"
                    },
                    {
                              "id": "c",
                              "text": "no effect"
                    },
                    {
                              "id": "d",
                              "text": "only positive"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Amplifying loop."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Amplifying loop.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "effect causes more of same effect",
          "commonErrors": [
                    "Wrong meaning."
          ]
},
        },
        {
          id: "sci6-u6-earth-systems-interactions-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Describe how human activity affects at least two of Earth's systems, giving specific examples.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Interactions",
                              "statement": "Two systems affected."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes effects.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**Example: Burning fossil fuels -> atmosphere (CO2 up) + geosphere (mining damage) + hydrosphere (ocean acidification).**",
          "commonErrors": [
                    "Only one system.",
                    "Vague effects."
          ]
},
        },
        {
          id: "sci6-u6-earth-systems-interactions-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Weathering' differs from 'erosion' because weathering...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "moves material"
                    },
                    {
                              "id": "b",
                              "text": "breaks down rock in place"
                    },
                    {
                              "id": "c",
                              "text": "only affects soil"
                    },
                    {
                              "id": "d",
                              "text": "only affects water"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Breaks down in place."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Breaks down in place.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "breaks down rock in place",
          "commonErrors": [
                    "Confuses with erosion."
          ]
},
        },
        {
          id: "sci6-u6-earth-systems-interactions-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Explain how Earth's systems interact in the water cycle and how humans can disrupt these interactions.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Interactions",
                              "statement": "Cycle + human effect."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Explains cycle.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Explains disruption.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**Water cycle connects hydrosphere/atmosphere/geosphere/biosphere; Humans: pollution, climate change, deforestation disrupt balance.**",
          "commonErrors": [
                    "Cannot explain.",
                    "No disruption."
          ]
},
        },
        {
          id: "sci6-u6-earth-systems-interactions-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Interaction\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Continuous process."
                    },
                    {
                              "id": "b",
                              "text": "How systems connect."
                    },
                    {
                              "id": "c",
                              "text": "Loop effect."
                    },
                    {
                              "id": "d",
                              "text": "Human effect."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Interaction\" means How systems connect."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Interaction\" means How systems connect.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Interaction** = How systems connect.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci6-u6-earth-systems-interactions-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Cycle\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Loop effect."
                    },
                    {
                              "id": "b",
                              "text": "Human effect."
                    },
                    {
                              "id": "c",
                              "text": "Rock breakdown."
                    },
                    {
                              "id": "d",
                              "text": "Continuous process."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Cycle\" means Continuous process."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Cycle\" means Continuous process.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Cycle** = Continuous process.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci6-u6-earth-systems-interactions-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Feedback\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Human effect."
                    },
                    {
                              "id": "b",
                              "text": "Loop effect."
                    },
                    {
                              "id": "c",
                              "text": "Rock breakdown."
                    },
                    {
                              "id": "d",
                              "text": "Material movement."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Feedback\" means Loop effect."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Feedback\" means Loop effect.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Feedback** = Loop effect.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
