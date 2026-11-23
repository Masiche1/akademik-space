import type { Lesson } from "../../../types.ts";

export const lesson61: Lesson = {
  id: "mpk-u6-lesson-6-1",
  code: "6-1",
  title: "AB Patterns",
  goal: "I CAN spot and continue simple AB patterns.",
  standards: ["ELOF-PK.MATH.PAT.1"],
  vocabulary: [
    { term: "Pattern", definition: "Something that repeats in the same way." },
    { term: "AB pattern", definition: "Two different things alternating: A B A B." },
    { term: "Repeat", definition: "Do again in the same order." },
    { term: "Core", definition: "The smallest part that repeats." },
    { term: "Continue", definition: "Keep the pattern going." },
  ],
  concepts: [
    {
      id: "mpk-u6-ab-patterns",
      title: "AB patterns",
      skill: "Recognize and continue AB patterns.",
      lesson: {
        sections: [
          {
            heading: "What is a pattern?",
            body: "A **pattern** repeats the same way: red, blue, red, blue. The two colors **alternate** — A B A B.",
          },
          {
            heading: "Continue the pattern",
            body: "To continue, ask: what comes next? After blue comes red because the pattern repeats AB AB AB.",
          },
        ],
        keyFormulas: [
          { name: "AB pattern", statement: "A B A B A B — two items alternating" },
        ],
        workedExample: {
          problem: "Continue: triangle, circle, triangle, circle, __",
          solution: "The pattern is triangle-circle repeating, so next is **triangle**.",
        },
      },
      questions: [
        {
          id: "mpk-u6-ab-patterns-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Continue: red, blue, red, blue, __",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "red"
                    },
                    {
                              "id": "b",
                              "text": "blue"
                    },
                    {
                              "id": "c",
                              "text": "green"
                    },
                    {
                              "id": "d",
                              "text": "red blue"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Pattern AB repeats: after blue comes red."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Pattern AB repeats: after blue comes red.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Red**",
          "commonErrors": [
                    "Repeats the last item instead of alternating."
          ]
},
        },
        {
          id: "mpk-u6-ab-patterns-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is an AB pattern?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "circle circle circle"
                    },
                    {
                              "id": "b",
                              "text": "triangle circle triangle circle"
                    },
                    {
                              "id": "c",
                              "text": "red red blue blue"
                    },
                    {
                              "id": "d",
                              "text": "star moon star moon star moon"
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Star-moon alternating = AB."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Star-moon alternating = AB.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Star moon star moon**",
          "commonErrors": [
                    "Picks a pattern with same items or pairs."
          ]
},
        },
        {
          id: "mpk-u6-ab-patterns-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "In the pattern circle, triangle, circle, triangle, circle, triangle, how many triangles are there?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Triangles",
                              "answer": 3
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Count triangles: positions 2,4,6 = 3."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Count triangles: positions 2,4,6 = 3.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$3$",
          "commonErrors": [
                    "Counts all shapes."
          ]
},
        },
        {
          id: "mpk-u6-ab-patterns-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "What comes next: apple, banana, apple, banana, apple, __",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "apple"
                    },
                    {
                              "id": "b",
                              "text": "banana"
                    },
                    {
                              "id": "c",
                              "text": "grape"
                    },
                    {
                              "id": "d",
                              "text": "apple banana"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "AB pattern: after apple comes banana."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "AB pattern: after apple comes banana.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Banana**",
          "commonErrors": [
                    "Repeats apple because it was last-but-one."
          ]
},
        },
        {
          id: "mpk-u6-ab-patterns-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Make your own AB pattern using two different shapes or colors. Then say what comes next after the last item.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Alternate two items",
                              "statement": "A B A B A B — two different items alternating."
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        {
                                                  "reasoning": "Creates a valid AB pattern.",
                                                  "marks": 1,
                                                  "markCode": "M"
                                        },
                                        {
                                                  "reasoning": "Correctly predicts the next item.",
                                                  "marks": 1,
                                                  "markCode": "A"
                                        }
                              ],
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "**e.g., circle-triangle-circle-triangle -> next circle**",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": [
                    "Repeats same item twice in a row.",
                    "Cannot say what comes next."
          ]
},
        },
        {
          id: "mpk-u6-ab-patterns-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Pattern\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Two different things alternating: A B A B."
                    },
                    {
                              "id": "b",
                              "text": "Something that repeats in the same way."
                    },
                    {
                              "id": "c",
                              "text": "Do again in the same order."
                    },
                    {
                              "id": "d",
                              "text": "The smallest part that repeats."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Pattern\" means Something that repeats in the same way."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Pattern\" means Something that repeats in the same way.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Pattern** = Something that repeats in the same way.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "mpk-u6-ab-patterns-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"AB pattern\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Do again in the same order."
                    },
                    {
                              "id": "b",
                              "text": "The smallest part that repeats."
                    },
                    {
                              "id": "c",
                              "text": "Keep the pattern going."
                    },
                    {
                              "id": "d",
                              "text": "Two different things alternating: A B A B."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"AB pattern\" means Two different things alternating: A B A B."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"AB pattern\" means Two different things alternating: A B A B.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**AB pattern** = Two different things alternating: A B A B.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "mpk-u6-ab-patterns-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Repeat\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The smallest part that repeats."
                    },
                    {
                              "id": "b",
                              "text": "Do again in the same order."
                    },
                    {
                              "id": "c",
                              "text": "Keep the pattern going."
                    },
                    {
                              "id": "d",
                              "text": "Something that repeats in the same way."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Repeat\" means Do again in the same order."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Repeat\" means Do again in the same order.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Repeat** = Do again in the same order.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
