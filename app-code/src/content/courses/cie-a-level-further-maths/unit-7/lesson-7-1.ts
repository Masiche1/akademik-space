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
            { id: "a", text: "Time" },
            { id: "b", text: "Force" },
            { id: "c", text: "Acceleration" },
            { id: "d", text: "Displacement" },
          ], correctChoiceId: "b" },
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
        {
          id: "cialfm-u7-k-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which SUVAT equation links final velocity $v$, initial velocity $u$, acceleration $a$ and time $t$?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$v = u + at$" },
            { id: "b", text: "$v^2 = u^2 + 2as$" },
            { id: "c", text: "$s = ut$" },
            { id: "d", text: "$F = ma$" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "formula", name: "SUVAT", statement: "$v=u+at$ uses v, u, a, t." }],
            steps: [{ reasoning: "Only $v=u+at$ contains all four variables v, u, a and t.", marks: 1, markCode: "A" }],
            finalAnswer: "$v = u + at$",
          },
        },
        {
          id: "cialfm-u7-k-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A cyclist accelerates uniformly from 4 m/s to 16 m/s in 6 s. Find the distance travelled.",
          response: { type: "numeric", parts: [{ label: "a", answer: 60 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Average velocity", statement: "$s = \\tfrac{u+v}{2}\\,t$ for constant acceleration." }],
            steps: [
              { reasoning: "$s = \\frac{4+16}{2} \\times 6 = 10 \\times 6 = 60$ m.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 60 m.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "60 m",
          },
        },
        {
          id: "cialfm-u7-k-q7",
          difficulty: "core",
          totalMarks: 3,
          stem: "A ball is projected at 20 m/s at 30° to the horizontal. Find its time of flight (g = 9.8).",
          response: { type: "numeric", parts: [{ label: "a", answer: 2.04, tolerance: 0.01 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Flight time", statement: "$t = 2u_y/g$ when launch and landing heights are equal." }],
            steps: [
              { reasoning: "$u_y = 20\\sin30° = 10$ m/s.", marks: 1, markCode: "M" },
              { reasoning: "$t = 2 \\times 10/9.8 \\approx 2.04$ s.", marks: 1, markCode: "M" },
              { reasoning: "Answer: ≈ 2.04 s.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "≈ 2.04 s",
          },
        },
        {
          id: "cialfm-u7-k-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "For a projectile moving under gravity alone, which component of velocity remains constant?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Neither" },
            { id: "b", text: "Horizontal" },
            { id: "c", text: "Both" },
            { id: "d", text: "Vertical" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "principle", name: "Projectile motion", statement: "Horizontal acceleration is zero." }],
            steps: [{ reasoning: "Horizontally $a_x = 0$, so $u_x$ is constant; vertically $a_y = -g$.", marks: 1, markCode: "A" }],
            finalAnswer: "Horizontal",
          },
        },
        {
          id: "cialfm-u7-k-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "A projectile is launched at 20 m/s at 60° to the horizontal. Find its maximum height (g = 9.8).",
          response: { type: "numeric", parts: [{ label: "a", answer: 15.31, tolerance: 0.01 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Maximum height", statement: "$h = u_y^2/(2g)$ where $v_y = 0$." }],
            steps: [
              { reasoning: "$u_y = 20\\sin60° \\approx 17.32$ m/s.", marks: 1, markCode: "M" },
              { reasoning: "$h = 17.32^2/(2 \\times 9.8) = 300/19.6 \\approx 15.31$ m.", marks: 1, markCode: "M" },
              { reasoning: "Answer: ≈ 15.31 m.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "≈ 15.31 m",
          },
        },
        {
          id: "cialfm-u7-k-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "A train travelling at 24 m/s decelerates uniformly to rest in 40 s. Find the distance travelled while stopping.",
          response: { type: "numeric", parts: [{ label: "a", answer: 480 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Displacement", statement: "$s = \\tfrac{u+v}{2}\\,t$ for constant acceleration." }],
            steps: [
              { reasoning: "$s = \\frac{24+0}{2} \\times 40 = 480$ m.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 480 m.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "480 m",
          },
        },
        {
          id: "cialfm-u7-k-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A projectile is launched and lands at the same height. Its time of flight is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$2u_y/g$" },
            { id: "b", text: "$2u_x/g$" },
            { id: "c", text: "$u_x/g$" },
            { id: "d", text: "$u_y/g$" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "technique", name: "Flight time", statement: "Zero vertical displacement at landing." }],
            steps: [{ reasoning: "$0 = u_y t - \\tfrac12 gt^2$ gives $t = 2u_y/g$ (non-zero root).", marks: 1, markCode: "A" }],
            finalAnswer: "$2u_y/g$",
          },
        },
        {
          id: "cialfm-u7-k-q12",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A projectile is launched at 25 m/s at 60° to the horizontal. Find (a) its time of flight and (b) its range (g = 9.8).",
          response: { type: "numeric", parts: [
            { label: "a", answer: 4.42, tolerance: 0.01 },
            { label: "b", answer: 55.23, tolerance: 0.01 },
          ] },
          markscheme: {
            principles: [{ kind: "technique", name: "Range", statement: "Range $= u_x \\times$ flight time." }],
            steps: [
              { reasoning: "$u_x = 25\\cos60° = 12.5$, $u_y = 25\\sin60° \\approx 21.65$ m/s.", marks: 1, markCode: "M" },
              { reasoning: "Flight time $t = 2u_y/g \\approx 43.3/9.8 \\approx 4.42$ s.", marks: 1, markCode: "M" },
              { reasoning: "Range $R = u_x t = 12.5 \\times 4.42 \\approx 55.23$ m.", marks: 1, markCode: "M" },
              { reasoning: "Answers: (a) ≈ 4.42 s, (b) ≈ 55.23 m.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) ≈ 4.42 s; (b) ≈ 55.23 m",
          },
        },
        {
          id: "cialfm-u7-k-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A stone is thrown vertically upwards at 15 m/s (g = 9.8). Find the time at which it returns to the thrower's hand and its velocity at that instant.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Vertical SUVAT", statement: "Return means displacement is zero." }],
            steps: [
              { reasoning: "At return, displacement = 0 and velocity is downwards.", marks: 1, markCode: "M" },
              { reasoning: "$0 = 15t - 4.9t^2 \\Rightarrow t(15 - 4.9t) = 0$.", marks: 1, markCode: "M" },
              { reasoning: "Non-zero solution $t = 15/4.9 \\approx 3.06$ s; $v = 15 - 9.8(3.06) \\approx -15$ m/s.", marks: 1, markCode: "M" },
              { reasoning: "Answer: t ≈ 3.06 s and v ≈ 15 m/s vertically downwards.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$t \\approx 3.06$ s; $v \\approx 15$ m/s downwards",
          },
        },
        {
          id: "cialfm-u7-k-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "For a projectile in flight (no air resistance), the horizontal acceleration is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$-g$" },
            { id: "b", text: "equal to the vertical acceleration" },
            { id: "c", text: "$g$" },
            { id: "d", text: "zero" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "principle", name: "Projectile motion", statement: "Only gravity acts, vertically." }],
            steps: [{ reasoning: "No horizontal force ⇒ $a_x = 0$.", marks: 1, markCode: "A" }],
            finalAnswer: "zero",
          },
        },
        {
          id: "cialfm-u7-k-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "A ball is thrown vertically upwards at 12 m/s (g = 9.8). How long does it take to reach its maximum height?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$2u \\approx 24$ s" },
            { id: "b", text: "$u/g \\approx 1.22$ s" },
            { id: "c", text: "$u/(2g) \\approx 0.61$ s" },
            { id: "d", text: "$2u/g \\approx 2.45$ s" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "technique", name: "Maximum height", statement: "$v = 0$ at the top." }],
            steps: [{ reasoning: "$0 = u - gt \\Rightarrow t = u/g = 12/9.8 \\approx 1.22$ s.", marks: 1, markCode: "A" }],
            finalAnswer: "$u/g \\approx 1.22$ s",
          },
        },
        {
          id: "cialfm-u7-k-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A particle moves with constant acceleration along a straight line. It passes a point A with speed 8 m/s and, 45 m further on, point B with speed 14 m/s. Find the acceleration.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "v² = u² + 2as", statement: "Use the equation without time." }],
            steps: [
              { reasoning: "Apply $v^2 = u^2 + 2as$ with $u = 8$, $v = 14$, $s = 45$.", marks: 1, markCode: "M" },
              { reasoning: "$196 = 64 + 90a \\Rightarrow 90a = 132$.", marks: 1, markCode: "M" },
              { reasoning: "$a = 132/90 \\approx 1.47$ m/s².", marks: 1, markCode: "M" },
              { reasoning: "Answer: ≈ 1.47 m/s².", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$a \\approx 1.47$ m/s²",
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
