import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "edialpm-u2-lesson-2-1",
  code: "2-1",
  title: "The Factor Theorem and Algebraic Proof",
  goal: "I CAN use the factor theorem and polynomial division to factorise and solve polynomial equations, and construct algebraic proofs.",
  standards: ["WMA12 P2", "Proof", "Algebra and functions"],
  vocabulary: [
    { term: "Factor theorem", definition: "$(x-a)$ is a factor of $f(x)$ if and only if $f(a)=0$." },
    { term: "Remainder theorem", definition: "When $f(x)$ is divided by $(x-a)$, the remainder is $f(a)$." },
    { term: "Polynomial division", definition: "Dividing a polynomial by a linear factor to obtain a quotient and remainder, e.g. by comparing coefficients." },
    { term: "Identity", definition: "An equation true for all values of the variable, often written with $\\equiv$ rather than $=$." },
    { term: "Proof by deduction", definition: "Starting from given information and deriving the result through a chain of valid algebraic steps." },
  ],
  concepts: [
    {
      id: "edialpm-u2-factor-theorem",
      title: "Factor theorem and polynomial division",
      skill: "Use the factor theorem to find linear factors and divide polynomials to solve cubic and higher-degree equations.",
      lesson: {
        sections: [
          {
            heading: "The factor and remainder theorems",
            body: "If $f(x)$ is a polynomial, then the **remainder theorem** says the remainder on dividing $f(x)$ by $(x-a)$ is $f(a)$, and the **factor theorem** says $(x-a)$ is a factor of $f(x)$ exactly when $f(a)=0$. For a divisor $(ax-b)$, evaluate at $x=\\frac{b}{a}$.",
          },
          {
            heading: "Dividing polynomials",
            body: "Once one linear factor $(x-a)$ is found, divide $f(x)$ by it using algebraic long division or by writing $f(x)=(x-a)(\\text{quotient})+\\text{remainder}$ and comparing coefficients. The quotient is usually a quadratic, which factorises further.",
          },
          {
            heading: "Solving polynomial equations",
            body: "Set $f(x)=0$, find one root $x=a$ (often by inspection or the factor theorem), divide out $(x-a)$, then solve the resulting quadratic. Check all roots in the original equation.",
          },
        ],
        keyFormulas: [
          { name: "Factor theorem", statement: "$(x-a)\\mid f(x) \\iff f(a)=0$" },
          { name: "Remainder theorem", statement: "Remainder of $f(x)\\div(x-a)$ is $f(a)$" },
        ],
        workedExample: {
          problem: "Show that $(x-2)$ is a factor of $f(x)=x^3-2x^2-5x+6$ and find the other factors.",
          solution: "$f(2)=8-8-10+6=-4\\neq0$ — not a factor. Try $x=1$: $f(1)=1-2-5+6=0$, so $(x-1)$ is a factor. Dividing: $x^3-2x^2-5x+6=(x-1)(x^2-x-6)=(x-1)(x-3)(x+2)$.",
        },
      },
      questions: [
        {
          id: "edialpm-u2-ft-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "When $f(x)=x^3+px^2+qx+6$ is divided by $(x-1)$ the remainder is $11$. What is the value of $p+q$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$4$" },
              { id: "b", text: "$-4$" },
              { id: "c", text: "$14$" },
              { id: "d", text: "$-14$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Remainder theorem", statement: "The remainder on dividing $f(x)$ by $(x-a)$ is $f(a)$." },
            ],
            steps: [
              { reasoning: "By the remainder theorem $f(1)=11$: $1+p+q+6=11$.", working: "p+q+7=11", marks: 1, markCode: "M" },
              { reasoning: "Solve for $p+q$.", working: "p+q=4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $4$",
            commonErrors: ["Using $f(-1)$ instead of $f(1)$.", "Arithmetic slips in $f(1)$."],
          },
        },
        {
          id: "edialpm-u2-ft-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Given that $f(x)=x^3+ax^2+bx-6$ and $(x-2)$ is a factor of $f(x)$, find a relationship between the constants $a$ and $b$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Factor theorem", statement: "$(x-a)$ is a factor of $f(x)$ iff $f(a)=0$." },
            ],
            steps: [
              { reasoning: "Apply the factor theorem at $x=2$.", working: "f(2)=8+4a+2b-6=0", marks: 1, markCode: "M" },
              { reasoning: "Simplify.", working: "4a+2b+2=0\\Rightarrow 2a+b=-1", marks: 1, markCode: "M" },
              { reasoning: "State the relationship.", working: "2a+b=-1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2a+b=-1$",
            commonErrors: ["Using $f(-2)$ instead of $f(2)$.", "Arithmetic slips in evaluating $f(2)$."],
          },
        },
        {
          id: "edialpm-u2-ft-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "The polynomial $f(x)=x^3-3x^2-4x+12$ has a root at $x=3$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Factor theorem", statement: "A root $x=a$ means $(x-a)$ is a factor." },
            ],
            steps: [
              { reasoning: "Verify $f(3)=0$.", working: "27-27-12+12=0", marks: 1, markCode: "M" },
              { reasoning: "Divide $f(x)$ by $(x-3)$ to get a quadratic.", working: "x^3-3x^2-4x+12=(x-3)(x^2-4)", marks: 1, markCode: "M" },
              { reasoning: "Factorise the quotient completely.", working: "(x-3)(x-2)(x+2)", marks: 1, markCode: "M" },
              { reasoning: "State all roots.", working: "x=3,\\ x=2,\\ x=-2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$f(x)=(x-3)(x-2)(x+2)$; roots $x=-2,2,3$.",
            commonErrors: ["Stopping after one division without factorising the quadratic.", "Sign errors in the quotient."],
          },
        },
        {
          id: "edialpm-u2-ft-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Let $f(x)=x^3+px^2+qx-6$ where $(x-1)$ and $(x+3)$ are both factors of $f(x)$.",
          parts: [
            { label: "a", prompt: "Use the factor theorem to form two equations in $p$ and $q$.", marks: 2 },
            { label: "b", prompt: "Solve for $p$ and $q$.", marks: 3 },
            { label: "c", prompt: "Hence factorise $f(x)$ completely and write down the roots of $f(x)=0$.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Factor theorem", statement: "$(x-a)$ is a factor iff $f(a)=0$." },
            ],
            steps: [
              { part: "a", reasoning: "Apply $f(1)=0$.", working: "1+p+q-6=0\\Rightarrow p+q=5", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Apply $f(-3)=0$.", working: "-27+9p-3q-6=0\\Rightarrow 9p-3q=33\\Rightarrow 3p-q=11", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Add the two equations.", working: "(p+q)+(3p-q)=5+11\\Rightarrow4p=16\\Rightarrow p=4", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Substitute back.", working: "4+q=5\\Rightarrow q=1", marks: 1, markCode: "A" },
              { part: "b", reasoning: "State $p$ and $q$.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Write $f(x)=x^3+4x^2+x-6$ and divide by $(x-1)$.", working: "x^3+4x^2+x-6=(x-1)(x^2+5x+6)", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Factorise the quadratic.", working: "x^2+5x+6=(x+2)(x+3)", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the complete factorisation.", working: "f(x)=(x-1)(x+2)(x+3)", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Read off the roots.", working: "x=1,\\ x=-2,\\ x=-3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $p+q=5$, $3p-q=11$ (b) $p=4$, $q=1$ (c) $f(x)=(x-1)(x+2)(x+3)$, roots $x=1,-2,-3$",
            commonErrors: ["Sign error in $f(-3)$.", "Dividing by the wrong factor first.", "Not checking that both given factors appear."],
            examinerNote: "In (c) accept division by $(x+3)$ first; the final factorisation is the same.",
          },
        },
      ],
    },
    {
      id: "edialpm-u2-proof",
      title: "Algebraic proof",
      skill: "Prove algebraic identities and results by deduction, including divisibility statements.",
      lesson: {
        sections: [
          {
            heading: "Proof by deduction",
            body: "Start from what is given, manipulate both sides until they meet, or transform one expression into the other. Every step must be justified — an identity such as $(x+1)^2-(x-1)^2=4x$ can be proved by expanding both sides.",
          },
          {
            heading: "Proving divisibility",
            body: "To prove $n^2-n$ is even for integer $n$: $n^2-n=n(n-1)$, and one of two consecutive integers is even, so the product is even. For algebraic versions, factorise and argue about parity or use the factor theorem.",
          },
          {
            heading: "Writing proofs clearly",
            body: "State the claim, list the given facts, and chain implications with reasons. In exams, marks are for method and logic — a correct chain with a small slip still scores well.",
          },
        ],
        keyFormulas: [
          { name: "Identity", statement: "True for all values of the variable; prove by expansion or factorisation." },
          { name: "Consecutive integers", statement: "One of $n$, $n+1$ is always even." },
        ],
        workedExample: {
          problem: "Prove that the difference of the squares of two consecutive integers is odd.",
          solution: "Let the integers be $n$ and $n+1$. Difference of squares: $(n+1)^2-n^2=2n+1$, which is odd for every integer $n$.",
        },
      },
      questions: [
        {
          id: "edialpm-u2-proof-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of the following is an identity?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x^2-1=(x-1)^2$" },
              { id: "b", text: "$x^2-1=(x-1)(x+1)$" },
              { id: "c", text: "$x^2+1=(x+1)^2$" },
              { id: "d", text: "$x^2-2x=x(x-2)+1$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Identity", statement: "An equation true for every value of the variable." },
            ],
            steps: [
              { reasoning: "Expand $(x-1)(x+1)=x^2-1$ for all $x$ — this is the difference of two squares.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $x^2-1=(x-1)(x+1)$",
            commonErrors: ["Thinking any true-looking equation is an identity — it must hold for all $x$."],
          },
        },
        {
          id: "edialpm-u2-proof-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Prove that $(2n+1)^2-(2n-1)^2$ is a multiple of $8$ for every integer $n$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Difference of squares", statement: "$a^2-b^2=(a-b)(a+b)$." },
            ],
            steps: [
              { reasoning: "Apply the difference of squares with $a=2n+1$, $b=2n-1$.", working: "(2n+1)^2-(2n-1)^2=[(2n+1)-(2n-1)][(2n+1)+(2n-1)]", marks: 1, markCode: "M" },
              { reasoning: "Simplify each bracket.", working: "=2\\times4n=8n", marks: 1, markCode: "M" },
              { reasoning: "Since $8n$ is a multiple of $8$ for every integer $n$, the result follows.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$(2n+1)^2-(2n-1)^2=8n$, a multiple of $8$.",
            commonErrors: ["Expanding fully and making an algebra slip — the factorised route is cleaner.", "Claiming 'it is even' without showing the factor $8$."],
          },
        },
        {
          id: "edialpm-u2-proof-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Prove that if $n$ is an odd integer, then $n^2-1$ is divisible by $8$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Difference of squares", statement: "$n^2-1=(n-1)(n+1)$." },
              { kind: "principle", name: "Consecutive even integers", statement: "If $n$ is odd, $n-1$ and $n+1$ are consecutive even integers, so one is divisible by $4$." },
            ],
            steps: [
              { reasoning: "Write $n$ as $2k+1$ for some integer $k$.", working: "n=2k+1", marks: 1, markCode: "M" },
              { reasoning: "Factorise $n^2-1$.", working: "n^2-1=(n-1)(n+1)=(2k)(2k+2)=4k(k+1)", marks: 1, markCode: "M" },
              { reasoning: "One of $k$, $k+1$ is even, so $k(k+1)$ is even.", marks: 1, markCode: "R" },
              { reasoning: "Therefore $n^2-1=4\\times(\\text{even})$, a multiple of $8$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "For odd $n$, $n^2-1$ is divisible by $8$.",
            commonErrors: ["Not justifying why $k(k+1)$ is even.", "Testing a single value of $n$ — proof requires all cases."],
          },
        },
        {
          id: "edialpm-u2-proof-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Let $a$ and $b$ be real numbers with $a>b>0$.",
          parts: [
            { label: "a", prompt: "Show that $\\frac{a}{b}+\\frac{b}{a}>2$.", marks: 4 },
            { label: "b", prompt: "Deduce that $a^2+b^2>2ab$ for all real $a,b$ with $a\\neq b$.", marks: 5 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "AM-GM style inequality", statement: "$\\frac{a}{b}+\\frac{b}{a}-2=\\frac{(a-b)^2}{ab}>0$ when $a\\neq b$ and $ab>0$." },
            ],
            steps: [
              { part: "a", reasoning: "Consider the difference $\\frac{a}{b}+\\frac{b}{a}-2$.", working: "\\frac{a}{b}+\\frac{b}{a}-2=\\frac{a^2+b^2-2ab}{ab}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Recognise the numerator as a perfect square.", working: "=\\frac{(a-b)^2}{ab}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Since $a\\neq b$, $(a-b)^2>0$; since $a,b>0$, $ab>0$.", marks: 1, markCode: "R" },
              { part: "a", reasoning: "Therefore the difference is positive, so $\\frac{a}{b}+\\frac{b}{a}>2$.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Multiply both sides of the inequality in (a) by $ab>0$.", working: "\\left(\\frac{a}{b}+\\frac{b}{a}\\right)ab>2ab", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Simplify the left side.", working: "a^2+b^2>2ab", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Note the result does not need $a>b>0$ — only $ab>0$ and $a\\neq b$.", marks: 1, markCode: "R" },
              { part: "b", reasoning: "Alternatively derive directly: $a^2+b^2-2ab=(a-b)^2>0$.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Conclude for all real $a,b$ with $a\\neq b$ (both same sign needed for the first route; the square argument covers all cases).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $\\frac{a}{b}+\\frac{b}{a}-2=\\frac{(a-b)^2}{ab}>0$ (b) $a^2+b^2>2ab$ since $(a-b)^2>0$",
            commonErrors: ["Multiplying an inequality by a possibly negative quantity without justification.", "Claiming the result for $a=b$ — it becomes equality."],
            examinerNote: "Part (b) is more general than (a) suggests: $a^2+b^2-2ab=(a-b)^2\\ge0$ holds for all reals.",
          },
        },
      ],
    },
  ],
};
