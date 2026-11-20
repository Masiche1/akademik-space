import type { Lesson } from "../../../types.ts";

export const lesson102: Lesson = {
  id: "cilm-u10-lesson-10-2",
  code: "10-2",
  title: "Stage 8 Checkpoint — Algebra and Graphs",
  goal: "I CAN solve equations, work with sequences and interpret graphs at Stage 8 checkpoint standard.",
  standards: [
    "Cambridge Lower Secondary Checkpoint Stage 8: algebra and graphs",
  ],
  stage: 8,
  vocabulary: [
    { term: "Variable", definition: "Symbol representing an unknown value." },
    {
      term: "Linear equation",
      definition: "Equation with variables to power 1.",
    },
    {
      term: "Sequence",
      definition: "Ordered list of numbers following a rule.",
    },
    { term: "Gradient", definition: "Steepness of a line — rise over run." },
    { term: "Intercept", definition: "Where a line crosses an axis." },
  ],
  concepts: [
    {
      id: "cilm-u10-s8-algebra",
      title: "Stage 8 algebra checkpoint",
      skill: "Solve equations and evaluate expressions.",
      lesson: {
        sections: [
          {
            heading: "Algebra skills",
            body: "Expand brackets, collect like terms, solve linear equations by inverse operations, substitute into formulae, and find terms of sequences.",
          },
        ],
        keyFormulas: [
          {
            name: "Linear equation",
            statement: "$ax + b = c \\Rightarrow x = (c-b)/a$",
          },
          { name: "Sequence nth term", statement: "$a_n = a_1 + (n-1)d$" },
        ],
        workedExample: {
          problem:
            "Solve $3x + 7 = 22$ and find the 10th term of 5, 9, 13, ...",
          solution:
            "$3x = 15 \\Rightarrow x = 5$. Common difference 4: $a_{10} = 5 + 9 \\times 4 = 41$.",
        },
      },
      questions: [
        {
          id: "cilm-u10-s8-a-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Solve $2x - 5 = 11$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x = 8$" },
              { id: "b", text: "$x = 3$" },
              { id: "c", text: "$x = 16$" },
              { id: "d", text: "$x = 6$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Solve",
                statement: "Inverse operations isolate x.",
              },
            ],
            steps: [
              {
                reasoning: "$2x = 16 \\Rightarrow x = 8$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$x = 8$",
          },
        },
        {
          id: "cilm-u10-s8-a-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Simplify $4a + 3b - 2a + b$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Collect terms",
                statement: "Combine like terms.",
              },
            ],
            steps: [
              {
                reasoning: "$4a - 2a = 2a$; $3b + b = 4b$; result $2a + 4b$.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "$2a + 4b$",
          },
        },
        {
          id: "cilm-u10-s8-a-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find the nth term of 7, 11, 15, 19, ...",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "nth term",
                statement: "Common difference $d = 4$; first term 7.",
              },
            ],
            steps: [
              { reasoning: "$d = 11 - 7 = 4$.", marks: 1, markCode: "M" },
              {
                reasoning: "$a_n = 7 + (n-1)4 = 4n + 3$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$4n + 3$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$4n + 3$",
          },
        },
        {
          id: "cilm-u10-s8-a-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "The perimeter of a rectangle is 30 cm and its length is twice its width. Find the dimensions.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Form equation",
                statement: "Perimeter $= 2(l+w)$; $l = 2w$.",
              },
            ],
            steps: [
              {
                reasoning: "$2(2w + w) = 30$ → $6w = 30$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$w = 5$ cm.", marks: 1, markCode: "M" },
              { reasoning: "$l = 10$ cm.", marks: 1, markCode: "A" },
              { reasoning: "Check: $2(10+5) = 30$.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "$10 \\times 5$ cm",
          },
        },
      ],
    },
    {
      id: "cilm-u10-s8-graphs",
      title: "Stage 8 graphs checkpoint",
      skill: "Read gradients, intercepts and interpret linear graphs.",
      lesson: {
        sections: [
          {
            heading: "Graphs",
            body: "Cartesian coordinates, plotting points, gradient $= \\frac{\\text{rise}}{\\text{run}}$, y-intercept, equation of a line $y = mx + c$.",
          },
        ],
        keyFormulas: [
          { name: "Gradient", statement: "$m = \\frac{y_2 - y_1}{x_2 - x_1}$" },
          { name: "Line equation", statement: "$y = mx + c$" },
        ],
        workedExample: {
          problem:
            "Find gradient and equation of line through (0, 2) and (4, 10).",
          solution: "$m = (10-2)/(4-0) = 2$; $c = 2$; equation $y = 2x + 2$.",
        },
      },
      questions: [
        {
          id: "cilm-u10-s8-g-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the gradient of the line through (1, 3) and (3, 7)?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "2" },
              { id: "b", text: "4" },
              { id: "c", text: "1/2" },
              { id: "d", text: "10" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Gradient",
                statement: "$m = \\Delta y / \\Delta x$.",
              },
            ],
            steps: [
              {
                reasoning: "$m = (7-3)/(3-1) = 4/2 = 2$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "2",
          },
        },
        {
          id: "cilm-u10-s8-g-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A line has equation $y = 3x - 4$. What is its gradient and y-intercept?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "y = mx + c",
                statement: "m = gradient, c = intercept.",
              },
            ],
            steps: [
              {
                reasoning: "Gradient $= 3$, intercept $= -4$.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "$m = 3$, $c = -4$",
          },
        },
        {
          id: "cilm-u10-s8-g-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Is the point (2, 5) on the line $y = 2x + 1$? Show working.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Test point",
                statement: "Substitute x and check y.",
              },
            ],
            steps: [
              {
                reasoning: "Substitute $x = 2$: $y = 2(2) + 1 = 5$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Matches given y = 5.", marks: 1, markCode: "M" },
              {
                reasoning: "Yes, the point is on the line.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Yes",
          },
        },
        {
          id: "cilm-u10-s8-g-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A taxi charges a $\\$3$ flagfall plus $\\$2$ per km. Write the equation and find cost for 8 km.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Linear model",
                statement: "$y = mx + c$: c = flagfall, m = rate.",
              },
            ],
            steps: [
              { reasoning: "$y = 2x + 3$.", marks: 1, markCode: "M" },
              {
                reasoning: "Substitute $x = 8$: $y = 2(8) + 3 = 19$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Cost $= \\$19$.", marks: 1, markCode: "A" },
              {
                reasoning: "Units and interpretation correct.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "$y = 2x + 3$; $\\$19$",
          },
        },
      ],
    },
    {
      id: "cilm-u10-s8-mx",
      title: "Stage 8 mixed checkpoint",
      skill: "Apply algebraic manipulation and graph skills together.",
      lesson: {
        sections: [
          {
            heading: "Mixed practice",
            body: "Checkpoint questions combine solving equations, substituting into formulae and reading gradients and intercepts from $y = mx + c$.",
          },
        ],
        keyFormulas: [
          {
            name: "Linear equation",
            statement:
              "$y = mx + c$ where $m$ is gradient and $c$ is $y$-intercept",
          },
          {
            name: "Gradient",
            statement:
              "$m = \\frac{\\text{rise}}{\\text{run}} = \\frac{y_2 - y_1}{x_2 - x_1}$",
          },
        ],
        workedExample: {
          problem:
            "Find the gradient of the line through $(1, 3)$ and $(5, 11)$.",
          solution: "$m = \\frac{11 - 3}{5 - 1} = \\frac{8}{4} = 2$.",
        },
      },
      questions: [
        {
          id: "cilm-u10-s8-mx-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Solve $3x + 6 = 21$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x = 3$" },
              { id: "b", text: "$x = 5$" },
              { id: "c", text: "$x = 9$" },
              { id: "d", text: "$x = 7$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Solve equation",
                statement: "Isolate the variable using inverse operations.",
              },
            ],
            steps: [
              { reasoning: "$3x = 15$, so $x = 5$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x = 5$",
          },
        },
        {
          id: "cilm-u10-s8-mx-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the gradient of the line through $(0, 2)$ and $(4, 10)$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Gradient",
                statement: "Gradient = change in $y$ over change in $x$.",
              },
            ],
            steps: [
              {
                reasoning: "$m = \\frac{10 - 2}{4 - 0} = \\frac{8}{4}$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$m = 2$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2",
          },
        },
        {
          id: "cilm-u10-s8-mx-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write down the equation of the line with gradient $3$ that passes through $(0, -1)$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "$y = mx + c$",
                statement: "$m$ is gradient, $c$ is $y$-intercept.",
              },
            ],
            steps: [
              {
                reasoning: "$m = 3$ and $c = -1$ from the point $(0, -1)$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Substitute: $y = 3x + (-1)$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$y = 3x - 1$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$y = 3x - 1$",
          },
        },
        {
          id: "cilm-u10-s8-mx-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Solve $2(x + 3) = 5x - 9$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Solve equation",
                statement: "Expand brackets, collect like terms, divide.",
              },
            ],
            steps: [
              {
                reasoning: "Expand: $2x + 6 = 5x - 9$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Collect terms: $15 = 3x$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Divide by 3: $x = 5$.", marks: 1, markCode: "M" },
              {
                reasoning:
                  "Check: $2(8) = 16$ and $5(5) - 9 = 16$. Answer $x = 5$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$x = 5$",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cilm-u10-stage8-algebra-graphs-notes",
      title: "Stage 8 algebra and graphs — revision notes",
      summary: "Solving equations, sequences, gradient and line equations.",
      sections: [
        {
          heading: "Algebra",
          body: "Inverse operations solve equations; nth term $= a + (n-1)d$; translate word problems into equations.",
        },
        {
          heading: "Graphs",
          body: "Gradient $= \\Delta y/\\Delta x$; $y = mx + c$; test points by substitution.",
        },
      ],
    },
  ],
};
