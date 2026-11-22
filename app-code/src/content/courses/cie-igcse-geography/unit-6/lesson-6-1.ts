import type { Lesson } from "../../../types.ts";

export const lesson61: Lesson = {
  id: "cieigeo-u6-lesson-6-1",
  code: "6-1",
  title: "Agriculture, Food Security and Sustainability",
  goal: "I CAN analyse agricultural systems, food security issues and sustainability challenges.",
  standards: [
    "Cambridge IGCSE Geography 0460",
    "Unit 6: human geography depth",
  ],
  vocabulary: [
    {
      term: "Subsistence farming",
      definition: "Farming for family's own food.",
    },
    { term: "Commercial farming", definition: "Farming for sale/profit." },
    {
      term: "Food security",
      definition: "Reliable access to sufficient nutritious food.",
    },
    {
      term: "Green revolution",
      definition: "High-yield crop varieties + fertilisers.",
    },
    { term: "Monoculture", definition: "Growing single crop repeatedly." },
    {
      term: "Sustainable agriculture",
      definition: "Farming meeting needs without harming future.",
    },
  ],
  concepts: [
    {
      id: "cieigeo-u6l1-c1-systems",
      title: "Agricultural systems and food security",
      skill:
        "Compare subsistence and commercial farming and analyse food security.",
      lesson: {
        sections: [
          {
            heading: "Subsistence vs commercial",
            body: "**Subsistence**: small plots, family labour, low inputs, diverse crops for own consumption — found in LICs, risky (crop failure = starvation). **Commercial**: large-scale, mechanised, chemicals, single crop for market — found in HICs, higher yields but environmental costs (soil erosion, pollution, monoculture risks).",
          },
          {
            heading: "Food security challenges",
            body: "Causes: poverty (can't afford food), conflict (disrupts supply), climate change (crop failures), population growth, waste (~1/3 food wasted), land degradation. **Green Revolution** increased yields via HYV seeds/fertilisers — but dependency on inputs, soil depletion, only works where infrastructure exists.",
          },
        ],
        keyFormulas: [
          { name: "Subsistence", statement: "Own food" },
          { name: "Commercial", statement: "For profit" },
          { name: "Food security", statement: "Reliable access" },
        ],
        workedExample: {
          problem: "Why does commercial farming use monoculture despite risks?",
          solution:
            "Efficiency — single crop allows mechanisation, standardisation, economies of scale; but vulnerable to pests/disease (Irish potato famine), soil depletion — needs crop rotation/fallow to sustain.",
        },
      },
      questions: [
        {
          id: "cieigeo-q-u6l1c1-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Subsistence farming is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Large-scale commercial" },
              { id: "b", text: "Export farming" },
              { id: "c", text: "Farming for family's own food" },
              { id: "d", text: "Industrial agriculture" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "fact", name: "Subsistence", statement: "Own food." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** Own food",
            commonErrors: ["Commercial."],
          },
        },
        {
          id: "cieigeo-q-u6l1c1-2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is 'food security'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Food security",
                statement: "Reliable access.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Components.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Reliable access to sufficient, safe, nutritious food — availability, access (affordability), utilisation (nutrition); food secure when all three met consistently.",
            commonErrors: ["Just food grown."],
          },
        },
        {
          id: "cieigeo-q-u6l1c1-3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two differences between subsistence and commercial farming.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Sub vs comm",
                statement: "Scale+purpose.",
              },
            ],
            steps: [
              { reasoning: "Two valid.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 2, markCode: "A" },
            ],
            finalAnswer:
              "e.g. scale (small family plots vs large mechanised) and purpose (own consumption vs profit) — also inputs (low vs high), location (LICs vs HICs), risk profile.",
            commonErrors: ["Same."],
          },
        },
        {
          id: "cieigeo-q-u6l1c1-4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain the 'Green Revolution' and its limitations.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Green Rev",
                statement: "HYV+inputs.",
              },
            ],
            steps: [
              { reasoning: "What it was.", marks: 1, markCode: "M" },
              { reasoning: "Benefits.", marks: 1, markCode: "M" },
              { reasoning: "Limitations.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "HYV seeds + fertilisers + irrigation massively increased yields — but requires inputs/irrigation infrastructure, caused soil depletion, only benefited farmers who could afford inputs; didn't reach poorest farmers.",
            commonErrors: ["Universal success."],
          },
        },
        {
          id: "cieigeo-q-u6l1c1-5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate whether organic farming can feed the world sustainably.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Organic eval",
                statement: "Sustainability vs yield.",
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
              "No chemicals = healthier soil, biodiversity — but lower yields, labour intensive, can't meet current demand without major land expansion; best as part of mixed system with sustainable practices, not complete replacement.",
            commonErrors: ["Can/can't feed all."],
          },
        },
        {
          id: "cieigeo-q-u6l1c1-6",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'monoculture'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Monoculture",
                statement: "Single crop.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Risk.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Growing single crop repeatedly on same land — efficient but vulnerable: pests/disease wipe out entire harvest (Irish potato famine), soil depletion; mitigated by crop rotation/fallow.",
            commonErrors: ["Multiple crops."],
          },
        },
        {
          id: "cieigeo-q-u6l1c1-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which farming type is more common in LICs?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Industrial" },
              { id: "b", text: "Subsistence" },
              { id: "c", text: "Hydroponic" },
              { id: "d", text: "Commercial" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "fact", name: "LICs", statement: "Subsistence." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Subsistence",
            commonErrors: ["Commercial."],
          },
        },
        {
          id: "cieigeo-q-u6l1c1-8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two environmental problems of commercial farming.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "fact", name: "Env problems", statement: "Soil+water." },
            ],
            steps: [
              { reasoning: "Two valid.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 2, markCode: "A" },
            ],
            finalAnswer:
              "e.g. soil erosion/degradation (intensive cultivation strips soil) and water pollution (fertiliser/pesticide runoff) — also biodiversity loss, greenhouse gas emissions, water overuse.",
            commonErrors: ["No problems."],
          },
        },
        {
          id: "cieigeo-q-u6l1c1-9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how climate change threatens food security.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Climate-food", statement: "Risk." },
            ],
            steps: [
              { reasoning: "Mechanism.", marks: 1, markCode: "M" },
              { reasoning: "Example.", marks: 1, markCode: "M" },
              { reasoning: "Impact.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Droughts/floods damage crops, changing rainfall patterns affect growing seasons, extreme weather destroys harvests — yields fall, food prices rise, hunger increases especially in poor countries.",
            commonErrors: ["No threat."],
          },
        },
        {
          id: "cieigeo-q-u6l1c1-10",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate sustainable agriculture as a solution to food insecurity.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Sustainability",
                statement: "Long-term.",
              },
            ],
            steps: [
              { reasoning: "Benefits.", marks: 1, markCode: "M" },
              { reasoning: "Challenges.", marks: 1, markCode: "M" },
              { reasoning: "Evidence.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Protects soil/water, biodiversity, long-term productivity — but transition costs, lower short-term yields, needs knowledge/infrastructure; essential for long-term food security but must be paired with immediate poverty/food aid.",
            commonErrors: ["Immediate fix."],
          },
        },
        {
          id: "cieigeo-q-u6l1c1-11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is a major cause of food insecurity?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Stable climates" },
              { id: "b", text: "High food production" },
              { id: "c", text: "Poverty preventing people affording food" },
              { id: "d", text: "Good transport networks" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Food insecurity causes",
                statement: "Poverty limits access.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** Poverty",
            commonErrors: ["Production only."],
          },
        },
        {
          id: "cieigeo-q-u6l1c1-12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two ways food waste contributes to food insecurity.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Food waste",
                statement: "Lost supply.",
              },
            ],
            steps: [
              { reasoning: "Two valid.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 2, markCode: "A" },
            ],
            finalAnswer:
              "e.g. ~1/3 of food produced is wasted — enough to feed the hungry; resources (land, water, energy) used to grow wasted food are lost — reducing waste increases effective food supply.",
            commonErrors: ["Waste irrelevant."],
          },
        },
        {
          id: "cieigeo-q-u6l1c1-13",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how land degradation reduces food security.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Land degradation",
                statement: "Lower yields.",
              },
            ],
            steps: [
              { reasoning: "Mechanism.", marks: 1, markCode: "M" },
              { reasoning: "Impact.", marks: 1, markCode: "M" },
              { reasoning: "Example.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Soil erosion/depletion and desertification lower crop yields and reduce arable land → less food produced → higher prices and hunger; sustainable soil management needed to maintain long-term food security.",
            commonErrors: ["No effect."],
          },
        },
        {
          id: "cieigeo-q-u6l1c1-14",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate whether commercial farming is more sustainable than subsistence farming.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "Commercial vs subsistence",
                statement: "Sustainability trade-offs.",
              },
            ],
            steps: [
              { reasoning: "Commercial view.", marks: 1, markCode: "M" },
              { reasoning: "Subsistence view.", marks: 1, markCode: "M" },
              { reasoning: "Evidence.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Commercial: efficient yields but monoculture, chemicals, soil erosion — high environmental cost. Subsistence: diverse crops, low inputs, often more sustainable per hectare — but low yields, risky, can't feed growing populations alone; sustainability depends on practices not type alone.",
            commonErrors: ["One always better."],
          },
        },
        {
          id: "cieigeo-q-u6l1c1-15",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is a characteristic of subsistence farming?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Single crop grown for export" },
              {
                id: "b",
                text: "Small plots farmed for own consumption",
              },
              { id: "c", text: "Dependence on chemical inputs" },
              { id: "d", text: "Heavy mechanisation" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Subsistence",
                statement: "Small-scale, own food.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Small plots, own food",
            commonErrors: ["Commercial traits."],
          },
        },
        {
          id: "cieigeo-q-u6l1c1-16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Analyse why the Green Revolution had limited success in some regions.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Green Rev limits",
                statement: "Infrastructure + equity.",
              },
            ],
            steps: [
              { reasoning: "Requirements.", marks: 1, markCode: "M" },
              { reasoning: "Infrastructure gap.", marks: 1, markCode: "M" },
              { reasoning: "Equity issue.", marks: 1, markCode: "A" },
              { reasoning: "Evidence.", marks: 1, markCode: "A" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "HYVs need irrigation, fertilisers, credit and extension services — absent in poorest areas; benefits went to wealthier farmers who could afford inputs; soil depletion over time; succeeded where infrastructure existed (India, China) but bypassed sub-Saharan Africa.",
            commonErrors: ["Universal success."],
          },
        },
      ],
    },
    {
      id: "cieigeo-u6l1-c2-development",
      title: "Agricultural development and global trade",
      skill: "Analyse agricultural trade patterns and development impacts.",
      lesson: {
        sections: [
          {
            heading: "Agricultural trade",
            body: "LICs export raw agricultural products (coffee, cocoa, cotton) — low value-added, price volatile, terms of trade often unfavourable. HICs export processed foods, meat, dairy — higher value. **Fair trade** attempts to guarantee minimum prices for LIC farmers — helps but limited scale. Agricultural subsidies in HICs (EU, US) distort world markets, hurt LIC competitiveness.",
          },
          {
            heading: "Agricultural development strategies",
            body: "**Land reform**: redistribute land to small farmers — increases productivity, equity but politically difficult. **Rural development**: roads, markets, credit access — enables farmers to sell surplus. **Agroforestry**: trees + crops — sustainable, diverse income. **Value addition**: processing locally increases income (e.g. cocoa→chocolate) — but needs capital/skills.",
          },
        ],
        keyFormulas: [
          { name: "Terms of trade", statement: "Export vs import prices" },
          { name: "Fair trade", statement: "Minimum price" },
          { name: "Value addition", statement: "Processing" },
        ],
        workedExample: {
          problem: "Why do LICs struggle despite exporting agricultural goods?",
          solution:
            "Export raw materials (low value) while importing processed goods (high value) — unfavourable terms of trade; HIC subsidies make LIC products uncompetitive; need value addition and fair trade.",
        },
      },
      questions: [
        {
          id: "cieigeo-q-u6l1c2-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "LICs typically export:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Raw agricultural products" },
              { id: "b", text: "Electronics" },
              { id: "c", text: "Processed foods" },
              { id: "d", text: "Machinery" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "fact", name: "LIC exports", statement: "Raw goods." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Raw products",
            commonErrors: ["Processed."],
          },
        },
        {
          id: "cieigeo-q-u6l1c2-2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is 'fair trade'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Fair trade",
                statement: "Minimum price.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Purpose.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Trading system guaranteeing LIC farmers minimum prices above market — plus development premiums, better conditions; attempts to make trade fairer but limited scale/coverage.",
            commonErrors: ["Free trade."],
          },
        },
        {
          id: "cieigeo-q-u6l1c2-3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain 'terms of trade' in agricultural trade.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "ToT", statement: "Price ratio." },
            ],
            steps: [
              { reasoning: "Definition.", marks: 1, markCode: "M" },
              { reasoning: "LIC problem.", marks: 1, markCode: "M" },
              { reasoning: "Consequence.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Ratio of export prices to import prices — LICs export cheap raw goods, import expensive processed goods → deteriorating terms of trade, earn less for same imports; traps in poverty.",
            commonErrors: ["Favourable."],
          },
        },
        {
          id: "cieigeo-q-u6l1c2-4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Evaluate 'value addition' as agricultural development strategy.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Value add",
                statement: "Processing.",
              },
            ],
            steps: [
              { reasoning: "Benefits.", marks: 1, markCode: "M" },
              { reasoning: "Challenges.", marks: 1, markCode: "M" },
              { reasoning: "Evidence.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Processing locally (cocoa→chocolate, coffee→roasted) increases value/income, creates jobs — but needs capital, skills, technology, market access; often done in HICs not LICs; potential big win if supported.",
            commonErrors: ["No benefit."],
          },
        },
        {
          id: "cieigeo-q-u6l1c2-5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Analyse the impact of agricultural subsidies in HICs on LIC farmers.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Subsidies",
                statement: "Distortion.",
              },
            ],
            steps: [
              { reasoning: "Mechanism.", marks: 1, markCode: "M" },
              { reasoning: "Impact.", marks: 1, markCode: "M" },
              { reasoning: "Evidence.", marks: 1, markCode: "A" },
              { reasoning: "Weighs all.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "HIC subsidies lower world prices below cost of production — LIC farmers can't compete even at efficient production; dumped cheap food undermines local agriculture; unfair trade rules; need subsidy reform for fair competition.",
            commonErrors: ["No impact."],
          },
        },
        {
          id: "cieigeo-q-u6l1c2-6",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'land reform'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Land reform",
                statement: "Redistribution.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Purpose.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Redistributing land from large landowners to small farmers — increases productivity (owner-farmers work harder), equity, rural development; politically difficult, needs compensation/legal framework.",
            commonErrors: ["Buying land."],
          },
        },
        {
          id: "cieigeo-q-u6l1c2-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which country subsidises its farmers heavily?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Bangladesh" },
              { id: "b", text: "Kenya" },
              { id: "c", text: "Vietnam" },
              { id: "d", text: "USA/EU" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "fact", name: "Subsidies", statement: "HICs." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(d)** USA/EU",
            commonErrors: ["LICs."],
          },
        },
        {
          id: "cieigeo-q-u6l1c2-8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two benefits of 'value addition' in agriculture.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Value add benefits",
                statement: "Income+jobs.",
              },
            ],
            steps: [
              { reasoning: "Two valid.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 2, markCode: "A" },
            ],
            finalAnswer:
              "e.g. higher income (processed goods sell for more than raw) and job creation (processing plants employ locals) — also retains economic value in country rather than exporting raw.",
            commonErrors: ["No benefits."],
          },
        },
        {
          id: "cieigeo-q-u6l1c2-9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how 'agroforestry' supports sustainable agriculture.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Agroforestry",
                statement: "Trees+crops.",
              },
            ],
            steps: [
              { reasoning: "Mechanism.", marks: 1, markCode: "M" },
              { reasoning: "Benefits.", marks: 1, markCode: "M" },
              { reasoning: "Sustainability.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Integrating trees with crops — trees prevent soil erosion, fix nitrogen, provide shade/windbreak; diverse income (fruit, timber); more resilient than monoculture; sustainable long-term.",
            commonErrors: ["Just trees."],
          },
        },
        {
          id: "cieigeo-q-u6l1c2-10",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate whether free trade or fair trade better serves LIC farmers.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Free vs fair",
                statement: "Theory vs practice.",
              },
            ],
            steps: [
              { reasoning: "Free trade.", marks: 1, markCode: "M" },
              { reasoning: "Fair trade.", marks: 1, markCode: "M" },
              { reasoning: "Evidence.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Free trade: efficient but LICs can't compete with subsidies, prices volatile — LIC farmers lose. Fair trade: guarantees minimum price, development premium — helps but small scale, certification costs; neither perfect — need both plus subsidy reform.",
            commonErrors: ["One better."],
          },
        },
        {
          id: "cieigeo-q-u6l1c2-11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Terms of trade' refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Volume of goods traded" },
              {
                id: "b",
                text: "Ratio of export prices to import prices",
              },
              { id: "c", text: "Tariff rates on imports" },
              { id: "d", text: "Number of trading partners" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Terms of trade",
                statement: "Export/import price ratio.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Export vs import prices",
            commonErrors: ["Trade volume."],
          },
        },
        {
          id: "cieigeo-q-u6l1c2-12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two benefits of rural development for farmers.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Rural development",
                statement: "Enables surplus sales.",
              },
            ],
            steps: [
              { reasoning: "Two valid.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 2, markCode: "A" },
            ],
            finalAnswer:
              "e.g. roads/markets let farmers sell surplus at better prices (instead of losing produce or selling cheap locally) and credit access enables investment in inputs/equipment — also electricity, extension services, land tenure security.",
            commonErrors: ["No benefits."],
          },
        },
        {
          id: "cieigeo-q-u6l1c2-13",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why fair trade has limited impact on global agriculture.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Fair trade limits",
                statement: "Niche scale.",
              },
            ],
            steps: [
              { reasoning: "Mechanism.", marks: 1, markCode: "M" },
              { reasoning: "Limitation.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Certification costs and audit requirements exclude the poorest farmers; fair trade covers only a small share of total agricultural trade; prices still linked to volatile world markets — helps participants but doesn't transform the system.",
            commonErrors: ["Solves everything."],
          },
        },
        {
          id: "cieigeo-q-u6l1c2-14",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate land reform as an agricultural development strategy.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Land reform",
                statement: "Equity vs feasibility.",
              },
            ],
            steps: [
              { reasoning: "Benefits.", marks: 1, markCode: "M" },
              { reasoning: "Challenges.", marks: 1, markCode: "M" },
              { reasoning: "Evidence.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Redistribution raises productivity and equity — owner-farmers invest more — but politically difficult (landowner opposition), needs legal framework and compensation; successful where political will exists (East Asia) but often blocked or reversed elsewhere.",
            commonErrors: ["Easy to implement."],
          },
        },
        {
          id: "cieigeo-q-u6l1c2-15",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Value addition' in agriculture means:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Exporting raw goods unchanged" },
              { id: "b", text: "Expanding farmland area" },
              {
                id: "c",
                text: "Processing raw products to increase their value",
              },
              { id: "d", text: "Adding chemical fertilisers" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Value addition",
                statement: "Processing for higher value.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** Processing",
            commonErrors: ["Raw export."],
          },
        },
        {
          id: "cieigeo-q-u6l1c2-16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Analyse why unfavourable terms of trade persist for LICs.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "ToT persistence",
                statement: "Structural + policy.",
              },
            ],
            steps: [
              { reasoning: "Historical roots.", marks: 1, markCode: "M" },
              { reasoning: "Trade structure.", marks: 1, markCode: "M" },
              { reasoning: "Policy factors.", marks: 1, markCode: "A" },
              { reasoning: "Evidence.", marks: 1, markCode: "A" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Colonial trade patterns locked LICs into primary exports; raw commodity prices volatile and falling relative to manufactures; HIC subsidies and tariffs protect processed goods; value addition requires capital LICs lack — self-reinforcing cycle needs diversification plus fairer trade rules.",
            commonErrors: ["Temporary problem."],
          },
        },
      ],
    },
  ],
};
