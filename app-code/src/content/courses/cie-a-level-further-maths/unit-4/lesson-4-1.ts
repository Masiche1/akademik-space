import type { Lesson } from "../../../types.ts";

export const lesson41: Lesson = {
  id: "cialfm-u4-lesson-4-1",
  code: "4-1",
  title: "Further trigonometric identities",
  goal: "I CAN use advanced trig identities to simplify and solve.",
  standards: ["9231 P1: further trigonometry"],
  vocabulary: [
    { term: "Double angle", definition: "$\\sin 2\\theta = 2\\sin\\theta\\cos\\theta$." },
    { term: "Half angle", definition: "Identities for $\\sin\\frac{\\theta}{2}$ etc." },
    { term: "Sum-to-product", definition: "Converting sums of sines/cosines to products." },
    { term: "t = tan(θ/2)", definition: "Weierstrass substitution for trig equations." },
  ],
  concepts: [
    {
      id: "cialfm-u4-s1-identities",
      title: "Double and compound angle identities",
      skill: "Apply advanced trig identities at A Level.",
      lesson: {
        sections: [
          {
            heading: "Double angle",
            body: "$\\sin 2\\theta = 2\\sin\\theta\\cos\\theta$; $\\cos 2\\theta = \\cos^2\\theta - \\sin^2\\theta = 2\\cos^2\\theta - 1 = 1 - 2\\sin^2\\theta$; $\\tan 2\\theta = \\frac{2\\tan\\theta}{1-\\tan^2\\theta}$.",
          },
          {
            heading: "Sum and difference",
            body: "$\\sin(A+B) = \\sin A\\cos B + \\cos A\\sin B$; $\\cos(A-B) = \\cos A\\cos B + \\sin A\\sin B$.",
          },
        ],
        keyFormulas: [
          { name: "Double angle cos", statement: "$\\cos 2\\theta = 2\\cos^2\\theta - 1$" },
          { name: "Double angle sin", statement: "$\\sin 2\\theta = 2\\sin\\theta\\cos\\theta$" },
        ],
        workedExample: {
          problem: "Express $\\cos 2\\theta$ in terms of $\\sin\\theta$ only.",
          solution: "$\\cos 2\\theta = 1 - 2\\sin^2\\theta$.",
        },
      },
      questions: [
        {
          id: "cialfm-u4-s1-id-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "$\\sin 2\\theta$ equals…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$2\\sin\\theta\\cos\\theta$" }, { id: "b", text: "$2\\sin\\theta$" }, { id: "c", text: "$\\sin^2\\theta$" }, { id: "d", text: "$\\cos 2\\theta$" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "law", name: "Double angle", statement: "Standard identity." }],
            steps: [{ reasoning: "$\\sin 2\\theta = 2\\sin\\theta\\cos\\theta$.", marks: 1, markCode: "A" }],
            finalAnswer: "$2\\sin\\theta\\cos\\theta$",
          },
        },
        {
          id: "cialfm-u4-s1-id-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Express $\\cos 2\\theta$ using only $\\cos\\theta$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "law", name: "Double angle", statement: "$2\\cos^2-1$." }],
            steps: [
              { reasoning: "$\\cos 2\\theta = 2\\cos^2\\theta - 1$.", marks: 1, markCode: "M" },
              { reasoning: "Answer shown.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2\\cos^2\\theta - 1$",
          },
        },
        {
          id: "cialfm-u4-s1-id-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Prove $\\sin 2\\theta = \\frac{2\\tan\\theta}{1+\\tan^2\\theta}$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Identity proof", statement: "Use definitions." }],
            steps: [
              { reasoning: "$\\sin 2\\theta = 2\\sin\\theta\\cos\\theta$.", marks: 1, markCode: "M" },
              { reasoning: "Divide by $\\cos^2\\theta$: $\\frac{2\\tan\\theta}{\\sec^2\\theta} = \\frac{2\\tan\\theta}{1+\\tan^2\\theta}$. ✓", marks: 1, markCode: "M" },
              { reasoning: "Identity proved.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Proved",
          },
        },
        {
          id: "cialfm-u4-s1-id-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Solve $\\cos 2\\theta = \\cos\\theta$ for $0 \\leq \\theta < 2\\pi$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Trig equation", statement: "Expand and factorise." }],
            steps: [
              { reasoning: "$2\\cos^2\\theta - 1 = \\cos\\theta$ → $2\\cos^2\\theta - \\cos\\theta - 1 = 0$.", marks: 1, markCode: "M" },
              { reasoning: "$(2\\cos\\theta+1)(\\cos\\theta-1)=0$ → $\\cos\\theta = -\\frac12$ or $1$.", marks: 1, markCode: "M" },
              { reasoning: "$\\theta = \\frac{\\pi}{3}, \\frac{5\\pi}{3}, 0$.", marks: 1, markCode: "M" },
              { reasoning: "Answer complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\theta = 0, \\frac{\\pi}{3}, \\frac{5\\pi}{3}$",
          },
        },
      ],
    },
    {
      id: "cialfm-u4-s1-equations",
      title: "Trigonometric equations",
      skill: "Solve advanced trig equations at A Level.",
      lesson: {
        sections: [
          {
            heading: "Strategies",
            body: "Factorise, use identities to reduce to basic form, or substitute $t=\\tan\\frac{\\theta}{2}$ to get a polynomial.",
          },
          {
            heading: "t-substitution",
            body: "$\\sin\\theta = \\frac{2t}{1+t^2}$, $\\cos\\theta = \\frac{1-t^2}{1+t^2}$, $\\tan\\theta = \\frac{2t}{1-t^2}$ where $t=\\tan\\frac{\\theta}{2}$.",
          },
        ],
        keyFormulas: [
          { name: "t-sub", statement: "$\\sin\\theta=\\frac{2t}{1+t^2}$, $\\cos\\theta=\\frac{1-t^2}{1+t^2}$" },
        ],
        workedExample: {
          problem: "Solve $\\sin\\theta + \\cos\\theta = 1$.",
          solution: "Square or use identities; solutions include $\\theta = 0, \\frac{\\pi}{2}$.",
        },
      },
      questions: [
        {
          id: "cialfm-u4-s1-eq-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The substitution $t = \\tan\\frac{\\theta}{2}$ converts trig equations to…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Polynomial equations" }, { id: "b", text: "Linear equations" }, { id: "c", text: "Exponential equations" }, { id: "d", text: "Logarithmic equations" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "property", name: "t-substitution", statement: "Gives polynomial." }],
            steps: [{ reasoning: "t-sub yields polynomial in $t$.", marks: 1, markCode: "A" }],
            finalAnswer: "Polynomial",
          },
        },
        {
          id: "cialfm-u4-s1-eq-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Solve $\\sin\\theta = \\frac{1}{2}$ for $0 \\leq \\theta < 2\\pi$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Basic equation", statement: "Standard solutions." }],
            steps: [
              { reasoning: "$\\theta = \\frac{\\pi}{6}, \\frac{5\\pi}{6}$.", marks: 1, markCode: "M" },
              { reasoning: "Answer shown.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac{\\pi}{6}, \\frac{5\\pi}{6}$",
          },
        },
        {
          id: "cialfm-u4-s1-eq-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Solve $2\\cos^2\\theta - \\cos\\theta - 1 = 0$ for $0 \\leq \\theta < 2\\pi$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Quadratic in cos", statement: "Factorise." }],
            steps: [
              { reasoning: "$(2\\cos\\theta+1)(\\cos\\theta-1)=0$.", marks: 1, markCode: "M" },
              { reasoning: "$\\cos\\theta = -\\frac12$ or $1$ → $\\theta = \\frac{2\\pi}{3}, \\frac{4\\pi}{3}, 0$.", marks: 1, markCode: "M" },
              { reasoning: "Answer shown.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$0, \\frac{2\\pi}{3}, \\frac{4\\pi}{3}$",
          },
        },
        {
          id: "cialfm-u4-s1-eq-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Solve $\\tan\\theta + \\cot\\theta = 4$ for $0 < \\theta < \\frac{\\pi}{2}$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Trig equation", statement: "Convert to sin/cos." }],
            steps: [
              { reasoning: "$\\frac{\\sin\\theta}{\\cos\\theta} + \\frac{\\cos\\theta}{\\sin\\theta} = \\frac{1}{\\sin\\theta\\cos\\theta} = 4$.", marks: 1, markCode: "M" },
              { reasoning: "$\\sin 2\\theta = \\frac{1}{2}$ (using $\\sin2\\theta=2\\sin\\theta\\cos\\theta$).", marks: 1, markCode: "M" },
              { reasoning: "$2\\theta = \\frac{\\pi}{6}, \\frac{5\\pi}{6}$ → $\\theta = \\frac{\\pi}{12}, \\frac{5\\pi}{12}$.", marks: 1, markCode: "M" },
              { reasoning: "Answer shown.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\theta = \\frac{\\pi}{12}, \\frac{5\\pi}{12}$",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cialfm-u4-s1-trig-notes",
      title: "Further trigonometry — revision notes",
      summary: "Double angle, sum-to-product, t-substitution.",
      sections: [
        { heading: "Identities", body: "$\\cos2\\theta$ has three forms. $\\sin2\\theta=2\\sin\\theta\\cos\\theta$." },
        { heading: "Equations", body: "Reduce to basic form or use $t=\\tan\\frac{\\theta}{2}$ for difficult equations." },
      ],
    },
  ],
};
