import type { Lesson } from "../../../types.ts";

export const lesson42: Lesson = {
  id: "ech11-u4-lesson-4-2",
  code: "4-2",
  title: "Investigating Equilibrium and Rates",
  goal: "I CAN investigate equilibrium shifts and measure reaction rates quantitatively.",
  standards: ["Edexcel IGCSE Chemistry 4CH1 — Investigative Skills"],
  vocabulary: [
    {
      term: "Dynamic equilibrium",
      definition: "Forward and reverse rates equal — concentrations constant.",
    },
    {
      term: "Le Chatelier's principle",
      definition:
        "System opposes changes to concentration, pressure, temperature.",
    },
    {
      term: "Rate equation",
      definition: "Rate depends on concentration^order × rate constant.",
    },
    {
      term: "Initial rate",
      definition: "Rate at start — measured before reactants deplete.",
    },
  ],
  concepts: [
    {
      id: "ech11-u4-equilibrium-exp",
      title: "Equilibrium Experiments",
      skill: "Investigate equilibrium shifts using observable indicators.",
      lesson: {
        sections: [
          {
            heading: "Observable equilibria",
            body: "**Cobalt chloride**: [Co(H₂O)₆]²⁺ pink ⇌ [CoCl₄]²⁻ blue + 6H₂O. Add water → pink; add concentrated HCl → blue; heat → blue; cool → pink. Demonstrates temperature + concentration effects.\n\n**Iron(III) thiocyanate**: Fe³⁺ + SCN⁻ ⇌ [FeSCN]²⁺ blood-red. Add Fe³⁺ → redder; add SCN⁻ → redder; add water → paler. Shows concentration effects.\n\n**NO₂/N₂O₄**: 2NO₂ ⇌ N₂O₄ — brown ⇌ colourless. Heat → brown (more NO₂); cool/compress → colourless. Shows temperature + pressure.",
          },
          {
            heading: "Industrial equilibria",
            body: "**Haber**: N₂ + 3H₂ ⇌ 2NH₃ — high pressure + moderate temp + catalyst. **Contact**: 2SO₂ + O₂ ⇌ 2SO₃ — similar conditions. Both exothermic — moderate temp compromise.\n\n**Experiments**: measure yield at different pressures/temperatures (model systems), calculate equilibrium constant Kc = [products]/[reactants]. **Safety**: industrial chemicals hazardous — risk assessment essential.",
          },
        ],
        keyFormulas: [
          {
            name: "Le Chatelier",
            statement:
              "System opposes changes — shifts to minimize disturbance.",
          },
          {
            name: "Kc",
            statement: "Kc = [products]/[reactants] at equilibrium.",
          },
        ],
        workedExample: {
          problem: "CoCl₂ solution turns pink when water added. Why?",
          solution:
            "Water shifts equilibrium toward hydrated (pink) form — Le Chatelier.",
        },
      },
      questions: [
        {
          id: "ech11-u4-equilibrium-exp-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What happens when water is added to cobalt chloride equilibrium?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "No change" },
              { id: "b", text: "Turns green" },
              { id: "c", text: "Turns blue" },
              { id: "d", text: "Turns pink" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "CoCl₂ equilibrium",
                statement: "Water shifts toward hydrated pink form.",
              },
            ],
            steps: [
              {
                reasoning: "Water → pink (hydrated).",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Turns pink",
            commonErrors: ["Blue confused — that's HCl/heat."],
          },
        },
        {
          id: "ech11-u4-equilibrium-exp-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "State Le Chatelier's principle.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Le Chatelier",
                statement:
                  "System opposes changes — shifts to minimize disturbance.",
              },
            ],
            steps: [
              {
                reasoning: "System at equilibrium.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Change applied (conc/pressure/temp).",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Shifts to oppose the change.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Equilibrium system shifts to oppose changes in concentration, pressure or temperature.",
            commonErrors: ["Only concentration.", "Wrong direction."],
          },
        },
        {
          id: "ech11-u4-equilibrium-exp-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why NO₂/N₂O₄ equilibrium changes colour with temperature.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "NO₂ equilibrium",
                statement:
                  "2NO₂ ⇌ N₂O₄ — brown ⇌ colourless; temperature shifts.",
              },
            ],
            steps: [
              {
                reasoning: "NO₂ brown, N₂O₄ colourless.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Heating → more NO₂ (brown) — endothermic direction.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Cooling → more N₂O₄ (colourless) — exothermic direction.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Le Chatelier explains shift.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Heat → brown NO₂ (endothermic); cool → colourless N₂O₄ (exothermic) — Le Chatelier.",
            commonErrors: ["Wrong direction.", "No equilibrium link."],
          },
        },
        {
          id: "ech11-u4-equilibrium-exp-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Investigating concentration effect on Fe³⁺ + SCN⁻ equilibrium.",
          parts: [
            {
              label: "a",
              prompt: "Describe equilibrium and indicator.",
              marks: 3,
            },
            {
              label: "b",
              prompt: "Predict effect of adding Fe³⁺ vs water.",
              marks: 3,
            },
            { label: "c", prompt: "Explain using Le Chatelier.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "FeSCN equilibrium",
                statement:
                  "Fe³⁺ + SCN⁻ ⇌ FeSCN²⁺ blood-red — concentration dependent.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Red complex forms — colour intensity shows position.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Blood-red [FeSCN]²⁺.",
                marks: 1,
                markCode: "AO1",
                part: "a",
              },
              {
                reasoning:
                  "(b) Fe³⁺ → redder (more product); water → paler (dilution).",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Correct predictions.",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(c) Adding reactant shifts right; diluting shifts left.",
                marks: 2,
                markCode: "AO2",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) red complex colour (b) Fe³⁺→redder, water→paler (c) shifts to oppose changes",
            commonErrors: ["Wrong direction.", "No indicator."],
          },
        },
      ],
    },
    {
      id: "ech11-u4-rates-quant",
      title: "Quantitative Rate Measurements",
      skill: "Measure initial rates and analyse rate data quantitatively.",
      lesson: {
        sections: [
          {
            heading: "Initial rate method",
            body: "**Principle**: measure rate at start before reactants deplete — most accurate. **Methods**: gas syringe (volume vs time, gradient at start), colourimeter (absorbance vs time for coloured products), pH meter (acid consumption).\n\n**Data**: plot quantity vs time — initial gradient = initial rate. Compare different concentrations — rate proportional to concentration^order.",
          },
          {
            heading: "Rate analysis",
            body: "**Rate = k[A]^m[B]^n** — k = rate constant, orders determined experimentally. **Doubling concentration**: if rate doubles → first order; quadruples → second order; unchanged → zero order.\n\n**Temperature**: rate increases with temperature — Arrhenius equation (k = Ae^(-Ea/RT)). **Catalysts**: lower Ea — increase rate without changing equilibrium.",
          },
        ],
        keyFormulas: [
          {
            name: "Initial rate",
            statement: "Gradient at start of graph — before depletion.",
          },
          {
            name: "Rate law",
            statement: "rate = k[A]^m — order from concentration experiments.",
          },
        ],
        workedExample: {
          problem: "Doubling [HCl] doubles rate. What order?",
          solution: "First order — rate ∝ concentration.",
        },
      },
      questions: [
        {
          id: "ech11-u4-rates-quant-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the initial rate?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Rate at start before depletion" },
              { id: "b", text: "Rate at end" },
              { id: "c", text: "Average rate" },
              { id: "d", text: "Maximum rate" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Initial rate",
                statement: "Rate at start — before reactants deplete.",
              },
            ],
            steps: [
              {
                reasoning: "Initial rate = at start.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** At start",
            commonErrors: ["Average confused."],
          },
        },
        {
          id: "ech11-u4-rates-quant-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Doubling concentration quadruples rate. What order?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Reaction order",
                statement: "4× rate for 2× concentration = second order.",
              },
            ],
            steps: [
              { reasoning: "2² = 4 — second order.", marks: 1, markCode: "M" },
              { reasoning: "Rate ∝ [A]².", marks: 1, markCode: "AO2" },
              {
                reasoning: "Second order confirmed.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Second order — rate ∝ concentration².",
            commonErrors: ["First order assumed.", "No calculation."],
          },
        },
        {
          id: "ech11-u4-rates-quant-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why initial rate is measured rather than average rate.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Initial rate",
                statement:
                  "Concentrations highest at start — most accurate measure.",
              },
            ],
            steps: [
              {
                reasoning: "Concentrations decrease during reaction.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Initial rate = known starting concentrations.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Average includes changing concentrations.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Initial rate better for rate law.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Initial concentrations known — rate law needs fixed concentration values; average includes changes.",
            commonErrors: ["Same accuracy assumed.", "No concentration link."],
          },
        },
        {
          id: "ech11-u4-rates-quant-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Reaction: A + B → products. Rate data at different [A] (constant [B]).",
          parts: [
            {
              label: "a",
              prompt: "[A]=0.1 rate=2; [A]=0.2 rate=8. Determine order.",
              marks: 3,
            },
            {
              label: "b",
              prompt: "Explain how you'd verify with more data.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "What does rate constant k represent?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Rate law",
                statement: "rate = k[A]^n — determine n from data.",
              },
            ],
            steps: [
              {
                reasoning: "(a) 2× concentration → 4× rate = second order.",
                marks: 2,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "(a) rate ∝ [A]².",
                marks: 1,
                markCode: "A",
                part: "a",
              },
              {
                reasoning: "(b) Test more concentrations — check consistency.",
                marks: 1,
                markCode: "AO3",
                part: "b",
              },
              {
                reasoning: "(b) Plot log(rate) vs log([A]) — gradient = order.",
                marks: 2,
                markCode: "AO3",
                part: "b",
              },
              {
                reasoning: "(c) k = rate when [A]=1 — temperature dependent.",
                marks: 2,
                markCode: "AO2",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) second order (b) more data+log plot (c) k=rate constant, temp dependent",
            commonErrors: ["First order.", "No verification."],
          },
        },
      ],
    },
  ],
};
