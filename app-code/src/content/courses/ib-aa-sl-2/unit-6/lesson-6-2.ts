import type { Lesson } from "../../../types.ts";

export const lesson62: Lesson = {
  id: "aasl-u6-lesson-6-2",
  code: "6-2",
  title: "Definite Integrals and Area",
  goal: "I CAN evaluate definite integrals and use them to find areas under curves and between curves.",
  standards: ["SL 5.5", "SL 5.11"],
  vocabulary: [
    { term: "Definite integral", definition: "$\\int_a^b f(x)\\,dx=F(b)-F(a)$ where $F$ is any antiderivative of $f$." },
    { term: "Fundamental theorem of calculus", definition: "Integration and differentiation are inverse processes, so a definite integral can be evaluated using an antiderivative." },
    { term: "Area under a curve", definition: "For $f\\ge0$ on $[a,b]$, the area between the graph and the $x$-axis is $\\int_a^bf(x)\\,dx$." },
    { term: "Signed area", definition: "A definite integral counts area below the $x$-axis as negative." },
    { term: "Area between curves", definition: "If $f(x)\\ge g(x)$ on $[a,b]$, the area enclosed is $\\int_a^b\\big(f(x)-g(x)\\big)\\,dx$." },
  ],
  concepts: [
    {
      id: "aasl-u6-definite-integrals",
      title: "Definite integrals and area under a curve",
      skill: "Evaluate definite integrals and use them to find areas, treating regions above and below the x-axis separately.",
      lesson: {
        sections: [
          {
            heading: "Evaluating a definite integral",
            body: "To evaluate $\\int_a^bf(x)\\,dx$, find an antiderivative $F$ (no constant needed), then compute $F(b)-F(a)$. Useful properties: $\\int_a^bf\\,dx=-\\int_b^af\\,dx$ and $\\int_a^bf\\,dx+\\int_b^cf\\,dx=\\int_a^cf\\,dx$.",
          },
          {
            heading: "Area and sign",
            body: "Where the graph is above the $x$-axis the integral is positive; where it is below, the integral is negative. The **area** of a region below the axis is the absolute value. For a region that crosses the axis, find the zeros, integrate over each piece separately and add the absolute values. A GDC can give the area directly: find $\\int|f(x)|\\,dx$ or integrate each piece.",
          },
        ],
        keyFormulas: [
          { name: "Fundamental theorem", statement: "$\\int_a^bf(x)\\,dx=F(b)-F(a)$" },
          { name: "Total area", statement: "$\\text{Area}=\\int_a^b|f(x)|\\,dx$" },
        ],
        workedExample: {
          problem: "Find the area between $y=x^2$, the $x$-axis and the lines $x=1$ and $x=3$.",
          solution: "Area $=\\int_1^3x^2\\,dx=\\left[\\frac{x^3}{3}\\right]_1^3=9-\\frac13=\\frac{26}{3}$.",
        },
      },
      questions: [
        {
          id: "aasl-u6-definite-integrals-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Evaluate $\\displaystyle\\int_0^2 3x^2\\,dx$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$8$" },
              { id: "b", text: "$6$" },
              { id: "c", text: "$4$" },
              { id: "d", text: "$12$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Fundamental theorem of calculus", statement: "$\\int_a^bf(x)dx=F(b)-F(a)$" },
            ],
            steps: [
              { reasoning: "An antiderivative of $3x^2$ is $x^3$.", working: "\\left[x^3\\right]_0^2", marks: 1, markCode: "M" },
              { reasoning: "Substitute the limits.", working: "8-0=8", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $8$",
            commonErrors: ["Evaluating $3x^2$ at $x=2$ (giving $12$) rather than integrating."],
          },
        },
        {
          id: "aasl-u6-definite-integrals-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Let $f(x)=x^2-4x$.\n\nFind $\\displaystyle\\int_0^4f(x)\\,dx$, and hence write down the area of the region enclosed by the graph of $f$ and the $x$-axis. Give answers to 3 significant figures.",
          response: {
            type: "numeric",
            parts: [
              { label: "$\\int_0^4f(x)\\,dx$", answer: -10.7, tolerance: 0.05 },
              { label: "Area", answer: 10.7, tolerance: 0.05 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Fundamental theorem of calculus", statement: "$\\int_a^bf(x)dx=F(b)-F(a)$" },
              { kind: "property", name: "Signed area", statement: "A region below the $x$-axis gives a negative integral; its area is the absolute value." },
            ],
            steps: [
              { reasoning: "Integrate.", working: "\\int(x^2-4x)dx=\\frac{x^3}{3}-2x^2", marks: 1, markCode: "A" },
              { reasoning: "Substitute limits $4$ and $0$.", working: "\\left(\\frac{64}{3}-32\\right)-0=-\\frac{32}{3}\\approx-10.7", marks: 1, markCode: "A" },
              { reasoning: "$f(x)=x(x-4)\\le0$ on $[0,4]$, so the region is below the axis; take the absolute value.", working: "\\text{Area}=\\frac{32}{3}\\approx10.7", marks: 1, markCode: "R" },
            ],
            finalAnswer: "$-\\dfrac{32}{3}$; area $=\\dfrac{32}{3}\\approx10.7$",
            commonErrors: ["Giving a negative area.", "Forgetting to subtract the value at the lower limit."],
          },
        },
        {
          id: "aasl-u6-definite-integrals-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "The area under the graph of $y=e^{0.5x}$ between $x=0$ and $x=k$ ($k>0$) is $10$.\n\nFind the exact value of $k$ and give it to 3 significant figures.",
          response: {
            type: "numeric",
            parts: [
              { label: "$k$ (3 s.f.)", answer: 3.58, tolerance: 0.005 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Integral of an exponential", statement: "$\\int e^{ax}dx=\\dfrac1ae^{ax}+C$" },
              { kind: "law", name: "Logarithms", statement: "$e^y=c\\iff y=\\ln c$" },
            ],
            steps: [
              { reasoning: "Set up the integral equal to the area.", working: "\\int_0^ke^{0.5x}dx=10", marks: 1, markCode: "M" },
              { reasoning: "Integrate and substitute limits.", working: "\\left[2e^{0.5x}\\right]_0^k=2e^{0.5k}-2", marks: 1, markCode: "A" },
              { reasoning: "Solve $2e^{0.5k}-2=10$.", working: "e^{0.5k}=6", marks: 1, markCode: "M" },
              { reasoning: "Take natural logarithms.", working: "k=2\\ln6\\approx3.58", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$k=2\\ln6\\approx3.58$",
            commonErrors: ["Integrating $e^{0.5x}$ as $0.5e^{0.5x}$.", "Forgetting to subtract $F(0)=2$."],
          },
        },
        {
          id: "aasl-u6-definite-integrals-q4",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 8,
          stem: "The function $f$ is defined by $f(x)=x^3-6x^2+8x$, which can be written as $f(x)=x(x-2)(x-4)$.",
          parts: [
            { label: "a", prompt: "Write down the $x$-intercepts of the graph of $f$.", marks: 2 },
            { label: "b", prompt: "Find $\\displaystyle\\int_0^2f(x)\\,dx$.", marks: 2 },
            { label: "c", prompt: "Find $\\displaystyle\\int_2^4f(x)\\,dx$.", marks: 2 },
            { label: "d", prompt: "Hence find the total area enclosed between the graph of $f$ and the $x$-axis, and explain why $\\displaystyle\\int_0^4f(x)\\,dx$ does not give this area.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(b) $\\int_0^2f(x)\\,dx$", answer: 4 },
              { label: "(c) $\\int_2^4f(x)\\,dx$", answer: -4 },
              { label: "(d) Total area", answer: 8 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Fundamental theorem of calculus", statement: "$\\int_a^bf(x)dx=F(b)-F(a)$" },
              { kind: "property", name: "Signed area", statement: "Regions below the $x$-axis contribute negatively to a definite integral." },
            ],
            steps: [
              { part: "a", reasoning: "Set each factor equal to zero.", working: "x=0,\\ x=2,\\ x=4", marks: 2, markCode: "A" },
              { part: "b", reasoning: "Antiderivative $F(x)=\\frac{x^4}{4}-2x^3+4x^2$.", working: "F(2)-F(0)=4-16+16", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "=4", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Evaluate $F(4)-F(2)$ with $F(4)=64-128+64=0$.", working: "0-4", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "=-4", marks: 1, markCode: "A" },
              { part: "d", reasoning: "The region on $[2,4]$ is below the axis; add the absolute values.", working: "\\text{Area}=4+|-4|=8", marks: 1, markCode: "A" },
              { part: "d", reasoning: "$\\int_0^4f=4+(-4)=0$ because the positive and negative contributions cancel.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $0,2,4$ (b) $4$ (c) $-4$ (d) area $8$; the integral over $[0,4]$ is $0$ because areas above and below the axis cancel",
            commonErrors: ["Giving the total area as $\\int_0^4f(x)dx=0$.", "Arithmetic slips in $F(4)$."],
          },
        },
        {
          id: "aasl-u6-definite-integrals-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Evaluate $\\displaystyle\\int_1^2(2x+1)\\,dx$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$8$" },
              { id: "b", text: "$4$" },
              { id: "c", text: "$6$" },
              { id: "d", text: "$2$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Fundamental theorem of calculus", statement: "$\\int_a^bf(x)dx=F(b)-F(a)$" },
            ],
            steps: [
              { reasoning: "An antiderivative of $2x+1$ is $x^2+x$.", working: "\\left[x^2+x\\right]_1^2", marks: 1, markCode: "M" },
              { reasoning: "Substitute the limits: $(4+2)-(1+1)$.", working: "6-2=4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** $4$",
            commonErrors: ["Evaluating $2x+1$ at the limits instead of integrating."],
          },
        },
        {
          id: "aasl-u6-definite-integrals-q6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Evaluate $\\displaystyle\\int_0^{\\pi}\\sin x\\,dx$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$1$" },
              { id: "b", text: "$0$" },
              { id: "c", text: "$2$" },
              { id: "d", text: "$-2$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Standard integral", statement: "$\\int\\sin x\\,dx=-\\cos x+C$" },
            ],
            steps: [
              { reasoning: "An antiderivative of $\\sin x$ is $-\\cos x$.", working: "\\left[-\\cos x\\right]_0^{\\pi}", marks: 1, markCode: "M" },
              { reasoning: "Substitute the limits: $-\\cos\\pi+\\cos0$.", working: "1+1=2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** $2$",
            commonErrors: ["Writing the antiderivative as $\\cos x$ and obtaining $-2$."],
          },
        },
        {
          id: "aasl-u6-definite-integrals-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Find the area of the region bounded by the curve $y=e^x$, the $x$-axis and the lines $x=0$ and $x=\\ln 2$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\dfrac{3}{2}$" },
              { id: "b", text: "$1$" },
              { id: "c", text: "$2$" },
              { id: "d", text: "$\\ln 2$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Fundamental theorem of calculus", statement: "$\\int_a^be^xdx=e^b-e^a$" },
            ],
            steps: [
              { reasoning: "Set up the integral; $e^x>0$ so the area equals the integral.", working: "\\int_0^{\\ln2}e^xdx", marks: 1, markCode: "M" },
              { reasoning: "Evaluate: $e^{\\ln2}-e^0=2-1$.", working: "=1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** $1$",
            commonErrors: ["Leaving the answer as $e^{\\ln2}$ without subtracting $e^0$."],
          },
        },
        {
          id: "aasl-u6-definite-integrals-q8",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Evaluate $\\displaystyle\\int_{-1}^{1}x^3\\,dx$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\dfrac{1}{2}$" },
              { id: "b", text: "$2$" },
              { id: "c", text: "$0$" },
              { id: "d", text: "$-\\dfrac{1}{2}$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Odd function symmetry", statement: "For an odd function, the integral over a symmetric interval $[-a,a]$ is $0$." },
            ],
            steps: [
              { reasoning: "An antiderivative of $x^3$ is $\\frac{x^4}{4}$.", working: "\\left[\\frac{x^4}{4}\\right]_{-1}^{1}", marks: 1, markCode: "M" },
              { reasoning: "Substitute the limits: $\\frac14-\\frac14$.", working: "=0", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** $0$",
            commonErrors: ["Thinking the area must be positive; the integral is signed."],
          },
        },
        {
          id: "aasl-u6-definite-integrals-q9",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Evaluate $\\displaystyle\\int_0^1(x^2-x)\\,dx$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$-\\dfrac{1}{6}$" },
              { id: "b", text: "$0$" },
              { id: "c", text: "$\\dfrac{1}{6}$" },
              { id: "d", text: "$-\\dfrac{1}{2}$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Fundamental theorem of calculus", statement: "$\\int_a^bf(x)dx=F(b)-F(a)$" },
            ],
            steps: [
              { reasoning: "An antiderivative of $x^2-x$ is $\\frac{x^3}{3}-\\frac{x^2}{2}$.", working: "\\left[\\frac{x^3}{3}-\\frac{x^2}{2}\\right]_0^1", marks: 1, markCode: "M" },
              { reasoning: "Substitute the limits: $\\frac13-\\frac12$.", working: "=-\\frac16", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $-\\dfrac{1}{6}$",
            commonErrors: ["Giving the area $\\frac16$ instead of the signed integral $-\\frac16$."],
          },
        },
        {
          id: "aasl-u6-definite-integrals-q10",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "It is given that $\\displaystyle\\int_1^3f(x)\\,dx=4$. What is the value of $\\displaystyle\\int_3^1f(x)\\,dx$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$4$" },
              { id: "b", text: "$8$" },
              { id: "c", text: "$0$" },
              { id: "d", text: "$-4$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Reversing limits", statement: "$\\int_a^bf\\,dx=-\\int_b^af\\,dx$" },
            ],
            steps: [
              { reasoning: "Reversing the limits changes the sign.", working: "\\int_3^1f(x)\\,dx=-\\int_1^3f(x)\\,dx", marks: 1, markCode: "M" },
              { reasoning: "Apply the given value.", working: "=-4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** $-4$",
            commonErrors: ["Assuming the integral is unchanged when the limits are swapped."],
          },
        },
        {
          id: "aasl-u6-definite-integrals-q11",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Evaluate $\\displaystyle\\int_1^4(3x^2-2x)\\,dx$.",
          response: {
            type: "numeric",
            parts: [
              { label: "Value of the integral", answer: 48 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Fundamental theorem of calculus", statement: "$\\int_a^bf(x)dx=F(b)-F(a)$" },
            ],
            steps: [
              { reasoning: "Find an antiderivative.", working: "F(x)=x^3-x^2", marks: 1, markCode: "A" },
              { reasoning: "Substitute the limits.", working: "\\left[x^3-x^2\\right]_1^4=(64-16)-(1-1)", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "=48", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$48$",
            commonErrors: ["Evaluating $3x^2-2x$ at $x=4$ instead of integrating."],
          },
        },
        {
          id: "aasl-u6-definite-integrals-q12",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "Let $f(x)=x^2-x$.\n\nFind $\\displaystyle\\int_0^1f(x)\\,dx$ and the area of the region enclosed by the graph of $f$ and the $x$-axis between $x=0$ and $x=1$.",
          response: {
            type: "numeric",
            parts: [
              { label: "$\\int_0^1f(x)\\,dx$", answer: -0.167, tolerance: 0.001 },
              { label: "Area", answer: 0.167, tolerance: 0.001 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Fundamental theorem of calculus", statement: "$\\int_a^bf(x)dx=F(b)-F(a)$" },
              { kind: "property", name: "Signed area", statement: "A region below the $x$-axis gives a negative integral; its area is the absolute value." },
            ],
            steps: [
              { reasoning: "Integrate term by term.", working: "F(x)=\\frac{x^3}{3}-\\frac{x^2}{2}", marks: 1, markCode: "A" },
              { reasoning: "Substitute the limits.", working: "F(1)-F(0)=\\frac13-\\frac12=-\\frac16\\approx-0.167", marks: 1, markCode: "A" },
              { reasoning: "$f(x)=x(x-1)<0$ on $(0,1)$, so the region is below the axis; take the absolute value.", working: "\\text{Area}=\\frac16\\approx0.167", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$-\\dfrac16$; area $=\\dfrac16\\approx0.167$",
            commonErrors: ["Giving a negative area.", "Reporting the area as $\\frac13-\\frac12$ without the absolute value."],
          },
        },
        {
          id: "aasl-u6-definite-integrals-q13",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Evaluate $\\displaystyle\\int_1^3\\frac{4}{x}\\,dx$, giving your answer to 3 decimal places.",
          response: {
            type: "numeric",
            parts: [
              { label: "Value (3 d.p.)", answer: 4.394, tolerance: 0.001 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Reciprocal integral", statement: "$\\int\\frac1x\\,dx=\\ln|x|+C$" },
            ],
            steps: [
              { reasoning: "An antiderivative of $\\frac4x$ is $4\\ln x$.", working: "\\left[4\\ln x\\right]_1^3", marks: 1, markCode: "A" },
              { reasoning: "Substitute the limits.", working: "4\\ln3-4\\ln1", marks: 1, markCode: "M" },
              { reasoning: "Use $\\ln1=0$ and evaluate.", working: "4\\ln3\\approx4.394", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$4.394$",
            commonErrors: ["Writing $4\\ln x+4$ or forgetting $\\ln1=0$."],
          },
        },
        {
          id: "aasl-u6-definite-integrals-q14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Let $f(x)=x^2-4x+3$ for $0\\le x\\le4$.\n\nFind $\\displaystyle\\int_0^4f(x)\\,dx$ and the total area of the regions enclosed between the graph of $f$ and the $x$-axis.",
          response: {
            type: "numeric",
            parts: [
              { label: "$\\int_0^4f(x)\\,dx$", answer: 1.333, tolerance: 0.005 },
              { label: "Total area", answer: 4 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Fundamental theorem of calculus", statement: "$\\int_a^bf(x)dx=F(b)-F(a)$" },
              { kind: "property", name: "Signed area", statement: "Regions below the $x$-axis contribute negatively to a definite integral." },
            ],
            steps: [
              { reasoning: "Factorise: $f(x)=(x-1)(x-3)$, so the curve crosses the axis at $x=1$ and $x=3$.", working: "x=1,\\quad x=3", marks: 1, markCode: "M" },
              { reasoning: "Antiderivative $F(x)=\\frac{x^3}{3}-2x^2+3x$; evaluate on each piece.", working: "\\int_0^1f=\\frac43,\\quad \\int_1^3f=-\\frac43,\\quad \\int_3^4f=\\frac43", marks: 2, markCode: "A" },
              { reasoning: "Add the absolute values for the total area.", working: "\\text{Area}=\\frac43+\\frac43+\\frac43=4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\dfrac43$; total area $=4$",
            commonErrors: ["Using $\\int_0^4f(x)dx=\\frac43$ as the area, ignoring the negative part."],
          },
        },
        {
          id: "aasl-u6-definite-integrals-q15",
          difficulty: "core",
          paper: "2",
          totalMarks: 6,
          stem: "Consider the function $f(x)=x^2-2x$ for $0\\le x\\le3$.",
          parts: [
            { label: "a", prompt: "Evaluate $\\displaystyle\\int_0^3f(x)\\,dx$.", marks: 2 },
            { label: "b", prompt: "Find the total area enclosed between the graph of $f$ and the $x$-axis.", marks: 3 },
            { label: "c", prompt: "Explain why your answers to parts (a) and (b) are different.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Fundamental theorem of calculus", statement: "$\\int_a^bf(x)dx=F(b)-F(a)$" },
              { kind: "property", name: "Signed area", statement: "Regions below the $x$-axis contribute negatively to a definite integral." },
            ],
            steps: [
              { part: "a", reasoning: "Antiderivative $F(x)=\\frac{x^3}{3}-x^2$.", working: "F(x)=\\frac{x^3}{3}-x^2", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Substitute the limits: $F(3)=9-9=0$.", working: "\\int_0^3f(x)\\,dx=0", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$f(x)=x(x-2)$ is negative on $(0,2)$ and positive on $(2,3)$, so split at $x=2$.", working: "\\int_0^2f(x)dx=-\\frac43,\\quad \\int_2^3f(x)dx=\\frac43", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Add the absolute values.", working: "\\text{Area}=\\frac43+\\frac43=\\frac83\\approx2.67", marks: 1, markCode: "A" },
              { part: "b", reasoning: "State the area.", working: "\\frac83", marks: 1, markCode: "A" },
              { part: "c", reasoning: "The positive and negative contributions cancel in the definite integral.", working: "-\\frac43+\\frac43=0", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $0$ (b) $\\frac83$ (c) areas above and below the axis cancel",
            commonErrors: ["Giving the area as $0$."],
          },
        },
        {
          id: "aasl-u6-definite-integrals-q16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 9,
          stem: "The region $R$ is bounded by the curve $y=x^3$, the $x$-axis and the lines $x=-1$ and $x=2$.",
          parts: [
            { label: "a", prompt: "State the sign of $y=x^3$ on $-1\\le x<0$ and on $0<x\\le2$.", marks: 1 },
            { label: "b", prompt: "Evaluate $\\displaystyle\\int_{-1}^{2}x^3\\,dx$.", marks: 2 },
            { label: "c", prompt: "Explain why this value is not the area of $R$.", marks: 1 },
            { label: "d", prompt: "Find the area of $R$.", marks: 3 },
            { label: "e", prompt: "Find the area enclosed between the curves $y=x^3$ and $y=x$ for $0\\le x\\le1$.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Fundamental theorem of calculus", statement: "$\\int_a^bf(x)dx=F(b)-F(a)$" },
              { kind: "property", name: "Signed area", statement: "Regions below the $x$-axis contribute negatively to a definite integral." },
            ],
            steps: [
              { part: "a", reasoning: "$x^3$ is negative for $x<0$ and positive for $x>0$.", working: "\\text{negative on }[-1,0),\\ \\text{positive on }(0,2]", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Antiderivative $\\frac{x^4}{4}$.", working: "\\left[\\frac{x^4}{4}\\right]_{-1}^{2}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Substitute the limits: $4-\\frac14$.", working: "=\\frac{15}{4}=3.75", marks: 1, markCode: "A" },
              { part: "c", reasoning: "The curve is below the axis on $[-1,0)$, so that part subtracts from the positive part.", working: "-\\frac14+4", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Split the integral at $x=0$.", working: "\\int_{-1}^0x^3dx=-\\frac14,\\quad \\int_0^2x^3dx=4", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Add the absolute values.", working: "\\text{Area}=\\frac14+4=\\frac{17}{4}=4.25", marks: 1, markCode: "A" },
              { part: "d", reasoning: "State the area.", working: "\\frac{17}{4}", marks: 1, markCode: "A" },
              { part: "e", reasoning: "For $0<x<1$, $x>x^3$.", working: "\\int_0^1(x-x^3)dx", marks: 1, markCode: "M" },
              { part: "e", reasoning: "Evaluate.", working: "\\left[\\frac{x^2}{2}-\\frac{x^4}{4}\\right]_0^1=\\frac14", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) negative then positive (b) $\\frac{15}{4}$ (c) signed area (d) $\\frac{17}{4}$ (e) $\\frac14$",
            commonErrors: ["Reporting $\\frac{15}{4}$ as the area.", "Forgetting the absolute value on $[-1,0]$."],
          },
        },
      ],
    },
    {
      id: "aasl-u6-area-between-curves",
      title: "Area between curves",
      skill: "Find intersection points and integrate the difference of two functions to find the enclosed area.",
      lesson: {
        sections: [
          {
            heading: "Setting up",
            body: "Find where the curves meet by solving $f(x)=g(x)$; these are the limits $a$ and $b$. Between them identify which curve is on top (test a value, or sketch). Then Area $=\\int_a^b(\\text{top}-\\text{bottom})\\,dx$. This formula works even when part of the region is below the $x$-axis, because the difference is positive throughout.",
          },
          {
            heading: "Technology and exact answers",
            body: "On Paper 1 intersections are found by factorising and the integral is evaluated exactly. On Paper 2 use the GDC to find the intersection points (store them in memory for accuracy) and evaluate the integral numerically, giving the answer to 3 significant figures. If curves cross inside the interval, split the region at the crossing point.",
          },
        ],
        keyFormulas: [
          { name: "Area between curves", statement: "$A=\\int_a^b\\big(f(x)-g(x)\\big)\\,dx$ where $f\\ge g$ on $[a,b]$" },
        ],
        workedExample: {
          problem: "Find the area enclosed by $y=x$ and $y=x^2$.",
          solution: "They meet where $x=x^2$, so $x=0,1$. On $(0,1)$, $x>x^2$. Area $=\\int_0^1(x-x^2)dx=\\left[\\frac{x^2}{2}-\\frac{x^3}{3}\\right]_0^1=\\frac16$.",
        },
      },
      questions: [
        {
          id: "aasl-u6-area-between-curves-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 1,
          stem: "The curves $y=x$ and $y=x^2$ enclose a region between $x=0$ and $x=1$, where $x\\ge x^2$. Which integral gives its area?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\displaystyle\\int_0^1(x-x^2)\\,dx$" },
              { id: "b", text: "$\\displaystyle\\int_0^1x\\cdot x^2\\,dx$" },
              { id: "c", text: "$\\displaystyle\\int_0^1(x^2-x)\\,dx$" },
              { id: "d", text: "$\\displaystyle\\int_0^1(x+x^2)\\,dx$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Area between curves", statement: "$A=\\int_a^b(\\text{upper}-\\text{lower})\\,dx$" },
            ],
            steps: [
              { reasoning: "The line is the upper curve, so subtract the parabola from it.", working: "\\int_0^1(x-x^2)dx", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)**",
            commonErrors: ["Subtracting in the wrong order, which gives a negative area."],
          },
        },
        {
          id: "aasl-u6-area-between-curves-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "The line $y=x+2$ and the curve $y=x^2$ intersect at two points.\n\nFind the $x$-coordinates of the points of intersection and the exact area of the region enclosed by the line and the curve. Enter the smaller $x$-coordinate, the larger $x$-coordinate and the area.",
          response: {
            type: "numeric",
            parts: [
              { label: "Smaller $x$", answer: -1 },
              { label: "Larger $x$", answer: 2 },
              { label: "Area", answer: 4.5 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Area between curves", statement: "$A=\\int_a^b(\\text{upper}-\\text{lower})\\,dx$" },
            ],
            steps: [
              { reasoning: "Equate and solve.", working: "x^2=x+2\\Rightarrow (x-2)(x+1)=0,\\ x=-1,\\ 2", marks: 1, markCode: "A" },
              { reasoning: "The line is above the parabola between the intersections.", working: "A=\\int_{-1}^{2}(x+2-x^2)dx", marks: 1, markCode: "M" },
              { reasoning: "Integrate and substitute: $F(2)=2+4-\\frac83=\\frac{10}{3}$ and $F(-1)=\\frac12-2+\\frac13=-\\frac76$.", working: "F(x)=\\frac{x^2}{2}+2x-\\frac{x^3}{3}", marks: 1, markCode: "A" },
              { reasoning: "Subtract.", working: "\\frac{10}{3}+\\frac76=\\frac{27}{6}=\\frac92", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=-1,\\ 2$; area $=\\dfrac92$",
            commonErrors: ["Integrating $x^2$ and $x+2$ separately and not subtracting.", "Sign errors when evaluating at the lower limit $-1$."],
          },
        },
        {
          id: "aasl-u6-area-between-curves-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "The region $R$ is bounded by the curve $y=e^x$, the line $y=3-x$ and the $y$-axis.\n\nUse your GDC to find the $x$-coordinate of the point where the curve and the line meet, and the area of $R$. Give your answers to 3 significant figures.",
          response: {
            type: "numeric",
            parts: [
              { label: "$x$-coordinate of intersection", answer: 0.792, tolerance: 0.001 },
              { label: "Area of $R$", answer: 0.855, tolerance: 0.002 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Area between curves", statement: "$A=\\int_a^b(\\text{upper}-\\text{lower})\\,dx$" },
            ],
            steps: [
              { reasoning: "Solve $e^x=3-x$ on the GDC.", working: "x=0.792", marks: 1, markCode: "A" },
              { reasoning: "At $x=0$ the line ($y=3$) is above the curve ($y=1$), so the line is on top.", working: "A=\\int_0^{0.792}(3-x-e^x)dx", marks: 1, markCode: "M" },
              { reasoning: "Antiderivative and substitution with the unrounded value $a=0.79206$.", working: "\\left[3x-\\tfrac{x^2}{2}-e^x\\right]_0^{a}", marks: 1, markCode: "A" },
              { reasoning: "Evaluate (or use GDC).", working: "A\\approx0.855", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x\\approx0.792$; area $\\approx0.855$",
            commonErrors: ["Using the rounded value $0.792$ and getting a slightly different final digit.", "Subtracting in the wrong order."],
          },
        },
        {
          id: "aasl-u6-area-between-curves-q4",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 9,
          stem: "The curves $C_1: y=6x-x^2$ and $C_2: y=x^2-2x$ intersect at the origin $O$ and at another point $P$.",
          parts: [
            { label: "a", prompt: "Find the $x$-coordinate of $P$.", marks: 2 },
            { label: "b", prompt: "Show that the area $A$ of the region enclosed by $C_1$ and $C_2$ is given by $A=\\displaystyle\\int_0^4(8x-2x^2)\\,dx$.", marks: 2 },
            { label: "c", prompt: "Find the exact value of $A$.", marks: 2 },
            { label: "d", prompt: "Show that the line $x=2$ divides the region into two parts of equal area.", marks: 3 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) $x$-coordinate of $P$", answer: 4 },
              { label: "(c) Area $A$ (3 d.p.)", answer: 21.333, tolerance: 0.005 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Area between curves", statement: "$A=\\int_a^b(\\text{upper}-\\text{lower})\\,dx$" },
              { kind: "property", name: "Symmetry", statement: "The region is symmetric about the vertical line through the midpoint of its $x$-limits." },
            ],
            steps: [
              { part: "a", reasoning: "Equate the curves.", working: "6x-x^2=x^2-2x\\Rightarrow 2x^2-8x=0", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Factorise.", working: "2x(x-4)=0\\Rightarrow x=4", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$C_1$ lies above $C_2$ for $0<x<4$ (e.g. at $x=1$: $5>-1$).", working: "A=\\int_0^4(6x-x^2-(x^2-2x))dx", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Simplify the integrand (AG).", working: "A=\\int_0^4(8x-2x^2)dx", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Integrate.", working: "\\left[4x^2-\\frac{2x^3}{3}\\right]_0^4", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Evaluate.", working: "64-\\frac{128}{3}=\\frac{64}{3}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Area for $0\\le x\\le2$.", working: "\\left[4x^2-\\frac{2x^3}{3}\\right]_0^2=16-\\frac{16}{3}=\\frac{32}{3}", marks: 2, markCode: "A" },
              { part: "d", reasoning: "This is half of $\\frac{64}{3}$, so the line bisects the area.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $4$ (b) shown (c) $\\dfrac{64}{3}\\approx21.333$ (d) left part $=\\dfrac{32}{3}=\\dfrac12A$",
            commonErrors: ["Reversing the curves in part (b).", "Using $\\frac{2x^3}{3}$ incorrectly as $\\frac{2x^3}{2}$."],
          },
        },
        {
          id: "aasl-u6-area-between-curves-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The curves $y=2x$ and $y=x^2$ intersect at $x=0$ and $x=2$. On $0<x<2$ the line lies above the parabola. Which integral gives the area of the enclosed region?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\displaystyle\\int_0^2(2x+x^2)\\,dx$" },
              { id: "b", text: "$\\displaystyle\\int_0^2(2x)(x^2)\\,dx$" },
              { id: "c", text: "$\\displaystyle\\int_0^2(2x-x^2)\\,dx$" },
              { id: "d", text: "$\\displaystyle\\int_0^2(x^2-2x)\\,dx$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Area between curves", statement: "$A=\\int_a^b(\\text{upper}-\\text{lower})\\,dx$" },
            ],
            steps: [
              { reasoning: "Subtract the lower curve from the upper curve.", working: "2x-x^2", marks: 1, markCode: "M" },
              { reasoning: "Write the integral over the intersection limits.", working: "\\int_0^2(2x-x^2)\\,dx", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)**",
            commonErrors: ["Subtracting in the wrong order, which gives a negative result."],
          },
        },
        {
          id: "aasl-u6-area-between-curves-q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Find the area enclosed between the curves $y=\\sqrt{x}$ and $y=x$ for $0\\le x\\le1$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\dfrac{1}{2}$" },
              { id: "b", text: "$\\dfrac{5}{6}$" },
              { id: "c", text: "$\\dfrac{1}{3}$" },
              { id: "d", text: "$\\dfrac{1}{6}$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Area between curves", statement: "$A=\\int_a^b(\\text{upper}-\\text{lower})\\,dx$" },
            ],
            steps: [
              { reasoning: "On $(0,1)$, $\\sqrt{x}>x$, so integrate the difference.", working: "\\int_0^1(\\sqrt{x}-x)\\,dx=\\left[\\frac{2}{3}x^{3/2}-\\frac{x^2}{2}\\right]_0^1", marks: 1, markCode: "M" },
              { reasoning: "Evaluate at $x=1$.", working: "\\frac23-\\frac12=\\frac16", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** $\\dfrac16$",
            commonErrors: ["Reversing the curves and obtaining a negative area."],
          },
        },
        {
          id: "aasl-u6-area-between-curves-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "The curves $y=x+6$ and $y=x^2$ intersect at $x=-2$ and $x=3$. Which integral gives the area of the region enclosed by the curves?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\displaystyle\\int_{-2}^{3}(x^2-x-6)\\,dx$" },
              { id: "b", text: "$\\displaystyle\\int_{-2}^{3}(6-x-x^2)\\,dx$" },
              { id: "c", text: "$\\displaystyle\\int_{-2}^{3}(x+6-x^2)\\,dx$" },
              { id: "d", text: "$\\displaystyle\\int_{0}^{3}(x+6-x^2)\\,dx$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Area between curves", statement: "$A=\\int_a^b(\\text{upper}-\\text{lower})\\,dx$; on $(-2,3)$ the line is above the parabola." },
            ],
            steps: [
              { reasoning: "Subtract the parabola from the line and use the intersection limits.", working: "\\int_{-2}^{3}(x+6-x^2)\\,dx", marks: 1, markCode: "M" },
              { reasoning: "Check the limits match the intersections.", working: "x=-2,\\ 3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)**",
            commonErrors: ["Using only part of the interval, or subtracting in the wrong order."],
          },
        },
        {
          id: "aasl-u6-area-between-curves-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Find the area enclosed between the curves $y=e^x$ and $y=1$ for $0\\le x\\le\\ln 2$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$2$" },
              { id: "b", text: "$1.307$" },
              { id: "c", text: "$0.307$" },
              { id: "d", text: "$0.693$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Area between curves", statement: "$A=\\int_a^b(\\text{upper}-\\text{lower})\\,dx$" },
            ],
            steps: [
              { reasoning: "For $x>0$, $e^x>1$, so integrate $e^x-1$.", working: "\\int_0^{\\ln2}(e^x-1)\\,dx=\\left[e^x-x\\right]_0^{\\ln2}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate: $(2-\\ln2)-(1-0)$.", working: "=1-\\ln2\\approx0.307", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** $0.307$",
            commonErrors: ["Integrating only $e^x$ and forgetting to subtract the area under $y=1$."],
          },
        },
        {
          id: "aasl-u6-area-between-curves-q9",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Find the area enclosed between the curves $y=x^2-3$ and $y=1$ for $-2\\le x\\le2$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$8$" },
              { id: "b", text: "$5.33$" },
              { id: "c", text: "$21.3$" },
              { id: "d", text: "$10.7$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Area between curves", statement: "$A=\\int_a^b(\\text{upper}-\\text{lower})\\,dx$" },
            ],
            steps: [
              { reasoning: "The line $y=1$ is above the parabola on $(-2,2)$, so integrate $1-(x^2-3)=4-x^2$.", working: "\\int_{-2}^2(4-x^2)\\,dx=\\left[4x-\\frac{x^3}{3}\\right]_{-2}^{2}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate: $(8-\\frac83)-(-8+\\frac83)=\\frac{32}{3}$.", working: "\\approx10.7", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** $10.7$",
            commonErrors: ["Subtracting the curves in the wrong order or using the wrong limits."],
          },
        },
        {
          id: "aasl-u6-area-between-curves-q10",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "Two curves intersect at $x=1$ and $x=4$, and they also cross each other at $x=2.5$ inside this interval. What must be done to find the total area of the regions enclosed between the curves?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Split the region at $x=2.5$ and integrate the absolute difference of the curves on each part." },
              { id: "b", text: "Integrate the difference of the curves from $x=1$ to $x=4$ and take the absolute value of the result." },
              { id: "c", text: "Find the equation of the tangent at $x=2.5$ and use it to split the region." },
              { id: "d", text: "Integrate the difference of the curves from $x=1$ to $x=4$; crossing points do not affect the area." },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Area between curves", statement: "When curves cross inside the interval, the region must be split at each crossing point." },
            ],
            steps: [
              { reasoning: "A single integral of $f-g$ would cancel positive and negative parts.", working: "\\text{split at }x=2.5", marks: 1, markCode: "M" },
              { reasoning: "Integrate $|f-g|$ on each sub-interval and add.", working: "\\int_1^{2.5}|f-g|dx+\\int_{2.5}^4|f-g|dx", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)**",
            commonErrors: ["Taking the absolute value of the whole integral instead of splitting first."],
          },
        },
        {
          id: "aasl-u6-area-between-curves-q11",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "The curves $y=x$ and $y=x^3$ intersect at $x=-1$, $x=0$ and $x=1$.\n\nFind the total area of the regions enclosed between the two curves.",
          response: {
            type: "numeric",
            parts: [
              { label: "Area for $-1\\le x\\le0$", answer: 0.25 },
              { label: "Area for $0\\le x\\le1$", answer: 0.25 },
              { label: "Total area", answer: 0.5 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Area between curves", statement: "$A=\\int_a^b(\\text{upper}-\\text{lower})\\,dx$" },
            ],
            steps: [
              { reasoning: "On $(-1,0)$ the cubic is above the line; on $(0,1)$ the line is above the cubic.", working: "x^3-x\\ \\text{on }(-1,0),\\quad x-x^3\\ \\text{on }(0,1)", marks: 1, markCode: "M" },
              { reasoning: "Evaluate the first piece.", working: "\\int_{-1}^0(x^3-x)\\,dx=\\left[\\frac{x^4}{4}-\\frac{x^2}{2}\\right]_{-1}^0=\\frac14", marks: 1, markCode: "A" },
              { reasoning: "Evaluate the second piece.", working: "\\int_0^1(x-x^3)\\,dx=\\left[\\frac{x^2}{2}-\\frac{x^4}{4}\\right]_0^1=\\frac14", marks: 1, markCode: "A" },
              { reasoning: "Add the two areas.", working: "\\frac14+\\frac14=\\frac12", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Total area $=\\dfrac12$",
            commonErrors: ["Subtracting in the wrong order on one of the intervals."],
          },
        },
        {
          id: "aasl-u6-area-between-curves-q12",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "The line $y=x$ and the curve $y=\\dfrac{1}{x}$ meet at $x=1$ and $x=-1$.\n\nFind the area enclosed between them for $1\\le x\\le2$, giving your answer to 3 decimal places.",
          response: {
            type: "numeric",
            parts: [
              { label: "Area (3 d.p.)", answer: 0.807, tolerance: 0.001 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Area between curves", statement: "$A=\\int_a^b(\\text{upper}-\\text{lower})\\,dx$" },
            ],
            steps: [
              { reasoning: "For $x>1$ the line is above the curve, so integrate $x-\\frac1x$.", working: "\\int_1^2\\left(x-\\frac1x\\right)dx", marks: 1, markCode: "M" },
              { reasoning: "Antiderivative $\\frac{x^2}{2}-\\ln x$.", working: "\\left[\\frac{x^2}{2}-\\ln x\\right]_1^2", marks: 1, markCode: "M" },
              { reasoning: "Evaluate: $(2-\\ln2)-(\\frac12-0)$.", working: "\\frac32-\\ln2\\approx0.807", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$0.807$",
            commonErrors: ["Integrating $\\frac1x$ as $\\frac{1}{x^2}$ or forgetting the $\\ln x$ term."],
          },
        },
        {
          id: "aasl-u6-area-between-curves-q13",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Find the exact area enclosed between the curves $y=e^x$ and $y=e^{-x}$ for $0\\le x\\le\\ln 2$.",
          response: {
            type: "numeric",
            parts: [
              { label: "Area", answer: 1.5 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Area between curves", statement: "$A=\\int_a^b(\\text{upper}-\\text{lower})\\,dx$" },
            ],
            steps: [
              { reasoning: "For $x>0$, $e^x>e^{-x}$, so integrate the difference.", working: "\\int_0^{\\ln2}(e^x-e^{-x})\\,dx", marks: 1, markCode: "M" },
              { reasoning: "Antiderivative $e^x+e^{-x}$.", working: "\\left[e^x+e^{-x}\\right]_0^{\\ln2}", marks: 1, markCode: "A" },
              { reasoning: "Evaluate: $(2+\\frac12)-(1+1)$.", working: "=\\frac32", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\dfrac32$",
            commonErrors: ["Integrating $e^{-x}$ as $e^{-x}$ without a sign change; it should contribute $+e^{-x}$ to the antiderivative."],
          },
        },
        {
          id: "aasl-u6-area-between-curves-q14",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "The curve $y=x^2-2x-3$ and the line $y=x-3$ intersect at two points.\n\nFind the $x$-coordinates of the points of intersection and the exact area of the region enclosed by the curve and the line.",
          response: {
            type: "numeric",
            parts: [
              { label: "Smaller $x$", answer: 0 },
              { label: "Larger $x$", answer: 3 },
              { label: "Area", answer: 4.5 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Area between curves", statement: "$A=\\int_a^b(\\text{upper}-\\text{lower})\\,dx$" },
            ],
            steps: [
              { reasoning: "Equate the curve and the line.", working: "x^2-2x-3=x-3\\Rightarrow x^2-3x=0", marks: 1, markCode: "M" },
              { reasoning: "Solve.", working: "x(x-3)=0\\Rightarrow x=0,\\ 3", marks: 1, markCode: "A" },
              { reasoning: "On $(0,3)$ the line is above the curve (e.g. at $x=1$: $-2>-4$).", working: "A=\\int_0^3(x-3-(x^2-2x-3))\\,dx=\\int_0^3(-x^2+3x)\\,dx", marks: 1, markCode: "M" },
              { reasoning: "Evaluate: $\\left[-\\frac{x^3}{3}+\\frac{3x^2}{2}\\right]_0^3$.", working: "=-9+\\frac{27}{2}=\\frac92", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=0,\\ 3$; area $=\\dfrac92$",
            commonErrors: ["Subtracting the curves in the wrong order.", "Arithmetic slips when evaluating at $x=3$."],
          },
        },
        {
          id: "aasl-u6-area-between-curves-q15",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 7,
          stem: "The line $y=2x+3$ and the curve $y=x^2$ intersect at two points.",
          parts: [
            { label: "a", prompt: "Find the $x$-coordinates of the points of intersection.", marks: 2 },
            { label: "b", prompt: "Show that the line lies above the curve between the intersection points.", marks: 1 },
            { label: "c", prompt: "Write down an integral for the area of the enclosed region.", marks: 1 },
            { label: "d", prompt: "Find the exact area of the region.", marks: 2 },
            { label: "e", prompt: "Give the area to 3 significant figures.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Area between curves", statement: "$A=\\int_a^b(\\text{upper}-\\text{lower})\\,dx$" },
            ],
            steps: [
              { part: "a", reasoning: "Equate the line and the curve.", working: "x^2=2x+3\\Rightarrow x^2-2x-3=0", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Solve the quadratic.", working: "x=-1\\ \\text{or}\\ x=3", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Test a value inside the interval, e.g. $x=0$: line gives $3$, curve gives $0$.", working: "2(0)+3=3>0^2", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Subtract the lower curve from the upper curve.", working: "A=\\int_{-1}^{3}(2x+3-x^2)\\,dx", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Integrate.", working: "\\left[x^2+3x-\\frac{x^3}{3}\\right]_{-1}^{3}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Evaluate: $9-(1-3+\\frac13)=9+\\frac53$.", working: "A=\\frac{32}{3}", marks: 1, markCode: "A" },
              { part: "e", reasoning: "Convert to 3 significant figures.", working: "A\\approx10.7", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $x=-1,\\ 3$ (b) shown (c) $\\int_{-1}^{3}(2x+3-x^2)\\,dx$ (d) $\\frac{32}{3}$ (e) $10.7$",
            commonErrors: ["Sign errors when evaluating at the lower limit $-1$."],
          },
        },
        {
          id: "aasl-u6-area-between-curves-q16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "The curve $y=x^2$ and the line $y=2-x$ intersect at two points.",
          parts: [
            { label: "a", prompt: "Find the coordinates of the points of intersection.", marks: 2 },
            { label: "b", prompt: "Show that the area $A$ of the enclosed region is given by $A=\\displaystyle\\int_{-2}^{1}(2-x-x^2)\\,dx$.", marks: 2 },
            { label: "c", prompt: "Find the exact value of $A$.", marks: 2 },
            { label: "d", prompt: "Find the area enclosed between the curves $y=x^2$ and $y=x$ for $0\\le x\\le1$.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Area between curves", statement: "$A=\\int_a^b(\\text{upper}-\\text{lower})\\,dx$" },
            ],
            steps: [
              { part: "a", reasoning: "Equate the curve and the line.", working: "x^2=2-x\\Rightarrow x^2+x-2=0", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Solve and find the $y$-coordinates.", working: "x=1\\ \\text{or}\\ x=-2;\\ (1,1)\\ \\text{and}\\ (-2,4)", marks: 1, markCode: "A" },
              { part: "b", reasoning: "On $(-2,1)$ the line is above the curve (e.g. at $x=0$: $2>0$).", working: "A=\\int_{-2}^{1}(2-x-x^2)\\,dx", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the integrand (AG).", working: "2-x-x^2", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Integrate and substitute the limits.", working: "\\left[2x-\\frac{x^2}{2}-\\frac{x^3}{3}\\right]_{-2}^{1}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate: $\\frac76-\\left(-\\frac{10}{3}\\right)=\\frac{27}{6}$.", working: "A=\\frac92", marks: 1, markCode: "A" },
              { part: "d", reasoning: "For $0<x<1$, $x>x^2$.", working: "\\int_0^1(x-x^2)\\,dx", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Evaluate.", working: "\\left[\\frac{x^2}{2}-\\frac{x^3}{3}\\right]_0^1=\\frac16", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $(1,1)$ and $(-2,4)$ (b) shown (c) $\\frac92$ (d) $\\frac16$",
            commonErrors: ["Using the wrong sign when evaluating at $x=-2$."],
          },
        },
      ],
    },
  ],
};
