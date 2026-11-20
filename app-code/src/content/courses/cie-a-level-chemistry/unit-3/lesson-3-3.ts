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
              { id: "a", text: "Fluorine" },
              { id: "b", text: "Chlorine" },
              { id: "c", text: "Bromine" },
              { id: "d", text: "Iodine" },
            ],
            correctChoiceId: "a",
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
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why chlorine can displace bromine from bromide solution but bromine cannot displace chlorine from chloride solution.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Reactivity series",
                statement: "More reactive halogen displaces less reactive one.",
              },
            ],
            steps: [
              {
                reasoning: "Cl is more reactive than Br (higher in group).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Cl$_2$ oxidises $Br^-$ to $Br_2$ — displacement occurs.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Br is less reactive than Cl — cannot oxidise $Cl^-$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "No reaction in the reverse direction.",
                marks: 1,
                markCode: "B",
              },
            ],
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
              { id: "a", text: "Variable oxidation states" },
              { id: "b", text: "Only +1 oxidation state" },
              { id: "c", text: "Colourless compounds only" },
              { id: "d", text: "Cannot form complex ions" },
            ],
            correctChoiceId: "a",
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
