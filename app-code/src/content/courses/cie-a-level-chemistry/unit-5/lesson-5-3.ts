import type { Lesson } from "../../../types.ts";

export const lesson513: Lesson = {
  id: "cial-c-u5-lesson-5-3",
  code: "5-3",
  title: "Solubility product and qualitative analysis",
  goal: "I CAN use $K_{sp}$ to predict precipitation and identify ions by qualitative tests.",
  standards: ["9701 5.3: solubility and analysis"],
  vocabulary: [
    { term: "$K_{sp}$", definition: "Solubility product: $K_{sp}=[A^{x+}]^x[B^{y-}]^y$ for $A_xB_y(s)\\rightleftharpoons xA^{y+}+yB^{x-}$." },
    { term: "Precipitate", definition: "Insoluble solid formed when $Q>K_{sp}$." },
    { term: "Qualitative analysis", definition: "Identifying ions by characteristic reactions/tests." },
    { term: "Flame test", definition: "Characteristic flame colour for metal cations." },
    { term: "Complexometric", definition: "Titration using EDTA for metal ions." },
  ],
  concepts: [
    {
      id: "cial-c-u5-ksp",
      title: "Solubility product $K_{sp}$",
      skill: "Write $K_{sp}$ expressions and predict precipitation.",
      lesson: {
        sections: [
          {
            heading: "$K_{sp}$ expression",
            body: "For $AgCl(s)\\rightleftharpoons Ag^+ + Cl^-$: $K_{sp}=[Ag^+][Cl^-]$. For $Mg(OH)_2$: $K_{sp}=[Mg^{2+}][OH^-]^2$ — powers = stoichiometric coefficients. Only aqueous ions appear; solid omitted.",
          },
          {
            heading: "Predicting precipitation",
            body: "Calculate ionic product $Q$ with actual concentrations. $Q>K_{sp}$: precipitate forms. $Q=K_{sp}$: saturated, equilibrium. $Q<K_{sp}$: unsaturated, dissolves. Common ion effect: adding shared ion shifts equilibrium left.",
          },
          {
            heading: "Uses",
            body: "Separating ions: add reagent to precipitate one ion while others stay dissolved. Group 2 analysis: $BaSO_4$ precipitate test for sulfate; $AgCl$ test for chloride.",
          },
        ],
        keyFormulas: [
          { name: "$K_{sp}$", statement: "$K_{sp}=\\prod[ions]^{powers}$" },
          { name: "Precipitation", statement: "$Q>K_{sp}$ $\\Rightarrow$ precipitate forms" },
        ],
        workedExample: {
          problem: "$K_{sp}(AgCl)=1.8\\times10^{-10}$. Will AgCl precipitate if $[Ag^+]=0.001$ and $[Cl^-]=0.001$?",
          solution: "$Q=[Ag^+][Cl^-]=10^{-6} > K_{sp}=1.8\\times10^{-10}$ — yes, precipitate forms.",
        },
      },
      questions: [
        {
          id: "cial-c-u5-ksp-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is $K_{sp}$ for $Mg(OH)_2(s) \\rightleftharpoons Mg^{2+} + 2OH^-$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$[Mg^{2+}][OH^-]^2$" },
              { id: "b", text: "$[Mg^{2+}][OH^-]$" },
              { id: "c", text: "$[Mg^{2+}]^2[OH^-]$" },
              { id: "d", text: "$[Mg(OH)_2]$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "formula", name: "$K_{sp}$", statement: "Powers = stoichiometric coefficients." }],
            steps: [{ reasoning: "$[OH^-]$ is squared (coefficient 2).", marks: 1, markCode: "A" }],
            finalAnswer: "$[Mg^{2+}][OH^-]^2$",
          },
        },
        {
          id: "cial-c-u5-ksp-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "For $CaF_2$, $K_{sp}=4.0\\times10^{-11}$. Calculate $[Ca^{2+}]$ in saturated solution if $[F^-]=0.010$ mol dm$^{-3}$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "$K_{sp}$", statement: "$K_{sp}=[Ca^{2+}][F^-]^2$." }],
            steps: [
              { reasoning: "$[Ca^{2+}] = \\frac{K_{sp}}{[F^-]^2} = \\frac{4.0\\times10^{-11}}{(0.010)^2}$.", working: "\\frac{4.0 \\times 10^{-11}}{10^{-4}}", marks: 1, markCode: "M" },
              { reasoning: "$=4.0\\times10^{-7}$ mol dm$^{-3}$.", marks: 1, markCode: "M" },
              { reasoning: "Correct value.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$4.0\\times10^{-7}$ mol dm$^{-3}$",
          },
        },
        {
          id: "cial-c-u5-ksp-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "$K_{sp}(BaSO_4)=1.1\\times10^{-10}$. If $[Ba^{2+}]=0.001$ and $[SO_4^{2-}]=0.001$, does BaSO$_4$ precipitate? Show working.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "Ionic product", statement: "$Q>K_{sp}$ precipitates." }],
            steps: [
              { reasoning: "$Q=[Ba^{2+}][SO_4^{2-}]=10^{-3}\\times10^{-3}=10^{-6}$.", working: "10^{-6}", marks: 1, markCode: "M" },
              { reasoning: "Compare $Q=10^{-6}$ with $K_{sp}=1.1\\times10^{-10}$.", marks: 1, markCode: "M" },
              { reasoning: "$Q>K_{sp}$ so precipitation occurs.", marks: 1, markCode: "M" },
              { reasoning: "Yes, BaSO$_4$ precipitates.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Yes, $Q>K_{sp}$",
          },
        },
        {
          id: "cial-c-u5-ksp-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "$K_{sp}$ and precipitation.",
          parts: [
            { label: "a", prompt: "Write $K_{sp}$ for $Ag_2CrO_4(s) \\rightleftharpoons 2Ag^+ + CrO_4^{2-}$.", marks: 2 },
            { label: "b", prompt: "For $K_{sp}(CaF_2)=4.0\\times10^{-11}$, find $[Ca^{2+}]$ when $[F^-]=0.010$.", marks: 3 },
            { label: "c", prompt: "Explain the common ion effect on solubility.", marks: 2 },
            { label: "d", prompt: "How is BaSO$_4$ used to test for sulfate ions?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "$K_{sp}$", statement: "$K_{sp}=[Ag^+]^2[CrO_4^{2-}]$; common ion shifts equilibrium." }],
            steps: [
              { part: "a", reasoning: "$K_{sp}=[Ag^+]^2[CrO_4^{2-}]$ (Ag+ coefficient 2).", marks: 2, markCode: "A" },
              { part: "b", reasoning: "$[Ca^{2+}]=\\frac{4.0\\times10^{-11}}{(0.010)^2}$.", working: "\\frac{4.0\\times10^{-11}}{10^{-4}}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "$=4.0\\times10^{-7}$ mol dm$^{-3}$.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct value.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Added shared ion increases its concentration.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Equilibrium shifts left — less solid dissolves.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Add $Ba^{2+}$ solution — white BaSO$_4$ precipitate confirms sulfate.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Insoluble salt forms visibly.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) [Ag+]2[CrO4--] (b) 4.0e-7 (c) common ion↓solubility (d) white ppt",
          },
        },
      ],
    },
    {
      id: "cial-c-u5-qualitative",
      title: "Qualitative analysis",
      skill: "Identify cations and anions by characteristic tests.",
      lesson: {
        sections: [
          {
            heading: "Cation tests",
            body: "Na$^+$: yellow flame. K$^+$: lilac flame. Ca$^+$: brick-red. Sr$^+$: crimson. Ba$^+$: green. $NH_4^+$: warm with NaOH → NH$_3$ (turns damp red litmus blue). $Fe^{2+}$: green solution, $Fe^{3+}$: yellow/brown — distinguish with NaOH ($Fe(OH)_2$ green→brown, $Fe(OH)_3$ brown) or KSCN (Fe³⁺ blood red).",
          },
          {
            heading: "Anion tests",
            body: "Cl$^-$: AgNO$_3$ → white ppt, soluble in NH$_3$. Br$^-$: cream ppt, partially soluble. I$^-$: yellow ppt, insoluble in NH$_3$. SO$_4^{2-}$: BaCl$_2$/Ba(NO$_3$)$_2$ → white BaSO$_4$ insoluble in acid. CO$_3^{2-}$: acid → CO$_2$ (limewater milky). NO$_3^-$: brown ring with FeSO$_4$ + conc H$_2$SO$_4$.",
          },
          {
            heading: "Systematic approach",
            body: "Test for gases first (NH$_3$, CO$_2$), then precipitates with group reagents, then confirm with specific tests. Always state observation + inference.",
          },
        ],
        keyFormulas: [
          { name: "Halide test", statement: "AgNO$_3$: Cl⁻ white, Br⁻ cream, I⁻ yellow ppt." },
          { name: "Sulfate test", statement: "Ba$^{2+}$ + SO$_4^{2-}$ → white BaSO$_4$ insoluble in HCl." },
        ],
        workedExample: {
          problem: "A white precipitate forms with AgNO$_3$ and dissolves in dilute NH$_3$. Identify the anion.",
          solution: "White ppt = chloride (AgCl); dissolves in NH$_3$ confirms Cl⁻ — AgCl soluble in NH$_3$, AgBr/AgI are not.",
        },
      },
      questions: [
        {
          id: "cial-c-u5-qa-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What colour is the flame for sodium ions?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Yellow" },
              { id: "b", text: "Lilac" },
              { id: "c", text: "Brick red" },
              { id: "d", text: "Green" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "property", name: "Flame test", statement: "Na⁺ = yellow flame." }],
            steps: [{ reasoning: "Sodium gives a yellow flame.", marks: 1, markCode: "A" }],
            finalAnswer: "Yellow",
          },
        },
        {
          id: "cial-c-u5-qa-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is observed when AgNO$_3$ is added to a chloride solution?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "property", name: "Halide test", statement: "AgCl = white precipitate." }],
            steps: [
              { reasoning: "White precipitate of AgCl forms.", marks: 1, markCode: "A" },
              { reasoning: "Dissolves in dilute NH$_3$ (distinguishes from Br⁻/I⁻).", marks: 1, markCode: "B" },
            ],
            finalAnswer: "White ppt, soluble in NH3",
          },
        },
        {
          id: "cial-c-u5-qa-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How would you distinguish between $Fe^{2+}$ and $Fe^{3+}$ solutions? Give two methods.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "property", name: "Iron tests", statement: "Fe²⁺ green, Fe³⁺ yellow/brown; different reactions." }],
            steps: [
              { reasoning: "Colour: Fe²⁺ pale green, Fe³⁺ yellow/brown.", marks: 1, markCode: "M" },
              { reasoning: "NaOH: Fe²⁺ gives green ppt turning brown; Fe³⁺ gives red-brown ppt directly.", marks: 1, markCode: "M" },
              { reasoning: "KSCN: Fe³⁺ gives blood-red colour; Fe²⁺ does not.", marks: 1, markCode: "M" },
              { reasoning: "Two valid distinguishing tests given.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Colour + NaOH or KSCN",
          },
        },
        {
          id: "cial-c-u5-qa-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Qualitative analysis.",
          parts: [
            { label: "a", prompt: "State the flame colours for Na⁺, K⁺ and Ca²⁺.", marks: 3 },
            { label: "b", prompt: "What is observed when acid is added to a carbonate?", marks: 2 },
            { label: "c", prompt: "How is sulfate confirmed? Give reagent and observation.", marks: 2 },
            { label: "d", prompt: "Why does AgCl dissolve in NH₃ but AgI does not?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "property", name: "Qualitative tests", statement: "Flame colours; CO2 from carbonates; BaSO4 for sulfate." }],
            steps: [
              { part: "a", reasoning: "Na⁺ yellow, K⁺ lilac, Ca²⁺ brick red.", marks: 1, markCode: "A" },
              { part: "a", reasoning: "All three correct.", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Bonus: Sr crimson or Ba green.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Effervescence — CO₂ gas evolved.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Limewater turns milky (confirms CO₂).", marks: 1, markCode: "B" },
              { part: "c", reasoning: "BaCl₂ or Ba(NO₃)₂ added → white BaSO₄ ppt, insoluble in acid.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Correct reagent and observation.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "AgCl forms soluble [Ag(NH₃)₂]⁺ complex.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "AgI is too insoluble to complex.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) yellow/lilac/brick-red (b) CO2 effervescence (c) Ba2+ white ppt (d) AgCl complexes",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cial-c-u5-ksp-qualitative-notes",
      title: "$K_{sp}$ and qualitative analysis — revision notes",
      summary: "Solubility product calculations and ion identification tests.",
      sections: [
        {
          heading: "$K_{sp}$",
          body: "$K_{sp}=\\prod[ion]^{power}$ — powers from coefficients, solid omitted. Ionic product $Q>K_{sp}$ $\\to$ precipitate; $Q<K_{sp}$ $\\to$ dissolves. Common ion (e.g. extra Cl⁻ in AgCl) reduces solubility.",
        },
        {
          heading: "Key tests",
          body: "Flames: Na⁺ yellow, K⁺ lilac, Ca²⁺ brick-red, Sr²⁺ crimson, Ba²⁺ green. Halides: AgNO₃ white/cream/yellow ppt for Cl⁻/Br⁻/I⁻. Sulfate: Ba²⁺ white ppt insoluble in acid. Carbonate: acid → CO₂. Fe³⁺: KSCN blood-red.",
        },
        {
          heading: "Exam checklist",
          body: "Always write Q and compare with Ksp before concluding. For qualitative answers give BOTH observation and inference — marks split between them.",
        },
      ],
    },
  ],
};
