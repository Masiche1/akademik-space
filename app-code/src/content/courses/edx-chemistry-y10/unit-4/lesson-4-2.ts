import type { Lesson } from "../../../types.ts";

export const lesson42: Lesson = {
  id: "ech10-u4-lesson-4-2",
  code: "4-2",
  title: "Investigating Rates of Reaction",
  goal: "I CAN design and carry out rate experiments with proper controls.",
  standards: ["Edexcel IGCSE Chemistry 4CH1 — Investigative Skills"],
  vocabulary: [
    {
      term: "Rate of reaction",
      definition: "Speed of reactant consumption or product formation.",
    },
    {
      term: "Gas syringe",
      definition: "Measures gas volume produced over time.",
    },
    {
      term: "Disappearing cross",
      definition: "Timing method — when cross hidden by precipitate.",
    },
    {
      term: "Control variable",
      definition: "Kept constant so only independent variable affects rate.",
    },
  ],
  concepts: [
    {
      id: "ech10-u4-rates",
      title: "Measuring Reaction Rates",
      skill: "Measure rates using gas collection, mass loss and colour change.",
      lesson: {
        sections: [
          {
            heading: "Rate measurement methods",
            body: "**Gas syringe**: collect gas volume vs time — steepest gradient = fastest. **Mass loss**: weigh flask as gas escapes (carbonate + acid → CO₂). **Disappearing cross**: time until precipitate hides cross (thiosulfate + acid → sulfur). **Colour change**: timing colour disappearance.\n\n**Variables**: independent (concentration, temperature, surface area, catalyst); dependent (rate — volume/time or time); controls (mass, volume, temperature, same apparatus).",
          },
          {
            heading: "Interpreting rate data",
            body: "**Graphs**: volume vs time — curve steepens initially then flattens (reactants depleted). Rate = gradient at point or 1/time for fixed volume. **Comparing conditions**: same method, same reactants — only independent variable differs.\n\n**Practical factors**: gas syringe leaks, timing consistency, temperature fluctuations, surface area variation (marble chips size). Repeat for reliability.",
          },
        ],
        keyFormulas: [
          { name: "Rate", statement: "rate = volume ÷ time or 1 ÷ time." },
          {
            name: "Rate graph",
            statement: "Steep gradient = fast; flattening = reaction slowing.",
          },
        ],
        workedExample: {
          problem: "Gas volume: 10 cm³ at 20s, 30 cm³ at 40s. Rate?",
          solution: "20 cm³ ÷ 20 s = 1 cm³/s.",
        },
      },
      questions: [
        {
          id: "ech10-u4-rates-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which method measures rate by gas production?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Colour change" },
              { id: "b", text: "Weighing flask" },
              { id: "c", text: "pH meter" },
              { id: "d", text: "Gas syringe" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Gas syringe",
                statement: "Measures gas volume vs time.",
              },
            ],
            steps: [
              {
                reasoning: "Gas syringe measures gas volume.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Gas syringe",
            commonErrors: ["Weighing confused — that's mass loss."],
          },
        },
        {
          id: "ech10-u4-rates-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why is temperature kept constant in rate experiments?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Control variables",
                statement:
                  "Temperature affects rate — must control for fair test.",
              },
            ],
            steps: [
              {
                reasoning: "Temperature changes rate independently.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Uncontrolled temp = confounding variable.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Constant temp isolates tested variable.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Temperature affects rate — controlling it isolates the tested variable.",
            commonErrors: ["No temp effect.", "Vague."],
          },
        },
        {
          id: "ech10-u4-rates-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A rate graph shows steep initial gradient flattening over time. Explain why.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Rate decline",
                statement:
                  "Reactants deplete → fewer collisions → slower rate.",
              },
            ],
            steps: [
              {
                reasoning: "Reactants consumed → concentration drops.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Fewer particles = fewer collisions.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Rate slows until reactant used up.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Coherent explanation.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Reactants deplete → lower concentration → fewer collisions → rate slows.",
            commonErrors: ["Product assumed.", "No depletion link."],
          },
        },
        {
          id: "ech10-u4-rates-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Investigating effect of concentration on rate of CaCO₃ + HCl.",
          parts: [
            { label: "a", prompt: "State variables.", marks: 2 },
            { label: "b", prompt: "Describe method.", marks: 3 },
            { label: "c", prompt: "Predict expected graph shape.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Rate experiment",
                statement:
                  "Gas syringe measures CO₂; only concentration varies.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Independent: acid concentration; dependent: rate (gas vol/time).",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) Same mass chips, acid volume, temp; vary concentration; collect gas.",
                marks: 2,
                markCode: "AO3",
                part: "b",
              },
              {
                reasoning: "(b) Record volume vs time for each.",
                marks: 1,
                markCode: "AO3",
                part: "b",
              },
              {
                reasoning:
                  "(c) Higher concentration → steeper gradient → faster rate.",
                marks: 2,
                markCode: "AO2",
                part: "c",
              },
              {
                reasoning: "(c) All curves flatten as reaction completes.",
                marks: 1,
                markCode: "AO2",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) conc./rate (b) same chips+volume, vary conc, gas syringe (c) steeper=concentrated",
            commonErrors: ["Chip size varied.", "Linear expected."],
          },
        },
      ],
    },
    {
      id: "ech10-u4-calorimetry",
      title: "Calorimetry and Energy Measurements",
      skill: "Measure heat changes in chemical reactions.",
      lesson: {
        sections: [
          {
            heading: "Coffee-cup calorimetry",
            body: "**Apparatus**: polystyrene cup (insulator), thermometer, known mass water, reactants. **Method**: measure initial temp → mix reactants → record max temp → calculate heat change. **Formula**: q = mcΔT where m=mass, c=specific heat capacity (4.2 J/g°C for water), ΔT=temp change.\n\n**Limitations**: heat loss to surroundings, incomplete mixing, thermometer precision, reactant amounts. Improve: lid on cup, insulation, stir, repeat.",
          },
          {
            heading: "Types of reactions",
            body: "**Exothermic**: temp rises — neutralisation, combustion, displacement. **Endothermic**: temp falls — thermal decomposition, some dissolutions. **Applications**: hand warmers (exothermic oxidation), instant cold packs (endothermic dissolution).\n\n**Data handling**: temperature vs time graph — peak/valley shows max change. Compare different reactant amounts — more = bigger change.",
          },
        ],
        keyFormulas: [
          {
            name: "Heat change",
            statement: "q = mcΔT — mass × specific heat × temp change.",
          },
          {
            name: "Exo/endothermic",
            statement: "Temp rises = exothermic; falls = endothermic.",
          },
        ],
        workedExample: {
          problem: "50g water warms 5°C. Heat absorbed?",
          solution: "q = 50 × 4.2 × 5 = 1050 J.",
        },
      },
      questions: [
        {
          id: "ech10-u4-calorimetry-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does a polystyrene cup provide in calorimetry?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Measuring" },
              { id: "b", text: "Mixing" },
              { id: "c", text: "Colour" },
              { id: "d", text: "Insulation" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Calorimeter",
                statement: "Polystyrene insulates — reduces heat loss.",
              },
            ],
            steps: [
              {
                reasoning: "Polystyrene insulates.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Insulation",
            commonErrors: ["Mixing assumed."],
          },
        },
        {
          id: "ech10-u4-calorimetry-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why is specific heat capacity of water used in calculations?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Specific heat",
                statement:
                  "Water's c = 4.2 J/g°C — standard for heat calculations.",
              },
            ],
            steps: [
              {
                reasoning: "Water absorbs heat predictably.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Known value allows calculation.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Most reactions measured in aqueous solution.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Water's known specific heat capacity allows heat calculation via q = mcΔT.",
            commonErrors: ["Any value works.", "No formula link."],
          },
        },
        {
          id: "ech10-u4-calorimetry-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why do calorimetry results always underestimate heat change?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Heat loss",
                statement:
                  "Some heat escapes to surroundings — measured less than actual.",
              },
            ],
            steps: [
              {
                reasoning: "Heat escapes to air/surroundings.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Cup not perfectly insulating.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Measured temp change < actual.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Results always underestimate.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Heat loss to surroundings → measured ΔT smaller → underestimated heat change.",
            commonErrors: ["Overestimate assumed.", "No loss mechanism."],
          },
        },
        {
          id: "ech10-u4-calorimetry-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Mixing 50 cm³ 1.0 mol/dm³ HCl + 50 cm³ 1.0 mol/dm³ NaOH. Temp rises 6.5°C.",
          parts: [
            {
              label: "a",
              prompt:
                "Calculate heat absorbed by water (assume 100g total, c=4.2).",
              marks: 3,
            },
            {
              label: "b",
              prompt: "Is reaction exothermic or endothermic? Justify.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Suggest one improvement to reduce error.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Calorimetry",
                statement: "q = mcΔT; temp rise = exothermic.",
              },
            ],
            steps: [
              {
                reasoning: "(a) q = 100 × 4.2 × 6.5 = 2730 J.",
                marks: 2,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "(a) Correct calculation.",
                marks: 1,
                markCode: "A",
                part: "a",
              },
              {
                reasoning: "(b) Exothermic — temp rose.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(c) Insulate better, lid, stir, repeat.",
                marks: 2,
                markCode: "AO3",
                part: "c",
              },
              {
                reasoning: "(c) Reduce heat loss.",
                marks: 1,
                markCode: "AO3",
                part: "c",
              },
            ],
            finalAnswer: "(a) 2730 J (b) exothermic (c) insulation/lid/repeat",
            commonErrors: ["Endothermic assumed.", "Wrong mass."],
          },
        },
      ],
    },
  ],
};
