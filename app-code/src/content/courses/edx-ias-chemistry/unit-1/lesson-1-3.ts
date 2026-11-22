import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "ediaschem-u1-lesson-1-3",
  code: "1-3",
  title: "Stoichiometry and Energetics",
  goal: "I CAN perform mole calculations, balance equations and describe exothermic and endothermic reactions.",
  standards: ["IC1 Principles of chemistry", "Stoichiometry", "Energetics"],
  vocabulary: [
    { term: "Mole", definition: "Amount of substance containing 6.02×10²³ particles (Avogadro's number)." },
    { term: "Molar mass", definition: "Mass of one mole of a substance in g/mol." },
    { term: "Exothermic / endothermic", definition: "Releases heat to surroundings / absorbs heat from surroundings." },
    { term: "Enthalpy change (ΔH)", definition: "Heat energy change at constant pressure, in kJ/mol." },
  ],
  concepts: [
    {
      id: "ediaschem-u1-moles",
      title: "The mole and stoichiometry",
      skill: "Calculate moles, mass, volume and perform reacting-mass calculations.",
      lesson: {
        sections: [
          {
            heading: "The mole",
            body: "n = N/N_A = m/M_r = V/24 (for gases at RTP). Molar mass M_r = sum of relative atomic masses. Avogadro constant = 6.02×10²³ mol⁻¹. At RTP (25°C, 1 atm) 1 mole of any gas occupies 24 dm³.",
          },
          {
            heading: "Balanced equations",
            body: "Coefficients give mole ratios. E.g. 2H₂ + O₂ → 2H₂O: 2 mol H₂ reacts with 1 mol O₂ to form 2 mol H₂O. Use ratios for all calculations.",
          },
          {
            heading: "Calculations",
            body: "Method: balance equation → convert given mass to moles → apply ratio → convert back to required unit. Limiting reagent: runs out first, determines product amount.",
          },
        ],
        keyFormulas: [{ name: "Key formula", statement: "n = m/M_r" }, { name: "Key formula", statement: "n = V/24 dm³ (gas at RTP)" }, { name: "Key formula", statement: "N = n × 6.02×10²³" }],
        workedExample: {
          problem: "What mass of water is produced when 4 g of hydrogen burns completely? (H₂ + ½O₂ → H₂O)",
          solution: "n(H₂) = 4/2 = 2 mol. Ratio 1:1 → n(H₂O) = 2 mol. M(H₂O)=18 → mass = 2×18 = 36 g.",
        },
      },
      questions: [
        {
          id: "ediaschem-mole-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many moles are in 36 g of water (M_r = 18)?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "2" },
              { id: "b", text: "1" },
              { id: "c", text: "18" },
              { id: "d", text: "0.5" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Mole", statement: "n = m/M_r." }],
            steps: [{ reasoning: "36/18 = 2 mol.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** 2",
          },
        },
        {
          id: "ediaschem-mole-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Calculate the volume of 2 moles of oxygen gas at RTP.",
          response: { type: "numeric", parts: [{ label: "Answer", answer: 48, tolerance: 0.1, unit: "dm³" }] },
          markscheme: {
            principles: [{ kind: "definition", name: "Gas volume", statement: "1 mol gas = 24 dm³ at RTP." }],
            steps: [
              { reasoning: "V = n × 24.", marks: 1, markCode: "M" },
              { reasoning: "V = 2 × 24 = 48 dm³.", marks: 1, markCode: "M" },
              { reasoning: "State RTP assumption.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "48 dm³",
            commonErrors: ["Forgetting RTP conditions."],
          },
        },
        {
          id: "ediaschem-mole-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "In the reaction 2H₂ + O₂ → 2H₂O, calculate the mass of water produced from 8 g of hydrogen.",
          response: { type: "numeric", parts: [{ label: "Answer", answer: 72, tolerance: 0.1, unit: "g" }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Stoichiometry", statement: "Mole ratio from balanced equation." }],
            steps: [
              { reasoning: "n(H₂) = 8/2 = 4 mol.", marks: 1, markCode: "M" },
              { reasoning: "Ratio 2H₂ : 2H₂O → n(H₂O) = 4 mol.", marks: 1, markCode: "M" },
              { reasoning: "Mass = 4 × 18 = 72 g.", marks: 1, markCode: "M" },
              { reasoning: "Final answer.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "72 g",
            commonErrors: ["Using wrong mole ratio."],
          },
        },
        {
          id: "ediaschem-mole-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "For the reaction CaCO₃ → CaO + CO₂, calculate the mass of CaO produced from 20 g CaCO₃ (M_r: CaCO₃=100, CaO=56).",
          parts: [
            { label: "a", prompt: "Calculate moles of CaCO₃.", marks: 3 },
            { label: "b", prompt: "Apply mole ratio to find moles of CaO.", marks: 3 },
            { label: "c", prompt: "Calculate mass of CaO.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Mole calc", statement: "n=m/M; ratio 1:1." }],
            steps: [
              { part: "a", reasoning: "n(CaCO₃) = 20/100 = 0.2 mol.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Use M_r = 100.", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Answer 0.2 mol.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Equation ratio CaCO₃ : CaO = 1:1.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "n(CaO) = 0.2 mol.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State ratio application.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "mass = n × M_r = 0.2 × 56.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "= 11.2 g.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Units correct.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Final answer.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "11.2 g CaO",
            commonErrors: ["Using CaCO₃ M_r for CaO."],
          },
        },
      ],
    },
    {
      id: "ediaschem-u1-energetics",
      title: "Energetics",
      skill: "Distinguish exothermic and endothermic reactions and interpret energy level diagrams.",
      lesson: {
        sections: [
          {
            heading: "Exothermic reactions",
            body: "Release heat to surroundings (ΔH negative). Products have lower energy than reactants. Examples: combustion, respiration, neutralisation, rusting. Temperature of surroundings rises.",
          },
          {
            heading: "Endothermic reactions",
            body: "Absorb heat from surroundings (ΔH positive). Products higher energy than reactants. Examples: thermal decomposition of CaCO₃, photosynthesis, dissolving NH₄NO₃. Temperature falls.",
          },
          {
            heading: "Energy level diagrams",
            body: "Exothermic: products below reactants, arrow down labelled ΔH. Endothermic: products above reactants, arrow up. Activation energy: peak height — minimum energy for reaction to occur; catalyst lowers it.",
          },
        ],
        keyFormulas: [{ name: "Key formula", statement: "ΔH < 0 exothermic; ΔH > 0 endothermic" }],
        workedExample: {
          problem: "Classify photosynthesis and explain using an energy diagram.",
          solution: "Endothermic — absorbs light energy; products (glucose + O₂) store more energy than reactants (CO₂ + H₂O); ΔH positive.",
        },
      },
      questions: [
        {
          id: "ediaschem-energy-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which reaction is exothermic?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Dissolving ammonium nitrate" },
              { id: "b", text: "Combustion of methane" },
              { id: "c", text: "Photosynthesis" },
              { id: "d", text: "Thermal decomposition of limestone" },
            ],
            borrectChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Exothermic", statement: "Releases heat; ΔH < 0." }],
            steps: [{ reasoning: "Combustion releases energy.", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** Combustion of methane",
          },
        },
        {
          id: "ediaschem-energy-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Define exothermic reaction and state the sign of ΔH.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Exothermic", statement: "Heat released; ΔH negative." }],
            steps: [
              { reasoning: "Releases heat energy to surroundings.", marks: 1, markCode: "A" },
              { reasoning: "ΔH is negative.", marks: 1, markCode: "A" },
              { reasoning: "Products lower energy than reactants.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Heat released; ΔH < 0",
            commonErrors: ["Confusing sign convention."],
          },
        },
        {
          id: "ediaschem-energy-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why a catalyst increases the rate of reaction without changing ΔH.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Catalyst", statement: "Lowers activation energy." }],
            steps: [
              { reasoning: "Catalyst provides alternative pathway with lower activation energy.", marks: 1, markCode: "M" },
              { reasoning: "More particles have sufficient energy → more successful collisions.", marks: 1, markCode: "M" },
              { reasoning: "ΔH depends only on reactant/product energies — unchanged.", marks: 1, markCode: "A" },
              { reasoning: "Conclude.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Lowers Ea; ΔH unchanged",
            commonErrors: ["Saying catalyst is consumed."],
          },
        },
        {
          id: "ediaschem-energy-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Compare exothermic and endothermic reactions.",
          parts: [
            { label: "a", prompt: "Define each and state ΔH sign.", marks: 3 },
            { label: "b", prompt: "Describe energy level diagrams for each.", marks: 4 },
            { label: "c", prompt: "Give two examples of each.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Exo vs endo", statement: "ΔH sign, energy diagram, examples." }],
            steps: [
              { part: "a", reasoning: "Exothermic: releases heat, ΔH < 0.", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Endothermic: absorbs heat, ΔH > 0.", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Both involve activation energy.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Exothermic: products below reactants, ΔH arrow down.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Endothermic: products above reactants, ΔH arrow up.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Both show Ea peak.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Clear diagrams described.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Exothermic: combustion, neutralisation (any two).", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Endothermic: photosynthesis, thermal decomposition (any two).", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Conclude.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "ΔH<0 exo, ΔH>0 endo; products lower/higher",
            commonErrors: ["Reversing ΔH sign."],
          },
        },
      ],
    },
  ],
};
