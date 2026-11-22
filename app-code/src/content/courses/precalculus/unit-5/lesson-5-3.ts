import type { Lesson } from "../../../types.ts";

export const lesson53: Lesson = {
  id: "pc-u5-lesson-5-3",
  code: "5-3",
  title: "Introduction to Limits",
  goal: "I CAN evaluate limits numerically, graphically, and algebraically, analyze continuity and end behavior, and express the derivative as a limit.",
  standards: ["HSF-IF.B.4", "HSF-IF.C.7", "HSF-BF.A.1"],
  vocabulary: [
    { term: "Limit", definition: "The value $L$ that $f(x)$ approaches as $x$ approaches $a$, written $\\lim_{x\\to a}f(x)=L$, regardless of the value of $f$ at $a$ itself." },
    { term: "One-sided limit", definition: "The value $f(x)$ approaches as $x$ approaches $a$ only from the left ($x\\to a^-$) or only from the right ($x\\to a^+$)." },
    { term: "Indeterminate form", definition: "An expression such as $\\frac00$ obtained by direct substitution, which does not determine the limit and requires algebraic simplification." },
    { term: "Continuity at a point", definition: "A function is continuous at $a$ if $f(a)$ is defined, $\\lim_{x\\to a}f(x)$ exists, and the two are equal." },
    { term: "Horizontal asymptote", definition: "A line $y=L$ such that $f(x)\\to L$ as $x\\to\\infty$ or $x\\to-\\infty$." },
    { term: "Difference quotient", definition: "The expression $\\frac{f(x+h)-f(x)}{h}$, the slope of the secant line through $(x,f(x))$ and $(x+h,f(x+h))$." },
    { term: "Derivative", definition: "The limit of the difference quotient as $h\\to0$: $f'(x)=\\lim_{h\\to0}\\frac{f(x+h)-f(x)}{h}$, the instantaneous rate of change of $f$." },
  ],
  concepts: [
    {
      id: "pc-u5-limits-basics",
      title: "Evaluating limits",
      skill: "Evaluate limits using tables, graphs, factoring, and rationalizing, and use one-sided limits to decide whether a limit exists.",
      lesson: {
        sections: [
          {
            heading: "The idea of a limit",
            body: "$\\lim_{x\\to a}f(x)=L$ means $f(x)$ gets arbitrarily close to $L$ as $x$ gets close to $a$ from both sides, with $x\\ne a$. The value $f(a)$ may be different or not exist at all. A table of values with $x$ approaching $a$ from each side, or a graph with a hole at $x=a$, can suggest the limit.",
          },
          {
            heading: "Algebraic methods",
            body: "First try direct substitution. If a polynomial or rational function is defined at $a$, the limit equals $f(a)$. If you obtain $\\frac00$, simplify: factor and cancel the common factor (valid because $x\\ne a$ in a limit), or multiply by a conjugate when a square root is involved. For example, $\\frac{\\sqrt{x}-2}{x-4}$ multiplied by $\\frac{\\sqrt x+2}{\\sqrt x+2}$ becomes $\\frac{1}{\\sqrt x+2}$.",
          },
          {
            heading: "One-sided limits",
            body: "The limit exists exactly when both one-sided limits exist and are equal: $\\lim_{x\\to a}f(x)=L$ if and only if $\\lim_{x\\to a^-}f(x)=\\lim_{x\\to a^+}f(x)=L$. For piecewise functions, use the piece on each side of $a$. If the one-sided limits differ, the limit does not exist. If the values grow without bound, we describe the behavior with $\\pm\\infty$ and still say the limit does not exist as a real number.",
          },
        ],
        keyFormulas: [
          { name: "Existence of a limit", statement: "$\\lim_{x\\to a}f(x)=L \\iff \\lim_{x\\to a^-}f(x)=\\lim_{x\\to a^+}f(x)=L$" },
        ],
        workedExample: {
          problem: "Evaluate $\\lim_{x\\to2}\\frac{x^2-4}{x-2}$.",
          solution: "Substitution gives $\\frac00$. Factor: $\\frac{(x-2)(x+2)}{x-2}=x+2$ for $x\\ne2$. Then $\\lim_{x\\to2}(x+2)=4$.",
        },
      },
      questions: [
        {
          id: "pc-u5-limits-basics-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Evaluate $\\lim_{x\\to3}\\frac{x^2-9}{x-3}$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$3$" },
              { id: "b", text: "The limit does not exist" },
              { id: "c", text: "$0$" },
              { id: "d", text: "$6$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Limits ignore the value at the point", statement: "For $x\\ne a$, equal expressions have the same limit as $x\\to a$." },
            ],
            steps: [
              { reasoning: "Substitution gives $\\frac00$, so factor the numerator and cancel the common factor.", working: "\\frac{(x-3)(x+3)}{x-3}=x+3", marks: 1, markCode: "M" },
              { reasoning: "Substitute $x=3$ into the simplified expression.", working: "3+3=6", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $6$",
            commonErrors: ["Concluding the limit does not exist because the expression is $\\frac00$.", "Substituting $x=3$ into the numerator only and answering $0$."],
          },
        },
        {
          id: "pc-u5-limits-basics-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Evaluate $\\lim_{x\\to4}\\frac{\\sqrt{x}-2}{x-4}$. Give your answer as a decimal.",
          response: { type: "numeric", parts: [{ label: "Limit", answer: 0.25 }] },
          markscheme: {
            principles: [
              { kind: "property", name: "Conjugate", statement: "$(\\sqrt x-2)(\\sqrt x+2)=x-4$." },
            ],
            steps: [
              { reasoning: "Substitution gives $\\frac00$. Multiply the numerator and denominator by the conjugate.", working: "\\frac{(\\sqrt x-2)(\\sqrt x+2)}{(x-4)(\\sqrt x+2)}", marks: 1, markCode: "M" },
              { reasoning: "The numerator becomes $x-4$, which cancels with the denominator factor.", working: "\\frac{1}{\\sqrt x+2}", marks: 1, markCode: "A" },
              { reasoning: "Substitute $x=4$.", working: "\\frac{1}{2+2}=\\frac14", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac14=0.25$",
            commonErrors: ["Writing $\\frac{\\sqrt x-2}{x-4}=\\frac{\\sqrt x}{x}$ by cancelling terms.", "Using the conjugate on the denominator only."],
          },
        },
        {
          id: "pc-u5-limits-basics-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Let $f(x)=\\begin{cases}3x-1, & x<2\\\\ x^2+k, & x\\ge2\\end{cases}$. Find $\\lim_{x\\to2^-}f(x)$, the value of $k$ for which $\\lim_{x\\to2}f(x)$ exists, and that limit.",
          response: {
            type: "numeric",
            parts: [
              { label: "Left-hand limit", answer: 5 },
              { label: "Value of $k$", answer: 1 },
              { label: "$\\lim_{x\\to2}f(x)$", answer: 5 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Existence of a limit", statement: "The limit exists iff the left-hand and right-hand limits are equal." },
            ],
            steps: [
              { reasoning: "For $x<2$ use $3x-1$ and substitute $x=2$.", working: "\\lim_{x\\to2^-}f(x)=3(2)-1=5", marks: 1, markCode: "A" },
              { reasoning: "For $x\\ge2$ use $x^2+k$.", working: "\\lim_{x\\to2^+}f(x)=4+k", marks: 1, markCode: "M" },
              { reasoning: "Set the one-sided limits equal.", working: "4+k=5 \\Rightarrow k=1", marks: 1, markCode: "M" },
              { reasoning: "The common value is the limit.", working: "\\lim_{x\\to2}f(x)=5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Left limit $5$; $k=1$; limit $=5$.",
            commonErrors: ["Using $x^2+k$ for the left-hand limit.", "Setting $4+k=0$ instead of equating the two sides."],
          },
        },
        {
          id: "pc-u5-limits-basics-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Let $f(x)=\\frac{x^2-x-6}{x^2-9}$.",
          parts: [
            { label: "a", prompt: "Factor the numerator and denominator and simplify $f(x)$ for $x\\ne3$ and $x\\ne-3$.", marks: 2 },
            { label: "b", prompt: "Find $\\lim_{x\\to3}f(x)$ as a fraction.", marks: 2 },
            { label: "c", prompt: "Describe the behavior of $f(x)$ as $x\\to-3^-$ and as $x\\to-3^+$, and state whether $\\lim_{x\\to-3}f(x)$ exists.", marks: 3 },
            { label: "d", prompt: "Compute $f(2.99)$ to 3 decimal places and explain how it supports your answer to part (b).", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Cancelling common factors", statement: "In a limit $x\\ne a$, so a common factor $(x-a)$ may be cancelled." },
              { kind: "theorem", name: "Existence of a limit", statement: "The limit exists only if both one-sided limits are equal and finite." },
            ],
            steps: [
              { part: "a", reasoning: "Factor both quadratics: $x^2-x-6=(x-3)(x+2)$ and $x^2-9=(x-3)(x+3)$.", working: "f(x)=\\frac{(x-3)(x+2)}{(x-3)(x+3)}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Cancel the common factor.", working: "f(x)=\\frac{x+2}{x+3}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "The simplified function is continuous at 3, so substitute.", working: "\\lim_{x\\to3}\\frac{x+2}{x+3}=\\frac{5}{6}", marks: 2, markCode: "A" },
              { part: "c", reasoning: "Near $x=-3$ the numerator is close to $-1$. From the left, $x+3$ is a small negative number, so the quotient is large and positive.", working: "\\lim_{x\\to-3^-}f(x)=+\\infty", marks: 1, markCode: "A" },
              { part: "c", reasoning: "From the right, $x+3$ is a small positive number, so the quotient is large and negative.", working: "\\lim_{x\\to-3^+}f(x)=-\\infty", marks: 1, markCode: "A" },
              { part: "c", reasoning: "The one-sided behaviors are unbounded and opposite, so the limit does not exist.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Evaluate using the simplified form.", working: "f(2.99)=\\frac{4.99}{5.99}\\approx0.833", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Since $\\frac56\\approx0.8333$, the value is close to the limit, consistent with part (b).", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $\\frac{x+2}{x+3}$. (b) $\\frac56$. (c) $+\\infty$ from the left, $-\\infty$ from the right; the limit does not exist. (d) $0.833$, close to $\\frac56$.",
            commonErrors: ["Claiming the limit at $-3$ equals $0$ or $1$.", "Giving the limit at 3 as $\\frac00$."],
          },
        },
      ],
    },
    {
      id: "pc-u5-limits-continuity-derivative",
      title: "Limits at infinity, continuity, and the derivative",
      skill: "Evaluate limits at infinity, test continuity, and write the derivative as the limit of the difference quotient.",
      lesson: {
        sections: [
          {
            heading: "Limits at infinity",
            body: "For a rational function, divide every term by the highest power of $x$ in the denominator. Terms like $\\frac1x$ and $\\frac{1}{x^2}$ tend to $0$. If the degrees of numerator and denominator are equal, the limit is the ratio of leading coefficients. If the numerator's degree is smaller, the limit is $0$. If it is larger, the function is unbounded. The limit gives the horizontal asymptote.",
          },
          {
            heading: "Continuity",
            body: "A function is continuous at $x=a$ if (1) $f(a)$ is defined, (2) $\\lim_{x\\to a}f(x)$ exists, and (3) $\\lim_{x\\to a}f(x)=f(a)$. A removable discontinuity (a hole) can be repaired by defining $f(a)$ to be the limit. Jump and infinite discontinuities cannot be repaired this way.",
          },
          {
            heading: "The derivative as a limit",
            body: "The slope of the secant line from $x$ to $x+h$ is the difference quotient $\\frac{f(x+h)-f(x)}{h}$. As $h\\to0$ the secant approaches the tangent line, so $f'(x)=\\lim_{h\\to0}\\frac{f(x+h)-f(x)}{h}$. Expand, simplify so that $h$ cancels from the denominator, and only then let $h\\to0$. The tangent line at $x=a$ is $y-f(a)=f'(a)(x-a)$.",
          },
        ],
        keyFormulas: [
          { name: "Equal degrees", statement: "$\\lim_{x\\to\\infty}\\frac{ax^n+\\cdots}{bx^n+\\cdots}=\\frac ab$" },
          { name: "Derivative", statement: "$f'(x)=\\lim_{h\\to0}\\frac{f(x+h)-f(x)}{h}$" },
        ],
        workedExample: {
          problem: "Use the limit definition to find $f'(x)$ for $f(x)=x^2$.",
          solution: "$\\frac{(x+h)^2-x^2}{h}=\\frac{2xh+h^2}{h}=2x+h$ for $h\\ne0$. As $h\\to0$ this tends to $2x$, so $f'(x)=2x$.",
        },
      },
      questions: [
        {
          id: "pc-u5-limits-continuity-derivative-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Evaluate $\\lim_{x\\to\\infty}\\frac{3x^2+1}{x^2-5}$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$0$" },
              { id: "b", text: "$-\\frac15$" },
              { id: "c", text: "$3$" },
              { id: "d", text: "$\\infty$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Limits at infinity", statement: "$\\frac1{x^n}\\to0$ as $x\\to\\infty$ for $n>0$." },
            ],
            steps: [
              { reasoning: "Divide numerator and denominator by $x^2$.", working: "\\frac{3+\\frac{1}{x^2}}{1-\\frac{5}{x^2}}", marks: 1, markCode: "M" },
              { reasoning: "The fractions tend to 0.", working: "\\frac{3}{1}=3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $3$",
            commonErrors: ["Answering $0$ because the denominator grows.", "Substituting $x=0$ giving $-\\frac15$."],
          },
        },
        {
          id: "pc-u5-limits-continuity-derivative-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Evaluate $\\lim_{x\\to-\\infty}\\frac{6x^2-x+1}{3x^2+2}$.",
          response: { type: "numeric", parts: [{ label: "Limit", answer: 2 }] },
          markscheme: {
            principles: [
              { kind: "property", name: "Limits at infinity", statement: "$\\frac1{x^n}\\to0$ as $x\\to\\pm\\infty$ for $n>0$." },
            ],
            steps: [
              { reasoning: "Divide every term by the highest power in the denominator, $x^2$.", working: "\\frac{6-\\frac1x+\\frac1{x^2}}{3+\\frac2{x^2}}", marks: 1, markCode: "M" },
              { reasoning: "As $x\\to-\\infty$, $\\frac1x\\to0$ and $\\frac1{x^2}\\to0$.", working: "\\frac{6-0+0}{3+0}", marks: 1, markCode: "A" },
              { reasoning: "Simplify.", working: "2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2$",
            commonErrors: ["Writing $-2$ because $x\\to-\\infty$.", "Ignoring lower-degree terms incorrectly in the process, then dividing wrongly."],
          },
        },
        {
          id: "pc-u5-limits-continuity-derivative-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Define $f(x)=\\frac{x^2+x-6}{x-2}$ for $x\\ne2$ and $f(2)=k$. Find $\\lim_{x\\to2}f(x)$ and the value of $k$ that makes $f$ continuous at $x=2$.",
          response: {
            type: "numeric",
            parts: [
              { label: "$\\lim_{x\\to2}f(x)$", answer: 5 },
              { label: "Value of $k$", answer: 5 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Continuity", statement: "$f$ is continuous at $a$ if $\\lim_{x\\to a}f(x)=f(a)$." },
            ],
            steps: [
              { reasoning: "Factor the numerator: $x^2+x-6=(x+3)(x-2)$.", working: "f(x)=\\frac{(x+3)(x-2)}{x-2}=x+3,\\quad x\\ne2", marks: 1, markCode: "M" },
              { reasoning: "Take the limit of the simplified expression.", working: "\\lim_{x\\to2}(x+3)=5", marks: 1, markCode: "A" },
              { reasoning: "Continuity requires $f(2)$ to equal the limit.", working: "k=\\lim_{x\\to2}f(x)", marks: 1, markCode: "M" },
              { reasoning: "State the value.", working: "k=5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Limit $5$; $k=5$.",
            commonErrors: ["Substituting $x=2$ and calling the limit undefined.", "Choosing $k=0$."],
          },
        },
        {
          id: "pc-u5-limits-continuity-derivative-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Let $f(x)=x^2+2x$.",
          parts: [
            { label: "a", prompt: "Simplify the difference quotient $\\frac{f(x+h)-f(x)}{h}$ for $h\\ne0$.", marks: 3 },
            { label: "b", prompt: "Use a limit to find $f'(x)$.", marks: 2 },
            { label: "c", prompt: "Find the slope of the tangent line at $x=3$ and write its equation.", marks: 3 },
            { label: "d", prompt: "Compute the slope of the secant line through $x=3$ and $x=3.01$ and compare it with your answer to part (c).", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Derivative", statement: "$f'(x)=\\lim_{h\\to0}\\frac{f(x+h)-f(x)}{h}$." },
              { kind: "formula", name: "Tangent line", statement: "$y-f(a)=f'(a)(x-a)$" },
            ],
            steps: [
              { part: "a", reasoning: "Expand $f(x+h)$.", working: "f(x+h)=x^2+2xh+h^2+2x+2h", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Subtract $f(x)$; the $x^2$ and $2x$ terms cancel.", working: "f(x+h)-f(x)=2xh+h^2+2h", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Divide by $h$ (valid since $h\\ne0$).", working: "\\frac{2xh+h^2+2h}{h}=2x+h+2", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Take the limit as $h\\to0$.", working: "\\lim_{h\\to0}(2x+h+2)", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "f'(x)=2x+2", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Slope at $x=3$.", working: "f'(3)=2(3)+2=8", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Find the point of tangency: $f(3)=9+6=15$.", working: "(3,15)", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Use point-slope form.", working: "y-15=8(x-3) \\Rightarrow y=8x-9", marks: 1, markCode: "A" },
              { part: "d", reasoning: "From part (a) with $x=3$, $h=0.01$ the secant slope is $2(3)+0.01+2$.", working: "8.01", marks: 1, markCode: "A" },
              { part: "d", reasoning: "The secant slope is very close to the tangent slope 8 and approaches it as $h\\to0$.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $2x+h+2$. (b) $f'(x)=2x+2$. (c) slope $8$; $y=8x-9$. (d) $8.01\\approx8$.",
            commonErrors: ["Setting $h=0$ before simplifying, giving $\\frac00$.", "Forgetting the $2h$ term from $2(x+h)$.", "Writing $(x+h)^2=x^2+h^2$."],
          },
        },
      ],
    },
  ],
};
