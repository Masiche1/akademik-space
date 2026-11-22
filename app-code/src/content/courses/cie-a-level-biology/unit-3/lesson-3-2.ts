import type { Lesson } from "../../../types.ts";

export const lesson312: Lesson = {
  id: "cial-b-u3-lesson-3-2",
  code: "3-2",
  title: "Transcription and translation",
  goal: "I CAN describe how DNA codes for proteins via transcription and translation.",
  standards: ["9700 Unit 6: nucleic acids and protein synthesis"],
  vocabulary: [
    {
      term: "Transcription",
      definition: "Copying DNA sequence into mRNA in the nucleus.",
    },
    {
      term: "Translation",
      definition: "Decoding mRNA into a polypeptide chain at ribosomes.",
    },
    {
      term: "Codon",
      definition: "Three-base sequence on mRNA specifying one amino acid.",
    },
    {
      term: "tRNA",
      definition:
        "Transfer RNA carrying amino acids; has anticodon complementary to codon.",
    },
    { term: "Ribosome", definition: "Site of translation; has A, P, E sites." },
    {
      term: "Genetic code",
      definition: "The rule set mapping codons to amino acids.",
    },
  ],
  concepts: [
    {
      id: "cial-b-u3-transcription",
      title: "Transcription",
      skill: "Describe how DNA is transcribed into mRNA.",
      lesson: {
        sections: [
          {
            heading: "DNA to mRNA",
            body: "Transcription occurs in the nucleus. RNA polymerase binds to DNA and synthesises mRNA complementary to the template strand. mRNA carries the genetic code to ribosomes in the cytoplasm.",
          },
          {
            heading: "Codons and anticodons",
            body: "mRNA is read in triplets (codons). Each codon specifies an amino acid. tRNA has an anticodon complementary to the mRNA codon — e.g. mRNA AUG pairs with tRNA anticodon UAC carrying methionine.",
          },
          {
            heading: "Start and stop codons",
            body: "AUG is the start codon (methionine). UAA, UAG, UGA are stop codons — they terminate translation. The genetic code is degenerate: multiple codons can specify the same amino acid.",
          },
        ],
        keyFormulas: [
          {
            name: "Transcription",
            statement: "DNA→mRNA (nucleus); codons=triplets; AUG=start.",
          },
        ],
        workedExample: {
          problem: "DNA template: TAC GGC ATT. What mRNA is produced?",
          solution: "mRNA: AUG CCG UAA — complementary bases (A→U in RNA).",
        },
      },
      questions: [
        {
          id: "cial-b-u3-tr-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Where does transcription occur?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "At the ribosome" },
              { id: "b", text: "In the cytoplasm" },
              { id: "c", text: "In the mitochondria" },
              { id: "d", text: "In the nucleus" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Transcription",
                statement: "DNA→mRNA in nucleus.",
              },
            ],
            steps: [
              {
                reasoning: "Transcription in nucleus.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** Nucleus",
            commonErrors: ["Confusing with translation (cytoplasm)."],
          },
        },
        {
          id: "cial-b-u3-tr-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is a codon?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Codon",
                statement:
                  "Three-base mRNA sequence specifying one amino acid.",
              },
            ],
            steps: [
              {
                reasoning: "Three-base sequence on mRNA.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Codes for one amino acid.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Three-base mRNA sequence specifying an amino acid.",
            commonErrors: ["Confusing with anticodon (tRNA)."],
          },
        },
        {
          id: "cial-b-u3-tr-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why the genetic code is described as 'degenerate'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Degenerate code",
                statement: "Multiple codons specify the same amino acid.",
              },
            ],
            steps: [
              {
                reasoning: "64 codons but only 20 amino acids.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Some amino acids have multiple codons.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Reduces effect of mutations.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Multiple codons code for same amino acid — reduces mutation impact.",
            commonErrors: ["Saying it's random or inaccurate."],
          },
        },
        {
          id: "cial-b-u3-tr-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Transcription.",
          parts: [
            { label: "a", prompt: "Where does transcription occur?", marks: 1 },
            { label: "b", prompt: "What is a codon?", marks: 2 },
            { label: "c", prompt: "Why is the code degenerate?", marks: 3 },
            { label: "d", prompt: "DNA TAC GGC → mRNA?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Transcription",
                statement: "Location+codon+degenerate+conversion.",
              },
            ],
            steps: [
              { part: "a", reasoning: "Nucleus.", marks: 1, markCode: "M" },
              {
                part: "b",
                reasoning: "Three-base mRNA sequence.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Codes for amino acid.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Multiple codons per amino acid.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "64 codons vs 20 amino acids.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Reduces mutation impact.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "A→U, T→A, C→G, G→C.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "mRNA: AUG CCG.",
                marks: 1,
                markCode: "M",
              },
              { part: "d", reasoning: "Correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "(a) nucleus (b) codon=3-base (c) degenerate=multiple codons (d) AUG CCG",
          },
        },
        {
          id: "cial-b-u3-tr-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which enzyme synthesises mRNA during transcription?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Helicase" },
              { id: "b", text: "DNA polymerase" },
              { id: "c", text: "RNA polymerase" },
              { id: "d", text: "Ligase" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "RNA polymerase",
                statement: "RNA polymerase synthesises mRNA complementary to the DNA template.",
              },
            ],
            steps: [
              { reasoning: "RNA polymerase carries out transcription.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** RNA polymerase",
            commonErrors: ["Confusing RNA and DNA polymerase."],
          },
        },
        {
          id: "cial-b-u3-tr-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which base replaces thymine in mRNA?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Cytosine" },
              { id: "b", text: "Adenine" },
              { id: "c", text: "Uracil" },
              { id: "d", text: "Guanine" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "RNA bases",
                statement: "RNA contains uracil instead of thymine.",
              },
            ],
            steps: [
              { reasoning: "Uracil pairs with adenine in RNA.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Uracil",
            commonErrors: ["Using thymine in mRNA."],
          },
        },
        {
          id: "cial-b-u3-tr-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which codon is the usual start codon in translation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "CCC" },
              { id: "b", text: "UGA" },
              { id: "c", text: "AUG" },
              { id: "d", text: "UAA" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Start codon",
                statement: "AUG codes for methionine and initiates translation.",
              },
            ],
            steps: [
              { reasoning: "AUG is the start codon.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** AUG",
            commonErrors: ["Choosing a stop codon."],
          },
        },
        {
          id: "cial-b-u3-tr-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which set contains only stop codons?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "UUU, UUC, UUA" },
              { id: "b", text: "UAA, UAG, UGA" },
              { id: "c", text: "AUG, AAA, GGG" },
              { id: "d", text: "CCC, CCA, CCG" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Stop codons",
                statement: "UAA, UAG and UGA terminate translation.",
              },
            ],
            steps: [
              { reasoning: "The three stop codons are UAA, UAG and UGA.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** UAA, UAG, UGA",
            commonErrors: ["Confusing stop codons with sense codons."],
          },
        },
        {
          id: "cial-b-u3-tr-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Why is the genetic code described as degenerate?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Codons are random" },
              { id: "b", text: "DNA changes every codon" },
              { id: "c", text: "Every amino acid has exactly one codon" },
              { id: "d", text: "Several codons can specify the same amino acid" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Degenerate code",
                statement: "Multiple codons may encode the same amino acid.",
              },
            ],
            steps: [
              { reasoning: "Degeneracy means redundancy in codon assignment.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Multiple codons per amino acid",
            commonErrors: ["Thinking degeneracy means inaccurate coding."],
          },
        },
        {
          id: "cial-b-u3-tr-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "What is the main advantage of degeneracy in the genetic code?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It eliminates all mutations" },
              { id: "b", text: "It reduces the number of tRNAs to zero" },
              { id: "c", text: "It makes translation faster" },
              { id: "d", text: "Some point mutations may not change the amino acid produced" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Mutation buffering",
                statement: "Degeneracy can reduce the effect of some mutations.",
              },
            ],
            steps: [
              { reasoning: "A codon change may still code for the same amino acid.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Mutations may be silent",
            commonErrors: ["Claiming degeneracy prevents all mutation effects."],
          },
        },
        {
          id: "cial-b-u3-tr-q11",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "How many nucleotide bases are present in one mRNA codon?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 3 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Codon",
                statement: "A codon is a three-base sequence on mRNA.",
              },
            ],
            steps: [
              { reasoning: "The genetic code is read in triplets.", marks: 1, markCode: "M" },
              { reasoning: "Therefore a codon has 3 bases.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "3 bases",
            commonErrors: ["Counting two or four bases."],
          },
        },
        {
          id: "cial-b-u3-tr-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "An mRNA molecule contains 9 nucleotide bases. How many complete codons can be read from it?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 3 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Codon number",
                statement: "Number of codons $=$ number of mRNA bases $\\div 3$.",
              },
            ],
            steps: [
              { reasoning: "$9 \\div 3 = 3$ codons.", marks: 1, markCode: "M" },
              { reasoning: "Three complete codons are present.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "3 codons",
            commonErrors: ["Answering 9 by counting bases."],
          },
        },
        {
          id: "cial-b-u3-tr-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "A DNA template strand contains 12 bases. How many bases are present in the mRNA transcribed from it?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 12 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Transcription",
                statement: "mRNA is complementary to the DNA template and has the same number of bases in the transcribed region.",
              },
            ],
            steps: [
              { reasoning: "Each template base is copied once.", marks: 1, markCode: "M" },
              { reasoning: "The mRNA also has 12 bases.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "12 bases",
            commonErrors: ["Counting codons rather than bases."],
          },
        },
        {
          id: "cial-b-u3-tr-q14",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "An mRNA contains 5 codons including one start codon and one stop codon. How many amino acids are coded by the sense codons between them?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 3 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Coding sequence",
                statement: "The start codon codes for methionine, stop codons code for no amino acid, and remaining codons code for amino acids.",
              },
            ],
            steps: [
              { reasoning: "$5-2=3$ codons remain after removing start and stop.", marks: 1, markCode: "M" },
              { reasoning: "These three sense codons code for three amino acids, excluding the stop.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "3 amino acids",
            commonErrors: ["Counting the stop codon as an amino acid."],
          },
        },
        {
          id: "cial-b-u3-tr-q15",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A DNA template has sequence $TAC\\,GGC$. How many mRNA bases are transcribed from this template?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 6 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Transcription",
                statement: "Each DNA base in the template corresponds to one mRNA base.",
              },
            ],
            steps: [
              { reasoning: "The template has six bases: TACGGC.", marks: 1, markCode: "M" },
              { reasoning: "Six mRNA bases are produced.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "6 mRNA bases",
            commonErrors: ["Counting codons as two instead of bases."],
          },
        },
        {
          id: "cial-b-u3-tr-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain why transcription is necessary before translation in eukaryotic cells.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "DNA to protein",
                statement: "DNA remains in the nucleus while mRNA carries the code to ribosomes.",
              },
            ],
            steps: [
              { reasoning: "DNA is located in the nucleus and cannot leave easily.", marks: 1, markCode: "M" },
              { reasoning: "Transcription copies the needed sequence into mRNA.", marks: 1, markCode: "M" },
              { reasoning: "mRNA moves to ribosomes where translation produces protein.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "mRNA carries the genetic code from nucleus to ribosomes for translation.",
            commonErrors: ["Saying DNA directly leaves the nucleus."],
          },
        },
      ],
    },
    {
      id: "cial-b-u3-translation",
      title: "Translation",
      skill: "Describe how mRNA is translated into protein at ribosomes.",
      lesson: {
        sections: [
          {
            heading: "The ribosome and tRNA",
            body: "Translation occurs at ribosomes in cytoplasm. mRNA binds to ribosome; tRNA molecules carry amino acids with anticodons complementary to mRNA codons. The ribosome has A, P and E sites for incoming, peptide-bonding and exiting tRNAs.",
          },
          {
            heading: "Translation steps",
            body: "Initiation: ribosome binds mRNA at start codon (AUG). Elongation: tRNA delivers amino acids; peptide bonds form; ribosome moves along mRNA. Termination: stop codon reached; polypeptide released.",
          },
          {
            heading: "Protein folding",
            body: "The polypeptide chain folds into 3D shape — primary (sequence), secondary (α-helix/β-sheet), tertiary (3D), quaternary (multiple chains). Shape determines function.",
          },
        ],
        keyFormulas: [
          {
            name: "Translation",
            statement:
              "mRNA→ribosome→tRNA→polypeptide; AUG=start; stop codons end.",
          },
        ],
        workedExample: {
          problem: "What happens at a stop codon?",
          solution:
            "Release factors bind; polypeptide detaches; translation terminates.",
        },
      },
      questions: [
        {
          id: "cial-b-u3-tl-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Where does translation occur?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "In the Golgi apparatus" },
              { id: "b", text: "In the nucleus" },
              { id: "c", text: "At ribosomes in the cytoplasm" },
              { id: "d", text: "In the mitochondria" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Translation",
                statement: "mRNA→protein at ribosomes.",
              },
            ],
            steps: [
              {
                reasoning: "Translation at ribosomes.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** Ribosomes in cytoplasm",
            commonErrors: ["Confusing with transcription (nucleus)."],
          },
        },
        {
          id: "cial-b-u3-tl-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the role of tRNA in translation?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "tRNA",
                statement: "Carries amino acids; anticodon matches mRNA codon.",
              },
            ],
            steps: [
              { reasoning: "Carries amino acids.", marks: 1, markCode: "M" },
              {
                reasoning: "Anticodon complementary to codon.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Carries amino acids; anticodon matches codon.",
            commonErrors: ["Confusing with mRNA."],
          },
        },
        {
          id: "cial-b-u3-tl-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Describe the three stages of translation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Translation stages",
                statement: "Initiation, elongation, termination.",
              },
            ],
            steps: [
              {
                reasoning: "Initiation: ribosome binds at start codon.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Elongation: amino acids added, peptide bonds form.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Termination: stop codon, polypeptide released.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "All three named.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Initiation, elongation, termination.",
            commonErrors: ["Missing a stage."],
          },
        },
        {
          id: "cial-b-u3-tl-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Translation.",
          parts: [
            { label: "a", prompt: "Where does translation occur?", marks: 1 },
            { label: "b", prompt: "Role of tRNA?", marks: 2 },
            { label: "c", prompt: "Three stages of translation?", marks: 3 },
            { label: "d", prompt: "What happens at a stop codon?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Translation",
                statement: "Location+tRNA+stages+termination.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Ribosomes in cytoplasm.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Carries amino acids.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Anticodon matches codon.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Initiation named.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Elongation named.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Termination named.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Release factors bind.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Polypeptide released.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Translation ends.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) ribosomes (b) tRNA carries AA (c) initiation/elongation/termination (d) polypeptide released",
          },
        },
        {
          id: "cial-b-u3-tl-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which organelle is the main site of translation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Ribosome" },
              { id: "b", text: "Vacuole" },
              { id: "c", text: "Nucleus" },
              { id: "d", text: "Chloroplast only" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Ribosome",
                statement: "Ribosomes decode mRNA and assemble polypeptides.",
              },
            ],
            steps: [
              { reasoning: "Translation occurs at ribosomes.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Ribosome",
            commonErrors: ["Confusing ribosomes with the nucleus."],
          },
        },
        {
          id: "cial-b-u3-tl-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is carried by tRNA during translation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A phosphate group" },
              { id: "b", text: "A lipid" },
              { id: "c", text: "An amino acid" },
              { id: "d", text: "A DNA base" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "tRNA",
                statement: "tRNA carries amino acids and has an anticodon matching the mRNA codon.",
              },
            ],
            steps: [
              { reasoning: "tRNA delivers amino acids to the ribosome.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** An amino acid",
            commonErrors: ["Confusing tRNA with mRNA."],
          },
        },
        {
          id: "cial-b-u3-tl-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is an anticodon?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A ribosomal protein" },
              { id: "b", text: "The three-base sequence on tRNA complementary to an mRNA codon" },
              { id: "c", text: "The mRNA sequence itself" },
              { id: "d", text: "A DNA triplet" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Anticodon",
                statement: "The anticodon on tRNA is complementary to the mRNA codon.",
              },
            ],
            steps: [
              { reasoning: "Anticodon pairs with codon during translation.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** tRNA sequence complementary to codon",
            commonErrors: ["Confusing anticodon with codon."],
          },
        },
        {
          id: "cial-b-u3-tl-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "During elongation, what joins successive amino acids in the growing polypeptide?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Hydrogen bonds only" },
              { id: "b", text: "Peptide bonds" },
              { id: "c", text: "Glycosidic bonds" },
              { id: "d", text: "Ionic bonds only" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Polypeptide formation",
                statement: "Peptide bonds join amino acids during translation.",
              },
            ],
            steps: [
              { reasoning: "The ribosome catalyses peptide bond formation.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Peptide bonds",
            commonErrors: ["Saying glycosidic bonds join amino acids."],
          },
        },
        {
          id: "cial-b-u3-tl-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "What happens when the ribosome reaches a stop codon?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A new amino acid is added" },
              { id: "b", text: "Release factors bind and the polypeptide is released" },
              { id: "c", text: "Translation starts again" },
              { id: "d", text: "mRNA is destroyed immediately" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Termination",
                statement: "Stop codons recruit release factors; no tRNA carries an amino acid for them.",
              },
            ],
            steps: [
              { reasoning: "Stop codons terminate polypeptide synthesis.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Polypeptide released",
            commonErrors: ["Thinking stop codons code for an amino acid."],
          },
        },
        {
          id: "cial-b-u3-tl-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Why does the genetic code need both a start codon and stop codons?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They replace tRNA" },
              { id: "b", text: "They define where translation begins and ends" },
              { id: "c", text: "They code for all amino acids" },
              { id: "d", text: "They proofread DNA" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Translation boundaries",
                statement: "Start and stop codons delimit the coding region.",
              },
            ],
            steps: [
              { reasoning: "Start and stop codons mark translation boundaries.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Define translation boundaries",
            commonErrors: ["Thinking stop codons add amino acids."],
          },
        },
        {
          id: "cial-b-u3-tl-q11",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "How many binding sites for tRNA are present on a ribosome in the standard A, P and E model?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 3 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Ribosome sites",
                statement: "Ribosomes have A, P and E sites for tRNA.",
              },
            ],
            steps: [
              { reasoning: "List A, P and E sites.", marks: 1, markCode: "M" },
              { reasoning: "There are three tRNA binding sites.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "3 sites",
            commonErrors: ["Counting only the A and P sites."],
          },
        },
        {
          id: "cial-b-u3-tl-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "How many nucleotide bases are present in a tRNA anticodon?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 3 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Anticodon",
                statement: "An anticodon is complementary to a three-base mRNA codon.",
              },
            ],
            steps: [
              { reasoning: "Codons are triplets, so anticodons are also triplets.", marks: 1, markCode: "M" },
              { reasoning: "The anticodon has 3 bases.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "3 bases",
            commonErrors: ["Thinking anticodons have one or two bases."],
          },
        },
        {
          id: "cial-b-u3-tl-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "An mRNA contains 6 codons: one start codon, four sense codons and one stop codon. How many amino acids are incorporated into the polypeptide, including methionine from the start codon?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 5 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Translation product",
                statement: "Start codon contributes methionine; sense codons contribute amino acids; stop codon contributes none.",
              },
            ],
            steps: [
              { reasoning: "$6-1=5$ codons can code for amino acids after removing stop.", marks: 1, markCode: "M" },
              { reasoning: "Five amino acids are incorporated, including methionine.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "5 amino acids",
            commonErrors: ["Excluding methionine from the count."],
          },
        },
        {
          id: "cial-b-u3-tl-q14",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "An mRNA has 9 codons including one start codon and one stop codon. How many amino acids are coded by the seven non-start, non-stop codons?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 7 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Sense codons",
                statement: "Stop codons code for no amino acid and each remaining codon specifies one amino acid.",
              },
            ],
            steps: [
              { reasoning: "$9-2=7$ codons remain after removing start and stop codons.", marks: 1, markCode: "M" },
              { reasoning: "Each of the seven codons specifies one amino acid.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "7 amino acids",
            commonErrors: ["Counting the stop codon as coding for an amino acid."],
          },
        },
        {
          id: "cial-b-u3-tl-q15",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Four amino acids are to be added to a growing polypeptide. How many tRNA molecules are minimally required to deliver those four amino acids, assuming one tRNA per amino acid addition?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 4 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "tRNA delivery",
                statement: "Each amino acid is delivered by a tRNA molecule with a matching anticodon.",
              },
            ],
            steps: [
              { reasoning: "Four amino acids require four delivery events.", marks: 1, markCode: "M" },
              { reasoning: "At least 4 tRNA molecules are needed.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "4 tRNA molecules",
            commonErrors: ["Counting codons instead of tRNA molecules."],
          },
        },
        {
          id: "cial-b-u3-tl-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain how the sequence of codons on mRNA determines the sequence of amino acids in a protein.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Genetic code",
                statement: "Each codon specifies a particular amino acid, so mRNA sequence determines protein sequence.",
              },
            ],
            steps: [
              { reasoning: "mRNA is read in three-base codons.", marks: 1, markCode: "M" },
              { reasoning: "Each codon is matched by a tRNA anticodon carrying a specific amino acid.", marks: 1, markCode: "M" },
              { reasoning: "The order of amino acids added therefore follows the mRNA codon order.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Codon order determines amino acid order through complementary tRNA anticodons.",
            commonErrors: ["Saying amino acids pair directly with DNA."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cial-b-u3-translation-notes",
      title: "Transcription and translation — revision notes",
      summary: "DNA→mRNA→protein: codons, tRNA, ribosomes and protein folding.",
      sections: [
        {
          heading: "Transcription",
          body: "DNA→mRNA in nucleus. RNA polymerase synthesises complementary mRNA. Codons = 3-base sequences. AUG=start; UAA/UAG/UGA=stop.",
        },
        {
          heading: "Translation",
          body: "mRNA→protein at ribosomes. tRNA carries amino acids; anticodon matches codon. Initiation→elongation→termination.",
        },
        {
          heading: "Exam checklist",
          body: "Can you convert DNA to mRNA? Know codon/anticodon? Describe ribosome sites? Explain stop codons?",
        },
      ],
    },
  ],
};
