import type { Lesson } from "../../../types.ts";

export const lesson151: Lesson = {
  id: "cial-m-u5-lesson-5-1",
  code: "5-1",
  title: "Straight lines in coordinate geometry",
  goal: "I CAN find equations of lines, test parallel/perpendicular relationships and find intersections.",
  standards: ["9709 Pure Mathematics 1: coordinate geometry"],
  vocabulary: [
    {
      term: "Gradient",
      definition: "Rate of change of y with respect to x; slope of a line.",
    },
    {
      term: "Equation of a line",
      definition: "$y = mx + c$ where m is gradient and c is y-intercept.",
    },
    {
      term: "Parallel lines",
      definition: "Lines with equal gradients that never meet.",
    },
    {
      term: "Perpendicular lines",
      definition: "Lines whose gradients multiply to -1.",
    },
    { term: "Midpoint", definition: "Point halfway between two points." },
    {
      term: "Point of intersection",
      definition:
        "Point where two lines meet; found by solving simultaneously.",
    },
  ],
  concepts: [
    {
      id: "cial-m-u5-lines",
      title: "Equations of straight lines",
      skill: "Find gradients, equations and relationships between lines.",
      lesson: {
        sections: [
          {
            heading: "Gradient and equation",
            body: "Gradient $m = \\frac{y_2 - y_1}{x_2 - x_1}$. Through point $(x_1, y_1)$: $y - y_1 = m(x - x_1)$. Standard form: $ax + by + c = 0$.",
          },
          {
            heading: "Parallel and perpendicular",
            body: "Parallel: same gradient $m_1 = m_2$. Perpendicular: $m_1 m_2 = -1$, i.e. $m_2 = -\\frac{1}{m_1}$. These relationships are exam favourites.",
          },
          {
            heading: "Midpoint and distance",
            body: "Midpoint: $\\left(\\frac{x_1+x_2}{2}, \\frac{y_1+y_2}{2}\\right)$. Distance: $\\sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}$.",
          },
        ],
        keyFormulas: [
          { name: "Gradient", statement: "$m = \\frac{y_2-y_1}{x_2-x_1}$" },
          { name: "Line equation", statement: "$y - y_1 = m(x - x_1)$" },
          { name: "Perpendicular", statement: "$m_1 m_2 = -1$" },
        ],
        workedExample: {
          problem:
            "Find the equation of the line through (2, 3) with gradient 4.",
          solution: "$y - 3 = 4(x - 2) \\Rightarrow y = 4x - 5$.",
        },
      },
      questions: [
        {
          id: "cial-m-u5-ln-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the gradient of the line through (1, 2) and (3, 8)?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$3$" },
              { id: "b", text: "$\\frac{1}{3}$" },
              { id: "c", text: "$6$" },
              { id: "d", text: "$2$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Gradient",
                statement: "$m = \\frac{y_2-y_1}{x_2-x_1}$.",
              },
            ],
            steps: [
              {
                reasoning: "$m = \\frac{8-2}{3-1} = \\frac{6}{2} = 3$.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** $3$",
            commonErrors: ["Subtracting in wrong order."],
          },
        },
        {
          id: "cial-m-u5-ln-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the equation of the line through (0, -2) with gradient 3.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Line equation",
                statement: "$y - y_1 = m(x - x_1)$.",
              },
            ],
            steps: [
              { reasoning: "$y + 2 = 3(x - 0)$.", marks: 1, markCode: "M" },
              { reasoning: "$y = 3x - 2$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$y = 3x - 2$",
            commonErrors: ["Sign error with negative intercept."],
          },
        },
        {
          id: "cial-m-u5-ln-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Line L has equation $y = 2x + 1$. Find the equation of the line perpendicular to L passing through (4, 5).",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Perpendicular",
                statement: "$m_1 m_2 = -1$; perpendicular gradient $= -1/2$.",
              },
            ],
            steps: [
              {
                reasoning: "Perpendicular gradient: $-\\frac{1}{2}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$y - 5 = -\\frac{1}{2}(x - 4)$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$y = -\\frac{1}{2}x + 7$ or $x + 2y = 14$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Correct equation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$y = -\\frac{1}{2}x + 7$",
            commonErrors: [
              "Using same gradient instead of negative reciprocal.",
            ],
          },
        },
        {
          id: "cial-m-u5-ln-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Straight lines.",
          parts: [
            { label: "a", prompt: "Gradient formula?", marks: 1 },
            {
              label: "b",
              prompt: "Gradient of line through (1,2) and (3,8)?",
              marks: 2,
            },
            { label: "c", prompt: "Perpendicular gradient rule?", marks: 2 },
            {
              label: "d",
              prompt: "Find intersection of $y=2x+1$ and $y=x+4$.",
              marks: 5,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Lines",
                statement: "Gradient+equation+perpendicular+intersection.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$m = \\frac{y_2-y_1}{x_2-x_1}$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$m = \\frac{8-2}{3-1} = 3$.",
                marks: 1,
                markCode: "M",
              },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
              {
                part: "c",
                reasoning: "$m_1 m_2 = -1$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Negative reciprocal.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Set equations equal: $2x+1 = x+4$.",
                marks: 1,
                markCode: "M",
              },
              { part: "d", reasoning: "$x = 3$.", marks: 1, markCode: "M" },
              {
                part: "d",
                reasoning: "$y = 2(3)+1 = 7$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Point (3, 7).",
                marks: 1,
                markCode: "M",
              },
              { part: "d", reasoning: "Correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) m=Δy/Δx (b) 3 (c) m₁m₂=−1 (d) (3,7)",
          },
        },
        {
          id: "cial-m-u5-ln-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the gradient of the line through (0, 0) and (3, 9)?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$3$" },
              { id: "b", text: "$6$" },
              { id: "c", text: "$\\frac{1}{3}$" },
              { id: "d", text: "$9$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Gradient",
                statement: "$m = \\frac{y_2-y_1}{x_2-x_1}$.",
              },
            ],
            steps: [
              { reasoning: "$m = \\frac{9-0}{3-0} = 3$.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(a)** $3$",
            commonErrors: ["Dividing x-change by y-change."],
          },
        },
        {
          id: "cial-m-u5-ln-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the distance between the points (0, 0) and (6, 8).",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 10 }],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Distance",
                statement: "$d = \\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}$.",
              },
            ],
            steps: [
              {
                reasoning: "$d = \\sqrt{36 + 64} = \\sqrt{100}$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$d = 10$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$10$",
            commonErrors: ["Adding the coordinate differences without squaring."],
          },
        },
        {
          id: "cial-m-u5-ln-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the equation of the line through (2, 5) with gradient -3.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Line equation",
                statement: "$y - y_1 = m(x - x_1)$.",
              },
            ],
            steps: [
              { reasoning: "$y - 5 = -3(x - 2)$.", marks: 1, markCode: "M" },
              { reasoning: "$y = -3x + 11$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$y = -3x + 11$",
            commonErrors: ["Sign error when expanding $-3(x-2)$."],
          },
        },
        {
          id: "cial-m-u5-ln-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which line is parallel to $y = 2x - 4$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$y = x - 4$" },
              { id: "b", text: "$y = -\\frac{1}{2}x + 7$" },
              { id: "c", text: "$y = 7x + 2$" },
              { id: "d", text: "$y = 2x + 7$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Parallel",
                statement: "Parallel lines have equal gradients.",
              },
            ],
            steps: [
              {
                reasoning: "Only $y=2x+7$ has gradient 2.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** $y = 2x + 7$",
            commonErrors: ["Matching the intercept instead of the gradient."],
          },
        },
        {
          id: "cial-m-u5-ln-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the y-intercept of the line $y = 5x - 9$?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: -9 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "y-intercept",
                statement: "Value of $c$ in $y = mx + c$.",
              },
            ],
            steps: [
              { reasoning: "$c = -9$.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "$-9$",
            commonErrors: ["Reporting the gradient instead."],
          },
        },
        {
          id: "cial-m-u5-ln-q10",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Find the point of intersection of $y = 2x + 1$ and $y = -x + 7$.",
          response: {
            type: "numeric",
            parts: [
              { label: "x", answer: 2 },
              { label: "y", answer: 5 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Intersection",
                statement: "Set the equations equal and solve.",
              },
            ],
            steps: [
              { reasoning: "$2x + 1 = -x + 7$.", marks: 1, markCode: "M" },
              { reasoning: "$3x = 6$, so $x = 2$.", marks: 1, markCode: "M" },
              { reasoning: "$y = 2(2) + 1 = 5$.", marks: 1, markCode: "M" },
              { reasoning: "Point $(2, 5)$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$(2, 5)$",
            commonErrors: ["Substituting back into only one equation."],
          },
        },
        {
          id: "cial-m-u5-ln-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "What is the gradient of a line perpendicular to $y = 3x - 2$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$-\\frac{1}{3}$" },
              { id: "b", text: "$3$" },
              { id: "c", text: "$\\frac{1}{3}$" },
              { id: "d", text: "$-3$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Perpendicular",
                statement: "Perpendicular gradient $= -\\frac{1}{m}$.",
              },
            ],
            steps: [
              { reasoning: "$m = 3 \\Rightarrow m_\\perp = -\\frac{1}{3}$.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(b)** $-\\frac{1}{3}$",
            commonErrors: ["Using $-m$ instead of $-1/m$."],
          },
        },
        {
          id: "cial-m-u5-ln-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find the x-coordinate of the midpoint of the points (2, 4) and (8, 10).",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 5 }],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Midpoint",
                statement: "$x = \\frac{x_1+x_2}{2}$.",
              },
            ],
            steps: [
              { reasoning: "$x = \\frac{2+8}{2}$.", marks: 1, markCode: "M" },
              { reasoning: "$= \\frac{10}{2} = 5$.", marks: 1, markCode: "M" },
              { reasoning: "Correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$5$",
            commonErrors: ["Adding without dividing by 2."],
          },
        },
        {
          id: "cial-m-u5-ln-q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find the equation of the line through (3, 1) parallel to $y = -2x + 5$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Parallel line",
                statement: "Same gradient; use point-gradient form.",
              },
            ],
            steps: [
              { reasoning: "$m = -2$; $y - 1 = -2(x - 3)$.", marks: 1, markCode: "M" },
              { reasoning: "$y = -2x + 7$.", marks: 1, markCode: "M" },
              { reasoning: "Correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$y = -2x + 7$",
            commonErrors: ["Using gradient +2 instead of -2."],
          },
        },
        {
          id: "cial-m-u5-ln-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the equation of the horizontal line through (4, -2)?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x + y = 2$" },
              { id: "b", text: "$y = -2$" },
              { id: "c", text: "$y = 4x - 2$" },
              { id: "d", text: "$x = 4$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Horizontal line",
                statement: "$y = c$ is horizontal.",
              },
            ],
            steps: [
              {
                reasoning: "Horizontal line has constant $y = -2$.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** $y = -2$",
            commonErrors: ["Writing $x=4$, which is vertical."],
          },
        },
        {
          id: "cial-m-u5-ln-q15",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Find the equation of the perpendicular bisector of the line segment joining A(1, 1) and B(5, 3).",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Perpendicular bisector",
                statement: "Through midpoint, gradient = negative reciprocal of AB.",
              },
            ],
            steps: [
              {
                reasoning: "Midpoint: $\\left(\\frac{1+5}{2}, \\frac{1+3}{2}\\right) = (3, 2)$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Gradient of AB: $\\frac{3-1}{5-1} = \\frac{1}{2}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Perpendicular gradient: $-2$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$y - 2 = -2(x - 3)$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$y = -2x + 8$ or $2x + y = 8$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2x + y = 8$",
            commonErrors: ["Using the same gradient as AB instead of the perpendicular."],
          },
        },
        {
          id: "cial-m-u5-ln-q16",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Straight lines.",
          parts: [
            { label: "a", prompt: "State the gradient formula.", marks: 1 },
            {
              label: "b",
              prompt: "Find the gradient of the line through (1, 2) and (4, 8).",
              marks: 2,
            },
            {
              label: "c",
              prompt: "State the condition for two lines to be perpendicular.",
              marks: 2,
            },
            {
              label: "d",
              prompt: "Find the equation of the line through (2, 3) perpendicular to $y = x + 1$.",
              marks: 3,
            },
            {
              label: "e",
              prompt: "Find the intersection of $y = x + 1$ and $y = -x + 5$.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Lines",
                statement: "Gradient+perpendicular+equation+intersection.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$m = \\frac{y_2-y_1}{x_2-x_1}$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$m = \\frac{8-2}{4-1} = 2$.",
                marks: 1,
                markCode: "M",
              },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
              {
                part: "c",
                reasoning: "$m_1 m_2 = -1$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Product of gradients is -1.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Perpendicular gradient $= -1$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "$y - 3 = -1(x - 2)$.",
                marks: 1,
                markCode: "M",
              },
              { part: "d", reasoning: "$y = -x + 5$.", marks: 1, markCode: "A" },
              {
                part: "e",
                reasoning: "$x + 1 = -x + 5 \\Rightarrow x = 2$.",
                marks: 1,
                markCode: "M",
              },
              { part: "e", reasoning: "$y = 3$; point $(2, 3)$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) m=Δy/Δx (b) 2 (c) m₁m₂=−1 (d) y=−x+5 (e) (2,3)",
          },
        },
      ],
    },
    {
      id: "cial-m-u5-circles",
      title: "Circles in coordinate geometry",
      skill: "Find equations of circles and equations of tangents.",
      lesson: {
        sections: [
          {
            heading: "Equation of a circle",
            body: "Centre $(a, b)$, radius r: $(x-a)^2 + (y-b)^2 = r^2$. Standard form: $x^2 + y^2 + 2gx + 2fy + c = 0$ where centre $(-g, -f)$ and $r = \\sqrt{g^2+f^2-c}$.",
          },
          {
            heading: "Completing the square",
            body: "To find centre and radius from general form: complete the square for x and y terms. $(x^2 + 2gx) = (x+g)^2 - g^2$.",
          },
          {
            heading: "Tangent to a circle",
            body: "Tangent at point P is perpendicular to radius at P. If centre is C and P is on circle, tangent gradient = $-\\frac{1}{\\text{radius gradient}}$. Alternatively, use $xx_1 + yy_1 = r^2$ for circle centred at origin.",
          },
        ],
        keyFormulas: [
          { name: "Circle", statement: "$(x-a)^2 + (y-b)^2 = r^2$" },
          {
            name: "Centre/radius",
            statement: "Centre $(-g,-f)$, $r=\\sqrt{g^2+f^2-c}$",
          },
        ],
        workedExample: {
          problem: "Find centre and radius of $x^2 + y^2 - 4x + 6y - 12 = 0$.",
          solution:
            "Complete square: $(x-2)^2 + (y+3)^2 = 25$. Centre (2, -3), radius 5.",
        },
      },
      questions: [
        {
          id: "cial-m-u5-ci-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the equation of a circle with centre (0,0) and radius 5?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x^2 + y^2 = 25$" },
              { id: "b", text: "$x^2 + y^2 = 5$" },
              { id: "c", text: "$x + y = 5$" },
              { id: "d", text: "$(x-5)^2 + (y-5)^2 = 0$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Circle equation",
                statement:
                  "$(x-a)^2+(y-b)^2=r^2$; centre (0,0), r=5 → $x^2+y^2=25$.",
              },
            ],
            steps: [
              { reasoning: "$r^2 = 25$, not r=5.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(a)** $x^2+y^2=25$",
            commonErrors: ["Writing r instead of r²."],
          },
        },
        {
          id: "cial-m-u5-ci-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the centre and radius of $(x-3)^2 + (y+2)^2 = 16$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Circle",
                statement: "Compare to $(x-a)^2+(y-b)^2=r^2$.",
              },
            ],
            steps: [
              { reasoning: "Centre (3, -2).", marks: 1, markCode: "M" },
              {
                reasoning: "Radius $\\sqrt{16} = 4$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Centre (3, -2), radius 4.",
            commonErrors: ["Radius = 16 instead of 4."],
          },
        },
        {
          id: "cial-m-u5-ci-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Find the equation of the tangent to $x^2 + y^2 = 25$ at point (3, 4).",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Tangent",
                statement:
                  "Tangent perpendicular to radius; use $xx_1+yy_1=r^2$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Radius gradient: $\\frac{4-0}{3-0} = \\frac{4}{3}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Tangent gradient: $-\\frac{3}{4}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$y - 4 = -\\frac{3}{4}(x - 3)$ → $3x + 4y = 25$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Correct equation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$3x + 4y = 25$",
            commonErrors: ["Using radius gradient for tangent."],
          },
        },
        {
          id: "cial-m-u5-ci-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Circles.",
          parts: [
            {
              label: "a",
              prompt: "Circle equation with centre (a,b), radius r?",
              marks: 1,
            },
            {
              label: "b",
              prompt: "Centre and radius of $(x-3)^2+(y+2)^2=16$?",
              marks: 2,
            },
            {
              label: "c",
              prompt: "How to find centre from $x^2+y^2+2gx+2fy+c=0$?",
              marks: 3,
            },
            {
              label: "d",
              prompt: "Tangent to $x^2+y^2=25$ at (3,4)?",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Circles",
                statement: "Equation+centre/radius+completing square+tangent.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$(x-a)^2+(y-b)^2=r^2$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Centre (3,-2).",
                marks: 1,
                markCode: "M",
              },
              { part: "b", reasoning: "Radius 4.", marks: 1, markCode: "A" },
              {
                part: "c",
                reasoning: "Complete the square on x and y.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Centre $(-g,-f)$, $r=\\sqrt{g^2+f^2-c}$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Method described.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Radius gradient 4/3.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Tangent gradient -3/4.",
                marks: 1,
                markCode: "M",
              },
              { part: "d", reasoning: "$3x+4y=25$.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "(a) (x−a)²+(y−b)²=r² (b) (3,−2), r=4 (c) complete square (d) 3x+4y=25",
          },
        },
        {
          id: "cial-m-u5-ci-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the radius of the circle $(x-2)^2 + (y+1)^2 = 36$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$12$" },
              { id: "b", text: "$\\sqrt{34}$" },
              { id: "c", text: "$36$" },
              { id: "d", text: "$6$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Circle",
                statement: "$r^2 = 36 \\Rightarrow r = 6$.",
              },
            ],
            steps: [
              { reasoning: "$r = \\sqrt{36} = 6$.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(a)** $6$",
            commonErrors: ["Radius = 36 instead of 6."],
          },
        },
        {
          id: "cial-m-u5-ci-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the centre of the circle $(x+1)^2 + (y-3)^2 = 25$.",
          response: {
            type: "numeric",
            parts: [
              { label: "x", answer: -1 },
              { label: "y", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Circle",
                statement: "Compare with $(x-a)^2+(y-b)^2=r^2$; centre $(a,b)$.",
              },
            ],
            steps: [
              { reasoning: "$a = -1$, $b = 3$.", marks: 1, markCode: "M" },
              { reasoning: "Centre $(-1, 3)$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$(-1, 3)$",
            commonErrors: ["Sign error: centre is $(-1,3)$, not $(1,-3)$."],
          },
        },
        {
          id: "cial-m-u5-ci-q7",
          difficulty: "core",
          totalMarks: 4,
          stem: "Find the centre and radius of $x^2 + y^2 + 6x - 4y - 12 = 0$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Completing the square",
                statement: "Group x and y terms; complete each square.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$(x^2+6x) + (y^2-4y) = 12 \\Rightarrow (x+3)^2 - 9 + (y-2)^2 - 4 = 12$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$(x+3)^2 + (y-2)^2 = 25$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Centre $(-3, 2)$.", marks: 1, markCode: "M" },
              { reasoning: "Radius $5$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Centre $(-3, 2)$, radius $5$.",
            commonErrors: ["Moving the constant to the wrong side."],
          },
        },
        {
          id: "cial-m-u5-ci-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "For the circle $x^2 + y^2 + 2gx + 2fy + c = 0$, the centre is...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$(g, f)$" },
              { id: "b", text: "$(-2g, -2f)$" },
              { id: "c", text: "$(2g, 2f)$" },
              { id: "d", text: "$(-g, -f)$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "General form",
                statement: "Centre $(-g,-f)$, $r=\\sqrt{g^2+f^2-c}$.",
              },
            ],
            steps: [
              { reasoning: "Centre $(-g,-f)$.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(a)** $(-g, -f)$",
            commonErrors: ["Forgetting the negative signs."],
          },
        },
        {
          id: "cial-m-u5-ci-q9",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Find the radius of the circle $x^2 + y^2 - 10x + 8y + 5 = 0$.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 6 }],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Radius from general form",
                statement: "$r = \\sqrt{g^2+f^2-c}$ or complete the square.",
              },
            ],
            steps: [
              {
                reasoning: "$(x-5)^2 + (y+4)^2 = 25 + 16 - 5 = 36$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$r^2 = 36$.", marks: 1, markCode: "M" },
              { reasoning: "$r = 6$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$6$",
            commonErrors: ["Arithmetic slip when moving the constant."],
          },
        },
        {
          id: "cial-m-u5-ci-q10",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Find the equation of the tangent to $x^2 + y^2 = 25$ at the point (4, -3).",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Tangent",
                statement: "Tangent perpendicular to radius at the point.",
              },
            ],
            steps: [
              {
                reasoning: "Radius gradient: $\\frac{-3-0}{4-0} = -\\frac{3}{4}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Tangent gradient: $\\frac{4}{3}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$y + 3 = \\frac{4}{3}(x - 4) \\Rightarrow 4x - 3y = 25$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Correct equation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$4x - 3y = 25$",
            commonErrors: ["Sign error with the negative y-coordinate."],
          },
        },
        {
          id: "cial-m-u5-ci-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is the equation of the circle with centre (0, 2) and radius 5?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x^2 + (y-2)^2 = 25$" },
              { id: "b", text: "$(x-2)^2 + y^2 = 25$" },
              { id: "c", text: "$x^2 + (y+2)^2 = 25$" },
              { id: "d", text: "$x^2 + (y-2)^2 = 5$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Circle equation",
                statement: "$(x-a)^2+(y-b)^2=r^2$.",
              },
            ],
            steps: [
              {
                reasoning: "Centre (0,2), $r^2=25$ → $x^2+(y-2)^2=25$.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** $x^2 + (y-2)^2 = 25$",
            commonErrors: ["Writing $(y+2)$ for centre $y=2$."],
          },
        },
        {
          id: "cial-m-u5-ci-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find the radius of the circle $x^2 + y^2 + 2x - 4y + 1 = 0$.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 2 }],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Completing the square",
                statement: "$(x+1)^2 + (y-2)^2 = 4$.",
              },
            ],
            steps: [
              {
                reasoning: "$(x^2+2x)+(y^2-4y) = -1 \\Rightarrow (x+1)^2-1+(y-2)^2-4=-1$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$(x+1)^2 + (y-2)^2 = 4$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$r = 2$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2$",
            commonErrors: ["Sign error when rearranging the constant."],
          },
        },
        {
          id: "cial-m-u5-ci-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Find the radius of the circle whose diameter has endpoints (2, 0) and (0, 4).",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 2.2361, tolerance: 0.001 }],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Diameter",
                statement: "Radius = half the distance between endpoints.",
              },
            ],
            steps: [
              {
                reasoning: "Centre = midpoint $= (1, 2)$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Radius = $\\frac{1}{2}\\sqrt{(2-0)^2+(0-4)^2} = \\frac{1}{2}\\sqrt{20}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$= \\frac{\\sqrt{20}}{2} = \\sqrt{5}$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$\\approx 2.236$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\sqrt{5} \\approx 2.236$",
            commonErrors: ["Forgetting to halve the diameter."],
          },
        },
        {
          id: "cial-m-u5-ci-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which point lies on the circle $x^2 + y^2 = 13$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$(0, 5)$" },
              { id: "b", text: "$(1, 4)$" },
              { id: "c", text: "$(2, 3)$" },
              { id: "d", text: "$(3, 3)$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Point on circle",
                statement: "Check $x^2+y^2 = 13$.",
              },
            ],
            steps: [
              { reasoning: "$2^2+3^2 = 4+9 = 13$.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(a)** $(2, 3)$",
            commonErrors: ["Not checking all candidates."],
          },
        },
        {
          id: "cial-m-u5-ci-q15",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Find the equation of the tangent to the circle $(x-1)^2 + (y-2)^2 = 20$ at the point (3, 6).",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Tangent to shifted circle",
                statement: "Radius gradient from centre to point; tangent is perpendicular.",
              },
            ],
            steps: [
              {
                reasoning: "Check (3,6) on circle: $4 + 16 = 20$ ✓.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Radius gradient: $\\frac{6-2}{3-1} = 2$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Tangent gradient: $-\\frac{1}{2}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$y - 6 = -\\frac{1}{2}(x - 3)$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$x + 2y = 15$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x + 2y = 15$",
            commonErrors: ["Using the centre as the point of tangency."],
          },
        },
        {
          id: "cial-m-u5-ci-q16",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Circles.",
          parts: [
            {
              label: "a",
              prompt: "Write the equation of a circle with centre $(a,b)$ and radius $r$.",
              marks: 1,
            },
            {
              label: "b",
              prompt: "Find the centre and radius of $(x-3)^2 + (y+2)^2 = 25$.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Describe how to find the centre of $x^2+y^2+2gx+2fy+c=0$.",
              marks: 3,
            },
            {
              label: "d",
              prompt: "Find the centre and radius of $x^2+y^2-8x+2y-8=0$.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Circles",
                statement: "Equation+centre/radius+method+completing square.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$(x-a)^2+(y-b)^2=r^2$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Centre $(3,-2)$.",
                marks: 1,
                markCode: "M",
              },
              { part: "b", reasoning: "Radius $5$.", marks: 1, markCode: "A" },
              {
                part: "c",
                reasoning: "Complete the square on x and y terms.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Centre $(-g,-f)$, $r=\\sqrt{g^2+f^2-c}$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Method clearly described.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "$(x-4)^2 + (y+1)^2 = 16+1+8$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "$(x-4)^2+(y+1)^2=25$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Centre $(4,-1)$, radius $5$.",
                marks: 1,
                markCode: "M",
              },
              { part: "d", reasoning: "Correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "(a) (x−a)²+(y−b)²=r² (b) (3,−2), r=5 (c) complete square (d) (4,−1), r=5",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cial-m-u5-geometry-notes",
      title: "Coordinate geometry — revision notes",
      summary:
        "Lines, circles and tangents in coordinate geometry.",
      sections: [
        {
          heading: "Lines and circles",
          body: "Gradient m=Δy/Δx; y−y₁=m(x−x₁). Parallel: same m; perpendicular: m₁m₂=−1. Circle: (x−a)²+(y−b)²=r². Tangent perpendicular to radius.",
        },
        {
          heading: "Exam checklist",
          body: "Check parallel vs perpendicular carefully. For circles, complete the square.",
        },
      ],
    },
  ],
};
