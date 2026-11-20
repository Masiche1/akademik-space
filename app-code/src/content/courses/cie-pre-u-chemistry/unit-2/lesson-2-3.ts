import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "cipuc-u2-lesson-2-3",
  code: "2-3",
  title: "Transition Metals, Complexes and Analysis",
  goal: "I CAN explain d-block properties, ligand substitution and qualitative analysis at Pre-U standard.",
  standards: ["Cambridge Pre-U Chemistry 9791", "Inorganic chemistry"],
  vocabulary: [
    {
      term: "Transition metal",
      definition:
        "d-block element forming ions with partially filled d orbitals — shows variable oxidation states and coloured compounds.",
    },
    {
      term: "Ligand",
      definition:
        "Electron-pair donor bonded to metal ion in a complex — e.g. H₂O, NH₃, Cl⁻, CN⁻.",
    },
    {
      term: "Coordination number",
      definition:
        "Number of ligand donor atoms attached to the central metal ion — commonly 4 or 6.",
    },
    {
      term: "Complex ion",
      definition:
        "Metal ion surrounded by ligands — e.g. [Cu(H₂O)₆]²⁺, [Fe(CN)₆]⁴⁻.",
    },
    {
      term: "Qualitative analysis",
      definition:
        "Systematic tests to identify ions — flame tests, precipitation, complex formation.",
    },
    {
      term: "Disproportionation",
      definition:
        "Same element oxidised and reduced in one reaction — e.g. Cl₂ + OH⁻ → Cl⁻ + ClO⁻.",
    },
  ],
  concepts: [
    {
      id: "cipuc-u2-s1-inorganic",
      title: "Transition metals and analysis",
      skill:
        "Explain d-block trends, describe complex chemistry and qualitative tests.",
      lesson: {
        sections: [
          {
            heading: "d-block properties",
            body: "Transition metals (groups 3–12) have: variable oxidation states (e.g. Fe²⁺/Fe³⁺, Mn²⁺–Mn⁷⁺), coloured ions (partially filled d orbitals absorb visible light), catalytic activity (Fe in Haber, V₂O₅ in Contact, Pt in Ostwald, Ni in hydrogenation), formation of complex ions, and paramagnetism (unpaired d electrons). Across a period, atomic radius stays similar; ionisation energies rise slowly; density and melting points peak mid-series. Down a group, higher oxidation states become less stable (e.g. Mn(VII) strong oxidiser, Cr(VI) toxic).",
          },
          {
            heading: "Complex ions and ligand substitution",
            body: "Ligands donate electron pairs to metal ions — common ligands: H₂O, NH₃, Cl⁻, CN⁻, CO. Coordination number usually 4 (tetrahedral/square planar) or 6 (octahedral). Naming: [Cu(H₂O)₆]²⁺ = hexaaquacopper(II). **Ligand substitution**: one ligand replaced by another — e.g. [Cu(H₂O)₆]²⁺ + 4NH₃ → [Cu(NH₃)₄(H₂O)₂]²⁺ + 4H₂O (deep blue). Stability depends on ligand strength: CN⁻ > NH₃ > H₂O > Cl⁻ (spectrochemical series). Colour changes with ligand field splitting — Δ depends on ligand and geometry.",
          },
          {
            heading: "Qualitative analysis",
            body: "**Cations**: Na⁺/K⁺ flame tests (yellow/violet); NH₄⁺ with NaOH → NH₃ (turns damp red litmus blue); Fe²⁺ green→brown with OH⁻ then blood-red with SCN⁻; Fe³⁺ blood-red with SCN⁻; Cu²⁺ blue solution → blue precipitate with OH⁻ → deep blue with NH₃. **Anions**: Cl⁻/Br⁻/I⁻ with AgNO₃ → white/cream/yellow precipitates (soluble in NH₃ distinguishes); SO₄²⁻ with BaCl₂ → white precipitate insoluble in HCl; CO₃²⁻ with acid → CO₂ (limewater milky); NO₃⁻ brown ring or Devarda's alloy; halide displacement: Cl₂ displaces Br⁻/I⁻ from solutions.",
          },
        ],
        keyFormulas: [
          {
            name: "Complex naming",
            statement:
              "[ligands][metal(oxidation state)] — e.g. [Fe(CN)₆]⁴⁻ = hexacyanoferrate(II)",
          },
          {
            name: "Spectrochemical series",
            statement:
              "CN⁻ > CO > NO₂⁻ > en > NH₃ > H₂O > OH⁻ > Cl⁻ > Br⁻ > I⁻ (increasing Δ)",
          },
        ],
        workedExample: {
          problem:
            "A solution gives a blood-red colour with SCN⁻ and a blue precipitate with NaOH that dissolves in excess NH₃ giving deep blue. Identify the cation.",
          solution:
            "Blood-red SCN⁻ → Fe³⁺; blue OH⁻ precipitate dissolving in excess NH₃ → Cu²⁺. Both present? If only one: Cu²⁺ doesn't give red SCN⁻... answer depends — typically the question implies two separate tests for one ion; Fe³⁺ also gives red-brown OH⁻ precipitate. The SCN⁻ test is definitive for Fe³⁺.",
        },
      },
      questions: [
        {
          id: "cipuc-u2-inorg-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Why are transition metal compounds often coloured?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "They contain unpaired electrons that absorb light",
              },
              {
                id: "b",
                text: "They have partially filled d orbitals that absorb visible light",
              },
              { id: "c", text: "They are all radioactive" },
              { id: "d", text: "They form ionic bonds only" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "d-d transitions",
                statement:
                  "Partially filled d orbitals split in ligand field; electrons absorb visible light jumping between levels.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Colour arises from d–d transitions in the ligand field — needs partially filled d orbitals.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "b",
          },
        },
        {
          id: "cipuc-u2-inorg-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name the complex ion [Cu(NH₃)₄(H₂O)₂]²⁺.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Complex nomenclature",
                statement:
                  "Alphabetical ligands, Greek prefixes for number, metal name + oxidation state.",
              },
            ],
            steps: [
              {
                reasoning:
                  "4 NH₃ = tetraammine; 2 H₂O = diaqua; copper(II) since charge is +2.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Name: tetrammine-... correct order: diaquatetramminecopper(II)? Alphabetically ammine before aqua → tetramminediaquacopper(II).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Tetramminediaquacopper(II) ion",
          },
        },
        {
          id: "cipuc-u2-inorg-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A white precipitate forms when AgNO₃ is added to a solution, dissolving in dilute ammonia. Identify the halide ion and explain.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Halide tests",
                statement:
                  "AgCl white (soluble in dilute NH₃), AgBr cream (soluble in conc. NH₃), AgI yellow (insoluble in NH₃).",
              },
            ],
            steps: [
              {
                reasoning: "White precipitate = AgCl → chloride present.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "AgCl dissolves in dilute NH₃ forming [Ag(NH₃)₂]⁺ — distinguishing it from AgBr (needs conc. NH₃) and AgI (insoluble).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Conclusion: Cl⁻ ion confirmed.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Chloride (Cl⁻).",
          },
        },
        {
          id: "cipuc-u2-inorg-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why Fe³⁺ solutions are coloured but Zn²⁺ solutions are colourless, relating to electron configuration.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Colour and d electrons",
                statement:
                  "Colour needs partially filled d orbitals for d–d transitions; full or empty d subshells are colourless.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Fe³⁺ is d⁵ — partially filled d orbitals → d–d transitions absorb visible light → coloured.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Zn²⁺ is d¹⁰ — completely filled d subshell → no d–d transitions possible → colourless.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Similarly Sc³⁺ (d⁰) and Cu⁺ (d¹⁰) are colourless; colour depends on d-electron count and ligand field.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Variable oxidation states of transition metals give different d counts → different colours (e.g. Fe²⁺ pale green vs Fe³⁺ yellow/brown).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "d⁵ coloured vs d¹⁰ colourless.",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cipuc-u2-inorganic-notes",
      title: "Transition metals and analysis — revision notes",
      summary: "d-block trends, complexes, qualitative tests.",
      sections: [
        {
          heading: "Key skills",
          body: "For qualitative analysis, state the reagent, observation and inference for each ion. Colour questions need d-electron configuration — learn common ones: Fe²⁺ d⁶, Fe³⁺ d⁵, Cu²⁺ d⁹, Zn²⁺ d¹⁰.",
        },
        {
          heading: "Exam tips",
          body: "Complex naming: ligands alphabetical, then metal + oxidation state in Roman numerals. Spectrochemical series order matters for colour questions.",
        },
      ],
    },
  ],
};
