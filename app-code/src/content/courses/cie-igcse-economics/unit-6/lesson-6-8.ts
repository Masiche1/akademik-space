import type { Lesson } from "../../../types.ts";

export const lesson68: Lesson = {
  id: "cieige-u6-lesson-6-8",
  code: "6-8",
  title: "Development Economics: Poverty and Inequality",
  goal: "I CAN analyse causes of poverty, inequality measures and development strategies.",
  standards: ["Cambridge IGCSE Economics 0455", "Unit 6: development"],
  vocabulary: [
    {
      term: "Poverty",
      definition: "Inability to meet basic needs — absolute or relative.",
    },
    {
      term: "Absolute poverty",
      definition: "Below minimum subsistence level (e.g. $1.90/day).",
    },
    {
      term: "Relative poverty",
      definition: "Below a fraction of median income.",
    },
    {
      term: "Gini coefficient",
      definition: "Measure of income inequality (0 = equal, 1 = max).",
    },
    {
      term: "Human Development Index (HDI)",
      definition: "Composite of income, health, education.",
    },
    {
      term: "Poverty trap",
      definition: "Cycle where poverty prevents escape.",
    },
  ],
  concepts: [
    {
      id: "cieige-u6l8-c1-poverty",
      title: "Poverty and inequality",
      skill: "Explain poverty causes, inequality measures and poverty traps.",
      lesson: {
        sections: [
          {
            heading: "Types and causes",
            body: "**Absolute poverty** = below subsistence; **relative poverty** = below median fraction. Causes: low productivity, unemployment, low wages, discrimination, poor education/health, weak institutions, conflict. **Poverty trap** — low income → low saving → low investment → low productivity → low income.",
          },
          {
            heading: "Measuring inequality",
            body: "**Gini coefficient**: 0 = perfect equality, 1 = perfect inequality. **Lorenz curve** visualises distribution. **HDI** combines income, health (life expectancy), education — broader than GDP per capita. High inequality can slow growth and destabilise society.",
          },
        ],
        keyFormulas: [
          { name: "Gini", statement: "0 = equal, 1 = max inequality" },
          {
            name: "Poverty trap",
            statement: "Low income → low investment → low income",
          },
          { name: "HDI", statement: "Income + health + education" },
        ],
        workedExample: {
          problem: "Why is GDP per capita insufficient to measure development?",
          solution:
            "It ignores inequality (average may hide poverty), health, education, and non-income wellbeing — HDI provides a broader picture.",
        },
      },
      questions: [
        {
          id: "cieige-q-u6l8c1-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Absolute poverty means:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Relative deprivation" },
              { id: "b", text: "No income at all" },
              { id: "c", text: "Below minimum subsistence level" },
              { id: "d", text: "Below median income" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Absolute poverty",
                statement: "Below subsistence.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Below subsistence",
            commonErrors: ["Confusing with relative."],
          },
        },
        {
          id: "cieige-q-u6l8c1-2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the 'poverty trap'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Poverty trap",
                statement: "Cycle of low income → low investment.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Mechanism.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Low income → can't save/invest → low productivity → low income — self-reinforcing cycle difficult to escape without external help.",
            commonErrors: ["Thinking poverty is static."],
          },
        },
        {
          id: "cieige-q-u6l8c1-3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the Gini coefficient.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Gini",
                statement: "Inequality measure 0-1.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Interpretation.", marks: 1, markCode: "M" },
              { reasoning: "Limitation.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Gini measures income inequality from 0 (perfect equality) to 1 (perfect inequality); ignores non-income factors and wealth distribution.",
            commonErrors: ["Reversing scale."],
          },
        },
        {
          id: "cieige-q-u6l8c1-4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Give two causes of poverty in developing countries.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Poverty causes",
                statement: "Low productivity, institutions, conflict.",
              },
            ],
            steps: [
              { reasoning: "Two valid causes.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 2, markCode: "A" },
              { reasoning: "Distinguish types.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "e.g. low agricultural productivity (subsistence farming) and weak institutions/corruption preventing development — both structural, not just individual failure.",
            commonErrors: ["Blaming individuals only."],
          },
        },
        {
          id: "cieige-q-u6l8c1-5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate whether economic growth reduces poverty.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Growth-poverty",
                statement: "Depends on distribution.",
              },
            ],
            steps: [
              {
                reasoning: "Growth can reduce poverty.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "If unequal, may not.", marks: 1, markCode: "M" },
              { reasoning: "Evidence/examples.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Growth reduces poverty only if benefits reach the poor — 'trickle-down' is unreliable; growth with inequality or concentrated benefits may not reduce poverty at all.",
            commonErrors: ["Assuming automatic."],
          },
        },
        {
          id: "cieige-q-u6l8c1-6",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the HDI?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "HDI",
                statement: "Income + health + education.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Advantage over GDP.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Human Development Index combines income, life expectancy and education — broader than GDP per capita, capturing wellbeing dimensions.",
            commonErrors: ["Confusing with GDP."],
          },
        },
        {
          id: "cieige-q-u6l8c1-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A Gini coefficient of 0 means:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Perfect equality" },
              { id: "b", text: "No data" },
              { id: "c", text: "Maximum inequality" },
              { id: "d", text: "Average income" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "fact", name: "Gini", statement: "0 = equality." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Perfect equality",
            commonErrors: ["Reversing."],
          },
        },
        {
          id: "cieige-q-u6l8c1-8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why might high inequality be harmful to an economy?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Inequality costs",
                statement: "Slows growth, instability, social harm.",
              },
            ],
            steps: [
              { reasoning: "Growth mechanism.", marks: 1, markCode: "M" },
              { reasoning: "Social mechanism.", marks: 1, markCode: "M" },
              { reasoning: "Nuance.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "High inequality limits human capital (poor can't invest in education), fuels social instability, and may slow growth — though some inequality may incentivise effort.",
            commonErrors: ["All inequality harmful."],
          },
        },
        {
          id: "cieige-q-u6l8c1-9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain 'absolute' vs 'relative' poverty with examples.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Poverty types",
                statement: "Subsistence vs relative deprivation.",
              },
            ],
            steps: [
              { reasoning: "Absolute defined.", marks: 1, markCode: "M" },
              { reasoning: "Relative defined.", marks: 1, markCode: "M" },
              { reasoning: "Example each.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Absolute: below subsistence ($1.90/day) — malnutrition, no shelter. Relative: below fraction of median income — can't afford what society considers normal.",
            commonErrors: ["Treating same."],
          },
        },
        {
          id: "cieige-q-u6l8c1-10",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Analyse how a poverty trap operates and what can break it.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Poverty trap",
                statement: "Low income → low investment → low income.",
              },
            ],
            steps: [
              { reasoning: "Trap mechanism.", marks: 1, markCode: "M" },
              { reasoning: "Why hard to escape.", marks: 1, markCode: "M" },
              { reasoning: "Breaking mechanisms.", marks: 1, markCode: "A" },
              { reasoning: "Weighs factors.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Trap: poverty prevents saving/investment in health/education → low productivity → poverty persists; breaking requires external aid, microfinance, or institutional change.",
            commonErrors: ["Thinking individuals can escape alone."],
          },
        },
        {
          id: "cieige-q-u6l8c1-11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Relative poverty is measured relative to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Median income or others in society" },
              { id: "b", text: "A fixed subsistence level" },
              { id: "c", text: "The inflation rate" },
              { id: "d", text: "GDP per capita" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Relative poverty",
                statement: "Below a fraction of median income.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Median income / others",
            commonErrors: ["Confusing with absolute poverty."],
          },
        },
        {
          id: "cieige-q-u6l8c1-12",
          difficulty: "core",
          totalMarks: 1,
          stem: "The Lorenz curve is used to show:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Employment by sector" },
              { id: "b", text: "Price level changes" },
              { id: "c", text: "GDP growth over time" },
              { id: "d", text: "The distribution of income across a population" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Lorenz curve",
                statement: "Income distribution diagram.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Income distribution",
            commonErrors: ["Confusing with demand curve."],
          },
        },
        {
          id: "cieige-q-u6l8c1-13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "The poverty trap persists mainly because:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Low income prevents the saving and investment needed to raise productivity",
              },
              { id: "b", text: "Governments always steal aid" },
              { id: "c", text: "Natural resources are absent" },
              { id: "d", text: "Poor people lack ambition" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Poverty trap",
                statement: "Low income → low investment → low income.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Low income → low investment",
            commonErrors: ["Blaming individuals."],
          },
        },
        {
          id: "cieige-q-u6l8c1-14",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the Lorenz curve used for?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Lorenz curve",
                statement: "Visualises income distribution.",
              },
            ],
            steps: [
              { reasoning: "Purpose correct.", marks: 1, markCode: "M" },
              { reasoning: "Interpretation.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "It plots cumulative share of population against cumulative share of income — the further the curve bows from the line of equality, the greater the inequality (related to the Gini coefficient).",
            commonErrors: ["Confusing with supply curve."],
          },
        },
        {
          id: "cieige-q-u6l8c1-15",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain two ways in which high inequality can hinder economic growth.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Inequality costs",
                statement: "Human capital, stability, demand.",
              },
            ],
            steps: [
              { reasoning: "First mechanism.", marks: 1, markCode: "M" },
              { reasoning: "Second mechanism.", marks: 1, markCode: "M" },
              { reasoning: "Development.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "e.g. poor households cannot afford education/health → lower human capital and productivity; and inequality fuels social instability and limits aggregate demand as the poor have high marginal propensity to consume.",
            commonErrors: ["Only one mechanism."],
          },
        },
        {
          id: "cieige-q-u6l8c1-16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate the use of the Gini coefficient and HDI as measures of development.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Development measures",
                statement: "Complementary but incomplete indicators.",
              },
            ],
            steps: [
              { reasoning: "What each measures.", marks: 1, markCode: "M" },
              { reasoning: "Strengths.", marks: 1, markCode: "M" },
              { reasoning: "Limitations.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Gini captures income inequality and HDI broadens beyond income to health/education — together they give a fuller picture than GDP alone, but both miss dimensions like freedom, environment and political rights.",
            commonErrors: ["One-sided."],
          },
        },
      ],
    },
    {
      id: "cieige-u6l8-c2-development",
      title: "Development strategies",
      skill:
        "Evaluate aid, trade, investment and policy approaches to development.",
      lesson: {
        sections: [
          {
            heading: "Development approaches",
            body: "**Aid** — grants/loans (can build capacity or create dependency). **Trade** — export-led growth, fair trade. **Investment** — FDI brings capital/technology. **Microfinance** — small loans to poor entrepreneurs. **Education/health** — human capital foundation. **Institutions** — property rights, governance matter most.",
          },
          {
            heading: "Challenges",
            body: "Debt burdens, corruption, conflict, climate vulnerability, brain drain, and unequal global structures hinder development. 'Big push' vs gradualism debated. Bottom-up (community) vs top-down (state-led) approaches.",
          },
        ],
        keyFormulas: [
          { name: "Aid types", statement: "Grants, loans, tied vs untied" },
          { name: "FDI", statement: "Foreign direct investment" },
          { name: "Microfinance", statement: "Small loans to poor" },
        ],
        workedExample: {
          problem: "Why might aid fail to reduce poverty?",
          solution:
            "If tied to donor conditions, misused by corrupt governments, or substitutes for local capacity — aid can create dependency rather than development.",
        },
      },
      questions: [
        {
          id: "cieige-q-u6l8c2-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Tied aid' means:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Aid must be spent on donor's goods/services" },
              { id: "b", text: "No conditions" },
              { id: "c", text: "Debt forgiveness" },
              { id: "d", text: "Free grants" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Tied aid",
                statement: "Conditional spending.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Must buy donor's goods",
            commonErrors: ["Confusing with grants."],
          },
        },
        {
          id: "cieige-q-u6l8c2-2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is 'microfinance'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Microfinance",
                statement: "Small loans to poor.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Purpose.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Provision of small loans and financial services to poor entrepreneurs — enables income generation and self-employment (e.g. Grameen Bank).",
            commonErrors: ["Confusing with charity."],
          },
        },
        {
          id: "cieige-q-u6l8c2-3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two arguments for and against foreign aid.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Aid debate",
                statement: "Capacity vs dependency.",
              },
            ],
            steps: [
              { reasoning: "Two for.", marks: 1, markCode: "M" },
              { reasoning: "Two against.", marks: 1, markCode: "M" },
              { reasoning: "Nuance.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "For: funds services, builds capacity. Against: creates dependency, may be misused by corrupt governments — effectiveness depends on design and governance.",
            commonErrors: ["One-sided."],
          },
        },
        {
          id: "cieige-q-u6l8c2-4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Why might FDI be better for development than aid?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "FDI vs aid",
                statement: "Sustainable vs dependency.",
              },
            ],
            steps: [
              { reasoning: "FDI benefits.", marks: 1, markCode: "M" },
              { reasoning: "Aid limitations.", marks: 1, markCode: "M" },
              { reasoning: "Conditions.", marks: 1, markCode: "M" },
              { reasoning: "Balanced view.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "FDI brings sustainable investment, jobs and technology transfer without creating debt — but requires stable institutions and may exploit weak regulations; aid can fill gaps FDI won't.",
            commonErrors: ["All FDI good."],
          },
        },
        {
          id: "cieige-q-u6l8c2-5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate 'trade not aid' as a development strategy.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Trade-led development",
                statement: "Export-led growth vs aid dependency.",
              },
            ],
            steps: [
              { reasoning: "Trade benefits.", marks: 1, markCode: "M" },
              { reasoning: "Trade limits.", marks: 1, markCode: "M" },
              { reasoning: "Aid's role.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Trade-led growth (East Asian model) is sustainable but requires competitiveness and stable institutions; aid still needed for health/education where markets fail — complementary, not either/or.",
            commonErrors: ["One-sided."],
          },
        },
        {
          id: "cieige-q-u6l8c2-6",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'brain drain'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Brain drain",
                statement: "Skilled workers emigrate.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Impact.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "When skilled professionals (doctors, engineers) leave developing countries for richer ones — loses human capital needed for development.",
            commonErrors: ["Confusing with migration generally."],
          },
        },
        {
          id: "cieige-q-u6l8c2-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Fair trade' aims to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Ban imports" },
              { id: "b", text: "Eliminate all tariffs" },
              {
                id: "c",
                text: "Ensure producers in poor countries get fair prices",
              },
              { id: "d", text: "Subsidise rich farmers" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Fair trade",
                statement: "Fair prices for producers.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Fair prices",
            commonErrors: ["Wrong definition."],
          },
        },
        {
          id: "cieige-q-u6l8c2-8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why do strong institutions matter for development?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Institutions",
                statement: "Property rights, governance, rule of law.",
              },
            ],
            steps: [
              { reasoning: "Mechanism.", marks: 1, markCode: "M" },
              { reasoning: "Examples.", marks: 1, markCode: "M" },
              { reasoning: "Without them.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Strong institutions (property rights, rule of law, low corruption) enable investment and growth — without them, aid and resources are misused or stolen.",
            commonErrors: ["Only citing aid."],
          },
        },
        {
          id: "cieige-q-u6l8c2-9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain 'export-led growth' with an example.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Export-led growth",
                statement: "Manufacturing exports drive development.",
              },
            ],
            steps: [
              { reasoning: "Mechanism.", marks: 1, markCode: "M" },
              { reasoning: "Example.", marks: 1, markCode: "M" },
              { reasoning: "Conditions.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Growth driven by manufacturing exports — e.g. East Asian tigers (South Korea, Taiwan) — requires competitive exchange rates, skills and stable institutions.",
            commonErrors: ["Thinking all exports work."],
          },
        },
        {
          id: "cieige-q-u6l8c2-10",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Should aid be conditional on governance reforms? Analyse.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Aid conditionality",
                statement: "Effectiveness vs sovereignty.",
              },
            ],
            steps: [
              { reasoning: "Case for conditions.", marks: 1, markCode: "M" },
              { reasoning: "Case against.", marks: 1, markCode: "M" },
              { reasoning: "Evidence.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Conditionality can improve governance and aid effectiveness but may undermine sovereignty and be ignored if governments don't buy in — selective, negotiated conditions work better than imposed ones.",
            commonErrors: ["One-sided."],
          },
        },
        {
          id: "cieige-q-u6l8c2-11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Foreign direct investment (FDI) refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Loans from the World Bank" },
              { id: "b", text: "Worker remittances" },
              {
                id: "c",
                text: "Foreign firms investing directly in a country's productive capacity",
              },
              { id: "d", text: "Charitable donations" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "FDI",
                statement: "Direct foreign investment in productive capacity.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Foreign firms investing directly",
            commonErrors: ["Confusing with aid."],
          },
        },
        {
          id: "cieige-q-u6l8c2-12",
          difficulty: "core",
          totalMarks: 1,
          stem: "A disadvantage of 'tied aid' is that:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It is always stolen" },
              { id: "b", text: "It must be repaid with interest" },
              { id: "c", text: "It cannot fund schools" },
              {
                id: "d",
                text: "Recipients must buy donor-country goods, often at higher prices",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Tied aid",
                statement: "Conditional spending on donor goods.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Must buy donor goods",
            commonErrors: ["Confusing with grants."],
          },
        },
        {
          id: "cieige-q-u6l8c2-13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "The 'big push' theory argues that development requires:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only small loans to individuals" },
              {
                id: "b",
                text: "Large coordinated investment across sectors to break the poverty trap",
              },
              { id: "c", text: "Complete trade isolation" },
              { id: "d", text: "Foreign military intervention" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Big push",
                statement: "Coordinated large-scale investment.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Coordinated large-scale investment",
            commonErrors: ["Confusing with gradualism."],
          },
        },
        {
          id: "cieige-q-u6l8c2-14",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is 'untied aid'? Give one advantage over tied aid.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Untied aid",
                statement: "Recipient chooses how to spend.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Advantage given.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Aid given without requiring purchase of donor-country goods — recipient can buy cheapest/best supplies locally or internationally, making aid more efficient.",
            commonErrors: ["Confusing with tied aid."],
          },
        },
        {
          id: "cieige-q-u6l8c2-15",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how remittances sent home by migrant workers can contribute to development.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Remittances",
                statement: "Private transfers supporting households.",
              },
            ],
            steps: [
              { reasoning: "Mechanism explained.", marks: 1, markCode: "M" },
              { reasoning: "Development benefits.", marks: 1, markCode: "M" },
              { reasoning: "Limitations.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Remittances raise household income for food, education and health — often reaching the poor directly; but they depend on employment abroad and can create dependence rather than building local capacity.",
            commonErrors: ["Only benefits."],
          },
        },
        {
          id: "cieige-q-u6l8c2-16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate debt relief as a development strategy.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Debt relief",
                statement: "Frees resources vs moral hazard.",
              },
            ],
            steps: [
              { reasoning: "Case for relief.", marks: 1, markCode: "M" },
              { reasoning: "Case against.", marks: 1, markCode: "M" },
              { reasoning: "Conditions for success.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Debt relief frees resources for health/education (HIPC initiative) but can encourage future borrowing if governance is poor — most effective when combined with institutional reform and responsible lending.",
            commonErrors: ["One-sided."],
          },
        },
      ],
    },
  ],
};
