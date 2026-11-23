module.exports = [
  {
    file: "lesson-8-1.ts", exportName: "lesson81",
    lesson: {
      id: "ebz10-u8-lesson-8-1", code: "8-1",
      title: "Economic Influences on Business",
      goal: "I CAN explain how economic conditions and government economic policy affect business decisions.",
      standards: ["Edexcel IGCSE Business 4BS0 — External Influences on Business Activity"],
      vocabulary: [
        { term: "Economic growth", definition: "Increase in total output of an economy over time." },
        { term: "Inflation", definition: "General rise in the price level of goods and services." },
        { term: "Unemployment", definition: "Proportion of the workforce without work but seeking it." },
        { term: "Interest rate", definition: "Price of borrowing money, set by the central bank." },
        { term: "Exchange rate", definition: "Value of one currency in terms of another." },
        { term: "Fiscal policy", definition: "Government spending and taxation decisions." },
        { term: "Monetary policy", definition: "Central bank control of interest rates and money supply." },
      ],
      concepts: [
        {
          id: "ebz10-u8-economic", title: "Economic Conditions",
          skill: "Explain how growth, inflation, unemployment, interest and exchange rates affect business.",
          sections: [
            { heading: "Key indicators", body: "**Economic growth** raises demand — good for sales but can push up wages and costs. **Inflation** erodes purchasing power: businesses must raise prices or margins shrink; lenders dislike uncertainty. **Unemployment** means weaker demand for normal goods but cheaper, available labour. **Interest rates** affect borrowing costs and consumer spending on credit. **Exchange rates** matter for importers/exporters — a weaker domestic currency makes exports cheaper abroad but imports dearer." },
            { heading: "Business responses", body: "Managers monitor these indicators to plan. Rising interest rates → postpone borrowing for expansion. High inflation → review pricing, index wages, lock in supplier contracts. Strong exchange rate → importers gain, exporters struggle — exporters may cut costs or find new markets." },
          ],
          keyFormulas: [],
          workedExample: {
            problem: "A country's currency weakens against the euro. How does this affect a domestic exporter and an importer?",
            solution: "Exporter: goods cheaper for euro buyers → likely higher demand. Importer: euro goods cost more in domestic currency → higher input costs or prices.",
          },
          questions: [
            {
              id: "ebz10-u8-econ-q1", difficulty: "foundation", totalMarks: 2,
              stem: "What is inflation?",
              response: { type: "mcq", choices: [
                { id: "a", text: "A general rise in the price level" },
                { id: "b", text: "A fall in economic output" },
                { id: "c", text: "An increase in unemployment" },
                { id: "d", text: "A rise in interest rates" },
              ], correctChoiceId: "a" },
              markscheme: {
                principles: [{ kind: "definition", name: "Inflation", statement: "General rise in prices over time." }],
                steps: [{ reasoning: "Inflation is measured by price indices such as the consumer price index.", marks: 2, markCode: "AO1" }],
                finalAnswer: "**(a)** General rise in prices",
              },
            },
            {
              id: "ebz10-u8-econ-q2", difficulty: "foundation", totalMarks: 3,
              stem: "Give two ways rising interest rates affect a business.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Interest rate effects", statement: "Costlier borrowing, weaker credit demand." }],
                steps: [
                  { reasoning: "Borrowing becomes more expensive — loans and overdrafts cost more.", marks: 1, markCode: "AO2" },
                  { reasoning: "Consumers cut spending on credit purchases, reducing sales.", marks: 1, markCode: "AO2" },
                  { reasoning: "Returns on savings rise, encouraging saving over spending.", marks: 1, markCode: "AO3" },
                ],
                finalAnswer: "Higher borrowing costs and weaker consumer demand.",
              },
            },
            {
              id: "ebz10-u8-econ-q3", difficulty: "core", totalMarks: 4,
              stem: "Explain how high inflation can affect a business's pricing decisions.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "context", name: "Inflation and pricing", statement: "Costs rise; prices must follow or margins fall." }],
                steps: [
                  { reasoning: "Input costs rise during inflation — raw materials, wages, energy.", marks: 1, markCode: "AO2" },
                  { reasoning: "Fixed contracts may delay the impact, but eventually costs feed through.", marks: 1, markCode: "AO2" },
                  { reasoning: "If prices are not raised, profit margins shrink.", marks: 1, markCode: "AO2" },
                  { reasoning: "Raising prices risks losing customers to competitors — a pricing dilemma.", marks: 1, markCode: "AO3" },
                ],
                finalAnswer: "Inflation pushes costs up; prices must rise to protect margins, but demand may fall.",
                commonErrors: ["Only one side of the dilemma explained."],
              },
            },
            {
              id: "ebz10-u8-econ-q4", difficulty: "challenge", totalMarks: 5,
              stem: "An economy enters recession: GDP falls, unemployment rises and consumer confidence drops.",
              parts: [
                { label: "a", prompt: "Explain two ways this affects a car manufacturer.", marks: 3 },
                { label: "b", prompt: "Suggest two responses the manufacturer could make.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "context", name: "Recession effects", statement: "Falling demand, cheaper labour, cautious spending." }],
                steps: [
                  { reasoning: "(a) Car sales fall as consumers postpone big purchases.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Unemployment rises — both demand for cars and labour supply change.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Credit becomes harder to get, further reducing purchases.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(b) Cut output, reduce workforce or offer redundancies; focus on essential models.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Strengthen marketing to value-conscious buyers; manage cash carefully.", marks: 1, markCode: "AO3", part: "b" },
                ],
                finalAnswer: "(a) falling demand, credit tightening (b) cut output, target value buyers, manage cash.",
              },
            },
            {
              id: "ebz10-u8-econ-q5", difficulty: "challenge", totalMarks: 6,
              stem: "A country's exchange rate against the dollar strengthens by 20%.",
              parts: [
                { label: "a", prompt: "Explain the effect on an exporter of electronics and an importer of components.", marks: 3 },
                { label: "b", prompt: "Suggest two strategies each business could use.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "context", name: "Exchange rate effects", statement: "Strong currency = dearer exports, cheaper imports." }],
                steps: [
                  { reasoning: "(a) Exporter: goods cost more in dollars — demand may fall.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Importer: dollar components cheaper — input costs fall.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Importer gains margin or can cut prices.", marks: 1, markCode: "AO3", part: "a" },
                  { reasoning: "(b) Exporter: cut costs, find new markets, differentiate on quality.", marks: 2, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Importer: lock in favourable rates, renegotiate contracts, pass savings to customers.", marks: 1, markCode: "AO3", part: "b" },
                ],
                finalAnswer: "(a) exporter hurt, importer helped (b) exporter: efficiency/new markets; importer: lock in gains.",
              },
            },
            {
              id: "ebz10-u8-econ-q6", difficulty: "challenge", totalMarks: 10,
              stem: "The government raises interest rates to control inflation. A furniture business has a large loan and sells mostly on credit to consumers.",
              parts: [
                { label: "a", prompt: "Explain two ways the rate rise affects this business directly.", marks: 4 },
                { label: "b", prompt: "Explain two ways it affects the business indirectly through customers.", marks: 3 },
                { label: "c", prompt: "Evaluate how the business should respond.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "context", name: "Interest rate transmission", statement: "Direct cost effects plus demand effects." }],
                steps: [
                  { reasoning: "(a) Loan repayments become more expensive — interest costs rise.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Any new borrowing for stock or expansion costs more.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Customers' credit costs rise, reducing demand for big-ticket furniture.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Mortgages cost more, leaving households less to spend.", marks: 1, markCode: "AO3", part: "a" },
                  { reasoning: "(b) Consumers postpone furniture purchases — discretionary spending falls first.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Demand shifts to cheaper products or second-hand goods.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Business may need promotions or financing offers to sustain sales.", marks: 1, markCode: "AO3", part: "b" },
                  { reasoning: "(c) Responses: renegotiate loan terms, cut costs, promote value lines, manage cash tightly; monitor demand before investing.", marks: 2, markCode: "AO2", part: "c" },
                  { reasoning: "(c) Rates may fall later — avoid over-reacting with permanent cuts.", marks: 1, markCode: "AO3", part: "c" },
                ],
                finalAnswer: "Direct: higher loan and borrowing costs. Indirect: weaker consumer demand. Respond with cost control, value products and careful investment.",
              },
            },
          ],
        },
        {
          id: "ebz10-u8-govpolicy", title: "Government Economic Policy",
          skill: "Explain fiscal and monetary policy and their effects on business.",
          sections: [
            { heading: "Fiscal policy", body: "Government uses **taxation** and **government spending** to steer the economy. Raising taxes or cutting spending cools demand (used against inflation); cutting taxes or increasing spending stimulates demand (used in recession). Businesses feel this through consumer spending power, contracts and grants." },
            { heading: "Monetary policy", body: "The **central bank** sets **interest rates** and controls the **money supply**. Raising rates reduces borrowing and spending (fights inflation); lowering rates encourages borrowing and investment (boosts growth). Businesses must track rate decisions because they affect loan costs, customer demand and exchange rates." },
          ],
          keyFormulas: [],
          workedExample: {
            problem: "Inflation is rising. What should the central bank do and how does it reach businesses?",
            solution: "Raise interest rates — borrowing becomes costly, spending and demand fall, easing price pressure. Businesses face higher loan costs and weaker sales.",
          },
          questions: [
            {
              id: "ebz10-u8-pol-q1", difficulty: "foundation", totalMarks: 2,
              stem: "What is fiscal policy?",
              response: { type: "mcq", choices: [
                { id: "a", text: "Government decisions on taxation and spending" },
                { id: "b", text: "Central bank interest rate decisions" },
                { id: "c", text: "Company budget setting" },
                { id: "d", text: "Import and export rules" },
              ], correctChoiceId: "a" },
              markscheme: {
                principles: [{ kind: "definition", name: "Fiscal policy", statement: "Taxation and government spending." }],
                steps: [{ reasoning: "Fiscal policy is run by government, not the central bank.", marks: 2, markCode: "AO1" }],
                finalAnswer: "**(a)** Taxation and spending",
              },
            },
            {
              id: "ebz10-u8-pol-q2", difficulty: "foundation", totalMarks: 3,
              stem: "Give two tools of monetary policy.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Monetary policy", statement: "Interest rates and money supply." }],
                steps: [
                  { reasoning: "Setting interest rates.", marks: 1, markCode: "AO1" },
                  { reasoning: "Controlling the money supply / quantitative easing.", marks: 1, markCode: "AO1" },
                  { reasoning: "Both are used to control inflation and growth.", marks: 1, markCode: "AO3" },
                ],
                finalAnswer: "Interest rates and money supply control.",
              },
            },
            {
              id: "ebz10-u8-pol-q3", difficulty: "core", totalMarks: 4,
              stem: "Explain how a government could use fiscal policy to reduce unemployment.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Expansionary fiscal policy", statement: "More spending or lower taxes to boost demand and jobs." }],
                steps: [
                  { reasoning: "Increase government spending on infrastructure or services.", marks: 1, markCode: "AO2" },
                  { reasoning: "This creates jobs directly and raises demand for business output.", marks: 1, markCode: "AO2" },
                  { reasoning: "Cutting taxes leaves households more to spend, lifting demand.", marks: 1, markCode: "AO2" },
                  { reasoning: "Firms hire more workers to meet higher demand — unemployment falls.", marks: 1, markCode: "AO3" },
                ],
                finalAnswer: "Higher spending or lower taxes boost demand, output and employment.",
              },
            },
            {
              id: "ebz10-u8-pol-q4", difficulty: "challenge", totalMarks: 5,
              stem: "Inflation in the economy has reached 8% and the government wants it below 3%.",
              parts: [
                { label: "a", prompt: "Describe one fiscal and one monetary measure the authorities could use.", marks: 3 },
                { label: "b", prompt: "Explain the likely short-term effect of each on a small business.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Contractionary policy", statement: "Higher taxes/spending cuts and higher interest rates cool demand." }],
                steps: [
                  { reasoning: "(a) Fiscal: raise taxes or cut government spending to reduce demand.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Monetary: raise interest rates to make borrowing and spending costlier.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Both aim to reduce aggregate demand and price pressure.", marks: 1, markCode: "AO3", part: "a" },
                  { reasoning: "(b) Higher taxes cut customer spending power; higher rates raise loan costs.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Small business may see weaker sales and must control costs.", marks: 1, markCode: "AO3", part: "b" },
                ],
                finalAnswer: "(a) tax rises/spending cuts + higher interest rates (b) weaker demand, costlier borrowing.",
              },
            },
            {
              id: "ebz10-u8-pol-q5", difficulty: "challenge", totalMarks: 6,
              stem: "An economy is in recession with rising unemployment. The government is debating policy responses.",
              parts: [
                { label: "a", prompt: "Explain two demand-side measures government could take.", marks: 3 },
                { label: "b", prompt: "Explain one supply-side measure and why it might help.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Policy mix", statement: "Demand stimulus plus supply-side reform." }],
                steps: [
                  { reasoning: "(a) Cut interest rates to encourage borrowing and spending.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Increase government spending on projects to create jobs directly.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Cut taxes to raise household disposable income and demand.", marks: 1, markCode: "AO3", part: "a" },
                  { reasoning: "(b) Supply-side: invest in education/training to raise workforce skills.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Or reduce business regulation to lower costs and encourage hiring.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Supply-side measures improve long-run competitiveness and employment.", marks: 1, markCode: "AO3", part: "b" },
                ],
                finalAnswer: "(a) lower rates, more spending, tax cuts (b) training/regulation reform for long-run jobs.",
              },
            },
            {
              id: "ebz10-u8-pol-q6", difficulty: "challenge", totalMarks: 10,
              stem: "The central bank raises interest rates from 2% to 5% to fight inflation. A construction company relies heavily on bank loans and employs many workers.",
              parts: [
                { label: "a", prompt: "Explain two direct effects of the rate rise on the company.", marks: 4 },
                { label: "b", prompt: "Explain two indirect effects through the wider economy.", marks: 3 },
                { label: "c", prompt: "Evaluate the company's options and recommend a course of action.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "context", name: "Monetary tightening", statement: "Costlier credit reduces investment and demand." }],
                steps: [
                  { reasoning: "(a) Loan interest payments rise sharply — costs increase.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) New borrowing for projects becomes expensive or unavailable.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Mortgage costs rise for households — fewer people buy homes.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Construction demand falls as projects are postponed.", marks: 1, markCode: "AO3", part: "a" },
                  { reasoning: "(b) Consumers cut spending — less demand for commercial building work.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Firms delay investment, reducing demand for the company's services.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Unemployment may rise as demand contracts across the economy.", marks: 1, markCode: "AO3", part: "b" },
                  { reasoning: "(c) Options: renegotiate loans, focus on essential/maintenance work, cut costs, seek fixed-rate finance.", marks: 2, markCode: "AO2", part: "c" },
                  { reasoning: "(c) Recommendation: protect cash, avoid new debt, diversify into repair/maintenance contracts.", marks: 1, markCode: "AO3", part: "c" },
                ],
                finalAnswer: "Direct: higher loan costs, less new borrowing. Indirect: weaker construction demand. Act by controlling debt and costs, diversifying into maintenance work.",
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "ebz10-u8-env1-notes", title: "Economic influences — notes",
      summary: "Growth, inflation, unemployment, interest and exchange rates shape demand and costs. Government uses fiscal and monetary policy to steer the economy.",
      sections: [
        { heading: "Indicators", body: "Growth = more demand; inflation = rising prices/costs; unemployment = weaker demand; interest rates = borrowing cost; exchange rates = trade competitiveness." },
        { heading: "Fiscal policy", body: "Taxes and government spending — stimulate in recession, cool in inflation." },
        { heading: "Monetary policy", body: "Central bank sets interest rates and money supply — main tool against inflation and for growth." },
      ],
    },
  },
  {
    file: "lesson-8-2.ts", exportName: "lesson82",
    lesson: {
      id: "ebz10-u8-lesson-8-2", code: "8-2",
      title: "Social, Technological and Legal Influences",
      goal: "I CAN explain how social, technological and legal changes affect business activity.",
      standards: ["Edexcel IGCSE Business 4BS0 — External Influences on Business Activity"],
      vocabulary: [
        { term: "Demographics", definition: "Statistical study of populations — age, income, location." },
        { term: "Consumer trend", definition: "Changing pattern in what customers want to buy." },
        { term: "Technology", definition: "Tools, machines and systems used in production and communication." },
        { term: "Automation", definition: "Using machines to perform tasks with little human input." },
        { term: "Legislation", definition: "Laws made by government that businesses must follow." },
        { term: "Ethics", definition: "Principles of right and wrong behaviour in business." },
      ],
      concepts: [
        {
          id: "ebz10-u8-socialtech", title: "Social and Technological Change",
          skill: "Explain demographic, consumer and technology trends and their business impact.",
          sections: [
            { heading: "Social influences", body: "**Demographics**: an ageing population creates demand for healthcare and retirement products; younger populations drive tech and fashion. Rising incomes increase demand for luxury goods; falling incomes shift demand to essentials. **Consumer trends** like health-consciousness, sustainability and convenience reshape what sells — businesses must research and adapt." },
            { heading: "Technological change", body: "Technology transforms operations and markets: e-commerce, automation, robotics, digital marketing. Benefits: lower costs, new markets, better data. Challenges: high setup costs, skills gaps, job losses, rapid obsolescence. Businesses that ignore technology risk losing competitiveness." },
          ],
          keyFormulas: [],
          workedExample: {
            problem: "A country's population is ageing. Which businesses benefit most and why?",
            solution: "Healthcare, pharmacies, mobility aids, insurance and retirement housing — demand for age-related products and services rises.",
          },
          questions: [
            {
              id: "ebz10-u8-st-q1", difficulty: "foundation", totalMarks: 2,
              stem: "What is demographics?",
              response: { type: "mcq", choices: [
                { id: "a", text: "Study of population characteristics like age and income" },
                { id: "b", text: "Study of business profits" },
                { id: "c", text: "Government economic policy" },
                { id: "d", text: "A type of market research survey" },
              ], correctChoiceId: "a" },
              markscheme: {
                principles: [{ kind: "definition", name: "Demographics", statement: "Population statistics: age, income, location." }],
                steps: [{ reasoning: "Demographics describe who lives in a market.", marks: 2, markCode: "AO1" }],
                finalAnswer: "**(a)** Population characteristics",
              },
            },
            {
              id: "ebz10-u8-st-q2", difficulty: "foundation", totalMarks: 3,
              stem: "Give two benefits of technology for a business.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Technology benefits", statement: "Efficiency, reach, data." }],
                steps: [
                  { reasoning: "Automation lowers costs and speeds up production.", marks: 1, markCode: "AO2" },
                  { reasoning: "E-commerce and digital marketing reach global customers.", marks: 1, markCode: "AO2" },
                  { reasoning: "Data and analytics improve decisions and customer service.", marks: 1, markCode: "AO3" },
                ],
                finalAnswer: "Lower costs, wider reach, better data.",
              },
            },
            {
              id: "ebz10-u8-st-q3", difficulty: "core", totalMarks: 4,
              stem: "Explain how an ageing population could create business opportunities.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "context", name: "Demographic opportunity", statement: "New demand from changing population." }],
                steps: [
                  { reasoning: "More elderly people need healthcare, medicines and care services.", marks: 1, markCode: "AO2" },
                  { reasoning: "Mobility aids, home adaptations and insurance demand rises.", marks: 1, markCode: "AO2" },
                  { reasoning: "Retirement products — pensions, housing, travel — grow.", marks: 1, markCode: "AO2" },
                  { reasoning: "Businesses can target this growing, often wealthier segment.", marks: 1, markCode: "AO3" },
                ],
                finalAnswer: "Healthcare, mobility, insurance and retirement products see rising demand.",
              },
            },
            {
              id: "ebz10-u8-st-q4", difficulty: "challenge", totalMarks: 5,
              stem: "A clothing retailer notices growing demand for sustainable, ethically made products.",
              parts: [
                { label: "a", prompt: "Explain two ways this social trend could affect the retailer.", marks: 3 },
                { label: "b", prompt: "Suggest two responses the retailer could make.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "context", name: "Consumer trends", statement: "Values-driven purchasing reshapes demand." }],
                steps: [
                  { reasoning: "(a) Customers may switch to competitors offering sustainable ranges.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Existing products may be seen as unethical — reputation risk.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) New product lines aligned with values could capture growth.", marks: 1, markCode: "AO3", part: "a" },
                  { reasoning: "(b) Source sustainable materials and audit suppliers; promote ethical credentials.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Reposition branding around sustainability to win loyal customers.", marks: 1, markCode: "AO3", part: "b" },
                ],
                finalAnswer: "(a) customer switching, reputation risk, growth opportunity (b) sustainable sourcing, ethical branding.",
              },
            },
            {
              id: "ebz10-u8-st-q5", difficulty: "challenge", totalMarks: 6,
              stem: "A factory introduces automated machinery that replaces 40 assembly-line workers.",
              parts: [
                { label: "a", prompt: "Explain two benefits and two drawbacks of this technological change for the business.", marks: 4 },
                { label: "b", prompt: "Suggest one way the business could reduce the negative social impact.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "comparison", name: "Automation", statement: "Efficiency gains vs job losses and costs." }],
                steps: [
                  { reasoning: "(a) Benefits: lower labour costs, higher output/consistency, fewer errors.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Drawbacks: high capital cost, 40 workers lose jobs, skills become obsolete.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(b) Retrain displaced workers for technical/maintenance roles or offer redundancy support.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Reskilling preserves goodwill and retains institutional knowledge.", marks: 1, markCode: "AO3", part: "b" },
                ],
                finalAnswer: "(a) lower costs/higher output vs job losses/high cost (b) retrain or support displaced workers.",
              },
            },
            {
              id: "ebz10-u8-st-q6", difficulty: "challenge", totalMarks: 10,
              stem: "A regional supermarket chain faces competition from online grocery delivery and changing consumer habits.",
              parts: [
                { label: "a", prompt: "Explain two technological changes driving this competition.", marks: 3 },
                { label: "b", prompt: "Explain two ways changing consumer habits affect the chain.", marks: 3 },
                { label: "c", prompt: "Evaluate whether the chain should invest heavily in online delivery.", marks: 4 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "context", name: "Digital disruption", statement: "Technology plus changing habits reshape retail." }],
                steps: [
                  { reasoning: "(a) E-commerce platforms and apps enable home delivery at scale.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Mobile payments, same-day logistics and data analytics improve service.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Competitors use technology to cut costs and personalise offers.", marks: 1, markCode: "AO3", part: "a" },
                  { reasoning: "(b) Customers want convenience — fewer shop visits, more home delivery.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Value and ethical sourcing expectations rise alongside convenience.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Health and sustainability trends shift product demand.", marks: 1, markCode: "AO3", part: "b" },
                  { reasoning: "(c) For: protects market share, captures growing channel, data benefits; Against: high investment, thin margins, may cannibalise stores.", marks: 2, markCode: "AO2", part: "c" },
                  { reasoning: "(c) Recommendation: invest but phase it — partner for delivery or pilot before full commitment.", marks: 2, markCode: "AO3", part: "c" },
                ],
                finalAnswer: "(a) e-commerce, logistics, data (b) convenience, ethics, health demand (c) invest cautiously — partner/pilot first.",
              },
            },
          ],
        },
        {
          id: "ebz10-u8-legalethics", title: "Legal and Ethical Influences",
          skill: "Explain how legislation and ethical expectations constrain and guide business.",
          sections: [
            { heading: "Legislation", body: "Laws set minimum standards businesses must meet: **employment law** (contracts, minimum wage, discrimination, health and safety), **consumer protection** (accurate pricing, product safety, refunds), **environmental law** (waste disposal, emissions limits). Breaking the law brings fines, prosecution and reputational damage. Compliance costs money but also protects workers and customers." },
            { heading: "Ethics and pressure groups", body: "Beyond legal minimums, businesses face ethical expectations from customers, employees and **pressure groups** (e.g. environmental or consumer campaigners). Acting ethically can build loyalty and reputation; ignoring ethics risks boycotts and lost sales. Many firms adopt CSR policies voluntarily to stay ahead of regulation and public opinion." },
          ],
          keyFormulas: [],
          workedExample: {
            problem: "A factory dumps waste into a river. Which influence is violated and what could happen?",
            solution: "Environmental legislation — the firm faces fines/prosecution, cleanup costs and reputational damage; pressure groups may campaign against it.",
          },
          questions: [
            {
              id: "ebz10-u8-le-q1", difficulty: "foundation", totalMarks: 2,
              stem: "What is legislation?",
              response: { type: "mcq", choices: [
                { id: "a", text: "Laws made by government that businesses must follow" },
                { id: "b", text: "Company rules made by managers" },
                { id: "c", text: "Voluntary industry codes" },
                { id: "d", text: "Customer complaints" },
              ], correctChoiceId: "a" },
              markscheme: {
                principles: [{ kind: "definition", name: "Legislation", statement: "Binding laws governing business conduct." }],
                steps: [{ reasoning: "Legislation is compulsory — unlike voluntary ethics.", marks: 2, markCode: "AO1" }],
                finalAnswer: "**(a)** Government-made laws",
              },
            },
            {
              id: "ebz10-u8-le-q2", difficulty: "foundation", totalMarks: 3,
              stem: "Give two examples of employment legislation that affects businesses.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "context", name: "Employment law", statement: "Laws protecting workers." }],
                steps: [
                  { reasoning: "Minimum wage and working-time rules.", marks: 1, markCode: "AO1" },
                  { reasoning: "Health and safety requirements in the workplace.", marks: 1, markCode: "AO1" },
                  { reasoning: "Anti-discrimination laws in hiring and promotion.", marks: 1, markCode: "AO3" },
                ],
                finalAnswer: "Minimum wage, health & safety, anti-discrimination laws.",
              },
            },
            {
              id: "ebz10-u8-le-q3", difficulty: "core", totalMarks: 4,
              stem: "Explain why businesses must comply with consumer protection laws.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Compliance", statement: "Legal minimums protect customers and the firm." }],
                steps: [
                  { reasoning: "Laws require accurate pricing, safe products and fair contracts.", marks: 1, markCode: "AO1" },
                  { reasoning: "Non-compliance brings fines, lawsuits and prosecution.", marks: 1, markCode: "AO2" },
                  { reasoning: "Reputation damage loses customers and investor confidence.", marks: 1, markCode: "AO2" },
                  { reasoning: "Compliance also builds trust — customers return to reliable firms.", marks: 1, markCode: "AO3" },
                ],
                finalAnswer: "Avoid penalties and protect reputation; compliance builds customer trust.",
              },
            },
            {
              id: "ebz10-u8-le-q4", difficulty: "challenge", totalMarks: 5,
              stem: "A fashion retailer discovers its supplier uses child labour.",
              parts: [
                { label: "a", prompt: "Explain two legal or ethical problems this creates for the retailer.", marks: 3 },
                { label: "b", prompt: "Suggest two actions the retailer should take.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "context", name: "Supply chain ethics", statement: "Responsibility extends to suppliers." }],
                steps: [
                  { reasoning: "(a) Possible breach of labour/ethical sourcing standards and laws.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Consumer boycotts and pressure-group campaigns could damage sales.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Brand reputation — a core asset — is at risk.", marks: 1, markCode: "AO3", part: "a" },
                  { reasoning: "(b) Terminate the supplier contract and audit the supply chain.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Publish ethical sourcing policy and switch to certified suppliers.", marks: 1, markCode: "AO3", part: "b" },
                ],
                finalAnswer: "(a) legal/ethical breach, boycott risk, reputation damage (b) audit, switch suppliers, publish policy.",
              },
            },
            {
              id: "ebz10-u8-le-q5", difficulty: "challenge", totalMarks: 6,
              stem: "New environmental law requires all manufacturers to cut emissions by 30% within two years.",
              parts: [
                { label: "a", prompt: "Explain two costs the law imposes on manufacturers.", marks: 3 },
                { label: "b", prompt: "Explain two benefits manufacturers might gain from early compliance.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "context", name: "Environmental regulation", statement: "Compliance costs now, advantages later." }],
                steps: [
                  { reasoning: "(a) Capital cost of cleaner equipment or technology.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Fines or shutdown if targets are missed.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Possible higher operating costs during transition.", marks: 1, markCode: "AO3", part: "a" },
                  { reasoning: "(b) Avoid penalties and maintain operating licences.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) 'Green' image attracts environmentally aware customers.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Efficiency gains — less waste often means lower costs long-term.", marks: 1, markCode: "AO3", part: "b" },
                ],
                finalAnswer: "(a) equipment costs, fines, transition costs (b) avoid penalties, green image, efficiency gains.",
              },
            },
            {
              id: "ebz10-u8-le-q6", difficulty: "challenge", totalMarks: 10,
              stem: "A food company uses palm oil linked to deforestation. Pressure groups launch a boycott campaign.",
              parts: [
                { label: "a", prompt: "Explain two ways the campaign could harm the company.", marks: 3 },
                { label: "b", prompt: "Explain the difference between legal compliance and ethical responsibility in this case.", marks: 3 },
                { label: "c", prompt: "Evaluate how the company should respond to protect its future.", marks: 4 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "context", name: "Ethical pressure", statement: "Reputation risk even when technically legal." }],
                steps: [
                  { reasoning: "(a) Sales fall as customers switch to competitors.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Retailers may delist the product; investors may sell shares.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Long-term brand damage outlasts the campaign.", marks: 1, markCode: "AO3", part: "a" },
                  { reasoning: "(b) Legal: palm oil use may not break any law — minimum standard met.", marks: 1, markCode: "AO1", part: "b" },
                  { reasoning: "(b) Ethical: stakeholders expect sustainable sourcing regardless of legality.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Ethics = doing what is right; law = doing what is required.", marks: 1, markCode: "AO3", part: "b" },
                  { reasoning: "(c) Respond quickly: commit to certified sustainable palm oil, audit supply chain.", marks: 2, markCode: "AO2", part: "c" },
                  { reasoning: "(c) Communicate transparently; engage with pressure groups rather than ignoring them.", marks: 1, markCode: "AO2", part: "c" },
                  { reasoning: "(c) Long-term: ethical sourcing becomes a selling point and shields against future regulation.", marks: 1, markCode: "AO3", part: "c" },
                ],
                finalAnswer: "(a) sales loss, delisting, brand damage (b) law = minimum, ethics = stakeholder expectations (c) switch to certified sources, engage stakeholders.",
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "ebz10-u8-env2-notes", title: "Social, technology, legal and ethical influences — notes",
      summary: "Demographics and trends shift demand; technology transforms operations; law sets minimums; ethics shapes reputation.",
      sections: [
        { heading: "Social", body: "Age, income and lifestyle trends create new demand — research customers and adapt products." },
        { heading: "Technology", body: "Automation and e-commerce cut costs and open markets but require investment and reskilling." },
        { heading: "Legal vs ethical", body: "Laws are compulsory minimums; ethics are voluntary standards that protect reputation and stakeholder trust." },
      ],
    },
  },
  {
    file: "lesson-8-3.ts", exportName: "lesson83",
    lesson: {
      id: "ebz10-u8-lesson-8-3", code: "8-3",
      title: "Competition and Globalisation",
      goal: "I CAN explain market structures, competitive pressures and the effects of globalisation on business.",
      standards: ["Edexcel IGCSE Business 4BS0 — External Influences on Business Activity"],
      vocabulary: [
        { term: "Perfect competition", definition: "Market with many small firms selling identical products." },
        { term: "Monopoly", definition: "Market dominated by a single supplier." },
        { term: "Oligopoly", definition: "Market dominated by a few large firms." },
        { term: "Market share", definition: "A firm's percentage of total market sales." },
        { term: "Globalisation", definition: "Growing integration of world markets and economies." },
        { term: "Multinational", definition: "Company operating in more than one country." },
        { term: "Free trade", definition: "Trade between countries without tariffs or quotas." },
      ],
      concepts: [
        {
          id: "ebz10-u8-competition", title: "Market Structures and Competition",
          skill: "Compare perfect competition, monopoly and oligopoly and explain competitive strategy.",
          sections: [
            { heading: "Market structures", body: "**Perfect competition**: many small firms, identical products, free entry — prices set by the market, low profits. **Monopoly**: one dominant firm controls supply — can charge higher prices but may face regulation. **Oligopoly**: a few large firms dominate (e.g. car makers, airlines) — intense competition through branding, price and product differentiation; high barriers to entry protect incumbents." },
            { heading: "Competitive strategy", body: "Firms compete on **price** (risking margin wars), **quality** (premium positioning), **service** (customer loyalty) and **innovation** (new products). Monitoring market share and rivals' actions guides strategy. Barriers to entry — capital needs, brand loyalty, patents — determine how contestable a market is." },
          ],
          keyFormulas: [],
          workedExample: {
            problem: "Three firms supply 90% of a country's smartphone market. What market structure is this and why?",
            solution: "Oligopoly — a few dominant firms control the market; high barriers (R&D costs, brand loyalty) keep new entrants out.",
          },
          questions: [
            {
              id: "ebz10-u8-comp-q1", difficulty: "foundation", totalMarks: 2,
              stem: "What is a monopoly?",
              response: { type: "mcq", choices: [
                { id: "a", text: "A market dominated by a single supplier" },
                { id: "b", text: "A market with many small firms" },
                { id: "c", text: "A type of tax" },
                { id: "d", text: "Free trade between countries" },
              ], correctChoiceId: "a" },
              markscheme: {
                principles: [{ kind: "definition", name: "Monopoly", statement: "Single dominant supplier controls the market." }],
                steps: [{ reasoning: "Monopoly gives the firm power over price and supply.", marks: 2, markCode: "AO1" }],
                finalAnswer: "**(a)** Single dominant supplier",
              },
            },
            {
              id: "ebz10-u8-comp-q2", difficulty: "foundation", totalMarks: 3,
              stem: "Give two characteristics of an oligopoly.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Oligopoly", statement: "Few dominant firms, high barriers to entry." }],
                steps: [
                  { reasoning: "A small number of large firms dominate the market.", marks: 1, markCode: "AO1" },
                  { reasoning: "High barriers to entry — capital, brands, technology needed.", marks: 1, markCode: "AO1" },
                  { reasoning: "Firms compete on non-price factors like branding and service.", marks: 1, markCode: "AO3" },
                ],
                finalAnswer: "Few dominant firms, high entry barriers, non-price competition.",
              },
            },
            {
              id: "ebz10-u8-comp-q3", difficulty: "core", totalMarks: 4,
              stem: "Explain why perfect competition tends to keep prices low.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Competition and price", statement: "Many rivals prevent price rises." }],
                steps: [
                  { reasoning: "Many firms sell identical products — no differentiation.", marks: 1, markCode: "AO2" },
                  { reasoning: "If one firm raises price, customers switch to rivals instantly.", marks: 1, markCode: "AO2" },
                  { reasoning: "Free entry forces prices toward cost levels.", marks: 1, markCode: "AO2" },
                  { reasoning: "Result: only normal profits — firms cannot earn supernormal profit long-term.", marks: 1, markCode: "AO3" },
                ],
                finalAnswer: "Identical products and free entry force prices down to competitive levels.",
              },
            },
            {
              id: "ebz10-u8-comp-q4", difficulty: "challenge", totalMarks: 5,
              stem: "A small coffee shop competes with a large chain in the same town.",
              parts: [
                { label: "a", prompt: "Identify the market structure and explain one advantage the small shop has.", marks: 3 },
                { label: "b", prompt: "Suggest two strategies the small shop could use to compete.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "context", name: "Competitive strategy", statement: "Small firms differentiate on service, niche, locality." }],
                steps: [
                  { reasoning: "(a) Oligopoly or imperfect competition — chains dominate but independents exist.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Small shop can offer personalised service and local character the chain cannot.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(b) Differentiate — specialist products, local sourcing, community ties.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Focus on niche customers; build loyalty through service quality.", marks: 1, markCode: "AO3", part: "b" },
                ],
                finalAnswer: "(a) oligopoly-ish; advantage = personal service/local identity (b) differentiate, niche focus, loyalty.",
              },
            },
            {
              id: "ebz10-u8-comp-q5", difficulty: "challenge", totalMarks: 6,
              stem: "Firm A has 35% market share, Firm B 25%, Firm C 20%, and smaller firms share the rest in the soft-drinks market.",
              parts: [
                { label: "a", prompt: "Describe the market structure and justify your answer.", marks: 3 },
                { label: "b", prompt: "Explain two strategies Firm A might use to defend its leading share.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "context", name: "Market structure identification", statement: "Few large shares = oligopoly." }],
                steps: [
                  { reasoning: "(a) Oligopoly — three firms control 80% of the market.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Large shares indicate dominant players and entry barriers.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Remaining 20% split among small firms — not perfect competition.", marks: 1, markCode: "AO3", part: "a" },
                  { reasoning: "(b) Brand advertising to reinforce loyalty and raise switching costs.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Innovation — new flavours, healthier options, packaging.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Distribution deals with retailers to keep shelf space exclusive.", marks: 1, markCode: "AO3", part: "b" },
                ],
                finalAnswer: "(a) oligopoly — 3 firms hold 80% (b) branding, innovation, distribution exclusivity.",
              },
            },
            {
              id: "ebz10-u8-comp-q6", difficulty: "challenge", totalMarks: 10,
              stem: "A national bus company faces new competition from ride-sharing apps and privately owned coaches.",
              parts: [
                { label: "a", prompt: "Explain two ways competition affects the bus company's prices and profits.", marks: 3 },
                { label: "b", prompt: "Suggest three ways the company could respond strategically.", marks: 4 },
                { label: "c", prompt: "Evaluate whether price competition is the best response.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "context", name: "Competitive response", statement: "New entrants force adaptation." }],
                steps: [
                  { reasoning: "(a) Price pressure — rivals may undercut fares to win passengers.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Market share and revenue fall if passengers switch.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Matching low prices could trigger a profit-damaging price war.", marks: 1, markCode: "AO3", part: "a" },
                  { reasoning: "(b) Differentiate: reliable timetables, comfort, safety record.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Improve service quality and customer experience.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Cut costs — route optimisation, fuel efficiency, technology.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Adopt technology — booking apps, contactless payment.", marks: 1, markCode: "AO3", part: "b" },
                  { reasoning: "(c) Pure price war hurts both sides; differentiation and efficiency protect margins better.", marks: 2, markCode: "AO2", part: "c" },
                  { reasoning: "(c) Selective price matching on key routes may be needed, but not across the board.", marks: 1, markCode: "AO3", part: "c" },
                ],
                finalAnswer: "(a) price pressure, share loss, price-war risk (b) differentiate, service, cost control, apps (c) avoid blanket price cuts — mix value and efficiency.",
              },
            },
          ],
        },
        {
          id: "ebz10-u8-global", title: "Globalisation",
          skill: "Explain globalisation, multinationals and its opportunities and threats for business.",
          sections: [
            { heading: "What globalisation is", body: "**Globalisation** = growing integration of world markets through trade, investment and technology. **Multinationals** operate across borders, sourcing inputs and selling globally. **Free trade** agreements remove tariffs and quotas, opening markets. Falling transport and communication costs accelerate it." },
            { heading: "Opportunities and threats", body: "**Opportunities**: access to billions of customers, cheaper inputs from low-cost countries, economies of scale, overseas investment incentives. **Threats**: foreign competition at home, exchange-rate risk, complex regulation, ethical concerns (sweatshops, environment). Small firms face the same global competition through imports and online rivals." },
          ],
          keyFormulas: [],
          workedExample: {
            problem: "A shoe brand sells in 40 countries and sources leather from three continents. Name two opportunities and two threats it faces.",
            solution: "Opportunities: huge customer base, cheap inputs. Threats: currency swings, rival brands, supply-chain disruption, ethical scrutiny.",
          },
          questions: [
            {
              id: "ebz10-u8-glob-q1", difficulty: "foundation", totalMarks: 2,
              stem: "What is globalisation?",
              response: { type: "mcq", choices: [
                { id: "a", text: "Growing integration of world markets" },
                { id: "b", text: "A single country's economic policy" },
                { id: "c", text: "Domestic competition between firms" },
                { id: "d", text: "A type of monopoly" },
              ], correctChoiceId: "a" },
              markscheme: {
                principles: [{ kind: "definition", name: "Globalisation", statement: "Integration of world markets through trade and investment." }],
                steps: [{ reasoning: "Globalisation links economies through trade, capital flows and technology.", marks: 2, markCode: "AO1" }],
                finalAnswer: "**(a)** Integration of world markets",
              },
            },
            {
              id: "ebz10-u8-glob-q2", difficulty: "foundation", totalMarks: 3,
              stem: "Give two opportunities globalisation creates for a business.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Globalisation opportunities", statement: "Markets, inputs, scale." }],
                steps: [
                  { reasoning: "Access to much larger overseas customer markets.", marks: 1, markCode: "AO2" },
                  { reasoning: "Cheaper raw materials and labour from low-cost countries.", marks: 1, markCode: "AO2" },
                  { reasoning: "Economies of scale from higher output volumes.", marks: 1, markCode: "AO3" },
                ],
                finalAnswer: "Bigger markets, cheaper inputs, economies of scale.",
              },
            },
            {
              id: "ebz10-u8-glob-q3", difficulty: "core", totalMarks: 4,
              stem: "Explain two threats globalisation poses to a local business.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "context", name: "Globalisation threats", statement: "Foreign competition, exchange risk, complexity." }],
                steps: [
                  { reasoning: "Foreign firms selling cheaper imports compete directly at home.", marks: 1, markCode: "AO2" },
                  { reasoning: "Exchange-rate movements can raise input costs or cut export earnings.", marks: 1, markCode: "AO2" },
                  { reasoning: "Operating abroad means navigating unfamiliar laws and cultures.", marks: 1, markCode: "AO2" },
                  { reasoning: "Ethical scrutiny — labour and environmental practices abroad — can damage reputation.", marks: 1, markCode: "AO3" },
                ],
                finalAnswer: "Import competition, exchange-rate risk, regulatory complexity, ethical scrutiny.",
              },
            },
            {
              id: "ebz10-u8-glob-q4", difficulty: "challenge", totalMarks: 5,
              stem: "A UK furniture maker currently sells only domestically. Free-trade agreements open markets in three neighbouring countries.",
              parts: [
                { label: "a", prompt: "Explain two opportunities the new markets offer.", marks: 3 },
                { label: "b", prompt: "Suggest two challenges the maker must overcome before exporting.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "context", name: "Export opportunities", statement: "New markets, scale, but logistics and regulation." }],
                steps: [
                  { reasoning: "(a) Much larger customer base — sales can grow several-fold.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Free trade removes tariffs, making exports cheaper and competitive.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Higher volumes enable economies of scale and lower unit costs.", marks: 1, markCode: "AO3", part: "a" },
                  { reasoning: "(b) Understand foreign regulations, standards and distribution channels.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Manage exchange-rate risk and higher transport costs.", marks: 1, markCode: "AO3", part: "b" },
                ],
                finalAnswer: "(a) bigger market, tariff-free access, scale economies (b) regulation, exchange and logistics risk.",
              },
            },
            {
              id: "ebz10-u8-glob-q5", difficulty: "challenge", totalMarks: 6,
              stem: "A multinational opens a factory in a low-wage country, paying workers less than home-country minimum wage.",
              parts: [
                { label: "a", prompt: "Explain two economic benefits of this decision for the multinational.", marks: 3 },
                { label: "b", prompt: "Explain two ethical or reputational risks it creates.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "comparison", name: "Offshoring trade-offs", statement: "Cost savings vs ethical exposure." }],
                steps: [
                  { reasoning: "(a) Much lower labour costs raise profit margins.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Proximity to raw materials or new customer markets.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Government incentives — tax breaks, grants — reduce costs further.", marks: 1, markCode: "AO3", part: "a" },
                  { reasoning: "(b) Paying below ethical standards invites boycott and media attacks.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Pressure groups and consumers may damage the brand globally.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Possible legal issues if home-country standards apply to subsidiaries.", marks: 1, markCode: "AO3", part: "b" },
                ],
                finalAnswer: "(a) lower costs, incentives, market access (b) boycott risk, brand damage, legal exposure.",
              },
            },
            {
              id: "ebz10-u8-glob-q6", difficulty: "challenge", totalMarks: 10,
              stem: "A regional food company must decide whether to remain domestic-only or expand into two neighbouring countries over five years.",
              parts: [
                { label: "a", prompt: "Explain three potential benefits of international expansion.", marks: 4 },
                { label: "b", prompt: "Explain three risks the company would face.", marks: 3 },
                { label: "c", prompt: "Evaluate whether the company should expand internationally.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "context", name: "Internationalisation decision", statement: "Growth opportunity vs risk and complexity." }],
                steps: [
                  { reasoning: "(a) Access to larger customer base — revenue growth potential.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Economies of scale — higher volumes lower unit costs.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Diversification — reduces dependence on one domestic market.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Brand building and learning from international competition.", marks: 1, markCode: "AO3", part: "a" },
                  { reasoning: "(b) Exchange-rate and demand uncertainty abroad.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Higher costs — logistics, regulation, local adaptation.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Strong domestic rivals or cultural barriers may limit success.", marks: 1, markCode: "AO3", part: "b" },
                  { reasoning: "(c) Recommendation: expand cautiously — start with one market, use local partners, phase investment.", marks: 2, markCode: "AO2", part: "c" },
                  { reasoning: "(c) Justified if domestic market is saturated or growth is slowing; not if capacity is strained.", marks: 1, markCode: "AO3", part: "c" },
                ],
                finalAnswer: "Benefits: growth, scale, diversification. Risks: currency, cost, competition. Expand cautiously via one market and local partners.",
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "ebz10-u8-env3-notes", title: "Competition and globalisation — notes",
      summary: "Oligopolies dominate many markets; competition drives strategy. Globalisation opens markets but adds currency, cost and ethical risks.",
      sections: [
        { heading: "Market structures", body: "Perfect competition = many firms, low prices. Monopoly = one firm. Oligopoly = few firms, high barriers." },
        { heading: "Globalisation", body: "Trade integration and multinationals create bigger markets, cheaper inputs — but also foreign rivals and currency risk." },
        { heading: "Strategy", body: "Compete on price, quality, service or innovation; expand internationally only when the domestic position is strong." },
      ],
    },
  },
];
