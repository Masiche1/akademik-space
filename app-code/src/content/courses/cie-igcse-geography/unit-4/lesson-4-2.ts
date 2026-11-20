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
              { id: "a", text: "Growth of manufacturing jobs" },
              {
                id: "b",
                text: "Decline of manufacturing employment in a region",
              },
              { id: "c", text: "Building new factories" },
              { id: "d", text: "Moving farms to cities" },
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
