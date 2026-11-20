import type { Lesson } from "../../../types.ts";

export const lesson143: Lesson = {
  id: "olchem-u4-lesson-4-3",
  code: "4-3",
  title: "Oxidation Numbers and the Electrochemical Series",
  goal: "I CAN assign oxidation numbers and use the reactivity series to predict displacement reactions.",
  standards: ["5070 4.3"],
  vocabulary: [
    { term: "Oxidation number", definition: "Apparent charge on an atom if electrons were transferred completely." },
    { term: "Electrochemical series", definition: "List of half-reactions in order of ease of reduction (same as reactivity)." },
    { term: "Standard electrode potential", definition: "Voltage for a half-cell vs standard hydrogen electrode." },
    { term: "Displacement", definition: "More reactive metal displaces less reactive from its salt solution." },
    { term: "Cell potential", definition: "EMF of a cell = cathode potential − anode potential." },
    { term: "Cathode", definition: "Electrode where reduction occurs (positive in electrolysis of solution)." },
    { term: "Anode", definition: "Electrode where oxidation occurs (negative in electrolysis of solution)." },
    { term: "Selective discharge", definition: "When multiple ions compete, the easier one is discharged first." },
  ],
  concepts: [
    {
      id: "olchem-u4-oxidation-numbers",
      title: "Oxidation numbers",
      skill: "Assign oxidation numbers to elements in compounds and ions.",
      lesson: {
        sections: [
          {
            heading: "Rules",
            body: "1. Element: oxidation number = 0 (Na, O₂, Cl₂).\n2. Simple ion: oxidation number = charge (Na⁺=+1, Cl⁻=−1).\n3. Oxygen: −2 (except peroxides −1, OF₂ +2).\n4. Hydrogen: +1 (except metal hydrides −1).\n5. Group 1: +1; Group 2: +2; halogens: −1 (except with O).\n6. Sum of oxidation numbers = charge of species (0 for neutral).",
          },
          {
            heading: "Examples",
            body: "- H₂SO₄: H=+1×2, O=−2×4, S=? → +2−8+S=0 → S=+6\n- KMnO₄: K=+1, O=−2×4, Mn=? → +1−8+Mn=0 → Mn=+7\n- Cr₂O₇²⁻: 2Cr + 7(−2) = −2 → 2Cr = +12 → Cr=+6",
          },
          {
            heading: "Detecting redox",
            body: "If oxidation number increases → oxidised; decreases → reduced. Change in oxidation number indicates redox.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Find the oxidation number of Mn in KMnO₄.",
          solution: "K=+1, O₄=−8. Sum must be 0: +1 + Mn − 8 = 0 → Mn = +7.",
        },
      },
      questions: [
        {
          id: "olchem-u4-oxidation-numbers-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the oxidation number of oxygen in H₂O?",
          response: { type: "mcq", choices: [
            { id: "a", text: "+2" }, { id: "b", text: "−2" }, { id: "c", text: "0" }, { id: "d", text: "−1" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "principle", name: "Oxygen ox. no.", statement: "−2 in compounds (except peroxides)." }],
            steps: [{ reasoning: "Recall.", working: "-2", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** −2",
            commonErrors: ["−1 is peroxide only."],
          },
        },
        {
          id: "olchem-u4-oxidation-numbers-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the oxidation number of sulfur in H₂SO₄?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Oxidation number", statement: "Sum = 0 for neutral compound." }],
            steps: [
              { reasoning: "H₂SO₄: 2(+1) + S + 4(−2) = 0.", marks: 1, markCode: "M" },
              { reasoning: "S = +6.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "+6",
            commonErrors: ["Getting +4 — check arithmetic: +2−8+S=0 → S=+6."],
          },
        },
        {
          id: "olchem-u4-oxidation-numbers-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Assign oxidation numbers to all elements in KMnO₄.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Oxidation numbers", statement: "K=+1, O=−2, Mn=?" }],
            steps: [
              { reasoning: "K = +1.", marks: 1, markCode: "M" },
              { reasoning: "O = −2 × 4 = −8.", marks: 1, markCode: "M" },
              { reasoning: "+1 + Mn − 8 = 0 → Mn = +7.", marks: 1, markCode: "M" },
              { reasoning: "State all.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "K=+1, Mn=+7, O=−2",
            commonErrors: ["Forgetting K contributes +1."],
          },
        },
        {
          id: "olchem-u4-oxidation-numbers-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Explain how oxidation numbers identify redox reactions.",
          parts: [
            { label: "a", prompt: "State what oxidation number change means.", marks: 3 },
            { label: "b", prompt: "Apply to Fe²⁺ → Fe³⁺.", marks: 3 },
            { label: "c", prompt: "Apply to Cu + 2Ag⁺ → Cu²⁺ + 2Ag.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Oxidation numbers", statement: "Increase = oxidation; decrease = reduction." }],
            steps: [
              { part: "a", reasoning: "Increase in ox. no. = loss of electrons.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Decrease = gain of electrons.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Change indicates redox.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Fe: +2 → +3 (increase).", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Oxidised (loses e⁻).", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Cu: 0 → +2 (oxidised).", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Ag: +1 → 0 (reduced).", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Redox confirmed.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) ↑=oxidation ↓=reduction (b) Fe²⁺→Fe³⁺ oxidised (c) Cu oxidised, Ag⁺ reduced",
            commonErrors: ["In (c) missing charge on Ag⁺."],
          },
        },
      ],
    },
    {
      id: "olchem-u4-reactivity-series",
      title: "Reactivity series and displacement",
      skill: "Use the reactivity series to predict displacement reactions and electrode products.",
      lesson: {
        sections: [
          {
            heading: "The series",
            body: "K > Na > Ca > Mg > Al > Zn > Fe > Pb > (H) > Cu > Ag > Au\n\nMore reactive metals: lose electrons easily, stronger reducing agents, displace less reactive metals from solutions.",
          },
          {
            heading: "Displacement rules",
            body: "A metal displaces another from solution only if it is **more reactive** (higher in series).\n- Zn + CuSO₄ → ZnSO₄ + Cu ✓ (Zn above Cu)\n- Cu + ZnSO₄ → no reaction ✗ (Cu below Zn)\n- Metals above H react with acids → H₂; below H do not.",
          },
          {
            heading: "Uses",
            body: "Predicting whether reactions occur, extracting metals (electrolysis vs reduction), sacrificial protection (zinc on iron).",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Will iron react with copper(II) sulfate solution?",
          solution: "Fe is above Cu in the series → yes: Fe + CuSO₄ → FeSO₄ + Cu.",
        },
      },
      questions: [
        {
          id: "olchem-u4-reactivity-series-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which metal is most reactive: K, Na, Cu or Ag?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Cu" }, { id: "b", text: "Ag" }, { id: "c", text: "Na" }, { id: "d", text: "K" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "property", name: "Reactivity series", statement: "K most reactive of the options." }],
            steps: [{ reasoning: "Recall series.", working: "K > Na > ... > Ag", marks: 1, markCode: "B" }],
            finalAnswer: "**(d)** K",
            commonErrors: [ "Heavy = more reactive misconception — K is top."],
          },
        },
        {
          id: "olchem-u4-reactivity-series-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Will copper react with zinc sulfate solution? Explain.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Displacement", statement: "Only more reactive metal displaces." }],
            steps: [
              { reasoning: "Cu below Zn in series.", marks: 1, markCode: "M" },
              { reasoning: "Cu less reactive → cannot displace Zn.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "No — copper is below zinc in the reactivity series, so it cannot displace zinc from its solution.",
            commonErrors: ["Saying 'copper is unreactive' — it's just below zinc."],
          },
        },
        {
          id: "olchem-u4-reactivity-series-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Predict whether each reaction occurs: (a) Mg + CuSO₄ (b) Ag + CuSO₄.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Displacement", statement: "Higher in series displaces lower." }],
            steps: [
              { reasoning: "Mg above Cu → reacts.", marks: 1, markCode: "M" },
              { reasoning: "Equation: Mg + CuSO₄ → MgSO₄ + Cu.", marks: 1, markCode: "A" },
              { reasoning: "Ag below Cu → no reaction.", marks: 1, markCode: "M" },
              { reasoning: "Conclude.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Yes — Mg + CuSO₄ → MgSO₄ + Cu. (b) No — Ag is below Cu, cannot displace.",
            commonErrors: ["In (b) predicting reaction anyway."],
          },
        },
        {
          id: "olchem-u4-reactivity-series-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Explain how the reactivity series predicts displacement reactions.",
          parts: [
            { label: "a", prompt: "State the rule.", marks: 3 },
            { label: "b", prompt: "Apply to Zn + CuSO₄.", marks: 3 },
            { label: "c", prompt: "Explain why metals above H react with acids.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Reactivity series", statement: "Higher displaces lower; above H → reacts with acid." }],
            steps: [
              { part: "a", reasoning: "More reactive displaces less.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Only from solution.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Complete.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Zn above Cu → displaces.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Zn + CuSO₄ → ZnSO₄ + Cu.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Above H → more reactive than H.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Displaces H⁺ → H₂ gas.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) higher displaces lower (b) Zn+CuSO₄→ZnSO₄+Cu (c) above H→displaces H⁺→H₂",
            commonErrors: ["In (c) saying 'reacts with all acids' — only dilute."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "olchem-u4-series-notes",
      title: "Oxidation numbers and reactivity series — revision notes",
      summary: "Oxidation number rules, detecting redox, displacement predictions.",
      sections: [
        {
          heading: "Key facts",
          body: "Ox. no.: element=0, ion=charge, O=−2, H=+1. Sum=0 for neutral. ↑ox.no.=oxidised. Series: K>Na>Ca>Mg>Al>Zn>Fe>Pb>(H)>Cu>Ag>Au. Above H reacts with acids.",
        },
        {
          heading: "Exam technique",
          body: "- Work backwards from known ox. numbers to unknown.\n- Displacement only from solution, only if more reactive.\n- Electrolysis: cations→cathode, anions→anode.",
        },
      ],
    },
  ],
};
