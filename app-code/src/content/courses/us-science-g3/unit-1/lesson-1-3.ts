import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "sci3-u1-lesson-1-3",
  code: "1-3",
  title: "Photosynthesis",
  goal: "I CAN explain how plants make food from sunlight.",
  standards: ["LS1.A"],
  vocabulary: [
    { term: "Photosynthesis", definition: "Plants making food." },
    { term: "Sunlight", definition: "Light energy." },
    { term: "Water", definition: "Liquid plants use." },
    { term: "Air", definition: "Gases in air." },
    { term: "Carbon dioxide", definition: "Gas plants use." },
    { term: "Oxygen", definition: "Gas plants release." },
    { term: "Food", definition: "Energy for plant." },
    { term: "Chlorophyll", definition: "Green substance in leaves." },
  ],
  concepts: [
    {
      id: "sci3-u1-photosynthesis",
      title: "Photosynthesis",
      skill: "Explain how plants use sunlight, water and air to make food.",
      lesson: {
        sections: [
          {
            heading: "How plants eat",
            body: "Plants don't eat like animals — they make their own food through **photosynthesis**. They use **sunlight**, **water**, and **carbon dioxide** from the air.",
          },
          {
            heading: "What they release",
            body: "During photosynthesis, plants release **oxygen** into the air — the same gas we need to breathe!",
          },
        ],
        keyFormulas: [
          { name: "Photosynthesis", statement: "Sunlight + water + CO2 -> food + oxygen." },
        ],
        workedExample: {
          problem: "What do plants release during photosynthesis?",
          solution: "**Oxygen** — they release it into the air.",
        },
      },
      questions: [
        {
          id: "sci3-u1-photosynthesis-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Photosynthesis is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "plants sleeping"
                    },
                    {
                              "id": "b",
                              "text": "plants making food from sunlight"
                    },
                    {
                              "id": "c",
                              "text": "plants drinking water"
                    },
                    {
                              "id": "d",
                              "text": "plants growing roots"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Photosynthesis = making food."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Photosynthesis = making food.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "plants making food from sunlight",
          "commonErrors": [
                    "Thinks it's just growing."
          ]
},
        },
        {
          id: "sci3-u1-photosynthesis-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Plants release which gas during photosynthesis?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "carbon dioxide"
                    },
                    {
                              "id": "b",
                              "text": "oxygen"
                    },
                    {
                              "id": "c",
                              "text": "nitrogen"
                    },
                    {
                              "id": "d",
                              "text": "helium"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Plants release oxygen."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Plants release oxygen.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "oxygen",
          "commonErrors": [
                    "Thinks they release CO2."
          ]
},
        },
        {
          id: "sci3-u1-photosynthesis-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Explain in your own words how plants make food.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Photosynthesis",
                              "statement": "Sunlight + water + air -> food + oxygen."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Explains process correctly.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**e.g., 'Plants use sunlight, water and air to make food, and release oxygen.'**",
          "commonErrors": [
                    "Says plants eat soil.",
                    "Cannot explain."
          ]
},
        },
        {
          id: "sci3-u1-photosynthesis-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Plants need which gas from the air for photosynthesis?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "oxygen"
                    },
                    {
                              "id": "b",
                              "text": "carbon dioxide"
                    },
                    {
                              "id": "c",
                              "text": "nitrogen"
                    },
                    {
                              "id": "d",
                              "text": "helium"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Plants use CO2."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Plants use CO2.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "carbon dioxide",
          "commonErrors": [
                    "Confuses with oxygen."
          ]
},
        },
        {
          id: "sci3-u1-photosynthesis-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Why are plants important for animals and humans? Explain using photosynthesis.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Photosynthesis",
                              "statement": "Food + oxygen = important."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Says plants make food.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Says plants release oxygen.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'Plants make food for animals and release oxygen we breathe.'**",
          "commonErrors": [
                    "Only one reason.",
                    "No connection."
          ]
},
        },
        {
          id: "sci3-u1-photosynthesis-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Photosynthesis\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Light energy."
                    },
                    {
                              "id": "b",
                              "text": "Plants making food."
                    },
                    {
                              "id": "c",
                              "text": "Liquid plants use."
                    },
                    {
                              "id": "d",
                              "text": "Gases in air."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Photosynthesis\" means Plants making food."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Photosynthesis\" means Plants making food.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Photosynthesis** = Plants making food.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci3-u1-photosynthesis-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Sunlight\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Liquid plants use."
                    },
                    {
                              "id": "b",
                              "text": "Gases in air."
                    },
                    {
                              "id": "c",
                              "text": "Gas plants use."
                    },
                    {
                              "id": "d",
                              "text": "Light energy."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Sunlight\" means Light energy."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Sunlight\" means Light energy.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Sunlight** = Light energy.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci3-u1-photosynthesis-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Water\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Gases in air."
                    },
                    {
                              "id": "b",
                              "text": "Liquid plants use."
                    },
                    {
                              "id": "c",
                              "text": "Gas plants use."
                    },
                    {
                              "id": "d",
                              "text": "Gas plants release."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Water\" means Liquid plants use."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Water\" means Liquid plants use.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Water** = Liquid plants use.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
