import type { Lesson } from "../../../types.ts";

export const lesson44: Lesson = {
  id: "sci2-u4-lesson-4-4",
  code: "4-4",
  title: "Testing Plant Needs",
  goal: "I CAN test which things plants need by changing conditions.",
  standards: ["NGSS 2-LS2-1", "NGSS 2-LS4-1"],
  vocabulary: [
    { term: "Test", definition: "Try an experiment." },
    { term: "Variable", definition: "What you change." },
    { term: "Control", definition: "What stays the same." },
    { term: "Water", definition: "Needed for growth." },
    { term: "Sunlight", definition: "Energy for plants." },
    { term: "Soil", definition: "Where roots grow." },
    { term: "Observe", definition: "Watch carefully." },
    { term: "Compare", definition: "Look at differences." },
    { term: "Result", definition: "What happened." },
    { term: "Conclusion", definition: "What we learned." },
  ],
  concepts: [
    {
      id: "sci2-u4-plant-needs-test",
      title: "Testing plant needs",
      skill: "Design simple tests to see what plants need by changing one variable.",
      lesson: {
        sections: [
          {
            heading: "Test one thing",
            body: "To test what plants need, **change one thing** (like no water) and keep everything else the **same**. This is called a **variable** — you test one at a time.",
          },
          {
            heading: "Compare results",
            body: "**Observe** what happens. If the plant without water **wilts** but the one with water **grows**, water is needed. Compare the **results** to draw a **conclusion**.",
          },
        ],
        keyFormulas: [
          { name: "Test", statement: "Change one variable, keep rest same, observe result, conclude." },
        ],
        workedExample: {
          problem: "How would you test if plants need sunlight?",
          solution: "Put one plant in sunlight, one in dark (same water/soil). Observe which grows.",
        },
      },
      questions: [
        {
          id: "sci2-u4-plant-needs-test-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In a plant test, you should change...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "everything"
                    },
                    {
                              "id": "b",
                              "text": "one variable at a time"
                    },
                    {
                              "id": "c",
                              "text": "nothing"
                    },
                    {
                              "id": "d",
                              "text": "all plants"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Change one variable."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Change one variable.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**one variable**",
          "commonErrors": [
                    "Thinks change everything."
          ]
},
        },
        {
          id: "sci2-u4-plant-needs-test-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "The 'control' in an experiment is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "what you change"
                    },
                    {
                              "id": "b",
                              "text": "what stays the same"
                    },
                    {
                              "id": "c",
                              "text": "the result"
                    },
                    {
                              "id": "d",
                              "text": "the conclusion"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Control = what stays same."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Control = what stays same.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**stays same**",
          "commonErrors": [
                    "Confuses with variable."
          ]
},
        },
        {
          id: "sci2-u4-plant-needs-test-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Design a test: does a plant need water? What do you change? What do you keep the same?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Test design",
                              "statement": "Change water, keep rest same."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Names variable + control.",
                              "marks": 1,
                              "markCode": "M1"
                    }
          ],
          "finalAnswer": "**e.g., 'Change: one plant gets no water. Same: soil, light, pot size.'**",
          "commonErrors": []
},
        },
        {
          id: "sci2-u4-plant-needs-test-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'variable' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a constant"
                    },
                    {
                              "id": "b",
                              "text": "what you change in a test"
                    },
                    {
                              "id": "c",
                              "text": "a result"
                    },
                    {
                              "id": "d",
                              "text": "a conclusion"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Variable = what you change."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Variable = what you change.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**what you change**",
          "commonErrors": [
                    "Confuses with control."
          ]
},
        },
        {
          id: "sci2-u4-plant-needs-test-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Design and describe a test for whether plants need sunlight.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Test design",
                              "statement": "Sunlight test."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Designs test with variable.",
                              "marks": 1,
                              "markCode": "M1"
                    },
                    {
                              "reasoning": "Identifies control.",
                              "marks": 1,
                              "markCode": "M1"
                    }
          ],
          "finalAnswer": "**e.g., 'Two plants, same soil/water; one in sun, one in dark; observe growth.'**",
          "commonErrors": []
},
        },
        {
          id: "sci2-u4-plant-needs-test-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Test\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "What you change."
                    },
                    {
                              "id": "b",
                              "text": "Try an experiment."
                    },
                    {
                              "id": "c",
                              "text": "What stays the same."
                    },
                    {
                              "id": "d",
                              "text": "Needed for growth."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Test\" means Try an experiment."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Test\" means Try an experiment.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Test** = Try an experiment.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci2-u4-plant-needs-test-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Variable\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "What stays the same."
                    },
                    {
                              "id": "b",
                              "text": "Needed for growth."
                    },
                    {
                              "id": "c",
                              "text": "Energy for plants."
                    },
                    {
                              "id": "d",
                              "text": "What you change."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Variable\" means What you change."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Variable\" means What you change.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Variable** = What you change.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci2-u4-plant-needs-test-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Control\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Needed for growth."
                    },
                    {
                              "id": "b",
                              "text": "What stays the same."
                    },
                    {
                              "id": "c",
                              "text": "Energy for plants."
                    },
                    {
                              "id": "d",
                              "text": "Where roots grow."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Control\" means What stays the same."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Control\" means What stays the same.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Control** = What stays the same.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
