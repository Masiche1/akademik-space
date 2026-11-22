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
            { id: "a", text: "$2\\sin\\theta\\cos\\theta$" },
            { id: "b", text: "$2\\sin\\theta$" },
            { id: "c", text: "$\\cos 2\\theta$" },
            { id: "d", text: "$\\sin^2\\theta$" },
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
        {
          id: "cialfm-u4-s1-id-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "$\\tan 2\\theta$ equals…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\frac{1-\\tan^2\\theta}{2\\tan\\theta}$" },
            { id: "b", text: "$\\frac{2\\tan\\theta}{1+\\tan^2\\theta}$" },
            { id: "c", text: "$\\frac{2\\tan\\theta}{1-\\tan^2\\theta}$" },
            { id: "d", text: "$\\tan^2\\theta - 1$" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "law", name: "Double angle", statement: "Standard identity." }],
            steps: [{ reasoning: "$\\tan 2\\theta = \\frac{2\\tan\\theta}{1-\\tan^2\\theta}$.", marks: 1, markCode: "A" }],
            finalAnswer: "**(c)** $\\frac{2\\tan\\theta}{1-\\tan^2\\theta}$",
          },
        },
        {
          id: "cialfm-u4-s1-id-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Given $\\sin\\theta = \\frac{3}{5}$ and $\\cos\\theta = \\frac{4}{5}$, find $\\sin 2\\theta$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 0.96 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Double angle", statement: "$2\\sin\\theta\\cos\\theta$." }],
            steps: [
              { reasoning: "$\\sin 2\\theta = 2 \\times \\frac{3}{5} \\times \\frac{4}{5} = \\frac{24}{25}$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $0.96$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "0.96",
          },
        },
        {
          id: "cialfm-u4-s1-id-q7",
          difficulty: "core",
          totalMarks: 3,
          stem: "Prove that $\\cos 2\\theta = \\frac{1-\\tan^2\\theta}{1+\\tan^2\\theta}$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Identity proof", statement: "Express in sin/cos then divide by $\\cos^2$." }],
            steps: [
              { reasoning: "$\\cos 2\\theta = \\cos^2\\theta - \\sin^2\\theta$; divide top and bottom by $\\cos^2\\theta$.", marks: 1, markCode: "M" },
              { reasoning: "Get $\\frac{1-\\tan^2\\theta}{\\sec^2\\theta} = \\frac{1-\\tan^2\\theta}{1+\\tan^2\\theta}$. ✓", marks: 1, markCode: "M" },
              { reasoning: "Identity established.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Proved",
          },
        },
        {
          id: "cialfm-u4-s1-id-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "$\\sin(A-B)$ equals…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\cos A\\cos B + \\sin A\\sin B$" },
            { id: "b", text: "$\\sin A\\cos B - \\cos A\\sin B$" },
            { id: "c", text: "$\\sin A\\sin B - \\cos A\\cos B$" },
            { id: "d", text: "$\\sin A\\cos B + \\cos A\\sin B$" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "law", name: "Compound angle", statement: "Standard identity." }],
            steps: [{ reasoning: "$\\sin(A-B) = \\sin A\\cos B - \\cos A\\sin B$.", marks: 1, markCode: "A" }],
            finalAnswer: "**(b)** $\\sin A\\cos B - \\cos A\\sin B$",
          },
        },
        {
          id: "cialfm-u4-s1-id-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "If $\\tan\\theta = \\frac{1}{2}$ ($\\theta$ acute), find $\\sin 2\\theta$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 0.8 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Double angle", statement: "$\\sin2\\theta=\\frac{2\\tan\\theta}{1+\\tan^2\\theta}$." }],
            steps: [
              { reasoning: "$\\sin 2\\theta = \\frac{2(\\frac12)}{1+\\frac14} = \\frac{1}{\\frac54} = \\frac45$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $0.8$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "0.8",
          },
        },
        {
          id: "cialfm-u4-s1-id-q10",
          difficulty: "core",
          totalMarks: 4,
          stem: "Solve $2\\sin^2\\theta = \\cos\\theta$ for $0 \\leq \\theta < 2\\pi$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Trig equation", statement: "Use $\\sin^2=1-\\cos^2$ and factorise." }],
            steps: [
              { reasoning: "$2(1-\\cos^2\\theta) = \\cos\\theta$ → $2\\cos^2\\theta + \\cos\\theta - 2 = 0$.", marks: 1, markCode: "M" },
              { reasoning: "$\\cos\\theta = \\frac{-1 \\pm \\sqrt{17}}{4}$; only $\\frac{-1+\\sqrt{17}}{4} \\approx 0.78$ valid.", marks: 1, markCode: "M" },
              { reasoning: "$\\cos\\theta \\approx 0.78$ gives $\\theta \\approx 0.675, 5.61$ rad.", marks: 1, markCode: "M" },
              { reasoning: "Answer shown to 3 s.f.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\theta \\approx 0.675, 5.61$ rad",
          },
        },
        {
          id: "cialfm-u4-s1-id-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "$\\cos 3\\theta$ in terms of $\\cos\\theta$ is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$4\\cos^3\\theta + 3\\cos\\theta$" },
            { id: "b", text: "$4\\cos^3\\theta - 3\\cos\\theta$" },
            { id: "c", text: "$\\cos^3\\theta$" },
            { id: "d", text: "$3\\cos\\theta - 4\\cos^3\\theta$" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "law", name: "Triple angle", statement: "Derived from compound angles." }],
            steps: [{ reasoning: "$\\cos 3\\theta = \\cos(2\\theta+\\theta) = 4\\cos^3\\theta - 3\\cos\\theta$.", marks: 1, markCode: "A" }],
            finalAnswer: "**(b)** $4\\cos^3\\theta - 3\\cos\\theta$",
          },
        },
        {
          id: "cialfm-u4-s1-id-q12",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Use a compound angle identity to find $\\sin 75^\\circ$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 0.9659, tolerance: 0.001 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Compound angle", statement: "$\\sin(45^\\circ+30^\\circ)$." }],
            steps: [
              { reasoning: "$\\sin 75^\\circ = \\sin45^\\circ\\cos30^\\circ + \\cos45^\\circ\\sin30^\\circ = \\frac{\\sqrt6+\\sqrt2}{4}$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $0.9659$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "0.9659",
          },
        },
        {
          id: "cialfm-u4-s1-id-q13",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Solve $\\cos 2\\theta + \\sin\\theta = 0$ for $0 \\leq \\theta < 2\\pi$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Trig equation", statement: "Express everything in $\\sin\\theta$ and factorise." }],
            steps: [
              { reasoning: "$1 - 2\\sin^2\\theta + \\sin\\theta = 0$ → $2\\sin^2\\theta - \\sin\\theta - 1 = 0$.", marks: 1, markCode: "M" },
              { reasoning: "$(2\\sin\\theta+1)(\\sin\\theta-1)=0$ → $\\sin\\theta = -\\frac12$ or $1$.", marks: 1, markCode: "M" },
              { reasoning: "$\\sin\\theta = 1$ gives $\\theta = \\frac{\\pi}{2}$.", marks: 1, markCode: "M" },
              { reasoning: "$\\sin\\theta = -\\frac12$ gives $\\theta = \\frac{7\\pi}{6}, \\frac{11\\pi}{6}$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $\\frac{\\pi}{2}, \\frac{7\\pi}{6}, \\frac{11\\pi}{6}$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\theta = \\frac{\\pi}{2}, \\frac{7\\pi}{6}, \\frac{11\\pi}{6}$",
          },
        },
        {
          id: "cialfm-u4-s1-id-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "$\\tan(A+B)$ equals…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\frac{\\tan A - \\tan B}{1 + \\tan A\\tan B}$" },
            { id: "b", text: "$\\tan A + \\tan B$" },
            { id: "c", text: "$\\frac{\\tan A + \\tan B}{1 - \\tan A\\tan B}$" },
            { id: "d", text: "$\\frac{\\tan A\\tan B}{1-\\tan A-\\tan B}$" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "law", name: "Compound angle", statement: "Standard identity." }],
            steps: [{ reasoning: "$\\tan(A+B) = \\frac{\\tan A+\\tan B}{1-\\tan A\\tan B}$.", marks: 1, markCode: "A" }],
            finalAnswer: "**(c)** $\\frac{\\tan A + \\tan B}{1 - \\tan A\\tan B}$",
          },
        },
        {
          id: "cialfm-u4-s1-id-q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "Given $\\cos\\theta = \\frac{1}{3}$, find $\\cos 2\\theta$.",
          response: { type: "numeric", parts: [{ label: "a", answer: -0.7778, tolerance: 0.001 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Double angle", statement: "$2\\cos^2\\theta-1$." }],
            steps: [
              { reasoning: "$\\cos 2\\theta = 2\\left(\\frac13\\right)^2 - 1 = \\frac{2}{9} - 1 = -\\frac{7}{9}$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $-0.7778$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "-0.7778",
          },
        },
        {
          id: "cialfm-u4-s1-id-q16",
          difficulty: "core",
          totalMarks: 4,
          stem: "Prove that $\\sin(A+B)\\sin(A-B) = \\sin^2 A - \\sin^2 B$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Identity proof", statement: "Expand both factors and simplify." }],
            steps: [
              { reasoning: "LHS $= (\\sin A\\cos B + \\cos A\\sin B)(\\sin A\\cos B - \\cos A\\sin B)$.", marks: 1, markCode: "M" },
              { reasoning: "$= \\sin^2 A\\cos^2 B - \\cos^2 A\\sin^2 B$ (difference of squares).", marks: 1, markCode: "M" },
              { reasoning: "$= \\sin^2 A(1-\\sin^2 B) - (1-\\sin^2 A)\\sin^2 B = \\sin^2 A - \\sin^2 B$. ✓", marks: 1, markCode: "M" },
              { reasoning: "Identity proved.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Proved",
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
            { id: "a", text: "Exponential equations" },
            { id: "b", text: "Linear equations" },
            { id: "c", text: "Polynomial equations" },
            { id: "d", text: "Logarithmic equations" },
          ], correctChoiceId: "c" },
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
        {
          id: "cialfm-u4-s1-eq-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "With $t = \\tan\\frac{\\theta}{2}$, $\\sin\\theta$ becomes…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\frac{1-t^2}{1+t^2}$" },
            { id: "b", text: "$\\frac{t}{1+t^2}$" },
            { id: "c", text: "$\\frac{2t}{1-t^2}$" },
            { id: "d", text: "$\\frac{2t}{1+t^2}$" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "formula", name: "t-substitution", statement: "Standard result." }],
            steps: [{ reasoning: "$\\sin\\theta = \\frac{2t}{1+t^2}$; $\\cos\\theta = \\frac{1-t^2}{1+t^2}$, $\\tan\\theta = \\frac{2t}{1-t^2}$.", marks: 1, markCode: "A" }],
            finalAnswer: "**(d)** $\\frac{2t}{1+t^2}$",
          },
        },
        {
          id: "cialfm-u4-s1-eq-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Solve $\\sin\\theta = \\frac{\\sqrt{3}}{2}$ for $0 \\leq \\theta < 2\\pi$.",
          response: { type: "numeric", parts: [
            { label: "a", answer: 1.0472, tolerance: 0.001 },
            { label: "b", answer: 2.0944, tolerance: 0.001 },
          ], unordered: true },
          markscheme: {
            principles: [{ kind: "technique", name: "Basic equation", statement: "Standard solutions." }],
            steps: [
              { reasoning: "$\\theta = \\frac{\\pi}{3}, \\frac{2\\pi}{3}$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $1.0472, 2.0944$ rad.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$1.0472, 2.0944$",
          },
        },
        {
          id: "cialfm-u4-s1-eq-q7",
          difficulty: "core",
          totalMarks: 3,
          stem: "Solve $2\\cos^2\\theta - 3\\cos\\theta + 1 = 0$ for $0 \\leq \\theta < 2\\pi$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Quadratic in cos", statement: "Factorise." }],
            steps: [
              { reasoning: "$(2\\cos\\theta-1)(\\cos\\theta-1)=0$ → $\\cos\\theta = \\frac12$ or $1$.", marks: 1, markCode: "M" },
              { reasoning: "$\\theta = \\frac{\\pi}{3}, \\frac{5\\pi}{3}, 0$.", marks: 1, markCode: "M" },
              { reasoning: "Answer shown.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\theta = 0, \\frac{\\pi}{3}, \\frac{5\\pi}{3}$",
          },
        },
        {
          id: "cialfm-u4-s1-eq-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Solve $\\tan\\theta + \\cot\\theta = 2$ for $0 < \\theta < \\pi$.",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\frac{\\pi}{3}$" },
            { id: "b", text: "$\\frac{\\pi}{2}$" },
            { id: "c", text: "No solution" },
            { id: "d", text: "$\\frac{\\pi}{4}$" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "technique", name: "Trig equation", statement: "Convert to $\\sin 2\\theta$." }],
            steps: [
              { reasoning: "$\\frac{1}{\\sin\\theta\\cos\\theta} = 2$ → $\\sin 2\\theta = 1$ → $\\theta = \\frac{\\pi}{4}$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** $\\frac{\\pi}{4}$",
          },
        },
        {
          id: "cialfm-u4-s1-eq-q9",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Solve $\\sin\\theta = 1 + \\cos\\theta$ for $0 \\leq \\theta < 2\\pi$, using $t = \\tan\\frac{\\theta}{2}$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "t-substitution", statement: "Convert and solve quadratic in $t$." }],
            steps: [
              { reasoning: "$\\frac{2t}{1+t^2} = 1 + \\frac{1-t^2}{1+t^2} = \\frac{2}{1+t^2}$ → $2t = 2$ → $t = 1$.", marks: 1, markCode: "M" },
              { reasoning: "$\\tan\\frac{\\theta}{2} = 1$ → $\\frac{\\theta}{2} = \\frac{\\pi}{4}$ → $\\theta = \\frac{\\pi}{2}$.", marks: 1, markCode: "M" },
              { reasoning: "$\\theta = \\pi$ is also a solution (where $t$ is undefined; check directly).", marks: 1, markCode: "M" },
              { reasoning: "Verify $\\theta=\\pi$: $\\sin\\pi = 0$, $1+\\cos\\pi = 0$. ✓", marks: 1, markCode: "M" },
              { reasoning: "Answer: $\\theta = \\frac{\\pi}{2}, \\pi$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\theta = \\frac{\\pi}{2}, \\pi$",
          },
        },
        {
          id: "cialfm-u4-s1-eq-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "Solve $\\cos\\theta = -\\frac{1}{2}$ for $0 \\leq \\theta < 2\\pi$.",
          response: { type: "numeric", parts: [
            { label: "a", answer: 2.0944, tolerance: 0.001 },
            { label: "b", answer: 4.1888, tolerance: 0.001 },
          ], unordered: true },
          markscheme: {
            principles: [{ kind: "technique", name: "Basic equation", statement: "Standard solutions." }],
            steps: [
              { reasoning: "$\\theta = \\frac{2\\pi}{3}, \\frac{4\\pi}{3}$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $2.0944, 4.1888$ rad.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2.0944, 4.1888$",
          },
        },
        {
          id: "cialfm-u4-s1-eq-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The equation $3\\sin^2\\theta - \\sin\\theta - 1 = 0$ is best tackled by…",
          response: { type: "mcq", choices: [
            { id: "a", text: "t-substitution immediately" },
            { id: "b", text: "Treating it as a quadratic in $\\sin\\theta$" },
            { id: "c", text: "Squaring both sides" },
            { id: "d", text: "Graphing only" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "technique", name: "Strategy", statement: "Quadratic in one trig function." }],
            steps: [{ reasoning: "Let $u=\\sin\\theta$: $3u^2-u-1=0$.", marks: 1, markCode: "A" }],
            finalAnswer: "**(b)** Quadratic in $\\sin\\theta$",
          },
        },
        {
          id: "cialfm-u4-s1-eq-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Solve $\\tan 2\\theta = 1$ for $0 \\leq \\theta < \\pi$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Double angle equation", statement: "Solve for $2\\theta$ then halve." }],
            steps: [
              { reasoning: "$2\\theta = \\frac{\\pi}{4}, \\frac{5\\pi}{4}$ (within $0 \\leq 2\\theta < 2\\pi$).", marks: 1, markCode: "M" },
              { reasoning: "$\\theta = \\frac{\\pi}{8}, \\frac{5\\pi}{8}$.", marks: 1, markCode: "M" },
              { reasoning: "Answer shown.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\theta = \\frac{\\pi}{8}, \\frac{5\\pi}{8}$",
          },
        },
        {
          id: "cialfm-u4-s1-eq-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "How many solutions does $\\cos 2\\theta = \\cos\\theta$ have in $0 \\leq \\theta < 2\\pi$?",
          response: { type: "numeric", parts: [{ label: "a", answer: 3 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Count solutions", statement: "Solve then count." }],
            steps: [
              { reasoning: "$2\\cos^2\\theta-\\cos\\theta-1=0$ → $\\cos\\theta = 1$ or $-\\frac12$ → $\\theta = 0, \\frac{\\pi}{3}, \\frac{5\\pi}{3}$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 3 solutions.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "3",
          },
        },
        {
          id: "cialfm-u4-s1-eq-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which equation is most suited to the $t = \\tan\\frac{\\theta}{2}$ substitution?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\sin\\theta + \\cos\\theta = \\tan\\theta$" },
            { id: "b", text: "$\\sin\\theta = \\frac12$" },
            { id: "c", text: "$\\tan\\theta = 1$" },
            { id: "d", text: "$\\cos 2\\theta = 0$" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "technique", name: "t-substitution", statement: "Mixed functions of $\\theta$ reduce to polynomial in $t$." }],
            steps: [{ reasoning: "Mixed $\\sin, \\cos, \\tan$ of $\\theta$ all become rational in $t$ — a polynomial equation.", marks: 1, markCode: "A" }],
            finalAnswer: "**(a)** $\\sin\\theta + \\cos\\theta = \\tan\\theta$",
          },
        },
        {
          id: "cialfm-u4-s1-eq-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Solve $\\sin 2\\theta = \\cos\\theta$ for $0 \\leq \\theta < 2\\pi$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Factorise", statement: "Factor out $\\cos\\theta$." }],
            steps: [
              { reasoning: "$2\\sin\\theta\\cos\\theta - \\cos\\theta = 0$ → $\\cos\\theta(2\\sin\\theta - 1) = 0$.", marks: 1, markCode: "M" },
              { reasoning: "$\\cos\\theta = 0$ → $\\theta = \\frac{\\pi}{2}, \\frac{3\\pi}{2}$.", marks: 1, markCode: "M" },
              { reasoning: "$\\sin\\theta = \\frac12$ → $\\theta = \\frac{\\pi}{6}, \\frac{5\\pi}{6}$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $\\frac{\\pi}{6}, \\frac{\\pi}{2}, \\frac{5\\pi}{6}, \\frac{3\\pi}{2}$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\theta = \\frac{\\pi}{6}, \\frac{\\pi}{2}, \\frac{5\\pi}{6}, \\frac{3\\pi}{2}$",
          },
        },
        {
          id: "cialfm-u4-s1-eq-q16",
          difficulty: "core",
          totalMarks: 4,
          stem: "Solve $\\sin\\theta + \\sqrt{3}\\cos\\theta = 1$ for $0 \\leq \\theta < 2\\pi$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "R-form", statement: "Write as $R\\sin(\\theta+\\alpha)$." }],
            steps: [
              { reasoning: "$2\\sin\\left(\\theta + \\frac{\\pi}{3}\\right) = 1$ → $\\sin\\left(\\theta+\\frac{\\pi}{3}\\right) = \\frac12$.", marks: 1, markCode: "M" },
              { reasoning: "$\\theta + \\frac{\\pi}{3} = \\frac{\\pi}{6}, \\frac{5\\pi}{6}, \\frac{13\\pi}{6}$ in range.", marks: 1, markCode: "M" },
              { reasoning: "$\\theta = -\\frac{\\pi}{6}$ (i.e. $\\frac{11\\pi}{6}$) and $\\theta = \\frac{\\pi}{2}$.", marks: 1, markCode: "M" },
              { reasoning: "Answer shown.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\theta = \\frac{\\pi}{2}, \\frac{11\\pi}{6}$",
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
