import type { Lesson } from "../../../types.ts";

export const lesson43: Lesson = {
  id: "chemhl-u4-lesson-4-3",
  code: "4-3",
  title: "Lewis Acids and Bases",
  goal: "I CAN apply the Lewis definition of acids and bases to explain complex formation, amphoteric behaviour and reactions beyond simple proton transfer, including the role of Lewis acids in catalysis and materials.",
  standards: ["Paper 1", "Paper 2", "AHL R3"],
  vocabulary: [
    {
      term: "Lewis acid",
      definition:
        "An electron-pair acceptor; species with an empty or incomplete orbital that can accept a lone pair, e.g. BF$_3$, AlCl$_3$, metal cations.",
    },
    {
      term: "Lewis base",
      definition:
        "An electron-pair donor; species with a lone pair available for donation, e.g. NH$_3$, H$_2$O, halide ions, ligands.",
    },
    {
      term: "Coordinate (dative) bond",
      definition:
        "A covalent bond in which both electrons come from one atom — formed when a Lewis base donates to a Lewis acid.",
    },
    {
      term: "Adduct",
      definition:
        "The product of a Lewis acid–base reaction, e.g. H$_3$N→BF$_3$ or [Cu(NH$_3$)$_4$]$^{2+}$.",
    },
    {
      term: "Incomplete octet",
      definition:
        "A central atom with fewer than 8 valence electrons, making it electron-deficient and a strong Lewis acid (e.g. B in BF$_3$, Al in AlCl$_3$).",
    },
    {
      term: "Amphoteric",
      definition:
        "A species that can act as both an acid and a base, e.g. water, Al$_2$O$_3$, HCO$_3^-$.",
    },
  ],
  concepts: [
    {
      id: "chemhl-u4-lewis-basics",
      title: "The Lewis definition of acids and bases",
      skill:
        "Identify Lewis acids and bases, explain coordinate bond formation, and relate Lewis theory to Brønsted–Lowry theory.",
      lesson: {
        sections: [
          {
            heading: "Beyond protons",
            body: "Brønsted–Lowry theory defines acids as proton donors and bases as proton acceptors — it only covers reactions involving H$^+$. Lewis theory is broader: a Lewis acid is ANY electron-pair acceptor and a Lewis base is ANY electron-pair donor. Every Brønsted acid is also a Lewis acid (H$^+$ accepts a lone pair), but many Lewis acids contain no hydrogen at all — BF$_3$, AlCl$_3$, and transition metal ions are all Lewis acids.",
          },
          {
            heading: "Why species are Lewis acidic/basic",
            body: "Lewis acids have either an incomplete octet (BF$_3$: B has 6 electrons), an empty orbital (metal cations), or a polarisable centre (CO$_2$ carbon). Lewis bases have lone pairs available for donation — NH$_3$ (N lone pair), H$_2$O (two lone pairs), halide ions, and virtually all ligands. The reaction forms a coordinate (dative) bond where both electrons come from the base.",
          },
          {
            heading: "Examples",
            body: "$BF_3 + F^- \\to BF_4^-$ (BF$_3$ accepts F$^-$'s lone pair); $AlCl_3 + Cl^- \\to AlCl_4^-$; $Cu^{2+} + 4NH_3 \\to [Cu(NH_3)_4]^{2+}$; $H^+ + NH_3 \\to NH_4^+$ (the simplest Lewis reaction — H$^+$ is a Lewis acid, NH$_3$ a Lewis base).",
          },
        ],
        keyFormulas: [
          {
            name: "Lewis acid",
            statement:
              "Electron-pair acceptor — incomplete octet, empty orbital, or electron-deficient centre.",
          },
          {
            name: "Lewis base",
            statement: "Electron-pair donor — has lone pair(s) available.",
          },
          {
            name: "Coordinate bond",
            statement: "Both bonding electrons come from the Lewis base.",
          },
        ],
        workedExample: {
          problem:
            "Classify each species as Lewis acid or Lewis base: BF$_3$, NH$_3$, Al$^{3+}$, H$_2$O, Cl$^-$, CO$_2$.",
          solution:
            "Lewis acids: BF$_3$ (incomplete octet), Al$^{3+}$ (empty orbitals), CO$_2$ (electrophilic carbon). Lewis bases: NH$_3$, H$_2$O, Cl$^-$ (all have lone pairs).",
        },
      },
      questions: [
        {
          id: "chemhl-u4-lewis-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Which of the following is a Lewis acid?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "BF$_3$" },
              { id: "b", text: "NH$_3$" },
              { id: "c", text: "H$_2$O" },
              { id: "d", text: "Cl$^-$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Lewis acid",
                statement:
                  "Electron-pair acceptor; BF$_3$ has an incomplete octet on boron.",
              },
            ],
            steps: [
              {
                reasoning:
                  "BF$_3$ accepts a lone pair to complete boron's octet — Lewis acid.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "NH$_3$, H$_2$O and Cl$^-$ have lone pairs to donate — Lewis bases.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** BF$_3$",
            commonErrors: ["Choosing NH$_3$ — it is the classic Lewis base."],
          },
        },
        {
          id: "chemhl-u4-lewis-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Explain why $BF_3 + F^- \\to BF_4^-$ is a Lewis acid–base reaction even though no H$^+$ is involved.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Lewis acid–base",
                statement:
                  "Acid = electron-pair acceptor, base = electron-pair donor; no proton needed.",
              },
            ],
            steps: [
              {
                reasoning:
                  "BF$_3$ has an incomplete octet on boron and accepts F$^-$'s lone pair.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "F$^-$ donates its lone pair — it is the Lewis base.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The coordinate bond F$_3$B←F completes boron's octet.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "BF$_3$ accepts F$^-$'s lone pair — electron-pair transfer without H$^+$.",
            commonErrors: [
              "Insisting an acid must contain H — Lewis theory is broader than Brønsted.",
            ],
          },
        },
        {
          id: "chemhl-u4-lewis-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "For each reaction identify the Lewis acid and Lewis base: (a) $Cu^{2+} + 4NH_3 \\to [Cu(NH_3)_4]^{2+}$; (b) $AlCl_3 + Cl^- \\to AlCl_4^-$; (c) $H^+ + NH_3 \\to NH_4^+$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Lewis acid/base",
                statement:
                  "Acid accepts pair; base donates pair. Metal ions and incomplete-octet species are acids; lone-pair species are bases.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Cu$^{2+}$ accepts NH$_3$ lone pairs — acid; NH$_3$ donates — base.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(b) AlCl$_3$ accepts Cl$^-$ lone pair — acid; Cl$^-$ donates — base.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(c) H$^+$ accepts NH$_3$'s lone pair — acid; NH$_3$ donates — base.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "All three involve coordinate bond formation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Cu$^{2+}$ acid, NH$_3$ base. (b) AlCl$_3$ acid, Cl$^-$ base. (c) H$^+$ acid, NH$_3$ base.",
            commonErrors: [
              "Calling the ligand/donor the Lewis acid — the acceptor is always the acid.",
            ],
          },
        },
        {
          id: "chemhl-u4-lewis-q4",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 8,
          stem: "Anhydrous aluminium chloride, AlCl$_3$, is a strong Lewis acid and is used industrially as a catalyst.",
          parts: [
            {
              label: "a",
              prompt:
                "Explain why AlCl$_3$ is a Lewis acid, referring to the electronic structure of aluminium.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Describe what happens when AlCl$_3$ dissolves in water, including the species formed.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Explain how AlCl$_3$ acts as a catalyst in Friedel–Crafts alkylation of benzene.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Lewis acid catalysis",
                statement:
                  "AlCl$_3$ accepts electron pairs, polarising substrates and generating electrophiles.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Al in AlCl$_3$ has only 6 valence electrons — incomplete octet.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "a",
                reasoning:
                  "It readily accepts a lone pair to complete the octet → strong Lewis acid.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "AlCl$_3$ accepts OH$^-$ from water → Al(OH)$_3$ + H$^+$ + Cl$^-$ (or [Al(H$_2$O)$_6$]$^{3+}$ + Cl$^-$ + HCl).",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "The hydrolysis produces acidic solution — Al$^{3+}$ is itself a Lewis acid that polarises water.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "AlCl$_3$ accepts Cl$^-$ from R–Cl to form R$^+$ carbocation + AlCl$_4^-$.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "The carbocation is a strong electrophile that attacks benzene's $\\pi$ system.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "After substitution, AlCl$_4^-$ loses Cl$^-$ to regenerate AlCl$_3$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Net effect: benzene is alkylated and AlCl$_3$ is unchanged — catalytic.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Incomplete octet on Al. (b) Hydrolyses to Al(OH)$_3$ + acid. (c) Generates carbocation electrophile, regenerated.",
            commonErrors: [
              "Saying AlCl$_3$ is 'used up' — it is regenerated and acts catalytically.",
            ],
          },
        },
        {
          id: "chemhl-u4-lewis-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Which of the following is a Lewis base?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "BF$_3$" },
              { id: "b", text: "AlCl$_3$" },
              { id: "c", text: "NH$_3$" },
              { id: "d", text: "CO$_2$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Lewis base",
                statement: "Electron-pair donor with lone pair(s) available.",
              },
            ],
            steps: [
              {
                reasoning: "NH$_3$ has a lone pair on N that it can donate.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "BF$_3$, AlCl$_3$ and CO$_2$ are electron-pair acceptors (Lewis acids).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** NH$_3$",
            commonErrors: [
              "Choosing CO$_2$ — its carbon is electrophilic and accepts electron density.",
            ],
          },
        },
        {
          id: "chemhl-u4-lewis-q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "In a coordinate (dative) bond formed between a Lewis acid and Lewis base:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Each atom contributes one electron" },
              {
                id: "b",
                text: "Both bonding electrons come from the Lewis base",
              },
              { id: "c", text: "Both electrons come from the Lewis acid" },
              { id: "d", text: "No electrons are shared" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Coordinate bond",
                statement:
                  "Both bonding electrons are donated by the Lewis base.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The base donates a lone pair; the acid accepts it into an empty orbital.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Both electrons come from the Lewis base",
            commonErrors: [
              "Describing it as a normal covalent bond — the donation is one-directional.",
            ],
          },
        },
        {
          id: "chemhl-u4-lewis-q7",
          difficulty: "foundation",
          paper: "2",
          totalMarks: 2,
          stem: "In $[Cu(NH_3)_4]^{2+}$, how many coordinate bonds are formed between Cu$^{2+}$ and the NH$_3$ ligands?",
          response: {
            type: "numeric",
            parts: [{ label: "Number of coordinate bonds", answer: 4 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Coordinate bond",
                statement:
                  "Each ligand donates one lone pair → one coordinate bond per ligand.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Each of the 4 NH$_3$ ligands donates one lone pair to Cu$^{2+}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Total coordinate bonds = 4.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "4 coordinate bonds",
            commonErrors: [
              "Counting 8 bonds (counting both N–H bonds) — only the Cu←N dative bonds count.",
            ],
          },
        },
        {
          id: "chemhl-u4-lewis-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Which species is a Lewis acid?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "H$_2$O" },
              { id: "b", text: "OH$^-$" },
              { id: "c", text: "Al$^{3+}$" },
              { id: "d", text: "Cl$^-$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Lewis acid",
                statement:
                  "Electron-pair acceptor; metal cations have empty orbitals.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Al$^{3+}$ has empty orbitals and accepts lone pairs from water/ligands.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Therefore choice (c) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** Al$^{3+}$",
            commonErrors: [
              "Choosing OH$^-$ — it donates a lone pair (Lewis base).",
            ],
          },
        },
        {
          id: "chemhl-u4-lewis-q9",
          difficulty: "foundation",
          paper: "2",
          totalMarks: 2,
          stem: "In the reaction $BF_3 + F^- \\to BF_4^-$, how many electrons does the boron atom effectively gain?",
          response: {
            type: "numeric",
            parts: [{ label: "Electrons gained", answer: 2 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Incomplete octet",
                statement:
                  "B in BF$_3$ has 6 valence electrons; accepting F$^-$'s lone pair completes the octet (8 electrons).",
              },
            ],
            steps: [
              {
                reasoning:
                  "Boron goes from 6 to 8 valence electrons — gains a share of 2 electrons.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Answer: 2 electrons.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2 electrons (octet completed)",
            commonErrors: [
              "Counting all 8 electrons as 'gained' — only the donated pair is new.",
            ],
          },
        },
        {
          id: "chemhl-u4-lewis-q10",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "For the formation of $[Ag(NH_3)_2]^+$ from Ag$^+$ and NH$_3$: (a) state how many coordinate bonds form; (b) state the total number of electrons donated by the ligands.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Coordinate bonds", answer: 2 },
              { label: "(b) Electrons donated", answer: 4 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Coordinate bond",
                statement:
                  "Each NH$_3$ donates one lone pair (2 electrons) → one coordinate bond.",
              },
            ],
            steps: [
              {
                reasoning: "Two NH$_3$ ligands → 2 coordinate bonds.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Each lone pair = 2 electrons → 2 × 2 = 4 electrons donated.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Both parts correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 2 coordinate bonds; (b) 4 electrons donated",
            commonErrors: [
              "Counting electrons donated as 2 (one per bond) — a lone pair is 2 electrons.",
            ],
          },
        },
        {
          id: "chemhl-u4-lewis-q11",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "In $[Fe(CN)_6]^{4-}$, iron is in the +2 oxidation state. (a) How many CN$^-$ ligands are present? (b) Verify that the overall charge is 4−.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Number of CN$^-$ ligands", answer: 6 },
              { label: "(b) Overall charge", answer: -4 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Complex charge",
                statement:
                  "Overall charge = metal oxidation state + sum of ligand charges.",
              },
            ],
            steps: [
              {
                reasoning: "Subscript 6 → 6 CN$^-$ ligands.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Charge = $+2 + 6(-1) = -4$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Both answers consistent with $[Fe(CN)_6]^{4-}$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) 6 CN$^-$; (b) $+2 - 6 = -4$",
            commonErrors: ["Forgetting each CN$^-$ carries −1 charge."],
          },
        },
        {
          id: "chemhl-u4-lewis-q12",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "For $Cu^{2+} + 4NH_3 \\to [Cu(NH_3)_4]^{2+}$, calculate the total number of electrons accepted by Cu$^{2+}$ through coordinate bonding (each coordinate bond delivers one lone pair).",
          response: {
            type: "numeric",
            parts: [{ label: "Electrons accepted", answer: 8 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Coordinate bond",
                statement:
                  "Each NH$_3$ donates a lone pair (2 electrons); 4 ligands → 4 coordinate bonds.",
              },
            ],
            steps: [
              {
                reasoning: "4 NH$_3$ ligands → 4 coordinate bonds.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Each bond delivers 2 electrons → $4 \\times 2 = 8$ electrons.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Answer: 8 electrons.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "8 electrons",
            commonErrors: [
              "Answering 4 — counting bonds rather than electrons (2 per bond).",
            ],
          },
        },
        {
          id: "chemhl-u4-lewis-q13",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "CO$_2$ can act as a Lewis acid because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It has lone pairs on oxygen that it donates" },
              {
                id: "b",
                text: "Its carbon atom is electron-deficient and can accept an electron pair",
              },
              { id: "c", text: "It contains no hydrogen" },
              { id: "d", text: "It is a gas" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Lewis acidity of CO$_2$",
                statement:
                  "The carbon in CO$_2$ is electrophilic and can accept electron density (e.g. from OH$^-$).",
              },
            ],
            steps: [
              {
                reasoning:
                  "CO$_2$ reacts with OH$^-$ at carbon — accepting electron density makes it a Lewis acid.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(b)** Carbon is electron-deficient and accepts an electron pair",
            commonErrors: [
              "Thinking the oxygen lone pairs make CO$_2$ a Lewis base — the molecule acts as an acceptor at carbon.",
            ],
          },
        },
        {
          id: "chemhl-u4-lewis-q14",
          difficulty: "core",
          paper: "2",
          totalMarks: 5,
          stem: "Explain, using Lewis acid–base theory, why adding excess ammonia to a blue solution of CuSO$_4$ produces a deep blue [Cu(NH$_3$)$_4$]$^{2+}$ complex.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Complex formation",
                statement:
                  "Metal cations are Lewis acids; ligands donate lone pairs to form coordinate bonds.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Cu$^{2+}$ has empty/partially filled d-orbitals and is electron-deficient → Lewis acid.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Each NH$_3$ has a lone pair on N available for donation → Lewis base.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "NH$_3$ donates lone pairs to Cu$^{2+}$ forming 4 coordinate bonds → [Cu(NH$_3$)$_4$]$^{2+}$.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "The new complex has different d-orbital splitting → absorbs different wavelengths → colour changes to deep blue.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Excess NH$_3$ drives complex formation to completion (Le Chatelier).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Cu$^{2+}$ (Lewis acid) accepts lone pairs from 4 NH$_3$ (Lewis base) → deep blue tetraamminecopper(II).",
            commonErrors: [
              "Saying ammonia 'reacts with' copper — it coordinates via lone-pair donation.",
            ],
          },
        },
        {
          id: "chemhl-u4-lewis-q15",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 8,
          stem: "Consider the reaction $H_3N \\to BF_3$ (ammonia–boron trifluoride adduct).",
          parts: [
            {
              label: "a",
              prompt:
                "Identify the Lewis acid and Lewis base and describe the bond formed.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Explain why BF$_3$ is a Lewis acid with reference to boron's electron configuration.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Compare this reaction with $H^+ + NH_3 \\to NH_4^+$ in terms of Lewis theory.",
              marks: 2,
            },
            {
              label: "d",
              prompt: "Predict the product of $BF_3 + Cl^-$ and explain.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Lewis acid/base",
                statement:
                  "Acid = electron-pair acceptor; base = electron-pair donor; bond is coordinate (dative).",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "BF$_3$ accepts the lone pair (Lewis acid); NH$_3$ donates it (Lewis base); coordinate bond N→B forms.",
                marks: 1,
                markCode: "B",
              },
              {
                part: "a",
                reasoning: "Adduct H$_3$N→BF$_3$ has a dative N→B bond.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "B in BF$_3$ has only 6 valence electrons — incomplete octet.",
                marks: 1,
                markCode: "B",
              },
              {
                part: "b",
                reasoning:
                  "It has an empty p-orbital that accepts the lone pair → strong Lewis acid.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "In both cases NH$_3$ is the Lewis base donating a lone pair.",
                marks: 1,
                markCode: "B",
              },
              {
                part: "c",
                reasoning:
                  "H$^+$ is the Lewis acid in the second reaction (accepts the pair); BF$_3$ is the acid in the first — Lewis theory covers both.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Product is BF$_4^-$ (tetrafluoroborate).",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning:
                  "Cl$^-$ donates a lone pair to electron-deficient B, completing its octet.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) BF$_3$ acid, NH$_3$ base, dative N→B bond. (b) Incomplete octet. (c) Same pattern — NH$_3$ always the base. (d) BF$_4^-$.",
            commonErrors: [
              "Reversing acid/base roles — the acceptor is always the Lewis acid.",
            ],
          },
        },
        {
          id: "chemhl-u4-lewis-q16",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "Which of the following is NOT a Lewis base?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "H$_2$O" },
              { id: "b", text: "OH$^-$" },
              { id: "c", text: "BF$_3$" },
              { id: "d", text: "Cl$^-$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Lewis base",
                statement:
                  "Electron-pair donor; BF$_3$ is an acceptor (incomplete octet).",
              },
            ],
            steps: [
              {
                reasoning:
                  "H$_2$O, OH$^-$ and Cl$^-$ all have lone pairs to donate.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "BF$_3$ accepts electron pairs — it is a Lewis acid, so (c) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** BF$_3$",
            commonErrors: [
              "The 'NOT' in the stem — check whether the question asks for acid or base.",
            ],
          },
        },
      ],
    },
    {
      id: "chemhl-u4-acid-theories",
      title: "Comparing acid–base theories and amphoteric species",
      skill:
        "Compare Arrhenius, Brønsted–Lowry and Lewis definitions, identify amphoteric species, and explain metal cation acidity in water.",
      lesson: {
        sections: [
          {
            heading: "Three theories",
            body: "Arrhenius: acid produces H$^+$ in water, base produces OH$^-$ — limited to aqueous solutions. Brønsted–Lowry: acid donates H$^+$, base accepts H$^+$ — covers proton transfer in any solvent. Lewis: acid accepts electron pair, base donates electron pair — most general, includes reactions with no H$^+$ at all. Every Arrhenius acid is a Brønsted acid; every Brønsted acid is a Lewis acid (H$^+$ is a Lewis acid).",
          },
          {
            heading: "Amphoteric species",
            body: "Some species can act as both acid and base depending on the partner. Water: accepts H$^+$ (base) from strong acids, donates H$^+$ (acid) to strong bases — this is why it has pH 7 (equal H$^+$ and OH$^-$ from autoionisation). HCO$_3^-$: accepts H$^+$ to form H$_2$CO$_3$ or donates H$^+$ to form CO$_3^{2-}$. Al$_2$O$_3$ and Al(OH)$_3$ dissolve in both acids and bases — classic amphoteric oxides/hydroxides.",
          },
          {
            heading: "Metal cation acidity",
            body: "Small, highly charged metal cations like Al$^{3+}$ and Fe$^{3+}$ are Lewis acids — they polarise coordinated water molecules, weakening the O–H bond so water donates H$^+$ more easily: $[Al(H_2O)_6]^{3+} + H_2O \\rightleftharpoons [Al(H_2O)_5(OH)]^{2+} + H_3O^+$. This is why solutions of AlCl$_3$, FeCl$_3$ and NH$_4$Cl are acidic.",
          },
        ],
        keyFormulas: [
          {
            name: "Theory hierarchy",
            statement:
              "Arrhenius ⊂ Brønsted–Lowry ⊂ Lewis (each more general than the last).",
          },
          {
            name: "Amphoteric",
            statement:
              "Can act as both acid and base — e.g. H$_2$O, HCO$_3^-$, Al(OH)$_3$.",
          },
          {
            name: "Metal cation acidity",
            statement:
              "Small highly-charged cations polarise water → acidic solution.",
          },
        ],
        workedExample: {
          problem: "Explain why a solution of FeCl$_3$ is acidic.",
          solution:
            "Fe$^{3+}$ is a Lewis acid — it accepts electron density from water molecules, polarising the O–H bonds. The coordinated water loses H$^+$ more easily, making the solution acidic: $[Fe(H_2O)_6]^{3+} + H_2O \\rightleftharpoons [Fe(H_2O)_5(OH)]^{2+} + H_3O^+$.",
        },
      },
      questions: [
        {
          id: "chemhl-u4-at-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Which statement correctly orders the acid–base theories from most to least general?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Lewis > Brønsted–Lowry > Arrhenius" },
              { id: "b", text: "Arrhenius > Brønsted–Lowry > Lewis" },
              { id: "c", text: "Brønsted–Lowry > Lewis > Arrhenius" },
              { id: "d", text: "All three are equally general" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Theory hierarchy",
                statement:
                  "Lewis includes all Brønsted acids; Brønsted includes all Arrhenius acids.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Lewis is most general (any electron-pair transfer); Arrhenius is most restrictive (H$^+$/OH$^-$ in water only).",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** Lewis > Brønsted > Arrhenius",
            commonErrors: [
              "Reversing the order — Lewis is the broadest definition.",
            ],
          },
        },
        {
          id: "chemhl-u4-at-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Explain why water is described as amphoteric, giving one example of it acting as an acid and one as a base.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Amphoteric",
                statement: "Can act as both acid and base.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Water donates H$^+$ to strong bases: H$_2$O + NH$_2^-$ → OH$^-$ + NH$_3$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Water accepts H$^+$ from strong acids: H$_2$O + HCl → H$_3$O$^+$ + Cl$^-$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It can both donate and accept protons → amphoteric.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Water donates H$^+$ to bases and accepts H$^+$ from acids → amphoteric.",
            commonErrors: [
              "Only giving one direction — amphoteric means BOTH.",
            ],
          },
        },
        {
          id: "chemhl-u4-at-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Explain why AlCl$_3$ solution in water is acidic, using Lewis acid–base theory.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Metal cation acidity",
                statement:
                  "Al$^{3+}$ is a Lewis acid that polarises coordinated water, releasing H$^+$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "AlCl$_3$ dissolves to give Al$^{3+}$ ions (hydrated as [Al(H$_2$O)$_6$]$^{3+}$).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Al$^{3+}$ is small and highly charged → strong Lewis acid.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "It polarises the O–H bonds of coordinated water, weakening them.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Water loses H$^+$ more easily → acidic solution.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Al$^{3+}$ polarises coordinated water → releases H$^+$ → acidic.",
            commonErrors: [
              "Saying 'AlCl$_3$ is acidic because it contains Cl' — Cl$^-$ is neutral; Al$^{3+}$ causes acidity.",
            ],
          },
        },
        {
          id: "chemhl-u4-at-q4",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 8,
          stem: "Consider the species H$_2$O, HCO$_3^-$, Al(OH)$_3$ and NH$_4^+$.",
          parts: [
            {
              label: "a",
              prompt:
                "Identify which are amphoteric and explain your reasoning for each.",
              marks: 4,
            },
            {
              label: "b",
              prompt:
                "For HCO$_3^-$, write equations showing it acting as both an acid and a base.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Explain why NH$_4^+$ solution is acidic using Lewis theory.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Amphoteric",
                statement: "Can donate and accept H$^+$ (or electron pairs).",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "H$_2$O: amphoteric — donates/accepts H$^+$. HCO$_3^-$: amphoteric — can go to H$_2$CO$_3$ or CO$_3^{2-}$. Al(OH)$_3$: amphoteric — dissolves in acids and bases.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "NH$_4^+$: only acidic — can donate H$^+$ but cannot accept (N has no lone pair).",
                marks: 1,
                markCode: "R",
              },
              {
                part: "a",
                reasoning: "Correct identification of all four species.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "a",
                reasoning:
                  "Reasoning links to lone pairs / proton transfer capability.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "As acid: HCO$_3^- \\to H^+ + CO_3^{2-}$ (or + H$_2$O → H$_3$O$^+$ + CO$_3^{2-}$).",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "As base: HCO$_3^- + H^+ \\to H_2$CO$_3$ (or H$_2$O + H$^+$ → H$_3$O$^+$).",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "NH$_4^+$ donates H$^+$ to water: NH$_4^+ + H_2O \\rightleftharpoons NH_3 + H_3O^+$.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "NH$_4^+$ is the conjugate acid of weak base NH$_3$ → acidic solution.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) H$_2$O, HCO$_3^-$, Al(OH)$_3$ amphoteric; NH$_4^+$ acidic only. (b) Both directions shown. (c) NH$_4^+$ donates H$^+$.",
            commonErrors: [
              "Calling NH$_4^+$ amphoteric — it cannot accept a proton.",
            ],
          },
        },
        {
          id: "chemhl-u4-at-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "According to the Arrhenius definition, a base is a substance that:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Donates a proton" },
              { id: "b", text: "Produces OH$^-$ ions in water" },
              { id: "c", text: "Accepts an electron pair" },
              { id: "d", text: "Donates an electron pair" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Arrhenius base",
                statement: "Produces OH$^-$ in aqueous solution.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Arrhenius is limited to water: acids give H$^+$, bases give OH$^-$.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Produces OH$^-$ ions in water",
            commonErrors: [
              "Choosing 'accepts electron pair' — that is the Lewis definition.",
            ],
          },
        },
        {
          id: "chemhl-u4-at-q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Which statement about the relationship between Brønsted–Lowry and Lewis theories is correct?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Every Lewis acid is a Brønsted acid" },
              { id: "b", text: "Every Brønsted acid is a Lewis acid" },
              { id: "c", text: "The two theories are identical" },
              { id: "d", text: "No Brønsted acid is a Lewis acid" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Theory hierarchy",
                statement:
                  "Brønsted acids donate H$^+$; H$^+$ accepts an electron pair → every Brønsted acid is a Lewis acid.",
              },
            ],
            steps: [
              {
                reasoning:
                  "H$^+$ accepts a lone pair, so proton donors are electron-pair acceptors.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Every Brønsted acid is a Lewis acid",
            commonErrors: [
              "Reversing — Lewis acids like BF$_3$ have no proton and are NOT Brønsted acids.",
            ],
          },
        },
        {
          id: "chemhl-u4-at-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "HCO$_3^-$ is described as amphoteric because it can:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only donate a proton" },
              { id: "b", text: "Only accept a proton" },
              { id: "c", text: "Both donate and accept a proton" },
              { id: "d", text: "Neither donate nor accept a proton" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Amphoteric",
                statement:
                  "Can act as both acid (donate H$^+$) and base (accept H$^+$).",
              },
            ],
            steps: [
              {
                reasoning:
                  "HCO$_3^- \\to H^+ + CO_3^{2-}$ (acid); HCO$_3^- + H^+ \\to H_2$CO$_3$ (base).",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Therefore choice (c) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** Both donate and accept a proton",
            commonErrors: [
              "Choosing 'only donate' — HCO$_3^-$ has no... it can also accept H$^+$ to form carbonic acid.",
            ],
          },
        },
        {
          id: "chemhl-u4-at-q8",
          difficulty: "foundation",
          paper: "2",
          totalMarks: 3,
          stem: "Calculate the $[H^+]$ in a $0.10$ M NH$_4$Cl solution ($K_a$ of NH$_4^+$ = $5.6 \\times 10^{-10}$).",
          response: {
            type: "numeric",
            parts: [
              {
                label: "$[H^+]$ / mol dm$^{-3}$",
                answer: 7.5e-6,
                tolerance: 0.1e-6,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Weak acid pH",
                statement:
                  "NH$_4^+$ is a weak acid: $[H^+] \\approx \\sqrt{K_a c}$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$[H^+] = \\sqrt{5.6\\times10^{-10} \\times 0.10} = \\sqrt{5.6\\times10^{-11}}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate the square root.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "$[H^+] \\approx 7.5 \\times 10^{-6}$ mol dm$^{-3}$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$[H^+] \\approx 7.5 \\times 10^{-6}$ mol dm$^{-3}$",
            commonErrors: [
              "Treating NH$_4$Cl as neutral — NH$_4^+$ is acidic.",
            ],
          },
        },
        {
          id: "chemhl-u4-at-q9",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Al(OH)$_3$ is amphoteric. Which observation supports this?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It dissolves in both acids and bases" },
              { id: "b", text: "It is a white solid" },
              { id: "c", text: "It contains aluminium" },
              { id: "d", text: "It forms hydrogen gas with all metals" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Amphoteric",
                statement:
                  "Species reacting with both acids and bases — Al(OH)$_3$ dissolves in HCl and NaOH.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Al(OH)$_3$ + 3HCl → AlCl$_3$ + 3H$_2$O; Al(OH)$_3$ + NaOH → Na[Al(OH)$_4$].",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** It dissolves in both acids and bases",
            commonErrors: [
              "Only citing one reaction — amphoteric requires BOTH acid and base behaviour.",
            ],
          },
        },
        {
          id: "chemhl-u4-at-q10",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "Calculate the pH of a $0.10$ M NH$_4$Cl solution ($K_a$ of NH$_4^+$ = $5.6 \\times 10^{-10}$).",
          response: {
            type: "numeric",
            parts: [{ label: "pH", answer: 5.13, tolerance: 0.02 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Weak acid pH",
                statement:
                  "$[H^+] \\approx \\sqrt{K_a c}$; $pH = -\\log[H^+]$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$[H^+] = \\sqrt{5.6\\times10^{-10} \\times 0.10} = 7.48\\times10^{-6}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$pH = -\\log(7.48\\times10^{-6})$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$pH \\approx 5.13$ — acidic, as expected.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$pH \\approx 5.13$",
            commonErrors: [
              "Answering pH > 7 — NH$_4^+$ makes the solution acidic.",
            ],
          },
        },
        {
          id: "chemhl-u4-at-q11",
          difficulty: "core",
          paper: "2",
          totalMarks: 5,
          stem: "For the reaction $HCl + NH_3 \\to NH_4Cl$, identify the acid and base under each of the three theories (Arrhenius, Brønsted–Lowry, Lewis).",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Theory hierarchy",
                statement:
                  "Arrhenius: H$^+$/OH$^-$ producers; Brønsted: H$^+$ donor/acceptor; Lewis: electron-pair acceptor/donor.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Arrhenius: HCl is the acid (produces H$^+$); NH$_3$ is not an Arrhenius base — it produces no OH$^-$ directly.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Brønsted–Lowry: HCl donates H$^+$ (acid); NH$_3$ accepts H$^+$ (base) → NH$_4^+$.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Lewis: H$^+$ (from HCl) accepts NH$_3$'s lone pair — H$^+$ is the Lewis acid, NH$_3$ the Lewis base.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "All three descriptions are consistent — this is a proton-transfer/Lewis adduct formation.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Lewis theory is the most general and covers this reaction fully.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Arrhenius: HCl acid only. Brønsted: HCl acid, NH$_3$ base. Lewis: H$^+$ acid, NH$_3$ base.",
            commonErrors: [
              "Calling NH$_3$ an Arrhenius base — it accepts a proton rather than producing OH$^-$.",
            ],
          },
        },
        {
          id: "chemhl-u4-at-q12",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "Which species is acidic but NOT amphoteric?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "H$_2$O" },
              { id: "b", text: "HCO$_3^-$" },
              { id: "c", text: "NH$_4^+$" },
              { id: "d", text: "Al(OH)$_3$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Amphoteric vs acidic",
                statement:
                  "NH$_4^+$ can donate H$^+$ but has no lone pair to accept one — acidic only.",
              },
            ],
            steps: [
              {
                reasoning:
                  "H$_2$O, HCO$_3^-$ and Al(OH)$_3$ can all act as acid and base.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "NH$_4^+$ nitrogen has no lone pair → cannot accept H$^+$ → not amphoteric.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** NH$_4^+$",
            commonErrors: [
              "Thinking any species that donates H$^+$ is amphoteric — it must also accept.",
            ],
          },
        },
        {
          id: "chemhl-u4-at-q13",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "Calculate the pH of a $0.050$ M NH$_4$Cl solution ($K_a$ of NH$_4^+$ = $5.6 \\times 10^{-10}$).",
          response: {
            type: "numeric",
            parts: [{ label: "pH", answer: 5.28, tolerance: 0.02 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Weak acid pH",
                statement:
                  "$[H^+] \\approx \\sqrt{K_a c}$; $pH = -\\log[H^+]$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$[H^+] = \\sqrt{5.6\\times10^{-10} \\times 0.050} = \\sqrt{2.8\\times10^{-11}} = 5.29\\times10^{-6}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$pH = -\\log(5.29\\times10^{-6})$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$pH \\approx 5.28$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$pH \\approx 5.28$",
            commonErrors: [
              "Doubling instead of halving the concentration effect — [H$^+$] scales as $\\sqrt{c}$.",
            ],
          },
        },
        {
          id: "chemhl-u4-at-q14",
          difficulty: "core",
          paper: "2",
          totalMarks: 5,
          stem: "Explain why an aqueous solution of NaHCO$_3$ is weakly basic, referring to the amphoteric nature of HCO$_3^-$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Amphiprotic ion",
                statement:
                  "HCO$_3^-$ can act as acid or base; the dominant direction depends on the relative Ka values.",
              },
            ],
            steps: [
              {
                reasoning:
                  "HCO$_3^-$ is the amphiprotic intermediate of carbonic acid: can donate H$^+$ (→ CO$_3^{2-}$) or accept H$^+$ (→ H$_2$CO$_3$).",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "As a base: HCO$_3^- + H_2O \\rightleftharpoons H_2$CO$_3 + OH$^-$ with $K_b = K_w/K_{a1}$.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "As an acid: HCO$_3^- + H_2O \\rightleftharpoons CO_3^{2-} + H_3O^+$ with $K_a = K_{a2}$.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Since $K_{a1} \\gg K_{a2}$, the base hydrolysis ($K_w/K_{a1}$) exceeds the acid dissociation → net basic.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "pH ≈ $\\frac{pK_{a1}+pK_{a2}}{2} \\approx 8.3$ — weakly basic.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "HCO$_3^-$ hydrolyses as a base more than it dissociates as an acid → weakly basic solution (pH ≈ 8.3).",
            commonErrors: [
              "Ignoring that HCO$_3^-$ is amphiprotic — both reactions must be compared.",
            ],
          },
        },
        {
          id: "chemhl-u4-at-q15",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 8,
          stem: "Consider the reaction $BF_3 + NH_3 \\to F_3B \\leftarrow NH_3$ and the species H$_2$O and Al$^{3+}$.",
          parts: [
            {
              label: "a",
              prompt:
                "Classify BF$_3$, NH$_3$, H$_2$O and Al$^{3+}$ as Lewis acids or Lewis bases.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "For each species, state how it would be classified under Brønsted–Lowry theory (acid, base, or neither).",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Explain which theory is needed to fully describe the BF$_3$ + NH$_3$ reaction.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Theory hierarchy",
                statement:
                  "Lewis theory covers all electron-pair transfers; Brønsted only proton transfers.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "BF$_3$ and Al$^{3+}$ are Lewis acids (electron-pair acceptors); NH$_3$ and H$_2$O are Lewis bases (donors).",
                marks: 1,
                markCode: "B",
              },
              {
                part: "a",
                reasoning: "Correct classification of all four species.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "a",
                reasoning: "H$_2$O can donate one or two lone pairs.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "NH$_3$ is a Brønsted base (accepts H$^+$); H$_2$O is both (amphoteric).",
                marks: 1,
                markCode: "B",
              },
              {
                part: "b",
                reasoning:
                  "BF$_3$ and Al$^{3+}$ are NOT Brønsted acids — they contain no transferable proton.",
                marks: 1,
                markCode: "B",
              },
              {
                part: "b",
                reasoning:
                  "Al$^{3+}$ can be considered to release H$^+$ indirectly via water, but is not itself a proton donor.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "The BF$_3$ + NH$_3$ reaction involves no proton transfer at all — only electron-pair donation.",
                marks: 1,
                markCode: "B",
              },
              {
                part: "c",
                reasoning:
                  "Only Lewis theory can describe it; Brønsted–Lowry and Arrhenius cannot.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Acids: BF$_3$, Al$^{3+}$; bases: NH$_3$, H$_2$O. (b) Only NH$_3$ and H$_2$O are Brønsted species. (c) Lewis theory required — no proton involved.",
            commonErrors: [
              "Forcing BF$_3$ into a Brønsted classification — it has no proton to donate.",
            ],
          },
        },
        {
          id: "chemhl-u4-at-q16",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "Which species is a Lewis acid but NOT a Brønsted–Lowry acid?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "HCl" },
              { id: "b", text: "BF$_3$" },
              { id: "c", text: "NH$_4^+$" },
              { id: "d", text: "HNO$_3$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Theory hierarchy",
                statement:
                  "Lewis acids without protons (BF$_3$, AlCl$_3$, metal ions) are not Brønsted acids.",
              },
            ],
            steps: [
              {
                reasoning:
                  "BF$_3$ accepts an electron pair but donates no H$^+$ — Lewis acid only.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "HCl, NH$_4^+$ and HNO$_3$ all donate protons → also Lewis acids via H$^+$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** BF$_3$",
            commonErrors: [
              "Choosing HCl — it donates H$^+$ so it IS a Brønsted acid too.",
            ],
          },
        },
      ],
    },
  ],
};
