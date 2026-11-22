import type { Lesson } from "../../../types.ts";

export const lesson42: Lesson = {
  id: "eph10-u4-lesson-4-2",
  code: "4-2",
  title: "Practical Skills: Motion, Forces and Energy",
  goal: "I CAN investigate motion, forces and energy transfer safely and accurately.",
  standards: ["Edexcel IGCSE Physics 4PH1 — Investigative Skills"],
  vocabulary: [
    {
      term: "Ticker timer",
      definition: "Device marking dots on tape at known frequency.",
    },
    {
      term: "Light gate",
      definition: "Interrupt beam to measure time precisely.",
    },
    {
      term: "Terminal velocity",
      definition: "Constant speed when drag = weight.",
    },
    {
      term: "Moments",
      definition: "Turning effect — force × perpendicular distance.",
    },
  ],
  concepts: [
    {
      id: "eph10-u4-motion",
      title: "Investigating Motion",
      skill: "Measure motion using ticker timers and light gates.",
      lesson: {
        sections: [
          {
            heading: "Ticker timer method",
            body: "**Setup**: ticker timer (50 Hz → 0.02 s per dot), trolley, runway, masses. **Procedure**: start timer before release, use only middle section of tape (constant acceleration), measure distances between 5 dots, divide by time.\n\n**Calculations**: speed = distance ÷ time; acceleration from v-u/t using successive speeds. **Gradient method**: plot distance vs time² for constant acceleration — gradient = a/2.",
          },
          {
            heading: "Light gates",
            body: "**Principle**: interrupt light beam — timer measures time object blocks beam. **Velocity** = card width ÷ blocking time. **Two gates**: measure v at two positions → acceleration = (v₂²−v₁²)/(2s) or (v₂−v₁)/t.\n\n**Pendulum**: time 20+ swings for period — divide by number, reduce timing error. **Data**: repeat 3+ times, mean ± uncertainty.",
          },
        ],
        keyFormulas: [
          { name: "Speed", statement: "distance ÷ time." },
          { name: "Acceleration", statement: "(v−u)/t or v²=u²+2as." },
        ],
        workedExample: {
          problem: "Ticker: 10 dots in 0.2s covering 0.15m. Speed?",
          solution: "0.15 ÷ 0.2 = 0.75 m/s.",
        },
      },
      questions: [
        {
          id: "eph10-u4-motion-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A 50 Hz ticker timer marks how many dots per second?",
          response: {
            type: "numeric",
            parts: [{ label: "Dots/s", answer: 50 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Frequency",
                statement: "50 Hz = 50 dots per second.",
              },
            ],
            steps: [
              { reasoning: "50 Hz = 50 dots/s.", marks: 2, markCode: "AO1" },
            ],
            finalAnswer: "50 dots/s",
            commonErrors: ["0.02 confused."],
          },
        },
        {
          id: "eph10-u4-motion-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why use only the middle section of ticker tape?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Ticker tape",
                statement:
                  "Middle section has constant acceleration — edges unreliable.",
              },
            ],
            steps: [
              {
                reasoning: "Trolley accelerates from rest.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Middle dots = steady acceleration.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Edges include start-up/end effects.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Middle section gives constant acceleration — more reliable data.",
            commonErrors: ["All same assumed.", "No acceleration link."],
          },
        },
        {
          id: "eph10-u4-motion-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A light gate measures 0.010s blocking for a 5cm card. Calculate velocity.",
          response: {
            type: "numeric",
            parts: [{ label: "Velocity (m/s)", answer: 5 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Velocity",
                statement: "v = card width ÷ blocking time.",
              },
            ],
            steps: [
              {
                reasoning: "v = 0.05 ÷ 0.010 = 5 m/s.",
                marks: 4,
                markCode: "M",
              },
            ],
            finalAnswer: "5 m/s",
            commonErrors: ["Units error — cm vs m.", "Wrong formula."],
          },
        },
        {
          id: "eph10-u4-motion-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Investigating acceleration of a trolley on a ramp.",
          parts: [
            { label: "a", prompt: "Describe equipment and setup.", marks: 3 },
            { label: "b", prompt: "Describe measurement procedure.", marks: 3 },
            { label: "c", prompt: "How to calculate acceleration?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Acceleration experiment",
                statement:
                  "Measure distance/time or velocity, calculate a = Δv/Δt.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Trolley, ramp, ticker timer/light gates, masses.",
                marks: 2,
                markCode: "AO1",
                part: "a",
              },
              {
                reasoning: "(a) Measure incline angle/mass.",
                marks: 1,
                markCode: "AO1",
                part: "a",
              },
              {
                reasoning:
                  "(b) Release trolley, record motion, repeat 3+ times.",
                marks: 2,
                markCode: "AO3",
                part: "b",
              },
              {
                reasoning: "(b) Calculate speeds/velocities.",
                marks: 1,
                markCode: "AO3",
                part: "b",
              },
              {
                reasoning: "(c) a = (v₂−v₁)/t or gradient of v-t graph.",
                marks: 2,
                markCode: "AO2",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) trolley+ramp+timer (b) release+record+repeat (c) Δv/Δt",
            commonErrors: ["No repeats.", "Wrong formula."],
          },
        },
      ],
    },
    {
      id: "eph10-u4-forces",
      title: "Investigating Forces and Energy",
      skill: "Investigate forces, moments and energy transfers.",
      lesson: {
        sections: [
          {
            heading: "Force experiments",
            body: "**Hooke's law**: spring balance + ruler — extend spring, plot force vs extension, gradient = spring constant. Stay within elastic limit.\n\n**Moments**: metre rule balanced on pivot, hang masses at distances — anticlockwise moment = clockwise moment. **Friction**: spring balance pulls block, reads force at constant speed.\n\n**Terminal velocity**: drop object, measure fall time/distance — velocity increases then constant when drag = weight.",
          },
          {
            heading: "Energy experiments",
            body: "**PE/KE**: rollercoaster model — measure heights, calculate PE = mgh, KE = ½mv². **Efficiency**: useful energy out ÷ total energy in — e.g., electric motor lifting mass.\n\n**Safety**: heavy masses drop — clear area; springs under tension — wear eye protection; electrical — check insulation.",
          },
        ],
        keyFormulas: [
          {
            name: "Hooke's law",
            statement: "F = kx — force proportional to extension.",
          },
          {
            name: "Moments",
            statement: "Moment = force × perpendicular distance.",
          },
        ],
        workedExample: {
          problem: "Force 4N extends spring 0.08m. Spring constant?",
          solution: "k = F/x = 4/0.08 = 50 N/m.",
        },
      },
      questions: [
        {
          id: "eph10-u4-forces-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does the gradient of a force-extension graph give?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Speed" },
              { id: "b", text: "Mass" },
              { id: "c", text: "Spring constant" },
              { id: "d", text: "Energy" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Hooke's law",
                statement: "F = kx — gradient = k.",
              },
            ],
            steps: [
              {
                reasoning: "Gradient = spring constant.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Spring constant",
            commonErrors: ["Mass confused."],
          },
        },
        {
          id: "eph10-u4-forces-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why does a falling object reach terminal velocity?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Terminal velocity",
                statement:
                  "Drag increases with speed — equals weight at terminal.",
              },
            ],
            steps: [
              {
                reasoning: "Drag force increases with speed.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "When drag = weight, net force = 0.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Constant speed — terminal velocity.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Drag = weight at terminal velocity — constant speed.",
            commonErrors: ["Keeps accelerating.", "No force balance."],
          },
        },
        {
          id: "eph10-u4-forces-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the moment balance equation for a metre rule.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Moments",
                statement:
                  "Anticlockwise moments = clockwise moments at equilibrium.",
              },
            ],
            steps: [
              {
                reasoning: "Moment = force × distance from pivot.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Sum clockwise = sum anticlockwise.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Used to find unknown masses/positions.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Equilibrium = balanced moments.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "CW moments = ACW moments — equilibrium condition.",
            commonErrors: ["Add forces instead.", "No pivot link."],
          },
        },
        {
          id: "eph10-u4-forces-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Investigating Hooke's law with a spring.",
          parts: [
            { label: "a", prompt: "Describe apparatus and method.", marks: 3 },
            { label: "b", prompt: "What should the graph show?", marks: 3 },
            { label: "c", prompt: "How to find spring constant?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Hooke's law experiment",
                statement:
                  "Measure force vs extension — linear within elastic limit.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Spring, ruler, masses/hook, clamp stand.",
                marks: 2,
                markCode: "AO1",
                part: "a",
              },
              {
                reasoning:
                  "(a) Add masses gradually, measure extension each time.",
                marks: 1,
                markCode: "AO3",
                part: "a",
              },
              {
                reasoning: "(b) Straight line through origin — F ∝ x.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Deviates at elastic limit.",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(c) k = gradient of force-extension graph.",
                marks: 2,
                markCode: "AO2",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) spring+masses+ruler (b) straight line, elastic limit (c) gradient = k",
            commonErrors: ["Beyond elastic limit.", "No graph."],
          },
        },
      ],
    },
  ],
};
