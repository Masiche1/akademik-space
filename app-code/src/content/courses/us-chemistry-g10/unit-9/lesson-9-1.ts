import type { Lesson } from "../../../types.ts";

export const lesson91: Lesson = {
  id: "chem10-u9-lesson-9-1",
  code: "9-1",
  title: "Energy and Enthalpy",
  goal: "I CAN describe energy changes in reactions and calculate enthalpy using calorimetry.",
  standards: [
    "HS-PS1-4",
    "SEP: Using Mathematics and Computational Thinking",
    "SEP: Analyzing and Interpreting Data",
  ],
  vocabulary: [
    {
      term: "Enthalpy",
      definition: "Heat content of a system at constant pressure.",
    },
    { term: "Exothermic", definition: "Releases heat (ΔH < 0)." },
    { term: "Endothermic", definition: "Absorbs heat (ΔH > 0)." },
    { term: "Calorimetry", definition: "Measuring heat changes in reactions." },
    {
      term: "Specific heat",
      definition: "Energy needed to raise 1g substance by 1°C.",
    },
    {
      term: "Heat capacity",
      definition: "Energy needed to raise object by 1°C.",
    },
    { term: "Bond enthalpy", definition: "Energy to break a bond." },
    {
      term: "Hess's law",
      definition: "ΔH depends only on initial/final states.",
    },
  ],
  concepts: [
    {
      id: "chem10-u9-energy-basics",
      title: "Energy in reactions",
      skill: "Distinguish exothermic and endothermic reactions.",
      lesson: {
        sections: [
          {
            heading: "Exothermic vs endothermic",
            body: "- **Exothermic**: releases heat → ΔH < 0 → products lower energy.\n  - Examples: combustion, respiration, neutralization.\n- **Endothermic**: absorbs heat → ΔH > 0 → products higher energy.\n  - Examples: photosynthesis, ice melting, decomposition.",
          },
          {
            heading: "Energy diagram",
            body: "Exothermic: products below reactants → energy released.\nEndothermic: products above reactants → energy absorbed.\n\nActivation energy barrier exists for both.",
          },
        ],
        keyFormulas: [
          { name: "Exothermic", statement: "ΔH < 0, releases heat" },
          { name: "Endothermic", statement: "ΔH > 0, absorbs heat" },
          {
            name: "Energy diagram",
            statement: "Products vs reactants energy level",
          },
        ],
        workedExample: {
          problem: "Is burning methane exo or endothermic?",
          solution: "Exothermic — releases heat (combustion).",
        },
      },
      questions: [
        {
          id: "chem10-u9-energy-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does ΔH < 0 indicate?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Endothermic" },
              { id: "b", text: "Exothermic" },
              { id: "c", text: "No energy change" },
              { id: "d", text: "Catalyst needed" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Exothermic", statement: "ΔH < 0." },
            ],
            steps: [
              {
                reasoning: "Negative ΔH = releases heat.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Exothermic",
            commonErrors: ["Reversing sign."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "chem10-u9-energy-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Classify: (a) combustion, (b) photosynthesis, (c) ice melting.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Reaction types",
                statement: "Exo vs endo.",
              },
            ],
            steps: [
              { reasoning: "Combustion: exothermic.", marks: 1, markCode: "M" },
              {
                reasoning: "Photosynthesis: endothermic.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Ice melting: endothermic.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) exo (b) endo (c) endo.",
            commonErrors: ["Wrong classification."],
            examinerNote: "M2, A1.",
          },
        },
        {
          id: "chem10-u9-energy-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why do exothermic reactions feel hot?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Heat release",
                statement: "Energy transferred to surroundings.",
              },
            ],
            steps: [
              {
                reasoning: "Reaction releases energy as heat.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Heat transferred to surroundings (container, air).",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Temperature of surroundings increases.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Feel warmth from released heat.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Released heat warms surroundings.",
            commonErrors: ["Not mentioning surroundings."],
            examinerNote: "R3, A1.",
          },
        },
        {
          id: "chem10-u9-energy-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "For reaction A + B → C + D:",
          parts: [
            { label: "a", prompt: "If ΔH = −50 kJ, classify?", marks: 2 },
            { label: "b", prompt: "Energy diagram shape?", marks: 3 },
            { label: "c", prompt: "What happens to surroundings?", marks: 2 },
            { label: "d", prompt: "Reverse reaction ΔH?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Enthalpy",
                statement: "Sign determines exo/endo.",
              },
            ],
            steps: [
              {
                reasoning: "ΔH<0 → exothermic.",
                marks: 2,
                markCode: "B",
                part: "a",
              },
              {
                reasoning: "Products below reactants; Ea barrier on top.",
                marks: 3,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Surroundings warm up.",
                marks: 2,
                markCode: "R",
                part: "c",
              },
              {
                reasoning: "Reverse ΔH = +50 kJ (endothermic).",
                marks: 3,
                markCode: "R",
                part: "d",
              },
            ],
            finalAnswer: "(a) exo (b) products lower (c) warms (d) +50 kJ.",
            commonErrors: ["Same sign for reverse."],
            examinerNote: "2+3+2+3 = 10.",
          },
        },
      ],
    },
    {
      id: "chem10-u9-calorimetry",
      title: "Calorimetry",
      skill: "Calculate heat changes using q = mcΔT and apply to reactions.",
      lesson: {
        sections: [
          {
            heading: "Calorimetry equation",
            body: "$$q = mc\Delta T$$\n\n- q = heat (J or kJ).\n- m = mass (g).\n- c = specific heat (J/g°C).\n- ΔT = temperature change (°C).",
          },
          {
            heading: "Coffee cup calorimeter",
            body: "Simple calorimeter for solution reactions.\n\n- q_solution = mcΔT.\n- For exothermic: q_rxn = −q_solution.\n- For endothermic: q_rxn = +q_solution.",
          },
        ],
        keyFormulas: [
          { name: "Heat", statement: "$q = mc\\Delta T$" },
          { name: "Water specific heat", statement: "4.18 J/g°C" },
          { name: "q_rxn", statement: "$q_{rxn} = -q_{solution}$" },
        ],
        workedExample: {
          problem: "100 g water heated from 20°C to 30°C. q = ?",
          solution: "$q = 100 \\times 4.18 \\times 10 = 4180$ J = 4.18 kJ.",
        },
      },
      questions: [
        {
          id: "chem10-u9-calorimetry-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is specific heat?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Heat per gram per degree" },
              { id: "b", text: "Total heat capacity" },
              { id: "c", text: "Temperature change" },
              { id: "d", text: "Mass of substance" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Specific heat",
                statement: "J/g°C.",
              },
            ],
            steps: [
              {
                reasoning: "c = energy per gram per °C.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** Heat per gram per degree",
            commonErrors: ["Confusing with heat capacity."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "chem10-u9-calorimetry-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Calculate q for 50 g water heated from 25°C to 35°C (c=4.18).",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "q=mcΔT",
                statement: "$q = 50 \\times 4.18 \\times 10$",
              },
            ],
            steps: [
              { reasoning: "ΔT = 35−25 = 10°C.", marks: 1, markCode: "M" },
              {
                reasoning: "$q = 50 \\times 4.18 \\times 10 = 2090$ J.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Answer: 2090 J or 2.09 kJ.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "2090 J.",
            commonErrors: ["Wrong ΔT sign or value."],
            examinerNote: "M1, M1, A1.",
          },
        },
        {
          id: "chem10-u9-calorimetry-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A reaction in 100 g water raises T from 22°C to 28°C. Is it exo or endo? Calculate q_rxn.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Calorimetry",
                statement: "$q_{rxn} = -mc\\Delta T$",
              },
            ],
            steps: [
              {
                reasoning: "$q_{sol} = 100 \\times 4.18 \\times 6 = 2508$ J.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Temperature increased → exothermic.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "$q_{rxn} = -2508$ J (released).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Answer: −2.508 kJ, exothermic.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Exothermic, q_rxn = −2.508 kJ.",
            commonErrors: ["Wrong sign for q_rxn."],
            examinerNote: "M2, R1, A1.",
          },
        },
        {
          id: "chem10-u9-calorimetry-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "0.050 mol of Mg reacts with HCl in 200 g water. T rises from 20°C to 35°C.",
          parts: [
            { label: "a", prompt: "Calculate q for water.", marks: 3 },
            { label: "b", prompt: "Exo or endo?", marks: 1 },
            { label: "c", prompt: "q per mole of Mg?", marks: 3 },
            { label: "d", prompt: "Why might measured ΔH differ?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Calorimetry",
                statement: "$q = mc\\Delta T$",
              },
            ],
            steps: [
              {
                reasoning: "$q = 200 \\times 4.18 \\times 15 = 12,540$ J.",
                marks: 2,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Answer: 12.54 kJ.",
                marks: 1,
                markCode: "A",
                part: "a",
              },
              {
                reasoning: "Exothermic (T increased).",
                marks: 1,
                markCode: "B",
                part: "b",
              },
              {
                reasoning: "$q_{rxn} = -12.54$ kJ / 0.050 mol = −250.8 kJ/mol.",
                marks: 2,
                markCode: "M",
                part: "c",
              },
              {
                reasoning: "Answer: −250.8 kJ/mol.",
                marks: 1,
                markCode: "A",
                part: "c",
              },
              {
                reasoning:
                  "Heat loss to surroundings, calorimeter absorbs some heat.",
                marks: 2,
                markCode: "R",
                part: "d",
              },
              {
                reasoning: "Not all heat goes to water.",
                marks: 1,
                markCode: "A",
                part: "d",
              },
            ],
            finalAnswer:
              "(a) 12.54 kJ (b) exo (c) −250.8 kJ/mol (d) heat loss.",
            commonErrors: ["Forgetting per-mole conversion."],
            examinerNote: "3+1+3+3 = 10.",
          },
        },
      ],
    },
    {
      id: "chem10-u9-hess",
      title: "Hess's law and bond energies",
      skill: "Apply Hess's law and bond enthalpies to calculate ΔH.",
      lesson: {
        sections: [
          {
            heading: "Hess's law",
            body: "ΔH depends only on initial and final states, not path.\n\n- Can combine reactions to find target ΔH.\n- Reverse reaction → reverse sign of ΔH.\n- Multiply reaction → multiply ΔH.",
          },
          {
            heading: "Bond enthalpies",
            body: "ΔH ≈ Σ(bonds broken) − Σ(bonds formed).\n\n- Breaking bonds: endothermic (+).\n- Forming bonds: exothermic (−).\n- Estimate ΔH from bond energies.",
          },
        ],
        keyFormulas: [
          { name: "Hess's law", statement: "ΔH path-independent" },
          {
            name: "Bond enthalpy",
            statement: "$ΔH = ΣE_{broken} - ΣE_{formed}$",
          },
          { name: "Reverse reaction", statement: "ΔH reverses sign" },
        ],
        workedExample: {
          problem:
            "C + O₂ → CO₂ (ΔH=−394). CO + ½O₂ → CO₂ (ΔH=−283). Find ΔH for C + ½O₂ → CO.",
          solution: "Target = first − second: −394 − (−283) = −111 kJ.",
        },
      },
      questions: [
        {
          id: "chem10-u9-hess-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does Hess's law state?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "ΔH depends on path" },
              { id: "b", text: "ΔH depends only on initial/final states" },
              { id: "c", text: "Reactions can't be combined" },
              { id: "d", text: "ΔH always negative" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Hess's law",
                statement: "Path-independent ΔH.",
              },
            ],
            steps: [
              {
                reasoning: "Only initial/final states matter.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** ΔH depends only on initial/final states",
            commonErrors: ["Thinking path matters."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "chem10-u9-hess-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Reaction A→B ΔH=−100 kJ. What's ΔH for B→A?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Reverse reaction",
                statement: "ΔH reverses sign.",
              },
            ],
            steps: [
              {
                reasoning: "Reverse reaction swaps reactants/products.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "ΔH reverses: +100 kJ.", marks: 1, markCode: "M" },
              { reasoning: "Answer: +100 kJ.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "+100 kJ.",
            commonErrors: ["Same sign."],
            examinerNote: "M1, M1, A1.",
          },
        },
        {
          id: "chem10-u9-hess-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Using bond energies: H-H=436, Cl-Cl=243, H-Cl=431 kJ/mol. Estimate ΔH for H₂ + Cl₂ → 2HCl.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Bond enthalpy",
                statement: "$ΔH = ΣE_{broken} - ΣE_{formed}$",
              },
            ],
            steps: [
              {
                reasoning: "Break: H-H (436) + Cl-Cl (243) = 679 kJ.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Form: 2×H-Cl (2×431) = 862 kJ.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$ΔH = 679 - 862 = -183$ kJ.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Exothermic — consistent with reaction.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "ΔH ≈ −183 kJ.",
            commonErrors: ["Reversed formula."],
            examinerNote: "M3, A1.",
          },
        },
        {
          id: "chem10-u9-hess-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Given: C + O₂ → CO₂ (ΔH=−394 kJ); CO + ½O₂ → CO₂ (ΔH=−283 kJ).",
          parts: [
            { label: "a", prompt: "Find ΔH for C + ½O₂ → CO.", marks: 5 },
            { label: "b", prompt: "Explain method used.", marks: 3 },
            { label: "c", prompt: "Verify by reversing equations.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Hess's law",
                statement: "Combine equations to get target.",
              },
            ],
            steps: [
              {
                reasoning: "Target = eq1 − eq2: (−394) − (−283) = −111 kJ.",
                marks: 3,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Answer: −111 kJ.",
                marks: 2,
                markCode: "A",
                part: "a",
              },
              {
                reasoning: "Reverse eq2: CO₂ → CO + ½O₂ (+283).",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning:
                  "Add to eq1: C + O₂ + CO₂ → CO₂ + CO + ½O₂ → C + ½O₂ → CO.",
                marks: 2,
                markCode: "R",
                part: "b",
              },
              {
                reasoning: "ΔH = −394 + 283 = −111 kJ. Verified.",
                marks: 2,
                markCode: "A",
                part: "c",
              },
            ],
            finalAnswer: "(a) −111 kJ (b) eq1 + reversed eq2 (c) verified.",
            commonErrors: ["Wrong sign manipulation."],
            examinerNote: "5+3+2 = 10.",
          },
        },
      ],
    },
    {
      id: "chem10-u9-thermo-apps",
      title: "Thermochemistry applications",
      skill: "Apply thermochemistry to real-world systems.",
      lesson: {
        sections: [
          {
            heading: "Applications",
            body: "- **Fuel value**: energy released per gram (calorimetry).\n- **Hand warmers**: exothermic oxidation of Fe.\n- **Cold packs**: endothermic dissolution.\n- **Food energy**: Calories = heat from metabolism.",
          },
          {
            heading: "Energy balance",
            body: "Endothermic reactions absorb energy → cooling effect.\nExothermic release → heating effect.\n\nUsed in instant cold/hot packs, self-heating meals.",
          },
        ],
        keyFormulas: [
          { name: "Fuel value", statement: "kJ/g from combustion calorimetry" },
          { name: "Hand warmer", statement: "Fe oxidation → heat" },
          { name: "Cold pack", statement: "Endothermic dissolution → cooling" },
        ],
        workedExample: {
          problem: "Why do instant cold packs feel cold?",
          solution: "Endothermic dissolution absorbs heat from surroundings.",
        },
      },
      questions: [
        {
          id: "chem10-u9-thermoapp-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How do instant cold packs work?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Exothermic reaction" },
              { id: "b", text: "Endothermic reaction" },
              { id: "c", text: "Combustion" },
              { id: "d", text: "Nuclear decay" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Cold packs",
                statement: "Endothermic → absorbs heat.",
              },
            ],
            steps: [
              {
                reasoning: "Endothermic absorbs heat → cooling.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Endothermic reaction",
            commonErrors: ["Confusing with hot packs."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "chem10-u9-thermoapp-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is fuel value and how is it measured?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Fuel value",
                statement: "Energy per gram from combustion.",
              },
            ],
            steps: [
              {
                reasoning: "Energy released per gram of fuel.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Measured by burning known mass in calorimeter.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Units: kJ/g or kcal/g.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "kJ/g measured by combustion calorimetry.",
            commonErrors: ["Not mentioning calorimetry."],
            examinerNote: "M2, A1.",
          },
        },
        {
          id: "chem10-u9-thermoapp-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Compare hand warmers and cold packs.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Thermal packs",
                statement: "Exo vs endo.",
              },
            ],
            steps: [
              {
                reasoning: "Hand warmers: exothermic (Fe oxidation).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Cold packs: endothermic (dissolution).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Hand warmer releases heat; cold pack absorbs.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Both use chemical reactions for thermal effect.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Hand = exo (heat), cold = endo (cooling).",
            commonErrors: ["Same mechanism for both."],
            examinerNote: "M2, R1, A1.",
          },
        },
        {
          id: "chem10-u9-thermoapp-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A student burns 0.50 g ethanol in a calorimeter containing 200 g water.",
          parts: [
            { label: "a", prompt: "T rises 15°C. Calculate q.", marks: 3 },
            { label: "b", prompt: "Is reaction exo or endo?", marks: 1 },
            { label: "c", prompt: "Fuel value in kJ/g?", marks: 3 },
            {
              label: "d",
              prompt: "Compare to literature (28.5 kJ/g). Why differ?",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Calorimetry",
                statement: "$q = mc\\Delta T$",
              },
            ],
            steps: [
              {
                reasoning:
                  "$q = 200 \\times 4.18 \\times 15 = 12,540$ J = 12.54 kJ.",
                marks: 2,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Answer: 12.54 kJ.",
                marks: 1,
                markCode: "A",
                part: "a",
              },
              { reasoning: "Exothermic.", marks: 1, markCode: "B", part: "b" },
              {
                reasoning:
                  "$12.54 \\text{ kJ} / 0.50 \\text{ g} = 25.08$ kJ/g.",
                marks: 2,
                markCode: "M",
                part: "c",
              },
              {
                reasoning: "Answer: 25.08 kJ/g.",
                marks: 1,
                markCode: "A",
                part: "c",
              },
              {
                reasoning:
                  "Heat loss, incomplete combustion, calorimeter absorbs heat.",
                marks: 2,
                markCode: "R",
                part: "d",
              },
              {
                reasoning: "Measured < literature.",
                marks: 1,
                markCode: "A",
                part: "d",
              },
            ],
            finalAnswer: "(a) 12.54 kJ (b) exo (c) 25.08 kJ/g (d) heat loss.",
            commonErrors: ["Not dividing by mass."],
            examinerNote: "3+1+3+3 = 10.",
          },
        },
      ],
    },
  ],
};
