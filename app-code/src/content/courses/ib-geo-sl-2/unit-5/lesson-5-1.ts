import type { Lesson } from "../../../types.ts";

export const lesson51: Lesson = {
  id: "geo-u5-lesson-5-1",
  code: "5-1",
  title: "Food Systems and Production",
  goal: "I CAN describe global food systems, the factors controlling agricultural production and the geography of food production and consumption.",
  standards: ["Paper 1", "Paper 2", "Food and agriculture"],
  vocabulary: [
    { term: "Food system", definition: "The network of production, processing, distribution, consumption and waste disposal of food." },
    { term: "Food chain", definition: "The sequence from farm production through processing, distribution to consumption." },
    { term: "Monoculture", definition: "Growing a single crop over a large area — efficient but ecologically vulnerable." },
    { term: "Green Revolution", definition: "Mid-20th century agricultural intensification using high-yield varieties, fertilisers and irrigation." },
    { term: "Food miles", definition: "The distance food travels from production to consumption — linked to carbon footprint." },
    { term: "Food security", definition: "When all people have physical, social and economic access to sufficient safe, nutritious food." },
  ],
  concepts: [
    {
      id: "geo-u5-food-systems",
      title: "Food systems",
      skill: "Describe the components and flows of global food systems and their environmental impacts.",
      lesson: {
        sections: [
          {
            heading: "Components of food systems",
            body: "Food systems encompass **production** (farming, fishing, aquaculture), **processing**, **distribution** (storage, transport, retail) and **consumption** (households, restaurants). Globalised systems move food across continents — apples from New Zealand to Europe, cocoa from West Africa to global chocolate manufacturers.",
          },
          {
            heading: "Production geography",
            body: "Agriculture dominates land use (~40% of ice-free land). Production concentrates where climate, soils and technology suit: wheat in temperate grain belts, rice in Asian monsoon regions, coffee in tropical highlands. The **Green Revolution** (1960s-70s) introduced high-yield varieties and fertilisers, dramatically raising yields in Asia and Latin America.",
          },
          {
            heading: "Environmental impacts",
            body: "Industrial agriculture drives **deforestation** (soy, palm oil), **water depletion** (irrigation), **soil degradation**, **greenhouse gas emissions** (livestock ~14.5% of global emissions) and **biodiversity loss**. Food waste — ~1/3 of production — wastes embedded resources. Food miles add transport emissions.",
          },
        ],
        keyFormulas: [
          { name: "Food system", statement: "Production → processing → distribution → consumption → waste" },
          { name: "Green Revolution", statement: "HYV seeds + fertilisers + irrigation → yield gains" },
          { name: "Food waste", statement: "~1/3 of produced food is wasted" },
        ],
        workedExample: {
          problem: "Explain how globalisation has changed food systems.",
          solution: "Globalisation created complex international supply chains: food is produced in optimal locations, processed in industrial centres and consumed worldwide. This improves efficiency and variety but increases food miles, concentrates corporate power and makes systems vulnerable to shocks — as seen in COVID-19 supply disruptions.",
        },
      },
      questions: [
        {
          id: "geo-u5-fsq1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The Green Revolution primarily involved:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Small-scale subsistence farming" },
              { id: "b", text: "High-yield varieties, fertilisers and irrigation" },
              { id: "c", text: "Genetic modification of all crops" },
              { id: "d", text: "Organic farming methods" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Green Revolution", statement: "Mid-20th century intensification: HYV seeds, synthetic fertilisers, irrigation, pesticides." },
            ],
            steps: [
              { reasoning: "Green Revolution = HYV seeds + fertilisers + irrigation + pesticides.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** HYV + fertilisers + irrigation",
            commonErrors: ["Confusing Green Revolution with organic farming — it was chemical-intensive."],
          },
        },
        {
          id: "geo-u5-fsq2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Describe two environmental impacts of industrial agriculture.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Agricultural impacts", statement: "Deforestation, water depletion, soil degradation, GHG emissions, biodiversity loss." },
            ],
            steps: [
              { reasoning: "Deforestation for soy/palm oil plantations destroys habitats and releases carbon.", marks: 1, markCode: "M" },
              { reasoning: "Irrigation depletes aquifers; fertiliser/pesticide runoff pollutes waterways.", marks: 1, markCode: "M" },
              { reasoning: "Livestock produces ~14.5% of global GHG emissions; monocultures reduce biodiversity.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Deforestation, water depletion, pollution, GHG emissions, biodiversity loss.",
            commonErrors: ["Listing impacts without specifying mechanism."],
          },
        },
        {
          id: "geo-u5-fsq3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Explain how food systems have become globalised.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Food globalisation", statement: "Transport, refrigeration, trade liberalisation and corporate consolidation link production to consumption globally." },
            ],
            steps: [
              { reasoning: "Refrigeration and container shipping allow perishable food to travel globally.", marks: 1, markCode: "M" },
              { reasoning: "Trade agreements and lowered tariffs enable international food trade.", marks: 1, markCode: "M" },
              { reasoning: "Corporations consolidate supply chains — food produced where cheapest, consumed worldwide.", marks: 1, markCode: "R" },
              { reasoning: "Result: year-round availability but vulnerability to disruption and food miles.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Refrigeration, shipping, trade liberalisation and corporate consolidation globalised food systems.",
            commonErrors: ["Only describing trade without explaining the mechanisms enabling it."],
          },
        },
        {
          id: "geo-u5-fsq4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examine the geography of food production in a named region.",
          parts: [
            { label: "a", prompt: "Identify the named region and its main crops/livestock.", marks: 2 },
            { label: "b", prompt: "Explain the physical and human factors controlling production there.", marks: 3 },
            { label: "c", prompt: "Evaluate the sustainability of production in that region.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Production geography", statement: "Physical factors (climate, soil, water) set potential; human factors (technology, market, policy) determine actual production." },
            ],
            steps: [
              { part: "a", reasoning: "Named region (e.g. US Midwest, North China Plain, Mekong Delta).", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Specific crops/livestock and production scale described.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Physical factor: climate, soil, water availability.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Physical factor 2: topography, growing season, natural fertility.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Human factor: technology, irrigation, market access, subsidies.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Sustainability issue: soil depletion, water use, emissions, biodiversity.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Weighs productivity gains vs environmental costs.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned overall judgement on sustainability.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Named region + products. (b) Physical + human factors. (c) Sustainability evaluated.",
            commonErrors: ["Listing factors without linking them to the specific region."],
          },
        },
        {
          id: "geo-u5-fsq5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Which stage of the food system comes after production?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Processing" },
              { id: "b", text: "Consumption" },
              { id: "c", text: "Waste disposal" },
              { id: "d", text: "Retail only" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Food system", statement: "Production → processing → distribution → consumption → waste." },
            ],
            steps: [
              { reasoning: "Processing follows production in the food system chain.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Processing",
            commonErrors: ["Skipping processing and jumping to distribution."],
          },
        },
        {
          id: "geo-u5-fsq6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The Green Revolution refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "High-yield crop varieties with fertilisers and irrigation raising yields" },
              { id: "b", text: "Organic farming movements of the 1990s" },
              { id: "c", text: "Genetic modification of all crops" },
              { id: "d", text: "Local food movements rejecting trade" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Green Revolution", statement: "1960s–70s HYV seeds + fertilisers + irrigation dramatically raised yields in Asia and Latin America." },
            ],
            steps: [
              { reasoning: "The Green Revolution was a yield-boosting package, not organic or anti-trade.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** HYV + fertilisers + irrigation",
            commonErrors: ["Confusing it with organic or anti-globalisation movements."],
          },
        },
        {
          id: "geo-u5-fsq7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Rice production concentrates in monsoon Asia primarily because of:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Warm wet climate and paddy irrigation suited to the crop" },
              { id: "b", text: "Abundant flat land only" },
              { id: "c", text: "Low labour costs alone" },
              { id: "d", text: "Government subsidies only" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Production geography", statement: "Crops concentrate where climate, soil and water suit them — rice in monsoon Asia, wheat in temperate belts." },
            ],
            steps: [
              { reasoning: "Rice needs warm, wet conditions — the monsoon climate provides them.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Warm wet monsoon climate",
            commonErrors: ["Citing economic factors without the climatic requirement for rice."],
          },
        },
        {
          id: "geo-u5-fsq8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Globalisation has most directly changed food systems by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Forcing all food to be grown locally" },
              { id: "b", text: "Creating complex international supply chains linking producers and consumers worldwide" },
              { id: "c", text: "Eliminating all international trade in food" },
              { id: "d", text: "Removing processing from the food chain" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Food globalisation", statement: "Global supply chains move food across continents, improving efficiency but adding food miles and vulnerability." },
            ],
            steps: [
              { reasoning: "Globalisation created long-distance, multi-stage supply chains.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** International supply chains",
            commonErrors: ["Describing localisation rather than the globalised reality."],
          },
        },
        {
          id: "geo-u5-fsq9",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 2,
          stem: "Why are globalised food systems vulnerable to shocks such as pandemics or wars?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They have no dependence on transport" },
              { id: "b", text: "Concentrated supply chains and few suppliers mean disruption propagates widely" },
              { id: "c", text: "They are too small to be affected by events" },
              { id: "d", text: "They rely entirely on local production" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Supply chain vulnerability", statement: "Concentrated suppliers and long chains mean single-point failures cascade globally (e.g. COVID-19 disruptions)." },
            ],
            steps: [
              { reasoning: "Fewer suppliers and longer chains increase systemic fragility.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Concentration + long chains",
            commonErrors: ["Claiming globalisation makes systems more resilient rather than efficient but fragile."],
          },
        },
        {
          id: "geo-u5-fsq10",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Agriculture uses approximately what share of the world's ice-free land?",
          response: { type: "numeric", parts: [{ label: "Share of ice-free land (%)", answer: 40, tolerance: 5, unit: "%" }] },
          markscheme: {
            principles: [
              { kind: "context", name: "Agricultural land", statement: "Agriculture occupies ~40% of ice-free land." },
            ],
            steps: [
              { reasoning: "Recall the land-use share figure.", working: "40\\%", marks: 1, markCode: "M" },
              { reasoning: "Answer $\\approx 40\\%$.", working: "40", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\approx 40\\%$",
            commonErrors: ["Underestimating agriculture's land footprint."],
          },
        },
        {
          id: "geo-u5-fsq11",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A food supply chain moves 1,000 tonnes of wheat from farm to consumer. If 30% is lost or wasted along the chain, how many tonnes reach the consumer?",
          response: { type: "numeric", parts: [{ label: "Tonnes reaching consumer", answer: 700, tolerance: 0, unit: "tonnes" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Food loss", statement: "Delivered $= \\text{produced} \\times (1 - \\text{loss rate})$." },
            ],
            steps: [
              { reasoning: "Loss rate is 30%, so 70% is delivered.", working: "1 - 0.30 = 0.70", marks: 1, markCode: "M" },
              { reasoning: "Delivered $= 1{,}000 \\times 0.70$.", working: "1{,}000 \\times 0.70", marks: 1, markCode: "M" },
              { reasoning: "Consumer receives $700$ tonnes.", working: "700", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$700$ tonnes",
            commonErrors: ["Reporting the lost amount (300 t) instead of what reaches consumers."],
          },
        },
        {
          id: "geo-u5-fsq12",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Livestock production accounts for approximately what share of global greenhouse gas emissions?",
          response: { type: "numeric", parts: [{ label: "Share of GHG emissions (%)", answer: 14.5, tolerance: 1, unit: "%" }] },
          markscheme: {
            principles: [
              { kind: "context", name: "Livestock emissions", statement: "Livestock contributes ~14.5% of global GHG emissions." },
            ],
            steps: [
              { reasoning: "Recall the livestock emissions share.", working: "14.5\\%", marks: 1, markCode: "M" },
              { reasoning: "Answer $\\approx 14.5\\%$.", working: "14.5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\approx 14.5\\%$",
            commonErrors: ["Confusing livestock's share with total agriculture's footprint."],
          },
        },
        {
          id: "geo-u5-fsq13",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "A country's food exports total $\\$8$ billion and imports total $\\$5$ billion. What is its food trade balance (exports minus imports, in $\\$$ billions)?",
          response: { type: "numeric", parts: [{ label: "Trade balance ($ billion)", answer: 3, tolerance: 0, unit: "$ billion" }] },
          markscheme: {
            principles: [
              { kind: "technique", name: "Trade balance", statement: "Balance $= \\text{exports} - \\text{imports}$; positive = surplus." },
            ],
            steps: [
              { reasoning: "Subtract imports from exports.", working: "8 - 5", marks: 1, markCode: "M" },
              { reasoning: "Balance $= \\$3$ billion surplus.", working: "3", marks: 1, markCode: "M" },
              { reasoning: "The country runs a $\\$3$B food trade surplus.", working: "3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\$3$ billion surplus",
            commonErrors: ["Reversing the subtraction and reporting a deficit."],
          },
        },
        {
          id: "geo-u5-fsq14",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "The term 'food miles' measures:",
          response: { type: "numeric", parts: [{ label: "What food miles measure (1=distance travelled, 2=cost of food, 3=number of calories, 4=packaging size)", answer: 1, tolerance: 0 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Food miles", statement: "Distance food travels from producer to consumer — proxy for transport emissions." },
            ],
            steps: [
              { reasoning: "Food miles quantify transport distance.", working: "distance", marks: 1, markCode: "M" },
              { reasoning: "Measure = distance travelled (1).", working: "1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Distance travelled (1)",
            commonErrors: ["Confusing food miles with food's nutritional or economic value."],
          },
        },
        {
          id: "geo-u5-fsq15",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "If roughly one-third of food is wasted, and a country produces 90 million tonnes of food annually, how many tonnes are wasted per year?",
          response: { type: "numeric", parts: [{ label: "Tonnes wasted per year", answer: 30, tolerance: 1, unit: "million tonnes" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Food waste", statement: "Waste $= \\text{production} \\times \\text{waste share}$; share $\\approx 1/3$." },
            ],
            steps: [
              { reasoning: "Apply the one-third waste share.", working: "90 \\times \\frac{1}{3}", marks: 1, markCode: "M" },
              { reasoning: "Waste $= 30$ million tonnes per year.", working: "30", marks: 1, markCode: "M" },
              { reasoning: "Approximately $30$ million tonnes wasted annually.", working: "30", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\approx 30$ million tonnes per year",
            commonErrors: ["Using 50% instead of the ~33% waste share."],
          },
        },
        {
          id: "geo-u5-fsq16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examine the global food system and its environmental impacts using a named crop or commodity.",
          parts: [
            { label: "a", prompt: "Identify the commodity and trace its path through the food system.", marks: 2 },
            { label: "b", prompt: "Explain two environmental impacts of its production.", marks: 3 },
            { label: "c", prompt: "Evaluate strategies to reduce these impacts.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Food system impacts", statement: "Global food chains generate deforestation, water depletion, emissions and biodiversity loss concentrated in production regions." },
            ],
            steps: [
              { part: "a", reasoning: "Named commodity (e.g. soy, palm oil, beef) identified.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Food system path (production → processing → distribution → consumption) traced.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Impact 1: deforestation or water depletion with mechanism.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Impact 2: emissions or biodiversity loss with mechanism.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Impacts linked to the named commodity's geography.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Strategy 1: certification, sustainable sourcing or dietary shift.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Strategy 2: regulation or technology with limitation noted.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned overall judgement.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Commodity + supply chain. (b) Two impacts. (c) Strategies evaluated.",
            commonErrors: ["Generic impact lists without commodity-specific detail."],
          },
        },
      ],
    },
    {
      id: "geo-u5-food-systems-impact",
      title: "Food systems and their impacts",
      skill: "Analyse the environmental, social and economic impacts of global food systems.",
      lesson: {
        sections: [
          {
            heading: "Environmental impacts",
            body: "Agriculture is the largest driver of **deforestation** (~80% of tropical forest loss), **biodiversity loss**, **water depletion** (70% of freshwater use) and **soil degradation** (~33% of soils degraded). Livestock contributes ~14.5% of global GHG emissions. Pesticide and fertiliser runoff creates dead zones in coastal waters.",
          },
          {
            heading: "Social impacts",
            body: "Food systems shape livelihoods: ~1 billion people depend on agriculture. Globalisation can marginalise small farmers through price competition and corporate control. Food safety scandals, labour exploitation and land grabbing raise ethical concerns. Yet global trade improves food access and reduces famine risk.",
          },
          {
            heading: "Economic dimensions",
            body: "Agriculture contributes ~4% of global GDP but employs ~27% of workers. Subsidies in rich countries distort markets, harming farmers in poor countries. **Food price volatility** (2008, 2022 crises) triggers social unrest. Concentration of market power in few corporations (Cargill, ADM, Bunge) raises concerns about resilience.",
          },
        ],
        keyFormulas: [
          { name: "Agriculture share", statement: "~4% GDP, ~27% employment globally" },
          { name: "Environmental footprint", statement: "~80% deforestation, 70% water use, 33% soil degradation" },
          { name: "Livestock emissions", statement: "~14.5% of global GHG emissions" },
        ],
        workedExample: {
          problem: "Explain the 'double burden' of modern food systems.",
          solution: "Food systems simultaneously produce too much (obesity, food waste, overconsumption in HICs) and too little (hunger, undernutrition in LICs). This 'double burden' reflects inequality in access rather than absolute scarcity — the world produces enough calories for all, but distribution and affordability determine who eats.",
        },
      },
      questions: [
        {
          id: "geo-u5-isq1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Agriculture accounts for approximately what share of global freshwater withdrawals?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "30%" },
              { id: "b", text: "95%" },
              { id: "c", text: "10%" },
              { id: "d", text: "70%" },
            ],
            dorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Agricultural water use", statement: "Agriculture uses ~70% of global freshwater withdrawals, mainly for irrigation." },
            ],
            steps: [
              { reasoning: "Irrigated agriculture dominates freshwater use at ~70%.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** ~70%",
            commonErrors: ["Underestimating agriculture's water footprint."],
          },
        },
        {
          id: "geo-u5-isq2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Describe two social impacts of globalised food systems.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Social impacts", statement: "Small farmer marginalisation, labour exploitation, food safety, improved access vs vulnerability." },
            ],
            steps: [
              { reasoning: "Global competition and corporate control can marginalise small-scale farmers.", marks: 1, markCode: "M" },
              { reasoning: "Labour exploitation and land grabbing raise ethical concerns in supply chains.", marks: 1, markCode: "M" },
              { reasoning: "Counterpoint: global trade improves food access and reduces famine risk.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Small farmer marginalisation, labour issues, food safety — vs improved access.",
            commonErrors: ["Only listing negative impacts — acknowledge both sides."],
          },
        },
        {
          id: "geo-u5-isq3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Explain the 'double burden' of modern food systems.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Double burden", statement: "Food systems produce both overconsumption (obesity, waste) and underconsumption (hunger) — an inequality problem." },
            ],
            steps: [
              { reasoning: "HICs face rising obesity and diet-related disease from overconsumption.", marks: 1, markCode: "M" },
              { reasoning: "LICs face hunger and undernutrition despite global food abundance.", marks: 1, markCode: "M" },
              { reasoning: "The problem is distribution and access, not absolute production.", marks: 1, markCode: "R" },
              { reasoning: "~1/3 of food is wasted while ~800 million people are undernourished.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Simultaneous overconsumption and underconsumption — an access and inequality problem.",
            commonErrors: ["Claiming the world lacks food — it produces enough; distribution fails."],
          },
        },
        {
          id: "geo-u5-isq4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examine the environmental impacts of food production in a named agricultural region.",
          parts: [
            { label: "a", prompt: "Identify the named region and its agriculture.", marks: 2 },
            { label: "b", prompt: "Explain two environmental impacts of production there.", marks: 3 },
            { label: "c", prompt: "Evaluate strategies for more sustainable production.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Sustainable agriculture", statement: "Environmental impacts (deforestation, water use, emissions) can be reduced through efficiency, diversification and organic methods." },
            ],
            steps: [
              { part: "a", reasoning: "Named region (e.g. Amazon soy, California almonds, Mekong rice).", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Specific crop/livestock and scale identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Impact 1: deforestation, water depletion or soil degradation.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Impact 2: pollution, emissions or biodiversity loss.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Impacts linked to the named production system.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Strategy: precision agriculture, agroforestry, organic, reduced tillage.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluation: costs, yield trade-offs, scalability.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned overall judgement.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Named region + agriculture. (b) Two impacts. (c) Sustainable strategies evaluated.",
            commonErrors: ["Generic impacts without linking to the named region."],
          },
        },
        {
          id: "geo-u5-isq5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Approximately what share of tropical forest loss is driven by agriculture?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "About 80%" },
              { id: "b", text: "About 50%" },
              { id: "c", text: "About 20%" },
              { id: "d", text: "About 10%" },
            ],
            aorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Agricultural deforestation", statement: "Agriculture drives ~80% of tropical forest loss (soy, palm oil, cattle)." },
            ],
            steps: [
              { reasoning: "Agriculture is the dominant driver of tropical deforestation.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** ~80%",
            commonErrors: ["Understating agriculture's role in deforestation."],
          },
        },
        {
          id: "geo-u5-isq6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The 'double burden' of food systems refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Simultaneous overconsumption/obesity in some groups and undernutrition in others" },
              { id: "b", text: "Food being both too cheap and too expensive" },
              { id: "c", text: "Both too much and too little farmland globally" },
              { id: "d", text: "Producing too much food in all countries" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Double burden", statement: "Food systems produce both overconsumption (obesity, waste) in some populations and undernutrition in others." },
            ],
            steps: [
              { reasoning: "The double burden is coexisting over- and under-nutrition.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Overconsumption + undernutrition",
            commonErrors: ["Interpreting it as a production quantity problem rather than a distribution one."],
          },
        },
        {
          id: "geo-u5-isq7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Agriculture contributes approximately what share of global GDP but what share of global employment?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "~4% GDP, ~27% employment" },
              { id: "b", text: "~40% GDP, ~40% employment" },
              { id: "c", text: "~27% GDP, ~4% employment" },
              { id: "d", text: "~10% GDP, ~10% employment" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Agriculture's economic weight", statement: "~4% of global GDP but ~27% of employment — a labour-intensive sector." },
            ],
            steps: [
              { reasoning: "Agriculture is a small GDP share but employs over a quarter of workers.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** ~4% GDP, ~27% employment",
            commonErrors: ["Reversing the GDP and employment shares."],
          },
        },
        {
          id: "geo-u5-isq8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A social impact of globalised food systems on small farmers is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Marginalisation through price competition and corporate control of inputs" },
              { id: "b", text: "Guaranteed stable prices for all crops" },
              { id: "c", text: "Complete independence from markets" },
              { id: "d", text: "Freedom from all labour concerns" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Small farmer marginalisation", statement: "Global competition and corporate concentration squeeze smallholders' prices and input access." },
            ],
            steps: [
              { reasoning: "Small farmers face price pressure and corporate input control.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Marginalisation via competition + corporate control",
            commonErrors: ["Ignoring the social costs of globalised supply chains."],
          },
        },
        {
          id: "geo-u5-isq9",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 2,
          stem: "Why do subsidies in rich countries harm farmers in poor countries?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They increase demand for all agricultural products equally" },
              { id: "b", text: "They eliminate food exports entirely" },
              { id: "c", text: "They force poor countries to adopt identical policies" },
              { id: "d", text: "They distort world markets by undercutting prices of unsubsidised producers" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Subsidy distortion", statement: "Rich-country subsidies lower world prices, undercutting unsubsidised farmers in poor countries." },
            ],
            steps: [
              { reasoning: "Subsidised exports compete unfairly against unsubsidised producers.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Market distortion via undercutting",
            commonErrors: ["Treating subsidies as purely domestic policy without trade effects."],
          },
        },
        {
          id: "geo-u5-isq10",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Approximately how many people depend on agriculture for their livelihoods globally?",
          response: { type: "numeric", parts: [{ label: "People depending on agriculture (billions)", answer: 1, tolerance: 0.3, unit: "billion" }] },
          markscheme: {
            principles: [
              { kind: "context", name: "Agricultural livelihoods", statement: "~1 billion people depend on agriculture for livelihoods." },
            ],
            steps: [
              { reasoning: "The cited figure is ~1 billion people.", working: "1 \\text{ billion}", marks: 1, markCode: "M" },
              { reasoning: "Answer $\\approx 1$ billion.", working: "1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\approx 1$ billion people",
            commonErrors: ["Confusing farmers' share of employment with absolute numbers."],
          },
        },
        {
          id: "geo-u5-isq11",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A country uses 900 million m³ of water for agriculture out of 1,200 million m³ total withdrawals. What percentage of water use is agricultural?",
          response: { type: "numeric", parts: [{ label: "Agricultural water share (%)", answer: 75, tolerance: 0, unit: "%" }] },
          markscheme: {
            principles: [
              { kind: "technique", name: "Water share", statement: "Share $= \\frac{\\text{agricultural use}}{\\text{total use}} \\times 100$." },
            ],
            steps: [
              { reasoning: "Set up the ratio.", working: "\\frac{900}{1{,}200}", marks: 1, markCode: "M" },
              { reasoning: "Ratio $= 0.75$.", working: "0.75", marks: 1, markCode: "M" },
              { reasoning: "Share $= 75\\%$.", working: "75\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$75\\%$",
            commonErrors: ["Forgetting to multiply the decimal by 100."],
          },
        },
        {
          id: "geo-u5-isq12",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Approximately what share of soils worldwide are estimated to be degraded?",
          response: { type: "numeric", parts: [{ label: "Share of degraded soils (%)", answer: 33, tolerance: 5, unit: "%" }] },
          markscheme: {
            principles: [
              { kind: "context", name: "Soil degradation", statement: "~33% of soils are degraded by erosion, salinisation and nutrient depletion." },
            ],
            steps: [
              { reasoning: "Recall the soil degradation share.", working: "33\\%", marks: 1, markCode: "M" },
              { reasoning: "Answer $\\approx 33\\%$.", working: "33", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\approx 33\\%$",
            commonErrors: ["Understating the scale of soil degradation."],
          },
        },
        {
          id: "geo-u5-isq13",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "A food price index rises from 100 to 140 over two years. What is the percentage increase?",
          response: { type: "numeric", parts: [{ label: "Price increase (%)", answer: 40, tolerance: 0, unit: "%" }] },
          markscheme: {
            principles: [
              { kind: "technique", name: "Percentage change", statement: "$\\frac{\\text{new} - \\text{old}}{\\text{old}} \\times 100$." },
            ],
            steps: [
              { reasoning: "Change $= 140 - 100 = 40$.", working: "40", marks: 1, markCode: "M" },
              { reasoning: "Percentage $= 40/100 \\times 100 = 40\\%$.", working: "\\frac{40}{100} = 40\\%", marks: 1, markCode: "M" },
              { reasoning: "Food prices rose $40\\%$.", working: "40\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$40\\%$",
            commonErrors: ["Dividing by the new value instead of the original."],
          },
        },
        {
          id: "geo-u5-isq14",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Food price volatility can trigger social unrest because it:",
          response: { type: "numeric", parts: [{ label: "Mechanism code (1=sudden affordability crisis for poor households, 2=guaranteed higher incomes, 3=stable food supply, 4=lower inflation)", answer: 1, tolerance: 0 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Price volatility impact", statement: "Sudden price spikes make food unaffordable for poor households, triggering unrest (2008, 2022 crises)." },
            ],
            steps: [
              { reasoning: "Volatility hits affordability for the poorest most severely.", working: "affordability crisis", marks: 1, markCode: "M" },
              { reasoning: "Code = 1.", working: "1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Affordability crisis for poor households (1)",
            commonErrors: ["Focusing on aggregate statistics rather than household impact."],
          },
        },
        {
          id: "geo-u5-isq15",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "A corporation controls 30% of global grain trading. If global grain trade is 500 million tonnes, how many tonnes does it trade?",
          response: { type: "numeric", parts: [{ label: "Tonnes traded (million)", answer: 150, tolerance: 0, unit: "million tonnes" }] },
          markscheme: {
            principles: [
              { kind: "technique", name: "Market share", statement: "Volume $= \\text{share} \\times \\text{total market}$." },
            ],
            steps: [
              { reasoning: "Apply the 30% share to 500 million tonnes.", working: "0.30 \\times 500", marks: 1, markCode: "M" },
              { reasoning: "Volume $= 150$ million tonnes.", working: "150", marks: 1, markCode: "M" },
              { reasoning: "The corporation trades $150$ million tonnes.", working: "150", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$150$ million tonnes",
            commonErrors: ["Expressing the answer as a percentage rather than tonnage."],
          },
        },
        {
          id: "geo-u5-isq16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examine the environmental and social impacts of food systems in a named region.",
          parts: [
            { label: "a", prompt: "Identify the region and a dominant food system there.", marks: 2 },
            { label: "b", prompt: "Explain two environmental impacts of the system.", marks: 3 },
            { label: "c", prompt: "Explain one social impact and evaluate overall sustainability.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Food system impacts", statement: "Food systems generate coupled environmental (deforestation, water, emissions) and social (livelihoods, equity) impacts." },
            ],
            steps: [
              { part: "a", reasoning: "Named region (e.g. Amazon soy, Mekong rice) identified.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Dominant food system described.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Environmental impact 1 with mechanism (e.g. deforestation).", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Environmental impact 2 with mechanism (e.g. water depletion).", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Impacts linked to the named system.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Social impact explained (livelihoods, land access, labour).", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Reasoned judgement on overall sustainability.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Balanced conclusion weighing benefits and costs.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Region + system. (b) Two environmental impacts. (c) Social impact + judgement.",
            commonErrors: ["Listing impacts without linking mechanisms to the named region."],
          },
        },
      ],
    },
  ],
};
