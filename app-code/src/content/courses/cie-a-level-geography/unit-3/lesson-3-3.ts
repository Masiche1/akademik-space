import type { Lesson } from "../../../types.ts";

export const lesson533: Lesson = {
  id: "ciealgeo-u3-lesson-3-3",
  code: "3-3",
  title: "Tourism and Services",
  goal: "I CAN explain tourism impacts, sustainability and management.",
  standards: ["Cambridge A Level Geography 9696", "Paper 2: tourism"],

  vocabulary: [
    { term: "Mass tourism", definition: "Large-scale tourism development." },
    {
      term: "Eco-tourism",
      definition: "Responsible tourism to natural areas.",
    },
    {
      term: "Tourism multiplier",
      definition: "Tourism spending → wider economic benefits.",
    },
    {
      term: "Seasonality",
      definition: "Variation in tourism demand by season.",
    },
    {
      term: "Carrying capacity",
      definition: "Max visitors environment can sustain.",
    },
    { term: "Leakage", definition: "Tourism revenue lost to imports." },
  ],
  concepts: [
    {
      id: "ciealgeo-u3-s3-tour",
      title: "Tourism",
      skill: "Analyse tourism impacts.",
      lesson: {
        sections: [
          {
            heading: "Tourism impacts",
            body: "Economic: jobs, revenue, multiplier effect. Social: cultural exchange, but can cause tension. Environmental: pollution, habitat loss, but can fund conservation.",
          },
          {
            heading: "Sustainability",
            body: "Mass tourism vs eco-tourism. Carrying capacity limits. Seasonality challenges. Leakage reduces local benefits.",
          },
        ],
        keyFormulas: [
          { name: "Mass tourism", statement: "large-scale" },
          { name: "Eco-tourism", statement: "responsible" },
          { name: "Carrying capacity", statement: "visitor limit" },
        ],
        workedExample: {
          problem: "Why is mass tourism problematic for some destinations?",
          solution:
            "Environmental degradation, cultural commodification, infrastructure strain, seasonal unemployment, leakage reduces benefits.",
        },
      },
      questions: [
        {
          id: "ciealgeo-u3-tour-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is eco-tourism?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Responsible tourism to natural areas",
              },
              {
                id: "b",
                text: "A type of hotel",
              },
              {
                id: "c",
                text: "A travel agency",
              },
              {
                id: "d",
                text: "Mass tourism",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Eco-tourism",
                statement: "Responsible tourism.",
              },
            ],
            steps: [
              {
                reasoning: "Eco-tourism = responsible natural tourism.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Responsible tourism",
          },
        },
        {
          id: "ciealgeo-u3-tour-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the tourism multiplier effect?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Multiplier",
                statement: "Economic benefit.",
              },
            ],
            steps: [
              {
                reasoning: "Tourism spending → wider economic benefits.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Revenue circulates through local economy.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Economic benefit",
          },
        },
        {
          id: "ciealgeo-u3-tour-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What are the environmental impacts of tourism?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Tourism impact",
                statement: "Environment.",
              },
            ],
            steps: [
              {
                reasoning: "Pollution, habitat loss, resource use.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Can also fund conservation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Carrying capacity limits needed.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Pollution, habitat loss",
          },
        },
        {
          id: "ciealgeo-u3-tour-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define mass tourism, eco-tourism, multiplier, seasonality, carrying capacity, leakage. (b) What is eco-tourism? (c) What is multiplier? (d) What are tourism impacts? (e) What is seasonality? (f) What is leakage? (g) What is carrying capacity? (h) Evaluate whether tourism benefits or harms destinations.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Tourism",
                statement: "Impacts.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All six definitions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) Responsible tourism.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) Economic benefit.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(d) Economic, social, environmental.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(e) Seasonal demand.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(f) Revenue lost to imports.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(g) Visitor limit.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(h) Balanced evaluation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Tourism analysis.",
          },
        },
        {
          id: "ciealgeo-u3-tour-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Mass tourism is best described as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Travel without any infrastructure" },
              { id: "b", text: "A type of migration" },
              { id: "c", text: "Large-scale tourism development with high visitor numbers" },
              { id: "d", text: "Tourism restricted to scientists" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Mass tourism", statement: "High-volume, large-scale tourism development." },
            ],
            steps: [{ reasoning: "Mass tourism involves large numbers of visitors and concentrated infrastructure.", marks: 1, markCode: "M" }],
            finalAnswer: "Large-scale tourism development.",
          },
        },
        {
          id: "ciealgeo-u3-tour-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A destination earns $10 million from tourism. Imports and foreign-owned businesses take $6 million, while $4 million remains in the local economy. (a) What is the leakage? (b) What percentage of tourism spending remains locally?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 6000000, unit: "USD" },
              { label: "b", answer: 40, unit: "%" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Tourism leakage", statement: "Leakage = revenue lost abroad; local retention = local amount / total x 100." },
            ],
            steps: [
              { part: "a", reasoning: "10000000 - 4000000 = 6000000 USD lost abroad.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "4000000 / 10000000 x 100 = 40%.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "a) 6000000 USD; b) 40%",
            commonErrors: ["Treating leakage as money spent locally."],
          },
        },
        {
          id: "ciealgeo-u3-tour-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Eco-tourism is most closely associated with:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Maximising visitor numbers" },
              { id: "b", text: "Ignoring carrying capacity" },
              { id: "c", text: "Removing all local ownership" },
              { id: "d", text: "Minimising environmental and cultural harm" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Eco-tourism", statement: "Responsible tourism that conserves environment and supports communities." },
            ],
            steps: [{ reasoning: "Eco-tourism emphasises low impact and sustainability.", marks: 1, markCode: "M" }],
            finalAnswer: "Minimising harm.",
          },
        },
        {
          id: "ciealgeo-u3-tour-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain two social impacts of tourism on a destination community.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Tourism social impacts", statement: "Tourism can diversify culture but also create tension and change identity." },
            ],
            steps: [
              { reasoning: "Positive: cultural exchange, jobs and improved services.", marks: 1, markCode: "M" },
              { reasoning: "Negative: commodification, crowding, crime or loss of traditions.", marks: 1, markCode: "M" },
              { reasoning: "Impacts depend on management and community involvement.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Tourism can enrich culture and services but may also commodify traditions and create social tension.",
            commonErrors: ["Only listing positive impacts."],
          },
        },
        {
          id: "ciealgeo-u3-tour-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Seasonality in tourism refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Year-round constant demand" },
              { id: "b", text: "A type of weather hazard" },
              { id: "c", text: "Variation in visitor demand across the year" },
              { id: "d", text: "Permanent closure of attractions" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Seasonality", statement: "Tourism demand varies by season, climate or holidays." },
            ],
            steps: [{ reasoning: "Seasonality creates peaks and troughs in tourism activity.", marks: 1, markCode: "M" }],
            finalAnswer: "Seasonal variation in demand.",
          },
        },
        {
          id: "ciealgeo-u3-tour-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "A hotel has 200 rooms and an average occupancy of 70%. (a) How many rooms are occupied on an average night? (b) What percentage of rooms remain empty?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 140, unit: "rooms" },
              { label: "b", answer: 30, unit: "%" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Occupancy calculation", statement: "Occupied rooms = total rooms x occupancy rate." },
            ],
            steps: [
              { part: "a", reasoning: "200 x 0.70 = 140 rooms.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "100% - 70% = 30% empty.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "a) 140 rooms; b) 30%",
            commonErrors: ["Multiplying occupied rooms by 200 again."],
          },
        },
        {
          id: "ciealgeo-u3-tour-q11",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate strategies for making mass tourism more sustainable.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Sustainable tourism", statement: "Management must balance visitor numbers, environment, community benefit and economy." },
            ],
            steps: [
              { reasoning: "Enforce carrying-capacity limits and visitor dispersal.", marks: 1, markCode: "M" },
              { reasoning: "Promote local ownership to reduce leakage.", marks: 1, markCode: "M" },
              { reasoning: "Invest in infrastructure and conservation funding.", marks: 1, markCode: "M" },
              { reasoning: "Seasonal pricing and eco-certification can reduce pressure.", marks: 1, markCode: "A" },
              { reasoning: "A justified conclusion recognises trade-offs between growth and sustainability.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Sustainable mass tourism requires limits, local benefit and environmental investment.",
            commonErrors: ["Assuming eco-tourism alone solves mass-tourism problems."],
          },
        },
        {
          id: "ciealgeo-u3-tour-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Tourism leakage occurs when:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Visitors pay no taxes" },
              { id: "b", text: "Tourism revenue leaves the destination for foreign firms or imports" },
              { id: "c", text: "Local hotels always profit" },
              { id: "d", text: "Airports close" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Leakage", statement: "Revenue lost from the local economy to external owners or imports." },
            ],
            steps: [{ reasoning: "Leakage reduces the local economic benefit of tourism.", marks: 1, markCode: "M" }],
            finalAnswer: "Revenue leaves the destination.",
          },
        },
        {
          id: "ciealgeo-u3-tour-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "A nature reserve allows a maximum of 50,000 visitors per day. Last month it received 1,800,000 visitors over 30 days. By how much did total visits exceed the maximum daily capacity for the month?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 300000, unit: "visitors" }],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Carrying capacity", statement: "Monthly capacity = daily limit x days." },
            ],
            steps: [
              { part: "a", reasoning: "Monthly capacity = 50000 x 30 = 1500000; excess = 1800000 - 1500000 = 300000 visitors.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "300000 visitors",
          },
        },
        {
          id: "ciealgeo-u3-tour-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The tourism multiplier effect refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Tourism ending after one day" },
              { id: "b", text: "One visitor causing another visitor to leave" },
              { id: "c", text: "Tourist spending generating wider benefits throughout the local economy" },
              { id: "d", text: "Prices doubling every season" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Multiplier effect", statement: "Initial tourist spending circulates through linked businesses." },
            ],
            steps: [{ reasoning: "Spending creates jobs and income beyond the original transaction.", marks: 1, markCode: "M" }],
            finalAnswer: "Wider economic benefits from tourist spending.",
          },
        },
        {
          id: "ciealgeo-u3-tour-q15",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate the balance between economic benefits and environmental costs of tourism development.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Tourism evaluation", statement: "Tourism creates revenue and jobs but can degrade environments." },
            ],
            steps: [
              { reasoning: "Benefits include jobs, foreign exchange and infrastructure.", marks: 1, markCode: "M" },
              { reasoning: "Costs include pollution, habitat loss and resource pressure.", marks: 1, markCode: "M" },
              { reasoning: "Tourism revenue can fund conservation if managed well.", marks: 1, markCode: "A" },
              { reasoning: "Seasonality and leakage reduce net benefits.", marks: 1, markCode: "A" },
              { reasoning: "A justified conclusion supports sustainable management.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Tourism can benefit economies but must be managed to avoid environmental damage and leakage.",
            commonErrors: ["One-sided judgement."],
          },
        },
        {
          id: "ciealgeo-u3-tour-q16",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why carrying capacity is important for tourism planning.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Carrying capacity", statement: "Visitor numbers must remain within environmental and social limits." },
            ],
            steps: [
              { reasoning: "Too many visitors can damage ecosystems and heritage sites.", marks: 1, markCode: "M" },
              { reasoning: "Overcrowding reduces visitor experience and community wellbeing.", marks: 1, markCode: "M" },
              { reasoning: "Limits help preserve the resource on which tourism depends.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Carrying capacity prevents environmental degradation and preserves long-term tourism viability.",
            commonErrors: ["Treating more visitors as always better."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciealgeo-u3-tour-notes",
      title: "Tourism — notes",
      summary:
        "Mass vs eco-tourism. Multiplier effect, seasonality, leakage challenges.",
      sections: [
        {
          heading: "Key idea",
          body: "Tourism can benefit or harm depending on management.",
        },
        {
          heading: "Sustainability",
          body: "Carrying capacity, eco-tourism, local ownership key.",
        },
      ],
    },
  ],
};
