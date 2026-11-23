import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "m6-u2-lesson-2-1",
  code: "2-1",
  title: "Integers",
  goal: "I CAN compare, order and compute with integers.",
  standards: ["6.NS.C.5"],
  vocabulary: [
    { term: "Integer", definition: "Whole number + negative." },
    { term: "Positive", definition: "> 0." },
    { term: "Negative", definition: "< 0." },
    { term: "Zero", definition: "Neither." },
    { term: "Absolute value", definition: "Distance from zero." },
    { term: "Number line", definition: "Visual order." },
    { term: "Opposite", definition: "Same distance, other side." },
    { term: "Order", definition: "Sort numbers." },
  ],
  concepts: [
    {
      id: "m6-u2-integers",
      title: "Integers",
      skill: "Compare, order and compute with integers.",
      lesson: {
        sections: [
          {
            heading: "Positive and negative",
            body: "**Integers** include positive numbers, negative numbers, and zero. On a **number line**, negatives are left of zero, positives right.",
          },
          {
            heading: "Absolute value",
            body: "**Absolute value** = distance from zero: |−5| = 5, |5| = 5. **Opposite** numbers are same distance, other side: −(−5) = 5.",
          },
        ],
        keyFormulas: [
          { name: "Integer", statement: "..., -3, -2, -1, 0, 1, 2, 3, ..." },
          { name: "Absolute", statement: "|a| = distance from 0." },
        ],
        workedExample: {
          problem: "Order: -5, 3, -2, 0, 4.",
          solution: "**-5 < -2 < 0 < 3 < 4**",
        },
      },
      questions: [
        {
          id: "m6-u2-integers-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The absolute value of -7 is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "-7"
                    },
                    {
                              "id": "b",
                              "text": "7"
                    },
                    {
                              "id": "c",
                              "text": "0"
                    },
                    {
                              "id": "d",
                              "text": "14"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "|-7| = 7."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "|-7| = 7.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "7",
          "commonErrors": [
                    "Keeps negative."
          ]
},
        },
        {
          id: "m6-u2-integers-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is the smallest? -3, -5, 2, 0",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "-3"
                    },
                    {
                              "id": "b",
                              "text": "-5"
                    },
                    {
                              "id": "c",
                              "text": "2"
                    },
                    {
                              "id": "d",
                              "text": "0"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "-5 is smallest."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "-5 is smallest.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "-5",
          "commonErrors": [
                    "Wrong order."
          ]
},
        },
        {
          id: "m6-u2-integers-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Order these integers: -8, 5, -3, 0, 7, -1 from least to greatest.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Integers",
                              "statement": "-8 < -3 < -1 < 0 < 5 < 7."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Orders correctly.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**-8 < -3 < -1 < 0 < 5 < 7**",
          "commonErrors": [
                    "Wrong order.",
                    "Missing numbers."
          ]
},
        },
        {
          id: "m6-u2-integers-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The opposite of -4 is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "-4"
                    },
                    {
                              "id": "b",
                              "text": "4"
                    },
                    {
                              "id": "c",
                              "text": "0"
                    },
                    {
                              "id": "d",
                              "text": "8"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Opposite = 4."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Opposite = 4.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "4",
          "commonErrors": [
                    "Wrong opposite."
          ]
},
        },
        {
          id: "m6-u2-integers-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Compare -6 and -2 using a number line. Which is greater? Explain.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Integers",
                              "statement": "-2 > -6."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Names greater.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Explains number line.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**-2 > -6; -2 is closer to zero on number line.**",
          "commonErrors": [
                    "Wrong comparison.",
                    "No explanation."
          ]
},
        },
        {
          id: "m6-u2-integers-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Integer\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "> 0."
                    },
                    {
                              "id": "b",
                              "text": "Whole number + negative."
                    },
                    {
                              "id": "c",
                              "text": "< 0."
                    },
                    {
                              "id": "d",
                              "text": "Neither."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Integer\" means Whole number + negative."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Integer\" means Whole number + negative.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Integer** = Whole number + negative.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m6-u2-integers-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Positive\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "< 0."
                    },
                    {
                              "id": "b",
                              "text": "Neither."
                    },
                    {
                              "id": "c",
                              "text": "Distance from zero."
                    },
                    {
                              "id": "d",
                              "text": "> 0."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Positive\" means > 0."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Positive\" means > 0.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Positive** = > 0.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m6-u2-integers-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Negative\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Neither."
                    },
                    {
                              "id": "b",
                              "text": "< 0."
                    },
                    {
                              "id": "c",
                              "text": "Distance from zero."
                    },
                    {
                              "id": "d",
                              "text": "Visual order."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Negative\" means < 0."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Negative\" means < 0.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Negative** = < 0.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
