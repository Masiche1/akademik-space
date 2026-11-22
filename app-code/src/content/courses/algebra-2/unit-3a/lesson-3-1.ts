import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "alg2-3a-3-1",
  code: "3-1",
  title: "Domain and Range Functions",
  goal: "I CAN determine whether a relation is a function, and state its domain and range.",
  standards: ["HSF-IF.A.1", "HSF-IF.A.2", "HSF-IF.B.5"],
  vocabulary: [
    { term: "Relation", definition: "Any set of ordered pairs $(x, y)$ pairing inputs with outputs." },
    { term: "Function", definition: "A relation in which every input is paired with exactly one output." },
    { term: "Domain", definition: "The set of all possible input ($x$) values of a relation." },
    { term: "Range", definition: "The set of all output ($y$) values actually produced by the relation." },
    { term: "Continuous", definition: "A graph or data set with no breaks: every value in an interval is included." },
    { term: "Discrete", definition: "A data set made of separate, countable points with gaps between them." },
    { term: "One-to-one", definition: "A function in which every output comes from exactly one input." },
  ],
  concepts: [
    {
      id: "alg2-3a-relations-vs-functions",
      title: "Relations vs functions",
      skill: "Decide whether a relation given as ordered pairs, a mapping, a table or a graph is a function.",
      lesson: {
        sections: [
          {
            heading: "What makes a relation a function?",
            body: "A **relation** is any pairing of inputs with outputs. A **function** is a special relation: each input has **exactly one** output.\n\nOutputs are allowed to repeat. Inputs are not allowed to be paired with two different outputs. For example, $\\{(1, 4), (2, 4), (3, 9)\\}$ is a function (the output 4 repeats, which is fine), but $\\{(1, 4), (1, 5)\\}$ is not, because the input 1 is sent to both 4 and 5.",
          },
          {
            heading: "The vertical line test",
            body: "On a graph, inputs run along the $x$-axis. If any **vertical line** crosses the graph more than once, then one $x$-value has two or more $y$-values, so the graph is **not** a function.\n\nA circle such as $x^2 + y^2 = 25$ fails the test: the line $x = 3$ meets it at $(3, 4)$ and $(3, -4)$.",
          },
          {
            heading: "Equations",
            body: "To test an equation, solve for $y$. If any single $x$ produces two values of $y$ (for example, a $\\pm$ appears), the equation is not a function. $y = x^2$ is a function; $y^2 = x$ gives $y = \\pm\\sqrt{x}$, so it is not.",
          },
        ],
        keyFormulas: [
          { name: "Definition of a function", statement: "For every $x$ in the domain, there is exactly one $y$ with $(x, y)$ in the relation." },
        ],
        workedExample: {
          problem: "Is the relation $\\{(-2, 3), (0, 3), (2, 5), (-2, 7)\\}$ a function?",
          solution: "List the inputs: $-2, 0, 2, -2$. The input $-2$ appears twice, paired with $3$ and with $7$. One input has two outputs, so the relation is **not a function**.",
        },
      },
      questions: [
        {
          id: "alg2-3a-rvf-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which of the following relations is a function?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\{(-3, 1), (-1, 2), (-3, 4), (5, 6)\\}$" },
              { id: "b", text: "$\\{(1, 2), (1, 3), (2, 4), (3, 5)\\}$" },
              { id: "c", text: "$\\{(0, 0), (2, 1), (2, -1), (8, 2)\\}$" },
              { id: "d", text: "$\\{(4, -1), (5, -1), (6, -1), (7, -1)\\}$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Function", statement: "A relation is a function if and only if each input ($x$-value) is paired with exactly one output ($y$-value)." },
              { kind: "property", name: "Repeated outputs", statement: "Different inputs may share the same output; this does not break the definition." },
            ],
            steps: [
              { reasoning: "Check each relation for a repeated input with different outputs.", working: "(a): x = 1 \\to 2 \\text{ and } 3 \\quad (c): x = 2 \\to 1 \\text{ and } -1 \\quad (d): x = -3 \\to 1 \\text{ and } 4", marks: 1, markCode: "M" },
              { reasoning: "In (b) the inputs $4, 5, 6, 7$ are all different. Every input has one output (all equal to $-1$, which is allowed).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** $\\{(4, -1), (5, -1), (6, -1), (7, -1)\\}$",
            commonErrors: [
              "Rejecting (b) because all outputs are the same. Repeated outputs are allowed; repeated inputs with different outputs are not.",
            ],
          },
        },
        {
          id: "alg2-3a-rvf-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Determine whether the equation $x^2 + y^2 = 16$ defines $y$ as a function of $x$. Justify your answer algebraically.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Yes, because every $x$ in $[-4, 4]$ gives a value of $y$." },
              { id: "b", text: "No, because for example $x = 0$ gives $y = 4$ and $y = -4$." },
              { id: "c", text: "No, because $x$ cannot be negative." },
              { id: "d", text: "Yes, because it passes the horizontal line test." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Function", statement: "Each $x$ must produce exactly one $y$." },
              { kind: "principle", name: "Vertical line test", statement: "A graph represents a function if and only if no vertical line intersects it more than once." },
              { kind: "property", name: "Square root property", statement: "If $y^2 = k$ with $k > 0$, then $y = \\sqrt{k}$ or $y = -\\sqrt{k}$." },
            ],
            steps: [
              { reasoning: "Solve the equation for $y$.", working: "y^2 = 16 - x^2 \\implies y = \\pm\\sqrt{16 - x^2}", marks: 1, markCode: "M" },
              { reasoning: "Choose a specific input to show two outputs exist.", working: "x = 0: \\quad y = \\pm\\sqrt{16} = \\pm 4", marks: 1, markCode: "A" },
              { reasoning: "One input ($x = 0$) is paired with two outputs, so the definition fails. Geometrically, the graph is a circle of radius 4, which fails the vertical line test.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "**Not a function.** $x = 0$ gives both $y = 4$ and $y = -4$.",
            commonErrors: [
              "Confusing the horizontal line test (one-to-one) with the vertical line test (function).",
              "Taking only the positive square root, which loses the second output.",
            ],
            examinerNote: "A counterexample with a specific value of $x$ is required for the reasoning mark; a general statement such as 'circles are not functions' earns only partial credit.",
          },
        },
        {
          id: "alg2-3a-rvf-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "The relation $R = \\{(1, 5), (k, 8), (3, 2), (4, 5)\\}$ is **not** a function. Given that $k$ is a positive integer less than 5, find all possible values of $k$. Enter the values as a list.",
          response: {
            type: "numeric",
            parts: [
              { label: "Smallest $k$", answer: 1 },
              { label: "Next $k$", answer: 3 },
              { label: "Largest $k$", answer: 4 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Function", statement: "A relation fails to be a function exactly when some input is paired with two different outputs." },
            ],
            steps: [
              { reasoning: "For $R$ to fail, the input $k$ must equal an input already used, with an output different from 8.", working: "\\text{Existing inputs: } 1 \\to 5,\\; 3 \\to 2,\\; 4 \\to 5", marks: 1, markCode: "M" },
              { reasoning: "Every existing input has an output other than 8, so $k = 1$, $k = 3$ or $k = 4$ each create a conflict.", marks: 1, markCode: "A" },
              { reasoning: "If $k = 2$, the inputs $1, 2, 3, 4$ are distinct, so $R$ would be a function. Hence $k = 2$ is excluded.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "$k = 1, 3, 4$",
            commonErrors: ["Including $k = 2$, which makes every input distinct."],
          },
        },
        {
          id: "alg2-3a-rvf-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A courier company records price quotes as a relation $S$ that pairs a package's weight $w$ (in pounds) with the price $p$ (in dollars) it was quoted:\n\n$$S = \\{(1, 6), (2, 6), (3, 9), (3, 11), (5, 14)\\}$$",
          parts: [
            { label: "a", prompt: "State the domain and the range of $S$.", marks: 2 },
            { label: "b", prompt: "Explain why $S$ is not a function, naming the input responsible.", marks: 2 },
            { label: "c", prompt: "The company deletes exactly one ordered pair so that the relation becomes a function. List both possible pairs it could delete and, for each choice, state the range of the resulting function.", marks: 2 },
            { label: "d", prompt: "A manager claims that the resulting function must be one-to-one because every weight in its domain is different. Evaluate this claim.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Domain and range", statement: "The domain is the set of all inputs ($w$-values); the range is the set of all outputs ($p$-values). A repeated value is listed once." },
              { kind: "definition", name: "Function", statement: "A relation is a function if and only if each input is paired with exactly one output." },
              { kind: "definition", name: "One-to-one", statement: "A function is one-to-one if different inputs always give different outputs: $f(a) = f(b) \\implies a = b$." },
            ],
            steps: [
              { part: "a", reasoning: "Collect the first coordinates, listing the repeated input $3$ once.", working: "\\text{Domain} = \\{1, 2, 3, 5\\}", marks: 1, markCode: "B" },
              { part: "a", reasoning: "Collect the second coordinates, listing the repeated output $6$ once.", working: "\\text{Range} = \\{6, 9, 11, 14\\}", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Look for an input that appears in two ordered pairs with different outputs.", working: "(3, 9) \\text{ and } (3, 11)", marks: 1, markCode: "M" },
              { part: "b", reasoning: "The input $w = 3$ is paired with two different prices, $9$ and $11$, which breaks the definition of a function.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Deleting $(3, 9)$ leaves each input with one output. The remaining outputs are $6, 6, 11, 14$.", working: "\\text{Delete } (3, 9): \\text{ range} = \\{6, 11, 14\\}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Deleting $(3, 11)$ also works. The remaining outputs are $6, 6, 9, 14$.", working: "\\text{Delete } (3, 11): \\text{ range} = \\{6, 9, 14\\}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Find two different inputs with the same output.", working: "f(1) = 6 = f(2) \\text{ but } 1 \\ne 2", marks: 1, markCode: "M" },
              { part: "d", reasoning: "The claim confuses the two ideas. Different inputs are needed for a function; one-to-one requires different inputs to give different outputs, which fails here. The claim is false.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) Domain $\\{1, 2, 3, 5\\}$, range $\\{6, 9, 11, 14\\}$. (b) The input $3$ has outputs $9$ and $11$. (c) Delete $(3, 9)$: range $\\{6, 11, 14\\}$; delete $(3, 11)$: range $\\{6, 9, 14\\}$. (d) False: $f(1) = f(2) = 6$, so it is not one-to-one.",
            commonErrors: [
              "Listing the repeated output $6$ twice in the range.",
              "Thinking a function cannot repeat an output, or that distinct inputs guarantee distinct outputs.",
            ],
          },
        },
      ],
    },
    {
      id: "alg2-3a-domain-range",
      title: "Domain and range from graphs and equations",
      skill: "State the domain and range of a function using inequalities and interval notation.",
      lesson: {
        sections: [
          {
            heading: "Reading domain and range from a graph",
            body: "The **domain** is the horizontal extent of the graph: read from left to right. The **range** is the vertical extent: read from bottom to top.\n\nA closed dot means the endpoint is included (use $[$ or $]$, or $\\le$). An open dot means it is excluded (use $($ or $)$, or $<$). An arrow means the graph continues forever (use $\\infty$, always with a parenthesis).",
          },
          {
            heading: "Restrictions from equations",
            body: "When no graph is given, the domain is all real numbers **except** values that make the expression undefined:\n\n- **Division by zero**: in $\\dfrac{1}{x - 3}$, exclude $x = 3$.\n- **Even roots of negatives**: in $\\sqrt{x + 2}$, require $x + 2 \\ge 0$, so $x \\ge -2$.\n\nThe range is found by asking which outputs can actually occur. For $f(x) = x^2 + 1$, since $x^2 \\ge 0$, every output satisfies $f(x) \\ge 1$.",
          },
        ],
        keyFormulas: [
          { name: "Interval notation", statement: "$a \\le x < b \\iff x \\in [a, b)$" },
          { name: "Square root domain", statement: "$\\sqrt{g(x)}$ is defined over the reals when $g(x) \\ge 0$." },
        ],
        workedExample: {
          problem: "Find the domain and range of $f(x) = \\sqrt{x - 5} + 2$.",
          solution: "**Domain**: require $x - 5 \\ge 0$, so $x \\ge 5$, i.e. $[5, \\infty)$.\n\n**Range**: $\\sqrt{x - 5} \\ge 0$, so $f(x) \\ge 0 + 2 = 2$, i.e. $[2, \\infty)$.",
        },
      },
      questions: [
        {
          id: "alg2-3a-dr-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A function's graph is a line segment from the closed point $(-2, 1)$ to the open point $(4, 7)$. Which statement gives its domain and range?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Domain $[1, 7)$, range $[-2, 4)$" },
              { id: "b", text: "Domain $[-2, 4]$, range $[1, 7]$" },
              { id: "c", text: "Domain $(-2, 4)$, range $(1, 7)$" },
              { id: "d", text: "Domain $[-2, 4)$, range $[1, 7)$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Domain and range", statement: "Domain = set of $x$-values; range = set of $y$-values of the graph." },
              { kind: "principle", name: "Endpoint notation", statement: "Closed dot $\\Rightarrow$ included, square bracket. Open dot $\\Rightarrow$ excluded, round bracket." },
            ],
            steps: [
              { reasoning: "The $x$-values run from $-2$ (included) to $4$ (excluded).", working: "-2 \\le x < 4 \\implies [-2, 4)", marks: 1, markCode: "B" },
              { reasoning: "The segment rises from $y = 1$ (included) to $y = 7$ (excluded).", working: "1 \\le y < 7 \\implies [1, 7)", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Domain $[-2, 4)$, range $[1, 7)$",
            commonErrors: ["Swapping domain and range (option c).", "Ignoring the closed/open distinction at endpoints."],
          },
        },
        {
          id: "alg2-3a-dr-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find the domain of $g(x) = \\sqrt{12 - 3x}$. Give the largest value of $x$ in the domain.",
          response: { type: "numeric", parts: [{ label: "Largest $x$", answer: 4 }] },
          markscheme: {
            principles: [
              { kind: "property", name: "Real square roots", statement: "$\\sqrt{u}$ is a real number only when $u \\ge 0$." },
              { kind: "law", name: "Inequality division rule", statement: "Dividing both sides of an inequality by a negative number reverses the inequality sign." },
            ],
            steps: [
              { reasoning: "Set the radicand greater than or equal to zero.", working: "12 - 3x \\ge 0", marks: 1, markCode: "M" },
              { reasoning: "Subtract 12, then divide by $-3$, reversing the sign.", working: "-3x \\ge -12 \\implies x \\le 4", marks: 1, markCode: "A" },
              { reasoning: "State the domain in interval notation; the largest value is the included endpoint.", working: "(-\\infty, 4]", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Domain $(-\\infty, 4]$; the largest value is $x = 4$.",
            commonErrors: ["Forgetting to reverse the inequality, giving $x \\ge 4$."],
          },
        },
        {
          id: "alg2-3a-dr-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Let $h(x) = \\dfrac{5}{x^2 - 9}$.\n\n(a) State the values of $x$ excluded from the domain of $h$.\n\n(b) Explain why $h(x)$ can never equal $0$.\n\nEnter the two excluded values.",
          response: {
            type: "numeric",
            parts: [
              { label: "Excluded value 1", answer: -3 },
              { label: "Excluded value 2", answer: 3 },
            ],
            unordered: true,
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Division by zero", statement: "$\\dfrac{a}{b}$ is undefined when $b = 0$." },
              { kind: "formula", name: "Difference of squares", statement: "$a^2 - b^2 = (a - b)(a + b)$" },
              { kind: "property", name: "Zero quotient", statement: "$\\dfrac{a}{b} = 0$ if and only if $a = 0$ and $b \\ne 0$." },
            ],
            steps: [
              { reasoning: "Set the denominator equal to zero.", working: "x^2 - 9 = 0", marks: 1, markCode: "M" },
              { reasoning: "Factor using the difference of squares and apply the zero product property.", working: "(x - 3)(x + 3) = 0 \\implies x = 3 \\text{ or } x = -3", marks: 1, markCode: "A" },
              { reasoning: "State the domain.", working: "\\{x \\in \\mathbb{R} : x \\ne \\pm 3\\}", marks: 1, markCode: "A" },
              { reasoning: "(b) A fraction equals zero only when its numerator is zero. The numerator is the constant $5 \\ne 0$, so $h(x) \\ne 0$ for every $x$ in the domain. Hence $0$ is not in the range.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $x = 3$ and $x = -3$. (b) The numerator is always $5$, never $0$.",
            commonErrors: ["Giving only $x = 3$ and missing the negative root."],
          },
        },
        {
          id: "alg2-3a-dr-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A farmer builds a rectangular pen against a long straight wall, so only three sides need fencing. She has $40$ m of fencing. The two sides perpendicular to the wall each have length $w$ m, so the side parallel to the wall has length $40 - 2w$ m. The area of the pen is $A(w) = w(40 - 2w)$ square meters.",
          parts: [
            { label: "a", prompt: "Find the domain of $A$ that makes sense in context. Enter the upper bound of $w$.", marks: 2 },
            { label: "b", prompt: "Find the maximum area of the pen.", marks: 2 },
            { label: "c", prompt: "State the range of $A$ in interval notation and explain why $0$ is not included.", marks: 2 },
            { label: "d", prompt: "The farmer needs an area of exactly $150$ m$^2$. Find both possible values of $w$ and confirm that both are in the domain.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Upper bound of $w$", answer: 20, unit: "m" },
              { label: "(b) Maximum area", answer: 200, unit: "m$^2$" },
              { label: "(d) Smaller width", answer: 5, unit: "m" },
              { label: "(d) Larger width", answer: 15, unit: "m" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Contextual domain", statement: "Every side length of a real pen must be positive, so each side-length expression must be greater than $0$." },
              { kind: "property", name: "Vertex of a parabola", statement: "For $y = ax^2 + bx + c$ with $a < 0$, the maximum value occurs at $x = -\\dfrac{b}{2a}$." },
              { kind: "property", name: "Zero product property", statement: "If $mn = 0$ then $m = 0$ or $n = 0$." },
            ],
            steps: [
              { part: "a", reasoning: "Both side lengths must be positive.", working: "w > 0 \\quad \\text{and} \\quad 40 - 2w > 0 \\implies w < 20", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Combine the two inequalities.", working: "0 < w < 20, \\text{ i.e. } (0, 20)", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Expand to standard form and use the vertex formula, since the parabola opens downward.", working: "A(w) = -2w^2 + 40w, \\quad w = -\\frac{40}{2(-2)} = 10", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate the area at the vertex.", working: "A(10) = 10(40 - 20) = 200", marks: 1, markCode: "A" },
              { part: "c", reasoning: "The area rises from near $0$ to the maximum $200$ and falls back toward $0$ across the domain.", working: "0 < A \\le 200, \\text{ i.e. } (0, 200]", marks: 1, markCode: "B" },
              { part: "c", reasoning: "$A = 0$ only when $w = 0$ or $w = 20$. Both are excluded from the domain because the pen would have a side of length zero.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Set the area equal to $150$ and rearrange to a quadratic with leading coefficient $1$.", working: "40w - 2w^2 = 150 \\implies w^2 - 20w + 75 = 0", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Factor and solve. Both values lie in $(0, 20)$, and the check $5 \\times 30 = 15 \\times 10 = 150$ confirms them.", working: "(w - 5)(w - 15) = 0 \\implies w = 5 \\text{ or } w = 15", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $(0, 20)$, upper bound $20$. (b) $200$ m$^2$. (c) $(0, 200]$; $0$ would need $w = 0$ or $w = 20$, which are excluded. (d) $w = 5$ m or $w = 15$ m.",
            commonErrors: [
              "Using the closed interval $[0, 20]$ and so including a pen of zero area.",
              "Writing the range as $[0, 200]$.",
              "Forgetting that the parallel side is $40 - 2w$, not $40 - w$.",
            ],
          },
        },
      ],
    },
    {
      id: "alg2-3a-discrete-continuous",
      title: "Discrete vs continuous and one-to-one",
      skill: "Classify a function as discrete or continuous from context, and test whether it is one-to-one.",
      lesson: {
        sections: [
          {
            heading: "Discrete or continuous?",
            body: "Ask: **can the input take any value in an interval, or only separate values?**\n\n- Number of tickets sold, people, or cars: only whole numbers, so **discrete**. The graph is a set of unconnected points.\n- Time, distance, temperature, volume: can take any real value, so **continuous**. The graph is an unbroken line or curve.",
          },
          {
            heading: "One-to-one functions",
            body: "A function is **one-to-one** if different inputs always give different outputs: $f(a) = f(b) \\implies a = b$.\n\nOn a graph use the **horizontal line test**: if any horizontal line meets the graph more than once, it is not one-to-one. $f(x) = 2x + 1$ is one-to-one; $f(x) = x^2$ is not, since $f(-2) = f(2) = 4$.",
          },
        ],
        keyFormulas: [
          { name: "One-to-one test", statement: "$f(a) = f(b) \\implies a = b$" },
        ],
      },
      questions: [
        {
          id: "alg2-3a-dc-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A bakery charges $\\$3$ per cupcake. The function $C(n) = 3n$ gives the cost of $n$ cupcakes. Which describes the function and its domain?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Discrete; domain $\\{0, 1, 2, 3, \\ldots\\}$" },
              { id: "b", text: "Discrete; domain $\\{3, 6, 9, \\ldots\\}$" },
              { id: "c", text: "Continuous; domain $n \\ge 0$" },
              { id: "d", text: "Continuous; domain all real numbers" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Discrete function", statement: "A function whose domain consists of separate, countable values." },
              { kind: "principle", name: "Contextual domain", statement: "In real-world models, the domain is restricted to values that make sense in context." },
            ],
            steps: [
              { reasoning: "You cannot buy $2.5$ cupcakes or $-1$ cupcakes, so $n$ must be a non-negative whole number. The function is discrete.", marks: 1, markCode: "R" },
              { reasoning: "The domain is the set of possible inputs (numbers of cupcakes), not the outputs (costs).", working: "\\{0, 1, 2, 3, \\ldots\\}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Discrete; domain $\\{0, 1, 2, 3, \\ldots\\}$",
            commonErrors: ["Option (d) lists the range (possible costs), not the domain."],
          },
        },
        {
          id: "alg2-3a-dc-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Which function is **one-to-one** over its whole domain?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$f(x) = |x| + 1$" },
              { id: "b", text: "$f(x) = -3x + 7$" },
              { id: "c", text: "$f(x) = x^2 - 4$" },
              { id: "d", text: "$f(x) = 5$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "One-to-one", statement: "$f$ is one-to-one if $f(a) = f(b)$ implies $a = b$." },
              { kind: "principle", name: "Horizontal line test", statement: "A graph is one-to-one if no horizontal line meets it more than once." },
            ],
            steps: [
              { reasoning: "Find counterexamples for the others.", working: "(a)\\; f(2) = f(-2) = 0 \\quad (b)\\; f(1) = f(-1) = 2 \\quad (d)\\; f(0) = f(1) = 5", marks: 1, markCode: "M" },
              { reasoning: "Prove (c) is one-to-one algebraically.", working: "-3a + 7 = -3b + 7 \\implies -3a = -3b \\implies a = b", marks: 1, markCode: "M" },
              { reasoning: "A non-horizontal line always passes the horizontal line test.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** $f(x) = -3x + 7$",
          },
        },
        {
          id: "alg2-3a-dc-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A water tank holds 500 liters and drains at a constant 20 liters per minute. The volume after $t$ minutes is $V(t) = 500 - 20t$.\n\nState whether $V$ is discrete or continuous, then find the **largest value of $t$** in the domain that makes sense in context.",
          response: { type: "numeric", parts: [{ label: "Largest $t$", answer: 25, unit: "min" }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Continuous function", statement: "The input can take every real value in an interval." },
              { kind: "principle", name: "Contextual domain", statement: "The volume cannot be negative, so $V(t) \\ge 0$." },
            ],
            steps: [
              { reasoning: "Time can take any real value (e.g. $t = 3.7$ minutes), so the function is continuous.", marks: 1, markCode: "R" },
              { reasoning: "The tank is empty when $V(t) = 0$.", working: "500 - 20t = 0 \\implies t = 25", marks: 1, markCode: "M" },
              { reasoning: "State the contextual domain.", working: "0 \\le t \\le 25", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Continuous; domain $[0, 25]$, so the largest value is $t = 25$ minutes.",
          },
        },
        {
          id: "alg2-3a-dc-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A theater has $150$ seats. Tickets cost $\\$12$ each, so the revenue from selling $n$ tickets is $R(n) = 12n$ dollars. The theater also models the average lobby wait time, in minutes, when $n$ tickets have been sold as\n\n$$W(n) = \\frac{(n - 75)^2}{50}$$\n\nIn both models $n$ is a whole number of tickets.",
          parts: [
            { label: "a", prompt: "Classify $R$ as discrete or continuous, and state how many values are in its domain.", marks: 2 },
            { label: "b", prompt: "Find the largest value in the range of $R$.", marks: 2 },
            { label: "c", prompt: "Prove algebraically that $R$ is one-to-one.", marks: 2 },
            { label: "d", prompt: "Show that $W$ is not one-to-one by finding two different ticket counts that give the same wait time, and state that wait time in minutes.", marks: 3 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Number of values in the domain", answer: 151 },
              { label: "(b) Largest revenue", answer: 1800, unit: "dollars" },
              { label: "(d) Common wait time", answer: 4.5, unit: "min" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Discrete function", statement: "A function whose inputs are separate, countable values (here, whole numbers of tickets)." },
              { kind: "definition", name: "One-to-one", statement: "$f$ is one-to-one if $f(a) = f(b)$ implies $a = b$. A single pair of different inputs with equal outputs shows a function is not one-to-one." },
              { kind: "property", name: "Symmetry of a parabola", statement: "A quadratic is symmetric about its axis, so inputs equally far from the axis give equal outputs." },
            ],
            steps: [
              { part: "a", reasoning: "You cannot sell part of a ticket, so $n$ takes only separate whole-number values and $R$ is discrete.", marks: 1, markCode: "R" },
              { part: "a", reasoning: "The domain is every whole number from $0$ to $150$ inclusive.", working: "150 - 0 + 1 = 151", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$R$ is increasing, so its largest output occurs at the largest input, $n = 150$.", working: "R(150) = 12 \\times 150", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate. The range is $\\{0, 12, 24, \\ldots, 1800\\}$.", working: "R(150) = 1800", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Assume two inputs give the same revenue.", working: "R(a) = R(b) \\implies 12a = 12b", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Divide both sides by $12$ to conclude the inputs are equal.", working: "a = b", marks: 1, markCode: "R" },
              { part: "d", reasoning: "The parabola $W$ is symmetric about $n = 75$. Choose two inputs equally far from $75$.", working: "n = 60 = 75 - 15 \\quad \\text{and} \\quad n = 90 = 75 + 15", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Evaluate $W$ at both inputs.", working: "W(60) = \\frac{(-15)^2}{50} = 4.5, \\quad W(90) = \\frac{15^2}{50} = 4.5", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Two different inputs share the same output, so $W$ is not one-to-one.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) Discrete; $151$ values. (b) $\\$1800$. (c) $12a = 12b \\implies a = b$. (d) $W(60) = W(90) = 4.5$ minutes, so $W$ is not one-to-one.",
            commonErrors: [
              "Counting $150$ values in the domain and forgetting $n = 0$.",
              "Calling $R$ continuous because the revenue is measured in dollars; the classification depends on the input.",
              "Testing only one input for $W$; a single value cannot show a function fails to be one-to-one.",
            ],
          },
        },
      ],
    },
  ],
};
