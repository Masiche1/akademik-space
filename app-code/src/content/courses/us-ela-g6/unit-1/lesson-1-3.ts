import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "ela6-u1-lesson-1-3",
  code: "1-3",
  title: "Central Idea",
  goal: "I CAN determine the central idea of a text and how it is conveyed.",
  standards: ["RL.6.1"],
  vocabulary: [
    { term: "Central idea", definition: "Main point." },
    { term: "Convey", definition: "Communicate." },
    { term: "Theme", definition: "Lesson." },
    { term: "Details", definition: "Supporting facts." },
    { term: "Summarize", definition: "Shorten." },
    { term: "Infer", definition: "Read between lines." },
    { term: "Analyze", definition: "Break down." },
    { term: "Evaluate", definition: "Judge." },
  ],
  concepts: [
    {
      id: "ela6-u1-central-idea",
      title: "Central idea",
      skill: "Determine the central idea and explain how details support it.",
      lesson: {
        sections: [
          {
            heading: "Main point",
            body: "The **central idea** is what the text is mostly about — the main point the author wants us to understand.",
          },
          {
            heading: "Support",
            body: "Details, examples, and evidence **support** the central idea. Ask: What do all the details have in common?",
          },
        ],
        keyFormulas: [
          { name: "Central idea", statement: "Main point supported by all details." },
        ],
        workedExample: {
          problem: "A passage describes how bees pollinate flowers, how important they are to food, and how they are threatened. What is the central idea?",
          solution: "**Bees are essential to our food supply and need protection.**",
        },
      },
      questions: [
        {
          id: "ela6-u1-central-idea-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Central idea' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a detail"
                    },
                    {
                              "id": "b",
                              "text": "the main point of the text"
                    },
                    {
                              "id": "c",
                              "text": "a quote"
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
                              "statement": "Main point."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Main point.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "the main point of the text",
          "commonErrors": [
                    "Too narrow."
          ]
},
        },
        {
          id: "ela6-u1-central-idea-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Central idea is supported by...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only the title"
                    },
                    {
                              "id": "b",
                              "text": "all the details and evidence"
                    },
                    {
                              "id": "c",
                              "text": "only the first paragraph"
                    },
                    {
                              "id": "d",
                              "text": "only the characters"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "All details and evidence."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "All details and evidence.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "all the details and evidence",
          "commonErrors": [
                    "Too narrow."
          ]
},
        },
        {
          id: "ela6-u1-central-idea-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Read this summary: 'The passage explains how recycling reduces waste, saves energy, and helps the environment.' What is the central idea?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Central idea",
                              "statement": "Recycling benefits environment."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Identifies central idea.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**Recycling is beneficial for the environment — it reduces waste, saves energy, and helps.**",
          "commonErrors": [
                    "Wrong idea.",
                    "Cannot identify."
          ]
},
        },
        {
          id: "ela6-u1-central-idea-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "To find central idea, you should...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "read only first line"
                    },
                    {
                              "id": "b",
                              "text": "consider all details together"
                    },
                    {
                              "id": "c",
                              "text": "look at title only"
                    },
                    {
                              "id": "d",
                              "text": "count words"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Consider all details."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Consider all details.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "consider all details together",
          "commonErrors": [
                    "Wrong method."
          ]
},
        },
        {
          id: "ela6-u1-central-idea-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "State the central idea of a text and cite two details that support it.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Central idea",
                              "statement": "Idea + details."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "States central idea.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Cites details.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'Central idea: Exercise is important for health; Details: strengthens heart, improves mood.'**",
          "commonErrors": [
                    "Cannot state.",
                    "No details cited."
          ]
},
        },
        {
          id: "ela6-u1-central-idea-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Central idea\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Communicate."
                    },
                    {
                              "id": "b",
                              "text": "Main point."
                    },
                    {
                              "id": "c",
                              "text": "Lesson."
                    },
                    {
                              "id": "d",
                              "text": "Supporting facts."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Central idea\" means Main point."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Central idea\" means Main point.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Central idea** = Main point.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela6-u1-central-idea-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Convey\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Lesson."
                    },
                    {
                              "id": "b",
                              "text": "Supporting facts."
                    },
                    {
                              "id": "c",
                              "text": "Shorten."
                    },
                    {
                              "id": "d",
                              "text": "Communicate."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Convey\" means Communicate."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Convey\" means Communicate.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Convey** = Communicate.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela6-u1-central-idea-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Theme\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Supporting facts."
                    },
                    {
                              "id": "b",
                              "text": "Lesson."
                    },
                    {
                              "id": "c",
                              "text": "Shorten."
                    },
                    {
                              "id": "d",
                              "text": "Read between lines."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Theme\" means Lesson."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Theme\" means Lesson.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Theme** = Lesson.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
