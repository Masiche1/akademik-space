import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "mypc5-u2-lesson-2-2",
  code: "2-2",
  title: "Reversible Reactions and Energetics",
  goal: "I CAN describe reversible reactions and dynamic equilibrium, interpret energy profiles, and calculate enthalpy changes from bond energies.",
  standards: [
    "MYP Sciences: Matter",
    "Key concept: Change",
    "Criterion A: Knowing and understanding",
  ],
  vocabulary: [
    { term: "Reversible reaction", definition: "Reaction that can proceed in both directions; shown with ⇌; products can revert to reactants." },
    { term: "Dynamic equilibrium", definition: "State in a closed system where forward and reverse rates are equal; concentrations constant but reactions continue." },
    { term: "Le Chatelier's principle", definition: "If a system at equilibrium is disturbed, it shifts to oppose the change." },
    { term: "Exothermic", definition: "Releases energy to surroundings; ΔH negative; products lower in energy than reactants." },
    { term: "Endothermic", definition: "Absorbs energy from surroundings; ΔH positive; products higher in energy than reactants." },
    { term: "Bond energy", definition: "Energy required to break one mole of bonds, or released when one mole forms; used to estimate ΔH." },
  ],
  concepts: [
    {
      id: "mypc5-u2-equilibrium",
      title: "Reversible reactions and equilibrium",
      skill: "Explain dynamic equilibrium and apply Le Chatelier's principle to concentration, pressure and temperature changes.",
      lesson: {
        sections: [
          {
            heading: "Reversible reactions",
            body: "Many reactions are **reversible**, written with **⇌**: N₂ + 3H₂ ⇌ 2NH₃ (Haber process). Forward and reverse reactions continue simultaneously. In a **closed system** they reach **dynamic equilibrium**: rates equal, concentrations constant, but particles still react — it is not static.",
          },
          {
            heading: "Le Chatelier's principle",
            body: "Disturbances shift equilibrium to oppose the change: **increase concentration** of a reactant → shift right (more product); **increase pressure** → shift toward fewer gas moles; **increase temperature** → shift in endothermic direction (absorbs heat). A catalyst speeds both directions equally → equilibrium position unchanged.",
          },
          {
            heading: "Applications",
            body: "Haber process: high pressure (~200 atm), moderate temperature (~450 °C), iron catalyst — balances rate vs yield since reaction is exothermic. Contact process for H₂SO₄ uses V₂O₅ catalyst. Removing product (e.g. NH₃ liquefied) shifts equilibrium right for higher yield.",
          },
        ],
        keyFormulas: [
          { name: "Equilibrium", statement: "Forward rate = reverse rate; concentrations constant" },
          { name: "Le Chatelier", statement: "System shifts to oppose applied change" },
          { name: "Catalyst", statement: "No effect on equilibrium position; speeds both directions" },
        ],
        workedExample: {
          problem: "For N₂ + 3H₂ ⇌ 2NH₃ (exothermic), what happens to equilibrium if temperature is raised?",
          solution: "System opposes the heat increase by shifting left (endothermic direction), decomposing NH₃ — yield of ammonia decreases, though rate increases.",
        },
      },
      questions: [
        {
          id: "mypc5-u2-equilibrium-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "At dynamic equilibrium, which statement is true?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only products exist" },
              { id: "b", text: "All reactions have stopped" },
              { id: "c", text: "Forward and reverse reaction rates are equal" },
              { id: "d", text: "Concentrations are zero" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Dynamic equilibrium", statement: "Equal forward/reverse rates; constant concentrations; reactions continue." },
            ],
            steps: [
              { reasoning: "Equilibrium is dynamic — rates equal but nonzero.", working: "\\text{rates equal}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Forward and reverse rates equal",
            commonErrors: ["Thinking equilibrium means reactions stop."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypc5-u2-equilibrium-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "For N₂ + 3H₂ ⇌ 2NH₃, what happens to the equilibrium position if the pressure is increased?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "No change" },
              { id: "b", text: "Shifts right — 4 moles of gas become 2, reducing pressure" },
              { id: "c", text: "Reaction stops" },
              { id: "d", text: "Shifts left" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Le Chatelier pressure", statement: "Higher pressure shifts toward fewer gas molecules." },
            ],
            steps: [
              { reasoning: "4 mol gas (1+3) → 2 mol gas (2NH₃).", working: "4\\to2", marks: 1, markCode: "M" },
              { reasoning: "Right shift reduces pressure — system opposes increase.", working: "\\text{shift right}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Shifts right toward NH₃",
            commonErrors: ["Counting only product moles instead of both sides."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc5-u2-equilibrium-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Why is a temperature of about 450 °C used in the Haber process even though the reaction is exothermic?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Temperature does not affect the reaction" },
              { id: "b", text: "The reaction only works above 450 °C" },
              { id: "c", text: "Compromise: low temperature favours yield but is too slow; 450 °C gives acceptable rate while keeping reasonable yield" },
              { id: "d", text: "High temperature increases yield" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Rate vs yield", statement: "Exothermic: low T favours yield; high T favours rate — industrial compromise." },
            ],
            steps: [
              { reasoning: "Exothermic → lower T would give more NH₃ (Le Chatelier).", working: "\\text{low T yield}", marks: 1, markCode: "M" },
              { reasoning: "But rate would be too slow at low T.", working: "\\text{rate}", marks: 1, markCode: "M" },
              { reasoning: "450 °C balances acceptable rate and yield.", working: "\\text{compromise}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Compromise between rate and equilibrium yield",
            commonErrors: ["Claiming high temperature favours yield for exothermic reaction."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypc5-u2-equilibrium-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "The contact process makes sulphuric acid: 2SO₂ + O₂ ⇌ 2SO₃ (exothermic).",
          parts: [
            { label: "a", prompt: "Write the equilibrium symbol correctly for this reaction.", marks: 1 },
            { label: "b", prompt: "State three conditions used industrially and justify each briefly.", marks: 3 },
            { label: "c", prompt: "Explain why the catalyst does not change the equilibrium yield.", marks: 2 },
            { label: "d", prompt: "Describe one way the yield of SO₃ can be increased after equilibrium is reached.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Contact process", statement: "Exothermic equilibrium: moderate T, high pressure, V₂O₅ catalyst." },
            ],
            steps: [
              { part: "a", reasoning: "2SO_2 + O_2 \\rightleftharpoons 2SO_3 (⇌ symbol).", working: "2SO_2+O_2\\rightleftharpoons2SO_3", marks: 1, markCode: "M" },
              { part: "b", reasoning: "~450 °C: compromise rate vs yield (exothermic).", working: "\\text{T}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "~1-2 atm pressure: shifts right (3 gas → 2 gas moles).", working: "\\text{P}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "V₂O₅ catalyst: speeds attainment of equilibrium without changing yield.", working: "V_2O_5", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Catalyst lowers E_a equally for forward and reverse reactions.", working: "\\text{equal speeds}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Rates still equal at same position → equilibrium unchanged.", working: "\\text{position same}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Remove SO₃ as it forms (e.g. absorb in concentrated H₂SO₄) → system shifts right to replace it.", working: "\\text{remove product}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Continuous process increases overall yield.", working: "\\text{yield up}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) ⇌ (b) 450 °C compromise, pressure right-shift, V₂O₅ catalyst (c) speeds both directions equally (d) remove SO₃ continuously",
            commonErrors: ["In (c), saying catalysts increase yield."],
            examinerNote: "M1 for (a); M1 M1 A1 for (b); M1 A1 for (c); M1 A1 for (d).",
          },
        },
        {
          id: "mypc5-u2-equilibrium-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "At dynamic equilibrium in a closed system, which statement is always true?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only the products are present" },
              { id: "b", text: "The forward and reverse reaction rates are equal" },
              { id: "c", text: "All chemical reactions have stopped" },
              { id: "d", text: "The concentrations of reactants and products are zero" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Dynamic equilibrium", statement: "Equal forward/reverse rates; constant concentrations; reactions continue." },
            ],
            steps: [
              { reasoning: "Equilibrium is dynamic — rates equal but nonzero.", working: "\\text{rates equal}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Forward and reverse rates are equal",
            commonErrors: ["Thinking equilibrium means reactions stop."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypc5-u2-equilibrium-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "For the reaction N₂ + 3H₂ ⇌ 2NH₃, how many moles of gas are on the reactant side?",
          response: {
            type: "numeric",
            parts: [{ label: "Gas moles", answer: 4, unit: "mol" }],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Gas mole counting", statement: "Count moles of gaseous species on each side to predict pressure effects." },
            ],
            steps: [
              { reasoning: "$1 + 3 = 4$ moles of gas reactants (2 moles gas on product side).", working: "1+3=4", marks: 1, markCode: "B" },
            ],
            finalAnswer: "$4\\ \\text{mol}$ gas",
            commonErrors: ["Counting N₂ as 1 mole only or forgetting H₂ coefficient 3."],
            examinerNote: "B1 for 4.",
          },
        },
        {
          id: "mypc5-u2-equilibrium-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "For N₂ + 3H₂ ⇌ 2NH₃, what happens to the equilibrium position when more N₂ is added?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Shifts left" },
              { id: "b", text: "Shifts right — more NH₃ forms to oppose the added reactant" },
              { id: "c", text: "No change" },
              { id: "d", text: "Equilibrium is destroyed" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Le Chatelier concentration", statement: "Adding reactant shifts equilibrium toward products." },
            ],
            steps: [
              { reasoning: "Extra N₂ increases forward rate temporarily.", working: "\\text{fwd rate}", marks: 1, markCode: "M" },
              { reasoning: "System shifts right to consume added N₂ → more NH₃.", working: "\\text{shift right}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Shifts right toward NH₃",
            commonErrors: ["Saying equilibrium position is unchanged — concentrations shift until rates equal again."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc5-u2-equilibrium-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "For 2SO₂ + O₂ ⇌ 2SO₃, how many moles of gas are on each side of the equation?",
          response: {
            type: "numeric",
            parts: [
              { label: "Reactants", answer: 3, unit: "mol" },
              { label: "Products", answer: 2, unit: "mol" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Gas mole counting", statement: "Sum coefficients of gaseous species on each side." },
            ],
            steps: [
              { part: "Reactants", reasoning: "Reactants: $2 + 1 = 3$ mol gas.", working: "2+1=3", marks: 1, markCode: "M" },
              { part: "Products", reasoning: "Products: $2$ mol gas.", working: "2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "3 mol reactants; 2 mol products",
            commonErrors: ["Counting only one side or ignoring coefficients."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc5-u2-equilibrium-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "A catalyst is added to a reaction at equilibrium. What is the effect on the equilibrium position?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Equilibrium is reached faster so position changes" },
              { id: "b", text: "Shifts toward reactants" },
              { id: "c", text: "No change — the catalyst speeds up forward and reverse rates equally" },
              { id: "d", text: "Shifts toward products" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Catalyst and equilibrium", statement: "Catalyst lowers $E_a$ for both directions equally → position unchanged." },
            ],
            steps: [
              { reasoning: "Catalyst speeds both forward and reverse reactions equally.", working: "\\text{equal}", marks: 1, markCode: "M" },
              { reasoning: "Rates still equal at same concentrations → position unchanged; equilibrium reached faster.", working: "\\text{same position}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "No change in position — reached faster",
            commonErrors: ["Claiming catalysts shift equilibrium toward products."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc5-u2-equilibrium-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "For N₂ + 3H₂ ⇌ 2NH₃, what is the ratio of gas moles on the reactant side to the product side?",
          response: {
            type: "numeric",
            parts: [{ label: "Ratio", answer: 2, unit: "times" }],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Pressure effect", statement: "Higher pressure shifts toward fewer gas moles." },
            ],
            steps: [
              { reasoning: "Reactants $4$ mol gas; products $2$ mol gas → ratio $4:2 = 2:1$.", working: "4:2=2:1", marks: 1, markCode: "M" },
              { reasoning: "Ratio $2$ (reactants have twice the gas moles).", working: "2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2:1$ (or $2$)",
            commonErrors: ["Inverting the ratio → 0.5."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc5-u2-equilibrium-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "The Haber process reaction N₂ + 3H₂ ⇌ 2NH₃ is exothermic. What happens to the equilibrium position and the rate if temperature is increased?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Shifts right and yield increases" },
              { id: "b", text: "Equilibrium shifts left (toward reactants, absorbing heat) and NH₃ yield falls, but the rate increases" },
              { id: "c", text: "No change to position or rate" },
              { id: "d", text: "Reaction stops" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Le Chatelier temperature", statement: "Higher T shifts exothermic equilibrium toward reactants; rate still increases." },
            ],
            steps: [
              { reasoning: "System opposes heat increase → shifts left (endothermic direction).", working: "\\text{left}", marks: 1, markCode: "M" },
              { reasoning: "Yield of NH₃ decreases with higher T for exothermic reaction.", working: "\\text{yield down}", marks: 1, markCode: "M" },
              { reasoning: "But collision frequency/energy rises → rate increases.", working: "\\text{rate up}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Shifts left, yield falls, rate rises",
            commonErrors: ["Claiming higher T increases yield for exothermic reaction."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypc5-u2-equilibrium-q12",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "For two reactions: (1) N₂ + 3H₂ ⇌ 2NH₃ and (2) N₂ + O₂ ⇌ 2NO. Count the total moles of gas on each side for BOTH reactions.",
          response: {
            type: "numeric",
            unordered: true,
            parts: [
              { label: "Rxn1 reactants", answer: 4, unit: "mol" },
              { label: "Rxn2 products", answer: 2, unit: "mol" },
              { label: "Rxn2 reactants", answer: 2, unit: "mol" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Gas mole counting", statement: "Sum gas coefficients on each side." },
            ],
            steps: [
              { part: "Rxn1 reactants", reasoning: "Rxn 1 reactants: $1+3=4$ mol gas.", working: "4", marks: 1, markCode: "M" },
              { part: "Rxn2 products", reasoning: "Rxn 2 products: $2$ mol NO gas.", working: "2", marks: 1, markCode: "M" },
              { part: "Rxn2 reactants", reasoning: "Rxn 2 reactants: $1+1=2$ mol gas.", working: "2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Rxn1 reactants 4; Rxn2 reactants 2; Rxn2 products 2",
            commonErrors: ["Forgetting coefficients multiply moles."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypc5-u2-equilibrium-q13",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "In the Haber process, ammonia is liquefied and removed from the reaction mixture as it forms. Explain the effect on equilibrium yield.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Yield decreases because product is removed" },
              { id: "b", text: "Reaction stops immediately" },
              { id: "c", text: "No effect on equilibrium" },
              { id: "d", text: "Removing NH₃ shifts equilibrium right to replace it → higher overall yield" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Le Chatelier product removal", statement: "Removing product shifts equilibrium toward products." },
            ],
            steps: [
              { reasoning: "Lower [NH₃] → reverse rate decreases temporarily.", working: "\\text{rev rate}", marks: 1, markCode: "M" },
              { reasoning: "System shifts right to replace removed product.", working: "\\text{shift right}", marks: 1, markCode: "M" },
              { reasoning: "Continuous removal → higher overall yield of NH₃.", working: "\\text{yield}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Shifts right → higher yield",
            commonErrors: ["Saying removal stops the reaction."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypc5-u2-equilibrium-q14",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain why 'dynamic equilibrium' is a misleading name if interpreted as 'nothing is happening'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Dynamic equilibrium", statement: "Forward and reverse reactions continue at equal rates." },
            ],
            steps: [
              { reasoning: "At equilibrium, reactants are still converting to products AND products back to reactants simultaneously.", working: "\\text{both ways}", marks: 1, markCode: "M" },
              { reasoning: "The rates are equal → net concentrations stay constant → appears static.", working: "\\text{constant}", marks: 1, markCode: "M" },
              { reasoning: "'Dynamic' because molecular processes continue; 'equilibrium' because rates balance.", working: "\\text{dynamic}", marks: 1, markCode: "A" },
              { reasoning: "Only in a closed system with constant conditions can equilibrium be maintained.", working: "\\text{closed}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Reactions continue at equal rates — constant concentrations but ongoing molecular change",
            commonErrors: ["Saying all reactions stop at equilibrium."],
            examinerNote: "M1 M1 A1 A1.",
          },
        },
        {
          id: "mypc5-u2-equilibrium-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Apply Le Chatelier's principle to explain each condition used in the Haber process: ~450 °C, ~200 atm pressure, iron catalyst.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Haber conditions", statement: "Exothermic equilibrium: moderate T compromise, high P shifts right, catalyst speeds attainment." },
            ],
            steps: [
              { reasoning: "~450 °C: compromise — low T would favour yield (exothermic) but rate too slow; 450 °C gives acceptable rate with reasonable yield.", working: "\\text{compromise}", marks: 1, markCode: "M" },
              { reasoning: "~200 atm: shifts equilibrium right since 4 mol gas → 2 mol gas.", working: "\\text{pressure}", marks: 1, markCode: "M" },
              { reasoning: "Iron catalyst: speeds attainment of equilibrium without changing position/yield.", working: "\\text{catalyst}", marks: 1, markCode: "A" },
              { reasoning: "All three conditions justified by Le Chatelier/kinetics trade-offs.", working: "\\text{justified}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "450 °C compromise, high pressure right-shift, Fe catalyst for rate",
            commonErrors: ["Claiming high temperature increases NH₃ yield."],
            examinerNote: "M1 M1 A1 A1.",
          },
        },
        {
          id: "mypc5-u2-equilibrium-q16",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A chemical plant runs the exothermic reaction A + B ⇌ C + D. Evaluate the effects of (i) doubling pressure, (ii) raising temperature and (iii) adding a catalyst on the equilibrium yield of D.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Le Chatelier", statement: "System shifts to oppose changes in concentration, pressure, temperature." },
            ],
            steps: [
              { reasoning: "(i) Pressure effect depends on gas moles — if equal moles each side, no shift; if fewer product gas moles, shifts right.", working: "\\text{P}", marks: 1, markCode: "M" },
              { reasoning: "(ii) Raising T for exothermic reaction shifts equilibrium left → yield of D decreases (though rate increases).", working: "\\text{T}", marks: 1, markCode: "M" },
              { reasoning: "(iii) Catalyst: no effect on equilibrium position/yield; only speeds attainment.", working: "\\text{cat}", marks: 1, markCode: "M" },
              { reasoning: "Evaluation: temperature lowers yield but may be needed for rate — industrial compromise.", working: "\\text{compromise}", marks: 1, markCode: "A" },
              { reasoning: "Pressure effect correctly qualified by mole counting.", working: "\\text{moles}", marks: 1, markCode: "A" },
              { reasoning: "Overall balanced judgement of each factor's effect on yield.", working: "\\text{balance}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Pressure: depends on gas moles; T: lowers yield (exo); catalyst: no yield change",
            commonErrors: ["Claiming catalyst increases yield."],
            examinerNote: "M1 M1 M1 A1 A1 A1.",
          },
        },
      ],
    },
    {
      id: "mypc5-u2-energetics",
      title: "Enthalpy changes and energy profiles",
      skill: "Interpret exothermic/endothermic reactions, energy profiles and calculate ΔH using bond energies.",
      lesson: {
        sections: [
          {
            heading: "Exothermic and endothermic",
            body: "**Exothermic** (ΔH < 0): releases heat to surroundings — combustion, respiration, neutralisation; feels warm. **Endothermic** (ΔH > 0): absorbs heat — thermal decomposition of CaCO₃, photosynthesis; surroundings cool. On energy profiles: exothermic products sit **below** reactants; endothermic products sit **above**.",
          },
          {
            heading: "Calculating ΔH from bond energies",
            body: "ΔH = (energy to break bonds in reactants) − (energy released forming bonds in products). Breaking bonds **costs** energy (+); forming bonds **releases** energy (−). Net: if more energy released forming than needed to break → exothermic (ΔH < 0). Example: breaking 1 mol H–H (436) and 1 mol Cl–Cl (242) costs 678; forming 2 mol H–Cl releases 2×431 = 862 → ΔH = 678 − 862 = **−184 kJ/mol**.",
          },
          {
            heading: "Uses of enthalpy data",
            body: "Bond energies give **estimates** (averages) — actual ΔH differs slightly for specific molecules. ΔH values let chemists compare fuels: fuels with more negative ΔH per gram release more energy. Standard conditions: 298 K, 1 atm (or 100 kPa), 1 mol/dm³ solutions.",
          },
        ],
        keyFormulas: [
          { name: "ΔH sign", statement: "Exothermic < 0; endothermic > 0" },
          { name: "ΔH calc", statement: "ΔH = Σ(bonds broken) - Σ(bonds formed)" },
          { name: "Profile", statement: "Exothermic products below reactants; endothermic above" },
        ],
        workedExample: {
          problem: "Use bond energies to estimate ΔH for H₂ + Cl₂ → 2HCl. Bond energies: H–H 436, Cl–Cl 242, H–Cl 431 kJ/mol.",
          solution: "Broken: 436 + 242 = 678. Formed: 2 × 431 = 862. ΔH = 678 − 862 = −184 kJ/mol (exothermic).",
        },
      },
      questions: [
        {
          id: "mypc5-u2-energetics-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which change is exothermic?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Melting ice" },
              { id: "b", text: "Photosynthesis" },
              { id: "c", text: "Thermal decomposition of calcium carbonate" },
              { id: "d", text: "Combustion of methane" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Exothermic", statement: "Releases energy; ΔH < 0." },
            ],
            steps: [
              { reasoning: "Combustion releases heat — exothermic.", working: "\\Delta H<0", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Combustion of methane",
            commonErrors: ["Confusing photosynthesis (endothermic) with respiration."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypc5-u2-energetics-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "In calculating ΔH from bond energies, why is energy 'added' for bonds broken?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Breaking bonds releases energy" },
              { id: "b", text: "Breaking bonds requires energy input, so it is counted as positive; forming bonds releases energy, counted as negative" },
              { id: "c", text: "All bond energies are negative" },
              { id: "d", text: "Only products need bond energies" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Bond energy signs", statement: "Break = +E (cost); form = −E (release)." },
            ],
            steps: [
              { reasoning: "Bond breaking is endothermic — energy absorbed.", working: "+E", marks: 1, markCode: "M" },
              { reasoning: "Bond forming releases energy — subtracted in calculation.", working: "-E", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Breaking costs energy; forming releases it",
            commonErrors: ["Adding both broken and formed energies without sign."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc5-u2-energetics-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "For the reaction CH₄ + 2O₂ → CO₂ + 2H₂O, use these bond energies (kJ/mol): C–H 413, O=O 498, C=O 799, O–H 463. Bonds in CH₄: 4×C–H; O₂: 2×O=O; CO₂: 2×C=O; H₂O: 2×O–H each. Estimate ΔH.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Broken: 4(413)+2(498)=2648; formed: 2(799)+4(463)=3450; ΔH = −802 kJ/mol" },
              { id: "b", text: "ΔH = +3450 kJ/mol" },
              { id: "c", text: "ΔH = +802 kJ/mol" },
              { id: "d", text: "ΔH = −2648 kJ/mol" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "ΔH = broken − formed", statement: "Sum bonds broken in reactants minus bonds formed in products." },
            ],
            steps: [
              { reasoning: "Broken: 4×413 + 2×498 = 1652 + 996 = 2648 kJ.", working: "2648", marks: 1, markCode: "M" },
              { reasoning: "Formed: 2×799 + 4×463 = 1598 + 1852 = 3450 kJ.", working: "3450", marks: 1, markCode: "M" },
              { reasoning: "ΔH = 2648 − 3450 = −802 kJ/mol (exothermic).", working: "2648-3450=-802", marks: 1, markCode: "A" },
            ],
            finalAnswer: "ΔH ≈ −802 kJ/mol",
            commonErrors: ["Reversing the subtraction → positive value."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypc5-u2-energetics-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A chemist compares two fuels using bond-energy data and calorimetry.",
          parts: [
            { label: "a", prompt: "Define exothermic and endothermic reactions with respect to energy transfer.", marks: 2 },
            { label: "b", prompt: "Explain why bond-energy calculations only give an estimate of ΔH.", marks: 2 },
            { label: "c", prompt: "Calculate ΔH for H₂ + Cl₂ → 2HCl using bond energies H–H 436, Cl–Cl 242, H–Cl 431 kJ/mol.", marks: 2 },
            { label: "d", prompt: "Evaluate why a fuel with a more negative ΔH per gram is preferred for heating, mentioning one drawback.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Enthalpy", statement: "ΔH = heat change at constant pressure; sign gives direction." },
            ],
            steps: [
              { part: "a", reasoning: "Exothermic: energy released to surroundings, ΔH < 0; endothermic: energy absorbed, ΔH > 0.", working: "\\Delta H\\lessgtr0", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Both definitions with correct signs.", working: "\\text{defined}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Bond energies are average values across many compounds — actual bond strengths vary by molecule/environment.", working: "\\text{averages}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Hence estimate not exact ΔH.", working: "\\text{estimate}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Broken: 436 + 242 = 678; formed: 2 × 431 = 862.", working: "678;862", marks: 1, markCode: "M" },
              { part: "c", reasoning: "ΔH = 678 − 862 = −184 kJ/mol.", working: "678-862=-184", marks: 1, markCode: "A" },
              { part: "d", reasoning: "More negative ΔH per gram = more heat released per unit mass → efficient heating.", working: "\\text{efficiency}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Drawback: high energy density may mean flammability/storage hazards or incomplete combustion pollutants (CO, soot).", working: "\\text{hazards}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) exo releases/endo absorbs (b) average bond energies (c) −184 kJ/mol (d) efficient but hazardous combustion products",
            commonErrors: ["In (c), forgetting to double H–Cl bond energy for 2HCl."],
            examinerNote: "M1 A1 for (a); M1 A1 for (b); M1 A1 for (c); M1 A1 for (d).",
          },
        },
        {
          id: "mypc5-u2-energetics-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which statement describes an exothermic reaction?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The reaction only occurs when heated" },
              { id: "b", text: "Energy is released to the surroundings and ΔH is negative" },
              { id: "c", text: "Energy is absorbed from the surroundings and ΔH is positive" },
              { id: "d", text: "No energy change occurs" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Exothermic", statement: "Releases energy; $\\Delta H < 0$." },
            ],
            steps: [
              { reasoning: "Exothermic = heat out = negative $\\Delta H$.", working: "\\Delta H<0", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Releases energy, $\\Delta H < 0$",
            commonErrors: ["Confusing exothermic with endothermic."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypc5-u2-energetics-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "For a reaction, products have energy 80 kJ and reactants have energy 120 kJ. What is ΔH?",
          response: {
            type: "numeric",
            parts: [{ label: "ΔH", answer: -40, unit: "kJ" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "ΔH", statement: "$\\Delta H = H_{products} - H_{reactants}$." },
            ],
            steps: [
              { reasoning: "$\\Delta H = 80 - 120 = -40$ kJ — exothermic.", working: "80-120=-40", marks: 1, markCode: "B" },
            ],
            finalAnswer: "$\\Delta H = -40\\ \\text{kJ}$",
            commonErrors: ["Reversing the subtraction → +40."],
            examinerNote: "B1 for −40 kJ.",
          },
        },
        {
          id: "mypc5-u2-energetics-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why does breaking chemical bonds require an input of energy?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Breaking bonds releases energy" },
              { id: "b", text: "Bond breaking is endothermic — energy must be supplied to overcome the attractive forces holding atoms together" },
              { id: "c", text: "Bonds break spontaneously" },
              { id: "d", text: "Only forming bonds needs energy" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Bond energy signs", statement: "Break = +E (cost); form = −E (release)." },
            ],
            steps: [
              { reasoning: "Overcoming attractive forces between bonded atoms requires energy input.", working: "+E", marks: 1, markCode: "M" },
              { reasoning: "Conversely, forming bonds releases energy — attractive forces reform.", working: "-E", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Bond breaking is endothermic — energy input needed",
            commonErrors: ["Saying breaking bonds releases energy."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc5-u2-energetics-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "In a reaction, the total energy needed to break bonds is 500 kJ and the energy released forming bonds is 620 kJ. Calculate ΔH.",
          response: {
            type: "numeric",
            parts: [{ label: "ΔH", answer: -120, unit: "kJ" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "ΔH calc", statement: "$\\Delta H = E_{broken} - E_{formed}$." },
            ],
            steps: [
              { reasoning: "$\\Delta H = 500 - 620$.", working: "500-620", marks: 1, markCode: "M" },
              { reasoning: "$\\Delta H = -120$ kJ — exothermic since more energy released than used.", working: "-120", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\Delta H = -120\\ \\text{kJ}$",
            commonErrors: ["Adding instead of subtracting → +1120."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc5-u2-energetics-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "How are the reactant and product energy levels arranged on the profile diagram of an endothermic reaction?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Both are at the same level" },
              { id: "b", text: "Products are at a higher energy level than reactants" },
              { id: "c", text: "Products are at a lower energy level than reactants" },
              { id: "d", text: "Reactants are at the peak" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Endothermic profile", statement: "Products above reactants; $\\Delta H > 0$." },
            ],
            steps: [
              { reasoning: "Endothermic absorbs energy → products store more energy.", working: "\\Delta H>0", marks: 1, markCode: "M" },
              { reasoning: "Higher product level on profile = positive $\\Delta H$.", working: "\\text{higher}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Products higher than reactants",
            commonErrors: ["Reversing the levels — that's exothermic."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc5-u2-energetics-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "For an exothermic reaction, where does the energy for bond breaking come from?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Energy comes from the products" },
              { id: "b", text: "From the catalyst only" },
              { id: "c", text: "Initially from the surroundings/collision energy; overall energy is released when new bonds form" },
              { id: "d", text: "No energy is needed at all" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Energy source", statement: "Breaking bonds absorbs energy; forming bonds releases more → net exothermic." },
            ],
            steps: [
              { reasoning: "Activation energy supplied by collisions/heating initiates bond breaking.", working: "E_a", marks: 1, markCode: "M" },
              { reasoning: "New bond formation releases more energy than was needed → net release.", working: "\\text{net}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Collision/thermal energy starts it; bond formation releases more overall",
            commonErrors: ["Saying no energy is needed — $E_a$ must be overcome."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc5-u2-energetics-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Using bond energies (kJ/mol): H–H 436, O=O 498, O–H 463, estimate ΔH for 2H₂ + O₂ → 2H₂O. (Each H₂O has 2 O–H bonds.) Give the energy to break bonds, energy released forming bonds, and ΔH.",
          response: {
            type: "numeric",
            parts: [
              { label: "Broken", answer: 1370, unit: "kJ" },
              { label: "Formed", answer: 1852, unit: "kJ" },
              { label: "ΔH", answer: -482, unit: "kJ" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "ΔH = broken − formed", statement: "Sum bond energies broken minus formed." },
            ],
            steps: [
              { part: "Broken", reasoning: "Broken: $2 \\times 436 + 498 = 1370$ kJ.", working: "1370", marks: 1, markCode: "M" },
              { part: "Formed", reasoning: "Formed: $4 \\times 463 = 1852$ kJ (2 H₂O × 2 O–H bonds).", working: "1852", marks: 1, markCode: "M" },
              { part: "ΔH", reasoning: "$\\Delta H = 1370 - 1852 = -482$ kJ — exothermic.", working: "-482", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Broken 1370, formed 1852 kJ; $\\Delta H = -482$ kJ",
            commonErrors: ["Using 2 O–H bonds instead of 4 for 2H₂O; reversing subtraction sign."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypc5-u2-energetics-q12",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Bond energies (kJ/mol): C–H 413, Cl–Cl 242, C–Cl 327, H–Cl 432. For CH₄ + Cl₂ → CH₃Cl + HCl (1 C–H broken, 1 Cl–Cl broken, 1 C–Cl and 1 H–Cl formed), estimate ΔH.",
          response: {
            type: "numeric",
            parts: [{ label: "ΔH", answer: -104, unit: "kJ", tolerance: 1 }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "ΔH calc", statement: "$\\Delta H = E_{broken} - E_{formed}$." },
            ],
            steps: [
              { reasoning: "Broken: C–H 413 + Cl–Cl 242 = 655 kJ.", working: "413+242=655", marks: 1, markCode: "M" },
              { reasoning: "Formed: C–Cl 327 + H–Cl 432 (H–Cl ≈ 432 kJ/mol) = 759 kJ.", working: "327+432=759", marks: 1, markCode: "M" },
              { reasoning: "$\\Delta H = 655 - 759 = -104$ kJ (accept $\\approx -100$ to $-105$).", working: "655-759", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\Delta H \\approx -104\\ \\text{kJ}$ (exothermic)",
            commonErrors: ["Forgetting H–Cl bond energy must be supplied/estimated; sign reversal."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypc5-u2-energetics-q13",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Why do bond-energy calculations only give an estimate of ΔH rather than the exact value?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Bond energies are always exact" },
              { id: "b", text: "Bond energies are average values — actual bond strengths vary between different molecules and environments" },
              { id: "c", text: "The calculation ignores temperature" },
              { id: "d", text: "Only exothermic reactions can be estimated" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Bond energy averages", statement: "Tabulated bond energies are mean values across compounds." },
            ],
            steps: [
              { reasoning: "A C–H bond in methane differs slightly from C–H in other molecules.", working: "\\text{averages}", marks: 1, markCode: "M" },
              { reasoning: "Environment/state (gas vs liquid) and conditions also affect actual $\\Delta H$.", working: "\\text{conditions}", marks: 1, markCode: "M" },
              { reasoning: "Hence estimates — good for comparison, not exact measurement.", working: "\\text{estimate}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Bond energies are averages → approximate $\\Delta H$",
            commonErrors: ["Claiming bond-energy $\\Delta H$ is exact."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypc5-u2-energetics-q14",
          difficulty: "core",
          totalMarks: 4,
          stem: "Describe the energy profile diagram for an exothermic reaction, including the positions of reactants, products, the peak and the meaning of $E_a$ and $\\Delta H$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Energy profile", statement: "Exothermic: products below reactants; peak = transition state at $E_a$." },
            ],
            steps: [
              { reasoning: "Reactants drawn at higher energy level; products at lower level.", working: "\\text{products down}", marks: 1, markCode: "M" },
              { reasoning: "Peak between them = transition state; height above reactants = $E_a$.", working: "\\text{peak}", marks: 1, markCode: "M" },
              { reasoning: "$\\Delta H = H_{products} - H_{reactants} < 0$ — negative for exothermic.", working: "\\Delta H<0", marks: 1, markCode: "A" },
              { reasoning: "Catalyst would lower the peak without changing reactant/product levels.", working: "\\text{catalyst}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Products below reactants; peak = $E_a$; $\\Delta H < 0$",
            commonErrors: ["Swapping $E_a$ and $\\Delta H$ labels."],
            examinerNote: "M1 M1 A1 A1.",
          },
        },
        {
          id: "mypc5-u2-energetics-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Two fuels release energy on combustion: fuel X has $\\Delta H = -800$ kJ/mol and fuel Y has $\\Delta H = -1200$ kJ/mol. Explain which fuel releases more energy per mole and what other factor matters when comparing fuels for heating.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Fuel comparison", statement: "More negative $\\Delta H$ per mole → more energy released; per gram matters practically." },
            ],
            steps: [
              { reasoning: "Fuel Y releases more energy per mole — $\\Delta H$ more negative ($-1200$ vs $-800$ kJ/mol).", working: "\\text{Y}", marks: 1, markCode: "M" },
              { reasoning: "But fuels are compared per unit mass for heating — molar masses differ.", working: "\\text{per gram}", marks: 1, markCode: "M" },
              { reasoning: "Energy per gram = $\\Delta H$ ÷ molar mass — the relevant comparison for fuel tanks.", working: "\\text{per gram}", marks: 1, markCode: "A" },
              { reasoning: "Other factors: cost, availability, pollution (CO, soot), storage.", working: "\\text{factors}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Y per mole; compare per gram via $\\Delta H$/molar mass for practical use",
            commonErrors: ["Ignoring molar mass — comparing only per mole."],
            examinerNote: "M1 M1 A1 A1.",
          },
        },
        {
          id: "mypc5-u2-energetics-q16",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Evaluate the use of bond-energy calculations versus direct calorimetry for determining the enthalpy change of a reaction.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "comparison", name: "Bond energy vs calorimetry", statement: "Bond energies give quick estimates; calorimetry measures actual $\\Delta H$." },
            ],
            steps: [
              { reasoning: "Bond-energy method: fast, uses tabulated data, no experiment needed — good for predictions/comparisons.", working: "\\text{fast}", marks: 1, markCode: "M" },
              { reasoning: "But gives only estimates since bond energies are averages across compounds.", working: "\\text{estimate}", marks: 1, markCode: "M" },
              { reasoning: "Calorimetry: measures real heat change under controlled conditions → accurate $\\Delta H$.", working: "\\text{calorimetry}", marks: 1, markCode: "M" },
              { reasoning: "But requires apparatus, careful insulation, and only works for reactions that can be performed safely.", working: "\\text{limitations}", marks: 1, markCode: "A" },
              { reasoning: "Bond energies may not exist for all bonds/types (e.g. some complex molecules).", working: "\\text{data}", marks: 1, markCode: "A" },
              { reasoning: "Overall: complementary — estimates for planning, calorimetry for verification.", working: "\\text{complementary}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Bond energies: quick estimates; calorimetry: accurate measurement — complementary",
            commonErrors: ["One-sided comparison with no evaluation."],
            examinerNote: "M1 M1 M1 A1 A1 A1.",
          },
        },
      ],
    },
  ],
};
