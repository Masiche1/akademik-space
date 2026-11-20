import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "pc-u2-lesson-2-3",
  code: "2-3",
  title: "Trigonometric Identities and Equations",
  goal: "I CAN use fundamental trigonometric identities to simplify and prove statements, and solve trigonometric equations on $[0,2\\pi)$.",
  standards: ["HSF-TF.C.8", "HSF-TF.B.7"],
  vocabulary: [
    { term: "Trigonometric identity", definition: "An equation involving trigonometric functions that is true for every angle in its domain." },
    { term: "Pythagorean identity", definition: "The identity $\\sin^2\\theta+\\cos^2\\theta=1$, derived from the unit circle." },
    { term: "Reciprocal identity", definition: "An identity defining one trigonometric function as the reciprocal of another, such as $\\csc\\theta=1/\\sin\\theta$ when $\\sin\\theta\\ne0$." },
    { term: "Quotient identity", definition: "The identities $\\tan\\theta=\\sin\\theta/\\cos\\theta$ and $\\cot\\theta=\\cos\\theta/\\sin\\theta$, where denominators are nonzero." },
    { term: "Identity proof", definition: "A chain of equivalent expressions justified by definitions, identities, and algebra, establishing equality for all allowed values." },
    { term: "Extraneous solution", definition: "A candidate produced by algebra that is outside the original equation's domain or does not satisfy the original equation." },
  ],
  concepts: [
    {
      id: "pc-u2-trig-identities",
      title: "Fundamental identities and proofs",
      skill: "Use Pythagorean, reciprocal, and quotient identities to rewrite expressions and justify identity proofs.",
      lesson: {
        sections: [
          {
            heading: "The fundamental identity family",
            body: "The unit-circle equation $x^2+y^2=1$, with $x=\\cos\\theta$ and $y=\\sin\\theta$, gives $\\sin^2\\theta+\\cos^2\\theta=1$. Dividing by $\\cos^2\\theta$ or $\\sin^2\\theta$ yields $1+\\tan^2\\theta=\\sec^2\\theta$ and $1+\\cot^2\\theta=\\csc^2\\theta$, wherever the divisions are defined. Reciprocal identities include $\\sec\\theta=1/\\cos\\theta$, $\\csc\\theta=1/\\sin\\theta$, and $\\cot\\theta=1/\\tan\\theta$ when the relevant denominators are nonzero. Quotient identities express tangent and cotangent as ratios of sine and cosine.",
          },
          {
            heading: "Writing a valid proof",
            body: "To prove an identity, transform one side into the other using a stated identity and valid algebra. A common strategy is to rewrite a complicated side in terms of sine and cosine, combine fractions, then apply $\\sin^2\\theta+\\cos^2\\theta=1$. Do not assume the identity is true by starting with both sides and manipulating them until they look alike. State restrictions where a denominator is zero; an identity is asserted only where both sides are defined. Check algebraic simplifications carefully, especially when canceling factors.",
          },
        ],
        keyFormulas: [
          { name: "Pythagorean identities", statement: "$\\sin^2\\theta+\\cos^2\\theta=1$, $1+\\tan^2\\theta=\\sec^2\\theta$, and $1+\\cot^2\\theta=\\csc^2\\theta$" },
          { name: "Reciprocal identities", statement: "$\\csc\\theta=1/\\sin\\theta$, $\\sec\\theta=1/\\cos\\theta$, and $\\cot\\theta=1/\\tan\\theta$ when defined" },
          { name: "Quotient identities", statement: "$\\tan\\theta=\\sin\\theta/\\cos\\theta$ and $\\cot\\theta=\\cos\\theta/\\sin\\theta$ when defined" },
        ],
        workedExample: {
          problem: "Prove the identity $\\frac{1-\\cos^2\\theta}{\\sin\\theta}=\\sin\\theta$ for $\\sin\\theta\\ne0$.",
          solution: "Start with the left-hand side and apply $\\sin^2\\theta+\\cos^2\\theta=1$, so $1-\\cos^2\\theta=\\sin^2\\theta$. Then $\\frac{1-\\cos^2\\theta}{\\sin\\theta}=\\frac{\\sin^2\\theta}{\\sin\\theta}=\\sin\\theta$, where the cancellation is valid because $\\sin\\theta\\ne0$. This equals the right-hand side, proving the identity on its domain.",
        },
      },
      questions: [
        {
          id: "pc-u2-identity-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which expression is equivalent to $1+\\tan^2\\theta$ wherever it is defined?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\csc^2\\theta$" },
              { id: "b", text: "$\\sec^2\\theta$" },
              { id: "c", text: "$\\sin^2\\theta$" },
              { id: "d", text: "$1-\\tan^2\\theta$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Pythagorean identity", statement: "$1+\\tan^2\\theta=\\sec^2\\theta$ wherever cosine is nonzero." },
              { kind: "definition", name: "Tangent and secant", statement: "$\\tan\\theta=\\sin\\theta/\\cos\\theta$ and $\\sec\\theta=1/\\cos\\theta$." },
            ],
            steps: [
              { reasoning: "Recall the Pythagorean identity obtained by dividing $\\sin^2\\theta+\\cos^2\\theta=1$ by $\\cos^2\\theta$.", working: "\\frac{\\sin^2\\theta}{\\cos^2\\theta}+1=\\frac{1}{\\cos^2\\theta}", marks: 1, markCode: "M" },
              { reasoning: "Replace the quotient and reciprocal with their function names.", working: "1+\\tan^2\\theta=\\sec^2\\theta", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** $\\sec^2\\theta$",
            commonErrors: ["Confusing $1+\\tan^2\\theta=\\sec^2\\theta$ with $1+\\cot^2\\theta=\\csc^2\\theta$."],
          },
        },
        {
          id: "pc-u2-identity-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Prove that $\\sin^2\\theta(1+\\cot^2\\theta)=1$ for all $\\theta$ for which the left-hand side is defined. Show a justified chain of equalities.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Pythagorean identity", statement: "$1+\\cot^2\\theta=\\csc^2\\theta$." },
              { kind: "definition", name: "Reciprocal identity", statement: "$\\csc\\theta=1/\\sin\\theta$ when $\\sin\\theta\\ne0$." },
              { kind: "property", name: "Domain restriction", statement: "$\\cot\\theta$ is defined only when $\\sin\\theta\\ne0$." },
            ],
            steps: [
              { reasoning: "Begin with the left side and replace the parenthetical expression using the Pythagorean identity.", working: "\\sin^2\\theta(1+\\cot^2\\theta)=\\sin^2\\theta\\csc^2\\theta", marks: 1, markCode: "M" },
              { reasoning: "Rewrite cosecant using its reciprocal definition.", working: "\\sin^2\\theta\\csc^2\\theta=\\sin^2\\theta\\left(\\frac{1}{\\sin\\theta}\\right)^2", marks: 1, markCode: "A" },
              { reasoning: "Cancel using $\\sin\\theta\\ne0$, the domain condition already required by cotangent.", working: "\\sin^2\\theta\\left(\\frac{1}{\\sin\\theta}\\right)^2=1", marks: 1, markCode: "R" },
            ],
            finalAnswer: "The left side simplifies to $1$, so the identity holds wherever defined ($\\sin\\theta\\ne0$).",
            commonErrors: ["Using $1+\\cot^2\\theta=\\sec^2\\theta$ instead of the correct identity.", "Failing to state that $\\sin\\theta$ must be nonzero."],
            examinerNote: "Award the reasoning mark only when the cancellation is justified by the domain of $\\cot\\theta$.",
          },
        },
        {
          id: "pc-u2-identity-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Prove the identity $\\frac{\\sec\\theta-\\cos\\theta}{\\tan\\theta}=\\sin\\theta$ for values of $\\theta$ where both sides are defined. Write an open-response proof beginning with one side only.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Reciprocal identities", statement: "$\\sec\\theta=1/\\cos\\theta$ and $\\csc\\theta=1/\\sin\\theta$ when defined." },
              { kind: "definition", name: "Quotient identity", statement: "$\\tan\\theta=\\sin\\theta/\\cos\\theta$ when $\\cos\\theta\\ne0$." },
              { kind: "theorem", name: "Pythagorean identity", statement: "$1-\\cos^2\\theta=\\sin^2\\theta$." },
            ],
            steps: [
              { reasoning: "Begin with the left side and rewrite secant and tangent in sine-cosine form.", working: "\\frac{\\sec\\theta-\\cos\\theta}{\\tan\\theta}=\\frac{\\frac{1}{\\cos\\theta}-\\cos\\theta}{\\frac{\\sin\\theta}{\\cos\\theta}}", marks: 1, markCode: "M" },
              { reasoning: "Combine the numerator over a common denominator.", working: "=\\frac{\\frac{1-\\cos^2\\theta}{\\cos\\theta}}{\\frac{\\sin\\theta}{\\cos\\theta}}", marks: 1, markCode: "A" },
              { reasoning: "Use the Pythagorean identity in the numerator.", working: "=\\frac{\\frac{\\sin^2\\theta}{\\cos\\theta}}{\\frac{\\sin\\theta}{\\cos\\theta}}", marks: 1, markCode: "M" },
              { reasoning: "Divide by the fraction and simplify to the right side, valid where the original denominators are nonzero.", working: "=\\frac{\\sin^2\\theta}{\\cos\\theta}\\cdot\\frac{\\cos\\theta}{\\sin\\theta}=\\sin\\theta", marks: 1, markCode: "R" },
            ],
            finalAnswer: "The left side simplifies to $\\sin\\theta$; therefore the identity is true wherever both sides are defined.",
            commonErrors: ["Starting by assuming the left and right sides are equal and changing both simultaneously.", "Canceling factors without noting the nonzero denominators in the original expression."],
            examinerNote: "Equivalent proofs are valid. The original expression requires $\\sin\\theta\\ne0$ and $\\cos\\theta\\ne0$.",
          },
        },
        {
          id: "pc-u2-identity-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Consider the identity $(1+\\tan\\theta)^2+(1-\\tan\\theta)^2=2\\sec^2\\theta$, which holds wherever $\\tan\\theta$ is defined.",
          parts: [
            { label: "a", prompt: "Check the identity numerically at $\\theta=\\pi/4$. (1 mark)", marks: 1 },
            { label: "b", prompt: "Prove the identity, starting from the left-hand side only. (4 marks)", marks: 4 },
            { label: "c", prompt: "State the values of $\\theta$ for which the identity is not defined, and explain why a numerical check in part (a) is not a proof. (2 marks)", marks: 2 },
            { label: "d", prompt: "Given that $\\tan\\theta=2$ and $\\theta$ is in Quadrant III, use the identity to evaluate the left-hand side, then find the exact value of $\\cos\\theta$. (3 marks)", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Pythagorean identity", statement: "$1+\\tan^2\\theta=\\sec^2\\theta$ wherever $\\cos\\theta\\ne0$." },
              { kind: "definition", name: "Reciprocal identity", statement: "$\\sec\\theta=\\frac{1}{\\cos\\theta}$, defined when $\\cos\\theta\\ne0$." },
              { kind: "principle", name: "Proof versus example", statement: "An identity must hold for every admissible $\\theta$; checking one value cannot prove it." },
            ],
            steps: [
              { part: "a", reasoning: "At $\\pi/4$, $\\tan\\theta=1$ and $\\sec^2\\theta=2$, so both sides are 4.", working: "(2)^2+(0)^2=4,\\quad 2\\cdot2=4", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Expand both squares.", working: "(1+2\\tan\\theta+\\tan^2\\theta)+(1-2\\tan\\theta+\\tan^2\\theta)", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Combine like terms: the $\\pm2\\tan\\theta$ terms cancel.", working: "=2+2\\tan^2\\theta", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Factor out 2 and apply the Pythagorean identity.", working: "=2(1+\\tan^2\\theta)=2\\sec^2\\theta", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State that the left side has been transformed into the right side, so the identity is proved.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "$\\tan\\theta$ and $\\sec\\theta$ are undefined where $\\cos\\theta=0$.", working: "\\theta=\\frac{\\pi}{2}+k\\pi,\\;k\\in\\mathbb{Z}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "One value of $\\theta$ satisfying an equation does not show it is true for all admissible $\\theta$.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Using the identity with $\\sec^2\\theta=1+\\tan^2\\theta=5$.", working: "\\text{LHS}=2\\sec^2\\theta=2(5)=10", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Direct check: $(1+2)^2+(1-2)^2=9+1=10$.", working: "9+1=10", marks: 1, markCode: "R" },
              { part: "d", reasoning: "$\\cos^2\\theta=1/5$ and cosine is negative in Quadrant III.", working: "\\cos\\theta=-\\frac{1}{\\sqrt5}=-\\frac{\\sqrt5}{5}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Both sides equal 4. (b) LHS $=2+2\\tan^2\\theta=2\\sec^2\\theta$. (c) Undefined at $\\theta=\\pi/2+k\\pi$; one example is not a proof. (d) LHS $=10$; $\\cos\\theta=-\\sqrt5/5$.",
            commonErrors: ["Expanding $(1+\\tan\\theta)^2$ as $1+\\tan^2\\theta$ and omitting the middle term.", "Using $1+\\tan^2\\theta=\\csc^2\\theta$.", "Giving a positive cosine in Quadrant III."],
            examinerNote: "Part (d) first check mark may be awarded for either route; the cosine mark requires the correct sign.",
          },
        },
      ],
    },
    {
      id: "pc-u2-trig-equations",
      title: "Solving trigonometric equations",
      skill: "Solve trigonometric equations by using exact unit-circle values and include every solution in $[0,2\\pi)$.",
      lesson: {
        sections: [
          {
            heading: "Find all angles in the interval",
            body: "To solve a basic equation such as $\\sin x=c$, first identify the reference angle with the appropriate special-angle value. Then use the sign of $c$ and the sign pattern of sine to locate every quadrant that contains a solution. For cosine, use the horizontal coordinate; for tangent, use the quotient and its period. The interval $[0,2\\pi)$ includes $0$ but excludes $2\\pi$, so do not list both as distinct answers. Give exact answers in radians, usually as multiples of $\\pi$.",
          },
          {
            heading: "Equations with powers or identities",
            body: "For equations involving squared trig functions, isolate a single function when possible, use a Pythagorean identity, or factor an algebraic expression in that function. Solve each resulting basic trig equation and collect the solutions in the specified interval. Check candidates in the original equation, especially after multiplying by an expression that might be zero or dividing by a trig function. A complete solution set contains all valid angles and no values outside the interval.",
          },
        ],
        keyFormulas: [
          { name: "Pythagorean identity", statement: "$\\sin^2x+\\cos^2x=1$" },
          { name: "Sine symmetry", statement: "$\\sin(\\pi-\\alpha)=\\sin\\alpha$" },
          { name: "Cosine symmetry", statement: "$\\cos(2\\pi-\\alpha)=\\cos\\alpha$" },
          { name: "Tangent period", statement: "$\\tan(x+\\pi)=\\tan x$ where defined" },
        ],
        workedExample: {
          problem: "Solve $\\cos x=-\\sqrt{2}/2$ on $[0,2\\pi)$.",
          solution: "The reference angle with cosine magnitude $\\sqrt{2}/2$ is $\\pi/4$. Cosine is negative in Quadrants II and III. Therefore $x=\\pi-\\pi/4=3\\pi/4$ or $x=\\pi+\\pi/4=5\\pi/4$. Both are in $[0,2\\pi)$, so the solution set is **$\\{3\\pi/4,5\\pi/4\\}$**.",
        },
      },
      questions: [
        {
          id: "pc-u2-equation-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which is the complete solution set for $\\sin x=\\frac{1}{2}$ on $[0,2\\pi)$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\{\\pi/6\\}$" },
              { id: "b", text: "$\\{\\pi/6,5\\pi/6\\}$" },
              { id: "c", text: "$\\{7\\pi/6,11\\pi/6\\}$" },
              { id: "d", text: "$\\{\\pi/6,\\pi/2,5\\pi/6\\}$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Sine on the unit circle", statement: "$\\sin x$ is the $y$-coordinate of the unit-circle point at angle $x$." },
              { kind: "property", name: "Positive sine", statement: "Sine is positive in Quadrants I and II." },
              { kind: "principle", name: "Reference angle", statement: "The reference angle with sine $1/2$ is $\\pi/6$." },
            ],
            steps: [
              { reasoning: "Use the reference angle $\\pi/6$ and locate the two quadrants where sine is positive.", working: "x=\\frac{\\pi}{6}\\quad\\text{or}\\quad x=\\pi-\\frac{\\pi}{6}", marks: 1, markCode: "M" },
              { reasoning: "Simplify the second angle and include both interval solutions.", working: "x=\\frac{\\pi}{6},\\;\\frac{5\\pi}{6}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** $\\{\\pi/6,5\\pi/6\\}$",
            commonErrors: ["Listing only the Quadrant I solution.", "Using the angles where sine is negative."],
          },
        },
        {
          id: "pc-u2-equation-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Solve $\\sin x=\\frac{\\sqrt{3}}{2}$ on $[0,2\\pi)$. Give both solutions in radians to the nearest thousandth.",
          response: {
            type: "numeric",
            parts: [
              { label: "Smaller solution", answer: 1.047, tolerance: 0.001, unit: "radians" },
              { label: "Larger solution", answer: 2.094, tolerance: 0.001, unit: "radians" },
            ],
            unordered: true,
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Unit-circle sine", statement: "$\\sin x$ is the vertical coordinate; a positive sine occurs in Quadrants I and II." },
              { kind: "property", name: "Special-angle value", statement: "$\\sin(\\pi/3)=\\sqrt{3}/2$." },
              { kind: "principle", name: "Reference-angle symmetry", statement: "The Quadrant II angle with reference angle $\\alpha$ is $\\pi-\\alpha$." },
            ],
            steps: [
              { reasoning: "Identify the reference angle from the special-angle sine value.", working: "\\alpha=\\frac{\\pi}{3}", marks: 1, markCode: "M" },
              { reasoning: "Place the positive-sine solutions in Quadrants I and II.", working: "x=\\frac{\\pi}{3},\\qquad x=\\pi-\\frac{\\pi}{3}=\\frac{2\\pi}{3}", marks: 1, markCode: "A" },
              { reasoning: "Convert both exact solutions to radians rounded to the nearest thousandth.", working: "\\frac{\\pi}{3}\\approx1.047,\\qquad\\frac{2\\pi}{3}\\approx2.094", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x\\approx1.047$ and $x\\approx2.094$ radians",
            commonErrors: ["Using a third-quadrant angle although sine is negative there.", "Reporting only one of the two angles with positive sine."],
          },
        },
        {
          id: "pc-u2-equation-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Solve $2\\cos^2x-1=0$ on $[0,2\\pi)$. Give all solutions in radians to the nearest thousandth.",
          response: {
            type: "numeric",
            parts: [
              { label: "First solution", answer: 0.785, tolerance: 0.001, unit: "radians" },
              { label: "Second solution", answer: 2.356, tolerance: 0.001, unit: "radians" },
              { label: "Third solution", answer: 3.927, tolerance: 0.001, unit: "radians" },
              { label: "Fourth solution", answer: 5.498, tolerance: 0.001, unit: "radians" },
            ],
            unordered: true,
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Algebraic equation solving", statement: "Isolate the squared trigonometric function before solving for its values." },
              { kind: "definition", name: "Cosine unit-circle values", statement: "$\\cos x$ is the horizontal coordinate; for a fixed nonzero cosine magnitude, there are two angles per full turn." },
              { kind: "principle", name: "Quadrant signs", statement: "Cosine is positive in Quadrants I and IV and negative in Quadrants II and III." },
            ],
            steps: [
              { reasoning: "Isolate the square of cosine and take both square-root values.", working: "2\\cos^2x-1=0\\implies\\cos^2x=\\frac{1}{2}\\implies\\cos x=\\pm\\frac{\\sqrt{2}}{2}", marks: 1, markCode: "M" },
              { reasoning: "Use the reference angle $\\pi/4$ and include the two angles for each cosine sign across the quadrants.", working: "x=\\frac{\\pi}{4},\\;\\frac{3\\pi}{4},\\;\\frac{5\\pi}{4},\\;\\frac{7\\pi}{4}", marks: 1, markCode: "A" },
              { reasoning: "Verify that all four angles lie in the half-open interval and no endpoint is duplicated.", working: "0\\le x<2\\pi", marks: 1, markCode: "R" },
              { reasoning: "Convert and round each angle to the nearest thousandth of a radian.", working: "x\\approx0.785,\\;2.356,\\;3.927,\\;5.498", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x\\approx0.785, 2.356, 3.927, 5.498$ radians",
            commonErrors: ["Taking only the positive square root and missing Quadrants II and III.", "Including $2\\pi$, which is excluded from the interval."],
            examinerNote: "Exact values $\\pi/4$, $3\\pi/4$, $5\\pi/4$, and $7\\pi/4$ are equally correct; the prompt requests decimal values to the nearest thousandth.",
          },
        },
        {
          id: "pc-u2-equation-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "The depth of water, in meters, in a harbor $t$ hours after midnight is modeled by $h(t)=2.5+1.5\\sin\\left(\\frac{\\pi t}{6}\\right)$ for $0\\le t<12$.",
          parts: [
            { label: "a", prompt: "State the maximum and minimum depth and the time of the first high tide. (2 marks)", marks: 2 },
            { label: "b", prompt: "Solve $h(t)=1.75$ for $0\\le t<12$. (3 marks)", marks: 3 },
            { label: "c", prompt: "Solve $h(t)=3.25$ for $0\\le t<12$. (2 marks)", marks: 2 },
            { label: "d", prompt: "A boat can enter the harbor only when the depth is at least $3.25$ m. For how many hours in this interval is it safe, and why? (2 marks)", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Range of sine", statement: "$-1\\le\\sin u\\le1$, so $a+b\\sin u$ ranges over $[a-|b|,a+|b|]$." },
              { kind: "definition", name: "Unit-circle values", statement: "$\\sin u=\\frac12$ at $u=\\frac{\\pi}{6},\\frac{5\\pi}{6}$ and $\\sin u=-\\frac12$ at $u=\\frac{7\\pi}{6},\\frac{11\\pi}{6}$ in $[0,2\\pi)$." },
              { kind: "principle", name: "Substitution for the argument", statement: "Let $u=\\pi t/6$; $0\\le t<12$ corresponds to $0\\le u<2\\pi$." },
            ],
            steps: [
              { part: "a", reasoning: "Midline 2.5 and amplitude 1.5 give the extreme depths.", working: "h_{\\max}=2.5+1.5=4,\\quad h_{\\min}=2.5-1.5=1", marks: 1, markCode: "A" },
              { part: "a", reasoning: "The maximum needs $\\sin u=1$, i.e. $u=\\pi/2$, so $t=3$.", working: "\\frac{\\pi t}{6}=\\frac{\\pi}{2}\\implies t=3", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Isolate the sine term.", working: "1.5\\sin u=-0.75\\implies\\sin u=-\\tfrac12", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Sine is negative in Quadrants III and IV with reference angle $\\pi/6$.", working: "u=\\frac{7\\pi}{6},\\;\\frac{11\\pi}{6}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Convert back with $t=6u/\\pi$.", working: "t=7,\\;11", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Isolate the sine term.", working: "1.5\\sin u=0.75\\implies\\sin u=\\tfrac12", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Quadrants I and II give $u=\\pi/6,\\,5\\pi/6$, so $t=1,\\,5$.", working: "t=1,\\;5", marks: 1, markCode: "A" },
              { part: "d", reasoning: "$h\\ge3.25$ means $\\sin u\\ge\\tfrac12$, which holds for $\\pi/6\\le u\\le5\\pi/6$ on this interval, i.e. $1\\le t\\le5$.", working: "1\\le t\\le5", marks: 1, markCode: "R" },
              { part: "d", reasoning: "The length of the interval gives the time available.", working: "5-1=4\\text{ hours}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Maximum 4 m, minimum 1 m, first high tide at $t=3$ (3 a.m.). (b) $t=7,11$. (c) $t=1,5$. (d) 4 hours (from 1 a.m. to 5 a.m.).",
            commonErrors: ["Solving $\\sin(\\pi t/6)=\\pm\\frac12$ for $u$ but not converting back to $t$.", "Listing only the Quadrant I angle.", "Forgetting to subtract $2.5$ before dividing by $1.5$."],
          },
        },
      ],
    },
  ],
};
