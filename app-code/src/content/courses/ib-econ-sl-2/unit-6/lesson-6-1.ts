import type { Lesson } from "../../../types.ts";

export const lesson61: Lesson = {
  id: "econ-u4-lesson-6-1",
  code: "6-1",
  title: "Economic Growth",
  goal: "I CAN explain the theories of economic growth, measure it using GDP per capita and growth rates, and evaluate its costs and benefits.",
  standards: ["Paper 1", "Paper 2", "Topic 6"],
  vocabulary: [
    { term: "Economic growth", definition: "An increase in real GDP over time — the expansion of an economy's productive capacity." },
    { term: "GDP per capita", definition: "GDP divided by population — a rough measure of average living standards." },
    { term: "Actual vs potential growth", definition: "Actual = current GDP growth; potential = sustainable growth at full capacity." },
    { term: "Neoclassical growth theory", definition: "Growth driven by capital accumulation and technological progress (Solow model)." },
    { term: "Endogenous growth theory", definition: "Growth driven by internal factors like innovation, human capital and institutions." },
    { term: "Sustainable development", definition: "Meeting present needs without compromising the ability of future generations to meet theirs." },
  ],
  concepts: [
    {
      id: "econ-u6-growth-theories",
      title: "Theories of Economic Growth",
      skill: "Explain neoclassical and endogenous growth theories and the role of capital, labour, technology and institutions.",
      lesson: {
        sections: [
          {
            heading: "Measuring growth",
            body: "**Economic growth** is measured by the annual % change in **real GDP** (or real GDP per capita for living standards). The **growth rate** = $\\frac{GDP_{new} - GDP_{old}}{GDP_{old}} \\times 100$. Growth can be **actual** (current) or **potential** (sustainable at full capacity). Sustained growth requires increases in labour, capital or productivity (technology).",
          },
          {
            heading: "Neoclassical growth (Solow)",
            body: "The **Solow model** argues growth comes from **capital accumulation** (investment → more machines) and **technological progress** (better methods). Diminishing returns to capital mean economies eventually reach a **steady state** — growth then depends on the rate of technological progress, not just saving/investment. Poor countries can catch up (convergence) by borrowing technology.",
          },
          {
            heading: "Endogenous growth",
            body: "**Endogenous growth theory** argues growth is driven by **internal** factors: investment in **human capital** (education), **innovation** (R&D), **institutions** (property rights, rule of law) and **knowledge spillovers**. Unlike Solow, growth doesn't depend on exogenous technological progress — it is created within the economy. This explains why some countries grow faster than others.",
          },
        ],
        keyFormulas: [
          { name: "Growth rate", statement: "$\\text{Growth} = \\frac{GDP_{new}-GDP_{old}}{GDP_{old}} \\times 100$" },
          { name: "Solow model", statement: "Capital accumulation + exogenous tech progress; steady state" },
          { name: "Endogenous growth", statement: "Internal factors: human capital, innovation, institutions" },
        ],
        workedExample: {
          problem: "Real GDP grows from $1,000bn to $1,050bn. Calculate the growth rate.",
          solution: "Growth rate = (1050 − 1000)/1000 × 100 = 5%.",
        },
      },
      questions: [
        {
          id: "econ-u6-l61c1q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Economic growth is best measured by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The change in nominal GDP" },
              { id: "b", text: "The change in real GDP" },
              { id: "c", text: "The change in population" },
              { id: "d", text: "The change in government spending" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Economic growth", statement: "Increase in real GDP over time." },
            ],
            steps: [
              { reasoning: "Growth is measured by real GDP (inflation-adjusted), not nominal.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** The change in real GDP",
            commonErrors: ["Using nominal GDP — doesn't account for inflation."],
          },
        },
        {
          id: "econ-u6-l61c1q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Explain the difference between neoclassical and endogenous growth theories.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Growth theories", statement: "Neoclassical = capital + exogenous tech; endogenous = internal innovation/human capital." },
            ],
            steps: [
              { reasoning: "Neoclassical (Solow): growth from capital accumulation and exogenous technological progress.", marks: 1, markCode: "M" },
              { reasoning: "Endogenous: growth from internal factors — human capital, innovation, institutions, knowledge spillovers.", marks: 1, markCode: "M" },
              { reasoning: "Endogenous explains why growth rates differ between countries; neoclassical predicts convergence.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Neoclassical = capital + external tech; endogenous = internal innovation/human capital/institutions.",
            commonErrors: ["Treating them as identical — they have different assumptions about technology."],
          },
        },
        {
          id: "econ-u6-l61c1q3",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Real GDP grows from $2,000bn to $2,100bn in one year. Calculate the growth rate. If population grows by 1%, what happens to GDP per capita?",
          response: {
            type: "numeric",
            parts: [
              { label: "Growth rate (%)", answer: 5 },
              { label: "GDP per capita growth (%)", answer: 4 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Growth rate", statement: "$\\frac{GDP_{new}-GDP_{old}}{GDP_{old}} \\times 100$" },
            ],
            steps: [
              { reasoning: "Growth rate = (2100 − 2000)/2000 × 100 = 5%.", working: "\\frac{100}{2000} \\times 100 = 5\\%", marks: 1, markCode: "M" },
              { reasoning: "GDP per capita growth ≈ GDP growth − population growth = 5% − 1%.", working: "5 - 1 = 4\\%", marks: 1, markCode: "M" },
              { reasoning: "GDP per capita grows by approximately 4%.", marks: 1, markCode: "A" },
              { reasoning: "Both answers correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "5% GDP growth; ~4% GDP per capita growth.",
            commonErrors: ["Ignoring population growth — GDP per capita matters for living standards."],
          },
        },
        {
          id: "econ-u6-l61c1q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examine the role of technological progress in driving economic growth.",
          parts: [
            { label: "a", prompt: "Explain how technology increases productive capacity.", marks: 2 },
            { label: "b", prompt: "Compare how neoclassical and endogenous theories treat technology.", marks: 3 },
            { label: "c", prompt: "Evaluate whether technological progress alone is sufficient for sustained growth.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Technology and growth", statement: "Tech progress raises productivity → AS right → sustainable growth." },
            ],
            steps: [
              { part: "a", reasoning: "Technology improves efficiency — more output per unit of input.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Innovation creates new products and processes → shifts AS right → growth.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Neoclassical: technology is exogenous — comes from outside the model.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Endogenous: technology is created internally via R&D, human capital, institutions.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Endogenous explains why some countries innovate more than others.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Technology alone insufficient — needs institutions, education, investment to be effective.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Diminishing returns to capital mean tech progress is essential for long-run growth (Solow).", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned judgement: technology is necessary but must be supported by complementary factors.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Tech → productivity → AS right. (b) Neoclassical = exogenous; endogenous = internal. (c) Necessary but not sufficient alone.",
            commonErrors: ["Treating technology as the only growth driver — institutions and human capital matter."],
          },
        },
        {
          id: "econ-u6-l61c1q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "In the Solow (neoclassical) growth model, long-run growth is ultimately sustained by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A continuously rising saving rate" },
              { id: "b", text: "Technological progress" },
              { id: "c", text: "Population growth" },
              { id: "d", text: "Higher government spending" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Solow model", statement: "Diminishing returns to capital lead to a steady state; long-run growth depends on exogenous technological progress." },
            ],
            steps: [
              { reasoning: "Capital accumulation faces diminishing returns, so it cannot sustain growth indefinitely.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Technological progress",
            commonErrors: ["Thinking a higher saving rate sustains long-run growth — it only raises the steady-state level of output."],
          },
        },
        {
          id: "econ-u6-l61c1q6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Endogenous growth theory argues that economic growth is mainly driven by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Exogenous technological shocks from abroad" },
              { id: "b", text: "Internal factors such as human capital, innovation and institutions" },
              { id: "c", text: "Capital accumulation alone" },
              { id: "d", text: "Natural resource extraction" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Endogenous growth", statement: "Growth is created within the economy via human capital, innovation, institutions and knowledge spillovers." },
            ],
            steps: [
              { reasoning: "Endogenous theory emphasises factors internal to the economy rather than external technology shocks.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Internal factors such as human capital, innovation and institutions",
            commonErrors: ["Confusing endogenous (internal) with exogenous (external) drivers of growth."],
          },
        },
        {
          id: "econ-u6-l61c1q7",
          difficulty: "foundation",
          paper: "2",
          totalMarks: 4,
          stem: "Real GDP rises from $400bn to $440bn while population grows by 2%. Calculate the GDP growth rate and the approximate GDP per capita growth rate.",
          response: {
            type: "numeric",
            parts: [
              { label: "GDP growth rate (%)", answer: 10 },
              { label: "GDP per capita growth rate (%)", answer: 7.8, tolerance: 0.1 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Growth rate", statement: "$\\frac{GDP_{new}-GDP_{old}}{GDP_{old}} \\times 100$" },
            ],
            steps: [
              { reasoning: "GDP growth = (440 − 400)/400 × 100.", working: "\\frac{440-400}{400} \\times 100 = 10\\%", marks: 1, markCode: "M" },
              { reasoning: "GDP per capita growth ≈ GDP growth adjusted for population growth: 1.10/1.02 − 1.", working: "\\frac{1.10}{1.02}-1 \\approx 7.8\\%", marks: 1, markCode: "M" },
              { reasoning: "GDP growth rate is 10%.", marks: 1, markCode: "A" },
              { reasoning: "GDP per capita growth is approximately 7.8%.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "10% GDP growth; approximately 7.8% GDP per capita growth.",
            commonErrors: ["Subtracting population growth from GDP growth without compounding — the adjustment is approximate either way."],
          },
        },
        {
          id: "econ-u6-l61c1q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "Explain how capital accumulation contributes to economic growth and why its effect tends to diminish over time.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Capital accumulation", statement: "Investment in physical capital raises output per worker but faces diminishing returns." },
            ],
            steps: [
              { reasoning: "Saving and investment finance machinery, infrastructure and equipment.", marks: 1, markCode: "M" },
              { reasoning: "More capital per worker raises labour productivity and shifts aggregate supply right.", marks: 1, markCode: "M" },
              { reasoning: "Diminishing returns mean each extra unit of capital adds less output than the last.", marks: 1, markCode: "R" },
              { reasoning: "Eventually growth depends on technological progress rather than capital alone.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Capital accumulation raises productivity and output but faces diminishing returns, so long-run growth needs technological progress.",
            commonErrors: ["Ignoring diminishing returns — capital alone cannot sustain growth forever."],
          },
        },
        {
          id: "econ-u6-l61c1q9",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "Using neoclassical growth theory, explain why poorer countries may grow faster than richer countries.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Convergence", statement: "Poorer countries have lower capital per worker, so higher marginal product of capital and faster growth." },
            ],
            steps: [
              { reasoning: "Poorer countries have less capital per worker, so the marginal product of capital is higher.", marks: 1, markCode: "M" },
              { reasoning: "They can adopt existing technology from richer countries (catch-up effect).", marks: 1, markCode: "M" },
              { reasoning: "This predicts convergence — poorer economies growing faster until steady states equalise.", marks: 1, markCode: "A" },
              { reasoning: "In practice convergence is conditional — it depends on institutions, saving rates and human capital.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Lower capital per worker gives higher returns to investment, plus technology transfer allows catch-up growth.",
            commonErrors: ["Forgetting that convergence is conditional, not automatic."],
          },
        },
        {
          id: "econ-u6-l61c1q10",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "In the Solow growth model, the 'steady state' refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A situation of zero economic growth forever" },
              { id: "b", text: "A situation where growth depends on the rate of technological progress" },
              { id: "c", text: "The maximum output an economy can ever produce" },
              { id: "d", text: "A recession caused by falling investment" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Steady state", statement: "Long-run equilibrium where capital per worker is constant; growth comes only from technological progress." },
            ],
            steps: [
              { reasoning: "At the steady state, capital accumulation no longer raises output per worker — growth depends on technology.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** A situation where growth depends on the rate of technological progress",
            commonErrors: ["Confusing steady state with zero growth — output still grows via technology."],
          },
        },
        {
          id: "econ-u6-l61c1q11",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Real GDP grows from $3,000bn to $3,210bn while population grows by 2%. Calculate the GDP growth rate and the approximate GDP per capita growth rate.",
          response: {
            type: "numeric",
            parts: [
              { label: "GDP growth rate (%)", answer: 7 },
              { label: "GDP per capita growth rate (%)", answer: 4.9, tolerance: 0.1 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Growth rate", statement: "$\\frac{GDP_{new}-GDP_{old}}{GDP_{old}} \\times 100$" },
            ],
            steps: [
              { reasoning: "GDP growth = (3210 − 3000)/3000 × 100.", working: "\\frac{3210-3000}{3000} \\times 100 = 7\\%", marks: 1, markCode: "M" },
              { reasoning: "GDP per capita growth ≈ 1.07/1.02 − 1.", working: "\\frac{1.07}{1.02}-1 \\approx 4.9\\%", marks: 1, markCode: "M" },
              { reasoning: "GDP growth rate is 7%.", marks: 1, markCode: "A" },
              { reasoning: "GDP per capita growth is approximately 4.9%.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "7% GDP growth; approximately 4.9% GDP per capita growth.",
            commonErrors: ["Reporting GDP growth as per-capita growth without adjusting for population."],
          },
        },
        {
          id: "econ-u6-l61c1q12",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Evaluate endogenous growth theory as an explanation of why growth rates differ between countries.",
          parts: [
            { label: "a", prompt: "Explain the internal factors that endogenous growth theory identifies as drivers of growth.", marks: 3 },
            { label: "b", prompt: "Explain how these factors can differ between countries.", marks: 3 },
            { label: "c", prompt: "Evaluate whether endogenous theory explains growth-rate differences better than neoclassical theory.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Endogenous growth", statement: "Internal factors — human capital, innovation, institutions, knowledge spillovers — drive growth." },
            ],
            steps: [
              { part: "a", reasoning: "Human capital: education and health raise worker productivity.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Innovation and R&D create new products and processes; knowledge spillovers spread them.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Institutions such as property rights and rule of law incentivise investment.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Countries differ in education spending, research capacity and institutional quality.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Wealthy countries invest more in human capital and R&D; poor countries lack resources.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Weak institutions (corruption, insecure property) discourage innovation and investment.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Endogenous theory explains persistent differences better than neoclassical convergence predictions.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned judgement: endogenous theory is more realistic but harder to test than Solow.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Human capital, innovation, institutions. (b) These differ via resources and governance. (c) Better explains persistent differences but harder to test.",
            commonErrors: ["Treating the two theories as interchangeable — they make different predictions about convergence."],
          },
        },
        {
          id: "econ-u6-l61c1q13",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 3,
          stem: "Which statement best evaluates the claim that 'technological progress alone is sufficient for sustained economic growth'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "True — technology is the only determinant of long-run growth" },
              { id: "b", text: "False — technology must be supported by institutions, human capital and investment to be effective" },
              { id: "c", text: "True — saving and investment are irrelevant to growth" },
              { id: "d", text: "False — growth is impossible without population growth" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Technology and growth", statement: "Technology raises productivity but needs complementary factors to be adopted and effective." },
            ],
            steps: [
              { reasoning: "Technology alone cannot be exploited without education, institutions and investment.", marks: 1, markCode: "R" },
              { reasoning: "Neoclassical theory shows technological progress is necessary for long-run growth but not sufficient alone.", marks: 1, markCode: "R" },
              { reasoning: "Therefore choice (b) is the best evaluation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** False — technology must be supported by institutions, human capital and investment",
            commonErrors: ["Claiming technology alone is sufficient — adoption requires complementary inputs."],
          },
        },
        {
          id: "econ-u6-l61c1q14",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Potential (sustainable) economic growth refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The growth rate recorded in the most recent year" },
              { id: "b", text: "The growth rate achievable when the economy operates at full productive capacity" },
              { id: "c", text: "The highest growth rate ever recorded" },
              { id: "d", text: "Growth of potential output only during recessions" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Potential growth", statement: "Sustainable growth at full capacity — increases in labour, capital or productivity." },
            ],
            steps: [
              { reasoning: "Potential growth is the sustainable rate at full employment of resources.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** The growth rate achievable when the economy operates at full productive capacity",
            commonErrors: ["Confusing actual growth (current) with potential growth (sustainable at full capacity)."],
          },
        },
        {
          id: "econ-u6-l61c1q15",
          difficulty: "core",
          paper: "2",
          totalMarks: 6,
          stem: "Explain how strong institutions — such as secure property rights and the rule of law — promote economic growth.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Institutions and growth", statement: "Property rights and rule of law reduce uncertainty and incentivise investment and innovation." },
            ],
            steps: [
              { reasoning: "Secure property rights give investors confidence that returns will not be seized.", marks: 1, markCode: "M" },
              { reasoning: "The rule of law enforces contracts, making trade and business relationships reliable.", marks: 1, markCode: "M" },
              { reasoning: "Lower uncertainty reduces risk premia and encourages domestic and foreign investment.", marks: 1, markCode: "R" },
              { reasoning: "Stable institutions support financial markets, attracting FDI and credit.", marks: 1, markCode: "R" },
              { reasoning: "Institutions are an internal growth factor in endogenous growth theory.", marks: 1, markCode: "A" },
              { reasoning: "Well-governed countries therefore tend to achieve higher and more sustained growth.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Strong institutions reduce uncertainty, incentivise investment and attract capital, raising sustained growth.",
            commonErrors: ["Describing institutions vaguely — link them explicitly to investment incentives."],
          },
        },
        {
          id: "econ-u6-l61c1q16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 5,
          stem: "Real GDP grows from $1,000bn to $1,050bn in year 1 and to $1,102.5bn in year 2. Separately, a country must raise real GDP from $800bn to $968bn in 2 years. Calculate the year 1 growth rate, the year 2 growth rate, and the required annual growth rate for the second economy.",
          response: {
            type: "numeric",
            parts: [
              { label: "Year 1 growth rate (%)", answer: 5 },
              { label: "Year 2 growth rate (%)", answer: 5 },
              { label: "Required annual growth rate (%)", answer: 10, tolerance: 0.1 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Growth rate", statement: "$\\frac{GDP_{new}-GDP_{old}}{GDP_{old}} \\times 100$" },
            ],
            steps: [
              { reasoning: "Year 1 growth = (1050 − 1000)/1000 × 100.", working: "\\frac{1050-1000}{1000} \\times 100 = 5\\%", marks: 1, markCode: "M" },
              { reasoning: "Year 2 growth = (1102.5 − 1050)/1050 × 100.", working: "\\frac{1102.5-1050}{1050} \\times 100 = 5\\%", marks: 1, markCode: "M" },
              { reasoning: "Required growth: total change is 968/800 = 1.21 over 2 years, so annual factor is the square root.", working: "\\frac{968}{800} = 1.21; \\sqrt{1.21} = 1.10", marks: 2, markCode: "M" },
              { reasoning: "Year 1 and year 2 growth rates are both 5%.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "5%, 5%, and 10% required annual growth.",
            commonErrors: ["Dividing the total growth (21%) by 2 — compound growth requires a root, not simple division."],
          },
        },
      ],
    },
    {
      id: "econ-u6-growth-costs-benefits",
      title: "Costs and Benefits of Economic Growth",
      skill: "Evaluate the benefits and costs of economic growth including environmental, inequality and sustainability issues.",
      lesson: {
        sections: [
          {
            heading: "Benefits of growth",
            body: "Growth raises **living standards** (higher real incomes), creates **jobs and reduces poverty**, funds **public services** (health, education), enables **technological progress**, and provides **tax revenue** for redistribution. Higher GDP per capita generally correlates with better health, education and longevity.",
          },
          {
            heading: "Costs of growth",
            body: "Growth can cause **environmental degradation** (pollution, resource depletion, climate change), **income inequality** (benefits may concentrate), **social costs** (stress, consumerism), **resource exhaustion**, and **structural unemployment** during transitions. **Uneven growth** — some regions/industries grow while others decline — creates regional inequality.",
          },
          {
            heading: "Sustainable growth",
            body: "**Sustainable development** seeks growth that meets present needs without compromising future generations — balancing economic, social and environmental objectives. **Green growth** decouples economic growth from environmental damage. **Degrowth** argues rich economies should deliberately reduce throughput to live within planetary boundaries — controversial.",
          },
        ],
        keyFormulas: [
          { name: "Benefits", statement: "Higher living standards + jobs + public services + innovation" },
          { name: "Costs", statement: "Environmental damage + inequality + social costs + resource depletion" },
          { name: "Sustainability", statement: "Meet present needs without compromising future generations" },
        ],
        workedExample: {
          problem: "A country achieves 5% annual GDP growth but pollution worsens and inequality rises. Is this 'good' growth?",
          solution: "Economically yes (higher output/income) but environmentally and socially questionable — illustrates the need for sustainable growth that balances all three dimensions.",
        },
      },
      questions: [
        {
          id: "econ-u6-l61c2q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Sustainable development means:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Maximum possible economic growth" },
              { id: "b", text: "Meeting present needs without compromising future generations" },
              { id: "c", text: "Zero economic growth" },
              { id: "d", text: "Growth only in rich countries" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Sustainable development", statement: "Meet present needs without compromising future generations' ability to meet theirs." },
            ],
            steps: [
              { reasoning: "Sustainable development balances economic, social and environmental needs across generations.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Meeting present needs without compromising future generations",
            commonErrors: ["Confusing sustainability with zero growth — it's about balance, not stopping."],
          },
        },
        {
          id: "econ-u6-l61c2q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "Explain two benefits and two costs of economic growth.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Growth trade-offs", statement: "Benefits = living standards/jobs; costs = environment/inequality." },
            ],
            steps: [
              { reasoning: "Benefit: higher living standards and reduced poverty.", marks: 1, markCode: "M" },
              { reasoning: "Benefit: more jobs and better public services funded by tax revenue.", marks: 1, markCode: "M" },
              { reasoning: "Cost: environmental degradation (pollution, resource depletion).", marks: 1, markCode: "M" },
              { reasoning: "Cost: may worsen inequality if benefits concentrate at the top.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Benefits: living standards, jobs, services. Costs: environment, inequality.",
            commonErrors: ["Listing only benefits or only costs."],
          },
        },
        {
          id: "econ-u6-l61c2q3",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Explain how economic growth can worsen environmental degradation, and how this might be mitigated.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Growth and environment", statement: "More output → more resource use and pollution; mitigation via green policies." },
            ],
            steps: [
              { reasoning: "Higher output requires more energy, raw materials and transport → resource depletion.", marks: 1, markCode: "M" },
              { reasoning: "Industrial expansion → pollution, emissions, habitat destruction.", marks: 1, markCode: "M" },
              { reasoning: "Mitigation: carbon taxes, regulation, renewable energy, green technology.", marks: 1, markCode: "R" },
              { reasoning: "Decoupling — growth without proportional environmental damage — is the goal.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Growth → more resources/pollution; mitigate via green taxes, regulation, renewables, decoupling.",
            commonErrors: ["Ignoring that growth and environment can be compatible via green policies."],
          },
        },
        {
          id: "econ-u6-l61c2q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examine whether economic growth is always beneficial for society.",
          parts: [
            { label: "a", prompt: "Explain three benefits of economic growth.", marks: 3 },
            { label: "b", prompt: "Explain two costs or problems caused by growth.", marks: 2 },
            { label: "c", prompt: "Evaluate whether the benefits outweigh the costs.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Growth evaluation", statement: "Benefits = living standards/jobs/services; costs = environment/inequality/social." },
            ],
            steps: [
              { part: "a", reasoning: "Higher living standards and reduced poverty.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "More jobs and better-funded public services.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Technological progress and innovation.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Environmental degradation — pollution, resource depletion, climate change.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Worsening inequality and social costs if growth is uneven.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Benefits outweigh costs IF growth is sustainable and inclusive.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "But unchecked growth may exceed planetary boundaries — environmental costs become catastrophic.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned judgement: growth is beneficial when managed sustainably; harmful if left unchecked.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Living standards, jobs, innovation. (b) Environment, inequality. (c) Depends on sustainability — beneficial if managed, harmful if unchecked.",
            commonErrors: ["Arguing growth is always good or always bad — context and management matter."],
          },
        },
        {
          id: "econ-u6-l61c2q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Which of the following is a benefit of economic growth?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Higher unemployment" },
              { id: "b", text: "Higher real incomes and living standards" },
              { id: "c", text: "Greater environmental degradation" },
              { id: "d", text: "Increased structural unemployment" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Benefits of growth", statement: "Growth raises living standards, creates jobs and funds public services." },
            ],
            steps: [
              { reasoning: "Growth increases real output and income, raising average living standards.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Higher real incomes and living standards",
            commonErrors: ["Confusing growth's benefits with its costs — higher incomes are a benefit, not a cost."],
          },
        },
        {
          id: "econ-u6-l61c2q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "'Uneven growth' describes a situation where:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "All regions of an economy grow at the same rate" },
              { id: "b", text: "Some regions or industries grow while others decline or stagnate" },
              { id: "c", text: "Growth occurs only in the agricultural sector" },
              { id: "d", text: "The economy grows faster than its potential output" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Uneven growth", statement: "Growth concentrated in some regions/sectors while others lag, creating regional inequality." },
            ],
            steps: [
              { reasoning: "Growth is rarely uniform — sectors and regions differ in growth rates.", marks: 1, markCode: "M" },
              { reasoning: "Lagging regions suffer unemployment and lower incomes — a cost of uneven growth.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Some regions or industries grow while others decline or stagnate",
            commonErrors: ["Assuming GDP growth benefits all regions equally."],
          },
        },
        {
          id: "econ-u6-l61c2q7",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "'Green growth' refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Economic growth achieved only through agriculture" },
              { id: "b", text: "Decoupling economic growth from environmental damage" },
              { id: "c", text: "Reducing all economic activity to zero" },
              { id: "d", text: "Growth funded entirely by foreign aid" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Green growth", statement: "Economic growth that reduces environmental impact — output rises faster than resource use and pollution." },
            ],
            steps: [
              { reasoning: "Green growth aims to raise GDP while cutting environmental damage per unit of output.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Decoupling economic growth from environmental damage",
            commonErrors: ["Confusing green growth with zero growth — it still involves rising output."],
          },
        },
        {
          id: "econ-u6-l61c2q8",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 3,
          stem: "Which statement best evaluates the 'degrowth' argument?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Degrowth is clearly correct — all economies should stop growing immediately" },
              { id: "b", text: "Degrowth is wrong — growth never harms the environment" },
              { id: "c", text: "Degrowth highlights real ecological limits but is controversial and may harm living standards in poor countries" },
              { id: "d", text: "Degrowth means growing at a slower but still positive rate" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Degrowth debate", statement: "Degrowth argues rich economies should cut throughput to stay within planetary boundaries — controversial." },
            ],
            steps: [
              { reasoning: "Degrowth correctly identifies that growth can exceed ecological limits.", marks: 1, markCode: "R" },
              { reasoning: "But deliberate contraction would hurt incomes and development, especially in poor countries.", marks: 1, markCode: "R" },
              { reasoning: "Therefore choice (c) is the best evaluation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Degrowth highlights real ecological limits but is controversial and may harm living standards in poor countries",
            commonErrors: ["Treating degrowth as mainstream policy or as obviously wrong — it is a contested position."],
          },
        },
        {
          id: "econ-u6-l61c2q9",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A 'social cost' of economic growth might include:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Higher average incomes" },
              { id: "b", text: "Increased stress, consumerism and reduced leisure time" },
              { id: "c", text: "Better-funded public services" },
              { id: "d", text: "Greater technological innovation" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Social costs of growth", statement: "Growth can bring stress, longer working hours, consumerism and reduced leisure." },
            ],
            steps: [
              { reasoning: "Higher incomes and services are benefits; stress and reduced leisure are social costs.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Increased stress, consumerism and reduced leisure time",
            commonErrors: ["Listing benefits as costs — distinguish social costs from benefits."],
          },
        },
        {
          id: "econ-u6-l61c2q10",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "A country's real GDP grows from $600bn to $648bn while its population grows from 60 million to 61.2 million. Calculate the GDP growth rate and the approximate GDP per capita growth rate.",
          response: {
            type: "numeric",
            parts: [
              { label: "GDP growth rate (%)", answer: 8 },
              { label: "GDP per capita growth rate (%)", answer: 5.9, tolerance: 0.1 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Growth rate", statement: "$\\frac{GDP_{new}-GDP_{old}}{GDP_{old}} \\times 100$" },
            ],
            steps: [
              { reasoning: "GDP growth = (648 − 600)/600 × 100.", working: "\\frac{648-600}{600} \\times 100 = 8\\%", marks: 1, markCode: "M" },
              { reasoning: "Per capita growth ≈ GDP growth adjusted for population: 1.08/1.02 − 1.", working: "\\frac{1.08}{1.02}-1 \\approx 5.9\\%", marks: 1, markCode: "M" },
              { reasoning: "GDP growth rate is 8%.", marks: 1, markCode: "A" },
              { reasoning: "GDP per capita growth is approximately 5.9%.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "8% GDP growth; approximately 5.9% GDP per capita growth.",
            commonErrors: ["Reporting 8% as per-capita growth without adjusting for the 2% population rise."],
          },
        },
        {
          id: "econ-u6-l61c2q11",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "A country has real GDP of $240bn and a population of 40 million. Calculate GDP per capita. If real GDP then rises by 5% with population unchanged, calculate the new GDP per capita.",
          response: {
            type: "numeric",
            parts: [
              { label: "Initial GDP per capita ($)", answer: 6000 },
              { label: "New GDP per capita ($)", answer: 6300 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "GDP per capita", statement: "GDP per capita = GDP / population" },
            ],
            steps: [
              { reasoning: "GDP per capita = 240bn / 40m = $6,000.", working: "\\frac{240 \\times 10^9}{40 \\times 10^6} = 6000", marks: 1, markCode: "M" },
              { reasoning: "New GDP = 240 × 1.05 = $252bn; new per capita = 252bn / 40m.", working: "252 \\times 10^9 \\div 40 \\times 10^6 = 6300", marks: 1, markCode: "M" },
              { reasoning: "Initial GDP per capita is $6,000.", marks: 1, markCode: "A" },
              { reasoning: "New GDP per capita is $6,300.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Initial GDP per capita = $6,000; new GDP per capita = $6,300.",
            commonErrors: ["Forgetting to convert billions and millions consistently."],
          },
        },
        {
          id: "econ-u6-l61c2q12",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Nominal GDP grows by 7% in a year while the general price level rises by 4%. Estimate the real GDP growth rate, and calculate the new level of real GDP if it was initially $500bn.",
          response: {
            type: "numeric",
            parts: [
              { label: "Real GDP growth rate (%)", answer: 3, tolerance: 0.2 },
              { label: "New real GDP ($bn)", answer: 515 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Real growth", statement: "Real growth ≈ nominal growth − inflation" },
            ],
            steps: [
              { reasoning: "Real growth ≈ 7% − 4% = 3%.", working: "7 - 4 = 3\\%", marks: 1, markCode: "M" },
              { reasoning: "New real GDP = 500 × 1.03 = $515bn.", working: "500 \\times 1.03 = 515", marks: 1, markCode: "M" },
              { reasoning: "Real GDP growth rate is approximately 3%.", marks: 1, markCode: "A" },
              { reasoning: "New real GDP is $515bn.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Real GDP growth ≈ 3%; new real GDP = $515bn.",
            commonErrors: ["Using nominal growth without stripping out inflation."],
          },
        },
        {
          id: "econ-u6-l61c2q13",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Real GDP is $100bn in year 0 and grows at a constant 3% per year. Calculate real GDP in year 1 and year 2.",
          response: {
            type: "numeric",
            parts: [
              { label: "Year 1 real GDP ($bn)", answer: 103 },
              { label: "Year 2 real GDP ($bn)", answer: 106.09, tolerance: 0.05 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Compounded growth", statement: "GDP_t = GDP_0 \\times (1+g)^t" },
            ],
            steps: [
              { reasoning: "Year 1: 100 × 1.03 = $103bn.", working: "100 \\times 1.03 = 103", marks: 1, markCode: "M" },
              { reasoning: "Year 2: 103 × 1.03 or 100 × 1.03².", working: "100 \\times 1.03^2 = 106.09", marks: 1, markCode: "M" },
              { reasoning: "Year 1 real GDP is $103bn.", marks: 1, markCode: "A" },
              { reasoning: "Year 2 real GDP is $106.09bn.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Year 1 = $103bn; year 2 ≈ $106.09bn.",
            commonErrors: ["Adding 3% of the original GDP each year — growth compounds on the new level."],
          },
        },
        {
          id: "econ-u6-l61c2q14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Carbon emissions are 60 tonnes per $1bn of GDP. GDP rises from $400bn to $480bn and total emissions rise from 24,000 tonnes to 26,400 tonnes. Calculate emissions per $1bn of GDP before and after the growth.",
          response: {
            type: "numeric",
            parts: [
              { label: "Emissions per $1bn GDP before", answer: 60 },
              { label: "Emissions per $1bn GDP after", answer: 55 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Emissions intensity", statement: "Emissions per unit of GDP = total emissions / GDP" },
            ],
            steps: [
              { reasoning: "Before: 24,000 tonnes / 400 ($bn units) = 60 tonnes per $1bn.", working: "24000 \\div 400 = 60", marks: 1, markCode: "M" },
              { reasoning: "After: 26,400 / 480 = 55 tonnes per $1bn.", working: "26400 \\div 480 = 55", marks: 1, markCode: "M" },
              { reasoning: "Emissions intensity before is 60 tonnes per $1bn.", marks: 1, markCode: "A" },
              { reasoning: "Emissions intensity after is 55 tonnes per $1bn — growth was greener than emissions alone suggest.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "60 tonnes per $1bn before; 55 tonnes per $1bn after — emissions intensity fell despite higher total emissions.",
            commonErrors: ["Judging environmental impact by total emissions alone — intensity relative to GDP matters."],
          },
        },
        {
          id: "econ-u6-l61c2q15",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "A country has GDP per capita of $10,000 with a population of 80 million. If the government targets GDP per capita of $12,000 while keeping the population constant, calculate the required level of GDP.",
          response: {
            type: "numeric",
            parts: [
              { label: "Current GDP ($bn)", answer: 800 },
              { label: "Required GDP ($bn)", answer: 960 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "GDP per capita", statement: "GDP = GDP per capita × population" },
            ],
            steps: [
              { reasoning: "Current GDP = 10,000 × 80m = $800bn.", working: "10000 \\times 80 \\times 10^6 = 800 \\times 10^9", marks: 1, markCode: "M" },
              { reasoning: "Required GDP = 12,000 × 80m = $960bn.", working: "12000 \\times 80 \\times 10^6 = 960 \\times 10^9", marks: 1, markCode: "M" },
              { reasoning: "Current GDP is $800bn.", marks: 1, markCode: "A" },
              { reasoning: "Required GDP is $960bn — a 20% rise in output per person at constant population.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Current GDP = $800bn; required GDP = $960bn.",
            commonErrors: ["Confusing GDP per capita with total GDP — multiply by population."],
          },
        },
        {
          id: "econ-u6-l61c2q16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Evaluate whether economic growth can be sustainable in the long run.",
          parts: [
            { label: "a", prompt: "Explain two environmental costs of sustained economic growth.", marks: 2 },
            { label: "b", prompt: "Explain how growth can be made more sustainable.", marks: 3 },
            { label: "c", prompt: "Evaluate whether 'degrowth' is a viable alternative to sustainable growth.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Sustainable growth", statement: "Growth must balance economic, social and environmental objectives across generations." },
            ],
            steps: [
              { part: "a", reasoning: "Resource depletion — more output consumes finite energy, minerals and land.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Pollution and emissions — industrial expansion degrades air, water and climate.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Green policies: carbon taxes, pollution regulation, renewable energy.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Decoupling: raise output faster than resource use and emissions.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Investment in green technology and sustainable agriculture/industry.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Degrowth correctly identifies ecological limits but would cut incomes and harm development.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "It is particularly problematic for low-income countries still needing growth to escape poverty.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned judgement: sustainable growth via decoupling is more viable than deliberate degrowth.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Resource depletion, pollution. (b) Green taxes, regulation, decoupling, green tech. (c) Degrowth is ecologically appealing but economically harmful — sustainable growth is preferable.",
            commonErrors: ["Assuming growth and environment are always incompatible — decoupling shows they can be compatible."],
          },
        },
      ],
    },
  ],
};
