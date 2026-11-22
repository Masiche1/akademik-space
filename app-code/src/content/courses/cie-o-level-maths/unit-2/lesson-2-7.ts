import type { Lesson } from "../../../types.ts";

export const lesson27: Lesson = {
  id: "olm-u2-lesson-2-7",
  code: "2-7",
  title: "Functions and Graph Sketching",
  goal: "I CAN use function notation and sketch graphs of functions.",
  standards: ["4024: algebra"],
  vocabulary: [
    { term: "Function", definition: "Rule mapping each input to exactly one output." },
    { term: "f(x)", definition: "Function notation: output when input is x." },
    { term: "Domain", definition: "Set of allowed input values." },
    { term: "Range", definition: "Set of possible output values." },
  ],
  concepts: [
    {
      id: "olm-u2-s7-notation",
      title: "Function notation",
      skill: "Use function notation at O Level.",
      lesson: {
        sections: [
          { heading: "Notation", body: "$f(x)=x^2+1$ means the function takes input $x$ and outputs $x^2+1$. $f(3)=10$ means input 3 gives output 10. Composite functions: $fg(x)=f(g(x))$ — apply $g$ first, then $f$. Inverse: $f^{-1}(x)$ undoes $f$ — if $f(2)=5$ then $f^{-1}(5)=2$." },
          { heading: "Domain and range", body: "Domain: values x can take — exclude values making denominator zero or negative under square root. Range: possible outputs — e.g. $x^2$ has range $y\\geq0$; $e^x$ range $y>0$. For $f(x)=\\frac{1}{x}$, domain excludes 0. Always state restrictions explicitly in answers." },
        ],
        keyFormulas: [
          { name: "Composite", statement: "$fg(x)=f(g(x))$ — g first" },
          { name: "Inverse", statement: "$f^{-1}(f(x))=x$" },
        ],
        workedExample: { problem: "$f(x)=2x+1$, $g(x)=x^2$. Find $fg(3)$.", solution: "$g(3)=9$; $f(9)=19$. So $fg(3)=19$." },
      },
      questions: [
        {
          id: "olm-u2-s7-no-q1", difficulty: "foundation", totalMarks: 1,
          stem: "If $f(x)=x^2$, then $f(4)=$",
          response: { type: "mcq", choices: [
            { id: "a", text: "2" },
            { id: "b", text: "8" },
            { id: "c", text: "16" },
            { id: "d", text: "4" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "f(x)", statement: "Substitute." }], steps: [{ reasoning: "$4^2=16$.", marks: 1, markCode: "A" }], finalAnswer: "16" },
        },
        {
          id: "olm-u2-s7-no-q2", difficulty: "foundation", totalMarks: 2,
          stem: "$f(x)=3x-2$. Find $f(5)$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Evaluate", statement: "Substitute." }], steps: [
            { reasoning: "$f(5)=15-2=13$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 13.", marks: 1, markCode: "A" },
          ], finalAnswer: "13" },
        },
        {
          id: "olm-u2-s7-no-q3", difficulty: "core", totalMarks: 3,
          stem: "$f(x)=x+1$, $g(x)=2x$. Find $fg(4)$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Composite", statement: "g first then f." }], steps: [
            { reasoning: "$g(4)=8$; $f(8)=9$ → $fg(4)=9$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 9.", marks: 1, markCode: "M" },
            { reasoning: "Note: $gf(4)=f\\text{ then }g$: $f(4)=5$, $g(5)=10$ → different!", marks: 1, markCode: "A" },
          ], finalAnswer: "9" },
        },
        {
          id: "olm-u2-s7-no-q4", difficulty: "core", totalMarks: 4,
          stem: "$f(x)=\\frac{1}{x-2}$. State the domain and find $f(5)$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Domain", statement: "Exclude denominator=0." }], steps: [
            { reasoning: "Domain: $x\\neq2$ (all reals except 2).", marks: 1, markCode: "M" },
            { reasoning: "$f(5)=\\frac{1}{3}$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "M" },
            { reasoning: "Range: $y\\neq0$ (never outputs 0).", marks: 1, markCode: "A" },
          ], finalAnswer: "$x\\neq2$; $f(5)=\\frac13$" },
        },
        {
          id: "olm-u2-s7-no-q5", difficulty: "foundation", totalMarks: 1,
          stem: "If $f(x)=x^2-3$, then $f(2)=$",
          response: { type: "mcq", choices: [
            { id: "a", text: "7" },
            { id: "b", text: "1" },
            { id: "c", text: "$-1$" },
            { id: "d", text: "4" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "technique", name: "Evaluate", statement: "Substitute." }], steps: [{ reasoning: "$f(2)=4-3=1$.", marks: 1, markCode: "A" }], finalAnswer: "1" },
        },
        {
          id: "olm-u2-s7-no-q6", difficulty: "foundation", totalMarks: 2,
          stem: "$f(x)=5-2x$. Find $f(4)$.",
          response: { type: "numeric", parts: [{ label: "a", answer: -3 }] },
          markscheme: { principles: [{ kind: "technique", name: "Evaluate", statement: "Substitute." }], steps: [
            { reasoning: "$f(4)=5-8=-3$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $-3$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$-3$" },
        },
        {
          id: "olm-u2-s7-no-q7", difficulty: "foundation", totalMarks: 2,
          stem: "$f(x)=x^2+1$, $g(x)=x-3$. Find $gf(2)$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 2 }] },
          markscheme: { principles: [{ kind: "technique", name: "Composite", statement: "f first then g." }], steps: [
            { reasoning: "$f(2)=5$; $g(5)=5-3=2$ → $gf(2)=2$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 2.", marks: 1, markCode: "A" },
          ], finalAnswer: "2" },
        },
        {
          id: "olm-u2-s7-no-q8", difficulty: "foundation", totalMarks: 1,
          stem: "If $f(x)=3x$, then $f^{-1}(x)=$",
          response: { type: "mcq", choices: [
            { id: "a", text: "$x-3$" },
            { id: "b", text: "$3x$" },
            { id: "c", text: "$\\frac{x}{3}$" },
            { id: "d", text: "$\\frac{3}{x}$" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "technique", name: "Inverse", statement: "Undo the function." }], steps: [{ reasoning: "$y=3x$ → $x=y/3$ → $f^{-1}(x)=x/3$.", marks: 1, markCode: "A" }], finalAnswer: "$\\frac{x}{3}$" },
        },
        {
          id: "olm-u2-s7-no-q9", difficulty: "core", totalMarks: 3,
          stem: "$f(x)=2x+3$, $g(x)=x^2-1$. Find $fg(2)$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Composite", statement: "g first then f." }], steps: [
            { reasoning: "$g(2)=3$; $f(3)=9$ → $fg(2)=9$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 9.", marks: 1, markCode: "M" },
            { reasoning: "Note: $gf(2)=g(7)=48$ — order matters!", marks: 1, markCode: "A" },
          ], finalAnswer: "9" },
        },
        {
          id: "olm-u2-s7-no-q10", difficulty: "core", totalMarks: 2,
          stem: "$f(x)=\\frac{x+1}{2}$. Find $f^{-1}(4)$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 7 }] },
          markscheme: { principles: [{ kind: "technique", name: "Inverse", statement: "Solve $y=f(x)$ for $x$." }], steps: [
            { reasoning: "$y=\\frac{x+1}{2}$ → $x=2y-1$; $f^{-1}(4)=7$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 7.", marks: 1, markCode: "A" },
          ], finalAnswer: "7" },
        },
        {
          id: "olm-u2-s7-no-q11", difficulty: "core", totalMarks: 1,
          stem: "For $f(x)=\\frac{1}{x}$, the domain is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "All real $x$ except $0$" },
            { id: "b", text: "Positive $x$ only" },
            { id: "c", text: "All real $x$" },
            { id: "d", text: "All real $x$ except $1$" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "technique", name: "Domain", statement: "Exclude denominator = 0." }], steps: [{ reasoning: "$x\\neq0$.", marks: 1, markCode: "A" }], finalAnswer: "$x\\neq0$" },
        },
        {
          id: "olm-u2-s7-no-q12", difficulty: "core", totalMarks: 1,
          stem: "Given $f(x)=x+2$ and $g(x)=3x$, then $fg(x)=$",
          response: { type: "mcq", choices: [
            { id: "a", text: "$x+6$" },
            { id: "b", text: "$3x+6$" },
            { id: "c", text: "$3(x+2)$" },
            { id: "d", text: "$3x+2$" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "technique", name: "Composite", statement: "$f(g(x))$." }], steps: [{ reasoning: "$f(3x)=3x+2$.", marks: 1, markCode: "A" }], finalAnswer: "$3x+2$" },
        },
        {
          id: "olm-u2-s7-no-q13", difficulty: "challenge", totalMarks: 4,
          stem: "$f(x)=\\frac{2}{x-1}$. State the domain, find $f(3)$, and find $f^{-1}(x)$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Domain & inverse", statement: "Exclude $x=1$; solve for inverse." }], steps: [
            { reasoning: "Domain: $x\\neq1$.", marks: 1, markCode: "M" },
            { reasoning: "$f(3)=\\frac{2}{2}=1$.", marks: 1, markCode: "M" },
            { reasoning: "$y=\\frac{2}{x-1}$ → $x-1=\\frac{2}{y}$ → $f^{-1}(x)=1+\\frac{2}{x}$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$x\\neq1$; $f(3)=1$; $f^{-1}(x)=1+\\frac{2}{x}$" },
        },
        {
          id: "olm-u2-s7-no-q14", difficulty: "challenge", totalMarks: 2,
          stem: "If $f(x)=2x^2-x-3$, find $f(-2)$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 7 }] },
          markscheme: { principles: [{ kind: "technique", name: "Evaluate", statement: "Substitute carefully." }], steps: [
            { reasoning: "$f(-2)=2(4)-(-2)-3=8+2-3=7$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 7.", marks: 1, markCode: "A" },
          ], finalAnswer: "7" },
        },
        {
          id: "olm-u2-s7-no-q15", difficulty: "challenge", totalMarks: 1,
          stem: "If $fg(x)=x^2+1$ and $g(x)=x+1$, then $f(x)=$",
          response: { type: "mcq", choices: [
            { id: "a", text: "$(x+1)^2+1$" },
            { id: "b", text: "$x^2+2x+2$" },
            { id: "c", text: "$x^2-2x+2$" },
            { id: "d", text: "$x^2$" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "technique", name: "Composite", statement: "Replace $x$ with $x-1$." }], steps: [{ reasoning: "$f(x+1)=x^2+1$ → $f(x)=(x-1)^2+1=x^2-2x+2$.", marks: 1, markCode: "A" }], finalAnswer: "$x^2-2x+2$" },
        },
        {
          id: "olm-u2-s7-no-q16", difficulty: "challenge", totalMarks: 4,
          stem: "The function $f(x)=ax+b$ satisfies $f(2)=7$ and $f(-1)=1$. Find $a$ and $b$, then evaluate $f(4)$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Simultaneous", statement: "Two equations for $a,b$." }], steps: [
            { reasoning: "$2a+b=7$; $-a+b=1$.", marks: 1, markCode: "M" },
            { reasoning: "Subtract: $3a=6$ → $a=2$, $b=3$.", marks: 1, markCode: "M" },
            { reasoning: "Check: $f(2)=7$ ✓, $f(-1)=1$ ✓.", marks: 1, markCode: "M" },
            { reasoning: "$f(4)=11$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$a=2$, $b=3$; $f(4)=11$" },
        },
      ],
    },
    {
      id: "olm-u2-s7-sketch",
      title: "Sketching curves",
      skill: "Sketch graphs of common functions at O Level.",
      lesson: {
        sections: [
          { heading: "Common curves", body: "Linear $y=mx+c$: straight line. Quadratic $y=ax^2+bx+c$: parabola. Cubic $y=ax^3+...$: S-shaped with up to 2 turning points. Reciprocal $y=\\frac{k}{x}$: two branches in opposite quadrants, asymptotes on axes. $y=a^x$: exponential curve through $(0,1)$, horizontal asymptote $y=0$. $y=\\log x$: logarithmic, vertical asymptote $x=0$, through $(1,0)$." },
          { heading: "Key features to mark", body: "Intercepts (set x=0 for y-intercept, y=0 for x-intercepts), turning points, asymptotes (lines curve approaches but never touches), and end behavior. For sketching, mark these features then draw smooth curve — don't plot every point." },
        ],
        keyFormulas: [
          { name: "Curve types", statement: "Line, parabola, cubic, reciprocal, exponential, log" },
        ],
        workedExample: { problem: "Sketch $y=\\frac{6}{x}$.", solution: "Two branches: Q1 ($x>0,y>0$) and Q3 ($x<0,y<0$); asymptotes x=0 and y=0; through (1,6),(2,3),(3,2),(6,1) and negatives." },
      },
      questions: [
        {
          id: "olm-u2-s7-sk-q1", difficulty: "foundation", totalMarks: 1,
          stem: "The graph of $y=x^3$ has what shape?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Hyperbola" },
            { id: "b", text: "Parabola" },
            { id: "c", text: "S-shaped cubic" },
            { id: "d", text: "Straight line" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "property", name: "Cubic", statement: "S-shape." }], steps: [{ reasoning: "$x^3$ gives cubic curve.", marks: 1, markCode: "A" }], finalAnswer: "S-shaped cubic" },
        },
        {
          id: "olm-u2-s7-sk-q2", difficulty: "foundation", totalMarks: 2,
          stem: "What are the asymptotes of $y=\\frac{4}{x}$?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "property", name: "Asymptote", statement: "Approached not touched." }], steps: [
            { reasoning: "x=0 (vertical) and y=0 (horizontal).", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$x=0$, $y=0$" },
        },
        {
          id: "olm-u2-s7-sk-q3", difficulty: "core", totalMarks: 3,
          stem: "Sketch $y=x^2-4$. State x-intercepts and vertex.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Quadratic sketch", statement: "Find key points." }], steps: [
            { reasoning: "x-intercepts: $x=\\pm2$; vertex $(0,-4)$; opens upward.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "M" },
            { reasoning: "y-intercept also $(0,-4)$ = vertex here.", marks: 1, markCode: "A" },
          ], finalAnswer: "Intercepts $\\pm2$; vertex $(0,-4)$" },
        },
        {
          id: "olm-u2-s7-sk-q4", difficulty: "core", totalMarks: 4,
          stem: "Describe the graph of $y=2^x$ including key features.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "property", name: "Exponential", statement: "Growth curve." }], steps: [
            { reasoning: "Passes through $(0,1)$; horizontal asymptote $y=0$; increasing; as $x\\to\\infty$, $y\\to\\infty$.", marks: 1, markCode: "M" },
            { reasoning: "Points: $(1,2),(2,4),(3,8),(-1,0.5)$.", marks: 1, markCode: "M" },
            { reasoning: "Answer described.", marks: 1, markCode: "M" },
            { reasoning: "Growth curve shape correct.", marks: 1, markCode: "A" },
          ], finalAnswer: "Exponential growth through $(0,1)$, asymptote $y=0$" },
        },
        {
          id: "olm-u2-s7-sk-q5", difficulty: "foundation", totalMarks: 1,
          stem: "The graph of $y=\\frac{1}{x}$ has…",
          response: { type: "mcq", choices: [
            { id: "a", text: "One branch only" },
            { id: "b", text: "A parabola" },
            { id: "c", text: "A single straight line" },
            { id: "d", text: "Two branches in opposite quadrants" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "property", name: "Reciprocal", statement: "Hyperbola shape." }], steps: [{ reasoning: "$y=1/x$ gives Q1 and Q3 branches.", marks: 1, markCode: "A" }], finalAnswer: "Two branches" },
        },
        {
          id: "olm-u2-s7-sk-q6", difficulty: "foundation", totalMarks: 2,
          stem: "The curve $y=\\frac{k}{x}$ passes through $(4,3)$. Find $k$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 12 }] },
          markscheme: { principles: [{ kind: "technique", name: "Reciprocal", statement: "$k=xy$." }], steps: [
            { reasoning: "$k=4\\times3=12$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 12.", marks: 1, markCode: "A" },
          ], finalAnswer: "12" },
        },
        {
          id: "olm-u2-s7-sk-q7", difficulty: "foundation", totalMarks: 1,
          stem: "The graph of $y=x^2$ crosses the y-axis at…",
          response: { type: "mcq", choices: [
            { id: "a", text: "It does not cross" },
            { id: "b", text: "$(0,1)$" },
            { id: "c", text: "$(0,0)$" },
            { id: "d", text: "$(1,1)$" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "property", name: "Intercept", statement: "Set $x=0$." }], steps: [{ reasoning: "$y=0$ when $x=0$ → $(0,0)$.", marks: 1, markCode: "A" }], finalAnswer: "$(0,0)$" },
        },
        {
          id: "olm-u2-s7-sk-q8", difficulty: "foundation", totalMarks: 2,
          stem: "Find the y-intercept of $y=3x-5$.",
          response: { type: "numeric", parts: [{ label: "a", answer: -5 }] },
          markscheme: { principles: [{ kind: "technique", name: "Intercept", statement: "Set $x=0$." }], steps: [
            { reasoning: "At $x=0$: $y=-5$ → intercept $(0,-5)$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $-5$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$-5$" },
        },
        {
          id: "olm-u2-s7-sk-q9", difficulty: "core", totalMarks: 1,
          stem: "Which curve has a horizontal asymptote $y=0$ and passes through $(0,1)$?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$y=2^x$" },
            { id: "b", text: "$y=\\frac{1}{x}$" },
            { id: "c", text: "$y=x^2$" },
            { id: "d", text: "$y=x+1$" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "property", name: "Exponential", statement: "$a^x$ shape." }], steps: [{ reasoning: "$2^x$: asymptote $y=0$, through $(0,1)$.", marks: 1, markCode: "A" }], finalAnswer: "$y=2^x$" },
        },
        {
          id: "olm-u2-s7-sk-q10", difficulty: "core", totalMarks: 3,
          stem: "Describe the graph of $y=x^2+2x-3$: give the vertex and the intercepts.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Quadratic sketch", statement: "Key points." }], steps: [
            { reasoning: "Vertex: $x=-1$, $y=1-2-3=-4$ → $(-1,-4)$; axis $x=-1$.", marks: 1, markCode: "M" },
            { reasoning: "x-intercepts: $(x+3)(x-1)=0$ → $(-3,0),(1,0)$; y-intercept $(0,-3)$.", marks: 1, markCode: "M" },
            { reasoning: "Opens upward through these points.", marks: 1, markCode: "A" },
          ], finalAnswer: "Vertex $(-1,-4)$; intercepts $(-3,0),(1,0),(0,-3)$" },
        },
        {
          id: "olm-u2-s7-sk-q11", difficulty: "core", totalMarks: 2,
          stem: "For $y=x^2-8x+7$, find the x-coordinate of the vertex.",
          response: { type: "numeric", parts: [{ label: "a", answer: 4 }] },
          markscheme: { principles: [{ kind: "formula", name: "Vertex", statement: "$x=-b/2a$." }], steps: [
            { reasoning: "$x=\\frac{8}{2}=4$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 4.", marks: 1, markCode: "A" },
          ], finalAnswer: "4" },
        },
        {
          id: "olm-u2-s7-sk-q12", difficulty: "core", totalMarks: 1,
          stem: "The graph of $y=-x^2+9$ has maximum value…",
          response: { type: "mcq", choices: [
            { id: "a", text: "There is no maximum" },
            { id: "b", text: "9" },
            { id: "c", text: "0" },
            { id: "d", text: "$-9$" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "property", name: "Vertex", statement: "Max at $(0,9)$." }], steps: [{ reasoning: "$a<0$ → maximum at $x=0$: $y=9$.", marks: 1, markCode: "A" }], finalAnswer: "9" },
        },
        {
          id: "olm-u2-s7-sk-q13", difficulty: "challenge", totalMarks: 4,
          stem: "Describe fully the graph of $y=\\frac{4}{x}+1$: state the asymptotes, the quadrants containing the branches, and one point on the curve.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Reciprocal shift", statement: "Vertical/horizontal shift." }], steps: [
            { reasoning: "Asymptotes: $x=0$ (vertical) and $y=1$ (horizontal).", marks: 1, markCode: "M" },
            { reasoning: "Branches in Q1 and Q3 relative to asymptotes (above/below $y=1$).", marks: 1, markCode: "M" },
            { reasoning: "Point: at $x=4$, $y=2$ → $(4,2)$; at $x=-2$, $y=-1$.", marks: 1, markCode: "M" },
            { reasoning: "Answer described.", marks: 1, markCode: "A" },
          ], finalAnswer: "Asymptotes $x=0$, $y=1$; branches above $y=1$ for $x>0$, below for $x<0$" },
        },
        {
          id: "olm-u2-s7-sk-q14", difficulty: "challenge", totalMarks: 2,
          stem: "The curve $y=2^x$ passes through $(3,k)$. Find $k$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 8 }] },
          markscheme: { principles: [{ kind: "technique", name: "Evaluate", statement: "Substitute." }], steps: [
            { reasoning: "$k=2^3=8$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 8.", marks: 1, markCode: "A" },
          ], finalAnswer: "8" },
        },
        {
          id: "olm-u2-s7-sk-q15", difficulty: "challenge", totalMarks: 1,
          stem: "The curve $y=\\log_2 x$ passes through which point?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$(0,1)$" },
            { id: "b", text: "$(1,0)$" },
            { id: "c", text: "$(1,1)$" },
            { id: "d", text: "$(2,0)$" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "property", name: "Logarithm", statement: "$\\log_a a=0$." }], steps: [{ reasoning: "$\\log_2 1=0$ → $(1,0)$.", marks: 1, markCode: "A" }], finalAnswer: "$(1,0)$" },
        },
        {
          id: "olm-u2-s7-sk-q16", difficulty: "challenge", totalMarks: 4,
          stem: "Sketch $y=x^3-x$: state the x-intercepts and describe the shape.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Cubic sketch", statement: "Factorise and shape." }], steps: [
            { reasoning: "$y=x(x-1)(x+1)$ → x-intercepts $(-1,0),(0,0),(1,0)$.", marks: 1, markCode: "M" },
            { reasoning: "S-shaped cubic through the origin, positive leading coefficient.", marks: 1, markCode: "M" },
            { reasoning: "Local max/min between the intercepts (at $x=\\pm\\frac{1}{\\sqrt3}$).", marks: 1, markCode: "M" },
            { reasoning: "Correct smooth cubic shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "Intercepts $(-1,0),(0,0),(1,0)$; S-shaped cubic" },
        },
      ],
    },
  ],
  notes: [
    { id: "olm-u2-s7-func-notes", title: "Functions & sketching — notes", summary: "Notation and curve shapes.",
      sections: [
        { heading: "Notation", body: "$f(x)$ substitute; $fg(x)=f(g(x))$; domain excludes bad values." },
        { heading: "Curves", body: "Quadratic=parabola; cubic=S-shape; reciprocal=hyperbola with asymptotes; $a^x$=growth." },
      ] },
  ],
};
