import type { Lesson } from "../../../types.ts";

export const lesson71: Lesson = {
  id: "s1-u7-lesson-7-1",
  code: "7-1",
  title: "Identifying Problems",
  goal: "I CAN identify a problem that needs solving.",
  standards: ["1-ETS1-1"],
  vocabulary: [
    { term: "Problem", definition: "Something that needs fixing." },
    { term: "Solve", definition: "Find an answer." },
    { term: "Need", definition: "What we require." },
    { term: "Ask", definition: "Pose a question." },
    { term: "Design", definition: "Plan a solution." },
    { term: "Constraint", definition: "Limit on solution." },
    { term: "Goal", definition: "What we want to happen." },
    { term: "Idea", definition: "A possible solution." },
  ],
  concepts: [
    {
      id: "s1-u7-problem-identify",
      title: "Identifying problems",
      skill: "Engineering starts by identifying a problem that needs a solution.",
      lesson: {
        sections: [
          {
            heading: "Find the problem",
            body: "**Engineering** starts by finding a **problem** — something that needs fixing or improving. 'My pencil keeps rolling off the desk' is a problem.",
          },
          {
            heading: "Ask questions",
            body: "To understand the problem, **ask** questions: What is the problem? Who has it? What would a good solution look like?",
          },
        ],
        keyFormulas: [
          { name: "Problem", statement: "Something needing solution; ask questions to understand." },
        ],
        workedExample: {
          problem: "Identify the problem: 'My juice box keeps tipping over.'",
          solution: "Problem: **juice box tips over** — needs something to hold it upright.",
        },
      },
      questions: [
        {
          id: "s1-u7-problem-identify-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'problem' in engineering is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a solution"
                    },
                    {
                              "id": "b",
                              "text": "something that needs fixing"
                    },
                    {
                              "id": "c",
                              "text": "a material"
                    },
                    {
                              "id": "d",
                              "text": "a drawing"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Problem = needs fixing."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Problem = needs fixing.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**needs fixing**",
          "commonErrors": [
                    "Confuses with solution."
          ]
},
        },
        {
          id: "s1-u7-problem-identify-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "To understand a problem, you should...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "ignore it"
                    },
                    {
                              "id": "b",
                              "text": "ask questions about it"
                    },
                    {
                              "id": "c",
                              "text": "solve it immediately"
                    },
                    {
                              "id": "d",
                              "text": "draw it only"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Ask questions first."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Ask questions first.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**ask questions**",
          "commonErrors": [
                    "Picks wrong step."
          ]
},
        },
        {
          id: "s1-u7-problem-identify-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Identify a problem in your classroom or home. What needs fixing or improving?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Problem",
                              "statement": "Identify problem + needs."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Identifies problem.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**e.g., 'My pencils roll off desk — need holder.'**",
          "commonErrors": [
                    "No problem identified.",
                    "States a solution only."
          ]
},
        },
        {
          id: "s1-u7-problem-identify-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'constraint' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a solution"
                    },
                    {
                              "id": "b",
                              "text": "a limit on what the solution can be"
                    },
                    {
                              "id": "c",
                              "text": "a problem"
                    },
                    {
                              "id": "d",
                              "text": "a material only"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Constraint = limit on solution."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Constraint = limit on solution.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**limit on solution**",
          "commonErrors": [
                    "Confuses with problem."
          ]
},
        },
        {
          id: "s1-u7-problem-identify-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Identify a problem and ask three questions to understand it better.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Problem",
                              "statement": "Problem + 3 questions."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Identifies problem.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Asks 3 questions.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**e.g., 'Problem: door slams. Q: Why? How often? Can we fix?'**",
          "commonErrors": [
                    "No problem.",
                    "Fewer than 3 questions."
          ]
},
        },
        {
          id: "s1-u7-problem-identify-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Problem\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Find an answer."
                    },
                    {
                              "id": "b",
                              "text": "Something that needs fixing."
                    },
                    {
                              "id": "c",
                              "text": "What we require."
                    },
                    {
                              "id": "d",
                              "text": "Pose a question."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Problem\" means Something that needs fixing."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Problem\" means Something that needs fixing.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Problem** = Something that needs fixing.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "s1-u7-problem-identify-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Solve\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "What we require."
                    },
                    {
                              "id": "b",
                              "text": "Pose a question."
                    },
                    {
                              "id": "c",
                              "text": "Plan a solution."
                    },
                    {
                              "id": "d",
                              "text": "Find an answer."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Solve\" means Find an answer."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Solve\" means Find an answer.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Solve** = Find an answer.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "s1-u7-problem-identify-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Need\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Pose a question."
                    },
                    {
                              "id": "b",
                              "text": "What we require."
                    },
                    {
                              "id": "c",
                              "text": "Plan a solution."
                    },
                    {
                              "id": "d",
                              "text": "Limit on solution."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Need\" means What we require."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Need\" means What we require.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Need** = What we require.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
