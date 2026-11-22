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
            { id: "a", text: "4" },
            { id: "b", text: "-7" },
            { id: "c", text: "1" },
            { id: "d", text: "7" },
          ], correctChoiceId: "d" },
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
        {
          id: "cimg-u3-s1-pl-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the gradient of $y = 5x + 2$?",
          response: { type: "mcq", choices: [
            { id: "a", text: "7" },
            { id: "b", text: "5" },
            { id: "c", text: "2" },
            { id: "d", text: "$-5$" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "property", name: "y = mx + c", statement: "$m$ is the gradient." }],
            steps: [{ reasoning: "The coefficient of $x$ is $5$.", marks: 1, markCode: "A" }],
            finalAnswer: "5",
          },
        },
        {
          id: "cimg-u3-s1-pl-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Find the y-intercept of $y = 3x - 6$.",
          response: { type: "numeric", parts: [{ label: "a", answer: -6 }] },
          markscheme: {
            principles: [{ kind: "property", name: "y = mx + c", statement: "Set $x = 0$." }],
            steps: [
              { reasoning: "Set $x = 0$: $y = -6$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $-6$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "-6",
          },
        },
        {
          id: "cimg-u3-s1-pl-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Find the equation of the line with gradient $1$ passing through $(0, 4)$.",
          response: { type: "mcq", choices: [
            { id: "a", text: "$y = x - 4$" },
            { id: "b", text: "$y = x + 4$" },
            { id: "c", text: "$y = 1x$" },
            { id: "d", text: "$y = 4x + 1$" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "property", name: "y = mx + c", statement: "$m = 1$, $c = 4$." }],
            steps: [{ reasoning: "$y = 1x + 4 = x + 4$.", marks: 1, markCode: "A" }],
            finalAnswer: "$y = x + 4$",
          },
        },
        {
          id: "cimg-u3-s1-pl-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is the x-intercept of $y = 2x + 8$?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$-4$" },
            { id: "b", text: "$-8$" },
            { id: "c", text: "$8$" },
            { id: "d", text: "$4$" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "technique", name: "x-intercept", statement: "Set $y = 0$ and solve." }],
            steps: [{ reasoning: "$0 = 2x + 8$ → $x = -4$.", marks: 1, markCode: "A" }],
            finalAnswer: "$x = -4$",
          },
        },
        {
          id: "cimg-u3-s1-pl-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find the gradient of the line through $(1, 5)$ and $(4, 11)$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 2 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Gradient", statement: "$m = \\frac{\\Delta y}{\\Delta x}$." }],
            steps: [
              { reasoning: "$m = \\frac{11 - 5}{4 - 1} = \\frac{6}{3}$.", marks: 1, markCode: "M" },
              { reasoning: "$m = 2$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 2.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2",
          },
        },
        {
          id: "cimg-u3-s1-pl-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find the equation of the line with gradient $4$ passing through $(0, -3)$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "property", name: "y = mx + c", statement: "Substitute $m$ and $c$." }],
            steps: [
              { reasoning: "$m = 4$, $c = -3$.", marks: 1, markCode: "M" },
              { reasoning: "$y = 4x - 3$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $y = 4x - 3$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$y = 4x - 3$",
          },
        },
        {
          id: "cimg-u3-s1-pl-q11",
          difficulty: "core",
          totalMarks: 4,
          stem: "Find the equation of the line passing through $(-1, 2)$ and $(2, 8)$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Equation from two points", statement: "Gradient then intercept." }],
            steps: [
              { reasoning: "Gradient $= \\frac{8 - 2}{2 - (-1)} = \\frac{6}{3} = 2$.", marks: 1, markCode: "M" },
              { reasoning: "Using $(-1, 2)$: $2 = 2(-1) + c$ → $c = 4$.", marks: 1, markCode: "M" },
              { reasoning: "Equation: $y = 2x + 4$.", marks: 1, markCode: "M" },
              { reasoning: "Verify with $(2, 8)$: $2 \\times 2 + 4 = 8$. ✓", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$y = 2x + 4$",
          },
        },
        {
          id: "cimg-u3-s1-pl-q12",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which line is parallel to $y = 3x - 1$?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$y = 3x + 7$" },
            { id: "b", text: "$y = -3x + 7$" },
            { id: "c", text: "$y = -\\frac{1}{3}x + 7$" },
            { id: "d", text: "$y = x - 1$" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "property", name: "Parallel lines", statement: "Same gradient." }],
            steps: [{ reasoning: "Parallel lines have equal gradients; only $y = 3x + 7$ has $m = 3$.", marks: 1, markCode: "A" }],
            finalAnswer: "$y = 3x + 7$",
          },
        },
        {
          id: "cimg-u3-s1-pl-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Find the equation of the line perpendicular to $y = 2x + 3$ passing through $(0, 5)$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "property", name: "Perpendicular lines", statement: "$m_1 m_2 = -1$." }],
            steps: [
              { reasoning: "Perpendicular gradient: $m_2 = -\\frac{1}{2}$.", marks: 1, markCode: "M" },
              { reasoning: "Through $(0, 5)$: $c = 5$.", marks: 1, markCode: "M" },
              { reasoning: "Equation: $y = -\\frac{1}{2}x + 5$.", marks: 1, markCode: "M" },
              { reasoning: "Check: $2 \\times (-\\frac{1}{2}) = -1$. ✓", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$y = -\\frac{1}{2}x + 5$",
          },
        },
        {
          id: "cimg-u3-s1-pl-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Find the equation of the line passing through $(1, -2)$ and $(-2, 7)$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Equation from two points", statement: "Gradient then intercept." }],
            steps: [
              { reasoning: "Gradient $= \\frac{7 - (-2)}{-2 - 1} = \\frac{9}{-3} = -3$.", marks: 1, markCode: "M" },
              { reasoning: "Using $(1, -2)$: $-2 = -3(1) + c$ → $c = 1$.", marks: 1, markCode: "M" },
              { reasoning: "Equation: $y = -3x + 1$.", marks: 1, markCode: "M" },
              { reasoning: "Verify with $(-2, 7)$: $-3(-2) + 1 = 7$. ✓", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$y = -3x + 1$",
          },
        },
        {
          id: "cimg-u3-s1-pl-q15",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find the value of $y$ on the line $y = 2x - 5$ when $x = 4$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 3 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Substitution", statement: "Substitute $x = 4$." }],
            steps: [
              { reasoning: "$y = 2 \\times 4 - 5 = 8 - 5$.", marks: 1, markCode: "M" },
              { reasoning: "$y = 3$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 3.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "3",
          },
        },
        {
          id: "cimg-u3-s1-pl-q16",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In the equation $y = mx + c$, what does $m$ represent?",
          response: { type: "mcq", choices: [
            { id: "a", text: "The gradient" },
            { id: "b", text: "The x-intercept" },
            { id: "c", text: "The origin" },
            { id: "d", text: "The y-intercept" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "y = mx + c", statement: "$m$ = gradient, $c$ = y-intercept." }],
            steps: [{ reasoning: "$m$ is the gradient of the line.", marks: 1, markCode: "A" }],
            finalAnswer: "The gradient",
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
            { id: "a", text: "Upwards" },
            { id: "b", text: "Sideways" },
            { id: "c", text: "Downwards" },
            { id: "d", text: "Straight line" },
          ], correctChoiceId: "c" },
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
        {
          id: "cimg-u3-s1-qu-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What are the coordinates of the vertex of $y = x^2$?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$(0, 1)$" },
            { id: "b", text: "$(2, 4)$" },
            { id: "c", text: "$(0, 0)$" },
            { id: "d", text: "$(1, 1)$" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "property", name: "Quadratic vertex", statement: "Lowest point of $y = x^2$." }],
            steps: [{ reasoning: "Minimum at $x = 0$, $y = 0$: $(0, 0)$.", marks: 1, markCode: "A" }],
            finalAnswer: "$(0, 0)$",
          },
        },
        {
          id: "cimg-u3-s1-qu-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Find the y-intercept of $y = x^2 + 2x + 5$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 5 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "y-intercept", statement: "Set $x = 0$." }],
            steps: [
              { reasoning: "Set $x = 0$: $y = 5$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 5.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "5",
          },
        },
        {
          id: "cimg-u3-s1-qu-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What are the x-intercepts of $y = x^2 - 16$?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$x = 8$ and $x = -8$" },
            { id: "b", text: "$x = 4$ and $x = -4$" },
            { id: "c", text: "$x = 16$ and $x = -16$" },
            { id: "d", text: "There are none" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "technique", name: "x-intercepts", statement: "Set $y = 0$ and solve." }],
            steps: [{ reasoning: "$x^2 = 16$ → $x = \\pm 4$.", marks: 1, markCode: "A" }],
            finalAnswer: "$x = \\pm 4$",
          },
        },
        {
          id: "cimg-u3-s1-qu-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is the minimum value of $y = x^2 + 3$?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$-3$" },
            { id: "b", text: "0" },
            { id: "c", text: "3" },
            { id: "d", text: "1" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "property", name: "Quadratic vertex", statement: "Vertex is the minimum for $a > 0$." }],
            steps: [{ reasoning: "Minimum when $x = 0$: $y = 3$.", marks: 1, markCode: "A" }],
            finalAnswer: "3",
          },
        },
        {
          id: "cimg-u3-s1-qu-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the value of $y$ for $y = x^2 - 3x + 1$ when $x = 2$.",
          response: { type: "numeric", parts: [{ label: "a", answer: -1 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Substitution", statement: "Substitute $x = 2$." }],
            steps: [
              { reasoning: "$y = 2^2 - 3 \\times 2 + 1 = 4 - 6 + 1$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $-1$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "-1",
          },
        },
        {
          id: "cimg-u3-s1-qu-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find the coordinates of the vertex of $y = x^2 + 4x + 3$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Vertex", statement: "Complete the square." }],
            steps: [
              { reasoning: "$y = (x + 2)^2 - 4 + 3 = (x + 2)^2 - 1$.", marks: 1, markCode: "M" },
              { reasoning: "Vertex: $(-2, -1)$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $(-2, -1)$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$(-2, -1)$",
          },
        },
        {
          id: "cimg-u3-s1-qu-q11",
          difficulty: "core",
          totalMarks: 4,
          stem: "Find the x-intercepts of $y = x^2 - x - 6$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "x-intercepts", statement: "Set $y = 0$ and factorise." }],
            steps: [
              { reasoning: "$x^2 - x - 6 = 0$.", marks: 1, markCode: "M" },
              { reasoning: "Factorise: $(x - 3)(x + 2) = 0$.", marks: 1, markCode: "M" },
              { reasoning: "$x = 3$ or $x = -2$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $x = 3$ and $x = -2$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x = 3$ and $x = -2$",
          },
        },
        {
          id: "cimg-u3-s1-qu-q12",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which equation has its vertex at $(0, -4)$?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$y = (x - 4)^2$" },
            { id: "b", text: "$y = x^2 - 2x - 4$" },
            { id: "c", text: "$y = x^2 - 4$" },
            { id: "d", text: "$y = x^2 + 4$" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "property", name: "Quadratic vertex", statement: "$y = x^2 + c$ has vertex $(0, c)$." }],
            steps: [{ reasoning: "$y = x^2 - 4$ has vertex $(0, -4)$.", marks: 1, markCode: "A" }],
            finalAnswer: "$y = x^2 - 4$",
          },
        },
        {
          id: "cimg-u3-s1-qu-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Find the coordinates of the vertex of $y = -x^2 + 2x + 3$, and state whether it is a maximum or minimum.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Vertex", statement: "Complete the square; negative $a$ gives a maximum." }],
            steps: [
              { reasoning: "$y = -(x^2 - 2x) + 3 = -(x - 1)^2 + 1 + 3$.", marks: 1, markCode: "M" },
              { reasoning: "$y = -(x - 1)^2 + 4$.", marks: 1, markCode: "M" },
              { reasoning: "Vertex: $(1, 4)$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $(1, 4)$, a maximum (since $a < 0$).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$(1, 4)$ maximum",
          },
        },
        {
          id: "cimg-u3-s1-qu-q14",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Find the minimum value of $y = x^2 - 8x + 20$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 4 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Vertex", statement: "Complete the square or symmetry." }],
            steps: [
              { reasoning: "$y = (x - 4)^2 - 16 + 20 = (x - 4)^2 + 4$.", marks: 1, markCode: "M" },
              { reasoning: "Minimum value is $4$ at $x = 4$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 4.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "4",
          },
        },
        {
          id: "cimg-u3-s1-qu-q15",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find the x-intercepts of $y = 2x^2 - 4x$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "x-intercepts", statement: "Factorise first." }],
            steps: [
              { reasoning: "$2x^2 - 4x = 0$ → $2x(x - 2) = 0$.", marks: 1, markCode: "M" },
              { reasoning: "$x = 0$ or $x = 2$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $x = 0$ and $x = 2$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x = 0$ and $x = 2$",
          },
        },
        {
          id: "cimg-u3-s1-qu-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Sketch $y = x^2 - 2x - 3$, showing the intercepts and vertex.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Sketching quadratics", statement: "Find key points." }],
            steps: [
              { reasoning: "y-intercept: $(0, -3)$.", marks: 1, markCode: "M" },
              { reasoning: "x-intercepts: $(x - 3)(x + 1) = 0$ → $x = 3$ and $x = -1$.", marks: 1, markCode: "M" },
              { reasoning: "Vertex: $y = (x - 1)^2 - 4$ → $(1, -4)$, opens upwards.", marks: 1, markCode: "M" },
              { reasoning: "Correct smooth parabola through these points.", marks: 1, markCode: "A" },
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
