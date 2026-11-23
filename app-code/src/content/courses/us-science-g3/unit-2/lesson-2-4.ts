import type { Lesson } from "../../../types.ts";

export const lesson24: Lesson = {
  id: "sci3-u2-lesson-2-4",
  code: "2-4",
  title: "Animal Traits",
  goal: "I CAN describe animal traits and how they help survival.",
  standards: ["LS1.A", "LS1.B"],
  vocabulary: [
    { term: "Trait", definition: "A feature of an animal." },
    { term: "Adaptation", definition: "Feature for survival." },
    { term: "Fur", definition: "Covers body for warmth." },
    { term: "Feathers", definition: "For flight/warmth." },
    { term: "Scales", definition: "Protective covering." },
    { term: "Claws", definition: "For catching prey." },
    { term: "Camouflage", definition: "Blending in." },
    { term: "Speed", definition: "How fast moves." },
  ],
  concepts: [
    {
      id: "sci3-u2-animal-traits",
      title: "Animal traits",
      skill: "Describe animal traits (fur, feathers, scales, claws) and how they help survival.",
      lesson: {
        sections: [
          {
            heading: "Traits help survival",
            body: "Animals have **traits** (features) that help them survive — **fur** for warmth, **feathers** for flight, **scales** for protection, **claws** for catching prey.",
          },
          {
            heading: "Camouflage",
            body: "Some animals use **camouflage** to blend in — chameleons change color, rabbits have brown fur in fall.",
          },
        ],
        keyFormulas: [
          { name: "Traits", statement: "Fur + feathers + scales + claws + camouflage = survival features." },
        ],
        workedExample: {
          problem: "Why do polar bears have thick fur?",
          solution: "Thick fur keeps them **warm** in the cold arctic — it's an adaptation.",
        },
      },
      questions: [
        {
          id: "sci3-u2-animal-traits-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'trait' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a food"
                    },
                    {
                              "id": "b",
                              "text": "a feature of an animal"
                    },
                    {
                              "id": "c",
                              "text": "a habitat"
                    },
                    {
                              "id": "d",
                              "text": "a toy"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Trait = feature of animal."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Trait = feature of animal.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "a feature of an animal",
          "commonErrors": [
                    "Thinks it's a habitat."
          ]
},
        },
        {
          id: "sci3-u2-animal-traits-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which trait helps birds fly?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "scales"
                    },
                    {
                              "id": "b",
                              "text": "feathers"
                    },
                    {
                              "id": "c",
                              "text": "fur"
                    },
                    {
                              "id": "d",
                              "text": "claws"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Feathers help birds fly."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Feathers help birds fly.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "feathers",
          "commonErrors": [
                    "Thinks scales help fly."
          ]
},
        },
        {
          id: "sci3-u2-animal-traits-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Name two animal traits and explain how each helps survival.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Animal traits",
                              "statement": "2 traits + survival uses."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Names 2 traits + uses.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**e.g., 'Fur keeps warm; claws catch prey.'**",
          "commonErrors": [
                    "Cannot name traits.",
                    "No survival uses."
          ]
},
        },
        {
          id: "sci3-u2-animal-traits-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Camouflage' means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "being loud"
                    },
                    {
                              "id": "b",
                              "text": "blending in with surroundings"
                    },
                    {
                              "id": "c",
                              "text": "being fast"
                    },
                    {
                              "id": "d",
                              "text": "having big eyes"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Camouflage = blending in."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Camouflage = blending in.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "blending in with surroundings",
          "commonErrors": [
                    "Thinks it's about speed."
          ]
},
        },
        {
          id: "sci3-u2-animal-traits-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Describe how two animal traits help survival. Give an example animal for each.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Animal traits",
                              "statement": "2 traits + examples."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes 2 traits.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Gives example animals.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'Fur: polar bear stays warm. Camouflage: chameleon hides.'**",
          "commonErrors": [
                    "Cannot describe traits.",
                    "No examples."
          ]
},
        },
        {
          id: "sci3-u2-animal-traits-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Trait\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Feature for survival."
                    },
                    {
                              "id": "b",
                              "text": "A feature of an animal."
                    },
                    {
                              "id": "c",
                              "text": "Covers body for warmth."
                    },
                    {
                              "id": "d",
                              "text": "For flight/warmth."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Trait\" means A feature of an animal."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Trait\" means A feature of an animal.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Trait** = A feature of an animal.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci3-u2-animal-traits-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Adaptation\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Covers body for warmth."
                    },
                    {
                              "id": "b",
                              "text": "For flight/warmth."
                    },
                    {
                              "id": "c",
                              "text": "Protective covering."
                    },
                    {
                              "id": "d",
                              "text": "Feature for survival."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Adaptation\" means Feature for survival."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Adaptation\" means Feature for survival.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Adaptation** = Feature for survival.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci3-u2-animal-traits-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Fur\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "For flight/warmth."
                    },
                    {
                              "id": "b",
                              "text": "Covers body for warmth."
                    },
                    {
                              "id": "c",
                              "text": "Protective covering."
                    },
                    {
                              "id": "d",
                              "text": "For catching prey."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Fur\" means Covers body for warmth."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Fur\" means Covers body for warmth.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Fur** = Covers body for warmth.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
