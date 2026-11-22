import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "edialchem-u3-lesson-3-3",
  code: "3-3",
  title: "Polymers and Macromolecules",
  goal: "I CAN describe addition and condensation polymerisation and identify common polymers.",
  standards: ["IC3 Organic chemistry I", "Polymers"],
  vocabulary: [
    { term: "Monomer", definition: "Small molecule that polymerises into polymer." },
    { term: "Addition polymerisation", definition: "Monomers with C=C join without byproduct (e.g. polyethene)." },
    { term: "Condensation polymerisation", definition: "Monomers join releasing small molecule (e.g. water) — polyesters, nylon." },
    { term: "Biodegradable", definition: "Can be broken down by microorganisms." },
  ],
  concepts: [
    {
      id: "edialchem-u3-addition",
      title: "Addition polymerisation",
      skill: "Describe addition polymerisation and identify common addition polymers.",
      lesson: {
        sections: [
          {
            heading: "Addition polymerisation",
            body: "Alkene monomers with C=C bonds open and join in chain reaction — no byproduct. Initiated by free radicals (heat/UV/initiator). Polyethene from ethene; polypropene from propene; PVC from chloroethene; polystyrene from styrene.",
          },
          {
            heading: "Properties",
            body: "Polymers are giant covalent molecules — strong intermolecular forces → high mp, insoluble, chemically inert. Thermoplastics soften when heated (can be remoulded); thermosets set permanently. Polyethene: flexible, waterproof (bags, bottles). PVC: rigid or flexible (pipes, cable insulation). Polystyrene: insulation, packaging.",
          },
          {
            heading: "Environmental issues",
            body: "Most plastics non-biodegradable → landfill/pollution. Solutions: recycling, biodegradable polymers (PHA, starch-based), reduced single-use plastics. Microplastics accumulate in oceans.",
          },
        ],
        keyFormulas: [
          { name: "Key formula", statement: "n CH₂=CH₂ → [CH₂–CH₂]ₙ (polyethene)" },
        ],
        workedExample: {
          problem: "Draw the repeat unit of polypropene from propene monomer.",
          solution: "Propene CH₂=CHCH₃ → repeat unit –CH₂–CH(CH₃)– linked in chain.",
        },
      },
      questions: [
        {
          id: "edialchem-poly-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which monomer forms polyethene?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Styrene" },
              { id: "b", text: "Propene" },
              { id: "c", text: "Ethene" },
              { id: "d", text: "Chloroethene" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Polyethene", statement: "From ethene monomer." }],
            steps: [{ reasoning: "nC₂H₄ → (C₂H₄)ₙ.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Ethene",
          },
        },
        {
          id: "edialchem-poly-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "State two characteristics of addition polymerisation.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Addition polymerisation", statement: "Alkene monomers, no byproduct." }],
            steps: [
              { reasoning: "Monomers contain C=C double bonds.", marks: 1, markCode: "A" },
              { reasoning: "No small molecule released (unlike condensation).", marks: 1, markCode: "M" },
              { reasoning: "Chain-growth mechanism via radicals.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "C=C monomers; no byproduct",
            commonErrors: ["Saying water is released."],
          },
        },
        {
          id: "edialchem-poly-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why polyethene is insoluble in water.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Polymer solubility", statement: "Giant non-polar molecule." }],
            steps: [
              { reasoning: "Polyethene is giant covalent molecule with non-polar C–C/C–H bonds.", marks: 1, markCode: "M" },
              { reasoning: "No ionic/polar groups to interact with water.", marks: 1, markCode: "M" },
              { reasoning: "Cannot form hydrogen bonds with water.", marks: 1, markCode: "A" },
              { reasoning: "Insoluble — used for waterproof packaging.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Non-polar giant molecule → insoluble",
            commonErrors: ["Saying it's ionic."],
          },
        },
        {
          id: "edialchem-poly-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Describe addition polymerisation with ethene as example.",
          parts: [
            { label: "a", prompt: "Monomer structure.", marks: 2 },
            { label: "b", prompt: "Polymerisation mechanism.", marks: 4 },
            { label: "c", prompt: "Properties and uses of polyethene.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "method", name: "Addition polymerisation", statement: "C=C opens → chain forms." }],
            steps: [
              { part: "a", reasoning: "Ethene CH₂=CH₂ — contains C=C.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Unsaturated → reactive.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Initiator (heat/UV/radical) breaks π bond.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Radical adds to another ethene → chain grows.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Propagation: radical attacks next monomer repeatedly.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Termination: two radicals combine.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Giant molecule → high mp, insoluble, inert.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Flexible, waterproof, chemically resistant.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Uses: bags, bottles, packaging, insulation.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "LDPE vs HDPE differ in branching/density.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "nC₂H₄ → (–CH₂–CH₂–)ₙ polyethene",
            commonErrors: ["Saying byproduct released."],
          },
        },
      ],
    },
    {
      id: "edialchem-u3-condensation",
      title: "Condensation polymers and biomolecules",
      skill: "Describe condensation polymerisation, polyesters, proteins and carbohydrates.",
      lesson: {
        sections: [
          {
            heading: "Condensation polymerisation",
            body: "Monomers with two functional groups join releasing small molecule (water). Polyesters: diacid + diol → polyester + water. Nylon-6,6: hexanedioic acid + hexamethylenediamine → amide linkages + water. Proteins: amino acids → peptide bonds + water.",
          },
          {
            heading: "Natural polymers",
            body: "Carbohydrates: starch/glycogen (glucose polymers — storage), cellulose (structural). Proteins: amino acid polymers — enzymes, antibodies, structural. DNA/RNA: nucleotide polymers — genetic material. Lipids: not polymers (glycerol + fatty acids).",
          },
          {
            heading: "Biodegradability",
            body: "Natural polymers (starch, cellulose, proteins) are biodegradable — enzymes break them down. Synthetic polymers (polyethene, PVC) resist degradation → environmental problem. Designing biodegradable polymers (PHA) is active research.",
          },
        ],
        keyFormulas: [
          { name: "Key formula", statement: "Diacid + diol → polyester + 2H₂O" },
        ],
        workedExample: {
          problem: "What type of polymer is a protein and how is it formed?",
          solution: "Protein is a condensation polymer — amino acids join via peptide bonds releasing water in each condensation reaction.",
        },
      },
      questions: [
        {
          id: "edialchem-cond-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What small molecule is released in condensation polymerisation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "CO₂" },
              { id: "b", text: "Water" },
              { id: "c", text: "H₂" },
              { id: "d", text: "O₂" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Condensation", statement: "Small molecule (usually water) released." }],
            steps: [{ reasoning: "Condensation joins + releases water.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Water",
          },
        },
        {
          id: "edialchem-cond-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Distinguish addition and condensation polymerisation.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "comparison", name: "Addition vs condensation", statement: "C=C monomers vs bifunctional + byproduct." }],
            steps: [
              { reasoning: "Addition: alkene monomers, no byproduct (polyethene).", marks: 1, markCode: "M" },
              { reasoning: "Condensation: monomers with 2 functional groups, small molecule released (polyester).", marks: 1, markCode: "M" },
              { reasoning: "Addition = chain growth; condensation = step growth.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Addition: no byproduct; condensation: releases water",
            commonErrors: ["Saying condensation uses alkenes."],
          },
        },
        {
          id: "edialchem-cond-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why proteins are condensation polymers.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Protein", statement: "Amino acids joined by peptide bonds." }],
            steps: [
              { reasoning: "Amino acids have –NH₂ and –COOH groups.", marks: 1, markCode: "M" },
              { reasoning: "Condensation joins them forming peptide bond + releasing water.", marks: 1, markCode: "M" },
              { reasoning: "Long chain of amino acids = polypeptide = protein.", marks: 1, markCode: "A" },
              { reasoning: "Hydrolysis breaks peptide bonds (digestion).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Amino acids → peptide bonds + water",
            commonErrors: ["Saying proteins are addition polymers."],
          },
        },
        {
          id: "edialchem-cond-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Describe condensation polymerisation with a polyester example.",
          parts: [
            { label: "a", prompt: "Monomers required.", marks: 3 },
            { label: "b", prompt: "Reaction mechanism.", marks: 4 },
            { label: "c", prompt: "Properties and uses of polyesters.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "method", name: "Condensation polymerisation", statement: "Diacid + diol → polyester + water." }],
            steps: [
              { part: "a", reasoning: "Dicarboxylic acid (e.g. terephthalic acid).", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Diol (e.g. ethane-1,2-diol).", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Both have two functional groups.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "–COOH + –OH → ester linkage + H₂O.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Each condensation joins two monomers.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Chain grows by repeated ester formation.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Water removed to drive reaction forward.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Strong, durable, resistant to chemicals.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Uses: fabrics (Terylene), bottles (PET), films.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Can be recycled; some biodegradable variants.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Diacid + diol → polyester + water",
            commonErrors: ["Saying no water released."],
          },
        },
      ],
    },
  ],
};
