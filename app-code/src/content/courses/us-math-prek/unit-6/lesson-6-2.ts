import type { Lesson } from "../../../types.ts";

export const lesson62: Lesson = {
  id: "mpk-u6-lesson-6-2",
  code: "6-2",
  title: "ABC and AAB Patterns",
  goal: "I CAN spot patterns with three items or repeated pairs.",
  standards: ["ELOF-PK.MATH.PAT.2"],
  vocabulary: [
    { term: "ABC pattern", definition: "Three different things repeating: A B C A B C." },
    { term: "AAB pattern", definition: "Two of one, then one of another: A A B A A B." },
    { term: "Core", definition: "The smallest repeating part." },
    { term: "Unit", definition: "One full repeat of the pattern." },
    { term: "Sequence", definition: "Items in a set order." },
  ],
  concepts: [
    {
      id: "mpk-u6-abc-patterns",
      title: "More pattern types",
      skill: "Recognize ABC and AAB patterns.",
      lesson: {
        sections: [
          {
            heading: "ABC patterns",
            body: "Three different items repeat: red, blue, green, red, blue, green. The **core** is red-blue-green and it repeats.",
          },
          {
            heading: "AAB patterns",
            body: "Two of one item, then one of another: circle, circle, triangle, circle, circle, triangle. The core is circle-circle-triangle.",
          },
        ],
        keyFormulas: [
          { name: "ABC", statement: "A B C A B C" },
          { name: "AAB", statement: "A A B A A B" },
        ],
        workedExample: {
          problem: "Continue: circle, circle, triangle, circle, circle, triangle, circle, __",
          solution: "Core is circle-circle-triangle; after triangle comes circle-circle, so next two are **circle, circle** then triangle.",
        },
      },
      questions: [
        {
          id: "mpk-u6-abc-patterns-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Continue: red, blue, green, red, blue, green, __",
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
                              "statement": "ABC repeats: after green comes red."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "ABC repeats: after green comes red.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Red**",
          "commonErrors": [
                    "Thinks the pattern is AB."
          ]
},
        },
        {
          id: "mpk-u6-abc-patterns-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is an AAB pattern?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "circle triangle circle triangle"
                    },
                    {
                              "id": "b",
                              "text": "circle circle triangle circle circle triangle"
                    },
                    {
                              "id": "c",
                              "text": "circle triangle square circle triangle square"
                    },
                    {
                              "id": "d",
                              "text": "circle circle circle triangle triangle triangle"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Circle-circle-triangle repeats = AAB."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Circle-circle-triangle repeats = AAB.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Circle circle triangle**",
          "commonErrors": [
                    "Picks ABC or AB instead."
          ]
},
        },
        {
          id: "mpk-u6-abc-patterns-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "In circle, circle, triangle, circle, circle, triangle, how many circles are there?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Circles",
                              "answer": 4
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Count circles: 4."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Count circles: 4.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$4$",
          "commonErrors": [
                    "Counts triangles too."
          ]
},
        },
        {
          id: "mpk-u6-abc-patterns-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "The core of red, blue, green, red, blue, green is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "red"
                    },
                    {
                              "id": "b",
                              "text": "red blue"
                    },
                    {
                              "id": "c",
                              "text": "red blue green"
                    },
                    {
                              "id": "d",
                              "text": "the whole thing"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Core = smallest repeating unit = red-blue-green."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Core = smallest repeating unit = red-blue-green.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Red blue green**",
          "commonErrors": [
                    "Picks only part of the core."
          ]
},
        },
        {
          id: "mpk-u6-abc-patterns-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Create an ABC pattern with three different objects. Say the core and what comes after the last item.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Three items repeating",
                              "statement": "A B C A B C — three different items."
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        {
                                                  "reasoning": "Creates valid ABC pattern.",
                                                  "marks": 1,
                                                  "markCode": "M"
                                        },
                                        {
                                                  "reasoning": "Identifies core and next item correctly.",
                                                  "marks": 1,
                                                  "markCode": "A"
                                        }
                              ],
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "**e.g., circle-triangle-square repeating; next circle**",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": [
                    "Makes an AB pattern instead.",
                    "Wrong core or next item."
          ]
},
        },
        {
          id: "mpk-u6-abc-patterns-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"ABC pattern\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Two of one, then one of another: A A B A A B."
                    },
                    {
                              "id": "b",
                              "text": "Three different things repeating: A B C A B C."
                    },
                    {
                              "id": "c",
                              "text": "The smallest repeating part."
                    },
                    {
                              "id": "d",
                              "text": "One full repeat of the pattern."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"ABC pattern\" means Three different things repeating: A B C A B C."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"ABC pattern\" means Three different things repeating: A B C A B C.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**ABC pattern** = Three different things repeating: A B C A B C.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "mpk-u6-abc-patterns-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"AAB pattern\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The smallest repeating part."
                    },
                    {
                              "id": "b",
                              "text": "One full repeat of the pattern."
                    },
                    {
                              "id": "c",
                              "text": "Items in a set order."
                    },
                    {
                              "id": "d",
                              "text": "Two of one, then one of another: A A B A A B."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"AAB pattern\" means Two of one, then one of another: A A B A A B."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"AAB pattern\" means Two of one, then one of another: A A B A A B.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**AAB pattern** = Two of one, then one of another: A A B A A B.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "mpk-u6-abc-patterns-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Core\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "One full repeat of the pattern."
                    },
                    {
                              "id": "b",
                              "text": "The smallest repeating part."
                    },
                    {
                              "id": "c",
                              "text": "Items in a set order."
                    },
                    {
                              "id": "d",
                              "text": "Three different things repeating: A B C A B C."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Core\" means The smallest repeating part."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Core\" means The smallest repeating part.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Core** = The smallest repeating part.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
