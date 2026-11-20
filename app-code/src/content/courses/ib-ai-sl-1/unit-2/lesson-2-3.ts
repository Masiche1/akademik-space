import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "aisl-u2-lesson-2-3",
  code: "2-3",
  title: "Periodic Models and the Modelling Process",
  goal: "I CAN build sinusoidal models and evaluate how well a model fits data, stating its limitations.",
  standards: ["SL 2.5", "SL 2.6"],
  vocabulary: [
    { term: "Sinusoidal function", definition: "A function of the form $f(x) = a\\sin(b(x - c)) + d$ whose graph is a repeating wave." },
    { term: "Amplitude", definition: "Half the distance between the maximum and minimum values, $|a|$." },
    { term: "Period", definition: "The length of one full cycle, $\\dfrac{360^\\circ}{b}$ (or $\\dfrac{2\\pi}{b}$ in radians)." },
    { term: "Principal axis", definition: "The horizontal line $y = d$ halfway between the maximum and minimum values." },
    { term: "Model", definition: "A mathematical function used to represent a real situation, with assumptions and limitations." },
    { term: "Residual", definition: "The difference between an observed value and the value predicted by a model." },
  ],
  concepts: [
    {
      id: "aisl-u2-sinusoidal",
      title: "Sinusoidal models",
      skill: "Find amplitude, period and axis of a sinusoidal model from context and use it to answer questions.",
      lesson: {
        sections: [
          {
            heading: "Parameters of a sinusoidal model",
            body: "For $f(x) = a\\sin(bx) + d$: the amplitude is $|a|$, the period is $\\frac{360^\\circ}{b}$ (or $\\frac{2\\pi}{b}$) and the principal axis is $y = d$. The maximum is $d + a$ and the minimum is $d - a$. From a maximum $M$ and minimum $m$: $a = \\frac{M - m}{2}$ and $d = \\frac{M + m}{2}$.",
          },
          {
            heading: "Building a model from context",
            body: "Tides, daylight hours, Ferris wheels and temperature cycles repeat. Identify the max, min and period, then find $a$, $d$ and $b = \\frac{360}{\\text{period}}$. Use a cosine form $a\\cos(bt) + d$ when the maximum occurs at $t = 0$. Make sure your GDC is set to the correct angle mode (degrees or radians).",
          },
          {
            heading: "Using the model",
            body: "Evaluate the model for given times, or solve $f(t) = k$ with the GDC graph intersection, remembering there are many solutions in a periodic model. Choose the ones in the required interval and interpret in context.",
          },
        ],
        keyFormulas: [
          { name: "Amplitude and axis", statement: "$a = \\dfrac{M - m}{2},\\quad d = \\dfrac{M + m}{2}$" },
          { name: "Period", statement: "$T = \\dfrac{360^\\circ}{b} \\text{ (degrees) or } \\dfrac{2\\pi}{b} \\text{ (radians)}$" },
        ],
        workedExample: {
          problem: "A sinusoidal model has maximum $14$ and minimum $4$, with period $12$ hours. State $a$, $d$ and $b$ (in degrees).",
          solution: "$a = \\frac{14 - 4}{2} = 5$, $d = \\frac{14 + 4}{2} = 9$, $b = \\frac{360}{12} = 30$.",
        },
      },
      questions: [
        {
          id: "aisl-u2-sinusoidal-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A model for the depth of water in a harbour is $d(t) = 4\\sin(30t) + 10$, where $t$ is the time in hours and the angle is in degrees. Write down the maximum depth of water.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$14$ m" },
              { id: "b", text: "$4$ m" },
              { id: "c", text: "$10$ m" },
              { id: "d", text: "$6$ m" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Maximum of a sinusoid", statement: "For $a\\sin(bt) + d$ with $a > 0$, the maximum is $d + a$." },
            ],
            steps: [
              { reasoning: "The sine function has maximum value 1, so the depth is largest when $\\sin(30t) = 1$.", working: "d_{\\max} = 4(1) + 10", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "14", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $14$ m",
            commonErrors: ["Giving the amplitude $4$.", "Giving the axis $10$."],
          },
        },
        {
          id: "aisl-u2-sinusoidal-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A model for the depth of water in a harbour is $d(t) = 4\\sin(30t) + 10$ metres, where $t$ is the time in hours and the angle is in degrees. Find the period of the function, in hours, and the depth of water when $t = 2$.",
          response: {
            type: "numeric",
            parts: [
              { label: "Period (hours)", answer: 12 },
              { label: "Depth at $t = 2$ (m)", answer: 13.5, tolerance: 0.05 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Period", statement: "$T = \\frac{360^\\circ}{b}$" },
            ],
            steps: [
              { reasoning: "Use the period formula with $b = 30$.", working: "T = \\frac{360}{30} = 12", marks: 1, markCode: "A" },
              { reasoning: "Substitute $t = 2$.", working: "d(2) = 4\\sin(60^\\circ) + 10", marks: 1, markCode: "M" },
              { reasoning: "Evaluate with $\\sin 60^\\circ = 0.8660$.", working: "3.464 + 10 = 13.5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Period $12$ hours; depth $13.5$ m",
            commonErrors: ["Having the GDC in radian mode, giving $d(2) = 8.78$.", "Using $T = 30$ for the period."],
          },
        },
        {
          id: "aisl-u2-sinusoidal-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "The depth of water in a harbour is modelled by $d(t) = 4\\sin(30t) + 10$ metres, where $t$ is the time in hours after midnight and the angle is in degrees. A boat needs a depth of at least $12$ m. Find the number of hours in the first $12$ hours ($0 \\le t \\le 12$) for which the depth is at least $12$ m. Give your answer to 3 significant figures.",
          response: { type: "numeric", parts: [{ label: "Time (hours)", answer: 4, tolerance: 0.005 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Solving with technology", statement: "Find the intersections of $y = d(t)$ and $y = 12$ using the GDC." },
            ],
            steps: [
              { reasoning: "Set up $4\\sin(30t) + 10 = 12$, so $\\sin(30t) = 0.5$.", working: "\\sin(30t) = 0.5", marks: 1, markCode: "M" },
              { reasoning: "Solve in the first cycle: $30t = 30^\\circ$ or $150^\\circ$.", working: "t = 1,\\; t = 5", marks: 1, markCode: "A" },
              { reasoning: "The depth is at least $12$ m between the two solutions, for $1 \\le t \\le 5$.", working: "5 - 1", marks: 1, markCode: "M" },
              { reasoning: "State the length of time.", working: "4.00 \\text{ hours}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$4.00$ hours",
            commonErrors: ["Giving only the first solution $t = 1$.", "Using the second period's solutions as well."],
          },
        },
        {
          id: "aisl-u2-sinusoidal-q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "A Ferris wheel has a diameter of $40$ m and its lowest point is $2$ m above the ground. It rotates once every $8$ minutes. Rider A boards at the lowest point at time $t = 0$ minutes. The height $h$ metres of rider A above the ground is modelled by $h(t) = a\\cos(bt) + d$ with the angle in degrees.",
          parts: [
            { label: "a", prompt: "Write down the values of $a$, $d$ and $b$.", marks: 3 },
            { label: "b", prompt: "Find the height of rider A when $t = 3$ minutes.", marks: 2 },
            { label: "c", prompt: "Find the amount of time in the first 8 minutes for which rider A is at least $30$ m above the ground. Give your answer to 3 significant figures.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Amplitude and axis", statement: "$|a| = \\frac{M - m}{2}$, $d = \\frac{M + m}{2}$" },
              { kind: "formula", name: "Period", statement: "$b = \\frac{360}{T}$" },
            ],
            steps: [
              { part: "a", reasoning: "The minimum is $2$ and the maximum is $42$. Rider starts at the minimum, so use $-\\cos$: $a = -20$.", working: "a = -20", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Axis is the midpoint of the maximum and minimum.", working: "d = \\frac{42 + 2}{2} = 22", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Period is 8 minutes.", working: "b = \\frac{360}{8} = 45", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Substitute $t = 3$ into $h = -20\\cos(45t) + 22$.", working: "h(3) = -20\\cos(135^\\circ) + 22", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate with $\\cos 135^\\circ = -0.7071$.", working: "14.142 + 22 = 36.1 \\text{ m}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Solve $-20\\cos(45t) + 22 = 30$, so $\\cos(45t) = -0.4$.", working: "45t = 113.58^\\circ \\text{ or } 246.42^\\circ", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Find the two times.", working: "t = 2.524 \\text{ and } t = 5.476", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Subtract to find the time above $30$ m.", working: "5.476 - 2.524 = 2.95 \\text{ minutes}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $a = -20$, $d = 22$, $b = 45$. (b) $36.1$ m. (c) $2.95$ minutes.",
            commonErrors: ["Using $+20\\cos$, which puts the rider at the top at $t = 0$.", "Using the radius $20$ as $d$."],
            examinerNote: "Accept $h = 20\\sin(45(t - 2)) + 22$ as an equivalent model.",
          },
        },
        {
          id: "aisl-u2-sinusoidal-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A sinusoidal model is $f(t) = 6\\sin(45t) + 12$, where the angle is in degrees. Write down the maximum value of $f(t)$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$18$" },
              { id: "b", text: "$6$" },
              { id: "c", text: "$12$" },
              { id: "d", text: "$8$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Maximum of a sinusoid", statement: "For $a\\sin(bt) + d$ with $a > 0$, the maximum is $d + a$." },
            ],
            steps: [
              { reasoning: "The maximum occurs when $\\sin(45t) = 1$.", working: "f_{\\max} = 6(1) + 12", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "18", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $18$",
            commonErrors: ["Giving the amplitude $6$.", "Giving the axis $12$."],
          },
        },
        {
          id: "aisl-u2-sinusoidal-q6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Find the period, in units of $t$, of $y = 3\\cos(20t) + 7$ where the angle is in degrees.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$18$" },
              { id: "b", text: "$20$" },
              { id: "c", text: "$360$" },
              { id: "d", text: "$3$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Period", statement: "$T = \\frac{360^\\circ}{b}$ when the angle is in degrees." },
            ],
            steps: [
              { reasoning: "Identify $b = 20$ and apply the period formula.", working: "T = \\frac{360}{20}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "T = 18", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $18$",
            commonErrors: ["Using $T = b$ instead of $\\frac{360}{b}$.", "Using the radian formula $\\frac{2\\pi}{b}$."],
          },
        },
        {
          id: "aisl-u2-sinusoidal-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A sinusoidal model has a maximum value of $20$ and a minimum value of $8$. Write down the equation of its principal axis.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$y = 14$" },
              { id: "b", text: "$y = 12$" },
              { id: "c", text: "$y = 6$" },
              { id: "d", text: "$y = 28$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Principal axis", statement: "$d = \\frac{M + m}{2}$, the midpoint of the maximum and minimum." },
            ],
            steps: [
              { reasoning: "Apply the midpoint formula with $M = 20$ and $m = 8$.", working: "d = \\frac{20 + 8}{2}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "d = 14", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $y = 14$",
            commonErrors: ["Finding the amplitude $6$ instead of the axis.", "Adding $20 + 8$ without halving."],
          },
        },
        {
          id: "aisl-u2-sinusoidal-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "What is the minimum value of $f(t) = 5\\sin(60t) + 10$, where the angle is in degrees?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$5$" },
              { id: "b", text: "$10$" },
              { id: "c", text: "$15$" },
              { id: "d", text: "$-5$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Minimum of a sinusoid", statement: "For $a\\sin(bt) + d$ with $a > 0$, the minimum is $d - a$." },
            ],
            steps: [
              { reasoning: "The minimum occurs when $\\sin(60t) = -1$.", working: "f_{\\min} = 5(-1) + 10", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $5$",
            commonErrors: ["Giving the maximum $15$.", "Giving the axis $10$."],
          },
        },
        {
          id: "aisl-u2-sinusoidal-q9",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 3,
          stem: "A model for the height of a point on a rotating machine is $h(t) = 3\\sin(40t) + 9$ metres, where $t$ is in seconds and the angle is in degrees. Find the period of the model and the height when $t = 1.5$ seconds.",
          response: {
            type: "numeric",
            parts: [
              { label: "Period (s)", answer: 9 },
              { label: "Height at $t = 1.5$ (m)", answer: 11.6, tolerance: 0.05 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Period", statement: "$T = \\frac{360^\\circ}{b}$" },
            ],
            steps: [
              { reasoning: "Apply the period formula with $b = 40$.", working: "T = \\frac{360}{40} = 9", marks: 1, markCode: "A" },
              { reasoning: "Substitute $t = 1.5$.", working: "h(1.5) = 3\\sin(60^\\circ) + 9", marks: 1, markCode: "M" },
              { reasoning: "Evaluate with $\\sin 60^\\circ = 0.8660$.", working: "2.598 + 9 = 11.6", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Period $9$ s; height $11.6$ m",
            commonErrors: ["Using the GDC in radian mode.", "Computing $40 \\times 1.5$ in radians."],
          },
        },
        {
          id: "aisl-u2-sinusoidal-q10",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "The depth of water in a harbour varies between a maximum of $4.2$ m and a minimum of $0.6$ m. Find the amplitude of this variation.",
          response: { type: "numeric", parts: [{ label: "Amplitude (m)", answer: 1.8 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Amplitude", statement: "$a = \\frac{M - m}{2}$" },
            ],
            steps: [
              { reasoning: "Apply the amplitude formula with $M = 4.2$ and $m = 0.6$.", working: "a = \\frac{4.2 - 0.6}{2}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate the numerator.", working: "\\frac{3.6}{2}", marks: 1, markCode: "M" },
              { reasoning: "Divide.", working: "a = 1.8", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$1.8$ m",
            commonErrors: ["Finding the principal axis $2.4$ instead of the amplitude.", "Using $\\frac{M + m}{2}$."],
          },
        },
        {
          id: "aisl-u2-sinusoidal-q11",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "The height of a rider on a Ferris wheel is modelled by $h(t) = -15\\cos(30t) + 25$ metres, where $t$ is in minutes and the angle is in degrees. Find the height of the rider when $t = 4$ minutes.",
          response: { type: "numeric", parts: [{ label: "Height (m)", answer: 32.5 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Evaluating a sinusoid", statement: "Substitute the value of $t$ and evaluate the trigonometric function." },
            ],
            steps: [
              { reasoning: "Substitute $t = 4$ into the model.", working: "h(4) = -15\\cos(120^\\circ) + 25", marks: 1, markCode: "M" },
              { reasoning: "Evaluate $\\cos 120^\\circ = -0.5$.", working: "-15(-0.5) + 25 = 7.5 + 25", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "h = 32.5 \\text{ m}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$32.5$ m",
            commonErrors: ["Using $\\cos 120^\\circ = 0.5$.", "Using the GDC in radian mode."],
          },
        },
        {
          id: "aisl-u2-sinusoidal-q12",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "The depth of water in a harbour is modelled by $d(t) = 5\\sin(40t) + 10$ metres, where $t$ is in hours and the angle is in degrees. Find the smallest positive value of $t$ for which the depth is $13$ m. Give your answer to 3 significant figures.",
          response: { type: "numeric", parts: [{ label: "$t$ (hours)", answer: 0.922, tolerance: 0.005 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Solving with technology", statement: "Solve $d(t) = 13$ and select the smallest positive solution." },
            ],
            steps: [
              { reasoning: "Set $d(t) = 13$ and simplify.", working: "5\\sin(40t) + 10 = 13 \\Rightarrow \\sin(40t) = 0.6", marks: 1, markCode: "M" },
              { reasoning: "Solve for the angle.", working: "40t = 36.87^\\circ \\text{ (or } 143.13^\\circ\\text{)}", marks: 1, markCode: "M" },
              { reasoning: "Divide by $40$ and choose the smallest positive solution.", working: "t = 0.922 \\text{ hours (3 s.f.)}", marks: 1, markCode: "A" },
              { reasoning: "Verify it is the smallest positive solution and give units.", working: "t \\approx 0.922", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$t = 0.922$ hours",
            commonErrors: ["Giving the second solution $t = 3.58$ hours.", "Using the GDC in radian mode."],
          },
        },
        {
          id: "aisl-u2-sinusoidal-q13",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 7,
          stem: "A Ferris wheel has radius $15$ m with its centre $18$ m above the ground. It completes one rotation every $10$ minutes. A rider boards at the lowest point at time $t = 0$ minutes. The height $h$ metres of the rider above the ground is modelled by $h(t) = a\\cos(bt) + d$ with the angle in degrees.",
          parts: [
            { label: "a", prompt: "Write down the values of $a$, $d$ and $b$.", marks: 3 },
            { label: "b", prompt: "Find the height of the rider when $t = 2.5$ minutes.", marks: 2 },
            { label: "c", prompt: "Find the time at which the rider first reaches a height of $30$ m, giving your answer to 3 significant figures.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Amplitude and axis", statement: "$|a| = \\frac{M - m}{2}$, $d = \\frac{M + m}{2}$" },
              { kind: "formula", name: "Period", statement: "$b = \\frac{360}{T}$" },
            ],
            steps: [
              { part: "a", reasoning: "The rider starts at the minimum, so use a negative cosine: $a = -15$.", working: "a = -15", marks: 1, markCode: "A" },
              { part: "a", reasoning: "The axis is the height of the centre.", working: "d = 18", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Period is $10$ minutes.", working: "b = \\frac{360}{10} = 36", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Substitute $t = 2.5$ into $h = -15\\cos(36t) + 18$.", working: "h(2.5) = -15\\cos(90^\\circ) + 18", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate with $\\cos 90^\\circ = 0$.", working: "h = 18 \\text{ m}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Set $h = 30$.", working: "-15\\cos(36t) + 18 = 30 \\Rightarrow \\cos(36t) = -0.8", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Solve for the smallest positive $t$.", working: "36t = 143.13^\\circ \\Rightarrow t = 3.98 \\text{ minutes (3 s.f.)}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $a = -15$, $d = 18$, $b = 36$. (b) $18$ m. (c) $t = 3.98$ minutes.",
            commonErrors: ["Using $a = +15$, which puts the rider at the top at $t = 0$.", "Using the diameter instead of the radius for $a$."],
          },
        },
        {
          id: "aisl-u2-sinusoidal-q14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 7,
          stem: "The depth of water in a harbour is modelled by $d(t) = 2\\sin(45t) + 11$ metres, where $t$ is the time in hours after midnight and the angle is in degrees.",
          parts: [
            { label: "a", prompt: "Write down the maximum depth of water.", marks: 1 },
            { label: "b", prompt: "Write down the minimum depth of water.", marks: 1 },
            { label: "c", prompt: "Find the total time during the first $8$ hours ($0 \\le t \\le 8$) for which the depth is at least $12$ m. Give your answer to 3 significant figures.", marks: 4 },
            { label: "d", prompt: "State the period of the model, in hours, and what it represents in this context.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Period", statement: "$T = \\frac{360^\\circ}{b}$" },
              { kind: "principle", name: "Solving with technology", statement: "Find the intersections of $y = d(t)$ and $y = 12$ and measure the interval between them." },
            ],
            steps: [
              { part: "a", reasoning: "The maximum is $d + a = 11 + 2$.", working: "d_{\\max} = 13 \\text{ m}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "The minimum is $d - a = 11 - 2$.", working: "d_{\\min} = 9 \\text{ m}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Set $d(t) = 12$ and simplify.", working: "2\\sin(45t) + 11 = 12 \\Rightarrow \\sin(45t) = 0.5", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Solve for the angles in the first cycle.", working: "45t = 30^\\circ \\text{ or } 150^\\circ", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Find the times and select those in $0 \\le t \\le 8$.", working: "t = 0.667 \\text{ and } t = 3.33", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Subtract to find the duration.", working: "3.33 - 0.667 = 2.67 \\text{ hours (3 s.f.)}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "The period is $\\frac{360}{45} = 8$ hours, the time for one complete cycle of the tide.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $13$ m. (b) $9$ m. (c) $2.67$ hours. (d) $8$ hours; one complete tidal cycle.",
            commonErrors: ["Including solutions from the second cycle, which fall outside $0 \\le t \\le 8$.", "Reporting the times instead of the duration."],
          },
        },
        {
          id: "aisl-u2-sinusoidal-q15",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Find the period of $y = 4\\sin(15t)$, where the angle is in degrees.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$24$" },
              { id: "b", text: "$15$" },
              { id: "c", text: "$360$" },
              { id: "d", text: "$4$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Period", statement: "$T = \\frac{360^\\circ}{b}$" },
            ],
            steps: [
              { reasoning: "Identify $b = 15$ and apply the formula.", working: "T = \\frac{360}{15}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "T = 24", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $24$",
            commonErrors: ["Giving $b = 15$ as the period.", "Using radians, giving $\\frac{2\\pi}{15}$."],
          },
        },
        {
          id: "aisl-u2-sinusoidal-q16",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "What is the principal axis of the graph of $f(t) = 6\\sin(20t) + 9$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$y = 9$" },
              { id: "b", text: "$y = 6$" },
              { id: "c", text: "$y = 15$" },
              { id: "d", text: "$y = 3$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Principal axis", statement: "The principal axis is $y = d$, the constant term in $a\\sin(bt) + d$." },
            ],
            steps: [
              { reasoning: "Identify $d = 9$ in the model.", working: "d = 9", marks: 1, markCode: "M" },
              { reasoning: "The axis is the horizontal line $y = d$.", working: "y = 9", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $y = 9$",
            commonErrors: ["Giving the maximum $15$ or minimum $3$.", "Confusing the axis with the amplitude $6$."],
          },
        },
      ],
    },
    {
      id: "aisl-u2-modelling-process",
      title: "Developing, testing and evaluating models",
      skill: "Fit models to data with technology, assess their fit, make predictions and state limitations.",
      lesson: {
        sections: [
          {
            heading: "Choosing a model",
            body: "Plot the data and consider its shape: constant rate (linear), a turning point (quadratic), constant ratio growth or decay (exponential), a repeating wave (sinusoidal). Use the GDC regression tools to find the parameters, and write down the equation with values to 3 significant figures.",
          },
          {
            heading: "Testing and comparing",
            body: "Compare model values with data. The residual is observed minus predicted; small residuals with no pattern suggest a good fit. A value of $R^2$ close to 1 indicates the model explains most of the variation. A model should also make sense in context, for example it should not predict negative populations.",
          },
          {
            heading: "Interpolation, extrapolation and limitations",
            body: "Predicting within the data range (interpolation) is more reliable than predicting beyond it (extrapolation). Every model has assumptions. Comment on them, such as constant growth rate, no external factors, or a limited domain, and suggest how the model could be refined.",
          },
        ],
        keyFormulas: [
          { name: "Residual", statement: "$\\text{residual} = \\text{observed} - \\text{predicted}$" },
          { name: "Percentage error", statement: "$\\varepsilon = \\left|\\dfrac{v_A - v_E}{v_E}\\right| \\times 100\\%$" },
        ],
        workedExample: {
          problem: "A model predicts $52$ but the observed value is $50$. Find the residual.",
          solution: "Residual $= 50 - 52 = -2$, so the model over-predicts by $2$.",
        },
      },
      questions: [
        {
          id: "aisl-u2-modelling-process-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 1,
          stem: "A model predicts a value of $52$ for a quantity whose observed value is $50$. Find the residual (observed minus predicted).",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$-2$" },
              { id: "b", text: "$2$" },
              { id: "c", text: "$4$" },
              { id: "d", text: "$0.04$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Residual", statement: "observed value minus predicted value." },
            ],
            steps: [
              { reasoning: "Subtract the predicted value from the observed value.", working: "50 - 52 = -2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $-2$",
            commonErrors: ["Reversing the order of subtraction, giving $+2$."],
          },
        },
        {
          id: "aisl-u2-modelling-process-q2",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "The population of a town is modelled by $P(t) = 1200(1.04)^t$, where $t$ is the number of years since 2020. The recorded population in 2024 was $1425$. Calculate the model's prediction for 2024 and the residual (observed minus predicted), to the nearest whole number.",
          response: {
            type: "numeric",
            parts: [
              { label: "Predicted population", answer: 1404, tolerance: 0.5 },
              { label: "Residual", answer: 21, tolerance: 0.5 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Residual", statement: "observed value minus predicted value." },
            ],
            steps: [
              { reasoning: "2024 corresponds to $t = 4$.", working: "P(4) = 1200(1.04)^4", marks: 1, markCode: "M" },
              { reasoning: "Evaluate $1.04^4 = 1.169859$.", working: "1403.8 \\approx 1404", marks: 1, markCode: "A" },
              { reasoning: "Observed minus predicted.", working: "1425 - 1404 = 21", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Predicted $1404$; residual $21$",
            commonErrors: ["Using $t = 2024$.", "Subtracting in the wrong order."],
          },
        },
        {
          id: "aisl-u2-modelling-process-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "A scientist records the temperature $T$ (in $^\\circ$C) of cooling water at different times $t$ minutes: $(0, 90)$, $(5, 62)$, $(10, 45)$, $(15, 33)$. The data are modelled by $T = 20 + 70e^{-kt}$. Find the value of $k$ using the data point $(5, 62)$. Give your answer to 3 significant figures.",
          response: { type: "numeric", parts: [{ label: "$k$", answer: 0.102, tolerance: 0.0005 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Natural logarithm", statement: "$e^y = c \\Leftrightarrow y = \\ln c$." },
            ],
            steps: [
              { reasoning: "Substitute $t = 5$, $T = 62$.", working: "62 = 20 + 70e^{-5k}", marks: 1, markCode: "M" },
              { reasoning: "Rearrange.", working: "e^{-5k} = \\frac{42}{70} = 0.6", marks: 1, markCode: "A" },
              { reasoning: "Take natural logarithms.", working: "-5k = \\ln 0.6 = -0.5108", marks: 1, markCode: "M" },
              { reasoning: "Solve and round.", working: "k = 0.102", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$k = 0.102$",
            commonErrors: ["Forgetting to subtract $20$ before dividing.", "Dividing by $5$ incorrectly after taking logarithms."],
          },
        },
        {
          id: "aisl-u2-modelling-process-q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "The cooling water in the previous question is modelled by $T(t) = 20 + 70e^{-0.102t}$, where $T$ is in $^\\circ$C and $t$ is the time in minutes. The data recorded were $(0, 90)$, $(5, 62)$, $(10, 45)$, $(15, 33)$.",
          parts: [
            { label: "a", prompt: "Find the model's prediction for $T$ when $t = 10$, and the residual at this point. Give answers to 3 significant figures.", marks: 3 },
            { label: "b", prompt: "Find the time when the model predicts the temperature to be $30^\\circ$C. Give your answer to 3 significant figures.", marks: 3 },
            { label: "c", prompt: "State, with a reason, a limitation of using this model to predict the temperature after 24 hours.", marks: 1 },
            { label: "d", prompt: "State what the value $20$ in the model represents.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Residual", statement: "observed minus predicted." },
              { kind: "definition", name: "Natural logarithm", statement: "$e^y = c \\Leftrightarrow y = \\ln c$." },
            ],
            steps: [
              { part: "a", reasoning: "Substitute $t = 10$.", working: "T(10) = 20 + 70e^{-1.02}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate $e^{-1.02} = 0.36059$.", working: "20 + 25.24 = 45.2", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Observed minus predicted.", working: "45 - 45.24 = -0.24", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Set $T = 30$.", working: "20 + 70e^{-0.102t} = 30 \\Rightarrow e^{-0.102t} = \\frac{1}{7}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Take natural logarithms.", working: "-0.102t = \\ln\\frac{1}{7} = -1.9459", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Solve.", working: "t = 19.1 \\text{ minutes}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "The model predicts approaching $20^\\circ$C (room temperature) assuming constant surroundings; over 24 hours the room temperature or conditions could change, and it is extrapolation far outside the data range ($t \\le 15$).", marks: 1, markCode: "R" },
              { part: "d", reasoning: "It is the horizontal asymptote: the temperature of the surroundings, which the water approaches in the long term.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) Prediction $45.2^\\circ$C; residual $-0.24$. (b) $19.1$ minutes. (c) Extrapolation far beyond the data; assumes constant room temperature. (d) The surroundings' temperature, $20^\\circ$C.",
            commonErrors: ["Taking the logarithm before isolating the exponential.", "Stating the residual with the opposite sign."],
            examinerNote: "Accept any valid limitation referring to extrapolation or assumptions.",
          },
        },
        {
          id: "aisl-u2-modelling-process-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A model predicts a value of $60$ for a quantity whose observed value is $55$. Find the residual (observed minus predicted).",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$-5$" },
              { id: "b", text: "$5$" },
              { id: "c", text: "$115$" },
              { id: "d", text: "$0.09$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Residual", statement: "residual = observed value $-$ predicted value." },
            ],
            steps: [
              { reasoning: "Subtract the predicted value from the observed value.", working: "55 - 60 = -5", marks: 1, markCode: "M" },
              { reasoning: "Interpret the sign: the model over-predicts.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $-5$",
            commonErrors: ["Reversing the order of subtraction, giving $+5$."],
          },
        },
        {
          id: "aisl-u2-modelling-process-q6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A quantity is observed to double every fixed time interval. Which type of model is most appropriate?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Exponential" },
              { id: "b", text: "Linear" },
              { id: "c", text: "Quadratic" },
              { id: "d", text: "Sinusoidal" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Choosing a model", statement: "Constant ratio growth or decay is modelled by an exponential function." },
            ],
            steps: [
              { reasoning: "Doubling each interval means the quantity is multiplied by a constant factor.", working: "y \\to 2y \\text{ each interval}", marks: 1, markCode: "M" },
              { reasoning: "Constant multiplicative change indicates an exponential model.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Exponential",
            commonErrors: ["Choosing linear because the change looks regular.", "Choosing sinusoidal because the values repeat."],
          },
        },
        {
          id: "aisl-u2-modelling-process-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A regression gives a value of $R^2 = 0.98$ for a model fitted to data. What does this indicate?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The model explains most of the variation in the data" },
              { id: "b", text: "The model is exact with no error" },
              { id: "c", text: "The model has no domain restrictions" },
              { id: "d", text: "The model will always extrapolate accurately" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "$R^2$", statement: "$R^2$ close to $1$ indicates the model explains most of the variation in the data." },
            ],
            steps: [
              { reasoning: "Recall the interpretation of $R^2$.", working: "R^2 = 0.98 \\text{ is close to } 1", marks: 1, markCode: "M" },
              { reasoning: "State what this means for the fit.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** The model explains most of the variation",
            commonErrors: ["Interpreting $R^2 = 0.98$ as $98\\%$ accuracy for every prediction.", "Claiming $R^2$ guarantees extrapolation."],
          },
        },
        {
          id: "aisl-u2-modelling-process-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A model was fitted to data for $0 \\le t \\le 10$. Using it to predict a value at $t = 50$ is called what, and why is it less reliable?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Extrapolation, because it predicts beyond the range of the data" },
              { id: "b", text: "Interpolation, because it predicts beyond the range of the data" },
              { id: "c", text: "Extrapolation, because it predicts within the range of the data" },
              { id: "d", text: "Interpolation, because it predicts within the range of the data" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Interpolation and extrapolation", statement: "Predicting outside the data range is extrapolation and is less reliable." },
            ],
            steps: [
              { reasoning: "Identify $t = 50$ as outside the fitted range.", working: "50 > 10", marks: 1, markCode: "M" },
              { reasoning: "Name the process and its limitation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Extrapolation, beyond the data range",
            commonErrors: ["Calling it interpolation.", "Saying extrapolation is always accurate."],
          },
        },
        {
          id: "aisl-u2-modelling-process-q9",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A model predicts a value of $61$ for a quantity whose observed value is $58$. Find the residual (observed minus predicted).",
          response: { type: "numeric", parts: [{ label: "Residual", answer: -3 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Residual", statement: "residual = observed value $-$ predicted value." },
            ],
            steps: [
              { reasoning: "Subtract the predicted value from the observed value.", working: "58 - 61 = -3", marks: 1, markCode: "M" },
              { reasoning: "State the residual.", working: "-3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$-3$",
            commonErrors: ["Subtracting in the wrong order, giving $3$."],
          },
        },
        {
          id: "aisl-u2-modelling-process-q10",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A model predicts a value of $80$, while the observed value is $88$. Find the percentage error of the model's prediction, expressed as a percentage of the prediction. Give your answer to 3 significant figures.",
          response: { type: "numeric", parts: [{ label: "Percentage error", answer: 10 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage error", statement: "$\\varepsilon = \\left|\\dfrac{v_A - v_E}{v_E}\\right| \\times 100\\%$ with $v_E$ the model's prediction." },
            ],
            steps: [
              { reasoning: "Find the absolute difference.", working: "|88 - 80| = 8", marks: 1, markCode: "M" },
              { reasoning: "Divide by the prediction and multiply by $100$.", working: "\\frac{8}{80} \\times 100\\%", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "10.0\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$10.0\\%$",
            commonErrors: ["Dividing by $88$ instead of $80$.", "Omitting the absolute value."],
          },
        },
        {
          id: "aisl-u2-modelling-process-q11",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A model gives residuals of $-2$, $1$ and $3$ at three data points. Find the mean residual, giving your answer to 3 significant figures.",
          response: { type: "numeric", parts: [{ label: "Mean residual", answer: 0.667, tolerance: 0.001 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Mean residual", statement: "The mean residual is the sum of the residuals divided by the number of data points." },
            ],
            steps: [
              { reasoning: "Add the residuals.", working: "-2 + 1 + 3 = 2", marks: 1, markCode: "M" },
              { reasoning: "Divide by the number of residuals.", working: "\\frac{2}{3}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate to 3 significant figures.", working: "0.667", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$0.667$",
            commonErrors: ["Dividing by $3$ twice or forgetting a residual.", "Treating the negative residual as positive."],
          },
        },
        {
          id: "aisl-u2-modelling-process-q12",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "A model predicts a population of $5000$ in a certain year, but the observed population is $6200$. Find (i) the residual (observed minus predicted) and (ii) the percentage error of the prediction, expressed as a percentage of the prediction.",
          response: {
            type: "numeric",
            parts: [
              { label: "Residual", answer: 1200 },
              { label: "Percentage error", answer: 24 }],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Residual", statement: "residual = observed value $-$ predicted value." },
              { kind: "formula", name: "Percentage error", statement: "$\\varepsilon = \\left|\\dfrac{v_A - v_E}{v_E}\\right| \\times 100\\%$" },
            ],
            steps: [
              { reasoning: "Compute observed minus predicted.", working: "6200 - 5000 = 1200", marks: 1, markCode: "M" },
              { reasoning: "State the residual.", working: "1200", marks: 1, markCode: "A" },
              { reasoning: "Divide the residual by the prediction and multiply by $100$.", working: "\\frac{1200}{5000} \\times 100\\%", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "24\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Residual $1200$; percentage error $24\\%$",
            commonErrors: ["Dividing by $6200$ instead of $5000$.", "Reporting the residual with the wrong sign."],
          },
        },
        {
          id: "aisl-u2-modelling-process-q13",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 6,
          stem: "Data are modelled by the linear function $y = 2.5x + 10$. The observed values of $y$ at $x = 0, 1, 2, 3$ are $9$, $13$, $16$ and $21$ respectively.",
          parts: [
            { label: "a", prompt: "Find the residuals at $x = 1$ and at $x = 3$.", marks: 2 },
            { label: "b", prompt: "Find the mean of the four residuals.", marks: 2 },
            { label: "c", prompt: "Comment on how well the model fits the data.", marks: 1 },
            { label: "d", prompt: "State why using this model to predict $y$ at $x = 10$ may be unreliable.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Residual", statement: "residual = observed value $-$ predicted value." },
            ],
            steps: [
              { part: "a", reasoning: "Predicted values are $12.5$ at $x = 1$ and $17.5$ at $x = 3$.", working: "13 - 12.5 = 0.5;\\; 21 - 17.5 = 3.5", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State both residuals.", working: "0.5 \\text{ and } 3.5", marks: 1, markCode: "A" },
              { part: "b", reasoning: "The residuals are $-1$, $0.5$, $1$ and $3.5$; sum them.", working: "-1 + 0.5 + 1 + 3.5 = 4", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Divide by $4$.", working: "\\frac{4}{4} = 1", marks: 1, markCode: "A" },
              { part: "c", reasoning: "The residuals are small relative to the values but grow with $x$, so the fit is reasonable but the model slightly under-predicts at larger $x$.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "$x = 10$ is far outside the data range, so this is extrapolation and the linear trend may not continue.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $0.5$ and $3.5$. (b) $1$. (c) Reasonable fit; residuals grow at larger $x$. (d) Extrapolation far beyond the data range.",
            commonErrors: ["Computing predicted minus observed instead of observed minus predicted.", "Using only the two residuals from (a) for the mean in (b)."],
          },
        },
        {
          id: "aisl-u2-modelling-process-q14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "A population is modelled by $P(t) = 800e^{0.05t}$, where $P$ is the population and $t$ is the number of years since 2020. The observed population was $780$ in 2020 and $1300$ in 2030.",
          parts: [
            { label: "a", prompt: "Find the model's predictions for $P$ in 2020 and in 2030, and the residual at each of these times. Give answers to 3 significant figures.", marks: 4 },
            { label: "b", prompt: "Find the time at which the model predicts the population to reach $1600$. Give your answer to 3 significant figures.", marks: 2 },
            { label: "c", prompt: "State two limitations of using this model to predict the population in 2100.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Residual", statement: "residual = observed value $-$ predicted value." },
              { kind: "definition", name: "Natural logarithm", statement: "$e^y = c \\Leftrightarrow y = \\ln c$." },
            ],
            steps: [
              { part: "a", reasoning: "At $t = 0$, $P(0) = 800$; residual $= 780 - 800 = -20$.", working: "P(0) = 800,\\; \\text{residual} = -20", marks: 1, markCode: "M" },
              { part: "a", reasoning: "At $t = 10$, $P(10) = 800e^{0.5} = 1318.98\\ldots \\approx 1319$; residual $= 1300 - 1319 = -19$.", working: "P(10) = 800e^{0.5} = 1319,\\; \\text{residual} = -19", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the two predictions.", working: "800 \\text{ and } 1319", marks: 1, markCode: "A" },
              { part: "a", reasoning: "State the two residuals.", working: "-20 \\text{ and } -19", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Set $P(t) = 1600$.", working: "800e^{0.05t} = 1600 \\Rightarrow e^{0.05t} = 2", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Take logarithms and solve.", working: "t = \\frac{\\ln 2}{0.05} = 13.9 \\text{ years}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Limitation one: $t = 80$ is far beyond the data range (extrapolation); the constant growth rate $5\\%$ may not continue.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Limitation two: the model ignores factors such as resource limits or migration, and assumes unlimited exponential growth.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Predictions $800$ and $1319$; residuals $-20$ and $-19$. (b) $t = 13.9$ years. (c) Extrapolation with assumed constant growth; ignores limiting factors.",
            commonErrors: ["Subtracting predicted from observed in the wrong order.", "Forgetting that $t = 10$ corresponds to 2030."],
          },
        },
        {
          id: "aisl-u2-modelling-process-q15",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A quantity grows by a constant percentage each period, so the data curve upwards increasingly steeply. Which model is most appropriate?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Exponential" },
              { id: "b", text: "Linear" },
              { id: "c", text: "Sinusoidal" },
              { id: "d", text: "Quadratic with no turning point" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Choosing a model", statement: "Constant percentage growth is modelled by $y = ka^t$ or $ke^{rt}$." },
            ],
            steps: [
              { reasoning: "Constant percentage change means a constant multiplicative factor per period.", working: "y \\to ry \\text{ each period}", marks: 1, markCode: "M" },
              { reasoning: "This is the defining feature of an exponential model.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Exponential",
            commonErrors: ["Choosing quadratic because the curve bends upward.", "Choosing linear because growth is regular in time."],
          },
        },
        {
          id: "aisl-u2-modelling-process-q16",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "An exponential decay model predicts a negative population for sufficiently large $t$. What does this indicate?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The model has broken down outside its valid domain" },
              { id: "b", text: "The population really becomes negative" },
              { id: "c", text: "The model is perfectly accurate for all $t$" },
              { id: "d", text: "The data were collected incorrectly" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Model limitations", statement: "A model is only valid within a domain; unrealistic predictions signal the model has broken down." },
            ],
            steps: [
              { reasoning: "A population cannot be negative, so the prediction is unrealistic.", working: "P(t) < 0 \\text{ is impossible}", marks: 1, markCode: "M" },
              { reasoning: "This shows the model is being used outside its valid domain.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** The model has broken down outside its valid domain",
            commonErrors: ["Taking the negative prediction literally.", "Blaming the data rather than the extrapolation."],
          },
        },
      ],
    },
  ],
};
