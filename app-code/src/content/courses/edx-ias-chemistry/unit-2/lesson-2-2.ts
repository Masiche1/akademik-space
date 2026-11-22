import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "ediaschem-u2-lesson-2-2",
  code: "2-2",
  title: "Redox Reactions",
  goal: "I CAN identify oxidation and reduction, assign oxidation states and balance redox equations.",
  standards: ["IC2 Inorganic and physical chemistry", "Redox"],
  vocabulary: [
    { term: "Oxidation", definition: "Loss of electrons or gain of oxygen; increase in oxidation state." },
    { term: "Reduction", definition: "Gain of electrons or loss of oxygen; decrease in oxidation state." },
    { term: "Oxidising agent", definition: "Substance that is reduced (accepts electrons)." },
    { term: "Disproportionation", definition: "Same element both oxidised and reduced in one reaction." },
  ],
  concepts: [
    {
      id: "ediaschem-u2-redox-basic",
      title: "Oxidation, reduction and oxidation states",
      skill: "Define redox in terms of electron transfer and assign oxidation numbers.",
      lesson: {
        sections: [
          {
            heading: "Definitions",
            body: "Oxidation = loss of electrons (OIL RIG). Reduction = gain of electrons. OIL RIG: Oxidation Is Loss, Reduction Is Gain. Both occur together in redox reactions — electrons transferred. Oxidising agent is reduced; reducing agent is oxidised.",
          },
          {
            heading: "Oxidation states",
            body: "Rules: elements = 0; ions = charge; O = −2 (except peroxides −1); H = +1 (except metal hydrides −1); F = −1; sum in compound = 0, in ion = charge. E.g. in KMnO₄: K=+1, O=−2×4=−8, Mn=+7.",
          },
          {
            heading: "Identifying redox",
            body: "Check oxidation states: increase = oxidation, decrease = reduction. Displacement reactions, metal extraction, rusting, respiration are redox. Non-redox: acid-base, precipitation, most decomposition.",
          },
        ],
        keyFormulas: [{ name: "OIL RIG", statement: "Oxidation Is Loss, Reduction Is Gain" }],
        workedExample: {
          problem: "Assign oxidation states to each element in Na₂Cr₂O₇.",
          solution: "Na=+1 (×2=+2), O=−2 (×7=−14). Sum=0 → 2Cr = +12 → Cr=+6.",
        },
      },
      questions: [
        {
          id: "ediaschem-redox-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "OIL RIG stands for:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Oxidation Is Gain, Reduction Is Loss" },
              { id: "b", text: "Oxidation Involves Light" },
              { id: "c", text: "Oxidation Is Loss, Reduction Is Gain" },
              { id: "d", text: "Only Ionic Losses Gain" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "OIL RIG", statement: "Oxidation = electron loss." }],
            steps: [{ reasoning: "Direct mnemonic.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Oxidation Is Loss, Reduction Is Gain",
          },
        },
        {
          id: "ediaschem-redox-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Assign oxidation states to S in SO₂ and SO₄²⁻.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Oxidation states", statement: "O=−2; sum=0 or ion charge." }],
            steps: [
              { reasoning: "SO₂: S + 2(−2) = 0 → S = +4.", marks: 1, markCode: "M" },
              { reasoning: "SO₄²⁻: S + 4(−2) = −2 → S = +6.", marks: 1, markCode: "M" },
              { reasoning: "Both correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "SO₂: S=+4; SO₄²⁻: S=+6",
            commonErrors: ["Forgetting ion charge."],
          },
        },
        {
          id: "ediaschem-redox-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Identify which species is oxidised and which is reduced in: Zn + Cu²⁺ → Zn²⁺ + Cu.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Redox", statement: "Zn: 0→+2 (oxidised); Cu: +2→0 (reduced)." }],
            steps: [
              { reasoning: "Zn: oxidation state 0 → +2 (increase) = oxidation.", marks: 1, markCode: "M" },
              { reasoning: "Cu²⁺: +2 → 0 (decrease) = reduction.", marks: 1, markCode: "M" },
              { reasoning: "Zn is reducing agent; Cu²⁺ is oxidising agent.", marks: 1, markCode: "A" },
              { reasoning: "Electrons transferred Zn→Cu²⁺.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Zn oxidised, Cu²⁺ reduced",
            commonErrors: ["Reversing agent labels."],
          },
        },
        {
          id: "ediaschem-redox-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Explain oxidation and reduction in terms of electron transfer and oxygen transfer.",
          parts: [
            { label: "a", prompt: "Electron definitions.", marks: 4 },
            { label: "b", prompt: "Oxygen definitions.", marks: 3 },
            { label: "c", prompt: "Why both definitions are equivalent.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Redox", statement: "e⁻ loss/gain = O gain/loss." }],
            steps: [
              { part: "a", reasoning: "Oxidation: loss of electrons (OIL).", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Reduction: gain of electrons (RIG).", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Increase/decrease in oxidation state corresponds.", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Both occur simultaneously.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Oxidation: gain of oxygen or loss of hydrogen.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Reduction: loss of oxygen or gain of hydrogen.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Example: CuO + H₂ → Cu + H₂O (Cu reduced, H oxidised).", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Oxygen is electronegative — gains electrons.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Gaining O = losing e⁻ = oxidation; losing O = gaining e⁻ = reduction.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Definitions consistent.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "e⁻ transfer and O transfer are equivalent views",
            commonErrors: ["Treating them as different phenomena."],
          },
        },
      ],
    },
    {
      id: "ediaschem-u2-redox-equations",
      title: "Balancing redox equations",
      skill: "Balance half-equations and construct full ionic redox equations.",
      lesson: {
        sections: [
          {
            heading: "Half-equations",
            body: "Write oxidation and reduction separately. Balance atoms, then charge with e⁻. Oxidation: electrons on right; reduction: electrons on left. Multiply to equalise electrons; add.",
          },
          {
            heading: "Example",
            body: "Zn → Zn²⁺ + 2e⁻ (oxidation); Cu²⁺ + 2e⁻ → Cu (reduction). Combine: Zn + Cu²⁺ → Zn²⁺ + Cu.",
          },
          {
            heading: "Acidified KMnO₄",
            body: "MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O (reduction). Used to oxidise Fe²⁺, C₂O₄²⁻, etc. MnO₄⁻ is purple — decolourised when reduced; used in titrations.",
          },
        ],
        keyFormulas: [{ name: "Key formula", statement: "Balance atoms → balance charge with e⁻ → equalise e⁻ → add" }],
        workedExample: {
          problem: "Balance: Fe²⁺ → Fe³⁺ and Cl₂ → 2Cl⁻.",
          solution: "Fe²⁺ → Fe³⁺ + e⁻ (×2); Cl₂ + 2e⁻ → 2Cl⁻. Combined: 2Fe²⁺ + Cl₂ → 2Fe³⁺ + 2Cl⁻.",
        },
      },
      questions: [
        {
          id: "ediaschem-half-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In a reduction half-equation, electrons appear on which side?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Right" },
              { id: "b", text: "Neither" },
              { id: "c", text: "Left" },
              { id: "d", text: "Both" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Reduction", statement: "Gains electrons — e⁻ on left." }],
            steps: [{ reasoning: "Reduction gains e⁻.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Left",
          },
        },
        {
          id: "ediaschem-half-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write the half-equation for the oxidation of Zn to Zn²⁺.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Half-equation", statement: "Atoms + charge balanced." }],
            steps: [
              { reasoning: "Zn → Zn²⁺.", marks: 1, markCode: "M" },
              { reasoning: "Add 2e⁻ to right to balance charge.", marks: 1, markCode: "M" },
              { reasoning: "Zn → Zn²⁺ + 2e⁻.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Zn → Zn²⁺ + 2e⁻",
            commonErrors: ["Electrons on wrong side."],
          },
        },
        {
          id: "ediaschem-half-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Balance: MnO₄⁻ + H⁺ + e⁻ → Mn²⁺ + H₂O in acid solution.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Half-equation", statement: "Balance O with H₂O, H with H⁺, charge with e⁻." }],
            steps: [
              { reasoning: "Balance O: MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O.", marks: 1, markCode: "M" },
              { reasoning: "O: 4 left = 4 right in H₂O.", marks: 1, markCode: "M" },
              { reasoning: "H: 8 left = 8 right in 4H₂O.", marks: 1, markCode: "A" },
              { reasoning: "Charge: −1+8−5=+2 = +2 right. Balanced.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O",
            commonErrors: ["Wrong H⁺ or e⁻ count."],
          },
        },
        {
          id: "ediaschem-half-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Balance the redox equation: Fe²⁺ + Cr₂O₇²⁻ + H⁺ → Fe³⁺ + Cr³⁺ + H₂O.",
          parts: [
            { label: "a", prompt: "Write the Fe²⁺ oxidation half-equation.", marks: 2 },
            { label: "b", prompt: "Write the dichromate reduction half-equation.", marks: 4 },
            { label: "c", prompt: "Combine to full equation.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Redox balancing", statement: "Half-equations → combine." }],
            steps: [
              { part: "a", reasoning: "Fe²⁺ → Fe³⁺ + e⁻ (×6 needed).", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Correct half-equation.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Cr₂O₇²⁻ + 14H⁺ + 6e⁻ → 2Cr³⁺ + 7H₂O.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Balance Cr: 2 each side.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Balance O with 7H₂O; H with 14H⁺; charge with 6e⁻.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Check charge: −2+14−6=+6 = 2(+3).", marks: 1, markCode: "A" },
              { part: "c", reasoning: "6Fe²⁺ + Cr₂O₇²⁻ + 14H⁺ → 6Fe³⁺ + 2Cr³⁺ + 7H₂O.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Multiply Fe half-eq by 6, dichromate by 1.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Verify atoms and charge balance.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Final balanced equation.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "6Fe²⁺ + Cr₂O₇²⁻ + 14H⁺ → 6Fe³⁺ + 2Cr³⁺ + 7H₂O",
            commonErrors: ["Not equalising electrons."],
          },
        },
      ],
    },
  ],
};
