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
            { id: "a", text: "$30°$ only" },
            { id: "b", text: "$30°,150°$" },
            { id: "c", text: "$30°,210°$" },
            { id: "d", text: "$60°,120°$" },
          ], correctChoiceId: "b" },
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
        {
          id: "olam-u3-s3-ba-q5", difficulty: "foundation", totalMarks: 1,
          stem: "$\\sin\\theta=\\frac{\\sqrt3}{2}$, $0°\\leq\\theta<360°$ gives…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$30°,150°$" },
            { id: "b", text: "$60°,120°$" },
            { id: "c", text: "$60°$ only" },
            { id: "d", text: "$120°,240°$" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "technique", name: "Trig equation", statement: "Q1,Q2." }], steps: [{ reasoning: "Principal $60°$; sin positive Q1,Q2 → $60°,120°$.", marks: 1, markCode: "A" }], finalAnswer: "$60°,120°$" },
        },
        {
          id: "olam-u3-s3-ba-q6", difficulty: "foundation", totalMarks: 1,
          stem: "$\\cos\\theta=-\\frac{1}{2}$, $0°\\leq\\theta<360°$ gives…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$120°$ only" },
            { id: "b", text: "$60°,300°$" },
            { id: "c", text: "$120°,240°$" },
            { id: "d", text: "$240°$ only" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "technique", name: "Trig equation", statement: "Q2,Q3." }], steps: [{ reasoning: "Reference $60°$; cos negative Q2,Q3 → $120°,240°$.", marks: 1, markCode: "A" }], finalAnswer: "$120°,240°$" },
        },
        {
          id: "olam-u3-s3-ba-q7", difficulty: "core", totalMarks: 1,
          stem: "$\\tan\\theta=-1$, $0°\\leq\\theta<360°$ gives…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$135°,315°$" },
            { id: "b", text: "$315°$ only" },
            { id: "c", text: "$135°$ only" },
            { id: "d", text: "$45°,225°$" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "technique", name: "Trig equation", statement: "Q2,Q4." }], steps: [{ reasoning: "Principal $-45°$; tan negative Q2,Q4 → $135°,315°$.", marks: 1, markCode: "A" }], finalAnswer: "$135°,315°$" },
        },
        {
          id: "olam-u3-s3-ba-q8", difficulty: "core", totalMarks: 1,
          stem: "$\\sin\\theta=0$, $0°\\leq\\theta<360°$ gives…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$90°,270°$" },
            { id: "b", text: "$0°$ only" },
            { id: "c", text: "$0°,180°$" },
            { id: "d", text: "$180°$ only" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "technique", name: "Trig equation", statement: "Axis crossings." }], steps: [{ reasoning: "Sine zero at $0°$ and $180°$ in interval.", marks: 1, markCode: "A" }], finalAnswer: "$0°,180°$" },
        },
        {
          id: "olam-u3-s3-ba-q9", difficulty: "core", totalMarks: 1,
          stem: "$\\cos\\theta=1$, $0°\\leq\\theta<360°$ gives…",
          response: { type: "mcq", choices: [
            { id: "a", text: "No solution" },
            { id: "b", text: "$0°$ only" },
            { id: "c", text: "$0°,360°$" },
            { id: "d", text: "$90°,270°$" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "technique", name: "Trig equation", statement: "Interval excludes 360." }], steps: [{ reasoning: "$\\cos\\theta=1$ at $0°$; $360°$ excluded from interval.", marks: 1, markCode: "A" }], finalAnswer: "$0°$" },
        },
        {
          id: "olam-u3-s3-ba-q10", difficulty: "foundation", totalMarks: 2,
          stem: "Solve $\\cos\\theta=\\frac{1}{2}$, $0°\\leq\\theta<360°$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 60 }, { label: "b", answer: 300 }], unordered: true },
          markscheme: { principles: [{ kind: "technique", name: "Trig equation", statement: "Q1,Q4." }], steps: [
            { reasoning: "Principal $60°$; cos positive Q1,Q4 → $60°,300°$.", marks: 1, markCode: "M" },
            { reasoning: "Verify: $\\cos300°=\\frac12$ ✓.", marks: 1, markCode: "A" },
          ], finalAnswer: "$60°,300°$" },
        },
        {
          id: "olam-u3-s3-ba-q11", difficulty: "foundation", totalMarks: 2,
          stem: "Solve $\\sin\\theta=-\\frac{\\sqrt3}{2}$, $0°\\leq\\theta<360°$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 240 }, { label: "b", answer: 300 }], unordered: true },
          markscheme: { principles: [{ kind: "technique", name: "Trig equation", statement: "Q3,Q4." }], steps: [
            { reasoning: "Principal $-60°$; sin negative Q3,Q4 → $240°,300°$.", marks: 1, markCode: "M" },
            { reasoning: "Verify both in interval ✓.", marks: 1, markCode: "A" },
          ], finalAnswer: "$240°,300°$" },
        },
        {
          id: "olam-u3-s3-ba-q12", difficulty: "core", totalMarks: 2,
          stem: "Solve $\\tan\\theta=\\sqrt3$, $0°\\leq\\theta<360°$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 60 }, { label: "b", answer: 240 }], unordered: true },
          markscheme: { principles: [{ kind: "technique", name: "Trig equation", statement: "Q1,Q3." }], steps: [
            { reasoning: "Principal $60°$; tan positive Q1,Q3 → $60°,240°$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$60°,240°$" },
        },
        {
          id: "olam-u3-s3-ba-q13", difficulty: "core", totalMarks: 3,
          stem: "Solve $\\cos\\theta=0$, $0°\\leq\\theta<360°$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 90 }, { label: "b", answer: 270 }], unordered: true },
          markscheme: { principles: [{ kind: "technique", name: "Trig equation", statement: "Axis values." }], steps: [
            { reasoning: "$\\cos\\theta=0$ at $\\theta=90°$ and $270°$.", marks: 1, markCode: "M" },
            { reasoning: "Both in interval ✓.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$90°,270°$" },
        },
        {
          id: "olam-u3-s3-ba-q14", difficulty: "core", totalMarks: 2,
          stem: "Solve $\\sin\\theta=-\\frac{1}{2}$, $0°\\leq\\theta<360°$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Trig equation", statement: "Q3,Q4." }], steps: [
            { reasoning: "Principal $-30°$ → $330°$; sin negative Q3,Q4 → $210°,330°$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $210°,330°$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$210°,330°$" },
        },
        {
          id: "olam-u3-s3-ba-q15", difficulty: "core", totalMarks: 2,
          stem: "Solve $\\cos\\theta=-\\frac{\\sqrt3}{2}$, $0°\\leq\\theta<360°$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Trig equation", statement: "Q2,Q3." }], steps: [
            { reasoning: "Reference $30°$; cos negative Q2,Q3 → $150°,210°$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $150°,210°$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$150°,210°$" },
        },
        {
          id: "olam-u3-s3-ba-q16", difficulty: "challenge", totalMarks: 3,
          stem: "Solve $\\cos\\theta=-\\frac{1}{2}$ for $-180°\\leq\\theta\\leq180°$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Trig equation", statement: "Signed interval." }], steps: [
            { reasoning: "Reference $60°$; cos negative in Q2,Q3 → $\\pm120°$ i.e. $120°$ and $-120°$.", marks: 1, markCode: "M" },
            { reasoning: "Both within $[-180°,180°]$ ✓.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $\\theta=-120°$ or $120°$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$-120°,120°$" },
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
            { id: "a", text: "$1$ only" },
            { id: "b", text: "$\\pm1$" },
            { id: "c", text: "0" },
            { id: "d", text: "$\\pm2$" },
          ], correctChoiceId: "b" },
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
        {
          id: "olam-u3-s3-qu-q5", difficulty: "foundation", totalMarks: 1,
          stem: "$2\\sin^2\\theta-1=0$ gives $\\sin\\theta=$…",
          response: { type: "mcq", choices: [
            { id: "a", text: "0" },
            { id: "b", text: "$\\pm\\frac{1}{\\sqrt2}$" },
            { id: "c", text: "$\\pm2$" },
            { id: "d", text: "$\\pm1$" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "technique", name: "Isolate", statement: "Solve for sin." }], steps: [{ reasoning: "$\\sin^2\\theta=\\frac12$ → $\\sin\\theta=\\pm\\frac{1}{\\sqrt2}$.", marks: 1, markCode: "A" }], finalAnswer: "$\\pm\\frac{1}{\\sqrt2}$" },
        },
        {
          id: "olam-u3-s3-qu-q6", difficulty: "foundation", totalMarks: 1,
          stem: "$\\cos 2\\theta=0$, $0°\\leq\\theta<360°$ gives…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$30°,150°,210°,330°$" },
            { id: "b", text: "$45°,135°,225°,315°$" },
            { id: "c", text: "$0°,90°,180°,270°$" },
            { id: "d", text: "$45°,135°$ only" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "technique", name: "Double angle", statement: "$2\\theta=90°,270°$ mod 360." }], steps: [{ reasoning: "$2\\theta=90°,270°,450°,630°$ → $\\theta=45°,135°,225°,315°$.", marks: 1, markCode: "A" }], finalAnswer: "$45°,135°,225°,315°$" },
        },
        {
          id: "olam-u3-s3-qu-q7", difficulty: "core", totalMarks: 1,
          stem: "$\\sin^2\\theta=\\frac{1}{4}$, $0°\\leq\\theta<360°$ has how many solutions?",
          response: { type: "mcq", choices: [
            { id: "a", text: "8" },
            { id: "b", text: "4" },
            { id: "c", text: "1" },
            { id: "d", text: "2" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "technique", name: "Quadratic trig", statement: "Two sin values × two quadrants." }], steps: [{ reasoning: "$\\sin=\\pm\\frac12$ → each gives 2 angles → 4 total.", marks: 1, markCode: "A" }], finalAnswer: "4" },
        },
        {
          id: "olam-u3-s3-qu-q8", difficulty: "core", totalMarks: 1,
          stem: "$\\tan^2\\theta=3$, $0°\\leq\\theta<360°$ gives…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$60°,240°$ only" },
            { id: "b", text: "$60°,120°,240°,300°$" },
            { id: "c", text: "$30°,150°,210°,330°$" },
            { id: "d", text: "$45°,135°,225°,315°$" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "technique", name: "Quadratic trig", statement: "$\\tan=\\pm\\sqrt3$." }], steps: [{ reasoning: "$\\tan=\\sqrt3$ → $60°,240°$; $\\tan=-\\sqrt3$ → $120°,300°$.", marks: 1, markCode: "A" }], finalAnswer: "$60°,120°,240°,300°$" },
        },
        {
          id: "olam-u3-s3-qu-q9", difficulty: "core", totalMarks: 1,
          stem: "$2\\cos^2\\theta-1=0$ gives $\\cos\\theta=$…",
          response: { type: "mcq", choices: [
            { id: "a", text: "0" },
            { id: "b", text: "$\\pm\\frac{\\sqrt3}{2}$" },
            { id: "c", text: "$\\pm\\frac{1}{\\sqrt2}$" },
            { id: "d", text: "$\\pm1$" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "technique", name: "Isolate", statement: "Solve for cos." }], steps: [{ reasoning: "$\\cos^2\\theta=\\frac12$ → $\\cos\\theta=\\pm\\frac{1}{\\sqrt2}$.", marks: 1, markCode: "A" }], finalAnswer: "$\\pm\\frac{1}{\\sqrt2}$" },
        },
        {
          id: "olam-u3-s3-qu-q10", difficulty: "core", totalMarks: 3,
          stem: "How many solutions does $\\cos^2\\theta=\\frac{1}{4}$ have in $0°\\leq\\theta<360°$?",
          response: { type: "numeric", parts: [{ label: "a", answer: 4 }] },
          markscheme: { principles: [{ kind: "technique", name: "Quadratic trig", statement: "Count solutions." }], steps: [
            { reasoning: "$\\cos\\theta=\\pm\\frac12$ → each value gives 2 angles → 4 solutions.", marks: 1, markCode: "M" },
            { reasoning: "They are $60°,120°,240°,300°$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 4.", marks: 1, markCode: "A" },
          ], finalAnswer: "4" },
        },
        {
          id: "olam-u3-s3-qu-q11", difficulty: "core", totalMarks: 3,
          stem: "Solve $2\\sin^2\\theta+\\sin\\theta-1=0$, $0°\\leq\\theta<360°$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 30 }, { label: "b", answer: 150 }, { label: "c", answer: 270 }], unordered: true },
          markscheme: { principles: [{ kind: "technique", name: "Quadratic trig", statement: "Factorise then solve." }], steps: [
            { reasoning: "$(2\\sin\\theta-1)(\\sin\\theta+1)=0$ → $\\sin\\theta=\\frac12$ or $-1$.", marks: 1, markCode: "M" },
            { reasoning: "$\\sin=\\frac12$: $30°,150°$; $\\sin=-1$: $270°$.", marks: 1, markCode: "M" },
            { reasoning: "All three in interval ✓: $30°,150°,270°$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$30°,150°,270°$" },
        },
        {
          id: "olam-u3-s3-qu-q12", difficulty: "core", totalMarks: 3,
          stem: "Solve $\\cos^2\\theta-\\cos\\theta=0$, $0°\\leq\\theta<360°$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 0 }, { label: "b", answer: 90 }, { label: "c", answer: 270 }], unordered: true },
          markscheme: { principles: [{ kind: "technique", name: "Factorise", statement: "Common factor." }], steps: [
            { reasoning: "$\\cos\\theta(\\cos\\theta-1)=0$ → $\\cos\\theta=0$ or $1$.", marks: 1, markCode: "M" },
            { reasoning: "$\\cos=0$: $90°,270°$; $\\cos=1$: $0°$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $0°,90°,270°$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$0°,90°,270°$" },
        },
        {
          id: "olam-u3-s3-qu-q13", difficulty: "challenge", totalMarks: 3,
          stem: "Solve $2\\cos^2\\theta+\\cos\\theta-1=0$, $0°\\leq\\theta<360°$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 60 }, { label: "b", answer: 180 }, { label: "c", answer: 300 }], unordered: true },
          markscheme: { principles: [{ kind: "technique", name: "Quadratic trig", statement: "Factorise then solve." }], steps: [
            { reasoning: "$(2\\cos\\theta-1)(\\cos\\theta+1)=0$ → $\\cos\\theta=\\frac12$ or $-1$.", marks: 1, markCode: "M" },
            { reasoning: "$\\cos=\\frac12$: $60°,300°$; $\\cos=-1$: $180°$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $60°,180°,300°$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$60°,180°,300°$" },
        },
        {
          id: "olam-u3-s3-qu-q14", difficulty: "core", totalMarks: 3,
          stem: "Solve $\\sin^2\\theta-3\\sin\\theta+2=0$, $0°\\leq\\theta<360°$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Quadratic trig", statement: "Reject out-of-range." }], steps: [
            { reasoning: "$(\\sin\\theta-1)(\\sin\\theta-2)=0$ → $\\sin\\theta=1$ or $2$.", marks: 1, markCode: "M" },
            { reasoning: "Reject $\\sin=2$ (impossible); $\\sin\\theta=1$ → $\\theta=90°$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $\\theta=90°$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$90°$" },
        },
        {
          id: "olam-u3-s3-qu-q15", difficulty: "core", totalMarks: 3,
          stem: "Solve $4\\sin^2\\theta-1=0$, $0°\\leq\\theta<360°$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Quadratic trig", statement: "Two cases for sin." }], steps: [
            { reasoning: "$\\sin\\theta=\\pm\\frac12$.", marks: 1, markCode: "M" },
            { reasoning: "$\\sin=\\frac12$: $30°,150°$; $\\sin=-\\frac12$: $210°,330°$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $30°,150°,210°,330°$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$30°,150°,210°,330°$" },
        },
        {
          id: "olam-u3-s3-qu-q16", difficulty: "challenge", totalMarks: 4,
          stem: "Solve $2\\sin^2\\theta-3\\sin\\theta+1=0$, $0°\\leq\\theta<360°$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Quadratic trig", statement: "Factorise then solve." }], steps: [
            { reasoning: "$(2\\sin\\theta-1)(\\sin\\theta-1)=0$ → $\\sin\\theta=\\frac12$ or $1$.", marks: 1, markCode: "M" },
            { reasoning: "$\\sin=\\frac12$: $30°,150°$; $\\sin=1$: $90°$.", marks: 1, markCode: "M" },
            { reasoning: "All three in interval ✓.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $30°,90°,150°$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$30°,90°,150°$" },
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
