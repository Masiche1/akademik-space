import type { Lesson } from "../../../types.ts";

export const lesson52: Lesson = {
  id: "m4-u5-lesson-5-2",
  code: "5-2",
  title: "Comparing Fractions",
  goal: "I CAN compare fractions with different denominators.",
  standards: ["4.NF.A.2"],
  vocabulary: [
    { term: "Compare", definition: "See which is more." },
    { term: "Common denominator", definition: "Same bottom number." },
    { term: "Equivalent", definition: "Same amount." },
    { term: "Greater", definition: "Bigger fraction." },
    { term: "Less", definition: "Smaller fraction." },
    { term: "Cross multiply", definition: "Compare a/b and c/d." },
    { term: "Visual", definition: "Picture of fraction." },
    { term: "Benchmark", definition: "1/2, 1, etc." },
  ],
  concepts: [
    {
      id: "m4-u5-compare-fractions",
      title: "Comparing fractions",
      skill: "Compare fractions with different denominators using common denominators.",
      lesson: {
        sections: [
          {
            heading: "Different denominators",
            body: "To compare $\\frac{1}{3}$ and $\\frac{1}{4}$, find a **common denominator** (12): $\\frac{4}{12}$ vs $\\frac{3}{12}$, so $\\frac{1}{3} > \\frac{1}{4}$.",
          },
          {
            heading: "Cross multiply",
            body: "Or **cross multiply**: $\\frac{a}{b}$ vs $\\frac{c}{d}$ — compare $a \\times d$ and $c \\times b$.",
          },
        ],
        keyFormulas: [
          { name: "Common denominator", statement: "Convert both to same denominator, then compare numerators." },
          { name: "Cross multiply", statement: "a/b vs c/d: compare a*d and c*b." },
        ],
        workedExample: {
          problem: "Which is greater: $\\frac{2}{3}$ or $\\frac{3}{4}$?",
          solution: "Common denominator 12: $\\frac{8}{12}$ vs $\\frac{9}{12}$, so $\\frac{3}{4} > \\frac{2}{3}$.",
        },
      },
      questions: [
        {
          id: "m4-u5-compare-fractions-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is greater: $\\frac{2}{3}$ or $\\frac{3}{4}$?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "2/3"
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
                              "statement": "3/4 = 9/12 > 2/3 = 8/12."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "3/4 = 9/12 > 2/3 = 8/12.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "3/4",
          "commonErrors": [
                    "Compares wrong way."
          ]
},
        },
        {
          id: "m4-u5-compare-fractions-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is less: $\\frac{1}{2}$ or $\\frac{2}{5}$?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "1/2"
                    },
                    {
                              "id": "b",
                              "text": "2/5"
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
                              "statement": "1/2 = 5/10 > 2/5 = 4/10, so 2/5 < 1/2."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "1/2 = 5/10 > 2/5 = 4/10, so 2/5 < 1/2.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "2/5",
          "commonErrors": [
                    "Wrong comparison."
          ]
},
        },
        {
          id: "m4-u5-compare-fractions-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Compare $\\frac{3}{5}$ and $\\frac{5}{8}$ using a common denominator. Which is greater?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Compare",
                              "statement": "Common denominator 40: 24/40 vs 25/40."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Finds common denominator.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Compares correctly.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**5/8 > 3/5; 25/40 > 24/40**",
          "commonErrors": [
                    "Wrong comparison.",
                    "Wrong denominator."
          ]
},
        },
        {
          id: "m4-u5-compare-fractions-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "To compare fractions with different denominators, you should...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "compare numerators only"
                    },
                    {
                              "id": "b",
                              "text": "find a common denominator"
                    },
                    {
                              "id": "c",
                              "text": "compare denominators only"
                    },
                    {
                              "id": "d",
                              "text": "guess"
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
                    "Compares wrong parts."
          ]
},
        },
        {
          id: "m4-u5-compare-fractions-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Order these fractions from least to greatest: $\\frac{1}{2}$, $\\frac{2}{3}$, $\\frac{3}{4}$. Explain using common denominators.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Compare",
                              "statement": "1/2 < 2/3 < 3/4."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Orders correctly.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Explains with common denominator.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**1/2 = 6/12 < 2/3 = 8/12 < 3/4 = 9/12**",
          "commonErrors": [
                    "Wrong order.",
                    "No explanation."
          ]
},
        },
        {
          id: "m4-u5-compare-fractions-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Compare\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Same bottom number."
                    },
                    {
                              "id": "b",
                              "text": "See which is more."
                    },
                    {
                              "id": "c",
                              "text": "Same amount."
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
          id: "m4-u5-compare-fractions-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Common denominator\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Same amount."
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
                              "text": "Same bottom number."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Common denominator\" means Same bottom number."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Common denominator\" means Same bottom number.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Common denominator** = Same bottom number.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m4-u5-compare-fractions-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Equivalent\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Bigger fraction."
                    },
                    {
                              "id": "b",
                              "text": "Same amount."
                    },
                    {
                              "id": "c",
                              "text": "Smaller fraction."
                    },
                    {
                              "id": "d",
                              "text": "Compare a/b and c/d."
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
      ],
    },
  ],
};
