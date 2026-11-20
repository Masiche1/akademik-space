import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "mypc5-u3-lesson-3-1",
  code: "3-1",
  title: "Polymers and Plastics",
  goal: "I CAN distinguish addition and condensation polymers, describe common plastics and their properties, and evaluate recycling options.",
  standards: [
    "MYP Sciences: Matter",
    "Key concept: Systems",
    "Criterion A: Knowing and understanding",
    "Criterion D: Reflecting",
  ],
  vocabulary: [
    { term: "Polymer", definition: "Long-chain molecule made of repeating units (monomers) joined by covalent bonds." },
    { term: "Monomer", definition: "Small molecule that joins to form a polymer; e.g. ethene → polyethene." },
    { term: "Addition polymerisation", definition: "Monomers with C=C bonds join without losing atoms; e.g. n ethene → polyethene." },
    { term: "Condensation polymerisation", definition: "Monomers join releasing small molecules like water; e.g. polyester and nylon." },
    { term: "Thermoplastic", definition: "Plastic that softens when heated and can be reshaped repeatedly; e.g. polyethene." },
    { term: "Thermoset", definition: "Plastic with cross-links that cannot be reshaped once set; e.g. bakelite, epoxy resins." },
  ],
  concepts: [
    {
      id: "mypc5-u3-polymers",
      title: "Polymerisation and common plastics",
      skill: "Describe addition and condensation polymerisation and link polymer structure to properties.",
      lesson: {
        sections: [
          {
            heading: "Addition polymerisation",
            body: "Alkene monomers join through their C=C double bonds without losing atoms: **n ethene → polyethene (PE)**, propene → polypropylene (PP), chloroethene → PVC, tetrafluoroethene → PTFE (Teflon). The polymer chain is saturated once formed; properties depend on chain length, branching and side groups.",
          },
          {
            heading: "Condensation polymerisation",
            body: "Monomers with two functional groups join **releasing small molecules** (usually water). E.g. ethane-1,2-diol + benzene-1,4-dicarboxylic acid → PET polyester + water. Nylon-6,6 forms from a diamine and dicarboxylic acid. Condensation polymers often have strong intermolecular forces → fibres for clothing and ropes.",
          },
          {
            heading: "Structure and properties",
            body: "Long chains entangle → strength and flexibility. **Crystallinity** (ordered regions) raises density and melting point; **branching** lowers it. PVC is rigid (used in pipes) or flexible with plasticisers (cables). PTFE is non-stick (strong C–F bonds). Biodegradability is rare — most plastics persist for centuries.",
          },
        ],
        keyFormulas: [
          { name: "Addition", statement: "n monomer(alkene) -> polymer; no atoms lost" },
          { name: "Condensation", statement: "Monomers join releasing small molecule (H_2O)" },
          { name: "Properties", statement: "Chain length/branching/crystallinity set strength and mp" },
        ],
        workedExample: {
          problem: "Ethene (C₂H₄) undergoes addition polymerisation. Write the repeat unit of polyethene.",
          solution: "Each ethene contributes –CH₂–CH₂–; the repeat unit is –[CH₂–CH₂]– with formula (C₂H₄)ₙ.",
        },
      },
      questions: [
        {
          id: "mypc5-u3-polymers-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a monomer?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Small molecule that joins to form a polymer" },
              { id: "b", text: "A type of catalyst" },
              { id: "c", text: "The end product of recycling" },
              { id: "d", text: "A solvent for plastics" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Monomer", statement: "Repeating building block of a polymer." },
            ],
            steps: [
              { reasoning: "Monomers join during polymerisation to form chains.", working: "\\text{building block}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Building block of a polymer",
            commonErrors: ["Confusing monomer with polymer."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypc5-u3-polymers-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which statement about condensation polymerisation is correct?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Small molecules such as water are released as monomers join" },
              { id: "b", text: "No atoms are lost" },
              { id: "c", text: "Only alkenes can be monomers" },
              { id: "d", text: "It requires no functional groups" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Condensation", statement: "Monomers join with elimination of small molecules." },
            ],
            steps: [
              { reasoning: "Condensation releases e.g. H₂O at each junction.", working: "H_2O\\text{ released}", marks: 1, markCode: "M" },
              { reasoning: "Contrast with addition where nothing is lost.", working: "\\text{contrast}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Small molecules released as monomers join",
            commonErrors: ["Describing addition polymerisation instead."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc5-u3-polymers-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain why PTFE (Teflon) is used for non-stick cookware while polyethylene is used for carrier bags.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "PTFE's strong C–F bonds and smooth surface prevent adhesion; PE is cheap, flexible and chemically inert for bags" },
              { id: "b", text: "Both are identical polymers" },
              { id: "c", text: "PTFE is a metal" },
              { id: "d", text: "PE conducts electricity" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Property-application", statement: "Molecular structure determines suitability for use." },
            ],
            steps: [
              { reasoning: "PTFE: very strong C–F bonds, smooth inert surface → food doesn't adhere.", working: "\\text{C-F}", marks: 1, markCode: "M" },
              { reasoning: "PE: cheap hydrocarbon, flexible, resistant to water/chemicals → bags.", working: "\\text{PE}", marks: 1, markCode: "M" },
              { reasoning: "Link structure to each application.", working: "\\text{applications}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "PTFE non-stick via C–F bonds; PE flexible/cheap for bags",
            commonErrors: ["Giving properties without linking to applications."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypc5-u3-polymers-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A country wants to reduce plastic waste entering the ocean.",
          parts: [
            { label: "a", prompt: "Distinguish thermoplastics from thermosets with one example each.", marks: 2 },
            { label: "b", prompt: "Explain why most plastics are not biodegradable.", marks: 2 },
            { label: "c", prompt: "Suggest and evaluate one benefit and one drawback of mechanical recycling of plastics.", marks: 2 },
            { label: "d", prompt: "Propose one realistic policy to reduce single-use plastic consumption and justify it.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Polymer waste", statement: "Structure determines reprocessability and environmental persistence." },
            ],
            steps: [
              { part: "a", reasoning: "Thermoplastic softens when reheated, reshapes (PE, PP); thermoset has cross-links, sets permanently (bakelite, epoxy).", working: "\\text{thermo}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Correct example for each type.", working: "\\text{examples}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Plastic C–C and C–H bonds are very strong; few microorganisms produce enzymes to break them down.", working: "\\text{strong bonds}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Persistence → accumulation in oceans/food chains.", working: "\\text{persist}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Benefit: saves raw materials/energy vs virgin plastic; drawback: sorting/contamination reduces quality, limited polymer types accepted.", working: "\\text{recycle}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Balanced evaluation.", working: "\\text{evaluation}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Policy e.g. plastic bag charge/ban; justification: reduces consumption measurably, cheap to enforce, shifts to reusable alternatives.", working: "\\text{policy}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Justification with expected impact.", working: "\\text{justified}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) thermo reshapes/thermoset sets (b) strong bonds resist biodegradation (c) saves resources but sorting limits (d) bag charge/ban reduces use",
            commonErrors: ["In (b), claiming plastics dissolve in water."],
            examinerNote: "M1 A1 for (a); M1 A1 for (b); M1 A1 for (c); M1 A1 for (d).",
          },
        },
        {
          id: "mypc5-u3-polymers-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What happens during addition polymerisation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Alkene monomers join through their C=C bonds without losing any atoms" },
              { id: "b", text: "Small molecules like water are released" },
              { id: "c", text: "The monomers break apart" },
              { id: "d", text: "Only metals can be monomers" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Addition polymerisation", statement: "C=C bonds open and link; no atoms lost." },
            ],
            steps: [
              { reasoning: "Alkene double bonds break and form new C–C single bonds linking monomers.", working: "C=C", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Monomers join without losing atoms",
            commonErrors: ["Describing condensation polymerisation instead."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypc5-u3-polymers-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Ethene has formula C₂H₄. If 500 ethene molecules undergo addition polymerisation, how many repeat units does the polymer chain contain?",
          response: {
            type: "numeric",
            parts: [{ label: "Repeat units", answer: 500, unit: "units" }],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Repeat units", statement: "Each monomer becomes one repeat unit in the chain." },
            ],
            steps: [
              { reasoning: "Each ethene molecule contributes one –CH₂–CH₂– repeat unit → 500 units.", working: "500", marks: 1, markCode: "B" },
            ],
            finalAnswer: "$500$ repeat units",
            commonErrors: ["Doubling for two carbons — repeat unit ≠ atom count."],
            examinerNote: "B1 for 500.",
          },
        },
        {
          id: "mypc5-u3-polymers-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "PET polyester forms by condensation polymerisation of a diol and a dicarboxylic acid. How many water molecules are released per repeat unit (which contains 2 ester linkages)?",
          response: {
            type: "numeric",
            parts: [{ label: "H₂O", answer: 2, unit: "molecules" }],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Condensation polymerisation", statement: "Each ester bond forms with elimination of one H₂O." },
            ],
            steps: [
              { reasoning: "Each of the 2 ester linkages in the repeat unit releases 1 H₂O.", working: "2", marks: 1, markCode: "M" },
              { reasoning: "Answer: $2$ water molecules per repeat unit.", working: "2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2\\ \\text{H}_2\\text{O}$ per repeat unit",
            commonErrors: ["Answering 1 — each ester bond releases its own water."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc5-u3-polymers-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "The repeat unit of polypropene is –[CH₂–CH(CH₃)]–. How many carbon atoms does one repeat unit contain?",
          response: {
            type: "numeric",
            parts: [{ label: "Carbons", answer: 3, unit: "atoms" }],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Repeat unit", statement: "Propene monomer C₃H₆ → 3 carbons per repeat unit." },
            ],
            steps: [
              { reasoning: "–CH₂–CH(CH₃)– contains 1 + 1 + 1 = 3 carbon atoms.", working: "3", marks: 1, markCode: "M" },
              { reasoning: "Answer: $3$ carbons.", working: "3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$3$ carbon atoms",
            commonErrors: ["Counting only backbone carbons (2) — methyl group carbon also counts."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc5-u3-polymers-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "PVC is used for rigid water pipes but also for flexible cable insulation. What explains this difference?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Plasticisers are added to make it flexible; without them PVC is rigid" },
              { id: "b", text: "Two different polymers are used" },
              { id: "c", text: "Temperature alone changes the polymer" },
              { id: "d", text: "The pipes are made of metal" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Additives", statement: "Plasticisers separate chains → flexibility; rigid PVC has none." },
            ],
            steps: [
              { reasoning: "Pure PVC is rigid → pipes.", working: "\\text{rigid}", marks: 1, markCode: "M" },
              { reasoning: "Adding plasticiser softens → flexible cables.", working: "\\text{plasticiser}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Plasticisers make PVC flexible",
            commonErrors: ["Saying PVC changes type — same polymer, different additives."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc5-u3-polymers-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "The repeat unit of polyethene is –[CH₂–CH₂]–. How many hydrogen atoms does one repeat unit contain?",
          response: {
            type: "numeric",
            parts: [{ label: "Hydrogens", answer: 4, unit: "atoms" }],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Repeat unit", statement: "Ethene C₂H₄ → repeat unit C₂H₄." },
            ],
            steps: [
              { reasoning: "–CH₂–CH₂– has 2 × CH₂ groups → 4 hydrogen atoms.", working: "4", marks: 1, markCode: "M" },
              { reasoning: "Answer: $4$ hydrogens.", working: "4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$4$ hydrogen atoms",
            commonErrors: ["Answering 2 — forgetting each CH₂ has 2 H."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc5-u3-polymers-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Why are condensation polymers such as nylon and PET strong enough to be used as fibres for clothing and ropes?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Their chains have polar groups enabling strong intermolecular forces (e.g. hydrogen bonding) between chains, plus chain entanglement" },
              { id: "b", text: "They contain metal atoms" },
              { id: "c", text: "They are always crystalline metals" },
              { id: "d", text: "They dissolve easily in water" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Fibre strength", statement: "Strong IMFs between chains + entanglement → tensile strength." },
            ],
            steps: [
              { reasoning: "Condensation polymers have polar groups (amide, ester) → H-bonding/dipole IMFs between chains.", working: "\\text{IMF}", marks: 1, markCode: "M" },
              { reasoning: "Long chains entangle → mechanical strength.", working: "\\text{entangle}", marks: 1, markCode: "M" },
              { reasoning: "Combined → strong fibres for textiles/ropes.", working: "\\text{fibres}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Strong inter-chain forces + entanglement give fibre strength",
            commonErrors: ["Saying they're strong because they're metals."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypc5-u3-polymers-q12",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Propene has formula C₃H₆. If it undergoes addition polymerisation, what are the numbers of carbon and hydrogen atoms in one repeat unit?",
          response: {
            type: "numeric",
            parts: [
              { label: "Carbons", answer: 3, unit: "atoms" },
              { label: "Hydrogens", answer: 6, unit: "atoms" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Repeat unit", statement: "Addition polymerisation preserves all atoms → repeat unit = monomer formula." },
            ],
            steps: [
              { part: "Carbons", reasoning: "C₃H₆ has 3 carbons → repeat unit has 3 C.", working: "3", marks: 1, markCode: "M" },
              { part: "Hydrogens", reasoning: "6 hydrogens per monomer → 6 H per repeat unit.", working: "6", marks: 1, markCode: "M" },
              { reasoning: "No atoms lost in addition → repeat unit formula = C₃H₆.", working: "C_3H_6", marks: 1, markCode: "A" },
            ],
            finalAnswer: "3 C and 6 H per repeat unit",
            commonErrors: ["Losing atoms — addition keeps all atoms."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypc5-u3-polymers-q13",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Why do most synthetic plastics persist in the environment for hundreds of years?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Their strong C–C and C–H covalent bonds resist attack by microorganisms which lack enzymes to break them down" },
              { id: "b", text: "They dissolve quickly in water" },
              { id: "c", text: "They evaporate easily" },
              { id: "d", text: "Microorganisms eat them rapidly" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Biodegradability", statement: "Strong C–C/C–H bonds + few degrading enzymes → persistence." },
            ],
            steps: [
              { reasoning: "Polymer backbone has strong covalent C–C bonds.", working: "\\text{C-C}", marks: 1, markCode: "M" },
              { reasoning: "Few microorganisms produce enzymes to cleave these bonds.", working: "\\text{enzymes}", marks: 1, markCode: "M" },
              { reasoning: "Result: plastics persist centuries → accumulate in oceans/landfills.", working: "\\text{persist}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Strong bonds resist biodegradation",
            commonErrors: ["Saying plastics biodegrade like food waste."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypc5-u3-polymers-q14",
          difficulty: "core",
          totalMarks: 4,
          stem: "Distinguish addition and condensation polymerisation, giving one named example of each.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "comparison", name: "Addition vs condensation", statement: "Addition: no atoms lost, alkene monomers; condensation: small molecule released, functional-group monomers." },
            ],
            steps: [
              { reasoning: "Addition: alkene monomers join via C=C bonds, no atoms lost — e.g. ethene → polyethene.", working: "\\text{addition}", marks: 1, markCode: "M" },
              { reasoning: "Condensation: monomers with functional groups join releasing small molecules (H₂O) — e.g. PET or nylon-6,6.", working: "\\text{condensation}", marks: 1, markCode: "M" },
              { reasoning: "Addition uses C=C unsaturation; condensation uses –OH/–COOH or –NH₂/–COOH groups.", working: "\\text{functional}", marks: 1, markCode: "A" },
              { reasoning: "Correct named examples for both types.", working: "\\text{examples}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Addition (PE): no atoms lost; condensation (PET/nylon): H₂O released",
            commonErrors: ["Confusing the two mechanisms."],
            examinerNote: "M1 M1 A1 A1.",
          },
        },
        {
          id: "mypc5-u3-polymers-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how crystallinity and branching in polymer chains affect properties such as melting point and density.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Structure-property", statement: "Ordered regions and less branching → stronger IMFs → higher mp/density." },
            ],
            steps: [
              { reasoning: "Crystalline regions: chains pack regularly → strong intermolecular contacts → higher melting point and density.", working: "\\text{crystalline}", marks: 1, markCode: "M" },
              { reasoning: "Amorphous regions: disordered chains → weaker IMFs → lower mp.", working: "\\text{amorphous}", marks: 1, markCode: "M" },
              { reasoning: "Branching: side chains prevent close packing → lower crystallinity → lower mp/density.", working: "\\text{branching}", marks: 1, markCode: "A" },
              { reasoning: "Linear unbranched chains (HDPE) pack better → higher mp/density than branched (LDPE).", working: "\\text{HDPE/LDPE}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Crystallinity/linearity raise mp and density; branching lowers them",
            commonErrors: ["Saying all polymers have the same properties."],
            examinerNote: "M1 M1 A1 A1.",
          },
        },
        {
          id: "mypc5-u3-polymers-q16",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Evaluate two strategies for reducing plastic waste: mechanical recycling and developing biodegradable polymers.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "comparison", name: "Waste strategies", statement: "Recycling reuses material; biodegradation returns carbon to environment." },
            ],
            steps: [
              { reasoning: "Mechanical recycling: advantage — saves raw materials and energy vs virgin plastic.", working: "\\text{recycle}", marks: 1, markCode: "M" },
              { reasoning: "Recycling drawback: sorting/contamination limits quality; not all plastics recyclable; downcycling occurs.", working: "\\text{sorting}", marks: 1, markCode: "M" },
              { reasoning: "Biodegradable polymers (PLA): advantage — breaks down naturally, reduces persistence.", working: "\\text{bio}", marks: 1, markCode: "M" },
              { reasoning: "Biodegradable drawback: needs industrial composting conditions; may not degrade in oceans/landfills; feedstock competition.", working: "\\text{conditions}", marks: 1, markCode: "A" },
              { reasoning: "Neither solves overconsumption — reduction/reuse is also essential.", working: "\\text{reduce}", marks: 1, markCode: "A" },
              { reasoning: "Overall: complementary approaches — recycle what can be, design degradable where appropriate, reduce use.", working: "\\text{complementary}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Recycling saves resources but limited; biodegradable reduces persistence but needs conditions; reduction essential",
            commonErrors: ["One-sided evaluation."],
            examinerNote: "M1 M1 M1 A1 A1 A1.",
          },
        },
      ],
    },
    {
      id: "mypc5-u3-plastics",
      title: "Plastics, additives and composites",
      skill: "Describe plastic additives, composites and their effects on properties and environment.",
      lesson: {
        sections: [
          {
            heading: "Additives",
            body: "Plastics are modified with **additives**: plasticisers (soften PVC), pigments/dyes (colour), flame retardants (slow burning), antioxidants (prevent degradation), fillers (reduce cost). Additives can leach out — e.g. phthalate plasticisers in some PVC raise health concerns.",
          },
          {
            heading: "Composites",
            body: "**Composites** combine materials for superior properties: fibreglass (glass fibres in polyester resin) is strong yet light; carbon-fibre composites for aircraft and racing cars; reinforced concrete (steel + concrete) for buildings. The combination outperforms either component alone.",
          },
          {
            heading: "Environmental considerations",
            body: "Plastics persist for centuries; ~8 million tonnes enter oceans yearly. Microplastics (<5 mm) accumulate in food chains. Solutions: reduce single-use items, improve recycling, develop biodegradable polymers (e.g. PLA from corn starch), and design for disassembly.",
          },
        ],
        keyFormulas: [
          { name: "Additive", statement: "Substance added to modify plastic properties" },
          { name: "Composite", statement: "Two+ materials combined; properties exceed components" },
          { name: "Microplastic", statement: "Plastic fragment < 5 mm; accumulates in ecosystems" },
        ],
        workedExample: {
          problem: "Why is fibreglass stronger than either glass fibres or polyester resin alone?",
          solution: "Glass fibres provide tensile strength while the resin matrix transfers loads and protects fibres — the composite combines strength, flexibility and mouldability.",
        },
      },
      questions: [
        {
          id: "mypc5-u3-plastics-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a plasticiser?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Additive that makes plastic softer and more flexible" },
              { id: "b", text: "A type of polymer" },
              { id: "c", text: "A catalyst for polymerisation" },
              { id: "d", text: "A solvent that dissolves plastic" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Plasticiser", statement: "Additive inserted between chains to increase flexibility." },
            ],
            steps: [
              { reasoning: "Plasticisers separate polymer chains → softer material.", working: "\\text{soften}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Softening additive",
            commonErrors: ["Confusing with pigment or flame retardant."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypc5-u3-plastics-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why are composites used in aircraft construction?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Carbon-fibre composites are strong and light, improving fuel efficiency" },
              { id: "b", text: "They are cheaper than metals" },
              { id: "c", text: "They cannot burn" },
              { id: "d", text: "They are magnetic" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Composite advantage", statement: "Strength-to-weight ratio beats single materials." },
            ],
            steps: [
              { reasoning: "Carbon fibres give high tensile strength.", working: "\\text{strength}", marks: 1, markCode: "M" },
              { reasoning: "Low density → lighter aircraft → less fuel.", working: "\\text{light}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "High strength-to-weight ratio",
            commonErrors: ["Saying composites are chosen mainly for low cost."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc5-u3-plastics-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain how microplastics enter food chains and why this is a concern.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Plastics fragment in oceans; plankton ingest them, transferring up the food chain where they may accumulate and release additives" },
              { id: "b", text: "Microplastics dissolve into harmless nutrients" },
              { id: "c", text: "They only affect seaweed" },
              { id: "d", text: "They cannot be ingested" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Microplastics", statement: "Fragments <5 mm ingested at base of food chain; persistent and may carry toxins." },
            ],
            steps: [
              { reasoning: "Large plastics fragment into microplastics in water.", working: "\\text{fragment}", marks: 1, markCode: "M" },
              { reasoning: "Plankton/small organisms ingest them → biomagnification up chain.", working: "\\text{food chain}", marks: 1, markCode: "M" },
              { reasoning: "Concern: persistence + potential toxicity of additives/adsorbed pollutants.", working: "\\text{toxicity}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Ingested by plankton, biomagnify up food chain",
            commonErrors: ["Claiming microplastics are biodegradable."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypc5-u3-plastics-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A sports company currently makes helmets from thermoset composite shells.",
          parts: [
            { label: "a", prompt: "Explain why a thermoset composite is suitable for a safety helmet.", marks: 2 },
            { label: "b", prompt: "Identify one independent and one dependent variable if testing helmet impact resistance.", marks: 2 },
            { label: "c", prompt: "Discuss one environmental benefit and one drawback of composite materials in sports equipment.", marks: 2 },
            { label: "d", prompt: "Suggest one way the company could improve the environmental sustainability of its products.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Composite use", statement: "Cross-linked structure gives rigidity and impact resistance." },
            ],
            steps: [
              { part: "a", reasoning: "Thermoset cross-links make it rigid and unable to deform permanently; fibres absorb impact energy.", working: "\\text{rigid}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Safety = controlled deformation/crumple absorbs energy.", working: "\\text{impact}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Independent: impact energy/dropping height or material type; dependent: force transmitted/crack formation measured.", working: "\\text{variables}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Clear pairing of variables.", working: "\\text{pair}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Benefit: lightweight → less material used, durable → longer life; drawback: difficult to recycle, petroleum-based.", working: "\\text{trade-off}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Balanced discussion.", working: "\\text{balanced}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Use recyclable thermoplastic liner, bio-based resins, take-back recycling scheme, or design for disassembly.", working: "\\text{sustainability}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Feasible suggestion linked to waste reduction.", working: "\\text{feasible}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) cross-linked rigid, absorbs impact (b) impact height/force measured (c) light+durable vs hard to recycle (d) recyclable liner or take-back scheme",
            commonErrors: ["In (b), listing more than one changed variable."],
            examinerNote: "M1 A1 for (a); M1 A1 for (b); M1 A1 for (c); M1 A1 for (d).",
          },
        },
        {
          id: "mypc5-u3-plastics-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a composite material?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Two or more materials combined so the result has better properties than either alone" },
              { id: "b", text: "A single pure polymer" },
              { id: "c", text: "A type of metal alloy only" },
              { id: "d", text: "Recycled plastic pellets" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Composite", statement: "Combination of materials; properties exceed components." },
            ],
            steps: [
              { reasoning: "E.g. fibreglass = glass fibres + resin → strong and light.", working: "\\text{combined}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Combined materials with superior properties",
            commonErrors: ["Confusing composite with a pure polymer."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypc5-u3-plastics-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Microplastics are defined as plastic fragments smaller than what size?",
          response: {
            type: "numeric",
            parts: [{ label: "Size", answer: 5, unit: "mm" }],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Microplastic", statement: "Plastic fragment < 5 mm." },
            ],
            steps: [
              { reasoning: "Microplastics are defined as < $5$ mm.", working: "5", marks: 1, markCode: "B" },
            ],
            finalAnswer: "$<5\\ \\text{mm}$",
            commonErrors: ["Confusing with nanoparticles (<100 nm)."],
            examinerNote: "B1 for 5 mm.",
          },
        },
        {
          id: "mypc5-u3-plastics-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the function of a flame retardant additive in plastics?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It slows down or prevents the plastic from catching fire or burning quickly" },
              { id: "b", text: "It makes the plastic colourful" },
              { id: "c", text: "It softens the plastic" },
              { id: "d", text: "It makes the plastic biodegradable" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Flame retardant", statement: "Additive reducing flammability/burning rate." },
            ],
            steps: [
              { reasoning: "Flame retardants inhibit combustion — used in electronics, furnishings.", working: "\\text{fire}", marks: 1, markCode: "M" },
              { reasoning: "Other additives (pigment, plasticiser) have different functions.", working: "\\text{contrast}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Slows/prevents burning",
            commonErrors: ["Confusing with pigment or plasticiser."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc5-u3-plastics-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "How many of the following are plastic additives mentioned in the lesson: plasticisers, pigments/dyes, flame retardants, antioxidants, fillers?",
          response: {
            type: "numeric",
            parts: [{ label: "Count", answer: 5, unit: "additives" }],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Additives", statement: "Substances added to modify plastic properties." },
            ],
            steps: [
              { reasoning: "Count the listed types: plasticisers, pigments, flame retardants, antioxidants, fillers = 5.", working: "5", marks: 1, markCode: "M" },
              { reasoning: "Answer: $5$.", working: "5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$5$ additives",
            commonErrors: ["Missing one category."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc5-u3-plastics-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "What makes fibreglass stronger than either glass fibres or polyester resin alone?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Glass fibres provide tensile strength while the resin matrix distributes load and protects fibres — combined properties exceed either alone" },
              { id: "b", text: "It is simply heavier" },
              { id: "c", text: "The resin dissolves the fibres" },
              { id: "d", text: "It contains no glass" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Composite synergy", statement: "Components complement: fibres strong, matrix tough/protective." },
            ],
            steps: [
              { reasoning: "Fibres carry tensile loads; resin transfers stress and binds fibres.", working: "\\text{synergy}", marks: 1, markCode: "M" },
              { reasoning: "Result: strength + flexibility + mouldability combined.", working: "\\text{combined}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Fibres + resin matrix combine strengths",
            commonErrors: ["Saying it's just the sum without synergy explanation."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc5-u3-plastics-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "Carbon-fibre composite has density 1.6 g/cm³ while aluminium alloy has density 2.7 g/cm³. How much lighter is the composite per cm³?",
          response: {
            type: "numeric",
            parts: [{ label: "Difference", answer: 1.1, unit: "g/cm³" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Density comparison", statement: "Weight saving = density difference per volume." },
            ],
            steps: [
              { reasoning: "$2.7 - 1.6 = 1.1$ g/cm³ lighter.", working: "2.7-1.6=1.1", marks: 1, markCode: "M" },
              { reasoning: "Answer: $1.1$ g/cm³ (~41% lighter).", working: "1.1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$1.1\\ \\text{g/cm}^3$ lighter",
            commonErrors: ["Dividing instead of subtracting densities."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc5-u3-plastics-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain how microplastics move through food chains and why this concerns scientists.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Plastics fragment into microplastics ingested by plankton and small organisms, then biomagnify up the food chain where they may accumulate and carry toxic additives" },
              { id: "b", text: "Microplastics dissolve into nutrients" },
              { id: "c", text: "They only affect large fish" },
              { id: "d", text: "They cannot be ingested" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Microplastic food chain", statement: "Ingested at base → biomagnification; persistent + potential toxins." },
            ],
            steps: [
              { reasoning: "Large plastics fragment → microplastics ingested by plankton.", working: "\\text{fragment}", marks: 1, markCode: "M" },
              { reasoning: "Transfer up food chain via predation → biomagnification.", working: "\\text{biomagnify}", marks: 1, markCode: "M" },
              { reasoning: "Concern: persistence in tissues + adsorbed pollutants/additives toxicity.", working: "\\text{toxins}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Ingested by plankton → biomagnify; persistent and potentially toxic",
            commonErrors: ["Claiming microplastics are harmless."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypc5-u3-plastics-q12",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "An aircraft component currently made of aluminium alloy (density 2.7 g/cm³) is replaced by carbon-fibre composite (density 1.6 g/cm³) of the same volume. Calculate the mass saving for a 100 cm³ component.",
          response: {
            type: "numeric",
            parts: [{ label: "Mass saved", answer: 110, unit: "g" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Mass = density × volume", statement: "Mass saving = (ρ₁ − ρ₂) × V." },
            ],
            steps: [
              { reasoning: "Mass Al = $2.7 \\times 100 = 270$ g; mass composite = $1.6 \\times 100 = 160$ g.", working: "270;160", marks: 1, markCode: "M" },
              { reasoning: "Saving = $270 - 160 = 110$ g.", working: "110", marks: 1, markCode: "M" },
              { reasoning: "Answer: $110$ g saved (~41% lighter).", working: "110", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$110\\ \\text{g}$ saved",
            commonErrors: ["Using mass = density alone without volume."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypc5-u3-plastics-q13",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Why are antioxidants added to plastics, and what problem do they prevent?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They prevent oxidative degradation — plastics becoming brittle, discoloured and weak when exposed to oxygen/UV over time" },
              { id: "b", text: "They make plastics fireproof" },
              { id: "c", text: "They increase flexibility" },
              { id: "d", text: "They add colour" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Antioxidant", statement: "Additive preventing oxidative degradation of polymer chains." },
            ],
            steps: [
              { reasoning: "Oxygen/UV breaks polymer chains → brittleness, discolouration.", working: "\\text{degradation}", marks: 1, markCode: "M" },
              { reasoning: "Antioxidants scavenge free radicals → extend plastic lifetime.", working: "\\text{radicals}", marks: 1, markCode: "M" },
              { reasoning: "Used in packaging, outdoor plastics.", working: "\\text{uses}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Prevent oxidative degradation → longer lifespan",
            commonErrors: ["Confusing with flame retardants."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypc5-u3-plastics-q14",
          difficulty: "core",
          totalMarks: 4,
          stem: "Describe the role of four different plastic additives and the property each modifies.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Additives", statement: "Substances added to modify specific plastic properties." },
            ],
            steps: [
              { reasoning: "Plasticisers: soften PVC → flexibility.", working: "\\text{plasticiser}", marks: 1, markCode: "M" },
              { reasoning: "Pigments/dyes: add colour.", working: "\\text{pigment}", marks: 1, markCode: "M" },
              { reasoning: "Flame retardants: reduce flammability; antioxidants: prevent oxidative degradation.", working: "\\text{FR+AO}", marks: 1, markCode: "A" },
              { reasoning: "Fillers: reduce cost/add bulk; each additive modifies a specific property.", working: "\\text{fillers}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Plasticiser→flexible; pigment→colour; flame retardant→fire; antioxidant→durability; filler→cost",
            commonErrors: ["Listing additives without their functions."],
            examinerNote: "M1 M1 A1 A1.",
          },
        },
        {
          id: "mypc5-u3-plastics-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Discuss the environmental impact of microplastics and suggest two realistic ways to reduce their entry into oceans.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Microplastic pollution", statement: "Fragments <5 mm accumulate in ecosystems and food chains." },
            ],
            steps: [
              { reasoning: "Impact: ingested by marine organisms → biomagnification; potential toxicity from additives/adsorbed pollutants.", working: "\\text{impact}", marks: 1, markCode: "M" },
              { reasoning: "Persistence: plastics don't biodegrade → accumulate indefinitely.", working: "\\text{persist}", marks: 1, markCode: "M" },
              { reasoning: "Solution 1: reduce single-use plastics (bags, bottles) and improve waste management/recycling.", working: "\\text{reduce}", marks: 1, markCode: "A" },
              { reasoning: "Solution 2: filter microfibres from washing machines / ban microbeads in cosmetics.", working: "\\text{filters}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Bioaccumulation + persistence; reduce use and filter sources",
            commonErrors: ["Suggesting unrealistic solutions like 'clean all oceans'."],
            examinerNote: "M1 M1 A1 A1.",
          },
        },
        {
          id: "mypc5-u3-plastics-q16",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Evaluate the use of composite materials versus traditional metals for aircraft construction.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "comparison", name: "Composites vs metals", statement: "Composites offer strength-to-weight advantages; metals offer toughness/recyclability." },
            ],
            steps: [
              { reasoning: "Advantage: much lower density → lighter aircraft → less fuel consumption and emissions.", working: "\\text{light}", marks: 1, markCode: "M" },
              { reasoning: "Advantage: high strength-to-weight ratio; corrosion resistant (no rusting).", working: "\\text{strength}", marks: 1, markCode: "M" },
              { reasoning: "Disadvantage: manufacturing is complex/expensive; difficult to repair damage.", working: "\\text{cost}", marks: 1, markCode: "M" },
              { reasoning: "Disadvantage: hard to recycle — thermoset composites can't be remelted; landfill/end-of-life issues.", working: "\\text{recycle}", marks: 1, markCode: "A" },
              { reasoning: "Metals: easier to recycle, repair, inspect; but heavier → more fuel.", working: "\\text{metals}", marks: 1, markCode: "A" },
              { reasoning: "Overall: composites preferred for fuel efficiency despite end-of-life challenges.", working: "\\text{overall}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Composites lighter + corrosion-proof vs costly, hard to recycle; net benefit for fuel",
            commonErrors: ["One-sided comparison."],
            examinerNote: "M1 M1 M1 A1 A1 A1.",
          },
        },
      ],
    },
  ],
};
