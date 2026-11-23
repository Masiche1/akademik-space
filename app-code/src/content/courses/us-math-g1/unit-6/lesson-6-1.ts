import type { Lesson } from "../../../types.ts";

export const lesson61: Lesson = {
  id: "m1-u6-lesson-6-1",
  code: "6-1",
  title: "Measuring Length",
  goal: "I CAN measure length using non-standard and standard units.",
  standards: ["1.MD.A.1", "1.MD.A.2"],
  vocabulary: [
    { term: "Length", definition: "How long something is." },
    { term: "Measure", definition: "Find the size/length." },
    { term: "Unit", definition: "What you measure with." },
    { term: "Non-standard", definition: "Using objects like paper clips." },
    { term: "Standard", definition: "Using rulers, inches, cm." },
    { term: "Inch", definition: "A standard unit of length." },
    { term: "Centimeter", definition: "A small standard unit." },
    { term: "Compare", definition: "See which is longer/shorter." },
  ],
  concepts: [
    {
      id: "m1-u6-measure-length",
      title: "Measuring length",
      skill: "Measure length using non-standard units (paper clips) and standard units (inches, cm).",
      lesson: {
        sections: [
          {
            heading: "How to measure",
            body: "To **measure** **length**, line up the object with a **unit** and count how many units long it is. You can use **non-standard** units (paper clips, blocks) or **standard** units (inches, centimeters).",
          },
          {
            heading: "Compare lengths",
            body: "After measuring, **compare** the lengths — which is **longer**, **shorter**, or the **same**? Use the measurements to say.",
          },
        ],
        keyFormulas: [
          { name: "Measure", statement: "Line up + count units = length." },
          { name: "Compare", statement: "More units = longer; fewer = shorter." },
        ],
        workedExample: {
          problem: "A pencil is 6 paper clips long. A crayon is 4 paper clips long. Which is longer?",
          solution: "The **pencil is longer** — 6 > 4 paper clips.",
        },
      },
      questions: [
        {
          id: "m1-u6-measure-length-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "A ribbon is 8 inches long. A string is 5 inches long. How many inches longer is the ribbon?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Difference",
                              "answer": 3
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "$8 - 5 = 3$ inches."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$8 - 5 = 3$ inches.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(3)**",
          "commonErrors": [
                    "Adds instead."
          ]
},
        },
        {
          id: "m1-u6-measure-length-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "To measure length with paper clips, you should...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "guess"
                    },
                    {
                              "id": "b",
                              "text": "line up the object and count how many clips long it is"
                    },
                    {
                              "id": "c",
                              "text": "use a ruler only"
                    },
                    {
                              "id": "d",
                              "text": "measure with your hand"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Line up + count units."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Line up + count units.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**line up + count**",
          "commonErrors": [
                    "Thinks guessing works."
          ]
},
        },
        {
          id: "m1-u6-measure-length-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which unit is standard for measuring length?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "paper clips"
                    },
                    {
                              "id": "b",
                              "text": "inches or centimeters"
                    },
                    {
                              "id": "c",
                              "text": "blocks"
                    },
                    {
                              "id": "d",
                              "text": "hands"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Inches/cm are standard."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Inches/cm are standard.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**inches/cm**",
          "commonErrors": [
                    "Picks non-standard."
          ]
},
        },
        {
          id: "m1-u6-measure-length-q4",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Measure two objects with paper clips. Which is longer? How many clips longer?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Measure + compare",
                              "statement": "Count clips for each, compare."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Measures both.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Compares correctly.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'Pencil=6 clips, crayon=4 clips; pencil is 2 longer'**",
          "commonErrors": [
                    "Cannot measure.",
                    "Wrong comparison."
          ]
},
        },
        {
          id: "m1-u6-measure-length-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Length\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Find the size/length."
                    },
                    {
                              "id": "b",
                              "text": "How long something is."
                    },
                    {
                              "id": "c",
                              "text": "What you measure with."
                    },
                    {
                              "id": "d",
                              "text": "Using objects like paper clips."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Length\" means How long something is."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Length\" means How long something is.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Length** = How long something is.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m1-u6-measure-length-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Measure\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "What you measure with."
                    },
                    {
                              "id": "b",
                              "text": "Using objects like paper clips."
                    },
                    {
                              "id": "c",
                              "text": "Using rulers, inches, cm."
                    },
                    {
                              "id": "d",
                              "text": "Find the size/length."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Measure\" means Find the size/length."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Measure\" means Find the size/length.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Measure** = Find the size/length.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m1-u6-measure-length-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Unit\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Using objects like paper clips."
                    },
                    {
                              "id": "b",
                              "text": "What you measure with."
                    },
                    {
                              "id": "c",
                              "text": "Using rulers, inches, cm."
                    },
                    {
                              "id": "d",
                              "text": "A standard unit of length."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Unit\" means What you measure with."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Unit\" means What you measure with.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Unit** = What you measure with.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m1-u6-measure-length-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Non-standard\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Using rulers, inches, cm."
                    },
                    {
                              "id": "b",
                              "text": "A standard unit of length."
                    },
                    {
                              "id": "c",
                              "text": "A small standard unit."
                    },
                    {
                              "id": "d",
                              "text": "Using objects like paper clips."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Non-standard\" means Using objects like paper clips."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Non-standard\" means Using objects like paper clips.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Non-standard** = Using objects like paper clips.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
