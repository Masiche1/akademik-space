module.exports = [
  {
    file: "lesson-12-1.ts", exportName: "lesson121",
    lesson: {
      id: "ecn11-u12-lesson-12-1", code: "12-1",
      title: "Income, Wealth and Poverty",
      goal: "I CAN distinguish income from wealth and apply absolute and relative poverty measures.",
      standards: [
        "Edexcel IGCSE Economics 4EC1 — Understanding markets and market failure",
        "4EC1: distribution of income, poverty and inequality",
      ],
      vocabulary: [
        { term: "Income", definition: "A flow of earnings received over a period of time, e.g. wages per month." },
        { term: "Wealth", definition: "A stock of assets owned at a point in time, e.g. property, savings." },
        { term: "Disposable income", definition: "Income remaining after direct taxes, plus any benefits received." },
        { term: "Absolute poverty", definition: "Living below a fixed minimum standard needed for basic survival." },
        { term: "Relative poverty", definition: "Living below a level considered acceptable by the standards of that society." },
        { term: "Poverty line", definition: "An income threshold below which a person or household is classed as poor." },
      ],
      concepts: [
        {
          id: "ecn11-u12-earnpov",
          title: "Income, wealth and poverty",
          skill: "Distinguish income from wealth and apply absolute and relative poverty measures.",
          sections: [
            {
              heading: "Income and wealth",
              body: "**Income** is a flow — money received over time (wages, salaries, profits, rent, interest, benefits). **Wealth** is a stock — assets owned at one moment (houses, savings, shares, land). A person can have high wealth but low income (e.g. a pensioner owning a house) or high income but low wealth (e.g. a high earner spending everything). **Disposable income** = gross income − direct taxes + cash benefits; it measures what households can actually spend.\n\nIncome inequality and wealth inequality are related but different: wealth is more unequally distributed than income because assets accumulate and are passed on.",
            },
            {
              heading: "Absolute and relative poverty",
              body: "**Absolute poverty** is measured against a fixed minimum standard — the income needed for food, shelter, clothing and basic needs (e.g. the World Bank poverty line). It can be reduced as living standards rise. **Relative poverty** is measured against the general standard of living — typically households earning below a set percentage (often 60%) of median income. As average incomes rise, the relative poverty line rises too, so relative poverty can persist even when absolute poverty falls.",
            },
          ],
          keyFormulas: [
            { name: "Disposable income", statement: "Gross income − direct taxes + benefits" },
            { name: "Relative poverty line", statement: "Often set at 60% of median household income" },
          ],
          workedExample: {
            problem: "A household earns £30,000 gross, pays £4,500 in income tax, and receives £1,500 in child benefit. What is its disposable income?",
            solution: "Disposable income = 30,000 − 4,500 + 1,500 = £27,000.",
          },
          questions: [
            {
              id: "ecn11-u12-earnpov-q1", difficulty: "foundation", totalMarks: 2,
              stem: "Which of the following is a flow measure of economic well-being?",
              response: {
                type: "mcq",
                choices: [
                  { id: "a", text: "Wealth" },
                  { id: "b", text: "Income" },
                  { id: "c", text: "Assets" },
                  { id: "d", text: "Property" },
                ],
                correctChoiceId: "b",
              },
              markscheme: {
                principles: [
                  { kind: "definition", name: "Income vs wealth", statement: "Income is a flow; wealth is a stock." },
                ],
                steps: [
                  { reasoning: "Income is received over time (a flow); wealth is owned at a point (a stock).", marks: 2, markCode: "AO1" },
                ],
                finalAnswer: "**(b)** Income",
                commonErrors: ["Confusing stock and flow."],
              },
            },
            {
              id: "ecn11-u12-earnpov-q2", difficulty: "foundation", totalMarks: 2,
              stem: "Define absolute poverty and state how it is measured.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "definition", name: "Absolute poverty", statement: "Below a fixed minimum standard for basic needs." },
                ],
                steps: [
                  { reasoning: "Definition: living below the minimum income needed for basic survival.", marks: 1, markCode: "AO1" },
                  { reasoning: "Measured against a fixed poverty line (e.g. World Bank line), independent of average incomes.", marks: 1, markCode: "AO1" },
                ],
                finalAnswer: "Below a fixed minimum standard; measured against a fixed poverty line.",
                commonErrors: ["Describing relative poverty instead."],
              },
            },
            {
              id: "ecn11-u12-earnpov-q3", difficulty: "core", totalMarks: 3,
              stem: "Explain why relative poverty can persist even when average incomes rise.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "principle", name: "Relative poverty", statement: "Measured against the society's general standard of living." },
                ],
                steps: [
                  { reasoning: "Relative poverty line is set as a percentage of median income.", marks: 1, markCode: "AO2" },
                  { reasoning: "When average incomes rise, the line rises too.", marks: 1, markCode: "AO2" },
                  { reasoning: "Households whose incomes do not keep pace remain relatively poor.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "The poverty line rises with median income, so lagging households stay relatively poor.",
                commonErrors: ["Claiming rising incomes eliminate relative poverty."],
              },
            },
            {
              id: "ecn11-u12-earnpov-q4", difficulty: "challenge", totalMarks: 5,
              stem: "Compare income and wealth, and explain how taxes and benefits affect disposable income.",
              parts: [
                { label: "a", prompt: "State two differences between income and wealth.", marks: 2 },
                { label: "b", prompt: "Explain how disposable income is calculated.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "comparison", name: "Income vs wealth", statement: "Flow vs stock; income less unequally distributed." },
                ],
                steps: [
                  { reasoning: "(a) Income is a flow over time; wealth is a stock of assets at a point.", marks: 1, markCode: "AO1", part: "a" },
                  { reasoning: "(a) Wealth is more unequally distributed than income.", marks: 1, markCode: "AO1", part: "a" },
                  { reasoning: "(b) Start with gross income.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Subtract direct taxes (income tax, NIC).", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Add cash benefits (e.g. child benefit, housing benefit).", marks: 1, markCode: "AO2", part: "b" },
                ],
                finalAnswer: "(a) flow vs stock; wealth more unequal (b) gross − tax + benefits",
                commonErrors: ["Ignoring benefits in disposable income."],
              },
            },
            {
              id: "ecn11-u12-earnpov-q5", difficulty: "challenge", totalMarks: 6,
              stem: "A country's average income rises by 8%, but the incomes of the poorest 20% are unchanged. Analyse the likely effect on absolute and relative poverty.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "principle", name: "Poverty measurement", statement: "Absolute vs relative poverty respond differently to growth." },
                ],
                steps: [
                  { reasoning: "Absolute poverty is measured against a fixed line — unchanged incomes for the poorest mean absolute poverty is likely unchanged.", marks: 2, markCode: "AO2" },
                  { reasoning: "Relative poverty likely rises: the median income rises while the poorest stay flat.", marks: 2, markCode: "AO2" },
                  { reasoning: "The gap between rich and poor widens — inequality increases.", marks: 1, markCode: "AO3" },
                  { reasoning: "Conclusion: growth without distribution can worsen relative poverty.", marks: 1, markCode: "AO3" },
                ],
                finalAnswer: "Absolute poverty roughly unchanged; relative poverty rises as the median pulls away.",
                commonErrors: ["Assuming rising average income helps the poorest automatically."],
              },
            },
            {
              id: "ecn11-u12-earnpov-q6", difficulty: "challenge", totalMarks: 9,
              stem: "Answer all parts.",
              parts: [
                { label: "a", prompt: "Define income and wealth, giving one example of each.", marks: 2 },
                { label: "b", prompt: "Distinguish between absolute and relative poverty.", marks: 2 },
                { label: "c", prompt: "A worker earns £24,000, pays £3,000 tax and receives £2,400 in benefits. Calculate disposable income.", marks: 2 },
                { label: "d", prompt: "Explain why wealth is more unequally distributed than income.", marks: 2 },
                { label: "e", prompt: "Suggest one reason why relative poverty is harder to eliminate than absolute poverty.", marks: 1 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "technique", name: "Poverty and inequality", statement: "Definitions, calculation and evaluation." },
                ],
                steps: [
                  { reasoning: "(a) Income = flow e.g. wages; wealth = stock e.g. house/savings.", marks: 2, markCode: "AO1", part: "a" },
                  { reasoning: "(b) Absolute = fixed minimum standard; relative = below a share of median income.", marks: 2, markCode: "AO1", part: "b" },
                  { reasoning: "(c) 24,000 − 3,000 + 2,400 = £23,400.", marks: 2, markCode: "AO1", part: "c" },
                  { reasoning: "(d) Assets accumulate and are inherited; income is earned each period.", marks: 2, markCode: "AO2", part: "d" },
                  { reasoning: "(e) The relative line rises with median income, so it moves with growth.", marks: 1, markCode: "AO3", part: "e" },
                ],
                finalAnswer: "(a) flow/stock (b) fixed vs relative line (c) £23,400 (d) accumulation/inheritance (e) moving target",
                commonErrors: ["Wrong disposable income calculation; confusing absolute and relative."],
              },
            },
          ],
        },
        {
          id: "ecn11-u12-measure",
          title: "Measuring inequality",
          skill: "Use income quintiles, the Lorenz curve and the Gini coefficient to describe inequality.",
          sections: [
            {
              heading: "Income distribution and quintiles",
              body: "Households can be ranked by income and divided into **quintiles** — five equal groups each containing 20% of households. Comparing quintile incomes shows how income is shared: if the top quintile earns far more than the bottom, inequality is high. **Median** income (the middle value) is often used instead of mean because it is less distorted by very high earners.",
            },
            {
              heading: "Lorenz curve and Gini coefficient",
              body: "The **Lorenz curve** plots cumulative share of income against cumulative share of households, ranked poorest to richest. The **line of equality** (45° line) shows perfect equality. The further the Lorenz curve bows below the line, the more unequal the distribution. The **Gini coefficient** measures this gap: it ranges from 0 (perfect equality) to 1 (perfect inequality). A rising Gini means inequality is increasing; a falling Gini means it is decreasing.",
            },
          ],
          keyFormulas: [
            { name: "Gini coefficient", statement: "0 = perfect equality; 1 = perfect inequality" },
            { name: "Lorenz curve", statement: "Cumulative income share vs cumulative population share" },
          ],
          workedExample: {
            problem: "Country A has a Gini of 0.25; Country B has 0.55. Which is more equal, and what does the Lorenz curve look like?",
            solution: "Country A is more equal (lower Gini). Its Lorenz curve lies closer to the 45° line of equality.",
          },
          questions: [
            {
              id: "ecn11-u12-measure-q1", difficulty: "foundation", totalMarks: 2,
              stem: "What does a Gini coefficient of 0 represent?",
              response: {
                type: "mcq",
                choices: [
                  { id: "a", text: "Perfect inequality" },
                  { id: "b", text: "Perfect equality" },
                  { id: "c", text: "Average income" },
                  { id: "d", text: "Total wealth" },
                ],
                correctChoiceId: "b",
              },
              markscheme: {
                principles: [
                  { kind: "definition", name: "Gini coefficient", statement: "0 = equality, 1 = inequality." },
                ],
                steps: [
                  { reasoning: "Gini ranges 0 (perfect equality) to 1 (perfect inequality).", marks: 2, markCode: "AO1" },
                ],
                finalAnswer: "**(b)** Perfect equality",
                commonErrors: ["Reversing the scale."],
              },
            },
            {
              id: "ecn11-u12-measure-q2", difficulty: "foundation", totalMarks: 2,
              stem: "What is an income quintile?",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "definition", name: "Quintile", statement: "One-fifth (20%) of households ranked by income." },
                ],
                steps: [
                  { reasoning: "Households ranked by income and split into five equal groups.", marks: 1, markCode: "AO1" },
                  { reasoning: "Each quintile contains 20% of households.", marks: 1, markCode: "AO1" },
                ],
                finalAnswer: "One of five equal groups (20% each) ranked by income.",
                commonErrors: ["Confusing with quartiles (four groups)."],
              },
            },
            {
              id: "ecn11-u12-measure-q3", difficulty: "core", totalMarks: 3,
              stem: "Explain how the Lorenz curve is used to show income inequality.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "principle", name: "Lorenz curve", statement: "Cumulative income vs cumulative households." },
                ],
                steps: [
                  { reasoning: "Plots cumulative share of income against cumulative share of households (poorest to richest).", marks: 1, markCode: "AO2" },
                  { reasoning: "Compared with the 45° line of equality.", marks: 1, markCode: "AO2" },
                  { reasoning: "Greater bow below the line = greater inequality.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "Distance below the line of equality shows the degree of inequality.",
                commonErrors: ["Describing axes incorrectly."],
              },
            },
            {
              id: "ecn11-u12-measure-q4", difficulty: "challenge", totalMarks: 5,
              stem: "A country's Gini coefficient rises from 0.30 to 0.42 over a decade.",
              parts: [
                { label: "a", prompt: "State what a rising Gini coefficient indicates.", marks: 2 },
                { label: "b", prompt: "Explain what would happen to the Lorenz curve.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "principle", name: "Gini and Lorenz", statement: "Gini measures the gap the Lorenz curve shows." },
                ],
                steps: [
                  { reasoning: "(a) Inequality has increased — income is less equally distributed.", marks: 2, markCode: "AO1", part: "a" },
                  { reasoning: "(b) Lorenz curve bows further below the 45° line of equality.", marks: 2, markCode: "AO2", part: "b" },
                  { reasoning: "(b) The gap between the curve and the line of equality widens, matching the higher Gini.", marks: 1, markCode: "AO2", part: "b" },
                ],
                finalAnswer: "(a) inequality rose (b) Lorenz curve bows further from equality line",
                commonErrors: ["Thinking a higher Gini means more equality."],
              },
            },
            {
              id: "ecn11-u12-measure-q5", difficulty: "challenge", totalMarks: 6,
              stem: "Two countries have identical mean incomes, but Country X has a Gini of 0.30 and Country Y has a Gini of 0.50. Compare the likely living standards of households in the two countries.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "comparison", name: "Gini comparison", statement: "Same mean, different distribution." },
                ],
                steps: [
                  { reasoning: "Same mean income means the same total/average income.", marks: 1, markCode: "AO2" },
                  { reasoning: "Country X's lower Gini means income is spread more evenly.", marks: 2, markCode: "AO2" },
                  { reasoning: "Poorer households in X likely earn more than poorer households in Y.", marks: 2, markCode: "AO2" },
                  { reasoning: "Richer households in Y likely earn much more than in X — greater inequality.", marks: 1, markCode: "AO3" },
                ],
                finalAnswer: "X is more equal: its poorest households are better off; Y's richest are much richer.",
                commonErrors: ["Assuming mean income tells the whole story."],
              },
            },
            {
              id: "ecn11-u12-measure-q6", difficulty: "challenge", totalMarks: 8,
              stem: "Answer all parts.",
              parts: [
                { label: "a", prompt: "Define the Gini coefficient and state its range.", marks: 2 },
                { label: "b", prompt: "Explain what the Lorenz curve shows.", marks: 2 },
                { label: "c", prompt: "Country P has Gini 0.28; Country Q has Gini 0.61. Which is more unequal?", marks: 1 },
                { label: "d", prompt: "Suggest two reasons why a government might want to reduce the Gini coefficient.", marks: 2 },
                { label: "e", prompt: "Give one limitation of using the Gini coefficient alone.", marks: 1 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "technique", name: "Measuring inequality", statement: "Gini, Lorenz curve, quintiles, evaluation." },
                ],
                steps: [
                  { reasoning: "(a) Measure of income inequality; ranges 0 (equality) to 1 (inequality).", marks: 2, markCode: "AO1", part: "a" },
                  { reasoning: "(b) Cumulative income share vs cumulative population share; bow below equality line shows inequality.", marks: 2, markCode: "AO1", part: "b" },
                  { reasoning: "(c) Country Q — higher Gini.", marks: 1, markCode: "AO1", part: "c" },
                  { reasoning: "(d) Reduce poverty/social exclusion; promote social cohesion and fairness.", marks: 2, markCode: "AO2", part: "d" },
                  { reasoning: "(e) Ignores wealth inequality and non-income factors (health, education).", marks: 1, markCode: "AO3", part: "e" },
                ],
                finalAnswer: "(a) 0-1 inequality measure (b) cumulative income vs population (c) Q (d) poverty/cohesion (e) ignores wealth",
                commonErrors: ["Reversing Gini scale; ignoring distribution vs level."],
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "ecn11-u12-earnpov-notes", title: "Income, wealth and poverty — notes",
      summary: "Income = flow, wealth = stock. Absolute poverty = fixed line; relative = share of median. Gini 0-1 measures inequality.",
      sections: [
        { heading: "Key distinction", body: "Income and wealth are different: flows vs stocks, and wealth is more unequally distributed." },
        { heading: "Poverty types", body: "Absolute poverty uses a fixed minimum; relative poverty uses a share (often 60%) of median income." },
        { heading: "Measuring inequality", body: "Lorenz curve + Gini coefficient (0 = equality, 1 = inequality); quintiles split households into fifths." },
      ],
    },
  },
  {
    file: "lesson-12-2.ts", exportName: "lesson122",
    lesson: {
      id: "ecn11-u12-lesson-12-2", code: "12-2",
      title: "Causes of Inequality",
      goal: "I CAN explain the economic and social causes of income and wealth inequality.",
      standards: [
        "Edexcel IGCSE Economics 4EC1 — Understanding markets and market failure",
        "4EC1: distribution of income and poverty",
      ],
      vocabulary: [
        { term: "Factor incomes", definition: "Payments to factors of production: wages, profit, rent, interest." },
        { term: "Human capital", definition: "Skills, qualifications and health that raise a worker's earning power." },
        { term: "Inherited wealth", definition: "Assets passed down through generations, widening wealth gaps." },
        { term: "Social mobility", definition: "Movement of individuals or families between income or social groups." },
        { term: "Discrimination", definition: "Unfair treatment in pay or employment based on characteristics such as gender or ethnicity." },
        { term: "Equity-efficiency trade-off", definition: "The tension between reducing inequality and maintaining incentives for effort." },
      ],
      concepts: [
        {
          id: "ecn11-u12-factors",
          title: "Factor incomes and human capital",
          skill: "Explain how factor incomes, skills and inheritance create income and wealth differences.",
          sections: [
            {
              heading: "Sources of factor income",
              body: "People earn **factor incomes**: wages for labour, profit for entrepreneurship, rent for land and interest for capital. Earnings differ because people own different quantities and qualities of factors. A surgeon's labour commands high wages because of scarce, high-value skills; a landlord's land earns rent; a shareholder earns dividends.",
            },
            {
              heading: "Human capital, discrimination and inheritance",
              body: "**Human capital** — education, training, health and experience — raises labour productivity and wages. Those who can invest in human capital earn more over their lives. **Discrimination** in pay and employment (by gender, ethnicity, disability) creates unjustified pay gaps. **Inherited wealth** — property, savings, businesses passed down — means some start life with assets that generate income, compounding inequality across generations.",
            },
          ],
          keyFormulas: [],
          workedExample: {
            problem: "Two graduates start work: one has a degree and family savings, the other left school at 16. Explain likely income differences after 10 years.",
            solution: "The graduate has higher human capital (degree) → higher-paying job; family savings may fund further training or a deposit → compounding advantage.",
          },
          questions: [
            {
              id: "ecn11-u12-factors-q1", difficulty: "foundation", totalMarks: 2,
              stem: "Which of the following is a factor income?",
              response: {
                type: "mcq",
                choices: [
                  { id: "a", text: "A gift from a relative" },
                  { id: "b", text: "Wages from employment" },
                  { id: "c", text: "A lottery win" },
                  { id: "d", text: "A benefit payment" },
                ],
                correctChoiceId: "b",
              },
              markscheme: {
                principles: [
                  { kind: "definition", name: "Factor incomes", statement: "Wages, profit, rent, interest." },
                ],
                steps: [
                  { reasoning: "Factor incomes pay for factors of production: wages, profit, rent, interest.", marks: 2, markCode: "AO1" },
                ],
                finalAnswer: "**(b)** Wages from employment",
                commonErrors: ["Including transfers like benefits as factor income."],
              },
            },
            {
              id: "ecn11-u12-factors-q2", difficulty: "foundation", totalMarks: 2,
              stem: "What is human capital?",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "definition", name: "Human capital", statement: "Skills, qualifications and health that raise earning power." },
                ],
                steps: [
                  { reasoning: "Skills, qualifications, training, experience and health embodied in a worker.", marks: 1, markCode: "AO1" },
                  { reasoning: "Raises productivity and therefore wages.", marks: 1, markCode: "AO1" },
                ],
                finalAnswer: "Workers' skills, qualifications and health that raise earnings.",
                commonErrors: ["Confusing with physical capital (machinery)."],
              },
            },
            {
              id: "ecn11-u12-factors-q3", difficulty: "core", totalMarks: 3,
              stem: "Explain how inherited wealth can widen the gap between rich and poor households.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "principle", name: "Inherited wealth", statement: "Assets passed down generate income and opportunity." },
                ],
                steps: [
                  { reasoning: "Wealthy families pass on assets: property, savings, businesses.", marks: 1, markCode: "AO2" },
                  { reasoning: "Assets generate income (rent, interest, dividends) without work.", marks: 1, markCode: "AO2" },
                  { reasoning: "Assets fund education and deposits, giving children a head start — compounding over generations.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "Inherited assets earn income and fund opportunities, compounding advantage across generations.",
                commonErrors: ["Treating inheritance as a one-off payment only."],
              },
            },
            {
              id: "ecn11-u12-factors-q4", difficulty: "challenge", totalMarks: 5,
              stem: "Explain three causes of income inequality in a modern economy.",
              parts: [
                { label: "a", prompt: "Cause 1: differences in human capital.", marks: 2 },
                { label: "b", prompt: "Cause 2: discrimination in the labour market.", marks: 2 },
                { label: "c", prompt: "Cause 3: ownership of wealth-generating assets.", marks: 1 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "principle", name: "Causes of inequality", statement: "Human capital, discrimination, asset ownership." },
                ],
                steps: [
                  { reasoning: "(a) Education/training differences raise productivity and wages for some.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(b) Unequal pay or hiring by gender/ethnicity creates unjustified gaps.", marks: 2, markCode: "AO2", part: "b" },
                  { reasoning: "(c) Owning property, shares or businesses generates rent, interest, dividends.", marks: 1, markCode: "AO2", part: "c" },
                ],
                finalAnswer: "(a) human capital (b) discrimination (c) asset ownership",
                commonErrors: ["Listing causes without explaining the income mechanism."],
              },
            },
            {
              id: "ecn11-u12-factors-q5", difficulty: "challenge", totalMarks: 6,
              stem: "A country introduces free university education. Analyse how this might affect income inequality over time.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "principle", name: "Human capital investment", statement: "Wider access to education can reduce inequality." },
                ],
                steps: [
                  { reasoning: "More people gain qualifications → higher human capital.", marks: 2, markCode: "AO2" },
                  { reasoning: "Wider access especially helps lower-income groups who previously could not afford degrees.", marks: 2, markCode: "AO2" },
                  { reasoning: "Over time, earnings of poorer households may rise faster → inequality may fall.", marks: 1, markCode: "AO3" },
                  { reasoning: "Caveat: benefits may take years and depend on job availability.", marks: 1, markCode: "AO3" },
                ],
                finalAnswer: "Raises human capital for poorer groups; inequality may fall over time, though with a lag.",
                commonErrors: ["Ignoring the time lag or funding cost."],
              },
            },
            {
              id: "ecn11-u12-factors-q6", difficulty: "challenge", totalMarks: 8,
              stem: "Answer all parts.",
              parts: [
                { label: "a", prompt: "Name the four factors of production and the factor income paid for each.", marks: 4 },
                { label: "b", prompt: "Define human capital and give two examples.", marks: 2 },
                { label: "c", prompt: "Explain why two workers with the same job title might earn different wages.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "technique", name: "Factor incomes", statement: "FOF incomes, human capital, wage differentials." },
                ],
                steps: [
                  { reasoning: "(a) Land→rent, labour→wages, capital→interest, enterprise→profit.", marks: 4, markCode: "AO1", part: "a" },
                  { reasoning: "(b) Skills/qualifications/health; examples: degree, apprenticeships, experience.", marks: 2, markCode: "AO1", part: "b" },
                  { reasoning: "(c) Differences in skills, experience, location, discrimination or bargaining power.", marks: 2, markCode: "AO2", part: "c" },
                ],
                finalAnswer: "(a) land/rent, labour/wages, capital/interest, enterprise/profit (b) skills (c) skill/experience/location gaps",
                commonErrors: ["Mismatching factors and incomes."],
              },
            },
          ],
        },
        {
          id: "ecn11-u12-outcomes",
          title: "Inequality and economic outcomes",
          skill: "Evaluate the relationship between inequality, growth, efficiency and social mobility.",
          sections: [
            {
              heading: "The equity-efficiency trade-off",
              body: "Policies that reduce inequality (higher taxes on the rich, generous benefits) may reduce incentives to work, save and invest — potentially lowering **efficiency** and growth. This is the **equity-efficiency trade-off**. Conversely, high inequality may also harm growth: the poor spend a larger share of income, inequality can fuel social unrest and crime, and talented people from poor backgrounds may lack opportunities. Economists disagree on which effect dominates.",
            },
            {
              heading: "Inequality and social mobility",
              body: "**Social mobility** is movement between income groups across generations. High inequality can lower mobility: wealthy families buy better schooling and connections, while poor children lack networks and finance. Low mobility entrenches inequality ('the poor stay poor'). Policies that widen access to education and finance aim to raise mobility, breaking the link between parents' and children's incomes.",
            },
          ],
          keyFormulas: [],
          workedExample: {
            problem: "A country cuts top tax rates to reward effort. Evaluate the likely effect on growth and inequality.",
            solution: "Inequality may rise (higher after-tax incomes for the rich); incentives and possibly investment/growth may rise — an equity-efficiency trade-off.",
          },
          questions: [
            {
              id: "ecn11-u12-outcomes-q1", difficulty: "foundation", totalMarks: 2,
              stem: "What is the equity-efficiency trade-off?",
              response: {
                type: "mcq",
                choices: [
                  { id: "a", text: "A choice between two efficient firms" },
                  { id: "b", text: "The tension between reducing inequality and maintaining incentives" },
                  { id: "c", text: "A trade deal between two countries" },
                  { id: "d", text: "Balancing exports and imports" },
                ],
                correctChoiceId: "b",
              },
              markscheme: {
                principles: [
                  { kind: "definition", name: "Equity-efficiency trade-off", statement: "Equality aims vs incentive/efficiency aims." },
                ],
                steps: [
                  { reasoning: "Reducing inequality (equity) can weaken work/investment incentives (efficiency).", marks: 2, markCode: "AO1" },
                ],
                finalAnswer: "**(b)** Equity vs incentives tension",
                commonErrors: ["Confusing with international trade."],
              },
            },
            {
              id: "ecn11-u12-outcomes-q2", difficulty: "foundation", totalMarks: 2,
              stem: "What is social mobility?",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "definition", name: "Social mobility", statement: "Movement between income/social groups." },
                ],
                steps: [
                  { reasoning: "Movement of individuals/families up or down the income or social scale.", marks: 1, markCode: "AO1" },
                  { reasoning: "Often measured across generations (e.g. children's income vs parents').", marks: 1, markCode: "AO1" },
                ],
                finalAnswer: "Movement between income or social groups, often across generations.",
                commonErrors: ["Confusing with physical mobility."],
              },
            },
            {
              id: "ecn11-u12-outcomes-q3", difficulty: "core", totalMarks: 3,
              stem: "Explain how high inequality can reduce social mobility.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "principle", name: "Inequality and mobility", statement: "Wealth and opportunity entrench income groups." },
                ],
                steps: [
                  { reasoning: "Wealthy families can buy better education, healthcare and networks.", marks: 1, markCode: "AO2" },
                  { reasoning: "Poorer children lack finance for further education or business start-up.", marks: 1, markCode: "AO2" },
                  { reasoning: "Children tend to stay in their parents' income group — low mobility entrenches inequality.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "Unequal access to opportunity keeps children in their parents' income group.",
                commonErrors: ["No mechanism linking inequality to mobility."],
              },
            },
            {
              id: "ecn11-u12-outcomes-q4", difficulty: "challenge", totalMarks: 5,
              stem: "A government raises taxes on high earners to fund education for low-income students. Evaluate this policy.",
              parts: [
                { label: "a", prompt: "Explain one benefit for equity.", marks: 2 },
                { label: "b", prompt: "Explain one possible cost for efficiency.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "principle", name: "Redistribution trade-off", statement: "Equity gains vs incentive costs." },
                ],
                steps: [
                  { reasoning: "(a) Transfers resources to poorer groups; funds education that raises their future earnings — reduces inequality.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(b) Higher taxes may reduce incentives for high earners to work, save or invest.", marks: 2, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Could reduce tax revenue if avoidance rises or effort falls — efficiency cost.", marks: 1, markCode: "AO3", part: "b" },
                ],
                finalAnswer: "(a) equity up via funded education (b) possible incentive/efficiency cost",
                commonErrors: ["One-sided evaluation with no trade-off."],
              },
            },
            {
              id: "ecn11-u12-outcomes-q5", difficulty: "challenge", totalMarks: 6,
              stem: "Some economists argue that inequality slows economic growth; others argue it rewards effort and encourages growth. Discuss both views.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "comparison", name: "Inequality and growth", statement: "Two opposing views on the inequality-growth link." },
                ],
                steps: [
                  { reasoning: "View 1 (inequality harms growth): poor households spend more of income → demand; inequality may cause unrest/crime and block talent.", marks: 2, markCode: "AO2" },
                  { reasoning: "View 2 (inequality helps growth): rewards effort and enterprise; high savers can invest; incentives boost productivity.", marks: 2, markCode: "AO2" },
                  { reasoning: "Evidence is mixed — the relationship depends on how inequality is measured and the context.", marks: 1, markCode: "AO3" },
                  { reasoning: "Conclusion: both mechanisms exist; policy must balance equity and incentives.", marks: 1, markCode: "AO3" },
                ],
                finalAnswer: "Inequality can harm demand/mobility or reward incentives — evidence is mixed.",
                commonErrors: ["One-sided answer; no evaluation."],
              },
            },
            {
              id: "ecn11-u12-outcomes-q6", difficulty: "challenge", totalMarks: 9,
              stem: "Answer all parts.",
              parts: [
                { label: "a", prompt: "Define social mobility and state why it matters for inequality.", marks: 2 },
                { label: "b", prompt: "Explain the equity-efficiency trade-off.", marks: 2 },
                { label: "c", prompt: "Give one way inequality might reduce economic growth.", marks: 2 },
                { label: "d", prompt: "Give one way inequality might increase economic growth.", marks: 2 },
                { label: "e", prompt: "Suggest one policy that could raise social mobility.", marks: 1 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "technique", name: "Inequality and outcomes", statement: "Mobility, trade-offs, growth links." },
                ],
                steps: [
                  { reasoning: "(a) Movement between income groups; low mobility entrenches inequality.", marks: 2, markCode: "AO1", part: "a" },
                  { reasoning: "(b) Equality policies may weaken incentives needed for efficient allocation.", marks: 2, markCode: "AO1", part: "b" },
                  { reasoning: "(c) e.g. poor spend less on investment; unrest/crime; wasted talent.", marks: 2, markCode: "AO2", part: "c" },
                  { reasoning: "(d) e.g. rewards effort/enterprise; high savers invest more.", marks: 2, markCode: "AO2", part: "d" },
                  { reasoning: "(e) e.g. subsidised education, apprenticeships, childcare support.", marks: 1, markCode: "AO3", part: "e" },
                ],
                finalAnswer: "(a) movement/groups (b) equity vs incentives (c)-(d) growth links (e) education policy",
                commonErrors: ["Mixing up equity and efficiency arguments."],
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "ecn11-u12-factors-notes", title: "Causes of inequality — notes",
      summary: "Factor incomes, human capital, discrimination and inheritance drive inequality; it interacts with growth, mobility and the equity-efficiency trade-off.",
      sections: [
        { heading: "Factor incomes", body: "Wages, profit, rent, interest — people earn differently because they own different factors and skills." },
        { heading: "Key drivers", body: "Human capital (education/health), discrimination, inherited wealth and assets compound over time." },
        { heading: "Trade-offs", body: "Inequality can harm demand and mobility, or reward incentives — the equity-efficiency trade-off." },
      ],
    },
  },
  {
    file: "lesson-12-3.ts", exportName: "lesson123",
    lesson: {
      id: "ecn11-u12-lesson-12-3", code: "12-3",
      title: "Redistribution and Government Policy",
      goal: "I CAN explain how governments redistribute income and evaluate the effects of redistribution policies.",
      standards: [
        "Edexcel IGCSE Economics 4EC1 — Understanding markets and market failure",
        "4EC1: government intervention and redistribution",
      ],
      vocabulary: [
        { term: "Progressive tax", definition: "A tax taking a larger percentage of income from higher earners." },
        { term: "Regressive tax", definition: "A tax taking a larger share of income from lower earners." },
        { term: "Direct tax", definition: "A tax on income or wealth, e.g. income tax, corporation tax." },
        { term: "Indirect tax", definition: "A tax on spending, e.g. VAT, excise duties." },
        { term: "Transfer payment", definition: "A payment from government to households with no goods or services received in return." },
        { term: "Targeting", definition: "Designing benefits to reach only those who need them." },
      ],
      concepts: [
        {
          id: "ecn11-u12-redistpol",
          title: "Redistribution policies",
          skill: "Explain progressive taxation, benefits and transfer payments as redistribution tools.",
          sections: [
            {
              heading: "Progressive taxation",
              body: "**Direct taxes** like income tax can be **progressive**: higher earners pay a larger percentage of their income. The revenue funds public services and transfers, reducing post-tax inequality. Corporation tax and capital gains tax can also be progressive. However, very high rates may create **disincentives** — reducing effort, investment or encouraging tax avoidance.",
            },
            {
              heading: "Benefits and indirect taxes",
              body: "**Transfer payments** (cash benefits such as unemployment benefit, child benefit, pensions) raise the incomes of poorer households directly. **Indirect taxes** like VAT are generally **regressive**: the same rate hits low earners harder because they spend a larger share of income on taxed goods. Governments can reduce regressivity by exempting basic goods or combining indirect taxes with progressive direct taxes and targeted benefits.",
            },
          ],
          keyFormulas: [
            { name: "Progressive tax", statement: "Tax share rises with income" },
            { name: "Regressive tax", statement: "Tax share falls as income rises (e.g. flat indirect taxes)" },
          ],
          workedExample: {
            problem: "Two workers each pay 20% VAT on £100 of spending. Worker A earns £1,000/month; Worker B earns £3,000/month. Who bears the heavier burden?",
            solution: "Each pays £20 VAT. For A it is 2% of income; for B only 0.67% — VAT is regressive.",
          },
          questions: [
            {
              id: "ecn11-u12-redistpol-q1", difficulty: "foundation", totalMarks: 2,
              stem: "What is a progressive tax?",
              response: {
                type: "mcq",
                choices: [
                  { id: "a", text: "A tax taking the same percentage from all earners" },
                  { id: "b", text: "A tax taking a larger percentage of income from higher earners" },
                  { id: "c", text: "A tax on goods and services" },
                  { id: "d", text: "A tax paid only by businesses" },
                ],
                correctChoiceId: "b",
              },
              markscheme: {
                principles: [
                  { kind: "definition", name: "Progressive tax", statement: "Higher earners pay a larger share." },
                ],
                steps: [
                  { reasoning: "Progressive = tax rate/share rises with income (e.g. income tax bands).", marks: 2, markCode: "AO1" },
                ],
                finalAnswer: "**(b)** Larger share from higher earners",
                commonErrors: ["Confusing with proportional tax."],
              },
            },
            {
              id: "ecn11-u12-redistpol-q2", difficulty: "foundation", totalMarks: 2,
              stem: "What is a transfer payment? Give one example.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "definition", name: "Transfer payment", statement: "Government payment with nothing received in return." },
                ],
                steps: [
                  { reasoning: "Payment from government to households; no goods or services received.", marks: 1, markCode: "AO1" },
                  { reasoning: "Example: unemployment benefit, state pension, child benefit.", marks: 1, markCode: "AO1" },
                ],
                finalAnswer: "Benefit-type payment, e.g. unemployment benefit.",
                commonErrors: ["Describing a payment for services (e.g. NHS is a service, not cash transfer)."],
              },
            },
            {
              id: "ecn11-u12-redistpol-q3", difficulty: "core", totalMarks: 3,
              stem: "Explain why indirect taxes such as VAT are considered regressive.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "principle", name: "Regressive taxation", statement: "Same tax rate hits poorer households harder." },
                ],
                steps: [
                  { reasoning: "VAT applies the same percentage rate to all consumers.", marks: 1, markCode: "AO2" },
                  { reasoning: "Low earners spend a larger share of income on taxed goods.", marks: 1, markCode: "AO2" },
                  { reasoning: "Therefore VAT takes a larger proportion of poor households' income.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "Flat rate on spending hits low incomes proportionally harder.",
                commonErrors: ["Saying VAT is progressive because rich spend more in absolute terms."],
              },
            },
            {
              id: "ecn11-u12-redistpol-q4", difficulty: "challenge", totalMarks: 5,
              stem: "Compare progressive direct taxes and regressive indirect taxes as methods of raising revenue.",
              parts: [
                { label: "a", prompt: "State one advantage of progressive direct taxes for redistribution.", marks: 2 },
                { label: "b", prompt: "State one disadvantage of indirect taxes for redistribution.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "comparison", name: "Direct vs indirect tax", statement: "Progressive equity vs regressive burden." },
                ],
                steps: [
                  { reasoning: "(a) Take a larger share from high earners → reduces post-tax inequality; fund services/benefits.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(b) Same rate on all spending → poorer households pay a larger share of income.", marks: 2, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Can worsen inequality unless mitigated (e.g. exemptions on essentials).", marks: 1, markCode: "AO3", part: "b" },
                ],
                finalAnswer: "(a) reduces post-tax inequality (b) burdens poorer households proportionally more",
                commonErrors: ["No distributional reasoning."],
              },
            },
            {
              id: "ecn11-u12-redistpol-q5", difficulty: "challenge", totalMarks: 6,
              stem: "A government wants to reduce poverty using cash benefits. Analyse two problems it might face.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "principle", name: "Benefit design problems", statement: "Targeting, disincentives and cost." },
                ],
                steps: [
                  { reasoning: "Means-testing/targeting is administratively complex and can create poverty traps.", marks: 2, markCode: "AO2" },
                  { reasoning: "Generous benefits may reduce incentives to work or increase hours — efficiency cost.", marks: 2, markCode: "AO2" },
                  { reasoning: "Universal benefits are simple but costly and may go to those not in need.", marks: 2, markCode: "AO3" },
                ],
                finalAnswer: "Targeting complexity/poverty traps; work disincentives; cost of universality.",
                commonErrors: ["Only one problem; no mechanism."],
              },
            },
            {
              id: "ecn11-u12-redistpol-q6", difficulty: "challenge", totalMarks: 9,
              stem: "Answer all parts.",
              parts: [
                { label: "a", prompt: "Define progressive and regressive taxes.", marks: 2 },
                { label: "b", prompt: "Give one example of each.", marks: 2 },
                { label: "c", prompt: "Explain what a transfer payment is and give one example.", marks: 2 },
                { label: "d", prompt: "State one way indirect taxes can be made less regressive.", marks: 1 },
                { label: "e", prompt: "Explain one possible disincentive effect of high income tax.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "technique", name: "Redistribution tools", statement: "Tax types, transfers, disincentives." },
                ],
                steps: [
                  { reasoning: "(a) Progressive = larger share from higher incomes; regressive = larger share from lower incomes.", marks: 2, markCode: "AO1", part: "a" },
                  { reasoning: "(b) Progressive e.g. income tax bands; regressive e.g. VAT.", marks: 2, markCode: "AO1", part: "b" },
                  { reasoning: "(c) Government payment with nothing received in return; e.g. unemployment benefit.", marks: 2, markCode: "AO1", part: "c" },
                  { reasoning: "(d) Exempt basic necessities or combine with progressive taxes/benefits.", marks: 1, markCode: "AO2", part: "d" },
                  { reasoning: "(e) High earners may work less, avoid tax or move abroad.", marks: 2, markCode: "AO2", part: "e" },
                ],
                finalAnswer: "(a) definitions (b) income tax/VAT (c) benefit (d) exemptions (e) less effort/avoidance",
                commonErrors: ["Confusing direct and indirect taxes."],
              },
            },
          ],
        },
        {
          id: "ecn11-u12-redisteval",
          title: "Evaluating redistribution",
          skill: "Evaluate redistribution policies in terms of equity, efficiency, poverty reduction and incentives.",
          sections: [
            {
              heading: "Benefits of redistribution",
              body: "Redistribution can **reduce poverty and inequality**, improving living standards for the poorest. It can fund **public services** (health, education) that benefit all, especially the disadvantaged. Lower inequality may improve **social cohesion** and reduce crime. Where benefits are **targeted**, resources reach those most in need.",
            },
            {
              heading: "Costs and limitations",
              body: "High taxes and generous benefits can create **disincentives** — people may work fewer hours, avoid taxes or leave the country. **Targeting** is costly to administer and can create **poverty traps** where earning more loses benefits. **Universal** benefits are simple but expensive. Redistribution funded by borrowing may increase the national debt; funded by indirect taxes may be regressive. Evaluation must weigh equity gains against efficiency losses.",
            },
          ],
          keyFormulas: [],
          workedExample: {
            problem: "A country raises income tax on top earners from 40% to 50% and spends the revenue on child benefits. Evaluate.",
            solution: "Equity improves (benefits for poor children, less inequality); risk: disincentives for high earners and possible tax avoidance.",
          },
          questions: [
            {
              id: "ecn11-u12-redisteval-q1", difficulty: "foundation", totalMarks: 2,
              stem: "What is the main equity argument for redistribution?",
              response: {
                type: "mcq",
                choices: [
                  { id: "a", text: "It always increases economic growth" },
                  { id: "b", text: "It reduces poverty and inequality" },
                  { id: "c", text: "It simplifies the tax system" },
                  { id: "d", text: "It eliminates the need for markets" },
                ],
                correctChoiceId: "b",
              },
              markscheme: {
                principles: [
                  { kind: "principle", name: "Equity case", statement: "Fairer distribution of income." },
                ],
                steps: [
                  { reasoning: "Redistribution narrows income gaps and lifts households above poverty lines.", marks: 2, markCode: "AO1" },
                ],
                finalAnswer: "**(b)** Reduces poverty and inequality",
                commonErrors: ["Claiming guaranteed growth."],
              },
            },
            {
              id: "ecn11-u12-redisteval-q2", difficulty: "foundation", totalMarks: 2,
              stem: "What is a disincentive effect of redistribution?",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "definition", name: "Disincentive", statement: "Reduced motivation to work, save or invest." },
                ],
                steps: [
                  { reasoning: "High taxes or benefit withdrawal can reduce the reward for extra effort.", marks: 1, markCode: "AO1" },
                  { reasoning: "People may work fewer hours, avoid tax or leave the labour force.", marks: 1, markCode: "AO1" },
                ],
                finalAnswer: "Weakened incentives to work, save or invest.",
                commonErrors: ["Describing an incentive instead."],
              },
            },
            {
              id: "ecn11-u12-redisteval-q3", difficulty: "core", totalMarks: 3,
              stem: "Explain what is meant by a poverty trap and how it relates to benefit design.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "principle", name: "Poverty trap", statement: "Earning more causes benefit loss, leaving people no better off." },
                ],
                steps: [
                  { reasoning: "As income rises, means-tested benefits are withdrawn.", marks: 1, markCode: "AO2" },
                  { reasoning: "Total income (earnings + benefits) may barely rise or even fall.", marks: 1, markCode: "AO2" },
                  { reasoning: "People are trapped near the poverty line — a disincentive to work more.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "Benefit withdrawal can leave workers barely better off, discouraging extra work.",
                commonErrors: ["Confusing with absolute poverty."],
              },
            },
            {
              id: "ecn11-u12-redisteval-q4", difficulty: "challenge", totalMarks: 5,
              stem: "Evaluate a policy of raising income tax to fund more generous unemployment benefits.",
              parts: [
                { label: "a", prompt: "Explain one equity benefit.", marks: 2 },
                { label: "b", prompt: "Explain one efficiency cost.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "principle", name: "Policy evaluation", statement: "Equity gains vs incentive and cost effects." },
                ],
                steps: [
                  { reasoning: "(a) Higher benefits protect unemployed households from poverty; funded by progressive tax reduces inequality.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(b) Higher taxes may reduce incentives to work and invest; generous benefits may reduce job-search effort.", marks: 2, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Cost: higher government spending may require borrowing or higher taxes elsewhere.", marks: 1, markCode: "AO3", part: "b" },
                ],
                finalAnswer: "(a) protects poor/unemployed, less inequality (b) weaker incentives, fiscal cost",
                commonErrors: ["Only listing benefits or only costs."],
              },
            },
            {
              id: "ecn11-u12-redisteval-q5", difficulty: "challenge", totalMarks: 6,
              stem: "Compare targeted benefits with universal benefits for reducing poverty.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "comparison", name: "Targeted vs universal", statement: "Efficiency of targeting vs simplicity of universality." },
                ],
                steps: [
                  { reasoning: "Targeted benefits direct resources to those in need — more cost-effective, less waste.", marks: 2, markCode: "AO2" },
                  { reasoning: "But targeting needs means-testing — administratively costly and can create poverty traps/stigma.", marks: 2, markCode: "AO2" },
                  { reasoning: "Universal benefits are simple and avoid stigma but cost more and may reach non-poor.", marks: 2, markCode: "AO3" },
                ],
                finalAnswer: "Targeted = efficient but complex/trappy; universal = simple but costly.",
                commonErrors: ["No comparison — describing only one type."],
              },
            },
            {
              id: "ecn11-u12-redisteval-q6", difficulty: "challenge", totalMarks: 10,
              stem: "Answer all parts.",
              parts: [
                { label: "a", prompt: "Give two equity benefits of redistribution.", marks: 2 },
                { label: "b", prompt: "Give two efficiency costs of redistribution.", marks: 2 },
                { label: "c", prompt: "Explain what targeting means and one problem with it.", marks: 2 },
                { label: "d", prompt: "Explain one way redistribution can affect social cohesion.", marks: 2 },
                { label: "e", prompt: "Reach a supported judgement: is redistribution worth its costs? Justify.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "technique", name: "Evaluating redistribution", statement: "Equity, efficiency, targeting, judgement." },
                ],
                steps: [
                  { reasoning: "(a) Less poverty/inequality; better access to services for the poor.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(b) Weaker work/investment incentives; administrative cost and possible avoidance.", marks: 2, markCode: "AO2", part: "b" },
                  { reasoning: "(c) Aiming benefits at those in need; problem = poverty traps or admin cost.", marks: 2, markCode: "AO2", part: "c" },
                  { reasoning: "(d) Can reduce resentment/raise cohesion if seen as fair; or resentment if seen as rewarding idleness.", marks: 2, markCode: "AO3", part: "d" },
                  { reasoning: "(e) Supported judgement weighing equity gains vs incentive costs — either way justified.", marks: 2, markCode: "AO3", part: "e" },
                ],
                finalAnswer: "Balanced evaluation: equity gains vs incentive/admin costs; justified judgement.",
                commonErrors: ["No judgement; one-sided evaluation."],
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "ecn11-u12-redistpol-notes", title: "Redistribution — notes",
      summary: "Progressive taxes + benefits redistribute income; evaluate equity gains against incentive, targeting and cost problems.",
      sections: [
        { heading: "Tools", body: "Progressive direct taxes, transfer payments; indirect taxes tend to be regressive." },
        { heading: "Evaluation", body: "Equity gains vs disincentives, poverty traps, admin costs and fiscal burden." },
        { heading: "Judgement", body: "Worth it depends on design — targeting and taper rates matter." },
      ],
    },
  },
];
