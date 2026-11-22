import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "olam-u3-lesson-3-2",
  code: "3-2",
  title: "Trigonometric Identities",
  goal: "I CAN use trigonometric identities to simplify and solve.",
  standards: ["4037: trigonometric identities"],
  vocabulary: [
    { term: "Identity", definition: "Equation true for all values of variable." },
    { term: "Pythagorean identity", definition: "$\\sin^2\\theta+\\cos^2\\theta=1$." },
    { term: "Double angle", definition: "$\\sin2\\theta=2\\sin\\theta\\cos\\theta$ etc." },
    { term: "Reciprocal", definition: "$\\csc=\\frac1\\sin$, $\\sec=\\frac1\\cos$, $\\cot=\\frac1{\\tan}$." },
  ],
  concepts: [
    {
      id: "olam-u3-s2-basic",
      title: "Basic identities",
      skill: "Use Pythagorean and reciprocal identities at O Level.",
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
          id: "olam-u3-s2-ba-q1", difficulty: "foundation", totalMarks: 1,
          stem: "$\\sin^2\\theta+\\cos^2\\theta$ equals…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\tan\\theta$" },
            { id: "b", text: "$\\cos 2\\theta$" },
            { id: "c", text: "$\\sin 2\\theta$" },
            { id: "d", text: "1" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "theorem", name: "Pythagorean identity", statement: "Sum of squares = 1." }], steps: [{ reasoning: "Identity: $\\sin^2+\\cos^2=1$.", marks: 1, markCode: "A" }], finalAnswer: "1" },
        },
        {
          id: "olam-u3-s2-ba-q2", difficulty: "foundation", totalMarks: 2,
          stem: "If $\\sin\\theta=\\frac35$, find $\\cos\\theta$ (acute).",
          response: { type: "numeric", parts: [{ label: "a", answer: 0.8 }] },
          markscheme: { principles: [{ kind: "technique", name: "Pythagorean", statement: "Solve for cos." }], steps: [
            { reasoning: "$\\cos^2\\theta=1-\\frac9{25}=\\frac{16}{25}$ → $\\cos\\theta=\\frac45$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $0.8$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$\\frac45$" },
        },
        {
          id: "olam-u3-s2-ba-q3", difficulty: "core", totalMarks: 3,
          stem: "Prove $\\sin\\theta\\sec\\theta=\\tan\\theta$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Identity proof", statement: "Use reciprocal identity." }], steps: [
            { reasoning: "$\\sec\\theta=\\frac{1}{\\cos\\theta}$.", marks: 1, markCode: "M" },
            { reasoning: "LHS $=\\frac{\\sin\\theta}{\\cos\\theta}=\\tan\\theta$ = RHS. ✓", marks: 1, markCode: "M" },
            { reasoning: "Proven.", marks: 1, markCode: "A" },
          ], finalAnswer: "Proven" },
        },
        {
          id: "olam-u3-s2-ba-q4", difficulty: "core", totalMarks: 4,
          stem: "Show that $\\frac{1-\\cos^2\\theta}{\\sin\\theta}=\\sin\\theta$ for $\\sin\\theta\\neq0$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Identity proof", statement: "Use Pythagorean." }], steps: [
            { reasoning: "$1-\\cos^2\\theta=\\sin^2\\theta$.", marks: 1, markCode: "M" },
            { reasoning: "LHS $=\\frac{\\sin^2\\theta}{\\sin\\theta}=\\sin\\theta$.", marks: 1, markCode: "M" },
            { reasoning: "Condition $\\sin\\theta\\neq0$ ensures division valid.", marks: 1, markCode: "M" },
            { reasoning: "Proven. ✓", marks: 1, markCode: "A" },
          ], finalAnswer: "Proven" },
        },
        {
          id: "olam-u3-s2-ba-q5", difficulty: "foundation", totalMarks: 1,
          stem: "$\\tan\\theta$ is equal to…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\frac{\\sin\\theta}{\\cos\\theta}$" },
            { id: "b", text: "$\\frac{1}{\\sin\\theta}$" },
            { id: "c", text: "$\\frac{\\cos\\theta}{\\sin\\theta}$" },
            { id: "d", text: "$\\sin\\theta\\cos\\theta$" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "property", name: "Definition", statement: "tan = sin/cos." }], steps: [{ reasoning: "$\\tan\\theta=\\frac{\\sin\\theta}{\\cos\\theta}$.", marks: 1, markCode: "A" }], finalAnswer: "$\\frac{\\sin\\theta}{\\cos\\theta}$" },
        },
        {
          id: "olam-u3-s2-ba-q6", difficulty: "foundation", totalMarks: 1,
          stem: "$\\sec^2\\theta-\\tan^2\\theta$ equals…",
          response: { type: "mcq", choices: [
            { id: "a", text: "0" },
            { id: "b", text: "1" },
            { id: "c", text: "$\\cos^2\\theta$" },
            { id: "d", text: "$\\sin^2\\theta$" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "theorem", name: "Tangent identity", statement: "$1+\\tan^2=\\sec^2$." }], steps: [{ reasoning: "$\\sec^2-\\tan^2=1$.", marks: 1, markCode: "A" }], finalAnswer: "1" },
        },
        {
          id: "olam-u3-s2-ba-q7", difficulty: "foundation", totalMarks: 1,
          stem: "If $\\sin\\theta=\\frac{3}{5}$ (acute), then $\\cos\\theta=$…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\frac{2}{5}$" },
            { id: "b", text: "$\\frac{4}{5}$" },
            { id: "c", text: "$\\frac{5}{4}$" },
            { id: "d", text: "$\\frac{3}{4}$" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "technique", name: "Pythagorean", statement: "Solve for cos." }], steps: [{ reasoning: "$\\cos^2=1-\\frac{9}{25}=\\frac{16}{25}$ → $\\cos=\\frac45$.", marks: 1, markCode: "A" }], finalAnswer: "$\\frac45$" },
        },
        {
          id: "olam-u3-s2-ba-q8", difficulty: "core", totalMarks: 1,
          stem: "$1+\\cot^2\\theta$ equals…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\sec^2\\theta$" },
            { id: "b", text: "1" },
            { id: "c", text: "$\\tan^2\\theta$" },
            { id: "d", text: "$\\csc^2\\theta$" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "theorem", name: "Cotangent identity", statement: "Divide by $\\sin^2$." }], steps: [{ reasoning: "$\\frac{\\sin^2+\\cos^2}{\\sin^2}=\\frac{1}{\\sin^2}=\\csc^2$.", marks: 1, markCode: "A" }], finalAnswer: "$\\csc^2\\theta$" },
        },
        {
          id: "olam-u3-s2-ba-q9", difficulty: "challenge", totalMarks: 1,
          stem: "If $\\cos\\theta=-\\frac{12}{13}$ and $\\theta$ is obtuse, then $\\sin\\theta=$…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\frac{12}{5}$" },
            { id: "b", text: "$\\frac{5}{13}$" },
            { id: "c", text: "$-\\frac{12}{5}$" },
            { id: "d", text: "$-\\frac{5}{13}$" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "technique", name: "Quadrant sign", statement: "Sin positive in Q2." }], steps: [{ reasoning: "$\\sin^2=1-\\frac{144}{169}=\\frac{25}{169}$; obtuse → Q2 → $\\sin>0$ → $\\frac{5}{13}$.", marks: 1, markCode: "A" }], finalAnswer: "$\\frac{5}{13}$" },
        },
        {
          id: "olam-u3-s2-ba-q10", difficulty: "foundation", totalMarks: 2,
          stem: "If $\\sin\\theta=\\frac{5}{13}$ (acute), find $\\cos\\theta$ as a decimal.",
          response: { type: "numeric", parts: [{ label: "a", answer: 0.923, tolerance: 0.001 }] },
          markscheme: { principles: [{ kind: "technique", name: "Pythagorean", statement: "Solve for cos." }], steps: [
            { reasoning: "$\\cos^2=1-\\frac{25}{169}=\\frac{144}{169}$ → $\\cos=\\frac{12}{13}$.", marks: 1, markCode: "M" },
            { reasoning: "$\\cos\\theta\\approx0.923$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$\\frac{12}{13}\\approx0.923$" },
        },
        {
          id: "olam-u3-s2-ba-q11", difficulty: "core", totalMarks: 3,
          stem: "If $\\tan\\theta=\\frac{3}{4}$ (acute), find $\\sin\\theta$ as a decimal.",
          response: { type: "numeric", parts: [{ label: "a", answer: 0.6 }] },
          markscheme: { principles: [{ kind: "technique", name: "Construct triangle", statement: "Opposite 3, adjacent 4." }], steps: [
            { reasoning: "Hypotenuse $=\\sqrt{9+16}=5$ → $\\sin\\theta=\\frac{3}{5}$.", marks: 1, markCode: "M" },
            { reasoning: "$\\sin\\theta=0.6$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 0.6.", marks: 1, markCode: "A" },
          ], finalAnswer: "0.6" },
        },
        {
          id: "olam-u3-s2-ba-q12", difficulty: "core", totalMarks: 3,
          stem: "If $\\sec\\theta=\\frac{13}{5}$ (acute), find $\\cos\\theta$ as a decimal.",
          response: { type: "numeric", parts: [{ label: "a", answer: 0.385, tolerance: 0.001 }] },
          markscheme: { principles: [{ kind: "property", name: "Reciprocal", statement: "$\\cos=1/\\sec$." }], steps: [
            { reasoning: "$\\cos\\theta=\\frac{1}{\\sec\\theta}=\\frac{5}{13}$.", marks: 1, markCode: "M" },
            { reasoning: "$\\approx0.3846$ → 0.385.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$\\frac{5}{13}\\approx0.385$" },
        },
        {
          id: "olam-u3-s2-ba-q13", difficulty: "challenge", totalMarks: 3,
          stem: "Given $\\cos\\theta=0.6$, find the value of $\\sin^2\\theta$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 0.64 }] },
          markscheme: { principles: [{ kind: "technique", name: "Pythagorean", statement: "Solve for sin²." }], steps: [
            { reasoning: "$\\sin^2\\theta=1-\\cos^2\\theta=1-0.36=0.64$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 0.64.", marks: 1, markCode: "M" },
            { reasoning: "(Note: $\\sin\\theta=\\pm0.8$ but squared removes sign.)", marks: 1, markCode: "A" },
          ], finalAnswer: "0.64" },
        },
        {
          id: "olam-u3-s2-ba-q14", difficulty: "core", totalMarks: 3,
          stem: "Prove that $(1-\\sin\\theta)(1+\\sin\\theta)=\\cos^2\\theta$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Identity proof", statement: "Expand then Pythagorean." }], steps: [
            { reasoning: "LHS $=1-\\sin^2\\theta$ (difference of squares).", marks: 1, markCode: "M" },
            { reasoning: "$1-\\sin^2\\theta=\\cos^2\\theta$ by Pythagorean identity.", marks: 1, markCode: "M" },
            { reasoning: "LHS = RHS. Proven. ✓", marks: 1, markCode: "A" },
          ], finalAnswer: "Proven" },
        },
        {
          id: "olam-u3-s2-ba-q15", difficulty: "core", totalMarks: 3,
          stem: "Show that $(1+\\tan^2\\theta)\\cos^2\\theta=1$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Identity proof", statement: "Substitute $\\sec^2$." }], steps: [
            { reasoning: "$1+\\tan^2\\theta=\\sec^2\\theta=\\frac{1}{\\cos^2\\theta}$.", marks: 1, markCode: "M" },
            { reasoning: "LHS $=\\frac{1}{\\cos^2\\theta}\\times\\cos^2\\theta=1$. ✓", marks: 1, markCode: "M" },
            { reasoning: "Proven.", marks: 1, markCode: "A" },
          ], finalAnswer: "Proven" },
        },
        {
          id: "olam-u3-s2-ba-q16", difficulty: "challenge", totalMarks: 4,
          stem: "Prove that $(\\sin\\theta+\\cos\\theta)^2+(\\sin\\theta-\\cos\\theta)^2=2$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Identity proof", statement: "Expand both squares." }], steps: [
            { reasoning: "$(\\sin+\\cos)^2=\\sin^2+2\\sin\\cos+\\cos^2$; $(\\sin-\\cos)^2=\\sin^2-2\\sin\\cos+\\cos^2$.", marks: 1, markCode: "M" },
            { reasoning: "Sum $=2\\sin^2\\theta+2\\cos^2\\theta$ (cross terms cancel).", marks: 1, markCode: "M" },
            { reasoning: "$=2(\\sin^2\\theta+\\cos^2\\theta)=2\\times1=2$. ✓", marks: 1, markCode: "M" },
            { reasoning: "Proven.", marks: 1, markCode: "A" },
          ], finalAnswer: "Proven" },
        },
      ],
    },
    {
      id: "olam-u3-s2-double",
      title: "Double angle and compound angle",
      skill: "Use double-angle identities at O Level.",
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
          id: "olam-u3-s2-db-q1", difficulty: "foundation", totalMarks: 1,
          stem: "$\\sin2\\theta$ equals…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$2\\sin\\theta$" },
            { id: "b", text: "$\\sin\\theta+\\cos\\theta$" },
            { id: "c", text: "$2\\sin\\theta\\cos\\theta$" },
            { id: "d", text: "$\\sin^2\\theta-\\cos^2\\theta$" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "formula", name: "Double angle", statement: "Standard identity." }], steps: [{ reasoning: "$\\sin2\\theta=2\\sin\\theta\\cos\\theta$.", marks: 1, markCode: "A" }], finalAnswer: "$2\\sin\\theta\\cos\\theta$" },
        },
        {
          id: "olam-u3-s2-db-q2", difficulty: "foundation", totalMarks: 2,
          stem: "If $\\cos\\theta=\\frac{1}{2}$, find $\\cos2\\theta$.",
          response: { type: "numeric", parts: [{ label: "a", answer: -0.5 }] },
          markscheme: { principles: [{ kind: "formula", name: "Cos double", statement: "$2\\cos^2-1$." }], steps: [
            { reasoning: "$\\cos2\\theta=2(\\frac14)-1=\\frac12-1=-\\frac12$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $-0.5$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$-\\frac12$" },
        },
        {
          id: "olam-u3-s2-db-q3", difficulty: "core", totalMarks: 3,
          stem: "If $\\sin\\theta=\\frac45$ (acute), find $\\sin2\\theta$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Double angle", statement: "Find cos first." }], steps: [
            { reasoning: "$\\cos\\theta=\\sqrt{1-\\frac{16}{25}}=\\frac35$.", marks: 1, markCode: "M" },
            { reasoning: "$\\sin2\\theta=2\\times\\frac45\\times\\frac35=\\frac{24}{25}$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $\\frac{24}{25}$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$\\frac{24}{25}$" },
        },
        {
          id: "olam-u3-s2-db-q4", difficulty: "core", totalMarks: 4,
          stem: "Prove $\\frac{\\sin2\\theta}{1+\\cos2\\theta}=\\tan\\theta$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Identity proof", statement: "Substitute double angles." }], steps: [
            { reasoning: "$\\sin2\\theta=2\\sin\\theta\\cos\\theta$; $1+\\cos2\\theta=1+(1-2\\sin^2\\theta)=2\\cos^2\\theta$.", marks: 1, markCode: "M" },
            { reasoning: "LHS $=\\frac{2\\sin\\theta\\cos\\theta}{2\\cos^2\\theta}=\\frac{\\sin\\theta}{\\cos\\theta}=\\tan\\theta$.", marks: 1, markCode: "M" },
            { reasoning: "Alternative: $1+\\cos2\\theta=2\\cos^2\\theta$ directly. ✓", marks: 1, markCode: "M" },
            { reasoning: "Proven.", marks: 1, markCode: "A" },
          ], finalAnswer: "Proven" },
        },
        {
          id: "olam-u3-s2-db-q5", difficulty: "foundation", totalMarks: 1,
          stem: "$\\cos 2\\theta$ equals…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$1-\\sin^2\\theta$" },
            { id: "b", text: "$\\cos\\theta-\\sin\\theta$" },
            { id: "c", text: "$2\\sin\\theta\\cos\\theta$" },
            { id: "d", text: "$\\cos^2\\theta-\\sin^2\\theta$" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "formula", name: "Double angle", statement: "Standard form." }], steps: [{ reasoning: "$\\cos2\\theta=\\cos^2\\theta-\\sin^2\\theta$.", marks: 1, markCode: "A" }], finalAnswer: "$\\cos^2\\theta-\\sin^2\\theta$" },
        },
        {
          id: "olam-u3-s2-db-q6", difficulty: "foundation", totalMarks: 1,
          stem: "$\\tan 2\\theta$ equals…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$2\\tan\\theta$" },
            { id: "b", text: "$\\frac{2\\tan\\theta}{1-\\tan^2\\theta}$" },
            { id: "c", text: "$\\frac{\\tan\\theta}{2}$" },
            { id: "d", text: "$\\frac{1-\\tan^2\\theta}{2\\tan\\theta}$" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "formula", name: "Double angle tan", statement: "Standard form." }], steps: [{ reasoning: "$\\tan2\\theta=\\frac{2\\tan\\theta}{1-\\tan^2\\theta}$.", marks: 1, markCode: "A" }], finalAnswer: "$\\frac{2\\tan\\theta}{1-\\tan^2\\theta}$" },
        },
        {
          id: "olam-u3-s2-db-q7", difficulty: "core", totalMarks: 1,
          stem: "If $\\sin\\theta=\\frac{1}{2}$, then $\\sin 2\\theta$ equals…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\frac{\\sqrt3}{4}$" },
            { id: "b", text: "$\\frac{1}{2}$" },
            { id: "c", text: "1" },
            { id: "d", text: "$\\frac{\\sqrt3}{2}$" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "technique", name: "Double angle", statement: "Find cos first." }], steps: [{ reasoning: "$\\cos\\theta=\\frac{\\sqrt3}{2}$ → $\\sin2\\theta=2\\times\\frac12\\times\\frac{\\sqrt3}{2}=\\frac{\\sqrt3}{2}$.", marks: 1, markCode: "A" }], finalAnswer: "$\\frac{\\sqrt3}{2}$" },
        },
        {
          id: "olam-u3-s2-db-q8", difficulty: "core", totalMarks: 1,
          stem: "If $\\cos\\theta=0$, then $\\cos 2\\theta$ equals…",
          response: { type: "mcq", choices: [
            { id: "a", text: "1" },
            { id: "b", text: "$-1$" },
            { id: "c", text: "$\\frac{1}{2}$" },
            { id: "d", text: "0" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "technique", name: "Double angle", statement: "$2\\cos^2-1$." }], steps: [{ reasoning: "$\\cos2\\theta=2(0)^2-1=-1$.", marks: 1, markCode: "A" }], finalAnswer: "$-1$" },
        },
        {
          id: "olam-u3-s2-db-q9", difficulty: "challenge", totalMarks: 1,
          stem: "The solutions of $\\sin 2\\theta=1$ for $0°\\leq\\theta\\leq180°$ are…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\theta=45°$ or $135°$" },
            { id: "b", text: "$\\theta=45°$ only" },
            { id: "c", text: "$\\theta=90°$ only" },
            { id: "d", text: "$\\theta=30°$ or $150°$" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "technique", name: "Double angle equation", statement: "Solve $2\\sin\\cos=1$." }], steps: [{ reasoning: "$\\sin2\\theta=1$ → $2\\theta=90°$ or $270°$ → $\\theta=45°$ or $135°$.", marks: 1, markCode: "A" }], finalAnswer: "$45°,135°$" },
        },
        {
          id: "olam-u3-s2-db-q10", difficulty: "foundation", totalMarks: 2,
          stem: "If $\\cos\\theta=\\frac{3}{5}$ (acute), find $\\cos 2\\theta$ as a decimal.",
          response: { type: "numeric", parts: [{ label: "a", answer: -0.28 }] },
          markscheme: { principles: [{ kind: "formula", name: "Cos double", statement: "$2\\cos^2-1$." }], steps: [
            { reasoning: "$\\cos2\\theta=2\\times\\frac{9}{25}-1=\\frac{18}{25}-1=-\\frac{7}{25}$.", marks: 1, markCode: "M" },
            { reasoning: "$=-0.28$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$-\\frac{7}{25}=-0.28$" },
        },
        {
          id: "olam-u3-s2-db-q11", difficulty: "core", totalMarks: 3,
          stem: "If $\\sin\\theta=\\frac{3}{5}$ (acute), find $\\sin 2\\theta$ as a decimal.",
          response: { type: "numeric", parts: [{ label: "a", answer: 0.96 }] },
          markscheme: { principles: [{ kind: "technique", name: "Double angle", statement: "Find cos first." }], steps: [
            { reasoning: "$\\cos\\theta=\\frac{4}{5}$.", marks: 1, markCode: "M" },
            { reasoning: "$\\sin2\\theta=2\\times\\frac35\\times\\frac45=\\frac{24}{25}=0.96$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 0.96.", marks: 1, markCode: "A" },
          ], finalAnswer: "0.96" },
        },
        {
          id: "olam-u3-s2-db-q12", difficulty: "core", totalMarks: 3,
          stem: "If $\\cos\\theta=0.8$ (acute), find $\\cos 2\\theta$ as a decimal.",
          response: { type: "numeric", parts: [{ label: "a", answer: 0.28 }] },
          markscheme: { principles: [{ kind: "formula", name: "Cos double", statement: "$2\\cos^2-1$." }], steps: [
            { reasoning: "$\\cos2\\theta=2(0.64)-1=1.28-1$.", marks: 1, markCode: "M" },
            { reasoning: "$=0.28$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 0.28.", marks: 1, markCode: "A" },
          ], finalAnswer: "0.28" },
        },
        {
          id: "olam-u3-s2-db-q13", difficulty: "challenge", totalMarks: 3,
          stem: "If $\\tan\\theta=1$ (acute), find $\\sin 2\\theta$ as a decimal.",
          response: { type: "numeric", parts: [{ label: "a", answer: 1 }] },
          markscheme: { principles: [{ kind: "technique", name: "Double angle", statement: "$\\theta=45°$." }], steps: [
            { reasoning: "$\\tan\\theta=1$ → $\\theta=45°$ → $2\\theta=90°$.", marks: 1, markCode: "M" },
            { reasoning: "$\\sin90°=1$ → $\\sin2\\theta=1$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 1.", marks: 1, markCode: "A" },
          ], finalAnswer: "1" },
        },
        {
          id: "olam-u3-s2-db-q14", difficulty: "core", totalMarks: 3,
          stem: "Given $\\tan\\theta=\\frac{3}{4}$ (acute), find $\\sin 2\\theta$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Double angle", statement: "Find sin, cos first." }], steps: [
            { reasoning: "Opposite 3, adjacent 4 → hypotenuse 5 → $\\sin\\theta=\\frac35$, $\\cos\\theta=\\frac45$.", marks: 1, markCode: "M" },
            { reasoning: "$\\sin2\\theta=2\\times\\frac35\\times\\frac45=\\frac{24}{25}$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $\\frac{24}{25}$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$\\frac{24}{25}$" },
        },
        {
          id: "olam-u3-s2-db-q15", difficulty: "core", totalMarks: 2,
          stem: "Express $\\cos 2\\theta$ in terms of $\\sin\\theta$ only.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Double angle forms", statement: "Use $\\cos^2=1-\\sin^2$." }], steps: [
            { reasoning: "$\\cos2\\theta=\\cos^2\\theta-\\sin^2\\theta=(1-\\sin^2\\theta)-\\sin^2\\theta$.", marks: 1, markCode: "M" },
            { reasoning: "$=1-2\\sin^2\\theta$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$1-2\\sin^2\\theta$" },
        },
        {
          id: "olam-u3-s2-db-q16", difficulty: "challenge", totalMarks: 4,
          stem: "Solve $\\sin 2\\theta=\\sin\\theta$ for $0°\\leq\\theta<360°$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Double angle equation", statement: "Factorise." }], steps: [
            { reasoning: "$2\\sin\\theta\\cos\\theta=\\sin\\theta$ → $\\sin\\theta(2\\cos\\theta-1)=0$.", marks: 1, markCode: "M" },
            { reasoning: "Case 1: $\\sin\\theta=0$ → $\\theta=0°,180°$.", marks: 1, markCode: "M" },
            { reasoning: "Case 2: $\\cos\\theta=\\frac12$ → $\\theta=60°,300°$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $0°,60°,180°,300°$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$0°,60°,180°,300°$" },
        },
      ],
    },
  ],
  notes: [
    { id: "olam-u3-s2-id-notes", title: "Trig identities — notes", summary: "Pythagorean, reciprocal, double angle.",
      sections: [
        { heading: "Basic", body: "$\\sin^2+\\cos^2=1$; $\\tan=\\sin/\\cos$; sec/csc/cot reciprocals." },
        { heading: "Double angle", body: "$\\sin2\\theta=2\\sin\\theta\\cos\\theta$; $\\cos2\\theta$ three forms." },
      ] },
  ],
};
