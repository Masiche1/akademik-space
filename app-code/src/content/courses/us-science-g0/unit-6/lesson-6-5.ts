import type { Lesson } from "../../../types.ts";

export const lesson65: Lesson = {
  id: "s0-u6-lesson-6-5",
  code: "6-5",
  title: "Animals Review",
  goal: "I CAN describe animal needs, body parts, movement and groups.",
  standards: ["K-LS1-1", "K-PS2-1"],
  vocabulary: [
    { term: "Animal", definition: "Living thing that moves/eats." },
    { term: "Need", definition: "Food/water/shelter/air." },
    { term: "Body part", definition: "Leg, wing, eye, etc." },
    { term: "Move", definition: "Walk, fly, swim, etc." },
    { term: "Group", definition: "Mammal, bird, etc." },
    { term: "Feature", definition: "What it's like." },
    { term: "Sort", definition: "Put into groups." },
    { term: "Live", definition: "Be alive." },
  ],
  concepts: [
    {
      id: "s0-u6-animals-review",
      title: "Animals review",
      skill: "Combine needs, body parts, movement and groups.",
      lesson: {
        sections: [
          {
            heading: "All about animals",
            body: "Animals **need** food, water, shelter and air. They have **body parts** (legs, wings, eyes) for different jobs, **move** in different ways (walk, fly, swim), and belong to **groups** (mammals, birds, reptiles, fish, insects).",
          },
          {
            heading: "Put it together",
            body: "Describe an animal's needs, body parts, movement and group.",
          },
        ],
        keyFormulas: [
          { name: "Animals", statement: "Needs + body parts + movement + groups = understanding animals." },
        ],
        workedExample: {
          problem: "Describe a bird fully: needs, body parts, movement, group.",
          solution: "Needs: food/water/shelter/air; Parts: wings, beak, feathers; Moves: flies; Group: bird.",
        },
      },
      questions: [
        {
          id: "s0-u6-animals-review-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Animal skills include...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only naming"
                    },
                    {
                              "id": "b",
                              "text": "needs, body parts, movement, groups"
                    },
                    {
                              "id": "c",
                              "text": "only eating"
                    },
                    {
                              "id": "d",
                              "text": "only walking"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "All animal skills."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "All animal skills.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**all animal skills**",
          "commonErrors": [
                    "Lists one skill."
          ]
},
        },
        {
          id: "s0-u6-animals-review-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Choose an animal. Describe: what it needs, two body parts and their jobs, how it moves, and what group it belongs to.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": [
                                        [
                                                  "skill",
                                                  "All animals",
                                                  "Needs + parts + movement + group."
                                        ]
                              ]
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        [
                                                  "skill",
                                                  "All animals",
                                                  "Needs + parts + movement + group."
                                        ]
                              ],
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": [
                    {
                              "reasoning": "Describes all aspects.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "commonErrors": [
                    "**e.g., 'Fish: needs water/food; fins swim, gills breathe; group: fish.'**"
          ]
},
        },
        {
          id: "s0-u6-animals-review-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A mammal is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a bird"
                    },
                    {
                              "id": "b",
                              "text": "an animal with fur/hair that drinks milk"
                    },
                    {
                              "id": "c",
                              "text": "a fish"
                    },
                    {
                              "id": "d",
                              "text": "an insect"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Mammal = fur + milk."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Mammal = fur + milk.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**fur + milk**",
          "commonErrors": [
                    "Picks wrong group."
          ]
},
        },
        {
          id: "s0-u6-animals-review-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Animal\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Food/water/shelter/air."
                    },
                    {
                              "id": "b",
                              "text": "Living thing that moves/eats."
                    },
                    {
                              "id": "c",
                              "text": "Leg, wing, eye, etc."
                    },
                    {
                              "id": "d",
                              "text": "Walk, fly, swim, etc."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Animal\" means Living thing that moves/eats."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Animal\" means Living thing that moves/eats.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Animal** = Living thing that moves/eats.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "s0-u6-animals-review-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Need\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Leg, wing, eye, etc."
                    },
                    {
                              "id": "b",
                              "text": "Walk, fly, swim, etc."
                    },
                    {
                              "id": "c",
                              "text": "Mammal, bird, etc."
                    },
                    {
                              "id": "d",
                              "text": "Food/water/shelter/air."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Need\" means Food/water/shelter/air."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Need\" means Food/water/shelter/air.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Need** = Food/water/shelter/air.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "s0-u6-animals-review-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Body part\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Walk, fly, swim, etc."
                    },
                    {
                              "id": "b",
                              "text": "Leg, wing, eye, etc."
                    },
                    {
                              "id": "c",
                              "text": "Mammal, bird, etc."
                    },
                    {
                              "id": "d",
                              "text": "What it's like."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Body part\" means Leg, wing, eye, etc."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Body part\" means Leg, wing, eye, etc.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Body part** = Leg, wing, eye, etc.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "s0-u6-animals-review-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Move\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Mammal, bird, etc."
                    },
                    {
                              "id": "b",
                              "text": "What it's like."
                    },
                    {
                              "id": "c",
                              "text": "Put into groups."
                    },
                    {
                              "id": "d",
                              "text": "Walk, fly, swim, etc."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Move\" means Walk, fly, swim, etc."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Move\" means Walk, fly, swim, etc.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Move** = Walk, fly, swim, etc.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "s0-u6-animals-review-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Group\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "What it's like."
                    },
                    {
                              "id": "b",
                              "text": "Mammal, bird, etc."
                    },
                    {
                              "id": "c",
                              "text": "Put into groups."
                    },
                    {
                              "id": "d",
                              "text": "Be alive."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Group\" means Mammal, bird, etc."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Group\" means Mammal, bird, etc.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Group** = Mammal, bird, etc.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
