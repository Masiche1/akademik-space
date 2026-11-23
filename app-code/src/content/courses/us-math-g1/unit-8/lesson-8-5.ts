import type { Lesson } from "../../../types.ts";

export const lesson85: Lesson = {
  id: "m1-u8-lesson-8-5",
  code: "8-5",
  title: "Grade 1 Final Review",
  goal: "I CAN use all Grade 1 math skills together.",
  standards: ["1.NBT.A.1", "1.NBT.C.4", "1.NBT.C.6", "1.MD.A.1", "1.MD.B.3", "1.G.A.1", "1.G.A.2", "1.OA.A.1"],
  vocabulary: [
    { term: "Numbers", definition: "Count to 120." },
    { term: "Place value", definition: "Tens/ones." },
    { term: "Add/Subtract", definition: "Within 20/100." },
    { term: "Measure", definition: "Length/time/data." },
    { term: "Geometry", definition: "2D/3D shapes." },
    { term: "Word problems", definition: "Story problems." },
    { term: "Solve", definition: "Find answers." },
    { term: "Check", definition: "Verify." },
  ],
  concepts: [
    {
      id: "m1-u8-grade1-final",
      title: "Grade 1 final review",
      skill: "Combine all Grade 1 math skills.",
      lesson: {
        sections: [
          {
            heading: "All Grade 1 math",
            body: "Grade 1 covers **numbers** (count to 120, place value), **operations** (add/subtract within 20/100), **measurement** (length, time, data), and **geometry** (2D/3D shapes).",
          },
          {
            heading: "You are a Grade 1 math expert!",
            body: "You can count, add, subtract, measure, tell time, work with data, and identify shapes. These are the foundations for Grade 2!",
          },
        ],
        keyFormulas: [
          { name: "Grade 1 math", statement: "Numbers + operations + measurement + geometry = Grade 1 mastery." },
        ],
        workedExample: {
          problem: "Show all skills: count by 10s, solve 45+38, measure an object, tell time, identify a shape.",
          solution: "All skills demonstrated = Grade 1 mastery.",
        },
      },
      questions: [
        {
          id: "m1-u8-grade1-final-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Grade 1 math includes which topics?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only counting"
                    },
                    {
                              "id": "b",
                              "text": "numbers, operations, measurement, geometry"
                    },
                    {
                              "id": "c",
                              "text": "only adding"
                    },
                    {
                              "id": "d",
                              "text": "only shapes"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "All Grade 1 topics."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "All Grade 1 topics.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**all topics**",
          "commonErrors": [
                    "Lists one topic."
          ]
},
        },
        {
          id: "m1-u8-grade1-final-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Show all your skills: count by 10s to 100, solve 36+47, measure an object, tell the time, and identify a 3D shape.",
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
                                                  "method",
                                                  "All Grade 1",
                                                  "Count + solve + measure + time + shape."
                                        ]
                              ]
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        [
                                                  "method",
                                                  "All Grade 1",
                                                  "Count + solve + measure + time + shape."
                                        ]
                              ],
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": [
                    {
                              "reasoning": "Demonstrates all skills.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "commonErrors": [
                    "**e.g., '10,20,...,100; 83; pencil=5in; 2:30; cube'**"
          ]
},
        },
        {
          id: "m1-u8-grade1-final-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Solve $58 + 34$.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Sum",
                              "answer": 92
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "50+30=80, 8+4=12=1 ten+2, 80+10+2=92."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "50+30=80, 8+4=12=1 ten+2, 80+10+2=92.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(92)**",
          "commonErrors": [
                    "Does not regroup."
          ]
},
        },
        {
          id: "m1-u8-grade1-final-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Numbers\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Tens/ones."
                    },
                    {
                              "id": "b",
                              "text": "Count to 120."
                    },
                    {
                              "id": "c",
                              "text": "Within 20/100."
                    },
                    {
                              "id": "d",
                              "text": "Length/time/data."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Numbers\" means Count to 120."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Numbers\" means Count to 120.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Numbers** = Count to 120.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m1-u8-grade1-final-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Place value\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Within 20/100."
                    },
                    {
                              "id": "b",
                              "text": "Length/time/data."
                    },
                    {
                              "id": "c",
                              "text": "2D/3D shapes."
                    },
                    {
                              "id": "d",
                              "text": "Tens/ones."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Place value\" means Tens/ones."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Place value\" means Tens/ones.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Place value** = Tens/ones.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m1-u8-grade1-final-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Add/Subtract\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Length/time/data."
                    },
                    {
                              "id": "b",
                              "text": "Within 20/100."
                    },
                    {
                              "id": "c",
                              "text": "2D/3D shapes."
                    },
                    {
                              "id": "d",
                              "text": "Story problems."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Add/Subtract\" means Within 20/100."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Add/Subtract\" means Within 20/100.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Add/Subtract** = Within 20/100.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m1-u8-grade1-final-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Measure\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "2D/3D shapes."
                    },
                    {
                              "id": "b",
                              "text": "Story problems."
                    },
                    {
                              "id": "c",
                              "text": "Find answers."
                    },
                    {
                              "id": "d",
                              "text": "Length/time/data."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Measure\" means Length/time/data."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Measure\" means Length/time/data.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Measure** = Length/time/data.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m1-u8-grade1-final-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Geometry\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Story problems."
                    },
                    {
                              "id": "b",
                              "text": "2D/3D shapes."
                    },
                    {
                              "id": "c",
                              "text": "Find answers."
                    },
                    {
                              "id": "d",
                              "text": "Verify."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Geometry\" means 2D/3D shapes."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Geometry\" means 2D/3D shapes.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Geometry** = 2D/3D shapes.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
