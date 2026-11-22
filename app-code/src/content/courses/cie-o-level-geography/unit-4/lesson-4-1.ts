import type { Lesson } from "../../../types.ts";

export const lesson41: Lesson = {
  id: "oleg-u4-lesson-4-1",
  code: "4-1",
  title: "Changing Economies",
  goal: "I CAN describe economic sectors, trade and how economies change over time.",
  standards: ["2217: Changing economies"],
  vocabulary: [
    {
      term: "Primary sector",
      definition:
        "Economy extracting raw materials (farming, mining, fishing).",
    },
    {
      term: "Secondary sector",
      definition: "Economy manufacturing/processing goods.",
    },
    { term: "Tertiary sector", definition: "Economy providing services." },
    {
      term: "Quaternary sector",
      definition: "Economy based on knowledge/information services.",
    },
    {
      term: "Globalisation",
      definition: "Increasing interconnectedness of world economies.",
    },
    {
      term: "Transnational corporation",
      definition: "Company operating in multiple countries.",
    },
  ],
  concepts: [
    {
      id: "oleg-u4-sectors",
      title: "Economic sectors and structural change",
      skill: "Describe the four economic sectors and how economies change.",
      lesson: {
        sections: [
          {
            heading: "The four sectors",
            body: "Primary: extract raw materials — farming, fishing, mining, forestry. Secondary: manufacture/process — factories, construction. Tertiary: services — retail, transport, education, health. Quaternary: knowledge/information — IT, research, finance.",
          },
          {
            heading: "Structural change",
            body: "As countries develop, employment shifts from primary → secondary → tertiary/quaternary (Clark-Fisher model). LEDCs depend on primary sector; MEDCs/LEDCs on tertiary. Deindustrialisation: loss of manufacturing jobs in developed economies.",
          },
          {
            heading: "Why economies change",
            body: "Technology reduces primary/secondary jobs; rising incomes increase demand for services; globalisation moves manufacturing to cheaper countries.",
          },
        ],
        keyFormulas: [
          {
            name: "Sectors",
            statement:
              "Primary=extract; Secondary=manufacture; Tertiary=services; Quaternary=knowledge.",
          },
        ],
        workedExample: {
          problem: "Why do developing countries rely on the primary sector?",
          solution:
            "Limited capital/technology for industry; agriculture and extraction provide most employment and exports.",
        },
      },
      questions: [
        {
          id: "oleg-u4-sx-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which sector includes farming and mining?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Tertiary" },
              { id: "b", text: "Quaternary" },
              { id: "c", text: "Primary" },
              { id: "d", text: "Secondary" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Primary sector",
                statement: "Raw material extraction.",
              },
            ],
            steps: [
              {
                reasoning: "Farming/mining = primary.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(c)** Primary",
            commonErrors: ["Confusing with secondary."],
          },
        },
        {
          id: "oleg-u4-sx-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is deindustrialisation?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Deindustrialisation",
                statement: "Loss of manufacturing jobs.",
              },
            ],
            steps: [
              {
                reasoning: "Manufacturing declines.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Jobs shift to services.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Decline of manufacturing sector with jobs moving to services.",
            commonErrors: ["Saying industry grows."],
          },
        },
        {
          id: "oleg-u4-sx-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how employment changes as a country develops.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Structural change",
                statement: "Primary→secondary→tertiary shift.",
              },
            ],
            steps: [
              {
                reasoning: "Starts primary-dominated.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Shifts to secondary then tertiary.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Reasons: tech, incomes, globalisation.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Employment shifts primary→secondary→tertiary as economies develop.",
            commonErrors: ["No sequence given."],
          },
        },
        {
          id: "oleg-u4-sx-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Economic sectors.",
          parts: [
            { label: "a", prompt: "Define all four sectors.", marks: 4 },
            { label: "b", prompt: "Structural change?", marks: 2 },
            { label: "c", prompt: "Deindustrialisation?", marks: 1 },
            { label: "d", prompt: "Why does change happen?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Sectors",
                statement: "Four sectors+change+causes.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Primary correct.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Secondary correct.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Tertiary correct.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Quaternary correct.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Primary→tertiary shift.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "With development.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Manufacturing declines.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Tech/incomes/globalisation.",
                marks: 1,
                markCode: "AO1",
              },
              { part: "d", reasoning: "Explained.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer:
              "(a) sectors (b) change (c) deindustrialisation (d) causes",
          },
        },
        {
          id: "oleg-u4-sx-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which activity belongs to the quaternary sector?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Software development" },
              { id: "b", text: "House building" },
              { id: "c", text: "Coal mining" },
              { id: "d", text: "Supermarket retail" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Quaternary sector",
                statement: "Knowledge/information services.",
              },
            ],
            steps: [
              {
                reasoning: "Software = quaternary.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Software development",
            commonErrors: ["Confusing with tertiary."],
          },
        },
        {
          id: "oleg-u4-sx-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "Give two examples of tertiary sector jobs.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Tertiary sector",
                statement: "Service provision.",
              },
            ],
            steps: [
              {
                reasoning: "Any two services.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Correct examples.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Any two: teaching, nursing, retail, transport, banking, tourism.",
            commonErrors: ["Giving manufacturing examples."],
          },
        },
        {
          id: "oleg-u4-sx-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "In the Clark-Fisher model, employment in developed economies shifts towards which sectors?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Tertiary and quaternary" },
              { id: "b", text: "Primary and secondary" },
              { id: "c", text: "Secondary only" },
              { id: "d", text: "Primary only" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Clark-Fisher model",
                statement: "Primary→secondary→tertiary shift.",
              },
            ],
            steps: [
              {
                reasoning: "Developed = tertiary/quaternary.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Tertiary and quaternary",
            commonErrors: ["Reversing the model."],
          },
        },
        {
          id: "oleg-u4-sx-q8",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why many developing countries rely on the primary sector.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Primary dependence",
                statement: "Limited capital/tech; agriculture exports.",
              },
            ],
            steps: [
              {
                reasoning: "Limited capital/technology.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Agriculture provides most jobs.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Primary products are main exports.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Limited capital and technology mean farming/mining dominate jobs and exports.",
            commonErrors: ["No reasons given."],
          },
        },
        {
          id: "oleg-u4-sx-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Describe the typical sequence of sectoral employment change as a country develops.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Structural change",
                statement: "Primary→secondary→tertiary.",
              },
            ],
            steps: [
              {
                reasoning: "Starts primary-dominated.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Ends tertiary/quaternary-dominated.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Employment moves from primary through secondary to tertiary/quaternary.",
            commonErrors: ["Skipping secondary."],
          },
        },
        {
          id: "oleg-u4-sx-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Teachers and nurses work in which sector?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Quaternary" },
              { id: "b", text: "Secondary" },
              { id: "c", text: "Tertiary" },
              { id: "d", text: "Primary" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Tertiary sector",
                statement: "Services such as education and health.",
              },
            ],
            steps: [
              { reasoning: "Education/health = tertiary.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(c)** Tertiary",
            commonErrors: ["Calling services primary."],
          },
        },
        {
          id: "oleg-u4-sx-q11",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain two reasons why manufacturing jobs decline in developed countries.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Deindustrialisation causes",
                statement: "Automation, cheaper labour abroad, changing demand.",
              },
            ],
            steps: [
              {
                reasoning: "Automation reduces factory jobs.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Production moves to cheaper countries.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Consumers buy more services.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Two reasons explained.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Automation and cheaper foreign labour reduce manufacturing employment.",
            commonErrors: ["Only one reason."],
          },
        },
        {
          id: "oleg-u4-sx-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "A country has 65% of workers in the primary sector. What does this suggest about its level of development? Explain.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Sectoral employment",
                statement: "High primary share = less developed.",
              },
            ],
            steps: [
              {
                reasoning: "High primary share.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Suggests less developed economy.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Reason: limited industry/services.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "It is a less developed economy — most workers extract raw materials.",
            commonErrors: ["Saying it is highly developed."],
          },
        },
        {
          id: "oleg-u4-sx-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Globalisation most directly causes manufacturing jobs to move to which countries?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Countries with higher taxes" },
              { id: "b", text: "Countries with no ports" },
              { id: "c", text: "Countries with cheaper labour" },
              { id: "d", text: "Countries with stronger currencies" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Globalisation",
                statement: "Production shifts to low-cost locations.",
              },
            ],
            steps: [
              {
                reasoning: "Cheap labour attracts industry.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(c)** Countries with cheaper labour",
            commonErrors: ["Thinking jobs stay put."],
          },
        },
        {
          id: "oleg-u4-sx-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate whether structural change is always positive for workers.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Structural change evaluation",
                statement: "Higher wages/services vs job losses.",
              },
            ],
            steps: [
              {
                reasoning: "Benefit: higher wages in services.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Benefit: less dangerous work.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Cost: displaced factory workers.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Balanced judgement.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Mostly positive long-term, but workers in declining sectors may suffer job losses.",
            commonErrors: ["One-sided answer."],
          },
        },
        {
          id: "oleg-u4-sx-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is NOT a primary sector activity?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Forestry" },
              { id: "b", text: "Banking" },
              { id: "c", text: "Oil extraction" },
              { id: "d", text: "Fishing" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Primary sector",
                statement: "Extraction of raw materials.",
              },
            ],
            steps: [
              {
                reasoning: "Banking = tertiary.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Banking",
            commonErrors: ["Misclassifying services."],
          },
        },
        {
          id: "oleg-u4-sx-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Economic sectors and change.",
          parts: [
            { label: "a", prompt: "Distinguish tertiary and quaternary sectors.", marks: 2 },
            { label: "b", prompt: "Describe the sequence of structural change.", marks: 2 },
            { label: "c", prompt: "Give three reasons economies change sector.", marks: 3 },
            { label: "d", prompt: "Explain deindustrialisation with an example.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Sectors and change",
                statement: "Definitions+sequence+causes+deindustrialisation.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Tertiary = services.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Quaternary = knowledge/IT.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Primary→secondary→tertiary.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "With development.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Any three causes.",
                marks: 1,
                markCode: "AO1",
              },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "AO1" },
              {
                part: "c",
                reasoning: "Explained clearly.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Manufacturing jobs decline.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Example given.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "(a) tertiary vs quaternary (b) sequence (c) causes (d) deindustrialisation",
          },
        },
      ],
    },
    {
      id: "oleg-u4-trade",
      title: "Trade and Globalisation",
      skill: "Describe international trade, TNCs and effects of globalisation.",
      lesson: {
        sections: [
          {
            heading: "International trade",
            body: "Countries export goods they produce efficiently and import what they lack. Trade agreements reduce barriers. Terms of trade: export prices vs import prices — deteriorating terms hurt primary-product exporters.",
          },
          {
            heading: "Transnational corporations",
            body: "TNCs operate in many countries — extract resources, manufacture cheaply, sell globally. Benefits: jobs, investment, technology. Costs: profits repatriated, environmental damage, exploitation of cheap labour.",
          },
          {
            heading: "Globalisation effects",
            body: "Gains: economic growth, spread of technology/ideas, cheaper goods. Losses: cultural homogenisation, job losses in developed countries, environmental costs, inequality between winners and losers.",
          },
        ],
        keyFormulas: [
          {
            name: "Trade/globalisation",
            statement:
              "Trade=exports/imports; TNCs=jobs vs exploitation; globalisation=mixed.",
          },
        ],
        workedExample: {
          problem: "How can a TNC harm a host country?",
          solution:
            "Profits go to home country, weak labour/environmental standards exploited, local firms undercut.",
        },
      },
      questions: [
        {
          id: "oleg-u4-tg-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a transnational corporation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Government trade body" },
              { id: "b", text: "Company operating in multiple countries" },
              { id: "c", text: "Small local business" },
              { id: "d", text: "International bank" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "TNC",
                statement: "Multi-country company.",
              },
            ],
            steps: [
              { reasoning: "TNC = multinational.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** Company operating in multiple countries",
            commonErrors: ["Confusing with NGO."],
          },
        },
        {
          id: "oleg-u4-tg-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Give one benefit and one cost of TNCs for host countries.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "TNC effects",
                statement: "Jobs/investment vs exploitation.",
              },
            ],
            steps: [
              {
                reasoning: "Benefit: jobs/investment/technology.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Cost: exploitation/profit loss.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Benefit: jobs/investment. Cost: profit repatriation, labour exploitation.",
            commonErrors: ["Only one side."],
          },
        },
        {
          id: "oleg-u4-tg-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the impact of globalisation on developing countries.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Globalisation",
                statement: "Growth vs inequality/cultural loss.",
              },
            ],
            steps: [
              {
                reasoning: "Benefit: market access/growth.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Cost: inequality/exploitation.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Cultural homogenisation.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Balanced judgement.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Mixed — growth opportunities but inequality and cultural loss are concerns.",
            commonErrors: ["One-sided."],
          },
        },
        {
          id: "oleg-u4-tg-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Trade and globalisation.",
          parts: [
            { label: "a", prompt: "Define TNC.", marks: 1 },
            { label: "b", prompt: "TNC benefits?", marks: 2 },
            { label: "c", prompt: "TNC costs?", marks: 2 },
            { label: "d", prompt: "Globalisation evaluation?", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Trade",
                statement: "TNC+benefits+costs+evaluation.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Multi-country company.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Jobs/investment/tech.",
                marks: 1,
                markCode: "AO1",
              },
              { part: "b", reasoning: "Example.", marks: 1, markCode: "AO2" },
              {
                part: "c",
                reasoning: "Profit loss/exploitation.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Environmental damage.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Gains: growth/access.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Losses: inequality/culture.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Weigh both sides.",
                marks: 1,
                markCode: "AO2",
              },
              { part: "d", reasoning: "Judgement.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) TNC (b) benefits (c) costs (d) evaluation",
          },
        },
        {
          id: "oleg-u4-tg-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does the 'terms of trade' refer to?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Value of a country's currency" },
              { id: "b", text: "Total volume of world trade" },
              { id: "c", text: "Ratio of export prices to import prices" },
              { id: "d", text: "Number of trade agreements" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Terms of trade",
                statement: "Export prices vs import prices.",
              },
            ],
            steps: [
              {
                reasoning: "Terms of trade = price ratio.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(c)** Ratio of export prices to import prices",
            commonErrors: ["Confusing with trade volume."],
          },
        },
        {
          id: "oleg-u4-tg-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two benefits of international trade for a country.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Trade benefits",
                statement: "Access to goods, income, jobs.",
              },
            ],
            steps: [
              {
                reasoning: "Any two benefits.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Correct examples.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Access to goods not produced at home; export income and jobs.",
            commonErrors: ["Only one benefit."],
          },
        },
        {
          id: "oleg-u4-tg-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is an advantage of international trade agreements?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They guarantee equal profits for all firms" },
              { id: "b", text: "They force all countries to use the same currency" },
              { id: "c", text: "They reduce tariffs and trade barriers" },
              { id: "d", text: "They ban all imports" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Trade agreements",
                statement: "Lower barriers increase trade.",
              },
            ],
            steps: [
              {
                reasoning: "Agreements cut tariffs.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(c)** They reduce tariffs and trade barriers",
            commonErrors: ["Thinking they ban trade."],
          },
        },
        {
          id: "oleg-u4-tg-q8",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how a TNC can benefit the economy of a host country.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "TNC benefits",
                statement: "Jobs, investment, technology, exports.",
              },
            ],
            steps: [
              {
                reasoning: "Creates employment.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Brings investment and technology.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Boosts exports/income.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "TNCs create jobs, invest capital, transfer technology and raise export earnings.",
            commonErrors: ["Only listing costs."],
          },
        },
        {
          id: "oleg-u4-tg-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is meant by 'profit repatriation' by a TNC?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Profit repatriation",
                statement: "Profits sent back to home country.",
              },
            ],
            steps: [
              {
                reasoning: "Profits returned to home country.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Means host country keeps less.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Profits earned abroad are sent back to the TNC's home country rather than staying locally.",
            commonErrors: ["Thinking profits are taxed away."],
          },
        },
        {
          id: "oleg-u4-tg-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Globalisation means:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Building new borders" },
              { id: "b", text: "A country's population shrinking" },
              { id: "c", text: "A country closing its markets" },
              { id: "d", text: "Increasing interconnectedness of world economies" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Globalisation",
                statement: "World economies become more interconnected.",
              },
            ],
            steps: [
              {
                reasoning: "Globalisation = interconnection.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(d)** Increasing interconnectedness of world economies",
            commonErrors: ["Confusing with localisation."],
          },
        },
        {
          id: "oleg-u4-tg-q11",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain two negative effects of globalisation on developed countries.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Globalisation costs",
                statement: "Job losses, inequality, cultural change.",
              },
            ],
            steps: [
              {
                reasoning: "Manufacturing jobs move abroad.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Inequality between winners/losers.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Cultural homogenisation possible.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Two effects explained.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Job losses in manufacturing and growing inequality between winners and losers.",
            commonErrors: ["Describing LEDC effects only."],
          },
        },
        {
          id: "oleg-u4-tg-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe how TNCs can exploit cheap labour in less developed countries.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "TNC exploitation",
                statement: "Low wages, weak regulations, long hours.",
              },
            ],
            steps: [
              {
                reasoning: "Pay very low wages.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Use weak labour laws.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Long hours/poor conditions.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "TNCs employ workers at very low wages under weak labour laws with poor conditions.",
            commonErrors: ["Vague 'exploitation' without detail."],
          },
        },
        {
          id: "oleg-u4-tg-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Deteriorating terms of trade most seriously affects which group of countries?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Countries exporting high-tech services" },
              { id: "b", text: "Countries exporting primary products" },
              { id: "c", text: "Countries with no exports" },
              { id: "d", text: "Countries that import nothing" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Terms of trade",
                statement: "Falling export prices hurt commodity exporters.",
              },
            ],
            steps: [
              {
                reasoning: "Primary exporters affected most.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Countries exporting primary products",
            commonErrors: ["Thinking all countries equally."],
          },
        },
        {
          id: "oleg-u4-tg-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the impact of a TNC locating a factory in an LEDC.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "TNC evaluation",
                statement: "Jobs/investment vs exploitation/environment.",
              },
            ],
            steps: [
              {
                reasoning: "Benefit: jobs and investment.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Benefit: technology transfer.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Cost: exploitation/environmental damage.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Balanced judgement.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Positive for jobs and growth, but risks exploitation and environmental harm — overall mixed.",
            commonErrors: ["One-sided evaluation."],
          },
        },
        {
          id: "oleg-u4-tg-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is a cost of globalisation for host countries?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "New export markets" },
              { id: "b", text: "Free access to technology" },
              { id: "c", text: "Cheaper imported goods" },
              { id: "d", text: "Cultural homogenisation" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Globalisation costs",
                statement: "Loss of cultural diversity.",
              },
            ],
            steps: [
              {
                reasoning: "Cultural homogenisation = cost.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(d)** Cultural homogenisation",
            commonErrors: ["Listing a benefit."],
          },
        },
        {
          id: "oleg-u4-tg-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Trade and globalisation.",
          parts: [
            { label: "a", prompt: "Define a transnational corporation.", marks: 1 },
            { label: "b", prompt: "Two benefits of international trade?", marks: 2 },
            { label: "c", prompt: "Three costs of TNCs for host countries?", marks: 3 },
            { label: "d", prompt: "Evaluate globalisation overall.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Trade",
                statement: "TNC+trade benefits+TNC costs+evaluation.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Company operating in many countries.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Any two benefits.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Correct examples.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Any three costs.",
                marks: 1,
                markCode: "AO1",
              },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "AO1" },
              {
                part: "c",
                reasoning: "Clear examples.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Gains: growth, technology, access.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Losses: inequality, culture, environment.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Balanced judgement.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "(a) TNC (b) trade benefits (c) TNC costs (d) evaluation",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "oleg-u4-4-1-notes",
      title: "Changing economies — notes",
      summary: "Four sectors, structural change, trade, TNCs, globalisation.",
      sections: [
        {
          heading: "Sectors/change",
          body: "Primary→secondary→tertiary→quaternary shift with development; deindustrialisation in MEDCs.",
        },
        {
          heading: "Trade/globalisation",
          body: "TNCs bring jobs/investment but exploit; globalisation mixed — growth vs inequality/cultural loss.",
        },
      ],
    },
  ],
};
