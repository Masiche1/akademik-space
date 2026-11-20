import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "pc-u1-lesson-1-3",
  code: "1-3",
  title: "Rational Functions and Asymptotes",
  goal: "I CAN identify holes, intercepts, and vertical, horizontal, or slant asymptotes of rational functions.",
  standards: ["HSF-IF.C.7d", "HSA-APR.D.6"],
  vocabulary: [
    { term: "Rational function", definition: "A function of the form $R(x)=\\frac{P(x)}{Q(x)}$, where $P$ and $Q$ are polynomials and $Q(x)$ is not the zero polynomial." },
    { term: "Domain restriction", definition: "An input excluded from a rational function because it makes the original denominator equal to zero." },
    { term: "Removable discontinuity (hole)", definition: "A missing point in the graph caused by a common factor in the original numerator and denominator that cancels when simplifying." },
    { term: "Vertical asymptote", definition: "A vertical line $x=a$ that the graph approaches without bound near an uncanceled zero of the denominator." },
    { term: "Horizontal asymptote", definition: "A horizontal line $y=L$ that the function approaches as $x\\to\\infty$ or $x\\to-\\infty$." },
    { term: "Slant (oblique) asymptote", definition: "A nonhorizontal line approached by a rational function when the numerator's degree is exactly one greater than the denominator's degree." },
  ],
  concepts: [
    {
      id: "pc-u1-rational-features",
      title: "Domain, holes, vertical asymptotes, and intercepts",
      skill: "Analyze a rational function's excluded inputs, removable discontinuities, vertical asymptotes, and intercepts.",
      lesson: {
        sections: [
          {
            heading: "Factor before classifying denominator zeros",
            body: "First factor the original numerator and denominator. Any zero of the original denominator is excluded from the domain. A shared factor cancels algebraically, but its zero remains excluded and becomes a **hole**. The hole's $x$-coordinate is the canceled factor's zero; substitute that value into the simplified expression to find the hole's $y$-coordinate. A denominator zero that remains after cancellation gives a vertical asymptote.",
          },
          {
            heading: "Find intercepts from the simplified expression",
            body: "An $x$-intercept occurs where the numerator is zero and the denominator is nonzero; use the simplified numerator, but exclude any input missing from the original function. The $y$-intercept is $R(0)$ if $x=0$ is in the domain. A hole is not an intercept even if cancellation makes the simplified formula appear to have a point there.",
          },
        ],
        keyFormulas: [
          { name: "Domain restriction", statement: "\\text{Exclude every }x\\text{ such that the original }Q(x)=0." },
          { name: "Hole and vertical asymptote test", statement: "\\text{Canceled denominator zero: hole; uncanceled denominator zero: vertical asymptote.}" },
          { name: "Intercept conditions", statement: "x\\text{-intercept: }P(x)=0\\text{ and }Q(x)\\ne0;\\qquad y\\text{-intercept: }R(0)\\text{ if defined}." },
        ],
        workedExample: {
          problem: "Analyze holes and vertical asymptotes of $R(x)=\\frac{x^2-1}{x^2- x-2}$.",
          solution: "Factor: $R(x)=\\frac{(x-1)(x+1)}{(x-2)(x+1)}$. The original domain excludes $x=-1$ and $x=2$. Canceling $x+1$ gives $\\frac{x-1}{x-2}$ for other inputs. At $x=-1$, the simplified expression has value $\\frac{-2}{-3}=\\frac23$, so there is a hole at $(-1,\\frac23)$. The uncanceled denominator zero $x=2$ gives a vertical asymptote $x=2$.",
        },
      },
      questions: [
        {
          id: "pc-u1-1-3-features-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "For $R(x)=\\frac{x-3}{(x-3)(x+2)}$, which classification is correct?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Vertical asymptote $x=3$ and a hole at $x=-2$." },
              { id: "b", text: "A hole at $x=3$ and vertical asymptote $x=-2$." },
              { id: "c", text: "Vertical asymptotes at $x=3$ and $x=-2$, with no hole." },
              { id: "d", text: "A hole at $x=-2$ and no vertical asymptote." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Domain restriction", statement: "Zeros of the original denominator are excluded from the domain, even if their factors cancel." },
              { kind: "definition", name: "Hole versus vertical asymptote", statement: "A canceled denominator factor creates a hole; an uncanceled denominator factor creates a vertical asymptote." },
            ],
            steps: [
              { reasoning: "The common factor $x-3$ cancels, so its zero remains a domain restriction and creates a hole.", working: "R(x)=\\frac{1}{x+2},\\qquad x\\ne3,-2", marks: 1, markCode: "M" },
              { reasoning: "The factor $x+2$ remains in the denominator, so $x=-2$ is a vertical asymptote; choose (b).", working: "x+2=0\\implies x=-2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Hole at $x=3$; vertical asymptote $x=-2$.",
            commonErrors: ["Forgetting that cancellation does not restore the excluded input to the original domain."],
          },
        },
        {
          id: "pc-u1-1-3-features-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "For $F(x)=\\frac{(x-1)(x+2)}{(x-1)(x-3)}$, find the $x$-coordinate of the hole, the $x$-intercept, and the vertical asymptote's $x$-coordinate.",
          response: {
            type: "numeric",
            parts: [
              { label: "Hole's $x$-coordinate", answer: 1 },
              { label: "$x$-intercept", answer: -2 },
              { label: "Vertical asymptote's $x$-coordinate", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Cancellation and holes", statement: "A shared numerator-denominator factor gives a hole at its zero, which stays excluded." },
              { kind: "definition", name: "X-intercept", statement: "An $x$-intercept is a zero of the numerator at an input in the domain." },
              { kind: "definition", name: "Vertical asymptote", statement: "An uncanceled denominator zero gives a vertical asymptote." },
            ],
            steps: [
              { reasoning: "The common factor $x-1$ cancels but records the hole at $x=1$.", working: "F(x)=\\frac{x+2}{x-3},\\qquad x\\ne1,3", marks: 1, markCode: "M" },
              { reasoning: "Set the remaining numerator to zero for the intercept; $x=-2$ is allowed in the domain.", working: "x+2=0\\implies x=-2", marks: 1, markCode: "A" },
              { reasoning: "Set the remaining denominator to zero for the vertical asymptote.", working: "x-3=0\\implies x=3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Hole $x$-coordinate $1$; $x$-intercept $-2$; vertical asymptote $x=3$.",
            commonErrors: ["Counting the canceled zero $x=1$ as an $x$-intercept.", "Calling the hole at $x=1$ a vertical asymptote."],
          },
        },
        {
          id: "pc-u1-1-3-features-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Analyze $G(x)=\\frac{x^2-4}{x^2-x-2}$. State the domain restrictions, any hole, any vertical asymptote, and all intercepts.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Factoring and cancellation", statement: "Factor numerator and denominator; canceled common factors create holes but do not remove original domain restrictions." },
              { kind: "definition", name: "Intercepts", statement: "$x$-intercepts come from defined numerator zeros; the $y$-intercept is the value at $x=0$ when defined." },
              { kind: "definition", name: "Vertical asymptote", statement: "An uncanceled denominator zero gives a vertical asymptote." },
            ],
            steps: [
              { reasoning: "Factor both polynomials and identify the original denominator's zeros.", working: "G(x)=\\frac{(x-2)(x+2)}{(x-2)(x+1)},\\qquad x\\ne2,-1", marks: 1, markCode: "M" },
              { reasoning: "Cancel the common factor and compute the missing point's height.", working: "\\frac{x+2}{x+1}\\text{ at }x=2:\\;y=\\frac43", marks: 1, markCode: "A" },
              { reasoning: "The remaining denominator gives a vertical asymptote; the remaining numerator gives the valid $x$-intercept.", working: "x=-1\\text{ is a vertical asymptote},\\qquad x=-2\\text{ is an }x\\text{-intercept}", marks: 1, markCode: "A" },
              { reasoning: "Evaluate at zero for the $y$-intercept; zero is in the domain.", working: "G(0)=\\frac{2}{1}=2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Domain: $x\\ne2,-1$. Hole: $(2,\\frac43)$. Vertical asymptote: $x=-1$. Intercepts: $(-2,0)$ and $(0,2)$.",
            commonErrors: ["Including $x=2$ in the domain after cancellation.", "Treating $x=2$ as the vertical asymptote instead of the hole."],
            examinerNote: "The hole's coordinates require evaluating the simplified expression at the canceled input.",
          },
        },
        {
          id: "pc-u1-1-3-features-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A pharmacist models the concentration (mg/L) of a medication in a patient's blood $t$ hours after an injection by $C(t)=\\frac{12t(t-2)}{(t-2)(t+4)}$, for $t\\ge0$.",
          parts: [
            { label: "a", prompt: "Factor and state the values of $t$ excluded from the domain of $C$ as a rational function. (2 marks)", marks: 2 },
            { label: "b", prompt: "Find the coordinates of the hole in the graph of $C$. (2 marks)", marks: 2 },
            { label: "c", prompt: "Find the vertical asymptote and the intercepts, and say whether the vertical asymptote matters for $t\\ge0$. (3 marks)", marks: 3 },
            { label: "d", prompt: "Explain what the missing point means for the model, and state the concentration the graph approaches at $t=2$. (2 marks)", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Domain restriction", statement: "Zeros of the original denominator are excluded from the domain, even if their factors cancel." },
              { kind: "definition", name: "Hole versus vertical asymptote", statement: "A canceled denominator factor creates a hole; an uncanceled factor creates a vertical asymptote." },
              { kind: "definition", name: "Intercepts", statement: "$x$-intercepts are zeros of the numerator in the domain; the $y$-intercept is the value at $0$." },
            ],
            steps: [
              { part: "a", reasoning: "The denominator is already factored; its zeros are excluded.", working: "(t-2)(t+4)=0\\implies t=2,\\; t=-4", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the exclusions.", working: "t\\ne2,\\; t\\ne-4", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Cancel $t-2$ to get the simplified function.", working: "C(t)=\\frac{12t}{t+4},\\quad t\\ne2,-4", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate the simplified function at $t=2$ for the height of the hole.", working: "\\frac{12(2)}{6}=4\\implies\\text{hole at }(2,4)", marks: 1, markCode: "A" },
              { part: "c", reasoning: "The factor $t+4$ is not canceled, so it gives the vertical asymptote.", working: "t=-4", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Numerator zero $t=0$ is in the domain; evaluating at $0$ gives the same point.", working: "C(0)=0\\implies(0,0)\\text{ is both intercepts}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "The asymptote $t=-4$ lies outside $t\\ge0$, so it has no effect on the model's domain.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "The formula is undefined at $t=2$, so the model gives no value at exactly 2 hours, although the concentration just before and after is close to 4 mg/L.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "State the approached value.", working: "C(t)\\to4\\text{ mg/L as }t\\to2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Excluded: $t=2$ and $t=-4$. (b) Hole at $(2,4)$. (c) Vertical asymptote $t=-4$ (outside $t\\ge0$); intercept $(0,0)$ for both axes. (d) The model is undefined at $t=2$ but approaches $4$ mg/L.",
            commonErrors: ["Cancelling $t-2$ and then allowing $t=2$ in the domain.", "Treating $t=2$ as a vertical asymptote.", "Forgetting to check whether the asymptote lies in the physical domain."],
          },
        },
      ],
    },
    {
      id: "pc-u1-rational-end-asymptotes",
      title: "Horizontal and slant asymptotes",
      skill: "Determine a rational function's end-behavior asymptote by comparing degrees and dividing when needed.",
      lesson: {
        sections: [
          {
            heading: "Compare numerator and denominator degrees",
            body: "For a rational function in simplified form, compare the degrees of its numerator $P$ and denominator $Q$. If $\\deg(P)<\\deg(Q)$, the horizontal asymptote is $y=0$. If the degrees are equal, the horizontal asymptote is the ratio of leading coefficients. These rules describe end behavior, not necessarily a line the graph can never cross.",
          },
          {
            heading: "Polynomial division gives a slant asymptote",
            body: "If the numerator's degree is exactly one more than the denominator's, divide $P(x)$ by $Q(x)$. The quotient is linear and the remainder term tends to zero as $|x|$ grows, so the quotient line is the slant asymptote. For a larger degree difference, division still gives a polynomial asymptote, but it is not a slant line. Find intercepts separately: use numerator zeros for $x$-intercepts (excluding holes) and evaluate at zero for the $y$-intercept when defined.",
          },
        ],
        keyFormulas: [
          { name: "Degree comparison", statement: "\\deg(P)<\\deg(Q):y=0;\\quad \\deg(P)=\\deg(Q):y=\\frac{\\text{leading coefficient of }P}{\\text{leading coefficient of }Q}." },
          { name: "Slant asymptote", statement: "\\deg(P)=\\deg(Q)+1:\\quad \\frac{P(x)}{Q(x)}=mx+b+\\frac{r(x)}{Q(x)}\\implies y=mx+b." },
        ],
        workedExample: {
          problem: "Find the end-behavior asymptote of $R(x)=\\frac{x^2+3x+1}{x-1}$.",
          solution: "The numerator's degree is one more than the denominator's, so divide: $x^2+3x+1=(x-1)(x+4)+5$. Therefore $R(x)=x+4+\\frac{5}{x-1}$. The remainder fraction approaches 0 as $x\\to\\pm\\infty$, so the slant asymptote is $y=x+4$.",
        },
      },
      questions: [
        {
          id: "pc-u1-1-3-asym-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the horizontal asymptote of $f(x)=\\frac{3x+1}{x^2+4}$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$y=3$" },
              { id: "b", text: "$y=1$" },
              { id: "c", text: "$y=0$" },
              { id: "d", text: "$x=0$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Rational degree comparison", statement: "When numerator degree is less than denominator degree, the horizontal asymptote is $y=0$." },
              { kind: "property", name: "Degree", statement: "The degree of a nonzero polynomial is its greatest exponent with nonzero coefficient." },
            ],
            steps: [
              { reasoning: "The numerator has degree 1 and the denominator has degree 2.", working: "1<2", marks: 1, markCode: "M" },
              { reasoning: "The numerator degree is smaller, so the horizontal asymptote is $y=0$, choice (c).", working: "y=0", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** $y=0$",
            commonErrors: ["Using the numerator's leading coefficient as the horizontal asymptote when the degrees are unequal."],
          },
        },
        {
          id: "pc-u1-1-3-asym-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "The slant asymptote of $R(x)=\\frac{x^2+3x+1}{x-1}$ is $y=mx+b$. Enter $m$ and $b$.",
          response: {
            type: "numeric",
            parts: [
              { label: "$m$", answer: 1 },
              { label: "$b$", answer: 4 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Slant-asymptote criterion", statement: "A rational function has a slant asymptote when the numerator degree is exactly one more than the denominator degree." },
              { kind: "property", name: "Polynomial division", statement: "The quotient in polynomial division gives the slant asymptote when the remainder divided by the denominator tends to zero." },
            ],
            steps: [
              { reasoning: "The numerator degree is 2 and the denominator degree is 1, so divide to find a linear quotient.", working: "x^2+3x+1=(x-1)(x+4)+5", marks: 1, markCode: "M" },
              { reasoning: "Rewrite the rational function as quotient plus remainder over divisor.", working: "R(x)=x+4+\\frac{5}{x-1}", marks: 1, markCode: "A" },
              { reasoning: "The final fraction tends to zero at both ends, so the quotient line is the asymptote.", working: "y=x+4\\implies m=1,\\;b=4", marks: 1, markCode: "R" },
            ],
            finalAnswer: "$m=1$ and $b=4$; the slant asymptote is $y=x+4$.",
            commonErrors: ["Using only leading coefficients when the numerator degree exceeds the denominator degree."],
          },
        },
        {
          id: "pc-u1-1-3-asym-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Analyze $H(x)=\\frac{2x^2-3x+1}{x+1}$. Find its vertical and slant asymptotes, all intercepts, and state whether it has a horizontal asymptote.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Vertical asymptote", statement: "An uncanceled denominator zero gives a vertical asymptote." },
              { kind: "theorem", name: "Polynomial division and slant asymptote", statement: "When the numerator degree exceeds the denominator degree by one, the division quotient is the slant asymptote." },
              { kind: "definition", name: "Intercepts", statement: "$x$-intercepts come from defined zeros of the numerator; the $y$-intercept is $H(0)$ when defined." },
              { kind: "property", name: "Horizontal asymptote criterion", statement: "A horizontal asymptote is determined by degree comparison and is not horizontal when the degree difference is 1." },
              { kind: "property", name: "Polynomial factorization", statement: "A quadratic $ax^2+bx+c$ factors into linear factors whose zeros are its roots." },
            ],
            steps: [
              { reasoning: "The denominator zero is not canceled, so it gives the vertical asymptote.", working: "x+1=0\\implies x=-1", marks: 1, markCode: "A" },
              { reasoning: "Divide the numerator by the denominator to obtain the slant asymptote.", working: "2x^2-3x+1=(x+1)(2x-5)+6\\\\H(x)=2x-5+\\frac{6}{x+1}\\implies y=2x-5", marks: 1, markCode: "M" },
              { reasoning: "Factor the numerator for the $x$-intercepts and evaluate the function at zero for the $y$-intercept.", working: "2x^2-3x+1=(2x-1)(x-1)\\\\x=\\frac12,1;\\qquad H(0)=1", marks: 1, markCode: "A" },
              { reasoning: "The numerator degree exceeds the denominator degree by one, so the end-behavior asymptote is slant, not horizontal.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Vertical asymptote $x=-1$; slant asymptote $y=2x-5$; $x$-intercepts $(\\frac12,0)$ and $(1,0)$; $y$-intercept $(0,1)$; no horizontal asymptote.",
            commonErrors: ["Calling the slant asymptote a horizontal asymptote.", "Forgetting to find both numerator zeros for the $x$-intercepts."],
            examinerNote: "The slant asymptote requires division, and the remainder term must be identified as tending to zero.",
          },
        },
        {
          id: "pc-u1-1-3-asym-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A company's average cost per unit, in dollars, of producing $x$ units is $A(x)=\\frac{0.5x^2+20x+800}{x}$ for $x>0$.",
          parts: [
            { label: "a", prompt: "Rewrite $A(x)$ as a sum of simpler terms and find the vertical and slant asymptotes of its graph. (3 marks)", marks: 3 },
            { label: "b", prompt: "Compare the degrees of numerator and denominator and state whether $A$ has a horizontal asymptote. (1 mark)", marks: 1 },
            { label: "c", prompt: "Find $A(20)$ and $A(40)$ and show that $A(x)$ is greater than the slant line for every $x>0$. (3 marks)", marks: 3 },
            { label: "d", prompt: "Interpret the slant asymptote in terms of costs, and use the vertical asymptote to explain what happens to the average cost for very small production runs. (3 marks)", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Slant-asymptote criterion", statement: "If $\\deg P=\\deg Q+1$, dividing gives $mx+b+\\frac{r}{Q}$ and $y=mx+b$ is the slant asymptote." },
              { kind: "definition", name: "Vertical asymptote", statement: "An uncanceled zero of the denominator gives a vertical asymptote." },
              { kind: "property", name: "Degree comparison", statement: "A horizontal asymptote exists only when $\\deg P\\le\\deg Q$." },
            ],
            steps: [
              { part: "a", reasoning: "Divide each term of the numerator by $x$.", working: "A(x)=0.5x+20+\\frac{800}{x}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "The term $800/x$ is unbounded as $x\\to0^+$ and $x=0$ is not canceled, giving a vertical asymptote.", working: "x=0", marks: 1, markCode: "A" },
              { part: "a", reasoning: "As $x\\to\\infty$, $800/x\\to0$, leaving the slant line.", working: "y=0.5x+20", marks: 1, markCode: "A" },
              { part: "b", reasoning: "The numerator has degree 2, the denominator degree 1, so no horizontal asymptote.", working: "2>1", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Evaluate at 20 and 40.", working: "A(20)=10+20+40=70\\\\A(40)=20+20+20=60", marks: 2, markCode: "A" },
              { part: "c", reasoning: "The difference from the slant line is $800/x$, which is positive for $x>0$.", working: "A(x)-(0.5x+20)=\\frac{800}{x}>0", marks: 1, markCode: "R" },
              { part: "d", reasoning: "For large runs, each extra unit adds about $\\$0.50$ to the average cost, with a base of $\\$20$; fixed costs spread over many units contribute little.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "The fixed cost of $\\$800$ is spread over $x$ units, so the term $800/x$ grows without bound as $x\\to0^+$.", working: "\\frac{800}{x}\\to\\infty\\text{ as }x\\to0^+", marks: 1, markCode: "R" },
              { part: "d", reasoning: "So tiny production runs have extremely high average cost per unit.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $A=0.5x+20+800/x$; vertical asymptote $x=0$; slant asymptote $y=0.5x+20$. (b) No horizontal asymptote. (c) $A(20)=70$, $A(40)=60$; $A$ exceeds the line by $800/x>0$. (d) The slant asymptote reflects $\\$0.50$ per unit plus $\\$20$; small runs have very large average cost.",
            commonErrors: ["Dividing only the first term by $x$.", "Claiming $y=0.5$ is a horizontal asymptote.", "Saying the graph crosses the slant asymptote; here the remainder term is never zero."],
          },
        },
      ],
    },
  ],
};
