import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "mypc5-u3-lesson-3-2",
  code: "3-2",
  title: "Fuels and Atmospheric Chemistry",
  goal: "I CAN write combustion equations, explain complete and incomplete combustion, and describe greenhouse effect, acid rain and ozone depletion.",
  standards: [
    "MYP Sciences: Matter",
    "Key concept: Systems",
    "Criterion A: Knowing and understanding",
    "Criterion D: Reflecting",
  ],
  vocabulary: [
    { term: "Combustion", definition: "Rapid reaction with oxygen releasing heat and light; complete gives CO₂ + H₂O." },
    { term: "Incomplete combustion", definition: "Combustion with limited oxygen producing CO and/or soot (carbon) plus water." },
    { term: "Greenhouse effect", definition: "Greenhouse gases absorb outgoing infrared radiation, warming the atmosphere; enhanced by human emissions." },
    { term: "Acid rain", definition: "Rain with pH < 5.6 formed when SO₂ and NOₓ dissolve to form sulfuric and nitric acids." },
    { term: "Ozone layer", definition: "O₃ layer in stratosphere absorbing harmful UV-B radiation; depleted by CFCs." },
    { term: "Catalytic converter", definition: "Device in vehicle exhaust converting CO, NOₓ and unburnt hydrocarbons to less harmful products." },
  ],
  concepts: [
    {
      id: "mypc5-u3-combustion",
      title: "Combustion of fuels in detail",
      skill: "Write balanced combustion equations and explain conditions for complete vs incomplete combustion.",
      lesson: {
        sections: [
          {
            heading: "Complete combustion",
            body: "Sufficient oxygen: fuel + O₂ → CO₂ + H₂O + energy. Propane: C₃H₈ + 5O₂ → 3CO₂ + 4H₂O. Natural gas (methane): CH₄ + 2O₂ → CO₂ + 2H₂O. Produces maximum energy per mole of fuel and the least harmful carbon product (CO₂, still a greenhouse gas).",
          },
          {
            heading: "Incomplete combustion",
            body: "Limited oxygen: produces **CO** (toxic) and/or **soot (C)** plus water. E.g. CH₄ + 2O₂ → CO + 2H₂O or 2CH₄ + 3O₂ → 2CO + 4H₂O. Occurs in poorly ventilated spaces, cold engines, and produces less energy. CO binds haemoglobin → prevents O₂ transport.",
          },
          {
            heading: "Controlling pollution",
            body: "**Catalytic converters**: 2CO + 2NO → 2CO₂ + N₂ (redox on Pt/Rh surface). Sulphur removal from fuels reduces SO₂ → less acid rain. Oxygenates (ethanol) improve combustion completeness. Monitoring and ventilation prevent CO poisoning in homes.",
          },
        ],
        keyFormulas: [
          { name: "Complete", statement: "C_xH_y + O_2 -> CO_2 + H_2O + energy" },
          { name: "Incomplete", statement: "Limited O_2 -> CO or C (soot) + H_2O" },
          { name: "Catalytic", statement: "2CO + 2NO -> 2CO_2 + N_2 on catalyst surface" },
        ],
        workedExample: {
          problem: "Balance the equation for complete combustion of propane (C₃H₈).",
          solution: "C₃H₈ + 5O₂ → 3CO₂ + 4H₂O — check: 3 C, 8 H and 10 O atoms on both sides.",
        },
      },
      questions: [
        {
          id: "mypc5-u3-combustion-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is produced in incomplete combustion of a hydrocarbon?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only carbon dioxide and water" },
              { id: "b", text: "Sulphur dioxide" },
              { id: "c", text: "Carbon monoxide and/or soot (carbon)" },
              { id: "d", text: "Oxygen and nitrogen" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Incomplete combustion", statement: "Limited O₂ → CO and/or C soot instead of CO₂." },
            ],
            steps: [
              { reasoning: "Insufficient O₂ means carbon not fully oxidised → CO or C.", working: "CO;C", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** CO and/or soot",
            commonErrors: ["Saying complete combustion products form."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypc5-u3-combustion-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why is carbon monoxide dangerous?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It is acidic" },
              { id: "b", text: "It causes acid rain directly" },
              { id: "c", text: "It dissolves in water harmlessly" },
              { id: "d", text: "It binds haemoglobin more strongly than oxygen, reducing oxygen transport in blood" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "CO toxicity", statement: "CO–haemoglobin complex blocks O₂ transport." },
            ],
            steps: [
              { reasoning: "CO binds haemoglobin ~200× more strongly than O₂.", working: "\\text{haemoglobin}", marks: 1, markCode: "M" },
              { reasoning: "Tissues deprived of oxygen → poisoning/asphyxiation.", working: "\\text{asphyxia}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Blocks oxygen transport via haemoglobin",
            commonErrors: ["Saying CO is harmless or just causes headaches."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc5-u3-combustion-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Balance and classify: 2C₄H₁₀ + 13O₂ → 8CO₂ + 10H₂O. Is this complete or incomplete combustion, and why?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Neither — it is a decomposition" },
              { id: "b", text: "Complete — all carbon ends as CO₂ and all hydrogen as H₂O; sufficient O₂ used" },
              { id: "c", text: "Incomplete — CO is produced" },
              { id: "d", text: "Cannot be classified" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Complete combustion test", statement: "Products only CO₂ + H₂O indicates complete combustion." },
            ],
            steps: [
              { reasoning: "Check balance: 8 C, 20 H, 26 O each side.", working: "\\text{balanced}", marks: 1, markCode: "M" },
              { reasoning: "Products are only CO₂ and H₂O — no CO or soot.", working: "CO_2+H_2O", marks: 1, markCode: "M" },
              { reasoning: "Conclusion: complete combustion of butane.", working: "\\text{complete}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Complete combustion — only CO₂ and H₂O",
            commonErrors: ["Ignoring the products and just reading the equation."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypc5-u3-combustion-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A city wants to reduce vehicle emissions of CO and NOₓ.",
          parts: [
            { label: "a", prompt: "Write the balanced equation for complete combustion of octane C₈H₁₈.", marks: 2 },
            { label: "b", prompt: "Write the catalytic converter reaction converting CO and NOₓ to harmless products.", marks: 2 },
            { label: "c", prompt: "Explain why catalytic converters are less effective on short journeys.", marks: 2 },
            { label: "d", prompt: "Evaluate the introduction of low-emission zones in the city centre.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Emission control", statement: "Complete combustion minimises CO; catalysts convert residual pollutants." },
            ],
            steps: [
              { part: "a", reasoning: "2C_8H_18 + 25O_2 -> 16CO_2 + 18H_2O.", working: "2C_8H_18+25O_2\\to16CO_2+18H_2O", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Balanced correctly (16 C, 36 H, 50 O each side).", working: "\\text{balanced}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "2CO + 2NO -> 2CO_2 + N_2 (on Pt/Rh catalyst).", working: "2CO+2NO\\to2CO_2+N_2", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct redox conversion products.", working: "\\text{products}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Catalyst must reach operating temperature (~300 °C); on short journeys engines stay cold so conversion is incomplete and CO/NOₓ escape.", working: "\\text{cold start}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Hence lower average emission control on short trips.", working: "\\text{ineffective}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Benefit: reduces local NOₓ/particulate pollution and congestion emissions in dense areas where exposure is highest.", working: "\\text{benefit}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Drawback: may displace traffic/pollution to surrounding areas; equity concerns for low-income drivers; evaluate net effect.", working: "\\text{drawback}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 2C₈H₁₈+25O₂→16CO₂+18H₂O (b) 2CO+2NO→2CO₂+N₂ (c) catalyst cold on short journeys (d) reduces centre pollution but may displace traffic",
            commonErrors: ["In (a), miscounting oxygen atoms."],
            examinerNote: "M1 A1 for (a); M1 A1 for (b); M1 A1 for (c); M1 A1 for (d).",
          },
        },
        {
          id: "mypc5-u3-combustion-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What are the products of complete combustion of a hydrocarbon fuel?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Carbon monoxide and soot" },
              { id: "b", text: "Sulphur dioxide only" },
              { id: "c", text: "Carbon dioxide and water (plus energy)" },
              { id: "d", text: "Oxygen and nitrogen" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Complete combustion", statement: "Sufficient O₂ → CO₂ + H₂O + energy." },
            ],
            steps: [
              { reasoning: "Complete oxidation gives only CO₂ and H₂O.", working: "CO_2+H_2O", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** CO₂ and H₂O",
            commonErrors: ["Choosing CO/soot — that's incomplete combustion."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypc5-u3-combustion-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "For CH₄ + 2O₂ → CO₂ + 2H₂O, how many moles of O₂ are needed to completely combust 1 mole of methane?",
          response: {
            type: "numeric",
            parts: [{ label: "O₂", answer: 2, unit: "mol" }],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Combustion stoichiometry", statement: "Coefficients give mole ratios." },
            ],
            steps: [
              { reasoning: "Equation shows 1 CH₄ : 2 O₂ → 2 mol O₂ per mol CH₄.", working: "2", marks: 1, markCode: "B" },
            ],
            finalAnswer: "$2\\ \\text{mol O}_2$",
            commonErrors: ["Reading coefficient of CO₂ (1) instead of O₂ (2)."],
            examinerNote: "B1 for 2.",
          },
        },
        {
          id: "mypc5-u3-combustion-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Under what conditions does incomplete combustion of a hydrocarbon occur, and what are its main products?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "When the fuel is cold — producing nitrogen" },
              { id: "b", text: "When oxygen supply is limited — producing CO and/or soot (carbon) plus water" },
              { id: "c", text: "Never in practice" },
              { id: "d", text: "When oxygen is plentiful — producing only CO₂" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Incomplete combustion", statement: "Limited O₂ → CO/C soot + H₂O." },
            ],
            steps: [
              { reasoning: "Insufficient O₂ → carbon not fully oxidised to CO₂.", working: "\\text{limited O}_2", marks: 1, markCode: "M" },
              { reasoning: "Products: CO (toxic) and/or soot + water.", working: "CO;C", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Limited O₂ → CO and/or soot",
            commonErrors: ["Saying incomplete combustion gives CO₂."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc5-u3-combustion-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "For C₃H₈ + 5O₂ → 3CO₂ + 4H₂O, how many moles of CO₂ are produced per mole of propane?",
          response: {
            type: "numeric",
            parts: [{ label: "CO₂", answer: 3, unit: "mol" }],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Combustion stoichiometry", statement: "Coefficients give mole ratios." },
            ],
            steps: [
              { reasoning: "1 C₃H₈ → 3 CO₂ → 3 mol CO₂ per mol propane.", working: "3", marks: 1, markCode: "M" },
              { reasoning: "Answer: $3$ mol.", working: "3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$3\\ \\text{mol CO}_2$",
            commonErrors: ["Using coefficient of O₂ (5) instead."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc5-u3-combustion-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "A gas water heater in a poorly ventilated room produces carbon monoxide. Why is this dangerous?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "CO is a strong acid" },
              { id: "b", text: "CO binds haemoglobin ~200× more strongly than O₂, blocking oxygen transport → asphyxiation" },
              { id: "c", text: "CO explodes easily" },
              { id: "d", text: "CO causes acid rain" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "CO toxicity", statement: "CO–haemoglobin binding blocks O₂ transport." },
            ],
            steps: [
              { reasoning: "CO binds haemoglobin much more strongly than O₂.", working: "\\text{haemoglobin}", marks: 1, markCode: "M" },
              { reasoning: "Oxygen can't be transported → tissue hypoxia/asphyxiation; colourless, odourless → undetected.", working: "\\text{asphyxia}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "CO blocks oxygen transport via haemoglobin",
            commonErrors: ["Saying CO is detected by smell — it's odourless."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc5-u3-combustion-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "For the complete combustion of butane C₄H₁₀, the balanced equation is 2C₄H₁₀ + 13O₂ → 8CO₂ + 10H₂O. How many moles of O₂ are needed per mole of butane?",
          response: {
            type: "numeric",
            parts: [{ label: "O₂", answer: 6.5, unit: "mol" }],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Combustion stoichiometry", statement: "Mole ratio from balanced equation coefficients." },
            ],
            steps: [
              { reasoning: "$13 \\div 2 = 6.5$ mol O₂ per mol butane.", working: "13\\div2=6.5", marks: 1, markCode: "M" },
              { reasoning: "Answer: $6.5$ mol.", working: "6.5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$6.5\\ \\text{mol O}_2$",
            commonErrors: ["Answering 13 — that's for 2 mol butane."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc5-u3-combustion-q11",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "For the complete combustion of ethanol C₂H₅OH (products CO₂ and H₂O), how many moles of O₂ are required per mole of ethanol?",
          response: {
            type: "numeric",
            parts: [{ label: "O₂", answer: 3, unit: "mol" }],
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Balancing combustion", statement: "C→CO₂, H→H₂O, then balance O; note the O atom already in ethanol." },
            ],
            steps: [
              { reasoning: "Products need $2 \\times 2 + 3 = 7$ O atoms; ethanol supplies 1 → 6 O atoms from O₂ → 3 O₂.", working: "7-1=6;\\div2=3", marks: 1, markCode: "M" },
              { reasoning: "Answer: $3$ mol O₂ per mol ethanol.", working: "3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$3\\ \\text{mol O}_2$",
            commonErrors: ["Forgetting the O atom in ethanol → wrong O₂ count."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc5-u3-combustion-q12",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "For propane C₃H₈ complete combustion, the products are 3CO₂ and 4H₂O. How many moles of O₂ are required?",
          response: {
            type: "numeric",
            parts: [{ label: "O₂", answer: 5, unit: "mol" }],
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Balancing", statement: "Balance atoms: C→CO₂, H→H₂O, then O." },
            ],
            steps: [
              { reasoning: "Products need $3 \\times 2 + 4 = 10$ O atoms.", working: "10", marks: 1, markCode: "M" },
              { reasoning: "Each O₂ gives 2 O → $10 \\div 2 = 5$ O₂.", working: "5", marks: 1, markCode: "M" },
              { reasoning: "Answer: $5$ mol O₂ — matches C₃H₈ + 5O₂ → 3CO₂ + 4H₂O.", working: "5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$5\\ \\text{mol O}_2$",
            commonErrors: ["Answering 10 — that's O atoms, not O₂ molecules."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypc5-u3-combustion-q13",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "What does a catalytic converter do to the exhaust gases CO and NO?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Converts them to less harmful products: 2CO + 2NO → 2CO₂ + N₂ on a Pt/Rh catalyst surface" },
              { id: "b", text: "It has no effect on gases" },
              { id: "c", text: "Removes all oxygen from exhaust" },
              { id: "d", text: "Converts CO₂ back to CO" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Catalytic converter", statement: "Redox on catalyst surface: CO→CO₂, NO→N₂." },
            ],
            steps: [
              { reasoning: "CO oxidised to CO₂; NO reduced to N₂.", working: "2CO+2NO\\to2CO_2+N_2", marks: 1, markCode: "M" },
              { reasoning: "Pt/Rh catalyst provides surface for reaction at lower temperature.", working: "\\text{catalyst}", marks: 1, markCode: "M" },
              { reasoning: "Products less harmful than CO and NOₓ.", working: "\\text{less harmful}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2CO + 2NO → 2CO₂ + N₂",
            commonErrors: ["Saying it produces O₂ or removes gases entirely."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypc5-u3-combustion-q14",
          difficulty: "core",
          totalMarks: 4,
          stem: "Write and balance the equation for the complete combustion of propan-1-ol C₃H₇OH.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Balancing combustion", statement: "C→CO₂, H→H₂O, then balance O." },
            ],
            steps: [
              { reasoning: "3 C → 3 CO₂; 8 H → 4 H₂O.", working: "3CO_2;4H_2O", marks: 1, markCode: "M" },
              { reasoning: "Products need $3 \\times 2 + 4 = 10$ O atoms; the fuel supplies 1 O, so 9 O atoms must come from O₂ — an odd number, so double all coefficients.", working: "10-1=9", marks: 1, markCode: "M" },
              { reasoning: "$2C_3H_7OH + 9O_2 \\to 6CO_2 + 8H_2O$ — check: 6 C, 16 H, 18 O each side.", working: "2C_3H_7OH+9O_2\\to6CO_2+8H_2O", marks: 1, markCode: "A" },
              { reasoning: "Correctly balanced equation with integer coefficients.", working: "\\text{balanced}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2C₃H₇OH + 9O₂ → 6CO₂ + 8H₂O",
            commonErrors: ["Forgetting the O atom in the alcohol fuel."],
            examinerNote: "M1 M1 A1 A1.",
          },
        },
        {
          id: "mypc5-u3-combustion-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why incomplete combustion is more dangerous than complete combustion, and describe two ways to ensure complete combustion in domestic heaters.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Incomplete combustion hazards", statement: "CO toxic + soot; prevented by sufficient air/ventilation." },
            ],
            steps: [
              { reasoning: "Incomplete produces CO — binds haemoglobin, blocks O₂ transport → poisoning; soot causes respiratory issues.", working: "\\text{CO}", marks: 1, markCode: "M" },
              { reasoning: "CO is colourless and odourless → victims unaware.", working: "\\text{undetected}", marks: 1, markCode: "M" },
              { reasoning: "Prevention 1: adequate ventilation — supply enough O₂ for complete combustion.", working: "\\text{ventilation}", marks: 1, markCode: "A" },
              { reasoning: "Prevention 2: regular servicing/flue checks + CO detectors in homes.", working: "\\text{servicing}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "CO/soot hazards; ensure ventilation and servicing",
            commonErrors: ["Saying CO has a smell warning."],
            examinerNote: "M1 M1 A1 A1.",
          },
        },
        {
          id: "mypc5-u3-combustion-q16",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Evaluate strategies for reducing harmful emissions from vehicle combustion: catalytic converters, low-sulphur fuels, and electric vehicles.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "comparison", name: "Emission control", statement: "Treat exhaust (catalyst), prevent pollutants (fuel quality), or eliminate combustion (EV)." },
            ],
            steps: [
              { reasoning: "Catalytic converters: convert CO/NOₓ to CO₂/N₂ — reduces toxic emissions but doesn't eliminate CO₂.", working: "\\text{catalyst}", marks: 1, markCode: "M" },
              { reasoning: "Low-sulphur fuels: less SO₂ → less acid rain; cheap to implement.", working: "\\text{S fuel}", marks: 1, markCode: "M" },
              { reasoning: "Electric vehicles: zero tailpipe emissions; but electricity source matters (grid may be fossil).", working: "\\text{EV}", marks: 1, markCode: "M" },
              { reasoning: "Catalytic converters ineffective when cold (short journeys) and don't reduce CO₂.", working: "\\text{limits}", marks: 1, markCode: "A" },
              { reasoning: "Low-sulphur doesn't address CO₂ or NOₓ fully.", working: "\\text{partial}", marks: 1, markCode: "A" },
              { reasoning: "EVs most complete solution if charged renewably; infrastructure/cost barriers remain.", working: "\\text{renewable}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Catalysts treat exhaust; low-S prevents SO₂; EVs eliminate tailpipe but grid-dependent",
            commonErrors: ["Claiming EVs have zero emissions regardless of electricity source."],
            examinerNote: "M1 M1 M1 A1 A1 A1.",
          },
        },
      ],
    },
    {
      id: "mypc5-u3-atmosphere",
      title: "Greenhouse effect, acid rain and ozone",
      skill: "Explain the enhanced greenhouse effect, acid rain formation and ozone depletion with chemical equations.",
      lesson: {
        sections: [
          {
            heading: "Greenhouse effect",
            body: "Sunlight warms Earth's surface; surface emits **infrared radiation**. Greenhouse gases (CO₂, CH₄, N₂O, water vapour) absorb IR and re-emit it in all directions — warming the atmosphere. Human activity has increased CO₂ (burning fossil fuels) and CH₄ (livestock, landfills) → **enhanced greenhouse effect** → global warming, sea-level rise, extreme weather.",
          },
          {
            heading: "Acid rain",
            body: "Burning sulphur-containing fuels releases **SO₂**: S + O₂ → SO₂. NOₓ from vehicle engines: N₂ + O₂ → 2NO (then NO → NO₂). In the atmosphere: SO₂ + H₂O → H₂SO₃ (sulphurous acid), oxidised to **H₂SO₄**; NO₂ + H₂O → HNO₃. Rain with pH < 5.6 damages limestone/metal, acidifies lakes (fish kills), corrodes buildings.",
          },
          {
            heading: "Ozone depletion",
            body: "The **ozone layer** (stratospheric O₃) absorbs harmful UV-B. **CFCs** (once in aerosols/fridges) release Cl radicals: Cl + O₃ → ClO + O₂; ClO + O → Cl + O₂ — chlorine regenerated, destroying ~100,000 ozone molecules each. The ozone hole over Antarctica results. The Montreal Protocol phased out CFCs; the layer is slowly recovering.",
          },
        ],
        keyFormulas: [
          { name: "Greenhouse", statement: "GHG absorbs IR -> enhanced warming" },
          { name: "Acid rain", statement: "SO_2 + H_2O -> H_2SO_4; NO_2 + H_2O -> HNO_3" },
          { name: "Ozone", statement: "Cl + O_3 -> ClO + O_2; ClO + O -> Cl + O_2" },
        ],
        workedExample: {
          problem: "Write the two steps showing how a chlorine radical destroys ozone.",
          solution: "Cl + O₃ → ClO + O₂, then ClO + O → Cl + O₂. The Cl atom is regenerated, so it acts as a catalyst destroying many O₃ molecules.",
        },
      },
      questions: [
        {
          id: "mypc5-u3-atmosphere-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which gas is the main greenhouse gas produced by burning fossil fuels?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Carbon dioxide" },
              { id: "b", text: "Nitrogen" },
              { id: "c", text: "Oxygen" },
              { id: "d", text: "Hydrogen" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Greenhouse gases", statement: "CO₂, CH₄, N₂O, water vapour absorb IR." },
            ],
            steps: [
              { reasoning: "Fossil fuel combustion releases CO₂ — principal anthropogenic GHG.", working: "CO_2", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Carbon dioxide",
            commonErrors: ["Choosing oxygen or nitrogen — neither is a greenhouse gas."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypc5-u3-atmosphere-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "How does acid rain form from sulphur dioxide emissions?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "SO₂ directly melts rocks" },
              { id: "b", text: "SO₂ dissolves in water forming sulphurous acid, which is oxidised to sulphuric acid" },
              { id: "c", text: "SO₂ evaporates into space" },
              { id: "d", text: "Rain becomes alkaline" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Acid rain chemistry", statement: "SO₂ + H₂O → H₂SO₃ → H₂SO₄; NO₂ → HNO₃." },
            ],
            steps: [
              { reasoning: "SO₂ reacts with atmospheric water → sulphurous acid.", working: "SO_2+H_2O", marks: 1, markCode: "M" },
              { reasoning: "Oxidation gives sulphuric acid → pH < 5.6 rain.", working: "H_2SO_4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "SO₂ → sulphurous acid → sulphuric acid",
            commonErrors: ["Attributing acid rain to CO₂ alone."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc5-u3-atmosphere-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Why is ozone depletion a greater concern at the poles than at the equator?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "There are no CFCs at the equator" },
              { id: "b", text: "UV radiation is weaker at poles" },
              { id: "c", text: "Ozone only exists at the poles" },
              { id: "d", text: "Polar stratospheric clouds provide surfaces for reactions that release chlorine radicals from CFCs; cold temperatures favour the chemistry" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Polar ozone hole", statement: "PSC surfaces + cold enable Cl release from CFC reservoirs." },
            ],
            steps: [
              { reasoning: "Polar stratospheric clouds form only in extreme cold.", working: "\\text{PSCs}", marks: 1, markCode: "M" },
              { reasoning: "Cloud surfaces convert CFC reservoirs to active Cl radicals.", working: "Cl\\uparrow", marks: 1, markCode: "M" },
              { reasoning: "Spring sunlight then drives rapid O₃ destruction → ozone hole.", working: "\\text{hole}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Cold polar clouds activate chlorine radicals",
            commonErrors: ["Saying CFCs only exist over Antarctica."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypc5-u3-atmosphere-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A government must choose between investing in renewable energy and carbon capture technology to reduce CO₂ emissions.",
          parts: [
            { label: "a", prompt: "Write the word equation for the enhanced greenhouse effect process involving CO₂ and infrared radiation.", marks: 1 },
            { label: "b", prompt: "Explain how acid rain damages limestone buildings, using a chemical equation.", marks: 2 },
            { label: "c", prompt: "Compare one advantage and one disadvantage of renewable energy vs carbon capture for emissions reduction.", marks: 3 },
            { label: "d", prompt: "Evaluate which option you would recommend and justify your choice.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Climate strategies", statement: "Mitigate emissions at source (renewables) or remove them (capture)." },
            ],
            steps: [
              { part: "a", reasoning: "CO₂ absorbs outgoing infrared radiation and re-emits it in all directions → warming.", working: "\\text{IR absorbed}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "CaCO_3 + H_2SO_4 -> CaSO_4 + H_2O + CO_2 — acid dissolves limestone.", working: "CaCO_3+H_2SO_4\\to CaSO_4+H_2O+CO_2", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Calcium sulfate crust forms and is washed away → stonework erodes.", working: "\\text{erosion}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Renewables: advantage — prevents emissions at source, sustainable long-term; disadvantage — intermittent supply, storage needed, high upfront cost.", working: "\\text{renewable}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Carbon capture: advantage — can retrofit existing fossil infrastructure, removes CO₂ directly; disadvantage — energy-intensive, storage risks, doesn't reduce fossil dependence.", working: "\\text{capture}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Both sides compared fairly.", working: "\\text{fair}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Recommendation justified, e.g. prioritise renewables for long-term sustainability while using capture as transitional measure for hard-to-abate sectors.", working: "\\text{recommend}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Justification consistent with analysis in (c).", working: "\\text{justified}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) CO₂ absorbs/re-emits IR (b) CaCO₃+H₂SO₄→CaSO₄+H₂O+CO₂ (c) renewables prevent at source but intermittent; capture retrofits but energy-hungry (d) justified choice",
            commonErrors: ["In (b), writing the equation with H₂SO₃ instead of H₂SO₄."],
            examinerNote: "M1 for (a); M1 A1 for (b); M1 M1 A1 for (c); M1 A1 for (d).",
          },
        },
        {
          id: "mypc5-u3-atmosphere-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of these is NOT a greenhouse gas?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Methane (CH₄)" },
              { id: "b", text: "Nitrous oxide (N₂O)" },
              { id: "c", text: "Carbon dioxide (CO₂)" },
              { id: "d", text: "Oxygen (O₂)" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Greenhouse gases", statement: "CO₂, CH₄, N₂O, water vapour absorb IR; O₂/N₂ do not." },
            ],
            steps: [
              { reasoning: "O₂ is not a greenhouse gas — it doesn't absorb IR significantly.", working: "O_2", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Oxygen",
            commonErrors: ["Thinking all atmospheric gases are greenhouse gases."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypc5-u3-atmosphere-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Rain is classified as 'acid rain' when its pH falls below what value?",
          response: {
            type: "numeric",
            parts: [{ label: "pH", answer: 5.6, unit: "pH" }],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Acid rain", statement: "Rain with pH < 5.6." },
            ],
            steps: [
              { reasoning: "Threshold pH = $5.6$.", working: "5.6", marks: 1, markCode: "B" },
            ],
            finalAnswer: "$\\text{pH} < 5.6$",
            commonErrors: ["Saying pH < 7 — normal rain is already slightly acidic (~5.6)."],
            examinerNote: "B1 for 5.6.",
          },
        },
        {
          id: "mypc5-u3-atmosphere-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "How does the natural greenhouse effect warm the Earth?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They block all radiation" },
              { id: "b", text: "Greenhouse gases absorb outgoing infrared radiation from Earth's surface and re-emit it in all directions, warming the atmosphere" },
              { id: "c", text: "Greenhouse gases reflect sunlight back" },
              { id: "d", text: "They generate heat directly" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Greenhouse mechanism", statement: "GHGs absorb IR and re-emit → warming." },
            ],
            steps: [
              { reasoning: "Surface emits IR; GHGs absorb and re-emit in all directions including back to surface.", working: "\\text{IR}", marks: 1, markCode: "M" },
              { reasoning: "Net effect: atmosphere retains more energy → warming.", working: "\\text{warming}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "GHGs absorb and re-emit infrared radiation",
            commonErrors: ["Saying GHGs reflect sunlight — they act on IR."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc5-u3-atmosphere-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "For the reaction 2SO₂ + O₂ → 2SO₃, how many moles of SO₃ are produced from 4 moles of SO₂?",
          response: {
            type: "numeric",
            parts: [{ label: "SO₃", answer: 4, unit: "mol" }],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Stoichiometry", statement: "2 SO₂ → 2 SO₃ gives 1:1 mole ratio." },
            ],
            steps: [
              { reasoning: "2 SO₂ → 2 SO₃ = 1:1 ratio → 4 mol SO₂ gives 4 mol SO₃.", working: "4", marks: 1, markCode: "M" },
              { reasoning: "Answer: $4$ mol.", working: "4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$4\\ \\text{mol SO}_3$",
            commonErrors: ["Doubling to 8 — ratio is 1:1 not 1:2."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc5-u3-atmosphere-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two environmental problems caused by acid rain.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It depletes the ozone layer" },
              { id: "b", text: "It causes global warming directly" },
              { id: "c", text: "It acidifies lakes killing fish, and corrodes limestone buildings/monuments" },
              { id: "d", text: "It has no environmental effects" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Acid rain impacts", statement: "Damages ecosystems, water bodies, buildings, forests." },
            ],
            steps: [
              { reasoning: "Acid rain acidifies lakes/rivers → fish kills; damages trees/forests.", working: "\\text{lakes}", marks: 1, markCode: "M" },
              { reasoning: "Corrodes limestone (CaCO₃) buildings and monuments.", working: "\\text{CaCO}_3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Acidifies water bodies; corrodes limestone/metal",
            commonErrors: ["Confusing acid rain with ozone depletion."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc5-u3-atmosphere-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "Sulphur dioxide forms when sulphur burns: S + O₂ → SO₂. How many moles of SO₂ form from 3 moles of S?",
          response: {
            type: "numeric",
            parts: [{ label: "SO₂", answer: 3, unit: "mol" }],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Stoichiometry", statement: "1 S → 1 SO₂ gives 1:1 ratio." },
            ],
            steps: [
              { reasoning: "1:1 mole ratio → 3 mol S → 3 mol SO₂.", working: "3", marks: 1, markCode: "M" },
              { reasoning: "Answer: $3$ mol.", working: "3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$3\\ \\text{mol SO}_2$",
            commonErrors: ["Thinking O₂ coefficient doubles the SO₂."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc5-u3-atmosphere-q11",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "In the catalytic cycle Cl + O₃ → ClO + O₂ followed by ClO + O → Cl + O₂, the chlorine radical is regenerated. Approximately how many ozone molecules can one chlorine radical destroy during its lifetime in the stratosphere?",
          response: {
            type: "numeric",
            parts: [{ label: "O₃ destroyed", answer: 100000, unit: "molecules", tolerance: 5000 }],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Ozone depletion cycle", statement: "Cl radical regenerated → catalytic destruction of many O₃ (~10⁵ each)." },
            ],
            steps: [
              { reasoning: "Each cycle: Cl + O_3 -> ClO + O_2 removes one O₃; ClO + O -> Cl + O_2 regenerates Cl.", working: "\\text{cycle}", marks: 1, markCode: "M" },
              { reasoning: "Because Cl is regenerated, one radical destroys ~$100{,}000$ O₃ molecules.", working: "10^5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\approx 100{,}000$ O₃ molecules per Cl radical",
            commonErrors: ["Answering 1 or 2 — the cycle repeats many times."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc5-u3-atmosphere-q12",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Calculate the total number of O₃ molecules destroyed in one catalytic cycle if the chlorine radical goes through the cycle twice (each cycle destroys 1 O₃).",
          response: {
            type: "numeric",
            parts: [{ label: "O₃", answer: 2, unit: "molecules" }],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Catalytic cycle", statement: "Each cycle: 1 O₃ destroyed, Cl regenerated." },
            ],
            steps: [
              { reasoning: "Each cycle destroys 1 O₃; 2 cycles → 2 O₃.", working: "2", marks: 1, markCode: "M" },
              { reasoning: "Answer: $2$ O₃ molecules.", working: "2", marks: 1, markCode: "M" },
              { reasoning: "In reality one Cl destroys ~100,000 O₃ over its lifetime.", working: "10^5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2\\ \\text{O}_3$ (one per cycle)",
            commonErrors: ["Forgetting the cycle repeats — Cl isn't consumed."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypc5-u3-atmosphere-q13",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "What was the Montreal Protocol and why was it successful?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A law banning all aerosols permanently" },
              { id: "b", text: "It only applied to Antarctica" },
              { id: "c", text: "International agreement to phase out CFCs; succeeded because alternatives existed and nearly all countries signed it, allowing the ozone layer to recover" },
              { id: "d", text: "It created the ozone hole" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Montreal Protocol", statement: "Global phase-out of ODS → ozone recovery." },
            ],
            steps: [
              { reasoning: "Agreed to phase out CFCs and other ozone-depleting substances.", working: "\\text{CFCs}", marks: 1, markCode: "M" },
              { reasoning: "Alternatives available → feasible; near-universal participation.", working: "\\text{alternatives}", marks: 1, markCode: "M" },
              { reasoning: "Ozone layer slowly recovering — often cited as most successful env. treaty.", working: "\\text{recovery}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "CFC phase-out treaty → ozone recovering",
            commonErrors: ["Saying it banned aerosols entirely — it phased out CFCs."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypc5-u3-atmosphere-q14",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain the difference between the natural greenhouse effect and the enhanced greenhouse effect.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Enhanced greenhouse effect", statement: "Extra GHGs from human activity increase warming beyond natural level." },
            ],
            steps: [
              { reasoning: "Natural: GHGs (CO₂, CH₄, water vapour) maintain Earth's temperature at life-supporting level.", working: "\\text{natural}", marks: 1, markCode: "M" },
              { reasoning: "Enhanced: human emissions (fossil fuels, deforestation, livestock) raise GHG concentrations above natural levels.", working: "\\text{enhanced}", marks: 1, markCode: "M" },
              { reasoning: "Result: more IR absorbed → extra warming → climate change.", working: "\\text{warming}", marks: 1, markCode: "A" },
              { reasoning: "Natural effect essential for life; enhanced effect is the problem.", working: "\\text{contrast}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Natural maintains temperature; enhanced (human-caused) causes extra warming",
            commonErrors: ["Saying the greenhouse effect itself is bad — only enhancement is."],
            examinerNote: "M1 M1 A1 A1.",
          },
        },
        {
          id: "mypc5-u3-atmosphere-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Describe how acid rain forms from SO₂ and NOₓ emissions, including the chemical equations.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Acid rain chemistry", statement: "SO₂/NOₓ → acids → rain pH < 5.6." },
            ],
            steps: [
              { reasoning: "SO₂ from burning sulphur fuels: S + O_2 -> SO_2; NOₓ from vehicle engines.", working: "SO_2;NO_x", marks: 1, markCode: "M" },
              { reasoning: "SO₂ + H₂O → H₂SO₃ → oxidised to H₂SO₄; NO₂ + H₂O → HNO₃.", working: "H_2SO_4;HNO_3", marks: 1, markCode: "M" },
              { reasoning: "Acids dissolve in rain → pH < 5.6 → acid rain.", working: "\\text{pH}", marks: 1, markCode: "A" },
              { reasoning: "Impacts: corrodes CaCO₃ (CaCO₃ + H₂SO₄ → CaSO₄ + H₂O + CO₂), acidifies lakes.", working: "\\text{impacts}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "SO₂/NOₓ → H₂SO₄/HNO₃ → pH < 5.6 rain",
            commonErrors: ["Omitting the oxidation step H₂SO₃ → H₂SO₄."],
            examinerNote: "M1 M1 A1 A1.",
          },
        },
        {
          id: "mypc5-u3-atmosphere-q16",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Evaluate two approaches to reducing greenhouse gas emissions: switching to renewable energy and improving energy efficiency.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "comparison", name: "Emission reduction", statement: "Replace sources (renewables) or reduce demand (efficiency)." },
            ],
            steps: [
              { reasoning: "Renewables: replace fossil fuels → near-zero operational emissions; sustainable long-term.", working: "\\text{renewables}", marks: 1, markCode: "M" },
              { reasoning: "Renewable drawback: intermittent supply, storage needed, infrastructure transition cost.", working: "\\text{intermittent}", marks: 1, markCode: "M" },
              { reasoning: "Energy efficiency: less energy needed → fewer emissions for same service; immediate savings.", working: "\\text{efficiency}", marks: 1, markCode: "M" },
              { reasoning: "Efficiency drawback: doesn't eliminate fossil dependence; 'rebound effect' may increase consumption.", working: "\\text{rebound}", marks: 1, markCode: "A" },
              { reasoning: "Both needed: efficiency gives quick wins; renewables provide long-term decarbonisation.", working: "\\text{both}", marks: 1, markCode: "A" },
              { reasoning: "Overall: complementary strategies — reduce demand AND clean supply.", working: "\\text{complementary}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Renewables clean supply but intermittent; efficiency quick savings but partial — complementary",
            commonErrors: ["One-sided answer."],
            examinerNote: "M1 M1 M1 A1 A1 A1.",
          },
        },
      ],
    },
  ],
};
