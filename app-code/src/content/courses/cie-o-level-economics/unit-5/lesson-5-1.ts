import type { Lesson } from "../../../types.ts";

export const lesson51: Lesson = {
  id: "olec-u5-lesson-5-1",
  code: "5-1",
  title: "International Trade",
  goal: "I CAN explain why countries trade and the gains from trade.",
  standards: ["2281 5.1"],
  vocabulary: [
    { term: "International trade", definition: "Exchange of goods/services between countries." },
    { term: "Exports", definition: "Goods/services sold to other countries." },
    { term: "Imports", definition: "Goods/services bought from other countries." },
    { term: "Comparative advantage", definition: "Producing a good at lower opportunity cost than others." },
    { term: "Absolute advantage", definition: "Producing more of a good with same resources." },
    { term: "Trade balance", definition: "Exports minus imports." },
  ],
  concepts: [
    {
      id: "olec-u5-trade",
      title: "Why countries trade",
      skill: "Explain gains from trade and comparative advantage.",
      lesson: {
        sections: [
          { heading: "Why trade?", body: "Countries differ in resources, skills and technology. Trade lets each specialise in what it does best and consume more than it could alone." },
          { heading: "Comparative advantage", body: "Even if one country is better at everything (absolute advantage), both gain by specialising where opportunity cost is lowest." },
          { heading: "Gains", body: "Lower prices, greater variety, higher efficiency, economic growth. Trade also creates interdependence." },
        ],
        keyFormulas: [
          { name: "Trade balance", statement: "Exports - Imports" },
        ],
        workedExample: {
          problem: "Country A can produce 10 wheat or 5 cars; Country B can produce 8 wheat or 4 cars. Who has comparative advantage in cars?",
          solution: "A: 1 car costs 2 wheat; B: 1 car costs 2 wheat — equal here. (Simplified example — real cases differ.)",
        },
      },
      questions: [
        {
          id: "olec-u5-tr-q1", difficulty: "foundation", totalMarks: 1,
          stem: "Comparative advantage means…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Lower opportunity cost of production" }, { id: "b", text: "Producing more than anyone" }, { id: "c", text: "Largest economy" }, { id: "d", text: "Most exports" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Comparative advantage", statement: "Opp cost." }], steps: [{ reasoning: "Correct definition.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olec-u5-tr-q2", difficulty: "core", totalMarks: 2,
          stem: "Name two gains from international trade.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Trade gains", statement: "Benefits." }], steps: [
            { reasoning: "Lower prices, greater variety, efficiency, growth — any two.", marks: 1, markCode: "AO1" },
            { reasoning: "Two named.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "Any two: lower prices, variety, efficiency, growth." },
        },
        {
          id: "olec-u5-tr-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why both countries gain from trade even if one has absolute advantage in everything.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Comparative advantage", statement: "Mutual gains." }], steps: [
            { reasoning: "Each specialises in lowest opportunity cost.", marks: 1, markCode: "AO2" },
            { reasoning: "Both consume beyond production possibility.", marks: 1, markCode: "AO2" },
            { reasoning: "Trade expands total output.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Specialisation on comparative advantage raises total output — both gain." },
        },
        {
          id: "olec-u5-tr-q4", difficulty: "challenge", totalMarks: 9,
          stem: "International trade review.",
          parts: [
            { label: "a", prompt: "Define exports and imports.", marks: 2 },
            { label: "b", prompt: "Define comparative advantage.", marks: 1 },
            { label: "c", prompt: "Absolute vs comparative advantage?", marks: 2 },
            { label: "d", prompt: "Trade balance formula?", marks: 1 },
            { label: "e", prompt: "Three gains from trade?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Trade", statement: "Concepts and gains." },
          ], steps: [
            { part: "a", reasoning: "Exports=sold abroad; imports=bought abroad.", marks: 1, markCode: "AO1" },
            { part: "a", reasoning: "Both defined.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "Lower opportunity cost.", marks: 1, markCode: "AO1" },
            { part: "c", reasoning: "Absolute=more output; comparative=lower opp cost.", marks: 1, markCode: "AO1" },
            { part: "c", reasoning: "Clear distinction.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Exports - imports.", marks: 1, markCode: "AO1" },
            { part: "e", reasoning: "Lower prices, variety, efficiency, growth.", marks: 1, markCode: "AO1" },
            { part: "e", reasoning: "Three named.", marks: 1, markCode: "AO2" },
            { part: "e", reasoning: "Complete list.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "(a) exp/imp (b) comp adv (c) abs vs comp (d) formula (e) 3 gains" },
        },
      ],
    },
    {
      id: "olec-u5-rates",
      title: "Exchange Rates",
      skill: "Explain exchange rates and their effects on trade.",
      lesson: {
        sections: [
          { heading: "Exchange rates", body: "Price of one currency in terms of another. Determined by demand and supply of currencies." },
          { heading: "Appreciation/depreciation", body: "- **Appreciation**: currency strengthens → imports cheaper, exports dearer.\n- **Depreciation**: currency weakens → exports cheaper, imports dearer." },
          { heading: "Effects", body: "Depreciation can boost exports and reduce imports (helps trade balance) but raises import prices (may cause inflation)." },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "The pound depreciates from $2 to $1.80. What happens to UK exports and imports?",
          solution: "UK goods become cheaper abroad → exports rise. Foreign goods become dearer → imports fall.",
        },
      },
      questions: [
        {
          id: "olec-u5-er-q1", difficulty: "foundation", totalMarks: 1,
          stem: "Currency depreciation means…",
          response: { type: "mcq", choices: [
            { id: "a", text: "The currency loses value against others" }, { id: "b", text: "Prices rise" }, { id: "c", text: "GDP falls" }, { id: "d", text: "Unemployment rises" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Depreciation", statement: "Weaker currency." }], steps: [{ reasoning: "Correct.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olec-u5-er-q2", difficulty: "core", totalMarks: 2,
          stem: "How does depreciation affect exports?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Exchange rate effects", statement: "Exports." }], steps: [
            { reasoning: "Exports become cheaper for foreign buyers → exports rise.", marks: 1, markCode: "AO2" },
            { reasoning: "Correct effect.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Exports become cheaper abroad — demand rises." },
        },
        {
          id: "olec-u5-er-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain one benefit and one drawback of currency depreciation.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Depreciation", statement: "Trade-offs." }], steps: [
            { reasoning: "Benefit: cheaper exports boost demand and jobs.", marks: 1, markCode: "AO2" },
            { reasoning: "Drawback: dearer imports → import inflation.", marks: 1, markCode: "AO2" },
            { reasoning: "Correct comparison.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Boosts exports but raises import prices (import inflation)." },
        },
        {
          id: "olec-u5-er-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Exchange rates review.",
          parts: [
            { label: "a", prompt: "Define exchange rate.", marks: 1 },
            { label: "b", prompt: "Appreciation vs depreciation?", marks: 2 },
            { label: "c", prompt: "Effect of depreciation on exports?", marks: 1 },
            { label: "d", prompt: "Effect of depreciation on imports?", marks: 1 },
            { label: "e", prompt: "Benefit and drawback of depreciation?", marks: 2 },
            { label: "f", prompt: "What determines exchange rates?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Exchange rates", statement: "Concepts and effects." },
          ], steps: [
            { part: "a", reasoning: "Price of one currency in another.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "Appreciation=strengthens; depreciation=weakens.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "Clear distinction.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "Exports cheaper → rise.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Imports dearer → fall.", marks: 1, markCode: "AO2" },
            { part: "e", reasoning: "Benefit=exports; drawback=import inflation.", marks: 1, markCode: "AO1" },
            { part: "e", reasoning: "Both named.", marks: 1, markCode: "AO2" },
            { part: "f", reasoning: "Demand and supply of currencies.", marks: 1, markCode: "AO1" },
            { part: "f", reasoning: "Clear factors.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "(a) def (b) app/dep (c) exports up (d) imports down (e) ben/draw (f) D&S" },
        },
      ],
    },
  ],
  notes: [
    { id: "olec-u5-5-1-notes", title: "International trade — notes", summary: "Trade gains, comparative advantage, exchange rates.",
      sections: [
        { heading: "Trade", body: "Specialisation on comparative advantage; gains = lower prices, variety, efficiency." },
        { heading: "Exchange rates", body: "Depreciation boosts exports but causes import inflation; determined by currency demand/supply." },
      ] },
  ],
};
