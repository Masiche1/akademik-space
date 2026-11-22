import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "pc-u1-lesson-1-2",
  code: "1-2",
  title: "Polynomial Division and the Remainder and Factor Theorems",
  goal: "I CAN divide polynomials and use the remainder, factor, and rational root theorems to analyze polynomial equations.",
  standards: ["HSA-APR.B.2", "HSN-CN.C.9"],
  vocabulary: [
    { term: "Polynomial long division", definition: "An algorithm that divides polynomials by repeatedly dividing leading terms, multiplying, subtracting, and bringing down the next term." },
    { term: "Synthetic division", definition: "A compact division procedure for dividing a polynomial by a linear factor of the form $x-c$." },
    { term: "Remainder Theorem", definition: "When $f(x)$ is divided by $x-c$, the remainder is $f(c)$." },
    { term: "Factor Theorem", definition: "A linear expression $(x-c)$ is a factor of $f(x)$ if and only if $f(c)=0$." },
    { term: "Rational Root Theorem", definition: "For an integer-coefficient polynomial, any rational zero $p/q$ in lowest terms has $p$ dividing the constant term and $q$ dividing the leading coefficient." },
    { term: "Fundamental Theorem of Algebra", definition: "A degree-$n$ polynomial has exactly $n$ complex zeros, counted with multiplicity." },
  ],
  concepts: [
    {
      id: "pc-u1-polynomial-division",
      title: "Polynomial division and the remainder theorem",
      skill: "Divide a polynomial by a linear or quadratic polynomial and evaluate a remainder efficiently.",
      lesson: {
        sections: [
          {
            heading: "Long division and synthetic division",
            body: "Polynomial long division follows the same structure as numerical long division: divide leading terms, multiply the divisor by the result, subtract, and repeat. Include zero-coefficient placeholders for any missing powers. Synthetic division is a shortcut when the divisor is linear and written as $x-c$; use the number $c$ and the dividend's coefficients in descending powers.",
          },
          {
            heading: "Remainders are function values",
            body: "Division always has the form $f(x)=d(x)q(x)+r(x)$, where the remainder has degree lower than the divisor. For a divisor $x-c$, the remainder is a constant and equals $f(c)$. Therefore, evaluating a polynomial at $c$ is equivalent to finding the remainder after division by $x-c$. A zero remainder means the divisor is a factor.",
          },
        ],
        keyFormulas: [
          { name: "Polynomial division algorithm", statement: "$f(x)=d(x)q(x)+r(x)$, where $\\deg(r)<\\deg(d)$ or $r=0$." },
          { name: "Remainder Theorem", statement: "$\\text{Remainder on division by }x-c=f(c).$" },
        ],
        workedExample: {
          problem: "Divide $x^3-4x^2+x+6$ by $x-2$ and check the remainder using the Remainder Theorem.",
          solution: "Synthetic division uses $c=2$ with coefficients $1,-4,1,6$. Bring down 1; multiply and add successively to obtain quotient coefficients $1,-2,-3$ and remainder 0. Thus the quotient is $x^2-2x-3$. Check: $f(2)=8-16+2+6=0$, matching the remainder.",
        },
      },
      questions: [
        {
          id: "pc-u1-1-2-division-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "When $f(x)=2x^3-3x+5$ is divided by $x-2$, what is the remainder?",
          response: { type: "numeric", parts: [{ label: "Remainder", answer: 15 }] },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Remainder Theorem", statement: "The remainder on division by $x-c$ is $f(c)$." },
              { kind: "property", name: "Substitution", statement: "Evaluate a polynomial by replacing every $x$ with the specified value and respecting exponentiation before addition." },
            ],
            steps: [
              { reasoning: "The divisor $x-2$ has the form $x-c$ with $c=2$, so evaluate $f(2)$.", working: "f(2)=2(2)^3-3(2)+5", marks: 1, markCode: "M" },
              { reasoning: "Simplify to obtain the constant remainder.", working: "f(2)=16-6+5=15", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The remainder is $15$.",
            commonErrors: ["Substituting $-2$ instead of $2$ for the divisor $x-2$."],
          },
        },
        {
          id: "pc-u1-1-2-division-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Divide $x^3-4x^2+x+6$ by $x-2$. Which pair is the quotient and remainder?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Quotient $x^2-6x+13$; remainder $32$" },
              { id: "b", text: "Quotient $x^2-2x+3$; remainder $0$" },
              { id: "c", text: "Quotient $x^2-2x-3$; remainder $6$" },
              { id: "d", text: "Quotient $x^2-2x-3$; remainder $0$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Synthetic division", statement: "For divisor $x-c$, synthetic division uses $c$ and coefficients in descending powers." },
              { kind: "law", name: "Division identity", statement: "$f(x)=(x-2)q(x)+r$, where $r$ is constant." },
              { kind: "theorem", name: "Remainder Theorem", statement: "The remainder is $f(2)$." },
            ],
            steps: [
              { reasoning: "Use $c=2$ and the complete coefficient list $1,-4,1,6$.", working: "\\begin{array}{r|rrrr}2&1&-4&1&6\\\\& &2&-4&-6\\\\\\hline&1&-2&-3&0\\end{array}", marks: 1, markCode: "M" },
              { reasoning: "Read the quotient coefficients and the final remainder from the bottom row.", working: "q(x)=x^2-2x-3,\\qquad r=0", marks: 1, markCode: "A" },
              { reasoning: "Check consistency: $f(2)=0$, so the remainder must be zero; select (a).", working: "f(2)=8-16+2+6=0", marks: 1, markCode: "R" },
            ],
            finalAnswer: "**(a)** Quotient $x^2-2x-3$; remainder $0$.",
            commonErrors: ["Forgetting a zero placeholder for a missing power (none is missing here).", "Reading the last synthetic value as a quotient coefficient instead of the remainder."],
          },
        },
        {
          id: "pc-u1-1-2-division-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Use polynomial long division to divide $2x^3+3x^2-5x+6$ by $x^2+1$. Give the quotient and remainder, then verify the division identity.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "law", name: "Polynomial division algorithm", statement: "$f=dq+r$, where the remainder has degree less than the divisor." },
              { kind: "property", name: "Leading-term division", statement: "At each stage, divide the current leading term by the divisor's leading term." },
            ],
            steps: [
              { reasoning: "Divide $2x^3$ by $x^2$ to obtain the first quotient term.", working: "2x^3\\div x^2=2x", marks: 1, markCode: "M" },
              { reasoning: "Subtract $(x^2+1)(2x)$ from the dividend; then divide the new leading term by $x^2$.", working: "(2x^3+3x^2-5x+6)-(2x^3+2x)=3x^2-7x+6\\\\3x^2\\div x^2=3", marks: 1, markCode: "M" },
              { reasoning: "Subtract $(x^2+1)(3)$ to obtain a remainder of degree less than 2.", working: "(3x^2-7x+6)-(3x^2+3)=-7x+3", marks: 1, markCode: "A" },
              { reasoning: "Verify that divisor times quotient plus remainder reproduces the dividend.", working: "(x^2+1)(2x+3)+(-7x+3)=2x^3+3x^2-5x+6", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Quotient $2x+3$; remainder $-7x+3$.",
            commonErrors: ["Treating the remainder as a constant even though the divisor is quadratic; its degree must be less than 2."],
            examinerNote: "The division identity check is required for the final reasoning mark.",
          },
        },
        {
          id: "pc-u1-1-2-division-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A shipping container has volume $V(x)=2x^3+3x^2-11x-6$ cubic feet, where $x$ is a scaling parameter in feet and the container dimensions are linear expressions in $x$.",
          parts: [
            { label: "a", prompt: "Use the Remainder Theorem to find the remainder when $V(x)$ is divided by $x-1$ and by $x+1$. (2 marks)", marks: 2 },
            { label: "b", prompt: "Use synthetic division to show that $x-2$ is a factor of $V(x)$ and state the quotient. (3 marks)", marks: 3 },
            { label: "c", prompt: "Factor $V(x)$ completely and state all of its zeros. (2 marks)", marks: 2 },
            { label: "d", prompt: "The dimensions are the three linear factors with positive leading coefficients: $x-2$, $2x+1$, and $x+3$ feet. Explain why $x>2$ is required, and find the volume when $x=5$. (2 marks)", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Remainder Theorem", statement: "The remainder when $f(x)$ is divided by $x-c$ is $f(c)$." },
              { kind: "theorem", name: "Factor Theorem", statement: "$x-c$ is a factor of $f(x)$ if and only if $f(c)=0$." },
              { kind: "law", name: "Division identity", statement: "$f(x)=(x-c)q(x)+r$, so a zero remainder gives $f=(x-c)q$." },
            ],
            steps: [
              { part: "a", reasoning: "Divisor $x-1$ means $c=1$, so the remainder is $V(1)$.", working: "V(1)=2+3-11-6=-12", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Divisor $x+1=x-(-1)$ means $c=-1$, so the remainder is $V(-1)$.", working: "V(-1)=-2+3+11-6=6", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Set up synthetic division with $c=2$ and coefficients $2,3,-11,-6$.", working: "\\begin{array}{r|rrrr}2&2&3&-11&-6\\\\& &4&14&6\\\\\\hline&2&7&3&0\\end{array}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "The final entry, the remainder, is 0, so by the Factor Theorem $x-2$ is a factor.", working: "r=0", marks: 1, markCode: "R" },
              { part: "b", reasoning: "Read the quotient from the bottom row.", working: "q(x)=2x^2+7x+3", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Factor the quadratic quotient: two numbers with product 6 and sum 7 are 1 and 6.", working: "2x^2+7x+3=(2x+1)(x+3)", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Set each factor equal to zero.", working: "V(x)=(x-2)(2x+1)(x+3);\\quad x=2,\\; x=-\\tfrac12,\\; x=-3", marks: 1, markCode: "A" },
              { part: "d", reasoning: "All three dimensions must be positive; the binding condition is $x-2>0$ (then $2x+1$ and $x+3$ are positive too).", working: "x>2", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Substitute $x=5$ into the factored form.", working: "V(5)=3\\cdot11\\cdot8=264\\text{ ft}^3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Remainders $-12$ and $6$. (b) $V=(x-2)(2x^2+7x+3)$, remainder 0. (c) $V=(x-2)(2x+1)(x+3)$; zeros $2$, $-\\tfrac12$, $-3$. (d) $x>2$ keeps all dimensions positive; $V(5)=264$ cubic feet.",
            commonErrors: ["Evaluating $V(-1)$ for the divisor $x-1$ (sign error).", "Omitting the remainder row sign when carrying negative numbers in synthetic division.", "Treating the negative zeros as valid values of the parameter."],
          },
        },
      ],
    },
    {
      id: "pc-u1-root-theorems",
      title: "Factor and rational root theorems",
      skill: "Test possible zeros and factor integer-coefficient polynomials to find their zeros.",
      lesson: {
        sections: [
          {
            heading: "Turn a zero test into a factor test",
            body: "The Factor Theorem states that $x-c$ divides $f(x)$ exactly when $f(c)=0$. Test candidate values by substitution; once a zero is found, divide by its corresponding linear factor to lower the degree. Continue factoring or use an appropriate equation-solving method on the quotient.",
          },
          {
            heading: "List rational candidates and account for all zeros",
            body: "For an integer-coefficient polynomial, a rational zero in lowest terms must have numerator dividing the constant term and denominator dividing the leading coefficient. List these candidates before testing; the theorem gives possibilities, not a promise that every candidate is a zero. Once factors have been found, the Fundamental Theorem of Algebra guarantees that a degree-$n$ polynomial has $n$ complex zeros counted with multiplicity. Nonreal zeros of real-coefficient polynomials occur in conjugate pairs.",
          },
        ],
        keyFormulas: [
          { name: "Factor Theorem", statement: "$f(c)=0\\iff (x-c)\\text{ is a factor of }f(x)$." },
          { name: "Rational Root Theorem", statement: "\\text{If }p/q\\text{ is a rational zero in lowest terms, then }p\\mid a_0\\text{ and }q\\mid a_n\\text{ for }a_nx^n+\\cdots+a_0." },
        ],
        workedExample: {
          problem: "Find all zeros of $f(x)=x^3-2x^2-5x+6$ using the Rational Root and Factor Theorems.",
          solution: "Possible integer zeros divide 6: $\\pm1,\\pm2,\\pm3,\\pm6$. Test $x=1$: $f(1)=1-2-5+6=0$, so $x-1$ is a factor. Division gives $x^2-x-6=(x-3)(x+2)$. Therefore $f(x)=(x-1)(x-3)(x+2)$, and the zeros are $1,3,-2$.",
        },
      },
      questions: [
        {
          id: "pc-u1-1-2-roots-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "For $f(x)=x^3-4x+3$, which statement correctly applies the Factor Theorem to $x-1$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$f(-1)=0$, so $x-1$ is a factor." },
              { id: "b", text: "$f(1)=0$, so $x-1$ is a factor." },
              { id: "c", text: "$f(1)=3$, so $x-1$ is a factor." },
              { id: "d", text: "$f(0)=3$, so $x-1$ is a factor." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Factor Theorem", statement: "$x-c$ is a factor of $f(x)$ if and only if $f(c)=0$." },
              { kind: "property", name: "Linear-factor root", statement: "The factor $x-1$ corresponds to testing $x=1$." },
            ],
            steps: [
              { reasoning: "Substitute 1, not -1, because the factor is $x-1$.", working: "f(1)=1^3-4(1)+3=0", marks: 1, markCode: "M" },
              { reasoning: "Since the value is zero, $x-1$ is a factor; choose (a).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $f(1)=0$, so $x-1$ is a factor.",
            commonErrors: ["Using the opposite sign and evaluating $f(-1)$ for the factor $x-1$."],
          },
        },
        {
          id: "pc-u1-1-2-roots-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Which list contains all possible rational zeros of $2x^3-x^2-8x+4$ according to the Rational Root Theorem?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\pm1,\\pm2,\\pm4$" },
              { id: "b", text: "$\\pm1,\\pm2,\\pm4,\\pm\\frac12,\\pm\\frac14$" },
              { id: "c", text: "$\\pm1,\\pm\\frac12$" },
              { id: "d", text: "$\\pm1,\\pm2,\\pm4,\\pm\\frac12$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Rational Root Theorem", statement: "A reduced rational zero $p/q$ has $p$ dividing the constant term and $q$ dividing the leading coefficient." },
              { kind: "property", name: "Reduced fractions", statement: "Candidate fractions must be reduced to lowest terms, with positive denominator." },
            ],
            steps: [
              { reasoning: "The constant term is 4, so the numerator candidates are $\\pm1,\\pm2,\\pm4$.", working: "p\\in\\{\\pm1,\\pm2,\\pm4\\}", marks: 1, markCode: "M" },
              { reasoning: "The leading coefficient is 2, so denominator candidates are 1 or 2.", working: "q\\in\\{1,2\\}", marks: 1, markCode: "M" },
              { reasoning: "Form and reduce the possible fractions, giving the set in choice (b).", working: "\\pm1,\\;\\pm2,\\;\\pm4,\\;\\pm\\frac12", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** $\\pm1,\\pm2,\\pm4,\\pm\\frac12$",
            commonErrors: ["Using only factors of the constant term and omitting fractions from a leading coefficient of 2."],
          },
        },
        {
          id: "pc-u1-1-2-roots-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Find all zeros of $p(x)=x^3-2x^2-5x+6$. Show how the Rational Root Theorem and Factor Theorem support your answer.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Rational Root Theorem", statement: "Any rational zero in lowest terms has numerator dividing the constant term and denominator dividing the leading coefficient." },
              { kind: "theorem", name: "Factor Theorem", statement: "$p(c)=0$ if and only if $x-c$ is a factor of $p(x)$." },
              { kind: "theorem", name: "Fundamental Theorem of Algebra", statement: "A degree-3 polynomial has exactly three complex zeros counted with multiplicity." },
            ],
            steps: [
              { reasoning: "List possible rational zeros, which here are the integer divisors of 6.", working: "\\pm1,\\pm2,\\pm3,\\pm6", marks: 1, markCode: "M" },
              { reasoning: "Test 1; it gives zero, so the Factor Theorem guarantees $x-1$ is a factor.", working: "p(1)=1-2-5+6=0", marks: 1, markCode: "A" },
              { reasoning: "Divide by $x-1$ and factor the quadratic quotient.", working: "p(x)=(x-1)(x^2-x-6)=(x-1)(x-3)(x+2)", marks: 1, markCode: "M" },
              { reasoning: "Set each factor equal to zero; the three roots account for the degree.", working: "x=1,\\qquad x=3,\\qquad x=-2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The zeros are $1$, $3$, and $-2$.",
            commonErrors: ["Treating all Rational Root Theorem candidates as zeros without testing them.", "Forgetting that a root $r$ corresponds to the factor $x-r$."],
            examinerNote: "The reasoning must show at least one candidate test and the resulting factorization, not only list the roots.",
          },
        },
        {
          id: "pc-u1-1-2-roots-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "During a storm, the net change in a reservoir's water level, in centimeters, $x$ days after the storm begins is modeled by $P(x)=2x^3-3x^2-8x-3$ for $x\\ge0$.",
          parts: [
            { label: "a", prompt: "List every possible rational zero of $P$ given by the Rational Root Theorem. (2 marks)", marks: 2 },
            { label: "b", prompt: "Evaluate $P(1)$ and $P(-1)$, and state what each result shows about the factors $x-1$ and $x+1$. (2 marks)", marks: 2 },
            { label: "c", prompt: "Factor $P(x)$ completely and find all of its zeros. (3 marks)", marks: 3 },
            { label: "d", prompt: "Determine the sign of $P(x)$ for $x>0$ and interpret it for the reservoir. (2 marks)", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Rational Root Theorem", statement: "A rational zero $p/q$ in lowest terms has $p$ dividing the constant term and $q$ dividing the leading coefficient." },
              { kind: "theorem", name: "Factor Theorem", statement: "$x-c$ is a factor of $P(x)$ if and only if $P(c)=0$." },
              { kind: "property", name: "Sign of a product", statement: "A product of factors is positive when an even number of factors are negative, and zero only if a factor is zero." },
            ],
            steps: [
              { part: "a", reasoning: "Constant term $-3$ gives $p\\in\\{\\pm1,\\pm3\\}$; leading coefficient 2 gives $q\\in\\{1,2\\}$.", working: "p\\in\\{\\pm1,\\pm3\\},\\; q\\in\\{1,2\\}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Form all reduced fractions $p/q$.", working: "\\pm1,\\;\\pm3,\\;\\pm\\tfrac12,\\;\\pm\\tfrac32", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Substitute $x=1$: nonzero, so $x-1$ is not a factor.", working: "P(1)=2-3-8-3=-12", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Substitute $x=-1$: zero, so $x+1$ is a factor by the Factor Theorem.", working: "P(-1)=-2-3+8-3=0", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Divide by $x+1$ using synthetic division with $c=-1$.", working: "\\begin{array}{r|rrrr}-1&2&-3&-8&-3\\\\& &-2&5&3\\\\\\hline&2&-5&-3&0\\end{array}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Factor the quotient $2x^2-5x-3$.", working: "2x^2-5x-3=(2x+1)(x-3)", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Write the full factorization and read the zeros.", working: "P(x)=(x+1)(2x+1)(x-3);\\quad x=-1,\\;-\\tfrac12,\\;3", marks: 1, markCode: "A" },
              { part: "d", reasoning: "For $x>0$ the factors $x+1$ and $2x+1$ are positive, so $P$ has the sign of $x-3$: negative for $0<x<3$, zero at $x=3$, positive for $x>3$.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Interpretation: the net water level change is negative for the first 3 days, is zero on day 3, and positive afterwards.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $\\pm1,\\pm3,\\pm\\tfrac12,\\pm\\tfrac32$. (b) $P(1)=-12$ so $x-1$ is not a factor; $P(-1)=0$ so $x+1$ is. (c) $P=(x+1)(2x+1)(x-3)$; zeros $-1,-\\tfrac12,3$. (d) $P<0$ on $0<x<3$, $P>0$ for $x>3$.",
            commonErrors: ["Listing only integer candidates and missing the fractions.", "Evaluating $P(1)$ for the factor $x+1$.", "Including the negative zeros as valid times."],
          },
        },
      ],
    },
  ],
};
