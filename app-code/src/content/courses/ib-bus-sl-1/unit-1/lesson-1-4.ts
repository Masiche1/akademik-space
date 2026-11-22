import type { Lesson } from "../../../types.ts";

export const lesson14: Lesson = {
  id: "bus-u1-lesson-1-4",
  code: "1-4",
  title: "The External Environment and Business Growth",
  goal: "I CAN use STEEPLE analysis to examine the external environment, and explain internal and external growth, economies of scale, diversification, mergers and the business life cycle.",
  standards: ["Paper 1", "Paper 2", "Topic 1.4"],
  vocabulary: [
    {
      term: "STEEPLE analysis",
      definition:
        "A framework for scanning the external environment: Social, Technological, Economic, Environmental, Political, Legal and Ethical factors.",
    },
    {
      term: "PESTLE analysis",
      definition:
        "A similar framework covering Political, Economic, Social, Technological, Legal and Environmental factors.",
    },
    {
      term: "Internal growth",
      definition:
        "Expanding by increasing sales, output or capacity within the existing business.",
    },
    {
      term: "External growth",
      definition: "Growing by merging with or acquiring other businesses.",
    },
    {
      term: "Economies of scale",
      definition:
        "Falling average costs as output increases — from buying bulk, spreading overheads and specialisation.",
    },
    {
      term: "Diseconomies of scale",
      definition:
        "Rising average costs when a business becomes too large — communication problems and bureaucracy.",
    },
    {
      term: "Diversification",
      definition:
        "Entering new markets or producing new products, reducing dependence on one market.",
    },
    {
      term: "Organisational life cycle",
      definition:
        "The stages a business passes through: start-up, growth, maturity and decline.",
    },
  ],
  concepts: [
    {
      id: "bus-u1-steeple",
      title: "Analysing the external environment",
      skill:
        "Use STEEPLE/PESTLE analysis to identify external influences and explain how businesses respond to change.",
      lesson: {
        sections: [
          {
            heading: "The STEEPLE framework",
            body: "Businesses do not operate in isolation — the **external environment** shapes decisions. **STEEPLE** organises external factors into six groups: **Social** (demographics, lifestyles, education), **Technological** (innovation, automation, e-commerce), **Economic** (growth, inflation, exchange rates, interest rates), **Environmental** (climate, sustainability, resources), **Political** (government stability, trade policy) and **Legal/Ethical** (laws, regulations, ethical expectations). **PESTLE** is the more common variant covering the same ground.",
          },
          {
            heading: "Scanning for change",
            body: "Effective analysis identifies which factors are most relevant and how they are **changing** — e.g. an ageing population (social), rising energy costs (economic/environmental), new data-protection laws (legal). Firms scan the environment regularly because change creates both **threats** (declining demand, new competitors) and **opportunities** (new markets, technologies).",
          },
          {
            heading: "Responding to external change",
            body: "Responses include adapting the product (new flavours for health trends), changing location or suppliers, investing in technology, lobbying government, or diversifying into new markets. The best responses match the firm's resources and strategy — a small retailer may embrace e-commerce while a manufacturer may automate production to meet environmental laws.",
          },
        ],
        keyFormulas: [
          {
            name: "STEEPLE",
            statement:
              "Social, Technological, Economic, Environmental, Political, Legal/Ethical",
          },
          {
            name: "PESTLE",
            statement:
              "Political, Economic, Social, Technological, Legal, Environmental",
          },
        ],
        workedExample: {
          problem:
            "A coffee shop chain faces rising rents (economic), new packaging laws (legal) and growing demand for vegan products (social). Suggest two responses using STEEPLE.",
          solution:
            "Economic pressure from rents → negotiate leases, move to cheaper locations or raise prices. Social trend toward vegan options → add plant-based menu items to capture new demand. Both responses turn environmental analysis into action.",
        },
      },
      questions: [
        {
          id: "bus-u1-envq1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "In STEEPLE analysis, the growth of online shopping and automation would be classified as a:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Environmental factor" },
              { id: "b", text: "Technological factor" },
              { id: "c", text: "Social factor" },
              { id: "d", text: "Political factor" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "STEEPLE — Technological",
                statement:
                  "Innovation, automation, digital technology and new production methods.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Online shopping and automation are innovations in technology.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Technological factor",
            commonErrors: [
              "Classifying e-commerce as social because it changes consumer habits — the driver is technology.",
            ],
          },
        },
        {
          id: "bus-u1-envq2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "State the six factors covered by STEEPLE analysis.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "STEEPLE",
                statement:
                  "Social, Technological, Economic, Environmental, Political, Legal/Ethical.",
              },
            ],
            steps: [
              {
                reasoning: "Social and Technological factors.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Economic and Environmental factors.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Political and Legal/Ethical factors — all six listed.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Social, Technological, Economic, Environmental, Political, Legal/Ethical.",
            commonErrors: [
              "Omitting one factor or adding internal factors like 'staff'.",
            ],
          },
        },
        {
          id: "bus-u1-envq3",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "A government introduces a new law requiring all food businesses to display calorie information on menus. A restaurant chain currently does not do this.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Legal factor response",
                statement:
                  "New laws create compliance costs but can also build consumer trust.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The law is a legal factor in the external environment that the business must respond to.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Compliance costs — menu redesign, staff training, possible IT changes — reduce short-term profit.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "But compliance avoids fines and may attract health-conscious customers, turning threat into opportunity.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Conclusion: the firm should comply promptly and use transparency as a marketing advantage.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Legal change forces compliance costs but offers trust-building and customer-retention benefits.",
            commonErrors: [
              "Describing the law without analysing costs and benefits of responding.",
            ],
          },
        },
        {
          id: "bus-u1-envq4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "A small organic food producer is considering whether to expand into supermarkets or stay focused on farmers' markets.",
          parts: [
            {
              label: "a",
              prompt:
                "Explain what is meant by STEEPLE analysis and identify two relevant factors for this business.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Explain two ways external environmental changes could threaten or create opportunities for the business.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Evaluate the usefulness of STEEPLE analysis for a small business like this one.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "STEEPLE",
                statement:
                  "Framework scanning Social, Technological, Economic, Environmental, Political and Legal factors.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "STEEPLE organises external influences into six categories.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Valid factors: health trends (social), organic certification rules (legal), supermarket buyer power (economic), sustainability demand (environmental).",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Threats: supermarket price pressure, changing food regulations, competitor organic brands.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Opportunities: growing demand for organic produce, new export markets, social media marketing.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "The same factor (e.g. health trends) can be both threat and opportunity depending on response.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Useful: forces systematic scanning and links external change to strategy.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Limits: can become a long list without prioritisation; small firms lack resources for deep analysis.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Reasoned judgement: worthwhile as a simple regular exercise, but must be focused on key factors.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Six-factor external scan; e.g. social health trends, legal certification. (b) Threats: price pressure, rivals; opportunities: demand growth, exports. (c) Useful if focused; risk of being superficial.",
            commonErrors: [
              "Listing factors without linking them to threats or opportunities for this specific business.",
            ],
          },
        },
        {
          id: "bus-u1-envq5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A government raising the national minimum wage would be classified in STEEPLE analysis as a:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Legal factor" },
              { id: "b", text: "Environmental factor" },
              { id: "c", text: "Technological factor" },
              { id: "d", text: "Social factor" },
            ],
            aorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "STEEPLE — Legal",
                statement:
                  "Laws, regulations and rules imposed on business, such as employment law.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A minimum wage is set by law, so it is a legal factor.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (c) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** Legal factor",
            commonErrors: [
              "Classifying it as social — the law itself is legal, though its effects are social.",
            ],
          },
        },
        {
          id: "bus-u1-envq6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "An ageing population and changing lifestyle trends are examples of which STEEPLE factor?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Economic" },
              { id: "b", text: "Technological" },
              { id: "c", text: "Political" },
              { id: "d", text: "Social" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "STEEPLE — Social",
                statement:
                  "Demographics, lifestyles, education and cultural trends.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Population structure and lifestyles are social factors.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** Social",
            commonErrors: [
              "Classifying demographics as economic — they are social factors.",
            ],
          },
        },
        {
          id: "bus-u1-envq7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A stronger domestic currency making a firm's exports more expensive abroad is an example of an:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Economic factor" },
              { id: "b", text: "Environmental factor" },
              { id: "c", text: "Legal factor" },
              { id: "d", text: "Social factor" },
            ],
            aorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "STEEPLE — Economic",
                statement:
                  "Growth, inflation, interest rates, exchange rates and income levels.",
              },
            ],
            steps: [
              {
                reasoning: "Exchange rates are economic variables.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (c) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** Economic factor",
            commonErrors: [
              "Confusing exchange rates with political factors — they are economic.",
            ],
          },
        },
        {
          id: "bus-u1-envq8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "New data-protection legislation affecting how firms store customer information is classified under STEEPLE as a:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Technological factor" },
              { id: "b", text: "Legal/Ethical factor" },
              { id: "c", text: "Environmental factor" },
              { id: "d", text: "Social factor" },
            ],
            borrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "STEEPLE — Legal/Ethical",
                statement:
                  "Laws, regulations and ethical expectations placed on business.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Legislation is a legal factor regardless of the technology involved.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (c) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** Legal/Ethical factor",
            commonErrors: [
              "Classifying it as technological because it concerns data — the driver is law.",
            ],
          },
        },
        {
          id: "bus-u1-envq9",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 3,
          stem: "A government subsidy for electric vehicle production is best classified as a:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Social factor" },
              { id: "b", text: "Technological factor" },
              { id: "c", text: "Political factor" },
              { id: "d", text: "Environmental factor only" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "STEEPLE — Political",
                statement:
                  "Government policy, stability, trade policy and subsidies.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A subsidy is a government policy decision — political.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Its environmental aim does not change its classification.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** Political factor",
            commonErrors: [
              "Classifying by the policy's goal rather than its source — subsidies are political.",
            ],
          },
        },
        {
          id: "bus-u1-envq10",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "Firms should scan the external environment regularly mainly because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It is required by shareholders only" },
              { id: "b", text: "Internal factors are more important" },
              {
                id: "c",
                text: "Change creates both threats and opportunities that must be anticipated",
              },
              { id: "d", text: "The environment never changes" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Environmental scanning",
                statement:
                  "Regular scanning reveals threats and opportunities before competitors act.",
              },
            ],
            steps: [
              {
                reasoning:
                  "External factors keep changing — new laws, technologies, consumer trends.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(b)** Change creates both threats and opportunities that must be anticipated",
            commonErrors: [
              "Thinking the environment is static or that scanning is a one-off exercise.",
            ],
          },
        },
        {
          id: "bus-u1-envq11",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Explain what PESTLE analysis is and give one example of a factor it would cover for a car manufacturer.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "PESTLE",
                statement:
                  "Framework scanning Political, Economic, Social, Technological, Legal and Environmental factors.",
              },
            ],
            steps: [
              {
                reasoning:
                  "PESTLE organises external influences into six categories affecting the business.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It helps the firm spot threats and opportunities beyond its internal control.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Valid example: emissions laws (legal), interest rates (economic), demand for electric cars (social/technological).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Any correct classification of the example earns the final mark.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Six-factor external scan; e.g. emissions legislation (legal) or interest rates (economic).",
            commonErrors: [
              "Listing internal factors like staff morale — PESTLE covers only the external environment.",
            ],
          },
        },
        {
          id: "bus-u1-envq12",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Explain how a single social trend can create both a threat and an opportunity for a business.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Threat and opportunity",
                statement:
                  "The same external change can hurt one part of the business while helping another.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Example: rising health awareness threatens sugary snack sales but creates demand for healthy products.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The threat side: existing products lose customers as tastes change.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The opportunity side: new products or markets open up for firms that adapt.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Conclusion: firms that scan and respond can turn threats into opportunities.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Health trends threaten unhealthy products but open markets for healthy ones — response decides the outcome.",
            commonErrors: [
              "Treating a trend as only a threat or only an opportunity.",
            ],
          },
        },
        {
          id: "bus-u1-envq13",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 5,
          stem: "Explain three ways a business can respond to significant changes in its external environment.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Strategic response",
                statement:
                  "Firms can adapt products, change operations, invest in technology or diversify.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Adapt the product or marketing to match new consumer trends or laws.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Change operations — relocate, switch suppliers or automate to cut costs or meet standards.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Diversify into new markets or products to reduce dependence on the threatened area.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Lobby government or join industry bodies to influence policy.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Any three valid responses clearly explained.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Adapt product/marketing, change operations, diversify, lobby government.",
            commonErrors: [
              "Listing responses without linking them to the external change identified.",
            ],
          },
        },
        {
          id: "bus-u1-envq14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 7,
          stem: "An electric-vehicle manufacturer faces new emissions laws, rising battery material costs and growing consumer demand for EVs.",
          parts: [
            {
              label: "a",
              prompt: "Classify two of these factors using STEEPLE.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Explain how these changes create both threats and opportunities for the firm.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Evaluate the usefulness of STEEPLE analysis for this business.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "STEEPLE",
                statement:
                  "Social, Technological, Economic, Environmental, Political, Legal/Ethical factors.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Emissions laws = legal/political; battery costs = economic; EV demand = social/technological.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Two factors correctly classified.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Threats: compliance costs and rising input costs squeeze margins.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Opportunities: booming EV demand and supportive regulation open a growing market.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "The same regulatory push that costs money also creates the market for EVs.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Useful: structures the scan and links external change to strategy.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Limits: lists can be long; prioritisation and resources matter more than completeness.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Legal/political, economic, social/technological. (b) Compliance costs vs growing EV market. (c) Useful if focused on key factors.",
            commonErrors: [
              "Classifying factors without linking them to threats/opportunities.",
            ],
          },
        },
        {
          id: "bus-u1-envq15",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A firm's total costs are $250,000. Inflation raises its costs by 8%. Calculate the increase in costs.",
          response: {
            type: "numeric",
            parts: [{ label: "Cost increase ($)", answer: 20000, unit: "$" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Percentage change",
                statement: "Change = original x percentage / 100",
              },
            ],
            steps: [
              {
                reasoning: "Multiply costs by the inflation rate.",
                working: "250000 x 0.08",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Calculate the increase.",
                working: "= 20000",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "State the increase.",
                working: "20,000",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$20,000$",
            commonErrors: [
              "Calculating the new total ($270,000) instead of the increase.",
            ],
          },
        },
        {
          id: "bus-u1-envq16",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 3,
          stem: "A business imports a component costing $50,000. The domestic currency depreciates by 20% against the supplier's currency. Calculate the new cost of the component.",
          response: {
            type: "numeric",
            parts: [
              { label: "New component cost ($)", answer: 60000, unit: "$" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Exchange rate effect",
                statement:
                  "Depreciation raises the domestic cost of imports by the depreciation percentage.",
              },
            ],
            steps: [
              {
                reasoning: "Calculate the extra cost from depreciation.",
                working: "50000 x 0.20 = 10000",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Add the increase to the original cost.",
                working: "50000 + 10000",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "State the new cost.",
                working: "= 60000",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$60,000$",
            commonErrors: [
              "Reducing the cost — depreciation makes imports dearer, not cheaper.",
            ],
          },
        },
      ],
    },
    {
      id: "bus-u1-business-growth",
      title: "Business growth and evolution",
      skill:
        "Distinguish internal and external growth, explain economies and diseconomies of scale, diversification, mergers and the organisational life cycle.",
      lesson: {
        sections: [
          {
            heading: "Internal vs external growth",
            body: "**Internal growth** means expanding existing operations — higher sales, more branches, new products — funded from retained profit or loans. It is slower but keeps control and culture. **External growth** means acquiring or merging with other firms — fast access to new markets, technology and economies of scale, but costly, risky and potentially culturally damaging.",
          },
          {
            heading: "Scale and diversification",
            body: "Growing output can bring **economies of scale** — bulk-buying discounts, spreading fixed costs, specialisation — lowering average cost. Beyond a point, **diseconomies of scale** appear: communication breakdown, bureaucracy, motivation loss. **Diversification** reduces risk by entering new products or markets, though it may distract from core competence.",
          },
          {
            heading: "Mergers, takeovers and the life cycle",
            body: "A **merger** combines equals; a **takeover** sees one firm acquire control of another. Both can create synergies or fail through culture clashes and overpayment. Businesses evolve through the **organisational life cycle**: start-up (high risk, small scale), growth, maturity (maximum efficiency, possible stagnation) and decline (falling demand — innovate or exit).",
          },
        ],
        keyFormulas: [
          {
            name: "Internal vs external growth",
            statement:
              "Internal = expand own operations; External = merge/acquire other firms",
          },
          {
            name: "Economies of scale",
            statement: "Average cost falls as output rises",
          },
          {
            name: "Merger vs takeover",
            statement:
              "Merger = combine equals; Takeover = one firm acquires control",
          },
        ],
        workedExample: {
          problem:
            "A bakery doubles output and its average cost per loaf falls from $2 to $1.50. Explain what this illustrates.",
          solution:
            "This is an economy of scale — spreading fixed costs (oven, rent) over more units and buying flour in bulk lowered average cost, improving competitiveness.",
        },
      },
      questions: [
        {
          id: "bus-u1-grwq1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Growing by buying a rival company is an example of:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Internal growth" },
              { id: "b", text: "External growth" },
              { id: "c", text: "Organic growth" },
              { id: "d", text: "Diversification" },
            ],
            borrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "External growth",
                statement:
                  "Growth through mergers and acquisitions of other businesses.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Buying another firm expands the business through acquisition.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (c) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** External growth",
            commonErrors: [
              "Calling any expansion 'internal' — buying another firm is external.",
            ],
          },
        },
        {
          id: "bus-u1-grwq2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Distinguish between economies of scale and diseconomies of scale.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Economies/diseconomies of scale",
                statement:
                  "Average cost falls with size up to a point, then can rise due to inefficiency.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Economies: average cost falls as output rises — bulk buying, spreading fixed costs, specialisation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Diseconomies: beyond optimal size, average cost rises — communication breakdown, bureaucracy.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Conclusion: firms seek the minimum efficient scale where economies are maximised.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Costs fall then may rise with scale; the optimal size balances the two.",
            commonErrors: [
              "Assuming bigger is always cheaper — diseconomies reverse this.",
            ],
          },
        },
        {
          id: "bus-u1-grwq3",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "A successful regional supermarket chain is considering taking over a smaller rival to gain market share quickly.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Takeover trade-offs",
                statement:
                  "Takeovers give fast growth and scale but carry cost, culture and integration risks.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Benefits: instant market share, possible economies of scale, removal of a competitor.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Risks: high purchase price, culture clash, losing key staff, integration costs.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Synergies may fail to materialise; overpayment destroys value.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Conclusion: attractive if price is reasonable and cultures are compatible.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Fast scale and market share vs cost, culture and integration risks.",
            commonErrors: ["Listing only benefits without evaluating risks."],
          },
        },
        {
          id: "bus-u1-grwq4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 7,
          stem: "A family-owned furniture maker has grown steadily for 15 years. Sales have flattened and the owner is unsure whether to diversify into online sales or invest in new machinery.",
          parts: [
            {
              label: "a",
              prompt:
                "Explain the difference between internal and external growth.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Explain one benefit and one risk of diversification for this business.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Using the organisational life cycle, evaluate which option the owner should choose.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Life cycle",
                statement:
                  "Start-up → growth → maturity → decline; maturity often brings stagnation.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Internal growth expands own operations organically; external growth uses mergers/acquisitions.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Internal keeps control but is slower; external is faster but riskier and costlier.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Benefit of diversification: new revenue stream reduces reliance on one market.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Risk: spreading resources thin and losing focus on core furniture skills.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Flattening sales suggests the firm is reaching maturity — classic stagnation stage.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "New machinery raises efficiency (internal growth) but online diversification opens new channels — both defend against decline.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Reasoned judgement: diversification into online sales better matches maturity-stage survival needs, possibly combined with efficiency investment.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Own expansion vs acquiring others. (b) New revenue vs loss of focus. (c) Maturity stage → diversify online to reach new customers.",
            commonErrors: [
              "Recommending without linking to the life-cycle stage.",
            ],
          },
        },
        {
          id: "bus-u1-grwq5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Internal growth means expanding a business by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Buying other companies" },
              { id: "b", text: "Merging with a rival" },
              { id: "c", text: "Selling shares to the public" },
              { id: "d", text: "Increasing its own sales, output or capacity" },
            ],
            dorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Internal growth",
                statement:
                  "Organic expansion of existing operations — more sales, branches, products or capacity.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Internal growth uses the firm's own resources to expand.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (c) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** Increasing its own sales, output or capacity",
            commonErrors: [
              "Confusing internal growth with acquisitions — buying firms is external.",
            ],
          },
        },
        {
          id: "bus-u1-grwq6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A merger differs from a takeover because in a merger:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Two firms of roughly equal size combine" },
              { id: "b", text: "One firm forcibly acquires another" },
              { id: "c", text: "A firm sells its shares" },
              { id: "d", text: "A firm opens a new branch" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Merger vs takeover",
                statement:
                  "Merger = firms combine as equals; takeover = one firm acquires control of another.",
              },
            ],
            steps: [
              {
                reasoning:
                  "In a merger neither firm dominates — they join on equal terms.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Two firms of roughly equal size combine",
            commonErrors: [
              "Using 'merger' and 'takeover' interchangeably — the key is relative size and control.",
            ],
          },
        },
        {
          id: "bus-u1-grwq7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Buying raw materials in bulk at a discount because output has doubled is an example of:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Economies of scale" },
              { id: "b", text: "Diversification" },
              { id: "c", text: "Diseconomies of scale" },
              { id: "d", text: "External growth" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Economies of scale",
                statement:
                  "Average costs fall as output rises — via bulk buying, spreading fixed costs and specialisation.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Larger orders earn volume discounts, lowering cost per unit.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Economies of scale",
            commonErrors: [
              "Calling every cost reduction diseconomy — falling average cost is an economy of scale.",
            ],
          },
        },
        {
          id: "bus-u1-grwq8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A very large firm suffers rising average costs because decisions are delayed by bureaucracy and messages get lost between departments. This illustrates:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Diseconomies of scale" },
              { id: "b", text: "Economies of scale" },
              { id: "c", text: "Market share growth" },
              { id: "d", text: "Internal growth" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Diseconomies of scale",
                statement:
                  "Average costs rise beyond optimal size due to communication breakdown and bureaucracy.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Inefficiency from size is the hallmark of diseconomies.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Diseconomies of scale",
            commonErrors: ["Assuming larger firms are always more efficient."],
          },
        },
        {
          id: "bus-u1-grwq9",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "A firm enters a completely new product market to reduce its dependence on its existing market. This strategy is called:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Merger" },
              { id: "b", text: "Internal growth" },
              { id: "c", text: "Diversification" },
              { id: "d", text: "Takeover" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Diversification",
                statement:
                  "Entering new products or markets to spread risk and reduce dependence.",
              },
            ],
            steps: [
              {
                reasoning:
                  "New markets/products spread risk away from the core business.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (c) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** Diversification",
            commonErrors: [
              "Confusing diversification with simple expansion — diversification means new products/markets.",
            ],
          },
        },
        {
          id: "bus-u1-grwq10",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Distinguish between internal and external growth.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Internal vs external growth",
                statement:
                  "Internal = expand own operations; external = merge with or acquire other firms.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Internal growth expands sales, output, branches or products within the existing firm.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It is slower but preserves control, culture and avoids takeover premiums.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "External growth acquires or merges with other businesses for fast scale and new markets.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "It is costlier and riskier — integration problems and culture clashes.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Internal = organic expansion (slow, controlled); external = mergers/acquisitions (fast, risky, costly).",
            commonErrors: [
              "Describing only one type without a clear contrast.",
            ],
          },
        },
        {
          id: "bus-u1-grwq11",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Explain two causes of diseconomies of scale.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Diseconomies of scale",
                statement:
                  "Inefficiency that emerges when a business grows beyond its optimal size.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Communication breakdown — messages get lost or distorted across many layers and departments.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Bureaucracy — more rules, managers and procedures slow decisions and raise costs.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Motivation loss — workers feel like cogs and productivity falls.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Any two causes clearly explained.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Communication problems, bureaucracy and motivation loss raise average costs at large scale.",
            commonErrors: [
              "Confusing diseconomies with economies — diseconomies mean rising average costs.",
            ],
          },
        },
        {
          id: "bus-u1-grwq12",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 5,
          stem: "Explain the difference between a merger and a takeover, and give one advantage of each for growth.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Merger vs takeover",
                statement:
                  "Merger combines equals; takeover is one firm acquiring control of another.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A merger is a friendly combination of firms of similar size — shared ownership and control.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "A takeover sees one firm buy control of a smaller rival — often against its wishes.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Merger advantage: smoother integration, less hostility, shared cultures.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Takeover advantage: fast, decisive control of a competitor and its market.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Both are external growth aimed at scale, markets or technology.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Merger = equals combine (smoother); takeover = acquisition of control (faster, more aggressive).",
            commonErrors: [
              "Using the terms interchangeably without explaining the control difference.",
            ],
          },
        },
        {
          id: "bus-u1-grwq13",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 5,
          stem: "Explain the four stages of the organisational life cycle and one strategic challenge at each stage.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Organisational life cycle",
                statement:
                  "Start-up → growth → maturity → decline, each with distinct challenges.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Start-up: survival — establishing customers and managing cash flow.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Growth: expanding capacity and systems while keeping quality and control.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Maturity: maintaining market share amid competition and possible stagnation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Decline: falling demand — innovate, diversify or exit the market.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Conclusion: strategy must match the stage — survival tactics differ from maturity tactics.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Start-up (survival), growth (scaling), maturity (defending share), decline (innovate or exit).",
            commonErrors: [
              "Listing stages without linking each to a strategic challenge.",
            ],
          },
        },
        {
          id: "bus-u1-grwq14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 7,
          stem: "A mature bicycle manufacturer sees demand in its home market falling steadily.",
          parts: [
            {
              label: "a",
              prompt:
                "Identify the stage of the organisational life cycle the firm is in.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Explain two growth options the firm could pursue.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Evaluate which option best fits the firm's situation.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Life cycle",
                statement:
                  "Maturity brings stagnation; decline brings falling demand — both demand strategic renewal.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Falling demand after maturity indicates the decline stage (or late maturity).",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Correct stage identified with justification.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Diversify — new products (e-bikes) or new markets (exports).",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "External growth — acquire a rival or an e-bike firm for technology and market.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Second valid option explained.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Acquisition gives fast access to e-bike technology but is costly and risky; organic diversification is slower but safer.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Reasoned judgement based on the firm's resources and the speed of market decline.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Decline stage. (b) Diversify into e-bikes/exports; acquire a rival. (c) Weigh speed vs risk of each.",
            commonErrors: [
              "Recommending options without identifying the life-cycle stage first.",
            ],
          },
        },
        {
          id: "bus-u1-grwq15",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "A firm produces 10,000 units at a total cost of $100,000. When output doubles to 20,000 units, total cost rises to $180,000. Calculate the average cost per unit at each output level.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "Average cost at 10,000 units ($)",
                answer: 10,
                unit: "$",
              },
              {
                label: "Average cost at 20,000 units ($)",
                answer: 9,
                unit: "$",
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Average cost",
                statement: "Average cost = total cost / output",
              },
            ],
            steps: [
              {
                reasoning: "Calculate average cost at the lower output.",
                working: "100000 / 10000",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State the first average cost.",
                working: "= 10",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Calculate average cost at the higher output.",
                working: "180000 / 20000",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "State the second average cost — it falls, showing economies of scale.",
                working: "= 9",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "$10$ per unit at 10,000; $9$ per unit at 20,000 — an economy of scale.",
            commonErrors: [
              "Comparing total costs instead of average costs per unit.",
            ],
          },
        },
        {
          id: "bus-u1-grwq16",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A growing firm's sales rise from $80,000 to $100,000 in one year. Calculate the percentage growth in sales.",
          response: {
            type: "numeric",
            parts: [{ label: "Sales growth (%)", answer: 25, unit: "%" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Percentage growth",
                statement: "Growth % = ((new - old) / old) x 100",
              },
            ],
            steps: [
              {
                reasoning: "Calculate the increase.",
                working: "100000 - 80000 = 20000",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Divide by original sales and convert to a percentage.",
                working: "20000 / 80000 x 100",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "State the growth rate.",
                working: "= 25%",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$25\\%$",
            commonErrors: [
              "Dividing by the new sales figure instead of the original.",
            ],
          },
        },
      ],
    },
  ],
};
