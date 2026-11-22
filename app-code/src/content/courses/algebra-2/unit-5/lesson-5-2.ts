import type { Lesson } from "../../../types.ts";

export const lesson52: Lesson = {
  id: "alg2-u5-lesson-5-2",
  code: "5-2",
  title: "Radical Expressions and Equations",
  goal: "I CAN simplify radical expressions, use rational exponents, and solve radical equations while checking for extraneous solutions.",
  standards: ["HSA-REI.A.2", "HSN-RN.A.2"],
  vocabulary: [
    { term: "Radical", definition: "An expression involving a root, such as $\\sqrt[n]{a}$." },
    { term: "Radicand", definition: "The expression inside a radical sign." },
    { term: "Rational exponent", definition: "An exponent representing a root and a power, such as $a^{m/n}=\\sqrt[n]{a^m}$ for appropriate real values." },
    { term: "Conjugate", definition: "A binomial formed by changing the sign between two terms, such as $a+\\sqrt b$ and $a-\\sqrt b$." },
    { term: "Extraneous solution", definition: "A value produced by an equation-solving step that does not satisfy the original equation." },
    { term: "Principal square root", definition: "The nonnegative square root of a nonnegative real number." },
  ],
  concepts: [
    {
      id: "alg2-u5-radical-simplification-rational-exponents",
      title: "Simplifying radicals and rationalizing denominators",
      skill: "Simplify radicals by extracting perfect powers, rewrite with rational exponents, and remove radicals from denominators.",
      lesson: {
        sections: [
          {
            heading: "Extract perfect powers",
            body: "To simplify a radical, factor its radicand to separate the largest perfect power. For example, $\\sqrt{72}=\\sqrt{36\\cdot2}=6\\sqrt2$. For an even root, variables taken outside the radical are absolute values unless their signs are restricted: $\\sqrt{x^2}=|x|$. For odd roots, the root preserves the sign of real inputs.",
          },
          {
            heading: "Rational exponents",
            body: "A denominator in a rational exponent indicates a root: $a^{1/n}=\\sqrt[n]{a}$. The numerator indicates a power, so $a^{m/n}=\\left(\\sqrt[n]{a}\\right)^m$ when the expression is defined in the real numbers. For instance, $16^{3/4}=(\\sqrt[4]{16})^3=2^3=8$. Keep the order of operations clear and respect real-domain restrictions for even roots.",
          },
          {
            heading: "Rationalize a denominator",
            body: "A rationalized denominator contains no radical. For a single square-root denominator, multiply numerator and denominator by that root: $\\frac{a}{\\sqrt b}=\\frac{a\\sqrt b}{b}$. For a binomial denominator involving a square root, multiply by its conjugate; the denominator becomes a difference of squares. This changes the form, not the value, because the multiplier is a form of 1.",
          },
        ],
        keyFormulas: [
          { name: "Product property of radicals", statement: "$\\sqrt{ab}=\\sqrt a\\sqrt b$ for $a,b\\ge0$." },
          { name: "Rational exponents", statement: "$a^{m/n}=\\left(\\sqrt[n]{a}\\right)^m$ when defined over the real numbers." },
          { name: "Rationalizing a square-root denominator", statement: "$\\frac{a}{\\sqrt b}=\\frac{a\\sqrt b}{b}$ for $b>0$." },
        ],
        workedExample: {
          problem: "Simplify $\\frac{6}{\\sqrt5}$ and $\\sqrt{108}$.",
          solution: "For the fraction, multiply by $\\frac{\\sqrt5}{\\sqrt5}$: $\\frac{6}{\\sqrt5}=\\frac{6\\sqrt5}{5}$. For the radical, extract the largest perfect-square factor: $\\sqrt{108}=\\sqrt{36\\cdot3}=6\\sqrt3$.",
        },
      },
      questions: [
        {
          id: "alg2-u5-radicals-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which expression is the simplest form of $\\sqrt{72}$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$8\\sqrt9$" },
              { id: "b", text: "$3\\sqrt8$" },
              { id: "c", text: "$36\\sqrt2$" },
              { id: "d", text: "$6\\sqrt2$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Product property of radicals", statement: "$\\sqrt{ab}=\\sqrt a\\sqrt b$ when $a,b\\ge0$." },
              { kind: "definition", name: "Simplest radical form", statement: "A simplified square root has no perfect-square factor greater than 1 remaining inside the radical." },
            ],
            steps: [
              { reasoning: "Separate the largest perfect-square factor of 72 from the remaining factor.", working: "\\sqrt{72}=\\sqrt{36\\cdot2}=6\\sqrt2", marks: 1, markCode: "M" },
              { reasoning: "Since 2 has no perfect-square factor greater than 1, the radical is fully simplified.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** $6\\sqrt2$",
            commonErrors: ["Stopping at $3\\sqrt8$, which still has a square factor inside the radical.", "Multiplying the radicand by 6 rather than taking $\\sqrt{36}=6$."],
          },
        },
        {
          id: "alg2-u5-radicals-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write $\\frac{5}{\\sqrt3}$ in equivalent form with a rational denominator. What is the coefficient of $\\sqrt3$ in the numerator?",
          response: { type: "numeric", parts: [{ label: "Coefficient of $\\sqrt3$", answer: 5 }] },
          markscheme: {
            principles: [
              { kind: "property", name: "Equivalent fractions", statement: "Multiplying numerator and denominator by the same nonzero quantity preserves a fraction's value." },
              { kind: "law", name: "Square-root product", statement: "$\\sqrt b\\cdot\\sqrt b=b$ for $b\\ge0$." },
            ],
            steps: [
              { reasoning: "Multiply the fraction by $\\frac{\\sqrt3}{\\sqrt3}$, which equals 1.", working: "\\frac{5}{\\sqrt3}\\cdot\\frac{\\sqrt3}{\\sqrt3}=\\frac{5\\sqrt3}{3}", marks: 1, markCode: "M" },
              { reasoning: "The denominator is now rational, and the numerator is $5\\sqrt3$.", working: "\\text{Numerator}=5\\sqrt3", marks: 1, markCode: "A" },
              { reasoning: "The requested numerical coefficient of the numerator is 5.", working: "5\\sqrt3\\;\\Rightarrow\\;5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac{5\\sqrt3}{3}$; numerator coefficient $5$.",
            commonErrors: ["Multiplying only the denominator by $\\sqrt3$.", "Reporting $5\\sqrt3$ as the rationalized denominator."],
          },
        },
        {
          id: "alg2-u5-radicals-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Rationalize and simplify $\\frac{7}{\\sqrt5+\\sqrt2}$. Which expression is equivalent?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{7(\\sqrt5+\\sqrt2)}{3}$" },
              { id: "b", text: "$\\frac{7}{3\\sqrt{10}}$" },
              { id: "c", text: "$7(\\sqrt5-\\sqrt2)$" },
              { id: "d", text: "$\\frac{7(\\sqrt5-\\sqrt2)}{3}$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Conjugates", statement: "$(a+b)(a-b)=a^2-b^2$." },
              { kind: "property", name: "Equivalent fractions", statement: "Multiplying numerator and denominator by the same nonzero expression preserves the quotient." },
            ],
            steps: [
              { reasoning: "Multiply top and bottom by the conjugate of the denominator to remove its radical terms.", working: "\\frac{7}{\\sqrt5+\\sqrt2}\\cdot\\frac{\\sqrt5-\\sqrt2}{\\sqrt5-\\sqrt2}", marks: 1, markCode: "M" },
              { reasoning: "Use the difference-of-squares pattern in the denominator.", working: "(\\sqrt5+\\sqrt2)(\\sqrt5-\\sqrt2)=5-2=3", marks: 1, markCode: "A" },
              { reasoning: "The numerator is 7 times the conjugate, and the rational denominator is 3.", working: "\\frac{7(\\sqrt5-\\sqrt2)}{3}", marks: 1, markCode: "A" },
              { reasoning: "The selected expression is equivalent and has a rational denominator.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** $\\frac{7(\\sqrt5-\\sqrt2)}{3}$",
            commonErrors: ["Using the original denominator instead of its conjugate.", "Computing $5-2$ as $\\sqrt{10}$."],
          },
        },
        {
          id: "alg2-u5-radicals-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Simplify each expression. Give exact forms; do not use decimal approximations.",
          parts: [
            { label: "a", prompt: "Simplify $\\sqrt{180}$.", marks: 2 },
            { label: "b", prompt: "Rationalize the denominator of $\\frac{4}{\\sqrt5}$.", marks: 2 },
            { label: "c", prompt: "Evaluate $81^{3/4}$ by rewriting the rational exponent as a root and a power. Show why your result is an integer.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "law", name: "Product property of radicals", statement: "$\\sqrt{ab}=\\sqrt a\\sqrt b$ for nonnegative $a,b$." },
              { kind: "property", name: "Rational exponent", statement: "$a^{m/n}=(\\sqrt[n]{a})^m$ when the real root is defined." },
              { kind: "property", name: "Equivalent fractions", statement: "Multiplying numerator and denominator by the same nonzero radical preserves value." },
            ],
            steps: [
              { part: "a", reasoning: "Factor out the greatest perfect square from 180.", working: "\\sqrt{180}=\\sqrt{36\\cdot5}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Take the square root of 36 and leave the square-free factor under the radical.", working: "6\\sqrt5", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Multiply numerator and denominator by $\\sqrt5$ so the denominator becomes rational.", working: "\\frac{4}{\\sqrt5}\\cdot\\frac{\\sqrt5}{\\sqrt5}=\\frac{4\\sqrt5}{5}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the equivalent expression with no radical in the denominator.", working: "\\frac{4\\sqrt5}{5}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "The denominator of the exponent indicates a fourth root, and the numerator indicates a cube.", working: "81^{3/4}=(\\sqrt[4]{81})^3", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Since $81=3^4$, its principal fourth root is 3.", working: "(\\sqrt[4]{81})^3=3^3", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Evaluate the remaining integer power.", working: "3^3=27", marks: 1, markCode: "A" },
              { part: "c", reasoning: "The expression equals the exact integer 27, so no approximation is needed.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $6\\sqrt5$. (b) $\\frac{4\\sqrt5}{5}$. (c) $81^{3/4}=27$.",
            commonErrors: ["Leaving $\\sqrt{180}$ as $3\\sqrt{20}$ without fully simplifying.", "Multiplying the denominator by $\\sqrt5$ without multiplying the numerator.", "Reading $3/4$ as $3\\div4$ rather than a rational exponent."],
          },
        },
      ],
    },
    {
      id: "alg2-u5-solving-radical-equations",
      title: "Solving radical equations and checking solutions",
      skill: "Solve radical equations by isolating and eliminating radicals, then check every candidate in the original equation.",
      lesson: {
        sections: [
          {
            heading: "Isolate before raising powers",
            body: "First isolate a radical expression. Then raise both sides to the power needed to remove the radical. Squaring is reversible only when signs and domain conditions are controlled; otherwise, it can produce candidates that were not solutions. Keep a record of the original equation so every candidate can be checked against it.",
          },
          {
            heading: "Track domain and sign conditions",
            body: "For $\\sqrt{f(x)}=g(x)$, the radicand must satisfy $f(x)\\ge0$, and the right side must satisfy $g(x)\\ge0$ because a principal square root is nonnegative. These conditions help identify impossible candidates before or after solving the squared equation.",
          },
          {
            heading: "Check in the original equation",
            body: "After squaring and solving, substitute each candidate into the equation as originally written. A value that makes both sides unequal is extraneous and must be rejected. Never accept a candidate based only on the squared equation, because squaring can erase sign information.",
          },
        ],
        keyFormulas: [
          { name: "Principal square root", statement: "$\\sqrt{u}\\ge0$ for $u\\ge0$." },
          { name: "Square both sides", statement: "If $A=B$, then $A^2=B^2$; the reverse implication may introduce extraneous solutions." },
        ],
        workedExample: {
          problem: "Solve $\\sqrt{x+1}=x-1$.",
          solution: "The right side must be nonnegative, so $x\\ge1$. Square both sides: $x+1=(x-1)^2=x^2-2x+1$, giving $x^2-3x=0$, or $x=0$ or $x=3$. Check both in the original equation: $x=0$ gives $1=-1$, false; $x=3$ gives $2=2$, true. The solution is $x=3$; $x=0$ is extraneous.",
        },
      },
      questions: [
        {
          id: "alg2-u5-radical-equations-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Solve $\\sqrt{x+5}=4$.",
          response: { type: "numeric", parts: [{ label: "$x$", answer: 11 }] },
          markscheme: {
            principles: [
              { kind: "law", name: "Square-root property", statement: "If $\\sqrt{u}=a$ with $a\\ge0$, then $u=a^2$." },
              { kind: "principle", name: "Original-equation check", statement: "A proposed solution must satisfy the equation before any transformations." },
            ],
            steps: [
              { reasoning: "Square both sides; the right side is nonnegative, consistent with the principal square root.", working: "x+5=16", marks: 1, markCode: "M" },
              { reasoning: "Solve and check that the candidate gives $\\sqrt{16}=4$ in the original equation.", working: "x=11", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=11$",
            commonErrors: ["Squaring 4 incorrectly as 8.", "Forgetting to subtract 5 after squaring."],
          },
        },
        {
          id: "alg2-u5-radical-equations-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Solve $\\sqrt{2x+3}=x$. Which statement gives the solution and any extraneous candidate?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "There are no real solutions" },
              { id: "b", text: "$x=-1$ and $x=3$ are both solutions" },
              { id: "c", text: "$x=3$; $x=-1$ is extraneous" },
              { id: "d", text: "$x=-1$ only" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Principal square root", statement: "A principal square root is nonnegative, so the equation requires $x\\ge0$." },
              { kind: "law", name: "Squaring both sides", statement: "Squaring preserves equality but may introduce candidates that fail the original equation." },
            ],
            steps: [
              { reasoning: "Square both sides and rearrange to a quadratic equation.", working: "2x+3=x^2 \\implies x^2-2x-3=0", marks: 1, markCode: "M" },
              { reasoning: "Factor to find both candidates, then apply the nonnegative-right-side condition.", working: "(x-3)(x+1)=0 \\implies x=3\\text{ or }x=-1;\\quad x\\ge0", marks: 1, markCode: "A" },
              { reasoning: "Check in the original: 3 gives $\\sqrt9=3$, whereas $-1$ gives $\\sqrt1=1\\ne-1$.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "**(c)** $x=3$ is the solution; $x=-1$ is extraneous.",
            commonErrors: ["Accepting $x=-1$ because it solves the squared equation.", "Ignoring that the right side must be nonnegative."],
          },
        },
        {
          id: "alg2-u5-radical-equations-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Solve $\\sqrt{x+1}=x-1$. Enter the solution and the extraneous candidate in either order.",
          response: {
            type: "numeric",
            parts: [
              { label: "Valid solution", answer: 3 },
              { label: "Extraneous candidate", answer: 0 },
            ],
            unordered: true,
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Principal square root", statement: "The left side is nonnegative, so an equation $\\sqrt{f(x)}=g(x)$ requires $g(x)\\ge0$." },
              { kind: "law", name: "Squaring both sides", statement: "Squaring an equation may produce candidates that must be checked in the original equation." },
              { kind: "principle", name: "Extraneous solution", statement: "A candidate is extraneous if it fails the original equation." },
            ],
            steps: [
              { reasoning: "Use the sign of the principal root to obtain a necessary condition.", working: "x-1\\ge0 \\implies x\\ge1", marks: 1, markCode: "R" },
              { reasoning: "Square both sides and rearrange to a quadratic.", working: "x+1=(x-1)^2 \\implies x^2-3x=0", marks: 1, markCode: "M" },
              { reasoning: "Factor and find both algebraic candidates.", working: "x(x-3)=0 \\implies x=0\\text{ or }x=3", marks: 1, markCode: "A" },
              { reasoning: "The condition $x\\ge1$ rules out 0; checking 3 gives $\\sqrt4=2=3-1$.", working: "x=0\\text{ extraneous};\\quad x=3\\text{ valid}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=3$ is the solution; $x=0$ is extraneous.",
            commonErrors: ["Reporting both roots of the squared equation as solutions.", "Failing to use the condition $x-1\\ge0$."],
          },
        },
        {
          id: "alg2-u5-radical-equations-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A student solves the equation $\\sqrt{3x+4}=x$.",
          parts: [
            { label: "a", prompt: "State the necessary restrictions on $x$ from the radicand and the principal square root.", marks: 2 },
            { label: "b", prompt: "Square both sides and solve the resulting quadratic equation for all candidates.", marks: 3 },
            { label: "c", prompt: "Check each candidate in the original equation, identify any extraneous solution, and state the solution set.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Real square-root domain", statement: "The radicand of a real square root must be nonnegative." },
              { kind: "property", name: "Principal square root", statement: "A principal square root is nonnegative." },
              { kind: "law", name: "Squaring both sides", statement: "Squaring can introduce extraneous candidates, so candidates must be checked in the original equation." },
            ],
            steps: [
              { part: "a", reasoning: "Require the radicand to be nonnegative.", working: "3x+4\\ge0 \\implies x\\ge-\\frac43", marks: 1, markCode: "M" },
              { part: "a", reasoning: "The right side must also be nonnegative because it equals a principal square root.", working: "x\\ge0", marks: 1, markCode: "R" },
              { part: "b", reasoning: "Square both sides, then collect terms on one side.", working: "3x+4=x^2 \\implies x^2-3x-4=0", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Factor the quadratic.", working: "(x-4)(x+1)=0", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Solve both linear factors to list all candidates.", working: "x=4\\text{ or }x=-1", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Check $x=4$ in the original equation.", working: "\\sqrt{3(4)+4}=\\sqrt{16}=4", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Check $x=-1$ in the original equation; the two sides are unequal.", working: "\\sqrt{3(-1)+4}=1\\ne-1", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Reject $-1$ as extraneous and state the only valid solution.", working: "\\{4\\}", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $x\\ge0$. (b) Candidates: $x=4,-1$. (c) $x=-1$ is extraneous; the solution set is $\\{4\\}$.",
            commonErrors: ["Using only the radicand condition and overlooking that the right side must be nonnegative.", "Keeping $x=-1$ after squaring without checking the original equation."],
          },
        },
      ],
    },
  ],
};
