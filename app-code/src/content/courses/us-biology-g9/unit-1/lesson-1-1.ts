import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "bio9-u1-lesson-1-1",
  code: "1-1",
  title: "Biomolecules",
  goal: "I CAN describe the structure and function of carbohydrates, lipids, proteins and nucleic acids, and explain how enzymes work and how temperature and pH affect their rate.",
  standards: ["HS-LS1-6", "HS-LS1-3", "CCC: Structure and Function", "SEP: Analyzing and Interpreting Data"],
  vocabulary: [
    { term: "Monomer", definition: "A small molecule that can join with others to form a polymer, such as an amino acid or a monosaccharide." },
    { term: "Polymer", definition: "A large molecule made of many repeating monomers bonded together." },
    { term: "Enzyme", definition: "A protein that acts as a biological catalyst, speeding up a reaction without being used up." },
    { term: "Active site", definition: "The region of an enzyme with a specific shape where the substrate binds." },
    { term: "Substrate", definition: "The reactant that an enzyme binds to and converts into products." },
    { term: "Denaturation", definition: "An irreversible change in the three-dimensional shape of a protein, usually caused by high temperature or extreme pH, which destroys its function." },
  ],
  concepts: [
    {
      id: "bio9-u1-biomolecule-types",
      title: "Carbohydrates, lipids, proteins and nucleic acids",
      skill: "Relate the structure of each class of biomolecule to its function.",
      lesson: {
        sections: [
          {
            heading: "Four classes of biomolecules",
            body: "Living things are built from four main classes of organic molecules. Three of them are polymers made of repeating monomers.\n\n- **Carbohydrates** contain C, H and O. The monomer is a monosaccharide such as glucose. Starch and glycogen store energy; cellulose gives plant cell walls strength.\n- **Lipids** (fats, oils, phospholipids, steroids) contain C, H and O with very little oxygen. They are not true polymers. A triglyceride is one glycerol joined to three fatty acids. Lipids store energy and form cell membranes.\n- **Proteins** are polymers of **amino acids** joined by peptide bonds. They act as enzymes, transport molecules, hormones and structural fibers.\n- **Nucleic acids** (DNA and RNA) are polymers of **nucleotides**. They store and transmit genetic information.",
          },
          {
            heading: "Structure determines function",
            body: "Each amino acid has an amino group, a carboxyl group and a variable **R group**. The order of amino acids (the primary structure) determines how the chain folds into a specific three-dimensional shape, and that shape determines the protein's job. Changing even one amino acid can change the shape and the function.\n\nMonomers join by **dehydration synthesis**, which releases one water molecule for every bond formed. Polymers are broken apart by **hydrolysis**, which uses a water molecule for every bond broken. A chain of $n$ monomers has $n-1$ bonds.\n\nEnergy content: carbohydrates and proteins release about 4 kcal per gram, lipids about 9 kcal per gram.",
          },
        ],
        keyFormulas: [
          { name: "Bonds in a chain", statement: "A polymer of $n$ monomers has $n-1$ bonds and releases $n-1$ water molecules when formed." },
          { name: "Energy density", statement: "Carbohydrate and protein: 4 kcal/g; lipid: 9 kcal/g" },
          { name: "Biuret test", statement: "Blue to violet indicates protein" },
        ],
        workedExample: {
          problem: "A student eats 30 g of carbohydrate and 10 g of fat. Calculate the total energy released.",
          solution: "Carbohydrate: $30\\times4=120\\text{ kcal}$. Fat: $10\\times9=90\\text{ kcal}$. Total: $120+90=210\\text{ kcal}$.",
        },
      },
      questions: [
        {
          id: "bio9-u1-biomolecule-types-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which pair correctly matches a biomolecule class with its monomer?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Proteins and fatty acids" },
              { id: "b", text: "Nucleic acids and amino acids" },
              { id: "c", text: "Proteins and amino acids" },
              { id: "d", text: "Carbohydrates and nucleotides" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Monomers", statement: "Proteins are polymers of amino acids; nucleic acids of nucleotides; carbohydrates of monosaccharides." }],
            steps: [{ reasoning: "Proteins are built from amino acids joined by peptide bonds.", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** Proteins and amino acids",
            commonErrors: ["Mixing up nucleotides and amino acids.", "Treating fatty acids as the monomer of proteins; they are part of lipids."],
            examinerNote: "B1 for (c).",
          },
        },
        {
          id: "bio9-u1-biomolecule-types-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A polypeptide is formed from 120 amino acids joined in a single chain.\n\nCalculate the number of peptide bonds formed.",
          response: { type: "numeric", parts: [{ label: "Peptide bonds", answer: 119 }] },
          markscheme: {
            principles: [{ kind: "principle", name: "Dehydration synthesis", statement: "Each bond joining two monomers forms with the loss of one water molecule, so a chain of $n$ monomers has $n-1$ bonds." }],
            steps: [
              { reasoning: "A single unbranched chain of $n$ units has one fewer bond than units.", working: "n-1=120-1", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "=119", marks: 1, markCode: "A" },
            ],
            finalAnswer: "119 peptide bonds",
            commonErrors: ["Answering 120, forgetting the end amino acid has no bond on one side.", "Answering 60 by pairing amino acids."],
            examinerNote: "M1 for 120 - 1 (oe). A1 for 119.",
          },
        },
        {
          id: "bio9-u1-biomolecule-types-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Many animals store energy mainly as fat (lipids) for long periods rather than as glycogen (a carbohydrate).\n\nExplain **one** advantage of storing energy as lipid rather than glycogen.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Energy density", statement: "Lipids release about 9 kcal/g, about twice the 4 kcal/g of carbohydrates." },
              { kind: "property", name: "Hydrophobic", statement: "Lipids are nonpolar and insoluble in water, unlike glycogen, which binds water." },
            ],
            steps: [
              { reasoning: "Lipids contain more energy per gram (about 9 versus 4 kcal/g).", marks: 1, markCode: "B" },
              { reasoning: "So the same amount of stored energy needs about half the mass, which is a lighter, more compact store.", marks: 1, markCode: "B" },
              { reasoning: "Link to the organism: less mass to carry, for example for movement or migration, or lipids do not draw in water so they take less space.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Lipids store about twice as much energy per gram, so less mass is needed to store the same energy, making the store lighter and more compact.",
            commonErrors: ["Saying lipids contain more energy in total without comparing per gram.", "Saying fat is easier to digest or release quickly; glycogen is mobilized faster."],
            examinerNote: "B1 higher energy per gram oe. B1 less mass/volume needed for the same energy. R1 for linking to benefit (light to carry, compact). Allow the water-insoluble argument as an alternative advantage for marks 2 and 3.",
          },
        },
        {
          id: "bio9-u1-biomolecule-types-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A nutrition student analyzes a snack bar and a sample of egg white.",
          parts: [
            { label: "a", prompt: "Name the monomer of a nucleic acid.", marks: 1 },
            { label: "b", prompt: "The student adds Biuret reagent to the egg white and the mixture turns violet. State what this shows and the original color of the reagent.", marks: 2 },
            { label: "c", prompt: "The snack bar contains 20 g of fat and 20 g of carbohydrate. Using 9 kcal/g for fat and 4 kcal/g for carbohydrate, calculate how many more kilocalories the fat provides than the carbohydrate.", marks: 3 },
            { label: "d", prompt: "Explain why changing a single amino acid in a protein can stop the protein from working.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Nucleotide", statement: "Nucleic acids are polymers of nucleotides." },
              { kind: "formula", name: "Energy", statement: "energy (kcal) = mass (g) $\\times$ energy density (kcal/g)" },
              { kind: "principle", name: "Structure and function", statement: "Amino acid sequence determines folding, and shape determines function." },
            ],
            steps: [
              { part: "a", reasoning: "The monomer of DNA and RNA is the nucleotide.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Protein is present in the egg white.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Biuret reagent starts blue.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Energy from fat.", working: "20\\times9=180\\text{ kcal}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Energy from carbohydrate.", working: "20\\times4=80\\text{ kcal}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Subtract to find the difference.", working: "180-80=100\\text{ kcal}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "A different R group can change the bonds and interactions that fold the chain, so the protein's 3D shape changes.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Function depends on shape (for example an enzyme's active site no longer fits the substrate), so the protein stops working.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) Nucleotide (b) Protein is present; reagent starts blue (c) 100 kcal more (d) A changed R group alters folding and shape, and shape determines function.",
            commonErrors: ["In (a) answering 'base' or 'DNA'.", "In (b) saying the reagent starts clear or purple.", "In (c) subtracting the masses rather than the energies."],
            examinerNote: "(c) Allow ecf for the final subtraction. Award full marks for 100 with kcal. (d) Allow 'primary structure' linked to altered folding.",
          },
        },
      ],
    },
    {
      id: "bio9-u1-enzymes",
      title: "Enzymes: active site, temperature and pH",
      skill: "Explain enzyme specificity and the effect of temperature and pH, and interpret rate data.",
      lesson: {
        sections: [
          {
            heading: "How enzymes work",
            body: "Enzymes are protein catalysts. They lower the **activation energy** of a reaction so it proceeds faster, and they are not used up.\n\nThe substrate binds to the enzyme's **active site**, forming an enzyme-substrate complex. The active site has a specific shape, so each enzyme acts on only one substrate or a small group of similar ones. This is **specificity**. After the reaction, the products leave and the enzyme can be used again.",
          },
          {
            heading: "Temperature and pH",
            body: "Rate rises with temperature because molecules move faster and collide more often with more energy. Above the **optimum** temperature, the bonds that hold the enzyme in shape break. The active site changes shape and the enzyme is **denatured**, so the rate falls sharply.\n\nEach enzyme also has an optimum pH. Pepsin works best near pH 2 in the stomach, while most cell enzymes work near pH 7. Extreme pH changes the charges on the amino acids, altering the shape of the active site.\n\nOn a rate graph, the peak is the optimum. Rate can be found as the amount of product divided by time.",
          },
        ],
        keyFormulas: [
          { name: "Rate of reaction", statement: "$\\text{rate}=\\dfrac{\\text{amount of product}}{\\text{time}}$" },
          { name: "Percent change", statement: "$\\dfrac{\\text{new}-\\text{old}}{\\text{old}}\\times100$" },
          { name: "Specificity", statement: "Substrate shape is complementary to the active site shape." },
        ],
        workedExample: {
          problem: "An enzyme produces 24 cm$^3$ of gas in 40 s. Calculate the rate in cm$^3$/s.",
          solution: "$\\text{rate}=\\dfrac{24}{40}=0.6\\text{ cm}^3\\text{/s}$.",
        },
      },
      questions: [
        {
          id: "bio9-u1-enzymes-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the active site of an enzyme?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The place where the enzyme is made in the cell" },
              { id: "b", text: "The region with a specific shape where the substrate binds" },
              { id: "c", text: "The part of the enzyme that is destroyed in the reaction" },
              { id: "d", text: "The product released at the end of the reaction" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Active site", statement: "The active site is the region of an enzyme whose shape is complementary to the substrate." }],
            steps: [{ reasoning: "The substrate binds at the active site, forming an enzyme-substrate complex.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** The region with a specific shape where the substrate binds",
            commonErrors: ["Thinking the enzyme is used up in the reaction.", "Confusing the active site with the product."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "bio9-u1-enzymes-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "In an investigation, the enzyme catalase breaks down hydrogen peroxide and releases 18 cm$^3$ of oxygen in 45 s.\n\nCalculate the rate of reaction in cm$^3$/s.",
          response: { type: "numeric", parts: [{ label: "Rate", answer: 0.4, unit: "cm³/s", tolerance: 0.01 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Rate", statement: "$\\text{rate}=\\dfrac{\\text{product}}{\\text{time}}$" }],
            steps: [
              { reasoning: "Divide the volume of oxygen by the time.", working: "\\text{rate}=\\frac{18}{45}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate with units.", working: "=0.4\\text{ cm}^3\\text{/s}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$0.4\\text{ cm}^3\\text{/s}$",
            commonErrors: ["Dividing time by volume, giving 2.5.", "Omitting the unit."],
            examinerNote: "M1 for 18 / 45 (oe). A1 for 0.4. Allow 0.40.",
          },
        },
        {
          id: "bio9-u1-enzymes-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "The activity of an enzyme from human cells rises as temperature increases from 10 degrees C to 37 degrees C, but falls to almost zero at 70 degrees C.\n\nExplain these results.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Collision theory", statement: "Higher temperature increases collision frequency and energy between enzyme and substrate." },
              { kind: "definition", name: "Denaturation", statement: "High temperature breaks bonds holding the protein shape, permanently changing the active site." },
            ],
            steps: [
              { reasoning: "Up to 37 degrees C, molecules gain kinetic energy, so enzyme and substrate collide more often and with more energy; more successful collisions.", marks: 1, markCode: "B" },
              { reasoning: "At 70 degrees C, the bonds holding the enzyme's 3D shape break and the enzyme is denatured.", marks: 1, markCode: "B" },
              { reasoning: "The active site changes shape, so the substrate no longer fits and no complexes form, so the rate drops.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "More frequent, higher-energy collisions raise the rate up to the optimum; at 70 degrees C the enzyme denatures, the active site changes shape and the substrate cannot bind.",
            commonErrors: ["Saying the enzyme is 'killed' (enzymes are not alive).", "Saying the substrate is denatured."],
            examinerNote: "Reject 'killed'. Allow 'tertiary structure' for 3D shape. Ignore 'optimum' alone without explanation.",
          },
        },
        {
          id: "bio9-u1-enzymes-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A student measures the volume of oxygen released by catalase in 60 s at four different pH values. Each trial uses the same temperature, enzyme concentration and substrate concentration.\n\n| pH | Oxygen released in 60 s (cm$^3$) |\n| --- | --- |\n| 3 | 2 |\n| 5 | 8 |\n| 7 | 15 |\n| 9 | 6 |",
          parts: [
            { label: "a", prompt: "State the optimum pH shown by the data.", marks: 1 },
            { label: "b", prompt: "Calculate the rate of reaction at pH 7 in cm$^3$/s.", marks: 2 },
            { label: "c", prompt: "Calculate the percent decrease in the volume of oxygen released from pH 7 to pH 9.", marks: 2 },
            { label: "d", prompt: "Explain why little oxygen was released at pH 3.", marks: 2 },
            { label: "e", prompt: "Suggest one way to make the results more reliable.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Rate", statement: "$\\text{rate}=\\dfrac{\\text{product}}{\\text{time}}$" },
              { kind: "formula", name: "Percent change", statement: "$\\dfrac{\\text{old}-\\text{new}}{\\text{old}}\\times100$" },
              { kind: "definition", name: "Denaturation", statement: "Extreme pH alters the shape of the active site." },
            ],
            steps: [
              { part: "a", reasoning: "The highest volume of oxygen is at pH 7 (within the pH values tested).", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Divide the volume by the time.", working: "\\frac{15}{60}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "=0.25\\text{ cm}^3\\text{/s}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Find the decrease relative to the original value.", working: "\\frac{15-6}{15}\\times100", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "=60\\%", marks: 1, markCode: "A" },
              { part: "d", reasoning: "The acidic pH changes the charges and bonds in the enzyme, altering the shape of the active site (denaturation).", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Fewer substrate molecules fit the active site, so fewer enzyme-substrate complexes form and less oxygen is released.", marks: 1, markCode: "R" },
              { part: "e", reasoning: "Repeat each pH several times and calculate a mean (ignoring anomalies).", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) pH 7 (b) $0.25\\text{ cm}^3\\text{/s}$ (c) $60\\%$ decrease (d) Low pH changes the active site shape, so fewer complexes form (e) Repeat and take a mean.",
            commonErrors: ["In (c) dividing by 6 instead of 15, giving 150%.", "In (d) saying the enzyme 'died'.", "In (a) answering 15."],
            examinerNote: "(b) Allow 0.25 only with unit. (c) Allow ecf if a wrong denominator is used consistently for M1 only. (e) Allow 'use more pH values near 7' only if repeats are not given.",
          },
        },
      ],
    },
  ],
};
