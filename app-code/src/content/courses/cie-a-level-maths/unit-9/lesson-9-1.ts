import type { Lesson } from "../../../types.ts";

export const lesson91: Lesson = {
  id: "cial-m-u9-lesson-9-1",
  code: "9-1",
  title: "Kinematics with calculus",
  goal: "I CAN solve kinematics problems using differentiation and integration.",
  standards: ["Cambridge A Level Mathematics 9709: kinematics"],
  vocabulary: [
    { term: "Displacement", definition: "Change in position; a vector quantity." },
    { term: "Velocity", definition: "$v = \\frac{ds}{dt}$; rate of change of displacement." },
    { term: "Acceleration", definition: "$a = \\frac{dv}{dt} = \\frac{d^2s}{dt^2}$." },
    { term: "Initial conditions", definition: "Given values of v and s at t = 0 used to find constants." },
  ],
  concepts: [
    {
      id: "cial-m-u9-kinematics",
      title: "Kinematics with calculus",
      skill:
        "Relate displacement, velocity and acceleration through integration and differentiation.",
      lesson: {
        sections: [
          {
            heading: "The relationships",
            body: "$a = \\frac{dv}{dt} = \\frac{d^2s}{dt^2}$. Integrate a to get v; integrate v to get s. Each integration introduces a constant determined by initial conditions.",
          },
          {
            heading: "Constant acceleration",
            body: "For constant a: $v = u + at$, $s = ut + \\frac{1}{2}at^2$, $v^2 = u^2 + 2as$ (SUVAT). These are special cases of the calculus approach.",
          },
          {
            heading: "Variable acceleration",
            body: "When a is not constant, calculus is essential: $v = \\int a\\,dt + c_1$, $s = \\int v\\,dt + c_2$. Find when v = 0 for maximum displacement; integrate |v| for total distance.",
          },
        ],
        keyFormulas: [
          { name: "Velocity", statement: "$v = \\int a\\,dt + c_1$" },
          { name: "Displacement", statement: "$s = \\int v\\,dt + c_2$" },
          {
            name: "SUVAT",
            statement: "$v=u+at,\\ s=ut+\\frac{1}{2}at^2,\\ v^2=u^2+2as$",
          },
        ],
        workedExample: {
          problem:
            "A particle has $a = 12t - 6$. Given $v(0)=0$ and $s(0)=0$, find v and s.",
          solution:
            "$v = \\int(12t-6)dt = 6t^2 - 6t$. $s = \\int(6t^2-6t)dt = 2t^3 - 3t^2$.",
        },
      },
      questions: [
        {
          id: "cial-m-u9-kin-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Acceleration is defined as...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{ds}{dt}$" },
              { id: "b", text: "Distance per unit time" },
              { id: "c", text: "$\\frac{dv}{dt}$" },
              { id: "d", text: "$\\frac{d^2s}{dt^2}$ only" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Acceleration",
                statement: "Rate of change of velocity: $a = dv/dt$.",
              },
            ],
            steps: [
              {
                reasoning: "$a = \\frac{dv}{dt} = \\frac{d^2s}{dt^2}$.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** $\\frac{dv}{dt}$",
            commonErrors: ["Confusing with velocity."],
          },
        },
        {
          id: "cial-m-u9-kin-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A particle has $a = 2t + 1$ and $v(0) = 3$. Find v(t).",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Kinematics",
                statement: "Integrate a; apply initial condition.",
              },
            ],
            steps: [
              {
                reasoning: "$v = \\int(2t+1)dt + c = t^2 + t + c$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$v(0)=3 \\Rightarrow c=3$; $v = t^2 + t + 3$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$v = t^2 + t + 3$",
            commonErrors: ["Forgetting initial condition."],
          },
        },
        {
          id: "cial-m-u9-kin-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A particle moves with $v = 3t^2 - 12t + 9$. Given s(0) = 0, find displacement at t = 3.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Kinematics",
                statement: "Integrate v to get s; evaluate at t=3.",
              },
            ],
            steps: [
              {
                reasoning: "$s = \\int(3t^2-12t+9)dt = t^3 - 6t^2 + 9t + c$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$s(0)=0 \\Rightarrow c=0$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$s(3) = 27 - 54 + 27 = 0$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Displacement = $0$ m.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$0$ m",
            commonErrors: ["Confusing displacement with distance."],
          },
        },
        {
          id: "cial-m-u9-kin-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Kinematics.",
          parts: [
            { label: "a", prompt: "Define acceleration.", marks: 1 },
            { label: "b", prompt: "How to get v from a?", marks: 2 },
            {
              label: "c",
              prompt: "a = 6t, v(0)=2, s(0)=0. Find v and s.",
              marks: 3,
            },
            {
              label: "d",
              prompt: "Find displacement at t=2 for the particle in (c).",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Kinematics",
                statement: "Definition+integration+application.",
              },
            ],
            steps: [
              { part: "a", reasoning: "$a = dv/dt$.", marks: 1, markCode: "M" },
              {
                part: "b",
                reasoning: "$v = \\int a\\,dt + c_1$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Constant from initial condition.",
                marks: 1,
                markCode: "A",
              },
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
                reasoning: "$s(2) = 8 + 4 = 12$.",
                marks: 1,
                markCode: "M",
              },
              { part: "d", reasoning: "12 m.", marks: 1, markCode: "M" },
              {
                part: "d",
                reasoning: "Units included.",
                marks: 1,
                markCode: "M",
              },
              { part: "d", reasoning: "Correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "(a) dv/dt (b) ∫a dt + c (c) v=3t²+2, s=t³+2t (d) 12 m",
          },
        },
        {
          id: "cial-m-u9-kin-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A particle has $a = 4t$ and $v(0) = 1$. What is $v(2)$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$5$ m/s" },
              { id: "b", text: "$9$ m/s" },
              { id: "c", text: "$17$ m/s" },
              { id: "d", text: "$3$ m/s" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Kinematics",
                statement: "Integrate a; apply v(0)=1.",
              },
            ],
            steps: [
              {
                reasoning: "$v = \\int 4t\\,dt + 1 = 2t^2 + 1$; $v(2) = 8 + 1 = 9$ m/s.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** $9$ m/s",
            commonErrors: ["Forgetting the constant from v(0)."],
          },
        },
        {
          id: "cial-m-u9-kin-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "A particle has $a = 3t^2$, $v(0) = -2$ and $s(0) = 0$. Find $v(2)$ and the positive value of $t$ at which $v = 0$.",
          response: {
            type: "numeric",
            parts: [
              { label: "v(2)", answer: 6 },
              { label: "t", answer: 1.26, tolerance: 0.01 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Kinematics",
                statement: "Integrate a; set v=0.",
              },
            ],
            steps: [
              {
                reasoning: "$v = \\int 3t^2\\,dt - 2 = t^3 - 2$; $v(2) = 8 - 2 = 6$ m/s.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$t^3 - 2 = 0 \\Rightarrow t = \\sqrt[3]{2} \\approx 1.26$ s.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$v(2) = 6$ m/s; $t \\approx 1.26$ s",
            commonErrors: ["Taking the negative cube root."],
          },
        },
        {
          id: "cial-m-u9-kin-q7",
          difficulty: "core",
          totalMarks: 4,
          stem: "A particle has velocity $v = 2t^2 - 8t + 6$ and $s(0) = 0$. Find the times at which the particle is instantaneously at rest and its displacement at each of those times.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Kinematics",
                statement: "Solve v=0; integrate v for s.",
              },
            ],
            steps: [
              {
                reasoning: "$v = 2(t-1)(t-3) = 0 \\Rightarrow t = 1$ or $t = 3$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$s = \\int(2t^2-8t+6)dt = \\frac{2}{3}t^3 - 4t^2 + 6t$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$s(1) = \\frac{2}{3} - 4 + 6 = \\frac{8}{3}$ m.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$s(3) = 18 - 36 + 18 = 0$ m.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Rest at $t = 1$ s ($s = \\frac{8}{3}$ m) and $t = 3$ s ($s = 0$ m)",
            commonErrors: ["Confusing displacement with distance travelled."],
          },
        },
        {
          id: "cial-m-u9-kin-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "The displacement of a particle is $s = t^3 - 3t^2 + 2$, where $t \\geq 0$. For what positive value of $t$ is the velocity zero?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$t = 2$" },
              { id: "b", text: "$t = 1$" },
              { id: "c", text: "$t = 0$" },
              { id: "d", text: "$t = 3$" },
            ],
            aorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Kinematics",
                statement: "v = ds/dt; solve v = 0.",
              },
            ],
            steps: [
              {
                reasoning: "$v = 3t^2 - 6t = 3t(t-2) = 0 \\Rightarrow t = 0$ or $t = 2$; positive nonzero value is $t = 2$.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(c)** $t = 2$",
            commonErrors: ["Answering t = 0 when a positive value is required."],
          },
        },
        {
          id: "cial-m-u9-kin-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A particle moves with velocity $v = 3t^2$. What is its acceleration when $t = 2$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$24$ m/s²" },
              { id: "b", text: "$12$ m/s²" },
              { id: "c", text: "$6$ m/s²" },
              { id: "d", text: "$36$ m/s²" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Acceleration",
                statement: "$a = dv/dt$.",
              },
            ],
            steps: [
              {
                reasoning: "$a = \\frac{d}{dt}(3t^2) = 6t$; $a(2) = 12$ m/s².",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** $12$ m/s²",
            commonErrors: ["Differentiating twice instead of once."],
          },
        },
        {
          id: "cial-m-u9-kin-q10",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A particle has velocity $v = t^2 - 4t + 3$ and $s(0) = 0$. Find the times at which it is instantaneously at rest, its displacement at each of those times, and state whether the particle returns to its starting point.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Kinematics",
                statement: "Solve v=0; integrate v for s.",
              },
            ],
            steps: [
              {
                reasoning: "$v = (t-1)(t-3) = 0 \\Rightarrow t = 1$ or $t = 3$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$s = \\int(t^2-4t+3)dt = \\frac{t^3}{3} - 2t^2 + 3t$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$s(1) = \\frac{1}{3} - 2 + 3 = \\frac{4}{3}$ m.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$s(3) = 9 - 18 + 9 = 0$ m, so the particle returns to the origin at $t = 3$ s.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Both rest times and displacements stated correctly.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Rest at $t=1$ s ($s=\\frac{4}{3}$ m) and $t=3$ s ($s=0$ m); returns to start at $t=3$ s",
            commonErrors: ["Stopping at finding v=0 without finding s."],
          },
        },
        {
          id: "cial-m-u9-kin-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "When a particle's velocity changes sign during its motion, the total distance travelled is best found by...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Using $v = u + at$ only" },
              { id: "b", text: "Integrating $v\\,dt$ over the whole interval" },
              { id: "c", text: "Integrating $|v|\\,dt$, or summing the magnitudes of the signed areas under the $v$–$t$ graph" },
              { id: "d", text: "Differentiating $s$ once" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Distance vs displacement",
                statement: "Distance = integral of |v|; displacement = integral of v.",
              },
            ],
            steps: [
              {
                reasoning: "Integrating $v$ gives displacement; where v changes sign, areas must be taken as positive to get distance.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(b)**",
            commonErrors: ["Giving displacement when distance is asked for."],
          },
        },
        {
          id: "cial-m-u9-kin-q12",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A particle starts from rest and has constant acceleration $a = 10$ m/s². Find $v(3)$ and $s(3)$.",
          response: {
            type: "numeric",
            parts: [
              { label: "v(3)", answer: 30, unit: "m/s" },
              { label: "s(3)", answer: 45, unit: "m" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "SUVAT",
                statement: "$v = u + at$, $s = ut + \\frac{1}{2}at^2$.",
              },
            ],
            steps: [
              {
                reasoning: "$v = 0 + 10(3) = 30$ m/s.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$s = 0 + \\frac{1}{2}(10)(9) = 45$ m.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$v(3) = 30$ m/s; $s(3) = 45$ m",
          },
        },
        {
          id: "cial-m-u9-kin-q13",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A particle has velocity $v = 18 - 2t^2$ and $s(0) = 0$. Find the positive time at which it is instantaneously at rest, its displacement at that time, and its displacement at $t = 1$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Kinematics",
                statement: "Solve v=0; integrate v for s.",
              },
            ],
            steps: [
              {
                reasoning: "$18 - 2t^2 = 0 \\Rightarrow t^2 = 9 \\Rightarrow t = 3$ s (positive).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$s = \\int(18-2t^2)dt = 18t - \\frac{2}{3}t^3$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$s(3) = 54 - 18 = 36$ m.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$s(1) = 18 - \\frac{2}{3} = \\frac{52}{3}$ m.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "All three values correct with units.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Rest at $t=3$ s, $s=36$ m; $s(1)=\\frac{52}{3}$ m",
            commonErrors: ["Forgetting to take the positive root only."],
          },
        },
        {
          id: "cial-m-u9-kin-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "In the kinematics relation $v = \\int a\\,dt + c$, the constant $c$ is determined by...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The final velocity" },
              { id: "b", text: "The initial displacement" },
              { id: "c", text: "The initial velocity" },
              { id: "d", text: "The acceleration at $t = 0$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Kinematics",
                statement: "Integration constant from initial condition.",
              },
            ],
            steps: [
              {
                reasoning: "Substituting $t = 0$ gives $c = v(0)$, the initial velocity.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(b)** The initial velocity",
            commonErrors: ["Confusing v(0) with s(0)."],
          },
        },
        {
          id: "cial-m-u9-kin-q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "A particle has displacement $s = t^3 - 6t^2 + 9t$ for $t \\geq 0$. Find the two positive times at which its velocity is zero.",
          response: {
            type: "numeric",
            unordered: true,
            parts: [
              { label: "t1", answer: 1 },
              { label: "t2", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Kinematics",
                statement: "$v = ds/dt$; solve $v = 0$.",
              },
            ],
            steps: [
              {
                reasoning: "$v = 3t^2 - 12t + 9 = 3(t-1)(t-3)$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$v = 0 \\Rightarrow t = 1$ or $t = 3$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$t = 1$ s and $t = 3$ s",
            commonErrors: ["Expanding instead of factorising v."],
          },
        },
        {
          id: "cial-m-u9-kin-q16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A particle has acceleration $a = 24t - 6$, with $v(0) = 0$ and $s(0) = 0$. Find $v$ and $s$, the times at which the particle is instantaneously at rest, and its velocity when $t = 2$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Kinematics",
                statement: "Integrate a twice; solve v=0.",
              },
            ],
            steps: [
              {
                reasoning: "$v = \\int(24t-6)dt = 12t^2 - 6t$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$s = \\int(12t^2-6t)dt = 4t^3 - 3t^2$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$12t^2 - 6t = 6t(2t-1) = 0 \\Rightarrow t = 0$ or $t = \\frac{1}{2}$ s.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Rest (other than start) at $t = \\frac{1}{2}$ s.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$v(2) = 48 - 12 = 36$ m/s.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "$v = 12t^2 - 6t$, $s = 4t^3 - 3t^2$; rest at $t=\\frac{1}{2}$ s; $v(2) = 36$ m/s",
            commonErrors: ["Dropping the t = 0 solution without comment."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cial-m-u9-kinematics-notes",
      title: "Kinematics — revision notes",
      summary: "Calculus approach to kinematics.",
      sections: [
        { heading: "Kinematics", body: "$a=dv/dt$, $v=ds/dt$. Integrate a→v→s with constants from initial conditions. SUVAT for constant acceleration." },
        { heading: "Exam checklist", body: "Find intersections before area. Check which curve is on top. Include units. Use initial conditions for constants." },
      ],
    },
  ],
};
