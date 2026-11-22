import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "cipub-u3-lesson-3-2",
  code: "3-2",
  title: "DNA, replication and gene expression",
  goal: "I CAN explain DNA structure, replication, transcription and translation.",
  standards: [
    "Cambridge Pre-U Biology 9769",
    "Paper 1: DNA and protein synthesis",
  ],
  vocabulary: [
    {
      term: "Nucleotide",
      definition: "Building block of DNA — phosphate + deoxyribose + base.",
    },
    {
      term: "Base pairing",
      definition: "A-T, G-C complementary base pairing in DNA.",
    },
    {
      term: "Semi-conservative replication",
      definition: "Each new DNA molecule has one old and one new strand.",
    },
    {
      term: "DNA polymerase",
      definition: "Enzyme that synthesises new DNA strand.",
    },
    {
      term: "Helicase",
      definition: "Enzyme that unwinds DNA double helix.",
    },
    {
      term: "Transcription",
      definition: "Copying DNA sequence into mRNA.",
    },
    {
      term: "Translation",
      definition: "Decoding mRNA into amino acid chain (protein).",
    },
    {
      term: "mRNA",
      definition: "Messenger RNA — carries genetic code to ribosome.",
    },
    {
      term: "tRNA",
      definition: "Transfer RNA — carries amino acids to ribosome.",
    },
    {
      term: "Codon",
      definition: "Three-base sequence on mRNA coding for amino acid.",
    },
    {
      term: "Anticodon",
      definition: "Three-base sequence on tRNA complementary to codon.",
    },
    {
      term: "Gene",
      definition: "Section of DNA coding for a protein/trait.",
    },
  ],
  concepts: [
    {
      id: "cipub-u3-dna",
      title: "DNA structure and replication",
      skill:
        "Explain DNA structure, base pairing, semi-conservative replication and its enzymes.",
      lesson: {
        sections: [
          {
            heading: "DNA structure",
            body: "**Double helix**: two strands twisted — sugar-phosphate backbone outside, bases inside. **Base pairing**: adenine (A) pairs with thymine (T), guanine (G) pairs with cytosine (C) — hydrogen bonds hold strands together. **Nucleotide**: phosphate + deoxyribose sugar + nitrogenous base (A, T, G, C).",
          },
          {
            heading: "Semi-conservative replication",
            body: "DNA replicates **semi-conservatively** — each new molecule has one original strand and one new strand. **Steps**: helicase unwinds helix → DNA polymerase adds complementary nucleotides → proofreading checks accuracy → two identical DNA molecules result. This ensures genetic information is faithfully copied.",
          },
          {
            heading: "Significance of DNA structure",
            body: "Base pairing enables replication — each strand serves as template. Chargaff's rules: A=T, G=C — explained by complementary pairing. DNA's stability (hydrogen bonds) protects genetic information. The double helix structure allows access for replication and transcription.",
          },
        ],
        keyFormulas: [
          {
            name: "Base pairing",
            statement: "A-T · G-C",
          },
          {
            name: "Chargaff's rules",
            statement: "A=T · G=C",
          },
          {
            name: "Semi-conservative",
            statement: "One old + one new strand",
          },
          {
            name: "Replication enzymes",
            statement: "Helicase unwinds · polymerase synthesises",
          },
        ],
        workedExample: {
          problem: "If DNA has 20% adenine, what % thymine and guanine?",
          solution: "A=T so T=20%. Remaining 60% split G=C → G=30%, C=30%.",
        },
      },
      questions: [
        {
          id: "cipub-u3-dna-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "DNA stands for:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Deoxyribonucleic acid" },
              { id: "b", text: "Ribonucleic acid" },
              { id: "c", text: "Nucleic acid only" },
              { id: "d", text: "Deoxyribose acid" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "DNA",
                statement: "Deoxyribonucleic acid.",
              },
            ],
            steps: [
              {
                reasoning: "DNA = deoxyribonucleic acid.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Deoxyribonucleic acid.",
          },
        },
        {
          id: "cipub-u3-dna-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A nucleotide consists of:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only base" },
              { id: "b", text: "Only sugar" },
              { id: "c", text: "Phosphate + sugar + base" },
              { id: "d", text: "Only phosphate" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Nucleotide",
                statement: "Phosphate+sugar+base.",
              },
            ],
            steps: [
              {
                reasoning: "Nucleotide = 3 components.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Phosphate + sugar + base.",
          },
        },
        {
          id: "cipub-u3-dna-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In DNA, adenine pairs with:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Cytosine" },
              { id: "b", text: "Thymine" },
              { id: "c", text: "Guanine" },
              { id: "d", text: "Uracil" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Base pairing",
                statement: "A-T, G-C.",
              },
            ],
            steps: [{ reasoning: "A pairs with T.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) Thymine.",
          },
        },
        {
          id: "cipub-u3-dna-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In DNA, guanine pairs with:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Thymine" },
              { id: "b", text: "Cytosine" },
              { id: "c", text: "Adenine" },
              { id: "d", text: "Uracil" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Base pairing", statement: "G-C." },
            ],
            steps: [{ reasoning: "G pairs with C.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) Cytosine.",
          },
        },
        {
          id: "cipub-u3-dna-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "DNA has a:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "No structure" },
              { id: "b", text: "Single strand" },
              { id: "c", text: "Double helix structure" },
              { id: "d", text: "Triple helix" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "DNA structure",
                statement: "Double helix.",
              },
            ],
            steps: [
              { reasoning: "DNA = double helix.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Double helix.",
          },
        },
        {
          id: "cipub-u3-dna-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Semi-conservative replication means:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Both strands are new" },
              { id: "b", text: "Each new DNA has one old + one new strand" },
              { id: "c", text: "Both strands are old" },
              { id: "d", text: "No replication" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Semi-conservative",
                statement: "One old + one new.",
              },
            ],
            steps: [
              {
                reasoning: "Semi-conservative = mixed strands.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) One old + one new.",
          },
        },
        {
          id: "cipub-u3-dna-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Helicase enzyme:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Unwinds DNA double helix" },
              { id: "b", text: "Repairs DNA" },
              { id: "c", text: "Joins DNA" },
              { id: "d", text: "Synthesises DNA" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Helicase",
                statement: "Unwinds helix.",
              },
            ],
            steps: [
              { reasoning: "Helicase = unwinds.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Unwinds helix.",
          },
        },
        {
          id: "cipub-u3-dna-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "DNA polymerase enzyme:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Copies RNA" },
              { id: "b", text: "Joins DNA" },
              { id: "c", text: "Unwinds DNA" },
              { id: "d", text: "Synthesises new DNA strand" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "DNA polymerase",
                statement: "Synthesises DNA.",
              },
            ],
            steps: [
              {
                reasoning: "Polymerase = synthesises.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Synthesises new strand.",
          },
        },
        {
          id: "cipub-u3-dna-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Chargaff's rules state:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A=G and T=C" },
              { id: "b", text: "All equal" },
              { id: "c", text: "A=T and G=C" },
              { id: "d", text: "A=C and G=T" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Chargaff's rules",
                statement: "A=T, G=C.",
              },
            ],
            steps: [
              { reasoning: "Chargaff = A=T, G=C.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) A=T, G=C.",
          },
        },
        {
          id: "cipub-u3-dna-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The sugar in DNA is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Ribose" },
              { id: "b", text: "Deoxyribose" },
              { id: "c", text: "Fructose" },
              { id: "d", text: "Glucose" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "DNA sugar",
                statement: "Deoxyribose.",
              },
            ],
            steps: [
              { reasoning: "DNA = deoxyribose.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Deoxyribose.",
          },
        },
        {
          id: "cipub-u3-dna-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "The bases in DNA are:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only G and C" },
              { id: "b", text: "Adenine, thymine, guanine, cytosine" },
              { id: "c", text: "A, T, G, U" },
              { id: "d", text: "Only A and T" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "DNA bases",
                statement: "A, T, G, C.",
              },
            ],
            steps: [
              { reasoning: "DNA bases = A,T,G,C.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) A, T, G, C.",
          },
        },
        {
          id: "cipub-u3-dna-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "Uracil is found in:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Neither" },
              { id: "b", text: "Both" },
              { id: "c", text: "RNA, not DNA" },
              { id: "d", text: "DNA" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Uracil", statement: "RNA base." },
            ],
            steps: [{ reasoning: "U = RNA only.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) RNA, not DNA.",
          },
        },
        {
          id: "cipub-u3-dna-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "If DNA has 30% cytosine, guanine is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "30%" },
              { id: "b", text: "20%" },
              { id: "c", text: "70%" },
              { id: "d", text: "40%" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Base calculation",
                statement: "G=C.",
              },
            ],
            steps: [{ reasoning: "G=C=30%.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) 30%.",
          },
        },
        {
          id: "cipub-u3-dna-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "If DNA has 25% adenine, thymine is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "25%" },
              { id: "b", text: "75%" },
              { id: "c", text: "12.5%" },
              { id: "d", text: "50%" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Base calculation",
                statement: "A=T.",
              },
            ],
            steps: [{ reasoning: "A=T=25%.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) 25%.",
          },
        },
        {
          id: "cipub-u3-dna-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "DNA replication occurs during:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Mitosis" },
              { id: "b", text: "Cytokinesis" },
              { id: "c", text: "S phase of interphase" },
              { id: "d", text: "Meiosis" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Replication timing",
                statement: "S phase.",
              },
            ],
            steps: [
              { reasoning: "Replication = S phase.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) S phase.",
          },
        },
        {
          id: "cipub-u3-dna-q16",
          difficulty: "core",
          totalMarks: 1,
          stem: "Okazaki fragments are:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Short DNA segments on lagging strand" },
              { id: "b", text: "RNA primers" },
              { id: "c", text: "Enzymes" },
              { id: "d", text: "Proteins" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Okazaki fragments",
                statement: "Lagging strand segments.",
              },
            ],
            steps: [
              {
                reasoning: "Okazaki = lagging fragments.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Lagging strand segments.",
          },
        },
        {
          id: "cipub-u3-dna-q17",
          difficulty: "core",
          totalMarks: 1,
          stem: "The leading strand in DNA replication is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Synthesised in fragments" },
              { id: "b", text: "RNA" },
              { id: "c", text: "The template" },
              {
                id: "d",
                text: "Synthesised continuously toward replication fork",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Leading strand",
                statement: "Continuous synthesis.",
              },
            ],
            steps: [
              { reasoning: "Leading = continuous.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Continuous synthesis.",
          },
        },
        {
          id: "cipub-u3-dna-q18",
          difficulty: "core",
          totalMarks: 1,
          stem: "The lagging strand in DNA replication is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "RNA" },
              { id: "b", text: "Synthesised in fragments (Okazaki)" },
              { id: "c", text: "The template" },
              { id: "d", text: "Continuous" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Lagging strand",
                statement: "Fragmented synthesis.",
              },
            ],
            steps: [
              { reasoning: "Lagging = fragments.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Fragmented synthesis.",
          },
        },
        {
          id: "cipub-u3-dna-q19",
          difficulty: "core",
          totalMarks: 1,
          stem: "DNA proofreading is done by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Helicase" },
              { id: "b", text: "Ligase" },
              { id: "c", text: "DNA polymerase" },
              { id: "d", text: "Primase" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Proofreading",
                statement: "DNA polymerase checks.",
              },
            ],
            steps: [
              {
                reasoning: "Polymerase = proofreading.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) DNA polymerase.",
          },
        },
        {
          id: "cipub-u3-dna-q20",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain why DNA replication is called 'semi-conservative'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Semi-conservative",
                statement: "One old + one new strand.",
              },
            ],
            steps: [
              {
                reasoning: "Each strand serves as template for new strand.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Result: each molecule has one original + one new strand.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "One old + one new strand per molecule.",
          },
        },
        {
          id: "cipub-u3-dna-q21",
          difficulty: "core",
          totalMarks: 2,
          stem: "State two enzymes involved in DNA replication.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Replication enzymes",
                statement: "Helicase + polymerase.",
              },
            ],
            steps: [
              {
                reasoning: "Helicase unwinds the helix.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "DNA polymerase synthesises new strand.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Helicase + DNA polymerase.",
          },
        },
        {
          id: "cipub-u3-dna-q22",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why base pairing is essential for DNA replication.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Base pairing role",
                statement: "Template for new strand.",
              },
            ],
            steps: [
              {
                reasoning: "Each strand serves as template.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Complementary bases ensure accurate copying.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "A-T and G-C pairing maintains information.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Template + complementary pairing → accurate copy.",
          },
        },
        {
          id: "cipub-u3-dna-q23",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "DNA has sequence ATCGGCTA. What is the complementary strand?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Complementary sequence",
                statement: "A-T, G-C pairing.",
              },
            ],
            steps: [
              {
                reasoning: "A pairs with T, T with A, C with G, G with C.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "ATCGGCTA → TAGCCGAT.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Strands run antiparallel.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Complementary strand: TAGCCGAT.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "TAGCCGAT.",
          },
        },
        {
          id: "cipub-u3-dna-q24",
          difficulty: "core",
          totalMarks: 1,
          stem: "DNA ligase enzyme:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Synthesises DNA" },
              { id: "b", text: "Unwinds DNA" },
              { id: "c", text: "Joins Okazaki fragments" },
              { id: "d", text: "Copies RNA" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "DNA ligase",
                statement: "Joins fragments.",
              },
            ],
            steps: [{ reasoning: "Ligase = joins.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) Joins fragments.",
          },
        },
        {
          id: "cipub-u3-dna-q25",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is an RNA primer?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "RNA primer",
                statement: "Starting point for DNA synthesis.",
              },
            ],
            steps: [
              {
                reasoning: "Short RNA sequence providing starting point.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "DNA polymerase extends from primer.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Starting point for synthesis.",
          },
        },
        {
          id: "cipub-u3-dna-q26",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why DNA replication produces two identical molecules.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Replication fidelity",
                statement: "Semi-conservative + accurate.",
              },
            ],
            steps: [
              {
                reasoning: "Each strand serves as template.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Complementary base pairing ensures accuracy.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Proofreading by DNA polymerase corrects errors.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Template + pairing + proofreading = identical.",
          },
        },
        {
          id: "cipub-u3-dna-q27",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Adenine pairs with which base in RNA?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Guanine" },
              { id: "b", text: "Cytosine" },
              { id: "c", text: "Uracil" },
              { id: "d", text: "Thymine" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "RNA pairing",
                statement: "A-U, G-C.",
              },
            ],
            steps: [{ reasoning: "RNA: A-U.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) Uracil.",
          },
        },
        {
          id: "cipub-u3-dna-q28",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why is DNA more stable than RNA?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "DNA stability",
                statement: "Double helix + deoxyribose.",
              },
            ],
            steps: [
              {
                reasoning: "Double helix protects genetic information.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Deoxyribose lacks OH group — more stable.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Double helix + deoxyribose = stable.",
          },
        },
        {
          id: "cipub-u3-dna-q29",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how DNA's structure enables it to store genetic information.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "DNA information storage",
                statement: "Base sequence = code.",
              },
            ],
            steps: [
              {
                reasoning: "Base sequence codes for proteins.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Complementary pairing enables copying.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Double helix protects information.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Stable structure preserves code over time.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Sequence codes + pairing copies + helix protects.",
          },
        },
        {
          id: "cipub-u3-dna-q30",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the difference between DNA and RNA?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "DNA vs RNA",
                statement: "Double vs single, T vs U.",
              },
            ],
            steps: [
              {
                reasoning:
                  "DNA: double helix, deoxyribose, T; RNA: single, ribose, U.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "DNA stores info; RNA carries out functions.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "DNA = storage; RNA = function.",
          },
        },
      ],
    },
    {
      id: "cipub-u3-gene",
      title: "Gene expression: transcription and translation",
      skill:
        "Explain how genes are expressed — transcription to mRNA, translation to protein.",
      lesson: {
        sections: [
          {
            heading: "Transcription",
            body: "**Transcription**: DNA → mRNA. **Steps**: RNA polymerase binds to promoter → unwinds DNA → synthesises mRNA complementary to template strand → mRNA processed (splicing removes introns). **mRNA**: carries genetic code to ribosome. **Codons**: three-base sequences on mRNA coding for amino acids.",
          },
          {
            heading: "Translation",
            body: "**Translation**: mRNA → protein. **Steps**: mRNA binds to ribosome → tRNA brings amino acids matching codons → peptide bonds form → protein released. **tRNA**: has anticodon complementary to codon, carries specific amino acid. **Genetic code**: 64 codons — 61 sense codons (amino acids), 3 stop codons.",
          },
          {
            heading: "Regulation and significance",
            body: "Gene expression is regulated — not all genes expressed all the time. **Operons** in bacteria; **transcription factors** in eukaryotes. **Mutations**: changes in DNA sequence can alter protein — silent, missense, nonsense. Understanding gene expression is key to genetics, biotechnology, medicine.",
          },
        ],
        keyFormulas: [
          {
            name: "Central dogma",
            statement: "DNA → RNA → protein",
          },
          {
            name: "Codon",
            statement: "3 mRNA bases = 1 amino acid",
          },
          {
            name: "Genetic code",
            statement: "64 codons — 61 sense + 3 stop",
          },
          {
            name: "tRNA function",
            statement: "Anticodon + amino acid carrier",
          },
        ],
        workedExample: {
          problem: "mRNA codon is AUG. What amino acid?",
          solution: "AUG = methionine — also start codon.",
        },
      },
      questions: [
        {
          id: "cipub-u3-gene-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Transcription is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "DNA → mRNA" },
              { id: "b", text: "mRNA → protein" },
              { id: "c", text: "Protein → DNA" },
              { id: "d", text: "DNA → protein" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Transcription",
                statement: "DNA → mRNA.",
              },
            ],
            steps: [
              {
                reasoning: "Transcription = DNA to RNA.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) DNA → mRNA.",
          },
        },
        {
          id: "cipub-u3-gene-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Translation is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Protein → mRNA" },
              { id: "b", text: "DNA → protein" },
              { id: "c", text: "DNA → mRNA" },
              { id: "d", text: "mRNA → protein" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Translation",
                statement: "mRNA → protein.",
              },
            ],
            steps: [
              {
                reasoning: "Translation = mRNA to protein.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) mRNA → protein.",
          },
        },
        {
          id: "cipub-u3-gene-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "mRNA stands for:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "DNA" },
              { id: "b", text: "Transfer RNA" },
              { id: "c", text: "Messenger RNA" },
              { id: "d", text: "Ribosomal RNA" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "mRNA", statement: "Messenger RNA." },
            ],
            steps: [
              { reasoning: "mRNA = messenger.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Messenger RNA.",
          },
        },
        {
          id: "cipub-u3-gene-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "tRNA stands for:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Messenger RNA" },
              { id: "b", text: "DNA" },
              { id: "c", text: "Transfer RNA" },
              { id: "d", text: "Ribosomal RNA" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "tRNA", statement: "Transfer RNA." },
            ],
            steps: [{ reasoning: "tRNA = transfer.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) Transfer RNA.",
          },
        },
        {
          id: "cipub-u3-gene-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A codon is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Gene" },
              { id: "b", text: "Amino acid" },
              { id: "c", text: "Three-base sequence on tRNA" },
              { id: "d", text: "Three-base sequence on mRNA" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Codon", statement: "3 mRNA bases." },
            ],
            steps: [
              { reasoning: "Codon = mRNA triplet.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) 3 mRNA bases.",
          },
        },
        {
          id: "cipub-u3-gene-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "An anticodon is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "On mRNA" },
              {
                id: "b",
                text: "Three-base sequence on tRNA complementary to codon",
              },
              { id: "c", text: "Amino acid" },
              { id: "d", text: "On DNA" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Anticodon",
                statement: "tRNA complementary triplet.",
              },
            ],
            steps: [
              { reasoning: "Anticodon = tRNA.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) tRNA complementary triplet.",
          },
        },
        {
          id: "cipub-u3-gene-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "RNA polymerase enzyme:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Unwinds DNA" },
              { id: "b", text: "Synthesises mRNA during transcription" },
              { id: "c", text: "Synthesises DNA" },
              { id: "d", text: "Joins fragments" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "RNA polymerase",
                statement: "Synthesises mRNA.",
              },
            ],
            steps: [
              {
                reasoning: "RNA pol = mRNA synthesis.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Synthesises mRNA.",
          },
        },
        {
          id: "cipub-u3-gene-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The start codon is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "UGA" },
              { id: "b", text: "UAG" },
              { id: "c", text: "UAA" },
              { id: "d", text: "AUG (methionine)" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Start codon", statement: "AUG." },
            ],
            steps: [{ reasoning: "AUG = start.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) AUG.",
          },
        },
        {
          id: "cipub-u3-gene-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Stop codons include:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "UUU" },
              { id: "b", text: "AUG" },
              { id: "c", text: "AAA" },
              { id: "d", text: "UAA, UAG, UGA" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Stop codons",
                statement: "UAA, UAG, UGA.",
              },
            ],
            steps: [
              { reasoning: "Stop = UAA/UAG/UGA.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) UAA, UAG, UGA.",
          },
        },
        {
          id: "cipub-u3-gene-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The genetic code has how many codons?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "20" },
              { id: "b", text: "64" },
              { id: "c", text: "61" },
              { id: "d", text: "32" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Genetic code",
                statement: "64 codons.",
              },
            ],
            steps: [{ reasoning: "64 codons.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) 64.",
          },
        },
        {
          id: "cipub-u3-gene-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "Transcription occurs in:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Cytoplasm only" },
              { id: "b", text: "Nucleus" },
              { id: "c", text: "Mitochondria" },
              { id: "d", text: "Ribosome" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Transcription location",
                statement: "Nucleus.",
              },
            ],
            steps: [
              {
                reasoning: "Transcription = nucleus.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Nucleus.",
          },
        },
        {
          id: "cipub-u3-gene-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "Translation occurs in:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Nucleus" },
              { id: "b", text: "Mitochondria" },
              { id: "c", text: "Ribosome" },
              { id: "d", text: "Golgi" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Translation location",
                statement: "Ribosome.",
              },
            ],
            steps: [
              { reasoning: "Translation = ribosome.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Ribosome.",
          },
        },
        {
          id: "cipub-u3-gene-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "mRNA is processed in eukaryotes by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Nothing" },
              { id: "b", text: "Translation" },
              { id: "c", text: "Replication" },
              { id: "d", text: "Splicing — removing introns" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "mRNA processing",
                statement: "Splicing removes introns.",
              },
            ],
            steps: [
              {
                reasoning: "Splicing = remove introns.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Splicing.",
          },
        },
        {
          id: "cipub-u3-gene-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "Introns are:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "DNA" },
              { id: "b", text: "Proteins" },
              { id: "c", text: "Coding regions" },
              { id: "d", text: "Non-coding regions removed from mRNA" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Introns",
                statement: "Non-coding, removed.",
              },
            ],
            steps: [
              { reasoning: "Introns = non-coding.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Non-coding regions.",
          },
        },
        {
          id: "cipub-u3-gene-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Exons are:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Coding regions kept in mRNA" },
              { id: "b", text: "Proteins" },
              { id: "c", text: "Non-coding" },
              { id: "d", text: "Removed" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Exons", statement: "Coding, kept." },
            ],
            steps: [{ reasoning: "Exons = coding.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) Coding regions.",
          },
        },
        {
          id: "cipub-u3-gene-q16",
          difficulty: "core",
          totalMarks: 1,
          stem: "A gene is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A codon" },
              { id: "b", text: "Section of DNA coding for a protein" },
              { id: "c", text: "A chromosome" },
              { id: "d", text: "An amino acid" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Gene",
                statement: "DNA section coding protein.",
              },
            ],
            steps: [
              { reasoning: "Gene = protein coding.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) DNA coding for protein.",
          },
        },
        {
          id: "cipub-u3-gene-q17",
          difficulty: "core",
          totalMarks: 1,
          stem: "The genetic code is described as 'degenerate' because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It has few codons" },
              { id: "b", text: "It's simple" },
              { id: "c", text: "Multiple codons can code for same amino acid" },
              { id: "d", text: "It's universal" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Degenerate code",
                statement: "Multiple codons per amino acid.",
              },
            ],
            steps: [
              {
                reasoning: "Degenerate = redundancy.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Multiple codons per amino acid.",
          },
        },
        {
          id: "cipub-u3-gene-q18",
          difficulty: "core",
          totalMarks: 1,
          stem: "The genetic code is 'universal' because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It's simple" },
              { id: "b", text: "It's complex" },
              {
                id: "c",
                text: "Same codons code for same amino acids in all organisms",
              },
              { id: "d", text: "It varies" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Universal code",
                statement: "Same everywhere.",
              },
            ],
            steps: [
              {
                reasoning: "Universal = same all organisms.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Same everywhere.",
          },
        },
        {
          id: "cipub-u3-gene-q19",
          difficulty: "core",
          totalMarks: 1,
          stem: "A mutation is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Gene expression" },
              { id: "b", text: "Change in DNA sequence" },
              { id: "c", text: "Normal variation" },
              { id: "d", text: "Protein synthesis" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Mutation",
                statement: "DNA sequence change.",
              },
            ],
            steps: [
              { reasoning: "Mutation = DNA change.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) DNA sequence change.",
          },
        },
        {
          id: "cipub-u3-gene-q20",
          difficulty: "core",
          totalMarks: 2,
          stem: "Distinguish between transcription and translation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Transcription vs translation",
                statement: "DNA→RNA vs RNA→protein.",
              },
            ],
            steps: [
              {
                reasoning: "Transcription: DNA → mRNA (nucleus).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Translation: mRNA → protein (ribosome).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Transcription = DNA→RNA; translation = RNA→protein.",
          },
        },
        {
          id: "cipub-u3-gene-q21",
          difficulty: "core",
          totalMarks: 2,
          stem: "State two functions of tRNA.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "tRNA function",
                statement: "Anticodon + amino acid carrier.",
              },
            ],
            steps: [
              {
                reasoning: "Has anticodon complementary to mRNA codon.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Carries specific amino acid to ribosome.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Anticodon + amino acid carrier.",
          },
        },
        {
          id: "cipub-u3-gene-q22",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how mRNA is processed before translation in eukaryotes.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "mRNA processing",
                statement: "Splicing + capping + poly-A.",
              },
            ],
            steps: [
              {
                reasoning: "Introns removed by splicing — exons joined.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "5' cap and poly-A tail added for stability.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Processed mRNA exported to cytoplasm for translation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Splicing + capping + export.",
          },
        },
        {
          id: "cipub-u3-gene-q23",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "mRNA sequence is AUGCCCGUU. How many amino acids in protein? Explain.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Codon counting",
                statement: "3 bases per amino acid.",
              },
            ],
            steps: [
              {
                reasoning: "mRNA has 9 bases — 9/3 = 3 codons.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Each codon = 1 amino acid → 3 amino acids.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "AUG = methionine (start); CCC = proline; GUU = valine.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Protein: Met-Pro-Val (3 amino acids).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "3 amino acids — Met-Pro-Val.",
          },
        },
        {
          id: "cipub-u3-gene-q24",
          difficulty: "core",
          totalMarks: 1,
          stem: "A silent mutation is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Mutation causing disease" },
              { id: "b", text: "No mutation" },
              { id: "c", text: "DNA change that doesn't alter amino acid" },
              { id: "d", text: "Lethal mutation" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Silent mutation",
                statement: "No amino acid change.",
              },
            ],
            steps: [
              { reasoning: "Silent = no change.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) No amino acid change.",
          },
        },
        {
          id: "cipub-u3-gene-q25",
          difficulty: "core",
          totalMarks: 1,
          stem: "A missense mutation is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "No change" },
              { id: "b", text: "Deletes gene" },
              { id: "c", text: "DNA change altering one amino acid" },
              { id: "d", text: "Stops protein" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Missense mutation",
                statement: "Changes one amino acid.",
              },
            ],
            steps: [
              {
                reasoning: "Missense = one amino acid change.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Changes one amino acid.",
          },
        },
        {
          id: "cipub-u3-gene-q26",
          difficulty: "core",
          totalMarks: 1,
          stem: "A nonsense mutation is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Silent" },
              { id: "b", text: "Changes amino acid" },
              { id: "c", text: "DNA change creating stop codon" },
              { id: "d", text: "No change" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Nonsense mutation",
                statement: "Creates stop codon.",
              },
            ],
            steps: [
              {
                reasoning: "Nonsense = premature stop.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Creates stop codon.",
          },
        },
        {
          id: "cipub-u3-gene-q27",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A frameshift mutation is caused by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Substitution" },
              { id: "b", text: "No change" },
              { id: "c", text: "Silent change" },
              { id: "d", text: "Insertion or deletion of bases" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Frameshift",
                statement: "Insertion/deletion.",
              },
            ],
            steps: [
              { reasoning: "Frameshift = indel.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Insertion/deletion.",
          },
        },
        {
          id: "cipub-u3-gene-q28",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why is the genetic code described as 'degenerate'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Degenerate code",
                statement: "Multiple codons per amino acid.",
              },
            ],
            steps: [
              {
                reasoning: "64 codons but only 20 amino acids.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Multiple codons can code for same amino acid.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Multiple codons per amino acid.",
          },
        },
        {
          id: "cipub-u3-gene-q29",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A gene mutation changes codon from GAA to GAG. Explain the likely effect.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Mutation analysis",
                statement: "Check codon effect.",
              },
            ],
            steps: [
              {
                reasoning: "GAA = glutamic acid; GAG = also glutamic acid.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Same amino acid — silent mutation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "No change in protein — no effect.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Degenerate code allows silent mutations.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Silent mutation — no protein change.",
          },
        },
        {
          id: "cipub-u3-gene-q30",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'gene regulation'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Gene regulation",
                statement: "Control of gene expression.",
              },
            ],
            steps: [
              {
                reasoning: "Control of when/where genes are expressed.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Not all genes expressed all the time.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Control of gene expression.",
          },
        },
      ],
    },
  ],
};
