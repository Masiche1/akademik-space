import type { Lesson } from "../../../types.ts";

export const lesson64: Lesson = {
  id: "mpk-u6-lesson-6-4",
  code: "6-4",
  title: "Create Your Own Patterns",
  goal: "I CAN make and extend patterns with different cores.",
  standards: ["ELOF-PK.MATH.PAT.3"],
  vocabulary: [
    { term: "Create", definition: "Make something new." },
    { term: "Extend", definition: "Make a pattern longer." },
    { term: "Design", definition: "Plan and make a pattern." },
    { term: "Rule", definition: "The rule that repeats." },
    { term: "Variety", definition: "Different kinds of patterns." },
  ],
  concepts: [
    {
      id: "mpk-u6-pattern-create",
      title: "Creating patterns",
      skill: "Design, extend and describe original patterns.",
      lesson: {
        sections: [
          {
            heading: "Make a pattern",
            body: "Choose a **core** (like AB or ABC) and repeat it: red-blue-red-blue. You can use colors, shapes, sounds or movements.",
          },
          {
            heading: "Extend and describe",
            body: "To extend, keep repeating the core. To describe, name the core: 'My pattern is red-blue repeating.'",
          },
        ],
        keyFormulas: [
          { name: "Create", statement: "Choose a core; repeat it to make a pattern." },
        ],
        workedExample: {
          problem: "Extend: circle, triangle, square, circle, triangle, square, __ __",
          solution: "Core circle-triangle-square repeats: next two are **circle, triangle**.",
        },
      },
      questions: [
        {
          id: "mpk-u6-pattern-create-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Extend: star, moon, star, moon, __ __",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "star moon"
                    },
                    {
                              "id": "b",
                              "text": "moon star"
                    },
                    {
                              "id": "c",
                              "text": "star star"
                    },
                    {
                              "id": "d",
                              "text": "moon moon"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Core star-moon repeats: next two are star-moon."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Core star-moon repeats: next two are star-moon.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Star moon**",
          "commonErrors": [
                    "Starts the core over wrong."
          ]
},
        },
        {
          id: "mpk-u6-pattern-create-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A pattern's 'core' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "the longest part"
                    },
                    {
                              "id": "b",
                              "text": "the smallest part that repeats"
                    },
                    {
                              "id": "c",
                              "text": "the first item only"
                    },
                    {
                              "id": "d",
                              "text": "the whole pattern"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Core = smallest repeating unit."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Core = smallest repeating unit.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Smallest repeating part**",
          "commonErrors": [
                    "Thinks core means the whole thing."
          ]
},
        },
        {
          id: "mpk-u6-pattern-create-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Pattern: A B A B A B A B. How many B's are there?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "B's",
                              "answer": 4
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Count B: positions 2,4,6,8 = 4."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Count B: positions 2,4,6,8 = 4.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$4$",
          "commonErrors": [
                    "Counts A's too."
          ]
},
        },
        {
          id: "mpk-u6-pattern-create-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which pattern has core 'red blue green'?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "red blue red blue"
                    },
                    {
                              "id": "b",
                              "text": "red blue green red blue green"
                    },
                    {
                              "id": "c",
                              "text": "red red blue blue green green"
                    },
                    {
                              "id": "d",
                              "text": "red blue green green blue red"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "ABC repeating = core red-blue-green."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "ABC repeating = core red-blue-green.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Red blue green repeating**",
          "commonErrors": [
                    "Picks wrong core."
          ]
},
        },
        {
          id: "mpk-u6-pattern-create-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Create an ABC pattern using three different classroom objects. Then extend it by two more items and explain your rule.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Choose ABC core",
                              "statement": "Three different items repeating."
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
                                                  "reasoning": "Extends correctly and explains the rule.",
                                                  "marks": 1,
                                                  "markCode": "A"
                                        }
                              ],
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "**e.g., book-pen-cup repeating; next two = book-pen**",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": [
                    "Makes AB instead of ABC.",
                    "Extends incorrectly."
          ]
},
        },
        {
          id: "mpk-u6-pattern-create-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Create\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Make a pattern longer."
                    },
                    {
                              "id": "b",
                              "text": "Make something new."
                    },
                    {
                              "id": "c",
                              "text": "Plan and make a pattern."
                    },
                    {
                              "id": "d",
                              "text": "The rule that repeats."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Create\" means Make something new."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Create\" means Make something new.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Create** = Make something new.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "mpk-u6-pattern-create-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Extend\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Plan and make a pattern."
                    },
                    {
                              "id": "b",
                              "text": "The rule that repeats."
                    },
                    {
                              "id": "c",
                              "text": "Different kinds of patterns."
                    },
                    {
                              "id": "d",
                              "text": "Make a pattern longer."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Extend\" means Make a pattern longer."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Extend\" means Make a pattern longer.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Extend** = Make a pattern longer.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "mpk-u6-pattern-create-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Design\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The rule that repeats."
                    },
                    {
                              "id": "b",
                              "text": "Plan and make a pattern."
                    },
                    {
                              "id": "c",
                              "text": "Different kinds of patterns."
                    },
                    {
                              "id": "d",
                              "text": "Make something new."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Design\" means Plan and make a pattern."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Design\" means Plan and make a pattern.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Design** = Plan and make a pattern.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
