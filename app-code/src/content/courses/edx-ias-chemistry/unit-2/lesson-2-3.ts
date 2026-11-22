import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "ediaschem-u2-lesson-2-3",
  code: "2-3",
  title: "Equilibrium and Reaction Rates",
  goal: "I CAN explain dynamic equilibrium, Le Chatelier's principle and factors affecting reaction rate.",
  standards: ["IC2 Inorganic and physical chemistry", "Equilibrium", "Rates"],
  vocabulary: [
    { term: "Dynamic equilibrium", definition: "Forward and reverse rates equal; concentrations constant but reactions continue." },
    { term: "Le Chatelier's principle", definition: "System at equilibrium shifts to oppose imposed change." },
    { term: "Haber process", definition: "N₂ + 3H₂ ⇌ 2NH₃ — industrial ammonia synthesis." },
    { term: "Collision theory", definition: "Reactions occur when particles collide with sufficient energy (Ea) and correct orientation." },
  ],
  concepts: [
    {
      id: "ediaschem-u2-equilibrium",
      title: "Dynamic equilibrium and Le Chatelier",
      skill: "Explain equilibrium, apply Le Chatelier's principle and describe the Haber process.",
      lesson: {
        sections: [
          {
            heading: "Dynamic equilibrium",
            body: "Reached in closed systems when forward rate = reverse rate. Concentrations constant but both reactions continue. Only reversible reactions reach equilibrium. N₂ + 3H₂ ⇌ 2NH₃ is the classic example.",
          },
          {
            heading: "Le Chatelier's principle",
            body: "Change concentration: shift to consume added substance / replace removed. Change pressure: shift toward fewer gas molecules (for N₂+3H₂→2NH₃, higher pressure favours NH₃). Change temperature: shift in endothermic direction if heated; exothermic direction if cooled. Catalysts don't shift equilibrium — speed both directions equally.",
          },
          {
            heading: "Haber process",
            body: "N₂(g) + 3H₂(g) ⇌ 2NH₃(g), ΔH = −92 kJ/mol. Conditions: ~450°C, ~200 atm, Fe catalyst. High pressure favours fewer moles (NH₃); moderate temp balances rate vs yield; catalyst speeds attainment. NH₃ liquefied and separated; unreacted gases recycled.",
          },
        ],
        keyFormulas: [{ name: "Key formula", statement: "N₂ + 3H₂ ⇌ 2NH₃ (ΔH = −92 kJ/mol)" }],
        workedExample: {
          problem: "Predict the effect of increasing pressure on N₂ + 3H₂ ⇌ 2NH₃.",
          solution: "4 mol gas → 2 mol gas; higher pressure shifts equilibrium right, increasing NH₃ yield.",
        },
      },
      questions: [
        {
          id: "ediaschem-eq-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "At dynamic equilibrium, the rates of forward and reverse reactions are:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Forward higher" },
              { id: "b", text: "Reverse higher" },
              { id: "c", text: "Equal" },
              { id: "d", text: "Zero" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Equilibrium", statement: "Forward rate = reverse rate." }],
            steps: [{ reasoning: "Concentrations constant because rates equal.", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** Equal",
          },
        },
        {
          id: "ediaschem-eq-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "State two conditions required for a system to reach dynamic equilibrium.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Equilibrium", statement: "Closed system; reversible reaction." }],
            steps: [
              { reasoning: "Closed system (no substances added/removed).", marks: 1, markCode: "A" },
              { reasoning: "Reversible reaction.", marks: 1, markCode: "A" },
              { reasoning: "Constant temperature.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Closed system + reversible + constant T",
            commonErrors: ["Saying reactions stop at equilibrium."],
          },
        },
        {
          id: "ediaschem-eq-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the effect of increasing temperature on N₂ + 3H₂ ⇌ 2NH₃ (ΔH = −92 kJ/mol).",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Le Chatelier", statement: "Heat is a reactant in exothermic." }],
            steps: [
              { reasoning: "Reaction is exothermic (ΔH negative).", marks: 1, markCode: "M" },
              { reasoning: "Increasing T = adding heat = treating heat as reactant.", marks: 1, markCode: "M" },
              { reasoning: "Equilibrium shifts left (endothermic direction) to absorb heat.", marks: 1, markCode: "A" },
              { reasoning: "NH₃ yield decreases.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Shift left; less NH₃ at higher T",
            commonErrors: ["Saying catalyst shifts equilibrium."],
          },
        },
        {
          id: "ediaschem-eq-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Describe the Haber process and explain the chosen conditions.",
          parts: [
            { label: "a", prompt: "Equation and overall reaction.", marks: 3 },
            { label: "b", prompt: "Conditions used.", marks: 3 },
            { label: "c", prompt: "Why each condition is chosen (Le Chatelier).", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Haber", statement: "N₂+3H₂⇌2NH₃; pressure↑, T compromise, Fe catalyst." }],
            steps: [
              { part: "a", reasoning: "N₂(g) + 3H₂(g) ⇌ 2NH₃(g).", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Exothermic, ΔH = −92 kJ/mol.", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Reversible equilibrium.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "~450°C, ~200 atm, iron catalyst.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "N₂ from air, H₂ from methane reforming.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "NH₃ liquefied and separated; gases recycled.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "High pressure favours fewer gas molecules → more NH₃.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Low T favours yield (exothermic) but slows rate → 450°C compromise.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Catalyst speeds attainment without shifting equilibrium.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Conclude economic/equilibrium reasoning.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "450°C, 200 atm, Fe; compromises rate and yield",
            commonErrors: ["Using low temperature for max yield ignoring rate."],
          },
        },
      ],
    },
    {
      id: "ediaschem-u2-rates",
      title: "Reaction rates",
      skill: "Explain collision theory and factors affecting rate, and interpret rate graphs.",
      lesson: {
        sections: [
          {
            heading: "Collision theory",
            body: "Reactions occur when particles collide with sufficient energy (≥ activation energy) and correct orientation. Rate ∝ collision frequency × fraction with Ea. More collisions or more energy → faster rate.",
          },
          {
            heading: "Factors",
            body: "Concentration/pressure: more particles per volume → more collisions. Surface area: smaller particles → more exposed surface → more collisions. Temperature: higher T → more kinetic energy → more particles exceed Ea (rate roughly doubles per 10°C). Catalyst: provides pathway with lower Ea → more successful collisions.",
          },
          {
            heading: "Rate measurement",
            body: "Measure: mass loss (gas evolved), volume of gas, colour change (disappearing cross), pH change, precipitate formation. Rate = change in quantity/time. Rate curves: steep initially, level off as reactants deplete.",
          },
        ],
        keyFormulas: [{ name: "Key formula", statement: "Rate = Δquantity / Δtime" }],
        workedExample: {
          problem: "Why does powdered marble react faster with acid than large lumps?",
          solution: "Powder has greater surface area → more particles exposed → more frequent collisions with H⁺ → faster rate.",
        },
      },
      questions: [
        {
          id: "ediaschem-rate-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "According to collision theory, reaction rate increases when:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Particles collide less often" },
              { id: "b", text: "Concentration decreases" },
              { id: "c", text: "More collisions have energy ≥ Ea" },
              { id: "d", text: "Temperature decreases" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Collision theory", statement: "Ea + orientation determine success." }],
            steps: [{ reasoning: "Only collisions with enough energy react.", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** More collisions ≥ Ea",
          },
        },
        {
          id: "ediaschem-rate-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "State three factors that increase reaction rate.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Rate factors", statement: "T, concentration, surface area, catalyst." }],
            steps: [
              { reasoning: "Higher temperature (more KE, more Ea collisions).", marks: 1, markCode: "A" },
              { reasoning: "Higher concentration/pressure (more collisions).", marks: 1, markCode: "A" },
              { reasoning: "Greater surface area or catalyst present.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Any three valid factors",
            commonErrors: ["Saying catalyst is consumed."],
          },
        },
        {
          id: "ediaschem-rate-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why increasing temperature increases reaction rate more than expected from collision frequency alone.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Ea distribution", statement: "T increase raises fraction exceeding Ea." }],
            steps: [
              { reasoning: "Higher T → particles move faster → more frequent collisions.", marks: 1, markCode: "M" },
              { reasoning: "More importantly, more particles have energy ≥ Ea (Boltzmann distribution shift).", marks: 1, markCode: "M" },
              { reasoning: "The fraction exceeding Ea increases disproportionately.", marks: 1, markCode: "A" },
              { reasoning: "Hence rate roughly doubles per 10°C rise.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "More particles exceed Ea at higher T",
            commonErrors: ["Only mentioning collision frequency."],
          },
        },
        {
          id: "ediaschem-rate-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Describe how you would investigate the effect of concentration on reaction rate.",
          parts: [
            { label: "a", prompt: "Suggest a suitable reaction and method.", marks: 3 },
            { label: "b", prompt: "Procedure.", marks: 4 },
            { label: "c", prompt: "Expected results and conclusion.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Rate experiment", statement: "Vary one variable; measure rate." }],
            steps: [
              { part: "a", reasoning: "E.g. Na₂S₂O₃ + HCl — measure time for cross to disappear.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Or marble + acid — mass loss or gas volume.", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Suitable measurable rate indicator.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Keep temperature, surface area constant.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Vary concentration of one reactant.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Measure rate (time/volume) for each concentration.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Repeat for reliability.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Higher concentration → faster rate (shorter time/more gas).", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Graph: rate vs concentration → positive correlation.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Link to collision theory.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Vary [reactant], measure rate; higher [ ] → faster",
            commonErrors: ["Not controlling variables."],
          },
        },
      ],
    },
  ],
};
