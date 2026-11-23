import type { Lesson } from "../../../types.ts";

export const lesson74: Lesson = {
  id: "sci5-u7-lesson-7-4",
  code: "7-4",
  title: "Real-World Engineering",
  goal: "I CAN identify engineering solutions in the real world.",
  standards: ["ETS1.A"],
  vocabulary: [
    { term: "Engineering", definition: "Applying science to problems." },
    { term: "Solution", definition: "What solves problem." },
    { term: "Design", definition: "How it works." },
    { term: "Technology", definition: "Tools/devices." },
    { term: "Innovation", definition: "New solution." },
    { term: "Efficiency", definition: "Works well." },
    { term: "Safety", definition: "No harm." },
    { term: "Sustainability", definition: "Long-term." },
  ],
  concepts: [
    {
      id: "sci5-u7-real-world-engineering",
      title: "Real-World Engineering",
      skill: "Identify engineering solutions and their design in real-world applications.",
      lesson: {
        sections: [
          {
            heading: "Engineering",
            body: "Science -> technology -> solutions.",
          },
          {
            heading: "Design",
            body: "Criteria + constraints -> solution.",
          },
        ],
        keyFormulas: [
          { name: "Engineering", statement: "Science + design = solutions" },
        ],
        workedExample: {
          problem: "Identify an engineering solution: how does a smartphone combine multiple engineering disciplines?",
          solution: "Materials science (screen), electrical (battery), software (apps), mechanical (buttons) — multiple disciplines.",
        },
      },
      questions: [
        {
          id: "sci5-u7-real-world-engineering-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Engineering applies...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only math"
                    },
                    {
                              "id": "b",
                              "text": "science to solve real-world problems"
                    },
                    {
                              "id": "c",
                              "text": "only art"
                    },
                    {
                              "id": "d",
                              "text": "only biology"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Science to solve problems."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Science to solve problems.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "science to solve real-world problems",
          "commonErrors": [
                    "Too narrow."
          ]
},
        },
        {
          id: "sci5-u7-real-world-engineering-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "A solution in engineering is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "the problem"
                    },
                    {
                              "id": "b",
                              "text": "what solves the problem"
                    },
                    {
                              "id": "c",
                              "text": "the design"
                    },
                    {
                              "id": "d",
                              "text": "the test"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "What solves problem."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "What solves problem.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "what solves the problem",
          "commonErrors": [
                    "Confuses with problem."
          ]
},
        },
        {
          id: "sci5-u7-real-world-engineering-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Choose a real-world technology (e.g., smartphone, bridge, vaccine). Identify which engineering disciplines it uses.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Engineering",
                              "statement": "Technology + disciplines."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Identifies technology.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Lists disciplines.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., Smartphone: electrical (battery), materials (screen), software (apps), mechanical (buttons).**",
          "commonErrors": [
                    "Cannot identify.",
                    "Missing disciplines."
          ]
},
        },
        {
          id: "sci5-u7-real-world-engineering-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Innovation in engineering means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "old ideas"
                    },
                    {
                              "id": "b",
                              "text": "new or improved solutions"
                    },
                    {
                              "id": "c",
                              "text": "copying"
                    },
                    {
                              "id": "d",
                              "text": "stopping"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "New/improved solutions."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "New/improved solutions.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "new or improved solutions",
          "commonErrors": [
                    "Wrong meaning."
          ]
},
        },
        {
          id: "sci5-u7-real-world-engineering-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Explain how engineering solutions balance criteria, constraints and sustainability.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Engineering",
                              "statement": "Balance explained."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Explains balance.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Gives example.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**Good solutions meet criteria within constraints while considering long-term sustainability.**",
          "commonErrors": [
                    "Cannot explain.",
                    "No example."
          ]
},
        },
        {
          id: "sci5-u7-real-world-engineering-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Engineering\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "What solves problem."
                    },
                    {
                              "id": "b",
                              "text": "Applying science to problems."
                    },
                    {
                              "id": "c",
                              "text": "How it works."
                    },
                    {
                              "id": "d",
                              "text": "Tools/devices."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Engineering\" means Applying science to problems."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Engineering\" means Applying science to problems.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Engineering** = Applying science to problems.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci5-u7-real-world-engineering-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Solution\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "How it works."
                    },
                    {
                              "id": "b",
                              "text": "Tools/devices."
                    },
                    {
                              "id": "c",
                              "text": "New solution."
                    },
                    {
                              "id": "d",
                              "text": "What solves problem."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Solution\" means What solves problem."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Solution\" means What solves problem.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Solution** = What solves problem.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci5-u7-real-world-engineering-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Design\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Tools/devices."
                    },
                    {
                              "id": "b",
                              "text": "How it works."
                    },
                    {
                              "id": "c",
                              "text": "New solution."
                    },
                    {
                              "id": "d",
                              "text": "Works well."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Design\" means How it works."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Design\" means How it works.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Design** = How it works.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
