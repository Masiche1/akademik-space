import type { Lesson } from "../../../types.ts";

export const lesson41: Lesson = {
  id: "cieiec-u4-lesson-4-1",
  code: "4-1",
  title: "Data Response and Structured Question Technique",
  goal: "I CAN extract and apply economic data to structured questions at IGCSE standard.",
  standards: [
    "Cambridge IGCSE Economics 0455",
    "Paper technique: data response, structured questions",
  ],
  vocabulary: [
    {
      term: "Data response",
      definition:
        "Questions based on stimulus material — tables, graphs, extracts.",
    },
    { term: "Stimulus", definition: "The case material a question refers to." },
    {
      term: "Extract",
      definition: "Written passage providing context for questions.",
    },
    {
      term: "Application",
      definition: "Using theory to explain the specific stimulus.",
    },
    {
      term: "Evaluation",
      definition: "Weighing evidence to reach a judgement.",
    },
  ],
  concepts: [
    {
      id: "cieiec-u4-s1-data",
      title: "Data response technique",
      skill: "Apply economic theory to stimulus data and extracts.",
      lesson: {
        sections: [
          {
            heading: "Reading the stimulus",
            body: "IGCSE Economics papers give tables, graphs and extracts. Read the stimulus FIRST, identify the economic concept it illustrates, then answer — never answer from memory alone. Quote specific figures or phrases from the stimulus to show application.",
          },
          {
            heading: "Structured answers",
            body: "Most questions chain: define → apply to stimulus → evaluate. A 4-mark 'explain' needs mechanism + application; an 8-mark 'evaluate/discuss' needs balanced argument + judgement. Marks indicate depth — plan points before writing.",
          },
        ],
        keyFormulas: [
          {
            name: "Answer chain",
            statement: "concept + stimulus detail + evaluation",
          },
          {
            name: "Marks = depth",
            statement: "4 marks ≈ 2 explained points; 8+ ≈ balanced argument",
          },
        ],
        workedExample: {
          problem:
            "Stimulus: 'A country removes subsidies on fuel.' Question: Explain one likely effect on the economy.",
          solution:
            "Removing subsidies raises fuel prices → production and transport costs rise → prices increase and demand may fall (inflationary pressure).",
        },
      },
      questions: [
        {
          id: "cieiec-u4-dr-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What should you do FIRST when a data-response question gives a table or graph?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Skip to the last question" },
              { id: "b", text: "Start writing immediately" },
              { id: "c", text: "Read and interpret the stimulus carefully" },
              { id: "d", text: "Memorise definitions" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Stimulus first",
                statement: "Data guides the answer.",
              },
            ],
            steps: [
              {
                reasoning: "The stimulus defines what the question tests.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Read and interpret the stimulus carefully",
          },
        },
        {
          id: "cieiec-u4-dr-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why is quoting a specific figure from a data-response stimulus better than writing generically?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Application",
                statement: "Stimulus detail proves application.",
              },
            ],
            steps: [
              {
                reasoning:
                  "It shows the answer is tailored to the case, not memorised theory.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Examiners award application marks for using the given data.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Proves application to the specific case; earns application marks",
          },
        },
        {
          id: "cieiec-u4-dr-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Stimulus: 'Unemployment in Country X rose from 5% to 9% in one year.' Explain two possible economic causes using economic theory.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Theory application",
                statement: "Link concept to stimulus data.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Falling aggregate demand — e.g. recession or reduced consumer spending reduces output and jobs.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Structural change — automation or declining industries make workers' skills obsolete.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Both link theory to the 5%→9% rise in the stimulus.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Demand fall or structural unemployment — applied to the stimulus figures",
          },
        },
        {
          id: "cieiec-u4-dr-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A question asks: 'Evaluate the likely impact of a minimum wage rise.' Outline a four-point answer structure that would score highly.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Evaluation structure",
                statement: "Benefits → costs → judgement.",
              },
            ],
            steps: [
              {
                reasoning:
                  "P1: benefit — reduces poverty/income inequality for low-wage workers.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "P2: cost — may reduce employment if firms can't afford higher wages.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "P3: depends on context — impact varies with market structure and wage level set.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "P4: judgement — 'likely beneficial if set moderately; risky if above productivity levels'.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Benefits → costs → context-dependence → qualified judgement",
          },
        },
        {
          id: "cieiec-u4-dr-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In a data-response question, what does 'application' mean?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Writing about a different economy" },
              { id: "b", text: "Using the stimulus material to support your answer" },
              { id: "c", text: "Listing all definitions" },
              { id: "d", text: "Rewriting the question" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Application",
                statement: "Stimulus detail supports theory.",
              },
            ],
            steps: [
              {
                reasoning: "Application means using the given data, not generic theory.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Using the stimulus material to support your answer",
          },
        },
        {
          id: "cieiec-u4-dr-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "A table shows a country's inflation rate rising from 2% to 6%. Name one piece of economic theory you could use to explain this and one question you could ask about the stimulus.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Stimulus reading",
                statement: "Data points to the concept tested.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Theory: demand-pull inflation — rising aggregate demand pushes prices up.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Stimulus use: ask what drove demand — e.g. 'what caused aggregate demand to rise?' or check cost-push factors.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Demand-pull theory applied; probe what caused the demand rise",
          },
        },
        {
          id: "cieiec-u4-dr-q7",
          difficulty: "core",
          totalMarks: 3,
          stem: "Stimulus: 'A government introduces a 20% tariff on imported steel.' Explain two likely effects on the domestic economy using economic theory.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Theory application",
                statement: "Link concept to stimulus data.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Protects domestic steel producers — higher-priced imports make local steel more competitive, raising output and jobs in that industry.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Raises prices for steel-using industries (cars, construction), increasing costs and possibly reducing their competitiveness and employment.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Both effects are applied to the 20% tariff on imported steel in the stimulus.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Protects domestic steel jobs but raises costs for steel users — applied to the tariff stimulus",
          },
        },
        {
          id: "cieiec-u4-dr-q8",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A question asks: 'Discuss whether a devaluation of the currency will reduce a trade deficit.' Outline a four-point answer structure that would score highly.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Evaluation structure",
                statement: "Benefits → costs → judgement.",
              },
            ],
            steps: [
              {
                reasoning:
                  "P1: benefit — cheaper exports and dearer imports should improve the trade balance via the Marshall-Lerner condition.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "P2: cost/limit — if demand for imports is price-inelastic, the deficit may worsen (J-curve effect in the short run).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "P3: depends on context — effectiveness varies with export/import elasticities and the economy's structure.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "P4: judgement — 'likely to help over time if elasticities are favourable; may worsen the deficit short-term'.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Marshall-Lerner benefit → J-curve risk → elasticity dependence → qualified judgement",
          },
        },
        {
          id: "cieiec-u4-dr-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the main purpose of an 'extract' in an IGCSE Economics data-response question?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To replace all theory questions" },
              { id: "b", text: "To give the answers away" },
              { id: "c", text: "To provide context and data for the questions" },
              { id: "d", text: "To test spelling" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Stimulus first",
                statement: "Extracts provide context.",
              },
            ],
            steps: [
              {
                reasoning: "The extract supplies the case material the questions refer to.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "To provide context and data for the questions",
          },
        },
        {
          id: "cieiec-u4-dr-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "A graph shows a country's production possibility curve shifting outward. State what this indicates and one reason it might have happened, using the stimulus data.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Graph reading",
                statement: "Curve shifts signal growth.",
              },
            ],
            steps: [
              {
                reasoning:
                  "An outward PPC shift indicates economic growth — the economy can produce more of both goods.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Possible cause from stimulus: improved technology, more resources, or better productivity — e.g. 'new machinery raised output of both goods'.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Economic growth; caused by better technology, resources or productivity",
          },
        },
        {
          id: "cieiec-u4-dr-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "Stimulus: 'A developing country receives foreign direct investment (FDI) of $2 billion.' Explain two likely economic benefits of FDI for the host country.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Theory application",
                statement: "Link concept to stimulus data.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Creates jobs — new factories and offices employ local workers, reducing unemployment.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Transfers technology and skills — foreign firms bring know-how and training that raise productivity.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Both benefits applied to the $2 billion FDI figure in the stimulus.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Job creation and technology transfer — applied to the FDI stimulus",
          },
        },
        {
          id: "cieiec-u4-dr-q12",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A question asks: 'Evaluate the likely effects of a government raising income tax rates.' Outline a four-point answer structure that would score highly.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Evaluation structure",
                statement: "Benefits → costs → judgement.",
              },
            ],
            steps: [
              {
                reasoning:
                  "P1: benefit — raises revenue for public services or to reduce a budget deficit.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "P2: cost — reduces disposable income, so consumption and aggregate demand may fall, hurting growth and jobs.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "P3: depends on context — impact varies with the tax rate level, progressivity and how revenue is spent.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "P4: judgement — 'useful for deficit reduction but risks slowing demand — effectiveness depends on rate and spending'.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Revenue benefit → demand cost → context-dependence → qualified judgement",
          },
        },
        {
          id: "cieiec-u4-dr-q13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is the BEST way to start a 4-mark 'explain' question in a data-response section?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Copy the question" },
              { id: "b", text: "Give a personal opinion" },
              { id: "c", text: "Define the key term" },
              { id: "d", text: "Describe the graph colours" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Structured answers",
                statement: "Define then apply.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Defining the key economic term shows knowledge before applying it to the stimulus.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Define the key term",
          },
        },
        {
          id: "cieiec-u4-dr-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "A table shows exports of $50 billion and imports of $70 billion. Calculate the trade balance and state what it indicates.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Stimulus reading",
                statement: "Compute and interpret data.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Trade balance = exports − imports = $50bn − $70bn = −$20bn (a deficit).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "A negative balance indicates the country imports more than it exports — a trade deficit.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "−$20 billion — a trade deficit",
          },
        },
        {
          id: "cieiec-u4-dr-q15",
          difficulty: "core",
          totalMarks: 3,
          stem: "Stimulus: 'A government cuts subsidies to public transport, and fares rise.' Explain two likely economic effects on households and the economy.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Theory application",
                statement: "Link concept to stimulus data.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Households face higher travel costs — reduced disposable income, especially for low-income commuters.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Some passengers switch to cars, worsening congestion and pollution; others may cut spending, reducing aggregate demand.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Both effects applied to the subsidy cut and fare rise described in the stimulus.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Higher costs for households and possible demand/congestion effects — applied to the stimulus",
          },
        },
        {
          id: "cieiec-u4-dr-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A question asks: 'To what extent should a government intervene in markets?' Outline a four-point answer structure that would score highly.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Evaluation structure",
                statement: "Benefits → costs → judgement.",
              },
            ],
            steps: [
              {
                reasoning:
                  "P1: case for intervention — corrects market failures like pollution, monopoly power and under-provision of public goods.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "P2: case against — government failure, costly bureaucracy and distorted incentives can make outcomes worse.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "P3: depends on context — degree of market failure and government capacity determine whether intervention helps.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "P4: judgement — 'intervention is justified where market failure is severe, but limited where markets work well'.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Market-failure case → government-failure case → context-dependence → qualified judgement",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieiec-u4-data-notes",
      title: "Data response — revision notes",
      summary: "Stimulus first, application, balanced evaluation.",
      sections: [
        {
          heading: "Key skills",
          body: "Read stimulus before answering; quote figures; chain concept→application→evaluation.",
        },
        {
          heading: "Exam tips",
          body: "Underline key numbers and terms in the stimulus; every point should reference it.",
        },
      ],
    },
  ],
};
