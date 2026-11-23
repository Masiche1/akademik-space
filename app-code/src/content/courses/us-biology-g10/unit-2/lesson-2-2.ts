import type { Lesson } from "../../../types.ts";

export const lesson122: Lesson = {
  id: "bio10-u2-lesson-2-2",
  code: "2-2",
  title: "Protein Synthesis: Transcription and Translation",
  goal: "I CAN describe transcription and translation, explain the role of mRNA, tRNA and ribosomes, and use the genetic code.",
  standards: ["HS-LS1-1"],
  vocabulary: [
    { term: "Transcription", definition: "Copying a DNA gene into messenger RNA (mRNA) in the nucleus." },
    { term: "Translation", definition: "Decoding mRNA into a protein at the ribosome." },
    { term: "mRNA", definition: "Messenger RNA; carries genetic code from DNA to ribosome." },
    { term: "tRNA", definition: "Transfer RNA; brings specific amino acids to the ribosome based on anticodon." },
    { term: "Codon", definition: "Three-base sequence on mRNA that specifies an amino acid or stop signal." },
    { term: "Ribosome", definition: "Cellular machine that reads mRNA and assembles amino acids into protein." },
    { term: "Genetic code", definition: "The universal mapping of 64 codons to 20 amino acids and stop signals." },
  ],
  concepts: [
    {
      id: "bio10-u2-transcription",
      title: "Transcription",
      skill: "Describe how DNA is transcribed into mRNA and the role of RNA polymerase.",
      lesson: {
        sections: [
          {
            heading: "From DNA to mRNA",
            body: "**Transcription** copies a gene's DNA sequence into mRNA in the nucleus:\n\n1. **Initiation**: RNA polymerase binds to the promoter region of DNA\n2. **Elongation**: RNA polymerase reads the template strand and synthesizes mRNA (5'→3')\n3. **Termination**: RNA polymerase reaches a termination signal and releases mRNA\n\nBase pairing: A→U (uracil replaces thymine in RNA), T→A, G→C.",
          },
          {
            heading: "mRNA processing",
            body: "Eukaryotic pre-mRNA undergoes processing before leaving the nucleus:\n- **5' cap**: protects mRNA and aids ribosome binding\n- **Poly-A tail**: protects from degradation\n- **Splicing**: introns (noncoding) removed, exons (coding) joined\n\nThis produces mature mRNA ready for translation.",
          },
          {
            heading: "Why transcription matters",
            body: "DNA stays safely in the nucleus; mRNA carries the code to ribosomes in the cytoplasm. This separation protects DNA and allows multiple mRNA copies to be made from one gene for efficient protein production.",
          },
        ],
        keyFormulas: [
          { name: "Base pairing in transcription", statement: "DNA A→RNA U; DNA T→RNA A; DNA G→RNA C; DNA C→RNA G" },
          { name: "Direction", statement: "mRNA synthesized 5'→3'" },
        ],
        workedExample: {
          problem: "A DNA template strand reads 3'-TACGGT-5'. What is the mRNA sequence?",
          solution: "mRNA is complementary and antiparallel: 5'-AUGCCA-3'. (A pairs with T→U, U pairs with A, G with C, C with G.)",
        },
      },
      questions: [
        {
          id: "bio10-u2-transcription-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the product of transcription?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Protein" },
              { id: "b", text: "mRNA" },
              { id: "c", text: "tRNA" },
              { id: "d", text: "DNA" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Transcription", statement: "DNA → mRNA." }],
            steps: [{ reasoning: "Transcription produces messenger RNA from a DNA template.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** mRNA",
            commonErrors: ["Confusing transcription with translation."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "bio10-u2-transcription-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why does RNA contain uracil instead of thymine?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "RNA vs DNA", statement: "RNA is single-stranded, uses uracil, has ribose sugar." }],
            steps: [
              { reasoning: "Uracil pairs with adenine just as thymine does in DNA.", marks: 1, markCode: "B" },
              { reasoning: "RNA is single-stranded and shorter-lived, so the extra methyl group of thymine isn't needed for stability.", marks: 1, markCode: "R" },
              { reasoning: "Uracil allows RNA to be degraded and resynthesized more easily.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Uracil is simpler; sufficient for temporary mRNA; thymine reserved for stable DNA.",
            commonErrors: ["Thinking uracil can't pair with adenine."],
            examinerNote: "B1, R1, A1.",
          },
        },
        {
          id: "bio10-u2-transcription-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why eukaryotic cells process pre-mRNA before translation but prokaryotes don't.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Nuclear envelope", statement: "Eukaryotes separate transcription (nucleus) from translation (cytoplasm)." },
              { kind: "principle", name: "RNA processing", statement: "Splicing, capping, tailing produce mature mRNA." },
            ],
            steps: [
              { reasoning: "Eukaryotes have a nuclear envelope separating DNA from ribosomes.", marks: 1, markCode: "B" },
              { reasoning: "Pre-mRNA must be processed (spliced, capped, tailed) before export.", marks: 1, markCode: "R" },
              { reasoning: "Prokaryotes lack a nucleus; transcription and translation occur simultaneously.", marks: 1, markCode: "B" },
              { reasoning: "Processing also allows alternative splicing, producing multiple proteins from one gene.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Nuclear separation requires processing; prokaryotes transcribe/translate together.",
            commonErrors: ["Thinking all cells process RNA."],
            examinerNote: "B2, R1, A1.",
          },
        },
        {
          id: "bio10-u2-transcription-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A gene has the DNA template strand 3'-TACGGAATTC-5'.",
          parts: [
            { label: "a", prompt: "Write the mRNA sequence produced by transcription.", marks: 2 },
            { label: "b", prompt: "If the start codon is AUG, where does translation begin on this mRNA?", marks: 2 },
            { label: "c", prompt: "How many amino acids would be coded if the mRNA is 5'-AUGCCUUGA-3'?", marks: 3 },
            { label: "d", prompt: "Explain why the coding strand (not template) is sometimes called the 'sense' strand.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Transcription", statement: "mRNA complementary to template, antiparallel." },
              { kind: "principle", name: "Genetic code", statement: "Codons of 3 bases specify amino acids; AUG = start." },
            ],
            steps: [
              { reasoning: "mRNA: 5'-AUGCCUUAA-3' (complementary to template, antiparallel).", marks: 2, markCode: "B", part: "a" },
              { reasoning: "Translation begins at AUG codon — here at positions 1-3; AUG also codes for methionine as the first amino acid.", marks: 2, markCode: "B", part: "b" },
              { reasoning: "mRNA 5'-AUGCCUUGA-3' has 3 codons: AUG, CCU, UGA.", marks: 1, markCode: "M", part: "c" },
              { reasoning: "AUG = methionine (start), CCU = proline, UGA = stop.", marks: 1, markCode: "B", part: "c" },
              { reasoning: "Only 2 amino acids coded (AUG and CCU); UGA is stop signal.", marks: 1, markCode: "A", part: "c" },
              { reasoning: "Coding strand has same sequence as mRNA (except T→U), so it 'makes sense' as the code.", marks: 1, markCode: "R", part: "d" },
              { reasoning: "Template strand is complementary — reading it directly gives gibberish.", marks: 1, markCode: "B", part: "d" },
              { reasoning: "Scientists use coding strand to report gene sequences.", marks: 1, markCode: "A", part: "d" },
            ],
            finalAnswer: "(a) 5'-AUGCCUUAA-3' (b) starts at AUG (c) 2 amino acids (d) coding strand matches mRNA sequence.",
            commonErrors: ["Reading template strand directly.", "Counting stop codon as amino acid."],
            examinerNote: "2+2+3+3 = 10.",
          },
        },
      ],
    },
    {
      id: "bio10-u2-translation",
      title: "Translation and the genetic code",
      skill: "Describe translation at the ribosome, use the genetic code, and explain codons, anticodons and stop signals.",
      lesson: {
        sections: [
          {
            heading: "Translation steps",
            body: "At the ribosome, mRNA is decoded into protein:\n\n1. **Initiation**: small ribosomal subunit binds mRNA at start codon (AUG); large subunit joins\n2. **Elongation**: tRNAs bring amino acids matching each codon; peptide bonds form\n3. **Termination**: stop codon (UAA, UAG, UGA) ends translation; protein released",
          },
          {
            heading: "The genetic code",
            body: "64 codons code for 20 amino acids + 3 stop signals — the code is **degenerate** (multiple codons per amino acid) and **universal** (same in almost all organisms).\n\n- **Start codon**: AUG (methionine)\n- **Stop codons**: UAA, UAG, UGA\n- Example: UUU and UUC both code for phenylalanine",
          },
          {
            heading: "tRNA and anticodons",
            body: "Each tRNA has an **anticodon** complementary to an mRNA codon and carries the corresponding amino acid. The ribosome matches codon-anticodon pairs, ensuring correct amino acid sequence.",
          },
        ],
        keyFormulas: [
          { name: "Codon", statement: "3 mRNA bases → 1 amino acid" },
          { name: "Start/stop", statement: "AUG = start; UAA/UAG/UGA = stop" },
          { name: "Degenerate", statement: "Multiple codons can code for same amino acid" },
        ],
        workedExample: {
          problem: "Translate the mRNA sequence 5'-AUGGCUUAA-3' into amino acids.",
          solution: "Codons: AUG (Met), GCU (Ala), UAA (stop). Protein: Met-Ala (2 amino acids; UAA terminates).",
        },
      },
      questions: [
        {
          id: "bio10-u2-translation-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the start codon for translation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "UAA" },
              { id: "b", text: "AUG" },
              { id: "c", text: "UGA" },
              { id: "d", text: "UAG" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Start codon", statement: "AUG codes for methionine and starts translation." }],
            steps: [{ reasoning: "AUG is the universal start codon.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** AUG",
            commonErrors: ["Confusing start and stop codons."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "bio10-u2-translation-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Translate the mRNA codon GCU using the genetic code (GCU = Alanine).",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Genetic code", statement: "Each codon specifies one amino acid." }],
            steps: [
              { reasoning: "GCU codes for alanine.", marks: 1, markCode: "B" },
              { reasoning: "The corresponding tRNA has anticodon CGA.", marks: 1, markCode: "B" },
              { reasoning: "Alanine is added to the growing peptide chain.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Alanine",
            commonErrors: ["Reading anticodon instead of codon."],
            examinerNote: "B2, A1.",
          },
        },
        {
          id: "bio10-u2-translation-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why the genetic code is called 'degenerate' and 'universal'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Degenerate", statement: "Multiple codons code for same amino acid." },
              { kind: "principle", name: "Universal", statement: "Same code in almost all organisms." },
            ],
            steps: [
              { reasoning: "Degenerate: 64 codons but only 20 amino acids, so most amino acids have multiple codons (e.g., leucine has 6).", marks: 1, markCode: "B" },
              { reasoning: "This redundancy reduces the impact of point mutations.", marks: 1, markCode: "R" },
              { reasoning: "Universal: the same codon specifies the same amino acid in bacteria, plants, animals — evidence of common ancestry.", marks: 1, markCode: "B" },
              { reasoning: "Minor exceptions exist (mitochondria, some protists) but the code is nearly universal.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Degenerate = redundant codons; universal = same code across life.",
            commonErrors: ["Thinking degenerate means random."],
            examinerNote: "B2, R1, A1.",
          },
        },
        {
          id: "bio10-u2-translation-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A mutation changes the mRNA codon UUU to UUA.",
          parts: [
            { label: "a", prompt: "What amino acid does UUU normally code for?", marks: 1 },
            { label: "b", prompt: "What amino acid does UUA code for?", marks: 1 },
            { label: "c", prompt: "Is this a silent, missense or nonsense mutation? Explain.", marks: 3 },
            { label: "d", prompt: "If the codon UUU changes to UAA, what type of mutation is this and what is the effect?", marks: 3 },
            { label: "e", prompt: "Explain why mutations in noncoding regions may have less effect than in coding regions.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Mutation types", statement: "Silent: same amino acid; missense: different amino acid; nonsense: premature stop." },
              { kind: "principle", name: "Degeneracy", statement: "Some codon changes don't alter amino acid." },
            ],
            steps: [
              { reasoning: "UUU codes for phenylalanine.", marks: 1, markCode: "B", part: "a" },
              { reasoning: "UUA codes for leucine.", marks: 1, markCode: "B", part: "b" },
              { reasoning: "UUU (Phe) → UUA (Leu): different amino acid = missense mutation.", marks: 2, markCode: "B", part: "c" },
              { reasoning: "Missense may alter protein function depending on location.", marks: 1, markCode: "R", part: "c" },
              { reasoning: "UAA is a stop codon.", marks: 1, markCode: "B", part: "d" },
              { reasoning: "This is a nonsense mutation — premature termination produces truncated protein.", marks: 1, markCode: "R", part: "d" },
              { reasoning: "Truncated protein likely nonfunctional.", marks: 1, markCode: "A", part: "d" },
              { reasoning: "Noncoding regions don't directly code for proteins, so mutations there may affect regulation but not protein sequence.", marks: 1, markCode: "R", part: "e" },
              { reasoning: "Coding region mutations directly change amino acids.", marks: 1, markCode: "B", part: "e" },
            ],
            finalAnswer: "(a) Phe (b) Leu (c) missense (d) nonsense/truncated (e) noncoding affects regulation not sequence.",
            commonErrors: ["Confusing missense and nonsense."],
            examinerNote: "1+1+3+3+2 = 10.",
          },
        },
      ],
    },
  ],
};
