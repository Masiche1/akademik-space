import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "olec-u2-lesson-2-1",
  code: "2-1",
  title: "Demand",
  goal: "I CAN explain the law of demand and factors affecting demand.",
  standards: ["2281 2.1"],
  vocabulary: [
    { term: "Demand", definition: "Willingness and ability to buy a good at a price." },
    { term: "Law of demand", definition: "As price rises, quantity demanded falls." },
    { term: "Demand curve", definition: "Graph showing relationship between price and quantity demanded." },
    { term: "Movement along demand curve", definition: "Change in quantity demanded due to price change." },
    { term: "Shift of demand curve", definition: "Change in demand due to non-price factors." },
    { term: "Substitute goods", definition: "Goods that can replace each other." },
    { term: "Complementary goods", definition: "Goods used together." },
  ],
  concepts: [
    {
      id: "olec-u2-demand",
      title: "Demand and the law of demand",
      skill: "Explain the law of demand and factors shifting demand.",
      lesson: {
        sections: [
          { heading: "Law of demand", body: "As price rises, quantity demanded falls (ceteris paribus). The demand curve slopes downward." },
          { heading: "Factors shifting demand", body: "- **Income**: normal goods ↑ with income; inferior goods ↓.\n- **Prices of related goods**: substitutes (competitor price ↑ → demand ↑) and complements (complement price ↑ → demand ↓).\n- **Tastes/preferences**: fashion, advertising.\n- **Expectations**: expected price rises → buy now.\n- **Population**: more people = more demand." },
          { heading: "Movement vs shift", body: "Price change = movement along curve. Non-price factor = shift of entire curve." },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "The price of tea increases. How does this affect coffee demand?",
          solution: "Tea and coffee are substitutes — higher tea price makes coffee relatively cheaper, increasing coffee demand (shift right).",
        },
      },
      questions: [
        {
          id: "olec-u2-dm-q1", difficulty: "foundation", totalMarks: 1,
          stem: "The law of demand states…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Price up → quantity demanded down" }, { id: "b", text: "Price up → quantity demanded up" }, { id: "c", text: "Demand always increases" }, { id: "d", text: "Supply determines demand" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Law of demand", statement: "Inverse relationship." }], steps: [{ reasoning: "Correct law.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olec-u2-dm-q2", difficulty: "core", totalMarks: 2,
          stem: "Name two factors that shift the demand curve.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Demand shifters", statement: "Non-price factors." }], steps: [
            { reasoning: "Income, prices of related goods, tastes, expectations, population — any two.", marks: 1, markCode: "AO1" },
            { reasoning: "Two named.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "Any two: income, related goods prices, tastes, expectations, population." },
        },
        {
          id: "olec-u2-dm-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain the difference between a movement along and a shift of the demand curve.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Movement vs shift", statement: "Price vs non-price." }], steps: [
            { reasoning: "Movement = price change only.", marks: 1, markCode: "AO2" },
            { reasoning: "Shift = non-price factor changes demand at all prices.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear distinction.", marks: 1, markCode: "AO2" },
            { reasoning: "Correct explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Movement = price change; shift = non-price factor." },
        },
        {
          id: "olec-u2-dm-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Demand review.",
          parts: [
            { label: "a", prompt: "Law of demand?", marks: 1 },
            { label: "b", prompt: "Demand curve shape?", marks: 1 },
            { label: "c", prompt: "Name three demand shifters.", marks: 2 },
            { label: "d", prompt: "Movement vs shift?", marks: 2 },
            { label: "e", prompt: "Substitutes vs complements?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Demand", statement: "Law, curve, shifters." },
          ], steps: [
            { part: "a", reasoning: "Price↑ → Qd↓.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "Downward sloping.", marks: 1, markCode: "AO1" },
            { part: "c", reasoning: "Three shifters.", marks: 1, markCode: "AO1" },
            { part: "c", reasoning: "Correct list.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Movement=price; shift=non-price.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Clear distinction.", marks: 1, markCode: "AO3" },
            { part: "e", reasoning: "Substitutes: competitor price↑→demand↑; complements: price↑→demand↓.", marks: 1, markCode: "AO1" },
            { part: "e", reasoning: "Both explained.", marks: 1, markCode: "AO2" },
            { part: "e", reasoning: "Clear distinction.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "(a) law (b) downward (c) 3 shifters (d) movement/shift (e) sub vs comp" },
        },
      ],
    },
    {
      id: "olec-u2-supply",
      title: "Supply",
      skill: "Explain the law of supply and factors affecting supply.",
      lesson: {
        sections: [
          { heading: "Law of supply", body: "As price rises, quantity supplied rises (ceteris paribus). The supply curve slopes upward." },
          { heading: "Factors shifting supply", body: "- **Input costs**: raw materials, wages.\n- **Technology**: improves efficiency, lowers costs.\n- **Number of producers**: more firms = more supply.\n- **Taxes/subsidies**: taxes reduce supply; subsidies increase it.\n- **Expectations**: expected price changes affect current supply." },
          { heading: "Movement vs shift", body: "Same as demand — price change = movement; non-price factor = shift." },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "The cost of steel increases. How does this affect car supply?",
          solution: "Higher input cost reduces supply — supply curve shifts left (less supplied at each price).",
        },
      },
      questions: [
        {
          id: "olec-u2-sp-q1", difficulty: "foundation", totalMarks: 1,
          stem: "The law of supply states…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Price up → quantity supplied up" }, { id: "b", text: "Price up → quantity supplied down" }, { id: "c", text: "Supply always decreases" }, { id: "d", text: "Demand determines supply" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Law of supply", statement: "Direct relationship." }], steps: [{ reasoning: "Correct law.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olec-u2-sp-q2", difficulty: "core", totalMarks: 2,
          stem: "Name two factors that shift the supply curve.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Supply shifters", statement: "Non-price factors." }], steps: [
            { reasoning: "Input costs, technology, number of firms, taxes/subsidies, expectations — any two.", marks: 1, markCode: "AO1" },
            { reasoning: "Two named.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "Any two: input costs, technology, number of firms, taxes, expectations." },
        },
        {
          id: "olec-u2-sp-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain how a subsidy affects supply.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Subsidy", statement: "Supply incentive." }], steps: [
            { reasoning: "Subsidy lowers production costs.", marks: 1, markCode: "AO2" },
            { reasoning: "Producers supply more at each price.", marks: 1, markCode: "AO2" },
            { reasoning: "Supply curve shifts right.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Subsidy lowers costs → more supply → rightward shift." },
        },
        {
          id: "olec-u2-sp-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Supply review.",
          parts: [
            { label: "a", prompt: "Law of supply?", marks: 1 },
            { label: "b", prompt: "Supply curve shape?", marks: 1 },
            { label: "c", prompt: "Name three supply shifters.", marks: 2 },
            { label: "d", prompt: "How does technology affect supply?", marks: 2 },
            { label: "e", prompt: "Tax vs subsidy effect on supply?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Supply", statement: "Law, curve, shifters." },
          ], steps: [
            { part: "a", reasoning: "Price↑ → Qs↑.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "Upward sloping.", marks: 1, markCode: "AO1" },
            { part: "c", reasoning: "Three shifters.", marks: 1, markCode: "AO1" },
            { part: "c", reasoning: "Correct list.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Improves efficiency → more supply.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Clear effect.", marks: 1, markCode: "AO3" },
            { part: "e", reasoning: "Tax reduces supply; subsidy increases.", marks: 1, markCode: "AO1" },
            { part: "e", reasoning: "Both stated.", marks: 1, markCode: "AO2" },
            { part: "e", reasoning: "Clear contrast.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "(a) law (b) upward (c) 3 shifters (d) tech→supply (e) tax↓subsidy↑" },
        },
      ],
    },
  ],
  notes: [
    { id: "olec-u2-2-1-notes", title: "Demand and supply — notes", summary: "Laws of demand and supply, curve shifts.",
      sections: [
        { heading: "Demand", body: "Price↑ → Qd↓ (downward curve). Shifters: income, related goods, tastes, expectations, population." },
        { heading: "Supply", body: "Price↑ → Qs↑ (upward curve). Shifters: input costs, technology, number of firms, taxes/subsidies." },
      ] },
  ],
};
