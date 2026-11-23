import type { Lesson } from "../../../types.ts";

export const lesson14: Lesson = {
  id: "m3-u1-lesson-1-4",
  code: "1-4",
  title: "Estimating Sums and Differences",
  goal: "I CAN estimate sums and differences by rounding.",
  standards: ["3.NBT.A.2"],
  vocabulary: [
    { term: "Estimate", definition: "Close guess." },
    { term: "Round", definition: "Change to nearest value." },
    { term: "Sum", definition: "Answer to addition." },
    { term: "Difference", definition: "Answer to subtraction." },
    { term: "Reasonable", definition: "Makes sense." },
    { term: "About", definition: "Approximately." },
    { term: "Exact", definition: "Precise answer." },
    { term: "Check", definition: "Verify answer." },
  ],
  concepts: [
    {
      id: "m3-u1-estimate-sums",
      title: "Estimating sums and differences",
      skill: "Estimate answers by rounding numbers first.",
      lesson: {
        sections: [
          {
            heading: "Why estimate?",
            body: "Estimating gives a quick **about** answer. Round each number first, then add or subtract the rounded numbers.",
          },
          {
            heading: "Example",
            body: "$347 + 285$: round to $350 + 300 = 650$. The **exact** answer is $632$, which is **reasonable** (close to estimate).",
          },
        ],
        keyFormulas: [
          { name: "Estimate", statement: "Round each number, then add/subtract." },
        ],
        workedExample: {
          problem: "Estimate $347 + 285$ by rounding to nearest hundred.",
          solution: "$350 + 300 = 650$ — the estimate is about 650.",
        },
      },
      questions: [
        {
          id: "m3-u1-estimate-sums-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "To estimate $347 + 285$, you should...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "add exactly"
                    },
                    {
                              "id": "b",
                              "text": "round each number first"
                    },
                    {
                              "id": "c",
                              "text": "guess randomly"
                    },
                    {
                              "id": "d",
                              "text": "subtract"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Round first, then add."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Round first, then add.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "round first",
          "commonErrors": [
                    "Adds exactly."
          ]
},
        },
        {
          id: "m3-u1-estimate-sums-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Estimate $347 + 285$ by rounding to nearest hundred.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "600"
                    },
                    {
                              "id": "b",
                              "text": "650"
                    },
                    {
                              "id": "c",
                              "text": "700"
                    },
                    {
                              "id": "d",
                              "text": "632"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "350 + 300 = 650."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "350 + 300 = 650.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "650",
          "commonErrors": [
                    "Wrong rounding."
          ]
},
        },
        {
          id: "m3-u1-estimate-sums-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Estimate $486 - 231$ by rounding to nearest hundred.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Answer",
                              "answer": 300
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "reasoning",
                              "statement": "500 - 200 = 300."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "300",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "300",
          "commonErrors": [
                    "Wrong estimate."
          ]
},
        },
        {
          id: "m3-u1-estimate-sums-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "Estimate $678 + 123$ by rounding to nearest hundred.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Answer",
                              "answer": 800
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "reasoning",
                              "statement": "700 + 100 = 800."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "800",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "800",
          "commonErrors": [
                    "Wrong estimate."
          ]
},
        },
        {
          id: "m3-u1-estimate-sums-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Estimate $456 + 389$ and $672 - 345$. Show your rounding.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Estimate",
                              "statement": "Round then add/subtract."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Estimates both correctly.",
                              "marks": 1,
                              "markCode": "M1"
                    },
                    {
                              "reasoning": "Shows rounding work.",
                              "marks": 1,
                              "markCode": "M1"
                    }
          ],
          "finalAnswer": "**456+389~900, 672-345~300**",
          "commonErrors": [
                    "Wrong estimates.",
                    "No rounding shown."
          ]
},
        },
        {
          id: "m3-u1-estimate-sums-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Estimate\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Change to nearest value."
                    },
                    {
                              "id": "b",
                              "text": "Close guess."
                    },
                    {
                              "id": "c",
                              "text": "Answer to addition."
                    },
                    {
                              "id": "d",
                              "text": "Answer to subtraction."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Estimate\" means Close guess."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Estimate\" means Close guess.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Estimate** = Close guess.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m3-u1-estimate-sums-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Round\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Answer to addition."
                    },
                    {
                              "id": "b",
                              "text": "Answer to subtraction."
                    },
                    {
                              "id": "c",
                              "text": "Makes sense."
                    },
                    {
                              "id": "d",
                              "text": "Change to nearest value."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Round\" means Change to nearest value."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Round\" means Change to nearest value.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Round** = Change to nearest value.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m3-u1-estimate-sums-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Sum\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Answer to subtraction."
                    },
                    {
                              "id": "b",
                              "text": "Answer to addition."
                    },
                    {
                              "id": "c",
                              "text": "Makes sense."
                    },
                    {
                              "id": "d",
                              "text": "Approximately."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Sum\" means Answer to addition."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Sum\" means Answer to addition.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Sum** = Answer to addition.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
