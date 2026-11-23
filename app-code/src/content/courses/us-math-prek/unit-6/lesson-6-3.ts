import type { Lesson } from "../../../types.ts";

export const lesson63: Lesson = {
  id: "mpk-u6-lesson-6-3",
  code: "6-3",
  title: "Sort by Attributes",
  goal: "I CAN sort objects by color, shape, size and type.",
  standards: ["ELOF-PK.MATH.SORT.1"],
  vocabulary: [
    { term: "Attribute", definition: "A feature like color, shape or size." },
    { term: "Color sort", definition: "Group by color." },
    { term: "Shape sort", definition: "Group by shape." },
    { term: "Size sort", definition: "Group by big/small." },
    { term: "Type sort", definition: "Group by what kind of thing it is." },
  ],
  concepts: [
    {
      id: "mpk-u6-sort-attributes",
      title: "Sorting by attributes",
      skill: "Sort the same collection by different attributes.",
      lesson: {
        sections: [
          {
            heading: "Different sorts",
            body: "The same blocks can be sorted by **color** (reds together), **shape** (squares together), **size** (big together) or **type** (animals together). Each sort uses one attribute.",
          },
          {
            heading: "Re-sort",
            body: "Try sorting the same objects two ways: first by color, then by shape. The groups change but the objects stay the same.",
          },
        ],
        keyFormulas: [
          { name: "Sort", statement: "Pick ONE attribute; group objects sharing it." },
        ],
        workedExample: {
          problem: "Sort by color: red, blue, red, blue, red.",
          solution: "Red group: 3, Blue group: 2. **3 red, 2 blue.**",
        },
      },
      questions: [
        {
          id: "mpk-u6-sort-attributes-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Sort by shape: triangle, circle, triangle, circle, triangle. Which group has triangles?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Positions 1, 3, 5"
                    },
                    {
                              "id": "b",
                              "text": "Positions 2, 4"
                    },
                    {
                              "id": "c",
                              "text": "All of them"
                    },
                    {
                              "id": "d",
                              "text": "None"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Triangles at positions 1, 3, 5."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Triangles at positions 1, 3, 5.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Positions 1, 3, 5**",
          "commonErrors": [
                    "Cannot track positions."
          ]
},
        },
        {
          id: "mpk-u6-sort-attributes-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Sorting by color means grouping objects that...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "are the same shape"
                    },
                    {
                              "id": "b",
                              "text": "are the same color"
                    },
                    {
                              "id": "c",
                              "text": "are the same size"
                    },
                    {
                              "id": "d",
                              "text": "are the same type"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Color sort groups by color."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Color sort groups by color.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Same color**",
          "commonErrors": [
                    "Confuses attributes."
          ]
},
        },
        {
          id: "mpk-u6-sort-attributes-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Sort by size: big, small, big, small, big. How many big objects?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Big",
                              "answer": 3
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Count big: positions 1,3,5 = 3."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Count big: positions 1,3,5 = 3.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$3$",
          "commonErrors": [
                    "Counts all objects."
          ]
},
        },
        {
          id: "mpk-u6-sort-attributes-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "You sorted blocks by color, then by shape. What changed?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The blocks themselves"
                    },
                    {
                              "id": "b",
                              "text": "The groups they are in"
                    },
                    {
                              "id": "c",
                              "text": "Nothing"
                    },
                    {
                              "id": "d",
                              "text": "The colors"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Same blocks, different grouping rule."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Same blocks, different grouping rule.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**The groups**",
          "commonErrors": [
                    "Thinks sorting changes the objects."
          ]
},
        },
        {
          id: "mpk-u6-sort-attributes-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Take 6 objects. Sort them by color, then re-sort by shape. Describe what stayed the same and what changed.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Two sorts",
                              "statement": "Same objects, different attribute each time."
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        {
                                                  "reasoning": "Objects stayed the same; groups changed.",
                                                  "marks": 1,
                                                  "markCode": "M"
                                        },
                                        {
                                                  "reasoning": "Correctly describes both sorts.",
                                                  "marks": 1,
                                                  "markCode": "A"
                                        }
                              ],
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "**Objects same; groups differ by attribute**",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": [
                    "Thinks objects change when re-sorted.",
                    "Only does one sort."
          ]
},
        },
        {
          id: "mpk-u6-sort-attributes-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Attribute\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Group by color."
                    },
                    {
                              "id": "b",
                              "text": "A feature like color, shape or size."
                    },
                    {
                              "id": "c",
                              "text": "Group by shape."
                    },
                    {
                              "id": "d",
                              "text": "Group by big/small."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Attribute\" means A feature like color, shape or size."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Attribute\" means A feature like color, shape or size.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Attribute** = A feature like color, shape or size.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "mpk-u6-sort-attributes-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Color sort\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Group by shape."
                    },
                    {
                              "id": "b",
                              "text": "Group by big/small."
                    },
                    {
                              "id": "c",
                              "text": "Group by what kind of thing it is."
                    },
                    {
                              "id": "d",
                              "text": "Group by color."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Color sort\" means Group by color."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Color sort\" means Group by color.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Color sort** = Group by color.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "mpk-u6-sort-attributes-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Shape sort\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Group by big/small."
                    },
                    {
                              "id": "b",
                              "text": "Group by shape."
                    },
                    {
                              "id": "c",
                              "text": "Group by what kind of thing it is."
                    },
                    {
                              "id": "d",
                              "text": "A feature like color, shape or size."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Shape sort\" means Group by shape."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Shape sort\" means Group by shape.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Shape sort** = Group by shape.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
