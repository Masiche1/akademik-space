import type { Lesson } from "../../../types.ts";

export const lesson71: Lesson = {
  id: "cialfm-u7-lesson-7-1",
  code: "7-1",
  title: "Kinematics and Projectiles",
  goal: "I CAN solve constant-acceleration and projectile problems.",
  standards: ["Cambridge A Level Further Mathematics 9231 Paper 4: Mechanics"],
  vocabulary: [
    { term: "SUVAT", definition: "The five constant-acceleration variables s, u, v, a, t." },
    { term: "Projectile", definition: "Object moving under gravity alone after projection." },
    { term: "Range", definition: "Horizontal distance travelled by a projectile." },
    { term: "Time of flight", definition: "Total time a projectile is airborne." },
  ],
  concepts: [
    {
      id: "cialfm-u7-s1-kinematics",
      title: "Constant acceleration and projectiles",
      skill: "Apply SUVAT equations and resolve projectile motion into components.",
      lesson: {
        sections: [
          {
            heading: "Constant acceleration",
            body: "When acceleration is constant, the five SUVAT equations link displacement, initial velocity, final velocity, acceleration and time. Choose equations that contain your knowns and the unknown; eliminate the unwanted variable.",
          },
          {
            heading: "Projectiles",
            body: "Resolve the initial velocity into horizontal and vertical components. Horizontally, acceleration is zero so $x = u_x t$. Vertically, $a = -g$, giving $y = u_y t - \\tfrac{1}{2}gt^2$ and $v_y = u_y - gt$. Time of flight comes from $y = 0$; range from $x$ at that time.",
          },
        ],
        keyFormulas: [
          { name: "SUVAT", statement: "$v=u+at,\\ s=ut+\\tfrac12at^2,\\ v^2=u^2+2as$" },
          { name: "Projectile", statement: "$x=u_x t,\\ y=u_y t-\\tfrac12 gt^2$" },
        ],
        workedExample: {
          problem: "A ball is projected at 20 m/s at 30° to the horizontal. Find its time of flight (g = 9.8).",
          solution: "$u_y = 20\\sin30° = 10$. Flight time: $0 = 10t - 4.9t^2 \\Rightarrow t = 10/4.9 \\approx 2.04$ s.",
        },
      },
      questions: [
        {
          id: "cialfm-u7-k-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which quantity is NOT one of the SUVAT variables?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Force" }, { id: "b", text: "Displacement" }, { id: "c", text: "Acceleration" }, { id: "d", text: "Time" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "SUVAT", statement: "s, u, v, a, t only." }],
            steps: [{ reasoning: "Force is not a kinematic variable.", marks: 1, markCode: "A" }],
            finalAnswer: "Force",
          },
        },
        {
          id: "cialfm-u7-k-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A car accelerates uniformly from 10 m/s to 30 m/s in 5 s. Find its acceleration.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "v = u + at", statement: "Solve for a." }],
            steps: [
              { reasoning: "$a = (v-u)/t = (30-10)/5 = 4$ m/s².", marks: 1, markCode: "M" },
              { reasoning: "Answer: 4 m/s².", marks: 1, markCode: "A" },
            ],
            finalAnswer: "4 m/s²",
          },
        },
        {
          id: "cialfm-u7-k-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "A stone is projected horizontally at 15 m/s from a cliff 45 m high. Find the time to reach the ground (g = 9.8).",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Vertical motion", statement: "Use vertical SUVAT only." }],
            steps: [
              { reasoning: "Vertical: $u_y = 0$, $y = -45$, $a = -9.8$.", marks: 1, markCode: "M" },
              { reasoning: "$-45 = -4.9t^2$.", marks: 1, markCode: "M" },
              { reasoning: "$t^2 = 45/4.9 \\approx 9.18$, $t \\approx 3.03$ s.", marks: 1, markCode: "M" },
              { reasoning: "Answer stated.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "3.03 s",
          },
        },
        {
          id: "cialfm-u7-k-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A projectile is launched at 25 m/s at 40° to the horizontal. Find its range (g = 9.8).",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Range", statement: "Range $= u_x \\times$ flight time." }],
            steps: [
              { reasoning: "$u_x = 25\\cos40° \\approx 19.15$, $u_y = 25\\sin40° \\approx 16.07$.", marks: 1, markCode: "M" },
              { reasoning: "Flight: $t = 2u_y/g \\approx 32.14/9.8 \\approx 3.28$ s.", marks: 1, markCode: "M" },
              { reasoning: "Range $= 19.15 \\times 3.28 \\approx 62.8$ m.", marks: 1, markCode: "M" },
              { reasoning: "Or use $R = u^2\\sin 2\\theta/g$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: ≈ 62.8 m.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "≈ 62.8 m",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cialfm-u7-k-notes",
      title: "Kinematics — revision notes",
      summary: "SUVAT selection and projectile components.",
      sections: [
        { heading: "SUVAT", body: "Pick equations containing knowns + unknown only; eliminate the rest." },
        { heading: "Projectiles", body: "$x = u_x t$ (no acceleration); vertical uses $a = -g$; flight time from $y=0$." },
      ],
    },
  ],
};
