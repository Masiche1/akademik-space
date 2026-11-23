import type { Lesson } from "../../../types.ts";

export const lesson42: Lesson = {
  id: "ela6-u4-lesson-4-2",
  code: "4-2",
  title: "Text Structure",
  goal: "I CAN analyze the structure of an informational text.",
  standards: ["RI.6.5"],
  vocabulary: [
    { term: "Structure", definition: "Organization." },
    { term: "Cause/effect", definition: "Why -> what happens." },
    { term: "Compare/contrast", definition: "Similarities/differences." },
    { term: "Problem/solution", definition: "Issue -> fix." },
    { term: "Sequence", definition: "Order of events." },
    { term: "Description", definition: "Details about topic." },
    { term: "Signal words", definition: "First, then, however." },
    { term: "Analyze", definition: "Break down." },
  ],
  concepts: [
    {
      id: "ela6-u4-text-structure",
      title: "Text structure",
      skill: "Identify and analyze different text structures in informational texts.",
      lesson: {
        sections: [
          {
            heading: "How it's organized",
            body: "Text can be organized by **cause/effect**, **compare/contrast**, **problem/solution**, **sequence**, or **description**.",
          },
          {
            heading: "Signal words",
            body: "Look for **signal words**: 'because' (cause/effect), 'however' (contrast), 'first/then' (sequence), 'the problem is' (problem/solution).",
          },
        ],
        keyFormulas: [
          { name: "Text structure", statement: "Cause/effect, compare/contrast, problem/solution, sequence, description." },
        ],
        workedExample: {
          problem: "A text says 'Global warming causes ice to melt. As ice melts, sea levels rise.' What structure is this?",
          solution: "**Cause/effect** — warming causes melting, melting causes rising seas.",
        },
      },
      questions: [
        {
          id: "ela6-u4-text-structure-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Text structure' refers to...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "the topic"
                    },
                    {
                              "id": "b",
                              "text": "how the text is organized"
                    },
                    {
                              "id": "c",
                              "text": "the author's name"
                    },
                    {
                              "id": "d",
                              "text": "the title"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "How organized."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "How organized.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "how the text is organized",
          "commonErrors": [
                    "Confuses with content."
          ]
},
        },
        {
          id: "ela6-u4-text-structure-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "'Cause/effect' structure means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "compare two things"
                    },
                    {
                              "id": "b",
                              "text": "show why something happens and its result"
                    },
                    {
                              "id": "c",
                              "text": "list steps"
                    },
                    {
                              "id": "d",
                              "text": "describe a topic"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Why -> result."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Why -> result.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "show why something happens and its result",
          "commonErrors": [
                    "Wrong structure."
          ]
},
        },
        {
          id: "ela6-u4-text-structure-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Identify the text structure: 'Problem: Plastic pollution harms oceans. Solution: Reduce single-use plastics and recycle more.'",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Structure",
                              "statement": "Problem/solution."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Identifies structure.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**Problem/solution structure — identifies issue then proposes fix.**",
          "commonErrors": [
                    "Wrong structure.",
                    "Cannot identify."
          ]
},
        },
        {
          id: "ela6-u4-text-structure-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Signal words' help identify structure because they...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "are hard to find"
                    },
                    {
                              "id": "b",
                              "text": "indicate how ideas connect"
                    },
                    {
                              "id": "c",
                              "text": "are always at end"
                    },
                    {
                              "id": "d",
                              "text": "are unnecessary"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Indicate connections."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Indicate connections.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "indicate how ideas connect",
          "commonErrors": [
                    "Wrong reason."
          ]
},
        },
        {
          id: "ela6-u4-text-structure-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Identify the structure of a text and explain how signal words help you determine it.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Structure",
                              "statement": "Structure + signals."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Identifies structure.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Explains signals.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'Compare/contrast; Signal words: similarly, however, on the other hand.'**",
          "commonErrors": [
                    "Cannot identify.",
                    "No signals explained."
          ]
},
        },
        {
          id: "ela6-u4-text-structure-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Structure\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Why -> what happens."
                    },
                    {
                              "id": "b",
                              "text": "Organization."
                    },
                    {
                              "id": "c",
                              "text": "Similarities/differences."
                    },
                    {
                              "id": "d",
                              "text": "Issue -> fix."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Structure\" means Organization."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Structure\" means Organization.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Structure** = Organization.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela6-u4-text-structure-q7",
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
                              "text": "Issue -> fix."
                    },
                    {
                              "id": "c",
                              "text": "Order of events."
                    },
                    {
                              "id": "d",
                              "text": "Why -> what happens."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Cause/effect\" means Why -> what happens."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Cause/effect\" means Why -> what happens.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Cause/effect** = Why -> what happens.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela6-u4-text-structure-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Compare/contrast\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Issue -> fix."
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
                              "text": "Details about topic."
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
