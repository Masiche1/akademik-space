import type { Lesson } from "../../../types.ts";

export const lesson83: Lesson = {
  id: "cialfm-u8-lesson-8-3",
  code: "8-3",
  title: "Chi-Squared Tests and Regression",
  goal: "I CAN perform chi-squared tests and interpret regression output.",
  standards: ["Cambridge A Level Further Mathematics 9231 Paper 5: Probability & Statistics"],
  vocabulary: [
    { term: "Chi-squared test", definition: "Goodness-of-fit or independence test using $\\chi^2 = \\Sigma (O-E)^2/E$." },
    { term: "Degrees of freedom", definition: "Categories minus constraints; used to find critical values." },
    { term: "Regression line", definition: "$y = a + bx$ fitted by least squares." },
    { term: "Correlation coefficient", definition: "r measures linear association strength, −1 to 1." },
    { term: "Residual", definition: "Observed minus predicted value on the regression line." },
  ],
  concepts: [
    {
      id: "cialfm-u8-s3-chisq-regression",
      title: "Chi-squared tests and regression analysis",
      skill: "Run goodness-of-fit/independence tests and interpret least-squares output.",
      lesson: {
        sections: [
          {
            heading: "Chi-squared test",
            body: "Hypotheses: $H_0$ = model fits / variables independent; $H_1$ = does not fit / dependent. Compute expected values, then $\\chi^2 = \\Sigma (O-E)^2/E$. Compare with the critical value at chosen significance using degrees of freedom (categories − 1 for goodness of fit). Reject $H_0$ if $\\chi^2$ exceeds the critical value.",
          },
          {
            heading: "Regression and correlation",
            body: "The least-squares line $y = a + bx$ minimises residuals; $b = S_{xy}/S_{xx}$. The product-moment correlation coefficient r lies in [−1, 1]; |r| near 1 indicates strong linear association. Correlation does not imply causation — beware spurious relationships.",
          },
        ],
        keyFormulas: [
          { name: "Chi-squared", statement: "$\\chi^2 = \\sum \\dfrac{(O-E)^2}{E}$" },
          { name: "Slope", statement: "$b = \\dfrac{S_{xy}}{S_{xx}}$" },
          { name: "PMCC", statement: "$r = \\dfrac{S_{xy}}{\\sqrt{S_{xx}S_{yy}}}$" },
        ],
        workedExample: {
          problem: "Observed: 40, 30, 30 vs expected 33.3 each (3 categories). Compute the chi-squared statistic.",
          solution: "$\\chi^2 = 3 \\times \\dfrac{(40-33.3)^2}{33.3} + \\ldots = 3 \\times \\dfrac{44.9}{33.3} \\approx 4.04$ (using each category's deviation).",
        },
      },
      questions: [
        {
          id: "cialfm-u8-cr-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The chi-squared statistic is computed as…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\sum (O-E)^2/E$" }, { id: "b", text: "$\\sum (O-E)^2$" }, { id: "c", text: "$\\sum OE$" }, { id: "d", text: "$\\sum (O+E)^2/E$" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Chi-squared", statement: "$\\chi^2 = \\Sigma(O-E)^2/E$." }],
            steps: [{ reasoning: "Standard formula.", marks: 1, markCode: "A" }],
            finalAnswer: "$\\sum (O-E)^2/E$",
          },
        },
        {
          id: "cialfm-u8-cr-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A chi-squared test has 4 categories. What are the degrees of freedom (goodness-of-fit)?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Degrees of freedom", statement: "Categories − 1." }],
            steps: [
              { reasoning: "df = 4 − 1 = 3.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 3.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "3",
          },
        },
        {
          id: "cialfm-u8-cr-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "For a regression of y on x, $S_{xx} = 20$, $S_{xy} = 30$, $S_{yy} = 45$, n = 10, $\\bar x = 4$, $\\bar y = 7$. Find the regression line y = a + bx.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Least squares", statement: "$b = S_{xy}/S_{xx}$, $a = \\bar y - b\\bar x$." }],
            steps: [
              { reasoning: "$b = 30/20 = 1.5$.", marks: 1, markCode: "M" },
              { reasoning: "$a = 7 - 1.5 \\times 4 = 1$.", marks: 1, markCode: "M" },
              { reasoning: "Line: y = 1 + 1.5x.", marks: 1, markCode: "M" },
              { reasoning: "Answer stated.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$y = 1 + 1.5x$",
          },
        },
        {
          id: "cialfm-u8-cr-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Given $S_{xx} = 20$, $S_{xy} = 30$, $S_{yy} = 45$, compute the product-moment correlation coefficient and interpret it.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "PMCC", statement: "$r = S_{xy}/\\sqrt{S_{xx}S_{yy}}$." }],
            steps: [
              { reasoning: "$r = 30/\\sqrt{20 \\times 45} = 30/\\sqrt{900} = 30/30 = 1$.", marks: 1, markCode: "M" },
              { reasoning: "Perfect positive linear correlation.", marks: 1, markCode: "M" },
              { reasoning: "Check: $S_{xy}^2 = 900 = S_{xx}S_{yy}$ confirms r = ±1; positive since S_xy > 0.", marks: 1, markCode: "M" },
              { reasoning: "Interpretation: all points lie on the line.", marks: 1, markCode: "M" },
              { reasoning: "Answer: r = 1, perfect positive correlation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$r = 1$ — perfect positive correlation",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cialfm-u8-cr-notes",
      title: "Chi-squared and regression — notes",
      summary: "χ²=Σ(O−E)²/E; df = categories−1; b=Sxy/Sxx; r formula.",
      sections: [
        { heading: "Chi-squared", body: "Expected counts must be ≥ ~5; compare statistic to critical value at chosen significance." },
        { heading: "Regression", body: "Line passes through (x̄, ȳ); r measures linear association only — not causation." },
      ],
    },
  ],
};
