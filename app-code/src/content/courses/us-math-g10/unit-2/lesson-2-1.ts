import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "m10-u2-lesson-2-1",
  code: "2-1",
  title: "Similarity Criteria",
  goal: "I CAN prove triangles similar using AA, SAS and SSS similarity.",
  standards: ["G-SRT.2", "G-SRT.3"],
  vocabulary: [
    { term: "Similar", definition: "Same shape, possibly different size; corresponding angles equal and sides proportional." },
    { term: "AA similarity", definition: "Two pairs of equal angles prove similarity — the third follows automatically." },
    { term: "SAS similarity", definition: "Two proportional sides and the included angle equal prove similarity." },
    { term: "SSS similarity", definition: "All three pairs of sides proportional prove similarity." },
    { term: "Scale factor", definition: "The constant ratio of corresponding sides, $k$." },
  ],
  concepts: [
    {
      id: "m10-u2-similarity-criteria",
      title: "Proving similarity",
      skill: "Choose the correct similarity criterion from given information.",
      lesson: {
        sections: [
          {
            heading: "AA is the workhorse",
            body: "Because a triangle's angles sum to $180^\\circ$, matching **two** angles forces the third to match too — so AA similarity is the most-used criterion. Parallel lines cut by a transversal create equal corresponding angles, making AA the standard tool for shadow and map problems.",
          },
          {
            heading: "Side-based criteria",
            body: "**SAS~** needs two sides in proportion *and* the included angle equal. **SSS~** needs all three side ratios equal to the same scale factor $k$. Congruence is the special case $k = 1$.",
          },
        ],
        keyFormulas: [
          { name: "AA", statement: "Two pairs of equal angles $\\Rightarrow$ similar" },
          { name: "Scale factor", statement: "$k = \\frac{\\text{image side}}{\\text{original side}}$" },
        ],
        workedExample: {
          problem: "Triangle $ABC$ has angles $50^\\circ, 60^\\circ, 70^\\circ$. Triangle $DEF$ has angles $50^\\circ, 60^\\circ, 70^\\circ$ but sides twice as long. Are they similar?",
          solution: "Yes — AA similarity (two equal angles suffice). Scale factor $k = 2$.",
        },
      },
      questions: [
        {
          id: "m10-u2-similarity-criteria-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Two triangles share two pairs of equal angles. They are ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "congruent only if sides match"
                    },
                    {
                              "id": "b",
                              "text": "similar by AA"
                    },
                    {
                              "id": "c",
                              "text": "not necessarily related"
                    },
                    {
                              "id": "d",
                              "text": "equal in area"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "theorem",
                              "name": "AA similarity",
                              "statement": "Two angle pairs force similarity."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "AA similarity applies — the third angles must also match.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(b)** similar by AA",
          "commonErrors": [
                    "Demanding a third angle or side condition that AA doesn't need."
          ]
},
        },
        {
          id: "m10-u2-similarity-criteria-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Triangles have sides $6, 8, 10$ and $9, 12, 15$. They are ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "congruent"
                    },
                    {
                              "id": "b",
                              "text": "similar with $k = \\frac{3}{2}$"
                    },
                    {
                              "id": "c",
                              "text": "similar with $k = 5$"
                    },
                    {
                              "id": "d",
                              "text": "neither similar nor congruent"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Check ratios",
                              "statement": "$\\frac{9}{6} = \\frac{12}{8} = \\frac{15}{10} = 1.5$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "All three ratios equal $1.5$, so SSS~ similarity with scale factor $\\frac{3}{2}$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Correct conclusion.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(b)** similar, $k = \\frac{3}{2}$",
          "commonErrors": [
                    "Comparing $15 - 6 = 9$ (difference) instead of ratios."
          ]
},
        },
        {
          id: "m10-u2-similarity-criteria-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "A triangle's sides are $4, 6, 8$. A similar triangle's shortest side is $10$. What is its longest side?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Longest side",
                              "answer": 20
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Scale factor",
                              "statement": "$k = \\frac{10}{4} = 2.5$; longest $= 8 \\times 2.5$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$k = 2.5$; longest side $= 20$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Correct value.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "$20$",
          "commonErrors": [
                    "Applying the scale factor to the wrong corresponding side."
          ]
},
        },
        {
          id: "m10-u2-similarity-criteria-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A $2$ m stick casts a $3$ m shadow. At the same time, a tree casts a $21$ m shadow. How tall is the tree? Explain the geometric reason the triangles are similar.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "model",
                              "name": "Similar triangles",
                              "statement": "Sun's rays are parallel, so corresponding angles are equal — AA similarity."
                    },
                    {
                              "kind": "method",
                              "name": "Proportion",
                              "statement": "Height-to-shadow ratio is constant."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The stick and its shadow form a right triangle; the tree and its shadow form another, with equal angles from parallel sun rays — AA similar.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Set up $\\frac{h}{21} = \\frac{2}{3}$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "$h = 14$ m.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "$14$ m",
          "commonErrors": [
                    "Adding shadow lengths instead of using a ratio."
          ]
},
        },
      ],
    },
  ],
};
