import type { Lesson } from "../../../types.ts";

export const lesson42: Lesson = {
  id: "cieigeo-u4-lesson-4-2",
  code: "4-2",
  title: "Human Impacts, Conservation and Economic Geography",
  goal: "I CAN explain human impacts on environments, conservation strategies and patterns of economic activity.",
  standards: [
    "Cambridge IGCSE Geography 0460",
    "Human impacts, conservation, economic geography",
  ],
  vocabulary: [
    {
      term: "Deforestation",
      definition: "Clearing forests for agriculture, logging or development.",
    },
    {
      term: "Sustainable use",
      definition: "Using resources at a rate that allows renewal.",
    },
    {
      term: "Conservation",
      definition: "Protecting and managing environments for the future.",
    },
    {
      term: "Deindustrialisation",
      definition: "Decline of manufacturing employment in a region.",
    },
    {
      term: "Structural change",
      definition: "Shift from primary to secondary to tertiary sectors.",
    },
  ],
  concepts: [
    {
      id: "cieigeo-u4-s2-impacts",
      title: "Human impacts and economic geography",
      skill: "Explain environmental impacts, conservation and economic change.",
      lesson: {
        sections: [
          {
            heading: "Human impacts and conservation",
            body: "Key impacts: deforestation (climate change, soil erosion, biodiversity loss), pollution, overfishing, urban sprawl. Conservation responses include protected areas, sustainable forestry, reforestation, quotas and eco-tourism — balancing use with protection.",
          },
          {
            heading: "Economic geography",
            body: "Economies shift structurally: primary (farming, mining) → secondary (manufacturing) → tertiary (services). LEDCs often remain primary-dependent; MEDCs are tertiary-dominated. Deindustrialisation hits old industrial regions as manufacturing moves to cheaper-labour countries or is automated.",
          },
        ],
        keyFormulas: [
          {
            name: "Sectors",
            statement: "primary = extract; secondary = make; tertiary = serve",
          },
          { name: "Sustainability", statement: "use rate ≤ renewal rate" },
        ],
        workedExample: {
          problem: "Explain two ways deforestation affects the environment.",
          solution:
            "Releases stored carbon (climate change) and removes habitats causing species loss.",
        },
      },
      questions: [
        {
          id: "cieigeo-u4-im-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is deindustrialisation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Moving farms to cities" },
              {
                id: "b",
                text: "Decline of manufacturing employment in a region",
              },
              { id: "c", text: "Building new factories" },
              { id: "d", text: "Growth of manufacturing jobs" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Deindustrialisation",
                statement: "Manufacturing decline.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Deindustrialisation = loss of manufacturing jobs and output.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Decline of manufacturing employment in a region",
          },
        },
        {
          id: "cieigeo-u4-im-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "State two conservation strategies for tropical forests.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Conservation",
                statement: "Protection + sustainable use.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Protected areas/national parks restricting logging.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Sustainable forestry or eco-tourism providing income without destruction.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Protected areas; sustainable forestry/eco-tourism",
          },
        },
        {
          id: "cieigeo-u4-im-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why deindustrialisation causes problems for a region's economy.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Deindustrialisation",
                statement: "Job losses + multiplier effects.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Direct job losses in manufacturing raise unemployment.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Related jobs in services (shops, transport) decline via multiplier effect.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Tax revenue falls while demand for benefits rises — regional decline deepens.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Job losses spread through linked industries; tax base shrinks; regional decline",
          },
        },
        {
          id: "cieigeo-u4-im-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate whether eco-tourism is a sustainable way to protect tropical rainforests.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Evaluation",
                statement: "Weigh benefits against risks.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Benefit: provides income so locals protect rather than clear forest.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Benefit: funds conservation directly through park fees.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Risk: too many visitors damages fragile ecosystems; leakage of profits to foreign firms.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Judgement: sustainable only if visitor numbers are capped and benefits stay local.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Works if capped and locally owned; risks damage and leakage otherwise",
          },
        },
        {
          id: "cieigeo-u4-im-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does 'sustainable use' of a resource mean?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Using as much as possible as quickly as possible",
              },
              { id: "b", text: "Never using the resource at all" },
              { id: "c", text: "Using each resource only once" },
              {
                id: "d",
                text: "Using the resource at a rate that allows it to renew",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Sustainable use",
                statement: "Use rate ≤ renewal rate.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Sustainable use keeps use within the resource's renewal capacity.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Using the resource at a rate that allows it to renew",
          },
        },
        {
          id: "cieigeo-u4-im-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which economic activity belongs to the tertiary sector?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Car manufacturing" },
              { id: "b", text: "Coal mining" },
              { id: "c", text: "Banking and insurance" },
              { id: "d", text: "Wheat farming" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Sectors",
                statement:
                  "Primary = extract; secondary = make; tertiary = serve.",
              },
            ],
            steps: [
              {
                reasoning: "Banking and insurance provide services, not goods.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Banking and insurance",
          },
        },
        {
          id: "cieigeo-u4-im-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "A country has a workforce of 240 000. Employment is 30% primary, 45% secondary and 25% tertiary. Calculate (a) the number of primary-sector workers and (b) the number of tertiary-sector workers.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "(a) Primary-sector workers",
                answer: 72000,
                unit: "workers",
              },
              {
                label: "(b) Tertiary-sector workers",
                answer: 60000,
                unit: "workers",
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Sector shares",
                statement: "Sector workers = share % × total workforce.",
              },
            ],
            steps: [
              {
                reasoning: "240 000 × 0.30 = 72 000 primary workers.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "240 000 × 0.25 = 60 000 tertiary workers.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "72 000; 60 000",
          },
        },
        {
          id: "cieigeo-u4-im-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is the main reason manufacturing moves away from old industrial regions?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Workers prefer to return to farming",
              },
              {
                id: "b",
                text: "Raw materials have run out completely",
              },
              {
                id: "c",
                text: "Governments have banned all factories",
              },
              {
                id: "d",
                text: "Lower labour costs and automation abroad",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Deindustrialisation",
                statement:
                  "Manufacturing relocates to cheaper labour or is automated.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Firms chase lower costs or replace labour with machines.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Lower labour costs and automation abroad",
          },
        },
        {
          id: "cieigeo-u4-im-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "A fishery has a total allowable catch of 12 000 tonnes per year, but boats catch 15 000 tonnes. Calculate (a) the amount of overfishing and (b) the percentage by which the catch exceeds the limit.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "(a) Overfishing amount (tonnes)",
                answer: 3000,
                unit: "tonnes",
              },
              {
                label: "(b) Percentage above limit (%)",
                answer: 25,
                unit: "%",
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Overfishing",
                statement: "Excess = catch − limit; % = excess ÷ limit × 100.",
              },
            ],
            steps: [
              {
                reasoning: "15 000 − 12 000 = 3 000 tonnes overfished.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "3 000 ÷ 12 000 × 100 = 25% above the limit.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "3 000 tonnes; 25%",
          },
        },
        {
          id: "cieigeo-u4-im-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is a direct environmental impact of deforestation?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Loss of habitat and soil erosion",
              },
              { id: "b", text: "Guaranteed higher rainfall" },
              {
                id: "c",
                text: "Increased soil fertility",
              },
              { id: "d", text: "Lower sea levels" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Deforestation",
                statement:
                  "Clearing forests causes erosion, habitat loss, carbon release.",
              },
            ],
            steps: [
              {
                reasoning: "Removing trees exposes soil and destroys habitats.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Loss of habitat and soil erosion",
          },
        },
        {
          id: "cieigeo-u4-im-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which conservation measure is most directly aimed at preventing overfishing?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Fishing quotas and catch limits" },
              { id: "b", text: "Eco-labels on vehicles" },
              { id: "c", text: "Urban greenbelts" },
              { id: "d", text: "Reforestation" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Conservation",
                statement: "Match the measure to the threat.",
              },
            ],
            steps: [
              {
                reasoning: "Quotas cap the catch, controlling exploitation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Fishing quotas and catch limits",
          },
        },
        {
          id: "cieigeo-u4-im-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "In a region, manufacturing employed 18% of a 500 000-strong workforce, and this fell to 9%. Calculate (a) the number of manufacturing jobs lost and (b) the number still employed in manufacturing.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "(a) Jobs lost",
                answer: 45000,
                unit: "jobs",
              },
              {
                label: "(b) Jobs remaining",
                answer: 45000,
                unit: "jobs",
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Deindustrialisation",
                statement: "Jobs lost = (old % − new %) × workforce.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(18% − 9%) × 500 000 = 9% × 500 000 = 45 000 jobs lost.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "9% × 500 000 = 45 000 jobs still in manufacturing.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "45 000; 45 000",
          },
        },
        {
          id: "cieigeo-u4-im-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is urban sprawl?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Shrinking of city populations" },
              { id: "b", text: "Moving residents to the countryside" },
              {
                id: "c",
                text: "Growth of city boundaries onto surrounding land",
              },
              { id: "d", text: "Building only skyscrapers" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Urban sprawl",
                statement: "Unplanned outward growth of cities.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Sprawl = low-density expansion into farmland and green space.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Growth of city boundaries onto surrounding land",
          },
        },
        {
          id: "cieigeo-u4-im-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Why do many less economically developed countries remain dependent on the primary sector?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Limited capital, technology and markets keep them extractive",
              },
              {
                id: "b",
                text: "Tertiary jobs are banned by law",
              },
              {
                id: "c",
                text: "They deliberately choose to avoid industry",
              },
              {
                id: "d",
                text: "They already have too many factories",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Structural change",
                statement:
                  "Development requires capital, technology and markets.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Without investment and skills, economies stay resource-based.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Limited capital, technology and markets keep them extractive",
          },
        },
        {
          id: "cieigeo-u4-im-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate whether fishing quotas are an effective conservation strategy.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Evaluation",
                statement: "Weigh benefits against risks, then judge.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Benefit: caps total catch so fish stocks can recover.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Benefit: directly targets overfishing, the main threat.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Risk: enforcement is difficult and illegal fishing undermines quotas.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Judgement: effective only where monitored and paired with protected areas.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Effective with enforcement; weak where illegal fishing is unchecked",
          },
        },
        {
          id: "cieigeo-u4-im-q16",
          difficulty: "core",
          totalMarks: 2,
          stem: "A reforestation programme plants 250 000 trees each year with a target of 2 000 000 trees. Calculate (a) the number of trees planted after 5 years and (b) the number still needed to reach the target.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "(a) Trees planted after 5 years",
                answer: 1250000,
                unit: "trees",
              },
              {
                label: "(b) Trees still needed",
                answer: 750000,
                unit: "trees",
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Reforestation",
                statement:
                  "Total planted = annual rate × years; remaining = target − planted.",
              },
            ],
            steps: [
              {
                reasoning: "250 000 × 5 = 1 250 000 trees planted.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "2 000 000 − 1 250 000 = 750 000 trees still needed.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "1 250 000; 750 000",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieigeo-u4-impacts-notes",
      title: "Impacts and economic geography — revision notes",
      summary:
        "Deforestation, conservation, deindustrialisation, structural change.",
      sections: [
        {
          heading: "Key skills",
          body: "Link each impact to a mechanism (jobs, income, environment); evaluate conservation by weighing protection vs livelihood needs.",
        },
        {
          heading: "Exam tips",
          body: "For evaluation questions, always reach a judgement conditioned on circumstances — 'works if...' scores higher than blanket statements.",
        },
      ],
    },
  ],
};
