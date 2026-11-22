import type { Lesson } from "../../../types.ts";

export const lesson315: Lesson = {
  id: "cieigeo-u2-lesson-2-5",
  code: "2-5",
  title: "Migration and Population Dynamics",
  goal: "I CAN explain migration types, causes and impacts.",
  standards: ["Cambridge IGCSE Geography 0460", "Paper 2: migration"],

  vocabulary: [
    { term: "Migration", definition: "Movement of people between areas." },
    { term: "Emigration", definition: "Leaving one's country." },
    { term: "Immigration", definition: "Moving into a country." },
    { term: "Push factors", definition: "Reasons for leaving." },
    { term: "Pull factors", definition: "Reasons for moving to destination." },
    {
      term: "Refugee",
      definition: "Person forced to flee due to persecution/conflict.",
    },
  ],
  concepts: [
    {
      id: "cieigeo-u2-s5-mig",
      title: "Migration",
      skill: "Understand migration causes and impacts.",
      lesson: {
        sections: [
          {
            heading: "Migration types",
            body: "Internal (within country), international (between countries), forced (refugees), economic (work), retirement, family reunion.",
          },
          {
            heading: "Push/pull factors",
            body: "Push: poverty, conflict, unemployment, persecution. Pull: jobs, higher wages, safety, better services, family.",
          },
          {
            heading: "Impacts",
            body: "Sending country: brain drain, remittances. Receiving country: labour supply, cultural diversity, pressure on services/housing.",
          },
        ],
        keyFormulas: [
          { name: "Push", statement: "reasons for leaving" },
          { name: "Pull", statement: "reasons for moving" },
          { name: "Refugee", statement: "forced to flee" },
        ],
        workedExample: {
          problem:
            "A person moves from rural village to city for work. What type of migration?",
          solution:
            "Internal economic migration — push (rural poverty) + pull (urban jobs).",
        },
      },
      questions: [
        {
          id: "cieigeo-u2-mg-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is migration?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Movement of goods",
              },
              {
                id: "b",
                text: "A weather pattern",
              },
              {
                id: "c",
                text: "A landform",
              },
              {
                id: "d",
                text: "Movement of people between areas",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Migration",
                statement: "People movement.",
              },
            ],
            steps: [
              {
                reasoning: "Migration = movement of people.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "People movement",
          },
        },
        {
          id: "cieigeo-u2-mg-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the difference between push and pull factors?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Push/pull",
                statement: "Leave vs attract.",
              },
            ],
            steps: [
              {
                reasoning: "Push = reasons for leaving.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Pull = reasons for moving to destination.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Leave vs attract",
          },
        },
        {
          id: "cieigeo-u2-mg-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What are impacts of migration on the sending country?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Migration impacts",
                statement: "Sending country effects.",
              },
            ],
            steps: [
              {
                reasoning: "Brain drain — loss of skilled workers.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Remittances — money sent back.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Reduced population pressure.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Brain drain, remittances",
          },
        },
        {
          id: "cieigeo-u2-mg-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define migration, emigration, immigration, push factors, pull factors, refugee. (b) What is migration? (c) What is emigration? (d) What are push factors? Give 2 examples. (e) What are pull factors? Give 2 examples. (f) What is a refugee? (g) What are impacts on sending country? (h) Evaluate whether migration benefits or harms economies.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Migration",
                statement: "Types, causes, impacts.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All six definitions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) People movement.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) Leaving one's country.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(d) Two valid push examples.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(e) Two valid pull examples.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(f) Forced to flee persecution/conflict.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(g) Brain drain, remittances.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(h) Balanced evaluation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Migration causes and impacts.",
          },
        },
        {
          id: "cieigeo-u2-mg-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A refugee is best defined as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A student moving for one term" },
              {
                id: "b",
                text: "A person forced to flee because of persecution or conflict",
              },
              { id: "c", text: "A tourist visiting another country" },
              { id: "d", text: "A worker seeking a higher wage" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Refugee",
                statement: "Person forced to flee persecution or conflict.",
              },
            ],
            steps: [
              {
                reasoning: "The key feature is forced movement for safety.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Person forced to flee persecution or conflict",
          },
        },
        {
          id: "cieigeo-u2-mg-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A country of 5 million people receives 4 500 immigrants and loses 1 500 emigrants. (a) Calculate net migration. (b) Calculate net migration per 1 000 people.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "(a) Net migration (people)",
                answer: 3000,
                unit: "people",
              },
              {
                label: "(b) Net migration per 1 000",
                answer: 0.6,
                unit: "per 1 000",
                tolerance: 0.01,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Net migration",
                statement:
                  "Immigrants - emigrants; rate = net ÷ population x 1 000.",
              },
            ],
            steps: [
              {
                reasoning: "(a) 4 500 - 1 500 = 3 000 people.",
                working: "4500 - 1500 = 3000",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) 3 000 ÷ 5 000 000 x 1 000 = 0.6 per 1 000.",
                working: "3000 / 5000000 \\times 1000 = 0.6",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) 3 000 (b) 0.6 per 1 000",
          },
        },
        {
          id: "cieigeo-u2-mg-q7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Distinguish between emigration and immigration.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Migration terms",
                statement: "Emigration is leaving; immigration is arriving.",
              },
            ],
            steps: [
              {
                reasoning: "Emigration is movement out of a country.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Immigration is movement into a country.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Leaving versus entering a country",
          },
        },
        {
          id: "cieigeo-u2-mg-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is a push factor encouraging emigration?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Family already living abroad" },
              { id: "b", text: "Good hospitals at the destination" },
              {
                id: "c",
                text: "High unemployment and poverty in the home country",
              },
              { id: "d", text: "Higher wages abroad" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Push factors",
                statement: "Reasons for leaving the home area.",
              },
            ],
            steps: [
              {
                reasoning: "Unemployment and poverty push people to leave.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Unemployment and poverty",
          },
        },
        {
          id: "cieigeo-u2-mg-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "A country has 1.25 million emigrants abroad who send home $250 million in remittances. (a) Calculate the average remittance per emigrant. (b) If emigrants fall to 1 million and remittances stay at $250 million, calculate the new average.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Original average (USD)", answer: 200, unit: "USD" },
              { label: "(b) New average (USD)", answer: 250, unit: "USD" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Average",
                statement: "Total ÷ number.",
              },
            ],
            steps: [
              {
                reasoning: "(a) 250 000 000 ÷ 1 250 000 = $200.",
                working: "250000000 / 1250000 = 200",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) 250 000 000 ÷ 1 000 000 = $250.",
                working: "250000000 / 1000000 = 250",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) $200 (b) $250",
          },
        },
        {
          id: "cieigeo-u2-mg-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain three impacts of immigration on the receiving country.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Receiving impacts",
                statement: "Immigration affects labour, services and culture.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Immigrants can expand the labour force and fill job shortages.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "They may increase demand for housing, schools and healthcare.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Cultural diversity can enrich society but may create social tensions.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Labour supply, service pressure and cultural change",
          },
        },
        {
          id: "cieigeo-u2-mg-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "Brain drain refers to:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "The loss of skilled workers through emigration",
              },
              { id: "b", text: "Movement of refugees" },
              { id: "c", text: "Growth of urban population" },
              { id: "d", text: "Money sent home by migrants" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Brain drain",
                statement: "Loss of skilled people through emigration.",
              },
            ],
            steps: [
              {
                reasoning:
                  "It describes skilled workers leaving the home country.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Loss of skilled workers",
          },
        },
        {
          id: "cieigeo-u2-mg-q12",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the economic effects of emigration on a sending country.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "Emigration impacts",
                statement: "Loss of workers versus remittance gains.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Negative: skilled workers leave, reducing labour supply and tax revenue.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Negative: key services such as health and education may lose staff.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Positive: remittances support families, education and investment.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Conclusion: effects depend on which workers leave and how remittances are used.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Emigration causes brain drain but remittances can help",
          },
        },
        {
          id: "cieigeo-u2-mg-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A refugee camp grows from 20 000 to 35 000 people in an area of 2.5 km². (a) Calculate the percentage increase. (b) Calculate the new population density.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Percentage increase (%)", answer: 75, unit: "%" },
              {
                label: "(b) New density (people/km²)",
                answer: 14000,
                unit: "people/km^2",
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Growth and density",
                statement:
                  "% = change ÷ original x 100; density = population ÷ area.",
              },
            ],
            steps: [
              {
                reasoning: "(a) 15 000 ÷ 20 000 x 100 = 75%.",
                working: "15000 / 20000 \\times 100 = 75",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) 35 000 ÷ 2.5 = 14 000 people/km².",
                working: "35000 / 2.5 = 14000",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) 75% (b) 14 000 people/km²",
          },
        },
        {
          id: "cieigeo-u2-mg-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Compare the causes and impacts of forced migration with economic migration.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "Migration types",
                statement:
                  "Forced and economic migration differ in cause and choice.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Forced migration is driven by conflict, persecution or disaster.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Economic migration is driven by jobs, wages and living standards.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Forced migrants may need urgent protection; economic migrants often plan for work.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Both can strain or benefit receiving services depending on numbers and planning.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Forced migration is safety-driven; economic migration is opportunity-driven",
          },
        },
        {
          id: "cieigeo-u2-mg-q15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which statement about remittances is most accurate?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They are wages paid only to tourists" },
              {
                id: "b",
                text: "They are taxes paid to the destination government",
              },
              {
                id: "c",
                text: "They are money sent by migrants to family or communities in the home country",
              },
              { id: "d", text: "They eliminate all migration costs" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Remittances",
                statement: "Money sent home by migrants.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Remittances support households and can boost local economies.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Money sent home by migrants",
          },
        },
        {
          id: "cieigeo-u2-mg-q16",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define migration, emigration, immigration and refugee. (b) Give two push factors. (c) Give two pull factors. (d) Explain brain drain. (e) Explain remittances. (f) Give two impacts on the sending country. (g) Give two impacts on the receiving country. (h) Evaluate whether migration benefits economies overall.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Migration",
                statement: "Types, causes and impacts.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Migration = people movement; emigration = leaving; immigration = entering; refugee = forced to flee.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) e.g. poverty and conflict.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) e.g. jobs and safety.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(d) Skilled workers leave, weakening services and economy.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(e) Money sent home supports families and investment.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(f) e.g. brain drain and remittances.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(g) e.g. labour supply and pressure on services.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(h) Balanced judgement: benefits depend on skills, planning and regulation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Migration causes and impacts.",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieigeo-u2-mg-notes",
      title: "Migration — notes",
      summary:
        "Push=leave reasons; pull=attract reasons. Impacts: brain drain, remittances, labour supply.",
      sections: [
        {
          heading: "Key idea",
          body: "Migration driven by economic, social, political factors.",
        },
        {
          heading: "Impacts",
          body: "Both sending and receiving countries affected — mixed outcomes.",
        },
      ],
    },
  ],
};
