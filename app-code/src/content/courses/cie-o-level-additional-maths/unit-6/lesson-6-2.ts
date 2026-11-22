import type { Lesson } from "../../../types.ts";

export const lesson62: Lesson = {
  id: "olam-u6-lesson-6-2",
  code: "4-3",
  title: "Integration",
  goal: "I CAN integrate polynomial functions and find areas.",
  standards: ["4037: integration"],
  vocabulary: [
    { term: "Integral", definition: "$\\int f(x)\\,dx$ — antiderivative plus constant." },
    { term: "Indefinite integral", definition: "Family of antiderivatives; needs $+c$." },
    { term: "Area under curve", definition: "Definite integral between limits." },
    { term: "Reverse power rule", definition: "$\\int x^n\\,dx=\\frac{x^{n+1}}{n+1}+c$ ($n\\neq-1$)." },
  ],
  concepts: [
    {
      id: "olam-u6-s2-rules",
      title: "Integration rules",
      skill: "Integrate polynomials at O Level.",
      lesson: {
        sections: [
          { heading: "Reversing differentiation", body: "Integration is the reverse of differentiation: if $\\frac{dy}{dx}=f(x)$ then $y=\\int f(x)\\,dx$. The power rule reverses as $\\int x^n\\,dx=\\frac{x^{n+1}}{n+1}+c$ for $n\\neq-1$ — increase the power by 1 and divide by the new power. The special case $\\int x^{-1}dx=\\int\\frac{1}{x}dx=\\ln|x|+c$ must be memorised since the formula would give division by zero. The constant $c$ appears because infinitely many functions share the same derivative — they differ only by a constant." },
          { heading: "Finding the constant", body: "An indefinite integral always needs $+c$, but a point on the curve determines it. If you're told the curve passes through $(x_1,y_1)$, substitute those values into your integrated expression and solve for $c$. This 'integrate then find $c$' pattern appears constantly in kinematics and curve questions — never leave the answer as a family of curves when a point is given." },
        ],
        keyFormulas: [
          { name: "Reverse power", statement: "$\\int x^n\\,dx=\\frac{x^{n+1}}{n+1}+c$ ($n\\neq-1$)" },
          { name: "Log case", statement: "$\\int x^{-1}dx=\\ln|x|+c$" },
        ],
        workedExample: { problem: "Integrate $y=6x^2-2x+1$.", solution: "Term by term: $\\int6x^2dx=6\\times\\frac{x^3}{3}=2x^3$; $\\int-2xdx=-x^2$; $\\int1dx=x$. So $\\int y\\,dx=2x^3-x^2+x+c$. The constant 1 integrates to $x$, not to a constant — easy mark to lose." },
      },
      questions: [
        {
          id: "olam-u6-s2-ru-q1", difficulty: "foundation", totalMarks: 1,
          stem: "$\\int 2x\\,dx$ equals…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$x^2+c$" },
            { id: "b", text: "$\\frac{x^2}{2}+c$" },
            { id: "c", text: "$x+c$" },
            { id: "d", text: "$2x^2+c$" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "formula", name: "Reverse power", statement: "Increase power, divide." }], steps: [{ reasoning: "$\\int2x\\,dx=2\\times\\frac{x^2}{2}+c=x^2+c$.", marks: 1, markCode: "A" }], finalAnswer: "$x^2+c$" },
        },
        {
          id: "olam-u6-s2-ru-q2", difficulty: "foundation", totalMarks: 2,
          stem: "Integrate $y=4x^3-3x^2+2$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Reverse power", statement: "Term by term." }], steps: [
            { reasoning: "$\\int y\\,dx=x^4-x^3+2x+c$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$x^4-x^3+2x+c$" },
        },
        {
          id: "olam-u6-s2-ru-q3", difficulty: "core", totalMarks: 3,
          stem: "Integrate $y=\\frac{3}{x^2}-2x^{-1}$ (note: $\\int x^{-1}dx=\\ln|x|$).",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Reverse power", statement: "Careful with $n=-1$." }], steps: [
            { reasoning: "$\\int 3x^{-2}dx=3\\times\\frac{x^{-1}}{-1}=-\\frac{3}{x}$.", marks: 1, markCode: "M" },
            { reasoning: "$\\int -2x^{-1}dx=-2\\ln|x|$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $-\\frac{3}{x}-2\\ln|x|+c$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$-\\frac{3}{x}-2\\ln|x|+c$" },
        },
        {
          id: "olam-u6-s2-ru-q4", difficulty: "core", totalMarks: 4,
          stem: "Given $\\frac{dy}{dx}=6x-4$ and the curve passes through $(1,3)$, find $y$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Integrate with condition", statement: "Find $c$ from point." }], steps: [
            { reasoning: "$y=\\int(6x-4)dx=3x^2-4x+c$.", marks: 1, markCode: "M" },
            { reasoning: "At $(1,3)$: $3=3-4+c$ → $c=4$.", marks: 1, markCode: "M" },
            { reasoning: "$y=3x^2-4x+4$.", marks: 1, markCode: "M" },
            { reasoning: "Verify: at $x=1$, $3-4+4=3$. ✓", marks: 1, markCode: "A" },
          ], finalAnswer: "$y=3x^2-4x+4$" },
        },
        {
          id: "olam-u6-s2-ru-q5", difficulty: "foundation", totalMarks: 1,
          stem: "$\\int 3x^2\\,dx$ equals…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$6x+c$" },
            { id: "b", text: "$x^3+c$" },
            { id: "c", text: "$\\frac{3x^3}{2}+c$" },
            { id: "d", text: "$x^3+3+c$" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "formula", name: "Reverse power", statement: "Increase power, divide by new power." }], steps: [{ reasoning: "$3\\times\\frac{x^3}{3}=x^3$, so $x^3+c$.", marks: 1, markCode: "A" }], finalAnswer: "$x^3+c$" },
        },
        {
          id: "olam-u6-s2-ru-q6", difficulty: "foundation", totalMarks: 2,
          stem: "$\\int 4x\\,dx = 2x^2+c$ passes through $(1,5)$. Find $c$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 3 }] },
          markscheme: { principles: [{ kind: "technique", name: "Find constant", statement: "Substitute the point." }], steps: [
            { reasoning: "$5=2(1)^2+c$ → $c=3$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 3.", marks: 1, markCode: "A" },
          ], finalAnswer: "3" },
        },
        {
          id: "olam-u6-s2-ru-q7", difficulty: "foundation", totalMarks: 1,
          stem: "$\\int \\frac{1}{x}\\,dx$ equals…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$x\\ln x+c$" },
            { id: "b", text: "$\\ln x$" },
            { id: "c", text: "$\\frac{1}{x^2}+c$" },
            { id: "d", text: "$\\ln|x|+c$" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "formula", name: "Log case", statement: "$\\int x^{-1}dx=\\ln|x|+c$." }], steps: [{ reasoning: "Special case memorised.", marks: 1, markCode: "A" }], finalAnswer: "$\\ln|x|+c$" },
        },
        {
          id: "olam-u6-s2-ru-q8", difficulty: "core", totalMarks: 3,
          stem: "Integrate $y=3x^2-4x+2$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Reverse power", statement: "Term by term." }], steps: [
            { reasoning: "$\\int y\\,dx=x^3-2x^2+2x+c$.", marks: 1, markCode: "M" },
            { reasoning: "Check: $3x^2\\to x^3$; $-4x\\to-2x^2$; $2\\to2x$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$x^3-2x^2+2x+c$" },
        },
        {
          id: "olam-u6-s2-ru-q9", difficulty: "core", totalMarks: 2,
          stem: "$\\int(2x+3)\\,dx=x^2+3x+c$ passes through $(0,4)$. Find $c$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 4 }] },
          markscheme: { principles: [{ kind: "technique", name: "Find constant", statement: "Substitute the point." }], steps: [
            { reasoning: "At $x=0$, $y=4$: $4=0+0+c$ → $c=4$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 4.", marks: 1, markCode: "A" },
          ], finalAnswer: "4" },
        },
        {
          id: "olam-u6-s2-ru-q10", difficulty: "core", totalMarks: 1,
          stem: "$\\int 5\\,dx$ equals…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\frac{5x^2}{2}+c$" },
            { id: "b", text: "$5+c$" },
            { id: "c", text: "$5x+c$" },
            { id: "d", text: "$x^5+c$" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "technique", name: "Reverse power", statement: "Constant integrates to $x$ times constant." }], steps: [{ reasoning: "$\\int5\\,dx=5x+c$.", marks: 1, markCode: "A" }], finalAnswer: "$5x+c$" },
        },
        {
          id: "olam-u6-s2-ru-q11", difficulty: "challenge", totalMarks: 4,
          stem: "Given $\\frac{dy}{dx}=8x-6$ and the curve passes through $(2,1)$, find $y$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Integrate with condition", statement: "Find $c$ from point." }], steps: [
            { reasoning: "$y=\\int(8x-6)dx=4x^2-6x+c$.", marks: 1, markCode: "M" },
            { reasoning: "At $(2,1)$: $1=16-12+c$ → $c=-3$.", marks: 1, markCode: "M" },
            { reasoning: "$y=4x^2-6x-3$.", marks: 1, markCode: "M" },
            { reasoning: "Verify: $16-12-3=1$ ✓.", marks: 1, markCode: "A" },
          ], finalAnswer: "$y=4x^2-6x-3$" },
        },
        {
          id: "olam-u6-s2-ru-q12", difficulty: "core", totalMarks: 2,
          stem: "Evaluate $\\int x^{1/2}\\,dx$ at $x=4$ (take $c=0$).",
          response: { type: "numeric", parts: [{ label: "a", answer: 5.3333, tolerance: 0.001 }] },
          markscheme: { principles: [{ kind: "formula", name: "Reverse power", statement: "Fractional powers integrate." }], steps: [
            { reasoning: "$\\int x^{1/2}dx=\\frac{x^{3/2}}{3/2}=\\frac23x^{3/2}$; at $x=4$: $\\frac23(8)=\\frac{16}{3}\\approx5.33$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $\\frac{16}{3}\\approx5.33$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$\\frac{16}{3}$" },
        },
        {
          id: "olam-u6-s2-ru-q13", difficulty: "core", totalMarks: 1,
          stem: "$\\int\\left(x^2+\\frac{1}{x}\\right)dx$ equals…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\frac{x^3}{3}+\\frac{1}{x^2}+c$" },
            { id: "b", text: "$\\frac{x^3}{3}+\\ln|x|+c$" },
            { id: "c", text: "$2x+\\ln|x|+c$" },
            { id: "d", text: "$\\frac{x^3}{3}-\\ln|x|+c$" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "formula", name: "Reverse power", statement: "Two cases: $n\\neq-1$ and $n=-1$." }], steps: [{ reasoning: "$x^2\\to\\frac{x^3}{3}$; $\\frac1x\\to\\ln|x|$.", marks: 1, markCode: "A" }], finalAnswer: "$\\frac{x^3}{3}+\\ln|x|+c$" },
        },
        {
          id: "olam-u6-s2-ru-q14", difficulty: "core", totalMarks: 3,
          stem: "Integrate $y=x^{-2}+3$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Reverse power", statement: "Negative power and constant." }], steps: [
            { reasoning: "$\\int x^{-2}dx=\\frac{x^{-1}}{-1}=-\\frac1x$.", marks: 1, markCode: "M" },
            { reasoning: "$\\int3\\,dx=3x$; total: $-\\frac1x+3x+c$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$-\\frac1x+3x+c$" },
        },
        {
          id: "olam-u6-s2-ru-q15", difficulty: "core", totalMarks: 2,
          stem: "$\\int 4x^3\\,dx = x^4+c$ passes through $(1,6)$. Find $c$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 5 }] },
          markscheme: { principles: [{ kind: "technique", name: "Find constant", statement: "Substitute the point." }], steps: [
            { reasoning: "$6=1+c$ → $c=5$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 5.", marks: 1, markCode: "A" },
          ], finalAnswer: "5" },
        },
        {
          id: "olam-u6-s2-ru-q16", difficulty: "challenge", totalMarks: 4,
          stem: "Given $\\frac{dy}{dx}=6x^2-4x+1$ and $y=2$ when $x=0$, find $y$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Integrate with condition", statement: "Find $c$ from initial value." }], steps: [
            { reasoning: "$y=2x^3-2x^2+x+c$.", marks: 1, markCode: "M" },
            { reasoning: "At $x=0$, $y=2$: $c=2$.", marks: 1, markCode: "M" },
            { reasoning: "$y=2x^3-2x^2+x+2$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$y=2x^3-2x^2+x+2$" },
        },
      ],
    },
    {
      id: "olam-u6-s2-area",
      title: "Areas under curves",
      skill: "Find areas using definite integrals at O Level.",
      lesson: {
        sections: [
          { heading: "What the definite integral computes", body: "A definite integral $\\int_a^b f(x)\\,dx$ evaluates the antiderivative at the upper limit minus at the lower limit: $F(b)-F(a)$, written $[F(x)]_a^b$. Geometrically, when $f(x)\\geq0$ on $[a,b]$ it gives the area between the curve and the x-axis — the fundamental connection between integration and area. If $f$ dips below the axis, that region counts negatively, which is why 'area between curves' questions need care about which function is on top." },
          { heading: "Area between curves", body: "To find the area enclosed by two curves, first find their intersection points (solve $f(x)=g(x)$), then integrate the top function minus the bottom function over each interval between intersections. For $y=x$ and $y=x^2$ on $[0,1]$: they meet at $x=0$ and $x=1$, and $x\\geq x^2$ throughout, so area $=\\int_0^1(x-x^2)dx=\\frac16$. Always check which curve is above before subtracting — getting the order wrong gives a negative 'area'." },
        ],
        keyFormulas: [
          { name: "Definite integral", statement: "$\\int_a^b f\\,dx=F(b)-F(a)$" },
          { name: "Area between", statement: "$\\int_a^b(\\text{top}-\\text{bottom})\\,dx$" },
        ],
        workedExample: { problem: "Find the area under $y=2x$ from $x=0$ to $x=3$.", solution: "$\\int_0^3 2x\\,dx=[x^2]_0^3=9-0=9$ units². Geometrically this is a triangle with base 3 and height 6: $\\frac12\\times3\\times6=9$ ✓ — integration reproduces the triangle area formula." },
      },
      questions: [
        {
          id: "olam-u6-s2-ar-q1", difficulty: "foundation", totalMarks: 1,
          stem: "$\\int_0^2 3x^2\\,dx$ equals…",
          response: { type: "mcq", choices: [
            { id: "a", text: "6" },
            { id: "b", text: "4" },
            { id: "c", text: "12" },
            { id: "d", text: "8" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "technique", name: "Definite integral", statement: "Evaluate limits." }], steps: [{ reasoning: "$[x^3]_0^2=8-0=8$.", marks: 1, markCode: "A" }], finalAnswer: "8" },
        },
        {
          id: "olam-u6-s2-ar-q2", difficulty: "foundation", totalMarks: 2,
          stem: "Find the area under $y=x$ from $x=1$ to $x=4$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Area", statement: "Integral of function." }], steps: [
            { reasoning: "$\\int_1^4 x\\,dx=[\\frac{x^2}{2}]_1^4=8-\\frac12=\\frac{15}{2}$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $7.5$ units².", marks: 1, markCode: "A" },
          ], finalAnswer: "$\\frac{15}{2}$ units²" },
        },
        {
          id: "olam-u6-s2-ar-q3", difficulty: "core", totalMarks: 3,
          stem: "Find the area enclosed by $y=x^2$ and the x-axis from $x=-2$ to $x=2$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Symmetric area", statement: "Even function." }], steps: [
            { reasoning: "$\\int_{-2}^2 x^2\\,dx=[\\frac{x^3}{3}]_{-2}^2=\\frac83-(-\\frac83)=\\frac{16}{3}$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $\\frac{16}{3}$ units² ≈ 5.33.", marks: 1, markCode: "M" },
            { reasoning: "Alternatively: $2\\int_0^2 x^2dx=2\\times\\frac83=\\frac{16}{3}$. ✓", marks: 1, markCode: "A" },
          ], finalAnswer: "$\\frac{16}{3}$ units²" },
        },
        {
          id: "olam-u6-s2-ar-q4", difficulty: "core", totalMarks: 4,
          stem: "Find the area between $y=x^2$ and $y=x$ from $x=0$ to $x=1$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Area between curves", statement: "Top minus bottom." }], steps: [
            { reasoning: "On $[0,1]$, $x\\geq x^2$ → area $=\\int_0^1(x-x^2)dx$.", marks: 1, markCode: "M" },
            { reasoning: "$=[\\frac{x^2}{2}-\\frac{x^3}{3}]_0^1=\\frac12-\\frac13=\\frac16$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $\\frac16$ units².", marks: 1, markCode: "M" },
            { reasoning: "Verify intersection at $x=0,1$. ✓", marks: 1, markCode: "A" },
          ], finalAnswer: "$\\frac16$ units²" },
        },
        {
          id: "olam-u6-s2-ar-q5", difficulty: "foundation", totalMarks: 1,
          stem: "$\\int_0^1 x^2\\,dx$ equals…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\frac23$" },
            { id: "b", text: "$1$" },
            { id: "c", text: "$\\frac12$" },
            { id: "d", text: "$\\frac13$" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "technique", name: "Definite integral", statement: "Evaluate limits." }], steps: [{ reasoning: "$[\\frac{x^3}{3}]_0^1=\\frac13-0=\\frac13$.", marks: 1, markCode: "A" }], finalAnswer: "$\\frac13$" },
        },
        {
          id: "olam-u6-s2-ar-q6", difficulty: "foundation", totalMarks: 2,
          stem: "Find the area under $y=4x$ from $x=0$ to $x=2$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 8 }] },
          markscheme: { principles: [{ kind: "technique", name: "Area", statement: "Integral of function." }], steps: [
            { reasoning: "$\\int_0^2 4x\\,dx=[2x^2]_0^2=8-0=8$ units².", marks: 1, markCode: "M" },
            { reasoning: "Answer: 8 units².", marks: 1, markCode: "A" },
          ], finalAnswer: "8 units²" },
        },
        {
          id: "olam-u6-s2-ar-q7", difficulty: "foundation", totalMarks: 1,
          stem: "The definite integral $\\int_a^b f(x)\\,dx$ equals…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$F(a)-F(b)$" },
            { id: "b", text: "$f(b)-f(a)$" },
            { id: "c", text: "$F(b)+F(a)$" },
            { id: "d", text: "$F(b)-F(a)$" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "formula", name: "Definite integral", statement: "Upper minus lower limit." }], steps: [{ reasoning: "$\\int_a^b f\\,dx=F(b)-F(a)$.", marks: 1, markCode: "A" }], finalAnswer: "$F(b)-F(a)$" },
        },
        {
          id: "olam-u6-s2-ar-q8", difficulty: "core", totalMarks: 3,
          stem: "Find the area under $y=x^2$ from $x=0$ to $x=3$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Area", statement: "Definite integral." }], steps: [
            { reasoning: "$\\int_0^3 x^2\\,dx=[\\frac{x^3}{3}]_0^3=9-0=9$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 9 units².", marks: 1, markCode: "M" },
            { reasoning: "Curve is above axis on $[0,3]$ so this is the geometric area.", marks: 1, markCode: "A" },
          ], finalAnswer: "9 units²" },
        },
        {
          id: "olam-u6-s2-ar-q9", difficulty: "core", totalMarks: 2,
          stem: "Evaluate $\\int_1^2 3x^2\\,dx$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 7 }] },
          markscheme: { principles: [{ kind: "technique", name: "Definite integral", statement: "Evaluate limits." }], steps: [
            { reasoning: "$[x^3]_1^2=8-1=7$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 7.", marks: 1, markCode: "A" },
          ], finalAnswer: "7" },
        },
        {
          id: "olam-u6-s2-ar-q10", difficulty: "core", totalMarks: 1,
          stem: "The area enclosed by $y=x$ and $y=x^2$ between their intersections is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\frac16$" },
            { id: "b", text: "$\\frac12$" },
            { id: "c", text: "$\\frac13$" },
            { id: "d", text: "$1$" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "technique", name: "Area between", statement: "$\\int_0^1(x-x^2)dx$." }], steps: [{ reasoning: "$[\\frac{x^2}{2}-\\frac{x^3}{3}]_0^1=\\frac16$.", marks: 1, markCode: "A" }], finalAnswer: "$\\frac16$" },
        },
        {
          id: "olam-u6-s2-ar-q11", difficulty: "challenge", totalMarks: 4,
          stem: "Find the total area enclosed between $y=x^2$ and $y=4x$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Area between curves", statement: "Find intersections, integrate top minus bottom." }], steps: [
            { reasoning: "Intersections: $x^2=4x$ → $x=0,4$; on $[0,4]$, $4x\\geq x^2$.", marks: 1, markCode: "M" },
            { reasoning: "$\\int_0^4(4x-x^2)dx=[2x^2-\\frac{x^3}{3}]_0^4=32-\\frac{64}{3}=\\frac{32}{3}$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $\\frac{32}{3}$ units² ≈ 10.67.", marks: 1, markCode: "M" },
            { reasoning: "Verify endpoints: at $x=0,4$ curves meet. ✓", marks: 1, markCode: "A" },
          ], finalAnswer: "$\\frac{32}{3}$ units²" },
        },
        {
          id: "olam-u6-s2-ar-q12", difficulty: "foundation", totalMarks: 2,
          stem: "Evaluate $\\int_0^2 (x+1)\\,dx$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 4 }] },
          markscheme: { principles: [{ kind: "technique", name: "Definite integral", statement: "Evaluate limits." }], steps: [
            { reasoning: "$[\\frac{x^2}{2}+x]_0^2=(2+2)-0=4$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 4.", marks: 1, markCode: "A" },
          ], finalAnswer: "4" },
        },
        {
          id: "olam-u6-s2-ar-q13", difficulty: "core", totalMarks: 1,
          stem: "If $f(x)<0$ on $[a,b]$, then $\\int_a^b f(x)\\,dx$ gives…",
          response: { type: "mcq", choices: [
            { id: "a", text: "The geometric area (positive)" },
            { id: "b", text: "A negative value — the region counts negatively" },
            { id: "c", text: "Undefined" },
            { id: "d", text: "Zero" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "property", name: "Signed area", statement: "Below axis counts negative." }], steps: [{ reasoning: "Definite integrals are signed; negative $f$ gives negative result.", marks: 1, markCode: "A" }], finalAnswer: "Negative value" },
        },
        {
          id: "olam-u6-s2-ar-q14", difficulty: "core", totalMarks: 3,
          stem: "Find the area under $y=x^2-1$ from $x=1$ to $x=3$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Area", statement: "Check sign then integrate." }], steps: [
            { reasoning: "On $[1,3]$, $x^2-1\\geq0$ → area $=\\int_1^3(x^2-1)dx$.", marks: 1, markCode: "M" },
            { reasoning: "$=[\\frac{x^3}{3}-x]_1^3=(9-3)-(\\frac13-1)=6+\\frac23=\\frac{20}{3}$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $\\frac{20}{3}$ units² ≈ 6.67.", marks: 1, markCode: "A" },
          ], finalAnswer: "$\\frac{20}{3}$ units²" },
        },
        {
          id: "olam-u6-s2-ar-q15", difficulty: "core", totalMarks: 2,
          stem: "Find the area under $y=x^3$ from $x=0$ to $x=1$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 0.25 }] },
          markscheme: { principles: [{ kind: "technique", name: "Area", statement: "Definite integral." }], steps: [
            { reasoning: "$\\int_0^1 x^3dx=[\\frac{x^4}{4}]_0^1=\\frac14=0.25$ units².", marks: 1, markCode: "M" },
            { reasoning: "Answer: 0.25 units².", marks: 1, markCode: "A" },
          ], finalAnswer: "$\\frac14$ units²" },
        },
        {
          id: "olam-u6-s2-ar-q16", difficulty: "challenge", totalMarks: 4,
          stem: "Find the area enclosed by $y=x^2$ and $y=2x$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Area between curves", statement: "Find intersections, integrate top minus bottom." }], steps: [
            { reasoning: "Intersections: $x^2=2x$ → $x=0,2$; on $[0,2]$, $2x\\geq x^2$.", marks: 1, markCode: "M" },
            { reasoning: "$\\int_0^2(2x-x^2)dx=[x^2-\\frac{x^3}{3}]_0^2=4-\\frac83=\\frac43$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $\\frac43$ units² ≈ 1.33.", marks: 1, markCode: "M" },
            { reasoning: "Verify endpoints: at $x=0,2$ curves meet. ✓", marks: 1, markCode: "A" },
          ], finalAnswer: "$\\frac43$ units²" },
        },
      ],
    },
  ],
  notes: [
    { id: "olam-u6-s2-int-notes", title: "Integration — notes", summary: "Reverse power rule, definite integrals, areas.",
      sections: [
        { heading: "Rules", body: "$\\int x^n dx=\\frac{x^{n+1}}{n+1}+c$ ($n\\neq-1$); $\\int x^{-1}dx=\\ln|x|+c$." },
        { heading: "Areas", body: "Area under $f$ on $[a,b]$ = $\\int_a^b f\\,dx$ if $f\\geq0$." },
      ] },
  ],
};
