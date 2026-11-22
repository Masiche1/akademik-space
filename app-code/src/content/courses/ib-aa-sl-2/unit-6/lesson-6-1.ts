import type { Lesson } from "../../../types.ts";

export const lesson61: Lesson = {
  id: "aasl-u6-lesson-6-1",
  code: "6-1",
  title: "Antiderivatives",
  goal: "I CAN find indefinite integrals of powers, trigonometric, exponential and reciprocal functions, use boundary conditions, and integrate composites with a linear inner function or by inspection.",
  standards: ["SL 5.5", "SL 5.10"],
  vocabulary: [
    { term: "Antiderivative", definition: "A function $F$ whose derivative is $f$, so $F'(x)=f(x)$." },
    { term: "Indefinite integral", definition: "The family of all antiderivatives, $\\int f(x)\\,dx=F(x)+C$." },
    { term: "Constant of integration", definition: "The arbitrary constant $C$ added because differentiating a constant gives zero." },
    { term: "Boundary condition", definition: "A known point on the curve, such as $F(a)=b$, used to find $C$." },
    { term: "Integration by inspection", definition: "Recognising an integrand of the form $f'(g(x))\\,g'(x)$ (a chain-rule result) and integrating it as $f(g(x))+C$." },
  ],
  concepts: [
    {
      id: "aasl-u6-power-integrals",
      title: "Integrating powers with boundary conditions",
      skill: "Integrate sums of powers of x and use a point on the curve to find the constant of integration.",
      lesson: {
        sections: [
          {
            heading: "The power rule for integration",
            body: "Integration reverses differentiation. For $n\\ne-1$: $\\int x^n\\,dx=\\dfrac{x^{n+1}}{n+1}+C$. Integrate term by term and rewrite roots and reciprocals as powers first, for example $\\sqrt{x}=x^{1/2}$ and $\\frac1{x^2}=x^{-2}$. Always include $+C$ for an indefinite integral. You can check any answer by differentiating it.",
          },
          {
            heading: "Finding the constant",
            body: "If you are told that the curve $y=F(x)$ passes through $(a,b)$, substitute $x=a$ and $y=b$ into $F(x)+C$ and solve for $C$. If you are given $f'(x)$ and a point on $f$, integrate to get $f(x)=\\int f'(x)\\,dx$ and then use the point.",
          },
        ],
        keyFormulas: [
          { name: "Power rule", statement: "$\\int x^n\\,dx=\\dfrac{x^{n+1}}{n+1}+C,\\ n\\ne-1$" },
          { name: "Constant multiple and sum", statement: "$\\int(af+bg)\\,dx=a\\int f\\,dx+b\\int g\\,dx$" },
        ],
        workedExample: {
          problem: "Given $f'(x)=6x^2-2$ and $f(1)=5$, find $f(x)$.",
          solution: "$f(x)=2x^3-2x+C$. Then $f(1)=2-2+C=5$ gives $C=5$, so $f(x)=2x^3-2x+5$.",
        },
      },
      questions: [
        {
          id: "aasl-u6-power-integrals-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Find $\\displaystyle\\int(4x^3-6x)\\,dx$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x^4-6x^2+C$" },
              { id: "b", text: "$x^4-3x^2+C$" },
              { id: "c", text: "$12x^2-6+C$" },
              { id: "d", text: "$x^4-3x^2$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Power rule for integration", statement: "$\\int x^n\\,dx=\\dfrac{x^{n+1}}{n+1}+C$" },
            ],
            steps: [
              { reasoning: "Increase each power by one and divide by the new power.", working: "\\frac{4x^4}{4}-\\frac{6x^2}{2}", marks: 1, markCode: "M" },
              { reasoning: "Simplify and add the constant.", working: "x^4-3x^2+C", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** $x^4-3x^2+C$",
            commonErrors: ["Differentiating instead of integrating.", "Omitting $+C$."],
          },
        },
        {
          id: "aasl-u6-power-integrals-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "The curve $y=f(x)$ has gradient function $f'(x)=3x^2-4x$ and passes through the point $(2,5)$.\n\nFind $f(x)$, and write down $f(0)$.",
          response: {
            type: "numeric",
            parts: [
              { label: "Constant term of $f(x)$", answer: 5 },
              { label: "$f(0)$", answer: 5 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Power rule for integration", statement: "$\\int x^n\\,dx=\\dfrac{x^{n+1}}{n+1}+C$" },
              { kind: "principle", name: "Boundary condition", statement: "Substitute the known point to find $C$." },
            ],
            steps: [
              { reasoning: "Integrate term by term.", working: "f(x)=x^3-2x^2+C", marks: 1, markCode: "A" },
              { reasoning: "Substitute $(2,5)$.", working: "5=8-8+C", marks: 1, markCode: "M" },
              { reasoning: "Solve for $C$.", working: "C=5,\\quad f(x)=x^3-2x^2+5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$f(x)=x^3-2x^2+5$; $f(0)=5$",
            commonErrors: ["Using the point in $f'$ rather than $f$."],
          },
        },
        {
          id: "aasl-u6-power-integrals-q3",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 4,
          stem: "Given that $f'(x)=\\sqrt{x}+\\dfrac{2}{x^2}$ for $x>0$ and $f(1)=2$, find $f(4)$ to 3 significant figures.",
          response: {
            type: "numeric",
            parts: [
              { label: "$f(4)$ (3 s.f.)", answer: 8.17, tolerance: 0.005 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Power rule for integration", statement: "$\\int x^{n}dx=\\dfrac{x^{n+1}}{n+1}+C$ applied to $x^{1/2}$ and $x^{-2}$." },
            ],
            steps: [
              { reasoning: "Rewrite as powers and integrate.", working: "f(x)=\\frac{2}{3}x^{3/2}-2x^{-1}+C", marks: 2, markCode: "A" },
              { reasoning: "Use $f(1)=2$: $\\frac23-2+C=2$.", working: "C=\\frac{10}{3}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate at $x=4$: $\\frac23(8)-\\frac12+\\frac{10}{3}$.", working: "f(4)=\\frac{16}{3}-\\frac12+\\frac{10}{3}=\\frac{26}{3}-\\frac12=\\frac{49}{6}\\approx8.17", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$f(4)=\\dfrac{49}{6}\\approx8.17$",
            commonErrors: ["Integrating $\\frac{2}{x^2}$ as $\\frac{2x^{-1}}{-1}$ but losing the minus sign."],
          },
        },
        {
          id: "aasl-u6-power-integrals-q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 9,
          stem: "A curve $C$ has gradient function $\\dfrac{dy}{dx}=3x^2-6x+2$. The curve passes through the point $(1,4)$.",
          parts: [
            { label: "a", prompt: "Find the equation of $C$.", marks: 4 },
            { label: "b", prompt: "Find the gradient of $C$ at $x=0$ and the equation of the tangent at that point.", marks: 3 },
            { label: "c", prompt: "Find the $x$-coordinates of the stationary points of $C$, to 3 significant figures.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) $y$-intercept of $C$", answer: 4 },
              { label: "(b) Gradient at $x=0$", answer: 2 },
              { label: "(c) Smaller $x$", answer: 0.423, tolerance: 0.001 },
              { label: "(c) Larger $x$", answer: 1.58, tolerance: 0.005 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Power rule for integration", statement: "$\\int x^n\\,dx=\\dfrac{x^{n+1}}{n+1}+C$" },
              { kind: "formula", name: "Quadratic formula", statement: "$3x^2-6x+2=0$ has roots $x=\\dfrac{6\\pm\\sqrt{12}}{6}$." },
            ],
            steps: [
              { part: "a", reasoning: "Integrate each term.", working: "y=x^3-3x^2+2x+C", marks: 2, markCode: "A" },
              { part: "a", reasoning: "Substitute $(1,4)$.", working: "4=1-3+2+C", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Solve for $C$.", working: "C=4,\\quad y=x^3-3x^2+2x+4", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Substitute $x=0$ into the gradient function; the point on $C$ is $(0,4)$.", working: "\\frac{dy}{dx}=2,\\quad (0,4)", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Tangent: point-gradient form.", working: "y-4=2(x-0)", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Simplify.", working: "y=2x+4", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Stationary points need $\\frac{dy}{dx}=0$; the quadratic does not factorise so use the formula (or GDC).", working: "3x^2-6x+2=0", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Solve.", working: "x=1\\pm\\frac{\\sqrt3}{3}\\approx0.423,\\ 1.58", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $y=x^3-3x^2+2x+4$ (b) gradient $2$, tangent $y=2x+4$ (c) $x\\approx0.423$ and $x\\approx1.58$",
            commonErrors: ["Taking $C=0$.", "Using $(1,4)$ to find the gradient."],
          },
        },
        {
          id: "aasl-u6-power-integrals-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Find $\\displaystyle\\int\\left(2x^5-8x^2+3\\right)\\,dx$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\dfrac{x^6}{3}-\\dfrac{8x^3}{3}+3x+C$" },
              { id: "b", text: "$\\dfrac{x^6}{3}-8x^3+3x+C$" },
              { id: "c", text: "$\\dfrac{x^6}{3}-\\dfrac{8x^3}{3}+3x$" },
              { id: "d", text: "$2x^6-8x^3+3x+C$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Power rule for integration", statement: "$\\int x^n\\,dx=\\dfrac{x^{n+1}}{n+1}+C$" },
            ],
            steps: [
              { reasoning: "Integrate term by term, increasing each power by one and dividing by the new power.", working: "\\frac{2x^6}{6}-\\frac{8x^3}{3}+3x", marks: 1, markCode: "M" },
              { reasoning: "Simplify each coefficient and add the constant.", working: "\\frac{x^6}{3}-\\frac{8x^3}{3}+3x+C", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $\\dfrac{x^6}{3}-\\dfrac{8x^3}{3}+3x+C$",
            commonErrors: ["Forgetting to divide by the new power.", "Omitting $+C$."],
          },
        },
        {
          id: "aasl-u6-power-integrals-q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Find $\\displaystyle\\int\\left(\\frac{4}{x^3}+2x\\right)\\,dx$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$-\\dfrac{2}{x^2}+x^2$" },
              { id: "b", text: "$-\\dfrac{2}{x^2}+2x^2+C$" },
              { id: "c", text: "$\\dfrac{2}{x^2}+x^2+C$" },
              { id: "d", text: "$-\\dfrac{2}{x^2}+x^2+C$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Power rule for integration", statement: "$\\int x^{-3}\\,dx=-\\dfrac{1}{2x^2}+C$" },
            ],
            steps: [
              { reasoning: "Write $\\frac{4}{x^3}=4x^{-3}$ and integrate each term.", working: "4\\cdot\\frac{x^{-2}}{-2}+x^2", marks: 1, markCode: "M" },
              { reasoning: "Simplify and add the constant.", working: "-\\frac{2}{x^2}+x^2+C", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** $-\\dfrac{2}{x^2}+x^2+C$",
            commonErrors: ["Dropping the minus sign from the negative index.", "Writing $\\frac{4}{x^3}$ as $\\frac{4x^{-2}}{-2}$ without the coefficient $4$."],
          },
        },
        {
          id: "aasl-u6-power-integrals-q7",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Find $\\displaystyle\\int\\frac{1}{\\sqrt{x}}\\,dx$ for $x>0$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{1}{2}\\sqrt{x}+C$" },
              { id: "b", text: "$-\\frac{2}{\\sqrt{x}}+C$" },
              { id: "c", text: "$\\frac{2}{3}x^{3/2}+C$" },
              { id: "d", text: "$2\\sqrt{x}+C$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Power rule for integration", statement: "$\\int x^{-1/2}\\,dx=\\dfrac{x^{1/2}}{1/2}+C=2\\sqrt{x}+C$" },
            ],
            steps: [
              { reasoning: "Rewrite $\\frac{1}{\\sqrt{x}}=x^{-1/2}$.", working: "\\int x^{-1/2}\\,dx", marks: 1, markCode: "M" },
              { reasoning: "Apply the power rule and divide by the new power $\\frac12$.", working: "\\frac{x^{1/2}}{1/2}+C=2\\sqrt{x}+C", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** $2\\sqrt{x}+C$",
            commonErrors: ["Multiplying by $\\frac12$ instead of dividing."],
          },
        },
        {
          id: "aasl-u6-power-integrals-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A function $f$ has derivative $f'(x)=8x^3$ and satisfies $f(0)=-1$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$31$" },
              { id: "b", text: "$15$" },
              { id: "c", text: "$33$" },
              { id: "d", text: "$-1$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Power rule for integration", statement: "$f(x)=\\int f'(x)\\,dx+C$" },
              { kind: "principle", name: "Boundary condition", statement: "Use the given value to find $C$." },
            ],
            steps: [
              { reasoning: "Integrate and apply $f(0)=-1$ to get $C=-1$.", working: "f(x)=2x^4-1", marks: 1, markCode: "M" },
              { reasoning: "Substitute $x=2$.", working: "f(2)=2(16)-1=31", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $31$",
            commonErrors: ["Forgetting that $\\int 8x^3\\,dx=2x^4$, not $24x^2$."],
          },
        },
        {
          id: "aasl-u6-power-integrals-q9",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "An antiderivative of $x^2-4x+3$ is $F(x)=\\dfrac{x^3}{3}-2x^2+3x+C$, where $F(0)=1$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$0$" },
              { id: "b", text: "$10$" },
              { id: "c", text: "$-2$" },
              { id: "d", text: "$1$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Power rule for integration", statement: "$F(0)=C$ since every other term vanishes at $x=0$." },
            ],
            steps: [
              { reasoning: "Substitute $x=0$: $F(0)=C=1$.", working: "C=1", marks: 1, markCode: "M" },
              { reasoning: "Evaluate at $x=3$.", working: "F(3)=9-18+9+1=1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** $1$",
            commonErrors: ["Using $C=0$ and obtaining $0$."],
          },
        },
        {
          id: "aasl-u6-power-integrals-q10",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Find $\\displaystyle\\int\\left(5-4x^3\\right)\\,dx$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$5x-x^4+C$" },
              { id: "b", text: "$-5x-x^4+C$" },
              { id: "c", text: "$5x-x^4$" },
              { id: "d", text: "$5-x^4+C$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Power rule for integration", statement: "$\\int x^n\\,dx=\\dfrac{x^{n+1}}{n+1}+C$; constants integrate to themselves times $x$." },
            ],
            steps: [
              { reasoning: "Integrate $5$ as $5x$ and $-4x^3$ as $-x^4$.", working: "5x-\\frac{4x^4}{4}", marks: 1, markCode: "M" },
              { reasoning: "Simplify and add $+C$.", working: "5x-x^4+C", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $5x-x^4+C$",
            commonErrors: ["Treating the constant $5$ as having integral $5$ rather than $5x$."],
          },
        },
        {
          id: "aasl-u6-power-integrals-q11",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "A function $f$ has derivative $f'(x)=12x^2+6x-5$ and satisfies $f(1)=2$.\n\nFind an expression for $f(x)$ and the value of $f(2)$.",
          response: {
            type: "numeric",
            parts: [
              { label: "Constant term in $f(x)$", answer: 0 },
              { label: "$f(2)$", answer: 34 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Power rule for integration", statement: "$\\int x^n\\,dx=\\dfrac{x^{n+1}}{n+1}+C$" },
              { kind: "principle", name: "Boundary condition", statement: "Substitute the known point to find $C$." },
            ],
            steps: [
              { reasoning: "Integrate term by term.", working: "f(x)=4x^3+3x^2-5x+C", marks: 1, markCode: "M" },
              { reasoning: "Substitute $x=1$ and $f(1)=2$.", working: "2=4+3-5+C", marks: 1, markCode: "M" },
              { reasoning: "Solve for $C$.", working: "C=0", marks: 1, markCode: "A" },
              { reasoning: "Evaluate at $x=2$.", working: "f(2)=32+12-10=34", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$f(x)=4x^3+3x^2-5x$; $f(2)=34$",
            commonErrors: ["Forgetting the $-5x$ term when integrating $-5$.", "Solving for $C$ before substituting correctly."],
          },
        },
        {
          id: "aasl-u6-power-integrals-q12",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 3,
          stem: "Find $\\displaystyle\\int\\left(3\\sqrt{x}-\\frac{1}{x^{1/3}}\\right)\\,dx$ in the form $2x^{3/2}+kx^{2/3}+C$, and write down the value of $k$.",
          response: {
            type: "numeric",
            parts: [
              { label: "$k$", answer: -1.5 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Power rule for integration", statement: "$\\int x^{1/2}dx=\\frac23x^{3/2}+C$ and $\\int x^{-1/3}dx=\\frac32x^{2/3}+C$." },
            ],
            steps: [
              { reasoning: "Rewrite as powers and integrate term by term.", working: "2x^{3/2}-\\frac{3}{2}x^{2/3}+C", marks: 2, markCode: "A" },
              { reasoning: "Read off $k$.", working: "k=-\\frac{3}{2}=-1.5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$k=-\\dfrac{3}{2}$",
            commonErrors: ["Writing the coefficient of $x^{2/3}$ as $-\\frac{2}{3}$ instead of $-\\frac{3}{2}$."],
          },
        },
        {
          id: "aasl-u6-power-integrals-q13",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 4,
          stem: "Given that $f'(x)=6\\sqrt{x}-\\dfrac{2}{x^2}$ for $x>0$ and $f(1)=3$, find $f(9)$, giving your answer to 3 significant figures.",
          response: {
            type: "numeric",
            parts: [
              { label: "$f(9)$ (3 s.f.)", answer: 105.2, tolerance: 0.1 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Power rule for integration", statement: "$\\int x^{1/2}dx=\\frac23x^{3/2}+C$ and $\\int x^{-2}dx=-x^{-1}+C$." },
            ],
            steps: [
              { reasoning: "Rewrite as powers and integrate.", working: "f(x)=4x^{3/2}+2x^{-1}+C", marks: 2, markCode: "A" },
              { reasoning: "Use $f(1)=3$: $4+2+C=3$.", working: "C=-3", marks: 1, markCode: "M" },
              { reasoning: "Evaluate at $x=9$: $4(27)+\\frac{2}{9}-3$.", working: "f(9)=108+\\frac{2}{9}-3\\approx105.2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$f(9)\\approx105$",
            commonErrors: ["Integrating $-2x^{-2}$ as $-2x^{-1}$ with the wrong sign."],
          },
        },
        {
          id: "aasl-u6-power-integrals-q14",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "A curve has gradient function $\\dfrac{dy}{dx}=8x^3-12x^2+2$ and passes through the point $(1,3)$.\n\nFind the equation of the curve and the value of $y$ when $x=2$.",
          response: {
            type: "numeric",
            parts: [
              { label: "Constant term in $y$", answer: 4 },
              { label: "$y$ when $x=2$", answer: -8 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Power rule for integration", statement: "$y=\\int\\frac{dy}{dx}\\,dx+C$" },
              { kind: "principle", name: "Boundary condition", statement: "Substitute the known point to find $C$." },
            ],
            steps: [
              { reasoning: "Integrate term by term.", working: "y=x^4-4x^3+2x+C", marks: 1, markCode: "M" },
              { reasoning: "Substitute $(1,3)$.", working: "3=1-4+2+C", marks: 1, markCode: "M" },
              { reasoning: "Solve for $C$.", working: "C=4", marks: 1, markCode: "A" },
              { reasoning: "Evaluate at $x=2$.", working: "y=16-32+4+4=-8", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$y=x^4-4x^3+2x+4$; $y=-8$ when $x=2$",
            commonErrors: ["Using the point $(1,3)$ to evaluate the gradient instead of $y$."],
          },
        },
        {
          id: "aasl-u6-power-integrals-q15",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 6,
          stem: "A function $f$ has derivative $f'(x)=3x^2-12x+9$ and satisfies $f(2)=5$.",
          parts: [
            { label: "a", prompt: "Find $f(x)$.", marks: 3 },
            { label: "b", prompt: "Find the coordinates of the stationary points of the graph of $f$, and state their nature.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Power rule for integration", statement: "$f(x)=\\int f'(x)\\,dx+C$" },
              { kind: "formula", name: "Second derivative test", statement: "$f''>0$ gives a local minimum and $f''<0$ a local maximum." },
            ],
            steps: [
              { part: "a", reasoning: "Integrate term by term.", working: "f(x)=x^3-6x^2+9x+C", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Substitute $x=2$, $f(2)=5$.", working: "5=8-24+18+C", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Solve for $C$ and state $f$.", working: "C=3,\\quad f(x)=x^3-6x^2+9x+3", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Set the derivative equal to zero.", working: "3x^2-12x+9=0\\Rightarrow x^2-4x+3=0", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Solve the quadratic.", working: "x=1\\ \\text{or}\\ x=3", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Use $f''(x)=6x-12$: $f''(1)=-6<0$ (maximum at $(1,7)$), $f''(3)=6>0$ (minimum at $(3,3)$).", working: "f''(1)=-6,\\quad f''(3)=6", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $f(x)=x^3-6x^2+9x+3$ (b) maximum $(1,7)$, minimum $(3,3)$",
            commonErrors: ["Forgetting to check the nature of each stationary point."],
          },
        },
        {
          id: "aasl-u6-power-integrals-q16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 9,
          stem: "A curve has gradient function $f'(x)=12x^2-4$ and passes through the point $(2,1)$.",
          parts: [
            { label: "a", prompt: "Find an expression for $f(x)$.", marks: 3 },
            { label: "b", prompt: "Find the $x$-coordinates of the points where the gradient of the curve is zero, and classify each as a local maximum or local minimum.", marks: 3 },
            { label: "c", prompt: "Find the equation of the tangent to the curve at the point where $x=0$.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Power rule for integration", statement: "$f(x)=\\int f'(x)\\,dx+C$" },
              { kind: "formula", name: "Second derivative test", statement: "$f''>0$ gives a local minimum and $f''<0$ a local maximum." },
              { kind: "formula", name: "Tangent", statement: "$y-y_1=m(x-x_1)$ where $m=f'(a)$." },
            ],
            steps: [
              { part: "a", reasoning: "Integrate term by term.", working: "f(x)=4x^3-4x+C", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Substitute $(2,1)$.", working: "1=32-8+C", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Solve for $C$.", working: "C=-23,\\quad f(x)=4x^3-4x-23", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Set $f'(x)=0$.", working: "12x^2-4=0\\Rightarrow x=\\pm\\frac{1}{\\sqrt3}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Differentiate again: $f''(x)=24x$.", working: "f''\\left(-\\frac{1}{\\sqrt3}\\right)<0,\\quad f''\\left(\\frac{1}{\\sqrt3}\\right)>0", marks: 1, markCode: "A" },
              { part: "b", reasoning: "State the classification.", working: "\\text{local maximum at }x=-\\frac{1}{\\sqrt3},\\ \\text{local minimum at }x=\\frac{1}{\\sqrt3}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Find the point on the curve at $x=0$: $f(0)=-23$.", working: "(0,-23)", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Find the gradient there: $f'(0)=-4$.", working: "m=-4", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Use point-gradient form.", working: "y+23=-4x\\Rightarrow y=-4x-23", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) $f(x)=4x^3-4x-23$ (b) maximum at $x=-\\frac{1}{\\sqrt3}$, minimum at $x=\\frac{1}{\\sqrt3}$ (c) $y=-4x-23$",
            commonErrors: ["Forgetting the constant $-23$ when finding $f(0)$."],
            examinerNote: "Part (c) may also be answered after part (a); award marks for $f(0)=-23$ and $f'(0)=-4$.",
          },
        },
      ],
    },
    {
      id: "aasl-u6-trig-exp-integrals",
      title: "Integrating trigonometric, exponential and reciprocal functions",
      skill: "Integrate sin, cos, e^x and 1/x, including linear composites and substitution by inspection.",
      lesson: {
        sections: [
          {
            heading: "Standard results",
            body: "$\\int\\sin x\\,dx=-\\cos x+C$, $\\int\\cos x\\,dx=\\sin x+C$, $\\int e^x\\,dx=e^x+C$ and $\\int\\dfrac1x\\,dx=\\ln|x|+C$. For a linear inner function $ax+b$, divide by $a$: $\\int\\cos(ax+b)\\,dx=\\dfrac1a\\sin(ax+b)+C$, $\\int e^{ax+b}dx=\\dfrac1ae^{ax+b}+C$, $\\int\\dfrac1{ax+b}dx=\\dfrac1a\\ln|ax+b|+C$.",
          },
          {
            heading: "Inspection",
            body: "If the integrand has the form $f'(g(x))\\,g'(x)$ then $\\int f'(g(x))g'(x)\\,dx=f(g(x))+C$. Example: $\\int 2x\\,e^{x^2}dx=e^{x^2}+C$ because $2x$ is the derivative of $x^2$. More generally $\\int\\dfrac{g'(x)}{g(x)}dx=\\ln|g(x)|+C$. Differentiate your answer to check; if it is off by a constant factor, adjust.",
          },
        ],
        keyFormulas: [
          { name: "Linear composite", statement: "$\\int f(ax+b)\\,dx=\\dfrac1aF(ax+b)+C$" },
          { name: "Reciprocal", statement: "$\\int\\dfrac{1}{x}dx=\\ln|x|+C$" },
          { name: "Inspection", statement: "$\\int f'(g(x))g'(x)\\,dx=f(g(x))+C$" },
        ],
        workedExample: {
          problem: "Find $\\int\\sin(2x)\\,dx$.",
          solution: "$\\int\\sin(2x)\\,dx=-\\tfrac12\\cos(2x)+C$. Check: differentiating gives $-\\tfrac12(-\\sin2x)(2)=\\sin2x$.",
        },
      },
      questions: [
        {
          id: "aasl-u6-trig-exp-integrals-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Find $\\displaystyle\\int e^{3x}\\,dx$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\dfrac13e^{3x}+C$" },
              { id: "b", text: "$e^{3x}+C$" },
              { id: "c", text: "$3e^{3x}+C$" },
              { id: "d", text: "$\\dfrac{e^{3x+1}}{3x+1}+C$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Linear composite", statement: "$\\int e^{ax}dx=\\dfrac1ae^{ax}+C$" },
            ],
            steps: [
              { reasoning: "The exponential integrates to itself.", working: "e^{3x}", marks: 1, markCode: "M" },
              { reasoning: "Divide by the derivative of the inner function, $3$.", working: "\\frac13e^{3x}+C", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $\\dfrac13e^{3x}+C$",
            commonErrors: ["Multiplying by $3$ instead of dividing."],
          },
        },
        {
          id: "aasl-u6-trig-exp-integrals-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Given that $f'(x)=6\\cos(2x)$ and $f\\left(\\frac\\pi4\\right)=5$, find $f(x)$ and then find $f(0)$.",
          response: {
            type: "numeric",
            parts: [
              { label: "Constant term in $f(x)$", answer: 2 },
              { label: "$f(0)$", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Linear composite", statement: "$\\int\\cos(ax)dx=\\dfrac1a\\sin(ax)+C$" },
            ],
            steps: [
              { reasoning: "Integrate, dividing by $2$.", working: "f(x)=3\\sin(2x)+C", marks: 1, markCode: "A" },
              { reasoning: "Substitute $x=\\frac\\pi4$: $\\sin\\frac\\pi2=1$.", working: "5=3+C\\Rightarrow C=2", marks: 1, markCode: "M" },
              { reasoning: "Evaluate at $0$.", working: "f(0)=3\\sin0+2=2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$f(x)=3\\sin(2x)+2$; $f(0)=2$",
            commonErrors: ["Giving $3\\sin(2x)$ with a sign error, or multiplying by $2$."],
          },
        },
        {
          id: "aasl-u6-trig-exp-integrals-q3",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 4,
          stem: "Find $\\displaystyle\\int\\dfrac{2x}{x^2+1}\\,dx$ and $\\displaystyle\\int x\\,e^{x^2}\\,dx$.\n\nEnter the coefficient $k$ in the second answer $k\\,e^{x^2}+C$.",
          response: {
            type: "numeric",
            parts: [
              { label: "$k$ in $\\int xe^{x^2}dx=ke^{x^2}+C$", answer: 0.5 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Integration by inspection", statement: "$\\int\\dfrac{g'(x)}{g(x)}dx=\\ln|g(x)|+C$ and $\\int g'(x)e^{g(x)}dx=e^{g(x)}+C$." },
            ],
            steps: [
              { reasoning: "The numerator $2x$ is the derivative of the denominator $x^2+1$.", working: "\\int\\frac{2x}{x^2+1}dx=\\ln(x^2+1)+C", marks: 2, markCode: "A" },
              { reasoning: "Differentiating $e^{x^2}$ gives $2xe^{x^2}$, which is twice the integrand.", working: "\\frac{d}{dx}e^{x^2}=2xe^{x^2}", marks: 1, markCode: "M" },
              { reasoning: "Adjust by the factor $\\frac12$.", working: "\\int xe^{x^2}dx=\\tfrac12e^{x^2}+C", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\ln(x^2+1)+C$ and $\\tfrac12e^{x^2}+C$ (so $k=0.5$)",
            commonErrors: ["Writing $\\ln x^2+1$ or forgetting to adjust the constant factor."],
            examinerNote: "$x^2+1>0$ so the modulus signs are not required.",
          },
        },
        {
          id: "aasl-u6-trig-exp-integrals-q4",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 10,
          stem: "A curve has gradient function $f'(x)=4\\sin(2x)+\\dfrac{3}{x}-e^{-x}$ for $x>0$ and passes through the point $(1,\\,2)$.\n\nIn this question, give exact answers.",
          parts: [
            { label: "a", prompt: "Show that $f(x)=-2\\cos(2x)+3\\ln x+e^{-x}+C$ for some constant $C$.", marks: 3 },
            { label: "b", prompt: "Find an expression for $C$ in terms of $\\cos2$ and $e$.", marks: 2 },
            { label: "c", prompt: "Find $\\displaystyle\\int\\dfrac{1}{3x-1}\\,dx$ and $\\displaystyle\\int\\cos\\left(\\dfrac x2\\right)dx$.", marks: 3 },
            { label: "d", prompt: "Find $\\displaystyle\\int\\dfrac{\\cos x}{\\sin x}\\,dx$ by inspection.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Linear composites", statement: "$\\int\\sin(ax)dx=-\\tfrac1a\\cos(ax)+C$, $\\int e^{ax}dx=\\tfrac1ae^{ax}+C$, $\\int\\frac{1}{ax+b}dx=\\tfrac1a\\ln|ax+b|+C$." },
              { kind: "theorem", name: "Inspection", statement: "$\\int\\dfrac{g'(x)}{g(x)}dx=\\ln|g(x)|+C$" },
            ],
            steps: [
              { part: "a", reasoning: "Integrate $4\\sin2x$: divide by $2$ and change the sign.", working: "\\int4\\sin2x\\,dx=-2\\cos2x", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Integrate $\\frac3x$.", working: "\\int\\frac3x\\,dx=3\\ln x", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Integrate $-e^{-x}$ (divide by $-1$, giving $+e^{-x}$). (AG)", working: "\\int-e^{-x}dx=e^{-x}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Substitute $(1,2)$, using $\\ln1=0$.", working: "2=-2\\cos2+0+e^{-1}+C", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Solve for $C$.", working: "C=2+2\\cos2-e^{-1}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Linear denominator: divide by $3$.", working: "\\int\\frac{1}{3x-1}dx=\\tfrac13\\ln|3x-1|+C", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Divide by the inner coefficient $\\frac12$, i.e. multiply by $2$.", working: "\\int\\cos\\left(\\tfrac x2\\right)dx=2\\sin\\left(\\tfrac x2\\right)+C", marks: 2, markCode: "A" },
              { part: "d", reasoning: "The numerator is the derivative of the denominator.", working: "\\int\\frac{\\cos x}{\\sin x}dx", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Apply the reciprocal-type rule.", working: "=\\ln|\\sin x|+C", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) shown (b) $C=2+2\\cos2-e^{-1}$ (c) $\\tfrac13\\ln|3x-1|+C$ and $2\\sin\\frac x2+C$ (d) $\\ln|\\sin x|+C$",
            commonErrors: ["Leaving $+e^{-x}$ with the wrong sign.", "Dividing by $\\frac12$ incorrectly in part (c)."],
          },
        },
        {
          id: "aasl-u6-trig-exp-integrals-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Find $\\displaystyle\\int\\sin(3x)\\,dx$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$-3\\cos(3x)+C$" },
              { id: "b", text: "$\\cos(3x)+C$" },
              { id: "c", text: "$-\\dfrac{1}{3}\\cos(3x)+C$" },
              { id: "d", text: "$\\dfrac{1}{3}\\sin(3x)+C$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Linear composite", statement: "$\\int\\sin(ax)\\,dx=-\\dfrac{1}{a}\\cos(ax)+C$" },
            ],
            steps: [
              { reasoning: "Sine integrates to negative cosine.", working: "-\\cos(3x)", marks: 1, markCode: "M" },
              { reasoning: "Divide by the inner coefficient $3$ and add $+C$.", working: "-\\frac{1}{3}\\cos(3x)+C", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** $-\\dfrac{1}{3}\\cos(3x)+C$",
            commonErrors: ["Dropping the minus sign or multiplying by $3$ instead of dividing."],
          },
        },
        {
          id: "aasl-u6-trig-exp-integrals-q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Find $\\displaystyle\\int 4e^{2x}\\,dx$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$e^{2x}+C$" },
              { id: "b", text: "$2e^{2x}+C$" },
              { id: "c", text: "$8e^{2x}+C$" },
              { id: "d", text: "$2e^{2x}$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Linear composite", statement: "$\\int e^{ax}\\,dx=\\dfrac{1}{a}e^{ax}+C$" },
            ],
            steps: [
              { reasoning: "The exponential integrates to itself.", working: "4e^{2x}", marks: 1, markCode: "M" },
              { reasoning: "Divide by the inner coefficient $2$.", working: "\\frac{4}{2}e^{2x}+C=2e^{2x}+C", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** $2e^{2x}+C$",
            commonErrors: ["Multiplying by $2$ instead of dividing by $2$."],
          },
        },
        {
          id: "aasl-u6-trig-exp-integrals-q7",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Find $\\displaystyle\\int\\frac{5}{2x+1}\\,dx$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\dfrac{5}{2}\\ln|2x+1|+C$" },
              { id: "b", text: "$\\dfrac{2}{5}\\ln|2x+1|+C$" },
              { id: "c", text: "$\\dfrac{5}{2}\\ln|x+1|+C$" },
              { id: "d", text: "$5\\ln|2x+1|+C$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Linear composite", statement: "$\\int\\dfrac{1}{ax+b}\\,dx=\\dfrac{1}{a}\\ln|ax+b|+C$" },
            ],
            steps: [
              { reasoning: "The reciprocal of a linear function integrates to a logarithm.", working: "5\\ln|2x+1|", marks: 1, markCode: "M" },
              { reasoning: "Divide by the coefficient of $x$ in the denominator, which is $2$.", working: "\\frac{5}{2}\\ln|2x+1|+C", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $\\dfrac{5}{2}\\ln|2x+1|+C$",
            commonErrors: ["Forgetting to divide by $2$, or writing $\\ln|x+1|$ instead of $\\ln|2x+1|$."],
          },
        },
        {
          id: "aasl-u6-trig-exp-integrals-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Find $\\displaystyle\\int\\cos\\left(\\frac{x}{3}\\right)\\,dx$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$3\\sin\\left(\\dfrac{x}{3}\\right)+C$" },
              { id: "b", text: "$-3\\sin\\left(\\dfrac{x}{3}\\right)+C$" },
              { id: "c", text: "$\\dfrac{1}{3}\\sin\\left(\\dfrac{x}{3}\\right)+C$" },
              { id: "d", text: "$3\\cos\\left(\\dfrac{x}{3}\\right)+C$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Linear composite", statement: "$\\int\\cos(ax)\\,dx=\\dfrac{1}{a}\\sin(ax)+C$" },
            ],
            steps: [
              { reasoning: "Cosine integrates to sine.", working: "\\sin\\left(\\frac{x}{3}\\right)", marks: 1, markCode: "M" },
              { reasoning: "Divide by the inner coefficient $\\frac13$, i.e. multiply by $3$.", working: "3\\sin\\left(\\frac{x}{3}\\right)+C", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $3\\sin\\left(\\dfrac{x}{3}\\right)+C$",
            commonErrors: ["Dividing by $\\frac13$ the wrong way round, giving $\\frac13\\sin\\frac{x}{3}$."],
          },
        },
        {
          id: "aasl-u6-trig-exp-integrals-q9",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Find $\\displaystyle\\int 6x^2e^{x^3}\\,dx$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$2e^{x^{3}}+C$" },
              { id: "b", text: "$e^{x^{3}}+C$" },
              { id: "c", text: "$2e^{3x}+C$" },
              { id: "d", text: "$6e^{x^{3}}+C$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Integration by inspection", statement: "$\\int g'(x)e^{g(x)}\\,dx=e^{g(x)}+C$; here $g(x)=x^3$ and $g'(x)=3x^2$." },
            ],
            steps: [
              { reasoning: "Recognise that $6x^2=2\\cdot3x^2$ where $3x^2$ is the derivative of $x^3$.", working: "\\frac{d}{dx}e^{x^3}=3x^2e^{x^3}", marks: 1, markCode: "M" },
              { reasoning: "Adjust by the factor $2$.", working: "2e^{x^3}+C", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $2e^{x^{3}}+C$",
            commonErrors: ["Forgetting the factor $2$, or differentiating $x^3$ incorrectly."],
          },
        },
        {
          id: "aasl-u6-trig-exp-integrals-q10",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Find $\\displaystyle\\int\\left(2\\sin x+\\frac{3}{x}\\right)\\,dx$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$-2\\cos x-3\\ln|x|+C$" },
              { id: "b", text: "$-2\\cos x+\\ln|x|+C$" },
              { id: "c", text: "$2\\cos x+3\\ln|x|+C$" },
              { id: "d", text: "$-2\\cos x+3\\ln|x|+C$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Standard integrals", statement: "$\\int\\sin x\\,dx=-\\cos x+C$ and $\\int\\frac1x\\,dx=\\ln|x|+C$." },
            ],
            steps: [
              { reasoning: "Integrate each term separately.", working: "-2\\cos x+3\\ln|x|", marks: 1, markCode: "M" },
              { reasoning: "Add the constant of integration.", working: "-2\\cos x+3\\ln|x|+C", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** $-2\\cos x+3\\ln|x|+C$",
            commonErrors: ["Writing $2\\cos x$ instead of $-2\\cos x$.", "Writing $\\ln x$ without modulus signs."],
          },
        },
        {
          id: "aasl-u6-trig-exp-integrals-q11",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "A function $f$ has derivative $f'(x)=8e^{2x}-3$ and satisfies $f(0)=4$.\n\nFind an expression for $f(x)$ and the value of $f(\\ln 2)$, giving your answer to 3 significant figures.",
          response: {
            type: "numeric",
            parts: [
              { label: "Constant term in $f(x)$", answer: 0 },
              { label: "$f(\\ln 2)$ (3 s.f.)", answer: 13.9, tolerance: 0.05 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Linear composites", statement: "$\\int e^{ax}dx=\\tfrac1ae^{ax}+C$" },
              { kind: "principle", name: "Boundary condition", statement: "Substitute the known point to find $C$." },
            ],
            steps: [
              { reasoning: "Integrate term by term.", working: "f(x)=4e^{2x}-3x+C", marks: 2, markCode: "A" },
              { reasoning: "Substitute $x=0$, $f(0)=4$: $4+C=4$.", working: "C=0", marks: 1, markCode: "M" },
              { reasoning: "Evaluate at $x=\\ln2$: $e^{2\\ln2}=4$, so $f(\\ln2)=16-3\\ln2$.", working: "f(\\ln2)=16-3\\ln2\\approx13.9", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$f(x)=4e^{2x}-3x$; $f(\\ln2)\\approx13.9$",
            commonErrors: ["Integrating $8e^{2x}$ as $16e^{2x}$ or $\\frac12e^{2x}$."],
          },
        },
        {
          id: "aasl-u6-trig-exp-integrals-q12",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 3,
          stem: "Find $\\displaystyle\\int\\frac{6x}{x^2+1}\\,dx$, and hence find the value at $x=1$ of the antiderivative $F$ that satisfies $F(0)=0$. Give your answer to 3 significant figures.",
          response: {
            type: "numeric",
            parts: [
              { label: "$F(1)$ (3 s.f.)", answer: 2.08, tolerance: 0.005 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Integration by inspection", statement: "$\\int\\dfrac{g'(x)}{g(x)}dx=\\ln|g(x)|+C$; here $g(x)=x^2+1$ and $g'(x)=2x$." },
            ],
            steps: [
              { reasoning: "Recognise the numerator as a multiple of the derivative of the denominator.", working: "\\frac{6x}{x^2+1}=3\\cdot\\frac{2x}{x^2+1}", marks: 1, markCode: "M" },
              { reasoning: "Integrate and use $F(0)=0$ to fix $C$.", working: "F(x)=3\\ln(x^2+1)", marks: 1, markCode: "A" },
              { reasoning: "Evaluate at $x=1$.", working: "F(1)=3\\ln2\\approx2.08", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$F(1)=3\\ln2\\approx2.08$",
            commonErrors: ["Forgetting the factor $3$ from $6x=3\\cdot2x$."],
          },
        },
        {
          id: "aasl-u6-trig-exp-integrals-q13",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "Use integration by inspection to find the constants $k$ and $m$ in $\\displaystyle\\int xe^{x^2-1}\\,dx=ke^{x^2-1}+C$ and $\\displaystyle\\int\\cos\\left(\\frac{x}{2}\\right)dx=m\\sin\\left(\\frac{x}{2}\\right)+C$.",
          response: {
            type: "numeric",
            parts: [
              { label: "$k$", answer: 0.5 },
              { label: "$m$", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Integration by inspection", statement: "$\\int g'(x)e^{g(x)}dx=e^{g(x)}+C$ and $\\int f(ax+b)dx=\\frac1aF(ax+b)+C$." },
            ],
            steps: [
              { reasoning: "Differentiating $e^{x^2-1}$ gives $2xe^{x^2-1}$, which is twice the integrand.", working: "\\frac{d}{dx}e^{x^2-1}=2xe^{x^2-1}", marks: 1, markCode: "M" },
              { reasoning: "Adjust by the factor $\\frac12$.", working: "k=\\frac12=0.5", marks: 1, markCode: "A" },
              { reasoning: "For $\\cos\\frac x2$ the inner coefficient is $\\frac12$, so divide by it.", working: "m=2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$k=0.5$, $m=2$",
            commonErrors: ["Writing $k=2$ instead of $\\frac12$.", "Multiplying by $\\frac12$ instead of dividing for $m$."],
          },
        },
        {
          id: "aasl-u6-trig-exp-integrals-q14",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "A function $f$ has derivative $f'(x)=\\dfrac{1}{x+1}+2e^{x}$ for $x>-1$ and satisfies $f(0)=2$.\n\nFind an expression for $f(x)$ and the value of $f(1)$, giving your answer to 3 significant figures.",
          response: {
            type: "numeric",
            parts: [
              { label: "Constant term in $f(x)$", answer: 0 },
              { label: "$f(1)$ (3 s.f.)", answer: 6.13, tolerance: 0.005 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Standard integrals", statement: "$\\int\\frac{1}{x+1}dx=\\ln(x+1)+C$ and $\\int e^xdx=e^x+C$." },
              { kind: "principle", name: "Boundary condition", statement: "Substitute the known point to find $C$." },
            ],
            steps: [
              { reasoning: "Integrate term by term.", working: "f(x)=\\ln(x+1)+2e^x+C", marks: 2, markCode: "A" },
              { reasoning: "Substitute $x=0$, $f(0)=2$: $0+2+C=2$.", working: "C=0", marks: 1, markCode: "M" },
              { reasoning: "Evaluate at $x=1$.", working: "f(1)=\\ln2+2e\\approx0.693+5.437=6.13", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$f(x)=\\ln(x+1)+2e^x$; $f(1)\\approx6.13$",
            commonErrors: ["Writing $\\ln x$ instead of $\\ln(x+1)$.", "Integrating $2e^x$ as $2xe^x$."],
          },
        },
        {
          id: "aasl-u6-trig-exp-integrals-q15",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 7,
          stem: "A function $f$ has derivative $f'(x)=3\\sin(2x)+\\dfrac{4}{x}$ for $x>0$ and satisfies $f(1)=2$.",
          parts: [
            { label: "a", prompt: "Show that $f(x)=-\\dfrac{3}{2}\\cos(2x)+4\\ln x+C$ for some constant $C$.", marks: 3 },
            { label: "b", prompt: "Find the value of $C$.", marks: 2 },
            { label: "c", prompt: "Find $\\displaystyle\\int\\frac{2x+3}{x^2+3x+1}\\,dx$.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Linear composites", statement: "$\\int\\sin(2x)dx=-\\tfrac12\\cos(2x)+C$ and $\\int\\frac4x\\,dx=4\\ln x+C$." },
              { kind: "theorem", name: "Integration by inspection", statement: "$\\int\\dfrac{g'(x)}{g(x)}dx=\\ln|g(x)|+C$." },
            ],
            steps: [
              { part: "a", reasoning: "Integrate $3\\sin 2x$, dividing by $2$ and changing the sign.", working: "-\\frac{3}{2}\\cos(2x)", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Integrate $\\frac4x$.", working: "4\\ln x", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Combine with $+C$ (AG).", working: "f(x)=-\\frac{3}{2}\\cos(2x)+4\\ln x+C", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Substitute $x=1$, $f(1)=2$, using $\\ln 1=0$.", working: "2=-\\frac{3}{2}\\cos 2+C", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Solve for $C$.", working: "C=2+\\frac{3}{2}\\cos 2", marks: 1, markCode: "A" },
              { part: "c", reasoning: "The numerator is the derivative of the denominator.", working: "g(x)=x^2+3x+1,\\ g'(x)=2x+3", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Apply the reciprocal-type rule.", working: "\\ln(x^2+3x+1)+C", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) shown (b) $C=2+\\frac32\\cos2$ (c) $\\ln(x^2+3x+1)+C$",
            commonErrors: ["Sign error on the cosine term.", "Writing $\\ln x^2+3x+1$ instead of $\\ln(x^2+3x+1)$."],
          },
        },
        {
          id: "aasl-u6-trig-exp-integrals-q16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "A function $f$ has derivative $f'(x)=2e^{2x}-4\\sin x$ and satisfies $f(0)=3$.",
          parts: [
            { label: "a", prompt: "Find an expression for $f(x)$.", marks: 3 },
            { label: "b", prompt: "Find the exact value of $f\\left(\\frac{\\pi}{6}\\right)$.", marks: 2 },
            { label: "c", prompt: "Show that $\\displaystyle\\int_0^{\\pi}f'(x)\\,dx=e^{2\\pi}-9$.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Linear composites", statement: "$\\int 2e^{2x}dx=e^{2x}+C$ and $\\int-4\\sin x\\,dx=4\\cos x+C$." },
              { kind: "theorem", name: "Fundamental theorem of calculus", statement: "$\\int_a^bf'(x)dx=f(b)-f(a)$." },
            ],
            steps: [
              { part: "a", reasoning: "Integrate $2e^{2x}$.", working: "e^{2x}", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Integrate $-4\\sin x$.", working: "4\\cos x", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Use $f(0)=3$: $1+4+C=3$.", working: "C=-2,\\quad f(x)=e^{2x}+4\\cos x-2", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Substitute $x=\\frac{\\pi}{6}$ and use $\\cos\\frac{\\pi}{6}=\\frac{\\sqrt3}{2}$.", working: "f\\left(\\frac{\\pi}{6}\\right)=e^{\\pi/3}+2\\sqrt3-2", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the exact value.", working: "e^{\\pi/3}+2\\sqrt3-2", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Integrate $f'$ and evaluate at the limits.", working: "\\left[e^{2x}+4\\cos x\\right]_0^{\\pi}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Substitute $x=\\pi$ and $x=0$.", working: "\\left(e^{2\\pi}-4\\right)-\\left(1+4\\right)", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Simplify (AG).", working: "e^{2\\pi}-9", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $f(x)=e^{2x}+4\\cos x-2$ (b) $e^{\\pi/3}+2\\sqrt3-2$ (c) shown",
            commonErrors: ["Sign error integrating $-4\\sin x$.", "Evaluating $\\cos\\frac{\\pi}{6}$ incorrectly."],
          },
        },
      ],
    },
  ],
};
