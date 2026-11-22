import type { Lesson } from "../../../types.ts";

export const lesson42: Lesson = {
  id: "cipum-u4-lesson-4-2",
  code: "4-2",
  title: "Differential Equations",
  goal: "I CAN form and solve first-order differential equations by separation of variables.",
  standards: [
    "Cambridge Pre-U Mathematics 9794",
    "Pure Mathematics: differential equations",
  ],
  vocabulary: [
    {
      term: "Differential equation",
      definition: "Equation relating a function to its derivatives.",
    },
    {
      term: "Order",
      definition: "Highest power of the derivative appearing in the equation.",
    },
    {
      term: "Separation of variables",
      definition: "Rearranging dy/dx = f(x)g(y) into dy/g(y) = f(x)dx.",
    },
    {
      term: "Particular solution",
      definition: "Solution satisfying a given boundary/initial condition.",
    },
    {
      term: "General solution",
      definition: "Family of solutions containing an arbitrary constant.",
    },
    {
      term: "Modelling equation",
      definition:
        "Differential equation describing a real-world rate of change.",
    },
  ],
  concepts: [
    {
      id: "cipum-u4-s1-diffeq",
      title: "First-order differential equations",
      skill:
        "Form, separate and solve differential equations; apply initial conditions.",
      lesson: {
        sections: [
          {
            heading: "Forming differential equations",
            body: "Rates of change give differential equations: population growth dP/dt = kP, cooling dT/dt = −k(T − T_env), Newton's law. Eliminate parameters from a general solution by differentiating — e.g. y = Aeˣ + Be⁻ˣ has two arbitrary constants, so differentiate twice and eliminate A, B to get y'' = y.",
          },
          {
            heading: "Separation of variables",
            body: "For dy/dx = f(x)g(y): rearrange to dy/g(y) = f(x)dx, integrate both sides. Always include +C, then apply the initial/boundary condition to find it. Example: dy/dx = xy → ln|y| = x²/2 + C → y = Ae^(x²/2).",
          },
          {
            heading: "Exponential models",
            body: "Many natural processes give dy/dt = ky → y = Aeᵏᵗ. Radioactive decay: dN/dt = −λN → N = N₀e⁻λᵗ. Newton's cooling: dT/dt = −k(T − T_env) → T = T_env + Ae⁻ᵏᵗ. The structure of the solution reveals the underlying rate constant.",
          },
        ],
        keyFormulas: [
          {
            name: "Separation",
            statement:
              "$\\frac{dy}{dx} = f(x)g(y) \\Rightarrow \\int \\frac{dy}{g(y)} = \\int f(x)\\,dx$",
          },
          {
            name: "Exponential solution",
            statement: "$\\frac{dy}{dt} = ky \\Rightarrow y = Ae^{kt}$",
          },
        ],
        workedExample: {
          problem: "Solve $\\frac{dy}{dx} = 2xy$ with $y(0) = 3$.",
          solution:
            "$\\frac{dy}{y} = 2x\\,dx \\Rightarrow \\ln|y| = x^2 + C \\Rightarrow y = Ae^{x^2}$. At $x=0$, $y=3$: $A = 3$, so $y = 3e^{x^2}$.",
        },
      },
      questions: [
        {
          id: "cipum-u4-de-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The order of the differential equation $\\frac{d^2y}{dx^2} + 3\\frac{dy}{dx} + y = 0$ is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "3" },
              { id: "b", text: "1" },
              { id: "c", text: "0" },
              { id: "d", text: "2" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Order of DE",
                statement: "Highest power of the derivative in the equation.",
              },
            ],
            steps: [
              {
                reasoning: "Highest derivative is d²y/dx² → order 2.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Order = 2",
          },
        },
        {
          id: "cipum-u4-de-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Solve $\\frac{dy}{dx} = \\frac{x}{y}$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Separation of variables",
                statement: "Separate dy and dx, integrate both sides.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$y\\,dy = x\\,dx \\Rightarrow \\frac{y^2}{2} = \\frac{x^2}{2} + C$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$y^2 = x^2 + A$ (absorbing constants).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$y^2 = x^2 + A$",
          },
        },
        {
          id: "cipum-u4-de-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Solve $\\frac{dy}{dx} = \\frac{y}{x}$ given $y(1) = 2$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Separation with IC",
                statement:
                  "Separate, integrate, then apply the initial condition.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$\\frac{dy}{y} = \\frac{dx}{x} \\Rightarrow \\ln|y| = \\ln|x| + C$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$y = Ax$ (combining logs).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "At $x=1$, $y=2$: $A = 2$, so $y = 2x$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$y = 2x$",
          },
        },
        {
          id: "cipum-u4-de-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A radioactive substance decays with $\\frac{dN}{dt} = -0.1N$ and $N(0) = 1000$. Find $N$ after 20 years.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Exponential decay model",
                statement: "dN/dt = −λN → N = N₀e⁻λᵗ.",
              },
            ],
            steps: [
              {
                reasoning: "$N = 1000e^{-0.1t}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "At $t = 20$: $N = 1000e^{-2}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$e^{-2} \\approx 0.1353$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$N \\approx 135$ atoms (units).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$N \\approx 135$",
          },
        },
        {
          id: "cipum-u4-de-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The general solution of a first-order differential equation contains:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "One arbitrary constant" },
              { id: "b", text: "No arbitrary constant" },
              { id: "c", text: "Two arbitrary constants" },
              { id: "d", text: "It depends on the equation" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "General solution",
                statement:
                  "Family of solutions containing an arbitrary constant.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A first-order DE involves only dy/dx, so its general solution has one arbitrary constant.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "One arbitrary constant",
          },
        },
        {
          id: "cipum-u4-de-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which differential equation can be solved by separation of variables?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{dy}{dx} = x + y$" },
              { id: "b", text: "$\\frac{dy}{dx} = e^{x+y}$" },
              { id: "c", text: "$\\frac{dy}{dx} = \\sin(x + y)$" },
              { id: "d", text: "$\\frac{dy}{dx} = x^2y^3$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Separation of variables",
                statement:
                  "$\\frac{dy}{dx} = f(x)g(y)$ can be separated into $\\frac{dy}{g(y)} = f(x)\\,dx$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Only $x^2y^3$ is a product of a function of $x$ and a function of $y$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\frac{dy}{dx} = x^2y^3$",
          },
        },
        {
          id: "cipum-u4-de-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Solve $\\frac{dy}{dx} = 3x^2$ given $y(0) = 1$. Find the value of $y$ when $x = 2$.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 9 }],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Integration with IC",
                statement: "Integrate, include +C, then apply the initial condition.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$y = x^3 + C$; $y(0) = 1 \\Rightarrow C = 1$, so $y = x^3 + 1$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$y(2) = 2^3 + 1 = 9$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "9",
          },
        },
        {
          id: "cipum-u4-de-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "The general solution of $\\frac{dy}{dx} = \\frac{2y}{x}$ is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$y = Ae^{2x}$" },
              { id: "b", text: "$y = A\\ln x$" },
              { id: "c", text: "$y = Ax^2$" },
              { id: "d", text: "$y = Ax$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Separation of variables",
                statement: "Separate dy and dx, integrate both sides.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$\\frac{dy}{y} = \\frac{2\\,dx}{x} \\Rightarrow \\ln|y| = 2\\ln|x| + C \\Rightarrow y = Ax^2$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$y = Ax^2$",
          },
        },
        {
          id: "cipum-u4-de-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "The solution of $\\frac{dy}{dt} = ky$ is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$y = A + kt$" },
              { id: "b", text: "$y = Ae^{kt}$" },
              { id: "c", text: "$y = Ak^t$" },
              { id: "d", text: "$y = Ae^{-kt}$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Exponential solution",
                statement: "dy/dt = ky gives y = Aeᵏᵗ.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Separating gives $\\frac{dy}{y} = k\\,dt \\Rightarrow \\ln|y| = kt + C \\Rightarrow y = Ae^{kt}$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$y = Ae^{kt}$",
          },
        },
        {
          id: "cipum-u4-de-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "A quantity satisfies $\\frac{dN}{dt} = -0.2N$ with $N(0) = 500$. Find $N$ when $t = 10$.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 67.7, tolerance: 0.05 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Exponential decay model",
                statement: "dN/dt = −λN → N = N₀e⁻λᵗ.",
              },
            ],
            steps: [
              {
                reasoning: "$N = 500e^{-0.2t}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "At $t = 10$: $N = 500e^{-2}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$e^{-2} \\approx 0.1353 \\Rightarrow N \\approx 67.7$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$N \\approx 67.7$",
          },
        },
        {
          id: "cipum-u4-de-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "The general solution of $\\frac{dy}{dx} = y^2$ is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$y = \\frac{1}{x} + C$" },
              { id: "b", text: "$y = -\\frac{1}{x + C}$" },
              { id: "c", text: "$y = -\\frac{1}{x^2} + C$" },
              { id: "d", text: "$y = e^x + C$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Separation of variables",
                statement: "Separate dy and dx, integrate both sides.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$\\frac{dy}{y^2} = dx \\Rightarrow -\\frac{1}{y} = x + C \\Rightarrow y = -\\frac{1}{x+C}$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$y = -\\frac{1}{x + C}$",
          },
        },
        {
          id: "cipum-u4-de-q12",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A hot drink cools according to $\\frac{dT}{dt} = -0.1(T - 20)$ with $T(0) = 80°\\text{C}$. Find its temperature after 20 minutes.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Newton's cooling model",
                statement: "dT/dt = −k(T − T_env) → T = T_env + Ae⁻ᵏᵗ.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$T = 20 + Ae^{-0.1t}$ — temperature approaches ambient 20°C.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "$T(0) = 80 \\Rightarrow 80 = 20 + A \\Rightarrow A = 60$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "At $t = 20$: $T = 20 + 60e^{-2}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "$e^{-2} \\approx 0.1353 \\Rightarrow T \\approx 20 + 8.1 \\approx 28.1°\\text{C}$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$T \\approx 28.1°\\text{C}$",
          },
        },
        {
          id: "cipum-u4-de-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "If $y = Ae^{2x} + Be^{-2x}$, then $y$ satisfies $y'' = ky$. Find the value of $k$.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 4 }],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Differentiating exponentials",
                statement:
                  "Successive derivatives of $e^{kx}$ scale by powers of $k$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$y' = 2Ae^{2x} - 2Be^{-2x}$; $y'' = 4Ae^{2x} + 4Be^{-2x} = 4y$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "So $k = 4$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$k = 4$",
          },
        },
        {
          id: "cipum-u4-de-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "$\\frac{dy}{dx} = \\frac{x}{y}$ can be solved by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "it cannot be solved analytically" },
              { id: "b", text: "substituting $u = x + y$" },
              { id: "c", text: "using an integrating factor" },
              { id: "d", text: "separating the variables" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Separation of variables",
                statement: "Separate dy and dx, integrate both sides.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Rearranging gives $y\\,dy = x\\,dx$, which separates.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Separating the variables",
          },
        },
        {
          id: "cipum-u4-de-q15",
          difficulty: "core",
          totalMarks: 3,
          stem: "A population satisfies $\\frac{dP}{dt} = 0.05P$ with $P(0) = 1000$. Find the time at which $P = 2000$.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 13.86, tolerance: 0.01 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Exponential growth model",
                statement: "dP/dt = kP → P = P₀eᵏᵗ.",
              },
            ],
            steps: [
              {
                reasoning: "$P = 1000e^{0.05t}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$2000 = 1000e^{0.05t} \\Rightarrow e^{0.05t} = 2$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$t = \\frac{\\ln 2}{0.05} \\approx 13.86$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$t \\approx 13.86$",
          },
        },
        {
          id: "cipum-u4-de-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Solve $\\frac{dy}{dx} = \\frac{1}{x + 1}$ given $y(0) = 2$, and find the value of $y$ when $x = 3$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Integration with IC",
                statement: "Integrate, include +C, then apply the initial condition.",
              },
            ],
            steps: [
              {
                reasoning: "$y = \\ln|x + 1| + C$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "$y(0) = 2 \\Rightarrow C = 2$, so $y = \\ln(x + 1) + 2$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$y(3) = \\ln 4 + 2 \\approx 1.386 + 2 \\approx 3.39$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$y = \\ln(x+1) + 2$; $y(3) \\approx 3.39$",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cipum-u4-diffeq-notes",
      title: "Differential equations — revision notes",
      summary:
        "Order, separation of variables, exponential models, initial conditions.",
      sections: [
        {
          heading: "Key skills",
          body: "For separation, get all y-terms on one side and x-terms on the other before integrating. Always add +C for indefinite integrals, then use the boundary condition to fix it.",
        },
        {
          heading: "Exam tips",
          body: "Recognise the pattern dy/dt = ky → exponential solution. For decay problems, λ > 0 gives e⁻λᵗ — check whether the equation already has a negative sign.",
        },
      ],
    },
  ],
};
