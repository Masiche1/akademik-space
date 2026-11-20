import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "pc-u3-lesson-3-2",
  code: "3-2",
  title: "Inverse Trigonometric Functions and Equations",
  goal: "I CAN evaluate inverse trigonometric functions and compositions exactly, and solve trigonometric equations on intervals and in general.",
  standards: ["HSF-TF.B.6", "HSF-TF.B.7", "HSF-TF.C.8"],
  vocabulary: [
    { term: "Restricted domain", definition: "A subset of the domain on which a function is one-to-one, chosen so that an inverse function exists." },
    { term: "Principal value", definition: "The single output of an inverse trigonometric function: $\\arcsin x\\in[-\\frac{\\pi}{2},\\frac{\\pi}{2}]$, $\\arccos x\\in[0,\\pi]$, $\\arctan x\\in(-\\frac{\\pi}{2},\\frac{\\pi}{2})$." },
    { term: "Composition", definition: "Applying one function to the output of another, such as $\\sin(\\arccos x)$." },
    { term: "Reference angle", definition: "The acute angle between the terminal side of an angle and the $x$-axis." },
    { term: "General solution", definition: "A formula that lists every solution of a trigonometric equation using an integer parameter $k$." },
    { term: "Extraneous solution", definition: "A value that arises during solving but does not satisfy the original equation or its restrictions." },
  ],
  concepts: [
    {
      id: "pc-u3-inverse-trig",
      title: "Inverse trigonometric functions and compositions",
      skill: "Evaluate arcsin, arccos, and arctan exactly using restricted ranges, and simplify compositions such as sin(arccos(3/5)) with right triangles.",
      lesson: {
        sections: [
          {
            heading: "Why the domain is restricted",
            body: "Sine, cosine, and tangent are not one-to-one over all real numbers, so none has an inverse until the domain is restricted. The standard restrictions are $\\sin x$ on $[-\\frac{\\pi}{2},\\frac{\\pi}{2}]$, $\\cos x$ on $[0,\\pi]$, and $\\tan x$ on $(-\\frac{\\pi}{2},\\frac{\\pi}{2})$. Then $\\arcsin x$ has range $[-\\frac{\\pi}{2},\\frac{\\pi}{2}]$, $\\arccos x$ has range $[0,\\pi]$, and $\\arctan x$ has range $(-\\frac{\\pi}{2},\\frac{\\pi}{2})$. The expression $\\arcsin x$ means 'the angle in that range whose sine is $x$', so $\\arcsin\\left(-\\frac12\\right)=-\\frac{\\pi}{6}$, not $\\frac{11\\pi}{6}$.",
          },
          {
            heading: "Composition and cancellation",
            body: "The inverse cancels only inside the restricted range: $\\sin(\\arcsin x)=x$ for $-1\\le x\\le1$, but $\\arcsin(\\sin x)=x$ only if $x\\in[-\\frac{\\pi}{2},\\frac{\\pi}{2}]$. For example, $\\arcsin\\left(\\sin\\frac{5\\pi}{6}\\right)=\\arcsin\\frac12=\\frac{\\pi}{6}$. Evaluate the inner expression first, then apply the outer function.",
          },
          {
            heading: "Right-triangle method for mixed compositions",
            body: "To find $\\sin(\\arccos\\frac35)$, let $\\theta=\\arccos\\frac35$, so $\\cos\\theta=\\frac35$ with $\\theta\\in[0,\\pi]$. Draw a right triangle with adjacent $3$ and hypotenuse $5$; the opposite side is $\\sqrt{25-9}=4$, so $\\sin\\theta=\\frac45$. Because $\\theta\\in[0,\\pi]$, $\\sin\\theta\\ge0$. In general, determine the sign from the range of the inverse function. For sums of inverse functions, use the angle-sum identities with the values found.",
          },
        ],
        keyFormulas: [
          { name: "Ranges", statement: "$\\arcsin:[-\\tfrac{\\pi}{2},\\tfrac{\\pi}{2}]$, $\\arccos:[0,\\pi]$, $\\arctan:(-\\tfrac{\\pi}{2},\\tfrac{\\pi}{2})$" },
          { name: "Cancellation", statement: "$\\sin(\\arcsin x)=x$ for $|x|\\le1$; $\\arcsin(\\sin x)=x$ only for $x\\in[-\\tfrac{\\pi}{2},\\tfrac{\\pi}{2}]$" },
          { name: "Pythagorean identity", statement: "$\\sin^2\\theta+\\cos^2\\theta=1$" },
        ],
        workedExample: {
          problem: "Evaluate $\\tan\\left(\\arcsin\\left(-\\dfrac{5}{13}\\right)\\right)$ exactly.",
          solution: "Let $\\theta=\\arcsin\\left(-\\frac{5}{13}\\right)$, so $\\sin\\theta=-\\frac5{13}$ and $\\theta\\in[-\\frac{\\pi}{2},\\frac{\\pi}{2}]$, meaning $\\cos\\theta\\ge0$. Then $\\cos\\theta=\\sqrt{1-\\frac{25}{169}}=\\frac{12}{13}$. Therefore $\\tan\\theta=\\frac{-5/13}{12/13}=-\\frac{5}{12}$.",
        },
      },
      questions: [
        {
          id: "pc-u3-inverse-trig-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the exact value of $\\arcsin\\left(-\\dfrac12\\right)$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$-\\dfrac{\\pi}{6}$" },
              { id: "b", text: "$\\dfrac{\\pi}{6}$" },
              { id: "c", text: "$\\dfrac{11\\pi}{6}$" },
              { id: "d", text: "$\\dfrac{7\\pi}{6}$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Range of arcsine", statement: "$\\arcsin x$ is the unique angle in $[-\\frac{\\pi}{2},\\frac{\\pi}{2}]$ whose sine is $x$." },
            ],
            steps: [
              { reasoning: "The reference angle with sine $\\frac12$ is $\\frac{\\pi}{6}$. The sine is negative, so the angle must lie in the allowed range below zero.", working: "\\sin\\left(-\\frac{\\pi}{6}\\right)=-\\frac12", marks: 1, markCode: "M" },
              { reasoning: "$-\\frac{\\pi}{6}$ lies in $[-\\frac{\\pi}{2},\\frac{\\pi}{2}]$, so it is the principal value.", working: "\\arcsin\\left(-\\tfrac12\\right)=-\\frac{\\pi}{6}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $-\\frac{\\pi}{6}$",
            commonErrors: ["Choosing $\\frac{11\\pi}{6}$ or $\\frac{7\\pi}{6}$, which have sine $-\\frac12$ but are outside the range.", "Ignoring the sign and giving $\\frac{\\pi}{6}$."],
          },
        },
        {
          id: "pc-u3-inverse-trig-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Evaluate $\\sin\\left(\\arccos\\dfrac35\\right)$. Give your answer as a decimal.",
          response: { type: "numeric", parts: [{ label: "Value", answer: 0.8, tolerance: 0.001 }] },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Pythagorean identity", statement: "$\\sin^2\\theta+\\cos^2\\theta=1$." },
              { kind: "definition", name: "Range of arccosine", statement: "$\\arccos x\\in[0,\\pi]$, so $\\sin(\\arccos x)\\ge0$." },
            ],
            steps: [
              { reasoning: "Let $\\theta=\\arccos\\frac35$, so $\\cos\\theta=\\frac35$ with $\\theta\\in[0,\\pi]$.", working: "\\cos\\theta=\\frac35", marks: 1, markCode: "M" },
              { reasoning: "Use the Pythagorean identity to find $\\sin\\theta$ (or a 3-4-5 triangle).", working: "\\sin^2\\theta=1-\\frac{9}{25}=\\frac{16}{25}", marks: 1, markCode: "M" },
              { reasoning: "Sine is nonnegative on $[0,\\pi]$, so take the positive root.", working: "\\sin\\theta=\\frac45=0.8", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac45=0.8$",
            commonErrors: ["Answering $\\frac35$ by cancelling sine with cosine.", "Taking the negative root without checking the range of arccosine."],
          },
        },
        {
          id: "pc-u3-inverse-trig-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate $\\cos\\left(\\arcsin\\dfrac35+\\arccos\\dfrac5{13}\\right)$. Give your answer as a decimal rounded to 3 decimal places.",
          response: { type: "numeric", parts: [{ label: "Value", answer: -0.246, tolerance: 0.001 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Cosine sum identity", statement: "$\\cos(\\alpha+\\beta)=\\cos\\alpha\\cos\\beta-\\sin\\alpha\\sin\\beta$." },
              { kind: "definition", name: "Ranges", statement: "$\\arcsin x\\in[-\\frac{\\pi}{2},\\frac{\\pi}{2}]$ and $\\arccos x\\in[0,\\pi]$, so $\\cos\\alpha\\ge0$ and $\\sin\\beta\\ge0$." },
            ],
            steps: [
              { reasoning: "Let $\\alpha=\\arcsin\\frac35$. Then $\\sin\\alpha=\\frac35$ and $\\cos\\alpha=\\frac45$ (nonnegative on the range).", working: "\\cos\\alpha=\\sqrt{1-\\tfrac{9}{25}}=\\frac45", marks: 1, markCode: "A" },
              { reasoning: "Let $\\beta=\\arccos\\frac5{13}$. Then $\\cos\\beta=\\frac5{13}$ and $\\sin\\beta=\\frac{12}{13}$.", working: "\\sin\\beta=\\sqrt{1-\\tfrac{25}{169}}=\\frac{12}{13}", marks: 1, markCode: "A" },
              { reasoning: "Substitute into the cosine sum identity.", working: "\\cos(\\alpha+\\beta)=\\frac45\\cdot\\frac5{13}-\\frac35\\cdot\\frac{12}{13}", marks: 1, markCode: "M" },
              { reasoning: "Simplify.", working: "=\\frac{20-36}{65}=-\\frac{16}{65}\\approx-0.246", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$-\\frac{16}{65}\\approx-0.246$",
            commonErrors: ["Using $\\cos\\alpha\\cos\\beta+\\sin\\alpha\\sin\\beta$ (the difference formula).", "Writing $\\cos(\\alpha+\\beta)=\\cos\\alpha+\\cos\\beta$."],
          },
        },
        {
          id: "pc-u3-inverse-trig-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Let $\\theta=\\arccos\\left(-\\dfrac{5}{13}\\right)$.",
          parts: [
            { label: "a", prompt: "Find $\\sin\\theta$ as a decimal (4 d.p.), and justify the sign using the range of arccosine.", marks: 2 },
            { label: "b", prompt: "Find $\\tan\\theta$.", marks: 2 },
            { label: "c", prompt: "Find $\\sin(2\\theta)$ as a decimal (4 d.p.).", marks: 3 },
            { label: "d", prompt: "Evaluate $\\arcsin\\left(\\sin\\dfrac{7\\pi}{6}\\right)$ as a decimal (4 d.p.) and explain why the answer is not $\\dfrac{7\\pi}{6}$.", marks: 3 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) $\\sin\\theta$", answer: 0.9231, tolerance: 0.001 },
              { label: "(b) $\\tan\\theta$", answer: -2.4, tolerance: 0.001 },
              { label: "(c) $\\sin 2\\theta$", answer: -0.7101, tolerance: 0.001 },
              { label: "(d) $\\arcsin(\\sin\\frac{7\\pi}{6})$", answer: -0.5236, tolerance: 0.001 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Pythagorean identity", statement: "$\\sin^2\\theta+\\cos^2\\theta=1$." },
              { kind: "formula", name: "Double-angle identity", statement: "$\\sin2\\theta=2\\sin\\theta\\cos\\theta$." },
              { kind: "definition", name: "Range of arcsine", statement: "$\\arcsin$ outputs only angles in $[-\\frac{\\pi}{2},\\frac{\\pi}{2}]$." },
            ],
            steps: [
              { part: "a", reasoning: "$\\theta\\in[0,\\pi]$ so $\\sin\\theta\\ge0$; use the Pythagorean identity.", working: "\\sin\\theta=\\sqrt{1-\\tfrac{25}{169}}=\\frac{12}{13}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the decimal value.", working: "\\frac{12}{13}\\approx0.9231", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Tangent is sine over cosine.", working: "\\tan\\theta=\\frac{12/13}{-5/13}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Simplify; $\\theta$ is in quadrant II so the tangent is negative.", working: "-\\frac{12}{5}=-2.4", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Apply the double-angle identity.", working: "\\sin2\\theta=2\\left(\\frac{12}{13}\\right)\\left(-\\frac{5}{13}\\right)", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Multiply.", working: "=-\\frac{120}{169}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Convert to a decimal.", working: "\\approx-0.7101", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Evaluate the inner sine: $\\frac{7\\pi}{6}$ has reference angle $\\frac{\\pi}{6}$ in quadrant III.", working: "\\sin\\frac{7\\pi}{6}=-\\frac12", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Apply arcsine to $-\\frac12$.", working: "\\arcsin\\left(-\\tfrac12\\right)=-\\frac{\\pi}{6}\\approx-0.5236", marks: 1, markCode: "A" },
              { part: "d", reasoning: "$\\frac{7\\pi}{6}$ is outside $[-\\frac{\\pi}{2},\\frac{\\pi}{2}]$, and arcsine only returns angles in that range, so $\\arcsin(\\sin x)=x$ fails here.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $\\frac{12}{13}\\approx0.9231$. (b) $-\\frac{12}{5}=-2.4$. (c) $-\\frac{120}{169}\\approx-0.7101$. (d) $-\\frac{\\pi}{6}\\approx-0.5236$.",
            commonErrors: ["Giving $\\sin\\theta$ a negative sign because the cosine is negative.", "Answering $\\frac{7\\pi}{6}$ in (d) by cancelling arcsine and sine blindly."],
          },
        },
      ],
    },
    {
      id: "pc-u3-trig-equations",
      title: "Solving trigonometric equations",
      skill: "Solve trigonometric equations on a given interval and write general solutions using an integer parameter.",
      lesson: {
        sections: [
          {
            heading: "Isolate, then use the unit circle",
            body: "Treat the trigonometric function as the unknown: isolate it, then find all angles with that value. If $\\sin x=\\frac12$, the reference angle is $\\frac{\\pi}{6}$ and sine is positive in quadrants I and II, giving $x=\\frac{\\pi}{6}$ and $\\frac{5\\pi}{6}$ on $[0,2\\pi)$. Never stop at the calculator value, since the inverse function returns only one of the solutions.",
          },
          {
            heading: "Quadratic-type equations",
            body: "Equations such as $2\\sin^2x-\\sin x-1=0$ are quadratics in $\\sin x$. Substitute $s=\\sin x$, factor to $(2s+1)(s-1)=0$, then solve $\\sin x=-\\frac12$ and $\\sin x=1$. Reject any value of $s$ outside $[-1,1]$ because it has no solutions. Never divide both sides by a trigonometric factor, since this loses solutions; factor instead.",
          },
          {
            heading: "General solutions and multiple angles",
            body: "Because sine and cosine have period $2\\pi$ and tangent has period $\\pi$, add $2\\pi k$ (or $\\pi k$ for tangent) with integer $k$. For $\\sin(2x)=\\frac{\\sqrt3}{2}$, first write $2x=\\frac{\\pi}{3}+2\\pi k$ or $2x=\\frac{2\\pi}{3}+2\\pi k$, then divide everything, including the $2\\pi k$, by 2 to get $x=\\frac{\\pi}{6}+\\pi k$ or $x=\\frac{\\pi}{3}+\\pi k$. Then choose the values of $k$ that land in the requested interval.",
          },
        ],
        keyFormulas: [
          { name: "General solution, sine", statement: "$\\sin\\theta=\\sin\\alpha\\Rightarrow\\theta=\\alpha+2\\pi k$ or $\\theta=\\pi-\\alpha+2\\pi k$" },
          { name: "General solution, cosine", statement: "$\\cos\\theta=\\cos\\alpha\\Rightarrow\\theta=\\pm\\alpha+2\\pi k$" },
          { name: "General solution, tangent", statement: "$\\tan\\theta=\\tan\\alpha\\Rightarrow\\theta=\\alpha+\\pi k$" },
        ],
        workedExample: {
          problem: "Solve $2\\cos^2x+\\cos x-1=0$ on $[0,2\\pi)$.",
          solution: "Factor: $(2\\cos x-1)(\\cos x+1)=0$. Then $\\cos x=\\frac12$ gives $x=\\frac{\\pi}{3},\\frac{5\\pi}{3}$, and $\\cos x=-1$ gives $x=\\pi$. The solutions are $x=\\frac{\\pi}{3},\\pi,\\frac{5\\pi}{3}$.",
        },
      },
      questions: [
        {
          id: "pc-u3-trig-equations-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which are all the solutions of $2\\sin x-1=0$ on $[0,2\\pi)$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\dfrac{\\pi}{6}$ and $\\dfrac{5\\pi}{6}$" },
              { id: "b", text: "$\\dfrac{\\pi}{6}$ and $\\dfrac{11\\pi}{6}$" },
              { id: "c", text: "$\\dfrac{\\pi}{3}$ and $\\dfrac{2\\pi}{3}$" },
              { id: "d", text: "$\\dfrac{\\pi}{6}$ and $\\dfrac{7\\pi}{6}$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Sine on the unit circle", statement: "Sine is positive in quadrants I and II; the solutions are $\\alpha$ and $\\pi-\\alpha$." },
            ],
            steps: [
              { reasoning: "Isolate the sine.", working: "\\sin x=\\frac12", marks: 1, markCode: "M" },
              { reasoning: "Reference angle $\\frac{\\pi}{6}$; positive sine in quadrants I and II.", working: "x=\\frac{\\pi}{6},\\ \\pi-\\frac{\\pi}{6}=\\frac{5\\pi}{6}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $\\frac{\\pi}{6}$ and $\\frac{5\\pi}{6}$",
            commonErrors: ["Using quadrant IV for a positive sine value.", "Confusing the reference angle with $\\frac{\\pi}{3}$."],
          },
        },
        {
          id: "pc-u3-trig-equations-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Solve $2\\cos x+1=0$ on $[0,2\\pi)$. Enter both solutions in increasing order as decimals (3 d.p.).",
          response: {
            type: "numeric",
            parts: [
              { label: "Smaller solution", answer: 2.094, tolerance: 0.01 },
              { label: "Larger solution", answer: 4.189, tolerance: 0.01 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Cosine on the unit circle", statement: "Cosine is negative in quadrants II and III; with reference angle $\\alpha$ the solutions are $\\pi-\\alpha$ and $\\pi+\\alpha$." },
            ],
            steps: [
              { reasoning: "Isolate cosine.", working: "\\cos x=-\\frac12", marks: 1, markCode: "M" },
              { reasoning: "Reference angle is $\\frac{\\pi}{3}$; use quadrants II and III.", working: "x=\\pi-\\frac{\\pi}{3}=\\frac{2\\pi}{3}", marks: 1, markCode: "A" },
              { reasoning: "The second solution is in quadrant III.", working: "x=\\pi+\\frac{\\pi}{3}=\\frac{4\\pi}{3}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=\\frac{2\\pi}{3}\\approx2.094$ and $x=\\frac{4\\pi}{3}\\approx4.189$.",
            commonErrors: ["Giving only the calculator value $\\arccos(-\\frac12)$ and omitting the second solution.", "Using reference angle $\\frac{\\pi}{6}$."],
          },
        },
        {
          id: "pc-u3-trig-equations-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Solve $2\\sin^2x-\\sin x-1=0$ on $[0,2\\pi)$. Enter the three solutions in increasing order as decimals (3 d.p.).",
          response: {
            type: "numeric",
            parts: [
              { label: "Solution 1", answer: 1.571, tolerance: 0.01 },
              { label: "Solution 2", answer: 3.665, tolerance: 0.01 },
              { label: "Solution 3", answer: 5.76, tolerance: 0.01 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Quadratic in a trigonometric function", statement: "Substitute $s=\\sin x$, solve the quadratic, then solve each equation $\\sin x=s$ with $|s|\\le1$." },
              { kind: "property", name: "Zero-product property", statement: "$AB=0$ implies $A=0$ or $B=0$." },
            ],
            steps: [
              { reasoning: "Factor as a quadratic in $\\sin x$.", working: "(2\\sin x+1)(\\sin x-1)=0", marks: 1, markCode: "M" },
              { reasoning: "Apply the zero-product property.", working: "\\sin x=-\\frac12\\ \\text{or}\\ \\sin x=1", marks: 1, markCode: "A" },
              { reasoning: "$\\sin x=1$ has one solution on the interval.", working: "x=\\frac{\\pi}{2}\\approx1.571", marks: 1, markCode: "A" },
              { reasoning: "$\\sin x=-\\frac12$ has reference angle $\\frac{\\pi}{6}$ in quadrants III and IV.", working: "x=\\frac{7\\pi}{6}\\approx3.665,\\ \\frac{11\\pi}{6}\\approx5.760", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=\\frac{\\pi}{2},\\frac{7\\pi}{6},\\frac{11\\pi}{6}$",
            commonErrors: ["Solving $\\sin x=-\\frac12$ with quadrants I and II.", "Dividing by $\\sin x$ and losing solutions."],
          },
        },
        {
          id: "pc-u3-trig-equations-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Consider the equation $\\sin(2x)=\\dfrac{\\sqrt3}{2}$.",
          parts: [
            { label: "a", prompt: "Find the two smallest positive values of $2x$ as decimals (4 d.p.).", marks: 2 },
            { label: "b", prompt: "Write the general solution for $x$ using an integer $k$.", marks: 3 },
            { label: "c", prompt: "List all solutions on $[0,2\\pi)$. How many are there?", marks: 3 },
            { label: "d", prompt: "How many solutions are there on $[0,3\\pi)$? Justify your answer using the period of $\\sin 2x$.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Smaller value of $2x$", answer: 1.0472, tolerance: 0.001 },
              { label: "(a) Larger value of $2x$", answer: 2.0944, tolerance: 0.001 },
              { label: "(c) Number of solutions on $[0,2\\pi)$", answer: 4 },
              { label: "(d) Number of solutions on $[0,3\\pi)$", answer: 6 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Sine on the unit circle", statement: "$\\sin\\theta=\\frac{\\sqrt3}{2}$ for $\\theta=\\frac{\\pi}{3}$ and $\\frac{2\\pi}{3}$ in one period, then every $2\\pi$." },
              { kind: "property", name: "Period of $\\sin(2x)$", statement: "The period is $\\frac{2\\pi}{2}=\\pi$, so solutions repeat every $\\pi$ in $x$." },
            ],
            steps: [
              { part: "a", reasoning: "Reference angle $\\frac{\\pi}{3}$; sine is positive in quadrants I and II.", working: "2x=\\frac{\\pi}{3}\\approx1.0472", marks: 1, markCode: "A" },
              { part: "a", reasoning: "The second angle is $\\pi$ minus the reference angle.", working: "2x=\\frac{2\\pi}{3}\\approx2.0944", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Add full periods of sine to each value of $2x$.", working: "2x=\\frac{\\pi}{3}+2\\pi k\\ \\text{or}\\ 2x=\\frac{2\\pi}{3}+2\\pi k", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Divide every term, including $2\\pi k$, by 2.", working: "x=\\frac{\\pi}{6}+\\pi k", marks: 1, markCode: "A" },
              { part: "b", reasoning: "The second family after dividing by 2.", working: "x=\\frac{\\pi}{3}+\\pi k", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Substitute $k=0$ and $k=1$ (larger $k$ exceeds $2\\pi$; negative $k$ is below 0).", working: "x=\\frac{\\pi}{6},\\ \\frac{\\pi}{3},\\ \\frac{7\\pi}{6},\\ \\frac{4\\pi}{3}", marks: 2, markCode: "M" },
              { part: "c", reasoning: "Count them.", working: "4\\ \\text{solutions}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Each period of length $\\pi$ contains two solutions and $[0,3\\pi)$ contains three periods. Check: $k=0,1,2$ give $\\frac{13\\pi}{6}$ and $\\frac{7\\pi}{3}$ in addition, both below $3\\pi$.", working: "2\\times3=6", marks: 2, markCode: "R" },
            ],
            finalAnswer: "(a) $\\frac{\\pi}{3}\\approx1.0472$ and $\\frac{2\\pi}{3}\\approx2.0944$. (b) $x=\\frac{\\pi}{6}+\\pi k$ or $x=\\frac{\\pi}{3}+\\pi k$. (c) $\\frac{\\pi}{6},\\frac{\\pi}{3},\\frac{7\\pi}{6},\\frac{4\\pi}{3}$ (4 solutions). (d) 6.",
            commonErrors: ["Dividing by 2 but leaving $2\\pi k$ undivided, giving $x=\\frac{\\pi}{6}+2\\pi k$.", "Finding the solutions of $\\sin x=\\frac{\\sqrt3}{2}$ and halving the count."],
          },
        },
      ],
    },
  ],
};
