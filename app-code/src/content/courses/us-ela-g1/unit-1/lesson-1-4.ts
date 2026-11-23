import type { Lesson } from "../../../types.ts";

export const lesson14: Lesson = {
  id: "ela1-u1-lesson-1-4",
  code: "1-4",
  title: "Story Structure",
  goal: "I CAN identify the problem and solution in a story.",
  standards: ["RL.1.3"],
  vocabulary: [
    { term: "Problem", definition: "A challenge in the story." },
    { term: "Solution", definition: "How it is fixed." },
    { term: "Plot", definition: "What happens." },
    { term: "Character", definition: "Who is in story." },
    { term: "Event", definition: "Something that happens." },
    { term: "Beginning", definition: "How it starts." },
    { term: "End", definition: "How it finishes." },
    { term: "Resolution", definition: "How problem ends." },
  ],
  concepts: [
    {
      id: "ela1-u1-story-structure",
      title: "Story structure",
      skill: "Identify the problem and solution in a story.",
      lesson: {
        sections: [
          {
            heading: "Problem and solution",
            body: "Many stories have a **problem** (a challenge) and a **solution** (how it is fixed). The **plot** is what happens between the beginning and end.",
          },
          {
            heading: "Find the parts",
            body: "Ask: What problem does the character face? How is it solved? The **resolution** is how the story ends.",
          },
        ],
        keyFormulas: [
          { name: "Story structure", statement: "Problem -> events -> solution = plot." },
        ],
        workedExample: {
          problem: "Story: 'The boy lost his dog and found it behind the house.' What is the problem and solution?",
          solution: "Problem: **lost dog**. Solution: **found it behind the house**.",
        },
      },
      questions: [
        {
          id: "ela1-u1-story-structure-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'problem' in a story is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "the ending"
                    },
                    {
                              "id": "b",
                              "text": "a challenge the character faces"
                    },
                    {
                              "id": "c",
                              "text": "the setting"
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
                              "statement": "Problem = a challenge."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Problem = a challenge.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**a challenge**",
          "commonErrors": [
                    "Confuses with solution."
          ]
},
        },
        {
          id: "ela1-u1-story-structure-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "A 'solution' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "the problem"
                    },
                    {
                              "id": "b",
                              "text": "how the problem is fixed"
                    },
                    {
                              "id": "c",
                              "text": "the beginning"
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
                              "statement": "Solution = how problem is fixed."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Solution = how problem is fixed.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**how fixed**",
          "commonErrors": [
                    "Confuses with problem."
          ]
},
        },
        {
          id: "ela1-u1-story-structure-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Read a story. What is the problem? How is it solved?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Problem/solution",
                              "statement": "Problem + solution."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Names problem + solution.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'Problem: lost key; Solution: found under mat.'**",
          "commonErrors": [
                    "Cannot identify.",
                    "Only one part."
          ]
},
        },
        {
          id: "ela1-u1-story-structure-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The 'plot' of a story is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "the characters"
                    },
                    {
                              "id": "b",
                              "text": "what happens in the story"
                    },
                    {
                              "id": "c",
                              "text": "the setting"
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
                              "statement": "Plot = what happens."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Plot = what happens.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**what happens**",
          "commonErrors": [
                    "Confuses with setting."
          ]
},
        },
        {
          id: "ela1-u1-story-structure-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Tell a story and name its problem and solution.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Problem/solution",
                              "statement": "Story + problem + solution."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Tells story.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Names problem + solution.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'Lost puppy found home; problem: lost; solution: found.'**",
          "commonErrors": [
                    "No story.",
                    "Missing parts."
          ]
},
        },
        {
          id: "ela1-u1-story-structure-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Problem\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "How it is fixed."
                    },
                    {
                              "id": "b",
                              "text": "A challenge in the story."
                    },
                    {
                              "id": "c",
                              "text": "What happens."
                    },
                    {
                              "id": "d",
                              "text": "Who is in story."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Problem\" means A challenge in the story."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Problem\" means A challenge in the story.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Problem** = A challenge in the story.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela1-u1-story-structure-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Solution\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "What happens."
                    },
                    {
                              "id": "b",
                              "text": "Who is in story."
                    },
                    {
                              "id": "c",
                              "text": "Something that happens."
                    },
                    {
                              "id": "d",
                              "text": "How it is fixed."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Solution\" means How it is fixed."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Solution\" means How it is fixed.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Solution** = How it is fixed.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela1-u1-story-structure-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Plot\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Who is in story."
                    },
                    {
                              "id": "b",
                              "text": "What happens."
                    },
                    {
                              "id": "c",
                              "text": "Something that happens."
                    },
                    {
                              "id": "d",
                              "text": "How it starts."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Plot\" means What happens."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Plot\" means What happens.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Plot** = What happens.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
