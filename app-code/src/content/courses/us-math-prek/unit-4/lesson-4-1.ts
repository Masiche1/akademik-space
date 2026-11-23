import type { Lesson } from "../../../types.ts";

export const lesson41: Lesson = {
  id: "mpk-u4-lesson-4-1",
  code: "4-1",
  title: "Compare Lengths",
  goal: "I CAN tell which object is longer or shorter.",
  standards: ["ELOF-PK.MATH.MEAS.1"],
  vocabulary: [
    { term: "Longer", definition: "Greater length; stretches farther." },
    { term: "Shorter", definition: "Less length." },
    { term: "Tall", definition: "Greater height." },
    { term: "Measure", definition: "Find out how long, tall or heavy something is." },
    { term: "Compare", definition: "Look at two things and say how they are different." },
  ],
  concepts: [
    {
      id: "mpk-u4-compare-length",
      title: "Comparing lengths",
      skill: "Directly compare two objects by length.",
      lesson: {
        sections: [
          {
            heading: "Line them up",
            body: "To compare lengths, **line up one end** of both objects and see which sticks out farther. The one that sticks out is **longer**.",
          },
          {
            heading: "Use words",
            body: "Say **longer than**, **shorter than**, or **the same length**. 'The pencil is longer than the crayon.'",
          },
        ],
        keyFormulas: [
          { name: "Compare length", statement: "Line up ends; the object that sticks out is longer." },
        ],
        workedExample: {
          problem: "A ribbon is 5 blocks long. A string is 3 blocks long. Which is longer?",
          solution: "5 > 3, so the **ribbon is longer**.",
        },
      },
      questions: [
        {
          id: "mpk-u4-compare-length-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is longer: a pencil or a crayon?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The crayon"
                    },
                    {
                              "id": "b",
                              "text": "The pencil"
                    },
                    {
                              "id": "c",
                              "text": "They are the same"
                    },
                    {
                              "id": "d",
                              "text": "Cannot tell"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "A pencil is usually longer than a crayon."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "A pencil is usually longer than a crayon.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**The pencil**",
          "commonErrors": [
                    "Picks the thicker-looking object."
          ]
},
        },
        {
          id: "mpk-u4-compare-length-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Two sticks are lined up at one end. The red stick sticks out farther. The red stick is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "shorter"
                    },
                    {
                              "id": "b",
                              "text": "longer"
                    },
                    {
                              "id": "c",
                              "text": "the same"
                    },
                    {
                              "id": "d",
                              "text": "heavier"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Sticking out farther means longer."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Sticking out farther means longer.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Longer**",
          "commonErrors": [
                    "Thinks sticking out means shorter."
          ]
},
        },
        {
          id: "mpk-u4-compare-length-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "A train is 8 cubes long. A car is 4 cubes long. How many cubes longer is the train?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Longer by",
                              "answer": 4
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "8 - 4 = 4."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "8 - 4 = 4.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$4$",
          "commonErrors": [
                    "Adds 8 + 4."
          ]
},
        },
        {
          id: "mpk-u4-compare-length-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "To compare fairly, where should the objects start?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "At opposite ends"
                    },
                    {
                              "id": "b",
                              "text": "At the same end, lined up"
                    },
                    {
                              "id": "c",
                              "text": "Anywhere"
                    },
                    {
                              "id": "d",
                              "text": "On top of each other"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Lining up one end makes the comparison fair."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Lining up one end makes the comparison fair.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Same end, lined up**",
          "commonErrors": [
                    "Compares without lining up."
          ]
},
        },
        {
          id: "mpk-u4-compare-length-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "You have a short stick and a long stick. Explain how you would show which is longer.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Line up ends",
                              "statement": "Put one end of each stick together and look at the other ends."
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        {
                                                  "reasoning": "The stick whose far end sticks out is longer.",
                                                  "marks": 1,
                                                  "markCode": "M"
                                        },
                                        {
                                                  "reasoning": "Say 'longer than' or 'shorter than'.",
                                                  "marks": 1,
                                                  "markCode": "A"
                                        }
                              ],
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "**Line up the ends; the one that sticks out is longer.**",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": [
                    "Just guesses without lining up.",
                    "Compares the wrong ends."
          ]
},
        },
        {
          id: "mpk-u4-compare-length-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Longer\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Less length."
                    },
                    {
                              "id": "b",
                              "text": "Greater length; stretches farther."
                    },
                    {
                              "id": "c",
                              "text": "Greater height."
                    },
                    {
                              "id": "d",
                              "text": "Find out how long, tall or heavy something is."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Longer\" means Greater length; stretches farther."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Longer\" means Greater length; stretches farther.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Longer** = Greater length; stretches farther.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "mpk-u4-compare-length-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Shorter\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Greater height."
                    },
                    {
                              "id": "b",
                              "text": "Find out how long, tall or heavy something is."
                    },
                    {
                              "id": "c",
                              "text": "Look at two things and say how they are different."
                    },
                    {
                              "id": "d",
                              "text": "Less length."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Shorter\" means Less length."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Shorter\" means Less length.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Shorter** = Less length.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "mpk-u4-compare-length-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Tall\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Find out how long, tall or heavy something is."
                    },
                    {
                              "id": "b",
                              "text": "Greater height."
                    },
                    {
                              "id": "c",
                              "text": "Look at two things and say how they are different."
                    },
                    {
                              "id": "d",
                              "text": "Greater length; stretches farther."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Tall\" means Greater height."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Tall\" means Greater height.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Tall** = Greater height.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
