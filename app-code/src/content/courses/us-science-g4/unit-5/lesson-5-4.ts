import type { Lesson } from "../../../types.ts";

export const lesson54: Lesson = {
  id: "sci4-u5-lesson-5-4",
  code: "5-4",
  title: "Ecosystem Cycles",
  goal: "I CAN explain how nutrients cycle through ecosystems.",
  standards: ["LS2.C"],
  vocabulary: [
    { term: "Cycle", definition: "Repeated process." },
    { term: "Nutrient", definition: "Needed substance." },
    { term: "Recycle", definition: "Use again." },
    { term: "Decomposer", definition: "Breaks down." },
    { term: "Soil", definition: "Where nutrients go." },
    { term: "Water cycle", definition: "Water movement." },
    { term: "Carbon cycle", definition: "Carbon movement." },
    { term: "Nitrogen", definition: "Important nutrient." },
  ],
  concepts: [
    {
      id: "sci4-u5-cycles",
      title: "Ecosystem cycles",
      skill: "Explain how nutrients cycle through ecosystems via decomposers.",
      lesson: {
        sections: [
          {
            heading: "Nothing is wasted",
            body: "**Nutrients cycle** through ecosystems. **Decomposers** break down dead matter, returning **nutrients** to **soil** for plants to use again.",
          },
          {
            heading: "Important cycles",
            body: "**Water cycle** (evaporation, condensation, precipitation), **carbon cycle** (photosynthesis, respiration, decomposition), **nitrogen cycle** (fixation, nitrification).",
          },
        ],
        keyFormulas: [
          { name: "Cycles", statement: "Decomposers + recycling = nutrients reused." },
        ],
        workedExample: {
          problem: "What happens to nutrients when a leaf falls?",
          solution: "Decomposers break it down, returning nutrients to soil for new plants.",
        },
      },
      questions: [
        {
          id: "sci4-u5-cycles-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'cycle' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "one-way process"
                    },
                    {
                              "id": "b",
                              "text": "a repeated process"
                    },
                    {
                              "id": "c",
                              "text": "a chain"
                    },
                    {
                              "id": "d",
                              "text": "a level"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Cycle = repeated."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Cycle = repeated.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "a repeated process",
          "commonErrors": [
                    "Thinks it's linear."
          ]
},
        },
        {
          id: "sci4-u5-cycles-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Decomposers are important because they...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "eat live prey"
                    },
                    {
                              "id": "b",
                              "text": "return nutrients to soil"
                    },
                    {
                              "id": "c",
                              "text": "make food"
                    },
                    {
                              "id": "d",
                              "text": "hunt"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Return nutrients."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Return nutrients.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "return nutrients to soil",
          "commonErrors": [
                    "Wrong role."
          ]
},
        },
        {
          id: "sci4-u5-cycles-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Explain how nutrients cycle through an ecosystem. What role do decomposers play?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Cycles",
                              "statement": "Nutrient cycle explanation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Explains cycle + decomposers.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**e.g., 'Plants use nutrients -> animals eat -> decomposers break down -> nutrients return to soil.'**",
          "commonErrors": [
                    "Cannot explain.",
                    "Wrong role."
          ]
},
        },
        {
          id: "sci4-u5-cycles-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The 'water cycle' includes...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only rain"
                    },
                    {
                              "id": "b",
                              "text": "evaporation, condensation, precipitation"
                    },
                    {
                              "id": "c",
                              "text": "only evaporation"
                    },
                    {
                              "id": "d",
                              "text": "only clouds"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "All three stages."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "All three stages.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "evaporation, condensation, precipitation",
          "commonErrors": [
                    "Incomplete."
          ]
},
        },
        {
          id: "sci4-u5-cycles-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Compare the water cycle and carbon cycle. How are they similar and different?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Cycles",
                              "statement": "Comparison."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Compares cycles.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Identifies similarities/differences.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'Both cycle substances; water=H2O movement, carbon=organic matter movement.'**",
          "commonErrors": [
                    "Cannot compare.",
                    "Wrong facts."
          ]
},
        },
        {
          id: "sci4-u5-cycles-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Cycle\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Needed substance."
                    },
                    {
                              "id": "b",
                              "text": "Repeated process."
                    },
                    {
                              "id": "c",
                              "text": "Use again."
                    },
                    {
                              "id": "d",
                              "text": "Breaks down."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Cycle\" means Repeated process."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Cycle\" means Repeated process.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Cycle** = Repeated process.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci4-u5-cycles-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Nutrient\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Use again."
                    },
                    {
                              "id": "b",
                              "text": "Breaks down."
                    },
                    {
                              "id": "c",
                              "text": "Where nutrients go."
                    },
                    {
                              "id": "d",
                              "text": "Needed substance."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Nutrient\" means Needed substance."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Nutrient\" means Needed substance.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Nutrient** = Needed substance.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci4-u5-cycles-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Recycle\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Breaks down."
                    },
                    {
                              "id": "b",
                              "text": "Use again."
                    },
                    {
                              "id": "c",
                              "text": "Where nutrients go."
                    },
                    {
                              "id": "d",
                              "text": "Water movement."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Recycle\" means Use again."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Recycle\" means Use again.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Recycle** = Use again.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
