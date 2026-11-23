import type { Lesson } from "../../../types.ts";

export const lesson43: Lesson = {
  id: "s1-u4-lesson-4-3",
  code: "4-3",
  title: "Sorting Materials",
  goal: "I CAN sort objects by their properties.",
  standards: ["1-PS1-1", "1-PS1-2"],
  vocabulary: [
    { term: "Sort", definition: "Group by a property." },
    { term: "Group", definition: "Put together." },
    { term: "Property", definition: "Quality used to sort." },
    { term: "Color", definition: "Red, blue, green." },
    { term: "Size", definition: "Big or small." },
    { term: "Shape", definition: "Round, square, etc." },
    { term: "Texture", definition: "Smooth or rough." },
    { term: "Material", definition: "What it's made of." },
  ],
  concepts: [
    {
      id: "s1-u4-sorting-materials",
      title: "Sorting materials",
      skill: "Sort objects by observable properties like color, size, shape, texture.",
      lesson: {
        sections: [
          {
            heading: "Sort by properties",
            body: "To **sort**, choose a **property** (color, size, shape, texture) and **group** objects that share it. All red things together, all big things together.",
          },
          {
            heading: "One property at a time",
            body: "Sort by **one property at a time** so the groups are clear. You can re-sort by a different property later.",
          },
        ],
        keyFormulas: [
          { name: "Sort", statement: "Choose 1 property + group objects that share it." },
        ],
        workedExample: {
          problem: "Sort these objects: red ball, blue ball, red block, blue block. Sort by color.",
          solution: "Red group: red ball + red block. Blue group: blue ball + blue block.",
        },
      },
      questions: [
        {
          id: "s1-u4-sorting-materials-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "To sort objects, you group them by...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "name"
                    },
                    {
                              "id": "b",
                              "text": "a property like color or size"
                    },
                    {
                              "id": "c",
                              "text": "price"
                    },
                    {
                              "id": "d",
                              "text": "where they are"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Sort by a property."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Sort by a property.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**property**",
          "commonErrors": [
                    "Picks name/price."
          ]
},
        },
        {
          id: "s1-u4-sorting-materials-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is a property used for sorting?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "brand"
                    },
                    {
                              "id": "b",
                              "text": "color"
                    },
                    {
                              "id": "c",
                              "text": "owner"
                    },
                    {
                              "id": "d",
                              "text": "date"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Color is a property."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Color is a property.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**color**",
          "commonErrors": [
                    "Picks non-property."
          ]
},
        },
        {
          id: "s1-u4-sorting-materials-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Sort a set of objects by two different properties (e.g., color then size). Describe each sorting.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Sort",
                              "statement": "2 sortings by property."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Sorts by property 1.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Sorts by property 2.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**e.g., 'By color: reds together. By size: big together, small together.'**",
          "commonErrors": [
                    "Only one sorting.",
                    "Cannot sort."
          ]
},
        },
        {
          id: "s1-u4-sorting-materials-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Texture' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "color"
                    },
                    {
                              "id": "b",
                              "text": "how something feels — smooth or rough"
                    },
                    {
                              "id": "c",
                              "text": "size"
                    },
                    {
                              "id": "d",
                              "text": "shape"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Texture = how it feels."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Texture = how it feels.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**how it feels**",
          "commonErrors": [
                    "Confuses with color."
          ]
},
        },
        {
          id: "s1-u4-sorting-materials-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Sort objects by shape. Then re-sort the same objects by color. How do the groups change?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Sort",
                              "statement": "Two sortings + compare."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Sorts by shape.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Sorts by color + compares.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**e.g., 'By shape: circles together; by color: reds together — different groups.'**",
          "commonErrors": [
                    "Cannot re-sort.",
                    "Same groups."
          ]
},
        },
        {
          id: "s1-u4-sorting-materials-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Sort\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Put together."
                    },
                    {
                              "id": "b",
                              "text": "Group by a property."
                    },
                    {
                              "id": "c",
                              "text": "Quality used to sort."
                    },
                    {
                              "id": "d",
                              "text": "Red, blue, green."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Sort\" means Group by a property."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Sort\" means Group by a property.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Sort** = Group by a property.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "s1-u4-sorting-materials-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Group\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Quality used to sort."
                    },
                    {
                              "id": "b",
                              "text": "Red, blue, green."
                    },
                    {
                              "id": "c",
                              "text": "Big or small."
                    },
                    {
                              "id": "d",
                              "text": "Put together."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Group\" means Put together."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Group\" means Put together.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Group** = Put together.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "s1-u4-sorting-materials-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Property\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Red, blue, green."
                    },
                    {
                              "id": "b",
                              "text": "Quality used to sort."
                    },
                    {
                              "id": "c",
                              "text": "Big or small."
                    },
                    {
                              "id": "d",
                              "text": "Round, square, etc."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Property\" means Quality used to sort."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Property\" means Quality used to sort.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Property** = Quality used to sort.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
