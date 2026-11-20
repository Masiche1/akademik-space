import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "olam-u3-lesson-3-3",
  code: "3-3",
  title: "Trigonometric Equations",
  goal: "I CAN solve trigonometric equations in a given interval.",
  standards: ["4037: trigonometric equations"],
  vocabulary: [
    { term: "Principal value", definition: "Angle in $(-90°,90°]$ for $\\sin^{-1}$ etc." },
    { term: "Quadrant solutions", definition: "Trig equations often have 2 solutions per period." },
    { term: "Interval", definition: "Range like $0°\\leq\\theta\\leq360°$ restricting solutions." },
    { term: "Periodicity", definition: "Trig functions repeat every $360°$ or $2\\pi$." },
  ],
  concepts: [
    {
      id: "olam-u3-s3-basic",
      title: "Basic trig equations",
      skill: "Solve $\\sin\\theta=k$, $\\cos\\theta=k$, $\\tan\\theta=k$ at O Level.",
      lesson: {
        sections: [
          { heading: "The quadrant method", body: "Inverse trig functions only return principal values — e.g. $\\sin^{-1}\\frac12=30°$, not $150°$. But the actual equation $\\sin\\theta=\\frac12$ has solutions in every quadrant where sine is positive: Q1 and Q2, giving $30°$ and $150°$. The pattern: sine is positive in Q1,Q2 and negative in Q3,Q4; cosine is positive in Q1,Q4; tangent is positive in Q1,Q3. Always find the principal (acute) angle first, then reflect it into the correct quadrants for the sign." },
          { heading: "Intervals and periodicity", body: "Trig functions repeat every $360°$ (or $2\\pi$), so without a stated interval there are infinitely many solutions — add $360°n$. Exam questions almost always give an interval like $0°\\leq\\theta\\leq360°$ or $-180°\\leq\\theta\\leq180°$; list only solutions inside it. For negative angles or intervals crossing $0°$, draw the quadrants carefully or test each candidate." },
        ],
        keyFormulas: [
          { name: "Quadrants", statement: "$\\sin$: Q1,Q2 pos; $\\cos$: Q1,Q4 pos; $\\tan$: Q1,Q3 pos" },
          { name: "Periodicity", statement: "Add $360°n$ for all solutions" },
        ],
        workedExample: { problem: "Solve $\\cos\\theta=-\\frac{\\sqrt2}{2}$, $0°\\leq\\theta<360°$.", solution: "Principal value: $\\cos^{-1}(\\frac{\\sqrt2}{2})=45°$, but we need cosine negative. $\\cos$ is negative in Q2,Q3. The reference angle is $45°$, so Q2 gives $180°-45°=135°$ and Q3 gives $180°+45°=225°$. Answer: $\\theta=135°$ or $225°$." },
      },
      questions: [
        {
          id: "olam-u3-s3-ba-q1", difficulty: "foundation", totalMarks: 1,
          stem: "$\\sin\\theta=\\frac12$, $0°\\leq\\theta<360°$ gives…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$30°,150°$" }, { id: "b", text: "$30°$ only" }, { id: "c", text: "$30°,210°$" }, { id: "d", text: "$60°,120°$" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "technique", name: "Trig equation", statement: "Two quadrants." }], steps: [{ reasoning: "Principal $30°$; sin positive Q1,Q2 → $30°,150°$.", marks: 1, markCode: "A" }], finalAnswer: "$30°,150°$" },
        },
        {
          id: "olam-u3-s3-ba-q2", difficulty: "foundation", totalMarks: 2,
          stem: "Solve $\\tan\\theta=1$, $0°\\leq\\theta<360°$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Trig equation", statement: "Q1,Q3." }], steps: [
            { reasoning: "Principal $45°$; tan positive Q1,Q3 → $45°,225°$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$45°,225°$" },
        },
        {
          id: "olam-u3-s3-ba-q3", difficulty: "core", totalMarks: 3,
          stem: "Solve $\\cos\\theta=\\frac{\\sqrt3}{2}$, $0°\\leq\\theta<360°$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Trig equation", statement: "Q1,Q4." }], steps: [
            { reasoning: "Principal $30°$; cos positive Q1,Q4 → $30°,330°$.", marks: 1, markCode: "M" },
            { reasoning: "Verify: $\\cos330°=\\frac{\\sqrt3}{2}$ ✓.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$30°,330°$" },
        },
        {
          id: "olam-u3-s3-ba-q4", difficulty: "core", totalMarks: 4,
          stem: "Solve $2\\sin\\theta+1=0$, $0°\\leq\\theta<360°$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Isolate then solve", statement: "Linear in sin." }], steps: [
            { reasoning: "$\\sin\\theta=-\\frac12$.", marks: 1, markCode: "M" },
            { reasoning: "Principal $-30°$ → $330°$; sin negative Q3,Q4 → $210°,330°$.", marks: 1, markCode: "M" },
            { reasoning: "Verify both in interval. ✓", marks: 1, markCode: "M" },
            { reasoning: "Answer: $210°,330°$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$210°,330°$" },
        },
      ],
    },
    {
      id: "olam-u3-s3-quadratic",
      title: "Quadratic trig equations",
      skill: "Solve equations like $a\\sin^2\\theta+b\\sin\\theta+c=0$ at O Level.",
      lesson: {
        sections: [
          { heading: "Reducing to a quadratic", body: "Equations like $2\\sin^2\\theta-\\sin\\theta-1=0$ look complicated but are just quadratics in disguise — treat $\\sin\\theta$ as the unknown, factorise or use the formula, then solve each resulting basic trig equation. The same works for $\\cos\\theta$ or $\\tan\\theta$ in place of $\\sin\\theta$. If the quadratic gives values outside $[-1,1]$ for sine/cosine, reject them immediately — sine and cosine can never exceed 1." },
          { heading: "Combining solution sets", body: "Each valid value of $\\sin\\theta$ (or cos/tan) produces its own set of angles across the quadrants. Collect all angles from all cases and sort them into the required interval. It is easy to lose solutions — write each case separately, then merge. For $\\sin^2\\theta=\\frac34$ you get $\\sin\\theta=\\pm\\frac{\\sqrt3}{2}$, which yields four angles in $[0°,360°)$: $60°,120°,240°,300°$." },
        ],
        keyFormulas: [
          { name: "Strategy", statement: "Solve as quadratic in $\\sin\\theta$ (or cos/tan), then solve each case" },
        ],
        workedExample: { problem: "Solve $\\cos^2\\theta-\\cos\\theta=0$, $0°\\leq\\theta<360°$.", solution: "Factorise: $\\cos\\theta(\\cos\\theta-1)=0$ → $\\cos\\theta=0$ or $\\cos\\theta=1$. Case 1: $\\cos\\theta=0$ → $\\theta=90°,270°$. Case 2: $\\cos\\theta=1$ → $\\theta=0°$. Combined: $0°,90°,270°$. All within interval ✓." },
      },
      questions: [
        {
          id: "olam-u3-s3-qu-q1", difficulty: "foundation", totalMarks: 1,
          stem: "$\\sin^2\\theta-1=0$ gives $\\sin\\theta=$…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\pm1$" }, { id: "b", text: "$1$ only" }, { id: "c", text: "$\\pm2$" }, { id: "d", text: "0" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "technique", name: "Factorise", statement: "Difference of squares." }], steps: [{ reasoning: "$(\\sin-1)(\\sin+1)=0$ → $\\sin=\\pm1$.", marks: 1, markCode: "A" }], finalAnswer: "$\\pm1$" },
        },
        {
          id: "olam-u3-s3-qu-q2", difficulty: "foundation", totalMarks: 2,
          stem: "Solve $\\tan^2\\theta=1$, $0°\\leq\\theta<360°$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Quadratic trig", statement: "Factorise first." }], steps: [
            { reasoning: "$\\tan\\theta=\\pm1$ → $45°,135°,225°,315°$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$45°,135°,225°,315°$" },
        },
        {
          id: "olam-u3-s3-qu-q3", difficulty: "core", totalMarks: 3,
          stem: "Solve $2\\cos^2\\theta-\\cos\\theta-1=0$, $0°\\leq\\theta<360°$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Quadratic trig", statement: "Factorise then solve." }], steps: [
            { reasoning: "$(2\\cos\\theta+1)(\\cos\\theta-1)=0$ → $\\cos\\theta=-\\frac12$ or $1$.", marks: 1, markCode: "M" },
            { reasoning: "$\\cos\\theta=-\\frac12$: $120°,240°$; $\\cos\\theta=1$: $0°$. All four: $0°,120°,240°$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$0°,120°,240°$" },
        },
        {
          id: "olam-u3-s3-qu-q4", difficulty: "core", totalMarks: 4,
          stem: "Solve $\\sin^2\\theta=\\frac{3}{4}$, $0°\\leq\\theta<360°$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Square root then solve", statement: "Two cases for sin." }], steps: [
            { reasoning: "$\\sin\\theta=\\pm\\frac{\\sqrt3}{2}$.", marks: 1, markCode: "M" },
            { reasoning: "$\\sin=\\frac{\\sqrt3}{2}$: $60°,120°$; $\\sin=-\\frac{\\sqrt3}{2}$: $240°,300°$.", marks: 1, markCode: "M" },
            { reasoning: "All four in interval. ✓", marks: 1, markCode: "M" },
            { reasoning: "Answer: $60°,120°,240°,300°$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$60°,120°,240°,300°$" },
        },
      ],
    },
  ],
  notes: [
    { id: "olam-u3-s3-eq-notes", title: "Trig equations — notes", summary: "Quadrant method and quadratic forms.",
      sections: [
        { heading: "Basic", body: "Principal value + quadrant rules. sin: Q1,Q2; cos: Q1,Q4; tan: Q1,Q3." },
        { heading: "Quadratic", body: "Solve as quadratic in sin/cos/tan, then solve each result." },
      ] },
  ],
};
