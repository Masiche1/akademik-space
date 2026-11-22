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
              { id: "a", text: "Uracil" },
              { id: "b", text: "Cytosine" },
              { id: "c", text: "Thymine" },
              { id: "d", text: "Guanine" },
            ],
            correctChoiceId: "c",
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
        {
          id: "cipub-u2-dna-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which two bases are purines in DNA?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Cytosine and thymine" },
              { id: "b", text: "Adenine and guanine" },
              { id: "c", text: "Adenine and cytosine" },
              { id: "d", text: "Guanine and thymine" },
            ],
            borrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Purines and pyrimidines",
                statement: "Purines (double-ring): A, G. Pyrimidines (single-ring): C, T, U.",
              },
            ],
            steps: [{ reasoning: "Adenine and guanine are the purines.", marks: 1, markCode: "A" }],
            finalAnswer: "(c) Adenine and guanine",
          },
        },
        {
          id: "cipub-u2-dna-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "A DNA molecule contains 20% adenine. What percentage of its bases is guanine?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 30, unit: "%" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Chargaff's rule",
                statement: "$A = T$ and $G = C$; $A + T + G + C = 100\\%$.",
              },
            ],
            steps: [
              {
                reasoning: "Adenine = thymine = 20%, so A + T = 40%; G + C = 60%, and G = C → each 30%.",
                working: "G = \\frac{100 - 2 \\times 20}{2} = 30\\%",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "30%",
          },
        },
        {
          id: "cipub-u2-dna-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which enzyme unwinds the DNA double helix during replication?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Helicase" },
              { id: "b", text: "Ligase" },
              { id: "c", text: "DNA polymerase" },
              { id: "d", text: "RNA polymerase" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Helicase",
                statement: "Enzyme that breaks hydrogen bonds between base pairs, unwinding the double helix.",
              },
            ],
            steps: [{ reasoning: "Helicase unwinds DNA; DNA polymerase then adds new nucleotides.", marks: 1, markCode: "A" }],
            finalAnswer: "(b) Helicase",
          },
        },
        {
          id: "cipub-u2-dna-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "State two differences between DNA and RNA.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "DNA vs RNA",
                statement: "DNA: deoxyribose, thymine, double-stranded. RNA: ribose, uracil, single-stranded.",
              },
            ],
            steps: [
              {
                reasoning: "DNA contains deoxyribose sugar and thymine; RNA contains ribose and uracil instead.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "DNA is double-stranded (antiparallel); RNA is single-stranded.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Sugar, base and strandedness differ.",
          },
        },
        {
          id: "cipub-u2-dna-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "A polypeptide is made of 50 amino acids. Including the stop codon, how many nucleotides are needed in the coding region of the mRNA?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 153 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Codon count",
                statement: "One codon (3 nucleotides) codes for one amino acid; one stop codon ends translation.",
              },
            ],
            steps: [
              {
                reasoning: "50 sense codons + 1 stop codon = 51 codons; $51 \\times 3 = 153$ nucleotides.",
                working: "(50 + 1) \\times 3 = 153",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "153 nucleotides",
          },
        },
        {
          id: "cipub-u2-dna-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which mRNA codon is the start codon that initiates translation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "UAA" },
              { id: "b", text: "GUA" },
              { id: "c", text: "AUG" },
              { id: "d", text: "UGA" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Start codon",
                statement: "AUG codes for methionine and signals the start of translation.",
              },
            ],
            steps: [{ reasoning: "AUG is the start codon; UAA, UAG and UGA are stop codons.", marks: 1, markCode: "A" }],
            finalAnswer: "(b) AUG",
          },
        },
        {
          id: "cipub-u2-dna-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe the main events of translation at a ribosome.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Translation",
                statement: "mRNA read at ribosome; tRNA anticodons pair with codons to add amino acids in a polypeptide chain.",
              },
            ],
            steps: [
              {
                reasoning: "mRNA binds to the ribosome (small and large subunits) at the start codon AUG.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "tRNA molecules carrying specific amino acids pair their anticodons with successive mRNA codons; peptide bonds join the amino acids.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Translation continues until a stop codon (UAA, UAG or UGA) is reached; the polypeptide is released and folds.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Initiation at AUG → elongation via tRNA → termination at stop codon.",
          },
        },
        {
          id: "cipub-u2-dna-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which type of mutation changes the reading frame of the genetic code?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Nonsense substitution to a stop codon" },
              { id: "b", text: "Silent substitution" },
              { id: "c", text: "Missense substitution" },
              { id: "d", text: "Frameshift caused by an insertion or deletion" },
            ],
            dorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Frameshift mutation",
                statement: "Insertions or deletions shift every subsequent codon — usually the most damaging mutation type.",
              },
            ],
            steps: [{ reasoning: "Only insertions/deletions alter the reading frame; substitutions affect a single codon.", marks: 1, markCode: "A" }],
            finalAnswer: "(c) Frameshift from insertion/deletion",
          },
        },
        {
          id: "cipub-u2-dna-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "In a sample of DNA, guanine makes up 25% of the bases. What percentage is cytosine?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 25, unit: "%" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Chargaff's rule",
                statement: "$G = C$ in DNA.",
              },
            ],
            steps: [
              {
                reasoning: "Guanine pairs with cytosine, so their percentages are equal: 25%.",
                working: "G = C = 25\\%",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "25%",
          },
        },
        {
          id: "cipub-u2-dna-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how introns and exons are processed in eukaryotic genes, and how alternative splicing can increase protein diversity.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "RNA splicing",
                statement: "Introns removed from pre-mRNA; exons joined to form mature mRNA.",
              },
            ],
            steps: [
              {
                reasoning: "Transcription produces pre-mRNA containing both introns (non-coding) and exons (coding sequences).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Splicing removes the introns and joins the exons; the mature mRNA then exits through nuclear pores.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Alternative splicing joins exons in different combinations from the same pre-mRNA.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "One gene can therefore produce several different proteins — increasing protein diversity from a limited genome.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Introns spliced out; alternative exons → multiple proteins per gene.",
          },
        },
        {
          id: "cipub-u2-dna-q15",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of the following is a stop codon?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "UAG" },
              { id: "b", text: "CCU" },
              { id: "c", text: "GAA" },
              { id: "d", text: "AUG" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Stop codons",
                statement: "UAA, UAG and UGA signal termination of translation — they code for no amino acid.",
              },
            ],
            steps: [{ reasoning: "UAG is a stop codon; AUG is the start codon.", marks: 1, markCode: "A" }],
            finalAnswer: "(b) UAG",
          },
        },
        {
          id: "cipub-u2-dna-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Compare silent, missense and nonsense mutations in terms of their effect on the protein produced.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "Mutation types",
                statement: "Silent = same amino acid; missense = different amino acid; nonsense = premature stop.",
              },
            ],
            steps: [
              {
                reasoning: "Silent: codon changes but codes for the same amino acid (degenerate code) — protein unchanged.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Missense: codon changes to a different amino acid — protein sequence altered, effect depends on location.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Nonsense: codon becomes a stop codon — translation ends early, producing a truncated protein.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Frameshift mutations (insertions/deletions) are usually most damaging because every downstream codon changes.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Silent = no change; missense = one amino acid; nonsense = truncation.",
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
