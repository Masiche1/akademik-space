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
            { id: "a", text: "8 m/s" },
            { id: "b", text: "11 m/s" },
            { id: "c", text: "5 m/s" },
            { id: "d", text: "14 m/s" },
          ], correctChoiceId: "b" },
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
        {
          id: "cial-m-u9-sv-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A particle has $u = 5$ m/s, $a = 3$ m/s² and moves for $t = 4$ s. Find $v$.",
          response: { type: "mcq", choices: [
            { id: "a", text: "$12$ m/s" },
            { id: "b", text: "$17$ m/s" },
            { id: "c", text: "$20$ m/s" },
            { id: "d", text: "$8$ m/s" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "formula", name: "v = u + at", statement: "Direct substitution." }],
            steps: [{ reasoning: "$v = 5 + 3(4) = 17$ m/s.", marks: 1, markCode: "A" }],
            finalAnswer: "17 m/s",
          },
        },
        {
          id: "cial-m-u9-sv-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "An object is dropped from rest and falls with $a = 9.8$ m/s². Find its velocity and displacement after $t = 3$ s.",
          response: { type: "numeric", parts: [
            { label: "v", answer: 29.4, unit: "m/s" },
            { label: "s", answer: 44.1, unit: "m" },
          ] },
          markscheme: {
            principles: [{ kind: "formula", name: "SUVAT", statement: "u=0, a=9.8, t=3." }],
            steps: [
              { reasoning: "$v = 0 + 9.8(3) = 29.4$ m/s.", marks: 1, markCode: "M" },
              { reasoning: "$s = \\frac{1}{2}(9.8)(3)^2 = 44.1$ m.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$v = 29.4$ m/s; $s = 44.1$ m",
          },
        },
        {
          id: "cial-m-u9-sv-q7",
          difficulty: "core",
          totalMarks: 4,
          stem: "A car travelling at $u = 10$ m/s decelerates uniformly at $a = 2$ m/s² until it stops. Find the time taken to stop and the distance travelled while stopping.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "SUVAT", statement: "v=0, u=10, a=−2." }],
            steps: [
              { reasoning: "$0 = 10 - 2t \\Rightarrow t = 5$ s.", marks: 1, markCode: "M" },
              { reasoning: "Choose $s = ut + \\frac{1}{2}at^2$ with $a = -2$.", marks: 1, markCode: "M" },
              { reasoning: "$s = 10(5) - \\frac{1}{2}(2)(25) = 50 - 25 = 25$ m.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 5 s, 25 m.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "5 s; 25 m",
          },
        },
        {
          id: "cial-m-u9-sv-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which SUVAT equation relates $v$, $u$ and $s$ without involving $t$?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$s = ut + \\frac{1}{2}at^2$" },
            { id: "b", text: "$s = vt - \\frac{1}{2}at^2$" },
            { id: "c", text: "$v^2 = u^2 + 2as$" },
            { id: "d", text: "$v = u + at$" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "formula", name: "SUVAT", statement: "The time-free equation." }],
            steps: [{ reasoning: "$v^2 = u^2 + 2as$ contains no $t$.", marks: 1, markCode: "M" }],
            finalAnswer: "**(c)** $v^2 = u^2 + 2as$",
          },
        },
        {
          id: "cial-m-u9-sv-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "A ball is thrown vertically upwards with $u = 20$ m/s and $a = -9.8$ m/s². What is its speed after $t = 1$ s?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$29.8$ m/s" },
            { id: "b", text: "$10.2$ m/s" },
            { id: "c", text: "$9.8$ m/s" },
            { id: "d", text: "$20.2$ m/s" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "formula", name: "v = u + at", statement: "a is negative." }],
            steps: [{ reasoning: "$v = 20 + (-9.8)(1) = 10.2$ m/s.", marks: 1, markCode: "M" }],
            finalAnswer: "**(a)** $10.2$ m/s",
          },
        },
        {
          id: "cial-m-u9-sv-q10",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A car accelerates uniformly from rest at $3$ m/s² until it reaches $15$ m/s, then decelerates uniformly at $4$ m/s² until it stops. Find the total distance travelled.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Two-stage motion", statement: "Apply SUVAT to each stage." }],
            steps: [
              { reasoning: "Stage 1: $v = 0 + 3t \\Rightarrow t = 5$ s at $15$ m/s.", marks: 1, markCode: "M" },
              { reasoning: "Stage 1 distance: $s = \\frac{0+15}{2}(5) = 37.5$ m.", marks: 1, markCode: "M" },
              { reasoning: "Stage 2: $0 = 225 + 2(-4)s \\Rightarrow s = 28.125$ m.", marks: 1, markCode: "M" },
              { reasoning: "Total $= 37.5 + 28.125$.", marks: 1, markCode: "M" },
              { reasoning: "Total distance $= 65.625$ m ($\\approx 65.6$ m).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "65.625 m",
          },
        },
        {
          id: "cial-m-u9-sv-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "On a velocity–time graph, the area under the curve represents...",
          response: { type: "mcq", choices: [
            { id: "a", text: "The acceleration" },
            { id: "b", text: "The initial velocity" },
            { id: "c", text: "The displacement" },
            { id: "d", text: "The total distance only when velocity is constant" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "technique", name: "Motion graphs", statement: "v–t: area = s, gradient = a." }],
            steps: [{ reasoning: "Area under a $v$–$t$ graph gives displacement (signed).", marks: 1, markCode: "M" }],
            finalAnswer: "**(b)** The displacement",
          },
        },
        {
          id: "cial-m-u9-sv-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "On a $v$–$t$ graph, a particle's velocity increases linearly from $5$ m/s to $15$ m/s in $4$ s, then stays constant for a further $8$ s. Find the total displacement.",
          response: { type: "numeric", parts: [
            { label: "s", answer: 160, unit: "m" },
          ] },
          markscheme: {
            principles: [{ kind: "technique", name: "Area under v–t", statement: "Trapezium + rectangle." }],
            steps: [
              { reasoning: "First $4$ s: trapezium area $= \\frac{5+15}{2} \\times 4 = 40$ m.", marks: 1, markCode: "M" },
              { reasoning: "Next $8$ s: rectangle $= 8 \\times 15 = 120$ m.", marks: 1, markCode: "M" },
              { reasoning: "Total $= 40 + 120 = 160$ m.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "160 m",
          },
        },
        {
          id: "cial-m-u9-sv-q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "An $a$–$t$ graph shows a particle with acceleration $a = 2$ m/s² for the first $3$ s, then $a = -1$ m/s² for the next $4$ s. Given the initial velocity is $10$ m/s, find the velocity at $t = 7$ s.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Area under a–t", statement: "Change in v = area." }],
            steps: [
              { reasoning: "Change in first $3$ s: $2 \\times 3 = +6$ m/s.", marks: 1, markCode: "M" },
              { reasoning: "Change in next $4$ s: $-1 \\times 4 = -4$ m/s; total change $= +2$ m/s.", marks: 1, markCode: "M" },
              { reasoning: "$v(7) = 10 + 2 = 12$ m/s.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "12 m/s",
          },
        },
        {
          id: "cial-m-u9-sv-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "A particle has $u = 4$ m/s, $v = 10$ m/s and $t = 3$ s. Using SUVAT, its acceleration is...",
          response: { type: "mcq", choices: [
            { id: "a", text: "$1$ m/s²" },
            { id: "b", text: "$2$ m/s²" },
            { id: "c", text: "$6$ m/s²" },
            { id: "d", text: "$3$ m/s²" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "formula", name: "v = u + at", statement: "Solve for a." }],
            steps: [{ reasoning: "$10 = 4 + 3a \\Rightarrow a = 2$ m/s².", marks: 1, markCode: "M" }],
            finalAnswer: "**(b)** $2$ m/s²",
          },
        },
        {
          id: "cial-m-u9-sv-q15",
          difficulty: "core",
          totalMarks: 3,
          stem: "A car travelling at $u = 15$ m/s decelerates uniformly and comes to rest in a distance of $60$ m. Find its acceleration and the time taken to stop.",
          response: { type: "numeric", parts: [
            { label: "a", answer: -1.875, unit: "m/s²" },
            { label: "t", answer: 8, unit: "s" },
          ] },
          markscheme: {
            principles: [{ kind: "formula", name: "SUVAT", statement: "v=0; v²=u²+2as then v=u+at." }],
            steps: [
              { reasoning: "$0 = 225 + 2a(60) \\Rightarrow a = -\\frac{225}{120} = -1.875$ m/s².", marks: 1, markCode: "M" },
              { reasoning: "$0 = 15 + (-1.875)t \\Rightarrow t = 8$ s.", marks: 1, markCode: "M" },
              { reasoning: "Answers: $a = -1.875$ m/s², $t = 8$ s.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$a = -1.875$ m/s²; $t = 8$ s",
          },
        },
        {
          id: "cial-m-u9-sv-q16",
          difficulty: "challenge",
          totalMarks: 6,
          parts: [
            { label: "a", prompt: "Find the time taken to reach the highest point.", marks: 2 },
            { label: "b", prompt: "Find the maximum height reached.", marks: 2 },
            { label: "c", prompt: "Find the total time of flight before returning to the launch level.", marks: 2 },
          ],
          stem: "A ball is thrown vertically upwards with initial velocity $u = 25$ m/s and acceleration $a = -10$ m/s².",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "SUVAT", statement: "Vertical motion with a = −10." }],
            steps: [
              { part: "a", reasoning: "$0 = 25 - 10t \\Rightarrow t = 2.5$ s.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Time to highest point $= 2.5$ s.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$s = 25(2.5) - \\frac{1}{2}(10)(2.5)^2 = 62.5 - 31.25$.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Maximum height $= 31.25$ m.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "By symmetry, total flight time $= 2 \\times 2.5 = 5$ s.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Total time of flight $= 5$ s.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 2.5 s (b) 31.25 m (c) 5 s",
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
