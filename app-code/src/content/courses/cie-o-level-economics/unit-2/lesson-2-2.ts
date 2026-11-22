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
            { id: "a", text: "Supply is zero" },
            { id: "b", text: "Demand is infinite" },
            { id: "c", text: "Quantity demanded equals quantity supplied" },
            { id: "d", text: "Price is highest" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "Equilibrium", statement: "Qd = Qs." }], steps: [{ reasoning: "Correct condition.", marks: 1, markCode: "AO1" }], finalAnswer: "**(c)** Correct" },
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
        {
          id: "olec-u2-eq-q5", difficulty: "foundation", totalMarks: 1,
          stem: "If the market price is below the equilibrium price, there will be…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Excess supply (a surplus)" },
            { id: "b", text: "Excess demand (a shortage)" },
            { id: "c", text: "No change in the market" },
            { id: "d", text: "Perfect equilibrium" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "principle", name: "Below equilibrium", statement: "Excess demand." }], steps: [{ reasoning: "Low price means quantity demanded exceeds quantity supplied.", marks: 1, markCode: "AO1" }], finalAnswer: "**(b)** Correct" },
        },
        {
          id: "olec-u2-eq-q6", difficulty: "foundation", totalMarks: 1,
          stem: "If the market price is above the equilibrium price, there will be…",
          response: { type: "mcq", choices: [
            { id: "a", text: "No change in the market" },
            { id: "b", text: "Excess demand (a shortage)" },
            { id: "c", text: "Excess supply (a surplus)" },
            { id: "d", text: "A black market automatically" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "principle", name: "Above equilibrium", statement: "Excess supply." }], steps: [{ reasoning: "High price means quantity supplied exceeds quantity demanded.", marks: 1, markCode: "AO1" }], finalAnswer: "**(c)** Correct" },
        },
        {
          id: "olec-u2-eq-q7", difficulty: "core", totalMarks: 1,
          stem: "Demand increases while supply stays constant. The effect on equilibrium price and quantity is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Price rises and quantity falls" },
            { id: "b", text: "No change" },
            { id: "c", text: "Price rises and quantity rises" },
            { id: "d", text: "Price falls and quantity rises" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "principle", name: "Equilibrium changes", statement: "D↑, S constant." }], steps: [{ reasoning: "More demand bids up price and increases quantity traded.", marks: 1, markCode: "AO2" }], finalAnswer: "**(c)** Correct" },
        },
        {
          id: "olec-u2-eq-q8", difficulty: "core", totalMarks: 1,
          stem: "Supply increases while demand stays constant. The effect on equilibrium price and quantity is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Price rises and quantity rises" },
            { id: "b", text: "No change" },
            { id: "c", text: "Price falls and quantity falls" },
            { id: "d", text: "Price falls and quantity rises" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "principle", name: "Equilibrium changes", statement: "S↑, D constant." }], steps: [{ reasoning: "More supply lowers price and increases quantity traded.", marks: 1, markCode: "AO2" }], finalAnswer: "**(d)** Correct" },
        },
        {
          id: "olec-u2-eq-q9", difficulty: "challenge", totalMarks: 1,
          stem: "Both demand and supply increase by the same amount. The effect on equilibrium is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Price definitely falls" },
            { id: "b", text: "No change in either" },
            { id: "c", text: "Price definitely rises" },
            { id: "d", text: "Quantity definitely rises; price effect is uncertain" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "principle", name: "Joint shifts", statement: "D and S both increase." }], steps: [{ reasoning: "Quantity certainly rises; price depends on relative shift sizes.", marks: 1, markCode: "AO2" }], finalAnswer: "**(d)** Correct" },
        },
        {
          id: "olec-u2-eq-q10", difficulty: "foundation", totalMarks: 1,
          stem: "At a price of $5, quantity demanded is 100 units and quantity supplied is 60 units. Calculate the excess demand (shortage).",
          response: { type: "numeric", parts: [{ label: "a", answer: 40, unit: "units" }] },
          markscheme: { principles: [{ kind: "principle", name: "Excess demand", statement: "Qd - Qs." }], steps: [{ reasoning: "Excess demand = 100 - 60 = 40 units.", marks: 1, markCode: "AO2" }], finalAnswer: "40 units" },
        },
        {
          id: "olec-u2-eq-q11", difficulty: "core", totalMarks: 2,
          stem: "At a price of $8, quantity demanded is 120 and quantity supplied is 80. At a price of $10, quantity demanded is 90 and quantity supplied is 110. (a) Calculate the shortage at $8. (b) Calculate the surplus at $10.",
          response: { type: "numeric", parts: [{ label: "a", answer: 40, unit: "units" }, { label: "b", answer: 20, unit: "units" }] },
          markscheme: { principles: [{ kind: "principle", name: "Excess demand/supply", statement: "Qd - Qs or Qs - Qd." }], steps: [
            { part: "a", reasoning: "Shortage = 120 - 80 = 40 units.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "Surplus = 110 - 90 = 20 units.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "(a) 40 units (b) 20 units" },
        },
        {
          id: "olec-u2-eq-q12", difficulty: "core", totalMarks: 2,
          stem: "The equilibrium quantity is 150 units. After demand increases, at the same price quantity demanded is 190 while quantity supplied remains 150. Calculate the excess demand created.",
          response: { type: "numeric", parts: [{ label: "a", answer: 40, unit: "units" }] },
          markscheme: { principles: [{ kind: "principle", name: "Excess demand", statement: "Qd - Qs." }], steps: [
            { reasoning: "Excess demand = 190 - 150.", marks: 1, markCode: "AO2" },
            { reasoning: "Excess demand = 40 units.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "40 units" },
        },
        {
          id: "olec-u2-eq-q13", difficulty: "core", totalMarks: 2,
          stem: "Explain why the equilibrium price in a competitive market is stable.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Equilibrium stability", statement: "No tendency to change." }], steps: [
            { reasoning: "At equilibrium, quantity demanded equals quantity supplied.", marks: 1, markCode: "AO2" },
            { reasoning: "There is no shortage or surplus, so no pressure for price to change.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Qd = Qs means no excess demand or supply, so price stays put." },
        },
        {
          id: "olec-u2-eq-q14", difficulty: "core", totalMarks: 3,
          stem: "Explain why the effect on equilibrium price is uncertain when both demand and supply increase.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Joint shifts", statement: "Uncertain price effect." }], steps: [
            { reasoning: "Demand increase pushes price up; supply increase pushes price down.", marks: 1, markCode: "AO2" },
            { reasoning: "The final price depends on which shift is larger.", marks: 1, markCode: "AO2" },
            { reasoning: "Quantity definitely rises regardless.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Opposing price pressures mean price change depends on relative shift sizes." },
        },
        {
          id: "olec-u2-eq-q15", difficulty: "challenge", totalMarks: 9,
          stem: "Equilibrium extended review.",
          parts: [
            { label: "a", prompt: "Define equilibrium.", marks: 1 },
            { label: "b", prompt: "Define excess demand and excess supply.", marks: 2 },
            { label: "c", prompt: "State what happens to price and quantity when demand rises (supply constant).", marks: 2 },
            { label: "d", prompt: "State what happens when supply rises (demand constant).", marks: 2 },
            { label: "e", prompt: "Why does a price ceiling below equilibrium cause a shortage?", marks: 1 },
            { label: "f", prompt: "Why does a price floor above equilibrium cause a surplus?", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Equilibrium", statement: "Definition, changes, controls." },
          ], steps: [
            { part: "a", reasoning: "Qd = Qs — market clearing price.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "Excess demand = Qd > Qs (shortage); excess supply = Qs > Qd (surplus).", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "Both defined correctly.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "Price rises, quantity rises.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "Correct prediction.", marks: 1, markCode: "AO3" },
            { part: "d", reasoning: "Price falls, quantity rises.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Correct prediction.", marks: 1, markCode: "AO3" },
            { part: "e", reasoning: "Low price → Qd > Qs → shortage.", marks: 1, markCode: "AO2" },
            { part: "f", reasoning: "High minimum price → Qs > Qd → surplus.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "(a) def (b) excess demand/supply (c) P↑Q↑ (d) P↓Q↑ (e) shortage (f) surplus" },
        },
        {
          id: "olec-u2-eq-q16", difficulty: "challenge", totalMarks: 4,
          stem: "Evaluate the effect of a price ceiling that is set above the equilibrium price.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Price ceiling", statement: "Non-binding ceiling." }], steps: [
            { reasoning: "A ceiling above equilibrium is non-binding.", marks: 1, markCode: "AO2" },
            { reasoning: "The market price stays at equilibrium — no effect.", marks: 1, markCode: "AO2" },
            { reasoning: "It only matters if the equilibrium price rises above the ceiling.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear evaluation given.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "A non-binding ceiling has no effect until equilibrium exceeds it." },
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
            { id: "a", text: "Supply elasticity" },
            { id: "b", text: "Income elasticity" },
            { id: "c", text: "Total revenue" },
            { id: "d", text: "Responsiveness of quantity demanded to price" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "PED", statement: "Responsiveness." }], steps: [{ reasoning: "Correct definition.", marks: 1, markCode: "AO1" }], finalAnswer: "**(d)** Correct" },
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
        {
          id: "olec-u2-ped-q5", difficulty: "foundation", totalMarks: 1,
          stem: "A PED value of 0.4 means demand is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Elastic" },
            { id: "b", text: "Perfectly elastic" },
            { id: "c", text: "Inelastic" },
            { id: "d", text: "Unit elastic" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "PED", statement: "PED < 1 = inelastic." }], steps: [{ reasoning: "PED below 1 means quantity responds weakly to price.", marks: 1, markCode: "AO1" }], finalAnswer: "**(c)** Correct" },
        },
        {
          id: "olec-u2-ped-q6", difficulty: "foundation", totalMarks: 1,
          stem: "PED is calculated as…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Price × quantity" },
            { id: "b", text: "% change in quantity demanded / % change in price" },
            { id: "c", text: "Total revenue / quantity" },
            { id: "d", text: "% change in price / % change in quantity demanded" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "PED formula", statement: "%ΔQd / %ΔP." }], steps: [{ reasoning: "Correct formula.", marks: 1, markCode: "AO1" }], finalAnswer: "**(b)** Correct" },
        },
        {
          id: "olec-u2-ped-q7", difficulty: "core", totalMarks: 1,
          stem: "A PED of exactly 1 is described as…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Perfectly inelastic" },
            { id: "b", text: "Perfectly elastic" },
            { id: "c", text: "Unit elastic" },
            { id: "d", text: "Inelastic" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "Unit elasticity", statement: "PED = 1." }], steps: [{ reasoning: "Proportional response to price changes.", marks: 1, markCode: "AO1" }], finalAnswer: "**(c)** Correct" },
        },
        {
          id: "olec-u2-ped-q8", difficulty: "core", totalMarks: 1,
          stem: "Which good is most likely to have inelastic demand?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Luxury holidays" },
            { id: "b", text: "Insulin for diabetics" },
            { id: "c", text: "Designer handbags" },
            { id: "d", text: "A new smartphone model" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "principle", name: "Inelastic demand", statement: "Necessities, few substitutes." }], steps: [{ reasoning: "Insulin is a necessity with no substitutes — demand barely responds to price.", marks: 1, markCode: "AO2" }], finalAnswer: "**(b)** Correct" },
        },
        {
          id: "olec-u2-ped-q9", difficulty: "challenge", totalMarks: 1,
          stem: "Perfectly inelastic demand (PED = 0) is shown on a diagram as…",
          response: { type: "mcq", choices: [
            { id: "a", text: "A horizontal demand curve" },
            { id: "b", text: "A vertical demand curve" },
            { id: "c", text: "A downward sloping curve" },
            { id: "d", text: "An upward sloping curve" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "principle", name: "Perfectly inelastic", statement: "PED = 0." }], steps: [{ reasoning: "Quantity demanded does not change at any price — vertical curve.", marks: 1, markCode: "AO2" }], finalAnswer: "**(b)** Correct" },
        },
        {
          id: "olec-u2-ped-q10", difficulty: "foundation", totalMarks: 1,
          stem: "Price rises 10% and quantity demanded falls 5%. Calculate PED.",
          response: { type: "numeric", parts: [{ label: "a", answer: 0.5 }] },
          markscheme: { principles: [{ kind: "principle", name: "PED calc", statement: "%ΔQd / %ΔP." }], steps: [{ reasoning: "PED = 5/10 = 0.5 — inelastic.", marks: 1, markCode: "AO2" }], finalAnswer: "0.5" },
        },
        {
          id: "olec-u2-ped-q11", difficulty: "core", totalMarks: 2,
          stem: "Price falls 20% and quantity demanded rises 10%. (a) Calculate PED. (b) State whether demand is elastic or inelastic.",
          response: { type: "numeric", parts: [{ label: "a", answer: 0.5 }] },
          markscheme: { principles: [{ kind: "principle", name: "PED calc", statement: "%ΔQd / %ΔP." }], steps: [
            { part: "a", reasoning: "PED = 10/20 = 0.5.", marks: 1, markCode: "AO2" },
            { part: "a", reasoning: "PED < 1 so demand is inelastic.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "0.5 — inelastic" },
        },
        {
          id: "olec-u2-ped-q12", difficulty: "core", totalMarks: 2,
          stem: "Price rises 5% and quantity demanded falls 15%. Calculate PED.",
          response: { type: "numeric", parts: [{ label: "a", answer: 3 }] },
          markscheme: { principles: [{ kind: "principle", name: "PED calc", statement: "%ΔQd / %ΔP." }], steps: [
            { reasoning: "PED = 15/5.", marks: 1, markCode: "AO2" },
            { reasoning: "PED = 3 — elastic.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "3" },
        },
        {
          id: "olec-u2-ped-q13", difficulty: "core", totalMarks: 2,
          stem: "Price rises 10% and quantity demanded falls 10%. (a) Calculate PED. (b) What is this type of demand called?",
          response: { type: "numeric", parts: [{ label: "a", answer: 1 }] },
          markscheme: { principles: [{ kind: "principle", name: "PED calc", statement: "%ΔQd / %ΔP." }], steps: [
            { part: "a", reasoning: "PED = 10/10 = 1.", marks: 1, markCode: "AO2" },
            { part: "a", reasoning: "PED = 1 is unit elastic demand.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "1 — unit elastic" },
        },
        {
          id: "olec-u2-ped-q14", difficulty: "core", totalMarks: 2,
          stem: "Explain two determinants of the price elasticity of demand for a good.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "PED determinants", statement: "Factors affecting responsiveness." }], steps: [
            { reasoning: "Any two: availability of substitutes, necessity vs luxury, proportion of income spent, time period.", marks: 1, markCode: "AO1" },
            { reasoning: "Both correctly explained.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "Any two: substitutes, necessity/luxury, income share, time." },
        },
        {
          id: "olec-u2-ped-q15", difficulty: "challenge", totalMarks: 4,
          stem: "A firm faces inelastic demand for its product. Explain what happens to total revenue if the firm raises its price.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "PED and revenue", statement: "Inelastic demand and price rises." }], steps: [
            { reasoning: "Inelastic demand means quantity demanded falls by less than the price rise.", marks: 1, markCode: "AO2" },
            { reasoning: "The higher price on nearly the same quantity raises total revenue.", marks: 1, markCode: "AO2" },
            { reasoning: "Consumers have few substitutes so they keep buying.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Price rise increases total revenue when demand is inelastic." },
        },
        {
          id: "olec-u2-ped-q16", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why the price elasticity of demand for a good is usually higher in the long run than in the short run.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Time and PED", statement: "Long-run responsiveness." }], steps: [
            { reasoning: "In the short run consumers have few alternatives and habits are fixed.", marks: 1, markCode: "AO2" },
            { reasoning: "In the long run consumers can find substitutes or adjust behaviour.", marks: 1, markCode: "AO2" },
            { reasoning: "So quantity demanded responds more strongly to price over time.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "More time allows substitution and adjustment, making demand more elastic." },
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
