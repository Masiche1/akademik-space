import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "aahl-u2-lesson-2-3",
  code: "2-3",
  title: "Further Trigonometry",
  goal: "I CAN use the reciprocal trigonometric functions, inverse trigonometric functions and compound angle identities to simplify, prove and solve.",
  standards: ["AHL 3.9", "AHL 3.10", "AHL 3.11"],
  vocabulary: [
    { term: "Reciprocal trigonometric functions", definition: "$\\sec\\theta=\\frac1{\\cos\\theta}$, $\\csc\\theta=\\frac1{\\sin\\theta}$ and $\\cot\\theta=\\frac1{\\tan\\theta}=\\frac{\\cos\\theta}{\\sin\\theta}$, defined where the denominator is non-zero." },
    { term: "Inverse trigonometric function", definition: "$\\arcsin$, $\\arccos$, $\\arctan$: the inverses of $\\sin,\\cos,\\tan$ on restricted domains. $\\arcsin x\\in\\left[-\\frac\\pi2,\\frac\\pi2\\right]$, $\\arccos x\\in[0,\\pi]$, $\\arctan x\\in\\left(-\\frac\\pi2,\\frac\\pi2\\right)$." },
    { term: "Pythagorean identities", definition: "$\\sin^2\\theta+\\cos^2\\theta=1$, $1+\\tan^2\\theta=\\sec^2\\theta$ and $1+\\cot^2\\theta=\\csc^2\\theta$." },
    { term: "Compound angle identities", definition: "$\\sin(A\\pm B)=\\sin A\\cos B\\pm\\cos A\\sin B$, $\\cos(A\\pm B)=\\cos A\\cos B\\mp\\sin A\\sin B$, $\\tan(A\\pm B)=\\frac{\\tan A\\pm\\tan B}{1\\mp\\tan A\\tan B}$." },
    { term: "Double angle identities", definition: "$\\sin2\\theta=2\\sin\\theta\\cos\\theta$, $\\cos2\\theta=\\cos^2\\theta-\\sin^2\\theta=2\\cos^2\\theta-1=1-2\\sin^2\\theta$, $\\tan2\\theta=\\frac{2\\tan\\theta}{1-\\tan^2\\theta}$." },
  ],
  concepts: [
    {
      id: "aahl-u2-reciprocal-inverse",
      title: "Reciprocal and inverse trigonometric functions",
      skill: "Evaluate and simplify with $\\sec$, $\\csc$, $\\cot$, use the Pythagorean identities, and work with $\\arcsin$, $\\arccos$, $\\arctan$.",
      lesson: {
        sections: [
          {
            heading: "Reciprocal functions and identities",
            body: "Divide $\\sin^2\\theta+\\cos^2\\theta=1$ by $\\cos^2\\theta$ to obtain $\\tan^2\\theta+1=\\sec^2\\theta$; divide by $\\sin^2\\theta$ to obtain $1+\\cot^2\\theta=\\csc^2\\theta$. When a quadratic appears in $\\sec$ or $\\tan$, substitute with these identities so that only one function remains, then solve the resulting quadratic. The sign of each ratio is decided by the quadrant.",
          },
          {
            heading: "Inverse trigonometric functions",
            body: "$y=\\arcsin x$ means $\\sin y=x$ with $y\\in\\left[-\\frac\\pi2,\\frac\\pi2\\right]$. Hence $\\arccos\\left(-\\frac12\\right)=\\frac{2\\pi}3$, not $-\\frac\\pi3$, because the range of $\\arccos$ is $[0,\\pi]$. Compositions behave only within the restricted domains: $\\sin(\\arcsin x)=x$ for $-1\\le x\\le1$, but $\\arcsin(\\sin x)=x$ only for $x\\in\\left[-\\frac\\pi2,\\frac\\pi2\\right]$. Draw a right triangle to compute expressions such as $\\cos(\\arcsin x)=\\sqrt{1-x^2}$.",
          },
        ],
        keyFormulas: [
          { name: "Pythagorean identities", statement: "$1+\\tan^2\\theta=\\sec^2\\theta,\\quad 1+\\cot^2\\theta=\\csc^2\\theta$" },
          { name: "Ranges", statement: "$\\arcsin:[-1,1]\\to\\left[-\\tfrac\\pi2,\\tfrac\\pi2\\right],\\ \\arccos:[-1,1]\\to[0,\\pi]$" },
        ],
        workedExample: {
          problem: "Find the exact value of $\\sec\\theta$ given $\\tan\\theta=\\frac34$ and $\\theta$ acute.",
          solution: "$\\sec^2\\theta=1+\\tan^2\\theta=1+\\frac9{16}=\\frac{25}{16}$. Since $\\theta$ is acute, $\\sec\\theta>0$, so $\\sec\\theta=\\frac54$.",
        },
      },
      questions: [
        {
          id: "aahl-u2-recip-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Find the exact value of $\\cot\\frac\\pi6$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$2$" },
              { id: "b", text: "$\\frac{2}{\\sqrt3}$" },
              { id: "c", text: "$\\frac{1}{\\sqrt3}$" },
              { id: "d", text: "$\\sqrt3$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Cotangent", statement: "$\\cot\\theta=\\frac{\\cos\\theta}{\\sin\\theta}=\\frac1{\\tan\\theta}$." },
            ],
            steps: [
              { reasoning: "Use exact values $\\cos\\frac\\pi6=\\frac{\\sqrt3}2$ and $\\sin\\frac\\pi6=\\frac12$.", working: "\\cot\\tfrac\\pi6=\\frac{\\sqrt3/2}{1/2}", marks: 1, markCode: "M" },
              { reasoning: "Simplify.", working: "\\sqrt3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $\\sqrt3$",
            commonErrors: ["Giving $\\tan\\frac\\pi6=\\frac1{\\sqrt3}$ instead of its reciprocal.", "Confusing $\\cot$ with $\\csc$ (which gives 2)."],
          },
        },
        {
          id: "aahl-u2-recip-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Given that $\\sin\\theta=\\frac{5}{13}$ and $\\theta$ is obtuse, find the value of $\\cot\\theta$ as a decimal.",
          response: { type: "numeric", parts: [{ label: "$\\cot\\theta$", answer: -2.4 }] },
          markscheme: {
            principles: [
              { kind: "law", name: "Pythagorean identity", statement: "$\\cos^2\\theta=1-\\sin^2\\theta$; in the second quadrant $\\cos\\theta<0$." },
            ],
            steps: [
              { reasoning: "Find $\\cos\\theta$ from the identity.", working: "\\cos^2\\theta=1-\\frac{25}{169}=\\frac{144}{169}", marks: 1, markCode: "M" },
              { reasoning: "Obtuse angle, so cosine is negative.", working: "\\cos\\theta=-\\frac{12}{13}", marks: 1, markCode: "A" },
              { reasoning: "Divide.", working: "\\cot\\theta=\\frac{-12/13}{5/13}=-\\frac{12}{5}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$-\\frac{12}{5}=-2.4$",
            commonErrors: ["Taking $\\cos\\theta=+\\frac{12}{13}$ and giving $+2.4$.", "Computing $\\tan\\theta=-\\frac5{12}$ and not taking the reciprocal."],
          },
        },
        {
          id: "aahl-u2-recip-q3",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 4,
          stem: "Solve $\\tan^2x+\\sec x=1$ for $0\\le x\\le2\\pi$. Give exact answers.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "law", name: "Pythagorean identity", statement: "$\\tan^2x=\\sec^2x-1$." },
            ],
            steps: [
              { reasoning: "Replace $\\tan^2x$ so the equation is a quadratic in $\\sec x$.", working: "\\sec^2x-1+\\sec x=1\\Rightarrow\\sec^2x+\\sec x-2=0", marks: 1, markCode: "M" },
              { reasoning: "Factorize.", working: "(\\sec x+2)(\\sec x-1)=0", marks: 1, markCode: "A" },
              { reasoning: "Case $\\sec x=1$ gives $\\cos x=1$; case $\\sec x=-2$ gives $\\cos x=-\\frac12$.", working: "x=0,\\ 2\\pi\\quad\\text{and}\\quad x=\\tfrac{2\\pi}3,\\ \\tfrac{4\\pi}3", marks: 2, markCode: "A" },
            ],
            finalAnswer: "$x=0,\\ \\frac{2\\pi}{3},\\ \\frac{4\\pi}{3},\\ 2\\pi$",
            commonErrors: ["Omitting $x=0$ and $x=2\\pi$.", "Solving $\\cos x=-2$ by inverting incorrectly."],
            examinerNote: "Check at $x=\\frac{2\\pi}3$: $\\tan^2=3$, $\\sec=-2$, sum $=1$.",
          },
        },
        {
          id: "aahl-u2-recip-q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 10,
          stem: "This question concerns the inverse trigonometric functions.",
          parts: [
            { label: "a", prompt: "Write down the domain and range of $y=\\arcsin x$.", marks: 2 },
            { label: "b", prompt: "Find the exact value of $\\arccos\\left(-\\frac12\\right)+\\arctan1$.", marks: 2 },
            { label: "c", prompt: "Show that $\\cos(\\arcsin x)=\\sqrt{1-x^2}$ for $-1\\le x\\le1$.", marks: 3 },
            { label: "d", prompt: "Hence solve $\\arcsin x=\\arccos(2x)$.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Inverse sine", statement: "$y=\\arcsin x\\iff\\sin y=x,\\ y\\in\\left[-\\frac\\pi2,\\frac\\pi2\\right]$." },
              { kind: "law", name: "Pythagorean identity", statement: "$\\cos^2y=1-\\sin^2y$." },
            ],
            steps: [
              { part: "a", reasoning: "Domain.", working: "-1\\le x\\le1", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Range.", working: "-\\tfrac\\pi2\\le y\\le\\tfrac\\pi2", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$\\arccos\\left(-\\frac12\\right)=\\frac{2\\pi}3$ (range $[0,\\pi]$) and $\\arctan1=\\frac\\pi4$.", working: "\\tfrac{2\\pi}3+\\tfrac\\pi4", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Add with a common denominator.", working: "\\tfrac{8\\pi+3\\pi}{12}=\\tfrac{11\\pi}{12}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Let $y=\\arcsin x$, so $\\sin y=x$ and $y\\in\\left[-\\frac\\pi2,\\frac\\pi2\\right]$.", working: "\\cos^2y=1-x^2", marks: 1, markCode: "M" },
              { part: "c", reasoning: "On this range $\\cos y\\ge0$, so the positive root is taken.", working: "\\cos y=\\sqrt{1-x^2}", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Substitute $y=\\arcsin x$.", working: "\\cos(\\arcsin x)=\\sqrt{1-x^2}\\quad\\text{(AG)}", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Take cosine of both sides of the equation.", working: "\\cos(\\arcsin x)=2x\\Rightarrow\\sqrt{1-x^2}=2x", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Square: $1-x^2=4x^2$.", working: "x^2=\\tfrac15", marks: 1, markCode: "A" },
              { part: "d", reasoning: "The right side $\\sqrt{1-x^2}$ is non-negative, so $x\\ge0$.", working: "x=\\tfrac{1}{\\sqrt5}", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $[-1,1]$; $\\left[-\\frac\\pi2,\\frac\\pi2\\right]$ (b) $\\frac{11\\pi}{12}$ (c) shown (d) $x=\\frac1{\\sqrt5}$",
            commonErrors: ["Giving $\\arccos\\left(-\\frac12\\right)=-\\frac\\pi3$.", "Retaining the extraneous solution $x=-\\frac1{\\sqrt5}$."],
            examinerNote: "Check: $\\arcsin\\frac1{\\sqrt5}$ has $\\cos=\\frac2{\\sqrt5}=2x$ so equals $\\arccos\\frac2{\\sqrt5}$.",
          },
        },
        {
          id: "aahl-u2-recip-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Find the exact value of $\\sec\\frac{\\pi}{3}$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$2$" },
              { id: "b", text: "$\\frac{2}{\\sqrt3}$" },
              { id: "c", text: "$\\sqrt3$" },
              { id: "d", text: "$\\frac{1}{2}$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Secant", statement: "$\\sec\\theta=\\frac{1}{\\cos\\theta}$." },
            ],
            steps: [
              { reasoning: "Use the exact value $\\cos\\frac{\\pi}{3}=\\frac12$.", working: "\\cos\\tfrac\\pi3=\\tfrac12", marks: 1, markCode: "M" },
              { reasoning: "Take the reciprocal.", working: "\\sec\\tfrac\\pi3=2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** $2$",
            commonErrors: ["Giving $\\cos\\frac\\pi3=\\frac12$ instead of its reciprocal.", "Confusing $\\sec$ with $\\csc$ (which gives $\\frac{2}{\\sqrt3}$)."],
          },
        },
        {
          id: "aahl-u2-recip-q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Find the exact value of $\\cot\\frac{5\\pi}{6}$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{1}{\\sqrt3}$" },
              { id: "b", text: "$\\sqrt3$" },
              { id: "c", text: "$-\\frac{1}{\\sqrt3}$" },
              { id: "d", text: "$-\\sqrt3$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Cotangent", statement: "$\\cot\\theta=\\frac{\\cos\\theta}{\\sin\\theta}$; signs depend on the quadrant." },
            ],
            steps: [
              { reasoning: "Use exact values in the second quadrant.", working: "\\cos\\tfrac{5\\pi}6=-\\tfrac{\\sqrt3}2,\\ \\sin\\tfrac{5\\pi}6=\\tfrac12", marks: 1, markCode: "M" },
              { reasoning: "Divide.", working: "\\cot\\tfrac{5\\pi}6=\\frac{-\\sqrt3/2}{1/2}=-\\sqrt3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** $-\\sqrt3$",
            commonErrors: ["Taking cosine positive and giving $+\\sqrt3$.", "Confusing $\\cot$ with $\\tan$ (which gives $-\\frac{1}{\\sqrt3}$)."],
          },
        },
        {
          id: "aahl-u2-recip-q7",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Find the exact value of $\\arcsin\\left(-\\frac12\\right)$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{11\\pi}{6}$" },
              { id: "b", text: "$\\frac{\\pi}{6}$" },
              { id: "c", text: "$\\frac{7\\pi}{6}$" },
              { id: "d", text: "$-\\frac{\\pi}{6}$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Arcsine range", statement: "$\\arcsin x\\in\\left[-\\frac\\pi2,\\frac\\pi2\\right]$." },
            ],
            steps: [
              { reasoning: "$\\sin\\left(-\\frac\\pi6\\right)=-\\frac12$ and $-\\frac\\pi6$ lies in the range.", working: "-\\tfrac\\pi6\\in\\left[-\\tfrac\\pi2,\\tfrac\\pi2\\right]", marks: 1, markCode: "M" },
              { reasoning: "State the value.", working: "\\arcsin\\left(-\\tfrac12\\right)=-\\tfrac\\pi6", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $-\\frac{\\pi}{6}$",
            commonErrors: ["Giving $\\frac{7\\pi}6$ or $\\frac{11\\pi}6$, which are outside the range of $\\arcsin$.", "Forgetting the negative sign."],
          },
        },
        {
          id: "aahl-u2-recip-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Find the exact value of $\\arctan(-\\sqrt3)$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{2\\pi}{3}$" },
              { id: "b", text: "$-\\frac{\\pi}{3}$" },
              { id: "c", text: "$-\\frac{2\\pi}{3}$" },
              { id: "d", text: "$\\frac{\\pi}{3}$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Arctangent range", statement: "$\\arctan x\\in\\left(-\\frac\\pi2,\\frac\\pi2\\right)$." },
            ],
            steps: [
              { reasoning: "$\\tan\\left(-\\frac\\pi3\\right)=-\\sqrt3$ and $-\\frac\\pi3$ lies in the range.", working: "\\tan\\left(-\\tfrac\\pi3\\right)=-\\sqrt3", marks: 1, markCode: "M" },
              { reasoning: "State the value.", working: "\\arctan(-\\sqrt3)=-\\tfrac\\pi3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $-\\frac{\\pi}{3}$",
            commonErrors: ["Giving $\\frac{2\\pi}3$, which is outside the range of $\\arctan$.", "Missing the negative sign."],
          },
        },
        {
          id: "aahl-u2-recip-q9",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Find the exact value of $\\sin(\\arccos\\frac35)$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac35$" },
              { id: "b", text: "$-\\frac45$" },
              { id: "c", text: "$\\frac45$" },
              { id: "d", text: "$\\frac53$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Pythagorean identity", statement: "$\\sin^2y=1-\\cos^2y$; since $\\arccos\\frac35\\in[0,\\pi]$, the sine is non-negative." },
            ],
            steps: [
              { reasoning: "Let $y=\\arccos\\frac35$, so $\\cos y=\\frac35$ and $\\sin y=\\sqrt{1-\\frac9{25}}=\\frac45$.", working: "\\sin y=\\sqrt{1-\\tfrac9{25}}=\\tfrac45", marks: 1, markCode: "M" },
              { reasoning: "State the value.", working: "\\sin(\\arccos\\tfrac35)=\\tfrac45", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** $\\frac45$",
            commonErrors: ["Giving $-\\frac45$ (wrong sign for the range of $\\arccos$).", "Answering $\\frac35$ (that is the cosine)."],
          },
        },
        {
          id: "aahl-u2-recip-q10",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "Given that $\\tan\\theta=\\frac34$ and $\\theta$ is acute, find the exact value of $\\csc\\theta$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac43$" },
              { id: "b", text: "$\\frac34$" },
              { id: "c", text: "$\\frac53$" },
              { id: "d", text: "$\\frac54$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Pythagorean identity", statement: "$\\sin^2\\theta=1-\\cos^2\\theta$; with $\\tan\\theta=\\frac34$ draw a $3$-$4$-$5$ triangle." },
            ],
            steps: [
              { reasoning: "With opposite $3$, adjacent $4$, the hypotenuse is $5$, so $\\sin\\theta=\\frac35$.", working: "\\sin\\theta=\\frac35", marks: 1, markCode: "M" },
              { reasoning: "Take the reciprocal.", working: "\\csc\\theta=\\frac53", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** $\\frac53$",
            commonErrors: ["Giving $\\sec\\theta=\\frac54$ instead of $\\csc\\theta$.", "Forgetting that $\\csc=\\frac1{\\sin}$."],
          },
        },
        {
          id: "aahl-u2-recip-q11",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Given that $\\tan\\theta=-\\frac{5}{12}$ and $\\theta$ lies in the second quadrant, find $\\cos\\theta$ as a decimal.",
          response: { type: "numeric", parts: [{ label: "$\\cos\\theta$", answer: -0.9231, tolerance: 0.001 }] },
          markscheme: {
            principles: [
              { kind: "law", name: "Pythagorean identity", statement: "$\\sec^2\\theta=1+\\tan^2\\theta$; in the second quadrant $\\cos\\theta<0$." },
            ],
            steps: [
              { reasoning: "Find $\\sec^2\\theta$.", working: "\\sec^2\\theta=1+\\frac{25}{144}=\\frac{169}{144}", marks: 1, markCode: "M" },
              { reasoning: "Second quadrant means cosine is negative.", working: "\\cos\\theta=-\\frac{12}{13}", marks: 1, markCode: "A" },
              { reasoning: "Convert to a decimal.", working: "-0.9231", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\cos\\theta=-\\frac{12}{13}\\approx-0.9231$",
            commonErrors: ["Taking $\\cos\\theta=+\\frac{12}{13}$.", "Using $1+\\tan^2$ with the wrong sign for $\\tan^2$."],
          },
        },
        {
          id: "aahl-u2-recip-q12",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Solve $\\sec^2x=4$ for $0\\le x\\le\\pi$. Give exact answers as decimals.",
          response: { type: "numeric", parts: [{ label: "Solution 1", answer: 1.0472, tolerance: 0.001 }, { label: "Solution 2", answer: 2.0944, tolerance: 0.001 }], unordered: true },
          markscheme: {
            principles: [
              { kind: "law", name: "Pythagorean identity", statement: "$\\sec^2x=4\\Rightarrow\\cos^2x=\\frac14$." },
            ],
            steps: [
              { reasoning: "Rewrite in terms of cosine.", working: "\\cos^2x=\\frac14\\Rightarrow\\cos x=\\pm\\frac12", marks: 1, markCode: "M" },
              { reasoning: "Find the angles in $[0,\\pi]$ for both signs.", working: "x=\\tfrac\\pi3\\ \\text{and}\\ x=\\tfrac{2\\pi}3", marks: 1, markCode: "M" },
              { reasoning: "State both solutions as decimals.", working: "1.0472,\\ 2.0944", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=\\frac{\\pi}{3}\\approx1.0472$ or $x=\\frac{2\\pi}{3}\\approx2.0944$",
            commonErrors: ["Only giving $x=\\frac\\pi3$ and missing $\\cos x=-\\frac12$.", "Including $x=\\frac{4\\pi}3$, outside the interval."],
          },
        },
        {
          id: "aahl-u2-recip-q13",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 3,
          stem: "Given that $\\sin\\theta=\\frac{7}{25}$ and $\\theta$ is obtuse, find the value of $\\cot\\theta$ as a decimal.",
          response: { type: "numeric", parts: [{ label: "$\\cot\\theta$", answer: -3.4286, tolerance: 0.001 }] },
          markscheme: {
            principles: [
              { kind: "law", name: "Pythagorean identity", statement: "$\\cos^2\\theta=1-\\sin^2\\theta$; in the second quadrant $\\cos\\theta<0$." },
            ],
            steps: [
              { reasoning: "Find $\\cos^2\\theta$.", working: "\\cos^2\\theta=1-\\frac{49}{625}=\\frac{576}{625}", marks: 1, markCode: "M" },
              { reasoning: "Obtuse angle, so cosine is negative; then divide.", working: "\\cot\\theta=\\frac{-24/25}{7/25}=-\\frac{24}{7}", marks: 1, markCode: "A" },
              { reasoning: "Convert to a decimal.", working: "-3.4286", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\cot\\theta=-\\frac{24}{7}\\approx-3.4286$",
            commonErrors: ["Taking $\\cos\\theta=+\\frac{24}{25}$ and giving $+3.4286$.", "Computing $\\tan\\theta$ and not taking the reciprocal."],
          },
        },
        {
          id: "aahl-u2-recip-q14",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Find the exact value of $\\arcsin\\frac{\\sqrt3}{2}+\\arccos\\frac12$, giving your answer as a decimal.",
          response: { type: "numeric", parts: [{ label: "Sum", answer: 2.0944, tolerance: 0.001 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Inverse trigonometric ranges", statement: "$\\arcsin\\frac{\\sqrt3}{2}=\\frac\\pi3$ and $\\arccos\\frac12=\\frac\\pi3$." },
            ],
            steps: [
              { reasoning: "Evaluate each term.", working: "\\tfrac\\pi3+\\tfrac\\pi3=\\tfrac{2\\pi}3", marks: 1, markCode: "M" },
              { reasoning: "Convert to a decimal.", working: "2.0944", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac{2\\pi}{3}\\approx2.0944$",
            commonErrors: ["Giving $\\arccos\\frac12=\\frac{\\pi}6$.", "Adding to get $\\frac{\\pi}3$ instead of $\\frac{2\\pi}3$."],
          },
        },
        {
          id: "aahl-u2-recip-q15",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "This question concerns the reciprocal trigonometric functions.",
          parts: [
            { label: "a", prompt: "Write down $\\cot\\theta$ in terms of $\\sin\\theta$ and $\\cos\\theta$.", marks: 1 },
            { label: "b", prompt: "Given that $\\cos\\theta=-\\frac{8}{17}$ and $\\theta$ is obtuse, find $\\csc\\theta$.", marks: 3 },
            { label: "c", prompt: "Solve $2\\sin^2x-\\cos x=1$ for $0\\le x\\le2\\pi$.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Cotangent", statement: "$\\cot\\theta=\\frac{\\cos\\theta}{\\sin\\theta}=\\frac{1}{\\tan\\theta}$." },
              { kind: "law", name: "Pythagorean identity", statement: "$\\sin^2x=1-\\cos^2x$." },
            ],
            steps: [
              { part: "a", reasoning: "Write the definition.", working: "\\cot\\theta=\\frac{\\cos\\theta}{\\sin\\theta}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Find $\\sin^2\\theta$.", working: "\\sin^2\\theta=1-\\frac{64}{289}=\\frac{225}{289}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Obtuse angle means sine is positive.", working: "\\sin\\theta=\\frac{15}{17}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Take the reciprocal.", working: "\\csc\\theta=\\frac{17}{15}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Replace $\\sin^2x$ using the identity.", working: "2(1-\\cos^2x)-\\cos x=1", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Rearrange to a quadratic in $\\cos x$ and factorize.", working: "2\\cos^2x+\\cos x-1=0\\Rightarrow(2\\cos x-1)(\\cos x+1)=0", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Solve each case on the interval.", working: "\\cos x=\\tfrac12\\Rightarrow x=\\tfrac\\pi3,\\tfrac{5\\pi}3;\\quad \\cos x=-1\\Rightarrow x=\\pi", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State all solutions.", working: "x=\\tfrac\\pi3,\\ \\tfrac{5\\pi}3,\\ \\pi", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $\\frac{\\cos\\theta}{\\sin\\theta}$ (b) $\\frac{17}{15}$ (c) $x=\\frac\\pi3,\\frac{5\\pi}3,\\pi$",
            commonErrors: ["In (c), leaving a mixed equation in $\\sin$ and $\\cos$.", "Missing $x=\\pi$ from $\\cos x=-1$."],
            examinerNote: "Check at $x=\\pi$: $2(0)-(-1)=1$.",
          },
        },
        {
          id: "aahl-u2-recip-q16",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 10,
          stem: "This question investigates the inverse trigonometric functions.",
          parts: [
            { label: "a", prompt: "Write down the domain and range of $y=\\arccos x$.", marks: 2 },
            { label: "b", prompt: "Show that $\\tan(\\arcsin x)=\\frac{x}{\\sqrt{1-x^2}}$ for $-1<x<1$.", marks: 3 },
            { label: "c", prompt: "Hence solve $\\cos(\\arcsin x)=\\frac35$.", marks: 3 },
            { label: "d", prompt: "Solve $\\arcsin x=\\arccos\\frac{\\sqrt3}{2}$.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Arccosine", statement: "$y=\\arccos x\\iff\\cos y=x$, $y\\in[0,\\pi]$." },
              { kind: "law", name: "Pythagorean identity", statement: "$\\cos^2y=1-\\sin^2y$." },
            ],
            steps: [
              { part: "a", reasoning: "Domain of $\\arccos$.", working: "-1\\le x\\le1", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Range of $\\arccos$.", working: "0\\le y\\le\\pi", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Let $y=\\arcsin x$, so $\\sin y=x$.", working: "\\cos^2y=1-x^2", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Since $y\\in\\left[-\\frac\\pi2,\\frac\\pi2\\right]$, $\\cos y\\ge0$.", working: "\\cos y=\\sqrt{1-x^2}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Divide to get the tangent.", working: "\\tan y=\\frac{x}{\\sqrt{1-x^2}}\\quad\\text{(AG)}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Use $\\cos(\\arcsin x)=\\sqrt{1-x^2}$.", working: "\\sqrt{1-x^2}=\\frac35", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Square and solve.", working: "1-x^2=\\frac9{25}\\Rightarrow x^2=\\frac{16}{25}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Both signs are valid since $\\cos(\\arcsin x)\\ge0$ for all $x\\in[-1,1]$.", working: "x=\\pm\\frac45", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Evaluate $\\arccos\\frac{\\sqrt3}{2}=\\frac\\pi6$, so $\\arcsin x=\\frac\\pi6$.", working: "x=\\sin\\tfrac\\pi6", marks: 1, markCode: "M" },
              { part: "d", reasoning: "State the solution.", working: "x=\\frac12", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $[-1,1]$; $[0,\\pi]$ (b) proved (c) $x=\\pm\\frac45$ (d) $x=\\frac12$",
            commonErrors: ["In (c), rejecting $x=-\\frac45$; both values satisfy the equation.", "In (d), giving $x=\\frac{\\sqrt3}2$ instead of $\\sin\\frac\\pi6$."],
            examinerNote: "Check (c): $\\arcsin(\\frac45)$ has cosine $\\frac35$; same for $\\arcsin(-\\frac45)$.",
          },
        },
      ],
    },
    {
      id: "aahl-u2-compound-angles",
      title: "Compound angle identities",
      skill: "Use compound and double angle identities to evaluate, prove and solve equations.",
      lesson: {
        sections: [
          {
            heading: "Compound and double angle identities",
            body: "The compound identities allow exact values of angles such as $75^\\circ=45^\\circ+30^\\circ$ or $\\frac{5\\pi}{12}=\\frac\\pi4+\\frac\\pi6$. Setting $B=A$ gives the double angle identities. Note that $\\cos2\\theta$ has three forms; choose the one that leaves a single trigonometric function in the equation.",
          },
          {
            heading: "Solving and proving",
            body: "To solve, convert to one function of one angle. For $\\cos2x+3\\sin x=2$ replace $\\cos2x$ with $1-2\\sin^2x$ to get a quadratic in $\\sin x$. For inverse-tangent sums, use $\\tan(A\\pm B)$ and then remember that $\\arctan$ takes values in $\\left(-\\frac\\pi2,\\frac\\pi2\\right)$, so check that the angle lies in the correct range before taking $\\arctan$.",
          },
        ],
        keyFormulas: [
          { name: "Sine sum", statement: "$\\sin(A+B)=\\sin A\\cos B+\\cos A\\sin B$" },
          { name: "Cosine sum", statement: "$\\cos(A+B)=\\cos A\\cos B-\\sin A\\sin B$" },
          { name: "Tangent sum", statement: "$\\tan(A+B)=\\frac{\\tan A+\\tan B}{1-\\tan A\\tan B}$" },
        ],
        workedExample: {
          problem: "Given $\\tan\\theta=2$, find $\\tan2\\theta$.",
          solution: "$\\tan2\\theta=\\frac{2\\tan\\theta}{1-\\tan^2\\theta}=\\frac{4}{1-4}=-\\frac43$.",
        },
      },
      questions: [
        {
          id: "aahl-u2-compound-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Use $\\frac{5\\pi}{12}=\\frac\\pi4+\\frac\\pi6$ to find the exact value of $\\sin\\frac{5\\pi}{12}$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{\\sqrt6+\\sqrt2}{4}$" },
              { id: "b", text: "$\\frac{\\sqrt3+1}{2}$" },
              { id: "c", text: "$\\frac{\\sqrt6-\\sqrt2}{4}$" },
              { id: "d", text: "$\\frac{\\sqrt2}{4}$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Sine sum", statement: "$\\sin(A+B)=\\sin A\\cos B+\\cos A\\sin B$." },
            ],
            steps: [
              { reasoning: "Substitute exact values.", working: "\\frac{\\sqrt2}{2}\\cdot\\frac{\\sqrt3}{2}+\\frac{\\sqrt2}{2}\\cdot\\frac12", marks: 1, markCode: "M" },
              { reasoning: "Simplify.", working: "\\frac{\\sqrt6+\\sqrt2}{4}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $\\frac{\\sqrt6+\\sqrt2}{4}$",
            commonErrors: ["Using the cosine formula's minus sign (giving option b).", "Writing $\\sin A+\\sin B$."],
          },
        },
        {
          id: "aahl-u2-compound-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "The angle $A$ is acute with $\\sin A=\\frac35$, and the angle $B$ is obtuse with $\\cos B=-\\frac5{13}$. Find $\\cos(A+B)$. Give your answer as a decimal to 4 decimal places.",
          response: { type: "numeric", parts: [{ label: "$\\cos(A+B)$", answer: -0.8615, tolerance: 0.0005 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Cosine sum", statement: "$\\cos(A+B)=\\cos A\\cos B-\\sin A\\sin B$." },
            ],
            steps: [
              { reasoning: "Find the missing values: $\\cos A=\\frac45$ ($A$ acute) and $\\sin B=\\frac{12}{13}$ ($B$ obtuse).", working: "\\cos A=\\tfrac45,\\ \\sin B=\\tfrac{12}{13}", marks: 1, markCode: "A" },
              { reasoning: "Substitute into the identity.", working: "\\tfrac45\\left(-\\tfrac5{13}\\right)-\\tfrac35\\cdot\\tfrac{12}{13}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "-\\tfrac{20}{65}-\\tfrac{36}{65}=-\\tfrac{56}{65}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$-\\frac{56}{65}\\approx-0.8615$",
            commonErrors: ["Taking $\\sin B=-\\frac{12}{13}$ for an obtuse angle.", "Using $+\\sin A\\sin B$."],
          },
        },
        {
          id: "aahl-u2-compound-q3",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 4,
          stem: "Solve $\\cos2x+3\\sin x=2$ for $0\\le x\\le2\\pi$. Give exact answers.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Double angle", statement: "$\\cos2x=1-2\\sin^2x$." },
            ],
            steps: [
              { reasoning: "Use the form of $\\cos2x$ that contains only $\\sin x$.", working: "1-2\\sin^2x+3\\sin x=2", marks: 1, markCode: "M" },
              { reasoning: "Rearrange to a quadratic and factorize.", working: "2\\sin^2x-3\\sin x+1=0\\Rightarrow(2\\sin x-1)(\\sin x-1)=0", marks: 1, markCode: "A" },
              { reasoning: "Solve $\\sin x=\\frac12$ and $\\sin x=1$ on the interval.", working: "x=\\tfrac\\pi6,\\ \\tfrac{5\\pi}6;\\quad x=\\tfrac\\pi2", marks: 2, markCode: "A" },
            ],
            finalAnswer: "$x=\\frac\\pi6,\\ \\frac\\pi2,\\ \\frac{5\\pi}6$",
            commonErrors: ["Using $\\cos2x=\\cos^2x-\\sin^2x$ and obtaining a mixed equation.", "Missing $x=\\frac{5\\pi}6$."],
          },
        },
        {
          id: "aahl-u2-compound-q4",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 12,
          stem: "In this question you investigate sums of inverse tangents and generalize the pattern. Throughout, $n$ is a positive integer.",
          parts: [
            { label: "a", prompt: "Show that $\\tan\\left(\\arctan\\frac12+\\arctan\\frac13\\right)=1$ and hence write $\\arctan\\frac12+\\arctan\\frac13$ exactly.", marks: 3 },
            { label: "b", prompt: "Prove that $\\arctan\\frac1n-\\arctan\\frac1{n+1}=\\arctan\\frac{1}{n^2+n+1}$.", marks: 3 },
            { label: "c", prompt: "Hence show that $\\sum_{n=1}^{N}\\arctan\\frac{1}{n^2+n+1}=\\frac\\pi4-\\arctan\\frac{1}{N+1}$.", marks: 3 },
            { label: "d", prompt: "Write down the value of $\\sum_{n=1}^{\\infty}\\arctan\\frac{1}{n^2+n+1}$.", marks: 1 },
            { label: "e", prompt: "Use the case $N=2$ to show that $\\frac\\pi4=2\\arctan\\frac13+\\arctan\\frac17$.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Tangent identities", statement: "$\\tan(A\\pm B)=\\frac{\\tan A\\pm\\tan B}{1\\mp\\tan A\\tan B}$." },
              { kind: "definition", name: "Arctangent range", statement: "$\\arctan t\\in\\left(-\\frac\\pi2,\\frac\\pi2\\right)$, so $\\arctan(\\tan\\phi)=\\phi$ only when $\\phi$ is in this interval." },
              { kind: "principle", name: "Telescoping sum", statement: "In $\\sum(a_n-a_{n+1})$ all intermediate terms cancel, leaving $a_1-a_{N+1}$." },
            ],
            steps: [
              { part: "a", reasoning: "Use the tangent sum formula.", working: "\\tan(\\alpha+\\beta)=\\frac{\\frac12+\\frac13}{1-\\frac16}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate: $\\frac{5/6}{5/6}$.", working: "=1\\quad\\text{(AG)}", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Both $\\alpha,\\beta\\in\\left(0,\\frac\\pi2\\right)$ and the sum is below $\\frac\\pi2$ (as $\\tan$ is finite), so the sum is $\\frac\\pi4$.", working: "\\alpha+\\beta=\\tfrac\\pi4", marks: 1, markCode: "R" },
              { part: "b", reasoning: "Take the tangent of the difference with $A=\\arctan\\frac1n$, $B=\\arctan\\frac1{n+1}$.", working: "\\tan(A-B)=\\frac{\\frac1n-\\frac1{n+1}}{1+\\frac1{n(n+1)}}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Multiply numerator and denominator by $n(n+1)$.", working: "=\\frac{1}{n(n+1)+1}=\\frac{1}{n^2+n+1}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$0<B<A<\\frac\\pi2$, so $A-B\\in\\left(0,\\frac\\pi2\\right)$ and equals $\\arctan$ of its tangent.", working: "A-B=\\arctan\\tfrac{1}{n^2+n+1}", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Apply (b) to each term.", working: "\\sum_{n=1}^{N}\\left(\\arctan\\tfrac1n-\\arctan\\tfrac1{n+1}\\right)", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Intermediate terms cancel, leaving the first and last.", working: "\\arctan1-\\arctan\\tfrac1{N+1}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Use $\\arctan1=\\frac\\pi4$.", working: "\\tfrac\\pi4-\\arctan\\tfrac1{N+1}\\quad\\text{(AG)}", marks: 1, markCode: "R" },
              { part: "d", reasoning: "As $N\\to\\infty$, $\\arctan\\frac1{N+1}\\to0$.", working: "\\tfrac\\pi4", marks: 1, markCode: "A" },
              { part: "e", reasoning: "For $N=2$ the left side is $\\arctan\\frac13+\\arctan\\frac17$ and the right side is $\\frac\\pi4-\\arctan\\frac13$.", working: "\\arctan\\tfrac13+\\arctan\\tfrac17=\\tfrac\\pi4-\\arctan\\tfrac13", marks: 1, markCode: "M" },
              { part: "e", reasoning: "Rearrange.", working: "\\tfrac\\pi4=2\\arctan\\tfrac13+\\arctan\\tfrac17", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $\\frac\\pi4$ (b) proved (c) proved (d) $\\frac\\pi4$ (e) $\\frac\\pi4=2\\arctan\\frac13+\\arctan\\frac17$",
            commonErrors: ["Omitting the range justification for $\\arctan$ in (b).", "Mis-simplifying $1+\\frac1{n(n+1)}$."],
            examinerNote: "Numerical check of (e): $2(0.32175)+0.14190=0.78540=\\frac\\pi4$.",
          },
        },
        {
          id: "aahl-u2-compound-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Find the exact value of $\\cos75^\\circ$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{\\sqrt6-\\sqrt3}{4}$" },
              { id: "b", text: "$\\frac{\\sqrt6-\\sqrt2}{4}$" },
              { id: "c", text: "$\\frac{\\sqrt3+1}{2}$" },
              { id: "d", text: "$\\frac{\\sqrt6+\\sqrt2}{4}$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Cosine sum", statement: "$\\cos(A+B)=\\cos A\\cos B-\\sin A\\sin B$." },
            ],
            steps: [
              { reasoning: "Write $75^\\circ=45^\\circ+30^\\circ$ and substitute exact values.", working: "\\cos45\\cos30-\\sin45\\sin30=\\tfrac{\\sqrt2}2\\cdot\\tfrac{\\sqrt3}2-\\tfrac{\\sqrt2}2\\cdot\\tfrac12", marks: 1, markCode: "M" },
              { reasoning: "Simplify.", working: "\\frac{\\sqrt6-\\sqrt2}{4}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $\\frac{\\sqrt6-\\sqrt2}{4}$",
            commonErrors: ["Using a plus sign between the products (giving option b).", "Writing $\\cos A+\\cos B$."],
          },
        },
        {
          id: "aahl-u2-compound-q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Find the exact value of $\\tan15^\\circ$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\sqrt3-1$" },
              { id: "b", text: "$2+\\sqrt3$" },
              { id: "c", text: "$2-\\sqrt3$" },
              { id: "d", text: "$\\sqrt3-2$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Tangent difference", statement: "$\\tan(A-B)=\\frac{\\tan A-\\tan B}{1+\\tan A\\tan B}$." },
            ],
            steps: [
              { reasoning: "Write $15^\\circ=45^\\circ-30^\\circ$ and apply the formula.", working: "\\tan15=\\frac{1-\\frac1{\\sqrt3}}{1+\\frac1{\\sqrt3}}", marks: 1, markCode: "M" },
              { reasoning: "Simplify.", working: "\\frac{\\sqrt3-1}{\\sqrt3+1}=2-\\sqrt3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $2-\\sqrt3$",
            commonErrors: ["Using the sum formula (giving $2+\\sqrt3$, which is $\\tan75^\\circ$).", "Sign error giving the negative $\\sqrt3-2$."],
          },
        },
        {
          id: "aahl-u2-compound-q7",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Which of the following is the correct expansion of $\\sin(A-B)$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\sin A\\cos B+\\cos A\\sin B$" },
              { id: "b", text: "$\\cos A\\sin B-\\sin A\\cos B$" },
              { id: "c", text: "$\\sin A\\cos B-\\cos A\\sin B$" },
              { id: "d", text: "$\\sin A\\sin B-\\cos A\\cos B$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Sine difference", statement: "$\\sin(A-B)=\\sin A\\cos B-\\cos A\\sin B$." },
            ],
            steps: [
              { reasoning: "Recall the sine difference identity.", working: "\\sin(A-B)=\\sin A\\cos B-\\cos A\\sin B", marks: 1, markCode: "M" },
              { reasoning: "Match the correct option.", working: "\\text{option (a)}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $\\sin A\\cos B-\\cos A\\sin B$",
            commonErrors: ["Choosing the sum identity (option b).", "Reversing the order of the terms (option c)."],
          },
        },
        {
          id: "aahl-u2-compound-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Given that $\\tan A=\\frac12$ and $\\tan B=\\frac13$, find the exact value of $\\tan(A+B)$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac56$" },
              { id: "b", text: "$\\frac15$" },
              { id: "c", text: "$-1$" },
              { id: "d", text: "$1$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Tangent sum", statement: "$\\tan(A+B)=\\frac{\\tan A+\\tan B}{1-\\tan A\\tan B}$." },
            ],
            steps: [
              { reasoning: "Substitute into the formula.", working: "\\frac{\\frac12+\\frac13}{1-\\frac12\\cdot\\frac13}=\\frac{5/6}{5/6}", marks: 1, markCode: "M" },
              { reasoning: "Simplify.", working: "1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $1$",
            commonErrors: ["Using $1+\\tan A\\tan B$ in the denominator.", "Adding the tangents without the formula."],
          },
        },
        {
          id: "aahl-u2-compound-q9",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Which of the following is a correct expression for $\\cos2\\theta$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\sin^2\\theta-\\cos^2\\theta$" },
              { id: "b", text: "$1+2\\cos^2\\theta$" },
              { id: "c", text: "$2\\sin^2\\theta-1$" },
              { id: "d", text: "$\\cos^2\\theta-\\sin^2\\theta$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Double angle", statement: "Set $B=A$ in $\\cos(A+B)$ to get $\\cos2\\theta=\\cos^2\\theta-\\sin^2\\theta$." },
            ],
            steps: [
              { reasoning: "Derive from the compound identity.", working: "\\cos(\\theta+\\theta)=\\cos^2\\theta-\\sin^2\\theta", marks: 1, markCode: "M" },
              { reasoning: "Match the correct option.", working: "\\text{option (a)}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $\\cos^2\\theta-\\sin^2\\theta$",
            commonErrors: ["Choosing $2\\sin^2\\theta-1$, which equals $-\\cos2\\theta$.", "Choosing a form with a sign error."],
          },
        },
        {
          id: "aahl-u2-compound-q10",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "Find the exact value of $\\sin\\frac{\\pi}{12}$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{\\sqrt3-1}{4}$" },
              { id: "b", text: "$\\frac{\\sqrt2-\\sqrt6}{4}$" },
              { id: "c", text: "$\\frac{\\sqrt6+\\sqrt2}{4}$" },
              { id: "d", text: "$\\frac{\\sqrt6-\\sqrt2}{4}$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Sine difference", statement: "$\\sin(A-B)=\\sin A\\cos B-\\cos A\\sin B$." },
            ],
            steps: [
              { reasoning: "Write $\\frac{\\pi}{12}=\\frac{\\pi}{3}-\\frac{\\pi}{4}$ and substitute exact values.", working: "\\sin\\tfrac{\\pi}3\\cos\\tfrac{\\pi}4-\\cos\\tfrac{\\pi}3\\sin\\tfrac{\\pi}4=\\tfrac{\\sqrt3}2\\cdot\\tfrac{\\sqrt2}2-\\tfrac12\\cdot\\tfrac{\\sqrt2}2", marks: 1, markCode: "M" },
              { reasoning: "Simplify.", working: "\\frac{\\sqrt6-\\sqrt2}{4}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $\\frac{\\sqrt6-\\sqrt2}{4}$",
            commonErrors: ["Using the sum $\\frac{\\pi}3+\\frac{\\pi}4$ (giving option b).", "Sign error giving the negative option (c)."],
          },
        },
        {
          id: "aahl-u2-compound-q11",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Given that $\\tan\\theta=3$, find the exact value of $\\tan2\\theta$ as a decimal.",
          response: { type: "numeric", parts: [{ label: "$\\tan2\\theta$", answer: -0.75 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Double angle", statement: "$\\tan2\\theta=\\frac{2\\tan\\theta}{1-\\tan^2\\theta}$." },
            ],
            steps: [
              { reasoning: "Substitute $\\tan\\theta=3$.", working: "\\frac{2(3)}{1-9}", marks: 1, markCode: "M" },
              { reasoning: "Simplify.", working: "\\frac{6}{-8}=-\\frac34", marks: 1, markCode: "A" },
              { reasoning: "Convert to a decimal.", working: "-0.75", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\tan2\\theta=-\\frac34=-0.75$",
            commonErrors: ["Using $1+\\tan^2\\theta$ in the denominator.", "Sign error in $1-9=-8$."],
          },
        },
        {
          id: "aahl-u2-compound-q12",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Find the exact value of $\\sin15^\\circ$ as a decimal.",
          response: { type: "numeric", parts: [{ label: "$\\sin15^\\circ$", answer: 0.2588, tolerance: 0.001 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Sine difference", statement: "$\\sin(45^\\circ-30^\\circ)=\\sin45\\cos30-\\cos45\\sin30$." },
            ],
            steps: [
              { reasoning: "Substitute exact values.", working: "\\tfrac{\\sqrt2}2\\cdot\\tfrac{\\sqrt3}2-\\tfrac{\\sqrt2}2\\cdot\\tfrac12=\\tfrac{\\sqrt6-\\sqrt2}4", marks: 1, markCode: "M" },
              { reasoning: "Evaluate as a decimal.", working: "0.2588", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\sin15^\\circ=\\frac{\\sqrt6-\\sqrt2}4\\approx0.2588$",
            commonErrors: ["Using the sum formula (giving $\\sin75^\\circ\\approx0.9659$).", "Arithmetic slip in the radical evaluation."],
          },
        },
        {
          id: "aahl-u2-compound-q13",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 4,
          stem: "The angle $A$ is acute with $\\cos A=\\frac35$, and the angle $B$ is obtuse with $\\sin B=\\frac{8}{17}$. Find $\\sin(A+B)$ as a decimal.",
          response: { type: "numeric", parts: [{ label: "$\\sin(A+B)$", answer: -0.4235, tolerance: 0.0005 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Sine sum", statement: "$\\sin(A+B)=\\sin A\\cos B+\\cos A\\sin B$." },
            ],
            steps: [
              { reasoning: "Find the missing values: $\\sin A=\\frac45$ ($A$ acute) and $\\cos B=-\\frac{15}{17}$ ($B$ obtuse).", working: "\\sin A=\\tfrac45,\\ \\cos B=-\\tfrac{15}{17}", marks: 1, markCode: "M" },
              { reasoning: "Substitute into the identity.", working: "\\tfrac45\\left(-\\tfrac{15}{17}\\right)+\\tfrac35\\cdot\\tfrac{8}{17}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "-\\tfrac{60}{85}+\\tfrac{24}{85}=-\\tfrac{36}{85}", marks: 1, markCode: "A" },
              { reasoning: "Convert to a decimal.", working: "-0.4235", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\sin(A+B)=-\\frac{36}{85}\\approx-0.4235$",
            commonErrors: ["Taking $\\cos B=+\\frac{15}{17}$ for an obtuse angle.", "Using the cosine sum formula instead."],
          },
        },
        {
          id: "aahl-u2-compound-q14",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 4,
          stem: "Solve $\\cos2x=\\cos x$ for $0\\le x\\le2\\pi$. Enter the solutions in any order as decimals.",
          response: { type: "numeric", parts: [{ label: "Solution 1", answer: 0, tolerance: 0.001 }, { label: "Solution 2", answer: 2.0944, tolerance: 0.001 }, { label: "Solution 3", answer: 4.1888, tolerance: 0.001 }, { label: "Solution 4", answer: 6.2832, tolerance: 0.001 }], unordered: true },
          markscheme: {
            principles: [
              { kind: "formula", name: "Double angle", statement: "$\\cos2x=2\\cos^2x-1$." },
            ],
            steps: [
              { reasoning: "Replace $\\cos2x$ to get a quadratic in $\\cos x$.", working: "2\\cos^2x-1=\\cos x\\Rightarrow 2\\cos^2x-\\cos x-1=0", marks: 1, markCode: "M" },
              { reasoning: "Factorize.", working: "(2\\cos x+1)(\\cos x-1)=0", marks: 1, markCode: "A" },
              { reasoning: "Solve each case on the interval.", working: "\\cos x=1\\Rightarrow x=0,2\\pi;\\quad \\cos x=-\\tfrac12\\Rightarrow x=\\tfrac{2\\pi}3,\\tfrac{4\\pi}3", marks: 1, markCode: "M" },
              { reasoning: "State all four solutions as decimals.", working: "0,\\ 2.0944,\\ 4.1888,\\ 6.2832", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=0,\\ \\frac{2\\pi}3,\\ \\frac{4\\pi}3,\\ 2\\pi$",
            commonErrors: ["Missing $x=0$ and $x=2\\pi$.", "Using $\\cos2x=1-2\\sin^2x$ and getting a mixed equation."],
            examinerNote: "Check at $x=\\frac{2\\pi}3$: $\\cos\\frac{4\\pi}3=-\\frac12=\\cos\\frac{2\\pi}3$.",
          },
        },
        {
          id: "aahl-u2-compound-q15",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 10,
          stem: "This question uses compound angle identities to evaluate and prove results.",
          parts: [
            { label: "a", prompt: "Prove that $\\sin X\\cos Y=\\frac12\\left[\\sin(X+Y)+\\sin(X-Y)\\right]$.", marks: 3 },
            { label: "b", prompt: "Hence find the exact value of $\\sin75^\\circ\\cos15^\\circ$.", marks: 3 },
            { label: "c", prompt: "Find the exact value of $\\tan\\frac{\\pi}{12}$.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Compound angle identities", statement: "$\\sin(X\\pm Y)=\\sin X\\cos Y\\pm\\cos X\\sin Y$." },
              { kind: "formula", name: "Tangent difference", statement: "$\\tan(A-B)=\\frac{\\tan A-\\tan B}{1+\\tan A\\tan B}$." },
            ],
            steps: [
              { part: "a", reasoning: "Write down the two compound identities.", working: "\\sin(X+Y)=\\sin X\\cos Y+\\cos X\\sin Y;\\ \\sin(X-Y)=\\sin X\\cos Y-\\cos X\\sin Y", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Add them.", working: "\\sin(X+Y)+\\sin(X-Y)=2\\sin X\\cos Y", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Divide by $2$.", working: "\\sin X\\cos Y=\\tfrac12[\\sin(X+Y)+\\sin(X-Y)]\\quad\\text{(AG)}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Apply the identity with $X=75^\\circ$, $Y=15^\\circ$.", working: "\\tfrac12[\\sin90^\\circ+\\sin60^\\circ]", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Substitute exact values.", working: "\\tfrac12\\left[1+\\tfrac{\\sqrt3}2\\right]", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Simplify.", working: "\\frac12+\\frac{\\sqrt3}4", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Write $\\frac{\\pi}{12}=\\frac{\\pi}3-\\frac{\\pi}4$.", working: "\\tan\\left(\\tfrac{\\pi}3-\\tfrac{\\pi}4\\right)", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Apply the tangent difference formula.", working: "\\frac{\\sqrt3-1}{1+\\sqrt3\\cdot1}=\\frac{\\sqrt3-1}{\\sqrt3+1}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Rationalize the denominator.", working: "\\frac{(\\sqrt3-1)^2}{(\\sqrt3+1)(\\sqrt3-1)}=\\frac{4-2\\sqrt3}{2}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Simplify.", working: "2-\\sqrt3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) proved (b) $\\frac12+\\frac{\\sqrt3}4$ (c) $2-\\sqrt3$",
            commonErrors: ["In (b), using $X+Y=90^\\circ$ but computing $\\sin60^\\circ$ wrongly.", "In (c), forgetting to rationalize or sign error in $(\\sqrt3-1)^2$."],
            examinerNote: "Check (b): $\\sin75^\\circ\\approx0.9659$, $\\cos15^\\circ\\approx0.9659$, product $\\approx0.933=\\frac12+\\frac{\\sqrt3}4$.",
          },
        },
        {
          id: "aahl-u2-compound-q16",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 12,
          stem: "This question derives and uses the triple angle identity for cosine.",
          parts: [
            { label: "a", prompt: "Write down the compound angle identities for $\\cos(A+B)$ and $\\cos(A-B)$.", marks: 2 },
            { label: "b", prompt: "Show that $\\cos2\\theta=2\\cos^2\\theta-1$.", marks: 3 },
            { label: "c", prompt: "Prove that $\\cos3\\theta=4\\cos^3\\theta-3\\cos\\theta$.", marks: 4 },
            { label: "d", prompt: "Hence solve $4\\cos^3x-3\\cos x=0$ for $0\\le x\\le2\\pi$.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Compound angle identities", statement: "$\\cos(A\\pm B)=\\cos A\\cos B\\mp\\sin A\\sin B$." },
              { kind: "law", name: "Pythagorean identity", statement: "$\\sin^2\\theta=1-\\cos^2\\theta$." },
            ],
            steps: [
              { part: "a", reasoning: "State the sum identity.", working: "\\cos(A+B)=\\cos A\\cos B-\\sin A\\sin B", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the difference identity.", working: "\\cos(A-B)=\\cos A\\cos B+\\sin A\\sin B", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Set $B=A$ in the sum identity.", working: "\\cos2\\theta=\\cos^2\\theta-\\sin^2\\theta", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Replace $\\sin^2\\theta$ using the Pythagorean identity.", working: "=\\cos^2\\theta-(1-\\cos^2\\theta)", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Simplify.", working: "=2\\cos^2\\theta-1\\quad\\text{(AG)}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Write $3\\theta=2\\theta+\\theta$ and expand.", working: "\\cos3\\theta=\\cos2\\theta\\cos\\theta-\\sin2\\theta\\sin\\theta", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Substitute $\\cos2\\theta$ and $\\sin2\\theta=2\\sin\\theta\\cos\\theta$.", working: "=(2\\cos^2\\theta-1)\\cos\\theta-2\\sin^2\\theta\\cos\\theta", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Replace $\\sin^2\\theta$ again.", working: "=2\\cos^3\\theta-\\cos\\theta-2\\cos\\theta(1-\\cos^2\\theta)", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Collect like terms.", working: "=4\\cos^3\\theta-3\\cos\\theta\\quad\\text{(AG)}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Factor out $\\cos x$.", working: "\\cos x(4\\cos^2x-3)=0", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Solve $\\cos x=0$ and $\\cos^2x=\\frac34$ on the interval.", working: "\\cos x=0\\Rightarrow\\tfrac\\pi2,\\tfrac{3\\pi}2;\\quad \\cos x=\\pm\\tfrac{\\sqrt3}2\\Rightarrow\\tfrac\\pi6,\\tfrac{5\\pi}6,\\tfrac{7\\pi}6,\\tfrac{11\\pi}6", marks: 1, markCode: "M" },
              { part: "d", reasoning: "State all six solutions.", working: "x=\\tfrac\\pi6,\\tfrac\\pi2,\\tfrac{5\\pi}6,\\tfrac{7\\pi}6,\\tfrac{3\\pi}2,\\tfrac{11\\pi}6", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) stated (b) proved (c) proved (d) $x=\\frac\\pi6,\\frac\\pi2,\\frac{5\\pi}6,\\frac{7\\pi}6,\\frac{3\\pi}2,\\frac{11\\pi}6$",
            commonErrors: ["In (c), using $\\cos(A-B)$ instead of $\\cos(A+B)$.", "In (d), missing solutions where $\\cos x$ is negative."],
            examinerNote: "Check (c) at $\\theta=\\frac\\pi3$: $\\cos\\pi=-1$ and $4(\\frac18)-3(\\frac12)=-\\frac12-\\frac32=-2$? Recompute: $4(\\frac12)^3-3(\\frac12)=\\frac12-\\frac32=-1$.",
          },
        },
      ],
    },
  ],
};
