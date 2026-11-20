import type { Lesson } from "../../../types.ts";

export const lessonp11: Lesson = {
  id: "olphys-u1-lesson-1-1",
  code: "1-1",
  title: "Speed, Velocity and Acceleration",
  goal: "I CAN calculate speed, velocity and acceleration and interpret motion graphs.",
  standards: ["5054 1.1", "5054 1.2"],
  vocabulary: [
    { term: "Speed", definition: "Distance travelled per unit time (scalar, m/s)." },
    { term: "Velocity", definition: "Speed in a given direction (vector, m/s)." },
    { term: "Acceleration", definition: "Rate of change of velocity (m/s²)." },
    { term: "Distance", definition: "Total path length (scalar, m)." },
    { term: "Displacement", definition: "Shortest distance in a direction (vector, m)." },
    { term: "Uniform acceleration", definition: "Constant acceleration." },
    { term: "Deceleration", definition: "Negative acceleration (slowing down)." },
    { term: "Gradient", definition: "Slope of graph; on velocity-time = acceleration." },
  ],
  concepts: [
    {
      id: "olphys-u1-motion-quantities",
      title: "Speed, velocity and acceleration",
      skill: "Calculate and distinguish speed, velocity, distance, displacement and acceleration.",
      lesson: {
        sections: [
          {
            heading: "Definitions",
            body: "| Quantity | Formula | Type |\n|---|---|---|\n| Speed | distance ÷ time | scalar |\n| Velocity | displacement ÷ time | vector |\n| Acceleration | change in velocity ÷ time | vector |",
          },
          {
            heading: "Scalar vs vector",
            body: "Speed/distance are scalars (magnitude only). Velocity/displacement/acceleration are vectors (magnitude + direction). Average speed = total distance ÷ total time.",
          },
          {
            heading: "Acceleration",
            body: "**a = (v − u) ÷ t** where u = initial velocity, v = final velocity. Positive = speeding up in direction of motion; negative = decelerating.",
          },
        ],
        keyFormulas: [
          { name: "Speed", statement: "$v = \\dfrac{s}{t}$" },
          { name: "Acceleration", statement: "$a = \\dfrac{v - u}{t}$" },
          { name: "Velocity-time area", statement: "$s = \\text{area under } v\\text{-}t \\text{ graph}$" },
        ],
        workedExample: {
          problem: "A car accelerates from 10 m/s to 30 m/s in 5 s. Find acceleration.",
          solution: "a = (30 − 10)/5 = 20/5 = 4 m/s².",
        },
      },
      questions: [
        {
          id: "olphys-u1-motion-quantities-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the SI unit of acceleration?",
          response: { type: "mcq", choices: [
            { id: "a", text: "m/s" }, { id: "b", text: "m/s²" }, { id: "c", text: "m" }, { id: "d", text: "s/m" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "property", name: "Acceleration unit", statement: "m/s²." }],
            steps: [{ reasoning: "Recall.", working: "\\text{m/s}^2", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** m/s²",
            commonErrors: ["m/s is velocity."],
          },
        },
        {
          id: "olphys-u1-motion-quantities-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A runner covers 400 m in 50 s. Calculate average speed.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "Speed", statement: "v = s/t = 400/50 = 8 m/s." }],
            steps: [
              { reasoning: "Apply formula.", working: "v = \\frac{400}{50}", marks: 1, markCode: "M" },
              { reasoning: "Answer.", working: "8 \\text{m/s}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "8 m/s",
            commonErrors: ["Units — must be m/s not just '8'."],
          },
        },
        {
          id: "olphys-u1-motion-quantities-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A cyclist accelerates from rest to 12 m/s in 6 s. Calculate acceleration.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "Acceleration", statement: "a = (v−u)/t." }],
            steps: [
              { reasoning: "Identify u=0, v=12, t=6.", marks: 1, markCode: "M" },
              { reasoning: "Apply formula.", working: "a = \\frac{12-0}{6}", marks: 1, markCode: "M" },
              { reasoning: "= 2 m/s².", marks: 1, markCode: "A" },
              { reasoning: "State with units.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "2 m/s²",
            commonErrors: ["Forgetting u=0 (from rest)."],
          },
        },
        {
          id: "olphys-u1-motion-quantities-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A car travels 150 km in 2 hours, then 100 km in 1 hour. Calculate average speed for the whole journey.",
          parts: [
            { label: "a", prompt: "Calculate total distance and total time.", marks: 2 },
            { label: "b", prompt: "Calculate average speed.", marks: 3 },
            { label: "c", prompt: "Explain why average speed ≠ average of the two speeds.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "Average speed", statement: "Total distance ÷ total time." }],
            steps: [
              { part: "a", reasoning: "Distance = 250 km.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Time = 3 h.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "v = 250/3.", working: "v = \\frac{250}{3}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "= 83.3 km/h.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "With units.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Different times per distance.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Must weight by time not average speeds.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Average of speeds = 75+100/2 = 87.5 ≠ 83.3.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Conclude.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 250 km, 3 h (b) 83.3 km/h (c) times differ → can't average speeds",
            commonErrors: ["In (c) averaging the two speeds — must use total distance/total time."],
          },
        },
      ],
    },
    {
      id: "olphys-u1-motion-graphs",
      title: "Motion graphs",
      skill: "Interpret and sketch distance-time and velocity-time graphs.",
      lesson: {
        sections: [
          {
            heading: "Distance-time graph",
            body: "- Gradient = **speed**.\n- Horizontal line = stationary.\n- Steeper = faster.\n- Curve = changing speed.",
          },
          {
            heading: "Velocity-time graph",
            body: "- Gradient = **acceleration**.\n- Horizontal line = constant velocity.\n- Area under line = **distance**.\n- Below axis = negative velocity (opposite direction).",
          },
          {
            heading: "Sketching",
            body: "Uniform acceleration → straight line on v-t graph. Constant speed → horizontal line on d-t graph.",
          },
        ],
        keyFormulas: [
          { name: "d-t gradient", statement: "$\\text{gradient} = \\text{speed}$" },
          { name: "v-t gradient", statement: "$\\text{gradient} = \\text{acceleration}$" },
          { name: "v-t area", statement: "$\\text{area} = \\text{distance}$" },
        ],
        workedExample: {
          problem: "On a velocity-time graph, what does the area under the line represent?",
          solution: "Distance travelled — area = velocity × time.",
        },
      },
      questions: [
        {
          id: "olphys-u1-motion-graphs-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "On a distance-time graph, what does the gradient represent?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Acceleration" }, { id: "b", text: "Speed" }, { id: "c", text: "Distance" }, { id: "d", text: "Time" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "property", name: "d-t gradient", statement: "Gradient = speed." }],
            steps: [{ reasoning: "Recall.", working: "\\text{gradient} = v", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Speed",
            commonErrors: ["Acceleration is on v-t graph."],
          },
        },
        {
          id: "olphys-u1-motion-graphs-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What does a horizontal line on a velocity-time graph show?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "property", name: "v-t graph", statement: "Horizontal = constant velocity." }],
            steps: [
              { reasoning: "Interpret.", marks: 1, markCode: "M" },
              { reasoning: "State meaning.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Constant velocity (zero acceleration).",
            commonErrors: ["Stationary — that's only if v=0 line."],
          },
        },
        {
          id: "olphys-u1-motion-graphs-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A velocity-time graph shows velocity increasing from 0 to 20 m/s over 4 s, then constant for 6 s. Calculate total distance.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "v-t area", statement: "Area = distance." }],
            steps: [
              { reasoning: "Triangle area: ½×4×20 = 40 m.", working: "\\frac{1}{2} \\times 4 \\times 20", marks: 1, markCode: "M" },
              { reasoning: "Rectangle: 20×6 = 120 m.", working: "20 \\times 6", marks: 1, markCode: "M" },
              { reasoning: "Total = 160 m.", marks: 1, markCode: "A" },
              { reasoning: "State answer.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "160 m",
            commonErrors: ["Only calculating one section."],
          },
        },
        {
          id: "olphys-u1-motion-graphs-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Describe how to determine acceleration from a velocity-time graph.",
          parts: [
            { label: "a", prompt: "State what the gradient represents.", marks: 2 },
            { label: "b", prompt: "Explain how to calculate it.", marks: 3 },
            { label: "c", prompt: "State what the area under the graph gives.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "property", name: "v-t graph", statement: "Gradient=a, area=distance." }],
            steps: [
              { part: "a", reasoning: "Gradient = acceleration.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "a = Δv/Δt = gradient.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Choose two points on line.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Calculate rise/run.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Area = distance travelled.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "For triangle: ½×base×height.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "For rectangle: base×height.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Sum all areas.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) gradient=acceleration (b) Δv/Δt (c) area=distance",
            commonErrors: ["In (c) using gradient for distance — that's acceleration."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "olphys-u1-motion-notes",
      title: "Motion — revision notes",
      summary: "Speed/velocity/acceleration formulas, scalar vs vector, d-t and v-t graphs.",
      sections: [
        {
          heading: "Key facts",
          body: "Speed = distance/time (scalar). Velocity = displacement/time (vector). Acceleration = Δv/t. d-t gradient = speed; v-t gradient = acceleration; v-t area = distance.",
        },
        {
          heading: "Exam technique",
          body: "- Always check scalar vs vector.\n- v-t area: split into triangles/rectangles and sum.",
        },
      ],
    },
  ],
};
