import type { Lesson } from "../../../types.ts";

export const lesson51: Lesson = {
  id: "alg2-u5-lesson-5-1",
  code: "5-1",
  title: "Polynomial Identities and Higher-Degree Equations",
  goal: "I CAN use polynomial structure and identities to factor, expand, and solve polynomial equations.",
  standards: ["HSA-APR.B.3", "HSA-APR.C.4", "HSA-APR.C.5", "HSA-SSE.A.2"],
  vocabulary: [
    { term: "Polynomial identity", definition: "An equation involving polynomials that is true for every value of its variable." },
    { term: "Sum of cubes", definition: "A binomial of the form $a^3+b^3$, which factors as $(a+b)(a^2-ab+b^2)$." },
    { term: "Difference of cubes", definition: "A binomial of the form $a^3-b^3$, which factors as $(a-b)(a^2+ab+b^2)$." },
    { term: "Factoring by grouping", definition: "Factoring terms in pairs to reveal a common binomial factor." },
    { term: "Quadratic form", definition: "A polynomial expression that becomes quadratic after substituting a power such as $u=x^2$." },
    { term: "Binomial Theorem", definition: "A rule for expanding $(a+b)^n$ using binomial coefficients." },
    { term: "Pascal's triangle", definition: "A triangular arrangement whose rows give the coefficients in expansions of $(a+b)^n$." },
  ],
  concepts: [
    {
      id: "alg2-u5-cubes-grouping-quadratic-form",
      title: "Factoring and solving higher-degree equations",
      skill: "Recognize cube patterns, factor by grouping or quadratic form, and solve polynomial equations using the zero-product property.",
      lesson: {
        sections: [
          {
            heading: "Cube patterns and grouping",
            body: "The sum and difference of cubes factor as $a^3+b^3=(a+b)(a^2-ab+b^2)$ and $a^3-b^3=(a-b)(a^2+ab+b^2)$. The sign pattern matters: the first factor follows the sign between the cubes, while the middle term in the quadratic factor has the opposite sign. For four terms, group pairs and factor each pair; the goal is to expose the same binomial factor in both groups.",
          },
          {
            heading: "Quadratic form",
            body: "Some higher-degree polynomials are quadratic in a repeated power. For $x^4-5x^2+4$, set $u=x^2$ to obtain $u^2-5u+4$. Factor in $u$, then substitute back. Keep solving until every factor is a linear equation in the original variable, and verify that no roots were lost when substituting.",
          },
          {
            heading: "Solve by zero product",
            body: "After factoring an equation into a product, set each factor equal to zero. For example, $x^3-8=0$ becomes $(x-2)(x^2+2x+4)=0$. Over the real numbers, the quadratic factor has discriminant $2^2-4(1)(4)=-12<0$, so the only real solution is $x=2$. State whether the requested solutions are real or complex when that matters.",
          },
        ],
        keyFormulas: [
          { name: "Sum of cubes", statement: "$a^3+b^3=(a+b)(a^2-ab+b^2)$" },
          { name: "Difference of cubes", statement: "$a^3-b^3=(a-b)(a^2+ab+b^2)$" },
          { name: "Zero-product property", statement: "$AB=0$ if and only if $A=0$ or $B=0$." },
        ],
        workedExample: {
          problem: "Solve $x^4-5x^2+4=0$ over the real numbers.",
          solution: "Let $u=x^2$. Then $u^2-5u+4=(u-1)(u-4)=0$, so $u=1$ or $u=4$. Substitute back: $x^2=1$ gives $x=\\pm1$, and $x^2=4$ gives $x=\\pm2$. The real solutions are $x=-2,-1,1,2$.",
        },
      },
      questions: [
        {
          id: "alg2-u5-higher-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which is the correct factorization of $x^3+27$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$(x-3)(x^2+3x+9)$" },
              { id: "b", text: "$(x+3)(x^2+3x+9)$" },
              { id: "c", text: "$(x+9)(x^2-9x+3)$" },
              { id: "d", text: "$(x+3)(x^2-3x+9)$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Sum of cubes", statement: "$a^3+b^3=(a+b)(a^2-ab+b^2)$" },
            ],
            steps: [
              { reasoning: "Identify $x^3+27=x^3+3^3$ and substitute $a=x$, $b=3$ into the sum-of-cubes identity.", working: "(x+3)(x^2-3x+9)", marks: 1, markCode: "M" },
              { reasoning: "The factorization uses a plus sign in the linear factor and a negative middle term in the quadratic factor.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $(x+3)(x^2-3x+9)$",
            commonErrors: ["Using the difference-of-cubes pattern for a sum.", "Giving the quadratic factor a positive middle term."],
          },
        },
        {
          id: "alg2-u5-higher-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Factor $x^3-4x^2+x-4$ completely. Then state the real zero that comes from its linear factor.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "law", name: "Distributive property", statement: "$ab+ac=a(b+c)$" },
              { kind: "property", name: "Zero-product property", statement: "If a product is zero, at least one factor is zero." },
            ],
            steps: [
              { reasoning: "Group the first two and last two terms so each pair has a common factor.", working: "(x^3-4x^2)+(x-4)=x^2(x-4)+1(x-4)", marks: 1, markCode: "M" },
              { reasoning: "Factor out the common binomial to obtain the complete factorization.", working: "(x-4)(x^2+1)", marks: 1, markCode: "A" },
              { reasoning: "The real linear zero satisfies $x-4=0$; the factor $x^2+1$ has no real zeros.", working: "x=4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$(x-4)(x^2+1)$; the real zero from the linear factor is $x=4$.",
            commonErrors: ["Grouping terms but failing to factor the shared binomial.", "Treating $x^2+1=0$ as having real solutions."],
          },
        },
        {
          id: "alg2-u5-higher-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Solve $x^4-13x^2+36=0$ over the real numbers. Enter all solutions in any order.",
          response: {
            type: "numeric",
            parts: [
              { label: "Root 1", answer: -3 },
              { label: "Root 2", answer: -2 },
              { label: "Root 3", answer: 2 },
              { label: "Root 4", answer: 3 },
            ],
            unordered: true,
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Quadratic form", statement: "If $u=x^2$, then $x^4-13x^2+36=u^2-13u+36$." },
              { kind: "property", name: "Zero-product property", statement: "A product is zero only if at least one factor is zero." },
              { kind: "property", name: "Square-root property", statement: "For $x^2=c>0$, the real solutions are $x=\\pm\\sqrt{c}$." },
            ],
            steps: [
              { reasoning: "Substitute $u=x^2$ to see a quadratic expression in the repeated power.", working: "u^2-13u+36=0", marks: 1, markCode: "M" },
              { reasoning: "Factor the quadratic using factors of 36 that sum to $-13$.", working: "(u-4)(u-9)=0", marks: 1, markCode: "A" },
              { reasoning: "Use the zero-product property and replace $u$ by $x^2$.", working: "x^2=4 \\quad\\text{or}\\quad x^2=9", marks: 1, markCode: "M" },
              { reasoning: "Take both real square roots for each equation.", working: "x=\\pm2,\\;\\pm3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=-3,-2,2,3$",
            commonErrors: ["Reporting only positive square roots.", "Substituting $u=x$ instead of $u=x^2$."],
          },
        },
        {
          id: "alg2-u5-higher-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A polynomial is defined by $P(x)=x^3-3x^2-4x+12$.",
          parts: [
            { label: "a", prompt: "Factor $P(x)$ by grouping.", marks: 2 },
            { label: "b", prompt: "Solve $P(x)=0$ over the real numbers.", marks: 3 },
            { label: "c", prompt: "Explain how your factorization confirms that $P(2)=0$.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "law", name: "Factoring by grouping", statement: "Group terms to factor a common factor from each group, then factor out a shared binomial." },
              { kind: "property", name: "Zero-product property", statement: "If a product of factors equals zero, at least one factor equals zero." },
              { kind: "definition", name: "Root and factor", statement: "$r$ is a zero of $P$ exactly when $(x-r)$ is a factor of $P(x)$." },
            ],
            steps: [
              { part: "a", reasoning: "Group the first two terms and the last two terms to produce the same binomial factor.", working: "(x^3-3x^2)+(-4x+12)=x^2(x-3)-4(x-3)", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Factor out $(x-3)$ and recognize the remaining difference of squares.", working: "(x-3)(x^2-4)=(x-3)(x-2)(x+2)", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Set each linear factor equal to zero using the zero-product property.", working: "x-3=0,\\quad x-2=0,\\quad x+2=0", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Solve the three resulting linear equations.", working: "x=3,\\quad x=2,\\quad x=-2", marks: 1, markCode: "A" },
              { part: "b", reasoning: "State the complete real solution set.", working: "\\{-2,2,3\\}", marks: 1, markCode: "B" },
              { part: "c", reasoning: "The factorization contains $(x-2)$, which becomes zero when $x=2$.", working: "P(2)=(2-3)(2-2)(2+2)=0", marks: 1, markCode: "M" },
              { part: "c", reasoning: "A product with a zero factor equals zero, so substituting 2 into the original polynomial must give zero.", working: "P(2)=2^3-3(2^2)-4(2)+12=8-12-8+12=0", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Connect the factor and root statements: $(x-2)$ dividing $P(x)$ is equivalent to 2 being a zero of $P$.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $P(x)=(x-3)(x-2)(x+2)$. (b) $x=-2,2,3$. (c) The factor $(x-2)$ makes $P(2)=0$.",
            commonErrors: ["A sign error when factoring $x^2-4$.", "Omitting a root after applying the zero-product property."],
          },
        },
      ],
    },
    {
      id: "alg2-u5-polynomial-identities-binomial",
      title: "Polynomial identities and the Binomial Theorem",
      skill: "Use polynomial identities and Pascal's triangle to expand powers and justify equivalent polynomial expressions.",
      lesson: {
        sections: [
          {
            heading: "Identities preserve equality",
            body: "A polynomial identity is true for every value of its variables. The square identities $(a+b)^2=a^2+2ab+b^2$ and $(a-b)^2=a^2-2ab+b^2$ are useful for expanding and recognizing perfect-square trinomials. The product $(a+b)(a-b)=a^2-b^2$ is the difference-of-squares identity. You can verify an identity by expanding one side with the distributive property and collecting like terms.",
          },
          {
            heading: "Pascal's triangle and coefficients",
            body: "The coefficients in $(a+b)^n$ are the entries of row $n$ of Pascal's triangle, where row 0 is $1$ and each interior entry is the sum of the two entries above it. Thus row 4 is $1,4,6,4,1$. Each term also uses descending powers of $a$ and ascending powers of $b$, with exponents adding to $n$.",
          },
          {
            heading: "The Binomial Theorem",
            body: "For a nonnegative integer $n$, $(a+b)^n=\\sum_{k=0}^{n}\\binom{n}{k}a^{n-k}b^k$. To expand reliably, pair each coefficient with the appropriate powers; signs in a negative binomial are carried by the powers of the negative term. Check that there are $n+1$ terms and that the exponents in each term add to $n$.",
          },
        ],
        keyFormulas: [
          { name: "Square of a sum", statement: "$(a+b)^2=a^2+2ab+b^2$" },
          { name: "Difference of squares", statement: "$(a+b)(a-b)=a^2-b^2$" },
          { name: "Binomial Theorem", statement: "$(a+b)^n=\\sum_{k=0}^{n}\\binom{n}{k}a^{n-k}b^k$" },
        ],
        workedExample: {
          problem: "Expand $(2x-3)^4$.",
          solution: "Row 4 of Pascal's triangle is $1,4,6,4,1$. Apply those coefficients to descending powers of $2x$ and ascending powers of $-3$: $(2x)^4+4(2x)^3(-3)+6(2x)^2(-3)^2+4(2x)(-3)^3+(-3)^4$. This simplifies to $16x^4-96x^3+216x^2-216x+81$.",
        },
      },
      questions: [
        {
          id: "alg2-u5-identities-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which expression is equivalent to $(x+5)^2$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x^2+25$" },
              { id: "b", text: "$x^2+10x+5$" },
              { id: "c", text: "$x^2+5x+25$" },
              { id: "d", text: "$x^2+10x+25$" },
            ],
            dorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Square of a sum", statement: "$(a+b)^2=a^2+2ab+b^2$" },
            ],
            steps: [
              { reasoning: "Apply the square-of-a-sum identity with $a=x$ and $b=5$.", working: "(x+5)^2=x^2+2(x)(5)+5^2", marks: 1, markCode: "M" },
              { reasoning: "Simplify the middle and constant terms.", working: "x^2+10x+25", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** $x^2+10x+25$",
            commonErrors: ["Omitting the middle term $10x$.", "Using $5x$ instead of $2(x)(5)$."],
          },
        },
        {
          id: "alg2-u5-identities-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Use the Binomial Theorem to determine the coefficient of $x$ in the expansion of $(x-2)^3$.",
          response: { type: "numeric", parts: [{ label: "Coefficient of $x$", answer: 12 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Binomial Theorem", statement: "$(a+b)^3=a^3+3a^2b+3ab^2+b^3$." },
            ],
            steps: [
              { reasoning: "Use the cube coefficients $1,3,3,1$ and substitute $a=x$, $b=-2$.", working: "(x-2)^3=x^3+3x^2(-2)+3x(-2)^2+(-2)^3", marks: 1, markCode: "M" },
              { reasoning: "Simplify each term, keeping the even power of $-2$ positive.", working: "x^3-6x^2+12x-8", marks: 1, markCode: "A" },
              { reasoning: "Read the coefficient multiplying $x$ in the expanded polynomial.", working: "12x\\;\\Rightarrow\\;12", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$(x-2)^3=x^3-6x^2+12x-8$; the coefficient of $x$ is $12$.",
            commonErrors: ["Giving the $x$ coefficient a negative sign even though $(-2)^2$ is positive."],
          },
        },
        {
          id: "alg2-u5-identities-q3",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Use the Binomial Theorem to expand $(2x+1)^4$. Enter the coefficient of each descending power of $x$, beginning with $x^4$ and ending with the constant term.",
          response: {
            type: "numeric",
            parts: [
              { label: "Coefficient of $x^4$", answer: 16 },
              { label: "Coefficient of $x^3$", answer: 32 },
              { label: "Coefficient of $x^2$", answer: 24 },
              { label: "Coefficient of $x$", answer: 8 },
              { label: "Constant term", answer: 1 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Binomial Theorem", statement: "$(a+b)^4=a^4+4a^3b+6a^2b^2+4ab^3+b^4$." },
            ],
            steps: [
              { reasoning: "Use row 4 of Pascal's triangle and substitute $a=2x$, $b=1$.", working: "(2x)^4+4(2x)^3(1)+6(2x)^2(1)^2+4(2x)(1)^3+1^4", marks: 1, markCode: "M" },
              { reasoning: "Evaluate the leading term.", working: "(2x)^4=16x^4", marks: 1, markCode: "A" },
              { reasoning: "Evaluate the next term using the coefficient 4.", working: "4(2x)^3(1)=32x^3", marks: 1, markCode: "A" },
              { reasoning: "Evaluate the remaining terms, including the constant.", working: "6(2x)^2+4(2x)+1=24x^2+8x+1", marks: 1, markCode: "A" },
              { reasoning: "Collect all terms in descending powers and report the requested coefficients.", working: "16x^4+32x^3+24x^2+8x+1", marks: 1, markCode: "B" },
            ],
            finalAnswer: "$16,32,24,8,1$; $(2x+1)^4=16x^4+32x^3+24x^2+8x+1$.",
            commonErrors: ["Using coefficients from the wrong row of Pascal's triangle.", "Forgetting that $(2x)^4=16x^4$."],
          },
        },
        {
          id: "alg2-u5-identities-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Consider the identity $(x+3)^2-(x-3)^2=12x$.",
          parts: [
            { label: "a", prompt: "Expand $(x+3)^2$ and $(x-3)^2$ separately.", marks: 2 },
            { label: "b", prompt: "Subtract the second expansion from the first and simplify.", marks: 2 },
            { label: "c", prompt: "Verify the identity by using the difference-of-squares formula, and explain why both methods agree.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Square identities", statement: "$(x\\pm3)^2=x^2\\pm6x+9$." },
              { kind: "formula", name: "Difference of squares", statement: "$A^2-B^2=(A-B)(A+B)$." },
              { kind: "principle", name: "Polynomial identity", statement: "Two polynomial expressions are identical if they have equal values for every input; equivalent algebraic transformations preserve equality." },
            ],
            steps: [
              { part: "a", reasoning: "Apply the square-of-a-sum identity to the first expression.", working: "(x+3)^2=x^2+6x+9", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Apply the square-of-a-difference identity to the second expression.", working: "(x-3)^2=x^2-6x+9", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Insert the expansions with parentheses so the subtraction applies to every term in the second trinomial.", working: "(x^2+6x+9)-(x^2-6x+9)", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Distribute the negative and combine like terms.", working: "x^2+6x+9-x^2+6x-9=12x", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Recognize a difference of squares with $A=x+3$ and $B=x-3$.", working: "(x+3)^2-(x-3)^2=[(x+3)-(x-3)][(x+3)+(x-3)]", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Simplify each factor.", working: "(6)(2x)=12x", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Both approaches simplify the same left-hand expression to $12x$.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Because the transformations are valid for every real $x$, the equality is a polynomial identity, not merely a statement true for selected values.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $x^2+6x+9$ and $x^2-6x+9$. (b) Their difference is $12x$. (c) Difference of squares gives $(6)(2x)=12x$, confirming the identity for every $x$.",
            commonErrors: ["Failing to distribute the subtraction across all terms of $(x-3)^2$.", "Claiming a check at one value proves an identity."],
          },
        },
      ],
    },
  ],
};
