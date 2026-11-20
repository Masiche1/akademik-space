import type { Lesson } from "../../../types.ts";

export const lesson111: Lesson = {
  id: "cial-p-u1-lesson-1-1",
  code: "1-1",
  title: "Kinematics",
  goal: "I CAN use suvat equations and interpret motion graphs.",
  standards: ["9702 2: kinematics"],
  vocabulary: [
    { term: "Displacement", definition: "Distance in a stated direction — vector." },
    { term: "Velocity", definition: "Rate of change of displacement — $v = s/t$." },
    { term: "Acceleration", definition: "Rate of change of velocity — $a = v/t$." },
    { term: "Uniform acceleration", definition: "Constant acceleration — suvat equations apply." },
    { term: "Projectile", definition: "Object moving under gravity only after launch." },
  ],
  concepts: [
    {
      id: "cial-p-u1-suvat",
      title: "SUVAT equations",
      skill: "Select and apply the correct kinematic equation.",
      lesson: {
        sections: [
          {
            heading: "The five equations",
            body: "For uniform acceleration: $v = u + at$, $s = ut + \\frac{1}{2}at^2$, $v^2 = u^2 + 2as$, $s = \\frac{u+v}{2}t$, $s = vt - \\frac{1}{2}at^2$. Choose based on which variables are known/given. SI units throughout.",
          },
          {
            heading: "Free fall and projectiles",
            body: "Free fall: $a = g = 9.81\\ m\\ s^{-2}$ downward, $u$ may be zero. Projectiles: horizontal motion constant velocity, vertical motion uniform acceleration $g$ — solve separately then combine. Time of flight depends only on vertical component.",
          },
          {
            heading: "Graph interpretation",
            body: "Displacement–time: gradient = velocity. Velocity–time: gradient = acceleration, area = displacement. Acceleration–time: area = change in velocity. Curved lines indicate changing acceleration — suvat no longer applies.",
          },
        ],
        keyFormulas: [
          { name: "SUVAT", statement: "$v=u+at;\\ s=ut+\\tfrac12 at^2;\\ v^2=u^2+2as$" },
          { name: "g", statement: "$g = 9.81\\ m\\ s^{-2}$ downward" },
        ],
        workedExample: {
          problem: "A car accelerates from rest at $2\\ m\\ s^{-2}$ for 10 s. Find final velocity and distance.",
          solution: "$v = 0 + 2 \\times 10 = 20\\ m\\ s^{-1}$. $s = \\frac{1}{2} \\times 2 \\times 10^2 = 100\\ m$.",
        },
      },
      questions: [
        {
          id: "cial-p-u1-sk-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A ball is dropped from rest. What is its acceleration?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$9.81\\ m\\ s^{-2}$ downward" },
              { id: "b", text: "$9.81\\ m\\ s^{-2}$ upward" },
              { id: "c", text: "Zero" },
              { id: "d", text: "$1\\ m\\ s^{-2}$ downward" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "law", name: "Free fall", statement: "All objects accelerate at g = 9.81 m/s² downward." }],
            steps: [{ reasoning: "Dropped ball accelerates downward at g.", marks: 1, markCode: "A" }],
            finalAnswer: "$9.81\\ m\\ s^{-2}$ downward",
          },
        },
        {
          id: "cial-p-u1-sk-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A car travels at constant $20\\ m\\ s^{-1}$ for 5 s, then accelerates at $2\\ m\\ s^{-2}$ for 4 s. Calculate total displacement.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "law", name: "Kinematics", statement: "s = vt for constant velocity; suvat for acceleration." }],
            steps: [
              { reasoning: "First stage: $s_1 = 20 \\times 5 = 100\\ m$.", marks: 1, markCode: "M" },
              { reasoning: "Second stage: $s_2 = ut + \\frac12 at^2 = 20(4) + \\frac12(2)(16) = 96\\ m$.", marks: 1, markCode: "M" },
              { reasoning: "Total $= 100 + 96 = 196\\ m$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$196\\ m$",
          },
        },
        {
          id: "cial-p-u1-sk-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A projectile is launched at $20\\ m\\ s^{-1}$ at $30°$ to the horizontal. Find its initial horizontal and vertical velocity components.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Resolution", statement: "$v_x = v\\cos\\theta$, $v_y = v\\sin\\theta$." }],
            steps: [
              { reasoning: "$v_x = 20\\cos 30° = 17.3\\ m\\ s^{-1}$.", marks: 1, markCode: "M" },
              { reasoning: "$v_y = 20\\sin 30° = 10\\ m\\ s^{-1}$.", marks: 1, markCode: "M" },
              { reasoning: "Both components correct.", marks: 1, markCode: "A" },
              { reasoning: "Horizontal constant, vertical affected by g.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "$v_x = 17.3$, $v_y = 10\\ m\\ s^{-1}$",
          },
        },
        {
          id: "cial-p-u1-sk-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Kinematics.",
          parts: [
            { label: "a", prompt: "State the three SUVAT equations.", marks: 3 },
            { label: "b", prompt: "A stone falls from a cliff. Given $u = 0$, find $s$ after 3 s ($g = 9.81$).", marks: 2 },
            { label: "c", prompt: "What does the gradient of a velocity–time graph represent?", marks: 1 },
            { label: "d", prompt: "A projectile's horizontal velocity is constant. Why?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "law", name: "Kinematics", statement: "SUVAT applies to uniform acceleration only." }],
            steps: [
              { part: "a", reasoning: "$v = u+at;\\ s = ut + \\frac12 at^2;\\ v^2 = u^2 + 2as$.", marks: 3, markCode: "A" },
              { part: "b", reasoning: "$s = \\frac12 \\times 9.81 \\times 9 = 44.1\\ m$.", marks: 2, markCode: "M" },
              { part: "c", reasoning: "Acceleration.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "No horizontal force acts after launch.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Newton's first law — constant velocity.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Only gravity acts (vertically).", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) 3 equations (b) 44.1 m (c) acceleration (d) no horizontal force",
          },
        },
        {
          id: "cial-p-u1-sk-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A car accelerates uniformly from $5\\ m\\ s^{-1}$ to $15\\ m\\ s^{-1}$ in 4 s. What is its acceleration?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$2.5\\ m\\ s^{-2}$" },
              { id: "b", text: "$3.75\\ m\\ s^{-2}$" },
              { id: "c", text: "$10\\ m\\ s^{-2}$" },
              { id: "d", text: "$40\\ m\\ s^{-2}$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "law", name: "SUVAT", statement: "$a = (v-u)/t$ for uniform acceleration." }],
            steps: [{ reasoning: "$a = (15-5)/4 = 2.5\\ m\\ s^{-2}$.", marks: 1, markCode: "A" }],
            finalAnswer: "$2.5\\ m\\ s^{-2}$",
          },
        },
        {
          id: "cial-p-u1-sk-q6",
          difficulty: "core",
          totalMarks: 3,
          stem: "A train decelerates uniformly from $30\\ m\\ s^{-1}$ to rest in 12 s. Calculate the stopping distance.",
          response: { type: "numeric", parts: [{ label: "stopping distance", answer: 180, unit: "m" }] },
          markscheme: {
            principles: [{ kind: "technique", name: "SUVAT", statement: "$s = \\frac{(u+v)}{2}t$." }],
            steps: [
              { reasoning: "Use average velocity: $s = \\frac{(30+0)}{2} \\times 12$.", marks: 1, markCode: "M" },
              { reasoning: "$s = 15 \\times 12 = 180\\ m$.", marks: 1, markCode: "M" },
              { reasoning: "Distance = 180 m in direction of travel.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$s = 180\\ m$",
          },
        },
        {
          id: "cial-p-u1-sk-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "A ball is thrown vertically upward at $12\\ m\\ s^{-1}$. Calculate the time taken to reach its maximum height. Take $g = 9.81\\ m\\ s^{-2}$.",
          response: { type: "numeric", parts: [{ label: "time", answer: 1.22, unit: "s", tolerance: 0.01 }] },
          markscheme: {
            principles: [{ kind: "law", name: "SUVAT", statement: "At maximum height $v=0$; $v=u+at$." }],
            steps: [
              { reasoning: "$0 = 12 - 9.81t$ → $t = 12/9.81$.", marks: 1, markCode: "M" },
              { reasoning: "$t = 1.22\\ s$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$t = 1.22\\ s$",
          },
        },
        {
          id: "cial-p-u1-sk-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which SUVAT equation relates $v$, $u$, $a$ and $s$ but not $t$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$v^2 = u^2 + 2as$" },
              { id: "b", text: "$v = u + at$" },
              { id: "c", text: "$s = ut + \\frac{1}{2}at^2$" },
              { id: "d", text: "$s = \\frac{u+v}{2}t$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "SUVAT", statement: "$v^2=u^2+2as$ has no $t$." }],
            steps: [{ reasoning: "Only $v^2=u^2+2as$ excludes time.", marks: 1, markCode: "A" }],
            finalAnswer: "$v^2 = u^2 + 2as$",
          },
        },
        {
          id: "cial-p-u1-sk-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "A projectile is launched at $20\\ m\\ s^{-1}$ at $45°$ above the horizontal. Calculate the time of flight. Take $g = 9.81\\ m\\ s^{-2}$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Projectiles", statement: "Vertical motion only determines time of flight: $t = 2u_y/g$." }],
            steps: [
              { reasoning: "$u_y = 20\\sin 45° = 14.1\\ m\\ s^{-1}$.", marks: 1, markCode: "M" },
              { reasoning: "$t = 2 \\times 14.1/9.81 = 2.88\\ s$.", marks: 1, markCode: "M" },
              { reasoning: "Time of flight = 2.88 s.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$t = 2.88\\ s$",
          },
        },
        {
          id: "cial-p-u1-sk-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "An object falls from rest under gravity. Calculate how far it falls during the third second of its motion. Take $g = 9.81\\ m\\ s^{-2}$.",
          response: { type: "numeric", parts: [{ label: "distance fallen in third second", answer: 24.5, unit: "m", tolerance: 0.05 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Free fall", statement: "$s = \\frac12 gt^2$; distance in nth second = $s(n)-s(n-1)$." }],
            steps: [
              { reasoning: "Distance in 3 s: $\\frac12 \\times 9.81 \\times 9 = 44.1\\ m$; in 2 s: $19.6\\ m$.", marks: 1, markCode: "M" },
              { reasoning: "Third second distance $= 44.1 - 19.6 = 24.5\\ m$.", marks: 1, markCode: "M" },
              { reasoning: "Answer 24.5 m.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$24.5\\ m$",
          },
        },
        {
          id: "cial-p-u1-sk-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "On a velocity–time graph, a horizontal straight line represents:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Constant velocity (zero acceleration)" },
              { id: "b", text: "Uniform acceleration" },
              { id: "c", text: "A stationary object" },
              { id: "d", text: "Deceleration" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "v–t graph", statement: "Horizontal line = constant v = zero acceleration." }],
            steps: [{ reasoning: "Zero gradient → zero acceleration → constant velocity.", marks: 1, markCode: "A" }],
            finalAnswer: "Constant velocity",
          },
        },
        {
          id: "cial-p-u1-sk-q12",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A car travels 100 m at a steady $20\\ m\\ s^{-1}$ and then 100 m at a steady $10\\ m\\ s^{-1}$. Calculate the average speed for the whole journey.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Average speed", statement: "$v_{avg} = \\text{total distance}/\\text{total time}$." }],
            steps: [
              { reasoning: "Times: $t_1 = 100/20 = 5\\ s$, $t_2 = 100/10 = 10\\ s$; total $t = 15\\ s$.", marks: 1, markCode: "M" },
              { reasoning: "Total distance = 200 m.", marks: 1, markCode: "M" },
              { reasoning: "$v_{avg} = 200/15 = 13.3\\ m\\ s^{-1}$.", marks: 1, markCode: "M" },
              { reasoning: "Average speed = 13.3 m/s (not 15 m/s — time-weighted).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$v_{avg} = 13.3\\ m\\ s^{-1}$",
          },
        },
        {
          id: "cial-p-u1-sk-q13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of the following is a vector quantity?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Displacement" },
              { id: "b", text: "Distance" },
              { id: "c", text: "Speed" },
              { id: "d", text: "Time" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Vectors", statement: "Vectors have magnitude and direction." }],
            steps: [{ reasoning: "Displacement has direction; the others are scalars.", marks: 1, markCode: "A" }],
            finalAnswer: "Displacement",
          },
        },
        {
          id: "cial-p-u1-sk-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "A cyclist accelerates uniformly from rest at $1.5\\ m\\ s^{-2}$ for 8 s and then continues at constant velocity for 4 s. Calculate the total distance travelled.",
          response: { type: "numeric", parts: [{ label: "total distance", answer: 96, unit: "m" }] },
          markscheme: {
            principles: [{ kind: "technique", name: "SUVAT", statement: "$s = ut + \\frac12 at^2$; then $s = vt$." }],
            steps: [
              { reasoning: "First stage: $s_1 = \\frac12 \\times 1.5 \\times 64 = 48\\ m$; velocity reached $v = 1.5 \\times 8 = 12\\ m\\ s^{-1}$.", marks: 1, markCode: "M" },
              { reasoning: "Second stage: $s_2 = 12 \\times 4 = 48\\ m$.", marks: 1, markCode: "M" },
              { reasoning: "Total $= 48 + 48 = 96\\ m$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$s = 96\\ m$",
          },
        },
        {
          id: "cial-p-u1-sk-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain why the horizontal velocity of a projectile remains constant throughout its flight when air resistance is neglected.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "law", name: "Newton's first law", statement: "No horizontal force → constant horizontal velocity." }],
            steps: [
              { reasoning: "After launch, no horizontal force acts on the projectile.", marks: 1, markCode: "M" },
              { reasoning: "By Newton's first law the horizontal velocity stays constant.", marks: 1, markCode: "M" },
              { reasoning: "Only gravity acts, and it is vertical.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "No horizontal force → constant horizontal velocity",
          },
        },
        {
          id: "cial-p-u1-sk-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Kinematics — extended question.",
          parts: [
            { label: "a", prompt: "State two of the SUVAT equations.", marks: 2 },
            { label: "b", prompt: "A stone is dropped from a cliff 20 m high. Calculate the time taken to reach the ground. Take $g = 9.81\\ m\\ s^{-2}$.", marks: 3 },
            { label: "c", prompt: "State what the area under a velocity–time graph represents.", marks: 1 },
            { label: "d", prompt: "A car accelerates uniformly from rest to $30\\ m\\ s^{-1}$ in 6 s. Calculate the distance travelled.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "law", name: "Kinematics", statement: "SUVAT applies to uniform acceleration only." }],
            steps: [
              { part: "a", reasoning: "Any two of $v=u+at$; $s=ut+\\frac12at^2$; $v^2=u^2+2as$.", marks: 2, markCode: "A" },
              { part: "b", reasoning: "$s=\\frac12gt^2$ → $t=\\sqrt{2s/g}=\\sqrt{40/9.81}$.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "$t=2.02\\ s$.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Time = 2.02 s.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Displacement.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Acceleration $a = 30/6 = 5\\ m\\ s^{-2}$.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "$s = \\frac12 \\times 5 \\times 36 = 90\\ m$.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Distance = 90 m.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) two equations (b) 2.02 s (c) displacement (d) 90 m",
          },
        },
      ],
    },
    {
      id: "cial-p-u1-graphs",
      title: "Motion graphs",
      skill: "Interpret displacement, velocity and acceleration graphs including areas and gradients.",
      lesson: {
        sections: [
          {
            heading: "Gradient and area",
            body: "s–t graph: gradient = velocity, flat = stationary. v–t graph: gradient = acceleration, area under = displacement. a–t graph: area = change in velocity. Curved v–t → changing acceleration.",
          },
          {
            heading: "Common shapes",
            body: "Constant velocity: straight line on s–t, horizontal line on v–t. Uniform acceleration: curve on s–t, straight line on v–t. Stationary: horizontal line on s–t, zero on v–t. Negative slope = deceleration or backward motion.",
          },
          {
            heading: "Reading graphs",
            body: "For displacement from v–t: calculate area (rectangle + triangle). For acceleration from v–t: gradient at point or overall. For velocity from s–t: gradient. Always state direction (+/-) for vectors.",
          },
        ],
        keyFormulas: [
          { name: "v–t area", statement: "Area under v–t graph = displacement" },
          { name: "s–t gradient", statement: "Gradient of s–t = velocity" },
        ],
        workedExample: {
          problem: "A v–t graph shows velocity rising from 0 to 20 m/s over 10 s then constant. What is displacement?",
          solution: "Area = triangle $\\frac12 \\times 10 \\times 20 = 100\\ m$ + rectangle $10 \\times 20 = 200\\ m$ = $300\\ m$.",
        },
      },
      questions: [
        {
          id: "cial-p-u1-mg-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does the area under a velocity–time graph represent?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Displacement" },
              { id: "b", text: "Acceleration" },
              { id: "c", text: "Force" },
              { id: "d", text: "Energy" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "v–t graph", statement: "Area = displacement." }],
            steps: [{ reasoning: "Area under v–t = displacement.", marks: 1, markCode: "A" }],
            finalAnswer: "Displacement",
          },
        },
        {
          id: "cial-p-u1-mg-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A car accelerates uniformly from 10 to 30 m/s in 5 s. Sketch/describe the v–t graph and find displacement.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "v–t graph", statement: "Straight line gradient = acceleration; area = displacement." }],
            steps: [
              { reasoning: "Straight line from (0,10) to (5,30) — uniform acceleration.", marks: 1, markCode: "M" },
              { reasoning: "Area = trapezium $\\frac{(10+30)}{2} \\times 5 = 100\\ m$.", marks: 1, markCode: "M" },
              { reasoning: "Displacement = 100 m.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$100\\ m$",
          },
        },
        {
          id: "cial-p-u1-mg-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "On an s–t graph, what does a horizontal line mean? What does a curved line mean?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "s–t graph", statement: "Gradient=velocity; curve=changing velocity." }],
            steps: [
              { reasoning: "Horizontal line: zero gradient → stationary.", marks: 1, markCode: "M" },
              { reasoning: "Straight sloped line: constant velocity.", marks: 1, markCode: "M" },
              { reasoning: "Curved line: changing velocity/acceleration.", marks: 1, markCode: "M" },
              { reasoning: "Gradient at any point gives instantaneous velocity.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Flat=stationary; curve=changing velocity",
          },
        },
        {
          id: "cial-p-u1-mg-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Motion graphs.",
          parts: [
            { label: "a", prompt: "What does the gradient of an s–t graph give?", marks: 1 },
            { label: "b", prompt: "What does the area under a v–t graph give?", marks: 1 },
            { label: "c", prompt: "Describe the v–t graph for uniform acceleration from rest.", marks: 2 },
            { label: "d", prompt: "A v–t graph shows constant 15 m/s for 4 s then 0 for 2 s. Find total displacement.", marks: 5 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Graph analysis", statement: "Gradient and area give kinematic quantities." }],
            steps: [
              { part: "a", reasoning: "Velocity.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Displacement.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Straight line from origin with positive gradient.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Gradient = acceleration.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "First stage: $15 \\times 4 = 60\\ m$.", marks: 2, markCode: "M" },
              { part: "d", reasoning: "Second stage: $0 \\times 2 = 0\\ m$.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Total = 60 m.", marks: 2, markCode: "A" },
            ],
            finalAnswer: "(a) velocity (b) displacement (c) straight line (d) 60 m",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cial-p-u1-kinematics-notes",
      title: "Kinematics — revision notes",
      summary: "SUVAT equations, free fall, projectiles and motion graphs.",
      sections: [
        {
          heading: "SUVAT",
          body: "$v=u+at$, $s=ut+\\frac12at^2$, $v^2=u^2+2as$. Uniform acceleration only. Free fall: $a=g=9.81\\ m\\ s^{-2}$. Projectiles: horizontal constant, vertical accelerated — solve separately.",
        },
        {
          heading: "Graphs",
          body: "s–t: gradient=velocity. v–t: gradient=acceleration, area=displacement. a–t: area=Δv. Straight lines = constant rate; curves = changing.",
        },
        {
          heading: "Exam checklist",
          body: "Check sign conventions (up positive). For projectiles resolve velocity first, treat axes independently.",
        },
      ],
    },
  ],
};
