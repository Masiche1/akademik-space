module.exports = [
  {
    file: "lesson-6-1.ts",
    exportName: "lesson61",
    lesson: {
      id: "ebz10-u6-lesson-6-1",
      code: "6-1",
      title: "The Economic Environment",
      goal: "I CAN explain key economic indicators and their effects on business.",
      standards: ["Edexcel IGCSE Business 4BS0 — External Influences"],
      vocabulary: [
        { term: "Gross domestic product (GDP)", definition: "Total value of goods and services produced in an economy." },
        { term: "Economic growth", definition: "Increase in real GDP over time." },
        { term: "Recession", definition: "Period of falling output and economic activity." },
        { term: "Inflation", definition: "General rise in prices over time." },
        { term: "Unemployment", definition: "People able and willing to work but without jobs." },
        { term: "Interest rate", definition: "Cost of borrowing or return on saving money." },
        { term: "Exchange rate", definition: "Value of one currency in terms of another." }
      ],
      concepts: [
        {
          id: "ebz10-u6-economic-indicators",
          title: "Key Economic Indicators",
          skill: "Interpret GDP, inflation, unemployment, interest rates and exchange rates.",
          sections: [
            {
              heading: "Output and employment",
              body: "**GDP** measures total economic output. Rising GDP indicates growth; falling GDP may signal recession. **Unemployment** affects demand, labour costs and consumer confidence. Low unemployment can make recruitment harder and wages rise; high unemployment can reduce spending."
            },
            {
              heading: "Prices, borrowing and currency",
              body: "**Inflation** erodes purchasing power and raises costs. **Interest rates** influence borrowing, saving, investment and mortgage costs. **Exchange rates** affect export competitiveness and import costs: a weaker currency can help exporters but make imports dearer."
            },
            {
              heading: "Interconnections",
              body: "Economic indicators are linked. Higher inflation may lead to higher interest rates; stronger growth may increase employment but also inflationary pressure. Businesses must monitor several indicators together rather than one in isolation."
            }
          ],
          keyFormulas: [
            { name: "Inflation", statement: "General rise in the price level over time" },
            { name: "Exchange rate effect", statement: "Weaker currency → cheaper exports, dearer imports" }
          ],
          workedExample: {
            problem: "A country's currency weakens against the euro. How might this affect a car exporter?",
            solution: "Exports may become cheaper for European buyers, potentially increasing demand, while imported components become more expensive."
          },
          questions: [
            {
              id: "ebz10-u6-econ-q1",
              difficulty: "foundation",
              totalMarks: 2,
              stem: "What is inflation?",
              response: {
                type: "mcq",
                choices: [
                  { id: "a", text: "A fall in the unemployment rate" },
                  { id: "b", text: "A general rise in prices over time" },
                  { id: "c", text: "An increase in exports" },
                  { id: "d", text: "A rise in interest rates only" }
                ],
                correctChoiceId: "b"
              },
              markscheme: {
                principles: [{ kind: "definition", name: "Inflation", statement: "Sustained increase in the general price level." }],
                steps: [{ reasoning: "Inflation means prices rise across the economy, reducing purchasing power.", marks: 2, markCode: "AO1" }],
                finalAnswer: "**(b)** A general rise in prices over time",
                commonErrors: ["Confusing inflation with interest rates or unemployment."]
              }
            },
            {
              id: "ebz10-u6-econ-q2",
              difficulty: "foundation",
              totalMarks: 3,
              stem: "Explain what GDP measures and why businesses monitor it.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "GDP", statement: "Total value of output produced in an economy." }],
                steps: [
                  { reasoning: "GDP measures total goods and services produced in a country.", marks: 1, markCode: "AO1" },
                  { reasoning: "Rising GDP suggests economic growth and stronger demand.", marks: 1, markCode: "AO2" },
                  { reasoning: "Falling GDP may signal recession, affecting sales and investment.", marks: 1, markCode: "AO2" }
                ],
                finalAnswer: "GDP measures total output; businesses use it to judge demand and economic conditions.",
                commonErrors: ["Only definition.", "No business link."]
              }
            },
            {
              id: "ebz10-u6-econ-q3",
              difficulty: "core",
              totalMarks: 4,
              stem: "Explain two ways rising inflation can affect a business.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Inflation effects", statement: "Higher prices increase costs and may reduce demand." }],
                steps: [
                  { reasoning: "Input costs such as materials, energy and wages may rise.", marks: 2, markCode: "AO2" },
                  { reasoning: "The business may need to raise prices, risking lower sales.", marks: 1, markCode: "AO2" },
                  { reasoning: "Borrowing costs may rise if interest rates increase to control inflation.", marks: 1, markCode: "AO2" }
                ],
                finalAnswer: "Inflation raises costs, pressures prices and may increase borrowing costs.",
                commonErrors: ["Only one effect.", "No link to business decisions."]
              }
            },
            {
              id: "ebz10-u6-econ-q4",
              difficulty: "challenge",
              totalMarks: 6,
              stem: "A central bank raises interest rates to control inflation.",
              parts: [
                { label: "a", prompt: "Explain two effects on consumers.", marks: 3 },
                { label: "b", prompt: "Explain two effects on a business that relies on borrowing.", marks: 3 }
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Interest rate effects", statement: "Higher rates reduce borrowing and spending." }],
                steps: [
                  { part: "a", reasoning: "Mortgages and loan repayments become more expensive.", marks: 2, markCode: "AO2" },
                  { part: "a", reasoning: "Consumers may spend less, reducing demand for goods and services.", marks: 1, markCode: "AO2" },
                  { part: "b", reasoning: "New borrowing becomes more costly and existing variable-rate debt costs more.", marks: 2, markCode: "AO2" },
                  { part: "b", reasoning: "The business may delay investment or expansion because financing is expensive.", marks: 1, markCode: "AO2" }
                ],
                finalAnswer: "Higher rates reduce consumer spending and make business borrowing and investment more expensive.",
                commonErrors: ["Only consumer or only business effect.", "No demand link."]
              }
            },
            {
              id: "ebz10-u6-econ-q5",
              difficulty: "challenge",
              totalMarks: 7,
              stem: "A country's currency appreciates against its main trading partners.",
              parts: [
                { label: "a", prompt: "Explain two effects on exporters.", marks: 4 },
                { label: "b", prompt: "Explain one effect on importers and one on consumers.", marks: 3 }
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Exchange rate effects", statement: "A stronger currency makes exports dearer and imports cheaper." }],
                steps: [
                  { part: "a", reasoning: "Exports become more expensive for foreign buyers.", marks: 2, markCode: "AO2" },
                  { part: "a", reasoning: "Demand for exports may fall, reducing sales and revenue.", marks: 2, markCode: "AO2" },
                  { part: "b", reasoning: "Imports become cheaper, lowering input costs for importers.", marks: 2, markCode: "AO2" },
                  { part: "b", reasoning: "Consumers may benefit from lower prices on imported goods.", marks: 1, markCode: "AO2" }
                ],
                finalAnswer: "A stronger currency hurts exporters but can lower import and consumer prices.",
                commonErrors: ["Opposite exchange-rate effect.", "No consumer or importer link."]
              }
            },
            {
              id: "ebz10-u6-econ-q6",
              difficulty: "challenge",
              totalMarks: 10,
              stem: "An economy experiences rising GDP, low unemployment, high inflation and rising interest rates.",
              parts: [
                { label: "a", prompt: "Describe what each indicator suggests.", marks: 3 },
                { label: "b", prompt: "Explain two opportunities for businesses.", marks: 3 },
                { label: "c", prompt: "Explain two challenges for businesses.", marks: 2 },
                { label: "d", prompt: "Recommend how a retailer should respond.", marks: 2 }
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Economic indicator analysis", statement: "Strong growth can bring demand but also cost and borrowing pressures." }],
                steps: [
                  { part: "a", reasoning: "Rising GDP and low unemployment suggest strong demand.", marks: 2, markCode: "AO2" },
                  { part: "a", reasoning: "High inflation and interest rates signal rising costs and tighter credit.", marks: 1, markCode: "AO2" },
                  { part: "b", reasoning: "Higher employment may increase customer spending.", marks: 2, markCode: "AO2" },
                  { part: "b", reasoning: "Growth may support expansion and new investment.", marks: 1, markCode: "AO2" },
                  { part: "c", reasoning: "Wages and input costs may rise, squeezing margins.", marks: 1, markCode: "AO2" },
                  { part: "c", reasoning: "Higher interest rates make borrowing and stock financing more expensive.", marks: 1, markCode: "AO2" },
                  { part: "d", reasoning: "Control costs, review pricing and avoid unnecessary borrowing while demand is strong.", marks: 2, markCode: "AO3" }
                ],
                finalAnswer: "Strong demand but higher costs and borrowing; manage margins and finance carefully.",
                commonErrors: ["Only positive or only negative effects.", "No retailer recommendation."]
              }
            }
          ]
        },
        {
          id: "ebz10-u6-business-cycle",
          title: "The Business Cycle",
          skill: "Explain how economic cycles affect business activity and responses.",
          sections: [
            {
              heading: "Stages of the cycle",
              body: "The business cycle moves through **boom**, **slowdown**, **recession** and **recovery**. In a boom, demand, output and employment rise; in a recession, output, demand and confidence fall. Recovery follows when activity begins to improve."
            },
            {
              heading: "Effects on businesses",
              body: "During growth, businesses may expand and hire. During recession, sales may fall, credit tighten and unemployment rise. Cyclical industries such as cars and construction are often more affected than essential goods and services."
            },
            {
              heading: "Business responses",
              body: "Businesses can build cash reserves in good times, diversify markets, control costs, improve efficiency and adjust product ranges. Flexible staffing and careful inventory planning help them respond to changing demand."
            }
          ],
          keyFormulas: [],
          workedExample: {
            problem: "A furniture retailer faces falling orders during a recession. What should it consider?",
            solution: "Reduce discretionary spending, control stock, offer promotions carefully and protect cash reserves until demand recovers."
          },
          questions: [
            {
              id: "ebz10-u6-cycle-q1",
              difficulty: "foundation",
              totalMarks: 2,
              stem: "What is a recession?",
              response: {
                type: "mcq",
                choices: [
                  { id: "a", text: "A period of rapid economic growth" },
                  { id: "b", text: "A period of falling output and economic activity" },
                  { id: "c", text: "A rise in the exchange rate" },
                  { id: "d", text: "A government budget surplus" }
                ],
                correctChoiceId: "b"
              },
              markscheme: {
                principles: [{ kind: "definition", name: "Recession", statement: "Period of declining economic activity." }],
                steps: [{ reasoning: "A recession involves falling output, demand and often rising unemployment.", marks: 2, markCode: "AO1" }],
                finalAnswer: "**(b)** A period of falling output and economic activity",
                commonErrors: ["Confusing recession with inflation or growth."]
              }
            },
            {
              id: "ebz10-u6-cycle-q2",
              difficulty: "foundation",
              totalMarks: 3,
              stem: "Name the main stages of the business cycle.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Business cycle", statement: "Fluctuating stages of economic activity." }],
                steps: [
                  { reasoning: "Boom or expansion.", marks: 1, markCode: "AO1" },
                  { reasoning: "Slowdown or peak.", marks: 1, markCode: "AO1" },
                  { reasoning: "Recession and recovery.", marks: 1, markCode: "AO1" }
                ],
                finalAnswer: "Boom, slowdown, recession and recovery.",
                commonErrors: ["Missing recovery or slowdown.", "Only two stages."]
              }
            },
            {
              id: "ebz10-u6-cycle-q3",
              difficulty: "core",
              totalMarks: 4,
              stem: "Explain two differences between a boom and a recession for businesses.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "comparison", name: "Boom vs recession", statement: "High demand and confidence versus falling demand and uncertainty." }],
                steps: [
                  { reasoning: "During a boom, sales and demand are usually strong; during recession they fall.", marks: 2, markCode: "AO2" },
                  { reasoning: "Employment and investment are easier in a boom but harder in a recession.", marks: 2, markCode: "AO2" }
                ],
                finalAnswer: "Boom = high demand and investment; recession = weak demand and cautious spending.",
                commonErrors: ["No comparison.", "Only one difference."]
              }
            },
            {
              id: "ebz10-u6-cycle-q4",
              difficulty: "challenge",
              totalMarks: 6,
              stem: "A construction company expects a recession next year.",
              parts: [
                { label: "a", prompt: "Explain two likely effects on the company.", marks: 3 },
                { label: "b", prompt: "Suggest two responses it could make.", marks: 3 }
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Cyclical business response", statement: "Prepare for downturns before they arrive." }],
                steps: [
                  { part: "a", reasoning: "Demand for construction projects may fall as clients delay spending.", marks: 2, markCode: "AO2" },
                  { part: "a", reasoning: "Credit may tighten and materials or labour costs may become harder to manage.", marks: 1, markCode: "AO2" },
                  { part: "b", reasoning: "Build cash reserves and reduce unnecessary costs now.", marks: 2, markCode: "AO3" },
                  { part: "b", reasoning: "Seek maintenance or smaller contracts and review staffing flexibly.", marks: 1, markCode: "AO3" }
                ],
                finalAnswer: "Expect weaker demand and tighter credit; build reserves, cut costs and diversify work.",
                commonErrors: ["No recession effect.", "Response not suited to downturn."]
              }
            },
            {
              id: "ebz10-u6-cycle-q5",
              difficulty: "challenge",
              totalMarks: 7,
              stem: "Consumer confidence falls sharply during an economic slowdown.",
              parts: [
                { label: "a", prompt: "Explain two reasons confidence may fall.", marks: 4 },
                { label: "b", prompt: "Explain two effects on different types of business.", marks: 3 }
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Consumer confidence", statement: "Expectations about the future influence spending." }],
                steps: [
                  { part: "a", reasoning: "People may fear job losses or falling income.", marks: 2, markCode: "AO2" },
                  { part: "a", reasoning: "Negative news about the economy can make consumers cautious.", marks: 2, markCode: "AO2" },
                  { part: "b", reasoning: "Luxury goods and big-ticket purchases are usually hit hardest.", marks: 2, markCode: "AO2" },
                  { part: "b", reasoning: "Essential goods and discount retailers may be more resilient.", marks: 1, markCode: "AO2" }
                ],
                finalAnswer: "Falling confidence reduces discretionary spending; essential and value businesses may cope better.",
                commonErrors: ["All businesses affected equally.", "No cause of confidence fall."]
              }
            },
            {
              id: "ebz10-u6-cycle-q6",
              difficulty: "challenge",
              totalMarks: 10,
              stem: "A bicycle manufacturer has record sales in a boom but expects a recession.",
              parts: [
                { label: "a", prompt: "Explain two opportunities during the boom.", marks: 3 },
                { label: "b", prompt: "Explain two risks during the recession.", marks: 3 },
                { label: "c", prompt: "Suggest two preparations the firm should make now.", marks: 2 },
                { label: "d", prompt: "Evaluate whether diversification would help.", marks: 2 }
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Cycle management", statement: "Use good times to prepare for downturns." }],
                steps: [
                  { part: "a", reasoning: "Strong demand may allow higher output and prices.", marks: 2, markCode: "AO2" },
                  { part: "a", reasoning: "The firm may invest in capacity or new products.", marks: 1, markCode: "AO2" },
                  { part: "b", reasoning: "Bicycle sales may fall as consumers delay discretionary purchases.", marks: 2, markCode: "AO2" },
                  { part: "b", reasoning: "Inventory and debt could become burdens if demand drops.", marks: 1, markCode: "AO2" },
                  { part: "c", reasoning: "Build cash reserves and reduce stock levels before the downturn.", marks: 1, markCode: "AO3" },
                  { part: "c", reasoning: "Review costs, contracts and staffing to improve flexibility.", marks: 1, markCode: "AO3" },
                  { part: "d", reasoning: "Diversification into repairs or accessories may reduce reliance on new-bike sales.", marks: 2, markCode: "AO3" }
                ],
                finalAnswer: "Use boom profits to prepare reserves and flexibility; diversify cautiously for recession resilience.",
                commonErrors: ["Only boom benefits.", "No preparation or evaluation."]
              }
            }
          ]
        }
      ]
    },
    notes: {
      id: "ebz10-u6-economic-environment-notes",
      title: "The economic environment — notes",
      summary: "Monitor GDP, inflation, unemployment, interest and exchange rates; understand how the business cycle changes demand and risk.",
      sections: [
        { heading: "Indicators", body: "GDP shows output; inflation affects prices; unemployment affects demand; rates and currencies affect costs and trade." },
        { heading: "Cycle", body: "Boom → slowdown → recession → recovery changes business opportunities." },
        { heading: "Response", body: "Prepare with reserves, cost control, flexible staffing and diversification." }
      ]
    }
  },
  {
    file: "lesson-6-2.ts",
    exportName: "lesson62",
    lesson: {
      id: "ebz10-u6-lesson-6-2",
      code: "6-2",
      title: "Government, Legal and Competitive Influences",
      goal: "I CAN explain how government policy, law and competition affect business decisions.",
      standards: ["Edexcel IGCSE Business 4BS0 — External Influences"],
      vocabulary: [
        { term: "Fiscal policy", definition: "Government decisions on taxation and spending." },
        { term: "Subsidy", definition: "Government financial support to businesses or industries." },
        { term: "Regulation", definition: "Rules businesses must follow to protect stakeholders." },
        { term: "Consumer protection", definition: "Laws ensuring products are safe and descriptions accurate." },
        { term: "Competition law", definition: "Rules preventing anti-competitive behaviour." },
        { term: "Market structure", definition: "Number and size of firms competing in a market." },
        { term: "Barrier to entry", definition: "Obstacle making it hard for new firms to enter a market." }
      ],
      concepts: [
        {
          id: "ebz10-u6-government-policy",
          title: "Government Policy and Regulation",
          skill: "Evaluate taxes, subsidies, laws and regulations affecting business.",
          sections: [
            {
              heading: "Government influence",
              body: "Governments affect business through taxes, subsidies, grants, interest rates and regulation. Fiscal policy changes taxes and spending; monetary policy influences interest rates and money supply. Support can help growth, but higher taxes or stricter rules can raise costs."
            },
            {
              heading: "Key regulations",
              body: "Businesses must follow consumer protection laws, employment laws, health and safety rules, environmental regulations and competition law. These protect customers, workers, communities and fair competition but may increase compliance costs."
            },
            {
              heading: "Evaluation",
              body: "Regulation can improve quality, safety and fairness while reducing pollution and unfair competition. However, excessive regulation may discourage investment or burden small businesses. Effective policy balances protection with competitiveness."
            }
          ],
          keyFormulas: [
            { name: "Tax effect", statement: "Tax reduces profit but may fund public services" },
            { name: "Subsidy effect", statement: "Government support lowers costs or encourages production" }
          ],
          workedExample: {
            problem: "A government gives a subsidy to solar-panel firms. How might this affect them?",
            solution: "Costs fall or prices become more competitive, encouraging investment and expansion, but the firm may become dependent on continued support."
          },
          questions: [
            {
              id: "ebz10-u6-gov-q1",
              difficulty: "foundation",
              totalMarks: 2,
              stem: "What is a subsidy?",
              response: {
                type: "mcq",
                choices: [
                  { id: "a", text: "A tax on imports" },
                  { id: "b", text: "Government financial support to a business or industry" },
                  { id: "c", text: "A fine for breaking rules" },
                  { id: "d", text: "A loan that must be repaid with interest" }
                ],
                correctChoiceId: "b"
              },
              markscheme: {
                principles: [{ kind: "definition", name: "Subsidy", statement: "Government financial assistance to support production or prices." }],
                steps: [{ reasoning: "A subsidy lowers costs or supports an industry rather than being a loan or tax.", marks: 2, markCode: "AO1" }],
                finalAnswer: "**(b)** Government financial support",
                commonErrors: ["Confusing subsidy with tax or loan."]
              }
            },
            {
              id: "ebz10-u6-gov-q2",
              difficulty: "foundation",
              totalMarks: 3,
              stem: "A business makes a profit of £100,000 before tax. Corporation tax is 19%. Calculate tax and profit after tax.",
              response: {
                type: "numeric",
                parts: [
                  { label: "Tax", answer: 19000, unit: "£" },
                  { label: "Profit after tax", answer: 81000, unit: "£" }
                ]
              },
              markscheme: {
                principles: [{ kind: "formula", name: "Tax calculation", statement: "Tax = profit × tax rate; profit after tax = profit − tax." }],
                steps: [
                  { reasoning: "Calculate tax at 19%: £100,000 × 0.19 = £19,000.", marks: 1, markCode: "AO2" },
                  { reasoning: "Subtract tax from profit: £100,000 − £19,000 = £81,000.", marks: 1, markCode: "AO2" },
                  { reasoning: "State both figures: tax £19,000 and profit after tax £81,000.", marks: 1, markCode: "AO2" }
                ],
                finalAnswer: "Tax £19,000; profit after tax £81,000.",
                commonErrors: ["Using 19 as pounds rather than percent.", "Forgetting to subtract tax."]
              }
            },
            {
              id: "ebz10-u6-gov-q3",
              difficulty: "core",
              totalMarks: 4,
              stem: "Explain two laws or regulations that affect most businesses.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Business regulation", statement: "Laws protect stakeholders and competition." }],
                steps: [
                  { reasoning: "Consumer protection laws require accurate descriptions and safe products.", marks: 2, markCode: "AO1" },
                  { reasoning: "Employment and health and safety laws protect workers' rights and wellbeing.", marks: 2, markCode: "AO1" }
                ],
                finalAnswer: "Consumer protection and employment/health and safety regulations affect most businesses.",
                commonErrors: ["Only one regulation.", "No explanation of purpose."]
              }
            },
            {
              id: "ebz10-u6-gov-q4",
              difficulty: "challenge",
              totalMarks: 6,
              stem: "A government wants to support a declining manufacturing industry.",
              parts: [
                { label: "a", prompt: "Suggest two policies it could use.", marks: 3 },
                { label: "b", prompt: "Explain one benefit and one drawback of subsidies.", marks: 3 }
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "technique", name: "Industrial policy", statement: "Support can preserve jobs but may distort markets." }],
                steps: [
                  { part: "a", reasoning: "Provide subsidies or grants for investment and modernisation.", marks: 2, markCode: "AO3" },
                  { part: "a", reasoning: "Offer training support or tax incentives to firms that retain jobs.", marks: 1, markCode: "AO3" },
                  { part: "b", reasoning: "Benefit: subsidies lower costs and protect employment.", marks: 2, markCode: "AO2" },
                  { part: "b", reasoning: "Drawback: they cost taxpayers and may support inefficient firms.", marks: 1, markCode: "AO2" }
                ],
                finalAnswer: "Use subsidies or incentives; benefit is support, drawback is cost and possible inefficiency.",
                commonErrors: ["No policy.", "Only benefit or only drawback."]
              }
            },
            {
              id: "ebz10-u6-gov-q5",
              difficulty: "challenge",
              totalMarks: 7,
              stem: "New environmental regulations require factories to reduce emissions.",
              parts: [
                { label: "a", prompt: "Explain two benefits of the regulation.", marks: 4 },
                { label: "b", prompt: "Explain two costs to businesses.", marks: 3 }
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "comparison", name: "Environmental regulation", statement: "Protects society but imposes compliance costs." }],
                steps: [
                  { part: "a", reasoning: "It reduces pollution and protects public health.", marks: 2, markCode: "AO2" },
                  { part: "a", reasoning: "It may encourage cleaner technology and sustainable practices.", marks: 2, markCode: "AO2" },
                  { part: "b", reasoning: "Businesses may need expensive equipment or process changes.", marks: 2, markCode: "AO2" },
                  { part: "b", reasoning: "Monitoring and compliance can raise administrative costs.", marks: 1, markCode: "AO2" }
                ],
                finalAnswer: "Regulation improves environment and health but raises costs and compliance burdens.",
                commonErrors: ["Only benefits or only costs.", "No business-specific cost."]
              }
            },
            {
              id: "ebz10-u6-gov-q6",
              difficulty: "challenge",
              totalMarks: 10,
              stem: "A fast-food chain faces new rules on packaging, advertising to children and food labelling.",
              parts: [
                { label: "a", prompt: "Identify two ways the rules could affect the business.", marks: 3 },
                { label: "b", prompt: "Explain two benefits of complying with consumer protection rules.", marks: 3 },
                { label: "c", prompt: "Suggest two practical changes the chain could make.", marks: 2 },
                { label: "d", prompt: "Evaluate whether strict regulation helps or harms the industry.", marks: 2 }
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Compliance strategy", statement: "Rules can raise costs but improve reputation and reduce risk." }],
                steps: [
                  { part: "a", reasoning: "Packaging and labelling changes may increase costs.", marks: 2, markCode: "AO2" },
                  { part: "a", reasoning: "Advertising restrictions may reduce marketing reach to children.", marks: 1, markCode: "AO2" },
                  { part: "b", reasoning: "Compliance can protect customers and avoid fines or legal action.", marks: 2, markCode: "AO2" },
                  { part: "b", reasoning: "A responsible image may improve trust and customer loyalty.", marks: 1, markCode: "AO2" },
                  { part: "c", reasoning: "Switch to recyclable packaging and clearer labels.", marks: 1, markCode: "AO3" },
                  { part: "c", reasoning: "Review advertising to ensure it meets the rules.", marks: 1, markCode: "AO3" },
                  { part: "d", reasoning: "Strict rules may raise costs but also improve public health and fair competition.", marks: 2, markCode: "AO3" }
                ],
                finalAnswer: "Rules raise costs and limit marketing but improve safety, reputation and fair competition if managed well.",
                commonErrors: ["Only costs or only benefits.", "No practical response."]
              }
            }
          ]
        },
        {
          id: "ebz10-u6-competition-market-change",
          title: "Competition and Market Change",
          skill: "Explain market structures, competitive pressures and globalisation.",
          sections: [
            {
              heading: "Market structures",
              body: "In **perfect competition**, many small firms sell similar products and prices are set by the market. In a **monopoly**, one firm dominates and may set prices. **Oligopoly** has a few large firms, often with high barriers to entry. **Monopolistic competition** has many firms selling differentiated products."
            },
            {
              heading: "Competitive pressures",
              body: "Businesses face rivalry from existing competitors, new entrants, substitute products and changing customer preferences. **Barriers to entry** such as high capital costs, patents, licences and brand loyalty can protect established firms but may limit consumer choice."
            },
            {
              heading: "Globalisation",
              body: "Globalisation means businesses compete internationally through trade, investment and digital markets. It creates opportunities for larger markets and cheaper inputs but also exposes firms to foreign competitors, exchange-rate changes and global supply-chain risks."
            }
          ],
          keyFormulas: [
            { name: "Barriers to entry", statement: "Obstacles that make new competition difficult" },
            { name: "Market share", statement: "Firm's sales as a percentage of total market sales" }
          ],
          workedExample: {
            problem: "A local bakery faces a new supermarket selling cheap bread. What competitive pressure is this?",
            solution: "New competition and possibly a substitute product, forcing the bakery to improve quality, service or price."
          },
          questions: [
            {
              id: "ebz10-u6-comp-q1",
              difficulty: "foundation",
              totalMarks: 2,
              stem: "In which market structure does one firm dominate the market?",
              response: {
                type: "mcq",
                choices: [
                  { id: "a", text: "Perfect competition" },
                  { id: "b", text: "Monopoly" },
                  { id: "c", text: "Oligopoly" },
                  { id: "d", text: "Monopolistic competition" }
                ],
                correctChoiceId: "b"
              },
              markscheme: {
                principles: [{ kind: "definition", name: "Monopoly", statement: "Single dominant firm in a market." }],
                steps: [{ reasoning: "A monopoly has one dominant seller; oligopoly has a few firms.", marks: 2, markCode: "AO1" }],
                finalAnswer: "**(b)** Monopoly",
                commonErrors: ["Confusing monopoly with oligopoly."]
              }
            },
            {
              id: "ebz10-u6-comp-q2",
              difficulty: "foundation",
              totalMarks: 3,
              stem: "Give three barriers to entry.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Barriers to entry", statement: "Obstacles protecting existing firms from new competitors." }],
                steps: [
                  { reasoning: "High startup capital or expensive equipment.", marks: 1, markCode: "AO1" },
                  { reasoning: "Patents, licences or legal restrictions.", marks: 1, markCode: "AO1" },
                  { reasoning: "Strong brand loyalty or established distribution channels.", marks: 1, markCode: "AO1" }
                ],
                finalAnswer: "Capital costs, patents/licences and brand loyalty.",
                commonErrors: ["Only one barrier.", "Advantages of competition confused."]
              }
            },
            {
              id: "ebz10-u6-comp-q3",
              difficulty: "core",
              totalMarks: 4,
              stem: "Compare perfect competition and monopoly in terms of pricing power.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "comparison", name: "Perfect competition vs monopoly", statement: "Many price-takers versus one price-setter." }],
                steps: [
                  { reasoning: "In perfect competition, many firms sell identical products.", marks: 1, markCode: "AO1" },
                  { reasoning: "Firms are price takers because customers can switch easily.", marks: 1, markCode: "AO2" },
                  { reasoning: "A monopolist has no close substitute and can influence price.", marks: 1, markCode: "AO1" },
                  { reasoning: "This may lead to higher prices or restricted output without regulation.", marks: 1, markCode: "AO2" }
                ],
                finalAnswer: "Perfect competition firms are price takers; a monopolist has more pricing power.",
                commonErrors: ["No comparison.", "Monopoly assumed always illegal."]
              }
            },
            {
              id: "ebz10-u6-comp-q4",
              difficulty: "challenge",
              totalMarks: 6,
              stem: "A smartphone market is dominated by four large firms.",
              parts: [
                { label: "a", prompt: "Identify the likely market structure.", marks: 2 },
                { label: "b", prompt: "Explain two competitive pressures the firms face.", marks: 4 }
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Oligopoly competition", statement: "Few large firms compete through product, price and innovation." }],
                steps: [
                  { part: "a", reasoning: "Four dominant firms suggests an oligopoly.", marks: 2, markCode: "AO1" },
                  { part: "b", reasoning: "They compete on features, price, quality and brand.", marks: 2, markCode: "AO2" },
                  { part: "b", reasoning: "They may face new entrants, substitutes or changing customer preferences.", marks: 2, markCode: "AO2" }
                ],
                finalAnswer: "Oligopoly; firms compete through differentiation, pricing and innovation despite high entry barriers.",
                commonErrors: ["Monopoly assumed.", "No competitive pressure identified."]
              }
            },
            {
              id: "ebz10-u6-comp-q5",
              difficulty: "challenge",
              totalMarks: 7,
              stem: "A local clothing shop now competes with international online retailers.",
              parts: [
                { label: "a", prompt: "Explain two opportunities globalisation creates.", marks: 4 },
                { label: "b", prompt: "Explain two threats it creates.", marks: 3 }
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Globalisation effects", statement: "Wider markets but stronger foreign competition." }],
                steps: [
                  { part: "a", reasoning: "The shop could sell online to customers abroad.", marks: 2, markCode: "AO2" },
                  { part: "a", reasoning: "It may access cheaper suppliers or trends from global markets.", marks: 2, markCode: "AO2" },
                  { part: "b", reasoning: "Large online retailers may offer lower prices and wider choice.", marks: 2, markCode: "AO2" },
                  { part: "b", reasoning: "Exchange rates and shipping costs can affect competitiveness.", marks: 1, markCode: "AO2" }
                ],
                finalAnswer: "Globalisation opens markets and suppliers but exposes the shop to powerful online rivals.",
                commonErrors: ["Only opportunities or only threats.", "No online retail link."]
              }
            },
            {
              id: "ebz10-u6-comp-q6",
              difficulty: "challenge",
              totalMarks: 10,
              stem: "A national airline faces new low-cost competitors, rising fuel costs and changing travel demand.",
              parts: [
                { label: "a", prompt: "Identify two forms of competitive pressure.", marks: 3 },
                { label: "b", prompt: "Explain two ways market structure affects pricing.", marks: 3 },
                { label: "c", prompt: "Suggest two strategies the airline could use.", marks: 2 },
                { label: "d", prompt: "Evaluate whether government subsidies would help.", marks: 2 }
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Competitive strategy", statement: "Respond to rivals through differentiation, cost control or niche focus." }],
                steps: [
                  { part: "a", reasoning: "New low-cost entrants increase rivalry and price pressure.", marks: 2, markCode: "AO2" },
                  { part: "a", reasoning: "Substitute transport or changing demand alters customer choices.", marks: 1, markCode: "AO2" },
                  { part: "b", reasoning: "In an oligopoly, a few firms may avoid aggressive price wars.", marks: 2, markCode: "AO2" },
                  { part: "b", reasoning: "If competition becomes intense, prices may fall toward cost levels.", marks: 1, markCode: "AO2" },
                  { part: "c", reasoning: "Differentiate through service, routes or loyalty programmes.", marks: 1, markCode: "AO3" },
                  { part: "c", reasoning: "Reduce costs or focus on profitable routes and customer segments.", marks: 1, markCode: "AO3" },
                  { part: "d", reasoning: "Subsidies may preserve jobs but could delay efficiency and distort competition.", marks: 2, markCode: "AO3" }
                ],
                finalAnswer: "Face price and entrant pressure; compete through differentiation or efficiency, with cautious subsidy use.",
                commonErrors: ["No market structure link.", "Subsidy accepted without evaluation."]
              }
            }
          ]
        }
      ]
    },
    notes: {
      id: "ebz10-u6-government-competition-notes",
      title: "Government, legal and competitive influences — notes",
      summary: "Taxes, subsidies and regulation shape costs and behaviour; market structure and globalisation determine competitive pressure.",
      sections: [
        { heading: "Government", body: "Fiscal and monetary policy plus laws affect costs, demand and compliance." },
        { heading: "Regulation", body: "Consumer, employment, environmental and competition rules protect stakeholders." },
        { heading: "Competition", body: "Market structure, barriers, substitutes and global rivals shape strategy." }
      ]
    }
  },
  {
    file: "lesson-6-3.ts",
    exportName: "lesson63",
    lesson: {
      id: "ebz10-u6-lesson-6-3",
      code: "6-3",
      title: "Business Growth and Digital Business",
      goal: "I CAN evaluate growth strategies, economies of scale and digital business opportunities.",
      standards: ["Edexcel IGCSE Business 4BS0 — External Influences and Growth"],
      vocabulary: [
        { term: "Organic growth", definition: "Growth achieved by expanding existing operations." },
        { term: "Market penetration", definition: "Selling more of existing products to existing markets." },
        { term: "Product development", definition: "Improving or launching new products for existing markets." },
        { term: "Market development", definition: "Selling existing products in new markets." },
        { term: "Diversification", definition: "Moving into new products or markets." },
        { term: "Merger and takeover", definition: "External growth through combining businesses or acquiring control." },
        { term: "Economies of scale", definition: "Cost advantages from increased output." }
      ],
      concepts: [
        {
          id: "ebz10-u6-growth-strategies",
          title: "Business Growth Strategies",
          skill: "Evaluate internal and external growth options and economies of scale.",
          sections: [
            {
              heading: "Organic growth",
              body: "Organic growth means expanding internally through **market penetration**, **product development** and **market development**. **Diversification** moves into new products or markets and may be riskier because the business lacks experience."
            },
            {
              heading: "External growth",
              body: "External growth includes **mergers**, where firms combine, and **takeovers**, where one firm gains control of another. Joint ventures and franchises also allow shared resources or expansion. External growth can be fast but costly and may create integration problems."
            },
            {
              heading: "Economies and diseconomies of scale",
              body: "As output rises, businesses may benefit from lower bulk-buying costs, specialisation, better technology and spreading fixed costs — **economies of scale**. Beyond a point, communication problems, bureaucracy and inefficiency may cause **diseconomies of scale**."
            }
          ],
          keyFormulas: [
            { name: "Market penetration", statement: "More sales of existing products in existing markets" },
            { name: "Diversification", statement: "New products or new markets" },
            { name: "Economies of scale", statement: "Unit costs fall as output rises" }
          ],
          workedExample: {
            problem: "A coffee shop opens a second branch in another town. What growth strategy is this?",
            solution: "Market development: selling existing products in a new market."
          },
          questions: [
            {
              id: "ebz10-u6-growth-q1",
              difficulty: "foundation",
              totalMarks: 2,
              stem: "Which strategy involves selling existing products in a new market?",
              response: {
                type: "mcq",
                choices: [
                  { id: "a", text: "Market penetration" },
                  { id: "b", text: "Product development" },
                  { id: "c", text: "Market development" },
                  { id: "d", text: "Diversification" }
                ],
                correctChoiceId: "c"
              },
              markscheme: {
                principles: [{ kind: "definition", name: "Market development", statement: "Existing products sold into new markets." }],
                steps: [{ reasoning: "Market development keeps the product but changes the market.", marks: 2, markCode: "AO1" }],
                finalAnswer: "**(c)** Market development",
                commonErrors: ["Confusing with product development or penetration."]
              }
            },
            {
              id: "ebz10-u6-growth-q2",
              difficulty: "foundation",
              totalMarks: 3,
              stem: "Give three organic growth strategies.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Organic growth", statement: "Growth through internal expansion." }],
                steps: [
                  { reasoning: "Market penetration — sell more to existing customers.", marks: 1, markCode: "AO1" },
                  { reasoning: "Product development — improve or launch new products.", marks: 1, markCode: "AO1" },
                  { reasoning: "Market development — enter new markets or regions.", marks: 1, markCode: "AO1" }
                ],
                finalAnswer: "Market penetration, product development and market development.",
                commonErrors: ["External growth listed.", "Only one strategy."]
              }
            },
            {
              id: "ebz10-u6-growth-q3",
              difficulty: "core",
              totalMarks: 4,
              stem: "Explain the difference between a merger and a takeover.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "comparison", name: "Merger vs takeover", statement: "Combination versus acquisition of control." }],
                steps: [
                  { reasoning: "A merger combines two businesses as relatively equal partners.", marks: 1, markCode: "AO1" },
                  { reasoning: "A takeover occurs when one business gains control of another.", marks: 1, markCode: "AO1" },
                  { reasoning: "A merger may be more consensual while a takeover may be resisted.", marks: 1, markCode: "AO2" },
                  { reasoning: "Both can create scale but may cause integration problems.", marks: 1, markCode: "AO2" }
                ],
                finalAnswer: "Merger = equal combination; takeover = one firm acquires control.",
                commonErrors: ["Same thing assumed.", "No control difference."]
              }
            },
            {
              id: "ebz10-u6-growth-q4",
              difficulty: "challenge",
              totalMarks: 6,
              stem: "A regional bakery wants to grow but fears losing its local reputation.",
              parts: [
                { label: "a", prompt: "Suggest two organic growth strategies.", marks: 3 },
                { label: "b", prompt: "Explain one advantage and one risk of each.", marks: 3 }
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "skill", name: "Organic growth choice", statement: "Grow gradually while protecting brand and quality." }],
                steps: [
                  { part: "a", reasoning: "Increase sales to existing customers through loyalty schemes or catering.", marks: 2, markCode: "AO3" },
                  { part: "a", reasoning: "Open a second branch or sell online in nearby areas.", marks: 1, markCode: "AO3" },
                  { part: "b", reasoning: "Advantage: builds on existing reputation and skills; risk: capacity or quality may suffer if too fast.", marks: 2, markCode: "AO2" },
                  { part: "b", reasoning: "New branch/online can reach more customers; risk: less personal service or higher costs.", marks: 1, markCode: "AO2" }
                ],
                finalAnswer: "Use loyalty/catering and local expansion; both protect growth but need quality control.",
                commonErrors: ["Only one strategy.", "No risk or advantage."]
              }
            },
            {
              id: "ebz10-u6-growth-q5",
              difficulty: "challenge",
              totalMarks: 7,
              stem: "A manufacturer doubles output but finds unit costs initially fall and later rise.",
              parts: [
                { label: "a", prompt: "Explain two economies of scale it may have experienced.", marks: 4 },
                { label: "b", prompt: "Explain two diseconomies that may have appeared.", marks: 3 }
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Scale effects", statement: "Growth can lower then raise unit costs." }],
                steps: [
                  { part: "a", reasoning: "Bulk buying may reduce material costs per unit.", marks: 2, markCode: "AO2" },
                  { part: "a", reasoning: "Specialisation or spreading fixed costs can improve efficiency.", marks: 2, markCode: "AO2" },
                  { part: "b", reasoning: "Communication and coordination become harder in a larger firm.", marks: 2, markCode: "AO2" },
                  { part: "b", reasoning: "Bureaucracy, congestion or management issues can raise unit costs.", marks: 1, markCode: "AO2" }
                ],
                finalAnswer: "Early growth may bring bulk-buying and specialisation benefits; later growth may bring coordination and bureaucracy costs.",
                commonErrors: ["Only economies or only diseconomies.", "No mechanism."]
              }
            },
            {
              id: "ebz10-u6-growth-q6",
              difficulty: "challenge",
              totalMarks: 10,
              stem: "A small electronics firm must choose between opening abroad, launching a new product line and acquiring a competitor.",
              parts: [
                { label: "a", prompt: "Identify the growth strategy in each option.", marks: 3 },
                { label: "b", prompt: "Explain one advantage and one risk of external growth.", marks: 3 },
                { label: "c", prompt: "Suggest which option suits a small firm and why.", marks: 2 },
                { label: "d", prompt: "Evaluate whether economies of scale would justify the acquisition.", marks: 2 }
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "technique", name: "Growth strategy evaluation", statement: "Match growth route to resources, risk and scale benefits." }],
                steps: [
                  { part: "a", reasoning: "Opening abroad is market development.", marks: 1, markCode: "AO1" },
                  { part: "a", reasoning: "Launching a new product line is product development or diversification.", marks: 1, markCode: "AO1" },
                  { part: "a", reasoning: "Acquiring a competitor is a takeover/external growth.", marks: 1, markCode: "AO1" },
                  { part: "b", reasoning: "Advantage: external growth can be rapid and add customers or skills.", marks: 2, markCode: "AO2" },
                  { part: "b", reasoning: "Risk: high cost, debt and integration problems.", marks: 1, markCode: "AO2" },
                  { part: "c", reasoning: "A small firm may prefer organic expansion or a joint venture before a takeover.", marks: 2, markCode: "AO3" },
                  { part: "d", reasoning: "Scale benefits may justify acquisition only if combined output creates real cost savings.", marks: 2, markCode: "AO3" }
                ],
                finalAnswer: "Match route to stage: organic for control, takeover for speed; acquisition justified only by real scale gains.",
                commonErrors: ["Strategies mislabeled.", "No risk or scale evaluation."]
              }
            }
          ]
        },
        {
          id: "ebz10-u6-digital-business",
          title: "Digital Business and E-Commerce",
          skill: "Evaluate digital channels, data use and technology risks.",
          sections: [
            {
              heading: "Digital channels",
              body: "Businesses use websites, online marketplaces, social media, apps and electronic payments to reach customers. Digital channels can reduce costs, widen markets and provide customer data, but require technology investment and digital skills."
            },
            {
              heading: "Data and personalisation",
              body: "Online businesses collect data on browsing, purchases and preferences. This supports targeted marketing, recommendations and inventory planning. However, businesses must protect customer data and comply with privacy rules."
            },
            {
              heading: "Risks and transformation",
              body: "Digital business faces cybersecurity threats, online fraud, technical failures and dependence on platforms. **Digital transformation** means changing processes and culture to use technology effectively. Success requires training, reliable systems and customer trust."
            }
          ],
          keyFormulas: [
            { name: "E-commerce", statement: "Buying and selling goods or services online" },
            { name: "Digital transformation", statement: "Integrating digital technology into business processes" }
          ],
          workedExample: {
            problem: "A bakery adds online ordering and delivery. What digital benefits and risks apply?",
            solution: "Benefits include wider reach and convenience; risks include website security, data protection and delivery reliability."
          },
          questions: [
            {
              id: "ebz10-u6-digital-q1",
              difficulty: "foundation",
              totalMarks: 2,
              stem: "What is e-commerce?",
              response: {
                type: "mcq",
                choices: [
                  { id: "a", text: "Selling only through physical shops" },
                  { id: "b", text: "Buying and selling goods or services online" },
                  { id: "c", text: "Using cash registers" },
                  { id: "d", text: "Printing product catalogs" }
                ],
                correctChoiceId: "b"
              },
              markscheme: {
                principles: [{ kind: "definition", name: "E-commerce", statement: "Commercial transactions conducted online." }],
                steps: [{ reasoning: "E-commerce involves online buying, selling or payment for goods and services.", marks: 2, markCode: "AO1" }],
                finalAnswer: "**(b)** Buying and selling goods or services online",
                commonErrors: ["Confusing e-commerce with digital marketing only."]
              }
            },
            {
              id: "ebz10-u6-digital-q2",
              difficulty: "foundation",
              totalMarks: 3,
              stem: "Give three benefits of digital channels for a small business.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Digital benefits", statement: "Reach, data and lower costs." }],
                steps: [
                  { reasoning: "Reach customers beyond the local area.", marks: 1, markCode: "AO1" },
                  { reasoning: "Collect data to personalise offers and improve decisions.", marks: 1, markCode: "AO1" },
                  { reasoning: "Reduce some costs compared with physical expansion.", marks: 1, markCode: "AO1" }
                ],
                finalAnswer: "Wider reach, customer data and potentially lower costs.",
                commonErrors: ["Only marketing benefit.", "No business outcome."]
              }
            },
            {
              id: "ebz10-u6-digital-q3",
              difficulty: "core",
              totalMarks: 4,
              stem: "Explain two risks of collecting customer data online.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Data risks", statement: "Personal data requires security and privacy compliance." }],
                steps: [
                  { reasoning: "Data breaches or cyberattacks could expose customer information.", marks: 2, markCode: "AO2" },
                  { reasoning: "Misuse of data could damage trust and lead to legal penalties.", marks: 1, markCode: "AO2" },
                  { reasoning: "Businesses must secure systems and follow privacy rules.", marks: 1, markCode: "AO2" }
                ],
                finalAnswer: "Data theft and privacy breaches can harm customers, reputation and compliance.",
                commonErrors: ["Only one risk.", "No security or privacy link."]
              }
            },
            {
              id: "ebz10-u6-digital-q4",
              difficulty: "challenge",
              totalMarks: 6,
              stem: "A retailer currently sells only in a physical store but considers adding an online shop.",
              parts: [
                { label: "a", prompt: "Suggest two digital channels it could use.", marks: 3 },
                { label: "b", prompt: "Explain one advantage and one risk of going online.", marks: 3 }
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "technique", name: "Digital expansion", statement: "Use channels that match customers and capabilities." }],
                steps: [
                  { part: "a", reasoning: "Create an e-commerce website for online sales.", marks: 2, markCode: "AO3" },
                  { part: "a", reasoning: "Use social media or online marketplaces to promote products.", marks: 1, markCode: "AO3" },
                  { part: "b", reasoning: "Advantage: reach more customers and gather sales data.", marks: 2, markCode: "AO2" },
                  { part: "b", reasoning: "Risk: cybersecurity, delivery costs and competition from online rivals.", marks: 1, markCode: "AO2" }
                ],
                finalAnswer: "Use website, marketplaces or social media; gain reach but manage security and logistics.",
                commonErrors: ["Only one channel.", "No risk."]
              }
            },
            {
              id: "ebz10-u6-digital-q5",
              difficulty: "challenge",
              totalMarks: 7,
              stem: "A company wants to become a 'digital business' but staff resist new systems.",
              parts: [
                { label: "a", prompt: "Explain two benefits of digital transformation.", marks: 4 },
                { label: "b", prompt: "Suggest two ways to overcome staff resistance.", marks: 3 }
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Digital transformation", statement: "Technology must be supported by training and change management." }],
                steps: [
                  { part: "a", reasoning: "Automation and data tools can improve efficiency and decisions.", marks: 2, markCode: "AO2" },
                  { part: "a", reasoning: "Digital channels can improve customer service and market reach.", marks: 2, markCode: "AO2" },
                  { part: "b", reasoning: "Provide training and involve staff in choosing systems.", marks: 2, markCode: "AO3" },
                  { part: "b", reasoning: "Explain benefits clearly and offer support during transition.", marks: 1, markCode: "AO3" }
                ],
                finalAnswer: "Digital transformation improves efficiency and service but needs training and staff involvement.",
                commonErrors: ["Technology only.", "No resistance solution."]
              }
            },
            {
              id: "ebz10-u6-digital-q6",
              difficulty: "challenge",
              totalMarks: 10,
              stem: "A restaurant chain wants to use an app for orders, loyalty rewards and customer feedback.",
              parts: [
                { label: "a", prompt: "Explain two benefits of the app.", marks: 3 },
                { label: "b", prompt: "Explain two risks of the app.", marks: 3 },
                { label: "c", prompt: "Suggest two data uses that could improve the business.", marks: 2 },
                { label: "d", prompt: "Evaluate whether the chain should invest in the app.", marks: 2 }
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "technique", name: "Digital customer platform", statement: "Apps can improve service but require security and adoption." }],
                steps: [
                  { part: "a", reasoning: "It can increase convenience and repeat orders through loyalty rewards.", marks: 2, markCode: "AO2" },
                  { part: "a", reasoning: "It can collect feedback to improve products and service.", marks: 1, markCode: "AO2" },
                  { part: "b", reasoning: "Customer data could be breached if security is weak.", marks: 2, markCode: "AO2" },
                  { part: "b", reasoning: "Customers may not adopt the app or delivery costs may rise.", marks: 1, markCode: "AO2" },
                  { part: "c", reasoning: "Analyse order patterns to improve menu and staffing.", marks: 1, markCode: "AO3" },
                  { part: "c", reasoning: "Use feedback to identify service problems quickly.", marks: 1, markCode: "AO3" },
                  { part: "d", reasoning: "Invest if expected customer gains exceed development, security and support costs.", marks: 2, markCode: "AO3" }
                ],
                finalAnswer: "The app can boost convenience, loyalty and feedback but needs security, adoption and cost control.",
                commonErrors: ["Only benefits or only risks.", "No data or investment evaluation."]
              }
            }
          ]
        }
      ]
    },
    notes: {
      id: "ebz10-u6-growth-digital-notes",
      title: "Growth and digital business — notes",
      summary: "Choose growth routes carefully, use scale benefits where possible, and evaluate digital channels with security, data and cost in mind.",
      sections: [
        { heading: "Growth", body: "Organic strategies include penetration, product and market development; external growth includes mergers and takeovers." },
        { heading: "Scale", body: "Economies of scale lower unit costs; diseconomies appear when firms become too large." },
        { heading: "Digital", body: "E-commerce and data improve reach and service but create security and privacy risks." },
        { heading: "Decision", body: "Evaluate cost, risk, capability and customer benefit before growing or digitising." }
      ]
    }
  }
];
