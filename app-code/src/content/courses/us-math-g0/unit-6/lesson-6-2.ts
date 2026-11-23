import type { Lesson } from "../../../types.ts";

export const lesson62: Lesson = {
  id: "m0-u6-lesson-6-2",
  code: "6-2",
  title: "Compare Weights",
  goal: "I CAN compare two objects by weight using a balance scale.",
  standards: ["K.MD.A.2"],
  vocabulary: [
    { term: "Weight", definition: "How heavy something is." },
    { term: "Heavy", definition: "Weighs a lot." },
    { term: "Light", definition: "Weighs a little." },
    { term: "Balance", definition: "A scale that compares weight." },
    { term: "Heavier", definition: "Weighs more." },
    { term: "Lighter", definition: "Weighs less." },
    { term: "Sink", definition: "Go down in water due to weight." },
  ],
  concepts: [
    {
      id: "m0-u6-compare-weight",
      title: "Comparing weights",
      skill: "Compare objects by weight using a balance scale or by lifting.",
      lesson: {
        sections: [
          {
            heading: "Heavy and light",
            body: "**Weight** is how heavy something is. A rock is **heavy**; a feather is **light**. You can compare by lifting or with a **balance scale**.",
          },
          {
            heading: "Using a balance",
            body: "On a balance scale, the **heavier** object makes its side go **down**; the **lighter** side goes **up**. This shows which weighs more.",
          },
        ],
        keyFormulas: [
          { name: "Compare weight", statement: "Heavier side goes down on balance scale." },
        ],
        workedExample: {
          problem: "On a balance, a rock side goes down and a feather side goes up. Which is heavier?",
          solution: "The **rock** is heavier — its side went down.",
        },
      },
      questions: [
        {
          id: "m0-u6-compare-weight-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is heavier: a rock or a feather?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "feather"
                    },
                    {
                              "id": "b",
                              "text": "rock"
                    },
                    {
                              "id": "c",
                              "text": "they weigh the same"
                    },
                    {
                              "id": "d",
                              "text": "cannot tell"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Rock is much heavier than feather."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Rock is much heavier than feather.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**rock**",
          "commonErrors": [
                    "Picks feather."
          ]
},
        },
        {
          id: "m0-u6-compare-weight-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "On a balance scale, the heavier object makes its side...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "go up"
                    },
                    {
                              "id": "b",
                              "text": "go down"
                    },
                    {
                              "id": "c",
                              "text": "stay level"
                    },
                    {
                              "id": "d",
                              "text": "disappear"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Heavier side goes down."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Heavier side goes down.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**go down**",
          "commonErrors": [
                    "Reverses rule."
          ]
},
        },
        {
          id: "m0-u6-compare-weight-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Compare two objects by weight (lift them or use a balance). Which is heavier? Which is lighter?",
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
                                                  "skill",
                                                  "Compare weight",
                                                  "Heavier = weighs more."
                                        ]
                              ]
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        [
                                                  "skill",
                                                  "Compare weight",
                                                  "Heavier = weighs more."
                                        ]
                              ],
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": [
                    {
                              "reasoning": "Compares weights correctly.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "commonErrors": [
                    "**e.g., 'Book is heavier than pencil.'**"
          ]
},
        },
        {
          id: "m0-u6-compare-weight-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Light' means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "weighs a lot"
                    },
                    {
                              "id": "b",
                              "text": "weighs a little"
                    },
                    {
                              "id": "c",
                              "text": "very big"
                    },
                    {
                              "id": "d",
                              "text": "very hard"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Light = weighs a little."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Light = weighs a little.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**weighs a little**",
          "commonErrors": [
                    "Confuses with heavy."
          ]
},
        },
        {
          id: "m0-u6-compare-weight-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Use a balance scale to compare two objects. Which side went down? What does that tell you?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Balance scale",
                              "statement": "Down side = heavier."
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        {
                                                  "reasoning": "Uses scale correctly.",
                                                  "marks": 1,
                                                  "markCode": "M"
                                        },
                                        {
                                                  "reasoning": "Interprets result.",
                                                  "marks": 1,
                                                  "markCode": "A"
                                        }
                              ],
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "**Heavier side went down = that object weighs more**",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": [
                    "Cannot use scale.",
                    "Wrong interpretation."
          ]
},
        },
        {
          id: "m0-u6-compare-weight-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Weight\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Weighs a lot."
                    },
                    {
                              "id": "b",
                              "text": "How heavy something is."
                    },
                    {
                              "id": "c",
                              "text": "Weighs a little."
                    },
                    {
                              "id": "d",
                              "text": "A scale that compares weight."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Weight\" means How heavy something is."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Weight\" means How heavy something is.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Weight** = How heavy something is.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m0-u6-compare-weight-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Heavy\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Weighs a little."
                    },
                    {
                              "id": "b",
                              "text": "A scale that compares weight."
                    },
                    {
                              "id": "c",
                              "text": "Weighs more."
                    },
                    {
                              "id": "d",
                              "text": "Weighs a lot."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Heavy\" means Weighs a lot."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Heavy\" means Weighs a lot.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Heavy** = Weighs a lot.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m0-u6-compare-weight-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Light\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A scale that compares weight."
                    },
                    {
                              "id": "b",
                              "text": "Weighs a little."
                    },
                    {
                              "id": "c",
                              "text": "Weighs more."
                    },
                    {
                              "id": "d",
                              "text": "Weighs less."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Light\" means Weighs a little."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Light\" means Weighs a little.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Light** = Weighs a little.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
