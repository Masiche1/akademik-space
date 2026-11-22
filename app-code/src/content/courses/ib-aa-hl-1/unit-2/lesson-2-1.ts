import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "aahl-u2-lesson-2-1",
  code: "2-1",
  title: "Polynomials",
  goal: "I CAN use the factor and remainder theorems, and relate the roots of a polynomial to its coefficients.",
  standards: ["AHL 2.12"],
  vocabulary: [
    { term: "Remainder theorem", definition: "When a polynomial $p(x)$ is divided by $(x-a)$, the remainder is $p(a)$." },
    { term: "Factor theorem", definition: "$(x-a)$ is a factor of $p(x)$ if and only if $p(a)=0$." },
    { term: "Polynomial long division", definition: "A method of dividing one polynomial by another to give a quotient and a remainder of lower degree than the divisor." },
    { term: "Sum and product of roots", definition: "For $ax^n+bx^{n-1}+\\cdots=0$ with roots $\\alpha_1,\\ldots,\\alpha_n$, the sum of the roots is $-\\frac ba$ and the product is $(-1)^n\\frac{\\text{constant}}{a}$." },
    { term: "Multiplicity", definition: "The number of times a factor $(x-a)$ appears in a polynomial. A graph crosses the axis at a root of odd multiplicity and touches it at a root of even multiplicity." },
  ],
  concepts: [
    {
      id: "aahl-u2-factor-remainder",
      title: "Factor and remainder theorems",
      skill: "Use $p(a)$ to find remainders and factors, divide polynomials, and find unknown coefficients.",
      lesson: {
        sections: [
          {
            heading: "Remainder and factor theorems",
            body: "Dividing $p(x)$ by $(x-a)$ gives $p(x)=(x-a)q(x)+r$, where $r$ is a constant. Substituting $x=a$ shows $r=p(a)$. For a divisor $(ax-b)$ the remainder is $p\\left(\\frac ba\\right)$. If $p(a)=0$ then $(x-a)$ is a factor. Unknown coefficients are found by forming equations from known factors or remainders.",
          },
          {
            heading: "Dividing and factorizing",
            body: "Once one factor is found, divide (long division or inspection) to obtain a quotient of lower degree and factorize that fully. Candidates for integer roots of a monic polynomial are the factors of the constant term. Check the factorization by expanding.",
          },
        ],
        keyFormulas: [
          { name: "Remainder theorem", statement: "$p(x)\\div(x-a)$ has remainder $p(a)$" },
          { name: "Factor theorem", statement: "$p(a)=0\\iff(x-a)\\text{ divides }p(x)$" },
        ],
        workedExample: {
          problem: "Find the remainder when $p(x)=2x^3+x-4$ is divided by $(x+1)$.",
          solution: "The remainder is $p(-1)=2(-1)^3+(-1)-4=-2-1-4=-7$.",
        },
      },
      questions: [
        {
          id: "aahl-u2-factor-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Find the remainder when $p(x)=x^3-2x+5$ is divided by $(x-2)$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$17$" },
              { id: "b", text: "$1$" },
              { id: "c", text: "$9$" },
              { id: "d", text: "$5$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Remainder theorem", statement: "The remainder on dividing $p(x)$ by $(x-a)$ is $p(a)$." },
            ],
            steps: [
              { reasoning: "Evaluate $p(2)$.", working: "p(2)=8-4+5", marks: 1, markCode: "M" },
              { reasoning: "Simplify.", working: "9", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** $9$",
            commonErrors: ["Evaluating $p(-2)=1$, using the sign of the divisor's constant.", "Taking the constant term $5$ as the remainder."],
          },
        },
        {
          id: "aahl-u2-factor-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "The polynomial $p(x)=2x^3+kx^2-5x+6$ has $(x-2)$ as a factor. Find the value of $k$.",
          response: { type: "numeric", parts: [{ label: "$k$", answer: -3 }] },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Factor theorem", statement: "$(x-a)$ is a factor of $p(x)$ if and only if $p(a)=0$." },
            ],
            steps: [
              { reasoning: "Since $(x-2)$ is a factor, $p(2)=0$.", working: "2(8)+k(4)-5(2)+6=0", marks: 1, markCode: "M" },
              { reasoning: "Simplify: $16+4k-10+6=12+4k$.", working: "12+4k=0", marks: 1, markCode: "A" },
              { reasoning: "Solve.", working: "k=-3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$k=-3$",
            commonErrors: ["Using $p(-2)=0$.", "Arithmetic slip in $-5(2)$."],
          },
        },
        {
          id: "aahl-u2-factor-q3",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 4,
          stem: "The polynomial $p(x)=x^3+ax^2+bx-6$, where $a,b\\in\\mathbb{R}$, has $(x+1)$ as a factor. When $p(x)$ is divided by $(x-1)$ the remainder is $-4$. Find the values of $a$ and $b$.",
          response: { type: "numeric", parts: [{ label: "$a$", answer: 4 }, { label: "$b$", answer: -3 }] },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Factor theorem", statement: "$(x+1)$ a factor means $p(-1)=0$." },
              { kind: "theorem", name: "Remainder theorem", statement: "Remainder on division by $(x-1)$ is $p(1)$." },
            ],
            steps: [
              { reasoning: "Use $p(-1)=0$.", working: "-1+a-b-6=0\\Rightarrow a-b=7", marks: 1, markCode: "M" },
              { reasoning: "Use $p(1)=-4$.", working: "1+a+b-6=-4\\Rightarrow a+b=1", marks: 1, markCode: "M" },
              { reasoning: "Add the equations: $2a=8$.", working: "a=4", marks: 1, markCode: "A" },
              { reasoning: "Substitute back.", working: "b=1-4=-3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$a=4$, $b=-3$",
            commonErrors: ["Setting $p(1)=0$ instead of $p(1)=-4$.", "Sign error in $-b$ when evaluating $p(-1)$."],
            examinerNote: "Check: $p(x)=x^3+4x^2-3x-6$; $p(1)=-4$, $p(-1)=-1+4+3-6=0$.",
          },
        },
        {
          id: "aahl-u2-factor-q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 9,
          stem: "Let $p(x)=2x^3-3x^2-11x+6$.",
          parts: [
            { label: "a", prompt: "Show that $(x-3)$ is a factor of $p(x)$.", marks: 2 },
            { label: "b", prompt: "Hence factorize $p(x)$ completely and solve $p(x)=0$.", marks: 3 },
            { label: "c", prompt: "Find the remainder when $p(x)$ is divided by $(x-1)$.", marks: 2 },
            { label: "d", prompt: "Find the value of $k$ such that $(x+1)$ is a factor of $p(x)+k$.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Factor and remainder theorems", statement: "Remainder on division by $(x-a)$ is $p(a)$; the remainder is zero exactly when $(x-a)$ is a factor." },
            ],
            steps: [
              { part: "a", reasoning: "Evaluate $p(3)$.", working: "p(3)=54-27-33+6", marks: 1, markCode: "M" },
              { part: "a", reasoning: "The value is zero, so $(x-3)$ is a factor.", working: "p(3)=0\\quad\\text{(AG)}", marks: 1, markCode: "R" },
              { part: "b", reasoning: "Divide by $(x-3)$ to obtain a quadratic quotient.", working: "p(x)=(x-3)(2x^2+3x-2)", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Factorize the quadratic.", working: "p(x)=(x-3)(2x-1)(x+2)", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Set each factor to zero.", working: "x=3,\\ \\tfrac12,\\ -2", marks: 1, markCode: "A" },
              { part: "c", reasoning: "The remainder is $p(1)$.", working: "p(1)=2-3-11+6", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "-6", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Factor theorem on $p(x)+k$: $p(-1)+k=0$ with $p(-1)=-2-3+11+6=12$.", working: "12+k=0", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Solve.", working: "k=-12", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $p(3)=0$ (b) $(x-3)(2x-1)(x+2)$; $x=3,\\frac12,-2$ (c) $-6$ (d) $k=-12$",
            commonErrors: ["In (d), setting $p(-1)=k$ instead of $p(-1)+k=0$.", "Dropping the factor $2$ in $(2x-1)$."],
          },
        },
        {
          id: "aahl-u2-factor-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Find the remainder when $p(x)=x^3-3x^2+2x-1$ is divided by $(x+2)$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$-17$" },
              { id: "b", text: "$5$" },
              { id: "c", text: "$-25$" },
              { id: "d", text: "$25$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Remainder theorem", statement: "The remainder on dividing $p(x)$ by $(x-a)$ is $p(a)$." },
            ],
            steps: [
              { reasoning: "The divisor $(x+2)$ corresponds to $a=-2$, so the remainder is $p(-2)$.", working: "p(-2)=(-2)^3-3(-2)^2+2(-2)-1", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "-8-12-4-1=-25", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** $-25$",
            commonErrors: ["Using $p(2)=17$ instead of $p(-2)$.", "Sign slip in $-3(-2)^2=-12$."],
          },
        },
        {
          id: "aahl-u2-factor-q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Which of the following is a factor of $p(x)=x^3-2x^2-5x+6$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$(x+1)$" },
              { id: "b", text: "$(x-2)$" },
              { id: "c", text: "$(x+3)$" },
              { id: "d", text: "$(x-1)$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Factor theorem", statement: "$(x-a)$ is a factor of $p(x)$ if and only if $p(a)=0$." },
            ],
            steps: [
              { reasoning: "Test $x=1$ first.", working: "p(1)=1-2-5+6=0", marks: 1, markCode: "M" },
              { reasoning: "Since $p(1)=0$, $(x-1)$ divides $p(x)$.", working: "(x-1)\\mid p(x)", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** $(x-1)$",
            commonErrors: ["Testing $p(-1)=8$ and concluding no factor exists.", "Assuming $(x+1)$ is a factor because the constant term is even."],
          },
        },
        {
          id: "aahl-u2-factor-q7",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "When the polynomial $p(x)$ is divided by $(2x-3)$, the remainder is equal to",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$p\\left(\\frac{2}{3}\\right)$" },
              { id: "b", text: "$p\\left(-\\frac{3}{2}\\right)$" },
              { id: "c", text: "$p\\left(\\frac{3}{2}\\right)$" },
              { id: "d", text: "$p(3)$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Remainder theorem", statement: "For a divisor $(ax-b)$ the remainder on dividing $p(x)$ is $p\\left(\\frac ba\\right)$." },
            ],
            steps: [
              { reasoning: "Set $2x-3=0$ to find the value to substitute.", working: "x=\\frac{3}{2}", marks: 1, markCode: "M" },
              { reasoning: "State the remainder.", working: "R=p\\left(\\tfrac{3}{2}\\right)", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** $p\\left(\\frac32\\right)$",
            commonErrors: ["Inverting the fraction to $\\frac23$.", "Using $p(3)$ instead of $p\\left(\\frac32\\right)$."],
          },
        },
        {
          id: "aahl-u2-factor-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "When $x^3-2x^2-x+2$ is divided by $(x-1)$, the quotient is",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x^2-x-2$" },
              { id: "b", text: "$x^2-x+2$" },
              { id: "c", text: "$x^2+x-2$" },
              { id: "d", text: "$x^2-2x-1$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Polynomial division", statement: "Dividend $=$ divisor $\\times$ quotient $+$ remainder." },
            ],
            steps: [
              { reasoning: "Expand the candidate factorization to verify.", working: "(x-1)(x^2-x-2)=x^3-2x^2-x+2", marks: 1, markCode: "M" },
              { reasoning: "The expansion matches, so the quotient is the quadratic factor.", working: "x^2-x-2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $x^2-x-2$",
            commonErrors: ["Sign error in the middle term of the quotient.", "Forgetting that $(x-1)$ is exact since $p(1)=0$."],
          },
        },
        {
          id: "aahl-u2-factor-q9",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "If $p(x)$ is a polynomial and $p(4)=0$, which statement must be true?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$(x-4)$ is a factor of $p(x)$" },
              { id: "b", text: "$p(x)$ has no real roots" },
              { id: "c", text: "$(x+4)$ is a factor of $p(x)$" },
              { id: "d", text: "The remainder on division by $(x-4)$ is $4$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Factor theorem", statement: "$(x-a)$ is a factor of $p(x)$ if and only if $p(a)=0$." },
            ],
            steps: [
              { reasoning: "Apply the factor theorem with $a=4$.", working: "p(4)=0\\Rightarrow(x-4)\\mid p(x)", marks: 1, markCode: "M" },
              { reasoning: "Select the matching statement.", working: "(x-4)\\text{ is a factor of }p(x)", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $(x-4)$ is a factor of $p(x)$",
            commonErrors: ["Choosing $(x+4)$, confusing $p(4)=0$ with $p(-4)=0$.", "Choosing the remainder option; the remainder is $0$, not $4$."],
          },
        },
        {
          id: "aahl-u2-factor-q10",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Find the remainder when $p(x)=x^3+2x-5$ is divided by $(x-1)$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$-2$" },
              { id: "b", text: "$8$" },
              { id: "c", text: "$2$" },
              { id: "d", text: "$-4$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Remainder theorem", statement: "The remainder on dividing $p(x)$ by $(x-a)$ is $p(a)$." },
            ],
            steps: [
              { reasoning: "Evaluate $p(1)$.", working: "p(1)=1+2-5", marks: 1, markCode: "M" },
              { reasoning: "Simplify.", working: "-2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $-2$",
            commonErrors: ["Dropping the constant term $-5$.", "Taking the remainder as $p(-1)=-8$."],
          },
        },
        {
          id: "aahl-u2-factor-q11",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Find the remainder when $p(x)=x^3+3x^2-2x+7$ is divided by $(x+1)$.",
          response: { type: "numeric", parts: [{ label: "Remainder", answer: 11 }] },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Remainder theorem", statement: "The remainder on dividing $p(x)$ by $(x-a)$ is $p(a)$; for $(x+1)$ evaluate $p(-1)$." },
            ],
            steps: [
              { reasoning: "The remainder is $p(-1)$.", working: "p(-1)=-1+3+2+7", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "11", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$11$",
            commonErrors: ["Evaluating $p(1)=9$ instead of $p(-1)$.", "Sign error on $-2(-1)=+2$."],
          },
        },
        {
          id: "aahl-u2-factor-q12",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "The polynomial $p(x)=2x^3+kx^2-x+6$ has $(x-1)$ as a factor. Find the value of $k$.",
          response: { type: "numeric", parts: [{ label: "$k$", answer: -7 }] },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Factor theorem", statement: "$(x-1)$ is a factor of $p(x)$ if and only if $p(1)=0$." },
            ],
            steps: [
              { reasoning: "Set $p(1)=0$ and simplify.", working: "2+k-1+6=0\\Rightarrow7+k=0", marks: 1, markCode: "M" },
              { reasoning: "Solve.", working: "k=-7", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$k=-7$",
            commonErrors: ["Using $p(-1)=0$, which gives $k=-9$.", "Arithmetic slip in $2-1+6=7$."],
          },
        },
        {
          id: "aahl-u2-factor-q13",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 4,
          stem: "The polynomial $p(x)=x^3+ax^2+bx-4$, where $a,b\\in\\mathbb{R}$, has $(x-1)$ as a factor and leaves a remainder of $-6$ when divided by $(x+2)$. Find the values of $a$ and $b$.",
          response: { type: "numeric", parts: [{ label: "$a$", answer: 2 }, { label: "$b$", answer: 1 }] },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Factor theorem", statement: "$(x-1)$ a factor means $p(1)=0$." },
              { kind: "theorem", name: "Remainder theorem", statement: "Remainder on division by $(x+2)$ is $p(-2)$." },
            ],
            steps: [
              { reasoning: "Use $p(1)=0$.", working: "1+a+b-4=0\\Rightarrow a+b=3", marks: 1, markCode: "M" },
              { reasoning: "Use $p(-2)=-6$.", working: "-8+4a-2b-4=-6\\Rightarrow 2a-b=3", marks: 1, markCode: "M" },
              { reasoning: "Solve the simultaneous equations: $a=2$.", working: "a=2", marks: 1, markCode: "A" },
              { reasoning: "Substitute back.", working: "b=3-2=1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$a=2$, $b=1$",
            commonErrors: ["Using $p(2)=-6$ instead of $p(-2)=-6$.", "Sign error in $4a-2b$ when expanding $p(-2)$."],
            examinerNote: "Check: $p(x)=x^3+2x^2+x-4$; $p(1)=0$, $p(-2)=-8+8-2-4=-6$.",
          },
        },
        {
          id: "aahl-u2-factor-q14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 9,
          stem: "Let $p(x)=2x^3+x^2-13x+6$.",
          parts: [
            { label: "a", prompt: "Show that $(x-2)$ is a factor of $p(x)$.", marks: 2 },
            { label: "b", prompt: "Hence factorize $p(x)$ completely and write down the roots of $p(x)=0$.", marks: 3 },
            { label: "c", prompt: "Find the remainder when $p(x)$ is divided by $(x+1)$.", marks: 2 },
            { label: "d", prompt: "Find the value of $k$ for which $(x-3)$ is a factor of $p(x)+k$.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Factor and remainder theorems", statement: "Remainder on division by $(x-a)$ is $p(a)$; the remainder is zero exactly when $(x-a)$ is a factor." },
            ],
            steps: [
              { part: "a", reasoning: "Evaluate $p(2)$.", working: "p(2)=16+4-26+6", marks: 1, markCode: "M" },
              { part: "a", reasoning: "The value is zero, so $(x-2)$ is a factor.", working: "p(2)=0\\quad\\text{(AG)}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Divide by $(x-2)$ to obtain a quadratic quotient.", working: "p(x)=(x-2)(2x^2+5x-3)", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Factorize the quadratic.", working: "p(x)=(x-2)(2x-1)(x+3)", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Set each factor to zero.", working: "x=2,\\ \\tfrac12,\\ -3", marks: 1, markCode: "A" },
              { part: "c", reasoning: "The remainder is $p(-1)$.", working: "p(-1)=-2+1+13+6", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "18", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Factor theorem on $p(x)+k$: $p(3)+k=0$ with $p(3)=54+9-39+6=30$.", working: "30+k=0", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Solve.", working: "k=-30", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $p(2)=0$ (b) $(x-2)(2x-1)(x+3)$; $x=2,\\frac12,-3$ (c) $18$ (d) $k=-30$",
            commonErrors: ["In (d), setting $p(3)=k$ instead of $p(3)+k=0$.", "Dropping the factor $2$ in $(2x-1)$."],
          },
        },
        {
          id: "aahl-u2-factor-q15",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 6,
          stem: "The polynomial $p(x)=x^3-ax^2+bx-6$, where $a,b\\in\\mathbb{R}$, has $(x-1)$ as a factor and leaves a remainder of $-10$ when divided by $(x-2)$.",
          parts: [
            { label: "a", prompt: "Write down two equations in $a$ and $b$.", marks: 2 },
            { label: "b", prompt: "Solve these equations.", marks: 2 },
            { label: "c", prompt: "Hence express $p(x)$ in the form $(x-1)(x^2+px+q)$ and find the sum of the roots of $p(x)=0$.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Factor and remainder theorems", statement: "Factor: $p(1)=0$; remainder on $(x-2)$: $p(2)=-10$." },
            ],
            steps: [
              { part: "a", reasoning: "From $p(1)=0$.", working: "1-a+b-6=0\\Rightarrow b-a=5", marks: 1, markCode: "M" },
              { part: "a", reasoning: "From $p(2)=-10$.", working: "2-4a+2b=-10\\Rightarrow 2a-b=6", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Add the equations: $a=11$.", working: "a=11", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Substitute back.", working: "b=16", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Divide $x^3-11x^2+16x-6$ by $(x-1)$.", working: "p(x)=(x-1)(x^2-10x+6)", marks: 1, markCode: "M" },
              { part: "c", reasoning: "The sum of the roots equals $-\\frac{b}{a}=11$ for the cubic.", working: "11", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $b-a=5$, $2a-b=6$ (b) $a=11$, $b=16$ (c) $p(x)=(x-1)(x^2-10x+6)$; sum of roots $11$",
            commonErrors: ["Using $p(2)=0$ rather than $p(2)=-10$.", "Sign error expanding $p(-1)$ or $p(2)$ terms."],
            examinerNote: "Check: $(x-1)(x^2-10x+6)=x^3-11x^2+16x-6$.",
          },
        },
        {
          id: "aahl-u2-factor-q16",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "Find the remainder when $p(x)=x^3-2x^2+3x-4$ is divided by $(x-3)$.",
          response: { type: "numeric", parts: [{ label: "Remainder", answer: 14 }] },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Remainder theorem", statement: "The remainder on dividing $p(x)$ by $(x-a)$ is $p(a)$." },
            ],
            steps: [
              { reasoning: "Evaluate $p(3)$.", working: "p(3)=27-18+9-4", marks: 1, markCode: "M" },
              { reasoning: "Simplify.", working: "14", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$14$",
            commonErrors: ["Evaluating $p(-3)=-40$.", "Arithmetic slip in $27-18+9-4$."],
          },
        },
      ],
    },
    {
      id: "aahl-u2-roots-coefficients",
      title: "Sum and product of roots",
      skill: "Use Vieta's relations between roots and coefficients and use roots and multiplicity to analyse polynomial graphs.",
      lesson: {
        sections: [
          {
            heading: "Relations between roots and coefficients",
            body: "For $ax^2+bx+c=0$ with roots $\\alpha,\\beta$: $\\alpha+\\beta=-\\frac ba$ and $\\alpha\\beta=\\frac ca$. For the cubic $ax^3+bx^2+cx+d=0$ with roots $\\alpha,\\beta,\\gamma$: $\\alpha+\\beta+\\gamma=-\\frac ba$, $\\alpha\\beta+\\beta\\gamma+\\gamma\\alpha=\\frac ca$ and $\\alpha\\beta\\gamma=-\\frac da$. These follow from expanding $a(x-\\alpha)(x-\\beta)(x-\\gamma)$ and comparing coefficients.",
          },
          {
            heading: "Symmetric expressions and graphs",
            body: "Expressions such as $\\alpha^2+\\beta^2+\\gamma^2$ are found without solving: $\\alpha^2+\\beta^2+\\gamma^2=(\\alpha+\\beta+\\gamma)^2-2(\\alpha\\beta+\\beta\\gamma+\\gamma\\alpha)$. On a graph, roots are the $x$-intercepts: the graph crosses at a root of odd multiplicity and touches the axis at a root of even multiplicity. The $y$-intercept is the constant term.",
          },
        ],
        keyFormulas: [
          { name: "Cubic relations", statement: "$\\sum\\alpha=-\\frac ba,\\ \\sum\\alpha\\beta=\\frac ca,\\ \\alpha\\beta\\gamma=-\\frac da$" },
          { name: "Sum of squares", statement: "$\\sum\\alpha^2=(\\sum\\alpha)^2-2\\sum\\alpha\\beta$" },
        ],
        workedExample: {
          problem: "The roots of $x^2-5x+3=0$ are $\\alpha,\\beta$. Find $\\alpha^2+\\beta^2$.",
          solution: "$\\alpha+\\beta=5$ and $\\alpha\\beta=3$, so $\\alpha^2+\\beta^2=(\\alpha+\\beta)^2-2\\alpha\\beta=25-6=19$.",
        },
      },
      questions: [
        {
          id: "aahl-u2-roots-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 1,
          stem: "What is the sum of the roots of $2x^3-6x^2+x-4=0$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$2$" },
              { id: "b", text: "$6$" },
              { id: "c", text: "$3$" },
              { id: "d", text: "$-3$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Sum of roots", statement: "For $ax^3+bx^2+\\cdots$ the sum of the roots is $-\\frac ba$." },
            ],
            steps: [
              { reasoning: "Use $-\\frac ba$ with $a=2$, $b=-6$.", working: "-\\frac{-6}{2}=3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** $3$",
            commonErrors: ["Forgetting the negative sign in $-\\frac ba$.", "Not dividing by the leading coefficient."],
          },
        },
        {
          id: "aahl-u2-roots-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "The roots of $2x^3-8x^2+5x-3=0$ are $\\alpha,\\beta,\\gamma$. Find the value of $\\alpha^2+\\beta^2+\\gamma^2$.",
          response: { type: "numeric", parts: [{ label: "$\\alpha^2+\\beta^2+\\gamma^2$", answer: 11 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Roots of a cubic", statement: "$\\sum\\alpha=-\\frac ba$ and $\\sum\\alpha\\beta=\\frac ca$." },
              { kind: "property", name: "Sum of squares", statement: "$\\sum\\alpha^2=(\\sum\\alpha)^2-2\\sum\\alpha\\beta$." },
            ],
            steps: [
              { reasoning: "Find the sum and the sum of pairwise products.", working: "\\sum\\alpha=4,\\quad \\sum\\alpha\\beta=\\tfrac52", marks: 1, markCode: "A" },
              { reasoning: "Use the identity for the sum of squares.", working: "4^2-2\\left(\\tfrac52\\right)", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "16-5=11", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$11$",
            commonErrors: ["Using $\\sum\\alpha\\beta=5$ (not dividing by $2$).", "Computing $4^2-\\frac52$."],
          },
        },
        {
          id: "aahl-u2-roots-q3",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 4,
          stem: "The roots of $x^3-6x^2+ax+b=0$, where $a,b\\in\\mathbb{R}$, form an arithmetic sequence with common difference $3$. Find the values of $a$ and $b$.",
          response: { type: "numeric", parts: [{ label: "$a$", answer: 3 }, { label: "$b$", answer: 10 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Roots of a cubic", statement: "$\\sum\\alpha=-\\frac ba$, $\\sum\\alpha\\beta=\\frac ca$, $\\alpha\\beta\\gamma=-\\frac da$." },
            ],
            steps: [
              { reasoning: "Let the roots be $m-3,\\ m,\\ m+3$ and use the sum of roots $=6$.", working: "3m=6\\Rightarrow m=2", marks: 1, markCode: "M" },
              { reasoning: "The roots are $-1, 2, 5$. Use the sum of products in pairs.", working: "a=(-1)(2)+(-1)(5)+(2)(5)=3", marks: 1, markCode: "A" },
              { reasoning: "Use the product of the roots $=-b$.", working: "(-1)(2)(5)=-b", marks: 1, markCode: "M" },
              { reasoning: "Solve.", working: "b=10", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$a=3$, $b=10$",
            commonErrors: ["Using product of roots $=b$ rather than $-b$.", "Writing the roots as $m, m+3, m+6$ and not simplifying the sum correctly."],
            examinerNote: "Check: $(x+1)(x-2)(x-5)=x^3-6x^2+3x+10$.",
          },
        },
        {
          id: "aahl-u2-roots-q4",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 12,
          stem: "The cubic $x^3+px+q=0$ has roots $\\alpha,\\beta,\\gamma$ (there is no $x^2$ term). Let $S_k=\\alpha^k+\\beta^k+\\gamma^k$. This question investigates $S_2$, $S_3$ and $S_4$.",
          parts: [
            { label: "a", prompt: "Show that $x=1$ is a root of $x^3-7x+6=0$ and hence find all its roots.", marks: 3 },
            { label: "b", prompt: "For $x^3-7x+6=0$, calculate $S_2$.", marks: 1 },
            { label: "c", prompt: "For the general cubic, show that $S_2=-2p$.", marks: 2 },
            { label: "d", prompt: "Use the fact that each root satisfies $x^3=-px-q$ to show that $S_3=-3q$.", marks: 3 },
            { label: "e", prompt: "Hence prove that $S_4=2p^2$, and verify this for $x^3-7x+6=0$.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Roots of a cubic with no $x^2$ term", statement: "$\\alpha+\\beta+\\gamma=0$, $\\alpha\\beta+\\beta\\gamma+\\gamma\\alpha=p$, $\\alpha\\beta\\gamma=-q$." },
              { kind: "property", name: "Root satisfies its equation", statement: "$\\alpha^3+p\\alpha+q=0$, and similarly for $\\beta,\\gamma$." },
            ],
            steps: [
              { part: "a", reasoning: "Substitute $x=1$.", working: "1-7+6=0", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Divide by $(x-1)$.", working: "x^3-7x+6=(x-1)(x^2+x-6)=(x-1)(x+3)(x-2)", marks: 1, markCode: "A" },
              { part: "a", reasoning: "State the roots.", working: "x=1,\\ 2,\\ -3", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Square and add.", working: "S_2=1+4+9=14", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Use $S_2=(\\sum\\alpha)^2-2\\sum\\alpha\\beta$ with $\\sum\\alpha=0$ and $\\sum\\alpha\\beta=p$.", working: "S_2=0^2-2p", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Simplify.", working: "S_2=-2p\\quad\\text{(AG; check: }p=-7\\text{ gives }14\\text{)}", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Write $\\alpha^3=-p\\alpha-q$ and similarly for $\\beta$ and $\\gamma$.", working: "\\alpha^3=-p\\alpha-q,\\ \\beta^3=-p\\beta-q,\\ \\gamma^3=-p\\gamma-q", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Add the three equations.", working: "S_3=-p(\\alpha+\\beta+\\gamma)-3q", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Use $\\alpha+\\beta+\\gamma=0$.", working: "S_3=-3q\\quad\\text{(AG)}", marks: 1, markCode: "R" },
              { part: "e", reasoning: "Multiply $\\alpha^3=-p\\alpha-q$ by $\\alpha$ (and similarly for the other roots) and add.", working: "S_4=-pS_2-q(\\alpha+\\beta+\\gamma)", marks: 1, markCode: "M" },
              { part: "e", reasoning: "Substitute $S_2=-2p$ and $\\sum\\alpha=0$.", working: "S_4=-p(-2p)-0=2p^2", marks: 1, markCode: "R" },
              { part: "e", reasoning: "Verify for $x^3-7x+6=0$: $1+16+81=98$ and $2(-7)^2=98$.", working: "98=98", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) roots $1,2,-3$ (b) $14$ (c) $S_2=-2p$ (d) $S_3=-3q$ (e) $S_4=2p^2$; $98=98$",
            commonErrors: ["Using $\\sum\\alpha\\beta=-p$.", "In (d), forgetting that $q$ is added three times (once per root)."],
            examinerNote: "Check of (d): $S_3=1+8-27=-18=-3(6)$ since $q=6$.",
          },
        },
        {
          id: "aahl-u2-roots-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "What is the sum of the roots of $3x^3+6x^2-2x+1=0$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$6$" },
              { id: "b", text: "$-6$" },
              { id: "c", text: "$-2$" },
              { id: "d", text: "$2$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Sum of roots", statement: "For $ax^3+bx^2+\\cdots=0$ the sum of the roots is $-\\frac ba$." },
            ],
            steps: [
              { reasoning: "Use $-\\frac ba$ with $a=3$, $b=6$.", working: "-\\frac{6}{3}", marks: 1, markCode: "M" },
              { reasoning: "Simplify.", working: "-2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** $-2$",
            commonErrors: ["Forgetting the negative sign, giving $2$.", "Not dividing by the leading coefficient, giving $6$."],
          },
        },
        {
          id: "aahl-u2-roots-q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "What is the product of the roots of $x^3-4x^2+2x-9=0$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$-4$" },
              { id: "b", text: "$4$" },
              { id: "c", text: "$-9$" },
              { id: "d", text: "$9$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Product of roots", statement: "For $ax^3+bx^2+cx+d=0$ the product of the roots is $-\\frac da$." },
            ],
            steps: [
              { reasoning: "Apply the formula with $d=-9$, $a=1$.", working: "-\\frac{-9}{1}", marks: 1, markCode: "M" },
              { reasoning: "Simplify.", working: "9", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** $9$",
            commonErrors: ["Forgetting the leading minus sign and giving $-9$.", "Using $\\frac da$ to get $-9$."],
          },
        },
        {
          id: "aahl-u2-roots-q7",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "What is the sum of the roots of $x^2-7x+2=0$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$-2$" },
              { id: "b", text: "$2$" },
              { id: "c", text: "$7$" },
              { id: "d", text: "$-7$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Sum of roots", statement: "For $ax^2+bx+c=0$ the sum of the roots is $-\\frac ba$." },
            ],
            steps: [
              { reasoning: "Apply the formula with $a=1$, $b=-7$.", working: "-\\frac{-7}{1}", marks: 1, markCode: "M" },
              { reasoning: "Simplify.", working: "7", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** $7$",
            commonErrors: ["Giving $-7$ by missing the double negative.", "Confusing the sum with the product $2$."],
          },
        },
        {
          id: "aahl-u2-roots-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "What is the product of the roots of $x^2+5x-3=0$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$-5$" },
              { id: "b", text: "$5$" },
              { id: "c", text: "$3$" },
              { id: "d", text: "$-3$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Product of roots", statement: "For $ax^2+bx+c=0$ the product of the roots is $\\frac ca$." },
            ],
            steps: [
              { reasoning: "Apply the formula with $c=-3$, $a=1$.", working: "\\frac{-3}{1}", marks: 1, markCode: "M" },
              { reasoning: "Simplify.", working: "-3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** $-3$",
            commonErrors: ["Using $-\\frac ca$ (the cubic rule) to get $3$.", "Using $b$ instead of $c$."],
          },
        },
        {
          id: "aahl-u2-roots-q9",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Which polynomial has roots $1$, $2$ and $3$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x^3-6x^2+11x-6$" },
              { id: "b", text: "$x^3-6x^2-11x-6$" },
              { id: "c", text: "$x^3-11x^2+6x-1$" },
              { id: "d", text: "$x^3+6x^2+11x+6$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Roots and coefficients", statement: "A monic polynomial with roots $\\alpha,\\beta,\\gamma$ is $(x-\\alpha)(x-\\beta)(x-\\gamma)$." },
            ],
            steps: [
              { reasoning: "Expand $(x-1)(x-2)(x-3)$.", working: "(x-1)(x-2)=x^2-3x+2;\\ (x^2-3x+2)(x-3)", marks: 1, markCode: "M" },
              { reasoning: "Complete the expansion and compare.", working: "x^3-6x^2+11x-6", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $x^3-6x^2+11x-6$",
            commonErrors: ["All-positive coefficients (option b).", "Wrong sign on the $x$ term (option c)."],
          },
        },
        {
          id: "aahl-u2-roots-q10",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The graph of $y=(x-1)^2(x+2)$ touches the $x$-axis at which point?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$(-2,0)$" },
              { id: "b", text: "It does not touch the $x$-axis" },
              { id: "c", text: "$(1,0)$" },
              { id: "d", text: "It crosses the axis at both $(1,0)$ and $(-2,0)$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Multiplicity", statement: "A graph touches (does not cross) the axis at a root of even multiplicity and crosses at a root of odd multiplicity." },
            ],
            steps: [
              { reasoning: "Identify the repeated root.", working: "(x-1)^2\\text{ gives a double root at }x=1", marks: 1, markCode: "M" },
              { reasoning: "Even multiplicity means the graph touches the axis at $(1,0)$.", working: "(1,0)", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** $(1,0)$",
            commonErrors: ["Choosing $(-2,0)$, which is where the graph crosses.", "Claiming the graph crosses at $x=1$."],
          },
        },
        {
          id: "aahl-u2-roots-q11",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "The roots of $x^2+4x-1=0$ are $\\alpha$ and $\\beta$. Find $\\alpha^2+\\beta^2$.",
          response: { type: "numeric", parts: [{ label: "$\\alpha^2+\\beta^2$", answer: 18 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Roots of a quadratic", statement: "$\\alpha+\\beta=-\\frac ba$ and $\\alpha\\beta=\\frac ca$." },
              { kind: "property", name: "Sum of squares", statement: "$\\alpha^2+\\beta^2=(\\alpha+\\beta)^2-2\\alpha\\beta$." },
            ],
            steps: [
              { reasoning: "Find the sum and product of the roots.", working: "\\alpha+\\beta=-4,\\quad \\alpha\\beta=-1", marks: 1, markCode: "M" },
              { reasoning: "Apply the identity.", working: "(-4)^2-2(-1)", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "16+2=18", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$18$",
            commonErrors: ["Computing $16-2(-1)$ as $16-2$.", "Using $\\alpha\\beta=1$ (wrong sign of $c$)."],
          },
        },
        {
          id: "aahl-u2-roots-q12",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "The roots of $x^3+2x^2-5x+1=0$ are $\\alpha,\\beta,\\gamma$. Find $\\alpha\\beta+\\beta\\gamma+\\gamma\\alpha$.",
          response: { type: "numeric", parts: [{ label: "$\\alpha\\beta+\\beta\\gamma+\\gamma\\alpha$", answer: -5 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Roots of a cubic", statement: "For $ax^3+bx^2+cx+d=0$, $\\sum\\alpha\\beta=\\frac ca$." },
            ],
            steps: [
              { reasoning: "Identify the coefficients.", working: "a=1,\\ b=2,\\ c=-5,\\ d=1", marks: 1, markCode: "M" },
              { reasoning: "Apply the formula.", working: "\\frac ca=\\frac{-5}{1}", marks: 1, markCode: "M" },
              { reasoning: "State the value.", working: "-5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$-5$",
            commonErrors: ["Using $b$ instead of $c$ to get $2$.", "Giving $-\\frac ca=5$."],
          },
        },
        {
          id: "aahl-u2-roots-q13",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "The roots of $x^2-6x+4=0$ are $\\alpha$ and $\\beta$. Find $\\alpha^2+\\beta^2$.",
          response: { type: "numeric", parts: [{ label: "$\\alpha^2+\\beta^2$", answer: 28 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Roots of a quadratic", statement: "$\\alpha+\\beta=6$, $\\alpha\\beta=4$." },
              { kind: "property", name: "Sum of squares", statement: "$\\alpha^2+\\beta^2=(\\alpha+\\beta)^2-2\\alpha\\beta$." },
            ],
            steps: [
              { reasoning: "Find the sum and product.", working: "\\alpha+\\beta=6,\\quad \\alpha\\beta=4", marks: 1, markCode: "M" },
              { reasoning: "Apply the identity.", working: "6^2-2(4)", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "36-8=28", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$28$",
            commonErrors: ["Using $(\\alpha+\\beta)^2+2\\alpha\\beta=44$.", "Solving the quadratic and squaring roots (inefficient but valid)."],
          },
        },
        {
          id: "aahl-u2-roots-q14",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "The roots of $x^3-5x^2+7x-3=0$ are $\\alpha,\\beta,\\gamma$. Find $\\alpha\\beta\\gamma$.",
          response: { type: "numeric", parts: [{ label: "$\\alpha\\beta\\gamma$", answer: 3 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Product of roots", statement: "For $ax^3+bx^2+cx+d=0$, $\\alpha\\beta\\gamma=-\\frac da$." },
            ],
            steps: [
              { reasoning: "Apply the formula with $d=-3$, $a=1$.", working: "-\\frac{-3}{1}", marks: 1, markCode: "M" },
              { reasoning: "Simplify.", working: "3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$3$",
            commonErrors: ["Giving $-3$ by omitting the minus sign.", "Confusing product with $\\sum\\alpha\\beta=7$."],
          },
        },
        {
          id: "aahl-u2-roots-q15",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 7,
          stem: "The roots of $x^3-3x^2+5x-7=0$ are $\\alpha,\\beta,\\gamma$.",
          parts: [
            { label: "a", prompt: "Write down the values of $\\alpha+\\beta+\\gamma$, $\\alpha\\beta+\\beta\\gamma+\\gamma\\alpha$ and $\\alpha\\beta\\gamma$.", marks: 3 },
            { label: "b", prompt: "Find $\\alpha^2+\\beta^2+\\gamma^2$.", marks: 2 },
            { label: "c", prompt: "Find $(\\alpha-1)(\\beta-1)(\\gamma-1)$.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Roots of a cubic", statement: "$\\sum\\alpha=-\\frac ba$, $\\sum\\alpha\\beta=\\frac ca$, $\\alpha\\beta\\gamma=-\\frac da$." },
              { kind: "property", name: "Sum of squares", statement: "$\\sum\\alpha^2=(\\sum\\alpha)^2-2\\sum\\alpha\\beta$." },
            ],
            steps: [
              { part: "a", reasoning: "Apply the sum formula.", working: "\\alpha+\\beta+\\gamma=3", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Apply the pairwise sum formula.", working: "\\alpha\\beta+\\beta\\gamma+\\gamma\\alpha=5", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Apply the product formula.", working: "\\alpha\\beta\\gamma=7", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Use the identity for the sum of squares.", working: "3^2-2(5)", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "9-10=-1", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Expand the product.", working: "(\\alpha-1)(\\beta-1)(\\gamma-1)=\\alpha\\beta\\gamma-\\sum\\alpha\\beta+\\sum\\alpha-1", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Substitute the values from (a).", working: "7-5+3-1=4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $3$, $5$, $7$ (b) $-1$ (c) $4$",
            commonErrors: ["Using $\\alpha\\beta\\gamma=-7$ instead of $7$ in (a).", "Sign error expanding $(\\alpha-1)(\\beta-1)(\\gamma-1)$."],
            examinerNote: "Check (c): $-(1-3+5-7)=4$ since $(\\alpha-1)(\\beta-1)(\\gamma-1)=-f(1)$.",
          },
        },
        {
          id: "aahl-u2-roots-q16",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 12,
          stem: "This question investigates the cubic $x^3-6x^2+11x-6=0$ and generalizes the relations between its roots and coefficients.",
          parts: [
            { label: "a", prompt: "Show that $x=1$ is a root of $x^3-6x^2+11x-6=0$ and find the other roots.", marks: 3 },
            { label: "b", prompt: "For a general monic cubic $x^3+px^2+qx+r=0$ with roots $\\alpha,\\beta,\\gamma$, write down expressions for $\\alpha+\\beta+\\gamma$, $\\alpha\\beta+\\beta\\gamma+\\gamma\\alpha$ and $\\alpha\\beta\\gamma$ in terms of $p,q,r$.", marks: 2 },
            { label: "c", prompt: "Hence prove that $(\\alpha-1)(\\beta-1)(\\gamma-1)=-(1+p+q+r)$.", marks: 3 },
            { label: "d", prompt: "Use part (c) to write down the cubic whose roots are $\\alpha+1,\\beta+1,\\gamma+1$ for the cubic in part (a).", marks: 2 },
            { label: "e", prompt: "Show that $\\alpha^2+\\beta^2+\\gamma^2=p^2-2q$ for the general cubic.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Roots of a cubic", statement: "$\\sum\\alpha=-p$, $\\sum\\alpha\\beta=q$, $\\alpha\\beta\\gamma=-r$ for $x^3+px^2+qx+r=0$." },
              { kind: "property", name: "Root satisfies its equation", statement: "If $\\alpha$ is a root then $\\alpha^3+p\\alpha^2+q\\alpha+r=0$." },
            ],
            steps: [
              { part: "a", reasoning: "Substitute $x=1$.", working: "1-6+11-6=0", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Divide by $(x-1)$ and factorize.", working: "x^3-6x^2+11x-6=(x-1)(x-2)(x-3)", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the roots.", working: "x=1,\\ 2,\\ 3", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Write the sum and pairwise sum.", working: "\\alpha+\\beta+\\gamma=-p,\\quad \\alpha\\beta+\\beta\\gamma+\\gamma\\alpha=q", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Write the product.", working: "\\alpha\\beta\\gamma=-r", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Expand the product.", working: "(\\alpha-1)(\\beta-1)(\\gamma-1)=\\alpha\\beta\\gamma-\\sum\\alpha\\beta+\\sum\\alpha-1", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Substitute the relations.", working: "=-r-q-p-1", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Factor out the minus sign.", working: "=-(1+p+q+r)\\quad\\text{(AG)}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "The new roots are $2,3,4$.", working: "(x-2)(x-3)(x-4)", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Expand to find the cubic.", working: "x^3-9x^2+26x-24", marks: 1, markCode: "A" },
              { part: "e", reasoning: "Use the sum-of-squares identity.", working: "\\sum\\alpha^2=(\\sum\\alpha)^2-2\\sum\\alpha\\beta", marks: 1, markCode: "M" },
              { part: "e", reasoning: "Substitute $\\sum\\alpha=-p$ and $\\sum\\alpha\\beta=q$.", working: "(-p)^2-2q=p^2-2q\\quad\\text{(AG)}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) roots $1,2,3$ (b) $-p$, $q$, $-r$ (c) proved (d) $x^3-9x^2+26x-24$ (e) proved",
            commonErrors: ["Sign error in the expansion of $(\\alpha-1)(\\beta-1)(\\gamma-1)$.", "Using $p^2+2q$ in part (e)."],
            examinerNote: "Check (d): $(x-2)(x-3)(x-4)=x^3-9x^2+26x-24$; sum of new roots $9=6+3$.",
          },
        },
      ],
    },
  ],
};
