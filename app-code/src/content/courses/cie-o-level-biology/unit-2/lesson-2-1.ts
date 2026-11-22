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
              { id: "a", text: "Glycerol" },
              { id: "b", text: "Fatty acid" },
              { id: "c", text: "Amino acid" },
              { id: "d", text: "Glucose" },
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
        {
          id: "olbio-u2-biomolecules-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The monomer of carbohydrates is a:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Monosaccharide" },
              { id: "b", text: "Fatty acid" },
              { id: "c", text: "Nucleotide" },
              { id: "d", text: "Amino acid" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Carbohydrate monomer", statement: "Carbohydrates are polymers of monosaccharides (e.g. glucose)." },
            ],
            steps: [
              { reasoning: "Recall the monomer.", working: "\\text{monosaccharide}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Monosaccharide",
            commonErrors: ["Choosing amino acid — that is the monomer of proteins."],
          },
        },
        {
          id: "olbio-u2-biomolecules-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Cellulose is best described as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A disaccharide" },
              { id: "b", text: "A structural polysaccharide in plant cell walls" },
              { id: "c", text: "An energy-storage polysaccharide in animals" },
              { id: "d", text: "A lipid" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Cellulose", statement: "Straight glucose chains with hydrogen bonds → strong fibres in plant cell walls." },
            ],
            steps: [
              { reasoning: "Recall cellulose's role.", working: "\\text{structural}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** A structural polysaccharide in plant cell walls",
            commonErrors: ["Saying it stores energy — that is starch/glycogen."],
          },
        },
        {
          id: "olbio-u2-biomolecules-q7",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Which of the following is a disaccharide?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sucrose" },
              { id: "b", text: "Cellulose" },
              { id: "c", text: "Glucose" },
              { id: "d", text: "Starch" },
            ],
            aorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Disaccharide", statement: "Two monosaccharides joined by a glycosidic bond — e.g. sucrose, maltose, lactose." },
            ],
            steps: [
              { reasoning: "Identify which option has two sugar units.", working: "\\text{2 units}", marks: 1, markCode: "M" },
              { reasoning: "Sucrose = glucose + fructose.", working: "\\text{sucrose}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Sucrose",
            commonErrors: ["Choosing glucose — that is a monosaccharide."],
          },
        },
        {
          id: "olbio-u2-biomolecules-q8",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A polypeptide chain is made of 20 amino acids joined by peptide bonds. Calculate the number of peptide bonds in the chain.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 19, unit: "bonds" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Peptide bonds", statement: "Number of peptide bonds = number of amino acids - 1." },
            ],
            steps: [
              { reasoning: "Apply the formula.", working: "20 - 1 = 19", marks: 1, markCode: "M" },
              { reasoning: "State the answer.", working: "19 \\text{ bonds}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "19 peptide bonds",
            commonErrors: ["Answering 20 — the first and last amino acids have free ends."],
          },
        },
        {
          id: "olbio-u2-biomolecules-q9",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A protein is formed by condensation of 100 amino acid molecules. (a) Calculate the number of peptide bonds formed. (b) Calculate the number of water molecules released during the condensation.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 99, unit: "bonds" },
              { label: "b", answer: 99, unit: "molecules" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Condensation", statement: "Each peptide bond formed releases one water molecule; bonds = residues - 1." },
            ],
            steps: [
              { reasoning: "Peptide bonds = 100 - 1.", working: "100 - 1 = 99", marks: 1, markCode: "M" },
              { reasoning: "Each bond formed by condensation releases one water molecule.", working: "\\text{99 bonds} \\to \\text{99 water}", marks: 1, markCode: "M" },
              { reasoning: "State both answers.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 99 peptide bonds; (b) 99 water molecules released",
            commonErrors: ["In (b) answering 100 — only bonds formed release water."],
          },
        },
        {
          id: "olbio-u2-biomolecules-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "How many fatty acid molecules combine with one glycerol molecule to form a triglyceride?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 3, unit: "molecules" }],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Triglyceride structure", statement: "Glycerol + 3 fatty acids joined by ester bonds." },
            ],
            steps: [
              { reasoning: "Recall the structure of a triglyceride.", working: "\\text{glycerol} + 3 \\text{ FA}", marks: 1, markCode: "M" },
              { reasoning: "State the number.", working: "3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "3 fatty acid molecules",
            commonErrors: ["Answering 2 — that describes a phospholipid, not a triglyceride."],
          },
        },
        {
          id: "olbio-u2-biomolecules-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "A peptide bond forms between which two groups of adjacent amino acids?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Two amino groups" },
              { id: "b", text: "Two carboxyl groups" },
              { id: "c", text: "A carboxyl group and an amino group" },
              { id: "d", text: "A phosphate and a sugar" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Peptide bond", statement: "Condensation between -COOH of one amino acid and -NH₂ of the next, releasing water." },
            ],
            steps: [
              { reasoning: "Recall the groups involved.", working: "\\text{-COOH + -NH}_2", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** A carboxyl group and an amino group",
            commonErrors: ["Choosing two amino groups — the bond needs one of each."],
          },
        },
        {
          id: "olbio-u2-biomolecules-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "Define a glycosidic bond.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Glycosidic bond", statement: "Bond joining monosaccharide units in carbohydrates, formed by condensation." },
            ],
            steps: [
              { reasoning: "State what it joins.", working: "\\text{monosaccharides}", marks: 1, markCode: "M" },
              { reasoning: "Complete the definition.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "A bond formed by condensation that joins monosaccharide units together in carbohydrates.",
            commonErrors: ["Confusing with peptide bond — glycosidic bonds join sugars."],
          },
        },
        {
          id: "olbio-u2-biomolecules-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why cellulose is strong enough to form plant cell walls.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Cellulose strength", statement: "Straight glucose chains form hydrogen bonds between adjacent chains → strong fibres." },
            ],
            steps: [
              { reasoning: "Cellulose is a polysaccharide of glucose.", working: "\\text{glucose polymer}", marks: 1, markCode: "M" },
              { reasoning: "Chains are straight and run parallel.", working: "\\text{straight chains}", marks: 1, markCode: "M" },
              { reasoning: "Hydrogen bonds form between chains.", working: "\\text{H-bonds}", marks: 1, markCode: "M" },
              { reasoning: "This gives rigidity and strength for cell walls.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Cellulose consists of straight glucose chains that align parallel and form many hydrogen bonds between adjacent chains, creating strong fibres ideal for cell walls.",
            commonErrors: ["Saying cellulose is branched — branching is a feature of amylopectin/glycogen."],
          },
        },
        {
          id: "olbio-u2-biomolecules-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which lipid is amphipathic (has both hydrophilic and hydrophobic regions)?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Phospholipid" },
              { id: "b", text: "Triglyceride" },
              { id: "c", text: "Cholesterol" },
              { id: "d", text: "Starch" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Phospholipid", statement: "Hydrophilic phosphate head + hydrophobic fatty acid tails." },
            ],
            steps: [
              { reasoning: "Recall the amphipathic structure.", working: "\\text{head + tails}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Phospholipid",
            commonErrors: ["Choosing triglyceride — it is entirely hydrophobic."],
          },
        },
        {
          id: "olbio-u2-biomolecules-q15",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Describe the levels of protein structure.",
          parts: [
            { label: "a", prompt: "Describe the primary structure.", marks: 2 },
            { label: "b", prompt: "Describe the secondary and tertiary structures.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Protein structure", statement: "Primary = amino acid sequence; secondary = α-helix/β-sheet; tertiary = 3D fold; quaternary = multiple chains." },
            ],
            steps: [
              { part: "a", reasoning: "Sequence of amino acids joined by peptide bonds.", working: "\\text{sequence}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Determines all higher levels.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Secondary: α-helices and β-sheets from H-bonds.", working: "\\alpha/\\beta", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Tertiary: overall 3D folding.", working: "\\text{3D fold}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Gives the protein its specific shape/function.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) the amino acid sequence (b) secondary = α-helix/β-sheet; tertiary = 3D folded shape",
            commonErrors: ["Confusing secondary with tertiary — secondary is local folding, tertiary is the whole 3D shape."],
          },
        },
        {
          id: "olbio-u2-biomolecules-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Compare the roles of carbohydrates, proteins and lipids as energy stores in animals.",
          parts: [
            { label: "a", prompt: "State the carbohydrate energy store in animals and its structure.", marks: 2 },
            { label: "b", prompt: "Describe how lipids are stored and their advantage as long-term stores.", marks: 3 },
            { label: "c", prompt: "Explain why proteins are not used as a main energy store.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Energy stores", statement: "Glycogen = short-term carbohydrate store; lipids = long-term store; proteins have structural/functional roles." },
            ],
            steps: [
              { part: "a", reasoning: "Glycogen is the animal carbohydrate store.", working: "\\text{glycogen}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Highly branched glucose polymer.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Lipids stored as triglycerides in adipose tissue.", working: "\\text{triglycerides/adipose}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Higher energy per gram and insoluble → compact storage.", working: "\\text{energy density}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "No water needed for storage → lighter.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Proteins have specific shapes/functions (enzymes, structure).", working: "\\text{specific roles}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Breaking them down loses function.", working: "\\text{loss of function}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "They are needed for growth and repair.", working: "\\text{growth/repair}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Therefore lipids/carbs are preferred energy stores.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) glycogen, branched glucose polymer (b) triglycerides in adipose tissue; high energy density, insoluble storage (c) proteins have specific functions and are needed for growth/repair",
            commonErrors: ["Saying proteins store energy — they can be respired but are not storage molecules."],
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
              { id: "a", text: "Benedict's solution" },
              { id: "b", text: "Ethanol" },
              { id: "c", text: "Iodine solution" },
              { id: "d", text: "Biuret reagent" },
            ],
            correctChoiceId: "c",
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
        {
          id: "olbio-u2-food-tests-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A positive Benedict's test for reducing sugar produces which colour change?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Clear to cloudy white" },
              { id: "b", text: "Brown to blue-black" },
              { id: "c", text: "Blue to lilac" },
              { id: "d", text: "Blue to orange/red precipitate" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Benedict's test", statement: "Blue → orange/red precipitate on heating if reducing sugar present." },
            ],
            steps: [
              { reasoning: "Recall the colour change.", working: "\\text{blue} \\to \\text{orange/red}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Blue to orange/red precipitate",
            commonErrors: ["Choosing blue-black — that is the iodine test for starch."],
          },
        },
        {
          id: "olbio-u2-food-tests-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "A positive Biuret test for protein produces which colour?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Orange" },
              { id: "b", text: "Lilac/violet" },
              { id: "c", text: "Blue-black" },
              { id: "d", text: "Blue" },
            ],
            borrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Biuret test", statement: "Blue solution turns lilac/violet in the presence of protein." },
            ],
            steps: [
              { reasoning: "Recall the colour change.", working: "\\text{blue} \\to \\text{lilac}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Lilac/violet",
            commonErrors: ["Choosing blue-black — that is the iodine test."],
          },
        },
        {
          id: "olbio-u2-food-tests-q7",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "In the ethanol emulsion test for lipid, what is the positive result?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A cloudy white emulsion forms after adding water" },
              { id: "b", text: "Solution turns blue-black" },
              { id: "c", text: "Solution turns lilac" },
              { id: "d", text: "A precipitate forms on heating" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Lipid test", statement: "Ethanol + water → cloudy white emulsion if lipid present." },
            ],
            steps: [
              { reasoning: "Recall the procedure result.", working: "\\text{ethanol + water}", marks: 1, markCode: "M" },
              { reasoning: "State the positive result.", working: "\\text{cloudy white}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** A cloudy white emulsion forms after adding water",
            commonErrors: ["Forgetting the water step — the emulsion only appears after water is added."],
          },
        },
        {
          id: "olbio-u2-food-tests-q8",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A student tests 10 food samples for reducing sugar with Benedict's solution. Seven samples give a positive result. Calculate the percentage of samples testing positive.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 70, unit: "%" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage", statement: "Percentage = part / whole x 100." },
            ],
            steps: [
              { reasoning: "Divide positive results by total samples and multiply by 100.", working: "\\frac{7}{10} \\times 100 = 70\\%", marks: 1, markCode: "M" },
              { reasoning: "State the answer.", working: "70\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "70%",
            commonErrors: ["Giving 0.7 instead of 70%."],
          },
        },
        {
          id: "olbio-u2-food-tests-q9",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "In a class test, 20 samples are tested for lipid (ethanol emulsion) and for protein (Biuret). For lipid, 5 samples are positive; for protein, 15 samples are positive. (a) Calculate the percentage positive for the lipid test. (b) Calculate the percentage positive for the protein test.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 25, unit: "%" },
              { label: "b", answer: 75, unit: "%" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage", statement: "Percentage = positives / total x 100." },
            ],
            steps: [
              { reasoning: "Lipid: 5/20 x 100 = 25%.", working: "\\frac{5}{20} \\times 100 = 25\\%", marks: 1, markCode: "M" },
              { reasoning: "Protein: 15/20 x 100 = 75%.", working: "\\frac{15}{20} \\times 100 = 75\\%", marks: 1, markCode: "M" },
              { reasoning: "State both percentages.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 25%; (b) 75%",
            commonErrors: ["Swapping the two answers — check which test each count belongs to."],
          },
        },
        {
          id: "olbio-u2-food-tests-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "Four samples are tested with Benedict's solution and heated. Sample 1 stays blue, sample 2 turns green, sample 3 turns orange, and sample 4 turns brick-red. How many samples contain reducing sugar?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 3, unit: "samples" }],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Benedict's result", statement: "Any colour change from blue (green, yellow, orange, brick-red) indicates a reducing sugar." },
            ],
            steps: [
              { reasoning: "Identify which samples changed colour.", working: "\\text{green/orange/brick-red}", marks: 1, markCode: "M" },
              { reasoning: "Count them: samples 2, 3 and 4.", working: "3 \\text{ samples}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "3 samples",
            commonErrors: ["Counting only brick-red — green is also a positive result."],
          },
        },
        {
          id: "olbio-u2-food-tests-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "In the Biuret test, which two reagents are used?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Ethanol and water" },
              { id: "b", text: "Iodine and water" },
              { id: "c", text: "Sodium hydroxide and copper sulfate" },
              { id: "d", text: "Benedict's and heat" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Biuret reagents", statement: "NaOH + CuSO₄ (or the combined Biuret reagent)." },
            ],
            steps: [
              { reasoning: "Recall the reagents.", working: "\\text{NaOH + CuSO}_4", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Sodium hydroxide and copper sulfate",
            commonErrors: ["Choosing ethanol — that is the lipid test."],
          },
        },
        {
          id: "olbio-u2-food-tests-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "Describe the test for a reducing sugar, including the positive result.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Benedict's test", statement: "Add Benedict's solution and heat; blue → orange/red precipitate if reducing sugar present." },
            ],
            steps: [
              { reasoning: "Name reagent and procedure including heating.", working: "\\text{Benedict's + heat}", marks: 1, markCode: "M" },
              { reasoning: "State the colour change.", working: "\\text{blue} \\to \\text{orange/red}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Add Benedict's solution to the sample and heat in a water bath; a blue-to-orange/red colour change shows a reducing sugar is present.",
            commonErrors: ["Omitting the heating step."],
          },
        },
        {
          id: "olbio-u2-food-tests-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why Benedict's solution must be heated for the reducing sugar test.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Benedict's reaction", statement: "Heating is required for the redox reaction between Benedict's and the reducing sugar to proceed." },
            ],
            steps: [
              { reasoning: "The reaction is a redox reaction requiring energy.", working: "\\text{redox needs energy}", marks: 1, markCode: "M" },
              { reasoning: "Heating provides this energy / speeds the reaction.", working: "\\text{heat}", marks: 1, markCode: "M" },
              { reasoning: "Without heat the solution stays blue even with sugar.", working: "\\text{stays blue}", marks: 1, markCode: "M" },
              { reasoning: "Conclude: false negatives occur without heating.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Heating provides the energy needed for the reaction between Benedict's and reducing sugar; without it the solution remains blue and a positive result would be missed.",
            commonErrors: ["Saying 'to sterilise' — heating is for the chemical reaction, not sterility."],
          },
        },
        {
          id: "olbio-u2-food-tests-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which food test detects starch?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Biuret reagent" },
              { id: "b", text: "Benedict's solution" },
              { id: "c", text: "Ethanol emulsion" },
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
            finalAnswer: "**(b)** Iodine solution",
            commonErrors: ["Choosing Benedict's — that detects reducing sugars."],
          },
        },
        {
          id: "olbio-u2-food-tests-q15",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A student performs the four standard food tests on an unknown sample.",
          parts: [
            { label: "a", prompt: "Complete a results table: name the reagent and positive colour for each of the four tests.", marks: 3 },
            { label: "b", prompt: "State one control that should be included and why.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Food tests summary", statement: "Benedict's/heat → orange-red; iodine → blue-black; Biuret → lilac; ethanol → cloudy white." },
            ],
            steps: [
              { part: "a", reasoning: "Reducing sugar: Benedict's + heat → orange/red.", working: "\\text{Benedict's}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Starch: iodine → blue-black.", working: "\\text{iodine}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Protein: Biuret → lilac; lipid: ethanol → cloudy white.", working: "\\text{Biuret/ethanol}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Include a known positive/negative control.", working: "\\text{control}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "It confirms the reagents and technique are working.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Benedict's/heat→orange-red; iodine→blue-black; Biuret→lilac; ethanol→cloudy white (b) e.g. known positive sample to validate reagents",
            commonErrors: ["In (a) mixing up reagent and result pairs."],
          },
        },
        {
          id: "olbio-u2-food-tests-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "An unknown food sample gives the following results: Benedict's (heated) → brick-red; iodine → brown (unchanged); Biuret → blue (unchanged); ethanol emulsion → clear (no emulsion).",
          parts: [
            { label: "a", prompt: "Identify which molecules are present and which are absent in the sample.", marks: 3 },
            { label: "b", prompt: "Suggest two foods that could produce these results.", marks: 2 },
            { label: "c", prompt: "Explain why the ethanol test result does not rule out the presence of all lipids.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Interpreting food tests", statement: "Brick-red Benedict's = reducing sugar; negative others = absent; emulsion test detects some lipids." },
            ],
            steps: [
              { part: "a", reasoning: "Reducing sugar present (brick-red).", working: "\\text{sugar present}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "No starch, no protein detected.", working: "\\text{no starch/protein}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "No lipid detected by emulsion test.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Suggest foods rich in sugar only, e.g. fruit juice/honey.", working: "\\text{juice/honey}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State two examples.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Emulsion test is qualitative and may miss small lipid amounts.", working: "\\text{sensitivity}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Sample preparation (e.g. must shake well) affects result.", working: "\\text{technique}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Some lipids may not emulsify readily.", working: "\\text{emulsification}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Conclude: negative does not prove absence.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) reducing sugar present; no starch, protein or detected lipid (b) e.g. fruit juice, honey (c) emulsion test may miss trace lipids / depends on technique",
            commonErrors: ["In (a) saying 'only sugar exists' — tests only detect what they test for."],
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
