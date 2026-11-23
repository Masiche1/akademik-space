module.exports = [
  {
    file: "lesson-5-1.ts", exportName: "lesson51",
    lesson: {
      id: "ecn10-u5-lesson-5-1", code: "5-1",
      title: "Measuring Poverty and Inequality",
      goal: "I CAN define and measure poverty and inequality and explain their causes.",
      standards: ["Edexcel IGCSE Economics 4EC1 — Government and the Economy: poverty and inequality"],
      vocabulary: [
        { term: "Absolute poverty", definition: "Lacking the basic necessities needed to survive — food, shelter, clean water." },
        { term: "Relative poverty", definition: "Living below a chosen standard of living relative to the average in society." },
        { term: "Poverty line", definition: "The minimum income level set as the threshold for poverty." },
        { term: "Income inequality", definition: "Unequal distribution of income across households." },
        { term: "Wealth inequality", definition: "Unequal distribution of assets such as property and savings." },
        { term: "Gini coefficient", definition: "A measure of inequality ranging from 0 (perfect equality) to 1 (perfect inequality)." },
      ],
      concepts: [
        {
          id: "ecn10-u5-pov",
          title: "Poverty",
          skill: "Distinguish absolute from relative poverty and explain how poverty is measured.",
          sections: [
            {
              heading: "Absolute poverty",
              body: "**Absolute poverty** means lacking the minimum resources needed for basic survival — food, clean water, shelter, clothing. It is measured against a fixed **poverty line**, often set near the World Bank's $2.15 per day international line. Absolute poverty can be compared across countries and over time.",
            },
            {
              heading: "Relative poverty",
              body: "**Relative poverty** means living below the standard of living considered normal in a particular society — e.g. below 60% of median household income. It exists even in rich countries and falls as average incomes rise. Relative poverty measures inequality as much as deprivation.",
            },
            {
              heading: "Measuring poverty",
              body: "Poverty is measured by **headcount ratio** (percentage below the line), **poverty gap** (how far below the line people are), and **Poverty and Social Exclusion index** in the EU. In developing countries, lack of access to services and assets is also measured alongside income.",
            },
          ],
          keyFormulas: [
            { name: "Absolute poverty", statement: "Below fixed survival minimum (e.g. $2.15/day)" },
            { name: "Relative poverty", statement: "Below a share of median income (e.g. 60%)" },
            { name: "Headcount ratio", statement: "Percentage of population below the poverty line" },
          ],
          workedExample: {
            problem: "Country A has 20% of its population below $2.15/day; Country B has 5% below 60% of median income. Which has more absolute poverty?",
            solution: "Cannot compare directly — different measures. Country A's figure is absolute; B's is relative. Both indicate significant poverty.",
          },
          questions: [
            {
              id: "ecn10-u5-pov-q1", difficulty: "foundation", totalMarks: 2,
              stem: "What is absolute poverty?",
              response: { type: "mcq", choices: [
                { id: "a", text: "Living below 60% of median income" },
                { id: "b", text: "Lacking the basic necessities needed to survive" },
                { id: "c", text: "Earning less than the average worker" },
                { id: "d", text: "Being unemployed for one year" },
              ], correctChoiceId: "b" },
              markscheme: {
                principles: [{ kind: "definition", name: "Absolute poverty", statement: "Below fixed survival minimum." }],
                steps: [{ reasoning: "Absolute = fixed survival standard, not relative to others.", marks: 2, markCode: "AO1" }],
                finalAnswer: "**(b)** Lacking basic necessities",
                commonErrors: ["Confusing with relative poverty."],
              },
            },
            {
              id: "ecn10-u5-pov-q2", difficulty: "foundation", totalMarks: 3,
              stem: "Distinguish between absolute and relative poverty.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "comparison", name: "Absolute vs relative poverty", statement: "Absolute = survival minimum; relative = below society's standard." }],
                steps: [
                  { reasoning: "Absolute poverty uses a fixed minimum for survival.", marks: 1, markCode: "AO1" },
                  { reasoning: "Relative poverty uses a share of average/median income.", marks: 1, markCode: "AO1" },
                  { reasoning: "Relative poverty can exist in rich countries; absolute is about survival.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "Absolute = survival minimum; relative = below societal standard.",
                commonErrors: ["Treating them as the same thing."],
              },
            },
            {
              id: "ecn10-u5-pov-q3", difficulty: "core", totalMarks: 4,
              stem: "Explain two ways poverty can be measured.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "skill", name: "Poverty measurement", statement: "Headcount, poverty gap, income thresholds." }],
                steps: [
                  { reasoning: "Headcount ratio — percentage of population below the poverty line.", marks: 1, markCode: "AO2" },
                  { reasoning: "Poverty gap — average shortfall below the line.", marks: 1, markCode: "AO2" },
                  { reasoning: "Income thresholds — absolute ($/day) or relative (% of median).", marks: 1, markCode: "AO2" },
                  { reasoning: "Non-income measures — access to services, assets, nutrition.", marks: 1, markCode: "AO3" },
                ],
                finalAnswer: "Headcount, poverty gap, income thresholds, non-income indicators.",
                commonErrors: ["Listing only one measure."],
              },
            },
            {
              id: "ecn10-u5-pov-q4", difficulty: "challenge", totalMarks: 6,
              stem: "A country's average income rises by 10% but inequality also rises.",
              parts: [
                { label: "a", prompt: "Explain what happens to absolute poverty.", marks: 3 },
                { label: "b", prompt: "Explain what happens to relative poverty.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Poverty types", statement: "Absolute depends on the fixed line; relative depends on distribution." }],
                steps: [
                  { reasoning: "(a) Absolute poverty likely falls — incomes rise above the fixed line.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Unless gains go only to the already-rich.", marks: 1, markCode: "AO3", part: "a" },
                  { reasoning: "(b) Relative poverty may rise — the median rises faster than the poor.", marks: 2, markCode: "AO2", part: "b" },
                  { reasoning: "(b) More households fall below the relative threshold.", marks: 1, markCode: "AO2", part: "b" },
                ],
                finalAnswer: "(a) absolute likely falls (b) relative may rise with inequality",
                commonErrors: ["Assuming both move together."],
              },
            },
            {
              id: "ecn10-u5-pov-q5", difficulty: "challenge", totalMarks: 8,
              stem: "A developing country has 40% of its population in absolute poverty.",
              parts: [
                { label: "a", prompt: "Explain two consequences of such high absolute poverty for the economy.", marks: 4 },
                { label: "b", prompt: "Explain why measuring poverty matters for policy.", marks: 4 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Poverty consequences", statement: "Poverty reduces productivity, human capital and demand." }],
                steps: [
                  { reasoning: "(a) Malnutrition and illness reduce worker productivity.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Poor households cannot invest in education or assets — low human capital.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(b) Measurement shows where poverty is concentrated and how deep it is.", marks: 2, markCode: "AO2", part: "b" },
                  { reasoning: "(b) It allows targeting of aid and evaluation of policy success.", marks: 2, markCode: "AO3", part: "b" },
                ],
                finalAnswer: "(a) low productivity, low human capital (b) targeting and evaluation",
                commonErrors: ["No link between measurement and policy."],
              },
            },
            {
              id: "ecn10-u5-pov-q6", difficulty: "challenge", totalMarks: 10,
              stem: "Two countries both report 15% poverty — one using absolute, one using relative measures.",
              parts: [
                { label: "a", prompt: "Explain the difference between the two measures.", marks: 3 },
                { label: "b", prompt: "Explain why the same percentage can hide very different realities.", marks: 4 },
                { label: "c", prompt: "Evaluate which measure is more useful for a rich country.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "comparison", name: "Poverty measures", statement: "Absolute measures survival; relative measures inequality." }],
                steps: [
                  { reasoning: "(a) Absolute = below a fixed survival minimum.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Relative = below a share of median income in that society.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) The thresholds are completely different.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(b) In a rich country, relative poverty may mean decent living standards.", marks: 2, markCode: "AO3", part: "b" },
                  { reasoning: "(b) In a poor country, absolute poverty means survival deprivation.", marks: 2, markCode: "AO3", part: "b" },
                  { reasoning: "(c) Relative is more useful for rich countries — it captures social exclusion.", marks: 2, markCode: "AO3", part: "c" },
                  { reasoning: "(c) But absolute still matters for the most deprived — use both.", marks: 1, markCode: "AO3", part: "c" },
                ],
                finalAnswer: "(a) fixed vs relative threshold (b) context differs (c) relative for rich countries, but use both",
                commonErrors: ["Treating the percentages as comparable."],
              },
            },
          ],
        },
        {
          id: "ecn10-u5-ineq",
          title: "Inequality",
          skill: "Explain income and wealth inequality and how they are measured.",
          sections: [
            {
              heading: "Income vs wealth inequality",
              body: "**Income inequality** = unequal flows of earnings per period. **Wealth inequality** = unequal stocks of assets — property, savings, investments. Wealth inequality is typically much greater than income inequality because assets accumulate over time and are inherited.",
            },
            {
              heading: "Measuring inequality",
              body: "The **Gini coefficient** summarises inequality in one number: 0 = perfect equality, 1 = perfect inequality. The **Lorenz curve** plots cumulative income share against cumulative population share — further from the line of equality means more inequality. **Income shares** (top 10% earn X%) are also used.",
            },
            {
              heading: "Causes of inequality",
              body: "Differences in **education and skills**, **inheritance of wealth**, **discrimination**, **market power** (ceo pay, monopoly profits), **globalisation** (skilled wages rise, unskilled fall), and **tax and benefit systems** which can reduce or reinforce inequality.",
            },
          ],
          keyFormulas: [
            { name: "Gini coefficient", statement: "0 = perfect equality, 1 = perfect inequality" },
            { name: "Lorenz curve", statement: "Cumulative income share vs cumulative population share" },
          ],
          workedExample: {
            problem: "Country X has a Gini of 0.25; Country Y has 0.45. Which is more unequal and why does it matter?",
            solution: "Y is more unequal. Higher inequality can reduce social mobility and, at extremes, social cohesion and demand.",
          },
          questions: [
            {
              id: "ecn10-u5-ineq-q1", difficulty: "foundation", totalMarks: 2,
              stem: "What does the Gini coefficient measure?",
              response: { type: "mcq", choices: [
                { id: "a", text: "Average income" },
                { id: "b", text: "The poverty rate" },
                { id: "c", text: "The degree of income inequality" },
                { id: "d", text: "Government spending" },
              ], correctChoiceId: "c" },
              markscheme: {
                principles: [{ kind: "definition", name: "Gini coefficient", statement: "Measure of inequality, 0 to 1." }],
                steps: [{ reasoning: "Gini summarises income distribution inequality.", marks: 2, markCode: "AO1" }],
                finalAnswer: "**(c)** Degree of income inequality",
                commonErrors: ["Confusing with GDP or poverty rate."],
              },
            },
            {
              id: "ecn10-u5-ineq-q2", difficulty: "foundation", totalMarks: 3,
              stem: "Distinguish between income inequality and wealth inequality.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "comparison", name: "Income vs wealth", statement: "Income = flow; wealth = stock of assets." }],
                steps: [
                  { reasoning: "Income inequality = unequal earnings per period.", marks: 1, markCode: "AO1" },
                  { reasoning: "Wealth inequality = unequal assets — property, savings, investments.", marks: 1, markCode: "AO1" },
                  { reasoning: "Wealth inequality is usually greater because assets accumulate and are inherited.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "Income = flow; wealth = stock; wealth inequality typically larger.",
                commonErrors: ["Treating income and wealth as identical."],
              },
            },
            {
              id: "ecn10-u5-ineq-q3", difficulty: "core", totalMarks: 4,
              stem: "Explain how the Lorenz curve is used to show inequality.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "skill", name: "Lorenz curve", statement: "Plots cumulative income share vs cumulative population." }],
                steps: [
                  { reasoning: "X-axis = cumulative share of population, poorest to richest.", marks: 1, markCode: "AO2" },
                  { reasoning: "Y-axis = cumulative share of income.", marks: 1, markCode: "AO2" },
                  { reasoning: "The line of equality shows what perfect equality would look like.", marks: 1, markCode: "AO2" },
                  { reasoning: "The further the curve bows below the line, the greater the inequality.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "Curve further from equality line = more inequality.",
                commonErrors: ["Reversing the axes or the meaning of distance."],
              },
            },
            {
              id: "ecn10-u5-ineq-q4", difficulty: "challenge", totalMarks: 6,
              stem: "A country's Gini coefficient rises from 0.30 to 0.38 over a decade.",
              parts: [
                { label: "a", prompt: "Explain what the change means.", marks: 3 },
                { label: "b", prompt: "Give two possible causes of the rise.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Inequality trend", statement: "Higher Gini = greater inequality." }],
                steps: [
                  { reasoning: "(a) Inequality has increased — income is more concentrated at the top.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Still below 1, so not extreme, but worsening.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(b) Skill-biased technical change raises wages for the skilled.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Weaker redistribution — lower progressive taxes or benefits.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Globalisation and declining union power also contribute.", marks: 1, markCode: "AO2", part: "b" },
                ],
                finalAnswer: "(a) inequality rose (b) skills, weaker redistribution, globalisation",
                commonErrors: ["Saying Gini of 0.38 means perfect inequality."],
              },
            },
            {
              id: "ecn10-u5-ineq-q5", difficulty: "challenge", totalMarks: 8,
              stem: "Wealth inequality is much higher than income inequality in most countries.",
              parts: [
                { label: "a", prompt: "Explain why wealth inequality tends to exceed income inequality.", marks: 4 },
                { label: "b", prompt: "Explain one consequence of high wealth inequality.", marks: 4 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Wealth accumulation", statement: "Assets compound and are inherited." }],
                steps: [
                  { reasoning: "(a) Wealth accumulates over a lifetime — savings and property grow.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Wealth is inherited, giving some a head start.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(b) High wealth inequality can limit social mobility.", marks: 2, markCode: "AO2", part: "b" },
                  { reasoning: "(b) It can concentrate economic and political power.", marks: 2, markCode: "AO3", part: "b" },
                ],
                finalAnswer: "(a) accumulation and inheritance (b) limited mobility, concentrated power",
                commonErrors: ["Confusing stocks and flows."],
              },
            },
            {
              id: "ecn10-u5-ineq-q6", difficulty: "challenge", totalMarks: 10,
              stem: "A government wants to reduce income inequality.",
              parts: [
                { label: "a", prompt: "Explain two policies that could reduce income inequality.", marks: 4 },
                { label: "b", prompt: "Explain one reason reducing inequality might be difficult.", marks: 3 },
                { label: "c", prompt: "Evaluate whether reducing inequality should be a priority.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Redistribution", statement: "Taxes and benefits can reduce inequality but may affect incentives." }],
                steps: [
                  { reasoning: "(a) More progressive taxation takes proportionally more from high earners.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Higher benefits and tax credits raise incomes at the bottom.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(b) High earners may work less or move abroad if taxed heavily.", marks: 2, markCode: "AO3", part: "b" },
                  { reasoning: "(b) Wealth inequality is harder to reduce than income inequality.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(c) Some inequality rewards effort and enterprise — zero inequality is not the goal.", marks: 2, markCode: "AO3", part: "c" },
                  { reasoning: "(c) But extreme inequality harms cohesion and opportunity — balance needed.", marks: 1, markCode: "AO3", part: "c" },
                ],
                finalAnswer: "(a) progressive tax, benefits (b) incentives, wealth (c) reduce extremes but keep incentives",
                commonErrors: ["No evaluation of trade-offs."],
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "ecn10-u5-pov-notes", title: "Poverty and inequality — notes",
      summary: "Absolute poverty = survival minimum; relative poverty = below societal standard; Gini measures inequality.",
      sections: [
        { heading: "Key idea", body: "Absolute poverty is fixed; relative poverty rises with average incomes — they measure different things." },
        { heading: "Measurement", body: "Headcount, poverty gap, Gini coefficient and Lorenz curve are the main tools." },
        { heading: "Causes", body: "Skills, inheritance, discrimination, market power, globalisation and tax/benefit systems." },
      ],
    },
  },
  {
    file: "lesson-5-2.ts", exportName: "lesson52",
    lesson: {
      id: "ecn10-u5-lesson-5-2", code: "5-2",
      title: "Causes and Consequences of Poverty",
      goal: "I CAN explain why poverty persists and evaluate its consequences for individuals and the economy.",
      standards: ["Edexcel IGCSE Economics 4EC1 — Government and the Economy: poverty"],
      vocabulary: [
        { term: "Vicious circle of poverty", definition: "A self-reinforcing cycle where poverty causes conditions that reproduce poverty." },
        { term: "Poverty trap", definition: "A situation where low income prevents escape from poverty." },
        { term: "Human capital", definition: "The skills, education and health of workers that determine productivity." },
        { term: "Social exclusion", definition: "Being unable to participate fully in the economic, social and political life of society." },
        { term: "Subsistence", definition: "Producing barely enough to survive, with nothing left over for investment." },
      ],
      concepts: [
        {
          id: "ecn10-u5-povc",
          title: "Causes of Poverty",
          skill: "Explain how poverty is caused and why it can persist across generations.",
          sections: [
            {
              heading: "The vicious circle of poverty",
              body: "Poverty is self-reinforcing: **low income** → cannot afford **education, health or capital** → low **productivity** → low income again. Poor households spend most income on survival, leaving nothing for investment. This is the **vicious circle of poverty**.",
            },
            {
              heading: "Structural causes",
              body: "Beyond individual circumstances: **low agricultural productivity**, **lack of infrastructure**, **weak institutions and corruption**, **conflict**, **overpopulation** relative to resources, **unfair trade terms**, and **lack of access to credit** keep poverty entrenched.",
            },
            {
              heading: "Poverty traps",
              body: "A **poverty trap** is a threshold below which escape is very difficult: low income → no investment → low growth → low income. Breaking the trap usually requires external help — aid, remittances, or a big push in education and infrastructure.",
            },
          ],
          keyFormulas: [
            { name: "Vicious circle", statement: "Low income → low investment → low productivity → low income" },
            { name: "Poverty trap", statement: "Below a threshold, escape requires external intervention" },
          ],
          workedExample: {
            problem: "A farming family earns barely enough to eat. Why might they remain poor for generations?",
            solution: "No surplus for seeds, tools or schooling → productivity stays low → income stays at subsistence → the vicious circle continues.",
          },
          questions: [
            {
              id: "ecn10-u5-povc-q1", difficulty: "foundation", totalMarks: 2,
              stem: "What is the vicious circle of poverty?",
              response: { type: "mcq", choices: [
                { id: "a", text: "Poverty caused only by bad luck" },
                { id: "b", text: "A self-reinforcing cycle where poverty reproduces poverty" },
                { id: "c", text: "Poverty that ends after one year" },
                { id: "d", text: "Wealth passing from parents to children" },
              ], correctChoiceId: "b" },
              markscheme: {
                principles: [{ kind: "definition", name: "Vicious circle", statement: "Poverty reproduces itself through low investment." }],
                steps: [{ reasoning: "The circle links low income to low investment to low income.", marks: 2, markCode: "AO1" }],
                finalAnswer: "**(b)** Self-reinforcing cycle",
                commonErrors: ["Confusing with a poverty trap."],
              },
            },
            {
              id: "ecn10-u5-povc-q2", difficulty: "foundation", totalMarks: 3,
              stem: "Explain the link between low income and low investment in the vicious circle.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Vicious circle", statement: "Low income leaves nothing for investment." }],
                steps: [
                  { reasoning: "Poor households spend most income on basic survival.", marks: 1, markCode: "AO2" },
                  { reasoning: "Little is left for education, health or capital goods.", marks: 1, markCode: "AO2" },
                  { reasoning: "Low investment keeps productivity and income low — the cycle continues.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "Low income → no surplus → no investment → low productivity → low income.",
                commonErrors: ["Missing the 'no surplus' step."],
              },
            },
            {
              id: "ecn10-u5-povc-q3", difficulty: "core", totalMarks: 4,
              stem: "Give four structural causes of persistent poverty in developing countries.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Structural causes", statement: "Low productivity, weak institutions, conflict, poor infrastructure." }],
                steps: [
                  { reasoning: "Low agricultural productivity and dependence on primary products.", marks: 1, markCode: "AO2" },
                  { reasoning: "Weak institutions, corruption and poor governance.", marks: 1, markCode: "AO2" },
                  { reasoning: "Conflict and political instability.", marks: 1, markCode: "AO2" },
                  { reasoning: "Lack of infrastructure, credit and market access.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "Low productivity, weak institutions, conflict, poor infrastructure/credit.",
                commonErrors: ["Blaming only individual behaviour."],
              },
            },
            {
              id: "ecn10-u5-povc-q4", difficulty: "challenge", totalMarks: 6,
              stem: "A country has widespread absolute poverty and low investment in education.",
              parts: [
                { label: "a", prompt: "Explain how low education investment reinforces poverty.", marks: 3 },
                { label: "b", prompt: "Explain how low education investment affects the wider economy.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Human capital", statement: "Education builds skills and productivity." }],
                steps: [
                  { reasoning: "(a) Poor families cannot afford schooling → children stay uneducated.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Low skills → low productivity → low income → poverty persists.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(b) Low-skilled labour limits industrialisation and growth.", marks: 2, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Weak human capital reduces the economy's long-term capacity.", marks: 1, markCode: "AO3", part: "b" },
                ],
                finalAnswer: "(a) poverty → no schooling → low skills → low income (b) limits growth and industrialisation",
                commonErrors: ["Ignoring the intergenerational link."],
              },
            },
            {
              id: "ecn10-u5-povc-q5", difficulty: "challenge", totalMarks: 8,
              stem: "Microfinance institutions lend small loans to poor households.",
              parts: [
                { label: "a", prompt: "Explain how microfinance could help break the vicious circle.", marks: 4 },
                { label: "b", prompt: "Explain one reason microfinance may fail to reduce poverty.", marks: 4 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Microfinance", statement: "Small loans enable investment by the poor." }],
                steps: [
                  { reasoning: "(a) Loans fund tools, stock or skills that raise productivity.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Higher income allows investment in health and education.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(b) Loans may be used for consumption, not investment.", marks: 2, markCode: "AO3", part: "b" },
                  { reasoning: "(b) High interest rates can deepen debt for the poorest.", marks: 2, markCode: "AO3", part: "b" },
                ],
                finalAnswer: "(a) enables investment → productivity → income (b) misuse or debt risk",
                commonErrors: ["Assuming loans automatically end poverty."],
              },
            },
            {
              id: "ecn10-u5-povc-q6", difficulty: "challenge", totalMarks: 10,
              stem: "A region has been stuck in poverty for three generations.",
              parts: [
                { label: "a", prompt: "Explain the vicious circle of poverty using this region's example.", marks: 4 },
                { label: "b", prompt: "Explain two ways the cycle could be broken.", marks: 4 },
                { label: "c", prompt: "Evaluate which intervention is likely to be most effective.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Breaking poverty", statement: "Investment in human and physical capital plus external support." }],
                steps: [
                  { reasoning: "(a) Low income → no surplus → no schooling or capital → low productivity → low income.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Each generation inherits poverty, not just poverty itself.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(b) Aid or investment in education and health builds human capital.", marks: 2, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Infrastructure and credit enable investment and markets.", marks: 2, markCode: "AO2", part: "b" },
                  { reasoning: "(c) Combined 'big push' is most effective — single interventions are often insufficient.", marks: 2, markCode: "AO3", part: "c" },
                ],
                finalAnswer: "(a) self-reinforcing low investment (b) human capital, infrastructure/credit (c) combined intervention best",
                commonErrors: ["One-sided solution without evaluation."],
              },
            },
          ],
        },
        {
          id: "ecn10-u5-povcon",
          title: "Consequences of Poverty",
          skill: "Evaluate the effects of poverty on individuals, society and the economy.",
          sections: [
            {
              heading: "Individual consequences",
              body: "Poverty leads to **malnutrition and poor health**, **low education attainment** (children leave school to work), **poor housing**, **stress and mental health problems**, and **social exclusion** — inability to participate in normal society.",
            },
            {
              heading: "Economic consequences",
              body: "For the economy: **low productivity** (sick, unskilled workers), **low consumer demand**, **low tax revenue**, **brain drain** (skilled workers emigrate), and a **larger informal economy**. Poverty also reduces **human capital formation** for the future.",
            },
            {
              heading: "Social consequences",
              body: "Higher **crime** (especially property crime), **social unrest**, **poor health outcomes**, **lower life expectancy**, and **intergenerational poverty** — children of the poor are more likely to be poor as adults.",
            },
          ],
          keyFormulas: [
            { name: "Human capital", statement: "Skills and health of workers → productivity" },
            { name: "Social exclusion", statement: "Inability to participate in society's normal life" },
          ],
          workedExample: {
            problem: "A country has 30% of children leaving school early due to poverty. What are two long-term economic effects?",
            solution: "Lower skilled workforce → lower productivity and growth; smaller tax base → less revenue for public services.",
          },
          questions: [
            {
              id: "ecn10-u5-povcon-q1", difficulty: "foundation", totalMarks: 2,
              stem: "What is social exclusion?",
              response: { type: "mcq", choices: [
                { id: "a", text: "Being unemployed for one month" },
                { id: "b", text: "Inability to participate fully in society's normal life" },
                { id: "c", text: "Living below the poverty line" },
                { id: "d", text: "Having low income" },
              ], correctChoiceId: "b" },
              markscheme: {
                principles: [{ kind: "definition", name: "Social exclusion", statement: "Cannot participate fully in society." }],
                steps: [{ reasoning: "Social exclusion = marginalisation from economic and social life.", marks: 2, markCode: "AO1" }],
                finalAnswer: "**(b)** Inability to participate fully",
                commonErrors: ["Confusing with poverty itself."],
              },
            },
            {
              id: "ecn10-u5-povcon-q2", difficulty: "foundation", totalMarks: 3,
              stem: "Give three individual consequences of poverty.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Poverty effects", statement: "Health, education, housing, stress." }],
                steps: [
                  { reasoning: "Poor health — malnutrition, lack of healthcare.", marks: 1, markCode: "AO2" },
                  { reasoning: "Low education — children leave school early.", marks: 1, markCode: "AO2" },
                  { reasoning: "Poor housing and stress/mental health problems.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "Poor health, low education, poor housing/stress.",
                commonErrors: ["Listing economic rather than individual effects."],
              },
            },
            {
              id: "ecn10-u5-povcon-q3", difficulty: "core", totalMarks: 4,
              stem: "Explain two economic consequences of widespread poverty.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Economic effects", statement: "Low productivity, weak demand, low tax base." }],
                steps: [
                  { reasoning: "Low productivity — sick and unskilled workers produce less.", marks: 1, markCode: "AO2" },
                  { reasoning: "Low consumer demand — poor households cannot buy much.", marks: 1, markCode: "AO2" },
                  { reasoning: "Low tax revenue — fewer taxpayers and lower incomes.", marks: 1, markCode: "AO2" },
                  { reasoning: "Brain drain — skilled workers leave for better opportunities.", marks: 1, markCode: "AO3" },
                ],
                finalAnswer: "Low productivity, weak demand, low tax revenue, brain drain.",
                commonErrors: ["Only listing social effects."],
              },
            },
            {
              id: "ecn10-u5-povcon-q4", difficulty: "challenge", totalMarks: 6,
              stem: "High poverty is linked to higher crime rates.",
              parts: [
                { label: "a", prompt: "Explain two ways poverty can lead to higher crime.", marks: 3 },
                { label: "b", prompt: "Explain one way crime can reinforce poverty.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Poverty and crime", statement: "Desperation and lack of opportunity drive crime; crime destroys opportunity." }],
                steps: [
                  { reasoning: "(a) Desperation — theft to meet basic needs.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Lack of legitimate opportunities — unemployment and low wages.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Weak social controls in deprived areas.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(b) Crime deters investment and jobs in the area.", marks: 2, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Incarceration removes workers and breaks families.", marks: 1, markCode: "AO3", part: "b" },
                ],
                finalAnswer: "(a) desperation, no opportunities (b) deters investment, removes workers",
                commonErrors: ["One-directional analysis only."],
              },
            },
            {
              id: "ecn10-u5-povcon-q5", difficulty: "challenge", totalMarks: 8,
              stem: "A country has high poverty, low education and a large informal economy.",
              parts: [
                { label: "a", prompt: "Explain how these three features reinforce each other.", marks: 4 },
                { label: "b", prompt: "Explain one long-term consequence for the country's development.", marks: 4 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Poverty cycle", statement: "Poverty, low skills and informality form a self-reinforcing system." }],
                steps: [
                  { reasoning: "(a) Poverty → children leave school → low skills → informal low-paid work.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Informal work earns little and pays no tax → no revenue for schools → cycle continues.", marks: 2, markCode: "AO3", part: "a" },
                  { reasoning: "(b) The country cannot build the human capital needed for industrialisation.", marks: 2, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Growth remains slow and dependent on primary production.", marks: 2, markCode: "AO3", part: "b" },
                ],
                finalAnswer: "(a) self-reinforcing poverty-skills-informality cycle (b) slow, primary-dependent development",
                commonErrors: ["Treating the features in isolation."],
              },
            },
            {
              id: "ecn10-u5-povcon-q6", difficulty: "challenge", totalMarks: 10,
              stem: "A developing country wants to reduce the economic consequences of poverty.",
              parts: [
                { label: "a", prompt: "Explain two economic consequences of poverty that policy could address.", marks: 4 },
                { label: "b", prompt: "Explain two policies that could address them.", marks: 4 },
                { label: "c", prompt: "Evaluate the likely effectiveness of these policies.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Poverty policy", statement: "Education and health investment raise productivity; cash transfers raise demand." }],
                steps: [
                  { reasoning: "(a) Low productivity from poor health and skills.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Weak consumer demand from low incomes.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(b) Investment in education and healthcare builds human capital.", marks: 2, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Cash transfers or benefits raise poor households' spending.", marks: 2, markCode: "AO2", part: "b" },
                  { reasoning: "(c) Effective but slow — results take years; requires sustained funding.", marks: 2, markCode: "AO3", part: "c" },
                ],
                finalAnswer: "(a) productivity, demand (b) human capital, transfers (c) effective but slow",
                commonErrors: ["No evaluation of time lags and costs."],
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "ecn10-u5-povc-notes", title: "Causes and consequences of poverty — notes",
      summary: "The vicious circle links low income to low investment; poverty harms health, education, productivity and social cohesion.",
      sections: [
        { heading: "Key idea", body: "Poverty reproduces itself: low income → no investment → low productivity → low income." },
        { heading: "Causes", body: "Structural: low productivity, weak institutions, conflict, poor infrastructure, lack of credit." },
        { heading: "Consequences", body: "Individual: health, education. Economic: productivity, demand, tax base. Social: crime, exclusion." },
      ],
    },
  },
  {
    file: "lesson-5-3.ts", exportName: "lesson53",
    lesson: {
      id: "ecn10-u5-lesson-5-3", code: "5-3",
      title: "Redistribution and Government Policy",
      goal: "I CAN explain methods of redistribution and evaluate their effectiveness and trade-offs.",
      standards: ["Edexcel IGCSE Economics 4EC1 — Government and the Economy: redistribution"],
      vocabulary: [
        { term: "Redistribution", definition: "The transfer of income or wealth from richer to poorer households." },
        { term: "Progressive tax", definition: "Tax where the rate rises as income rises." },
        { term: "Regressive tax", definition: "Tax that takes a larger share of poorer households' income." },
        { term: "Transfer payment", definition: "Government payment to individuals — benefits, pensions, tax credits." },
        { term: "Minimum wage", definition: "The lowest legal hourly wage employers may pay." },
        { term: "Poverty trap", definition: "A situation where earning more causes loss of benefits, leaving people no better off." },
      ],
      concepts: [
        {
          id: "ecn10-u5-red",
          title: "Methods of Redistribution",
          skill: "Identify and explain the main tools governments use to redistribute income.",
          sections: [
            {
              heading: "Taxation",
              body: "**Progressive taxes** — income tax and corporation tax rise with income, taking proportionally more from the rich. **Regressive taxes** — VAT and excise duties take the same percentage from all, hitting the poor harder as they spend a larger share of income. **Indirect taxes** can also discourage harmful consumption.",
            },
            {
              heading: "Benefits and transfers",
              body: "**Transfer payments** move income directly: unemployment benefits, pensions, disability benefits, tax credits, housing benefit. They support those unable to work or on low incomes. Means-tested benefits target the poorest but can create **poverty traps** if benefits are withdrawn too quickly as earnings rise.",
            },
            {
              heading: "Wage and price policies",
              body: "**Minimum wage** sets a floor on pay — raises incomes for low-paid workers but may reduce employment if set too high. **Price controls** and subsidies on essentials (food, energy) can help the poor but may distort markets. **In-kind transfers** (free healthcare, education) redistribute without cash.",
            },
          ],
          keyFormulas: [
            { name: "Progressive tax", statement: "Rate rises with income → reduces inequality" },
            { name: "Transfer payment", statement: "Direct income support — benefits, pensions, credits" },
            { name: "Minimum wage", statement: "Legal floor on wages" },
          ],
          workedExample: {
            problem: "A worker earns £100/week and receives £50/week in benefits. If they earn £150, benefits fall to £10. Is the worker better off?",
            solution: "Total income was £150, now £160 — only £10 better off despite £50 more earnings. This is a poverty trap effect.",
          },
          questions: [
            {
              id: "ecn10-u5-red-q1", difficulty: "foundation", totalMarks: 2,
              stem: "What is redistribution of income?",
              response: { type: "mcq", choices: [
                { id: "a", text: "Sharing a company's profits among workers" },
                { id: "b", text: "Transferring income from richer to poorer households" },
                { id: "c", text: "Printing more money" },
                { id: "d", text: "Raising all taxes equally" },
              ], correctChoiceId: "b" },
              markscheme: {
                principles: [{ kind: "definition", name: "Redistribution", statement: "Income transferred from rich to poor." }],
                steps: [{ reasoning: "Redistribution shifts income via taxes and benefits.", marks: 2, markCode: "AO1" }],
                finalAnswer: "**(b)** Transferring income from richer to poorer",
                commonErrors: ["Confusing with economic growth."],
              },
            },
            {
              id: "ecn10-u5-red-q2", difficulty: "foundation", totalMarks: 3,
              stem: "Give three methods governments use to redistribute income.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Redistribution tools", statement: "Progressive tax, benefits, minimum wage." }],
                steps: [
                  { reasoning: "Progressive taxation — higher rates on higher incomes.", marks: 1, markCode: "AO2" },
                  { reasoning: "Transfer payments — benefits, pensions, tax credits.", marks: 1, markCode: "AO2" },
                  { reasoning: "Minimum wage and price/subsidy policies.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "Progressive tax, benefits/transfers, minimum wage.",
                commonErrors: ["Listing only one method."],
              },
            },
            {
              id: "ecn10-u5-red-q3", difficulty: "core", totalMarks: 4,
              stem: "Explain how progressive taxation redistributes income.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Progressive tax", statement: "Higher earners pay a higher percentage." }],
                steps: [
                  { reasoning: "Tax rates rise as income rises — e.g. 20% then 40% bands.", marks: 1, markCode: "AO2" },
                  { reasoning: "High earners pay proportionally more of their income in tax.", marks: 1, markCode: "AO2" },
                  { reasoning: "Revenue funds benefits and services for poorer households.", marks: 1, markCode: "AO2" },
                  { reasoning: "Net effect: disposable income becomes more equal.", marks: 1, markCode: "AO3" },
                ],
                finalAnswer: "High earners pay more % → revenue funds transfers → less inequality.",
                commonErrors: ["Confusing progressive with regressive."],
              },
            },
            {
              id: "ecn10-u5-red-q4", difficulty: "challenge", totalMarks: 6,
              stem: "A government raises the minimum wage by 10%.",
              parts: [
                { label: "a", prompt: "Explain two groups that gain from the rise.", marks: 3 },
                { label: "b", prompt: "Explain one group that may lose.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Minimum wage", statement: "Raises pay for low-wage workers; may cost jobs." }],
                steps: [
                  { reasoning: "(a) Low-paid workers earn more — reduced poverty.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Workers near the minimum wage also benefit via pay spillovers.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(b) Employers facing higher labour costs may cut jobs or hours.", marks: 2, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Some low-skilled workers priced out of employment entirely.", marks: 1, markCode: "AO3", part: "b" },
                ],
                finalAnswer: "(a) low-paid workers gain (b) employers/jobs at risk",
                commonErrors: ["One-sided analysis."],
              },
            },
            {
              id: "ecn10-u5-red-q5", difficulty: "challenge", totalMarks: 8,
              stem: "A means-tested benefit is withdrawn at 50p for every £1 earned above a threshold.",
              parts: [
                { label: "a", prompt: "Explain how this creates a poverty trap.", marks: 4 },
                { label: "b", prompt: "Explain how the trap could be reduced.", marks: 4 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Poverty trap", statement: "Benefit withdrawal can leave workers no better off." }],
                steps: [
                  { reasoning: "(a) For every extra £1 earned, benefits fall by 50p.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Net gain from working is only 50p per £1 — a high marginal tax rate.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(b) Reduce the withdrawal rate so work pays more.", marks: 2, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Raise the threshold or taper benefits more gradually.", marks: 2, markCode: "AO2", part: "b" },
                ],
                finalAnswer: "(a) 50% withdrawal → weak incentive to work (b) lower taper or raise threshold",
                commonErrors: ["Not quantifying the withdrawal rate."],
              },
            },
            {
              id: "ecn10-u5-red-q6", difficulty: "challenge", totalMarks: 10,
              stem: "A government wants to reduce poverty and inequality using redistribution.",
              parts: [
                { label: "a", prompt: "Explain two taxes that could raise revenue for redistribution.", marks: 4 },
                { label: "b", prompt: "Explain two benefits that could be funded by that revenue.", marks: 4 },
                { label: "c", prompt: "Evaluate the trade-off between equity and incentives.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Redistribution policy", statement: "Taxes fund benefits; generosity must balance incentives." }],
                steps: [
                  { reasoning: "(a) Progressive income tax raises revenue from high earners.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Taxes on wealth, inheritance or land also redistribute.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(b) Income support benefits for the unemployed and low-paid.", marks: 2, markCode: "AO2", part: "b" },
                  { reasoning: "(b) In-kind support — healthcare, education, housing subsidies.", marks: 2, markCode: "AO2", part: "b" },
                  { reasoning: "(c) Too generous benefits weaken work incentives; too little leaves poverty — a balance is needed.", marks: 2, markCode: "AO3", part: "c" },
                ],
                finalAnswer: "(a) income/wealth tax (b) income benefits, in-kind support (c) balance equity vs incentives",
                commonErrors: ["No evaluation of the incentive trade-off."],
              },
            },
          ],
        },
        {
          id: "ecn10-u5-rede",
          title: "Evaluating Redistribution Policies",
          skill: "Analyse the effectiveness and trade-offs of redistribution policies.",
          sections: [
            {
              heading: "Effectiveness",
              body: "Redistribution **works** when benefits reach the target group, poverty and inequality measurably fall, and work incentives are preserved. It **fails** when benefits are captured by the non-poor, poverty traps discourage work, or high taxes shrink the economy.",
            },
            {
              heading: "The equity-efficiency trade-off",
              body: "More redistribution improves **equity** but can reduce **efficiency**: high taxes may reduce work effort, saving and investment; generous benefits may create dependency. The optimal level balances fairness against incentives — a central policy dilemma.",
            },
            {
              heading: "Design features that help",
              body: "**Tapered benefits** withdraw gradually to avoid poverty traps. **Tax credits** top up low incomes while rewarding work. **Universal services** (health, education) avoid stigma and targeting errors. **Conditionality** (benefits linked to training or work) can preserve incentives.",
            },
          ],
          keyFormulas: [
            { name: "Equity-efficiency trade-off", statement: "More redistribution = more equity, possibly less efficiency" },
            { name: "Poverty trap", statement: "Benefit withdrawal can make work pay little" },
          ],
          workedExample: {
            problem: "Country A gives generous flat benefits; Country B uses tapered tax credits. Which better preserves work incentives?",
            solution: "B — tapered credits keep benefits as earnings rise, so work always pays; flat benefits may trap recipients.",
          },
          questions: [
            {
              id: "ecn10-u5-rede-q1", difficulty: "foundation", totalMarks: 2,
              stem: "What is the equity-efficiency trade-off in redistribution?",
              response: { type: "mcq", choices: [
                { id: "a", text: "Choosing between two equal options" },
                { id: "b", text: "More fairness may reduce work incentives and efficiency" },
                { id: "c", text: "Efficiency always requires inequality" },
                { id: "d", text: "A tax on efficient firms" },
              ], correctChoiceId: "b" },
              markscheme: {
                principles: [{ kind: "definition", name: "Equity-efficiency", statement: "Fairness vs incentives trade-off." }],
                steps: [{ reasoning: "Redistribution improves equity but can weaken incentives.", marks: 2, markCode: "AO1" }],
                finalAnswer: "**(b)** Fairness may reduce incentives",
                commonErrors: ["Thinking there is no trade-off."],
              },
            },
            {
              id: "ecn10-u5-rede-q2", difficulty: "foundation", totalMarks: 3,
              stem: "Give two features of a well-designed benefit system.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Benefit design", statement: "Taper, target, preserve incentives." }],
                steps: [
                  { reasoning: "Tapered withdrawal — benefits fall gradually as earnings rise.", marks: 1, markCode: "AO2" },
                  { reasoning: "Means-testing — targets those most in need.", marks: 1, markCode: "AO2" },
                  { reasoning: "Incentive-compatible — work always leaves the household better off.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "Tapered withdrawal, targeting, preserves incentives.",
                commonErrors: ["Listing features that create poverty traps."],
              },
            },
            {
              id: "ecn10-u5-rede-q3", difficulty: "core", totalMarks: 4,
              stem: "Explain why high progressive taxes might reduce economic efficiency.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Incentive effect", statement: "High marginal rates reduce the reward for extra effort." }],
                steps: [
                  { reasoning: "High earners keep less of each extra pound earned.", marks: 1, markCode: "AO2" },
                  { reasoning: "May work fewer hours or retire earlier.", marks: 1, markCode: "AO2" },
                  { reasoning: "May reduce saving, investment and enterprise.", marks: 1, markCode: "AO2" },
                  { reasoning: "Skilled workers may move to lower-tax countries.", marks: 1, markCode: "AO3" },
                ],
                finalAnswer: "Weaker incentives → less effort, saving, investment, possible emigration.",
                commonErrors: ["Only listing equity benefits, not efficiency costs."],
              },
            },
            {
              id: "ecn10-u5-rede-q4", difficulty: "challenge", totalMarks: 6,
              stem: "A country introduces a generous universal basic income (UBI).",
              parts: [
                { label: "a", prompt: "Explain two advantages of a UBI for poverty reduction.", marks: 3 },
                { label: "b", prompt: "Explain two disadvantages of a UBI.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "UBI", statement: "Universal cash payment — simple but costly." }],
                steps: [
                  { reasoning: "(a) Simple to administer — no means-testing or stigma.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Guarantees a minimum income — directly reduces poverty.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) No poverty trap — payment does not fall as earnings rise.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(b) Very expensive — paid to everyone including the rich.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) May reduce work incentives if set too high.", marks: 1, markCode: "AO3", part: "b" },
                  { reasoning: "(b) Requires very high taxes to fund.", marks: 1, markCode: "AO2", part: "b" },
                ],
                finalAnswer: "(a) simple, no trap, guaranteed income (b) costly, incentive risk, high taxes",
                commonErrors: ["One-sided evaluation."],
              },
            },
            {
              id: "ecn10-u5-rede-q5", difficulty: "challenge", totalMarks: 8,
              stem: "Two countries spend the same on redistribution: Country X uses cash benefits, Country Y uses free healthcare and education.",
              parts: [
                { label: "a", prompt: "Explain two advantages of in-kind provision over cash benefits.", marks: 4 },
                { label: "b", prompt: "Explain one disadvantage of in-kind provision.", marks: 4 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "comparison", name: "Cash vs in-kind", statement: "Services guarantee provision; cash gives choice but can be misused." }],
                steps: [
                  { reasoning: "(a) Guarantees the service is received — cannot be spent on other things.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Builds long-term human capital — healthier, better-educated workers.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(b) No choice — recipients cannot spend the value on other needs.", marks: 2, markCode: "AO3", part: "b" },
                  { reasoning: "(b) May be less efficient than cash if some recipients do not value the service.", marks: 2, markCode: "AO3", part: "b" },
                ],
                finalAnswer: "(a) guaranteed provision, human capital (b) no choice, possible inefficiency",
                commonErrors: ["Assuming in-kind is always better."],
              },
            },
            {
              id: "ecn10-u5-rede-q6", difficulty: "challenge", totalMarks: 10,
              stem: "A government must choose how much to redistribute income.",
              parts: [
                { label: "a", prompt: "Explain two arguments for more redistribution.", marks: 4 },
                { label: "b", prompt: "Explain two arguments against more redistribution.", marks: 4 },
                { label: "c", prompt: "Evaluate where the balance should lie.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Redistribution balance", statement: "Equity vs efficiency — no single right answer." }],
                steps: [
                  { reasoning: "(a) Reduces poverty and inequality — fairer society.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Improves health, education and opportunities for the poor.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(b) High taxes weaken work, saving and investment incentives.", marks: 2, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Generous benefits can create dependency and poverty traps.", marks: 2, markCode: "AO2", part: "b" },
                  { reasoning: "(c) Balance depends on values and context — enough to prevent deprivation, not so much it kills incentives.", marks: 2, markCode: "AO3", part: "c" },
                ],
                finalAnswer: "(a) equity, opportunity (b) incentives, dependency (c) balance — prevent deprivation without killing incentives",
                commonErrors: ["No balanced evaluation."],
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "ecn10-u5-rede-notes", title: "Redistribution policy — notes",
      summary: "Progressive tax, benefits and minimum wage redistribute income; the equity-efficiency trade-off is the key dilemma.",
      sections: [
        { heading: "Key idea", body: "Redistribution shifts income via taxes and transfers — effective design preserves work incentives." },
        { heading: "Tools", body: "Progressive tax, means-tested benefits, tax credits, minimum wage, in-kind services." },
        { heading: "Trade-off", body: "More equity may mean weaker incentives — taper benefits and use tax credits to balance." },
      ],
    },
  },
];
