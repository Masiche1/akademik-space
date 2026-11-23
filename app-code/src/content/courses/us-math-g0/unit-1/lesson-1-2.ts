import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "m0-u1-lesson-1-2",
  code: "1-2",
  title: "Count in Order",
  goal: "I CAN say numbers in order from 1 to 20.",
  standards: ["K.CC.A.1"],
  vocabulary: [
    { term: "Number names", definition: "The words we say when counting: one, two, three..." },
    { term: "Sequence", definition: "Numbers in their fixed order." },
    { term: "Skip", definition: "Leave out a number by mistake." },
    { term: "Repeat", definition: "Say the sequence again." },
    { term: "Pattern", definition: "Something that repeats in the same way." },
  ],
  concepts: [
    {
      id: "m0-u1-count-order",
      title: "Counting in order",
      skill: "Recite number names in order from 1 to 20 without skipping.",
      lesson: {
        sections: [
          {
            heading: "Numbers have an order",
            body: "Number names always go in the same **sequence**: 1, 2, 3, 4, 5... We never skip or repeat. This order is called **counting**.",
          },
          {
            heading: "Practice the chant",
            body: "Say the numbers aloud in order. If you skip one, start over. Singing number songs helps the order stick in your memory.",
          },
        ],
        keyFormulas: [
          { name: "Counting order", statement: "1, 2, 3, 4, 5, ... always in the same sequence." },
        ],
        workedExample: {
          problem: "What number comes after 9 when counting?",
          solution: "After 9 comes **10** — we say 'ten'.",
        },
      },
      questions: [
        {
          id: "m0-u1-count-order-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What number comes after 7?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "6"
                    },
                    {
                              "id": "b",
                              "text": "8"
                    },
                    {
                              "id": "c",
                              "text": "9"
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
                              "statement": "After 7 comes 8."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "After 7 comes 8.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**8**",
          "commonErrors": [
                    "Picks 6 or 9."
          ]
},
        },
        {
          id: "m0-u1-count-order-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is the correct counting order?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "1, 2, 4, 3"
                    },
                    {
                              "id": "b",
                              "text": "1, 2, 3, 4"
                    },
                    {
                              "id": "c",
                              "text": "1, 3, 2, 4"
                    },
                    {
                              "id": "d",
                              "text": "2, 1, 3, 4"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Correct order is 1, 2, 3, 4 with no skips."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Correct order is 1, 2, 3, 4 with no skips.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**1, 2, 3, 4**",
          "commonErrors": [
                    "Picks sequence with a skip."
          ]
},
        },
        {
          id: "m0-u1-count-order-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Count aloud from 1 to 10. Did you skip any numbers?",
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
                                                  "Count in order",
                                                  "Recite 1-10 in sequence."
                                        ]
                              ]
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        [
                                                  "skill",
                                                  "Count in order",
                                                  "Recite 1-10 in sequence."
                                        ]
                              ],
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": [
                    {
                              "reasoning": "Counts 1-10 without skipping.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "commonErrors": [
                    "**1-10 in order, no skips**"
          ]
},
        },
        {
          id: "m0-u1-count-order-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What number comes before 5?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "4"
                    },
                    {
                              "id": "b",
                              "text": "6"
                    },
                    {
                              "id": "c",
                              "text": "3"
                    },
                    {
                              "id": "d",
                              "text": "7"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Before 5 comes 4."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Before 5 comes 4.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**4**",
          "commonErrors": [
                    "Picks 6."
          ]
},
        },
        {
          id: "m0-u1-count-order-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Count forward from 8: say the next 3 numbers. What number do you reach?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Count on",
                              "statement": "Start at 8, count forward 3."
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        {
                                                  "reasoning": "Says 9, 10, 11.",
                                                  "marks": 1,
                                                  "markCode": "M"
                                        },
                                        {
                                                  "reasoning": "Reaches 11.",
                                                  "marks": 1,
                                                  "markCode": "A"
                                        }
                              ],
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "**11**",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": [
                    "Starts at wrong number.",
                    "Stops early."
          ]
},
        },
        {
          id: "m0-u1-count-order-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Number names\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Numbers in their fixed order."
                    },
                    {
                              "id": "b",
                              "text": "The words we say when counting: one, two, three..."
                    },
                    {
                              "id": "c",
                              "text": "Leave out a number by mistake."
                    },
                    {
                              "id": "d",
                              "text": "Say the sequence again."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Number names\" means The words we say when counting: one, two, three..."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Number names\" means The words we say when counting: one, two, three...",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Number names** = The words we say when counting: one, two, three...",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m0-u1-count-order-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Sequence\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Leave out a number by mistake."
                    },
                    {
                              "id": "b",
                              "text": "Say the sequence again."
                    },
                    {
                              "id": "c",
                              "text": "Something that repeats in the same way."
                    },
                    {
                              "id": "d",
                              "text": "Numbers in their fixed order."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Sequence\" means Numbers in their fixed order."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Sequence\" means Numbers in their fixed order.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Sequence** = Numbers in their fixed order.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m0-u1-count-order-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Skip\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Say the sequence again."
                    },
                    {
                              "id": "b",
                              "text": "Leave out a number by mistake."
                    },
                    {
                              "id": "c",
                              "text": "Something that repeats in the same way."
                    },
                    {
                              "id": "d",
                              "text": "The words we say when counting: one, two, three..."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Skip\" means Leave out a number by mistake."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Skip\" means Leave out a number by mistake.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Skip** = Leave out a number by mistake.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
