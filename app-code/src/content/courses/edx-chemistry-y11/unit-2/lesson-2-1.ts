import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "ech11-u2-lesson-2-1",
  code: "2-1",
  title: "Electrolysis",
  goal: "I CAN predict the products of electrolysis of molten and aqueous compounds and write balanced half equations for the electrode reactions.",
  standards: ["4CH1 1.51", "4CH1 1.52", "4CH1 1.53", "4CH1 1.54", "4CH1 1.55"],
  vocabulary: [
    { term: "Electrolysis", definition: "The breakdown of an ionic compound, molten or in aqueous solution, by passing an electric current through it." },
    { term: "Electrolyte", definition: "An ionic compound, molten or dissolved in water, that conducts electricity because its ions are free to move." },
    { term: "Cathode", definition: "The negative electrode, where positive ions gain electrons (reduction)." },
    { term: "Anode", definition: "The positive electrode, where negative ions lose electrons (oxidation)." },
    { term: "Half equation", definition: "An equation showing what happens at one electrode, with electrons included so that both atoms and charge balance." },
    { term: "Oxidation", definition: "Loss of electrons (OIL: oxidation is loss)." },
    { term: "Reduction", definition: "Gain of electrons (RIG: reduction is gain)." },
  ],
  concepts: [
    {
      id: "ech11-u2-electrolysis-molten-aqueous",
      title: "Electrolysis of molten and aqueous compounds",
      skill: "Predict the products at each electrode for molten compounds and aqueous solutions, and explain the observations.",
      lesson: {
        sections: [
          {
            heading: "How electrolysis works",
            body: "An ionic solid does not conduct electricity because its ions are fixed in a lattice. When the compound is **molten** or **dissolved in water** the ions are free to move, so it becomes an **electrolyte**.\n\nWhen a direct current is passed through the electrolyte:\n\n- positive ions (**cations**) move to the **cathode** (negative electrode) and gain electrons\n- negative ions (**anions**) move to the **anode** (positive electrode) and lose electrons\n\nThe electrodes are often inert (graphite or platinum) so that they do not react.",
          },
          {
            heading: "Molten compounds",
            body: "A molten binary ionic compound is split into its elements. The **metal** forms at the cathode and the **non-metal** forms at the anode.\n\n- molten lead(II) bromide: lead at the cathode, bromine at the anode\n- molten sodium chloride: sodium at the cathode, chlorine at the anode\n\nThese experiments must be done in a fume cupboard because the halogens are toxic.",
          },
          {
            heading: "Aqueous solutions",
            body: "Water contains a few $\\text{H}^+$ and $\\text{OH}^-$ ions, so there are two possible ions at each electrode.\n\n- **Cathode:** if the metal is **less reactive than hydrogen** (for example copper or silver) the metal forms. If the metal is **more reactive than hydrogen** (for example sodium or potassium) hydrogen gas forms.\n- **Anode:** if a **halide ion** ($\\text{Cl}^-$, $\\text{Br}^-$, $\\text{I}^-$) is present in a concentrated solution, the halogen forms. Otherwise (for example $\\text{SO}_4^{2-}$ or $\\text{NO}_3^-$) hydroxide ions are discharged and **oxygen** forms.\n\nElectrolysis of concentrated sodium chloride solution leaves **sodium hydroxide solution** behind, because $\\text{Na}^+$ and $\\text{OH}^-$ ions remain in solution. If the anode is made of copper (not inert) it dissolves and copper deposits on the cathode, which is how copper is purified and how objects are electroplated.",
          },
        ],
        keyFormulas: [
          { name: "Molten electrolyte", statement: "Metal at the cathode, non-metal at the anode" },
          { name: "Aqueous cathode", statement: "Metal if less reactive than hydrogen, otherwise hydrogen" },
          { name: "Aqueous anode", statement: "Halogen if halide ions are present (concentrated), otherwise oxygen" },
          { name: "Tests", statement: "Hydrogen: squeaky pop with a lit splint. Oxygen: relights a glowing splint. Chlorine: bleaches damp litmus paper." },
        ],
        workedExample: {
          problem: "Predict the products at the cathode and anode when dilute aqueous potassium nitrate is electrolysed with inert electrodes.",
          solution: "The ions present are $\\text{K}^+$, $\\text{NO}_3^-$, $\\text{H}^+$ and $\\text{OH}^-$. Potassium is more reactive than hydrogen, so **hydrogen** forms at the cathode. Nitrate is not a halide, so hydroxide ions are discharged and **oxygen** forms at the anode.",
        },
      },
      questions: [
        {
          id: "ech11-u2-electrolysis-molten-aqueous-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In electrolysis, what is the name of the electrode connected to the negative terminal of the power supply?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Salt bridge" },
              { id: "b", text: "Electrolyte" },
              { id: "c", text: "Anode" },
              { id: "d", text: "Cathode" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Cathode", statement: "The cathode is the negative electrode. Positive ions (cations) are attracted to it." },
            ],
            steps: [
              { reasoning: "The negative electrode attracts positive ions and is called the cathode. The positive electrode is the anode.", working: "\\text{cathode} = \\text{negative}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Cathode",
            commonErrors: ["Choosing the anode, which is the positive electrode.", "Choosing the electrolyte, which is the liquid or solution, not an electrode."],
            examinerNote: "B1 for cathode.",
          },
        },
        {
          id: "ech11-u2-electrolysis-molten-aqueous-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Molten lead(II) bromide is electrolysed using inert electrodes. State the product at the cathode and the product at the anode, and explain why solid lead(II) bromide does not conduct electricity.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Electrolysis of molten salts", statement: "Metal ions are reduced at the cathode and non-metal ions are oxidised at the anode." },
              { kind: "property", name: "Conduction in ionic compounds", statement: "Ionic compounds conduct only when their ions are free to move, which is when they are molten or dissolved." },
            ],
            steps: [
              { reasoning: "Positive lead ions move to the cathode and gain electrons to form lead metal.", working: "\\text{cathode: lead}", marks: 1, markCode: "B" },
              { reasoning: "Negative bromide ions move to the anode and lose electrons to form bromine.", working: "\\text{anode: bromine, Br}_2", marks: 1, markCode: "B" },
              { reasoning: "In the solid the ions are held in fixed positions in the lattice, so they cannot move and carry charge.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Cathode: lead. Anode: bromine. In the solid the ions are fixed in the lattice and cannot move.",
            commonErrors: ["Swapping the products, giving bromine at the cathode.", "Saying the solid has no electrons. The reason is that its ions are not free to move."],
            examinerNote: "B1 lead at cathode, B1 bromine at anode, B1 ions cannot move (oe). Reject 'electrons cannot move' for the third mark.",
          },
        },
        {
          id: "ech11-u2-electrolysis-molten-aqueous-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Concentrated aqueous sodium chloride is electrolysed using inert electrodes. Hydrogen is collected at the cathode and chlorine at the anode. Explain these two products and state what remains in the solution.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Discharge at the cathode", statement: "In aqueous solution, if the metal is more reactive than hydrogen, hydrogen ions from water are discharged instead of metal ions." },
              { kind: "principle", name: "Discharge at the anode", statement: "In a concentrated solution of a halide, the halide ion is discharged in preference to hydroxide ions." },
            ],
            steps: [
              { reasoning: "Sodium is more reactive than hydrogen, so $\\text{H}^+$ ions from the water are discharged at the cathode instead of $\\text{Na}^+$.", working: "2\\text{H}^+ + 2\\text{e}^- \\rightarrow \\text{H}_2", marks: 1, markCode: "B" },
              { reasoning: "So hydrogen gas, not sodium, is formed at the cathode.", marks: 1, markCode: "B" },
              { reasoning: "Chloride ions are present in high concentration, so chloride is discharged at the anode to form chlorine.", working: "2\\text{Cl}^- \\rightarrow \\text{Cl}_2 + 2\\text{e}^-", marks: 1, markCode: "B" },
              { reasoning: "$\\text{Na}^+$ and $\\text{OH}^-$ ions are left in solution, so sodium hydroxide solution is formed.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Hydrogen forms because sodium is more reactive than hydrogen; chlorine forms because chloride is concentrated; sodium hydroxide solution remains.",
            commonErrors: ["Saying sodium is formed at the cathode and reacts with water. It is never formed because H$^+$ is discharged.", "Forgetting that sodium hydroxide remains in solution."],
            examinerNote: "Allow 'hydrogen is less reactive than sodium so it is formed' for the first two marks. Allow 'alkaline solution' with NaOH for the last mark.",
          },
        },
        {
          id: "ech11-u2-electrolysis-molten-aqueous-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A student electrolyses aqueous copper(II) sulfate solution. First she uses inert graphite electrodes. She then repeats the experiment with copper electrodes. The ions present in the solution are $\\text{Cu}^{2+}$, $\\text{SO}_4^{2-}$, $\\text{H}^+$ and $\\text{OH}^-$. Use $A_r$: Cu = 63.5.",
          parts: [
            { label: "a", prompt: "Name the product at the cathode when graphite electrodes are used.", marks: 1 },
            { label: "b", prompt: "Name the gas formed at the anode with graphite electrodes and explain why sulfate ions are not discharged.", marks: 2 },
            { label: "c", prompt: "Describe the test for the gas formed at the anode.", marks: 1 },
            { label: "d", prompt: "With copper electrodes, the cathode increases in mass by $0.635\\text{ g}$. Calculate the amount, in mol, of copper deposited.", marks: 2 },
            { label: "e", prompt: "With copper electrodes the blue colour of the solution does not fade. Describe what happens to each electrode and explain why the colour stays the same.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Aqueous electrolysis", statement: "Metals less reactive than hydrogen are deposited at the cathode. At the anode, sulfate is not discharged, so hydroxide gives oxygen." },
              { kind: "formula", name: "Moles", statement: "$\\text{moles} = \\frac{\\text{mass}}{M_r}$" },
            ],
            steps: [
              { part: "a", reasoning: "Copper is less reactive than hydrogen, so copper ions gain electrons and copper is deposited.", working: "\\text{copper}", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Hydroxide ions are discharged, forming oxygen.", working: "\\text{oxygen}", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Sulfate ions are not discharged because hydroxide ions from water are preferentially discharged (sulfate is not a halide).", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Oxygen relights a glowing splint.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Divide the mass by the relative atomic mass.", working: "\\frac{0.635}{63.5}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Evaluate.", working: "0.0100\\text{ mol}", marks: 1, markCode: "A" },
              { part: "e", reasoning: "The anode loses mass (dissolves) as copper atoms form $\\text{Cu}^{2+}$ ions.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "The cathode gains mass as copper is deposited.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "Copper ions are removed from the solution at the cathode at the same rate as they are formed at the anode, so the concentration of $\\text{Cu}^{2+}$ stays constant.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) Copper (b) Oxygen; hydroxide discharged in preference to sulfate (c) Relights a glowing splint (d) $0.0100\\text{ mol}$ (e) Anode dissolves, cathode gains copper, copper(II) concentration unchanged.",
            commonErrors: ["Saying hydrogen forms at the cathode. Copper is less reactive than hydrogen.", "Using the mass in kg or forgetting to divide by $A_r$.", "Saying the anode gains mass."],
            examinerNote: "In (d) allow 0.01. In (e) allow 'rate of loss of Cu$^{2+}$ equals rate of gain' oe. Reject 'copper ions are not used up' without reference to the anode.",
          },
        },
      ],
    },
    {
      id: "ech11-u2-half-equations",
      title: "Half equations",
      skill: "Write and balance half equations at the cathode and anode and link them to oxidation and reduction.",
      lesson: {
        sections: [
          {
            heading: "What a half equation shows",
            body: "A **half equation** shows what happens at one electrode. It includes electrons, and both the **atoms** and the **charges** must balance.\n\n- At the **cathode**, positive ions gain electrons: $\\text{Na}^+ + \\text{e}^- \\rightarrow \\text{Na}$\n- At the **anode**, negative ions lose electrons: $2\\text{Cl}^- \\rightarrow \\text{Cl}_2 + 2\\text{e}^-$\n\nGain of electrons is **reduction** and loss of electrons is **oxidation** (OIL RIG). So the cathode is the site of reduction and the anode is the site of oxidation.",
          },
          {
            heading: "Balancing atoms and charge",
            body: "Check the total charge on each side. In $\\text{Al}^{3+} + 3\\text{e}^- \\rightarrow \\text{Al}$, the left side has charge $+3 - 3 = 0$ and the right side is $0$.\n\nNon-metals form diatomic molecules, so two ions are needed: $2\\text{Br}^- \\rightarrow \\text{Br}_2 + 2\\text{e}^-$. For oxide ions, $2\\text{O}^{2-} \\rightarrow \\text{O}_2 + 4\\text{e}^-$ (charge $-4$ on each side).\n\nIn aqueous solutions: $2\\text{H}^+ + 2\\text{e}^- \\rightarrow \\text{H}_2$ at the cathode and $4\\text{OH}^- \\rightarrow 2\\text{H}_2\\text{O} + \\text{O}_2 + 4\\text{e}^-$ at the anode.",
          },
          {
            heading: "Electrons balance overall",
            body: "The electrons lost at the anode travel through the external circuit to the cathode. In a complete electrolysis the number of electrons lost at the anode **equals** the number gained at the cathode. When the half equations involve different numbers of electrons, scale them up to the same number to find the ratio of the products.",
          },
        ],
        keyFormulas: [
          { name: "Cathode (reduction)", statement: "positive ion + electrons $\\rightarrow$ atom or molecule" },
          { name: "Anode (oxidation)", statement: "negative ion $\\rightarrow$ atom or molecule + electrons" },
          { name: "Hydrogen", statement: "$2\\text{H}^+ + 2\\text{e}^- \\rightarrow \\text{H}_2$" },
          { name: "Aluminium", statement: "$\\text{Al}^{3+} + 3\\text{e}^- \\rightarrow \\text{Al}$" },
          { name: "Oxygen from oxide ions", statement: "$2\\text{O}^{2-} \\rightarrow \\text{O}_2 + 4\\text{e}^-$" },
        ],
        workedExample: {
          problem: "Write half equations for the electrolysis of molten magnesium chloride, $\\text{MgCl}_2$.",
          solution: "Cathode: $\\text{Mg}^{2+} + 2\\text{e}^- \\rightarrow \\text{Mg}$ (charge $0$ on both sides). Anode: $2\\text{Cl}^- \\rightarrow \\text{Cl}_2 + 2\\text{e}^-$ (charge $-2$ on both sides).",
        },
      },
      questions: [
        {
          id: "ech11-u2-half-equations-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which half equation shows the reaction at the cathode during the electrolysis of molten sodium chloride?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\text{Na}^+ + \\text{e}^- \\rightarrow \\text{Na}$" },
              { id: "b", text: "$2\\text{Cl}^- \\rightarrow \\text{Cl}_2 + 2\\text{e}^-$" },
              { id: "c", text: "$\\text{Cl}_2 + 2\\text{e}^- \\rightarrow 2\\text{Cl}^-$" },
              { id: "d", text: "$\\text{Na} \\rightarrow \\text{Na}^+ + \\text{e}^-$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Reduction at the cathode", statement: "Positive ions gain electrons at the cathode, so electrons appear on the left-hand side." },
            ],
            steps: [
              { reasoning: "Sodium ions are positive and go to the cathode, where they gain one electron to form sodium atoms.", working: "\\text{Na}^+ + \\text{e}^- \\rightarrow \\text{Na}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)**",
            commonErrors: ["Choosing (b), which shows oxidation of sodium (electrons lost).", "Choosing (c), which is the anode reaction."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "ech11-u2-half-equations-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Write the half equation for the reaction at the anode during the electrolysis of molten lead(II) bromide. State whether this is oxidation or reduction.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Oxidation", statement: "Oxidation is loss of electrons. It happens at the anode." },
              { kind: "principle", name: "Balancing half equations", statement: "Atoms and charge must balance. Bromine is diatomic, so two bromide ions are needed." },
            ],
            steps: [
              { reasoning: "Two bromide ions form one bromine molecule and release two electrons, so charge is $-2$ on both sides.", working: "2\\text{Br}^- \\rightarrow \\text{Br}_2 + 2\\text{e}^-", marks: 1, markCode: "B" },
              { reasoning: "Electrons are lost, so this is oxidation.", working: "\\text{oxidation}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "$2\\text{Br}^- \\rightarrow \\text{Br}_2 + 2\\text{e}^-$; oxidation",
            commonErrors: ["Writing $\\text{Br}^- \\rightarrow \\text{Br}_2 + \\text{e}^-$, which does not balance.", "Writing the electrons on the left, which describes reduction."],
            examinerNote: "Allow $e^-$ written as e or $e^{-}$. Allow multiples, for example $4\\text{Br}^- \\rightarrow 2\\text{Br}_2 + 4\\text{e}^-$. Reject $\\text{Br}$ in place of $\\text{Br}_2$.",
          },
        },
        {
          id: "ech11-u2-half-equations-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "In the electrolysis of molten aluminium oxide the half equations are:\n\n- cathode: $\\text{Al}^{3+} + 3\\text{e}^- \\rightarrow \\text{Al}$\n- anode: $2\\text{O}^{2-} \\rightarrow \\text{O}_2 + 4\\text{e}^-$\n\nThe same number of electrons is lost at the anode as is gained at the cathode. Calculate the number of aluminium ions that are discharged at the cathode while 6 oxide ions are discharged at the anode.",
          response: { type: "numeric", parts: [{ label: "Number of aluminium ions discharged", answer: 4 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Electron balance", statement: "Electrons lost at the anode are gained at the cathode, so the numbers of electrons are equal." },
            ],
            steps: [
              { reasoning: "Each oxide ion loses 2 electrons ($4 \\div 2$), so 6 oxide ions release 12 electrons.", working: "6 \\times 2 = 12\\text{ electrons}", marks: 1, markCode: "M" },
              { reasoning: "Each aluminium ion gains 3 electrons, so divide the 12 electrons by 3.", working: "12 \\div 3", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "4\\text{ aluminium ions}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$4$ aluminium ions",
            commonErrors: ["Using 4 electrons per oxide ion (the figure for two ions), giving 8 electrons and 8 aluminium ions.", "Assuming the numbers of ions are equal, giving 6."],
            examinerNote: "M1 for 12 electrons. M1 for dividing by 3 (ecf). A1 cao. Allow 4 or 4 Al ions.",
          },
        },
        {
          id: "ech11-u2-half-equations-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Dilute sulfuric acid is electrolysed using inert platinum electrodes. Hydrogen gas is collected at the cathode and oxygen gas at the anode. The half equations are:\n\n- cathode: $2\\text{H}^+ + 2\\text{e}^- \\rightarrow \\text{H}_2$\n- anode: $4\\text{OH}^- \\rightarrow 2\\text{H}_2\\text{O} + \\text{O}_2 + 4\\text{e}^-$",
          parts: [
            { label: "a", prompt: "State whether the hydrogen ions are oxidised or reduced. Give a reason.", marks: 1 },
            { label: "b", prompt: "Show that the half equation at the anode is balanced for both atoms and charge.", marks: 2 },
            { label: "c", prompt: "Hydrogen and oxygen are collected for the same time at the same temperature and pressure. Use the half equations to find the ratio of the volume of hydrogen to the volume of oxygen.", marks: 2 },
            { label: "d", prompt: "A student collects $48\\text{ cm}^3$ of hydrogen. Calculate the volume of oxygen collected at the same temperature and pressure.", marks: 1 },
            { label: "e", prompt: "Explain why the concentration of the sulfuric acid increases during the experiment.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Reduction", statement: "Reduction is gain of electrons." },
              { kind: "law", name: "Conservation of charge", statement: "Total charge is the same on both sides of an equation. Equal numbers of electrons are transferred at each electrode." },
              { kind: "principle", name: "Gas volumes", statement: "At the same temperature and pressure, equal numbers of molecules occupy equal volumes, so volume ratios equal mole ratios." },
            ],
            steps: [
              { part: "a", reasoning: "The hydrogen ions gain electrons, so they are reduced.", working: "\\text{reduced (gain of electrons)}", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Atoms: left 4 O and 4 H, right $2\\times2 = 4$ H and $2 + 2 = 4$ O.", working: "\\text{O: } 4 = 2 + 2,\\quad \\text{H: } 4 = 2\\times 2", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Charge: left $4 \\times (-1) = -4$, right $4 \\times (-1) = -4$.", working: "-4 = -4", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Make the electrons equal: 4 electrons give 2 $\\text{H}_2$ at the cathode and 1 $\\text{O}_2$ at the anode.", working: "2\\text{H}_2 : 1\\text{O}_2", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Volume ratio equals mole ratio.", working: "\\text{H}_2 : \\text{O}_2 = 2 : 1", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Divide the hydrogen volume by two.", working: "\\frac{48}{2} = 24\\text{ cm}^3", marks: 1, markCode: "A" },
              { part: "e", reasoning: "Water is used up (broken down into hydrogen and oxygen) during the electrolysis.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "The sulfuric acid is not used up, so the same amount of acid is dissolved in less water, so its concentration increases.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) Reduced, electrons gained (b) atoms and charge both balance (c) $2:1$ (d) $24\\text{ cm}^3$ (e) Water is removed but the acid remains.",
            commonErrors: ["Giving the ratio as 1:2 the wrong way round.", "Saying the acid is used up. Only the water is electrolysed.", "Confusing OIL RIG and saying hydrogen ions are oxidised."],
            examinerNote: "In (c) allow ecf from a wrong ratio in (d). In (d) allow ecf from (c). In (e) the second mark requires reference to the acid remaining.",
          },
        },
      ],
    },
  ],
};
