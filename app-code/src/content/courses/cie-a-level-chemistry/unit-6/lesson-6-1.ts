import type { Lesson } from "../../../types.ts";

export const lesson611: Lesson = {
  id: "cial-c-u6-lesson-6-1",
  code: "6-1",
  title: "Hydrocarbons and halogenoalkanes",
  goal: "I CAN describe reactions of alkanes, alkenes and halogenoalkanes.",
  standards: ["9701 6.1: hydrocarbons"],
  vocabulary: [
    { term: "Alkane", definition: "Saturated hydrocarbon, C$_n$H$_{2n+2}$; only single bonds." },
    { term: "Alkene", definition: "Unsaturated hydrocarbon with C=C; general formula C$_n$H$_{2n}$." },
    { term: "Addition reaction", definition: "Two molecules combine across a double bond." },
    { term: "Halogenoalkane", definition: "Alkane with one or more H replaced by halogen." },
    { term: "Nucleophile", definition: "Electron-pair donor attacking δ+ carbon." },
    { term: "Electrophile", definition: "Electron-pair acceptor attacked by nucleophiles." },
  ],
  concepts: [
    {
      id: "cial-c-u6-hydrocarbons",
      title: "Alkanes and alkenes",
      skill: "Describe combustion, substitution and addition reactions.",
      lesson: {
        sections: [
          {
            heading: "Alkanes",
            body: "General formula C$_n$H$_{2n+2}$; saturated (single bonds only). React by substitution with halogens (UV light): $CH_4+Cl_2\\to CH_3Cl+HCl$. Complete combustion: $C_xH_y+(x+\\frac y4)O_2\\to xCO_2+\\frac y2H_2O$. Unreactive — used as fuels.",
          },
          {
            heading: "Alkenes",
            body: "C=C double bond makes them reactive. Addition reactions: $+H_2$ (Ni catalyst) → alkane; $+Br_2$ → dibromoalkane (bromine water decolourised — test for unsaturation); $+H_2O$ (H₃PO₄) → alcohol; $+HX$ → halogenoalkane. Markovnikov: H adds to C with more H.",
          },
          {
            heading: "Isomerism",
            body: "Chain isomerism: same formula different skeleton (butane vs 2-methylpropane). Position isomerism: functional group at different positions (propan-1-ol vs propan-2-ol). Geometric (cis/trans) for restricted rotation around C=C.",
          },
        ],
        keyFormulas: [
          { name: "Alkane formula", statement: "C$_n$H$_{2n+2}$" },
          { name: "Alkene test", statement: "Br$_2$ water decolourises — addition across C=C." },
        ],
        workedExample: {
          problem: "Write the equation for complete combustion of propane C$_3$H$_8$.",
          solution: "$C_3H_8+5O_2\\to3CO_2+4H_2O$ (balanced: 3 C, 8 H → 4 H₂O).",
        },
      },
      questions: [
        {
          id: "cial-c-u6-hc-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the general formula of an alkane?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "C$_n$H$_{2n+2}$" },
              { id: "b", text: "C$_n$H$_{2n}$" },
              { id: "c", text: "C$_n$H$_{2n-2}$" },
              { id: "d", text: "C$_n$H$_n$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Alkane formula", statement: "Saturated: C$_n$H$_{2n+2}$." }],
            steps: [{ reasoning: "Alkanes have formula C$_n$H$_{2n+2}$.", marks: 1, markCode: "A" }],
            finalAnswer: "C$_n$H$_{2n+2}$",
          },
        },
        {
          id: "cial-c-u6-hc-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write the equation for complete combustion of methane.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "law", name: "Combustion", statement: "Hydrocarbon + O₂ → CO₂ + H₂O." }],
            steps: [
              { reasoning: "$CH_4+2O_2\\to CO_2+2H_2O$.", marks: 1, markCode: "M" },
              { reasoning: "C: 1→1, H: 4→2H₂O, O: 4→2+2=4 balanced.", marks: 1, markCode: "M" },
              { reasoning: "Equation correct and balanced.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$CH_4+2O_2\\to CO_2+2H_2O$",
          },
        },
        {
          id: "cial-c-u6-hc-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why alkenes are more reactive than alkanes.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "C=C bond", statement: "π bond is weaker — breaks easily for addition." }],
            steps: [
              { reasoning: "Alkanes have only strong σ single bonds.", marks: 1, markCode: "M" },
              { reasoning: "Alkenes have a C=C with a weaker π bond.", marks: 1, markCode: "M" },
              { reasoning: "π bond breaks easily — electrophiles attack the double bond.", marks: 1, markCode: "M" },
              { reasoning: "So alkenes undergo addition; alkanes only substitution.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Weaker π bond allows addition",
          },
        },
        {
          id: "cial-c-u6-hc-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Hydrocarbons.",
          parts: [
            { label: "a", prompt: "Give the general formulae of alkanes and alkenes.", marks: 2 },
            { label: "b", prompt: "Write the equation for bromine reacting with ethene.", marks: 2 },
            { label: "c", prompt: "How is an alkene distinguished from an alkane?", marks: 2 },
            { label: "d", prompt: "Write the equation for the substitution of methane with chlorine.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "law", name: "Hydrocarbon reactions", statement: "Alkene addition; alkane substitution; Br₂ test." }],
            steps: [
              { part: "a", reasoning: "Alkane C$_n$H$_{2n+2}$; alkene C$_n$H$_{2n}$.", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Both correct.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$C_2H_4+Br_2\\to C_2H_4Br_2$.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "1,2-dibromoethane formed; balanced.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Bromine water decolourises with alkene only.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Alkane gives no reaction (needs UV for substitution).", marks: 1, markCode: "B" },
              { part: "d", reasoning: "$CH_4+Cl_2\\to CH_3Cl+HCl$ (UV light).", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Conditions stated (UV).", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Equation balanced.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) CnH2n+2/CnH2n (b) C2H4+Br2→C2H4Br2 (c) Br2 test (d) CH4+Cl2→CH3Cl+HCl",
          },
        },
      ],
    },
    {
      id: "cial-c-u6-haloalkanes",
      title: "Halogenoalkanes",
      skill: "Describe nucleophilic substitution and elimination reactions.",
      lesson: {
        sections: [
          {
            heading: "Structure and polarity",
            body: "C–X bond is polar (X more electronegative). Carbon is δ+, halogen δ−. This makes carbon susceptible to nucleophilic attack. Reactivity: R–I > R–Br > R–Cl > R–F (weaker C–X bond breaks easier).",
          },
          {
            heading: "Nucleophilic substitution",
            body: "Nu⁻ attacks δ+ carbon, displacing X⁻: $R-X+Nu^-\\to R-Nu+X^-$. With aqueous NaOH → alcohol; with alcoholic KCN → nitrile (R–CN, adds one C); with NH₃ → amine.",
          },
          {
            heading: "Elimination",
            body: "With alcoholic KOH, halogenoalkane loses HX to form alkene: $CH_3CH_2Br+KOH\\to CH_2=CH_2+KBr+H_2O$. Substitution vs elimination depends on conditions (aqueous vs alcoholic KOH).",
          },
        ],
        keyFormulas: [
          { name: "Substitution", statement: "$R-X+Nu^-\\to R-Nu+X^-$" },
          { name: "Reactivity", statement: "R–I > R–Br > R–Cl > R–F" },
        ],
        workedExample: {
          problem: "What product forms when bromoethane reacts with aqueous NaOH?",
          solution: "Nucleophilic substitution: $C_2H_5Br+OH^-\\to C_2H_5OH+Br^-$ — ethanol.",
        },
      },
      questions: [
        {
          id: "cial-c-u6-ha-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which halogenoalkane is most reactive toward nucleophilic substitution?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "R–I" },
              { id: "b", text: "R–F" },
              { id: "c", text: "R–Cl" },
              { id: "d", text: "R–Br" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "property", name: "C–X bond strength", statement: "Weaker bond = more reactive: I weakest." }],
            steps: [{ reasoning: "C–I bond weakest, breaks easiest.", marks: 1, markCode: "A" }],
            finalAnswer: "R–I",
          },
        },
        {
          id: "cial-c-u6-ha-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What product forms when 1-bromopropane reacts with aqueous NaOH?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "law", name: "Substitution", statement: "$OH^-$ replaces Br → alcohol." }],
            steps: [
              { reasoning: "$CH_3CH_2CH_2Br+OH^-\\to CH_3CH_2CH_2OH+Br^-$.", marks: 1, markCode: "M" },
              { reasoning: "Propan-1-ol formed (nucleophilic substitution).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Propan-1-ol",
          },
        },
        {
          id: "cial-c-u6-ha-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the difference between substitution and elimination for halogenoalkanes, including conditions.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Sub vs elim", statement: "Aqueous KOH → substitution; alcoholic KOH → elimination." }],
            steps: [
              { reasoning: "Aqueous NaOH/KOH: OH⁻ substitutes Br → alcohol.", marks: 1, markCode: "M" },
              { reasoning: "Alcoholic KOH: eliminates HBr → alkene.", marks: 1, markCode: "M" },
              { reasoning: "Same reactant, different conditions give different products.", marks: 1, markCode: "M" },
              { reasoning: "Both are nucleophilic/base reactions of C–X.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Aqueous→alcohol, alcoholic→alkene",
          },
        },
        {
          id: "cial-c-u6-ha-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Halogenoalkanes.",
          parts: [
            { label: "a", prompt: "Why is the C–X bond polar and reactive?", marks: 2 },
            { label: "b", prompt: "Write the substitution reaction of chloroethane with aqueous NaOH.", marks: 2 },
            { label: "c", prompt: "Write the elimination reaction of bromoethane with alcoholic KOH.", marks: 3 },
            { label: "d", prompt: "Rank R–F, R–Cl, R–Br, R–I by reactivity and explain.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "law", name: "Halogenoalkane reactions", statement: "Polar C–X; substitution vs elimination by conditions." }],
            steps: [
              { part: "a", reasoning: "X more electronegative — C is δ+, X is δ−.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "δ+ carbon attacked by nucleophiles.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "$C_2H_5Cl+OH^-\\to C_2H_5OH+Cl^-$.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Ethanol formed; balanced.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$C_2H_5Br+KOH\\to C_2H_4+KBr+H_2O$ (alcoholic).", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Ethene formed via elimination.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Conditions and products correct.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "R–I > R–Br > R–Cl > R–F.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "C–I weakest bond, breaks easiest.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) polar C-X (b) ethanol (c) ethene (d) I>Br>Cl>F",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cial-c-u6-hydrocarbons-halo-notes",
      title: "Hydrocarbons and halogenoalkanes — revision notes",
      summary: "Alkane/alkene reactions and halogenoalkane substitution vs elimination.",
      sections: [
        {
          heading: "Hydrocarbons",
          body: "Alkanes C$_n$H$_{2n+2}$: combustion + free-radical substitution (UV). Alkenes C$_n$H$_{2n}$: addition across C=C — H₂/Ni, Br₂ (decolourises bromine water), H₂O/H₃PO₄, HX. π bond weaker → more reactive.",
        },
        {
          heading: "Halogenoalkanes",
          body: "Polar C–δ+ carbon attacked by nucleophiles. Reactivity R–I>R–Br>R–Cl>R–F (weaker C–X). Aqueous OH⁻ → alcohol (substitution); alcoholic OH⁻ → alkene (elimination). KCN → nitrile (+1 C).",
        },
        {
          heading: "Exam checklist",
          body: "Check conditions: aqueous vs alcoholic KOH changes product completely. For mechanism questions show Nu⁻ attacking δ+ carbon and X⁻ leaving.",
        },
      ],
    },
  ],
};
