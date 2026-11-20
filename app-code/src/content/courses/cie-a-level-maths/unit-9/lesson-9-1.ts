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
              { id: "a", text: "$\\frac{dv}{dt}$" },
              { id: "b", text: "$\\frac{ds}{dt}$" },
              { id: "c", text: "$\\frac{d^2s}{dt^2}$ only" },
              { id: "d", text: "Distance per unit time" },
            ],
            correctChoiceId: "a",
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
