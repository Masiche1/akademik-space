import type { Lesson } from "../../../types.ts";

export const lesson62: Lesson = {
  id: "chemsl-u6-lesson-6-2",
  code: "6-2",
  title: "Electrochemistry",
  goal: "I CAN balance redox half-equations, identify electrodes in electrochemical cells and electrolysis, and calculate standard cell potentials.",
  standards: ["Paper 1", "Paper 2", "Topic 9.1", "Topic 9.2", "Topic 9.3"],
  vocabulary: [
    { term: "Oxidation", definition: "The loss of electrons by a species; the oxidation number increases. It occurs at the anode." },
    { term: "Reduction", definition: "The gain of electrons by a species; the oxidation number decreases. It occurs at the cathode." },
    { term: "Half-equation", definition: "An equation showing either the oxidation or the reduction half of a redox reaction, balanced for atoms and charge." },
    { term: "Oxidising agent", definition: "The species that is reduced and causes another species to be oxidised." },
    { term: "Standard electrode potential ($E^\\theta$)", definition: "The voltage of a half-cell measured against the standard hydrogen electrode under standard conditions; SHE is defined as $0.00$ V." },
    { term: "Electrolysis", definition: "The use of electrical energy to drive a non-spontaneous chemical reaction, using a direct current power supply." },
  ],
  concepts: [
    {
      id: "chemsl-u6-redox",
      title: "Redox reactions and half-equations",
      skill: "Assign oxidation numbers, write and balance half-equations, and identify oxidising and reducing agents in displacement reactions.",
      lesson: {
        sections: [
          {
            heading: "Oxidation and reduction",
            body: "**Oxidation** is loss of electrons (oxidation number increases); **reduction** is gain of electrons (oxidation number decreases). Together they form a **redox** reaction — one species is oxidised while another is reduced. For example, in $\\mathrm{Zn} + \\mathrm{Cu}^{2+} \\rightarrow \\mathrm{Zn}^{2+} + \\mathrm{Cu}$, zinc goes from $0$ to $+2$ (oxidised) and copper goes from $+2$ to $0$ (reduced). Zinc is the **reducing agent**; $\\mathrm{Cu}^{2+}$ is the **oxidising agent**.",
          },
          {
            heading: "Writing half-equations",
            body: "A half-equation shows only one half of the redox process. Balance it in three steps: (1) balance atoms other than O and H; (2) balance O with $\\mathrm{H}_2\\mathrm{O}$ and H with $\\mathrm{H}^+$ (in acidic solution); (3) balance charge by adding electrons. For example, iron metal oxidising to $\\mathrm{Fe}^{3+}$: $\\mathrm{Fe} \\rightarrow \\mathrm{Fe}^{3+} + 3e^-$. Electrons appear on the right for oxidation and on the left for reduction.",
          },
          {
            heading: "Reactivity and displacement",
            body: "A more reactive metal displaces a less reactive metal from its salt solution: $\\mathrm{Zn} + \\mathrm{CuSO}_4 \\rightarrow \\mathrm{ZnSO}_4 + \\mathrm{Cu}$. Copper does **not** react with zinc sulfate because copper is less reactive. This reactivity series is the basis of predicting whether a displacement reaction will occur.",
          },
        ],
        keyFormulas: [
          { name: "Oxidation", statement: "Loss of electrons; oxidation number increases; occurs at the anode" },
          { name: "Reduction", statement: "Gain of electrons; oxidation number decreases; occurs at the cathode" },
          { name: "Half-equation balance", statement: "Atoms first, then O with $\\mathrm{H}_2\\mathrm{O}$, H with $\\mathrm{H}^+$, then charge with $e^-$" },
        ],
        workedExample: {
          problem: "For the reaction $\\mathrm{Zn} + \\mathrm{Cu}^{2+} \\rightarrow \\mathrm{Zn}^{2+} + \\mathrm{Cu}$, write the two half-equations and identify the oxidising and reducing agents.",
          solution: "Oxidation: $\\mathrm{Zn} \\rightarrow \\mathrm{Zn}^{2+} + 2e^-$. Reduction: $\\mathrm{Cu}^{2+} + 2e^- \\rightarrow \\mathrm{Cu}$. Zinc is the reducing agent (it is oxidised); $\\mathrm{Cu}^{2+}$ is the oxidising agent (it is reduced).",
        },
      },
      questions: [
        {
          id: "chemsl-u6-redox-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "In the reaction $\\mathrm{Zn} + \\mathrm{Cu}^{2+} \\rightarrow \\mathrm{Zn}^{2+} + \\mathrm{Cu}$, which species is oxidised?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Zinc, because it loses electrons and its oxidation number increases from $0$ to $+2$" },
              { id: "b", text: "Copper(II) ions, because they gain electrons" },
              { id: "c", text: "Neither species is oxidised" },
              { id: "d", text: "Both species are oxidised equally" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Oxidation", statement: "Loss of electrons; oxidation number increases." },
            ],
            steps: [
              { reasoning: "Zn goes from oxidation number $0$ to $+2$ — it loses two electrons.", working: "\\mathrm{Zn} \\rightarrow \\mathrm{Zn}^{2+} + 2e^-", marks: 1, markCode: "M" },
              { reasoning: "Copper(II) gains electrons ($+2 \\rightarrow 0$), so it is reduced, not oxidised.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "**(a)** Zinc is oxidised",
            commonErrors: ["Confusing oxidation with reduction — thinking gaining electrons is oxidation."],
          },
        },
        {
          id: "chemsl-u6-redox-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Which is the correctly balanced half-equation for the oxidation of iron metal to $\\mathrm{Fe}^{3+}$ ions?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\mathrm{Fe} \\rightarrow \\mathrm{Fe}^{3+} + 3e^-$" },
              { id: "b", text: "$\\mathrm{Fe} + 3e^- \\rightarrow \\mathrm{Fe}^{3+}$" },
              { id: "c", text: "$\\mathrm{Fe} \\rightarrow \\mathrm{Fe}^{3+} + e^-$" },
              { id: "d", text: "$\\mathrm{Fe}^{3+} + 3e^- \\rightarrow \\mathrm{Fe}$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Oxidation half-equation", statement: "Electrons appear on the right for oxidation; charge must balance." },
            ],
            steps: [
              { reasoning: "Oxidation loses electrons, so $e^-$ must appear on the product side.", working: "\\mathrm{Fe} \\rightarrow \\mathrm{Fe}^{3+} + ne^-", marks: 1, markCode: "M" },
              { reasoning: "Balance charge: left side is neutral, right side is $+3 - n$; for charge balance $n = 3$.", working: "+3 - 3 = 0", marks: 1, markCode: "M" },
              { reasoning: "Option (b) and (d) show reduction (electrons on the left); option (c) does not balance charge.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "**(a)** $\\mathrm{Fe} \\rightarrow \\mathrm{Fe}^{3+} + 3e^-$",
            commonErrors: ["Putting electrons on the wrong side.", "Using one electron instead of three."],
          },
        },
        {
          id: "chemsl-u6-redox-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Magnesium metal is added to a solution of zinc chloride. The reaction is $\\mathrm{Mg} + \\mathrm{ZnCl}_2 \\rightarrow \\mathrm{MgCl}_2 + \\mathrm{Zn}$. What is the oxidation number of zinc in $\\mathrm{ZnCl}_2$ and in the zinc produced, and which species is the oxidising agent?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$+2$ in $\\mathrm{ZnCl}_2$ and $0$ in Zn; $\\mathrm{Zn}^{2+}$ is the oxidising agent" },
              { id: "b", text: "$0$ in $\\mathrm{ZnCl}_2$ and $+2$ in Zn; Mg is the oxidising agent" },
              { id: "c", text: "$+1$ in $\\mathrm{ZnCl}_2$ and $0$ in Zn; Cl is the oxidising agent" },
              { id: "d", text: "$+2$ in both; no redox occurs" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Oxidation number rules", statement: "Group 2 metals are $+2$; the element in its standard state is $0$; chlorine is $-1$ in chlorides." },
            ],
            steps: [
              { reasoning: "In $\\mathrm{ZnCl}_2$, Zn is $+2$ (since Cl is $-1$ and the compound is neutral); in the product Zn metal it is $0$.", working: "\\mathrm{Zn}: +2 \\rightarrow 0", marks: 1, markCode: "M" },
              { reasoning: "Zinc gains electrons ($+2 \\rightarrow 0$), so it is reduced — $\\mathrm{Zn}^{2+}$ is the oxidising agent.", working: "\\mathrm{Zn}^{2+} + 2e^- \\rightarrow \\mathrm{Zn}", marks: 1, markCode: "M" },
              { reasoning: "Magnesium goes from $0$ to $+2$ (oxidised), so Mg is the reducing agent, not oxidising.", working: "\\mathrm{Mg} \\rightarrow \\mathrm{Mg}^{2+} + 2e^-", marks: 1, markCode: "R" },
              { reasoning: "Option (a) states both oxidation numbers and the correct agent.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $+2$ in $\\mathrm{ZnCl}_2$, $0$ in Zn; $\\mathrm{Zn}^{2+}$ is the oxidising agent",
            commonErrors: ["Assigning $+1$ to zinc (confusing with group 1).", "Identifying Mg as the oxidising agent when it is the reducing agent."],
          },
        },
        {
          id: "chemsl-u6-redox-q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Zinc metal is added to copper(II) sulfate solution and a displacement reaction occurs: $\\mathrm{Zn} + \\mathrm{CuSO}_4 \\rightarrow \\mathrm{ZnSO}_4 + \\mathrm{Cu}$.",
          parts: [
            { label: "a", prompt: "Define oxidation and reduction in terms of electron transfer.", marks: 2 },
            { label: "b", prompt: "Write the two half-equations for this reaction.", marks: 2 },
            { label: "c", prompt: "Identify the oxidising agent and the reducing agent.", marks: 2 },
            { label: "d", prompt: "Predict whether copper metal will react with zinc sulfate solution, justifying your answer using the reactivity series.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Oxidation and reduction", statement: "Oxidation = loss of electrons; reduction = gain of electrons." },
              { kind: "principle", name: "Reactivity series", statement: "A more reactive metal displaces a less reactive metal from its salt solution." },
            ],
            steps: [
              { part: "a", reasoning: "Oxidation is loss of electrons; reduction is gain of electrons.", working: "\\text{oxidation: lose } e^-;\\ \\text{reduction: gain } e^-", marks: 2, markCode: "R" },
              { part: "b", reasoning: "Zinc loses two electrons; copper(II) gains two electrons.", working: "\\mathrm{Zn} \\rightarrow \\mathrm{Zn}^{2+} + 2e^-;\\quad \\mathrm{Cu}^{2+} + 2e^- \\rightarrow \\mathrm{Cu}", marks: 2, markCode: "M" },
              { part: "c", reasoning: "$\\mathrm{Cu}^{2+}$ is reduced so it is the oxidising agent; Zn is oxidised so it is the reducing agent.", working: "\\text{oxidising agent: } \\mathrm{Cu}^{2+};\\ \\text{reducing agent: Zn}", marks: 2, markCode: "A" },
              { part: "d", reasoning: "Copper is less reactive than zinc, so it cannot displace zinc from its salt.", working: "\\text{Cu below Zn in reactivity series} \\Rightarrow \\text{no reaction}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Therefore copper metal does not react with zinc sulfate solution.", working: "\\text{no displacement}", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) oxidation = loss of electrons; reduction = gain (b) $\\mathrm{Zn} \\rightarrow \\mathrm{Zn}^{2+} + 2e^-$ and $\\mathrm{Cu}^{2+} + 2e^- \\rightarrow \\mathrm{Cu}$ (c) oxidising agent $\\mathrm{Cu}^{2+}$; reducing agent Zn (d) no reaction — copper is less reactive than zinc",
            commonErrors: ["Writing the half-equations with unbalanced charge.", "Identifying the oxidising agent as the species that is oxidised (it is the species reduced)."],
            examinerNote: "Award R1 for each correct definition in (a); M1 for each correctly balanced half-equation in (b); A1 for each correct agent in (c); M1 for the reactivity argument and R1 for the correct prediction in (d).",
          },
        },
        {
          id: "chemsl-u6-redox-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "What is the oxidation number of sulfur in $\\mathrm{H}_2\\mathrm{SO}_4$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$+6$" },
              { id: "b", text: "$+4$" },
              { id: "c", text: "$+2$" },
              { id: "d", text: "$-2$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Oxidation number rules", statement: "H is $+1$ and O is $-2$ in compounds; the sum of oxidation numbers equals the overall charge." },
            ],
            steps: [
              { reasoning: "Let the oxidation number of S be $x$: $2(+1) + x + 4(-2) = 0$.", working: "2 + x - 8 = 0 \\Rightarrow x = +6", marks: 1, markCode: "M" },
              { reasoning: "Option (b) corresponds to $\\mathrm{SO}_2$; option (c) to $\\mathrm{H}_2\\mathrm{S}$.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(a)** $+6$",
            commonErrors: ["Forgetting that oxygen is $-2$, giving an incorrect total."],
          },
        },
        {
          id: "chemsl-u6-redox-q6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "In the reaction $\\mathrm{Zn} + \\mathrm{Cu}^{2+} \\rightarrow \\mathrm{Zn}^{2+} + \\mathrm{Cu}$, which species is reduced?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\mathrm{Cu}^{2+}$, because its oxidation number decreases from $+2$ to $0$" },
              { id: "b", text: "Zn, because it loses electrons" },
              { id: "c", text: "Both species are reduced" },
              { id: "d", text: "Neither species is reduced" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Reduction", statement: "Gain of electrons; oxidation number decreases." },
            ],
            steps: [
              { reasoning: "$\\mathrm{Cu}^{2+}$ goes from $+2$ to $0$ — it gains two electrons.", working: "\\mathrm{Cu}^{2+} + 2e^- \\rightarrow \\mathrm{Cu}", marks: 1, markCode: "M" },
              { reasoning: "Zn is oxidised ($0 \\rightarrow +2$), not reduced.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(a)** $\\mathrm{Cu}^{2+}$ is reduced",
            commonErrors: ["Confusing the species that is oxidised with the species that is reduced."],
          },
        },
        {
          id: "chemsl-u6-redox-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Which is the correctly balanced half-equation for the reduction of $\\mathrm{Cu}^{2+}$ ions to copper metal?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\mathrm{Cu}^{2+} + 2e^- \\rightarrow \\mathrm{Cu}$" },
              { id: "b", text: "$\\mathrm{Cu}^{2+} \\rightarrow \\mathrm{Cu} + 2e^-$" },
              { id: "c", text: "$\\mathrm{Cu}^{2+} + e^- \\rightarrow \\mathrm{Cu}$" },
              { id: "d", text: "$\\mathrm{Cu} + 2e^- \\rightarrow \\mathrm{Cu}^{2+}$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Reduction half-equation", statement: "Electrons appear on the left for reduction; charge must balance." },
            ],
            steps: [
              { reasoning: "Reduction gains electrons, so $e^-$ appear on the left-hand side.", working: "\\mathrm{Cu}^{2+} + ne^- \\rightarrow \\mathrm{Cu}", marks: 1, markCode: "M" },
              { reasoning: "Charge balance: left side is $+2 - n$; for neutrality with Cu(0) on the right, $n = 2$.", working: "+2 - 2 = 0", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(a)** $\\mathrm{Cu}^{2+} + 2e^- \\rightarrow \\mathrm{Cu}$",
            commonErrors: ["Putting electrons on the wrong side for a reduction."],
          },
        },
        {
          id: "chemsl-u6-redox-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Which of the following reactions is NOT a redox reaction?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\mathrm{NaOH} + \\mathrm{HCl} \\rightarrow \\mathrm{NaCl} + \\mathrm{H}_2\\mathrm{O}$" },
              { id: "b", text: "$\\mathrm{Zn} + \\mathrm{CuSO}_4 \\rightarrow \\mathrm{ZnSO}_4 + \\mathrm{Cu}$" },
              { id: "c", text: "$2\\mathrm{Mg} + \\mathrm{O}_2 \\rightarrow 2\\mathrm{MgO}$" },
              { id: "d", text: "$\\mathrm{Fe} + 2\\mathrm{HCl} \\rightarrow \\mathrm{FeCl}_2 + \\mathrm{H}_2$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Redox reaction", statement: "A reaction in which oxidation numbers change — one species is oxidised and another reduced." },
            ],
            steps: [
              { reasoning: "In the neutralisation reaction all oxidation numbers stay the same: Na $+1$, O $-2$, H $+1$, Cl $-1$ on both sides.", working: "\\text{no change in oxidation numbers}", marks: 1, markCode: "M" },
              { reasoning: "In each of (b), (c) and (d) at least one element changes oxidation number.", working: "\\text{e.g. Zn: } 0 \\rightarrow +2", marks: 1, markCode: "M" },
              { reasoning: "Only option (a) involves no electron transfer.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $\\mathrm{NaOH} + \\mathrm{HCl} \\rightarrow \\mathrm{NaCl} + \\mathrm{H}_2\\mathrm{O}$ is not redox",
            commonErrors: ["Assuming every reaction between two compounds is redox."],
          },
        },
        {
          id: "chemsl-u6-redox-q9",
          difficulty: "core",
          paper: "2",
          totalMarks: 2,
          stem: "What is the oxidation number of chromium in $\\mathrm{K}_2\\mathrm{Cr}_2\\mathrm{O}_7$?",
          response: {
            type: "numeric",
            parts: [
              { label: "Oxidation number of Cr", answer: 6, tolerance: 0.001 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Oxidation number rules", statement: "K is $+1$, O is $-2$; the sum equals the overall charge (0)." },
            ],
            steps: [
              { reasoning: "Set up the equation: $2(+1) + 2x + 7(-2) = 0$.", working: "2 + 2x - 14 = 0 \\Rightarrow 2x = 12", marks: 1, markCode: "M" },
              { reasoning: "Solve for $x$.", working: "x = +6", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$+6$",
            commonErrors: ["Using one Cr instead of two when solving."],
          },
        },
        {
          id: "chemsl-u6-redox-q10",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "When magnesium metal is oxidised to $\\mathrm{Mg}^{2+}$ ions, each Mg atom loses two electrons. Calculate the amount, in mol, of electrons released when $0.50$ mol of Mg is completely oxidised.",
          response: {
            type: "numeric",
            parts: [
              { label: "Amount of electrons (mol)", answer: 1.0, tolerance: 0.005, unit: "mol" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Electron stoichiometry", statement: "Each Mg atom loses $2$ electrons: $\\mathrm{Mg} \\rightarrow \\mathrm{Mg}^{2+} + 2e^-$." },
            ],
            steps: [
              { reasoning: "Moles of electrons equal moles of Mg times electrons per atom.", working: "n(e^-) = 2 \\times 0.50", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "n(e^-) = 1.00", marks: 1, markCode: "M" },
              { reasoning: "State the amount with units.", working: "1.00\\ \\text{mol } e^-", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$1.00$ mol of electrons",
            commonErrors: ["Forgetting the factor of $2$ electrons per Mg atom."],
          },
        },
        {
          id: "chemsl-u6-redox-q11",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 3,
          stem: "What is the oxidation number of manganese in $\\mathrm{KMnO}_4$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$+7$" },
              { id: "b", text: "$+4$" },
              { id: "c", text: "$+2$" },
              { id: "d", text: "$-1$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Oxidation number rules", statement: "K is $+1$, O is $-2$; the sum equals zero." },
            ],
            steps: [
              { reasoning: "Set up: $+1 + x + 4(-2) = 0$.", working: "1 + x - 8 = 0 \\Rightarrow x = +7", marks: 1, markCode: "M" },
              { reasoning: "Permanganate is a well-known example of manganese in its highest oxidation state.", working: "\\mathrm{MnO}_4^- \\text{ contains Mn}(+7)", marks: 1, markCode: "M" },
              { reasoning: "Only option (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $+7$",
            commonErrors: ["Forgetting the $\\mathrm{K}^+$ contributes $+1$ to the sum."],
          },
        },
        {
          id: "chemsl-u6-redox-q12",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "For the reaction $2\\mathrm{Fe} + 3\\mathrm{Cu}^{2+} \\rightarrow 2\\mathrm{Fe}^{3+} + 3\\mathrm{Cu}$, calculate the amount, in mol, of electrons transferred when $1.0$ mol of $\\mathrm{Cu}^{2+}$ is reduced to Cu.",
          response: {
            type: "numeric",
            parts: [
              { label: "Amount of electrons (mol)", answer: 2.0, tolerance: 0.005, unit: "mol" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Reduction half-equation", statement: "$\\mathrm{Cu}^{2+} + 2e^- \\rightarrow \\mathrm{Cu}$ — each $\\mathrm{Cu}^{2+}$ gains two electrons." },
            ],
            steps: [
              { reasoning: "Each mole of $\\mathrm{Cu}^{2+}$ requires two moles of electrons.", working: "n(e^-) = 2 \\times n(\\mathrm{Cu}^{2+})", marks: 1, markCode: "M" },
              { reasoning: "Substitute $n(\\mathrm{Cu}^{2+}) = 1.0$ mol.", working: "n(e^-) = 2 \\times 1.0 = 2.0", marks: 1, markCode: "M" },
              { reasoning: "State the amount with units.", working: "2.0\\ \\text{mol } e^-", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2.0$ mol of electrons",
            commonErrors: ["Using one electron per copper ion instead of two."],
          },
        },
        {
          id: "chemsl-u6-redox-q13",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Zinc metal reacts with silver nitrate solution: $\\mathrm{Zn} + 2\\mathrm{Ag}^+ \\rightarrow \\mathrm{Zn}^{2+} + 2\\mathrm{Ag}$. Calculate the amount, in mol, of electrons released when $0.25$ mol of Zn is oxidised.",
          response: {
            type: "numeric",
            parts: [
              { label: "Amount of electrons (mol)", answer: 0.5, tolerance: 0.005, unit: "mol" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Electron stoichiometry", statement: "Each Zn atom loses two electrons: $\\mathrm{Zn} \\rightarrow \\mathrm{Zn}^{2+} + 2e^-$." },
            ],
            steps: [
              { reasoning: "Determine electrons lost per Zn atom from the half-equation.", working: "\\mathrm{Zn} \\rightarrow \\mathrm{Zn}^{2+} + 2e^-", marks: 1, markCode: "M" },
              { reasoning: "Multiply by the amount of Zn.", working: "n(e^-) = 2 \\times 0.25", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "n(e^-) = 0.50", marks: 1, markCode: "A" },
              { reasoning: "State the amount with units.", working: "0.50\\ \\text{mol } e^-", marks: 1, markCode: "B" },
            ],
            finalAnswer: "$0.50$ mol of electrons",
            commonErrors: ["Using one electron per Zn atom."],
          },
        },
        {
          id: "chemsl-u6-redox-q14",
          difficulty: "foundation",
          paper: "2",
          totalMarks: 2,
          stem: "What is the oxidation number of nitrogen in the ammonium ion, $\\mathrm{NH}_4^+$?",
          response: {
            type: "numeric",
            parts: [
              { label: "Oxidation number of N", answer: -3, tolerance: 0.001 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Oxidation number rules", statement: "H is $+1$; the sum of oxidation numbers equals the ion charge ($+1$)." },
            ],
            steps: [
              { reasoning: "Set up: $x + 4(+1) = +1$.", working: "x + 4 = +1 \\Rightarrow x = -3", marks: 1, markCode: "M" },
              { reasoning: "State the oxidation number.", working: "\\mathrm{N} = -3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$-3$",
            commonErrors: ["Using charge $0$ instead of $+1$ for the ion."],
          },
        },
        {
          id: "chemsl-u6-redox-q15",
          difficulty: "core",
          paper: "2",
          totalMarks: 6,
          stem: "Magnesium ribbon reacts with hydrochloric acid: $\\mathrm{Mg} + 2\\mathrm{HCl} \\rightarrow \\mathrm{MgCl}_2 + \\mathrm{H}_2$.",
          parts: [
            { label: "a", prompt: "Define oxidation and reduction in terms of electron transfer.", marks: 2 },
            { label: "b", prompt: "Write the two half-equations for this reaction.", marks: 2 },
            { label: "c", prompt: "Identify the oxidising agent and the reducing agent.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Oxidation and reduction", statement: "Oxidation = loss of electrons; reduction = gain of electrons." },
            ],
            steps: [
              { part: "a", reasoning: "Oxidation is the loss of electrons by a species.", working: "\\text{oxidation: lose } e^-", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Reduction is the gain of electrons by a species.", working: "\\text{reduction: gain } e^-", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Magnesium loses two electrons; two $\\mathrm{H}^+$ ions each gain one electron.", working: "\\mathrm{Mg} \\rightarrow \\mathrm{Mg}^{2+} + 2e^-;\\quad 2\\mathrm{H}^+ + 2e^- \\rightarrow \\mathrm{H}_2", marks: 2, markCode: "M" },
              { part: "c", reasoning: "$\\mathrm{H}^+$ is reduced, so $\\mathrm{H}^+$ (from HCl) is the oxidising agent.", working: "\\text{oxidising agent: } \\mathrm{H}^+", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Mg is oxidised, so magnesium is the reducing agent.", working: "\\text{reducing agent: Mg}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) oxidation = loss of electrons; reduction = gain of electrons (b) $\\mathrm{Mg} \\rightarrow \\mathrm{Mg}^{2+} + 2e^-$ and $2\\mathrm{H}^+ + 2e^- \\rightarrow \\mathrm{H}_2$ (c) oxidising agent $\\mathrm{H}^+$ (HCl); reducing agent Mg",
            commonErrors: ["Writing the hydrogen half-equation with unbalanced charge."],
            examinerNote: "Award M1 for each correct definition in (a); M1 for each correctly balanced half-equation in (b); M1 for the oxidising agent and A1 for the reducing agent in (c).",
          },
        },
        {
          id: "chemsl-u6-redox-q16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Iron metal is added to copper(II) sulfate solution and the reaction $\\mathrm{Fe} + \\mathrm{CuSO}_4 \\rightarrow \\mathrm{FeSO}_4 + \\mathrm{Cu}$ occurs.",
          parts: [
            { label: "a", prompt: "State the oxidation numbers of iron and copper before and after the reaction.", marks: 2 },
            { label: "b", prompt: "Write the two half-equations.", marks: 2 },
            { label: "c", prompt: "Identify the oxidising agent and the reducing agent.", marks: 2 },
            { label: "d", prompt: "Explain, using the reactivity series, why copper metal does not react with iron(II) sulfate solution.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Oxidation numbers", statement: "Elemental metals are $0$; $\\mathrm{Fe}^{2+}$ is $+2$; $\\mathrm{Cu}^{2+}$ is $+2$; Cu metal is $0$." },
              { kind: "principle", name: "Reactivity series", statement: "A more reactive metal displaces a less reactive metal from its salt solution." },
            ],
            steps: [
              { part: "a", reasoning: "Fe goes from $0$ to $+2$; Cu goes from $+2$ to $0$.", working: "\\mathrm{Fe}: 0 \\rightarrow +2;\\quad \\mathrm{Cu}: +2 \\rightarrow 0", marks: 2, markCode: "M" },
              { part: "b", reasoning: "Balance atoms then charge for each half.", working: "\\mathrm{Fe} \\rightarrow \\mathrm{Fe}^{2+} + 2e^-;\\quad \\mathrm{Cu}^{2+} + 2e^- \\rightarrow \\mathrm{Cu}", marks: 2, markCode: "M" },
              { part: "c", reasoning: "$\\mathrm{Cu}^{2+}$ is reduced so it is the oxidising agent; Fe is oxidised so it is the reducing agent.", working: "\\text{oxidising: } \\mathrm{Cu}^{2+};\\ \\text{reducing: Fe}", marks: 2, markCode: "M" },
              { part: "d", reasoning: "Copper is below iron in the reactivity series, so it cannot displace iron from its salt solution.", working: "\\text{Cu less reactive than Fe} \\Rightarrow \\text{no reaction}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Therefore copper does not react with iron(II) sulfate solution.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Fe: $0 \\rightarrow +2$; Cu: $+2 \\rightarrow 0$ (b) $\\mathrm{Fe} \\rightarrow \\mathrm{Fe}^{2+} + 2e^-$ and $\\mathrm{Cu}^{2+} + 2e^- \\rightarrow \\mathrm{Cu}$ (c) oxidising agent $\\mathrm{Cu}^{2+}$; reducing agent Fe (d) no reaction — copper is less reactive than iron",
            commonErrors: ["Writing $\\mathrm{Fe}^{3+}$ instead of $\\mathrm{Fe}^{2+}$ in the half-equation."],
            examinerNote: "Award M1 for each correct oxidation number in (a); M1 for each balanced half-equation in (b); M1 for each correct agent in (c); M1 for the reactivity argument and A1 for the conclusion in (d).",
          },
        },
      ],
    },
    {
      id: "chemsl-u6-cells",
      title: "Electrochemical cells and electrolysis",
      skill: "Identify electrodes and electron flow in voltaic cells, calculate standard cell potentials, and predict products of electrolysis.",
      lesson: {
        sections: [
          {
            heading: "Voltaic cells",
            body: "A **voltaic cell** converts chemical energy into electrical energy. The **anode** is where oxidation occurs and the **cathode** where reduction occurs; electrons flow through the external circuit from anode to cathode. In the standard hydrogen electrode (SHE), $\\mathrm{H}_2$ is oxidised at the anode and $\\mathrm{H}^+$ reduced at the cathode, and $E^\\theta = 0.00$ V by definition. Electrode potentials are measured against the SHE; a more positive $E^\\theta$ means a greater tendency to be reduced.",
          },
          {
            heading: "Standard cell potential",
            body: "The standard cell potential is $E^\\theta_{\\text{cell}} = E^\\theta_{\\text{cathode}} - E^\\theta_{\\text{anode}}$, where each value is the reduction potential of that half-cell. For the Zn–Cu cell: $E^\\theta(\\mathrm{Cu}^{2+}/\\mathrm{Cu}) = +0.34$ V and $E^\\theta(\\mathrm{Zn}^{2+}/\\mathrm{Zn}) = -0.76$ V. Zinc is the anode (more negative, more easily oxidised) and copper the cathode, giving $E^\\theta_{\\text{cell}} = 0.34 - (-0.76) = +1.10$ V. A positive $E^\\theta_{\\text{cell}}$ means the cell reaction is spontaneous.",
          },
          {
            heading: "Electrolysis",
            body: "In **electrolysis** a DC power supply drives a non-spontaneous reaction. The **anode is positive** (connected to the positive terminal) and the **cathode is negative** — opposite to a voltaic cell. At the cathode, reduction occurs (cations gain electrons); at the anode, oxidation occurs (anions lose electrons). For molten NaCl: Na$^+$ is reduced to Na at the cathode and Cl$^-$ is oxidised to $\\mathrm{Cl}_2$ at the anode. For aqueous solutions, water may be discharged instead depending on concentrations and electrode reactivity.",
          },
        ],
        keyFormulas: [
          { name: "Cell potential", statement: "$E^\\theta_{\\text{cell}} = E^\\theta_{\\text{cathode}} - E^\\theta_{\\text{anode}}$" },
          { name: "Zn–Cu cell", statement: "$E^\\theta_{\\text{cell}} = 0.34 - (-0.76) = +1.10$ V" },
          { name: "Electrolysis electrodes", statement: "Anode positive (oxidation); cathode negative (reduction)" },
        ],
        workedExample: {
          problem: "A voltaic cell uses zinc and copper half-cells with $E^\\theta(\\mathrm{Zn}^{2+}/\\mathrm{Zn}) = -0.76$ V and $E^\\theta(\\mathrm{Cu}^{2+}/\\mathrm{Cu}) = +0.34$ V. Identify the electrodes and calculate $E^\\theta_{\\text{cell}}$.",
          solution: "Zinc has the more negative potential, so it is oxidised — the anode. Copper is reduced — the cathode. $E^\\theta_{\\text{cell}} = 0.34 - (-0.76) = +1.10$ V.",
        },
      },
      questions: [
        {
          id: "chemsl-u6-cells-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "In a voltaic (galvanic) cell, through which path do electrons flow?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "From the anode to the cathode through the external circuit" },
              { id: "b", text: "From the cathode to the anode through the external circuit" },
              { id: "c", text: "Through the electrolyte solution" },
              { id: "d", text: "From the salt bridge to the electrodes" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Voltaic cell", statement: "Oxidation at anode, reduction at cathode; electrons flow anode to cathode through the wire." },
            ],
            steps: [
              { reasoning: "The anode is the source of electrons (oxidation), the cathode the sink (reduction).", working: "e^- : \\text{anode} \\rightarrow \\text{cathode}", marks: 1, markCode: "M" },
              { reasoning: "Electrons cannot travel through the electrolyte — ions do that; the salt bridge completes the circuit ionically.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "**(a)** From the anode to the cathode through the external circuit",
            commonErrors: ["Thinking electrons flow through the electrolyte."],
          },
        },
        {
          id: "chemsl-u6-cells-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A cell is constructed from $\\mathrm{Zn}|\\mathrm{Zn}^{2+}$ ($E^\\theta = -0.76$ V) and $\\mathrm{Cu}^{2+}|\\mathrm{Cu}$ ($E^\\theta = +0.34$ V) half-cells. What is the standard cell potential?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$+1.10$ V" },
              { id: "b", text: "$-1.10$ V" },
              { id: "c", text: "$+0.42$ V" },
              { id: "d", text: "$-0.42$ V" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Standard cell potential", statement: "$E^\\theta_{\\text{cell}} = E^\\theta_{\\text{cathode}} - E^\\theta_{\\text{anode}}$." },
            ],
            steps: [
              { reasoning: "Copper has the more positive reduction potential, so Cu is the cathode and Zn the anode.", working: "\\text{cathode: Cu};\\ \\text{anode: Zn}", marks: 1, markCode: "M" },
              { reasoning: "Apply the formula.", working: "E^\\theta_{\\text{cell}} = 0.34 - (-0.76)", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "E^\\theta_{\\text{cell}} = +1.10\\ \\text{V}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $+1.10$ V",
            commonErrors: ["Subtracting in the wrong order to get $-1.10$ V.", "Adding the potentials to get $-0.42$ V."],
          },
        },
        {
          id: "chemsl-u6-cells-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Molten sodium chloride is electrolysed using inert electrodes. Which statement correctly identifies the electrodes and the products?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The anode is positive and chloride ions are oxidised to chlorine; the cathode is negative and sodium ions are reduced to sodium" },
              { id: "b", text: "The anode is negative and sodium ions are oxidised; the cathode is positive and chloride ions are reduced" },
              { id: "c", text: "The anode is positive and sodium ions are oxidised; the cathode is negative and chlorine is reduced" },
              { id: "d", text: "Both electrodes are positive and both Na and Cl$_2$ form at the anode" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Electrolysis", statement: "Anode is positive (oxidation); cathode is negative (reduction)." },
            ],
            steps: [
              { reasoning: "In electrolysis the anode connects to the positive terminal and the cathode to the negative terminal.", working: "\\text{anode } +,\\ \\text{cathode } -", marks: 1, markCode: "M" },
              { reasoning: "At the cathode cations are reduced: $\\mathrm{Na}^+ + e^- \\rightarrow \\mathrm{Na}$.", working: "\\mathrm{Na}^+ \\rightarrow \\mathrm{Na}", marks: 1, markCode: "M" },
              { reasoning: "At the anode anions are oxidised: $2\\mathrm{Cl}^- \\rightarrow \\mathrm{Cl}_2 + 2e^-$.", working: "2\\mathrm{Cl}^- \\rightarrow \\mathrm{Cl}_2 + 2e^-", marks: 1, markCode: "A" },
              { reasoning: "Options (b), (c) and (d) misidentify the electrodes or the species discharged.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "**(a)** Anode positive: $\\mathrm{Cl}^- \\rightarrow \\mathrm{Cl}_2$; cathode negative: $\\mathrm{Na}^+ \\rightarrow \\mathrm{Na}$",
            commonErrors: ["Applying voltaic-cell electrode signs (anode negative) to electrolysis."],
          },
        },
        {
          id: "chemsl-u6-cells-q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "A voltaic cell is built from zinc and copper half-cells. $E^\\theta(\\mathrm{Zn}^{2+}/\\mathrm{Zn}) = -0.76$ V and $E^\\theta(\\mathrm{Cu}^{2+}/\\mathrm{Cu}) = +0.34$ V.",
          parts: [
            { label: "a", prompt: "State which metal is the anode and which is the cathode, justifying your choice.", marks: 2 },
            { label: "b", prompt: "Calculate the standard cell potential.", marks: 2 },
            { label: "c", prompt: "Write the overall cell reaction.", marks: 2 },
            { label: "d", prompt: "During the electrolysis of concentrated aqueous sodium chloride, state the products formed at the cathode and the anode.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Cell potential", statement: "$E^\\theta_{\\text{cell}} = E^\\theta_{\\text{cathode}} - E^\\theta_{\\text{anode}}$." },
              { kind: "principle", name: "Electrolysis of brine", statement: "Cathode: $\\mathrm{H}_2$; anode: $\\mathrm{Cl}_2$ for concentrated NaCl." },
            ],
            steps: [
              { part: "a", reasoning: "Zinc has the more negative reduction potential, so it is more easily oxidised — it is the anode; copper is the cathode.", working: "\\text{anode: Zn};\\ \\text{cathode: Cu}", marks: 2, markCode: "R" },
              { part: "b", reasoning: "Apply the cell potential formula.", working: "E^\\theta_{\\text{cell}} = 0.34 - (-0.76) = +1.10\\ \\text{V}", marks: 2, markCode: "M" },
              { part: "c", reasoning: "Combine the two half-equations: Zn is oxidised and $\\mathrm{Cu}^{2+}$ is reduced.", working: "\\mathrm{Zn} + \\mathrm{Cu}^{2+} \\rightarrow \\mathrm{Zn}^{2+} + \\mathrm{Cu}", marks: 2, markCode: "M" },
              { part: "d", reasoning: "At the cathode water is reduced to hydrogen (and $\\mathrm{OH}^-$); at the anode chloride is oxidised to chlorine.", working: "\\text{cathode: } \\mathrm{H}_2;\\ \\text{anode: } \\mathrm{Cl}_2", marks: 2, markCode: "A" },
            ],
            finalAnswer: "(a) anode Zn, cathode Cu (b) $+1.10$ V (c) $\\mathrm{Zn} + \\mathrm{Cu}^{2+} \\rightarrow \\mathrm{Zn}^{2+} + \\mathrm{Cu}$ (d) cathode $\\mathrm{H}_2$, anode $\\mathrm{Cl}_2$",
            commonErrors: ["Swapping anode and cathode.", "Writing the cell reaction with electrons included."],
            examinerNote: "Award R1 for identifying Zn as anode and R1 for the justification in (a); M1 for the formula and A1 for +1.10 V in (b); M1 for combining half-equations correctly in (c); A1 for each correct electrolysis product in (d).",
          },
        },
        {
          id: "chemsl-u6-cells-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "During the electrolysis of molten sodium chloride, which statement about the electrodes is correct?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The anode is connected to the positive terminal of the power supply and the cathode to the negative terminal" },
              { id: "b", text: "The anode is connected to the negative terminal and the cathode to the positive terminal" },
              { id: "c", text: "Both electrodes are connected to the positive terminal" },
              { id: "d", text: "The anode is negative because oxidation occurs there" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Electrolysis electrodes", statement: "In electrolysis the anode is positive (oxidation) and the cathode is negative (reduction) — opposite to a voltaic cell." },
            ],
            steps: [
              { reasoning: "The power supply forces electrons onto the cathode (negative) and removes them from the anode (positive).", working: "\\text{anode} +,\\ \\text{cathode} -", marks: 1, markCode: "M" },
              { reasoning: "This is the reverse of a voltaic cell, where the anode is negative.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(a)** Anode positive, cathode negative",
            commonErrors: ["Applying voltaic-cell electrode signs to electrolysis."],
          },
        },
        {
          id: "chemsl-u6-cells-q6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "By definition, what is the standard electrode potential of the standard hydrogen electrode (SHE)?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$0.00$ V" },
              { id: "b", text: "$+1.00$ V" },
              { id: "c", text: "$-1.00$ V" },
              { id: "d", text: "It varies with temperature" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Standard hydrogen electrode", statement: "$E^\\theta = 0.00$ V by definition; all other potentials are measured against it." },
            ],
            steps: [
              { reasoning: "The SHE is the reference electrode against which all standard reduction potentials are measured.", working: "E^\\theta_{\\text{SHE}} = 0.00\\ \\text{V}", marks: 1, markCode: "M" },
              { reasoning: "It is fixed by definition and does not vary.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(a)** $0.00$ V",
            commonErrors: ["Thinking the SHE potential is measured rather than defined."],
          },
        },
        {
          id: "chemsl-u6-cells-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "For a voltaic cell, the standard cell potential is calculated using which expression?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$E^\\theta_{\\text{cell}} = E^\\theta_{\\text{cathode}} - E^\\theta_{\\text{anode}}$" },
              { id: "b", text: "$E^\\theta_{\\text{cell}} = E^\\theta_{\\text{anode}} - E^\\theta_{\\text{cathode}}$" },
              { id: "c", text: "$E^\\theta_{\\text{cell}} = E^\\theta_{\\text{cathode}} + E^\\theta_{\\text{anode}}$" },
              { id: "d", text: "$E^\\theta_{\\text{cell}} = E^\\theta_{\\text{cathode}} \\times E^\\theta_{\\text{anode}}$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Standard cell potential", statement: "$E^\\theta_{\\text{cell}} = E^\\theta_{\\text{cathode}} - E^\\theta_{\\text{anode}}$, using reduction potentials." },
            ],
            steps: [
              { reasoning: "The cell potential is the difference between the reduction potentials of the two half-cells.", working: "E^\\theta_{\\text{cell}} = E^\\theta_{\\text{red,cathode}} - E^\\theta_{\\text{red,anode}}", marks: 1, markCode: "M" },
              { reasoning: "Subtraction (not addition) gives the correct sign; a positive result means a spontaneous cell.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(a)** $E^\\theta_{\\text{cell}} = E^\\theta_{\\text{cathode}} - E^\\theta_{\\text{anode}}$",
            commonErrors: ["Adding the potentials instead of subtracting."],
          },
        },
        {
          id: "chemsl-u6-cells-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Given $E^\\theta(\\mathrm{Ag}^+/\\mathrm{Ag}) = +0.80$ V and $E^\\theta(\\mathrm{Cu}^{2+}/\\mathrm{Cu}) = +0.34$ V, which cell has the largest standard cell potential?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Ag as cathode with Cu as anode: $E^\\theta_{\\text{cell}} = +0.46$ V" },
              { id: "b", text: "Cu as cathode with Ag as anode: $E^\\theta_{\\text{cell}} = -0.46$ V" },
              { id: "c", text: "Both as cathodes: $E^\\theta_{\\text{cell}} = +1.14$ V" },
              { id: "d", text: "Ag as anode with Cu as anode: $E^\\theta_{\\text{cell}} = 0.00$ V" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Standard cell potential", statement: "$E^\\theta_{\\text{cell}} = E^\\theta_{\\text{cathode}} - E^\\theta_{\\text{anode}}$." },
            ],
            steps: [
              { reasoning: "The half-cell with the more positive potential (Ag, $+0.80$ V) is the cathode; Cu ($+0.34$ V) is the anode.", working: "\\text{cathode: Ag};\\ \\text{anode: Cu}", marks: 1, markCode: "M" },
              { reasoning: "Compute $E^\\theta_{\\text{cell}} = 0.80 - 0.34$.", working: "E^\\theta_{\\text{cell}} = +0.46\\ \\text{V}", marks: 1, markCode: "M" },
              { reasoning: "Option (b) reverses the subtraction giving a negative (non-spontaneous) value.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Ag cathode, Cu anode; $E^\\theta_{\\text{cell}} = +0.46$ V",
            commonErrors: ["Subtracting in the wrong order to obtain a negative cell potential."],
          },
        },
        {
          id: "chemsl-u6-cells-q9",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "A voltaic cell uses $\\mathrm{Cu}^{2+}/\\mathrm{Cu}$ ($E^\\theta = +0.34$ V) and $\\mathrm{Ag}^+/\\mathrm{Ag}$ ($E^\\theta = +0.80$ V) half-cells. Calculate the standard cell potential.",
          response: {
            type: "numeric",
            parts: [
              { label: "$E^\\theta_{\\text{cell}}$ (V)", answer: 0.46, tolerance: 0.005, unit: "V" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Standard cell potential", statement: "$E^\\theta_{\\text{cell}} = E^\\theta_{\\text{cathode}} - E^\\theta_{\\text{anode}}$." },
            ],
            steps: [
              { reasoning: "Silver has the more positive potential so it is the cathode; copper is the anode.", working: "\\text{cathode: Ag};\\ \\text{anode: Cu}", marks: 1, markCode: "M" },
              { reasoning: "Apply the formula.", working: "E^\\theta_{\\text{cell}} = 0.80 - 0.34 = 0.46", marks: 1, markCode: "M" },
              { reasoning: "State the value with units.", working: "E^\\theta_{\\text{cell}} = +0.46\\ \\text{V}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$E^\\theta_{\\text{cell}} = +0.46$ V",
            commonErrors: ["Subtracting in the wrong order to get $-0.46$ V."],
          },
        },
        {
          id: "chemsl-u6-cells-q10",
          difficulty: "core",
          paper: "2",
          totalMarks: 2,
          stem: "In the half-equation $\\mathrm{Zn} \\rightarrow \\mathrm{Zn}^{2+} + 2e^-$, how many moles of electrons are released per mole of zinc oxidised?",
          response: {
            type: "numeric",
            parts: [
              { label: "Moles of electrons per mole of Zn", answer: 2, tolerance: 0.001 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Half-equation", statement: "The coefficient of $e^-$ shows how many electrons each atom loses or gains." },
            ],
            steps: [
              { reasoning: "The half-equation shows two electrons released per Zn atom.", working: "\\mathrm{Zn} \\rightarrow \\mathrm{Zn}^{2+} + 2e^-", marks: 1, markCode: "M" },
              { reasoning: "State the value.", working: "2\\ \\text{mol } e^- \\text{ per mol Zn}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2$ mol of electrons per mole of Zn",
            commonErrors: ["Answering $1$ because zinc forms a $2+$ ion without checking the half-equation."],
          },
        },
        {
          id: "chemsl-u6-cells-q11",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "A voltaic cell is constructed with a zinc electrode ($E^\\theta(\\mathrm{Zn}^{2+}/\\mathrm{Zn}) = -0.76$ V) and a silver electrode ($E^\\theta(\\mathrm{Ag}^+/\\mathrm{Ag}) = +0.80$ V). Calculate the standard cell potential.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) $E^\\theta_{\\text{cell}}$ (V)", answer: 1.56, tolerance: 0.005, unit: "V" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Standard cell potential", statement: "$E^\\theta_{\\text{cell}} = E^\\theta_{\\text{cathode}} - E^\\theta_{\\text{anode}}$." },
            ],
            steps: [
              { reasoning: "Silver has the more positive potential, so Ag is the cathode and Zn the anode.", working: "\\text{cathode: Ag};\\ \\text{anode: Zn}", marks: 1, markCode: "M" },
              { reasoning: "Apply the formula.", working: "E^\\theta_{\\text{cell}} = 0.80 - (-0.76)", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "E^\\theta_{\\text{cell}} = +1.56\\ \\text{V}", marks: 1, markCode: "A" },
              { reasoning: "State the value with units.", working: "+1.56\\ \\text{V}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "$E^\\theta_{\\text{cell}} = +1.56$ V",
            commonErrors: ["Subtracting $0.80 - 0.76$ instead of $0.80 - (-0.76)$, forgetting the negative sign of the zinc potential."],
          },
        },
        {
          id: "chemsl-u6-cells-q12",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 3,
          stem: "Copper electrodes are used in the electrolysis of aqueous copper(II) sulfate. What happens at the electrodes?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Copper is deposited at the cathode and copper dissolves at the anode" },
              { id: "b", text: "Hydrogen is evolved at the cathode and oxygen at the anode" },
              { id: "c", text: "Copper is deposited at both electrodes" },
              { id: "d", text: "Oxygen is evolved at the cathode and copper dissolves at the anode" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Electrolysis with active electrodes", statement: "With copper electrodes, $\\mathrm{Cu}^{2+}$ is reduced at the cathode and the copper anode itself is oxidised." },
            ],
            steps: [
              { reasoning: "At the cathode $\\mathrm{Cu}^{2+}$ gains electrons to form copper metal.", working: "\\mathrm{Cu}^{2+} + 2e^- \\rightarrow \\mathrm{Cu}", marks: 1, markCode: "M" },
              { reasoning: "At the anode the copper electrode is more easily oxidised than water or sulfate, so Cu dissolves: $\\mathrm{Cu} \\rightarrow \\mathrm{Cu}^{2+} + 2e^-$.", working: "\\mathrm{Cu} \\rightarrow \\mathrm{Cu}^{2+} + 2e^-", marks: 1, markCode: "M" },
              { reasoning: "Only option (a) describes this correctly.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Copper deposited at cathode, copper dissolves at anode",
            commonErrors: ["Predicting $\\mathrm{H}_2$ and $\\mathrm{O}_2$ as if inert electrodes were used."],
          },
        },
        {
          id: "chemsl-u6-cells-q13",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "A cell uses nickel ($E^\\theta(\\mathrm{Ni}^{2+}/\\mathrm{Ni}) = -0.25$ V) and lead ($E^\\theta(\\mathrm{Pb}^{2+}/\\mathrm{Pb}) = -0.13$ V) half-cells. Calculate the standard cell potential.",
          response: {
            type: "numeric",
            parts: [
              { label: "$E^\\theta_{\\text{cell}}$ (V)", answer: 0.12, tolerance: 0.005, unit: "V" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Standard cell potential", statement: "$E^\\theta_{\\text{cell}} = E^\\theta_{\\text{cathode}} - E^\\theta_{\\text{anode}}$." },
            ],
            steps: [
              { reasoning: "Lead has the more positive potential ($-0.13 > -0.25$), so Pb is the cathode and Ni the anode.", working: "\\text{cathode: Pb};\\ \\text{anode: Ni}", marks: 1, markCode: "M" },
              { reasoning: "Apply the formula.", working: "E^\\theta_{\\text{cell}} = (-0.13) - (-0.25) = 0.12", marks: 1, markCode: "M" },
              { reasoning: "State the value with units.", working: "E^\\theta_{\\text{cell}} = +0.12\\ \\text{V}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$E^\\theta_{\\text{cell}} = +0.12$ V",
            commonErrors: ["Choosing the wrong cathode because both potentials are negative."],
          },
        },
        {
          id: "chemsl-u6-cells-q14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 6,
          stem: "Molten sodium chloride is electrolysed using inert electrodes.",
          parts: [
            { label: "a", prompt: "State which electrode is the anode and which is the cathode, including their polarity.", marks: 2 },
            { label: "b", prompt: "Write the half-equation at the cathode and name the product.", marks: 2 },
            { label: "c", prompt: "Write the half-equation at the anode and name the product.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Electrolysis", statement: "Anode positive (oxidation); cathode negative (reduction)." },
            ],
            steps: [
              { part: "a", reasoning: "The anode is connected to the positive terminal; the cathode to the negative terminal.", working: "\\text{anode } +,\\ \\text{cathode } -", marks: 2, markCode: "M" },
              { part: "b", reasoning: "Sodium ions are reduced at the cathode.", working: "\\mathrm{Na}^+ + e^- \\rightarrow \\mathrm{Na}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "The product is sodium metal.", working: "\\text{product: Na}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Chloride ions are oxidised at the anode.", working: "2\\mathrm{Cl}^- \\rightarrow \\mathrm{Cl}_2 + 2e^-", marks: 1, markCode: "M" },
              { part: "c", reasoning: "The product is chlorine gas.", working: "\\text{product: } \\mathrm{Cl}_2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) anode positive, cathode negative (b) $\\mathrm{Na}^+ + e^- \\rightarrow \\mathrm{Na}$; product Na (c) $2\\mathrm{Cl}^- \\rightarrow \\mathrm{Cl}_2 + 2e^-$; product $\\mathrm{Cl}_2$",
            commonErrors: ["Swapping the electrode polarities with a voltaic cell."],
            examinerNote: "Award M1 for each correct polarity in (a); M1 for the half-equation and A1 for the product name in (b) and (c).",
          },
        },
        {
          id: "chemsl-u6-cells-q15",
          difficulty: "core",
          paper: "2",
          totalMarks: 2,
          stem: "Calculate the amount, in mol, of electrons released when $0.25$ mol of zinc metal is oxidised to $\\mathrm{Zn}^{2+}$.",
          response: {
            type: "numeric",
            parts: [
              { label: "Amount of electrons (mol)", answer: 0.5, tolerance: 0.005, unit: "mol" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Electron stoichiometry", statement: "$\\mathrm{Zn} \\rightarrow \\mathrm{Zn}^{2+} + 2e^-$ — two electrons per Zn atom." },
            ],
            steps: [
              { reasoning: "Each mole of Zn releases two moles of electrons.", working: "n(e^-) = 2 \\times 0.25 = 0.50", marks: 1, markCode: "M" },
              { reasoning: "State the amount with units.", working: "0.50\\ \\text{mol } e^-", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$0.50$ mol of electrons",
            commonErrors: ["Forgetting the factor of two."],
          },
        },
        {
          id: "chemsl-u6-cells-q16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "A voltaic cell uses zinc and silver half-cells. $E^\\theta(\\mathrm{Zn}^{2+}/\\mathrm{Zn}) = -0.76$ V and $E^\\theta(\\mathrm{Ag}^+/\\mathrm{Ag}) = +0.80$ V.",
          parts: [
            { label: "a", prompt: "Identify the anode and the cathode, justifying your choice.", marks: 2 },
            { label: "b", prompt: "Calculate the standard cell potential.", marks: 2 },
            { label: "c", prompt: "Write the overall cell reaction.", marks: 2 },
            { label: "d", prompt: "State the direction of electron flow through the external circuit.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Cell potential", statement: "$E^\\theta_{\\text{cell}} = E^\\theta_{\\text{cathode}} - E^\\theta_{\\text{anode}}$." },
              { kind: "definition", name: "Voltaic cell", statement: "Oxidation at the anode, reduction at the cathode; electrons flow anode to cathode." },
            ],
            steps: [
              { part: "a", reasoning: "Silver has the more positive reduction potential, so $\\mathrm{Ag}^+$ is reduced — silver is the cathode; zinc is oxidised — zinc is the anode.", working: "\\text{anode: Zn};\\ \\text{cathode: Ag}", marks: 2, markCode: "M" },
              { part: "b", reasoning: "Apply the cell potential formula.", working: "E^\\theta_{\\text{cell}} = 0.80 - (-0.76) = +1.56\\ \\text{V}", marks: 2, markCode: "M" },
              { part: "c", reasoning: "Combine the half-equations: Zn loses two electrons and two $\\mathrm{Ag}^+$ each gain one.", working: "\\mathrm{Zn} + 2\\mathrm{Ag}^+ \\rightarrow \\mathrm{Zn}^{2+} + 2\\mathrm{Ag}", marks: 2, markCode: "M" },
              { part: "d", reasoning: "Electrons flow from the anode (Zn) through the external circuit to the cathode (Ag).", working: "e^- : \\text{Zn} \\rightarrow \\text{Ag}", marks: 2, markCode: "A" },
            ],
            finalAnswer: "(a) anode Zn, cathode Ag (b) $+1.56$ V (c) $\\mathrm{Zn} + 2\\mathrm{Ag}^+ \\rightarrow \\mathrm{Zn}^{2+} + 2\\mathrm{Ag}$ (d) electrons flow from Zn (anode) to Ag (cathode)",
            commonErrors: ["Swapping the electrodes.", "Writing $\\mathrm{Ag}^+ \\rightarrow \\mathrm{Ag}^{2+}$ in the cell reaction."],
            examinerNote: "Award M1 for identifying Zn as anode and M1 for the justification in (a); M1 for the formula and A1 for +1.56 V in (b); M1 for combining half-equations correctly in (c); A1 for the correct electron-flow direction in (d).",
          },
        },
      ],
    },
  ],
};
