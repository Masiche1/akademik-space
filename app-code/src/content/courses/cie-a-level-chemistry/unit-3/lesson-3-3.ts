import type { Lesson } from "../../../types.ts";

export const lesson313: Lesson = {
  id: "cial-c-u3-lesson-3-3",
  code: "3-3",
  title: "Group 17 and transition elements",
  goal: "I CAN describe halogen displacement reactions and the properties of transition metals.",
  standards: ["9701 3.3: Group 17 and transition elements"],
  vocabulary: [
    {
      term: "Halogen",
      definition: "Group 17 element: F, Cl, Br, I, At.",
    },
    {
      term: "Displacement reaction",
      definition:
        "More reactive halogen displaces a less reactive halide from solution.",
    },
    {
      term: "Transition metal",
      definition:
        "Element with partially filled $d$ subshell, showing variable oxidation states.",
    },
    {
      term: "Complex ion",
      definition: "Central metal ion surrounded by coordinate bonds from ligands.",
    },
    {
      term: "Ligand",
      definition: "Species donating a lone pair to a metal ion.",
    },
    {
      term: "Catalyst",
      definition: "Substance speeding a reaction without being consumed.",
    },
  ],
  concepts: [
    {
      id: "cial-c-u3-halogen-displacement",
      title: "Halogens and displacement",
      skill: "Explain halogen reactivity and write displacement reactions.",
      lesson: {
        sections: [
          {
            heading: "Halogen properties",
            body: "Reactivity decreases down Group 17: F most reactive, I least. Halogens exist as diatomic molecules $X_2$; colour deepens down group (Cl$_2$ pale green, Br$_2$ orange-brown, I$_2$ grey-black). All are oxidising agents — gain electrons to form halides.",
          },
          {
            heading: "Displacement",
            body: "A more reactive halogen displaces a less reactive one from its halide solution: $Cl_2 + 2KBr \\to 2KCl + Br_2$. Evidence: orange bromine colour appears. This is a redox reaction — chlorine is reduced, bromide oxidised.",
          },
          {
            heading: "Hydrogen halides",
            body: "$HX$ acids: strength increases down group ($HF$ weakest, $HI$ strongest) — bond strength decreases as atoms get larger. All dissolve in water to give acidic solutions.",
          },
        ],
        keyFormulas: [
          {
            name: "Displacement",
            statement: "$X_2 + 2Y^- \\to 2X^- + Y_2$ (X more reactive than Y).",
          },
          {
            name: "Reactivity",
            statement: "F $>$ Cl $>$ Br $>$ I.",
          },
        ],
        workedExample: {
          problem: "What happens when chlorine water is added to potassium iodide solution?",
          solution:
            "$Cl_2 + 2KI \\to 2KCl + I_2$. Brown/violet iodine colour appears — chlorine displaces iodine (more reactive).",
        },
      },
      questions: [
        {
          id: "cial-c-u3-hd-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is the most reactive halogen?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Bromine" },
              { id: "b", text: "Fluorine" },
              { id: "c", text: "Chlorine" },
              { id: "d", text: "Iodine" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Halogen reactivity",
                statement: "Reactivity decreases down Group 17.",
              },
            ],
            steps: [
              {
                reasoning: "F is the most reactive halogen.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Fluorine",
          },
        },
        {
          id: "cial-c-u3-hd-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write the equation for bromine displacing iodine from potassium iodide solution.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Halogen displacement",
                statement: "$Br_2 + 2I^- \\to 2Br^- + I_2$.",
              },
            ],
            steps: [
              {
                reasoning: "$Br_2 + 2KI \\to 2KBr + I_2$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Products: potassium bromide and iodine.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Correct balancing (2 KI, 2 KBr).",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "$Br_2 + 2KI \\to 2KBr + I_2$",
          },
        },
        {
          id: "cial-c-u3-hd-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which statement about halogen displacement is correct?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "All halogens displace each other equally" },
              { id: "b", text: "No halogen can displace another" },
              { id: "c", text: "$Cl_2$ displaces $Br^-$, but $Br_2$ cannot displace $Cl^-$" },
              { id: "d", text: "$Br_2$ displaces $Cl^-$ because Br is more reactive" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Reactivity series",
                statement: "More reactive halogen displaces less reactive one.",
              },
            ],
            steps: [{ reasoning: "Cl is more reactive than Br, so the displacement is one-way only.", marks: 1, markCode: "A" }],
            finalAnswer: "Reactivity order Cl>Br prevents reverse displacement",
          },
        },
        {
          id: "cial-c-u3-hd-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Halogens and displacement.",
          parts: [
            {
              label: "a",
              prompt: "State the reactivity order of the halogens.",
              marks: 1,
            },
            {
              label: "b",
              prompt: "Write the equation for chlorine reacting with potassium bromide solution.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "What colour change would be observed?",
              marks: 1,
            },
            {
              label: "d",
              prompt: "Explain why HF is a weaker acid than HCl.",
              marks: 3,
            },
            {
              label: "e",
              prompt: "Identify the oxidising and reducing agents in part (b).",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Halogen chemistry",
                statement:
                  "Displacement by reactivity; HX strength $\\uparrow$ down group (weaker H–X bond).",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "F > Cl > Br > I.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "$Cl_2 + 2KBr \\to 2KCl + Br_2$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Correct products and balancing.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Orange/brown bromine colour appears.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "H–F bond is strongest (smallest atoms, shortest bond).",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Harder to break $HF$ $\\to$ fewer $H^+$ ions.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "So $HF$ weakest acid, $HI$ strongest.",
                marks: 1,
                markCode: "B",
              },
              {
                part: "e",
                reasoning: "$Cl_2$ is the oxidising agent (reduced to $Cl^-$).",
                marks: 1,
                markCode: "M",
              },
              {
                part: "e",
                reasoning: "$Br^-$ (in KBr) is the reducing agent (oxidised to $Br_2$).",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) F>Cl>Br>I (b) Cl2+2KBr→2KCl+Br2 (c) orange (d) strong H-F bond (e) Cl2 ox, Br- red",
          },
        },
        {
          id: "cial-c-u3-hd-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is the correct reactivity order of the halogens?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$Cl > F > I > Br$" },
              { id: "b", text: "$I > Br > Cl > F$" },
              { id: "c", text: "$F > Cl > Br > I$" },
              { id: "d", text: "$Br > I > F > Cl$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "property", name: "Halogen reactivity", statement: "Decreases down group." }],
            steps: [{ reasoning: "Fluorine is most reactive; iodine least.", marks: 1, markCode: "A" }],
            finalAnswer: "$F>Cl>Br>I$",
          },
        },
        {
          id: "cial-c-u3-hd-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "How many electrons does a chlorine atom gain to form $Cl^-$?",
          response: { type: "numeric", parts: [{ label: "electrons", answer: 1, unit: "e" }] },
          markscheme: {
            principles: [{ kind: "definition", name: "Halide ion", statement: "Cl gains one electron." }],
            steps: [
              { reasoning: "Cl has 7 valence electrons and needs 1 more.", working: "7+1=8", marks: 1, markCode: "M" },
              { reasoning: "Electrons gained = 1.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$1$",
          },
        },
        {
          id: "cial-c-u3-hd-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Write the equation for chlorine reacting with potassium iodide solution.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "law", name: "Halogen displacement", statement: "More reactive halogen displaces less reactive." }],
            steps: [
              { reasoning: "$Cl_2 + 2KI \\rightarrow 2KCl + I_2$.", marks: 1, markCode: "M" },
              { reasoning: "Correct products and balancing.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$Cl_2+2KI\\to2KCl+I_2$",
          },
        },
        {
          id: "cial-c-u3-hd-q8",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "For $Cl_2 + 2KBr \\rightarrow 2KCl + Br_2$, calculate the moles of $Br_2$ formed from $0.20$ mol $Cl_2$ with excess KBr.",
          response: { type: "numeric", parts: [{ label: "n(Br2)", answer: 0.2, unit: "mol" }] },
          markscheme: {
            principles: [{ kind: "law", name: "Mole ratio", statement: "1 mol Cl2 gives 1 mol Br2." }],
            steps: [
              { reasoning: "Ratio Cl2:Br2 = 1:1.", working: "1:1", marks: 1, markCode: "M" },
              { reasoning: "n(Br2)=0.20 mol.", working: "0.20", marks: 1, markCode: "M" },
              { reasoning: "KBr is in excess so Cl2 is limiting.", marks: 1, markCode: "M" },
              { reasoning: "Answer 0.20 mol.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$0.20$ mol",
          },
        },
        {
          id: "cial-c-u3-hd-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "What colour change is observed when bromine water is added to iodide solution?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "White precipitate forms" },
              { id: "b", text: "Green colour disappears" },
              { id: "c", text: "Orange/brown iodine colour appears" },
              { id: "d", text: "Solution stays colourless" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "property", name: "Halogen colours", statement: "I2 is brown/violet in solution." }],
            steps: [{ reasoning: "Bromine displaces iodine, giving brown colour.", marks: 1, markCode: "A" }],
            finalAnswer: "Orange/brown iodine colour",
          },
        },
        {
          id: "cial-c-u3-hd-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why does halogen reactivity decrease down Group 17?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Nuclear charge decreases down the group" },
              { id: "b", text: "Atoms get larger with more shielding, so gaining an electron is harder" },
              { id: "c", text: "Atoms get smaller down the group" },
              { id: "d", text: "Shielding decreases down the group" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Periodic trend", statement: "Radius and shielding reduce attraction for electrons." }],
            steps: [{ reasoning: "Larger atoms with more shielding hold an extra electron less tightly.", marks: 1, markCode: "A" }],
            finalAnswer: "Larger atoms and shielding lower reactivity.",
          },
        },
        {
          id: "cial-c-u3-hd-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "How many electrons does each halogen atom gain when forming a halide ion $X^-$?",
          response: { type: "numeric", parts: [{ label: "electrons", answer: 1, unit: "e" }] },
          markscheme: {
            principles: [{ kind: "definition", name: "Halide ion", statement: "Halogens gain one electron." }],
            steps: [
              { reasoning: "Each halogen has 7 valence electrons.", working: "7", marks: 1, markCode: "M" },
              { reasoning: "Gaining 1 electron completes the outer shell.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$1$",
          },
        },
        {
          id: "cial-c-u3-hd-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why is $HI$ a stronger acid than $HF$ in aqueous solution?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The H-F bond is weaker than the H-I bond" },
              { id: "b", text: "HI is more polar than HF" },
              { id: "c", text: "The H-I bond is weaker, so it breaks more easily to release $H^+$" },
              { id: "d", text: "HF has a larger molecular mass" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "HX acidity", statement: "Weaker H-X bond gives stronger acid." }],
            steps: [{ reasoning: "Bond strength decreases down the group, so HI ionises most easily.", marks: 1, markCode: "A" }],
            finalAnswer: "H-I bond is weakest, so HI strongest.",
          },
        },
        {
          id: "cial-c-u3-hd-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which reaction will occur?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$I_2 + 2KCl \\rightarrow 2KI + Cl_2$" },
              { id: "b", text: "$Cl_2 + 2KBr \\rightarrow 2KCl + Br_2$" },
              { id: "c", text: "$Br_2 + 2KCl \\rightarrow 2KBr + Cl_2$" },
              { id: "d", text: "$I_2 + 2KBr \\rightarrow 2KI + Br_2$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "law", name: "Displacement", statement: "More reactive halogen displaces less reactive." }],
            steps: [{ reasoning: "Cl is more reactive than Br, so it displaces Br-.", marks: 1, markCode: "A" }],
            finalAnswer: "$Cl_2+2KBr\\to2KCl+Br_2$",
          },
        },
        {
          id: "cial-c-u3-hd-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "For $Cl_2 + 2KBr \\rightarrow 2KCl + Br_2$, calculate the moles of KCl formed from $0.10$ mol $Cl_2$.",
          response: { type: "numeric", parts: [{ label: "n(KCl)", answer: 0.2, unit: "mol" }] },
          markscheme: {
            principles: [{ kind: "law", name: "Mole ratio", statement: "1 Cl2 gives 2 KCl." }],
            steps: [
              { reasoning: "Ratio Cl2:KCl = 1:2.", working: "1:2", marks: 1, markCode: "M" },
              { reasoning: "n(KCl)=2*0.10=0.20 mol.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$0.20$ mol",
          },
        },
        {
          id: "cial-c-u3-hd-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "In $Cl_2 + 2KBr \\rightarrow 2KCl + Br_2$, what is the oxidising agent?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$Cl_2$" },
              { id: "b", text: "$KCl$" },
              { id: "c", text: "$K^+$" },
              { id: "d", text: "$Br^-$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Redox", statement: "Oxidising agent is reduced; reducing agent is oxidised." }],
            steps: [{ reasoning: "$Cl_2$ gains electrons to form $Cl^-$, so it is reduced and acts as the oxidising agent.", marks: 1, markCode: "A" }],
            finalAnswer: "$Cl_2$ oxidising; $Br^-$ reducing.",
          },
        },
        {
          id: "cial-c-u3-hd-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Halogen displacement problem.",
          parts: [
            { label: "a", prompt: "State the reactivity order of F, Cl, Br and I.", marks: 1 },
            { label: "b", prompt: "Write the equation for bromine reacting with potassium iodide.", marks: 2 },
            { label: "c", prompt: "What colour change is observed?", marks: 1 },
            { label: "d", prompt: "Explain why $HBr$ is a stronger acid than $HF$.", marks: 3 },
            { label: "e", prompt: "Identify the oxidising agent in part (b).", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "law", name: "Halogen chemistry", statement: "Displacement and HX acidity." }],
            steps: [
              { part: "a", reasoning: "F > Cl > Br > I.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$Br_2 + 2KI \\rightarrow 2KBr + I_2$.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct products and balancing.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Brown/violet iodine colour appears.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "H-F bond is stronger than H-Br.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Weaker H-Br bond releases H+ more easily.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "So HBr is stronger acid.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "$Br_2$ is the oxidising agent.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) F>Cl>Br>I (b) Br2+2KI→2KBr+I2 (c) brown (d) weaker H-Br (e) Br2",
          },
        },
      ],
    },
    {
      id: "cial-c-u3-transition",
      title: "Transition metals",
      skill: "Describe variable oxidation states, coloured ions and catalytic properties.",
      lesson: {
        sections: [
          {
            heading: "Characteristic properties",
            body: "Transition metals (d-block) show: variable oxidation states (e.g. Fe$^{2+}$/Fe$^{3+}$, Mn$^{2+}$ to $MnO_4^-$), coloured compounds/ions, formation of complex ions, catalytic activity, high density and mp.",
          },
          {
            heading: "Complex ions",
            body: "Metal ions accept lone pairs from ligands (H$_2$O, NH$_3$, CN$^-$) forming complexes: $[Cu(H_2O)_6]^{2+}$ deep blue, $[Cu(NH_3)_4]^{2+}$ deep blue/violet, $[Fe(CN)_6]^{4-}$ yellow. Ligand exchange changes colour — used in tests.",
          },
          {
            heading: "Catalysis and uses",
            body: "Fe in Haber process, V$_2$O$_5$ in Contact process, Pt in catalytic converters, Ni in hydrogenation. Catalysts provide alternative pathway with lower activation energy.",
          },
        ],
        keyFormulas: [
          {
            name: "Complex ion",
            statement: "Metal ion + ligands via coordinate bonds.",
          },
          {
            name: "Variable oxidation",
            statement: "d-electrons can be lost in different numbers.",
          },
        ],
        workedExample: {
          problem: "Why do transition metal compounds show colour?",
          solution:
            "Partially filled d orbitals absorb visible light — electrons jump between d levels, transmitting/reflecting the complementary colour.",
        },
      },
      questions: [
        {
          id: "cial-c-u3-tm-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which property is characteristic of transition metals?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Colourless compounds only" },
              { id: "b", text: "Cannot form complex ions" },
              { id: "c", text: "Only +1 oxidation state" },
              { id: "d", text: "Variable oxidation states" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Transition metals",
                statement: "Variable oxidation states, coloured ions, complexes, catalysis.",
              },
            ],
            steps: [
              {
                reasoning: "Variable oxidation states are characteristic.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Variable oxidation states",
          },
        },
        {
          id: "cial-c-u3-tm-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is a ligand in a complex ion? Give one example.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Ligand",
                statement:
                  "Species donating lone pair to metal via coordinate bond.",
              },
            ],
            steps: [
              {
                reasoning: "Ligand donates lone pair to metal ion.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Example: $H_2O$, $NH_3$ or $CN^-$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Electron-pair donor e.g. H2O",
          },
        },
        {
          id: "cial-c-u3-tm-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why $[Cu(H_2O)_6]^{2+}$ and $[Cu(NH_3)_4]^{2+}$ have different colours.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "d-orbital splitting",
                statement:
                  "Different ligands split d orbitals differently — different absorbed wavelengths.",
              },
            ],
            steps: [
              {
                reasoning: "Ligand field strength differs between $H_2O$ and $NH_3$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Different splitting of d orbitals.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Different energy gap $\\to$ absorbs different colour of light.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Transmits complementary colour — different colours observed.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "Different ligand field = different d splitting",
          },
        },
        {
          id: "cial-c-u3-tm-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Transition metals.",
          parts: [
            {
              label: "a",
              prompt: "List three characteristic properties of transition metals.",
              marks: 3,
            },
            {
              label: "b",
              prompt: "What is a complex ion? Give the formula of the hexaamminecopper(II) ion.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Why are transition metals good catalysts?",
              marks: 2,
            },
            {
              label: "d",
              prompt: "Give two uses of transition metals or their compounds.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Transition metals",
                statement:
                  "Variable OS, coloured ions, complexes, catalysis, high density/mp.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Any three: variable OS, coloured compounds, complex ions, catalytic, high density/mp.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "a",
                reasoning: "Three valid properties listed.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "a",
                reasoning: "Bonus correct property.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Metal ion + ligands via coordinate bonds.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$[Cu(NH_3)_4]^{2+}$.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "d-orbitals provide alternative reaction pathways.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Lower activation energy — unchanged after reaction.",
                marks: 1,
                markCode: "B",
              },
              {
                part: "d",
                reasoning: "Any two: Fe in Haber, V2O5 in Contact, Pt in converters, Ni hydrogenation, Cu wiring.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Two valid uses given.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) 3 properties (b) [Cu(NH3)4]2+ (c) lower Ea (d) any 2 uses",
          },
        },
        {
          id: "cial-c-u3-tm-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which pair shows variable oxidation states typical of transition metals?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$Cl^-$ and $Cl^{2-}$" },
              { id: "b", text: "$Mg^{2+}$ and $Mg^{3+}$" },
              { id: "c", text: "$Na^+$ and $Na^{2+}$" },
              { id: "d", text: "$Fe^{2+}$ and $Fe^{3+}$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "property", name: "Variable oxidation", statement: "Transition metals show several OS." }],
            steps: [{ reasoning: "Iron commonly forms Fe2+ and Fe3+.", marks: 1, markCode: "A" }],
            finalAnswer: "$Fe^{2+}/Fe^{3+}$",
          },
        },
        {
          id: "cial-c-u3-tm-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the coordination number of copper in $[Cu(NH_3)_4]^{2+}$?",
          response: { type: "numeric", parts: [{ label: "coordination number", answer: 4 }] },
          markscheme: {
            principles: [{ kind: "definition", name: "Complex ion", statement: "Coordination number = number of ligands." }],
            steps: [
              { reasoning: "There are four NH3 ligands.", working: "4", marks: 1, markCode: "M" },
              { reasoning: "Coordination number = 4.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$4$",
          },
        },
        {
          id: "cial-c-u3-tm-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a ligand in a complex ion?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A molecule with no lone pairs" },
              { id: "b", text: "An electron in a d orbital" },
              { id: "c", text: "A positively charged metal ion" },
              { id: "d", text: "A species that donates a lone pair to the metal ion" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Ligand", statement: "Electron-pair donor to metal." }],
            steps: [{ reasoning: "Ligands donate lone pairs to form coordinate bonds with metal ions.", marks: 1, markCode: "A" }],
            finalAnswer: "Electron-pair donor, e.g. NH3",
          },
        },
        {
          id: "cial-c-u3-tm-q8",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Calculate the oxidation state of copper in $[Cu(NH_3)_4]^{2+}$.",
          response: { type: "numeric", parts: [{ label: "oxidation state", answer: 2, unit: "+" }] },
          markscheme: {
            principles: [{ kind: "definition", name: "Oxidation state", statement: "NH3 is neutral; overall charge +2." }],
            steps: [
              { reasoning: "NH3 ligands are neutral.", marks: 1, markCode: "M" },
              { reasoning: "Overall charge is +2, so Cu is +2.", working: "+2", marks: 1, markCode: "M" },
              { reasoning: "Oxidation state of Cu = +2.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$+2$",
          },
        },
        {
          id: "cial-c-u3-tm-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why are many transition metal compounds coloured?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "d-electrons absorb visible light" },
              { id: "b", text: "They contain free electrons" },
              { id: "c", text: "They have no d orbitals" },
              { id: "d", text: "They are all metals" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Colour", statement: "d-d transitions absorb visible light." }],
            steps: [{ reasoning: "Partially filled d orbitals absorb visible wavelengths.", marks: 1, markCode: "A" }],
            finalAnswer: "d-electron transitions absorb light",
          },
        },
        {
          id: "cial-c-u3-tm-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why are transition metals often used as catalysts?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They have variable oxidation states that provide alternative reaction pathways" },
              { id: "b", text: "They have no d electrons" },
              { id: "c", text: "They are very cheap and abundant" },
              { id: "d", text: "They cannot form ions" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Catalysis", statement: "Variable oxidation states provide pathways." }],
            steps: [{ reasoning: "Variable oxidation states lower the activation energy via alternative pathways.", marks: 1, markCode: "A" }],
            finalAnswer: "Variable oxidation states lower Ea.",
          },
        },
        {
          id: "cial-c-u3-tm-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "How many d electrons does $Fe^{2+}$ have? (Fe configuration $[Ar]4s^23d^6$)",
          response: { type: "numeric", parts: [{ label: "d electrons", answer: 6 }] },
          markscheme: {
            principles: [{ kind: "definition", name: "d electrons", statement: "Fe2+ is [Ar]3d6." }],
            steps: [
              { reasoning: "Fe loses two 4s electrons, leaving 3d6.", working: "3d6", marks: 1, markCode: "M" },
              { reasoning: "d electrons = 6.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$6$",
          },
        },
        {
          id: "cial-c-u3-tm-q12",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Describe how a complex ion is formed.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Complex ion", statement: "Coordinate bonds from ligands." }],
            steps: [
              { reasoning: "A metal ion accepts lone pairs from ligands.", marks: 1, markCode: "M" },
              { reasoning: "Coordinate bonds form between metal and ligand.", marks: 1, markCode: "M" },
              { reasoning: "Example: [Cu(NH3)4]2+ forms when NH3 ligands surround Cu2+.", marks: 1, markCode: "M" },
              { reasoning: "The complex has an overall charge and characteristic colour.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Metal + ligands via coordinate bonds.",
          },
        },
        {
          id: "cial-c-u3-tm-q13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which species can act as a ligand?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$NH_3$" },
              { id: "b", text: "$Na^+$" },
              { id: "c", text: "$He$" },
              { id: "d", text: "$Cl_2$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Ligand", statement: "Must donate a lone pair." }],
            steps: [{ reasoning: "NH3 has a lone pair and can coordinate to metals.", marks: 1, markCode: "A" }],
            finalAnswer: "$NH_3$",
          },
        },
        {
          id: "cial-c-u3-tm-q14",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Calculate the oxidation state of manganese in $MnO_4^-$.",
          response: { type: "numeric", parts: [{ label: "oxidation state", answer: 7, unit: "+" }] },
          markscheme: {
            principles: [{ kind: "definition", name: "Oxidation state", statement: "Solve x + 4(-2) = -1." }],
            steps: [
              { reasoning: "Let Mn oxidation state be x.", marks: 1, markCode: "M" },
              { reasoning: "x + 4(-2) = -1, so x - 8 = -1.", working: "x-8=-1", marks: 1, markCode: "M" },
              { reasoning: "x = +7.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$+7$",
          },
        },
        {
          id: "cial-c-u3-tm-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Give two industrial uses of transition metals or their compounds.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "context", name: "Transition metals", statement: "Catalysts and structural uses." }],
            steps: [
              { reasoning: "Fe catalyst in Haber process.", marks: 1, markCode: "A" },
              { reasoning: "V2O5 in Contact process or Pt in converters.", marks: 1, markCode: "A" },
              { reasoning: "Any two valid uses accepted.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Fe/Haber; V2O5/Contact; Pt/converters.",
          },
        },
        {
          id: "cial-c-u3-tm-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Transition metals problem.",
          parts: [
            { label: "a", prompt: "List two characteristic properties of transition metals.", marks: 2 },
            { label: "b", prompt: "What is a ligand? Give one example.", marks: 2 },
            { label: "c", prompt: "Explain why transition metal compounds are coloured.", marks: 2 },
            { label: "d", prompt: "Give one industrial use of a transition metal catalyst.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "property", name: "Transition metals", statement: "Variable OS, colour, complexes, catalysis." }],
            steps: [
              { part: "a", reasoning: "Any two: variable OS, coloured ions, complex ions, catalytic, high density.", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Two correct properties stated.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Ligand donates lone pair to metal.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Example NH3/H2O/CN-.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "d electrons absorb visible light.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Transitions between d levels produce colour.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Any valid use with catalyst named.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Process linked correctly.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) 2 properties (b) ligand+example (c) d-d transitions (d) catalyst use",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cial-c-u3-group17-transition-notes",
      title: "Group 17 and transition elements — revision notes",
      summary:
        "Halogen displacement reactions and transition metal properties.",
      sections: [
        {
          heading: "Halogens",
          body: "Reactivity $F>Cl>Br>I$ — decreases down group. Displacement: more reactive halogen takes electrons from less reactive halide: $Cl_2+2Br^-\\to2Cl^-+Br_2$. HX acid strength increases down group (H–X bond weaker). Halogens are oxidising agents.",
        },
        {
          heading: "Transition metals",
          body: "d-block elements with partially filled d orbitals: variable oxidation states, coloured ions (d-d transitions), complex ions with ligands ($[Cu(NH_3)_4]^{2+}$), catalytic activity (Fe, V$_2$O$_5$, Pt, Ni).",
        },
        {
          heading: "Exam checklist",
          body: "For displacement, identify which halogen is more reactive first. For transition metals, link colour to d-orbital transitions and catalysis to variable oxidation states.",
        },
      ],
    },
  ],
};
