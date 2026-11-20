import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "edm11-u1-lesson-1-2",
  code: "1-2",
  title: "Functions and Graphs",
  goal: "I CAN recognise and use quadratic, cubic and reciprocal graphs, and use function notation, composite and inverse functions.",
  standards: ["4MA1 3.12", "4MA1 3.13", "4MA1 3.16H", "4MA1 3.17H"],
  vocabulary: [
    { term: "Quadratic graph", definition: "The graph of $y=ax^2+bx+c$: a smooth, symmetrical U-shaped or inverted U-shaped curve called a parabola." },
    { term: "Cubic graph", definition: "The graph of $y=ax^3+bx^2+cx+d$, which has an S-like shape and can cross the $x$-axis up to three times." },
    { term: "Reciprocal graph", definition: "The graph of $y=\\frac{k}{x}$: two separate branches that approach, but never touch, the axes." },
    { term: "Domain", definition: "The set of input values $x$ that a function can accept." },
    { term: "Range", definition: "The set of output values that a function produces." },
    { term: "Composite function", definition: "A function made by applying one function after another. $\\text{fg}(x)$ means apply g first, then f." },
    { term: "Inverse function", definition: "The function $\\text{f}^{-1}$ that reverses f, so that $\\text{f}^{-1}(\\text{f}(x))=x$." },
  ],
  concepts: [
    {
      id: "edm11-u1-graphs",
      title: "Quadratic, cubic and reciprocal graphs",
      skill: "Complete tables of values, recognise graph shapes and solve equations graphically.",
      lesson: {
        sections: [
          {
            heading: "Recognising the shapes",
            body: "A quadratic $y=ax^2+bx+c$ is a parabola: U-shaped if $a>0$, upside down if $a<0$, with a vertical line of symmetry. A cubic with a positive $x^3$ term rises from bottom left to top right. A reciprocal $y=\\frac{k}{x}$ has two branches and no value at $x=0$.",
          },
          {
            heading: "Tables of values",
            body: "Substitute each $x$-value carefully into the equation, taking care with negatives: $(-2)^2=4$ but $(-2)^3=-8$. Plot the points and join them with a smooth curve, not straight lines.",
          },
          {
            heading: "Solving equations graphically",
            body: "The solutions of $f(x)=0$ are the $x$-values where the curve $y=f(x)$ crosses the $x$-axis. To solve $f(x)=g(x)$, rearrange so that one side is the curve you have drawn, then draw the line $y=g(x)$ and read the $x$-coordinates of the intersections.",
          },
        ],
        keyFormulas: [
          { name: "Solving graphically", statement: "Solutions of $f(x)=g(x)$ are the $x$-coordinates where $y=f(x)$ meets $y=g(x)$" },
        ],
        workedExample: {
          problem: "The graph of $y=x^2-2x-3$ is drawn. Which line must be drawn to solve $x^2-2x-3=5$?",
          solution: "The left-hand side is the curve, so draw the horizontal line $y=5$. The $x$-coordinates of the intersections are the solutions. Algebraically $x^2-2x-8=0$, so $(x-4)(x+2)=0$ and $x=4$ or $x=-2$.",
        },
      },
      questions: [
        {
          id: "edm11-u1-graphs-q1",
          difficulty: "foundation",
          tier: "foundation",
          totalMarks: 1,
          stem: "A graph has two separate curved branches. One branch is in the top right and the other is in the bottom left. Neither branch touches the $x$-axis or the $y$-axis.\n\nWhich equation could be the equation of this graph?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$y=x^2$" },
              { id: "b", text: "$y=x^3$" },
              { id: "c", text: "$y=\\frac{1}{x}$" },
              { id: "d", text: "$y=-\\frac{1}{x}$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "property", name: "Reciprocal graph", statement: "For $k>0$, $y=\\frac{k}{x}$ has branches in the first and third quadrants." }],
            steps: [{ reasoning: "Two branches that never touch the axes mean a reciprocal graph. Positive $x$ gives positive $y$, so $k>0$.", working: "y=\\frac{1}{x}", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** $y=\\frac{1}{x}$",
            commonErrors: ["Choosing $y=-\\frac{1}{x}$, whose branches are in the top left and bottom right.", "Choosing $y=x^3$, which is a single connected curve through the origin."],
          },
        },
        {
          id: "edm11-u1-graphs-q2",
          difficulty: "core",
          tier: "foundation",
          totalMarks: 3,
          stem: "A table of values is being completed for $y=x^2-2x-3$.\n\nWork out the value of $y$ when $x=-2$, when $x=1$ and when $x=3$.",
          response: {
            type: "numeric",
            parts: [
              { label: "$y$ when $x=-2$", answer: 5 },
              { label: "$y$ when $x=1$", answer: -4 },
              { label: "$y$ when $x=3$", answer: 0 },
            ],
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Substitution", statement: "Replace $x$ with the given value, using brackets for negative values." }],
            steps: [
              { reasoning: "Substitute $x=-2$; $(-2)^2=4$ and $-2(-2)=+4$.", working: "4+4-3=5", marks: 1, markCode: "B" },
              { reasoning: "Substitute $x=1$.", working: "1-2-3=-4", marks: 1, markCode: "B" },
              { reasoning: "Substitute $x=3$.", working: "9-6-3=0", marks: 1, markCode: "B" },
            ],
            finalAnswer: "$5$, $-4$ and $0$",
            commonErrors: ["Evaluating $-2x$ as $-4$ when $x=-2$ instead of $+4$.", "Calculating $(-2)^2$ as $-4$."],
          },
        },
        {
          id: "edm11-u1-graphs-q3",
          difficulty: "challenge",
          tier: "higher",
          totalMarks: 4,
          stem: "The graph of $y=x^2-2x-3$ has been drawn.\n\nBy drawing a suitable straight line on the same grid, solve $x^2-3x-4=0$.\n\nState the equation of the line you draw, and give the two solutions.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Graphical solution", statement: "Rearrange the equation into the form (curve) = (line), then read the $x$-coordinates of the intersections." }],
            steps: [
              { reasoning: "Rewrite $x^2-3x-4=0$ so that one side is the equation of the drawn curve: $x^2-3x-4=(x^2-2x-3)-x-1$, so the equation becomes $x^2-2x-3=x+1$.", working: "x^2-3x-4=0 \\;\\Rightarrow\\; x^2-2x-3 = x+1", marks: 2, markCode: "M" },
              { reasoning: "The line to draw is $y=x+1$.", working: "y=x+1", marks: 1, markCode: "A" },
              { reasoning: "The line meets the curve where $x=-1$ and $x=4$.", working: "x=-1,\\; x=4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Line $y=x+1$; solutions $x=-1$ and $x=4$",
            commonErrors: ["Drawing $y=x-1$ by a sign slip.", "Solving $x^2-2x-3=0$ instead and giving $x=-1,3$."],
            examinerNote: "Check: $(x-4)(x+1)=x^2-3x-4$. Accept readings within the tolerance of the drawn graph.",
          },
        },
        {
          id: "edm11-u1-graphs-q4",
          difficulty: "challenge",
          tier: "higher",
          totalMarks: 8,
          stem: "A cubic graph has equation $y=x^3-3x+1$ for $-2\\le x\\le 2$. The graph rises from the bottom left to a maximum point at $(-1,3)$, falls to a minimum point at $(1,-1)$, and then rises again.",
          parts: [
            { label: "a", prompt: "Work out the value of $y$ when $x=-2$ and when $x=1$.", marks: 2 },
            { label: "b", prompt: "Explain why the equation $x^3-3x+1=0$ has three solutions.", marks: 2 },
            { label: "c", prompt: "Write down the equation of the straight line that should be drawn on the graph to solve $x^3-3x-2=0$.", marks: 2 },
            { label: "d", prompt: "Hence write down the solutions of $x^3-3x-2=0$. Explain why one of the solutions is a repeated solution.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Graphical solution", statement: "Solutions of $f(x)=k$ are the $x$-coordinates where $y=f(x)$ meets $y=k$." },
              { kind: "property", name: "Turning point", statement: "A line touching the curve at a turning point gives a repeated root." },
            ],
            steps: [
              { part: "a", reasoning: "Substitute $x=-2$: $-8+6+1=-1$.", working: "y=-1", marks: 1, markCode: "B" },
              { part: "a", reasoning: "Substitute $x=1$: $1-3+1=-1$.", working: "y=-1", marks: 1, markCode: "B" },
              { part: "b", reasoning: "The solutions are where the curve meets $y=0$. The curve is below the axis at $x=-2$, above at the maximum $(-1,3)$, below at the minimum $(1,-1)$ and above again at $x=2$ ($y=3$).", marks: 1, markCode: "M" },
              { part: "b", reasoning: "So it crosses the $x$-axis three times: between $x=-2$ and $x=-1$, between $x=0$ and $x=1$ (where $y$ goes from 1 to $-1$), and between $x=1$ and $x=2$.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Rewrite $x^3-3x-2=0$ as $x^3-3x+1=3$.", working: "x^3-3x+1=3", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Draw the horizontal line.", working: "y=3", marks: 1, markCode: "A" },
              { part: "d", reasoning: "The line $y=3$ touches the curve at the maximum $(-1,3)$ and crosses it at $(2,3)$.", working: "x=-1,\\; x=2", marks: 1, markCode: "A" },
              { part: "d", reasoning: "At $x=-1$ the line only touches the curve at the turning point, so that solution occurs twice.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $-1$ and $-1$ (b) three sign changes, so three crossings of the $x$-axis (c) $y=3$ (d) $x=-1$ (repeated) and $x=2$",
            commonErrors: ["Drawing $y=-2$ or $y=2$ instead of $y=3$.", "Not mentioning the turning point when explaining the repeated root."],
            examinerNote: "Check algebraically: $x^3-3x-2=(x+1)^2(x-2)$.",
          },
        },
      ],
    },
    {
      id: "edm11-u1-function-notation",
      title: "Function notation, composite and inverse functions",
      skill: "Evaluate functions, form composite functions, find inverse functions and state a range.",
      lesson: {
        sections: [
          {
            heading: "Function notation",
            body: "$f(x)=3x-2$ means that f takes an input $x$, multiplies by 3 and subtracts 2. $f(4)=3(4)-2=10$. The domain is the set of allowed inputs and the range is the set of outputs. For example, $g(x)=x^2+1$ has range $g(x)\\ge 1$.",
          },
          {
            heading: "Composite functions",
            body: "$fg(x)$ means 'do g first, then f': $fg(x)=f(g(x))$. The order matters. If $f(x)=2x+3$ and $g(x)=x^2$, then $fg(x)=2x^2+3$ but $gf(x)=(2x+3)^2$.",
          },
          {
            heading: "Inverse functions",
            body: "To find $f^{-1}(x)$, write $y=f(x)$, make $x$ the subject, then replace $y$ with $x$. For $f(x)=2x-3$: $y=2x-3$, so $x=\\frac{y+3}{2}$ and $f^{-1}(x)=\\frac{x+3}{2}$. When the subject appears twice, collect the $x$ terms and factorise.",
          },
        ],
        keyFormulas: [
          { name: "Composite", statement: "$fg(x)=f(g(x))$: apply g first" },
          { name: "Inverse", statement: "$f^{-1}(f(x))=x$" },
        ],
        workedExample: {
          problem: "$f(x)=2x-3$ and $g(x)=x^2$. Find $fg(x)$ and $f^{-1}(x)$.",
          solution: "$fg(x)=f(x^2)=2x^2-3$. For the inverse, $y=2x-3$ gives $x=\\frac{y+3}{2}$, so $f^{-1}(x)=\\frac{x+3}{2}$.",
        },
      },
      questions: [
        {
          id: "edm11-u1-function-notation-q1",
          difficulty: "foundation",
          tier: "higher",
          totalMarks: 1,
          stem: "$f(x)=3x-2$\n\nWork out $f(4)$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$10$" },
              { id: "b", text: "$14$" },
              { id: "c", text: "$7$" },
              { id: "d", text: "$12$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Function notation", statement: "$f(a)$ is the output when the input is $a$." }],
            steps: [{ reasoning: "Substitute $x=4$.", working: "3(4)-2=10", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** $10$",
            commonErrors: ["Calculating $3(4-2)=6$ or $3 \\times 4 + 2 = 14$."],
          },
        },
        {
          id: "edm11-u1-function-notation-q2",
          difficulty: "core",
          tier: "higher",
          totalMarks: 3,
          stem: "$f(x)=2x+3$ and $g(x)=x^2$\n\nWork out $gf(2)$ and $fg(3)$.",
          response: {
            type: "numeric",
            parts: [
              { label: "$gf(2)$", answer: 49 },
              { label: "$fg(3)$", answer: 21 },
            ],
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Composite function", statement: "$gf(x)=g(f(x))$: apply f first, then g." }],
            steps: [
              { reasoning: "For $gf(2)$ apply f first: $f(2)=7$.", working: "f(2)=2(2)+3=7", marks: 1, markCode: "M" },
              { reasoning: "Then apply g: $g(7)=49$.", working: "gf(2)=49", marks: 1, markCode: "A" },
              { reasoning: "For $fg(3)$ apply g first: $g(3)=9$, then $f(9)=2(9)+3$.", working: "fg(3)=21", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$gf(2)=49$, $fg(3)=21$",
            commonErrors: ["Applying the functions in the wrong order: $fg(2)$ would give $11$.", "Squaring $2x+3$ incorrectly as $4x^2+9$."],
          },
        },
        {
          id: "edm11-u1-function-notation-q3",
          difficulty: "challenge",
          tier: "higher",
          totalMarks: 4,
          stem: "$f(x)=\\frac{2x+1}{x-3}$ for $x\\ne 3$\n\nFind $f^{-1}(x)$ and hence work out the value of $f^{-1}(4)$.",
          response: { type: "numeric", parts: [{ label: "$f^{-1}(4)$", answer: 6.5 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Finding an inverse", statement: "Write $y=f(x)$, make $x$ the subject, then replace $y$ by $x$." },
            ],
            steps: [
              { reasoning: "Write $y=f(x)$ and clear the fraction.", working: "y(x-3)=2x+1 \\;\\Rightarrow\\; xy-3y=2x+1", marks: 1, markCode: "M" },
              { reasoning: "Collect the $x$ terms on one side and factorise.", working: "xy-2x=3y+1 \\;\\Rightarrow\\; x(y-2)=3y+1", marks: 1, markCode: "M" },
              { reasoning: "Divide, then replace $y$ with $x$.", working: "f^{-1}(x)=\\frac{3x+1}{x-2}", marks: 1, markCode: "A" },
              { reasoning: "Substitute $x=4$.", working: "f^{-1}(4)=\\frac{13}{2}=6.5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$f^{-1}(x)=\\frac{3x+1}{x-2}$; $f^{-1}(4)=6.5$",
            commonErrors: ["Failing to factorise out $x$ when it appears twice.", "Finding $\\frac{1}{f(x)}$ instead of the inverse."],
            examinerNote: "Check: $f(6.5)=\\frac{14}{3.5}=4$.",
          },
        },
        {
          id: "edm11-u1-function-notation-q4",
          difficulty: "challenge",
          tier: "higher",
          totalMarks: 8,
          stem: "$f(x)=2x-3$ and $g(x)=x^2+1$ for all real values of $x$.",
          parts: [
            { label: "a", prompt: "Write down the range of g.", marks: 1 },
            { label: "b", prompt: "Find $fg(x)$. Give your answer in its simplest form.", marks: 2 },
            { label: "c", prompt: "Solve $gf(x)=10$.", marks: 3 },
            { label: "d", prompt: "Solve $f^{-1}(x)=f(x)$.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Composite function", statement: "$fg(x)=f(g(x))$." },
              { kind: "principle", name: "Squares", statement: "$(p)^2=k$ gives $p=\\pm\\sqrt{k}$." },
            ],
            steps: [
              { part: "a", reasoning: "$x^2\\ge 0$ for all real $x$, so adding 1 gives a minimum of 1.", working: "g(x)\\ge 1", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Substitute $g(x)$ into f.", working: "fg(x)=2(x^2+1)-3", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Simplify.", working: "2x^2-1", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Form $gf(x)=(2x-3)^2+1$ and set it equal to 10.", working: "(2x-3)^2+1=10 \\;\\Rightarrow\\; (2x-3)^2=9", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Take both square roots.", working: "2x-3=3 \\quad\\text{or}\\quad 2x-3=-3", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Solve each.", working: "x=3 \\quad\\text{or}\\quad x=0", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Find $f^{-1}(x)=\\frac{x+3}{2}$ and set equal to $2x-3$, then multiply by 2.", working: "\\frac{x+3}{2}=2x-3 \\;\\Rightarrow\\; x+3=4x-6", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Solve for $x$.", working: "3x=9 \\;\\Rightarrow\\; x=3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $g(x)\\ge 1$ (b) $2x^2-1$ (c) $x=0$ or $x=3$ (d) $x=3$",
            commonErrors: ["Giving only the positive root in (c).", "Writing $gf(x)=2x^2-1$ (the wrong order)."],
            examinerNote: "Check (c): $gf(0)=(-3)^2+1=10$ and $gf(3)=3^2+1=10$. Check (d): $f(3)=3$ and $f^{-1}(3)=3$.",
          },
        },
      ],
    },
  ],
};
