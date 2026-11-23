import type { Lesson } from "../../../types.ts";

export const lesson34: Lesson = {
  id: "m6-u3-lesson-3-4",
  code: "3-4",
  title: "Inequalities",
  goal: "I CAN write and solve one-variable inequalities.",
  standards: ["6.EE.B.8"],
  vocabulary: [
    { term: "Inequality", definition: "Math sentence with < > ≤ ≥." },
    { term: "Less than", definition: "<" },
    { term: "Greater than", definition: ">" },
    { term: "At most", definition: "≤" },
    { term: "At least", definition: "≥" },
    { term: "Solution", definition: "All values that work." },
    { term: "Graph", definition: "Number line." },
    { term: "Check", definition: "Verify." },
  ],
  concepts: [
    {
      id: "m6-u3-inequalities",
      title: "Inequalities",
      skill: "Write, solve and graph one-variable inequalities.",
      lesson: {
        sections: [
          {
            heading: "Not equal",
            body: "**Inequalities** use <, >, ≤, ≥ instead of =. Solutions are **ranges** of values, graphed on a **number line**.",
          },
          {
            heading: "Solving",
            body: "Solve like equations, but **flip the sign** when multiplying/dividing by a negative: $-2x > 6$ -> $x < -3$.",
          },
        ],
        keyFormulas: [
          { name: "Inequality", statement: "Solve like equation; flip sign if x negative." },
        ],
        workedExample: {
          problem: "Solve x + 3 < 10 and graph.",
          solution: "x < 7; graph: open circle at 7, shade left.",
        },
      },
      questions: [
        {
          id: "m6-u3-inequalities-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Solve: x + 5 > 12",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "x > 7"
                    },
                    {
                              "id": "b",
                              "text": "x < 7"
                    },
                    {
                              "id": "c",
                              "text": "x > 17"
                    },
                    {
                              "id": "d",
                              "text": "x = 7"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Subtract 5: x > 7."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Subtract 5: x > 7.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "x > 7",
          "commonErrors": [
                    "Wrong inequality."
          ]
},
        },
        {
          id: "m6-u3-inequalities-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Solve: -2x < 8 (remember to flip!)",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "x < -4"
                    },
                    {
                              "id": "b",
                              "text": "x > -4"
                    },
                    {
                              "id": "c",
                              "text": "x < 4"
                    },
                    {
                              "id": "d",
                              "text": "x > 4"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Divide by -2, flip: x > -4."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Divide by -2, flip: x > -4.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "x > -4",
          "commonErrors": [
                    "Didn't flip."
          ]
},
        },
        {
          id: "m6-u3-inequalities-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Solve these inequalities: x - 3 ≥ 5; 2x < 10; -x > 4. Graph each solution.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Inequalities",
                              "statement": "x≥8, x<5, x<-4."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Solves all three.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**x-3≥5->x≥8; 2x<10->x<5; -x>4->x<-4.**",
          "commonErrors": [
                    "Wrong solutions.",
                    "Missing inequalities."
          ]
},
        },
        {
          id: "m6-u3-inequalities-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "When solving inequalities, you flip the sign when...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "adding"
                    },
                    {
                              "id": "b",
                              "text": "multiplying/dividing by negative"
                    },
                    {
                              "id": "c",
                              "text": "subtracting"
                    },
                    {
                              "id": "d",
                              "text": "never"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "x negative multiplier."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "x negative multiplier.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "multiplying/dividing by negative",
          "commonErrors": [
                    "Wrong rule."
          ]
},
        },
        {
          id: "m6-u3-inequalities-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Solve an inequality and explain how you graphed the solution on a number line.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Inequalities",
                              "statement": "Solved + graphed."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Solves inequality.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Explains graph.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'x+2>7 -> x>5; open circle at 5, shade right.'**",
          "commonErrors": [
                    "Cannot solve.",
                    "No graph explanation."
          ]
},
        },
        {
          id: "m6-u3-inequalities-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Inequality\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "<"
                    },
                    {
                              "id": "b",
                              "text": "Math sentence with < > ≤ ≥."
                    },
                    {
                              "id": "c",
                              "text": ">"
                    },
                    {
                              "id": "d",
                              "text": "≤"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Inequality\" means Math sentence with < > ≤ ≥."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Inequality\" means Math sentence with < > ≤ ≥.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Inequality** = Math sentence with < > ≤ ≥.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m6-u3-inequalities-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Less than\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": ">"
                    },
                    {
                              "id": "b",
                              "text": "≤"
                    },
                    {
                              "id": "c",
                              "text": "≥"
                    },
                    {
                              "id": "d",
                              "text": "<"
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Less than\" means <"
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Less than\" means <",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Less than** = <",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m6-u3-inequalities-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Greater than\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "≤"
                    },
                    {
                              "id": "b",
                              "text": ">"
                    },
                    {
                              "id": "c",
                              "text": "≥"
                    },
                    {
                              "id": "d",
                              "text": "All values that work."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Greater than\" means >"
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Greater than\" means >",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Greater than** = >",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
