import type { Lesson } from "../../../types.ts";

export const lesson64: Lesson = {
  id: "ela0-u6-lesson-6-4",
  code: "6-4",
  title: "Explain How or Why",
  goal: "I CAN explain how or why something happens in informational writing.",
  standards: ["W.K.2"],
  vocabulary: [
    { term: "Explain", definition: "Tell how or why." },
    { term: "How", definition: "The way something happens." },
    { term: "Why", definition: "The reason." },
    { term: "Cause", definition: "What makes something happen." },
    { term: "Effect", definition: "What happens because." },
    { term: "Because", definition: "Gives the reason." },
    { term: "Process", definition: "Steps of how something works." },
  ],
  concepts: [
    {
      id: "ela0-u6-info-explain",
      title: "Explaining how or why",
      skill: "Explain how or why something happens using causes and effects.",
      lesson: {
        sections: [
          {
            heading: "How and why",
            body: "Informational writing often **explains** **how** something works or **why** it happens. 'How do bees make honey?' explains a **process**; 'Why do we need sleep?' explains a **reason**.",
          },
          {
            heading: "Cause and effect",
            body: "A **cause** makes something happen; the **effect** is what happens. 'Because' connects them: 'We need sleep **because** our bodies rest and grow.'",
          },
        ],
        keyFormulas: [
          { name: "Explain", statement: "How = process/steps; Why = reason/cause-effect with 'because'." },
        ],
        workedExample: {
          problem: "Explain why plants need sunlight.",
          solution: "Plants need sunlight **because** they use it to make food (photosynthesis).",
        },
      },
      questions: [
        {
          id: "ela0-u6-info-explain-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Explain how' means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "tell a story"
                    },
                    {
                              "id": "b",
                              "text": "tell the steps or process"
                    },
                    {
                              "id": "c",
                              "text": "ask a question"
                    },
                    {
                              "id": "d",
                              "text": "give an opinion"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Explain how = process/steps."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Explain how = process/steps.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**process/steps**",
          "commonErrors": [
                    "Confuses with why."
          ]
},
        },
        {
          id: "ela0-u6-info-explain-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "'Cause' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "the effect"
                    },
                    {
                              "id": "b",
                              "text": "what makes something happen"
                    },
                    {
                              "id": "c",
                              "text": "a question"
                    },
                    {
                              "id": "d",
                              "text": "a fact only"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Cause = what makes it happen."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Cause = what makes it happen.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**what makes happen**",
          "commonErrors": [
                    "Confuses cause/effect."
          ]
},
        },
        {
          id: "ela0-u6-info-explain-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Explain how or why something happens (like why we sleep, how rain forms). Use 'because' or steps.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Explain",
                              "statement": "How=steps, Why=because+reason."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Explains how or why correctly.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'We sleep because our bodies need rest.'**",
          "commonErrors": [
                    "Not an explanation.",
                    "Wrong type."
          ]
},
        },
        {
          id: "ela0-u6-info-explain-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Effect' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "the cause"
                    },
                    {
                              "id": "b",
                              "text": "what happens because of a cause"
                    },
                    {
                              "id": "c",
                              "text": "a question"
                    },
                    {
                              "id": "d",
                              "text": "a topic"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Effect = what happens."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Effect = what happens.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**what happens**",
          "commonErrors": [
                    "Confuses with cause."
          ]
},
        },
        {
          id: "ela0-u6-info-explain-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Explain how or why something happens in two sentences. Use 'because' or 'first/then/finally'.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Explain",
                              "statement": "Cause-effect or process."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Explains in 2 sentences.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Uses because or sequence words.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'First, water heats up. Then it turns to steam — that's how boiling works.'**",
          "commonErrors": [
                    "Not an explanation.",
                    "No connectives."
          ]
},
        },
        {
          id: "ela0-u6-info-explain-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Explain\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The way something happens."
                    },
                    {
                              "id": "b",
                              "text": "Tell how or why."
                    },
                    {
                              "id": "c",
                              "text": "The reason."
                    },
                    {
                              "id": "d",
                              "text": "What makes something happen."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Explain\" means Tell how or why."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Explain\" means Tell how or why.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Explain** = Tell how or why.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela0-u6-info-explain-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"How\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The reason."
                    },
                    {
                              "id": "b",
                              "text": "What makes something happen."
                    },
                    {
                              "id": "c",
                              "text": "What happens because."
                    },
                    {
                              "id": "d",
                              "text": "The way something happens."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"How\" means The way something happens."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"How\" means The way something happens.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**How** = The way something happens.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela0-u6-info-explain-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Why\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "What makes something happen."
                    },
                    {
                              "id": "b",
                              "text": "The reason."
                    },
                    {
                              "id": "c",
                              "text": "What happens because."
                    },
                    {
                              "id": "d",
                              "text": "Gives the reason."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Why\" means The reason."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Why\" means The reason.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Why** = The reason.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
