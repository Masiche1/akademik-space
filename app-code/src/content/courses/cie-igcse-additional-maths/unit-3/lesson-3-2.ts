import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "ciam-u3-lesson-3-2",
  code: "3-2",
  title: "Trigonometric Identities",
  goal: "I CAN use trigonometric identities to simplify and solve.",
  standards: ["0606: trigonometric identities"],
  vocabulary: [
    { term: "Identity", definition: "Equation true for all values of variable." },
    { term: "Pythagorean identity", definition: "$\\sin^2\\theta+\\cos^2\\theta=1$." },
    { term: "Double angle", definition: "$\\sin2\\theta=2\\sin\\theta\\cos\\theta$ etc." },
    { term: "Reciprocal", definition: "$\\csc=\\frac1\\sin$, $\\sec=\\frac1\\cos$, $\\cot=\\frac1{\\tan}$." },
  ],
  concepts: [
    {
      id: "ciam-u3-s2-basic",
      title: "Basic identities",
      skill: "Use Pythagorean and reciprocal identities at IGCSE level.",
      lesson: {
        sections: [
          { heading: "The master identity", body: "The Pythagorean identity $\\sin^2\\theta+\\cos^2\\theta=1$ comes straight from Pythagoras applied to the unit circle — it is true for every angle. From it you can derive the other two forms: divide by $\\cos^2\\theta$ to get $1+\\tan^2\\theta=\\sec^2\\theta$, or by $\\sin^2\\theta$ to get $1+\\cot^2\\theta=\\csc^2\\theta$. These let you convert between trig functions freely, which is essential for simplifying expressions and proving identities." },
          { heading: "Using identities", body: "To simplify an expression containing squares of trig functions, replace $\\sin^2\\theta$ with $1-\\cos^2\\theta$ (or vice versa) to reduce to a single function. For example $\\frac{\\sin^2\\theta}{1-\\cos^2\\theta}=\\frac{\\sin^2\\theta}{\\sin^2\\theta}=1$. To prove an identity, work on one side only — usually the more complicated side — until it matches the other; never move terms across the equals sign in an identity proof." },
        ],
        keyFormulas: [
          { name: "Pythagorean", statement: "$\\sin^2\\theta+\\cos^2\\theta=1$" },
          { name: "Tangent forms", statement: "$1+\\tan^2\\theta=\\sec^2\\theta$; $1+\\cot^2\\theta=\\csc^2\\theta$" },
        ],
        workedExample: { problem: "Simplify $\\sin^2\\theta\\sec^2\\theta$.", solution: "$\\sec^2\\theta=\\frac{1}{\\cos^2\\theta}$, so the expression is $\\frac{\\sin^2\\theta}{\\cos^2\\theta}=\\tan^2\\theta$. Alternatively: $\\sin^2\\theta\\cdot\\frac{1}{\\cos^2\\theta}=\\tan^2\\theta$ directly." },
      },
      questions: [
        {
          id: "ciam-u3-s2-ba-q1", difficulty: "foundation", totalMarks: 1,
          stem: "$\\sin^2\\theta+\\cos^2\\theta$ equals…",
          response: { type: "mcq", choices: [
            { id: "a", text: "1" }, { id: "b", text: "$\\sin 2\\theta$" }, { id: "c", text: "$\\cos 2\\theta$" }, { id: "d", text: "$\\tan\\theta$" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "theorem", name: "Pythagorean identity", statement: "Sum of squares = 1." }], steps: [{ reasoning: "Identity: $\\sin^2+\\cos^2=1$.", marks: 1, markCode: "A" }], finalAnswer: "1" },
        },
        {
          id: "ciam-u3-s2-ba-q2", difficulty: "foundation", totalMarks: 2,
          stem: "If $\\sin\\theta=\\frac35$, find $\\cos\\theta$ (acute).",
          response: { type: "numeric", parts: [{ label: "a", answer: 0.8 }] },
          markscheme: { principles: [{ kind: "technique", name: "Pythagorean", statement: "Solve for cos." }], steps: [
            { reasoning: "$\\cos^2\\theta=1-\\frac9{25}=\\frac{16}{25}$ → $\\cos\\theta=\\frac45$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $0.8$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$\\frac45$" },
        },
        {
          id: "ciam-u3-s2-ba-q3", difficulty: "core", totalMarks: 3,
          stem: "Prove $\\sin\\theta\\sec\\theta=\\tan\\theta$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Identity proof", statement: "Use reciprocal identity." }], steps: [
            { reasoning: "$\\sec\\theta=\\frac{1}{\\cos\\theta}$.", marks: 1, markCode: "M" },
            { reasoning: "LHS $=\\frac{\\sin\\theta}{\\cos\\theta}=\\tan\\theta$ = RHS. ✓", marks: 1, markCode: "M" },
            { reasoning: "Proven.", marks: 1, markCode: "A" },
          ], finalAnswer: "Proven" },
        },
        {
          id: "ciam-u3-s2-ba-q4", difficulty: "core", totalMarks: 4,
          stem: "Show that $\\frac{1-\\cos^2\\theta}{\\sin\\theta}=\\sin\\theta$ for $\\sin\\theta\\neq0$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Identity proof", statement: "Use Pythagorean." }], steps: [
            { reasoning: "$1-\\cos^2\\theta=\\sin^2\\theta$.", marks: 1, markCode: "M" },
            { reasoning: "LHS $=\\frac{\\sin^2\\theta}{\\sin\\theta}=\\sin\\theta$.", marks: 1, markCode: "M" },
            { reasoning: "Condition $\\sin\\theta\\neq0$ ensures division valid.", marks: 1, markCode: "M" },
            { reasoning: "Proven. ✓", marks: 1, markCode: "A" },
          ], finalAnswer: "Proven" },
        },
      ],
    },
    {
      id: "ciam-u3-s2-double",
      title: "Double angle and compound angle",
      skill: "Use double-angle identities at IGCSE level.",
      lesson: {
        sections: [
          { heading: "Where they come from", body: "Double-angle formulae express $\\sin 2\\theta$, $\\cos 2\\theta$ and $\\tan 2\\theta$ in terms of $\\sin\\theta$ and $\\cos\\theta$. They arise from the compound-angle formulae with both angles equal. The three forms of $\\cos 2\\theta$ — $\\cos^2\\theta-\\sin^2\\theta$, $2\\cos^2\\theta-1$, $1-2\\sin^2\\theta$ — are all equivalent via the Pythagorean identity, and you choose whichever suits the problem (e.g. use $2\\cos^2\\theta-1$ when you know $\\cos\\theta$ but not $\\sin\\theta$)." },
          { heading: "Finding values", body: "Given one trig value, first find the others using $\\sin^2+\\cos^2=1$, choosing signs from the quadrant. Then apply the double-angle formulae. For exact values, look for Pythagorean triples: if $\\sin\\theta=\\frac35$ then $\\cos\\theta=\\frac45$ (acute), giving $\\sin2\\theta=\\frac{24}{25}$ and $\\cos2\\theta=\\frac{7}{25}$." },
        ],
        keyFormulas: [
          { name: "Double angle", statement: "$\\sin2\\theta=2\\sin\\theta\\cos\\theta$" },
          { name: "Cos double", statement: "$\\cos2\\theta=\\cos^2\\theta-\\sin^2\\theta=2\\cos^2\\theta-1=1-2\\sin^2\\theta$" },
        ],
        workedExample: { problem: "Find $\\cos2\\theta$ given $\\cos\\theta=\\frac{1}{3}$.", solution: "Use $\\cos2\\theta=2\\cos^2\\theta-1$ (only cos needed): $2\\times\\frac19-1=\\frac{2}{9}-\\frac{9}{9}=-\\frac79$. This is much faster than finding $\\sin\\theta$ first." },
      },
      questions: [
        {
          id: "ciam-u3-s2-db-q1", difficulty: "foundation", totalMarks: 1,
          stem: "$\\sin2\\theta$ equals…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$2\\sin\\theta\\cos\\theta$" }, { id: "b", text: "$\\sin^2\\theta-\\cos^2\\theta$" }, { id: "c", text: "$2\\sin\\theta$" }, { id: "d", text: "$\\sin\\theta+\\cos\\theta$" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "formula", name: "Double angle", statement: "Standard identity." }], steps: [{ reasoning: "$\\sin2\\theta=2\\sin\\theta\\cos\\theta$.", marks: 1, markCode: "A" }], finalAnswer: "$2\\sin\\theta\\cos\\theta$" },
        },
        {
          id: "ciam-u3-s2-db-q2", difficulty: "foundation", totalMarks: 2,
          stem: "If $\\cos\\theta=\\frac{1}{2}$, find $\\cos2\\theta$.",
          response: { type: "numeric", parts: [{ label: "a", answer: -0.5 }] },
          markscheme: { principles: [{ kind: "formula", name: "Cos double", statement: "$2\\cos^2-1$." }], steps: [
            { reasoning: "$\\cos2\\theta=2(\\frac14)-1=\\frac12-1=-\\frac12$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $-0.5$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$-\\frac12$" },
        },
        {
          id: "ciam-u3-s2-db-q3", difficulty: "core", totalMarks: 3,
          stem: "If $\\sin\\theta=\\frac45$ (acute), find $\\sin2\\theta$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Double angle", statement: "Find cos first." }], steps: [
            { reasoning: "$\\cos\\theta=\\sqrt{1-\\frac{16}{25}}=\\frac35$.", marks: 1, markCode: "M" },
            { reasoning: "$\\sin2\\theta=2\\times\\frac45\\times\\frac35=\\frac{24}{25}$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $\\frac{24}{25}$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$\\frac{24}{25}$" },
        },
        {
          id: "ciam-u3-s2-db-q4", difficulty: "core", totalMarks: 4,
          stem: "Prove $\\frac{\\sin2\\theta}{1+\\cos2\\theta}=\\tan\\theta$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Identity proof", statement: "Substitute double angles." }], steps: [
            { reasoning: "$\\sin2\\theta=2\\sin\\theta\\cos\\theta$; $1+\\cos2\\theta=1+(1-2\\sin^2\\theta)=2\\cos^2\\theta$.", marks: 1, markCode: "M" },
            { reasoning: "LHS $=\\frac{2\\sin\\theta\\cos\\theta}{2\\cos^2\\theta}=\\frac{\\sin\\theta}{\\cos\\theta}=\\tan\\theta$.", marks: 1, markCode: "M" },
            { reasoning: "Alternative: $1+\\cos2\\theta=2\\cos^2\\theta$ directly. ✓", marks: 1, markCode: "M" },
            { reasoning: "Proven.", marks: 1, markCode: "A" },
          ], finalAnswer: "Proven" },
        },
      ],
    },
  ],
  notes: [
    { id: "ciam-u3-s2-id-notes", title: "Trig identities — notes", summary: "Pythagorean, reciprocal, double angle.",
      sections: [
        { heading: "Basic", body: "$\\sin^2+\\cos^2=1$; $\\tan=\\sin/\\cos$; sec/csc/cot reciprocals." },
        { heading: "Double angle", body: "$\\sin2\\theta=2\\sin\\theta\\cos\\theta$; $\\cos2\\theta$ three forms." },
      ] },
  ],
};
