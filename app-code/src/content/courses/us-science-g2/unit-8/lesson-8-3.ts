import type { Lesson } from "../../../types.ts";

export const lesson83: Lesson = {
  id: "sci2-u8-lesson-8-3",
  code: "8-3",
  title: "Testing and Improving",
  goal: "I CAN test a design and improve it based on results.",
  standards: ["NGSS K-2-ETS1-2"],
  vocabulary: [
    { term: "Test", definition: "Try it out." },
    { term: "Result", definition: "What happened." },
    { term: "Works", definition: "Does what it should." },
    { term: "Fail", definition: "Doesn't work." },
    { term: "Improve", definition: "Make better." },
    { term: "Fix", definition: "Repair problems." },
    { term: "Compare", definition: "Look at differences." },
    { term: "Strength", definition: "What works well." },
    { term: "Weakness", definition: "What needs fixing." },
    { term: "Success", definition: "Meets criteria." },
  ],
  concepts: [
    {
      id: "sci2-u8-design-test",
      title: "Testing and improving",
      skill: "Test a design, evaluate results, and improve based on what you learn.",
      lesson: {
        sections: [
          {
            heading: "Test your design",
            body: "After you **create** a prototype, **test** it. Does it **work**? Does it meet the **criteria**? Note what happens — the **result**.",
          },
          {
            heading: "Improve based on results",
            body: "If it doesn't work well, **improve** it. Find **strengths** (what works) and **weaknesses** (what needs fixing). Make changes and test again.",
          },
        ],
        keyFormulas: [
          { name: "Test/improve", statement: "Test -> result -> identify strength/weakness -> improve -> retest." },
        ],
        workedExample: {
          problem: "Your paper bridge collapses when you put a toy on it. What do you do?",
          solution: "Test showed it fails. Identify weakness (not strong enough). Improve: add more supports or fold paper. Retest.",
        },
      },
      questions: [
        {
          id: "sci2-u8-design-test-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "After building a prototype, you should...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "stop"
                    },
                    {
                              "id": "b",
                              "text": "test it"
                    },
                    {
                              "id": "c",
                              "text": "throw it away"
                    },
                    {
                              "id": "d",
                              "text": "ignore it"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Test the prototype."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Test the prototype.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**test it**",
          "commonErrors": [
                    "Picks wrong action."
          ]
},
        },
        {
          id: "sci2-u8-design-test-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "If a design 'fails' a test, you should...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "give up"
                    },
                    {
                              "id": "b",
                              "text": "improve it and test again"
                    },
                    {
                              "id": "c",
                              "text": "blame the test"
                    },
                    {
                              "id": "d",
                              "text": "stop engineering"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Improve and retest."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Improve and retest.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**improve + retest**",
          "commonErrors": [
                    "Picks wrong response."
          ]
},
        },
        {
          id: "sci2-u8-design-test-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Describe a design you tested. What worked? What didn't? How did you improve it?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Test/improve",
                              "statement": "Test -> result -> improve."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes test + improvement.",
                              "marks": 1,
                              "markCode": "M1"
                    }
          ],
          "finalAnswer": "**e.g., 'Built tower; fell over. Added wider base; now stands.'**",
          "commonErrors": [
                    "Cannot describe.",
                    "No improvement."
          ]
},
        },
        {
          id: "sci2-u8-design-test-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'weakness' in a design is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "what works"
                    },
                    {
                              "id": "b",
                              "text": "what needs fixing"
                    },
                    {
                              "id": "c",
                              "text": "a strength"
                    },
                    {
                              "id": "d",
                              "text": "a criterion"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Weakness = needs fixing."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Weakness = needs fixing.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**needs fixing**",
          "commonErrors": [
                    "Confuses with strength."
          ]
},
        },
        {
          id: "sci2-u8-design-test-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Design something, test it, describe results, and explain one improvement you made.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Test/improve",
                              "statement": "Design + test + improve."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Designs + tests.",
                              "marks": 1,
                              "markCode": "M1"
                    },
                    {
                              "reasoning": "Describes improvement.",
                              "marks": 1,
                              "markCode": "M1"
                    }
          ],
          "finalAnswer": "**e.g., 'Paper airplane; flew poorly. Added wing folds; flew farther.'**",
          "commonErrors": [
                    "Cannot design.",
                    "No improvement."
          ]
},
        },
        {
          id: "sci2-u8-design-test-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Test\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "What happened."
                    },
                    {
                              "id": "b",
                              "text": "Try it out."
                    },
                    {
                              "id": "c",
                              "text": "Does what it should."
                    },
                    {
                              "id": "d",
                              "text": "Doesn't work."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Test\" means Try it out."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Test\" means Try it out.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Test** = Try it out.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci2-u8-design-test-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Result\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Does what it should."
                    },
                    {
                              "id": "b",
                              "text": "Doesn't work."
                    },
                    {
                              "id": "c",
                              "text": "Make better."
                    },
                    {
                              "id": "d",
                              "text": "What happened."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Result\" means What happened."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Result\" means What happened.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Result** = What happened.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci2-u8-design-test-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Works\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Doesn't work."
                    },
                    {
                              "id": "b",
                              "text": "Does what it should."
                    },
                    {
                              "id": "c",
                              "text": "Make better."
                    },
                    {
                              "id": "d",
                              "text": "Repair problems."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Works\" means Does what it should."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Works\" means Does what it should.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Works** = Does what it should.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
