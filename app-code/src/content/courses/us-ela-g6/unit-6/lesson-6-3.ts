import type { Lesson } from "../../../types.ts";

export const lesson63: Lesson = {
  id: "ela6-u6-lesson-6-3",
  code: "6-3",
  title: "Research and Revision",
  goal: "I CAN research and revise my writing.",
  standards: ["W.6.5"],
  vocabulary: [
    { term: "Research", definition: "Find information." },
    { term: "Revise", definition: "Improve draft." },
    { term: "Source", definition: "Where info comes from." },
    { term: "Reliable", definition: "Trustworthy." },
    { term: "Cite", definition: "Reference." },
    { term: "Edit", definition: "Fix errors." },
    { term: "Feedback", definition: "Comments." },
    { term: "Improve", definition: "Make better." },
  ],
  concepts: [
    {
      id: "ela6-u6-research-and-revision",
      title: "Research and revision",
      skill: "Conduct research, use reliable sources, and revise writing based on feedback.",
      lesson: {
        sections: [
          {
            heading: "Research",
            body: "**Research** means finding information from reliable sources to support your writing.",
          },
          {
            heading: "Revision",
            body: "**Revising** means improving your draft — adding details, reorganizing, strengthening ideas. **Editing** means fixing grammar and mechanics.",
          },
        ],
        keyFormulas: [
          { name: "Writing process", statement: "Research + draft + revise + edit = strong writing." },
        ],
        workedExample: {
          problem: "You're writing about endangered animals. What should you do to improve your draft?",
          solution: "**Research reliable sources (e.g., conservation websites, books), add facts and statistics, revise for clarity, edit for errors.**",
        },
      },
      questions: [
        {
          id: "ela6-u6-research-and-revision-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Research' in writing means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "guessing"
                    },
                    {
                              "id": "b",
                              "text": "finding information from sources"
                    },
                    {
                              "id": "c",
                              "text": "copying"
                    },
                    {
                              "id": "d",
                              "text": "only reading"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Finding info from sources."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Finding info from sources.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "finding information from sources",
          "commonErrors": [
                    "Too vague."
          ]
},
        },
        {
          id: "ela6-u6-research-and-revision-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "'Revising' a draft means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "fixing typos only"
                    },
                    {
                              "id": "b",
                              "text": "improving content and organization"
                    },
                    {
                              "id": "c",
                              "text": "deleting everything"
                    },
                    {
                              "id": "d",
                              "text": "adding random facts"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Improving content."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Improving content.",
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
          id: "ela6-u6-research-and-revision-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Describe the steps you would take to research and revise an informative essay about a topic of your choice.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Research",
                              "statement": "Steps described."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes steps.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**1. Choose topic; 2. Find reliable sources; 3. Take notes; 4. Write draft; 5. Revise for clarity; 6. Edit for errors; 7. Cite sources.**",
          "commonErrors": [
                    "Vague steps.",
                    "Missing steps."
          ]
},
        },
        {
          id: "ela6-u6-research-and-revision-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'reliable source' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "any website"
                    },
                    {
                              "id": "b",
                              "text": "a trustworthy, credible source"
                    },
                    {
                              "id": "c",
                              "text": "only books"
                    },
                    {
                              "id": "d",
                              "text": "only experts"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Trustworthy/credible."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Trustworthy/credible.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "a trustworthy, credible source",
          "commonErrors": [
                    "Too narrow."
          ]
},
        },
        {
          id: "ela6-u6-research-and-revision-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Explain how you would research a topic and revise your writing based on what you find.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Research",
                              "statement": "Process explained."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Explains research.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Explains revision.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'Research: find credible sources, take notes, cite; Revise: add evidence, improve flow, address counterarguments.'**",
          "commonErrors": [
                    "Cannot explain.",
                    "Incomplete process."
          ]
},
        },
        {
          id: "ela6-u6-research-and-revision-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Research\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Improve draft."
                    },
                    {
                              "id": "b",
                              "text": "Find information."
                    },
                    {
                              "id": "c",
                              "text": "Where info comes from."
                    },
                    {
                              "id": "d",
                              "text": "Trustworthy."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Research\" means Find information."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Research\" means Find information.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Research** = Find information.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela6-u6-research-and-revision-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Revise\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Where info comes from."
                    },
                    {
                              "id": "b",
                              "text": "Trustworthy."
                    },
                    {
                              "id": "c",
                              "text": "Reference."
                    },
                    {
                              "id": "d",
                              "text": "Improve draft."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Revise\" means Improve draft."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Revise\" means Improve draft.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Revise** = Improve draft.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela6-u6-research-and-revision-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Source\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Trustworthy."
                    },
                    {
                              "id": "b",
                              "text": "Where info comes from."
                    },
                    {
                              "id": "c",
                              "text": "Reference."
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
                              "statement": "\"Source\" means Where info comes from."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Source\" means Where info comes from.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Source** = Where info comes from.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
