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
            { id: "a", text: "A tax on imported goods" }, { id: "b", text: "A limit on imports" }, { id: "c", text: "A subsidy to exporters" }, { id: "d", text: "A trade agreement" },
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
            { id: "a", text: "Removing tariffs between members" }, { id: "b", text: "Common currency" }, { id: "c", text: "Single government" }, { id: "d", text: "Closed borders" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "FTA", statement: "No internal tariffs." }], steps: [{ reasoning: "Correct.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
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
