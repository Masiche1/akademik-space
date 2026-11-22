import type { Lesson } from "../../../types.ts";

export const lesson71: Lesson = {
  id: "alg2-u7-lesson-7-1",
  code: "7-1",
  title: "Composition and Inverse Functions",
  goal: "I CAN combine functions, determine composite domains, and find and verify inverses with appropriate domain restrictions.",
  standards: ["HSF-BF.A.1b", "HSF-BF.A.1c", "HSF-BF.B.4a", "HSF-BF.B.4b", "HSF-BF.B.4c", "HSF-BF.B.4d"],
  vocabulary: [
    { term: "Function operation", definition: "A sum, difference, product, or quotient formed by applying an arithmetic operation to two function outputs at the same input." },
    { term: "Composition", definition: "The function $(f\\circ g)(x)=f(g(x))$, which applies $g$ first and then applies $f$." },
    { term: "Composite domain", definition: "The inputs in the domain of the inner function whose outputs also lie in the domain of the outer function." },
    { term: "Inverse function", definition: "A function that reverses the input-output mapping of a one-to-one function; $f^{-1}(f(x))=x$." },
    { term: "One-to-one", definition: "A function for which distinct inputs always produce distinct outputs." },
    { term: "Restricted domain", definition: "A specified subset of a function's inputs chosen, when needed, so the function is one-to-one and has an inverse function." },
  ],
  concepts: [
    {
      id: "alg2-u7-function-operations-composition",
      title: "Function operations and composition",
      skill: "Form sums, differences, products, quotients, and composites, and determine their domains.",
      lesson: {
        sections: [
          {
            heading: "Operations on functions",
            body: "For functions $f$ and $g$, combine their outputs at the same input: $(f+g)(x)=f(x)+g(x)$, $(f-g)(x)=f(x)-g(x)$, and $(fg)(x)=f(x)g(x)$. For a quotient, $(f/g)(x)=f(x)/g(x)$, so exclude any input where either function is undefined or $g(x)=0$. The domain of each operation is the overlap of the original domains, with any additional quotient restriction.",
          },
          {
            heading: "Composition and order",
            body: "The notation $(f\\circ g)(x)$ means $f(g(x))$: evaluate the inner function $g$ first, then use that output as the input to $f$. In general, $f\\circ g$ and $g\\circ f$ are different functions. To find a composite domain, an input must be allowed for $g$, and the output $g(x)$ must be allowed as an input to $f$.",
          },
          {
            heading: "Finding a composite domain",
            body: "Start with the restrictions on the inner function. Then impose the outer function's restrictions on the inner output. For example, if $f(x)=\\sqrt{x-1}$ and $g(x)=x+3$, then $(f\\circ g)(x)=\\sqrt{x+2}$, which requires $x+2\\ge 0$. Thus the composite domain is $[-2,\\infty)$.",
          },
        ],
        keyFormulas: [
          { name: "Function operations", statement: "$(f+g)(x)=f(x)+g(x)$; $(fg)(x)=f(x)g(x)$; $(f/g)(x)=\\dfrac{f(x)}{g(x)}$ when $g(x)\\ne 0$." },
          { name: "Composition", statement: "$(f\\circ g)(x)=f(g(x))$; require $x\\in\\operatorname{Dom}(g)$ and $g(x)\\in\\operatorname{Dom}(f)$." },
        ],
        workedExample: {
          problem: "Let $f(x)=\\sqrt{x+1}$ and $g(x)=2x-3$. Find $(f\\circ g)(x)$ and its domain.",
          solution: "Substitute the entire output of $g$ into $f$: $(f\\circ g)(x)=\\sqrt{(2x-3)+1}=\\sqrt{2x-2}$. A real square root requires $2x-2\\ge0$, so $x\\ge1$. The domain is $[1,\\infty)$.",
        },
      },
      questions: [
        {
          id: "alg2-u7-operations-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Let $f(x)=x+4$ and $g(x)=3x$. Which expression equals $(f-g)(x)$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$3x^2+4$" },
              { id: "b", text: "$4+4x$" },
              { id: "c", text: "$x+1$" },
              { id: "d", text: "$4-2x$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Difference of functions", statement: "$(f-g)(x)=f(x)-g(x)$, subtracting the entire second function output." },
            ],
            steps: [
              { reasoning: "Replace each function name with its rule and keep the subtraction between the complete outputs.", working: "(f-g)(x)=(x+4)-3x", marks: 1, markCode: "M" },
              { reasoning: "Combine like terms to obtain the simplified expression.", working: "(x+4)-3x=4-2x", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $(f-g)(x)=4-2x$",
            commonErrors: ["Subtracting only the $x$ term and not the whole output $3x$.", "Multiplying the two functions instead of subtracting them."],
          },
        },
        {
          id: "alg2-u7-operations-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Let $f(x)=2x+1$ and $g(x)=x^2-2$. Find $(f\\circ g)(2)$.",
          response: { type: "numeric", parts: [{ label: "$(f\\circ g)(2)$", answer: 5 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Composition", statement: "$(f\\circ g)(x)=f(g(x))$: apply $g$ before $f$." },
            ],
            steps: [
              { reasoning: "Evaluate the inner function first, since it supplies the input to $f$.", working: "g(2)=2^2-2=2", marks: 1, markCode: "M" },
              { reasoning: "Use that output as the input to the outer function.", working: "f(g(2))=f(2)=2(2)+1", marks: 1, markCode: "M" },
              { reasoning: "Simplify to obtain the composite value.", working: "f(g(2))=5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$(f\\circ g)(2)=5$.",
            commonErrors: ["Applying $f$ first, reversing the order of composition.", "Using $g(2)$ as a multiplier rather than as the input to $f$."],
          },
        },
        {
          id: "alg2-u7-operations-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Let $f(x)=\\sqrt{x-2}$ and $g(x)=5-x$. Find $(f\\circ g)(x)$ and state its domain in interval notation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Composite function", statement: "$(f\\circ g)(x)=f(g(x))$, so the inner output is substituted into the outer rule." },
              { kind: "property", name: "Square-root domain", statement: "For a real-valued square root, its radicand must be greater than or equal to zero." },
            ],
            steps: [
              { reasoning: "Substitute the complete inner rule for the input in the outer function.", working: "(f\\circ g)(x)=\\sqrt{(5-x)-2}=\\sqrt{3-x}", marks: 1, markCode: "M" },
              { reasoning: "Require the radicand to be nonnegative for a real output.", working: "3-x\\ge0", marks: 1, markCode: "M" },
              { reasoning: "Solve the inequality, reversing the direction when multiplying or dividing by a negative number.", working: "-x\\ge-3\\implies x\\le3", marks: 1, markCode: "A" },
              { reasoning: "Include the endpoint because the square root of zero is defined.", working: "\\operatorname{Dom}(f\\circ g)=(-\\infty,3]", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$(f\\circ g)(x)=\\sqrt{3-x}$, with domain $(-\\infty,3]$.",
            commonErrors: ["Writing $\\sqrt{x-2}+5-x$ instead of composing.", "Excluding $x=3$ even though the radicand may equal zero."],
          },
        },
        {
          id: "alg2-u7-operations-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Two functions model stages of a process: $f(x)=\\sqrt{x+4}$ and $g(x)=2x-1$.",
          parts: [
            { label: "a", prompt: "Write a simplified rule for $(f\\circ g)(x)$.", marks: 2 },
            { label: "b", prompt: "State the domain of $f\\circ g$ in interval notation and justify the restriction.", marks: 2 },
            { label: "c", prompt: "Write a simplified rule for $(g\\circ f)(x)$.", marks: 2 },
            { label: "d", prompt: "State the domain of $g\\circ f$ and explain why the two composite domains differ.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Composition order", statement: "$(f\\circ g)(x)=f(g(x))$ and $(g\\circ f)(x)=g(f(x))$; the order of application matters." },
              { kind: "property", name: "Square-root domain", statement: "A real square root requires its radicand to be nonnegative." },
            ],
            steps: [
              { part: "a", reasoning: "Substitute $g(x)$ into $f$ and simplify the radicand.", working: "(f\\circ g)(x)=\\sqrt{(2x-1)+4}=\\sqrt{2x+3}", marks: 2, markCode: "M" },
              { part: "b", reasoning: "Require the radicand to be nonnegative, then solve for the input values.", working: "2x+3\\ge0\\implies x\\ge-\\frac{3}{2};\\quad [-\\frac{3}{2},\\infty)", marks: 2, markCode: "A" },
              { part: "c", reasoning: "Substitute $f(x)$ into the linear function $g$.", working: "(g\\circ f)(x)=2\\sqrt{x+4}-1", marks: 2, markCode: "M" },
              { part: "d", reasoning: "The square root in the inner function $f$ requires $x+4\\ge0$; the outer linear function accepts every real input, so no further restriction applies.", working: "x\\ge-4;\\quad [-4,\\infty)", marks: 2, markCode: "R" },
            ],
            finalAnswer: "(a) $(f\\circ g)(x)=\\sqrt{2x+3}$. (b) Domain $[-\\frac{3}{2},\\infty)$. (c) $(g\\circ f)(x)=2\\sqrt{x+4}-1$. (d) Domain $[-4,\\infty)$; the inner function's allowed inputs differ in the two orders.",
            commonErrors: ["Using the same composite rule for both orders.", "Applying the square-root restriction to the output of a function that has no square root."],
            examinerNote: "A correct interval endpoint is included because a zero radicand is permitted.",
          },
        },
      ],
    },
    {
      id: "alg2-u7-inverse-functions",
      title: "Finding, verifying, and restricting inverses",
      skill: "Find inverse rules, verify them by composition, and restrict domains so an inverse is a function.",
      lesson: {
        sections: [
          {
            heading: "Finding an inverse rule",
            body: "An inverse reverses a function's input-output pairs. To find a candidate rule, write $y=f(x)$, interchange $x$ and $y$, and solve for $y$. Then write the result as $f^{-1}(x)$. The domain of $f^{-1}$ is the range of $f$, and its range is the domain of $f$.",
          },
          {
            heading: "Verification by composition",
            body: "A candidate is the inverse when both compositions return the input: $f(f^{-1}(x))=x$ and $f^{-1}(f(x))=x$ on their appropriate domains. Checking only one composition can miss a domain or range mismatch, so verify both whenever required.",
          },
          {
            heading: "When a domain restriction is needed",
            body: "A function must be one-to-one to have an inverse function. For $f(x)=x^2$ on all real numbers, the inputs $-2$ and $2$ both give $4$, so its inverse relation would not be a function. Restricting the original domain to $x\\ge0$ makes it one-to-one; then $f^{-1}(x)=\\sqrt{x}$, with domain $x\\ge0$.",
          },
        ],
        keyFormulas: [
          { name: "Inverse check", statement: "$f(f^{-1}(x))=x$ and $f^{-1}(f(x))=x$ on the corresponding domains." },
          { name: "Reflection relationship", statement: "The graphs of $f$ and $f^{-1}$ are reflections across $y=x$; the domain and range are interchanged." },
        ],
        workedExample: {
          problem: "Find and verify the inverse of $f(x)=3x-5$.",
          solution: "Write $y=3x-5$, interchange $x$ and $y$ to get $x=3y-5$, and solve: $y=\\frac{x+5}{3}$. Thus $f^{-1}(x)=\\frac{x+5}{3}$. Check: $f(f^{-1}(x))=3(\\frac{x+5}{3})-5=x$, and $f^{-1}(f(x))=\\frac{(3x-5)+5}{3}=x$. Both compositions return the input.",
        },
      },
      questions: [
        {
          id: "alg2-u7-inverses-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "For $f(x)=4x-7$, which is $f^{-1}(x)$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{x-7}{4}$" },
              { id: "b", text: "$\\frac{x+7}{4}$" },
              { id: "c", text: "$4x+7$" },
              { id: "d", text: "$7-4x$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Inverse function", statement: "An inverse reverses input and output: interchange $x$ and $y$, then solve for $y$." },
            ],
            steps: [
              { reasoning: "Interchange input and output variables in $y=4x-7$.", working: "x=4y-7", marks: 1, markCode: "M" },
              { reasoning: "Solve for $y$ to express the inverse as a function of $x$.", working: "4y=x+7\\implies y=\\frac{x+7}{4}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** $f^{-1}(x)=\\frac{x+7}{4}$",
            commonErrors: ["Changing the sign of 7 incorrectly when solving.", "Assuming the inverse is the negative of the original rule."],
          },
        },
        {
          id: "alg2-u7-inverses-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find the inverse of $f(x)=\\frac{x-6}{5}$. Give a simplified rule.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Inverse process", statement: "An inverse reverses a function's mapping; exchanging variables and solving gives its rule." },
            ],
            steps: [
              { reasoning: "Represent the function output with $y$ before interchanging variables.", working: "y=\\frac{x-6}{5}\\implies x=\\frac{y-6}{5}", marks: 1, markCode: "M" },
              { reasoning: "Clear the denominator and isolate the new output variable.", working: "5x=y-6\\implies y=5x+6", marks: 1, markCode: "M" },
              { reasoning: "Name the rule obtained after solving as the inverse.", working: "f^{-1}(x)=5x+6", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$f^{-1}(x)=5x+6$.",
            commonErrors: ["Multiplying $x$ by 5 but not adding 6.", "Leaving the answer in terms of $y$."],
          },
        },
        {
          id: "alg2-u7-inverses-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "The function $f(x)=x^2-4$ has domain $x\\ge0$. Find $f^{-1}(x)$ and verify the inverse by showing that both compositions equal $x$ on the appropriate domains.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Inverse function", statement: "An inverse exchanges domain and range and reverses the function's mapping." },
              { kind: "property", name: "Inverse verification", statement: "$f\\circ f^{-1}$ and $f^{-1}\\circ f$ must each return the input on their appropriate domains." },
              { kind: "property", name: "Nonnegative square root", statement: "The principal square root is nonnegative, matching the restricted original domain $x\\ge0$." },
            ],
            steps: [
              { reasoning: "Interchange input and output, then solve for the nonnegative original input because the domain is restricted to $x\\ge0$.", working: "y=x^2-4\\implies x=y^2-4\\implies y=\\sqrt{x+4}", marks: 1, markCode: "M" },
              { reasoning: "The range of the original function is $[-4,\\infty)$, so this is the domain of its inverse.", working: "f^{-1}(x)=\\sqrt{x+4},\\quad x\\ge-4", marks: 1, markCode: "A" },
              { reasoning: "Substitute the inverse into the original function; the inverse's output is nonnegative, so it satisfies the original restricted domain.", working: "f(f^{-1}(x))=(\\sqrt{x+4})^2-4=x\\quad(x\\ge-4)", marks: 1, markCode: "M" },
              { reasoning: "Substitute the original function into the inverse and use $x\\ge0$ to select the principal root.", working: "f^{-1}(f(x))=\\sqrt{x^2-4+4}=\\sqrt{x^2}=x\\quad(x\\ge0)", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$f^{-1}(x)=\\sqrt{x+4}$ for $x\\ge-4$; both compositions equal $x$ on the stated domains.",
            commonErrors: ["Using $-\\sqrt{x+4}$ despite the original domain $x\\ge0$.", "Claiming $\\sqrt{x^2}=-x$ or $|x|$ without using the restricted domain."],
          },
        },
        {
          id: "alg2-u7-inverses-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A function is defined by $f(x)=x^2-1$ on its natural domain. Its graph is a parabola with vertex $(0,-1)$.",
          parts: [
            { label: "a", prompt: "Explain why $f$ does not have an inverse function on its natural domain.", marks: 2 },
            { label: "b", prompt: "Restrict the domain to $x\\ge0$. Find the inverse rule and state its domain.", marks: 3 },
            { label: "c", prompt: "Verify that $f(f^{-1}(x))=x$ for the inverse from part (b), including the domain on which this identity holds.", marks: 2 },
            { label: "d", prompt: "If instead the original domain is restricted to $x\\le0$, state the inverse rule and explain how it differs.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "One-to-one condition", statement: "A function has an inverse function only when it is one-to-one on its domain." },
              { kind: "property", name: "Inverse domain and range", statement: "The domain of an inverse equals the range of the original function." },
              { kind: "property", name: "Square root branches", statement: "Solving $y=x^2-1$ gives two square-root branches; the original domain restriction selects one branch." },
            ],
            steps: [
              { part: "a", reasoning: "Show two distinct inputs produce the same output on the natural domain, violating the one-to-one condition.", working: "f(-2)=3=f(2),\\quad -2\\ne2", marks: 2, markCode: "R" },
              { part: "b", reasoning: "Solve the exchanged equation and select the nonnegative branch because the restricted original inputs satisfy $x\\ge0$.", working: "y=x^2-1\\implies x=y^2-1\\implies y=\\sqrt{x+1};\\quad f^{-1}(x)=\\sqrt{x+1}", marks: 2, markCode: "M" },
              { part: "b", reasoning: "The original range begins at $-1$, which becomes the inverse domain.", working: "x\\ge-1", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Substitute the inverse into the original rule; the inverse produces a nonnegative value in the restricted domain.", working: "f(f^{-1}(x))=(\\sqrt{x+1})^2-1=x,\\quad x\\ge-1", marks: 2, markCode: "A" },
              { part: "d", reasoning: "The nonpositive restriction selects the negative square-root branch instead.", working: "f^{-1}(x)=-\\sqrt{x+1},\\quad x\\ge-1", marks: 2, markCode: "A" },
            ],
            finalAnswer: "(a) $f$ is not one-to-one since $f(-2)=f(2)$. (b) With $x\\ge0$, $f^{-1}(x)=\\sqrt{x+1}$, domain $[-1,\\infty)$. (c) $f(f^{-1}(x))=x$ for $x\\ge-1$. (d) With $x\\le0$, $f^{-1}(x)=-\\sqrt{x+1}$, domain $[-1,\\infty)$.",
            commonErrors: ["Failing to give distinct inputs as evidence that the original function is not one-to-one.", "Forgetting the inverse domain starts at $-1$.", "Choosing the same square-root sign for both domain restrictions."],
            examinerNote: "For part (c), the inverse's domain is $x\\ge-1$; the other composition identity has input domain $x\\ge0$.",
          },
        },
      ],
    },
  ],
};
