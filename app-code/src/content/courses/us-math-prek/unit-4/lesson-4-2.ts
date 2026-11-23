import type { Lesson } from "../../../types.ts";

export const lesson42: Lesson = {
  id: "mpk-u4-lesson-4-2",
  code: "4-2",
  title: "Compare Weights",
  goal: "I CAN tell which object is heavier or lighter.",
  standards: ["ELOF-PK.MATH.MEAS.2"],
  vocabulary: [
    { term: "Heavy", definition: "Hard to lift; weighs a lot." },
    { term: "Light", definition: "Easy to lift; weighs little." },
    { term: "Weight", definition: "How heavy something is." },
    { term: "Balance", definition: "A tool that compares weights." },
    { term: "Lift", definition: "Pick something up to feel how heavy it is." },
  ],
  concepts: [
    {
      id: "mpk-u4-compare-weight",
      title: "Comparing weights",
      skill: "Compare two objects by how heavy they feel.",
      lesson: {
        sections: [
          {
            heading: "Feel the weight",
            body: "Pick up each object and notice how hard it is to lift. The harder to lift, the **heavier** it is. A feather is **light**; a rock is **heavy**.",
          },
          {
            heading: "Balance scale",
            body: "A balance scale holds one object on each side. The side that goes **down** is heavier.",
          },
        ],
        keyFormulas: [
          { name: "Weight compare", statement: "Heavier = harder to lift; balance tips toward the heavier side." },
        ],
        workedExample: {
          problem: "A feather and a book are on a balance. The book's side goes down. Which is heavier?",
          solution: "The side that goes down is heavier, so the **book is heavier**.",
        },
      },
      questions: [
        {
          id: "mpk-u4-compare-weight-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is heavier: a feather or a rock?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The feather"
                    },
                    {
                              "id": "b",
                              "text": "The rock"
                    },
                    {
                              "id": "c",
                              "text": "They weigh the same"
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
                              "statement": "A rock is much heavier than a feather."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "A rock is much heavier than a feather.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**The rock**",
          "commonErrors": [
                    "Thinks bigger-looking always means heavier."
          ]
},
        },
        {
          id: "mpk-u4-compare-weight-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "On a balance scale, the side with the heavier object...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "goes up"
                    },
                    {
                              "id": "b",
                              "text": "stays level"
                    },
                    {
                              "id": "c",
                              "text": "goes down"
                    },
                    {
                              "id": "d",
                              "text": "disappears"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "The heavier side pulls down."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The heavier side pulls down.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Goes down**",
          "commonErrors": [
                    "Reverses which side goes down."
          ]
},
        },
        {
          id: "mpk-u4-compare-weight-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "A backpack weighs 5 blocks. A lunchbox weighs 2 blocks. How many blocks heavier is the backpack?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Heavier by",
                              "answer": 3
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "5 - 2 = 3."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "5 - 2 = 3.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$3$",
          "commonErrors": [
                    "Adds 5 + 2."
          ]
},
        },
        {
          id: "mpk-u4-compare-weight-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is a fair way to compare weight?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Guess by size"
                    },
                    {
                              "id": "b",
                              "text": "Hold each object and feel"
                    },
                    {
                              "id": "c",
                              "text": "Drop them"
                    },
                    {
                              "id": "d",
                              "text": "Smell them"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Feeling how hard each is to lift compares weight."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Feeling how hard each is to lift compares weight.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Hold and feel**",
          "commonErrors": [
                    "Uses size alone, which can mislead."
          ]
},
        },
        {
          id: "mpk-u4-compare-weight-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Explain how you could find out whether your shoe or your book is heavier.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Lift or balance",
                              "statement": "Pick each up, or put them on a balance scale."
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        {
                                                  "reasoning": "The one that is harder to lift (or tips the scale down) is heavier.",
                                                  "marks": 1,
                                                  "markCode": "M"
                                        },
                                        {
                                                  "reasoning": "Name which is heavier.",
                                                  "marks": 1,
                                                  "markCode": "A"
                                        }
                              ],
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "**Lift both or use a balance; the heavier one is harder to lift.**",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": [
                    "Guesses by size only.",
                    "Forgets to compare both objects."
          ]
},
        },
        {
          id: "mpk-u4-compare-weight-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Heavy\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Easy to lift; weighs little."
                    },
                    {
                              "id": "b",
                              "text": "Hard to lift; weighs a lot."
                    },
                    {
                              "id": "c",
                              "text": "How heavy something is."
                    },
                    {
                              "id": "d",
                              "text": "A tool that compares weights."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Heavy\" means Hard to lift; weighs a lot."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Heavy\" means Hard to lift; weighs a lot.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Heavy** = Hard to lift; weighs a lot.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "mpk-u4-compare-weight-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Light\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "How heavy something is."
                    },
                    {
                              "id": "b",
                              "text": "A tool that compares weights."
                    },
                    {
                              "id": "c",
                              "text": "Pick something up to feel how heavy it is."
                    },
                    {
                              "id": "d",
                              "text": "Easy to lift; weighs little."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Light\" means Easy to lift; weighs little."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Light\" means Easy to lift; weighs little.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Light** = Easy to lift; weighs little.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "mpk-u4-compare-weight-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Weight\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A tool that compares weights."
                    },
                    {
                              "id": "b",
                              "text": "How heavy something is."
                    },
                    {
                              "id": "c",
                              "text": "Pick something up to feel how heavy it is."
                    },
                    {
                              "id": "d",
                              "text": "Hard to lift; weighs a lot."
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
      ],
    },
  ],
};
