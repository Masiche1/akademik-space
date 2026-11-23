import type { Lesson } from "../../../types.ts";

export const lesson101: Lesson = {
  id: "m7-u10-lesson-10-1",
  code: "10-1",
  title: "Integrated Review: Rational Numbers and Expressions",
  goal: "I CAN integrate rational number operations, expressions, and equations to solve complex problems.",
  standards: [
    "7.NS.A.1",
    "7.NS.A.2",
    "7.EE.A.1",
    "7.EE.A.2",
    "7.EE.B.3",
    "7.EE.B.4",
    "7.EE.B.4a",
    "7.EE.B.4b",
  ],
  vocabulary: [
    {
      term: "Rational number",
      definition:
        "Any number that can be expressed as a fraction $\\frac{a}{b}$ where $b \\neq 0$.",
    },
    {
      term: "Expression",
      definition: "A mathematical phrase without an equals sign.",
    },
    {
      term: "Equation",
      definition: "A statement that two expressions are equal.",
    },
    { term: "Solution", definition: "The value that makes an equation true." },
    { term: "Like terms", definition: "Terms with the same variable part." },
    { term: "Distributive property", definition: "$a(b + c) = ab + ac$." },
  ],
  concepts: [
    {
      id: "m7-u10-rational-expressions",
      title: "Combining rational numbers and expressions",
      skill: "Apply rational number operations within algebraic expressions.",
      lesson: {
        sections: [
          {
            heading: "Rational coefficients",
            body: "Expressions can have rational coefficients: $\\frac{3}{4}x + \\frac{1}{2}$, $-\\frac{2}{3}x - \\frac{5}{6}$. To combine like terms with rational coefficients, find common denominators: $\\frac{3}{4}x + \\frac{1}{2}x = \\frac{5}{4}x$.",
          },
          {
            heading: "Distributive with fractions",
            body: "Distribute rational coefficients: $\\frac{1}{2}(4x + 6) = 2x + 3$; $\\frac{2}{3}(9x - 3) = 6x - 2$. For negative fractions: $-\\frac{1}{4}(8x + 4) = -2x - 1$.",
          },
          {
            heading: "Evaluating with rational values",
            body: "When evaluating expressions, substitute rational values carefully: $\\frac{2}{3}x - \\frac{1}{2}$ with $x = \\frac{3}{4}$ → $\\frac{2}{3} \\times \\frac{3}{4} - \\frac{1}{2} = \\frac{1}{2} - \\frac{1}{2} = 0$.",
          },
        ],
        keyFormulas: [
          {
            name: "Rational coefficients",
            statement: "Use common denominators to combine",
          },
          { name: "Distributive", statement: "$a(b + c) = ab + ac$" },
          { name: "Evaluate", statement: "Substitute and compute" },
        ],
        workedExample: {
          problem: "Simplify $\\frac{1}{2}(6x + 4) - \\frac{1}{3}x$.",
          solution:
            "$3x + 2 - \\frac{1}{3}x = \\frac{9}{3}x - \\frac{1}{3}x + 2 = \\frac{8}{3}x + 2$.",
        },
      },
      questions: [
        {
          id: "m7-u10-rational-expressions-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Simplify $\\frac{1}{2}x + \\frac{1}{4}x$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{3}{4}x$" },
              { id: "b", text: "$\\frac{1}{6}x$" },
              { id: "c", text: "$\\frac{2}{6}x$" },
              { id: "d", text: "$x$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Combining like terms",
                statement: "Use common denominators.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$\\frac{1}{2}x + \\frac{1}{4}x = \\frac{2}{4}x + \\frac{1}{4}x = \\frac{3}{4}x$.",
                working: "\\frac{3}{4}x",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** $\\frac{3}{4}x$",
            commonErrors: ["Adding numerators and denominators separately."],
          },
        },
        {
          id: "m7-u10-rational-expressions-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Simplify $\\frac{2}{3}(9x - 6)$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Distributive property",
                statement: "$a(b + c) = ab + ac$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$\\frac{2}{3} \\times 9x = 6x$; $\\frac{2}{3} \\times (-6) = -4$.",
                working: "6x - 4",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Result: $6x - 4$.",
                working: "6x - 4",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$6x - 4$",
            commonErrors: ["Distributing incorrectly to the negative term."],
          },
        },
        {
          id: "m7-u10-rational-expressions-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Evaluate $\\frac{3}{4}x - \\frac{1}{2}$ when $x = \\frac{4}{3}$.",
          response: {
            type: "numeric",
            parts: [{ label: "Value", answer: 0.5 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Evaluating expressions",
                statement: "Substitute rational values.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$\\frac{3}{4} \\times \\frac{4}{3} = \\frac{12}{12} = 1$; $1 - \\frac{1}{2} = \\frac{1}{2}$.",
                working: "\\frac{1}{2}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State answer.",
                working: "0.5",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Verify.",
                working: "\\frac{1}{2}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\frac{1}{2}$ or $0.5$",
            commonErrors: ["Arithmetic error in fraction multiplication."],
          },
        },
        {
          id: "m7-u10-rational-expressions-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Simplify each expression.",
          parts: [
            {
              label: "a",
              prompt: "$\\frac{1}{3}(12x + 9) - \\frac{1}{2}x$",
              marks: 2,
            },
            {
              label: "b",
              prompt: "$\\frac{2}{5}(10x - 15) + \\frac{1}{4}x$",
              marks: 2,
            },
            { label: "c", prompt: "$-\\frac{1}{2}(8x - 6) + 3x$", marks: 2 },
            {
              label: "d",
              prompt:
                "Evaluate $\\frac{5}{6}x + \\frac{1}{3}$ when $x = \\frac{6}{5}$",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Distributive property",
                statement: "$a(b + c) = ab + ac$.",
              },
              {
                kind: "skill",
                name: "Combining like terms",
                statement: "Use common denominators.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "$4x + 3 - \\frac{1}{2}x = \\frac{8}{2}x - \\frac{1}{2}x + 3 = \\frac{7}{2}x + 3$.",
                working: "\\frac{7}{2}x + 3",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "$4x - 6 + \\frac{1}{4}x = \\frac{16}{4}x + \\frac{1}{4}x - 6 = \\frac{17}{4}x - 6$.",
                working: "\\frac{17}{4}x - 6",
                marks: 2,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "$-4x + 3 + 3x = -x + 3$.",
                working: "-x + 3",
                marks: 2,
                markCode: "M",
              },
              {
                part: "d",
                reasoning:
                  "$\\frac{5}{6} \\times \\frac{6}{5} + \\frac{1}{3} = 1 + \\frac{1}{3} = \\frac{4}{3}$.",
                working: "\\frac{4}{3}",
                marks: 2,
                markCode: "M",
              },
            ],
            finalAnswer:
              "(a) $\\frac{7}{2}x + 3$ (b) $\\frac{17}{4}x - 6$ (c) $-x + 3$ (d) $\\frac{4}{3}$",
            commonErrors: ["In (d), arithmetic error in evaluation."],
          },
        },
      ],
    },
    {
      id: "m7-u10-equations-rational",
      title: "Equations with rational numbers",
      skill: "Solve equations involving rational coefficients and constants.",
      lesson: {
        sections: [
          {
            heading: "Rational coefficients",
            body: "Equations can have rational coefficients: $\\frac{1}{2}x + 3 = 7$, $\\frac{2}{3}x - \\frac{1}{4} = \\frac{5}{6}$. To solve, use inverse operations with fractions: multiply by reciprocal or add/subtract fractions.",
          },
          {
            heading: "Clearing fractions",
            body: "To eliminate fractions, multiply both sides by the least common denominator (LCD). For $\\frac{1}{2}x + \\frac{1}{3} = 1$: LCD = $6$; $6(\\frac{1}{2}x + \\frac{1}{3}) = 6(1)$ → $3x + 2 = 6$ → $3x = 4$ → $x = \\frac{4}{3}$.",
          },
          {
            heading: "Checking solutions",
            body: "Always verify rational solutions: for $x = \\frac{4}{3}$ in $\\frac{1}{2}x + \\frac{1}{3} = 1$: $\\frac{1}{2}(\\frac{4}{3}) + \\frac{1}{3} = \\frac{2}{3} + \\frac{1}{3} = 1$ ✓.",
          },
        ],
        keyFormulas: [
          { name: "Clear fractions", statement: "Multiply both sides by LCD" },
          {
            name: "Inverse operations",
            statement: "Add/subtract or multiply/divide",
          },
          { name: "Check", statement: "Substitute solution back" },
        ],
        workedExample: {
          problem: "Solve $\\frac{1}{3}x - \\frac{1}{6} = \\frac{1}{2}$.",
          solution:
            "LCD = $6$: $6(\\frac{1}{3}x - \\frac{1}{6}) = 6(\\frac{1}{2})$ → $2x - 1 = 3$ → $2x = 4$ → $x = 2$.",
        },
      },
      questions: [
        {
          id: "m7-u10-equations-rational-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the LCD of $\\frac{1}{2}$ and $\\frac{1}{3}$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$6$" },
              { id: "b", text: "$5$" },
              { id: "c", text: "$1$" },
              { id: "d", text: "$\\frac{1}{6}$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Least common denominator",
                statement: "Smallest number divisible by both denominators.",
              },
            ],
            steps: [
              {
                reasoning: "LCD of $2$ and $3$ is $6$.",
                working: "6",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** $6$",
            commonErrors: ["Adding denominators instead of finding LCD."],
          },
        },
        {
          id: "m7-u10-equations-rational-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Solve $\\frac{1}{2}x + 3 = 7$.",
          response: { type: "numeric", parts: [{ label: "x", answer: 8 }] },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Solving equations",
                statement: "Subtract $3$, then multiply by $2$.",
              },
            ],
            steps: [
              {
                reasoning: "$\\frac{1}{2}x = 4$ → $x = 8$.",
                working: "x = 8",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Check: $\\frac{1}{2}(8) + 3 = 4 + 3 = 7$ ✓.",
                working: "7",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$x = 8$",
            commonErrors: ["Multiplying by $\\frac{1}{2}$ instead of $2$."],
          },
        },
        {
          id: "m7-u10-equations-rational-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Solve $\\frac{1}{3}x - \\frac{1}{6} = \\frac{1}{2}$.",
          response: { type: "numeric", parts: [{ label: "x", answer: 2 }] },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Clearing fractions",
                statement: "Multiply both sides by LCD.",
              },
            ],
            steps: [
              {
                reasoning:
                  "LCD = $6$: $6(\\frac{1}{3}x - \\frac{1}{6}) = 6(\\frac{1}{2})$ → $2x - 1 = 3$.",
                working: "2x - 1 = 3",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$2x = 4$ → $x = 2$.",
                working: "x = 2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Check: $\\frac{1}{3}(2) - \\frac{1}{6} = \\frac{2}{3} - \\frac{1}{6} = \\frac{1}{2}$ ✓.",
                working: "\\frac{1}{2}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$x = 2$",
            commonErrors: ["Not multiplying all terms by LCD."],
          },
        },
        {
          id: "m7-u10-equations-rational-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Solve each equation.",
          parts: [
            {
              label: "a",
              prompt: "$\\frac{2}{3}x + \\frac{1}{6} = \\frac{5}{6}$",
              marks: 2,
            },
            {
              label: "b",
              prompt: "$\\frac{1}{4}x - \\frac{1}{8} = \\frac{3}{8}$",
              marks: 2,
            },
            {
              label: "c",
              prompt: "$\\frac{3}{5}x - \\frac{2}{5} = \\frac{4}{5}$",
              marks: 2,
            },
            {
              label: "d",
              prompt: "$\\frac{1}{2}x + \\frac{1}{3}x = 5$",
              marks: 2,
            },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) x", answer: 1 },
              { label: "(b) x", answer: 2 },
              { label: "(c) x", answer: 2 },
              { label: "(d) x", answer: 6 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Clearing fractions",
                statement: "Multiply both sides by LCD.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "LCD = $6$: $4x + 1 = 5$ → $4x = 4$ → $x = 1$.",
                working: "x = 1",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "LCD = $8$: $2x - 1 = 3$ → $2x = 4$ → $x = 2$.",
                working: "x = 2",
                marks: 2,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "LCD = $5$: $3x - 2 = 4$ → $3x = 6$ → $x = 2$.",
                working: "x = 2",
                marks: 2,
                markCode: "M",
              },
              {
                part: "d",
                reasoning:
                  "$\\frac{1}{2}x + \\frac{1}{3}x = \\frac{5}{6}x$; $\\frac{5}{6}x = 5$ → $x = 6$.",
                working: "x = 6",
                marks: 2,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) $x = 1$ (b) $x = 2$ (c) $x = 2$ (d) $x = 6$",
            commonErrors: ["In (a), arithmetic error."],
          },
        },
      ],
    },
    {
      id: "m7-u10-geometry-statistics",
      title: "Geometry and statistics integration",
      skill: "Combine geometric measurements with statistical analysis.",
      lesson: {
        sections: [
          {
            heading: "Geometry with data",
            body: "Geometry problems often involve data: 'Find the mean area of circular gardens', 'Calculate the median volume of cylindrical tanks'. Use geometric formulas to find individual values, then apply statistical measures.",
          },
          {
            heading: "Comparing geometric figures",
            body: "Compare shapes using area, perimeter, volume. For circles: compare areas using $\\pi r^2$. For prisms: compare volumes using $V = Bh$. Statistical measures (mean, median) help compare groups of shapes.",
          },
          {
            heading: "Real-world applications",
            body: "Landscaping: calculate total area for multiple gardens. Construction: estimate materials for various projects. Science: compare volumes of different containers. Statistics help make decisions about quantities and costs.",
          },
        ],
        keyFormulas: [
          {
            name: "Geometry formulas",
            statement: "Area, volume, circumference",
          },
          { name: "Statistical measures", statement: "Mean, median, mode" },
          { name: "Integration", statement: "Apply geometry then statistics" },
        ],
        workedExample: {
          problem:
            "Three circular gardens have radii $3, 4, 5$ m. Find the mean area.",
          solution:
            "Areas: $9\\pi, 16\\pi, 25\\pi$; mean = $\\frac{50\\pi}{3} \\approx 52.4$ m².",
        },
      },
      questions: [
        {
          id: "m7-u10-geometry-statistics-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the area of a circle with radius $3$ cm?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$9\\pi$ cm²" },
              { id: "b", text: "$3\\pi$ cm²" },
              { id: "c", text: "$6\\pi$ cm²" },
              { id: "d", text: "$\\pi$ cm²" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Circle area",
                statement: "$A = \\pi r^2$.",
              },
            ],
            steps: [
              {
                reasoning: "$A = \\pi(9) = 9\\pi$ cm².",
                working: "9\\pi",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** $9\\pi$ cm²",
            commonErrors: ["Using $2\\pi r$ instead of $\\pi r^2$."],
          },
        },
        {
          id: "m7-u10-geometry-statistics-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Two rectangular prisms have volumes $24$ cm³ and $36$ cm³. What is the mean volume?",
          response: {
            type: "numeric",
            parts: [{ label: "Mean volume (cm³)", answer: 30 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Mean",
                statement: "Sum $\\div$ count.",
              },
            ],
            steps: [
              {
                reasoning: "Mean = $(24 + 36) \\div 2 = 30$ cm³.",
                working: "30",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State answer.",
                working: "30",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$30$ cm³",
            commonErrors: ["Adding volumes without dividing."],
          },
        },
        {
          id: "m7-u10-geometry-statistics-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Three circles have radii $2, 4, 6$ cm. Find the mean radius and mean area.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Circle area",
                statement: "$A = \\pi r^2$.",
              },
              {
                kind: "formula",
                name: "Mean",
                statement: "Sum $\\div$ count.",
              },
            ],
            steps: [
              {
                reasoning: "Mean radius = $(2 + 4 + 6) \\div 3 = 4$ cm.",
                working: "4\\text{ cm}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Areas: $4\\pi, 16\\pi, 36\\pi$; mean area = $\\frac{56\\pi}{3} \\approx 58.6$ cm².",
                working: "\\frac{56\\pi}{3}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State answers.",
                working: "4\\text{ cm}, \\frac{56\\pi}{3}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Mean radius = $4$ cm; mean area = $\\frac{56\\pi}{3} \\approx 58.6$ cm²",
            commonErrors: ["Computing mean of areas incorrectly."],
          },
        },
        {
          id: "m7-u10-geometry-statistics-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Solve each problem.",
          parts: [
            {
              label: "a",
              prompt: "Find the area of a circle with radius $5$ cm.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Find the volume of a cylinder with radius $3$ cm and height $4$ cm.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Three spherical balls have radii $1, 2, 3$ cm. Find the mean volume.",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "Compare the total surface area of two cubes with edges $4$ cm and $6$ cm.",
              marks: 2,
            },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Area ($\\pi$ cm²)", answer: 25 },
              { label: "(b) Volume ($\\pi$ cm³)", answer: 36 },
              { label: "(c) Mean volume ($\\pi$ cm³)", answer: 50.27 },
              { label: "(d) Difference in SA (cm²)", answer: 120 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Circle area",
                statement: "$A = \\pi r^2$.",
              },
              {
                kind: "formula",
                name: "Cylinder volume",
                statement: "$V = \\pi r^2 h$.",
              },
              {
                kind: "formula",
                name: "Sphere volume",
                statement: "$V = \\frac{4}{3}\\pi r^3$.",
              },
              { kind: "formula", name: "Cube SA", statement: "$SA = 6s^2$." },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$A = \\pi(25) = 25\\pi$ cm².",
                working: "25\\pi",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$V = \\pi(9)(4) = 36\\pi$ cm³.",
                working: "36\\pi",
                marks: 2,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Volumes: $\\frac{4}{3}\\pi(1) = \\frac{4}{3}\\pi$; $\\frac{4}{3}\\pi(8) = \\frac{32}{3}\\pi$; $\\frac{4}{3}\\pi(27) = 36\\pi$; sum = $\\frac{4}{3} + \\frac{32}{3} + 36 = \\frac{36}{3} + 36 = 12 + 36 = 48\\pi$; mean = $48\\pi \\div 3 = 16\\pi \\approx 50.27$ cm³.",
                working: "16\\pi \\approx 50.27",
                marks: 2,
                markCode: "M",
              },
              {
                part: "d",
                reasoning:
                  "Cube 1: $6 \\times 16 = 96$ cm²; cube 2: $6 \\times 36 = 216$ cm²; difference = $216 - 96 = 120$ cm².",
                working: "120",
                marks: 2,
                markCode: "M",
              },
            ],
            finalAnswer:
              "(a) $25\\pi$ cm² (b) $36\\pi$ cm³ (c) $16\\pi \\approx 50.27$ cm³ (d) $120$ cm²",
            commonErrors: [
              "In (d), subtracting edge lengths instead of surface areas.",
            ],
          },
        },
      ],
    },
    {
      id: "m7-u10-percent-geometry",
      title: "Percent and geometry applications",
      skill:
        "Apply percent calculations to geometric problems and real-world scenarios.",
      lesson: {
        sections: [
          {
            heading: "Percent of geometric quantities",
            body: "Percent problems can involve geometric measurements: 'What percent of the circle's area is shaded?', 'By what percent does the volume increase when radius doubles?'. Use geometric formulas to find quantities, then apply percent calculations.",
          },
          {
            heading: "Scale and percent",
            body: "Scale drawings use percent-like ratios: '1 cm represents 100 cm' is a 1:100 scale = 1% of actual size. Percent increase in dimensions affects area (squared) and volume (cubed) disproportionately.",
          },
          {
            heading: "Real-world applications",
            body: "Construction: calculate material costs with percent markup. Landscaping: determine percent of area for different features. Manufacturing: calculate percent change in production capacity. Percent and geometry combine for practical problems.",
          },
        ],
        keyFormulas: [
          {
            name: "Percent of geometry",
            statement: "Apply percent to geometric measurements",
          },
          { name: "Scale", statement: "Ratio of drawing to actual" },
          {
            name: "Percent change",
            statement: "Area scales by square, volume by cube",
          },
        ],
        workedExample: {
          problem:
            "If a circle's radius increases by $50\\%$, by what percent does its area increase?",
          solution:
            "New radius = $1.5r$; new area = $\\pi(1.5r)^2 = 2.25\\pi r^2$; increase = $125\\%$.",
        },
      },
      questions: [
        {
          id: "m7-u10-percent-geometry-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "If a square's side length increases by $20\\%$, by what percent does its area increase?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$44\\%$" },
              { id: "b", text: "$20\\%$" },
              { id: "c", text: "$40\\%$" },
              { id: "d", text: "$400\\%$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Percent and geometry",
                statement: "Area scales by square of dimension.",
              },
            ],
            steps: [
              {
                reasoning:
                  "New side = $1.2s$; new area = $(1.2s)^2 = 1.44s^2$; increase = $44\\%$.",
                working: "44\\%",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** $44\\%$",
            commonErrors: ["Thinking area increases by same percent as side."],
          },
        },
        {
          id: "m7-u10-percent-geometry-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A rectangular garden is $10$ m by $8$ m. What percent of its area is a $4$ m by $4$ m section?",
          response: {
            type: "numeric",
            parts: [{ label: "Percent", answer: 20 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Rectangle area",
                statement: "$A = lw$.",
              },
              {
                kind: "formula",
                name: "Percent of",
                statement:
                  "$\\frac{\\text{part}}{\\text{whole}} \\times 100\\%$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Total area = $80$ m²; section = $16$ m²; percent = $\\frac{16}{80} = 20\\%$.",
                working: "20\\%",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State answer.",
                working: "20\\%",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$20\\%$",
            commonErrors: ["Comparing dimensions instead of areas."],
          },
        },
        {
          id: "m7-u10-percent-geometry-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "If a cube's edge length doubles, by what percent does its volume increase?",
          response: {
            type: "numeric",
            parts: [{ label: "Percent increase", answer: 700 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Percent and geometry",
                statement: "Volume scales by cube of dimension.",
              },
            ],
            steps: [
              {
                reasoning:
                  "New edge = $2s$; new volume = $(2s)^3 = 8s^3$; increase = $700\\%$.",
                working: "700\\%",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State answer.",
                working: "700\\%",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Verify: $8s^3$ is $700\\%$ more than $s^3$ ✓.",
                working: "700\\%",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$700\\%$",
            commonErrors: ["Thinking volume doubles when edge doubles."],
          },
        },
        {
          id: "m7-u10-percent-geometry-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Solve each problem.",
          parts: [
            {
              label: "a",
              prompt:
                "If a circle's radius increases by $25\\%$, by what percent does its circumference increase?",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "A room is $12$ m by $10$ m. What percent of floor area is a $3$ m by $4$ m rug?",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "If a cylinder's radius doubles and height stays same, by what percent does volume change?",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "A $\\$200$ painting is discounted $30\\%$ then taxed $8\\%$. What is final price?",
              marks: 2,
            },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Percent increase", answer: 25 },
              { label: "(b) Percent", answer: 10 },
              { label: "(c) Percent change", answer: 300 },
              { label: "(d) Final price ($)", answer: 151.2 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Percent and geometry",
                statement:
                  "Circumference scales linearly; area by square; volume by cube.",
              },
              {
                kind: "skill",
                name: "Successive percent changes",
                statement: "Multiply factors.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Circumference = $2\\pi r$; if $r$ increases $25\\%$, circumference increases $25\\%$.",
                working: "25\\%",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Room = $120$ m²; rug = $12$ m²; percent = $\\frac{12}{120} = 10\\%$.",
                working: "10\\%",
                marks: 2,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Volume = $\\pi r^2 h$; if $r$ doubles, $r^2$ quadruples; volume increases $300\\%$.",
                working: "300\\%",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "State answer.",
                working: "300\\%",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning:
                  "$200 \\times 0.70 \\times 1.08 = 200 \\times 0.756 = \\$151.20$.",
                working: "\\$151.20",
                marks: 2,
                markCode: "M",
              },
            ],
            finalAnswer:
              "(a) $25\\%$ (b) $10\\%$ (c) $300\\%$ increase (d) $\\$151.20$",
            commonErrors: ["In (c), thinking volume doubles."],
          },
        },
      ],
    },
  ],
};
