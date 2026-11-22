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
              { id: "b", text: "Vector a plus d" },
              { id: "c", text: "Plane through a" },
              { id: "d", text: "Circle centred at a" },
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
        {
          id: "cial-m-u7-vl-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The line $\\mathbf{r} = \\begin{pmatrix}1\\\\2\\end{pmatrix} + \\lambda\\begin{pmatrix}3\\\\-1\\end{pmatrix}$ passes through which point?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$(1, -1)$" },
              { id: "b", text: "$(3, -1)$" },
              { id: "c", text: "$(4, 1)$" },
              { id: "d", text: "$(1, 2)$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Vector line",
                statement: "The line passes through the point vector $\\mathbf{a}$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "When $\\lambda = 0$, $\\mathbf{r} = \\begin{pmatrix}1\\\\2\\end{pmatrix}$, i.e. the point $(1, 2)$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(d)** $(1, 2)$",
            commonErrors: ["Confusing the direction vector with a point on the line."],
          },
        },
        {
          id: "cial-m-u7-vl-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "For the line $\\mathbf{r} = \\begin{pmatrix}2\\\\-1\\end{pmatrix} + \\lambda\\begin{pmatrix}1\\\\3\\end{pmatrix}$, find the $y$-coordinate when $\\lambda = 2$.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 5 }],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Parametric form",
                statement: "Substitute $\\lambda$ into the components.",
              },
            ],
            steps: [
              {
                reasoning: "$y = -1 + 3(2) = 5$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$y$-coordinate is $5$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$5$",
            commonErrors: ["Substituting into the wrong component."],
          },
        },
        {
          id: "cial-m-u7-vl-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is a direction vector for the line through the points $(1, 0)$ and $(4, 6)$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\begin{pmatrix}5\\\\6\\end{pmatrix}$" },
              { id: "b", text: "$\\begin{pmatrix}1\\\\2\\end{pmatrix}$" },
              { id: "c", text: "$\\begin{pmatrix}3\\\\-6\\end{pmatrix}$" },
              { id: "d", text: "$\\begin{pmatrix}4\\\\6\\end{pmatrix}$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Direction vector",
                statement:
                  "Direction $=$ position vector of second point minus first; any scalar multiple works.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$\\begin{pmatrix}4\\\\6\\end{pmatrix} - \\begin{pmatrix}1\\\\0\\end{pmatrix} = \\begin{pmatrix}3\\\\6\\end{pmatrix} = 3\\begin{pmatrix}1\\\\2\\end{pmatrix}$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** $\\begin{pmatrix}1\\\\2\\end{pmatrix}$",
            commonErrors: ["Adding the position vectors instead of subtracting."],
          },
        },
        {
          id: "cial-m-u7-vl-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "The line $\\mathbf{r} = \\begin{pmatrix}0\\\\1\\end{pmatrix} + \\lambda\\begin{pmatrix}3\\\\2\\end{pmatrix}$ crosses the vertical line $x = 9$ when $\\lambda = ?$",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 3 }],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Parametric form",
                statement: "Set the $x$-component equal to $9$.",
              },
            ],
            steps: [
              {
                reasoning: "$0 + 3\\lambda = 9$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$\\lambda = 3$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$3$",
            commonErrors: ["Using the $y$-component equation instead of $x$."],
          },
        },
        {
          id: "cial-m-u7-vl-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which point lies on the line $\\mathbf{r} = \\begin{pmatrix}1\\\\2\\end{pmatrix} + \\lambda\\begin{pmatrix}2\\\\-1\\end{pmatrix}$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$(3, 1)$" },
              { id: "b", text: "$(3, 2)$" },
              { id: "c", text: "$(1, 1)$" },
              { id: "d", text: "$(2, 1)$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Point on line",
                statement: "Substitute a value of $\\lambda$ and check both components.",
              },
            ],
            steps: [
              {
                reasoning: "$\\lambda = 1$ gives $\\begin{pmatrix}1+2\\\\2-1\\end{pmatrix} = \\begin{pmatrix}3\\\\1\\end{pmatrix}$, i.e. $(3, 1)$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $(3, 1)$",
            commonErrors: ["Checking only one component."],
          },
        },
        {
          id: "cial-m-u7-vl-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find the value of $\\lambda$ at which the line $\\mathbf{r} = \\begin{pmatrix}2\\\\-1\\end{pmatrix} + \\lambda\\begin{pmatrix}1\\\\3\\end{pmatrix}$ reaches height $y = 5$.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 2 }],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Parametric form",
                statement: "Set the $y$-component equal to $5$.",
              },
            ],
            steps: [
              { reasoning: "$-1 + 3\\lambda = 5$.", marks: 1, markCode: "M" },
              { reasoning: "$3\\lambda = 6$.", marks: 1, markCode: "M" },
              { reasoning: "$\\lambda = 2$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2$",
            commonErrors: ["Using the $x$-component equation instead of $y$."],
          },
        },
        {
          id: "cial-m-u7-vl-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "The lines with direction vectors $\\begin{pmatrix}1\\\\2\\end{pmatrix}$ and $\\begin{pmatrix}2\\\\-1\\end{pmatrix}$ are...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The same line" },
              { id: "b", text: "Parallel" },
              { id: "c", text: "Coincident in direction only if equal" },
              { id: "d", text: "Perpendicular" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Perpendicular lines",
                statement: "Dot product of directions $= 1(2) + 2(-1) = 0$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$\\begin{pmatrix}1\\\\2\\end{pmatrix}\\cdot\\begin{pmatrix}2\\\\-1\\end{pmatrix} = 2 - 2 = 0$, so the lines are perpendicular.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(d)** Perpendicular",
            commonErrors: ["Comparing magnitudes instead of the dot product."],
          },
        },
        {
          id: "cial-m-u7-vl-q12",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Find the $x$-coordinate of the intersection of $\\mathbf{r} = \\begin{pmatrix}1\\\\1\\end{pmatrix} + \\lambda\\begin{pmatrix}1\\\\2\\end{pmatrix}$ and $\\mathbf{r} = \\begin{pmatrix}3\\\\-1\\end{pmatrix} + \\mu\\begin{pmatrix}2\\\\1\\end{pmatrix}$.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: -1 }],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Intersection",
                statement: "Set the lines equal and solve for $\\lambda$ and $\\mu$.",
              },
            ],
            steps: [
              {
                reasoning: "$1 + \\lambda = 3 + 2\\mu$ and $1 + 2\\lambda = -1 + \\mu$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "From the second: $\\mu = 2 + 2\\lambda$; substitute: $1 + \\lambda = 3 + 4 + 4\\lambda$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$-6 = 3\\lambda$, so $\\lambda = -2$, $\\mu = -2$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$x = 1 + (-2) = -1$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$-1$",
            commonErrors: ["Solving only one component equation."],
          },
        },
        {
          id: "cial-m-u7-vl-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "The direction vectors $\\begin{pmatrix}2\\\\4\\end{pmatrix}$ and $\\begin{pmatrix}-1\\\\-2\\end{pmatrix}$ show that the two lines are...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Identical in every respect" },
              { id: "b", text: "Perpendicular" },
              { id: "c", text: "Intersecting at right angles only" },
              { id: "d", text: "Parallel" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Parallel lines",
                statement: "Directions are scalar multiples: $\\begin{pmatrix}2\\\\4\\end{pmatrix} = -2\\begin{pmatrix}-1\\\\-2\\end{pmatrix}$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$\\begin{pmatrix}2\\\\4\\end{pmatrix} = -2\\begin{pmatrix}-1\\\\-2\\end{pmatrix}$, so the directions are parallel.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(d)** Parallel",
            commonErrors: ["Assuming a negative scalar multiple means perpendicular."],
          },
        },
        {
          id: "cial-m-u7-vl-q14",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Find the value of $\\mu$ at which the line $\\mathbf{r} = \\begin{pmatrix}1\\\\2\\end{pmatrix} + \\mu\\begin{pmatrix}2\\\\-1\\end{pmatrix}$ meets the line $\\mathbf{r} = \\begin{pmatrix}5\\\\0\\end{pmatrix} + t\\begin{pmatrix}-1\\\\2\\end{pmatrix}$.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 2 }],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Intersection",
                statement: "Set the two vector equations equal and solve.",
              },
            ],
            steps: [
              {
                reasoning: "$1 + 2\\mu = 5 - t$ and $2 - \\mu = 2t$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "From the second, $t = \\frac{2-\\mu}{2}$; substituting gives $\\mu = 2$, $t = 0$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Intersection at $\\mu = 2$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2$",
            commonErrors: ["Forgetting to check the solution in both components."],
          },
        },
        {
          id: "cial-m-u7-vl-q15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "What is the angle between two lines with direction vectors $\\begin{pmatrix}2\\\\1\\end{pmatrix}$ and $\\begin{pmatrix}1\\\\3\\end{pmatrix}$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$90°$" },
              { id: "b", text: "$30°$" },
              { id: "c", text: "$60°$" },
              { id: "d", text: "$45°$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Angle between lines",
                statement:
                  "$\\cos\\theta = \\frac{2(1)+1(3)}{\\sqrt{5}\\sqrt{10}} = \\frac{5}{\\sqrt{50}} = \\frac{1}{\\sqrt{2}}$.",
              },
            ],
            steps: [
              {
                reasoning: "$\\cos\\theta = \\frac{1}{\\sqrt{2}}$, so $\\theta = 45°$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(d)** $45°$",
            commonErrors: ["Using the angle between position vectors instead of directions."],
          },
        },
        {
          id: "cial-m-u7-vl-q16",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Vector equations of lines.",
          parts: [
            { label: "a", prompt: "State the vector equation of a line.", marks: 1 },
            {
              label: "b",
              prompt: "Line through (0, 4) with direction (1, -2)?",
              marks: 2,
            },
            {
              label: "c",
              prompt: "How do you test whether two lines intersect?",
              marks: 2,
            },
            {
              label: "d",
              prompt: "Are directions (1,2) and (2,4) parallel?",
              marks: 2,
            },
            {
              label: "e",
              prompt: "Angle between directions (1,1) and (1,-1)?",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Vectors",
                statement: "Equation+intersection+parallel+angle.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$\\mathbf{r} = \\mathbf{a} + \\lambda\\mathbf{d}$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "$\\mathbf{r} = \\begin{pmatrix}0\\\\4\\end{pmatrix} + \\lambda\\begin{pmatrix}1\\\\-2\\end{pmatrix}$.",
                marks: 1,
                markCode: "M",
              },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
              {
                part: "c",
                reasoning: "Set the two equations equal.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Solve for $\\lambda, \\mu$ and check consistency.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "$\\begin{pmatrix}2\\\\4\\end{pmatrix} = 2\\begin{pmatrix}1\\\\2\\end{pmatrix}$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Yes, parallel.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "e",
                reasoning: "Dot product $= 1 - 1 = 0$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "e",
                reasoning: "$|\\mathbf{d}_1| = |\\mathbf{d}_2| = \\sqrt{2}$, so $\\cos\\theta = 0$.",
                marks: 1,
                markCode: "M",
              },
              { part: "e", reasoning: "$\\theta = 90°$.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "(a) r=a+λd (b) correct equation (c) set equal+solve (d) parallel (e) 90°",
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
              { id: "a", text: "$x^2+y^2+z^2=r^2$" },
              {
                id: "b",
                text: "$\\mathbf{r} \\cdot \\mathbf{n} = \\mathbf{a} \\cdot \\mathbf{n}$ (normal vector)",
              },
              { id: "c", text: "$ax+by+cz=d$ only" },
              {
                id: "d",
                text: "$\\mathbf{r} = \\mathbf{a} + \\lambda\\mathbf{d}$",
              },
            ],
            correctChoiceId: "b",
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
              "**(b)** $\\mathbf{r}\\cdot\\mathbf{n}=\\mathbf{a}\\cdot\\mathbf{n}$",
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
        {
          id: "cial-m-u7-va-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A plane is defined by a point on it and...",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "A normal vector perpendicular to the plane",
              },
              { id: "b", text: "A single gradient only" },
              { id: "c", text: "A direction vector lying in the plane" },
              { id: "d", text: "Two parallel lines" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Plane",
                statement: "Defined by a point and a normal vector.",
              },
            ],
            steps: [
              {
                reasoning: "Normal vector is perpendicular to every direction in the plane.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** A normal vector",
            commonErrors: ["Confusing normal with direction vector."],
          },
        },
        {
          id: "cial-m-u7-va-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "The point $(1, 1, 1)$ lies on the plane $x + 2y + 3z = 6$. Verify this and state the value of $x + 2y + 3z$ at this point.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 6 }],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Plane equation",
                statement: "Substitute coordinates into LHS.",
              },
            ],
            steps: [
              {
                reasoning: "$1 + 2(1) + 3(1) = 1 + 2 + 3 = 6$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Point lies on plane; value $= 6$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$6$",
            commonErrors: ["Arithmetic slip in substitution."],
          },
        },
        {
          id: "cial-m-u7-va-q7",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find the Cartesian equation of the plane through the point $(2, 0, 1)$ with normal vector $\\begin{pmatrix}1\\\\2\\\\3\\end{pmatrix}$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Plane",
                statement: "$\\mathbf{r}\\cdot\\mathbf{n} = \\mathbf{a}\\cdot\\mathbf{n}$; convert to Cartesian.",
              },
            ],
            steps: [
              {
                reasoning: "$\\mathbf{a}\\cdot\\mathbf{n} = 2(1) + 0(2) + 1(3) = 5$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$x + 2y + 3z = 5$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x + 2y + 3z = 5$",
            commonErrors: ["Using the point vector as the normal."],
          },
        },
        {
          id: "cial-m-u7-va-q8",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Four points are coplanar if and only if...",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "The scalar triple product of vectors between them is zero",
              },
              { id: "b", text: "Any two of them coincide" },
              { id: "c", text: "The dot product of all vectors is one" },
              { id: "d", text: "Their position vectors sum to zero" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Coplanarity",
                statement: "$(\\mathbf{b}-\\mathbf{a})\\cdot[(\\mathbf{c}-\\mathbf{a})\\times(\\mathbf{d}-\\mathbf{a})] = 0$.",
              },
            ],
            steps: [
              {
                reasoning: "Zero scalar triple product ⟺ coplanar.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** Scalar triple product = 0",
            commonErrors: ["Using dot product alone."],
          },
        },
        {
          id: "cial-m-u7-va-q9",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Find the shortest distance from the origin to the plane $x + y + z = 3$.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 1.7321, tolerance: 0.001 }],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Point-plane distance",
                statement: "$d = \\frac{|ax_0+by_0+cz_0+d|}{\\sqrt{a^2+b^2+c^2}}$.",
              },
            ],
            steps: [
              {
                reasoning: "Distance $= \\frac{|0+0+0-3|}{\\sqrt{1+1+1}} = \\frac{3}{\\sqrt{3}}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$= \\sqrt{3}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$\\approx 1.732$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\sqrt{3} \\approx 1.732$",
            commonErrors: ["Forgetting to take the absolute value."],
          },
        },
        {
          id: "cial-m-u7-va-q10",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Find the equation of the plane passing through the three points $(1,0,0)$, $(0,1,0)$ and $(0,0,1)$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Plane through 3 points",
                statement: "Find normal via cross product of two edge vectors.",
              },
            ],
            steps: [
              {
                reasoning: "$\\overrightarrow{AB} = \\begin{pmatrix}-1\\\\1\\\\0\\end{pmatrix}$, $\\overrightarrow{AC} = \\begin{pmatrix}-1\\\\0\\\\1\\end{pmatrix}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Normal $= \\overrightarrow{AB} \\times \\overrightarrow{AC} = \\begin{pmatrix}1\\\\1\\\\1\\end{pmatrix}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Plane: $x + y + z = 1$ (check: $1+0+0=1$ etc.).",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x + y + z = 1$",
            commonErrors: ["Using position vectors directly as the normal."],
          },
        },
        {
          id: "cial-m-u7-va-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "The Cartesian form of the plane $\\mathbf{r} \\cdot \\mathbf{n} = d$ with normal $(a,b,c)$ is...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$a^2 + b^2 + c^2 = d$" },
              { id: "b", text: "$ax + by + cz = 0$ always" },
              { id: "c", text: "$x + y + z = d$" },
              { id: "d", text: "$ax + by + cz = d$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Plane Cartesian",
                statement: "Expand $\\mathbf{r}\\cdot\\mathbf{n}$ componentwise.",
              },
            ],
            steps: [
              {
                reasoning: "$\\begin{pmatrix}x\\\\y\\\\z\\end{pmatrix}\\cdot\\begin{pmatrix}a\\\\b\\\\c\\end{pmatrix} = ax+by+cz$.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(d)** $ax+by+cz=d$",
            commonErrors: ["Forgetting the constant term d."],
          },
        },
        {
          id: "cial-m-u7-va-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "The plane has equation $2x + y - z = 4$. Find the value of z when $x = 1$ and $y = 2$.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 0 }],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Plane",
                statement: "Substitute known coordinates and solve.",
              },
            ],
            steps: [
              {
                reasoning: "$2(1) + 2 - z = 4 \\Rightarrow 4 - z = 4$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$z = 0$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$0$",
            commonErrors: ["Sign error on the $-z$ term."],
          },
        },
        {
          id: "cial-m-u7-va-q13",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Determine whether the points A(0,0,0), B(1,0,0), C(0,1,0) and D(1,1,1) are coplanar.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Coplanarity",
                statement: "Compute scalar triple product; zero ⟺ coplanar.",
              },
            ],
            steps: [
              {
                reasoning: "$\\overrightarrow{AB} = \\begin{pmatrix}1\\\\0\\\\0\\end{pmatrix}$, $\\overrightarrow{AC} = \\begin{pmatrix}0\\\\1\\\\0\\end{pmatrix}$, $\\overrightarrow{AD} = \\begin{pmatrix}1\\\\1\\\\1\\end{pmatrix}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$\\overrightarrow{AC} \\times \\overrightarrow{AD} = \\begin{pmatrix}1\\\\0\\\\-1\\end{pmatrix}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Triple product $= \\begin{pmatrix}1\\\\0\\\\0\\end{pmatrix}\\cdot\\begin{pmatrix}1\\\\0\\\\-1\\end{pmatrix} = 1 \\ne 0$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Not coplanar.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Conclusion stated.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Not coplanar",
            commonErrors: ["Stopping before the dot product."],
          },
        },
        {
          id: "cial-m-u7-va-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The scalar triple product of vectors a, b and c is written...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$|\\mathbf{a}||\\mathbf{b}||\\mathbf{c}|$" },
              { id: "b", text: "$\\mathbf{a} \\times (\\mathbf{b} \\times \\mathbf{c})$" },
              { id: "c", text: "$\\mathbf{a} \\cdot (\\mathbf{b} \\times \\mathbf{c})$" },
              { id: "d", text: "$(\\mathbf{a} \\cdot \\mathbf{b}) \\times \\mathbf{c}$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Scalar triple product",
                statement: "Dot of one vector with cross product of other two.",
              },
            ],
            steps: [
              {
                reasoning: "$\\mathbf{a}\\cdot(\\mathbf{b}\\times\\mathbf{c})$.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(c)** $\\mathbf{a}\\cdot(\\mathbf{b}\\times\\mathbf{c})$",
            commonErrors: ["Confusing with vector triple product."],
          },
        },
        {
          id: "cial-m-u7-va-q15",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Find the shortest distance from the point P(0, 0, 3) to the line $\\mathbf{r} = \\begin{pmatrix}1\\\\0\\\\0\\end{pmatrix} + \\lambda\\begin{pmatrix}0\\\\1\\\\0\\end{pmatrix}$.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 3.1623, tolerance: 0.001 }],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Point-line distance",
                statement: "Foot of perpendicular: solve $(\\mathbf{p}-\\mathbf{a}-\\lambda\\mathbf{d})\\cdot\\mathbf{d}=0$.",
              },
            ],
            steps: [
              {
                reasoning: "Closest point on line is $(1, 0, 0)$ (set $\\lambda$ via perpendicularity).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Vector from foot to P: $\\begin{pmatrix}-1\\\\0\\\\3\\end{pmatrix}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Distance $= \\sqrt{1 + 9} = \\sqrt{10}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$\\approx 3.162$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\sqrt{10} \\approx 3.162$",
            commonErrors: ["Measuring distance to the point (1,0,0) incorrectly."],
          },
        },
        {
          id: "cial-m-u7-va-q16",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Vector applications: planes and coplanarity.",
          parts: [
            {
              label: "a",
              prompt: "State the vector equation of a plane.",
              marks: 1,
            },
            {
              label: "b",
              prompt: "Find the Cartesian equation of the plane through (1, 2, 3) with normal (2, 0, 1).",
              marks: 3,
            },
            {
              label: "c",
              prompt: "How do you test whether four points are coplanar?",
              marks: 3,
            },
            {
              label: "d",
              prompt: "Outline the method for the shortest distance from a point to a line.",
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
                reasoning: "$\\mathbf{r}\\cdot\\mathbf{n} = \\mathbf{a}\\cdot\\mathbf{n}$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$\\mathbf{a}\\cdot\\mathbf{n} = 2 + 0 + 3 = 5$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$2x + z = 5$.",
                marks: 1,
                markCode: "M",
              },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
              {
                part: "c",
                reasoning: "Form vectors between the points.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Compute scalar triple product.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Zero ⟺ coplanar.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Find foot of perpendicular on the line.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Solve $(\\mathbf{p}-\\mathbf{a})\\cdot\\mathbf{d}=0$ for $\\lambda$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Compute $|\\mathbf{p} - \\text{foot}|$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) r·n=a·n (b) 2x+z=5 (c) triple product=0 (d) perpendicular foot",
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
