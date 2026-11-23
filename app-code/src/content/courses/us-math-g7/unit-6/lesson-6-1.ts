import type { Lesson } from "../../../types.ts";

export const lesson61: Lesson = {
  id: "m7-u6-lesson-6-1",
  code: "6-1",
  title: "Expressions: Writing and Evaluating in Depth",
  goal: "I CAN write algebraic expressions from verbal descriptions and evaluate them for given values.",
  standards: [
    "7.EE.A.1",
    "7.EE.A.2",
    "7.EE.B.3",
    "7.EE.B.4",
    "7.EE.B.4a",
    "7.EE.B.4b",
  ],
  vocabulary: [
    {
      term: "Expression",
      definition:
        "A mathematical phrase that may contain numbers, variables, and operations, but no equals sign. Examples: $3x + 5$, $\\frac{a}{2} - 7$.",
    },
    {
      term: "Variable",
      definition:
        "A symbol (usually a letter) that represents an unknown or changing quantity.",
    },
    {
      term: "Coefficient",
      definition:
        "The numerical factor multiplied by a variable: in $5x$, $5$ is the coefficient.",
    },
    {
      term: "Constant",
      definition:
        "A fixed number in an expression that does not change: in $3x + 5$, $5$ is the constant.",
    },
    {
      term: "Term",
      definition:
        "A part of an expression separated by addition or subtraction: $3x$ and $5$ are terms in $3x + 5$.",
    },
    {
      term: "Evaluate",
      definition: "To substitute values for variables and compute the result.",
    },
  ],
  concepts: [
    {
      id: "m7-u6-writing-expressions",
      title: "Writing algebraic expressions from verbal descriptions",
      skill: "Translate words into algebraic expressions accurately.",
      lesson: {
        sections: [
          {
            heading: "Key phrases and operations",
            body: "**Sum** = add, **difference** = subtract, **product** = multiply, **quotient** = divide. 'Three more than $x$' = $x + 3$; 'three less than $x$' = $x - 3$; 'three times $x$' = $3x$; '$x$ divided by three' = $\\frac{x}{3}$. 'The sum of $x$ and $y$' = $x + y$; 'the product of $x$ and $y$' = $xy$.",
          },
          {
            heading: "Order of operations in words",
            body: "'Two more than three times $x$' = $3x + 2$ (multiply first, then add). 'Three times the sum of $x$ and two' = $3(x + 2)$ (the words 'the sum of' indicate grouping). Parentheses are essential when the verbal description requires grouping: 'half of the sum of $a$ and $b$' = $\\frac{a + b}{2}$.",
          },
          {
            heading: "Common pitfalls",
            body: "Avoid reversing subtraction: 'five less than $x$' = $x - 5$, not $5 - x$. 'The quotient of $x$ and $y$' = $\\frac{x}{y}$, not $\\frac{y}{x}$. 'A number decreased by $7$' = $n - 7$. 'The difference of $x$ and $y$' is ambiguous — clarify whether it is $x - y$ or $y - x$.",
          },
        ],
        keyFormulas: [
          { name: "Sum", statement: "$a + b$" },
          { name: "Difference", statement: "$a - b$ (order matters)" },
          { name: "Product", statement: "$ab$ or $a \\times b$" },
          { name: "Quotient", statement: "$\\frac{a}{b}$ (order matters)" },
        ],
        workedExample: {
          problem:
            "Write an expression for 'five less than twice a number $n$'.",
          solution:
            "Twice $n$ = $2n$; five less than that = $2n - 5$. The expression is $2n - 5$.",
        },
      },
      questions: [
        {
          id: "m7-u6-writing-expressions-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which expression represents 'three more than twice a number $x$'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$2x + 3$" },
              { id: "b", text: "$3x + 2$" },
              { id: "c", text: "$2(x + 3)$" },
              { id: "d", text: "$\\frac{x}{2} + 3$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Translation",
                statement: "'Twice' = multiply by $2$; 'more than' = add.",
              },
            ],
            steps: [
              {
                reasoning: "Twice $x$ = $2x$; three more = $2x + 3$.",
                working: "2x + 3",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** $2x + 3$",
            commonErrors: ["Writing $3x + 2$ (reversing the operations)."],
          },
        },
        {
          id: "m7-u6-writing-expressions-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Write an algebraic expression for 'the quotient of the sum of $a$ and $b$ and $4$'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Grouping",
                statement: "'The sum of $a$ and $b$' requires parentheses.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The sum of $a$ and $b$ is $a + b$; the quotient with $4$ is $\\frac{a + b}{4}$.",
                working: "\\frac{a + b}{4}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "The parentheses in the numerator are essential.",
                working: "(a + b) \\div 4",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\frac{a + b}{4}$",
            commonErrors: [
              "Writing $\\frac{a}{4} + \\frac{b}{4}$ or $\\frac{a + b}{4}$ without parentheses.",
              "Writing $\\frac{4}{a + b}$ (reversing the quotient).",
            ],
          },
        },
        {
          id: "m7-u6-writing-expressions-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A rectangle has length $3x + 2$ and width $x$. Write an expression for its perimeter.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Perimeter formula",
                statement: "$P = 2(l + w)$",
              },
            ],
            steps: [
              {
                reasoning: "Perimeter = $2(l + w) = 2[(3x + 2) + x]$.",
                working: "2[(3x + 2) + x]",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Combine like terms inside the parentheses.",
                working: "2(4x + 2)",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Distribute the $2$.",
                working: "8x + 4",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$8x + 4$",
            commonErrors: [
              "Computing $2 \\times (3x + 2) + 2 \\times x$ incorrectly.",
              "Forgetting to double both dimensions.",
            ],
          },
        },
        {
          id: "m7-u6-writing-expressions-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Write an expression for each description.",
          parts: [
            {
              label: "a",
              prompt: "Five less than three times a number $n$",
              marks: 2,
            },
            {
              label: "b",
              prompt: "The product of $x$ and $y$ decreased by $7$",
              marks: 2,
            },
            { label: "c", prompt: "Half of the sum of $a$ and $b$", marks: 2 },
            {
              label: "d",
              prompt: "A number $n$ increased by $4$, then multiplied by $3$",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Translation",
                statement: "Match words to operations and grouping.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Three times $n$ = $3n$; five less = $3n - 5$.",
                working: "3n - 5",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Product of $x$ and $y$ = $xy$; decreased by $7$ = $xy - 7$.",
                working: "xy - 7",
                marks: 2,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Sum of $a$ and $b$ = $a + b$; half = $\\frac{a + b}{2}$.",
                working: "\\frac{a + b}{2}",
                marks: 2,
                markCode: "M",
              },
              {
                part: "d",
                reasoning:
                  "Increase by $4$: $n + 4$; multiply by $3$: $3(n + 4)$.",
                working: "3(n + 4)",
                marks: 2,
                markCode: "M",
              },
            ],
            finalAnswer:
              "(a) $3n - 5$ (b) $xy - 7$ (c) $\\frac{a + b}{2}$ (d) $3(n + 4)$",
            commonErrors: ["In (d), writing $3n + 4$ instead of $3(n + 4)$."],
          },
        },
      ],
    },
    {
      id: "m7-u6-evaluating-expressions",
      title: "Evaluating expressions with substitution",
      skill:
        "Substitute values into expressions and compute results accurately.",
      lesson: {
        sections: [
          {
            heading: "Substitution method",
            body: "To evaluate an expression, replace each variable with its given value, then apply the order of operations: parentheses, exponents, multiplication/division (left to right), addition/subtraction (left to right). For $3x + 2y$ when $x = 4$ and $y = -1$: $3(4) + 2(-1) = 12 - 2 = 10$.",
          },
          {
            heading: "Negative values",
            body: "Use parentheses when substituting negative numbers: $2x - 5$ with $x = -3$ becomes $2(-3) - 5 = -6 - 5 = -11$, not $2 - 3 - 5$. For fractions: $\\frac{x}{4} + 1$ with $x = -8$ becomes $\\frac{-8}{4} + 1 = -2 + 1 = -1$.",
          },
          {
            heading: "Multi-variable expressions",
            body: "When an expression has multiple variables, substitute all values simultaneously: $a^2 + b^2$ with $a = 3$, $b = -4$ becomes $9 + 16 = 25$. For expressions like $\\frac{a + b}{2}$, substitute first: $\\frac{3 + (-4)}{2} = \\frac{-1}{2} = -0.5$.",
          },
        ],
        keyFormulas: [
          {
            name: "Order of operations",
            statement:
              "PEMDAS: Parentheses, Exponents, Multiplication/Division, Addition/Subtraction",
          },
          {
            name: "Substitution",
            statement: "Replace each variable with its value",
          },
          {
            name: "Parentheses for negatives",
            statement: "Use $(-3)$ not $-3$ when substituting",
          },
        ],
        workedExample: {
          problem: "Evaluate $5x - 3y$ when $x = -2$ and $y = 4$.",
          solution: "$5(-2) - 3(4) = -10 - 12 = -22$.",
        },
      },
      questions: [
        {
          id: "m7-u6-evaluating-expressions-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the value of $3x + 5$ when $x = 4$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$17$" },
              { id: "b", text: "$12$" },
              { id: "c", text: "$9$" },
              { id: "d", text: "$20$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Substitution",
                statement: "Replace $x$ with $4$ and compute.",
              },
            ],
            steps: [
              {
                reasoning: "$3(4) + 5 = 12 + 5 = 17$.",
                working: "3(4) + 5 = 17",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** $17$",
            commonErrors: [
              "Computing $3(4 + 5) = 27$ by ignoring order of operations.",
            ],
          },
        },
        {
          id: "m7-u6-evaluating-expressions-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Evaluate $2x - 5$ when $x = -3$.",
          response: {
            type: "numeric",
            parts: [{ label: "Value", answer: -11 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Negative substitution",
                statement: "Use parentheses: $2(-3) - 5$.",
              },
            ],
            steps: [
              {
                reasoning: "Substitute: $2(-3) - 5 = -6 - 5$.",
                working: "2(-3) - 5 = -6 - 5",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Compute.",
                working: "-6 - 5 = -11",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$-11$",
            commonErrors: [
              "Computing $2 - 3 - 5 = -6$ by dropping the negative sign.",
            ],
          },
        },
        {
          id: "m7-u6-evaluating-expressions-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Evaluate $\\frac{a + b}{2}$ when $a = 5$ and $b = -3$.",
          response: { type: "numeric", parts: [{ label: "Value", answer: 1 }] },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Multi-variable substitution",
                statement: "Substitute all values before computing.",
              },
            ],
            steps: [
              {
                reasoning: "Substitute: $\\frac{5 + (-3)}{2} = \\frac{2}{2}$.",
                working: "\\frac{5 + (-3)}{2} = \\frac{2}{2}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Simplify the numerator.",
                working: "5 + (-3) = 2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Divide.",
                working: "\\frac{2}{2} = 1",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$1$",
            commonErrors: [
              "Computing $\\frac{5}{2} + \\frac{-3}{2} = 1$ correctly but by a longer path.",
            ],
          },
        },
        {
          id: "m7-u6-evaluating-expressions-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Evaluate each expression.",
          parts: [
            {
              label: "a",
              prompt: "$4x + 3y$ when $x = -2$ and $y = 5$",
              marks: 2,
            },
            {
              label: "b",
              prompt: "$x^2 - y$ when $x = -3$ and $y = 4$",
              marks: 2,
            },
            {
              label: "c",
              prompt: "$\\frac{3x - 1}{2}$ when $x = 5$",
              marks: 2,
            },
            { label: "d", prompt: "$5 - 2x$ when $x = -4$", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a)", answer: 7 },
              { label: "(b)", answer: 5 },
              { label: "(c)", answer: 7 },
              { label: "(d)", answer: 13 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Substitution",
                statement:
                  "Replace variables with values, then apply order of operations.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Substitute: $4(-2) + 3(5) = -8 + 15$.",
                working: "-8 + 15 = 7",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Substitute: $(-3)^2 - 4 = 9 - 4$.",
                working: "9 - 4 = 5",
                marks: 2,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Substitute: $\\frac{3(5) - 1}{2} = \\frac{14}{2}$.",
                working: "\\frac{14}{2} = 7",
                marks: 2,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Substitute: $5 - 2(-4) = 5 + 8$.",
                working: "5 + 8 = 13",
                marks: 2,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) $7$ (b) $5$ (c) $7$ (d) $13$",
            commonErrors: ["In (b), computing $(-3)^2 = -9$ instead of $9$."],
          },
        },
      ],
    },
    {
      id: "m7-u6-equivalent-expressions",
      title: "Equivalent expressions and simplification",
      skill:
        "Identify equivalent expressions and simplify using distributive property and combining like terms.",
      lesson: {
        sections: [
          {
            heading: "Like terms",
            body: "**Like terms** have the same variable part: $3x$ and $5x$ are like terms; $3x$ and $3y$ are not. To combine like terms, add or subtract the coefficients: $3x + 5x = 8x$; $7x - 2x = 5x$. Constants are also like terms: $4 + 9 = 13$.",
          },
          {
            heading: "Distributive property",
            body: "The **distributive property**: $a(b + c) = ab + ac$. Apply it to remove parentheses: $3(2x + 4) = 6x + 12$; $-2(x - 5) = -2x + 10$. When the coefficient is negative, distribute carefully: $-3(2x - 4) = -6x + 12$ (not $-6x - 12$).",
          },
          {
            heading: "Simplifying expressions",
            body: "To simplify: (1) distribute to remove parentheses, (2) combine like terms. $2(3x + 1) + 4x = 6x + 2 + 4x = 10x + 2$. Expressions are **equivalent** if they have the same value for all variable values: $3(x + 2)$ and $3x + 6$ are equivalent.",
          },
        ],
        keyFormulas: [
          {
            name: "Like terms",
            statement: "Same variable part; add/subtract coefficients",
          },
          { name: "Distributive property", statement: "$a(b + c) = ab + ac$" },
          {
            name: "Equivalent expressions",
            statement: "Same value for all inputs",
          },
        ],
        workedExample: {
          problem: "Simplify $4(2x - 3) - 3x + 5$.",
          solution:
            "Distribute: $8x - 12 - 3x + 5$. Combine like terms: $5x - 7$.",
        },
      },
      questions: [
        {
          id: "m7-u6-equivalent-expressions-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which expression is equivalent to $3(x + 4)$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$3x + 4$" },
              { id: "b", text: "$3x + 12$" },
              { id: "c", text: "$x + 12$" },
              { id: "d", text: "$3x + 7$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Distributive property",
                statement: "$a(b + c) = ab + ac$.",
              },
            ],
            steps: [
              {
                reasoning: "$3(x + 4) = 3x + 12$.",
                working: "3x + 12",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** $3x + 12$",
            commonErrors: [
              "Writing $3x + 4$ (not distributing the $3$ to $4$).",
            ],
          },
        },
        {
          id: "m7-u6-equivalent-expressions-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Simplify $5x + 3 - 2x + 7$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Combining like terms",
                statement: "Add coefficients of like terms.",
              },
            ],
            steps: [
              {
                reasoning: "Combine $x$ terms: $5x - 2x = 3x$.",
                working: "3x",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Combine constants: $3 + 7 = 10$; result is $3x + 10$.",
                working: "3x + 10",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$3x + 10$",
            commonErrors: ["Combining $5x$ and $-2x$ as $3x^2$ or $7x$."],
          },
        },
        {
          id: "m7-u6-equivalent-expressions-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Simplify $2(3x - 4) + 5x - 1$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Distributive property",
                statement: "Remove parentheses first.",
              },
              {
                kind: "skill",
                name: "Combining like terms",
                statement: "Then combine.",
              },
            ],
            steps: [
              {
                reasoning: "Distribute: $2(3x - 4) = 6x - 8$.",
                working: "6x - 8 + 5x - 1",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Combine $x$ terms: $6x + 5x = 11x$.",
                working: "11x",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Combine constants: $-8 - 1 = -9$; result is $11x - 9$.",
                working: "11x - 9",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$11x - 9$",
            commonErrors: [
              "Distributing incorrectly: $2(3x - 4) = 6x - 8$ is correct, but $6x + 8$ is wrong.",
            ],
          },
        },
        {
          id: "m7-u6-equivalent-expressions-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Simplify each expression.",
          parts: [
            { label: "a", prompt: "$3(2x + 5) - x + 2$", marks: 2 },
            { label: "b", prompt: "$-2(x - 4) + 3x - 1$", marks: 2 },
            { label: "c", prompt: "$4x + 2(3 - x) - 5$", marks: 2 },
            {
              label: "d",
              prompt: "Are $2(3x + 1)$ and $6x + 2$ equivalent? Explain.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Distributive property",
                statement: "Remove parentheses.",
              },
              {
                kind: "skill",
                name: "Equivalent expressions",
                statement: "Same value for all inputs.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Distribute: $6x + 15 - x + 2$.",
                working: "6x + 15 - x + 2",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Combine: $5x + 17$.",
                working: "5x + 17",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Distribute: $-2x + 8 + 3x - 1$.",
                working: "-2x + 8 + 3x - 1",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Combine: $x + 7$.",
                working: "x + 7",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Distribute: $4x + 6 - 2x - 5$.",
                working: "4x + 6 - 2x - 5",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Combine: $2x + 1$.",
                working: "2x + 1",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning:
                  "Distribute $2(3x + 1) = 6x + 2$, which is identical to the second expression.",
                working: "6x + 2 = 6x + 2",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning:
                  "Yes, they are equivalent because they have the same value for all $x$.",
                working: "equivalent",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) $5x + 17$ (b) $x + 7$ (c) $2x + 1$ (d) Yes, equivalent.",
            commonErrors: [
              "In (b), distributing $-2$ as $-2x - 8$ instead of $-2x + 8$.",
            ],
          },
        },
      ],
    },
  ],
};
