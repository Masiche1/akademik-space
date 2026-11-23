import type { Lesson } from "../../../types.ts";

export const lesson74: Lesson = {
  id: "sci2-u7-lesson-7-4",
  code: "7-4",
  title: "Rocks and Minerals",
  goal: "I CAN describe rocks and minerals and how they are used.",
  standards: ["NGSS 2-ESS1-1"],
  vocabulary: [
    { term: "Rock", definition: "Solid earth material." },
    { term: "Mineral", definition: "Natural substance in rocks." },
    { term: "Soil", definition: "Broken rock + organic matter." },
    { term: "Erode", definition: "Break down over time." },
    { term: "Sediment", definition: "Small rock pieces." },
    { term: "Hard", definition: "Cannot be scratched." },
    { term: "Soft", definition: "Easily scratched." },
    { term: "Use", definition: "What we use it for." },
    { term: "Build", definition: "Make structures." },
    { term: "Fossil", definition: "Remains of ancient life." },
  ],
  concepts: [
    {
      id: "sci2-u7-rocks-minerals",
      title: "Rocks and minerals",
      skill: "Describe rocks, minerals, soil formation and their uses.",
      lesson: {
        sections: [
          {
            heading: "Rocks and minerals",
            body: "**Rocks** are solid earth materials made of **minerals**. Over time, rocks **erode** into smaller pieces called **sediment**, which becomes **soil**.",
          },
          {
            heading: "Uses",
            body: "We use rocks and minerals for **building** (stones, metals), **jewelry** (gems), and **soil** for growing food.",
          },
        ],
        keyFormulas: [
          { name: "Rocks", statement: "Minerals -> rocks -> erode -> sediment -> soil." },
        ],
        workedExample: {
          problem: "How does soil form?",
          solution: "Rocks **erode** into **sediment**, which mixes with organic matter to become **soil**.",
        },
      },
      questions: [
        {
          id: "sci2-u7-rocks-minerals-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'rock' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a mineral"
                    },
                    {
                              "id": "b",
                              "text": "solid earth material made of minerals"
                    },
                    {
                              "id": "c",
                              "text": "soil"
                    },
                    {
                              "id": "d",
                              "text": "a fossil"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Rock = solid earth material."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Rock = solid earth material.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**solid earth material**",
          "commonErrors": [
                    "Confuses with mineral."
          ]
},
        },
        {
          id: "sci2-u7-rocks-minerals-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Soil forms when...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "rocks grow"
                    },
                    {
                              "id": "b",
                              "text": "rocks erode into sediment"
                    },
                    {
                              "id": "c",
                              "text": "plants die"
                    },
                    {
                              "id": "d",
                              "text": "water freezes"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Rocks erode -> sediment -> soil."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Rocks erode -> sediment -> soil.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**erode**",
          "commonErrors": [
                    "Picks wrong process."
          ]
},
        },
        {
          id: "sci2-u7-rocks-minerals-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Describe how rocks become soil and name two uses of rocks/minerals.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Rocks",
                              "statement": "Erode -> sediment -> soil + uses."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes soil formation.",
                              "marks": 1,
                              "markCode": "M1"
                    },
                    {
                              "reasoning": "Names 2 uses.",
                              "marks": 1,
                              "markCode": "M1"
                    }
          ],
          "finalAnswer": "**e.g., 'Rocks erode to sediment to soil. Uses: building, gems.'**",
          "commonErrors": [
                    "Cannot describe.",
                    "No uses."
          ]
},
        },
        {
          id: "sci2-u7-rocks-minerals-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'fossil' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a rock"
                    },
                    {
                              "id": "b",
                              "text": "remains of ancient life"
                    },
                    {
                              "id": "c",
                              "text": "a mineral"
                    },
                    {
                              "id": "d",
                              "text": "soil"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Fossil = ancient life remains."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Fossil = ancient life remains.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**ancient life**",
          "commonErrors": [
                    "Confuses with rock."
          ]
},
        },
        {
          id: "sci2-u7-rocks-minerals-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Find a rock and describe its properties and one use.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Rocks",
                              "statement": "Find rock + properties + use."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes rock properties.",
                              "marks": 1,
                              "markCode": "M1"
                    },
                    {
                              "reasoning": "Names a use.",
                              "marks": 1,
                              "markCode": "M1"
                    }
          ],
          "finalAnswer": "**e.g., 'Granite: hard, gray; used for buildings.'**",
          "commonErrors": [
                    "Cannot find.",
                    "No use."
          ]
},
        },
        {
          id: "sci2-u7-rocks-minerals-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Rock\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Natural substance in rocks."
                    },
                    {
                              "id": "b",
                              "text": "Solid earth material."
                    },
                    {
                              "id": "c",
                              "text": "Broken rock + organic matter."
                    },
                    {
                              "id": "d",
                              "text": "Break down over time."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Rock\" means Solid earth material."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Rock\" means Solid earth material.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Rock** = Solid earth material.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci2-u7-rocks-minerals-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Mineral\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Broken rock + organic matter."
                    },
                    {
                              "id": "b",
                              "text": "Break down over time."
                    },
                    {
                              "id": "c",
                              "text": "Small rock pieces."
                    },
                    {
                              "id": "d",
                              "text": "Natural substance in rocks."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Mineral\" means Natural substance in rocks."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Mineral\" means Natural substance in rocks.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Mineral** = Natural substance in rocks.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci2-u7-rocks-minerals-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Soil\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Break down over time."
                    },
                    {
                              "id": "b",
                              "text": "Broken rock + organic matter."
                    },
                    {
                              "id": "c",
                              "text": "Small rock pieces."
                    },
                    {
                              "id": "d",
                              "text": "Cannot be scratched."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Soil\" means Broken rock + organic matter."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Soil\" means Broken rock + organic matter.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Soil** = Broken rock + organic matter.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
