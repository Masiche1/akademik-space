import type { Lesson } from "../../../types.ts";

export const lesson81: Lesson = {
  id: "sci6-u8-lesson-8-1",
  code: "8-1",
  title: "Engineering Design",
  goal: "I CAN apply the engineering design process.",
  standards: ["ETS1.A"],
  vocabulary: [
    { term: "Engineering", definition: "Design solutions." },
    { term: "Design process", definition: "Steps to solve." },
    { term: "Problem", definition: "What to solve." },
    { term: "Criteria", definition: "Requirements." },
    { term: "Constraints", definition: "Limits." },
    { term: "Prototype", definition: "Test model." },
    { term: "Test", definition: "Try it out." },
    { term: "Iterate", definition: "Improve and repeat." },
  ],
  concepts: [
    {
      id: "sci6-u8-engineering-design",
      title: "Engineering design",
      skill: "Apply the engineering design process to solve problems.",
      lesson: {
        sections: [
          {
            heading: "Design process",
            body: "**Engineering** = designing solutions to problems. Process: define problem -> research -> brainstorm -> design -> build prototype -> test -> improve (iterate).",
          },
          {
            heading: "Criteria/constraints",
            body: "**Criteria** = what solution must do; **constraints** = limits (cost, materials, time).",
          },
        ],
        keyFormulas: [
          { name: "Design process", statement: "Problem -> research -> design -> build -> test -> improve = engineering." },
        ],
        workedExample: {
          problem: "Design a bridge to hold 100 kg using only paper and tape. Outline the process.",
          solution: "**Problem: hold 100kg; Research: bridge designs; Design: truss structure; Build prototype; Test with weights; Iterate to improve.**",
        },
      },
      questions: [
        {
          id: "sci6-u8-engineering-design-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Engineering' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only science"
                    },
                    {
                              "id": "b",
                              "text": "designing solutions to problems"
                    },
                    {
                              "id": "c",
                              "text": "only math"
                    },
                    {
                              "id": "d",
                              "text": "only art"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Designing solutions."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Designing solutions.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "designing solutions to problems",
          "commonErrors": [
                    "Too narrow."
          ]
},
        },
        {
          id: "sci6-u8-engineering-design-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "The engineering design process includes...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only building"
                    },
                    {
                              "id": "b",
                              "text": "define, research, design, build, test, improve"
                    },
                    {
                              "id": "c",
                              "text": "only testing"
                    },
                    {
                              "id": "d",
                              "text": "only brainstorming"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "All steps."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "All steps.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "define, research, design, build, test, improve",
          "commonErrors": [
                    "Incomplete process."
          ]
},
        },
        {
          id: "sci6-u8-engineering-design-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Describe the steps of the engineering design process and give an example of a problem you could solve.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Engineering",
                              "statement": "Steps + example."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes steps.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Gives example.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**Steps: problem->research->design->prototype->test->iterate; Example: design a better lunchbox or water filter.**",
          "commonErrors": [
                    "Cannot describe.",
                    "No example."
          ]
},
        },
        {
          id: "sci6-u8-engineering-design-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Prototype' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "final product"
                    },
                    {
                              "id": "b",
                              "text": "test model"
                    },
                    {
                              "id": "c",
                              "text": "only plan"
                    },
                    {
                              "id": "d",
                              "text": "only idea"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Test model."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Test model.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "test model",
          "commonErrors": [
                    "Confuses with final."
          ]
},
        },
        {
          id: "sci6-u8-engineering-design-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Walk through the engineering design process for a simple problem and explain why iteration is important.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Engineering",
                              "statement": "Process + iteration."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Walks through process.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Explains iteration.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**Example: build tower; Test -> fails -> improve -> retest; Iteration = learning from failures to improve design.**",
          "commonErrors": [
                    "Cannot walk through.",
                    "No iteration explained."
          ]
},
        },
        {
          id: "sci6-u8-engineering-design-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Engineering\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Steps to solve."
                    },
                    {
                              "id": "b",
                              "text": "Design solutions."
                    },
                    {
                              "id": "c",
                              "text": "What to solve."
                    },
                    {
                              "id": "d",
                              "text": "Requirements."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Engineering\" means Design solutions."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Engineering\" means Design solutions.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Engineering** = Design solutions.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci6-u8-engineering-design-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Design process\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "What to solve."
                    },
                    {
                              "id": "b",
                              "text": "Requirements."
                    },
                    {
                              "id": "c",
                              "text": "Limits."
                    },
                    {
                              "id": "d",
                              "text": "Steps to solve."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Design process\" means Steps to solve."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Design process\" means Steps to solve.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Design process** = Steps to solve.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci6-u8-engineering-design-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Problem\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Requirements."
                    },
                    {
                              "id": "b",
                              "text": "What to solve."
                    },
                    {
                              "id": "c",
                              "text": "Limits."
                    },
                    {
                              "id": "d",
                              "text": "Test model."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Problem\" means What to solve."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Problem\" means What to solve.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Problem** = What to solve.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
