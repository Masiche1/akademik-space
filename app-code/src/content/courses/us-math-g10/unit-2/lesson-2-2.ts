import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "m10-u2-lesson-2-2",
  code: "2-2",
  title: "The Pythagorean Theorem",
  goal: "I CAN use the Pythagorean theorem to find missing sides and distances.",
  standards: ["G-SRT.4", "G-SRT.8", "8.G.B.7"],
  vocabulary: [
    { term: "Pythagorean theorem", definition: "$a^2 + b^2 = c^2$ for right triangles, where $c$ is the hypotenuse." },
    { term: "Hypotenuse", definition: "The side opposite the right angle; always the longest side." },
    { term: "Leg", definition: "Either of the two sides forming the right angle." },
    { term: "Converse", definition: "If $a^2 + b^2 = c^2$ then the triangle is right — used to test for right angles." },
    { term: "Distance formula", definition: "$d = \\sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}$ — the Pythagorean theorem on a coordinate grid." },
  ],
  concepts: [
    {
      id: "m10-u2-pythagorean-theorem",
      title: "Pythagorean theorem",
      skill: "Find a missing side and apply the theorem in coordinate and real contexts.",
      lesson: {
        sections: [
          {
            heading: "Finding sides",
            body: "In a right triangle, $a^2 + b^2 = c^2$. Missing hypotenuse: $c = \\sqrt{a^2 + b^2}$. Missing leg: $a = \\sqrt{c^2 - b^2}$ — note the **minus** sign when solving for a leg. The $3$-$4$-$5$ and $5$-$12$-$13$ triples are worth memorizing.",
          },
          {
            heading: "Distance on the plane",
            body: "The distance between $(x_1, y_1)$ and $(x_2, y_2)$ is the hypotenuse of a right triangle with legs $|x_2 - x_1|$ and $|y_2 - y_1|$ — the distance formula is the Pythagorean theorem in disguise.",
          },
        ],
        keyFormulas: [
          { name: "Pythagorean theorem", statement: "$a^2 + b^2 = c^2$" },
          { name: "Leg", statement: "$a = \\sqrt{c^2 - b^2}$" },
          { name: "Distance", statement: "$d = \\sqrt{(\\Delta x)^2 + (\\Delta y)^2}$" },
        ],
        workedExample: {
          problem: "A right triangle has legs $9$ and $12$. Find the hypotenuse.",
          solution: "$c = \\sqrt{9^2 + 12^2} = \\sqrt{81 + 144} = \\sqrt{225} = 15$ — a $3$-$4$-$5$ triple scaled by $3$.",
        },
      },
      questions: [
        {
          id: "m10-u2-pythagorean-theorem-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A right triangle has legs $6$ and $8$. The hypotenuse is ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "$10$"
                    },
                    {
                              "id": "b",
                              "text": "$14$"
                    },
                    {
                              "id": "c",
                              "text": "$48$"
                    },
                    {
                              "id": "d",
                              "text": "$\\sqrt{28}$"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Pythagorean",
                              "statement": "$c = \\sqrt{36 + 64} = \\sqrt{100} = 10$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$6$-$8$-$10$ is a scaled $3$-$4$-$5$ triple.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**(a)** $10$",
          "commonErrors": [
                    "Adding the legs instead of using squares."
          ]
},
        },
        {
          id: "m10-u2-pythagorean-theorem-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "The hypotenuse of a right triangle is $13$ and one leg is $5$. What is the other leg?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "$8$"
                    },
                    {
                              "id": "b",
                              "text": "$12$"
                    },
                    {
                              "id": "c",
                              "text": "$18$"
                    },
                    {
                              "id": "d",
                              "text": "$\\sqrt{194}$"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Missing leg",
                              "statement": "$a = \\sqrt{169 - 25} = \\sqrt{144} = 12$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$5$-$12$-$13$ triple: other leg $= 12$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Correct leg.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(b)** $12$",
          "commonErrors": [
                    "Adding $169 + 25$ instead of subtracting."
          ]
},
        },
        {
          id: "m10-u2-pythagorean-theorem-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the distance between $(1, 2)$ and $(7, 10)$.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Distance",
                              "answer": 10
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Distance",
                              "statement": "$d = \\sqrt{6^2 + 8^2} = \\sqrt{100} = 10$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$\\Delta x = 6$, $\\Delta y = 8$; $d = \\sqrt{36+64} = 10$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Correct distance.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "$10$",
          "commonErrors": [
                    "Forgetting to square the differences."
          ]
},
        },
        {
          id: "m10-u2-pythagorean-theorem-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A rectangular TV screen is $48$ inches wide and $27$ inches tall (measured corner to corner the diagonal is the advertised size). Find the diagonal length and determine whether a triangle with sides $8, 15, 17$ is a right triangle using the converse.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Pythagorean",
                              "statement": "$d = \\sqrt{48^2 + 27^2}$."
                    },
                    {
                              "kind": "theorem",
                              "name": "Converse",
                              "statement": "Check $a^2 + b^2 = c^2$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Diagonal: $d = \\sqrt{2304 + 729} = \\sqrt{3033} \\approx 55.1$ inches.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "For $8,15,17$: $64 + 225 = 289 = 17^2$ ✓.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Yes — it is a right triangle by the converse.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "$\\approx 55.1$ in; yes, right triangle",
          "commonErrors": [
                    "Comparing $17$ to $8 + 15$ instead of checking squares."
          ]
},
        },
      ],
    },
  ],
};
