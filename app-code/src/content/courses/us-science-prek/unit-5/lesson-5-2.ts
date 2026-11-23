import type { Lesson } from "../../../types.ts";

export const lesson52: Lesson = {
  id: "spk-u5-lesson-5-2",
  code: "5-2",
  title: "Sort Materials",
  goal: "I CAN sort objects by their material and properties.",
  standards: ["ELOF-PK.SCI.MATERIAL.2"],
  vocabulary: [
    { term: "Sort", definition: "Group by a rule." },
    { term: "Material", definition: "What something is made of." },
    { term: "Wood", definition: "Hard material from trees." },
    { term: "Plastic", definition: "Light, bendable material." },
    { term: "Metal", definition: "Hard, shiny material." },
    { term: "Cloth", definition: "Soft, flexible material." },
    { term: "Paper", definition: "Thin, flat material for writing." },
  ],
  concepts: [
    {
      id: "spk-u5-sort-materials",
      title: "Sort materials",
      skill: "Sort objects into groups by material and properties.",
      lesson: {
        sections: [
          {
            heading: "Materials have names",
            body: "Objects are made of **materials**: **wood** (trees), **plastic** (light, bendable), **metal** (hard, shiny), **cloth** (soft, flexible), **paper** (thin, for writing).",
          },
          {
            heading: "Sort by material or property",
            body: "You can sort by **material** (all wood together) or by **property** (all hard things together). Both are useful ways to organize.",
          },
        ],
        keyFormulas: [
          { name: "Sort materials", statement: "Group by material (wood/plastic/metal/cloth/paper) or property (hard/soft/rough/smooth)." },
        ],
        workedExample: {
          problem: "Sort: wooden block, plastic cup, metal spoon, cloth sock. Rule: material.",
          solution: "Wood: block. Plastic: cup. Metal: spoon. Cloth: sock — **sorted by material**.",
        },
      },
      questions: [
        {
          id: "spk-u5-sort-materials-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which material comes from trees?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "plastic"
                    },
                    {
                              "id": "b",
                              "text": "wood"
                    },
                    {
                              "id": "c",
                              "text": "metal"
                    },
                    {
                              "id": "d",
                              "text": "glass"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Wood comes from trees."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Wood comes from trees.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**wood**",
          "commonErrors": [
                    "Picks wrong material."
          ]
},
        },
        {
          id: "spk-u5-sort-materials-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "If you sort 'by material', a wooden spoon and a wooden block go...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "in different groups"
                    },
                    {
                              "id": "b",
                              "text": "together in the wood group"
                    },
                    {
                              "id": "c",
                              "text": "nowhere"
                    },
                    {
                              "id": "d",
                              "text": "with metal"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Same material = same group."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Same material = same group.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Together in wood**",
          "commonErrors": [
                    "Separates same material."
          ]
},
        },
        {
          id: "spk-u5-sort-materials-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Sort three objects by material. Name the material and one property of each.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Sort materials",
                              "statement": "Group by material + property."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Sorts 3 objects + properties.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'Wood block (hard), plastic cup (light), metal spoon (shiny).'**",
          "commonErrors": [
                    "Cannot sort.",
                    "No properties."
          ]
},
        },
        {
          id: "spk-u5-sort-materials-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "Metal is usually...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "soft and bendable"
                    },
                    {
                              "id": "b",
                              "text": "hard and shiny"
                    },
                    {
                              "id": "c",
                              "text": "light and flimsy"
                    },
                    {
                              "id": "d",
                              "text": "rough and dull"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Metal is typically hard and shiny."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Metal is typically hard and shiny.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**hard + shiny**",
          "commonErrors": [
                    "Picks wrong properties."
          ]
},
        },
        {
          id: "spk-u5-sort-materials-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Sort a pile of objects into material groups. Count each group. Which material is most common? Explain.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Sort materials",
                              "statement": "Group, count, analyze."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Sorts into groups.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Counts + explains most common.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'Plastic=5, wood=3, metal=2; plastic most common because toys are plastic.'**",
          "commonErrors": [
                    "Cannot sort.",
                    "No analysis."
          ]
},
        },
        {
          id: "spk-u5-sort-materials-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Sort\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "What something is made of."
                    },
                    {
                              "id": "b",
                              "text": "Group by a rule."
                    },
                    {
                              "id": "c",
                              "text": "Hard material from trees."
                    },
                    {
                              "id": "d",
                              "text": "Light, bendable material."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Sort\" means Group by a rule."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Sort\" means Group by a rule.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Sort** = Group by a rule.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "spk-u5-sort-materials-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Material\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Hard material from trees."
                    },
                    {
                              "id": "b",
                              "text": "Light, bendable material."
                    },
                    {
                              "id": "c",
                              "text": "Hard, shiny material."
                    },
                    {
                              "id": "d",
                              "text": "What something is made of."
                    }
          ],
          "correctChoiceId": "d"
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
          id: "spk-u5-sort-materials-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Wood\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Light, bendable material."
                    },
                    {
                              "id": "b",
                              "text": "Hard material from trees."
                    },
                    {
                              "id": "c",
                              "text": "Hard, shiny material."
                    },
                    {
                              "id": "d",
                              "text": "Soft, flexible material."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Wood\" means Hard material from trees."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Wood\" means Hard material from trees.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Wood** = Hard material from trees.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
