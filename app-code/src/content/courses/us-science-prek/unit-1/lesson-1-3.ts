import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "spk-u1-lesson-1-3",
  code: "1-3",
  title: "Sort Objects",
  goal: "I CAN sort objects by how they look, feel or what they are.",
  standards: ["ELOF-PK.SCI.SORT.1"],
  vocabulary: [
    { term: "Sort", definition: "Group things that are alike." },
    { term: "Alike", definition: "Similar or the same." },
    { term: "Different", definition: "Not the same." },
    { term: "Group", definition: "Put together things that match." },
    { term: "Classify", definition: "Sort into groups by a rule." },
  ],
  concepts: [
    {
      id: "spk-u1-sort-objects",
      title: "Sorting objects",
      skill: "Sort objects into groups by observable properties.",
      lesson: {
        sections: [
          {
            heading: "Group by alike",
            body: "**Sorting** means grouping things that are **alike**. Sort buttons by color, blocks by shape, leaves by size — anything you can observe.",
          },
          {
            heading: "Choose a rule",
            body: "A **rule** tells you how to sort: 'by color' or 'by size' or 'by shape'. Pick one rule and put each object in the right group.",
          },
        ],
        keyFormulas: [
          { name: "Sort", statement: "Group objects by a rule: color, shape, size, texture, etc." },
        ],
        workedExample: {
          problem: "Sort these shapes: circle, square, circle, triangle. Rule: shape.",
          solution: "Circles: 2. Squares: 1. Triangles: 1 — **sorted by shape**.",
        },
      },
      questions: [
        {
          id: "spk-u1-sort-objects-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Sort' objects means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "throw them away"
                    },
                    {
                              "id": "b",
                              "text": "group things that are alike"
                    },
                    {
                              "id": "c",
                              "text": "count them"
                    },
                    {
                              "id": "d",
                              "text": "break them"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Sort = group things that are alike."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Sort = group things that are alike.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Group alike things**",
          "commonErrors": [
                    "Thinks sort means count."
          ]
},
        },
        {
          id: "spk-u1-sort-objects-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "If you sort buttons 'by color', red buttons go...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "with blue"
                    },
                    {
                              "id": "b",
                              "text": "together in the red group"
                    },
                    {
                              "id": "c",
                              "text": "everywhere"
                    },
                    {
                              "id": "d",
                              "text": "in the trash"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Sorting by color groups all red together."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Sorting by color groups all red together.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Red group together**",
          "commonErrors": [
                    "Doesn't group by rule."
          ]
},
        },
        {
          id: "spk-u1-sort-objects-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Sort a handful of objects (buttons, blocks, toys) into two groups. What rule did you use?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Sort",
                              "statement": "Group by a rule."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Sorts into 2 groups by a rule.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'By color: red vs blue'**",
          "commonErrors": [
                    "No clear rule.",
                    "Groups randomly."
          ]
},
        },
        {
          id: "spk-u1-sort-objects-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "'Alike' objects are...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "all different"
                    },
                    {
                              "id": "b",
                              "text": "similar or the same"
                    },
                    {
                              "id": "c",
                              "text": "broken"
                    },
                    {
                              "id": "d",
                              "text": "new"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Alike = similar or the same."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Alike = similar or the same.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Similar or same**",
          "commonErrors": [
                    "Thinks alike means different."
          ]
},
        },
        {
          id: "spk-u1-sort-objects-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Sort leaves, buttons or blocks into groups. Name your rule, count each group, and explain why your rule works.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Sort",
                              "statement": "Name rule, count groups, explain."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Sorts into groups by a rule.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Counts groups and explains rule.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'By size: big=3, small=5 — size is easy to see.'**",
          "commonErrors": [
                    "No rule.",
                    "Cannot explain."
          ]
},
        },
        {
          id: "spk-u1-sort-objects-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Sort\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Similar or the same."
                    },
                    {
                              "id": "b",
                              "text": "Group things that are alike."
                    },
                    {
                              "id": "c",
                              "text": "Not the same."
                    },
                    {
                              "id": "d",
                              "text": "Put together things that match."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Sort\" means Group things that are alike."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Sort\" means Group things that are alike.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Sort** = Group things that are alike.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "spk-u1-sort-objects-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Alike\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Not the same."
                    },
                    {
                              "id": "b",
                              "text": "Put together things that match."
                    },
                    {
                              "id": "c",
                              "text": "Sort into groups by a rule."
                    },
                    {
                              "id": "d",
                              "text": "Similar or the same."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Alike\" means Similar or the same."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Alike\" means Similar or the same.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Alike** = Similar or the same.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "spk-u1-sort-objects-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Different\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Put together things that match."
                    },
                    {
                              "id": "b",
                              "text": "Not the same."
                    },
                    {
                              "id": "c",
                              "text": "Sort into groups by a rule."
                    },
                    {
                              "id": "d",
                              "text": "Group things that are alike."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Different\" means Not the same."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Different\" means Not the same.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Different** = Not the same.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
