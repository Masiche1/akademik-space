import type { Lesson } from "../../../types.ts";

export const lesson43: Lesson = {
  id: "m8-u4-lesson-4-3",
  code: "4-3",
  title: "Capstone: Geometry, Transformations, and Data",
  goal: "I CAN apply geometric transformations, analyze bivariate data, and solve comprehensive problems integrating multiple concepts.",
  standards: [
    "8.G.A.1",
    "8.G.A.3",
    "8.G.A.5",
    "8.G.B.8",
    "8.SP.A.2",
    "8.SP.A.3",
  ],
  vocabulary: [
    {
      term: "Translation",
      definition:
        "A slide that moves a figure without rotating or reflecting it.",
    },
    {
      term: "Rotation",
      definition: "A turn around a fixed point (center of rotation).",
    },
    {
      term: "Reflection",
      definition: "A flip over a line (line of reflection).",
    },
    {
      term: "Congruent",
      definition:
        "Figures with same size and shape — related by rigid transformations.",
    },
    {
      term: "Similar",
      definition:
        "Figures with same shape but possibly different size — related by dilation.",
    },
    {
      term: "Dilation",
      definition:
        "A scaling transformation that changes size by a scale factor.",
    },
    {
      term: "Residual",
      definition:
        "The vertical distance between a data point and the trend line.",
    },
    {
      term: "Line of best fit",
      definition: "A line that models the trend in bivariate data.",
    },
  ],
  concepts: [
    {
      id: "m8-u4-transformations",
      title: "Transformations and similarity",
      skill:
        "Apply translations, rotations, reflections, and dilations to analyze figure relationships.",
      lesson: {
        sections: [
          {
            heading: "Rigid transformations",
            body: "Translations, rotations, and reflections preserve size and shape — they produce **congruent** figures. A translation moves every point the same distance in the same direction; rotation turns around a center; reflection flips over a line.",
          },
          {
            heading: "Dilation and similarity",
            body: "Dilation scales a figure by a scale factor $k$ from a center point. $k > 1$ enlarges, $0 < k < 1$ shrinks, $k = 1$ no change. Dilations preserve shape but change size — produce **similar** figures.",
          },
          {
            heading: "Coordinate rules",
            body: "Translation by $(a, b)$: $(x, y) \\to (x+a, y+b)$. Reflection over x-axis: $(x, y) \\to (x, -y)$. Rotation 90° counterclockwise about origin: $(x, y) \\to (-y, x)$.",
          },
        ],
        keyFormulas: [
          { name: "Translation", statement: "$(x, y) \\to (x+a, y+b)$" },
          { name: "Dilation", statement: "Scale factor $k$ from center" },
        ],
        workedExample: {
          problem:
            "Triangle has vertices (1,1), (3,1), (1,4). Translate by (2, -1).",
          solution: "New vertices: (3,0), (5,0), (3,3).",
        },
      },
      questions: [
        {
          id: "m8-u4-transformations-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What transformation preserves size and shape?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Dilation" },
              { id: "b", text: "Translation" },
              { id: "c", text: "Stretching" },
              { id: "d", text: "Shearing" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Rigid transformation",
                statement:
                  "Preserves size and shape — translation, rotation, reflection.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Translation is rigid — moves without changing size or shape.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Translation",
            commonErrors: ["Confusing with dilation which changes size."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "m8-u4-transformations-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Point (3, 5) is reflected over the x-axis. What are the new coordinates?",
          response: {
            type: "numeric",
            parts: [
              { label: "New x", answer: 3 },
              { label: "New y", answer: -5 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Reflection",
                statement: "Over x-axis: $(x, y) \\to (x, -y)$.",
              },
            ],
            steps: [
              { reasoning: "x stays same: 3.", marks: 1, markCode: "M" },
              { reasoning: "y changes sign: -5.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$(3, -5)$",
            commonErrors: ["Changing x instead of y."],
            examinerNote: "M1, A1.",
          },
        },
        {
          id: "m8-u4-transformations-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A triangle has vertices (0,0), (4,0), (0,3). Apply a dilation with scale factor 2 centered at origin. Find new vertices and compare areas.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Dilation",
                statement: "Multiply coordinates by scale factor.",
              },
              {
                kind: "principle",
                name: "Area scaling",
                statement: "Area scales by $k^2$.",
              },
            ],
            steps: [
              {
                reasoning: "New vertices: (0,0), (8,0), (0,6).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Original area: $\\frac{1}{2} \\times 4 \\times 3 = 6$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "New area: $\\frac{1}{2} \\times 8 \\times 6 = 24$ — 4 times larger ($2^2$).",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Answer: vertices (0,0), (8,0), (0,6); area 24 vs 6.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Vertices (0,0), (8,0), (0,6); area 24 (4× original)",
            commonErrors: ["Thinking area scales by k not k²."],
            examinerNote: "M2, R1, A1.",
          },
        },
        {
          id: "m8-u4-transformations-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A logo design has a triangle with vertices A(2,1), B(6,1), C(2,5). The designer wants to:",
          parts: [
            {
              label: "a",
              prompt:
                "Translate it 3 units right and 2 units up. Give new vertices.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Reflect the original over the y-axis. Give new vertices.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Dilate original by scale factor 0.5 from origin. Give new vertices.",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "Are the translated and reflected triangles congruent? Explain.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Rigid transformations",
                statement: "Preserve congruence.",
              },
              {
                kind: "principle",
                name: "Coordinate rules",
                statement: "Apply transformation rules correctly.",
              },
            ],
            steps: [
              {
                reasoning: "Translate (3,2): A(5,3), B(9,3), C(5,7).",
                marks: 2,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Reflect over y-axis: A(-2,1), B(-6,1), C(-2,5).",
                marks: 2,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Dilate 0.5: A(1,0.5), B(3,0.5), C(1,2.5).",
                marks: 2,
                markCode: "M",
                part: "c",
              },
              {
                reasoning:
                  "Yes — both are rigid transformations preserving size and shape.",
                marks: 1,
                markCode: "B",
                part: "d",
              },
              {
                reasoning:
                  "Translation and reflection are congruence-preserving.",
                marks: 1,
                markCode: "R",
                part: "d",
              },
              {
                reasoning:
                  "They have same side lengths and angles, just different positions/orientations.",
                marks: 1,
                markCode: "A",
                part: "d",
              },
              {
                reasoning: "Unlike dilation which would change size.",
                marks: 1,
                markCode: "A",
                part: "d",
              },
            ],
            finalAnswer:
              "(a) (5,3),(9,3),(5,7) (b) (-2,1),(-6,1),(-2,5) (c) (1,.5),(3,.5),(1,2.5) (d) yes, rigid transformations.",
            commonErrors: ["Applying dilation to get congruent figures."],
            examinerNote: "2+2+2+4 = 10.",
          },
        },
      ],
    },
    {
      id: "m8-u4-data",
      title: "Bivariate data and associations",
      skill:
        "Analyze scatter plots, determine associations, and use trend lines for prediction.",
      lesson: {
        sections: [
          {
            heading: "Types of association",
            body: "- **Positive**: as x increases, y tends to increase\n- **Negative**: as x increases, y tends to decrease\n- **None**: no apparent pattern\n\nAlso describe strength: strong (points close to line), moderate, weak (scattered).",
          },
          {
            heading: "Line of best fit",
            body: "Draw a line through the data that best represents the trend. Roughly equal points above and below. Use to predict y for new x values — more reliable within data range (interpolation) than outside (extrapolation).",
          },
          {
            heading: "Residuals",
            body: "Residual = actual y - predicted y. Positive residual: point above line. Negative: below. Small residuals mean good fit. Large residuals suggest outliers or non-linear relationship.",
          },
        ],
        keyFormulas: [
          { name: "Association", statement: "Positive, negative, or none" },
          { name: "Residual", statement: "Actual - predicted" },
        ],
        workedExample: {
          problem:
            "Data shows ice cream sales vs temperature with positive correlation. What does this mean?",
          solution:
            "Higher temperatures associated with more ice cream sales — but correlation isn't causation; both may depend on season.",
        },
      },
      questions: [
        {
          id: "m8-u4-data-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A scatter plot shows points going from bottom-left to top-right. What association?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Negative" },
              { id: "b", text: "Positive" },
              { id: "c", text: "None" },
              { id: "d", text: "Cannot tell" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Positive association",
                statement: "Both variables increase together.",
              },
            ],
            steps: [
              {
                reasoning: "Bottom-left to top-right = positive correlation.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Positive",
            commonErrors: ["Reversing direction."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "m8-u4-data-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why is extrapolation less reliable than interpolation for predictions?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Extrapolation",
                statement:
                  "Extending beyond data range assumes pattern continues.",
              },
            ],
            steps: [
              {
                reasoning: "Pattern may not continue outside observed range.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Other factors may change behavior at extremes.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Interpolation stays within known data — safer assumption.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Pattern may not hold beyond data range; interpolation safer.",
            commonErrors: ["Thinking linear trend continues forever."],
            examinerNote: "R1, B1, A1.",
          },
        },
        {
          id: "m8-u4-data-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A scatter plot of study hours vs test scores shows strong positive correlation. A student claims 'studying causes higher scores.' Evaluate this claim.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Correlation vs causation",
                statement: "Correlation doesn't prove cause.",
              },
              {
                kind: "principle",
                name: "Confounding variables",
                statement: "Other factors may explain relationship.",
              },
            ],
            steps: [
              {
                reasoning: "Correlation shows association, not causation.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Possible confounders: motivated students study more AND score higher; prior knowledge affects both.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Would need controlled experiment to establish causation.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Claim is plausible but not proven by correlation alone.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Correlation supports but doesn't prove causation — need more evidence.",
            commonErrors: ["Treating correlation as proof of cause."],
            examinerNote: "B1, R2, A1.",
          },
        },
        {
          id: "m8-u4-data-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Data for hours studied (x) vs test score (y): (1,65), (2,70), (3,72), (4,78), (5,82), (6,85).",
          parts: [
            { label: "a", prompt: "Describe the association.", marks: 2 },
            {
              label: "b",
              prompt: "Estimate the score for 7 hours using trend.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Is this interpolation or extrapolation?",
              marks: 1,
            },
            {
              label: "d",
              prompt: "What are two limitations of this prediction?",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Association",
                statement: "Positive correlation between study and score.",
              },
              {
                kind: "principle",
                name: "Prediction limits",
                statement: "Trend may not continue; other factors matter.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Strong positive association — scores increase with study hours.",
                marks: 1,
                markCode: "B",
                part: "a",
              },
              {
                reasoning: "Roughly linear increase of ~4 points per hour.",
                marks: 1,
                markCode: "R",
                part: "a",
              },
              {
                reasoning:
                  "Trend suggests ~88-90 for 7 hours (continuing pattern).",
                marks: 2,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Answer: ~$\\approx 88$ (accept 85-92).",
                marks: 1,
                markCode: "A",
                part: "b",
              },
              {
                reasoning:
                  "Extrapolation — 7 hours is beyond data range (max 6).",
                marks: 1,
                markCode: "B",
                part: "c",
              },
              {
                reasoning:
                  "Limitation 1: pattern may not continue — diminishing returns possible.",
                marks: 2,
                markCode: "R",
                part: "d",
              },
              {
                reasoning:
                  "Limitation 2: other factors (sleep, prior knowledge, test difficulty) affect scores.",
                marks: 1,
                markCode: "A",
                part: "d",
              },
              {
                reasoning:
                  "Or: correlation isn't causation; individual variation exists.",
                marks: 1,
                markCode: "A",
                part: "d",
              },
            ],
            finalAnswer:
              "(a) positive correlation (b) ~88 (c) extrapolation (d) diminishing returns, other factors.",
            commonErrors: [
              "Not recognizing extrapolation; ignoring other factors.",
            ],
            examinerNote: "2+3+1+4 = 10.",
          },
        },
      ],
    },
    {
      id: "m8-u4-synthesis",
      title: "Comprehensive problem-solving",
      skill:
        "Integrate all grade 8 concepts to solve complex real-world problems.",
      lesson: {
        sections: [
          {
            heading: "Integration strategy",
            body: "Complex problems combine multiple concepts. Identify which concepts apply: equations (systems), geometry (measurements), data analysis (trends), functions (relationships). Break into steps, solve each, combine.",
          },
          {
            heading: "Real-world applications",
            body: "Construction (geometry + systems), business (linear models + break-even), science (data analysis + predictions), design (transformations + similarity). Math is a tool for understanding and solving real problems.",
          },
          {
            heading: "Review checklist",
            body: "□ Read problem carefully\n□ Identify relevant concepts\n□ Choose appropriate method\n□ Show all work\n□ Check answer makes sense\n□ Interpret in context",
          },
        ],
        keyFormulas: [
          {
            name: "Strategy",
            statement: "Identify → choose → solve → check → interpret",
          },
          {
            name: "Integration",
            statement: "Combine multiple concepts for complex problems",
          },
        ],
        workedExample: {
          problem:
            "A rectangular garden 20m × 15m has a path 2m wide around it. Find path area and cost if paving costs $\\$5$/m².",
          solution:
            "Outer: 24×19=456 m²; inner: 300 m²; path: 156 m²; cost: $780.",
        },
      },
      questions: [
        {
          id: "m8-u4-synthesis-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the best first step for any complex math problem?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Start calculating" },
              { id: "b", text: "Read carefully and identify concepts needed" },
              { id: "c", text: "Guess the answer" },
              { id: "d", text: "Skip to the end" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Problem solving",
                statement: "Understanding precedes calculation.",
              },
            ],
            steps: [
              {
                reasoning: "Read and identify needed concepts before solving.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Read and identify concepts",
            commonErrors: ["Rushing to calculation."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "m8-u4-synthesis-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Solve: $3x + 2y = 12$ and $x - y = 1$. Express answer as ordered pair.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "System solution",
                statement: "Find x,y satisfying both.",
              },
            ],
            steps: [
              {
                reasoning:
                  "From second: $x = y + 1$. Substitute: $3(y+1) + 2y = 12$ → $5y + 3 = 12$ → $5y = 9$ → $y = 9/5 = 1.8$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$x = 1.8 + 1 = 2.8$.", marks: 1, markCode: "M" },
              {
                reasoning: "Solution: $(2.8, 1.8)$ or $(14/5, 9/5)$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$(2.8, 1.8)$",
            commonErrors: ["Arithmetic errors."],
            examinerNote: "M2, A1.",
          },
        },
        {
          id: "m8-u4-synthesis-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A rectangular prism has dimensions 5 cm × 4 cm × 3 cm. Find volume and surface area.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Volume", statement: "$V = lwh$" },
              {
                kind: "formula",
                name: "Surface area",
                statement: "$SA = 2(lw + lh + wh)$",
              },
            ],
            steps: [
              {
                reasoning: "$V = 5 \\times 4 \\times 3 = 60$ cm³.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$SA = 2(20 + 15 + 12) = 2(47) = 94$ cm².",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Volume: $60$ cm³; surface area: $94$ cm².",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Units differ — volume cubic, area square.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$V = 60$ cm³, $SA = 94$ cm²",
            commonErrors: ["Confusing volume and surface area formulas."],
            examinerNote: "M2, A2.",
          },
        },
        {
          id: "m8-u4-synthesis-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "You start a tutoring business. You charge $\\$25$/hour. Materials cost $\\$3$/hour of tutoring. You can tutor 20 hours/week max.",
          parts: [
            {
              label: "a",
              prompt: "Write revenue and profit functions.",
              marks: 3,
            },
            { label: "b", prompt: "How much profit for 15 hours?", marks: 2 },
            {
              label: "c",
              prompt: "How many hours needed to earn $\\$300$/week profit?",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "If you raise rate to $\\$30$, how does break-even change?",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Linear model",
                statement: "Revenue = rate × hours; profit = revenue - costs.",
              },
              {
                kind: "principle",
                name: "Break-even",
                statement: "Profit = 0 point.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Revenue: $R(h) = 25h$; costs: $C(h) = 3h$; profit: $P(h) = 22h$.",
                marks: 2,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Functions correct.",
                marks: 1,
                markCode: "A",
                part: "a",
              },
              {
                reasoning: "$P(15) = 22 \\times 15 = \\text{\\$}330$.",
                working: "22*15",
                marks: 2,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "$300/22 \\approx 13.6$ hours — need 14 hours.",
                marks: 1,
                markCode: "M",
                part: "c",
              },
              {
                reasoning: "Answer: $14$ hours.",
                marks: 1,
                markCode: "A",
                part: "c",
              },
              {
                reasoning: "New profit: $(30-3)h = 27h$.",
                marks: 1,
                markCode: "M",
                part: "d",
              },
              {
                reasoning:
                  "For $\\$300$: $300/27 \\approx 11.1$ → 12 hours (was 14).",
                marks: 1,
                markCode: "M",
                part: "d",
              },
              {
                reasoning:
                  "Break-even point changes — higher rate means fewer hours needed for same profit.",
                marks: 1,
                markCode: "A",
                part: "d",
              },
            ],
            finalAnswer:
              "(a) R=25h, P=22h (b) $330 (c) 14 hrs (d) 12 hrs at $30.",
            commonErrors: ["Forgetting costs; not rounding up hours."],
            examinerNote: "3+2+2+3 = 10.",
          },
        },
      ],
    },
  ],
};
