import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "sci2-u2-lesson-2-2",
  code: "2-2",
  title: "Properties of Matter",
  goal: "I CAN describe properties like color, texture, hardness.",
  standards: ["NGSS 2-PS1-1"],
  vocabulary: [
    { term: "Property", definition: "A characteristic." },
    { term: "Color", definition: "What color it is." },
    { term: "Texture", definition: "How it feels." },
    { term: "Hard", definition: "Cannot be scratched easily." },
    { term: "Soft", definition: "Easily scratched/bent." },
    { term: "Rough", definition: "Bumpy texture." },
    { term: "Smooth", definition: "Flat texture." },
    { term: "Flexible", definition: "Can bend." },
    { term: "Transparent", definition: "Light passes through." },
    { term: "Opaque", definition: "Light cannot pass through." },
  ],
  concepts: [
    {
      id: "sci2-u2-properties-matter",
      title: "Properties of matter",
      skill: "Describe properties of materials: color, texture, hardness, flexibility.",
      lesson: {
        sections: [
          {
            heading: "What are properties?",
            body: "**Properties** are characteristics of matter: **color**, **texture** (how it feels), **hardness**, **flexibility**, **transparency**.",
          },
          {
            heading: "Describe materials",
            body: "A **rock** is **hard**, **rough**, and **opaque**. **Cloth** is **soft**, **flexible**, and can be **transparent** or not.",
          },
        ],
        keyFormulas: [
          { name: "Properties", statement: "Color + texture + hardness + flexibility + transparency = describe matter." },
        ],
        workedExample: {
          problem: "Describe a piece of paper using properties.",
          solution: "Paper is **thin**, **smooth**, **flexible**, **white** (or colored), and **transparent** enough to see through slightly.",
        },
      },
      questions: [
        {
          id: "sci2-u2-properties-matter-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Texture' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a color"
                    },
                    {
                              "id": "b",
                              "text": "how something feels"
                    },
                    {
                              "id": "c",
                              "text": "a size"
                    },
                    {
                              "id": "d",
                              "text": "a shape"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Texture = how it feels."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Texture = how it feels.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**how it feels**",
          "commonErrors": [
                    "Confuses with color."
          ]
},
        },
        {
          id: "sci2-u2-properties-matter-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which material is 'hard'?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "cloth"
                    },
                    {
                              "id": "b",
                              "text": "rock"
                    },
                    {
                              "id": "c",
                              "text": "paper"
                    },
                    {
                              "id": "d",
                              "text": "rubber band"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Rock is hard."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Rock is hard.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**rock**",
          "commonErrors": [
                    "Picks soft material."
          ]
},
        },
        {
          id: "sci2-u2-properties-matter-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Describe two materials using three properties each.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Properties",
                              "statement": "Color + texture + hardness/flexibility."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes two materials.",
                              "marks": 1,
                              "markCode": "M1"
                    }
          ],
          "finalAnswer": "**e.g., 'Rock: hard, rough, opaque. Cloth: soft, flexible, smooth.'**",
          "commonErrors": [
                    "Cannot describe.",
                    "Only one material."
          ]
},
        },
        {
          id: "sci2-u2-properties-matter-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Transparent' means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "see-through"
                    },
                    {
                              "id": "b",
                              "text": "colored"
                    },
                    {
                              "id": "c",
                              "text": "hard"
                    },
                    {
                              "id": "d",
                              "text": "soft"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Transparent = see-through."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Transparent = see-through.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**see-through**",
          "commonErrors": [
                    "Confuses with opaque."
          ]
},
        },
        {
          id: "sci2-u2-properties-matter-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Compare two materials: one hard/opaque, one soft/transparent. Describe both.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Properties",
                              "statement": "Hard/opaque vs soft/transparent."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes hard material.",
                              "marks": 1,
                              "markCode": "M1"
                    },
                    {
                              "reasoning": "Describes soft material.",
                              "marks": 1,
                              "markCode": "M1"
                    }
          ],
          "finalAnswer": "**e.g., 'Glass: hard, transparent. Cloth: soft, opaque.'**",
          "commonErrors": [
                    "Cannot compare.",
                    "Both same."
          ]
},
        },
        {
          id: "sci2-u2-properties-matter-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Property\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "What color it is."
                    },
                    {
                              "id": "b",
                              "text": "A characteristic."
                    },
                    {
                              "id": "c",
                              "text": "How it feels."
                    },
                    {
                              "id": "d",
                              "text": "Cannot be scratched easily."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Property\" means A characteristic."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Property\" means A characteristic.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Property** = A characteristic.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci2-u2-properties-matter-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Color\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "How it feels."
                    },
                    {
                              "id": "b",
                              "text": "Cannot be scratched easily."
                    },
                    {
                              "id": "c",
                              "text": "Easily scratched/bent."
                    },
                    {
                              "id": "d",
                              "text": "What color it is."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Color\" means What color it is."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Color\" means What color it is.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Color** = What color it is.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci2-u2-properties-matter-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Texture\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Cannot be scratched easily."
                    },
                    {
                              "id": "b",
                              "text": "How it feels."
                    },
                    {
                              "id": "c",
                              "text": "Easily scratched/bent."
                    },
                    {
                              "id": "d",
                              "text": "Bumpy texture."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Texture\" means How it feels."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Texture\" means How it feels.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Texture** = How it feels.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
