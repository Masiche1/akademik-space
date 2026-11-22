import type { Lesson } from "../../../types.ts";

export const lesson41: Lesson = {
  id: "edialchem-u4-lesson-4-1",
  code: "4-1",
  title: "Aromatic Chemistry",
  goal: "I CAN describe the benzene ring, electrophilic substitution and aromatic reactions.",
  standards: ["IC4 Organic chemistry II", "Aromatic compounds"],
  vocabulary: [
    { term: "Benzene", definition: "C₆H₆ — ring of 6 carbons with delocalised π electrons." },
    { term: "Aromatic", definition: "Ring with delocalised π electrons giving stability." },
    { term: "Electrophilic substitution", definition: "Electrophile replaces H on benzene ring." },
    { term: "Friedel-Crafts", definition: "Alkylation/acylation of benzene using catalyst." },
  ],
  concepts: [
    {
      id: "edialchem-u4-benzene",
      title: "Benzene structure and properties",
      skill: "Describe benzene's structure, stability and characteristic reactions.",
      lesson: {
        sections: [
          {
            heading: "Benzene structure",
            body: "C₆H₆ hexagonal ring. Each carbon sp² hybridised; p orbitals overlap forming delocalised π cloud above/below ring. Resonance between two Kekulé structures — not alternating double bonds. Delocalisation → exceptional stability → doesn't undergo addition like alkenes.",
          },
          {
            heading: "Reactions",
            body: "Benzene resists addition (would destroy delocalisation). Instead undergoes electrophilic substitution: H replaced by electrophile, delocalisation preserved. Reactions: nitration (conc. HNO₃ + conc. H₂SO₄ → nitrobenzene), halogenation (Br₂ + FeBr₃ → bromobenzene), alkylation/acylation (Friedel-Crafts).",
          },
          {
            heading: "Uses",
            body: "Benzene derivatives: nitrobenzene → aniline (dyes); phenol → plastics/resins; toluene → TNT/explosives; benzoic acid → preservatives. Benzene itself carcinogenic — handled carefully.",
          },
        ],
        keyFormulas: [
          { name: "Key formula", statement: "C₆H₆ + HNO₃ → C₆H₅NO₂ + H₂O (nitration)" },
        ],
        workedExample: {
          problem: "Why doesn't benzene undergo addition reactions like alkenes?",
          solution: "Benzene's delocalised π electrons are more stable; addition would break delocalisation requiring huge energy. Substitution preserves aromatic stability.",
        },
      },
      questions: [
        {
          id: "edialchem-benz-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the formula of benzene?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "C₆H₁₂" },
              { id: "b", text: "C₆H₈" },
              { id: "c", text: "C₆H₆" },
              { id: "d", text: "C₆H₅" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Benzene", statement: "C₆H₆ aromatic ring." }],
            steps: [{ reasoning: "Direct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** C₆H₆",
          },
        },
        {
          id: "edialchem-benz-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why benzene is more stable than predicted by Kekulé structures.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Aromatic stability", statement: "Delocalised π electrons → resonance energy." }],
            steps: [
              { reasoning: "π electrons delocalised around ring (not fixed double bonds).", marks: 1, markCode: "M" },
              { reasoning: "Delocalisation spreads charge → lower energy.", marks: 1, markCode: "M" },
              { reasoning: "Resonance energy = extra stability beyond Kekulé prediction.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Delocalised π → resonance stabilisation",
            commonErrors: ["Saying benzene has no double bonds."],
          },
        },
        {
          id: "edialchem-benz-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Describe the nitration of benzene.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "method", name: "Nitration", statement: "Electrophilic substitution." }],
            steps: [
              { reasoning: "Conc. HNO₃ + conc. H₂SO₄ generate NO₂⁺ electrophile.", marks: 1, markCode: "M" },
              { reasoning: "NO₂⁺ attacks benzene ring → arenium ion intermediate.", marks: 1, markCode: "M" },
              { reasoning: "H⁺ lost → nitrobenzene formed, aromaticity restored.", marks: 1, markCode: "A" },
              { reasoning: "Conditions: 50-60°C, mixed acids.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "C₆H₆ + HNO₃ → C₆H₅NO₂ + H₂O",
            commonErrors: ["Saying addition occurs."],
          },
        },
        {
          id: "edialchem-benz-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Describe electrophilic substitution in aromatic compounds.",
          parts: [
            { label: "a", prompt: "Why substitution not addition.", marks: 3 },
            { label: "b", prompt: "General mechanism.", marks: 4 },
            { label: "c", prompt: "Three examples.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "method", name: "Electrophilic substitution", statement: "Preserve aromaticity." }],
            steps: [
              { part: "a", reasoning: "Benzene delocalised π stable.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Addition would break delocalisation → energetically unfavourable.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Substitution preserves aromatic ring.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Electrophile generated (NO₂⁺, Br⁺, R⁺).", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Attacks ring → σ complex (arenium ion).", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Loss of H⁺ restores aromaticity.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Net: H replaced by electrophile.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Nitration: HNO₃/H₂SO₄ → nitrobenzene.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Halogenation: Br₂/FeBr₃ → bromobenzene.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Alkylation: CH₃Cl/AlCl₃ → methylbenzene.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Electrophile replaces H; preserves aromaticity",
            commonErrors: ["Saying benzene does addition."],
          },
        },
      ],
    },
    {
      id: "edialchem-u4-amines",
      title: "Amines and amides",
      skill: "Describe structure and reactions of amines and amides.",
      lesson: {
        sections: [
          {
            heading: "Amines",
            body: "Functional group –NH₂ (primary), –NHR (secondary), –NR₂ (tertiary). Derived from ammonia NH₃. Methylamine, ethylamine, phenylamine (aniline). Basic — accept H⁺ → ammonium ions. React with acids → salts; with acyl chlorides → amides. Used in dyes, drugs, explosives.",
          },
          {
            heading: "Amides",
            body: "Functional group –CONH₂ (primary), –CONHR (secondary), –CONR₂ (tertiary). Formed from carboxylic acid + amine (or acyl chloride + amine). Proteins contain peptide bonds (secondary amides). Urea, nylon, paracetamol are amide-containing.",
          },
          {
            heading: "Preparation",
            body: "Amines: reduction of nitriles (R–C≡N + 3H₂ → R–CH₂NH₂) or reduction of nitro compounds. Amides: acid + amine, or acyl chloride + amine. Both nitrogen-containing — important in biochemistry and pharmaceuticals.",
          },
        ],
        keyFormulas: [
          { name: "Key formula", statement: "RCOOH + R'NH₂ → RCONHR' + H₂O" },
        ],
        workedExample: {
          problem: "Why are amines basic?",
          solution: "Lone pair on nitrogen accepts H⁺ → forms ammonium ion RNH₃⁺ — same as ammonia's basicity.",
        },
      },
      questions: [
        {
          id: "edialchem-amine-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the functional group of primary amines?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "–OH" },
              { id: "b", text: "–NH₂" },
              { id: "c", text: "–NO₂" },
              { id: "d", text: "–CONH₂" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Amine", statement: "–NH₂ primary amine." }],
            steps: [{ reasoning: "Direct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** –NH₂",
          },
        },
        {
          id: "edialchem-amine-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why amines are basic.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Amine basicity", statement: "Lone pair on N accepts H⁺." }],
            steps: [
              { reasoning: "Nitrogen has lone pair of electrons.", marks: 1, markCode: "M" },
              { reasoning: "Can accept H⁺ → forms ammonium ion RNH₃⁺.", marks: 1, markCode: "M" },
              { reasoning: "Same mechanism as ammonia → basic.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Lone pair accepts H⁺ → basic",
            commonErrors: ["Saying amines are acidic."],
          },
        },
        {
          id: "edialchem-amine-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Write the reaction between ethylamine and ethanoic acid.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "method", name: "Amine + acid", statement: "Forms amide + water." }],
            steps: [
              { reasoning: "C₂H₅NH₂ + CH₃COOH → CH₃CONHC₂H₅ + H₂O.", marks: 1, markCode: "M" },
              { reasoning: "Product: N-ethyl ethanamide (amide).", marks: 1, markCode: "A" },
              { reasoning: "Amide linkage –CONH– formed.", marks: 1, markCode: "M" },
              { reasoning: "Water eliminated.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "C₂H₅NH₂ + CH₃COOH → CH₃CONHC₂H₅ + H₂O",
            commonErrors: ["Wrong product type."],
          },
        },
        {
          id: "edialchem-amine-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Compare amines and amides.",
          parts: [
            { label: "a", prompt: "Functional groups.", marks: 3 },
            { label: "b", prompt: "Basicity.", marks: 3 },
            { label: "c", prompt: "One use each.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "comparison", name: "Amines vs amides", statement: "–NH₂ vs –CONH₂." }],
            steps: [
              { part: "a", reasoning: "Amine: –NH₂ (or –NHR, –NR₂).", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Amide: –CONH₂ (or –CONHR, –CONR₂).", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Amide has carbonyl; amine doesn't.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Amines: basic (lone pair on N).", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Amides: neutral — lone pair delocalised into C=O.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Amides much less basic than amines.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Amines: dyes, drugs, explosives (TNT).", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Urea is amide — fertiliser.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Nylon — polyamide.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Paracetamol contains amide.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Amines basic; amides neutral; different uses",
            commonErrors: ["Saying amides are basic."],
          },
        },
      ],
    },
  ],
};
