import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "cipuc-u2-lesson-2-2",
  code: "2-2",
  title: "Polymers, Analysis and Environmental Chemistry",
  goal: "I CAN explain polymerisation, interpret spectra and evaluate environmental impacts at Pre-U standard.",
  standards: [
    "Cambridge Pre-U Chemistry 9791",
    "Organic and environmental chemistry",
  ],
  vocabulary: [
    {
      term: "Addition polymerisation",
      definition:
        "Monomers join without by-product — e.g. poly(ethene) from ethene, repeating –CH₂–CH₂– units.",
    },
    {
      term: "Condensation polymerisation",
      definition:
        "Monomers join releasing small molecule (H₂O or HCl) — e.g. polyesters, nylon, proteins.",
    },
    {
      term: "IR spectroscopy",
      definition:
        "Identifies functional groups by characteristic absorption frequencies — O–H ~3300, C=O ~1700 cm⁻¹.",
    },
    {
      term: "Mass spectrometry",
      definition:
        "Determines Mr from molecular ion peak; fragmentation gives structural clues.",
    },
    {
      term: "Greenhouse effect",
      definition:
        "Atmospheric gases trap IR radiation — enhanced by CO₂, CH₄, N₂O from human activity.",
    },
    {
      term: "Catalytic converter",
      definition:
        "Reduces NOₓ to N₂ and oxidises CO to CO₂ in vehicle exhaust.",
    },
  ],
  concepts: [
    {
      id: "cipuc-u2-s1-polymers",
      title: "Polymers and analysis",
      skill:
        "Describe polymerisation, interpret spectra and evaluate environmental issues.",
      lesson: {
        sections: [
          {
            heading: "Polymers",
            body: "**Addition polymers** form from C=C monomers — repeating unit is the monomer minus the π bond: poly(ethene) –[CH₂–CH₂]–, PVC –[CH₂–CHCl]–, PTFE –[CF₂–CF₂]–. Properties depend on chains: LDPE branched (flexible, packaging), HDPE linear (rigid, bottles). **Condensation polymers**: polyester (dicarboxylic acid + diol → water eliminated), nylon-6,6 (diamines + dicarboxylic acids → HCl/water), proteins (amino acids → peptide bonds + water), DNA/RNA. Biodegradable polymers (starch-based) vs persistent plastics — disposal problems: landfill, incineration (toxic emissions), recycling (sorted by resin code), and microplastics.",
          },
          {
            heading: "Spectroscopic analysis",
            body: "**Mass spectrometry**: molecular ion peak (M⁺) gives Mr; base peak is most stable fragment. Nitrogen rule: odd Mr → odd N count. **IR spectroscopy**: O–H stretch ~3200–3600 (broad for H-bonded), N–H ~3300, C=O ~1700 (sharp, strong), C–H ~2850–3000. **NMR**: ¹H chemical shift identifies environments — CH₃ ~0.9, CH₂ ~1.3, CH–O ~3.5–4.0; integration gives proton ratio; splitting (n+1 rule) reveals neighbours. Combined techniques uniquely identify unknown organic compounds.",
          },
          {
            heading: "Environmental chemistry",
            body: "Fossil fuel combustion releases CO₂ (greenhouse gas), SO₂ (→ acid rain via H₂SO₄), NOₓ (photochemical smog → O₃), CO (incomplete combustion — toxic), particulates. Mitigation: catalytic converters (2CO + 2NO → 2CO₂ + N₂), flue-gas desulphurisation (CaO + SO₂ → CaSO₃/CaSO₄), low-sulphur fuels, catalytic cracking of heavy fractions. Greenhouse effect: gases absorb outgoing IR — enhanced effect causes warming. Alternatives: biofuels (carbon-neutral in theory), hydrogen fuel cells (2H₂ + O₂ → 2H₂O), solar/wind. Ozone layer: CFCs release Cl radicals destroying O₃ — Montreal Protocol phased them out.",
          },
        ],
        keyFormulas: [
          {
            name: "Condensation polymer",
            statement:
              "$\\text{monomer}_1 + \\text{monomer}_2 \\rightarrow \\text{polymer} + \\text{small molecule}$",
          },
          {
            name: "Catalytic converter",
            statement: "$2CO + 2NO \\rightarrow 2CO_2 + N_2$",
          },
        ],
        workedExample: {
          problem:
            "Identify the functional group from IR peaks at 3300 (broad) and 1715 cm⁻¹.",
          solution:
            "Broad 3300 → O–H (alcohol or carboxylic acid); 1715 → C=O. Together → carboxylic acid (–COOH).",
        },
      },
      questions: [
        {
          id: "cipuc-u2-pol-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What small molecule is eliminated in the condensation polymerisation of a dicarboxylic acid with a diol?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Carbon dioxide" },
              { id: "b", text: "Water" },
              { id: "c", text: "Hydrogen" },
              { id: "d", text: "Oxygen" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Condensation polymerisation",
                statement:
                  "Each ester/amide bond formed eliminates one small molecule — H₂O for polyester/polyamide from –COOH + –OH/–NH₂.",
              },
            ],
            steps: [
              {
                reasoning: "–COOH + –OH → ester + H₂O.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "b",
          },
        },
        {
          id: "cipuc-u2-pol-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "An IR spectrum shows a strong sharp peak at 1720 cm⁻¹ and no peak above 3000 cm⁻¹. What functional group is present?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "IR frequencies",
                statement:
                  "C=O stretches at ~1700 cm⁻¹; O–H/N–H appear 3200–3600.",
              },
            ],
            steps: [
              {
                reasoning: "1720 cm⁻¹ is characteristic of C=O (carbonyl).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "No O–H/N–H peak → carbonyl but not acid/alcohol/amine → aldehyde or ketone.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Carbonyl (aldehyde or ketone).",
          },
        },
        {
          id: "cipuc-u2-pol-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how a catalytic converter reduces vehicle emissions.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Catalytic converter",
                statement:
                  "Pt/Rh/Pd catalyst oxidises CO to CO₂ and reduces NOₓ to N₂.",
              },
            ],
            steps: [
              {
                reasoning:
                  "CO (toxic, from incomplete combustion) is oxidised: 2CO + O₂ → 2CO₂.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "NOₓ (acid rain, smog precursor) is reduced: 2NO → N₂ + O₂ or reacts with CO.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Overall: 2CO + 2NO → 2CO₂ + N₂ — less harmful products; catalyst not consumed.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Oxidises CO, reduces NOₓ to N₂.",
          },
        },
        {
          id: "cipuc-u2-pol-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Compare addition and condensation polymerisation, giving one example of each and stating the by-product formed.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Polymerisation types",
                statement:
                  "Addition: C=C opens, no by-product. Condensation: functional groups react, small molecule eliminated.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Addition example: ethene → poly(ethene); monomers join across C=C with no by-product.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Condensation example: ethane-1,2-diol + benzene-1,4-dicarboxylic acid → polyester + water.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Condensation by-product: water (or HCl for nylon from acyl chloride + amine).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Condensation polymers have functional groups in backbone → can be hydrolysed; addition polymers are hydrocarbon chains → chemically inert.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Addition: no by-product, inert chains; condensation: eliminates H₂O/HCl, hydrolysable.",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cipuc-u2-polymers-notes",
      title: "Polymers and analysis — revision notes",
      summary: "Polymer types, spectroscopy, environmental chemistry.",
      sections: [
        {
          heading: "Key skills",
          body: "For spectra questions, match each peak to a functional group before concluding. Know the key IR frequencies: O–H ~3300, C=O ~1700, C–H ~2900.",
        },
        {
          heading: "Exam tips",
          body: "Catalytic converter equation: 2CO + 2NO → 2CO₂ + N₂ — learn it. Distinguish addition vs condensation by whether a small molecule is eliminated.",
        },
      ],
    },
  ],
};
