import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "olec-u2-lesson-2-2",
  code: "2-2",
  title: "Equilibrium and Price Changes",
  goal: "I CAN explain equilibrium price and how changes affect price and quantity.",
  standards: ["2281 2.2"],
  vocabulary: [
    { term: "Equilibrium", definition: "Price where quantity demanded equals quantity supplied." },
    { term: "Excess demand", definition: "When demand exceeds supply at current price." },
    { term: "Excess supply", definition: "When supply exceeds demand at current price." },
    { term: "Market clearing", definition: "Equilibrium where all willing buyers and sellers transact." },
    { term: "Price ceiling", definition: "Maximum price set by government." },
    { term: "Price floor", definition: "Minimum price set by government." },
  ],
  concepts: [
    {
      id: "olec-u2-equilibrium",
      title: "Market equilibrium",
      skill: "Find equilibrium and predict effects of demand/supply changes.",
      lesson: {
        sections: [
          { heading: "Equilibrium", body: "Where demand = supply. Price is stable — no tendency to change. Below equilibrium = excess demand (shortage); above = excess supply (surplus)." },
          { heading: "Changes", body: "Demand increases → price rises, quantity rises. Supply increases → price falls, quantity rises. Demand and supply both increase → quantity rises, price depends on relative shifts." },
          { heading: "Government intervention", body: "Price ceilings (below equilibrium) cause shortages; price floors (above equilibrium) cause surpluses." },
        ],
        keyFormulas: [
          { name: "Equilibrium", statement: "Quantity demanded = Quantity supplied" },
        ],
        workedExample: {
          problem: "Demand increases but supply stays constant. What happens to price and quantity?",
          solution: "Price rises and quantity increases — movement along the supply curve.",
        },
      },
      questions: [
        {
          id: "olec-u2-eq-q1", difficulty: "foundation", totalMarks: 1,
          stem: "Equilibrium occurs when…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Quantity demanded equals quantity supplied" }, { id: "b", text: "Price is highest" }, { id: "c", text: "Supply is zero" }, { id: "d", text: "Demand is infinite" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Equilibrium", statement: "Qd = Qs." }], steps: [{ reasoning: "Correct condition.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olec-u2-eq-q2", difficulty: "core", totalMarks: 2,
          stem: "Demand increases, supply constant. Effect on price and quantity?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Equilibrium changes", statement: "D↑ → P↑,Q↑." }], steps: [
            { reasoning: "Price rises, quantity rises.", marks: 1, markCode: "AO2" },
            { reasoning: "Correct.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Price rises, quantity increases." },
        },
        {
          id: "olec-u2-eq-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why a price ceiling below equilibrium causes a shortage.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Price ceiling", statement: "Below equilibrium." }], steps: [
            { reasoning: "Price too low → quantity demanded > supplied.", marks: 1, markCode: "AO2" },
            { reasoning: "Excess demand = shortage.", marks: 1, markCode: "AO2" },
            { reasoning: "Sellers won't supply at low price.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Low price → excess demand → shortage." },
        },
        {
          id: "olec-u2-eq-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Equilibrium review.",
          parts: [
            { label: "a", prompt: "Define equilibrium.", marks: 1 },
            { label: "b", prompt: "Excess demand vs excess supply?", marks: 2 },
            { label: "c", prompt: "Demand↑, supply constant. Price/quantity?", marks: 2 },
            { label: "d", prompt: "Supply↑, demand constant. Price/quantity?", marks: 2 },
            { label: "e", prompt: "Price floor effect?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Equilibrium", statement: "Changes and intervention." },
          ], steps: [
            { part: "a", reasoning: "Qd = Qs.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "Excess demand=shortage; excess supply=surplus.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "Correct distinction.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "P↑, Q↑.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "Correct.", marks: 1, markCode: "AO3" },
            { part: "d", reasoning: "P↓, Q↑.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Correct.", marks: 1, markCode: "AO3" },
            { part: "e", reasoning: "Minimum price → surplus.", marks: 1, markCode: "AO1" },
            { part: "e", reasoning: "Correct effect.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "(a) Qd=Qs (b) shortage/surplus (c) P↑Q↑ (d) P↓Q↑ (e) surplus" },
        },
      ],
    },
    {
      id: "olec-u2-elasticity",
      title: "Price Elasticity of Demand",
      skill: "Calculate and interpret price elasticity of demand.",
      lesson: {
        sections: [
          { heading: "What is PED?", body: "Measures how responsive quantity demanded is to price changes. PED = % change in quantity demanded / % change in price." },
          { heading: "Types", body: "- **Elastic** (>1): quantity responds strongly — luxuries, substitutes.\n- **Inelastic** (<1): quantity responds weakly — necessities, addictive goods.\n- **Unit elastic** (=1): proportional response.\n- **Perfectly inelastic** (=0): no response (insulin).\n- **Perfectly elastic** (∞): any price change → zero demand." },
          { heading: "Determinants", body: "Substitutes available, necessity vs luxury, proportion of income, time period." },
        ],
        keyFormulas: [
          { name: "PED", statement: "%ΔQd / %ΔP" },
        ],
        workedExample: {
          problem: "Price rises 10%, quantity falls 20%. Calculate PED.",
          solution: "PED = 20/10 = 2.0 — elastic demand.",
        },
      },
      questions: [
        {
          id: "olec-u2-ped-q1", difficulty: "foundation", totalMarks: 1,
          stem: "PED measures…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Responsiveness of quantity demanded to price" }, { id: "b", text: "Total revenue" }, { id: "c", text: "Supply elasticity" }, { id: "d", text: "Income elasticity" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "PED", statement: "Responsiveness." }], steps: [{ reasoning: "Correct definition.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olec-u2-ped-q2", difficulty: "core", totalMarks: 2,
          stem: "Price rises 5%, quantity falls 10%. Calculate PED.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "PED calc", statement: "%ΔQ/%ΔP." }], steps: [
            { reasoning: "PED = 10/5 = 2.0.", marks: 1, markCode: "AO2" },
            { reasoning: "Correct.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "PED = 2.0" },
        },
        {
          id: "olec-u2-ped-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why necessities tend to have inelastic demand.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Inelastic demand", statement: "Necessities." }], steps: [
            { reasoning: "People need them regardless of price.", marks: 1, markCode: "AO2" },
            { reasoning: "Few substitutes available.", marks: 1, markCode: "AO2" },
            { reasoning: "Small proportion of income or addictive.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Necessities have few substitutes and are needed regardless of price." },
        },
        {
          id: "olec-u2-ped-q4", difficulty: "challenge", totalMarks: 9,
          stem: "PED review.",
          parts: [
            { label: "a", prompt: "PED formula?", marks: 1 },
            { label: "b", prompt: "Elastic vs inelastic?", marks: 2 },
            { label: "c", prompt: "Price ↑10%, Q ↓20%. PED?", marks: 1 },
            { label: "d", prompt: "Name two determinants of PED.", marks: 2 },
            { label: "e", prompt: "Why does PED matter for pricing?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "principle", name: "PED", statement: "Calculation and application." },
          ], steps: [
            { part: "a", reasoning: "%ΔQd / %ΔP.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "Elastic>1; inelastic<1.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "Correct distinction.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "PED = 2.0.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Substitutes, necessity/luxury, income share, time — any two.", marks: 1, markCode: "AO1" },
            { part: "d", reasoning: "Two named.", marks: 1, markCode: "AO2" },
            { part: "e", reasoning: "Elastic → price rise reduces revenue; inelastic → price rise increases revenue.", marks: 1, markCode: "AO2" },
            { part: "e", reasoning: "Clear link.", marks: 1, markCode: "AO2" },
            { part: "e", reasoning: "Correct reasoning.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "(a) formula (b) elastic/inelastic (c) 2.0 (d) 2 determinants (e) revenue impact" },
        },
      ],
    },
  ],
  notes: [
    { id: "olec-u2-2-2-notes", title: "Equilibrium and elasticity — notes", summary: "Market equilibrium and price elasticity of demand.",
      sections: [
        { heading: "Equilibrium", body: "Qd=Qs; demand↑→P↑Q↑; supply↑→P↓Q↑; price ceilings→shortage, floors→surplus." },
        { heading: "PED", body: "%ΔQd/%ΔP; elastic>1, inelastic<1; matters for pricing decisions." },
      ] },
  ],
};
