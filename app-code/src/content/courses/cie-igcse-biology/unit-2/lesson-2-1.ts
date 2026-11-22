import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "cieb-u2-lesson-2-1",
  code: "2-1",
  title: "Biological Molecules",
  goal: "I CAN describe the structure of carbohydrates, proteins and lipids, and use standard food tests to identify them.",
  standards: ["0653 2.1", "0653 2.2", "0653 2.3"],
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
      id: "cieb-u2-biomolecules",
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
          id: "cieb-u2-biomolecules-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which molecule is the monomer of proteins?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Glucose" },
              { id: "b", text: "Glycerol" },
              { id: "c", text: "Amino acid" },
              { id: "d", text: "Fatty acid" },
            ],
            correctChoiceId: "c",
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
          id: "cieb-u2-biomolecules-q2",
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
          id: "cieb-u2-biomolecules-q3",
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
          id: "cieb-u2-biomolecules-q4",
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
        {
          id: "cieb-u2-biomolecules-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of the following is a monosaccharide?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Starch" },
              { id: "b", text: "Sucrose" },
              { id: "c", text: "Cellulose" },
              { id: "d", text: "Glucose" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Monosaccharide", statement: "Simplest sugar — glucose, fructose." },
            ],
            steps: [
              { reasoning: "Identify the simple sugar.", working: "\\text{glucose}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Glucose",
            commonErrors: ["Choosing sucrose — that is a disaccharide."],
          },
        },
        {
          id: "cieb-u2-biomolecules-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The monomer of proteins is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Fatty acid" },
              { id: "b", text: "Monosaccharide" },
              { id: "c", text: "Amino acid" },
              { id: "d", text: "Glycerol" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Protein monomer", statement: "Proteins are polymers of amino acids." },
            ],
            steps: [
              { reasoning: "Recall the monomer.", working: "\\text{amino acid}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Amino acid",
            commonErrors: ["Choosing fatty acid — that is a lipid component."],
          },
        },
        {
          id: "cieb-u2-biomolecules-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Glycogen is mainly found as an energy store in:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Plant cell walls" },
              { id: "b", text: "Fungal spores only" },
              { id: "c", text: "Cell membranes only" },
              { id: "d", text: "Animal cells (e.g. liver and muscle)" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Glycogen", statement: "Highly branched animal/fungal glucose polymer — quick-release energy store." },
            ],
            steps: [
              { reasoning: "Recall where glycogen is stored.", working: "\\text{animal cells}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Animal cells (e.g. liver and muscle)",
            commonErrors: ["Choosing plant cell walls — that is cellulose's role."],
          },
        },
        {
          id: "cieb-u2-biomolecules-q8",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "State the components of a triglyceride molecule.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Triglyceride", statement: "Glycerol + three fatty acids." },
            ],
            steps: [
              { reasoning: "Name glycerol.", working: "\\text{glycerol}", marks: 1, markCode: "M" },
              { reasoning: "Name the fatty acids and their number.", working: "3 \\text{ fatty acids}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "One glycerol molecule joined to three fatty acid molecules.",
            commonErrors: ["Saying two fatty acids — that describes a phospholipid."],
          },
        },
        {
          id: "cieb-u2-biomolecules-q9",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why cellulose is strong enough to form plant cell walls.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Cellulose", statement: "Straight glucose chains linked by hydrogen bonds → strong fibres." },
            ],
            steps: [
              { reasoning: "Cellulose is a polysaccharide of glucose.", working: "\\text{glucose polymer}", marks: 1, markCode: "M" },
              { reasoning: "Chains are straight (not branched).", working: "\\text{straight chains}", marks: 1, markCode: "M" },
              { reasoning: "Hydrogen bonds form between adjacent chains.", working: "\\text{H-bonds}", marks: 1, markCode: "M" },
              { reasoning: "Result: strong fibres for cell walls.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Cellulose is made of straight glucose chains that form hydrogen bonds between adjacent chains, creating strong fibres that give plant cell walls their rigidity.",
            commonErrors: ["Saying cellulose is strong because it stores energy — it is structural, not an energy store."],
          },
        },
        {
          id: "cieb-u2-biomolecules-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "Amino acids in a protein chain are joined by which bond?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Hydrogen bond only" },
              { id: "b", text: "Ionic bond" },
              { id: "c", text: "Peptide bond" },
              { id: "d", text: "Glycosidic bond" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Peptide bond", statement: "Covalent bond joining amino acids in proteins." },
            ],
            steps: [
              { reasoning: "Recall the bond type.", working: "\\text{peptide bond}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Peptide bond",
            commonErrors: ["Choosing glycosidic — that joins sugars in carbohydrates."],
          },
        },
        {
          id: "cieb-u2-biomolecules-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "A protein chain contains 100 amino acids joined by peptide bonds. Calculate the number of peptide bonds in the chain.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 99, unit: "bonds" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Peptide bonds", statement: "$n \\text{ amino acids} \\to (n-1) \\text{ peptide bonds}$" },
            ],
            steps: [
              { reasoning: "Subtract one — the ends are not bonded to each other.", working: "100 - 1 = 99", marks: 1, markCode: "M" },
              { reasoning: "State the answer.", working: "99 \\text{ bonds}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "99 bonds",
            commonErrors: ["Answering 100 — there are only n−1 bonds joining n amino acids."],
          },
        },
        {
          id: "cieb-u2-biomolecules-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "How many fatty acid tails does a phospholipid molecule have?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 2, unit: "tails" }],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Phospholipid", statement: "Glycerol + 2 fatty acids + phosphate group." },
            ],
            steps: [
              { reasoning: "Recall the structure.", working: "2 \\text{ fatty acid tails}", marks: 1, markCode: "M" },
            ],
            finalAnswer: "2 tails",
            commonErrors: ["Answering 3 — three fatty acids make a triglyceride, not a phospholipid."],
          },
        },
        {
          id: "cieb-u2-biomolecules-q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe the structure of a phospholipid molecule.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Phospholipid structure", statement: "Glycerol + 2 fatty acids + phosphate; hydrophilic head, hydrophobic tails." },
            ],
            steps: [
              { reasoning: "Name the components.", working: "\\text{glycerol + 2 FA + phosphate}", marks: 1, markCode: "M" },
              { reasoning: "Describe the head as hydrophilic.", working: "\\text{hydrophilic head}", marks: 1, markCode: "M" },
              { reasoning: "Describe the tails as hydrophobic.", working: "\\text{hydrophobic tails}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "A phospholipid has a glycerol backbone with two fatty acid tails and a phosphate-containing head; the head is hydrophilic and the tails are hydrophobic.",
            commonErrors: ["Saying it has three fatty acids — that is a triglyceride."],
          },
        },
        {
          id: "cieb-u2-biomolecules-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Describe the four levels of protein structure.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Protein structure", statement: "Primary → secondary → tertiary → quaternary." },
            ],
            steps: [
              { reasoning: "Primary: amino acid sequence.", working: "\\text{sequence}", marks: 1, markCode: "M" },
              { reasoning: "Secondary: α-helix/β-sheet from H-bonds.", working: "\\alpha\\text{-helix}", marks: 1, markCode: "M" },
              { reasoning: "Tertiary: 3D folded shape.", working: "\\text{3D fold}", marks: 1, markCode: "M" },
              { reasoning: "Quaternary: multiple chains associated.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Primary = amino acid sequence; secondary = α-helices/β-sheets stabilised by hydrogen bonds; tertiary = overall 3D folding; quaternary = several polypeptide chains associated together.",
            commonErrors: ["Missing quaternary or confusing secondary with tertiary."],
          },
        },
        {
          id: "cieb-u2-biomolecules-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which polysaccharide forms the structural component of plant cell walls?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Cellulose" },
              { id: "b", text: "Starch" },
              { id: "c", text: "Glycogen" },
              { id: "d", text: "Sucrose" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Cellulose", statement: "Structural polysaccharide of plant cell walls." },
            ],
            steps: [
              { reasoning: "Recall the structural carbohydrate.", working: "\\text{cellulose}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Cellulose",
            commonErrors: ["Choosing starch — starch is an energy store, not structural."],
          },
        },
        {
          id: "cieb-u2-biomolecules-q16",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A cellulose chain contains 50 glucose units joined by glycosidic bonds. Calculate the number of glycosidic bonds in the chain.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 49, unit: "bonds" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Glycosidic bonds", statement: "$n \\text{ units} \\to (n-1) \\text{ bonds}$" },
            ],
            steps: [
              { reasoning: "Subtract one — ends are unbonded.", working: "50 - 1 = 49", marks: 1, markCode: "M" },
              { reasoning: "State the answer.", working: "49 \\text{ bonds}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "49 bonds",
            commonErrors: ["Answering 50 — only n−1 bonds join n units."],
          },
        },
      ],
    },
    {
      id: "cieb-u2-food-tests",
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
          id: "cieb-u2-food-tests-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which reagent tests for starch?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Ethanol" },
              { id: "b", text: "Biuret reagent" },
              { id: "c", text: "Benedict's solution" },
              { id: "d", text: "Iodine solution" },
            ],
            correctChoiceId: "d",
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
          id: "cieb-u2-food-tests-q2",
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
          id: "cieb-u2-food-tests-q3",
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
          id: "cieb-u2-food-tests-q4",
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
        {
          id: "cieb-u2-food-tests-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which reagent is used to test for starch?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Biuret reagent" },
              { id: "b", text: "Iodine solution" },
              { id: "c", text: "Hydrochloric acid" },
              { id: "d", text: "Benedict's solution" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Starch test", statement: "Iodine: brown → blue-black." },
            ],
            steps: [
              { reasoning: "Recall the reagent.", working: "\\text{iodine}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Iodine solution",
            commonErrors: ["Choosing Benedict's — that tests reducing sugars."],
          },
        },
        {
          id: "cieb-u2-food-tests-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A positive Benedict's test, after heating, gives:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A blue to orange/red precipitate" },
              { id: "b", text: "A cloudy white emulsion" },
              { id: "c", text: "A brown to blue-black colour" },
              { id: "d", text: "A blue to lilac colour" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Benedict's result", statement: "Blue → orange/red precipitate on heating with reducing sugar." },
            ],
            steps: [
              { reasoning: "Recall the colour change.", working: "\\text{blue} \\to \\text{orange/red}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** A blue to orange/red precipitate",
            commonErrors: ["Choosing lilac — that is the Biuret protein test."],
          },
        },
        {
          id: "cieb-u2-food-tests-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which test is used to detect protein?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Benedict's without heating" },
              { id: "b", text: "Biuret test (NaOH + CuSO₄)" },
              { id: "c", text: "Ethanol emulsion test" },
              { id: "d", text: "Iodine test" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Biuret test", statement: "Detects protein: blue → lilac/violet." },
            ],
            steps: [
              { reasoning: "Recall the test for protein.", working: "\\text{Biuret}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Biuret test (NaOH + CuSO₄)",
            commonErrors: ["Choosing iodine — that detects starch."],
          },
        },
        {
          id: "cieb-u2-food-tests-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Describe the ethanol emulsion test for lipid.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Lipid test", statement: "Ethanol + shake + water → cloudy white emulsion." },
            ],
            steps: [
              { reasoning: "Add ethanol and shake the sample.", working: "\\text{ethanol + shake}", marks: 1, markCode: "M" },
              { reasoning: "Add water → cloudy white emulsion if lipid present.", working: "\\text{water} \\to \\text{emulsion}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Add ethanol to the sample and shake, then add water; a cloudy white emulsion forms if lipid is present.",
            commonErrors: ["Forgetting the water step — the emulsion only forms when water is added."],
          },
        },
        {
          id: "cieb-u2-food-tests-q9",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why a food sample containing carbohydrate might still give a negative result with Benedict's solution.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Benedict's limitations", statement: "Detects reducing sugars only and needs heating." },
            ],
            steps: [
              { reasoning: "The carbohydrate may be a non-reducing sugar (e.g. sucrose).", working: "\\text{non-reducing sugar}", marks: 1, markCode: "M" },
              { reasoning: "Or it may be starch, which needs the iodine test instead.", working: "\\text{starch}", marks: 1, markCode: "M" },
              { reasoning: "Benedict's must be heated — cold test stays blue.", working: "\\text{heating required}", marks: 1, markCode: "M" },
              { reasoning: "Conclude: negative Benedict's does not rule out all carbohydrate.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Benedict's only detects reducing sugars and needs heating; sucrose is non-reducing and starch is not a sugar at all — so a carbohydrate-containing food can still test negative with Benedict's.",
            commonErrors: ["Saying Benedict's detects 'all sugars' — it misses non-reducing sugars."],
          },
        },
        {
          id: "cieb-u2-food-tests-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which food test requires the mixture to be heated?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Iodine test" },
              { id: "b", text: "Ethanol emulsion test" },
              { id: "c", text: "Benedict's test" },
              { id: "d", text: "Biuret test" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Benedict's", statement: "The reduction reaction only occurs on heating." },
            ],
            steps: [
              { reasoning: "Recall which test needs heat.", working: "\\text{Benedict's}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Benedict's test",
            commonErrors: ["Choosing Biuret — it is done at room temperature."],
          },
        },
        {
          id: "cieb-u2-food-tests-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "A student tests 20 food samples for protein. 12 give a positive Biuret result. Calculate the percentage of samples containing protein.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 60, unit: "%" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage", statement: "$\\frac{12}{20} \\times 100 = 60\\%$" },
            ],
            steps: [
              { reasoning: "Divide positives by total and convert to percentage.", working: "\\frac{12}{20} \\times 100 = 60", marks: 1, markCode: "M" },
              { reasoning: "State the answer.", working: "60\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "60%",
            commonErrors: ["Forgetting to multiply by 100 — giving 0.6."],
          },
        },
        {
          id: "cieb-u2-food-tests-q12",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "An unknown food sample turns blue-black with iodine but shows no colour change with Benedict's, even after heating. Identify which molecules are present and which are absent.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Test interpretation", statement: "Iodine blue-black = starch; Benedict's negative = no reducing sugar." },
            ],
            steps: [
              { reasoning: "Iodine result → starch present.", working: "\\text{starch present}", marks: 1, markCode: "M" },
              { reasoning: "Benedict's negative → no reducing sugar present.", working: "\\text{no reducing sugar}", marks: 1, markCode: "M" },
              { reasoning: "State both conclusions clearly.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Starch is present (iodine turned blue-black); reducing sugar is absent (Benedict's stayed blue even after heating).",
            commonErrors: ["Claiming 'no carbohydrate' — starch is a carbohydrate that Benedict's cannot detect."],
          },
        },
        {
          id: "cieb-u2-food-tests-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "The positive result of the ethanol emulsion test for lipid is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A lilac colour" },
              { id: "b", text: "A clear blue solution" },
              { id: "c", text: "A cloudy white emulsion" },
              { id: "d", text: "A blue-black colour" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Lipid test", statement: "Positive = cloudy white emulsion." },
            ],
            steps: [
              { reasoning: "Recall the positive result.", working: "\\text{cloudy white emulsion}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** A cloudy white emulsion",
            commonErrors: ["Choosing lilac — that is protein."],
          },
        },
        {
          id: "cieb-u2-food-tests-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "State why a control sample should be tested alongside an unknown food sample.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Control", statement: "Verifies the reagent and method are working correctly." },
            ],
            steps: [
              { reasoning: "It confirms the reagent is fresh/working.", working: "\\text{reagent validity}", marks: 1, markCode: "M" },
              { reasoning: "It shows the result is due to the sample, not an error.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "A control (known positive/negative) confirms the reagent is working and the method is correct, so any colour change in the unknown can be trusted as a real result.",
            commonErrors: ["Saying the control 'adds accuracy to the sample' — it validates the test itself."],
          },
        },
        {
          id: "cieb-u2-food-tests-q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "A student tests 5 food samples for lipid using the ethanol emulsion test. 4 give a positive result. Calculate the percentage of samples containing lipid.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 80, unit: "%" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage", statement: "$\\frac{4}{5} \\times 100 = 80\\%$" },
            ],
            steps: [
              { reasoning: "Divide positives by total and convert to percentage.", working: "\\frac{4}{5} \\times 100 = 80", marks: 1, markCode: "M" },
              { reasoning: "State the answer.", working: "80\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "80%",
            commonErrors: ["Giving 0.8 instead of 80%."],
          },
        },
        {
          id: "cieb-u2-food-tests-q16",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "In a class survey, 36 out of 48 samples give a positive Benedict's test. Calculate the percentage of samples containing reducing sugar.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 75, unit: "%" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage", statement: "$\\frac{36}{48} \\times 100 = 75\\%$" },
            ],
            steps: [
              { reasoning: "Divide positives by total and convert to percentage.", working: "\\frac{36}{48} \\times 100 = 75", marks: 1, markCode: "M" },
              { reasoning: "State the answer.", working: "75\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "75%",
            commonErrors: ["Forgetting ×100 or simplifying the fraction incorrectly."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieb-u2-biological-molecules-notes",
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
