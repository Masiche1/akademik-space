import type { Lesson } from "../../../types.ts";

export const lesson82: Lesson = {
  id: "s0-u8-lesson-8-2",
  code: "8-2",
  title: "Solving Problems with Design",
  goal: "I CAN use design to solve everyday problems.",
  standards: ["K-2-ETS1-1", "K-2-ETS1-2"],
  vocabulary: [
    { term: "Solve", definition: "Find an answer." },
    { term: "Problem", definition: "Something to fix." },
    { term: "Solution", definition: "The answer/fix." },
    { term: "Design", definition: "Plan a solution." },
    { term: "Try", definition: "Attempt." },
    { term: "Work", definition: "Function correctly." },
    { term: "Better", definition: "Improved." },
    { term: "Idea", definition: "A plan." },
  ],
  concepts: [
    {
      id: "s0-u8-solve-problems",
      title: "Solving problems with design",
      skill: "Use the design process to solve everyday problems.",
      lesson: {
        sections: [
          {
            heading: "Everyday problems",
            body: "We solve problems every day — a toy that falls, a container that spills, a chair that wobbles. **Design** helps us find **solutions**.",
          },
          {
            heading: "Try, test, improve",
            body: "Think of an **idea**, **try** it, see if it **works**, and **improve** it if it does not. Keep trying until it **works**.",
          },
        ],
        keyFormulas: [
          { name: "Solve problems", statement: "Problem -> idea -> try -> works? -> improve until it works." },
        ],
        workedExample: {
          problem: "Your pencil keeps rolling off the desk. How could you solve it?",
          solution: "Idea: put it in a cup or against a wall. Try it. If it still rolls, try a different solution.",
        },
      },
      questions: [
        {
          id: "s0-u8-solve-problems-q1",
          difficulty: "foundation",
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
                              "text": "the answer or fix"
                    },
                    {
                              "id": "c",
                              "text": "the design only"
                    },
                    {
                              "id": "d",
                              "text": "a test"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Solution = fix/answer."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Solution = fix/answer.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**fix/answer**",
          "commonErrors": [
                    "Confuses with problem."
          ]
},
        },
        {
          id: "s0-u8-solve-problems-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "If your first design idea does not work, you should...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "give up"
                    },
                    {
                              "id": "b",
                              "text": "try a different idea or improve it"
                    },
                    {
                              "id": "c",
                              "text": "stop forever"
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
                              "statement": "Try again or improve."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Try again or improve.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**try again**",
          "commonErrors": [
                    "Gives up."
          ]
},
        },
        {
          id: "s0-u8-solve-problems-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Choose a problem you have had. Describe one solution idea and how you would test if it works.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve problems",
                              "statement": "Problem + solution + test."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes solution + test.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**e.g., 'Problem: lost pencil; Solution: cup; Test: does it stay?'**",
          "commonErrors": [
                    "No solution.",
                    "No test."
          ]
},
        },
        {
          id: "s0-u8-solve-problems-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Design' helps solve problems by...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "ignoring them"
                    },
                    {
                              "id": "b",
                              "text": "planning and trying solutions"
                    },
                    {
                              "id": "c",
                              "text": "making them worse"
                    },
                    {
                              "id": "d",
                              "text": "nothing"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Design = plan + try solutions."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Design = plan + try solutions.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**plan + try**",
          "commonErrors": [
                    "Thinks design ignores problems."
          ]
},
        },
        {
          id: "s0-u8-solve-problems-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Pick a real problem (like a wobbly chair). Describe two possible solutions and which you would try first.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve problems",
                              "statement": "2 solutions + choice."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Gives 2 solutions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Picks one + reason.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'Fix legs or add support; try fixing legs first.'**",
          "commonErrors": [
                    "Only one solution.",
                    "No choice."
          ]
},
        },
        {
          id: "s0-u8-solve-problems-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Solve\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Something to fix."
                    },
                    {
                              "id": "b",
                              "text": "Find an answer."
                    },
                    {
                              "id": "c",
                              "text": "The answer/fix."
                    },
                    {
                              "id": "d",
                              "text": "Plan a solution."
                    }
          ],
          "correctChoiceId": "b"
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
          id: "s0-u8-solve-problems-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Problem\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The answer/fix."
                    },
                    {
                              "id": "b",
                              "text": "Plan a solution."
                    },
                    {
                              "id": "c",
                              "text": "Attempt."
                    },
                    {
                              "id": "d",
                              "text": "Something to fix."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Problem\" means Something to fix."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Problem\" means Something to fix.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Problem** = Something to fix.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "s0-u8-solve-problems-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Solution\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Plan a solution."
                    },
                    {
                              "id": "b",
                              "text": "The answer/fix."
                    },
                    {
                              "id": "c",
                              "text": "Attempt."
                    },
                    {
                              "id": "d",
                              "text": "Function correctly."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Solution\" means The answer/fix."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Solution\" means The answer/fix.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Solution** = The answer/fix.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
