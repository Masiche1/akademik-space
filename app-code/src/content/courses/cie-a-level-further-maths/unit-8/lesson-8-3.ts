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
            { id: "a", text: "$\\sum OE$" },
            { id: "b", text: "$\\sum (O-E)^2/E$" },
            { id: "c", text: "$\\sum (O-E)^2$" },
            { id: "d", text: "$\\sum (O+E)^2/E$" },
          ], correctChoiceId: "b" },
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
        {
          id: "cialfm-u8-cr-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In a chi-squared test, we reject $H_0$ when…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\chi^2$ is small" },
            { id: "b", text: "$\\chi^2$ exceeds the critical value" },
            { id: "c", text: "Expected values are large" },
            { id: "d", text: "df is large" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "technique", name: "Chi-squared decision", statement: "Large $\\chi^2$ ⇒ poor fit ⇒ reject." }],
            steps: [{ reasoning: "Reject $H_0$ when the statistic exceeds the critical value.", marks: 1, markCode: "A" }],
            finalAnswer: "$\\chi^2$ exceeds critical value",
          },
        },
        {
          id: "cialfm-u8-cr-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A goodness-of-fit chi-squared test has 6 categories. What are the degrees of freedom?",
          response: { type: "numeric", parts: [{ label: "a", answer: 5 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Degrees of freedom", statement: "Categories − 1." }],
            steps: [
              { reasoning: "df = 6 − 1 = 5.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 5.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "5",
          },
        },
        {
          id: "cialfm-u8-cr-q7",
          difficulty: "core",
          totalMarks: 3,
          stem: "Observed frequencies are 50, 45, 55 with expected 50 for each category. Compute $\\chi^2$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "Chi-squared", statement: "$\\sum (O-E)^2/E$." }],
            steps: [
              { reasoning: "$(O-E)$ values: $0, -5, 5$; squared: $0, 25, 25$.", marks: 1, markCode: "M" },
              { reasoning: "$\\chi^2 = \\frac{0}{50}+\\frac{25}{50}+\\frac{25}{50} = 1$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $\\chi^2 = 1$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\chi^2 = 1$",
          },
        },
        {
          id: "cialfm-u8-cr-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In a chi-squared test, the expected frequency for a category is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Observed frequency" },
            { id: "b", text: "The mean of observed values" },
            { id: "c", text: "Total frequency × hypothesised proportion" },
            { id: "d", text: "Always 5" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "technique", name: "Expected frequency", statement: "$E = N \\times p$." }],
            steps: [{ reasoning: "Expected = total × hypothesised probability.", marks: 1, markCode: "A" }],
            finalAnswer: "Total × proportion",
          },
        },
        {
          id: "cialfm-u8-cr-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "For a regression of $y$ on $x$, $S_{xx}=16$ and $S_{xy}=40$. Find the gradient $b$ of the regression line.",
          response: { type: "numeric", parts: [{ label: "a", answer: 2.5 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Slope", statement: "$b=S_{xy}/S_{xx}$." }],
            steps: [
              { reasoning: "$b = 40/16 = 2.5$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 2.5.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2.5",
          },
        },
        {
          id: "cialfm-u8-cr-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "A correlation coefficient of $r=-0.9$ indicates…",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "property", name: "PMCC", statement: "$r \\in [-1,1]$; sign gives direction." }],
            steps: [
              { reasoning: "$|r|=0.9$ is close to 1, indicating strong linear association.", marks: 1, markCode: "M" },
              { reasoning: "The negative sign means the association is negative (as $x$ increases, $y$ tends to decrease).", marks: 1, markCode: "M" },
              { reasoning: "Interpretation stated.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Strong negative linear correlation",
          },
        },
        {
          id: "cialfm-u8-cr-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A high correlation between two variables implies…",
          response: { type: "mcq", choices: [
            { id: "a", text: "A perfect relationship" },
            { id: "b", text: "A strong linear association, not necessarily causation" },
            { id: "c", text: "One causes the other" },
            { id: "d", text: "The variables are equal" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "property", name: "Correlation", statement: "Association only — not causation." }],
            steps: [{ reasoning: "Correlation measures linear association; it does not imply causation.", marks: 1, markCode: "A" }],
            finalAnswer: "Strong linear association, not causation",
          },
        },
        {
          id: "cialfm-u8-cr-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "For a regression line, $\\bar{x}=5$, $\\bar{y}=11$ and $b=1.5$. Find the intercept $a$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 3.5 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Intercept", statement: "$a=\\bar{y}-b\\bar{x}$." }],
            steps: [
              { reasoning: "$a = 11 - 1.5 \\times 5 = 11 - 7.5 = 3.5$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 3.5.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "3.5",
          },
        },
        {
          id: "cialfm-u8-cr-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A chi-squared test gives $\\chi^2 = 7.8$ with critical value 7.815 at 5% significance (df = 3). State the decision and conclusion.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Chi-squared decision", statement: "Compare statistic to critical value." }],
            steps: [
              { reasoning: "$\\chi^2 = 7.8 < 7.815$.", marks: 1, markCode: "M" },
              { reasoning: "The statistic does not exceed the critical value, so it is not in the critical region.", marks: 1, markCode: "M" },
              { reasoning: "Do not reject $H_0$.", marks: 1, markCode: "M" },
              { reasoning: "Insufficient evidence against the model at the 5% level.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Do not reject $H_0$",
          },
        },
        {
          id: "cialfm-u8-cr-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "For a chi-squared test of independence in an $r \\times c$ contingency table, the degrees of freedom are…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$r-c$" },
            { id: "b", text: "$rc-1$" },
            { id: "c", text: "$(r-1)(c-1)$" },
            { id: "d", text: "$r+c-1$" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "technique", name: "Degrees of freedom", statement: "$(r-1)(c-1)$ for independence." }],
            steps: [{ reasoning: "Independence test df = $(r-1)(c-1)$.", marks: 1, markCode: "A" }],
            finalAnswer: "$(r-1)(c-1)$",
          },
        },
        {
          id: "cialfm-u8-cr-q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "A regression line is $y = 2 + 1.5x$. For an observation with $x=4$, $y=9$, find the residual.",
          response: { type: "numeric", parts: [{ label: "a", answer: 1 }] },
          markscheme: {
            principles: [{ kind: "definition", name: "Residual", statement: "Observed − predicted." }],
            steps: [
              { reasoning: "Predicted $\\hat{y} = 2 + 1.5(4) = 8$; residual $= 9-8 = 1$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 1.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1",
          },
        },
        {
          id: "cialfm-u8-cr-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why expected frequencies in a chi-squared test should not be too small, and describe how to handle categories with small expected counts.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "property", name: "Chi-squared validity", statement: "Expected counts should be ≥ ~5." }],
            steps: [
              { reasoning: "Small expected frequencies make the $(O-E)^2/E$ terms unstable and the $\\chi^2$ approximation poor.", marks: 1, markCode: "M" },
              { reasoning: "Rule of thumb: all expected frequencies should be at least about 5.", marks: 1, markCode: "M" },
              { reasoning: "Remedy: combine adjacent categories so expected counts are adequate, adjusting df accordingly.", marks: 1, markCode: "M" },
              { reasoning: "Explanation complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Combine small categories; expected ≥ ~5",
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
