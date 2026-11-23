import type { Lesson } from "../../../types.ts";

export const lesson61: Lesson = {
  id: "sci5-u6-lesson-6-1",
  code: "6-1",
  title: "Fossils",
  goal: "I CAN describe what fossils are and how they form.",
  standards: ["ESS1.C"],
  vocabulary: [
    { term: "Fossil", definition: "Preserved remains." },
    { term: "Sediment", definition: "Layers of material." },
    { term: "Imprint", definition: "Print in rock." },
    { term: "Preserved", definition: "Kept intact." },
    { term: "Ancient", definition: "Very old." },
    { term: "Paleontologist", definition: "Fossil scientist." },
    { term: "Extinct", definition: "No longer alive." },
    { term: "Evidence", definition: "Proof of past life." },
  ],
  concepts: [
    {
      id: "sci5-u6-fossils",
      title: "Fossils",
      skill: "Describe what fossils are and how they form.",
      lesson: {
        sections: [
          {
            heading: "Preserved remains",
            body: "**Fossils** are **preserved remains** or **imprints** of ancient organisms, formed when they're buried in **sediment** and preserved in rock.",
          },
          {
            heading: "Evidence",
            body: "Fossils provide **evidence** of past life and help scientists (**paleontologists**) understand **extinct** species and Earth's history.",
          },
        ],
        keyFormulas: [
          { name: "Fossil", statement: "Preserved remains/imprint = evidence of past life." },
        ],
        workedExample: {
          problem: "How does a fossil form?",
          solution: "**Organism dies -> buried in sediment -> minerals replace/reinforce -> preserved in rock over time.**",
        },
      },
      questions: [
        {
          id: "sci5-u6-fossils-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'fossil' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "living thing"
                    },
                    {
                              "id": "b",
                              "text": "preserved remains of ancient organism"
                    },
                    {
                              "id": "c",
                              "text": "rock"
                    },
                    {
                              "id": "d",
                              "text": "plant"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Preserved remains."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Preserved remains.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "preserved remains of ancient organism",
          "commonErrors": [
                    "Confuses with living."
          ]
},
        },
        {
          id: "sci5-u6-fossils-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Fossils form when...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "organism lives"
                    },
                    {
                              "id": "b",
                              "text": "organism is buried and preserved in sediment"
                    },
                    {
                              "id": "c",
                              "text": "organism dies"
                    },
                    {
                              "id": "d",
                              "text": "rock forms"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Buried + preserved."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Buried + preserved.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "organism is buried and preserved in sediment",
          "commonErrors": [
                    "Missing burial."
          ]
},
        },
        {
          id: "sci5-u6-fossils-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Describe how a fossil forms and what information it provides.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Fossils",
                              "statement": "Formation + info."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes formation.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "States information.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**Buried in sediment -> preserved in rock; provides evidence of past life, extinct species, Earth's history.**",
          "commonErrors": [
                    "Cannot describe.",
                    "No information."
          ]
},
        },
        {
          id: "sci5-u6-fossils-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'paleontologist' studies...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "rocks"
                    },
                    {
                              "id": "b",
                              "text": "fossils"
                    },
                    {
                              "id": "c",
                              "text": "volcanoes"
                    },
                    {
                              "id": "d",
                              "text": "weather"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Fossils."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Fossils.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "fossils",
          "commonErrors": [
                    "Wrong field."
          ]
},
        },
        {
          id: "sci5-u6-fossils-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Explain how fossils provide evidence of Earth's history. Give an example.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Fossils",
                              "statement": "Evidence + example."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Explains evidence.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Gives example.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**Fossils show what lived before; e.g., dinosaur fossils prove dinosaurs existed millions of years ago.**",
          "commonErrors": [
                    "Cannot explain.",
                    "No example."
          ]
},
        },
        {
          id: "sci5-u6-fossils-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Fossil\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Layers of material."
                    },
                    {
                              "id": "b",
                              "text": "Preserved remains."
                    },
                    {
                              "id": "c",
                              "text": "Print in rock."
                    },
                    {
                              "id": "d",
                              "text": "Kept intact."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Fossil\" means Preserved remains."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Fossil\" means Preserved remains.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Fossil** = Preserved remains.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci5-u6-fossils-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Sediment\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Print in rock."
                    },
                    {
                              "id": "b",
                              "text": "Kept intact."
                    },
                    {
                              "id": "c",
                              "text": "Very old."
                    },
                    {
                              "id": "d",
                              "text": "Layers of material."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Sediment\" means Layers of material."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Sediment\" means Layers of material.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Sediment** = Layers of material.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci5-u6-fossils-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Imprint\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Kept intact."
                    },
                    {
                              "id": "b",
                              "text": "Print in rock."
                    },
                    {
                              "id": "c",
                              "text": "Very old."
                    },
                    {
                              "id": "d",
                              "text": "Fossil scientist."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Imprint\" means Print in rock."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Imprint\" means Print in rock.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Imprint** = Print in rock.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
