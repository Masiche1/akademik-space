import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "bio9-u3-lesson-3-1",
  code: "3-1",
  title: "DNA and Protein Synthesis",
  goal: "I CAN describe the structure of DNA, explain base pairing and replication, and use the genetic code to work out how DNA is transcribed and translated into a protein.",
  standards: ["HS-LS1-1", "SEP: Developing and Using Models", "SEP: Using Mathematics and Computational Thinking", "CCC: Structure and Function"],
  vocabulary: [
    { term: "Nucleotide", definition: "The building block of nucleic acids: a sugar, a phosphate group and a nitrogenous base." },
    { term: "Complementary base pairing", definition: "The rule that A pairs with T (or U in RNA) and G pairs with C, joined by hydrogen bonds." },
    { term: "Semiconservative replication", definition: "Copying of DNA in which each new molecule has one original strand and one new strand." },
    { term: "Transcription", definition: "Making an mRNA copy of a gene from a DNA template, in the nucleus." },
    { term: "Translation", definition: "Using the sequence of codons in mRNA to join amino acids into a polypeptide at a ribosome." },
    { term: "Codon", definition: "A group of three bases on mRNA that codes for one amino acid or a stop signal." },
    { term: "Anticodon", definition: "A group of three bases on a tRNA molecule that pairs with a codon on mRNA." },
  ],
  concepts: [
    {
      id: "bio9-u3-dna-structure-replication",
      title: "DNA structure, base pairing and replication",
      skill: "Describe the double helix, apply base-pairing rules and explain semiconservative replication.",
      lesson: {
        sections: [
          {
            heading: "The double helix",
            body: "DNA is a double helix made of two strands. Each strand is a chain of **nucleotides**. A nucleotide has a deoxyribose sugar, a phosphate group and one of four nitrogenous bases: adenine (A), thymine (T), guanine (G) or cytosine (C). Sugars and phosphates alternate to form the **sugar-phosphate backbone** of each strand.\n\nThe two strands are held together by **hydrogen bonds** between bases. The bases follow the **complementary base-pairing rule**: A pairs with T (2 hydrogen bonds) and G pairs with C (3 hydrogen bonds). Because of this rule, in any double-stranded DNA the amount of A equals T and the amount of G equals C, so $\\%A + \\%G = 50\\%$.",
          },
          {
            heading: "Semiconservative replication",
            body: "Before a cell divides, its DNA is copied. The enzyme **helicase** unwinds the helix and breaks the hydrogen bonds. Each original strand then acts as a **template**. **DNA polymerase** adds free nucleotides that pair with the template bases and joins them into a new strand.\n\nEach new DNA molecule contains one original strand and one new strand. This is **semiconservative replication**. It gives two identical copies, and the base-pairing rule is why the copies match the original. A mistake that is not repaired is a mutation. After $n$ rounds of replication one molecule becomes $2^n$ molecules, but only two of them still contain an original strand.",
          },
        ],
        keyFormulas: [
          { name: "Base pairing in DNA", statement: "A pairs with T; G pairs with C" },
          { name: "Chargaff's rule", statement: "$\\%A = \\%T$ and $\\%G = \\%C$, so $\\%A + \\%G = 50\\%$" },
          { name: "Molecules after n rounds", statement: "$2^n$ DNA molecules from one starting molecule" },
        ],
        workedExample: {
          problem: "One DNA strand reads 5'-ATGCCTA-3' (written here as ATGCCTA). Write the sequence of the complementary strand.",
          solution: "Pair each base: A with T, T with A, G with C, C with G, C with G, T with A, A with T. The complementary strand is TACGGAT.",
        },
      },
      questions: [
        {
          id: "bio9-u3-dna-structure-replication-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In a DNA molecule, which base pairs with guanine (G)?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Thymine" },
              { id: "b", text: "Adenine" },
              { id: "c", text: "Uracil" },
              { id: "d", text: "Cytosine" },
            ],
            dorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Complementary base pairing", statement: "In DNA, A pairs with T and G pairs with C." },
            ],
            steps: [
              { reasoning: "Guanine forms three hydrogen bonds with cytosine.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Cytosine",
            commonErrors: ["Choosing thymine, which pairs with adenine.", "Choosing uracil, which is found in RNA and pairs with adenine."],
            examinerNote: "B1 for cytosine.",
          },
        },
        {
          id: "bio9-u3-dna-structure-replication-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A sample of double-stranded DNA from a bacterium contains 30% adenine (A).\n\nCalculate the percentage of thymine and the percentage of guanine in the sample.",
          response: {
            type: "numeric",
            parts: [
              { label: "Thymine", answer: 30, unit: "%" },
              { label: "Guanine", answer: 20, unit: "%" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Chargaff's rule", statement: "In double-stranded DNA, %A = %T and %G = %C." },
            ],
            steps: [
              { reasoning: "A pairs with T, so the percentage of thymine equals the percentage of adenine.", working: "\\%T = \\%A = 30\\%", marks: 1, markCode: "B" },
              { reasoning: "A and T together make 60%, so G and C share the remaining 40%.", working: "\\%G + \\%C = 100 - (30 + 30) = 40\\%", marks: 1, markCode: "M" },
              { reasoning: "G pairs with C, so they are equal.", working: "\\%G = \\frac{40}{2} = 20\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Thymine $30\\%$; guanine $20\\%$",
            commonErrors: ["Giving guanine as 40% by forgetting that cytosine takes an equal share.", "Giving thymine as 70% (100 - 30)."],
            examinerNote: "B1 thymine 30. M1 for 100 - 60 or 40 shared. A1 guanine 20. Allow ecf for guanine from an incorrect thymine value.",
          },
        },
        {
          id: "bio9-u3-dna-structure-replication-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A single DNA molecule is allowed to replicate semiconservatively three times in a row in a test tube with a plentiful supply of new nucleotides.\n\nCalculate the total number of DNA molecules at the end, and the number of those molecules that contain one of the two original strands.",
          response: {
            type: "numeric",
            parts: [
              { label: "Total DNA molecules", answer: 8 },
              { label: "Molecules containing an original strand", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Semiconservative replication", statement: "Each new DNA molecule contains one original strand and one newly made strand." },
              { kind: "formula", name: "Doubling", statement: "Number of molecules after n rounds $= 2^n$." },
            ],
            steps: [
              { reasoning: "The number of molecules doubles in each round of replication.", working: "2^3", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "2^3 = 8", marks: 1, markCode: "A" },
              { reasoning: "Original strands are never broken up or copied again as whole molecules. Each of the two original strands stays in one molecule, paired with a new strand.", marks: 1, markCode: "M" },
              { reasoning: "Two original strands end up in two different molecules.", working: "2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "8 DNA molecules in total; 2 of them contain an original strand.",
            commonErrors: ["Answering 6 (2 x 3) for the total.", "Answering 8 for the second part by thinking all copies keep an original strand.", "Answering 1 for the second part."],
            examinerNote: "M1 for 2 cubed or doubling three times. A1 for 8. M1 for each original strand ending up in one molecule. A1 for 2. Allow ecf for the second part only if the explanation is semiconservative.",
          },
        },
        {
          id: "bio9-u3-dna-structure-replication-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A short section of the template strand of a DNA molecule has the base sequence TACCGATG.",
          parts: [
            { label: "a", prompt: "Name the two types of molecule that alternate to form the backbone of a DNA strand.", marks: 1 },
            { label: "b", prompt: "Write the sequence of the new strand that is built on this template during replication.", marks: 2 },
            { label: "c", prompt: "A different section of this DNA has 20 base pairs, of which 6 are G-C pairs. Calculate the total number of hydrogen bonds holding this section together. A-T pairs have 2 hydrogen bonds and G-C pairs have 3.", marks: 2 },
            { label: "d", prompt: "Explain the roles of helicase and DNA polymerase in DNA replication.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Complementary base pairing", statement: "A pairs with T; G pairs with C." },
              { kind: "definition", name: "Replication enzymes", statement: "Helicase unwinds and separates the strands; DNA polymerase joins nucleotides to form the new strand." },
            ],
            steps: [
              { part: "a", reasoning: "The backbone is a repeating chain of deoxyribose sugar and phosphate groups.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Pair each template base with its complement: T-A, A-T, C-G, C-G, G-C, A-T, T-A, G-C.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Write the new strand.", working: "\\text{ATGGCTAC}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "14 pairs are A-T (20 - 6). Add the bonds from each type of pair.", working: "14\\times2 + 6\\times3 = 28 + 18", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "46\\text{ hydrogen bonds}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Helicase unwinds the double helix and breaks the hydrogen bonds between the bases, separating the two strands.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Each separated strand acts as a template, and free nucleotides pair with the exposed bases by complementary base pairing.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "DNA polymerase joins the nucleotides together into a new strand, so each new molecule has one old and one new strand.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) Deoxyribose (sugar) and phosphate (b) ATGGCTAC (c) 46 hydrogen bonds (d) Helicase unwinds and separates the strands; the strands act as templates; DNA polymerase joins complementary nucleotides to make the new strands.",
            commonErrors: ["In (b) using U instead of T; uracil is only in RNA.", "In (b) writing the template sequence again or reversing the new strand.", "In (c) using 20 x 2 or counting only the G-C pairs.", "In (d) saying helicase breaks the covalent bonds in the backbone."],
            examinerNote: "(a) Both needed. Allow sugar and phosphate. (b) M1 for at least 6 bases correct, A1 for all 8. (c) Allow ecf for A1 if 14 and 6 are used correctly. (d) Reject 'DNA polymerase unzips the DNA'.",
          },
        },
      ],
    },
    {
      id: "bio9-u3-transcription-translation",
      title: "Transcription, translation and the genetic code",
      skill: "Convert a DNA template into mRNA, and use a codon table to determine the amino acid sequence.",
      lesson: {
        sections: [
          {
            heading: "From gene to mRNA: transcription",
            body: "A gene is a section of DNA that codes for a protein. **Transcription** happens in the nucleus. RNA polymerase unwinds the gene and builds a single strand of **messenger RNA (mRNA)** using one DNA strand as the **template**. The pairing rule is the same except that RNA contains **uracil (U)** instead of thymine: DNA A pairs with RNA U, T with A, G with C and C with G.\n\nFor example, the template TAC GGT is transcribed to the mRNA AUG CCA. The mRNA leaves the nucleus through a nuclear pore and travels to a ribosome in the cytoplasm.",
          },
          {
            heading: "From mRNA to protein: translation",
            body: "At a ribosome, the mRNA is read in groups of three bases called **codons**. Each codon codes for one amino acid, or for a stop signal. **Transfer RNA (tRNA)** molecules carry amino acids. The three-base **anticodon** on each tRNA pairs with a codon on the mRNA, so the amino acids are lined up in the order the mRNA specifies and joined into a polypeptide.\n\nThe **genetic code** is universal and redundant: nearly all organisms use the same code, and most amino acids have more than one codon. AUG codes for methionine and is the start codon; UAA, UAG and UGA are stop codons. A protein with $n$ amino acids needs a coding sequence of at least $3n$ bases, plus 3 more for the stop codon.\n\nA change in one base (a substitution) can change one amino acid, which can change the protein's shape and function. Because the code is redundant, some substitutions change nothing.",
          },
        ],
        keyFormulas: [
          { name: "DNA to mRNA", statement: "A to U, T to A, G to C, C to G (template strand to mRNA)" },
          { name: "Codon", statement: "3 mRNA bases = 1 amino acid (or stop)" },
          { name: "Gene length", statement: "bases in coding sequence $= 3 \\times (\\text{amino acids} + 1)$ including the stop codon" },
        ],
        workedExample: {
          problem: "The DNA template strand reads TAC TTT ATT. Find the mRNA and the amino acids. Use: AUG = Met, AAA = Lys, UAA = stop.",
          solution: "Transcribe: T to A, A to U, C to G gives AUG; T to A, T to A, T to A gives AAA; A to U, T to A, T to A gives UAA. The mRNA is AUG AAA UAA. Translate: Met, Lys, then stop. The polypeptide is Met-Lys.",
        },
      },
      questions: [
        {
          id: "bio9-u3-transcription-translation-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In which cell structure does translation take place?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Nucleolus" },
              { id: "b", text: "Ribosome" },
              { id: "c", text: "Cell membrane" },
              { id: "d", text: "Nucleus" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Translation", statement: "Translation is the synthesis of a polypeptide at a ribosome, using the order of codons on mRNA." },
            ],
            steps: [
              { reasoning: "Ribosomes read the mRNA and join amino acids together.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Ribosome",
            commonErrors: ["Choosing the nucleus, where transcription (not translation) takes place."],
            examinerNote: "B1 for ribosome.",
          },
        },
        {
          id: "bio9-u3-transcription-translation-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "The template strand of a gene has the base sequence TAC CGG TTT.\n\nUse the partial codon table below.\n\nAUG = Met (start); GCC = Ala; AAA = Lys.\n\nWrite the mRNA sequence produced by transcription and the sequence of amino acids it codes for.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Transcription pairing", statement: "DNA template A, T, G, C pairs with RNA U, A, C, G." },
              { kind: "definition", name: "Codon", statement: "Each codon of three mRNA bases codes for one amino acid." },
            ],
            steps: [
              { reasoning: "Transcribe each template base: T to A, A to U, C to G; C to G, G to C, G to C; T to A, T to A, T to A.", working: "\\text{AUG GCC AAA}", marks: 1, markCode: "M" },
              { reasoning: "Split into codons and read the table: AUG is Met, GCC is Ala, AAA is Lys.", marks: 1, markCode: "B" },
              { reasoning: "State the amino acid sequence in order.", working: "\\text{Met-Ala-Lys}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "mRNA: AUG GCC AAA; amino acids: Met-Ala-Lys",
            commonErrors: ["Writing T in the mRNA instead of U (mRNA contains uracil).", "Reading the DNA template directly as codons instead of transcribing first."],
            examinerNote: "M1 for correct mRNA. B1 for correct use of the table. A1 for Met-Ala-Lys. Allow ecf for amino acids from an incorrect mRNA if codons are in the table.",
          },
        },
        {
          id: "bio9-u3-transcription-translation-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A polypeptide is 150 amino acids long. Its mRNA coding sequence ends with one stop codon, which does not code for an amino acid.\n\nCalculate the number of codons and the number of bases in the mRNA coding sequence, including the stop codon.",
          response: {
            type: "numeric",
            parts: [
              { label: "Number of codons", answer: 151 },
              { label: "Number of bases", answer: 453 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Genetic code", statement: "Three bases make one codon; each codon codes for one amino acid or a stop signal." },
            ],
            steps: [
              { reasoning: "There is one codon for each amino acid plus one stop codon.", working: "150 + 1", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "151\\text{ codons}", marks: 1, markCode: "A" },
              { reasoning: "Each codon has three bases.", working: "151\\times3", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "453\\text{ bases}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "151 codons; 453 bases",
            commonErrors: ["Giving 450 bases by forgetting the stop codon.", "Dividing by 3 instead of multiplying."],
            examinerNote: "M1 for 150 + 1. A1 151. M1 for x 3. A1 453. Allow ecf from 150 codons (450 bases) for M1 on the second part only.",
          },
        },
        {
          id: "bio9-u3-transcription-translation-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Sickle cell disease is caused by a change in the gene for one chain of hemoglobin. In the normal gene, the template strand has the triplet CTC at one position. In the sickle cell gene, the triplet is CAC.\n\nUse this partial codon table: GAG = Glu (glutamic acid); GUG = Val (valine).",
          parts: [
            { label: "a", prompt: "Give the mRNA codon transcribed from the normal triplet CTC.", marks: 1 },
            { label: "b", prompt: "Give the mRNA codon transcribed from the sickle cell triplet CAC and the amino acid it codes for.", marks: 2 },
            { label: "c", prompt: "Name the type of mutation shown by the change from CTC to CAC.", marks: 1 },
            { label: "d", prompt: "Explain how this single change can alter the function of hemoglobin.", marks: 2 },
            { label: "e", prompt: "Compare where transcription and translation take place, and name the type of RNA that carries amino acids to the ribosome.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Transcription pairing", statement: "DNA template C pairs with RNA G; T with A; A with U; G with C." },
              { kind: "principle", name: "Gene to trait", statement: "DNA base sequence determines mRNA codons, amino acid order, protein shape and function." },
            ],
            steps: [
              { part: "a", reasoning: "Transcribe CTC: C to G, T to A, C to G.", working: "\\text{GAG}", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Transcribe CAC: C to G, A to U, C to G.", working: "\\text{GUG}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "GUG codes for valine, in place of glutamic acid.", working: "\\text{Val}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "One base is replaced by another: a substitution (point mutation).", marks: 1, markCode: "B" },
              { part: "d", reasoning: "A different amino acid is placed in the chain, which changes how the polypeptide folds and its shape.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "A protein with a different shape cannot function normally (the abnormal hemoglobin forms fibers and distorts red blood cells).", marks: 1, markCode: "R" },
              { part: "e", reasoning: "Transcription takes place in the nucleus, where the DNA is.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "Translation takes place at ribosomes in the cytoplasm.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "Transfer RNA (tRNA) carries amino acids to the ribosome.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) GAG (b) GUG; valine (c) Substitution (point) mutation (d) Different amino acid changes the folding and shape of the protein, so it cannot work normally (e) Transcription in the nucleus; translation at ribosomes in the cytoplasm; tRNA carries amino acids.",
            commonErrors: ["In (b) writing the DNA complement GTG instead of the mRNA codon GUG (mRNA has no thymine).", "In (c) calling it a deletion or insertion.", "In (e) saying translation happens in the nucleus."],
            examinerNote: "(a) Allow GAG only. (b) M1 GUG, A1 valine (ecf from their codon). (c) Allow point mutation or base substitution. (e) Allow ribosomes in the cytoplasm or on rough ER. Reject mRNA for the last mark.",
          },
        },
      ],
    },
  ],
};
