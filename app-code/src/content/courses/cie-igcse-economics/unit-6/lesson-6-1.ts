import type { Lesson } from "../../../types.ts";

export const lesson61: Lesson = {
  id: "cieige-u6-lesson-6-1",
  code: "6-1",
  title: "National Income and Economic Growth",
  goal: "I CAN explain GDP, economic growth, its causes and limitations as a measure of welfare.",
  standards: ["Cambridge IGCSE Economics 0455", "Unit 6: macroeconomics"],
  vocabulary: [
    {
      term: "GDP",
      definition:
        "Total value of final goods/services produced within a country in a period.",
    },
    { term: "GNP", definition: "GDP adjusted for net income from abroad." },
    { term: "Economic growth", definition: "Increase in real GDP over time." },
    {
      term: "Nominal vs real GDP",
      definition: "Current prices vs constant prices (inflation-adjusted).",
    },
    { term: "Per capita GDP", definition: "GDP divided by population." },
    {
      term: "Sustainable development",
      definition:
        "Meeting present needs without compromising future generations.",
    },
  ],
  concepts: [
    {
      id: "cieige-u6l1-c1-gdp",
      title: "Measuring national income",
      skill: "Explain GDP, GNP, nominal vs real, and per capita measures.",
      lesson: {
        sections: [
          {
            heading: "GDP and GNP",
            body: "**GDP** measures output within a country's borders; **GNP** adds net income earned abroad (remittances, profits) minus payments abroad. **Nominal GDP** uses current prices; **real GDP** uses constant prices (inflation-adjusted) — only real GDP measures actual output growth. **Per capita GDP** = GDP ÷ population, a rough welfare measure.",
          },
          {
            heading: "Limitations",
            body: "GDP misses: **non-market activity** (housework, volunteering), **leisure**, **distribution** (a rich elite vs poor majority), **environmental degradation**, and **quality improvements**. High GDP ≠ high welfare — hence HDI and other measures supplement it.",
          },
        ],
        keyFormulas: [
          { name: "GDP", statement: "Value of final output within borders" },
          { name: "GNP", statement: "GDP + net income from abroad" },
          { name: "Real GDP", statement: "Nominal GDP adjusted for inflation" },
          { name: "Per capita", statement: "GDP ÷ population" },
        ],
        workedExample: {
          problem:
            "Country A: GDP $1trn, population 50m. Country B: GDP $2trn, population 200m. Which has higher per-capita income?",
          solution:
            "A: $1trn/50m = $20,000. B: $2trn/200m = $10,000. Country A has higher per-capita income despite lower total GDP.",
        },
      },
      questions: [
        {
          id: "cieige-q-u6l1c1-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "GDP measures:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Exports only" },
              { id: "b", text: "Total national wealth" },
              { id: "c", text: "Government revenue" },
              {
                id: "d",
                text: "Value of final goods/services produced within a country",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "GDP",
                statement: "Final output within borders.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(d)** Final output within borders",
            commonErrors: ["Confusing with GNP."],
          },
        },
        {
          id: "cieige-q-u6l1c1-2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Distinguish nominal from real GDP.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Nominal vs real",
                statement: "Current vs constant prices.",
              },
            ],
            steps: [
              { reasoning: "Definitions correct.", marks: 1, markCode: "M" },
              { reasoning: "Which measures growth.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Nominal GDP uses current prices (includes inflation); real GDP uses constant prices — only real GDP reflects actual output changes.",
            commonErrors: ["Thinking nominal measures welfare."],
          },
        },
        {
          id: "cieige-q-u6l1c1-3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why might high GDP per capita not mean high living standards?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "GDP limitations",
                statement: "Distribution, non-market, environment.",
              },
            ],
            steps: [
              { reasoning: "Distribution issue.", marks: 1, markCode: "M" },
              {
                reasoning: "Non-market/leisure ignored.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Environmental costs ignored.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "GDP per capita ignores inequality (average may hide poverty), non-market work, leisure, and environmental damage — a country can have high GDP but low welfare.",
            commonErrors: ["Treating GDP as welfare measure."],
          },
        },
        {
          id: "cieige-q-u6l1c1-4",
          difficulty: "core",
          totalMarks: 4,
          stem: "GDP = $800bn, population = 40m. Calculate GDP per capita and interpret.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Per capita GDP",
                statement: "GDP ÷ population.",
              },
            ],
            steps: [
              { reasoning: "Calculation correct.", marks: 1, markCode: "M" },
              { reasoning: "Units stated.", marks: 1, markCode: "M" },
              { reasoning: "Interpretation.", marks: 1, markCode: "A" },
              { reasoning: "Limitation noted.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "GDP per capita = 800bn ÷ 40m = $20,000 — average output per person; a rough but imperfect welfare measure.",
            commonErrors: ["Forgetting units."],
          },
        },
        {
          id: "cieige-q-u6l1c1-5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate GDP as a measure of national wellbeing.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "GDP critique",
                statement: "Useful but incomplete.",
              },
            ],
            steps: [
              {
                reasoning: "Strengths: measurable, comparable.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Weaknesses: distribution, environment, non-market.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Alternatives: HDI, GPI.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "GDP is a useful, measurable indicator of output but misses distribution, environment, leisure and non-market activity — best supplemented by HDI or similar wellbeing measures.",
            commonErrors: ["One-sided."],
          },
        },
        {
          id: "cieige-q-u6l1c1-6",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is GNP?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "GNP",
                statement: "GDP + net income from abroad.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Difference from GDP.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Gross national product = GDP plus net income earned abroad (remittances, profits) minus payments to foreigners — measures income of nationals wherever earned.",
            commonErrors: ["Confusing with GDP."],
          },
        },
        {
          id: "cieige-q-u6l1c1-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Only _____ GDP reflects actual output growth.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Nominal" },
              { id: "b", text: "Real" },
              { id: "c", text: "Gross" },
              { id: "d", text: "Total" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Real GDP",
                statement: "Inflation-adjusted.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Real",
            commonErrors: ["Choosing nominal."],
          },
        },
        {
          id: "cieige-q-u6l1c1-8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why is GDP per capita used to compare countries' living standards?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Per capita GDP",
                statement: "Rough welfare proxy.",
              },
            ],
            steps: [
              { reasoning: "Why used.", marks: 1, markCode: "M" },
              { reasoning: "Limitation.", marks: 1, markCode: "M" },
              { reasoning: "Better alternatives.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "It's a simple, widely available proxy for average income — but ignores inequality and non-income factors; HDI adds health and education.",
            commonErrors: ["Treating as perfect measure."],
          },
        },
        {
          id: "cieige-q-u6l1c1-9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two things GDP does NOT count.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "GDP exclusions",
                statement: "Non-market, leisure, environment.",
              },
            ],
            steps: [
              { reasoning: "Two valid exclusions.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 2, markCode: "A" },
            ],
            finalAnswer:
              "e.g. unpaid housework/volunteering (non-market) and environmental degradation costs (externalities) — both affect welfare but not GDP.",
            commonErrors: ["Listing GDP components instead."],
          },
        },
        {
          id: "cieige-q-u6l1c1-10",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Should governments maximise GDP growth? Analyse.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Growth debate",
                statement: "Growth vs sustainability/welfare.",
              },
            ],
            steps: [
              { reasoning: "Growth benefits.", marks: 1, markCode: "M" },
              { reasoning: "Growth costs/limits.", marks: 1, markCode: "M" },
              { reasoning: "Alternatives.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Growth raises incomes and reduces poverty but can cause environmental damage and inequality — should be pursued sustainably and alongside wellbeing measures, not maximised blindly.",
            commonErrors: ["One-sided."],
          },
        },
        {
          id: "cieige-q-u6l1c1-11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "GNP differs from GDP because GNP:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only counts government output" },
              { id: "b", text: "Ignores inflation" },
              { id: "c", text: "Excludes all exports" },
              {
                id: "d",
                text: "Includes net income earned abroad by nationals",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "GNP vs GDP",
                statement: "GNP adds net income from abroad.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(d)** Includes net income from abroad",
            commonErrors: ["Confusing GDP and GNP."],
          },
        },
        {
          id: "cieige-q-u6l1c1-12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Unpaid housework is excluded from GDP because it is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Too small to measure" },
              { id: "b", text: "Only done by children" },
              { id: "c", text: "Non-market activity" },
              { id: "d", text: "Illegal" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "GDP exclusions",
                statement: "Non-market activity not counted.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** Non-market activity",
            commonErrors: ["Thinking it is counted."],
          },
        },
        {
          id: "cieige-q-u6l1c1-13",
          difficulty: "core",
          totalMarks: 2,
          stem: "A country has GDP of $500 billion and a population of 25 million. (a) Calculate GDP per capita. (b) If GDP grows by 4% next year (population unchanged), calculate the new GDP per capita.",
          response: {
            type: "numeric",
            parts: [
              { label: "Initial GDP per capita", answer: 20000, unit: "$" },
              { label: "New GDP per capita", answer: 20800, unit: "$" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Per capita GDP",
                statement: "GDP ÷ population.",
              },
            ],
            steps: [
              {
                reasoning: "500bn ÷ 25m = $20,000.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "New GDP = 520bn → 520bn ÷ 25m = $20,800.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) $20,000 (b) $20,800",
            commonErrors: ["Forgetting to update GDP."],
          },
        },
        {
          id: "cieige-q-u6l1c1-14",
          difficulty: "core",
          totalMarks: 1,
          stem: "Real GDP is preferred to nominal GDP for measuring growth because real GDP:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Is always higher" },
              { id: "b", text: "Ignores population" },
              { id: "c", text: "Includes only exports" },
              { id: "d", text: "Is adjusted for inflation" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Real vs nominal",
                statement: "Only real GDP reflects output change.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(d)** Adjusted for inflation",
            commonErrors: ["Thinking nominal measures output."],
          },
        },
        {
          id: "cieige-q-u6l1c1-15",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how the Human Development Index (HDI) addresses some limitations of GDP per capita.",
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
              { reasoning: "HDI components.", marks: 1, markCode: "M" },
              {
                reasoning: "What it adds beyond income.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Remaining limitation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "HDI combines income per capita with life expectancy and education — capturing health and knowledge that GDP misses; though it still ignores inequality, environment and political freedoms.",
            commonErrors: ["Thinking HDI replaces income."],
          },
        },
        {
          id: "cieige-q-u6l1c1-16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate whether governments should maximise GDP growth as their primary economic objective.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Growth as objective",
                statement: "Benefits vs sustainability and welfare.",
              },
            ],
            steps: [
              {
                reasoning: "Growth benefits: income, poverty reduction.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Growth limits: environment, inequality.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Alternative objectives exist.",
                marks: 1,
                markCode: "A",
              },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "GDP growth raises average incomes and can reduce poverty, but maximising it blindly ignores environmental damage, inequality and wellbeing — growth should be sustainable and balanced against other objectives.",
            commonErrors: ["One-sided."],
          },
        },
      ],
    },
    {
      id: "cieige-u6l1-c2-growth",
      title: "Economic growth: causes and constraints",
      skill: "Explain determinants of growth and evaluate growth strategies.",
      lesson: {
        sections: [
          {
            heading: "Causes of growth",
            body: "Growth driven by: **physical capital** (investment in machinery), **human capital** (education, health), **technology** (innovation), **natural resources**, and **institutions** (property rights, stable governance). Growth models emphasise capital accumulation and technological progress.",
          },
          {
            heading: "Constraints",
            body: "Growth constrained by: **diminishing returns**, **resource depletion**, **environmental limits**, **inequality** (limits human capital), and **short-termism**. Sustainable growth balances economic, social and environmental goals.",
          },
        ],
        keyFormulas: [
          {
            name: "Growth drivers",
            statement: "Capital, labour, technology, resources, institutions",
          },
          {
            name: "Diminishing returns",
            statement: "Extra capital yields smaller output gains",
          },
        ],
        workedExample: {
          problem: "Why do some countries grow faster than others?",
          solution:
            "Differences in capital investment, education, technology adoption, institutions and resource endowments — countries investing in these grow faster.",
        },
      },
      questions: [
        {
          id: "cieige-q-u6l1c2-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Economic growth means:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Increase in real GDP over time" },
              { id: "b", text: "Higher exports only" },
              { id: "c", text: "More government spending" },
              { id: "d", text: "Rising prices" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Economic growth",
                statement: "Real GDP increase.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Real GDP increase",
            commonErrors: ["Confusing with inflation."],
          },
        },
        {
          id: "cieige-q-u6l1c2-2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name two drivers of economic growth.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Growth drivers",
                statement: "Capital, labour, tech, resources.",
              },
            ],
            steps: [
              { reasoning: "Two valid drivers.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "e.g. investment in physical capital (machinery) and education (human capital) — both raise productive capacity.",
            commonErrors: ["Listing without explanation."],
          },
        },
        {
          id: "cieige-q-u6l1c2-3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain 'human capital' and its role in growth.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Human capital",
                statement: "Skills/education/health of workforce.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "How it drives growth.", marks: 1, markCode: "M" },
              { reasoning: "Example.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Human capital = workers' skills, education and health — raises productivity; countries investing in education grow faster via more productive workers.",
            commonErrors: ["Confusing with physical capital."],
          },
        },
        {
          id: "cieige-q-u6l1c2-4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain 'diminishing returns' and its constraint on growth.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Diminishing returns",
                statement: "Extra capital → smaller gains.",
              },
            ],
            steps: [
              { reasoning: "Mechanism explained.", marks: 1, markCode: "M" },
              { reasoning: "Growth implication.", marks: 1, markCode: "M" },
              { reasoning: "Solution: technology.", marks: 1, markCode: "A" },
              { reasoning: "Coherent explanation.", marks: 1, markCode: "R" },
            ],
            finalAnswer:
              "Adding capital to fixed labour yields smaller output gains — growth slows unless technology improves productivity; explains why sustained growth needs innovation.",
            commonErrors: ["Thinking growth is automatic."],
          },
        },
        {
          id: "cieige-q-u6l1c2-5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate whether natural resource wealth helps or hinders growth.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Resource curse",
                statement: "Wealth can fuel corruption/dependence.",
              },
            ],
            steps: [
              { reasoning: "Benefits case.", marks: 1, markCode: "M" },
              { reasoning: "Resource curse case.", marks: 1, markCode: "M" },
              { reasoning: "Conditions matter.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Resources can fund growth but often fuel corruption, conflict and Dutch disease (neglecting other sectors) — benefit depends on institutions managing them well.",
            commonErrors: ["One-sided."],
          },
        },
        {
          id: "cieige-q-u6l1c2-6",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'sustainable development'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Sustainable development",
                statement: "Meet present needs without compromising future.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Three dimensions.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Development meeting present needs without compromising future generations — balancing economic, social and environmental sustainability.",
            commonErrors: ["Confusing with economic growth."],
          },
        },
        {
          id: "cieige-q-u6l1c2-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Dutch disease' refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Flooding" },
              { id: "b", text: "Currency collapse" },
              {
                id: "c",
                text: "Resource wealth harming other sectors via exchange rate",
              },
              { id: "d", text: "Disease in Holland" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Dutch disease",
                statement: "Resource exports hurt other sectors.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** Resource exports harm other sectors",
            commonErrors: ["Literal interpretation."],
          },
        },
        {
          id: "cieige-q-u6l1c2-8",
          difficulty: "core",
          totalMarks: 3,
          stem: "How does foreign direct investment (FDI) promote growth?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "FDI",
                statement: "Capital, jobs, technology transfer.",
              },
            ],
            steps: [
              { reasoning: "Mechanisms.", marks: 1, markCode: "M" },
              { reasoning: "Conditions for benefit.", marks: 1, markCode: "M" },
              { reasoning: "Risk noted.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "FDI brings capital, jobs and technology transfer — but benefits depend on local conditions (skills, infrastructure, stable governance); can also create dependency.",
            commonErrors: ["One-sided praise."],
          },
        },
        {
          id: "cieige-q-u6l1c2-9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why might rapid growth cause problems?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Growth costs",
                statement: "Environment, inequality, congestion.",
              },
            ],
            steps: [
              { reasoning: "Environmental cost.", marks: 1, markCode: "M" },
              { reasoning: "Social cost.", marks: 1, markCode: "M" },
              { reasoning: "Nuance.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Rapid growth can cause pollution, resource depletion, congestion and inequality — growth without sustainability or distribution may reduce welfare despite higher GDP.",
            commonErrors: ["Assuming growth is costless."],
          },
        },
        {
          id: "cieige-q-u6l1c2-10",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate supply-side policies as a growth strategy.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Supply-side",
                statement: "Productivity vs time/cost.",
              },
            ],
            steps: [
              { reasoning: "Policy examples.", marks: 1, markCode: "M" },
              { reasoning: "Benefits.", marks: 1, markCode: "M" },
              { reasoning: "Limitations.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Supply-side policies (education, deregulation, infrastructure) raise long-run capacity but take time and may worsen inequality — best combined with demand management.",
            commonErrors: ["One-sided."],
          },
        },
        {
          id: "cieige-q-u6l1c2-11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Physical capital' refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Natural resources" },
              { id: "b", text: "Money in banks" },
              { id: "c", text: "Machinery, buildings and equipment" },
              { id: "d", text: "Workers' skills" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Physical capital",
                statement: "Produced means of production.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** Machinery, buildings, equipment",
            commonErrors: ["Confusing with human capital."],
          },
        },
        {
          id: "cieige-q-u6l1c2-12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of the following is NOT a driver of economic growth?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Technological progress" },
              { id: "b", text: "Investment in education" },
              { id: "c", text: "Rising interest rates" },
              { id: "d", text: "Improved infrastructure" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Growth drivers",
                statement: "Capital, labour, tech, resources, institutions.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** Rising interest rates",
            commonErrors: ["Confusing constraint with driver."],
          },
        },
        {
          id: "cieige-q-u6l1c2-13",
          difficulty: "core",
          totalMarks: 2,
          stem: "Real GDP grows from $400 billion to $416 billion while population grows by 1%. (a) Calculate the real GDP growth rate. (b) Calculate the approximate per-capita growth rate.",
          response: {
            type: "numeric",
            parts: [
              { label: "Real GDP growth rate", answer: 4, unit: "%" },
              { label: "Per-capita growth rate", answer: 3, unit: "%" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Growth rates",
                statement: "(New − old) ÷ old × 100; per capita ≈ GDP growth − population growth.",
              },
            ],
            steps: [
              {
                reasoning: "(416 − 400) ÷ 400 × 100 = 4%.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Per capita growth ≈ 4% − 1% = 3%.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) 4% (b) 3%",
            commonErrors: ["Ignoring population growth."],
          },
        },
        {
          id: "cieige-q-u6l1c2-14",
          difficulty: "core",
          totalMarks: 1,
          stem: "'Diminishing returns' in growth means:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Extra capital yields smaller increases in output",
              },
              { id: "b", text: "Labour becomes more productive" },
              { id: "c", text: "Capital always increases output equally" },
              { id: "d", text: "Growth stops permanently" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Diminishing returns",
                statement: "Marginal product of capital falls.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Smaller output gains from extra capital",
            commonErrors: ["Thinking capital always helps equally."],
          },
        },
        {
          id: "cieige-q-u6l1c2-15",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how strong institutions (e.g. property rights, stable government) support economic growth.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Institutions",
                statement: "Security encourages investment.",
              },
            ],
            steps: [
              { reasoning: "Property rights secure returns.", marks: 1, markCode: "M" },
              {
                reasoning: "Stable government reduces uncertainty.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Result: more investment and growth.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Clear property rights and stable governance give investors confidence their returns won't be seized or destroyed by instability — encouraging investment, which raises capital and long-run growth.",
            commonErrors: ["Listing institutions without mechanism."],
          },
        },
        {
          id: "cieige-q-u6l1c2-16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate whether developing countries should prioritise economic growth or environmental sustainability.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Growth vs sustainability",
                statement: "Short-term needs vs long-term limits.",
              },
            ],
            steps: [
              {
                reasoning: "Growth benefits for developing countries.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Environmental costs of growth.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Green growth compromise.",
                marks: 1,
                markCode: "A",
              },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Developing countries need growth to reduce poverty, but pursuing it without environmental limits creates long-term damage — 'green growth' strategies that raise incomes while protecting resources offer the best balance.",
            commonErrors: ["One-sided."],
          },
        },
      ],
    },
  ],
};
