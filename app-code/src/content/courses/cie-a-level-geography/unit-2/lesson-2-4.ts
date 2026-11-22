import type { Lesson } from "../../../types.ts";

export const lesson524: Lesson = {
  id: "ciealgeo-u2-lesson-2-4",
  code: "2-4",
  title: "Resource Issues and Sustainability",
  goal: "I CAN explain resource scarcity, sustainability and management.",
  standards: ["Cambridge A Level Geography 9696", "Paper 2: resources"],

  vocabulary: [
    { term: "Renewable resources", definition: "Resources that regenerate." },
    { term: "Non-renewable resources", definition: "Finite resources." },
    {
      term: "Carrying capacity",
      definition: "Max population environment supports.",
    },
    {
      term: "Sustainability",
      definition: "Meeting needs without compromising future.",
    },
    { term: "Tragedy of commons", definition: "Overuse of shared resources." },
    {
      term: "Resource curse",
      definition: "Resource wealth harming development.",
    },
  ],
  concepts: [
    {
      id: "ciealgeo-u2-s4-res",
      title: "Resources",
      skill: "Analyse resource issues.",
      lesson: {
        sections: [
          {
            heading: "Resource types",
            body: "Renewable: solar, wind, water, forests (if managed). Non-renewable: fossil fuels, minerals. Some resources renewable but overexploited → effectively non-renewable.",
          },
          {
            heading: "Resource challenges",
            body: "Scarcity, degradation, pollution, conflict over resources. Water stress, soil erosion, deforestation.",
          },
          {
            heading: "Management",
            body: "Sustainable use, efficiency, substitution, recycling, protected areas. Resource curse: abundance can harm governance/development.",
          },
        ],
        keyFormulas: [
          { name: "Renewable", statement: "regenerate" },
          { name: "Non-renewable", statement: "finite" },
          { name: "Tragedy", statement: "overuse" },
        ],
        workedExample: {
          problem: "Why do some resource-rich countries remain poor?",
          solution:
            "Resource curse: Dutch disease (currency appreciation), corruption, conflict, lack of diversification.",
        },
      },
      questions: [
        {
          id: "ciealgeo-u2-res-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the difference between renewable and non-renewable resources?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Renewable regenerates, non-renewable is finite",
              },
              {
                id: "b",
                text: "Same thing",
              },
              {
                id: "c",
                text: "Non-renewable is cleaner",
              },
              {
                id: "d",
                text: "Renewable is cheaper",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Resources",
                statement: "Types.",
              },
            ],
            steps: [
              {
                reasoning: "Renewable regenerates, non-renewable finite.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Regenerate vs finite",
          },
        },
        {
          id: "ciealgeo-u2-res-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the tragedy of the commons?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Tragedy",
                statement: "Overuse.",
              },
            ],
            steps: [
              {
                reasoning: "Overuse of shared resources.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Individual benefits exceed individual costs.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Shared resource overuse",
          },
        },
        {
          id: "ciealgeo-u2-res-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is the resource curse?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Resource curse",
                statement: "Wealth harm.",
              },
            ],
            steps: [
              {
                reasoning: "Resource abundance harms development.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Dutch disease, corruption, conflict.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Lack of diversification.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Resource wealth harm",
          },
        },
        {
          id: "ciealgeo-u2-res-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define renewable, non-renewable, carrying capacity, sustainability, tragedy of commons, resource curse. (b) What is renewable? (c) What is non-renewable? (d) What is tragedy of commons? (e) What is resource curse? (f) What are resource challenges? (g) What are management strategies? (h) Evaluate whether resource scarcity is a major development barrier.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Resources",
                statement: "Sustainability.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All six definitions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) Regenerate.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) Finite.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(d) Overuse shared.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(e) Wealth harm.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(f) Scarcity, degradation, conflict.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(g) Efficiency, substitution, recycling.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(h) Balanced evaluation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Resource issues analysis.",
          },
        },
        {
          id: "ciealgeo-u2-res-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which resource is generally classified as renewable?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Natural gas" },
              { id: "b", text: "Coal" },
              { id: "c", text: "Iron ore" },
              { id: "d", text: "Solar energy" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Renewable resources", statement: "Resources that are naturally replenished." },
            ],
            steps: [{ reasoning: "Solar energy is continuously available and regenerates.", marks: 1, markCode: "M" }],
            finalAnswer: "Solar energy",
          },
        },
        {
          id: "ciealgeo-u2-res-q6",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how overexploitation can turn a renewable resource into an effectively non-renewable one.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Renewable limits", statement: "Renewability depends on use staying within regeneration rates." },
            ],
            steps: [
              { reasoning: "Forests, fisheries and water renew only if extraction is below regeneration.", marks: 1, markCode: "M" },
              { reasoning: "Overuse reduces stocks faster than nature replaces them.", marks: 1, markCode: "M" },
              { reasoning: "Degradation and habitat loss can make recovery very slow or impossible.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "When extraction exceeds regeneration, renewable resources become depleted like finite resources.",
            commonErrors: ["Assuming renewable means unlimited."],
          },
        },
        {
          id: "ciealgeo-u2-res-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is a non-renewable resource?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Managed timber" },
              { id: "b", text: "Rainfall" },
              { id: "c", text: "Petroleum" },
              { id: "d", text: "Wind" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Non-renewable resources", statement: "Finite stocks formed over geological time." },
            ],
            steps: [{ reasoning: "Petroleum forms slowly and is consumed faster than it regenerates.", marks: 1, markCode: "M" }],
            finalAnswer: "Petroleum",
          },
        },
        {
          id: "ciealgeo-u2-res-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe three strategies for managing resources sustainably.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Sustainable management", statement: "Efficiency, substitution, recycling and protection reduce resource pressure." },
            ],
            steps: [
              { reasoning: "Improve efficiency so less resource is needed per unit of output.", marks: 1, markCode: "M" },
              { reasoning: "Substitute scarce resources with alternatives where possible.", marks: 1, markCode: "M" },
              { reasoning: "Recycle materials and protect ecosystems that regenerate resources.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Use efficiency, substitution, recycling and ecosystem protection.",
            commonErrors: ["Listing strategies without explaining sustainability."],
          },
        },
        {
          id: "ciealgeo-u2-res-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Sustainability means:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Banning all economic growth" },
              { id: "b", text: "Meeting present needs without compromising future generations" },
              { id: "c", text: "Ignoring environmental costs" },
              { id: "d", text: "Using resources as fast as possible" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Sustainability", statement: "Meeting needs while preserving resources for the future." },
            ],
            steps: [{ reasoning: "Sustainability balances present use with long-term availability.", marks: 1, markCode: "M" }],
            finalAnswer: "Meeting needs without compromising the future.",
          },
        },
        {
          id: "ciealgeo-u2-res-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "A country extracts 40 million barrels of oil per year from reserves of 2 billion barrels. (a) How many years would reserves last at this rate? (b) If extraction falls to 25 million barrels per year, how many years would reserves last?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 50, unit: "years" },
              { label: "b", answer: 80, unit: "years" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Resource depletion", statement: "Reserve life = reserves / annual extraction." },
            ],
            steps: [
              { part: "a", reasoning: "2000000000 / 40000000 = 50 years.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "2000000000 / 25000000 = 80 years.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "a) 50 years; b) 80 years",
            commonErrors: ["Using million and billion units inconsistently."],
          },
        },
        {
          id: "ciealgeo-u2-res-q11",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate whether recycling can solve resource scarcity.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Recycling", statement: "Recycling reduces demand but cannot replace all primary extraction." },
            ],
            steps: [
              { reasoning: "Recycling conserves materials and reduces waste.", marks: 1, markCode: "M" },
              { reasoning: "It lowers demand for virgin resources and associated impacts.", marks: 1, markCode: "M" },
              { reasoning: "Energy, quality loss and collection costs limit effectiveness.", marks: 1, markCode: "A" },
              { reasoning: "It is one part of a wider efficiency and substitution strategy.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Recycling helps reduce scarcity but must be combined with efficiency, substitution and reduced consumption.",
            commonErrors: ["Assuming recycling eliminates all extraction."],
          },
        },
        {
          id: "ciealgeo-u2-res-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The resource curse suggests that resource abundance can:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Remove all trade barriers" },
              { id: "b", text: "Harm development through dependence, corruption or conflict" },
              { id: "c", text: "Increase agricultural employment automatically" },
              { id: "d", text: "Guarantee rapid prosperity" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Resource curse", statement: "Resource wealth can weaken governance and diversify-away growth." },
            ],
            steps: [{ reasoning: "Resource dependence can create economic and political problems.", marks: 1, markCode: "M" }],
            finalAnswer: "Harm development despite wealth.",
          },
        },
        {
          id: "ciealgeo-u2-res-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "A basin has annual water demand of 900 million m³ and sustainable supply of 600 million m³. (a) What is the water deficit? (b) Demand is what percentage of supply?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 300000000, unit: "m3" },
              { label: "b", answer: 150, unit: "%" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Water stress", statement: "Deficit = demand - supply; demand as percentage = demand / supply x 100." },
            ],
            steps: [
              { part: "a", reasoning: "900000000 - 600000000 = 300000000 m3.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "900000000 / 600000000 x 100 = 150%.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "a) 300000000 m3; b) 150%",
            commonErrors: ["Reporting deficit as a percentage rather than volume."],
          },
        },
        {
          id: "ciealgeo-u2-res-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "In the tragedy of the commons, overuse occurs because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Regeneration is always instant" },
              { id: "b", text: "The resource has no value" },
              { id: "c", text: "Only one person uses it" },
              { id: "d", text: "Individual users gain while costs are shared by everyone" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Tragedy of commons", statement: "Private benefits can exceed individual costs while depletion costs are shared." },
            ],
            steps: [{ reasoning: "Each user has an incentive to exploit the shared resource.", marks: 1, markCode: "M" }],
            finalAnswer: "Benefits are private but depletion costs are shared.",
          },
        },
        {
          id: "ciealgeo-u2-res-q15",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A city generates 500,000 tonnes of waste. 200,000 tonnes are recycled or composted. (a) How much waste is not recovered? (b) What percentage of waste is recovered?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 300000, unit: "tonnes" },
              { label: "b", answer: 40, unit: "%" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Waste calculation", statement: "Recovered percentage = recovered / total x 100." },
            ],
            steps: [
              { part: "a", reasoning: "500000 - 200000 = 300000 tonnes.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "200000 / 500000 x 100 = 40%.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "a) 300000 tonnes; b) 40%",
            commonErrors: ["Using unrecovered waste as the denominator."],
          },
        },
        {
          id: "ciealgeo-u2-res-q16",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how substitution can reduce dependence on a scarce resource.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Resource substitution", statement: "Alternative materials or energy sources can replace scarce inputs." },
            ],
            steps: [
              { reasoning: "A scarce material can be replaced by a more abundant or renewable one.", marks: 1, markCode: "M" },
              { reasoning: "Technology may allow lower quantities of the scarce resource to be used.", marks: 1, markCode: "M" },
              { reasoning: "Substitution reduces pressure but may create new environmental or cost trade-offs.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Substitution replaces scarce inputs with alternatives, though it may create new trade-offs.",
            commonErrors: ["Ignoring costs and feasibility of alternatives."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciealgeo-u2-res-notes",
      title: "Resources — notes",
      summary:
        "Renewable vs non-renewable. Tragedy of commons. Resource curse paradox.",
      sections: [
        {
          heading: "Key idea",
          body: "Resource management crucial for sustainable development.",
        },
        {
          heading: "Resource curse",
          body: "Abundance can harm development through corruption/dependency.",
        },
      ],
    },
  ],
};
