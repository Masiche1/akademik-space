import type { Lesson } from "../../../types.ts";

export const lesson62: Lesson = {
  id: "cieigeo-u6-lesson-6-2",
  code: "6-2",
  title: "Industry, TNCs and Economic Development",
  goal: "I CAN analyse industrial location factors, TNC impacts and development patterns.",
  standards: [
    "Cambridge IGCSE Geography 0460",
    "Unit 6: human geography depth",
  ],
  vocabulary: [
    {
      term: "Industrial location",
      definition: "Factors influencing where industry locates.",
    },
    {
      term: "TNC",
      definition: "Transnational corporation operating in multiple countries.",
    },
    {
      term: "Deindustrialisation",
      definition: "Decline of manufacturing employment.",
    },
    {
      term: "Footloose industry",
      definition: "Industry not tied to raw materials.",
    },
    { term: "Rust belt", definition: "Declining industrial regions." },
    {
      term: "Economic core-periphery",
      definition: "Wealth concentrated in core regions.",
    },
  ],
  concepts: [
    {
      id: "cieigeo-u6l2-c1-location",
      title: "Industrial location and TNCs",
      skill: "Analyse location factors and evaluate TNC impacts.",
      lesson: {
        sections: [
          {
            heading: "Location factors",
            body: "**Raw materials**: heavy industry near sources (coal, iron) — declining with containerisation. **Labour**: cheap labour attracts labour-intensive industry (textiles, electronics assembly). **Market**: locate near customers — reduces transport costs. **Transport**: access to ports, roads, airports critical for global trade. **Footloose industries** (software, finance) can locate anywhere with skilled labour/low costs.",
          },
          {
            heading: "TNC impacts",
            body: "**Benefits for host**: jobs, technology transfer, infrastructure, export earnings. **Costs**: profit repatriation (money leaves country), limited local supply chains, environmental damage, exploitation of cheap labour. TNCs locate in LICs for cheap labour/loose regulation — 'race to the bottom' in wages/environmental standards.",
          },
        ],
        keyFormulas: [
          { name: "Footloose", statement: "No raw material tie" },
          { name: "TNC", statement: "Multi-country firm" },
          { name: "Repatriation", statement: "Profits leave" },
        ],
        workedExample: {
          problem: "Why do smartphone companies assemble in Vietnam/China?",
          solution:
            "Cheap skilled labour, established supply chains, good infrastructure, government incentives — but wages low, working conditions questioned; TNCs balance cost vs reputation risk.",
        },
      },
      questions: [
        {
          id: "cieigeo-q-u6l2c1-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'footloose industry' is one that:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Must be near coal mines" },
              {
                id: "b",
                text: "Can locate anywhere — not tied to raw materials",
              },
              { id: "c", text: "Cannot relocate" },
              { id: "d", text: "Only exists in cities" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Footloose",
                statement: "Free location.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Free location",
            commonErrors: ["Tied to materials."],
          },
        },
        {
          id: "cieigeo-q-u6l2c1-2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a 'TNC'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "TNC", statement: "Multi-country." },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Example.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Transnational corporation — company operating in multiple countries with headquarters in one (e.g. Apple, Samsung); production, sales, profits span borders.",
            commonErrors: ["Local company."],
          },
        },
        {
          id: "cieigeo-q-u6l2c1-3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two factors influencing industrial location.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Location factors",
                statement: "Multiple.",
              },
            ],
            steps: [
              { reasoning: "Two valid.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 2, markCode: "A" },
            ],
            finalAnswer:
              "e.g. labour costs (cheap labour attracts assembly) and transport access (ports/roads for global trade) — also raw materials, market proximity, government incentives.",
            commonErrors: ["One factor."],
          },
        },
        {
          id: "cieigeo-q-u6l2c1-4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Evaluate the benefits and costs of TNCs for host countries.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "TNC impacts", statement: "Mixed." },
            ],
            steps: [
              { reasoning: "Benefits.", marks: 1, markCode: "M" },
              { reasoning: "Costs.", marks: 1, markCode: "M" },
              { reasoning: "Evidence.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Benefits: jobs, technology, infrastructure, exports. Costs: profit repatriation, limited local links, environmental damage, labour exploitation — net benefit depends on regulation, linkages, fair terms.",
            commonErrors: ["Only benefits."],
          },
        },
        {
          id: "cieigeo-q-u6l2c1-5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Analyse the causes and consequences of deindustrialisation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Deindustrialisation",
                statement: "Decline.",
              },
            ],
            steps: [
              { reasoning: "Causes.", marks: 1, markCode: "M" },
              { reasoning: "Consequences.", marks: 1, markCode: "M" },
              { reasoning: "Examples.", marks: 1, markCode: "A" },
              { reasoning: "Weighs all.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Causes: cheap imports, automation, competition from LICs, outdated industries. Consequences: unemployment, economic decline, social problems (rust belt cities), service sector growth; some regions recover via regeneration.",
            commonErrors: ["Only good."],
          },
        },
        {
          id: "cieigeo-q-u6l2c1-6",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'profit repatriation'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Repatriation",
                statement: "Money leaves.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Impact.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "TNCs sending profits back to home country rather than reinvesting locally — reduces economic benefit for host; limits multiplier effect; major criticism of TNCs in LICs.",
            commonErrors: ["Local reinvestment."],
          },
        },
        {
          id: "cieigeo-q-u6l2c1-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which industry is most likely 'footloose'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Steel production" },
              { id: "b", text: "Software development" },
              { id: "c", text: "Coal mining" },
              { id: "d", text: "Cement" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "fact", name: "Footloose", statement: "Tech." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Software",
            commonErrors: ["Heavy industry."],
          },
        },
        {
          id: "cieigeo-q-u6l2c1-8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two reasons TNCs locate factories in LICs.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "TNC location",
                statement: "Cost drivers.",
              },
            ],
            steps: [
              { reasoning: "Two valid.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 2, markCode: "A" },
            ],
            finalAnswer:
              "e.g. cheap labour (low wages reduce costs) and weak regulation (looser environmental/labour laws) — also government incentives, growing markets, infrastructure improvements.",
            commonErrors: ["High wages."],
          },
        },
        {
          id: "cieigeo-q-u6l2c1-9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain 'core-periphery' in economic geography.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Core-periphery",
                statement: "Wealth gap.",
              },
            ],
            steps: [
              { reasoning: "Definition.", marks: 1, markCode: "M" },
              { reasoning: "Core.", marks: 1, markCode: "M" },
              { reasoning: "Periphery.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Wealth/economic activity concentrated in 'core' regions (cities, HICs) while 'periphery' (rural, LICs) remains underdeveloped — self-reinforcing; TNCs often extract from periphery to core.",
            commonErrors: ["Equal development."],
          },
        },
        {
          id: "cieigeo-q-u6l2c1-10",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate whether deindustrialisation is always negative for a region.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Deind eval", statement: "Mixed." },
            ],
            steps: [
              { reasoning: "Negatives.", marks: 1, markCode: "M" },
              { reasoning: "Positives.", marks: 1, markCode: "M" },
              { reasoning: "Evidence.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Job losses, decline, social problems — negative; but frees resources for service/knowledge economy, cleaner environment, innovation; long-term depends on successful transition — some regions reinvent (e.g. Ruhr), others stagnate (rust belt).",
            commonErrors: ["Always bad."],
          },
        },
        {
          id: "cieigeo-q-u6l2c1-11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Labour-intensive industry is most likely to locate where:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Coal is abundant" },
              { id: "b", text: "Labour is cheap and plentiful" },
              { id: "c", text: "Near raw material sources only" },
              { id: "d", text: "Unions are strongest" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Labour-intensive location",
                statement: "Cheap labour attracts.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Cheap labour",
            commonErrors: ["Materials only."],
          },
        },
        {
          id: "cieigeo-q-u6l2c1-12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the 'race to the bottom' in industrial location.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Race to bottom",
                statement: "Competing on costs.",
              },
            ],
            steps: [
              { reasoning: "Definition.", marks: 1, markCode: "M" },
              { reasoning: "Mechanism.", marks: 1, markCode: "M" },
              { reasoning: "Consequence.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Countries compete to attract TNCs by lowering wages and environmental/labour standards — TNCs gain lowest costs but workers face exploitation and environments suffer; regulation race undermines development gains.",
            commonErrors: ["Benefits workers."],
          },
        },
        {
          id: "cieigeo-q-u6l2c1-13",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two reasons containerisation changed industrial location patterns.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Containerisation",
                statement: "Transport cost fell.",
              },
            ],
            steps: [
              { reasoning: "Two valid.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 2, markCode: "A" },
            ],
            finalAnswer:
              "e.g. cheap container shipping freed heavy industry from raw material/port locations — now locates near markets or labour; also enabled global supply chains so assembly can happen far from markets and materials.",
            commonErrors: ["No change."],
          },
        },
        {
          id: "cieigeo-q-u6l2c1-14",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate government incentives as a tool for attracting industry.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Incentives",
                statement: "Attract vs cost.",
              },
            ],
            steps: [
              { reasoning: "Benefits.", marks: 1, markCode: "M" },
              { reasoning: "Costs.", marks: 1, markCode: "M" },
              { reasoning: "Risks.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Tax breaks, subsidies, free zones attract TNCs → jobs and investment — but cost public money, may just subsidise profits that get repatriated, can trigger bidding wars between regions; effective only with skills, infrastructure and regulation.",
            commonErrors: ["Always effective."],
          },
        },
        {
          id: "cieigeo-q-u6l2c1-15",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Deindustrialisation' refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Construction of new factories" },
              { id: "b", text: "Rural-to-urban migration" },
              { id: "c", text: "Increased industrial exports" },
              {
                id: "d",
                text: "Decline of manufacturing employment and output",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Deindustrialisation",
                statement: "Manufacturing decline.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Manufacturing decline",
            commonErrors: ["Growth."],
          },
        },
        {
          id: "cieigeo-q-u6l2c1-16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Analyse the social impact of TNC factories on local communities in host countries.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "TNC social impact",
                statement: "Mixed community effects.",
              },
            ],
            steps: [
              { reasoning: "Positive impacts.", marks: 1, markCode: "M" },
              { reasoning: "Negative impacts.", marks: 1, markCode: "M" },
              { reasoning: "Evidence.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Jobs and skills training improve incomes and status — but long hours, low wages, weak labour rights; community disruption from migration; environmental health costs; benefits depend on regulation and whether wages stay local vs profits repatriated.",
            commonErrors: ["Only jobs matter."],
          },
        },
      ],
    },
    {
      id: "cieigeo-u6l2-c2-development",
      title: "Development patterns and measurement",
      skill: "Analyse development inequalities and measurement methods.",
      lesson: {
        sections: [
          {
            heading: "Development measurement",
            body: "**GDP/GNP**: economic output — doesn't show distribution. **HDI**: income+education+health — better wellbeing. **Gini coefficient**: income inequality. **Poverty lines**: $1.90/day extreme poverty. **MDGs/SDGs**: UN development goals — poverty reduction, education, health, sustainability. Development = multidimensional, not just income.",
          },
          {
            heading: "Development patterns and strategies",
            body: "**North-South divide**: HICs ('North') vs LICs ('South') — historical colonialism, trade structures. **LIC strategies**: export-led growth (manufacturing exports), import substitution, tourism, remittances. **Debt problems**: unsustainable debt traps LICs — HIPC initiative forgives some. **Aid**: Official Development Assistance — effectiveness debated.",
          },
        ],
        keyFormulas: [
          { name: "HDI", statement: "Income+edu+health" },
          { name: "Gini", statement: "Inequality" },
          { name: "HIPC", statement: "Debt relief" },
        ],
        workedExample: {
          problem: "Why is HDI better than GDP for measuring development?",
          solution:
            "GDP only measures economic output — oil-rich countries high GDP but poor health/education; HDI combines income, education, health → captures wellbeing, not just wealth.",
        },
      },
      questions: [
        {
          id: "cieigeo-q-u6l2c2-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The HDI measures:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only GDP" },
              { id: "b", text: "Military strength" },
              { id: "c", text: "Income, education and health" },
              { id: "d", text: "Population size" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "fact", name: "HDI", statement: "Three dimensions." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Income+edu+health",
            commonErrors: ["GDP only."],
          },
        },
        {
          id: "cieigeo-q-u6l2c2-2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the 'North-South divide'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "North-South",
                statement: "Rich-poor.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Causes.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Wealth gap between HICs ('North') and LICs ('South') — historical colonialism, unequal trade, resource extraction; persists despite development efforts; metaphorical not geographic.",
            commonErrors: ["Latitude."],
          },
        },
        {
          id: "cieigeo-q-u6l2c2-3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two reasons GDP is an imperfect development measure.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "fact", name: "GDP limits", statement: "Output only." },
            ],
            steps: [
              { reasoning: "Two valid.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 2, markCode: "A" },
            ],
            finalAnswer:
              "e.g. doesn't show distribution (average hides inequality) and ignores wellbeing (health, education, environment) — oil-rich countries high GDP but poor HDI; GDP ≠ development.",
            commonErrors: ["Perfect measure."],
          },
        },
        {
          id: "cieigeo-q-u6l2c2-4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain the 'debt trap' facing many LICs.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Debt trap",
                statement: "Unsustainable.",
              },
            ],
            steps: [
              { reasoning: "Mechanism.", marks: 1, markCode: "M" },
              { reasoning: "Consequence.", marks: 1, markCode: "M" },
              { reasoning: "Cycle.", marks: 1, markCode: "M" },
              { reasoning: "Solution.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Borrow for development → can't repay → interest payments exceed export earnings → borrow more → debt spiral; HIPC initiative forgives unsustainable debt; need concessional lending, export diversification.",
            commonErrors: ["Easy to repay."],
          },
        },
        {
          id: "cieigeo-q-u6l2c2-5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate the effectiveness of foreign aid in promoting development.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Aid eval", statement: "Mixed." },
            ],
            steps: [
              { reasoning: "Benefits.", marks: 1, markCode: "M" },
              { reasoning: "Criticisms.", marks: 1, markCode: "M" },
              { reasoning: "Evidence.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Funds healthcare, education, infrastructure — but often tied to donor interests, corruption, dependency, may not reach poorest; effectiveness varies — targeted aid (cash transfers, results-based) more effective than tied aid.",
            commonErrors: ["Perfect/failed."],
          },
        },
        {
          id: "cieigeo-q-u6l2c2-6",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the 'Gini coefficient'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Gini", statement: "Inequality." },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Scale.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Measures income inequality within a country — 0 = perfect equality, 1 = perfect inequality; higher = more unequal; used to compare inequality levels.",
            commonErrors: ["Poverty line."],
          },
        },
        {
          id: "cieigeo-q-u6l2c2-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which better measures development?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "GDP only" },
              { id: "b", text: "HDI" },
              { id: "c", text: "Population" },
              { id: "d", text: "Land area" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "fact", name: "HDI", statement: "Wellbeing." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** HDI",
            commonErrors: ["GDP."],
          },
        },
        {
          id: "cieigeo-q-u6l2c2-8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two reasons LICs struggle to industrialise.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Industrialisation barriers",
                statement: "Multiple.",
              },
            ],
            steps: [
              { reasoning: "Two valid.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 2, markCode: "A" },
            ],
            finalAnswer:
              "e.g. lack of capital/infrastructure (can't afford factories, power, transport) and dependency on primary exports (low value, price volatility) — also skilled labour shortage, debt burdens.",
            commonErrors: ["No barriers."],
          },
        },
        {
          id: "cieigeo-q-u6l2c2-9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain 'export-led growth' as a development strategy.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Export-led",
                statement: "Trade growth.",
              },
            ],
            steps: [
              { reasoning: "Definition.", marks: 1, markCode: "M" },
              { reasoning: "Mechanism.", marks: 1, markCode: "M" },
              { reasoning: "Risk.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Promoting exports (manufacturing, services) to earn foreign exchange — used by East Asian tigers successfully; but vulnerable to global demand fluctuations, needs competitive industries, can widen inequality.",
            commonErrors: ["Only aid."],
          },
        },
        {
          id: "cieigeo-q-u6l2c2-10",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate whether remittances are a sustainable development strategy.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Remittances",
                statement: "Private flows.",
              },
            ],
            steps: [
              { reasoning: "Benefits.", marks: 1, markCode: "M" },
              { reasoning: "Limitations.", marks: 1, markCode: "M" },
              { reasoning: "Evidence.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Remittances exceed aid in many LICs — directly reduce poverty, fund education/health — but depend on migrant workers abroad, volatile (economic downturns), don't build productive capacity; supplement not substitute for development.",
            commonErrors: ["Sustainable alone."],
          },
        },
        {
          id: "cieigeo-q-u6l2c2-11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The '$1.90 per day' figure measures:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "GDP per capita" },
              { id: "b", text: "Average national income" },
              { id: "c", text: "The minimum wage" },
              { id: "d", text: "The extreme poverty line" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Poverty line",
                statement: "Extreme poverty threshold.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Extreme poverty line",
            commonErrors: ["Average income."],
          },
        },
        {
          id: "cieigeo-q-u6l2c2-12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two limitations of the HDI as a development measure.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "HDI limits",
                statement: "Still incomplete.",
              },
            ],
            steps: [
              { reasoning: "Two valid.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 2, markCode: "A" },
            ],
            finalAnswer:
              "e.g. still an average (hides inequality within a country) and uses subjective weighting of components — also ignores environmental sustainability, political freedoms and happiness/wellbeing dimensions.",
            commonErrors: ["Perfect measure."],
          },
        },
        {
          id: "cieigeo-q-u6l2c2-13",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the aims of the Sustainable Development Goals.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "SDGs",
                statement: "Global development agenda.",
              },
            ],
            steps: [
              { reasoning: "Definition.", marks: 1, markCode: "M" },
              { reasoning: "Examples.", marks: 1, markCode: "M" },
              { reasoning: "Scope.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "UN framework of 17 goals to end poverty, protect the planet and ensure prosperity for all by 2030 — covering health, education, gender equality, clean water, climate action; successor to the Millennium Development Goals.",
            commonErrors: ["Only poverty."],
          },
        },
        {
          id: "cieigeo-q-u6l2c2-14",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate whether aid or trade is more effective for LIC development.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "Aid vs trade",
                statement: "Effectiveness.",
              },
            ],
            steps: [
              { reasoning: "Aid case.", marks: 1, markCode: "M" },
              { reasoning: "Trade case.", marks: 1, markCode: "M" },
              { reasoning: "Evidence.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Aid: direct poverty relief but dependency, corruption, tied conditions. Trade: sustainable growth via exports but LICs face subsidies, volatile prices, unfavourable terms of trade; evidence suggests trade-led growth works where capacity exists — need both plus fairer rules.",
            commonErrors: ["One clearly better."],
          },
        },
        {
          id: "cieigeo-q-u6l2c2-15",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is an example of an LIC development strategy?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Complete economic isolation" },
              { id: "b", text: "Export-led growth" },
              { id: "c", text: "Banning all imports" },
              { id: "d", text: "Colonial resource extraction" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "LIC strategies",
                statement: "Export-led growth.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Export-led growth",
            commonErrors: ["Isolation."],
          },
        },
        {
          id: "cieigeo-q-u6l2c2-16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Analyse why the North-South divide persists despite development efforts.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "North-South persistence",
                statement: "Structural inequality.",
              },
            ],
            steps: [
              { reasoning: "Historical roots.", marks: 1, markCode: "M" },
              { reasoning: "Trade structures.", marks: 1, markCode: "M" },
              { reasoning: "Internal factors.", marks: 1, markCode: "A" },
              { reasoning: "Evidence.", marks: 1, markCode: "A" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Colonialism created extractive institutions and primary-export dependence; unequal trade rules and HIC subsidies disadvantage LICs; internal issues — debt, corruption, conflict, weak governance — compound; some countries (East Asia) escaped via industrial policy, showing escape is possible but rare.",
            commonErrors: ["Inevitability ignored."],
          },
        },
      ],
    },
  ],
};
