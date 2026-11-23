import type { Lesson } from "../../../types.ts";

export const lesson51: Lesson = {
  id: "spk-u5-lesson-5-1",
  code: "5-1",
  title: "Material Properties",
  goal: "I CAN describe how materials feel and look.",
  standards: ["ELOF-PK.SCI.MATERIAL.1"],
  vocabulary: [
    { term: "Material", definition: "What something is made of." },
    { term: "Hard", definition: "Does not bend or scratch easily." },
    { term: "Soft", definition: "Easy to squeeze or bend." },
    { term: "Rough", definition: "Bumpy or not smooth." },
    { term: "Smooth", definition: "Even and not bumpy." },
    { term: "Property", definition: "A quality or feature of something." },
    { term: "Texture", definition: "How something feels to touch." },
  ],
  concepts: [
    {
      id: "spk-u5-material-properties",
      title: "Material properties",
      skill: "Describe materials by their properties.",
      lesson: {
        sections: [
          {
            heading: "What are materials?",
            body: "A **material** is what something is made of — wood, plastic, metal, cloth, paper. Each material has **properties**: how it feels, looks and behaves.",
          },
          {
            heading: "Describing materials",
            body: "Use words like **hard, soft, rough, smooth, heavy, light** to describe materials. A rock is **hard and rough**; a pillow is **soft and smooth**.",
          },
        ],
        keyFormulas: [
          { name: "Material properties", statement: "Hard/soft, rough/smooth, heavy/light, rough/smooth — describe what something is made of." },
        ],
        workedExample: {
          problem: "Describe the material of a wooden spoon.",
          solution: "A wooden spoon is **hard**, **rough**, and **heavy** compared to plastic.",
        },
      },
      questions: [
        {
          id: "spk-u5-material-properties-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Hard' material means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "easy to bend"
                    },
                    {
                              "id": "b",
                              "text": "does not bend or scratch easily"
                    },
                    {
                              "id": "c",
                              "text": "very light"
                    },
                    {
                              "id": "d",
                              "text": "very soft"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Hard = does not bend or scratch easily."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Hard = does not bend or scratch easily.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Does not bend**",
          "commonErrors": [
                    "Confuses hard with soft."
          ]
},
        },
        {
          id: "spk-u5-material-properties-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "A pillow is usually...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "hard and rough"
                    },
                    {
                              "id": "b",
                              "text": "soft and smooth"
                    },
                    {
                              "id": "c",
                              "text": "heavy and rough"
                    },
                    {
                              "id": "d",
                              "text": "light and hard"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Pillow = soft and smooth."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Pillow = soft and smooth.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**soft + smooth**",
          "commonErrors": [
                    "Picks wrong properties."
          ]
},
        },
        {
          id: "spk-u5-material-properties-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Describe the material of an object you can touch (wood, plastic, cloth). Use two property words.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Material properties",
                              "statement": "Use property words."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes material with 2 properties.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'The block is hard and smooth (wood/plastic).'**",
          "commonErrors": [
                    "Cannot describe.",
                    "Wrong properties."
          ]
},
        },
        {
          id: "spk-u5-material-properties-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "'Texture' means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "the color"
                    },
                    {
                              "id": "b",
                              "text": "how something feels to touch"
                    },
                    {
                              "id": "c",
                              "text": "the weight"
                    },
                    {
                              "id": "d",
                              "text": "the shape"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Texture = how something feels to touch."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Texture = how something feels to touch.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**How it feels**",
          "commonErrors": [
                    "Confuses with color."
          ]
},
        },
        {
          id: "spk-u5-material-properties-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Sort objects by material (wood, plastic, metal, cloth). For each, name two properties. Which material is best for a raincoat? Why?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Materials",
                              "statement": "Sort by material + properties."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Sorts by material.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Names properties + best for raincoat.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'Plastic is waterproof — best for raincoat.'**",
          "commonErrors": [
                    "Cannot sort.",
                    "No reasoning."
          ]
},
        },
        {
          id: "spk-u5-material-properties-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Material\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Does not bend or scratch easily."
                    },
                    {
                              "id": "b",
                              "text": "What something is made of."
                    },
                    {
                              "id": "c",
                              "text": "Easy to squeeze or bend."
                    },
                    {
                              "id": "d",
                              "text": "Bumpy or not smooth."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Material\" means What something is made of."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Material\" means What something is made of.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Material** = What something is made of.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "spk-u5-material-properties-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Hard\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Easy to squeeze or bend."
                    },
                    {
                              "id": "b",
                              "text": "Bumpy or not smooth."
                    },
                    {
                              "id": "c",
                              "text": "Even and not bumpy."
                    },
                    {
                              "id": "d",
                              "text": "Does not bend or scratch easily."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Hard\" means Does not bend or scratch easily."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Hard\" means Does not bend or scratch easily.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Hard** = Does not bend or scratch easily.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "spk-u5-material-properties-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Soft\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Bumpy or not smooth."
                    },
                    {
                              "id": "b",
                              "text": "Easy to squeeze or bend."
                    },
                    {
                              "id": "c",
                              "text": "Even and not bumpy."
                    },
                    {
                              "id": "d",
                              "text": "A quality or feature of something."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Soft\" means Easy to squeeze or bend."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Soft\" means Easy to squeeze or bend.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Soft** = Easy to squeeze or bend.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
