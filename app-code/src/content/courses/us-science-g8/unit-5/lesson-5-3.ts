import type { Lesson } from "../../../types.ts";

export const lesson53: Lesson = {
  id: "s8-u5-lesson-5-3",
  code: "5-3",
  title: "Motion Problems and Applications",
  goal: "I CAN solve multi-step motion problems involving speed, velocity, acceleration and forces in real-world contexts.",
  standards: [
    "MS-PS2-1",
    "MS-PS2-2",
    "SEP: Developing and Using Models",
    "SEP: Analyzing and Interpreting Data",
  ],
  vocabulary: [
    {
      term: "Average speed",
      definition: "Total distance divided by total time.",
    },
    {
      term: "Average velocity",
      definition: "Total displacement divided by total time.",
    },
    { term: "Instantaneous speed", definition: "Speed at a specific moment." },
    {
      term: "Uniform motion",
      definition: "Constant speed in a straight line.",
    },
    { term: "Non-uniform motion", definition: "Changing speed or direction." },
    {
      term: "Free fall",
      definition:
        "Motion under gravity alone, with acceleration $g \\approx 9.8$ m/s².",
    },
    {
      term: "Projectile motion",
      definition: "Motion under gravity with initial horizontal velocity.",
    },
  ],
  concepts: [
    {
      id: "s8-u5-motion-problems",
      title: "Solving motion problems",
      skill:
        "Apply motion equations to solve problems involving distance, time, speed and acceleration.",
      lesson: {
        sections: [
          {
            heading: "Key equations",
            body: "- **Speed**: $v = \\frac{d}{t}$ → $d = vt$ → $t = \\frac{d}{v}$\n- **Acceleration**: $a = \\frac{\\Delta v}{\\Delta t}$\n- **Final velocity**: $v_f = v_i + at$\n- **Distance with acceleration**: $d = v_i t + \\frac{1}{2}at^2$\n\nChoose the right equation based on what's given and what's needed.",
          },
          {
            heading: "Problem-solving strategy",
            body: "1. **Identify** what's given (distance, time, speed, acceleration).\n2. **Choose** the equation that relates them.\n3. **Substitute** values with units.\n4. **Solve** for the unknown.\n5. **Check** units and reasonableness.",
          },
        ],
        keyFormulas: [
          {
            name: "Speed equation",
            statement: "$v = d/t$; rearrange for any variable.",
          },
          {
            name: "Acceleration",
            statement: "$a = (v_f - v_i)/t$; $v_f = v_i + at$",
          },
          {
            name: "Distance with acceleration",
            statement: "$d = v_i t + \\frac{1}{2}at^2$",
          },
        ],
        workedExample: {
          problem:
            "A car accelerates from 10 m/s to 30 m/s in 4 seconds. How far does it travel?",
          solution:
            "$d = \\frac{v_i + v_f}{2} \\times t = \\frac{10 + 30}{2} \\times 4 = 20 \\times 4 = 80$ m.",
        },
      },
      questions: [
        {
          id: "s8-u5-problems-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A car travels 100 km in 2 hours. What is its speed?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "25 km/h" },
              { id: "b", text: "50 km/h" },
              { id: "c", text: "100 km/h" },
              { id: "d", text: "200 km/h" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Speed", statement: "$v = d/t$" },
            ],
            steps: [
              { reasoning: "$v = 100/2 = 50$ km/h.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(b)** 50 km/h.",
            commonErrors: ["Multiplying instead of dividing."],
          },
        },
        {
          id: "s8-u5-problems-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A train travels at 20 m/s for 30 seconds. How far does it go?",
          response: {
            type: "numeric",
            parts: [{ label: "Distance", answer: 600, unit: "m" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Distance", statement: "$d = vt$" },
            ],
            steps: [
              {
                reasoning: "$d = 20 \\times 30$.",
                working: "600",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Answer: 600 m.",
                working: "600",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Check units: m/s × s = m.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "600 m",
            commonErrors: ["Using wrong formula."],
          },
        },
        {
          id: "s8-u5-problems-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A car accelerates from rest at 2 m/s² for 5 seconds. How far does it travel?",
          response: {
            type: "numeric",
            parts: [{ label: "Distance", answer: 25, unit: "m" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Distance with acceleration",
                statement: "$d = \\frac{1}{2}at^2$ (from rest)",
              },
            ],
            steps: [
              {
                reasoning: "$d = \\frac{1}{2} \\times 2 \\times 5^2$.",
                working: "25",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Answer: 25 m.",
                working: "25",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Alternatively: $v_f = 0 + 2 \\times 5 = 10$ m/s; average velocity = 5 m/s; $d = 5 \\times 5 = 25$ m.",
                marks: 2,
                markCode: "R",
              },
            ],
            finalAnswer: "25 m",
            commonErrors: ["Using $d = vt$ without finding final velocity."],
          },
        },
        {
          id: "s8-u5-problems-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A cyclist rides 10 km at 20 km/h, then 10 km at 10 km/h.",
          parts: [
            { label: "a", prompt: "Calculate time for each leg.", marks: 2 },
            {
              label: "b",
              prompt: "Calculate average speed for whole trip.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Why isn't average speed just (20+10)/2?",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Average speed",
                statement: "Total distance ÷ total time.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Leg 1: $t = 10/20 = 0.5$ h; Leg 2: $t = 10/10 = 1$ h.",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Total distance = 20 km; total time = 1.5 h; average speed = $20/1.5 = 13.3$ km/h.",
                marks: 3,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Because time spent at each speed differs; slower speed takes more time, so it has more weight.",
                marks: 3,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) 0.5 h, 1 h (b) 13.3 km/h (c) Slower speed takes more time → more weight.",
            commonErrors: ["Averaging speeds instead of total distance/time."],
          },
        },
      ],
    },
    {
      id: "s8-u5-free-fall",
      title: "Free Fall and Projectile Motion",
      skill: "Analyze objects in free fall and simple projectile motion.",
      lesson: {
        sections: [
          {
            heading: "Free fall",
            body: "**Free fall** is motion under gravity alone (ignoring air resistance). All objects fall with the same acceleration $g \\approx 9.8$ m/s² regardless of mass.\n\n- Velocity increases by 9.8 m/s each second.\n- Distance fallen increases with time squared.\n- At the same height, objects thrown together land together.",
          },
          {
            heading: "Projectile motion",
            body: "**Projectile motion** combines horizontal and vertical motion:\n\n- **Horizontal**: constant velocity (no horizontal force).\n- **Vertical**: constant acceleration due to gravity.\n\nThe path is a **parabola**. Maximum height occurs when vertical velocity = 0.",
          },
        ],
        keyFormulas: [
          {
            name: "Free fall",
            statement: "$a = g = 9.8$ m/s²; all objects fall equally.",
          },
          {
            name: "Projectile motion",
            statement:
              "Horizontal = constant velocity; vertical = gravity acceleration.",
          },
          { name: "Parabola", statement: "Path of projectile is parabolic." },
        ],
        workedExample: {
          problem:
            "A ball is dropped from 20 m. How long to hit the ground? ($g = 9.8$ m/s²)",
          solution:
            "$d = \\frac{1}{2}gt^2$ → $20 = \\frac{1}{2} \\times 9.8 \\times t^2$ → $t = \\sqrt{40/9.8} \\approx 2.0$ s.",
        },
      },
      questions: [
        {
          id: "s8-u5-freefall-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the acceleration due to gravity on Earth?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "9.8 m/s" },
              { id: "b", text: "9.8 m/s²" },
              { id: "c", text: "19.6 m/s²" },
              { id: "d", text: "1 m/s²" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Gravity",
                statement: "$g \\approx 9.8$ m/s².",
              },
            ],
            steps: [
              {
                reasoning: "Acceleration due to gravity is ~9.8 m/s².",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** 9.8 m/s².",
            commonErrors: ["Using wrong units."],
          },
        },
        {
          id: "s8-u5-freefall-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A feather and a hammer are dropped together in a vacuum. Which hits first?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Free fall",
                statement: "All objects fall at same rate in vacuum.",
              },
            ],
            steps: [
              {
                reasoning: "In a vacuum, there's no air resistance.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Both objects accelerate at $g = 9.8$ m/s² regardless of mass.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "They hit the ground at the same time.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "They hit at the same time — gravity accelerates all objects equally.",
            commonErrors: ["Saying heavier object falls faster."],
          },
        },
        {
          id: "s8-u5-freefall-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A ball is thrown horizontally at 10 m/s from a height of 5 m.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Projectile motion",
                statement: "Horizontal = constant; vertical = gravity.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Vertical: falls 5 m under gravity; time = $\\sqrt{2 \\times 5/9.8} \\approx 1.0$ s.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Horizontal: constant 10 m/s for 1 s → travels 10 m.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Path is parabolic; hits ground 10 m away.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Vertical velocity at landing = $9.8 \\times 1.0 = 9.8$ m/s down.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Lands ~10 m away after ~1 s; vertical velocity ~9.8 m/s down.",
            commonErrors: ["Treating horizontal and vertical as same."],
          },
        },
        {
          id: "s8-u5-freefall-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A ball is dropped from a 45 m building.",
          parts: [
            {
              label: "a",
              prompt: "How long to hit the ground? ($g = 9.8$)",
              marks: 3,
            },
            {
              label: "b",
              prompt: "What is its velocity just before impact?",
              marks: 2,
            },
            {
              label: "c",
              prompt: "If thrown downward at 5 m/s initially, how long?",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Free fall equations",
                statement:
                  "$d = \\frac{1}{2}gt^2$; $v = gt$; $d = v_0 t + \\frac{1}{2}gt^2$",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "$45 = \\frac{1}{2} \\times 9.8 \\times t^2$ → $t = \\sqrt{90/9.8} \\approx 3.0$ s.",
                marks: 3,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$v = gt = 9.8 \\times 3.0 = 29.4$ m/s down.",
                marks: 2,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "$45 = 5t + 4.9t^2$ → solve quadratic → $t \\approx 2.7$ s.",
                marks: 3,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) ~3.0 s (b) ~29.4 m/s (c) ~2.7 s.",
            commonErrors: ["Forgetting initial velocity in part (c)."],
          },
        },
      ],
    },
    {
      id: "s8-u5-applications",
      title: "Real-World Motion Applications",
      skill:
        "Apply motion concepts to real-world situations: vehicles, sports, safety.",
      lesson: {
        sections: [
          {
            heading: "Vehicles and transport",
            body: "Motion concepts apply to vehicles:\n\n- **Speed limits**: based on stopping distance and reaction time.\n- **Braking distance**: $d = \\frac{v^2}{2a}$ — increases with speed squared.\n- **Acceleration**: how quickly vehicles speed up or slow down.\n- **Safety features**: seatbelts, airbags, crumple zones use force concepts.",
          },
          {
            heading: "Sports and everyday motion",
            body: "- **Athletics**: sprint times, throwing distances, projectile motion.\n- **Driving**: reaction time, braking distance, following distance.\n- **Safety**: why helmets, seatbelts, and speed limits matter.",
          },
        ],
        keyFormulas: [
          {
            name: "Stopping distance",
            statement: "Reaction distance + braking distance.",
          },
          {
            name: "Braking distance",
            statement: "$d = \\frac{v^2}{2a}$ — increases with speed squared.",
          },
          {
            name: "Reaction time",
            statement: "Time to perceive and respond to hazards.",
          },
        ],
        workedExample: {
          problem:
            "Why does braking distance increase dramatically with speed?",
          solution:
            "Because $d \\propto v^2$ — doubling speed quadruples braking distance.",
        },
      },
      questions: [
        {
          id: "s8-u5-applications-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is stopping distance?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only braking distance" },
              { id: "b", text: "Reaction distance + braking distance" },
              { id: "c", text: "Distance traveled at top speed" },
              { id: "d", text: "Distance to nearest exit" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Stopping distance",
                statement: "Reaction distance + braking distance.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Stopping distance includes reaction time distance plus actual braking distance.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Reaction distance + braking distance.",
            commonErrors: ["Ignoring reaction distance."],
          },
        },
        {
          id: "s8-u5-applications-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why are speed limits important for safety?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Speed and safety",
                statement:
                  "Higher speed = longer stopping distance = more danger.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Higher speed increases braking distance (proportional to $v^2$).",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Higher speed increases reaction distance (same reaction time, more distance).",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Higher speed increases impact force in collisions (greater kinetic energy).",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Higher speed = longer stopping distance + greater impact force.",
            commonErrors: ["Saying speed doesn't affect safety."],
          },
        },
        {
          id: "s8-u5-applications-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how crumple zones in cars protect passengers.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Crash safety",
                statement:
                  "Crumple zones increase collision time, reducing force.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Crumple zones deform during collision, increasing impact time.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Longer impact time means lower average force on passengers ($F = ma$, and $a = \\Delta v/\\Delta t$).",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Lower force reduces injury risk.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "This is Newton's second law applied to safety.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Crumple zones increase collision time → reduce force on passengers.",
            commonErrors: ["Saying crumple zones make cars stronger."],
          },
        },
        {
          id: "s8-u5-applications-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A driver travels at 30 m/s with a reaction time of 0.5 s and braking deceleration of 8 m/s².",
          parts: [
            { label: "a", prompt: "Calculate reaction distance.", marks: 2 },
            { label: "b", prompt: "Calculate braking distance.", marks: 3 },
            {
              label: "c",
              prompt: "Calculate total stopping distance.",
              marks: 1,
            },
            {
              label: "d",
              prompt: "How does doubling speed affect stopping distance?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Stopping distance",
                statement:
                  "$d_{reaction} = v \\times t_{reaction}$; $d_{braking} = \\frac{v^2}{2a}$",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$d_{reaction} = 30 \\times 0.5 = 15$ m.",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "$d_{braking} = \\frac{30^2}{2 \\times 8} = \\frac{900}{16} = 56.25$ m.",
                marks: 3,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Total = $15 + 56.25 = 71.25$ m.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning:
                  "Braking distance quadruples (since $d \\propto v^2$); reaction distance doubles.",
                marks: 2,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) 15 m (b) 56.25 m (c) 71.25 m (d) Braking ×4, reaction ×2.",
            commonErrors: ["Forgetting reaction distance."],
          },
        },
      ],
    },
  ],
};
