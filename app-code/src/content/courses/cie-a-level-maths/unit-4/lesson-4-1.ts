import type { Lesson } from "../../../types.ts";

export const lesson141: Lesson = {
  id: "cial-m-u4-lesson-4-1",
  code: "4-1",
  title: "Indefinite integration",
  goal: "I CAN integrate functions and find general solutions with the constant of integration.",
  standards: ["9709 Pure Mathematics 1: integration"],
  vocabulary: [
    {
      term: "Indefinite integral",
      definition:
        "General antiderivative family: $\\int f(x)\\,dx = F(x) + c$.",
    },
    {
      term: "Antiderivative",
      definition: "Function whose derivative is the integrand.",
    },
    {
      term: "Constant of integration",
      definition:
        "$+c$ — infinitely many antiderivatives differ by a constant.",
    },
    {
      term: "Integration by inspection",
      definition: "Reversing known differentiation results.",
    },
    {
      term: "Reverse chain rule",
      definition:
        "If integrand contains inner function, integrate outer then divide by inner derivative.",
    },
    { term: "Integrand", definition: "The function being integrated." },
  ],
  concepts: [
    {
      id: "cial-m-u4-indefinite",
      title: "Indefinite integrals",
      skill: "Find antiderivatives of standard functions.",
      lesson: {
        sections: [
          {
            heading: "Basic integration",
            body: "$\\int x^n\\,dx = \\frac{x^{n+1}}{n+1} + c$ for $n \\ne -1$. Special case: $\\int \\frac{1}{x}\\,dx = \\ln|x| + c$. Integration reverses differentiation.",
          },
          {
            heading: "The constant of integration",
            body: "Every indefinite integral includes $+c$ because infinitely many functions share the same derivative. Always include c unless a boundary condition determines it.",
          },
          {
            heading: "Reverse chain rule",
            body: "For $\\int (ax+b)^n\\,dx$: integrate to $\\frac{(ax+b)^{n+1}}{a(n+1)}$. Check by differentiating — you must recover the integrand.",
          },
        ],
        keyFormulas: [
          {
            name: "Power integral",
            statement: "$\\int x^n\\,dx = \\frac{x^{n+1}}{n+1} + c$",
          },
          {
            name: "Log integral",
            statement: "$\\int \\frac{1}{x}\\,dx = \\ln|x| + c$",
          },
        ],
        workedExample: {
          problem: "Find $\\int (3x^2 - 4x + 5)\\,dx$.",
          solution:
            "Integrate term by term: $x^3 - 2x^2 + 5x + c$. Check: $\\frac{d}{dx} = 3x^2 - 4x + 5$. ✓",
        },
      },
      questions: [
        {
          id: "cial-m-u4-ii-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is $\\int x^3\\,dx$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{x^4}{4} + c$" },
              { id: "b", text: "$\\frac{x^2}{2} + c$" },
              { id: "c", text: "$x^4 + c$" },
              { id: "d", text: "$4x^4 + c$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Power integral",
                statement: "Increase power by 1, divide by new power, add c.",
              },
            ],
            steps: [
              { reasoning: "$\\frac{x^4}{4} + c$.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(a)** $\\frac{x^4}{4} + c$",
            commonErrors: ["Dividing instead of multiplying by new power."],
          },
        },
        {
          id: "cial-m-u4-ii-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find $\\int (2x + 1)^3\\,dx$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Reverse chain",
                statement: "Integrate outer, divide by inner derivative.",
              },
            ],
            steps: [
              {
                reasoning: "$\\frac{(2x+1)^4}{4 \\times 2}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$= \\frac{(2x+1)^4}{8} + c$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\frac{(2x+1)^4}{8} + c$",
            commonErrors: ["Forgetting to divide by inner derivative 2."],
          },
        },
        {
          id: "cial-m-u4-ii-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Find $\\int \\frac{6x^2 + 4x}{x^3 + 2x^2}\\,dx$ given that the denominator's derivative appears in the numerator.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Substitution",
                statement:
                  "If numerator is derivative of denominator, result is $\\ln|denominator|$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$\\frac{d}{dx}(x^3 + 2x^2) = 3x^2 + 4x$ — not quite numerator.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Rewrite numerator as $2(3x^2+4x) - 2x^2$: partial recognition.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Alternative: recognise $\\frac{3x^2+4x}{x^3+2x^2}$ pattern → $\\ln|x^3+2x^2|$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Correct antiderivative found.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\ln|x^3+2x^2| + c$",
            commonErrors: [
              "Forcing substitution where simple ln rule applies.",
            ],
          },
        },
        {
          id: "cial-m-u4-ii-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Indefinite integration.",
          parts: [
            {
              label: "a",
              prompt: "State the power rule for integration.",
              marks: 1,
            },
            { label: "b", prompt: "Why is $+c$ always included?", marks: 2 },
            {
              label: "c",
              prompt: "Find $\\int (4x^3 - 6x + 2)\\,dx$.",
              marks: 3,
            },
            { label: "d", prompt: "Find $\\int (x-2)^5\\,dx$.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Integration",
                statement: "Power rule+c+termwise+chain.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$\\frac{x^{n+1}}{n+1} + c$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Infinitely many antiderivatives.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Differ by a constant.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Term-by-term integration.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "$x^4 - 3x^2 + 2x + c$.",
                marks: 1,
                markCode: "M",
              },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "A" },
              {
                part: "d",
                reasoning: "Reverse chain applied.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "$\\frac{(x-2)^6}{6}$ — inner derivative 1.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "$+ c$ included.",
                marks: 1,
                markCode: "M",
              },
              { part: "d", reasoning: "Correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "(a) power rule (b) constant family (c) $x^4-3x^2+2x+c$ (d) $(x-2)^6/6+c$",
          },
        },
        {
          id: "cial-m-u4-ii-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is $\\int (5x^4 - 3x^2 + 7)\\,dx$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x^5 - x^3 + 7x + c$" },
              { id: "b", text: "$\\frac{x^5}{5} - \\frac{x^3}{3} + 7x + c$" },
              { id: "c", text: "$5x^5 - x^3 + 7x + c$" },
              { id: "d", text: "$x^5 - x^3 + 7 + c$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Power integral",
                statement: "Increase power by 1, divide by new power, add c.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Term by term: $\\int 5x^4 dx = x^5$, $\\int -3x^2 dx = -x^3$, $\\int 7 dx = 7x$, then $+c$.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** $x^5 - x^3 + 7x + c$",
            commonErrors: ["Dividing each term by the new power again."],
          },
        },
        {
          id: "cial-m-u4-ii-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Find the value of $k$ such that $\\int kx^3\\,dx = x^4 + c$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 4 }] },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Power integral",
                statement: "$\\int x^3 dx = \\frac{x^4}{4}$, so $k = 4$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$\\int kx^3\\,dx = \\frac{kx^4}{4}$; require $\\frac{k}{4} = 1$ so $k = 4$.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "$k = 4$",
            commonErrors: ["Setting $k = \\frac{1}{4}$ instead of 4."],
          },
        },
        {
          id: "cial-m-u4-ii-q7",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find $\\int (6x^5 - 4x^3 + 2x)\\,dx$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Power integral",
                statement: "Integrate each term separately and add $c$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$x^6 - x^4 + x^2 + c$ by term-by-term integration.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Check by differentiating recovers the integrand.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Correct answer with $+c$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x^6 - x^4 + x^2 + c$",
            commonErrors: ["Omitting $+c$."],
          },
        },
        {
          id: "cial-m-u4-ii-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "The integral $\\int (8x^3 + 5)\\,dx = 2x^4 + 5x + c$. What is the coefficient of $x^4$ in the answer?",
          response: { type: "numeric", parts: [{ label: "a", answer: 2 }] },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Power integral",
                statement: "$\\int 8x^3 dx = \\frac{8x^4}{4} = 2x^4$.",
              },
            ],
            steps: [
              {
                reasoning: "Coefficient of $x^4$ is $2$.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "$2$",
          },
        },
        {
          id: "cial-m-u4-ii-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is $\\int (x+3)^4\\,dx$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$(x+3)^5 + c$" },
              { id: "b", text: "$\\frac{(x+3)^5}{5} + c$" },
              { id: "c", text: "$\\frac{(x+3)^5}{20} + c$" },
              { id: "d", text: "$4(x+3)^3 + c$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Reverse chain",
                statement: "Inner derivative is 1, so no extra factor.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Inner function $x+3$ has derivative 1: $\\frac{(x+3)^5}{5}+c$.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** $\\frac{(x+3)^5}{5} + c$",
            commonErrors: ["Dividing by an inner derivative that is 1."],
          },
        },
        {
          id: "cial-m-u4-ii-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "The answer to $\\int 9(x-2)^5\\,dx$ has the form $k(x-2)^6 + c$. Find $k$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 1.5 }] },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Reverse chain",
                statement: "$\\int 9(x-2)^5 dx = 9\\cdot\\frac{(x-2)^6}{6} = \\frac{3}{2}(x-2)^6$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$9 \\times \\frac{1}{6} = \\frac{3}{2}$, so $k = 1.5$.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "$k = \\frac{3}{2}$",
            commonErrors: ["Forgetting to multiply by the outer constant 9."],
          },
        },
        {
          id: "cial-m-u4-ii-q11",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Find $\\int (3x-2)^4\\,dx$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Reverse chain",
                statement: "Divide by inner derivative 3 as well as new power.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Inner derivative is 3: $\\frac{(3x-2)^5}{5 \\times 3}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$= \\frac{(3x-2)^5}{15} + c$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Check: $\\frac{d}{dx}\\frac{(3x-2)^5}{15} = \\frac{5(3x-2)^4 \\times 3}{15} = (3x-2)^4$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac{(3x-2)^5}{15} + c$",
            commonErrors: ["Dividing by 5 but not by 3."],
          },
        },
        {
          id: "cial-m-u4-ii-q12",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which is the correct antiderivative of $\\frac{x^2-1}{x^2}$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{x^3}{3} - x + c$" },
              { id: "b", text: "$x + \\frac{1}{x} + c$" },
              { id: "c", text: "$x - \\frac{1}{x} + c$" },
              { id: "d", text: "$1 + \\frac{1}{x^2} + c$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Simplify first",
                statement: "$\\frac{x^2-1}{x^2} = 1 - x^{-2}$, integrate term by term.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$\\int (1 - x^{-2})dx = x + x^{-1} + c = x + \\frac{1}{x} + c$.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** $x + \\frac{1}{x} + c$",
            commonErrors: ["Integrating $x^{-2}$ as $-x^{-1}$ with wrong sign."],
          },
        },
        {
          id: "cial-m-u4-ii-q13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is $\\int \\frac{1}{x}\\,dx$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x\\ln x + c$" },
              { id: "b", text: "$\\ln|x| + c$" },
              { id: "c", text: "$\\frac{1}{x^2} + c$" },
              { id: "d", text: "$-\\frac{1}{x} + c$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Log integral",
                statement: "$\\int \\frac{1}{x}dx = \\ln|x| + c$.",
              },
            ],
            steps: [
              {
                reasoning: "Standard result: $\\ln|x| + c$.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** $\\ln|x| + c$",
            commonErrors: ["Confusing with $\\int x^{-1}$ vs $\\int x$."],
          },
        },
        {
          id: "cial-m-u4-ii-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Given that $\\frac{dy}{dx} = 6x^2$ and $y = 4$ when $x = 1$, find $y$ in terms of $x$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Integration with condition",
                statement: "Integrate, then use the given point to find $c$.",
              },
            ],
            steps: [
              {
                reasoning: "$y = \\int 6x^2 dx = 2x^3 + c$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$4 = 2(1)^3 + c \\Rightarrow c = 2$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$y = 2x^3 + 2$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$y = 2x^3 + 2$",
            commonErrors: ["Forgetting to use the condition to find $c$."],
          },
        },
        {
          id: "cial-m-u4-ii-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "If $F(x) = \\int (3x^2 - 4)\\,dx$ and $F(0) = 1$, what is $F(2)$?",
          response: { type: "numeric", parts: [{ label: "a", answer: 1 }] },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Constant of integration",
                statement: "General integral is $x^3 - 4x + c$; use $F(0)=1$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$F(x) = x^3 - 4x + c$; $F(0)=1 \\Rightarrow c=1$; $F(2) = 8 - 8 + 1 = 1$.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "$F(2) = 1$",
            commonErrors: ["Leaving $c$ undetermined and evaluating anyway."],
          },
        },
        {
          id: "cial-m-u4-ii-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Indefinite integration.",
          parts: [
            { label: "a", prompt: "State the integral of $x^n$ for $n \\ne -1$.", marks: 1 },
            { label: "b", prompt: "State the integral of $\\frac{1}{x}$.", marks: 1 },
            {
              label: "c",
              prompt: "Find $\\int (4x^3 - 6x^2 + 2)\\,dx$.",
              marks: 3,
            },
            {
              label: "d",
              prompt: "Find $\\int 8(x-1)^3\\,dx$.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Indefinite integrals",
                statement: "Rules+c+polynomial+chain.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$\\frac{x^{n+1}}{n+1} + c$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$\\ln|x| + c$.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Term-by-term integration.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "$x^4 - 2x^3 + 2x + c$.",
                marks: 1,
                markCode: "M",
              },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "A" },
              {
                part: "d",
                reasoning: "Inner derivative is 1.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "$8 \\times \\frac{(x-1)^4}{4}$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "$= 2(x-1)^4 + c$.",
                marks: 1,
                markCode: "M",
              },
              { part: "d", reasoning: "Correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "(a) $\\frac{x^{n+1}}{n+1}+c$ (b) $\\ln|x|+c$ (c) $x^4-2x^3+2x+c$ (d) $2(x-1)^4+c$",
          },
        },
      ],
    },
    {
      id: "cial-m-u4-definite",
      title: "Definite integrals and areas",
      skill: "Evaluate definite integrals and find areas under curves.",
      lesson: {
        sections: [
          {
            heading: "Definite integrals",
            body: "$\\int_a^b f(x)\\,dx = F(b) - F(a)$ — the constant cancels. Represents signed area between curve and x-axis from a to b.",
          },
          {
            heading: "Area between curve and axis",
            body: "If f(x) ≥ 0 on [a,b], $\\int_a^b f(x)\\,dx$ gives area. If f changes sign, split at zeros and add absolute areas.",
          },
          {
            heading: "Area between two curves",
            body: "Area between y = f(x) (top) and y = g(x) (bottom): $\\int_a^b [f(x) - g(x)]\\,dx$ where a, b are intersection x-coordinates.",
          },
        ],
        keyFormulas: [
          {
            name: "Definite integral",
            statement: "$\\int_a^b f(x)\\,dx = F(b) - F(a)$",
          },
          { name: "Area", statement: "$A = \\int_a^b (f-g)\\,dx$" },
        ],
        workedExample: {
          problem: "Find the area under $y = x^2$ from x = 0 to 3.",
          solution:
            "$\\int_0^3 x^2\\,dx = [\\frac{x^3}{3}]_0^3 = \\frac{27}{3} - 0 = 9$ square units.",
        },
      },
      questions: [
        {
          id: "cial-m-u4-di-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Evaluate $\\int_0^2 3x^2\\,dx$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$4$" },
              { id: "b", text: "$8$" },
              { id: "c", text: "$6$" },
              { id: "d", text: "$12$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Definite integral",
                statement: "$F(b) - F(a)$.",
              },
            ],
            steps: [
              {
                reasoning: "$[x^3]_0^2 = 8 - 0 = 8$.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** $8$",
            commonErrors: ["Forgetting to subtract lower limit."],
          },
        },
        {
          id: "cial-m-u4-di-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the area under $y = 2x$ from x = 1 to 4.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Area",
                statement: "Integrate and evaluate between limits.",
              },
            ],
            steps: [
              {
                reasoning: "$\\int_1^4 2x\\,dx = [x^2]_1^4 = 16 - 1 = 15$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Area = $15$ units².", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$15$",
            commonErrors: ["Using indefinite integral without limits."],
          },
        },
        {
          id: "cial-m-u4-di-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Find the area enclosed by $y = x^2$ and $y = x$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Area between curves",
                statement: "Integrate top minus bottom between intersections.",
              },
            ],
            steps: [
              {
                reasoning: "Intersections: $x^2 = x \\Rightarrow x = 0, 1$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "On [0,1], $x > x^2$ — integrate $x - x^2$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "$\\int_0^1 (x - x^2)\\,dx = [\\frac{x^2}{2} - \\frac{x^3}{3}]_0^1 = \\frac{1}{2} - \\frac{1}{3} = \\frac{1}{6}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Area = $\\frac{1}{6}$ units².",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\frac{1}{6}$",
            commonErrors: [
              "Wrong order of subtraction — must be top minus bottom.",
            ],
          },
        },
        {
          id: "cial-m-u4-di-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Definite integrals and areas.",
          parts: [
            { label: "a", prompt: "Evaluate $\\int_0^2 3x^2\\,dx$.", marks: 2 },
            {
              label: "b",
              prompt: "Why does c cancel in definite integrals?",
              marks: 2,
            },
            { label: "c", prompt: "Area under $y=2x$ from 1 to 4?", marks: 2 },
            { label: "d", prompt: "Area between $y=x^2$ and $y=x$.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Integration",
                statement: "Evaluate+cancellation+area+between curves.",
              },
            ],
            steps: [
              { part: "a", reasoning: "$[x^3]_0^2$.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "$=8$.", marks: 1, markCode: "A" },
              {
                part: "b",
                reasoning: "c appears in both F(b) and F(a).",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Subtracts out.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "$[x^2]_1^4 = 15$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Correct area.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Intersections x=0,1.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "$\\int_0^1(x-x^2)dx$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "$= \\frac{1}{2} - \\frac{1}{3}$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "$= \\frac{1}{6}$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) 8 (b) cancels (c) 15 (d) 1/6",
          },
        },
        {
          id: "cial-m-u4-di-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Evaluate $\\int_0^3 2x\\,dx$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$3$" },
              { id: "b", text: "$18$" },
              { id: "c", text: "$6$" },
              { id: "d", text: "$9$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Definite integral",
                statement: "$[x^2]_0^3 = 9 - 0 = 9$.",
              },
            ],
            steps: [
              {
                reasoning: "$[x^2]_0^3 = 9$.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** $9$",
            commonErrors: ["Using $2x$ antiderivative $2x^2$ without dividing."],
          },
        },
        {
          id: "cial-m-u4-di-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Evaluate $\\int_1^2 (3x^2 + 1)\\,dx$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 8 }] },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Definite integral",
                statement: "$[x^3 + x]_1^2 = 10 - 2 = 8$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$[x^3+x]_1^2 = (8+2) - (1+1) = 8$.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "$8$",
          },
        },
        {
          id: "cial-m-u4-di-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Evaluate $\\int_0^9 \\sqrt{x}\\,dx$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Definite integral",
                statement: "$\\int x^{1/2}dx = \\frac{2}{3}x^{3/2}$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$[\\frac{2}{3}x^{3/2}]_0^9 = \\frac{2}{3} \\times 27 - 0$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$= 18$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$18$",
            commonErrors: ["Evaluating $9^{3/2}$ incorrectly."],
          },
        },
        {
          id: "cial-m-u4-di-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Evaluate $\\int_1^3 \\left(2x - \\frac{1}{x^2}\\right)dx$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Definite integral",
                statement: "$\\int x^{-2}dx = -x^{-1}$; apply to both terms.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$[x^2 + \\frac{1}{x}]_1^3 = (9 + \\frac{1}{3}) - (1 + 1)$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$= \\frac{22}{3}$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac{22}{3}$",
            commonErrors: ["Wrong sign on the $x^{-2}$ term."],
          },
        },
        {
          id: "cial-m-u4-di-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "What is the area under $y = x^2$ from $x = 0$ to $x = 2$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$4$" },
              { id: "b", text: "$\\frac{4}{3}$" },
              { id: "c", text: "$\\frac{16}{3}$" },
              { id: "d", text: "$\\frac{8}{3}$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Area under curve",
                statement: "$\\int_0^2 x^2 dx = [\\frac{x^3}{3}]_0^2 = \\frac{8}{3}$.",
              },
            ],
            steps: [
              {
                reasoning: "$[\\frac{x^3}{3}]_0^2 = \\frac{8}{3}$.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** $\\frac{8}{3}$",
            commonErrors: ["Forgetting to subtract lower limit gives same here but method matters."],
          },
        },
        {
          id: "cial-m-u4-di-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Evaluate $\\int_{-1}^{1} x^3\\,dx$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 0 }] },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Symmetry",
                statement: "Odd function over symmetric interval gives 0.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$[\\frac{x^4}{4}]_{-1}^{1} = \\frac{1}{4} - \\frac{1}{4} = 0$.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "$0$",
            commonErrors: ["Assuming the integral is positive."],
          },
        },
        {
          id: "cial-m-u4-di-q11",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Find the area enclosed by $y = x^2 - 4x + 3$ and the x-axis.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Area with sign change",
                statement: "Find roots, integrate |f| on each interval.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$x^2 - 4x + 3 = (x-1)(x-3)$; roots $x = 1, 3$; curve below axis between them.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Area $= \\int_1^3 (-(x^2-4x+3))\\,dx = \\int_1^3 (-x^2+4x-3)\\,dx$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "$= [-\\frac{x^3}{3} + 2x^2 - 3x]_1^3 = (-9+18-9) - (-\\frac{1}{3}+2-3)$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$= \\frac{4}{3}$ units².", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac{4}{3}$",
            commonErrors: ["Integrating without the negative sign."],
          },
        },
        {
          id: "cial-m-u4-di-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "The area enclosed by $y = x^2$ and $y = x$ between $x = 0$ and $x = 1$ is given by which integral?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\int_0^1 x^2\\,dx$" },
              { id: "b", text: "$\\int_0^1 (x + x^2)\\,dx$" },
              { id: "c", text: "$\\int_0^1 (x - x^2)\\,dx$" },
              { id: "d", text: "$\\int_0^1 (x^2 - x)\\,dx$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Area between curves",
                statement: "On [0,1], $x \\ge x^2$ so integrate top minus bottom.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Top minus bottom: $\\int_0^1 (x - x^2)\\,dx$.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** $\\int_0^1 (x - x^2)\\,dx$",
            commonErrors: ["Reversing top and bottom."],
          },
        },
        {
          id: "cial-m-u4-di-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "Evaluate $\\int_0^2 (x^2 + 2x)\\,dx$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Definite integral",
                statement: "$[\\frac{x^3}{3} + x^2]_0^2$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$= (\\frac{8}{3} + 4) - 0 = \\frac{20}{3}$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$= \\frac{20}{3}$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac{20}{3}$",
          },
        },
        {
          id: "cial-m-u4-di-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the positive value of $k$ such that $\\int_0^k x\\,dx = 8$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Definite integral with unknown limit",
                statement: "Evaluate then solve for the limit.",
              },
            ],
            steps: [
              {
                reasoning: "$[\\frac{x^2}{2}]_0^k = \\frac{k^2}{2} = 8$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$k^2 = 16 \\Rightarrow k = 4$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$k = 4$",
            commonErrors: ["Taking the negative root."],
          },
        },
        {
          id: "cial-m-u4-di-q15",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does $\\int_a^b f(x)\\,dx$ represent geometrically when $f$ changes sign on $[a,b]$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The distance travelled" },
              { id: "b", text: "The volume under the curve" },
              {
                id: "c",
                text: "The net (signed) area between the curve and the x-axis",
              },
              { id: "d", text: "The total area regardless of sign" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Signed area",
                statement: "Definite integral gives signed area; negative parts subtract.",
              },
            ],
            steps: [
              {
                reasoning: "Net signed area; split at zeros for total area.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** Net signed area",
            commonErrors: ["Confusing with total area."],
          },
        },
        {
          id: "cial-m-u4-di-q16",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Definite integrals and areas.",
          parts: [
            { label: "a", prompt: "Evaluate $\\int_0^2 (3x^2 - 2x)\\,dx$.", marks: 3 },
            {
              label: "b",
              prompt: "Find the area under $y = x^2$ from $x = 1$ to $x = 3$.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Find the area enclosed by $y = x$ and $y = x^2$.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Definite integrals",
                statement: "Evaluate+area+between curves.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$[x^3 - x^2]_0^2$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "$= (8 - 4) - 0 = 4$.",
                marks: 1,
                markCode: "M",
              },
              { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
              {
                part: "b",
                reasoning: "$[\\frac{x^3}{3}]_1^3 = 9 - \\frac{1}{3}$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$= \\frac{26}{3}$ units².",
                marks: 1,
                markCode: "M",
              },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
              {
                part: "c",
                reasoning: "Intersections: $x = 0, 1$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "$\\int_0^1 (x - x^2)\\,dx$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "$= [\\frac{x^2}{2} - \\frac{x^3}{3}]_0^1 = \\frac{1}{6}$.",
                marks: 1,
                markCode: "M",
              },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 4 (b) 26/3 (c) 1/6",
          },
        },
      ],
    },
    {
      id: "cial-m-u4-integration-apps",
      title: "Integration techniques and applications",
      skill:
        "Integrate with substitution and apply integration to motion problems.",
      lesson: {
        sections: [
          {
            heading: "Substitution",
            body: "For $\\int f(g(x)) g'(x)\\,dx$, let $u = g(x)$, $du = g'(x)dx$ — reduces to $\\int f(u)\\,du$. Classic case: $\\int 2x(x^2+1)^3\\,dx$ with $u = x^2+1$.",
          },
          {
            heading: "Applications",
            body: "If $a = \\frac{d^2s}{dt^2}$, integrate twice: $v = \\int a\\,dt + c_1$, $s = \\int v\\,dt + c_2$. Constants determined by initial conditions.",
          },
          {
            heading: "Checking answers",
            body: "Differentiate your integral — you should recover the integrand. For definite integrals, sanity-check the sign and magnitude of the area.",
          },
        ],
        keyFormulas: [
          { name: "Substitution", statement: "$u = g(x),\\ du = g'(x)dx$" },
          {
            name: "Applications",
            statement: "$v = \\int a\\,dt + c_1;\\ s = \\int v\\,dt + c_2$",
          },
        ],
        workedExample: {
          problem:
            "A particle has acceleration $a = 6t$. If $v(0) = 2$ and $s(0) = 0$, find v and s.",
          solution:
            "$v = \\int 6t\\,dt + c_1 = 3t^2 + 2$. $s = \\int (3t^2+2)\\,dt = t^3 + 2t$.",
        },
      },
      questions: [
        {
          id: "cial-m-u4-ia-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What substitution simplifies $\\int 2x(x^2+1)^3\\,dx$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$u = 2x$" },
              { id: "b", text: "$u = x^2 + 1$" },
              { id: "c", text: "$u = (x^2+1)^3$" },
              { id: "d", text: "$u = x^3$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Substitution",
                statement: "Choose u so that du appears in integrand.",
              },
            ],
            steps: [
              {
                reasoning: "$du = 2x\\,dx$ — present in integrand.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** $u = x^2+1$",
            commonErrors: ["Choosing u without matching du."],
          },
        },
        {
          id: "cial-m-u4-ia-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A particle has $a = 4t$. Find v(t) given $v(0) = 1$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Applications",
                statement: "Integrate acceleration; use initial condition.",
              },
            ],
            steps: [
              {
                reasoning: "$v = \\int 4t\\,dt + c = 2t^2 + c$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$v(0)=1 \\Rightarrow c=1$, so $v = 2t^2 + 1$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$v = 2t^2 + 1$",
            commonErrors: ["Ignoring initial condition."],
          },
        },
        {
          id: "cial-m-u4-ia-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Use substitution to find $\\int x\\sqrt{x^2+1}\\,dx$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Substitution",
                statement: "Let $u = x^2+1$, $du = 2x\\,dx$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$x\\,dx = \\frac{1}{2}du$; integrand becomes $\\frac{1}{2}\\sqrt{u}\\,du$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "$= \\frac{1}{2} \\cdot \\frac{2}{3}u^{3/2} = \\frac{1}{3}u^{3/2}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$= \\frac{1}{3}(x^2+1)^{3/2} + c$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Correct answer.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac{1}{3}(x^2+1)^{3/2} + c$",
            commonErrors: ["Forgetting the ½ from du = 2x dx."],
          },
        },
        {
          id: "cial-m-u4-ia-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Integration applications.",
          parts: [
            {
              label: "a",
              prompt: "Choose u for $\\int x\\sqrt{x^2+1}\\,dx$.",
              marks: 1,
            },
            { label: "b", prompt: "Evaluate the integral in (a).", marks: 3 },
            {
              label: "c",
              prompt: "Particle: a=6t, v(0)=2, s(0)=0. Find v and s.",
              marks: 3,
            },
            { label: "d", prompt: "How do you check an integral?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Applications",
                statement: "Substitution+applications+checking.",
              },
            ],
            steps: [
              { part: "a", reasoning: "$u = x^2+1$.", marks: 1, markCode: "M" },
              {
                part: "b",
                reasoning: "$\\frac{1}{3}(x^2+1)^{3/2} + c$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Correct substitution steps.",
                marks: 1,
                markCode: "M",
              },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
              {
                part: "c",
                reasoning: "$v = 3t^2 + 2$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "$s = t^3 + 2t$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Both correct.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Differentiate result.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Should recover integrand.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Checking method explained.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) u=x²+1 (b) (x²+1)^{3/2}/3+c (c) v=3t²+2, s=t³+2t (d) differentiate",
          },
        },
        {
          id: "cial-m-u4-ia-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which substitution simplifies $\\int x^2(x^3+2)^4\\,dx$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$u = x^2$" },
              { id: "b", text: "$u = x^3 + 2$" },
              { id: "c", text: "$u = (x^3+2)^4$" },
              { id: "d", text: "$u = x^3 + 4$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Substitution",
                statement: "du = 3x^2 dx appears in the integrand.",
              },
            ],
            steps: [
              {
                reasoning: "$u = x^3+2$ gives $du = 3x^2 dx$.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** $u = x^3 + 2$",
            commonErrors: ["Choosing u that does not match du."],
          },
        },
        {
          id: "cial-m-u4-ia-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "A particle has acceleration $a = 3t^2$ with $v(0) = 1$ and $s(0) = 0$. Find $s(2)$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Applications",
                statement: "Integrate twice; apply initial conditions.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$v = \\int 3t^2 dt = t^3 + 1$ (since $v(0)=1$); $s = \\int (t^3+1)dt = \\frac{t^4}{4} + t$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$s(2) = \\frac{16}{4} + 2 = 6$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$s(2) = 6$",
            commonErrors: ["Forgetting the initial condition constants."],
          },
        },
        {
          id: "cial-m-u4-ia-q7",
          difficulty: "core",
          totalMarks: 3,
          stem: "A particle has acceleration $a = 6 - 2t$ and $v(0) = 3$. Find $v(t)$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Applications",
                statement: "$v = \\int a\\,dt + c$; find $c$ from $v(0)$.",
              },
            ],
            steps: [
              {
                reasoning: "$v = \\int (6-2t)dt = 6t - t^2 + c$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$v(0) = 3 \\Rightarrow c = 3$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$v = 6t - t^2 + 3$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$v = 6t - t^2 + 3$",
            commonErrors: ["Dropping the constant term."],
          },
        },
        {
          id: "cial-m-u4-ia-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "The integral $\\int 2x(x^2+1)^3\\,dx$ equals $k(x^2+1)^4 + c$. Find $k$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 0.25 }] },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Substitution",
                statement: "$u = x^2+1$ gives $\\frac{1}{2}\\int u^3 du = \\frac{u^4}{8}$... wait, recheck: $\\frac{1}{2}\\cdot\\frac{u^4}{4} = \\frac{u^4}{8}$? No — $du=2xdx$ so integrand $= \\frac{1}{2}u^3 du$, integral $= \\frac{u^4}{8}$? $\\frac12 \\times \\frac{u^4}{4} = \\frac{u^4}{8}$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$\\int 2x(x^2+1)^3 dx = \\frac{1}{2}\\int u^3 du \\cdot 2$... direct: $u=x^2+1$, $du=2xdx$, integral $= \\int u^3 du = \\frac{u^4}{4}$. So $k = 0.25$.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "$k = \\frac{1}{4}$",
            commonErrors: ["Extra factor of 2 in the coefficient."],
          },
        },
        {
          id: "cial-m-u4-ia-q9",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A particle has acceleration $a = -6t$ with $v(0) = 10$ and $s(0) = 0$. Find $s(2)$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Applications",
                statement: "Integrate twice with initial conditions.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$v = \\int -6t\\,dt + 10 = -3t^2 + 10$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$s = \\int (-3t^2+10)dt = -t^3 + 10t$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$s(2) = -8 + 20 = 12$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$s(2) = 12$",
            commonErrors: ["Sign error on the integrated acceleration."],
          },
        },
        {
          id: "cial-m-u4-ia-q10",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Use substitution to find $\\int (x+1)(x^2+2x)^3\\,dx$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Substitution",
                statement: "$u = x^2+2x$, $du = (2x+2)dx = 2(x+1)dx$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$(x+1)dx = \\frac{1}{2}du$; integral $= \\frac{1}{2}\\int u^3 du$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$= \\frac{1}{2} \\cdot \\frac{u^4}{4} = \\frac{u^4}{8}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$= \\frac{(x^2+2x)^4}{8} + c$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac{(x^2+2x)^4}{8} + c$",
            commonErrors: ["Missing the factor $\\frac{1}{2}$ from $du$."],
          },
        },
        {
          id: "cial-m-u4-ia-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the area under a velocity-time graph give when the velocity changes sign?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Displacement (signed); total distance needs splitting at zeros" },
              { id: "b", text: "The acceleration" },
              { id: "c", text: "The speed at each instant" },
              { id: "d", text: "Always the total distance travelled" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Area under v-t",
                statement: "Signed area = displacement; split for distance.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Area gives displacement; negative parts must be split off for distance.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** Signed displacement; split at zeros for distance",
            commonErrors: ["Confusing displacement with distance."],
          },
        },
        {
          id: "cial-m-u4-ia-q12",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A particle has velocity $v = 12t - 3t^2$ for $t \\ge 0$. Find the time at which it next comes instantaneously to rest after $t = 0$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Kinematics",
                statement: "Instantaneous rest: $v = 0$.",
              },
            ],
            steps: [
              {
                reasoning: "Set $12t - 3t^2 = 0$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$3t(4 - t) = 0$ so $t = 0$ or $t = 4$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Next rest after $t=0$ is $t = 4$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$t = 4$",
            commonErrors: ["Giving $t = 0$ as the answer."],
          },
        },
        {
          id: "cial-m-u4-ia-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A particle has velocity $v = 6 - 3t$. Find the total distance travelled in the first 4 seconds.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Distance vs displacement",
                statement: "Split at $v=0$ ($t=2$) and sum absolute areas.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$v = 0$ at $t = 2$; positive on $[0,2]$, negative on $[2,4]$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "$\\int_0^2 (6-3t)dt = [6t - \\frac{3t^2}{2}]_0^2 = 12 - 6 = 6$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "$\\int_2^4 (6-3t)dt = [6t - \\frac{3t^2}{2}]_2^4 = (24-24) - (12-6) = -6$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Distance $= 6 + 6 = 12$ m.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$12$ m",
            commonErrors: ["Reporting displacement 0 instead of distance."],
          },
        },
        {
          id: "cial-m-u4-ia-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How do you check an indefinite integral answer?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Differentiate it — you should recover the integrand" },
              { id: "b", text: "Evaluate it at $x = 0$" },
              { id: "c", text: "Differentiate twice" },
              { id: "d", text: "Substitute $x = 1$ only" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Checking",
                statement: "Integration reverses differentiation.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Differentiate the result; it must equal the integrand.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** Differentiate and recover the integrand",
            commonErrors: ["Not checking by differentiation."],
          },
        },
        {
          id: "cial-m-u4-ia-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Use substitution to find $\\int x^2\\sqrt{x^3+1}\\,dx$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Substitution",
                statement: "$u = x^3+1$, $du = 3x^2 dx$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$x^2 dx = \\frac{1}{3}du$; integral $= \\frac{1}{3}\\int u^{1/2}du$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$= \\frac{1}{3} \\cdot \\frac{2}{3}u^{3/2} = \\frac{2}{9}u^{3/2}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$= \\frac{2}{9}(x^3+1)^{3/2} + c$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac{2}{9}(x^3+1)^{3/2} + c$",
            commonErrors: ["Forgetting the $\\frac{1}{3}$ factor."],
          },
        },
        {
          id: "cial-m-u4-ia-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Integration applications.",
          parts: [
            {
              label: "a",
              prompt: "Choose $u$ to simplify $\\int 2x(x^2-3)^5\\,dx$.",
              marks: 1,
            },
            {
              label: "b",
              prompt: "Evaluate the integral in (a).",
              marks: 3,
            },
            {
              label: "c",
              prompt: "A particle has $a = 4t$, $v(0) = -1$, $s(0) = 0$. Find $v(2)$ and $s(2)$.",
              marks: 3,
            },
            {
              label: "d",
              prompt: "State one way to check an integral.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Applications",
                statement: "Substitution+kinematics+checking.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$u = x^2 - 3$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$\\int u^5 du = \\frac{u^6}{6}$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$= \\frac{(x^2-3)^6}{6} + c$.",
                marks: 1,
                markCode: "M",
              },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
              {
                part: "c",
                reasoning: "$v = 2t^2 - 1$, so $v(2) = 7$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "$s = \\frac{2t^3}{3} - t$, so $s(2) = \\frac{16}{3} - 2 = \\frac{10}{3}$.",
                marks: 1,
                markCode: "M",
              },
              { part: "c", reasoning: "Both correct.", marks: 1, markCode: "A" },
              {
                part: "d",
                reasoning: "Differentiate the result.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Should recover the integrand.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) u=x²−3 (b) (x²−3)⁶/6+c (c) v(2)=7, s(2)=10/3 (d) differentiate",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cial-m-u4-integration-notes",
      title: "Integration — revision notes",
      summary:
        "Indefinite/definite integrals, areas, substitution and applications.",
      sections: [
        {
          heading: "Basics",
          body: "$\\int x^n dx = \\frac{x^{n+1}}{n+1}+c$; $\\int \\frac{1}{x}dx = \\ln|x|+c$. Definite: $F(b)-F(a)$.",
        },
        {
          heading: "Areas",
          body: "Area under curve = definite integral. Between curves: top minus bottom between intersections. Split at zeros if function changes sign.",
        },
        {
          heading: "Techniques",
          body: "Substitution: match du to part of integrand. Kinematics and other applications: integrate with initial conditions. Check by differentiating.",
        },
      ],
    },
  ],
};
