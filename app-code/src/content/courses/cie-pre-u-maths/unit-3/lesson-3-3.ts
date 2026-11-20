import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "cipum-u3-lesson-3-3",
  code: "3-3",
  title: "Applications of Calculus",
  goal: "I CAN apply differentiation and integration to rates of change, optimisation and kinematics.",
  standards: ["Cambridge Pre-U Mathematics 9794", "Pure Mathematics: calculus"],
  vocabulary: [
    {
      term: "Rate of change",
      definition: "How fast a quantity changes — the derivative dy/dx.",
    },
    {
      term: "Optimisation",
      definition: "Finding maximum or minimum values of a function.",
    },
    {
      term: "Kinematics",
      definition:
        "Motion described by position, velocity and acceleration functions.",
    },
    { term: "Velocity", definition: "Rate of change of displacement — ds/dt." },
    {
      term: "Acceleration",
      definition: "Rate of change of velocity — dv/dt = d²s/dt².",
    },
    {
      term: "Turning point",
      definition:
        "Point where velocity changes sign — maximum or minimum of displacement.",
    },
  ],
  concepts: [
    {
      id: "cipum-u3-s1-apps",
      title: "Calculus in context",
      skill:
        "Use derivatives for rates and optimisation; use integrals for accumulated change and kinematics.",
      lesson: {
        sections: [
          {
            heading: "Rates of change",
            body: "The derivative gives instantaneous rate of change: if s(t) is position, v = ds/dt is velocity and a = dv/dt = d²s/dt² is acceleration. In economics, marginal cost/revenue are derivatives; in science, rates of reaction or growth. Chain rule handles composite rates — e.g. dV/dt where V depends on r and r depends on t.",
          },
          {
            heading: "Optimisation",
            body: "To maximise/minimise: express the target quantity as a function of one variable (use constraints to eliminate others), differentiate, set = 0, verify with second derivative or endpoints. Classic problems: maximum area with fixed perimeter, minimum material for a volume, maximum profit.",
          },
          {
            heading: "Kinematics with integrals",
            body: "Displacement s = ∫v dt; velocity v = ∫a dt. Definite integrals give displacement over a time interval: s(t₂) − s(t₁) = ∫ₜ₁ᵗ² v dt. Area under a velocity-time graph gives displacement; area under acceleration-time gives change in velocity.",
          },
        ],
        keyFormulas: [
          {
            name: "Kinematics",
            statement:
              "$v = \\frac{ds}{dt}$; $a = \\frac{dv}{dt} = \\frac{d^2s}{dt^2}$; $s = \\int v\\,dt$",
          },
          {
            name: "Optimisation",
            statement:
              "one variable → differentiate → solve dy/dx = 0 → verify max/min",
          },
        ],
        workedExample: {
          problem:
            "A ball is thrown with velocity v(t) = 20 − 10t m/s. Find its displacement after 2 seconds (from rest at origin).",
          solution:
            "$s = \\int_0^2 (20 - 10t)\\,dt = [20t - 5t^2]_0^2 = 40 - 20 = 20$ m. Displacement is 20 m.",
        },
      },
      questions: [
        {
          id: "cipum-u3-app-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "If $s = t^3 - 6t^2 + 9t$, the velocity is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$3t^2 - 12t + 9$" },
              { id: "b", text: "$t^4 - 2t^3 + \\frac{9}{2}t^2$" },
              { id: "c", text: "$3t^2 - 6t + 9$" },
              { id: "d", text: "$6t - 12$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Velocity",
                statement: "v = ds/dt — differentiate displacement.",
              },
            ],
            steps: [
              {
                reasoning: "$\\frac{ds}{dt} = 3t^2 - 12t + 9$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$v = 3t^2 - 12t + 9$",
          },
        },
        {
          id: "cipum-u3-app-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A rectangle has perimeter 20 m. Find the maximum area.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Optimisation",
                statement:
                  "Express target as one variable, differentiate, set = 0.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Let sides be $x$ and $10 - x$; $A = x(10-x) = 10x - x^2$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "$\\frac{dA}{dx} = 10 - 2x = 0 \\Rightarrow x = 5$; $A_{\\max} = 25$ m².",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Maximum area = 25 m² (square 5 × 5).",
          },
        },
        {
          id: "cipum-u3-app-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A particle has velocity $v = 3t^2 - 12t + 9$. Find its displacement from $t = 0$ to $t = 3$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Kinematics",
                statement: "Displacement = ∫v dt over the interval.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$s = \\int_0^3 (3t^2 - 12t + 9)\\,dt = [t^3 - 6t^2 + 9t]_0^3$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$= (27 - 54 + 27) - 0 = 0$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Displacement = 0 m (returns to start).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Displacement = 0 m",
          },
        },
        {
          id: "cipum-u3-app-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A company has cost $C = x^3 - 6x^2 + 15x + 100$ and revenue $R = 12x$. Find the production level $x$ that maximises profit $P = R - C$ for $x > 0$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Optimisation",
                statement:
                  "Maximise P(x); check endpoints and second derivative.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$P = 12x - (x^3 - 6x^2 + 15x + 100) = -x^3 + 6x^2 - 3x - 100$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "$\\frac{dP}{dx} = -3x^2 + 12x - 3 = -3(x^2 - 4x + 1) = 0$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "$x = \\frac{4 \\pm \\sqrt{16-4}}{2} = 2 \\pm \\sqrt{3}$; $x = 2 - \\sqrt{3} \\approx 0.27$, $x = 2 + \\sqrt{3} \\approx 3.73$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "$\\frac{d^2P}{dx^2} = -6x + 12$: at $x \\approx 3.73$, $f'' < 0$ → maximum. Profit-maximising output $x = 2 + \\sqrt{3}$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$x = 2 + \\sqrt{3}$ units",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cipum-u3-apps-notes",
      title: "Applications of calculus — revision notes",
      summary:
        "Rates of change, optimisation, kinematics: v = ds/dt, s = ∫v dt.",
      sections: [
        {
          heading: "Key skills",
          body: "For optimisation, always eliminate to ONE variable before differentiating. For kinematics, displacement is the integral of velocity — watch for negative velocity (motion in opposite direction).",
        },
        {
          heading: "Exam tips",
          body: "Check the domain — a stationary point outside the allowed range is irrelevant. For 'maximum area/perimeter' problems, the answer is often a square or circle — verify geometrically.",
        },
      ],
    },
  ],
};
