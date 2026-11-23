import type { Lesson } from "../../../types.ts";

export const lesson71: Lesson = {
  id: "m8-u7-lesson-7-1",
  code: "7-1",
  title: "Slope and Linear Functions",
  goal: "I CAN calculate slope from graphs, tables, and equations, and interpret slope in real-world contexts.",
  standards: [
    "8.EE.B.5",
    "8.EE.B.6",
    "8.F.A.1",
    "8.F.A.2",
    "8.F.A.3",
    "8.F.B.4",
    "8.F.B.5",
  ],
  vocabulary: [
    {
      term: "Slope",
      definition: "The rate of change of a linear function; rise over run.",
    },
    {
      term: "Linear function",
      definition: "A function whose graph is a straight line, $y = mx + b$.",
    },
    {
      term: "Rate of change",
      definition: "How quickly one quantity changes relative to another.",
    },
    {
      term: "Slope-intercept form",
      definition: "$y = mx + b$ where $m$ is slope and $b$ is y-intercept.",
    },
    { term: "Point-slope form", definition: "$y - y_1 = m(x - x_1)$." },
    {
      term: "Parallel lines",
      definition: "Lines with the same slope that never intersect.",
    },
  ],
  concepts: [
    {
      id: "m8-u7-slope-calculation",
      title: "Calculating slope",
      skill: "Calculate slope from graphs, tables, and coordinate points.",
      lesson: {
        sections: [
          {
            heading: "Slope formula",
            body: "Slope = $\\frac{\\text{rise}}{\\text{run}} = \\frac{y_2 - y_1}{x_2 - x_1}$. For points $(1, 2)$ and $(4, 8)$: slope = $\\frac{8 - 2}{4 - 1} = \\frac{6}{3} = 2$.",
          },
          {
            heading: "From tables",
            body: "For table values $(x, y)$: $(1, 3), (2, 5), (3, 7)$: slope = $\\frac{5 - 3}{2 - 1} = 2$. Consistent slope confirms linear relationship.",
          },
          {
            heading: "From graphs",
            body: "Count rise and run between two points. From $(0, 1)$ to $(3, 7)$: rise = $6$, run = $3$, slope = $2$.",
          },
        ],
        keyFormulas: [
          {
            name: "Slope formula",
            statement: "$m = \\frac{y_2 - y_1}{x_2 - x_1}$",
          },
          {
            name: "Rise/run",
            statement: "Vertical change / horizontal change",
          },
          { name: "Linear test", statement: "Constant slope = linear" },
        ],
        workedExample: {
          problem: "Find slope through $(2, 5)$ and $(6, 13)$.",
          solution: "$m = \\frac{13 - 5}{6 - 2} = \\frac{8}{4} = 2$.",
        },
      },
      questions: [
        {
          id: "m8-u7-slope-calculation-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the slope of the line through $(1, 2)$ and $(3, 6)$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$2$" },
              { id: "b", text: "$4$" },
              { id: "c", text: "$\\frac{1}{2}$" },
              { id: "d", text: "$8$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Slope formula",
                statement: "$m = \\frac{\\Delta y}{\\Delta x}$",
              },
            ],
            steps: [
              {
                reasoning: "$m = \\frac{6 - 2}{3 - 1} = \\frac{4}{2} = 2$.",
                evidence: "2",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** $2$",
            commonErrors: ["Dividing wrong quantities."],
          },
        },
        {
          id: "m8-u7-slope-calculation-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the slope of the line through $(-2, 3)$ and $(2, -1)$.",
          response: {
            type: "numeric",
            parts: [{ label: "Slope", answer: -1 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Slope formula",
                statement: "$m = \\frac{\\Delta y}{\\Delta x}$",
              },
            ],
            steps: [
              {
                reasoning:
                  "$m = \\frac{-1 - 3}{2 - (-2)} = \\frac{-4}{4} = -1$.",
                working: "-1",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State answer.",
                working: "-1",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$-1$",
            commonErrors: ["Not handling negative values."],
          },
        },
        {
          id: "m8-u7-slope-calculation-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find the slope for each pair of points.",
          parts: [
            { label: "a", prompt: "$(0, 1)$ and $(2, 5)$", marks: 1 },
            { label: "b", prompt: "$(1, 4)$ and $(4, 10)$", marks: 1 },
            { label: "c", prompt: "$(3, -2)$ and $(5, 0)$", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Slope formula",
                statement: "$m = \\frac{\\Delta y}{\\Delta x}$",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$m = \\frac{5 - 1}{2 - 0} = 2$.",
                evidence: "2",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$m = \\frac{10 - 4}{4 - 1} = 2$.",
                evidence: "2",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "$m = \\frac{0 - (-2)}{5 - 3} = 1$.",
                evidence: "1",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) $2$ (b) $2$ (c) $1$",
            commonErrors: ["In (c), not handling negative y-value."],
          },
        },
        {
          id: "m8-u7-slope-calculation-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Find the slope for each pair of points.",
          parts: [
            { label: "a", prompt: "$(1, 3)$ and $(4, 9)$", marks: 2 },
            { label: "b", prompt: "$(0, 5)$ and $(3, -1)$", marks: 2 },
            { label: "c", prompt: "$(2, -3)$ and $(6, 1)$", marks: 2 },
            { label: "d", prompt: "$(5, 2)$ and $(5, 7)$", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Slope formula",
                statement: "$m = \\frac{\\Delta y}{\\Delta x}$",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$m = \\frac{9 - 3}{4 - 1} = 2$.",
                working: "2",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$m = \\frac{-1 - 5}{3 - 0} = -2$.",
                working: "-2",
                marks: 2,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "$m = \\frac{1 - (-3)}{6 - 2} = 1$.",
                working: "1",
                marks: 2,
                markCode: "M",
              },
              {
                part: "d",
                reasoning:
                  "Same $x$-coordinate → undefined slope (vertical line).",
                working: "undefined",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer:
              "(a) $2$ (b) $-2$ (c) $1$ (d) Undefined (vertical line)",
            commonErrors: ["In (d), not recognizing vertical line."],
          },
        },
      ],
    },
    {
      id: "m8-u7-linear-forms",
      title: "Linear function forms",
      skill: "Write linear equations in slope-intercept and point-slope forms.",
      lesson: {
        sections: [
          {
            heading: "Slope-intercept form",
            body: "$y = mx + b$ where $m$ = slope, $b$ = y-intercept. Given slope $2$ and intercept $3$: $y = 2x + 3$.",
          },
          {
            heading: "Point-slope form",
            body: "$y - y_1 = m(x - x_1)$. Given point $(2, 5)$ and slope $3$: $y - 5 = 3(x - 2)$ → $y = 3x - 1$.",
          },
          {
            heading: "Standard form",
            body: "$Ax + By = C$ where $A, B, C$ are integers. Convert $y = 2x + 3$: $2x - y = -3$.",
          },
        ],
        keyFormulas: [
          { name: "Slope-intercept", statement: "$y = mx + b$" },
          { name: "Point-slope", statement: "$y - y_1 = m(x - x_1)$" },
          { name: "Standard", statement: "$Ax + By = C$" },
        ],
        workedExample: {
          problem: "Write equation for line with slope $-2$ through $(1, 4)$.",
          solution: "Point-slope: $y - 4 = -2(x - 1)$ → $y = -2x + 6$.",
        },
      },
      questions: [
        {
          id: "m8-u7-linear-forms-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Write the equation of a line with slope $3$ and y-intercept $-2$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$y = 3x - 2$" },
              { id: "b", text: "$y = -2x + 3$" },
              { id: "c", text: "$y = 3x + 2$" },
              { id: "d", text: "$y = -3x - 2$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Slope-intercept",
                statement: "$y = mx + b$",
              },
            ],
            steps: [
              {
                reasoning: "$m = 3$, $b = -2$ → $y = 3x - 2$.",
                evidence: "y=3x-2",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** $y = 3x - 2$",
            commonErrors: ["Reversing slope and intercept."],
          },
        },
        {
          id: "m8-u7-linear-forms-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Write the equation of a line with slope $2$ through $(3, 7)$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Point-slope",
                statement: "$y - y_1 = m(x - x_1)$",
              },
            ],
            steps: [
              {
                reasoning: "$y - 7 = 2(x - 3)$ → $y = 2x - 6 + 7 = 2x + 1$.",
                working: "y = 2x + 1",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State equation.",
                working: "y = 2x + 1",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$y = 2x + 1$",
            commonErrors: ["Arithmetic error in simplification."],
          },
        },
        {
          id: "m8-u7-linear-forms-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write equations for each line.",
          parts: [
            { label: "a", prompt: "Slope $-1$, intercept $4$", marks: 1 },
            {
              label: "b",
              prompt: "Slope $\\frac{1}{2}$, through $(2, 3)$",
              marks: 1,
            },
            { label: "c", prompt: "Through $(0, 5)$ and $(2, 9)$", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Slope-intercept",
                statement: "$y = mx + b$",
              },
              {
                kind: "formula",
                name: "Point-slope",
                statement: "$y - y_1 = m(x - x_1)$",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$y = -x + 4$.",
                evidence: "y=-x+4",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "$y - 3 = \\frac{1}{2}(x - 2)$ → $y = \\frac{1}{2}x + 2$.",
                evidence: "y=x/2+2",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Slope = $\\frac{9-5}{2-0} = 2$; $y = 2x + 5$.",
                evidence: "y=2x+5",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "(a) $y = -x + 4$ (b) $y = \\frac{1}{2}x + 2$ (c) $y = 2x + 5$",
            commonErrors: ["In (c), not finding slope first."],
          },
        },
        {
          id: "m8-u7-linear-forms-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Write equations for each line.",
          parts: [
            {
              label: "a",
              prompt: "Slope $\\frac{3}{4}$, intercept $-1$",
              marks: 2,
            },
            { label: "b", prompt: "Slope $-2$, through $(4, 1)$", marks: 2 },
            { label: "c", prompt: "Through $(1, 2)$ and $(3, 8)$", marks: 2 },
            {
              label: "d",
              prompt: "Convert $2x + 3y = 6$ to slope-intercept form",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Slope-intercept",
                statement: "$y = mx + b$",
              },
              {
                kind: "formula",
                name: "Point-slope",
                statement: "$y - y_1 = m(x - x_1)$",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$y = \\frac{3}{4}x - 1$.",
                evidence: "y=3x/4-1",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$y - 1 = -2(x - 4)$ → $y = -2x + 9$.",
                evidence: "y=-2x+9",
                marks: 2,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Slope = $\\frac{8-2}{3-1} = 3$; $y = 3x - 1$.",
                evidence: "y=3x-1",
                marks: 2,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "$3y = -2x + 6$ → $y = -\\frac{2}{3}x + 2$.",
                evidence: "y=-2x/3+2",
                marks: 2,
                markCode: "M",
              },
            ],
            finalAnswer:
              "(a) $y = \\frac{3}{4}x - 1$ (b) $y = -2x + 9$ (c) $y = 3x - 1$ (d) $y = -\\frac{2}{3}x + 2$",
            commonErrors: ["In (d), not isolating y correctly."],
          },
        },
      ],
    },
    {
      id: "m8-u7-slope-interpretation",
      title: "Interpreting slope in context",
      skill: "Interpret slope and intercept in real-world linear models.",
      lesson: {
        sections: [
          {
            heading: "Slope as rate",
            body: "Slope represents rate of change. For $C = 0.15t + 20$ (cost per text + monthly fee): slope $0.15$ = cost per text; intercept $20$ = monthly fee.",
          },
          {
            heading: "Positive vs negative slope",
            body: "Positive slope = increasing (costs rise with usage). Negative slope = decreasing (value drops over time). Zero slope = constant (no change). Undefined slope = vertical line.",
          },
          {
            heading: "Units of slope",
            body: "Slope units = units of $y$ per unit of $x$. For distance vs time: miles per hour. For cost vs quantity: dollars per item.",
          },
        ],
        keyFormulas: [
          {
            name: "Slope = rate",
            statement: "Change in y per unit change in x",
          },
          { name: "Intercept", statement: "Value when x = 0" },
          { name: "Units", statement: "y-units per x-unit" },
        ],
        workedExample: {
          problem: "Interpret $y = -3x + 50$ for a phone battery.",
          solution:
            "Slope $-3$ = battery drains 3% per hour; intercept $50$ = starts at 50%.",
        },
      },
      questions: [
        {
          id: "m8-u7-slope-interpretation-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In $C = 0.10t + 15$, what does the slope represent?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Cost per text" },
              { id: "b", text: "Monthly fee" },
              { id: "c", text: "Total cost" },
              { id: "d", text: "Number of texts" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Slope",
                statement: "Rate of change.",
              },
            ],
            steps: [
              {
                reasoning: "Slope $0.10$ = cost per text (rate).",
                evidence: "cost per text",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** Cost per text",
            commonErrors: ["Confusing slope with intercept."],
          },
        },
        {
          id: "m8-u7-slope-interpretation-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A car's fuel tank has $g = -0.05m + 12$ gallons after $m$ miles. Interpret slope and intercept.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Slope/Intercept",
                statement: "Rate and initial value.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Slope $-0.05$ = fuel consumption rate (0.05 gallons per mile).",
                evidence: "-0.05",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Intercept $12$ = initial fuel (12 gallons).",
                evidence: "12",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer:
              "Slope = fuel consumption rate; intercept = initial fuel",
            commonErrors: ["Not interpreting negative slope."],
          },
        },
        {
          id: "m8-u7-slope-interpretation-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Interpret each linear model.",
          parts: [
            {
              label: "a",
              prompt: "$y = 2x + 5$ (y = total cost, x = items)",
              marks: 1,
            },
            {
              label: "b",
              prompt: "$y = -4x + 20$ (y = battery %, x = hours)",
              marks: 1,
            },
            {
              label: "c",
              prompt: "$y = 0.5x$ (y = distance, x = time)",
              marks: 1,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Slope/Intercept",
                statement: "Rate and initial value.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Slope $2$ = cost per item; intercept $5$ = fixed fee.",
                evidence: "2, 5",
                marks: 1,
                markCode: "B",
              },
              {
                part: "b",
                reasoning:
                  "Slope $-4$ = drains 4% per hour; intercept $20$ = starts at 20%.",
                evidence: "-4, 20",
                marks: 1,
                markCode: "B",
              },
              {
                part: "c",
                reasoning:
                  "Slope $0.5$ = speed (0.5 units per time); intercept $0$ = starts at 0.",
                evidence: "0.5, 0",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer:
              "(a) Rate $2$, initial $5$ (b) Rate $-4$, initial $20$ (c) Rate $0.5$, initial $0$",
            commonErrors: ["Not interpreting units."],
          },
        },
        {
          id: "m8-u7-slope-interpretation-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Interpret each linear model and answer questions.",
          parts: [
            {
              label: "a",
              prompt: "$y = 3x + 10$: What does slope represent?",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "$y = -2x + 50$: Is the quantity increasing or decreasing?",
              marks: 2,
            },
            {
              label: "c",
              prompt: "$y = 0x + 7$: What is the slope? What does it mean?",
              marks: 2,
            },
            {
              label: "d",
              prompt: "$y = \\frac{1}{4}x$: What is the rate of change?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Slope/Intercept",
                statement: "Rate and initial value.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Slope $3$ = rate of change (y increases by 3 per unit x).",
                evidence: "3",
                marks: 2,
                markCode: "B",
              },
              {
                part: "b",
                reasoning: "Negative slope → decreasing quantity.",
                evidence: "decreasing",
                marks: 2,
                markCode: "B",
              },
              {
                part: "c",
                reasoning: "Slope = $0$; quantity is constant at $7$.",
                evidence: "0",
                marks: 2,
                markCode: "B",
              },
              {
                part: "d",
                reasoning:
                  "Slope = $\\frac{1}{4}$ = rate of change (y increases by $0.25$ per unit x).",
                evidence: "0.25",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer:
              "(a) Rate $3$ (b) Decreasing (c) Slope $0$, constant (d) Rate $0.25$",
            commonErrors: ["In (c), not recognizing zero slope."],
          },
        },
      ],
    },
    {
      id: "m8-u7-parallel-perpendicular",
      title: "Parallel and perpendicular lines",
      skill: "Identify parallel and perpendicular lines by their slopes.",
      lesson: {
        sections: [
          {
            heading: "Parallel lines",
            body: "Parallel lines have the **same slope** but different y-intercepts. They never intersect. Example: $y = 2x + 1$ and $y = 2x - 3$ are parallel.",
          },
          {
            heading: "Perpendicular lines",
            body: "Perpendicular lines have **slopes that are negative reciprocals**: if one has slope $m$, the other has slope $-\\frac{1}{m}$. Product of slopes = $-1$. Example: $y = 2x$ and $y = -\\frac{1}{2}x$ are perpendicular.",
          },
          {
            heading: "Applications",
            body: "Parallel: train tracks, highway lanes. Perpendicular: walls meeting floors, axes of graphs. Understanding slope relationships helps in geometry and real-world design.",
          },
        ],
        keyFormulas: [
          { name: "Parallel", statement: "Same slope, different intercept" },
          {
            name: "Perpendicular",
            statement: "Slopes are negative reciprocals",
          },
          { name: "Product", statement: "$m_1 \\times m_2 = -1$" },
        ],
        workedExample: {
          problem:
            "Are $y = 3x + 1$ and $y = -\\frac{1}{3}x + 5$ perpendicular?",
          solution:
            "Slopes: $3$ and $-\\frac{1}{3}$; product = $3 \\times (-\\frac{1}{3}) = -1$ → yes, perpendicular.",
        },
      },
      questions: [
        {
          id: "m8-u7-parallel-perpendicular-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which pair of lines are parallel?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$y = 2x + 1$ and $y = 2x - 3$" },
              { id: "b", text: "$y = 2x + 1$ and $y = -2x + 1$" },
              { id: "c", text: "$y = 2x + 1$ and $y = \\frac{1}{2}x + 1$" },
              { id: "d", text: "$y = 2x + 1$ and $y = x + 1$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Parallel",
                statement: "Same slope.",
              },
            ],
            steps: [
              {
                reasoning: "Both have slope $2$ → parallel.",
                evidence: "parallel",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** $y = 2x + 1$ and $y = 2x - 3$",
            commonErrors: ["Not checking slopes."],
          },
        },
        {
          id: "m8-u7-parallel-perpendicular-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Are $y = 4x$ and $y = -\\frac{1}{4}x$ perpendicular?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Yes" },
              { id: "b", text: "No" },
              { id: "c", text: "Cannot determine" },
              { id: "d", text: "They are parallel" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Perpendicular",
                statement: "Slopes are negative reciprocals.",
              },
            ],
            steps: [
              {
                reasoning: "$4 \\times (-\\frac{1}{4}) = -1$ → perpendicular.",
                evidence: "yes",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** Yes",
            commonErrors: ["Not checking product of slopes."],
          },
        },
        {
          id: "m8-u7-parallel-perpendicular-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Determine if each pair is parallel, perpendicular, or neither.",
          parts: [
            { label: "a", prompt: "$y = 5x$ and $y = 5x + 2$", marks: 1 },
            {
              label: "b",
              prompt: "$y = \\frac{2}{3}x$ and $y = -\\frac{3}{2}x$",
              marks: 1,
            },
            { label: "c", prompt: "$y = x + 1$ and $y = 2x + 1$", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Parallel/Perpendicular",
                statement: "Slope relationships.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Same slope $5$ → parallel.",
                evidence: "parallel",
                marks: 1,
                markCode: "B",
              },
              {
                part: "b",
                reasoning:
                  "Slopes $\\frac{2}{3}$ and $-\\frac{3}{2}$; product = $-1$ → perpendicular.",
                evidence: "perpendicular",
                marks: 1,
                markCode: "B",
              },
              {
                part: "c",
                reasoning: "Different slopes ($1$ vs $2$) → neither.",
                evidence: "neither",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "(a) Parallel (b) Perpendicular (c) Neither",
            commonErrors: ["In (b), not recognizing negative reciprocal."],
          },
        },
        {
          id: "m8-u7-parallel-perpendicular-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Determine if each pair is parallel, perpendicular, or neither.",
          parts: [
            { label: "a", prompt: "$y = -3x + 2$ and $y = -3x - 5$", marks: 2 },
            {
              label: "b",
              prompt: "$y = \\frac{1}{5}x$ and $y = -5x$",
              marks: 2,
            },
            { label: "c", prompt: "$y = 2x + 1$ and $y = 2x + 1$", marks: 2 },
            {
              label: "d",
              prompt:
                "Find slope of line perpendicular to $y = \\frac{2}{3}x + 4$",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Parallel/Perpendicular",
                statement: "Slope relationships.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Same slope $-3$ → parallel.",
                evidence: "parallel",
                marks: 2,
                markCode: "B",
              },
              {
                part: "b",
                reasoning:
                  "Slopes $\\frac{1}{5}$ and $-5$; product = $-1$ → perpendicular.",
                evidence: "perpendicular",
                marks: 2,
                markCode: "B",
              },
              {
                part: "c",
                reasoning: "Same equation → same line (not just parallel).",
                evidence: "same line",
                marks: 2,
                markCode: "B",
              },
              {
                part: "d",
                reasoning:
                  "Negative reciprocal of $\\frac{2}{3}$ is $-\\frac{3}{2}$.",
                evidence: "-3/2",
                marks: 2,
                markCode: "M",
              },
            ],
            finalAnswer:
              "(a) Parallel (b) Perpendicular (c) Same line (d) $-\\frac{3}{2}$",
            commonErrors: [
              "In (c), not distinguishing same line from parallel.",
            ],
          },
        },
      ],
    },
  ],
};
