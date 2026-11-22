import type { Lesson } from "../../../types.ts";

export const lesson62: Lesson = {
  id: "alg2-u6-6-2",
  code: "6-2",
  title: "Logarithms",
  goal: "I CAN interpret logarithms as inverse exponents, graph logarithmic functions, and apply logarithm laws.",
  standards: ["HSF-BF.B.4", "HSF-LE.A.4"],
  vocabulary: [
    { term: "Logarithm", definition: "The exponent $y$ such that $b^y=x$, written $\\log_b x=y$ for $b>0$, $b\\ne1$, and $x>0$." },
    { term: "Common logarithm", definition: "A logarithm with base 10, written $\\log x$ when the base is understood." },
    { term: "Natural logarithm", definition: "A logarithm with base $e$, written $\\ln x$." },
    { term: "Inverse functions", definition: "Functions $f$ and $g$ that undo each other: $f(g(x))=x$ and $g(f(x))=x$ on their domains." },
    { term: "Change-of-base formula", definition: "The identity $\\log_b x=\\frac{\\log x}{\\log b}$ for any valid logarithm base." },
    { term: "Logarithm law", definition: "An identity that rewrites logarithms of products, quotients, or powers as sums, differences, or multiples." },
  ],
  concepts: [
    {
      id: "alg2-u6-log-definition-graphs",
      title: "Logarithmic definition and inverse graphs",
      skill: "Convert between logarithmic and exponential forms, evaluate logs, and describe logarithmic graphs as inverses.",
      lesson: {
        sections: [
          {
            heading: "A logarithm names an exponent",
            body: "The statement $\\log_b x=y$ means exactly $b^y=x$. The base must satisfy $b>0$ and $b\\ne1$, and the logarithm's argument must be positive. For instance, $\\log_2 8=3$ because $2^3=8$. When no base is shown, $\\log$ means base 10; $\\ln$ means base $e$.",
          },
          {
            heading: "Evaluate by recognizing powers",
            body: "Ask which exponent on the base produces the argument. Thus $\\log_5 1=0$ because $5^0=1$, and $\\log_3(1/9)=-2$ because $3^{-2}=1/9$. If the argument is not an obvious power, use a calculator or change of base, and keep enough precision until the final rounding.",
          },
          {
            heading: "Graphs are reflections across $y=x$",
            body: "The logarithm $y=\\log_b x$ is the inverse of $y=b^x$, so their graphs reflect across the line $y=x$. The logarithmic domain is $(0,\\infty)$, the range is all real numbers, and its vertical asymptote is $x=0$. The points $(1,0)$ and $(b,1)$ are on the graph because $\\log_b1=0$ and $\\log_bb=1$.",
          },
        ],
        keyFormulas: [
          { name: "Definition", statement: "$\\log_b x=y \\iff b^y=x$, with $b>0$, $b\\ne1$, and $x>0$." },
          { name: "Inverse relationship", statement: "$y=\\log_b x$ is the inverse of $y=b^x$; the graphs reflect over $y=x$." },
          { name: "Log graph domain", statement: "$\\operatorname{Dom}(\\log_b x)=(0,\\infty)$; range $\\mathbb{R}$; vertical asymptote $x=0$." },
        ],
        workedExample: {
          problem: "Evaluate $\\log_4(1/64)$ and describe the point it gives on the graph of $y=\\log_4 x$.",
          solution: "By definition, find $y$ so that $4^y=1/64$. Since $1/64=4^{-3}$, $y=-3$. The graph contains the point $(1/64,-3)$; the coordinate order reverses the exponential point $(-3,1/64)$.",
        },
      },
      questions: [
        {
          id: "alg2-u6-log-definition-graphs-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which exponential equation is equivalent to $\\log_3 81=4$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$81^4=3$" },
              { id: "b", text: "$4^3=81$" },
              { id: "c", text: "$3^{81}=4$" },
              { id: "d", text: "$3^4=81$" },
            ],
            dorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Logarithmic form", statement: "$\\log_b x=y$ if and only if $b^y=x$." },
            ],
            steps: [
              { reasoning: "In $\\log_b x=y$, the base is 3, the argument is 81, and the exponent is 4.", working: "\\log_3 81=4 \\iff 3^4=81", marks: 1, markCode: "M" },
              { reasoning: "The equivalent exponential statement is choice (c).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** $3^4=81$.",
            commonErrors: ["Reversing the argument and exponent.", "Using 81 as the base."],
          },
        },
        {
          id: "alg2-u6-log-definition-graphs-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Evaluate $\\log_2(1/8)$. Enter an integer.",
          response: { type: "numeric", parts: [{ label: "$\\log_2(1/8)$", answer: -3 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Logarithmic definition", statement: "$\\log_b x=y$ exactly when $b^y=x$." },
              { kind: "law", name: "Negative exponent", statement: "$b^{-n}=1/b^n$ for $b\\ne0$." },
            ],
            steps: [
              { reasoning: "Rewrite the logarithm as an exponent question.", working: "2^y=\\frac{1}{8}", marks: 1, markCode: "M" },
              { reasoning: "Recognize that $1/8$ is the reciprocal of $2^3$.", working: "\\frac{1}{8}=2^{-3}", marks: 1, markCode: "A" },
              { reasoning: "The required exponent is therefore negative three.", working: "y=-3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\log_2(1/8)=-3$.",
            commonErrors: ["Giving $3$ and overlooking that the argument is a fraction less than 1.", "Treating the logarithm as multiplication."],
          },
        },
        {
          id: "alg2-u6-log-definition-graphs-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "The function $f(x)=\\log_2(x-1)+3$ is a transformation of $y=\\log_2 x$. State its vertical asymptote and domain, then find the $x$-intercept to the nearest hundredth.",
          response: { type: "numeric", parts: [{ label: "$x$-intercept", answer: 1 + 1 / 8, tolerance: 0.01 }] },
          markscheme: {
            principles: [
              { kind: "property", name: "Logarithm domain", statement: "A logarithm's argument must be strictly positive." },
              { kind: "property", name: "Logarithmic asymptote", statement: "$\\log_b(x-h)+k$ has vertical asymptote $x=h$." },
              { kind: "definition", name: "Logarithmic form", statement: "$\\log_b u=v$ is equivalent to $b^v=u$." },
            ],
            steps: [
              { reasoning: "The argument $x-1$ is positive only to the right of its zero, and that boundary is the vertical asymptote.", working: "x-1>0 \\implies x>1;\\quad x=1", marks: 2, markCode: "R" },
              { reasoning: "Set the output equal to zero to find the intercept.", working: "0=\\log_2(x-1)+3 \\implies \\log_2(x-1)=-3", marks: 1, markCode: "M" },
              { reasoning: "Convert to exponential form and round to the hundredth.", working: "x-1=2^{-3}=\\frac18 \\implies x=1.125\\approx1.13", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Asymptote $x=1$; domain $(1,\\infty)$; $x$-intercept $x\\approx1.13$.",
            commonErrors: ["Using domain $[1,\\infty)$ even though the log argument cannot be zero.", "Treating the vertical asymptote as $y=1$."],
          },
        },
        {
          id: "alg2-u6-log-definition-graphs-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Consider the pair of inverse functions $y=2^x$ and $y=\\log_2 x$.",
          parts: [
            { label: "a", prompt: "Evaluate $\\log_2 16$. (1 mark)", marks: 1 },
            { label: "b", prompt: "State the domain and range of $y=\\log_2 x$. (2 marks)", marks: 2 },
            { label: "c", prompt: "Give the vertical asymptote of $y=\\log_2 x$ and explain its relation to the exponential graph's horizontal asymptote. (2 marks)", marks: 2 },
            { label: "d", prompt: "State the reflection line and use it to give the logarithmic point corresponding to $(3,8)$ on $y=2^x$. (3 marks)", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Logarithm", statement: "$\\log_b x=y$ if and only if $b^y=x$." },
              { kind: "property", name: "Inverse graph reflection", statement: "Inverse functions' graphs reflect across $y=x$, which swaps each point's coordinates." },
              { kind: "property", name: "Asymptotes of inverse graphs", statement: "Reflection across $y=x$ interchanges horizontal and vertical asymptotes." },
            ],
            steps: [
              { part: "a", reasoning: "Find the exponent on 2 that produces 16.", working: "2^4=16 \\implies \\log_2 16=4", marks: 1, markCode: "A" },
              { part: "b", reasoning: "The logarithm argument must be positive; its output can be any real exponent.", working: "\\operatorname{Dom}=(0,\\infty);\\quad \\operatorname{Range}=(-\\infty,\\infty)", marks: 2, markCode: "A" },
              { part: "c", reasoning: "The exponential's horizontal asymptote $y=0$ becomes a vertical asymptote when reflected across $y=x$.", working: "x=0", marks: 2, markCode: "R" },
              { part: "d", reasoning: "Inverse graphs reflect across the line whose equation is $y=x$.", working: "y=x", marks: 1, markCode: "B" },
              { part: "d", reasoning: "A reflection across $y=x$ swaps the coordinates of the given exponential point.", working: "(3,8)\\mapsto(8,3)", marks: 2, markCode: "R" },
            ],
            finalAnswer: "(a) $4$; (b) domain $(0,\\infty)$ and range $\\mathbb{R}$; (c) vertical asymptote $x=0$; (d) reflection line $y=x$, corresponding point $(8,3)$.",
            commonErrors: ["Swapping the domain and range of the logarithm incorrectly.", "Reflecting across an axis instead of across $y=x$."],
            examinerNote: "The asymptote relation is tested by reflecting the exponential graph's horizontal asymptote, not by substituting into the function.",
          },
        },
      ],
    },
    {
      id: "alg2-u6-log-laws",
      title: "Logarithm laws and rewriting",
      skill: "Apply product, quotient, and power laws and use change of base to expand, condense, or evaluate logarithmic expressions.",
      lesson: {
        sections: [
          {
            heading: "Three logarithm laws",
            body: "For positive $M$ and $N$ and a valid base $b$, a product becomes a sum: $\\log_b(MN)=\\log_b M+\\log_b N$. A quotient becomes a difference: $\\log_b(M/N)=\\log_b M-\\log_b N$. A power moves to a coefficient: $\\log_b(M^p)=p\\log_b M$. These laws follow from exponent rules and are valid only when the logarithm arguments are positive.",
          },
          {
            heading: "Expand and condense carefully",
            body: "To expand, split products and quotients and bring exponents down as coefficients. To condense, reverse the process: coefficients become exponents, sums become products, and differences become quotients. A minus sign between terms means division, not subtraction inside an argument unless the expression has first been combined as a quotient.",
          },
          {
            heading: "Change of base",
            body: "A calculator can evaluate common and natural logarithms, so convert other bases with $\\log_b x=\\frac{\\ln x}{\\ln b}$ or $\\frac{\\log x}{\\log b}$. Keep the quotient unrounded until the end. The change-of-base formula also confirms that logarithms are defined only when both the base and argument meet the definition's restrictions.",
          },
        ],
        keyFormulas: [
          { name: "Product law", statement: "$\\log_b(MN)=\\log_b M+\\log_b N$" },
          { name: "Quotient law", statement: "$\\log_b(M/N)=\\log_b M-\\log_b N$" },
          { name: "Power law", statement: "$\\log_b(M^p)=p\\log_b M$" },
          { name: "Change of base", statement: "$\\log_b x=\\frac{\\ln x}{\\ln b}=\\frac{\\log x}{\\log b}$" },
        ],
        workedExample: {
          problem: "Expand $\\log_3\\left(\\frac{x^2\\sqrt{y}}{z^4}\\right)$, assuming $x,y,z>0$.",
          solution: "Use the quotient law, then the product and power laws: $\\log_3(x^2)+\\log_3(y^{1/2})-\\log_3(z^4)=2\\log_3x+\\frac12\\log_3y-4\\log_3z$.",
        },
      },
      questions: [
        {
          id: "alg2-u6-log-laws-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which expression is equivalent to $\\log_5(25x)$, for $x>0$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$2+\\log_5 x$" },
              { id: "b", text: "$2\\log_5 x$" },
              { id: "c", text: "$\\log_5 25\\cdot\\log_5 x$" },
              { id: "d", text: "$25\\log_5 x$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Product law", statement: "$\\log_b(MN)=\\log_b M+\\log_b N$." },
              { kind: "definition", name: "Logarithm of a power", statement: "$\\log_b(b^k)=k$." },
            ],
            steps: [
              { reasoning: "Separate the product into a sum using the product law.", working: "\\log_5(25x)=\\log_5 25+\\log_5 x", marks: 1, markCode: "M" },
              { reasoning: "Since $25=5^2$, its base-5 logarithm is 2.", working: "2+\\log_5 x", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $2+\\log_5 x$.",
            commonErrors: ["Multiplying logarithms instead of adding them for a product.", "Moving the 25 inside as a coefficient."],
          },
        },
        {
          id: "alg2-u6-log-laws-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Evaluate $\\log_2 12-\\log_2 3$. Enter an integer.",
          response: { type: "numeric", parts: [{ label: "Value", answer: 2 }] },
          markscheme: {
            principles: [
              { kind: "law", name: "Quotient law", statement: "$\\log_b M-\\log_b N=\\log_b(M/N)$ for positive $M,N$." },
              { kind: "definition", name: "Logarithm", statement: "$\\log_b x=y$ exactly when $b^y=x$." },
            ],
            steps: [
              { reasoning: "Combine the difference using the quotient law.", working: "\\log_2 12-\\log_2 3=\\log_2(12/3)", marks: 1, markCode: "M" },
              { reasoning: "Simplify the argument.", working: "\\log_2 4", marks: 1, markCode: "A" },
              { reasoning: "Since $2^2=4$, the logarithm equals 2.", working: "2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2$.",
            commonErrors: ["Subtracting the arguments to get $\\log_2 9$.", "Subtracting the logarithms as though they were ordinary numbers without using the law."],
          },
        },
        {
          id: "alg2-u6-log-laws-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Use change of base to evaluate $\\log_3 20$ to the nearest hundredth.",
          response: { type: "numeric", parts: [{ label: "$\\log_3 20$", answer: Math.log(20) / Math.log(3), tolerance: 0.01 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Change of base", statement: "$\\log_b x=\\frac{\\ln x}{\\ln b}$ for valid $b$ and positive $x$." },
              { kind: "principle", name: "Rounding", statement: "Round the final value to the requested decimal place after calculation." },
            ],
            steps: [
              { reasoning: "Rewrite the non-calculator-base logarithm as a quotient of natural logarithms.", working: "\\log_3 20=\\frac{\\ln 20}{\\ln 3}", marks: 2, markCode: "M" },
              { reasoning: "Evaluate the quotient, retaining precision until the end.", working: "\\frac{\\ln 20}{\\ln 3}\\approx2.7268", marks: 1, markCode: "A" },
              { reasoning: "Round to the nearest hundredth.", working: "\\log_3 20\\approx2.73", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\log_3 20\\approx2.73$.",
            commonErrors: ["Reversing numerator and denominator in the change-of-base quotient.", "Rounding intermediate calculator values too early."],
          },
        },
        {
          id: "alg2-u6-log-laws-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Assume all variables are positive. Work with $E=\\log_2\\left(\\frac{8x^3}{\\sqrt{y}}\\right)$.",
          parts: [
            { label: "a", prompt: "Expand $E$ completely. (3 marks)", marks: 3 },
            { label: "b", prompt: "Evaluate $E$ when $x=2$ and $y=16$. (2 marks)", marks: 2 },
            { label: "c", prompt: "Condense $3\\log_2 a-\\log_2 b+\\frac12\\log_2 c$ into one logarithm. (3 marks)", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "law", name: "Product, quotient, and power laws", statement: "$\\log_b(MN)=\\log_bM+\\log_bN$, $\\log_b(M/N)=\\log_bM-\\log_bN$, and $\\log_b(M^p)=p\\log_bM$." },
              { kind: "definition", name: "Logarithm evaluation", statement: "$\\log_b(b^k)=k$." },
            ],
            steps: [
              { part: "a", reasoning: "Use the quotient law to separate numerator and denominator, then split the numerator product.", working: "E=\\log_2 8+\\log_2 x^3-\\log_2(y^{1/2})", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Apply the power law and evaluate the logarithm of 8.", working: "E=3+3\\log_2 x-\\frac12\\log_2 y", marks: 2, markCode: "A" },
              { part: "b", reasoning: "Substitute the given values into the expanded form and use $\\log_2 2=1$ and $\\log_2 16=4$.", working: "E=3+3(1)-\\frac12(4)=4", marks: 2, markCode: "A" },
              { part: "c", reasoning: "Move coefficients to become exponents, then combine addition as multiplication and subtraction as division.", working: "3\\log_2a-\\log_2b+\\frac12\\log_2c=\\log_2a^3-\\log_2b+\\log_2c^{1/2}=\\log_2\\left(\\frac{a^3\\sqrt c}{b}\\right)", marks: 3, markCode: "M" },
            ],
            finalAnswer: "(a) $3+3\\log_2x-\\frac12\\log_2y$; (b) $E=4$; (c) $\\log_2\\left(\\frac{a^3\\sqrt c}{b}\\right)$.",
            commonErrors: ["Using addition rather than subtraction for the denominator term in part (a).", "Treating $\\sqrt y$ as $y^2$ instead of $y^{1/2}$.", "Writing $a^3-b+c^{1/2}$ as the single logarithm argument in part (c)."],
            examinerNote: "All arguments in part (c) are positive by assumption, so the combined expression is defined.",
          },
        },
      ],
    },
  ],
};
