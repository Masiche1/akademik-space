import type { Lesson } from "../../../types.ts";

export const lesson51: Lesson = {
  id: "chemhl-u5-lesson-5-1",
  code: "5-1",
  title: "Standard Electrode Potentials",
  goal: "I CAN use standard electrode potentials to predict redox reactions, calculate cell EMF, and explain the direction of electron flow in electrochemical cells.",
  standards: ["Paper 1", "Paper 2", "AHL R3"],
  vocabulary: [
    { term: "Standard electrode potential ($E^\\circ$)", definition: "The electrode potential of a half-cell measured against the standard hydrogen electrode (SHE) under standard conditions (1 M, 298 K, 1 atm)." },
    { term: "Standard hydrogen electrode (SHE)", definition: "The reference electrode assigned $E^\\circ = 0$ V: Pt in 1 M H$^+$ with H$_2$ gas at 1 atm." },
    { term: "Cell EMF ($E^\\circ_{cell}$)", definition: "The voltage of an electrochemical cell: $E^\\circ_{cell} = E^\\circ_{cathode} - E^\\circ_{anode}$ (reduction potentials)." },
    { term: "Reduction potential", definition: "The tendency of a species to gain electrons; more positive = stronger oxidising agent." },
    { term: "Oxidising agent", definition: "A species that accepts electrons (is reduced); the stronger the reduction potential, the stronger the oxidiser." },
    { term: "Reducing agent", definition: "A species that donates electrons (is oxidised); the more negative the reduction potential, the stronger the reducer." },
  ],
  concepts: [
    {
      id: "chemhl-u5-electrode-potentials",
      title: "Reading standard electrode potentials",
      skill: "Interpret standard reduction potentials to rank oxidising and reducing strength and predict spontaneous redox reactions.",
      lesson: {
        sections: [
          {
            heading: "The SHE reference",
            body: "All electrode potentials are measured relative to the standard hydrogen electrode: Pt foil in 1 M H$^+$ with H$_2$ gas bubbled at 1 atm, assigned $E^\\circ = 0.00$ V. A half-reaction written as reduction has a potential $E^\\circ$; more positive values mean the species is a stronger oxidising agent (more readily reduced). For example, F$_2$ ($E^\\circ = +2.87$ V) is a very strong oxidiser, while Li ($E^\\circ = -3.04$ V) is a very strong reducer.",
          },
          {
            heading: "Predicting spontaneous reactions",
            body: "A redox reaction is spontaneous if the species with the more positive reduction potential is reduced (cathode) and the species with the less positive potential is oxidised (anode). The cell EMF is $E^\\circ_{cell} = E^\\circ_{cathode} - E^\\circ_{anode}$; if $E^\\circ_{cell} > 0$ the reaction is spontaneous. Example: Zn ($E^\\circ = -0.76$ V) + Cu$^{2+}$ ($E^\\circ = +0.34$ V) → Zn is oxidised, Cu$^{2+}$ is reduced, $E^\\circ_{cell} = 0.34 - (-0.76) = +1.10$ V — spontaneous.",
          },
          {
            heading: "Using the electrochemical series",
            body: "The series of standard potentials arranges half-reactions from strongest oxidiser (top, most positive $E^\\circ$) to strongest reducer (bottom, most negative). Any element can reduce ions below it in the series but not above. This explains why Zn displaces Cu from CuSO$_4$ but Cu cannot displace Zn from ZnSO$_4$ — Zn is the stronger reducing agent (more negative $E^\\circ$).",
          },
        ],
        keyFormulas: [
          { name: "Cell EMF", statement: "$E^\\circ_{cell} = E^\\circ_{cathode} - E^\\circ_{anode}$; positive → spontaneous." },
          { name: "Oxidising strength", statement: "More positive $E^\\circ$ → stronger oxidising agent." },
          { name: "Reducing strength", statement: "More negative $E^\\circ$ → stronger reducing agent." },
        ],
        workedExample: {
          problem: "Given $E^\\circ(Cu^{2+}/Cu) = +0.34$ V and $E^\\circ(Zn^{2+}/Zn) = -0.76$ V, predict whether Zn reacts with Cu$^{2+}$ and calculate $E^\\circ_{cell}$.",
          solution: "Zn has the more negative potential → Zn is oxidised (anode); Cu$^{2+}$ is reduced (cathode). $E^\\circ_{cell} = 0.34 - (-0.76) = +1.10$ V > 0 → spontaneous.",
        },
      },
      questions: [
        {
          id: "chemhl-u5-ep-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A species with a MORE POSITIVE standard reduction potential is a:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Weaker oxidising agent" },
              { id: "b", text: "Stronger oxidising agent" },
              { id: "c", text: "Neutral species" },
              { id: "d", text: "Stronger reducing agent" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Reduction potential", statement: "More positive $E^\\circ$ → more readily reduced → stronger oxidiser." },
            ],
            steps: [
              { reasoning: "Positive $E^\\circ$ means the reduction is favourable — the species accepts electrons readily.", marks: 1, markCode: "R" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Stronger oxidising agent",
            commonErrors: ["Reversing — positive potential means oxidising, negative means reducing."],
          },
        },
        {
          id: "chemhl-u5-ep-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Given $E^\\circ(Fe^{3+}/Fe^{2+}) = +0.77$ V and $E^\\circ(Cu^{2+}/Cu) = +0.34$ V, predict whether Fe$^{3+}$ can oxidise Cu to Cu$^{2+}$. Calculate $E^\\circ_{cell}$ if it can.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Cell EMF", statement: "$E^\\circ_{cell} = E^\\circ_{cathode} - E^\\circ_{anode}$" },
            ],
            steps: [
              { reasoning: "Fe$^{3+}$/Fe$^{2+}$ has higher $E^\\circ$ → Fe$^{3+}$ is reduced (cathode), Cu is oxidised (anode).", marks: 1, markCode: "M" },
              { reasoning: "$E^\\circ_{cell} = 0.77 - 0.34 = +0.43$ V > 0 → spontaneous.", marks: 1, markCode: "M" },
              { reasoning: "Yes, Fe$^{3+}$ oxidises Cu to Cu$^{2+}$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Yes — $E^\\circ_{cell} = +0.43$ V",
            commonErrors: ["Subtracting in the wrong order — cathode (higher E) minus anode (lower E)."],
          },
        },
        {
          id: "chemhl-u5-ep-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Using standard electrode potentials, explain why: (a) Zn displaces Cu from CuSO$_4$ solution; (b) Cu does NOT displace Zn from ZnSO$_4$ solution.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Displacement rule", statement: "A metal displaces another from solution if it has a more negative reduction potential (stronger reducer)." },
            ],
            steps: [
              { reasoning: "Zn $E^\\circ = -0.76$ V is more negative than Cu $E^\\circ = +0.34$ V → Zn is stronger reducer.", marks: 1, markCode: "M" },
              { reasoning: "Zn is oxidised, Cu$^{2+}$ is reduced → Zn + Cu$^{2+}$ → Zn$^{2+}$ + Cu, spontaneous ($E^\\circ_{cell} = +1.10$ V).", marks: 1, markCode: "R" },
              { reasoning: "For Cu to displace Zn, Cu would need to be the stronger reducer — but its $E^\\circ$ is more positive.", marks: 1, markCode: "R" },
              { reasoning: "$E^\\circ_{cell}$ would be negative → non-spontaneous.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Zn is stronger reducer (more negative E) → displaces Cu; Cu cannot displace Zn.",
            commonErrors: ["Memorising displacement series without the potential reasoning."],
          },
        },
        {
          id: "chemhl-u5-ep-q4",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 8,
          stem: "Standard reduction potentials: $E^\\circ(Li^+/Li) = -3.04$, $E^\\circ(Na^+/Na) = -2.71$, $E^\\circ(Mg^{2+}/Mg) = -2.37$, $E^\\circ(Al^{3+}/Al) = -1.66$, $E^\\circ(Zn^{2+}/Zn) = -0.76$, $E^\\circ(Cu^{2+}/Cu) = +0.34$, $E^\\circ(Ag^+/Ag) = +0.80$ V.",
          parts: [
            { label: "a", prompt: "Identify the strongest and weakest reducing agents in this list.", marks: 2 },
            { label: "b", prompt: "Identify the strongest oxidising agent.", marks: 1 },
            { label: "c", prompt: "Predict whether Mg can reduce Cu$^{2+}$ to Cu, and calculate $E^\\circ_{cell}$.", marks: 3 },
            { label: "d", prompt: "Predict whether Ag$^+$ can oxidise Zn metal, justifying your answer with a calculation.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Electrochemical series", statement: "More negative $E^\\circ$ = stronger reducer; more positive = stronger oxidiser." },
            ],
            steps: [
              { part: "a", reasoning: "Strongest reducer: Li ($E^\\circ = -3.04$, most negative).", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Weakest reducer: Ag ($E^\\circ = +0.80$, most positive — actually an oxidiser).", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Ag$^+$ has the most positive $E^\\circ$ → strongest oxidising agent.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Mg ($-2.37$) is more negative than Cu ($+0.34$) → Mg reduces Cu$^{2+}$.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "$E^\\circ_{cell} = 0.34 - (-2.37) = +2.71$ V > 0 → spontaneous.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Yes, Mg + Cu$^{2+}$ → Mg$^{2+}$ + Cu is spontaneous.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Ag$^+$ ($+0.80$ V) is more positive than Zn ($-0.76$ V), so Ag$^+$ is reduced and Zn is oxidised.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "$E^\\circ_{cell} = 0.80 - (-0.76) = +1.56$ V > 0 → yes, Ag$^+$ oxidises Zn spontaneously.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Li strongest, Ag weakest reducer. (b) Ag$^+$ strongest oxidiser. (c) Yes, $E^\\circ_{cell}=+2.71$V. (d) Correction: Ag$^+$ DOES oxidise Zn ($E^\\circ_{cell}=+1.56$V).",
            commonErrors: ["Thinking more negative potential means stronger oxidiser — it means stronger reducer."],
          },
        },
        {
          id: "chemhl-u5-ep-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Which of the following is the strongest OXIDISING agent? $E^\\circ$: F$_2$/F$^-$ = $+2.87$ V, Li$^+$/Li = $-3.04$ V, Zn$^{2+}$/Zn = $-0.76$ V, Mg$^{2+}$/Mg = $-2.37$ V.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Li" },
              { id: "b", text: "Zn" },
              { id: "c", text: "F$_2$" },
              { id: "d", text: "Mg" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Reduction potential", statement: "More positive $E^\\circ$ → stronger oxidising agent." },
            ],
            steps: [
              { reasoning: "F$_2$ has the most positive $E^\\circ$ ($+2.87$ V) → strongest oxidiser.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** F$_2$",
            commonErrors: ["Choosing Li — most negative potential means strongest REDUCING agent, not oxidising."],
          },
        },
        {
          id: "chemhl-u5-ep-q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Given $E^\\circ(Ag^+/Ag) = +0.80$ V and $E^\\circ(Fe^{2+}/Fe) = -0.44$ V, calculate $E^\\circ_{cell}$ for the cell in which Ag$^+$ oxidises Fe metal.",
          response: {
            type: "numeric",
            parts: [{ label: "$E^\\circ_{cell}$ / V", answer: 1.24, tolerance: 0.01, unit: "V" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Cell EMF", statement: "$E^\\circ_{cell} = E^\\circ_{cathode} - E^\\circ_{anode}$" },
            ],
            steps: [
              { reasoning: "Ag$^+$ ($+0.80$) is more positive → cathode (reduced); Fe ($-0.44$) → anode (oxidised).", marks: 1, markCode: "M" },
              { reasoning: "Substitute into the EMF expression.", working: "E^\\circ_{cell} = 0.80 - (-0.44)", marks: 1, markCode: "M" },
              { reasoning: "Evaluate: $E^\\circ_{cell} = +1.24$ V.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$E^\\circ_{cell} = +1.24$ V",
            commonErrors: ["Subtracting in the wrong order — always higher (more positive) potential minus lower."],
          },
        },
        {
          id: "chemhl-u5-ep-q7",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Which metal is the strongest REDUCING agent? $E^\\circ$: Zn$^{2+}$/Zn = $-0.76$ V, Cu$^{2+}$/Cu = $+0.34$ V, Ag$^+$/Ag = $+0.80$ V, Fe$^{2+}$/Fe = $-0.44$ V.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Fe" },
              { id: "b", text: "Ag" },
              { id: "c", text: "Cu" },
              { id: "d", text: "Zn" },
            ],
            dorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Reducing strength", statement: "More negative $E^\\circ$ → stronger reducing agent." },
            ],
            steps: [
              { reasoning: "Zn has the most negative $E^\\circ$ ($-0.76$ V) → strongest reducer.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Zn",
            commonErrors: ["Choosing Ag — it has the most positive potential, so it is the strongest OXIDISING agent."],
          },
        },
        {
          id: "chemhl-u5-ep-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Calculate $E^\\circ_{cell}$ for the reaction Al + Cu$^{2+}$ → Al$^{3+}$ + Cu, given $E^\\circ(Al^{3+}/Al) = -1.66$ V and $E^\\circ(Cu^{2+}/Cu) = +0.34$ V.",
          response: {
            type: "numeric",
            parts: [{ label: "$E^\\circ_{cell}$ / V", answer: 2.0, tolerance: 0.01, unit: "V" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Cell EMF", statement: "$E^\\circ_{cell} = E^\\circ_{cathode} - E^\\circ_{anode}$" },
            ],
            steps: [
              { reasoning: "Cu$^{2+}$ ($+0.34$) is cathode; Al ($-1.66$) is anode.", marks: 1, markCode: "M" },
              { reasoning: "Substitute: $E^\\circ_{cell} = 0.34 - (-1.66)$.", working: "E^\\circ_{cell} = 0.34 - (-1.66) = 2.00", marks: 1, markCode: "M" },
              { reasoning: "$E^\\circ_{cell} = +2.00$ V > 0 → spontaneous.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$E^\\circ_{cell} = +2.00$ V",
            commonErrors: ["Forgetting the sign of the anode potential — subtracting a negative adds."],
          },
        },
        {
          id: "chemhl-u5-ep-q9",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A cell has $E^\\circ_{cell} = +0.46$ V. This means the cell reaction as written is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Spontaneous and can generate electrical energy" },
              { id: "b", text: "Non-spontaneous and requires energy input" },
              { id: "c", text: "At equilibrium" },
              { id: "d", text: "Impossible — EMF cannot be positive" },
            ],
            aorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "EMF sign", statement: "Positive $E^\\circ_{cell}$ → spontaneous (galvanic); negative → non-spontaneous (electrolytic)." },
            ],
            steps: [
              { reasoning: "Positive EMF means the reaction proceeds spontaneously.", marks: 1, markCode: "R" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Spontaneous",
            commonErrors: ["Reversing the sign rule — negative EMF means non-spontaneous."],
          },
        },
        {
          id: "chemhl-u5-ep-q10",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Given $E^\\circ(Pb^{2+}/Pb) = -0.13$ V and $E^\\circ(Ni^{2+}/Ni) = -0.25$ V, calculate $E^\\circ_{cell}$ for the reaction Pb + Ni$^{2+}$ → Pb$^{2+}$ + Ni and state whether it is spontaneous.",
          response: {
            type: "numeric",
            parts: [{ label: "$E^\\circ_{cell}$ / V", answer: 0.12, tolerance: 0.01, unit: "V" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Cell EMF", statement: "$E^\\circ_{cell} = E^\\circ_{cathode} - E^\\circ_{anode}$" },
            ],
            steps: [
              { reasoning: "Ni$^{2+}$ ($-0.25$) is more negative than Pb ($-0.13$) → Ni is oxidised (anode), Pb$^{2+}$ is reduced (cathode). The reaction as written has Pb as anode.", marks: 1, markCode: "M" },
              { reasoning: "Cathode = Pb$^{2+}$/Pb ($-0.13$), anode = Ni$^{2+}$/Ni ($-0.25$).", working: "E^\\circ_{cell} = (-0.13) - (-0.25)", marks: 1, markCode: "M" },
              { reasoning: "$E^\\circ_{cell} = +0.12$ V > 0 → spontaneous.", marks: 1, markCode: "A" },
              { reasoning: "Yes — Pb reduces Ni$^{2+}$ spontaneously.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$E^\\circ_{cell} = +0.12$ V — spontaneous",
            commonErrors: ["Choosing the wrong cathode — the MORE POSITIVE potential is always the cathode, even if both are negative."],
          },
        },
        {
          id: "chemhl-u5-ep-q11",
          difficulty: "core",
          paper: "2",
          totalMarks: 5,
          stem: "Explain why copper metal cannot displace zinc from a solution of ZnSO$_4$, using standard electrode potentials ($E^\\circ(Cu^{2+}/Cu) = +0.34$ V, $E^\\circ(Zn^{2+}/Zn) = -0.76$ V).",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Displacement rule", statement: "A metal displaces another only if it is the stronger reducing agent (more negative $E^\\circ$)." },
            ],
            steps: [
              { reasoning: "For Cu to displace Zn, Cu must be oxidised and Zn$^{2+}$ reduced.", marks: 1, markCode: "R" },
              { reasoning: "Cu $E^\\circ = +0.34$ V is MORE POSITIVE than Zn $E^\\circ = -0.76$ V.", marks: 1, markCode: "M" },
              { reasoning: "Cu is therefore the weaker reducing agent — it cannot reduce Zn$^{2+}$.", marks: 1, markCode: "R" },
              { reasoning: "$E^\\circ_{cell} = -0.76 - (+0.34) = -1.10$ V < 0 → non-spontaneous.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion: Cu + Zn$^{2+}$ does not occur spontaneously.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Cu is the weaker reducer (less negative E); $E^\\circ_{cell} < 0$ so displacement is non-spontaneous.",
            commonErrors: ["Comparing the ions rather than the metals — it is the metal's reduction potential that matters."],
          },
        },
        {
          id: "chemhl-u5-ep-q12",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 3,
          stem: "Given $E^\\circ(Br_2/Br^-) = +1.07$ V and $E^\\circ(Fe^{3+}/Fe^{2+}) = +0.77$ V, calculate $E^\\circ_{cell}$ for Br$_2$ + 2Fe$^{2+}$ → 2Br$^-$ + 2Fe$^{3+}$.",
          response: {
            type: "numeric",
            parts: [{ label: "$E^\\circ_{cell}$ / V", answer: 0.3, tolerance: 0.01, unit: "V" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Cell EMF", statement: "$E^\\circ_{cell} = E^\\circ_{cathode} - E^\\circ_{anode}$" },
            ],
            steps: [
              { reasoning: "Br$_2$ ($+1.07$) is more positive → cathode; Fe$^{2+}$ ($+0.77$) is oxidised → anode.", marks: 1, markCode: "M" },
              { reasoning: "Substitute: $E^\\circ_{cell} = 1.07 - 0.77$.", working: "E^\\circ_{cell} = 1.07 - 0.77 = 0.30", marks: 1, markCode: "M" },
              { reasoning: "$E^\\circ_{cell} = +0.30$ V > 0 → spontaneous.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$E^\\circ_{cell} = +0.30$ V",
            commonErrors: ["Reversing cathode and anode — the more positive potential is always the cathode."],
          },
        },
        {
          id: "chemhl-u5-ep-q13",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "$E^\\circ(Fe^{3+}/Fe^{2+}) = +0.77$ V. Fe$^{3+}$ can oxidise which metal? $E^\\circ$: Cu$^{2+}$/Cu = $+0.34$ V, Ag$^+$/Ag = $+0.80$ V, Au$^{3+}$/Au = $+1.50$ V, Zn$^{2+}$/Zn = $-0.76$ V.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Cu and Zn" },
              { id: "b", text: "Ag only" },
              { id: "c", text: "Ag and Au" },
              { id: "d", text: "None of them" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Oxidant rule", statement: "An oxidising agent can oxidise any species whose reduction potential is LESS positive than its own." },
            ],
            steps: [
              { reasoning: "Fe$^{3+}$ ($+0.77$) oxidises species with $E^\\circ < +0.77$: Cu ($+0.34$) and Zn ($-0.76$) qualify; Ag ($+0.80$) and Au ($+1.50$) do not.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Cu and Zn",
            commonErrors: ["Thinking a stronger oxidiser can be oxidised — Ag and Au are stronger oxidisers than Fe$^{3+}$."],
          },
        },
        {
          id: "chemhl-u5-ep-q14",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Calculate $E^\\circ_{cell}$ for the Daniell cell: $E^\\circ(Cu^{2+}/Cu) = +0.34$ V, $E^\\circ(Zn^{2+}/Zn) = -0.76$ V.",
          response: {
            type: "numeric",
            parts: [{ label: "$E^\\circ_{cell}$ / V", answer: 1.1, tolerance: 0.01, unit: "V" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Cell EMF", statement: "$E^\\circ_{cell} = E^\\circ_{cathode} - E^\\circ_{anode}$" },
            ],
            steps: [
              { reasoning: "Cathode = Cu ($+0.34$), anode = Zn ($-0.76$).", marks: 1, markCode: "M" },
              { reasoning: "$E^\\circ_{cell} = 0.34 - (-0.76) = +1.10$ V.", working: "E^\\circ_{cell} = 0.34 + 0.76 = 1.10", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$E^\\circ_{cell} = +1.10$ V",
            commonErrors: ["Subtracting without the negative sign — subtracting $-0.76$ means adding $0.76$."],
          },
        },
        {
          id: "chemhl-u5-ep-q15",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 6,
          stem: "A student is given these standard reduction potentials: $E^\\circ(Mg^{2+}/Mg) = -2.37$ V, $E^\\circ(Fe^{2+}/Fe) = -0.44$ V, $E^\\circ(Cu^{2+}/Cu) = +0.34$ V, $E^\\circ(Ag^+/Ag) = +0.80$ V.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Electrochemical series", statement: "More negative $E^\\circ$ → stronger reducer; more positive → stronger oxidiser; $E^\\circ_{cell}$ decides spontaneity." },
            ],
            steps: [
              { reasoning: "Rank reducers by $E^\\circ$: Mg strongest ($-2.37$), then Fe ($-0.44$), Cu ($+0.34$), Ag weakest ($+0.80$).", marks: 1, markCode: "M" },
              { reasoning: "Mg can reduce all three ions: Cu$^{2+}$, Fe$^{2+}$ and Ag$^+$ — its $E^\\circ$ is most negative.", marks: 1, markCode: "R" },
              { reasoning: "Fe can reduce Cu$^{2+}$ and Ag$^+$ ($E^\\circ_{cell} > 0$) but NOT Mg$^{2+}$.", marks: 1, markCode: "R" },
              { reasoning: "Cu can reduce Ag$^+$ only ($E^\\circ_{cell} = 0.80 - 0.34 = +0.46$ V).", working: "E^\\circ_{cell} = 0.80 - 0.34 = 0.46", marks: 1, markCode: "M" },
              { reasoning: "Ag$^+$ cannot be reduced by any of the other metals in the list — they are all weaker reducers.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: spontaneity is decided by the sign of $E^\\circ_{cell}$ for each pair.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Mg reduces all; Fe reduces Cu$^{2+}$ and Ag$^+$; Cu reduces Ag$^+$ only; Ag$^+$ reduced by none.",
            commonErrors: ["Comparing potentials without identifying which species is oxidised vs reduced first."],
          },
        },
        {
          id: "chemhl-u5-ep-q16",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 9,
          stem: "Consider the metals Mg, Zn, Cu and Ag with $E^\\circ$: Mg$^{2+}$/Mg = $-2.37$ V, Zn$^{2+}$/Zn = $-0.76$ V, Cu$^{2+}$/Cu = $+0.34$ V, Ag$^+$/Ag = $+0.80$ V.",
          parts: [
            { label: "a", prompt: "Rank the four metals in order of decreasing strength as reducing agents.", marks: 2 },
            { label: "b", prompt: "Calculate $E^\\circ_{cell}$ for the reaction Mg + 2Ag$^+$ → Mg$^{2+}$ + 2Ag and state whether it is spontaneous.", marks: 3 },
            { label: "c", prompt: "Explain, in terms of electrode potentials, why aluminium metal does not react with cold water even though $E^\\circ(Al^{3+}/Al) = -1.66$ V is very negative.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Electrochemical series", statement: "Most negative $E^\\circ$ = strongest reducer; $E^\\circ_{cell} > 0$ = spontaneous." },
            ],
            steps: [
              { part: "a", reasoning: "Most negative first: Mg ($-2.37$), Zn ($-0.76$), Cu ($+0.34$), Ag ($+0.80$).", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Correct ordering Mg > Zn > Cu > Ag as reducers.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Cathode = Ag$^+$ ($+0.80$); anode = Mg ($-2.37$).", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Substitution and evaluation.", working: "E^\\circ_{cell} = 0.80 - (-2.37) = 3.17", marks: 1, markCode: "M" },
              { part: "b", reasoning: "$E^\\circ_{cell} = +3.17$ V > 0 → spontaneous.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Al has a very negative $E^\\circ$ → thermodynamically it should reduce water.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "However Al is protected by a thin, adherent layer of Al$_2$O$_3$.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "The oxide layer prevents water molecules reaching the metal surface.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Kinetic inertness (not thermodynamics) explains the lack of reaction with cold water.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Mg > Zn > Cu > Ag. (b) $E^\\circ_{cell}=+3.17$V, spontaneous. (c) Protective Al$_2$O$_3$ layer — kinetic barrier, not thermodynamic.",
            commonErrors: ["Saying Al 'cannot' react — it is kinetically prevented by the oxide layer."],
          },
        },
      ],
    },
    {
      id: "chemhl-u5-cell-operation",
      title: "How electrochemical cells work",
      skill: "Describe the operation of galvanic and electrolytic cells, identify anode and cathode, and relate cell EMF to spontaneity.",
      lesson: {
        sections: [
          {
            heading: "Galvanic cells",
            body: "A galvanic (voltaic) cell converts chemical energy to electrical energy spontaneously. It has two half-cells: the anode where oxidation occurs (electrons released) and the cathode where reduction occurs (electrons consumed). Electrons flow through the external circuit from anode to cathode; ions migrate through the salt bridge to complete the circuit and prevent charge buildup. The cell EMF is $E^\\circ_{cell} = E^\\circ_{cathode} - E^\\circ_{anode}$.",
          },
          {
            heading: "Electrolytic cells",
            body: "An electrolytic cell uses electrical energy to drive a NON-spontaneous reaction — the reverse of a galvanic cell. It requires an external power supply. The anode is positive (oxidation) and cathode is negative (reduction), opposite to galvanic cells. Electrolysis is used to extract metals (Al from Al$_2$O$_3$), purify metals (Cu refining), and plate metals (electroplating).",
          },
          {
            heading: "Sign conventions",
            body: "In BOTH cell types oxidation occurs at the anode and reduction at the cathode. The difference is the sign of the electrodes: in galvanic cells anode is negative (source of electrons) and cathode positive; in electrolytic cells anode is positive and cathode negative (driven by external supply). The cell EMF is positive for galvanic (spontaneous) and negative for electrolytic (non-spontaneous, requires energy input).",
          },
        ],
        keyFormulas: [
          { name: "Cell EMF", statement: "$E^\\circ_{cell} = E^\\circ_{cathode} - E^\\circ_{anode}$; positive → galvanic, negative → electrolytic." },
          { name: "Anode/cathode", statement: "Anode = oxidation, cathode = reduction in both cell types." },
          { name: "Electron flow", statement: "Galvanic: anode → cathode through external circuit; electrolytic: power supply drives electrons to cathode." },
        ],
        workedExample: {
          problem: "For a Zn-Cu cell: Zn is oxidised ($E^\\circ = -0.76$ V) and Cu$^{2+}$ is reduced ($E^\\circ = +0.34$ V). Identify anode, cathode and EMF.",
          solution: "Anode (oxidation): Zn → Zn$^{2+}$ + 2e$^-$ ($E^\\circ = -0.76$). Cathode (reduction): Cu$^{2+}$ + 2e$^-$ → Cu ($E^\\circ = +0.34$). $E^\\circ_{cell} = 0.34 - (-0.76) = +1.10$ V — galvanic cell.",
        },
      },
      questions: [
        {
          id: "chemhl-u5-cell-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "In a galvanic cell, oxidation occurs at the:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Cathode" },
              { id: "b", text: "External circuit" },
              { id: "c", text: "Salt bridge" },
              { id: "d", text: "Anode" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Anode", statement: "Electrode where oxidation occurs — electrons are released." },
            ],
            steps: [
              { reasoning: "Oxidation = loss of electrons = anode in both cell types.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Anode",
            commonErrors: ["Confusing anode with cathode — anode is ALWAYS oxidation."],
          },
        },
        {
          id: "chemhl-u5-cell-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Distinguish between a galvanic cell and an electrolytic cell in terms of spontaneity, energy source and electrode signs.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Cell types", statement: "Galvanic: spontaneous, chemical→electrical, anode negative. Electrolytic: non-spontaneous, electrical→chemical, anode positive." },
            ],
            steps: [
              { reasoning: "Galvanic: spontaneous redox, produces electricity, anode is negative.", marks: 1, markCode: "M" },
              { reasoning: "Electrolytic: requires external power supply, drives non-spontaneous reaction, anode is positive.", marks: 1, markCode: "M" },
              { reasoning: "Both have oxidation at anode and reduction at cathode.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Galvanic: spontaneous, generates power, anode −. Electrolytic: driven, consumes power, anode +.",
            commonErrors: ["Thinking anode is always negative — it's positive in electrolytic cells."],
          },
        },
        {
          id: "chemhl-u5-cell-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "A cell has $E^\\circ_{cell} = -0.46$ V. Explain what this means and how the cell must be operated.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Negative EMF", statement: "$E^\\circ_{cell} < 0$ means the reaction is non-spontaneous as written." },
            ],
            steps: [
              { reasoning: "Negative EMF means the proposed cell reaction is non-spontaneous.", marks: 1, markCode: "R" },
              { reasoning: "The cell cannot generate electricity spontaneously — it must be driven.", marks: 1, markCode: "M" },
              { reasoning: "It operates as an electrolytic cell: external power supply forces the non-spontaneous reaction.", marks: 1, markCode: "R" },
              { reasoning: "Anode becomes positive, cathode negative (reversed from galvanic).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Non-spontaneous cell → must be electrolytic (external power supply drives it).",
            commonErrors: ["Thinking negative EMF means 'no reaction' — it means the reverse reaction is spontaneous."],
          },
        },
        {
          id: "chemhl-u5-cell-q4",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 8,
          stem: "A Daniell cell uses Zn and Cu electrodes in their respective sulfate solutions.",
          parts: [
            { label: "a", prompt: "Write the half-equations at each electrode and identify which is anode and cathode.", marks: 3 },
            { label: "b", prompt: "Write the overall cell reaction.", marks: 1 },
            { label: "c", prompt: "Explain the role of the salt bridge.", marks: 2 },
            { label: "d", prompt: "Describe what happens to each electrode as the cell discharges.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Daniell cell", statement: "Zn anode (oxidation), Cu cathode (reduction), salt bridge completes circuit." },
            ],
            steps: [
              { part: "a", reasoning: "Anode: Zn → Zn$^{2+}$ + 2e$^-$. Cathode: Cu$^{2+}$ + 2e$^-$ → Cu.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Zn is anode (more negative E, oxidised); Cu is cathode (more positive E, reduced).", marks: 1, markCode: "R" },
              { part: "a", reasoning: "Correct identification of both electrodes.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Zn + Cu$^{2+}$ → Zn$^{2+}$ + Cu.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Salt bridge allows ion migration to balance charge.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Without it, charge buildup would stop the cell.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Zn electrode loses mass (dissolves as Zn$^{2+}$).", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Cu electrode gains mass (Cu$^{2+}$ plates onto it).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Zn anode, Cu cathode. (b) Zn+Cu$^{2+}$→Zn$^{2+}$+Cu. (c) Ion migration. (d) Zn loses mass, Cu gains mass.",
            commonErrors: ["Forgetting the salt bridge role — it maintains charge neutrality."],
          },
        },
        {
          id: "chemhl-u5-cell-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "In a galvanic cell, electrons flow through the external wire from:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Cathode to anode" },
              { id: "b", text: "Salt bridge to cathode" },
              { id: "c", text: "Anode to salt bridge" },
              { id: "d", text: "Anode to cathode" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Electron flow", statement: "Oxidation at anode releases electrons; they travel through the external circuit to the cathode." },
            ],
            steps: [
              { reasoning: "Anode is where oxidation releases electrons → electrons leave via the wire.", marks: 1, markCode: "R" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Anode to cathode",
            commonErrors: ["Reversing the flow — electrons always leave the anode and enter the cathode."],
          },
        },
        {
          id: "chemhl-u5-cell-q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A galvanic cell pairs a silver electrode ($E^\\circ = +0.80$ V) with a zinc electrode ($E^\\circ = -0.76$ V). Calculate $E^\\circ_{cell}$.",
          response: {
            type: "numeric",
            parts: [{ label: "$E^\\circ_{cell}$ / V", answer: 1.56, tolerance: 0.01, unit: "V" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Cell EMF", statement: "$E^\\circ_{cell} = E^\\circ_{cathode} - E^\\circ_{anode}$" },
            ],
            steps: [
              { reasoning: "Ag ($+0.80$) is cathode; Zn ($-0.76$) is anode.", marks: 1, markCode: "M" },
              { reasoning: "Substitute: $E^\\circ_{cell} = 0.80 - (-0.76)$.", working: "E^\\circ_{cell} = 0.80 + 0.76 = 1.56", marks: 1, markCode: "M" },
              { reasoning: "$E^\\circ_{cell} = +1.56$ V.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$E^\\circ_{cell} = +1.56$ V",
            commonErrors: ["Dropping the minus sign of the anode potential."],
          },
        },
        {
          id: "chemhl-u5-cell-q7",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "In an electrolytic cell powered by an external supply, the cathode is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Negative and site of reduction" },
              { id: "b", text: "Negative and site of oxidation" },
              { id: "c", text: "Positive and site of oxidation" },
              { id: "d", text: "Positive and site of reduction" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Electrolytic polarity", statement: "In electrolytic cells the cathode is negative (reduction); the external supply drives electrons to it." },
            ],
            steps: [
              { reasoning: "Cathode is always reduction; in an electrolytic cell it is connected to the negative terminal.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Negative, site of reduction",
            commonErrors: ["Thinking cathode is always positive — it is positive only in galvanic cells."],
          },
        },
        {
          id: "chemhl-u5-cell-q8",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "A proposed cell combines Zn ($E^\\circ = -0.76$ V) with Cl$_2$/Cl$^-$ ($E^\\circ = +1.36$ V). Calculate $E^\\circ_{cell}$ and state whether the cell is galvanic or electrolytic.",
          response: {
            type: "numeric",
            parts: [{ label: "$E^\\circ_{cell}$ / V", answer: 2.12, tolerance: 0.01, unit: "V" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Cell EMF", statement: "$E^\\circ_{cell} = E^\\circ_{cathode} - E^\\circ_{anode}$; positive → galvanic." },
            ],
            steps: [
              { reasoning: "Cl$_2$ ($+1.36$) is cathode; Zn ($-0.76$) is anode.", marks: 1, markCode: "M" },
              { reasoning: "Substitute: $E^\\circ_{cell} = 1.36 - (-0.76)$.", working: "E^\\circ_{cell} = 1.36 + 0.76 = 2.12", marks: 1, markCode: "M" },
              { reasoning: "$E^\\circ_{cell} = +2.12$ V > 0 → spontaneous → galvanic cell.", marks: 1, markCode: "A" },
              { reasoning: "Conclusion: galvanic, generates electricity.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$E^\\circ_{cell} = +2.12$ V — galvanic",
            commonErrors: ["Calling it electrolytic because Cl$_2$ is involved — classification depends only on the sign of $E^\\circ_{cell}$."],
          },
        },
        {
          id: "chemhl-u5-cell-q9",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The function of the salt bridge in a galvanic cell is to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Provide the electrolyte ions that react" },
              { id: "b", text: "Allow ion migration to maintain charge neutrality" },
              { id: "c", text: "Allow electrons to flow between half-cells" },
              { id: "d", text: "Increase the cell EMF" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Salt bridge", statement: "Permits ion flow to balance charge build-up; electrons travel through the external wire instead." },
            ],
            steps: [
              { reasoning: "Without ion migration, charge would accumulate and stop the cell.", marks: 1, markCode: "R" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Ion migration for charge neutrality",
            commonErrors: ["Thinking electrons pass through the salt bridge — electrons use the external circuit; ions use the bridge."],
          },
        },
        {
          id: "chemhl-u5-cell-q10",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Calculate $E^\\circ_{cell}$ for a Ni-Cu cell: $E^\\circ(Ni^{2+}/Ni) = -0.25$ V, $E^\\circ(Cu^{2+}/Cu) = +0.34$ V.",
          response: {
            type: "numeric",
            parts: [{ label: "$E^\\circ_{cell}$ / V", answer: 0.59, tolerance: 0.01, unit: "V" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Cell EMF", statement: "$E^\\circ_{cell} = E^\\circ_{cathode} - E^\\circ_{anode}$" },
            ],
            steps: [
              { reasoning: "Cu ($+0.34$) cathode; Ni ($-0.25$) anode.", marks: 1, markCode: "M" },
              { reasoning: "Substitute: $E^\\circ_{cell} = 0.34 - (-0.25)$.", working: "E^\\circ_{cell} = 0.34 + 0.25 = 0.59", marks: 1, markCode: "M" },
              { reasoning: "$E^\\circ_{cell} = +0.59$ V.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$E^\\circ_{cell} = +0.59$ V",
            commonErrors: ["Subtracting the potentials in list order rather than cathode minus anode."],
          },
        },
        {
          id: "chemhl-u5-cell-q11",
          difficulty: "core",
          paper: "2",
          totalMarks: 5,
          stem: "As a Daniell cell discharges, describe what happens to (a) the zinc electrode, (b) the copper electrode, and (c) the concentrations of Zn$^{2+}$ and Cu$^{2+}$ in solution.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Cell discharge", statement: "Anode dissolves as metal ion; cathode plates metal; concentrations shift accordingly." },
            ],
            steps: [
              { reasoning: "(a) Zn is oxidised at the anode → Zn metal dissolves into solution as Zn$^{2+}$; electrode loses mass.", marks: 1, markCode: "M" },
              { reasoning: "(b) Cu$^{2+}$ is reduced at the cathode → Cu metal plates onto the electrode; it gains mass.", marks: 1, markCode: "M" },
              { reasoning: "(c) [Zn$^{2+}$] increases as Zn$^{2+}$ enters solution.", marks: 1, markCode: "R" },
              { reasoning: "(c) [Cu$^{2+}$] decreases as Cu$^{2+}$ is removed from solution.", marks: 1, markCode: "R" },
              { reasoning: "Overall the cell approaches equilibrium as reactant/product concentrations change.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Zn loses mass, Cu gains mass; [Zn$^{2+}$] rises, [Cu$^{2+}$] falls.",
            commonErrors: ["Saying both electrodes lose or gain mass — only the anode dissolves and only the cathode plates."],
          },
        },
        {
          id: "chemhl-u5-cell-q12",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 3,
          stem: "Calculate $E^\\circ_{cell}$ for a cell pairing F$_2$/F$^-$ ($E^\\circ = +2.87$ V) with Li$^+$/Li ($E^\\circ = -3.04$ V).",
          response: {
            type: "numeric",
            parts: [{ label: "$E^\\circ_{cell}$ / V", answer: 5.91, tolerance: 0.01, unit: "V" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Cell EMF", statement: "$E^\\circ_{cell} = E^\\circ_{cathode} - E^\\circ_{anode}$" },
            ],
            steps: [
              { reasoning: "F$_2$ ($+2.87$) cathode; Li ($-3.04$) anode.", marks: 1, markCode: "M" },
              { reasoning: "Substitute: $E^\\circ_{cell} = 2.87 - (-3.04)$.", working: "E^\\circ_{cell} = 2.87 + 3.04 = 5.91", marks: 1, markCode: "M" },
              { reasoning: "$E^\\circ_{cell} = +5.91$ V — very large, very spontaneous.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$E^\\circ_{cell} = +5.91$ V",
            commonErrors: ["Arithmetic slip adding two negative-adjacent numbers — $2.87 - (-3.04) = 5.91$."],
          },
        },
        {
          id: "chemhl-u5-cell-q13",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "Which of the following cells would operate as an ELECTROLYTIC cell?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Ag-Zn cell ($E^\\circ_{cell} = +1.56$ V)" },
              { id: "b", text: "Cell with $E^\\circ_{cell} = +0.34$ V" },
              { id: "c", text: "Zn-Cu cell ($E^\\circ_{cell} = +1.10$ V)" },
              { id: "d", text: "Cell with $E^\\circ_{cell} = -0.46$ V" },
            ],
            dorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "EMF sign", statement: "Negative $E^\\circ_{cell}$ → non-spontaneous → must be driven → electrolytic." },
            ],
            steps: [
              { reasoning: "Only the cell with $E^\\circ_{cell} = -0.46$ V is non-spontaneous.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** $E^\\circ_{cell} = -0.46$ V",
            commonErrors: ["Thinking any cell can be electrolytic — it requires a negative EMF (non-spontaneous reaction)."],
          },
        },
        {
          id: "chemhl-u5-cell-q14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Given $E^\\circ(Au^{3+}/Au) = +1.50$ V and $E^\\circ(Mg^{2+}/Mg) = -2.37$ V, calculate $E^\\circ_{cell}$ for the reaction 3Mg + 2Au$^{3+}$ → 3Mg$^{2+}$ + 2Au.",
          response: {
            type: "numeric",
            parts: [{ label: "$E^\\circ_{cell}$ / V", answer: 3.87, tolerance: 0.01, unit: "V" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Cell EMF", statement: "$E^\\circ_{cell} = E^\\circ_{cathode} - E^\\circ_{anode}$" },
            ],
            steps: [
              { reasoning: "Au$^{3+}$ ($+1.50$) is cathode; Mg ($-2.37$) is anode.", marks: 1, markCode: "M" },
              { reasoning: "Substitute: $E^\\circ_{cell} = 1.50 - (-2.37)$.", working: "E^\\circ_{cell} = 1.50 + 2.37 = 3.87", marks: 1, markCode: "M" },
              { reasoning: "$E^\\circ_{cell} = +3.87$ V > 0 → spontaneous.", marks: 1, markCode: "A" },
              { reasoning: "Conclusion: Mg reduces Au$^{3+}$ spontaneously.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$E^\\circ_{cell} = +3.87$ V",
            commonErrors: ["Multiplying potentials by stoichiometric coefficients — EMF does NOT scale with the balanced equation."],
          },
        },
        {
          id: "chemhl-u5-cell-q15",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 6,
          stem: "An electrochemical cell has $E^\\circ_{cell} = -1.10$ V for the reaction as written.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Negative EMF", statement: "$E^\\circ_{cell} < 0$ → non-spontaneous as written → must be driven electrolytically." },
            ],
            steps: [
              { reasoning: "Negative EMF means the proposed cell reaction is non-spontaneous.", marks: 1, markCode: "R" },
              { reasoning: "The cell cannot produce electricity spontaneously.", marks: 1, markCode: "R" },
              { reasoning: "To make it operate, an external DC power supply must drive the reaction (electrolysis).", marks: 1, markCode: "M" },
              { reasoning: "The anode becomes positive and the cathode negative — opposite to a galvanic cell.", marks: 1, markCode: "M" },
              { reasoning: "Oxidation still occurs at the anode and reduction at the cathode.", marks: 1, markCode: "R" },
              { reasoning: "The applied voltage must exceed $|E^\\circ_{cell}|$ for electrolysis to proceed.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Non-spontaneous cell → operate electrolytically with external supply; anode +, cathode −.",
            commonErrors: ["Saying the cell 'does nothing' — it must be driven in reverse to operate."],
          },
        },
        {
          id: "chemhl-u5-cell-q16",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 9,
          stem: "A student constructs a cell using iron ($E^\\circ(Fe^{2+}/Fe) = -0.44$ V) and copper ($E^\\circ(Cu^{2+}/Cu) = +0.34$ V) electrodes.",
          parts: [
            { label: "a", prompt: "Identify the anode and cathode and write the half-equations.", marks: 3 },
            { label: "b", prompt: "Write the overall cell reaction and calculate $E^\\circ_{cell}$.", marks: 3 },
            { label: "c", prompt: "Explain the role of the salt bridge and why electrons do not travel through it.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Cell operation", statement: "Anode = oxidation, cathode = reduction; $E^\\circ_{cell} = E^\\circ_{cathode} - E^\\circ_{anode}$." },
            ],
            steps: [
              { part: "a", reasoning: "Anode: Fe → Fe$^{2+}$ + 2e$^-$ (Fe has more negative $E^\\circ$, is oxidised).", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Cathode: Cu$^{2+}$ + 2e$^-$ → Cu.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Correct identification of anode (Fe) and cathode (Cu).", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Overall: Fe + Cu$^{2+}$ → Fe$^{2+}$ + Cu.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Substitution and evaluation.", working: "E^\\circ_{cell} = 0.34 - (-0.44) = 0.78", marks: 1, markCode: "M" },
              { part: "b", reasoning: "$E^\\circ_{cell} = +0.78$ V > 0 → spontaneous.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Salt bridge allows ions to migrate to balance charge build-up in each half-cell.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Electrons cannot pass through the salt bridge because it contains ions in solution, not a conducting wire.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Electrons travel through the external circuit from anode to cathode instead.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Fe anode, Cu cathode. (b) Fe+Cu$^{2+}$→Fe$^{2+}$+Cu, $E^\\circ_{cell}=+0.78$V. (c) Ion migration balances charge; electrons use the wire.",
            commonErrors: ["Saying electrons flow through the salt bridge — only ions migrate through it."],
          },
        },
      ],
    },
  ],
};
