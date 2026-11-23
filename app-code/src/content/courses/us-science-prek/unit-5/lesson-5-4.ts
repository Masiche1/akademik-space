import type { Lesson } from "../../../types.ts";

export const lesson54: Lesson = {
  id: "spk-u5-lesson-5-4",
  code: "5-4",
  title: "Test Materials",
  goal: "I CAN test materials to see how they behave.",
  standards: ["ELOF-PK.SCI.MATERIAL.4"],
  vocabulary: [
    { term: "Test", definition: "Try something to see what happens." },
    { term: "Bend", definition: "Flex or curve." },
    { term: "Squeeze", definition: "Press with fingers." },
    { term: "Drop", definition: "Let fall to test strength." },
    { term: "Soak", definition: "Leave in water to test waterproof." },
    { term: "Observe", definition: "Watch what happens." },
  ],
  concepts: [
    {
      id: "spk-u5-materials-test",
      title: "Testing materials",
      skill: "Test materials by bending, squeezing, soaking and dropping.",
      lesson: {
        sections: [
          {
            heading: "Test to find out",
            body: "You can **test** materials to learn their properties: **bend** them (are they flexible?), **squeeze** them (are they soft?), **soak** them (are they waterproof?), **drop** them (are they durable?).",
          },
          {
            heading: "Observe results",
            body: "After each test, **observe** what happened: 'The plastic bent but didn't break' or 'The paper got soggy in water.' Record your findings.",
          },
        ],
        keyFormulas: [
          { name: "Test materials", statement: "Bend=sflexibility, squeeze=softness, soak=waterproof, drop=durability." },
        ],
        workedExample: {
          problem: "How would you test if a material is waterproof?",
          solution: "**Soak** it in water — if water soaks through, it is not waterproof; if it beads up, it is waterproof.",
        },
      },
      questions: [
        {
          id: "spk-u5-materials-test-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "To test if a material is flexible, you would...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "soak it"
                    },
                    {
                              "id": "b",
                              "text": "try to bend it"
                    },
                    {
                              "id": "c",
                              "text": "drop it"
                    },
                    {
                              "id": "d",
                              "text": "freeze it"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Bending tests flexibility."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Bending tests flexibility.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Bend it**",
          "commonErrors": [
                    "Picks wrong test."
          ]
},
        },
        {
          id: "spk-u5-materials-test-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "To test if a material is waterproof, you would...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "bend it"
                    },
                    {
                              "id": "b",
                              "text": "soak it in water"
                    },
                    {
                              "id": "c",
                              "text": "squeeze it"
                    },
                    {
                              "id": "d",
                              "text": "drop it"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Soaking in water tests waterproofness."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Soaking in water tests waterproofness.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Soak in water**",
          "commonErrors": [
                    "Picks wrong test."
          ]
},
        },
        {
          id: "spk-u5-materials-test-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Test a material (bend, squeeze, or soak). What happened? What property did you find?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Test materials",
                              "statement": "Test + observe + property."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Tests material + describes result.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'I bent the plastic — it flexed but didn't break = flexible.'**",
          "commonErrors": [
                    "No test.",
                    "Cannot describe result."
          ]
},
        },
        {
          id: "spk-u5-materials-test-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "If a material gets soggy in water, it is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "waterproof"
                    },
                    {
                              "id": "b",
                              "text": "not waterproof (absorbent)"
                    },
                    {
                              "id": "c",
                              "text": "very strong"
                    },
                    {
                              "id": "d",
                              "text": "metal"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Soggy = absorbed water = not waterproof."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Soggy = absorbed water = not waterproof.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Not waterproof**",
          "commonErrors": [
                    "Reverses meaning."
          ]
},
        },
        {
          id: "spk-u5-materials-test-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Test three materials with different tests (bend, soak, drop). Record what happened and what property you discovered for each.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Test materials",
                              "statement": "3 tests + properties."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Tests 3 materials.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Records properties found.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'Plastic bent (flexible); paper soaked (absorbent); rock dropped (durable).'**",
          "commonErrors": [
                    "Fewer than 3 tests.",
                    "No properties."
          ]
},
        },
        {
          id: "spk-u5-materials-test-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Test\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Flex or curve."
                    },
                    {
                              "id": "b",
                              "text": "Try something to see what happens."
                    },
                    {
                              "id": "c",
                              "text": "Press with fingers."
                    },
                    {
                              "id": "d",
                              "text": "Let fall to test strength."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Test\" means Try something to see what happens."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Test\" means Try something to see what happens.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Test** = Try something to see what happens.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "spk-u5-materials-test-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Bend\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Press with fingers."
                    },
                    {
                              "id": "b",
                              "text": "Let fall to test strength."
                    },
                    {
                              "id": "c",
                              "text": "Leave in water to test waterproof."
                    },
                    {
                              "id": "d",
                              "text": "Flex or curve."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Bend\" means Flex or curve."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Bend\" means Flex or curve.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Bend** = Flex or curve.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "spk-u5-materials-test-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Squeeze\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Let fall to test strength."
                    },
                    {
                              "id": "b",
                              "text": "Press with fingers."
                    },
                    {
                              "id": "c",
                              "text": "Leave in water to test waterproof."
                    },
                    {
                              "id": "d",
                              "text": "Watch what happens."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Squeeze\" means Press with fingers."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Squeeze\" means Press with fingers.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Squeeze** = Press with fingers.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
