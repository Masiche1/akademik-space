import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "cialfm-u1-lesson-1-3",
  code: "1-3",
  title: "Partial fractions advanced",
  goal: "I CAN decompose fractions with repeated and quadratic factors.",
  standards: ["9231 P1: partial fractions"],
  vocabulary: [
    { term: "Partial fractions", definition: "Breaking a fraction into simpler fractions that sum to it." },
    { term: "Repeated factor", definition: "A factor appearing more than once, e.g. $(x-1)^2$." },
    { term: "Irreducible quadratic", definition: "A quadratic that doesn't factorise over the reals." },
    { term: "Cover-up method", definition: "Quick substitution trick for finding constants." },
  ],
  concepts: [
    {
      id: "cialfm-u1-s3-repeated",
      title: "Repeated linear factors",
      skill: "Decompose fractions with repeated linear factors.",
      lesson: {
        sections: [
          {
            heading: "Form",
            body: "$\\frac{f(x)}{(x-a)^2(x-b)} = \\frac{A}{x-a} + \\frac{B}{(x-a)^2} + \\frac{C}{x-b}$. Include ALL powers of the repeated factor.",
          },
          {
            heading: "Method",
            body: "Multiply through by denominator, substitute convenient $x$ values, then compare coefficients or substitute again for remaining constants.",
          },
        ],
        keyFormulas: [
          { name: "Repeated form", statement: "$\\frac{A}{x-a} + \\frac{B}{(x-a)^2}$" },
        ],
        workedExample: {
          problem: "Express $\\frac{3x+1}{(x-1)^2(x+2)}$ in partial fractions.",
          solution: "$= \\frac{A}{x-1} + \\frac{B}{(x-1)^2} + \\frac{C}{x+2}$; solve for A, B, C.",
        },
      },
      questions: [
        {
          id: "cialfm-u1-s3-re-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "For $\\frac{1}{x(x-1)^2}$ the partial fraction form includes…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\frac{A}{x(x-1)^2}$" },
            { id: "b", text: "$\\frac{A}{x} + \\frac{B}{(x-1)^2}$" },
            { id: "c", text: "$\\frac{A}{x} + \\frac{B}{x-1}$" },
            { id: "d", text: "$\\frac{A}{x} + \\frac{B}{x-1} + \\frac{C}{(x-1)^2}$" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "technique", name: "Repeated factors", statement: "All powers included." }],
            steps: [{ reasoning: "Repeated factor needs both $x-1$ and $(x-1)^2$ terms.", marks: 1, markCode: "A" }],
            finalAnswer: "Form (a)",
          },
        },
        {
          id: "cialfm-u1-s3-re-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Express $\\frac{5}{x(x+1)}$ in partial fractions.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Basic PF", statement: "$\\frac{A}{x}+\\frac{B}{x+1}$." }],
            steps: [
              { reasoning: "$5 = A(x+1) + Bx$; $x=0: A=5$; $x=-1: B=-5$.", marks: 1, markCode: "M" },
              { reasoning: "$= \\frac{5}{x} - \\frac{5}{x+1}$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac{5}{x} - \\frac{5}{x+1}$",
          },
        },
        {
          id: "cialfm-u1-s3-re-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Express $\\frac{2}{(x-1)^2}$ — trivially — and then $\\frac{x+3}{(x-1)(x-2)^2}$ in partial fractions.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "PF setup", statement: "Correct form then solve." }],
            steps: [
              { reasoning: "Form: $\\frac{A}{x-1} + \\frac{B}{x-2} + \\frac{C}{(x-2)^2}$.", marks: 1, markCode: "M" },
              { reasoning: "Multiply: $x+3 = A(x-2)^2 + B(x-1)(x-2) + C(x-1)$; substitute $x=1,2$.", marks: 1, markCode: "M" },
              { reasoning: "$x=1: 4 = A$; $x=2: 5 = C$; compare $x^2$: $0 = A+B$ → $B=-4$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac{4}{x-1} - \\frac{4}{x-2} + \\frac{5}{(x-2)^2}$",
          },
        },
        {
          id: "cialfm-u1-s3-re-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Express $\\frac{7x-5}{(x-1)^2(x+1)}$ in partial fractions.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Repeated PF", statement: "Full decomposition." }],
            steps: [
              { reasoning: "Form: $\\frac{A}{x-1} + \\frac{B}{(x-1)^2} + \\frac{C}{x+1}$.", marks: 1, markCode: "M" },
              { reasoning: "$7x-5 = A(x-1)(x+1) + B(x+1) + C(x-1)^2$; $x=1: 2 = 2B$ → $B=1$; $x=-1: -12 = 4C$ → $C=-3$.", marks: 1, markCode: "M" },
              { reasoning: "Compare $x^2$: $0 = A + C$ → $A = 3$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $\\frac{3}{x-1} + \\frac{1}{(x-1)^2} - \\frac{3}{x+1}$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac{3}{x-1} + \\frac{1}{(x-1)^2} - \\frac{3}{x+1}$",
          },
        },
        {
          id: "cialfm-u1-s3-re-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The correct partial fraction form of $\\frac{1}{x^2(x-3)}$ is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\frac{A}{x^2(x-3)}$" },
            { id: "b", text: "$\\frac{A}{x} + \\frac{B}{x^2} + \\frac{C}{x-3}$" },
            { id: "c", text: "$\\frac{A}{x} + \\frac{B}{x-3}$" },
            { id: "d", text: "$\\frac{A}{x} + \\frac{B}{x^2} + \\frac{C}{x-3} + \\frac{D}{(x-3)^2}$" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "technique", name: "Repeated factors", statement: "Every power of each factor appears." }],
            steps: [{ reasoning: "$x^2$ needs $\\frac{A}{x}+\\frac{B}{x^2}$; $(x-3)$ appears once.", marks: 1, markCode: "A" }],
            finalAnswer: "Form (a)",
          },
        },
        {
          id: "cialfm-u1-s3-re-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "After multiplying through by the denominator, substituting $x = a$ into the resulting identity gives…",
          response: { type: "mcq", choices: [
            { id: "a", text: "The coefficient of the highest power of the repeated factor directly" },
            { id: "b", text: "Nothing useful" },
            { id: "c", text: "Only the determinant" },
            { id: "d", text: "All constants at once" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "technique", name: "Substitution", statement: "Repeated root isolates one constant." }],
            steps: [{ reasoning: "At $x=a$ all other terms vanish except the $\\frac{B}{(x-a)^2}$ contribution.", marks: 1, markCode: "A" }],
            finalAnswer: "Isolates one constant",
          },
        },
        {
          id: "cialfm-u1-s3-re-q7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Express $\\frac{6}{x(x-2)}$ in partial fractions and find the coefficient of $\\frac{1}{x}$.",
          response: { type: "numeric", parts: [{ label: "a", answer: -3 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Basic PF", statement: "Cover-up for each constant." }],
            steps: [
              { reasoning: "$6 = A(x-2) + Bx$; $x=0: A=-3$; $x=2: B=3$.", marks: 1, markCode: "M" },
              { reasoning: "Coefficient of $\\frac1x$ is $-3$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$-3$",
          },
        },
        {
          id: "cialfm-u1-s3-re-q8",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Express $\\frac{1}{x(x+2)}$ in partial fractions and find the coefficient of $\\frac{1}{x+2}$.",
          response: { type: "numeric", parts: [{ label: "a", answer: -0.5 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Basic PF", statement: "Standard decomposition." }],
            steps: [
              { reasoning: "$1 = A(x+2) + Bx$; $x=0: A=\\frac12$; $x=-2: B=-\\frac12$.", marks: 1, markCode: "M" },
              { reasoning: "Coefficient of $\\frac{1}{x+2}$ is $-\\frac12$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$-\\frac{1}{2}$",
          },
        },
        {
          id: "cialfm-u1-s3-re-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Express $\\frac{4x-3}{(x+1)^2(x-2)}$ in partial fractions.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "PF setup", statement: "Correct form then solve." }],
            steps: [
              { reasoning: "Form: $\\frac{A}{x+1} + \\frac{B}{(x+1)^2} + \\frac{C}{x-2}$.", marks: 1, markCode: "M" },
              { reasoning: "$4x-3 = A(x+1)(x-2) + B(x-2) + C(x+1)^2$; $x=-1: -7 = -3B$ → $B=\\frac73$; $x=2: 5 = 9C$ → $C=\\frac59$.", marks: 1, markCode: "M" },
              { reasoning: "Compare $x^2$: $0 = A + C$ → $A = -\\frac59$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$-\\frac{5}{9(x+1)} + \\frac{7}{3(x+1)^2} + \\frac{5}{9(x-2)}$",
          },
        },
        {
          id: "cialfm-u1-s3-re-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "Express $\\frac{2x+5}{(x-1)^2(x+1)}$ in partial fractions.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Repeated PF", statement: "Full decomposition." }],
            steps: [
              { reasoning: "$2x+5 = A(x-1)(x+1) + B(x+1) + C(x-1)^2$.", marks: 1, markCode: "M" },
              { reasoning: "$x=1: 7 = 2B$ → $B=\\frac72$; $x=-1: 3 = 4C$ → $C=\\frac34$.", marks: 1, markCode: "M" },
              { reasoning: "Compare $x^2$: $0 = A + C$ → $A = -\\frac34$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$-\\frac{3}{4(x-1)} + \\frac{7}{2(x-1)^2} + \\frac{3}{4(x+1)}$",
          },
        },
        {
          id: "cialfm-u1-s3-re-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "In the partial fraction decomposition of $\\frac{5x+2}{(x-1)^2(x+1)}$, find the coefficient of $\\frac{1}{(x-1)^2}$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 3.5 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Substitution", statement: "Repeated root gives this constant directly." }],
            steps: [
              { reasoning: "$5x+2 = A(x-1)(x+1) + B(x+1) + C(x-1)^2$; at $x=1$: $7 = 2B$.", marks: 1, markCode: "M" },
              { reasoning: "$B = \\frac72 = 3.5$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 3.5.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$3.5$",
          },
        },
        {
          id: "cialfm-u1-s3-re-q12",
          difficulty: "core",
          totalMarks: 4,
          stem: "Express $\\frac{3x^2-x+2}{(x-1)(x-2)^2}$ in partial fractions.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Full PF", statement: "Numerator degree less than denominator." }],
            steps: [
              { reasoning: "Form: $\\frac{A}{x-1} + \\frac{B}{x-2} + \\frac{C}{(x-2)^2}$.", marks: 1, markCode: "M" },
              { reasoning: "$3x^2-x+2 = A(x-2)^2 + B(x-1)(x-2) + C(x-1)$; $x=1: 4 = A$; $x=2: 12 = C$.", marks: 1, markCode: "M" },
              { reasoning: "Compare $x^2$: $3 = A + B$ → $B = -1$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $\\frac{4}{x-1} - \\frac{1}{x-2} + \\frac{12}{(x-2)^2}$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac{4}{x-1} - \\frac{1}{x-2} + \\frac{12}{(x-2)^2}$",
          },
        },
        {
          id: "cialfm-u1-s3-re-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "The cover-up method for partial fractions fails when…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Never" },
            { id: "b", text: "The denominator is quadratic" },
            { id: "c", text: "There are two linear factors" },
            { id: "d", text: "A factor is repeated" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "technique", name: "Cover-up", statement: "Simple distinct factors only." }],
            steps: [
              { reasoning: "Repeated factors need extra terms $\\frac{B}{(x-a)^2}$ found by other means.", marks: 1, markCode: "M" },
              { reasoning: "Answer: option a.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Option a",
          },
        },
        {
          id: "cialfm-u1-s3-re-q14",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "In the partial fraction decomposition of $\\frac{7}{(x+2)^2(x-1)}$, find the coefficient of $\\frac{1}{x-1}$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 0.7778, tolerance: 0.001 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "PF constants", statement: "Substitute roots and compare." }],
            steps: [
              { reasoning: "$7 = A(x+2)(x-1) + B(x-1) + C(x+2)^2$; $x=1: 7 = 9C$ → $C=\\frac79$; $x=-2: 7 = -3B$ → $B=-\\frac73$; compare $x$: $0=-A+B+C$ → $A=-\\frac{14}{9}$.", marks: 1, markCode: "M" },
              { reasoning: "Coefficient of $\\frac{1}{x-1}$ is $\\frac79 \\approx 0.778$.", marks: 1, markCode: "M" },
              { reasoning: "Answer shown.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac{7}{9}$",
          },
        },
        {
          id: "cialfm-u1-s3-re-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Express $\\frac{x^2+3x+1}{(x+1)^2(x-1)}$ in partial fractions.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Full PF", statement: "Repeated plus simple factor." }],
            steps: [
              { reasoning: "Form: $\\frac{A}{x+1} + \\frac{B}{(x+1)^2} + \\frac{C}{x-1}$.", marks: 1, markCode: "M" },
              { reasoning: "$x^2+3x+1 = A(x+1)(x-1) + B(x-1) + C(x+1)^2$; $x=-1: -1 = -2B$ → $B=\\frac12$; $x=1: 5 = 4C$ → $C=\\frac54$.", marks: 1, markCode: "M" },
              { reasoning: "Compare $x^2$: $1 = A + C$ → $A = -\\frac14$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $-\\frac{1}{4(x+1)} + \\frac{1}{2(x+1)^2} + \\frac{5}{4(x-1)}$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$-\\frac{1}{4(x+1)} + \\frac{1}{2(x+1)^2} + \\frac{5}{4(x-1)}$",
          },
        },
        {
          id: "cialfm-u1-s3-re-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "In the partial fraction decomposition of $\\frac{4x+1}{(x-2)^2(x+1)}$, find the coefficient of $\\frac{1}{x+1}$.",
          response: { type: "numeric", parts: [{ label: "a", answer: -0.3333, tolerance: 0.001 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "PF constants", statement: "Compare coefficients." }],
            steps: [
              { reasoning: "$4x+1 = A(x-2)(x+1) + B(x+1) + C(x-2)^2$; $x=2: 9 = 3B$ → $B=3$; $x=-1: -3 = 9C$ → $C=-\\frac13$; compare $x^2$: $0 = A + C$ → $A = \\frac13$.", marks: 1, markCode: "M" },
              { reasoning: "Coefficient of $\\frac{1}{x+1}$ is $-\\frac13 \\approx -0.333$.", marks: 1, markCode: "M" },
              { reasoning: "Answer shown.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$-\\frac{1}{3}$",
          },
        },
      ],
    },
    {
      id: "cialfm-u1-s3-quadratic",
      title: "Irreducible quadratic factors",
      skill: "Decompose fractions with quadratic factors.",
      lesson: {
        sections: [
          {
            heading: "Form",
            body: "For $\\frac{f(x)}{(x-a)(x^2+bx+c)}$ with irreducible quadratic: $\\frac{A}{x-a} + \\frac{Bx+C}{x^2+bx+c}$.",
          },
          {
            heading: "Method",
            body: "Same approach — multiply through, substitute roots of linear factor, compare coefficients for the rest.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Express $\\frac{3}{(x-1)(x^2+1)}$ in partial fractions.",
          solution: "$= \\frac{A}{x-1} + \\frac{Bx+C}{x^2+1}$; solve.",
        },
      },
      questions: [
        {
          id: "cialfm-u1-s3-qu-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "For $\\frac{1}{x(x^2+4)}$ the PF form is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\frac{A}{x(x^2+4)}$" },
            { id: "b", text: "$\\frac{A}{x} + \\frac{B}{x+4}$" },
            { id: "c", text: "$\\frac{A}{x} + \\frac{B}{x^2+4}$" },
            { id: "d", text: "$\\frac{A}{x} + \\frac{Bx+C}{x^2+4}$" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "technique", name: "Quadratic PF", statement: "Numerator is linear." }],
            steps: [{ reasoning: "Quadratic factor needs $Bx+C$ numerator.", marks: 1, markCode: "A" }],
            finalAnswer: "Form (a)",
          },
        },
        {
          id: "cialfm-u1-s3-qu-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Express $\\frac{4}{(x-1)(x+3)}$ in partial fractions.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Basic PF", statement: "Standard decomposition." }],
            steps: [
              { reasoning: "$4 = A(x+3) + B(x-1)$; $x=1: A=1$; $x=-3: B=-1$.", marks: 1, markCode: "M" },
              { reasoning: "$= \\frac{1}{x-1} - \\frac{1}{x+3}$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac{1}{x-1} - \\frac{1}{x+3}$",
          },
        },
        {
          id: "cialfm-u1-s3-qu-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Express $\\frac{5x-4}{(x-2)(x^2+1)}$ in partial fractions.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Quadratic PF", statement: "Solve 3 unknowns." }],
            steps: [
              { reasoning: "$5x-4 = A(x^2+1) + (Bx+C)(x-2)$.", marks: 1, markCode: "M" },
              { reasoning: "$x=2: 6 = 5A$ → $A=\\frac{6}{5}$.", marks: 1, markCode: "M" },
              { reasoning: "Compare: $x^2: 0=A+B$ → $B=-\\frac{6}{5}$; $x^0: -4=A-2C$ → $C=\\frac{7}{5}$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac{6/5}{x-2} + \\frac{(-6x/5 + 7/5)}{x^2+1}$",
          },
        },
        {
          id: "cialfm-u1-s3-qu-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Express $\\frac{2x+1}{x(x^2+2x+2)}$ in partial fractions.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Full PF", statement: "Complete solution." }],
            steps: [
              { reasoning: "$2x+1 = A(x^2+2x+2) + (Bx+C)x$.", marks: 1, markCode: "M" },
              { reasoning: "$x=0: 1 = 2A$ → $A=\\frac12$.", marks: 1, markCode: "M" },
              { reasoning: "Compare $x^2$: $0=A+B$ → $B=-\\frac12$; compare $x$: $2=2A+C$ → $C=1$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $\\frac{1/2}{x} + \\frac{(-x/2+1)}{x^2+2x+2}$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac{1}{2x} + \\frac{1-x/2}{x^2+2x+2}$",
          },
        },
        {
          id: "cialfm-u1-s3-qu-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "For $\\frac{f(x)}{(x-a)(x^2+bx+c)}$ with $x^2+bx+c$ irreducible, the numerator over the quadratic factor must be…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Cubic" },
            { id: "b", text: "Constant only" },
            { id: "c", text: "Linear: $Bx+C$" },
            { id: "d", text: "Quadratic" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "technique", name: "Quadratic PF", statement: "Numerator degree one less than factor." }],
            steps: [{ reasoning: "Numerator is linear $Bx+C$.", marks: 1, markCode: "A" }],
            finalAnswer: "Linear $Bx+C$",
          },
        },
        {
          id: "cialfm-u1-s3-qu-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The correct PF form of $\\frac{1}{(x+1)(x^2+x+1)}$ is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\frac{A}{x+1} + \\frac{Bx+C}{x^2+x+1}$" },
            { id: "b", text: "$\\frac{A}{x+1} + \\frac{B}{x+1} + \\frac{C}{x^2+x+1}$" },
            { id: "c", text: "$\\frac{A}{x+1} + \\frac{Bx+C}{x+1}$" },
            { id: "d", text: "$\\frac{A}{x+1} + \\frac{B}{x^2+x+1}$" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "technique", name: "Quadratic PF", statement: "Linear numerator over quadratic." }],
            steps: [{ reasoning: "Form (a) is correct.", marks: 1, markCode: "A" }],
            finalAnswer: "Form (a)",
          },
        },
        {
          id: "cialfm-u1-s3-qu-q7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Express $\\frac{3}{(x-1)(x+2)}$ in partial fractions and find the coefficient of $\\frac{1}{x-1}$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 1 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Basic PF", statement: "Cover-up." }],
            steps: [
              { reasoning: "$3 = A(x+2) + B(x-1)$; $x=1: 3 = 3A$ → $A=1$.", marks: 1, markCode: "M" },
              { reasoning: "Coefficient is 1.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1",
          },
        },
        {
          id: "cialfm-u1-s3-qu-q8",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Express $\\frac{5}{(x+1)(x+3)}$ in partial fractions and find the coefficient of $\\frac{1}{x+1}$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 2.5 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Basic PF", statement: "Cover-up." }],
            steps: [
              { reasoning: "$5 = A(x+3) + B(x+1)$; $x=-1: 5 = 2A$ → $A=\\frac52$.", marks: 1, markCode: "M" },
              { reasoning: "Coefficient is $2.5$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2.5$",
          },
        },
        {
          id: "cialfm-u1-s3-qu-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Express $\\frac{4x+1}{(x-1)(x^2+1)}$ in partial fractions.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Quadratic PF", statement: "Solve 3 unknowns." }],
            steps: [
              { reasoning: "$4x+1 = A(x^2+1) + (Bx+C)(x-1)$.", marks: 1, markCode: "M" },
              { reasoning: "$x=1: 5 = 2A$ → $A=\\frac52$; compare $x^2$: $0 = A+B$ → $B=-\\frac52$.", marks: 1, markCode: "M" },
              { reasoning: "Compare constant: $1 = A - C$ → $C = \\frac32$; check $x$: $-B+C = \\frac52+\\frac32 = 4$. ✓", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac{5/2}{x-1} + \\frac{(-5x/2 + 3/2)}{x^2+1}$",
          },
        },
        {
          id: "cialfm-u1-s3-qu-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "Express $\\frac{x+4}{(x+2)(x^2+4)}$ in partial fractions.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Quadratic PF", statement: "Full decomposition." }],
            steps: [
              { reasoning: "$x+4 = A(x^2+4) + (Bx+C)(x+2)$.", marks: 1, markCode: "M" },
              { reasoning: "$x=-2: 2 = 8A$ → $A=\\frac14$; compare $x^2$: $0 = A+B$ → $B=-\\frac14$.", marks: 1, markCode: "M" },
              { reasoning: "Compare constant: $4 = 4A + 2C$ → $C=\\frac32$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac{1/4}{x+2} + \\frac{(-x/4 + 3/2)}{x^2+4}$",
          },
        },
        {
          id: "cialfm-u1-s3-qu-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "In the decomposition of $\\frac{2x-3}{(x-1)(x^2+2)}$ into $\\frac{A}{x-1} + \\frac{Bx+C}{x^2+2}$, find the value of $B$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 0.3333, tolerance: 0.001 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Coefficient compare", statement: "Compare $x^2$ terms." }],
            steps: [
              { reasoning: "$2x-3 = A(x^2+2) + (Bx+C)(x-1)$; $x=1: -1 = 3A$ → $A=-\\frac13$.", marks: 1, markCode: "M" },
              { reasoning: "Compare $x^2$: $0 = A + B$ → $B = \\frac13 \\approx 0.333$.", marks: 1, markCode: "M" },
              { reasoning: "Answer shown.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac{1}{3}$",
          },
        },
        {
          id: "cialfm-u1-s3-qu-q12",
          difficulty: "core",
          totalMarks: 4,
          stem: "Express $\\frac{x^2+1}{(x-1)(x^2+2x+2)}$ in partial fractions.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Full PF", statement: "Numerator degree equals factor degree — still proper overall." }],
            steps: [
              { reasoning: "Form: $\\frac{A}{x-1} + \\frac{Bx+C}{x^2+2x+2}$; $x^2+1 = A(x^2+2x+2) + (Bx+C)(x-1)$.", marks: 1, markCode: "M" },
              { reasoning: "$x=1: 2 = 5A$ → $A=\\frac25$; compare $x^2$: $1 = A+B$ → $B=\\frac35$.", marks: 1, markCode: "M" },
              { reasoning: "Compare constant: $1 = 2A - C$ → $C = -\\frac15$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $\\frac{2/5}{x-1} + \\frac{(3x/5 - 1/5)}{x^2+2x+2}$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac{2}{5(x-1)} + \\frac{3x-1}{5(x^2+2x+2)}$",
          },
        },
        {
          id: "cialfm-u1-s3-qu-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "$x^2+2x+5$ is treated as an irreducible quadratic factor because…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Its discriminant is negative" }, { id: "b", text: "It has no real roots" }, { id: "c", text: "It is a perfect square" }, { id: "d", text: "Both a and b" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "property", name: "Irreducible", statement: "Negative discriminant ⇒ no real roots." }],
            steps: [
              { reasoning: "$b^2-4ac = 4-20 = -16 < 0$; no real roots, cannot factorise over $\\mathbb{R}$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: options a and b both describe it.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Option d",
          },
        },
        {
          id: "cialfm-u1-s3-qu-q14",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "In the decomposition of $\\frac{8}{(x-2)(x^2+4)}$ into $\\frac{A}{x-2} + \\frac{Bx+C}{x^2+4}$, find the value of $A$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 1 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Substitution", statement: "Linear factor root isolates $A$." }],
            steps: [
              { reasoning: "$8 = A(x^2+4) + (Bx+C)(x-2)$; at $x=2$: $8 = 8A$.", marks: 1, markCode: "M" },
              { reasoning: "$A = 1$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 1.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1",
          },
        },
        {
          id: "cialfm-u1-s3-qu-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Express $\\frac{2x+3}{(x-2)(x^2+x+1)}$ in partial fractions, noting $x^2+x+1$ is irreducible.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Full PF", statement: "Irreducible quadratic check." }],
            steps: [
              { reasoning: "Discriminant $1-4=-3<0$ so quadratic stays; form $\\frac{A}{x-2}+\\frac{Bx+C}{x^2+x+1}$.", marks: 1, markCode: "M" },
              { reasoning: "$2x+3 = A(x^2+x+1) + (Bx+C)(x-2)$; $x=2: 7 = 7A$ → $A=1$.", marks: 1, markCode: "M" },
              { reasoning: "Compare $x^2$: $0 = A+B$ → $B=-1$; constant: $3 = A-2C$ → $C=-1$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $\\frac{1}{x-2} - \\frac{x+1}{x^2+x+1}$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac{1}{x-2} - \\frac{x+1}{x^2+x+1}$",
          },
        },
        {
          id: "cialfm-u1-s3-qu-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "In the decomposition of $\\frac{5x-1}{(x+1)(x^2+1)}$ into $\\frac{A}{x+1}+\\frac{Bx+C}{x^2+1}$, find the value of $C$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 2 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Coefficient compare", statement: "Constant term comparison." }],
            steps: [
              { reasoning: "$5x-1 = A(x^2+1) + (Bx+C)(x+1)$; $x=-1: -6 = 2A$ → $A=-3$.", marks: 1, markCode: "M" },
              { reasoning: "Compare $x^2$: $B = 3$; constant: $-1 = A + C$ → $C = 2$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 2.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cialfm-u1-s3-pf-notes",
      title: "Advanced partial fractions — revision notes",
      summary: "Repeated linear and irreducible quadratic factors.",
      sections: [
        { heading: "Repeated", body: "Include every power: $\\frac{A}{x-a}+\\frac{B}{(x-a)^2}$. Substitute roots first." },
        { heading: "Quadratic", body: "Use $\\frac{Bx+C}{x^2+bx+c}$. Compare coefficients for remaining constants." },
      ],
    },
  ],
};
