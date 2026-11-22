import type { Lesson } from "../../../types.ts";

export const lesson544: Lesson = {
  id: "ciealgeo-u4-lesson-4-4",
  code: "4-4",
  title: "Contemporary Geographical Issues",
  goal: "I CAN analyse current geographical challenges and solutions.",
  standards: ["Cambridge A Level Geography 9696", "Paper 4: contemporary"],

  vocabulary: [
    { term: "Climate change", definition: "Long-term climate alteration." },
    { term: "Sea level rise", definition: "Rising ocean levels from warming." },
    {
      term: "Food security",
      definition: "Reliable access to sufficient food.",
    },
    { term: "Water stress", definition: "Demand exceeds supply." },
    {
      term: "Sustainable development",
      definition: "Meeting needs without compromising future.",
    },
    { term: "Resilience", definition: "Ability to recover from shocks." },
  ],
  concepts: [
    {
      id: "ciealgeo-u4-s4-cont",
      title: "Contemporary issues",
      skill: "Analyse current geographical challenges.",
      lesson: {
        sections: [
          {
            heading: "Climate change",
            body: "Rising temperatures, sea level rise, extreme weather. Impacts: agriculture, water, health, displacement. Mitigation vs adaptation.",
          },
          {
            heading: "Resource issues",
            body: "Food security, water stress, energy transitions. Population growth vs resource limits.",
          },
          {
            heading: "Solutions",
            body: "Renewable energy, sustainable agriculture, water management, international cooperation.",
          },
        ],
        keyFormulas: [
          { name: "Climate change", statement: "long-term alteration" },
          { name: "Sea level rise", statement: "ocean warming" },
          { name: "Resilience", statement: "recovery ability" },
        ],
        workedExample: {
          problem: "How can cities adapt to climate change?",
          solution:
            "Green infrastructure, flood defences, heat action plans, resilient building codes, water management.",
        },
      },
      questions: [
        {
          id: "ciealgeo-u4-cont-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is climate change?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "A natural cycle",
              },
              {
                id: "b",
                text: "Long-term climate alteration",
              },
              {
                id: "c",
                text: "Seasonal change",
              },
              {
                id: "d",
                text: "Daily weather",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Climate change",
                statement: "Long-term alteration.",
              },
            ],
            steps: [
              {
                reasoning: "Climate change = long-term alteration.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Long-term alteration",
          },
        },
        {
          id: "ciealgeo-u4-cont-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is sea level rise caused by?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Sea level rise",
                statement: "Ocean warming.",
              },
            ],
            steps: [
              {
                reasoning: "Thermal expansion of water.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Melting glaciers/ice caps.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Thermal expansion + melting",
          },
        },
        {
          id: "ciealgeo-u4-cont-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What are the impacts of climate change?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Climate impacts",
                statement: "Effects.",
              },
            ],
            steps: [
              {
                reasoning: "Agriculture, water, health affected.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Extreme weather, displacement.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Disproportionate impact on poor.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Agriculture, water, health",
          },
        },
        {
          id: "ciealgeo-u4-cont-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define climate change, sea level rise, food security, water stress, sustainable development, resilience. (b) What is climate change? (c) What causes sea level rise? (d) What are climate impacts? (e) What is water stress? (f) What are solutions? (g) What is resilience? (h) Evaluate whether countries should prioritise mitigation or adaptation.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Contemporary",
                statement: "Issues, solutions.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All six definitions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) Long-term alteration.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) Thermal expansion + melting.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(d) Agriculture, water, health.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(e) Demand exceeds supply.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(f) Renewables, sustainable agriculture.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(g) Recovery ability.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(h) Both needed — context dependent.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Contemporary issues analysis.",
          },
        },
        {
          id: "ciealgeo-u4-cont-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Mitigation differs from adaptation because mitigation:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Aims to reduce the causes or severity of climate change" },
              { id: "b", text: "Requires no planning" },
              { id: "c", text: "Only responds after damage occurs" },
              { id: "d", text: "Ignores greenhouse gases" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Mitigation", statement: "Actions that reduce emissions or limit climate change." },
            ],
            steps: [{ reasoning: "Mitigation targets the causes; adaptation manages impacts.", marks: 1, markCode: "M" }],
            finalAnswer: "It reduces causes or severity.",
          },
        },
        {
          id: "ciealgeo-u4-cont-q6",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how climate change can affect food and water security together.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Climate-food-water links", statement: "Changing rainfall and temperature affect both crop production and water availability." },
            ],
            steps: [
              { reasoning: "Drought and heat can reduce crop yields and pasture.", marks: 1, markCode: "M" },
              { reasoning: "Altered rainfall can reduce river flows and groundwater recharge.", marks: 1, markCode: "M" },
              { reasoning: "Combined shortages raise food prices and threaten access for vulnerable groups.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Climate change can reduce both food production and water supply, worsening food and water insecurity.",
            commonErrors: ["Treating food and water impacts separately."],
          },
        },
        {
          id: "ciealgeo-u4-cont-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is a mitigation strategy for climate change?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Building only higher seawalls" },
              { id: "b", text: "Relocating after floods" },
              { id: "c", text: "Increasing fossil-fuel use" },
              { id: "d", text: "Expanding renewable energy generation" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Mitigation", statement: "Renewable energy reduces greenhouse-gas emissions." },
            ],
            steps: [{ reasoning: "Renewables replace fossil fuels and lower emissions.", marks: 1, markCode: "M" }],
            finalAnswer: "Expanding renewable energy.",
          },
        },
        {
          id: "ciealgeo-u4-cont-q8",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the role of international cooperation in addressing climate change.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Climate governance", statement: "Climate change is global, requiring shared commitments and finance." },
            ],
            steps: [
              { reasoning: "International agreements can coordinate emission reductions.", marks: 1, markCode: "M" },
              { reasoning: "Wealthy countries may need to support adaptation in poorer states.", marks: 1, markCode: "M" },
              { reasoning: "National interests, enforcement and funding create challenges.", marks: 1, markCode: "A" },
              { reasoning: "Cooperation is necessary but difficult to achieve equitably.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "International cooperation is essential but faces political, financial and equity barriers.",
            commonErrors: ["Assuming one country can solve the problem alone."],
          },
        },
        {
          id: "ciealgeo-u4-cont-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Water stress occurs when:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Demand for water exceeds sustainable supply" },
              { id: "b", text: "A river floods" },
              { id: "c", text: "A reservoir is full" },
              { id: "d", text: "Rainfall is heavy" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Water stress", statement: "Demand exceeds sustainable supply." },
            ],
            steps: [{ reasoning: "Water stress reflects scarcity relative to demand.", marks: 1, markCode: "M" }],
            finalAnswer: "Demand exceeds supply.",
          },
        },
        {
          id: "ciealgeo-u4-cont-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "A region's water demand is 800 million m³ and sustainable supply is 500 million m³. (a) What is the water deficit? (b) Demand is what percentage of supply?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 300000000, unit: "m3" },
              { label: "b", answer: 160, unit: "%" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Water stress", statement: "Deficit = demand - supply; demand percentage = demand / supply x 100." },
            ],
            steps: [
              { part: "a", reasoning: "800000000 - 500000000 = 300000000 m3.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "800000000 / 500000000 x 100 = 160%.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "a) 300000000 m3; b) 160%",
            commonErrors: ["Reversing demand and supply."],
          },
        },
        {
          id: "ciealgeo-u4-cont-q11",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate the balance between mitigation and adaptation in national climate policy.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Climate policy", statement: "Mitigation reduces future risk while adaptation manages current impacts." },
            ],
            steps: [
              { reasoning: "Mitigation lowers emissions but benefits may be long-term.", marks: 1, markCode: "M" },
              { reasoning: "Adaptation protects people now but does not stop warming.", marks: 1, markCode: "M" },
              { reasoning: "Poor countries often need adaptation finance more urgently.", marks: 1, markCode: "A" },
              { reasoning: "Both are needed because emissions continue and impacts are already occurring.", marks: 1, markCode: "A" },
              { reasoning: "A justified conclusion favours a balanced portfolio.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Both mitigation and adaptation are necessary; the balance depends on vulnerability and time horizon.",
            commonErrors: ["Choosing only one strategy without justification."],
          },
        },
        {
          id: "ciealgeo-u4-cont-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Food security includes all of the following EXCEPT:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Guaranteed maximum food prices" },
              { id: "b", text: "Stability of supply" },
              { id: "c", text: "Access to food" },
              { id: "d", text: "Availability of food" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Food security", statement: "Availability, access, utilisation and stability." },
            ],
            steps: [{ reasoning: "Food security does not require maximum prices.", marks: 1, markCode: "M" }],
            finalAnswer: "Guaranteed maximum food prices.",
          },
        },
        {
          id: "ciealgeo-u4-cont-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "Sea level rises by 3 mm per year along a 20 km coastline. Assuming a constant 1 m depth of affected shoreline, (a) express the rise in metres per year and (b) calculate the approximate annual volume of seawater added along that strip in cubic metres.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 0.003, unit: "m/year" },
              { label: "b", answer: 60, unit: "m3" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Sea-level calculation", statement: "Convert millimetres to metres, then volume = rise x length x depth." },
            ],
            steps: [
              { part: "a", reasoning: "3 mm = 0.003 m.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "0.003 m x 20000 m x 1 m = 60 m3.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "a) 0.003 m/year; b) 60 m3",
          },
        },
        {
          id: "ciealgeo-u4-cont-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A major benefit of renewable energy is that it:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Produces little or no direct greenhouse-gas emissions during operation" },
              { id: "b", text: "Is always cheaper than fossil fuels" },
              { id: "c", text: "Never requires maintenance" },
              { id: "d", text: "Has no environmental impacts" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Renewable energy", statement: "Low operational emissions support climate mitigation." },
            ],
            steps: [{ reasoning: "Renewables reduce reliance on emission-intensive fuels.", marks: 1, markCode: "M" }],
            finalAnswer: "Low direct operational emissions.",
          },
        },
        {
          id: "ciealgeo-u4-cont-q15",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A city of 1 million grows by 3% per year. (a) What is the annual population increase? (b) What is the population after one year?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 30000, unit: "people" },
              { label: "b", answer: 1030000, unit: "people" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Population growth", statement: "Increase = population x growth rate; new population = old + increase." },
            ],
            steps: [
              { part: "a", reasoning: "1000000 x 0.03 = 30000 people.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "1000000 + 30000 = 1030000 people.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "a) 30000; b) 1030000",
            commonErrors: ["Adding 3 people instead of 3%."],
          },
        },
        {
          id: "ciealgeo-u4-cont-q16",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain what makes a community resilient to climate-related disasters.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Resilience", statement: "Ability to anticipate, withstand and recover from shocks." },
            ],
            steps: [
              { reasoning: "Early-warning systems and preparedness reduce loss of life.", marks: 1, markCode: "M" },
              { reasoning: "Diversified livelihoods and insurance support recovery.", marks: 1, markCode: "M" },
              { reasoning: "Strong institutions and infrastructure enable rapid response.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Resilience comes from preparedness, diversified livelihoods and effective institutions.",
            commonErrors: ["Equating resilience only with engineering."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciealgeo-u4-cont-notes",
      title: "Contemporary — notes",
      summary:
        "Climate change impacts agriculture/water/health. Mitigation vs adaptation needed.",
      sections: [
        {
          heading: "Key idea",
          body: "Contemporary challenges require both mitigation and adaptation.",
        },
        {
          heading: "Resilience",
          body: "Ability to recover from shocks crucial for vulnerable communities.",
        },
      ],
    },
  ],
};
