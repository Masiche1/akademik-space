import type { Lesson } from "../../../types.ts";

export const lesson41: Lesson = {
  id: "s1-u4-lesson-4-1",
  code: "4-1",
  title: "What Is Matter?",
  goal: "I CAN identify matter and describe its properties.",
  standards: ["1-PS1-1"],
  vocabulary: [
    { term: "Matter", definition: "Everything that takes up space." },
    { term: "Object", definition: "A thing we can touch." },
    { term: "Property", definition: "A quality of matter." },
    { term: "Hard", definition: "Firm, not easy to bend." },
    { term: "Soft", definition: "Easy to bend/squash." },
    { term: "Smooth", definition: "Not rough." },
    { term: "Rough", definition: "Not smooth." },
    { term: "Color", definition: "Red, blue, etc." },
  ],
  concepts: [
    {
      id: "s1-u4-what-is-matter",
      title: "What is matter?",
      skill: "Matter is everything that takes up space; we describe it by its properties.",
      lesson: {
        sections: [
          {
            heading: "Everything is matter",
            body: "**Matter** is anything that **takes up space** — solids, liquids, gases. We describe matter by its **properties** like color, size, shape, texture.",
          },
          {
            heading: "Observable properties",
            body: "**Properties** we can observe: is it **hard** or **soft**? **Smooth** or **rough**? What **color**? How **big** or **small**?",
          },
        ],
        keyFormulas: [
          { name: "Matter", statement: "Everything that takes up space; described by properties." },
        ],
        workedExample: {
          problem: "Is air matter? How do we know?",
          solution: "Yes — air takes up space (blow up a balloon and it fills with air).",
        },
      },
      questions: [
        {
          id: "s1-u4-what-is-matter-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Matter' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only solids"
                    },
                    {
                              "id": "b",
                              "text": "anything that takes up space"
                    },
                    {
                              "id": "c",
                              "text": "only liquids"
                    },
                    {
                              "id": "d",
                              "text": "energy only"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Matter = takes up space."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Matter = takes up space.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**takes up space**",
          "commonErrors": [
                    "Picks only one state."
          ]
},
        },
        {
          id: "s1-u4-what-is-matter-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "A 'property' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "the object's name"
                    },
                    {
                              "id": "b",
                              "text": "a quality like color, size, or texture"
                    },
                    {
                              "id": "c",
                              "text": "the price"
                    },
                    {
                              "id": "d",
                              "text": "where it is"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Property = quality of matter."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Property = quality of matter.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**a quality**",
          "commonErrors": [
                    "Confuses with name."
          ]
},
        },
        {
          id: "s1-u4-what-is-matter-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Choose an object. Describe three of its properties (color, size, texture, etc.).",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Properties",
                              "statement": "3 observable properties."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes 3 properties.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**e.g., 'Pencil: yellow, long, smooth.'**",
          "commonErrors": [
                    "Fewer than 3 properties.",
                    "Not observable."
          ]
},
        },
        {
          id: "s1-u4-what-is-matter-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is a property we can observe?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "weight in kilograms only"
                    },
                    {
                              "id": "b",
                              "text": "color"
                    },
                    {
                              "id": "c",
                              "text": "cost"
                    },
                    {
                              "id": "d",
                              "text": "origin"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Color is observable."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Color is observable.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**color**",
          "commonErrors": [
                    "Picks non-observable."
          ]
},
        },
        {
          id: "s1-u4-what-is-matter-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Sort objects by a property (color or size). Explain how you sorted them.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Properties",
                              "statement": "Sort by property + explain."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Sorts by a property.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Explains the sorting rule.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**e.g., 'Sorted by color: red things together, blue things together.'**",
          "commonErrors": [
                    "No sorting.",
                    "No explanation."
          ]
},
        },
        {
          id: "s1-u4-what-is-matter-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Matter\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A thing we can touch."
                    },
                    {
                              "id": "b",
                              "text": "Everything that takes up space."
                    },
                    {
                              "id": "c",
                              "text": "A quality of matter."
                    },
                    {
                              "id": "d",
                              "text": "Firm, not easy to bend."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Matter\" means Everything that takes up space."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Matter\" means Everything that takes up space.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Matter** = Everything that takes up space.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "s1-u4-what-is-matter-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Object\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A quality of matter."
                    },
                    {
                              "id": "b",
                              "text": "Firm, not easy to bend."
                    },
                    {
                              "id": "c",
                              "text": "Easy to bend/squash."
                    },
                    {
                              "id": "d",
                              "text": "A thing we can touch."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Object\" means A thing we can touch."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Object\" means A thing we can touch.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Object** = A thing we can touch.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "s1-u4-what-is-matter-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Property\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Firm, not easy to bend."
                    },
                    {
                              "id": "b",
                              "text": "A quality of matter."
                    },
                    {
                              "id": "c",
                              "text": "Easy to bend/squash."
                    },
                    {
                              "id": "d",
                              "text": "Not rough."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Property\" means A quality of matter."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Property\" means A quality of matter.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Property** = A quality of matter.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
