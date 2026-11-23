import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "apcbc-u2-lesson-2-3",
  code: "2-3",
  title: "Vector-Valued Functions",
  goal: "I CAN differentiate and integrate vector functions and interpret them as motion.",
  standards: ["VEC-1"],
  vocabulary: [
    { term: "Vector function", definition: "$\\vec{r}(t) = \\langle x(t), y(t) \\rangle$ — position as a vector." },
    { term: "Velocity vector", definition: "$\\vec{v}(t) = \\vec{r}'(t)$ — derivative of position." },
    { term: "Acceleration", definition: "$\\vec{a}(t) = \\vec{v}'(t) = \\vec{r}''(t)$." },
    { term: "Speed", definition: "$|\\vec{v}(t)| = \\sqrt{v_x^2 + v_y^2}$ — scalar magnitude." },
    { term: "Component-wise calculus", definition: "Derivatives and integrals of vectors act on each component independently." },
  ],
  concepts: [
    {
      id: "apcbc-u2-vectors",
      title: "Vector functions",
      skill: "Differentiate and integrate vector-valued functions componentwise.",
      lesson: {
        sections: [
          {
            heading: "Component-wise operations",
            body: "A vector function $\\vec{r}(t) = \\langle x(t), y(t)\\rangle$ differentiates component by component: $\\vec{r}'(t) = \\langle x'(t), y'(t)\\rangle$. Integration adds a constant vector: $\\int \\langle f, g \\rangle dt = \\langle \\int f\\,dt, \\int g\\,dt \\rangle + \\vec{C}$.",
          },
          {
            heading: "Motion interpretation",
            body: "Position $\\vec{r}$, velocity $\\vec{v} = \\vec{r}'$, acceleration $\\vec{a} = \\vec{v}'$. Speed is the magnitude $|\\vec{v}|$, always non-negative. For $\\vec{r}(t) = \\langle t^2, 3t \\rangle$: $\\vec{v} = \\langle 2t, 3 \\rangle$, $\\vec{a} = \\langle 2, 0 \\rangle$ — constant horizontal acceleration.",
          },
        ],
        keyFormulas: [
          { name: "Velocity", statement: "$\\vec{v}(t) = \\vec{r}'(t) = \\langle x'(t), y'(t) \\rangle$" },
          { name: "Speed", statement: "$|\\vec{v}| = \\sqrt{(x')^2 + (y')^2}$" },
        ],
        workedExample: {
          problem: "Given $\\vec{r}(t) = \\langle t^3, t^2 - t \\rangle$, find velocity and acceleration at $t = 1$.",
          solution: "$\\vec{v} = \\langle 3t^2, 2t - 1 \\rangle$, so $\\vec{v}(1) = \\langle 3, 1 \\rangle$. $\\vec{a} = \\langle 6t, 2 \\rangle$, so $\\vec{a}(1) = \\langle 6, 2 \\rangle$.",
        },
      },
      questions: [
        {
          id: "apcbc-u2-vectors-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "If $\\vec{r}(t) = \\langle t^2, 5t \\rangle$, then $\\vec{v}(t) = $.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "$\\langle 2t, 5 \\rangle$"
                    },
                    {
                              "id": "b",
                              "text": "$\\langle t, 5 \\rangle$"
                    },
                    {
                              "id": "c",
                              "text": "$\\langle 2t, t \\rangle$"
                    },
                    {
                              "id": "d",
                              "text": "$\\langle t^2, 5t \\rangle$"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Component derivative",
                              "statement": "Differentiate each component."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$\\frac{d}{dt}t^2 = 2t$ and $\\frac{d}{dt}5t = 5$.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "$\\langle 2t, 5 \\rangle$",
          "commonErrors": [
                    "Differentiating only one component."
          ]
},
        },
        {
          id: "apcbc-u2-vectors-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "For $\\vec{v}(t) = \\langle 3, 4 \\rangle$, the speed is ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "$7$"
                    },
                    {
                              "id": "b",
                              "text": "$5$"
                    },
                    {
                              "id": "c",
                              "text": "$12$"
                    },
                    {
                              "id": "d",
                              "text": "$\\sqrt{7}$"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Speed = magnitude",
                              "statement": "$\\sqrt{3^2 + 4^2} = \\sqrt{25}$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$|\\vec{v}| = 5$ — the classic 3-4-5 triangle.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "$5$",
          "commonErrors": [
                    "Adding components $3+4$ instead of the Pythagorean magnitude."
          ]
},
        },
        {
          id: "apcbc-u2-vectors-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Given $\\vec{a}(t) = \\langle 0, -9.8 \\rangle$ and $\\vec{v}(0) = \\langle 2, 10 \\rangle$, find $\\vec{v}(2)$. Enter the $y$-component.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "$v_y(2)$",
                              "answer": -9.6
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Integrate acceleration",
                              "statement": "$\\vec{v}(t) = \\vec{v}(0) + \\int_0^t \\vec{a}\\,ds$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$v_y(t) = 10 - 9.8t$; at $t=2$: $10 - 19.6 = -9.6$ m/s.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "$v_y(2) = -9.6$ (object falling back down).",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "$-9.6$ m/s",
          "commonErrors": [
                    "Sign error on gravitational acceleration."
          ]
},
        },
        {
          id: "apcbc-u2-vectors-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "For $\\vec{r}(t) = \\langle \\cos t, \\sin t \\rangle$, verify that the speed is constant and find its value.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Velocity and magnitude",
                              "statement": "$\\vec{v} = \\langle -\\sin t, \\cos t \\rangle$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$\\vec{v}(t) = \\langle -\\sin t, \\cos t \\rangle$ — unit circle traversed counterclockwise.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Speed $= \\sqrt{\\sin^2 t + \\cos^2 t} = \\sqrt{1} = 1$ for all $t$ — constant.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Speed $1$ verified as constant.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "$1$ (constant)",
          "commonErrors": [
                    "Differentiating $\\cos$/$\\sin$ with wrong signs."
          ]
},
        },
      ],
    },
  ],
};
