import type { Lesson } from "../../../types.ts";

export const lesson62: Lesson = {
  id: "phys11-u6-lesson-6-2",
  code: "6-2",
  title: "Relative Motion and Acceleration",
  goal: "I CAN analyze motion in different reference frames and distinguish speed, velocity, and acceleration.",
  standards: [
    "HS-PS2-1",
    "SEP: Using Mathematics and Computational Thinking",
    "CCC: Systems and System Models",
  ],
  vocabulary: [
    {
      term: "Reference frame",
      definition: "Coordinate system for measuring motion.",
    },
    {
      term: "Relative velocity",
      definition: "Velocity of one object as seen from another.",
    },
    { term: "Speed", definition: "Scalar — how fast (magnitude only)." },
    { term: "Velocity", definition: "Vector — speed + direction." },
    { term: "Acceleration", definition: "Rate of change of velocity." },
    { term: "Uniform motion", definition: "Constant velocity." },
    {
      term: "Non-uniform motion",
      definition: "Changing velocity (accelerating).",
    },
  ],
  concepts: [
    {
      id: "phys11-u6-relative",
      title: "Relative motion",
      skill: "Calculate velocities in different reference frames.",
      lesson: {
        sections: [
          {
            heading: "Relative velocity",
            body: "$$\\vec{v}_{A/B} = \\vec{v}_A - \\vec{v}_B$$\n\nVelocity of A as seen from B = A's velocity minus B's velocity.",
          },
          {
            heading: "Examples",
            body: "- Train moving 20 m/s east; person walks 2 m/s east inside → ground sees 22 m/s; train sees 2 m/s.\n- Two cars same speed same direction → relative velocity = 0.",
          },
        ],
        keyFormulas: [
          { name: "Relative velocity", statement: "$v_{A/B} = v_A - v_B$" },
          { name: "Same direction", statement: "Subtraction" },
          { name: "Opposite direction", statement: "Addition of magnitudes" },
        ],
        workedExample: {
          problem:
            "Boat moves 5 m/s north in river flowing 3 m/s east. Velocity relative to shore?",
          solution: "$v = \\sqrt{5^2 + 3^2} = \\sqrt{34} \\approx 5.83$ m/s.",
        },
      },
      questions: [
        {
          id: "phys11-u6-relative-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is relative velocity?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Absolute velocity" },
              { id: "b", text: "Velocity in one frame minus another" },
              { id: "c", text: "Speed only" },
              { id: "d", text: "Acceleration" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Relative velocity",
                statement: "v_A − v_B.",
              },
            ],
            steps: [
              {
                reasoning: "Relative = difference between frames.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Velocity in one frame minus another",
            commonErrors: ["Absolute velocity."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "phys11-u6-relative-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Car A moves 30 m/s east, Car B moves 20 m/s east. B's velocity relative to A?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Relative velocity",
                statement: "$v_{B/A} = v_B - v_A$",
              },
            ],
            steps: [
              {
                reasoning: "$v_{B/A} = 20 - 30 = -10$ m/s.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Negative → B moving west relative to A.",
                marks: 1,
                markCode: "R",
              },
              { reasoning: "Magnitude 10 m/s.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "10 m/s west.",
            commonErrors: ["Wrong direction."],
            examinerNote: "M1, R1, A1.",
          },
        },
        {
          id: "phys11-u6-relative-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Swimmer swims 2 m/s perpendicular to river flowing 1 m/s. Resultant velocity?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Vector addition",
                statement: "$v = \\sqrt{v_x^2 + v_y^2}$",
              },
            ],
            steps: [
              {
                reasoning: "Components: 2 m/s (swim) + 1 m/s (river).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Resultant: $\\sqrt{2^2 + 1^2} = \\sqrt{5} \\approx 2.24$ m/s.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Direction: arctan(1/2) ≈ 26.6° downstream.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Answer: 2.24 m/s at 26.6°.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "2.24 m/s at 26.6° downstream.",
            commonErrors: ["Adding directly."],
            examinerNote: "M3, A1.",
          },
        },
        {
          id: "phys11-u6-relative-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Two objects move on x-axis: A at x=0 moving +5 m/s, B at x=20 moving −3 m/s.",
          parts: [
            { label: "a", prompt: "When do they meet?", marks: 4 },
            { label: "b", prompt: "Position at meeting?", marks: 2 },
            { label: "c", prompt: "Relative velocity?", marks: 2 },
            { label: "d", prompt: "Verify answer?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Relative motion",
                statement: "Solve for equal positions.",
              },
            ],
            steps: [
              {
                reasoning: "$x_A = 5t$; $x_B = 20 - 3t$.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Set equal: $5t = 20 - 3t$ → $8t = 20$ → t = 2.5s.",
                marks: 2,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Answer: 2.5 s.",
                marks: 1,
                markCode: "A",
                part: "a",
              },
              {
                reasoning: "$x = 5(2.5) = 12.5$ m.",
                marks: 2,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "$v_{A/B} = 5 - (-3) = 8$ m/s.",
                marks: 2,
                markCode: "M",
                part: "c",
              },
              {
                reasoning: "Check: 20m gap / 8 m/s = 2.5s ✓.",
                marks: 2,
                markCode: "R",
                part: "d",
              },
            ],
            finalAnswer: "(a) 2.5s (b) 12.5m (c) 8 m/s (d) verified.",
            commonErrors: ["Wrong equation setup."],
            examinerNote: "4+2+2+2 = 10.",
          },
        },
      ],
    },
    {
      id: "phys11-u6-acceleration",
      title: "Acceleration and velocity",
      skill:
        "Distinguish speed, velocity, and acceleration; solve acceleration problems.",
      lesson: {
        sections: [
          {
            heading: "Speed vs velocity vs acceleration",
            body: "- **Speed**: scalar, magnitude only.\n- **Velocity**: vector, speed + direction.\n- **Acceleration**: rate of change of velocity (can change speed or direction).\n\nCircular motion: constant speed but changing velocity → acceleration exists.",
          },
          {
            heading: "Acceleration types",
            body: "- **Positive**: speeding up in positive direction.\n- **Negative**: slowing down (deceleration) or speeding up in negative direction.\n- **Centripetal**: toward center of circle.",
          },
        ],
        keyFormulas: [
          {
            name: "Acceleration",
            statement: "$a = \\frac{\\Delta v}{\\Delta t}$",
          },
          { name: "Centripetal", statement: "$a_c = \\frac{v^2}{r}$" },
          { name: "Speed vs velocity", statement: "Scalar vs vector" },
        ],
        workedExample: {
          problem: "Car goes 0→60 km/h in 5s. Acceleration?",
          solution: "$a = (60-0)/5 = 12$ km/h/s = 3.33 m/s².",
        },
      },
      questions: [
        {
          id: "phys11-u6-accel-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What's the difference between speed and velocity?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Same thing" },
              { id: "b", text: "Speed is scalar, velocity is vector" },
              { id: "c", text: "Velocity is faster" },
              { id: "d", text: "Speed includes direction" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Speed vs velocity",
                statement: "Scalar vs vector.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Speed = magnitude; velocity = magnitude + direction.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Speed scalar, velocity vector",
            commonErrors: ["Same thing."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "phys11-u6-accel-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Object goes from 10 m/s to 30 m/s in 4s. Acceleration?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Acceleration",
                statement: "$a = \\Delta v/\\Delta t$",
              },
            ],
            steps: [
              {
                reasoning: "$\\Delta v = 30 - 10 = 20$ m/s.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$a = 20/4 = 5$ m/s².", marks: 1, markCode: "M" },
              { reasoning: "Answer: 5 m/s².", marks: 1, markCode: "A" },
            ],
            finalAnswer: "5 m/s².",
            commonErrors: ["Wrong Δv."],
            examinerNote: "M2, A1.",
          },
        },
        {
          id: "phys11-u6-accel-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Object in circular motion at 10 m/s in 5m radius. Centripetal acceleration?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Centripetal",
                statement: "$a_c = v^2/r$",
              },
            ],
            steps: [
              { reasoning: "$a_c = 10^2/5 = 100/5$.", marks: 1, markCode: "M" },
              { reasoning: "= 20 m/s².", marks: 1, markCode: "M" },
              {
                reasoning: "Direction: toward center.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Answer: 20 m/s² centripetal.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "20 m/s² toward center.",
            commonErrors: ["Not toward center."],
            examinerNote: "M2, R1, A1.",
          },
        },
        {
          id: "phys11-u6-accel-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Analyze motion: car accelerates 0→20 m/s in 4s, constant 4s, decelerates to 0 in 2s.",
          parts: [
            { label: "a", prompt: "Acceleration each phase?", marks: 3 },
            { label: "b", prompt: "Displacement each phase?", marks: 3 },
            { label: "c", prompt: "Total displacement?", marks: 2 },
            { label: "d", prompt: "Average acceleration?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Motion analysis",
                statement: "Break into phases.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Phase1: a = 20/4 = 5 m/s²; Phase2: a = 0; Phase3: a = -20/2 = -10 m/s².",
                marks: 3,
                markCode: "M",
                part: "a",
              },
              {
                reasoning:
                  "Phase1: x = ½(5)(16) = 40m; Phase2: x = 20×4 = 80m; Phase3: x = ½(10)(4) = 20m.",
                marks: 3,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Total = 40+80+20 = 140m.",
                marks: 2,
                markCode: "M",
                part: "c",
              },
              {
                reasoning: "a_avg = (0-0)/10 = 0 (started and ended at rest).",
                marks: 2,
                markCode: "R",
                part: "d",
              },
            ],
            finalAnswer: "(a) 5,0,-10 (b) 40,80,20 (c) 140m (d) 0.",
            commonErrors: ["Wrong phase calculations."],
            examinerNote: "3+3+2+2 = 10.",
          },
        },
      ],
    },
    {
      id: "phys11-u6-free-fall",
      title: "Free fall and vertical motion",
      skill: "Analyze objects under gravity only.",
      lesson: {
        sections: [
          {
            heading: "Free fall",
            body: "All objects fall with same acceleration g ≈ 9.8 m/s² (neglecting air resistance).\n\n- Vertical velocity: $v = v_0 - gt$\n- Vertical position: $y = y_0 + v_0t - \\frac{1}{2}gt^2$",
          },
          {
            heading: "Key points",
            body: "- Mass doesn't affect fall rate (no air resistance).\n- At max height: v = 0.\n- Time up = time down.\n- Landing speed = launch speed (if same height).",
          },
        ],
        keyFormulas: [
          { name: "Free fall", statement: "a = g ≈ 9.8 m/s²" },
          { name: "v = v₀ − gt", statement: "Vertical velocity" },
          { name: "y = v₀t − ½gt²", statement: "Vertical position" },
        ],
        workedExample: {
          problem: "Ball dropped from 20m. Time to hit ground?",
          solution: "$20 = \\frac{1}{2}(9.8)t^2$ → t ≈ 2.02s.",
        },
      },
      questions: [
        {
          id: "phys11-u6-freefall-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is free fall acceleration?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "9.8 m/s²" },
              { id: "b", text: "10 m/s²" },
              { id: "c", text: "Depends on mass" },
              { id: "d", text: "0 m/s²" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Free fall",
                statement: "g ≈ 9.8 m/s².",
              },
            ],
            steps: [
              {
                reasoning: "g ≈ 9.8 m/s² near Earth's surface.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** 9.8 m/s²",
            commonErrors: ["Depends on mass."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "phys11-u6-freefall-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Ball thrown up at 15 m/s. Time to reach max height? (g=10)",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "v = v₀ - gt",
                statement: "v=0 at top.",
              },
            ],
            steps: [
              { reasoning: "At top: v = 0.", marks: 1, markCode: "R" },
              {
                reasoning: "$0 = 15 - 10t$ → t = 1.5s.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Answer: 1.5 s.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1.5 s.",
            commonErrors: ["Wrong sign."],
            examinerNote: "R1, M1, A1.",
          },
        },
        {
          id: "phys11-u6-freefall-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Two objects dropped from same height: 1kg and 10kg. Which lands first?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Free fall",
                statement: "Mass doesn't affect g.",
              },
            ],
            steps: [
              {
                reasoning: "Both have same acceleration g.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Same height, same initial velocity (0).",
                marks: 1,
                markCode: "R",
              },
              { reasoning: "Land at same time.", marks: 1, markCode: "R" },
              { reasoning: "Answer: simultaneously.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Same time — mass irrelevant.",
            commonErrors: ["Heavier falls faster."],
            examinerNote: "R3, A1.",
          },
        },
        {
          id: "phys11-u6-freefall-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Ball thrown up at 25 m/s from ground (g=10).",
          parts: [
            { label: "a", prompt: "Time to max height?", marks: 2 },
            { label: "b", prompt: "Max height?", marks: 3 },
            { label: "c", prompt: "Total flight time?", marks: 2 },
            { label: "d", prompt: "Landing speed?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Free fall",
                statement: "Symmetric up/down.",
              },
            ],
            steps: [
              {
                reasoning: "$t = v_0/g = 25/10 = 2.5$ s.",
                marks: 2,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "$h = v_0^2/2g = 625/20 = 31.25$ m.",
                marks: 2,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Answer: 31.25 m.",
                marks: 1,
                markCode: "A",
                part: "b",
              },
              {
                reasoning: "Total time = 2×2.5 = 5 s.",
                marks: 2,
                markCode: "M",
                part: "c",
              },
              {
                reasoning: "$v = v_0 = 25$ m/s downward (symmetric).",
                marks: 2,
                markCode: "R",
                part: "d",
              },
              {
                reasoning: "Answer: 25 m/s.",
                marks: 1,
                markCode: "A",
                part: "d",
              },
            ],
            finalAnswer: "(a) 2.5s (b) 31.25m (c) 5s (d) 25 m/s.",
            commonErrors: ["Different landing speed."],
            examinerNote: "2+3+2+3 = 10.",
          },
        },
      ],
    },
  ],
};
