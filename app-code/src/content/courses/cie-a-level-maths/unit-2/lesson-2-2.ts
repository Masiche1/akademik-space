import type { Lesson } from "../../../types.ts";

export const lesson122: Lesson = {
  id: "cial-m-u2-lesson-2-2",
  code: "2-2",
  title: "Trigonometric identities and equations",
  goal: "I CAN use the Pythagorean and quotient identities and solve trigonometric equations.",
  standards: ["9709 P1: trigonometry"],
  vocabulary: [
    {
      term: "Pythagorean identity",
      definition:
        "$\\sin^2\\theta + \\cos^2\\theta = 1$ — fundamental identity from the unit circle.",
    },
    {
      term: "Quotient identity",
      definition: "$\\tan\\theta = \\dfrac{\\sin\\theta}{\\cos\\theta}$.",
    },
    {
      term: "Principal value",
      definition:
        "The first solution in $[0^\\circ, 360^\\circ)$ or $[0, 2\\pi)$, e.g. $\\arcsin(0.5) = 30^\\circ$.",
    },
    {
      term: "General solution",
      definition:
        "All solutions using $+ 360^\\circ k$ or $+ 2\\pi k$ for integer $k$.",
    },
    {
      term: "Quadrant",
      definition:
        "One of four $90^\\circ$ sectors; signs of sin/cos/tan differ by quadrant.",
    },
  ],
  concepts: [
    {
      id: "cial-m-u2-identities",
      title: "Trigonometric identities",
      skill:
        "Use $\\sin^2\\theta + \\cos^2\\theta = 1$ and $\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta}$.",
      lesson: {
        sections: [
          {
            heading: "The Pythagorean identity",
            body: "$\\sin^2\\theta + \\cos^2\\theta = 1$ holds for every angle. Rearranged: $\\sin^2\\theta = 1 - \\cos^2\\theta$ and $\\cos^2\\theta = 1 - \\sin^2\\theta$. If you know one ratio, find the others via this identity and the quadrant signs.",
          },
          {
            heading: "The quotient identity",
            body: "$\\tan\\theta = \\dfrac{\\sin\\theta}{\\cos\\theta}$. Combined with the Pythagorean identity: $\\sec^2\\theta = 1 + \\tan^2\\theta$ and $\\csc^2\\theta = 1 + \\cot^2\\theta$ (A Level extensions).",
          },
          {
            heading: "Using identities to solve",
            body: "Substitute identities to reduce equations to one trig function. E.g. $\\sin^2\\theta + \\cos^2\\theta = 1$ verifies; $2\\sin^2\\theta - \\sin\\theta - 1 = 0$ factors as $(2\\sin\\theta + 1)(\\sin\\theta - 1) = 0$.",
          },
        ],
        keyFormulas: [
          {
            name: "Pythagorean",
            statement: "$\\sin^2\\theta + \\cos^2\\theta = 1$.",
          },
          {
            name: "Quotient",
            statement: "$\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta}$.",
          },
          {
            name: "Derived",
            statement:
              "$1 + \\tan^2\\theta = \\sec^2\\theta$; $1 + \\cot^2\\theta = \\csc^2\\theta$.",
          },
        ],
        workedExample: {
          problem:
            "Given $\\sin\\theta = \\frac{3}{5}$ and $\\theta$ is acute, find $\\cos\\theta$ and $\\tan\\theta$.",
          solution:
            "$\\cos^2\\theta = 1 - \\frac{9}{25} = \\frac{16}{25}$, acute so $\\cos\\theta = \\frac{4}{5}$. Then $\\tan\\theta = \\frac{3/5}{4/5} = \\frac{3}{4}$.",
        },
      },
      questions: [
        {
          id: "cial-m-u2-id-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the value of $\\sin^2 30^\\circ + \\cos^2 30^\\circ$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$1$" },
              { id: "b", text: "$0$" },
              { id: "c", text: "$\\frac{1}{2}$" },
              { id: "d", text: "Depends on the angle" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Pythagorean identity",
                statement:
                  "$\\sin^2\\theta + \\cos^2\\theta = 1$ for all $\\theta$.",
              },
            ],
            steps: [
              {
                reasoning: "Identity holds for every angle — answer is 1.",
                working: "1",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "$1$",
            commonErrors: [
              "Computing the values separately and making an arithmetic slip.",
            ],
          },
        },
        {
          id: "cial-m-u2-id-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "If $\\sin\\theta = \\frac{3}{5}$ and $\\theta$ is acute, find $\\cos\\theta$.",
          response: {
            type: "numeric",
            parts: [{ label: "cos theta", answer: 0.8, tolerance: 0.001 }],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Pythagorean identity",
                statement:
                  "$\\cos^2\\theta = 1 - \\sin^2\\theta$; acute angle gives positive root.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$\\cos^2\\theta = 1 - \\frac{9}{25} = \\frac{16}{25}$.",
                working: "1 - \\frac{9}{25}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Acute $\\Rightarrow \\cos\\theta = \\frac{4}{5} = 0.8$.",
                working: "\\frac{4}{5}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\cos\\theta = \\frac{4}{5}$",
            commonErrors: [
              "Taking the negative root — acute angle has positive cosine.",
            ],
          },
        },
        {
          id: "cial-m-u2-id-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Prove that $\\dfrac{\\sin\\theta}{1 - \\cos\\theta} + \\dfrac{1 - \\cos\\theta}{\\sin\\theta} = 2\\csc\\theta$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Identity proof",
                statement:
                  "Combine fractions over common denominator and apply $\\sin^2 + \\cos^2 = 1$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Common denominator $\\sin\\theta(1-\\cos\\theta)$: numerator $\\sin^2\\theta + (1-\\cos\\theta)^2$.",
                working: "\\sin^2\\theta + (1-\\cos\\theta)^2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Expand: $\\sin^2\\theta + 1 - 2\\cos\\theta + \\cos^2\\theta = 2 - 2\\cos\\theta$.",
                working: "2 - 2\\cos\\theta",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Factor: $2(1 - \\cos\\theta)$.",
                working: "2(1-\\cos\\theta)",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Divide by $\\sin\\theta(1-\\cos\\theta)$ gives $\\frac{2}{\\sin\\theta} = 2\\csc\\theta$.",
                working: "\\frac{2}{\\sin\\theta}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Proved via common denominator and Pythagorean identity.",
            commonErrors: ["Expanding incorrectly or forgetting to simplify."],
          },
        },
        {
          id: "cial-m-u2-id-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Trigonometric identities.",
          parts: [
            { label: "a", prompt: "State the Pythagorean identity.", marks: 1 },
            {
              label: "b",
              prompt:
                "If $\\sin\\theta=\\frac{3}{5}$ (acute), find $\\cos\\theta$.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Find $\\tan\\theta$ for the same angle.",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "Prove $\\frac{\\sin\\theta}{1-\\cos\\theta}+\\frac{1-\\cos\\theta}{\\sin\\theta}=2\\csc\\theta$.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Identities",
                statement:
                  "$\\sin^2+\\cos^2=1$; $\\tan=\\sin/\\cos$; proofs via algebra.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$\\sin^2\\theta + \\cos^2\\theta = 1$.",
                working: "\\sin^2+\\cos^2=1",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "$\\cos^2\\theta = 1 - \\frac{9}{25} = \\frac{16}{25}$.",
                working: "\\frac{16}{25}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Acute: $\\cos\\theta = \\frac{4}{5}$.",
                working: "\\frac{4}{5}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Correct value.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "$\\tan\\theta = \\frac{3/5}{4/5} = \\frac{3}{4}$.",
                working: "\\frac{3}{4}",
                marks: 1,
                markCode: "M",
              },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "A" },
              {
                part: "d",
                reasoning: "Common denominator $\\sin\\theta(1-\\cos\\theta)$.",
                working: "\\text{common denom}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Numerator simplifies to $2(1-\\cos\\theta)$.",
                working: "2(1-\\cos\\theta)",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Dividing gives $2\\csc\\theta$.",
                working: "2\\csc\\theta",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Proof complete.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) sin²+cos²=1 (b) 4/5 (c) 3/4 (d) proved",
          },
        },
      ],
    },
    {
      id: "cial-m-u2-trig-equations",
      title: "Solving trigonometric equations",
      skill:
        "Solve equations like $a\\sin\\theta = b$ and quadratic-in-sine equations.",
      lesson: {
        sections: [
          {
            heading: "Basic equations",
            body: "For $\\sin\\theta = k$: find the principal value $\\arcsin(k)$, then use quadrant signs. In $[0^\\circ, 360^\\circ)$: sine positive in Q1, Q2; cosine positive in Q1, Q4; tangent positive in Q1, Q3. General solutions add $360^\\circ k$.",
          },
          {
            heading: "Quadratic in trig functions",
            body: "Treat $\\sin\\theta$ as a variable: $2\\sin^2\\theta - \\sin\\theta - 1 = 0$ factors to $(2\\sin\\theta+1)(\\sin\\theta-1)=0$, giving $\\sin\\theta = -\\frac{1}{2}$ or $\\sin\\theta = 1$. Solve each.",
          },
          {
            heading: "Specifying the range",
            body: "Always check the required interval. $\\sin\\theta = \\frac{1}{2}$ in $[0, 2\\pi)$ gives $\\frac{\\pi}{6}$ and $\\frac{5\\pi}{6}$; in $[0^\\circ, 180^\\circ]$ only $30^\\circ$ and $150^\\circ$ appear (sine positive throughout).",
          },
        ],
        keyFormulas: [
          {
            name: "Quadrant signs",
            statement: "ASTC: All, Sine, Tangent, Cosine positive in Q1–Q4.",
          },
          {
            name: "General solution",
            statement: "Add $360^\\circ k$ or $2\\pi k$ for all solutions.",
          },
        ],
        workedExample: {
          problem:
            "Solve $2\\sin\\theta - 1 = 0$ for $0^\\circ \\le \\theta < 360^\\circ$.",
          solution:
            "$\\sin\\theta = \\frac{1}{2}$. Principal $30^\\circ$; sine positive in Q1, Q2: $\\theta = 30^\\circ, 150^\\circ$.",
        },
      },
      questions: [
        {
          id: "cial-m-u2-te-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Solve $\\sin\\theta = \\frac{1}{2}$ for $0^\\circ \\le \\theta < 360^\\circ$. How many solutions?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Two: $30^\\circ, 150^\\circ$" },
              { id: "b", text: "One: $30^\\circ$" },
              { id: "c", text: "Four solutions" },
              { id: "d", text: "None" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Trig equation",
                statement:
                  "$\\sin\\theta = k$ has solutions in Q1 and Q2 for $0 < k < 1$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$\\sin\\theta = \\frac{1}{2}$: $30^\\circ$ and $150^\\circ$.",
                working: "30^\\circ, 150^\\circ",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "$30^\\circ, 150^\\circ$",
            commonErrors: ["Giving only the principal value $30^\\circ$."],
          },
        },
        {
          id: "cial-m-u2-te-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Solve $2\\sin\\theta - 1 = 0$ for $0^\\circ \\le \\theta < 360^\\circ$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Trig equation",
                statement:
                  "Isolate the trig function, then apply quadrant signs.",
              },
            ],
            steps: [
              {
                reasoning: "$\\sin\\theta = \\frac{1}{2}$.",
                working: "\\sin\\theta = \\frac{1}{2}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Q1 and Q2 solutions: $30^\\circ, 150^\\circ$.",
                working: "30^\\circ, 150^\\circ",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Both in range $[0^\\circ, 360^\\circ)$.",
                working: "\\text{both valid}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\theta = 30^\\circ, 150^\\circ$",
            commonErrors: [
              "Solving $2\\sin\\theta = 1$ as $\\sin\\theta = 2$.",
            ],
          },
        },
        {
          id: "cial-m-u2-te-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Solve $2\\sin^2\\theta - \\sin\\theta - 1 = 0$ for $0 \\le \\theta < 2\\pi$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Quadratic trig",
                statement:
                  "Factor treating $\\sin\\theta$ as variable, then solve each case.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Factor: $(2\\sin\\theta + 1)(\\sin\\theta - 1) = 0$.",
                working: "(2\\sin\\theta+1)(\\sin\\theta-1)=0",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "$\\sin\\theta = -\\frac{1}{2}$ or $\\sin\\theta = 1$.",
                working: "\\sin\\theta=-\\frac{1}{2},\\ 1",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "$\\sin\\theta=1$: $\\theta=\\frac{\\pi}{2}$; $\\sin\\theta=-\\frac{1}{2}$: Q3, Q4: $\\frac{7\\pi}{6}, \\frac{11\\pi}{6}$.",
                working: "\\frac{\\pi}{2},\\frac{7\\pi}{6},\\frac{11\\pi}{6}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Three solutions: $\\frac{\\pi}{2}, \\frac{7\\pi}{6}, \\frac{11\\pi}{6}$.",
                working: "\\theta \\text{ values}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "$\\theta = \\frac{\\pi}{2}, \\frac{7\\pi}{6}, \\frac{11\\pi}{6}$",
            commonErrors: ["Missing solutions from the second factor."],
          },
        },
        {
          id: "cial-m-u2-te-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Trigonometric equations.",
          parts: [
            {
              label: "a",
              prompt:
                "Solve $\\sin\\theta=\\frac{1}{2}$ in $[0^\\circ,360^\\circ)$.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Solve $2\\sin\\theta-1=0$ in $[0^\\circ,360^\\circ)$.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Solve $\\cos\\theta=-\\frac{\\sqrt{2}}{2}$ in $[0^\\circ,360^\\circ)$.",
              marks: 3,
            },
            {
              label: "d",
              prompt:
                "Solve $2\\sin^2\\theta-\\sin\\theta-1=0$ in $[0,2\\pi)$.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Trig equations",
                statement: "Isolate function, apply quadrants, check interval.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$30^\\circ, 150^\\circ$.",
                working: "30,150",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Both correct.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "$\\sin\\theta=\\frac{1}{2}$.",
                working: "\\sin\\theta=\\frac{1}{2}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$30^\\circ, 150^\\circ$.",
                working: "30,150",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Correct in range.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "$\\cos\\theta=-\\frac{\\sqrt2}{2}$: Q2, Q3.",
                working: "\\cos\\theta<0",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "$135^\\circ, 225^\\circ$.",
                working: "135,225",
                marks: 1,
                markCode: "M",
              },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "A" },
              {
                part: "d",
                reasoning: "Factor: $(2\\sin\\theta+1)(\\sin\\theta-1)=0$.",
                working: "\\text{factor}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning:
                  "$\\theta=\\frac{\\pi}{2},\\frac{7\\pi}{6},\\frac{11\\pi}{6}$.",
                working: "\\theta \\text{ values}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) 30°,150° (b) same (c) 135°,225° (d) π/2,7π/6,11π/6",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cial-m-u2-trig-identities-equations-notes",
      title: "Trigonometric identities and equations — revision notes",
      summary:
        "Pythagorean and quotient identities plus solving $\\sin\\theta=k$ and friends in a given range.",
      sections: [
        {
          heading: "Key identities",
          body: "$\\sin^2\\theta+\\cos^2\\theta=1$; $\\tan\\theta=\\frac{\\sin\\theta}{\\cos\\theta}$; $\\sec^2\\theta=1+\\tan^2\\theta$; $\\cosec^2\\theta=1+\\cot^2\\theta$. Use $\\sin^2+\\cos^2=1$ to reduce powers, e.g. $\\sin^2\\theta=1-\\cos^2\\theta$.",
        },
        {
          heading: "Solving equations",
          body: "For $\\sin\\theta=k$: find the principal value $\\alpha=\\sin^{-1}k$, then use quadrant symmetry — solutions in $[0,2\\pi)$ are $\\alpha$, $\\pi-\\alpha$, plus $2\\pi$ versions. For $\\cos\\theta=k$: $\\pm\\alpha$. For $\\tan\\theta=k$: $\\alpha$, $\\pi+\\alpha$. Always find ALL solutions in the stated range — check how many the range allows.",
        },
        {
          heading: "Quadratic in trig",
          body: "Equations like $2\\sin^2\\theta-\\sin\\theta-1=0$ factorise or use the quadratic formula with $u=\\sin\\theta$, then solve each $\\sin\\theta=u$ separately. Reject $|u|>1$.",
        },
        {
          heading: "Exam checklist",
          body: "Work in radians unless degrees are specified. Count expected solutions: $\\sin\\theta=k$ gives 2 per $2\\pi$ cycle (4 if range spans $4\\pi$). Verify each solution by substitution when unsure.",
        },
      ],
    },
  ],
};
