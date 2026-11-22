import type { Lesson } from "../../../types.ts";

export const lesson53: Lesson = {
  id: "alg2-u5-lesson-5-3",
  code: "5-3",
  title: "Rational Expressions and Equations",
  goal: "I CAN simplify and operate on rational expressions with restrictions, then solve rational equations and interpret their solutions.",
  standards: ["HSA-APR.D.6", "HSA-APR.D.7", "HSA-REI.A.2", "HSA-CED.A.1"],
  vocabulary: [
    { term: "Rational expression", definition: "A quotient of two polynomials with a nonzero denominator." },
    { term: "Restriction", definition: "A value excluded from a rational expression's domain because it makes an original denominator zero." },
    { term: "Least common denominator", definition: "The least common multiple of denominators used to rewrite fractions with a shared denominator." },
    { term: "Extraneous solution", definition: "A candidate obtained during solving that does not satisfy the original equation or its domain restrictions." },
    { term: "Rate", definition: "A ratio comparing quantities with different units, such as distance per unit of time." },
    { term: "Work rate", definition: "The fraction of a job completed per unit of time; for a constant rate, work equals rate times time." },
  ],
  concepts: [
    {
      id: "alg2-u5-rational-expression-operations",
      title: "Simplifying and operating on rational expressions",
      skill: "Factor rational expressions, state excluded values, and multiply, divide, or add them using valid fraction operations.",
      lesson: {
        sections: [
          {
            heading: "Restrictions come first",
            body: "A rational expression is defined only when its original denominator is nonzero. Factor numerator and denominator, record the values that make the original denominator zero, then cancel common factors. Cancellation creates an equivalent expression only on the original domain; it does not restore excluded values. For example, $\\frac{x^2-9}{x-3}=x+3$ only when $x\\ne3$.",
          },
          {
            heading: "Multiply and divide",
            body: "To multiply rational expressions, factor each numerator and denominator, cancel common nonzero factors, and multiply what remains. To divide, multiply by the reciprocal of the divisor and note that the divisor itself cannot equal zero. Keep every restriction from the original expressions, including any restriction needed to keep the divisor nonzero.",
          },
          {
            heading: "Add and subtract with a common denominator",
            body: "To add or subtract rational expressions, find a least common denominator (LCD), rewrite each numerator over that denominator, combine the numerators, then simplify. Do not add denominators. Any excluded values must still be taken from the original denominators even if factors cancel after simplifying.",
          },
        ],
        keyFormulas: [
          { name: "Multiply rational expressions", statement: "$\\frac{A}{B}\\cdot\\frac{C}{D}=\\frac{AC}{BD}$, where $B,D\\ne0$." },
          { name: "Divide rational expressions", statement: "$\\frac{A}{B}\\div\\frac{C}{D}=\\frac{A}{B}\\cdot\\frac{D}{C}$, where $B,D,C\\ne0$." },
          { name: "Add with a common denominator", statement: "$\\frac{A}{B}+\\frac{C}{D}=\\frac{AD+BC}{BD}$, where $B,D\\ne0$." },
        ],
        workedExample: {
          problem: "Simplify $\\frac{x^2-9}{x^2-x-6}$ and state the restriction.",
          solution: "Factor both polynomials: $\\frac{(x-3)(x+3)}{(x-3)(x+2)}$. The original denominator is zero at $x=3$ and $x=-2$, so both values are excluded. Cancel the common factor only while retaining those restrictions: $\\frac{x+3}{x+2}$, with $x\\ne3,-2$.",
        },
      },
      questions: [
        {
          id: "alg2-u5-rational-ops-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Simplify $\\frac{x^2-16}{x-4}$ and state the restriction from the original expression.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Difference of squares", statement: "$a^2-b^2=(a-b)(a+b)$." },
              { kind: "property", name: "Denominator restriction", statement: "A rational expression is undefined where its original denominator equals zero; cancellation does not remove this restriction." },
            ],
            steps: [
              { reasoning: "Factor the numerator to expose a common factor.", working: "\\frac{x^2-16}{x-4}=\\frac{(x-4)(x+4)}{x-4}", marks: 1, markCode: "M" },
              { reasoning: "Cancel the common factor while recording the original denominator restriction.", working: "x+4,\\quad x\\ne4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x+4$, with restriction $x\\ne4$.",
            commonErrors: ["Claiming there are no restrictions after canceling $x-4$.", "Factoring $x^2-16$ as $(x-4)^2$."],
          },
        },
        {
          id: "alg2-u5-rational-ops-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "For $\\frac{2}{x}+\\frac{3}{x+1}$, find the coefficient of $x$ in the simplified numerator and state the excluded values from the original expression.",
          response: {
            type: "numeric",
            parts: [
              { label: "Coefficient of $x$ in the numerator", answer: 5 },
              { label: "Excluded value 1", answer: -1 },
              { label: "Excluded value 2", answer: 0 },
            ],
            unordered: true,
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Addition of rational expressions", statement: "$\\frac{A}{B}+\\frac{C}{D}=\\frac{AD+BC}{BD}$ when $B,D\\ne0$." },
              { kind: "property", name: "Denominator restriction", statement: "Each original denominator must be nonzero." },
            ],
            steps: [
              { reasoning: "Use the product of the distinct denominators as a common denominator.", working: "\\frac{2}{x}+\\frac{3}{x+1}=\\frac{2(x+1)+3x}{x(x+1)}", marks: 1, markCode: "M" },
              { reasoning: "Combine like terms in the numerator; no factor cancels with the denominator.", working: "\\frac{5x+2}{x(x+1)}", marks: 1, markCode: "A" },
              { reasoning: "Exclude values that make either original denominator zero.", working: "x\\ne0,\\;-1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac{5x+2}{x(x+1)}$, with $x\\ne0,-1$.",
            commonErrors: ["Adding the denominators to get $x+(x+1)$. ", "Forgetting one of the original denominator restrictions."],
          },
        },
        {
          id: "alg2-u5-rational-ops-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Simplify $\\frac{x^2-9}{x^2+5x+6}\\div\\frac{x-3}{x+2}$. State every value excluded from the original expression.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "law", name: "Division by a fraction", statement: "$\\frac{A}{B}\\div\\frac{C}{D}=\\frac{A}{B}\\cdot\\frac{D}{C}$, provided all original denominators and the divisor are nonzero." },
              { kind: "formula", name: "Difference of squares", statement: "$x^2-9=(x-3)(x+3)$." },
              { kind: "property", name: "Restrictions persist", statement: "Values excluded by original denominators or a zero divisor remain excluded after simplification." },
            ],
            steps: [
              { reasoning: "Factor the polynomials and rewrite division as multiplication by the reciprocal.", working: "\\frac{(x-3)(x+3)}{(x+2)(x+3)}\\cdot\\frac{x+2}{x-3}", marks: 1, markCode: "M" },
              { reasoning: "Cancel common factors to simplify the quotient on its original domain.", working: "1", marks: 1, markCode: "A" },
              { reasoning: "The first denominator excludes $x=-2,-3$; the divisor is zero at $x=3$, which must also be excluded.", working: "x\\ne-2,-3,3", marks: 1, markCode: "R" },
              { reasoning: "List all excluded values without losing restrictions when factors cancel.", working: "\\{-3,-2,3\\}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$1$, with restrictions $x\\ne-3,-2,3$.",
            commonErrors: ["Canceling factors before stating all restrictions.", "Failing to exclude $x=3$, which makes the divisor zero."],
          },
        },
        {
          id: "alg2-u5-rational-ops-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Work with the rational expressions $A(x)=\\frac{x+1}{x-2}$ and $B(x)=\\frac{2}{x+2}$.",
          parts: [
            { label: "a", prompt: "State the values excluded from the domain of $A$ and $B$ together.", marks: 2 },
            { label: "b", prompt: "Find and simplify $A(x)B(x)$.", marks: 3 },
            { label: "c", prompt: "Find and simplify $A(x)+B(x)$, retaining all original restrictions.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Nonzero denominators", statement: "Every original denominator in a rational expression must be nonzero." },
              { kind: "law", name: "Product of fractions", statement: "$\\frac{a}{b}\\cdot\\frac{c}{d}=\\frac{ac}{bd}$ for nonzero denominators." },
              { kind: "law", name: "Common denominator", statement: "To add fractions, rewrite each using the same denominator and add the numerators." },
            ],
            steps: [
              { part: "a", reasoning: "Set each original denominator unequal to zero.", working: "x-2\\ne0,\\quad x+2\\ne0", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State both excluded values.", working: "x\\ne2,-2", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Multiply numerators and denominators.", working: "A(x)B(x)=\\frac{2(x+1)}{(x-2)(x+2)}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "No factor cancels, so this is already simplified.", working: "\\frac{2(x+1)}{x^2-4}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Keep the restrictions from both original expressions.", working: "x\\ne2,-2", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Use $(x-2)(x+2)$ as a common denominator.", working: "A(x)+B(x)=\\frac{(x+1)(x+2)+2(x-2)}{(x-2)(x+2)}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Expand and combine the numerator correctly.", working: "\\frac{x^2+3x+2+2x-4}{(x-2)(x+2)}=\\frac{x^2+5x-2}{(x-2)(x+2)}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Retain the original excluded values, since the original denominators vanish there.", working: "x\\ne2,-2", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $x\\ne2,-2$. (b) $\\frac{2(x+1)}{(x-2)(x+2)}$. (c) $\\frac{x^2+5x-2}{(x-2)(x+2)}$, with $x\\ne2,-2$.",
            commonErrors: ["Cancelling across addition in part (c).", "Adding denominators instead of using a common denominator.", "Dropping restrictions when the simplified form looks defined."],
          },
        },
      ],
    },
    {
      id: "alg2-u5-rational-equations-work-rate",
      title: "Solving rational equations and work-rate problems",
      skill: "Solve rational equations using a least common denominator, reject invalid candidates, and model work or rate situations.",
      lesson: {
        sections: [
          {
            heading: "Clear denominators carefully",
            body: "Before solving, list values that make any denominator zero. Multiply every term by the least common denominator (LCD) to clear the fractions, then solve the resulting equation. Clearing denominators is valid only on the original domain, so every candidate must be checked against both the restrictions and the original equation.",
          },
          {
            heading: "Extraneous solutions",
            body: "A candidate can solve the equation after multiplication but be invalid in the original equation because it makes a denominator zero. Substitute each candidate into the original equation; reject any undefined value or any value that makes the two sides unequal. State the solution set only after this check.",
          },
          {
            heading: "Work and rate models",
            body: "For a constant rate, $\\text{work}=\\text{rate}\\times\\text{time}$. If one person completes a job in $a$ hours, their rate is $1/a$ job per hour. Working together, rates add: $1/a+1/b$. For distance-rate-time problems, use $d=rt$ and ensure the units match. Define a variable and include meaningful constraints such as positive time.",
          },
        ],
        keyFormulas: [
          { name: "LCD method", statement: "Multiply each side of a rational equation by the least common denominator, while retaining all original denominator restrictions." },
          { name: "Work rate", statement: "$\\text{work}=\\text{rate}\\times\\text{time}$; combined rates add." },
          { name: "Distance-rate-time", statement: "$d=rt$." },
        ],
        workedExample: {
          problem: "Solve $\\frac{1}{x-1}=\\frac{2}{x+1}$ and check the result.",
          solution: "Restrictions: $x\\ne1,-1$. Multiply by $(x-1)(x+1)$: $x+1=2(x-1)$, so $x=3$. Since 3 is allowed, check in the original: $1/(3-1)=1/2$ and $2/(3+1)=1/2$. Thus $x=3$ is the solution.",
        },
      },
      questions: [
        {
          id: "alg2-u5-rational-equations-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Solve $\\frac{6}{x}=3$. State the solution.",
          response: { type: "numeric", parts: [{ label: "$x$", answer: 2 }] },
          markscheme: {
            principles: [
              { kind: "property", name: "Denominator restriction", statement: "The denominator $x$ must be nonzero." },
              { kind: "law", name: "Equivalent equations", statement: "Multiplying both sides of an equation by the same nonzero quantity preserves equality." },
            ],
            steps: [
              { reasoning: "Record that $x$ cannot be zero, then multiply both sides by $x$.", working: "x\\ne0;\\quad 6=3x", marks: 1, markCode: "M" },
              { reasoning: "Solve the linear equation; the candidate is allowed by the restriction.", working: "x=2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=2$",
            commonErrors: ["Multiplying by $x$ but forgetting that $x=0$ was excluded.", "Dividing 6 by 2 instead of by 3."],
          },
        },
        {
          id: "alg2-u5-rational-equations-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Solve $\\frac{1}{x-2}=\\frac{3}{x+2}$. Which answer is correct?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x=-4$" },
              { id: "b", text: "$x=2$" },
              { id: "c", text: "No solution" },
              { id: "d", text: "$x=4$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Restrictions", statement: "The variable may not make any original denominator zero." },
              { kind: "law", name: "Clearing denominators", statement: "Multiplying both sides by the LCD preserves equality for values in the original domain." },
            ],
            steps: [
              { reasoning: "Exclude $x=2$ and $x=-2$, then multiply by $(x-2)(x+2)$.", working: "x+2=3(x-2)", marks: 1, markCode: "M" },
              { reasoning: "Solve the resulting linear equation.", working: "x+2=3x-6 \\implies 8=2x \\implies x=4", marks: 1, markCode: "A" },
              { reasoning: "Check the arithmetic against the equation: at $x=4$, the sides are $1/2$ and $1/2$. Therefore $x=4$ is valid.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "**(d)** $x=4$",
            commonErrors: ["Reversing the cross-products and reporting $x=-4$.", "Accepting an excluded value without checking the original denominators."],
          },
        },
        {
          id: "alg2-u5-rational-equations-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Two machines working together can complete a job in 4 hours. Machine A alone completes the job in 6 hours. How many hours would Machine B take working alone? Enter the time in hours.",
          response: { type: "numeric", parts: [{ label: "Machine B's time", answer: 12, unit: "hours" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Work-rate equation", statement: "$\\text{work}=\\text{rate}\\times\\text{time}$; for a one-job task, a worker finishing in $t$ hours has rate $1/t$ job per hour." },
              { kind: "property", name: "Combined rates", statement: "Independent work rates add when workers operate simultaneously." },
            ],
            steps: [
              { reasoning: "Represent each machine's rate in jobs per hour and set their combined rate to one job in four hours.", working: "\\frac16+\\frac1t=\\frac14", marks: 1, markCode: "M" },
              { reasoning: "Subtract Machine A's rate from the combined rate.", working: "\\frac1t=\\frac14-\\frac16=\\frac{3-2}{12}=\\frac1{12}", marks: 1, markCode: "A" },
              { reasoning: "Take the reciprocal to obtain Machine B's time for one job.", working: "t=12", marks: 1, markCode: "A" },
              { reasoning: "Check: the rates $1/6+1/12=1/4$ job per hour, so the combined time is four hours.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Machine B takes $12$ hours working alone.",
            commonErrors: ["Adding completion times instead of adding rates.", "Subtracting the rates with unlike denominators incorrectly."],
          },
        },
        {
          id: "alg2-u5-rational-equations-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A student claims the equation $\\frac{x+1}{x-1}=\\frac{2}{x-1}$ has solution $x=1$ after multiplying both sides by $x-1$.",
          parts: [
            { label: "a", prompt: "State the restriction on $x$ in the original equation.", marks: 1 },
            { label: "b", prompt: "Multiply through by the least common denominator and solve the resulting equation for its candidate.", marks: 3 },
            { label: "c", prompt: "Check the candidate in the original equation and explain whether it is valid or extraneous.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Original denominator restriction", statement: "A variable value making any original denominator zero is outside the equation's domain." },
              { kind: "law", name: "Clearing denominators", statement: "Multiplication by the LCD is valid only for values in the original domain." },
              { kind: "definition", name: "Extraneous solution", statement: "A candidate is extraneous if it is not in the original domain or does not satisfy the original equation." },
            ],
            steps: [
              { part: "a", reasoning: "The denominator $x-1$ must not be zero.", working: "x\\ne1", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Multiply both sides by the LCD $x-1$ to obtain the candidate equation.", working: "x+1=2", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Solve the resulting linear equation.", working: "x=1", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Identify $x=1$ as a candidate from the transformed equation, not yet a solution.", working: "\\text{Candidate: }x=1", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Substitution into the original equation makes both denominators zero, so the original equation is undefined at the candidate.", working: "\\frac{1+1}{1-1}\\quad\\text{and}\\quad\\frac2{1-1}\\text{ are undefined}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Therefore the candidate is outside the original domain.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reject $x=1$ as extraneous; multiplying by the denominator erased the restriction that it was nonzero.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "There are no valid solutions to the original equation.", working: "\\varnothing", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $x\\ne1$. (b) Candidate: $x=1$. (c) Both sides are undefined at $x=1$, so it is extraneous and the original equation has no solution.",
            commonErrors: ["Accepting the candidate simply because it solves the cleared equation.", "Treating multiplication by $x-1$ as valid at $x=1$ even though it is zero there."],
          },
        },
      ],
    },
  ],
};
