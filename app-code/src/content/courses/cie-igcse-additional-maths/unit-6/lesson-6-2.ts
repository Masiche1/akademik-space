import type { Lesson } from "../../../types.ts";

export const lesson62: Lesson = {
  id: "ciam-u6-lesson-6-2",
  code: "4-3",
  title: "Integration",
  goal: "I CAN integrate polynomial functions and find areas.",
  standards: ["0606: integration"],
  vocabulary: [
    { term: "Integral", definition: "$\\int f(x)\\,dx$ — antiderivative plus constant." },
    { term: "Indefinite integral", definition: "Family of antiderivatives; needs $+c$." },
    { term: "Area under curve", definition: "Definite integral between limits." },
    { term: "Reverse power rule", definition: "$\\int x^n\\,dx=\\frac{x^{n+1}}{n+1}+c$ ($n\\neq-1$)." },
  ],
  concepts: [
    {
      id: "ciam-u6-s2-rules",
      title: "Integration rules",
      skill: "Integrate polynomials at IGCSE level.",
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
          id: "ciam-u6-s2-ru-q1", difficulty: "foundation", totalMarks: 1,
          stem: "$\\int 2x\\,dx$ equals…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$x+c$" },
            { id: "b", text: "$\\frac{x^2}{2}+c$" },
            { id: "c", text: "$x^2+c$" },
            { id: "d", text: "$2x^2+c$" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "formula", name: "Reverse power", statement: "Increase power, divide." }], steps: [{ reasoning: "$\\int2x\\,dx=2\\times\\frac{x^2}{2}+c=x^2+c$.", marks: 1, markCode: "A" }], finalAnswer: "$x^2+c$" },
        },
        {
          id: "ciam-u6-s2-ru-q2", difficulty: "foundation", totalMarks: 2,
          stem: "Integrate $y=4x^3-3x^2+2$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Reverse power", statement: "Term by term." }], steps: [
            { reasoning: "$\\int y\\,dx=x^4-x^3+2x+c$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$x^4-x^3+2x+c$" },
        },
        {
          id: "ciam-u6-s2-ru-q3", difficulty: "core", totalMarks: 3,
          stem: "Integrate $y=\\frac{3}{x^2}-2x^{-1}$ (note: $\\int x^{-1}dx=\\ln|x|$).",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Reverse power", statement: "Careful with $n=-1$." }], steps: [
            { reasoning: "$\\int 3x^{-2}dx=3\\times\\frac{x^{-1}}{-1}=-\\frac{3}{x}$.", marks: 1, markCode: "M" },
            { reasoning: "$\\int -2x^{-1}dx=-2\\ln|x|$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $-\\frac{3}{x}-2\\ln|x|+c$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$-\\frac{3}{x}-2\\ln|x|+c$" },
        },
        {
          id: "ciam-u6-s2-ru-q4", difficulty: "core", totalMarks: 4,
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
          id: "ciam-u6-s2-ru-q5", difficulty: "foundation", totalMarks: 1,
          stem: "$\\int 3x^2\\,dx$ equals…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$x^3+3c$" },
            { id: "b", text: "$3x^3+c$" },
            { id: "c", text: "$x^3+c$" },
            { id: "d", text: "$\\frac{x^3}{3}+c$" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "formula", name: "Reverse power", statement: "Increase power, divide." }], steps: [{ reasoning: "$3\\times\\frac{x^3}{3}+c=x^3+c$.", marks: 1, markCode: "A" }], finalAnswer: "$x^3+c$" },
        },
        {
          id: "ciam-u6-s2-ru-q6", difficulty: "foundation", totalMarks: 2,
          stem: "Given $\\int(2x+3)\\,dx=x^2+3x+c$ and the curve passes through $(1,5)$, find $c$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 1 }] },
          markscheme: { principles: [{ kind: "technique", name: "Integrate with condition", statement: "Find $c$ from point." }], steps: [
            { reasoning: "$5=1+3+c$ → $c=1$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 1.", marks: 1, markCode: "A" },
          ], finalAnswer: "1" },
        },
        {
          id: "ciam-u6-s2-ru-q7", difficulty: "foundation", totalMarks: 2,
          stem: "Integrate $y=3x^2-4x+5$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Reverse power", statement: "Term by term." }], steps: [
            { reasoning: "$\\int y\\,dx=x^3-2x^2+5x+c$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$x^3-2x^2+5x+c$" },
        },
        {
          id: "ciam-u6-s2-ru-q8", difficulty: "foundation", totalMarks: 1,
          stem: "$\\int \\frac{1}{x}\\,dx$ equals…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$-\\frac{1}{x^2}+c$" },
            { id: "b", text: "$\\frac{1}{x^2}+c$" },
            { id: "c", text: "$x\\ln x+c$" },
            { id: "d", text: "$\\ln|x|+c$" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "formula", name: "Log case", statement: "$\\int x^{-1}dx=\\ln|x|+c$." }], steps: [{ reasoning: "Special case $n=-1$.", marks: 1, markCode: "A" }], finalAnswer: "$\\ln|x|+c$" },
        },
        {
          id: "ciam-u6-s2-ru-q9", difficulty: "core", totalMarks: 3,
          stem: "Given $\\int(2x+1)\\,dx=x^2+x+c$ and the curve passes through $(2,11)$, find $c$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 5 }] },
          markscheme: { principles: [{ kind: "technique", name: "Integrate with condition", statement: "Find $c$ from point." }], steps: [
            { reasoning: "$11=4+2+c$ → $c=5$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 5.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "5" },
        },
        {
          id: "ciam-u6-s2-ru-q10", difficulty: "core", totalMarks: 3,
          stem: "Integrate $y=\\frac{5}{x^2}-\\frac{3}{x}$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Reverse power", statement: "Careful with $n=-1$." }], steps: [
            { reasoning: "$\\int 5x^{-2}dx=-\\frac{5}{x}$; $\\int -3x^{-1}dx=-3\\ln|x|$.", marks: 1, markCode: "M" },
            { reasoning: "$\\int y\\,dx=-\\frac{5}{x}-3\\ln|x|+c$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$-\\frac{5}{x}-3\\ln|x|+c$" },
        },
        {
          id: "ciam-u6-s2-ru-q11", difficulty: "core", totalMarks: 1,
          stem: "$\\int \\sqrt{x}\\,dx$ equals…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\frac{2}{3}x^{\\frac32}+c$" },
            { id: "b", text: "$2x^{\\frac12}+c$" },
            { id: "c", text: "$\\frac{1}{2}x^{\\frac12}+c$" },
            { id: "d", text: "$\\frac{3}{2}x^{\\frac32}+c$" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "formula", name: "Reverse power", statement: "$\\sqrt{x}=x^{1/2}$." }], steps: [{ reasoning: "$\\int x^{1/2}dx=\\frac{x^{3/2}}{3/2}=\\frac23x^{3/2}+c$.", marks: 1, markCode: "A" }], finalAnswer: "$\\frac{2}{3}x^{\\frac32}+c$" },
        },
        {
          id: "ciam-u6-s2-ru-q12", difficulty: "core", totalMarks: 2,
          stem: "Given $\\int(3x^2-2)\\,dx=x^3-2x+c$ and the curve passes through $(1,4)$, find $c$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 5 }] },
          markscheme: { principles: [{ kind: "technique", name: "Integrate with condition", statement: "Find $c$ from point." }], steps: [
            { reasoning: "$4=1-2+c$ → $c=5$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 5.", marks: 1, markCode: "A" },
          ], finalAnswer: "5" },
        },
        {
          id: "ciam-u6-s2-ru-q13", difficulty: "challenge", totalMarks: 4,
          stem: "Given $\\frac{dy}{dx}=4x^3+2x$ and the curve passes through $(1,3)$, find $y$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Integrate with condition", statement: "Find $c$ from point." }], steps: [
            { reasoning: "$y=\\int(4x^3+2x)dx=x^4+x^2+c$.", marks: 1, markCode: "M" },
            { reasoning: "At $(1,3)$: $3=1+1+c$ → $c=1$.", marks: 1, markCode: "M" },
            { reasoning: "$y=x^4+x^2+1$.", marks: 1, markCode: "M" },
            { reasoning: "Verify: at $x=1$, $1+1+1=3$ ✓.", marks: 1, markCode: "A" },
          ], finalAnswer: "$y=x^4+x^2+1$" },
        },
        {
          id: "ciam-u6-s2-ru-q14", difficulty: "challenge", totalMarks: 2,
          stem: "Given $\\int(x^3+1)\\,dx=\\frac{x^4}{4}+x+c$ and the curve passes through $(1,2)$, find $c$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 0.75 }] },
          markscheme: { principles: [{ kind: "technique", name: "Integrate with condition", statement: "Find $c$ from point." }], steps: [
            { reasoning: "$2=\\frac14+1+c$ → $c=\\frac34$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 0.75.", marks: 1, markCode: "A" },
          ], finalAnswer: "$\\frac34$" },
        },
        {
          id: "ciam-u6-s2-ru-q15", difficulty: "challenge", totalMarks: 4,
          stem: "Integrate $y=(2x-1)^2$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Expand then integrate", statement: "Polynomial form." }], steps: [
            { reasoning: "$y=4x^2-4x+1$.", marks: 1, markCode: "M" },
            { reasoning: "$\\int y\\,dx=\\frac{4x^3}{3}-2x^2+x+c$.", marks: 1, markCode: "M" },
            { reasoning: "Check: derivative of result returns $4x^2-4x+1$ ✓.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$\\frac{4x^3}{3}-2x^2+x+c$" },
        },
        {
          id: "ciam-u6-s2-ru-q16", difficulty: "challenge", totalMarks: 1,
          stem: "$\\int \\frac{1}{x^2}\\,dx$ equals…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$-\\frac{1}{x}+c$" },
            { id: "b", text: "$\\frac{1}{x}+c$" },
            { id: "c", text: "$-\\ln|x|+c$" },
            { id: "d", text: "$\\ln|x|+c$" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "formula", name: "Reverse power", statement: "$x^{-2}\\to\\frac{x^{-1}}{-1}$." }], steps: [{ reasoning: "$\\int x^{-2}dx=-x^{-1}+c=-\\frac1x+c$.", marks: 1, markCode: "A" }], finalAnswer: "$-\\frac{1}{x}+c$" },
        },
      ],
    },
    {
      id: "ciam-u6-s2-area",
      title: "Areas under curves",
      skill: "Find areas using definite integrals at IGCSE level.",
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
          id: "ciam-u6-s2-ar-q1", difficulty: "foundation", totalMarks: 1,
          stem: "$\\int_0^2 3x^2\\,dx$ equals…",
          response: { type: "mcq", choices: [
            { id: "a", text: "8" },
            { id: "b", text: "12" },
            { id: "c", text: "4" },
            { id: "d", text: "6" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "technique", name: "Definite integral", statement: "Evaluate limits." }], steps: [{ reasoning: "$[x^3]_0^2=8-0=8$.", marks: 1, markCode: "A" }], finalAnswer: "8" },
        },
        {
          id: "ciam-u6-s2-ar-q2", difficulty: "foundation", totalMarks: 2,
          stem: "Find the area under $y=x$ from $x=1$ to $x=4$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Area", statement: "Integral of function." }], steps: [
            { reasoning: "$\\int_1^4 x\\,dx=[\\frac{x^2}{2}]_1^4=8-\\frac12=\\frac{15}{2}$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $7.5$ units².", marks: 1, markCode: "A" },
          ], finalAnswer: "$\\frac{15}{2}$ units²" },
        },
        {
          id: "ciam-u6-s2-ar-q3", difficulty: "core", totalMarks: 3,
          stem: "Find the area enclosed by $y=x^2$ and the x-axis from $x=-2$ to $x=2$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Symmetric area", statement: "Even function." }], steps: [
            { reasoning: "$\\int_{-2}^2 x^2\\,dx=[\\frac{x^3}{3}]_{-2}^2=\\frac83-(-\\frac83)=\\frac{16}{3}$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $\\frac{16}{3}$ units² ≈ 5.33.", marks: 1, markCode: "M" },
            { reasoning: "Alternatively: $2\\int_0^2 x^2dx=2\\times\\frac83=\\frac{16}{3}$. ✓", marks: 1, markCode: "A" },
          ], finalAnswer: "$\\frac{16}{3}$ units²" },
        },
        {
          id: "ciam-u6-s2-ar-q4", difficulty: "core", totalMarks: 4,
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
          id: "ciam-u6-s2-ar-q5", difficulty: "foundation", totalMarks: 1,
          stem: "$\\int_0^1 4x^3\\,dx$ equals…",
          response: { type: "mcq", choices: [
            { id: "a", text: "2" },
            { id: "b", text: "1" },
            { id: "c", text: "4" },
            { id: "d", text: "$\\frac14$" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "technique", name: "Definite integral", statement: "Evaluate limits." }], steps: [{ reasoning: "$[x^4]_0^1=1-0=1$.", marks: 1, markCode: "A" }], finalAnswer: "1" },
        },
        {
          id: "ciam-u6-s2-ar-q6", difficulty: "foundation", totalMarks: 2,
          stem: "Find the area under $y=2x$ from $x=0$ to $x=2$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 4, unit: "units²" }] },
          markscheme: { principles: [{ kind: "technique", name: "Area", statement: "Integral of function." }], steps: [
            { reasoning: "$\\int_0^2 2x\\,dx=[x^2]_0^2=4$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 4 units².", marks: 1, markCode: "A" },
          ], finalAnswer: "4 units²" },
        },
        {
          id: "ciam-u6-s2-ar-q7", difficulty: "foundation", totalMarks: 2,
          stem: "Find the area under $y=x^2$ from $x=0$ to $x=3$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Area", statement: "Integral of function." }], steps: [
            { reasoning: "$\\int_0^3 x^2\\,dx=[\\frac{x^3}{3}]_0^3=9$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 9 units².", marks: 1, markCode: "A" },
          ], finalAnswer: "9 units²" },
        },
        {
          id: "ciam-u6-s2-ar-q8", difficulty: "core", totalMarks: 4,
          stem: "Find the area between $y=2x$ and $y=x^2$ from $x=0$ to $x=2$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Area between curves", statement: "Top minus bottom." }], steps: [
            { reasoning: "On $[0,2]$, $2x\\geq x^2$ → area $=\\int_0^2(2x-x^2)dx$.", marks: 1, markCode: "M" },
            { reasoning: "$=[x^2-\\frac{x^3}{3}]_0^2=4-\\frac83=\\frac43$.", marks: 1, markCode: "M" },
            { reasoning: "Check intersections: $2x=x^2$ → $x=0,2$ ✓.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $\\frac43$ units².", marks: 1, markCode: "A" },
          ], finalAnswer: "$\\frac43$ units²" },
        },
        {
          id: "ciam-u6-s2-ar-q9", difficulty: "core", totalMarks: 2,
          stem: "Evaluate $\\int_1^2 3x^2\\,dx$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 7 }] },
          markscheme: { principles: [{ kind: "technique", name: "Definite integral", statement: "Evaluate limits." }], steps: [
            { reasoning: "$[x^3]_1^2=8-1=7$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 7.", marks: 1, markCode: "A" },
          ], finalAnswer: "7" },
        },
        {
          id: "ciam-u6-s2-ar-q10", difficulty: "core", totalMarks: 3,
          stem: "Find the area under $y=x+1$ from $x=0$ to $x=2$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Area", statement: "Integral of function." }], steps: [
            { reasoning: "$\\int_0^2(x+1)dx=[\\frac{x^2}{2}+x]_0^2=2+2=4$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 4 units².", marks: 1, markCode: "M" },
            { reasoning: "Trapezium check: $\\frac12(1+3)\\times2=4$ ✓.", marks: 1, markCode: "A" },
          ], finalAnswer: "4 units²" },
        },
        {
          id: "ciam-u6-s2-ar-q11", difficulty: "core", totalMarks: 1,
          stem: "$\\int_0^3 6x\\,dx$ equals…",
          response: { type: "mcq", choices: [
            { id: "a", text: "9" },
            { id: "b", text: "18" },
            { id: "c", text: "27" },
            { id: "d", text: "54" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "technique", name: "Definite integral", statement: "Evaluate limits." }], steps: [{ reasoning: "$[3x^2]_0^3=27$.", marks: 1, markCode: "A" }], finalAnswer: "27" },
        },
        {
          id: "ciam-u6-s2-ar-q12", difficulty: "challenge", totalMarks: 2,
          stem: "Evaluate $\\int_0^4 3x^2\\,dx$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 64 }] },
          markscheme: { principles: [{ kind: "technique", name: "Definite integral", statement: "Evaluate limits." }], steps: [
            { reasoning: "$[x^3]_0^4=64$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 64.", marks: 1, markCode: "A" },
          ], finalAnswer: "64" },
        },
        {
          id: "ciam-u6-s2-ar-q13", difficulty: "challenge", totalMarks: 5,
          stem: "Find the area enclosed by $y=x^2$ and $y=4x$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Area between curves", statement: "Find intersections first." }], steps: [
            { reasoning: "$x^2=4x$ → $x(x-4)=0$ → $x=0,4$.", marks: 1, markCode: "M" },
            { reasoning: "On $[0,4]$, $4x\\geq x^2$ → area $=\\int_0^4(4x-x^2)dx$.", marks: 1, markCode: "M" },
            { reasoning: "$=[2x^2-\\frac{x^3}{3}]_0^4=32-\\frac{64}{3}=\\frac{32}{3}$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $\\frac{32}{3}$ units² ≈ 10.7.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$\\frac{32}{3}$ units²" },
        },
        {
          id: "ciam-u6-s2-ar-q14", difficulty: "challenge", totalMarks: 2,
          stem: "Evaluate $\\int_{-1}^{1} 2x\\,dx$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 0 }] },
          markscheme: { principles: [{ kind: "technique", name: "Definite integral", statement: "Odd function symmetry." }], steps: [
            { reasoning: "$[x^2]_{-1}^{1}=1-1=0$ — areas above and below axis cancel.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 0.", marks: 1, markCode: "A" },
          ], finalAnswer: "0" },
        },
        {
          id: "ciam-u6-s2-ar-q15", difficulty: "challenge", totalMarks: 5,
          stem: "Find the area between $y=x+2$ and $y=x^2$ from $x=0$ to $x=2$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Area between curves", statement: "Top minus bottom." }], steps: [
            { reasoning: "Intersections: $x^2=x+2$ → $x=2$ or $-1$; on $[0,2]$ $x+2\\geq x^2$.", marks: 1, markCode: "M" },
            { reasoning: "Area $=\\int_0^2(x+2-x^2)dx=[\\frac{x^2}{2}+2x-\\frac{x^3}{3}]_0^2$.", marks: 1, markCode: "M" },
            { reasoning: "$=2+4-\\frac83=\\frac{10}{3}$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $\\frac{10}{3}$ units² ≈ 3.33.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$\\frac{10}{3}$ units²" },
        },
        {
          id: "ciam-u6-s2-ar-q16", difficulty: "challenge", totalMarks: 1,
          stem: "$\\int_1^3 (2x-2)\\,dx$ equals…",
          response: { type: "mcq", choices: [
            { id: "a", text: "4" },
            { id: "b", text: "8" },
            { id: "c", text: "0" },
            { id: "d", text: "2" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "technique", name: "Definite integral", statement: "Evaluate limits." }], steps: [{ reasoning: "$[x^2-2x]_1^3=(9-6)-(1-2)=3+1=4$.", marks: 1, markCode: "A" }], finalAnswer: "4" },
        },
      ],
    },
  ],
  notes: [
    { id: "ciam-u6-s2-int-notes", title: "Integration — notes", summary: "Reverse power rule, definite integrals, areas.",
      sections: [
        { heading: "Rules", body: "$\\int x^n dx=\\frac{x^{n+1}}{n+1}+c$ ($n\\neq-1$); $\\int x^{-1}dx=\\ln|x|+c$." },
        { heading: "Areas", body: "Area under $f$ on $[a,b]$ = $\\int_a^b f\\,dx$ if $f\\geq0$." },
      ] },
  ],
};
