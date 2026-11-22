import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "chemhl-u1-lesson-3-2",
  code: "3-2",
  title: "Entropy and Spontaneity",
  goal: "I CAN calculate entropy changes, use $\\Delta G = \\Delta H - T\\Delta S$ to predict spontaneity, and explain why some exothermic reactions are non-spontaneous and vice versa.",
  standards: ["Paper 1", "Paper 2", "AHL R1"],
  vocabulary: [
    {
      term: "Entropy ($S$)",
      definition:
        "A measure of the dispersal of energy or disorder in a system; the universe's entropy always increases for spontaneous processes.",
    },
    {
      term: "Standard entropy ($S^\\circ$)",
      definition:
        "The entropy of one mole of a substance in its standard state at 298 K; elements have non-zero standard entropies.",
    },
    {
      term: "Entropy change ($\\Delta S$)",
      definition:
        "The change in entropy for a reaction, calculated from standard entropies of products minus reactants.",
    },
    {
      term: "Gibbs free energy ($\\Delta G$)",
      definition:
        "The thermodynamic quantity that predicts spontaneity: $\\Delta G = \\Delta H - T\\Delta S$; spontaneous when $\\Delta G < 0$.",
    },
    {
      term: "Spontaneous process",
      definition:
        "A process that occurs without external energy input; $\\Delta G < 0$ at the given temperature.",
    },
    {
      term: "Non-spontaneous process",
      definition:
        "A process requiring energy input to occur; $\\Delta G > 0$ at the given temperature.",
    },
  ],
  concepts: [
    {
      id: "chemhl-u3-entropy",
      title: "Entropy and the second law",
      skill:
        "Calculate entropy changes from standard entropies and explain the factors that increase or decrease entropy.",
      lesson: {
        sections: [
          {
            heading: "What entropy measures",
            body: "Entropy ($S$) measures how dispersed or disordered energy is within a system. A gas has higher entropy than a liquid, which has higher entropy than a solid, because particles have more freedom of movement. The second law of thermodynamics states that for any spontaneous process the entropy of the universe increases — isolated systems evolve toward maximum entropy.",
          },
          {
            heading: "Calculating $\\Delta S$",
            body: "For a reaction, $\\Delta S^\\circ = \\sum S^\\circ(\\text{products}) - \\sum S^\\circ(\\text{reactants})$, using standard molar entropies at 298 K. Unlike enthalpies, elements have non-zero standard entropies (e.g. S$^\\circ$(C, graphite) $= 5.7$ J K$^{-1}$ mol$^{-1}$, not zero). A positive $\\Delta S$ means the products are more disordered — typical when moles of gas increase or solids become liquids/gases.",
          },
          {
            heading: "Factors affecting entropy",
            body: "Entropy increases when: number of gas moles increases, solids melt or liquids vaporise, solutions become more dilute, or particles gain freedom. Entropy decreases when gases condense, liquids freeze, or gases dissolve to form ordered structures. A reaction that produces more gas molecules almost always has positive $\\Delta S$.",
          },
        ],
        keyFormulas: [
          {
            name: "Entropy change",
            statement:
              "$\\Delta S^\\circ = \\sum S^\\circ_{products} - \\sum S^\\circ_{reactants}$ (J K$^{-1}$ mol$^{-1}$)",
          },
          {
            name: "Entropy order",
            statement:
              "Gas > liquid > solid; more moles of gas → higher entropy.",
          },
          {
            name: "Second law",
            statement: "For spontaneous processes, $\\Delta S_{universe} > 0$.",
          },
        ],
        workedExample: {
          problem:
            "For $N_2(g) + 3H_2(g) \\to 2NH_3(g)$, $S^\\circ$ values are $191.6$, $130.7$ and $192.5$ J K$^{-1}$ mol$^{-1}$ respectively. Calculate $\\Delta S^\\circ$.",
          solution:
            "$\\Delta S^\\circ = 2(192.5) - [191.6 + 3(130.7)] = 385 - 583.7 = -198.7$ J K$^{-1}$ mol$^{-1}$. Negative because 4 mol gas → 2 mol gas (fewer gas moles).",
        },
      },
      questions: [
        {
          id: "chemhl-u3-ent-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Which change has the LARGEST increase in entropy?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Ice melting to water" },
              { id: "b", text: "Gas dissolving in water to form ions" },
              { id: "c", text: "Water freezing to ice" },
              { id: "d", text: "A gas condensing to liquid" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Entropy increases with freedom",
                statement:
                  "Melting, vaporising and diluting increase entropy; freezing, condensing and concentrating decrease it.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Melting converts an ordered solid to a disordered liquid — large entropy increase.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "The other options all decrease entropy.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** Ice melting",
            commonErrors: [
              "Choosing gas dissolution — ordering of ions in solution can decrease entropy.",
            ],
          },
        },
        {
          id: "chemhl-u3-ent-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "For the reaction $CaCO_3(s) \\to CaO(s) + CO_2(g)$, state whether $\\Delta S^\\circ$ is positive or negative and explain your reasoning.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Gas moles rule",
                statement:
                  "Producing a gas from solids greatly increases entropy.",
              },
            ],
            steps: [
              {
                reasoning: "One solid reactant produces one solid + one gas.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Gas has much higher entropy than solid — the gas molecule gains freedom.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Therefore $\\Delta S^\\circ > 0$ (positive).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Positive — a gas is produced from a solid.",
            commonErrors: [
              "Counting only moles, not states — a gas has far higher entropy than a solid.",
            ],
          },
        },
        {
          id: "chemhl-u3-ent-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Calculate $\\Delta S^\\circ$ for $2SO_2(g) + O_2(g) \\to 2SO_3(g)$ given $S^\\circ(SO_2) = 248.2$, $S^\\circ(O_2) = 205.1$, $S^\\circ(SO_3) = 256.8$ J K$^{-1}$ mol$^{-1}$, and explain the sign.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Entropy change",
                statement:
                  "$\\Delta S^\\circ = \\sum S^\\circ_{products} - \\sum S^\\circ_{reactants}$",
              },
            ],
            steps: [
              {
                reasoning: "Products: $2 \\times 256.8 = 513.6$.",
                working: "2 \\times 256.8",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Reactants: $2(248.2) + 205.1 = 701.5$.",
                working: "2(248.2) + 205.1",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate $\\Delta S^\\circ$.",
                working:
                  "513.6 - 701.5 = -187.9\\ \\mathrm{J\\,K^{-1}\\,mol^{-1}}",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Negative because 3 mol gas → 2 mol gas (fewer gas molecules).",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "$\\Delta S^\\circ = -187.9$ J K$^{-1}$ mol$^{-1}$ (negative; gas moles decrease)",
            commonErrors: [
              "Forgetting to multiply SO$_2$ and SO$_3$ entropies by their stoichiometric coefficients.",
            ],
          },
        },
        {
          id: "chemhl-u3-ent-q4",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 8,
          stem: "Consider the decomposition of calcium carbonate: $CaCO_3(s) \\to CaO(s) + CO_2(g)$, $\\Delta H = +178$ kJ mol$^{-1}$, $\\Delta S = +160$ J K$^{-1}$ mol$^{-1}$.",
          parts: [
            {
              label: "a",
              prompt:
                "Calculate $\\Delta G$ at 298 K and state whether the reaction is spontaneous at room temperature.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "Calculate the temperature at which $\\Delta G = 0$ (the decomposition becomes spontaneous).",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Explain why limestone does not decompose at room temperature but does in a kiln.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Gibbs free energy",
                statement:
                  "$\\Delta G = \\Delta H - T\\Delta S$; spontaneous when $\\Delta G < 0$.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Convert $\\Delta S$ to kJ: $+0.160$ kJ K$^{-1}$ mol$^{-1}$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Calculate $\\Delta G$.",
                working:
                  "178 - 298(0.160) = 178 - 47.7 = +130.3\\ \\mathrm{kJ\\,mol^{-1}}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "$\\Delta G > 0$ → non-spontaneous at 298 K.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Set $\\Delta G = 0$: $T = \\Delta H / \\Delta S$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Calculate.",
                working: "178 / 0.160 = 1112.5\\ \\mathrm{K}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Above $\\approx 1113$ K the reaction becomes spontaneous.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "At room temperature $\\Delta G > 0$ so decomposition is non-spontaneous.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "In a kiln the high temperature makes $T\\Delta S$ exceed $\\Delta H$, giving $\\Delta G < 0$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) $\\Delta G = +130$ kJ mol$^{-1}$, non-spontaneous. (b) $T \\approx 1113$ K. (c) Kiln heat makes $\\Delta G < 0$.",
            commonErrors: [
              "Not converting J to kJ for $\\Delta S$ — units must match $\\Delta H$.",
            ],
          },
        },
        {
          id: "chemhl-u3-ent-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Unlike the standard enthalpy of formation, the standard entropy of an element in its standard state is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Always zero" },
              { id: "b", text: "Impossible to measure" },
              { id: "c", text: "Always positive (non-zero)" },
              { id: "d", text: "Always negative" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Standard entropy",
                statement:
                  "Elements have non-zero standard molar entropies — only $\\Delta H_f^\\circ$ of elements is defined as zero.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Every substance has some disorder/energy dispersal at 298 K, so $S^\\circ$ of elements is positive.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Positive (non-zero)",
            commonErrors: [
              "Applying the $\\Delta H_f^\\circ = 0$ convention for elements to entropy — $S^\\circ$ of elements is tabulated.",
            ],
          },
        },
        {
          id: "chemhl-u3-ent-q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Which reaction has a positive $\\Delta S^\\circ$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$H_2(g) + Cl_2(g) \\to 2HCl(g)$" },
              { id: "b", text: "$2NO_2(g) \\to N_2O_4(g)$" },
              { id: "c", text: "$N_2(g) + 3H_2(g) \\to 2NH_3(g)$" },
              { id: "d", text: "$N_2O_4(g) \\to 2NO_2(g)$" },
            ],
            dorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Gas moles rule",
                statement:
                  "An increase in the number of gas molecules almost always gives $\\Delta S > 0$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$N_2O_4 \\to 2NO_2$ converts 1 mol of gas into 2 mol of gas — more freedom, positive $\\Delta S$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The other options keep or reduce gas moles (4→2, 2→1, 2→2).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** $N_2O_4(g) \\to 2NO_2(g)$",
            commonErrors: [
              "Counting only total moles of substance, not moles of gas.",
            ],
          },
        },
        {
          id: "chemhl-u3-ent-q7",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The standard units of entropy change $\\Delta S^\\circ$ are:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "kJ mol$^{-1}$" },
              { id: "b", text: "J mol$^{-1}$" },
              { id: "c", text: "J K$^{-1}$ mol$^{-1}$" },
              { id: "d", text: "kJ K$^{-1}$ mol$^{-1}$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Entropy units",
                statement:
                  "Entropy is energy per temperature per mole: J K$^{-1}$ mol$^{-1}$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Entropy has units of energy (J) per kelvin per mole — $\\mathrm{J\\,K^{-1}\\,mol^{-1}}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** J K$^{-1}$ mol$^{-1}$",
            commonErrors: [
              "Confusing entropy units with enthalpy units (kJ mol$^{-1}$).",
            ],
          },
        },
        {
          id: "chemhl-u3-ent-q8",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The correct order of standard entropy for a substance is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "All states have equal entropy" },
              { id: "b", text: "Liquid $>$ gas $>$ solid" },
              { id: "c", text: "Gas $>$ liquid $>$ solid" },
              { id: "d", text: "Solid $>$ liquid $>$ gas" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Entropy order",
                statement:
                  "Gas particles have the most freedom of movement, then liquids, then solids.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Gases move freely in 3D, liquids vibrate and slide past each other, solids only vibrate in fixed positions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Gas $>$ liquid $>$ solid",
            commonErrors: [
              "Reversing the order — solids are most ordered, hence lowest entropy.",
            ],
          },
        },
        {
          id: "chemhl-u3-ent-q9",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Which process produces the largest INCREASE in entropy?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Diluting a concentrated salt solution with water",
              },
              { id: "b", text: "Freezing water into ice" },
              { id: "c", text: "Crystallising a solution" },
              { id: "d", text: "Condensing water vapour" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Factors affecting entropy",
                statement:
                  "Entropy increases on dilution, melting, vaporising and gas production; decreases on concentration, freezing and condensation.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Dilution spreads ions and water molecules over a larger volume — greater dispersal of energy.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The other options all reduce particle freedom (freezing, condensing, crystallising).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** Diluting the solution",
            commonErrors: [
              "Choosing gas dissolution — ions can become ordered (hydration shells) and decrease entropy.",
            ],
          },
        },
        {
          id: "chemhl-u3-ent-q10",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "For $N_2(g) + O_2(g) \\to 2NO(g)$, given $S^\\circ$(N$_2$) = $191.6$, $S^\\circ$(O$_2$) = $205.0$, $S^\\circ$(NO) = $210.8$ J K$^{-1}$ mol$^{-1}$, calculate $\\Delta S^\\circ$ in J K$^{-1}$ mol$^{-1}$.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "$\\Delta S^\\circ$",
                answer: 25.0,
                unit: "J K$^{-1}$ mol$^{-1}$",
                tolerance: 0.5,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Entropy change",
                statement:
                  "$\\Delta S^\\circ = \\sum S^\\circ_{products} - \\sum S^\\circ_{reactants}$",
              },
            ],
            steps: [
              {
                reasoning: "Products: $2 \\times 210.8 = 421.6$.",
                working: "2 \\times 210.8",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Reactants: $191.6 + 205.0 = 396.6$.",
                working: "191.6 + 205.0",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate $\\Delta S^\\circ$.",
                working:
                  "421.6 - 396.6 = 25.0\\ \\mathrm{J\\,K^{-1}\\,mol^{-1}}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\Delta S^\\circ = +25.0$ J K$^{-1}$ mol$^{-1}$",
            commonErrors: [
              "Not multiplying the NO entropy by its coefficient of 2.",
            ],
          },
        },
        {
          id: "chemhl-u3-ent-q11",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "For $CaCO_3(s) \\to CaO(s) + CO_2(g)$, given $S^\\circ$(CaCO$_3$) = $91.7$, $S^\\circ$(CaO) = $38.1$, $S^\\circ$(CO$_2$) = $213.7$ J K$^{-1}$ mol$^{-1}$, calculate $\\Delta S^\\circ$ in J K$^{-1}$ mol$^{-1}$.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "$\\Delta S^\\circ$",
                answer: 160.1,
                unit: "J K$^{-1}$ mol$^{-1}$",
                tolerance: 0.5,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Entropy change",
                statement:
                  "$\\Delta S^\\circ = \\sum S^\\circ_{products} - \\sum S^\\circ_{reactants}$",
              },
            ],
            steps: [
              {
                reasoning: "Products: $38.1 + 213.7 = 251.8$.",
                working: "38.1 + 213.7",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Reactant: $S^\\circ$(CaCO$_3$) = $91.7$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate $\\Delta S^\\circ$.",
                working:
                  "251.8 - 91.7 = 160.1\\ \\mathrm{J\\,K^{-1}\\,mol^{-1}}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\Delta S^\\circ = +160.1$ J K$^{-1}$ mol$^{-1}$",
            commonErrors: [
              "Subtracting in the wrong direction — products minus reactants.",
            ],
          },
        },
        {
          id: "chemhl-u3-ent-q12",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "For $CH_4(g) + 2O_2(g) \\to CO_2(g) + 2H_2O(g)$, given $S^\\circ$(CH$_4$) = $186.3$, $S^\\circ$(O$_2$) = $205.0$, $S^\\circ$(CO$_2$) = $213.7$, $S^\\circ$(H$_2$O, g) = $188.8$ J K$^{-1}$ mol$^{-1}$, calculate $\\Delta S^\\circ$ in J K$^{-1}$ mol$^{-1}$.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "$\\Delta S^\\circ$",
                answer: -5.0,
                unit: "J K$^{-1}$ mol$^{-1}$",
                tolerance: 0.5,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Entropy change",
                statement:
                  "$\\Delta S^\\circ = \\sum S^\\circ_{products} - \\sum S^\\circ_{reactants}$",
              },
            ],
            steps: [
              {
                reasoning:
                  "Products: $213.7 + 2(188.8) = 591.3$; reactants: $186.3 + 2(205.0) = 596.3$.",
                working: "591.3 - 596.3",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Apply all stoichiometric coefficients correctly.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate $\\Delta S^\\circ$.",
                working:
                  "\\Delta S^\\circ = -5.0\\ \\mathrm{J\\,K^{-1}\\,mol^{-1}}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "$\\Delta S^\\circ = -5.0$ J K$^{-1}$ mol$^{-1}$ (slightly negative)",
            commonErrors: [
              "Using H$_2$O(l) entropy instead of H$_2$O(g) — the state symbol changes $S^\\circ$ dramatically.",
            ],
          },
        },
        {
          id: "chemhl-u3-ent-q13",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "For a reaction at 298 K, $\\Delta S^\\circ = -120$ J K$^{-1}$ mol$^{-1}$. Calculate $T\\Delta S^\\circ$ in kJ mol$^{-1}$.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "$T\\Delta S^\\circ$",
                answer: -35.8,
                unit: "kJ mol$^{-1}$",
                tolerance: 0.5,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Entropy term in Gibbs equation",
                statement:
                  "$T\\Delta S$ has units of energy and must be in kJ to combine with $\\Delta H$.",
              },
            ],
            steps: [
              {
                reasoning: "Multiply $T$ by $\\Delta S$ and convert J to kJ.",
                working:
                  "298 \\times (-120) = -35760\\ \\mathrm{J} = -35.76\\ \\mathrm{kJ}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "State the value; it is negative because $\\Delta S < 0$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$T\\Delta S^\\circ = -35.8$ kJ mol$^{-1}$",
            commonErrors: ["Forgetting the $\\div 1000$ J-to-kJ conversion."],
          },
        },
        {
          id: "chemhl-u3-ent-q14",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "For $N_2O_4(g) \\to 2NO_2(g)$, given $S^\\circ$(N$_2$O$_4$) = $304.3$ and $S^\\circ$(NO$_2$) = $240.1$ J K$^{-1}$ mol$^{-1}$, calculate $\\Delta S^\\circ$ in J K$^{-1}$ mol$^{-1}$.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "$\\Delta S^\\circ$",
                answer: 175.9,
                unit: "J K$^{-1}$ mol$^{-1}$",
                tolerance: 0.5,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Entropy change",
                statement:
                  "$\\Delta S^\\circ = \\sum S^\\circ_{products} - \\sum S^\\circ_{reactants}$",
              },
            ],
            steps: [
              {
                reasoning: "Products: $2 \\times 240.1 = 480.2$.",
                working: "2 \\times 240.1",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Subtract the reactant entropy.",
                working: "480.2 - 304.3 = 175.9",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "State the value; positive because one gas molecule becomes two.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\Delta S^\\circ = +175.9$ J K$^{-1}$ mol$^{-1}$",
            commonErrors: ["Forgetting the coefficient 2 on NO$_2$."],
          },
        },
        {
          id: "chemhl-u3-ent-q15",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "A reaction at 298 K has $\\Delta S_{sys} = +40$ J K$^{-1}$ mol$^{-1}$ and releases $25$ kJ mol$^{-1}$ of heat to the surroundings.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "$\\Delta S_{surroundings}$",
                answer: 83.9,
                unit: "J K$^{-1}$ mol$^{-1}$",
                tolerance: 0.5,
              },
              {
                label: "$\\Delta S_{universe}$",
                answer: 123.9,
                unit: "J K$^{-1}$ mol$^{-1}$",
                tolerance: 0.5,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Second law of thermodynamics",
                statement:
                  "$\\Delta S_{universe} = \\Delta S_{system} + \\Delta S_{surroundings}$; spontaneous only if positive.",
              },
              {
                kind: "formula",
                name: "Entropy of surroundings",
                statement:
                  "$\\Delta S_{surr} = q_{surr}/T$ — heat gained by the surroundings divided by temperature.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Surroundings gain $+25$ kJ at 298 K: $\\Delta S_{surr} = +25000/298$.",
                working:
                  "25000 \\div 298 = 83.9\\ \\mathrm{J\\,K^{-1}\\,mol^{-1}}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The surroundings receive heat, so $\\Delta S_{surr} = +83.9$ J K$^{-1}$ mol$^{-1}$.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Add system and surroundings entropies.",
                working: "40 + 83.9 = 123.9",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "$\\Delta S_{universe} = +123.9$ J K$^{-1}$ mol$^{-1}$ — positive, so the process is spontaneous.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "$\\Delta S_{surr} = +83.9$ J K$^{-1}$ mol$^{-1}$; $\\Delta S_{univ} = +123.9$ J K$^{-1}$ mol$^{-1}$ (spontaneous)",
            commonErrors: [
              "Sign error on $\\Delta S_{surr}$ — heat flowing INTO the surroundings increases its entropy.",
            ],
          },
        },
        {
          id: "chemhl-u3-ent-q16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 6,
          stem: "Explain why the standard entropy of formation of elements is not defined as zero the way their standard enthalpy of formation is, and describe how this affects the calculation of $\\Delta S^\\circ$ for a reaction.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Reference states",
                statement:
                  "Enthalpies are relative to elements ($\\Delta H_f^\\circ = 0$ by convention); entropies are absolute quantities measured from a perfect crystal at 0 K.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$\\Delta H_f^\\circ = 0$ for elements is a bookkeeping convention — only changes matter for Hess cycles.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Entropy, by contrast, has an absolute scale: the third law gives $S = 0$ only for a perfect crystal at 0 K.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Even at 298 K, elements possess thermal energy and disorder, so their $S^\\circ$ values are positive and tabulated.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "In $\\Delta S^\\circ = \\sum S^\\circ_{products} - \\sum S^\\circ_{reactants}$ the elemental entropies MUST be included — omitting them gives wrong answers.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "This is the key difference from $\\Delta H_f$ calculations where elemental terms cancel to zero.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Example: for $N_2 + 3H_2 \\to 2NH_3$ the reactant entropies of N$_2$ and H$_2$ are large and must be subtracted.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer:
              "Enthalpies use a zero reference by convention; entropies are absolute (third law) so elemental $S^\\circ$ values are non-zero and must appear in $\\Delta S^\\circ$ calculations.",
            commonErrors: [
              "Setting $S^\\circ$ of elements to zero — only $\\Delta H_f^\\circ$ uses that convention.",
            ],
          },
        },
      ],
    },
    {
      id: "chemhl-u3-gibbs-spontaneity",
      title: "Gibbs free energy and spontaneity",
      skill:
        "Apply $\\Delta G = \\Delta H - T\\Delta S$ to predict spontaneity, explain the four sign combinations of $\\Delta H$ and $\\Delta S$, and calculate equilibrium temperatures.",
      lesson: {
        sections: [
          {
            heading: "The Gibbs equation",
            body: "$\\Delta G = \\Delta H - T\\Delta S$ combines enthalpy and entropy into a single spontaneity criterion. $\\Delta G < 0$ → spontaneous; $\\Delta G = 0$ → equilibrium; $\\Delta G > 0$ → non-spontaneous. The temperature dependence is key: for reactions with $\\Delta H > 0$ and $\\Delta S > 0$, increasing $T$ eventually makes $T\\Delta S > \\Delta H$ so $\\Delta G < 0$ — high temperature favours entropy-driven reactions. For $\\Delta H < 0$ and $\\Delta S < 0$, low temperature favours the reaction.",
          },
          {
            heading: "The four sign combinations",
            body: "Exothermic + entropy increase ($\\Delta H < 0, \\Delta S > 0$): always spontaneous ($\\Delta G < 0$ at all T). Endothermic + entropy decrease ($\\Delta H > 0, \\Delta S < 0$): never spontaneous. Exothermic + entropy decrease ($\\Delta H < 0, \\Delta S < 0$): spontaneous at LOW temperature. Endothermic + entropy increase ($\\Delta H > 0, \\Delta S > 0$): spontaneous at HIGH temperature.",
          },
          {
            heading: "Equilibrium temperature",
            body: "When $\\Delta G = 0$, $T = \\Delta H / \\Delta S$. This gives the temperature at which the reaction is at equilibrium — below or above it determines spontaneity direction. For CaCO$_3$ decomposition ($\\Delta H = +178$, $\\Delta S = +160$ J/K), $T_{eq} = 178/0.160 \\approx 1113$ K — above this the decomposition is spontaneous.",
          },
        ],
        keyFormulas: [
          {
            name: "Gibbs equation",
            statement:
              "$\\Delta G = \\Delta H - T\\Delta S$; spontaneous when $\\Delta G < 0$.",
          },
          {
            name: "Sign combinations",
            statement:
              "($\\Delta H<0,\\Delta S>0$) always spontaneous; ($\\Delta H>0,\\Delta S<0$) never; ($\\Delta H<0,\\Delta S<0$) low T; ($\\Delta H>0,\\Delta S>0$) high T.",
          },
          {
            name: "Equilibrium temperature",
            statement: "$T_{eq} = \\Delta H / \\Delta S$ when $\\Delta G = 0$.",
          },
        ],
        workedExample: {
          problem:
            "For a reaction $\\Delta H = -50$ kJ mol$^{-1}$ and $\\Delta S = -100$ J K$^{-1}$ mol$^{-1}$. At what temperature does it stop being spontaneous?",
          solution:
            "$\\Delta G = -50 - T(-0.100) = -50 + 0.100T$. Setting $\\Delta G = 0$: $T = 50/0.100 = 500$ K. Below 500 K, $\\Delta G < 0$ (spontaneous); above 500 K, non-spontaneous.",
        },
      },
      questions: [
        {
          id: "chemhl-u3-gibbs-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A reaction is spontaneous at all temperatures when:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\Delta H > 0$ and $\\Delta S > 0$" },
              { id: "b", text: "$\\Delta H > 0$ and $\\Delta S < 0$" },
              { id: "c", text: "$\\Delta H < 0$ and $\\Delta S < 0$" },
              { id: "d", text: "$\\Delta H < 0$ and $\\Delta S > 0$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Sign combinations",
                statement:
                  "Exothermic + entropy increase → $\\Delta G < 0$ at all temperatures.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Both terms in $\\Delta G = \\Delta H - T\\Delta S$ favour spontaneity.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $\\Delta H < 0, \\Delta S > 0$",
            commonErrors: [
              "Choosing the endothermic + entropy increase pair — that needs high temperature.",
            ],
          },
        },
        {
          id: "chemhl-u3-gibbs-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A reaction has $\\Delta H = +40$ kJ mol$^{-1}$ and $\\Delta S = +120$ J K$^{-1}$ mol$^{-1}$. Predict whether it is spontaneous at 298 K and explain.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Gibbs equation",
                statement: "$\\Delta G = \\Delta H - T\\Delta S$",
              },
            ],
            steps: [
              {
                reasoning: "Convert $\\Delta S$ to kJ: $+0.120$ kJ K$^{-1}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Calculate $\\Delta G$.",
                working:
                  "40 - 298(0.120) = 40 - 35.76 = +4.24\\ \\mathrm{kJ\\,mol^{-1}}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "$\\Delta G > 0$ → non-spontaneous at 298 K (but close to equilibrium).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Non-spontaneous at 298 K ($\\Delta G = +4.2$ kJ mol$^{-1}$); becomes spontaneous above $\\approx 333$ K.",
            commonErrors: [
              "Not converting J to kJ — $\\Delta S$ must be in kJ K$^{-1}$ to match $\\Delta H$.",
            ],
          },
        },
        {
          id: "chemhl-u3-gibbs-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Explain why some exothermic reactions ($\\Delta H < 0$) are non-spontaneous at high temperature, and some endothermic reactions ($\\Delta H > 0$) are spontaneous at high temperature.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Temperature and entropy",
                statement:
                  "The $-T\\Delta S$ term grows with T; its sign determines whether high T helps or hinders.",
              },
            ],
            steps: [
              {
                reasoning:
                  "For $\\Delta H < 0, \\Delta S < 0$: at high T the $-T\\Delta S$ term becomes large positive, making $\\Delta G > 0$.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "So an exothermic reaction with entropy decrease is spontaneous only at low T.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "For $\\Delta H > 0, \\Delta S > 0$: at high T the $-T\\Delta S$ term becomes large negative, making $\\Delta G < 0$.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "So an endothermic reaction with entropy increase is spontaneous only at high T.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Entropy term dominates at high T: $\\Delta S < 0$ reactions stop being spontaneous; $\\Delta S > 0$ reactions start.",
            commonErrors: [
              "Thinking exothermic always means spontaneous — entropy can override at high T.",
            ],
          },
        },
        {
          id: "chemhl-u3-gibbs-q4",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 8,
          stem: "For the reaction $N_2(g) + 3H_2(g) \\rightleftharpoons 2NH_3(g)$: $\\Delta H = -92$ kJ mol$^{-1}$, $\\Delta S = -199$ J K$^{-1}$ mol$^{-1}$.",
          parts: [
            {
              label: "a",
              prompt: "Calculate $\\Delta G$ at 298 K and 700 K.",
              marks: 4,
            },
            {
              label: "b",
              prompt: "Calculate the temperature at which $\\Delta G = 0$.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Explain why the Haber process uses a moderate temperature (~700 K) rather than room temperature.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Gibbs equation",
                statement: "$\\Delta G = \\Delta H - T\\Delta S$",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "At 298 K: $\\Delta G = -92 - 298(-0.199) = -92 + 59.3 = -32.7$ kJ mol$^{-1}$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "At 700 K: $\\Delta G = -92 - 700(-0.199) = -92 + 139.3 = +47.3$ kJ mol$^{-1}$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Both values computed correctly.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "a",
                reasoning: "Spontaneous at 298 K, non-spontaneous at 700 K.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "$T_{eq} = \\Delta H / \\Delta S = -92 / -0.199 = 462$ K.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Above $\\approx 462$ K the reaction becomes non-spontaneous.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "The reaction is exothermic ($\\Delta H < 0$) but entropy decreases ($\\Delta S < 0$).",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "A moderate T gives reasonable rate while keeping $\\Delta G < 0$ enough for yield; too high T makes it non-spontaneous.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) $\\Delta G$(298) $= -33$ kJ/mol, $\\Delta G$(700) $= +47$ kJ/mol. (b) $T_{eq} \\approx 462$ K. (c) Balance rate vs spontaneity.",
            commonErrors: ["Using $\\Delta S$ in J without converting to kJ."],
          },
        },
        {
          id: "chemhl-u3-gibbs-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A reaction with $\\Delta G < 0$ is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "At equilibrium" },
              { id: "b", text: "Non-spontaneous at that temperature" },
              { id: "c", text: "Spontaneous at that temperature" },
              { id: "d", text: "Impossible" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Gibbs criterion",
                statement:
                  "$\\Delta G < 0$ → spontaneous; $\\Delta G = 0$ → equilibrium; $\\Delta G > 0$ → non-spontaneous.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A negative Gibbs free energy means the process can occur without energy input.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** Spontaneous",
            commonErrors: [
              "Confusing $\\Delta G < 0$ with $\\Delta G > 0$ — negative means spontaneous.",
            ],
          },
        },
        {
          id: "chemhl-u3-gibbs-q6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "When $\\Delta G = 0$ for a reaction, the system is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Spontaneous in the reverse direction" },
              { id: "b", text: "Spontaneous in the forward direction" },
              { id: "c", text: "Non-spontaneous in both directions" },
              { id: "d", text: "At equilibrium" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Gibbs criterion",
                statement:
                  "$\\Delta G = 0$ marks the boundary between spontaneous and non-spontaneous — equilibrium.",
              },
            ],
            steps: [
              {
                reasoning:
                  "At $\\Delta G = 0$ neither direction is favoured; forward and reverse rates are equal.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** At equilibrium",
            commonErrors: [
              "Thinking $\\Delta G = 0$ means 'no reaction' — it means equilibrium composition.",
            ],
          },
        },
        {
          id: "chemhl-u3-gibbs-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Which combination of $\\Delta H$ and $\\Delta S$ is NEVER spontaneous at any temperature?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\Delta H > 0$, $\\Delta S < 0$" },
              { id: "b", text: "$\\Delta H < 0$, $\\Delta S > 0$" },
              { id: "c", text: "$\\Delta H > 0$, $\\Delta S > 0$" },
              { id: "d", text: "$\\Delta H < 0$, $\\Delta S < 0$" },
            ],
            aorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Sign combinations",
                statement:
                  "Both terms of $\\Delta G = \\Delta H - T\\Delta S$ oppose spontaneity when $\\Delta H > 0$ and $\\Delta S < 0$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Endothermic AND entropy-decreasing: $\\Delta H$ positive and $-T\\Delta S$ positive for all T > 0.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (c) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** $\\Delta H > 0$, $\\Delta S < 0$",
            commonErrors: [
              "Choosing the high-temperature pair — $\\Delta H > 0, \\Delta S > 0$ becomes spontaneous at high T.",
            ],
          },
        },
        {
          id: "chemhl-u3-gibbs-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "For a reaction with $\\Delta H < 0$ and $\\Delta S < 0$, increasing the temperature causes $\\Delta G$ to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Become zero immediately" },
              { id: "b", text: "Stay constant" },
              { id: "c", text: "Become more negative (more spontaneous)" },
              { id: "d", text: "Become more positive (less spontaneous)" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Temperature and entropy term",
                statement:
                  "With $\\Delta S < 0$, the $-T\\Delta S$ term is positive and grows with T, opposing spontaneity.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$\\Delta G = \\Delta H - T\\Delta S$; $\\Delta S < 0$ makes $-T\\Delta S$ positive and increasing with T.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "So $\\Delta G$ rises with temperature — the reaction is favoured at LOW temperature.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Become more positive",
            commonErrors: [
              "Thinking exothermic always means high T helps — negative $\\Delta S$ reverses this.",
            ],
          },
        },
        {
          id: "chemhl-u3-gibbs-q9",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Gibbs free energy $\\Delta G$ is calculated using:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\Delta G = \\Delta H + T\\Delta S$" },
              { id: "b", text: "$\\Delta G = \\Delta H - T\\Delta S$" },
              { id: "c", text: "$\\Delta G = T\\Delta S - \\Delta H$" },
              { id: "d", text: "$\\Delta G = \\Delta H \\times T\\Delta S$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Gibbs equation",
                statement: "$\\Delta G = \\Delta H - T\\Delta S$",
              },
            ],
            steps: [
              {
                reasoning:
                  "The entropy contribution is subtracted: higher $\\Delta S$ makes $\\Delta G$ more negative.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** $\\Delta G = \\Delta H - T\\Delta S$",
            commonErrors: [
              "Using a plus sign — the correct equation subtracts $T\\Delta S$.",
            ],
          },
        },
        {
          id: "chemhl-u3-gibbs-q10",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "For a reaction at 298 K, $\\Delta H = -120$ kJ mol$^{-1}$ and $\\Delta S = +150$ J K$^{-1}$ mol$^{-1}$. Calculate $\\Delta G$ in kJ mol$^{-1}$.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "$\\Delta G$",
                answer: -164.7,
                unit: "kJ mol$^{-1}$",
                tolerance: 0.2,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Gibbs equation",
                statement: "$\\Delta G = \\Delta H - T\\Delta S$",
              },
            ],
            steps: [
              {
                reasoning: "Convert $\\Delta S$ to kJ K$^{-1}$.",
                working: "150\\ \\mathrm{J} = 0.150\\ \\mathrm{kJ}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Substitute into the Gibbs equation.",
                working: "-120 - 298(0.150) = -120 - 44.7",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate; both terms favour spontaneity.",
                working: "\\Delta G = -164.7\\ \\mathrm{kJ\\,mol^{-1}}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\Delta G = -164.7$ kJ mol$^{-1}$ (spontaneous)",
            commonErrors: ["Forgetting to convert $\\Delta S$ from J to kJ."],
          },
        },
        {
          id: "chemhl-u3-gibbs-q11",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "For a reaction at 298 K, $\\Delta H = +80$ kJ mol$^{-1}$ and $\\Delta S = -60$ J K$^{-1}$ mol$^{-1}$. Calculate $\\Delta G$ in kJ mol$^{-1}$.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "$\\Delta G$",
                answer: 97.9,
                unit: "kJ mol$^{-1}$",
                tolerance: 0.2,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Gibbs equation",
                statement: "$\\Delta G = \\Delta H - T\\Delta S$",
              },
            ],
            steps: [
              {
                reasoning: "Convert $\\Delta S$ to kJ K$^{-1}$.",
                working: "-60\\ \\mathrm{J} = -0.060\\ \\mathrm{kJ}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Substitute into the Gibbs equation.",
                working: "80 - 298(-0.060) = 80 + 17.88",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate; both terms oppose spontaneity.",
                working: "\\Delta G = +97.9\\ \\mathrm{kJ\\,mol^{-1}}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\Delta G = +97.9$ kJ mol$^{-1}$ (non-spontaneous)",
            commonErrors: [
              "Sign error on $-T\\Delta S$ — with $\\Delta S < 0$ this term is positive.",
            ],
          },
        },
        {
          id: "chemhl-u3-gibbs-q12",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "A reaction has $\\Delta H = +60$ kJ mol$^{-1}$ and $\\Delta S = +200$ J K$^{-1}$ mol$^{-1}$. Calculate the temperature at which $\\Delta G = 0$ in K.",
          response: {
            type: "numeric",
            parts: [
              { label: "Equilibrium temperature", answer: 300, unit: "K" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Equilibrium temperature",
                statement:
                  "$T_{eq} = \\Delta H / \\Delta S$ when $\\Delta G = 0$.",
              },
            ],
            steps: [
              {
                reasoning: "Set $\\Delta G = 0$ and rearrange.",
                working:
                  "0 = \\Delta H - T\\Delta S \\Rightarrow T = \\Delta H/\\Delta S",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Convert $\\Delta S$ to kJ K$^{-1}$.",
                working: "200\\ \\mathrm{J} = 0.200\\ \\mathrm{kJ}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate.",
                working: "T = 60 / 0.200 = 300\\ \\mathrm{K}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$T_{eq} = 300$ K",
            commonErrors: ["Forgetting the J-to-kJ conversion on $\\Delta S$."],
          },
        },
        {
          id: "chemhl-u3-gibbs-q13",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "For a reaction at 500 K, $\\Delta H = -50$ kJ mol$^{-1}$ and $\\Delta S = -100$ J K$^{-1}$ mol$^{-1}$. Calculate $\\Delta G$ in kJ mol$^{-1}$ and state whether the reaction is spontaneous.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "$\\Delta G$",
                answer: 0,
                unit: "kJ mol$^{-1}$",
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Gibbs equation",
                statement: "$\\Delta G = \\Delta H - T\\Delta S$",
              },
            ],
            steps: [
              {
                reasoning: "Convert $\\Delta S$ to kJ K$^{-1}$ and substitute.",
                working: "-50 - 500(-0.100) = -50 + 50",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate.",
                working: "\\Delta G = 0\\ \\mathrm{kJ\\,mol^{-1}}",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "$\\Delta G = 0$ means the system is exactly at equilibrium at 500 K.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "$\\Delta G = 0$ — at equilibrium (neither spontaneous nor non-spontaneous)",
            commonErrors: [
              "Calling $\\Delta G = 0$ 'spontaneous' — it is the equilibrium boundary.",
            ],
          },
        },
        {
          id: "chemhl-u3-gibbs-q14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "For a reaction, $\\Delta H = +40$ kJ mol$^{-1}$ and $\\Delta S = +150$ J K$^{-1}$ mol$^{-1}$.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "$\\Delta G$ at 298 K",
                answer: -4.7,
                unit: "kJ mol$^{-1}$",
                tolerance: 0.2,
              },
              {
                label: "$\\Delta G$ at 400 K",
                answer: -20.0,
                unit: "kJ mol$^{-1}$",
                tolerance: 0.2,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Gibbs equation",
                statement: "$\\Delta G = \\Delta H - T\\Delta S$",
              },
            ],
            steps: [
              {
                reasoning: "At 298 K: convert $\\Delta S = 0.150$ kJ K$^{-1}$.",
                working: "40 - 298(0.150) = 40 - 44.7 = -4.7",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "At 400 K.",
                working: "40 - 400(0.150) = 40 - 60.0 = -20.0",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Spontaneous at 298 K ($\\Delta G < 0$).",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "More spontaneous at 400 K — higher T favours the $\\Delta S > 0$ reaction.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "$\\Delta G(298) = -4.7$ kJ mol$^{-1}$; $\\Delta G(400) = -20.0$ kJ mol$^{-1}$ — spontaneous at both, more so at 400 K",
            commonErrors: [
              "Assuming endothermic means non-spontaneous at all temperatures.",
            ],
          },
        },
        {
          id: "chemhl-u3-gibbs-q15",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "For a reaction, $\\Delta H = -80$ kJ mol$^{-1}$ and $\\Delta S = -160$ J K$^{-1}$ mol$^{-1}$. Calculate the temperature at which $\\Delta G = 0$ in K.",
          response: {
            type: "numeric",
            parts: [
              { label: "Equilibrium temperature", answer: 500, unit: "K" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Equilibrium temperature",
                statement:
                  "$T_{eq} = \\Delta H / \\Delta S$ (both negative gives positive T).",
              },
            ],
            steps: [
              {
                reasoning: "Set $\\Delta G = 0$ and convert $\\Delta S$ to kJ.",
                working: "T = \\Delta H/\\Delta S = -80 / -0.160",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate; the two negatives cancel.",
                working: "T = 500\\ \\mathrm{K}",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Above 500 K the reaction becomes non-spontaneous (low-T-favoured reaction).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$T_{eq} = 500$ K",
            commonErrors: [
              "Sign confusion — $\\Delta H/\\Delta S$ with both negative is positive.",
            ],
          },
        },
        {
          id: "chemhl-u3-gibbs-q16",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 8,
          stem: "For the Contact process reaction $2SO_2(g) + O_2(g) \\rightleftharpoons 2SO_3(g)$: $\\Delta H = -198$ kJ mol$^{-1}$ and $\\Delta S = -187$ J K$^{-1}$ mol$^{-1}$.",
          parts: [
            {
              label: "a",
              prompt:
                "Calculate $\\Delta G$ at 298 K and at 1000 K, in kJ mol$^{-1}$.",
              marks: 4,
            },
            {
              label: "b",
              prompt: "Calculate the temperature at which $\\Delta G = 0$.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Explain why the industrial process uses ~700 K rather than room temperature, in terms of spontaneity, rate and yield.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Gibbs equation",
                statement: "$\\Delta G = \\Delta H - T\\Delta S$",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Convert $\\Delta S$ to kJ: $-0.187$ kJ K$^{-1}$ mol$^{-1}$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "At 298 K: $\\Delta G = -198 - 298(-0.187) = -198 + 55.7 = -142.3$ kJ mol$^{-1}$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "At 1000 K: $\\Delta G = -198 - 1000(-0.187) = -198 + 187 = -11$ kJ mol$^{-1}$.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "a",
                reasoning:
                  "Spontaneous at both temperatures but much less so at 1000 K.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "$T_{eq} = \\Delta H/\\Delta S = -198/-0.187$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "$T_{eq} \\approx 1059$ K; above this the reaction is non-spontaneous.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "The reaction is exothermic but entropy-decreasing ($\\Delta H<0, \\Delta S<0$) — favoured at low T thermodynamically.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "~700 K gives a reasonable rate while keeping $\\Delta G < 0$ for useful yield; room temperature would be too slow.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) $\\Delta G(298) = -142$ kJ mol$^{-1}$; $\\Delta G(1000) = -11$ kJ mol$^{-1}$. (b) $T_{eq} \\approx 1059$ K. (c) Moderate T balances rate vs spontaneity/yield.",
            commonErrors: ["Using $\\Delta S$ in J without converting to kJ."],
          },
        },
      ],
    },
  ],
};
