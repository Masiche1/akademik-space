import type { Lesson } from "../../../types.ts";

export const lesson51: Lesson = {
  id: "m2-u5-lesson-5-1",
  code: "5-1",
  title: "Measuring Length",
  goal: "I CAN measure length using non-standard and standard units.",
  standards: ["2.MD.A.1", "2.MD.A.2", "2.MD.A.3"],
  vocabulary: [
    { term: "Length", definition: "How long something is." },
    { term: "Measure", definition: "Find size." },
    { term: "Unit", definition: "Standard for measuring." },
    { term: "Inch", definition: "Small unit of length." },
    { term: "Foot", definition: "Larger unit of length." },
    { term: "Ruler", definition: "Tool for measuring." },
    { term: "Estimate", definition: "Make a good guess." },
    { term: "Centimeter", definition: "Metric unit." },
  ],
  concepts: [
    {
      id: "m2-u5-measure-length",
      title: "Measuring length",
      skill: "Measure length using standard units (inches, feet, centimeters) and estimate.",
      lesson: {
        sections: [
          {
            heading: "Measure length",
            body: "**Length** is how long something is. We **measure** it using **units** — inches, feet, or centimeters. Use a **ruler** to measure accurately.",
          },
          {
            heading: "Estimate",
            body: "**Estimate** means make a good guess before measuring. 'This looks about 6 inches long.'",
          },
        ],
        keyFormulas: [
          { name: "Measure", statement: "Length = how long; use units like inches, feet, cm." },
          { name: "Estimate", statement: "Good guess before measuring." },
        ],
        workedExample: {
          problem: "Measure a pencil with a ruler. What unit do you use?",
          solution: "Use **inches** or **centimeters** — pencil is about 7 inches long.",
        },
      },
      questions: [
        {
          id: "m2-u5-measure-length-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Length' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "how wide"
                    },
                    {
                              "id": "b",
                              "text": "how long something is"
                    },
                    {
                              "id": "c",
                              "text": "how heavy"
                    },
                    {
                              "id": "d",
                              "text": "how tall only"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Length = how long."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Length = how long.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "how long",
          "commonErrors": [
                    "Picks wrong dimension."
          ]
},
        },
        {
          id: "m2-u5-measure-length-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "A 'ruler' is used to...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "weigh things"
                    },
                    {
                              "id": "b",
                              "text": "measure length"
                    },
                    {
                              "id": "c",
                              "text": "tell time"
                    },
                    {
                              "id": "d",
                              "text": "count money"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Ruler measures length."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Ruler measures length.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "measure length",
          "commonErrors": [
                    "Picks wrong tool."
          ]
},
        },
        {
          id: "m2-u5-measure-length-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Measure three objects with a ruler. Record each length in inches or centimeters.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "measure",
                              "name": "Length",
                              "statement": "Measure + record."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Measures 3 objects.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Records lengths with units.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "e.g., Pencil: 7 in; Book: 10 in; Eraser: 1 in",
          "commonErrors": "Missing measurements."
},
        },
        {
          id: "m2-u5-measure-length-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "How many inches are in 1 foot?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Answer",
                              "answer": 12
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "reasoning",
                              "statement": "1 foot = 12 inches."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "12",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "12",
          "commonErrors": [
                    "Wrong conversion."
          ]
},
        },
        {
          id: "m2-u5-measure-length-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Estimate then measure the length of your desk. How close was your estimate?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "measure",
                              "name": "Estimate + measure",
                              "statement": "Estimate first, then measure."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Estimates length.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Measures and compares.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "e.g., Estimated 24 in, actual 26 in — close!",
          "commonErrors": "No estimate."
},
        },
        {
          id: "m2-u5-measure-length-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Length\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Find size."
                    },
                    {
                              "id": "b",
                              "text": "How long something is."
                    },
                    {
                              "id": "c",
                              "text": "Standard for measuring."
                    },
                    {
                              "id": "d",
                              "text": "Small unit of length."
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
          id: "m2-u5-measure-length-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Measure\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Standard for measuring."
                    },
                    {
                              "id": "b",
                              "text": "Small unit of length."
                    },
                    {
                              "id": "c",
                              "text": "Larger unit of length."
                    },
                    {
                              "id": "d",
                              "text": "Find size."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Measure\" means Find size."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Measure\" means Find size.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Measure** = Find size.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m2-u5-measure-length-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Unit\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Small unit of length."
                    },
                    {
                              "id": "b",
                              "text": "Standard for measuring."
                    },
                    {
                              "id": "c",
                              "text": "Larger unit of length."
                    },
                    {
                              "id": "d",
                              "text": "Tool for measuring."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Unit\" means Standard for measuring."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Unit\" means Standard for measuring.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Unit** = Standard for measuring.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
