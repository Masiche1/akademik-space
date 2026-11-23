import type { Lesson } from "../../../types.ts";

export const lesson25: Lesson = {
  id: "sci3-u2-lesson-2-5",
  code: "2-5",
  title: "Animals Review",
  goal: "I CAN describe animal needs, groups, habitats and traits.",
  standards: ["LS1.A", "LS1.B"],
  vocabulary: [
    { term: "Need", definition: "Something required." },
    { term: "Food", definition: "Energy source." },
    { term: "Water", definition: "Liquid for life." },
    { term: "Shelter", definition: "Safe place." },
    { term: "Air", definition: "To breathe." },
    { term: "Group", definition: "Mammal/bird/etc." },
    { term: "Habitat", definition: "Where it lives." },
    { term: "Trait", definition: "Feature of animal." },
  ],
  concepts: [
    {
      id: "sci3-u2-animals-review",
      title: "Animals review",
      skill: "Combine animal needs, groups, habitats and traits.",
      lesson: {
        sections: [
          {
            heading: "All animal knowledge",
            body: "Animals need **food, water, shelter and air**. They come in **groups** (mammals, birds, reptiles, amphibians, fish, insects). They live in **habitats** and have **traits** that help them survive.",
          },
          {
            heading: "Put it together",
            body: "Describe an animal's needs, group, habitat and traits.",
          },
        ],
        keyFormulas: [
          { name: "Animals", statement: "Needs + groups + habitats + traits = complete animal knowledge." },
        ],
        workedExample: {
          problem: "Describe an animal: what it needs, its group, habitat, and a trait.",
          solution: "Needs: food/water/shelter/air. Group: mammal. Habitat: forest. Trait: fur for warmth.",
        },
      },
      questions: [
        {
          id: "sci3-u2-animals-review-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Animal knowledge includes...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only needs"
                    },
                    {
                              "id": "b",
                              "text": "needs, groups, habitats, traits"
                    },
                    {
                              "id": "c",
                              "text": "only groups"
                    },
                    {
                              "id": "d",
                              "text": "only habitats"
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
          "finalAnswer": "needs, groups, habitats, traits",
          "commonErrors": [
                    "Lists one skill."
          ]
},
        },
        {
          id: "sci3-u2-animals-review-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Describe an animal: name two needs, its group, habitat, and one trait.",
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
                                                  "All animal",
                                                  "Needs + group + habitat + trait."
                                        ]
                              ]
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        [
                                                  "skill",
                                                  "All animal",
                                                  "Needs + group + habitat + trait."
                                        ]
                              ],
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": [
                    {
                              "reasoning": "Names all parts.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "commonErrors": [
                    "**e.g., 'Needs: food/water. Group: mammal. Habitat: forest. Trait: fur.'**"
          ]
},
        },
        {
          id: "sci3-u2-animals-review-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Animals are important because they...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only look cute"
                    },
                    {
                              "id": "b",
                              "text": "are part of ecosystems"
                    },
                    {
                              "id": "c",
                              "text": "make noise"
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
                              "statement": "Animals are part of ecosystems."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Animals are part of ecosystems.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "are part of ecosystems",
          "commonErrors": [
                    "Thinks animals are useless."
          ]
},
        },
        {
          id: "sci3-u2-animals-review-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Need\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Energy source."
                    },
                    {
                              "id": "b",
                              "text": "Something required."
                    },
                    {
                              "id": "c",
                              "text": "Liquid for life."
                    },
                    {
                              "id": "d",
                              "text": "Safe place."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Need\" means Something required."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Need\" means Something required.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Need** = Something required.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci3-u2-animals-review-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Food\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Liquid for life."
                    },
                    {
                              "id": "b",
                              "text": "Safe place."
                    },
                    {
                              "id": "c",
                              "text": "To breathe."
                    },
                    {
                              "id": "d",
                              "text": "Energy source."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Food\" means Energy source."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Food\" means Energy source.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Food** = Energy source.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci3-u2-animals-review-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Water\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Safe place."
                    },
                    {
                              "id": "b",
                              "text": "Liquid for life."
                    },
                    {
                              "id": "c",
                              "text": "To breathe."
                    },
                    {
                              "id": "d",
                              "text": "Mammal/bird/etc."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Water\" means Liquid for life."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Water\" means Liquid for life.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Water** = Liquid for life.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci3-u2-animals-review-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Shelter\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "To breathe."
                    },
                    {
                              "id": "b",
                              "text": "Mammal/bird/etc."
                    },
                    {
                              "id": "c",
                              "text": "Where it lives."
                    },
                    {
                              "id": "d",
                              "text": "Safe place."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Shelter\" means Safe place."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Shelter\" means Safe place.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Shelter** = Safe place.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci3-u2-animals-review-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Air\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Mammal/bird/etc."
                    },
                    {
                              "id": "b",
                              "text": "To breathe."
                    },
                    {
                              "id": "c",
                              "text": "Where it lives."
                    },
                    {
                              "id": "d",
                              "text": "Feature of animal."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Air\" means To breathe."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Air\" means To breathe.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Air** = To breathe.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
