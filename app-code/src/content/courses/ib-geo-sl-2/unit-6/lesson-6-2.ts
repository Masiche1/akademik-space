import type { Lesson } from "../../../types.ts";

export const lesson62: Lesson = {
  id: "geo-u6-lesson-6-2",
  code: "6-2",
  title: "Health Systems, Access and Inequalities",
  goal: "I CAN describe health systems, analyse access to healthcare and explain health inequalities.",
  standards: ["Paper 1", "Paper 2", "Health"],
  vocabulary: [
    { term: "Health system", definition: "The organisation of resources, institutions and people to improve health — financing, workforce, facilities, medicines." },
    { term: "Universal health coverage (UHC)", definition: "All people access needed health services without financial hardship — WHO goal." },
    { term: "Health inequality", definition: "Systematic differences in health status or access between social groups, regions or countries." },
    { term: "Health inequity", definition: "Unfair, avoidable health differences rooted in social injustice — deeper than mere inequality." },
    { term: "Primary healthcare", definition: "First point of contact care — prevention, basic treatment, community health workers." },
    { term: "Out-of-pocket expenditure", definition: "Direct payments for healthcare — can cause catastrophic health spending and poverty." },
  ],
  concepts: [
    {
      id: "geo-u6-health-systems",
      title: "Health systems and access",
      skill: "Describe health system models, financing and the factors determining access to healthcare.",
      lesson: {
        sections: [
          {
            heading: "Health system models",
            body: "Health systems vary: **Beveridge model** (UK NHS — tax-funded, state-provided), **Bismarck model** (Germany, France — social insurance), **out-of-pocket** (many LICs — patients pay directly), **private insurance** (USA). Each has trade-offs in equity, efficiency and cost. The NHS provides universal coverage; US spending is highest but coverage is incomplete.",
          },
          {
            heading: "Access to healthcare",
            body: "Access depends on **availability** (facilities, staff), **affordability** (cost, insurance), **geographic access** (distance, transport) and **acceptability** (cultural fit). Rural and remote areas have fewer services; poor people face financial barriers; women and minorities may face discrimination. **Universal Health Coverage** aims to ensure access for all.",
          },
          {
            heading: "Health workforce",
            body: "Healthcare needs trained workers: doctors, nurses, community health workers. Many LICs face severe shortages — WHO estimates a global shortfall of ~10 million health workers. Brain drain moves skilled workers to HICs. Task-shifting (training community workers) extends coverage in resource-poor settings.",
          },
        ],
        keyFormulas: [
          { name: "Health models", statement: "Beveridge (tax), Bismarck (insurance), out-of-pocket, private" },
          { name: "Access dimensions", statement: "Availability, affordability, geographic access, acceptability" },
          { name: "UHC goal", statement: "All people access needed services without financial hardship" },
        ],
        workedExample: {
          problem: "Explain why healthcare access differs between countries.",
          solution: "Access depends on health system financing and resources. HICs have tax-funded or insurance systems with many facilities and staff. LICs rely on out-of-pocket payment with few facilities, causing financial barriers. Rural areas everywhere have less access. WHO's UHC goal aims to close these gaps.",
        },
      },
      questions: [
        {
          id: "geo-u6-hq1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The UK's NHS is an example of which health system model?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Private insurance model" },
              { id: "b", text: "Out-of-pocket model" },
              { id: "c", text: "Bismarck model (social insurance)" },
              { id: "d", text: "Beveridge model (tax-funded)" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "NHS model", statement: "UK NHS is the Beveridge model — tax-funded, state-provided universal healthcare." },
            ],
            steps: [
              { reasoning: "NHS is funded by taxation and provides universal coverage — Beveridge model.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Beveridge model",
            commonErrors: ["Confusing Beveridge (tax-funded) with Bismarck (insurance-based)."],
          },
        },
        {
          id: "geo-u6-hq2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Describe two barriers to accessing healthcare in low-income countries.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Access barriers", statement: "Cost, distance, few facilities, staff shortages, cultural factors." },
            ],
            steps: [
              { reasoning: "Out-of-pocket costs are prohibitive — illness can cause catastrophic spending.", marks: 1, markCode: "M" },
              { reasoning: "Few facilities and health workers; rural areas may be hours from care.", marks: 1, markCode: "M" },
              { reasoning: "Cultural factors, gender norms and lack of transport further limit access.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Cost, distance, staff shortages, cultural barriers.",
            commonErrors: ["Only citing cost — geographic and workforce barriers matter too."],
          },
        },
        {
          id: "geo-u6-hq3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Explain why out-of-pocket healthcare payments are problematic.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Out-of-pocket burden", statement: "Direct payments deter care-seeking and can push households into poverty — 'medical poverty trap'." },
            ],
            steps: [
              { reasoning: "High costs deter people from seeking care until conditions are severe.", marks: 1, markCode: "M" },
              { reasoning: "Catastrophic health spending forces families to sell assets, borrow or go hungry.", marks: 1, markCode: "M" },
              { reasoning: "Illness then causes poverty, which worsens health — a vicious 'medical poverty trap'.", marks: 1, markCode: "R" },
              { reasoning: "Universal health coverage aims to eliminate financial barriers.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Out-of-pocket costs deter care and cause medical poverty — UHC seeks to eliminate this.",
            commonErrors: ["Thinking out-of-pocket is just inconvenient — it can be catastrophic."],
          },
        },
        {
          id: "geo-u6-hq4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examine health system access and equity in a named country or region.",
          parts: [
            { label: "a", prompt: "Identify the named country/region and its health system.", marks: 2 },
            { label: "b", prompt: "Explain two factors affecting access to healthcare there.", marks: 3 },
            { label: "c", prompt: "Evaluate efforts to improve health equity.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Health equity", statement: "Access varies by income, geography, gender and ethnicity; equity requires removing systematic barriers." },
            ],
            steps: [
              { part: "a", reasoning: "Named country (e.g. UK NHS, USA, India) with health system type.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Funding model and coverage described accurately.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Factor 1: cost/insurance affecting affordability.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Factor 2: geography, staff distribution or cultural barriers.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Factors linked to specific groups or regions.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Strategy: UHC expansion, primary care, workforce redistribution.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluation: costs, feasibility, remaining gaps.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned overall judgement.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Named country + system. (b) Two access factors. (c) Equity efforts evaluated.",
            commonErrors: ["Generic discussion without country-specific evidence."],
          },
        },
        {
          id: "geo-u6-hq5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The Beveridge health system model is characterised by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Tax-funded, state-provided healthcare (e.g. UK NHS)" },
              { id: "b", text: "Private insurance funding" },
              { id: "c", text: "Employer-based social insurance" },
              { id: "d", text: "Patients paying directly for all care" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Beveridge model", statement: "Tax-funded state healthcare — UK NHS provides universal coverage." },
            ],
            steps: [
              { reasoning: "Beveridge = tax-funded public provision.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Tax-funded state provision",
            commonErrors: ["Confusing Beveridge with Bismarck (insurance)."],
          },
        },
        {
          id: "geo-u6-hq6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The Bismarck model funds healthcare through:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Social insurance contributions from employers and employees" },
              { id: "b", text: "General taxation only" },
              { id: "c", text: "Charitable donations" },
              { id: "d", text: "Out-of-pocket payments only" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Bismarck model", statement: "Social health insurance funded by employer/employee contributions — Germany, France." },
            ],
            steps: [
              { reasoning: "Bismarck uses compulsory social insurance contributions.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Social insurance contributions",
            commonErrors: ["Confusing Bismarck with Beveridge tax funding."],
          },
        },
        {
          id: "geo-u6-hq7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Universal Health Coverage (UHC) aims to ensure:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Free healthcare only for citizens" },
              { id: "b", text: "Only emergency care for all" },
              { id: "c", text: "All people access needed health services without financial hardship" },
              { id: "d", text: "Private insurance for everyone" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "UHC", statement: "All people access the health services they need without suffering financial hardship." },
            ],
            steps: [
              { reasoning: "UHC is about universal access without financial hardship.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Access without financial hardship",
            commonErrors: ["Reducing UHC to free care rather than financial protection."],
          },
        },
        {
          id: "geo-u6-hq8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "The four dimensions of healthcare access are availability, affordability, geographic access and:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Luxury" },
              { id: "b", text: "Speed" },
              { id: "c", text: "Acceptability" },
              { id: "d", text: "Technology" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Access dimensions", statement: "Availability, affordability, geographic access and acceptability (cultural fit)." },
            ],
            steps: [
              { reasoning: "The fourth dimension is acceptability — cultural appropriateness.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Acceptability",
            commonErrors: ["Confusing access dimensions with health outcomes."],
          },
        },
        {
          id: "geo-u6-hq9",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 2,
          stem: "Why does the USA spend the most on healthcare yet have incomplete coverage?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It has universal free healthcare" },
              { id: "b", text: "It has the best health outcomes globally" },
              { id: "c", text: "Its private insurance model is costly and leaves gaps in coverage" },
              { id: "d", text: "It spends the least on healthcare" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "US healthcare paradox", statement: "Highest spending but incomplete coverage — private insurance model generates high costs and gaps." },
            ],
            steps: [
              { reasoning: "Private insurance fragmentation raises costs and leaves the uninsured.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Costly private model with gaps",
            commonErrors: ["Assuming highest spending equals best coverage."],
          },
        },
        {
          id: "geo-u6-hq10",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "WHO estimates a global shortfall of approximately how many health workers?",
          response: { type: "numeric", parts: [{ label: "Worker shortfall (millions)", answer: 10, tolerance: 1, unit: "million" }] },
          markscheme: {
            principles: [
              { kind: "context", name: "Health workforce gap", statement: "WHO estimates ~10 million health worker shortfall globally." },
            ],
            steps: [
              { reasoning: "Recall the WHO shortfall figure.", working: "10 \\text{ million}", marks: 1, markCode: "M" },
              { reasoning: "Answer $\\approx 10$ million.", working: "10", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\approx 10$ million health workers",
            commonErrors: ["Confusing worker shortfall with disease burden figures."],
          },
        },
        {
          id: "geo-u6-hq11",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A country has 2 doctors per 1,000 population while the WHO recommends 3.3 per 1,000. What is the shortfall per 1,000?",
          response: { type: "numeric", parts: [{ label: "Shortfall per 1,000", answer: 1.3, tolerance: 0.05 }] },
          markscheme: {
            principles: [
              { kind: "technique", name: "Workforce gap", statement: "Shortfall $= \\text{recommended} - \\text{actual}$ per 1,000." },
            ],
            steps: [
              { reasoning: "Subtract actual from recommended.", working: "3.3 - 2.0", marks: 1, markCode: "M" },
              { reasoning: "Shortfall $= 1.3$ per 1,000.", working: "1.3", marks: 1, markCode: "M" },
              { reasoning: "The country is $1.3$ doctors/1,000 below the benchmark.", working: "1.3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$1.3$ per 1,000",
            commonErrors: ["Reporting actual rather than the gap."],
          },
        },
        {
          id: "geo-u6-hq12",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Brain drain in health systems refers to:",
          response: { type: "numeric", parts: [{ label: "Concept code (1=skilled health workers migrating to HICs, 2=patients travelling abroad for care, 3=climate migration, 4=urban-rural drift only)", answer: 1, tolerance: 0 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Brain drain", statement: "Skilled health workers migrating from LICs to HICs, worsening origin shortages." },
            ],
            steps: [
              { reasoning: "Brain drain = health worker emigration to richer countries.", working: "worker migration", marks: 1, markCode: "M" },
              { reasoning: "Code = 1.", working: "1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Health workers migrating to HICs (1)",
            commonErrors: ["Confusing brain drain with medical tourism."],
          },
        },
        {
          id: "geo-u6-hq13",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "A health system spends $\\$500$ per capita on healthcare. If the population is 10 million, what is total health expenditure (in $\\$$ millions)?",
          response: { type: "numeric", parts: [{ label: "Total health expenditure ($ million)", answer: 5000, tolerance: 0, unit: "$ million" }] },
          markscheme: {
            principles: [
              { kind: "technique", name: "Health expenditure", statement: "Total $= \\text{per capita} \\times \\text{population}$." },
            ],
            steps: [
              { reasoning: "Multiply per-capita spending by population.", working: "500 \\times 10{,}000{,}000", marks: 1, markCode: "M" },
              { reasoning: "Total $= \\$5{,}000{,}000{,}000$.", working: "5 \\times 10^9", marks: 1, markCode: "M" },
              { reasoning: "Total expenditure $= \\$5{,}000$ million ($\\$5$ billion).", working: "5{,}000", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\$5{,}000$ million ($\\$5$ billion)",
            commonErrors: ["Unit errors — reporting $500$ million instead of $5 billion."],
          },
        },
        {
          id: "geo-u6-hq14",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Task-shifting in healthcare means:",
          response: { type: "numeric", parts: [{ label: "Concept code (1=training community workers for tasks normally done by doctors, 2=shifting patients between hospitals, 3=reducing all treatment, 4=privatising services)", answer: 1, tolerance: 0 }] },
          markscheme: {
            principles: [
              { kind: "technique", name: "Task-shifting", statement: "Delegating tasks to community/lower-cadre workers to extend coverage in resource-poor settings." },
            ],
            steps: [
              { reasoning: "Task-shifting redistributes clinical tasks to community workers.", working: "task shifting", marks: 1, markCode: "M" },
              { reasoning: "Code = 1.", working: "1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Community workers for clinical tasks (1)",
            commonErrors: ["Confusing task-shifting with workforce reduction."],
          },
        },
        {
          id: "geo-u6-hq15",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "If out-of-pocket health spending pushes 5% of a population of 30 million into poverty each year, how many people are impoverished annually?",
          response: { type: "numeric", parts: [{ label: "People impoverished (millions)", answer: 1.5, tolerance: 0.01, unit: "million" }] },
          markscheme: {
            principles: [
              { kind: "technique", name: "Catastrophic health spending", statement: "People affected $= \\text{rate} \\times \\text{population}$." },
            ],
            steps: [
              { reasoning: "Apply 5% to 30 million.", working: "0.05 \\times 30", marks: 1, markCode: "M" },
              { reasoning: "Affected $= 1.5$ million people.", working: "1.5", marks: 1, markCode: "M" },
              { reasoning: "$1.5$ million people pushed into poverty annually.", working: "1.5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$1.5$ million people per year",
            commonErrors: ["Reporting the percentage rather than absolute numbers."],
          },
        },
        {
          id: "geo-u6-hq16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examine a named country's health system and access to healthcare.",
          parts: [
            { label: "a", prompt: "Identify the country and its health system model.", marks: 2 },
            { label: "b", prompt: "Explain two factors determining access to healthcare there.", marks: 3 },
            { label: "c", prompt: "Evaluate the system's strengths and weaknesses.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Health system models", statement: "Beveridge, Bismarck, out-of-pocket and private models differ in financing, equity and coverage." },
            ],
            steps: [
              { part: "a", reasoning: "Named country identified with correct model.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Financing mechanism accurately described.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Access factor 1 (availability/workforce/geography).", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Access factor 2 (affordability/insurance) explained.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Factors linked to the named country's system.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Strength: coverage, equity or efficiency identified.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Weakness: cost, gaps or inequality identified.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned overall judgement.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Country + model. (b) Two access factors. (c) Strengths/weaknesses.",
            commonErrors: ["Generic discussion without country-specific evidence."],
          },
        },
      ],
    },
    {
      id: "geo-u6-health-inequalities",
      title: "Health inequalities",
      skill: "Explain the social determinants of health and evaluate strategies to reduce health inequalities.",
      lesson: {
        sections: [
          {
            heading: "Social determinants of health",
            body: "Health is shaped by more than healthcare: **income** (poverty → poor health), **education**, **housing**, **employment**, **environment** (pollution, sanitation), **behaviour** (smoking, diet) and **social support**. The **social gradient** shows health improves steadily with income — the poorest have worst health, the wealthiest best.",
          },
          {
            heading: "Health inequalities",
            body: "**Health inequality** = systematic differences in health between groups. **Health inequity** = unfair, avoidable differences rooted in injustice. Examples: life expectancy gaps between rich and poor neighbourhoods (e.g. ~20 years in some US cities); higher infant mortality in deprived areas; ethnic disparities in health outcomes.",
          },
          {
            heading: "Reducing inequalities",
            body: "Strategies include: reducing poverty (minimum wage, benefits), improving education and housing, targeted public health programmes, community health workers, and 'health in all policies' approach. The UK's 'Fair Society, Healthy Lives' report emphasised early childhood and social determinants. Success requires cross-sector action.",
          },
        ],
        keyFormulas: [
          { name: "Social gradient", statement: "Health improves steadily with income — poorest have worst health" },
          { name: "Determinants", statement: "Income, education, housing, employment, environment, behaviour" },
          { name: "Inequity vs inequality", statement: "Inequity = unfair, avoidable differences; inequality = any difference" },
        ],
        workedExample: {
          problem: "Explain why health inequalities persist despite universal healthcare.",
          solution: "Health outcomes are shaped by social determinants beyond healthcare access. Even with equal NHS access, poorer people face worse housing, nutrition, stress, pollution exposure and health behaviours. The social gradient means health follows income — universal healthcare alone cannot eliminate inequalities rooted in poverty and environment.",
        },
      },
      questions: [
        {
          id: "geo-u6-iq1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The 'social gradient' in health refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Health changes with age" },
              { id: "b", text: "Steady improvement in health with increasing income" },
              { id: "c", text: "Differences in health between countries only" },
              { id: "d", text: "Health differences between men and women" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Social gradient", statement: "Health improves steadily as income/education/social position increases." },
            ],
            steps: [
              { reasoning: "Social gradient = continuous relationship between socioeconomic position and health.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Health improves with income",
            commonErrors: ["Thinking gradient means only poorest vs richest — it's continuous across all groups."],
          },
        },
        {
          id: "geo-u6-iq2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Describe two social determinants of health.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Social determinants", statement: "Income, education, housing, employment, environment, behaviour." },
            ],
            steps: [
              { reasoning: "Income/poverty: determines nutrition, housing quality, healthcare access, stress.", marks: 1, markCode: "M" },
              { reasoning: "Education: affects health literacy, employment, health behaviours.", marks: 1, markCode: "M" },
              { reasoning: "Housing/environment: overcrowding, damp, pollution affect health directly.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Income, education, housing, employment, environment.",
            commonErrors: ["Only citing medical factors — social determinants are broader."],
          },
        },
        {
          id: "geo-u6-iq3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Explain the difference between health inequality and health inequity.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Inequality vs inequity", statement: "Inequality = any systematic difference; inequity = unfair, avoidable differences rooted in injustice." },
            ],
            steps: [
              { reasoning: "Health inequality is descriptive — any difference in health between groups.", marks: 1, markCode: "M" },
              { reasoning: "Health inequity adds a value judgement — differences that are unfair and avoidable.", marks: 1, markCode: "M" },
              { reasoning: "Not all inequality is inequity — some differences may be unavoidable or fair.", marks: 1, markCode: "R" },
              { reasoning: "Inequities demand policy action; mere inequalities may not.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Inequality = any difference; inequity = unfair, avoidable difference requiring action.",
            commonErrors: ["Using the terms interchangeably — the distinction matters for policy."],
          },
        },
        {
          id: "geo-u6-iq4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examine health inequalities in a named country or city.",
          parts: [
            { label: "a", prompt: "Identify the named place and the inequality.", marks: 2 },
            { label: "b", prompt: "Explain two social determinants causing the inequality.", marks: 3 },
            { label: "c", prompt: "Evaluate strategies to reduce the inequality.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Health inequality reduction", statement: "Addressing social determinants (poverty, education, housing) reduces inequalities more effectively than healthcare alone." },
            ],
            steps: [
              { part: "a", reasoning: "Named place (UK regions, US cities, Brazilian favelas) identified.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Specific inequality (life expectancy, infant mortality) described.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Determinant 1: income/poverty affecting health access and outcomes.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Determinant 2: education, housing, environment or employment.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Determinants linked to the specific inequality.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Strategy: poverty reduction, education, housing, targeted health programmes.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluation: cross-sector needs, costs, timeframes, political will.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned overall judgement.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Named place + inequality. (b) Two determinants. (c) Strategies evaluated.",
            commonErrors: ["Focusing only on healthcare — social determinants are key."],
          },
        },
        {
          id: "geo-u6-iq5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The social gradient in health describes:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Health improving steadily with income across all groups" },
              { id: "b", text: "Health improving only at the top income level" },
              { id: "c", text: "No relationship between income and health" },
              { id: "d", text: "Health worsening with income" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Social gradient", statement: "Health improves steadily with income — poorest have worst health, wealthiest best, across every step." },
            ],
            steps: [
              { reasoning: "The gradient is a continuous income-health relationship, not just top vs bottom.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Steady improvement with income",
            commonErrors: ["Thinking only the poorest suffer — the gradient is continuous."],
          },
        },
        {
          id: "geo-u6-iq6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Health inequity differs from health inequality because inequity is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Always caused by genetics" },
              { id: "b", text: "A natural biological difference" },
              { id: "c", text: "Any difference in health between groups" },
              { id: "d", text: "Unfair, avoidable differences rooted in injustice" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Inequity vs inequality", statement: "Inequality = any difference; inequity = unfair, avoidable differences rooted in injustice." },
            ],
            steps: [
              { reasoning: "Inequity specifically implies unfairness and avoidability.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Unfair, avoidable, unjust",
            commonErrors: ["Using the terms interchangeably."],
          },
        },
        {
          id: "geo-u6-iq7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Which is a social determinant of health?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only medical technology" },
              { id: "b", text: "Only access to hospitals" },
              { id: "c", text: "Only genetic inheritance" },
              { id: "d", text: "Income, education, housing and employment" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Social determinants", statement: "Income, education, housing, employment, environment, behaviour and social support shape health." },
            ],
            steps: [
              { reasoning: "Social determinants are the non-medical conditions shaping health.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Income, education, housing, employment",
            commonErrors: ["Listing only healthcare access factors."],
          },
        },
        {
          id: "geo-u6-iq8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Life expectancy gaps of ~20 years between rich and poor neighbourhoods in some US cities illustrate:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Genetic differences" },
              { id: "b", text: "Random variation" },
              { id: "c", text: "Health inequity driven by social determinants" },
              { id: "d", text: "Health equality" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Neighbourhood health gaps", statement: "Life expectancy differences of ~20 years within cities reflect income, housing and environment — health inequity." },
            ],
            steps: [
              { reasoning: "Large within-city gaps reflect social determinants, not biology.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Health inequity from social determinants",
            commonErrors: ["Attributing neighbourhood gaps to genetics rather than environment."],
          },
        },
        {
          id: "geo-u6-iq9",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 2,
          stem: "Why does universal healthcare alone fail to eliminate health inequalities?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It is too expensive to implement" },
              { id: "b", text: "It only treats infectious diseases" },
              { id: "c", text: "Health outcomes are shaped by social determinants beyond medical care" },
              { id: "d", text: "It excludes the poorest" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Limits of healthcare", statement: "Even with equal access, income, housing, education and environment produce unequal health." },
            ],
            steps: [
              { reasoning: "Social determinants operate independently of healthcare access.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Social determinants beyond care",
            commonErrors: ["Assuming equal access produces equal outcomes."],
          },
        },
        {
          id: "geo-u6-iq10",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The 'health in all policies' approach recognises that:",
          response: { type: "numeric", parts: [{ label: "Core idea code (1=health outcomes depend on policies across all sectors, 2=only health ministry matters, 3=health is separate from other policy, 4=only hospitals matter)", answer: 1, tolerance: 0 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Health in all policies", statement: "Health is shaped by housing, transport, education and environment policies — all sectors must consider health." },
            ],
            steps: [
              { reasoning: "Health in all policies = cross-sector responsibility for health.", working: "cross-sector", marks: 1, markCode: "M" },
              { reasoning: "Code = 1.", working: "1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Cross-sector health responsibility (1)",
            commonErrors: ["Limiting health responsibility to the health sector."],
          },
        },
        {
          id: "geo-u6-iq11",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "In a city, the richest quintile has life expectancy 82 years and the poorest 67 years. What is the life expectancy gap (in years)?",
          response: { type: "numeric", parts: [{ label: "Life expectancy gap (years)", answer: 15, tolerance: 0, unit: "years" }] },
          markscheme: {
            principles: [
              { kind: "technique", name: "Health gap", statement: "Gap $= \\text{highest} - \\text{lowest}$ group measure." },
            ],
            steps: [
              { reasoning: "Subtract poorest from richest.", working: "82 - 67", marks: 1, markCode: "M" },
              { reasoning: "Gap $= 15$ years.", working: "15", marks: 1, markCode: "M" },
              { reasoning: "The life expectancy gap is $15$ years.", working: "15", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$15$ years",
            commonErrors: ["Averaging instead of computing the gap."],
          },
        },
        {
          id: "geo-u6-iq12",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Infant mortality is typically higher in deprived areas because of:",
          response: { type: "numeric", parts: [{ label: "Primary driver code (1=poorer access to care + worse living conditions, 2=genetics, 3=random chance, 4=better nutrition)", answer: 1, tolerance: 0 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Infant mortality inequality", statement: "Deprived areas have worse healthcare access, nutrition, housing and sanitation — raising infant mortality." },
            ],
            steps: [
              { reasoning: "Deprivation worsens both care access and living conditions.", working: "access + conditions", marks: 1, markCode: "M" },
              { reasoning: "Code = 1.", working: "1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Worse access + conditions (1)",
            commonErrors: ["Attributing to genetics rather than social conditions."],
          },
        },
        {
          id: "geo-u6-iq13",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "If a deprived area's infant mortality rate is 45 per 1,000 and an affluent area's is 5 per 1,000, what is the relative risk ratio?",
          response: { type: "numeric", parts: [{ label: "Relative risk ratio", answer: 9, tolerance: 0 }] },
          markscheme: {
            principles: [
              { kind: "technique", name: "Relative risk", statement: "Relative risk $= \\frac{\\text{rate in group A}}{\\text{rate in group B}}$." },
            ],
            steps: [
              { reasoning: "Divide deprived rate by affluent rate.", working: "\\frac{45}{5}", marks: 1, markCode: "M" },
              { reasoning: "Ratio $= 9$.", working: "9", marks: 1, markCode: "M" },
              { reasoning: "Infant mortality risk is $9\\times$ higher in the deprived area.", working: "9", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$9$ times higher",
            commonErrors: ["Subtracting rates instead of computing the ratio."],
          },
        },
        {
          id: "geo-u6-iq14",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Reducing poverty improves health primarily by:",
          response: { type: "numeric", parts: [{ label: "Mechanism code (1=improving nutrition, housing, education and healthcare access, 2=only increasing hospital numbers, 3=reducing population, 4=increasing taxes)", answer: 1, tolerance: 0 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Poverty-health link", statement: "Higher income improves nutrition, housing, education and healthcare access — multiple health pathways." },
            ],
            steps: [
              { reasoning: "Poverty reduction improves multiple social determinants simultaneously.", working: "multiple determinants", marks: 1, markCode: "M" },
              { reasoning: "Code = 1.", working: "1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Improves multiple determinants (1)",
            commonErrors: ["Reducing poverty's effect to only healthcare access."],
          },
        },
        {
          id: "geo-u6-iq15",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "A minimum wage increase lifts 200,000 people above the poverty line. If poverty-related illness costs the health system $\\$500$ per person per year, what is the potential annual health cost saving (in $\\$$ millions)?",
          response: { type: "numeric", parts: [{ label: "Annual saving ($ million)", answer: 100, tolerance: 0, unit: "$ million" }] },
          markscheme: {
            principles: [
              { kind: "technique", name: "Health cost saving", statement: "Saving $= \\text{people affected} \\times \\text{cost per person}$." },
            ],
            steps: [
              { reasoning: "Multiply people by per-person cost.", working: "200{,}000 \\times 500", marks: 1, markCode: "M" },
              { reasoning: "Total $= \\$100{,}000{,}000$.", working: "10^8", marks: 1, markCode: "M" },
              { reasoning: "Potential saving $= \\$100$ million per year.", working: "100", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\$100$ million per year",
            commonErrors: ["Forgetting that the figure is potential, not guaranteed savings."],
          },
        },
        {
          id: "geo-u6-iq16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Explain health inequalities in a named country or city and evaluate strategies to reduce them.",
          parts: [
            { label: "a", prompt: "Identify the place and describe the health inequality.", marks: 2 },
            { label: "b", prompt: "Explain two social determinants driving the inequality.", marks: 3 },
            { label: "c", prompt: "Evaluate two strategies to reduce the inequality.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Health inequalities", statement: "Health gaps reflect social determinants — income, housing, education, environment — not just healthcare access." },
            ],
            steps: [
              { part: "a", reasoning: "Named place identified with specific health gap.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Inequality accurately described (life expectancy, mortality).", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Determinant 1 explained (income/poverty).", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Determinant 2 explained (housing/education/environment).", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Determinants linked to the named place's inequality.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Strategy 1 evaluated (poverty reduction, early childhood, targeted programmes).", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Strategy 2 evaluated with limitation noted.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned overall judgement.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Place + inequality. (b) Two determinants. (c) Two strategies evaluated.",
            commonErrors: ["Focusing only on healthcare — social determinants are key."],
          },
        },
      ],
    },
  ],
};
