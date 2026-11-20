import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "cimg-u3-lesson-3-3",
  code: "3-3",
  title: "Graphs of Functions and Real-life Graphs",
  goal: "I CAN interpret and draw graphs of real-life situations.",
  standards: ["Cambridge IGCSE Mathematics 0580 Core: graphs"],
  vocabulary: [
    { term: "Rate of change", definition: "How fast one quantity changes relative to another." },
    { term: "Gradient of graph", definition: "Rate of change of y with respect to x." },
    { term: "Speed-time graph", definition: "Graph showing velocity over time." },
    { term: "Distance-time graph", definition: "Graph showing distance travelled over time." },
    { term: "Turning point", definition: "A maximum or minimum on a graph." },
  ],
  concepts: [
    {
      id: "cimg-u3-s3-interpreting",
      title: "Interpreting graphs",
      skill: "Read and interpret real-life graphs at IGCSE level.",
      lesson: {
        sections: [
          {
            heading: "Distance-time graphs",
            body: "Gradient = speed. Horizontal line = stationary. Steeper = faster. Curved line = changing speed (acceleration).",
          },
          {
            heading: "Speed-time graphs",
            body: "Gradient = acceleration. Area under line = distance travelled. Line above time axis = moving forward.",
          },
        ],
        keyFormulas: [
          { name: "Speed", statement: "Gradient of distance-time graph" },
        ],
        workedExample: {
          problem: "A distance-time graph is a straight line from $(0, 0)$ to $(4, 20)$. What is the speed?",
          solution: "Gradient $= \\frac{20}{4} = 5$ m/s.",
        },
      },
      questions: [
        {
          id: "cimg-u3-s3-in-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "On a distance-time graph, what does a horizontal line mean?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Stationary" }, { id: "b", text: "Fast" }, { id: "c", text: "Accelerating" }, { id: "d", text: "Slowing down" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "property", name: "Distance-time", statement: "Zero gradient = no movement." }],
            steps: [{ reasoning: "Horizontal = distance not changing = stationary.", marks: 1, markCode: "A" }],
            finalAnswer: "Stationary",
          },
        },
        {
          id: "cimg-u3-s3-in-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A car travels 60 km in 2 hours. What is its average speed?",
          response: { type: "numeric", parts: [{ label: "a", answer: 30, unit: "km/h" }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Speed", statement: "Distance ÷ time." }],
            steps: [
              { reasoning: "$60 \\div 2 = 30$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 30 km/h.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "30 km/h",
          },
        },
        {
          id: "cimg-u3-s3-in-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A speed-time graph shows a car accelerating from 0 to 20 m/s in 4 s, then constant. Find the acceleration.",
          response: { type: "numeric", parts: [{ label: "a", answer: 5, unit: "m/s²" }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Acceleration", statement: "Change in velocity ÷ time." }],
            steps: [
              { reasoning: "Acceleration $= \\frac{20 - 0}{4} = 5$.", marks: 1, markCode: "M" },
              { reasoning: "Units: m/s².", marks: 1, markCode: "M" },
              { reasoning: "Answer: 5 m/s².", marks: 1, markCode: "A" },
            ],
            finalAnswer: "5 m/s²",
          },
        },
        {
          id: "cimg-u3-s3-in-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "A train travels at constant speed for 2 hours, stops for 30 minutes, then travels again. Sketch the distance-time graph.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Sketching", statement: "Three sections." }],
            steps: [
              { reasoning: "Section 1: straight line up (constant speed).", marks: 1, markCode: "M" },
              { reasoning: "Section 2: horizontal line (stopped).", marks: 1, markCode: "M" },
              { reasoning: "Section 3: straight line up again.", marks: 1, markCode: "M" },
              { reasoning: "Correct axes and labels.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Three-section graph",
          },
        },
      ],
    },
    {
      id: "cimg-u3-s3-drawing",
      title: "Drawing graphs",
      skill: "Draw graphs from data and equations at IGCSE level.",
      lesson: {
        sections: [
          {
            heading: "From equations",
            body: "Choose x values, calculate y, plot points, join with smooth curve (quadratics) or straight line (linear). Use a table for values.",
          },
          {
            heading: "Scale",
            body: "Choose a sensible scale so all points fit. Label axes with quantities and units. Mark points clearly.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Draw $y = 2x + 1$ for $x$ from -2 to 2.",
          solution: "Points: $(-2, -3)$, $(-1, -1)$, $(0, 1)$, $(1, 3)$, $(2, 5)$. Straight line.",
        },
      },
      questions: [
        {
          id: "cimg-u3-s3-dr-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "For $y = x + 3$, what is $y$ when $x = 2$?",
          response: { type: "mcq", choices: [
            { id: "a", text: "5" }, { id: "b", text: "6" }, { id: "c", text: "3" }, { id: "d", text: "2" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "technique", name: "Substitution", statement: "Evaluate." }],
            steps: [{ reasoning: "$y = 2 + 3 = 5$.", marks: 1, markCode: "A" }],
            finalAnswer: "5",
          },
        },
        {
          id: "cimg-u3-s3-dr-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Complete the table for $y = 3x - 2$: $x = 0, 1, 2$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Table of values", statement: "Substitute each x." }],
            steps: [
              { reasoning: "$x=0: y=-2$; $x=1: y=1$; $x=2: y=4$.", marks: 1, markCode: "M" },
              { reasoning: "Correct values: $-2, 1, 4$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$-2, 1, 4$",
          },
        },
        {
          id: "cimg-u3-s3-dr-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Plot the points $(1, 2)$, $(2, 4)$, $(3, 6)$ and describe the graph.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Plotting", statement: "Check pattern." }],
            steps: [
              { reasoning: "All points lie on a straight line.", marks: 1, markCode: "M" },
              { reasoning: "Gradient $= \\frac{6-2}{3-1} = 2$; y-intercept 0.", marks: 1, markCode: "M" },
              { reasoning: "Equation: $y = 2x$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$y = 2x$",
          },
        },
        {
          id: "cimg-u3-s3-dr-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Draw the graph of $y = x^2$ for $x = -2$ to $2$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Curve drawing", statement: "Smooth parabola." }],
            steps: [
              { reasoning: "Values: $x=-2:4$, $-1:1$, $0:0$, $1:1$, $2:4$.", marks: 1, markCode: "M" },
              { reasoning: "Plot points correctly.", marks: 1, markCode: "M" },
              { reasoning: "Smooth curve through points (not straight lines).", marks: 1, markCode: "M" },
              { reasoning: "Labelled axes.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Parabola sketch",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cimg-u3-s3-real-notes",
      title: "Real-life graphs — revision notes",
      summary: "Distance-time, speed-time, drawing graphs.",
      sections: [
        { heading: "Interpreting", body: "Distance-time gradient = speed. Speed-time area = distance. Horizontal = constant." },
        { heading: "Drawing", body: "Table of values, plot, join. Linear = straight line; quadratic = smooth curve." },
      ],
    },
  ],
};
