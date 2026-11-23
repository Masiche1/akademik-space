import type { Lesson } from "../../../types.ts";

export const lesson24: Lesson = {
  id: "m5-u2-lesson-2-4",
  code: "2-4",
  title: "Equivalent Fractions",
  goal: "I CAN find and use equivalent fractions.",
  standards: ["5.NF.A.1"],
  vocabulary: [
    { term: "Equivalent", definition: "Same amount." },
    { term: "Numerator", definition: "Top." },
    { term: "Denominator", definition: "Bottom." },
    { term: "Multiply", definition: "Top and bottom x same." },
    { term: "Divide", definition: "Top and bottom ÷ same." },
    { term: "Simplest", definition: "Reduced form." },
    { term: "Fraction", definition: "Part of whole." },
    { term: "Compare", definition: "More or less." },
  ],
  concepts: [
    {
      id: "m5-u2-fraction-equivalents",
      title: "Equivalent fractions",
      skill: "Find and use equivalent fractions to compare and simplify.",
      lesson: {
        sections: [
          {
            heading: "Same amount",
            body: "**Equivalent fractions** look different but are the **same amount**: $\\frac{1}{2} = \\frac{2}{4} = \\frac{4}{8}$.",
          },
          {
            heading: "Making equivalents",
            body: "Multiply or divide **numerator and denominator** by the same number: $\\frac{1}{3} \\times \\frac{3}{3} = \\frac{3}{9}$.",
          },
        ],
        keyFormulas: [
          { name: "Equivalent", statement: "a/b = (a x n)/(b x n)." },
        ],
        workedExample: {
          problem: "Find three fractions equivalent to $\\frac{2}{5}$.",
          solution: "$\\frac{2}{5} = \\frac{4}{10} = \\frac{6}{15} = \\frac{8}{20}$.",
        },
      },
      questions: [
        {
          id: "m5-u2-fraction-equivalents-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is equivalent to $\\frac{1}{2}$?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "2/3"
                    },
                    {
                              "id": "b",
                              "text": "3/6"
                    },
                    {
                              "id": "c",
                              "text": "2/4"
                    },
                    {
                              "id": "d",
                              "text": "1/4"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "2/4 = 1/2 (divide by 2)."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "2/4 = 1/2 (divide by 2).",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "2/4",
          "commonErrors": [
                    "Not equivalent."
          ]
},
        },
        {
          id: "m5-u2-fraction-equivalents-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "To make equivalent fractions, you multiply...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "numerator only"
                    },
                    {
                              "id": "b",
                              "text": "both numerator and denominator by same number"
                    },
                    {
                              "id": "c",
                              "text": "denominator only"
                    },
                    {
                              "id": "d",
                              "text": "add numbers"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Multiply both by same."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Multiply both by same.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "both numerator and denominator by same number",
          "commonErrors": [
                    "Wrong method."
          ]
},
        },
        {
          id: "m5-u2-fraction-equivalents-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Find two fractions equivalent to $\\frac{3}{4}$ and one equivalent to $\\frac{2}{3}$.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Equivalent",
                              "statement": "3/4 equivalents and 2/3 equivalent."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Finds equivalents.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**3/4 = 6/8 = 9/12; 2/3 = 4/6**",
          "commonErrors": [
                    "Wrong equivalents.",
                    "Missing fractions."
          ]
},
        },
        {
          id: "m5-u2-fraction-equivalents-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The simplest form of $\\frac{6}{8}$ is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "3/4"
                    },
                    {
                              "id": "b",
                              "text": "2/3"
                    },
                    {
                              "id": "c",
                              "text": "6/8"
                    },
                    {
                              "id": "d",
                              "text": "1/2"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "6/8 = 3/4 (divide by 2)."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "6/8 = 3/4 (divide by 2).",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "3/4",
          "commonErrors": [
                    "Not simplified."
          ]
},
        },
        {
          id: "m5-u2-fraction-equivalents-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Compare $\\frac{2}{3}$ and $\\frac{3}{5}$ using equivalent fractions.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Equivalent",
                              "statement": "2/3 > 3/5."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Finds equivalents.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Compares correctly.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**2/3 = 10/15; 3/5 = 9/15; 10/15 > 9/15, so 2/3 > 3/5**",
          "commonErrors": [
                    "Wrong comparison.",
                    "No equivalents."
          ]
},
        },
        {
          id: "m5-u2-fraction-equivalents-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Equivalent\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Top."
                    },
                    {
                              "id": "b",
                              "text": "Same amount."
                    },
                    {
                              "id": "c",
                              "text": "Bottom."
                    },
                    {
                              "id": "d",
                              "text": "Top and bottom x same."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Equivalent\" means Same amount."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Equivalent\" means Same amount.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Equivalent** = Same amount.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m5-u2-fraction-equivalents-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Numerator\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Bottom."
                    },
                    {
                              "id": "b",
                              "text": "Top and bottom x same."
                    },
                    {
                              "id": "c",
                              "text": "Top and bottom ÷ same."
                    },
                    {
                              "id": "d",
                              "text": "Top."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Numerator\" means Top."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Numerator\" means Top.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Numerator** = Top.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m5-u2-fraction-equivalents-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Denominator\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Top and bottom x same."
                    },
                    {
                              "id": "b",
                              "text": "Bottom."
                    },
                    {
                              "id": "c",
                              "text": "Top and bottom ÷ same."
                    },
                    {
                              "id": "d",
                              "text": "Reduced form."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Denominator\" means Bottom."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Denominator\" means Bottom.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Denominator** = Bottom.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
