import type { Lesson } from "../../../types.ts";

export const lesson92: Lesson = {
  id: "cial-m-u9-lesson-9-2",
  code: "9-2",
  title: "SUVAT and Motion Graphs",
  goal: "I CAN solve constant-acceleration problems using SUVAT equations and interpret motion graphs.",
  standards: ["Cambridge A Level Mathematics 9709: kinematics"],
  vocabulary: [
    { term: "SUVAT", definition: "Equations for motion with constant acceleration." },
    { term: "Displacement", definition: "Change in position s, in metres." },
    { term: "Velocity", definition: "Rate of change of displacement, v." },
    { term: "Acceleration", definition: "Rate of change of velocity, a." },
    { term: "Motion graph", definition: "Graph of s, v or a against t; gradient and area give kinematics." },
  ],
  concepts: [
    {
      id: "cial-m-u9-suvat",
      title: "SUVAT equations",
      skill: "Apply the five constant-acceleration equations.",
      lesson: {
        sections: [
          {
            heading: "The five equations",
            body: "For constant acceleration a: $v = u + at$; $s = ut + \\frac{1}{2}at^2$; $v^2 = u^2 + 2as$; $s = \\frac{(u+v)}{2}t$; $s = vt - \\frac{1}{2}at^2$. Choose the equation containing your three knowns and one unknown — no time needed for $v^2=u^2+2as$.",
          },
          {
            heading: "Motion graphs",
            body: "s–t graph: gradient = velocity. v–t graph: gradient = acceleration, area = displacement. a–t graph: area = change in velocity. Instantaneous values come from gradients; totals from areas.",
          },
        ],
        keyFormulas: [
          { name: "v = u + at", statement: "$v = u + at$" },
          { name: "v² = u² + 2as", statement: "$v^2 = u^2 + 2as$" },
          { name: "s formula", statement: "$s = \\frac{u+v}{2}t$" },
        ],
        workedExample: {
          problem: "A car accelerates from rest at 2 m/s² for 5 s. Find final velocity and distance.",
          solution: "$v = 0 + 2(5) = 10$ m/s. $s = \\frac{0+10}{2}(5) = 25$ m.",
        },
      },
      questions: [
        {
          id: "cial-m-u9-sv-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A particle has u = 3 m/s, a = 2 m/s², t = 4 s. Find v.",
          response: { type: "mcq", choices: [
            { id: "a", text: "11 m/s" }, { id: "b", text: "8 m/s" }, { id: "c", text: "14 m/s" }, { id: "d", text: "5 m/s" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "formula", name: "v = u + at", statement: "Direct substitution." }],
            steps: [{ reasoning: "$v = 3 + 2(4) = 11$ m/s.", marks: 1, markCode: "A" }],
            finalAnswer: "11 m/s",
          },
        },
        {
          id: "cial-m-u9-sv-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A ball is dropped from rest (u=0) with a = 9.8 m/s². Find its speed after 2 s.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "v = u + at", statement: "u=0, t=2." }],
            steps: [
              { reasoning: "$v = 0 + 9.8(2) = 19.6$ m/s.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 19.6 m/s.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "19.6 m/s",
          },
        },
        {
          id: "cial-m-u9-sv-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "A car travels at constant 20 m/s then decelerates at 4 m/s² to rest. Find the stopping distance during deceleration.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "v² = u² + 2as", statement: "v=0, u=20, a=−4." }],
            steps: [
              { reasoning: "$0 = 400 + 2(-4)s$.", marks: 1, markCode: "M" },
              { reasoning: "$8s = 400 \\Rightarrow s = 50$ m.", marks: 1, markCode: "M" },
              { reasoning: "Correct substitution of a = −4.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 50 m.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "50 m",
          },
        },
        {
          id: "cial-m-u9-sv-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "On a v–t graph, a particle's velocity increases linearly from 0 to 10 m/s in 4 s then stays constant for 6 s. Find total displacement.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Area under v–t", statement: "Displacement = area." }],
            steps: [
              { reasoning: "First 4 s: triangle area $= \\frac{1}{2}(4)(10) = 20$ m.", marks: 1, markCode: "M" },
              { reasoning: "Next 6 s: rectangle $= 6 \\times 10 = 60$ m.", marks: 1, markCode: "M" },
              { reasoning: "Total $= 20 + 60$.", marks: 1, markCode: "M" },
              { reasoning: "$= 80$ m.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 80 m.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "80 m",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cial-m-u9-suvat-notes",
      title: "SUVAT — revision notes",
      summary: "Five equations; graphs give gradient/area relations.",
      sections: [
        { heading: "SUVAT", body: "$v=u+at$; $s=\\frac{u+v}{2}t$; $v^2=u^2+2as$; $s=ut+\\frac12at^2$. Pick the one with 3 knowns + 1 unknown." },
        { heading: "Graphs", body: "s–t gradient = v; v–t gradient = a, area = s; a–t area = Δv." },
      ],
    },
  ],
};
