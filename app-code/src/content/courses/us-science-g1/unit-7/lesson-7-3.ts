import type { Lesson } from "../../../types.ts";

export const lesson73: Lesson = {
  id: "s1-u7-lesson-7-3",
  code: "7-3",
  title: "Testing and Improving",
  goal: "I CAN test a design and improve it.",
  standards: ["1-ETS1-3"],
  vocabulary: [
    { term: "Test", definition: "Try it out." },
    { term: "Result", definition: "What happened." },
    { term: "Improve", definition: "Make better." },
    { term: "Fail", definition: "Didn't work." },
    { term: "Success", definition: "It worked." },
    { term: "Evaluate", definition: "Judge how well." },
    { term: "Change", definition: "Make different." },
    { term: "Better", definition: "Improved version." },
  ],
  concepts: [
    {
      id: "s1-u7-test-improve",
      title: "Testing and improving",
      skill: "Test your design, evaluate results, and improve it.",
      lesson: {
        sections: [
          {
            heading: "Test your design",
            body: "After you **build**, **test** it to see if it **works**. Does it solve the problem? Note the **result**.",
          },
          {
            heading: "Improve based on results",
            body: "If it **fails**, **improve** it — change materials, design or method. If it **succeeds**, you can still make it **better**. Engineering is about **iterating**.",
          },
        ],
        keyFormulas: [
          { name: "Test/Improve", statement: "Build -> test -> evaluate -> improve -> repeat." },
        ],
        workedExample: {
          problem: "Your pencil holder falls over. How do you improve it?",
          solution: "Add weight to the bottom or use a wider base — then **test** again.",
        },
      },
      questions: [
        {
          id: "s1-u7-test-improve-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "After building a design, you should...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "never test it"
                    },
                    {
                              "id": "b",
                              "text": "test it to see if it works"
                    },
                    {
                              "id": "c",
                              "text": "throw it away"
                    },
                    {
                              "id": "d",
                              "text": "only improve it"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Test after building."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Test after building.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**test it**",
          "commonErrors": [
                    "Picks no-test."
          ]
},
        },
        {
          id: "s1-u7-test-improve-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "If your design fails, you should...",
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
                              "text": "never change it"
                    },
                    {
                              "id": "d",
                              "text": "blame the materials"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Improve + retest."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Improve + retest.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**improve + retest**",
          "commonErrors": [
                    "Picks give up."
          ]
},
        },
        {
          id: "s1-u7-test-improve-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Test a simple design. Describe the result and one way you could improve it.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Test/Improve",
                              "statement": "Test + result + improvement."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes test result.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Suggests improvement.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**e.g., 'Tested bridge: held 3 coins. Could hold more if wider.'**",
          "commonErrors": [
                    "No test.",
                    "No improvement."
          ]
},
        },
        {
          id: "s1-u7-test-improve-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Evaluate' means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "build"
                    },
                    {
                              "id": "b",
                              "text": "judge how well it worked"
                    },
                    {
                              "id": "c",
                              "text": "throw away"
                    },
                    {
                              "id": "d",
                              "text": "plan only"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Evaluate = judge results."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Evaluate = judge results.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**judge results**",
          "commonErrors": [
                    "Confuses with build."
          ]
},
        },
        {
          id: "s1-u7-test-improve-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Build a simple design, test it, and describe one improvement you made or would make.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Test/Improve",
                              "statement": "Build + test + improve."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Builds + tests.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Describes improvement.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**e.g., 'Built tower; it fell; made base wider; now stands.'**",
          "commonErrors": [
                    "No test.",
                    "No improvement."
          ]
},
        },
        {
          id: "s1-u7-test-improve-q6",
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
                              "text": "Make better."
                    },
                    {
                              "id": "d",
                              "text": "Didn't work."
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
          id: "s1-u7-test-improve-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Result\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Make better."
                    },
                    {
                              "id": "b",
                              "text": "Didn't work."
                    },
                    {
                              "id": "c",
                              "text": "It worked."
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
          id: "s1-u7-test-improve-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Improve\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Didn't work."
                    },
                    {
                              "id": "b",
                              "text": "Make better."
                    },
                    {
                              "id": "c",
                              "text": "It worked."
                    },
                    {
                              "id": "d",
                              "text": "Judge how well."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Improve\" means Make better."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Improve\" means Make better.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Improve** = Make better.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
