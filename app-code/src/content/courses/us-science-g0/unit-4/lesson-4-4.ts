import type { Lesson } from "../../../types.ts";

export const lesson44: Lesson = {
  id: "s0-u4-lesson-4-4",
  code: "4-4",
  title: "Choosing Materials",
  goal: "I CAN choose the right material for a purpose.",
  standards: ["K-PS1-1", "K-PS1-2"],
  vocabulary: [
    { term: "Purpose", definition: "What something is for." },
    { term: "Choose", definition: "Pick the best one." },
    { term: "Property", definition: "Quality of material." },
    { term: "Need", definition: "What we require." },
    { term: "Match", definition: "Fit together well." },
    { term: "Best", definition: "Most suitable." },
    { term: "Work", definition: "Do its job." },
    { term: "Fail", definition: "Not work." },
  ],
  concepts: [
    {
      id: "s0-u4-material-use",
      title: "Choosing materials",
      skill: "Choose materials based on their properties to fit a purpose.",
      lesson: {
        sections: [
          {
            heading: "Match material to purpose",
            body: "To **choose** a material, think about its **properties** and the **purpose**. A raincoat needs to be **waterproof**; a window needs to be **see-through**; a hammer needs to be **hard**.",
          },
          {
            heading: "Best choice",
            body: "The **best** material has the right **properties** for the job. If a material does not **work** for the purpose, it **fails** — choose a different one.",
          },
        ],
        keyFormulas: [
          { name: "Choose material", statement: "Purpose + needed properties -> best material." },
        ],
        workedExample: {
          problem: "You need a material for a raincoat. Should it be see-through glass or waterproof fabric?",
          solution: "**Waterproof fabric** — it keeps rain out; glass would let water in.",
        },
      },
      questions: [
        {
          id: "s0-u4-material-use-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "To choose a material, you should think about...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "its color"
                    },
                    {
                              "id": "b",
                              "text": "its properties and the purpose"
                    },
                    {
                              "id": "c",
                              "text": "its price only"
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
                              "statement": "Properties + purpose = right choice."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Properties + purpose = right choice.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**properties + purpose**",
          "commonErrors": [
                    "Thinks color matters."
          ]
},
        },
        {
          id: "s0-u4-material-use-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "A raincoat should be made of...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "glass"
                    },
                    {
                              "id": "b",
                              "text": "waterproof fabric"
                    },
                    {
                              "id": "c",
                              "text": "paper"
                    },
                    {
                              "id": "d",
                              "text": "wood"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Raincoat needs waterproof material."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Raincoat needs waterproof material.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**waterproof fabric**",
          "commonErrors": [
                    "Picks see-through or weak material."
          ]
},
        },
        {
          id: "s0-u4-material-use-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Choose a material for a purpose (umbrella, window, spoon). Explain why it is the best choice.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Choose material",
                              "statement": "Material + purpose + properties."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Chooses material + explains.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**e.g., 'Umbrella=waterproof fabric; keeps rain off.'**",
          "commonErrors": [
                    "Wrong material.",
                    "No reason."
          ]
},
        },
        {
          id: "s0-u4-material-use-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The 'best' material is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "the prettiest"
                    },
                    {
                              "id": "b",
                              "text": "the one with the right properties for the job"
                    },
                    {
                              "id": "c",
                              "text": "the cheapest"
                    },
                    {
                              "id": "d",
                              "text": "the biggest"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Best = right properties for purpose."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Best = right properties for purpose.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**right properties**",
          "commonErrors": [
                    "Thinks prettiest is best."
          ]
},
        },
        {
          id: "s0-u4-material-use-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "You need to make a boat that floats. Choose two possible materials and explain which is better and why.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Choose material",
                              "statement": "2 materials + best choice + reason."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Chooses 2 materials.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Picks best + explains.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'Wood or plastic; plastic is lighter and waterproof, so better.'**",
          "commonErrors": [
                    "Cannot choose.",
                    "No reason."
          ]
},
        },
        {
          id: "s0-u4-material-use-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Purpose\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Pick the best one."
                    },
                    {
                              "id": "b",
                              "text": "What something is for."
                    },
                    {
                              "id": "c",
                              "text": "Quality of material."
                    },
                    {
                              "id": "d",
                              "text": "What we require."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Purpose\" means What something is for."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Purpose\" means What something is for.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Purpose** = What something is for.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "s0-u4-material-use-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Choose\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Quality of material."
                    },
                    {
                              "id": "b",
                              "text": "What we require."
                    },
                    {
                              "id": "c",
                              "text": "Fit together well."
                    },
                    {
                              "id": "d",
                              "text": "Pick the best one."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Choose\" means Pick the best one."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Choose\" means Pick the best one.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Choose** = Pick the best one.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "s0-u4-material-use-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Property\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "What we require."
                    },
                    {
                              "id": "b",
                              "text": "Quality of material."
                    },
                    {
                              "id": "c",
                              "text": "Fit together well."
                    },
                    {
                              "id": "d",
                              "text": "Most suitable."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Property\" means Quality of material."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Property\" means Quality of material.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Property** = Quality of material.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
