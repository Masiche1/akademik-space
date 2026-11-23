import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "spk-u3-lesson-3-1",
  code: "3-1",
  title: "Living Things",
  goal: "I CAN tell the difference between living and non-living things.",
  standards: ["ELOF-PK.SCI.LIFE.1"],
  vocabulary: [
    { term: "Living", definition: "Something that is alive." },
    { term: "Non-living", definition: "Something that is not alive." },
    { term: "Grow", definition: "Get bigger over time." },
    { term: "Reproduce", definition: "Make more of itself." },
    { term: "Need", definition: "Require food, water or air to live." },
    { term: "Alive", definition: "Living; can grow and change." },
  ],
  concepts: [
    {
      id: "spk-u3-living-things",
      title: "Living vs non-living",
      skill: "Distinguish living things from non-living things.",
      lesson: {
        sections: [
          {
            heading: "What is living?",
            body: "**Living things** can **grow**, **reproduce** (make more of themselves), and they **need** food, water and air. A dog, a tree, a fish are living.",
          },
          {
            heading: "Non-living things",
            body: "**Non-living things** do not grow or reproduce: a rock, a chair, a pencil, a toy car. They may move or change, but they are not alive.",
          },
        ],
        keyFormulas: [
          { name: "Living", statement: "Grows + reproduces + needs food/water/air = living thing." },
        ],
        workedExample: {
          problem: "Is a seed living or non-living?",
          solution: "A seed is **living** — it can grow into a plant and needs water and soil to do so.",
        },
      },
      questions: [
        {
          id: "spk-u3-living-things-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is a LIVING thing?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "rock"
                    },
                    {
                              "id": "b",
                              "text": "dog"
                    },
                    {
                              "id": "c",
                              "text": "pencil"
                    },
                    {
                              "id": "d",
                              "text": "chair"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "A dog is living — it grows, reproduces and needs food/water."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "A dog is living — it grows, reproduces and needs food/water.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**dog**",
          "commonErrors": [
                    "Picks non-living."
          ]
},
        },
        {
          id: "spk-u3-living-things-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is a NON-LIVING thing?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "tree"
                    },
                    {
                              "id": "b",
                              "text": "cat"
                    },
                    {
                              "id": "c",
                              "text": "rock"
                    },
                    {
                              "id": "d",
                              "text": "bird"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "A rock is non-living — it does not grow or reproduce."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "A rock is non-living — it does not grow or reproduce.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**rock**",
          "commonErrors": [
                    "Picks living thing."
          ]
},
        },
        {
          id: "spk-u3-living-things-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Name one living thing and one non-living thing. How do you know the difference?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Living vs non-living",
                              "statement": "Living grows/reproduces/needs; non-living does not."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Names living + non-living correctly.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'Flower (living — grows) vs rock (non-living).'**",
          "commonErrors": [
                    "Both same category.",
                    "Cannot explain."
          ]
},
        },
        {
          id: "spk-u3-living-things-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "All living things need...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only sunlight"
                    },
                    {
                              "id": "b",
                              "text": "food, water and air"
                    },
                    {
                              "id": "c",
                              "text": "only toys"
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
                              "statement": "Living things need food, water and air to survive."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Living things need food, water and air to survive.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Food, water, air**",
          "commonErrors": [
                    "Thinks living things need nothing."
          ]
},
        },
        {
          id: "spk-u3-living-things-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Sort these into living and non-living: dog, tree, car, flower, book, fish. Then explain your rule.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Living vs non-living",
                              "statement": "Sort by growth/reproduction/needs."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Sorts all 6 correctly.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Explains the rule.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'Living: dog, tree, flower, fish — they grow and need food. Non-living: car, book.'**",
          "commonErrors": [
                    "Sorting errors.",
                    "Cannot explain rule."
          ]
},
        },
        {
          id: "spk-u3-living-things-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Living\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Something that is not alive."
                    },
                    {
                              "id": "b",
                              "text": "Something that is alive."
                    },
                    {
                              "id": "c",
                              "text": "Get bigger over time."
                    },
                    {
                              "id": "d",
                              "text": "Make more of itself."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Living\" means Something that is alive."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Living\" means Something that is alive.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Living** = Something that is alive.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "spk-u3-living-things-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Non-living\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Get bigger over time."
                    },
                    {
                              "id": "b",
                              "text": "Make more of itself."
                    },
                    {
                              "id": "c",
                              "text": "Require food, water or air to live."
                    },
                    {
                              "id": "d",
                              "text": "Something that is not alive."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Non-living\" means Something that is not alive."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Non-living\" means Something that is not alive.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Non-living** = Something that is not alive.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "spk-u3-living-things-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Grow\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Make more of itself."
                    },
                    {
                              "id": "b",
                              "text": "Get bigger over time."
                    },
                    {
                              "id": "c",
                              "text": "Require food, water or air to live."
                    },
                    {
                              "id": "d",
                              "text": "Living; can grow and change."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Grow\" means Get bigger over time."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Grow\" means Get bigger over time.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Grow** = Get bigger over time.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
