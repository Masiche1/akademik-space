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
              { id: "a", text: "The line x = 2" },
              { id: "b", text: "The line y = 2" },
              { id: "c", text: "A circle" },
              { id: "d", text: "The x-axis" },
            ],
            correctChoiceId: "a",
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
              { id: "a", text: "Below the line" },
              { id: "b", text: "Above the line" },
              { id: "c", text: "On the line" },
              { id: "d", text: "Left of the line" },
            ],
            correctChoiceId: "a",
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
