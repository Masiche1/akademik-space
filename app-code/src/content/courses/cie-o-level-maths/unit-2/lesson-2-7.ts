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
            { id: "a", text: "16" }, { id: "b", text: "8" }, { id: "c", text: "4" }, { id: "d", text: "2" },
          ], correctChoiceId: "a" },
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
            { id: "a", text: "S-shaped cubic" }, { id: "b", text: "Parabola" }, { id: "c", text: "Straight line" }, { id: "d", text: "Hyperbola" },
          ], correctChoiceId: "a" },
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
