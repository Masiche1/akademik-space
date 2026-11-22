import type { Lesson } from "../../../types.ts";

export const lesson531: Lesson = {
  id: "ciealgeo-u3-lesson-3-1",
  code: "3-1",
  title: "Economic Geography: Agriculture and Food Systems",
  goal: "I CAN explain agricultural systems, food production and sustainability.",
  standards: ["Cambridge A Level Geography 9696", "Paper 2: economic"],

  vocabulary: [
    {
      term: "Subsistence agriculture",
      definition: "Farming for own consumption.",
    },
    { term: "Commercial agriculture", definition: "Farming for profit." },
    { term: "Intensive agriculture", definition: "High inputs per hectare." },
    { term: "Extensive agriculture", definition: "Low inputs per hectare." },
    {
      term: "Green revolution",
      definition: "Technology boosting food production.",
    },
    {
      term: "Food security",
      definition: "Reliable access to sufficient food.",
    },
  ],
  concepts: [
    {
      id: "ciealgeo-u3-s1-agri",
      title: "Agriculture",
      skill: "Analyse agricultural systems.",
      lesson: {
        sections: [
          {
            heading: "Agricultural systems",
            body: "Subsistence: family farms, low technology. Commercial: large-scale, mechanised. Intensive: high yield/hectare (rice paddies). Extensive: low yield/hectare (ranching).",
          },
          {
            heading: "Green revolution",
            body: "High-yield varieties, fertilisers, irrigation, pesticides. Increased production but environmental costs, dependency on inputs.",
          },
          {
            heading: "Food security",
            body: "Availability, access, utilisation, stability. Challenges: climate change, population growth, inequality, waste.",
          },
        ],
        keyFormulas: [
          { name: "Subsistence", statement: "own consumption" },
          { name: "Commercial", statement: "for profit" },
          { name: "Green revolution", statement: "tech boost" },
        ],
        workedExample: {
          problem: "How did the Green Revolution affect agriculture?",
          solution:
            "Increased yields dramatically but caused environmental degradation, soil depletion, pesticide resistance, dependency on chemical inputs.",
        },
      },
      questions: [
        {
          id: "ciealgeo-u3-ag-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is subsistence agriculture?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Large-scale farming",
              },
              {
                id: "b",
                text: "Farming for profit",
              },
              {
                id: "c",
                text: "A type of industry",
              },
              {
                id: "d",
                text: "Farming for own consumption",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Subsistence",
                statement: "Own consumption.",
              },
            ],
            steps: [
              {
                reasoning: "Subsistence = farming for self.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Own consumption",
          },
        },
        {
          id: "ciealgeo-u3-ag-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the difference between intensive and extensive agriculture?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Intensive vs extensive",
                statement: "Input levels.",
              },
            ],
            steps: [
              {
                reasoning: "Intensive: high inputs/hectare.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Extensive: low inputs/hectare.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "High vs low inputs",
          },
        },
        {
          id: "ciealgeo-u3-ag-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What was the Green Revolution? What were its impacts?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Green Revolution",
                statement: "Tech boost.",
              },
            ],
            steps: [
              {
                reasoning: "High-yield varieties, fertilisers, irrigation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Increased production massively.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Environmental costs, dependency.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Tech boost production",
          },
        },
        {
          id: "ciealgeo-u3-ag-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define subsistence, commercial, intensive, extensive, Green Revolution, food security. (b) What is subsistence? (c) What is intensive? (d) What was Green Revolution? (e) What is food security? (f) What are agricultural challenges? (g) What are sustainable practices? (h) Evaluate whether Green Revolution was beneficial.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Agriculture",
                statement: "Systems, sustainability.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All six definitions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) Own consumption.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) High inputs.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(d) Tech boost.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(e) Reliable food access.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(f) Climate, population, inequality.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(g) Organic, permaculture, conservation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(h) Production up but environmental costs.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Agricultural systems analysis.",
          },
        },
        {
          id: "ciealgeo-u3-ag-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Subsistence agriculture mainly produces food for:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Large supermarket chains" },
              { id: "b", text: "Export markets only" },
              { id: "c", text: "Industrial factories" },
              { id: "d", text: "The farmer's household and local community" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Subsistence agriculture", statement: "Production primarily meets household or local needs." },
            ],
            steps: [{ reasoning: "Subsistence farming focuses on self-sufficiency rather than profit.", marks: 1, markCode: "M" }],
            finalAnswer: "The farming household and local community.",
          },
        },
        {
          id: "ciealgeo-u3-ag-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "A farm produces 4 tonnes per hectare on 12 hectares. (a) What is total production? (b) If 20% is lost after harvest, how much reaches storage or sale?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 48, unit: "tonnes" },
              { label: "b", answer: 38.4, unit: "tonnes" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Agricultural production", statement: "Total = yield x area; post-harvest loss reduces usable output." },
            ],
            steps: [
              { part: "a", reasoning: "4 x 12 = 48 tonnes.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "48 x 0.80 = 38.4 tonnes.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "a) 48 tonnes; b) 38.4 tonnes",
            commonErrors: ["Subtracting 20 tonnes instead of 20%."],
          },
        },
        {
          id: "ciealgeo-u3-ag-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Commercial agriculture is primarily distinguished by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "No use of machinery" },
              { id: "b", text: "Production for sale and profit" },
              { id: "c", text: "Very small family plots only" },
              { id: "d", text: "No external inputs" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Commercial agriculture", statement: "Farming oriented toward market income." },
            ],
            steps: [{ reasoning: "Commercial farms sell output rather than only feeding households.", marks: 1, markCode: "M" }],
            finalAnswer: "Production for profit.",
          },
        },
        {
          id: "ciealgeo-u3-ag-q8",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the environmental costs of intensive commercial agriculture.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Intensive agriculture", statement: "High inputs can raise yields but may degrade soil and water." },
            ],
            steps: [
              { reasoning: "Fertilisers and pesticides can pollute water and harm biodiversity.", marks: 1, markCode: "M" },
              { reasoning: "Irrigation can deplete water and cause salinisation.", marks: 1, markCode: "M" },
              { reasoning: "Continuous cropping can exhaust soils without management.", marks: 1, markCode: "A" },
              { reasoning: "A justified conclusion recognises productivity gains alongside environmental costs.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Intensive agriculture raises output but can cause pollution, soil degradation and water stress.",
            commonErrors: ["Listing only benefits or only costs."],
          },
        },
        {
          id: "ciealgeo-u3-ag-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A key technological input of the Green Revolution was:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Lower food prices alone" },
              { id: "b", text: "Complete abandonment of irrigation" },
              { id: "c", text: "High-yield crop varieties" },
              { id: "d", text: "Only manual labour" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Green Revolution", statement: "Technology-led increase in crop production." },
            ],
            steps: [{ reasoning: "HYVs were combined with fertilisers, irrigation and pesticides.", marks: 1, markCode: "M" }],
            finalAnswer: "High-yield crop varieties.",
          },
        },
        {
          id: "ciealgeo-u3-ag-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "A region needs 1.6 million tonnes of grain and has a supply of 2 million tonnes. (a) By how much does supply exceed demand? (b) Supply is what percentage of demand?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 400000, unit: "tonnes" },
              { label: "b", answer: 125, unit: "%" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Food availability", statement: "Surplus = supply - demand; percentage = supply / demand x 100." },
            ],
            steps: [
              { part: "a", reasoning: "2000000 - 1600000 = 400000 tonnes.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "2000000 / 1600000 x 100 = 125%.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "a) 400000 tonnes; b) 125%",
            commonErrors: ["Treating availability as the same as access."],
          },
        },
        {
          id: "ciealgeo-u3-ag-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the four dimensions of food security.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Food security", statement: "Availability, access, utilisation and stability of food." },
            ],
            steps: [
              { reasoning: "Availability means sufficient food supply exists.", marks: 1, markCode: "M" },
              { reasoning: "Access means people can obtain food economically and physically.", marks: 1, markCode: "M" },
              { reasoning: "Utilisation and stability concern nutrition, health and reliable supply over time.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Food security requires availability, access, utilisation and stability.",
            commonErrors: ["Equating food security only with food production."],
          },
        },
        {
          id: "ciealgeo-u3-ag-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Extensive agriculture is characterised by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Intensive use of fertiliser on small plots" },
              { id: "b", text: "Only greenhouse production" },
              { id: "c", text: "Very high yields per hectare" },
              { id: "d", text: "Low inputs over a large area" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Extensive agriculture", statement: "Large areas with relatively low inputs per hectare." },
            ],
            steps: [{ reasoning: "Extensive systems spread limited labour and capital over larger areas.", marks: 1, markCode: "M" }],
            finalAnswer: "Low inputs over large areas.",
          },
        },
        {
          id: "ciealgeo-u3-ag-q13",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A cooperative farm earns $80,000 from selling crops and spends $30,000 on inputs. (a) What is gross revenue minus input costs? (b) If remaining profit is $50,000, what percentage of the $80,000 revenue does it represent?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 50000, unit: "USD" },
              { label: "b", answer: 62.5, unit: "%" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Farm profit", statement: "Profit = revenue - costs; percentage = profit / revenue x 100." },
            ],
            steps: [
              { part: "a", reasoning: "80000 - 30000 = 50000 USD.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "50000 / 80000 x 100 = 62.5%.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "a) 50000 USD; b) 62.5%",
            commonErrors: ["Dividing profit by input costs instead of revenue."],
          },
        },
        {
          id: "ciealgeo-u3-ag-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "A sustainable farming practice is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Crop rotation to maintain soil fertility" },
              { id: "b", text: "Unregulated pesticide use" },
              { id: "c", text: "Removing all hedgerows" },
              { id: "d", text: "Continuous monoculture with no recovery" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Sustainable agriculture", statement: "Practices maintain productivity while protecting soil, water and biodiversity." },
            ],
            steps: [{ reasoning: "Crop rotation reduces nutrient depletion and pest buildup.", marks: 1, markCode: "M" }],
            finalAnswer: "Crop rotation.",
          },
        },
        {
          id: "ciealgeo-u3-ag-q15",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate whether the Green Revolution was a net benefit to developing countries.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Green Revolution evaluation", statement: "Assess food gains against environmental, economic and social costs." },
            ],
            steps: [
              { reasoning: "Benefits included higher yields and reduced famine risk.", marks: 1, markCode: "M" },
              { reasoning: "Costs included pollution, soil depletion and dependence on inputs.", marks: 1, markCode: "M" },
              { reasoning: "Small farmers may have been excluded by input costs.", marks: 1, markCode: "A" },
              { reasoning: "Impacts varied by country and farming system.", marks: 1, markCode: "A" },
              { reasoning: "A justified conclusion weighs production gains against sustainability and equity.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The Green Revolution increased food production but created environmental and equity trade-offs.",
            commonErrors: ["One-sided judgement."],
          },
        },
        {
          id: "ciealgeo-u3-ag-q16",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how climate change threatens food security.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Climate and food", statement: "Changing temperatures and rainfall affect crop yields and supply stability." },
            ],
            steps: [
              { reasoning: "Altered rainfall and temperature can reduce crop yields.", marks: 1, markCode: "M" },
              { reasoning: "More frequent droughts, floods and heatwaves destabilise production.", marks: 1, markCode: "M" },
              { reasoning: "Rising food prices and supply shocks affect access and stability.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Climate change reduces yields and increases supply instability, threatening food security.",
            commonErrors: ["Mentioning only crop damage without food-system impacts."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciealgeo-u3-ag-notes",
      title: "Agriculture — notes",
      summary:
        "Subsistence vs commercial. Green Revolution boosted production but environmental costs.",
      sections: [
        {
          heading: "Key idea",
          body: "Modern agriculture balances productivity with sustainability.",
        },
        {
          heading: "Food security",
          body: "Availability + access + utilisation + stability needed.",
        },
      ],
    },
  ],
};
