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
              { id: "a", text: "$t^4 - 2t^3 + \\frac{9}{2}t^2$" },
              { id: "b", text: "$3t^2 - 6t + 9$" },
              { id: "c", text: "$6t - 12$" },
              { id: "d", text: "$3t^2 - 12t + 9$" },
            ],
            correctChoiceId: "d",
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
        {
          id: "cipum-u3-app-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "For a particle with displacement $s(t)$, its acceleration is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\int s\\,dt$" },
              { id: "b", text: "$s^2$" },
              { id: "c", text: "$\\frac{ds}{dt}$" },
              { id: "d", text: "$\\frac{d^2s}{dt^2}$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Kinematics",
                statement: "$a = \\frac{dv}{dt} = \\frac{d^2s}{dt^2}$.",
              },
            ],
            steps: [
              {
                reasoning: "Acceleration is the second derivative of displacement.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$a = \\frac{d^2s}{dt^2}$",
          },
        },
        {
          id: "cipum-u3-app-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "A particle has displacement $s = t^2 - 3t$ metres. Find its velocity when $t = 4$ seconds.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 5 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Velocity",
                statement: "v = ds/dt.",
              },
            ],
            steps: [
              {
                reasoning: "$v = \\frac{ds}{dt} = 2t - 3$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "At $t = 4$: $v = 8 - 3 = 5$ m/s.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "5 m/s",
          },
        },
        {
          id: "cipum-u3-app-q7",
          difficulty: "core",
          totalMarks: 3,
          stem: "A rectangle has perimeter 24 m. Find the maximum possible area.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Optimisation",
                statement: "Express area in one variable, differentiate, set = 0.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Let sides be $x$ and $12 - x$; $A = x(12-x) = 12x - x^2$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "$\\frac{dA}{dx} = 12 - 2x = 0 \\Rightarrow x = 6$; this is a square.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$A_{\\max} = 6 \\times 6 = 36$ m².",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Maximum area = 36 m²",
          },
        },
        {
          id: "cipum-u3-app-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "If $s = 5t^2 + 2t$, the velocity $v = \\frac{ds}{dt}$ is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$10t + 2$" },
              { id: "b", text: "$\\frac{10}{3}t^3 + t^2$" },
              { id: "c", text: "$5t + 2$" },
              { id: "d", text: "$10t^2 + 2t$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Velocity",
                statement: "v = ds/dt — differentiate term by term.",
              },
            ],
            steps: [
              {
                reasoning: "$v = 10t + 2$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$v = 10t + 2$",
          },
        },
        {
          id: "cipum-u3-app-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "A particle has velocity $v = 6t - 4$ m/s. Find its displacement from $t = 0$ to $t = 2$ seconds.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 4 }],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Kinematics",
                statement: "Displacement = $\\int v\\,dt$ over the interval.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$s = \\int_0^2 (6t - 4)\\,dt = [3t^2 - 4t]_0^2 = (12 - 8) - 0$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Displacement = 4 m.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "4 m",
          },
        },
        {
          id: "cipum-u3-app-q10",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "An open box is made from a 12 cm × 12 cm square sheet by cutting a square of side $x$ from each corner and folding up the sides. Find the value of $x$ that maximises the volume.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Optimisation",
                statement: "Build the volume function, differentiate, set = 0, verify.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Base is $(12-2x)$ by $(12-2x)$, height $x$: $V = x(12-2x)^2$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "$\\frac{dV}{dx} = (12-2x)^2 - 4x(12-2x) = (12-2x)(12-6x) = 0$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "$x = 2$ or $x = 6$; $x = 6$ gives zero volume, so $x = 2$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Maximum volume $V = 2(8)^2 = 128$ cm³ at $x = 2$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$x = 2$ cm; $V_{\\max} = 128$ cm³",
          },
        },
        {
          id: "cipum-u3-app-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "The area under a velocity–time graph represents:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Displacement" },
              { id: "b", text: "Acceleration" },
              { id: "c", text: "Distance travelled only if velocity is constant" },
              { id: "d", text: "Speed" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Kinematics",
                statement: "s = ∫v dt; area under v–t graph gives displacement.",
              },
            ],
            steps: [
              {
                reasoning: "Area under velocity–time gives displacement.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Displacement",
          },
        },
        {
          id: "cipum-u3-app-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "A particle has acceleration $a = 3t$ m/s² and initial velocity $v(0) = 2$ m/s. Find $v(3)$.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 15.5 }],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Kinematics",
                statement: "$v = \\int a\\,dt + C$; use the initial condition.",
              },
            ],
            steps: [
              {
                reasoning: "$v = \\int 3t\\,dt = \\frac{3t^2}{2} + C$; $v(0) = 2 \\Rightarrow C = 2$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$v(3) = \\frac{3(9)}{2} + 2 = 13.5 + 2 = 15.5$ m/s.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "15.5 m/s",
          },
        },
        {
          id: "cipum-u3-app-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "A particle has displacement $s = t^3 - 6t^2 + 9t + 1$. For $t > 1$, it is instantaneously at rest when $t = ?$",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1" },
              { id: "b", text: "3" },
              { id: "c", text: "4" },
              { id: "d", text: "2" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Kinematics",
                statement: "At rest means $v = \\frac{ds}{dt} = 0$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$v = 3t^2 - 12t + 9 = 3(t-1)(t-3) = 0$ at $t = 1, 3$; for $t > 1$, $t = 3$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$t = 3$",
          },
        },
        {
          id: "cipum-u3-app-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A projectile reaches its maximum height when:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Its total velocity is zero" },
              { id: "b", text: "Its vertical velocity is zero" },
              { id: "c", text: "Its acceleration is zero" },
              { id: "d", text: "Its horizontal velocity is zero" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Kinematics",
                statement: "Maximum height occurs when vertical velocity changes sign.",
              },
            ],
            steps: [
              {
                reasoning:
                  "At maximum height the vertical component of velocity is zero (horizontal component is unchanged).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Vertical velocity = 0",
          },
        },
        {
          id: "cipum-u3-app-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "The volume of a sphere is $V = \\frac{4}{3}\\pi r^3$. When $r = 3$ cm and $\\frac{dr}{dt} = 2$ cm/s, find $\\frac{dV}{dt}$.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 226.194671, tolerance: 0.01 }],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Related rates",
                statement: "Apply the chain rule: $\\frac{dV}{dt} = \\frac{dV}{dr}\\frac{dr}{dt}$.",
              },
            ],
            steps: [
              {
                reasoning: "$\\frac{dV}{dr} = 4\\pi r^2 = 4\\pi(9) = 36\\pi$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$\\frac{dV}{dt} = 36\\pi \\times 2 = 72\\pi$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$\\frac{dV}{dt} \\approx 226.19$ cm³/s.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$72\\pi \\approx 226.19$ cm³/s",
          },
        },
        {
          id: "cipum-u3-app-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A particle has acceleration $a = 2t - 4$ m/s² and initial velocity $v(0) = 6$ m/s. Find its displacement from $t = 0$ to $t = 3$ seconds.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Kinematics",
                statement: "Integrate twice: $v = \\int a\\,dt$, then $s = \\int v\\,dt$.",
              },
            ],
            steps: [
              {
                reasoning: "$v = \\int (2t-4)dt = t^2 - 4t + C$; $v(0) = 6 \\Rightarrow C = 6$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$s = \\int_0^3 (t^2 - 4t + 6)\\,dt = \\left[\\frac{t^3}{3} - 2t^2 + 6t\\right]_0^3$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "At $t = 3$: $\\frac{27}{3} - 18 + 18 = 9 - 18 + 18 = 9$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Displacement = 9 m.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "9 m",
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
