import type { Lesson } from "../../../types.ts";

export const lesson61: Lesson = {
  id: "phys11-u6-lesson-6-1",
  code: "6-1",
  title: "Motion Graphs and Kinematics",
  goal: "I CAN interpret and construct position-time, velocity-time, and acceleration-time graphs.",
  standards: [
    "HS-PS2-1",
    "SEP: Analyzing and Interpreting Data",
    "SEP: Using Mathematics and Computational Thinking",
  ],
  vocabulary: [
    {
      term: "Position-time graph",
      definition: "Graph of position vs time; slope = velocity.",
    },
    {
      term: "Velocity-time graph",
      definition:
        "Graph of velocity vs time; slope = acceleration, area = displacement.",
    },
    {
      term: "Acceleration-time graph",
      definition: "Graph of acceleration vs time; area = velocity change.",
    },
    { term: "Slope", definition: "Rate of change on a graph." },
    {
      term: "Area under curve",
      definition: "Integral quantity — displacement or velocity change.",
    },
    {
      term: "Instantaneous velocity",
      definition: "Velocity at a specific moment.",
    },
    {
      term: "Uniform acceleration",
      definition: "Constant acceleration over time.",
    },
  ],
  concepts: [
    {
      id: "phys11-u6-motion-graphs",
      title: "Interpreting motion graphs",
      skill: "Extract velocity, acceleration, and displacement from graphs.",
      lesson: {
        sections: [
          {
            heading: "Position-time graph",
            body: "- **Slope** = velocity.\n- Flat = stationary.\n- Steep = fast.\n- Curved = accelerating.\n- Positive slope = moving forward; negative = backward.",
          },
          {
            heading: "Velocity-time graph",
            body: "- **Slope** = acceleration.\n- **Area** = displacement.\n- Flat = constant velocity.\n- Above axis = positive direction; below = negative.",
          },
          {
            heading: "Acceleration-time graph",
            body: "- **Area** = change in velocity.\n- Flat = constant acceleration.\n- Zero = constant velocity.",
          },
        ],
        keyFormulas: [
          { name: "x-t slope", statement: "Velocity" },
          { name: "v-t slope", statement: "Acceleration" },
          { name: "v-t area", statement: "Displacement" },
        ],
        workedExample: {
          problem:
            "v-t graph: v=0→10 m/s over 5s, then constant 10 m/s for 5s. Displacement?",
          solution: "Triangle: ½×5×10=25m + rectangle: 5×10=50m → total 75m.",
        },
      },
      questions: [
        {
          id: "phys11-u6-mograph-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does the slope of a position-time graph represent?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Acceleration" },
              { id: "b", text: "Velocity" },
              { id: "c", text: "Displacement" },
              { id: "d", text: "Force" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "x-t graph",
                statement: "Slope = velocity.",
              },
            ],
            steps: [
              { reasoning: "x-t slope = dx/dt = v.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Velocity",
            commonErrors: ["Confusing with v-t slope."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "phys11-u6-mograph-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "On a v-t graph, what do slope and area represent?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "v-t graph",
                statement: "Slope = acceleration; area = displacement.",
              },
            ],
            steps: [
              {
                reasoning: "Slope = dv/dt = acceleration.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Area under curve = displacement.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Flat line = constant velocity.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Slope = acceleration; area = displacement.",
            commonErrors: ["Swapping slope and area."],
            examinerNote: "M2, A1.",
          },
        },
        {
          id: "phys11-u6-mograph-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Object accelerates from 0 to 20 m/s in 4s, then constant for 6s. Find displacement.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "v-t area",
                statement: "Triangle + rectangle.",
              },
            ],
            steps: [
              {
                reasoning: "Triangle: ½ × 4 × 20 = 40 m.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Rectangle: 6 × 20 = 120 m.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Total = 160 m.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 160 m.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "160 m.",
            commonErrors: ["Missing triangle area."],
            examinerNote: "M3, A1.",
          },
        },
        {
          id: "phys11-u6-mograph-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A car's v-t graph shows: 0→15 m/s in 3s, constant 15 m/s for 4s, decelerate to 0 in 2s.",
          parts: [
            {
              label: "a",
              prompt: "Displacement during acceleration?",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Displacement during constant velocity?",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Displacement during deceleration?",
              marks: 2,
            },
            { label: "d", prompt: "Total displacement?", marks: 2 },
            { label: "e", prompt: "Average velocity?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "v-t analysis",
                statement: "Area = displacement.",
              },
            ],
            steps: [
              {
                reasoning: "Triangle: ½×3×15 = 22.5 m.",
                marks: 2,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Rectangle: 4×15 = 60 m.",
                marks: 2,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Triangle: ½×2×15 = 15 m.",
                marks: 2,
                markCode: "M",
                part: "c",
              },
              {
                reasoning: "Total = 22.5+60+15 = 97.5 m.",
                marks: 2,
                markCode: "M",
                part: "d",
              },
              {
                reasoning: "v_avg = 97.5/9 = 10.83 m/s.",
                marks: 1,
                markCode: "M",
                part: "e",
              },
              {
                reasoning: "Answer: 10.83 m/s.",
                marks: 1,
                markCode: "A",
                part: "e",
              },
            ],
            finalAnswer: "(a) 22.5 (b) 60 (c) 15 (d) 97.5 m (e) 10.83 m/s.",
            commonErrors: ["Wrong total time."],
            examinerNote: "2+2+2+2+2 = 10.",
          },
        },
      ],
    },
    {
      id: "phys11-u6-kinematics-equations",
      title: "Kinematic equations",
      skill: "Apply kinematic equations to solve motion problems.",
      lesson: {
        sections: [
          {
            heading: "Kinematic equations",
            body: "For constant acceleration:\n- $v = v_0 + at$\n- $x = x_0 + v_0t + \\frac{1}{2}at^2$\n- $v^2 = v_0^2 + 2a(x - x_0)$",
          },
          {
            heading: "Problem-solving steps",
            body: "1. Identify knowns (v₀, v, a, t, x).\n2. Choose equation with those variables.\n3. Substitute and solve.\n4. Check units and reasonableness.",
          },
        ],
        keyFormulas: [
          { name: "v = v₀ + at", statement: "Velocity-time" },
          { name: "x = v₀t + ½at²", statement: "Position-time" },
          { name: "v² = v₀² + 2ax", statement: "Velocity-position" },
        ],
        workedExample: {
          problem: "Car accelerates 0→20 m/s in 5s. Distance?",
          solution: "$x = 0 + 0(5) + \\frac{1}{2}(4)(25) = 50$ m.",
        },
      },
      questions: [
        {
          id: "phys11-u6-kinem-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which equation relates velocity, initial velocity, acceleration, and time?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x = v_0t + \\frac{1}{2}at^2$" },
              { id: "b", text: "$v = v_0 + at$" },
              { id: "c", text: "$v^2 = v_0^2 + 2ax$" },
              { id: "d", text: "All of them" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Kinematic equations",
                statement: "v = v₀ + at.",
              },
            ],
            steps: [
              {
                reasoning: "v = v₀ + at is the velocity-time equation.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** v = v₀ + at",
            commonErrors: ["Wrong equation."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "phys11-u6-kinem-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Object starts at rest, accelerates at 3 m/s² for 4s. Final velocity?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "v = v₀ + at",
                statement: "v = 0 + 3×4",
              },
            ],
            steps: [
              { reasoning: "v₀ = 0, a = 3, t = 4.", marks: 1, markCode: "M" },
              {
                reasoning: "$v = 0 + 3 \\times 4 = 12$ m/s.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Answer: 12 m/s.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "12 m/s.",
            commonErrors: ["Wrong equation."],
            examinerNote: "M1, M1, A1.",
          },
        },
        {
          id: "phys11-u6-kinem-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Ball thrown upward at 20 m/s. Time to reach max height? (g=10)",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "v = v₀ + at",
                statement: "v=0 at top.",
              },
            ],
            steps: [
              { reasoning: "At max height, v = 0.", marks: 1, markCode: "R" },
              {
                reasoning: "$0 = 20 + (-10)t$ → t = 2s.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Answer: 2 s.", marks: 1, markCode: "M" },
              {
                reasoning: "Time up = time down (symmetric).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "2 s.",
            commonErrors: ["Wrong sign for g."],
            examinerNote: "R1, M2, A1.",
          },
        },
        {
          id: "phys11-u6-kinem-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Car accelerates from 10 m/s to 30 m/s over 100 m.",
          parts: [
            { label: "a", prompt: "Acceleration?", marks: 3 },
            { label: "b", prompt: "Time?", marks: 3 },
            { label: "c", prompt: "Verify with another equation?", marks: 2 },
            { label: "d", prompt: "Reasonableness check?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Kinematic equations",
                statement: "Choose appropriate equation.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$v^2 = v_0^2 + 2ax$: $900 = 100 + 2a(100)$ → a = 4 m/s².",
                marks: 2,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Answer: 4 m/s².",
                marks: 1,
                markCode: "A",
                part: "a",
              },
              {
                reasoning: "$v = v_0 + at$: $30 = 10 + 4t$ → t = 5s.",
                marks: 2,
                markCode: "M",
                part: "b",
              },
              { reasoning: "Answer: 5 s.", marks: 1, markCode: "A", part: "b" },
              {
                reasoning:
                  "Check: $x = 10(5) + \\frac{1}{2}(4)(25) = 50 + 50 = 100$ ✓.",
                marks: 2,
                markCode: "R",
                part: "c",
              },
              {
                reasoning: "Values reasonable for car acceleration.",
                marks: 2,
                markCode: "A",
                part: "d",
              },
            ],
            finalAnswer: "(a) 4 m/s² (b) 5 s (c) verified (d) reasonable.",
            commonErrors: ["Wrong equation choice."],
            examinerNote: "3+3+2+2 = 10.",
          },
        },
      ],
    },
    {
      id: "phys11-u6-projectile",
      title: "Projectile motion",
      skill: "Analyze 2D motion under gravity.",
      lesson: {
        sections: [
          {
            heading: "Projectile motion",
            body: "Two independent motions:\n- **Horizontal**: constant velocity (no acceleration).\n- **Vertical**: constant acceleration (gravity).\n\nTime of flight determined by vertical motion only.",
          },
          {
            heading: "Key equations",
            body: "- Horizontal: $x = v_{0x}t$\n- Vertical: $y = v_{0y}t - \\frac{1}{2}gt^2$\n- Range: $R = \\frac{v_0^2 \\sin 2\\theta}{g}$",
          },
        ],
        keyFormulas: [
          { name: "Horizontal", statement: "$x = v_{0x}t$ (constant v)" },
          { name: "Vertical", statement: "$y = v_{0y}t - \\frac{1}{2}gt^2$" },
          { name: "Range", statement: "$R = \\frac{v_0^2 \\sin 2\\theta}{g}$" },
        ],
        workedExample: {
          problem: "Ball thrown at 45°, v₀=20 m/s. Range?",
          solution: "$R = 20^2 \\sin(90°)/10 = 400/10 = 40$ m.",
        },
      },
      questions: [
        {
          id: "phys11-u6-proj-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What determines projectile time of flight?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Horizontal velocity" },
              { id: "b", text: "Vertical velocity" },
              { id: "c", text: "Both equally" },
              { id: "d", text: "Launch angle only" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Projectile",
                statement: "Vertical motion determines time.",
              },
            ],
            steps: [
              {
                reasoning: "Vertical: up then down → determines flight time.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Vertical velocity",
            commonErrors: ["Horizontal velocity."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "phys11-u6-proj-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Ball thrown horizontally at 10 m/s from 5m height. Time to hit ground? (g=10)",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Vertical motion",
                statement: "$y = \\frac{1}{2}gt^2$",
              },
            ],
            steps: [
              {
                reasoning:
                  "Vertical: y = 0 + 0·t − ½gt² (starts at rest vertically).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$5 = \\frac{1}{2}(10)t^2$ → t² = 1 → t = 1s.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Answer: 1 s.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1 s.",
            commonErrors: ["Using horizontal velocity."],
            examinerNote: "M2, A1.",
          },
        },
        {
          id: "phys11-u6-proj-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "What launch angle gives maximum range (ignoring air resistance)?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Range",
                statement: "$R = \\frac{v_0^2 \\sin 2\\theta}{g}$",
              },
            ],
            steps: [
              { reasoning: "Maximize sin(2θ).", marks: 1, markCode: "R" },
              {
                reasoning: "sin(2θ) max = 1 when 2θ = 90° → θ = 45°.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Answer: 45°.", marks: 1, markCode: "M" },
              {
                reasoning: "Same range for θ and 90°−θ.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "45°.",
            commonErrors: ["90° (straight up)."],
            examinerNote: "R1, M2, A1.",
          },
        },
        {
          id: "phys11-u6-proj-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Ball thrown at 30° with v₀=20 m/s (g=10).",
          parts: [
            { label: "a", prompt: "v₀x and v₀y?", marks: 3 },
            { label: "b", prompt: "Time of flight?", marks: 3 },
            { label: "c", prompt: "Max height?", marks: 2 },
            { label: "d", prompt: "Range?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Projectile",
                statement: "Separate x and y.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$v_{0x} = 20\\cos30° = 17.3$; $v_{0y} = 20\\sin30° = 10$ m/s.",
                marks: 3,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "t = 2v₀y/g = 2(10)/10 = 2s.",
                marks: 2,
                markCode: "M",
                part: "b",
              },
              { reasoning: "Answer: 2 s.", marks: 1, markCode: "A", part: "b" },
              {
                reasoning: "$h = v_{0y}^2/2g = 100/20 = 5$ m.",
                marks: 2,
                markCode: "M",
                part: "c",
              },
              {
                reasoning: "$R = v_{0x} \\times t = 17.3 \\times 2 = 34.6$ m.",
                marks: 1,
                markCode: "M",
                part: "d",
              },
              {
                reasoning: "Answer: 34.6 m.",
                marks: 1,
                markCode: "A",
                part: "d",
              },
            ],
            finalAnswer: "(a) 17.3,10 (b) 2s (c) 5m (d) 34.6m.",
            commonErrors: ["Not separating components."],
            examinerNote: "3+3+2+2 = 10.",
          },
        },
      ],
    },
  ],
};
