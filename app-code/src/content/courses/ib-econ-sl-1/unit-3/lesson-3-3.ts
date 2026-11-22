import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "econ-u1-lesson-3-3",
  code: "3-3",
  title: "Inequality and Poverty",
  goal: "I CAN measure inequality and poverty using the Lorenz curve, Gini coefficient and poverty lines, and evaluate policies to reduce them.",
  standards: ["Paper 1", "Paper 2", "Topic 3"],
  vocabulary: [
    { term: "Inequality", definition: "Unequal distribution of income or wealth within a society." },
    { term: "Absolute poverty", definition: "Living below the minimum income needed for basic necessities (e.g. World Bank $2.15/day)." },
    { term: "Relative poverty", definition: "Living below a threshold set relative to the median income of society." },
    { term: "Lorenz curve", definition: "A curve showing the cumulative share of income earned by cumulative share of population; further from the line of equality = more inequality." },
    { term: "Gini coefficient", definition: "A numerical measure of inequality from 0 (perfect equality) to 1 (perfect inequality), derived from the Lorenz curve." },
    { term: "Progressive tax", definition: "A tax where the rate rises as income rises, used to redistribute income." },
  ],
  concepts: [
    {
      id: "econ-u3-measuring-inequality",
      title: "Measuring Inequality and Poverty",
      skill: "Use the Lorenz curve and Gini coefficient to measure inequality and distinguish absolute from relative poverty.",
      lesson: {
        sections: [
          {
            heading: "Measuring inequality",
            body: "The **Lorenz curve** plots cumulative % of population (poorest to richest) against cumulative % of income. The **line of equality** (45°) shows perfect equality. The further the Lorenz curve bows below it, the greater the inequality. The **Gini coefficient** is the ratio of the area between the line of equality and the Lorenz curve to the total area under the line — 0 = perfect equality, 1 = perfect inequality.",
          },
          {
            heading: "Absolute vs relative poverty",
            body: "**Absolute poverty** means living below a fixed minimum needed for survival — measured by the international poverty line (~$2.15/day, adjusted for purchasing power). **Relative poverty** means living below a threshold relative to median income — e.g. below 60% of median household income. Absolute poverty is about survival; relative poverty is about exclusion from the normal life of society.",
          },
          {
            heading: "Causes of inequality",
            body: "Inequality arises from differences in **education and skills** (human capital), **inheritance and wealth**, **discrimination**, **globalisation** (skill-biased technical change), **tax and benefit systems**, and **labour market structures** (unions, minimum wages). Some inequality may incentivise effort; excessive inequality can harm social cohesion and growth.",
          },
        ],
        keyFormulas: [
          { name: "Lorenz curve", statement: "Cumulative % population vs cumulative % income; bows below 45° line = inequality" },
          { name: "Gini coefficient", statement: "Area between equality line and Lorenz curve / total area; 0 = equality, 1 = inequality" },
          { name: "Poverty lines", statement: "Absolute = fixed survival threshold; relative = % of median income" },
        ],
        workedExample: {
          problem: "Country A has a Gini of 0.25; Country B has 0.55. Which is more unequal and what does the Lorenz curve look like?",
          solution: "B is more unequal. Its Lorenz curve bows further below the 45° line of equality than A's.",
        },
      },
      questions: [
        {
          id: "econ-u3-l33c1q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A Gini coefficient of 0 indicates:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Perfect equality" },
              { id: "b", text: "Maximum poverty" },
              { id: "c", text: "No economic growth" },
              { id: "d", text: "Perfect inequality" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Gini coefficient", statement: "0 = perfect equality; 1 = perfect inequality." },
            ],
            steps: [
              { reasoning: "Gini = 0 means income is distributed perfectly equally.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Perfect equality",
            commonErrors: ["Reversing the scale — higher Gini means MORE inequality."],
          },
        },
        {
          id: "econ-u3-l33c1q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Distinguish between absolute and relative poverty.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Absolute vs relative poverty", statement: "Absolute = below fixed survival threshold; relative = below % of median income." },
            ],
            steps: [
              { reasoning: "Absolute poverty: below a fixed income needed for basic necessities (e.g. $2.15/day).", marks: 1, markCode: "M" },
              { reasoning: "Relative poverty: below a threshold relative to median income (e.g. <60% of median).", marks: 1, markCode: "M" },
              { reasoning: "Absolute is about survival; relative is about exclusion from normal living standards.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Absolute = fixed survival line; relative = income below societal median threshold.",
            commonErrors: ["Treating them as interchangeable — they measure different things."],
          },
        },
        {
          id: "econ-u3-l33c1q3",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "The Lorenz curve for Country X lies closer to the line of equality than Country Y's. Explain what this shows about income distribution in each country.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Lorenz curve interpretation", statement: "Closer to 45° line = more equal income distribution." },
            ],
            steps: [
              { reasoning: "The line of equality represents perfect equality — each % of population earns same % of income.", marks: 1, markCode: "M" },
              { reasoning: "Country X's curve is closer to this line → more equal income distribution.", marks: 1, markCode: "M" },
              { reasoning: "Country Y's curve bows further → greater inequality.", marks: 1, markCode: "R" },
              { reasoning: "X's Gini coefficient is lower than Y's.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "X more equal (lower Gini); Y more unequal (higher Gini).",
            commonErrors: ["Reversing the interpretation — closer to line = MORE equal."],
          },
        },
        {
          id: "econ-u3-l33c1q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examine the causes of rising income inequality in developed economies.",
          parts: [
            { label: "a", prompt: "Identify three causes of increasing inequality.", marks: 2 },
            { label: "b", prompt: "Explain how each cause contributes to inequality.", marks: 3 },
            { label: "c", prompt: "Evaluate whether some inequality is economically beneficial.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Causes of inequality", statement: "Skill-biased technical change, globalisation, inheritance, tax systems, discrimination." },
            ],
            steps: [
              { part: "a", reasoning: "Any three: skill-biased technical change, globalisation, inheritance/wealth concentration, regressive taxation, discrimination.", marks: 2, markCode: "M" },
              { part: "b", reasoning: "Technology rewards high-skilled workers more — wage gaps widen.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Globalisation shifts jobs to low-wage countries, hurting unskilled workers in developed economies.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Inherited wealth and capital income advantage the already-rich.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Some inequality incentivises effort, innovation and risk-taking — rewards talent.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "But excessive inequality harms social cohesion, health and may reduce growth.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned judgement: moderate inequality may be efficient; extreme inequality is harmful.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Technology, globalisation, inheritance. (b) Reward skills/capital over unskilled labour. (c) Some inequality incentivises; excessive inequality harms.",
            commonErrors: ["Claiming all inequality is bad — some incentivises effort and innovation."],
          },
        },
        {
          id: "econ-u3-l33c1q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The Lorenz curve plots:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Exports against imports" },
              { id: "b", text: "Government spending against tax revenue" },
              { id: "c", text: "Cumulative percentage of population against cumulative percentage of income" },
              { id: "d", text: "Price against quantity demanded" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Lorenz curve", statement: "Cumulative % of population (poorest to richest) vs cumulative % of income earned." },
            ],
            steps: [
              { reasoning: "The Lorenz curve shows how income is distributed across the population.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Cumulative percentage of population against cumulative percentage of income",
            commonErrors: ["Confusing the Lorenz curve with a demand or supply curve."],
          },
        },
        {
          id: "econ-u3-l33c1q6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The 'line of equality' on a Lorenz diagram is drawn at an angle of:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "180°" },
              { id: "b", text: "0° (horizontal)" },
              { id: "c", text: "45°" },
              { id: "d", text: "90° (vertical)" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Line of equality", statement: "The 45° line showing perfect equality of income distribution." },
            ],
            steps: [
              { reasoning: "Perfect equality means each percentage of population earns the same percentage of income — a 45° line.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** 45°",
            commonErrors: ["Thinking the line of equality is the axes."],
          },
        },
        {
          id: "econ-u3-l33c1q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "If a country's Gini coefficient rises from 0.30 to 0.45, income inequality has:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Reached perfect equality" },
              { id: "b", text: "Stayed the same" },
              { id: "c", text: "Fallen" },
              { id: "d", text: "Risen" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Gini scale", statement: "Higher Gini = greater inequality; 1 = perfect inequality." },
            ],
            steps: [
              { reasoning: "A higher Gini coefficient means a larger gap between the Lorenz curve and the line of equality.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Risen",
            commonErrors: ["Reversing the scale — higher Gini means MORE inequality."],
          },
        },
        {
          id: "econ-u3-l33c1q8",
          difficulty: "core",
          paper: "2",
          totalMarks: 2,
          stem: "Absolute poverty is measured against:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "GDP per capita of the country" },
              { id: "b", text: "A fixed minimum income needed for basic necessities" },
              { id: "c", text: "The income of the richest household" },
              { id: "d", text: "Median household income" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Absolute poverty", statement: "Income below a fixed threshold needed for survival (e.g. international poverty line)." },
            ],
            steps: [
              { reasoning: "Absolute poverty uses a fixed survival threshold, independent of what others earn.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** A fixed minimum income needed for basic necessities",
            commonErrors: ["Confusing it with relative poverty, which uses median income."],
          },
        },
        {
          id: "econ-u3-l33c1q9",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 2,
          stem: "If a country's Lorenz curve coincides exactly with the line of equality, its Gini coefficient is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1" },
              { id: "b", text: "0.5" },
              { id: "c", text: "Undefined" },
              { id: "d", text: "0" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Gini = 0", statement: "No area between Lorenz curve and equality line → Gini = 0 (perfect equality)." },
            ],
            steps: [
              { reasoning: "When the curves coincide, the area between them is zero, so Gini = 0.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** 0",
            commonErrors: ["Thinking a coinciding curve gives maximum inequality — it gives perfect equality."],
          },
        },
        {
          id: "econ-u3-l33c1q10",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "For a country, the area between the line of equality and the Lorenz curve is 0.15 and the total area under the line of equality is 0.5. Calculate the Gini coefficient.",
          response: {
            type: "numeric",
            parts: [
              { label: "i", answer: 0.3 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Gini coefficient", statement: "Gini = area between equality line and Lorenz curve / total area under equality line" },
            ],
            steps: [
              { reasoning: "Gini = 0.15 / 0.5.", marks: 1, markCode: "M" },
              { reasoning: "Gini = 0.3.", marks: 1, markCode: "M" },
              { reasoning: "Gini coefficient = 0.3.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Gini = 0.3.",
            commonErrors: ["Dividing the areas the wrong way round (0.5/0.15)."],
          },
        },
        {
          id: "econ-u3-l33c1q11",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Country A has an area between the line of equality and its Lorenz curve of 0.20. Country B has 0.05. The total area under the equality line is 0.5 for both. (i) Calculate Country A's Gini. (ii) Calculate Country B's Gini.",
          response: {
            type: "numeric",
            parts: [
              { label: "i", answer: 0.4 },
              { label: "ii", answer: 0.1 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Gini coefficient", statement: "Gini = inequality area / 0.5" },
            ],
            steps: [
              { reasoning: "Country A: Gini = 0.20 / 0.5 = 0.4.", marks: 1, markCode: "M" },
              { reasoning: "Country A Gini = 0.4.", marks: 1, markCode: "A" },
              { reasoning: "Country B: Gini = 0.05 / 0.5 = 0.1.", marks: 1, markCode: "M" },
              { reasoning: "Country B Gini = 0.1 — A is more unequal.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(i) 0.4; (ii) 0.1.",
            commonErrors: ["Reporting the area instead of dividing by 0.5."],
          },
        },
        {
          id: "econ-u3-l33c1q12",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Explain how the Lorenz curve and Gini coefficient are used to measure income inequality.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Lorenz curve and Gini", statement: "Lorenz curve plots cumulative population vs cumulative income; Gini summarises the gap numerically." },
            ],
            steps: [
              { reasoning: "The Lorenz curve shows cumulative % of population against cumulative % of income, poorest first.", marks: 1, markCode: "M" },
              { reasoning: "The further it bows below the 45° line of equality, the greater the inequality.", marks: 1, markCode: "M" },
              { reasoning: "The Gini coefficient converts this gap into a number from 0 to 1.", marks: 1, markCode: "R" },
              { reasoning: "Higher Gini = more inequality — allows comparison between countries and over time.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Lorenz curve shows distribution graphically; Gini quantifies it as 0–1 measure.",
            commonErrors: ["Saying a curve closer to the line means MORE inequality — it means less."],
          },
        },
        {
          id: "econ-u3-l33c1q13",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "A household earns $3 per day in a high-income country where the relative poverty line is $15 per day, and another earns $1 per day in a low-income country where the absolute poverty line is $2.15 per day. Discuss which poverty concept applies to each.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Absolute vs relative poverty", statement: "Absolute = fixed survival threshold; relative = threshold set against median income." },
            ],
            steps: [
              { reasoning: "The $3/day household is below the $15 relative line → relatively poor in its society.", marks: 1, markCode: "M" },
              { reasoning: "Relative poverty measures exclusion from normal living standards of that society.", marks: 1, markCode: "M" },
              { reasoning: "The $1/day household is below the $2.15 absolute line → absolutely poor (cannot meet basic needs).", marks: 1, markCode: "R" },
              { reasoning: "Absolute poverty is about survival regardless of what others earn.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Household 1 = relative poverty; household 2 = absolute poverty.",
            commonErrors: ["Applying the wrong threshold concept to each household."],
          },
        },
        {
          id: "econ-u3-l33c1q14",
          difficulty: "core",
          paper: "1",
          totalMarks: 6,
          stem: "Explain four causes of income inequality in an economy.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Causes of inequality", statement: "Differences in human capital, inherited wealth, discrimination, globalisation and tax systems." },
            ],
            steps: [
              { reasoning: "Education and skills: higher-skilled workers earn more, widening wage gaps.", marks: 1, markCode: "M" },
              { reasoning: "Inheritance and wealth: capital income and assets advantage the already-rich.", marks: 1, markCode: "M" },
              { reasoning: "Discrimination: unequal pay or access to jobs by gender, ethnicity or background.", marks: 1, markCode: "M" },
              { reasoning: "Globalisation and technology: skill-biased change rewards high-skilled labour disproportionately.", marks: 1, markCode: "M" },
              { reasoning: "Tax and benefit systems can either reduce or reinforce inequality depending on progressivity.", marks: 1, markCode: "R" },
              { reasoning: "Four valid causes explained with mechanisms.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Education, inheritance, discrimination, globalisation/technology, tax systems — any four explained.",
            commonErrors: ["Listing causes without explaining how they widen inequality."],
          },
        },
        {
          id: "econ-u3-l33c1q15",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "A developing country wants to measure and reduce income inequality.",
          parts: [
            { label: "a", prompt: "Describe how the Lorenz curve and Gini coefficient measure inequality.", marks: 2 },
            { label: "b", prompt: "Explain the difference between absolute and relative poverty.", marks: 3 },
            { label: "c", prompt: "Evaluate whether reducing inequality should be a government objective.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Measuring inequality and poverty", statement: "Lorenz/Gini for inequality; absolute vs relative poverty lines." },
            ],
            steps: [
              { part: "a", reasoning: "Lorenz curve plots cumulative population vs cumulative income; further below 45° line = more inequality.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Gini = area ratio, 0 to 1 — higher means more unequal.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Absolute poverty: below fixed survival threshold (e.g. $2.15/day).", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Relative poverty: below a threshold relative to median income (e.g. <60% of median).", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Absolute is about survival; relative is about exclusion from normal living standards.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Argument for: inequality harms health, cohesion and may reduce growth; poverty reduction is a key objective.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Argument against: some inequality incentivises effort and innovation; redistribution has costs.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Judgement: moderate inequality acceptable; extreme inequality warrants intervention — balance equity and efficiency.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Lorenz/Gini measure distribution. (b) Absolute = survival; relative = societal exclusion. (c) Balance equity vs incentives.",
            commonErrors: ["Treating all inequality as equally harmful."],
          },
        },
        {
          id: "econ-u3-l33c1q16",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Explain why GDP per capita is an imperfect measure of a country's living standards and income distribution.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Limits of GDP per capita", statement: "Averages hide inequality and exclude non-income aspects of welfare." },
            ],
            steps: [
              { reasoning: "GDP per capita is an average — it says nothing about how income is distributed (could be very unequal).", marks: 1, markCode: "M" },
              { reasoning: "It ignores non-market activity, leisure, health and education quality.", marks: 1, markCode: "M" },
              { reasoning: "It does not capture environmental costs or informal economy income.", marks: 1, markCode: "R" },
              { reasoning: "Better measures: Gini coefficient, HDI, poverty rates — complement GDP.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "GDP/capita is an average ignoring distribution and non-income welfare — use Gini/HDI alongside.",
            commonErrors: ["Saying GDP per capita measures inequality directly."],
          },
        },
        {
          id: "econ-u3-l33c1q17",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "A country's Lorenz curve passes through the points (50% of population, 20% of income) and (100%, 100%). (i) Estimate the area under the Lorenz curve. (ii) Estimate the Gini coefficient.",
          response: {
            type: "numeric",
            parts: [
              { label: "i", answer: 0.35 },
              { label: "ii", answer: 0.3 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Gini from Lorenz points", statement: "Area under Lorenz ≈ sum of trapezoids; Gini = (0.5 − area under Lorenz) / 0.5" },
            ],
            steps: [
              { reasoning: "Trapezoid areas: 0.5 × 0.5 × (0 + 0.2) = 0.05; 0.5 × 0.5 × (0.2 + 1) = 0.30; total ≈ 0.35.", marks: 1, markCode: "M" },
              { reasoning: "Area under Lorenz ≈ 0.35.", marks: 1, markCode: "A" },
              { reasoning: "Gini = (0.5 − 0.35) / 0.5 = 0.3.", marks: 1, markCode: "M" },
              { reasoning: "Gini ≈ 0.3.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(i) ≈ 0.35; (ii) Gini ≈ 0.3.",
            commonErrors: ["Forgetting to subtract the Lorenz area from the 0.5 triangle."],
          },
        },
      ],
    },
    {
      id: "econ-u3-reducing-inequality",
      title: "Policies to Reduce Inequality and Poverty",
      skill: "Evaluate government policies — progressive taxation, benefits, minimum wages, education and training — for reducing inequality and poverty.",
      lesson: {
        sections: [
          {
            heading: "Redistribution policies",
            body: "Governments reduce inequality through **progressive taxation** (higher rates on higher incomes) and **cash transfers/welfare benefits** (unemployment benefit, pensions, child allowance). These directly redistribute income but may create dependency or reduce work incentives if poorly designed.",
          },
          {
            heading: "Market-based and supply-side policies",
            body: "A **minimum wage** sets a floor on wages — reduces poverty among workers but may cause unemployment if set above equilibrium. **Education and training** raise human capital, improving earning potential — addresses root causes but takes time. **Negative income tax** or **universal basic income** are alternative transfer mechanisms.",
          },
          {
            heading: "Evaluation",
            body: "No single policy is perfect. Cash transfers are quick but costly and may reduce incentives. Minimum wages help some workers but may displace others. Education is sustainable but slow. Effective strategies usually combine redistribution with supply-side investment in skills and opportunities.",
          },
        ],
        keyFormulas: [
          { name: "Progressive tax", statement: "Tax rate rises with income — redistributes from rich to poor" },
          { name: "Minimum wage", statement: "Price floor on labour — may cause unemployment if above equilibrium" },
          { name: "Supply-side solution", statement: "Education/training raises productivity and earnings" },
        ],
        workedExample: {
          problem: "A government raises the minimum wage above the equilibrium wage. What are the likely effects?",
          solution: "Quantity of labour supplied rises (more workers want jobs) but quantity demanded falls (employers hire fewer). Result: unemployment/surplus of labour, though those still employed earn more.",
        },
      },
      questions: [
        {
          id: "econ-u3-l33c2q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A progressive income tax system is one where:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The tax rate rises as income rises" },
              { id: "b", text: "Only low-income earners pay tax" },
              { id: "c", text: "Everyone pays the same rate of tax" },
              { id: "d", text: "Tax is levied on goods rather than income" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Progressive tax", statement: "Tax rate increases with income level." },
            ],
            steps: [
              { reasoning: "Progressive taxation takes a larger share from higher incomes.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** The tax rate rises as income rises",
            commonErrors: ["Confusing progressive with proportional (flat) taxation."],
          },
        },
        {
          id: "econ-u3-l33c2q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Explain one advantage and one disadvantage of using cash transfers to reduce poverty.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Cash transfers", statement: "Direct income support — quick poverty relief but potential dependency." },
            ],
            steps: [
              { reasoning: "Advantage: immediate, targeted income support reduces poverty directly.", marks: 1, markCode: "M" },
              { reasoning: "Disadvantage: costly to fund; may reduce work incentives if withdrawal rates are high.", marks: 1, markCode: "M" },
              { reasoning: "Effectiveness depends on design — tapering, conditions and level of benefit.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Advantage = quick poverty relief; disadvantage = cost + possible dependency.",
            commonErrors: ["Listing only advantages or only disadvantages."],
          },
        },
        {
          id: "econ-u3-l33c2q3",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Explain how investment in education can reduce income inequality over the long term.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Education and inequality", statement: "Human capital investment raises earning potential of disadvantaged groups." },
            ],
            steps: [
              { reasoning: "Education raises skills and human capital of poorer households.", marks: 1, markCode: "M" },
              { reasoning: "Higher-skilled workers earn more — narrowing wage gaps.", marks: 1, markCode: "M" },
              { reasoning: "Increased social mobility allows talented individuals from poor backgrounds to advance.", marks: 1, markCode: "R" },
              { reasoning: "Over time, more equal distribution of earnings reduces the Gini coefficient.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Education → skills → higher earnings for disadvantaged → reduced inequality.",
            commonErrors: ["Ignoring the time lag — education takes years to affect earnings."],
          },
        },
        {
          id: "econ-u3-l33c2q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Evaluate the effectiveness of government policies in reducing poverty and inequality.",
          parts: [
            { label: "a", prompt: "Describe two policies governments use to reduce inequality.", marks: 2 },
            { label: "b", prompt: "Explain how each policy works and its limitations.", marks: 3 },
            { label: "c", prompt: "Evaluate which approach is most sustainable for long-term poverty reduction.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Inequality policy mix", statement: "Redistribution (taxes/benefits) + supply-side (education/jobs) address different causes." },
            ],
            steps: [
              { part: "a", reasoning: "Any two: progressive taxation, cash benefits, minimum wage, education/training, employment programmes.", marks: 2, markCode: "M" },
              { part: "b", reasoning: "Progressive tax/benefits: direct redistribution; may reduce incentives, costly.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Education/training: raises earning potential; slow but sustainable, addresses root causes.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Minimum wage: raises pay for low earners; may cause unemployment if above equilibrium.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Cash transfers give immediate relief but don't address causes.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Supply-side investment (education, jobs) is slower but builds long-term capacity.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned judgement: combine both — transfers for immediate relief + supply-side for sustainability.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Tax/benefits + education/minimum wage. (b) Each has trade-offs. (c) Combination most effective.",
            commonErrors: ["Arguing for a single policy — effective strategies combine approaches."],
          },
        },
        {
          id: "econ-u3-l33c2q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A regressive tax system is one where:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The tax takes a larger share of income from low-income earners" },
              { id: "b", text: "The tax rate rises as income rises" },
              { id: "c", text: "Only the rich pay tax" },
              { id: "d", text: "No one pays tax" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Regressive tax", statement: "Tax burden is a larger proportion of income for the poor — e.g. indirect taxes on goods." },
            ],
            steps: [
              { reasoning: "Regressive taxes (like VAT) hit lower-income households harder as a share of income.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** The tax takes a larger share of income from low-income earners",
            commonErrors: ["Confusing regressive with progressive taxation."],
          },
        },
        {
          id: "econ-u3-l33c2q6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Cash transfers (such as unemployment benefits) differ from in-kind benefits because they:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Are given as goods or services" },
              { id: "b", text: "Are paid only to the wealthy" },
              { id: "c", text: "Provide money directly to recipients" },
              { id: "d", text: "Can never reduce poverty" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Cash transfer", statement: "Direct monetary payment (benefit, pension) rather than goods/services." },
            ],
            steps: [
              { reasoning: "Cash transfers give recipients money to spend as they choose.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Provide money directly to recipients",
            commonErrors: ["Confusing cash transfers with in-kind benefits like food parcels."],
          },
        },
        {
          id: "econ-u3-l33c2q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A minimum wage set above the equilibrium wage is likely to cause:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Unemployment (a surplus of labour)" },
              { id: "b", text: "Higher employment" },
              { id: "c", text: "A shortage of workers" },
              { id: "d", text: "Lower prices for consumers" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Minimum wage effect", statement: "Wage floor above equilibrium → labour supplied exceeds labour demanded → unemployment." },
            ],
            steps: [
              { reasoning: "More workers want jobs at the higher wage while employers hire fewer — a labour surplus.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Unemployment (a surplus of labour)",
            commonErrors: ["Assuming a higher minimum wage always raises employment."],
          },
        },
        {
          id: "econ-u3-l33c2q8",
          difficulty: "core",
          paper: "2",
          totalMarks: 2,
          stem: "Which policy most directly addresses the root causes of long-term poverty?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Food stamps" },
              { id: "b", text: "Investment in education and training" },
              { id: "c", text: "Inheritance tax" },
              { id: "d", text: "Cash benefits" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Supply-side poverty policy", statement: "Education/training raises human capital and earning potential — addresses causes, not symptoms." },
            ],
            steps: [
              { reasoning: "Transfers relieve poverty immediately; education raises the poor's capacity to earn — tackling root causes.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Investment in education and training",
            commonErrors: ["Choosing a transfer policy that treats symptoms rather than causes."],
          },
        },
        {
          id: "econ-u3-l33c2q9",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 2,
          stem: "A negative income tax means that:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "All taxation is abolished" },
              { id: "b", text: "Imports are taxed at a negative rate" },
              { id: "c", text: "Poor households pay negative amounts of tax" },
              { id: "d", text: "The government pays a supplement when income is below a threshold, tapering as income rises" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Negative income tax", statement: "Income support that phases out as earnings rise — combines tax and benefit." },
            ],
            steps: [
              { reasoning: "Below the threshold the state tops up income; the supplement shrinks as income rises, preserving work incentives better than flat benefits.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** The government pays a supplement when income is below a threshold, tapering as income rises",
            commonErrors: ["Confusing it with a universal basic income paid to everyone."],
          },
        },
        {
          id: "econ-u3-l33c2q10",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "An income tax system charges 10% on the first $10,000 of income and 20% on income above $10,000. Calculate the tax paid by someone earning $25,000.",
          response: {
            type: "numeric",
            parts: [
              { label: "i", answer: 4000, unit: "$" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Progressive tax calculation", statement: "Tax = sum of rate × income in each bracket" },
            ],
            steps: [
              { reasoning: "First bracket: 10% × $10,000 = $1,000.", marks: 1, markCode: "M" },
              { reasoning: "Second bracket: 20% × ($25,000 − $10,000) = 20% × $15,000 = $3,000.", marks: 1, markCode: "M" },
              { reasoning: "Total tax = $1,000 + $3,000 = $4,000.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Tax = $4,000.",
            commonErrors: ["Applying 20% to the whole $25,000 instead of only the amount above $10,000."],
          },
        },
        {
          id: "econ-u3-l33c2q11",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "The equilibrium wage is $10 per hour but the minimum wage is set at $12. Labour supplied is 1,000 hours per week and labour demanded is 800 hours. (i) Calculate the unemployment surplus. (ii) Calculate the weekly wage gain for each worker still employed (assume a 40-hour week).",
          response: {
            type: "numeric",
            parts: [
              { label: "i", answer: 200, unit: "hours" },
              { label: "ii", answer: 80, unit: "$ per week" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Minimum wage surplus", statement: "Qs − Qd at the wage floor = unemployment; employed workers gain wage × hours." },
            ],
            steps: [
              { reasoning: "Unemployment surplus = 1,000 − 800 = 200 hours of labour supplied but not demanded.", marks: 1, markCode: "M" },
              { reasoning: "Surplus = 200 hours.", marks: 1, markCode: "A" },
              { reasoning: "Wage gain per worker = ($12 − $10) × 40 = $80 per week.", marks: 1, markCode: "M" },
              { reasoning: "Weekly gain = $80.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(i) 200 hours; (ii) $80 per week.",
            commonErrors: ["Forgetting that hours worked, not just the wage rise, determine the gain."],
          },
        },
        {
          id: "econ-u3-l33c2q12",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Explain how progressive taxation redistributes income from rich to poor.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Progressive redistribution", statement: "Higher tax rates on higher incomes take a larger share from the rich." },
            ],
            steps: [
              { reasoning: "Tax rates rise with income, so high earners pay a larger proportion of their income in tax.", marks: 1, markCode: "M" },
              { reasoning: "Revenue funds transfers and public services benefiting lower-income groups.", marks: 1, markCode: "M" },
              { reasoning: "The gap between pre-tax and post-tax income is smaller — the Gini coefficient falls.", marks: 1, markCode: "R" },
              { reasoning: "Result: reduced income inequality, though possibly at some cost to work incentives.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Higher rates on higher incomes → revenue funds transfers → post-tax inequality falls.",
            commonErrors: ["Confusing progressive with proportional taxation."],
          },
        },
        {
          id: "econ-u3-l33c2q13",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Explain the trade-off between the immediate poverty relief and the incentive effects of cash transfers.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Cash transfer trade-off", statement: "Transfers lift incomes directly but may weaken the incentive to work if withdrawal is abrupt." },
            ],
            steps: [
              { reasoning: "Cash transfers immediately raise recipients' income above the poverty line.", marks: 1, markCode: "M" },
              { reasoning: "If benefits are withdrawn quickly as earnings rise, recipients may face high effective marginal tax rates and lose incentive to work.", marks: 1, markCode: "M" },
              { reasoning: "Tapered withdrawal or in-work benefits can preserve incentives.", marks: 1, markCode: "R" },
              { reasoning: "Judgement: well-designed transfers relieve poverty with manageable incentive costs.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Transfers give quick relief but poorly designed tapering can reduce work incentives.",
            commonErrors: ["Ignoring the incentive cost — a one-sided answer."],
          },
        },
        {
          id: "econ-u3-l33c2q14",
          difficulty: "core",
          paper: "1",
          totalMarks: 6,
          stem: "Evaluate the use of a minimum wage as a policy to reduce poverty.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Minimum wage evaluation", statement: "Raises pay for low earners but may cause unemployment if above equilibrium." },
            ],
            steps: [
              { reasoning: "Minimum wage sets a floor on wages, directly raising pay for low-paid workers.", marks: 1, markCode: "M" },
              { reasoning: "If set modestly above equilibrium it reduces poverty among those who keep their jobs.", marks: 1, markCode: "M" },
              { reasoning: "If set too high, labour demanded falls and unemployment rises — some workers lose entirely.", marks: 1, markCode: "M" },
              { reasoning: "It does not help non-workers (unemployed, self-employed) — coverage is limited.", marks: 1, markCode: "R" },
              { reasoning: "Effectiveness depends on level relative to equilibrium wage and labour market conditions.", marks: 1, markCode: "R" },
              { reasoning: "Judgement: useful complement to transfers/education, not a complete anti-poverty policy.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Raises wages for some but may displace others; best combined with other policies.",
            commonErrors: ["Claiming minimum wage unambiguously reduces poverty."],
          },
        },
        {
          id: "econ-u3-l33c2q15",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "A government wants to reduce poverty and inequality in its economy.",
          parts: [
            { label: "a", prompt: "Describe two policies it could use.", marks: 2 },
            { label: "b", prompt: "Explain how each works and its limitations.", marks: 3 },
            { label: "c", prompt: "Evaluate which combination is most sustainable.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Poverty policy mix", statement: "Redistribution for immediate relief + supply-side investment for long-term capacity." },
            ],
            steps: [
              { part: "a", reasoning: "Any two: progressive tax/benefits, minimum wage, education/training, employment programmes, UBI.", marks: 2, markCode: "M" },
              { part: "b", reasoning: "Transfers/taxes: direct redistribution; costly, may reduce incentives.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Minimum wage: raises low pay; may cause unemployment if above equilibrium.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Education: raises earning potential; slow but addresses root causes sustainably.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Transfers alone treat symptoms — poverty returns when payments stop.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Supply-side policies build capacity but take time — need transfers as bridge.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Judgement: combine short-term relief with long-term investment for sustainable poverty reduction.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Transfers + education/minimum wage. (b) Each has trade-offs. (c) Combination most sustainable.",
            commonErrors: ["Recommending only one policy without acknowledging trade-offs."],
          },
        },
        {
          id: "econ-u3-l33c2q16",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Explain why investment in education is considered a supply-side solution to poverty and inequality.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Education as supply-side policy", statement: "Raises human capital and productivity, increasing poor households' earning capacity." },
            ],
            steps: [
              { reasoning: "Education raises skills and human capital of disadvantaged groups.", marks: 1, markCode: "M" },
              { reasoning: "Higher-skilled workers command higher wages — raising incomes from the supply side rather than redistributing.", marks: 1, markCode: "M" },
              { reasoning: "Improved employability and social mobility let individuals escape poverty permanently.", marks: 1, markCode: "R" },
              { reasoning: "Unlike transfers, gains persist and may even raise growth — but take years to materialise.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Education → skills → higher productivity and wages → sustainable escape from poverty.",
            commonErrors: ["Treating education as a demand-side transfer — it raises earning capacity."],
          },
        },
        {
          id: "econ-u3-l33c2q17",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "The international poverty line is $2.15 per day. A household earns $1.50 per day. (i) Calculate the daily poverty gap. (ii) Calculate the monthly poverty gap over 30 days.",
          response: {
            type: "numeric",
            parts: [
              { label: "i", answer: 0.65, unit: "$ per day" },
              { label: "ii", answer: 19.5, unit: "$ per month" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Poverty gap", statement: "Poverty gap = poverty line − actual income; monthly = daily gap × 30" },
            ],
            steps: [
              { reasoning: "Daily gap = 2.15 − 1.50 = $0.65 per day.", marks: 1, markCode: "M" },
              { reasoning: "Daily gap = $0.65.", marks: 1, markCode: "A" },
              { reasoning: "Monthly gap = 0.65 × 30 = $19.50.", marks: 1, markCode: "M" },
              { reasoning: "Monthly gap = $19.50.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(i) $0.65 per day; (ii) $19.50 per month.",
            commonErrors: ["Using the household income instead of the gap from the poverty line."],
          },
        },
      ],
    },
  ],
};
