import type { Lesson } from "../../../types.ts";

export const lesson43: Lesson = {
  id: "mpk-u4-lesson-4-3",
  code: "4-3",
  title: "Sort and Classify",
  goal: "I CAN sort objects into groups by a property.",
  standards: ["ELOF-PK.MATH.DATA.1"],
  vocabulary: [
    { term: "Sort", definition: "Group objects that are alike." },
    { term: "Classify", definition: "Put things into categories." },
    { term: "Group", definition: "A set of objects that share a feature." },
    { term: "Alike", definition: "Sharing the same feature." },
    { term: "Category", definition: "A named group like 'red things' or 'round things'." },
  ],
  concepts: [
    {
      id: "mpk-u4-sort-classify",
      title: "Sorting and classifying",
      skill: "Sort objects by color, shape, size or type.",
      lesson: {
        sections: [
          {
            heading: "Choose a rule",
            body: "Pick one feature to sort by: **color**, **shape**, **size**, or **type**. All red blocks go together; all round blocks go together.",
          },
          {
            heading: "Count each group",
            body: "After sorting, count how many are in each group. '3 red, 2 blue' is data about your collection.",
          },
        ],
        keyFormulas: [
          { name: "Sorting", statement: "Choose one rule (color/shape/size/type); group objects that share it." },
        ],
        workedExample: {
          problem: "Sort: 3 red, 2 blue, 1 green. How many red? How many blue?",
          solution: "Red: 3, Blue: 2. **3 red, 2 blue.**",
        },
      },
      questions: [
        {
          id: "mpk-u4-sort-classify-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "You sort blocks by color. Where does a blue block go?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "With the red blocks"
                    },
                    {
                              "id": "b",
                              "text": "With the blue blocks"
                    },
                    {
                              "id": "c",
                              "text": "With the round blocks"
                    },
                    {
                              "id": "d",
                              "text": "Anywhere"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Sort by color: blue goes with blue."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Sort by color: blue goes with blue.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**With blue**",
          "commonErrors": [
                    "Mixes colors together."
          ]
},
        },
        {
          id: "mpk-u4-sort-classify-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is a way to sort these shapes? triangle, circle, triangle, circle",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "By color"
                    },
                    {
                              "id": "b",
                              "text": "By shape"
                    },
                    {
                              "id": "c",
                              "text": "By name only"
                    },
                    {
                              "id": "d",
                              "text": "Randomly"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Triangles together, circles together — sorting by shape."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Triangles together, circles together — sorting by shape.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**By shape**",
          "commonErrors": [
                    "Cannot see shape differences."
          ]
},
        },
        {
          id: "mpk-u4-sort-classify-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Sort: 4 red blocks, 2 blue blocks. How many blocks total?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Total",
                              "answer": 6
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "4 + 2 = 6."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "4 + 2 = 6.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$6$",
          "commonErrors": [
                    "Counts only one color."
          ]
},
        },
        {
          id: "mpk-u4-sort-classify-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "After sorting by size, the 'big' group has...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "small objects"
                    },
                    {
                              "id": "b",
                              "text": "big objects"
                    },
                    {
                              "id": "c",
                              "text": "mixed objects"
                    },
                    {
                              "id": "d",
                              "text": "no objects"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Each group holds objects sharing the sort feature."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Each group holds objects sharing the sort feature.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Big objects**",
          "commonErrors": [
                    "Thinks groups mix sizes."
          ]
},
        },
        {
          id: "mpk-u4-sort-classify-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "You have buttons in red, blue and green. Explain how you would sort them and what you would count.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Choose a rule",
                              "statement": "Sort by color: red, blue, green groups."
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        {
                                                  "reasoning": "Make one group per color.",
                                                  "marks": 1,
                                                  "markCode": "M"
                                        },
                                        {
                                                  "reasoning": "Count each group: e.g., 3 red, 2 blue, 4 green.",
                                                  "marks": 1,
                                                  "markCode": "A"
                                        }
                              ],
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "**Sort by color into 3 groups, then count each group.**",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": [
                    "Sorts by two rules at once.",
                    "Does not count the groups."
          ]
},
        },
        {
          id: "mpk-u4-sort-classify-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Sort\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Put things into categories."
                    },
                    {
                              "id": "b",
                              "text": "Group objects that are alike."
                    },
                    {
                              "id": "c",
                              "text": "A set of objects that share a feature."
                    },
                    {
                              "id": "d",
                              "text": "Sharing the same feature."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Sort\" means Group objects that are alike."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Sort\" means Group objects that are alike.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Sort** = Group objects that are alike.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "mpk-u4-sort-classify-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Classify\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A set of objects that share a feature."
                    },
                    {
                              "id": "b",
                              "text": "Sharing the same feature."
                    },
                    {
                              "id": "c",
                              "text": "A named group like 'red things' or 'round things'."
                    },
                    {
                              "id": "d",
                              "text": "Put things into categories."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Classify\" means Put things into categories."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Classify\" means Put things into categories.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Classify** = Put things into categories.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "mpk-u4-sort-classify-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Group\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Sharing the same feature."
                    },
                    {
                              "id": "b",
                              "text": "A set of objects that share a feature."
                    },
                    {
                              "id": "c",
                              "text": "A named group like 'red things' or 'round things'."
                    },
                    {
                              "id": "d",
                              "text": "Group objects that are alike."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Group\" means A set of objects that share a feature."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Group\" means A set of objects that share a feature.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Group** = A set of objects that share a feature.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
