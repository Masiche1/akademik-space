import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "cimg-u3-lesson-3-2",
  code: "3-2",
  title: "Coordinate Geometry",
  goal: "I CAN find midpoints, distances and gradients between points.",
  standards: ["Cambridge IGCSE Mathematics 0580 Core: coordinate geometry"],
  vocabulary: [
    { term: "Midpoint", definition: "The point halfway between two points." },
    { term: "Distance", definition: "Length between two points." },
    { term: "Parallel lines", definition: "Lines with the same gradient." },
    { term: "Perpendicular", definition: "Lines meeting at 90°; gradients multiply to $-1$." },
    { term: "Gradient", definition: "$\\frac{y_2 - y_1}{x_2 - x_1}$." },
  ],
  concepts: [
    {
      id: "cimg-u3-s2-midpoint-distance",
      title: "Midpoint and distance",
      skill: "Calculate midpoints and distances at IGCSE level.",
      lesson: {
        sections: [
          {
            heading: "Midpoint",
            body: "Average the x-coordinates and the y-coordinates: $\\left(\\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2}\\right)$.",
          },
          {
            heading: "Distance",
            body: "Use Pythagoras: $d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$. For horizontal/vertical lines, it's just the difference.",
          },
        ],
        keyFormulas: [
          { name: "Midpoint", statement: "$\\left(\\frac{x_1+x_2}{2}, \\frac{y_1+y_2}{2}\\right)$" },
          { name: "Distance", statement: "$d = \\sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}$" },
        ],
        workedExample: {
          problem: "Find the midpoint of $(2, 3)$ and $(8, 9)$.",
          solution: "$\\left(\\frac{2+8}{2}, \\frac{3+9}{2}\\right) = (5, 6)$.",
        },
      },
      questions: [
        {
          id: "cimg-u3-s2-md-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Find the midpoint of $(0, 0)$ and $(6, 8)$.",
          response: { type: "mcq", choices: [
            { id: "a", text: "$(3, 4)$" }, { id: "b", text: "$(6, 8)$" }, { id: "c", text: "$(2, 4)$" }, { id: "d", text: "$(3, 8)$" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "formula", name: "Midpoint", statement: "Average coordinates." }],
            steps: [{ reasoning: "$\\left(\\frac{0+6}{2}, \\frac{0+8}{2}\\right) = (3, 4)$.", marks: 1, markCode: "A" }],
            finalAnswer: "$(3, 4)$",
          },
        },
        {
          id: "cimg-u3-s2-md-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Find the distance between $(1, 2)$ and $(4, 6)$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 5 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Distance", statement: "Pythagoras." }],
            steps: [
              { reasoning: "$\\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 5.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "5",
          },
        },
        {
          id: "cimg-u3-s2-md-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find the midpoint of $(-2, 5)$ and $(4, -3)$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "Midpoint", statement: "Average each coordinate." }],
            steps: [
              { reasoning: "$x$: $\\frac{-2 + 4}{2} = 1$; $y$: $\\frac{5 + (-3)}{2} = 1$.", marks: 1, markCode: "M" },
              { reasoning: "Midpoint: $(1, 1)$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $(1, 1)$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$(1, 1)$",
          },
        },
        {
          id: "cimg-u3-s2-md-q4",
          difficulty: "core",
          totalMarks: 3,
          stem: ".",
          response: { type: "numeric", parts: [{ label: "a", answer: 10 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Distance", statement: "$\\sqrt{\\Delta x^2 + \\Delta y^2}$." }],
            steps: [
              { reasoning: "$\\Delta x = 6$, $\\Delta y = 8$.", marks: 1, markCode: "M" },
              { reasoning: "$d = \\sqrt{36 + 64} = \\sqrt{100}$.", marks: 1, markCode: "M" },
              { reasoning: "$d = 10$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "10",
          },
        },
      ],
    },
    {
      id: "cimg-u3-s2-gradients",
      title: "Gradients and parallel lines",
      skill: "Find gradients and identify parallel lines at IGCSE level.",
      lesson: {
        sections: [
          {
            heading: "Gradient between points",
            body: "$m = \\frac{y_2 - y_1}{x_2 - x_1}$. Between $(2, 3)$ and $(6, 11)$: $\\frac{11 - 3}{6 - 2} = \\frac{8}{4} = 2$.",
          },
          {
            heading: "Parallel and perpendicular",
            body: "Parallel lines have equal gradients. Perpendicular lines have gradients multiplying to $-1$: $m_1 \\times m_2 = -1$.",
          },
        ],
        keyFormulas: [
          { name: "Gradient", statement: "$m = \\frac{y_2 - y_1}{x_2 - x_1}$" },
        ],
        workedExample: {
          problem: "Find the gradient of the line through $(1, 4)$ and $(5, 12)$.",
          solution: "$m = \\frac{12 - 4}{5 - 1} = \\frac{8}{4} = 2$.",
        },
      },
      questions: [
        {
          id: "cimg-u3-s2-gr-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Are lines with gradients 3 and 3 parallel?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Yes" }, { id: "b", text: "No" }, { id: "c", text: "Only sometimes" }, { id: "d", text: "Cannot tell" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "property", name: "Parallel lines", statement: "Equal gradients." }],
            steps: [{ reasoning: "Equal gradients → parallel.", marks: 1, markCode: "A" }],
            finalAnswer: "Yes",
          },
        },
        {
          id: "cimg-u3-s2-gr-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Find the gradient of the line through $(0, 0)$ and $(3, 9)$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 3 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Gradient", statement: "Rise over run." }],
            steps: [
              { reasoning: "$m = \\frac{9 - 0}{3 - 0} = 3$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 3.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "3",
          },
        },
        {
          id: "cimg-u3-s2-gr-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find the gradient of the line through $(-1, 2)$ and $(3, 10)$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 2 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Gradient", statement: "Careful with negatives." }],
            steps: [
              { reasoning: "$m = \\frac{10 - 2}{3 - (-1)} = \\frac{8}{4}$.", marks: 1, markCode: "M" },
              { reasoning: "$m = 2$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 2.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2",
          },
        },
        {
          id: "cimg-u3-s2-gr-q4",
          difficulty: "core",
          totalMarks: 3,
          stem: ".",
          response: { type: "numeric", parts: [{ label: "a", answer: -0.25 }] },
          markscheme: {
            principles: [{ kind: "property", name: "Perpendicular", statement: "$m_1 m_2 = -1$." }],
            steps: [
              { reasoning: "$m_2 = -\\frac{1}{4}$.", marks: 1, markCode: "M" },
              { reasoning: "$m_2 = -0.25$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $-0.25$ (or $-\\frac{1}{4}$).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$-0.25$",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cimg-u3-s2-coord-notes",
      title: "Coordinate geometry — revision notes",
      summary: "Midpoint, distance, gradients, parallel/perpendicular.",
      sections: [
        { heading: "Midpoint & distance", body: "Midpoint: average coordinates. Distance: Pythagoras $\\sqrt{\\Delta x^2 + \\Delta y^2}$." },
        { heading: "Gradients", body: "$m = \\frac{\\Delta y}{\\Delta x}$. Parallel: equal $m$. Perpendicular: $m_1 m_2 = -1$." },
      ],
    },
  ],
};
