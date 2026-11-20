import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "cipub-u2-lesson-2-1",
  code: "2-1",
  title: "DNA, Genes and Protein Synthesis",
  goal: "I CAN explain DNA structure, replication, transcription and translation at Pre-U standard.",
  standards: ["Cambridge Pre-U Biology 9769", "Genetics: DNA and protein synthesis"],
  vocabulary: [
    { term: "Nucleotide", definition: "DNA monomer: phosphate + deoxyribose sugar + base (A, T, G, C)." },
    { term: "Codon", definition: "Three-base mRNA sequence coding for one amino acid." },
    { term: "Transcription", definition: "Synthesis of mRNA from a DNA template in the nucleus." },
    { term: "Translation", definition: "Synthesis of protein at ribosomes using mRNA and tRNA." },
    { term: "Anticodon", definition: "Three-base tRNA sequence complementary to an mRNA codon." },
    { term: "Degenerate code", definition: "Multiple codons can code for the same amino acid — code is redundant but unambiguous." },
  ],
  concepts: [
    {
      id: "cipub-u2-s1-dna",
      title: "DNA and protein synthesis",
      skill: "Describe DNA structure/replication and the central dogma: DNA → mRNA → protein.",
      lesson: {
        sections: [
          {
            heading: "DNA structure and replication",
            body: "DNA is a double helix: two antiparallel strands of nucleotides (phosphate-sugar-base) held by complementary base pairing — A=T (2 H-bonds), G≡C (3 H-bonds). Purines (A, G) pair with pyrimidines (T, C). **Semiconservative replication**: helicase unwinds, DNA polymerase adds complementary nucleotides 5'→3', producing two identical daughter molecules each with one old and one new strand. Proofreading by polymerase keeps error rate ~1 per 10⁹ bases.",
          },
          {
            heading: "Transcription",
            body: "In the nucleus, RNA polymerase binds to a promoter on the template strand and synthesises pre-mRNA 5'→3' using complementary bases (A→U, T→A, G→C, C→G). RNA differs from DNA: ribose sugar, uracil instead of thymine, single-stranded. In eukaryotes, introns are spliced out and exons retained (alternative splicing → multiple proteins from one gene); the mature mRNA exits through nuclear pores.",
          },
          {
            heading: "Translation",
            body: "mRNA binds to a ribosome (small + large subunit). tRNA carries amino acids with anticodons complementary to codons. Initiation at AUG (start codon, methionine), elongation adds amino acids via peptide bonds, termination at stop codons (UAA, UAG, UGA). The genetic code is degenerate (e.g. 6 codons for leucine), universal, non-overlapping and comma-free. Mutations: substitution (missense/nonsense/silent), insertion/deletion (frameshift — usually more damaging).",
          },
        ],
        keyFormulas: [
          {
            name: "Base pairing",
            statement: "A=T, G≡C — purine ↔ pyrimidine",
          },
          {
            name: "Central dogma",
            statement: "DNA $\\rightarrow$ mRNA $\\rightarrow$ protein",
          },
        ],
        workedExample: {
          problem: "A DNA strand reads 3'-TAC GGA CTT-5'. Write the mRNA codons produced and the amino acids coded.",
          solution:
            "mRNA (5'→3', complementary to template): AUG CCU GAA. Codons: AUG (Met, start), CCU (Pro), GAA (Glu).",
        },
      },
      questions: [
        {
          id: "cipub-u2-dna-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which base pairs with adenine in DNA?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Guanine" },
              { id: "b", text: "Thymine" },
              { id: "c", text: "Cytosine" },
              { id: "d", text: "Uracil" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Base pairing",
                statement: "A=T and G≡C in DNA; uracil replaces thymine in RNA.",
              },
            ],
            steps: [{ reasoning: "Adenine pairs with thymine.", marks: 1, markCode: "A" }],
            finalAnswer: "Thymine",
          },
        },
        {
          id: "cipub-u2-dna-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain why DNA replication is described as semiconservative.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Semiconservative replication",
                statement: "Each daughter DNA molecule contains one parental and one new strand.",
              },
            ],
            steps: [
              {
                reasoning: "Helicase separates the two strands; each serves as a template.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Each daughter molecule keeps one old strand — 'semi' = half conserved.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Each daughter has one old + one new strand.",
          },
        },
        {
          id: "cipub-u2-dna-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Distinguish between transcription and translation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Transcription vs translation",
                statement: "Transcription: DNA→mRNA in nucleus. Translation: mRNA→protein at ribosome.",
              },
            ],
            steps: [
              {
                reasoning: "Transcription: RNA polymerase, nucleus, DNA template → mRNA.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Translation: ribosome, cytoplasm, mRNA + tRNA → polypeptide.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Enzymes differ: RNA polymerase vs ribosomal/tRNA machinery.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "DNA→mRNA (nucleus) vs mRNA→protein (ribosome).",
          },
        },
        {
          id: "cipub-u2-dna-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A mutation changes a codon from UUU (phenylalanine) to UUC. Explain why this is likely silent, while a change to UAA would not be.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Degenerate code",
                statement: "Multiple codons code for the same amino acid; stop codons terminate translation.",
              },
            ],
            steps: [
              {
                reasoning: "UUU and UUC both code for phenylalanine — same amino acid inserted.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Protein sequence unchanged → silent mutation, no functional effect.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "UAA is a stop codon — translation terminates prematurely.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Truncated protein likely non-functional — nonsense mutation is damaging.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Silent (same amino acid) vs nonsense (premature stop).",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cipub-u2-dna-notes",
      title: "DNA and protein synthesis — revision notes",
      summary: "DNA structure, semiconservative replication, transcription, translation, mutations.",
      sections: [
        {
          heading: "Key skills",
          body: "For codon questions, always write mRNA 5'→3' and identify start/stop codons. Know intron/exon splicing for eukaryotes.",
        },
        {
          heading: "Exam tips",
          body: "Silent vs missense vs nonsense vs frameshift — classify by effect on amino acid sequence. Remember the code is degenerate but NOT ambiguous.",
        },
      ],
    },
  ],
};
