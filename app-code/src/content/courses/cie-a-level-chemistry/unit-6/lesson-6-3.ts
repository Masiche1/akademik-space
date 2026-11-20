import type { Lesson } from "../../../types.ts";

export const lesson613: Lesson = {
  id: "cial-c-u6-lesson-6-3",
  code: "6-3",
  title: "Nitrogen compounds, polymers and analysis",
  goal: "I CAN describe amines, amides, condensation polymers and basic analytical techniques.",
  standards: ["9701 6.3: nitrogen compounds and polymers"],
  vocabulary: [
    { term: "Amine", definition: "NH₂/NHR/NR₂ group; basic, forms salts with acids." },
    { term: "Amide", definition: "R–CONH₂; formed from carboxylic acid + ammonia/amine." },
    { term: "Peptide bond", definition: "Amide link between amino acids." },
    { term: "Condensation polymer", definition: "Polymer formed by joining monomers with loss of small molecule (e.g. water)." },
    { term: "Addition polymer", definition: "Polymer from unsaturated monomers, no by-product (e.g. poly(ethene))." },
    { term: "Chromatography", definition: "Separation technique using differential movement through a medium." },
  ],
  concepts: [
    {
      id: "cial-c-u6-nitrogen",
      title: "Amines, amides and amino acids",
      skill: "Describe basicity of amines and formation of amides and peptides.",
      lesson: {
        sections: [
          {
            heading: "Amines",
            body: "R–NH₂ contains –NH₂ group: basic (lone pair on N accepts H⁺). React with acids → ammonium salts; with haloalkanes → higher amines; with acyl chlorides → amides. Methylamine CH₃NH₂ smells of fish.",
          },
          {
            heading: "Amides",
            body: "R–CONH₂ formed from carboxylic acid derivative + NH₃ or amine. Urea CO(NH₂)₂ is the simplest amide — used in fertilizers. Amides hydrolyse back to acid + amine (acid or alkaline conditions).",
          },
          {
            heading: "Amino acids and proteins",
            body: "General formula H₂N–CHR–COOH. The R group varies — determines properties. Join via peptide (amide) bonds to form polypeptides → proteins. Zwitterion form: NH₃⁺–CHR–COO⁻ at neutral pH.",
          },
        ],
        keyFormulas: [
          { name: "Amine basicity", statement: "N lone pair accepts H⁺ → ammonium salt." },
          { name: "Peptide bond", statement: "–CONH– formed between amino and carboxyl groups." },
        ],
        workedExample: {
          problem: "What is the product when ethanoic acid reacts with ammonia?",
          solution: "Amide formation: $CH_3COOH+NH_3\\to CH_3CONH_2+H_2O$ — ethanamide.",
        },
      },
      questions: [
        {
          id: "cial-c-u6-na-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Why are amines basic?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Lone pair on N accepts H⁺" },
              { id: "b", text: "They contain OH groups" },
              { id: "c", text: "They lose electrons easily" },
              { id: "d", text: "They are metals" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Amine basicity", statement: "N lone pair accepts proton." }],
            steps: [{ reasoning: "N lone pair accepts H⁺ → basic.", marks: 1, markCode: "A" }],
            finalAnswer: "N lone pair",
          },
        },
        {
          id: "cial-c-u6-na-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write the equation for ethanoic acid reacting with ammonia to form an amide.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "law", name: "Amide formation", statement: "Acid + NH₃ → amide + water." }],
            steps: [
              { reasoning: "$CH_3COOH+NH_3\\to CH_3CONH_2+H_2O$.", marks: 1, markCode: "M" },
              { reasoning: "Ethanamide (acetamide) formed.", marks: 1, markCode: "M" },
              { reasoning: "Equation balanced.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$CH_3CONH_2+H_2O$",
          },
        },
        {
          id: "cial-c-u6-na-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how amino acids join to form proteins.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Peptide bond", statement: "–COOH + H₂N– → –CONH– + H₂O." }],
            steps: [
              { reasoning: "Carboxyl group of one amino acid reacts with amino group of next.", marks: 1, markCode: "M" },
              { reasoning: "Condensation: peptide (amide) bond forms, water eliminated.", marks: 1, markCode: "M" },
              { reasoning: "Repeated → polypeptide chain → folded protein.", marks: 1, markCode: "M" },
              { reasoning: "Sequence of R groups determines protein structure/function.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Peptide bonds via condensation",
          },
        },
        {
          id: "cial-c-u6-na-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Nitrogen compounds.",
          parts: [
            { label: "a", prompt: "Why are amines basic?", marks: 1 },
            { label: "b", prompt: "Write the equation for methylamine reacting with HCl.", marks: 2 },
            { label: "c", prompt: "What is a peptide bond and how is it formed?", marks: 3 },
            { label: "d", prompt: "Give the general formula of an amino acid.", marks: 1 },
            { label: "e", prompt: "What is urea and why is it important?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Nitrogen compounds", statement: "Amines basic; amides from acid+amine; peptide bonds link amino acids." }],
            steps: [
              { part: "a", reasoning: "N lone pair accepts H⁺.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$CH_3NH_2+HCl\\to CH_3NH_3^+Cl^-$ (methylammonium chloride).", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Salt formed; balanced.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Amide bond –CONH– linking amino acids.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Formed by condensation: –COOH + H₂N– → –CONH– + H₂O.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Water eliminated.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "H₂N–CHR–COOH.", marks: 1, markCode: "A" },
              { part: "e", reasoning: "Urea CO(NH₂)₂ — simplest amide.", marks: 1, markCode: "A" },
              { part: "e", reasoning: "Important fertilizer — provides nitrogen for plants.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) N lone pair (b) methylammonium chloride (c) amide bond+condensation (d) H2N-CHR-COOH (e) CO(NH2)2 fertilizer",
          },
        },
      ],
    },
    {
      id: "cial-c-u6-polymers-analysis",
      title: "Polymers and analytical techniques",
      skill: "Distinguish addition vs condensation polymers and describe chromatography and spectroscopy basics.",
      lesson: {
        sections: [
          {
            heading: "Addition polymers",
            body: "Formed from unsaturated monomers without by-product: nCH₂=CH₂ → [–CH₂–CH₂–]ₙ (poly(ethene)); PVC from chloroethene; poly(propene) has methyl side groups. The C=C π bond opens to link monomers.",
          },
          {
            heading: "Condensation polymers",
            body: "Formed with loss of small molecule (usually H₂O): polyesters (dicarboxylic acid + diol), polyamides (nylon — diamine + dicarboxylic acid), proteins (amino acids). Terylene = polyester from benzene-1,4-dicarboxylic acid + ethane-1,2-diol.",
          },
          {
            heading: "Analysis techniques",
            body: "Paper/thin-layer chromatography: separates by solubility — Rf = distance spot/distance solvent. Mass spectrometry: molecular mass from m/z. IR spectroscopy: identifies functional groups by absorption frequencies. NMR: identifies H environments.",
          },
        ],
        keyFormulas: [
          { name: "Addition polymer", statement: "n(alkene) → [repeat unit]ₙ, no by-product." },
          { name: "Rf", statement: "$R_f = \\frac{\\text{distance of spot}}{\\text{distance of solvent front}}$" },
        ],
        workedExample: {
          problem: "What type of polymer is nylon and how is it formed?",
          solution: "Condensation polymer — hexamethylenediamine + adipic acid join via amide bonds, eliminating water.",
        },
      },
      questions: [
        {
          id: "cial-c-u6-pa-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which polymer is formed by addition polymerisation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Poly(ethene)" },
              { id: "b", text: "Nylon" },
              { id: "c", text: "Terylene" },
              { id: "d", text: "Protein" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Addition polymer", statement: "From unsaturated monomer, no by-product." }],
            steps: [{ reasoning: "Poly(ethene) from ethene — addition polymer.", marks: 1, markCode: "A" }],
            finalAnswer: "Poly(ethene)",
          },
        },
        {
          id: "cial-c-u6-pa-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write the repeat unit of poly(ethene) and state the monomer.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Repeat unit", statement: "–CH₂–CH₂– from CH₂=CH₂." }],
            steps: [
              { reasoning: "Monomer: ethene CH₂=CH₂.", marks: 1, markCode: "M" },
              { reasoning: "Repeat unit: –CH₂–CH₂–.", marks: 1, markCode: "M" },
              { reasoning: "Both correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "–CH₂–CH₂– from ethene",
          },
        },
        {
          id: "cial-c-u6-pa-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Distinguish between addition and condensation polymers with one example of each.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Polymer types", statement: "Addition: no by-product; condensation: loses small molecule." }],
            steps: [
              { reasoning: "Addition: monomers join without eliminating anything (e.g. poly(ethene)).", marks: 1, markCode: "M" },
              { reasoning: "Condensation: monomers join eliminating H₂O or HCl (e.g. nylon, Terylene).", marks: 1, markCode: "M" },
              { reasoning: "Addition needs C=C bonds; condensation needs two functional groups.", marks: 1, markCode: "M" },
              { reasoning: "Both types correctly distinguished.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Addition no byproduct vs condensation loses H2O",
          },
        },
        {
          id: "cial-c-u6-pa-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Polymers and analysis.",
          parts: [
            { label: "a", prompt: "Give the monomer and repeat unit of PVC.", marks: 2 },
            { label: "b", prompt: "Is nylon an addition or condensation polymer? Justify.", marks: 3 },
            { label: "c", prompt: "What does Rf measure in chromatography?", marks: 2 },
            { label: "d", prompt: "Name two analytical techniques used to identify organic compounds.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Polymers and analysis", statement: "Addition vs condensation; Rf = spot/solvent distance." }],
            steps: [
              { part: "a", reasoning: "Monomer: chloroethene CH₂=CHCl.", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Repeat unit: –CH₂–CHCl–.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Condensation — formed from diamine + dicarboxylic acid.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Eliminates water at each amide bond.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Therefore condensation polymer.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$R_f$ = distance moved by spot / distance moved by solvent.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Identifies compound in chromatography.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Any two: IR spectroscopy, mass spectrometry, NMR, chromatography.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Two valid techniques named.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) chloroethene/-CH2-CHCl- (b) condensation (c) Rf ratio (d) IR/MS/NMR",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cial-c-u6-polymers-analysis-notes",
      title: "Polymers and analytical techniques — revision notes",
      summary: "Addition vs condensation polymers, chromatography and spectroscopy.",
      sections: [
        {
          heading: "Polymers",
          body: "Addition: unsaturated monomer, C=C opens, no by-product — poly(ethene), PVC, poly(propene). Condensation: bifunctional monomers, lose H₂O/HCl — nylon (polyamide), Terylene (polyester), proteins. Identify by checking if a small molecule is eliminated.",
        },
        {
          heading: "Analysis",
          body: "Chromatography separates mixtures — $R_f$ identifies compounds. IR spectroscopy: functional groups via absorption frequencies. Mass spectrometry: molecular mass/fragmentation. NMR: H environments.",
        },
        {
          heading: "Exam checklist",
          body: "For polymer questions state monomer, repeat unit and type (addition/condensation) separately — each earns marks.",
        },
      ],
    },
  ],
};
