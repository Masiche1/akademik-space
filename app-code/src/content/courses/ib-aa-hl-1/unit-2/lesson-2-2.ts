import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "aahl-u2-lesson-2-2",
  code: "2-2",
  title: "Rational Functions, Symmetry and Inequalities",
  goal: "I CAN find oblique asymptotes, use even, odd and self-inverse symmetry, solve inequalities and handle $|f(x)|$ and $f(|x|)$.",
  standards: ["AHL 2.13", "AHL 2.14", "AHL 2.15", "AHL 2.16"],
  vocabulary: [
    { term: "Oblique asymptote", definition: "A slanted line $y=mx+c$ that the graph approaches as $x\\to\\pm\\infty$; it occurs when the numerator's degree is one more than the denominator's." },
    { term: "Even function", definition: "A function with $f(-x)=f(x)$ for all $x$ in its domain; its graph is symmetric about the $y$-axis." },
    { term: "Odd function", definition: "A function with $f(-x)=-f(x)$ for all $x$ in its domain; its graph has rotational symmetry about the origin." },
    { term: "Self-inverse function", definition: "A function with $f^{-1}(x)=f(x)$, equivalently $f(f(x))=x$; its graph is symmetric about $y=x$." },
    { term: "Modulus function", definition: "$|x|=x$ for $x\\ge0$ and $-x$ for $x<0$. The graph of $y=|f(x)|$ reflects the parts of $y=f(x)$ below the $x$-axis into the upper half-plane." },
    { term: "$f(|x|)$", definition: "The graph of $y=f(|x|)$ keeps the part of $y=f(x)$ with $x\\ge0$ and reflects it in the $y$-axis." },
  ],
  concepts: [
    {
      id: "aahl-u2-oblique-symmetry",
      title: "Oblique asymptotes, odd/even and self-inverse functions",
      skill: "Find oblique asymptotes by division and identify even, odd and self-inverse functions algebraically.",
      lesson: {
        sections: [
          {
            heading: "Oblique asymptotes",
            body: "When the numerator of a rational function has degree one more than the denominator, divide: $\\frac{x^2+1}{x-1}=x+1+\\frac{2}{x-1}$. As $|x|\\to\\infty$ the remainder term tends to $0$, so the graph approaches the line $y=x+1$. Vertical asymptotes occur where the denominator is zero and the numerator is not.",
          },
          {
            heading: "Symmetry",
            body: "To test parity, find $f(-x)$ and compare: equal to $f(x)$ means even, equal to $-f(x)$ means odd. A function can be neither. For self-inverse functions, show $f(f(x))=x$ or check that $f^{-1}$ has the same rule as $f$. For $f(x)=\\frac{ax+b}{cx-a}$ the function is always self-inverse.",
          },
        ],
        keyFormulas: [
          { name: "Even function", statement: "$f(-x)=f(x)$" },
          { name: "Odd function", statement: "$f(-x)=-f(x)$" },
          { name: "Self-inverse", statement: "$f^{-1}(x)=f(x)\\iff f(f(x))=x$" },
        ],
        workedExample: {
          problem: "Show that $f(x)=x^3-x$ is odd.",
          solution: "$f(-x)=(-x)^3-(-x)=-x^3+x=-(x^3-x)=-f(x)$, so $f$ is odd for all real $x$.",
        },
      },
      questions: [
        {
          id: "aahl-u2-oblique-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Find the equation of the oblique asymptote of $f(x)=\\frac{x^2+1}{x-1}$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$y=x+1$" },
              { id: "b", text: "$y=x-1$" },
              { id: "c", text: "$y=x$" },
              { id: "d", text: "$y=x+2$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Oblique asymptote", statement: "Write $f(x)=mx+c+\\frac{r}{\\text{denominator}}$; the asymptote is $y=mx+c$." },
            ],
            steps: [
              { reasoning: "Divide: $x^2+1=(x-1)(x+1)+2$.", working: "f(x)=x+1+\\frac{2}{x-1}", marks: 1, markCode: "M" },
              { reasoning: "The fraction tends to $0$ as $|x|\\to\\infty$.", working: "y=x+1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $y=x+1$",
            commonErrors: ["Taking the vertical asymptote $x=1$ as the answer.", "Ignoring the remainder and writing $y=x$."],
          },
        },
        {
          id: "aahl-u2-oblique-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "The graph of $y=\\frac{2x^2-3x+5}{x+1}$ has an oblique asymptote $y=mx+c$. Find $m$ and $c$.",
          response: { type: "numeric", parts: [{ label: "$m$", answer: 2 }, { label: "$c$", answer: -5 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Polynomial division", statement: "Numerator $=$ (denominator)(quotient) $+$ remainder." },
            ],
            steps: [
              { reasoning: "Divide $2x^2-3x+5$ by $(x+1)$: the first quotient term is $2x$, leaving $-5x+5$.", working: "2x^2-3x+5=(x+1)(2x-5)+10", marks: 1, markCode: "M" },
              { reasoning: "Rewrite the function.", working: "y=2x-5+\\frac{10}{x+1}", marks: 1, markCode: "A" },
              { reasoning: "Read the asymptote.", working: "y=2x-5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$m=2$, $c=-5$",
            commonErrors: ["Sign error: $(x+1)(2x-5)=2x^2-3x-5$, so the remainder is $+10$, not $0$.", "Using $c=5$."],
          },
        },
        {
          id: "aahl-u2-oblique-q3",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 4,
          stem: "The function $f(x)=\\frac{ax+1}{x-3}$, $x\\ne3$, is self-inverse. Find the value of $a$.",
          response: { type: "numeric", parts: [{ label: "$a$", answer: 3 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Self-inverse", statement: "$f^{-1}(x)=f(x)$." },
            ],
            steps: [
              { reasoning: "Let $y=\\frac{ax+1}{x-3}$ and rearrange to make $x$ the subject.", working: "y(x-3)=ax+1", marks: 1, markCode: "M" },
              { reasoning: "Collect terms in $x$.", working: "x(y-a)=3y+1\\Rightarrow x=\\frac{3y+1}{y-a}", marks: 1, markCode: "A" },
              { reasoning: "Swap variables to write the inverse.", working: "f^{-1}(x)=\\frac{3x+1}{x-a}", marks: 1, markCode: "M" },
              { reasoning: "Equate with $f(x)=\\frac{ax+1}{x-3}$: matching numerators and denominators gives $a=3$.", working: "a=3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$a=3$",
            commonErrors: ["Equating $f(x)$ with $f(-x)$ rather than $f^{-1}(x)$.", "Not swapping $x$ and $y$."],
            examinerNote: "Using the structure $\\frac{ax+b}{cx-a}$: the denominator constant $-3$ must be $-a$, so $a=3$.",
          },
        },
        {
          id: "aahl-u2-oblique-q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 10,
          stem: "Let $f(x)=\\frac{x^2-3x+1}{x-1}$, $x\\ne1$.",
          parts: [
            { label: "a", prompt: "Write down the equation of the vertical asymptote and find the equation of the oblique asymptote of the graph of $y=f(x)$.", marks: 2 },
            { label: "b", prompt: "Find the coordinates of the axes intercepts of the graph.", marks: 2 },
            { label: "c", prompt: "Show that $f'(x)>0$ for all $x\\ne1$, and interpret this result.", marks: 3 },
            { label: "d", prompt: "Show that $g(x)=f(x+1)+1$ is an odd function, and interpret this geometrically.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Asymptotes", statement: "Vertical where the denominator is $0$; oblique from division." },
              { kind: "definition", name: "Odd function", statement: "$g(-x)=-g(x)$; graph symmetric under rotation of $180^\\circ$ about the origin." },
            ],
            steps: [
              { part: "a", reasoning: "Division: $x^2-3x+1=(x-1)(x-2)-1$.", working: "f(x)=x-2-\\frac{1}{x-1}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State both asymptotes.", working: "x=1;\\quad y=x-2", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$y$-intercept: $f(0)=\\frac{1}{-1}$; $x$-intercepts: solve $x^2-3x+1=0$.", working: "(0,-1);\\quad x=\\frac{3\\pm\\sqrt5}{2}", marks: 2, markCode: "A" },
              { part: "c", reasoning: "Differentiate $f(x)=x-2-(x-1)^{-1}$.", working: "f'(x)=1+\\frac{1}{(x-1)^2}", marks: 2, markCode: "M" },
              { part: "c", reasoning: "Both terms are positive, so $f'(x)>1>0$: $f$ is increasing on each branch and has no stationary points.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Compute $f(x+1)=(x+1)-2-\\frac1x=x-1-\\frac1x$.", working: "g(x)=x-\\frac1x", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Test parity.", working: "g(-x)=-x+\\frac1x=-g(x)", marks: 1, markCode: "A" },
              { part: "d", reasoning: "$g$ is $f$ translated by $\\begin{pmatrix}-1\\\\1\\end{pmatrix}$, so the graph of $f$ has $180^\\circ$ rotational symmetry about $(1,-1)$, the intersection of the asymptotes.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $x=1$; $y=x-2$ (b) $(0,-1)$, $\\left(\\frac{3\\pm\\sqrt5}2,0\\right)$ (c) $f'(x)=1+\\frac1{(x-1)^2}>0$ (d) $g(x)=x-\\frac1x$ is odd; symmetry about $(1,-1)$.",
            commonErrors: ["Differentiating $-\\frac{1}{x-1}$ as $-\\frac{1}{(x-1)^2}$.", "Claiming the graph is odd about the origin rather than about $(1,-1)$."],
          },
        },
        {
          id: "aahl-u2-oblique-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Find the equation of the oblique asymptote of $f(x)=\\frac{x^2+3x+1}{x+2}$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$y=x+1$" },
              { id: "b", text: "$y=x-1$" },
              { id: "c", text: "$y=x+2$" },
              { id: "d", text: "$y=x$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Oblique asymptote", statement: "Write $f(x)=mx+c+\\frac{r}{\\text{denominator}}$; the asymptote is $y=mx+c$." },
            ],
            steps: [
              { reasoning: "Divide: $x^2+3x+1=(x+2)(x+1)-1$.", working: "f(x)=x+1-\\frac{1}{x+2}", marks: 1, markCode: "M" },
              { reasoning: "The fraction tends to $0$ as $|x|\\to\\infty$.", working: "y=x+1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $y=x+1$",
            commonErrors: ["Sign error in the remainder giving $y=x-1$.", "Ignoring the remainder and writing $y=x$."],
          },
        },
        {
          id: "aahl-u2-oblique-q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "The graph of $y=\\frac{x^2-3}{x^2+1}$ has which horizontal asymptote?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$y=1$" },
              { id: "b", text: "$y=-3$" },
              { id: "c", text: "$y=0$" },
              { id: "d", text: "There is no horizontal asymptote" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Horizontal asymptote", statement: "When numerator and denominator have equal degree, the horizontal asymptote is the ratio of the leading coefficients." },
            ],
            steps: [
              { reasoning: "Both polynomials have degree $2$ with leading coefficient $1$.", working: "\\frac{1}{1}=1", marks: 1, markCode: "M" },
              { reasoning: "State the asymptote.", working: "y=1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $y=1$",
            commonErrors: ["Using the constant terms to get $y=-3$.", "Claiming there is no asymptote."],
          },
        },
        {
          id: "aahl-u2-oblique-q7",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The function $f(x)=x^3+2x$ is",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "even" },
              { id: "b", text: "odd" },
              { id: "c", text: "neither even nor odd" },
              { id: "d", text: "both even and odd" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Odd function", statement: "$f$ is odd if $f(-x)=-f(x)$ for all $x$ in the domain." },
            ],
            steps: [
              { reasoning: "Compute $f(-x)$.", working: "f(-x)=-x^3-2x", marks: 1, markCode: "M" },
              { reasoning: "Compare with $-f(x)=-(x^3+2x)$; they are equal.", working: "f(-x)=-f(x)", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** odd",
            commonErrors: ["Thinking $x^3$ makes it neither; odd powers give odd functions.", "Choosing 'both'; no nonzero function is both even and odd."],
          },
        },
        {
          id: "aahl-u2-oblique-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "The function $f(x)=x^4-x^2$ is",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "odd" },
              { id: "b", text: "even" },
              { id: "c", text: "neither even nor odd" },
              { id: "d", text: "both even and odd" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Even function", statement: "$f$ is even if $f(-x)=f(x)$ for all $x$ in the domain." },
            ],
            steps: [
              { reasoning: "Compute $f(-x)$.", working: "f(-x)=(-x)^4-(-x)^2=x^4-x^2", marks: 1, markCode: "M" },
              { reasoning: "This equals $f(x)$, so $f$ is even.", working: "f(-x)=f(x)", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** even",
            commonErrors: ["Thinking the minus sign in $-x^2$ makes it odd.", "Only even powers of $x$ appear, so $f$ is even."],
          },
        },
        {
          id: "aahl-u2-oblique-q9",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "Which of the following functions is self-inverse?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$f(x)=\\frac{2x+3}{x-2}$" },
              { id: "b", text: "$f(x)=\\frac{2x+1}{x+3}$" },
              { id: "c", text: "$f(x)=\\frac{3x-2}{x+1}$" },
              { id: "d", text: "$f(x)=\\frac{x-1}{x+2}$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Self-inverse", statement: "A function of the form $\\frac{ax+b}{cx-a}$ is always self-inverse." },
            ],
            steps: [
              { reasoning: "Check the structure $\\frac{ax+b}{cx-a}$: for option (a), $a=2$ and the denominator constant is $-2=-a$.", working: "a=2,\\ c=1,\\ -2=-a", marks: 1, markCode: "M" },
              { reasoning: "Options (b), (c), (d) fail the constant condition.", working: "(b):+3\\ne-2;\\ (c):+1\\ne-3;\\ (d):+2\\ne-1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $f(x)=\\frac{2x+3}{x-2}$",
            commonErrors: ["Checking $f(-x)=f(x)$ instead of $f^{-1}(x)=f(x)$.", "Ignoring the sign of the denominator constant."],
          },
        },
        {
          id: "aahl-u2-oblique-q10",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The function $f(x)=|x|+x$ is",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "even" },
              { id: "b", text: "odd" },
              { id: "c", text: "neither even nor odd" },
              { id: "d", text: "both even and odd" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Parity", statement: "Compare $f(-x)$ with $f(x)$ and $-f(x)$." },
            ],
            steps: [
              { reasoning: "Compute $f(-x)$.", working: "f(-x)=|-x|+(-x)=|x|-x", marks: 1, markCode: "M" },
              { reasoning: "$|x|-x$ equals neither $|x|+x$ nor $-(|x|+x)$ for all $x$.", working: "f(-x)\\ne f(x),\\ f(-x)\\ne -f(x)", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** neither even nor odd",
            commonErrors: ["Assuming $|x|$ is even so the whole function is even.", "Checking only $x=0$."],
          },
        },
        {
          id: "aahl-u2-oblique-q11",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "The graph of $y=\\frac{2x^2-x+4}{x-1}$ has an oblique asymptote $y=mx+c$. Find $m$ and $c$.",
          response: { type: "numeric", parts: [{ label: "$m$", answer: 2 }, { label: "$c$", answer: 1 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Polynomial division", statement: "Numerator $=$ (denominator)(quotient) $+$ remainder." },
            ],
            steps: [
              { reasoning: "Divide $2x^2-x+4$ by $(x-1)$.", working: "2x^2-x+4=(x-1)(2x+1)+5", marks: 1, markCode: "M" },
              { reasoning: "Rewrite the function.", working: "y=2x+1+\\frac{5}{x-1}", marks: 1, markCode: "A" },
              { reasoning: "Read off the asymptote coefficients.", working: "m=2,\\ c=1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$m=2$, $c=1$",
            commonErrors: ["Sign error: $(x-1)(2x+1)=2x^2-x-1$, so the remainder is $+5$.", "Using $c=-1$ from the denominator."],
          },
        },
        {
          id: "aahl-u2-oblique-q12",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 3,
          stem: "Let $f(x)=x^2-3x+1$. Find the value of $f(3)+f(-3)$.",
          response: { type: "numeric", parts: [{ label: "$f(3)+f(-3)$", answer: 20 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Even and odd parts", statement: "$f(x)+f(-x)$ isolates the even part of $f$." },
            ],
            steps: [
              { reasoning: "Evaluate $f(3)$.", working: "f(3)=9-9+1=1", marks: 1, markCode: "M" },
              { reasoning: "Evaluate $f(-3)$.", working: "f(-3)=9+9+1=19", marks: 1, markCode: "M" },
              { reasoning: "Add.", working: "1+19=20", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$20$",
            commonErrors: ["Evaluating $f(-3)$ as $-17$.", "Forgetting the constant term contributes twice."],
          },
        },
        {
          id: "aahl-u2-oblique-q13",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "The graph of $y=\\frac{3x^2+2x-1}{x+1}$ has an oblique asymptote $y=mx+c$. Find $m$ and $c$.",
          response: { type: "numeric", parts: [{ label: "$m$", answer: 3 }, { label: "$c$", answer: -1 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Polynomial division", statement: "When the division is exact, the quotient is the oblique asymptote." },
            ],
            steps: [
              { reasoning: "Divide $3x^2+2x-1$ by $(x+1)$.", working: "3x^2+2x-1=(x+1)(3x-1)+0", marks: 1, markCode: "M" },
              { reasoning: "Rewrite the function.", working: "y=3x-1", marks: 1, markCode: "A" },
              { reasoning: "Read off the coefficients.", working: "m=3,\\ c=-1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$m=3$, $c=-1$",
            commonErrors: ["Sign error giving $c=1$.", "Thinking there is no oblique asymptote because the division is exact."],
          },
        },
        {
          id: "aahl-u2-oblique-q14",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 3,
          stem: "The graph of $y=\\frac{x^3+2x}{x^2-1}$ has an oblique asymptote $y=mx+c$. Find $m$ and $c$.",
          response: { type: "numeric", parts: [{ label: "$m$", answer: 1 }, { label: "$c$", answer: 0 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Polynomial division", statement: "Divide so the remainder has degree less than the denominator." },
            ],
            steps: [
              { reasoning: "Divide $x^3+2x$ by $x^2-1$.", working: "x^3+2x=(x^2-1)x+3x", marks: 1, markCode: "M" },
              { reasoning: "Rewrite: the remainder term $\\frac{3x}{x^2-1}$ tends to $0$.", working: "y=x+\\frac{3x}{x^2-1}", marks: 1, markCode: "A" },
              { reasoning: "Read off the coefficients.", working: "m=1,\\ c=0", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$m=1$, $c=0$",
            commonErrors: ["Stopping the division too early and writing $y=x^2+\\cdots$.", "Including the remainder in the asymptote."],
          },
        },
        {
          id: "aahl-u2-oblique-q15",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 10,
          stem: "Let $f(x)=\\frac{x^2+x-1}{x-1}$, where $x\\ne1$.",
          parts: [
            { label: "a", prompt: "Use polynomial division to write $f(x)$ in the form $x+2+\\frac{r}{x-1}$, stating the value of $r$.", marks: 2 },
            { label: "b", prompt: "Write down the equations of the vertical and oblique asymptotes of the graph of $y=f(x)$.", marks: 2 },
            { label: "c", prompt: "Show that $f$ is neither an even nor an odd function.", marks: 3 },
            { label: "d", prompt: "Show that $f(1+t)+f(1-t)=6$ for $t\\ne0$, and state what this shows about the symmetry of the graph.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Asymptotes", statement: "Vertical where the denominator is $0$; oblique from the quotient of the division." },
              { kind: "definition", name: "Parity", statement: "Even: $f(-x)=f(x)$; odd: $f(-x)=-f(x)$." },
            ],
            steps: [
              { part: "a", reasoning: "Divide: $(x-1)(x+2)=x^2+x-2$.", working: "x^2+x-1=(x-1)(x+2)+1", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the remainder form.", working: "f(x)=x+2+\\frac{1}{x-1},\\ r=1", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Vertical asymptote.", working: "x=1", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Oblique asymptote.", working: "y=x+2", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Compute $f(-x)$.", working: "f(-x)=\\frac{x^2-x-1}{-x-1}=\\frac{1+x-x^2}{x+1}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Compare with $f(x)$ and $-f(x)$; neither matches.", working: "f(-x)\\ne f(x),\\quad f(-x)\\ne -f(x)", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Conclude.", working: "f\\text{ is neither even nor odd (AG)}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Substitute $x=1+t$ into $f(x)=x+2+\\frac{1}{x-1}$.", working: "f(1+t)=t+3+\\frac1t", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Substitute $x=1-t$.", working: "f(1-t)=3-t-\\frac1t", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Add: the variable terms cancel, leaving $6$; the graph has $180^\\circ$ rotational symmetry about $(1,3)$, the intersection of the asymptotes.", working: "f(1+t)+f(1-t)=6\\quad\\text{(AG)}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $f(x)=x+2+\\frac{1}{x-1}$, $r=1$ (b) $x=1$; $y=x+2$ (c) shown (d) $6$; symmetry about $(1,3)$",
            commonErrors: ["Sign error in the remainder: $r=1$, not $-1$.", "In (c), comparing $f(-x)$ only with $f(x)$ and not with $-f(x)$."],
            examinerNote: "Check (d): $f(2)=5$, $f(0)=-1$, and $5+(-1)=6$ about the centre $(1,3)$.",
          },
        },
        {
          id: "aahl-u2-oblique-q16",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 11,
          stem: "This question investigates functions of the form $f(x)=\\frac{ax+b}{x-a}$, where $a,b\\in\\mathbb{R}$ and $x\\ne a$.",
          parts: [
            { label: "a", prompt: "Show that $f(f(x))=x$ for all $x$ in the domain of $f$.", marks: 4 },
            { label: "b", prompt: "Verify that $f(x)=\\frac{2x+5}{x-2}$ is self-inverse.", marks: 2 },
            { label: "c", prompt: "When $a=1$, find the value of $b$ for which $f(3)=4$.", marks: 2 },
            { label: "d", prompt: "Find the $x$-coordinates of the points where the graph of $y=f(x)$ intersects the line $y=x$.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Self-inverse", statement: "$f^{-1}(x)=f(x)$, equivalently $f(f(x))=x$." },
            ],
            steps: [
              { part: "a", reasoning: "Substitute $f(x)$ into itself.", working: "f(f(x))=\\frac{a\\cdot\\frac{ax+b}{x-a}+b}{\\frac{ax+b}{x-a}-a}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Simplify the numerator.", working: "\\frac{a(ax+b)+b(x-a)}{x-a}=\\frac{x(a^2+b)}{x-a}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Simplify the denominator.", working: "\\frac{ax+b-a(x-a)}{x-a}=\\frac{a^2+b}{x-a}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Divide; the factor $a^2+b$ cancels (note $a^2+b\\ne0$ is required for the function to be defined).", working: "f(f(x))=x\\quad\\text{(AG)}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "The function has the required form with $a=2$ (denominator $x-2=x-a$).", working: "a=2,\\ c=1", marks: 1, markCode: "M" },
              { part: "b", reasoning: "By part (a), $f(f(x))=x$, so $f^{-1}=f$.", working: "f\\text{ is self-inverse (AG)}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "With $a=1$, $f(x)=\\frac{x+b}{x-1}$, so $f(3)=\\frac{3+b}{2}$.", working: "\\frac{3+b}{2}=4", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Solve.", working: "b=5", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Set $f(x)=x$ and rearrange.", working: "ax+b=x(x-a)\\Rightarrow x^2-2ax-b=0", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Recognize a quadratic in $x$.", working: "x=\\frac{2a\\pm\\sqrt{4a^2+4b}}{2}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Simplify.", working: "x=a\\pm\\sqrt{a^2+b}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) proved (b) self-inverse (c) $b=5$ (d) $x=a\\pm\\sqrt{a^2+b}$",
            commonErrors: ["Forgetting to subtract $a(x-a)$ correctly in the denominator of (a).", "In (d), writing $x^2-2ax+b=0$ (sign of $b$)."],
            examinerNote: "Check (d): fixed points exist when $a^2+b\\ge0$; for $f(x)=\\frac{2x+5}{x-2}$ they are $x=2\\pm3$, i.e. $5$ and $-1$.",
          },
        },
      ],
    },
    {
      id: "aahl-u2-inequalities-modulus",
      title: "Inequalities, $|f(x)|$ and $f(|x|)$",
      skill: "Solve polynomial, rational and modulus equations and inequalities and analyse graphs of $|f(x)|$ and $f(|x|)$.",
      lesson: {
        sections: [
          {
            heading: "Inequalities",
            body: "Never multiply an inequality by an expression of unknown sign. Instead, move everything to one side, factorize, and use a sign diagram (or sketch) on intervals bounded by zeros and undefined points. For example $\\frac{x-5}{x-1}\\ge0$ requires the numerator and denominator to have the same sign, with $x=1$ excluded.",
          },
          {
            heading: "Modulus equations and graphs",
            body: "$|a|=|b|$ is equivalent to $a^2=b^2$, or $a=\\pm b$. $|a|<k$ ($k>0$) means $-k<a<k$, and $|a|>k$ means $a<-k$ or $a>k$. The graph of $y=|f(x)|$ reflects the part below the $x$-axis upward. The graph of $y=f(|x|)$ keeps the right half and reflects it in the $y$-axis, so it is always even.",
          },
        ],
        keyFormulas: [
          { name: "Modulus inequality", statement: "$|a|<k\\iff-k<a<k$" },
          { name: "Equal moduli", statement: "$|a|=|b|\\iff a=b\\text{ or }a=-b$" },
        ],
        workedExample: {
          problem: "Solve $|x-2|<3$.",
          solution: "$-3<x-2<3$, so $-1<x<5$.",
        },
      },
      questions: [
        {
          id: "aahl-u2-ineq-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Solve $|2x-1|<5$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$-2<x<3$" },
              { id: "b", text: "$-3<x<2$" },
              { id: "c", text: "$x<-2$ or $x>3$" },
              { id: "d", text: "$-2<x<2$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Modulus inequality", statement: "$|a|<k\\iff-k<a<k$." },
            ],
            steps: [
              { reasoning: "Write the double inequality.", working: "-5<2x-1<5", marks: 1, markCode: "M" },
              { reasoning: "Add 1 and divide by 2.", working: "-2<x<3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $-2<x<3$",
            commonErrors: ["Choosing the outside region $x<-2$ or $x>3$ (confusing $<$ with $>$).", "Forgetting to divide the $-5+1$ term correctly."],
          },
        },
        {
          id: "aahl-u2-ineq-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Solve the equation $|2x-1|=|x+4|$. Enter the solutions in any order.",
          response: { type: "numeric", parts: [{ label: "Solution 1", answer: 5 }, { label: "Solution 2", answer: -1 }], unordered: true },
          markscheme: {
            principles: [
              { kind: "property", name: "Equal moduli", statement: "$|a|=|b|\\iff a=b$ or $a=-b$." },
            ],
            steps: [
              { reasoning: "Case $2x-1=x+4$.", working: "x=5", marks: 1, markCode: "A" },
              { reasoning: "Case $2x-1=-(x+4)$.", working: "2x-1=-x-4", marks: 1, markCode: "M" },
              { reasoning: "Solve: $3x=-3$.", working: "x=-1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=5$ or $x=-1$",
            commonErrors: ["Only considering one case.", "Writing $-(x+4)$ as $-x+4$."],
            examinerNote: "Check: $|2(5)-1|=9=|5+4|$ and $|-2-1|=3=|-1+4|$.",
          },
        },
        {
          id: "aahl-u2-ineq-q3",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 4,
          stem: "Solve the inequality $\\frac{x+3}{x-1}\\le2$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Sign analysis", statement: "Move all terms to one side, combine into one fraction and test the sign on each interval." },
            ],
            steps: [
              { reasoning: "Combine into one fraction (do not multiply by $x-1$, whose sign is unknown).", working: "\\frac{x+3-2(x-1)}{x-1}\\le0\\Rightarrow\\frac{5-x}{x-1}\\le0", marks: 1, markCode: "M" },
              { reasoning: "Equivalently $\\frac{x-5}{x-1}\\ge0$; the critical values are $x=1$ (excluded) and $x=5$.", working: "x=1,\\ x=5", marks: 1, markCode: "A" },
              { reasoning: "Test intervals: positive for $x<1$ and $x>5$, negative between.", marks: 1, markCode: "M" },
              { reasoning: "State the solution with $x=1$ excluded and $x=5$ included.", working: "x<1\\ \\text{or}\\ x\\ge5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x<1$ or $x\\ge5$",
            commonErrors: ["Multiplying both sides by $x-1$ and reversing nothing, giving $x\\ge5$ only.", "Including $x=1$."],
            examinerNote: "Check: $x=0$ gives $-3\\le2$ true; $x=3$ gives $3\\le2$ false; $x=6$ gives $1.8\\le2$ true.",
          },
        },
        {
          id: "aahl-u2-ineq-q4",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 12,
          stem: "This question investigates the number of solutions of the equation $|x^2-4|=k$ and generalizes the result to $|x^2-a^2|=k$, where $a>0$ and $k\\in\\mathbb{R}$.",
          parts: [
            { label: "a", prompt: "Solve $|x^2-4|=3$.", marks: 3 },
            { label: "b", prompt: "For the graph of $y=|x^2-4|$, write down the coordinates of the $x$-intercepts and of the local maximum point.", marks: 2 },
            { label: "c", prompt: "Hence determine the number of solutions of $|x^2-4|=k$ for each of the cases $k<0$, $k=0$, $0<k<4$, $k=4$ and $k>4$.", marks: 3 },
            { label: "d", prompt: "Show that $|x^2-a^2|=a^2$ has exactly three solutions, and state the set of values of $k$ for which $|x^2-a^2|=k$ has exactly four solutions.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Modulus equation", statement: "$|A|=k$ with $k\\ge0$ means $A=k$ or $A=-k$." },
              { kind: "principle", name: "Graphical counting", statement: "The number of solutions of $|f(x)|=k$ is the number of intersections of $y=|f(x)|$ with the horizontal line $y=k$." },
            ],
            steps: [
              { part: "a", reasoning: "Write both cases.", working: "x^2-4=3\\ \\text{or}\\ x^2-4=-3", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Solve each.", working: "x^2=7\\ \\text{or}\\ x^2=1", marks: 1, markCode: "A" },
              { part: "a", reasoning: "State all four solutions.", working: "x=\\pm\\sqrt7,\\ \\pm1", marks: 1, markCode: "A" },
              { part: "b", reasoning: "The $x$-intercepts are the roots of $x^2-4=0$.", working: "(-2,0),\\ (2,0)", marks: 1, markCode: "A" },
              { part: "b", reasoning: "The parabola's minimum $(0,-4)$ is reflected to a local maximum.", working: "(0,4)", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$k<0$ has no solutions; $k=0$ gives $x=\\pm2$ (two solutions).", working: "k<0:\\ 0;\\quad k=0:\\ 2", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$0<k<4$: the line meets all four arms; $k=4$ passes through the local maximum.", working: "0<k<4:\\ 4;\\quad k=4:\\ 3", marks: 1, markCode: "A" },
              { part: "c", reasoning: "For $k>4$ only the outer arms are met.", working: "k>4:\\ 2", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Split into cases for $k=a^2$.", working: "x^2-a^2=a^2\\Rightarrow x=\\pm\\sqrt2\\,a;\\quad x^2-a^2=-a^2\\Rightarrow x=0", marks: 2, markCode: "M" },
              { part: "d", reasoning: "These are three distinct values (since $a>0$), so exactly three solutions.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Four solutions require $x^2=a^2+k$ and $x^2=a^2-k$ both positive and different, that is $a^2-k>0$ and $k>0$.", working: "0<k<a^2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $\\pm1,\\pm\\sqrt7$ (b) $(\\pm2,0)$; $(0,4)$ (c) $0,2,4,3,2$ solutions respectively (d) three solutions when $k=a^2$ ($x=0,\\pm\\sqrt2a$); four solutions for $0<k<a^2$.",
            commonErrors: ["Missing the case $k=4$ giving three solutions because $x=0$ is a single solution.", "Giving $k<a^2$ without the lower bound $k>0$."],
            examinerNote: "Check with $a=2$: part (d) gives $k=4$ and $x=0,\\pm2\\sqrt2=\\pm\\sqrt8$, consistent with (c).",
          },
        },
        {
          id: "aahl-u2-ineq-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Solve $|x+3|<4$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$-7<x<1$" },
              { id: "b", text: "$-1<x<7$" },
              { id: "c", text: "$x<-7$ or $x>1$" },
              { id: "d", text: "$x<-1$ or $x>7$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Modulus inequality", statement: "$|a|<k\\iff-k<a<k$." },
            ],
            steps: [
              { reasoning: "Write the double inequality.", working: "-4<x+3<4", marks: 1, markCode: "M" },
              { reasoning: "Subtract 3 from all parts.", working: "-7<x<1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $-7<x<1$",
            commonErrors: ["Choosing the outside region (confusing $<$ with $>$).", "Adding 3 instead of subtracting."],
          },
        },
        {
          id: "aahl-u2-ineq-q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Solve $|2x+1|>3$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x<-2$ or $x>1$" },
              { id: "b", text: "$-2<x<1$" },
              { id: "c", text: "$x<-1$ or $x>2$" },
              { id: "d", text: "$-1<x<2$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Modulus inequality", statement: "$|a|>k\\iff a<-k$ or $a>k$ for $k>0$." },
            ],
            steps: [
              { reasoning: "Write both cases.", working: "2x+1>3\\ \\text{or}\\ 2x+1<-3", marks: 1, markCode: "M" },
              { reasoning: "Solve each case.", working: "x>1\\ \\text{or}\\ x<-2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $x<-2$ or $x>1$",
            commonErrors: ["Giving the inside interval $-2<x<1$.", "Forgetting to divide the $-3$ case correctly."],
          },
        },
        {
          id: "aahl-u2-ineq-q7",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Solve the equation $|x-1|=|x+5|$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x=-2$" },
              { id: "b", text: "$x=2$" },
              { id: "c", text: "$x=-3$" },
              { id: "d", text: "$x=3$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Equal moduli", statement: "$|a|=|b|\\iff a=b$ or $a=-b$." },
            ],
            steps: [
              { reasoning: "Set up both cases.", working: "x-1=x+5\\ \\text{or}\\ x-1=-(x+5)", marks: 1, markCode: "M" },
              { reasoning: "The first case is impossible; solve the second.", working: "2x=-4\\Rightarrow x=-2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $x=-2$",
            commonErrors: ["Keeping only one case and getting no solution.", "Geometric shortcut: $x$ is the midpoint of $1$ and $-5$, which is $-2$."],
          },
        },
        {
          id: "aahl-u2-ineq-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Solve the inequality $(x-2)(x+3)\\le0$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$-3\\le x\\le2$" },
              { id: "b", text: "$x\\le-3$ or $x\\ge2$" },
              { id: "c", text: "$-2\\le x\\le3$" },
              { id: "d", text: "$x<-3$ or $x>2$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Sign analysis", statement: "A positive-leading-coefficient quadratic is $\\le0$ between its roots." },
            ],
            steps: [
              { reasoning: "Identify the roots of the upward parabola.", working: "x=-3,\\ x=2", marks: 1, markCode: "M" },
              { reasoning: "The expression is non-positive between the roots, inclusive.", working: "-3\\le x\\le2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $-3\\le x\\le2$",
            commonErrors: ["Choosing the outside region (that solves $\\ge0$).", "Swapping the endpoints."],
          },
        },
        {
          id: "aahl-u2-ineq-q9",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "How many solutions does the equation $|x^2-1|=2$ have?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$0$" },
              { id: "b", text: "$2$" },
              { id: "c", text: "$3$" },
              { id: "d", text: "$4$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Modulus equation", statement: "$|A|=k$ with $k>0$ means $A=k$ or $A=-k$." },
            ],
            steps: [
              { reasoning: "Write both cases.", working: "x^2-1=2\\ \\text{or}\\ x^2-1=-2\\Rightarrow x^2=3\\ \\text{or}\\ x^2=-1", marks: 1, markCode: "M" },
              { reasoning: "Only $x^2=3$ is possible, giving two solutions.", working: "x=\\pm\\sqrt3\\Rightarrow 2\\text{ solutions}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** $2$",
            commonErrors: ["Counting $x^2=-1$ as giving two imaginary solutions.", "Assuming four solutions without checking."],
          },
        },
        {
          id: "aahl-u2-ineq-q10",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The graph of $y=|x-2|+3$ has its vertex at",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$(2,3)$" },
              { id: "b", text: "$(-2,3)$" },
              { id: "c", text: "$(2,-3)$" },
              { id: "d", text: "$(-3,2)$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Modulus graph", statement: "$y=|x-h|+k$ has vertex $(h,k)$." },
            ],
            steps: [
              { reasoning: "Identify $h$ and $k$ in $|x-h|+k$.", working: "h=2,\\ k=3", marks: 1, markCode: "M" },
              { reasoning: "State the vertex.", working: "(2,3)", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $(2,3)$",
            commonErrors: ["Using the sign of the shift inside the modulus.", "Confusing $h$ and $k$."],
          },
        },
        {
          id: "aahl-u2-ineq-q11",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Solve the equation $|3x-6|=9$. Enter the solutions in any order.",
          response: { type: "numeric", parts: [{ label: "Solution 1", answer: 5 }, { label: "Solution 2", answer: -1 }], unordered: true },
          markscheme: {
            principles: [
              { kind: "property", name: "Modulus equation", statement: "$|a|=k$ with $k>0$ means $a=k$ or $a=-k$." },
            ],
            steps: [
              { reasoning: "Case $3x-6=9$.", working: "3x=15\\Rightarrow x=5", marks: 1, markCode: "M" },
              { reasoning: "Case $3x-6=-9$.", working: "3x=-3\\Rightarrow x=-1", marks: 1, markCode: "M" },
              { reasoning: "State both solutions.", working: "x=5,\\ x=-1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=5$ or $x=-1$",
            commonErrors: ["Only solving one case.", "Dividing $-9$ by $3$ incorrectly."],
            examinerNote: "Check: $|3(5)-6|=9$ and $|3(-1)-6|=9$.",
          },
        },
        {
          id: "aahl-u2-ineq-q12",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Solve the equation $|2x-3|=|x+1|$. Enter the solutions in any order.",
          response: { type: "numeric", parts: [{ label: "Solution 1", answer: 4 }, { label: "Solution 2", answer: 0.6667, tolerance: 0.001 }], unordered: true },
          markscheme: {
            principles: [
              { kind: "property", name: "Equal moduli", statement: "$|a|=|b|\\iff a=b$ or $a=-b$." },
            ],
            steps: [
              { reasoning: "Case $2x-3=x+1$.", working: "x=4", marks: 1, markCode: "M" },
              { reasoning: "Case $2x-3=-(x+1)$.", working: "2x-3=-x-1\\Rightarrow 3x=2", marks: 1, markCode: "M" },
              { reasoning: "Solve and state both.", working: "x=\\tfrac23;\\quad x=4,\\ \\tfrac23", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=4$ or $x=\\frac23$",
            commonErrors: ["Writing $-(x+1)$ as $-x+1$.", "Keeping only the integer solution."],
            examinerNote: "Check: $|8-3|=5=|4+1|$ and $|\\frac43-3|=\\frac53=|\\frac23+1|$.",
          },
        },
        {
          id: "aahl-u2-ineq-q13",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 3,
          stem: "Solve the inequality $x^2-5x+6\\le0$. Enter the endpoints of the solution interval.",
          response: { type: "numeric", parts: [{ label: "Lower endpoint", answer: 2 }, { label: "Upper endpoint", answer: 3 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Sign analysis", statement: "A positive-leading-coefficient quadratic is $\\le0$ between its roots." },
            ],
            steps: [
              { reasoning: "Factorize.", working: "(x-2)(x-3)\\le0", marks: 1, markCode: "M" },
              { reasoning: "The upward parabola is non-positive between its roots.", working: "2\\le x\\le3", marks: 1, markCode: "M" },
              { reasoning: "State the endpoints.", working: "2\\ \\text{and}\\ 3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2\\le x\\le3$",
            commonErrors: ["Giving $x\\le2$ or $x\\ge3$ (the $\\ge0$ region).", "Excluding the endpoints."],
          },
        },
        {
          id: "aahl-u2-ineq-q14",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Solve the equation $|x+2|=|2x-1|$. Enter the solutions in any order.",
          response: { type: "numeric", parts: [{ label: "Solution 1", answer: 3 }, { label: "Solution 2", answer: -0.3333, tolerance: 0.001 }], unordered: true },
          markscheme: {
            principles: [
              { kind: "property", name: "Equal moduli", statement: "$|a|=|b|\\iff a=b$ or $a=-b$." },
            ],
            steps: [
              { reasoning: "Case $x+2=2x-1$.", working: "x=3", marks: 1, markCode: "M" },
              { reasoning: "Case $x+2=-(2x-1)$.", working: "x+2=-2x+1\\Rightarrow 3x=-1", marks: 1, markCode: "M" },
              { reasoning: "Solve and state both.", working: "x=-\\tfrac13;\\quad x=3,\\ -\\tfrac13", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=3$ or $x=-\\frac13$",
            commonErrors: ["Sign error in the second case.", "Missing the fractional solution."],
            examinerNote: "Check: $|3+2|=5=|6-1|$ and $|-\\frac13+2|=\\frac53=|-\\frac23-1|$.",
          },
        },
        {
          id: "aahl-u2-ineq-q15",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Let $f(x)=x^2-4x+3$.",
          parts: [
            { label: "a", prompt: "Solve $f(x)=0$.", marks: 2 },
            { label: "b", prompt: "Solve $|f(x)|=3$.", marks: 4 },
            { label: "c", prompt: "Describe the effect on the graph when passing from $y=f(x)$ to $y=|f(x)|$.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Modulus equation", statement: "$|f(x)|=k$ splits into $f(x)=k$ and $f(x)=-k$." },
              { kind: "definition", name: "Graph of $|f(x)|$", statement: "Parts of $y=f(x)$ below the $x$-axis are reflected into the upper half-plane." },
            ],
            steps: [
              { part: "a", reasoning: "Factorize.", working: "f(x)=(x-1)(x-3)", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the roots.", working: "x=1,\\ x=3", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Write the two cases.", working: "f(x)=3\\ \\text{or}\\ f(x)=-3", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Solve $x^2-4x+3=3$, i.e. $x(x-4)=0$.", working: "x=0,\\ x=4", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Solve $x^2-4x+3=-3$, i.e. $x^2-4x+6=0$; discriminant $16-24<0$, no solutions.", working: "\\Delta=-8<0", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State all solutions.", working: "x=0,\\ x=4", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Describe the reflection.", working: "\\text{Parts below the }x\\text{-axis are reflected upward}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Identify the new vertex.", working: "(2,-1)\\to(2,1)", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $x=1,3$ (b) $x=0,4$ (c) parts below the axis reflected; local minimum $(2,-1)$ becomes local maximum $(2,1)$",
            commonErrors: ["Solving $f(x)=-3$ as if it had real roots.", "Forgetting that $|f(x)|=3$ requires both cases."],
          },
        },
        {
          id: "aahl-u2-ineq-q16",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 10,
          stem: "This question investigates the number of solutions of $|x^2-4x+3|=k$ and generalizes the pattern.",
          parts: [
            { label: "a", prompt: "Find the $x$-intercepts and the coordinates of the local maximum point of the graph of $y=|x^2-4x+3|$.", marks: 3 },
            { label: "b", prompt: "Hence determine the number of solutions of $|x^2-4x+3|=k$ for each of the cases $k<0$, $k=0$, $0<k<1$, $k=1$ and $k>1$.", marks: 3 },
            { label: "c", prompt: "Find the sum of all solutions of $|x^2-4x+3|=1$.", marks: 2 },
            { label: "d", prompt: "State the set of values of $k$ for which the equation has exactly three solutions.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Modulus equation", statement: "$|A|=k$ splits into $A=k$ and $A=-k$." },
              { kind: "principle", name: "Graphical counting", statement: "The number of solutions equals the number of intersections with $y=k$." },
            ],
            steps: [
              { part: "a", reasoning: "The $x$-intercepts are the roots of $x^2-4x+3=0$.", working: "(1,0),\\ (3,0)", marks: 1, markCode: "M" },
              { part: "a", reasoning: "The parabola's vertex is $(2,-1)$; reflected, it becomes a local maximum.", working: "(2,1)", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the results.", working: "x=1,3;\\ \\text{local max }(2,1)", marks: 1, markCode: "A" },
              { part: "b", reasoning: "For $k<0$ no solutions; for $k=0$ two solutions $x=1,3$.", working: "k<0:\\ 0;\\quad k=0:\\ 2", marks: 1, markCode: "A" },
              { part: "b", reasoning: "For $0<k<1$ the line meets all four arms; for $k=1$ it passes through the local maximum.", working: "0<k<1:\\ 4;\\quad k=1:\\ 3", marks: 1, markCode: "A" },
              { part: "b", reasoning: "For $k>1$ only the outer arms are met.", working: "k>1:\\ 2", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Solve $x^2-4x+3=1$ and $x^2-4x+3=-1$.", working: "x^2-4x+2=0\\Rightarrow x=2\\pm\\sqrt2;\\quad x^2-4x+4=0\\Rightarrow x=2", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Sum all three solutions.", working: "(2+\\sqrt2)+(2-\\sqrt2)+2=6", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Exactly three solutions occur when the line is tangent at the local maximum.", working: "k=1", marks: 1, markCode: "M" },
              { part: "d", reasoning: "State the set.", working: "\\{1\\}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $(1,0)$, $(3,0)$; local maximum $(2,1)$ (b) $0,2,4,3,2$ solutions respectively (c) $6$ (d) $k=1$",
            commonErrors: ["Missing that $k=1$ gives three solutions, not four.", "In (c), forgetting the double root $x=2$ from $f(x)=-1$."],
            examinerNote: "Check (c): solutions $2\\pm\\sqrt2$ and $2$ sum to $6$.",
          },
        },
      ],
    },
  ],
};
