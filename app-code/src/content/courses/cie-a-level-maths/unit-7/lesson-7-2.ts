import type { Lesson } from "../../../types.ts";

export const lesson72: Lesson = {
  id: "cial-m-u7-lesson-7-2",
  code: "5-2",
  title: "Vector equations of lines",
  goal: "I CAN write vector equations of lines and find intersections and shortest distances.",
  standards: ["9709 Pure Mathematics 1: vectors"],
  vocabulary: [
    { term: "Position vector", definition: "Vector from origin to a point." },
    {
      term: "Direction vector",
      definition: "Vector parallel to a line indicating its direction.",
    },
    {
      term: "Vector equation of a line",
      definition:
        "$\\mathbf{r} = \\mathbf{a} + \\lambda\\mathbf{d}$ where a is a point and d is direction.",
    },
    {
      term: "Parametric equations",
      definition: "x and y expressed in terms of parameter λ.",
    },
    {
      term: "Coplanar vectors",
      definition: "Vectors lying in the same plane; scalar triple product = 0.",
    },
    {
      term: "Scalar triple product",
      definition:
        "$\\mathbf{a}\\cdot(\\mathbf{b}\\times\\mathbf{c})$ — zero if vectors are coplanar.",
    },
  ],
  concepts: [
    {
      id: "cial-m-u7-vector-lines",
      title: "Vector equations of lines",
      skill: "Write and use vector equations of lines in 2D and 3D.",
      lesson: {
        sections: [
          {
            heading: "Writing the equation",
            body: "Line through point A with position vector $\\mathbf{a}$ and direction $\\mathbf{d}$: $\\mathbf{r} = \\mathbf{a} + \\lambda\\mathbf{d}$. Component form: $x = a_1 + \\lambda d_1$, $y = a_2 + \\lambda d_2$, $z = a_3 + \\lambda d_3$.",
          },
          {
            heading: "Finding intersections",
            body: "Set two line equations equal: $\\mathbf{a} + \\lambda\\mathbf{d} = \\mathbf{b} + \\mu\\mathbf{e}$. Solve for λ and μ component-wise; check consistency. If no solution, lines are skew (3D) or parallel.",
          },
          {
            heading: "Angles and perpendicularity",
            body: "Angle between lines: angle between direction vectors via dot product. Perpendicular lines: $\\mathbf{d}_1 \\cdot \\mathbf{d}_2 = 0$.",
          },
        ],
        keyFormulas: [
          {
            name: "Line",
            statement: "$\\mathbf{r} = \\mathbf{a} + \\lambda\\mathbf{d}$",
          },
          {
            name: "Intersection",
            statement:
              "Set $\\mathbf{a}+\\lambda\\mathbf{d} = \\mathbf{b}+\\mu\\mathbf{e}$, solve for λ, μ.",
          },
        ],
        workedExample: {
          problem:
            "Find where $\\mathbf{r} = \\begin{pmatrix}1\\\\0\\\\2\\end{pmatrix} + \\lambda\\begin{pmatrix}2\\\\1\\\\-1\\end{pmatrix}$ meets the x-axis.",
          solution:
            "y=0: $0 + \\lambda = 0$, λ=0 → point (1,0,2)? Check: λ=0 gives (1,0,2); y=0 requires λ=0? y = λ → λ=0; then point (1,0,2).",
        },
      },
      questions: [
        {
          id: "cial-m-u7-vl-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does $\\mathbf{r} = \\mathbf{a} + \\lambda\\mathbf{d}$ represent?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Line through point a in direction d" },
              { id: "b", text: "Plane through a" },
              { id: "c", text: "Circle centred at a" },
              { id: "d", text: "Vector a plus d" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Vector line",
                statement: "Point a + parameter λ × direction d.",
              },
            ],
            steps: [
              {
                reasoning: "r = point + λ×direction.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** Line through a in direction d",
            commonErrors: ["Confusing with plane equation."],
          },
        },
        {
          id: "cial-m-u7-vl-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Write the vector equation of the line through (1, 0, 2) with direction (2, 1, -1).",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Vector line",
                statement: "$\\mathbf{r} = \\mathbf{a} + \\lambda\\mathbf{d}$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$\\mathbf{r} = \\begin{pmatrix}1\\\\0\\\\2\\end{pmatrix} + \\lambda\\begin{pmatrix}2\\\\1\\\\-1\\end{pmatrix}$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Correct form.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "$\\mathbf{r} = \\begin{pmatrix}1\\\\0\\\\2\\end{pmatrix} + \\lambda\\begin{pmatrix}2\\\\1\\\\-1\\end{pmatrix}$",
            commonErrors: ["Swapping point and direction."],
          },
        },
        {
          id: "cial-m-u7-vl-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Find the intersection of $\\mathbf{r} = \\begin{pmatrix}1\\\\2\\end{pmatrix} + \\lambda\\begin{pmatrix}1\\\\1\\end{pmatrix}$ and $\\mathbf{r} = \\begin{pmatrix}3\\\\0\\end{pmatrix} + \\mu\\begin{pmatrix}1\\\\-1\\end{pmatrix}$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Intersection",
                statement: "Set equal, solve component-wise.",
              },
            ],
            steps: [
              {
                reasoning: "$1+\\lambda = 3+\\mu$ and $2+\\lambda = -\\mu$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "From second: $\\mu = -2-\\lambda$; substitute: $1+\\lambda = 3-2-\\lambda = 1-\\lambda$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$2\\lambda = 0$, λ=0, μ=-2.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Point (1, 2).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$(1, 2)$",
            commonErrors: ["Not checking both components."],
          },
        },
        {
          id: "cial-m-u7-vl-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Vector equations of lines.",
          parts: [
            { label: "a", prompt: "Vector equation of a line?", marks: 1 },
            {
              label: "b",
              prompt: "Line through (1,0,2), direction (2,1,-1)?",
              marks: 2,
            },
            {
              label: "c",
              prompt: "How to find intersection of two lines?",
              marks: 3,
            },
            {
              label: "d",
              prompt:
                "Are $\\begin{pmatrix}1\\\\1\\end{pmatrix}$ and $\\begin{pmatrix}2\\\\-1\\end{pmatrix}$ perpendicular?",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Vectors",
                statement: "Equation+intersection+perpendicularity.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$\\mathbf{r}=\\mathbf{a}+\\lambda\\mathbf{d}$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "$\\mathbf{r}=\\begin{pmatrix}1\\\\0\\\\2\\end{pmatrix}+\\lambda\\begin{pmatrix}2\\\\1\\\\-1\\end{pmatrix}$.",
                marks: 1,
                markCode: "M",
              },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
              {
                part: "c",
                reasoning: "Set equations equal.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Solve for λ and μ.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Check consistency.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Dot product: $1(2)+1(-1)=1$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Not zero → not perpendicular.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Conclusion stated.",
                marks: 1,
                markCode: "M",
              },
              { part: "d", reasoning: "Correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "(a) r=a+λd (b) correct equation (c) set equal+solve (d) not perpendicular",
          },
        },
      ],
    },
    {
      id: "cial-m-u7-vector-apps",
      title: "Vector applications: planes and coplanarity",
      skill:
        "Use vectors to find planes, check coplanarity and solve geometric problems.",
      lesson: {
        sections: [
          {
            heading: "Vector equation of a plane",
            body: "Plane through point A with normal vector $\\mathbf{n}$: $\\mathbf{r} \\cdot \\mathbf{n} = \\mathbf{a} \\cdot \\mathbf{n}$. Alternatively, three points define a plane via cross product for normal.",
          },
          {
            heading: "Coplanarity test",
            body: "Four points are coplanar if the scalar triple product of vectors between them is zero: $(\\mathbf{b}-\\mathbf{a}) \\cdot [(\\mathbf{c}-\\mathbf{a}) \\times (\\mathbf{d}-\\mathbf{a})] = 0$.",
          },
          {
            heading: "Shortest distance",
            body: "Shortest distance from point P to line $\\mathbf{r}=\\mathbf{a}+\\lambda\\mathbf{d}$: find foot of perpendicular using $(\\mathbf{p}-\\mathbf{a})\\cdot\\mathbf{d} = 0$ to get λ, then distance.",
          },
        ],
        keyFormulas: [
          {
            name: "Plane",
            statement:
              "$\\mathbf{r}\\cdot\\mathbf{n} = \\mathbf{a}\\cdot\\mathbf{n}$",
          },
          {
            name: "Coplanar",
            statement:
              "$(\\mathbf{b}-\\mathbf{a})\\cdot[(\\mathbf{c}-\\mathbf{a})\\times(\\mathbf{d}-\\mathbf{a})]=0$",
          },
        ],
        workedExample: {
          problem:
            "Find the equation of the plane through (1,0,0) with normal (2,1,0).",
          solution:
            "$\\mathbf{r}\\cdot\\begin{pmatrix}2\\\\1\\\\0\\end{pmatrix} = \\begin{pmatrix}1\\\\0\\\\0\\end{pmatrix}\\cdot\\begin{pmatrix}2\\\\1\\\\0\\end{pmatrix} = 2$, so $2x+y=2$.",
        },
      },
      questions: [
        {
          id: "cial-m-u7-va-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What defines a plane's equation using vectors?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "$\\mathbf{r} \\cdot \\mathbf{n} = \\mathbf{a} \\cdot \\mathbf{n}$ (normal vector)",
              },
              {
                id: "b",
                text: "$\\mathbf{r} = \\mathbf{a} + \\lambda\\mathbf{d}$",
              },
              { id: "c", text: "$x^2+y^2+z^2=r^2$" },
              { id: "d", text: "$ax+by+cz=d$ only" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Plane equation",
                statement: "Normal vector dotted with r equals constant.",
              },
            ],
            steps: [
              {
                reasoning: "Plane defined by normal vector n.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "**(a)** $\\mathbf{r}\\cdot\\mathbf{n}=\\mathbf{a}\\cdot\\mathbf{n}$",
            commonErrors: ["Confusing with line equation."],
          },
        },
        {
          id: "cial-m-u7-va-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the Cartesian equation of the plane through (1,0,0) with normal (2,1,0).",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Plane",
                statement:
                  "$\\mathbf{r}\\cdot\\mathbf{n}=\\mathbf{a}\\cdot\\mathbf{n}$; convert to Cartesian.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$\\mathbf{r}\\cdot\\begin{pmatrix}2\\\\1\\\\0\\end{pmatrix} = 2$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$2x + y = 2$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2x + y = 2$",
            commonErrors: ["Forgetting to convert to Cartesian."],
          },
        },
        {
          id: "cial-m-u7-va-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "What is the scalar triple product and what does it test?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Scalar triple product",
                statement:
                  "$\\mathbf{a}\\cdot(\\mathbf{b}\\times\\mathbf{c})$ — volume of parallelepiped; zero if coplanar.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$\\mathbf{a}\\cdot(\\mathbf{b}\\times\\mathbf{c})$ defined.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Gives volume of parallelepiped.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Zero → vectors coplanar.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Volume test; zero means coplanar.",
            commonErrors: ["Confusing with dot product alone."],
          },
        },
        {
          id: "cial-m-u7-va-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Vector applications.",
          parts: [
            { label: "a", prompt: "Vector equation of a plane?", marks: 1 },
            {
              label: "b",
              prompt: "Plane through (1,0,0), normal (2,1,0)?",
              marks: 3,
            },
            {
              label: "c",
              prompt: "What does scalar triple product test?",
              marks: 3,
            },
            {
              label: "d",
              prompt: "How to find shortest distance from point to line?",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Vector geometry",
                statement: "Plane+Cartesian+coplanarity+distance.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "$\\mathbf{r}\\cdot\\mathbf{n}=\\mathbf{a}\\cdot\\mathbf{n}$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "$\\mathbf{r}\\cdot\\begin{pmatrix}2\\\\1\\\\0\\end{pmatrix}=2$.",
                marks: 1,
                markCode: "M",
              },
              { part: "b", reasoning: "$2x+y=2$.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
              {
                part: "c",
                reasoning:
                  "$\\mathbf{a}\\cdot(\\mathbf{b}\\times\\mathbf{c})$ defined.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Volume of parallelepiped.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Zero = coplanar.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Find foot of perpendicular.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning:
                  "Use $(\\mathbf{p}-\\mathbf{a})\\cdot\\mathbf{d}=0$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Compute distance.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) r·n=a·n (b) 2x+y=2 (c) triple product=volume/coplanarity (d) perpendicular foot",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cial-m-u7-vector-lines-notes",
      title: "Vector lines and planes — revision notes",
      summary:
        "Vector equations of lines, intersections, planes and coplanarity.",
      sections: [
        {
          heading: "Lines",
          body: "$\\mathbf{r}=\\mathbf{a}+\\lambda\\mathbf{d}$. Intersection: set equal, solve for λ and μ. Perpendicular if dot product of directions = 0.",
        },
        {
          heading: "Planes and coplanarity",
          body: "Plane: $\\mathbf{r}\\cdot\\mathbf{n}=\\mathbf{a}\\cdot\\mathbf{n}$. Coplanar if scalar triple product = 0. Shortest distance via perpendicular foot.",
        },
        {
          heading: "Exam checklist",
          body: "Identify point vs direction vector correctly. Check λ and μ consistency for intersections. Use cross product for normals.",
        },
      ],
    },
  ],
};
