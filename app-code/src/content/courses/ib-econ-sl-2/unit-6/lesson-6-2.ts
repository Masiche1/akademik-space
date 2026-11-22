import type { Lesson } from "../../../types.ts";

export const lesson62: Lesson = {
  id: "econ-u4-lesson-6-2",
  code: "6-2",
  title: "Development Economics",
  goal: "I CAN measure development using the HDI, explain the poverty trap, and evaluate aid and microfinance as development strategies.",
  standards: ["Paper 1", "Paper 2", "Topic 6"],
  vocabulary: [
    { term: "Development", definition: "Improvement in living standards, health, education and economic opportunities — broader than just GDP growth." },
    { term: "HDI", definition: "Human Development Index — combines GDP per capita, life expectancy and education into one measure." },
    { term: "Poverty trap", definition: "A cycle where low income leads to low saving/investment, keeping incomes low." },
    { term: "Foreign aid", definition: "Money, goods or services transferred from rich to poor countries to support development." },
    { term: "Microfinance", definition: "Provision of small loans and financial services to poor people who lack access to banks." },
    { term: "Millennium Development Goals (MDGs)", definition: "UN targets (2000–2015) to halve poverty, improve education, health and gender equality." },
  ],
  concepts: [
    {
      id: "econ-u6-hdi-poverty-trap",
      title: "Measuring Development and the Poverty Trap",
      skill: "Use the HDI to measure development and explain the poverty trap and its causes.",
      lesson: {
        sections: [
          {
            heading: "Measuring development",
            body: "**Development** is broader than economic growth — it includes health, education, gender equality and political freedoms. The **HDI** combines three dimensions: **long and healthy life** (life expectancy), **knowledge** (mean and expected years of schooling) and **a decent standard of living** (GNI per capita). HDI ranges 0–1; above 0.8 = very high development, below 0.55 = low development. Other measures: MPI (multidimensional poverty), gender inequality index.",
          },
          {
            heading: "The poverty trap",
            body: "The **poverty trap** is a self-reinforcing cycle: low income → low saving → low investment → low productivity → low income. Poor households cannot save enough to invest in education, health or capital. Poor countries cannot generate enough tax revenue for infrastructure and public services. Breaking the trap requires external resources (aid, investment) or institutional change.",
          },
          {
            heading: "Causes of underdevelopment",
            body: "Underdevelopment stems from: **low capital accumulation** (few machines/infrastructure), **low human capital** (poor education/health), **geography** (landlocked, disease-prone), **institutions** (corruption, weak property rights), **historical exploitation** (colonialism), and **population pressure**. These interact — e.g. poor health reduces productivity, which keeps incomes low.",
          },
        ],
        keyFormulas: [
          { name: "HDI components", statement: "Health (life expectancy) + Education (schooling) + Income (GNI per capita)" },
          { name: "Poverty trap", statement: "Low income → low saving → low investment → low productivity → low income" },
        ],
        workedExample: {
          problem: "Country A has high GDP per capita but low life expectancy and schooling. What does its HDI reveal?",
          solution: "HDI combines all three dimensions — high income alone gives a moderate HDI, revealing that development is incomplete without health and education.",
        },
      },
      questions: [
        {
          id: "econ-u6-l62c1q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The HDI measures development using which three dimensions?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Exports, imports and investment" },
              { id: "b", text: "GDP, inflation and unemployment" },
              { id: "c", text: "Health, education and income" },
              { id: "d", text: "Population, area and climate" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "HDI", statement: "Combines health (life expectancy), education (schooling) and income (GNI per capita)." },
            ],
            steps: [
              { reasoning: "HDI = health + education + income dimensions.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Health, education and income",
            commonErrors: ["Thinking HDI is just GDP — it includes health and education."],
          },
        },
        {
          id: "econ-u6-l62c1q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Explain the poverty trap cycle.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Poverty trap", statement: "Low income → low saving → low investment → low productivity → low income." },
            ],
            steps: [
              { reasoning: "Low income means households cannot save enough for investment.", marks: 1, markCode: "M" },
              { reasoning: "Low investment → low capital and productivity → low output and income.", marks: 1, markCode: "M" },
              { reasoning: "The cycle is self-reinforcing — breaking it requires external aid or institutional change.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Low income → low saving → low investment → low productivity → low income (self-reinforcing).",
            commonErrors: ["Describing poverty as static — the trap is a dynamic cycle."],
          },
        },
        {
          id: "econ-u6-l62c1q3",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Explain why GDP per capita alone is an inadequate measure of development, using the HDI as an alternative.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "HDI vs GDP", statement: "GDP per capita ignores health, education and distribution." },
            ],
            steps: [
              { reasoning: "GDP per capita measures only income — ignores health and education outcomes.", marks: 1, markCode: "M" },
              { reasoning: "A country can have high GDP but poor life expectancy or low schooling — HDI captures this.", marks: 1, markCode: "M" },
              { reasoning: "HDI combines income, life expectancy and education into a broader development measure.", marks: 1, markCode: "R" },
              { reasoning: "HDI ranges 0–1; higher = more developed across all dimensions.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "GDP per capita ignores health/education; HDI combines all three for broader development measure.",
            commonErrors: ["Thinking higher GDP always means higher development — HDI reveals the gaps."],
          },
        },
        {
          id: "econ-u6-l62c1q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examine the causes and consequences of the poverty trap in developing countries.",
          parts: [
            { label: "a", prompt: "Explain the poverty trap cycle.", marks: 2 },
            { label: "b", prompt: "Identify three factors that reinforce the trap.", marks: 3 },
            { label: "c", prompt: "Evaluate how the trap can be broken.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Poverty trap", statement: "Low income → low saving/investment → low productivity → low income." },
            ],
            steps: [
              { part: "a", reasoning: "Low income → low saving → low investment → low productivity → low income.", marks: 2, markCode: "M" },
              { part: "b", reasoning: "Low saving: households can't invest in education, health or capital.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Low tax revenue: government can't fund infrastructure and public services.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Poor health/education: low human capital → low productivity.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Foreign aid can provide the initial capital to break the cycle.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Microfinance and investment in education/health build human capital.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Institutional reform (property rights, governance) enables sustainable escape.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Low income → low saving → low investment → low productivity → low income. (b) Low saving, low tax revenue, poor human capital. (c) Aid, microfinance, education, institutional reform.",
            commonErrors: ["Suggesting the trap is unbreakable — aid and investment can break it."],
          },
        },
        {
          id: "econ-u6-l62c1q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "On the HDI scale, a score above 0.8 indicates:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Medium development" },
              { id: "b", text: "No development" },
              { id: "c", text: "Low development" },
              { id: "d", text: "Very high development" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "HDI bands", statement: "HDI ranges 0–1: above 0.8 = very high, below 0.55 = low development." },
            ],
            steps: [
              { reasoning: "HDI above 0.8 is classified as very high human development.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Very high development",
            commonErrors: ["Reversing the scale — higher HDI means more development."],
          },
        },
        {
          id: "econ-u6-l62c1q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "The poverty trap is best described as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A temporary fall in income during a recession" },
              { id: "b", text: "A self-reinforcing cycle of low income, low saving, low investment and low productivity" },
              { id: "c", text: "High inflation causing prices to rise quickly" },
              { id: "d", text: "A country with no natural resources" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Poverty trap", statement: "Low income → low saving → low investment → low productivity → low income." },
            ],
            steps: [
              { reasoning: "The trap is a dynamic cycle, not a one-off income fall.", marks: 1, markCode: "M" },
              { reasoning: "Each stage reinforces the next, making escape difficult without external help.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** A self-reinforcing cycle of low income, low saving, low investment and low productivity",
            commonErrors: ["Describing poverty as static rather than a reinforcing cycle."],
          },
        },
        {
          id: "econ-u6-l62c1q7",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Which of the following is NOT a typical cause of underdevelopment?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Weak institutions and corruption" },
              { id: "b", text: "Low capital accumulation" },
              { id: "c", text: "High levels of domestic saving and investment" },
              { id: "d", text: "Poor health and low education" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Causes of underdevelopment", statement: "Low capital, low human capital, weak institutions, geography and historical factors." },
            ],
            steps: [
              { reasoning: "High saving and investment would help development, not hinder it.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** High levels of domestic saving and investment",
            commonErrors: ["Picking an actual cause — high saving is a solution, not a cause."],
          },
        },
        {
          id: "econ-u6-l62c1q8",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 3,
          stem: "Which statement best evaluates the use of GDP per capita versus the HDI to measure development?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The HDI is superior in all cases because GDP is useless" },
              { id: "b", text: "GDP per capita is always superior because it is simpler" },
              { id: "c", text: "Both measures are identical and interchangeable" },
              { id: "d", text: "GDP per capita captures income only; the HDI adds health and education but is harder to measure and update" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "comparison", name: "GDP per capita vs HDI", statement: "GDP per capita measures income; HDI adds health and education but is more complex to compile." },
            ],
            steps: [
              { reasoning: "GDP per capita captures only the income dimension of development.", marks: 1, markCode: "M" },
              { reasoning: "HDI is broader but relies on survey data that is costlier and less frequent.", marks: 1, markCode: "R" },
              { reasoning: "Therefore choice (c) is the best evaluation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** GDP per capita captures income only; the HDI adds health and education but is harder to measure and update",
            commonErrors: ["Claiming one measure is universally better — each has strengths and limits."],
          },
        },
        {
          id: "econ-u6-l62c1q9",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "In the poverty trap, low government tax revenue is a problem because it:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Reduces the money available for infrastructure and public services" },
              { id: "b", text: "Increases household saving automatically" },
              { id: "c", text: "Guarantees higher GDP growth" },
              { id: "d", text: "Raises interest rates on foreign loans" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Poverty trap mechanism", statement: "Low income → low tax revenue → poor public services → low productivity → low income." },
            ],
            steps: [
              { reasoning: "Poor countries cannot fund roads, schools and clinics, reinforcing low productivity.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Reduces the money available for infrastructure and public services",
            commonErrors: ["Ignoring the government channel of the trap — tax revenue funds public goods."],
          },
        },
        {
          id: "econ-u6-l62c1q10",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "A country records HDI component indices of 0.80 for health, 0.65 for education and 0.75 for income. Assuming equal weighting, calculate its HDI and the increase needed to reach 0.80.",
          response: {
            type: "numeric",
            parts: [
              { label: "HDI", answer: 0.73, tolerance: 0.01 },
              { label: "Increase needed to reach 0.80", answer: 0.07, tolerance: 0.01 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "HDI", statement: "HDI = mean of the health, education and income indices" },
            ],
            steps: [
              { reasoning: "HDI = (0.80 + 0.65 + 0.75)/3 = 2.20/3 ≈ 0.73.", working: "\\frac{0.80+0.65+0.75}{3} = \\frac{2.20}{3} \\approx 0.73", marks: 1, markCode: "M" },
              { reasoning: "Increase needed = 0.80 − 0.73 = 0.07.", working: "0.80 - 0.73 = 0.07", marks: 1, markCode: "M" },
              { reasoning: "HDI ≈ 0.73.", marks: 1, markCode: "A" },
              { reasoning: "Increase needed ≈ 0.07.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "HDI ≈ 0.73; increase needed ≈ 0.07.",
            commonErrors: ["Multiplying the indices instead of averaging them."],
          },
        },
        {
          id: "econ-u6-l62c1q11",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "A developing country has real GDP of $500bn and a population of 100 million. Calculate GDP per capita. If real GDP rises to $550bn with population unchanged, calculate the new GDP per capita.",
          response: {
            type: "numeric",
            parts: [
              { label: "Initial GDP per capita ($)", answer: 5000 },
              { label: "New GDP per capita ($)", answer: 5500 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "GDP per capita", statement: "GDP per capita = GDP / population" },
            ],
            steps: [
              { reasoning: "GDP per capita = 500bn / 100m = $5,000.", working: "\\frac{500 \\times 10^9}{100 \\times 10^6} = 5000", marks: 1, markCode: "M" },
              { reasoning: "New GDP per capita = 550bn / 100m = $5,500.", working: "\\frac{550 \\times 10^9}{100 \\times 10^6} = 5500", marks: 1, markCode: "M" },
              { reasoning: "Initial GDP per capita is $5,000.", marks: 1, markCode: "A" },
              { reasoning: "New GDP per capita is $5,500.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Initial = $5,000; new = $5,500.",
            commonErrors: ["Mixing up billions and millions in the division."],
          },
        },
        {
          id: "econ-u6-l62c1q12",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "A poor household earns $2,000 per year and spends $1,900, saving $100 annually. To finance a $1,000 investment in a sewing machine, how many years must it save at the same rate?",
          response: {
            type: "numeric",
            parts: [
              { label: "Annual saving ($)", answer: 100 },
              { label: "Years needed", answer: 10 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Saving accumulation", statement: "Years to save = target investment / annual saving" },
            ],
            steps: [
              { reasoning: "Annual saving = 2,000 − 1,900 = $100.", working: "2000 - 1900 = 100", marks: 1, markCode: "M" },
              { reasoning: "Years needed = 1,000 / 100 = 10 years.", working: "1000 \\div 100 = 10", marks: 1, markCode: "M" },
              { reasoning: "Annual saving is $100.", marks: 1, markCode: "A" },
              { reasoning: "The household needs 10 years — illustrating how slowly the poor can accumulate capital.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Saves $100 per year; needs 10 years to afford the $1,000 investment.",
            commonErrors: ["Ignoring that saving is only $100 — the trap is slow accumulation, not zero saving."],
          },
        },
        {
          id: "econ-u6-l62c1q13",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "A country has real GDP of $400bn and domestic saving of $12bn, but needs $20bn of investment to escape the poverty trap. Calculate the savings gap, and express foreign aid equal to the gap as a percentage of GDP.",
          response: {
            type: "numeric",
            parts: [
              { label: "Savings/investment gap ($bn)", answer: 8 },
              { label: "Aid as % of GDP", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Savings gap", statement: "Savings gap = required investment − domestic saving" },
            ],
            steps: [
              { reasoning: "Gap = 20 − 12 = $8bn.", working: "20 - 12 = 8", marks: 1, markCode: "M" },
              { reasoning: "Aid % of GDP = 8/400 × 100 = 2%.", working: "\\frac{8}{400} \\times 100 = 2\\%", marks: 1, markCode: "M" },
              { reasoning: "The savings gap is $8bn.", marks: 1, markCode: "A" },
              { reasoning: "Aid of just 2% of GDP would close the gap.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Savings gap = $8bn; aid needed = 2% of GDP.",
            commonErrors: ["Forgetting to express aid relative to GDP for context."],
          },
        },
        {
          id: "econ-u6-l62c1q14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "The international poverty line is approximately $1.90 per day, or $693.50 per year. A household of four earns $2,000 per year in total. Calculate the household's per capita income and determine whether it falls below the poverty line.",
          response: {
            type: "numeric",
            parts: [
              { label: "Per capita income ($/year)", answer: 500 },
              { label: "Poverty line ($/year)", answer: 693.5 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Poverty line", statement: "Income below $1.90/day (≈ $693.50/year) is classified as extreme poverty." },
            ],
            steps: [
              { reasoning: "Per capita income = 2,000 / 4 = $500 per year.", working: "2000 \\div 4 = 500", marks: 1, markCode: "M" },
              { reasoning: "$500 < $693.50, so the household is below the poverty line.", working: "500 < 693.5", marks: 1, markCode: "M" },
              { reasoning: "Per capita income is $500 per year.", marks: 1, markCode: "A" },
              { reasoning: "The household is in extreme poverty — total household income can look adequate while per capita income is not.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Per capita income = $500/year; poverty line = $693.50/year — the household is below it.",
            commonErrors: ["Comparing total household income ($2,000) to the line instead of per capita income."],
          },
        },
        {
          id: "econ-u6-l62c1q15",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "A country records HDI component indices of 0.90 for health, 0.80 for education and 0.70 for income. Calculate its HDI and state whether it qualifies as 'very high' development.",
          response: {
            type: "numeric",
            parts: [
              { label: "HDI", answer: 0.8, tolerance: 0.01 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "HDI", statement: "HDI = mean of health, education and income indices" },
            ],
            steps: [
              { reasoning: "HDI = (0.90 + 0.80 + 0.70)/3 = 2.40/3 = 0.80.", working: "\\frac{0.90+0.80+0.70}{3} = \\frac{2.40}{3} = 0.80", marks: 1, markCode: "M" },
              { reasoning: "0.80 is the boundary — it meets the 'very high' threshold of ≥0.8.", working: "0.80 \\geq 0.8", marks: 1, markCode: "M" },
              { reasoning: "HDI = 0.80, qualifying as very high development.", marks: 1, markCode: "A" },
              { reasoning: "Note the strong health index lifts HDI despite weaker income.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "HDI = 0.80 — at the threshold for very high development.",
            commonErrors: ["Treating 0.80 as below the threshold — 'very high' starts at 0.8."],
          },
        },
        {
          id: "econ-u6-l62c1q16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examine the causes of the poverty trap and evaluate the strategies available to break it.",
          parts: [
            { label: "a", prompt: "Explain the mechanism of the poverty trap.", marks: 2 },
            { label: "b", prompt: "Identify three reinforcing causes of underdevelopment.", marks: 3 },
            { label: "c", prompt: "Evaluate aid, microfinance and institutional reform as ways to break the trap.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Poverty trap", statement: "Low income → low saving/investment → low productivity → low income; broken by external resources or institutional change." },
            ],
            steps: [
              { part: "a", reasoning: "Low income prevents saving and investment, keeping productivity and income low — a self-reinforcing cycle.", marks: 2, markCode: "M" },
              { part: "b", reasoning: "Low saving: households cannot invest in education, health or capital.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Low tax revenue: government cannot fund infrastructure and public services.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Weak institutions: corruption and insecure property rights discourage investment.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Aid fills the savings gap but risks dependency if misused.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Microfinance enables small-scale entrepreneurship and builds assets.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Institutional reform creates the incentives for sustainable escape — reasoned judgement: combine all three.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Self-reinforcing low income–saving–investment–productivity cycle. (b) Low saving, low tax revenue, weak institutions. (c) Aid, microfinance and reform each help; combined they are most effective.",
            commonErrors: ["Recommending a single solution — breaking the trap usually needs several complementary interventions."],
          },
        },
      ],
    },
    {
      id: "econ-u6-aid-microfinance",
      title: "Aid and Microfinance",
      skill: "Evaluate foreign aid and microfinance as strategies for promoting development.",
      lesson: {
        sections: [
          {
            heading: "Foreign aid",
            body: "**Foreign aid** includes grants, loans and technical assistance from rich to poor countries. **Types**: humanitarian (emergency relief), development aid (infrastructure, education), tied aid (must buy donor's goods), multilateral (via UN/World Bank). **Arguments for**: fills savings gap, funds infrastructure, emergency relief, supports MDGs/SDGs. **Arguments against**: dependency, corruption/misuse, may undermine local producers, often tied to donor interests.",
          },
          {
            heading: "Microfinance",
            body: "**Microfinance** provides small loans, savings and insurance to poor people excluded from formal banking. Pioneered by Grameen Bank (Bangladesh). **Benefits**: enables entrepreneurship, income generation, women's empowerment, financial inclusion. **Criticisms**: high interest rates, over-indebtedness, may not reach the poorest, impact on poverty reduction debated.",
          },
          {
            heading: "Other development strategies",
            body: "**Fair trade** ensures better prices for producers. **Debt relief** (HIPC initiative) frees resources for spending. **Remittances** from migrant workers provide significant income. **Foreign direct investment** brings capital and jobs. **Appropriate technology** suits local conditions. **Bottom-up vs top-down**: micro-level interventions vs large-scale projects — both have roles.",
          },
        ],
        keyFormulas: [
          { name: "Aid types", statement: "Humanitarian + development + tied + multilateral" },
          { name: "Microfinance", statement: "Small loans/savings/insurance for the unbanked" },
        ],
        workedExample: {
          problem: "A microfinance institution lends $200 to a woman to buy sewing machines. Explain the potential development impact.",
          solution: "She earns income from garment production → higher household income → better nutrition/education → possible multiplier effects in the local economy → poverty reduction.",
        },
      },
      questions: [
        {
          id: "econ-u6-l62c2q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Microfinance primarily provides:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Small loans and financial services to poor people" },
              { id: "b", text: "Large loans to governments" },
              { id: "c", text: "Military assistance" },
              { id: "d", text: "Free goods to communities" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Microfinance", statement: "Small loans, savings and insurance for people excluded from formal banking." },
            ],
            steps: [
              { reasoning: "Microfinance = small-scale financial services for the poor/unbanked.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Small loans and financial services to poor people",
            commonErrors: ["Confusing microfinance with foreign aid — different mechanisms."],
          },
        },
        {
          id: "econ-u6-l62c2q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Explain one argument for and one argument against foreign aid.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Aid evaluation", statement: "For: fills savings gap, funds development. Against: dependency, misuse." },
            ],
            steps: [
              { reasoning: "For: fills the savings/investment gap and funds infrastructure, education, health.", marks: 1, markCode: "M" },
              { reasoning: "Against: may create dependency and reduce incentives for local effort.", marks: 1, markCode: "M" },
              { reasoning: "Also: funds may be misused/corrupt or tied to donor interests.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "For: fills investment gap. Against: dependency, misuse, tied conditions.",
            commonErrors: ["Listing only one side — evaluation requires both."],
          },
        },
        {
          id: "econ-u6-l62c2q3",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Explain how microfinance can contribute to poverty reduction, and one criticism of microfinance.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Microfinance impact", statement: "Small loans enable entrepreneurship and income; criticisms include high rates and limited reach." },
            ],
            steps: [
              { reasoning: "Small loans enable poor people to start businesses → income generation.", marks: 1, markCode: "M" },
              { reasoning: "Financial inclusion empowers women and builds assets over time.", marks: 1, markCode: "M" },
              { reasoning: "Criticism: high interest rates can lead to over-indebtedness; may not reach the poorest.", marks: 1, markCode: "R" },
              { reasoning: "Impact on poverty reduction is debated — evidence is mixed.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Microfinance → entrepreneurship → income → poverty reduction; but high rates/debt risk and limited reach.",
            commonErrors: ["Assuming microfinance always reduces poverty — evidence is mixed."],
          },
        },
        {
          id: "econ-u6-l62c2q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Evaluate foreign aid as a strategy for promoting development in low-income countries.",
          parts: [
            { label: "a", prompt: "Explain the different types of foreign aid.", marks: 2 },
            { label: "b", prompt: "Explain two arguments for and two against aid.", marks: 3 },
            { label: "c", prompt: "Evaluate the conditions under which aid is most effective.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Aid evaluation", statement: "Aid can fill gaps but risks dependency; effectiveness depends on governance and design." },
            ],
            steps: [
              { part: "a", reasoning: "Types: humanitarian (emergency), development (infrastructure), tied (conditional), multilateral (UN/World Bank).", marks: 2, markCode: "M" },
              { part: "b", reasoning: "For: fills savings gap, funds infrastructure/education, emergency relief.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Against: dependency, corruption/misuse, undermines local producers, tied to donor interests.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Both sides identified.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Effective when: good governance, targeted at capacity building, untied, aligned with local priorities.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Ineffective when: corrupt regimes, emergency-only, or creating dependency.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned judgement: aid works best as a complement to domestic reform and institutions — not a substitute.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Humanitarian, development, tied, multilateral. (b) For: fills gaps. Against: dependency/misuse. (c) Works with good governance + local ownership.",
            commonErrors: ["Treating aid as universally good or bad — context determines effectiveness."],
          },
        },
        {
          id: "econ-u6-l62c2q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "'Tied aid' refers to aid that:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Must be spent on goods and services from the donor country" },
              { id: "b", text: "Is repaid with interest immediately" },
              { id: "c", text: "Is given only during natural disasters" },
              { id: "d", text: "Comes with no conditions attached" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Tied aid", statement: "Aid conditional on purchasing the donor country's goods and services." },
            ],
            steps: [
              { reasoning: "Tied aid benefits donor exporters but may not suit the recipient's needs.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Must be spent on goods and services from the donor country",
            commonErrors: ["Confusing tied aid with untied aid — tied aid restricts how funds are spent."],
          },
        },
        {
          id: "econ-u6-l62c2q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Which of the following is a criticism of microfinance?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "High interest rates can cause over-indebtedness, and it may not reach the poorest" },
              { id: "b", text: "It provides loans that are too large for borrowers" },
              { id: "c", text: "It excludes women from financial services" },
              { id: "d", text: "It is only available in rich countries" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Microfinance criticisms", statement: "High interest rates, over-indebtedness and limited reach to the very poorest." },
            ],
            steps: [
              { reasoning: "Microfinance loans are small; the issue is the cost and debt burden, not size.", marks: 1, markCode: "M" },
              { reasoning: "Evidence on poverty impact is mixed — microfinance may not reach the poorest.", marks: 1, markCode: "R" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** High interest rates can cause over-indebtedness, and it may not reach the poorest",
            commonErrors: ["Assuming microfinance is universally beneficial — its impact is debated."],
          },
        },
        {
          id: "econ-u6-l62c2q7",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The Grameen Bank, founded in Bangladesh, is famous for pioneering:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Foreign aid programmes" },
              { id: "b", text: "Central banking" },
              { id: "c", text: "Microfinance and microcredit" },
              { id: "d", text: "Debt relief initiatives" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Grameen Bank", statement: "Pioneered group-based microcredit lending to poor borrowers, especially women." },
            ],
            steps: [
              { reasoning: "Grameen Bank pioneered microfinance — small loans to the unbanked poor.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Microfinance and microcredit",
            commonErrors: ["Confusing microfinance institutions with aid agencies."],
          },
        },
        {
          id: "econ-u6-l62c2q8",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 3,
          stem: "Which statement best evaluates foreign aid as a development strategy?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Aid never works because it always creates dependency" },
              { id: "b", text: "Aid's effectiveness depends on governance, design and whether it builds local capacity" },
              { id: "c", text: "Aid only works when it is tied to donor goods" },
              { id: "d", text: "Aid is always effective because money automatically reduces poverty" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Aid effectiveness", statement: "Aid works best with good governance, local ownership and capacity building; it can fail through corruption or dependency." },
            ],
            steps: [
              { reasoning: "Aid is neither universally good nor bad — outcomes depend on context.", marks: 1, markCode: "R" },
              { reasoning: "Corrupt regimes and emergency-only aid waste resources; targeted, untied aid with ownership works better.", marks: 1, markCode: "R" },
              { reasoning: "Therefore choice (c) is the best evaluation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Aid's effectiveness depends on governance, design and whether it builds local capacity",
            commonErrors: ["Evaluating aid in absolute terms — effectiveness is conditional."],
          },
        },
        {
          id: "econ-u6-l62c2q9",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Debt relief initiatives such as the HIPC initiative aim to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Free resources so governments can spend on health, education and infrastructure" },
              { id: "b", text: "Increase a country's export earnings" },
              { id: "c", text: "Force countries to borrow more" },
              { id: "d", text: "Replace all foreign aid" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Debt relief", statement: "Cancelling or reducing poor countries' debt to free budget resources for development spending." },
            ],
            steps: [
              { reasoning: "Removing debt repayments frees fiscal space for health, education and infrastructure.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Free resources so governments can spend on health, education and infrastructure",
            commonErrors: ["Thinking debt relief increases borrowing — it reduces the debt burden."],
          },
        },
        {
          id: "econ-u6-l62c2q10",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "A microfinance borrower takes a loan of $300 at 25% annual interest for one year. Calculate the interest owed and the total amount to be repaid.",
          response: {
            type: "numeric",
            parts: [
              { label: "Interest owed ($)", answer: 75 },
              { label: "Total repayment ($)", answer: 375 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Simple interest", statement: "Interest = principal × rate × time" },
            ],
            steps: [
              { reasoning: "Interest = 300 × 0.25 × 1 = $75.", working: "300 \\times 0.25 = 75", marks: 1, markCode: "M" },
              { reasoning: "Total repayment = 300 + 75 = $375.", working: "300 + 75 = 375", marks: 1, markCode: "M" },
              { reasoning: "Interest owed is $75.", marks: 1, markCode: "A" },
              { reasoning: "Total repayment is $375 — the 25% rate illustrates why microfinance costs are criticised.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Interest = $75; total repayment = $375.",
            commonErrors: ["Forgetting to add the principal back when calculating total repayment."],
          },
        },
        {
          id: "econ-u6-l62c2q11",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "A country receives foreign aid of $8bn. Its GDP is $320bn and population is 40 million. Calculate aid as a percentage of GDP and aid per person.",
          response: {
            type: "numeric",
            parts: [
              { label: "Aid as % of GDP", answer: 2.5 },
              { label: "Aid per person ($)", answer: 200 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Aid ratios", statement: "Aid/GDP = aid ÷ GDP; aid per capita = aid ÷ population" },
            ],
            steps: [
              { reasoning: "Aid/GDP = 8/320 × 100 = 2.5%.", working: "\\frac{8}{320} \\times 100 = 2.5\\%", marks: 1, markCode: "M" },
              { reasoning: "Aid per person = 8bn / 40m = $200.", working: "\\frac{8 \\times 10^9}{40 \\times 10^6} = 200", marks: 1, markCode: "M" },
              { reasoning: "Aid is 2.5% of GDP.", marks: 1, markCode: "A" },
              { reasoning: "Aid per person is $200 per year.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Aid = 2.5% of GDP; $200 per person.",
            commonErrors: ["Reporting aid per person in billions instead of dollars."],
          },
        },
        {
          id: "econ-u6-l62c2q12",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "A donor injects $50m of development aid into an economy with a marginal propensity to consume of 0.75. Calculate the multiplier and the total increase in national income.",
          response: {
            type: "numeric",
            parts: [
              { label: "Multiplier", answer: 4 },
              { label: "Increase in national income ($m)", answer: 200 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Multiplier", statement: "Multiplier = 1 / (1 − MPC)" },
            ],
            steps: [
              { reasoning: "Multiplier = 1/(1 − 0.75) = 1/0.25 = 4.", working: "1 \\div (1 - 0.75) = 4", marks: 1, markCode: "M" },
              { reasoning: "Income increase = 50 × 4 = $200m.", working: "50 \\times 4 = 200", marks: 1, markCode: "M" },
              { reasoning: "The multiplier is 4.", marks: 1, markCode: "A" },
              { reasoning: "National income rises by $200m — aid can have amplified effects through the circular flow.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Multiplier = 4; income increases by $200m.",
            commonErrors: ["Using MPC as the multiplier instead of 1/(1−MPC)."],
          },
        },
        {
          id: "econ-u6-l62c2q13",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "A woman borrows $500 from a microfinance institution at 10% interest and invests it in a business earning a 30% return in one year. Calculate her gross business earnings and her net gain after repaying the loan and interest.",
          response: {
            type: "numeric",
            parts: [
              { label: "Gross business earnings ($)", answer: 650 },
              { label: "Net gain after repayment ($)", answer: 100 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Return on microloan", statement: "Net gain = loan × (return rate − interest rate)" },
            ],
            steps: [
              { reasoning: "Gross earnings = 500 × 1.30 = $650.", working: "500 \\times 1.30 = 650", marks: 1, markCode: "M" },
              { reasoning: "Repayment = 500 × 1.10 = $550; net gain = 650 − 550 = $100.", working: "650 - 550 = 100", marks: 1, markCode: "M" },
              { reasoning: "Gross business earnings are $650.", marks: 1, markCode: "A" },
              { reasoning: "Net gain is $100 — the 20-point margin between return and interest determines success.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Gross earnings = $650; net gain = $100.",
            commonErrors: ["Ignoring the interest cost — net gain is earnings minus loan repayment."],
          },
        },
        {
          id: "econ-u6-l62c2q14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "A low-income country receives $10bn in remittances, $25bn in foreign direct investment and $5bn in foreign aid. Calculate total financial inflows and express aid as a share of total inflows.",
          response: {
            type: "numeric",
            parts: [
              { label: "Total financial inflows ($bn)", answer: 40 },
              { label: "Aid share of inflows (%)", answer: 12.5 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Inflow composition", statement: "Total inflows = remittances + FDI + aid; aid share = aid / total inflows" },
            ],
            steps: [
              { reasoning: "Total inflows = 10 + 25 + 5 = $40bn.", working: "10 + 25 + 5 = 40", marks: 1, markCode: "M" },
              { reasoning: "Aid share = 5/40 × 100 = 12.5%.", working: "\\frac{5}{40} \\times 100 = 12.5\\%", marks: 1, markCode: "M" },
              { reasoning: "Total inflows are $40bn.", marks: 1, markCode: "A" },
              { reasoning: "Aid is 12.5% of inflows — FDI is the largest single source.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Total inflows = $40bn; aid = 12.5% of inflows.",
            commonErrors: ["Comparing aid to GDP instead of total inflows when asked for share of inflows."],
          },
        },
        {
          id: "econ-u6-l62c2q15",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Microfinance Institution A charges 20% annual interest and Institution B charges 40%. On identical loans of $200, calculate the interest each charges in one year.",
          response: {
            type: "numeric",
            parts: [
              { label: "Interest charged by A ($)", answer: 40 },
              { label: "Interest charged by B ($)", answer: 80 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Simple interest", statement: "Interest = principal × rate × time" },
            ],
            steps: [
              { reasoning: "A: 200 × 0.20 = $40.", working: "200 \\times 0.20 = 40", marks: 1, markCode: "M" },
              { reasoning: "B: 200 × 0.40 = $80.", working: "200 \\times 0.40 = 80", marks: 1, markCode: "M" },
              { reasoning: "Institution A charges $40.", marks: 1, markCode: "A" },
              { reasoning: "Institution B charges $80 — twice the rate doubles the interest burden on poor borrowers.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "A charges $40; B charges $80.",
            commonErrors: ["Forgetting the interest rate applies to the principal only."],
          },
        },
        {
          id: "econ-u6-l62c2q16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Compare and evaluate foreign aid and microfinance as strategies for promoting development.",
          parts: [
            { label: "a", prompt: "Explain how each strategy works.", marks: 2 },
            { label: "b", prompt: "Identify one strength and one weakness of each.", marks: 3 },
            { label: "c", prompt: "Evaluate which is more effective for the poorest households.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "comparison", name: "Aid vs microfinance", statement: "Aid = large external transfers; microfinance = small local loans enabling entrepreneurship." },
            ],
            steps: [
              { part: "a", reasoning: "Aid transfers resources (grants, loans, technical help) from rich to poor countries.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Microfinance provides small loans and savings services to individuals excluded from banks.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Aid strength: fills the savings/investment gap at national scale; weakness: dependency and misuse.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Microfinance strength: direct household empowerment and entrepreneurship; weakness: high rates and limited reach.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Both identified with strengths and weaknesses.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "For the poorest, microfinance may not reach them and aid may be captured by elites.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned judgement: aid suits national capacity building; microfinance suits household enterprise — they are complements, not substitutes.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Combined with education and institutions, both contribute to sustainable development.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Aid = external transfers; microfinance = small local loans. (b) Aid: scale vs dependency; microfinance: empowerment vs debt risk. (c) Complementary — best combined.",
            commonErrors: ["Treating them as substitutes rather than complementary tools."],
          },
        },
      ],
    },
  ],
};
