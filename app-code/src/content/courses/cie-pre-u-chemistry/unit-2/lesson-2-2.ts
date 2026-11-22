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
              { id: "a", text: "Hydrogen" },
              { id: "b", text: "Water" },
              { id: "c", text: "Oxygen" },
              { id: "d", text: "Carbon dioxide" },
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
        {
          id: "cipuc-u2-pol-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the monomer of poly(chloroethene), PVC?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Propyne" },
              { id: "b", text: "Chloroethene" },
              { id: "c", text: "Ethene" },
              { id: "d", text: "Ethyl chloride" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Addition polymerisation",
                statement:
                  "The repeat unit comes from a C=C monomer — the π bond opens and monomers join without by-products.",
              },
            ],
            steps: [
              {
                reasoning:
                  "PVC's repeat unit –CH₂–CHCl– comes from chloroethene (vinyl chloride), CH₂=CHCl.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "b",
          },
        },
        {
          id: "cipuc-u2-pol-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "0.50 mol of ethene undergoes complete addition polymerisation. Calculate the mass of poly(ethene) formed. ($M_r$ of the repeat unit C₂H₄ = 28)",
          response: {
            type: "numeric",
            parts: [{ label: "Mass", answer: 14, unit: "g" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Polymer mass",
                statement:
                  "Each monomer becomes one repeat unit — $m = n \\times M_r(\\text{repeat unit})$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "0.50 mol ethene gives 0.50 mol of –CH₂–CH₂– repeat units.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$m = 0.50 \\times 28 = 14$ g.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "14 g",
          },
        },
        {
          id: "cipuc-u2-pol-q7",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why low-density poly(ethene) (LDPE) is flexible while high-density poly(ethene) (HDPE) is rigid.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Polymer chain packing",
                statement:
                  "Branched chains cannot pack closely and have weak intermolecular forces; linear chains pack tightly with stronger forces.",
              },
            ],
            steps: [
              {
                reasoning:
                  "LDPE has many side branches → chains cannot align or pack closely → weak intermolecular forces between chains.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "HDPE has linear, unbranched chains → chains pack closely together → stronger intermolecular forces hold them rigid.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Result: LDPE is flexible (bags, films) while HDPE is rigid and stronger (bottles, pipes).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Branched = flexible; linear packed = rigid.",
          },
        },
        {
          id: "cipuc-u2-pol-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "An IR spectrum shows a broad absorption at ~3300 cm⁻¹ and a sharp strong peak at ~1715 cm⁻¹. Which functional group is most likely present?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Amine" },
              { id: "b", text: "Alcohol" },
              { id: "c", text: "Carboxylic acid" },
              { id: "d", text: "Ketone" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "IR frequencies",
                statement:
                  "O–H ~3200–3600 (broad when H-bonded); C=O ~1700 cm⁻¹ sharp and strong.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Broad 3300 → O–H; 1715 → C=O. Together these indicate –COOH (carboxylic acid), not just an alcohol or ketone.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "b",
          },
        },
        {
          id: "cipuc-u2-pol-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "A compound has a relative molecular mass of 59 (odd). According to the nitrogen rule, what is the minimum number of nitrogen atoms it can contain?",
          response: {
            type: "numeric",
            parts: [{ label: "Nitrogen atoms", answer: 1 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Nitrogen rule",
                statement:
                  "An odd Mr indicates an odd number of nitrogen atoms in the molecule.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Odd Mr → odd number of N atoms; the minimum is 1.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "1",
          },
        },
        {
          id: "cipuc-u2-pol-q10",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the disposal of waste poly(ethene) by discussing landfill, incineration and recycling.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Polymer disposal",
                statement:
                  "Plastics are inert and non-biodegradable, so disposal must manage volume, emissions and resource use.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Landfill: cheap and simple, but poly(ethene) persists for centuries and consumes space; leaching of additives is a concern.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Incineration: reduces volume and can recover energy, but releases CO₂ (greenhouse gas) and possibly toxic products from additives/impurities.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Recycling: saves energy and raw materials, but plastics must be sorted by resin code and contamination limits the grades that can be produced.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Overall: persistent plastics cause microplastic pollution, so reduction, biodegradables and improved recycling are preferred long-term solutions.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Landfill wastes space; incineration emits CO₂; recycling is best but limited by sorting and contamination.",
          },
        },
        {
          id: "cipuc-u2-pol-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which of the following is NOT a greenhouse gas?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Methane" },
              { id: "b", text: "Carbon dioxide" },
              { id: "c", text: "Nitrogen" },
              { id: "d", text: "Nitrous oxide" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Greenhouse gases",
                statement:
                  "Greenhouse gases absorb outgoing IR radiation — e.g. CO₂, CH₄, N₂O, water vapour; N₂ and O₂ do not.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Nitrogen is the major component of air but is IR-inactive and does not contribute to the greenhouse effect.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "c",
          },
        },
        {
          id: "cipuc-u2-pol-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "In flue-gas desulphurisation, calcium oxide absorbs sulfur dioxide: CaO + SO₂ → CaSO₃. Calculate the mass of CaSO₃ formed from 64 g of SO₂. ($M_r$: SO₂ = 64, CaSO₃ = 120)",
          response: {
            type: "numeric",
            parts: [{ label: "Mass of CaSO₃", answer: 120, unit: "g" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Reaction stoichiometry",
                statement: "$m = nM_r$; the equation shows a 1:1 mole ratio.",
              },
            ],
            steps: [
              {
                reasoning: "$n(SO_2) = 64/64 = 1.0$ mol → $n(CaSO_3) = 1.0$ mol.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$m(CaSO_3) = 1.0 \\times 120 = 120$ g.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "120 g",
          },
        },
        {
          id: "cipuc-u2-pol-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is an example of a condensation polymer?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Poly(chloroethene)" },
              { id: "b", text: "Poly(tetrafluoroethene)" },
              { id: "c", text: "Poly(ethene)" },
              { id: "d", text: "Nylon-6,6" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Condensation polymerisation",
                statement:
                  "Condensation polymers form when functional groups react and eliminate a small molecule — e.g. amide/ester linkages.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Nylon-6,6 is a polyamide formed from a diamine and a dicarboxylic acid with water eliminated; the others are addition polymers.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "b",
          },
        },
        {
          id: "cipuc-u2-pol-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain what the integration and chemical shift of a signal in a $^{1}$H NMR spectrum tell you about a proton environment.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "NMR interpretation",
                statement:
                  "Integration gives the number of equivalent protons; chemical shift indicates the electronic environment.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Integration (area under the peak) is proportional to the number of chemically equivalent protons giving that signal.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Chemical shift records the proton's electronic environment — e.g. CH₃ ~0.9 ppm, CH₂ ~1.3 ppm, protons on carbon bearing O ~3.5–4.0 ppm.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Splitting follows the n+1 rule, revealing the number of neighbouring protons and helping confirm connectivity.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Integration = proton count; shift = environment; splitting = neighbours.",
          },
        },
        {
          id: "cipuc-u2-pol-q15",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the $M_r$ of the repeat unit –CH₂–CH₂– in poly(ethene)? ($A_r$: C = 12, H = 1)",
          response: {
            type: "numeric",
            parts: [{ label: "$M_r$", answer: 28 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Repeat unit mass",
                statement:
                  "$M_r(C_2H_4) = 2(12) + 4(1) = 28$.",
              },
            ],
            steps: [
              {
                reasoning: "$M_r = 2(12) + 4(1) = 28$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "28",
          },
        },
        {
          id: "cipuc-u2-pol-q16",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which process is most directly responsible for ozone depletion in the stratosphere?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Release of chlorine radicals from CFCs",
              },
              { id: "b", text: "Release of nitrogen oxides from vehicle exhausts" },
              { id: "c", text: "Release of sulfur dioxide from coal burning" },
              { id: "d", text: "Release of carbon dioxide from combustion" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Ozone depletion",
                statement:
                  "CFCs release Cl· radicals in the stratosphere that catalytically destroy O₃; the Montreal Protocol phased out CFCs.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Each Cl radical can destroy thousands of O₃ molecules in a chain reaction — CFCs are the primary cause.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "a",
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
