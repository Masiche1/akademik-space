import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "olbio-u2-lesson-2-1",
  code: "2-1",
  title: "Biological Molecules",
  goal: "I CAN describe the structure of carbohydrates, proteins and lipids, and use standard food tests to identify them.",
  standards: ["5090 2.1", "5090 2.2", "5090 2.3"],
  vocabulary: [
    { term: "Monosaccharide", definition: "Simplest sugar, e.g. glucose; general formula (CH₂O)n." },
    { term: "Disaccharide", definition: "Two monosaccharides joined by a glycosidic bond, e.g. sucrose, maltose." },
    { term: "Polysaccharide", definition: "Many glucose units polymerised, e.g. starch, glycogen, cellulose." },
    { term: "Glycosidic bond", definition: "Bond joining monosaccharide units in carbohydrates." },
    { term: "Amino acid", definition: "Monomer of proteins; has amino and carboxyl groups." },
    { term: "Peptide bond", definition: "Bond joining amino acids in a protein chain." },
    { term: "Triglyceride", definition: "Lipid made of glycerol + three fatty acids; energy store." },
    { term: "Phospholipid", definition: "Lipid with hydrophilic head and hydrophobic tails; forms membranes." },
  ],
  concepts: [
    {
      id: "olbio-u2-biomolecules",
      title: "Carbohydrates, proteins and lipids",
      skill: "Describe the monomers, structure and functions of the main biological molecules.",
      lesson: {
        sections: [
          {
            heading: "Carbohydrates",
            body: "- **Monosaccharides**: glucose, fructose — simplest sugars, formula (CH₂O)n.\n- **Disaccharides**: sucrose, maltose, lactose — two monosaccharides + glycosidic bond.\n- **Polysaccharides**:\n  - Starch (plants): amylose/amylopectin — energy store.\n  - Glycogen (animals/fungi): highly branched — energy store.\n  - Cellulose (plants): straight chains, H-bonds → strong fibres in cell walls.",
          },
          {
            heading: "Proteins",
            body: "- Made of **amino acids** joined by **peptide bonds**.\n- Structure levels: primary (sequence) → secondary (α-helix/β-sheet) → tertiary (3D fold) → quaternary (multiple chains).\n- Functions: enzymes, antibodies, haemoglobin, structural (keratin, collagen).",
          },
          {
            heading: "Lipids",
            body: "- **Triglycerides**: glycerol + 3 fatty acids; insoluble in water; energy store and insulation.\n- **Phospholipids**: glycerol + 2 fatty acids + phosphate; hydrophilic head / hydrophobic tails → bilayer of cell membranes.\n- **Steroids**: e.g. cholesterol — cell membranes, hormones.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Why is starch a good energy-storage molecule in plants?",
          solution: "Starch is a polysaccharide of glucose — insoluble, compact, and easily broken down to release glucose for respiration.",
        },
      },
      questions: [
        {
          id: "olbio-u2-biomolecules-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which molecule is the monomer of proteins?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Amino acid" },
              { id: "b", text: "Glucose" },
              { id: "c", text: "Glycerol" },
              { id: "d", text: "Fatty acid" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Protein monomer", statement: "Proteins are polymers of amino acids." },
            ],
            steps: [
              { reasoning: "Recall the monomer.", working: "\\text{amino acid}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Amino acid",
            commonErrors: ["Choosing glucose — that's the monomer of carbohydrates."],
          },
        },
        {
          id: "olbio-u2-biomolecules-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "State the difference between starch and cellulose.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Starch vs cellulose", statement: "Both glucose polymers; starch = energy store (branched amylopectin), cellulose = structural fibre (straight chains + H-bonds)." },
            ],
            steps: [
              { reasoning: "State a structural or functional difference.", working: "\\text{energy store vs structure}", marks: 1, markCode: "M" },
              { reasoning: "Give detail (branching/H-bonds).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Starch is a branched energy-storage polysaccharide; cellulose is straight-chained with hydrogen bonds, giving strength for cell walls.",
            commonErrors: ["Saying cellulose stores energy — it is structural."],
          },
        },
        {
          id: "olbio-u2-biomolecules-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why phospholipids form the basis of cell membranes.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Phospholipid", statement: "Hydrophilic phosphate head + hydrophobic fatty acid tails." },
            ],
            steps: [
              { reasoning: "Identify the amphipathic structure.", working: "\\text{head hydrophilic, tails hydrophobic}", marks: 1, markCode: "M" },
              { reasoning: "Explain self-assembly in water.", working: "\\text{tails inward, heads outward}", marks: 1, markCode: "M" },
              { reasoning: "Link to membrane function.", working: "\\text{bilayer barrier}", marks: 1, markCode: "M" },
              { reasoning: "Complete explanation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Phospholipids have hydrophilic heads and hydrophobic tails; in water they self-assemble into a bilayer with tails inside, forming a selectively permeable barrier.",
            commonErrors: ["Describing triglycerides instead of phospholipids."],
          },
        },
        {
          id: "olbio-u2-biomolecules-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Consider the three major biological molecules: carbohydrates, proteins, lipids.",
          parts: [
            { label: "a", prompt: "State the monomer of each molecule.", marks: 3 },
            { label: "b", prompt: "Give one example and one function of each.", marks: 3 },
            { label: "c", prompt: "Explain why lipids, not carbohydrates, are the main long-term energy store in animals.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Monomers", statement: "Carb: monosaccharide; protein: amino acid; lipid: fatty acid + glycerol." },
              { kind: "property", name: "Lipid energy", statement: "Higher energy per gram; insoluble → compact storage." },
            ],
            steps: [
              { part: "a", reasoning: "Carbohydrate monomer: monosaccharide (glucose).", working: "\\text{monosaccharide}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Protein monomer: amino acid.", working: "\\text{amino acid}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Lipid components: fatty acids + glycerol.", working: "\\text{fatty acids + glycerol}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Give examples/functions for carbs.", working: "\\text{starch/glucose — energy}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Give examples/functions for proteins and lipids.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State all answers clearly.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Lipids yield more energy per gram.", working: "\\text{higher energy density}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Insoluble → stored compactly without water.", working: "\\text{insoluble/compact}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Conclude long-term store.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) monosaccharide / amino acid / fatty acids+glycerol (b) examples+functions (c) higher energy density, insoluble storage",
            commonErrors: ["In (a) giving 'glucose' for all carbohydrates — monosaccharide is the class."],
          },
        },
      ],
    },
    {
      id: "olbio-u2-food-tests",
      title: "Food tests",
      skill: "Describe the standard tests for reducing sugars, starch, proteins and lipids and interpret results.",
      lesson: {
        sections: [
          {
            heading: "Test table",
            body: "| Molecule | Test | Positive result |\n|---|---|---|\n| Reducing sugar | Benedict's solution, heat | blue → orange/red precipitate |\n| Starch | Iodine solution | brown → blue-black |\n| Protein | Biuret test (NaOH + CuSO₄) | blue → lilac/violet |\n| Lipid | Ethanol emulsion | cloudy white emulsion |",
          },
          {
            heading: "Details that earn marks",
            body: "- Benedict's needs **heating** — cold Benedict's stays blue even with sugar.\n- Ethanol test: add ethanol, shake, add water → white cloudy emulsion.\n- Biuret: add NaOH first, then a few drops of CuSO₄ (or vice versa in some specs).",
          },
          {
            heading: "Controls",
            body: "Always run a known negative/positive sample to confirm the reagent works.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "A food sample turns Benedict's solution orange after heating. What does this show?",
          solution: "A reducing sugar is present. Orange indicates moderate concentration; brick-red would be high.",
        },
      },
      questions: [
        {
          id: "olbio-u2-food-tests-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which reagent tests for starch?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Iodine solution" },
              { id: "b", text: "Benedict's solution" },
              { id: "c", text: "Biuret reagent" },
              { id: "d", text: "Ethanol" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Starch test", statement: "Iodine: brown → blue-black." },
            ],
            steps: [
              { reasoning: "Recall the test.", working: "\\text{iodine}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Iodine solution",
            commonErrors: ["Choosing Benedict's — that's for reducing sugars."],
          },
        },
        {
          id: "olbio-u2-food-tests-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Describe the test for protein and its positive result.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Biuret test", statement: "NaOH + CuSO₄; blue → lilac/violet." },
            ],
            steps: [
              { reasoning: "Name the reagents and procedure.", working: "\\text{NaOH + CuSO4}", marks: 1, markCode: "M" },
              { reasoning: "State the colour change.", working: "\\text{blue → lilac}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Add NaOH then CuSO₄ (Biuret); blue solution turns lilac/violet if protein is present.",
            commonErrors: ["Omitting NaOH or giving Benedict's result."],
          },
        },
        {
          id: "olbio-u2-food-tests-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A student adds Benedict's solution to a sample and it stays blue. They conclude there is no sugar. Evaluate this conclusion.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Benedict's", statement: "Detects REDUCING sugars only; must be heated." },
            ],
            steps: [
              { reasoning: "Point 1: Benedict's only detects reducing sugars — sucrose is non-reducing.", working: "\\text{reducing only}", marks: 1, markCode: "M" },
              { reasoning: "Point 2: sample must be heated for the reaction.", working: "\\text{heat required}", marks: 1, markCode: "M" },
              { reasoning: "Point 3: could still contain starch/lipid/protein — test with other reagents.", working: "\\text{other molecules}", marks: 1, markCode: "M" },
              { reasoning: "Conclude: conclusion is not fully justified.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Not justified — Benedict's detects only reducing sugars, needs heating, and other molecules need different tests.",
            commonErrors: ["Only mentioning heating and missing the reducing-sugar point."],
          },
        },
        {
          id: "olbio-u2-food-tests-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "You are given an unknown food sample and must test it for all four biological molecules.",
          parts: [
            { label: "a", prompt: "Describe the test for reducing sugar, including the positive result.", marks: 2 },
            { label: "b", prompt: "Describe the test for lipid, including the positive result.", marks: 2 },
            { label: "c", prompt: "Describe the test for starch.", marks: 2 },
            { label: "d", prompt: "Explain why a control sample should be tested alongside the unknown.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Food tests", statement: "Benedict's/heat; ethanol emulsion; iodine." },
              { kind: "technique", name: "Control", statement: "Verifies reagents and method are working." },
            ],
            steps: [
              { part: "a", reasoning: "Benedict's + heat; blue → orange/red.", working: "\\text{Benedict's}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Complete description.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Ethanol then water; cloudy white emulsion.", working: "\\text{ethanol emulsion}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Complete description.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Iodine; brown → blue-black.", working: "\\text{iodine}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State result.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Control confirms reagent is fresh/working.", working: "\\text{reagent validity}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Detects contamination or technique errors.", working: "\\text{errors}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Makes results comparable/interpretable.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Benedict's + heat → orange/red (b) ethanol emulsion → cloudy white (c) iodine → blue-black (d) control validates reagents and method",
            commonErrors: ["In (b) forgetting the water step that produces the emulsion."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "olbio-u2-biological-molecules-notes",
      title: "Biological molecules — revision notes",
      summary: "Structure of carbohydrates, proteins and lipids; standard food tests.",
      sections: [
        {
          heading: "Polymers and monomers",
          body: "Carbs: mono/di/polysaccharides (glucose units). Proteins: amino acids + peptide bonds. Lipids: glycerol + fatty acids (triglycerides) or + phosphate (phospholipids).",
        },
        {
          heading: "Food tests",
          body: "Reducing sugar: Benedict's + heat → orange/red. Starch: iodine → blue-black. Protein: Biuret → lilac. Lipid: ethanol emulsion → cloudy white.",
        },
        {
          heading: "Exam technique",
          body: "Benedict's needs heat AND only detects reducing sugars. Link structure to function: glycogen branched for quick release; cellulose H-bonds for strength; phospholipid bilayer for membranes.",
        },
      ],
    },
  ],
};
