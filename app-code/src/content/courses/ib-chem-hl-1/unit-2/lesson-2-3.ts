import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "chemhl-u2-lesson-2-3",
  code: "2-3",
  title: "The Bonding Continuum and Polymers",
  goal: "I CAN describe bonding as a continuum between ionic, covalent and metallic models, explain how bonding determines material properties including alloys, and describe the formation and properties of addition and condensation polymers.",
  standards: ["Paper 1", "Paper 2", "AHL S2"],
  vocabulary: [
    {
      term: "Bonding continuum",
      definition:
        "The idea that bonding is not purely ionic or covalent but lies on a spectrum; electronegativity difference determines where a bond sits.",
    },
    {
      term: "Bonding triangle",
      definition:
        "A diagram plotting electronegativity difference against composition to predict whether a material is ionic, covalent or metallic and its likely properties.",
    },
    {
      term: "Alloy",
      definition:
        "A mixture of a metal with other elements (often other metals) that has different properties from the pure metal, e.g. bronze, brass, stainless steel.",
    },
    {
      term: "Addition polymer",
      definition:
        "A polymer formed by adding monomers across double bonds without losing any atoms; e.g. poly(ethene), poly(propene), PVC.",
    },
    {
      term: "Condensation polymer",
      definition:
        "A polymer formed by joining monomers with the elimination of a small molecule (usually water); e.g. polyesters and polyamides like nylon.",
    },
    {
      term: "Monomer",
      definition: "The small repeating unit from which a polymer is built.",
    },
  ],
  concepts: [
    {
      id: "chemhl-u2-bonding-continuum",
      title: "Bonding continuum and material properties",
      skill:
        "Use electronegativity difference to place bonds on the ionic–covalent–metallic continuum and predict material properties including those of alloys.",
      lesson: {
        sections: [
          {
            heading: "Bonding is a spectrum",
            body: "Pure ionic bonding (complete electron transfer) and pure covalent bonding (equal sharing) are idealised extremes. In reality most bonds lie between them. The electronegativity difference between two atoms predicts position on the continuum: a large difference (e.g. NaCl, $\\Delta EN \\approx 2.2$) gives ionic character; a small difference (e.g. HCl, $\\approx 0.9$) gives polar covalent; identical atoms (e.g. Cl$_2$, $0$) give pure covalent. Metallic bonding is a third type where electrons are delocalised through a lattice of positive ions.",
          },
          {
            heading: "Alloys",
            body: "Alloys are mixtures of metals (or metal + non-metal) that often have superior properties to pure metals. Brass (Cu + Zn) is harder and more corrosion-resistant than copper; bronze (Cu + Sn) was historically harder than pure copper; stainless steel (Fe + Cr + Ni) resists rust because the chromium forms a protective oxide layer. Alloying disrupts the regular metal lattice, making dislocations harder to move — this increases hardness and strength.",
          },
          {
            heading: "Polymers — addition",
            body: "Addition polymers form when monomers with C=C double bonds join in a chain reaction, opening the $\\pi$ bond to form new $\\sigma$ bonds. Poly(ethene) is made from ethene; poly(propene) from propene; poly(chloroethene) (PVC) from chloroethene. The repeating unit is written in square brackets with subscripts showing the number of monomer units. Properties depend on chain length, branching and side groups — HDPE is rigid and crystalline, LDPE is flexible because of branching.",
          },
        ],
        keyFormulas: [
          {
            name: "Electronegativity difference",
            statement:
              "$\\Delta EN > \\sim 1.7$ ionic; $0.4-1.7$ polar covalent; $< 0.4$ non-polar covalent.",
          },
          {
            name: "Addition polymerisation",
            statement:
              "Monomers with C=C add across the double bond; no atoms are lost.",
          },
          {
            name: "Alloy hardening",
            statement:
              "Foreign atoms disrupt the metal lattice, impeding dislocation movement and increasing hardness.",
          },
        ],
        workedExample: {
          problem: "Explain why brass (Cu + Zn) is harder than pure copper.",
          solution:
            "Zinc atoms in the copper lattice distort the regular arrangement of copper atoms. This makes it harder for layers of atoms to slide past each other (dislocations are pinned), increasing hardness and strength.",
        },
      },
      questions: [
        {
          id: "chemhl-u2-bc-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A bond with electronegativity difference near zero between two identical atoms is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Coordinate" },
              { id: "b", text: "Purely ionic" },
              { id: "c", text: "Purely covalent" },
              { id: "d", text: "Metallic" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Bonding continuum",
                statement:
                  "Equal electronegativity → equal sharing → pure covalent bond.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Zero electronegativity difference means neither atom attracts the shared pair more.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** Purely covalent",
            commonErrors: [
              "Choosing metallic — metallic bonding requires a lattice of atoms, not just a diatomic molecule.",
            ],
          },
        },
        {
          id: "chemhl-u2-bc-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Predict the type of bonding in each of: NaCl, HCl, Cl$_2$, and explain your reasoning using electronegativity difference.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Bonding continuum",
                statement:
                  "Large $\\Delta EN$ → ionic; moderate → polar covalent; zero → non-polar covalent.",
              },
            ],
            steps: [
              {
                reasoning:
                  "NaCl: $\\Delta EN \\approx 2.2$ → ionic (electron transferred).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "HCl: $\\Delta EN \\approx 0.9$ → polar covalent (unequal sharing).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Cl$_2$: $\\Delta EN = 0$ → pure covalent (equal sharing).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "NaCl ionic, HCl polar covalent, Cl$_2$ non-polar covalent.",
            commonErrors: [
              "Calling HCl ionic — $\\Delta EN$ is too small for complete transfer.",
            ],
          },
        },
        {
          id: "chemhl-u2-bc-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Explain, in terms of metallic bonding and lattice disruption, why alloys are generally harder and stronger than the pure metals from which they are made.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Alloy hardening",
                statement:
                  "Foreign atoms in the lattice pin dislocations, making plastic deformation harder.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Pure metals have a regular lattice where layers of atoms can slide past each other relatively easily.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Alloying atoms of different size distort the lattice and act as obstacles to dislocation movement.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "More energy is needed to move dislocations, so the alloy is harder and stronger.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Examples: brass and bronze are harder than copper; stainless steel resists corrosion.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Foreign atoms disrupt the lattice and pin dislocations → harder, stronger alloys.",
            commonErrors: [
              "Saying alloys are 'mixtures so weaker' — they are usually stronger due to lattice distortion.",
            ],
          },
        },
        {
          id: "chemhl-u2-bc-q4",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 8,
          stem: "Poly(ethene) is made by polymerising ethene (CH$_2$=CH$_2$).",
          parts: [
            {
              label: "a",
              prompt:
                "Write the displayed (structural) formula of poly(ethene) showing three monomer units.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Explain the mechanism of addition polymerisation in terms of bond changes.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Explain why HDPE (little branching) is rigid while LDPE (lots of branching) is flexible.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Addition polymerisation",
                statement:
                  "C=C double bonds open to form new C–C $\\sigma$ bonds linking monomers; no atoms lost.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Repeat unit is –CH$_2$–CH$_2$–, written as –[CH$_2$–CH$_2$]$_n$–.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Three units shown as –CH$_2$–CH$_2$–CH$_2$–CH$_2$–CH$_2$–CH$_2$– with bonds continuing.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "A radical or initiator opens the C=C $\\pi$ bond of one ethene molecule.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "b",
                reasoning:
                  "The reactive end attacks the next ethene's $\\pi$ bond, forming a new C–C $\\sigma$ bond and extending the chain.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "b",
                reasoning:
                  "This repeats thousands of times; the $\\pi$ bonds become the backbone $\\sigma$ bonds.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Linear HDPE chains pack closely, giving strong intermolecular forces → rigid, crystalline.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Branched LDPE chains cannot pack closely, weakening intermolecular forces → flexible.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning: "Branching disrupts crystalline regions.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) –[CH$_2$CH$_2$]$_n$–. (b) $\\pi$ bonds open to form C–C $\\sigma$ backbone. (c) Branching prevents close packing → flexibility.",
            commonErrors: [
              "Showing atoms lost in polymerisation — addition polymerisation loses nothing.",
            ],
          },
        },
        {
          id: "chemhl-u2-bc-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The bond in NaCl ($\\Delta EN \\approx 2.2$) is best described as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Metallic" },
              { id: "b", text: "Ionic" },
              { id: "c", text: "Polar covalent" },
              { id: "d", text: "Non-polar covalent" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Bonding continuum",
                statement: "Large $\\Delta EN$ → ionic bonding.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$\\Delta EN \\approx 2.2$ is large enough for essentially complete electron transfer.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Ionic",
            commonErrors: [
              "Calling it polar covalent — $\\Delta EN$ is too large for mere unequal sharing.",
            ],
          },
        },
        {
          id: "chemhl-u2-bc-q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Which of the following is an alloy?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Brass (Cu + Zn)" },
              { id: "b", text: "Carbon dioxide" },
              { id: "c", text: "Water" },
              { id: "d", text: "Pure copper" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Alloy",
                statement:
                  "A mixture of a metal with other elements that has different properties from the pure metal.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Brass is copper mixed with zinc — an alloy; the others are pure substances.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** Brass",
            commonErrors: [
              "Confusing an alloy with a compound — alloys are mixtures, not fixed-ratio compounds.",
            ],
          },
        },
        {
          id: "chemhl-u2-bc-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Give the electronegativity difference for each bond.",
          response: {
            type: "numeric",
            parts: [
              { label: "Na–Cl", answer: 2.2, tolerance: 0.1 },
              { label: "H–Cl", answer: 0.9, tolerance: 0.1 },
              { label: "Cl–Cl", answer: 0 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Electronegativity difference",
                statement:
                  "$\\Delta EN = |EN_A - EN_B|$; identical atoms give $0$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Na ($\\approx 0.9$) and Cl ($\\approx 3.2$) differ by about $2.2$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "H ($\\approx 2.2$) and Cl ($\\approx 3.2$) differ by about $0.9$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Two identical Cl atoms have equal electronegativity → $\\Delta EN = 0$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$2.2$, $0.9$, $0$",
            commonErrors: [
              "Subtracting in the wrong direction — electronegativity difference uses absolute values.",
            ],
          },
        },
        {
          id: "chemhl-u2-bc-q8",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Count the atoms in each polymer repeating unit.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "Carbon atoms in poly(ethene) repeat –[CH$_2$CH$_2$]–",
                answer: 2,
              },
              { label: "Hydrogen atoms in poly(ethene) repeat", answer: 4 },
              {
                label:
                  "Carbon atoms in poly(propene) repeat –[CH$_2$CH(CH$_3$)]–",
                answer: 3,
              },
              { label: "Hydrogen atoms in poly(propene) repeat", answer: 6 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Repeat unit",
                statement:
                  "The smallest section of a polymer chain that repeats; written in square brackets.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Poly(ethene) repeat –CH$_2$–CH$_2$– contains 2 carbons.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Each CH$_2$ contributes 2 H → 4 H total.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Poly(propene) repeat –CH$_2$–CH(CH$_3$)– contains 3 carbons (2 backbone + 1 methyl).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "2 + 1 + 3 = 6 hydrogens.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "2 C, 4 H; 3 C, 6 H",
            commonErrors: [
              "Forgetting the methyl side group in poly(propene).",
            ],
          },
        },
        {
          id: "chemhl-u2-bc-q9",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Using the bonding continuum guidelines, state the $\\Delta EN$ boundaries.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "$\\Delta EN$ above which bonding is essentially ionic",
                answer: 1.7,
                tolerance: 0.1,
              },
              {
                label:
                  "$\\Delta EN$ below which bonding is essentially non-polar covalent",
                answer: 0.4,
                tolerance: 0.05,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Bonding continuum",
                statement:
                  "$\\Delta EN > \\sim 1.7$ ionic; $0.4$–$1.7$ polar covalent; $< 0.4$ non-polar covalent.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Large electronegativity differences ($> \\sim 1.7$) give ionic character.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Very small differences ($< 0.4$) give essentially non-polar covalent bonds.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "$1.7$, $0.4$",
            commonErrors: [
              "Using $2.0$ as the ionic threshold — the accepted guideline is about $1.7$.",
            ],
          },
        },
        {
          id: "chemhl-u2-bc-q10",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "Why is stainless steel resistant to rusting?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The alloy has no iron atoms" },
              { id: "b", text: "It is coated in plastic during manufacture" },
              { id: "c", text: "Nickel makes the steel magnetic" },
              {
                id: "d",
                text: "Chromium forms a protective oxide layer on the surface",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Stainless steel",
                statement:
                  "Fe + Cr + Ni alloy; Cr forms a passive Cr$_2$O$_3$ layer preventing corrosion.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Chromium oxidises to form a thin, adherent protective oxide that stops further corrosion.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(d)** Protective chromium oxide layer",
            commonErrors: [
              "Attributing corrosion resistance only to hardness.",
            ],
          },
        },
        {
          id: "chemhl-u2-bc-q11",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Compared with LDPE, HDPE is best described as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Made by condensation polymerisation" },
              { id: "b", text: "More crystalline and rigid" },
              { id: "c", text: "More branched and more flexible" },
              { id: "d", text: "A copolymer of two different monomers" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Chain packing",
                statement:
                  "Linear chains pack closely → crystalline, rigid; branched chains cannot pack → flexible.",
              },
            ],
            steps: [
              {
                reasoning:
                  "HDPE has little branching so chains pack closely in crystalline regions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** More crystalline and rigid",
            commonErrors: [
              "Reversing the relationship — branching increases flexibility, not crystallinity.",
            ],
          },
        },
        {
          id: "chemhl-u2-bc-q12",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 5,
          stem: "For the monomer chloroethene (CH$_2$=CHCl) and the poly(propene) repeat unit –[CH$_2$CH(CH$_3$)]–, give each requested quantity.",
          response: {
            type: "numeric",
            parts: [
              { label: "Carbon atoms in chloroethene", answer: 2 },
              { label: "Chlorine atoms in chloroethene", answer: 1 },
              { label: "Hydrogen atoms in chloroethene", answer: 3 },
              { label: "Carbon atoms in poly(propene) repeat", answer: 3 },
              { label: "Hydrogen atoms in poly(propene) repeat", answer: 6 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Monomer vs repeat unit",
                statement:
                  "The monomer is the starting molecule; the repeat unit is what remains in the chain.",
              },
            ],
            steps: [
              {
                reasoning: "Chloroethene CH$_2$=CHCl has 2 carbons.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "One chlorine substituent.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "CH$_2$ + CH = 3 hydrogens.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Poly(propene) repeat has 3 carbons including the methyl group.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Hydrogens: 2 (CH$_2$) + 1 (CH) + 3 (CH$_3$) = 6.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "2, 1, 3, 3, 6",
            commonErrors: [
              "Forgetting the methyl carbon in the poly(propene) repeat unit.",
            ],
          },
        },
        {
          id: "chemhl-u2-bc-q13",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 6,
          stem: "Explain the bonding continuum by comparing NaCl, HCl and Cl$_2$ in terms of electronegativity difference, bond type and melting point.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Bonding continuum",
                statement:
                  "Position on the ionic–covalent spectrum is set by $\\Delta EN$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "NaCl: $\\Delta EN \\approx 2.2$ → ionic lattice of Na$^+$ and Cl$^-$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "HCl: $\\Delta EN \\approx 0.9$ → polar covalent molecules.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Cl$_2$: $\\Delta EN = 0$ → pure covalent molecules.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Ionic NaCl has a strong lattice → very high melting point.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "HCl molecules interact via dipole–dipole forces → low melting point.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Cl$_2$ has only dispersion forces → lowest melting point of the three.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer:
              "NaCl ionic (high mp), HCl polar covalent, Cl$_2$ non-polar covalent; IMF strength follows bond type.",
            commonErrors: [
              "Saying all three are 'ionic' or 'covalent' without using $\\Delta EN$.",
            ],
          },
        },
        {
          id: "chemhl-u2-bc-q14",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 8,
          stem: "Consider two copper alloys: brass (Cu + Zn) and bronze (Cu + Sn).",
          parts: [
            {
              label: "a",
              prompt: "State the composition of each alloy.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Explain why each alloy is harder than pure copper.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Explain why copper alloys still conduct electricity well.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Alloy hardening",
                statement:
                  "Foreign atoms distort the metal lattice and pin dislocations.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Brass = copper + zinc.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Bronze = copper + tin.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Zn/Sn atoms are different sizes from Cu, distorting the regular lattice.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "The distorted regions act as obstacles that pin dislocations.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "More energy is needed to move dislocations → harder, stronger alloy.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Alloys retain metallic bonding — a lattice of positive ions in a sea of delocalised electrons.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "The delocalised electrons are still free to move and carry charge.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Alloying scatters some electrons, so conductivity is slightly lower than pure Cu but still high.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer:
              "(a) Brass Cu+Zn; bronze Cu+Sn. (b) Lattice distortion pins dislocations → harder. (c) Delocalised electrons remain → still conducts.",
            commonErrors: [
              "Saying alloys do not conduct because they are mixtures.",
            ],
          },
        },
        {
          id: "chemhl-u2-bc-q15",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Metallic bonding is best described as:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "A lattice of positive ions surrounded by delocalised electrons",
              },
              { id: "b", text: "Complete transfer of electrons between atoms" },
              { id: "c", text: "Sharing of electron pairs between two atoms" },
              { id: "d", text: "Hydrogen bonds between molecules" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Metallic bonding",
                statement:
                  "Positive metal ions in a lattice held by delocalised valence electrons.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Metallic bonding involves delocalised electrons in a lattice of cations.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** Positive ions + delocalised electrons",
            commonErrors: ["Confusing metallic bonding with covalent bonding."],
          },
        },
        {
          id: "chemhl-u2-bc-q16",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "For addition polymerisation of ethene, give each requested quantity per monomer added to the chain.",
          response: {
            type: "numeric",
            parts: [
              { label: "C=C bonds opened", answer: 1 },
              { label: "New C–C $\\sigma$ bonds formed", answer: 1 },
              { label: "Atoms lost per monomer", answer: 0 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Addition polymerisation",
                statement:
                  "Monomers add across C=C bonds; no atoms are eliminated.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Each ethene monomer's C=C $\\pi$ bond opens to form two new C–C linkages.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "One new C–C $\\sigma$ bond is formed per monomer added to the growing chain.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Addition polymerisation loses no atoms — all monomer atoms remain in the polymer.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "1, 1, 0",
            commonErrors: [
              "Saying water is eliminated — that is condensation polymerisation.",
            ],
          },
        },
      ],
    },
    {
      id: "chemhl-u2-condensation-polymers",
      title: "Condensation polymers",
      skill:
        "Describe the formation of condensation polymers such as polyesters and polyamides, write their repeating units, and distinguish them from addition polymers.",
      lesson: {
        sections: [
          {
            heading: "Condensation polymerisation",
            body: "Condensation polymers form when two different monomers (or a single monomer with two functional groups) react, eliminating a small molecule — usually water. Polyesters form from a dicarboxylic acid + a diol; each esterification joins monomers and releases H$_2$O. Polyamides (nylons) form from a dicarboxylic acid + a diamine, releasing water to form amide links. Unlike addition polymerisation, atoms ARE lost.",
          },
          {
            heading: "Writing repeating units",
            body: "The repeating unit shows the atoms contributed by each monomer joined by the functional group formed. For a polyester from ethane-1,2-diol and benzene-1,4-dicarboxylic acid (terephthalic acid), the repeat is –O–CH$_2$CH$_2$–O–CO–C$_6$H$_4$–CO–. For nylon-6,6 (hexanedioic acid + hexane-1,6-diamine) the repeat is –NH–(CH$_2$)$_6$–NH–CO–(CH$_2$)$_4$–CO–. The eliminated water comes from the –OH of the acid and the –H of the alcohol/amine.",
          },
          {
            heading: "Properties and uses",
            body: "Polyesters (PET) are strong, clear and resistant to water — used in bottles and fibres (Terylene). Polyamides (nylon) are tough and wear-resistant — used in fibres, gears and rope. Both are condensation polymers with strong intermolecular forces (hydrogen bonding in nylons, dipole interactions in PET). Their properties can be modified by choice of monomers — e.g. Kevlar uses aromatic monomers for exceptional strength.",
          },
        ],
        keyFormulas: [
          {
            name: "Condensation polymerisation",
            statement:
              "Monomers join with elimination of H$_2$O (or HCl); unlike addition polymerisation, atoms are lost.",
          },
          {
            name: "Polyester repeat",
            statement:
              "–O–(CH$_2$)$_n$–O–CO–R–CO– from diol + dicarboxylic acid.",
          },
          {
            name: "Polyamide repeat",
            statement:
              "–NH–(CH$_2$)$_n$–NH–CO–(CH$_2$)$_m$–CO– from diamine + dicarboxylic acid.",
          },
        ],
        workedExample: {
          problem:
            "Write the repeating unit of nylon-6,6 formed from hexanedioic acid HOOC–(CH$_2$)$_4$–COOH and hexane-1,6-diamine H$_2$N–(CH$_2$)$_6$–NH$_2$.",
          solution:
            "The amide link forms between –COOH and –NH$_2$ with loss of H$_2$O. The repeating unit is –NH–(CH$_2$)$_6$–NH–CO–(CH$_2$)$_4$–CO–.",
        },
      },
      questions: [
        {
          id: "chemhl-u2-cp-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Condensation polymerisation differs from addition polymerisation because it:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Produces only plastics" },
              { id: "b", text: "Requires no monomers" },
              {
                id: "c",
                text: "Eliminates a small molecule such as water with each bond formed",
              },
              { id: "d", text: "Only works with alkenes" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Condensation polymerisation",
                statement:
                  "Monomers join with loss of a small molecule (usually H$_2$O).",
              },
            ],
            steps: [
              {
                reasoning:
                  "Each condensation step releases water (or similar) — atoms are lost from the monomers.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** Eliminates a small molecule",
            commonErrors: [
              "Confusing it with addition polymerisation which loses nothing.",
            ],
          },
        },
        {
          id: "chemhl-u2-cp-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Write the equation for the formation of a polyester from a generic dicarboxylic acid HOOC–R–COOH and a generic diol HO–(CH$_2$)$_n$–OH, showing the repeating unit and the by-product.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Polyester formation",
                statement:
                  "Each esterification joins –COOH + –OH → –COO– + H$_2$O.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The acid's –COOH reacts with the diol's –OH to form an ester link –COO–.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Water is eliminated at each step.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Repeating unit: –O–(CH$_2$)$_n$–O–CO–R–CO–.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "–O–(CH$_2$)$_n$–O–CO–R–CO– repeat; H$_2$O eliminated.",
            commonErrors: [
              "Writing the repeat unit in the wrong order or forgetting the oxygens from the diol.",
            ],
          },
        },
        {
          id: "chemhl-u2-cp-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Nylon-6,6 and Terylene (PET) are both condensation polymers. Explain their structural differences and predict which would have stronger intermolecular forces.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Intermolecular forces in polymers",
                statement:
                  "Amide N–H groups hydrogen-bond strongly; ester groups have weaker dipole interactions.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Nylon-6,6 has amide links (–CO–NH–) containing N–H groups that hydrogen-bond between chains.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "PET has ester links (–COO–) with no N–H, so only dipole–dipole forces act.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Hydrogen bonding is stronger than dipole interactions, so nylon has stronger intermolecular forces.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "This contributes to nylon's toughness and higher melting point.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Nylon has amide H-bonds (stronger IMF) vs PET's ester dipoles → nylon tougher, higher mp.",
            commonErrors: [
              "Ignoring that both are condensation polymers — the difference is the functional group in the backbone.",
            ],
          },
        },
        {
          id: "chemhl-u2-cp-q4",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 8,
          stem: "A polyester is formed from ethane-1,2-diol HOCH$_2$CH$_2$OH and benzene-1,4-dicarboxylic acid.",
          parts: [
            {
              label: "a",
              prompt: "Write the repeating unit of the polyester.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Calculate the mass of water eliminated when 1 mole of diol reacts completely with 1 mole of diacid to form a long-chain polymer.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Explain why this polyester (PET) is used for drink bottles.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "PET repeat unit",
                statement: "–O–CH$_2$CH$_2$–O–CO–C$_6$H$_4$–CO–.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "The repeat joins the diol's –O–CH$_2$CH$_2$–O– to the diacid's –CO–C$_6$H$_4$–CO–.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Full repeat: –O–CH$_2$CH$_2$–O–CO–C$_6$H$_4$–CO–.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Each esterification eliminates one H$_2$O; joining two bifunctional monomers in a chain releases approximately 2 mol H$_2$O per 'repeat' formed.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "b",
                reasoning:
                  "For a complete reaction of 1 mol each, about 2 mol H$_2$O ($\\approx 36$ g) is eliminated per mole of repeat units formed.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "PET is strong, tough and resistant to impact — survives bottle handling.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "It is impermeable to gases and liquids — keeps drinks fresh and prevents leaks.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "It is chemically inert to most substances and does not react with water or acids in drinks.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "It is also transparent and can be moulded into bottles cheaply.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) –O–CH$_2$CH$_2$–O–CO–C$_6$H$_4$–CO–. (b) $\\approx 2$ mol H$_2$O per repeat. (c) Strong, impermeable, inert, transparent.",
            commonErrors: [
              "Getting the repeat unit orientation wrong — the ester oxygen comes from the diol.",
            ],
          },
        },
        {
          id: "chemhl-u2-cp-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A polyester is formed from which pair of monomers?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Two alkenes" },
              { id: "b", text: "Two alcohols only" },
              { id: "c", text: "A dicarboxylic acid and a diol" },
              { id: "d", text: "A single amino acid" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Polyester formation",
                statement:
                  "Dicarboxylic acid + diol → ester links with loss of H$_2$O.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Each ester bond forms between a –COOH group and an –OH group, eliminating water.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** Dicarboxylic acid + diol",
            commonErrors: [
              "Thinking polyesters form from alkenes — that is addition polymerisation.",
            ],
          },
        },
        {
          id: "chemhl-u2-cp-q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Which of the following is an addition polymer?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Nylon-6,6" },
              { id: "b", text: "Poly(ethene)" },
              { id: "c", text: "Terylene (PET)" },
              { id: "d", text: "Kevlar" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Addition polymer",
                statement:
                  "Formed by opening C=C bonds with no atoms lost; made from alkene monomers.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Poly(ethene) forms from ethene monomers across double bonds; the others are condensation polymers.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Poly(ethene)",
            commonErrors: ["Assuming all plastics are addition polymers."],
          },
        },
        {
          id: "chemhl-u2-cp-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Count the groups or atoms requested in each species.",
          response: {
            type: "numeric",
            parts: [
              { label: "Ester links in one PET repeat unit", answer: 2 },
              { label: "Amide links in one nylon-6,6 repeat unit", answer: 2 },
              { label: "Hydrogen atoms in ethane-1,2-diol", answer: 6 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Functional groups",
                statement:
                  "Each repeat unit contains the links formed between monomers.",
              },
            ],
            steps: [
              {
                reasoning:
                  "PET repeat –O–CH$_2$CH$_2$–O–CO–R–CO– contains two ester (–COO–) links.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Nylon-6,6 repeat –NH–(CH$_2$)$_6$–NH–CO–(CH$_2$)$_4$–CO– contains two amide (–CO–NH–) links.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "HOCH$_2$CH$_2$OH has 4 H on carbons + 2 H on oxygens = 6 H.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "2, 2, 6",
            commonErrors: [
              "Counting only one functional link per repeat unit.",
            ],
          },
        },
        {
          id: "chemhl-u2-cp-q8",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "For the nylon-6,6 repeat unit –NH–(CH$_2$)$_6$–NH–CO–(CH$_2$)$_4$–CO–, give each requested quantity.",
          response: {
            type: "numeric",
            parts: [
              { label: "Carbon atoms", answer: 10 },
              { label: "Nitrogen atoms", answer: 2 },
              { label: "Oxygen atoms", answer: 2 },
              {
                label: "Water molecules eliminated per repeat formed",
                answer: 2,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Nylon-6,6 repeat",
                statement:
                  "–NH–(CH$_2$)$_6$–NH–CO–(CH$_2$)$_4$–CO– from hexane-1,6-diamine + hexanedioic acid.",
              },
            ],
            steps: [
              {
                reasoning: "Carbons: 6 (from diamine) + 4 (from diacid) = 10.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Two amide nitrogens → 2 N.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Two carbonyl oxygens → 2 O.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Two amide bonds formed per repeat → 2 H$_2$O eliminated.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "10, 2, 2, 2",
            commonErrors: [
              "Counting 12 carbons — the repeat has (CH$_2$)$_6$ + (CH$_2$)$_4$ = 10.",
            ],
          },
        },
        {
          id: "chemhl-u2-cp-q9",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Give the quantities involved in one esterification step of polyester formation.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "H$_2$O molecules eliminated per ester bond",
                answer: 1,
              },
              { label: "Atoms in one H$_2$O molecule", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Condensation step",
                statement: "–COOH + –OH → –COO– + H$_2$O.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Each ester bond formed releases exactly one water molecule.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "H$_2$O contains 2 H + 1 O = 3 atoms.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "1, 3",
            commonErrors: ["Thinking two waters are lost per ester bond."],
          },
        },
        {
          id: "chemhl-u2-cp-q10",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "Nylon-6,6 has higher tensile strength than PET mainly because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It has no oxygen atoms" },
              { id: "b", text: "It contains more carbon atoms" },
              { id: "c", text: "It is made by addition polymerisation" },
              {
                id: "d",
                text: "Its amide groups form hydrogen bonds between chains",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Intermolecular forces in polymers",
                statement:
                  "Amide N–H groups hydrogen-bond strongly; ester groups have weaker dipole interactions.",
              },
            ],
            steps: [
              {
                reasoning:
                  "N–H groups in nylon form intermolecular hydrogen bonds that hold chains together strongly.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(d)** Hydrogen bonding between amide groups",
            commonErrors: ["Attributing strength only to chain length."],
          },
        },
        {
          id: "chemhl-u2-cp-q11",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Terylene (PET) is manufactured from:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Ethene monomers" },
              { id: "b", text: "Propene and chloroethene" },
              { id: "c", text: "Hexane-1,6-diamine only" },
              {
                id: "d",
                text: "Ethane-1,2-diol and benzene-1,4-dicarboxylic acid",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "PET monomers",
                statement:
                  "PET = polyester from ethane-1,2-diol + benzene-1,4-dicarboxylic acid (terephthalic acid).",
              },
            ],
            steps: [
              {
                reasoning:
                  "PET is a polyester, so it needs a diol and a dicarboxylic acid.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(d)** Ethane-1,2-diol + benzene-1,4-dicarboxylic acid",
            commonErrors: [
              "Confusing PET with an addition polymer like poly(ethene).",
            ],
          },
        },
        {
          id: "chemhl-u2-cp-q12",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 5,
          stem: "For the PET repeat unit –O–CH$_2$CH$_2$–O–CO–C$_6$H$_4$–CO–, give each requested quantity.",
          response: {
            type: "numeric",
            parts: [
              { label: "Carbon atoms", answer: 8 },
              { label: "Hydrogen atoms", answer: 8 },
              { label: "Oxygen atoms", answer: 4 },
              { label: "Ester groups", answer: 2 },
              {
                label: "Water molecules eliminated per repeat formed",
                answer: 2,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "PET repeat",
                statement:
                  "–O–CH$_2$CH$_2$–O–CO–C$_6$H$_4$–CO– from ethane-1,2-diol + terephthalic acid.",
              },
            ],
            steps: [
              {
                reasoning: "Carbons: 2 (diol part) + 6 (benzene ring) = 8.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Hydrogens: 4 (CH$_2$CH$_2$) + 4 (C$_6$H$_4$) = 8.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Each ester group contributes 2 O → 4 O total.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Two –COO– ester groups per repeat.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Two ester bonds formed → 2 H$_2$O eliminated.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "8, 8, 4, 2, 2",
            commonErrors: [
              "Counting 6 oxygens — each ester has only 2 O atoms (one bridging, one carbonyl).",
            ],
          },
        },
        {
          id: "chemhl-u2-cp-q13",
          difficulty: "core",
          paper: "2",
          totalMarks: 6,
          stem: "Distinguish between addition and condensation polymerisation, giving one example of each and explaining whether atoms are lost during polymer formation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Addition polymerisation",
                statement:
                  "Alkene monomers add across C=C bonds; no atoms lost. Example: poly(ethene).",
              },
              {
                kind: "definition",
                name: "Condensation polymerisation",
                statement:
                  "Bifunctional monomers join with elimination of a small molecule (H$_2$O); atoms lost. Example: nylon-6,6.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Addition polymerisation opens C=C $\\pi$ bonds to form new C–C $\\sigma$ bonds in the backbone.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "No atoms are eliminated — every atom of the monomer remains in the polymer (e.g. poly(ethene), PVC).",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Condensation polymerisation joins bifunctional monomers such as diols/diacids or diamines/diacids.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Each bond formed releases a small molecule, usually water (e.g. PET, nylon-6,6).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Atoms ARE lost in condensation polymerisation — the repeat unit has fewer atoms than the monomers combined.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "This difference is the key distinction between the two mechanisms.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer:
              "Addition: C=C opens, no atoms lost (PE, PVC). Condensation: small molecule (H$_2$O) eliminated, atoms lost (PET, nylon).",
            commonErrors: [
              "Claiming condensation polymerisation loses nothing — water is eliminated each step.",
            ],
          },
        },
        {
          id: "chemhl-u2-cp-q14",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 8,
          stem: "Consider nylon-6,6.",
          parts: [
            {
              label: "a",
              prompt: "Name the two monomers used to make nylon-6,6.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Write the repeating unit of nylon-6,6.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Explain why nylon is strong, tough and wear-resistant.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Nylon-6,6",
                statement:
                  "Polyamide from hexane-1,6-diamine + hexanedioic acid; repeat –NH–(CH$_2$)$_6$–NH–CO–(CH$_2$)$_4$–CO–.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Hexane-1,6-diamine, H$_2$N–(CH$_2$)$_6$–NH$_2$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Hexanedioic acid (adipic acid), HOOC–(CH$_2$)$_4$–COOH.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "The amide link –CO–NH– forms between –COOH and –NH$_2$ with loss of H$_2$O.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Diamine contributes –NH–(CH$_2$)$_6$–NH– and diacid contributes –CO–(CH$_2$)$_4$–CO–.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Full repeat: –NH–(CH$_2$)$_6$–NH–CO–(CH$_2$)$_4$–CO–.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Amide N–H groups form strong intermolecular hydrogen bonds between chains.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Chains align and crystallise, giving high tensile strength and toughness.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Strong chain–chain attractions resist abrasion and wear.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer:
              "(a) Hexane-1,6-diamine + hexanedioic acid. (b) –NH–(CH$_2$)$_6$–NH–CO–(CH$_2$)$_4$–CO–. (c) Hydrogen-bonded, crystalline chains → strong and wear-resistant.",
            commonErrors: [
              "Reversing the order of monomers in the repeat unit.",
            ],
          },
        },
        {
          id: "chemhl-u2-cp-q15",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Which of the following is a condensation polymer?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Poly(chloroethene) (PVC)" },
              { id: "b", text: "Poly(propene)" },
              { id: "c", text: "Poly(ethene)" },
              { id: "d", text: "Nylon-6,6" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Condensation polymer",
                statement:
                  "Formed with elimination of a small molecule; e.g. polyamides and polyesters.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Nylon-6,6 is a polyamide formed by condensation; the others are addition polymers.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(d)** Nylon-6,6",
            commonErrors: [
              "Grouping all 'nylon-like' names incorrectly — check the mechanism.",
            ],
          },
        },
        {
          id: "chemhl-u2-cp-q16",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Count the atoms in ethane-1,2-diol, HOCH$_2$CH$_2$OH.",
          response: {
            type: "numeric",
            parts: [
              { label: "Carbon atoms", answer: 2 },
              { label: "Hydrogen atoms", answer: 6 },
              { label: "Oxygen atoms", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Ethane-1,2-diol",
                statement: "HO–CH$_2$–CH$_2$–OH: a diol with two –OH groups.",
              },
            ],
            steps: [
              {
                reasoning: "Two CH$_2$ groups → 2 carbons.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "4 H on carbons + 2 H on oxygens = 6 H.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Two –OH groups → 2 oxygens.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "2, 6, 2",
            commonErrors: ["Missing the O–H hydrogens when counting H atoms."],
          },
        },
      ],
    },
  ],
};
