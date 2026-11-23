import type { Lesson } from "../../../types.ts";

export const lesson62: Lesson = {
  id: "m8-u6-lesson-6-2",
  code: "6-2",
  title: "Linear Equations and Functions",
  goal: "I CAN solve linear equations, write equations from word problems, and identify functions and their representations.",
  standards: [
    "8.EE.B.5",
    "8.EE.B.6",
    "8.F.A.1",
    "8.F.A.2",
    "8.F.A.3",
    "8.F.B.4",
    "8.F.B.5",
  ],
  vocabulary: [
    {
      term: "Linear equation",
      definition:
        "An equation whose graph is a straight line, typically $y = mx + b$.",
    },
    {
      term: "Function",
      definition: "A rule that assigns exactly one output to each input.",
    },
    { term: "Domain", definition: "The set of all possible input values." },
    { term: "Range", definition: "The set of all possible output values." },
    {
      term: "Rate of change",
      definition: "How quickly one quantity changes relative to another.",
    },
    {
      term: "Initial value",
      definition: "The starting value when input is zero.",
    },
  ],
  concepts: [
    {
      id: "m8-u6-linear-equations",
      title: "Solving linear equations",
      skill:
        "Solve linear equations with variables on both sides and real-world applications.",
      lesson: {
        sections: [
          {
            heading: "Basic solving",
            body: "To solve $3x + 5 = 14$: subtract $5$ from both sides: $3x = 9$; divide by $3$: $x = 3$.",
          },
          {
            heading: "Variables on both sides",
            body: "For $2x + 3 = x + 7$: subtract $x$: $x + 3 = 7$; subtract $3$: $x = 4$. Always collect variable terms on one side.",
          },
          {
            heading: "Real-world equations",
            body: "A taxi charges $\\$3$ base plus $\\$2$ per mile. Cost equation: $C = 3 + 2m$. For $\\$15$ ride: $15 = 3 + 2m$ → $12 = 2m$ → $m = 6$ miles.",
          },
        ],
        keyFormulas: [
          {
            name: "Solve",
            statement: "Isolate variable using inverse operations",
          },
          {
            name: "Both sides",
            statement: "Collect like terms before solving",
          },
          {
            name: "Word problems",
            statement: "Write equation from scenario, then solve",
          },
        ],
        workedExample: {
          problem: "Solve $5x - 2 = 3x + 8$.",
          solution:
            "Subtract $3x$: $2x - 2 = 8$; add $2$: $2x = 10$; divide by $2$: $x = 5$.",
        },
      },
      questions: [
        {
          id: "m8-u6-linear-equations-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Solve $2x + 3 = 11$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x = 4$" },
              { id: "b", text: "$x = 7$" },
              { id: "c", text: "$x = 14$" },
              { id: "d", text: "$x = 8$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Solving",
                statement: "Isolate variable.",
              },
            ],
            steps: [
              {
                reasoning: "$2x = 8$ → $x = 4$.",
                evidence: "4",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** $x = 4$",
            commonErrors: ["Forgetting to subtract constant first."],
          },
        },
        {
          id: "m8-u6-linear-equations-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Solve $4x - 1 = 2x + 5$.",
          response: { type: "numeric", parts: [{ label: "x", answer: 3 }] },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Both sides",
                statement: "Collect variable terms.",
              },
            ],
            steps: [
              {
                reasoning: "$4x - 2x = 5 + 1$ → $2x = 6$ → $x = 3$.",
                working: "x = 3",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State answer.",
                working: "3",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$x = 3$",
            commonErrors: ["Not collecting like terms correctly."],
          },
        },
        {
          id: "m8-u6-linear-equations-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Solve each equation.",
          parts: [
            { label: "a", prompt: "$3x + 2 = x + 10$", marks: 1 },
            { label: "b", prompt: "$5(x - 1) = 2x + 4$", marks: 1 },
            { label: "c", prompt: "$\\frac{x}{2} + 3 = 7$", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Solving",
                statement: "Isolate variable.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$2x = 8$ → $x = 4$.",
                evidence: "4",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$5x - 5 = 2x + 4$ → $3x = 9$ → $x = 3$.",
                evidence: "3",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "$\\frac{x}{2} = 4$ → $x = 8$.",
                evidence: "8",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) $x = 4$ (b) $x = 3$ (c) $x = 8$",
            commonErrors: ["In (b), not distributing correctly."],
          },
        },
        {
          id: "m8-u6-linear-equations-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Solve each equation.",
          parts: [
            { label: "a", prompt: "$6x - 4 = 2x + 12$", marks: 2 },
            { label: "b", prompt: "$3(2x + 1) = 5x - 2$", marks: 2 },
            { label: "c", prompt: "$\\frac{2x - 1}{3} = 5$", marks: 2 },
            { label: "d", prompt: "$4x + 3 = 4x - 1$", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Solving",
                statement: "Isolate variable.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$4x = 16$ → $x = 4$.",
                evidence: "4",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$6x + 3 = 5x - 2$ → $x = -5$.",
                evidence: "-5",
                marks: 2,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "$2x - 1 = 15$ → $2x = 16$ → $x = 8$.",
                evidence: "8",
                marks: 2,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "$3 = -1$ → no solution (inconsistent).",
                evidence: "no solution",
                marks: 2,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) $x = 4$ (b) $x = -5$ (c) $x = 8$ (d) No solution",
            commonErrors: ["In (d), not recognizing inconsistent equation."],
          },
        },
      ],
    },
    {
      id: "m8-u6-functions",
      title: "Functions and their representations",
      skill:
        "Identify functions, determine domain and range, and interpret function notation.",
      lesson: {
        sections: [
          {
            heading: "What is a function?",
            body: "A **function** assigns exactly one output to each input. Test: if any input gives two different outputs, it's not a function. Tables, graphs, and equations can all represent functions.",
          },
          {
            heading: "Function notation",
            body: "Function notation $f(x)$ means 'the output when input is $x$'. For $f(x) = 2x + 3$: $f(4) = 2(4) + 3 = 11$; $f(-1) = 2(-1) + 3 = 1$.",
          },
          {
            heading: "Domain and range",
            body: "Domain = all possible inputs; range = all possible outputs. For $f(x) = 2x + 3$ with all real inputs: domain = all real numbers, range = all real numbers. For $g(x) = x^2$: domain = all real numbers, range = $y \\geq 0$.",
          },
        ],
        keyFormulas: [
          {
            name: "Function test",
            statement: "Each input → exactly one output",
          },
          { name: "Notation", statement: "$f(x)$ = output for input $x$" },
          { name: "Domain/Range", statement: "Inputs / Outputs" },
        ],
        workedExample: {
          problem: "For $f(x) = 3x - 1$, find $f(2)$ and $f(-3)$.",
          solution: "$f(2) = 3(2) - 1 = 5$; $f(-3) = 3(-3) - 1 = -10$.",
        },
      },
      questions: [
        {
          id: "m8-u6-functions-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "For $f(x) = 2x + 5$, what is $f(3)$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$11$" },
              { id: "b", text: "$6$" },
              { id: "c", text: "$13$" },
              { id: "d", text: "$8$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Function notation",
                statement: "Substitute input.",
              },
            ],
            steps: [
              {
                reasoning: "$f(3) = 2(3) + 5 = 11$.",
                evidence: "11",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** $11$",
            commonErrors: ["Order of operations error."],
          },
        },
        {
          id: "m8-u6-functions-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Is the relation $\\{(1,2), (2,4), (3,6)\\}$ a function?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Yes" },
              { id: "b", text: "No" },
              { id: "c", text: "Cannot determine" },
              { id: "d", text: "Only sometimes" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Function",
                statement: "Each input → one output.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Each input (1,2,3) has exactly one output (2,4,6). Yes, it's a function.",
                evidence: "yes",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** Yes",
            commonErrors: ["Not checking for repeated inputs."],
          },
        },
        {
          id: "m8-u6-functions-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "For $f(x) = x^2 - 4$, find $f(3)$, $f(-2)$, and $f(0)$.",
          parts: [
            { label: "f(3)", marks: 1 },
            { label: "f(-2)", marks: 1 },
            { label: "f(0)", marks: 1 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "f(3)", answer: 5 },
              { label: "f(-2)", answer: 0 },
              { label: "f(0)", answer: -4 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Function notation",
                statement: "Substitute and evaluate.",
              },
            ],
            steps: [
              {
                part: "f(3)",
                reasoning: "$3^2 - 4 = 9 - 4 = 5$.",
                working: "5",
                marks: 1,
                markCode: "M",
              },
              {
                part: "f(-2)",
                reasoning: "$(-2)^2 - 4 = 4 - 4 = 0$.",
                working: "0",
                marks: 1,
                markCode: "M",
              },
              {
                part: "f(0)",
                reasoning: "$0^2 - 4 = -4$.",
                working: "-4",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "$f(3) = 5$, $f(-2) = 0$, $f(0) = -4$",
            commonErrors: ["In f(-2), forgetting to square the negative."],
          },
        },
        {
          id: "m8-u6-functions-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Solve each problem.",
          parts: [
            {
              label: "a",
              prompt: "For $f(x) = 3x - 2$, find $f(4)$.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Is $\\{(2,4), (2,5), (3,6)\\}$ a function? Explain.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "For $g(x) = x^2 + 1$, find $g(-3)$.",
              marks: 2,
            },
            {
              label: "d",
              prompt: "What is the domain of $h(x) = \\frac{1}{x}$?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Function notation",
                statement: "Substitute and evaluate.",
              },
              {
                kind: "definition",
                name: "Function",
                statement: "Each input → one output.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$f(4) = 3(4) - 2 = 10$.",
                evidence: "10",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "No, because input $2$ has two outputs ($4$ and $5$).",
                evidence: "no",
                marks: 2,
                markCode: "B",
              },
              {
                part: "c",
                reasoning: "$g(-3) = (-3)^2 + 1 = 10$.",
                evidence: "10",
                marks: 2,
                markCode: "M",
              },
              {
                part: "d",
                reasoning:
                  "Domain = all real numbers except $0$ (division by zero undefined).",
                evidence: "x \\neq 0",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer:
              "(a) $10$ (b) No, input $2$ has two outputs (c) $10$ (d) All real numbers except $0$",
            commonErrors: ["In (d), not excluding zero."],
          },
        },
      ],
    },
    {
      id: "m8-u6-linear-models",
      title: "Linear models and rate of change",
      skill:
        "Interpret slope and initial value in linear models and compare rates.",
      lesson: {
        sections: [
          {
            heading: "Slope and intercept",
            body: "In $y = mx + b$: $m$ = slope (rate of change), $b$ = y-intercept (initial value). For $y = 2x + 5$: slope = $2$ (y increases by $2$ for each $1$ increase in $x$), initial value = $5$.",
          },
          {
            heading: "Real-world interpretation",
            body: "A phone plan costs $\\$20$ monthly plus $\\$0.10$ per text: $C = 0.10t + 20$. Slope $0.10$ = cost per text; intercept $20$ = monthly fee.",
          },
          {
            heading: "Comparing rates",
            body: "Plan A: $C = 15 + 0.15t$; Plan B: $C = 25 + 0.08t$. Plan A is cheaper for few texts, Plan B for many. Find break-even: $15 + 0.15t = 25 + 0.08t$ → $0.07t = 10$ → $t = 143$ texts.",
          },
        ],
        keyFormulas: [
          { name: "Slope", statement: "$m$ = rate of change" },
          { name: "Intercept", statement: "$b$ = initial value" },
          {
            name: "Compare",
            statement: "Set equations equal to find break-even",
          },
        ],
        workedExample: {
          problem: "Interpret $y = 3x + 7$ in context.",
          solution:
            "Slope $3$ = rate of change (y increases by $3$ per unit x); intercept $7$ = initial value when $x = 0$.",
        },
      },
      questions: [
        {
          id: "m8-u6-linear-models-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In $y = 4x + 3$, what is the slope?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$4$" },
              { id: "b", text: "$3$" },
              { id: "c", text: "$x$" },
              { id: "d", text: "$7$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Slope",
                statement: "Coefficient of $x$ in $y = mx + b$.",
              },
            ],
            steps: [
              {
                reasoning: "Slope = $4$ (coefficient of $x$).",
                evidence: "4",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** $4$",
            commonErrors: ["Confusing slope with intercept."],
          },
        },
        {
          id: "m8-u6-linear-models-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A gym charges $\\$30$ membership plus $\\$5$ per class. Write the cost equation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Modeling",
                statement: "Cost = rate × quantity + fixed.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Fixed cost = $\\$30$; rate = $\\$5$ per class; equation: $C = 5n + 30$ where $n$ = classes.",
                working: "C = 5n + 30",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State equation.",
                working: "C = 5n + 30",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$C = 5n + 30$",
            commonErrors: ["Reversing rate and fixed cost."],
          },
        },
        {
          id: "m8-u6-linear-models-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Two plans: Plan A costs $\\$10 + \\$0.20$/hr; Plan B costs $\\$25 + \\$0.10$/hr. When are they equal?",
          response: {
            type: "numeric",
            parts: [{ label: "Hours", answer: 150 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Break-even",
                statement: "Set equations equal.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$10 + 0.20t = 25 + 0.10t$ → $0.10t = 15$ → $t = 150$ hours.",
                working: "150",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State answer.",
                working: "150",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$150$ hours",
            commonErrors: ["Not setting equations equal."],
          },
        },
        {
          id: "m8-u6-linear-models-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Solve each problem.",
          parts: [
            {
              label: "a",
              prompt: "Interpret $y = 5x + 2$ in context.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "A car travels at $60$ mph. Write distance equation and find distance in $3.5$ hours.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Plan A: $\\$12 + \\$0.15$/text; Plan B: $\\$20 + \\$0.08$/text. Break-even?",
              marks: 2,
            },
            {
              label: "d",
              prompt: "If $y = 3x + 7$ and $y = 2x + 15$, find intersection.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Slope/Intercept",
                statement: "Rate and initial value.",
              },
              {
                kind: "skill",
                name: "Modeling",
                statement: "Write equations from scenarios.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Slope $5$ = rate of change; intercept $2$ = initial value.",
                evidence: "5, 2",
                marks: 2,
                markCode: "B",
              },
              {
                part: "b",
                reasoning: "$d = 60t$; at $t = 3.5$: $d = 210$ miles.",
                evidence: "210",
                marks: 2,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "$12 + 0.15t = 20 + 0.08t$ → $0.07t = 8$ → $t \\approx 114$ texts.",
                evidence: "114",
                marks: 2,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "$3x + 7 = 2x + 15$ → $x = 8$, $y = 31$.",
                evidence: "(8,31)",
                marks: 2,
                markCode: "M",
              },
            ],
            finalAnswer:
              "(a) Rate $5$, initial $2$ (b) $210$ miles (c) $\\approx 114$ texts (d) $(8, 31)$",
            commonErrors: ["In (c), not setting equations equal."],
          },
        },
      ],
    },
  ],
};
