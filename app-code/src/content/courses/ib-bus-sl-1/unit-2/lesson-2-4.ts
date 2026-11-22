import type { Lesson } from "../../../types.ts";

export const lesson24: Lesson = {
  id: "bus-u2-lesson-2-4",
  code: "2-4",
  title: "Sales Forecasting, Product Life Cycle and E-commerce",
  goal: "I CAN explain sales forecasting methods and the product life cycle, and evaluate the advantages and risks of e-commerce and digital marketing.",
  standards: ["Paper 1", "Paper 2", "Topic 2.4"],
  vocabulary: [
    {
      term: "Sales forecasting",
      definition:
        "Estimating future sales using past data, trends and judgement to plan production, stock and finance.",
    },
    {
      term: "Moving average",
      definition:
        "A forecasting method averaging sales over a recent number of periods to smooth out fluctuations.",
    },
    {
      term: "Trend analysis",
      definition:
        "Identifying the long-term direction of sales data to project future demand.",
    },
    {
      term: "Product life cycle (PLC)",
      definition:
        "The stages a product passes through: introduction, growth, maturity and decline.",
    },
    {
      term: "E-commerce",
      definition: "Buying and selling goods and services over the internet.",
    },
    {
      term: "Digital marketing",
      definition:
        "Promoting products using online channels: websites, social media, email and search engines.",
    },
    {
      term: "Social media marketing",
      definition:
        "Using platforms like Instagram, TikTok and Facebook to build brand awareness and drive sales.",
    },
    {
      term: "Click-and-mortar",
      definition:
        "A business combining physical stores with online sales channels.",
    },
  ],
  concepts: [
    {
      id: "bus-u2-forecasting-plc",
      title: "Forecasting and the product life cycle",
      skill:
        "Explain sales forecasting methods, the stages of the product life cycle, and strategies to extend a product's life.",
      lesson: {
        sections: [
          {
            heading: "Sales forecasting",
            body: "Businesses forecast sales to plan production, stock, staffing and finance. Common methods include **moving averages** — averaging sales over recent periods (e.g. last 4 months) to smooth seasonal noise — and **trend analysis** — fitting a line to historical data to project the long-term direction. Judgement based on market research can refine purely statistical forecasts.",
          },
          {
            heading: "The product life cycle",
            body: "Every product moves through stages. **Introduction**: launch, low sales, heavy promotion costs. **Growth**: rapid sales rise, competitors enter. **Maturity**: sales peak and stabilise, competition intensifies, prices fall. **Decline**: sales fall as tastes change or substitutes appear. Not all products follow the same pattern or length of cycle.",
          },
          {
            heading: "Extending the product life cycle",
            body: "Firms fight decline through **product development** (new versions, features), **repositioning** (new market segments), **repackaging** or **price changes**, and entering **new markets**. Some firms deliberately manage the cycle — phasing out old products while investing in the next generation.",
          },
        ],
        keyFormulas: [
          {
            name: "Moving average",
            statement: "Forecast = average of sales over the last n periods",
          },
          {
            name: "PLC stages",
            statement: "Introduction → Growth → Maturity → Decline",
          },
        ],
        workedExample: {
          problem:
            "A firm's monthly sales over the last 4 months were $100k, $120k, $140k and $160k. Forecast next month's sales using a 4-month moving average.",
          solution:
            "Moving average = (100 + 120 + 140 + 160) / 4 = 520 / 4 = $130k. The forecast smooths the upward trend into a single figure.",
        },
      },
      questions: [
        {
          id: "bus-u2-foreq1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "In the product life cycle, sales typically reach their peak during which stage?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Growth" },
              { id: "b", text: "Introduction" },
              { id: "c", text: "Maturity" },
              { id: "d", text: "Decline" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "PLC maturity",
                statement:
                  "Sales peak and stabilise during maturity before declining.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Sales rise through introduction and growth, peak at maturity, then fall in decline.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (c) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** Maturity",
            commonErrors: [
              "Confusing peak sales with fastest growth — growth peaks before maturity.",
            ],
          },
        },
        {
          id: "bus-u2-foreq2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A shop's sales over the last 4 months were $40,000, $50,000, $60,000 and $70,000. Using a 4-month moving average, forecast next month's sales.",
          response: {
            type: "numeric",
            parts: [{ label: "Forecast sales", answer: 55000, unit: "$" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Moving average",
                statement: "Forecast = sum of last n periods / n",
              },
            ],
            steps: [
              {
                reasoning: "Add the four monthly sales figures.",
                working: "40000 + 50000 + 60000 + 70000 = 220000",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Divide by the number of periods (4).",
                working: "220000 \\div 4",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Forecast = $55,000.",
                working: "220000 \\div 4 = 55000",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$55,000",
            commonErrors: [
              "Dividing by 3 or forgetting to convert units — the average of 4 months needs /4.",
            ],
          },
        },
        {
          id: "bus-u2-foreq3",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "A smartphone maker's latest model is in the maturity stage — sales have flattened and profits are falling as cheaper rivals enter.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "PLC extension",
                statement:
                  "Firms extend the cycle through product development, repositioning and new markets.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Maturity means intense competition and price pressure — margins shrink.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Responses: launch an upgraded model (product development), target new segments (repositioning), or enter new countries.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Repackaging or feature changes can revive interest in the existing product.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Conclusion: extension strategies buy time but must be funded before decline deepens.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Upgrade the product, reposition to new segments or enter new markets to extend the cycle.",
            commonErrors: [
              "Suggesting price cuts alone — they may accelerate decline without extending life.",
            ],
          },
        },
        {
          id: "bus-u2-foreq4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "A beverage company must decide whether to invest in forecasting software or rely on the owner's experience to plan next year's production.",
          parts: [
            {
              label: "a",
              prompt: "Explain two methods of sales forecasting.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Explain the four stages of the product life cycle.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Evaluate whether the company should invest in formal forecasting.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Forecasting methods",
                statement:
                  "Moving averages smooth data; trend analysis projects direction; judgement adds context.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Moving average: average recent periods to smooth fluctuations.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Trend analysis: identify long-term direction from historical data to project sales.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Introduction: launch, low sales, high promotion costs.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Growth: rapid sales rise; Maturity: sales peak and stabilise amid competition.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Decline: sales fall as tastes change or substitutes emerge.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Formal forecasting improves planning accuracy, stock control and finance — reduces waste and stockouts.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "But cost may exceed benefit for a small firm, and forecasts can be wrong if markets shift suddenly.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Reasoned judgement: invest if production scale justifies it; combine statistical forecasts with owner judgement.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Moving averages and trend analysis. (b) Introduction, growth, maturity, decline. (c) Worthwhile at scale; combine with judgement.",
            commonErrors: [
              "Describing PLC stages without explaining what happens to sales/profit in each.",
            ],
          },
        },
        {
          id: "bus-u2-foreq5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Averaging sales over the last few periods to smooth out fluctuations is called:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Market segmentation" },
              { id: "b", text: "Trend analysis" },
              { id: "c", text: "Moving average" },
              { id: "d", text: "Quality control" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Moving average",
                statement:
                  "Averaging sales over recent periods to smooth fluctuations.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Smoothing fluctuations by averaging recent periods = moving average.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Moving average",
            commonErrors: [
              "Confusing moving average (smoothing) with trend analysis (direction).",
            ],
          },
        },
        {
          id: "bus-u2-foreq6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Identifying the long-term direction of historical sales data to project future sales is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Quality assurance" },
              { id: "b", text: "Trend analysis" },
              { id: "c", text: "Sales promotion" },
              { id: "d", text: "A moving average" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Trend analysis",
                statement:
                  "Identifying the long-term direction of sales to project future demand.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Projecting the long-term direction of sales = trend analysis.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Trend analysis",
            commonErrors: ["Confusing trend analysis with moving averages."],
          },
        },
        {
          id: "bus-u2-foreq7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Sales over the last 4 months were $60k, $80k, $100k and $120k. The 4-month moving average is closest to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$120k" },
              { id: "b", text: "$360k" },
              { id: "c", text: "$90k" },
              { id: "d", text: "$110k" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Moving average",
                statement: "Forecast = sum of last n periods / n",
              },
            ],
            steps: [
              {
                reasoning:
                  "Sum the four months and divide by 4: (60+80+100+120)/4 = 360/4 = 90.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $90k",
            commonErrors: ["Forgetting to divide by the number of periods."],
          },
        },
        {
          id: "bus-u2-foreq8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "In the decline stage of the product life cycle:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Promotion costs are at their highest" },
              { id: "b", text: "Sales reach their peak" },
              { id: "c", text: "Sales grow most rapidly" },
              {
                id: "d",
                text: "Sales fall as tastes change or substitutes appear",
              },
            ],
            dorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "PLC decline",
                statement:
                  "Sales fall as customer tastes change or substitutes emerge.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Decline means falling sales driven by changing tastes or substitutes.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (c) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(c)** Sales fall as tastes change or substitutes appear",
            commonErrors: [
              "Confusing decline with maturity — maturity is the peak before decline.",
            ],
          },
        },
        {
          id: "bus-u2-foreq9",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Which strategy can help extend a product's life cycle?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Reducing quality to cut costs" },
              {
                id: "b",
                text: "Product development or repositioning into new segments",
              },
              { id: "c", text: "Ignoring competitor products" },
              { id: "d", text: "Stopping all promotion" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "PLC extension",
                statement:
                  "Firms extend the cycle through product development, repositioning and new markets.",
              },
            ],
            steps: [
              {
                reasoning:
                  "New versions or new segments revive demand and delay decline.",
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
              "**(b)** Product development or repositioning into new segments",
            commonErrors: [
              "Thinking life-cycle extension means simply cutting the price.",
            ],
          },
        },
        {
          id: "bus-u2-foreq10",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Explain two reasons why businesses produce sales forecasts.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Purpose of forecasting",
                statement:
                  "Forecasts guide production, stock, staffing and financial planning.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Forecasts let firms plan production and inventory levels, avoiding over- or under-production.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "They support staffing, purchasing and cash-flow decisions, reducing uncertainty.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Forecasts are estimates — accuracy depends on method and market stability.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Conclusion: forecasting turns uncertainty into planned, lower-risk decisions.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "To plan production/stock and staffing/finance, reducing uncertainty.",
            commonErrors: [
              "Listing forecasting methods instead of reasons for forecasting.",
            ],
          },
        },
        {
          id: "bus-u2-foreq11",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Explain two limitations of using a moving average for sales forecasting.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Moving average limits",
                statement:
                  "It smooths but lags trends and ignores seasonality or one-off events.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The average lags behind trends — it reacts slowly when sales are rising or falling.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It treats all recent periods equally and ignores seasonal patterns or sudden events.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Judgement based on market research can compensate for these weaknesses.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Conclusion: moving averages suit stable demand, not volatile or seasonal markets.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "It lags trends and ignores seasonality — best for stable demand.",
            commonErrors: [
              "Describing how to calculate a moving average instead of its limits.",
            ],
          },
        },
        {
          id: "bus-u2-foreq12",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 7,
          stem: "An ice-cream producer has highly seasonal sales — very high in summer, very low in winter.",
          parts: [
            {
              label: "a",
              prompt: "Explain what a moving average forecast is.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Recommend a forecasting approach for this seasonal business and justify it.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Evaluate how reliable the forecast is likely to be for this business.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Forecasting methods",
                statement:
                  "Moving averages smooth data; trend and seasonal analysis project patterns.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "A moving average forecasts next period as the average of recent periods' sales.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "It smooths random fluctuations to produce a single forecast figure.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Trend analysis or seasonal adjustment — the business has a predictable yearly pattern.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Justified because demand follows weather-driven seasons, so last year's same month is informative.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Judgement combining statistics with weather forecasts strengthens the forecast.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Reliability is moderate — seasons repeat but weather and competitors create uncertainty.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning: "Balanced judgement on forecast reliability.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Average of recent periods' sales. (b) Trend/seasonal analysis plus judgement. (c) Moderately reliable — patterns repeat but weather varies.",
            commonErrors: [
              "Recommending a plain moving average for a strongly seasonal product.",
            ],
          },
        },
        {
          id: "bus-u2-foreq13",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "A DVD rental firm's sales have fallen for three consecutive years.",
          parts: [
            {
              label: "a",
              prompt:
                "Explain why the firm's product may be in the decline stage of the product life cycle.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Recommend two strategies to extend the product's life and justify each.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Evaluate whether the firm should exit the market instead.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "PLC decline response",
                statement:
                  "Firms fight decline through product development, repositioning or managed exit.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Three years of falling sales suggest decline — streaming substitutes have replaced DVDs.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Decline follows maturity as tastes change and substitutes take over.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Repositioning: pivot from rental to selling collectibles or nostalgia products.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Product development: offer related products like Blu-ray or merchandise.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Each strategy justified against the substitute threat.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "For exiting: declining demand may be irreversible as streaming dominates.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Against exiting: loyal niche customers and low-cost wind-down may still earn revenue.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Balanced judgement — exit if the niche cannot sustain the firm; otherwise reposition cheaply.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Falling sales amid streaming substitutes = decline. (b) Reposition to collectibles; develop adjacent products. (c) Exit only if niche demand cannot cover costs.",
            commonErrors: [
              "Suggesting price cuts alone to fight structural decline.",
            ],
          },
        },
        {
          id: "bus-u2-foreq14",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Monthly sales were $200k, $240k and $280k. Using a 3-month moving average, forecast next month's sales.",
          response: {
            type: "numeric",
            parts: [{ label: "Forecast sales", answer: 240000, unit: "$" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Moving average",
                statement: "Forecast = sum of last n periods / n",
              },
            ],
            steps: [
              {
                reasoning: "Add the three monthly sales figures.",
                working: "200000 + 240000 + 280000 = 720000",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Divide by the number of periods (3).",
                working: "720000 / 3",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State the forecast.",
                working: "240000",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$240,000$",
            commonErrors: ["Dividing by 2 or forgetting the thousands unit."],
          },
        },
        {
          id: "bus-u2-foreq15",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A firm's sales grew by $10\\%$ from $50,000$ to a new level. Calculate the new sales level.",
          response: {
            type: "numeric",
            parts: [{ label: "New sales", answer: 55000, unit: "$" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Percentage growth",
                statement: "New value = old value x (1 + growth rate)",
              },
            ],
            steps: [
              {
                reasoning: "Calculate the increase.",
                working: "0.10 x 50000 = 5000",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Add the increase to the original sales.",
                working: "50000 + 5000",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State the new sales level.",
                working: "55000",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$55,000$",
            commonErrors: ["Adding 10 to 50,000 instead of 10%."],
          },
        },
        {
          id: "bus-u2-foreq16",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Sales over 5 months were $100k, $120k, $140k, $160k and $180k. Calculate the 5-month moving average.",
          response: {
            type: "numeric",
            parts: [{ label: "Moving average", answer: 140000, unit: "$" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Moving average",
                statement: "Forecast = sum of last n periods / n",
              },
            ],
            steps: [
              {
                reasoning: "Add the five monthly sales figures.",
                working: "100000 + 120000 + 140000 + 160000 + 180000 = 700000",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Divide by the number of periods (5).",
                working: "700000 / 5",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State the moving average.",
                working: "140000",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$140,000$",
            commonErrors: ["Dividing by 4 instead of 5 periods."],
          },
        },
      ],
    },
    {
      id: "bus-u2-ecommerce-digital",
      title: "E-commerce and digital marketing",
      skill:
        "Explain online sales channels, digital marketing tools and social media marketing, and evaluate the advantages and risks of e-commerce.",
      lesson: {
        sections: [
          {
            heading: "Online sales channels",
            body: "**E-commerce** lets businesses sell through websites, online marketplaces (e.g. Amazon, Shopee) and apps — reaching customers 24/7 without geographic limits. **Click-and-mortar** firms combine physical stores with online channels, letting customers buy online and collect in-store. Online channels reduce shop costs but require investment in websites, payment systems and logistics.",
          },
          {
            heading: "Digital marketing tools",
            body: "Digital marketing uses online channels: **social media marketing** (Instagram, TikTok, Facebook ads and influencer partnerships), **search engine optimisation** (ranking higher in Google results), **email marketing**, **content marketing** (blogs, videos) and **pay-per-click** advertising. These tools allow precise targeting and measurable results at relatively low cost.",
          },
          {
            heading: "Advantages and risks of e-commerce",
            body: "Advantages: global reach, lower overheads, 24/7 selling, data on customer behaviour, easy price comparison for customers. Risks: intense online competition and price wars, need for digital skills and technology investment, delivery/logistics challenges, security and fraud risks, and loss of personal customer contact.",
          },
        ],
        keyFormulas: [
          {
            name: "E-commerce channels",
            statement: "Website, online marketplace, app, social commerce",
          },
          {
            name: "Digital marketing tools",
            statement: "Social media, SEO, email, content, pay-per-click",
          },
        ],
        workedExample: {
          problem:
            "A bakery adds online ordering with local delivery. Identify two advantages and two risks.",
          solution:
            "Advantages: reach customers beyond footfall and collect sales data. Risks: delivery costs and packaging can erode margins; needs website maintenance and digital skills the owner may lack.",
        },
      },
      questions: [
        {
          id: "bus-u2-digq1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Which of the following is a digital marketing tool?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Newspaper inserts" },
              { id: "b", text: "Television advertising" },
              { id: "c", text: "Social media advertising" },
              { id: "d", text: "Billboard posters" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Digital marketing",
                statement:
                  "Promotion through online channels such as social media, search engines and email.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Social media advertising is delivered through online platforms.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Therefore choice (b) is correct — the others are traditional media.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Social media advertising",
            commonErrors: [
              "Counting TV or print ads as digital — they are traditional media.",
            ],
          },
        },
        {
          id: "bus-u2-digq2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "State three advantages of e-commerce for a small business.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "E-commerce advantages",
                statement:
                  "Global reach, 24/7 selling, lower overheads, customer data, wider choice for buyers.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Reach customers beyond the local area, 24 hours a day.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Lower costs — no physical shop needed for online-only sales.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Customer data enables targeted marketing; any third valid advantage.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Global reach, 24/7 trading, lower overheads, data insights.",
            commonErrors: [
              "Listing only generic business advantages not specific to selling online.",
            ],
          },
        },
        {
          id: "bus-u2-digq3",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "A craft jeweller currently sells only at weekend markets. She is considering launching an online store.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "E-commerce trade-offs",
                statement:
                  "Online sales expand reach but add costs, competition and operational demands.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Advantages: reach national/international customers, sell while markets are closed, build a brand via social media.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Costs and risks: website development, payment security, delivery logistics, returns handling.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Online competition may force lower prices, cutting the premium margins handmade goods rely on.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Conclusion: viable if she can manage logistics and differentiate on craftsmanship; markets alone limit growth.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Online store widens reach and hours but adds costs, competition and delivery complexity.",
            commonErrors: [
              "Ignoring the operational demands (delivery, returns, security) of going online.",
            ],
          },
        },
        {
          id: "bus-u2-digq4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 7,
          stem: "A local gym with 500 members is debating whether to shift most of its marketing budget from local radio ads to Instagram and TikTok campaigns.",
          parts: [
            {
              label: "a",
              prompt: "Define e-commerce and digital marketing.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Explain two digital marketing tools the gym could use.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Evaluate whether the gym should shift its marketing budget online.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "E-commerce/digital marketing",
                statement:
                  "E-commerce = selling online; digital marketing = promoting via online channels.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "E-commerce: buying/selling goods and services over the internet.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Digital marketing: promotion through online channels like social media, search and email.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Social media marketing: targeted ads and influencer content reaching young members.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Email marketing or SEO/content marketing to retain members and attract searchers.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Online ads are cheaper, measurable and targetable — better ROI than local radio for a young membership.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "But digital reach may attract non-local members who cannot use the gym; radio reaches the local community directly.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Reasoned judgement: shift most budget online but keep some local media for community presence.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Selling online vs promoting online. (b) Social media, email/SEO. (c) Mostly shift online; retain some local reach.",
            commonErrors: [
              "Assuming digital marketing only works for online-only businesses — gyms need local members.",
            ],
          },
        },
        {
          id: "bus-u2-digq5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Combining physical stores with online sales channels is called:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Search engine optimisation" },
              { id: "b", text: "Click-and-mortar" },
              { id: "c", text: "Pure e-commerce" },
              { id: "d", text: "Social media marketing" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Click-and-mortar",
                statement:
                  "A business combining physical stores with online sales channels.",
              },
            ],
            steps: [
              {
                reasoning: "Stores plus online channels = click-and-mortar.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Click-and-mortar",
            commonErrors: [
              "Confusing click-and-mortar (hybrid) with pure e-commerce (online only).",
            ],
          },
        },
        {
          id: "bus-u2-digq6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Improving a website's ranking in search engine results is known as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sales promotion" },
              { id: "b", text: "Click-and-mortar" },
              { id: "c", text: "Search engine optimisation (SEO)" },
              { id: "d", text: "Email marketing" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "SEO",
                statement:
                  "Techniques to rank higher in search engine results such as Google.",
              },
            ],
            steps: [
              {
                reasoning: "Ranking higher in search results = SEO.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Search engine optimisation (SEO)",
            commonErrors: [
              "Confusing SEO with paid advertising — SEO improves organic rankings.",
            ],
          },
        },
        {
          id: "bus-u2-digq7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A key advantage of e-commerce is that it allows businesses to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Never need delivery logistics" },
              { id: "b", text: "Avoid all competition" },
              { id: "c", text: "Sell 24/7 to a global audience" },
              { id: "d", text: "Sell only to local customers" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "E-commerce advantages",
                statement:
                  "Online sales reach global customers around the clock.",
              },
            ],
            steps: [
              {
                reasoning:
                  "E-commerce removes time and geographic limits on selling.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Sell 24/7 to a global audience",
            commonErrors: [
              "Claiming e-commerce removes competition — it often intensifies it.",
            ],
          },
        },
        {
          id: "bus-u2-digq8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Which of the following is a risk of e-commerce?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "24/7 selling" },
              { id: "b", text: "Security and fraud risks" },
              { id: "c", text: "Wider customer reach" },
              { id: "d", text: "Lower overhead costs" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "E-commerce risks",
                statement:
                  "Online selling faces security/fraud, logistics, competition and skills demands.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Payment security and fraud are genuine online trading risks.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Therefore choice (b) is correct — the others are advantages.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Security and fraud risks",
            commonErrors: ["Choosing an advantage instead of a risk."],
          },
        },
        {
          id: "bus-u2-digq9",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Partnering with a popular social media influencer to promote a product is an example of:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Social media marketing" },
              { id: "b", text: "Public relations" },
              { id: "c", text: "Search engine optimisation" },
              { id: "d", text: "Personal selling" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Social media marketing",
                statement:
                  "Promoting products through online platforms including influencer partnerships.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Influencer promotion on social platforms is social media marketing.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Social media marketing",
            commonErrors: [
              "Confusing influencer marketing with traditional public relations.",
            ],
          },
        },
        {
          id: "bus-u2-digq10",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Explain two advantages of digital marketing compared with traditional media.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Digital marketing benefits",
                statement:
                  "Online promotion is targeted, measurable, fast and relatively cheap.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Digital ads can target specific audiences precisely by age, location and interests.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Results are measurable — clicks, views and conversions can be tracked and adjusted.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Campaigns can launch quickly and cost less than TV or print for small firms.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Conclusion: digital marketing offers better targeting and ROI measurement.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Precise targeting and measurable results, often at lower cost.",
            commonErrors: [
              "Listing advantages of e-commerce rather than digital marketing.",
            ],
          },
        },
        {
          id: "bus-u2-digq11",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Explain two risks a small business faces when moving its sales online.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Online selling risks",
                statement:
                  "E-commerce adds logistics, security, competition and skills demands.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Delivery and returns logistics can be complex and costly, especially for perishables or bulky goods.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Online competition and easy price comparison can force margins down.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The business needs digital skills and payment security — small firms may lack both.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Conclusion: going online trades reach for operational demands and competition.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Logistics costs and intense online price competition, plus skills and security needs.",
            commonErrors: [
              "Listing advantages of online sales instead of risks.",
            ],
          },
        },
        {
          id: "bus-u2-digq12",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 7,
          stem: "A local bakery is considering adding online ordering with local delivery.",
          parts: [
            {
              label: "a",
              prompt:
                "Explain two digital marketing tools the bakery could use.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Recommend an online channel strategy and justify it for this business.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Evaluate whether the bakery should be click-and-mortar or online-only.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Online channel strategy",
                statement:
                  "Digital tools plus a suitable channel mix must fit the product and customers.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Social media marketing — photos of products and daily specials reach local customers cheaply.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Email marketing or online ordering — retains regulars and takes orders directly.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "A hybrid channel: keep the shop and add online ordering with click-and-collect or local delivery.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Justified by fresh bread needing fast, local fulfilment — delivery radius must be short.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Any coherent channel recommendation clearly justified earns the mark.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Click-and-mortar keeps the sensory experience of fresh bread that online-only cannot replicate.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Balanced judgement — online-only would lose the shop experience and add delivery costs.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Social media and email/online ordering. (b) Hybrid click-and-collect for fresh, local product. (c) Click-and-mortar best — preserves shop experience.",
            commonErrors: [
              "Ignoring perishability when recommending delivery channels.",
            ],
          },
        },
        {
          id: "bus-u2-digq13",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "A furniture retailer is debating a major shift of its business online.",
          parts: [
            {
              label: "a",
              prompt: "Distinguish between e-commerce and digital marketing.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Recommend two digital marketing tools and justify each for this retailer.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Evaluate the main risks of the proposed shift to e-commerce.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "E-commerce vs digital marketing",
                statement:
                  "E-commerce = selling online; digital marketing = promoting via online channels.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "E-commerce is the actual buying and selling of goods over the internet.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Digital marketing is promotion through online channels like social media and search.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Social media marketing — furniture is visual; photos and room setups showcase products.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "SEO or email marketing — attract searchers and retain past customers.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Each tool justified for a furniture retailer's needs.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Risk: bulky furniture needs costly delivery and returns handling.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Risk: intense online price competition and the loss of in-store browsing experience.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Balanced judgement — a hybrid click-and-mortar model may beat full online shift.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Selling online vs promoting online. (b) Social media plus SEO/email, justified. (c) Delivery costs and price competition are key risks.",
            commonErrors: [
              "Treating e-commerce and digital marketing as the same thing.",
            ],
          },
        },
        {
          id: "bus-u2-digq14",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A retailer's total sales are 250,000 dollars and online sales account for $40\\%$ of the total. Calculate online sales.",
          response: {
            type: "numeric",
            parts: [{ label: "Online sales", answer: 100000, unit: "$" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Percentage of total",
                statement: "Part = percentage x total",
              },
            ],
            steps: [
              {
                reasoning: "Convert the percentage to a decimal.",
                working: "40% = 0.40",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Multiply by total sales.",
                working: "0.40 x 250000",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State online sales.",
                working: "100000",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$100,000$",
            commonErrors: ["Multiplying by 40 instead of 0.40."],
          },
        },
        {
          id: "bus-u2-digq15",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "An online ad campaign costs 5,000 dollars and generates 200 orders. Calculate the cost per order.",
          response: {
            type: "numeric",
            parts: [{ label: "Cost per order", answer: 25, unit: "$" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Cost per order",
                statement: "Cost per order = campaign cost / orders generated",
              },
            ],
            steps: [
              {
                reasoning: "Identify campaign cost and orders generated.",
                working: "5000 / 200",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Divide cost by orders.",
                working: "5000 / 200 = 25",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State the cost per order.",
                working: "25",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$25$ per order",
            commonErrors: ["Dividing 200 by 5,000 instead of cost by orders."],
          },
        },
        {
          id: "bus-u2-digq16",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A business emails 10,000 customers and $2\\%$ respond with an order. Calculate the number of orders.",
          response: {
            type: "numeric",
            parts: [{ label: "Number of orders", answer: 200, unit: "orders" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Response count",
                statement: "Orders = response rate x number emailed",
              },
            ],
            steps: [
              {
                reasoning: "Convert the percentage to a decimal.",
                working: "2% = 0.02",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Multiply by the number of emails sent.",
                working: "0.02 x 10000",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State the number of orders.",
                working: "200",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$200$ orders",
            commonErrors: ["Multiplying by 2 instead of 0.02."],
          },
        },
      ],
    },
  ],
};
