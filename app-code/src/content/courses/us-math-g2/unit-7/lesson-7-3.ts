import type { Lesson } from "../../../types.ts";

export const lesson73: Lesson = {
  id: "m2-u7-lesson-7-3",
  code: "7-3",
  title: "Partitioning Shapes",
  goal: "I CAN partition shapes into equal parts.",
  standards: ["2.G.A.3"],
  vocabulary: [
    { term: "Partition", definition: "Divide into parts." },
    { term: "Equal", definition: "Same size." },
    { term: "Half", definition: "Two equal parts." },
    { term: "Fourth", definition: "Four equal parts." },
    { term: "Third", definition: "Three equal parts." },
    { term: "Share", definition: "Divide equally." },
    { term: "Fraction", definition: "Part of a whole." },
    { term: "Piece", definition: "One part." },
  ],
  concepts: [
    {
      id: "m2-u7-partition-shapes",
      title: "Partitioning shapes",
      skill: "Partition shapes into equal parts: halves, thirds, fourths.",
      lesson: {
        sections: [
          {
            heading: "Equal parts",
            body: "To **partition** a shape, divide it into **equal** parts — parts that are the **same size**. Cut a shape in half for **halves**, into 3 for **thirds**, into 4 for **fourths**.",
          },
          {
            heading: "Fractions",
            body: "Each equal part is a **fraction** of the whole: 1 half, 1 third, 1 fourth.",
          },
        ],
        keyFormulas: [
          { name: "Partition", statement: "Divide into equal parts: halves, thirds, fourths." },
        ],
        workedExample: {
          problem: "Partition a rectangle into 4 equal parts. What is each part called?",
          solution: "Each part is a **fourth** (1/4) of the rectangle.",
        },
      },
      questions: [
        {
          id: "m2-u7-partition-shapes-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Partition' means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "combine"
                    },
                    {
                              "id": "b",
                              "text": "divide into parts"
                    },
                    {
                              "id": "c",
                              "text": "measure"
                    },
                    {
                              "id": "d",
                              "text": "compare"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Partition = divide."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Partition = divide.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "divide",
          "commonErrors": [
                    "Picks wrong meaning."
          ]
},
        },
        {
          id: "m2-u7-partition-shapes-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "If you cut a shape into 2 equal parts, each part is a...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "third"
                    },
                    {
                              "id": "b",
                              "text": "half"
                    },
                    {
                              "id": "c",
                              "text": "fourth"
                    },
                    {
                              "id": "d",
                              "text": "whole"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "2 equal parts = halves."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "2 equal parts = halves.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "half",
          "commonErrors": [
                    "Picks wrong fraction."
          ]
},
        },
        {
          id: "m2-u7-partition-shapes-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Partition a square into 4 equal parts. What fraction is each part?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "partition",
                              "name": "Equal parts",
                              "statement": "4 equal parts."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Divides into 4 equal parts.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Each is a fourth (1/4).",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Each part is a fourth",
          "commonErrors": "Unequal parts."
},
        },
        {
          id: "m2-u7-partition-shapes-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "How many equal parts make thirds?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Answer",
                              "answer": 3
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "reasoning",
                              "statement": "Thirds = 3 equal parts."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "3",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "3",
          "commonErrors": [
                    "Wrong number."
          ]
},
        },
        {
          id: "m2-u7-partition-shapes-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Partition a rectangle into halves, then into fourths. How many more parts do you get?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "partition",
                              "name": "Halves vs fourths",
                              "statement": "Compare part counts."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Halves = 2 parts.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Fourths = 4 parts (2 more).",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "2 halves; 4 fourths (2 more)",
          "commonErrors": "Wrong counts."
},
        },
        {
          id: "m2-u7-partition-shapes-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Partition\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Same size."
                    },
                    {
                              "id": "b",
                              "text": "Divide into parts."
                    },
                    {
                              "id": "c",
                              "text": "Two equal parts."
                    },
                    {
                              "id": "d",
                              "text": "Four equal parts."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Partition\" means Divide into parts."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Partition\" means Divide into parts.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Partition** = Divide into parts.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m2-u7-partition-shapes-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Equal\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Two equal parts."
                    },
                    {
                              "id": "b",
                              "text": "Four equal parts."
                    },
                    {
                              "id": "c",
                              "text": "Three equal parts."
                    },
                    {
                              "id": "d",
                              "text": "Same size."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Equal\" means Same size."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Equal\" means Same size.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Equal** = Same size.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m2-u7-partition-shapes-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Half\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Four equal parts."
                    },
                    {
                              "id": "b",
                              "text": "Two equal parts."
                    },
                    {
                              "id": "c",
                              "text": "Three equal parts."
                    },
                    {
                              "id": "d",
                              "text": "Divide equally."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Half\" means Two equal parts."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Half\" means Two equal parts.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Half** = Two equal parts.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
