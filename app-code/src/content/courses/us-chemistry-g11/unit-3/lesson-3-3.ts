import type { Lesson } from "../../../types.ts";

export const lesson133: Lesson = {
  id: "chem11-u3-lesson-3-3",
  code: "3-3",
  title: "Salts, Solubility and Electrolysis",
  goal: "I CAN predict salt formation and solubility, write precipitation equations, and explain electrolysis including Faraday's laws of electrolysis.",
  standards: ["HS-PS1-2", "HS-PS1-7", "SEP: Developing and Using Models"],
  vocabulary: [
    { term: "Salt", definition: "An ionic compound formed from the reaction of an acid and a base; contains a cation from the base and an anion from the acid." },
    { term: "Solubility", definition: "The maximum amount of solute that dissolves in a given amount of solvent at a given temperature." },
    { term: "Precipitate", definition: "An insoluble solid that forms when two solutions are mixed." },
    { term: "Net ionic equation", definition: "Shows only the ions that form the precipitate or react, omitting spectators." },
    { term: "Electrolysis", definition: "Using electrical energy to drive a non-spontaneous chemical reaction." },
    { term: "Anode", definition: "The electrode where oxidation occurs (positive in electrolysis)." },
    { term: "Cathode", definition: "The electrode where reduction occurs (negative in electrolysis)." },
    { term: "Faraday's laws", definition: "The mass of substance produced in electrolysis is proportional to charge passed and inversely proportional to the ion's charge." },
  ],
  concepts: [
    {
      id: "chem11-u3-salts-solubility",
      title: "Salt formation and solubility",
      skill: "Predict products of acid-base and double-displacement reactions, apply solubility rules, and write precipitation net ionic equations.",
      lesson: {
        sections: [
          {
            heading: "How salts form",
            body: "A **salt** forms when an acid reacts with a base (neutralization) or when two solutions exchange ions (double displacement). The cation comes from the base (or first reactant) and the anion from the acid (or second reactant).\n\nExamples:\n- $\\text{HCl} + \\text{NaOH} \\rightarrow \\text{NaCl} + \\text{H}_2\\text{O}$\n- $\\text{H}_2\\text{SO}_4 + 2\\text{KOH} \\rightarrow \\text{K}_2\\text{SO}_4 + 2\\text{H}_2\\text{O}$\n- $\\text{AgNO}_3 + \\text{NaCl} \\rightarrow \\text{AgCl}\\downarrow + \\text{NaNO}_3$ (precipitation)",
          },
          {
            heading: "Solubility rules",
            body: "Most salts are soluble, but key exceptions:\n\n- **Always soluble**: Group 1 cations, $\\text{NH}_4^+$, nitrates ($\\text{NO}_3^-$), acetates, chlorates, perchlorates.\n- **Mostly soluble**: chlorides except Ag+, Pb2+, Hg2^2+; sulfates except Ba2+, Pb2+, Ca2+ (slightly), Sr2+.\n- **Mostly insoluble**: hydroxides except Group 1 and heavy Group 2; carbonates except Group 1 and NH4+; phosphates except Group 1 and NH4+.",
          },
          {
            heading: "Precipitation reactions",
            body: "When two aqueous solutions mix, ions may combine to form an insoluble solid (precipitate). To write the equation:\n\n1. Write the molecular equation with all ions.\n2. Identify which product is insoluble using solubility rules.\n3. Write the **net ionic equation** showing only the ions that form the precipitate; spectator ions are omitted.\n\nExample: $\\text{AgNO}_3(aq) + \\text{NaCl}(aq) \\rightarrow \\text{AgCl}(s) + \\text{NaNO}_3(aq)$; net ionic: $\\text{Ag}^+ + \\text{Cl}^- \\rightarrow \\text{AgCl}(s)$.",
          },
        ],
        keyFormulas: [
          { name: "Solubility rules", statement: "Group 1 + NH4+ + NO3- always soluble; most chlorides soluble except Ag+/Pb2+/Hg2^2+" },
          { name: "Net ionic", statement: "Show only ions forming the precipitate; omit spectators" },
        ],
        workedExample: {
          problem: "Predict whether a precipitate forms when solutions of BaCl2 and Na2SO4 are mixed, and write the net ionic equation if it does.",
          solution: "BaSO4 is insoluble (sulfate exception). Molecular: $\\text{BaCl}_2 + \\text{Na}_2\\text{SO}_4 \\rightarrow \\text{BaSO}_4\\downarrow + 2\\text{NaCl}$. Net ionic: $\\text{Ba}^{2+} + \\text{SO}_4^{2-} \\rightarrow \\text{BaSO}_4(s)$.",
        },
      },
      questions: [
        {
          id: "chem11-u3-salts-solubility-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which salt is insoluble in water?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "NaCl" },
              { id: "b", text: "AgCl" },
              { id: "c", text: "KNO3" },
              { id: "d", text: "CaCl2" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Solubility rules", statement: "Most chlorides are soluble except Ag+, Pb2+, Hg2^2+." }],
            steps: [{ reasoning: "AgCl is the classic insoluble chloride; NaCl, KNO3 and CaCl2 are all soluble.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** AgCl",
            commonErrors: ["Thinking all chlorides are soluble.", "Confusing solubility with melting point."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "chem11-u3-salts-solubility-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write the net ionic equation for the reaction between aqueous Pb(NO3)2 and KI that produces a precipitate.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Solubility rules", statement: "PbI2 is insoluble (Pb2+ halide exception)." },
              { kind: "method", name: "Net ionic", statement: "Show only ions forming the precipitate." },
            ],
            steps: [
              { reasoning: "PbI2 is insoluble, so Pb2+ and I- combine to form the precipitate.", marks: 1, markCode: "B" },
              { reasoning: "Net ionic: $\\text{Pb}^{2+} + 2\\text{I}^- \\rightarrow \\text{PbI}_2(s)$.", marks: 2, markCode: "M" },
            ],
            finalAnswer: "$\\text{Pb}^{2+} + 2\\text{I}^- \\rightarrow \\text{PbI}_2(s)$",
            commonErrors: ["Forgetting the coefficient 2 on I-.", "Including spectator ions NO3- and K+."],
            examinerNote: "B1 precipitate ID, M2 equation.",
          },
        },
        {
          id: "chem11-u3-salts-solubility-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A solution contains Ba2+, Na+ and NO3- ions. A student adds H2SO4 to test for Ba2+.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Solubility rules", statement: "BaSO4 is insoluble." },
              { kind: "context", name: "Qualitative analysis", statement: "Precipitation tests identify ions by forming characteristic insoluble salts." },
            ],
            steps: [
              { reasoning: "H2SO4 provides SO4^2- ions which react with Ba2+ to form BaSO4 precipitate.", marks: 2, markCode: "B" },
              { reasoning: "Net ionic: $\\text{Ba}^{2+} + \\text{SO}_4^{2-} \\rightarrow \\text{BaSO}_4(s)$.", marks: 1, markCode: "M" },
              { reasoning: "The white precipitate confirms Ba2+ is present; Na+ and NO3- are spectators.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "BaSO4 precipitate forms: $\\text{Ba}^{2+} + \\text{SO}_4^{2-} \\rightarrow \\text{BaSO}_4(s)$.",
            commonErrors: ["Forgetting sulfate comes from H2SO4.", "Including Na+ and NO3- in net ionic."],
            examinerNote: "B2 chemistry, M1 equation, R1 conclusion.",
          },
        },
        {
          id: "chem11-u3-salts-solubility-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Three pairs of solutions are mixed: (1) AgNO3 + NaCl, (2) BaCl2 + Na2SO4, (3) KNO3 + NaCl.",
          parts: [
            { label: "a", prompt: "Predict whether each pair produces a precipitate. Justify using solubility rules.", marks: 3 },
            { label: "b", prompt: "Write the net ionic equation for each precipitation that occurs.", marks: 4 },
            { label: "c", prompt: "Explain why pair (3) produces no precipitate while pairs (1) and (2) do.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Solubility rules", statement: "AgCl and BaSO4 are insoluble; KNO3 and NaCl are soluble." },
              { kind: "method", name: "Net ionic", statement: "Show only ions forming the precipitate; omit spectators." },
            ],
            steps: [
              { reasoning: "Pair 1: AgCl is insoluble (Ag+ chloride exception) → precipitate. Pair 2: BaSO4 is insoluble (sulfate exception) → precipitate. Pair 3: KNO3 and NaCl are both soluble → no precipitate.", marks: 3, markCode: "B", part: "a" },
              { reasoning: "Pair 1 net ionic: $\\text{Ag}^+ + \\text{Cl}^- \\rightarrow \\text{AgCl}(s)$.", marks: 2, markCode: "M", part: "b" },
              { reasoning: "Pair 2 net ionic: $\\text{Ba}^{2+} + \\text{SO}_4^{2-} \\rightarrow \\text{BaSO}_4(s)$.", marks: 2, markCode: "M", part: "b" },
              { reasoning: "Pair 3: all possible products (KCl, NaNO3) are soluble, so all ions remain in solution as spectators — no net ionic reaction.", marks: 2, markCode: "R", part: "c" },
              { reasoning: "Precipitation requires formation of an insoluble salt; soluble salts dissociate into spectator ions.", marks: 1, markCode: "R", part: "c" },
            ],
            finalAnswer: "(a) pairs 1 and 2 precipitate, pair 3 does not (b) Ag+ + Cl- → AgCl(s); Ba2+ + SO4^2- → BaSO4(s) (c) pair 3 forms only soluble salts.",
            commonErrors: ["Including spectator ions in net ionic equations.", "Thinking mixing any two solutions always precipitates."],
            examinerNote: "3+4+3 = 10.",
          },
        },
      ],
    },
    {
      id: "chem11-u3-electrolysis",
      title: "Electrolysis and Faraday's laws",
      skill: "Explain electrolysis of molten and aqueous solutions, identify electrodes and products, and apply Faraday's laws quantitatively.",
      lesson: {
        sections: [
          {
            heading: "What is electrolysis?",
            body: "Electrolysis uses electrical energy to drive a non-spontaneous reaction. It requires:\n- A **power source** (battery or DC supply)\n- **Electrodes** (anode and cathode) immersed in an electrolyte\n- An **electrolyte** (molten ionic compound or aqueous solution containing ions)\n\nAt the **cathode** (negative), reduction occurs: cations gain electrons. At the **anode** (positive), oxidation occurs: anions lose electrons.",
          },
          {
            heading: "Products of electrolysis",
            body: "For **molten** ionic compounds, the products are the elements: e.g. molten NaCl gives Na at cathode and Cl2 at anode.\n\nFor **aqueous** solutions, water competes: at the cathode, H+ (or water) may be reduced to H2 instead of less reactive metals; at the anode, OH- (or water) may be oxidized to O2 instead of less reactive anions. Highly reactive metals (Group 1, 2) cannot be plated from aqueous solution.",
          },
          {
            heading: "Faraday's laws",
            body: "**First law**: mass of substance produced is proportional to charge passed ($m \\propto Q$).\n\n**Second law**: for the same charge, masses produced are proportional to molar mass divided by charge on the ion ($m \\propto M/z$).\n\nCharge $Q = I \\times t$ (current in amperes × time in seconds = coulombs). One mole of electrons = $96{,}500$ C (Faraday constant).",
          },
        ],
        keyFormulas: [
          { name: "Charge", statement: "$Q = I \\times t$ (C = A × s)" },
          { name: "Moles of electrons", statement: "$n_e = Q/96{,}500$" },
          { name: "Electrode processes", statement: "Cathode: reduction (gain e-); Anode: oxidation (lose e-)" },
        ],
        workedExample: {
          problem: "A current of 2.0 A passes through molten PbBr2 for 1 hour. Calculate the mass of lead produced at the cathode (M(Pb) = 207 g/mol, Pb2+ + 2e- → Pb).",
          solution: "$Q = 2.0 \\times 3600 = 7200\\ \\text{C}$. Moles of electrons $= 7200/96500 = 0.0746\\ \\text{mol}$. Since Pb2+ needs 2 e- per atom, moles Pb $= 0.0746/2 = 0.0373\\ \\text{mol}$. Mass $= 0.0373 \\times 207 = 7.7\\ \\text{g}$.",
        },
      },
      questions: [
        {
          id: "chem11-u3-electrolysis-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "During electrolysis, which electrode is the site of reduction?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Anode" },
              { id: "b", text: "Cathode" },
              { id: "c", text: "Both" },
              { id: "d", text: "Neither" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Cathode", statement: "Reduction (gain of electrons) occurs at the cathode." }],
            steps: [{ reasoning: "The cathode is where reduction happens; the anode is oxidation.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Cathode",
            commonErrors: ["Confusing anode/cathode with positive/negative in electrolysis vs galvanic cells."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "chem11-u3-electrolysis-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Predict the products of electrolysis of molten sodium chloride (NaCl). State what forms at each electrode.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "method", name: "Electrolysis products", statement: "Molten ionic compounds give the elements: metal at cathode, nonmetal at anode." },
            ],
            steps: [
              { reasoning: "Na+ is reduced at cathode: $\\text{Na}^+ + e^- \\rightarrow \\text{Na}(l)$.", marks: 1, markCode: "B" },
              { reasoning: "Cl- is oxidized at anode: $2\\text{Cl}^- \\rightarrow \\text{Cl}_2 + 2e^-$.", marks: 1, markCode: "B" },
              { reasoning: "Products: sodium metal at cathode, chlorine gas at anode.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Na at cathode, Cl2 at anode.",
            commonErrors: ["Forgetting chlorine is diatomic (Cl2).", "Swapping anode/cathode."],
            examinerNote: "B1 each electrode, B1 products.",
          },
        },
        {
          id: "chem11-u3-electrolysis-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "In the electrolysis of aqueous CuSO4 with inert electrodes:\n\n(a) State what forms at the cathode and anode.\n(b) Explain why Cu deposits at the cathode rather than H2, even though water is present.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Selective discharge", statement: "In aqueous solutions, the ion more easily reduced/oxidized is discharged; Cu2+ is more easily reduced than water." },
            ],
            steps: [
              { reasoning: "At cathode: Cu2+ is reduced to Cu metal (deposits). At anode: water is oxidized to O2 (since SO4^2- is not easily oxidized).", marks: 2, markCode: "B" },
              { reasoning: "Cu2+ has a higher reduction potential than water, so it is preferentially reduced.", marks: 2, markCode: "R" },
            ],
            finalAnswer: "(a) Cu at cathode, O2 at anode (b) Cu2+ is more easily reduced than water.",
            commonErrors: ["Thinking H2 forms because water is present; Cu2+ is preferentially discharged.", "Expecting SO4^2- to be oxidized; water is easier to oxidize."],
            examinerNote: "B2 products, R2 selective discharge.",
          },
        },
        {
          id: "chem11-u3-electrolysis-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A current of 5.0 A is passed through molten Al2O3 (dissolved in cryolite) for 2.0 hours.",
          parts: [
            { label: "a", prompt: "Calculate the total charge passed.", marks: 2 },
            { label: "b", prompt: "Write the half-equation for the formation of Al at the cathode.", marks: 2 },
            { label: "c", prompt: "Calculate the mass of Al produced (M(Al) = 27 g/mol, F = 96500 C/mol).", marks: 4 },
            { label: "d", prompt: "Explain why aluminium is extracted by electrolysis rather than by reduction with carbon (as iron is).", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Charge", statement: "$Q = I \\times t$" },
              { kind: "method", name: "Faraday's laws", statement: "$n_e = Q/F$; moles of product = $n_e/z$; mass = moles × M." },
              { kind: "context", name: "Reactivity", statement: "Al is too reactive to be reduced by carbon; electrolysis is needed." },
            ],
            steps: [
              { reasoning: "$Q = 5.0 \\times (2.0 \\times 3600) = 5.0 \\times 7200 = 36{,}000\\ \\text{C}$.", working: "5.0\\times7200=36000", marks: 2, markCode: "M", part: "a" },
              { reasoning: "$\\text{Al}^{3+} + 3e^- \\rightarrow \\text{Al}$.", marks: 2, markCode: "B", part: "b" },
              { reasoning: "$n_e = 36000/96500 = 0.373\\ \\text{mol}$.", working: "36000/96500=0.373", marks: 1, markCode: "M", part: "c" },
              { reasoning: "Each Al3+ needs 3 electrons, so moles Al $= 0.373/3 = 0.124\\ \\text{mol}$.", working: "0.373/3=0.124", marks: 2, markCode: "M", part: "c" },
              { reasoning: "Mass Al $= 0.124 \\times 27 = 3.4\\ \\text{g}$.", working: "0.124\\times27=3.4", marks: 1, markCode: "A", part: "c" },
              { reasoning: "Aluminium is very reactive; carbon cannot reduce Al2O3 because Al forms strong bonds with oxygen and Al is above carbon in the reactivity series.", marks: 2, markCode: "R", part: "d" },
            ],
            finalAnswer: "(a) 36,000 C (b) Al3+ + 3e- → Al (c) 3.4 g Al (d) Al is too reactive for carbon reduction.",
            commonErrors: ["Using 1 electron instead of 3 for Al3+.", "Forgetting to convert hours to seconds."],
            examinerNote: "2+2+4+2 = 10.",
          },
        },
      ],
    },
  ],
};