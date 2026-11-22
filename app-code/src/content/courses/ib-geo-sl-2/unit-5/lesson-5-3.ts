import type { Lesson } from "../../../types.ts";

export const lesson53: Lesson = {
  id: "geo-u5-lesson-5-3",
  code: "5-3",
  title: "Food Security, Sustainability and Future Challenges",
  goal: "I CAN analyse food security, evaluate sustainable agriculture and discuss future challenges to food production.",
  standards: ["Paper 1", "Paper 2", "Food and agriculture"],
  vocabulary: [
    { term: "Food security", definition: "When all people have physical, social and economic access to sufficient safe, nutritious food at all times." },
    { term: "Food sovereignty", definition: "The right of peoples to control their own food systems — production, distribution, consumption." },
    { term: "Sustainable agriculture", definition: "Farming that meets present needs without compromising future generations — environmentally, socially, economically." },
    { term: "Agroecology", definition: "Applying ecological principles to agriculture — biodiversity, natural pest control, soil health." },
    { term: "Food waste", definition: "Food lost or discarded — ~1/3 of production — wasting resources and increasing emissions." },
    { term: "Vertical farming", definition: "Growing crops in stacked indoor layers with controlled conditions — land-efficient but energy-intensive." },
  ],
  concepts: [
    {
      id: "geo-u5-food-security",
      title: "Food security",
      skill: "Analyse food security dimensions, causes of insecurity and strategies for improvement.",
      lesson: {
        sections: [
          {
            heading: "Dimensions of food security",
            body: "FAO defines four pillars: **availability** (sufficient food produced/imported), **access** (economic and physical ability to obtain food), **utilisation** (nutritional quality, food safety, health) and **stability** (resilience to shocks). Food insecurity exists when any pillar fails — most commonly access, not availability.",
          },
          {
            heading: "Causes of insecurity",
            body: "**Poverty** is the main cause — people can't afford food even when it exists. **Conflict** disrupts production and distribution. **Climate change** increases droughts and floods. **Price volatility** and **inequality** concentrate food among the wealthy. ~800 million people remain chronically undernourished.",
          },
          {
            heading: "Strategies",
            body: "Improving food security requires: increasing production sustainably, reducing waste (~1/3 lost), improving distribution infrastructure, social safety nets, and empowering small farmers. **Food sovereignty** movements advocate local control over food systems. Emergency food aid addresses acute crises but doesn't solve chronic insecurity.",
          },
        ],
        keyFormulas: [
          { name: "Four pillars", statement: "Availability, access, utilisation, stability" },
          { name: "Main cause", statement: "Poverty — inability to afford food, not lack of food" },
          { name: "Food waste", statement: "~1/3 of production wasted" },
        ],
        workedExample: {
          problem: "Explain why food insecurity persists despite global food surplus.",
          solution: "Food insecurity is primarily an access problem, not availability. The world produces enough calories for all, but poverty, inequality, conflict and poor infrastructure prevent ~800 million people from obtaining food. Solutions must address distribution, affordability and resilience — not just production.",
        },
      },
      questions: [
        {
          id: "geo-u5-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The four pillars of food security are:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Supply, demand, price, profit" },
              { id: "b", text: "Production, processing, distribution, consumption" },
              { id: "c", text: "Land, water, seeds, fertiliser" },
              { id: "d", text: "Availability, access, utilisation, stability" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Food security pillars", statement: "Availability, access, utilisation, stability — all must be met." },
            ],
            steps: [
              { reasoning: "FAO's four pillars are availability, access, utilisation and stability.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Availability, access, utilisation, stability",
            commonErrors: ["Confusing food security pillars with food system components."],
          },
        },
        {
          id: "geo-u5-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Describe two main causes of food insecurity.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Food insecurity causes", statement: "Poverty, conflict, climate change, price volatility, inequality." },
            ],
            steps: [
              { reasoning: "Poverty: people cannot afford food even when it is available — the main cause.", marks: 1, markCode: "M" },
              { reasoning: "Conflict disrupts production and distribution; climate change increases drought/flood.", marks: 1, markCode: "M" },
              { reasoning: "Price volatility and inequality concentrate food among the wealthy.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Poverty, conflict, climate change, price volatility, inequality.",
            commonErrors: ["Saying 'not enough food' — it's usually access, not availability."],
          },
        },
        {
          id: "geo-u5-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Explain the difference between food security and food sovereignty.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Security vs sovereignty", statement: "Food security = access to food; food sovereignty = control over food systems." },
            ],
            steps: [
              { reasoning: "Food security focuses on outcome: whether people can access sufficient food.", marks: 1, markCode: "M" },
              { reasoning: "Food sovereignty focuses on process: who controls production, distribution, consumption.", marks: 1, markCode: "M" },
              { reasoning: "Sovereignty movements argue local control ensures sustainable, culturally appropriate food systems.", marks: 1, markCode: "R" },
              { reasoning: "Critics argue sovereignty can reduce efficiency of global trade.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Security = access to food; sovereignty = control over food systems.",
            commonErrors: ["Treating them as synonyms — they address different dimensions."],
          },
        },
        {
          id: "geo-u5-q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examine strategies for improving food security in a named region.",
          parts: [
            { label: "a", prompt: "Identify the named region and its food security challenges.", marks: 2 },
            { label: "b", prompt: "Explain two strategies used or proposed there.", marks: 3 },
            { label: "c", prompt: "Evaluate their effectiveness.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Food security strategies", statement: "Production increases, waste reduction, infrastructure, safety nets and empowerment address different pillars of security." },
            ],
            steps: [
              { part: "a", reasoning: "Named region (e.g. Sahel, Horn of Africa, Bangladesh) identified.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Specific challenges (drought, poverty, conflict) described.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Strategy 1: production (irrigation, drought-resistant crops, fertiliser).", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Strategy 2: access (safety nets, infrastructure, market development).", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Strategies address specific pillars of insecurity.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Strength: improved yields, access, resilience.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Limitation: cost, sustainability, climate uncertainty, governance.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned overall judgement.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Named region + challenges. (b) Two strategies. (c) Effectiveness evaluated.",
            commonErrors: ["Generic strategies without linking to regional challenges."],
          },
        },
        {
          id: "geo-u5-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The FAO's four pillars of food security are availability, access, utilisation and:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Affordability" },
              { id: "b", text: "Quantity" },
              { id: "c", text: "Stability" },
              { id: "d", text: "Production" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Food security pillars", statement: "Availability, access, utilisation and stability — insecurity when any pillar fails." },
            ],
            steps: [
              { reasoning: "The fourth pillar is stability (resilience to shocks).", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Stability",
            commonErrors: ["Listing 'affordability' (part of access) as a separate pillar."],
          },
        },
        {
          id: "geo-u5-q6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The main cause of chronic food insecurity is most often:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Poverty — inability to afford food" },
              { id: "b", text: "Absolute lack of food production" },
              { id: "c", text: "Overpopulation alone" },
              { id: "d", text: "Climate change alone" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Food insecurity cause", statement: "Poverty is the dominant cause — people cannot afford food even when it exists." },
            ],
            steps: [
              { reasoning: "Access (affordability) fails more often than availability.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Poverty",
            commonErrors: ["Assuming food insecurity means insufficient food production."],
          },
        },
        {
          id: "geo-u5-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "'Utilisation' as a pillar of food security refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Nutritional quality, food safety and health of consumers" },
              { id: "b", text: "The distance food travels" },
              { id: "c", text: "The quantity of food produced" },
              { id: "d", text: "The price of food" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Utilisation", statement: "Food's nutritional quality, safety and the body's ability to use it — includes health and sanitation." },
            ],
            steps: [
              { reasoning: "Utilisation concerns nutritional quality and food safety.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Nutrition, safety, health",
            commonErrors: ["Confusing utilisation with availability or access."],
          },
        },
        {
          id: "geo-u5-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Approximately how many people remain chronically undernourished worldwide?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "~800 million" },
              { id: "b", text: "~80 million" },
              { id: "c", text: "~80 billion" },
              { id: "d", text: "~8 billion" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Undernourishment", statement: "~800 million people are chronically undernourished." },
            ],
            steps: [
              { reasoning: "The cited figure is roughly 800 million.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** ~800 million",
            commonErrors: ["Confusing undernourished with total population."],
          },
        },
        {
          id: "geo-u5-q9",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 2,
          stem: "Why does emergency food aid alone fail to solve chronic food insecurity?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It only works in cities" },
              { id: "b", text: "It is always rejected by recipients" },
              { id: "c", text: "It produces too much food" },
              { id: "d", text: "It addresses acute crises but not the structural causes of poverty and access" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Food aid limits", statement: "Emergency aid treats symptoms (acute hunger) not structural causes (poverty, access, resilience)." },
            ],
            steps: [
              { reasoning: "Aid addresses immediate need but not underlying access/poverty causes.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Treats symptoms not structural causes",
            commonErrors: ["Treating food aid as a complete solution."],
          },
        },
        {
          id: "geo-u5-q10",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Food sovereignty emphasises:",
          response: { type: "numeric", parts: [{ label: "Core principle code (1=local control over food systems, 2=maximise exports, 3=depend on food aid, 4=centralised corporate control)", answer: 1, tolerance: 0 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Food sovereignty", statement: "Movement advocating local/community control over food production and distribution." },
            ],
            steps: [
              { reasoning: "Food sovereignty prioritises local control over food systems.", working: "local control", marks: 1, markCode: "M" },
              { reasoning: "Code = 1.", working: "1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Local control (1)",
            commonErrors: ["Confusing food sovereignty with food security."],
          },
        },
        {
          id: "geo-u5-q11",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A country of 50 million people has 8 million undernourished. What percentage of the population is undernourished?",
          response: { type: "numeric", parts: [{ label: "Undernourished share (%)", answer: 16, tolerance: 0, unit: "%" }] },
          markscheme: {
            principles: [
              { kind: "technique", name: "Prevalence", statement: "Share $= \\frac{\\text{undernourished}}{\\text{population}} \\times 100$." },
            ],
            steps: [
              { reasoning: "Set up the ratio.", working: "\\frac{8}{50}", marks: 1, markCode: "M" },
              { reasoning: "Ratio $= 0.16$.", working: "0.16", marks: 1, markCode: "M" },
              { reasoning: "Share $= 16\\%$.", working: "16\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$16\\%$",
            commonErrors: ["Forgetting to convert to percentage."],
          },
        },
        {
          id: "geo-u5-q12",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Which factor most directly undermines the 'stability' pillar of food security?",
          response: { type: "numeric", parts: [{ label: "Factor code (1=conflict/climate shocks, 2=high yields, 3=food surplus, 4=stable prices)", answer: 1, tolerance: 0 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Stability", statement: "Resilience to shocks — conflict, droughts, price spikes undermine stable food access." },
            ],
            steps: [
              { reasoning: "Shocks (conflict, climate) directly break stability.", working: "shocks", marks: 1, markCode: "M" },
              { reasoning: "Code = 1.", working: "1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Conflict/climate shocks (1)",
            commonErrors: ["Confusing stability with availability or access."],
          },
        },
        {
          id: "geo-u5-q13",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "If a drought reduces a region's food output by 30% from 10 million tonnes to a new level, what is the new output (in million tonnes)?",
          response: { type: "numeric", parts: [{ label: "New output (million tonnes)", answer: 7, tolerance: 0, unit: "million tonnes" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Output after shock", statement: "New output $= \\text{original} \\times (1 - \\text{loss rate})$." },
            ],
            steps: [
              { reasoning: "Remaining share $= 1 - 0.30 = 0.70$.", working: "0.70", marks: 1, markCode: "M" },
              { reasoning: "New output $= 10 \\times 0.70$.", working: "10 \\times 0.70", marks: 1, markCode: "M" },
              { reasoning: "New output $= 7$ million tonnes.", working: "7", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$7$ million tonnes",
            commonErrors: ["Reporting the loss (3 Mt) instead of the remaining output."],
          },
        },
        {
          id: "geo-u5-q14",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Social safety nets improve food security primarily by:",
          response: { type: "numeric", parts: [{ label: "Mechanism code (1=protecting vulnerable groups' access during shocks, 2=increasing total production, 3=reducing food prices permanently, 4=eliminating poverty)", answer: 1, tolerance: 0 }] },
          markscheme: {
            principles: [
              { kind: "technique", name: "Social safety nets", statement: "Cash transfers, food subsidies and insurance protect access for vulnerable groups during shocks." },
            ],
            steps: [
              { reasoning: "Safety nets buffer access for the vulnerable during crises.", working: "protect access", marks: 1, markCode: "M" },
              { reasoning: "Code = 1.", working: "1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Protecting vulnerable access (1)",
            commonErrors: ["Confusing safety nets with production increases."],
          },
        },
        {
          id: "geo-u5-q15",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "A food aid programme distributes 500,000 tonnes of grain to a population of 20 million. If average consumption is 150 kg/person/year, how many people can be fed for one year?",
          response: { type: "numeric", parts: [{ label: "People fed (millions)", answer: 3.33, tolerance: 0.05, unit: "million" }] },
          markscheme: {
            principles: [
              { kind: "technique", name: "Food aid coverage", statement: "People fed $= \\frac{\\text{food distributed}}{\\text{per capita consumption}}$." },
            ],
            steps: [
              { reasoning: "Convert: $500{,}000$ tonnes $= 500{,}000{,}000$ kg.", working: "5 \\times 10^8 \\text{ kg}", marks: 1, markCode: "M" },
              { reasoning: "Divide by 150 kg/person.", working: "\\frac{5 \\times 10^8}{150}", marks: 1, markCode: "M" },
              { reasoning: "People fed $\\approx 3.33$ million.", working: "3.33 \\times 10^6", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\approx 3.33$ million people for one year",
            commonErrors: ["Forgetting unit conversion between tonnes and kg."],
          },
        },
        {
          id: "geo-u5-q16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examine food security challenges in a named region.",
          parts: [
            { label: "a", prompt: "Identify the region and describe its food security situation.", marks: 2 },
            { label: "b", prompt: "Explain two causes of food insecurity there.", marks: 3 },
            { label: "c", prompt: "Evaluate two strategies to improve food security.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Food security analysis", statement: "Food security depends on availability, access, utilisation and stability; causes and solutions are context-specific." },
            ],
            steps: [
              { part: "a", reasoning: "Named region identified with food security status described.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Relevant pillar(s) of insecurity specified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Cause 1 explained (e.g. poverty, conflict, climate).", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Cause 2 explained with mechanism.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Causes linked to the named region.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Strategy 1 evaluated (production, safety nets, infrastructure).", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Strategy 2 evaluated with limitation noted.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned overall judgement.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Region + situation. (b) Two causes. (c) Two strategies evaluated.",
            commonErrors: ["Generic strategies without linking to regional challenges."],
          },
        },
      ],
    },
    {
      id: "geo-u5-future-challenges",
      title: "Sustainable agriculture and future challenges",
      skill: "Evaluate sustainable agriculture approaches and discuss future challenges to food production.",
      lesson: {
        sections: [
          {
            heading: "Sustainable agriculture",
            body: "**Agroecology** applies ecological principles: crop diversification, natural pest control, soil conservation, reduced chemical inputs. **Organic farming** prohibits synthetic chemicals. **Conservation agriculture** uses minimal tillage, cover crops and crop rotation. **Precision agriculture** uses GPS and sensors for targeted input application. These aim to maintain yields while reducing environmental harm.",
          },
          {
            heading: "Future challenges",
            body: "By 2050, world population ~9.7 billion needs ~50-70% more food. Challenges: **climate change** (droughts, heat, shifting growing zones), **water scarcity**, **soil degradation**, **biodiversity loss**, **land competition** (food vs biofuels vs conservation). Solutions must produce more with less — sustainable intensification, reduced waste, dietary shifts.",
          },
          {
            heading: "Emerging technologies",
            body: "**Vertical farming** grows crops in stacked indoor layers — land-efficient but energy-intensive. **Lab-grown meat** and **plant-based proteins** could reduce livestock emissions. **Gene editing** (CRISPR) offers precise crop improvement. **Digital agriculture** (drones, AI) optimises inputs. All raise questions about scalability, cost and equity.",
          },
        ],
        keyFormulas: [
          { name: "Agroecology", statement: "Ecological principles applied to farming — diversity, natural pest control" },
          { name: "2050 challenge", statement: "~9.7 billion people, ~50-70% more food needed" },
          { name: "Sustainable intensification", statement: "More yield with less environmental harm" },
        ],
        workedExample: {
          problem: "Evaluate vertical farming as a solution to future food challenges.",
          solution: "Vertical farming offers land efficiency (multiple layers), year-round production, reduced transport and no pesticides. However, it is extremely energy-intensive (lighting, climate control), expensive, limited to leafy greens, and depends on cheap reliable energy. It complements rather than replaces conventional agriculture.",
        },
      },
      questions: [
        {
          id: "geo-u5-fq1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Agroecology is best described as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Applying ecological principles to agriculture" },
              { id: "b", text: "Genetically modifying all crops" },
              { id: "c", text: "Using only synthetic fertilisers" },
              { id: "d", text: "Growing crops in vertical stacks indoors" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Agroecology", statement: "Applying ecological principles (diversity, natural processes) to sustainable agriculture." },
            ],
            steps: [
              { reasoning: "Agroecology = ecology applied to farming systems.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Ecological principles in agriculture",
            commonErrors: ["Confusing agroecology with organic farming or vertical farming."],
          },
        },
        {
          id: "geo-u5-fq2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Describe two sustainable agriculture practices.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Sustainable agriculture", statement: "Agroecology, organic farming, conservation agriculture, precision agriculture." },
            ],
            steps: [
              { reasoning: "Agroecology: crop diversification, natural pest control, soil conservation.", marks: 1, markCode: "M" },
              { reasoning: "Conservation agriculture: minimal tillage, cover crops, crop rotation.", marks: 1, markCode: "M" },
              { reasoning: "Precision agriculture: GPS/sensors for targeted input application, reducing waste.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Agroecology, organic, conservation agriculture, precision agriculture.",
            commonErrors: ["Describing conventional intensive practices as sustainable."],
          },
        },
        {
          id: "geo-u5-fq3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Explain the main challenges to food production by 2050.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Future food challenges", statement: "Population growth, climate change, water scarcity, soil degradation and land competition require producing more with less." },
            ],
            steps: [
              { reasoning: "Population ~9.7 billion by 2050 needs ~50-70% more food.", marks: 1, markCode: "M" },
              { reasoning: "Climate change brings droughts, heat stress and shifting growing zones.", marks: 1, markCode: "M" },
              { reasoning: "Water scarcity and soil degradation limit expansion; land competes with biofuels and conservation.", marks: 1, markCode: "R" },
              { reasoning: "Solution requires sustainable intensification, waste reduction, dietary change.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Population growth + climate change + resource limits → need sustainable intensification.",
            commonErrors: ["Focusing only on production — distribution, waste and diet also matter."],
          },
        },
        {
          id: "geo-u5-fq4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examine the potential of a named emerging technology to address future food challenges.",
          parts: [
            { label: "a", prompt: "Identify the named technology.", marks: 2 },
            { label: "b", prompt: "Explain how it could improve food production or security.", marks: 3 },
            { label: "c", prompt: "Evaluate its limitations and feasibility.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Food technology evaluation", statement: "Emerging technologies offer solutions but face cost, energy, scale and equity barriers." },
            ],
            steps: [
              { part: "a", reasoning: "Named technology (vertical farming, lab-grown meat, gene editing, drones).", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Accurate description of how it works.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Benefit 1: efficiency, yield, resource use, or food access.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Benefit 2: second distinct advantage.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Benefits linked to specific food challenges.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Limitation: energy cost, expense, scale, equity, regulation.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Weighs promise vs practical barriers.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned overall judgement on feasibility.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Named technology. (b) Benefits. (c) Limitations evaluated.",
            commonErrors: ["Uncritical enthusiasm — must evaluate limitations."],
          },
        },
        {
          id: "geo-u5-fq5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "By 2050, world population is projected to reach approximately:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "12 billion" },
              { id: "b", text: "7 billion" },
              { id: "c", text: "9.7 billion" },
              { id: "d", text: "8 billion" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "2050 population", statement: "World population projected ~9.7 billion by 2050, needing ~50–70% more food." },
            ],
            steps: [
              { reasoning: "The projection is approximately 9.7 billion.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** ~9.7 billion",
            commonErrors: ["Confusing current population (~8 billion) with the 2050 projection."],
          },
        },
        {
          id: "geo-u5-fq6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Vertical farming is characterised by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Raising livestock indoors" },
              { id: "b", text: "Traditional open-field cultivation" },
              { id: "c", text: "Growing crops in stacked indoor layers under controlled conditions" },
              { id: "d", text: "Planting crops in deserts only" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Vertical farming", statement: "Indoor stacked-layer crop production with artificial light and climate control — land-efficient but energy-intensive." },
            ],
            steps: [
              { reasoning: "Vertical farms stack crops indoors under controlled conditions.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Stacked indoor layers",
            commonErrors: ["Confusing vertical farming with greenhouse or field agriculture."],
          },
        },
        {
          id: "geo-u5-fq7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "The main environmental drawback of vertical farming is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It is extremely energy-intensive for lighting and climate control" },
              { id: "b", text: "It cannot grow any crops" },
              { id: "c", text: "It always uses more water than fields" },
              { id: "d", text: "It requires too much land" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Vertical farm energy", statement: "Artificial lighting and climate control make vertical farming very energy-intensive." },
            ],
            steps: [
              { reasoning: "Energy demand for lights and HVAC is the key drawback.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Energy intensity",
            commonErrors: ["Citing land use when vertical farming's advantage is land efficiency."],
          },
        },
        {
          id: "geo-u5-fq8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "CRISPR gene editing in crops is best described as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A method for precise modification of crop genes" },
              { id: "b", text: "A pesticide application technique" },
              { id: "c", text: "A water irrigation system" },
              { id: "d", text: "A soil testing method" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "CRISPR", statement: "Gene-editing technology enabling precise modification of crop DNA." },
            ],
            steps: [
              { reasoning: "CRISPR edits specific genes with precision.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Precise gene modification",
            commonErrors: ["Confusing gene editing with transgenic insertion or conventional breeding."],
          },
        },
        {
          id: "geo-u5-fq9",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 2,
          stem: "Why might lab-grown meat and plant-based proteins be important for future food security?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They require no energy inputs" },
              { id: "b", text: "They are already cheaper than all conventional meat" },
              { id: "c", text: "They could reduce livestock emissions and land/water demands of meat production" },
              { id: "d", text: "They eliminate all agricultural land use" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Alternative proteins", statement: "Lab-grown and plant-based proteins could cut livestock's land, water and emissions footprint." },
            ],
            steps: [
              { reasoning: "Alternatives target livestock's environmental costs, not zero inputs.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Reduce livestock footprint",
            commonErrors: ["Overstating current readiness — these are emerging technologies."],
          },
        },
        {
          id: "geo-u5-fq10",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "By 2050, food production may need to increase by approximately what percentage?",
          response: { type: "numeric", parts: [{ label: "Required increase (%)", answer: 60, tolerance: 10, unit: "%" }] },
          markscheme: {
            principles: [
              { kind: "context", name: "2050 food demand", statement: "Food production must rise ~50–70% by 2050 for ~9.7 billion people." },
            ],
            steps: [
              { reasoning: "The cited range is ~50–70%.", working: "50\\text{--}70\\%", marks: 1, markCode: "M" },
              { reasoning: "Midpoint $\\approx 60\\%$.", working: "60", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\approx 50$–$70\\%$ (midpoint $60\\%$)",
            commonErrors: ["Quoting population growth (~20%) instead of food demand growth."],
          },
        },
        {
          id: "geo-u5-fq11",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A vertical farm uses 20 kWh/m²/year while field production uses 2 kWh/m²/year for equivalent leafy greens. What is the energy ratio (vertical : field)?",
          response: { type: "numeric", parts: [{ label: "Energy ratio", answer: 10, tolerance: 0 }] },
          markscheme: {
            principles: [
              { kind: "technique", name: "Energy ratio", statement: "Ratio $= \\frac{\\text{vertical energy}}{\\text{field energy}}$." },
            ],
            steps: [
              { reasoning: "Set up the ratio.", working: "20 : 2", marks: 1, markCode: "M" },
              { reasoning: "Simplify: $20 / 2 = 10$.", working: "10", marks: 1, markCode: "M" },
              { reasoning: "Vertical farming uses $10\\times$ the energy per m².", working: "10", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$10 : 1$",
            commonErrors: ["Inverting the ratio."],
          },
        },
        {
          id: "geo-u5-fq12",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Which challenge is most directly linked to climate change for future food production?",
          response: { type: "numeric", parts: [{ label: "Challenge code (1=droughts/heat shifting growing zones, 2=soil salinisation only, 3=excess rainfall everywhere, 4=more arable land)", answer: 1, tolerance: 0 }] },
          markscheme: {
            principles: [
              { kind: "context", name: "Climate and food", statement: "Climate change brings droughts, heat stress and shifting growing zones — reducing yields especially in tropics." },
            ],
            steps: [
              { reasoning: "Climate impacts include drought, heat and shifting zones.", working: "drought/heat", marks: 1, markCode: "M" },
              { reasoning: "Code = 1.", working: "1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Droughts/heat/shifting zones (1)",
            commonErrors: ["Listing generic challenges not tied to climate change."],
          },
        },
        {
          id: "geo-u5-fq13",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "A country needs 60 million tonnes of food by 2050, up from 50 million tonnes today. What is the required percentage increase?",
          response: { type: "numeric", parts: [{ label: "Required increase (%)", answer: 20, tolerance: 0, unit: "%" }] },
          markscheme: {
            principles: [
              { kind: "technique", name: "Growth requirement", statement: "Required increase $= \\frac{\\text{future} - \\text{current}}{\\text{current}} \\times 100$." },
            ],
            steps: [
              { reasoning: "Increase $= 60 - 50 = 10$ million tonnes.", working: "10", marks: 1, markCode: "M" },
              { reasoning: "Percentage $= 10/50 = 0.20$.", working: "\\frac{10}{50} = 0.20", marks: 1, markCode: "M" },
              { reasoning: "Required increase $= 20\\%$.", working: "20\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$20\\%$",
            commonErrors: ["Dividing by the future value instead of the current value."],
          },
        },
        {
          id: "geo-u5-fq14",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "'Sustainable intensification' aims to:",
          response: { type: "numeric", parts: [{ label: "Aim code (1=raise yields while reducing environmental harm, 2=maximise chemical inputs, 3=expand farmland indefinitely, 4=eliminate all technology)", answer: 1, tolerance: 0 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Sustainable intensification", statement: "Increasing yields per hectare while reducing environmental damage — 'more from less'." },
            ],
            steps: [
              { reasoning: "Sustainable intensification targets yield gains with lower environmental cost.", working: "more from less", marks: 1, markCode: "M" },
              { reasoning: "Code = 1.", working: "1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "More yield, less harm (1)",
            commonErrors: ["Confusing it with conventional intensification."],
          },
        },
        {
          id: "geo-u5-fq15",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "If food waste is reduced from 33% to 20% of production in a country producing 120 million tonnes, how many million tonnes of food are saved?",
          response: { type: "numeric", parts: [{ label: "Tonnes saved (million)", answer: 15.6, tolerance: 0.1, unit: "million tonnes" }] },
          markscheme: {
            principles: [
              { kind: "technique", name: "Waste reduction saving", statement: "Saving $= \\text{production} \\times (\\text{old rate} - \\text{new rate})$." },
            ],
            steps: [
              { reasoning: "Rate reduction $= 0.33 - 0.20 = 0.13$.", working: "0.13", marks: 1, markCode: "M" },
              { reasoning: "Saving $= 120 \\times 0.13$.", working: "120 \\times 0.13", marks: 1, markCode: "M" },
              { reasoning: "Saved $= 15.6$ million tonnes.", working: "15.6", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$15.6$ million tonnes",
            commonErrors: ["Calculating new waste rather than the difference saved."],
          },
        },
        {
          id: "geo-u5-fq16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Evaluate a technological solution to future food challenges.",
          parts: [
            { label: "a", prompt: "Identify the technology (vertical farming, GMOs, lab-grown meat or digital agriculture).", marks: 2 },
            { label: "b", prompt: "Explain two potential benefits for food security.", marks: 3 },
            { label: "c", prompt: "Evaluate two limitations and reach a conclusion.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Future food tech", statement: "Emerging technologies promise yield/efficiency gains but face energy, cost, scalability and equity constraints." },
            ],
            steps: [
              { part: "a", reasoning: "Technology identified.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "How it addresses a food challenge stated.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Benefit 1: e.g. land efficiency or reduced emissions.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Benefit 2: e.g. year-round production or input reduction.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Benefits accurately described for the technology.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Limitation 1: energy cost, scalability or equity.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Limitation 2 identified with reasoned judgement.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Balanced conclusion on role in food future.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Technology. (b) Two benefits. (c) Limitations + conclusion.",
            commonErrors: ["Uncritical enthusiasm — must evaluate limitations."],
          },
        },
      ],
    },
  ],
};
