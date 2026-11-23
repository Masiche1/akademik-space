import type { Lesson } from "../../../types.ts";

export const lesson42: Lesson = {
  id: "ela5-u4-lesson-4-2",
  code: "4-2",
  title: "Text Structure",
  goal: "I CAN analyze how an informational text is organized (cause/effect, compare/contrast, problem/solution).",
  standards: ["RI.5.5"],
  vocabulary: [
    { term: "Text structure", definition: "How text is organized." },
    { term: "Cause/effect", definition: "Why something happens." },
    { term: "Compare/contrast", definition: "Similarities/differences." },
    { term: "Problem/solution", definition: "Issue + fix." },
    { term: "Sequence", definition: "Order of events." },
    { term: "Description", definition: "Details about something." },
    { term: "Signal words", definition: "Words that show structure." },
    { term: "Organization", definition: "How parts fit." },
  ],
  concepts: [
    {
      id: "ela5-u4-text-structure",
      title: "Text structure",
      skill: "Identify how informational texts are organized.",
      lesson: {
        sections: [
          {
            heading: "Organization patterns",
            body: "Informational texts use patterns: **cause/effect** (why -> result), **compare/contrast** (similar/different), **problem/solution** (issue -> fix), **sequence** (steps in order).",
          },
          {
            heading: "Signal words",
            body: "Look for **signal words**: 'because' (cause), 'however' (contrast), 'first/then' (sequence), 'to solve' (solution).",
          },
        ],
        keyFormulas: [
          { name: "Structure", statement: "Signal words reveal organization pattern." },
        ],
        workedExample: {
          problem: "'Because plants need sunlight, they grow toward windows.' What structure?",
          solution: "**Cause/effect** — 'because' signals cause (sunlight) -> effect (grow toward window).",
        },
      },
      questions: [
        {
          id: "ela5-u4-text-structure-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Cause/effect' structure shows...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "similarities"
                    },
                    {
                              "id": "b",
                              "text": "why something happens and its result"
                    },
                    {
                              "id": "c",
                              "text": "steps"
                    },
                    {
                              "id": "d",
                              "text": "problems"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Why + result."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Why + result.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "why something happens and its result",
          "commonErrors": [
                    "Confuses with other structures."
          ]
},
        },
        {
          id: "ela5-u4-text-structure-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "'Problem/solution' structure shows...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "causes"
                    },
                    {
                              "id": "b",
                              "text": "an issue and how to fix it"
                    },
                    {
                              "id": "c",
                              "text": "comparisons"
                    },
                    {
                              "id": "d",
                              "text": "sequences"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Issue + fix."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Issue + fix.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "an issue and how to fix it",
          "commonErrors": [
                    "Wrong structure."
          ]
},
        },
        {
          id: "ela5-u4-text-structure-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Identify the text structure of a passage and cite two signal words that reveal it.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Structure",
                              "statement": "Structure + signal words."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Identifies structure.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Cites signal words.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'Compare/contrast; signal words: however, similarly, in contrast.'**",
          "commonErrors": [
                    "Cannot identify.",
                    "No signal words."
          ]
},
        },
        {
          id: "ela5-u4-text-structure-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Signal words' help you...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "memorize"
                    },
                    {
                              "id": "b",
                              "text": "identify text structure"
                    },
                    {
                              "id": "c",
                              "text": "read faster"
                    },
                    {
                              "id": "d",
                              "text": "skip text"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Identify structure."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Identify structure.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "identify text structure",
          "commonErrors": [
                    "Thinks they're just words."
          ]
},
        },
        {
          id: "ela5-u4-text-structure-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "How does knowing the text structure help you understand an informational text?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Structure",
                              "statement": "Effect on understanding."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Identifies structure.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Explains benefit.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**Knowing structure helps predict what comes next and see how ideas connect.**",
          "commonErrors": [
                    "Cannot explain.",
                    "No benefit."
          ]
},
        },
        {
          id: "ela5-u4-text-structure-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Text structure\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Why something happens."
                    },
                    {
                              "id": "b",
                              "text": "How text is organized."
                    },
                    {
                              "id": "c",
                              "text": "Similarities/differences."
                    },
                    {
                              "id": "d",
                              "text": "Issue + fix."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Text structure\" means How text is organized."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Text structure\" means How text is organized.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Text structure** = How text is organized.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela5-u4-text-structure-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Cause/effect\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Similarities/differences."
                    },
                    {
                              "id": "b",
                              "text": "Issue + fix."
                    },
                    {
                              "id": "c",
                              "text": "Order of events."
                    },
                    {
                              "id": "d",
                              "text": "Why something happens."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Cause/effect\" means Why something happens."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Cause/effect\" means Why something happens.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Cause/effect** = Why something happens.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela5-u4-text-structure-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Compare/contrast\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Issue + fix."
                    },
                    {
                              "id": "b",
                              "text": "Similarities/differences."
                    },
                    {
                              "id": "c",
                              "text": "Order of events."
                    },
                    {
                              "id": "d",
                              "text": "Details about something."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Compare/contrast\" means Similarities/differences."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Compare/contrast\" means Similarities/differences.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Compare/contrast** = Similarities/differences.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
