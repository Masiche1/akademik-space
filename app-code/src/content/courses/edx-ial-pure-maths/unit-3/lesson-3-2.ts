import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "edialpm-u3-lesson-3-2",
  code: "3-2",
  title: "Exponentials, Logarithms and the Binomial Series",
  goal: "I CAN solve equations involving exponentials and logarithms and expand expressions using the binomial series for fractional and negative indices.",
  standards: ["WMA13 P3", "Exponentials and logarithms", "Series"],
  vocabulary: [
    { term: "Exponential function", definition: "$a^x=e^{x\\ln a}$; $e^x$ is the natural exponential with $\\frac{d}{dx}e^x=e^x$." },
    { term: "Logarithm laws", definition: "$\\ln(ab)=\\ln a+\\ln b$, $\\ln(a/b)=\\ln a-\\ln b$, $\\ln a^n=n\\ln a$, $\\ln e=1$." },
    { term: "Binomial series", definition: "Expansion of $(1+x)^n$ for any real $n$, valid for $|x|<1$." },
    { term: "Radius of convergence", definition: "The range of $x$ for which an infinite series converges; for the binomial series it is $|x|<1$." },
  ],
  concepts: [
    {
      id: "edialpm-u3-exp-log",
      title: "Exponential and logarithmic equations",
      skill: "Apply logarithm laws to simplify expressions and solve equations involving $e^x$, $a^x$ and $\\ln x$, including growth and decay models.",
      lesson: {
        sections: [
          {
            heading: "Laws of logarithms",
            body: "$\\ln(ab)=\\ln a+\\ln b$ turns products into sums; $\\ln(a/b)=\\ln a-\\ln b$ turns quotients into differences; $\\ln a^n=n\\ln a$ brings down powers. These convert multiplicative relationships into additive ones — essential for solving exponential equations.",
          },
          {
            heading: "Solving exponential equations",
            body: "For $a^x=b$: take logs, $x=\\frac{\\ln b}{\\ln a}$. For equations like $e^{2x}-5e^x+6=0$, substitute $u=e^x$ to get a quadratic in $u$, solve, then take logs. Reject negative $u$ since $e^x>0$.",
          },
          {
            heading: "Growth and decay",
            body: "Exponential models $N=N_0e^{kt}$ describe continuous growth ($k>0$) or decay ($k<0$). Half-life $t_{1/2}=\\frac{\\ln2}{|k|}$; to find $k$ from a doubling/halving time use the same relation.",
          },
        ],
        keyFormulas: [
          { name: "Log laws", statement: "$\\ln(ab)=\\ln a+\\ln b$; $\\ln a^n=n\\ln a$" },
          { name: "Half-life", statement: "$t_{1/2}=\\frac{\\ln 2}{k}$ for $N=N_0e^{-kt}$" },
        ],
        workedExample: {
          problem: "Solve $e^{2x}-3e^x+2=0$.",
          solution: "Let $u=e^x$: $u^2-3u+2=0$, so $u=1$ or $u=2$. $e^x=1\\Rightarrow x=0$; $e^x=2\\Rightarrow x=\\ln2\\approx0.693$.",
        },
      },
      questions: [
        {
          id: "edialpm-u3-explog-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is $\\ln(e^3)$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$e^3$" },
              { id: "b", text: "$3$" },
              { id: "c", text: "$1$" },
              { id: "d", text: "$\\frac{1}{3}$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Inverse functions", statement: "$\\ln(e^x)=x$." },
            ],
            steps: [
              { reasoning: "$\\ln$ and $e^x$ are inverse functions.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $3$",
            commonErrors: ["Treating $\\ln(e^3)$ as $3\\ln e$ then forgetting $\\ln e=1$."],
          },
        },
        {
          id: "edialpm-u3-explog-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Solve $2^x=20$, giving your answer to 3 significant figures.",
          response: {
            type: "numeric",
            parts: [{ label: "x", answer: 4.3219, tolerance: 0.001 }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Logarithmic solution", statement: "$x=\\frac{\\ln b}{\\ln a}$ for $a^x=b$." },
            ],
            steps: [
              { reasoning: "Take natural logs: $x\\ln2=\\ln20$.", working: "x=\\frac{\\ln20}{\\ln2}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate: $\\frac{2.9957}{0.6931}=4.322$.", working: "x\\approx4.32", marks: 1, markCode: "M" },
              { reasoning: "State $x\\approx4.32$ (3 s.f.).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x\\approx4.32$",
            commonErrors: ["Using $\\log_2$ without converting.", "Rounding intermediate logs."],
          },
        },
        {
          id: "edialpm-u3-explog-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Solve $\\ln(x+1)+\\ln(x-1)=\\ln 8$ for $x>1$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Log laws", statement: "$\\ln A+\\ln B=\\ln(AB)$." },
            ],
            steps: [
              { reasoning: "Combine the left side: $\\ln[(x+1)(x-1)]=\\ln8$, i.e. $\\ln(x^2-1)=\\ln8$.", working: "x^2-1=8", marks: 1, markCode: "M" },
              { reasoning: "Exponentiate: $x^2-1=8$, so $x^2=9$.", working: "x=\\pm3", marks: 1, markCode: "M" },
              { reasoning: "Reject $x=-3$ since $x>1$ is required (and $\\ln(x-1)$ undefined for $x\\le1$).", marks: 1, markCode: "M" },
              { reasoning: "State $x=3$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=3$",
            commonErrors: ["Forgetting the domain restriction $x>1$."],
          },
        },
        {
          id: "edialpm-u3-explog-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A quantity $Q$ satisfies $\\frac{dQ}{dt}=-kQ$ with $Q(0)=500$ and $k=0.02$ per day.",
          parts: [
            { label: "a", prompt: "Write down the model $Q(t)$ and find $Q(30)$.", marks: 3 },
            { label: "b", prompt: "Find the half-life of $Q$.", marks: 3 },
            { label: "c", prompt: "Find the time at which $Q=100$.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Exponential decay", statement: "$Q=Q_0e^{-kt}$." },
              { kind: "formula", name: "Half-life", statement: "$t_{1/2}=\\frac{\\ln2}{k}$." },
            ],
            steps: [
              { part: "a", reasoning: "$Q(t)=500e^{-0.02t}$.", working: "Q=500e^{-0.02t}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "$Q(30)=500e^{-0.6}=500\\times0.5488=274.4$.", working: "Q(30)\\approx274", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State model and value.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$t_{1/2}=\\frac{\\ln2}{0.02}=\\frac{0.693}{0.02}=34.7$ days.", working: "34.7\\text{ days}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State half-life.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Verify $Q(34.7)\\approx250$.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Set $500e^{-0.02t}=100$: $e^{-0.02t}=0.2$.", working: "e^{-0.02t}=0.2", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Take logs: $-0.02t=\\ln0.2=-1.609$.", working: "t=\\frac{1.609}{0.02}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "$t=80.5$ days.", working: "t\\approx80.5", marks: 1, markCode: "A" },
              { part: "c", reasoning: "State time.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $Q=500e^{-0.02t}$, $Q(30)\\approx274$ (b) $t_{1/2}\\approx34.7$ days (c) $t\\approx80.5$ days",
            commonErrors: ["Using $e^{+kt}$ for decay.", "Forgetting to divide by $k$ when taking logs."],
          },
        },
      ],
    },
    {
      id: "edialpm-u3-binomial",
      title: "The binomial series",
      skill: "Expand $(1+x)^n$ for fractional and negative $n$, state the validity condition $|x|<1$ and use partial sums for approximation.",
      lesson: {
        sections: [
          {
            heading: "General binomial expansion",
            body: "For any real $n$: $(1+x)^n=1+nx+\\frac{n(n-1)}{2!}x^2+\\frac{n(n-1)(n-2)}{3!}x^3+\\cdots$, valid for $|x|<1$. When $n$ is a positive integer the series terminates; otherwise it is infinite.",
          },
          {
            heading: "Forms requiring rearrangement",
            body: "Expressions like $(4-3x)^{1/2}$ or $(2+x)^{-1}$ must first be written as a constant times $(1+ux)^n$ by factorising out the constant term. Only then does the expansion apply, and the validity condition becomes $|ux|<1$.",
          },
          {
            heading: "Approximations",
            body: "For small $x$, higher powers contribute little, so a truncated expansion approximates the value. State the validity range; do not use the series outside it.",
          },
        ],
        keyFormulas: [
          { name: "Binomial series", statement: "$(1+x)^n=\\sum_{r=0}^{\\infty}\\binom{n}{r}x^r$ for $|x|<1$" },
        ],
        workedExample: {
          problem: "Expand $(1-2x)^{1/2}$ up to $x^3$, stating validity.",
          solution: "$n=\\frac12$: $1+\\frac12(-2x)+\\frac{\\frac12(-\\frac12)}{2}(-2x)^2+\\frac{\\frac12(-\\frac12)(-\\frac32)}{6}(-2x)^3=1-x-\\frac{x^2}{2}-\\frac{x^3}{2}$. Valid for $|-2x|<1$, i.e. $|x|<\\frac12$.",
        },
      },
      questions: [
        {
          id: "edialpm-u3-binom-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "For which values of $x$ does the binomial expansion of $(1+x)^{-1}$ converge?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "All real $x$" },
              { id: "b", text: "$x<1$" },
              { id: "c", text: "$|x|<2$" },
              { id: "d", text: "$|x|<1$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Convergence", statement: "The series requires $|x|<1$." },
            ],
            steps: [
              { reasoning: "The binomial series converges only for $|x|<1$.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $|x|<1$",
            commonErrors: ["Omitting the absolute value."],
          },
        },
        {
          id: "edialpm-u3-binom-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Expand $(1+x)^{-2}$ up to and including the $x^3$ term.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Binomial series", statement: "$(1+x)^n=1+nx+\\frac{n(n-1)}{2}x^2+\\frac{n(n-1)(n-2)}{6}x^3+\\cdots$" },
            ],
            steps: [
              { reasoning: "With $n=-2$: coefficients are $1$, $-2$, $\\frac{(-2)(-3)}{2}=3$, $\\frac{(-2)(-3)(-4)}{6}=-4$.", working: "1-2x+3x^2-4x^3", marks: 1, markCode: "M" },
              { reasoning: "Write the expansion.", working: "(1+x)^{-2}\\approx1-2x+3x^2-4x^3", marks: 1, markCode: "M" },
              { reasoning: "State validity $|x|<1$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$1-2x+3x^2-4x^3$, valid for $|x|<1$",
            commonErrors: ["Sign errors in coefficients."],
          },
        },
        {
          id: "edialpm-u3-binom-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Expand $(4+x)^{1/2}$ in ascending powers of $x$ up to $x^2$, stating the range of validity.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Factor out constant", statement: "$(4+x)^{1/2}=2(1+\\frac{x}{4})^{1/2}$." },
            ],
            steps: [
              { reasoning: "Rewrite: $(4+x)^{1/2}=2\\left(1+\\frac{x}{4}\\right)^{1/2}$.", working: "2(1+x/4)^{1/2}", marks: 1, markCode: "M" },
              { reasoning: "Expand $(1+\\frac{x}{4})^{1/2}=1+\\frac12(\\frac{x}{4})+\\frac{\\frac12(-\\frac12)}{2}(\\frac{x}{4})^2=1+\\frac{x}{8}-\\frac{x^2}{128}$.", working: "1+x/8-x^2/128", marks: 1, markCode: "M" },
              { reasoning: "Multiply by 2: $2+\\frac{x}{4}-\\frac{x^2}{64}$.", working: "2+x/4-x^2/64", marks: 1, markCode: "M" },
              { reasoning: "Validity: $|\\frac{x}{4}|<1$, i.e. $|x|<4$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2+\\frac{x}{4}-\\frac{x^2}{64}$, valid for $|x|<4$",
            commonErrors: ["Not factorising out 4 first.", "Wrong validity range."],
          },
        },
        {
          id: "edialpm-u3-binom-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Use the binomial series to expand $(1-3x)^{-1/2}$ up to $x^3$ and hence approximate $\\frac{1}{\\sqrt{0.97}}$.",
          parts: [
            { label: "a", prompt: "Expand $(1-3x)^{-1/2}$ up to $x^3$, stating validity.", marks: 5 },
            { label: "b", prompt: "Choose a value of $x$ to approximate $\\frac{1}{\\sqrt{0.97}}$ and find the approximation.", marks: 5 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Binomial series", statement: "$(1+u)^n$ expansion with $u=-3x$, $n=-\\frac12$." },
            ],
            steps: [
              { part: "a", reasoning: "Coefficients for $n=-\\frac12$: $1+(-\\frac12)(-3x)+\\frac{(-\\frac12)(-\\frac32)}{2}(-3x)^2+\\frac{(-\\frac12)(-\\frac32)(-\\frac52)}{6}(-3x)^3$.", working: "coeffs", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Simplify: $1+\\frac{3x}{2}+\\frac{27x^2}{8}+\\frac{135x^3}{16}$? Compute: $\\frac{(-\\frac12)(-\\frac32)}{2}=\\frac{3}{8}$, times $9x^2=\\frac{27x^2}{8}$; cubic coeff $\\frac{(-\\frac12)(-\\frac32)(-\\frac52)}{6}=-\\frac{15}{48}=-\\frac{5}{16}$, times $(-27x^3)=\\frac{135x^3}{16}$.", working: "1+\\tfrac{3x}{2}+\\tfrac{27x^2}{8}+\\tfrac{135x^3}{16}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State expansion.", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Validity: $|-3x|<1$, i.e. $|x|<\\frac13$.", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Double-check first terms numerically: at $x=0.01$, series $\\approx1+0.015+0.0003375\\approx1.0153$; direct $\\frac{1}{\\sqrt{0.97}}\\approx1.01534$ ✓.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Set $1-3x=0.97$, so $x=0.01$; check $|x|<\\frac13$ ✓.", working: "x=0.01", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Substitute: $1+\\frac{3(0.01)}{2}+\\frac{27(0.0001)}{8}+\\frac{135(10^{-6})}{16}=1+0.015+0.0003375+0.0000084\\approx1.01535$.", working: "\\approx1.0153", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State approximation $\\approx1.015$ (4 s.f. $1.0153$).", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Compare with calculator value $1.01534$ — close agreement.", marks: 1, markCode: "R" },
              { part: "b", reasoning: "Conclude.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $1+\\frac{3x}{2}+\\frac{27x^2}{8}+\\frac{135x^3}{16}$, $|x|<\\frac13$ (b) $\\frac{1}{\\sqrt{0.97}}\\approx1.0153$",
            commonErrors: ["Coefficient arithmetic errors.", "Choosing $x$ outside the validity range."],
            examinerNote: "The cubic coefficient $\\frac{135}{16}$ arises from $(-\\frac{5}{16})(-27)=\\frac{135}{16}$ — accept either form.",
          },
        },
      ],
    },
  ],
};
