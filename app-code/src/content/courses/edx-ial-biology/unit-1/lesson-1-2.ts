import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "edialbio-u1-lesson-1-2",
  code: "1-2",
  title: "Biological Molecules and Water",
  goal: "I CAN describe the structure and properties of carbohydrates, lipids, proteins and water, and explain their biological roles.",
  standards: ["IB1 Cell biology", "Biochemistry"],
  vocabulary: [
    { term: "Monosaccharide", definition: "Simplest carbohydrate, e.g. glucose — cannot be hydrolysed further." },
    { term: "Disaccharide / polysaccharide", definition: "Two / many monosaccharides joined by glycosidic bonds." },
    { term: "Condensation / hydrolysis", definition: "Joining molecules with water released / breaking bonds using water." },
    { term: "Denaturation", definition: "Loss of a protein's 3D shape (and activity) due to heat or pH change." },
  ],
  concepts: [
    {
      id: "edialbio-u1-carbs-lipids",
      title: "Carbohydrates and lipids",
      skill: "Distinguish mono-, di- and polysaccharides and describe the structure and roles of lipids.",
      lesson: {
        sections: [
          {
            heading: "Carbohydrates",
            body: "Monosaccharides (glucose, fructose) join by condensation to form disaccharides (sucrose, maltose, lactose) and polysaccharides (starch in plants, glycogen in animals, cellulose in cell walls). Glycogen and starch are storage forms; cellulose gives structural support; all are insoluble or compact energy stores.",
          },
          {
            heading: "Lipids",
            body: "Triglycerides = glycerol + three fatty acids joined by ester bonds. Saturated fatty acids (no C=C) are solid at room temperature; unsaturated have C=C 'kinks' making them liquid oils. Lipids are insoluble in water, store energy densely (twice carbohydrates per gram), insulate and form membranes as phospholipids.",
          },
          {
            heading: "Tests",
            body: "Benedict's test for reducing sugars (brick-red precipitate after heating); iodine for starch (blue-black); ethanol emulsion test for lipids (cloudy white); Biuret for protein (violet).",
          },
        ],
        keyFormulas: [
          { name: "Triglyceride", statement: "glycerol + 3 fatty acids − 3 H₂O" },
        ],
        workedExample: {
          problem: "Explain why lipids are a more efficient long-term energy store than carbohydrates.",
          solution: "Lipids store ~2× energy per gram, are insoluble so stored compactly without water of solution, and release energy slowly when hydrolysed.",
        },
      },
      questions: [
        {
          id: "edialbio-carb-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which carbohydrate is the main storage polysaccharide in animals?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Starch" },
              { id: "b", text: "Glycogen" },
              { id: "c", text: "Cellulose" },
              { id: "d", text: "Lactose" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Glycogen", statement: "Animal storage polysaccharide of glucose." }],
            steps: [{ reasoning: "Glycogen stored in liver and muscles.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Glycogen",
          },
        },
        {
          id: "edialbio-carb-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "State the products of hydrolysis of a triglyceride.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Triglyceride", statement: "Glycerol + 3 fatty acids." }],
            steps: [
              { reasoning: "One molecule of glycerol.", marks: 1, markCode: "A" },
              { reasoning: "Three molecules of fatty acids.", marks: 1, markCode: "A" },
              { reasoning: "Water is consumed in hydrolysis.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Glycerol + 3 fatty acids (+ water used)",
            commonErrors: ["Saying 3 glycerol or 1 fatty acid."],
          },
        },
        {
          id: "edialbio-carb-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why vegetable oils are liquids while animal fats are solids at room temperature.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Saturation", statement: "Unsaturated fatty acids are liquid; saturated are solid." }],
            steps: [
              { reasoning: "Plant oils contain more unsaturated fatty acids with C=C bonds.", marks: 1, markCode: "M" },
              { reasoning: "C=C 'kinks' prevent molecules packing closely → weaker intermolecular forces → lower melting point → liquid.", marks: 1, markCode: "M" },
              { reasoning: "Animal fats are mostly saturated, pack tightly, higher mp → solid.", marks: 1, markCode: "A" },
              { reasoning: "Conclude.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Unsaturated oils pack loosely → liquid; saturated fats pack tightly → solid",
            commonErrors: ["Omitting the packing/intermolecular point."],
          },
        },
        {
          id: "edialbio-carb-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Compare carbohydrates and lipids as energy storage molecules.",
          parts: [
            { label: "a", prompt: "Compare solubility and its consequences.", marks: 3 },
            { label: "b", prompt: "Compare energy yield per gram.", marks: 3 },
            { label: "c", prompt: "Give one other role of each molecule.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Storage molecules", statement: "Lipids denser energy; carbohydrates quicker access." }],
            steps: [
              { part: "a", reasoning: "Carbohydrates (starch/glycogen) are insoluble in water → compact, no osmosis issues.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Lipids also insoluble but even more hydrophobic → stored without water.", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Monosaccharides are soluble but polysaccharide stores are not.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Lipids yield ~2× energy per gram vs carbohydrates.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Carbohydrate energy is more quickly accessible (glycogen → glucose).", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Lipids used for long-term storage.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Carbohydrate role: cellulose for cell wall support; glycogen quick energy.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Lipid role: insulation, membrane structure (phospholipids), waterproofing.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Further example each.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Conclude comparison.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Lipids: dense long-term store; carbohydrates: quick-access store + structural roles",
            commonErrors: ["Unstructured comparison; ignoring solubility."],
          },
        },
      ],
    },
    {
      id: "edialbio-u1-proteins-water",
      title: "Proteins and the properties of water",
      skill: "Describe protein structure levels, explain denaturation, and explain water's biological importance.",
      lesson: {
        sections: [
          {
            heading: "Protein structure",
            body: "Amino acids join by peptide bonds to form polypeptides. Structure: primary (amino acid sequence), secondary (α-helices/β-sheets via H-bonds), tertiary (3D folding — disulfide bridges, ionic/H-bonds), quaternary (multiple subunits, e.g. haemoglobin). Shape determines function.",
          },
          {
            heading: "Denaturation",
            body: "Heat or extreme pH disrupts bonds maintaining tertiary structure → active site changes shape → enzyme/protein loses function. Denaturation is usually irreversible.",
          },
          {
            heading: "Water",
            body: "Polar molecule, hydrogen bonds between molecules → high specific heat capacity, high latent heat, surface tension, solvent for ions/polar molecules. Medium for all metabolic reactions; transports substances; turgor pressure in plants; lubrication; photosynthesis reactant.",
          },
        ],
        keyFormulas: [
          { name: "Peptide bond", statement: "condensation between –NH₂ and –COOH" },
        ],
        workedExample: {
          problem: "Explain why humans maintain a constant body temperature around 37°C.",
          solution: "Water's high specific heat capacity means large amounts of heat energy are needed to change body temperature, buffering against external fluctuations.",
        },
      },
      questions: [
        {
          id: "edialbio-prot-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which bond links amino acids in a polypeptide chain?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Glycosidic" },
              { id: "b", text: "Peptide" },
              { id: "c", text: "Ester" },
              { id: "d", text: "Hydrogen only" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Peptide bond", statement: "Covalent bond between amino acids." }],
            steps: [{ reasoning: "Peptide bond formed by condensation.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Peptide",
          },
        },
        {
          id: "edialbio-prot-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "State three properties of water important to living organisms.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Water", statement: "Hydrogen bonding → unique properties." }],
            steps: [
              { reasoning: "High specific heat capacity (temperature buffering).", marks: 1, markCode: "A" },
              { reasoning: "Universal solvent for polar/ionic substances.", marks: 1, markCode: "A" },
              { reasoning: "High latent heat / surface tension / cohesion; or role in transport and metabolism.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Any three valid properties",
            commonErrors: ["Listing properties without biological relevance."],
          },
        },
        {
          id: "edialbio-prot-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how denaturation affects an enzyme's function.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Enzyme specificity", statement: "Active site shape must match substrate." }],
            steps: [
              { reasoning: "Heat/pH disrupts bonds (H-bonds, ionic) maintaining tertiary structure.", marks: 1, markCode: "M" },
              { reasoning: "Active site changes shape → no longer complementary to substrate.", marks: 1, markCode: "M" },
              { reasoning: "Enzyme-substrate complex cannot form → rate of reaction falls.", marks: 1, markCode: "A" },
              { reasoning: "Denaturation is irreversible.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Shape change → loss of active site complementarity",
            commonErrors: ["Saying enzyme is 'destroyed' rather than unfolded."],
          },
        },
        {
          id: "edialbio-prot-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Describe the four levels of protein structure.",
          parts: [
            { label: "a", prompt: "Primary and secondary structure.", marks: 4 },
            { label: "b", prompt: "Tertiary and quaternary structure.", marks: 4 },
            { label: "c", prompt: "Explain why structure determines function with one example.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Protein structure", statement: "Primary→secondary→tertiary→quaternary." }],
            steps: [
              { part: "a", reasoning: "Primary: sequence of amino acids linked by peptide bonds.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Secondary: α-helices and β-pleated sheets stabilised by hydrogen bonds.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Describe both levels.", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Clear terminology.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Tertiary: 3D folding via H-bonds, ionic bonds, disulfide bridges; determines active site.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Quaternary: multiple polypeptide subunits (e.g. haemoglobin = 4 chains + haem).", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Describe both levels.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Example of quaternary protein.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Example: haemoglobin's shape allows reversible O₂ binding; collagen's triple helix gives tensile strength.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Conclude link.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Four levels; shape determines function",
            commonErrors: ["Mixing up tertiary and quaternary."],
          },
        },
      ],
    },
  ],
};
