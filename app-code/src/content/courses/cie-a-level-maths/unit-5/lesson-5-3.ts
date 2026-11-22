import type { Lesson } from "../../../types.ts";

export const lesson153: Lesson = {
  id: "cial-m-u5-lesson-5-3",
  code: "5-3",
  title: "Coordinate geometry: loci and regions",
  goal: "I CAN describe and sketch loci and regions defined by inequalities.",
  standards: ["9709 Pure Mathematics 1: coordinate geometry"],
  vocabulary: [
    {
      term: "Locus",
      definition: "Set of points satisfying a geometric condition.",
    },
    {
      term: "Perpendicular bisector",
      definition: "Locus of points equidistant from two points.",
    },
    {
      term: "Circle locus",
      definition: "Set of points at fixed distance from a centre.",
    },
    {
      term: "Region",
      definition: "Area of plane defined by one or more inequalities.",
    },
    {
      term: "Boundary line",
      definition: "Line separating included from excluded regions.",
    },
    {
      term: "Feasible region",
      definition: "Region satisfying all constraints simultaneously.",
    },
  ],
  concepts: [
    {
      id: "cial-m-u5-loci",
      title: "Loci",
      skill: "Identify and sketch loci defined by geometric conditions.",
      lesson: {
        sections: [
          {
            heading: "Common loci",
            body: "Perpendicular bisector of AB: points equidistant from A and B. Circle: points at fixed distance from centre. Angle bisector: points equidistant from two lines. Parallel line at fixed distance.",
          },
          {
            heading: "Intersection of loci",
            body: "Points satisfying multiple conditions lie at intersections of loci. E.g., point equidistant from A, B and on line L = intersection of perpendicular bisector and L.",
          },
          {
            heading: "Sketching loci",
            body: "Draw each condition separately, then combine. Dashed lines for boundaries not included; solid for included. Label key points and intersections.",
          },
        ],
        keyFormulas: [
          {
            name: "Loci",
            statement:
              "Perpendicular bisector=equidistant; circle=fixed distance; intersection=multiple conditions.",
          },
        ],
        workedExample: {
          problem: "Find the locus of points equidistant from (0,0) and (4,0).",
          solution:
            "Perpendicular bisector of segment joining them: x = 2 (vertical line).",
        },
      },
      questions: [
        {
          id: "cial-m-u5-lo-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the locus of points equidistant from (0,0) and (4,0)?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The x-axis" },
              { id: "b", text: "The line y = 2" },
              { id: "c", text: "A circle" },
              { id: "d", text: "The line x = 2" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Perpendicular bisector",
                statement:
                  "Locus of equidistant points = perpendicular bisector.",
              },
            ],
            steps: [
              {
                reasoning: "Equidistant from (0,0) and (4,0) → x=2.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** $x = 2$",
            commonErrors: ["Thinking it's a circle."],
          },
        },
        {
          id: "cial-m-u5-lo-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Describe the locus of points at distance 3 from the point (1, 2).",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Circle locus",
                statement:
                  "Points at fixed distance from centre form a circle.",
              },
            ],
            steps: [
              { reasoning: "Circle centre (1,2).", marks: 1, markCode: "M" },
              { reasoning: "Radius 3.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Circle centre (1,2), radius 3.",
            commonErrors: ["Confusing with perpendicular bisector."],
          },
        },
        {
          id: "cial-m-u5-lo-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Find the locus of points equidistant from two parallel lines y = 0 and y = 4.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Angle bisector",
                statement:
                  "Equidistant from two lines = angle bisector (here parallel line midway).",
              },
            ],
            steps: [
              {
                reasoning: "Distance from y=0 equals distance from y=4.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "y = 2 satisfies both.", marks: 1, markCode: "M" },
              {
                reasoning: "Locus is horizontal line y=2.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$y = 2$",
            commonErrors: ["Thinking it's a curve."],
          },
        },
        {
          id: "cial-m-u5-lo-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Loci.",
          parts: [
            { label: "a", prompt: "What is a locus?", marks: 1 },
            {
              label: "b",
              prompt: "Locus equidistant from (0,0) and (4,0)?",
              marks: 2,
            },
            { label: "c", prompt: "Locus at distance 3 from (1,2)?", marks: 2 },
            {
              label: "d",
              prompt: "Locus equidistant from y=0 and y=4?",
              marks: 5,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Loci",
                statement: "Definition+bisector+circle+parallel lines.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Set of points satisfying condition.",
                marks: 1,
                markCode: "M",
              },
              { part: "b", reasoning: "x=2.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
              {
                part: "c",
                reasoning: "Circle (1,2) r=3.",
                marks: 1,
                markCode: "M",
              },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "A" },
              {
                part: "d",
                reasoning: "Distance equality set up.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "y=2 satisfies.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Horizontal line identified.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Sketch described.",
                marks: 1,
                markCode: "M",
              },
              { part: "d", reasoning: "Correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) point set (b) x=2 (c) circle r=3 (d) y=2",
          },
        },
        {
          id: "cial-m-u5-lo-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the locus of points equidistant from (0, 0) and (0, 8)?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A circle" },
              { id: "b", text: "The y-axis" },
              { id: "c", text: "The line $x = 4$" },
              { id: "d", text: "The line $y = 4$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Perpendicular bisector",
                statement: "Locus of equidistant points = perpendicular bisector.",
              },
            ],
            steps: [
              {
                reasoning: "Segment is vertical; bisector is horizontal $y=4$.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** $y = 4$",
            commonErrors: ["Giving the wrong orientation of bisector."],
          },
        },
        {
          id: "cial-m-u5-lo-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "Describe the locus of points at distance 7 from the point (-2, 1).",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 7 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Circle locus",
                statement: "Fixed distance from a point → circle.",
              },
            ],
            steps: [
              {
                reasoning: "Circle, centre $(-2,1)$, radius $7$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Radius $= 7$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Circle centre $(-2,1)$, radius $7$.",
            commonErrors: ["Giving the centre instead of the radius."],
          },
        },
        {
          id: "cial-m-u5-lo-q7",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find the equation of the perpendicular bisector of the points (2, 0) and (6, 0).",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Perpendicular bisector",
                statement: "Vertical segment → vertical bisector $x = \\frac{2+6}{2}$.",
              },
            ],
            steps: [
              {
                reasoning: "Midpoint: $\\left(\\frac{2+6}{2}, 0\\right) = (4, 0)$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Segment is horizontal, so bisector is vertical $x=4$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$x = 4$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x = 4$",
            commonErrors: ["Writing $y=4$ instead of $x=4$."],
          },
        },
        {
          id: "cial-m-u5-lo-q8",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "What is the locus of points equidistant from the parallel lines $y = 1$ and $y = 5$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Two lines $y=1$ and $y=5$" },
              { id: "b", text: "The line $y = 3$" },
              { id: "c", text: "The line $x = 3$" },
              { id: "d", text: "A circle" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Equidistant from parallels",
                statement: "Midway parallel line.",
              },
            ],
            steps: [
              { reasoning: "Midway: $y = \\frac{1+5}{2} = 3$.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(a)** $y = 3$",
            commonErrors: ["Thinking the locus is the two lines themselves."],
          },
        },
        {
          id: "cial-m-u5-lo-q9",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Points equidistant from A(0, 0) and B(8, 0) lie on a line. Find the x-coordinate of every point on this locus.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 4 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Perpendicular bisector",
                statement: "Locus is perpendicular bisector of AB.",
              },
            ],
            steps: [
              {
                reasoning: "Perpendicular bisector of horizontal segment is vertical.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Passes through midpoint $x = \\frac{0+8}{2} = 4$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$x = 4$ for all points.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x = 4$",
            commonErrors: ["Finding the midpoint y-coordinate instead."],
          },
        },
        {
          id: "cial-m-u5-lo-q10",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Describe the locus of points equidistant from the intersecting lines $y = x$ and $y = -x$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Angle bisectors",
                statement: "Equidistant from two intersecting lines = angle bisectors.",
              },
            ],
            steps: [
              {
                reasoning: "The lines meet at the origin at 90°.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Angle bisectors of the axes are the x-axis and y-axis.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Locus = $y = 0$ and $x = 0$ (both axes).",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Correct description.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The x-axis and the y-axis.",
            commonErrors: ["Giving only one bisector."],
          },
        },
        {
          id: "cial-m-u5-lo-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "The locus of points at distance 4 from the point (2, -1) is...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The circle $(x-2)^2 + (y-1)^2 = 16$" },
              { id: "b", text: "The circle $(x-2)^2 + (y+1)^2 = 16$" },
              { id: "c", text: "The line $x = 2$" },
              { id: "d", text: "The circle $x^2 + y^2 = 16$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Circle locus",
                statement: "$(x-a)^2+(y-b)^2=r^2$.",
              },
            ],
            steps: [
              {
                reasoning: "Centre (2,-1), $r^2 = 16$.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** $(x-2)^2 + (y+1)^2 = 16$",
            commonErrors: ["Sign error on the y-centre."],
          },
        },
        {
          id: "cial-m-u5-lo-q12",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Find the equation of the perpendicular bisector of (0, 0) and (6, 0).",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 3 }],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Perpendicular bisector",
                statement: "Midpoint $x = 3$, vertical line.",
              },
            ],
            steps: [
              {
                reasoning: "$x = \\frac{0+6}{2} = 3$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Locus: $x = 3$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x = 3$",
            commonErrors: ["Answering $y=3$."],
          },
        },
        {
          id: "cial-m-u5-lo-q13",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Find the single point that is equidistant from A(0, 0), B(4, 0) and C(0, 4).",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Intersection of loci",
                statement: "Circumcentre of the triangle.",
              },
            ],
            steps: [
              {
                reasoning: "Equidistant from A and B → perpendicular bisector $x = 2$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Equidistant from A and C → perpendicular bisector $y = 2$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Intersection: $(2, 2)$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Check: distance to each vertex $= \\sqrt{8}$ ✓.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Point $(2,2)$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$(2, 2)$",
            commonErrors: ["Stopping at one bisector."],
          },
        },
        {
          id: "cial-m-u5-lo-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The locus of points equidistant from two parallel lines is...",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "A line parallel to them, midway between",
              },
              { id: "b", text: "The two lines themselves" },
              { id: "c", text: "A circle" },
              { id: "d", text: "A perpendicular line through the midpoint" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Parallel lines locus",
                statement: "Midway parallel line.",
              },
            ],
            steps: [
              {
                reasoning: "Equidistant locus is the parallel midway line.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** Parallel line midway between",
            commonErrors: ["Describing a circle instead."],
          },
        },
        {
          id: "cial-m-u5-lo-q15",
          difficulty: "core",
          totalMarks: 4,
          stem: "The perpendicular bisector of A(1, 5) and B(7, 1) has equation $3x - 2y = c$. Find $c$.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 6 }],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Perpendicular bisector",
                statement: "Find midpoint and perpendicular gradient, then substitute.",
              },
            ],
            steps: [
              {
                reasoning: "Midpoint $(4, 3)$; AB gradient $-\\frac{2}{3}$; perpendicular gradient $\\frac{3}{2}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$y - 3 = \\frac{3}{2}(x - 4) \\Rightarrow 3x - 2y = 6$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$c = 6$.", marks: 1, markCode: "M" },
              { reasoning: "Correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$6$",
            commonErrors: ["Using the AB gradient instead of the perpendicular."],
          },
        },
        {
          id: "cial-m-u5-lo-q16",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Loci.",
          parts: [
            { label: "a", prompt: "What is a locus?", marks: 1 },
            {
              label: "b",
              prompt: "Find the perpendicular bisector of (0, 0) and (6, 0).",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Describe the locus of points at distance 5 from (1, -2).",
              marks: 2,
            },
            {
              label: "d",
              prompt: "Find the point equidistant from (0,0), (4,0) and (0,4).",
              marks: 3,
            },
            {
              label: "e",
              prompt: "Describe the locus equidistant from two intersecting lines.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Loci",
                statement: "Definition+bisector+circle+intersection+bisectors.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Set of points satisfying a condition.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$x = \\frac{0+6}{2} = 3$.",
                marks: 1,
                markCode: "M",
              },
              { part: "b", reasoning: "$x = 3$.", marks: 1, markCode: "A" },
              {
                part: "c",
                reasoning: "Circle centre (1,-2).",
                marks: 1,
                markCode: "M",
              },
              { part: "c", reasoning: "Radius 5.", marks: 1, markCode: "A" },
              {
                part: "d",
                reasoning: "Bisectors $x=2$ and $y=2$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Intersection $(2,2)$.",
                marks: 1,
                markCode: "M",
              },
              { part: "d", reasoning: "Correct point.", marks: 1, markCode: "A" },
              {
                part: "e",
                reasoning: "The angle bisectors.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "e",
                reasoning: "Two lines through the intersection point.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) point set (b) x=3 (c) circle r=5 (d) (2,2) (e) angle bisectors",
          },
        },
      ],
    },
    {
      id: "cial-m-u5-regions",
      title: "Regions defined by inequalities",
      skill: "Sketch and describe regions satisfying linear inequalities.",
      lesson: {
        sections: [
          {
            heading: "Single inequalities",
            body: "$y < mx + c$ is region below line; $y > mx+c$ above; $x < a$ left; $x > a$ right. Test a point (usually origin) to determine which side is included.",
          },
          {
            heading: "Boundary lines",
            body: "Solid line: boundary included ($\\le$ or $\\ge$). Dashed line: boundary excluded ($<$ or $>$). Shade the feasible region.",
          },
          {
            heading: "Multiple inequalities",
            body: "Feasible region = intersection of all individual regions. For linear programming, this region contains all valid solutions.",
          },
        ],
        keyFormulas: [
          {
            name: "Regions",
            statement:
              "Test point determines side; solid=dashed boundary; feasible=intersection.",
          },
        ],
        workedExample: {
          problem: "Sketch region defined by $y > 2x - 1$ and $x < 3$.",
          solution:
            "Above line y=2x−1 (dashed) AND left of x=3 (dashed). Feasible region is overlap.",
        },
      },
      questions: [
        {
          id: "cial-m-u5-rg-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "For $y < 2x + 1$, which side of the line is included?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Above the line" },
              { id: "b", text: "Left of the line" },
              { id: "c", text: "Below the line" },
              { id: "d", text: "On the line" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Inequality regions",
                statement: "$y < mx+c$ = below line.",
              },
            ],
            steps: [{ reasoning: "y < → below.", marks: 1, markCode: "M" }],
            finalAnswer: "**(a)** Below the line",
            commonErrors: ["Reversing inequality direction."],
          },
        },
        {
          id: "cial-m-u5-rg-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "When is a boundary line drawn solid vs dashed?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Boundary",
                statement:
                  "Solid for $\\le/\\ge$ (included); dashed for $</>$ (excluded).",
              },
            ],
            steps: [
              {
                reasoning: "Solid = boundary included.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Dashed = boundary excluded.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Solid for ≤/≥; dashed for </>.",
            commonErrors: ["Reversing solid/dashed."],
          },
        },
        {
          id: "cial-m-u5-rg-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Describe the feasible region for $x \\ge 0$, $y \\ge 0$, $x + y \\le 4$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Feasible region",
                statement: "Intersection of all constraints.",
              },
            ],
            steps: [
              {
                reasoning: "$x \\ge 0$ and $y \\ge 0$ → first quadrant.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$x+y \\le 4$ → below line x+y=4.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Feasible region = triangle with vertices (0,0), (4,0), (0,4).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Correct region described.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Triangle with vertices (0,0), (4,0), (0,4).",
            commonErrors: ["Including wrong side of boundary."],
          },
        },
        {
          id: "cial-m-u5-rg-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Regions by inequalities.",
          parts: [
            { label: "a", prompt: "Which side for $y < mx+c$?", marks: 1 },
            { label: "b", prompt: "Solid vs dashed boundary?", marks: 2 },
            {
              label: "c",
              prompt: "Feasible region for $x\\ge0,y\\ge0,x+y\\le4$?",
              marks: 3,
            },
            {
              label: "d",
              prompt: "How to test which side of a line is included?",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Regions",
                statement: "Side+boundary+feasible+test point.",
              },
            ],
            steps: [
              { part: "a", reasoning: "Below line.", marks: 1, markCode: "M" },
              {
                part: "b",
                reasoning: "Solid for ≤/≥.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Dashed for </>.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "First quadrant.",
                marks: 1,
                markCode: "M",
              },
              { part: "c", reasoning: "Below x+y=4.", marks: 1, markCode: "M" },
              {
                part: "c",
                reasoning: "Triangle (0,0),(4,0),(0,4).",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Pick test point (e.g. origin).",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Substitute into inequality.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "If true, that side is included.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Method clear.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) below (b) solid/dashed (c) triangle (d) test point method",
          },
        },
        {
          id: "cial-m-u5-rg-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The region defined by $x > 2$ lies...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To the right of the line $x = 2$" },
              { id: "b", text: "Below the line $y = 2$" },
              { id: "c", text: "Above the line $x = 2$" },
              { id: "d", text: "To the left of the line $x = 2$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Inequality regions",
                statement: "$x > a$ = right of vertical line.",
              },
            ],
            steps: [
              { reasoning: "$x>2$ → right of $x=2$.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(a)** Right of $x = 2$",
            commonErrors: ["Confusing with $y>2$."],
          },
        },
        {
          id: "cial-m-u5-rg-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the value of $x + y$ at the point (4, 5).",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 9 }],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Test point",
                statement: "Substitute coordinates into the expression.",
              },
            ],
            steps: [
              { reasoning: "$4 + 5 = 9$.", marks: 1, markCode: "M" },
              { reasoning: "Correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$9$",
            commonErrors: ["Multiplying instead of adding."],
          },
        },
        {
          id: "cial-m-u5-rg-q7",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe the feasible region defined by $x \\ge 0$, $y \\ge 0$ and $x + y \\le 6$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Feasible region",
                statement: "Intersection of all constraints.",
              },
            ],
            steps: [
              {
                reasoning: "$x \\ge 0$, $y \\ge 0$ → first quadrant.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$x+y \\le 6$ → below line $x+y=6$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Triangle with vertices $(0,0)$, $(6,0)$, $(0,6)$; all boundaries solid.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Triangle $(0,0)$, $(6,0)$, $(0,6)$.",
            commonErrors: ["Using dashed boundary for ≤."],
          },
        },
        {
          id: "cial-m-u5-rg-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "For the inequality $y < 3x - 2$, the boundary line is drawn...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Thick, to show emphasis" },
              { id: "b", text: "Dashed, because the boundary is excluded" },
              { id: "c", text: "Dotted, because it is a curve" },
              { id: "d", text: "Solid, because the boundary is included" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Boundary",
                statement: "Strict inequality → dashed boundary.",
              },
            ],
            steps: [
              { reasoning: "$<$ excludes boundary → dashed.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(a)** Dashed",
            commonErrors: ["Reversing solid/dashed convention."],
          },
        },
        {
          id: "cial-m-u5-rg-q9",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "In the region $x \\ge 0$, $y \\ge 0$, $y \\le 10 - x$, what is the maximum possible value of $x + y$?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 10 }],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Feasible region",
                statement: "Maximum on boundary $x+y=10$.",
              },
            ],
            steps: [
              {
                reasoning: "Constraint $y \\le 10 - x \\Rightarrow x + y \\le 10$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Max achieved on the line $x+y=10$ within the region.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Maximum $= 10$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$10$",
            commonErrors: ["Testing interior points instead of the boundary."],
          },
        },
        {
          id: "cial-m-u5-rg-q10",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Describe the region defined by $y > x - 1$, $y < 4$ and $x \\ge 0$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Feasible region",
                statement: "Find pairwise boundary intersections for vertices.",
              },
            ],
            steps: [
              {
                reasoning: "$y > x-1$ → above line (dashed); $y<4$ → below (dashed); $x \\ge 0$ → right of y-axis (solid).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Vertices: $(0,-1)$ where $x=0$ meets $y=x-1$; $(0,4)$; $(5,4)$ where $y=x-1$ meets $y=4$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Triangle with vertices $(0,-1)$, $(0,4)$, $(5,4)$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Correct region.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Triangle $(0,-1)$, $(0,4)$, $(5,4)$.",
            commonErrors: ["Wrong vertex where boundaries cross."],
          },
        },
        {
          id: "cial-m-u5-rg-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which point is a suitable test point for the inequality $x + y < 6$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A point on the line $x+y=6$" },
              { id: "b", text: "The origin $(0, 0)$" },
              { id: "c", text: "The point $(10, 10)$" },
              { id: "d", text: "The point $(6, 6)$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Test point",
                statement: "Pick a point not on the boundary.",
              },
            ],
            steps: [
              {
                reasoning: "Origin gives $0 < 6$ true → included side.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** $(0,0)$",
            commonErrors: ["Choosing a point on the boundary line."],
          },
        },
        {
          id: "cial-m-u5-rg-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "In the region $x \\ge 1$, $y \\ge 0$, $x + y \\le 8$, what is the maximum possible value of $y$?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 7 }],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Feasible region",
                statement: "Max $y$ at vertex $(1,7)$.",
              },
            ],
            steps: [
              {
                reasoning: "From $x+y \\le 8$: $y \\le 8 - x$; smallest $x=1$ gives largest $y$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "At $x=1$: $y = 7$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Maximum $y = 7$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$7$",
            commonErrors: ["Ignoring the $x \\ge 1$ constraint."],
          },
        },
        {
          id: "cial-m-u5-rg-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Does the point (3, 2) satisfy all of: $x + y \\le 6$, $y \\ge x - 1$ and $x \\ge 0$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "No — it fails $y \\ge x-1$" },
              { id: "b", text: "No — it fails $x+y \\le 6$" },
              { id: "c", text: "No — it fails $x \\ge 0$" },
              { id: "d", text: "Yes — it satisfies all three, lying on the boundary $y = x-1$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Test point",
                statement: "Check each inequality by substitution.",
              },
            ],
            steps: [
              {
                reasoning: "$3+2=5 \\le 6$ ✓; $2 \\ge 3-1=2$ ✓ (boundary); $3 \\ge 0$ ✓.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** Yes, on the boundary",
            commonErrors: ["Forgetting the boundary counts for ≤/≥."],
          },
        },
        {
          id: "cial-m-u5-rg-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The feasible region for a system of inequalities is...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The union of all the individual regions" },
              { id: "b", text: "The region above all boundary lines" },
              { id: "c", text: "The smallest single region" },
              { id: "d", text: "The intersection of all the individual regions" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Feasible region",
                statement: "Points satisfying every constraint.",
              },
            ],
            steps: [
              {
                reasoning: "Feasible = intersection of all constraints.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** Intersection of all regions",
            commonErrors: ["Confusing intersection with union."],
          },
        },
        {
          id: "cial-m-u5-rg-q15",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Describe the region defined by $y \\le x$, $y \\ge -x$ and $x \\le 3$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Feasible region",
                statement: "Between $y=\\pm x$ and left of $x=3$.",
              },
            ],
            steps: [
              {
                reasoning: "$y \\le x$ → below $y=x$; $y \\ge -x$ → above $y=-x$; $x \\le 3$ → left of $x=3$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$y=x$ and $y=-x$ meet at $(0,0)$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Other vertices: $(3,3)$ and $(3,-3)$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Triangle with vertices $(0,0)$, $(3,3)$, $(3,-3)$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Correct region.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Triangle $(0,0)$, $(3,3)$, $(3,-3)$.",
            commonErrors: ["Including region beyond $x=3$."],
          },
        },
        {
          id: "cial-m-u5-rg-q16",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Regions defined by inequalities.",
          parts: [
            { label: "a", prompt: "Which side of $y < mx+c$ is included?", marks: 1 },
            {
              label: "b",
              prompt: "When are boundary lines solid vs dashed?",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Explain the test-point method for finding the included side.",
              marks: 3,
            },
            {
              label: "d",
              prompt: "Describe the feasible region for $x \\ge 0$, $y \\ge 0$, $2x + y \\le 8$.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Regions",
                statement: "Side+boundary+test point+feasible region.",
              },
            ],
            steps: [
              { part: "a", reasoning: "Below the line.", marks: 1, markCode: "M" },
              {
                part: "b",
                reasoning: "Solid for $\\le, \\ge$; dashed for $<,>$.",
                marks: 1,
                markCode: "M",
              },
              { part: "b", reasoning: "Correct both cases.", marks: 1, markCode: "A" },
              {
                part: "c",
                reasoning: "Choose a test point not on the line.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Substitute into the inequality.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "If true, that side is included.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "First quadrant, below $2x+y=8$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Intercepts $(4,0)$ and $(0,8)$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Triangle $(0,0)$, $(4,0)$, $(0,8)$.",
                marks: 1,
                markCode: "M",
              },
              { part: "d", reasoning: "Correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "(a) below (b) solid/dashed (c) test point (d) triangle (0,0),(4,0),(0,8)",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cial-m-u5-loci-regions-notes",
      title: "Loci and regions — revision notes",
      summary: "Loci definitions, intersections and inequality regions.",
      sections: [
        {
          heading: "Loci",
          body: "Perpendicular bisector = equidistant points. Circle = fixed distance. Intersection of loci = multiple conditions. Sketch with dashed/solid boundaries.",
        },
        {
          heading: "Regions",
          body: "$y<mx+c$ = below; $x<a$ = left. Solid boundary for ≤/≥; dashed for </>. Feasible region = intersection. Test point (origin) to determine side.",
        },
        {
          heading: "Exam checklist",
          body: "Check boundary inclusion. Label vertices of feasible regions. Show test point working.",
        },
      ],
    },
  ],
};
