import type { Lesson } from "../../../types.ts";

export const lesson62: Lesson = {
  id: "aahl-u6-lesson-6-2",
  code: "6-2",
  title: "Volumes and Differential Equations",
  goal: "I CAN find areas with respect to y and volumes of revolution, and solve first-order differential equations analytically and with Euler's method.",
  standards: ["AHL 5.17", "AHL 5.18"],
  vocabulary: [
    {
      term: "Volume of revolution",
      definition:
        "The volume of the solid formed by rotating a region through $2\\pi$ about an axis: $V=\\pi\\int_a^b y^2\\,dx$ about the $x$-axis and $V=\\pi\\int_c^d x^2\\,dy$ about the $y$-axis.",
    },
    {
      term: "Separable equation",
      definition:
        "A differential equation that can be written $\\frac{dy}{dx}=f(x)g(y)$, solved by $\\int\\frac{dy}{g(y)}=\\int f(x)\\,dx$.",
    },
    {
      term: "Homogeneous equation",
      definition:
        "An equation $\\frac{dy}{dx}=f\\left(\\frac yx\\right)$, solved by the substitution $y=vx$.",
    },
    {
      term: "Integrating factor",
      definition:
        "For $\\frac{dy}{dx}+P(x)y=Q(x)$, the function $I=e^{\\int P\\,dx}$, which makes $\\frac{d}{dx}(Iy)=IQ$.",
    },
    {
      term: "Euler's method",
      definition:
        "The numerical scheme $y_{n+1}=y_n+h\\,f(x_n,y_n)$, $x_{n+1}=x_n+h$.",
    },
    {
      term: "Initial condition",
      definition:
        "A given value $y(x_0)=y_0$ that fixes the constant in the general solution.",
    },
  ],
  concepts: [
    {
      id: "aahl-u6-volumes",
      title: "Areas with respect to y and volumes of revolution",
      skill:
        "Integrate with respect to $y$ to find areas, and use $\\pi\\int y^2dx$ and $\\pi\\int x^2dy$ for volumes of revolution.",
      lesson: {
        sections: [
          {
            heading: "Area with respect to y",
            body: "When the curve is easier to write as $x=g(y)$, the area between the curve and the $y$-axis from $y=c$ to $y=d$ is $\\int_c^d x\\,dy$. Express $x$ in terms of $y$ first, and use the $y$-limits.",
          },
          {
            heading: "Volumes of revolution",
            body: "Rotating a region about the $x$-axis makes discs of radius $y$, so $V=\\pi\\int_a^b y^2\\,dx$. Rotating about the $y$-axis uses $V=\\pi\\int_c^d x^2\\,dy$. For a region between two curves, subtract the squares (washers), not the square of the difference.",
          },
        ],
        keyFormulas: [
          {
            name: "About the x-axis",
            statement: "$V=\\pi\\displaystyle\\int_a^b y^2\\,dx$",
          },
          {
            name: "About the y-axis",
            statement: "$V=\\pi\\displaystyle\\int_c^d x^2\\,dy$",
          },
        ],
        workedExample: {
          problem:
            "Region under $y=x$ for $0\\le x\\le3$ is rotated about the $x$-axis. Find the volume.",
          solution:
            "$V=\\pi\\int_0^3x^2dx=\\pi\\left[\\frac{x^3}3\\right]_0^3=9\\pi$ (a cone of radius 3 and height 3).",
        },
      },
      questions: [
        {
          id: "aahl-u6-volumes-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The region bounded by $y=\\sqrt x$, the $x$-axis and the line $x=4$ is rotated through $2\\pi$ about the $x$-axis. Find the volume of the solid formed.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$8\\pi$" },
              { id: "b", text: "$4\\pi$" },
              { id: "c", text: "$\\dfrac{16\\pi}{3}$" },
              { id: "d", text: "$16\\pi$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Volume of revolution",
                statement: "$V=\\pi\\int_a^by^2dx$",
              },
            ],
            steps: [
              {
                reasoning: "$y^2=x$.",
                working: "V=\\pi\\int_0^4x\\,dx",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Integrate and evaluate.",
                working: "\\pi\\left[\\frac{x^2}{2}\\right]_0^4=8\\pi",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $8\\pi$",
            commonErrors: [
              "Squaring incorrectly, using $y^2=x^2$.",
              "Omitting the $\\pi$ or the factor $\\frac12$.",
            ],
          },
        },
        {
          id: "aahl-u6-volumes-q2",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "The region bounded by $y=x^2$, the $x$-axis and the line $x=2$ is rotated through $2\\pi$ about the $x$-axis. Find the volume of the solid, to 3 significant figures.",
          response: {
            type: "numeric",
            parts: [{ label: "Volume", answer: 20.1, tolerance: 0.05 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Volume of revolution",
                statement: "$V=\\pi\\int_a^by^2dx$",
              },
            ],
            steps: [
              {
                reasoning: "Square $y$.",
                working: "V=\\pi\\int_0^2x^4\\,dx",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Integrate and substitute.",
                working:
                  "\\pi\\left[\\frac{x^5}{5}\\right]_0^2=\\frac{32\\pi}{5}",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Evaluate.",
                working: "\\approx20.1",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\frac{32\\pi}5\\approx20.1$",
            commonErrors: ["Using $\\int x^2$ rather than $\\int (x^2)^2$."],
          },
        },
        {
          id: "aahl-u6-volumes-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "The region $R$ is bounded by the curve $y=\\ln x$, the $y$-axis and the lines $y=0$ and $y=2$. Find the area of $R$, to 3 significant figures, and the volume formed when $R$ is rotated through $2\\pi$ about the $y$-axis, to 3 significant figures.",
          response: {
            type: "numeric",
            parts: [
              { label: "Area", answer: 6.39, tolerance: 0.005 },
              { label: "Volume", answer: 84.2, tolerance: 0.1 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Area wrt y",
                statement: "$A=\\int_c^dx\\,dy$ with $x=e^y$.",
              },
              {
                kind: "formula",
                name: "Volume about y-axis",
                statement: "$V=\\pi\\int_c^dx^2\\,dy$",
              },
            ],
            steps: [
              {
                reasoning:
                  "Rewrite $y=\\ln x$ as $x=e^y$ and integrate for the area.",
                working: "A=\\int_0^2e^y\\,dy=e^2-1\\approx6.39",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Set up the volume.",
                working: "V=\\pi\\int_0^2e^{2y}\\,dy",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Integrate.",
                working:
                  "\\pi\\left[\\frac{e^{2y}}{2}\\right]_0^2=\\frac{\\pi}{2}(e^4-1)",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Evaluate: $\\frac\\pi2(53.598)$.",
                working: "\\approx84.2",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Area $e^2-1\\approx6.39$; volume $\\frac\\pi2(e^4-1)\\approx84.2$",
            commonErrors: ["Using $x$-limits."],
          },
        },
        {
          id: "aahl-u6-volumes-q4",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 12,
          stem: "For each positive real number $n$, let $R_n$ be the region bounded by the curve $y=x^n$, the $x$-axis and the line $x=1$. Let $V_x$ and $V_y$ be the volumes obtained when $R_n$ is rotated through $2\\pi$ about the $x$-axis and the $y$-axis respectively.",
          parts: [
            {
              label: "a",
              prompt: "Show that $V_x=\\dfrac{\\pi}{2n+1}$.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "By expressing $x$ in terms of $y$, show that $V_y=\\dfrac{2\\pi}{n+2}$.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "For $n=1$, identify the solids formed and verify your results in (a) and (b) using volumes of cones and cylinders.",
              marks: 2,
            },
            {
              label: "d",
              prompt: "Find the value of $n$ for which $V_y=3V_x$.",
              marks: 2,
            },
            {
              label: "e",
              prompt:
                "Show that $V_y>V_x$ for all $n>0$, and find the limit of $\\dfrac{V_y}{V_x}$ as $n\\to\\infty$.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Volume about the x-axis",
                statement: "$V=\\pi\\int y^2dx$",
              },
              {
                kind: "formula",
                name: "Volume about the y-axis (washers)",
                statement:
                  "At height $y$ the region spans $x=y^{1/n}$ to $x=1$.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Square $y=x^n$.",
                working: "V_x=\\pi\\int_0^1x^{2n}\\,dx",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Integrate.",
                working:
                  "\\pi\\left[\\frac{x^{2n+1}}{2n+1}\\right]_0^1=\\frac{\\pi}{2n+1}\\ \\text{(AG)}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Solving $y=x^n$ gives $x=y^{1/n}$; the cross-section at height $y$ is a washer of outer radius 1 and inner radius $y^{1/n}$.",
                working: "V_y=\\pi\\int_0^1\\left(1-y^{2/n}\\right)dy",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Integrate.",
                working:
                  "\\pi\\left[y-\\frac{y^{2/n+1}}{2/n+1}\\right]_0^1=\\pi\\left(1-\\frac{n}{n+2}\\right)",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Simplify.",
                working: "V_y=\\frac{2\\pi}{n+2}\\ \\text{(AG)}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "For $n=1$ the region is a triangle. About the $x$-axis it forms a cone of radius 1 and height 1; about the $y$-axis a cylinder of radius 1 and height 1 with a cone removed.",
                working:
                  "V_x=\\frac13\\pi=\\frac\\pi{2+1},\\quad V_y=\\pi-\\frac\\pi3=\\frac{2\\pi}3",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "These agree with (a) and (b) at $n=1$.",
                working: "\\frac{\\pi}{3},\\ \\frac{2\\pi}{3}",
                marks: 1,
                markCode: "R",
              },
              {
                part: "d",
                reasoning: "Set up the equation.",
                working: "\\frac{2\\pi}{n+2}=\\frac{3\\pi}{2n+1}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Cross-multiply: $4n+2=3n+6$.",
                working: "n=4",
                marks: 1,
                markCode: "A",
              },
              {
                part: "e",
                reasoning: "Form the ratio.",
                working:
                  "\\frac{V_y}{V_x}=\\frac{2(2n+1)}{n+2}=\\frac{4n+2}{n+2}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "e",
                reasoning: "$\\frac{4n+2}{n+2}>1\\iff4n+2>n+2\\iff n>0$.",
                working: "V_y>V_x",
                marks: 1,
                markCode: "R",
              },
              {
                part: "e",
                reasoning: "Divide by $n$ and let $n\\to\\infty$.",
                working: "\\frac{4+2/n}{1+2/n}\\to4",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a), (b) shown. (c) cone and cylinder minus cone. (d) $n=4$. (e) ratio $\\frac{4n+2}{n+2}>1$ and tends to $4$.",
            commonErrors: [
              "Using the disc $\\pi y^2$ instead of the washer for $V_y$.",
              "Taking the square of the difference $(1-y^{1/n})^2$.",
            ],
            examinerNote:
              "Check $n=4$: $V_x=\\frac\\pi9$ and $V_y=\\frac{2\\pi}6=\\frac\\pi3=3V_x$.",
          },
        },
        {
          id: "aahl-u6-volumes-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The region bounded by $y=x^2$, the $x$-axis and the line $x=1$ is rotated through $2\\pi$ about the $x$-axis. Find the volume of the solid formed.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{2\\pi}{5}$" },
              { id: "b", text: "$\\frac{\\pi}{5}$" },
              { id: "c", text: "$\\frac{\\pi}{10}$" },
              { id: "d", text: "$\\frac{\\pi}{3}$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Volume of revolution",
                statement: "$V=\\pi\\int_a^by^2dx$",
              },
            ],
            steps: [
              {
                reasoning: "$y^2=x^4$, so $V=\\pi\\int_0^1x^4dx$.",
                working: "\\pi\\int_0^1x^4\\,dx",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Integrate and evaluate.",
                working: "\\pi\\left[\\frac{x^5}{5}\\right]_0^1=\\frac\\pi5",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** $\\frac{\\pi}{5}$",
            commonErrors: [
              "Integrating $y^2=x^2$ instead of $x^4$.",
              "Dropping the factor $\\pi$.",
            ],
          },
        },
        {
          id: "aahl-u6-volumes-q6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The same region bounded by $y=x^2$, the $x$-axis and $x=1$ is rotated through $2\\pi$ about the $y$-axis. Find the volume of the solid formed.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{\\pi}{4}$" },
              { id: "b", text: "$\\frac{2\\pi}{3}$" },
              { id: "c", text: "$\\frac{\\pi}{2}$" },
              { id: "d", text: "$\\pi$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Volume about y-axis",
                statement: "$V=\\pi\\int_c^dx^2dy$ with $x=\\sqrt y$",
              },
            ],
            steps: [
              {
                reasoning: "Rewrite as $x=\\sqrt y$ with $y$ from $0$ to $1$.",
                working: "V=\\pi\\int_0^1y\\,dy",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Integrate and evaluate.",
                working: "\\pi\\left[\\frac{y^2}{2}\\right]_0^1=\\frac\\pi2",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** $\\frac{\\pi}{2}$",
            commonErrors: [
              "Using $x^2=y^2$ instead of $x^2=y$.",
              "Keeping $x$-limits.",
            ],
          },
        },
        {
          id: "aahl-u6-volumes-q7",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The region bounded by $y=x$, the $x$-axis and the line $x=3$ is rotated through $2\\pi$ about the $y$-axis. Find the volume of the solid formed.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$27\\pi$" },
              { id: "b", text: "$9\\pi$" },
              { id: "c", text: "$3\\pi$" },
              { id: "d", text: "$\\pi$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Volume about y-axis",
                statement: "$V=\\pi\\int_0^3x^2dy$ with $x=y$",
              },
            ],
            steps: [
              {
                reasoning:
                  "With $x=y$, $V=\\pi\\int_0^3y^2dy$ (a cylinder of radius $3$, height $3$).",
                working: "\\pi\\int_0^3y^2\\,dy",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Integrate and evaluate.",
                working: "\\pi\\left[\\frac{y^3}{3}\\right]_0^3=9\\pi",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** $9\\pi$",
            commonErrors: [
              "Using $x$-limits $0$ to $3$ with $x^2$ instead of converting to $y$.",
              "Computing the cylinder volume $\\pi r^2h=27\\pi$ when the solid is actually a cone.",
            ],
          },
        },
        {
          id: "aahl-u6-volumes-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "The region bounded by $y=\\sqrt x$, the $x$-axis and the line $x=4$ is rotated through $2\\pi$ about the $x$-axis. Find the volume of the solid formed, to 3 significant figures.",
          response: {
            type: "numeric",
            parts: [{ label: "Volume", answer: 25.1, tolerance: 0.05 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Volume of revolution",
                statement: "$V=\\pi\\int_a^by^2dx$",
              },
            ],
            steps: [
              {
                reasoning: "$y^2=x$, so $V=\\pi\\int_0^4x\\,dx$.",
                working: "\\pi\\int_0^4x\\,dx",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Integrate and substitute the limits.",
                working: "\\pi\\left[\\frac{x^2}{2}\\right]_0^4=8\\pi",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Evaluate.",
                working: "8\\pi\\approx25.1",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$8\\pi\\approx25.1$",
            commonErrors: [
              "Squaring to get $y^2=x^2$.",
              "Using limits $0$ to $2$ (the height) instead of $0$ to $4$.",
            ],
          },
        },
        {
          id: "aahl-u6-volumes-q9",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "The region bounded by $y=x^3$, the $x$-axis and the line $x=1$ is rotated through $2\\pi$ about the $x$-axis. Find the volume of the solid formed.",
          response: {
            type: "numeric",
            parts: [{ label: "Volume", answer: 0.449, tolerance: 0.0005 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Volume of revolution",
                statement: "$V=\\pi\\int_a^by^2dx$",
              },
            ],
            steps: [
              {
                reasoning: "$y^2=x^6$, so $V=\\pi\\int_0^1x^6dx$.",
                working: "\\pi\\int_0^1x^6\\,dx",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Integrate and evaluate: $\\frac{\\pi}{7}\\approx0.449$.",
                working: "\\frac\\pi7\\approx0.4488",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\frac{\\pi}{7}\\approx0.449$",
            commonErrors: ["Integrating $x^3$ instead of $(x^3)^2=x^6$."],
          },
        },
        {
          id: "aahl-u6-volumes-q10",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "The region bounded by $y=x$ and $y=x^2$ for $0\\le x\\le1$ is rotated through $2\\pi$ about the $x$-axis. Find the volume of the solid formed.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{\\pi}{5}$" },
              { id: "b", text: "$\\frac{2\\pi}{15}$" },
              { id: "c", text: "$\\frac{8\\pi}{15}$" },
              { id: "d", text: "$\\frac{\\pi}{3}$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Volume of revolution (washer)",
                statement: "$V=\\pi\\int_a^b(R^2-r^2)dx$",
              },
            ],
            steps: [
              {
                reasoning:
                  "Outer radius is $y=x$, inner is $y=x^2$: $V=\\pi\\int_0^1(x^2-x^4)dx$.",
                working: "\\pi\\int_0^1(x^2-x^4)\\,dx",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Integrate and evaluate: $\\pi\\left(\\frac13-\\frac15\\right)=\\frac{2\\pi}{15}$.",
                working: "\\pi\\cdot\\frac{2}{15}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** $\\frac{2\\pi}{15}$",
            commonErrors: [
              "Squaring the difference $(x-x^2)^2$ instead of subtracting squares.",
              "Adding the squares instead of subtracting.",
            ],
          },
        },
        {
          id: "aahl-u6-volumes-q11",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Find the area of the region bounded by the curve $y=x^2$, the $y$-axis and the line $y=1$, by integrating with respect to $y$.",
          response: {
            type: "numeric",
            parts: [{ label: "Area", answer: 0.667, tolerance: 0.001 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Area wrt y",
                statement: "$A=\\int_c^dx\\,dy$ with $x=\\sqrt y$",
              },
            ],
            steps: [
              {
                reasoning:
                  "Express $x$ in terms of $y$: $x=\\sqrt y$ for $0\\le y\\le1$.",
                working: "A=\\int_0^1\\sqrt y\\,dy",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Integrate and evaluate: $\\frac23$.",
                working:
                  "\\left[\\frac23y^{3/2}\\right]_0^1=\\frac23\\approx0.667",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\frac23\\approx0.667$",
            commonErrors: [
              "Using $x=y^2$ instead of $x=\\sqrt y$.",
              "Keeping the $x$-limits $0$ to $1$ with $y$ as the variable.",
            ],
          },
        },
        {
          id: "aahl-u6-volumes-q12",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "The region bounded by $y=\\frac1x$, the $x$-axis and the lines $x=1$ and $x=2$ is rotated through $2\\pi$ about the $x$-axis. Find the volume of the solid formed, to 3 significant figures.",
          response: {
            type: "numeric",
            parts: [{ label: "Volume", answer: 1.57, tolerance: 0.005 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Volume of revolution",
                statement: "$V=\\pi\\int_a^by^2dx$",
              },
            ],
            steps: [
              {
                reasoning: "$y^2=\\frac1{x^2}$, so $V=\\pi\\int_1^2x^{-2}dx$.",
                working: "\\pi\\int_1^2\\frac{1}{x^2}\\,dx",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Integrate.",
                working: "\\pi\\left[-\\frac1x\\right]_1^2",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Evaluate the limits.",
                working: "\\pi\\left(-\\frac12+1\\right)=\\frac\\pi2",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Give the decimal value.",
                working: "\\frac\\pi2\\approx1.57",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\frac{\\pi}{2}\\approx1.57$",
            commonErrors: [
              "Forgetting to square $y$ (using $\\frac1x$ instead of $\\frac1{x^2}$).",
              "Sign error when evaluating $-\\frac1x$.",
            ],
          },
        },
        {
          id: "aahl-u6-volumes-q13",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 6,
          stem: "The region bounded by $y=x^2+1$, the $x$-axis and the lines $x=0$ and $x=1$ is rotated through $2\\pi$ about the $x$-axis.",
          parts: [
            {
              label: "a",
              prompt:
                "Show that the volume is given by $V=\\pi\\displaystyle\\int_0^1(x^4+2x^2+1)\\,dx$.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Hence find the exact value of $V$.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Give $V$ to 3 significant figures.",
              marks: 1,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Volume of revolution",
                statement: "$V=\\pi\\int_a^by^2dx$",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Square $y=x^2+1$ and set up the integral.",
                working: "V=\\pi\\int_0^1(x^2+1)^2dx",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Expand the square.",
                working: "(x^2+1)^2=x^4+2x^2+1\\ \\text{(AG)}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Integrate term by term.",
                working:
                  "\\pi\\left[\\frac{x^5}{5}+\\frac{2x^3}{3}+x\\right]_0^1",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Evaluate at the limits.",
                working:
                  "\\pi\\left(\\frac15+\\frac23+1\\right)=\\frac{28\\pi}{15}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "State the exact value.",
                working: "V=\\frac{28\\pi}{15}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Evaluate.",
                working: "\\frac{28\\pi}{15}\\approx5.86",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(a)-(b) shown. $V=\\frac{28\\pi}{15}\\approx5.86$.",
            commonErrors: [
              "Forgetting to square the constant term $1$.",
              "Integrating $(x^2+1)^2$ as $x^4+1$.",
            ],
          },
        },
        {
          id: "aahl-u6-volumes-q14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "The region $R$ is bounded by the curves $y=\\sqrt x$ and $y=\\frac{x}{2}$ for $0\\le x\\le4$. The region is rotated through $2\\pi$ about the $x$-axis.",
          parts: [
            {
              label: "a",
              prompt:
                "Find the $x$-coordinates of the points where the two curves intersect.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Explain why $V=\\pi\\displaystyle\\int_0^4\\left(x-\\frac{x^2}{4}\\right)dx$.",
              marks: 2,
            },
            { label: "c", prompt: "Evaluate $V$ in exact form.", marks: 3 },
            {
              label: "d",
              prompt: "Give $V$ to 3 significant figures.",
              marks: 1,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Volume of revolution (washer)",
                statement: "$V=\\pi\\int_a^b(R^2-r^2)dx$",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Set $\\sqrt x=\\frac x2$ and solve.",
                working: "x=\\frac{x^2}{4}\\Rightarrow x^2-4x=0",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Factorise.",
                working: "x(x-4)=0\\Rightarrow x=0,4",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "For $0<x<4$, $\\sqrt x>\\frac x2$, so outer radius squared is $x$ and inner is $\\frac{x^2}{4}$.",
                working:
                  "V=\\pi\\int_0^4\\left(x-\\frac{x^2}{4}\\right)dx\\ \\text{(AG)}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "State the washer formula with $R^2=x$, $r^2=\\frac{x^2}{4}$.",
                working: "R^2-r^2=x-\\frac{x^2}{4}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Integrate.",
                working:
                  "\\pi\\left[\\frac{x^2}{2}-\\frac{x^3}{12}\\right]_0^4",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Evaluate at the limits.",
                working: "\\pi\\left(8-\\frac{64}{12}\\right)=\\frac{8\\pi}{3}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "State the exact value.",
                working: "V=\\frac{8\\pi}{3}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Evaluate.",
                working: "\\frac{8\\pi}{3}\\approx8.38",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) $x=0,4$. (c) $V=\\frac{8\\pi}{3}$. (d) $8.38$.",
            commonErrors: [
              "Using $(\\sqrt x-\\frac x2)^2$ instead of subtracting squares.",
              "Incorrect intersection points.",
            ],
          },
        },
        {
          id: "aahl-u6-volumes-q15",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 12,
          stem: "The region $R$ is bounded by the curve $y=e^x$, the $x$-axis and the lines $x=0$ and $x=1$. Let $V_x$ be the volume formed when $R$ is rotated through $2\\pi$ about the $x$-axis, and let $V_y$ be the volume formed when $R$ is rotated through $2\\pi$ about the $y$-axis.",
          parts: [
            {
              label: "a",
              prompt: "Show that $V_x=\\dfrac{\\pi}{2}(e^2-1)$.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Explain why $V_y=\\pi\\displaystyle\\int_1^e\\left(1-(\\ln y)^2\\right)dy$.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "By integrating by parts twice, show that $\\displaystyle\\int_1^e(\\ln y)^2dy=e-2$.",
              marks: 3,
            },
            {
              label: "d",
              prompt:
                "Hence find the exact value of $V_y$ and state which of $V_x$ and $V_y$ is larger.",
              marks: 3,
            },
            {
              label: "e",
              prompt: "Write down $V_x$ to 3 significant figures.",
              marks: 1,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Volume about x-axis",
                statement: "$V=\\pi\\int y^2dx$",
              },
              {
                kind: "formula",
                name: "Volume about y-axis (washers)",
                statement:
                  "At height $y$ the region spans $x=\\ln y$ to $x=1$.",
              },
              {
                kind: "formula",
                name: "Integration by parts",
                statement: "$\\int u\\,v'=uv-\\int u'v$",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$y^2=e^{2x}$, so $V_x=\\pi\\int_0^1e^{2x}dx$.",
                working: "\\pi\\left[\\frac{e^{2x}}{2}\\right]_0^1",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Evaluate.",
                working: "V_x=\\frac\\pi2(e^2-1)\\ \\text{(AG)}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "At height $y\\in[1,e]$, the horizontal slice of the region runs from $x=\\ln y$ to $x=1$; rotating gives a washer of outer radius $1$ and inner radius $\\ln y$.",
                working:
                  "V_y=\\pi\\int_1^e\\left(1-(\\ln y)^2\\right)dy\\ \\text{(AG)}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "State outer and inner radii correctly.",
                working: "R=1,\\ r=\\ln y",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Justify the $y$-limits from $y=e^0=1$ to $y=e^1=e$.",
                working: "1\\le y\\le e",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "First application with $u=(\\ln y)^2$, $dv=dy$.",
                working: "\\left[y(\\ln y)^2\\right]_1^e-2\\int_1^e\\ln y\\,dy",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Boundary term is $e$; integrate $\\ln y$ by parts to get $[y\\ln y-y]_1^e=1$.",
                working: "e-2\\left[y\\ln y-y\\right]_1^e=e-2",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Conclude.",
                working: "\\int_1^e(\\ln y)^2dy=e-2\\ \\text{(AG)}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Substitute into $V_y$.",
                working: "V_y=\\pi\\left[(e-1)-(e-2)\\right]=\\pi",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "State the exact value.",
                working: "V_y=\\pi",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Compare: $\\frac\\pi2(e^2-1)\\approx11.7>\\pi$.",
                working: "V_x>V_y",
                marks: 1,
                markCode: "A",
              },
              {
                part: "e",
                reasoning: "Evaluate with $e^2\\approx7.389$.",
                working: "V_x\\approx11.7",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a), (c) shown. (d) $V_y=\\pi$; $V_x$ is larger. (e) $11.7$.",
            commonErrors: [
              "Using $\\pi\\int(\\ln y)^2dy$ without the washer subtraction.",
              "Using $x$-limits for $V_y$.",
            ],
          },
        },
        {
          id: "aahl-u6-volumes-q16",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "The region bounded by $y=e^x$, the $x$-axis and the lines $x=0$ and $x=\\ln2$ is rotated through $2\\pi$ about the $x$-axis. Find the volume of the solid formed.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{\\pi}{2}(e^2-1)$" },
              { id: "b", text: "$\\frac{3\\pi}{2}$" },
              { id: "c", text: "$2\\pi$" },
              { id: "d", text: "$\\frac{\\pi}{2}$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Volume of revolution",
                statement: "$V=\\pi\\int_a^be^{2x}dx$",
              },
            ],
            steps: [
              {
                reasoning: "$y^2=e^{2x}$, so $V=\\pi\\int_0^{\\ln2}e^{2x}dx$.",
                working: "\\pi\\left[\\frac{e^{2x}}{2}\\right]_0^{\\ln2}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Evaluate: $e^{2\\ln2}=4$, so $V=\\frac\\pi2(4-1)=\\frac{3\\pi}{2}$.",
                working: "\\frac{3\\pi}{2}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** $\\frac{3\\pi}{2}$",
            commonErrors: [
              "Using $x$-limit $\\ln2$ incorrectly as $2$.",
              "Forgetting that $e^{2\\ln2}=4$, not $2$.",
            ],
          },
        },
      ],
    },
    {
      id: "aahl-u6-odes",
      title: "Differential equations and Euler's method",
      skill:
        "Solve separable, homogeneous and linear first-order equations, and approximate solutions with Euler's method.",
      lesson: {
        sections: [
          {
            heading: "Analytic methods",
            body: "Separable: separate the variables and integrate both sides, then use the initial condition to find the constant. Homogeneous: put $y=vx$, so $\\frac{dy}{dx}=v+x\\frac{dv}{dx}$, which turns the equation into a separable one in $v$ and $x$. Linear $\\frac{dy}{dx}+Py=Q$: multiply by $I=e^{\\int P\\,dx}$ so the left side becomes $\\frac{d}{dx}(Iy)$.",
          },
          {
            heading: "Euler's method",
            body: "Starting from $(x_0,y_0)$ with step $h$: $y_{n+1}=y_n+h\\,f(x_n,y_n)$. Each step follows the tangent line, so errors accumulate; smaller $h$ gives better accuracy. Carry full calculator accuracy between steps.",
          },
        ],
        keyFormulas: [
          {
            name: "Integrating factor",
            statement:
              "$\\dfrac{dy}{dx}+P(x)y=Q(x)\\ \\Rightarrow\\ I=e^{\\int P\\,dx},\\ Iy=\\int IQ\\,dx$",
          },
          { name: "Euler's method", statement: "$y_{n+1}=y_n+h\\,f(x_n,y_n)$" },
        ],
        workedExample: {
          problem: "Solve $\\frac{dy}{dx}=2xy$ with $y(0)=3$.",
          solution:
            "$\\int\\frac{dy}{y}=\\int2x\\,dx$ gives $\\ln|y|=x^2+c$, so $y=Ae^{x^2}$. With $y(0)=3$, $A=3$: $y=3e^{x^2}$.",
        },
      },
      questions: [
        {
          id: "aahl-u6-odes-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Find the general solution of $\\dfrac{dy}{dx}=2xy$, where $y>0$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$y=x^2y+A$" },
              { id: "b", text: "$y=A+x^2$" },
              { id: "c", text: "$y=Ae^{x^2}$" },
              { id: "d", text: "$y=Ae^{2x}$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Separation of variables",
                statement: "$\\int\\frac{1}{g(y)}dy=\\int f(x)dx$",
              },
            ],
            steps: [
              {
                reasoning: "Separate and integrate.",
                working:
                  "\\int\\frac{dy}{y}=\\int2x\\,dx\\Rightarrow\\ln y=x^2+c",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Exponentiate with $A=e^c$.",
                working: "y=Ae^{x^2}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** $y=Ae^{x^2}$",
            commonErrors: [
              "Integrating $2xy$ with respect to $x$ treating $y$ as constant.",
            ],
          },
        },
        {
          id: "aahl-u6-odes-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Given $\\dfrac{dy}{dx}=\\dfrac xy$ with $y>0$ and $y=2$ when $x=0$, find $y$ when $x=3$. Give your answer to 3 significant figures.",
          response: {
            type: "numeric",
            parts: [{ label: "$y(3)$", answer: 3.61, tolerance: 0.005 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Separation of variables",
                statement: "$\\int y\\,dy=\\int x\\,dx$",
              },
            ],
            steps: [
              {
                reasoning: "Separate and integrate.",
                working: "\\frac{y^2}{2}=\\frac{x^2}{2}+c",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Use $y(0)=2$: $c=2$, so $y^2=x^2+4$.",
                working: "y^2=x^2+4",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Substitute $x=3$, take the positive root.",
                working: "y=\\sqrt{13}\\approx3.61",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\sqrt{13}\\approx3.61$",
            commonErrors: [
              "Missing the constant, or finding $c$ as $4$ instead of $2$ before doubling.",
            ],
          },
        },
        {
          id: "aahl-u6-odes-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 5,
          stem: "Consider $\\dfrac{dy}{dx}=x+y$ with $y(0)=1$. (i) Use Euler's method with step $h=0.1$ to estimate $y(0.2)$. (ii) Solve the equation exactly using an integrating factor, and find the absolute error in your estimate, to 3 significant figures.",
          response: {
            type: "numeric",
            parts: [
              { label: "(i) estimate", answer: 1.22, tolerance: 0.005 },
              {
                label: "(ii) absolute error",
                answer: 0.0228,
                tolerance: 0.0005,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Euler's method",
                statement: "$y_{n+1}=y_n+hf(x_n,y_n)$",
              },
              {
                kind: "formula",
                name: "Integrating factor",
                statement: "$I=e^{\\int P\\,dx}$",
              },
            ],
            steps: [
              {
                reasoning: "First step from $(0,1)$.",
                working: "y_1=1+0.1(0+1)=1.1",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Second step from $(0.1,1.1)$.",
                working: "y_2=1.1+0.1(0.1+1.1)=1.22",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Rewrite as $\\frac{dy}{dx}-y=x$; $I=e^{-x}$ gives $\\frac{d}{dx}(ye^{-x})=xe^{-x}$.",
                working: "ye^{-x}=-xe^{-x}-e^{-x}+C",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Use $y(0)=1$: $1=-1+C$, so $C=2$.",
                working: "y=2e^x-x-1",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "$y(0.2)=2e^{0.2}-1.2\\approx1.24281$, so the error is about $0.0228$.",
                working: "1.24281-1.22\\approx0.0228",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(i) $1.22$. (ii) $y=2e^x-x-1$; error $\\approx0.0228$.",
            commonErrors: [
              "Using the new $y$ but old $x$ in the second step.",
              "Wrong sign in the integrating factor ($e^{x}$ instead of $e^{-x}$).",
            ],
          },
        },
        {
          id: "aahl-u6-odes-q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 12,
          stem: "Consider the differential equation $\\dfrac{dy}{dx}=\\dfrac{x^2+y^2}{2xy}$ for $x>0$, $y>0$.",
          parts: [
            {
              label: "a",
              prompt:
                "Using the substitution $y=vx$, show that $x\\dfrac{dv}{dx}=\\dfrac{1-v^2}{2v}$.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Hence show that the general solution can be written $x^2-y^2=Ax$, where $A$ is a constant.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Given that $y=\\sqrt2$ when $x=2$, find $y$ in terms of $x$.",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "Use Euler's method with one step of $h=0.5$ to estimate $y(2.5)$, and compare it with the exact value from (c), to 3 significant figures.",
              marks: 3,
            },
            {
              label: "e",
              prompt:
                "Show that every solution curve crosses the $x$-axis at $x=A$ with a vertical tangent.",
              marks: 2,
            },
          ],
          response: {
            type: "numeric",
            parts: [
              {
                label: "(d) Euler estimate of $y(2.5)$",
                answer: 1.94,
                tolerance: 0.005,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Homogeneous equation",
                statement:
                  "Substitute $y=vx$, $\\frac{dy}{dx}=v+x\\frac{dv}{dx}$.",
              },
              {
                kind: "formula",
                name: "Euler's method",
                statement: "$y_{n+1}=y_n+hf(x_n,y_n)$",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Substitute $y=vx$ into the right-hand side, which simplifies to $\\frac{1+v^2}{2v}$.",
                working: "v+x\\frac{dv}{dx}=\\frac{1+v^2}{2v}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Rearrange.",
                working:
                  "x\\frac{dv}{dx}=\\frac{1+v^2-2v^2}{2v}=\\frac{1-v^2}{2v}\\ \\text{(AG)}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Separate and integrate.",
                working:
                  "\\int\\frac{2v}{1-v^2}dv=\\int\\frac{dx}{x}\\Rightarrow-\\ln|1-v^2|=\\ln x+c",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Rearrange to $1-v^2=\\frac Ax$.",
                working: "1-v^2=\\frac{A}{x}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Substitute $v=\\frac yx$ and multiply by $x^2$.",
                working: "x^2-y^2=Ax\\ \\text{(AG)}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Substitute $(2,\\sqrt2)$: $4-2=2A$.",
                working: "A=1",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Take the positive root.",
                working: "y=\\sqrt{x^2-x}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning:
                  "Gradient at $(2,\\sqrt2)$: $\\frac{4+2}{2\\cdot2\\cdot\\sqrt2}=\\frac{6}{4\\sqrt2}\\approx1.06066$.",
                working: "y_1=\\sqrt2+0.5(1.06066)",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Evaluate.",
                working: "y_1\\approx1.94",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning:
                  "Exact value $\\sqrt{6.25-2.5}=\\sqrt{3.75}\\approx1.94$ (1.9365); the Euler estimate $1.9445$ is slightly high.",
                working: "1.9445-1.9365\\approx0.008",
                marks: 1,
                markCode: "A",
              },
              {
                part: "e",
                reasoning:
                  "Setting $y=0$ in $x^2-y^2=Ax$ gives $x=A$ (for $x>0$).",
                working: "x^2=Ax",
                marks: 1,
                markCode: "M",
              },
              {
                part: "e",
                reasoning:
                  "As $y\\to0$ with $x\\to A\\neq0$ the numerator tends to $A^2$ while the denominator tends to $0$, so $\\frac{dy}{dx}\\to\\infty$: the tangent is vertical.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(c) $y=\\sqrt{x^2-x}$. (d) $1.94$ (exact $1.94$; difference about $0.008$). (e) shown.",
            commonErrors: [
              "Forgetting $v+x\\frac{dv}{dx}$ (omitting the $v$).",
              "Using $\\ln|1-v^2|=\\ln x$ without the sign change.",
            ],
            examinerNote:
              "Both values round to $1.94$; the difference is visible only at greater accuracy.",
          },
        },
        {
          id: "aahl-u6-odes-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Find the general solution of $\\dfrac{dy}{dx}=\\dfrac{y}{x}$, where $x>0$, $y>0$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$y=\\frac{A}{x}$" },
              { id: "b", text: "$y=x+A$" },
              { id: "c", text: "$y=Ax^2$" },
              { id: "d", text: "$y=Ax$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Separation of variables",
                statement: "$\\int\\frac{dy}{y}=\\int\\frac{dx}{x}$",
              },
            ],
            steps: [
              {
                reasoning: "Separate and integrate: $\\ln y=\\ln x+c$.",
                working: "\\ln y=\\ln x+c",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Exponentiate with $A=e^c$.",
                working: "y=Ax",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(d)** $y=Ax$",
            commonErrors: [
              "Integrating $\\frac yx$ with respect to $x$ treating $y$ as constant.",
              "Forgetting the constant of integration.",
            ],
          },
        },
        {
          id: "aahl-u6-odes-q6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Find the general solution of $\\dfrac{dy}{dx}=\\dfrac{x}{y}$, where $y>0$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$y=\\sqrt{c-x^2}$" },
              { id: "b", text: "$y=\\sqrt{x^2+c}$" },
              { id: "c", text: "$y=x^2+c$" },
              { id: "d", text: "$y=\\sqrt{x^2}+c$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Separation of variables",
                statement: "$y\\,dy=x\\,dx$",
              },
            ],
            steps: [
              {
                reasoning:
                  "Separate and integrate: $\\frac{y^2}{2}=\\frac{x^2}{2}+c$.",
                working: "y^2=x^2+2c",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Take the positive root and rename the constant.",
                working: "y=\\sqrt{x^2+c}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** $y=\\sqrt{x^2+c}$",
            commonErrors: [
              "Integrating $\\frac xy$ as $\\frac xy$ without separating.",
              "Keeping $y^2=x^2+c$ without the square root.",
            ],
          },
        },
        {
          id: "aahl-u6-odes-q7",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Given $\\dfrac{dy}{dx}=e^x$ with $y(0)=1$, find the value of $y$ when $x=1$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$e$" },
              { id: "b", text: "$2e$" },
              { id: "c", text: "$e^2$" },
              { id: "d", text: "$e+1$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Direct integration",
                statement: "$y=\\int e^x\\,dx+C=e^x+C$",
              },
            ],
            steps: [
              {
                reasoning: "Integrate both sides.",
                working: "y=e^x+C",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Use $y(0)=1$: $1=e^0+C$, so $C=0$ and $y=e^x$; hence $y(1)=e$.",
                working: "y(1)=e",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $e$",
            commonErrors: [
              "Forgetting the constant of integration.",
              "Evaluating $e^1$ as $1$.",
            ],
          },
        },
        {
          id: "aahl-u6-odes-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Given $\\dfrac{dy}{dx}=2y$ with $y(0)=3$, find $y$ when $x=1$. Give your answer to 3 significant figures.",
          response: {
            type: "numeric",
            parts: [{ label: "$y(1)$", answer: 22.2, tolerance: 0.05 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Separation of variables",
                statement: "$\\ln y=2x+c$",
              },
            ],
            steps: [
              {
                reasoning: "Separate and integrate.",
                working: "y=Ae^{2x}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Use $y(0)=3$: $A=3$.",
                working: "y=3e^{2x}",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Substitute $x=1$: $3e^2\\approx22.2$.",
                working: "3e^2\\approx22.17",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$3e^2\\approx22.2$",
            commonErrors: [
              "Writing $y=3e^{x}$ instead of $e^{2x}$.",
              "Forgetting to multiply by the initial value.",
            ],
          },
        },
        {
          id: "aahl-u6-odes-q9",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Find the general solution of $\\dfrac{dy}{dx}+y=e^{-x}$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$y=(x-C)e^{-x}$" },
              { id: "b", text: "$y=(x+C)e^{x}$" },
              { id: "c", text: "$y=xe^{-x}+C$" },
              { id: "d", text: "$y=(x+C)e^{-x}$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Integrating factor",
                statement: "$I=e^{\\int P\\,dx}=e^x$",
              },
            ],
            steps: [
              {
                reasoning:
                  "Multiply by $e^x$: $\\frac{d}{dx}(ye^x)=1$, so $ye^x=x+C$.",
                working: "ye^x=x+C",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Divide by $e^x$.",
                working: "y=(x+C)e^{-x}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(d)** $y=(x+C)e^{-x}$",
            commonErrors: [
              "Using $I=e^{-x}$ (wrong sign).",
              "Leaving $ye^x=x+C$ without dividing.",
            ],
          },
        },
        {
          id: "aahl-u6-odes-q10",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Given $\\dfrac{dy}{dx}+\\dfrac{y}{x}=1$ with $y(1)=2$, find $y$ when $x=2$. Enter the exact value.",
          response: {
            type: "numeric",
            parts: [{ label: "$y(2)$", answer: 1.75, tolerance: 0.0005 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Integrating factor",
                statement: "$I=e^{\\int\\frac1x dx}=x$",
              },
            ],
            steps: [
              {
                reasoning:
                  "Multiply by $x$: $\\frac{d}{dx}(xy)=x$, so $xy=\\frac{x^2}{2}+C$.",
                working: "y=\\frac{x}{2}+\\frac{C}{x}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Use $y(1)=2$: $\\frac12+C=2$, so $C=\\frac32$.",
                working: "C=\\frac32",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Evaluate at $x=2$: $1+\\frac34=\\frac74$.",
                working: "y(2)=\\frac74=1.75",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\frac74$",
            commonErrors: [
              "Using $I=\\frac1x$ instead of $x$.",
              "Forgetting that $P(x)=\\frac1x$ gives $\\int P=\\ln x$ and $I=x$.",
            ],
          },
        },
        {
          id: "aahl-u6-odes-q11",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Use Euler's method with step $h=0.5$, starting from $(0,1)$, to estimate $y(1)$ for the differential equation $\\dfrac{dy}{dx}=2x$.",
          response: {
            type: "numeric",
            parts: [
              { label: "$y(1)$ estimate", answer: 2.5, tolerance: 0.0005 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Euler's method",
                statement: "$y_{n+1}=y_n+h\\,f(x_n,y_n)$",
              },
            ],
            steps: [
              {
                reasoning: "First step: $y_1=1+0.5\\cdot f(0,1)=1+0.5\\cdot0$.",
                working: "y_1=1",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Second step from $(0.5,1)$: $y_2=1+0.5\\cdot f(0.5,1)=1+0.5\\cdot1$.",
                working: "y_2=1.5",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Third step from $(1,1.5)$: $y_3=1.5+0.5\\cdot2=2.5$.",
                working: "y_3=2.5",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$2.5$",
            commonErrors: [
              "Using $f(x,y)=2y$ instead of $2x$.",
              "Not updating $x$ between steps.",
            ],
          },
        },
        {
          id: "aahl-u6-odes-q12",
          difficulty: "core",
          paper: "2",
          totalMarks: 2,
          stem: "Which substitution reduces a differential equation of the form $\\dfrac{dy}{dx}=f\\left(\\dfrac{y}{x}\\right)$ to a separable equation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x=vy$" },
              { id: "b", text: "$y=vx$" },
              { id: "c", text: "$u=xy$" },
              { id: "d", text: "$u=y-x$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Homogeneous equation",
                statement: "Put $y=vx$, so $\\frac{dy}{dx}=v+x\\frac{dv}{dx}$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Only $y=vx$ makes the right-hand side a function of $v$ alone and produces a separable equation in $v$ and $x$.",
                working: "y=vx\\Rightarrow \\frac{dy}{dx}=v+x\\frac{dv}{dx}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Select the correct substitution.",
                working: "y=vx",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** $y=vx$",
            commonErrors: [
              "Choosing $u=y/x$ without remembering $\\frac{dy}{dx}=v+x\\frac{dv}{dx}$.",
            ],
          },
        },
        {
          id: "aahl-u6-odes-q13",
          difficulty: "core",
          paper: "2",
          totalMarks: 6,
          stem: "Consider $\\dfrac{dy}{dx}=\\dfrac{x}{y}$ with $y(1)=2$.",
          parts: [
            {
              label: "a",
              prompt:
                "By separating variables and integrating, show that $y^2-x^2=c$ for a constant $c$.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "Use the initial condition to find the equation of the solution curve.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Find $y$ when $x=3$, giving an exact value and a decimal to 3 significant figures.",
              marks: 1,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Separation of variables",
                statement: "$y\\,dy=x\\,dx$",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Separate the variables.",
                working: "y\\,dy=x\\,dx",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Integrate both sides.",
                working: "\\frac{y^2}{2}=\\frac{x^2}{2}+c",
                marks: 1,
                markCode: "A",
              },
              {
                part: "a",
                reasoning: "Multiply by $2$ and rename the constant.",
                working: "y^2-x^2=2c=c'\\ \\text{(AG)}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Substitute $(1,2)$: $4-1=c$.",
                working: "c=3",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "State the curve.",
                working: "y^2=x^2+3\\Rightarrow y=\\sqrt{x^2+3}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Evaluate at $x=3$: $y=\\sqrt{12}=2\\sqrt3\\approx3.46$.",
                working: "2\\sqrt3\\approx3.46",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(a)-(b) shown. (c) $y=2\\sqrt3\\approx3.46$.",
            commonErrors: [
              "Forgetting the factor of $2$ when doubling the constant.",
              "Taking the negative root for $y$.",
            ],
          },
        },
        {
          id: "aahl-u6-odes-q14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Consider the differential equation $\\dfrac{dy}{dx}+y=e^x$ with $y(0)=0$.",
          parts: [
            {
              label: "a",
              prompt: "Find the integrating factor $I$.",
              marks: 1,
            },
            {
              label: "b",
              prompt:
                "Show that $\\dfrac{d}{dx}(ye^x)=e^{2x}$ and hence find the general solution.",
              marks: 4,
            },
            {
              label: "c",
              prompt: "Use the initial condition to find $y$.",
              marks: 2,
            },
            {
              label: "d",
              prompt: "Hence write down $y(1)$ to 3 significant figures.",
              marks: 1,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Integrating factor",
                statement: "$I=e^{\\int P\\,dx}=e^x$",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$P(x)=1$, so $I=e^{\\int1\\,dx}$.",
                working: "I=e^x",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Multiply through by $I$: the left side becomes an exact derivative.",
                working: "\\frac{d}{dx}(ye^x)=e^x\\cdot e^x=e^{2x}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "State the result.",
                working: "\\text{(AG)}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Integrate both sides.",
                working: "ye^x=\\frac{e^{2x}}{2}+C",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Divide by $e^x$ for the general solution.",
                working: "y=\\frac{e^x}{2}+Ce^{-x}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Use $y(0)=0$: $0=\\frac12+C$.",
                working: "C=-\\frac12",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Write the particular solution.",
                working: "y=\\frac{e^x-e^{-x}}{2}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Evaluate at $x=1$: $\\sinh1\\approx1.18$.",
                working: "\\frac{e-e^{-1}}{2}\\approx1.18",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) $e^x$. (b)-(c) shown, $y=\\frac{e^x-e^{-x}}2$. (d) $1.18$.",
            commonErrors: [
              "Using $I=e^{-x}$.",
              "Forgetting to divide by $e^x$ at the end.",
            ],
          },
        },
        {
          id: "aahl-u6-odes-q15",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 5,
          stem: "Consider $\\dfrac{dy}{dx}=-y$ with $y(0)=1$.",
          parts: [
            {
              label: "i",
              prompt:
                "Use Euler's method with step $h=0.1$ to estimate $y(0.3)$.",
              marks: 2,
            },
            {
              label: "ii",
              prompt:
                "Solve the equation exactly and find the absolute error in the estimate, to 3 significant figures.",
              marks: 3,
            },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(i) estimate", answer: 0.729, tolerance: 0.0005 },
              {
                label: "(ii) absolute error",
                answer: 0.0118,
                tolerance: 0.0005,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Euler's method",
                statement: "$y_{n+1}=y_n+h\\,f(x_n,y_n)$",
              },
              {
                kind: "principle",
                name: "Separation of variables",
                statement: "$y=e^{-x}$ from $y(0)=1$.",
              },
            ],
            steps: [
              {
                part: "i",
                reasoning: "Three steps of $h=0.1$: $y_1=1-0.1=0.9$.",
                working: "y_1=0.9",
                marks: 1,
                markCode: "M",
              },
              {
                part: "i",
                reasoning:
                  "Continue: $y_2=0.9-0.09=0.81$, $y_3=0.81-0.081=0.729$.",
                working: "y_3=0.729",
                marks: 1,
                markCode: "A",
              },
              {
                part: "ii",
                reasoning:
                  "Solve $\\frac{dy}{y}=-dx$: $y=Ae^{-x}$, and $y(0)=1$ gives $y=e^{-x}$.",
                working: "y=e^{-x}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "ii",
                reasoning: "Exact value at $0.3$: $e^{-0.3}\\approx0.74082$.",
                working: "e^{-0.3}\\approx0.7408",
                marks: 1,
                markCode: "A",
              },
              {
                part: "ii",
                reasoning: "Error: $|0.7408-0.729|\\approx0.0118$.",
                working: "0.0118",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(i) $0.729$. (ii) $y=e^{-x}$; error $\\approx0.0118$.",
            commonErrors: [
              "Using $f(x,y)=y$ instead of $-y$.",
              "Stopping Euler after two steps instead of three.",
            ],
          },
        },
        {
          id: "aahl-u6-odes-q16",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 12,
          stem: "Consider the differential equation $\\dfrac{dy}{dx}=\\dfrac{x^2+y^2}{xy}$ for $x>0$, $y>0$.",
          parts: [
            {
              label: "a",
              prompt:
                "Using the substitution $y=vx$, show that $x\\dfrac{dv}{dx}=\\dfrac{1}{v}$.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "By separating variables and integrating, show that $y^2=x^2(2\\ln x+A)$ for a constant $A$.",
              marks: 4,
            },
            {
              label: "c",
              prompt:
                "Given that $y=1$ when $x=1$, find the equation of the solution curve and state the domain on which $y$ is real.",
              marks: 2,
            },
            {
              label: "d",
              prompt: "Find $y$ when $x=2$, to 3 significant figures.",
              marks: 1,
            },
            {
              label: "e",
              prompt:
                "Show that the solution curve has a vertical tangent where it meets the $x$-axis.",
              marks: 2,
            },
          ],
          response: {
            type: "numeric",
            parts: [{ label: "(d) $y(2)$", answer: 3.09, tolerance: 0.005 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Homogeneous equation",
                statement:
                  "Substitute $y=vx$, $\\frac{dy}{dx}=v+x\\frac{dv}{dx}$.",
              },
              {
                kind: "property",
                name: "Vertical tangent",
                statement:
                  "$\\frac{dy}{dx}\\to\\infty$ as $y\\to0$ with $x\\neq0$.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Substitute $y=vx$: the right side becomes $\\frac{x^2+v^2x^2}{x\\cdot vx}=\\frac{1+v^2}{v}$.",
                working: "v+x\\frac{dv}{dx}=\\frac{1+v^2}{v}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Subtract $v$.",
                working: "x\\frac{dv}{dx}=\\frac{1+v^2-v^2}{v}=\\frac1v",
                marks: 1,
                markCode: "A",
              },
              {
                part: "a",
                reasoning: "State the result.",
                working: "x\\frac{dv}{dx}=\\frac1v\\ \\text{(AG)}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Separate: $v\\,dv=\\frac{dx}{x}$ and integrate.",
                working: "\\frac{v^2}{2}=\\ln x+c",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Substitute $v=\\frac yx$ and multiply by $2x^2$.",
                working: "y^2=2x^2\\ln x+2cx^2",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Rename $2c=A$.",
                working: "y^2=x^2(2\\ln x+A)\\ \\text{(AG)}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "State the general solution.",
                working: "y=\\pm x\\sqrt{2\\ln x+A}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Substitute $(1,1)$: $1=0+A$.",
                working: "A=1",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "State curve and domain: $y=x\\sqrt{2\\ln x+1}$ for $x\\ge e^{-1/2}$.",
                working: "y=x\\sqrt{2\\ln x+1},\\ x\\ge e^{-1/2}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Evaluate at $x=2$: $y=2\\sqrt{2\\ln2+1}$.",
                working: "2\\sqrt{2.3863}\\approx3.09",
                marks: 1,
                markCode: "A",
              },
              {
                part: "e",
                reasoning:
                  "The curve meets the $x$-axis when $y=0$, i.e. $x=e^{-1/2}\\neq0$.",
                working: "x=e^{-1/2}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "e",
                reasoning:
                  "As $y\\to0$, $\\frac{dy}{dx}=\\frac{x^2+y^2}{xy}\\to\\infty$ since the numerator tends to $e^{-1}$ and the denominator to $0$: vertical tangent.",
                working: "\\frac{dy}{dx}\\to\\infty",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a)-(b) shown. (c) $y=x\\sqrt{2\\ln x+1}$, $x\\ge e^{-1/2}$. (d) $3.09$. (e) shown.",
            commonErrors: [
              "Forgetting the $v$ term when substituting $y=vx$.",
              "Writing $\\frac{v^2}{2}=\\ln x$ without the constant.",
            ],
          },
        },
      ],
    },
  ],
};
