import type { Lesson } from "../../../types.ts";

export const lesson41: Lesson = {
  id: "sci5-u4-lesson-4-1",
  code: "4-1",
  title: "Ecosystem Basics",
  goal: "I CAN describe the components of an ecosystem.",
  standards: ["LS2.A"],
  vocabulary: [
    { term: "Ecosystem", definition: "Community + environment." },
    { term: "Community", definition: "Organisms in area." },
    { term: "Environment", definition: "Non-living parts." },
    { term: "Producer", definition: "Makes food." },
    { term: "Consumer", definition: "Eats others." },
    { term: "Decomposer", definition: "Breaks down." },
    { term: "Habitat", definition: "Where organism lives." },
    { term: "Niche", definition: "Role in ecosystem." },
  ],
  concepts: [
    {
      id: "sci5-u4-ecosystem-basics",
      title: "Ecosystem basics",
      skill: "Describe the components of an ecosystem.",
      lesson: {
        sections: [
          {
            heading: "Parts",
            body: "An **ecosystem** includes a **community** (all organisms) and the **environment** (non-living: water, soil, air, sunlight).",
          },
          {
            heading: "Roles",
            body: "**Producers** (plants) make food; **consumers** (animals) eat; **decomposers** (fungi, bacteria) break down waste.",
          },
        ],
        keyFormulas: [
          { name: "Ecosystem", statement: "Community + environment = ecosystem." },
        ],
        workedExample: {
          problem: "What are the roles in a pond ecosystem?",
          solution: "**Algae (producer), fish/frogs (consumers), bacteria/fungi (decomposers).**",
        },
      },
      questions: [
        {
          id: "sci5-u4-ecosystem-basics-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "An 'ecosystem' includes...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only animals"
                    },
                    {
                              "id": "b",
                              "text": "organisms + non-living environment"
                    },
                    {
                              "id": "c",
                              "text": "only plants"
                    },
                    {
                              "id": "d",
                              "text": "only water"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Organisms + environment."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Organisms + environment.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "organisms + non-living environment",
          "commonErrors": [
                    "Missing parts."
          ]
},
        },
        {
          id: "sci5-u4-ecosystem-basics-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "A 'producer' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "eats others"
                    },
                    {
                              "id": "b",
                              "text": "makes its own food"
                    },
                    {
                              "id": "c",
                              "text": "breaks down"
                    },
                    {
                              "id": "d",
                              "text": "decomposes"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Makes food."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Makes food.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "makes its own food",
          "commonErrors": [
                    "Confuses with consumer."
          ]
},
        },
        {
          id: "sci5-u4-ecosystem-basics-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Identify producers, consumers and decomposers in an ecosystem you know.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Ecosystem",
                              "statement": "All roles identified."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Identifies all roles.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**e.g., Forest: trees (producer), deer/rabbit (consumer), fungi/bacteria (decomposer).**",
          "commonErrors": [
                    "Missing roles.",
                    "Wrong roles."
          ]
},
        },
        {
          id: "sci5-u4-ecosystem-basics-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Decomposers' are...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "plants"
                    },
                    {
                              "id": "b",
                              "text": "organisms that break down dead matter"
                    },
                    {
                              "id": "c",
                              "text": "predators"
                    },
                    {
                              "id": "d",
                              "text": "herbivores"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Break down dead matter."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Break down dead matter.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "organisms that break down dead matter",
          "commonErrors": [
                    "Confuses with other roles."
          ]
},
        },
        {
          id: "sci5-u4-ecosystem-basics-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Explain how producers, consumers and decomposers work together in an ecosystem.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Ecosystem",
                              "statement": "Roles explained."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes roles.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Explains interaction.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**Producers make food -> consumers eat -> decomposers recycle nutrients back to soil for producers.**",
          "commonErrors": [
                    "Cannot explain.",
                    "No interaction."
          ]
},
        },
        {
          id: "sci5-u4-ecosystem-basics-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Ecosystem\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Organisms in area."
                    },
                    {
                              "id": "b",
                              "text": "Community + environment."
                    },
                    {
                              "id": "c",
                              "text": "Non-living parts."
                    },
                    {
                              "id": "d",
                              "text": "Makes food."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Ecosystem\" means Community + environment."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Ecosystem\" means Community + environment.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Ecosystem** = Community + environment.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci5-u4-ecosystem-basics-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Community\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Non-living parts."
                    },
                    {
                              "id": "b",
                              "text": "Makes food."
                    },
                    {
                              "id": "c",
                              "text": "Eats others."
                    },
                    {
                              "id": "d",
                              "text": "Organisms in area."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Community\" means Organisms in area."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Community\" means Organisms in area.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Community** = Organisms in area.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci5-u4-ecosystem-basics-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Environment\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Makes food."
                    },
                    {
                              "id": "b",
                              "text": "Non-living parts."
                    },
                    {
                              "id": "c",
                              "text": "Eats others."
                    },
                    {
                              "id": "d",
                              "text": "Breaks down."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Environment\" means Non-living parts."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Environment\" means Non-living parts.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Environment** = Non-living parts.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
