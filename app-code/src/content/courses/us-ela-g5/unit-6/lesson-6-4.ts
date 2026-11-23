import type { Lesson } from "../../../types.ts";

export const lesson64: Lesson = {
  id: "ela5-u6-lesson-6-4",
  code: "6-4",
  title: "Planning and Revising",
  goal: "I CAN plan and revise my writing.",
  standards: ["W.5.5", "W.5.6"],
  vocabulary: [
    { term: "Plan", definition: "Organize ideas." },
    { term: "Draft", definition: "First version." },
    { term: "Revise", definition: "Improve." },
    { term: "Edit", definition: "Fix errors." },
    { term: "Feedback", definition: "Suggestions." },
    { term: "Peer", definition: "Classmate." },
    { term: "Strength", definition: "Good part." },
    { term: "Improve", definition: "Make better." },
  ],
  concepts: [
    {
      id: "ela5-u6-planning-revision",
      title: "Planning and Revising",
      skill: "Plan, draft, revise and edit writing using feedback.",
      lesson: {
        sections: [
          {
            heading: "Process",
            body: "Plan -> draft -> revise -> edit.",
          },
          {
            heading: "Feedback",
            body: "Helps improve.",
          },
        ],
        keyFormulas: [
          { name: "Writing", statement: "Plan + draft + revise + edit = process" },
        ],
        workedExample: {
          problem: "Write a draft, get feedback, and revise it. What did you improve?",
          solution: "Added details, fixed punctuation, strengthened introduction.",
        },
      },
      questions: [
        {
          id: "ela5-u6-planning-revision-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The writing process includes...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only writing"
                    },
                    {
                              "id": "b",
                              "text": "planning, drafting, revising, editing"
                    },
                    {
                              "id": "c",
                              "text": "only editing"
                    },
                    {
                              "id": "d",
                              "text": "only planning"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "All four steps."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "All four steps.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "planning, drafting, revising, editing",
          "commonErrors": [
                    "Missing steps."
          ]
},
        },
        {
          id: "ela5-u6-planning-revision-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Revising means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "fixing spelling"
                    },
                    {
                              "id": "b",
                              "text": "improving content and organization"
                    },
                    {
                              "id": "c",
                              "text": "writing first draft"
                    },
                    {
                              "id": "d",
                              "text": "planning"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Improve content/organization."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Improve content/organization.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "improving content and organization",
          "commonErrors": [
                    "Confuses with editing."
          ]
},
        },
        {
          id: "ela5-u6-planning-revision-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Write a draft paragraph, identify two things to improve, and revise it. Explain your changes.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Process",
                              "statement": "Draft + improvements + revision."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Writes draft.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Revises + explains.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**Draft; Improvements: [details, organization]; Revision: [changes made].**",
          "commonErrors": [
                    "Cannot revise.",
                    "No explanation."
          ]
},
        },
        {
          id: "ela5-u6-planning-revision-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Editing focuses on...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "ideas"
                    },
                    {
                              "id": "b",
                              "text": "spelling, punctuation, grammar"
                    },
                    {
                              "id": "c",
                              "text": "content"
                    },
                    {
                              "id": "d",
                              "text": "organization"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Spelling, punctuation, grammar."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Spelling, punctuation, grammar.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "spelling, punctuation, grammar",
          "commonErrors": [
                    "Confuses with revising."
          ]
},
        },
        {
          id: "ela5-u6-planning-revision-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Explain the difference between revising and editing. Give an example of each.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Process",
                              "statement": "Difference + examples."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Explains difference.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Gives examples.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**Revise: improve content/ideas; Edit: fix mechanical errors.**",
          "commonErrors": [
                    "Cannot explain.",
                    "No examples."
          ]
},
        },
        {
          id: "ela5-u6-planning-revision-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Plan\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "First version."
                    },
                    {
                              "id": "b",
                              "text": "Organize ideas."
                    },
                    {
                              "id": "c",
                              "text": "Improve."
                    },
                    {
                              "id": "d",
                              "text": "Fix errors."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Plan\" means Organize ideas."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Plan\" means Organize ideas.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Plan** = Organize ideas.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela5-u6-planning-revision-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Draft\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Improve."
                    },
                    {
                              "id": "b",
                              "text": "Fix errors."
                    },
                    {
                              "id": "c",
                              "text": "Suggestions."
                    },
                    {
                              "id": "d",
                              "text": "First version."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Draft\" means First version."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Draft\" means First version.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Draft** = First version.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela5-u6-planning-revision-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Revise\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Fix errors."
                    },
                    {
                              "id": "b",
                              "text": "Improve."
                    },
                    {
                              "id": "c",
                              "text": "Suggestions."
                    },
                    {
                              "id": "d",
                              "text": "Classmate."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Revise\" means Improve."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Revise\" means Improve.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Revise** = Improve.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
