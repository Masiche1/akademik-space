import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "chemhl-u1-lesson-1-3",
  code: "1-3",
  title: "d-Block Elements and Coloured Complexes",
  goal: "I CAN describe the characteristic properties of first-row d-block elements including variable oxidation states, define ligands and coordination complexes, and explain the origin of colour in transition metal complexes.",
  standards: ["Paper 1", "Paper 2", "AHL S3"],
  vocabulary: [
    {
      term: "Transition element",
      definition:
        "An element that forms at least one stable ion with a partially filled d subshell; the first-row d-block spans Sc to Zn (groups 3-12).",
    },
    {
      term: "Variable oxidation state",
      definition:
        "The ability of transition metals to exhibit several stable oxidation states, arising because the $(n-1)d$ and $ns$ electrons have similar energies.",
    },
    {
      term: "Ligand",
      definition:
        "An ion or neutral molecule that donates a lone pair of electrons to a central metal ion to form a coordinate (dative covalent) bond.",
    },
    {
      term: "Coordination complex",
      definition:
        "A central metal ion surrounded by ligands; e.g. $[Cu(H_2O)_6]^{2+}$, where water molecules act as ligands.",
    },
    {
      term: "d-d transition",
      definition:
        "The absorption of visible light that promotes an electron between split d orbitals in a complex; responsible for the colours of transition metal compounds.",
    },
    {
      term: "Crystal field splitting",
      definition:
        "The splitting of the five degenerate d orbitals into higher- and lower-energy sets by the electrostatic field of surrounding ligands.",
    },
  ],
  concepts: [
    {
      id: "chemhl-u1-dblock",
      title: "Properties of first-row d-block elements",
      skill:
        "Explain why transition metals show variable oxidation states, form coloured compounds, act as catalysts and form complex ions.",
      lesson: {
        sections: [
          {
            heading: "Why transition metals are special",
            body: "In the first-row d-block, the $4s$ and $3d$ subshells have very similar energies. This means transition metals can lose electrons from both subshells, giving a range of oxidation states — e.g. Mn shows $+2$ to $+7$. The similar energies also allow d electrons to participate in bonding, making the metals hard, dense, high-melting and excellent conductors of heat and electricity.",
          },
          {
            heading: "Catalysis and complex formation",
            body: "Transition metals and their compounds are effective catalysts because they can adopt variable oxidation states and provide surfaces or ions that bind and activate reactants. Their ions readily accept lone pairs from ligands (water, ammonia, chloride, cyanide) to form coordination complexes — this is why aqueous transition metal solutions are coloured and why ligands can be substituted in reactions.",
          },
          {
            heading: "Oxidation states and compounds",
            body: "Common oxidation states include $+2$ and $+3$ for most of the series; higher states appear toward the middle (Mn $+7$ in permanganate, Cr $+6$ in dichromate). The stability of a given state depends on the metal's position — earlier metals favour lower states, later metals higher ones. Many transition metal compounds are coloured because of d-d transitions, and several oxides and hydroxides are amphoteric.",
          },
        ],
        keyFormulas: [
          {
            name: "Variable oxidation states",
            statement:
              "Similar $4s$ and $3d$ energies let transition metals lose different numbers of electrons, e.g. Fe $+2/+3$, Mn $+2$ to $+7$.",
          },
          {
            name: "Coordination number",
            statement:
              "The number of ligand donor atoms bonded to the central metal ion; common values are 4 and 6.",
          },
          {
            name: "Catalysis",
            statement:
              "Variable oxidation states let transition metals cycle between states, providing an alternative reaction pathway.",
          },
        ],
        workedExample: {
          problem:
            "Iron forms both Fe$^{2+}$ and Fe$^{3+}$ ions. Explain why iron can show these two oxidation states using electron configuration arguments.",
          solution:
            "Fe is $[Ar]\\,4s^2 3d^6$. The $4s$ electrons are removed first, and then one or more $3d$ electrons can also be removed because $4s$ and $3d$ energies are similar. Losing two electrons gives Fe$^{2+}$ ($3d^6$); losing a third gives Fe$^{3+}$ ($3d^5$), which has a stable half-filled subshell.",
        },
      },
      questions: [
        {
          id: "chemhl-u1-dblock-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Transition metals can show variable oxidation states mainly because:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Their $(n-1)d$ and $ns$ subshells have similar energies, so different numbers of electrons can be lost",
              },
              { id: "b", text: "They have no d electrons" },
              { id: "c", text: "They are all gases at room temperature" },
              { id: "d", text: "Their atoms are very small" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Variable oxidation states",
                statement:
                  "Similar $4s$/$3d$ energies let transition metals lose electrons from either subshell.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The near-degeneracy of $4s$ and $3d$ allows variable electron loss.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** Similar $4s$ and $3d$ subshell energies",
            commonErrors: [
              "Attributing variable oxidation states to 'many valence electrons' without the energy argument.",
            ],
          },
        },
        {
          id: "chemhl-u1-dblock-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A solution of a transition metal ion is deep blue. When ammonia solution is added, the colour changes to a different shade of blue. Explain both observations in terms of ligands and d-d transitions.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "d-d transition",
                statement:
                  "Promotion of a d electron between split d orbitals absorbs visible light, producing colour.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The blue colour of the aqueous ion is due to water ligands splitting the d orbitals and absorbing orange light.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Ammonia is a stronger-field ligand than water, so it changes the splitting energy.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The different splitting absorbs a different wavelength, giving a new colour.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Colour arises from d-d transitions; changing the ligand changes the splitting and hence the absorbed wavelength and observed colour.",
            commonErrors: [
              "Saying the metal 'changes colour' — it is the complex's ligand field that changes.",
            ],
          },
        },
        {
          id: "chemhl-u1-dblock-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Explain why transition metals and their compounds are widely used as catalysts, giving two specific mechanisms by which they lower activation energy.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Catalysis by transition metals",
                statement:
                  "Variable oxidation states and vacant d orbitals let transition metals bind reactants and provide alternative pathways.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The metal can cycle between oxidation states, acting as an electron carrier during redox reactions.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Its ions/atoms provide surfaces or complexes that adsorb and activate reactant molecules.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "By stabilising the transition state or intermediates, the activation energy is lowered.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Examples include Fe in the Haber process and MnO$_2$ in H$_2$O$_2$ decomposition.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Variable oxidation states and complex-forming ability let them provide lower-energy pathways.",
            commonErrors: [
              "Saying catalysts 'are used up' — they are regenerated; they lower $E_a$ only.",
            ],
          },
        },
        {
          id: "chemhl-u1-dblock-q4",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 8,
          stem: "Hydrated copper(II) ions, $[Cu(H_2O)_6]^{2+}$, are pale blue. Adding concentrated ammonia turns the solution deep blue-violet as $[Cu(NH_3)_4(H_2O)_2]^{2+}$ forms.",
          parts: [
            {
              label: "a",
              prompt:
                "Identify the ligand in each complex and state its donor atom.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Explain why the two complexes have different colours.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Suggest why ammonia replaces water as the ligand when added in excess.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Ligand",
                statement:
                  "A species donating a lone pair to the central metal ion; H$_2$O donates via O, NH$_3$ via N.",
              },
              {
                kind: "principle",
                name: "Ligand field strength",
                statement:
                  "Stronger-field ligands cause larger d-orbital splitting, shifting the absorbed wavelength and the colour.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "In $[Cu(H_2O)_6]^{2+}$ the ligand is water, donating through oxygen.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "In $[Cu(NH_3)_4(H_2O)_2]^{2+}$ ammonia is the stronger ligand, donating through nitrogen.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Both colours arise from d-d transitions in the split d orbitals.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "b",
                reasoning:
                  "NH$_3$ is a stronger-field ligand than H$_2$O, producing a larger splitting.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "b",
                reasoning:
                  "A larger splitting absorbs higher-energy (shorter-wavelength) light, changing the colour.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "NH$_3$ forms more stable coordinate bonds with Cu$^{2+}$ than H$_2$O does.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "In excess ammonia the equilibrium shifts to the ammine complex.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Le Chatelier / mass action: high [NH$_3$] drives substitution of the weaker water ligands.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) H$_2$O via O; NH$_3$ via N. (b) Stronger ligand field → larger splitting → different absorbed colour. (c) NH$_3$ is a stronger ligand; excess shifts equilibrium to the ammine complex.",
            commonErrors: [
              "Saying the metal ion itself changes colour — the complex (ligand environment) determines it.",
            ],
          },
        },
        {
          id: "chemhl-u1-dblock-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Which of the following is a transition element?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Zinc" },
              { id: "b", text: "Iron" },
              { id: "c", text: "Calcium" },
              { id: "d", text: "Scandium" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Transition element",
                statement:
                  "A transition element forms at least one stable ion with a partially filled d subshell.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Fe$^{2+}$ ($3d^6$) and Fe$^{3+}$ ($3d^5$) both have partially filled d subshells.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Iron",
            commonErrors: [
              "Choosing zinc — Zn$^{2+}$ is $3d^{10}$ (completely filled), so Zn is often excluded from the strict definition.",
            ],
          },
        },
        {
          id: "chemhl-u1-dblock-q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "What is the oxidation state of manganese in the permanganate ion, MnO$_4^-$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "+2" },
              { id: "b", text: "+4" },
              { id: "c", text: "+7" },
              { id: "d", text: "+5" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Oxidation state calculation",
                statement:
                  "Sum of oxidation states equals the ion charge: $x + 4(-2) = -1$, so $x = +7$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Let $x$ be the Mn oxidation state: $x + 4(-2) = -1$ gives $x = +7$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (c) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** $+7$",
            commonErrors: [
              "Forgetting the overall $-1$ charge of the ion.",
            ],
          },
        },
        {
          id: "chemhl-u1-dblock-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "What is the electron configuration of the Fe$^{3+}$ ion?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$[Ar]\\,4s^2 3d^3$" },
              { id: "b", text: "$[Ar]\\,4s^1 3d^4$" },
              { id: "c", text: "$[Ar]\\,3d^5$" },
              { id: "d", text: "$[Ar]\\,4s^2 3d^4$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Ionization removes $4s$ first",
                statement:
                  "Fe is $[Ar]\\,4s^2 3d^6$; Fe$^{3+}$ loses all $4s$ electrons plus one $3d$ electron, giving $[Ar]\\,3d^5$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Remove two $4s$ electrons and one $3d$ electron from Fe's configuration.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (c) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** $[Ar]\\,3d^5$",
            commonErrors: [
              "Leaving $4s$ electrons in the ion — they are always removed first.",
            ],
          },
        },
        {
          id: "chemhl-u1-dblock-q8",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "What is the oxidation state of chromium in the dichromate ion, Cr$_2$O$_7^{2-}$?",
          response: {
            type: "numeric",
            parts: [{ label: "Oxidation state", answer: 6 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Oxidation state calculation",
                statement:
                  "$2x + 7(-2) = -2$, so $x = +6$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Set up the charge balance for two Cr atoms and seven oxygen atoms.",
                working: "2x - 14 = -2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Solve: $2x = 12$, so $x = +6$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$+6$",
            commonErrors: [
              "Using only one Cr atom in the calculation.",
            ],
          },
        },
        {
          id: "chemhl-u1-dblock-q9",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Calculate the number of d electrons in the Fe$^{3+}$ ion.",
          response: {
            type: "numeric",
            parts: [
              { label: "d electrons", answer: 5 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Transition metal ion config",
                statement:
                  "Fe$^{3+}$ is $[Ar]\\,3d^5$ — the $4s$ electrons are removed first, then one $3d$ electron.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Fe is $[Ar]\\,4s^2 3d^6$; removing three electrons gives $3d^5$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The half-filled $3d^5$ configuration is particularly stable.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Answer is $5$ d electrons.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$5$ d electrons",
            commonErrors: [
              "Counting the $4s$ electrons as d electrons, or forgetting that $4s$ is emptied first.",
            ],
          },
        },
        {
          id: "chemhl-u1-dblock-q10",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Calculate the number of d electrons in the Ni$^{2+}$ ion.",
          response: {
            type: "numeric",
            parts: [
              { label: "d electrons", answer: 8 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Transition metal ion config",
                statement:
                  "Ni is $[Ar]\\,4s^2 3d^8$; Ni$^{2+}$ loses the two $4s$ electrons, leaving $3d^8$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Remove the two $4s$ electrons to form Ni$^{2+}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The remaining configuration is $[Ar]\\,3d^8$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Answer is $8$ d electrons.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$8$ d electrons",
            commonErrors: [
              "Writing Ni$^{2+}$ as $4s^1 3d^9$ — $4s$ is always emptied before $3d$.",
            ],
          },
        },
        {
          id: "chemhl-u1-dblock-q11",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Determine the oxidation state of vanadium in the VO$_2^+$ ion and of chromium in the CrO$_4^{2-}$ ion.",
          response: {
            type: "numeric",
            parts: [
              { label: "V in VO$_2^+$", answer: 5 },
              { label: "Cr in CrO$_4^{2-}$", answer: 6 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Oxidation state calculation",
                statement:
                  "Oxidation states sum to the overall ion charge, with oxygen as $-2$.",
              },
            ],
            steps: [
              {
                part: "V in VO$_2^+$",
                reasoning:
                  "Set up the charge balance: $x + 2(-2) = +1$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "V in VO$_2^+$",
                reasoning: "Solve: $x = +5$.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "Cr in CrO$_4^{2-}$",
                reasoning:
                  "Set up the charge balance: $y + 4(-2) = -2$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "Cr in CrO$_4^{2-}$",
                reasoning: "Solve: $y = +6$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "V is $+5$ in VO$_2^+$; Cr is $+6$ in CrO$_4^{2-}$.",
            commonErrors: [
              "Ignoring the sign of the ion charge when solving for $x$.",
            ],
          },
        },
        {
          id: "chemhl-u1-dblock-q12",
          difficulty: "foundation",
          paper: "2",
          totalMarks: 5,
          stem: "Explain why first-row transition metals show variable oxidation states, using electron configuration arguments.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Variable oxidation states",
                statement:
                  "The $4s$ and $3d$ subshells have similar energies, so transition metals can lose different numbers of electrons.",
              },
            ],
            steps: [
              {
                reasoning:
                  "In the first-row d-block the $4s$ and $3d$ orbitals are close in energy.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Electrons can be removed from either subshell, giving several possible oxidation states.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "For example, Fe can lose two electrons ($4s^2$) to give Fe$^{2+}$ or three to give Fe$^{3+}$.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Mn shows the widest range, from $+2$ to $+7$, as electrons are removed from both $4s$ and all five $3d$ orbitals.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "The similar subshell energies are the fundamental reason for this property.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer:
              "Similar $4s$/$3d$ energies let transition metals lose variable numbers of electrons, giving multiple oxidation states.",
            commonErrors: [
              "Saying 'many valence electrons' without explaining the energy degeneracy.",
            ],
          },
        },
        {
          id: "chemhl-u1-dblock-q13",
          difficulty: "core",
          paper: "2",
          totalMarks: 6,
          stem: "Explain two mechanisms by which transition metals and their compounds act as catalysts, giving a specific industrial or biological example for each.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Transition metal catalysis",
                statement:
                  "Variable oxidation states and vacant d orbitals let transition metals provide alternative low-energy pathways.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The metal can cycle between oxidation states, shuttling electrons between reactants in redox reactions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Example: Fe in the Haber process cycles between oxidation states to activate N$_2$ and H$_2$.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "The metal ion/atom provides vacant d orbitals or a surface that binds and activates reactant molecules.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Example: MnO$_2$ catalyses the decomposition of H$_2$O$_2$ by providing a surface for the reaction.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "By stabilising intermediates or the transition state, the activation energy is lowered.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "The catalyst is regenerated unchanged at the end of the reaction.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer:
              "Redox cycling between oxidation states and surface/complex binding of reactants both lower $E_a$ (e.g. Fe in Haber, MnO$_2$ in H$_2$O$_2$ decomposition).",
            commonErrors: [
              "Saying the catalyst is consumed or that it changes the position of equilibrium.",
            ],
          },
        },
        {
          id: "chemhl-u1-dblock-q14",
          difficulty: "core",
          paper: "2",
          totalMarks: 6,
          stem: "Explain why aqueous solutions of most transition metal ions are coloured, and why some transition metal compounds are not coloured.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Colour in transition compounds",
                statement:
                  "Ligands split the d orbitals; d-d transitions absorb visible light, producing colour.",
              },
            ],
            steps: [
              {
                reasoning:
                  "In a complex, the ligand field splits the five degenerate d orbitals into two sets.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "A d-d transition promotes an electron between the split levels, absorbing a photon of visible light.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The transmitted/reflected light is the complement of the absorbed colour — the observed colour.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Compounds are colourless when there are no d-d transitions possible — e.g. d$^{10}$ ions like Zn$^{2+}$ have a full subshell.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "d$^0$ ions (e.g. Ti$^{4+}$, Sc$^{3+}$) also lack d electrons to promote, so they are colourless.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Both conditions — partially filled d subshell and ligand field — are needed for colour.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer:
              "Partially filled d orbitals split by ligands allow d-d transitions absorbing visible light; d$^0$ and d$^{10}$ ions are colourless.",
            commonErrors: [
              "Saying all transition metal compounds are coloured — d$^0$ and d$^{10}$ cases are exceptions.",
            ],
          },
        },
        {
          id: "chemhl-u1-dblock-q15",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 9,
          stem: "Iron forms the ions Fe$^{2+}$ and Fe$^{3+}$, both of which are common in aqueous solution.",
          parts: [
            {
              label: "a",
              prompt:
                "Write the electron configurations of Fe, Fe$^{2+}$ and Fe$^{3+}$.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "Explain why both ions are coloured in aqueous solution.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Fe$^{3+}$ can be reduced to Fe$^{2+}$ by iodide ions. Explain how the variable oxidation states of iron make this redox reaction possible.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Variable oxidation states and colour",
                statement:
                  "Similar $4s$/$3d$ energies give multiple oxidation states; partially filled d orbitals in complexes give colour.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Fe is $[Ar]\\,4s^2 3d^6$.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "a",
                reasoning: "Fe$^{2+}$ loses the two $4s$ electrons: $[Ar]\\,3d^6$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Fe$^{3+}$ loses two $4s$ and one $3d$ electron: $[Ar]\\,3d^5$ (half-filled, stable).",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Both ions have partially filled $3d$ subshells ($3d^6$ and $3d^5$).",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Water ligands split the d orbitals, allowing d-d transitions that absorb visible light.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "The complementary colours are observed — Fe$^{2+}$ pale green, Fe$^{3+}$ yellow/brown.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Fe$^{3+}$ can gain an electron to become Fe$^{2+}$ because both oxidation states are stable.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "The similar $4s$/$3d$ energies allow iron to exist in several oxidation states, so it can act as an oxidising agent.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Iodide is oxidised to iodine while Fe$^{3+}$ is reduced — a typical transition-metal redox reaction.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Fe $[Ar]4s^2 3d^6$; Fe$^{2+}$ $[Ar]3d^6$; Fe$^{3+}$ $[Ar]3d^5$. (b) Partially filled d orbitals split by H$_2$O give d-d transitions. (c) Stable $+2/+3$ states let Fe$^{3+}$ oxidise I$^-$.",
            commonErrors: [
              "Writing Fe$^{2+}$ as $4s^1 3d^6$ — $4s$ is emptied first.",
            ],
          },
        },
        {
          id: "chemhl-u1-dblock-q16",
          difficulty: "core",
          paper: "2",
          totalMarks: 6,
          stem: "Transition metals are hard, dense, have high melting points and are good conductors of heat and electricity. Explain these properties in terms of metallic bonding and electron configuration.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Metallic bonding in d-block",
                statement:
                  "Delocalised $4s$ and $3d$ electrons and strong metallic bonding give typical transition-metal physical properties.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Transition metal atoms have many delocalised electrons ($4s$ and $3d$) free to move through the lattice.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "These delocalised electrons conduct heat and electricity well.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Strong metallic bonding between the metal cations and the electron 'sea' requires a lot of energy to overcome.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "This gives high melting points and hardness — the atoms are held tightly together.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "The d-block elements are also densely packed because of their relatively small atomic radii for their mass.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Together these properties make transition metals useful structural and catalytic materials.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer:
              "Delocalised d/ s electrons give conductivity; strong metallic bonding gives hardness, high mp and density.",
            commonErrors: [
              "Attributing the properties to covalent bonding — it is metallic bonding throughout.",
            ],
          },
        },
      ],
    },
    {
      id: "chemhl-u1-coloured-complexes",
      title: "Crystal field splitting and colour",
      skill:
        "Describe how ligand fields split d orbitals, relate splitting energy to absorbed wavelength and observed colour, and compare strong- and weak-field ligands.",
      lesson: {
        sections: [
          {
            heading: "The crystal field",
            body: "In a free transition metal ion all five d orbitals are degenerate (equal energy). When ligands surround the ion they create an electrostatic field — the crystal field — that splits the d orbitals into a lower-energy set and a higher-energy set. For octahedral complexes the $t_{2g}$ set ($d_{xy}, d_{xz}, d_{yz}$) is lower and the $e_g$ set ($d_{z^2}, d_{x^2-y^2}$) is higher; the energy gap is $\\Delta_o$. Different ligands produce different $\\Delta_o$: the spectrochemical series runs I$^-$ < Br$^-$ < Cl$^-$ < F$^-$ < H$_2$O < NH$_3$ < en < CN$^-$ < CO, with CN$^-$ and CO strongest.",
          },
          {
            heading: "From splitting to colour",
            body: "A d-d transition promotes an electron from a lower to a higher d orbital, absorbing a photon of energy $\\Delta_o = hf = \\frac{hc}{\\lambda}$. The colour seen is the complement of the absorbed wavelength: a complex absorbing orange light appears blue. Strong-field ligands give large $\\Delta_o$ (absorb high-energy/blue-violet light → appear yellow/red); weak-field ligands give small $\\Delta_o$ (absorb red/orange → appear blue/green).",
          },
          {
            heading: "Spin states",
            body: "If $\\Delta_o$ is large compared with the electron-pairing energy, electrons pair up in the lower orbitals before occupying the higher set — a low-spin complex. If $\\Delta_o$ is small, electrons spread singly across all d orbitals first — a high-spin complex. Spin state affects magnetism: low-spin complexes are often diamagnetic or weakly paramagnetic, high-spin ones strongly paramagnetic.",
          },
        ],
        keyFormulas: [
          {
            name: "Splitting energy",
            statement:
              "$\\Delta_o = hf = \\frac{hc}{\\lambda}$; the absorbed wavelength determines the complementary observed colour.",
          },
          {
            name: "Spectrochemical series",
            statement:
              "I$^- <$ Br$^- <$ Cl$^- <$ F$^- <$ H$_2$O <$ NH$_3 <$ en <$ CN$^- <$ CO (weak to strong field).",
          },
          {
            name: "Spin state",
            statement:
              "Large $\\Delta_o$ → low spin (pairing first); small $\\Delta_o$ → high spin (spread first).",
          },
        ],
        workedExample: {
          problem:
            "A complex absorbs light of wavelength $500$ nm. Calculate the splitting energy $\\Delta_o$ in kJ mol$^{-1}$.",
          solution:
            "$\\Delta_o = \\frac{hc}{\\lambda} = \\frac{(6.626 \\times 10^{-34})(3.00 \\times 10^8)}{500 \\times 10^{-9}} = 3.98 \\times 10^{-19}$ J per photon; per mole $= 3.98 \\times 10^{-19} \\times 6.022 \\times 10^{23} = 239$ kJ mol$^{-1}$.",
        },
      },
      questions: [
        {
          id: "chemhl-u1-cc-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The colour of a transition metal complex is due to:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "d-d transitions absorbing visible light as electrons move between split d orbitals",
              },
              { id: "b", text: "Radioactive decay of the metal nucleus" },
              { id: "c", text: "Fluorescence from the ligand molecules" },
              { id: "d", text: "Reflection of all wavelengths equally" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "d-d transition",
                statement:
                  "Electron promotion between crystal-field-split d orbitals absorbs visible light.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The observed colour is the complement of the absorbed d-d transition wavelength.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** d-d transitions",
            commonErrors: [
              "Thinking the complex emits the colour it shows — it absorbs the complementary colour.",
            ],
          },
        },
        {
          id: "chemhl-u1-cc-q2",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "[Cu(H$_2$O)$_6$]$^{2+}$ is pale blue but [Cu(NH$_3$)$_4$(H$_2$O)$_2$]$^{2+}$ is deep blue-violet. Use the spectrochemical series to explain the colour change.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Spectrochemical series",
                statement:
                  "NH$_3$ is a stronger-field ligand than H$_2$O, producing a larger $\\Delta_o$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The colour difference reflects a change in the d-orbital splitting energy $\\Delta_o$.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "NH$_3$ sits above H$_2$O in the spectrochemical series, so it gives a larger splitting.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Larger $\\Delta_o$ means the complex absorbs higher-energy (shorter-wavelength) light, shifting the observed colour.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Stronger NH$_3$ field → larger $\\Delta_o$ → absorbs shorter-wavelength light → different (deeper) colour.",
            commonErrors: [
              "Saying ammonia 'adds colour' — it changes the splitting, not adds a new mechanism.",
            ],
          },
        },
        {
          id: "chemhl-u1-cc-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "A complex absorbs light of wavelength $600$ nm. (a) Calculate the energy of one mole of photons of this wavelength. (b) State whether this photon energy corresponds to a large or small $\\Delta_o$ compared with typical visible-light transitions, and predict the approximate colour of the complex.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Photon energy",
                statement:
                  "$E = \\frac{hc}{\\lambda}$ per photon; multiply by $N_A$ for molar energy.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Use $E = hc/\\lambda$ per photon then scale by Avogadro's number.",
                working:
                  "\\frac{6.626 \\times 10^{-34} \\times 3.00 \\times 10^8}{600 \\times 10^{-9}} \\times 6.022 \\times 10^{23} \\div 1000",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate.",
                working: "199.6 \\approx 200 \\text{ kJ mol}^{-1}",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "$600$ nm is orange-red light; absorbing it means the complementary colour is blue/blue-green.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "This is a typical d-d transition energy for many first-row complexes.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) $\\approx 200$ kJ mol$^{-1}$. (b) The complex appears blue (complement of orange-red absorption).",
            commonErrors: [
              "Reporting the photon energy per photon instead of per mole.",
              "Stating the absorbed colour as the observed colour — they are complementary.",
            ],
          },
        },
        {
          id: "chemhl-u1-cc-q4",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 8,
          stem: "Two Fe$^{3+}$ complexes are compared: $[Fe(H_2O)_6]^{3+}$ (weak field) and $[Fe(CN)_6]^{3-}$ (strong field).",
          parts: [
            {
              label: "a",
              prompt:
                "Place H$_2$O and CN$^-$ correctly in the spectrochemical series and state which complex has the larger $\\Delta_o$.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Explain how $\\Delta_o$ determines whether a complex is high-spin or low-spin.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Predict which complex is more likely to be strongly paramagnetic and justify your answer.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Spectrochemical series",
                statement:
                  "CN$^-$ is a much stronger-field ligand than H$_2$O.",
              },
              {
                kind: "principle",
                name: "Spin pairing",
                statement:
                  "If $\\Delta_o$ exceeds the pairing energy, electrons pair in lower orbitals (low spin); otherwise they spread out (high spin).",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "In the spectrochemical series CN$^-$ is near the strong end and H$_2$O is weaker.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Therefore $[Fe(CN)_6]^{3-}$ has the larger $\\Delta_o$.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Electrons fill the lower d orbitals first; if $\\Delta_o$ is large they pair there (low spin).",
                marks: 1,
                markCode: "R",
              },
              {
                part: "b",
                reasoning:
                  "If $\\Delta_o$ is small it costs less to promote to the higher set than to pair, giving high spin.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "b",
                reasoning:
                  "Spin state is decided by comparing $\\Delta_o$ with the electron-pairing energy.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "High-spin complexes have more unpaired electrons.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "The weak-field H$_2$O complex has smaller $\\Delta_o$, so it is high-spin with more unpaired electrons.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "More unpaired electrons means stronger paramagnetism.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) CN$^-$ stronger → larger $\\Delta_o$ in the cyano complex. (b) $\\Delta_o$ vs pairing energy decides spin. (c) The aqua complex is high-spin and more paramagnetic.",
            commonErrors: [
              "Assuming stronger field always means more unpaired electrons — it usually means fewer (low spin).",
            ],
          },
        },
        {
          id: "chemhl-u1-cc-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "In an octahedral complex, which set of d orbitals is LOWER in energy?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$e_g$ ($d_{z^2}$, $d_{x^2-y^2}$)" },
              { id: "b", text: "$t_{2g}$ ($d_{xy}$, $d_{xz}$, $d_{yz}$)" },
              { id: "c", text: "All five d orbitals remain degenerate" },
              { id: "d", text: "The $s$ and $p$ orbitals" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Octahedral splitting",
                statement:
                  "In an octahedral field the $t_{2g}$ set is lower and the $e_g$ set is higher by $\\Delta_o$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Ligands on the axes repel the $e_g$ orbitals (which point at them) more strongly.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** $t_{2g}$",
            commonErrors: [
              "Reversing the splitting — $e_g$ points directly at the ligands and is higher.",
            ],
          },
        },
        {
          id: "chemhl-u1-cc-q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Which ligand produces the LARGEST crystal field splitting $\\Delta_o$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Cl$^-$" },
              { id: "b", text: "H$_2$O" },
              { id: "c", text: "CN$^-$" },
              { id: "d", text: "F$^-$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Spectrochemical series",
                statement:
                  "I$^- <$ Br$^- <$ Cl$^- <$ F$^- <$ H$_2$O <$ NH$_3 <$ en <$ CN$^- <$ CO.",
              },
            ],
            steps: [
              {
                reasoning:
                  "CN$^-$ is near the strong-field end of the spectrochemical series.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (c) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** CN$^-$",
            commonErrors: [
              "Choosing H$_2$O because it is common — it is a weak-field ligand.",
            ],
          },
        },
        {
          id: "chemhl-u1-cc-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A transition metal complex absorbs orange light. The colour it APPEARS is approximately:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Orange" },
              { id: "b", text: "Blue" },
              { id: "c", text: "Red" },
              { id: "d", text: "Green only" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Complementary colour",
                statement:
                  "The observed colour is the complement of the absorbed wavelength.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Orange's complementary colour is blue.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Blue",
            commonErrors: [
              "Saying the complex appears orange — that is the absorbed colour, not the observed one.",
            ],
          },
        },
        {
          id: "chemhl-u1-cc-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A complex absorbs light of wavelength $450$ nm. Calculate the crystal field splitting energy $\\Delta_o$ in kJ mol$^{-1}$.",
          response: {
            type: "numeric",
            parts: [
              { label: "Splitting energy", answer: 266, tolerance: 1, unit: "kJ mol$^{-1}$" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Splitting energy",
                statement:
                  "$\\Delta_o = \\frac{hc}{\\lambda}$ per photon; multiply by $N_A$ for kJ mol$^{-1}$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Calculate the photon energy and scale to one mole.",
                working:
                  "\\frac{6.626 \\times 10^{-34} \\times 3.00 \\times 10^8}{450 \\times 10^{-9}} \\times 6.022 \\times 10^{23} \\div 1000",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate the photon energy.",
                working: "4.417 \\times 10^{-19} \\text{ J}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate the molar energy.",
                working: "266 \\text{ kJ mol}^{-1}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$266$ kJ mol$^{-1}$",
            commonErrors: [
              "Forgetting to convert nm to m in the wavelength.",
              "Reporting the per-photon energy instead of the molar value.",
            ],
          },
        },
        {
          id: "chemhl-u1-cc-q9",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "A complex has a crystal field splitting energy of $200$ kJ mol$^{-1}$. Calculate the wavelength of light absorbed in the d-d transition.",
          response: {
            type: "numeric",
            parts: [
              { label: "Wavelength", answer: 599, tolerance: 2, unit: "nm" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Photon energy",
                statement:
                  "$\\Delta_o = \\frac{hc}{\\lambda}$; rearrange to $\\lambda = \\frac{hc}{\\Delta_o}$ using per-photon energy.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Convert the molar splitting energy to a per-photon energy.",
                working:
                  "\\frac{200 \\times 10^3}{6.022 \\times 10^{23}} = 3.32 \\times 10^{-19} \\text{ J}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Rearrange $E = hc/\\lambda$ to find the wavelength.",
                working:
                  "\\lambda = \\frac{6.626 \\times 10^{-34} \\times 3.00 \\times 10^8}{3.32 \\times 10^{-19}}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate in metres and convert to nm.",
                working: "5.99 \\times 10^{-7} \\text{ m} = 599 \\text{ nm}",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "$599$ nm is orange light, so the complex would appear blue.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "$599$ nm",
            commonErrors: [
              "Forgetting to divide by Avogadro's number before using $E = hc/\\lambda$.",
            ],
          },
        },
        {
          id: "chemhl-u1-cc-q10",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Calculate the energy, in kJ mol$^{-1}$, of photons of wavelength $400$ nm and of photons of wavelength $700$ nm, and hence the difference between them.",
          response: {
            type: "numeric",
            parts: [
              { label: "400 nm photons", answer: 299, tolerance: 1, unit: "kJ mol$^{-1}$" },
              { label: "700 nm photons", answer: 103, tolerance: 1, unit: "kJ mol$^{-1}$" },
              { label: "Difference", answer: 196, tolerance: 1, unit: "kJ mol$^{-1}$" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Photon energy",
                statement:
                  "$E = \\frac{hc}{\\lambda}$ per photon; multiply by $N_A$ for kJ mol$^{-1}$.",
              },
            ],
            steps: [
              {
                part: "400 nm photons",
                reasoning:
                  "Calculate molar photon energy at $400$ nm.",
                working:
                  "\\frac{6.626 \\times 10^{-34} \\times 3.00 \\times 10^8}{400 \\times 10^{-9}} \\times 6.022 \\times 10^{23} \\div 1000",
                marks: 1,
                markCode: "M",
              },
              {
                part: "400 nm photons",
                reasoning: "Evaluate.",
                working: "299",
                marks: 1,
                markCode: "A",
              },
              {
                part: "700 nm photons",
                reasoning:
                  "Calculate molar photon energy at $700$ nm.",
                working:
                  "\\frac{6.626 \\times 10^{-34} \\times 3.00 \\times 10^8}{700 \\times 10^{-9}} \\times 6.022 \\times 10^{23} \\div 1000",
                marks: 1,
                markCode: "M",
              },
              {
                part: "700 nm photons",
                reasoning: "Evaluate and find the difference.",
                working: "103;\\quad 299 - 103 = 196",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "$400$ nm: $299$ kJ mol$^{-1}$; $700$ nm: $103$ kJ mol$^{-1}$; difference $196$ kJ mol$^{-1}$.",
            commonErrors: [
              "Reporting the difference with the wrong sign — shorter wavelength means higher energy.",
            ],
          },
        },
        {
          id: "chemhl-u1-cc-q11",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "How many d orbitals does a transition metal ion possess before ligand splitting?",
          response: {
            type: "numeric",
            parts: [{ label: "d orbitals", answer: 5 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "d subshell",
                statement:
                  "The d subshell contains five orbitals ($l = 2$, giving $2l+1 = 5$ orbitals).",
              },
            ],
            steps: [
              {
                reasoning:
                  "A subshell of angular momentum $l$ has $2l+1$ orbitals; for $d$, $l = 2$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Answer is $5$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$5$ orbitals",
            commonErrors: [
              "Answering 10 — that is the electron capacity, not the number of orbitals.",
            ],
          },
        },
        {
          id: "chemhl-u1-cc-q12",
          difficulty: "foundation",
          paper: "2",
          totalMarks: 5,
          stem: "Explain how ligands split the d orbitals in an octahedral complex, naming the resulting sets and their relative energies.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Crystal field splitting",
                statement:
                  "Ligand negative charges/ dipoles repel d electrons; orbitals pointing at ligands are destabilised more.",
              },
            ],
            steps: [
              {
                reasoning:
                  "In an isolated ion all five d orbitals are degenerate (equal energy).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Approaching ligands create an electrostatic field that interacts differently with each d orbital.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "In an octahedral field the $e_g$ orbitals ($d_{z^2}$, $d_{x^2-y^2}$) point along the axes toward the ligands and are raised in energy.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The $t_{2g}$ orbitals ($d_{xy}$, $d_{xz}$, $d_{yz}$) point between the axes and are lowered.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "The energy gap between the sets is the splitting energy $\\Delta_o$.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer:
              "Octahedral ligands split d orbitals into lower $t_{2g}$ and higher $e_g$ sets separated by $\\Delta_o$.",
            commonErrors: [
              "Saying all d orbitals remain degenerate — the whole point is that the field splits them.",
            ],
          },
        },
        {
          id: "chemhl-u1-cc-q13",
          difficulty: "core",
          paper: "2",
          totalMarks: 6,
          stem: "Explain why a complex that absorbs blue-violet light appears yellow, and why changing the ligand from H$_2$O to CN$^-$ changes the observed colour.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Complementary colour",
                statement:
                  "The observed colour is the complement of the absorbed d-d transition wavelength.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The complex absorbs a photon matching its d-d transition energy, removing that colour from the transmitted light.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Blue-violet's complementary colour is yellow, so the complex appears yellow.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "CN$^-$ is a much stronger-field ligand than H$_2$O in the spectrochemical series.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "A stronger field produces a larger $\\Delta_o$, so the d-d transition absorbs higher-energy (shorter-wavelength) light.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The different absorbed wavelength means a different complementary colour is observed.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Thus ligand identity controls colour through the magnitude of the crystal field splitting.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer:
              "Absorbing blue-violet leaves yellow; CN$^-$ gives larger $\\Delta_o$, shifting the absorbed wavelength and hence the colour.",
            commonErrors: [
              "Identifying the absorbed colour as the observed colour — they are complementary.",
            ],
          },
        },
        {
          id: "chemhl-u1-cc-q14",
          difficulty: "core",
          paper: "2",
          totalMarks: 6,
          stem: "Explain how the size of $\\Delta_o$ relative to the electron-pairing energy determines whether a complex is high-spin or low-spin, and how this affects its magnetism.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Spin state",
                statement:
                  "If $\\Delta_o$ exceeds the pairing energy, electrons pair in lower orbitals (low spin); otherwise they spread out first (high spin).",
              },
            ],
            steps: [
              {
                reasoning:
                  "Electrons always fill the lower-energy orbitals first, but whether they pair depends on the energy cost.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "If $\\Delta_o$ is large (strong field), it costs less to pair in the lower set than to promote to the higher set — low spin.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "If $\\Delta_o$ is small (weak field), promotion to the higher orbitals is cheaper than pairing — high spin.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "High-spin complexes have more unpaired electrons than their low-spin counterparts.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "More unpaired electrons means stronger paramagnetism — attraction to a magnetic field.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Some low-spin complexes have all electrons paired and are diamagnetic.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer:
              "Large $\\Delta_o$ → low spin (paired, weakly paramagnetic or diamagnetic); small $\\Delta_o$ → high spin (unpaired, strongly paramagnetic).",
            commonErrors: [
              "Saying strong field always means more unpaired electrons — it means fewer.",
            ],
          },
        },
        {
          id: "chemhl-u1-cc-q15",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 9,
          stem: "Two cobalt(III) complexes are compared: $[CoF_6]^{3-}$ (weak field) and $[Co(CN)_6]^{3-}$ (strong field).",
          parts: [
            {
              label: "a",
              prompt:
                "Place F$^-$ and CN$^-$ correctly in the spectrochemical series.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Predict whether each complex is high-spin or low-spin and justify your answer.",
              marks: 4,
            },
            {
              label: "c",
              prompt:
                "State which complex is coloured more intensely / predict a difference in magnetic behaviour, and explain.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Spectrochemical series and spin",
                statement:
                  "F$^-$ is weak field, CN$^-$ is strong field; $\\Delta_o$ vs pairing energy decides spin state.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "In the spectrochemical series, halides are weak-field ligands: I$^- <$ Br$^- <$ Cl$^- <$ F$^-$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "CN$^-$ is near the strong end, after NH$_3$ and en.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "F$^-$ gives a small $\\Delta_o$, so promotion to higher orbitals costs less than pairing — high spin.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "CN$^-$ gives a large $\\Delta_o$, so electrons pair in the lower $t_{2g}$ set before occupying $e_g$ — low spin.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Co$^{3+}$ is $d^6$: high-spin gives 4 unpaired electrons, low-spin gives 0.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "The spin state is decided by comparing $\\Delta_o$ with the electron-pairing energy.",
                marks: 1,
                markCode: "B",
              },
              {
                part: "c",
                reasoning:
                  "The high-spin fluoro complex has unpaired electrons and is paramagnetic; the low-spin cyano complex is diamagnetic.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Different $\\Delta_o$ values also shift the d-d transition wavelength, giving different colours.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "The strong-field complex absorbs at higher energy, so its colour differs from the weak-field one.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) F$^-$ weak, CN$^-$ strong. (b) $[CoF_6]^{3-}$ high-spin (4 unpaired); $[Co(CN)_6]^{3-}$ low-spin (0 unpaired). (c) Fluoro paramagnetic, cyano diamagnetic; colours differ via $\\Delta_o$.",
            commonErrors: [
              "Predicting both complexes have the same spin state — the ligand field strength differs.",
            ],
          },
        },
        {
          id: "chemhl-u1-cc-q16",
          difficulty: "foundation",
          paper: "2",
          totalMarks: 5,
          stem: "Explain why the Zn$^{2+}$ ion and its complexes are typically colourless, whereas Cu$^{2+}$ complexes are coloured.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "d-d transitions require partially filled d orbitals",
                statement:
                  "Colour requires promoting an electron between split d orbitals; a full or empty d subshell has no such transition.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Zn is $[Ar]\\,4s^2 3d^{10}$; Zn$^{2+}$ loses the $4s$ electrons leaving $3d^{10}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "A completely filled d subshell has no vacant orbital for an electron to be promoted into within the d set — no d-d transition.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Cu is $[Ar]\\,4s^1 3d^{10}$; Cu$^{2+}$ loses both $s$ electrons and one $d$ electron, leaving $3d^9$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The partially filled $3d^9$ subshell allows d-d transitions that absorb visible light, giving colour.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "This is why d$^{10}$ ions (Zn$^{2+}$, Cd$^{2+}$) are colourless while most other transition metal ions are coloured.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer:
              "Zn$^{2+}$ is d$^{10}$ (full, no d-d transition → colourless); Cu$^{2+}$ is d$^9$ (partially filled → coloured).",
            commonErrors: [
              "Saying Zn$^{2+}$ has no d electrons — it has ten, but the subshell is full.",
            ],
          },
        },
      ],
    },
  ],
};
