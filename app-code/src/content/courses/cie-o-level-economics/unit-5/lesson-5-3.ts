import type { Lesson } from "../../../types.ts";

export const lesson53: Lesson = {
  id: "olec-u5-lesson-5-3",
  code: "5-3",
  title: "Globalisation",
  goal: "I CAN explain globalisation and its effects on economies.",
  standards: ["2281 5.3"],
  vocabulary: [
    { term: "Globalisation", definition: "Increasing integration of world economies." },
    { term: "Multinational corporation (MNC)", definition: "Company operating in multiple countries." },
    { term: "Offshoring", definition: "Moving production to lower-cost countries." },
    { term: "Outsourcing", definition: "Contracting work to external providers." },
    { term: "Developed country", definition: "High-income, industrialised economy." },
    { term: "Developing country", definition: "Lower-income, less industrialised economy." },
  ],
  concepts: [
    {
      id: "olec-u5-globalisation",
      title: "Globalisation",
      skill: "Explain causes and effects of globalisation.",
      lesson: {
        sections: [
          { heading: "What is globalisation?", body: "Increased flows of goods, services, capital, labour and information across borders. Driven by technology, trade liberalisation, MNCs." },
          { heading: "Benefits", body: "Consumers get cheaper goods and more variety; developing countries gain jobs and investment; economic growth." },
          { heading: "Costs", body: "Developed countries lose jobs to offshoring; developing countries may face exploitation; inequality may widen; environmental damage." },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "A UK company moves its call centre to India. What is this called and what are two effects?",
          solution: "Offshoring — UK jobs lost but costs reduced; India gains jobs and investment.",
        },
      },
      questions: [
        {
          id: "olec-u5-gl-q1", difficulty: "foundation", totalMarks: 1,
          stem: "Globalisation refers to…",
          response: { type: "mcq", choices: [
            { id: "a", text: "A single world government" },
            { id: "b", text: "Increasing integration of world economies" },
            { id: "c", text: "Population growth" },
            { id: "d", text: "Only trade in goods" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Globalisation", statement: "Integration." }], steps: [{ reasoning: "Correct.", marks: 1, markCode: "AO1" }], finalAnswer: "**(b)** Correct" },
        },
        {
          id: "olec-u5-gl-q2", difficulty: "core", totalMarks: 2,
          stem: "Name two causes of globalisation.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Globalisation causes", statement: "Drivers." }], steps: [
            { reasoning: "Technology, trade agreements, MNCs — any two.", marks: 1, markCode: "AO1" },
            { reasoning: "Two named.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "Any two: technology, trade liberalisation, MNCs." },
        },
        {
          id: "olec-u5-gl-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain one benefit and one cost of globalisation for developing countries.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Globalisation effects", statement: "Pros/cons." }], steps: [
            { reasoning: "Benefit: jobs and investment from MNCs.", marks: 1, markCode: "AO2" },
            { reasoning: "Cost: exploitation or environmental damage.", marks: 1, markCode: "AO2" },
            { reasoning: "Correct comparison.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Jobs/investment gained but risk exploitation or environmental harm." },
        },
        {
          id: "olec-u5-gl-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Globalisation review.",
          parts: [
            { label: "a", prompt: "Define globalisation.", marks: 1 },
            { label: "b", prompt: "Name two causes.", marks: 2 },
            { label: "c", prompt: "Offshoring vs outsourcing?", marks: 2 },
            { label: "d", prompt: "Two benefits?", marks: 2 },
            { label: "e", prompt: "Two costs?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Globalisation", statement: "Concepts and effects." },
          ], steps: [
            { part: "a", reasoning: "Integration of world economies.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "Technology, trade agreements, MNCs.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "Two named.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "Offshore=move production; outsource=contract out.", marks: 1, markCode: "AO1" },
            { part: "c", reasoning: "Clear distinction.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Cheaper goods; jobs/investment for developing.", marks: 1, markCode: "AO1" },
            { part: "d", reasoning: "Two benefits.", marks: 1, markCode: "AO2" },
            { part: "e", reasoning: "Job losses; inequality/exploitation.", marks: 1, markCode: "AO1" },
            { part: "e", reasoning: "Two costs.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "(a) def (b) causes (c) off/out (d) benefits (e) costs" },
        },
        {
          id: "olec-u5-gl-q5", difficulty: "foundation", totalMarks: 1,
          stem: "Offshoring refers to…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Hiring external contractors" },
            { id: "b", text: "Moving production to lower-cost countries" },
            { id: "c", text: "Selling goods abroad" },
            { id: "d", text: "Outsourcing management" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Offshoring", statement: "Move production abroad." }], steps: [{ reasoning: "Correct definition.", marks: 1, markCode: "AO1" }], finalAnswer: "**(b)** Correct" },
        },
        {
          id: "olec-u5-gl-q6", difficulty: "core", totalMarks: 1,
          stem: "Outsourcing differs from offshoring because it means…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Contracting work to external providers, which may be in the same country" },
            { id: "b", text: "Nationalising industries" },
            { id: "c", text: "Banning foreign firms" },
            { id: "d", text: "Moving production overseas" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Outsourcing", statement: "Contract out work." }], steps: [{ reasoning: "Correct distinction.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olec-u5-gl-q7", difficulty: "foundation", totalMarks: 2,
          stem: "A firm moves production from a country paying $20 per hour to one paying $8 per hour. (a) What is the saving per hour in dollars? (b) What is the percentage saving?",
          response: { type: "numeric", parts: [
            { label: "a", answer: 12, unit: "dollars" },
            { label: "b", answer: 60, unit: "%" },
          ] },
          markscheme: { principles: [{ kind: "principle", name: "Cost saving", statement: "Difference and percentage." }], steps: [
            { part: "a", reasoning: "$20 - $8 = $12 per hour.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "12/20 x 100 = 60%.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "(a) $12 (b) 60%" },
        },
        {
          id: "olec-u5-gl-q8", difficulty: "core", totalMarks: 2,
          stem: "Explain how improvements in transport and communications have driven globalisation.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Globalisation drivers", statement: "Technology." }], steps: [
            { reasoning: "Cheaper, faster transport lowers the cost of moving goods internationally.", marks: 1, markCode: "AO2" },
            { reasoning: "ICT enables instant communication and coordination of global supply chains.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "Lower transport costs and instant communication make global production and trade cheaper and easier." },
        },
        {
          id: "olec-u5-gl-q9", difficulty: "core", totalMarks: 1,
          stem: "Which of the following is a benefit of globalisation for consumers?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Only domestic products available" },
            { id: "b", text: "Cheaper goods and a wider variety of products" },
            { id: "c", text: "Higher prices for all goods" },
            { id: "d", text: "Fewer goods to choose from" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "principle", name: "Globalisation benefits", statement: "Consumer gains." }], steps: [{ reasoning: "Global competition lowers prices and expands choice.", marks: 1, markCode: "AO2" }], finalAnswer: "**(b)** Correct" },
        },
        {
          id: "olec-u5-gl-q10", difficulty: "challenge", totalMarks: 4,
          stem: "Explain one cost of globalisation for developed countries.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Globalisation costs", statement: "Developed country losses." }], steps: [
            { reasoning: "Jobs in labour-intensive industries move to lower-cost countries via offshoring.", marks: 1, markCode: "AO2" },
            { reasoning: "Unemployed workers may lack skills for remaining jobs, causing structural unemployment.", marks: 1, markCode: "AO2" },
            { reasoning: "Wage pressure as firms threaten to relocate production.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation of one cost with mechanism.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Offshoring costs developed countries jobs, especially in labour-intensive industries." },
        },
        {
          id: "olec-u5-gl-q11", difficulty: "challenge", totalMarks: 1,
          stem: "A possible cost of globalisation for developing countries is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Guaranteed high wages for all workers" },
            { id: "b", text: "Exploitation of low-wage workers or environmental damage" },
            { id: "c", text: "Automatic development for all" },
            { id: "d", text: "Complete isolation from world markets" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "principle", name: "Globalisation costs", statement: "Developing country risks." }], steps: [{ reasoning: "MNCs may exploit cheap labour or pollute host countries.", marks: 1, markCode: "AO2" }], finalAnswer: "**(b)** Correct" },
        },
        {
          id: "olec-u5-gl-q12", difficulty: "challenge", totalMarks: 3,
          stem: "A UK worker earns $25 per hour while an equivalent worker in India earns $5 per hour. (a) What is the cost saving per hour in dollars? (b) What is the percentage saving? (c) What is the annual saving for 2,000 hours worked in dollars?",
          response: { type: "numeric", parts: [
            { label: "a", answer: 20, unit: "dollars" },
            { label: "b", answer: 80, unit: "%" },
            { label: "c", answer: 40000, unit: "dollars" },
          ] },
          markscheme: { principles: [{ kind: "principle", name: "Labour cost comparison", statement: "Offshoring incentive." }], steps: [
            { part: "a", reasoning: "$25 - $5 = $20 per hour.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "20/25 x 100 = 80%.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "$20 x 2,000 = $40,000 per year.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "(a) $20 (b) 80% (c) $40,000" },
        },
        {
          id: "olec-u5-gl-q13", difficulty: "challenge", totalMarks: 4,
          stem: "Evaluate the view that globalisation benefits all countries equally.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Globalisation evaluation", statement: "Uneven gains." }], steps: [
            { reasoning: "Developed countries gain cheaper inputs and new markets for high-value exports.", marks: 1, markCode: "AO2" },
            { reasoning: "Developing countries gain investment and jobs but may face exploitation and environmental harm.", marks: 1, markCode: "AO2" },
            { reasoning: "Gains within countries are also uneven — skilled workers benefit more than unskilled.", marks: 1, markCode: "AO2" },
            { reasoning: "Balanced judgement — benefits are real but unevenly distributed.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Globalisation brings gains but they are unevenly distributed between and within countries." },
        },
        {
          id: "olec-u5-gl-q14", difficulty: "challenge", totalMarks: 1,
          stem: "Globalisation can widen income inequality because…",
          response: { type: "mcq", choices: [
            { id: "a", text: "All incomes rise equally" },
            { id: "b", text: "Poverty is eliminated everywhere" },
            { id: "c", text: "Trade barriers increase" },
            { id: "d", text: "Gains accrue unevenly to skilled workers and capital owners" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "principle", name: "Inequality and globalisation", statement: "Uneven gains." }], steps: [{ reasoning: "Skilled labour and capital capture most gains while unskilled jobs are offshored.", marks: 1, markCode: "AO2" }], finalAnswer: "**(d)** Correct" },
        },
        {
          id: "olec-u5-gl-q15", difficulty: "core", totalMarks: 1,
          stem: "Economic interdependence in a globalised world means…",
          response: { type: "mcq", choices: [
            { id: "a", text: "One country controls the world economy" },
            { id: "b", text: "Countries never trade" },
            { id: "c", text: "Each country is self-sufficient" },
            { id: "d", text: "Countries rely on each other for goods, services and capital" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "Interdependence", statement: "Mutual reliance." }], steps: [{ reasoning: "Correct definition.", marks: 1, markCode: "AO1" }], finalAnswer: "**(d)** Correct" },
        },
        {
          id: "olec-u5-gl-q16", difficulty: "challenge", totalMarks: 9,
          stem: "Globalisation review.",
          parts: [
            { label: "a", prompt: "Define globalisation.", marks: 1 },
            { label: "b", prompt: "Name two causes of globalisation.", marks: 2 },
            { label: "c", prompt: "Distinguish offshoring from outsourcing.", marks: 2 },
            { label: "d", prompt: "Name two benefits of globalisation.", marks: 2 },
            { label: "e", prompt: "Name two costs of globalisation.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Globalisation", statement: "Concepts and effects." },
          ], steps: [
            { part: "a", reasoning: "Increasing integration of world economies.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "Technology, trade liberalisation, MNCs.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "Two named.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "Offshore = move production abroad; outsource = contract out work.", marks: 1, markCode: "AO1" },
            { part: "c", reasoning: "Clear distinction.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Cheaper goods; jobs and investment for developing countries.", marks: 1, markCode: "AO1" },
            { part: "d", reasoning: "Two named.", marks: 1, markCode: "AO2" },
            { part: "e", reasoning: "Job losses in developed countries; inequality or environmental damage.", marks: 1, markCode: "AO1" },
            { part: "e", reasoning: "Two named.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "(a) def (b) causes (c) off/out (d) benefits (e) costs" },
        },
      ],
    },
    {
      id: "olec-u5-mncs",
      title: "Multinationals and Development",
      skill: "Explain the role of MNCs in development and their criticisms.",
      lesson: {
        sections: [
          { heading: "MNCs and development", body: "MNCs bring investment, jobs, technology and export earnings to developing countries. They may also pay low wages and repatriate profits." },
          { heading: "Criticisms", body: "Profit repatriation, tax avoidance, exploitative labour, environmental damage, crowding out local firms." },
          { heading: "Aid and debt", body: "Development aid and debt relief aim to help poorer countries. Aid can fund infrastructure; debt burdens limit spending on health and education." },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "An MNC builds a factory in a developing country. Give one benefit and one criticism.",
          solution: "Benefit: jobs and technology transfer. Criticism: profits may be repatriated, limiting local benefit.",
        },
      },
      questions: [
        {
          id: "olec-u5-mnc-q1", difficulty: "foundation", totalMarks: 1,
          stem: "A multinational corporation is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "A government agency" },
            { id: "b", text: "A trade union" },
            { id: "c", text: "A company operating in multiple countries" },
            { id: "d", text: "A single-country firm" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "MNC", statement: "Multi-country." }], steps: [{ reasoning: "Correct.", marks: 1, markCode: "AO1" }], finalAnswer: "**(c)** Correct" },
        },
        {
          id: "olec-u5-mnc-q2", difficulty: "core", totalMarks: 2,
          stem: "Name two ways MNCs help developing countries.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "MNC benefits", statement: "Contributions." }], steps: [
            { reasoning: "Investment, jobs, technology, exports — any two.", marks: 1, markCode: "AO1" },
            { reasoning: "Two named.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "Any two: investment, jobs, technology transfer, export earnings." },
        },
        {
          id: "olec-u5-mnc-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain one criticism of MNCs in developing countries.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "MNC criticisms", statement: "Drawbacks." }], steps: [
            { reasoning: "Profit repatriation limits local benefit.", marks: 1, markCode: "AO2" },
            { reasoning: "Tax avoidance reduces government revenue.", marks: 1, markCode: "AO2" },
            { reasoning: "Low wages/exploitation concerns.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Profit repatriation, tax avoidance, or exploitative labour practices." },
        },
        {
          id: "olec-u5-mnc-q4", difficulty: "challenge", totalMarks: 9,
          stem: "MNCs and development review.",
          parts: [
            { label: "a", prompt: "Define MNC.", marks: 1 },
            { label: "b", prompt: "Two benefits for developing countries?", marks: 2 },
            { label: "c", prompt: "Two criticisms?", marks: 2 },
            { label: "d", prompt: "What is development aid?", marks: 1 },
            { label: "e", prompt: "Why is debt a problem for developing countries?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "MNCs/development", statement: "Role, aid, debt." },
          ], steps: [
            { part: "a", reasoning: "Multi-country company.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "Investment/jobs/technology/exports.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "Two named.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "Repatriation/tax avoidance/exploitation.", marks: 1, markCode: "AO1" },
            { part: "c", reasoning: "Two named.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Government/charity transfers to poorer countries.", marks: 1, markCode: "AO1" },
            { part: "e", reasoning: "Interest payments crowd out health/education spending.", marks: 1, markCode: "AO2" },
            { part: "e", reasoning: "Limits development investment.", marks: 1, markCode: "AO2" },
            { part: "e", reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "(a) def (b) benefits (c) criticisms (d) aid (e) debt problem" },
        },
        {
          id: "olec-u5-mnc-q5", difficulty: "foundation", totalMarks: 1,
          stem: "Profit repatriation by an MNC means…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Investing profits in the host country" },
            { id: "b", text: "Paying higher wages abroad" },
            { id: "c", text: "Sending profits earned abroad back to the home country" },
            { id: "d", text: "Donating profits to charity" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "Profit repatriation", statement: "Profits sent home." }], steps: [{ reasoning: "Correct definition.", marks: 1, markCode: "AO1" }], finalAnswer: "**(c)** Correct" },
        },
        {
          id: "olec-u5-mnc-q6", difficulty: "foundation", totalMarks: 2,
          stem: "An MNC earns $10 million profit in a developing country and repatriates 70% of it. (a) How much is repatriated in millions of dollars? (b) How much is retained in the host country in millions of dollars?",
          response: { type: "numeric", parts: [
            { label: "a", answer: 7, unit: "million dollars" },
            { label: "b", answer: 3, unit: "million dollars" },
          ] },
          markscheme: { principles: [{ kind: "principle", name: "Profit repatriation", statement: "Share sent home." }], steps: [
            { part: "a", reasoning: "70% of $10m = $7m.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "$10m - $7m = $3m.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "(a) $7m (b) $3m" },
        },
        {
          id: "olec-u5-mnc-q7", difficulty: "core", totalMarks: 1,
          stem: "Technology transfer from MNCs benefits developing countries by…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Increasing government debt" },
            { id: "b", text: "Lowering export prices abroad" },
            { id: "c", text: "Removing all local competition" },
            { id: "d", text: "Raising productivity and skills of local workers and firms" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "principle", name: "Technology transfer", statement: "Skills and productivity." }], steps: [{ reasoning: "MNCs bring know-how that upgrades local capacity.", marks: 1, markCode: "AO2" }], finalAnswer: "**(d)** Correct" },
        },
        {
          id: "olec-u5-mnc-q8", difficulty: "core", totalMarks: 2,
          stem: "Name two ways MNCs can harm the environment in host countries.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "MNC environmental costs", statement: "Pollution and resources." }], steps: [
            { reasoning: "Pollution from factories and waste dumping.", marks: 1, markCode: "AO1" },
            { reasoning: "Depletion of local resources such as water, forests and minerals.", marks: 1, markCode: "AO1" },
          ], finalAnswer: "Pollution and depletion of local resources." },
        },
        {
          id: "olec-u5-mnc-q9", difficulty: "core", totalMarks: 3,
          stem: "An MNC invests $50 million in a factory in a developing country, creating 2,000 jobs paying $200 per month each. (a) What is the investment per job in dollars? (b) What is the total annual wage bill in dollars? (c) What percentage of the investment is the annual wage bill?",
          response: { type: "numeric", parts: [
            { label: "a", answer: 25000, unit: "dollars" },
            { label: "b", answer: 4800000, unit: "dollars" },
            { label: "c", answer: 9.6, unit: "%" },
          ] },
          markscheme: { principles: [{ kind: "principle", name: "MNC investment", statement: "Jobs and wages." }], steps: [
            { part: "a", reasoning: "$50m / 2,000 = $25,000 per job.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "$200 x 12 x 2,000 = $4,800,000.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "4.8/50 x 100 = 9.6%.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "(a) $25,000 (b) $4,800,000 (c) 9.6%" },
        },
        {
          id: "olec-u5-mnc-q10", difficulty: "challenge", totalMarks: 4,
          stem: "Explain how MNCs can crowd out local firms in developing countries.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Crowding out", statement: "Local firm displacement." }], steps: [
            { reasoning: "MNCs have greater financial resources and can undercut local prices.", marks: 1, markCode: "AO2" },
            { reasoning: "They dominate supply chains, leaving local firms without buyers or inputs.", marks: 1, markCode: "AO2" },
            { reasoning: "Local firms may be forced out of business, increasing dependence on the MNC.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation of the crowding-out mechanism.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "MNCs' size and resources let them undercut and displace local firms, reducing local competition." },
        },
        {
          id: "olec-u5-mnc-q11", difficulty: "challenge", totalMarks: 1,
          stem: "Tax avoidance by MNCs harms developing countries because it…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Increases wages for local workers" },
            { id: "b", text: "Improves public services" },
            { id: "c", text: "Raises export earnings" },
            { id: "d", text: "Reduces government revenue available for health, education and infrastructure" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "principle", name: "Tax avoidance", statement: "Lost revenue." }], steps: [{ reasoning: "MNCs shifting profits abroad deprives governments of tax income.", marks: 1, markCode: "AO2" }], finalAnswer: "**(d)** Correct" },
        },
        {
          id: "olec-u5-mnc-q12", difficulty: "challenge", totalMarks: 4,
          stem: "Evaluate the impact of development aid on poverty in recipient countries.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Aid evaluation", statement: "Pros and cons." }], steps: [
            { reasoning: "Benefit: aid can fund schools, clinics and infrastructure that raise living standards.", marks: 1, markCode: "AO2" },
            { reasoning: "Benefit: emergency and health aid saves lives directly.", marks: 1, markCode: "AO2" },
            { reasoning: "Drawback: aid can be misused, create dependency or prop up weak governments.", marks: 1, markCode: "AO2" },
            { reasoning: "Balanced judgement on effectiveness.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Aid can reduce poverty through services and infrastructure but risks misuse and dependency — effectiveness varies." },
        },
        {
          id: "olec-u5-mnc-q13", difficulty: "challenge", totalMarks: 3,
          stem: "A developing country has debt of $2 billion, annual debt repayments of $300 million and GDP of $10 billion. (a) What is the debt as a percentage of GDP? (b) What are annual repayments as a percentage of GDP? (c) If GDP grows to $12 billion while debt stays at $2 billion, what is the new debt-to-GDP ratio?",
          response: { type: "numeric", parts: [
            { label: "a", answer: 20, unit: "%" },
            { label: "b", answer: 3, unit: "%" },
            { label: "c", answer: 16.67, unit: "%", tolerance: 0.01 },
          ] },
          markscheme: { principles: [{ kind: "principle", name: "Debt burden", statement: "Debt and repayments vs GDP." }], steps: [
            { part: "a", reasoning: "2/10 x 100 = 20%.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "0.3/10 x 100 = 3%.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "2/12 x 100 = 16.67%.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "(a) 20% (b) 3% (c) 16.67%" },
        },
        {
          id: "olec-u5-mnc-q14", difficulty: "challenge", totalMarks: 1,
          stem: "Which of the following is a criticism of MNCs regarding labour in developing countries?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Investing in local infrastructure" },
            { id: "b", text: "Paying low wages and poor working conditions" },
            { id: "c", text: "Providing training to local workers" },
            { id: "d", text: "Creating new jobs" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "principle", name: "MNC labour criticism", statement: "Exploitative conditions." }], steps: [{ reasoning: "MNCs may exploit cheap labour with weak protections.", marks: 1, markCode: "AO2" }], finalAnswer: "**(b)** Correct" },
        },
        {
          id: "olec-u5-mnc-q15", difficulty: "core", totalMarks: 1,
          stem: "Debt relief differs from development aid because it…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Reduces or cancels a country's existing debt obligations rather than providing new funds" },
            { id: "b", text: "Increases a country's borrowing" },
            { id: "c", text: "Is always larger than aid" },
            { id: "d", text: "Only applies to rich countries" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Debt relief", statement: "Reduce debt stock." }], steps: [{ reasoning: "Correct distinction from aid.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olec-u5-mnc-q16", difficulty: "challenge", totalMarks: 9,
          stem: "MNCs and development review.",
          parts: [
            { label: "a", prompt: "Define a multinational corporation.", marks: 1 },
            { label: "b", prompt: "Name two benefits MNCs bring to developing countries.", marks: 2 },
            { label: "c", prompt: "Name two criticisms of MNCs in developing countries.", marks: 2 },
            { label: "d", prompt: "What is development aid?", marks: 1 },
            { label: "e", prompt: "Explain why debt is a problem for developing countries.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "MNCs and development", statement: "Role, aid and debt." },
          ], steps: [
            { part: "a", reasoning: "Company operating in multiple countries.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "Investment, jobs, technology, export earnings.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "Two named.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "Profit repatriation, tax avoidance, exploitation.", marks: 1, markCode: "AO1" },
            { part: "c", reasoning: "Two named.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Transfers of funds from governments or charities to poorer countries.", marks: 1, markCode: "AO1" },
            { part: "e", reasoning: "Interest and repayment obligations consume government revenue.", marks: 1, markCode: "AO2" },
            { part: "e", reasoning: "Crowds out spending on health, education and infrastructure.", marks: 1, markCode: "AO2" },
            { part: "e", reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "(a) def (b) benefits (c) criticisms (d) aid (e) debt problem" },
        },
      ],
    },
  ],
  notes: [
    { id: "olec-u5-5-3-notes", title: "Globalisation — notes", summary: "Globalisation, MNCs, aid and debt.",
      sections: [
        { heading: "Globalisation", body: "Integration of economies; benefits (cheap goods, jobs) vs costs (job losses, inequality)." },
        { heading: "Development", body: "MNCs bring investment but repatriate profits; aid helps; debt burdens limit spending." },
      ] },
  ],
};
