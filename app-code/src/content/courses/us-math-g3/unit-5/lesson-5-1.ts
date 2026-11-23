import type { Lesson } from "../../../types.ts";

export const lesson51: Lesson = {
  id: "m3-u5-lesson-5-1",
  code: "5-1",
  title: "Fraction Basics",
  goal: "I CAN identify and name fractions: halves, thirds, fourths.",
  standards: ["3.NF.A.1"],
  vocabulary: [
    { term: "Fraction", definition: "Part of a whole." },
    { term: "Numerator", definition: "Top number: parts we have." },
    { term: "Denominator", definition: "Bottom number: total parts." },
    { term: "Half", definition: "1 of 2 equal parts." },
    { term: "Third", definition: "1 of 3 equal parts." },
    { term: "Fourth", definition: "1 of 4 equal parts." },
    { term: "Unit fraction", definition: "1 over anything." },
    { term: "Whole", definition: "Complete amount." },
  ],
  concepts: [
    {
      id: "m3-u5-fraction-basics",
      title: "Fraction basics",
      skill: "Identify fractions as parts of a whole.",
      lesson: {
        sections: [
          {
            heading: "What is a fraction?",
            body: "A **fraction** names **equal parts** of a whole. In $\\frac{3}{4}$, the **denominator** (4) means the whole is split into 4 equal parts; the **numerator** (3) means we have 3 of them.",
          },
          {
            heading: "Common fractions",
            body: "**Halves** ($\\frac{1}{2}$), **thirds** ($\\frac{1}{3}$), **fourths** ($\\frac{1}{4}$) are common. The larger the denominator, the smaller each part.",
          },
        ],
        keyFormulas: [
          { name: "Fraction", statement: "$\\frac{a}{b}$: a parts of b." },
          { name: "Denominator", statement: "Total equal parts." },
          { name: "Numerator", statement: "Parts we have." },
        ],
        workedExample: {
          problem: "A pizza is cut into 8 equal slices. You eat 3. What fraction did you eat?",
          solution: "$\\frac{3}{8}$ — 3 parts out of 8.",
        },
      },
      questions: [
        {
          id: "m3-u5-fraction-basics-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In $\\frac{2}{5}$, what does the 5 tell us?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "We have 5 parts"
                    },
                    {
                              "id": "b",
                              "text": "The whole is split into 5 equal parts"
                    },
                    {
                              "id": "c",
                              "text": "The answer is 5"
                    },
                    {
                              "id": "d",
                              "text": "5 slices were eaten"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Denominator = total equal parts."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Denominator = total equal parts.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "5 equal parts",
          "commonErrors": [
                    "Confuses numerator/denominator."
          ]
},
        },
        {
          id: "m3-u5-fraction-basics-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which fraction names 1 of 4 equal parts?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "1/2"
                    },
                    {
                              "id": "b",
                              "text": "1/3"
                    },
                    {
                              "id": "c",
                              "text": "1/4"
                    },
                    {
                              "id": "d",
                              "text": "4/1"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "1/4 = one fourth."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "1/4 = one fourth.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "1/4",
          "commonErrors": [
                    "Wrong fraction."
          ]
},
        },
        {
          id: "m3-u5-fraction-basics-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "A shape is split into 6 equal parts. You shade 4. What fraction is shaded?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "4/6"
                    },
                    {
                              "id": "b",
                              "text": "6/4"
                    },
                    {
                              "id": "c",
                              "text": "4/4"
                    },
                    {
                              "id": "d",
                              "text": "6/6"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "4 parts of 6 = 4/6."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "4 parts of 6 = 4/6.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "4/6",
          "commonErrors": [
                    "Wrong fraction."
          ]
},
        },
        {
          id: "m3-u5-fraction-basics-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "A bar is split into 8 equal parts. 5 are shaded. What fraction is shaded?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "5/8"
                    },
                    {
                              "id": "b",
                              "text": "8/5"
                    },
                    {
                              "id": "c",
                              "text": "5/5"
                    },
                    {
                              "id": "d",
                              "text": "8/8"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "5 of 8 = 5/8."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "5 of 8 = 5/8.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "5/8",
          "commonErrors": [
                    "Wrong fraction."
          ]
},
        },
        {
          id: "m3-u5-fraction-basics-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Draw or describe a shape split into 4 equal parts. Shade 1 part and name the fraction. Explain what the denominator means.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Fraction",
                              "statement": "1/4 shaded."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Names fraction.",
                              "marks": 1,
                              "markCode": "M1"
                    },
                    {
                              "reasoning": "Explains denominator.",
                              "marks": 1,
                              "markCode": "M1"
                    }
          ],
          "finalAnswer": "**1/4; denominator = total parts**",
          "commonErrors": [
                    "Wrong fraction.",
                    "No explanation."
          ]
},
        },
        {
          id: "m3-u5-fraction-basics-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Fraction\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Top number: parts we have."
                    },
                    {
                              "id": "b",
                              "text": "Part of a whole."
                    },
                    {
                              "id": "c",
                              "text": "Bottom number: total parts."
                    },
                    {
                              "id": "d",
                              "text": "1 of 2 equal parts."
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
          id: "m3-u5-fraction-basics-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Numerator\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Bottom number: total parts."
                    },
                    {
                              "id": "b",
                              "text": "1 of 2 equal parts."
                    },
                    {
                              "id": "c",
                              "text": "1 of 3 equal parts."
                    },
                    {
                              "id": "d",
                              "text": "Top number: parts we have."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Numerator\" means Top number: parts we have."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Numerator\" means Top number: parts we have.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Numerator** = Top number: parts we have.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m3-u5-fraction-basics-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Denominator\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "1 of 2 equal parts."
                    },
                    {
                              "id": "b",
                              "text": "Bottom number: total parts."
                    },
                    {
                              "id": "c",
                              "text": "1 of 3 equal parts."
                    },
                    {
                              "id": "d",
                              "text": "1 of 4 equal parts."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Denominator\" means Bottom number: total parts."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Denominator\" means Bottom number: total parts.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Denominator** = Bottom number: total parts.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
