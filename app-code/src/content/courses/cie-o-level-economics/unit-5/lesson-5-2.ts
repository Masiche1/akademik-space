import type { Lesson } from "../../../types.ts";

export const lesson52: Lesson = {
  id: "olec-u5-lesson-5-2",
  code: "5-2",
  title: "Trade Protection",
  goal: "I CAN explain tariffs, quotas and other trade protection measures.",
  standards: ["2281 5.2"],
  vocabulary: [
    { term: "Tariff", definition: "Tax on imported goods." },
    { term: "Quota", definition: "Limit on quantity of imports allowed." },
    { term: "Subsidy", definition: "Government payment to domestic producers." },
    { term: "Protectionism", definition: "Policies restricting free trade." },
    { term: "Free trade", definition: "Trade without government restrictions." },
    { term: "Dumping", definition: "Selling exports below cost to gain market share." },
    { term: "Embargo", definition: "Complete ban on trade with a country." },
  ],
  concepts: [
    {
      id: "olec-u5-protection",
      title: "Trade protection measures",
      skill: "Explain tariffs, quotas, subsidies and their effects.",
      lesson: {
        sections: [
          { heading: "Tariffs", body: "Tax on imports — raises foreign price, protects domestic producers but raises prices for consumers." },
          { heading: "Quotas", body: "Limit on import quantity — same protection effect as tariffs but creates artificial scarcity and may raise prices even more." },
          { heading: "Subsidies", body: "Government payments to domestic producers — make domestic goods cheaper, protect from foreign competition. Cost taxpayers money." },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "A government imposes a 20% tariff on imported steel. What are two effects?",
          solution: "Domestic steel becomes relatively cheaper → domestic sales rise. Consumers pay higher prices → some switch to imports or reduce demand.",
        },
      },
      questions: [
        {
          id: "olec-u5-pm-q1", difficulty: "foundation", totalMarks: 1,
          stem: "A tariff is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "A tax on imported goods" },
            { id: "b", text: "A trade agreement" },
            { id: "c", text: "A limit on imports" },
            { id: "d", text: "A subsidy to exporters" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Tariff", statement: "Import tax." }], steps: [{ reasoning: "Correct.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olec-u5-pm-q2", difficulty: "core", totalMarks: 2,
          stem: "Distinguish a tariff from a quota.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Tariff vs quota", statement: "Tax vs limit." }], steps: [
            { reasoning: "Tariff=tax on imports; quota=quantity limit.", marks: 1, markCode: "AO1" },
            { reasoning: "Clear distinction.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "Tariff raises price via tax; quota limits quantity directly." },
        },
        {
          id: "olec-u5-pm-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain two arguments for trade protection.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Protection arguments", statement: "Reasons." }], steps: [
            { reasoning: "Protect infant industries or domestic jobs.", marks: 1, markCode: "AO2" },
            { reasoning: "National security or prevent dumping.", marks: 1, markCode: "AO2" },
            { reasoning: "Correct reasons.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Protect jobs/industries; national security; prevent dumping." },
        },
        {
          id: "olec-u5-pm-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Trade protection review.",
          parts: [
            { label: "a", prompt: "Define tariff.", marks: 1 },
            { label: "b", prompt: "Define quota.", marks: 1 },
            { label: "c", prompt: "Define subsidy.", marks: 1 },
            { label: "d", prompt: "Tariff vs quota?", marks: 2 },
            { label: "e", prompt: "Two arguments for protection?", marks: 2 },
            { label: "f", prompt: "Two costs of protection?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Protection", statement: "Measures, arguments, costs." },
          ], steps: [
            { part: "a", reasoning: "Import tax.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "Import quantity limit.", marks: 1, markCode: "AO1" },
            { part: "c", reasoning: "Payment to domestic producers.", marks: 1, markCode: "AO1" },
            { part: "d", reasoning: "Tariff=price; quota=quantity.", marks: 1, markCode: "AO1" },
            { part: "d", reasoning: "Clear distinction.", marks: 1, markCode: "AO2" },
            { part: "e", reasoning: "Protect jobs; national security/dumping.", marks: 1, markCode: "AO1" },
            { part: "e", reasoning: "Two arguments.", marks: 1, markCode: "AO2" },
            { part: "f", reasoning: "Higher prices; retaliation; inefficiency.", marks: 1, markCode: "AO1" },
            { part: "f", reasoning: "Two costs.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "(a) tariff (b) quota (c) subsidy (d) diff (e) args (f) costs" },
        },
        {
          id: "olec-u5-pm-q5", difficulty: "foundation", totalMarks: 1,
          stem: "A quota is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "A ban on all exports" },
            { id: "b", text: "A tax on imported goods" },
            { id: "c", text: "A payment to domestic producers" },
            { id: "d", text: "A limit on the quantity of imports allowed" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "Quota", statement: "Import quantity limit." }], steps: [{ reasoning: "Correct definition.", marks: 1, markCode: "AO1" }], finalAnswer: "**(d)** Correct" },
        },
        {
          id: "olec-u5-pm-q6", difficulty: "foundation", totalMarks: 2,
          stem: "An imported car costs $10,000 before duty. A tariff of 20% is imposed. (a) What is the amount of the tariff in dollars? (b) What is the new price paid by consumers in dollars?",
          response: { type: "numeric", parts: [
            { label: "a", answer: 2000, unit: "dollars" },
            { label: "b", answer: 12000, unit: "dollars" },
          ] },
          markscheme: { principles: [{ kind: "principle", name: "Tariff", statement: "Percentage of import price." }], steps: [
            { part: "a", reasoning: "20% of $10,000 = $2,000.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "$10,000 + $2,000 = $12,000.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "(a) $2,000 (b) $12,000" },
        },
        {
          id: "olec-u5-pm-q7", difficulty: "core", totalMarks: 1,
          stem: "A subsidy to domestic producers is intended to…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Make domestic goods more competitive against imports" },
            { id: "b", text: "Increase government revenue" },
            { id: "c", text: "Raise the price of imports" },
            { id: "d", text: "Reduce consumer spending" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "principle", name: "Subsidy", statement: "Supports domestic firms." }], steps: [{ reasoning: "Subsidies lower producers' costs so domestic goods compete better.", marks: 1, markCode: "AO2" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olec-u5-pm-q8", difficulty: "core", totalMarks: 2,
          stem: "A government imposes a tariff of $500 per unit on 2,000 imported cars. The pre-tariff price of each car is $8,000. (a) How much tariff revenue does the government collect in dollars? (b) What price do consumers pay per car in dollars?",
          response: { type: "numeric", parts: [
            { label: "a", answer: 1000000, unit: "dollars" },
            { label: "b", answer: 8500, unit: "dollars" },
          ] },
          markscheme: { principles: [{ kind: "principle", name: "Tariff revenue", statement: "Tariff x quantity." }], steps: [
            { part: "a", reasoning: "$500 x 2,000 = $1,000,000.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "$8,000 + $500 = $8,500.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "(a) $1,000,000 (b) $8,500" },
        },
        {
          id: "olec-u5-pm-q9", difficulty: "core", totalMarks: 1,
          stem: "A tariff protects domestic producers by…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Lowering the price of imports" },
            { id: "b", text: "Increasing import demand" },
            { id: "c", text: "Removing foreign competition entirely" },
            { id: "d", text: "Raising the price of imports so domestic goods become relatively cheaper" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "principle", name: "Tariff effect", statement: "Price mechanism." }], steps: [{ reasoning: "The tax raises import prices, shifting demand to domestic goods.", marks: 1, markCode: "AO2" }], finalAnswer: "**(d)** Correct" },
        },
        {
          id: "olec-u5-pm-q10", difficulty: "challenge", totalMarks: 4,
          stem: "Explain two costs of trade protection to an economy.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Protection costs", statement: "Drawbacks." }], steps: [
            { reasoning: "Consumers pay higher prices for protected goods, reducing real incomes.", marks: 1, markCode: "AO2" },
            { reasoning: "Protected industries become inefficient without foreign competition.", marks: 1, markCode: "AO2" },
            { reasoning: "Trading partners may retaliate with their own tariffs, reducing export demand.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation of two distinct costs.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Higher consumer prices, inefficient protected industries and retaliation by trading partners." },
        },
        {
          id: "olec-u5-pm-q11", difficulty: "challenge", totalMarks: 1,
          stem: "Dumping is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Importing below domestic prices" },
            { id: "b", text: "A government ban on imports" },
            { id: "c", text: "Selling exports below cost to gain market share" },
            { id: "d", text: "Exporting at the world price" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "Dumping", statement: "Below-cost exports." }], steps: [{ reasoning: "Correct definition.", marks: 1, markCode: "AO1" }], finalAnswer: "**(c)** Correct" },
        },
        {
          id: "olec-u5-pm-q12", difficulty: "challenge", totalMarks: 3,
          stem: "A quota allows only 300 units of imports. Domestic supply is 400 units and total demand is 800 units. (a) What is total supply with the quota in units? (b) What is the resulting shortage in units? (c) If the quota is raised to 500 units, what is total supply in units?",
          response: { type: "numeric", parts: [
            { label: "a", answer: 700, unit: "units" },
            { label: "b", answer: 100, unit: "units" },
            { label: "c", answer: 900, unit: "units" },
          ] },
          markscheme: { principles: [{ kind: "principle", name: "Quota effects", statement: "Supply restriction." }], steps: [
            { part: "a", reasoning: "400 domestic + 300 imports = 700 units.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "800 demand - 700 supply = 100 units shortage.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "400 domestic + 500 imports = 900 units.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "(a) 700 (b) 100 (c) 900" },
        },
        {
          id: "olec-u5-pm-q13", difficulty: "challenge", totalMarks: 4,
          stem: "Evaluate whether tariffs are an effective way to protect domestic jobs.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Tariff evaluation", statement: "Jobs vs costs." }], steps: [
            { reasoning: "For: tariffs protect employment in import-competing industries.", marks: 1, markCode: "AO2" },
            { reasoning: "For: can protect strategic industries or infant industries.", marks: 1, markCode: "AO2" },
            { reasoning: "Against: higher prices, inefficiency and possible retaliation harm the wider economy.", marks: 1, markCode: "AO2" },
            { reasoning: "Balanced judgement on overall effectiveness.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Tariffs can save jobs short-term but impose higher prices and inefficiency — effectiveness depends on the industry and alternatives." },
        },
        {
          id: "olec-u5-pm-q14", difficulty: "foundation", totalMarks: 1,
          stem: "An embargo is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "A small tax on imports" },
            { id: "b", text: "A complete ban on trade with a country" },
            { id: "c", text: "A limit on import quantities" },
            { id: "d", text: "A free trade agreement" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Embargo", statement: "Total trade ban." }], steps: [{ reasoning: "Correct definition.", marks: 1, markCode: "AO1" }], finalAnswer: "**(b)** Correct" },
        },
        {
          id: "olec-u5-pm-q15", difficulty: "core", totalMarks: 2,
          stem: "State two arguments used to justify trade protection.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Protection arguments", statement: "Justifications." }], steps: [
            { reasoning: "Protect domestic jobs and infant industries.", marks: 1, markCode: "AO1" },
            { reasoning: "National security or preventing dumping.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "Any two: jobs, infant industries, national security, anti-dumping." },
        },
        {
          id: "olec-u5-pm-q16", difficulty: "challenge", totalMarks: 9,
          stem: "Trade protection review.",
          parts: [
            { label: "a", prompt: "Define tariff.", marks: 1 },
            { label: "b", prompt: "Define quota.", marks: 1 },
            { label: "c", prompt: "Define subsidy.", marks: 1 },
            { label: "d", prompt: "Distinguish a tariff from a quota.", marks: 2 },
            { label: "e", prompt: "Name two arguments for trade protection.", marks: 2 },
            { label: "f", prompt: "Name two costs of trade protection.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Protection", statement: "Measures, arguments and costs." },
          ], steps: [
            { part: "a", reasoning: "Tax on imported goods.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "Limit on import quantity.", marks: 1, markCode: "AO1" },
            { part: "c", reasoning: "Government payment to domestic producers.", marks: 1, markCode: "AO1" },
            { part: "d", reasoning: "Tariff raises price via tax; quota limits quantity directly.", marks: 1, markCode: "AO1" },
            { part: "d", reasoning: "Clear distinction.", marks: 1, markCode: "AO2" },
            { part: "e", reasoning: "Protect jobs/industries; national security or anti-dumping.", marks: 1, markCode: "AO1" },
            { part: "e", reasoning: "Two named.", marks: 1, markCode: "AO2" },
            { part: "f", reasoning: "Higher prices; retaliation; inefficiency.", marks: 1, markCode: "AO1" },
            { part: "f", reasoning: "Two named.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "(a) tariff (b) quota (c) subsidy (d) diff (e) args (f) costs" },
        },
      ],
    },
    {
      id: "olec-u5-agreements",
      title: "Trade Agreements",
      skill: "Explain free trade areas, customs unions and WTO.",
      lesson: {
        sections: [
          { heading: "Free trade area", body: "Member countries remove tariffs between themselves but keep own external tariffs. Example: USMCA." },
          { heading: "Customs union", body: "Free trade area plus common external tariff on non-members. Example: EU customs union." },
          { heading: "WTO", body: "World Trade Organization — global body promoting free trade, settling disputes, setting trade rules." },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Country X joins a free trade area. What changes?",
          solution: "Tariffs on goods from member countries are removed; tariffs on non-members stay unchanged.",
        },
      },
      questions: [
        {
          id: "olec-u5-ag-q1", difficulty: "foundation", totalMarks: 1,
          stem: "A free trade area involves…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Single government" },
            { id: "b", text: "Removing tariffs between members" },
            { id: "c", text: "Common currency" },
            { id: "d", text: "Closed borders" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "FTA", statement: "No internal tariffs." }], steps: [{ reasoning: "Correct.", marks: 1, markCode: "AO1" }], finalAnswer: "**(b)** Correct" },
        },
        {
          id: "olec-u5-ag-q2", difficulty: "core", totalMarks: 2,
          stem: "What is the WTO?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "WTO", statement: "Global trade body." }], steps: [
            { reasoning: "World Trade Organization — promotes free trade, settles disputes.", marks: 1, markCode: "AO1" },
            { reasoning: "Correct.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "Global body promoting free trade and settling disputes." },
        },
        {
          id: "olec-u5-ag-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain one benefit of a free trade area.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Trade agreements", statement: "Benefits." }], steps: [
            { reasoning: "Lower prices and more variety for consumers.", marks: 1, markCode: "AO2" },
            { reasoning: "Increased trade and economic growth.", marks: 1, markCode: "AO2" },
            { reasoning: "Correct benefit.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Lower prices, more variety, increased trade and growth." },
        },
        {
          id: "olec-u5-ag-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Trade agreements review.",
          parts: [
            { label: "a", prompt: "Define free trade area.", marks: 1 },
            { label: "b", prompt: "Free trade area vs customs union?", marks: 2 },
            { label: "c", prompt: "What is the WTO?", marks: 1 },
            { label: "d", prompt: "Two benefits of trade agreements?", marks: 2 },
            { label: "e", prompt: "Two potential problems?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Agreements", statement: "Types, benefits, problems." },
          ], steps: [
            { part: "a", reasoning: "Members remove internal tariffs.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "CU adds common external tariff.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "Clear distinction.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "Global trade body.", marks: 1, markCode: "AO1" },
            { part: "d", reasoning: "Lower prices; more trade/growth.", marks: 1, markCode: "AO1" },
            { part: "d", reasoning: "Two benefits.", marks: 1, markCode: "AO2" },
            { part: "e", reasoning: "Job losses in uncompetitive industries; trade diversion.", marks: 1, markCode: "AO2" },
            { part: "e", reasoning: "Second problem.", marks: 1, markCode: "AO2" },
            { part: "e", reasoning: "Complete answer.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "(a) FTA (b) vs CU (c) WTO (d) benefits (e) problems" },
        },
        {
          id: "olec-u5-ag-q5", difficulty: "foundation", totalMarks: 1,
          stem: "A customs union differs from a free trade area because it also has…",
          response: { type: "mcq", choices: [
            { id: "a", text: "A single currency" },
            { id: "b", text: "A common external tariff on non-members" },
            { id: "c", text: "Free movement of labour" },
            { id: "d", text: "A common government" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Customs union", statement: "FTA + common external tariff." }], steps: [{ reasoning: "Correct distinction.", marks: 1, markCode: "AO1" }], finalAnswer: "**(b)** Correct" },
        },
        {
          id: "olec-u5-ag-q6", difficulty: "core", totalMarks: 1,
          stem: "The main role of the WTO is to…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Fix exchange rates between currencies" },
            { id: "b", text: "Regulate multinational companies directly" },
            { id: "c", text: "Promote free trade, set trade rules and settle disputes" },
            { id: "d", text: "Lend money to developing countries" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "WTO", statement: "Global trade rules." }], steps: [{ reasoning: "Correct function.", marks: 1, markCode: "AO1" }], finalAnswer: "**(c)** Correct" },
        },
        {
          id: "olec-u5-ag-q7", difficulty: "core", totalMarks: 2,
          stem: "Explain one benefit to consumers of a country joining a free trade area.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "FTA benefits", statement: "Consumer gains." }], steps: [
            { reasoning: "Tariff removal lowers prices of goods from member countries.", marks: 1, markCode: "AO2" },
            { reasoning: "Consumers also gain from a wider variety of imports.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "Lower prices and greater variety of goods for consumers." },
        },
        {
          id: "olec-u5-ag-q8", difficulty: "core", totalMarks: 2,
          stem: "Trade between two members of a free trade area rises from $500 million to $650 million after tariffs are removed. Non-member trade stays at $300 million. (a) By what percentage did member trade rise? (b) What is total trade after the change in millions of dollars?",
          response: { type: "numeric", parts: [
            { label: "a", answer: 30, unit: "%" },
            { label: "b", answer: 950, unit: "million dollars" },
          ] },
          markscheme: { principles: [{ kind: "principle", name: "Trade growth", statement: "Percentage and total." }], steps: [
            { part: "a", reasoning: "(650 - 500)/500 x 100 = 30%.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "$650m + $300m = $950m.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "(a) 30% (b) $950m" },
        },
        {
          id: "olec-u5-ag-q9", difficulty: "challenge", totalMarks: 1,
          stem: "Trade diversion occurs when…",
          response: { type: "mcq", choices: [
            { id: "a", text: "The WTO imposes sanctions" },
            { id: "b", text: "A country bans all imports" },
            { id: "c", text: "Exports exceed imports" },
            { id: "d", text: "Members buy from a higher-cost member instead of a lower-cost non-member because of the agreement" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "Trade diversion", statement: "Inefficient sourcing." }], steps: [{ reasoning: "Tariff preferences can shift trade to less efficient suppliers.", marks: 1, markCode: "AO2" }], finalAnswer: "**(d)** Correct" },
        },
        {
          id: "olec-u5-ag-q10", difficulty: "challenge", totalMarks: 4,
          stem: "Explain two potential problems created by trade agreements for member countries.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Agreement problems", statement: "Drawbacks." }], steps: [
            { reasoning: "Industries that cannot compete may shed jobs as cheaper imports arrive.", marks: 1, markCode: "AO2" },
            { reasoning: "Trade diversion can raise costs by favouring higher-cost member suppliers.", marks: 1, markCode: "AO2" },
            { reasoning: "Members may lose policy independence, e.g. over tariffs on non-members.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation of two distinct problems.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Job losses in uncompetitive industries and trade diversion to higher-cost suppliers." },
        },
        {
          id: "olec-u5-ag-q11", difficulty: "challenge", totalMarks: 4,
          stem: "Compare a free trade area with a customs union.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "FTA vs customs union", statement: "External tariff difference." }], steps: [
            { reasoning: "Both remove tariffs on trade between member countries.", marks: 1, markCode: "AO1" },
            { reasoning: "In a free trade area each member keeps its own tariffs on non-members.", marks: 1, markCode: "AO1" },
            { reasoning: "A customs union adds a common external tariff applied to all non-members.", marks: 1, markCode: "AO1" },
            { reasoning: "Clear, accurate comparison.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "FTA = no internal tariffs, own external tariffs; customs union = adds a common external tariff." },
        },
        {
          id: "olec-u5-ag-q12", difficulty: "challenge", totalMarks: 1,
          stem: "A common market goes beyond a free trade area by also allowing…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Free movement of goods, services, capital and labour" },
            { id: "b", text: "Higher tariffs on non-members" },
            { id: "c", text: "A common currency for all members" },
            { id: "d", text: "A single parliament" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Common market", statement: "Factor mobility." }], steps: [{ reasoning: "Correct definition.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olec-u5-ag-q13", difficulty: "core", totalMarks: 2,
          stem: "A country in a customs union levies an 8% tariff on imports from non-members. Imports from non-members are $250 million. (a) What is the tariff revenue in millions of dollars? (b) If imports rise to $300 million, what is the new revenue in millions of dollars?",
          response: { type: "numeric", parts: [
            { label: "a", answer: 20, unit: "million dollars" },
            { label: "b", answer: 24, unit: "million dollars" },
          ] },
          markscheme: { principles: [{ kind: "principle", name: "Tariff revenue", statement: "Rate x import value." }], steps: [
            { part: "a", reasoning: "8% of $250m = $20m.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "8% of $300m = $24m.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "(a) $20m (b) $24m" },
        },
        {
          id: "olec-u5-ag-q14", difficulty: "challenge", totalMarks: 4,
          stem: "Evaluate the impact of the WTO on developing countries.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "WTO evaluation", statement: "Pros and cons." }], steps: [
            { reasoning: "Benefit: rules-based system gives developing countries a forum to challenge unfair trade practices.", marks: 1, markCode: "AO2" },
            { reasoning: "Benefit: market access to wealthy-country consumers can raise export earnings.", marks: 1, markCode: "AO2" },
            { reasoning: "Drawback: rules may favour developed countries and restrict policy space for development strategies.", marks: 1, markCode: "AO2" },
            { reasoning: "Balanced judgement on net impact.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "The WTO opens markets and settles disputes but its rules can disadvantage developing countries — mixed impact." },
        },
        {
          id: "olec-u5-ag-q15", difficulty: "foundation", totalMarks: 1,
          stem: "In a free trade area, tariffs on goods from non-member countries…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Are replaced by a single common tariff" },
            { id: "b", text: "Are raised to 50%" },
            { id: "c", text: "Are removed entirely" },
            { id: "d", text: "Remain unchanged — each member keeps its own" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "FTA", statement: "External tariffs unchanged." }], steps: [{ reasoning: "Correct feature of an FTA.", marks: 1, markCode: "AO1" }], finalAnswer: "**(d)** Correct" },
        },
        {
          id: "olec-u5-ag-q16", difficulty: "challenge", totalMarks: 9,
          stem: "Trade agreements review.",
          parts: [
            { label: "a", prompt: "Define a free trade area.", marks: 1 },
            { label: "b", prompt: "Distinguish a free trade area from a customs union.", marks: 2 },
            { label: "c", prompt: "What is the WTO?", marks: 1 },
            { label: "d", prompt: "Name two benefits of trade agreements.", marks: 2 },
            { label: "e", prompt: "Name two potential problems of trade agreements.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Agreements", statement: "Types, benefits and problems." },
          ], steps: [
            { part: "a", reasoning: "Members remove tariffs on trade between themselves.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "CU adds a common external tariff on non-members.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "Clear distinction.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "Global body promoting free trade and settling disputes.", marks: 1, markCode: "AO1" },
            { part: "d", reasoning: "Lower prices; more trade and growth.", marks: 1, markCode: "AO1" },
            { part: "d", reasoning: "Two named.", marks: 1, markCode: "AO2" },
            { part: "e", reasoning: "Job losses in uncompetitive industries; trade diversion.", marks: 1, markCode: "AO2" },
            { part: "e", reasoning: "Second problem identified.", marks: 1, markCode: "AO2" },
            { part: "e", reasoning: "Complete answer.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "(a) FTA (b) vs CU (c) WTO (d) benefits (e) problems" },
        },
      ],
    },
  ],
  notes: [
    { id: "olec-u5-5-2-notes", title: "Trade protection — notes", summary: "Tariffs, quotas, subsidies, agreements.",
      sections: [
        { heading: "Protection", body: "Tariff=tax; quota=limit; subsidy=payment. Arguments: jobs, security. Costs: prices, retaliation." },
        { heading: "Agreements", body: "FTA=no internal tariffs; customs union=+common external tariff; WTO=global trade rules." },
      ] },
  ],
};
