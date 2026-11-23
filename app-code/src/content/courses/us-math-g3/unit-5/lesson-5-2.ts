import type { Lesson } from "../../../types.ts";

export const lesson52: Lesson = {
  id: "m3-u5-lesson-5-2",
  code: "5-2",
  title: "Comparing Fractions",
  goal: "I CAN compare fractions with the same denominator.",
  standards: ["3.NF.A.3"],
  vocabulary: [
    { term: "Compare", definition: "See which is more." },
    { term: "Same denominator", definition: "Same total parts." },
    { term: "Numerator", definition: "Parts we have." },
    { term: "Greater", definition: "Bigger fraction." },
    { term: "Less", definition: "Smaller fraction." },
    { term: "Equal", definition: "Same amount." },
    { term: "Bigger numerator", definition: "More parts = bigger." },
    { term: "Visual", definition: "Picture of fraction." },
  ],
  concepts: [
    {
      id: "m3-u5-compare-fractions",
      title: "Comparing fractions",
      skill: "Compare fractions with the same denominator.",
      lesson: {
        sections: [
          {
            heading: "Same denominator",
            body: "When fractions have the **same denominator**, the one with the **bigger numerator** is greater: $\\frac{3}{4} > \\frac{1}{4}$ because 3 parts > 1 part.",
          },
          {
            heading: "Different denominators",
            body: "With **different denominators**, compare carefully: $\\frac{1}{4} < \\frac{1}{2}$ because fourths are smaller than halves.",
          },
        ],
        keyFormulas: [
          { name: "Compare", statement: "Same denominator: bigger numerator wins." },
          { name: "Different", statement: "Bigger denominator = smaller parts." },
        ],
        workedExample: {
          problem: "Which is greater: $\\frac{3}{4}$ or $\\frac{1}{4}$?",
          solution: "$\\frac{3}{4}$ — same denominator, 3 > 1.",
        },
      },
      questions: [
        {
          id: "m3-u5-compare-fractions-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is greater: $\\frac{3}{4}$ or $\\frac{1}{4}$?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "1/4"
                    },
                    {
                              "id": "b",
                              "text": "3/4"
                    },
                    {
                              "id": "c",
                              "text": "equal"
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
                              "statement": "Same denominator, 3 > 1."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Same denominator, 3 > 1.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "3/4",
          "commonErrors": [
                    "Thinks smaller numerator bigger."
          ]
},
        },
        {
          id: "m3-u5-compare-fractions-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is less: $\\frac{1}{4}$ or $\\frac{1}{2}$?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "1/2"
                    },
                    {
                              "id": "b",
                              "text": "1/4"
                    },
                    {
                              "id": "c",
                              "text": "equal"
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
                              "statement": "1/4 < 1/2 (fourths smaller than halves)."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "1/4 < 1/2 (fourths smaller than halves).",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "1/4",
          "commonErrors": [
                    "Thinks bigger denominator bigger."
          ]
},
        },
        {
          id: "m3-u5-compare-fractions-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is greater: $\\frac{5}{6}$ or $\\frac{2}{6}$?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "5/6"
                    },
                    {
                              "id": "b",
                              "text": "2/6"
                    },
                    {
                              "id": "c",
                              "text": "equal"
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
                              "statement": "Same denominator, 5 > 2."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Same denominator, 5 > 2.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "5/6",
          "commonErrors": [
                    "Wrong comparison."
          ]
},
        },
        {
          id: "m3-u5-compare-fractions-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is greater: $\\frac{1}{3}$ or $\\frac{1}{4}$?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "1/3"
                    },
                    {
                              "id": "b",
                              "text": "1/4"
                    },
                    {
                              "id": "c",
                              "text": "equal"
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
                              "statement": "Thirds bigger than fourths."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Thirds bigger than fourths.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "1/3",
          "commonErrors": [
                    "Wrong comparison."
          ]
},
        },
        {
          id: "m3-u5-compare-fractions-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Compare $\\frac{3}{8}$ and $\\frac{5}{8}$. Explain using the numerator.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Compare",
                              "statement": "5/8 > 3/8."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Names greater fraction.",
                              "marks": 1,
                              "markCode": "M1"
                    },
                    {
                              "reasoning": "Explains numerator.",
                              "marks": 1,
                              "markCode": "M1"
                    }
          ],
          "finalAnswer": "**5/8 > 3/8; same denominator, 5 > 3**",
          "commonErrors": [
                    "Wrong comparison.",
                    "No explanation."
          ]
},
        },
        {
          id: "m3-u5-compare-fractions-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Compare\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Same total parts."
                    },
                    {
                              "id": "b",
                              "text": "See which is more."
                    },
                    {
                              "id": "c",
                              "text": "Parts we have."
                    },
                    {
                              "id": "d",
                              "text": "Bigger fraction."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Compare\" means See which is more."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Compare\" means See which is more.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Compare** = See which is more.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m3-u5-compare-fractions-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Same denominator\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Parts we have."
                    },
                    {
                              "id": "b",
                              "text": "Bigger fraction."
                    },
                    {
                              "id": "c",
                              "text": "Smaller fraction."
                    },
                    {
                              "id": "d",
                              "text": "Same total parts."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Same denominator\" means Same total parts."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Same denominator\" means Same total parts.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Same denominator** = Same total parts.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m3-u5-compare-fractions-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Numerator\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Bigger fraction."
                    },
                    {
                              "id": "b",
                              "text": "Parts we have."
                    },
                    {
                              "id": "c",
                              "text": "Smaller fraction."
                    },
                    {
                              "id": "d",
                              "text": "Same amount."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Numerator\" means Parts we have."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Numerator\" means Parts we have.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Numerator** = Parts we have.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
