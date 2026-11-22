import type { Lesson } from "../../../types.ts";

export const lesson91: Lesson = {
  id: "edialfm-u9-lesson-9-1",
  code: "9-1",
  title: "Chi-Squared Goodness of Fit",
  goal: "I CAN carry out a chi-squared test for goodness of fit and independence, including degrees of freedom and critical values.",
  standards: ["WST03 S3", "Chi-squared tests"],
  vocabulary: [
    { term: "Chi-squared statistic", definition: "$\\chi^2=\\sum\\frac{(O-E)^2}{E}$ comparing observed $O$ and expected $E$ frequencies." },
    { term: "Degrees of freedom", definition: "For goodness of fit: $k-1-p$ where $k$ categories, $p$ estimated parameters; for independence: $(r-1)(c-1)$." },
    { term: "Expected frequency", definition: "Frequency predicted under $H_0$; must be $\\ge5$ for valid chi-squared approximation." },
    { term: "Critical value", definition: "From $\\chi^2$ tables at chosen significance; reject $H_0$ if statistic exceeds it." },
  ],
  concepts: [
    {
      id: "edialfm-u9-chi-gof",
      title: "Goodness of fit test",
      skill: "Test whether observed frequencies fit a claimed distribution using chi-squared.",
      lesson: {
        sections: [
          {
            heading: "Procedure",
            body: "$H_0$: data follow claimed distribution; $H_1$: they do not. Compute expected frequencies $E_i=np_i$; check all $E_i\\ge5$ (combine categories if needed); calculate $\\chi^2=\\sum\\frac{(O_i-E_i)^2}{E_i}$; compare with critical value at $\\nu$ degrees of freedom.",
          },
          {
            heading: "Degrees of freedom",
            body: "For goodness of fit with $k$ categories and $p$ parameters estimated from data: $\\nu=k-1-p$. If probabilities fully specified, $\\nu=k-1$.",
          },
          {
            heading: "Conditions",
            body: "Expected frequencies $\\ge5$; observations independent; categories exhaustive. If violated, combine adjacent categories before testing.",
          },
        ],
        keyFormulas: [
          { name: "Statistic", statement: "$\\chi^2=\\sum\\frac{(O-E)^2}{E}$" },
          { name: "Degrees of freedom", statement: "$\\nu=k-1-p$" },
        ],
        workedExample: {
          problem: "A die is rolled 60 times; frequencies 12,8,10,9,11,10. Test fairness at 5%.",
          solution: "$E=10$ each; $\\chi^2=\\frac{4+4+0+1+1+0}{10}=1.0$; $\\nu=5$, critical $11.07$; $1.0<11.07$ — do not reject.",
        },
      },
      questions: [
        {
          id: "edialfm-chi-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The chi-squared statistic is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\sum\\frac{O}{E}$" },
              { id: "b", text: "$\\sum(O-E)$" },
              { id: "c", text: "$\\sum\\frac{(O-E)^2}{E}$" },
              { id: "d", text: "$\\sum(O+E)^2$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "formula", name: "Chi-squared", statement: "$\\sum\\frac{(O-E)^2}{E}$." }],
            steps: [{ reasoning: "Definition.", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** $\\sum\\frac{(O-E)^2}{E}$",
          },
        },
        {
          id: "edialfm-chi-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "For a goodness-of-fit test with 4 categories and no estimated parameters, state degrees of freedom.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "df", statement: "$\\nu=k-1-p$." }],
            steps: [
              { reasoning: "$k=4$, $p=0$: $\\nu=3$.", working: "3", marks: 1, markCode: "M" },
              { reasoning: "State $\\nu=3$.", marks: 1, markCode: "M" },
              { reasoning: "State answer.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\nu=3$",
            commonErrors: ["Forgetting $-1$."],
          },
        },
        {
          id: "edialfm-chi-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Observed frequencies: 8,12,10,15,5 ($n=50$). Expected under uniform: 10 each. Compute $\\chi^2$ and state $\\nu$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Statistic", statement: "$\\chi^2=\\sum\\frac{(O-E)^2}{E}$." }],
            steps: [
              { reasoning: "$\\chi^2=\\frac{4+4+0+25+25}{10}=\\frac{58}{10}=5.8$.", working: "5.8", marks: 1, markCode: "M" },
              { reasoning: "$\\nu=5-1=4$.", working: "4", marks: 1, markCode: "M" },
              { reasoning: "State statistic and df.", marks: 1, markCode: "A" },
              { reasoning: "Conclude.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\chi^2=5.8$, $\\nu=4$",
            commonErrors: ["Arithmetic errors in $(O-E)^2$."],
          },
        },
        {
          id: "edialfm-chi-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A genetics experiment predicts offspring phenotypes in ratio $9:3:3:1$. In $1600$ offspring observed: $890, 300, 280, 130$.",
          parts: [
            { label: "a", prompt: "Calculate expected frequencies.", marks: 3 },
            { label: "b", prompt: "Calculate the chi-squared statistic and degrees of freedom.", marks: 4 },
            { label: "c", prompt: "State the conclusion at $5\\%$ significance (critical value $\\chi^2_{3,0.05}=7.81$).", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Chi-squared test", statement: "Expected $=n\\times$ proportion." }],
            steps: [
              { part: "a", reasoning: "Total ratio parts $=16$; expected: $\\frac{9}{16}\\times1600=900$, $300$, $300$, $100$.", working: "E values", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State expected frequencies.", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Check sum $=1600$ ✓.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$\\chi^2=\\frac{(890-900)^2}{900}+\\frac{0}{300}+\\frac{(280-300)^2}{300}+\\frac{(130-100)^2}{100}=\\frac{100}{900}+\\frac{400}{300}+\\frac{900}{100}=0.111+1.333+9=10.44$.", working: "10.44", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State statistic.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$\\nu=4-1=3$.", working: "3", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State df.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$10.44>7.81$ — reject $H_0$.", working: "reject", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State rejection.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Conclusion: data do not fit $9:3:3:1$ ratio.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $900,300,300,100$ (b) $\\chi^2=10.44$, $\\nu=3$ (c) reject $H_0$",
            commonErrors: ["Expected frequency errors; wrong df."],
          },
        },
      ],
    },
    {
      id: "edialfm-u9-chi-indep",
      title: "Chi-Squared Test of Independence",
      skill: "Test independence between two categorical variables using contingency tables.",
      lesson: {
        sections: [
          {
            heading: "Contingency table",
            body: "For an $r\\times c$ table, expected frequency $E_{ij}=\\frac{(\\text{row total})_i(\\text{col total})_j}{n}$. Test statistic $\\chi^2=\\sum\\frac{(O-E)^2}{E}$ with $\\nu=(r-1)(c-1)$.",
          },
          {
            heading: "Interpretation",
            body: "$H_0$: variables independent; $H_1$: associated. Reject $H_0$ when statistic exceeds critical value. Expected frequencies must be $\\ge5$.",
          },
          {
            heading: "Direction of association",
            body: "If rejected, examine the table for cells with largest contributions $\\frac{(O-E)^2}{E}$ to describe the association.",
          },
        ],
        keyFormulas: [
          { name: "Expected", statement: "$E_{ij}=\\frac{R_iC_j}{n}$" },
          { name: "Degrees of freedom", statement: "$\\nu=(r-1)(c-1)$" },
        ],
        workedExample: {
          problem: "2×2 table: rows Gender (M/F), cols Preference (A/B): M: 30,20; F: 20,30. $n=100$. Test independence at 5%.",
          solution: "Expected all $=25$; $\\chi^2=4\\times\\frac{25}{25}=4$? Compute: $(30-25)^2/25\\times4=1$ each → $\\chi^2=4$; $\\nu=1$, critical $3.84$; $4>3.84$ — reject independence.",
        },
      },
      questions: [
        {
          id: "edialfm-ci2-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "For a 3×4 contingency table, degrees of freedom for independence test:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$6$" },
              { id: "b", text: "$12$" },
              { id: "c", text: "$2$" },
              { id: "d", text: "$7$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "formula", name: "df", statement: "$\\nu=(r-1)(c-1)=2\\times3=6$." }],
            steps: [{ reasoning: "Compute.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** $6$",
          },
        },
        {
          id: "edialfm-ci2-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "In a 2×2 table with $n=200$, row totals 120 and 80, column totals 110 and 90. Find expected frequency for cell (1,1).",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "Expected", statement: "$E_{11}=\\frac{120\\times110}{200}=66$." }],
            steps: [
              { reasoning: "$E_{11}=\\frac{120\\times110}{200}=66$.", working: "66", marks: 1, markCode: "M" },
              { reasoning: "State 66.", marks: 1, markCode: "M" },
              { reasoning: "State answer.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$66$",
            commonErrors: ["Using wrong totals."],
          },
        },
        {
          id: "edialfm-ci2-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A 2×2 table gives $\\chi^2=6.2$ with $\\nu=1$. At $5\\%$ significance (critical $3.84$), state the conclusion and interpret.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Decision", statement: "Compare statistic to critical value." }],
            steps: [
              { reasoning: "$6.2>3.84$ — reject $H_0$.", working: "reject", marks: 1, markCode: "M" },
              { reasoning: "Conclude variables are not independent — association exists.", marks: 1, markCode: "M" },
              { reasoning: "State conclusion.", marks: 1, markCode: "A" },
              { reasoning: "Interpret in context.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Reject $H_0$: variables associated",
            commonErrors: ["Wrong comparison direction."],
          },
        },
        {
          id: "edialfm-ci2-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A survey of $200$ people cross-classifies smoking (Yes/No) and illness (Yes/No): Smokers ill 40, well 60; Non-smokers ill 30, well 70.",
          parts: [
            { label: "a", prompt: "Calculate all expected frequencies.", marks: 3 },
            { label: "b", prompt: "Calculate $\\chi^2$ and state $\\nu$.", marks: 4 },
            { label: "c", prompt: "Conclude at $5\\%$ (critical $3.84$) and interpret.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Independence test", statement: "$E_{ij}=\\frac{R_iC_j}{n}$." }],
            steps: [
              { part: "a", reasoning: "Row totals: 100,100; col totals: 70,130. $E$: $\\frac{100\\times70}{200}=35$, $\\frac{100\\times130}{200}=65$; table: 35,65,35,65.", working: "E table", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State expected frequencies.", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Check sums.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$\\chi^2=\\frac{25}{35}+\\frac{25}{65}+\\frac{25}{35}+\\frac{25}{65}=\\frac{50}{35}+\\frac{50}{65}=1.429+0.769=2.198$? Recompute: $(40-35)^2/35=25/35=0.714$; $(60-65)^2/65=25/65=0.385$; $(30-35)^2/35=0.714$; $(70-65)^2/65=0.385$; total $=2.198$.", working: "2.198", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State statistic $\\approx2.20$.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$\\nu=(2-1)(2-1)=1$.", working: "1", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State df.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$2.20<3.84$ — do not reject $H_0$.", working: "no reject", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State decision.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Conclusion: insufficient evidence of association between smoking and illness in this sample.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $35,65,35,65$ (b) $\\chi^2\\approx2.20$, $\\nu=1$ (c) do not reject $H_0$",
            commonErrors: ["Expected frequency formula; statistic arithmetic."],
          },
        },
      ],
    },
  ],
};
