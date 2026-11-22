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
            { id: "a", text: "$(6, 8)$" },
            { id: "b", text: "$(3, 4)$" },
            { id: "c", text: "$(3, 8)$" },
            { id: "d", text: "$(2, 4)$" },
          ], correctChoiceId: "b" },
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
        {
          id: "cimg-u3-s2-md-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Find the midpoint of $(2, 0)$ and $(6, 4)$.",
          response: { type: "mcq", choices: [
            { id: "a", text: "$(3, 2)$" },
            { id: "b", text: "$(8, 4)$" },
            { id: "c", text: "$(4, 4)$" },
            { id: "d", text: "$(4, 2)$" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "formula", name: "Midpoint", statement: "Average coordinates." }],
            steps: [{ reasoning: "$\\left(\\frac{2+6}{2}, \\frac{0+4}{2}\\right) = (4, 2)$.", marks: 1, markCode: "A" }],
            finalAnswer: "$(4, 2)$",
          },
        },
        {
          id: "cimg-u3-s2-md-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Find the distance between $(0, 0)$ and $(3, 4)$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 5 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Distance", statement: "Pythagoras." }],
            steps: [
              { reasoning: "$\\sqrt{3^2 + 4^2} = \\sqrt{25} = 5$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 5.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "5",
          },
        },
        {
          id: "cimg-u3-s2-md-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Find the distance between $(1, 1)$ and $(1, 7)$.",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\sqrt{40}$" },
            { id: "b", text: "6" },
            { id: "c", text: "$\\sqrt{52}$" },
            { id: "d", text: "8" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "formula", name: "Distance", statement: "Same $x$: just subtract $y$ values." }],
            steps: [{ reasoning: "Vertical line: $|7 - 1| = 6$.", marks: 1, markCode: "A" }],
            finalAnswer: "6",
          },
        },
        {
          id: "cimg-u3-s2-md-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find the distance between $(-3, 1)$ and $(1, 5)$, giving your answer correct to 2 decimal places.",
          response: { type: "numeric", parts: [{ label: "a", answer: 5.66, tolerance: 0.01 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Distance", statement: "$\\sqrt{\\Delta x^2 + \\Delta y^2}$." }],
            steps: [
              { reasoning: "$\\Delta x = 4$, $\\Delta y = 4$: $d = \\sqrt{16 + 16} = \\sqrt{32}$.", marks: 1, markCode: "M" },
              { reasoning: "$\\sqrt{32} = 4\\sqrt{2} \\approx 5.66$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $5.66$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$5.66$",
          },
        },
        {
          id: "cimg-u3-s2-md-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find the midpoint of $(5, -2)$ and $(1, 6)$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "Midpoint", statement: "Average each coordinate." }],
            steps: [
              { reasoning: "$x$: $\\frac{5 + 1}{2} = 3$; $y$: $\\frac{-2 + 6}{2} = 2$.", marks: 1, markCode: "M" },
              { reasoning: "Midpoint: $(3, 2)$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $(3, 2)$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$(3, 2)$",
          },
        },
        {
          id: "cimg-u3-s2-md-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find the distance between $(2, 3)$ and $(7, 7)$, giving your answer correct to 2 decimal places.",
          response: { type: "numeric", parts: [{ label: "a", answer: 6.4, tolerance: 0.01 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Distance", statement: "$\\sqrt{\\Delta x^2 + \\Delta y^2}$." }],
            steps: [
              { reasoning: "$\\Delta x = 5$, $\\Delta y = 4$: $d = \\sqrt{25 + 16} = \\sqrt{41}$.", marks: 1, markCode: "M" },
              { reasoning: "$\\sqrt{41} \\approx 6.40$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $6.40$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$6.40$",
          },
        },
        {
          id: "cimg-u3-s2-md-q11",
          difficulty: "core",
          totalMarks: 4,
          stem: "Find the midpoint of $A(1, 2)$ and $B(7, 10)$, and hence find the length of $AB$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "Midpoint and distance", statement: "Average, then Pythagoras." }],
            steps: [
              { reasoning: "Midpoint: $\\left(\\frac{1+7}{2}, \\frac{2+10}{2}\\right) = (4, 6)$.", marks: 1, markCode: "M" },
              { reasoning: "$AB = \\sqrt{(7-1)^2 + (10-2)^2} = \\sqrt{36 + 64} = \\sqrt{100}$.", marks: 1, markCode: "M" },
              { reasoning: "$AB = 10$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: midpoint $(4, 6)$, length $10$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$(4, 6)$; $10$",
          },
        },
        {
          id: "cimg-u3-s2-md-q12",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Is $(4, 5)$ the midpoint of $(1, 3)$ and $(7, 7)$?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Only sometimes" },
            { id: "b", text: "Cannot tell" },
            { id: "c", text: "Yes" },
            { id: "d", text: "No" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "formula", name: "Midpoint", statement: "Check by averaging." }],
            steps: [{ reasoning: "Midpoint $= \\left(\\frac{1+7}{2}, \\frac{3+7}{2}\\right) = (4, 5)$. Yes.", marks: 1, markCode: "A" }],
            finalAnswer: "Yes",
          },
        },
        {
          id: "cimg-u3-s2-md-q13",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Find the distance between $(-2, -3)$ and $(4, 9)$, giving your answer correct to 2 decimal places.",
          response: { type: "numeric", parts: [{ label: "a", answer: 13.42, tolerance: 0.01 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Distance", statement: "Handle negative coordinates." }],
            steps: [
              { reasoning: "$\\Delta x = 6$, $\\Delta y = 12$: $d = \\sqrt{36 + 144} = \\sqrt{180}$.", marks: 1, markCode: "M" },
              { reasoning: "$\\sqrt{180} = 6\\sqrt{5} \\approx 13.42$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $13.42$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$13.42$",
          },
        },
        {
          id: "cimg-u3-s2-md-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Point $P$ is the midpoint of $(0, 0)$ and $(8, 6)$. Find the distance of $P$ from the origin.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "Midpoint and distance", statement: "Find $P$, then use distance formula." }],
            steps: [
              { reasoning: "$P = \\left(\\frac{0+8}{2}, \\frac{0+6}{2}\\right) = (4, 3)$.", marks: 1, markCode: "M" },
              { reasoning: "Distance from origin: $\\sqrt{4^2 + 3^2} = \\sqrt{16 + 9} = \\sqrt{25}$.", marks: 1, markCode: "M" },
              { reasoning: "$= 5$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $5$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "5",
          },
        },
        {
          id: "cimg-u3-s2-md-q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the distance between $(0, 5)$ and $(12, 5)$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 12 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Distance", statement: "Horizontal line: subtract $x$ values." }],
            steps: [
              { reasoning: "$|12 - 0| = 12$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 12.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "12",
          },
        },
        {
          id: "cimg-u3-s2-md-q16",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "What is the midpoint of $(-6, 2)$ and $(2, -4)$?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$(4, -6)$" },
            { id: "b", text: "$(-2, -3)$" },
            { id: "c", text: "$(-4, -2)$" },
            { id: "d", text: "$(-2, -1)$" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "formula", name: "Midpoint", statement: "Average each coordinate." }],
            steps: [{ reasoning: "$\\left(\\frac{-6+2}{2}, \\frac{2+(-4)}{2}\\right) = (-2, -1)$.", marks: 1, markCode: "A" }],
            finalAnswer: "$(-2, -1)$",
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
            { id: "a", text: "No" },
            { id: "b", text: "Only sometimes" },
            { id: "c", text: "Yes" },
            { id: "d", text: "Cannot tell" },
          ], correctChoiceId: "c" },
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
        {
          id: "cimg-u3-s2-gr-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Find the gradient of the line through $(0, 0)$ and $(2, 6)$.",
          response: { type: "mcq", choices: [
            { id: "a", text: "6" },
            { id: "b", text: "3" },
            { id: "c", text: "2" },
            { id: "d", text: "12" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "technique", name: "Gradient", statement: "Rise over run." }],
            steps: [{ reasoning: "$m = \\frac{6 - 0}{2 - 0} = 3$.", marks: 1, markCode: "A" }],
            finalAnswer: "3",
          },
        },
        {
          id: "cimg-u3-s2-gr-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Find the gradient of the line through $(1, 1)$ and $(3, 7)$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 3 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Gradient", statement: "$\\frac{\\Delta y}{\\Delta x}$." }],
            steps: [
              { reasoning: "$m = \\frac{7 - 1}{3 - 1} = \\frac{6}{2}$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 3.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "3",
          },
        },
        {
          id: "cimg-u3-s2-gr-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Two lines are parallel. What can you say about their gradients?",
          response: { type: "mcq", choices: [
            { id: "a", text: "They multiply to $-1$" },
            { id: "b", text: "They are negative" },
            { id: "c", text: "They are zero" },
            { id: "d", text: "They are equal" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "property", name: "Parallel lines", statement: "Equal gradients." }],
            steps: [{ reasoning: "Parallel lines have the same gradient.", marks: 1, markCode: "A" }],
            finalAnswer: "Equal",
          },
        },
        {
          id: "cimg-u3-s2-gr-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find the gradient of the line through $(-2, 3)$ and $(4, -5)$, giving your answer as a fraction.",
          response: { type: "numeric", parts: [{ label: "a", answer: -1.33, tolerance: 0.01 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Gradient", statement: "Careful with negatives." }],
            steps: [
              { reasoning: "$m = \\frac{-5 - 3}{4 - (-2)} = \\frac{-8}{6}$.", marks: 1, markCode: "M" },
              { reasoning: "$m = -\\frac{4}{3} \\approx -1.33$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $-\\frac{4}{3}$ (or $-1.33$).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$-\\frac{4}{3}$",
          },
        },
        {
          id: "cimg-u3-s2-gr-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is the gradient of the line $y = -3x + 2$?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$-\\frac{1}{3}$" },
            { id: "b", text: "2" },
            { id: "c", text: "3" },
            { id: "d", text: "$-3$" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "property", name: "y = mx + c", statement: "Coefficient of $x$ is the gradient." }],
            steps: [{ reasoning: "$m = -3$.", marks: 1, markCode: "A" }],
            finalAnswer: "$-3$",
          },
        },
        {
          id: "cimg-u3-s2-gr-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "A line has gradient $5$. What is the gradient of a line perpendicular to it?",
          response: { type: "numeric", parts: [{ label: "a", answer: -0.2 }] },
          markscheme: {
            principles: [{ kind: "property", name: "Perpendicular", statement: "$m_1 m_2 = -1$." }],
            steps: [
              { reasoning: "$m_2 = -\\frac{1}{5}$.", marks: 1, markCode: "M" },
              { reasoning: "$m_2 = -0.2$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $-0.2$ (or $-\\frac{1}{5}$).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$-0.2$",
          },
        },
        {
          id: "cimg-u3-s2-gr-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find the gradient of the line through $(3, -1)$ and $(7, 3)$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Gradient", statement: "Rise over run." }],
            steps: [
              { reasoning: "$m = \\frac{3 - (-1)}{7 - 3} = \\frac{4}{4}$.", marks: 1, markCode: "M" },
              { reasoning: "$m = 1$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 1.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1",
          },
        },
        {
          id: "cimg-u3-s2-gr-q12",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "What is the gradient of a line perpendicular to $y = 4x - 1$?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$-\\frac{1}{4}$" },
            { id: "b", text: "$\\frac{1}{4}$" },
            { id: "c", text: "4" },
            { id: "d", text: "$-4$" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "property", name: "Perpendicular", statement: "$m_1 m_2 = -1$." }],
            steps: [{ reasoning: "$m_2 = -\\frac{1}{4}$.", marks: 1, markCode: "A" }],
            finalAnswer: "$-\\frac{1}{4}$",
          },
        },
        {
          id: "cimg-u3-s2-gr-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A line $L$ has gradient $2$ and passes through $(1, 3)$. Show that the point $(4, 9)$ lies on $L$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Line equation", statement: "Find equation, then test the point." }],
            steps: [
              { reasoning: "$3 = 2(1) + c$ → $c = 1$, so $L: y = 2x + 1$.", marks: 1, markCode: "M" },
              { reasoning: "Substitute $x = 4$: $y = 2(4) + 1 = 9$.", marks: 1, markCode: "M" },
              { reasoning: "This matches the given $y = 9$.", marks: 1, markCode: "M" },
              { reasoning: "Therefore $(4, 9)$ lies on $L$. ✓", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Point lies on $L$",
          },
        },
        {
          id: "cimg-u3-s2-gr-q14",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Find the gradient of the line through $(1, -2)$ and $(5, 4)$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 1.5 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Gradient", statement: "$\\frac{\\Delta y}{\\Delta x}$." }],
            steps: [
              { reasoning: "$m = \\frac{4 - (-2)}{5 - 1} = \\frac{6}{4}$.", marks: 1, markCode: "M" },
              { reasoning: "$m = \\frac{3}{2} = 1.5$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 1.5 (or $\\frac{3}{2}$).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1.5",
          },
        },
        {
          id: "cimg-u3-s2-gr-q15",
          difficulty: "core",
          totalMarks: 3,
          stem: "Two lines have gradients $\\frac{2}{3}$ and $-\\frac{3}{2}$. Are the lines perpendicular? Explain.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "property", name: "Perpendicular", statement: "$m_1 m_2 = -1$." }],
            steps: [
              { reasoning: "Product: $\\frac{2}{3} \\times \\left(-\\frac{3}{2}\\right) = -1$.", marks: 1, markCode: "M" },
              { reasoning: "The product is $-1$.", marks: 1, markCode: "M" },
              { reasoning: "Yes, the lines are perpendicular.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Yes",
          },
        },
        {
          id: "cimg-u3-s2-gr-q16",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Find the gradient of the line through $(5, 1)$ and $(1, 9)$.",
          response: { type: "mcq", choices: [
            { id: "a", text: "2" },
            { id: "b", text: "$\\frac{1}{2}$" },
            { id: "c", text: "$-4$" },
            { id: "d", text: "$-2$" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "technique", name: "Gradient", statement: "Watch the order of subtraction." }],
            steps: [{ reasoning: "$m = \\frac{9 - 1}{1 - 5} = \\frac{8}{-4} = -2$.", marks: 1, markCode: "A" }],
            finalAnswer: "$-2$",
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
