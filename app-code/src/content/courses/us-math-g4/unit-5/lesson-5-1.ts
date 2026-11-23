import type { Lesson } from "../../../types.ts";

export const lesson51: Lesson = {
  id: "m4-u5-lesson-5-1",
  code: "5-1",
  title: "Equivalent Fractions",
  goal: "I CAN find and use equivalent fractions.",
  standards: ["4.NF.A.1"],
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
      id: "m4-u5-equivalent-fractions",
      title: "Equivalent fractions",
      skill: "Find fractions that name the same amount.",
      lesson: {
        sections: [
          {
            heading: "Same amount",
            body: "**Equivalent fractions** name the same amount: $\\frac{1}{2} = \\frac{2}{4} = \\frac{3}{6}$. Multiply or divide both numerator and denominator by the same number.",
          },
          {
            heading: "Simplify",
            body: "To **simplify**, divide both numbers by a common factor: $\\frac{6}{9} = \\frac{2}{3}$ (divide by 3).",
          },
        ],
        keyFormulas: [
          { name: "Equivalent", statement: "a/b = (a x c)/(b x c)." },
          { name: "Simplify", statement: "Divide both by common factor." },
        ],
        workedExample: {
          problem: "Find a fraction equivalent to $\\frac{2}{5}$.",
          solution: "$\\frac{2}{5} = \\frac{4}{10} = \\frac{6}{15}$ (multiply by 2 or 3).",
        },
      },
      questions: [
        {
          id: "m4-u5-equivalent-fractions-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is equivalent to $\\frac{1}{3}$?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "2/6"
                    },
                    {
                              "id": "b",
                              "text": "2/4"
                    },
                    {
                              "id": "c",
                              "text": "3/2"
                    },
                    {
                              "id": "d",
                              "text": "1/4"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "1/3 = 2/6."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "1/3 = 2/6.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "2/6",
          "commonErrors": [
                    "Wrong equivalent."
          ]
},
        },
        {
          id: "m4-u5-equivalent-fractions-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "$\\frac{8}{12}$ simplifies to...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "4/6"
                    },
                    {
                              "id": "b",
                              "text": "2/3"
                    },
                    {
                              "id": "c",
                              "text": "8/6"
                    },
                    {
                              "id": "d",
                              "text": "12/8"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "8/12 = 2/3 (divide by 4)."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "8/12 = 2/3 (divide by 4).",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "2/3",
          "commonErrors": [
                    "Not fully simplified."
          ]
},
        },
        {
          id: "m4-u5-equivalent-fractions-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find two fractions equivalent to $\\frac{3}{4}$. Explain how you found them.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Equivalent",
                              "statement": "3/4 = 6/8 = 9/12."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Finds two equivalents.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Explains method.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**6/8 and 9/12; multiply both by 2 and 3**",
          "commonErrors": [
                    "Wrong equivalents.",
                    "No explanation."
          ]
},
        },
        {
          id: "m4-u5-equivalent-fractions-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is NOT equivalent to $\\frac{1}{2}$?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "2/4"
                    },
                    {
                              "id": "b",
                              "text": "3/6"
                    },
                    {
                              "id": "c",
                              "text": "4/8"
                    },
                    {
                              "id": "d",
                              "text": "3/5"
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "3/5 is not equivalent to 1/2."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "3/5 is not equivalent to 1/2.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "3/5",
          "commonErrors": [
                    "Thinks all are equivalent."
          ]
},
        },
        {
          id: "m4-u5-equivalent-fractions-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Compare $\\frac{3}{4}$ and $\\frac{6}{8}$. Are they equivalent? Explain.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Equivalent",
                              "statement": "3/4 = 6/8 = equivalent."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Compares fractions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Explains equivalence.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**3/4 = 6/8; they are equivalent (6/8 simplifies to 3/4)**",
          "commonErrors": [
                    "Wrong comparison.",
                    "No explanation."
          ]
},
        },
        {
          id: "m4-u5-equivalent-fractions-q6",
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
          id: "m4-u5-equivalent-fractions-q7",
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
          id: "m4-u5-equivalent-fractions-q8",
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
