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
              { id: "b", text: "$4x^4 + c$" },
              { id: "c", text: "$\\frac{x^2}{2} + c$" },
              { id: "d", text: "$x^4 + c$" },
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
              { id: "a", text: "$8$" },
              { id: "b", text: "$6$" },
              { id: "c", text: "$4$" },
              { id: "d", text: "$12$" },
            ],
            correctChoiceId: "a",
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
              { id: "a", text: "$u = x^2 + 1$" },
              { id: "b", text: "$u = x^3$" },
              { id: "c", text: "$u = 2x$" },
              { id: "d", text: "$u = (x^2+1)^3$" },
            ],
            correctChoiceId: "a",
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
