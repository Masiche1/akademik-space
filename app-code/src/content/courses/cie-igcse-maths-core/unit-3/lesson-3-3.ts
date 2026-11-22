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
            { id: "a", text: "Fast" },
            { id: "b", text: "Slowing down" },
            { id: "c", text: "Accelerating" },
            { id: "d", text: "Stationary" },
          ], correctChoiceId: "d" },
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
        {
          id: "cimg-u3-s3-in-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "On a distance-time graph, a steep straight line means the object is moving...",
          response: { type: "mcq", choices: [
            { id: "a", text: "Stationary" },
            { id: "b", text: "Fast" },
            { id: "c", text: "Slowly" },
            { id: "d", text: "Backwards" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "property", name: "Distance-time", statement: "Gradient = speed." }],
            steps: [{ reasoning: "Steeper gradient means greater speed.", marks: 1, markCode: "A" }],
            finalAnswer: "Fast",
          },
        },
        {
          id: "cimg-u3-s3-in-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A train travels 120 km in 3 hours. What is its average speed?",
          response: { type: "numeric", parts: [{ label: "a", answer: 40, unit: "km/h" }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Speed", statement: "Distance ÷ time." }],
            steps: [
              { reasoning: "$120 \\div 3 = 40$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 40 km/h.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "40 km/h",
          },
        },
        {
          id: "cimg-u3-s3-in-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A horizontal line on a speed-time graph at 15 m/s means the object is moving at...",
          response: { type: "mcq", choices: [
            { id: "a", text: "A constant speed of 15 m/s" },
            { id: "b", text: "An acceleration of 15" },
            { id: "c", text: "15 m total" },
            { id: "d", text: "Zero speed" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "property", name: "Speed-time", statement: "Height = speed." }],
            steps: [{ reasoning: "Constant height means constant speed of 15 m/s.", marks: 1, markCode: "A" }],
            finalAnswer: "Constant 15 m/s",
          },
        },
        {
          id: "cimg-u3-s3-in-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "A speed-time graph shows a car travelling at a constant 10 m/s for 5 seconds. Find the distance travelled.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "property", name: "Speed-time", statement: "Area under graph = distance." }],
            steps: [
              { reasoning: "Area = rectangle: $10 \\times 5$.", marks: 1, markCode: "M" },
              { reasoning: "Distance $= 50$ m.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 50 m.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "50 m",
          },
        },
        {
          id: "cimg-u3-s3-in-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "On a distance-time graph, a curved (non-straight) line means the object is...",
          response: { type: "mcq", choices: [
            { id: "a", text: "Moving at constant speed" },
            { id: "b", text: "Stationary" },
            { id: "c", text: "Moving backwards" },
            { id: "d", text: "Changing speed" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "property", name: "Distance-time", statement: "Curve = changing gradient = changing speed." }],
            steps: [{ reasoning: "A curve means the speed is changing.", marks: 1, markCode: "A" }],
            finalAnswer: "Changing speed",
          },
        },
        {
          id: "cimg-u3-s3-in-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "A cyclist accelerates uniformly from rest to 12 m/s in 3 seconds. Find the acceleration.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Acceleration", statement: "Change in velocity ÷ time." }],
            steps: [
              { reasoning: "Acceleration $= \\frac{12 - 0}{3}$.", marks: 1, markCode: "M" },
              { reasoning: "$= 4$ m/s².", marks: 1, markCode: "M" },
              { reasoning: "Answer: 4 m/s².", marks: 1, markCode: "A" },
            ],
            finalAnswer: "4 m/s²",
          },
        },
        {
          id: "cimg-u3-s3-in-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "A runner moves at a steady 8 m/s for 10 seconds. How far does she run?",
          response: { type: "numeric", parts: [{ label: "a", answer: 80, unit: "m" }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Speed", statement: "Distance = speed × time." }],
            steps: [
              { reasoning: "Distance $= 8 \\times 10$.", marks: 1, markCode: "M" },
              { reasoning: "Distance $= 80$ m.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 80 m.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "80 m",
          },
        },
        {
          id: "cimg-u3-s3-in-q12",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A distance-time graph for a bus journey is flat, then a straight line sloping up, then flat again. Describe what the bus does during each section.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "property", name: "Distance-time", statement: "Flat = stationary; slope = moving." }],
            steps: [
              { reasoning: "Flat section: bus is stationary (not moving).", marks: 1, markCode: "M" },
              { reasoning: "Sloping section: bus moves at constant speed.", marks: 1, markCode: "M" },
              { reasoning: "Flat again: bus stops (stationary).", marks: 1, markCode: "M" },
              { reasoning: "Answer: stationary → constant speed → stationary.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Stop, travel, stop",
          },
        },
        {
          id: "cimg-u3-s3-in-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "What does the area under a speed-time graph represent?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Speed" },
            { id: "b", text: "Acceleration" },
            { id: "c", text: "Time" },
            { id: "d", text: "Distance travelled" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "property", name: "Speed-time", statement: "Area = distance." }],
            steps: [{ reasoning: "Area under a speed-time graph gives distance travelled.", marks: 1, markCode: "A" }],
            finalAnswer: "Distance travelled",
          },
        },
        {
          id: "cimg-u3-s3-in-q14",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A car's speed increases uniformly from 5 m/s to 20 m/s in 4 seconds. Find the acceleration.",
          response: { type: "numeric", parts: [{ label: "a", answer: 3.75, tolerance: 0.01, unit: "m/s²" }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Acceleration", statement: "Change in velocity ÷ time." }],
            steps: [
              { reasoning: "Acceleration $= \\frac{20 - 5}{4} = \\frac{15}{4}$.", marks: 1, markCode: "M" },
              { reasoning: "$= 3.75$ m/s².", marks: 1, markCode: "M" },
              { reasoning: "Answer: 3.75 m/s².", marks: 1, markCode: "A" },
            ],
            finalAnswer: "3.75 m/s²",
          },
        },
        {
          id: "cimg-u3-s3-in-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A speed-time graph shows a vehicle accelerating uniformly from rest to 30 m/s in 6 s, travelling at 30 m/s for 4 s, then decelerating uniformly to rest in 10 s. Find the total distance travelled.",
          response: { type: "numeric", parts: [{ label: "a", answer: 360, unit: "m" }] },
          markscheme: {
            principles: [{ kind: "property", name: "Speed-time", statement: "Area under graph = distance." }],
            steps: [
              { reasoning: "Accelerating: triangle, area $= \\frac{1}{2} \\times 6 \\times 30 = 90$ m.", marks: 1, markCode: "M" },
              { reasoning: "Constant: rectangle, area $= 4 \\times 30 = 120$ m.", marks: 1, markCode: "M" },
              { reasoning: "Decelerating: triangle, area $= \\frac{1}{2} \\times 10 \\times 30 = 150$ m.", marks: 1, markCode: "M" },
              { reasoning: "Total: $90 + 120 + 150 = 360$ m.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "360 m",
          },
        },
        {
          id: "cimg-u3-s3-in-q16",
          difficulty: "core",
          totalMarks: 3,
          stem: "A speed-time graph is horizontal at 25 m/s for 12 seconds. Find the distance travelled.",
          response: { type: "numeric", parts: [{ label: "a", answer: 300, unit: "m" }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Speed-time", statement: "Distance = speed × time." }],
            steps: [
              { reasoning: "Distance $= 25 \\times 12$.", marks: 1, markCode: "M" },
              { reasoning: "$= 300$ m.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 300 m.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "300 m",
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
            { id: "a", text: "5" },
            { id: "b", text: "2" },
            { id: "c", text: "6" },
            { id: "d", text: "3" },
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
        {
          id: "cimg-u3-s3-dr-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "For $y = 2x + 1$, what is $y$ when $x = 3$?",
          response: { type: "mcq", choices: [
            { id: "a", text: "5" },
            { id: "b", text: "6" },
            { id: "c", text: "7" },
            { id: "d", text: "4" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "technique", name: "Substitution", statement: "Evaluate." }],
            steps: [{ reasoning: "$y = 2 \\times 3 + 1 = 7$.", marks: 1, markCode: "A" }],
            finalAnswer: "7",
          },
        },
        {
          id: "cimg-u3-s3-dr-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Find $y$ when $x = 2$ for $y = 4 - x$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 2 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Substitution", statement: "Evaluate." }],
            steps: [
              { reasoning: "$y = 4 - 2 = 2$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 2.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2",
          },
        },
        {
          id: "cimg-u3-s3-dr-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "To draw the graph of $y = x^2$, the points should be joined with...",
          response: { type: "mcq", choices: [
            { id: "a", text: "A smooth curve" },
            { id: "b", text: "Dots only" },
            { id: "c", text: "Straight line segments" },
            { id: "d", text: "A jagged line" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "convention", name: "Curve drawing", statement: "Quadratics are smooth curves." }],
            steps: [{ reasoning: "$y = x^2$ is a parabola — join points with a smooth curve.", marks: 1, markCode: "A" }],
            finalAnswer: "Smooth curve",
          },
        },
        {
          id: "cimg-u3-s3-dr-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find the value of $y$ for $y = x^2 - 4$ when $x = 3$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 5 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Substitution", statement: "Square before subtracting." }],
            steps: [
              { reasoning: "$y = 3^2 - 4 = 9 - 4$.", marks: 1, markCode: "M" },
              { reasoning: "$y = 5$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 5.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "5",
          },
        },
        {
          id: "cimg-u3-s3-dr-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "For the table of values of $y = 3x$, what is $y$ when $x = 2$?",
          response: { type: "mcq", choices: [
            { id: "a", text: "8" },
            { id: "b", text: "3" },
            { id: "c", text: "6" },
            { id: "d", text: "5" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "technique", name: "Table of values", statement: "Substitute each $x$." }],
            steps: [{ reasoning: "$y = 3 \\times 2 = 6$.", marks: 1, markCode: "A" }],
            finalAnswer: "6",
          },
        },
        {
          id: "cimg-u3-s3-dr-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "Complete the table for $y = 2x + 3$ when $x = -1, 0, 1, 2$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Table of values", statement: "Substitute each $x$." }],
            steps: [
              { reasoning: "$x=-1$: $y=1$; $x=0$: $y=3$; $x=1$: $y=5$; $x=2$: $y=7$.", marks: 1, markCode: "M" },
              { reasoning: "Values: $1, 3, 5, 7$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $y = 1, 3, 5, 7$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$1, 3, 5, 7$",
          },
        },
        {
          id: "cimg-u3-s3-dr-q11",
          difficulty: "core",
          totalMarks: 4,
          stem: "Draw the graph of $y = x + 2$ for $x = -2$ to $2$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Linear graph", statement: "Table of values then straight line." }],
            steps: [
              { reasoning: "Values: $x=-2$: $y=0$; $-1$: $1$; $0$: $2$; $1$: $3$; $2$: $4$.", marks: 1, markCode: "M" },
              { reasoning: "Plot the five points correctly.", marks: 1, markCode: "M" },
              { reasoning: "Join with a straight line.", marks: 1, markCode: "M" },
              { reasoning: "Labelled axes with sensible scale.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Straight line sketch",
          },
        },
        {
          id: "cimg-u3-s3-dr-q12",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Draw the graph of $y = x^2 - 2$ for $x = -2$ to $2$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Curve drawing", statement: "Smooth parabola." }],
            steps: [
              { reasoning: "Values: $x=-2$: $2$; $-1$: $-1$; $0$: $-2$; $1$: $-1$; $2$: $2$.", marks: 1, markCode: "M" },
              { reasoning: "Plot points correctly.", marks: 1, markCode: "M" },
              { reasoning: "Smooth curve through points (not straight lines).", marks: 1, markCode: "M" },
              { reasoning: "Labelled axes.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Parabola sketch",
          },
        },
        {
          id: "cimg-u3-s3-dr-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "The graph of $y = -x$ is...",
          response: { type: "mcq", choices: [
            { id: "a", text: "A parabola" },
            { id: "b", text: "A curve" },
            { id: "c", text: "A straight line through the origin with negative gradient" },
            { id: "d", text: "A horizontal line" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "property", name: "Linear graphs", statement: "$y = mx + c$ is a straight line." }],
            steps: [{ reasoning: "$y = -x$ has $m = -1$, $c = 0$: straight line through origin, negative gradient.", marks: 1, markCode: "A" }],
            finalAnswer: "Line through origin",
          },
        },
        {
          id: "cimg-u3-s3-dr-q14",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Find the value of $y$ for $y = 2x^2 + 1$ when $x = -3$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 19 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Substitution", statement: "Square the negative value." }],
            steps: [
              { reasoning: "$y = 2(-3)^2 + 1 = 2 \\times 9 + 1$.", marks: 1, markCode: "M" },
              { reasoning: "$y = 19$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 19.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "19",
          },
        },
        {
          id: "cimg-u3-s3-dr-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Sketch $y = -x^2 + 1$, showing the intercepts.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Sketching quadratics", statement: "Negative coefficient: opens downwards." }],
            steps: [
              { reasoning: "y-intercept: $(0, 1)$.", marks: 1, markCode: "M" },
              { reasoning: "x-intercepts: $-x^2 + 1 = 0$ → $x = \\pm 1$.", marks: 1, markCode: "M" },
              { reasoning: "Vertex at $(0, 1)$, opens downwards (maximum).", marks: 1, markCode: "M" },
              { reasoning: "Correct smooth curve.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Sketch with intercepts",
          },
        },
        {
          id: "cimg-u3-s3-dr-q16",
          difficulty: "core",
          totalMarks: 3,
          stem: "Plot the points $(1, 3)$, $(2, 5)$, $(3, 7)$, $(4, 9)$ and find the equation of the line they lie on.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Plotting", statement: "Check the pattern." }],
            steps: [
              { reasoning: "All points lie on a straight line.", marks: 1, markCode: "M" },
              { reasoning: "Gradient $= \\frac{9-3}{4-1} = 2$; y-intercept $= 1$.", marks: 1, markCode: "M" },
              { reasoning: "Equation: $y = 2x + 1$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$y = 2x + 1$",
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
