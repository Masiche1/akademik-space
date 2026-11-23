import type { Lesson } from "../../../types.ts";

export const lesson54: Lesson = {
  id: "m3-u5-lesson-5-4",
  code: "5-4",
  title: "Equivalent Fractions",
  goal: "I CAN find fractions that name the same amount.",
  standards: ["3.NF.A.3"],
  vocabulary: [
    { term: "Equivalent", definition: "Same amount, different form." },
    { term: "Numerator", definition: "Top number." },
    { term: "Denominator", definition: "Bottom number." },
    { term: "Multiply", definition: "Both by same number." },
    { term: "Divide", definition: "Both by same number." },
    { term: "Simplify", definition: "Make smaller." },
    { term: "Compare", definition: "See which is more." },
    { term: "Visual", definition: "Picture of fraction." },
  ],
  concepts: [
    {
      id: "m3-u5-equivalent-fractions",
      title: "Equivalent fractions",
      skill: "Find fractions that name the same amount.",
      lesson: {
        sections: [
          {
            heading: "Same amount",
            body: "**Equivalent fractions** name the same amount: $\\frac{1}{2} = \\frac{2}{4} = \\frac{3}{6}$. You can **multiply** or **divide** both numerator and denominator by the same number.",
          },
          {
            heading: "Simplify",
            body: "To **simplify**, divide both numbers by a common factor: $\\frac{4}{8} = \\frac{1}{2}$ (divide by 4).",
          },
        ],
        keyFormulas: [
          { name: "Equivalent", statement: "a/b = (a x c)/(b x c)." },
          { name: "Simplify", statement: "Divide both by common factor." },
        ],
        workedExample: {
          problem: "Find a fraction equivalent to $\\frac{1}{3}$.",
          solution: "$\\frac{1}{3} = \\frac{2}{6} = \\frac{3}{9}$ (multiply both by 2 or 3).",
        },
      },
      questions: [
        {
          id: "m3-u5-equivalent-fractions-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is equivalent to $\\frac{1}{2}$?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "1/3"
                    },
                    {
                              "id": "b",
                              "text": "2/4"
                    },
                    {
                              "id": "c",
                              "text": "2/3"
                    },
                    {
                              "id": "d",
                              "text": "3/4"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "1/2 = 2/4."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "1/2 = 2/4.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "2/4",
          "commonErrors": [
                    "Wrong equivalent."
          ]
},
        },
        {
          id: "m3-u5-equivalent-fractions-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "$\\frac{4}{8}$ simplifies to...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "2/4"
                    },
                    {
                              "id": "b",
                              "text": "1/2"
                    },
                    {
                              "id": "c",
                              "text": "3/6"
                    },
                    {
                              "id": "d",
                              "text": "4/8"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "4/8 = 1/2 (divide by 4)."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "4/8 = 1/2 (divide by 4).",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "1/2",
          "commonErrors": [
                    "Not fully simplified."
          ]
},
        },
        {
          id: "m3-u5-equivalent-fractions-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which fraction is equivalent to $\\frac{2}{3}$?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "4/6"
                    },
                    {
                              "id": "b",
                              "text": "3/4"
                    },
                    {
                              "id": "c",
                              "text": "2/4"
                    },
                    {
                              "id": "d",
                              "text": "6/2"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "2/3 = 4/6 (multiply by 2)."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "2/3 = 4/6 (multiply by 2).",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "4/6",
          "commonErrors": [
                    "Wrong equivalent."
          ]
},
        },
        {
          id: "m3-u5-equivalent-fractions-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "$\\frac{6}{9}$ simplifies to...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "2/3"
                    },
                    {
                              "id": "b",
                              "text": "3/2"
                    },
                    {
                              "id": "c",
                              "text": "6/3"
                    },
                    {
                              "id": "d",
                              "text": "9/6"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "6/9 = 2/3 (divide by 3)."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "6/9 = 2/3 (divide by 3).",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "2/3",
          "commonErrors": [
                    "Wrong simplified."
          ]
},
        },
        {
          id: "m3-u5-equivalent-fractions-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Find two fractions equivalent to $\\frac{1}{4}$. Explain how you found them.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Equivalent",
                              "statement": "1/4 = 2/8 = 3/12."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Finds two equivalents.",
                              "marks": 1,
                              "markCode": "M1"
                    },
                    {
                              "reasoning": "Explains method.",
                              "marks": 1,
                              "markCode": "M1"
                    }
          ],
          "finalAnswer": "**2/8 and 3/12; multiply both by 2 and 3**",
          "commonErrors": [
                    "Wrong equivalents.",
                    "No explanation."
          ]
},
        },
        {
          id: "m3-u5-equivalent-fractions-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Equivalent\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Top number."
                    },
                    {
                              "id": "b",
                              "text": "Same amount, different form."
                    },
                    {
                              "id": "c",
                              "text": "Bottom number."
                    },
                    {
                              "id": "d",
                              "text": "Both by same number."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Equivalent\" means Same amount, different form."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Equivalent\" means Same amount, different form.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Equivalent** = Same amount, different form.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m3-u5-equivalent-fractions-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Numerator\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Bottom number."
                    },
                    {
                              "id": "b",
                              "text": "Both by same number."
                    },
                    {
                              "id": "c",
                              "text": "Make smaller."
                    },
                    {
                              "id": "d",
                              "text": "Top number."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Numerator\" means Top number."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Numerator\" means Top number.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Numerator** = Top number.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m3-u5-equivalent-fractions-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Denominator\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Both by same number."
                    },
                    {
                              "id": "b",
                              "text": "Bottom number."
                    },
                    {
                              "id": "c",
                              "text": "Make smaller."
                    },
                    {
                              "id": "d",
                              "text": "See which is more."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Denominator\" means Bottom number."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Denominator\" means Bottom number.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Denominator** = Bottom number.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
