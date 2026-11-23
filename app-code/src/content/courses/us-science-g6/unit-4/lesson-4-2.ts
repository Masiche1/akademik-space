import type { Lesson } from "../../../types.ts";

export const lesson42: Lesson = {
  id: "sci6-u4-lesson-4-2",
  code: "4-2",
  title: "Cell Division",
  goal: "I CAN explain cell division and its purpose.",
  standards: ["LS1.B"],
  vocabulary: [
    { term: "Division", definition: "Cell splits." },
    { term: "Mitosis", definition: "Identical cells." },
    { term: "Meiosis", definition: "Sex cells." },
    { term: "DNA", definition: "Genetic material." },
    { term: "Chromosome", definition: "DNA package." },
    { term: "Copy", definition: "Duplicate." },
    { term: "Growth", definition: "Get bigger." },
    { term: "Repair", definition: "Fix damage." },
  ],
  concepts: [
    {
      id: "sci6-u4-cell-division",
      title: "Cell division",
      skill: "Explain how cells divide (mitosis and meiosis) and why.",
      lesson: {
        sections: [
          {
            heading: "Why divide?",
            body: "Cells divide for **growth**, **repair**, and **reproduction**. **Mitosis** makes identical cells; **meiosis** makes sex cells (sperm/egg) with half chromosomes.",
          },
          {
            heading: "DNA",
            body: "Before dividing, **DNA** is copied so each new cell gets complete genetic material.",
          },
        ],
        keyFormulas: [
          { name: "Division", statement: "Mitosis (identical) + meiosis (sex cells) = cell division." },
        ],
        workedExample: {
          problem: "Why do your skin cells constantly divide?",
          solution: "**For repair and replacement — skin cells wear out and need replacement.**",
        },
      },
      questions: [
        {
          id: "sci6-u4-cell-division-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Mitosis' produces...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "sex cells"
                    },
                    {
                              "id": "b",
                              "text": "identical cells"
                    },
                    {
                              "id": "c",
                              "text": "half chromosomes"
                    },
                    {
                              "id": "d",
                              "text": "gametes"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Identical cells."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Identical cells.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "identical cells",
          "commonErrors": [
                    "Confuses with meiosis."
          ]
},
        },
        {
          id: "sci6-u4-cell-division-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "'Meiosis' produces...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "identical cells"
                    },
                    {
                              "id": "b",
                              "text": "sex cells with half chromosomes"
                    },
                    {
                              "id": "c",
                              "text": "skin cells"
                    },
                    {
                              "id": "b",
                              "text": "blood cells"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Sex cells."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Sex cells.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "sex cells with half chromosomes",
          "commonErrors": [
                    "Confuses with mitosis."
          ]
},
        },
        {
          id: "sci6-u4-cell-division-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain why cells divide and the difference between mitosis and meiosis.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Division",
                              "statement": "Why + difference."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Explains why.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Explains difference.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**Cells divide for growth/repair/reproduction; Mitosis = identical cells; Meiosis = sex cells with half chromosomes.**",
          "commonErrors": [
                    "Cannot explain.",
                    "No difference."
          ]
},
        },
        {
          id: "sci6-u4-cell-division-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'DNA' stands for...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "deoxyribonucleic acid"
                    },
                    {
                              "id": "b",
                              "text": "do not ask"
                    },
                    {
                              "id": "c",
                              "text": "directed acid"
                    },
                    {
                              "id": "d",
                              "text": "double acid"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Deoxyribonucleic acid."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Deoxyribonucleic acid.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "deoxyribonucleic acid",
          "commonErrors": [
                    "Wrong meaning."
          ]
},
        },
        {
          id: "sci6-u4-cell-division-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Describe the purpose of cell division and compare mitosis to meiosis.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Division",
                              "statement": "Purpose + comparison."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes purpose.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Compares types.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**Purpose: growth, repair, reproduction; Mitosis: identical cells; Meiosis: sex cells for reproduction.**",
          "commonErrors": [
                    "Cannot describe.",
                    "No comparison."
          ]
},
        },
        {
          id: "sci6-u4-cell-division-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Division\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Identical cells."
                    },
                    {
                              "id": "b",
                              "text": "Cell splits."
                    },
                    {
                              "id": "c",
                              "text": "Sex cells."
                    },
                    {
                              "id": "d",
                              "text": "Genetic material."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Division\" means Cell splits."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Division\" means Cell splits.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Division** = Cell splits.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci6-u4-cell-division-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Mitosis\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Sex cells."
                    },
                    {
                              "id": "b",
                              "text": "Genetic material."
                    },
                    {
                              "id": "c",
                              "text": "DNA package."
                    },
                    {
                              "id": "d",
                              "text": "Identical cells."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Mitosis\" means Identical cells."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Mitosis\" means Identical cells.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Mitosis** = Identical cells.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci6-u4-cell-division-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Meiosis\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Genetic material."
                    },
                    {
                              "id": "b",
                              "text": "Sex cells."
                    },
                    {
                              "id": "c",
                              "text": "DNA package."
                    },
                    {
                              "id": "d",
                              "text": "Duplicate."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Meiosis\" means Sex cells."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Meiosis\" means Sex cells.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Meiosis** = Sex cells.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
