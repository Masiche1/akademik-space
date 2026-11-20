import type { Lesson } from "../../../types.ts";

export const lesson92: Lesson = {
  id: "edialfm-u9-lesson-9-2",
  code: "9-2",
  title: "Correlation and Regression Inference",
  goal: "I CAN test hypotheses about the correlation coefficient and use regression analysis for prediction.",
  standards: ["WST03 S3", "Regression"],
  vocabulary: [
    { term: "Product-moment correlation", definition: "$r=\\frac{S_{xy}}{\\sqrt{S_{xx}S_{yy}}}$ measuring linear association, $-1\\le r\\le1$." },
    { term: "Test for correlation", definition: "Under $H_0:\\rho=0$, $t=\\frac{r\\sqrt{n-2}}{\\sqrt{1-r^2}}\\sim t_{n-2}$." },
    { term: "Regression line", definition: "$y$ on $x$: $y=a+bx$ with $b=\\frac{S_{xy}}{S_{xx}}$, $a=\\bar y-b\\bar x$." },
    { term: "Residual", definition: "$e_i=y_i-(a+bx_i)$; measures deviation from regression line." },
  ],
  concepts: [
    {
      id: "edialfm-u9-corr",
      title: "Testing correlation",
      skill: "Test whether a correlation coefficient is significantly different from zero.",
      lesson: {
        sections: [
          {
            heading: "The test statistic",
            body: "For $n$ paired observations, under $H_0:\\rho=0$: $t=\\frac{r\\sqrt{n-2}}{\\sqrt{1-r^2}}$ follows a $t$-distribution with $n-2$ degrees of freedom. Compare against critical value for chosen significance and tails.",
          },
          {
            heading: "Interpretation",
            body: "Significant positive $r$ → positive linear association; negative → negative. Significance depends on both $|r|$ and $n$ — large samples detect weak correlations.",
          },
          {
            heading: "Cautions",
            body: "Correlation does not imply causation; sensitive to outliers; only measures linear association (nonlinear relationships may have $r\\approx0$).",
          },
        ],
        keyFormulas: [
          { name: "Test statistic", statement: "$t=\\frac{r\\sqrt{n-2}}{\\sqrt{1-r^2}}$" },
          { name: "Correlation", statement: "$r=\\frac{S_{xy}}{\\sqrt{S_{xx}S_{yy}}}$" },
        ],
        workedExample: {
          problem: "For $n=15$, $r=0.6$, test $H_0:\\rho=0$ two-tailed at $5\\%$.",
          solution: "$t=\\frac{0.6\\sqrt{13}}{\\sqrt{1-0.36}}=\\frac{0.6\\times3.606}{0.8}=2.70$; $t_{13,0.025}=2.16$; $2.70>2.16$ — reject $H_0$.",
        },
      },
      questions: [
        {
          id: "edialfm-reg-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The correlation coefficient $r$ lies in the range:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$[-1,1]$" },
              { id: "b", text: "$[0,1]$" },
              { id: "c", text: "$(-\\infty,\\infty)$" },
              { id: "d", text: "$[-100,100]$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Correlation", statement: "$-1\\le r\\le1$." }],
            steps: [{ reasoning: "Standard.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** $[-1,1]$",
          },
        },
        {
          id: "edialfm-reg-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "For $n=10$, $r=0.7$, compute the test statistic $t$ for $H_0:\\rho=0$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "Test stat", statement: "$t=\\frac{r\\sqrt{n-2}}{\\sqrt{1-r^2}}$." }],
            steps: [
              { reasoning: "$t=\\frac{0.7\\sqrt8}{\\sqrt{1-0.49}}=\\frac{0.7\\times2.828}{0.714}=2.77$.", working: "2.77", marks: 1, markCode: "M" },
              { reasoning: "State value.", marks: 1, markCode: "M" },
              { reasoning: "State answer.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$t\\approx2.77$",
            commonErrors: ["Using $n$ not $n-2$."],
          },
        },
        {
          id: "edialfm-reg-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Data gives $r=0.5$ with $n=20$. Test $H_0:\\rho=0$ two-tailed at $5\\%$ ($t_{18,0.025}=2.10$).",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Correlation test", statement: "Compute $t$, compare critical." }],
            steps: [
              { reasoning: "$t=\\frac{0.5\\sqrt{18}}{\\sqrt{0.75}}=\\frac{0.5\\times4.243}{0.866}=2.45$.", working: "2.45", marks: 1, markCode: "M" },
              { reasoning: "$2.45>2.10$ — reject $H_0$.", working: "reject", marks: 1, markCode: "M" },
              { reasoning: "State decision.", marks: 1, markCode: "A" },
              { reasoning: "Conclude significant positive correlation.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Reject $H_0$: significant correlation",
            commonErrors: ["Wrong df or critical value."],
          },
        },
        {
          id: "edialfm-reg-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Paired data $(x,y)$ gives $\\bar x=5$, $\\bar y=8$, $S_{xx}=10$, $S_{yy}=20$, $S_{xy}=12$.",
          parts: [
            { label: "a", prompt: "Find the correlation coefficient $r$.", marks: 2 },
            { label: "b", prompt: "Find the regression line $y$ on $x$.", marks: 3 },
            { label: "c", prompt: "Predict $y$ when $x=8$ and comment on reliability.", marks: 3 },
            { label: "d", prompt: "What does $r^2$ represent?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Correlation", statement: "$r=\\frac{S_{xy}}{\\sqrt{S_{xx}S_{yy}}}$." },
              { kind: "formula", name: "Regression", statement: "$y=a+bx$, $b=\\frac{S_{xy}}{S_{xx}}$." },
            ],
            steps: [
              { part: "a", reasoning: "$r=\\frac{12}{\\sqrt{10\\times20}}=\\frac{12}{\\sqrt{200}}=\\frac{12}{14.14}=0.849$.", working: "0.849", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State $r$.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$b=\\frac{12}{10}=1.2$; $a=8-1.2\\times5=8-6=2$.", working: "a=2,b=1.2", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Line: $y=2+1.2x$.", working: "y=2+1.2x", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State equation.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$\\hat y=2+1.2\\times8=2+9.6=11.6$.", working: "11.6", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State prediction.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Reliable since $r$ high and $x=8$ within data range? $x=8$ exceeds $\\bar x=5$ — extrapolation caution.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "$r^2$ = proportion of variance in $y$ explained by linear regression on $x$ (coefficient of determination).", working: "r^2", marks: 1, markCode: "M" },
              { part: "d", reasoning: "State meaning.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $r=0.849$ (b) $y=2+1.2x$ (c) $\\hat y=11.6$ (d) $r^2$ = variance explained",
            commonErrors: ["Slope formula; intercept."],
          },
        },
      ],
    },
    {
      id: "edialfm-u9-reg",
      title: "Regression Analysis",
      skill: "Fit regression lines, interpret residuals and assess goodness of fit.",
      lesson: {
        sections: [
          {
            heading: "Least squares line",
            body: "The regression line $y=a+bx$ minimises $\\sum e_i^2$. $b=\\frac{S_{xy}}{S_{xx}}$, $a=\\bar y-b\\bar x$. Line passes through $(\\bar x,\\bar y)$.",
          },
          {
            heading: "Residuals",
            body: "$e_i=y_i-\\hat y_i$. $\\sum e_i=0$; plot residuals against $x$ to check assumptions — random scatter good; patterns suggest model inadequacy.",
          },
          {
            heading: "$x$ on $y$ vs $y$ on $x$",
            body: "Different regression lines exist for each direction; they coincide only if $r=\\pm1$. Choosing depends on which variable is being predicted.",
          },
        ],
        keyFormulas: [
          { name: "Slope", statement: "$b=\\frac{S_{xy}}{S_{xx}}$" },
          { name: "Intercept", statement: "$a=\\bar y-b\\bar x$" },
        ],
        workedExample: {
          problem: "Data gives $S_{xy}=8$, $S_{xx}=4$, $\\bar x=3$, $\\bar y=10$. Find regression line.",
          solution: "$b=2$; $a=10-2\\times3=4$; line $y=4+2x$.",
        },
      },
      questions: [
        {
          id: "edialfm-reg2-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The regression line $y$ on $x$ always passes through:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$(\\bar x,\\bar y)$" },
              { id: "b", text: "The origin" },
              { id: "c", text: "$(0,\\bar y)$" },
              { id: "d", text: "$(\\bar x,0)$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "property", name: "Regression line", statement: "Passes through means point." }],
            steps: [{ reasoning: "Property.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** $(\\bar x,\\bar y)$",
          },
        },
        {
          id: "edialfm-reg2-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "For data with $S_{xy}=15$, $S_{xx}=5$, find slope $b$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "Slope", statement: "$b=\\frac{S_{xy}}{S_{xx}}$." }],
            steps: [
              { reasoning: "$b=\\frac{15}{5}=3$.", working: "3", marks: 1, markCode: "M" },
              { reasoning: "State 3.", marks: 1, markCode: "M" },
              { reasoning: "State answer.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$b=3$",
            commonErrors: ["Inverting ratio."],
          },
        },
        {
          id: "edialfm-reg2-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Residuals from a regression show a clear curved pattern when plotted against $x$. What does this indicate?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Residual analysis", statement: "Patterns indicate model inadequacy." }],
            steps: [
              { reasoning: "Systematic pattern → linear model inappropriate.", working: "pattern", marks: 1, markCode: "M" },
              { reasoning: "Random scatter would be expected if model adequate.", marks: 1, markCode: "M" },
              { reasoning: "State indication.", marks: 1, markCode: "A" },
              { reasoning: "Conclude.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Linear model inadequate — consider nonlinear",
            commonErrors: ["Ignoring residual patterns."],
          },
        },
        {
          id: "edialfm-reg2-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Data: $\\bar x=4$, $\\bar y=9$, $S_{xx}=8$, $S_{yy}=32$, $S_{xy}=16$.",
          parts: [
            { label: "a", prompt: "Find $r$ and the regression line $y$ on $x$.", marks: 4 },
            { label: "b", prompt: "Find the regression line $x$ on $y$.", marks: 3 },
            { label: "c", prompt: "Explain why the two lines differ.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Regression", statement: "$b=\\frac{S_{xy}}{S_{xx}}$ vs $\\frac{S_{xy}}{S_{yy}}$." },
            ],
            steps: [
              { part: "a", reasoning: "$r=\\frac{16}{\\sqrt{8\\times32}}=\\frac{16}{16}=1$ — perfect correlation.", working: "r=1", marks: 1, markCode: "M" },
              { part: "a", reasoning: "$b=\\frac{16}{8}=2$; $a=9-2\\times4=1$; line $y=1+2x$.", working: "y=1+2x", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State results.", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Check $r=1$.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$b'=\\frac{S_{xy}}{S_{yy}}=\\frac{16}{32}=0.5$; $a'=\\bar x-b'\\bar y=4-0.5\\times9=4-4.5=-0.5$; line $x=-0.5+0.5y$.", working: "x=-0.5+0.5y", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State line.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Verify consistency with $r=1$.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "With $r=1$ the lines are actually the same relationship rearranged: $y=1+2x\\iff x=\\frac{y-1}{2}=0.5y-0.5$ ✓ identical.", working: "same line", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State they coincide when $|r|=1$.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Conclude.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $r=1$, $y=1+2x$ (b) $x=-0.5+0.5y$ (c) identical since $r=1$",
            commonErrors: ["Slope direction; intercept."],
          },
        },
      ],
    },
  ],
};
