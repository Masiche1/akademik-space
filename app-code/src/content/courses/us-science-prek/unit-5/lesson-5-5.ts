import type { Lesson } from "../../../types.ts";

export const lesson55: Lesson = {
  id: "spk-u5-lesson-5-5",
  code: "5-5",
  title: "Materials Review",
  goal: "I CAN describe, sort, choose and test materials.",
  standards: ["ELOF-PK.SCI.MATERIAL.5"],
  vocabulary: [
    { term: "Material", definition: "What something is made of." },
    { term: "Property", definition: "Quality like hard/soft/rough/smooth." },
    { term: "Sort", definition: "Group by material or property." },
    { term: "Choose", definition: "Pick best material for job." },
    { term: "Test", definition: "Try to find properties." },
    { term: "Waterproof", definition: "Keeps water out." },
    { term: "Durable", definition: "Lasts long." },
  ],
  concepts: [
    {
      id: "spk-u5-materials-review",
      title: "Materials review",
      skill: "Combine material properties, sorting, choosing and testing.",
      lesson: {
        sections: [
          {
            heading: "All about materials",
            body: "Materials have **properties** (hard/soft, rough/smooth, waterproof/durable). You can **sort** them, **choose** the right one for a **job**, and **test** them to find out more.",
          },
          {
            heading: "Think like a scientist",
            body: "Ask: what is it made of? What are its properties? What job does it do? How can I test it? This is how engineers and scientists work.",
          },
        ],
        keyFormulas: [
          { name: "Materials", statement: "Properties + sorting + choosing + testing = understanding materials science." },
        ],
        workedExample: {
          problem: "You need a material for a kite. What properties matter? Which material?",
          solution: "Kite needs **light** and **durable** — plastic or paper works; it's light and can fly.",
        },
      },
      questions: [
        {
          id: "spk-u5-materials-review-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Materials science is about...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only rocks"
                    },
                    {
                              "id": "b",
                              "text": "understanding what things are made of and their properties"
                    },
                    {
                              "id": "c",
                              "text": "only plants"
                    },
                    {
                              "id": "d",
                              "text": "only animals"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Materials science = what things are made of + properties."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Materials science = what things are made of + properties.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Materials + properties**",
          "commonErrors": [
                    "Thinks it's only rocks."
          ]
},
        },
        {
          id: "spk-u5-materials-review-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which material is best for a raincoat?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "paper"
                    },
                    {
                              "id": "b",
                              "text": "plastic (waterproof)"
                    },
                    {
                              "id": "c",
                              "text": "wood"
                    },
                    {
                              "id": "d",
                              "text": "cloth"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Plastic is waterproof — best for raincoat."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Plastic is waterproof — best for raincoat.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Plastic**",
          "commonErrors": [
                    "Picks absorbent cloth."
          ]
},
        },
        {
          id: "spk-u5-materials-review-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Choose a material for a lunchbox. What properties matter? Why is your choice good?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Material for job",
                              "statement": "Properties + reasoning."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Chooses material + properties + reason.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'Plastic — lightweight, durable, easy to clean.'**",
          "commonErrors": [
                    "No reasoning.",
                    "Poor choice."
          ]
},
        },
        {
          id: "spk-u5-materials-review-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "To find out if a material is durable, you might...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "look at its color"
                    },
                    {
                              "id": "b",
                              "text": "drop it or bend it repeatedly"
                    },
                    {
                              "id": "c",
                              "text": "smell it"
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
                              "statement": "Drop/bend repeatedly tests durability."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Drop/bend repeatedly tests durability.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Drop/bend repeatedly**",
          "commonErrors": [
                    "Picks non-test."
          ]
},
        },
        {
          id: "spk-u5-materials-review-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Design a simple object (boat, bridge, container). Choose materials for each part, name the needed properties, and explain your choices.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Materials design",
                              "statement": "Choose materials + properties."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Designs object with materials.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Explains property choices.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'Boat: plastic bottom (waterproof), wood sides (durable).'**",
          "commonErrors": [
                    "No materials chosen.",
                    "No property reasoning."
          ]
},
        },
        {
          id: "spk-u5-materials-review-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Material\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Quality like hard/soft/rough/smooth."
                    },
                    {
                              "id": "b",
                              "text": "What something is made of."
                    },
                    {
                              "id": "c",
                              "text": "Group by material or property."
                    },
                    {
                              "id": "d",
                              "text": "Pick best material for job."
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
          id: "spk-u5-materials-review-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Property\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Group by material or property."
                    },
                    {
                              "id": "b",
                              "text": "Pick best material for job."
                    },
                    {
                              "id": "c",
                              "text": "Try to find properties."
                    },
                    {
                              "id": "d",
                              "text": "Quality like hard/soft/rough/smooth."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Property\" means Quality like hard/soft/rough/smooth."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Property\" means Quality like hard/soft/rough/smooth.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Property** = Quality like hard/soft/rough/smooth.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "spk-u5-materials-review-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Sort\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Pick best material for job."
                    },
                    {
                              "id": "b",
                              "text": "Group by material or property."
                    },
                    {
                              "id": "c",
                              "text": "Try to find properties."
                    },
                    {
                              "id": "d",
                              "text": "Keeps water out."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Sort\" means Group by material or property."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Sort\" means Group by material or property.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Sort** = Group by material or property.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
