module.exports = [
  {
    file: "lesson-6-1.ts", exportName: "lesson61",
    lesson: {
      id: "ecn10-u6-lesson-6-1", code: "6-1",
      title: "Multinational Corporations and Globalisation",
      goal: "I CAN explain what MNCs are, how globalisation works and evaluate their impacts.",
      standards: ["Edexcel IGCSE Economics 4EC1 — The Global Economy: globalisation and MNCs"],
      vocabulary: [
        { term: "Multinational corporation (MNC)", definition: "A company operating in more than one country." },
        { term: "Globalisation", definition: "The growing interconnectedness of the world economy through trade, investment, migration and information." },
        { term: "Foreign direct investment (FDI)", definition: "Investment by a firm in productive assets in another country." },
        { term: "Offshoring", definition: "Moving production or services to another country to cut costs." },
        { term: "Outsourcing", definition: "Contracting work to another firm, often abroad." },
      ],
      concepts: [
        {
          id: "ecn10-u6-mnc",
          title: "Multinational Corporations",
          skill: "Explain the motives and impacts of multinational corporations on home and host countries.",
          sections: [
            {
              heading: "What MNCs are",
              body: "An **MNC** is a firm operating in two or more countries — e.g. Nike, Toyota, Samsung. MNCs locate abroad to access **larger markets**, **cheaper labour**, **raw materials**, **tax advantages**, and to be closer to customers. They transfer **technology, management skills and capital**.",
            },
            {
              heading: "Benefits to host countries",
              body: "MNCs bring **jobs**, **export earnings**, **technology and skills transfer**, **infrastructure investment**, and **tax revenue**. They may also upgrade local suppliers through supply chains. For developing countries, FDI is often the largest source of external finance.",
            },
            {
              heading: "Costs and concerns",
              body: "MNCs can **repatriate profits** out of the host country, pay **low wages** in export zones, **avoid tax** via transfer pricing, **squeeze out local firms**, and create **environmental damage**. In home countries, offshoring can **lose jobs**. MNCs also gain huge **market power**.",
            },
          ],
          keyFormulas: [
            { name: "MNC", statement: "Firm operating in 2+ countries via FDI" },
            { name: "FDI", statement: "Investment in productive assets abroad" },
          ],
          workedExample: {
            problem: "A shoe MNC builds a factory in a poor country paying low wages. Give one benefit and one cost to the host country.",
            solution: "Benefit: jobs and skills for local workers. Cost: profits repatriated abroad and possible wage exploitation.",
          },
          questions: [
            {
              id: "ecn10-u6-mnc-q1", difficulty: "foundation", totalMarks: 2,
              stem: "What is a multinational corporation (MNC)?",
              response: { type: "mcq", choices: [
                { id: "a", text: "A company owned by many shareholders" },
                { id: "b", text: "A company operating in more than one country" },
                { id: "c", text: "A very large domestic company" },
                { id: "d", text: "A government-owned enterprise" },
              ], correctChoiceId: "b" },
              markscheme: {
                principles: [{ kind: "definition", name: "MNC", statement: "Operates in 2+ countries." }],
                steps: [{ reasoning: "MNC = multinational operations via FDI.", marks: 2, markCode: "AO1" }],
                finalAnswer: "**(b)** Operating in more than one country",
                commonErrors: ["Confusing size with multinationality."],
              },
            },
            {
              id: "ecn10-u6-mnc-q2", difficulty: "foundation", totalMarks: 3,
              stem: "Give three reasons an MNC might locate production in a developing country.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "MNC motives", statement: "Low costs, markets, resources, tax." }],
                steps: [
                  { reasoning: "Lower labour costs — cheap workforce.", marks: 1, markCode: "AO2" },
                  { reasoning: "Access to raw materials or a growing consumer market.", marks: 1, markCode: "AO2" },
                  { reasoning: "Lower taxes or weaker regulation in the host country.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "Cheap labour, resources/markets, tax/regulatory advantages.",
                commonErrors: ["Listing benefits to the host country instead of motives."],
              },
            },
            {
              id: "ecn10-u6-mnc-q3", difficulty: "core", totalMarks: 4,
              stem: "Explain two benefits MNCs bring to a developing host country.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "FDI benefits", statement: "Jobs, skills, technology, tax revenue." }],
                steps: [
                  { reasoning: "Create jobs and raise local incomes.", marks: 1, markCode: "AO2" },
                  { reasoning: "Transfer technology and management skills.", marks: 1, markCode: "AO2" },
                  { reasoning: "Generate export earnings and tax revenue.", marks: 1, markCode: "AO2" },
                  { reasoning: "Invest in infrastructure and upgrade local suppliers.", marks: 1, markCode: "AO3" },
                ],
                finalAnswer: "Jobs, skills/technology, exports/tax, infrastructure.",
                commonErrors: ["Only listing costs."],
              },
            },
            {
              id: "ecn10-u6-mnc-q4", difficulty: "challenge", totalMarks: 6,
              stem: "A clothing MNC closes its factory in Country A and opens one in Country B where wages are lower.",
              parts: [
                { label: "a", prompt: "Explain the effect on Country A's economy.", marks: 3 },
                { label: "b", prompt: "Explain the effect on Country B's economy.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Offshoring", statement: "Production moves to lower-cost locations." }],
                steps: [
                  { reasoning: "(a) Job losses in Country A — unemployment rises.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Lost export earnings and tax revenue decline.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(b) New jobs and incomes created in Country B.", marks: 2, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Export earnings and tax revenue rise for Country B.", marks: 1, markCode: "AO2", part: "b" },
                ],
                finalAnswer: "(a) A loses jobs and revenue (b) B gains jobs and revenue",
                commonErrors: ["Treating MNC decisions as costless for both."],
              },
            },
            {
              id: "ecn10-u6-mnc-q5", difficulty: "challenge", totalMarks: 8,
              stem: "A developing country welcomes a large MNC to build a factory.",
              parts: [
                { label: "a", prompt: "Explain three ways the MNC could benefit the host country.", marks: 4 },
                { label: "b", prompt: "Explain three ways the MNC could harm the host country.", marks: 4 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "MNC impact", statement: "Jobs and investment vs profit repatriation and exploitation." }],
                steps: [
                  { reasoning: "(a) Jobs and skills for local workers.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Technology transfer and export earnings.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Tax revenue and infrastructure investment.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Supply-chain links benefit local firms.", marks: 1, markCode: "AO3", part: "a" },
                  { reasoning: "(b) Profits repatriated — little stays in the host economy.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Low wages and poor conditions in export zones.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Tax avoidance and environmental damage.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) May squeeze out local firms unable to compete.", marks: 1, markCode: "AO3", part: "b" },
                ],
                finalAnswer: "(a) jobs, technology, tax/infrastructure, links (b) repatriation, low wages, tax avoidance, displacement",
                commonErrors: ["One-sided impact analysis."],
              },
            },
            {
              id: "ecn10-u6-mnc-q6", difficulty: "challenge", totalMarks: 10,
              stem: "An MNC announces it will build a factory in a developing country.",
              parts: [
                { label: "a", prompt: "Explain two reasons the host country might welcome the investment.", marks: 3 },
                { label: "b", prompt: "Explain two reasons the host country might be cautious.", marks: 4 },
                { label: "c", prompt: "Evaluate whether the host country should welcome the MNC.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "FDI evaluation", statement: "FDI brings jobs and capital but with conditions." }],
                steps: [
                  { reasoning: "(a) Jobs and income for local workers.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Technology, skills and export earnings.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Tax revenue and infrastructure investment.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(b) Profit repatriation limits local benefit.", marks: 2, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Possible low wages, poor conditions, environmental damage.", marks: 2, markCode: "AO2", part: "b" },
                  { reasoning: "(c) Generally positive if terms are fair — but depends on regulation and linkages.", marks: 2, markCode: "AO3", part: "c" },
                  { reasoning: "(c) Host countries can negotiate conditions or use the investment as leverage.", marks: 1, markCode: "AO3", part: "c" },
                ],
                finalAnswer: "(a) jobs, technology, tax (b) repatriation, exploitation risk (c) welcome with regulation",
                commonErrors: ["No balanced evaluation."],
              },
            },
          ],
        },
        {
          id: "ecn10-u6-glob",
          title: "Globalisation",
          skill: "Explain the drivers and impacts of globalisation on economies and societies.",
          sections: [
            {
              heading: "Drivers of globalisation",
              body: "**Trade liberalisation** (lower tariffs, WTO rules), **transport and communication costs** falling (containers, internet), **financial liberalisation** (capital flows freely), **MNCs** spreading production globally, and **technology** enabling global supply chains.",
            },
            {
              heading: "Benefits of globalisation",
              body: "**Efficiency gains** from specialisation and economies of scale; **lower prices** for consumers; **access to markets** for poor countries' exports; **technology and ideas transfer**; **higher growth** and **poverty reduction** in many developing countries (e.g. China, Vietnam).",
            },
            {
              heading: "Costs of globalisation",
              body: "**Job losses** in developed countries as production offshores; **wage inequality** (skilled wages rise, unskilled fall); **environmental damage** from increased production and transport; **cultural homogenisation**; **volatility** — global financial crises spread faster; **tax competition** as countries cut rates to attract MNCs.",
            },
          ],
          keyFormulas: [
            { name: "Globalisation", statement: "Growing interconnectedness of the world economy" },
            { name: "Trade liberalisation", statement: "Lowering barriers to international trade" },
          ],
          workedExample: {
            problem: "A factory worker in the US loses their job as production moves to Vietnam. Is this a benefit or cost of globalisation?",
            solution: "A cost for that worker and the US economy, but a benefit for Vietnamese workers and consumers who get cheaper goods — globalisation creates winners and losers.",
          },
          questions: [
            {
              id: "ecn10-u6-glob-q1", difficulty: "foundation", totalMarks: 2,
              stem: "What is globalisation?",
              response: { type: "mcq", choices: [
                { id: "a", text: "The growth of a single country's economy" },
                { id: "b", text: "The growing interconnectedness of the world economy" },
                { id: "c", text: "International travel and tourism" },
                { id: "d", text: "The rise of multinational companies only" },
              ], correctChoiceId: "b" },
              markscheme: {
                principles: [{ kind: "definition", name: "Globalisation", statement: "Interconnectedness of the world economy." }],
                steps: [{ reasoning: "Globalisation = integration of trade, finance, production, information.", marks: 2, markCode: "AO1" }],
                finalAnswer: "**(b)** Interconnectedness of the world economy",
                commonErrors: ["Confusing with MNCs alone."],
              },
            },
            {
              id: "ecn10-u6-glob-q2", difficulty: "foundation", totalMarks: 3,
              stem: "Give three drivers of globalisation.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Globalisation drivers", statement: "Trade liberalisation, technology, falling transport costs." }],
                steps: [
                  { reasoning: "Trade liberalisation — lower tariffs and fewer barriers.", marks: 1, markCode: "AO2" },
                  { reasoning: "Falling transport and communication costs.", marks: 1, markCode: "AO2" },
                  { reasoning: "Financial liberalisation and technology (internet, containers).", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "Trade liberalisation, technology, falling transport/communication costs.",
                commonErrors: ["Listing effects instead of drivers."],
              },
            },
            {
              id: "ecn10-u6-glob-q3", difficulty: "core", totalMarks: 4,
              stem: "Explain two benefits of globalisation for developing countries.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Globalisation benefits", statement: "Market access, investment, technology, growth." }],
                steps: [
                  { reasoning: "Access to large export markets for their goods.", marks: 1, markCode: "AO2" },
                  { reasoning: "FDI brings jobs, capital and technology.", marks: 1, markCode: "AO2" },
                  { reasoning: "Technology and ideas transfer raises productivity.", marks: 1, markCode: "AO2" },
                  { reasoning: "Integration has lifted millions out of poverty in many countries.", marks: 1, markCode: "AO3" },
                ],
                finalAnswer: "Market access, FDI/jobs, technology transfer, poverty reduction.",
                commonErrors: ["Only listing benefits to rich countries."],
              },
            },
            {
              id: "ecn10-u6-glob-q4", difficulty: "challenge", totalMarks: 6,
              stem: "A developed country's manufacturing sector shrinks as production moves abroad.",
              parts: [
                { label: "a", prompt: "Explain two costs of this for the developed country.", marks: 3 },
                { label: "b", prompt: "Explain two benefits it may still gain.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Globalisation impacts", statement: "Job losses vs cheaper goods and services." }],
                steps: [
                  { reasoning: "(a) Job losses in manufacturing — unemployment and wage pressure.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Regional decline — whole towns dependent on one industry suffer.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(b) Consumers get cheaper imported goods — higher living standards.", marks: 2, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Economy shifts to higher-value services — potentially more productive.", marks: 1, markCode: "AO3", part: "b" },
                ],
                finalAnswer: "(a) job losses, regional decline (b) cheaper goods, shift to services",
                commonErrors: ["One-sided analysis of globalisation."],
              },
            },
            {
              id: "ecn10-u6-glob-q5", difficulty: "challenge", totalMarks: 8,
              stem: "Globalisation has increased the gap between skilled and unskilled workers in many countries.",
              parts: [
                { label: "a", prompt: "Explain why globalisation may increase wage inequality.", marks: 4 },
                { label: "b", prompt: "Explain one way governments could reduce this inequality.", marks: 4 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Skill-biased change", statement: "Globalisation rewards skills; unskilled wages stagnate." }],
                steps: [
                  { reasoning: "(a) MNCs and trade reward skilled workers — demand for them rises.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Unskilled jobs move to low-wage countries — domestic wages stagnate.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(b) Invest in education and training to upskill workers.", marks: 2, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Progressive taxes and benefits redistribute gains.", marks: 2, markCode: "AO2", part: "b" },
                ],
                finalAnswer: "(a) skilled demand up, unskilled jobs offshored (b) upskilling, redistribution",
                commonErrors: ["Treating globalisation as uniformly beneficial."],
              },
            },
            {
              id: "ecn10-u6-glob-q6", difficulty: "challenge", totalMarks: 10,
              stem: "A country debates whether to embrace deeper globalisation.",
              parts: [
                { label: "a", prompt: "Explain two benefits of deeper globalisation for the country.", marks: 4 },
                { label: "b", prompt: "Explain two costs of deeper globalisation for the country.", marks: 4 },
                { label: "c", prompt: "Evaluate whether the country should embrace it.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Globalisation evaluation", statement: "Benefits and costs depend on how integration is managed." }],
                steps: [
                  { reasoning: "(a) Access to bigger markets and cheaper inputs.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(a) FDI brings jobs, technology and capital.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(b) Job losses in uncompetitive sectors and regions.", marks: 2, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Vulnerability to global shocks and inequality risks.", marks: 2, markCode: "AO2", part: "b" },
                  { reasoning: "(c) Generally beneficial if managed — openness plus social safety nets.", marks: 2, markCode: "AO3", part: "c" },
                ],
                finalAnswer: "(a) markets, investment (b) job losses, vulnerability (c) embrace with safeguards",
                commonErrors: ["No evaluation or one-sided answer."],
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "ecn10-u6-glob-notes", title: "Globalisation and MNCs — notes",
      summary: "MNCs bring FDI, jobs and technology but can exploit; globalisation creates winners and losers.",
      sections: [
        { heading: "Key idea", body: "Globalisation integrates economies through trade, investment, migration and information." },
        { heading: "MNCs", body: "Benefits: jobs, skills, exports. Costs: profit repatriation, low wages, displacement." },
        { heading: "Impacts", body: "Winners: consumers, investors, skilled workers, developing exporters. Losers: unskilled workers, import-competing firms." },
      ],
    },
  },
  {
    file: "lesson-6-2.ts", exportName: "lesson62",
    lesson: {
      id: "ecn10-u6-lesson-6-2", code: "6-2",
      title: "Aid and Development Finance",
      goal: "I CAN explain types of aid and evaluate their effectiveness for development.",
      standards: ["Edexcel IGCSE Economics 4EC1 — The Global Economy: aid and development"],
      vocabulary: [
        { term: "Aid", definition: "Resources transferred from rich to poor countries to support development." },
        { term: "Bilateral aid", definition: "Aid given directly by one country to another." },
        { term: "Multilateral aid", definition: "Aid channelled through international organisations like the UN or World Bank." },
        { term: "Tied aid", definition: "Aid that must be spent on goods or services from the donor country." },
        { term: "Development aid", definition: "Long-term aid for projects like schools, hospitals and infrastructure." },
        { term: "Emergency aid", definition: "Short-term aid for crises — famine, floods, conflict." },
      ],
      concepts: [
        {
          id: "ecn10-u6-aid",
          title: "Types of Aid",
          skill: "Distinguish types of aid and evaluate their effectiveness.",
          sections: [
            {
              heading: "Types of aid",
              body: "**Bilateral aid**: country-to-country — e.g. UK aid to Kenya. **Multilateral aid**: via organisations — UN, World Bank, IMF. **Tied aid**: must buy donor's goods — less efficient but benefits donor firms. **Emergency aid**: food, medicine in crises. **Development aid**: long-term projects — schools, roads, hospitals.",
            },
            {
              heading: "Effectiveness of aid",
              body: "Aid **works** when it funds productive investment, builds infrastructure, and reaches those in need. It **fails** when it is tied (overpriced goods), misused by corrupt governments, creates **dependency**, or is spent on consumption rather than investment. Evidence is mixed — some countries grew with aid, others did not.",
            },
            {
              heading: "Alternatives to aid",
              body: "**FDI and trade** may be more sustainable than aid. **Remittances** from migrants often exceed aid. **Debt relief** frees resources for development. **Fair trade** gives producers better prices. **Microfinance** empowers small entrepreneurs.",
            },
          ],
          keyFormulas: [
            { name: "Bilateral aid", statement: "Direct country-to-country transfer" },
            { name: "Multilateral aid", statement: "Via international organisations" },
            { name: "Tied aid", statement: "Must be spent on donor country's goods" },
          ],
          workedExample: {
            problem: "Country A gives £100m of tied aid for hospitals, but the equipment must be bought from Country A at inflated prices. Is this efficient aid?",
            solution: "Partly — it delivers hospitals but much of the £100m leaks back to donor firms; untied aid would buy more for the same money.",
          },
          questions: [
            {
              id: "ecn10-u6-aid-q1", difficulty: "foundation", totalMarks: 2,
              stem: "What is bilateral aid?",
              response: { type: "mcq", choices: [
                { id: "a", text: "Aid given through the UN" },
                { id: "b", text: "Aid given directly by one country to another" },
                { id: "c", text: "Aid that must be spent on donor goods" },
                { id: "d", text: "Emergency food aid" },
              ], correctChoiceId: "b" },
              markscheme: {
                principles: [{ kind: "definition", name: "Bilateral aid", statement: "Country-to-country aid." }],
                steps: [{ reasoning: "Bilateral = two parties, direct transfer.", marks: 2, markCode: "AO1" }],
                finalAnswer: "**(b)** Direct country-to-country",
                commonErrors: ["Confusing with multilateral."],
              },
            },
            {
              id: "ecn10-u6-aid-q2", difficulty: "foundation", totalMarks: 3,
              stem: "Distinguish between tied and untied aid.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "comparison", name: "Tied vs untied", statement: "Tied must buy donor goods; untied can be spent freely." }],
                steps: [
                  { reasoning: "Tied aid must be spent on the donor country's goods/services.", marks: 1, markCode: "AO1" },
                  { reasoning: "Untied aid can be spent on whatever the recipient needs.", marks: 1, markCode: "AO1" },
                  { reasoning: "Tied aid often delivers less value for money but benefits donor firms.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "Tied = restricted to donor goods; untied = free spending.",
                commonErrors: ["Thinking tied aid is always better for the recipient."],
              },
            },
            {
              id: "ecn10-u6-aid-q3", difficulty: "core", totalMarks: 4,
              stem: "Explain two ways aid can support development.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Aid for development", statement: "Funds investment, services and capacity." }],
                steps: [
                  { reasoning: "Funds infrastructure — roads, schools, hospitals, water.", marks: 1, markCode: "AO2" },
                  { reasoning: "Supports services — healthcare, education, food security.", marks: 1, markCode: "AO2" },
                  { reasoning: "Builds capacity — training, technical expertise, institutions.", marks: 1, markCode: "AO2" },
                  { reasoning: "Emergency aid saves lives in crises, enabling recovery.", marks: 1, markCode: "AO3" },
                ],
                finalAnswer: "Infrastructure, services, capacity building, emergency relief.",
                commonErrors: ["Only describing emergency aid."],
              },
            },
            {
              id: "ecn10-u6-aid-q4", difficulty: "challenge", totalMarks: 6,
              stem: "A country receives large amounts of foreign aid but its economy stagnates.",
              parts: [
                { label: "a", prompt: "Explain two reasons aid might fail to produce development.", marks: 3 },
                { label: "b", prompt: "Explain one reason aid might still be worthwhile.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Aid effectiveness", statement: "Aid works only if well-used and targeted." }],
                steps: [
                  { reasoning: "(a) Corruption — aid embezzled by officials.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Aid spent on consumption, not investment.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Tied aid delivers overpriced goods — little real value.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(b) Even poorly-used aid may fund essential services — health, food.", marks: 2, markCode: "AO2", part: "b" },
                  { reasoning: "(b) It prevents worse outcomes — famine, disease, collapse.", marks: 1, markCode: "AO3", part: "b" },
                ],
                finalAnswer: "(a) corruption, consumption, tied inefficiency (b) still prevents worse outcomes",
                commonErrors: ["All-or-nothing view of aid."],
              },
            },
            {
              id: "ecn10-u6-aid-q5", difficulty: "challenge", totalMarks: 8,
              stem: "Compare aid, foreign direct investment and remittances as sources of finance for development.",
              parts: [
                { label: "a", prompt: "Explain one advantage of FDI over aid.", marks: 4 },
                { label: "b", prompt: "Explain one advantage of remittances over aid.", marks: 4 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "comparison", name: "Development finance", statement: "FDI brings jobs; remittances reach families directly." }],
                steps: [
                  { reasoning: "(a) FDI creates jobs and transfers technology — more sustainable than aid.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(a) FDI does not create dependency or require repayment.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(b) Remittances go directly to families — bypass corrupt governments.", marks: 2, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Often larger than aid flows and spent on health, education, housing.", marks: 2, markCode: "AO3", part: "b" },
                ],
                finalAnswer: "(a) FDI = jobs/technology, no dependency (b) remittances = direct to families, often larger",
                commonErrors: ["Comparing without advantages."],
              },
            },
            {
              id: "ecn10-u6-aid-q6", difficulty: "challenge", totalMarks: 10,
              stem: "A donor country is deciding how to spend its aid budget.",
              parts: [
                { label: "a", prompt: "Explain two factors that should influence the choice of aid projects.", marks: 4 },
                { label: "b", prompt: "Explain two risks of giving aid to a corrupt government.", marks: 4 },
                { label: "c", prompt: "Evaluate whether the donor should give aid at all.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Aid design", statement: "Aid is most effective when targeted, untied and accountable." }],
                steps: [
                  { reasoning: "(a) Recipient need — where poverty and deprivation are greatest.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Likelihood of success — governance, capacity, sustainability.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(b) Aid may be embezzled — little reaches the poor.", marks: 2, markCode: "AO2", part: "b" },
                  { reasoning: "(b) May entrench bad governments — reduce pressure for reform.", marks: 2, markCode: "AO3", part: "b" },
                  { reasoning: "(c) Aid still worthwhile if targeted well — but conditions and monitoring matter.", marks: 2, markCode: "AO3", part: "c" },
                ],
                finalAnswer: "(a) need, capacity (b) embezzlement, entrenchment (c) give with conditions and monitoring",
                commonErrors: ["No evaluation of whether to give at all."],
              },
            },
          ],
        },
        {
          id: "ecn10-u6-debt",
          title: "Debt and Development Finance",
          skill: "Explain how debt affects development and evaluate debt relief.",
          sections: [
            {
              heading: "The debt problem",
              body: "Many developing countries borrowed heavily in the 1970s-80s. High interest rates, falling export prices and poor management created **debt crises**. Debt repayments consume a large share of export earnings — money that could fund schools, hospitals and infrastructure instead goes to creditors.",
            },
            {
              heading: "Debt relief",
              body: "**Debt relief** cancels or reduces debt — freeing resources for development. The **HIPC initiative** (Heavily Indebted Poor Countries) cancelled billions for the poorest nations. **Debt-for-nature swaps** forgive debt in exchange for conservation. Critics argue relief rewards bad governance; supporters say it breaks the debt trap.",
            },
            {
              heading: "Other development finance",
              body: "**Microfinance** — small loans to entrepreneurs. **Fair trade** — guaranteed prices for producers. **Social enterprise and impact investing** — businesses with social goals. **Remittances** — often the largest private flow to developing countries.",
            },
          ],
          keyFormulas: [
            { name: "Debt trap", statement: "Repayments exceed capacity → must borrow more" },
            { name: "HIPC", statement: "Heavily Indebted Poor Countries debt relief initiative" },
            { name: "Remittances", statement: "Money sent home by migrant workers" },
          ],
          workedExample: {
            problem: "Country D spends 40% of export earnings on debt repayments. What is the opportunity cost?",
            solution: "40% of export earnings cannot fund health, education or infrastructure — the debt burden crowds out development spending.",
          },
          questions: [
            {
              id: "ecn10-u6-debt-q1", difficulty: "foundation", totalMarks: 2,
              stem: "What is debt relief?",
              response: { type: "mcq", choices: [
                { id: "a", text: "Borrowing more money" },
                { id: "b", text: "Cancelling or reducing a country's debt" },
                { id: "c", text: "Paying interest on time" },
                { id: "d", text: "A type of foreign aid" },
              ], correctChoiceId: "b" },
              markscheme: {
                principles: [{ kind: "definition", name: "Debt relief", statement: "Cancelling or reducing debt." }],
                steps: [{ reasoning: "Debt relief = forgiveness or restructuring of debt.", marks: 2, markCode: "AO1" }],
                finalAnswer: "**(b)** Cancelling or reducing debt",
                commonErrors: ["Confusing with debt restructuring."],
              },
            },
            {
              id: "ecn10-u6-debt-q2", difficulty: "foundation", totalMarks: 3,
              stem: "Explain how heavy debt burdens affect a developing country's development.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Debt burden", statement: "Repayments crowd out development spending." }],
                steps: [
                  { reasoning: "Debt repayments consume export earnings needed for imports.", marks: 1, markCode: "AO2" },
                  { reasoning: "Less money available for health, education, infrastructure.", marks: 1, markCode: "AO2" },
                  { reasoning: "May need to borrow more — the debt trap deepens.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "Repayments crowd out development spending → debt trap.",
                commonErrors: ["Ignoring opportunity cost."],
              },
            },
            {
              id: "ecn10-u6-debt-q3", difficulty: "core", totalMarks: 4,
              stem: "Explain two arguments for and two arguments against debt relief for poor countries.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "comparison", name: "Debt relief debate", statement: "Frees resources vs rewards bad governance." }],
                steps: [
                  { reasoning: "For: frees resources for health, education, infrastructure.", marks: 1, markCode: "AO2" },
                  { reasoning: "For: breaks the debt trap — enables growth.", marks: 1, markCode: "AO2" },
                  { reasoning: "Against: may reward corrupt or reckless governments.", marks: 1, markCode: "AO3" },
                  { reasoning: "Against: reduces incentive to manage finances prudently.", marks: 1, markCode: "AO3" },
                ],
                finalAnswer: "For: resources, growth. Against: rewards bad governance, weakens discipline.",
                commonErrors: ["Only one side of the debate."],
              },
            },
            {
              id: "ecn10-u6-debt-q4", difficulty: "challenge", totalMarks: 6,
              stem: "A heavily indebted poor country spends 45% of government revenue on debt repayments.",
              parts: [
                { label: "a", prompt: "Explain two consequences of this for the country's population.", marks: 3 },
                { label: "b", prompt: "Explain how debt relief could change the situation.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Debt burden", statement: "Repayments crowd out essential spending." }],
                steps: [
                  { reasoning: "(a) Less spending on health and education — worse services.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Less infrastructure investment — slower growth.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(b) Cancelled debt frees revenue for services and investment.", marks: 2, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Breaks the debt trap — country can invest in growth.", marks: 1, markCode: "AO3", part: "b" },
                ],
                finalAnswer: "(a) worse services, slower growth (b) frees resources, breaks trap",
                commonErrors: ["Not linking repayments to opportunity cost."],
              },
            },
            {
              id: "ecn10-u6-debt-q5", difficulty: "challenge", totalMarks: 8,
              stem: "Remittances to a developing country exceed its foreign aid receipts.",
              parts: [
                { label: "a", prompt: "Explain two reasons remittances might be more effective for development than aid.", marks: 4 },
                { label: "b", prompt: "Explain one reason remittances might not reduce poverty.", marks: 4 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Remittances", statement: "Private transfers directly to households." }],
                steps: [
                  { reasoning: "(a) Go directly to families — bypass corrupt governments.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Spent on health, education, housing — immediate welfare gains.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(b) Remittances can reduce work incentives — 'Dutch disease' of labour.", marks: 2, markCode: "AO3", part: "b" },
                  { reasoning: "(b) Dependence on migrants abroad — vulnerable to their job losses.", marks: 2, markCode: "AO3", part: "b" },
                ],
                finalAnswer: "(a) direct to families, welfare spending (b) work disincentive, dependence",
                commonErrors: ["Assuming remittances are pure benefit."],
              },
            },
            {
              id: "ecn10-u6-debt-q6", difficulty: "challenge", totalMarks: 10,
              stem: "The international community debates debt relief for the world's poorest countries.",
              parts: [
                { label: "a", prompt: "Explain two arguments in favour of debt relief.", marks: 4 },
                { label: "b", prompt: "Explain two arguments against debt relief.", marks: 4 },
                { label: "c", prompt: "Evaluate the case for debt relief.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Debt relief debate", statement: "Frees resources vs moral hazard." }],
                steps: [
                  { reasoning: "(a) Frees resources for health, education and infrastructure.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Breaks the debt trap — enables long-term growth.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(b) Rewards poor governance — moral hazard for future borrowing.", marks: 2, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Creditor nations lose money — unfair to those who repaid.", marks: 2, markCode: "AO2", part: "b" },
                  { reasoning: "(c) Relief with conditions is justified — unconditional relief risks repeat crises.", marks: 2, markCode: "AO3", part: "c" },
                ],
                finalAnswer: "(a) resources, growth (b) moral hazard, unfairness (c) conditional relief justified",
                commonErrors: ["No balanced evaluation."],
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "ecn10-u6-debt-notes", title: "Aid and development finance — notes",
      summary: "Aid types: bilateral, multilateral, tied, emergency, development; debt relief frees resources but risks moral hazard.",
      sections: [
        { heading: "Key idea", body: "Aid effectiveness depends on targeting, governance and whether it funds investment vs consumption." },
        { heading: "Types", body: "Bilateral (direct), multilateral (via UN/WB), tied (donor goods), emergency (crises), development (long-term)." },
        { heading: "Debt", body: "Heavy debt crowds out development; relief frees resources but needs conditions to prevent repeat." },
      ],
    },
  },
  {
    file: "lesson-6-3.ts", exportName: "lesson63",
    lesson: {
      id: "ecn10-u6-lesson-6-3", code: "6-3",
      title: "Sustainable Development and the Environment",
      goal: "I CAN explain sustainable development and evaluate policies for environmental sustainability.",
      standards: ["Edexcel IGCSE Economics 4EC1 — The Global Economy: sustainable development"],
      vocabulary: [
        { term: "Sustainable development", definition: "Development that meets present needs without compromising future generations' ability to meet theirs." },
        { term: "External cost", definition: "A cost of production borne by third parties, not the producer — e.g. pollution." },
        { term: "Carbon footprint", definition: "The total greenhouse gas emissions caused by an activity." },
        { term: "Renewable energy", definition: "Energy from sources that replenish naturally — solar, wind, hydro." },
        { term: "Intergenerational equity", definition: "Fairness between current and future generations." },
        { term: "Tragedy of the commons", definition: "Overuse of shared resources because no one owns them." },
      ],
      concepts: [
        {
          id: "ecn10-u6-sust",
          title: "Limits to Growth and Sustainability",
          skill: "Explain why unlimited growth is environmentally unsustainable and what sustainable development means.",
          sections: [
            {
              heading: "Limits to growth",
              body: "Continuous economic growth requires ever more **resources** (energy, raw materials, land) and produces ever more **waste** (emissions, pollution). The planet's resources are finite — at some point growth hits **environmental limits**: climate change, deforestation, resource depletion, pollution.",
            },
            {
              heading: "Environmental externalities of growth",
              body: "Growth creates **negative externalities**: air pollution, water contamination, habitat loss, greenhouse gas emissions. These are **external costs** — borne by society, not the producer. Markets under-price goods that damage the environment because producers do not pay the full social cost.",
            },
            {
              heading: "Sustainable development",
              body: "**Sustainable development** (Brundtland definition) meets present needs without compromising future generations. It balances **economic growth**, **social equity** and **environmental protection** — the three pillars. Requires **intergenerational equity**: today's growth must not destroy tomorrow's resources.",
            },
          ],
          keyFormulas: [
            { name: "Sustainable development", statement: "Meet present needs without compromising future generations" },
            { name: "External cost", statement: "Cost borne by third parties, not the producer" },
            { name: "Tragedy of the commons", statement: "Shared resources overused because unowned" },
          ],
          workedExample: {
            problem: "A factory grows GDP by 5% but emits pollution that damages health. Is this sustainable development?",
            solution: "No — the growth ignores environmental costs; sustainable development requires growth that does not compromise future wellbeing.",
          },
          questions: [
            {
              id: "ecn10-u6-sust-q1", difficulty: "foundation", totalMarks: 2,
              stem: "What is sustainable development?",
              response: { type: "mcq", choices: [
                { id: "a", text: "Growth at any cost" },
                { id: "b", text: "Development meeting present needs without compromising future generations" },
                { id: "c", text: "Development funded by foreign aid" },
                { id: "d", text: "Zero economic growth" },
              ], correctChoiceId: "b" },
              markscheme: {
                principles: [{ kind: "definition", name: "Sustainable development", statement: "Present needs without compromising future." }],
                steps: [{ reasoning: "Sustainable = balanced across time and pillars.", marks: 2, markCode: "AO1" }],
                finalAnswer: "**(b)** Present needs without compromising future",
                commonErrors: ["Confusing with no growth at all."],
              },
            },
            {
              id: "ecn10-u6-sust-q2", difficulty: "foundation", totalMarks: 3,
              stem: "Give three environmental limits to continuous economic growth.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Limits to growth", statement: "Finite resources, waste absorption, climate." }],
                steps: [
                  { reasoning: "Finite resources — energy, raw materials, land.", marks: 1, markCode: "AO2" },
                  { reasoning: "Waste absorption — pollution, emissions, climate change.", marks: 1, markCode: "AO2" },
                  { reasoning: "Ecosystem collapse — deforestation, biodiversity loss.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "Finite resources, waste absorption, ecosystem collapse.",
                commonErrors: ["Listing economic rather than environmental limits."],
              },
            },
            {
              id: "ecn10-u6-sust-q3", difficulty: "core", totalMarks: 4,
              stem: "Explain what an external cost is and give an example related to growth.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "External cost", statement: "Cost borne by third parties." }],
                steps: [
                  { reasoning: "External cost = cost of production borne by someone other than producer/consumer.", marks: 1, markCode: "AO2" },
                  { reasoning: "Example: factory pollution damaging health of nearby residents.", marks: 1, markCode: "AO2" },
                  { reasoning: "The producer does not pay this cost — it is externalised.", marks: 1, markCode: "AO2" },
                  { reasoning: "This makes polluting goods artificially cheap.", marks: 1, markCode: "AO3" },
                ],
                finalAnswer: "Cost borne by third parties — e.g. pollution health damage; makes goods artificially cheap.",
                commonErrors: ["Confusing with private cost."],
              },
            },
            {
              id: "ecn10-u6-sust-q4", difficulty: "challenge", totalMarks: 6,
              stem: "Economic growth of 6% last year increased CO2 emissions by 4%.",
              parts: [
                { label: "a", prompt: "Explain why this growth may not be sustainable.", marks: 3 },
                { label: "b", prompt: "Explain what 'sustainable growth' would require.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Sustainable growth", statement: "Growth without environmental degradation." }],
                steps: [
                  { reasoning: "(a) Rising emissions contribute to climate change — a negative externality.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(a) At this rate, environmental limits will eventually constrain growth.", marks: 1, markCode: "AO3", part: "a" },
                  { reasoning: "(b) Growth must be decoupled from emissions — cleaner technology.", marks: 2, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Or growth in services rather than polluting industries.", marks: 1, markCode: "AO3", part: "b" },
                ],
                finalAnswer: "(a) emissions rise with growth — externality (b) decouple growth from emissions",
                commonErrors: ["Assuming all growth is sustainable."],
              },
            },
            {
              id: "ecn10-u6-sust-q5", difficulty: "challenge", totalMarks: 8,
              stem: "The 'tragedy of the commons' explains overfishing of shared seas.",
              parts: [
                { label: "a", prompt: "Explain what the tragedy of the commons means.", marks: 4 },
                { label: "b", prompt: "Explain how it applies to climate change.", marks: 4 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Tragedy of the commons", statement: "Shared resources overused because unowned." }],
                steps: [
                  { reasoning: "(a) Shared resources have no owner — each user gains from using more.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(a) But costs of depletion are shared — overuse destroys the resource for all.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(b) Atmosphere is a commons — each country benefits from emitting.", marks: 2, markCode: "AO2", part: "b" },
                  { reasoning: "(b) But all suffer from climate change — leading to under-provision of action.", marks: 2, markCode: "AO3", part: "b" },
                ],
                finalAnswer: "(a) unowned resource overused (b) atmosphere commons → climate inaction",
                commonErrors: ["Not applying the concept to climate."],
              },
            },
            {
              id: "ecn10-u6-sust-q6", difficulty: "challenge", totalMarks: 10,
              stem: "A country must choose between rapid economic growth and environmental protection.",
              parts: [
                { label: "a", prompt: "Explain two benefits of prioritising economic growth.", marks: 4 },
                { label: "b", prompt: "Explain two benefits of prioritising environmental protection.", marks: 4 },
                { label: "c", prompt: "Evaluate whether the two goals are truly in conflict.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Growth vs environment", statement: "Short-term conflict but long-term interdependence." }],
                steps: [
                  { reasoning: "(a) Growth raises incomes, jobs and living standards now.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Poor countries need growth to fund environmental protection later.", marks: 2, markCode: "AO3", part: "a" },
                  { reasoning: "(b) Protection preserves resources for future growth.", marks: 2, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Avoids costly environmental damage — health, disasters.", marks: 2, markCode: "AO2", part: "b" },
                  { reasoning: "(c) Not truly in conflict — sustainable development integrates both.", marks: 2, markCode: "AO3", part: "c" },
                ],
                finalAnswer: "(a) incomes, jobs now (b) future resources, avoided damage (c) compatible via sustainable development",
                commonErrors: ["Treating as pure either/or."],
              },
            },
          ],
        },
        {
          id: "ecn10-u6-sustp",
          title: "Sustainable Development Policy",
          skill: "Evaluate policies for achieving sustainable development.",
          sections: [
            {
              heading: "Policy approaches",
              body: "**Market-based**: carbon taxes, cap-and-trade, subsidies for renewables — price pollution into decisions. **Regulation**: emissions standards, pollution limits, protected areas. **Investment**: renewable energy, public transport, green technology. **International**: climate agreements (Paris), global funds for developing countries.",
            },
            {
              heading: "Challenges",
              body: "**Free-rider problem** — countries benefit from others' cuts without acting. **Cost** — green policies are expensive short-term. **Competitiveness** — strict rules may drive industry abroad. **Developing countries** — need growth but face pressure to protect environment they did not damage.",
            },
            {
              heading: "Evaluation",
              body: "Effective sustainable development policy balances **economic needs** with **environmental limits** and **social equity**. Success requires **long-term commitment**, **international cooperation**, and **technology transfer** so developing countries can grow cleanly.",
            },
          ],
          keyFormulas: [
            { name: "Carbon tax", statement: "Tax on emissions to internalise environmental cost" },
            { name: "Free-rider problem", statement: "Benefit from others' action without contributing" },
          ],
          workedExample: {
            problem: "Country E introduces a carbon tax on factories. Explain one benefit and one cost.",
            solution: "Benefit: encourages cleaner production, raises revenue for green spending. Cost: higher production costs may reduce competitiveness.",
          },
          questions: [
            {
              id: "ecn10-u6-sustp-q1", difficulty: "foundation", totalMarks: 2,
              stem: "What is a carbon tax?",
              response: { type: "mcq", choices: [
                { id: "a", text: "A tax on all carbon-based products" },
                { id: "b", text: "A tax on greenhouse gas emissions" },
                { id: "c", text: "A tax on renewable energy" },
                { id: "d", text: "A subsidy for clean energy" },
              ], correctChoiceId: "b" },
              markscheme: {
                principles: [{ kind: "definition", name: "Carbon tax", statement: "Tax on emissions." }],
                steps: [{ reasoning: "Carbon tax prices emissions to reduce them.", marks: 2, markCode: "AO1" }],
                finalAnswer: "**(b)** Tax on greenhouse gas emissions",
                commonErrors: ["Confusing with carbon trading."],
              },
            },
            {
              id: "ecn10-u6-sustp-q2", difficulty: "foundation", totalMarks: 3,
              stem: "Give three policies governments can use to promote sustainable development.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Sustainability policy", statement: "Tax, regulate, invest, cooperate." }],
                steps: [
                  { reasoning: "Market-based — carbon taxes, subsidies for renewables.", marks: 1, markCode: "AO2" },
                  { reasoning: "Regulation — emissions standards, pollution limits.", marks: 1, markCode: "AO2" },
                  { reasoning: "Investment — renewable energy, green technology, public transport.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "Carbon taxes, regulation, green investment.",
                commonErrors: ["Only listing one approach."],
              },
            },
            {
              id: "ecn10-u6-sustp-q3", difficulty: "core", totalMarks: 4,
              stem: "Explain the free-rider problem in international climate policy.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Free-rider", statement: "Benefit from others' cuts without acting." }],
                steps: [
                  { reasoning: "Climate benefits are global — all countries gain from reduced emissions.", marks: 1, markCode: "AO2" },
                  { reasoning: "Each country prefers others to cut — saving money while still benefiting.", marks: 1, markCode: "AO2" },
                  { reasoning: "This leads to under-provision of climate action.", marks: 1, markCode: "AO2" },
                  { reasoning: "International agreements try to solve this via coordination.", marks: 1, markCode: "AO3" },
                ],
                finalAnswer: "All benefit but few act → under-provision → need coordination.",
                commonErrors: ["Thinking free-riding is costless for the world."],
              },
            },
            {
              id: "ecn10-u6-sustp-q4", difficulty: "challenge", totalMarks: 6,
              stem: "Country F introduces a carbon tax while Country G does not.",
              parts: [
                { label: "a", prompt: "Explain two effects of the carbon tax on Country F's economy.", marks: 3 },
                { label: "b", prompt: "Explain one risk for Country F relative to Country G.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Carbon tax effects", statement: "Raises costs but incentivises clean production." }],
                steps: [
                  { reasoning: "(a) Encourages firms to cut emissions — cleaner production.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Raises revenue for green spending or tax cuts.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(b) Higher production costs may make F's goods less competitive than G's.", marks: 2, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Industries may relocate to G — carbon leakage.", marks: 1, markCode: "AO3", part: "b" },
                ],
                finalAnswer: "(a) cleaner production, revenue (b) competitiveness loss, carbon leakage",
                commonErrors: ["Ignoring competitiveness effects."],
              },
            },
            {
              id: "ecn10-u6-sustp-q5", difficulty: "challenge", totalMarks: 8,
              stem: "A developing country is pressured to protect its forests while rich countries industrialised by cutting theirs.",
              parts: [
                { label: "a", prompt: "Explain the fairness argument regarding historical emissions.", marks: 4 },
                { label: "b", prompt: "Explain one policy that could reconcile development and conservation.", marks: 4 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Climate justice", statement: "Historical emissions vs current needs." }],
                steps: [
                  { reasoning: "(a) Rich countries caused most historical emissions while industrialising.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Poor countries need growth now — asking them to protect forests limits development.", marks: 2, markCode: "AO3", part: "a" },
                  { reasoning: "(b) Payments for ecosystem services — rich countries pay for conservation.", marks: 2, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Technology transfer — clean energy without sacrificing growth.", marks: 2, markCode: "AO3", part: "b" },
                ],
                finalAnswer: "(a) historical responsibility vs development need (b) PES, clean tech transfer",
                commonErrors: ["Ignoring equity dimension."],
              },
            },
            {
              id: "ecn10-u6-sustp-q6", difficulty: "challenge", totalMarks: 10,
              stem: "The world must transition to sustainable development within 30 years.",
              parts: [
                { label: "a", prompt: "Explain two policies that could achieve this at national level.", marks: 4 },
                { label: "b", prompt: "Explain two policies that could achieve this at international level.", marks: 4 },
                { label: "c", prompt: "Evaluate the main obstacle to achieving sustainable development.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Sustainability transition", statement: "National action plus international cooperation needed." }],
                steps: [
                  { reasoning: "(a) Carbon pricing — tax or cap-and-trade on emissions.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Investment in renewables, public transport, green technology.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(b) International agreements with binding targets — e.g. Paris-style deals.", marks: 2, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Climate funds transferring resources to developing countries.", marks: 2, markCode: "AO2", part: "b" },
                  { reasoning: "(c) Main obstacle: short-term costs vs long-term benefits — political will lacking.", marks: 2, markCode: "AO3", part: "c" },
                ],
                finalAnswer: "(a) carbon pricing, green investment (b) agreements, climate funds (c) political will/costs",
                commonErrors: ["No evaluation of obstacles."],
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "ecn10-u6-sustp-notes", title: "Sustainable development — notes",
      summary: "Sustainable development balances growth, equity and environment; policies include carbon pricing, regulation and green investment.",
      sections: [
        { heading: "Key idea", body: "Growth must not compromise future generations — balance economic, social and environmental pillars." },
        { heading: "Limits", body: "Finite resources, waste absorption, climate change constrain unlimited growth." },
        { heading: "Policy", body: "Carbon taxes, regulation, green investment, international agreements; free-rider problem is the key barrier." },
      ],
    },
  },
];
