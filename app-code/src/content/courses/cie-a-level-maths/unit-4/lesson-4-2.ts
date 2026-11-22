import type { Lesson } from "../../../types.ts";

export const lesson142: Lesson = {
  id: "cial-m-u4-lesson-4-2",
  code: "4-2",
  title: "Integration by substitution and partial fractions",
  goal: "I CAN integrate using substitution and partial fractions.",
  standards: ["9709 Pure Mathematics 1: integration techniques"],
  vocabulary: [
    {
      term: "Substitution",
      definition: "Replacing variable with u to simplify the integral.",
    },
    {
      term: "Partial fractions",
      definition:
        "Breaking rational function into simpler fractions that integrate easily.",
    },
    { term: "Rational function", definition: "Ratio of two polynomials." },
    {
      term: "Improper fraction",
      definition: "Fraction where numerator degree ≥ denominator degree.",
    },
    {
      term: "Cover-up method",
      definition: "Shortcut for finding partial fraction coefficients.",
    },
    {
      term: "Change of limits",
      definition:
        "Converting x-limits to u-limits when substituting in definite integrals.",
    },
  ],
  concepts: [
    {
      id: "cial-m-u4-substitution",
      title: "Integration by substitution",
      skill: "Choose and apply substitutions to evaluate integrals.",
      lesson: {
        sections: [
          {
            heading: "Choosing u",
            body: "Look for a composite function where the inner function's derivative appears in the integrand. If $du$ is a constant multiple of part of the integrand, substitution works cleanly.",
          },
          {
            heading: "Substitution steps",
            body: "1) Identify u and du. 2) Rewrite integrand entirely in u. 3) Integrate. 4) Substitute back. For definite integrals, either change limits to u or revert to x before evaluating.",
          },
          {
            heading: "Common patterns",
            body: "$\\int f'(x)[f(x)]^n dx = \\frac{[f(x)]^{n+1}}{n+1}$. Also $\\int \\frac{f'(x)}{f(x)}dx = \\ln|f(x)|$. Recognise these instantly.",
          },
        ],
        keyFormulas: [
          { name: "Substitution", statement: "$u=g(x),\\ du=g'(x)dx$" },
          {
            name: "Pattern",
            statement: "$\\int f'(x)[f(x)]^n dx = \\frac{[f(x)]^{n+1}}{n+1}+c$",
          },
        ],
        workedExample: {
          problem: "Find $\\int x(x^2+4)^5\\,dx$.",
          solution:
            "Let $u=x^2+4$, $du=2x\\,dx$. Integral $= \\frac{1}{2}\\int u^5\\,du = \\frac{u^6}{12} = \\frac{(x^2+4)^6}{12}+c$.",
        },
      },
      questions: [
        {
          id: "cial-m-u4-sub-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the first step in integration by substitution?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Expand the integrand" },
              { id: "b", text: "Differentiate the integrand" },
              { id: "c", text: "Evaluate at limits" },
              { id: "d", text: "Choose u so that du appears in the integrand" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Substitution",
                statement: "Match du to part of integrand.",
              },
            ],
            steps: [
              {
                reasoning: "Choose u where du is present.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(d)** Choose u matching du",
            commonErrors: ["Choosing u arbitrarily."],
          },
        },
        {
          id: "cial-m-u4-sub-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find $\\int 3x^2(x^3+1)^4\\,dx$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Substitution",
                statement: "$u=x^3+1$, $du=3x^2dx$.",
              },
            ],
            steps: [
              {
                reasoning: "$= \\int u^4\\,du = \\frac{u^5}{5}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$= \\frac{(x^3+1)^5}{5} + c$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\frac{(x^3+1)^5}{5} + c$",
            commonErrors: ["Missing the perfect du match."],
          },
        },
        {
          id: "cial-m-u4-sub-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate $\\int_0^1 \\frac{2x}{x^2+1}\\,dx$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Substitution definite",
                statement: "u = x²+1; change limits or revert.",
              },
            ],
            steps: [
              {
                reasoning: "$u = x^2+1$, $du = 2x\\,dx$; limits: u=1 to 2.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "$\\int_1^2 \\frac{du}{u} = [\\ln u]_1^2 = \\ln 2 - \\ln 1 = \\ln 2$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Alternative: $[\\ln(x^2+1)]_0^1 = \\ln 2$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$= \\ln 2$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\ln 2$",
            commonErrors: ["Keeping x-limits while integrating in u."],
          },
        },
        {
          id: "cial-m-u4-sub-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Integration by substitution.",
          parts: [
            { label: "a", prompt: "When does substitution work?", marks: 1 },
            { label: "b", prompt: "Find $\\int 4x(x^2+3)^3\\,dx$.", marks: 3 },
            {
              label: "c",
              prompt: "Find $\\int \\frac{x}{\\sqrt{x^2+1}}\\,dx$.",
              marks: 3,
            },
            {
              label: "d",
              prompt: "Evaluate $\\int_0^2 \\frac{2x}{x^2+4}\\,dx$.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Substitution",
                statement: "Condition+two integrals+definite.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "When du appears (as constant multiple) in integrand.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$u=x^2+3$, $du=2x dx$ → $2\\int u^3 du$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$= \\frac{(x^2+3)^4}{2} + c$ — factor check.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Correct: $2 \\cdot \\frac{u^4}{4} = \\frac{u^4}{2}$.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "$u=x^2+1$, integrand $= \\frac{1}{2}u^{-1/2}$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "$= u^{1/2} = \\sqrt{x^2+1}+c$.",
                marks: 1,
                markCode: "M",
              },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "A" },
              {
                part: "d",
                reasoning: "$u=x^2+4$, limits 4 to 8.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "$[\\ln u]_4^8 = \\ln 8 - \\ln 4 = \\ln 2$.",
                marks: 1,
                markCode: "M",
              },
              { part: "d", reasoning: "Correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) du present (b) (x²+3)⁴/2+c (c) √(x²+1)+c (d) ln2",
          },
        },
        {
          id: "cial-m-u4-sub-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In $\\int x(x^2 + 1)^5\\,dx$, a good choice for $u$ is",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x^5$" },
              { id: "b", text: "$x^2 + 1$" },
              { id: "c", text: "$x$" },
              { id: "d", text: "$x^2 + 1^5$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Substitution",
                statement: "Choose $u$ = inner function whose derivative $2x$ appears in the integrand.",
              },
            ],
            steps: [
              {
                reasoning: "$u = x^2 + 1$ gives $du = 2x\\,dx$, matching the $x$ factor.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(b)** $u = x^2 + 1$",
            commonErrors: ["Choosing $u = x$ which leaves $(x^2+1)^5$ unhelpful."],
          },
        },
        {
          id: "cial-m-u4-sub-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find $\\int 2x(x^2 + 1)^3\\,dx$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{(x^2+1)^4}{8} + c$" },
              { id: "b", text: "$\\frac{(x^2+1)^4}{4} + c$" },
              { id: "c", text: "$\\frac{(x^2+1)^3}{3} + c$" },
              { id: "d", text: "$\\frac{(x^2+1)^4}{2} + c$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Substitution",
                statement: "$u = x^2 + 1$, $du = 2x\\,dx$.",
              },
            ],
            steps: [
              {
                reasoning: "$\\int u^3\\,du = \\frac{u^4}{4}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$= \\frac{(x^2+1)^4}{4} + c$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\frac{(x^2+1)^4}{4} + c$",
            commonErrors: ["Dividing by wrong power — $\\frac{u^4}{4}$, not $\\frac{u^3}{3}$."],
          },
        },
        {
          id: "cial-m-u4-sub-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Evaluate $\\int_0^1 2x(x^2 + 1)\\,dx$.",
          response: {
            type: "numeric",
            parts: [{ label: "value", answer: 1.5, tolerance: 0.01 }],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Substitution definite",
                statement: "$u = x^2 + 1$; change limits or revert.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$\\left[\\frac{(x^2+1)^2}{2}\\right]_0^1 = \\frac{4}{2} - \\frac{1}{2} = 1.5$.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "$1.5$",
            commonErrors: ["Keeping $x$-limits while integrating in $u$."],
          },
        },
        {
          id: "cial-m-u4-sub-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find $\\int 5x^2(x^3 + 2)^4\\,dx$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Substitution",
                statement: "$u = x^3 + 2$, $du = 3x^2\\,dx$.",
              },
            ],
            steps: [
              {
                reasoning: "Write $5x^2\\,dx = \\frac{5}{3}du$: $\\frac{5}{3}\\int u^4\\,du$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$= \\frac{5}{3} \\times \\frac{u^5}{5} = \\frac{u^5}{3}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$= \\frac{(x^3+2)^5}{3} + c$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\frac{(x^3+2)^5}{3} + c$",
            commonErrors: ["Losing the $\\frac{5}{3}$ factor from $du$."],
          },
        },
        {
          id: "cial-m-u4-sub-q9",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Find $\\int \\frac{x}{\\sqrt{x^2 + 4}}\\,dx$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{1}{2}\\sqrt{x^2+4} + c$" },
              { id: "b", text: "$\\sqrt{x^2+4} + c$" },
              { id: "c", text: "$\\frac{(x^2+4)^{3/2}}{3} + c$" },
              { id: "d", text: "$\\ln|x^2+4| + c$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Substitution",
                statement: "$u = x^2 + 4$, $du = 2x\\,dx$.",
              },
            ],
            steps: [
              {
                reasoning: "$\\frac{1}{2}\\int u^{-1/2}\\,du = u^{1/2} = \\sqrt{x^2+4} + c$.",
                working: "\\sqrt{x^2+4}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Correct antiderivative.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\sqrt{x^2+4} + c$",
            commonErrors: ["Forgetting the $\\frac{1}{2}$ from $du = 2x\\,dx$."],
          },
        },
        {
          id: "cial-m-u4-sub-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "Evaluate $\\int_0^2 \\frac{3x^2}{x^3 + 1}\\,dx$.",
          response: {
            type: "numeric",
            parts: [{ label: "value", answer: 2.197, tolerance: 0.01 }],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Substitution definite",
                statement: "$u = x^3 + 1$, $du = 3x^2\\,dx$; change limits.",
              },
            ],
            steps: [
              {
                reasoning: "$u = x^3 + 1$: limits $u = 1$ to $9$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$\\int_1^9 \\frac{du}{u} = [\\ln u]_1^9 = \\ln 9$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$\\ln 9 \\approx 2.197$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\ln 9 \\approx 2.197$",
            commonErrors: ["Keeping $x$-limits after substituting."],
          },
        },
        {
          id: "cial-m-u4-sub-q11",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Find $\\int x\\sin(x^2)\\,dx$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Substitution",
                statement: "$u = x^2$, $du = 2x\\,dx$.",
              },
            ],
            steps: [
              {
                reasoning: "Let $u = x^2$, $du = 2x\\,dx$ so $x\\,dx = \\frac{1}{2}du$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$= \\frac{1}{2}\\int \\sin u\\,du$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$= -\\frac{1}{2}\\cos u$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$= -\\frac{1}{2}\\cos(x^2) + c$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$-\\frac{1}{2}\\cos(x^2) + c$",
            commonErrors: ["Missing the $\\frac{1}{2}$ factor or wrong trig integral."],
          },
        },
        {
          id: "cial-m-u4-sub-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "$\\int \\frac{f'(x)}{f(x)}\\,dx$ equals",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{[f(x)]^2}{2} + c$" },
              { id: "b", text: "$\\frac{1}{f(x)} + c$" },
              { id: "c", text: "$\\ln|f(x)| + c$" },
              { id: "d", text: "$f(x)\\ln x + c$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Logarithmic pattern",
                statement: "$\\int \\frac{f'(x)}{f(x)}dx = \\ln|f(x)| + c$.",
              },
            ],
            steps: [
              {
                reasoning: "Derivative of $\\ln|f(x)|$ is $\\frac{f'(x)}{f(x)}$.",
                working: "\\ln|f(x)|",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "$\\ln|f(x)| + c$",
            commonErrors: ["Forgetting absolute value or the constant."],
          },
        },
        {
          id: "cial-m-u4-sub-q13",
          difficulty: "core",
          totalMarks: 4,
          stem: "Evaluate $\\int_1^2 \\frac{2x}{x^2 + 3}\\,dx$.",
          response: {
            type: "numeric",
            parts: [{ label: "value", answer: 0.56, tolerance: 0.01 }],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Substitution definite",
                statement: "$u = x^2 + 3$; limits become $u = 4$ to $7$.",
              },
            ],
            steps: [
              {
                reasoning: "$u = x^2 + 3$, $du = 2x\\,dx$; limits $u = 4$ to $7$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$\\int_4^7 \\frac{du}{u} = [\\ln u]_4^7 = \\ln 7 - \\ln 4 = \\ln\\frac{7}{4}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$\\ln\\frac{7}{4} \\approx 0.560$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Correct value.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\ln\\frac{7}{4} \\approx 0.560$",
            commonErrors: ["Forgetting to change limits to $u$."],
          },
        },
        {
          id: "cial-m-u4-sub-q14",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "For $\\int x\\sqrt{x^2 + 1}\\,dx$, the best substitution is",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$u = \\sqrt{x^2+1}$" },
              { id: "b", text: "$u = x^2 + 1$" },
              { id: "c", text: "$u = x$" },
              { id: "d", text: "$u = x^2$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Substitution",
                statement: "Pick $u$ so $du$ matches the $x\\,dx$ factor.",
              },
            ],
            steps: [
              {
                reasoning: "$u = x^2 + 1$ gives $du = 2x\\,dx$ — matches perfectly.",
                working: "u = x^2 + 1",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Best choice.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$u = x^2 + 1$",
            commonErrors: ["Choosing $u$ that doesn't simplify the integrand."],
          },
        },
        {
          id: "cial-m-u4-sub-q15",
          difficulty: "core",
          totalMarks: 6,
          stem: "Integration by substitution.",
          parts: [
            {
              label: "a",
              prompt: "Find $\\int 4x^3(x^4 + 1)^2\\,dx$.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Find $\\int \\frac{x}{(x^2 + 1)^2}\\,dx$.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Evaluate $\\int_0^1 \\frac{2x}{x^2 + 1}\\,dx$.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Substitution",
                statement: "Recognise $f'(x)[f(x)]^n$ and $\\frac{f'(x)}{f(x)}$ patterns.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$u = x^4 + 1$: $\\frac{(x^4+1)^3}{3} + c$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Correct antiderivative.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "$u = x^2 + 1$: $\\int \\frac{1}{2}u^{-2}du = -\\frac{1}{2u}$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$= -\\frac{1}{2(x^2+1)} + c$.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "$[\\ln(x^2+1)]_0^1 = \\ln 2 - \\ln 1 = \\ln 2$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Correct value.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) (x⁴+1)³/3+c (b) −1/(2(x²+1))+c (c) ln2",
          },
        },
        {
          id: "cial-m-u4-sub-q16",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Integration by substitution — mixed practice.",
          parts: [
            {
              label: "a",
              prompt: "When does substitution work well?",
              marks: 1,
            },
            {
              label: "b",
              prompt: "Find $\\int 3x^2(x^3 - 1)^5\\,dx$.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Find $\\int x\\sqrt{x^2 + 9}\\,dx$.",
              marks: 3,
            },
            {
              label: "d",
              prompt: "Evaluate $\\int_0^1 4x^3(x^2 + 1)\\,dx$.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Substitution",
                statement: "Condition + three integrals.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "When $du$ appears (as a constant multiple) in the integrand.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$u = x^3 - 1$, $du = 3x^2dx$: $\\int u^5du = \\frac{u^6}{6}$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$= \\frac{(x^3-1)^6}{6} + c$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Correct antiderivative.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "$u = x^2 + 9$: $\\frac{1}{2}\\int u^{1/2}du = \\frac{1}{3}u^{3/2}$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "$= \\frac{1}{3}(x^2+9)^{3/2} + c$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Correct antiderivative.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "$u = x^2 + 1$: $4x^3dx = 2(x^2)du = 2(u-1)du$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "$\\int_1^2 2u(u-1)du = \\left[\\frac{2u^3}{3} - u^2\\right]_1^2 = \\frac{5}{3}$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Correct value $\\frac{5}{3}$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) du present (b) (x³−1)⁶/6+c (c) (x²+9)^{3/2}/3+c (d) 5/3",
          },
        },
      ],
    },
    {
      id: "cial-m-u4-partial",
      title: "Integration using partial fractions",
      skill: "Decompose rational functions and integrate them.",
      lesson: {
        sections: [
          {
            heading: "When to use partial fractions",
            body: "For $\\int \\frac{P(x)}{Q(x)}dx$ where deg P < deg Q and Q factorises: split into simpler fractions. First ensure fraction is proper — polynomial division if not.",
          },
          {
            heading: "Decomposition patterns",
            body: "Distinct linear: $\\frac{A}{x-a} + \\frac{B}{x-b}$. Repeated: include higher powers. Quadratic factor: $\\frac{Ax+B}{x^2+c}$. Use cover-up or substitution to find constants.",
          },
          {
            heading: "Integrating the result",
            body: "$\\int \\frac{A}{x-a}dx = A\\ln|x-a|$. For $\\frac{Ax+B}{x^2+c}$, split into derivative-of-denominator part ($\\ln$) and arctan part.",
          },
        ],
        keyFormulas: [
          {
            name: "Partial fractions",
            statement: "$\\frac{P(x)}{Q(x)} = \\sum \\frac{A_i}{x-a_i}$",
          },
          {
            name: "Integral",
            statement: "$\\int \\frac{A}{x-a}dx = A\\ln|x-a| + c$",
          },
        ],
        workedExample: {
          problem: "Find $\\int \\frac{1}{x^2-1}\\,dx$.",
          solution:
            "$\\frac{1}{(x-1)(x+1)} = \\frac{A}{x-1} + \\frac{B}{x+1}$. A=1/2, B=-1/2. Integral = $\\frac{1}{2}\\ln|x-1| - \\frac{1}{2}\\ln|x+1| + c$.",
        },
      },
      questions: [
        {
          id: "cial-m-u4-pf-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "When should partial fractions be used?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "For rational functions with factorisable denominators",
              },
              { id: "b", text: "Only for polynomials" },
              { id: "c", text: "Only for trigonometric functions" },
              { id: "d", text: "For all integrals" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Partial fractions",
                statement:
                  "Break rational function into simpler integrable parts.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Used for rational functions with factorisable denominators.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "**(a)** Rational functions with factorisable denominators",
            commonErrors: ["Using when substitution is simpler."],
          },
        },
        {
          id: "cial-m-u4-pf-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Decompose $\\frac{3}{x^2-4}$ into partial fractions.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Partial fractions",
                statement: "$\\frac{A}{x-2} + \\frac{B}{x+2}$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$A(x+2) + B(x-2) = 3$; x=2: 4A=3, A=3/4; x=-2: -4B=3, B=-3/4$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "$= \\frac{3/4}{x-2} - \\frac{3/4}{x+2}$ or $\\frac{3}{4(x-2)} - \\frac{3}{4(x+2)}$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\frac{3}{4(x-2)} - \\frac{3}{4(x+2)}$",
            commonErrors: ["Sign errors in cover-up."],
          },
        },
        {
          id: "cial-m-u4-pf-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Find $\\int \\frac{5}{x^2-9}\\,dx$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Partial fractions",
                statement: "Decompose then integrate each term.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$\\frac{5}{(x-3)(x+3)} = \\frac{A}{x-3} + \\frac{B}{x+3}$; A=5/6, B=-5/6.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "$\\int = \\frac{5}{6}\\ln|x-3| - \\frac{5}{6}\\ln|x+3|$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "$= \\frac{5}{6}\\ln\\left|\\frac{x-3}{x+3}\\right| + c$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Correct answer.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "$\\frac{5}{6}\\ln\\left|\\frac{x-3}{x+3}\\right| + c$",
            commonErrors: ["Forgetting absolute values in ln."],
          },
        },
        {
          id: "cial-m-u4-pf-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Partial fractions integration.",
          parts: [
            {
              label: "a",
              prompt: "When are partial fractions needed?",
              marks: 1,
            },
            { label: "b", prompt: "Decompose $\\frac{2}{x(x+1)}$.", marks: 3 },
            {
              label: "c",
              prompt: "Find $\\int \\frac{1}{x^2-1}dx$.",
              marks: 3,
            },
            {
              label: "d",
              prompt: "Find $\\int \\frac{x+3}{x^2-4}dx$.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Partial fractions",
                statement: "Decompose+integrate.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Rational function, factorisable denominator.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$\\frac{A}{x} + \\frac{B}{x+1}$; A=2, B=-2.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$= \\frac{2}{x} - \\frac{2}{x+1}$.",
                marks: 1,
                markCode: "M",
              },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
              {
                part: "c",
                reasoning: "A=1/2, B=-1/2.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "$\\frac{1}{2}\\ln|x-1| - \\frac{1}{2}\\ln|x+1|$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "$= \\frac{1}{2}\\ln\\left|\\frac{x-1}{x+1}\\right| + c$.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Split: $\\frac{A}{x-2}+\\frac{B}{x+2}$; solve.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "A=5/4, B=-1/4.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning:
                  "$\\frac{5}{4}\\ln|x-2| - \\frac{1}{4}\\ln|x+2| + c$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) rational+factorisable (b) 2/x−2/(x+1) (c) ½ln|(x−1)/(x+1)|+c (d) 5/4 ln|x−2| − 1/4 ln|x+2| + c",
          },
        },
        {
          id: "cial-m-u4-pf-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The expression $\\frac{1}{x^2 - 4}$ decomposes into",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{A}{x} + \\frac{B}{x}$" },
              { id: "b", text: "$\\frac{A}{x^2} + \\frac{B}{4}$" },
              { id: "c", text: "$\\frac{A}{(x-2)^2} + \\frac{B}{(x+2)^2}$" },
              { id: "d", text: "$\\frac{A}{x-2} + \\frac{B}{x+2}$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Partial fractions",
                statement: "Distinct linear factors → one fraction per factor.",
              },
            ],
            steps: [
              {
                reasoning: "$x^2 - 4 = (x-2)(x+2)$ — two distinct linear factors.",
                working: "\\frac{A}{x-2} + \\frac{B}{x+2}",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(d)** $\\frac{A}{x-2} + \\frac{B}{x+2}$",
            commonErrors: ["Using the unfactored denominator."],
          },
        },
        {
          id: "cial-m-u4-pf-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "Decompose $\\frac{5}{x(x+1)}$ into partial fractions.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{1}{x} - \\frac{1}{x+1}$" },
              { id: "b", text: "$\\frac{5}{x} + \\frac{5}{x+1}$" },
              { id: "c", text: "$\\frac{5}{x} - \\frac{5}{x+1}$" },
              { id: "d", text: "$\\frac{5}{x(x+1)}$ unchanged" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Partial fractions",
                statement: "$A = \\frac{5}{0+1} = 5$; $B = \\frac{5}{-1+0} = -5$ by cover-up.",
              },
            ],
            steps: [
              {
                reasoning: "Cover-up: $A = 5$, $B = -5$.",
                working: "A=5, B=-5",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$= \\frac{5}{x} - \\frac{5}{x+1}$.",
                working: "\\frac{5}{x} - \\frac{5}{x+1}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\frac{5}{x} - \\frac{5}{x+1}$",
            commonErrors: ["Same sign on both constants — check by substituting back."],
          },
        },
        {
          id: "cial-m-u4-pf-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In $\\frac{7}{(x-1)(x+2)} = \\frac{A}{x-1} + \\frac{B}{x+2}$, the value of $A$ is",
          response: {
            type: "numeric",
            parts: [{ label: "A", answer: 2.333, tolerance: 0.01 }],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Cover-up method",
                statement: "Set $x$ equal to each root to isolate each constant.",
              },
            ],
            steps: [
              {
                reasoning: "Set $x = 1$: $A = \\frac{7}{1+2} = \\frac{7}{3} \\approx 2.333$.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "$A = \\frac{7}{3}$",
            commonErrors: ["Covering up the wrong factor."],
          },
        },
        {
          id: "cial-m-u4-pf-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Decompose $\\frac{4}{(x-1)(x+3)}$ into partial fractions.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Partial fractions",
                statement: "$A(x+3) + B(x-1) = 4$; cover-up at $x = 1, -3$.",
              },
            ],
            steps: [
              {
                reasoning: "$x = 1$: $4A = 4 \\Rightarrow A = 1$; $x = -3$: $-4B = 4 \\Rightarrow B = -1$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Decomposition: $\\frac{1}{x-1} - \\frac{1}{x+3}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Verify: $\\frac{(x+3) - (x-1)}{(x-1)(x+3)} = \\frac{4}{(x-1)(x+3)}$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\frac{1}{x-1} - \\frac{1}{x+3}$",
            commonErrors: ["Sign error on $B$ from cover-up."],
          },
        },
        {
          id: "cial-m-u4-pf-q9",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "The integral $\\int \\frac{dx}{x^2 - 9}$ equals",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "$\\frac{1}{3}\\ln|x^2 - 9| + c$",
              },
              {
                id: "b",
                text: "$\\frac{1}{6}\\ln|x^2 - 9| + c$",
              },
              {
                id: "c",
                text: "$\\frac{1}{6}\\ln\\left|\\frac{x-3}{x+3}\\right| + c$",
              },
              {
                id: "d",
                text: "$\\ln|x - 3| - \\ln|x + 3| + c$",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Partial fractions",
                statement: "$\\frac{1}{6(x-3)} - \\frac{1}{6(x+3)}$ integrates to $\\frac{1}{6}\\ln|\\frac{x-3}{x+3}|$.",
              },
            ],
            steps: [
              {
                reasoning: "$A = \\frac{1}{6}, B = -\\frac{1}{6}$; integrate each term.",
                working: "\\frac{1}{6}\\ln|\\frac{x-3}{x+3}|",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Correct form.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\frac{1}{6}\\ln\\left|\\frac{x-3}{x+3}\\right| + c$",
            commonErrors: ["Dropping the $\\frac{1}{6}$ coefficient or absolute values."],
          },
        },
        {
          id: "cial-m-u4-pf-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "Evaluate $\\int_0^1 \\frac{dx}{(x+1)(x+2)}$.",
          response: {
            type: "numeric",
            parts: [{ label: "value", answer: 0.288, tolerance: 0.01 }],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Partial fractions definite",
                statement: "Decompose then integrate; watch limits.",
              },
            ],
            steps: [
              {
                reasoning: "$\\frac{1}{(x+1)(x+2)} = \\frac{1}{x+1} - \\frac{1}{x+2}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$\\left[\\ln\\frac{x+1}{x+2}\\right]_0^1 = \\ln\\frac{2}{3} - \\ln\\frac{1}{2} = \\ln\\frac{4}{3}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$\\ln\\frac{4}{3} \\approx 0.288$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\ln\\frac{4}{3} \\approx 0.288$",
            commonErrors: ["Wrong partial fraction signs or limit errors."],
          },
        },
        {
          id: "cial-m-u4-pf-q11",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Find $\\int \\frac{dx}{x^2 - 4}$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Partial fractions",
                statement: "Decompose $\\frac{1}{(x-2)(x+2)}$ then integrate.",
              },
            ],
            steps: [
              {
                reasoning: "$A = \\frac{1}{4}, B = -\\frac{1}{4}$: $\\frac{1}{4(x-2)} - \\frac{1}{4(x+2)}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$\\int = \\frac{1}{4}\\ln|x-2| - \\frac{1}{4}\\ln|x+2|$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$= \\frac{1}{4}\\ln\\left|\\frac{x-2}{x+2}\\right|$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Correct answer with $+c$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\frac{1}{4}\\ln\\left|\\frac{x-2}{x+2}\\right| + c$",
            commonErrors: ["Forgetting absolute values or the $\\frac{1}{4}$ factor."],
          },
        },
        {
          id: "cial-m-u4-pf-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Before using partial fractions on a rational function, you must check that",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "the numerator is constant" },
              { id: "b", text: "there are no repeated factors" },
              { id: "c", text: "the denominator is prime" },
              {
                id: "d",
                text: "the numerator degree is less than the denominator degree",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Proper fraction",
                statement: "Partial fractions require a proper rational function.",
              },
            ],
            steps: [
              {
                reasoning: "If deg numerator ≥ deg denominator, divide first.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(d)** numerator degree < denominator degree",
            commonErrors: ["Skipping the proper-fraction check."],
          },
        },
        {
          id: "cial-m-u4-pf-q13",
          difficulty: "core",
          totalMarks: 4,
          stem: "Evaluate $\\int_1^3 \\frac{dx}{x(x+1)}$.",
          response: {
            type: "numeric",
            parts: [{ label: "value", answer: 0.405, tolerance: 0.01 }],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Partial fractions definite",
                statement: "Decompose then integrate with correct limits.",
              },
            ],
            steps: [
              {
                reasoning: "$\\frac{1}{x(x+1)} = \\frac{1}{x} - \\frac{1}{x+1}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$\\left[\\ln\\frac{x}{x+1}\\right]_1^3 = \\ln\\frac{3}{4} - \\ln\\frac{1}{2}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$= \\ln\\frac{3}{2} \\approx 0.405$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Correct value.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\ln\\frac{3}{2} \\approx 0.405$",
            commonErrors: ["Sign or limit errors in the logarithm evaluation."],
          },
        },
        {
          id: "cial-m-u4-pf-q14",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "$\\frac{1}{x^2 - 5x + 6}$ decomposes into",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "$\\frac{1}{x-2} - \\frac{1}{x-3}$",
              },
              {
                id: "b",
                text: "$\\frac{1}{x-3} - \\frac{1}{x-2}$",
              },
              {
                id: "c",
                text: "$\\frac{1}{x} - \\frac{1}{x-6}$",
              },
              {
                id: "d",
                text: "$\\frac{1}{(x-2)(x-3)}$ unchanged",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Partial fractions",
                statement: "$A = -1, B = 1$ by cover-up.",
              },
            ],
            steps: [
              {
                reasoning: "Factor $(x-2)(x-3)$; cover-up gives $A = -1$ at $x=2$, $B = 1$ at $x=3$.",
                working: "-\\frac{1}{x-2} + \\frac{1}{x-3}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Equivalent to $\\frac{1}{x-3} - \\frac{1}{x-2}$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\frac{1}{x-3} - \\frac{1}{x-2}$",
            commonErrors: ["Reversing the signs of $A$ and $B$."],
          },
        },
        {
          id: "cial-m-u4-pf-q15",
          difficulty: "core",
          totalMarks: 6,
          stem: "Partial fractions.",
          parts: [
            {
              label: "a",
              prompt: "Decompose $\\frac{6}{(x-1)(x+2)}$.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Find $\\int \\frac{dx}{x^2 - 16}$.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "State $\\int \\frac{A}{x-a}\\,dx$.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Partial fractions",
                statement: "Decompose + integrate + state standard result.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$A = 2, B = -2$: $\\frac{2}{x-1} - \\frac{2}{x+2}$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Correct decomposition.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "$\\frac{1}{8}\\ln\\left|\\frac{x-4}{x+4}\\right| + c$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Correct integral.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "$A\\ln|x-a| + c$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Correct result with constant.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) 2/(x-1)-2/(x+2) (b) (1/8)ln|(x-4)/(x+4)|+c (c) A ln|x-a|+c",
          },
        },
        {
          id: "cial-m-u4-pf-q16",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Partial fractions — mixed practice.",
          parts: [
            {
              label: "a",
              prompt: "When are partial fractions needed?",
              marks: 1,
            },
            {
              label: "b",
              prompt: "Decompose $\\frac{3x+1}{(x-1)(x+2)}$.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Find $\\int \\frac{dx}{x^2 - 9}$.",
              marks: 3,
            },
            {
              label: "d",
              prompt: "Find $\\int \\frac{2x+1}{(x-1)(x+1)}\\,dx$.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Partial fractions",
                statement: "Decompose + integrate; check proper fraction first.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Rational function with factorisable denominator, numerator degree < denominator.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$A = \\frac{4}{3}, B = \\frac{5}{3}$ by cover-up.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$= \\frac{4}{3(x-1)} + \\frac{5}{3(x+2)}$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Correct decomposition.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "$\\frac{1}{6}\\ln\\left|\\frac{x-3}{x+3}\\right| + c$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Correct integral.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "With absolute values and $+c$.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "$A = \\frac{3}{2}, B = \\frac{1}{2}$: $\\frac{3}{2(x-1)} + \\frac{1}{2(x+1)}$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "$\\int = \\frac{3}{2}\\ln|x-1| + \\frac{1}{2}\\ln|x+1| + c$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Correct integral.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) rational+factorisable (b) 4/(3(x-1))+5/(3(x+2)) (c) (1/6)ln|(x-3)/(x+3)|+c (d) (3/2)ln|x-1|+(1/2)ln|x+1|+c",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cial-m-u4-techniques-notes",
      title: "Integration techniques — revision notes",
      summary: "Substitution and partial fractions for integration.",
      sections: [
        {
          heading: "Substitution",
          body: "Choose u where du appears in integrand. $\\int f'(x)[f(x)]^n dx = \\frac{[f(x)]^{n+1}}{n+1}$. For definite integrals change limits or revert to x.",
        },
        {
          heading: "Partial fractions",
          body: "For rational functions with factorisable denominators. Decompose, then integrate each term ($\\ln$ for linear factors).",
        },
        {
          heading: "Exam checklist",
          body: "Check fraction is proper first. Find all constants. Include absolute values in ln.",
        },
      ],
    },
  ],
};
