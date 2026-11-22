import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "cieibs-u3-lesson-3-2",
  code: "3-2",
  title: "Location Decisions",
  goal: "I CAN explain the factors affecting where a business locates and evaluate a site decision.",
  standards: ["Cambridge IGCSE Business Studies 0450", "Operations: location"],
  vocabulary: [
    {
      term: "Primary sector",
      definition: "Extracting raw materials — farms, mines.",
    },
    { term: "Secondary sector", definition: "Manufacturing and construction." },
    {
      term: "Tertiary sector",
      definition: "Services — shops, banks, schools.",
    },
    {
      term: "Accessibility",
      definition:
        "How easily customers, workers and supplies can reach the site.",
    },
    {
      term: "External economies",
      definition: "Cost savings from locating near related businesses.",
    },
  ],
  concepts: [
    {
      id: "cieibs-u3-s2-location",
      title: "Location decisions",
      skill: "Weigh location factors and evaluate a site.",
      lesson: {
        sections: [
          {
            heading: "Location factors",
            body: "Primary sector businesses locate near raw materials (farms on fertile land, mines at deposits). Secondary sector weighs transport links, labour supply, costs and markets. Tertiary sector prioritises customer access — shops need footfall, services need visibility. Factors include transport, labour, land/rent costs, markets, utilities, government incentives and quality of life for staff.",
          },
          {
            heading: "Evaluation",
            body: "No location is perfect — every site involves trade-offs. A strong answer weighs competing factors: cheap land vs poor transport, customer access vs high rent, government grants vs isolation.",
          },
        ],
        keyFormulas: [
          {
            name: "Sectors",
            statement: "primary = extract; secondary = make; tertiary = serve",
          },
          {
            name: "Trade-off",
            statement: "every site balances competing location factors",
          },
        ],
        workedExample: {
          problem:
            "Why would a supermarket choose a site on a main road on the edge of town?",
          solution:
            "High accessibility for cars, large cheap land for parking, and visibility — balancing customer access against lower rent than town centre.",
        },
      },
      questions: [
        {
          id: "cieibs-u3-loc-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which sector would a coal mine belong to?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Tertiary" },
              { id: "b", text: "Secondary" },
              { id: "c", text: "Quaternary" },
              { id: "d", text: "Primary" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Primary sector",
                statement: "Extracting raw materials.",
              },
            ],
            steps: [
              {
                reasoning: "Mining extracts raw materials — primary sector.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Primary",
          },
        },
        {
          id: "cieibs-u3-loc-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "State two location factors most important for a new supermarket.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Location factors",
                statement: "Match factors to business type.",
              },
            ],
            steps: [
              {
                reasoning: "Accessibility — near roads/parking for customers.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Customer catchment area and land/parking space at reasonable cost.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Accessibility for customers; sufficient land/parking at affordable cost",
          },
        },
        {
          id: "cieibs-u3-loc-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A car factory is deciding between a site near a motorway with expensive land and a cheaper site 50 km away with poor transport links. Explain two factors it should weigh.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Trade-offs",
                statement: "Cost savings vs efficiency losses.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Transport costs: motorway site reduces distribution costs for parts and finished cars.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Labour: cheaper site may mean lower wages but smaller labour pool and commuting issues.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Weigh higher land cost against ongoing transport and labour trade-offs.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Transport efficiency vs land cost; labour availability vs wage costs",
          },
        },
        {
          id: "cieibs-u3-loc-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate locating a new distribution centre in a government-assisted zone 30 km from the main city. Give one advantage and two disadvantages, then a judgement.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Site evaluation",
                statement: "Weigh incentives against accessibility and labour.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Advantage: government grants/tax breaks reduce setup and operating costs.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Disadvantage: 30 km from city means longer delivery times to customers.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Disadvantage: smaller local labour pool; may need to bus in workers.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Judgement: worthwhile if delivery deadlines allow and grants are substantial; risky for time-critical distribution.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Grants help costs but distance hurts delivery speed and labour access — depends on deadlines",
          },
        },
        {
          id: "cieibs-u3-loc-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of the following is an example of the primary sector?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A law firm" },
              { id: "b", text: "A coal mine" },
              { id: "c", text: "A car factory" },
              { id: "d", text: "A retail bank" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Primary sector",
                statement: "Extracting raw materials — farms, mines.",
              },
            ],
            steps: [
              {
                reasoning: "Mining extracts raw materials — primary sector.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Coal mine",
          },
        },
        {
          id: "cieibs-u3-loc-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of the following is an example of the tertiary sector?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A steel works" },
              { id: "b", text: "A wheat farm" },
              { id: "c", text: "A retail shop" },
              { id: "d", text: "A construction company" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Tertiary sector",
                statement: "Services — shops, banks, schools.",
              },
            ],
            steps: [
              {
                reasoning: "Retail is a service — tertiary sector.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Retail shop",
          },
        },
        {
          id: "cieibs-u3-loc-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Site A has rent of $800/month and transport costs of $500/month. Site B has rent of $1,200/month and transport costs of $200/month. (a) Calculate the total monthly occupancy cost of Site A. (b) Calculate the total monthly occupancy cost of Site B.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 1300, unit: "$" },
              { label: "b", answer: 1400, unit: "$" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Location cost",
                statement: "Total occupancy cost = rent + transport.",
              },
            ],
            steps: [
              {
                reasoning: "Site A = 800 + 500 = $1,300.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Site B = 1200 + 200 = $1,400 — Site A is cheaper overall.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "a) $1,300, b) $1,400",
          },
        },
        {
          id: "cieibs-u3-loc-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain three location factors a retailer should consider when choosing a site.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Retail location",
                statement: "Tertiary businesses prioritise customer access.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Footfall and customer accessibility — proximity to target customers.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Rent and other occupancy costs relative to expected sales.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Footfall, accessibility, rent — any valid factors",
          },
        },
        {
          id: "cieibs-u3-loc-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What are external economies?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Transport links to other cities" },
              { id: "b", text: "Taxes paid to foreign governments" },
              {
                id: "c",
                text: "Cost savings from locating near related businesses",
              },
              { id: "d", text: "Profits sent abroad" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "External economies",
                statement:
                  "Cost savings from locating near related businesses.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Clusters of related firms share skills, suppliers and infrastructure.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Cost savings from locating near related businesses",
          },
        },
        {
          id: "cieibs-u3-loc-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "A firm employs 30 workers paid $11/hour for 40 hours per week. (a) Calculate the weekly payroll. (b) If wages rise to $12/hour, calculate the new weekly payroll.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 13200, unit: "$" },
              { label: "b", answer: 14400, unit: "$" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Payroll",
                statement: "Payroll = workers x rate x hours.",
              },
            ],
            steps: [
              {
                reasoning: "Current = 30 x 11 x 40 = $13,200.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "New = 30 x 12 x 40 = $14,400.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "a) $13,200, b) $14,400",
          },
        },
        {
          id: "cieibs-u3-loc-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain why every location decision involves trade-offs.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Location trade-offs",
                statement: "No site is perfect — factors conflict.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Cheap land often means poor transport access; good access means high rent.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Customer proximity vs cost; grants vs isolation — factors compete.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "Factors conflict — every site has advantages and disadvantages",
          },
        },
        {
          id: "cieibs-u3-loc-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which sector is most likely to locate near raw materials?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Tertiary sector" },
              { id: "b", text: "Quaternary sector" },
              { id: "c", text: "Secondary sector" },
              { id: "d", text: "Primary sector" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Primary location",
                statement:
                  "Extraction businesses locate near deposits/resources.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Mines and farms must be where materials are — primary sector.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Primary sector",
          },
        },
        {
          id: "cieibs-u3-loc-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "A shop has 8,000 visitors per week and 5% make a purchase averaging $25. (a) Calculate weekly sales transactions. (b) Calculate weekly revenue.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 400, unit: "sales" },
              { label: "b", answer: 10000, unit: "$" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Footfall conversion",
                statement:
                  "Sales = visitors x conversion rate; revenue = sales x average spend.",
              },
            ],
            steps: [
              {
                reasoning: "Sales = 8000 x 0.05 = 400 transactions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Revenue = 400 x 25 = $10,000.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "a) 400 sales, b) $10,000",
          },
        },
        {
          id: "cieibs-u3-loc-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A manufacturer is considering relocating its factory from a city centre to a rural site with cheaper land but poorer transport links. Evaluate this decision.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Location evaluation",
                statement:
                  "Weigh cost savings against accessibility and labour issues.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Cheaper land and possibly lower wages reduce costs.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Poorer transport links raise distribution costs and delivery times.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Rural labour supply may be smaller; key staff may leave.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Justified conclusion depending on product type and logistics needs.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Cost savings vs transport and labour risks — justified judgement",
          },
        },
        {
          id: "cieibs-u3-loc-q15",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of the following is an example of a government incentive for locating in a region?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A congestion charge" },
              { id: "b", text: "Higher corporation tax" },
              { id: "c", text: "A regional development grant" },
              { id: "d", text: "Stricter planning rules" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Location incentives",
                statement:
                  "Grants and tax breaks to attract businesses to regions.",
              },
            ],
            steps: [
              {
                reasoning: "Grants reduce setup costs for relocating firms.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Regional development grant",
          },
        },
        {
          id: "cieibs-u3-loc-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "(a) Define primary, secondary and tertiary sectors, accessibility, external economies. (b) What is the primary sector? Give one example. (c) What is the tertiary sector? Give one example. (d) Give three location factors for a secondary sector business. (e) Site A costs $1,300/month total, Site B costs $1,400/month — which is cheaper? (f) Explain one advantage of external economies. (g) Explain why a shop prioritises customer access. (h) Evaluate the best location for a new supermarket in a growing suburb.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Location decisions",
                statement: "Sectors, factors, trade-offs, evaluation.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All five definitions given.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) Extraction; e.g. mining, farming.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) Services; e.g. retail, banking.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(d) Transport links, labour supply, land costs, markets.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(e) Site A at $1,300.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(f) Shared skills, suppliers and infrastructure lower costs.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(g) Shops depend on footfall and visibility to generate sales.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(h) Suburb site near residential growth — justified with factors.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Location factors, sectors and site evaluation.",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieibs-u3-loc-notes",
      title: "Location decisions — revision notes",
      summary: "Sector differences, location factors, site evaluation.",
      sections: [
        {
          heading: "Key skills",
          body: "Primary near materials; tertiary near customers; secondary balances transport, labour and cost. Evaluate with trade-offs, not one factor.",
        },
        {
          heading: "Exam tips",
          body: "Link each factor to the specific business type — 'accessibility' means different things for a mine vs a shop.",
        },
      ],
    },
  ],
};
