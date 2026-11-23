import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "m0-u2-lesson-2-2",
  code: "2-2",
  title: "Compare Numbers",
  goal: "I CAN compare two numbers and say which is greater or less.",
  standards: ["K.CC.C.6"],
  vocabulary: [
    { term: "Greater", definition: "A larger number." },
    { term: "Less", definition: "A smaller number." },
    { term: "Greater than", definition: "Symbol > means a bigger number." },
    { term: "Less than", definition: "Symbol < means a smaller number." },
    { term: "Equal", definition: "The same number on both sides." },
  ],
  concepts: [
    {
      id: "m0-u2-compare-numbers",
      title: "Comparing numbers",
      skill: "Compare two numbers to determine greater than, less than or equal.",
      lesson: {
        sections: [
          {
            heading: "Which is bigger?",
            body: "To compare numbers, ask: which is **greater** (bigger) and which is **less** (smaller)? 8 is greater than 5; 3 is less than 7.",
          },
          {
            heading: "Counting to compare",
            body: "Count up to the smaller number, then keep counting to the larger one. The number you reach first is **less**; the one you reach last is **greater**.",
          },
        ],
        keyFormulas: [
          { name: "Compare numbers", statement: "Greater = bigger number; Less = smaller; Equal = same." },
          { name: "Symbols", statement: "> means greater than; < means less than; = means equal." },
        ],
        workedExample: {
          problem: "Is 9 greater than 4?",
          solution: "Yes — 9 is a **greater** number than 4. We write 9 > 4.",
        },
      },
      questions: [
        {
          id: "m0-u2-compare-numbers-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is greater: 8 or 5?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "5"
                    },
                    {
                              "id": "b",
                              "text": "8"
                    },
                    {
                              "id": "c",
                              "text": "they are equal"
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
                              "statement": "8 > 5, so 8 is greater."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "8 > 5, so 8 is greater.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**8**",
          "commonErrors": [
                    "Picks smaller number."
          ]
},
        },
        {
          id: "m0-u2-compare-numbers-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which symbol means 'greater than'?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "<"
                    },
                    {
                              "id": "b",
                              "text": ">"
                    },
                    {
                              "id": "c",
                              "text": "="
                    },
                    {
                              "id": "d",
                              "text": "+"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "> means greater than."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "> means greater than.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**>**",
          "commonErrors": [
                    "Confuses < and >."
          ]
},
        },
        {
          id: "m0-u2-compare-numbers-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Compare 6 and 3. Which is greater? Write it with a symbol.",
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
                                                  "Compare numbers",
                                                  "6 > 3."
                                        ]
                              ]
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        [
                                                  "skill",
                                                  "Compare numbers",
                                                  "6 > 3."
                                        ]
                              ],
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": [
                    {
                              "reasoning": "Says 6 greater, writes 6 > 3.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "commonErrors": [
                    "**6 > 3**"
          ]
},
        },
        {
          id: "m0-u2-compare-numbers-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Is 4 less than 7?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "yes"
                    },
                    {
                              "id": "b",
                              "text": "no"
                    },
                    {
                              "id": "c",
                              "text": "they are equal"
                    },
                    {
                              "id": "d",
                              "text": "cannot tell"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "4 < 7, so 4 is less."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "4 < 7, so 4 is less.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**yes**",
          "commonErrors": [
                    "Thinks 4 > 7."
          ]
},
        },
        {
          id: "m0-u2-compare-numbers-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Compare 12 and 9. Which is greater and which is less? Write both with symbols.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Compare numbers",
                              "statement": "12 > 9; 9 < 12."
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        {
                                                  "reasoning": "Says 12 greater.",
                                                  "marks": 1,
                                                  "markCode": "M"
                                        },
                                        {
                                                  "reasoning": "Writes 12 > 9 and 9 < 12.",
                                                  "marks": 1,
                                                  "markCode": "A"
                                        }
                              ],
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "**12 > 9 and 9 < 12**",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": [
                    "Reversed.",
                    "Wrong symbols."
          ]
},
        },
        {
          id: "m0-u2-compare-numbers-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Greater\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A smaller number."
                    },
                    {
                              "id": "b",
                              "text": "A larger number."
                    },
                    {
                              "id": "c",
                              "text": "Symbol > means a bigger number."
                    },
                    {
                              "id": "d",
                              "text": "Symbol < means a smaller number."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Greater\" means A larger number."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Greater\" means A larger number.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Greater** = A larger number.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m0-u2-compare-numbers-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Less\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Symbol > means a bigger number."
                    },
                    {
                              "id": "b",
                              "text": "Symbol < means a smaller number."
                    },
                    {
                              "id": "c",
                              "text": "The same number on both sides."
                    },
                    {
                              "id": "d",
                              "text": "A smaller number."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Less\" means A smaller number."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Less\" means A smaller number.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Less** = A smaller number.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m0-u2-compare-numbers-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Greater than\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Symbol < means a smaller number."
                    },
                    {
                              "id": "b",
                              "text": "Symbol > means a bigger number."
                    },
                    {
                              "id": "c",
                              "text": "The same number on both sides."
                    },
                    {
                              "id": "d",
                              "text": "A larger number."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Greater than\" means Symbol > means a bigger number."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Greater than\" means Symbol > means a bigger number.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Greater than** = Symbol > means a bigger number.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
