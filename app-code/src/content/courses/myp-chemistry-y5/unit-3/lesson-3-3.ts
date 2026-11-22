import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "mypc5-u3-lesson-3-3",
  code: "3-3",
  title: "Chemical Analysis and Green Chemistry",
  goal: "I CAN describe titration, chromatography and flame tests, calculate concentrations, and apply green chemistry principles to sustainability.",
  standards: [
    "MYP Sciences: Matter",
    "Key concept: Systems",
    "Criterion B: Investigating",
    "Criterion D: Reflecting",
  ],
  vocabulary: [
    { term: "Titration", definition: "Accurate neutralisation using burette and pipette to find unknown concentration." },
    { term: "Concentration", definition: "Amount of solute per unit volume; mol/dm³ = moles ÷ volume in dm³." },
    { term: "Chromatography", definition: "Separation technique using a stationary phase and mobile phase; identifies substances by Rf values." },
    { term: "Flame test", definition: "Identifies metal ions by characteristic flame colours (Li crimson, Na yellow, K lilac, Cu green-blue)." },
    { term: "Green chemistry", definition: "Design of chemical products/processes minimising waste, toxicity and energy use (12 principles)." },
    { term: "Atom economy", definition: "Percentage of reactant atoms ending up in desired product; higher = less waste." },
  ],
  concepts: [
    {
      id: "mypc5-u3-analysis",
      title: "Chemical analysis techniques",
      skill: "Describe titration calculations, chromatography and flame tests for qualitative and quantitative analysis.",
      lesson: {
        sections: [
          {
            heading: "Titration calculation",
            body: "n = c × V (volume in **dm³**). At the endpoint moles acid = moles base for 1:1 reactions. Procedure: pipette known volume of alkali into flask, add indicator, titrate with acid from burette until colour change, record titre, repeat for concordant results (within 0.1 cm³), average, then c = n/V.",
          },
          {
            heading: "Chromatography",
            body: "**Paper/thin-layer chromatography** separates mixtures: solvent (mobile phase) carries components up the paper; components separate by solubility and adsorption to the stationary phase. **Rf = distance moved by spot ÷ distance moved by solvent front** — characteristic for each substance. Used in forensics (inks, drugs) and food dye analysis.",
          },
          {
            heading: "Flame tests and precipitation",
            body: "Metal ions give characteristic flames: **Li⁺ crimson, Na⁺ yellow, K⁺ lilac, Ca²⁺ orange-red, Cu²⁺ blue-green**. Anions tested by precipitation: Cl⁻ + AgNO₃ → white AgCl (dissolves in NH₃); SO₄²⁻ + BaCl₂ → white BaSO₄ (insoluble in acid); CO₃²⁻ + acid → effervescence (CO₂ turns limewater milky).",
          },
        ],
        keyFormulas: [
          { name: "Moles", statement: "n = cV; V in dm^3 for c in mol/dm^3" },
          { name: "Rf", statement: "Rf = distance spot / distance solvent front" },
          { name: "Endpoint", statement: "Indicator change = moles acid = moles base" },
        ],
        workedExample: {
          problem: "25.0 cm³ of 0.100 mol/dm³ NaOH needs 20.0 cm³ HCl to reach endpoint. Find [HCl].",
          solution: "n(NaOH) = 0.100 × 0.0250 = 0.00250 mol. 1:1 ratio → n(HCl) = 0.00250 mol. c = 0.00250 ÷ 0.0200 = 0.125 mol/dm³.",
        },
      },
      questions: [
        {
          id: "mypc5-u3-analysis-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does Rf value measure in chromatography?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Temperature of the solvent" },
              { id: "b", text: "Colour intensity" },
              { id: "c", text: "Ratio of distance moved by spot to distance moved by solvent front" },
              { id: "d", text: "Mass of the sample" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Rf value", statement: "Rf = spot distance / solvent distance; identifies substances." },
            ],
            steps: [
              { reasoning: "Rf is a ratio comparing component travel to solvent travel.", working: "\\text{ratio}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Spot distance ÷ solvent distance",
            commonErrors: ["Reversing the ratio."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypc5-u3-analysis-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What colour flame does sodium produce?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Lilac" },
              { id: "b", text: "Crimson" },
              { id: "c", text: "Green" },
              { id: "d", text: "Yellow" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Flame colours", statement: "Na⁺ yellow; Li⁺ crimson; K⁺ lilac; Cu²⁺ blue-green." },
            ],
            steps: [
              { reasoning: "Sodium's characteristic flame is bright yellow.", working: "\\text{yellow}", marks: 1, markCode: "M" },
              { reasoning: "Other options correspond to Li/K/Cu.", working: "\\text{contrast}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Yellow",
            commonErrors: ["Confusing Na yellow with K lilac."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc5-u3-analysis-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "In a titration, why is the burette reading taken at eye level and the titre repeated until concordant?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It changes the indicator colour" },
              { id: "b", text: "Eye level avoids parallax error; concordant titres (within 0.1 cm³) average out random errors for a reliable mean" },
              { id: "c", text: "It makes the reaction faster" },
              { id: "d", text: "The burette must be emptied each time" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Titration accuracy", statement: "Parallax-free reading; concordant repeats → reliable mean titre." },
            ],
            steps: [
              { reasoning: "Reading at eye level eliminates parallax (viewing-angle) error.", working: "\\text{parallax}", marks: 1, markCode: "M" },
              { reasoning: "Concordant titres agree within 0.1 cm³ → random errors cancel on averaging.", working: "\\text{concordant}", marks: 1, markCode: "M" },
              { reasoning: "Improves accuracy and reliability of concentration result.", working: "\\text{reliable}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Avoids parallax; concordant repeats average errors",
            commonErrors: ["Saying repeats are done to use up the acid."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypc5-u3-analysis-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A forensic scientist analyses a white powder suspected to be sodium carbonate.",
          parts: [
            { label: "a", prompt: "Describe the test with dilute hydrochloric acid and the expected observation.", marks: 2 },
            { label: "b", prompt: "Describe how to confirm CO₂ is the gas produced.", marks: 2 },
            { label: "c", prompt: "A sample needs 25.0 cm³ of 0.0500 mol/dm³ HCl to react fully. Calculate moles of HCl used.", marks: 2 },
            { label: "d", prompt: "Evaluate whether these tests alone can confirm the powder is sodium carbonate.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Carbonate test", statement: "Acid → CO₂ effervescence; limewater turns milky confirming CO₂." },
            ],
            steps: [
              { part: "a", reasoning: "Add dilute HCl → vigorous effervescence (CO₂ bubbles) if carbonate present.", working: "\\text{effervescence}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Correct observation described.", working: "CO_2", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Bubble gas through limewater → turns milky due to CaCO₃ precipitate.", working: "\\text{limewater}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Milky = CO₂ confirmed (not just any gas).", working: "CaCO_3", marks: 1, markCode: "A" },
              { part: "c", reasoning: "n = cV = 0.0500 × 0.0250 = 0.00125 mol.", working: "0.00125", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Volume converted to dm³ correctly.", working: "\\text{mol}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Limitation: other carbonates also effervesce — test shows carbonate, not specifically sodium.", working: "\\text{not specific}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Need flame test (yellow = Na⁺) or further tests to confirm identity.", working: "\\text{flame test}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) HCl → effervescence (b) limewater milky (c) 0.00125 mol (d) not specific — need Na⁺ flame test",
            commonErrors: ["In (c), forgetting to convert cm³ to dm³."],
            examinerNote: "M1 A1 for (a),(b); M1 A1 for (c); M1 A1 for (d).",
          },
        },
        {
          id: "mypc5-u3-analysis-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the purpose of a titration?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To measure rate of reaction" },
              { id: "b", text: "To identify flame colours" },
              { id: "c", text: "To separate mixtures" },
              { id: "d", text: "To find the concentration of an unknown solution accurately using a known solution" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Titration", statement: "Accurate neutralisation to find unknown concentration." },
            ],
            steps: [
              { reasoning: "Titration measures volume of known solution needed → calculate unknown concentration.", working: "\\text{titration}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Find unknown concentration",
            commonErrors: ["Confusing with chromatography separation."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypc5-u3-analysis-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Calculate the moles of NaOH in 25.0 cm³ of 0.100 mol/dm³ solution. (n = cV, V in dm³)",
          response: {
            type: "numeric",
            parts: [{ label: "Moles", answer: 0.0025, unit: "mol" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "n = cV", statement: "Moles = concentration × volume in dm³." },
            ],
            steps: [
              { reasoning: "n = 0.100 × 0.0250 = 0.00250 mol.", working: "0.1\\times0.025=0.0025", marks: 1, markCode: "B" },
            ],
            finalAnswer: "$0.0025\\ \\text{mol}$",
            commonErrors: ["Using 25.0 cm³ directly → 2.5 mol (forgot dm³)."],
            examinerNote: "B1 for 0.0025 mol.",
          },
        },
        {
          id: "mypc5-u3-analysis-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "In chromatography, what does the Rf value tell you about a substance?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Its boiling point" },
              { id: "b", text: "Its mass" },
              { id: "c", text: "Its characteristic ratio of spot distance to solvent distance — used to identify it" },
              { id: "d", text: "Its colour" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Rf value", statement: "Rf = spot distance / solvent distance; characteristic per substance." },
            ],
            steps: [
              { reasoning: "Rf is constant for a substance in a given solvent — identifies it.", working: "\\text{Rf}", marks: 1, markCode: "M" },
              { reasoning: "Compared against known Rf values for identification.", working: "\\text{identify}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Characteristic ratio used for identification",
            commonErrors: ["Reversing the ratio definition."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc5-u3-analysis-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "In a chromatogram, a spot moved 4.0 cm and the solvent front moved 8.0 cm. Calculate the Rf value.",
          response: {
            type: "numeric",
            parts: [{ label: "Rf", answer: 0.5 }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Rf", statement: "Rf = distance spot / distance solvent front." },
            ],
            steps: [
              { reasoning: "Rf = $4.0 \\div 8.0 = 0.5$.", working: "4\\div8=0.5", marks: 1, markCode: "M" },
              { reasoning: "Answer: $0.5$.", working: "0.5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\text{Rf} = 0.5$",
            commonErrors: ["Reversing → 2.0."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc5-u3-analysis-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "What flame colour does potassium produce in a flame test?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Yellow" },
              { id: "b", text: "Blue-green" },
              { id: "c", text: "Lilac" },
              { id: "d", text: "Crimson" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Flame colours", statement: "K⁺ lilac; Na⁺ yellow; Li⁺ crimson; Cu²⁺ blue-green." },
            ],
            steps: [
              { reasoning: "Potassium's characteristic flame is lilac/violet.", working: "\\text{lilac}", marks: 1, markCode: "M" },
              { reasoning: "Other options match Na/Li/Cu.", working: "\\text{contrast}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Lilac",
            commonErrors: ["Confusing K lilac with Na yellow."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc5-u3-analysis-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "In a titration, 0.00250 mol of NaOH is neutralised by 20.0 cm³ of HCl. Calculate the HCl concentration.",
          response: {
            type: "numeric",
            parts: [{ label: "Concentration", answer: 0.125, unit: "mol/dm³" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "c = n/V", statement: "Concentration = moles / volume in dm³; 1:1 mole ratio at endpoint." },
            ],
            steps: [
              { reasoning: "1:1 ratio → n(HCl) = 0.00250 mol; V = 0.0200 dm³.", working: "0.0025;0.02", marks: 1, markCode: "M" },
              { reasoning: "c = $0.00250 \\div 0.0200 = 0.125$ mol/dm³.", working: "0.125", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$0.125\\ \\text{mol/dm}^3$",
            commonErrors: ["Using 20.0 cm³ without converting to dm³."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc5-u3-analysis-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "How is chloride ion (Cl⁻) identified in solution?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Add limewater — turns milky" },
              { id: "b", text: "Add iodine — blue-black colour" },
              { id: "c", text: "Add acidified silver nitrate — white AgCl precipitate forms, soluble in ammonia" },
              { id: "d", text: "Flame test — yellow colour" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Precipitation tests", statement: "Cl⁻ + AgNO₃ → white AgCl, dissolves in NH₃." },
            ],
            steps: [
              { reasoning: "AgNO₃ + Cl⁻ → AgCl(s) white precipitate.", working: "AgCl", marks: 1, markCode: "M" },
              { reasoning: "Confirmation: AgCl dissolves in dilute ammonia (distinguishes from other halides).", working: "\\text{NH}_3", marks: 1, markCode: "M" },
              { reasoning: "Limewater test is for CO₂/carbonates, not Cl⁻.", working: "\\text{contrast}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "AgNO₃ → white AgCl, dissolves in NH₃",
            commonErrors: ["Confusing with carbonate test (effervescence)."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypc5-u3-analysis-q12",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "25.0 cm³ of NaOH solution is titrated with 0.0500 mol/dm³ HCl. The mean titre is 30.0 cm³. Calculate the NaOH concentration.",
          response: {
            type: "numeric",
            parts: [{ label: "Concentration", answer: 0.06, unit: "mol/dm³" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Back titration calc", statement: "c(unknown) = c(known) × V(known) / V(unknown) for 1:1." },
            ],
            steps: [
              { reasoning: "n(HCl) = 0.0500 × 0.0300 = 0.00150 mol.", working: "0.0015", marks: 1, markCode: "M" },
              { reasoning: "1:1 → n(NaOH) = 0.00150 mol; V(NaOH) = 0.0250 dm³.", working: "0.025", marks: 1, markCode: "M" },
              { reasoning: "c(NaOH) = $0.00150 \\div 0.0250 = 0.0600$ mol/dm³.", working: "0.06", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$0.0600\\ \\text{mol/dm}^3$",
            commonErrors: ["Inverting ratio → 0.0375 or wrong volume."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypc5-u3-analysis-q13",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "What is a limitation of paper chromatography for identifying substances?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It only works for gases" },
              { id: "b", text: "It cannot separate anything" },
              { id: "c", text: "It requires expensive equipment" },
              { id: "d", text: "Rf values can be similar for different substances — it suggests identity but cannot confirm alone" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Chromatography limits", statement: "Rf similarity ≠ proof of identity — needs confirmation." },
            ],
            steps: [
              { reasoning: "Different substances may have similar Rf in same solvent.", working: "\\text{similar}", marks: 1, markCode: "M" },
              { reasoning: "Rf depends on solvent/temperature → conditions must be controlled.", working: "\\text{conditions}", marks: 1, markCode: "M" },
              { reasoning: "Used alongside other tests (flame, precipitation) for confirmation.", working: "\\text{confirm}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Rf similarity suggests but doesn't confirm identity",
            commonErrors: ["Claiming chromatography is useless."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypc5-u3-analysis-q14",
          difficulty: "core",
          totalMarks: 4,
          stem: "Describe the procedure for carrying out an accurate titration of NaOH with HCl using phenolphthalein indicator.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Titration procedure", statement: "Pipette unknown → burette known → indicator → titre → repeat concordant." },
            ],
            steps: [
              { reasoning: "Pipette known volume (25 cm³) of NaOH into conical flask using pipette filler.", working: "\\text{pipette}", marks: 1, markCode: "M" },
              { reasoning: "Add a few drops phenolphthalein (pink in alkali) → flask pink.", working: "\\text{indicator}", marks: 1, markCode: "M" },
              { reasoning: "Fill burette with HCl; titrate until first permanent colourless → record titre.", working: "\\text{endpoint}", marks: 1, markCode: "A" },
              { reasoning: "Repeat until concordant titres (±0.1 cm³) → average → calculate concentration.", working: "\\text{concordant}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Pipette alkali, burette acid, indicator, titre, concordant repeats",
            commonErrors: ["Omitting concordant repeats or indicator."],
            examinerNote: "M1 M1 A1 A1.",
          },
        },
        {
          id: "mypc5-u3-analysis-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A white solid could be NaCl or Na₂CO₃. Describe tests to distinguish them using (a) dilute HCl and (b) flame test.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Qualitative analysis", statement: "Effervescence with acid = carbonate; flame colour = metal ion." },
            ],
            steps: [
              { reasoning: "(a) Add dilute HCl: Na₂CO₃ → effervescence (CO₂); NaCl → no reaction.", working: "\\text{effervescence}", marks: 1, markCode: "M" },
              { reasoning: "Confirm CO₂ with limewater → milky.", working: "\\text{limewater}", marks: 1, markCode: "A" },
              { reasoning: "(b) Flame test: both contain Na⁺ → both give yellow — doesn't distinguish anion.", working: "\\text{Na}^+", marks: 1, markCode: "M" },
              { reasoning: "Conclusion: HCl test distinguishes; flame test confirms Na⁺ presence only.", working: "\\text{conclusion}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "HCl: carbonate effervesces; flame: both yellow (Na⁺)",
            commonErrors: ["Thinking flame test distinguishes the anions."],
            examinerNote: "M1 A1 M1 A1.",
          },
        },
        {
          id: "mypc5-u3-analysis-q16",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Evaluate the choice of analytical technique for three tasks: (i) finding concentration of an acid, (ii) identifying an unknown dye in a mixture, (iii) confirming presence of copper ions.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "comparison", name: "Analytical techniques", statement: "Titration=quantitative; chromatography=separation/ID; flame/precipitation=qualitative ID." },
            ],
            steps: [
              { reasoning: "(i) Titration — accurate quantitative measurement of concentration.", working: "\\text{titration}", marks: 1, markCode: "M" },
              { reasoning: "(ii) Chromatography — separates mixture components; Rf values identify dyes.", working: "\\text{chromatography}", marks: 1, markCode: "M" },
              { reasoning: "(iii) Flame test (blue-green) or precipitation with NaOH (blue Cu(OH)₂) — confirms Cu²⁺.", working: "\\text{Cu}^{2+}", marks: 1, markCode: "M" },
              { reasoning: "Evaluation: each technique matched to task type (quant vs qual).", working: "\\text{match}", marks: 1, markCode: "A" },
              { reasoning: "Limitation noted: single tests may not be specific — combine for confirmation.", working: "\\text{limits}", marks: 1, markCode: "A" },
              { reasoning: "Overall: appropriate technique selection is key to reliable analysis.", working: "\\text{selection}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Titration (conc), chromatography (mixture ID), flame/precipitation (Cu²⁺)",
            commonErrors: ["Using qualitative test for quantitative question."],
            examinerNote: "M1 M1 M1 A1 A1 A1.",
          },
        },
      ],
    },
    {
      id: "mypc5-u3-green",
      title: "Green chemistry and sustainability",
      skill: "Apply green chemistry principles including atom economy, waste prevention and renewable feedstocks.",
      lesson: {
        sections: [
          {
            heading: "The 12 principles (key ones)",
            body: "Green chemistry designs processes to be **less wasteful and less hazardous**: prevent waste rather than treat it; maximise **atom economy**; use safer solvents/auxiliaries; design for energy efficiency; use renewable feedstocks; design for degradation; and real-time analysis to prevent accidents.",
          },
          {
            heading: "Atom economy",
            body: "Atom economy = (molar mass of desired product ÷ total molar mass of all products) × 100%. Addition reactions approach 100%; substitution/elimination produce waste by-products → lower atom economy. E.g. hydration of ethene to ethanol is 100% atom economy — industrially preferred over fermentation routes with lower yields.",
          },
          {
            heading: "Sustainable chemistry in practice",
            body: "Examples: **bioethanol** from sugar cane (renewable carbon); **PLA bioplastic** from corn starch (compostable); **phosphate-free detergents** (reduce eutrophication); **enzymatic catalysts** replacing toxic metal catalysts; **carbon-neutral fuels** from captured CO₂. Evaluating 'greenness' considers energy source, toxicity, lifecycle and recyclability.",
          },
        ],
        keyFormulas: [
          { name: "Atom economy", statement: "AE = M_product / ΣM_products × 100%" },
          { name: "Green principle", statement: "Prevent waste; safer solvents; renewable feedstocks" },
          { name: "Sustainability", statement: "Evaluate energy, toxicity, lifecycle, recyclability" },
        ],
        workedExample: {
          problem: "Why does the industrial hydration of ethene (C₂H₄ + H₂O → C₂H₅OH) have 100% atom economy?",
          solution: "All atoms from reactants appear in the single product ethanol — no by-products are formed.",
        },
      },
      questions: [
        {
          id: "mypc5-u3-green-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does 'atom economy' measure?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Speed of the reaction" },
              { id: "b", text: "Number of atoms in a molecule" },
              { id: "c", text: "Cost of atoms used" },
              { id: "d", text: "Percentage of reactant atoms ending up in the desired product" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Atom economy", statement: "Desired product mass ÷ total product mass × 100%." },
            ],
            steps: [
              { reasoning: "AE quantifies waste minimisation at atomic level.", working: "\\text{AE}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Atoms in product ÷ total atoms",
            commonErrors: ["Confusing with yield or percentage purity."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypc5-u3-green-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which is an example of a renewable feedstock in green chemistry?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Natural gas" },
              { id: "b", text: "Sugar cane used to produce bioethanol" },
              { id: "c", text: "Coal" },
              { id: "d", text: "Crude oil" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Renewable feedstock", statement: "Bio-based material that can be replenished (crops, waste biomass)." },
            ],
            steps: [
              { reasoning: "Sugar cane regrows → renewable carbon source.", working: "\\text{renewable}", marks: 1, markCode: "M" },
              { reasoning: "Fossil fuels are finite, non-renewable.", working: "\\text{finite}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Sugar cane for bioethanol",
            commonErrors: ["Choosing fossil fuels — non-renewable."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc5-u3-green-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A reaction produces 80 g desired product and 20 g waste by-product. Calculate atom economy and comment on its 'greenness'.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Cannot be calculated" },
              { id: "b", text: "AE = 80/(80+20) × 100% = 80%; good but 20% waste still needs disposal or recycling" },
              { id: "c", text: "AE = 100% — perfect" },
              { id: "d", text: "AE = 20% — poor" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "AE calculation", statement: "AE = desired product / total products × 100%." },
            ],
            steps: [
              { reasoning: "AE = 80 ÷ 100 × 100% = 80%.", working: "80\\div100\\times100=80", marks: 1, markCode: "M" },
              { reasoning: "80% is moderate-good; higher is greener.", working: "\\text{80\\%}", marks: 1, markCode: "M" },
              { reasoning: "20% waste still requires treatment/recycling — not ideal.", working: "\\text{waste}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "80% atom economy — good but waste remains",
            commonErrors: ["Using reactant mass instead of total product mass."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypc5-u3-green-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A pharmaceutical company currently uses a process with low atom economy and toxic solvents to make a drug.",
          parts: [
            { label: "a", prompt: "Explain what atom economy means for this process and why low AE is a problem.", marks: 2 },
            { label: "b", prompt: "Identify two green chemistry principles the company should adopt and how.", marks: 2 },
            { label: "c", prompt: "Suggest one real-world benefit of switching to a greener process beyond waste reduction.", marks: 2 },
            { label: "d", prompt: "Evaluate one barrier to adopting green chemistry in industry.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Green redesign", statement: "Replace hazardous inputs/solvents, maximise AE, use catalysis." },
            ],
            steps: [
              { part: "a", reasoning: "AE = desired drug mass ÷ all products; low AE means most atoms become waste.", working: "\\text{AE}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Problem: waste disposal cost, environmental harm, resource waste.", working: "\\text{waste}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Use safer solvents (water/biodegradable) and design higher-AE route (e.g. addition over substitution).", working: "\\text{safer solvents}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Use catalysis to reduce energy/auxiliaries; real-time monitoring to prevent accidents.", working: "\\text{catalysis}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Benefit: lower disposal/treatment costs, safer workplace, better corporate image, regulatory compliance.", working: "\\text{benefit}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Any valid real-world benefit linked to sustainability.", working: "\\text{linked}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Barrier: R&D cost/time to redesign validated process; risk of changing drug efficacy; regulatory re-approval needed.", working: "\\text{barrier}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Balanced evaluation acknowledging cost vs long-term gain.", working: "\\text{evaluation}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) AE low = waste (b) safer solvents + higher AE route (c) lower costs/safer workplace (d) R&D cost and regulatory barriers",
            commonErrors: ["In (b), suggesting ideas unrelated to green chemistry principles."],
            examinerNote: "M1 A1 for (a); M1 A1 for (b); M1 A1 for (c); M1 A1 for (d).",
          },
        },
        {
          id: "mypc5-u3-green-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the main goal of green chemistry?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Make chemicals cheaper only" },
              { id: "b", text: "Increase reaction speed" },
              { id: "c", text: "Design chemical products and processes that minimise waste, toxicity and energy use" },
              { id: "d", text: "Use more hazardous chemicals" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Green chemistry", statement: "Design for less waste and less hazard." },
            ],
            steps: [
              { reasoning: "Green chemistry prevents waste/toxicity at the design stage.", working: "\\text{design}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Minimise waste, toxicity, energy",
            commonErrors: ["Thinking it's only about cost."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypc5-u3-green-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A reaction produces 60 g of desired product and 40 g of waste by-product. What is its atom economy?",
          response: {
            type: "numeric",
            parts: [{ label: "AE", answer: 60, unit: "%" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Atom economy", statement: "AE = desired product / total products × 100%." },
            ],
            steps: [
              { reasoning: "AE = $60 \\div (60+40) \\times 100 = 60$%.", working: "60\\div100\\times100=60", marks: 1, markCode: "B" },
            ],
            finalAnswer: "$60\\%$",
            commonErrors: ["Dividing by reactant mass instead of total products."],
            examinerNote: "B1 for 60%.",
          },
        },
        {
          id: "mypc5-u3-green-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "How does atom economy differ from percentage yield?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Yield is always higher" },
              { id: "b", text: "Atom economy only applies to gases" },
              { id: "c", text: "They are identical" },
              { id: "d", text: "Yield measures amount of desired product obtained vs theoretical; atom economy measures what fraction of all product atoms end up in the desired product" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "comparison", name: "AE vs yield", statement: "Yield = actual/theoretical desired; AE = desired/total products." },
            ],
            steps: [
              { reasoning: "Yield: how much product formed vs expected; atom economy: waste minimisation.", working: "\\text{distinct}", marks: 1, markCode: "M" },
              { reasoning: "A reaction can have high yield but low AE (lots of by-product).", working: "\\text{example}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Yield measures amount; AE measures waste",
            commonErrors: ["Confusing the two concepts."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc5-u3-green-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "A process makes 80 g desired product and 20 g by-product. Calculate atom economy.",
          response: {
            type: "numeric",
            parts: [{ label: "AE", answer: 80, unit: "%" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Atom economy", statement: "AE = desired / total × 100%." },
            ],
            steps: [
              { reasoning: "AE = $80 \\div 100 \\times 100 = 80$%.", working: "80", marks: 1, markCode: "M" },
              { reasoning: "Answer: $80$%.", working: "80", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$80\\%$",
            commonErrors: ["Using 80/20 instead of 80/100."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc5-u3-green-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which is an example of using a renewable feedstock in green chemistry?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Making bioethanol from corn starch or sugar cane" },
              { id: "b", text: "Extracting natural gas" },
              { id: "c", text: "Using crude oil for plastics" },
              { id: "d", text: "Mining coal for fuel" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Renewable feedstock", statement: "Bio-based, replenishable raw material." },
            ],
            steps: [
              { reasoning: "Crops/starch are renewable carbon sources.", working: "\\text{bio}", marks: 1, markCode: "M" },
              { reasoning: "Fossil fuels are finite → non-renewable.", working: "\\text{finite}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Bioethanol from corn/sugar cane",
            commonErrors: ["Choosing any fossil fuel."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc5-u3-green-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "Two reactions: A produces 90 g desired + 10 g waste; B produces 50 g desired + 50 g waste. Calculate both atom economies.",
          response: {
            type: "numeric",
            parts: [
              { label: "AE A", answer: 90, unit: "%" },
              { label: "AE B", answer: 50, unit: "%" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Atom economy", statement: "AE = desired / total products × 100%." },
            ],
            steps: [
              { part: "AE A", reasoning: "A: $90 \\div 100 \\times 100 = 90$%.", working: "90", marks: 1, markCode: "M" },
              { part: "AE B", reasoning: "B: $50 \\div 100 \\times 100 = 50$%.", working: "50", marks: 1, markCode: "A" },
            ],
            finalAnswer: "A = 90%; B = 50%",
            commonErrors: ["Swapping the values."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc5-u3-green-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A chemical process uses benzene as a solvent and produces a large amount of hazardous waste. Which green chemistry principles are being violated?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only the catalysis principle" },
              { id: "b", text: "No principles violated" },
              { id: "c", text: "Only the energy principle" },
              { id: "d", text: "Use of safer solvents (benzene is toxic/carcinogenic) and waste prevention (large waste output)" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Green principles", statement: "Safer solvents, waste prevention, atom economy are key." },
            ],
            steps: [
              { reasoning: "Benzene is toxic/carcinogenic → violates 'safer solvents' principle.", working: "\\text{solvent}", marks: 1, markCode: "M" },
              { reasoning: "Large hazardous waste → violates 'prevent waste' principle.", working: "\\text{waste}", marks: 1, markCode: "M" },
              { reasoning: "Could also improve atom economy — redesign for less waste.", working: "\\text{AE}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Safer solvents + waste prevention violated",
            commonErrors: ["Naming only one principle."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypc5-u3-green-q12",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A reaction makes 46 g of ethanol (desired) and 18 g of water (by-product). Calculate atom economy.",
          response: {
            type: "numeric",
            parts: [{ label: "AE", answer: 71.9, unit: "%", tolerance: 0.1 }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Atom economy", statement: "AE = desired / total products × 100%." },
            ],
            steps: [
              { reasoning: "Total products = $46 + 18 = 64$ g.", working: "64", marks: 1, markCode: "M" },
              { reasoning: "AE = $46 \\div 64 \\times 100 = 71.875$% ≈ 71.9%.", working: "46\\div64\\times100", marks: 1, markCode: "M" },
              { reasoning: "Answer: $71.9$% (accept 71.8–71.9).", working: "71.9", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\approx 71.9\\%$",
            commonErrors: ["Dividing 46/18 instead of 46/64."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypc5-u3-green-q13",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "When evaluating whether a chemical process is 'green', which factors should be considered beyond atom economy?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only the colour of products" },
              { id: "b", text: "Only the reaction speed" },
              { id: "c", text: "Only the cost" },
              { id: "d", text: "Energy source, toxicity of inputs/outputs, lifecycle impact, recyclability and safety" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Sustainability evaluation", statement: "Consider energy, toxicity, lifecycle, recyclability." },
            ],
            steps: [
              { reasoning: "Greenness includes energy efficiency, renewable feedstocks, safer chemicals.", working: "\\text{factors}", marks: 1, markCode: "M" },
              { reasoning: "Also toxicity, waste disposal, recyclability, safety throughout lifecycle.", working: "\\text{lifecycle}", marks: 1, markCode: "M" },
              { reasoning: "AE is one metric — not the whole picture.", working: "\\text{partial}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Energy, toxicity, lifecycle, recyclability, safety",
            commonErrors: ["Equating high AE with fully green."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypc5-u3-green-q14",
          difficulty: "core",
          totalMarks: 4,
          stem: "Describe four principles of green chemistry and give an example of each in practice.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Green chemistry principles", statement: "Prevent waste, safer solvents, renewable feedstocks, energy efficiency, catalysis." },
            ],
            steps: [
              { reasoning: "Prevent waste: design reactions with high atom economy (e.g. addition reactions).", working: "\\text{waste}", marks: 1, markCode: "M" },
              { reasoning: "Safer solvents: replace toxic solvents with water/biodegradable alternatives.", working: "\\text{solvents}", marks: 1, markCode: "M" },
              { reasoning: "Renewable feedstocks: use plant biomass instead of petroleum.", working: "\\text{renewable}", marks: 1, markCode: "A" },
              { reasoning: "Energy efficiency/catalysis: use catalysts to reduce energy and auxiliaries.", working: "\\text{catalysis}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Waste prevention, safer solvents, renewable feedstocks, catalysis",
            commonErrors: ["Listing principles without examples."],
            examinerNote: "M1 M1 A1 A1.",
          },
        },
        {
          id: "mypc5-u3-green-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A pharmaceutical company wants to improve the greenness of its synthesis. Calculate the atom economy improvement if switching from a process with AE = 35% to one with AE = 78% for a 100 g batch, and explain the benefit.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Atom economy", statement: "AE = desired / total products × 100%." },
            ],
            steps: [
              { reasoning: "Old process: 35 g desired, 65 g waste per 100 g.", working: "35;65", marks: 1, markCode: "M" },
              { reasoning: "New process: 78 g desired, 22 g waste per 100 g.", working: "78;22", marks: 1, markCode: "M" },
              { reasoning: "Waste reduced by $65 - 22 = 43$ g per batch — less disposal cost and environmental harm.", working: "43", marks: 1, markCode: "A" },
              { reasoning: "Also more product per batch → better resource efficiency.", working: "\\text{efficiency}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "AE 35% → 78%; waste drops 43 g per 100 g batch",
            commonErrors: ["Confusing percentage points with percent change."],
            examinerNote: "M1 M1 A1 A1.",
          },
        },
        {
          id: "mypc5-u3-green-q16",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A company produces a cleaning product via a multi-step process using toxic solvents and producing hazardous waste. Evaluate a proposal to redesign it using green chemistry principles.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Green redesign", statement: "Apply principles: prevent waste, safer solvents, renewable feedstocks, catalysis." },
            ],
            steps: [
              { reasoning: "Replace toxic solvents with water or biodegradable alternatives → safer solvents principle.", working: "\\text{solvents}", marks: 1, markCode: "M" },
              { reasoning: "Redesign route for higher atom economy → fewer by-products → less hazardous waste.", working: "\\text{AE}", marks: 1, markCode: "M" },
              { reasoning: "Use enzymes/greener catalysts → lower energy, fewer auxiliaries.", working: "\\text{catalysis}", marks: 1, markCode: "M" },
              { reasoning: "Benefit: reduced disposal costs, safer workplace, better environmental profile.", working: "\\text{benefit}", marks: 1, markCode: "A" },
              { reasoning: "Barrier: R&D cost, re-validation, regulatory approval for new formulation.", working: "\\text{barrier}", marks: 1, markCode: "A" },
              { reasoning: "Overall: worthwhile long-term — aligns with sustainability goals and may reduce costs.", working: "\\text{worthwhile}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Greener solvents, higher AE, catalysis → less waste/toxicity; R&D cost is barrier",
            commonErrors: ["Uncritical acceptance without barriers."],
            examinerNote: "M1 M1 M1 A1 A1 A1.",
          },
        },
      ],
    },
  ],
};
