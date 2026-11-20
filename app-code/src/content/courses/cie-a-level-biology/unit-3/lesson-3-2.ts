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
              { id: "a", text: "In the nucleus" },
              { id: "b", text: "In the cytoplasm" },
              { id: "c", text: "At the ribosome" },
              { id: "d", text: "In the mitochondria" },
            ],
            correctChoiceId: "a",
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
              { id: "a", text: "At ribosomes in the cytoplasm" },
              { id: "b", text: "In the nucleus" },
              { id: "c", text: "In the mitochondria" },
              { id: "d", text: "In the Golgi apparatus" },
            ],
            correctChoiceId: "a",
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
