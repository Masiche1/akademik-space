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
              { id: "a", text: "They are all radioactive" },
              { id: "b", text: "They form ionic bonds only" },
              {
                id: "c",
                text: "They have partially filled d orbitals that absorb visible light",
              },
              {
                id: "d",
                text: "They contain unpaired electrons that absorb light",
              },
            ],
            correctChoiceId: "c",
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
        {
          id: "cipuc-u2-inorg-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which species can act as a ligand in a transition metal complex?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "H₂O" },
              { id: "b", text: "He" },
              { id: "c", text: "Ne" },
              { id: "d", text: "Na⁺" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Ligand",
                statement:
                  "A ligand is an electron-pair donor bonded to a metal ion — e.g. H₂O, NH₃, Cl⁻, CN⁻.",
              },
            ],
            steps: [
              {
                reasoning:
                  "H₂O has lone pairs on oxygen that can be donated to a metal ion; the others cannot act as ligands.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "b",
          },
        },
        {
          id: "cipuc-u2-inorg-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Calculate the oxidation state of manganese in the manganate(VII) ion, MnO₄⁻.",
          response: {
            type: "numeric",
            parts: [{ label: "Oxidation state", answer: 7 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Oxidation state",
                statement: "Sum of oxidation states equals the overall charge of the ion.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$x + 4(-2) = -1$ → $x = +7$; manganese is +7 (consistent with 'manganate(VII)').",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "+7",
          },
        },
        {
          id: "cipuc-u2-inorg-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "When excess ammonia solution is added to aqueous copper(II) sulfate, the blue colour changes to deep blue. What causes this?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Precipitation of copper(II) hydroxide" },
              { id: "b", text: "Reduction of Cu²⁺ to copper metal" },
              { id: "c", text: "Formation of copper(II) oxide" },
              {
                id: "d",
                text: "Formation of the [Cu(NH₃)₄(H₂O)₂]²⁺ complex ion",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Ligand substitution",
                statement:
                  "NH₃ is a stronger ligand than H₂O, so it substitutes into the complex, changing the colour.",
              },
            ],
            steps: [
              {
                reasoning:
                  "NH₃ replaces H₂O ligands → deep-blue ammine complex [Cu(NH₃)₄(H₂O)₂]²⁺.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "a",
          },
        },
        {
          id: "cipuc-u2-inorg-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the flame test colour of potassium ions?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Yellow" },
              { id: "b", text: "Brick-red" },
              { id: "c", text: "Blue-green" },
              { id: "d", text: "Lilac (violet)" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Flame tests",
                statement:
                  "Na⁺ gives yellow, K⁺ gives lilac, Ca²⁺ gives brick-red, Cu²⁺ gives blue-green.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Potassium ions produce a lilac/violet flame; yellow would indicate sodium.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "b",
          },
        },
        {
          id: "cipuc-u2-inorg-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Calculate the oxidation state of iron in the complex ion [Fe(CN)₆]⁴⁻.",
          response: {
            type: "numeric",
            parts: [{ label: "Oxidation state", answer: 2 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Oxidation state in complexes",
                statement:
                  "Each CN⁻ carries −1; the sum of oxidation states equals the ion's charge.",
              },
            ],
            steps: [
              {
                reasoning: "$x + 6(-1) = -4$ → $x = +2$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Iron is in the +2 oxidation state → hexacyanoferrate(II).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "+2",
          },
        },
        {
          id: "cipuc-u2-inorg-q10",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how the spectrochemical series affects the colour of transition metal complex ions.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Ligand field splitting",
                statement:
                  "Ligands split the d orbitals by an amount Δ that depends on the ligand (spectrochemical series) and geometry.",
              },
            ],
            steps: [
              {
                reasoning:
                  "In a ligand field, the five d orbitals split into lower and higher energy sets separated by Δ.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Stronger field ligands (e.g. CN⁻) give a larger Δ than weaker ones (e.g. Cl⁻), so d–d transitions absorb higher-energy (shorter-wavelength) light.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The perceived colour is the complementary colour of the light absorbed, so different ligands produce different colours for the same metal ion.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Example: [Cu(H₂O)₆]²⁺ is pale blue while [Cu(NH₃)₄]²⁺ is deep blue because NH₃ lies above H₂O in the spectrochemical series.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Stronger ligand → larger Δ → different absorbed wavelength → different colour.",
          },
        },
        {
          id: "cipuc-u2-inorg-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which observation confirms the presence of ammonium ions, NH₄⁺?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Effervescence when acid is added" },
              {
                id: "b",
                text: "Ammonia gas released with NaOH that turns damp red litmus blue",
              },
              { id: "c", text: "A blue precipitate with sodium hydroxide" },
              { id: "d", text: "A blood-red colour with thiocyanate ions" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Ammonium test",
                statement:
                  "NH₄⁺ + OH⁻ → NH₃ + H₂O; NH₃ turns damp red litmus blue.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Warming with NaOH releases ammonia gas, identified by the blue colour on damp red litmus.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "b",
          },
        },
        {
          id: "cipuc-u2-inorg-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is the coordination number of copper in the complex ion [Cu(H₂O)₆]²⁺?",
          response: {
            type: "numeric",
            parts: [{ label: "Coordination number", answer: 6 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Coordination number",
                statement:
                  "Coordination number = number of ligand donor atoms attached to the metal — commonly 4 or 6.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Six H₂O ligands each donate one lone pair → coordination number 6 (octahedral).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "6",
          },
        },
        {
          id: "cipuc-u2-inorg-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which reaction is an example of disproportionation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Fe + S → FeS" },
              { id: "b", text: "H₂ + Cl₂ → 2HCl" },
              { id: "c", text: "Na + Cl₂ → NaCl" },
              {
                id: "d",
                text: "Cl₂ + cold dilute NaOH → Cl⁻ + ClO⁻",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Disproportionation",
                statement:
                  "One element is both oxidised and reduced in the same reaction.",
              },
            ],
            steps: [
              {
                reasoning:
                  "In Cl₂ + OH⁻, chlorine goes from 0 to −1 (in Cl⁻) and to +1 (in ClO⁻) — the same element in two oxidation states.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "a",
          },
        },
        {
          id: "cipuc-u2-inorg-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which aqueous ion gives a colourless solution?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Ni²⁺" },
              { id: "b", text: "Cu²⁺" },
              { id: "c", text: "Fe³⁺" },
              { id: "d", text: "Zn²⁺" },
            ],
            dorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Colour and d electrons",
                statement:
                  "Colourless ions have empty or full d subshells (d⁰ or d¹⁰) — no d–d transitions possible.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Zn²⁺ is d¹⁰ (full d subshell) → colourless; Fe³⁺ d⁵, Cu²⁺ d⁹ and Ni²⁺ d⁸ are all partially filled → coloured.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "c",
          },
        },
        {
          id: "cipuc-u2-inorg-q15",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many d electrons does the Cu²⁺ ion have? (Cu: $Z = 29$)",
          response: {
            type: "numeric",
            parts: [{ label: "d electrons", answer: 9 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Electron configuration",
                statement:
                  "Cu is [Ar] 3d¹⁰4s¹; Cu²⁺ loses the 4s electron then one 3d electron → d⁹.",
              },
            ],
            steps: [
              {
                reasoning: "Cu²⁺ has configuration [Ar] 3d⁹ → 9 d electrons.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "9",
          },
        },
        {
          id: "cipuc-u2-inorg-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A solution contains either Fe²⁺ or Fe³⁺ ions. Describe tests you would perform to identify which is present.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Cation tests",
                statement:
                  "Fe²⁺ gives a green→brown hydroxide precipitate and is oxidised by dichromate; Fe³⁺ gives blood-red with SCN⁻ and a red-brown hydroxide precipitate.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Add NaOH: Fe²⁺ gives a green precipitate that turns brown in air (oxidation to Fe³⁺); Fe³⁺ gives an immediate red-brown precipitate.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Add SCN⁻: Fe³⁺ gives a blood-red colour immediately; Fe²⁺ shows no red colour (any colour appears only after oxidation).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Add acidified potassium dichromate(VI): Fe²⁺ reduces it, turning the orange solution green; Fe³⁺ does not.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Conclusion: blood-red SCN⁻ test is definitive for Fe³⁺; green ppt turning brown plus dichromate reduction identifies Fe²⁺.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "SCN⁻ red = Fe³⁺; green→brown ppt and dichromate reduction = Fe²⁺.",
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
