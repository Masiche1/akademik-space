import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "ela4-u2-lesson-2-2",
  code: "2-2",
  title: "Text Structure",
  goal: "I CAN identify how stories are organized (sequence, cause/effect, problem/solution).",
  standards: ["RL.4.5"],
  vocabulary: [
    { term: "Structure", definition: "How story is organized." },
    { term: "Sequence", definition: "Order of events." },
    { term: "Cause/effect", definition: "Why things happen." },
    { term: "Problem/solution", definition: "Issue + fix." },
    { term: "Chronological", definition: "Time order." },
    { term: "Flashback", definition: "Memory of past." },
    { term: "Transition", definition: "Words linking parts." },
    { term: "Organization", definition: "How parts fit." },
  ],
  concepts: [
    {
      id: "ela4-u2-text-structure",
      title: "Text structure",
      skill: "Identify how a story is organized: sequence, cause/effect, problem/solution.",
      lesson: {
        sections: [
          {
            heading: "How stories are organized",
            body: "Stories can be in **sequence** (first, then, finally), **cause/effect** (because, so), or **problem/solution** (issue + fix). Look for **transition words**.",
          },
          {
            heading: "Example",
            body: "'The boy was late **because** he missed the bus, **so** he ran to school' = cause/effect.",
          },
        ],
        keyFormulas: [
          { name: "Structure", statement: "Sequence + cause/effect + problem/solution = organization." },
        ],
        workedExample: {
          problem: "'First, she woke up. Next, she ate breakfast. Finally, she left for school.' Structure?",
          solution: "**Sequence** — first, next, finally = chronological order.",
        },
      },
      questions: [
        {
          id: "ela4-u2-text-structure-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'First... next... finally' shows...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "cause/effect"
                    },
                    {
                              "id": "b",
                              "text": "sequence"
                    },
                    {
                              "id": "c",
                              "text": "problem/solution"
                    },
                    {
                              "id": "d",
                              "text": "flashback"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "First/next/finally = sequence."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "First/next/finally = sequence.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**sequence**",
          "commonErrors": [
                    "Thinks it's cause/effect."
          ]
},
        },
        {
          id: "ela4-u2-text-structure-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "'The boy was late because he missed the bus' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "sequence"
                    },
                    {
                              "id": "b",
                              "text": "cause/effect"
                    },
                    {
                              "id": "c",
                              "text": "problem/solution"
                    },
                    {
                              "id": "d",
                              "text": "flashback"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "'Because' = cause/effect."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'Because' = cause/effect.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**cause/effect**",
          "commonErrors": [
                    "Wrong structure."
          ]
},
        },
        {
          id: "ela4-u2-text-structure-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Read a passage. Identify its structure and cite two transition words that prove it.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Structure",
                              "statement": "Structure + transition words."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Identifies structure.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Cites transitions.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'Problem/solution: 'couldn't find it, so she looked everywhere.'**",
          "commonErrors": [
                    "Wrong structure.",
                    "No transitions."
          ]
},
        },
        {
          id: "ela4-u2-text-structure-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'flashback' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "the ending"
                    },
                    {
                              "id": "b",
                              "text": "a memory of earlier events"
                    },
                    {
                              "id": "c",
                              "text": "the title"
                    },
                    {
                              "id": "d",
                              "text": "a character"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Flashback = memory of past."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Flashback = memory of past.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**a memory of earlier events**",
          "commonErrors": [
                    "Thinks it's the ending."
          ]
},
        },
        {
          id: "ela4-u2-text-structure-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Compare the structure of two stories. Which was easier to follow? Why?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Structure",
                              "statement": "Two structures + comparison."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Identifies both structures.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Compares ease.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "**e.g., 'Story A chronological (easy); Story B flashbacks (harder to follow).'**",
          "commonErrors": [
                    "One structure only.",
                    "No comparison."
          ]
},
        },
        {
          id: "ela4-u2-text-structure-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Structure\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Order of events."
                    },
                    {
                              "id": "b",
                              "text": "How story is organized."
                    },
                    {
                              "id": "c",
                              "text": "Why things happen."
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
                              "statement": "\"Structure\" means How story is organized."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Structure\" means How story is organized.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Structure** = How story is organized.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela4-u2-text-structure-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Sequence\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Why things happen."
                    },
                    {
                              "id": "b",
                              "text": "Issue + fix."
                    },
                    {
                              "id": "c",
                              "text": "Time order."
                    },
                    {
                              "id": "d",
                              "text": "Order of events."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Sequence\" means Order of events."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Sequence\" means Order of events.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Sequence** = Order of events.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela4-u2-text-structure-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Cause/effect\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Issue + fix."
                    },
                    {
                              "id": "b",
                              "text": "Why things happen."
                    },
                    {
                              "id": "c",
                              "text": "Time order."
                    },
                    {
                              "id": "d",
                              "text": "Memory of past."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Cause/effect\" means Why things happen."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Cause/effect\" means Why things happen.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Cause/effect** = Why things happen.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
