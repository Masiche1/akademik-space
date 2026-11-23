import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "m5-u2-lesson-2-1",
  code: "2-1",
  title: "Adding Fractions",
  goal: "I CAN add fractions with unlike denominators.",
  standards: ["5.NF.A.1"],
  vocabulary: [
    { term: "Fraction", definition: "Part of a whole." },
    { term: "Numerator", definition: "Top number." },
    { term: "Denominator", definition: "Bottom number." },
    { term: "Common denominator", definition: "Same bottom." },
    { term: "Equivalent", definition: "Same amount." },
    { term: "Sum", definition: "Answer to addition." },
    { term: "Like denominators", definition: "Same bottom." },
    { term: "Unlike denominators", definition: "Different bottoms." },
  ],
  concepts: [
    {
      id: "m5-u2-add-fractions",
      title: "Adding fractions",
      skill: "Add fractions with unlike denominators by finding common denominators.",
      lesson: {
        sections: [
          {
            heading: "Same denominator",
            body: "If denominators match, add numerators: $\\frac{1}{4} + \\frac{2}{4} = \\frac{3}{4}$.",
          },
          {
            heading: "Different denominators",
            body: "Find a **common denominator** (LCM), convert to **equivalent** fractions, then add: $\\frac{1}{2} + \\frac{1}{3} = \\frac{3}{6} + \\frac{2}{6} = \\frac{5}{6}$.",
          },
        ],
        keyFormulas: [
          { name: "Add", statement: "Common denominator -> equivalent fractions -> add numerators." },
        ],
        workedExample: {
          problem: "Calculate $\\frac{2}{3} + \\frac{1}{4}$.",
          solution: "Common denominator 12: $\\frac{8}{12} + \\frac{3}{12} = \\frac{11}{12}$.",
        },
      },
      questions: [
        {
          id: "m5-u2-add-fractions-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is $\\frac{1}{2} + \\frac{1}{3}$?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "2/5"
                    },
                    {
                              "id": "b",
                              "text": "5/6"
                    },
                    {
                              "id": "c",
                              "text": "1/6"
                    },
                    {
                              "id": "d",
                              "text": "3/5"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "1/2=3/6, 1/3=2/6; 3/6+2/6=5/6."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "1/2=3/6, 1/3=2/6; 3/6+2/6=5/6.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "5/6",
          "commonErrors": [
                    "Adds denominators."
          ]
},
        },
        {
          id: "m5-u2-add-fractions-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is $\\frac{2}{5} + \\frac{1}{4}$?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "3/9"
                    },
                    {
                              "id": "b",
                              "text": "13/20"
                    },
                    {
                              "id": "c",
                              "text": "3/20"
                    },
                    {
                              "id": "d",
                              "text": "8/20"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "2/5=8/20, 1/4=5/20; 8/20+5/20=13/20."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "2/5=8/20, 1/4=5/20; 8/20+5/20=13/20.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "13/20",
          "commonErrors": [
                    "Wrong denominator."
          ]
},
        },
        {
          id: "m5-u2-add-fractions-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Add $\\frac{3}{4} + \\frac{2}{5}$ and $\\frac{1}{6} + \\frac{1}{4}$. Show common denominators.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Add fractions",
                              "statement": "23/20 and 5/12."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Adds both.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**3/4+2/5 = 15/20+8/20 = 23/20; 1/6+1/4 = 2/12+3/12 = 5/12**",
          "commonErrors": [
                    "Wrong sums.",
                    "No common denominator."
          ]
},
        },
        {
          id: "m5-u2-add-fractions-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "To add fractions with different denominators, you should...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "add numerators and denominators"
                    },
                    {
                              "id": "b",
                              "text": "find a common denominator"
                    },
                    {
                              "id": "c",
                              "text": "add them directly"
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
                              "statement": "Find common denominator."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Find common denominator.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "find a common denominator",
          "commonErrors": [
                    "Adds wrong way."
          ]
},
        },
        {
          id: "m5-u2-add-fractions-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Add $\\frac{2}{3} + \\frac{3}{4} + \\frac{1}{6}$. Show each step.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Add fractions",
                              "statement": "25/12 or 2 1/12."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Finds common denominator.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Adds correctly.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**LCD=12: 8/12+9/12+2/12=19/12=1 7/12**",
          "commonErrors": [
                    "Wrong sum.",
                    "Missing steps."
          ]
},
        },
        {
          id: "m5-u2-add-fractions-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Fraction\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Top number."
                    },
                    {
                              "id": "b",
                              "text": "Part of a whole."
                    },
                    {
                              "id": "c",
                              "text": "Bottom number."
                    },
                    {
                              "id": "d",
                              "text": "Same bottom."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Fraction\" means Part of a whole."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Fraction\" means Part of a whole.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Fraction** = Part of a whole.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m5-u2-add-fractions-q7",
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
                              "text": "Same bottom."
                    },
                    {
                              "id": "c",
                              "text": "Same amount."
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
          id: "m5-u2-add-fractions-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Denominator\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Same bottom."
                    },
                    {
                              "id": "b",
                              "text": "Bottom number."
                    },
                    {
                              "id": "c",
                              "text": "Same amount."
                    },
                    {
                              "id": "d",
                              "text": "Answer to addition."
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
