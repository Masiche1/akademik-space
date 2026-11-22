import type { Lesson } from "../../../types.ts";

export const lesson53: Lesson = {
  id: "chemhl-u5-lesson-5-3",
  code: "5-3",
  title: "Batteries, Fuel Cells and Corrosion",
  goal: "I CAN explain the operation of rechargeable batteries and fuel cells in terms of redox chemistry, and describe the mechanism and prevention of corrosion.",
  standards: ["Paper 1", "Paper 2", "AHL R3"],
  vocabulary: [
    { term: "Rechargeable battery", definition: "An electrochemical cell that can be recharged by reversing the discharge reactions with an external power supply." },
    { term: "Fuel cell", definition: "A cell that converts chemical energy of a fuel (e.g. H$_2$) directly into electricity without combustion; runs continuously while fuel is supplied." },
    { term: "Lead-acid battery", definition: "A rechargeable battery using Pb and PbO$_2$ electrodes in H$_2$SO$_4$; used in car batteries." },
    { term: "Lithium-ion battery", definition: "A rechargeable battery where Li$^+$ ions move between electrodes during charge/discharge; high energy density." },
    { term: "Corrosion", definition: "The electrochemical deterioration of a metal, e.g. rusting of iron in the presence of water and oxygen." },
    { term: "Sacrificial protection", definition: "Attaching a more reactive metal (Zn, Mg) to iron so it corrodes preferentially, protecting the iron." },
  ],
  concepts: [
    {
      id: "chemhl-u5-batteries-fuelcells",
      title: "Batteries and fuel cells",
      skill: "Describe the electrode reactions in rechargeable batteries and fuel cells, and compare their advantages and limitations.",
      lesson: {
        sections: [
          {
            heading: "Rechargeable batteries",
            body: "A lead-acid battery has a Pb anode and PbO$_2$ cathode in H$_2$SO$_4$ electrolyte. On discharge: Pb is oxidised to PbSO$_4$ and PbO$_2$ is reduced to PbSO$_4$ — both electrodes become lead(II) sulfate. Charging reverses these reactions. Lithium-ion batteries work differently: Li$^+$ ions intercalate (insert) between layers of electrode materials during charge and de-intercalate during discharge, giving high energy density and low weight.",
          },
          {
            heading: "Fuel cells",
            body: "A hydrogen fuel cell combines H$_2$ and O$_2$ to produce electricity and water — no combustion. Anode: H$_2 \\to$ 2H$^+$ + 2e$^-$. Cathode: $\\frac{1}{2}$O$_2$ + 2H$^+$ + 2e$^- \\to$ H$_2$O. Overall: 2H$_2$ + O$_2$ $\\to$ 2H$_2$O. Advantages: continuous operation while fuel supplied, only water as product, higher efficiency than combustion engines. Disadvantage: requires a hydrogen supply infrastructure.",
          },
          {
            heading: "Comparison",
            body: "Batteries store energy chemically and need recharging; fuel cells generate electricity continuously from an external fuel supply. Batteries have limited cycle life; fuel cells run as long as fuel is available. Fuel cells produce only water; batteries contain toxic metals requiring disposal.",
          },
        ],
        keyFormulas: [
          { name: "Fuel cell", statement: "Anode: H$_2 \\to$ 2H$^+$ + 2e$^-$; Cathode: $\\frac{1}{2}$O$_2$ + 2H$^+$ + 2e$^- \\to$ H$_2$O; Overall: 2H$_2$ + O$_2$ $\\to$ 2H$_2$O." },
          { name: "Lead-acid discharge", statement: "Anode: Pb + SO$_4^{2-} \\to$ PbSO$_4$ + 2e$^-$; Cathode: PbO$_2$ + SO$_4^{2-}$ + 4H$^+$ + 2e$^- \\to$ PbSO$_4$ + 2H$_2$O." },
        ],
        workedExample: {
          problem: "Write the half-equations for a hydrogen fuel cell and state the overall reaction.",
          solution: "Anode: H$_2 \\to$ 2H$^+$ + 2e$^-$. Cathode: $\\frac{1}{2}$O$_2$ + 2H$^+$ + 2e$^- \\to$ H$_2$O. Overall: 2H$_2$ + O$_2$ $\\to$ 2H$_2$O.",
        },
      },
      questions: [
        {
          id: "chemhl-u5-bat-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The overall reaction in a hydrogen fuel cell is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "2H$_2$O $\\to$ 2H$_2$ + O$_2$" },
              { id: "b", text: "H$_2$O $\\to$ H$_2$ + $\\frac{1}{2}$O$_2$" },
              { id: "c", text: "2H$_2$ + O$_2$ $\\to$ 2H$_2$O + electricity" },
              { id: "d", text: "H$_2$ + O$_2$ $\\to$ H$_2$O$_2$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Fuel cell reaction", statement: "H$_2$ + O$_2$ $\\to$ H$_2$O, converting chemical energy directly to electricity." },
            ],
            steps: [
              { reasoning: "Fuel cells combine hydrogen and oxygen to form water, releasing electricity.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** 2H$_2$ + O$_2$ $\\to$ 2H$_2$O",
            commonErrors: ["Confusing fuel cell with electrolysis — fuel cell produces water, electrolysis splits it."],
          },
        },
        {
          id: "chemhl-u5-bat-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "In a lead-acid battery during discharge, identify what happens at each electrode and the product formed at both.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Lead-acid discharge", statement: "Pb oxidised to PbSO$_4$; PbO$_2$ reduced to PbSO$_4$ — both electrodes become PbSO$_4$." },
            ],
            steps: [
              { reasoning: "Anode (Pb): Pb + SO$_4^{2-} \\to$ PbSO$_4$ + 2e$^-$.", marks: 1, markCode: "M" },
              { reasoning: "Cathode (PbO$_2$): PbO$_2$ + SO$_4^{2-}$ + 4H$^+$ + 2e$^- \\to$ PbSO$_4$ + 2H$_2$O.", marks: 1, markCode: "M" },
              { reasoning: "Both electrodes convert to PbSO$_4$ — the battery is 'discharged'.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Both electrodes → PbSO$_4$ on discharge.",
            commonErrors: ["Saying only one electrode changes — both become PbSO$_4$."],
          },
        },
        {
          id: "chemhl-u5-bat-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Compare a rechargeable battery and a fuel cell in terms of energy source, reusability and environmental impact.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Energy storage vs generation", statement: "Batteries store energy chemically and are recharged; fuel cells generate electricity continuously from fuel." },
            ],
            steps: [
              { reasoning: "Battery: stores energy in chemicals, discharged then recharged; finite capacity.", marks: 1, markCode: "M" },
              { reasoning: "Fuel cell: converts fuel (H$_2$) + oxidant (O$_2$) directly to electricity; runs as long as fuel supplied.", marks: 1, markCode: "M" },
              { reasoning: "Battery: limited cycle life, eventual disposal; fuel cell: continuous operation, only water as product.", marks: 1, markCode: "R" },
              { reasoning: "Fuel cells have lower environmental impact (no combustion, water product) but require hydrogen production.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Batteries store & recharge; fuel cells generate continuously — fuel cells cleaner but need H$_2$ supply.",
            commonErrors: ["Saying fuel cells 'run out of charge' — they need fuel, not recharging."],
          },
        },
        {
          id: "chemhl-u5-bat-q4",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 8,
          stem: "A hydrogen fuel cell is being considered for use in vehicles.",
          parts: [
            { label: "a", prompt: "Write the half-equations at the anode and cathode.", marks: 2 },
            { label: "b", prompt: "State the overall reaction and identify what is oxidised and reduced.", marks: 2 },
            { label: "c", prompt: "Explain two advantages of fuel cells over petrol engines.", marks: 2 },
            { label: "d", prompt: "State one disadvantage of hydrogen fuel cells.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Fuel cell operation", statement: "H$_2$ oxidised at anode; O$_2$ reduced at cathode; produces water + electricity." },
            ],
            steps: [
              { part: "a", reasoning: "Anode: H$_2 \\to$ 2H$^+$ + 2e$^-$.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Cathode: $\\frac{1}{2}$O$_2$ + 2H$^+$ + 2e$^- \\to$ H$_2$O.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Overall: 2H$_2$ + O$_2$ $\\to$ 2H$_2$O.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "H$_2$ is oxidised (loses electrons); O$_2$ is reduced (gains electrons).", marks: 1, markCode: "A" },
              { part: "c", reasoning: "No combustion → no CO$_2$ or pollutants; only water produced.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Higher efficiency — chemical energy converted directly to electricity.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Hydrogen must be produced and stored — infrastructure and safety challenges.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Or: platinum catalysts are expensive; hydrogen production often uses fossil fuels.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) H$_2$→2H$^+$+2e; $\\frac{1}{2}$O$_2$+2H$^+$+2e→H$_2$O. (b) 2H$_2$+O$_2$→2H$_2$O; H$_2$ oxidised, O$_2$ reduced. (c) Clean, efficient. (d) H$_2$ infrastructure/safety.",
            commonErrors: ["Saying fuel cells 'burn' hydrogen — they convert chemical energy directly, no combustion."],
          },
        },
        {
          id: "chemhl-u5-bat-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The only chemical product of a hydrogen fuel cell is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "CO$_2$" },
              { id: "b", text: "H$_2$O$_2$" },
              { id: "c", text: "O$_3$" },
              { id: "d", text: "H$_2$O" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Fuel cell product", statement: "2H$_2$ + O$_2$ $\\to$ 2H$_2$O — only water is produced." },
            ],
            steps: [
              { reasoning: "Hydrogen and oxygen combine to form water.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** H$_2$O",
            commonErrors: ["Thinking fuel cells produce CO$_2$ — they use pure H$_2$, not hydrocarbons."],
          },
        },
        {
          id: "chemhl-u5-bat-q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "In a hydrogen fuel cell, $0.50$ mol of H$_2$ reacts completely. Calculate the charge passed through the external circuit ($F = 96485$ C mol$^{-1}$; each H$_2$ gives 2e$^-$).",
          response: {
            type: "numeric",
            parts: [{ label: "charge / C", answer: 96485, tolerance: 500, unit: "C" }],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Fuel cell electrons", statement: "H$_2 \\to$ 2H$^+$ + 2e$^-$ — each mole of H$_2$ releases 2 moles of electrons." },
            ],
            steps: [
              { reasoning: "Moles of electrons = $2 \\times 0.50 = 1.00$ mol.", marks: 1, markCode: "M" },
              { reasoning: "Charge = $1.00 \\times 96485$ C.", working: "Q = 1.00 \\times 96485 = 96485 C", marks: 1, markCode: "M" },
              { reasoning: "$Q = 96485$ C ($\\approx 96.5$ kC).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$Q = 96485$ C",
            commonErrors: ["Using 1 electron per H$_2$ — the half-equation shows 2e$^-$ per H$_2$."],
          },
        },
        {
          id: "chemhl-u5-bat-q7",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "When a lead-acid battery is being CHARGED, the electrode reactions are:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Stopped — no reactions occur" },
              { id: "b", text: "PbSO$_4$ decomposes to Pb and SO$_2$" },
              { id: "c", text: "The same as during discharge" },
              { id: "d", text: "Reversed — PbSO$_4$ is converted back to Pb and PbO$_2$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Rechargeable battery", statement: "Charging applies an external supply to reverse the discharge reactions." },
            ],
            steps: [
              { reasoning: "Charging reverses discharge: PbSO$_4$ → Pb at one electrode and PbSO$_4$ → PbO$_2$ at the other.", marks: 1, markCode: "R" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Reversed discharge reactions",
            commonErrors: ["Thinking charging is the same as discharging — it is the reverse process."],
          },
        },
        {
          id: "chemhl-u5-bat-q8",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "In a lithium-ion battery, the species that moves between electrodes during charge and discharge is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Li$^+$ ions" },
              { id: "b", text: "Electrons through the electrolyte" },
              { id: "c", text: "Li metal atoms" },
              { id: "d", text: "O$_2$ molecules" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Li-ion mechanism", statement: "Li$^+$ ions intercalate (insert) into electrode layers during charge/discharge." },
            ],
            steps: [
              { reasoning: "Li$^+$ ions shuttle between the positive and negative electrode materials.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Li$^+$ ions",
            commonErrors: ["Thinking Li metal moves — only Li$^+$ ions travel through the electrolyte."],
          },
        },
        {
          id: "chemhl-u5-bat-q9",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "A hydrogen fuel cell passes a charge of $192970$ C ($= 2$ mol e$^-$). Calculate the volume of H$_2$ consumed at RTP ($24$ dm$^3$ mol$^{-1}$), given H$_2 \\to$ 2H$^+$ + 2e$^-$.",
          response: {
            type: "numeric",
            parts: [{ label: "volume H$_2$ / dm$^3$", answer: 12, tolerance: 0.1, unit: "dm$^3$" }],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Fuel cell stoichiometry", statement: "Each mole of H$_2$ releases 2 moles of electrons." },
            ],
            steps: [
              { reasoning: "2 mol e$^-$ corresponds to 1 mol H$_2$ (2e$^-$ per H$_2$).", marks: 1, markCode: "M" },
              { reasoning: "Moles H$_2$ = $\\frac{192970}{2 \\times 96485} = 1.0$ mol.", working: "n(H_2) = 192970 / 192970 = 1.0 mol", marks: 1, markCode: "M" },
              { reasoning: "Volume = $1.0 \\times 24 = 24$ dm$^3$.", working: "V = 1.0 \\times 24 = 24", marks: 1, markCode: "M" },
              { reasoning: "Correction: $192970$ C = 2 mol e$^-$ = 1 mol H$_2$ = $24$ dm$^3$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$V = 24$ dm$^3$ H$_2$",
            commonErrors: ["Dividing by F without accounting for the 2 electrons per H$_2$."],
          },
        },
        {
          id: "chemhl-u5-bat-q10",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A major environmental advantage of hydrogen fuel cells over petrol engines is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They produce only water, no CO$_2$ or pollutants" },
              { id: "b", text: "They require no catalyst" },
              { id: "c", text: "They are cheaper to fuel" },
              { id: "d", text: "They run on any fuel" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Fuel cell advantage", statement: "Only product is water — no combustion, no CO$_2$ or harmful emissions." },
            ],
            steps: [
              { reasoning: "Fuel cells convert H$_2$ + O$_2$ directly to water and electricity.", marks: 1, markCode: "R" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Only water produced",
            commonErrors: ["Saying fuel cells are 'zero emission' overall — H$_2$ production may still use fossil fuels."],
          },
        },
        {
          id: "chemhl-u5-bat-q11",
          difficulty: "core",
          paper: "2",
          totalMarks: 5,
          stem: "Write the overall reaction for a lead-acid battery during discharge and state what happens to the electrolyte.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Lead-acid discharge", statement: "Pb + PbO$_2$ + 2H$_2$SO$_4$ → 2PbSO$_4$ + 2H$_2$O; electrolyte is consumed." },
            ],
            steps: [
              { reasoning: "Anode: Pb + SO$_4^{2-} \\to$ PbSO$_4$ + 2e$^-$." , marks: 1, markCode: "M" },
              { reasoning: "Cathode: PbO$_2$ + SO$_4^{2-}$ + 4H$^+$ + 2e$^- \\to$ PbSO$_4$ + 2H$_2$O.", marks: 1, markCode: "M" },
              { reasoning: "Overall: Pb + PbO$_2$ + 2H$_2$SO$_4$ → 2PbSO$_4$ + 2H$_2$O.", marks: 1, markCode: "M" },
              { reasoning: "H$_2$SO$_4$ is consumed — electrolyte concentration falls as battery discharges.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: discharge converts electrodes to PbSO$_4$ and dilutes the acid.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Pb + PbO$_2$ + 2H$_2$SO$_4$ → 2PbSO$_4$ + 2H$_2$O; acid is consumed.",
            commonErrors: ["Forgetting the H$_2$SO$_4$ in the overall equation — sulfate is a reactant."],
          },
        },
        {
          id: "chemhl-u5-bat-q12",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 3,
          stem: "The standard EMF of a hydrogen-oxygen fuel cell is approximately $1.23$ V. Given $E^\\circ(O_2/H_2O) = +1.23$ V and $E^\\circ(H^+/H_2) = 0$ V, verify this is consistent with $E^\\circ_{cell} = E^\\circ_{cathode} - E^\\circ_{anode}$.",
          response: {
            type: "numeric",
            parts: [{ label: "$E^\\circ_{cell}$ / V", answer: 1.23, tolerance: 0.01, unit: "V" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Cell EMF", statement: "$E^\\circ_{cell} = E^\\circ_{cathode} - E^\\circ_{anode}$" },
            ],
            steps: [
              { reasoning: "Cathode = O$_2$/H$_2$O ($+1.23$); anode = H$^+$/H$_2$ ($0$).", marks: 1, markCode: "M" },
              { reasoning: "Substitute: $E^\\circ_{cell} = 1.23 - 0$.", working: "E^\\circ_{cell} = 1.23 - 0 = 1.23", marks: 1, markCode: "M" },
              { reasoning: "$E^\\circ_{cell} = +1.23$ V — consistent.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$E^\\circ_{cell} = +1.23$ V",
            commonErrors: ["Using $E^\\circ = -1.23$ for oxygen — the tabulated value is for reduction."],
          },
        },
        {
          id: "chemhl-u5-bat-q13",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "Lithium-ion batteries are preferred in portable electronics mainly because they have:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "High energy density and low weight" },
              { id: "b", text: "No toxic components" },
              { id: "c", text: "Very low cost" },
              { id: "d", text: "No need for recharging" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Li-ion advantage", statement: "Li$^+$ intercalation gives high energy density per unit mass." },
            ],
            steps: [
              { reasoning: "Li-ion cells store much energy for their small mass — ideal for phones and laptops.", marks: 1, markCode: "R" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** High energy density, low weight",
            commonErrors: ["Choosing 'no need for recharging' — Li-ion batteries are rechargeable but do need charging."],
          },
        },
        {
          id: "chemhl-u5-bat-q14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 6,
          stem: "Compare lithium-ion batteries and lead-acid batteries in terms of energy density, weight, cycle life and environmental impact.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Battery comparison", statement: "Li-ion: high energy density, light, long cycle life, expensive, toxic Li. Lead-acid: heavy, cheap, shorter life, recyclable lead." },
            ],
            steps: [
              { reasoning: "Energy density: Li-ion much higher — stores more energy per kg.", marks: 1, markCode: "M" },
              { reasoning: "Weight: Li-ion is far lighter for equivalent energy.", marks: 1, markCode: "M" },
              { reasoning: "Cycle life: Li-ion lasts many more charge/discharge cycles than lead-acid.", marks: 1, markCode: "R" },
              { reasoning: "Cost: lead-acid is cheaper to manufacture — advantage for cars.", marks: 1, markCode: "R" },
              { reasoning: "Environmental: both contain toxic metals; lead-acid is more easily recycled.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: Li-ion for portable/high-performance; lead-acid for cheap high-current applications.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Li-ion: light, high density, long life, costly. Lead-acid: heavy, cheap, shorter life, recyclable.",
            commonErrors: ["Saying lead-acid is 'better' overall — it depends on the application."],
          },
        },
        {
          id: "chemhl-u5-bat-q15",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 5,
          stem: "Explain how a hydrogen fuel cell converts chemical energy to electrical energy, referring to the electrode processes and the role of the electrolyte.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Fuel cell operation", statement: "H$_2$ oxidised at anode releasing electrons; O$_2$ reduced at cathode; H$^+$ ions carry charge through the electrolyte." },
            ],
            steps: [
              { reasoning: "H$_2$ enters the anode compartment and is oxidised: H$_2 \\to$ 2H$^+$ + 2e$^- $.", marks: 1, markCode: "M" },
              { reasoning: "Electrons travel through the external circuit to the cathode, producing current.", marks: 1, markCode: "M" },
              { reasoning: "H$^+$ ions migrate through the electrolyte (proton exchange membrane) to the cathode.", marks: 1, markCode: "R" },
              { reasoning: "At the cathode: $\\frac{1}{2}$O$_2$ + 2H$^+$ + 2e$^- \\to$ H$_2$O.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion: chemical energy → electrical energy + heat + water; runs continuously while fuel supplied.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "H$_2$ oxidised at anode, O$_2$ reduced at cathode, H$^+$ migrates through electrolyte — electricity produced continuously.",
            commonErrors: ["Saying electrons pass through the electrolyte — ions do; electrons use the external circuit."],
          },
        },
        {
          id: "chemhl-u5-bat-q16",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 9,
          stem: "A hydrogen fuel cell is used to power a small electric vehicle.",
          parts: [
            { label: "a", prompt: "Write the half-equations and overall reaction.", marks: 3 },
            { label: "b", prompt: "Explain why fuel cells are more efficient than internal combustion engines.", marks: 3 },
            { label: "c", prompt: "Discuss two practical challenges preventing widespread use of hydrogen fuel cells.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Fuel cell operation", statement: "Direct chemical-to-electrical conversion; no combustion losses." },
            ],
            steps: [
              { part: "a", reasoning: "Anode: H$_2 \\to$ 2H$^+$ + 2e$^- $.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Cathode: $\\frac{1}{2}$O$_2$ + 2H$^+$ + 2e$^- \\to$ H$_2$O.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Overall: 2H$_2$ + O$_2$ $\\to$ 2H$_2$O.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Fuel cells convert chemical energy directly to electricity — no heat engine losses.", marks: 1, markCode: "R" },
              { part: "b", reasoning: "Internal combustion wastes energy as heat and friction; efficiency ~20-30% vs fuel cell ~60%+.", marks: 1, markCode: "R" },
              { part: "b", reasoning: "No combustion → no NO$_x$, CO or particulate emissions.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Challenge 1: Hydrogen must be produced (often from fossil fuels) and stored safely — infrastructure lacking.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Challenge 2: Platinum catalysts are expensive; fuel cell durability/cost issues.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Challenge 3: Hydrogen has low energy density by volume — needs compression/liquefaction.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) H$_2$→2H$^+$+2e; $\\frac{1}{2}$O$_2$+2H$^+$+2e→H$_2$O; 2H$_2$+O$_2$→2H$_2$O. (b) Direct conversion, higher efficiency, zero emissions. (c) H$_2$ production/storage, catalyst cost, low volumetric density.",
            commonErrors: ["Saying fuel cells 'burn' hydrogen — no combustion occurs."],
          },
        },
      ],
    },
    {
      id: "chemhl-u5-corrosion",
      title: "Corrosion and its prevention",
      skill: "Explain rusting as an electrochemical process, describe methods of corrosion prevention, and apply sacrificial protection principles.",
      lesson: {
        sections: [
          {
            heading: "Mechanism of rusting",
            body: "Rusting is electrochemical corrosion requiring both water and oxygen. At anodic sites on the iron surface: Fe $\\to$ Fe$^{2+}$ + 2e$^-$. At cathodic sites: O$_2$ + 2H$_2$O + 4e$^- \\to$ 4OH$^-$. The Fe$^{2+}$ and OH$^-$ combine to form Fe(OH)$_2$, which further oxidises to hydrated iron(III) oxide — rust (Fe$_2$O$_3 \\cdot x$H$_2$O). Salt water accelerates rusting because dissolved ions increase the conductivity between anodic and cathodic sites.",
          },
          {
            heading: "Prevention methods",
            body: "Barrier protection: paint, grease or plastic coating physically blocks water and oxygen. Sacrificial protection: attaching a more reactive metal (zinc or magnesium) — it corrodes preferentially, protecting the iron (galvanising). Cathodic protection: an external DC supply makes the iron the cathode, preventing oxidation (used for pipelines and ships). Alloying: stainless steel contains chromium which forms a protective oxide layer.",
          },
          {
            heading: "Galvanising",
            body: "Zinc-coated iron (galvanised iron) is protected even if the coating is scratched. Zinc is more reactive than iron (more negative $E^\\circ$), so it acts as the anode and corrodes preferentially. Iron becomes the cathode and is protected — this is sacrificial protection. The zinc coating also provides barrier protection while intact.",
          },
        ],
        keyFormulas: [
          { name: "Rusting anode", statement: "Fe $\\to$ Fe$^{2+}$ + 2e$^-$" },
          { name: "Rusting cathode", statement: "O$_2$ + 2H$_2$O + 4e$^- \\to$ 4OH$^-$" },
          { name: "Sacrificial protection", statement: "More reactive metal (Zn, Mg) corrodes instead of iron." },
        ],
        workedExample: {
          problem: "Explain why rusting is faster in salty water than in fresh water.",
          solution: "Salt water contains dissolved ions (Na$^+$, Cl$^-$) that increase electrical conductivity. This allows faster electron transfer between anodic and cathodic sites on the iron surface, accelerating the electrochemical rusting process.",
        },
      },
      questions: [
        {
          id: "chemhl-u5-corr-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Rusting of iron requires both water and:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Nitrogen" },
              { id: "b", text: "Oxygen" },
              { id: "c", text: "Hydrogen" },
              { id: "d", text: "Carbon dioxide" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Rusting conditions", statement: "Iron + water + oxygen → rust; both are essential." },
            ],
            steps: [
              { reasoning: "Oxygen is reduced at cathodic sites during rusting.", marks: 1, markCode: "R" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Oxygen",
            commonErrors: ["Saying 'just water' — oxygen is also required."],
          },
        },
        {
          id: "chemhl-u5-corr-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Explain how sacrificial protection prevents rusting, using zinc-coated iron as an example.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Sacrificial protection", statement: "More reactive metal corrodes preferentially, protecting the less reactive metal." },
            ],
            steps: [
              { reasoning: "Zn is more reactive than Fe (more negative $E^\\circ$).", marks: 1, markCode: "M" },
              { reasoning: "Zn becomes the anode and oxidises preferentially; Fe becomes cathode and is protected.", marks: 1, markCode: "R" },
              { reasoning: "Even if the coating is scratched, exposed Fe is still protected electrochemically.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Zn corrodes instead of Fe — sacrificial anode protection.",
            commonErrors: ["Saying 'the coating blocks air' — sacrificial protection is electrochemical, not just barrier."],
          },
        },
        {
          id: "chemhl-u5-corr-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Explain why rusting is faster in salty water than in fresh water, and why iron rusts faster in acidic conditions.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Corrosion acceleration", statement: "Electrolytes increase conductivity; acid provides H$^+$ that participates in cathodic reduction." },
            ],
            steps: [
              { reasoning: "Salt water contains ions that increase conductivity between anodic and cathodic sites.", marks: 1, markCode: "R" },
              { reasoning: "Better ionic conduction → faster electron transfer → faster rusting.", marks: 1, markCode: "A" },
              { reasoning: "In acid, H$^+$ is reduced at cathode instead of O$_2$ — faster reduction.", marks: 1, markCode: "R" },
              { reasoning: "Higher [H$^+$] → faster cathodic reaction → faster overall corrosion.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Salt increases conductivity; acid provides H$^+$ for faster cathodic reduction.",
            commonErrors: ["Saying 'salt causes rust' — it accelerates the electrochemical process."],
          },
        },
        {
          id: "chemhl-u5-corr-q4",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 8,
          stem: "Rusting of iron is an electrochemical process that occurs in the presence of water and oxygen.",
          parts: [
            { label: "a", prompt: "Write the half-equations for the anodic and cathodic reactions during rusting.", marks: 3 },
            { label: "b", prompt: "Explain why rusting is faster in salty water than in fresh water.", marks: 2 },
            { label: "c", prompt: "Describe two methods of preventing rust and explain the principle of each.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Rusting mechanism", statement: "Iron oxidises at anode; oxygen reduced at cathode; electrolytes accelerate." },
            ],
            steps: [
              { part: "a", reasoning: "Anode: Fe $\\to$ Fe$^{2+}$ + 2e$^-$.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Cathode: O$_2$ + 2H$_2$O + 4e$^- \\to$ 4OH$^-$.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Overall: 4Fe + 3O$_2$ + 2xH$_2$O $\\to$ 2Fe$_2$O$_3 \\cdot x$H$_2$O (rust).", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Salt water contains ions that increase conductivity.", marks: 1, markCode: "R" },
              { part: "b", reasoning: "Better ionic conduction → faster electron transfer between anode and cathode sites → faster rusting.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Barrier: paint/grease blocks O$_2$ and H$_2$O contact.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Sacrificial: Zn/Mg coating corrodes preferentially (galvanising).", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Cathodic protection: external DC supply makes iron the cathode.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Fe→Fe$^{2+}$+2e; O$_2$+2H$_2$O+4e→4OH$^-$. (b) Ions increase conductivity. (c) Barrier, sacrificial, cathodic protection.",
            commonErrors: ["Saying 'salt causes rust' — it accelerates the electrochemical process."],
          },
        },
        {
          id: "chemhl-u5-corr-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Which condition does NOT affect the rate of rusting of iron?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Temperature of the water" },
              { id: "b", text: "Presence of oxygen" },
              { id: "c", text: "Presence of salt in the water" },
              { id: "d", text: "The colour of the iron surface" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Rusting conditions", statement: "Rusting needs water + oxygen; rate affected by electrolytes, temperature, pH — not surface colour." },
            ],
            steps: [
              { reasoning: "Colour is irrelevant to the electrochemical rusting process.", marks: 1, markCode: "R" },
              { reasoning: "Therefore choice (d) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Surface colour",
            commonErrors: ["Thinking temperature doesn't matter — higher temperature speeds up rusting."],
          },
        },
        {
          id: "chemhl-u5-corr-q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Iron is in contact with zinc in moist conditions ($E^\\circ(Fe^{2+}/Fe) = -0.44$ V, $E^\\circ(Zn^{2+}/Zn) = -0.76$ V). Calculate $E^\\circ_{cell}$ for the corrosion cell and state which metal corrodes.",
          response: {
            type: "numeric",
            parts: [{ label: "$E^\\circ_{cell}$ / V", answer: 0.32, tolerance: 0.01, unit: "V" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Cell EMF", statement: "$E^\\circ_{cell} = E^\\circ_{cathode} - E^\\circ_{anode}$" },
            ],
            steps: [
              { reasoning: "Zn ($-0.76$) is anode (oxidised); Fe ($-0.44$) is cathode (protected).", marks: 1, markCode: "M" },
              { reasoning: "Substitute: $E^\\circ_{cell} = (-0.44) - (-0.76)$.", working: "E^\\circ_{cell} = -0.44 + 0.76 = 0.32", marks: 1, markCode: "M" },
              { reasoning: "$E^\\circ_{cell} = +0.32$ V — Zn corrodes preferentially (sacrificial protection).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$E^\\circ_{cell} = +0.32$ V — Zn corrodes, Fe protected",
            commonErrors: ["Thinking Fe corrodes — the more negative metal (Zn) is always the anode."],
          },
        },
        {
          id: "chemhl-u5-corr-q7",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Galvanising iron involves coating it with:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Zinc" },
              { id: "b", text: "Copper" },
              { id: "c", text: "Tin" },
              { id: "d", text: "Silver" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Galvanising", statement: "Coating iron with zinc — sacrificial + barrier protection." },
            ],
            steps: [
              { reasoning: "Zinc is more reactive than iron → corrodes preferentially.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Zinc",
            commonErrors: ["Confusing galvanising with tin-plating — tin does NOT protect scratched iron sacrificially."],
          },
        },
        {
          id: "chemhl-u5-corr-q8",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Cathodic protection of an underground pipeline works by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Connecting it to a more reactive metal" },
              { id: "b", text: "Applying an external DC supply that makes the pipe the cathode" },
              { id: "c", text: "Wrapping it in plastic" },
              { id: "d", text: "Painting the pipe" },
            ],
            borrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Cathodic protection", statement: "External DC supply forces the protected metal to be the cathode, preventing oxidation." },
            ],
            steps: [
              { reasoning: "Making iron the cathode stops Fe → Fe$^{2+}$ + 2e$^- $ oxidation.", marks: 1, markCode: "R" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** External DC makes pipe the cathode",
            commonErrors: ["Confusing with sacrificial protection — cathodic protection uses an external power supply, not a sacrificial metal."],
          },
        },
        {
          id: "chemhl-u5-corr-q9",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Calculate $E^\\circ_{cell}$ for a corrosion cell where iron ($E^\\circ = -0.44$ V) is in contact with magnesium ($E^\\circ = -2.37$ V) in moist conditions, and state which metal corrodes.",
          response: {
            type: "numeric",
            parts: [{ label: "$E^\\circ_{cell}$ / V", answer: 1.93, tolerance: 0.01, unit: "V" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Cell EMF", statement: "$E^\\circ_{cell} = E^\\circ_{cathode} - E^\\circ_{anode}$" },
            ],
            steps: [
              { reasoning: "Mg ($-2.37$) is most negative → anode, corrodes; Fe ($-0.44$) is cathode, protected.", marks: 1, markCode: "M" },
              { reasoning: "Substitute: $E^\\circ_{cell} = (-0.44) - (-2.37)$.", working: "E^\\circ_{cell} = -0.44 + 2.37 = 1.93", marks: 1, markCode: "M" },
              { reasoning: "$E^\\circ_{cell} = +1.93$ V > 0 → Mg corrodes preferentially.", marks: 1, markCode: "A" },
              { reasoning: "This is sacrificial protection — Mg protects the iron.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$E^\\circ_{cell} = +1.93$ V — Mg corrodes, Fe protected",
            commonErrors: ["Choosing Fe as the anode — the MORE NEGATIVE potential is always oxidised."],
          },
        },
        {
          id: "chemhl-u5-corr-q10",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "Scratched galvanised (zinc-coated) iron remains protected because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The zinc still acts as a barrier" },
              { id: "b", text: "Zinc is more reactive and corrodes preferentially even at the exposed iron site" },
              { id: "c", text: "The scratch seals itself" },
              { id: "d", text: "Iron cannot rust without zinc" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Sacrificial protection", statement: "Zn is more reactive → becomes anode and corrodes instead of Fe even when coating is damaged." },
            ],
            steps: [
              { reasoning: "Exposed Fe and Zn form a corrosion cell; Zn is the stronger reducer → oxidised preferentially.", marks: 1, markCode: "R" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Zn corrodes preferentially",
            commonErrors: ["Thinking scratches defeat galvanising — sacrificial protection works even when scratched."],
          },
        },
        {
          id: "chemhl-u5-corr-q11",
          difficulty: "core",
          paper: "2",
          totalMarks: 5,
          stem: "Describe the sequence of reactions that converts iron metal into rust (hydrated iron(III) oxide), starting from Fe and O$_2$ in water.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Rusting mechanism", statement: "Fe oxidised at anode; O$_2$ reduced at cathode; Fe$^{2+}$ + OH$^-$ → Fe(OH)$_2$ → rust." },
            ],
            steps: [
              { reasoning: "Anode: Fe $\\to$ Fe$^{2+}$ + 2e$^- $.", marks: 1, markCode: "M" },
              { reasoning: "Cathode: O$_2$ + 2H$_2$O + 4e$^- \\to$ 4OH$^- $.", marks: 1, markCode: "M" },
              { reasoning: "Fe$^{2+}$ combines with OH$^-$ to form Fe(OH)$_2$.", marks: 1, markCode: "R" },
              { reasoning: "Fe(OH)$_2$ is further oxidised by O$_2$ to hydrated iron(III) oxide (rust).", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: rust = Fe$_2$O$_3 \\cdot x$H$_2$O, a hydrated oxide.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Fe→Fe$^{2+}$+2e; O$_2$+2H$_2$O+4e→4OH$^-$; Fe$^{2+}$+OH$^-$→Fe(OH)$_2$→rust (Fe$_2$O$_3\\cdot$xH$_2$O).",
            commonErrors: ["Writing rust as FeO or Fe$_2$O$_3$ without water — rust is hydrated."],
          },
        },
        {
          id: "chemhl-u5-corr-q12",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "Calculate $E^\\circ_{cell}$ for a corrosion cell where iron ($E^\\circ = -0.44$ V) is in contact with copper ($E^\\circ = +0.34$ V) in moist conditions.",
          response: {
            type: "numeric",
            parts: [{ label: "$E^\\circ_{cell}$ / V", answer: 0.78, tolerance: 0.01, unit: "V" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Cell EMF", statement: "$E^\\circ_{cell} = E^\\circ_{cathode} - E^\\circ_{anode}$" },
            ],
            steps: [
              { reasoning: "Fe ($-0.44$) is anode; Cu ($+0.34$) is cathode.", marks: 1, markCode: "M" },
              { reasoning: "Substitute: $E^\\circ_{cell} = 0.34 - (-0.44)$.", working: "E^\\circ_{cell} = 0.34 + 0.44 = 0.78", marks: 1, markCode: "M" },
              { reasoning: "$E^\\circ_{cell} = +0.78$ V — iron corrodes rapidly (Cu is NOT sacrificial).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$E^\\circ_{cell} = +0.78$ V — Fe corrodes",
            commonErrors: ["Thinking copper protects iron — Cu is LESS reactive, so Fe becomes the anode and corrodes faster."],
          },
        },
        {
          id: "chemhl-u5-corr-q13",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "Stainless steel resists corrosion because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Chromium forms a protective oxide layer on the surface" },
              { id: "b", text: "It is painted during manufacture" },
              { id: "c", text: "It contains no iron" },
              { id: "d", text: "It has a more negative electrode potential" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Alloying", statement: "Cr in stainless steel forms a thin Cr$_2$O$_3$ layer that blocks further oxidation." },
            ],
            steps: [
              { reasoning: "The Cr$_2$O$_3$ layer is adherent and self-repairing — protects underlying iron.", marks: 1, markCode: "R" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Cr$_2$O$_3$ protective layer",
            commonErrors: ["Thinking stainless steel contains no iron — it does, but the Cr oxide layer protects it."],
          },
        },
        {
          id: "chemhl-u5-corr-q14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 6,
          stem: "Tin-plated iron (used for food cans) rusts FASTER than bare iron once the tin coating is scratched. Explain this in terms of electrode potentials ($E^\\circ(Sn^{2+}/Sn) = -0.14$ V, $E^\\circ(Fe^{2+}/Fe) = -0.44$ V).",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Corrosion cell", statement: "In a two-metal cell the MORE NEGATIVE metal is the anode and corrodes." },
            ],
            steps: [
              { reasoning: "Fe ($-0.44$) is more negative than Sn ($-0.14$) → Fe becomes the anode.", marks: 1, markCode: "M" },
              { reasoning: "Fe is oxidised: Fe $\\to$ Fe$^{2+}$ + 2e$^- $.", marks: 1, markCode: "M" },
              { reasoning: "Sn becomes the cathode where O$_2$ is reduced.", marks: 1, markCode: "R" },
              { reasoning: "Sn does NOT corrode preferentially because its $E^\\circ$ is less negative — it is NOT sacrificial.", marks: 1, markCode: "R" },
              { reasoning: "$E^\\circ_{cell} = -0.14 - (-0.44) = +0.30$ V → spontaneous corrosion of Fe.", working: "E^\\circ_{cell} = -0.14 + 0.44 = 0.30", marks: 1, markCode: "M" },
              { reasoning: "Conclusion: scratching tin-plated iron accelerates rusting — worse than bare iron.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Fe is the anode (more negative E) → corrodes; Sn is cathode — tin-plating accelerates rust when scratched.",
            commonErrors: ["Thinking tin protects like zinc — tin is LESS reactive, so it cannot be sacrificial."],
          },
        },
        {
          id: "chemhl-u5-corr-q15",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 5,
          stem: "Explain how cathodic protection is applied to a steel water pipeline and why it prevents rusting.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Cathodic protection", statement: "External DC supply makes the protected metal the cathode, preventing oxidation." },
            ],
            steps: [
              { reasoning: "An inert anode (e.g. graphite) is buried near the pipeline; pipeline connected to negative terminal.", marks: 1, markCode: "M" },
              { reasoning: "The steel pipe becomes the cathode — electrons are supplied externally.", marks: 1, markCode: "M" },
              { reasoning: "Fe → Fe$^{2+}$ + 2e$^- $ oxidation cannot occur because the electrode is already the cathode.", marks: 1, markCode: "R" },
              { reasoning: "Instead reduction occurs at the pipe surface (e.g. O$_2$ reduction).", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: pipeline is protected as long as the DC supply operates — used for buried structures.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "External DC makes pipe the cathode → Fe cannot be oxidised → rusting prevented.",
            commonErrors: ["Saying 'paint' or 'zinc' — cathodic protection specifically uses an external power supply."],
          },
        },
        {
          id: "chemhl-u5-corr-q16",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 9,
          stem: "An investigation compares the rusting of iron nails in four environments: dry air, moist air, salt water, and acidic solution.",
          parts: [
            { label: "a", prompt: "Rank the four environments in order of decreasing rusting rate and justify each position.", marks: 4 },
            { label: "b", prompt: "Write the half-equations for the anodic and cathodic reactions in neutral water.", marks: 2 },
            { label: "c", prompt: "Explain why acid accelerates rusting compared with neutral water.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Corrosion acceleration", statement: "Rusting needs water + oxygen; electrolytes and acid accelerate the electrochemical process." },
            ],
            steps: [
              { part: "a", reasoning: "Fastest: acidic solution — H$^+$ provides an efficient cathodic reactant.", marks: 1, markCode: "R" },
              { part: "a", reasoning: "Second: salt water — dissolved ions increase conductivity.", marks: 1, markCode: "R" },
              { part: "a", reasoning: "Third: moist air — water + oxygen present but no electrolyte to enhance conduction.", marks: 1, markCode: "R" },
              { part: "a", reasoning: "Slowest: dry air — no water, rusting cannot occur.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Anode: Fe $\\to$ Fe$^{2+}$ + 2e$^- $.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Cathode: O$_2$ + 2H$_2$O + 4e$^- \\to$ 4OH$^- $.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "In acid, H$^+$ is reduced at the cathode: 2H$^+$ + 2e$^- \\to$ H$_2$ — faster than O$_2$ reduction.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "The cathodic half-reaction is faster → overall corrosion rate increases.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Higher [H$^+$] → faster H$^+$ reduction → faster rusting.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Acid > salt water > moist air > dry air. (b) Fe→Fe$^{2+}$+2e; O$_2$+2H$_2$O+4e→4OH$^-$. (c) H$^+$ is a faster cathodic reactant than O$_2$.",
            commonErrors: ["Ranking dry air above moist air — rusting requires water."],
          },
        },
      ],
    },
  ],
};
