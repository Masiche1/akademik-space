import type { Lesson } from "../../../types.ts";

export const lesson63: Lesson = {
  id: "ciealegeo-u6-lesson-6-3",
  code: "6-3",
  title: "Food Security, Agriculture and Resource Issues",
  goal: "I CAN analyse food security dimensions, agricultural challenges and resource management debates.",
  standards: [
    "Cambridge A Level Geography 9696",
    "Unit 6: human geography in depth",
  ],
  vocabulary: [
    {
      term: "Food security",
      definition: "Reliable access to sufficient, safe, nutritious food.",
    },
    {
      term: "Food sovereignty",
      definition: "Right to define own food systems.",
    },
    {
      term: "Green Revolution",
      definition: "High-yield crop varieties + inputs boost.",
    },
    { term: "Peak oil", definition: "Point where oil production declines." },
    {
      term: "Resource depletion",
      definition: "Exhaustion of non-renewable resources.",
    },
    {
      term: "Carrying capacity",
      definition: "Max population environment can sustain.",
    },
  ],
  concepts: [
    {
      id: "ciealegeo-u6l3-c1-food",
      title: "Food security and agriculture",
      skill:
        "Analyse food security dimensions and agricultural sustainability challenges.",
      lesson: {
        sections: [
          {
            heading: "Food security dimensions",
            body: "FAO definition: availability, access, utilisation, stability. **Availability**: production + imports. **Access**: affordability + physical access. **Utilisation**: nutrition, health, water. **Stability**: consistency over time. Food insecurity = any dimension fails.",
          },
          {
            heading: "Agricultural challenges",
            body: "**Green Revolution**: HYV seeds + fertiliser + irrigation → yields doubled but soil degradation, water depletion, inequality. **Industrial agriculture**: monoculture, pesticides, GMOs — efficiency vs sustainability. **Smallholder farming**: 80% of farms in developing countries but face land, credit, market barriers.",
          },
        ],
        keyFormulas: [
          {
            name: "Food security",
            statement: "Availability + access + utilisation + stability",
          },
          { name: "Green Revolution", statement: "HYV + inputs → yields↑" },
          { name: "Smallholders", statement: "80% of farms" },
        ],
        workedExample: {
          problem: "Why might a country have food surplus yet food insecurity?",
          solution:
            "Availability ≠ access — food produced for export or concentrated in areas; poor can't afford or reach it → access/utilisation dimensions fail despite surplus.",
        },
      },
      questions: [
        {
          id: "ciealegeo-q-u6l3c1-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Food security has four dimensions:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Production, price, trade, aid" },
              { id: "b", text: "Supply, demand, cost, profit" },
              { id: "c", text: "Land, labour, capital, technology" },
              { id: "d", text: "Availability, access, utilisation, stability" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Food security",
                statement: "Four dimensions.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Four dimensions",
            commonErrors: ["Wrong list."],
          },
        },
        {
          id: "ciealegeo-q-u6l3c1-2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is 'food sovereignty'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Food sovereignty",
                statement: "Self-determination.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              {
                reasoning: "Difference from security.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Right of peoples to define own food systems — production, distribution, consumption — vs food security which is just access to food regardless of system.",
            commonErrors: ["Same as security."],
          },
        },
        {
          id: "ciealegeo-q-u6l3c1-3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the 'Green Revolution' and its limitations.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Green Revolution",
                statement: "HYV + inputs.",
              },
            ],
            steps: [
              { reasoning: "Mechanism.", marks: 1, markCode: "M" },
              { reasoning: "Success.", marks: 1, markCode: "M" },
              { reasoning: "Limitations.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "HYV seeds + fertiliser + irrigation doubled yields in Asia — but required capital/inputs smallholders lacked, caused soil degradation, water depletion, increased inequality.",
            commonErrors: ["Only benefits."],
          },
        },
        {
          id: "ciealegeo-q-u6l3c1-4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Analyse why smallholder farmers are crucial for food security.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Smallholders",
                statement: "80% of farms.",
              },
            ],
            steps: [
              { reasoning: "Scale.", marks: 1, markCode: "M" },
              { reasoning: "Barriers.", marks: 1, markCode: "M" },
              { reasoning: "Potential.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Smallholders produce most food in developing countries, use fewer inputs, preserve biodiversity — but face land tenure, credit, market access barriers that limit productivity.",
            commonErrors: ["Industrial only."],
          },
        },
        {
          id: "ciealegeo-q-u6l3c1-5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate GM crops as a solution to food insecurity.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "GMOs",
                statement: "Yield vs concerns.",
              },
            ],
            steps: [
              { reasoning: "Benefits.", marks: 1, markCode: "M" },
              { reasoning: "Concerns.", marks: 1, markCode: "M" },
              { reasoning: "Evidence.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "GMOs can boost yields, reduce pesticide use, improve nutrition — but raise biodiversity, corporate control, health concerns; evidence mixed, context-dependent.",
            commonErrors: ["Always good/bad."],
          },
        },
        {
          id: "ciealegeo-q-u6l3c1-6",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'utilisation' in food security?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Utilisation",
                statement: "Nutrition + health.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Factors.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "How food is converted to nutrition — depends on diet quality, health status, water, sanitation, childcare — food present but not utilised = insecurity.",
            commonErrors: ["Availability only."],
          },
        },
        {
          id: "ciealegeo-q-u6l3c1-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The Green Revolution mainly involved:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Land reform" },
              { id: "b", text: "High-yield varieties and inputs" },
              { id: "c", text: "Trade liberalisation" },
              { id: "d", text: "Organic farming" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "fact", name: "Green Rev", statement: "HYV + inputs." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** HYV",
            commonErrors: ["Wrong."],
          },
        },
        {
          id: "ciealegeo-q-u6l3c1-8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two ways climate change threatens food security.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Climate & food",
                statement: "Yield + stability.",
              },
            ],
            steps: [
              { reasoning: "Two valid.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 2, markCode: "A" },
            ],
            finalAnswer:
              "e.g. changing rainfall patterns reduce yields; extreme events (drought, flood) destroy harvests — undermines stability dimension.",
            commonErrors: ["Only one."],
          },
        },
        {
          id: "ciealegeo-q-u6l3c1-9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why does 'access' matter more than 'availability' for food security?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Access vs availability",
                statement: "Can you get it?",
              },
            ],
            steps: [
              { reasoning: "Distinction.", marks: 1, markCode: "M" },
              { reasoning: "Example.", marks: 1, markCode: "M" },
              { reasoning: "Implication.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Food may exist nationally but be unaffordable/unreachable for poor — access (income, distribution, infrastructure) determines actual food security.",
            commonErrors: ["Same thing."],
          },
        },
        {
          id: "ciealegeo-q-u6l3c1-10",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate industrial agriculture vs smallholder farming for sustainable food security.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Agriculture models",
                statement: "Efficiency vs sustainability.",
              },
            ],
            steps: [
              { reasoning: "Industrial pros/cons.", marks: 1, markCode: "M" },
              { reasoning: "Smallholder pros/cons.", marks: 1, markCode: "M" },
              { reasoning: "Hybrid approaches.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Industrial: high yields, low labour — but environmental damage, inequality. Smallholder: sustainable, equitable — but lower yields, less market access. Hybrid/inclusive models best.",
            commonErrors: ["One model."],
          },
        },
        {
          id: "ciealegeo-q-u6l3c1-11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Availability' in food security refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Amount of food produced and imported nationally" },
              { id: "b", text: "Consistency of supply over time" },
              { id: "c", text: "Ability of households to afford food" },
              { id: "d", text: "Nutrition quality of diets" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Availability",
                statement: "National supply.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** National supply",
            commonErrors: ["Access confused."],
          },
        },
        {
          id: "ciealegeo-q-u6l3c1-12",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'food aid' and what are its limitations?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Food aid",
                statement: "Emergency food transfers.",
              },
            ],
            steps: [
              { reasoning: "Definition.", marks: 1, markCode: "M" },
              { reasoning: "Limitations.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Food transferred for emergencies — saves lives short-term but can undermine local farmers (price depression), create dependency, and fails to address structural causes of insecurity.",
            commonErrors: ["Permanent solution."],
          },
        },
        {
          id: "ciealegeo-q-u6l3c1-13",
          difficulty: "core",
          totalMarks: 3,
          stem: "Distinguish 'chronic' from 'acute' food insecurity.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Food insecurity types",
                statement: "Long-term vs emergency.",
              },
            ],
            steps: [
              { reasoning: "Chronic defined.", marks: 1, markCode: "M" },
              { reasoning: "Acute defined.", marks: 1, markCode: "M" },
              { reasoning: "Response contrast.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Chronic: persistent inability to meet food needs (poverty, structural) — needs development. Acute: sudden crisis (drought, conflict, price spike) — needs emergency response; often overlap.",
            commonErrors: ["Same thing."],
          },
        },
        {
          id: "ciealegeo-q-u6l3c1-14",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain how insecure land tenure limits smallholder productivity.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Tenure & productivity",
                statement: "Security enables investment.",
              },
            ],
            steps: [
              { reasoning: "Mechanism.", marks: 1, markCode: "M" },
              { reasoning: "Investment barrier.", marks: 1, markCode: "M" },
              { reasoning: "Collateral issue.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Without secure tenure farmers won't invest in improvements (fear of eviction); can't use land as loan collateral for credit; limits access to extension services — tenure reform unlocks productivity.",
            commonErrors: ["No effect."],
          },
        },
        {
          id: "ciealegeo-q-u6l3c1-15",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate the 'food sovereignty' movement as an alternative to global food systems.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Food sovereignty",
                statement: "Local control vs trade.",
              },
            ],
            steps: [
              { reasoning: "Arguments for.", marks: 1, markCode: "M" },
              { reasoning: "Arguments against/limits.", marks: 1, markCode: "M" },
              { reasoning: "Examples.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Prioritises local control, agroecology, farmer rights — protects against corporate dependence and food price shocks; but may reduce efficiency/market access and face political resistance — hybrid models emerging.",
            commonErrors: ["One approach only."],
          },
        },
        {
          id: "ciealegeo-q-u6l3c1-16",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why does food price volatility threaten food security?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Price volatility",
                statement: "Access dimension.",
              },
            ],
            steps: [
              { reasoning: "Mechanism.", marks: 1, markCode: "M" },
              { reasoning: "Vulnerable groups.", marks: 1, markCode: "M" },
              { reasoning: "Stability link.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Price spikes make food unaffordable for poor households even when supply exists — attacks the access and stability dimensions; poor spend higher income share on food → most vulnerable to shocks.",
            commonErrors: ["Availability only."],
          },
        },
      ],
    },
    {
      id: "ciealegeo-u6l3-c2-resources",
      title: "Resource management and sustainability",
      skill:
        "Analyse resource depletion, peak oil and sustainable resource management.",
      lesson: {
        sections: [
          {
            heading: "Resource depletion",
            body: "**Non-renewable**: fossil fuels, minerals — finite, depleting. **Peak oil**: point when production peaks then declines — 'easy' oil gone, extraction harder/costlier. **Renewable**: solar, wind, water, biomass — sustainable if managed. **Carrying capacity**: max population environment supports — exceeded → degradation.",
          },
          {
            heading: "Sustainable management",
            body: "**Efficiency**: do more with less. **Substitution**: renewables for fossil. **Conservation**: reduce demand. **Circular economy**: reuse/recycle. **Resource curse**: resource-rich countries often underdevelop (Dutch disease, conflict, corruption). **Sustainable development**: meet present needs without compromising future.",
          },
        ],
        keyFormulas: [
          { name: "Peak oil", statement: "Production maximum" },
          {
            name: "Carrying capacity",
            statement: "Max sustainable population",
          },
          { name: "Resource curse", statement: "Wealth → underdevelopment" },
        ],
        workedExample: {
          problem: "Why might a country with abundant oil remain poor?",
          solution:
            "Resource curse: oil wealth crowds out other sectors (Dutch disease), fuels corruption/conflict, volatile prices → poor governance, inequality, underdeveloped institutions.",
        },
      },
      questions: [
        {
          id: "ciealegeo-q-u6l3c2-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Peak oil' refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Oil price peak" },
              { id: "b", text: "Oil running out completely" },
              { id: "c", text: "First oil discovery" },
              { id: "d", text: "Maximum oil production point" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Peak oil",
                statement: "Production max.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Production peak",
            commonErrors: ["Complete exhaustion."],
          },
        },
        {
          id: "ciealegeo-q-u6l3c2-2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Distinguish renewable from non-renewable resources.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Resource types",
                statement: "Finite vs replenishing.",
              },
            ],
            steps: [
              { reasoning: "Non-renewable defined.", marks: 1, markCode: "M" },
              { reasoning: "Renewable defined.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Non-renewable: finite, deplete (fossil fuels, minerals). Renewable: naturally replenished (solar, wind, water, biomass) — sustainable if managed.",
            commonErrors: ["Conflating."],
          },
        },
        {
          id: "ciealegeo-q-u6l3c2-3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the 'resource curse'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Resource curse",
                statement: "Wealth → problems.",
              },
            ],
            steps: [
              { reasoning: "Mechanism.", marks: 1, markCode: "M" },
              { reasoning: "Dutch disease.", marks: 1, markCode: "M" },
              { reasoning: "Other causes.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Resource-rich countries often underperform — resource exports crowd out other sectors, volatile prices destabilise, wealth fuels corruption/conflict — paradoxically poor despite resources.",
            commonErrors: ["Wealth helps."],
          },
        },
        {
          id: "ciealegeo-q-u6l3c2-4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Analyse 'carrying capacity' and its relevance to sustainability.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Carrying capacity",
                statement: "Max sustainable.",
              },
            ],
            steps: [
              { reasoning: "Definition.", marks: 1, markCode: "M" },
              { reasoning: "Dynamic nature.", marks: 1, markCode: "M" },
              { reasoning: "Exceeded.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Max population environment can sustain given resources/technology — not fixed (technology raises it); exceeding → resource depletion, pollution, degradation — core sustainability concept.",
            commonErrors: ["Fixed number."],
          },
        },
        {
          id: "ciealegeo-q-u6l3c2-5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate the 'circular economy' as a resource management strategy.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Circular economy",
                statement: "Reuse/recycle.",
              },
            ],
            steps: [
              { reasoning: "Concept.", marks: 1, markCode: "M" },
              { reasoning: "Benefits.", marks: 1, markCode: "M" },
              { reasoning: "Challenges.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Design out waste, keep materials in use — reduces extraction, emissions, waste; but requires systemic change, infrastructure, behavioural shifts — promising but hard to implement at scale.",
            commonErrors: ["Impossible."],
          },
        },
        {
          id: "ciealegeo-q-u6l3c2-6",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'Dutch disease'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Dutch disease",
                statement: "Resource crowding out.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Mechanism.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Resource export boom → currency appreciates → other exports uncompetitive → manufacturing declines — named after Netherlands' gas discovery effect.",
            commonErrors: ["Disease literal."],
          },
        },
        {
          id: "ciealegeo-q-u6l3c2-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Sustainable development is defined as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Maximising current consumption" },
              {
                id: "b",
                text: "Meeting present needs without compromising future",
              },
              { id: "c", text: "Stopping all development" },
              { id: "d", text: "Only economic growth" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Sustainability",
                statement: "Brundtland.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Brundtland definition",
            commonErrors: ["Wrong."],
          },
        },
        {
          id: "ciealegeo-q-u6l3c2-8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two strategies for managing non-renewable resources sustainably.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Resource strategies",
                statement: "Efficiency, substitution.",
              },
            ],
            steps: [
              { reasoning: "Two valid.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 2, markCode: "A" },
            ],
            finalAnswer:
              "e.g. improve efficiency (less per unit output) and develop substitutes (renewables for fossil fuels) — also conservation, recycling.",
            commonErrors: ["Only one."],
          },
        },
        {
          id: "ciealegeo-q-u6l3c2-9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why might 'peak oil' be less threatening than feared?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Peak oil debate",
                statement: "Substitution.",
              },
            ],
            steps: [
              { reasoning: "Arguments.", marks: 1, markCode: "M" },
              { reasoning: "Technological change.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Efficiency gains, renewable substitution, demand reduction, new extraction tech (fracking) may offset depletion — transition challenge rather than absolute shortage.",
            commonErrors: ["Certain crisis."],
          },
        },
        {
          id: "ciealegeo-q-u6l3c2-10",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate 'sustainable development' as a concept.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Sustainability",
                statement: "Concept vs practice.",
              },
            ],
            steps: [
              { reasoning: "Strengths.", marks: 1, markCode: "M" },
              { reasoning: "Criticisms.", marks: 1, markCode: "M" },
              { reasoning: "Implementation.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Useful guiding principle balancing economy/environment/social — but vague, contested (what's 'sustainable'?), hard to measure; needs operationalisation via indicators (SDGs).",
            commonErrors: ["Perfect concept."],
          },
        },
        {
          id: "ciealegeo-q-u6l3c2-11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of the following is a renewable resource?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Crude oil" },
              { id: "b", text: "Iron ore" },
              { id: "c", text: "Wind energy" },
              { id: "d", text: "Coal" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "fact", name: "Renewables", statement: "Replenished." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Wind energy",
            commonErrors: ["Fossil fuel chosen."],
          },
        },
        {
          id: "ciealegeo-q-u6l3c2-12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how 'efficiency' contributes to sustainable resource management.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Efficiency",
                statement: "More from less.",
              },
            ],
            steps: [
              { reasoning: "Definition/application.", marks: 1, markCode: "M" },
              { reasoning: "Resource saving.", marks: 1, markCode: "M" },
              { reasoning: "Limit.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Doing more with less resource input — e.g. fuel-efficient engines, less material per product — reduces extraction and emissions; but efficiency gains can be offset by rising demand (rebound effect).",
            commonErrors: ["Only conservation."],
          },
        },
        {
          id: "ciealegeo-q-u6l3c2-13",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Distinguish 'renewable' from 'sustainable'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Renewable vs sustainable",
                statement: "Source vs practice.",
              },
            ],
            steps: [
              { reasoning: "Renewable defined.", marks: 1, markCode: "M" },
              { reasoning: "Sustainable defined.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Renewable: resource naturally replenished (solar, wind). Sustainable: use that meets present needs without compromising future — a renewable resource can still be used unsustainably.",
            commonErrors: ["Same meaning."],
          },
        },
        {
          id: "ciealegeo-q-u6l3c2-14",
          difficulty: "core",
          totalMarks: 1,
          stem: "The 'circular economy' aims to:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Keep materials in use through reuse and recycling",
              },
              { id: "b", text: "Only recycle plastics" },
              { id: "c", text: "Stop all production" },
              { id: "d", text: "Maximise resource extraction" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Circular economy",
                statement: "Reuse/recycle.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Keep materials in use",
            commonErrors: ["Linear economy confused."],
          },
        },
        {
          id: "ciealegeo-q-u6l3c2-15",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate the view that resource depletion is the greatest threat to future development.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Resource depletion",
                statement: "Threat vs other risks.",
              },
            ],
            steps: [
              {
                reasoning: "Case for depletion threat.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Other threats.", marks: 1, markCode: "M" },
              { reasoning: "Evidence.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Depletion of fossil fuels/minerals could constrain growth and trigger conflict, but substitution, efficiency and renewables may mitigate; climate change, inequality and governance may be equally or more pressing — depends on context and timeframe.",
            commonErrors: ["One-sided claim."],
          },
        },
        {
          id: "ciealegeo-q-u6l3c2-16",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Carrying capacity' refers to:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Maximum population an environment can sustain",
              },
              { id: "b", text: "Population growth rate" },
              { id: "c", text: "Rate of resource depletion" },
              { id: "d", text: "Total resource stock" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Carrying capacity",
                statement: "Max sustainable.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Maximum sustainable population",
            commonErrors: ["Fixed resource stock confused."],
          },
        },
      ],
    },
  ],
};
