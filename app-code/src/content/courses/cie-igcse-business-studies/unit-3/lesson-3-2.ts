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
              { id: "a", text: "Primary" },
              { id: "b", text: "Secondary" },
              { id: "c", text: "Tertiary" },
              { id: "d", text: "Quaternary" },
            ],
            correctChoiceId: "a",
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
