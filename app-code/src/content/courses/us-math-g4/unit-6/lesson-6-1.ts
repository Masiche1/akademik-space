import type { Lesson } from "../../../types.ts";

export const lesson61: Lesson = {
  id: "m4-u6-lesson-6-1",
  code: "6-1",
  title: "Length Units",
  goal: "I CAN convert between units of length.",
  standards: ["4.MD.A.1"],
  vocabulary: [
    { term: "Length", definition: "How long something is." },
    { term: "Inch", definition: "Small unit." },
    { term: "Foot", definition: "12 inches." },
    { term: "Yard", definition: "3 feet." },
    { term: "Mile", definition: "5280 feet." },
    { term: "Centimeter", definition: "Metric unit." },
    { term: "Meter", definition: "100 centimeters." },
    { term: "Kilometer", definition: "1000 meters." },
  ],
  concepts: [
    {
      id: "m4-u6-length-units",
      title: "Length units",
      skill: "Convert between inches, feet, yards, miles and metric units.",
      lesson: {
        sections: [
          {
            heading: "Customary units",
            body: "**Inches** -> **feet** (12 in = 1 ft) -> **yards** (3 ft = 1 yd) -> **miles** (1760 yd = 1 mi).",
          },
          {
            heading: "Metric units",
            body: "**Millimeters** -> **centimeters** (10 mm = 1 cm) -> **meters** (100 cm = 1 m) -> **kilometers** (1000 m = 1 km).",
          },
        ],
        keyFormulas: [
          { name: "Customary", statement: "12 in = 1 ft; 3 ft = 1 yd; 1760 yd = 1 mi." },
          { name: "Metric", statement: "10 mm = 1 cm; 100 cm = 1 m; 1000 m = 1 km." },
        ],
        workedExample: {
          problem: "Convert 5 feet to inches.",
          solution: "$5 \\times 12 = 60$ inches.",
        },
      },
      questions: [
        {
          id: "m4-u6-length-units-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many inches in 1 foot?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "10"
                    },
                    {
                              "id": "b",
                              "text": "12"
                    },
                    {
                              "id": "c",
                              "text": "16"
                    },
                    {
                              "id": "d",
                              "text": "20"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "12 inches = 1 foot."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "12 inches = 1 foot.",
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
          id: "m4-u6-length-units-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "How many centimeters in 1 meter?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "10"
                    },
                    {
                              "id": "b",
                              "text": "100"
                    },
                    {
                              "id": "c",
                              "text": "1000"
                    },
                    {
                              "id": "d",
                              "text": "50"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "100 cm = 1 m."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "100 cm = 1 m.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "100",
          "commonErrors": [
                    "Wrong conversion."
          ]
},
        },
        {
          id: "m4-u6-length-units-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Convert 3 yards to feet AND 250 centimeters to meters.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Length",
                              "statement": "9 feet and 2.5 meters."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Converts yards to feet.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Converts cm to m.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**3 yd = 9 ft; 250 cm = 2.5 m**",
          "commonErrors": [
                    "Wrong conversions.",
                    "Only one done."
          ]
},
        },
        {
          id: "m4-u6-length-units-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many feet in 2 yards?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "5"
                    },
                    {
                              "id": "b",
                              "text": "6"
                    },
                    {
                              "id": "c",
                              "text": "8"
                    },
                    {
                              "id": "d",
                              "text": "10"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "2 x 3 = 6 feet."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "2 x 3 = 6 feet.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "6",
          "commonErrors": [
                    "Wrong conversion."
          ]
},
        },
        {
          id: "m4-u6-length-units-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Convert 4 miles to feet. Show your work.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Length",
                              "statement": "4 x 5280 = 21,120 ft."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Converts correctly.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Shows work.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**4 mi = 4 x 5280 = 21,120 ft**",
          "commonErrors": [
                    "Wrong conversion.",
                    "No work."
          ]
},
        },
        {
          id: "m4-u6-length-units-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Length\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Small unit."
                    },
                    {
                              "id": "b",
                              "text": "How long something is."
                    },
                    {
                              "id": "c",
                              "text": "12 inches."
                    },
                    {
                              "id": "d",
                              "text": "3 feet."
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
          id: "m4-u6-length-units-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Inch\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "12 inches."
                    },
                    {
                              "id": "b",
                              "text": "3 feet."
                    },
                    {
                              "id": "c",
                              "text": "5280 feet."
                    },
                    {
                              "id": "d",
                              "text": "Small unit."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Inch\" means Small unit."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Inch\" means Small unit.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Inch** = Small unit.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m4-u6-length-units-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Foot\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "3 feet."
                    },
                    {
                              "id": "b",
                              "text": "12 inches."
                    },
                    {
                              "id": "c",
                              "text": "5280 feet."
                    },
                    {
                              "id": "d",
                              "text": "Metric unit."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Foot\" means 12 inches."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Foot\" means 12 inches.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Foot** = 12 inches.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
