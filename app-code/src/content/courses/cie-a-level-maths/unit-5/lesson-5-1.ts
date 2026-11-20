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
              { id: "b", text: "$6$" },
              { id: "c", text: "$2$" },
              { id: "d", text: "$\\frac{1}{3}$" },
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
              { id: "c", text: "$(x-5)^2 + (y-5)^2 = 0$" },
              { id: "d", text: "$x + y = 5$" },
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
