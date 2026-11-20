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
              { id: "a", text: "2" },
              { id: "b", text: "1" },
              { id: "c", text: "3" },
              { id: "d", text: "0" },
            ],
            correctChoiceId: "a",
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
