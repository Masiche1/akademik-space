import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "chemhl-u1-lesson-3-1",
  code: "3-1",
  title: "Energy Cycles and the Born-Haber Cycle",
  goal: "I CAN construct Born-Haber cycles, apply Hess's law to calculate lattice enthalpies and other energetics quantities, and relate bond energies, ionization energies and electron affinities to lattice stability.",
  standards: ["Paper 1", "Paper 2", "AHL R1"],
  vocabulary: [
    {
      term: "Born-Haber cycle",
      definition:
        "A Hess's law cycle that relates the lattice enthalpy of an ionic compound to atomization, ionization, electron affinity and formation enthalpies.",
    },
    {
      term: "Lattice enthalpy",
      definition:
        "The enthalpy change when one mole of an ionic solid is formed from its gaseous ions; always exothermic for stable lattices.",
    },
    {
      term: "Enthalpy of atomization",
      definition:
        "The enthalpy change when one mole of gaseous atoms is formed from the element in its standard state.",
    },
    {
      term: "Enthalpy of hydration",
      definition:
        "The enthalpy change when one mole of gaseous ions dissolves in water to form hydrated ions; always exothermic.",
    },
    {
      term: "Hydration enthalpy",
      definition:
        "Same as enthalpy of hydration — energy released when gaseous ions are surrounded by water molecules.",
    },
    {
      term: "Solution enthalpy",
      definition:
        "The enthalpy change when an ionic solid dissolves in water; determined by lattice enthalpy vs hydration enthalpies.",
    },
  ],
  concepts: [
    {
      id: "chemhl-u3-born-haber",
      title: "The Born-Haber cycle",
      skill:
        "Construct and use Born-Haber cycles to calculate lattice enthalpies, formation enthalpies and related energetics quantities.",
      lesson: {
        sections: [
          {
            heading: "Building the cycle",
            body: "For NaCl, the Born-Haber cycle connects two routes from elements in standard states to the ionic solid. Direct route: $\\Delta H_f$ (formation enthalpy). Indirect route: atomize Na ($+107$ kJ mol$^{-1}$), ionize Na ($+496$), atomize $\\frac{1}{2}$Cl$_2$ ($+121$), add electron to Cl ($-349$ electron affinity), then form the lattice ($-\\Delta H_{latt}$, exothermic). Hess's law says the two routes give the same total enthalpy, so $\\Delta H_f = \\Delta H_{atom}(Na) + IE + \\Delta H_{atom}(Cl) + EA - \\Delta H_{latt}$.",
          },
          {
            heading: "Using the cycle",
            body: "The cycle can be rearranged to find any unknown: lattice enthalpy, formation enthalpy, ionization energy or electron affinity. For MgO (2+ and 2- ions) the cycle includes two ionization energies for Mg and two electron affinities considerations are avoided because O$^{2-}$ formation is handled via the Born-Haber lattice term directly. The lattice enthalpy is always large and exothermic — it is the energy released when gaseous ions pack into the solid.",
          },
          {
            heading: "Factors affecting lattice enthalpy",
            body: "Lattice enthalpy magnitude increases with ionic charge and decreases with ionic radius. MgO ($2+, 2-$) has a much larger lattice enthalpy than NaCl ($1+, 1-$) because the higher charges give stronger electrostatic attraction ($F \\propto \\frac{q_1 q_2}{r^2}$). Smaller ions also give larger lattice enthalpies — LiCl has a higher lattice enthalpy than KCl because Li$^+$ is smaller.",
          },
        ],
        keyFormulas: [
          {
            name: "Born-Haber equation",
            statement:
              "$\\Delta H_f = \\Delta H_{atom}(metal) + IE + \\Delta H_{atom}(non-metal) + EA - \\Delta H_{latt}$",
          },
          {
            name: "Lattice enthalpy factors",
            statement:
              "Increases with ionic charge, decreases with ionic radius (smaller ions → stronger attraction).",
          },
          {
            name: "Coulomb's law",
            statement:
              "$F = \\frac{1}{4\\pi\\varepsilon_0}\\frac{q_1 q_2}{r^2}$ — lattice energy scales with charge product and inverse distance.",
          },
        ],
        workedExample: {
          problem:
            "Given: $\\Delta H_f$(NaCl) = $-411$ kJ mol$^{-1}$, $\\Delta H_{atom}$(Na) = $+107$, $IE$(Na) = $+496$, $\\Delta H_{atom}$(Cl) = $+121$, $EA$(Cl) = $-349$. Calculate the lattice enthalpy of NaCl.",
          solution:
            "$\\Delta H_f = 107 + 496 + 121 - 349 - \\Delta H_{latt}$ → $-411 = 375 - \\Delta H_{latt}$ → $\\Delta H_{latt} = 375 + 411 = 786$ kJ mol$^{-1}$ exothermic, so lattice enthalpy = $-786$ kJ mol$^{-1}$.",
        },
      },
      questions: [
        {
          id: "chemhl-u3-bh-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Lattice enthalpy is defined as the enthalpy change when:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Gaseous atoms form a molecule" },
              {
                id: "b",
                text: "One mole of ionic solid forms from its gaseous ions",
              },
              { id: "c", text: "One mole of ionic solid dissolves in water" },
              { id: "d", text: "Ions move from gas to solution" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Lattice enthalpy",
                statement:
                  "Energy released when one mole of gaseous ions forms one mole of ionic solid; always exothermic.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Lattice enthalpy specifically refers to gas-phase ions → solid lattice.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** Gas ions → ionic solid",
            commonErrors: [
              "Confusing lattice enthalpy with hydration or solution enthalpy.",
            ],
          },
        },
        {
          id: "chemhl-u3-bh-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Rank NaCl, MgO and KCl in order of DECREASING lattice enthalpy magnitude and justify your ranking.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Lattice enthalpy factors",
                statement:
                  "Higher ionic charge and smaller ionic radius give larger lattice enthalpy.",
              },
            ],
            steps: [
              {
                reasoning:
                  "MgO has $Mg^{2+}$ and $O^{2-}$ — charges of $2+$ and $2-$ give the strongest attraction.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "NaCl and KCl both have $1+, 1-$ charges, but Na$^+$ is smaller than K$^+$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Smaller ions give stronger attraction, so NaCl > KCl. Order: MgO > NaCl > KCl.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "MgO > NaCl > KCl",
            commonErrors: [
              "Ignoring ionic charge — MgO's $2+, 2-$ ions dominate over size effects.",
            ],
          },
        },
        {
          id: "chemhl-u3-bh-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Using the Born-Haber cycle for NaCl: $\\Delta H_f = -411$, $\\Delta H_{atom}$(Na) = $+107$, $IE$(Na) = $+496$, $\\Delta H_{atom}$(Cl) = $+121$, $EA$(Cl) = $-349$ kJ mol$^{-1}$. Calculate the lattice enthalpy.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Born-Haber equation",
                statement:
                  "$\\Delta H_f = \\Delta H_{atom}(Na) + IE + \\Delta H_{atom}(Cl) + EA - \\Delta H_{latt}$",
              },
            ],
            steps: [
              {
                reasoning:
                  "Sum the non-lattice terms on the atomization/ionization side.",
                working: "107 + 496 + 121 - 349 = 375",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Apply Hess's law: $\\Delta H_f = 375 - \\Delta H_{latt}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Solve for lattice enthalpy.",
                working:
                  "-411 = 375 - \\Delta H_{latt} \\Rightarrow \\Delta H_{latt} = 786\\ \\mathrm{kJ\\,mol^{-1}}",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Lattice enthalpy is exothermic, so $\\Delta H_{latt} = -786$ kJ mol$^{-1}$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\Delta H_{latt} = -786$ kJ mol$^{-1}$ (exothermic)",
            commonErrors: [
              "Sign error on electron affinity — it is exothermic ($-349$) so subtracts from the required lattice energy.",
              "Forgetting that lattice enthalpy is quoted as exothermic (negative).",
            ],
          },
        },
        {
          id: "chemhl-u3-bh-q4",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 8,
          stem: "The Born-Haber cycle for MgO is more complex than for NaCl because Mg forms $Mg^{2+}$ and O forms $O^{2-}$.",
          parts: [
            {
              label: "a",
              prompt:
                "List the steps needed to construct the Born-Haber cycle for MgO, including all ionization energies and electron affinities.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "Explain why the second electron affinity of oxygen is endothermic and how this is handled in the cycle.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Explain why MgO has a much larger lattice enthalpy than NaCl despite similar formula units.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Higher charges",
                statement:
                  "MgO has $2+, 2-$ ions vs NaCl's $1+, 1-$, giving much stronger lattice attraction.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Atomize Mg(s) → Mg(g); ionize Mg twice → Mg$^{2+}$(g) ($IE_1 + IE_2$).",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Atomize $\\frac{1}{2}$O$_2$ → O(g); add two electrons → O$^{2-}$(g) (EA$_1$ + EA$_2$).",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Form MgO(s) lattice; combine with $\\Delta H_f$ via Hess's law.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "The second electron affinity of O is endothermic because adding an electron to O$^-$ (negative) is repelled.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "b",
                reasoning:
                  "In the cycle this positive EA$_2$ term is included as an energy cost, offset by the huge lattice enthalpy.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "MgO ions carry charges $2+$ and $2-$ vs NaCl's $1+$ and $1-$.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Electrostatic attraction scales with charge product: $2 \\times 2 = 4$ times stronger per pair.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Ionic radii are similar, so the charge effect dominates → MgO lattice enthalpy is much larger.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Atomize + 2×IE(Mg) + atomize + 2×EA(O) + lattice. (b) O$^{2-}$ formation costs energy. (c) $2+,2-$ charges give ~4× stronger attraction.",
            commonErrors: [
              "Using only one ionization energy for Mg — it needs two for Mg$^{2+}$.",
            ],
          },
        },
        {
          id: "chemhl-u3-bh-q5",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Which compound is predicted to have the MOST exothermic (largest magnitude) lattice enthalpy?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "KBr" },
              { id: "b", text: "CsI" },
              { id: "c", text: "NaCl" },
              { id: "d", text: "MgO" },
            ],
            dorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Lattice enthalpy factors",
                statement:
                  "Lattice enthalpy magnitude increases with ionic charge and decreases with ionic radius.",
              },
            ],
            steps: [
              {
                reasoning:
                  "MgO contains $Mg^{2+}$ and $O^{2-}$ — charges of $2+$ and $2-$ give by far the strongest electrostatic attraction.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The other salts all contain singly charged ions, so MgO has the largest lattice enthalpy.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** MgO",
            commonErrors: [
              "Comparing only ionic size and ignoring the much larger effect of ionic charge.",
            ],
          },
        },
        {
          id: "chemhl-u3-bh-q6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "In the Born-Haber cycle for NaCl, which single step is exothermic?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "First ionization of Na(g)" },
              { id: "b", text: "Atomization of Na(s)" },
              { id: "c", text: "Atomization of $\\frac{1}{2}$Cl$_2$(g)" },
              { id: "d", text: "Electron affinity of Cl(g)" },
            ],
            dorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Born-Haber steps",
                statement:
                  "Atomization and ionization are endothermic; electron affinity and lattice formation are exothermic.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Adding an electron to a chlorine atom releases energy (electron affinity, $-349$ kJ mol$^{-1}$).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (c) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** Electron affinity of Cl(g)",
            commonErrors: [
              "Forgetting that atomization and ionization always require energy input.",
            ],
          },
        },
        {
          id: "chemhl-u3-bh-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "The second ionization energy of magnesium is much larger than the first because:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "The second electron is removed from an inner shell closer to the nucleus",
              },
              { id: "b", text: "Mg$^+$ has a larger radius than Mg" },
              {
                id: "c",
                text: "Shielding increases after the first ionization",
              },
              { id: "d", text: "Mg has more electrons than Na" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Successive ionization energies",
                statement:
                  "Removing an electron from an inner shell (closer to the nucleus, less shielded) requires much more energy.",
              },
            ],
            steps: [
              {
                reasoning:
                  "After losing its $3s$ electron, the next electron comes from the $2p$ inner shell, which is closer to the nucleus and experiences a greater effective nuclear charge.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Inner-shell electron, closer to nucleus",
            commonErrors: [
              "Ignoring electron shells — the jump in successive IEs reveals the shell structure.",
            ],
          },
        },
        {
          id: "chemhl-u3-bh-q8",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "LiCl has a larger lattice enthalpy than KCl mainly because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "K$^+$ has a higher charge than Li$^+$" },
              { id: "b", text: "Cl$^-$ is larger in LiCl" },
              { id: "c", text: "Li$^+$ is smaller than K$^+$" },
              { id: "d", text: "Lithium is more reactive than potassium" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Ionic radius",
                statement:
                  "For ions of equal charge, the smaller ion gives stronger attraction and a larger lattice enthalpy.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Both salts contain $1+, 1-$ ions; Li$^+$ is much smaller than K$^+$ so the ions are closer together.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Smaller separation gives stronger attraction → larger lattice enthalpy.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** Li$^+$ is smaller",
            commonErrors: [
              "Comparing reactivity instead of ionic radius and charge.",
            ],
          },
        },
        {
          id: "chemhl-u3-bh-q9",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "For a stable ionic compound, the enthalpy change when gaseous ions form the solid lattice is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Always exothermic" },
              { id: "b", text: "Always endothermic" },
              { id: "c", text: "Always zero" },
              { id: "d", text: "Dependent on temperature" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Lattice enthalpy",
                statement:
                  "Energy released when gaseous ions pack into the ionic solid; attraction between opposite charges makes it exothermic.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Oppositely charged ions attract, so forming the lattice releases energy.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Always exothermic",
            commonErrors: [
              "Confusing lattice formation (gas → solid) with lattice breaking (solid → gas).",
            ],
          },
        },
        {
          id: "chemhl-u3-bh-q10",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "For KCl: $\\Delta H_f = -436$ kJ mol$^{-1}$, $\\Delta H_{atom}$(K) = $+89$, $IE$(K) = $+419$, $\\Delta H_{atom}$(Cl) = $+121$, $EA$(Cl) = $-349$ kJ mol$^{-1}$. Calculate the lattice enthalpy of KCl.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "Lattice enthalpy",
                answer: -716,
                unit: "kJ mol$^{-1}$",
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Born-Haber equation",
                statement:
                  "$\\Delta H_f = \\Delta H_{atom}(K) + IE + \\Delta H_{atom}(Cl) + EA - \\Delta H_{latt}$",
              },
            ],
            steps: [
              {
                reasoning: "Sum all terms except the lattice enthalpy.",
                working: "89 + 419 + 121 - 349 = 280",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Apply Hess's law and rearrange.",
                working:
                  "-436 = 280 - \\Delta H_{latt} \\Rightarrow \\Delta H_{latt} = 716",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Lattice formation from gaseous ions is exothermic, so the enthalpy change is negative.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\Delta H_{latt} = -716$ kJ mol$^{-1}$",
            commonErrors: [
              "Quoting $+716$ — the lattice enthalpy for ion association is exothermic (negative).",
            ],
          },
        },
        {
          id: "chemhl-u3-bh-q11",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "For NaF: $\\Delta H_f = -576$ kJ mol$^{-1}$, $\\Delta H_{atom}$(Na) = $+107$, $IE$(Na) = $+496$, $\\Delta H_{atom}$(F, from $\\frac{1}{2}$F$_2$) = $+79$, $EA$(F) = $-328$ kJ mol$^{-1}$. Calculate the lattice enthalpy of NaF.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "Lattice enthalpy",
                answer: -930,
                unit: "kJ mol$^{-1}$",
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Born-Haber equation",
                statement:
                  "$\\Delta H_f = \\Delta H_{atom}(Na) + IE + \\Delta H_{atom}(F) + EA - \\Delta H_{latt}$",
              },
            ],
            steps: [
              {
                reasoning: "Sum the non-lattice terms on the gaseous-ion side.",
                working: "107 + 496 + 79 - 328 = 354",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Set up the Hess's law balance.",
                working: "-576 = 354 - \\Delta H_{latt}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Solve for the lattice enthalpy magnitude.",
                working: "\\Delta H_{latt} = 354 + 576 = 930",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Formation of the lattice from gaseous ions is exothermic, so $\\Delta H_{latt} = -930$ kJ mol$^{-1}$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\Delta H_{latt} = -930$ kJ mol$^{-1}$",
            commonErrors: [
              "Forgetting to halve the F$_2$ atomization — $\\Delta H_{atom}$(F) is already per mole of F atoms.",
            ],
          },
        },
        {
          id: "chemhl-u3-bh-q12",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The enthalpy change for $Cl_2(g) \\to 2Cl(g)$ is $+242$ kJ. Calculate the enthalpy of atomization of chlorine (per mole of Cl atoms) in kJ mol$^{-1}$.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "Enthalpy of atomization",
                answer: 121,
                unit: "kJ mol$^{-1}$",
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Enthalpy of atomization",
                statement:
                  "Energy required to form one mole of gaseous atoms from the element in its standard state.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The equation produces 2 mol of Cl atoms, so divide by 2 to get the per-mole value.",
                working: "242 \\div 2 = 121",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State the value with units.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$+121$ kJ mol$^{-1}$",
            commonErrors: [
              "Quoting $+242$ — atomization enthalpy is defined per mole of atoms, not per mole of Cl$_2$.",
            ],
          },
        },
        {
          id: "chemhl-u3-bh-q13",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "For NaCl the lattice enthalpy (gaseous ions $\\to$ solid) is $-786$ kJ mol$^{-1}$. Given $\\Delta H_{atom}$(Na) = $+107$, $IE$(Na) = $+496$, $\\Delta H_{atom}$(Cl) = $+121$ and $EA$(Cl) = $-349$ kJ mol$^{-1}$, calculate the standard enthalpy of formation of NaCl.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "Enthalpy of formation",
                answer: -411,
                unit: "kJ mol$^{-1}$",
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Born-Haber equation",
                statement:
                  "$\\Delta H_f = \\Delta H_{atom}(Na) + IE + \\Delta H_{atom}(Cl) + EA + \\Delta H_{latt}$",
              },
            ],
            steps: [
              {
                reasoning:
                  "Sum the atomization/ionization terms and add the (negative) lattice enthalpy.",
                working: "107 + 496 + 121 - 349 - 786",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Combine the non-lattice terms first.",
                working: "375 - 786",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate the formation enthalpy.",
                working: "\\Delta H_f = -411\\ \\mathrm{kJ\\,mol^{-1}}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\Delta H_f = -411$ kJ mol$^{-1}$",
            commonErrors: [
              "Using $+786$ for the lattice term instead of $-786$ (lattice formation is exothermic).",
            ],
          },
        },
        {
          id: "chemhl-u3-bh-q14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "For MgO: $\\Delta H_f = -602$ kJ mol$^{-1}$, $\\Delta H_{atom}$(Mg) = $+148$, $IE_1 + IE_2$(Mg) = $+2188$, $\\Delta H_{atom}$(O) = $+249$, and the net electron-gain term for O$^{2-}$ = $+703$ kJ mol$^{-1}$. Calculate the lattice enthalpy of MgO.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "Lattice enthalpy",
                answer: -3890,
                unit: "kJ mol$^{-1}$",
                tolerance: 1,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Born-Haber equation",
                statement:
                  "For a $2+, 2-$ salt all ionization energies and both electron-affinity steps appear.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Sum all terms on the gaseous-ion side, including BOTH ionization energies of Mg and the net endothermic O$^{2-}$ formation.",
                working: "148 + 2188 + 249 + 703 = 3288",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Apply Hess's law: $\\Delta H_f = 3288 - \\Delta H_{latt}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Solve for the lattice enthalpy magnitude.",
                working:
                  "-602 = 3288 - \\Delta H_{latt} \\Rightarrow \\Delta H_{latt} = 3890",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "The lattice forms exothermically, so $\\Delta H_{latt} = -3890$ kJ mol$^{-1}$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\Delta H_{latt} = -3890$ kJ mol$^{-1}$",
            commonErrors: [
              "Using only one ionization energy for Mg — Mg$^{2+}$ requires $IE_1 + IE_2$.",
            ],
          },
        },
        {
          id: "chemhl-u3-bh-q15",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Given $\\Delta H_{atom}$(Na) = $+107$ kJ mol$^{-1}$, calculate the energy required to completely atomize $2.00$ mol of sodium metal.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "Energy required",
                answer: 214,
                unit: "kJ",
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Enthalpy of atomization",
                statement:
                  "Energy to form one mole of gaseous atoms; scale by moles for any amount.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Multiply the molar atomization enthalpy by the amount.",
                working: "2.00 \\times 107 = 214",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State the answer with units.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$214$ kJ",
            commonErrors: [
              "Forgetting that the answer is total energy (kJ), not molar enthalpy (kJ mol$^{-1}$).",
            ],
          },
        },
        {
          id: "chemhl-u3-bh-q16",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 8,
          stem: "Calcium oxide, CaO, contains $Ca^{2+}$ and $O^{2-}$ ions. Data: $\\Delta H_f$(CaO) = $-635$ kJ mol$^{-1}$, $\\Delta H_{atom}$(Ca) = $+178$, $IE_1 + IE_2$(Ca) = $+1740$, $\\Delta H_{atom}$(O) = $+249$, net electron-gain term for O$^{2-}$ = $+703$ kJ mol$^{-1}$.",
          parts: [
            {
              label: "a",
              prompt:
                "List the steps required to construct the Born-Haber cycle for CaO, including all ionization energies and electron-affinity terms.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "Calculate the lattice enthalpy of CaO from the data given.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Explain why the net electron-gain term for O$^{2-}$ is positive even though the first electron affinity of oxygen is exothermic.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Born-Haber equation",
                statement:
                  "For $2+,2-$ ions: $\\Delta H_f = \\Delta H_{atom}(Ca) + (IE_1+IE_2) + \\Delta H_{atom}(O) + (EA_1+EA_2) - \\Delta H_{latt}$",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Atomize Ca(s) to Ca(g), then remove two electrons: $IE_1 + IE_2$ gives Ca$^{2+}$(g).",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Atomize $\\frac{1}{2}$O$_2$ to O(g), then add two electrons: $EA_1 + EA_2$ gives O$^{2-}$(g).",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Form CaO(s) from gaseous ions and close the cycle using $\\Delta H_f$ via Hess's law.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Sum the gaseous-ion side terms.",
                working: "178 + 1740 + 249 + 703 = 2870",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Apply Hess's law: $-635 = 2870 - \\Delta H_{latt}$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "$\\Delta H_{latt} = 2870 + 635 = 3505$, exothermic so $-3505$ kJ mol$^{-1}$.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "The first electron affinity of O is exothermic, but adding a second electron to O$^-$ is repelled by the negative charge.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "The second electron affinity is large and endothermic, so the net two-electron term is positive.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Atomize + $IE_1+IE_2$(Ca) + atomize + $EA_1+EA_2$(O) + lattice. (b) $\\Delta H_{latt} = -3505$ kJ mol$^{-1}$. (c) EA$_2$ is endothermic and outweighs EA$_1$.",
            commonErrors: [
              "Treating the O$^{2-}$ formation as exothermic — the second EA is strongly endothermic.",
            ],
          },
        },
      ],
    },
    {
      id: "chemhl-u3-solution-enthalpy",
      title: "Solution enthalpy and hydration",
      skill:
        "Relate lattice enthalpy and hydration enthalpies to solution enthalpy, and explain dissolution trends using ionic charge and size.",
      lesson: {
        sections: [
          {
            heading: "Dissolving ionic solids",
            body: "When an ionic solid dissolves, two energy changes occur: (1) the lattice must be broken — this costs energy equal to the lattice enthalpy (endothermic, $+\\Delta H_{latt}$), and (2) the gaseous ions are hydrated by water — this releases energy equal to the hydration enthalpies (exothermic, $\\Delta H_{hyd}$). The solution enthalpy is $\\Delta H_{sol} = \\Delta H_{latt} + \\Delta H_{hyd}(cation) + \\Delta H_{hyd}(anion)$. Whether a salt dissolves exothermically or endothermically depends on which term dominates.",
          },
          {
            heading: "Hydration trends",
            body: "Hydration enthalpy magnitude decreases as ionic radius increases and increases with ionic charge. Small, highly charged ions (e.g. Mg$^{2+}$, Al$^{3+}$) are hydrated very strongly — their hydration enthalpies are large and exothermic. Large ions (e.g. Cs$^+$, I$^-$) are hydrated weakly. This is why MgSO$_4$ dissolves exothermically (hydration wins over lattice) while NaCl dissolves endothermically (lattice cost is relatively larger).",
          },
          {
            heading: "Predicting solubility",
            body: "Salts with small, highly charged ions tend to have large hydration enthalpies that can exceed lattice enthalpies → dissolve exothermically and are very soluble (e.g. nitrates, many sulfates). Salts with large ions and low charges may have lattice enthalpies exceeding hydration → dissolve endothermically or are insoluble (e.g. some carbonates, phosphates). The balance determines both solubility and whether dissolution feels hot or cold.",
          },
        ],
        keyFormulas: [
          {
            name: "Solution enthalpy",
            statement:
              "$\\Delta H_{sol} = \\Delta H_{latt} + \\Delta H_{hyd}(+) + \\Delta H_{hyd}(-)$",
          },
          {
            name: "Hydration factors",
            statement:
              "Hydration enthalpy increases with ionic charge and decreases with ionic radius.",
          },
          {
            name: "Solubility rule",
            statement:
              "Exothermic dissolution (hydration > lattice) → very soluble; endothermic → less soluble.",
          },
        ],
        workedExample: {
          problem:
            "Explain why anhydrous CuSO$_4$ dissolves exothermically in water while NaCl dissolves endothermically.",
          solution:
            "CuSO$_4$ has Cu$^{2+}$ (small, +2 charge) which is hydrated very strongly — the hydration enthalpy exceeds the lattice enthalpy, so dissolution is exothermic. NaCl has large singly charged ions with moderate hydration that doesn't fully offset the lattice cost, so dissolution is endothermic.",
        },
      },
      questions: [
        {
          id: "chemhl-u3-se-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The solution enthalpy of an ionic solid is determined by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only the hydration enthalpy" },
              { id: "b", text: "Only the lattice enthalpy" },
              {
                id: "c",
                text: "The balance between lattice enthalpy (cost) and hydration enthalpies (gain)",
              },
              { id: "d", text: "The colour of the ions" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Solution enthalpy",
                statement:
                  "$\\Delta H_{sol} = \\Delta H_{latt} + \\Delta H_{hyd}(+) + \\Delta H_{hyd}(-)$",
              },
            ],
            steps: [
              {
                reasoning:
                  "Both lattice breaking and ion hydration contribute to the net enthalpy.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** Lattice vs hydration balance",
            commonErrors: [
              "Ignoring hydration — it is essential for solution enthalpy.",
            ],
          },
        },
        {
          id: "chemhl-u3-se-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Rank the hydration enthalpies of Na$^+$, Mg$^{2+}$ and Al$^{3+}$ in order of DECREASING magnitude and explain your reasoning.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Hydration factors",
                statement:
                  "Hydration enthalpy increases with ionic charge and decreases with ionic radius.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Al$^{3+}$ has the highest charge (+3) and small radius → strongest hydration.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Mg$^{2+}$ has +2 charge → stronger hydration than Na$^+$ (+1).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Order: Al$^{3+}$ > Mg$^{2+}$ > Na$^+$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Al$^{3+}$ > Mg$^{2+}$ > Na$^+$",
            commonErrors: [
              "Ranking by atomic number instead of charge and radius.",
            ],
          },
        },
        {
          id: "chemhl-u3-se-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "When anhydrous copper(II) sulfate dissolves in water the solution becomes hot. Explain this observation using lattice and hydration enthalpies.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Exothermic dissolution",
                statement:
                  "When hydration enthalpy exceeds lattice enthalpy, dissolution releases heat.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Breaking the CuSO$_4$ lattice costs energy (endothermic).",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Cu$^{2+}$ is small and doubly charged → very strong hydration, releasing more energy than the lattice costs.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "SO$_4^{2-}$ is also well hydrated.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Net $\\Delta H_{sol} < 0$ → exothermic → temperature rises.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Hydration of the small, highly charged ions releases more energy than the lattice requires → exothermic dissolution.",
            commonErrors: [
              "Saying 'the lattice is weak' — it is strong, but hydration is even stronger.",
            ],
          },
        },
        {
          id: "chemhl-u3-se-q4",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 8,
          stem: "Compare the dissolution of NaCl and MgSO$_4$ in water.",
          parts: [
            {
              label: "a",
              prompt: "State the sign of $\\Delta H_{sol}$ for each compound.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Explain the difference in terms of ionic charge and hydration.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Predict whether CaCO$_3$ would dissolve exothermically or endothermically, and justify your answer.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Charge and hydration",
                statement:
                  "Higher charge → stronger hydration; Mg$^{2+}$ and SO$_4^{2-}$ hydrate more strongly than Na$^+$ and Cl$^-$.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "NaCl: endothermic ($\\Delta H_{sol} > 0$).",
                marks: 1,
                markCode: "A",
              },
              {
                part: "a",
                reasoning: "MgSO$_4$: exothermic ($\\Delta H_{sol} < 0$).",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Na$^+$ and Cl$^-$ are large singly charged ions with moderate hydration.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "b",
                reasoning:
                  "Mg$^{2+}$ and SO$_4^{2-}$ are doubly charged → much stronger hydration enthalpies.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "For MgSO$_4$ hydration exceeds lattice cost; for NaCl lattice cost dominates → endothermic.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "CaCO$_3$ has Ca$^{2+}$ (hydrated strongly) but CO$_3^{2-}$ is large and poorly hydrated.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "The lattice enthalpy of CaCO$_3$ is very large due to $2+, 2-$ charges.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Hydration cannot fully offset this → dissolution is endothermic (and CaCO$_3$ is sparingly soluble).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) NaCl endothermic, MgSO$_4$ exothermic. (b) Doubly charged ions hydrate strongly. (c) CaCO$_3$ endothermic — large lattice, weak anion hydration.",
            commonErrors: [
              "Assuming all $2+,2-$ salts dissolve exothermically — hydration of the anion matters too.",
            ],
          },
        },
        {
          id: "chemhl-u3-se-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The enthalpy of hydration of an ion is defined as the enthalpy change when:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "An ionic solid breaks into gaseous ions" },
              {
                id: "b",
                text: "A gaseous ion is surrounded by water molecules",
              },
              { id: "c", text: "Ions move from solution into the solid state" },
              { id: "d", text: "Water molecules evaporate from the solution" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Enthalpy of hydration",
                statement:
                  "Energy change when one mole of gaseous ions is hydrated by water; always exothermic.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Hydration specifically refers to gaseous ions being surrounded by polar water molecules.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** Gaseous ion $\\to$ hydrated ion",
            commonErrors: [
              "Confusing hydration with lattice dissociation or solution enthalpy.",
            ],
          },
        },
        {
          id: "chemhl-u3-se-q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Which salt is expected to dissolve MOST exothermically in water?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "NaCl" },
              { id: "b", text: "MgSO$_4$" },
              { id: "c", text: "KBr" },
              { id: "d", text: "CaCO$_3$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Charge and hydration",
                statement:
                  "Small, highly charged ions are hydrated very strongly, which can outweigh the lattice cost.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Mg$^{2+}$ and SO$_4^{2-}$ are doubly charged and relatively small, giving very large hydration enthalpies.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Hydration exceeds the lattice cost for MgSO$_4$; the singly charged salts hydrate more weakly.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** MgSO$_4$",
            commonErrors: [
              "Choosing CaCO$_3$ — although doubly charged, CO$_3^{2-}$ is large and hydrates poorly while the lattice is huge.",
            ],
          },
        },
        {
          id: "chemhl-u3-se-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "The magnitude of the hydration enthalpy of an ion increases when the ion has:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A lower charge and smaller radius" },
              { id: "b", text: "A higher charge and smaller radius" },
              { id: "c", text: "A lower charge and larger radius" },
              { id: "d", text: "A higher charge and larger radius" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Hydration factors",
                statement:
                  "Hydration enthalpy increases with ionic charge and decreases with ionic radius.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Higher charge attracts the polar water molecules more strongly; smaller radius means the charge is concentrated.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Higher charge, smaller radius",
            commonErrors: [
              "Reversing the radius trend — larger ions are hydrated more weakly.",
            ],
          },
        },
        {
          id: "chemhl-u3-se-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "NaCl dissolves endothermically mainly because:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Its hydration enthalpy is larger than its lattice enthalpy",
              },
              { id: "b", text: "Water cannot hydrate Na$^+$ ions" },
              { id: "c", text: "NaCl has no lattice enthalpy" },
              {
                id: "d",
                text: "The energy needed to break the lattice exceeds the energy released on hydration",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Solution enthalpy",
                statement:
                  "$\\Delta H_{sol} = \\Delta H_{latt} + \\Delta H_{hyd}(+) + \\Delta H_{hyd}(-)$",
              },
            ],
            steps: [
              {
                reasoning:
                  "For NaCl the lattice cost is only partially offset by hydration of the large singly charged ions, so $\\Delta H_{sol} > 0$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Lattice cost exceeds hydration gain",
            commonErrors: [
              "Thinking endothermic dissolution means hydration is absent — both terms are present but the lattice dominates.",
            ],
          },
        },
        {
          id: "chemhl-u3-se-q9",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "When an ionic solid dissolves in water, the entropy of the system generally:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Decreases, because ions are ordered by water" },
              {
                id: "b",
                text: "Increases, because the ions become dispersed in solution",
              },
              { id: "c", text: "Stays the same" },
              { id: "d", text: "Becomes zero" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Entropy of solution",
                statement:
                  "Dissolution disperses ions through the solution, increasing disorder and entropy.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Ordered solid lattice → freely moving hydrated ions is a large increase in dispersal.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** Increases",
            commonErrors: [
              "Assuming hydration ordering always decreases entropy — dispersion of ions dominates.",
            ],
          },
        },
        {
          id: "chemhl-u3-se-q10",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "For a salt X: $\\Delta H_{latt} = +2500$ kJ mol$^{-1}$ (to break the lattice), $\\Delta H_{hyd}$(cation) = $-1550$ kJ mol$^{-1}$, $\\Delta H_{hyd}$(anion) = $-1050$ kJ mol$^{-1}$. Calculate $\\Delta H_{sol}$ in kJ mol$^{-1}$.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "Solution enthalpy",
                answer: -100,
                unit: "kJ mol$^{-1}$",
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Solution enthalpy",
                statement:
                  "$\\Delta H_{sol} = \\Delta H_{latt} + \\Delta H_{hyd}(+) + \\Delta H_{hyd}(-)$",
              },
            ],
            steps: [
              {
                reasoning:
                  "Add the endothermic lattice-breaking term and both exothermic hydration terms.",
                working: "2500 - 1550 - 1050",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Combine step by step.",
                working: "2500 - 2600 = -100",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State the final value with units.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\Delta H_{sol} = -100$ kJ mol$^{-1}$ (exothermic)",
            commonErrors: [
              "Adding the hydration enthalpies as positive numbers — they are exothermic (negative).",
            ],
          },
        },
        {
          id: "chemhl-u3-se-q11",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "For KCl: $\\Delta H_{latt} = +715$ kJ mol$^{-1}$, $\\Delta H_{hyd}$(K$^+$) = $-340$ kJ mol$^{-1}$, $\\Delta H_{hyd}$(Cl$^-$) = $-364$ kJ mol$^{-1}$. Calculate $\\Delta H_{sol}$ in kJ mol$^{-1}$.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "Solution enthalpy",
                answer: 11,
                unit: "kJ mol$^{-1}$",
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Solution enthalpy",
                statement:
                  "$\\Delta H_{sol} = \\Delta H_{latt} + \\Delta H_{hyd}(+) + \\Delta H_{hyd}(-)$",
              },
            ],
            steps: [
              {
                reasoning: "Sum hydration enthalpies first.",
                working: "-340 - 364 = -704",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Add the lattice-breaking cost.",
                working: "715 - 704 = 11",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State the final value; positive means endothermic.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\Delta H_{sol} = +11$ kJ mol$^{-1}$ (endothermic)",
            commonErrors: [
              "Reporting $-11$ — the sign shows whether dissolution absorbs or releases heat.",
            ],
          },
        },
        {
          id: "chemhl-u3-se-q12",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "A salt dissolves with $\\Delta H_{sol} = -20$ kJ mol$^{-1}$. Its lattice enthalpy (to break) is $+600$ kJ mol$^{-1}$ and $\\Delta H_{hyd}$(anion) = $-350$ kJ mol$^{-1}$. Calculate $\\Delta H_{hyd}$ of the cation in kJ mol$^{-1}$.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "Hydration enthalpy of cation",
                answer: -270,
                unit: "kJ mol$^{-1}$",
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Solution enthalpy",
                statement:
                  "$\\Delta H_{sol} = \\Delta H_{latt} + \\Delta H_{hyd}(+) + \\Delta H_{hyd}(-)$",
              },
            ],
            steps: [
              {
                reasoning:
                  "Rearrange the equation for the unknown cation hydration term.",
                working:
                  "\\Delta H_{hyd}(+) = \\Delta H_{sol} - \\Delta H_{latt} - \\Delta H_{hyd}(-)",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Substitute the known values.",
                working: "-20 - 600 - (-350)",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate.",
                working: "\\Delta H_{hyd}(+) = -270\\ \\mathrm{kJ\\,mol^{-1}}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\Delta H_{hyd}(+) = -270$ kJ mol$^{-1}$",
            commonErrors: [
              "Sign error when subtracting $\\Delta H_{hyd}(-)$ — subtracting a negative adds.",
            ],
          },
        },
        {
          id: "chemhl-u3-se-q13",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Two salts are dissolved in water. Salt A: $\\Delta H_{latt} = +600$, hydration enthalpies sum to $-700$ kJ mol$^{-1}$. Salt B: $\\Delta H_{latt} = +700$, hydration enthalpies sum to $-650$ kJ mol$^{-1}$.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "Salt A $\\Delta H_{sol}$",
                answer: -100,
                unit: "kJ mol$^{-1}$",
              },
              {
                label: "Salt B $\\Delta H_{sol}$",
                answer: 50,
                unit: "kJ mol$^{-1}$",
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Solution enthalpy",
                statement:
                  "$\\Delta H_{sol} = \\Delta H_{latt} + \\Delta H_{hyd}(+) + \\Delta H_{hyd}(-)$",
              },
            ],
            steps: [
              {
                reasoning: "Apply the equation to salt A.",
                working: "600 - 700 = -100",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Salt A dissolves exothermically ($\\Delta H_{sol} < 0$).",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Apply the equation to salt B.",
                working: "700 - 650 = 50",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Salt B dissolves endothermically ($\\Delta H_{sol} > 0$).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Salt A: $-100$ kJ mol$^{-1}$ (exothermic); Salt B: $+50$ kJ mol$^{-1}$ (endothermic)",
            commonErrors: [
              "Forgetting the hydration terms are negative in the sum.",
            ],
          },
        },
        {
          id: "chemhl-u3-se-q14",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "A salt has $\\Delta H_{sol} = +150$ kJ mol$^{-1}$. Calculate the energy, in kJ, that must be supplied to dissolve $0.0200$ mol of the salt.",
          response: {
            type: "numeric",
            parts: [{ label: "Energy supplied", answer: 3.0, unit: "kJ" }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Molar to total enthalpy",
                statement:
                  "Total enthalpy change = molar enthalpy change $\\times$ amount in moles.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Endothermic dissolution absorbs energy; multiply molar enthalpy by moles.",
                working: "0.0200 \\times 150 = 3.0",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Recognise the energy must be supplied (endothermic).",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "State the final value with units.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$3.0$ kJ must be supplied",
            commonErrors: [
              "Reporting $-3.0$ kJ — energy supplied is a positive quantity here.",
            ],
          },
        },
        {
          id: "chemhl-u3-se-q15",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "For LiF: $\\Delta H_{latt} = +1036$ kJ mol$^{-1}$, $\\Delta H_{hyd}$(Li$^+$) = $-520$ kJ mol$^{-1}$, $\\Delta H_{hyd}$(F$^-$) = $-510$ kJ mol$^{-1}$. Calculate $\\Delta H_{sol}$ in kJ mol$^{-1}$.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "Solution enthalpy",
                answer: 6,
                unit: "kJ mol$^{-1}$",
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Solution enthalpy",
                statement:
                  "$\\Delta H_{sol} = \\Delta H_{latt} + \\Delta H_{hyd}(+) + \\Delta H_{hyd}(-)$",
              },
            ],
            steps: [
              {
                reasoning: "Sum all three terms.",
                working: "1036 - 520 - 510",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate.",
                working: "1036 - 1030 = 6",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "State the final value; slightly positive means endothermic.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "$\\Delta H_{sol} = +6$ kJ mol$^{-1}$ (weakly endothermic)",
            commonErrors: [
              "Arithmetic slips when the hydration sum nearly cancels the lattice term.",
            ],
          },
        },
        {
          id: "chemhl-u3-se-q16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 6,
          stem: "Explain why anhydrous NaCl dissolves endothermically in water while anhydrous MgSO$_4$ dissolves exothermically, and predict how raising the temperature affects the solubility of each salt.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Lattice vs hydration balance",
                statement:
                  "Exothermic dissolution occurs when hydration enthalpies exceed the lattice cost; endothermic when the lattice dominates.",
              },
              {
                kind: "principle",
                name: "Le Chatelier and solubility",
                statement:
                  "Raising T favours the endothermic direction: solubility increases for endothermic dissolution, decreases for exothermic.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Na$^+$ and Cl$^-$ are large singly charged ions with only moderate hydration enthalpies.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The lattice enthalpy of NaCl is not fully offset, so $\\Delta H_{sol} > 0$ — dissolution is endothermic.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Mg$^{2+}$ and SO$_4^{2-}$ are doubly charged and hydrate very strongly (large exothermic hydration enthalpies).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "For MgSO$_4$ hydration exceeds the lattice cost, so $\\Delta H_{sol} < 0$ — dissolution is exothermic.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Endothermic dissolution (NaCl) is favoured by higher T → solubility increases with temperature.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Exothermic dissolution (MgSO$_4$) is disfavoured by higher T → solubility decreases with temperature.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "NaCl: lattice cost > hydration gain → endothermic, solubility rises with T. MgSO$_4$: hydration > lattice → exothermic, solubility falls with T.",
            commonErrors: [
              "Saying 'high charge always means exothermic dissolution' — the anion's size and hydration matter too (cf. CaCO$_3$).",
            ],
          },
        },
      ],
    },
  ],
};
