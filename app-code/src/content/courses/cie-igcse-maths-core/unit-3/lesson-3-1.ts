import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "cimg-u3-lesson-3-1",
  code: "3-1",
  title: "Linear Graphs",
  goal: "I CAN plot points, find gradients and sketch straight lines.",
  standards: ["Cambridge IGCSE Mathematics 0580 Core: coordinate geometry"],
  vocabulary: [
    { term: "Coordinates", definition: "An ordered pair $(x, y)$ locating a point." },
    { term: "Gradient", definition: "The steepness of a line, $m = \\frac{\\Delta y}{\\Delta x}$." },
    { term: "Intercept", definition: "Where a line crosses an axis." },
    { term: "Equation of a line", definition: "$y = mx + c$." },
    { term: "Origin", definition: "The point $(0, 0)$." },
  ],
  concepts: [
    {
      id: "cimg-u3-s1-plot",
      title: "Plotting points and lines",
      skill: "Plot coordinates and draw linear graphs at IGCSE level.",
      lesson: {
        sections: [
          {
            heading: "Plotting",
            body: "Read $(x, y)$: x first, y second. Plot on squared paper with labelled axes. To draw a line, plot at least two points.",
          },
          {
            heading: "Equation y = mx + c",
            body: "$m$ is the gradient, $c$ is the y-intercept. $y = 2x + 3$: gradient 2, crosses y-axis at 3.",
          },
        ],
        keyFormulas: [
          { name: "Line equation", statement: "$y = mx + c$" },
        ],
        workedExample: {
          problem: "Find the equation of a line with gradient 3 through $(0, -2)$.",
          solution: "$y = 3x - 2$.",
        },
      },
      questions: [
        {
          id: "cimg-u3-s1-pl-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the y-intercept of $y = 4x + 7$?",
          response: { type: "mcq", choices: [
            { id: "a", text: "7" }, { id: "b", text: "4" }, { id: "c", text: "-7" }, { id: "d", text: "1" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "property", name: "y = mx + c", statement: "$c$ is the intercept." }],
            steps: [{ reasoning: "The intercept is $c = 7$.", marks: 1, markCode: "A" }],
            finalAnswer: "7",
          },
        },
        {
          id: "cimg-u3-s1-pl-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Find the gradient of the line through $(0, 1)$ and $(2, 5)$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 2 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Gradient", statement: "$\\frac{\\Delta y}{\\Delta x}$." }],
            steps: [
              { reasoning: "$\\frac{5 - 1}{2 - 0} = \\frac{4}{2} = 2$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 2.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2",
          },
        },
        {
          id: "cimg-u3-s1-pl-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find the equation of the line with gradient $-2$ passing through $(0, 5)$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "property", name: "y = mx + c", statement: "Substitute $m$ and $c$." }],
            steps: [
              { reasoning: "$m = -2$, $c = 5$.", marks: 1, markCode: "M" },
              { reasoning: "$y = -2x + 5$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $y = -2x + 5$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$y = -2x + 5$",
          },
        },
        {
          id: "cimg-u3-s1-pl-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "A line passes through $(1, 3)$ and $(3, 7)$. Find its equation.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Equation from two points", statement: "Gradient then intercept." }],
            steps: [
              { reasoning: "Gradient $= \\frac{7 - 3}{3 - 1} = \\frac{4}{2} = 2$.", marks: 1, markCode: "M" },
              { reasoning: "Using $(1, 3)$: $3 = 2 \\times 1 + c$ → $c = 1$.", marks: 1, markCode: "M" },
              { reasoning: "Equation: $y = 2x + 1$.", marks: 1, markCode: "M" },
              { reasoning: "Verify with $(3, 7)$: $2 \\times 3 + 1 = 7$. ✓", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$y = 2x + 1$",
          },
        },
      ],
    },
    {
      id: "cimg-u3-s1-quadratics",
      title: "Quadratic graphs",
      skill: "Sketch and interpret quadratic graphs at IGCSE level.",
      lesson: {
        sections: [
          {
            heading: "Parabolas",
            body: "$y = x^2$ is a U-shape opening upwards. $y = -x^2$ opens downwards. The lowest point (minimum) or highest point (maximum) is the vertex.",
          },
          {
            heading: "Key features",
            body: "y-intercept: set $x = 0$. x-intercepts: solve $y = 0$ (roots). Axis of symmetry passes through vertex.",
          },
        ],
        keyFormulas: [
          { name: "Quadratic", statement: "$y = ax^2 + bx + c$" },
        ],
        workedExample: {
          problem: "Sketch $y = x^2 - 4$.",
          solution: "U-shape, vertex at $(0, -4)$, crosses x-axis at $x = \\pm 2$.",
        },
      },
      questions: [
        {
          id: "cimg-u3-s1-qu-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which way does $y = -x^2$ open?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Downwards" }, { id: "b", text: "Upwards" }, { id: "c", text: "Sideways" }, { id: "d", text: "Straight line" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "property", name: "Quadratic shape", statement: "Negative coefficient flips the parabola." }],
            steps: [{ reasoning: "$-x^2$ opens downwards.", marks: 1, markCode: "A" }],
            finalAnswer: "Downwards",
          },
        },
        {
          id: "cimg-u3-s1-qu-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Find the y-intercept of $y = x^2 + 3x - 2$.",
          response: { type: "numeric", parts: [{ label: "a", answer: -2 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "y-intercept", statement: "Set $x = 0$." }],
            steps: [
              { reasoning: "Set $x = 0$: $y = -2$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $-2$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "-2",
          },
        },
        {
          id: "cimg-u3-s1-qu-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find the coordinates of the vertex of $y = x^2 - 6x + 5$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Vertex", statement: "Complete the square or symmetry." }],
            steps: [
              { reasoning: "$y = (x - 3)^2 - 4$.", marks: 1, markCode: "M" },
              { reasoning: "Vertex: $(3, -4)$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $(3, -4)$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$(3, -4)$",
          },
        },
        {
          id: "cimg-u3-s1-qu-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Sketch $y = x^2 - 9$, showing intercepts and vertex.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Sketching quadratics", statement: "Find key points." }],
            steps: [
              { reasoning: "y-intercept: $(0, -9)$.", marks: 1, markCode: "M" },
              { reasoning: "x-intercepts: $x = \\pm 3$ → $(-3, 0)$, $(3, 0)$.", marks: 1, markCode: "M" },
              { reasoning: "Vertex at $(0, -9)$, opens upwards.", marks: 1, markCode: "M" },
              { reasoning: "Correct smooth parabola.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Sketch with intercepts",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cimg-u3-s1-graphs-notes",
      title: "Linear and quadratic graphs — revision notes",
      summary: "$y = mx + c$, gradients, parabolas, vertices.",
      sections: [
        { heading: "Linear", body: "$y = mx + c$: $m$ gradient, $c$ y-intercept. Two points determine a line." },
        { heading: "Quadratic", body: "$y = ax^2 + bx + c$ is a parabola. Find vertex, intercepts. Negative $a$ opens down." },
      ],
    },
  ],
};
