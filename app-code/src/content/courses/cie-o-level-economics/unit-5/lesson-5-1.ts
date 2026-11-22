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
            { id: "a", text: "Lower opportunity cost of production" },
            { id: "b", text: "Largest economy" },
            { id: "c", text: "Producing more than anyone" },
            { id: "d", text: "Most exports" },
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
        {
          id: "olec-u5-tr-q5", difficulty: "foundation", totalMarks: 1,
          stem: "Exports are…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Government payments to firms" },
            { id: "b", text: "Goods and services sold to other countries" },
            { id: "c", text: "Taxes on imported goods" },
            { id: "d", text: "Goods bought from abroad" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Exports", statement: "Sold abroad." }], steps: [{ reasoning: "Correct definition.", marks: 1, markCode: "AO1" }], finalAnswer: "**(b)** Correct" },
        },
        {
          id: "olec-u5-tr-q6", difficulty: "foundation", totalMarks: 2,
          stem: "A country's exports are $800 million and its imports are $650 million. Exports then fall to $700 million while imports rise to $750 million. (a) What is the initial trade balance in millions of dollars? (b) What is the new trade balance in millions of dollars?",
          response: { type: "numeric", parts: [
            { label: "a", answer: 150, unit: "million dollars" },
            { label: "b", answer: -50, unit: "million dollars" },
          ] },
          markscheme: { principles: [{ kind: "formula", name: "Trade balance", statement: "Exports - Imports." }], steps: [
            { part: "a", reasoning: "$800m - $650m = $150m surplus.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "$700m - $750m = -$50m deficit.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "(a) $150m (b) -$50m" },
        },
        {
          id: "olec-u5-tr-q7", difficulty: "core", totalMarks: 1,
          stem: "A country has an absolute advantage in producing wheat. This means it can…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Produce wheat at the lowest opportunity cost" },
            { id: "b", text: "Produce more wheat with the same resources" },
            { id: "c", text: "Always gain the most from trade" },
            { id: "d", text: "Export all of its wheat output" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Absolute advantage", statement: "More output, same resources." }], steps: [{ reasoning: "Correct definition.", marks: 1, markCode: "AO1" }], finalAnswer: "**(b)** Correct" },
        },
        {
          id: "olec-u5-tr-q8", difficulty: "core", totalMarks: 1,
          stem: "Specialisation in international trade means…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Banning all imports" },
            { id: "b", text: "Focusing production on goods with the lowest opportunity cost" },
            { id: "c", text: "Producing every good domestically" },
            { id: "d", text: "Exporting the entire national output" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Specialisation", statement: "Produce what you do best." }], steps: [{ reasoning: "Correct definition.", marks: 1, markCode: "AO1" }], finalAnswer: "**(b)** Correct" },
        },
        {
          id: "olec-u5-tr-q9", difficulty: "core", totalMarks: 3,
          stem: "Country A can produce either 20 tonnes of rice or 10 tonnes of coffee. Country B can produce either 16 tonnes of rice or 4 tonnes of coffee. (a) What is the opportunity cost of 1 tonne of coffee for Country A, in tonnes of rice? (b) What is the opportunity cost of 1 tonne of coffee for Country B, in tonnes of rice? (c) What is the opportunity cost of 1 tonne of rice for Country A, in tonnes of coffee?",
          response: { type: "numeric", parts: [
            { label: "a", answer: 2, unit: "tonnes of rice" },
            { label: "b", answer: 4, unit: "tonnes of rice" },
            { label: "c", answer: 0.5, unit: "tonnes of coffee" },
          ] },
          markscheme: { principles: [{ kind: "principle", name: "Opportunity cost", statement: "Next best alternative forgone." }], steps: [
            { part: "a", reasoning: "A: 20/10 = 2 tonnes of rice per tonne of coffee.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "B: 16/4 = 4 tonnes of rice per tonne of coffee.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "A: 10/20 = 0.5 tonnes of coffee per tonne of rice.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "(a) 2 (b) 4 (c) 0.5" },
        },
        {
          id: "olec-u5-tr-q10", difficulty: "challenge", totalMarks: 4,
          stem: "Explain how international trade can contribute to the economic growth of a developing country.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Trade and growth", statement: "Mechanisms." }], steps: [
            { reasoning: "Exports earn foreign exchange needed to buy capital goods and technology.", marks: 1, markCode: "AO2" },
            { reasoning: "Access to larger markets encourages investment and economies of scale.", marks: 1, markCode: "AO2" },
            { reasoning: "Cheaper imports of capital goods and inputs raise productivity.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear, coherent explanation linking trade to growth.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Trade earns foreign exchange, expands markets for investment and supplies cheaper inputs — all raising output and growth." },
        },
        {
          id: "olec-u5-tr-q11", difficulty: "challenge", totalMarks: 1,
          stem: "Which of the following is a possible disadvantage of international trade for a country?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Domestic industries may struggle against cheaper imports" },
            { id: "b", text: "Firms gain access to larger markets" },
            { id: "c", text: "Greater variety of goods is available" },
            { id: "d", text: "Consumers always pay lower prices" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "principle", name: "Costs of trade", statement: "Disadvantages." }], steps: [{ reasoning: "Cheaper imports can damage uncompetitive domestic industries.", marks: 1, markCode: "AO2" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olec-u5-tr-q12", difficulty: "challenge", totalMarks: 4,
          stem: "A country can produce every good more cheaply than its trading partner. Discuss whether it should still engage in international trade.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Absolute vs comparative", statement: "Mutual gains." }], steps: [
            { reasoning: "Yes — gains depend on comparative, not absolute, advantage.", marks: 1, markCode: "AO2" },
            { reasoning: "The partner has a lower opportunity cost in some goods, so specialisation raises total output.", marks: 1, markCode: "AO2" },
            { reasoning: "Trade expands consumption possibilities beyond the production possibility frontier.", marks: 1, markCode: "AO2" },
            { reasoning: "Balanced conclusion — both gain despite the absolute advantage.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Yes — comparative advantage means both countries gain from specialisation even when one has absolute advantage everywhere." },
        },
        {
          id: "olec-u5-tr-q13", difficulty: "challenge", totalMarks: 1,
          stem: "Which of the following is a risk created by trade interdependence between countries?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Prices always fall for consumers" },
            { id: "b", text: "Countries stop trading altogether" },
            { id: "c", text: "A supply shock in one country can disrupt production in another" },
            { id: "d", text: "Exchange rates can never change" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "principle", name: "Interdependence", statement: "Trade linkages." }], steps: [{ reasoning: "Countries rely on imports they cannot easily replace.", marks: 1, markCode: "AO2" }], finalAnswer: "**(c)** Correct" },
        },
        {
          id: "olec-u5-tr-q14", difficulty: "foundation", totalMarks: 1,
          stem: "A trade deficit occurs when…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Imports exceed exports" },
            { id: "b", text: "The exchange rate appreciates" },
            { id: "c", text: "Exports exceed imports" },
            { id: "d", text: "Exports equal imports" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Trade deficit", statement: "Imports > exports." }], steps: [{ reasoning: "Correct definition.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olec-u5-tr-q15", difficulty: "core", totalMarks: 2,
          stem: "A country has exports of $450 million and imports of $600 million. Exports then rise to $550 million while imports stay at $600 million. (a) What is the initial trade balance in millions of dollars? (b) What is the new trade balance in millions of dollars?",
          response: { type: "numeric", parts: [
            { label: "a", answer: -150, unit: "million dollars" },
            { label: "b", answer: -50, unit: "million dollars" },
          ] },
          markscheme: { principles: [{ kind: "formula", name: "Trade balance", statement: "Exports - Imports." }], steps: [
            { part: "a", reasoning: "$450m - $600m = -$150m deficit.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "$550m - $600m = -$50m deficit.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "(a) -$150m (b) -$50m" },
        },
        {
          id: "olec-u5-tr-q16", difficulty: "challenge", totalMarks: 9,
          stem: "International trade review.",
          parts: [
            { label: "a", prompt: "Define comparative advantage.", marks: 1 },
            { label: "b", prompt: "Distinguish absolute from comparative advantage.", marks: 2 },
            { label: "c", prompt: "Define the trade balance and state its formula.", marks: 2 },
            { label: "d", prompt: "Exports are $900 million and imports are $750 million. Calculate the trade balance and state whether it is a surplus or deficit.", marks: 2 },
            { label: "e", prompt: "Name two gains from international trade.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Trade", statement: "Concepts, calculation and gains." },
          ], steps: [
            { part: "a", reasoning: "Lower opportunity cost of production.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "Absolute = more output with same resources; comparative = lower opportunity cost.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "Clear distinction.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "Exports minus imports; positive = surplus, negative = deficit.", marks: 1, markCode: "AO1" },
            { part: "c", reasoning: "Formula stated as exports - imports.", marks: 1, markCode: "AO1" },
            { part: "d", reasoning: "$900m - $750m = $150m.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Surplus, since the balance is positive.", marks: 1, markCode: "AO2" },
            { part: "e", reasoning: "Lower prices, greater variety, efficiency, growth.", marks: 1, markCode: "AO1" },
            { part: "e", reasoning: "Two named.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "(a) comp adv (b) abs vs comp (c) balance def (d) $150m surplus (e) 2 gains" },
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
            { id: "a", text: "GDP falls" },
            { id: "b", text: "The currency loses value against others" },
            { id: "c", text: "Unemployment rises" },
            { id: "d", text: "Prices rise" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Depreciation", statement: "Weaker currency." }], steps: [{ reasoning: "Correct.", marks: 1, markCode: "AO1" }], finalAnswer: "**(b)** Correct" },
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
        {
          id: "olec-u5-er-q5", difficulty: "foundation", totalMarks: 1,
          stem: "An exchange rate is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "The price of one currency in terms of another" },
            { id: "b", text: "A tax on foreign goods" },
            { id: "c", text: "The interest rate set by commercial banks" },
            { id: "d", text: "The total value of a country's exports" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Exchange rate", statement: "Currency price." }], steps: [{ reasoning: "Correct definition.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olec-u5-er-q6", difficulty: "foundation", totalMarks: 2,
          stem: "The exchange rate is £1 = $2.00. (a) What is the dollar value of £5? (b) The rate changes to £1 = $1.80. What is the new dollar value of £5?",
          response: { type: "numeric", parts: [
            { label: "a", answer: 10, unit: "dollars" },
            { label: "b", answer: 9, unit: "dollars" },
          ] },
          markscheme: { principles: [{ kind: "principle", name: "Exchange rate conversion", statement: "Multiply by rate." }], steps: [
            { part: "a", reasoning: "$2.00 x 5 = $10.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "$1.80 x 5 = $9.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "(a) $10 (b) $9" },
        },
        {
          id: "olec-u5-er-q7", difficulty: "core", totalMarks: 1,
          stem: "If the pound appreciates against the dollar, UK exports become…",
          response: { type: "mcq", choices: [
            { id: "a", text: "More expensive for foreign buyers, so demand may fall" },
            { id: "b", text: "Completely unaffected" },
            { id: "c", text: "Cheaper for foreign buyers, so demand may rise" },
            { id: "d", text: "Illegal to sell abroad" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "principle", name: "Appreciation", statement: "Exports dearer." }], steps: [{ reasoning: "A stronger pound raises the foreign price of UK goods.", marks: 1, markCode: "AO2" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olec-u5-er-q8", difficulty: "core", totalMarks: 3,
          stem: "£1 = €1.20 and a UK car costs £10,000. (a) What is the car's price in euros? (b) The rate changes to £1 = €1.00. What is the new euro price? (c) By what percentage has the euro price fallen?",
          response: { type: "numeric", parts: [
            { label: "a", answer: 12000, unit: "euros" },
            { label: "b", answer: 10000, unit: "euros" },
            { label: "c", answer: 16.67, unit: "%", tolerance: 0.01 },
          ] },
          markscheme: { principles: [{ kind: "principle", name: "Exchange rate conversion", statement: "Multiply by rate." }], steps: [
            { part: "a", reasoning: "£10,000 x 1.20 = €12,000.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "£10,000 x 1.00 = €10,000.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "(12000 - 10000)/12000 x 100 = 16.67%.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "(a) €12,000 (b) €10,000 (c) 16.67%" },
        },
        {
          id: "olec-u5-er-q9", difficulty: "core", totalMarks: 2,
          stem: "What determines the exchange rate of a currency?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Exchange rate determinants", statement: "Demand and supply." }], steps: [
            { reasoning: "The demand for and supply of the currency in foreign exchange markets.", marks: 1, markCode: "AO1" },
            { reasoning: "Factors such as interest rates, inflation, trade flows and speculation shift demand and supply.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "Demand and supply of the currency, influenced by interest rates, inflation and trade flows." },
        },
        {
          id: "olec-u5-er-q10", difficulty: "challenge", totalMarks: 4,
          stem: "Explain how a depreciation of the exchange rate can cause imported inflation.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Import inflation", statement: "Depreciation chain." }], steps: [
            { reasoning: "Depreciation makes imports more expensive in domestic currency.", marks: 1, markCode: "AO2" },
            { reasoning: "Firms pass on higher import costs to consumers.", marks: 1, markCode: "AO2" },
            { reasoning: "The consumer price index rises — imported inflation.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation of the full chain of effects.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Depreciation raises import prices, which firms pass on, pushing up the CPI — imported inflation." },
        },
        {
          id: "olec-u5-er-q11", difficulty: "challenge", totalMarks: 1,
          stem: "A depreciation of a country's currency is most likely to…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Reduce export demand" },
            { id: "b", text: "Lower the price of imports" },
            { id: "c", text: "Improve the trade balance by boosting exports and reducing imports" },
            { id: "d", text: "Raise GDP per capita directly" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "principle", name: "Depreciation", statement: "Trade effects." }], steps: [{ reasoning: "Cheaper exports and dearer imports improve the balance.", marks: 1, markCode: "AO2" }], finalAnswer: "**(c)** Correct" },
        },
        {
          id: "olec-u5-er-q12", difficulty: "challenge", totalMarks: 3,
          stem: "The exchange rate falls from £1 = $2.00 to £1 = $1.80. (a) By what percentage has the pound depreciated? (b) What was the dollar price of £200 before the change? (c) What is it after the change?",
          response: { type: "numeric", parts: [
            { label: "a", answer: 10, unit: "%" },
            { label: "b", answer: 400, unit: "dollars" },
            { label: "c", answer: 360, unit: "dollars" },
          ] },
          markscheme: { principles: [{ kind: "principle", name: "Exchange rate change", statement: "Percentage and conversion." }], steps: [
            { part: "a", reasoning: "(2.00 - 1.80)/2.00 x 100 = 10%.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "£200 x $2.00 = $400.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "£200 x $1.80 = $360.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "(a) 10% (b) $400 (c) $360" },
        },
        {
          id: "olec-u5-er-q13", difficulty: "challenge", totalMarks: 4,
          stem: "Evaluate the view that a weaker currency is always beneficial for an economy.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Depreciation evaluation", statement: "Benefits vs costs." }], steps: [
            { reasoning: "Benefit: cheaper exports boost export demand and can create jobs.", marks: 1, markCode: "AO2" },
            { reasoning: "Benefit: dearer imports can reduce import spending and improve the trade balance.", marks: 1, markCode: "AO2" },
            { reasoning: "Drawback: higher import prices cause imported inflation and reduce real incomes.", marks: 1, markCode: "AO2" },
            { reasoning: "Balanced judgement — benefits depend on the cause and structure of the economy.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "A weaker currency boosts exports but causes import inflation — beneficial only in certain circumstances, not always." },
        },
        {
          id: "olec-u5-er-q14", difficulty: "foundation", totalMarks: 1,
          stem: "Currency appreciation means…",
          response: { type: "mcq", choices: [
            { id: "a", text: "The currency weakens against others" },
            { id: "b", text: "The currency strengthens against others" },
            { id: "c", text: "Prices in the economy rise" },
            { id: "d", text: "Exports become cheaper abroad" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Appreciation", statement: "Stronger currency." }], steps: [{ reasoning: "Correct definition.", marks: 1, markCode: "AO1" }], finalAnswer: "**(b)** Correct" },
        },
        {
          id: "olec-u5-er-q15", difficulty: "core", totalMarks: 1,
          stem: "Depreciation tends to improve the trade balance because…",
          response: { type: "mcq", choices: [
            { id: "a", text: "All prices in the economy fall" },
            { id: "b", text: "Exports become cheaper abroad while imports become dearer at home" },
            { id: "c", text: "Exports become dearer while imports become cheaper" },
            { id: "d", text: "Foreign demand for the currency rises" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "principle", name: "Depreciation", statement: "Trade balance effect." }], steps: [{ reasoning: "Correct mechanism.", marks: 1, markCode: "AO2" }], finalAnswer: "**(b)** Correct" },
        },
        {
          id: "olec-u5-er-q16", difficulty: "challenge", totalMarks: 9,
          stem: "Exchange rates review.",
          parts: [
            { label: "a", prompt: "Define exchange rate.", marks: 1 },
            { label: "b", prompt: "Distinguish appreciation from depreciation.", marks: 2 },
            { label: "c", prompt: "State the effect of depreciation on exports.", marks: 1 },
            { label: "d", prompt: "State the effect of depreciation on imports.", marks: 1 },
            { label: "e", prompt: "Give one benefit and one drawback of depreciation.", marks: 2 },
            { label: "f", prompt: "£1 = $2.00 changes to £1 = $1.80. Calculate the percentage depreciation of the pound.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Exchange rates", statement: "Concepts, effects and calculation." },
          ], steps: [
            { part: "a", reasoning: "Price of one currency in terms of another.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "Appreciation = strengthens; depreciation = weakens.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "Clear distinction.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "Exports cheaper abroad — demand rises.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Imports dearer — demand falls.", marks: 1, markCode: "AO2" },
            { part: "e", reasoning: "Benefit = cheaper exports/jobs; drawback = import inflation.", marks: 1, markCode: "AO1" },
            { part: "e", reasoning: "Both named.", marks: 1, markCode: "AO2" },
            { part: "f", reasoning: "(2.00 - 1.80)/2.00 x 100 = 10%.", marks: 1, markCode: "AO2" },
            { part: "f", reasoning: "Correct method and answer.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "(a) def (b) app/dep (c) exports up (d) imports down (e) ben/draw (f) 10%" },
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
