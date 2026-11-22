import type { Lesson } from "../../../types.ts";

export const lesson311: Lesson = {
  id: "cial-b-u3-lesson-3-1",
  code: "3-1",
  title: "DNA structure and replication",
  goal: "I CAN describe DNA structure, base pairing and semi-conservative replication.",
  standards: ["9700 Unit 6: nucleic acids and protein synthesis"],
  vocabulary: [
    {
      term: "Nucleotide",
      definition: "Monomer of DNA: phosphate + deoxyribose sugar + base.",
    },
    {
      term: "Base pairing",
      definition:
        "A-T (two H-bonds), G-C (three H-bonds) — complementary pairing.",
    },
    {
      term: "Semi-conservative replication",
      definition: "Each new DNA molecule has one old and one new strand.",
    },
    {
      term: "Double helix",
      definition: "Two antiparallel strands wound into a spiral.",
    },
    {
      term: "Helicase",
      definition: "Enzyme that unwinds the DNA double helix.",
    },
    {
      term: "DNA polymerase",
      definition: "Enzyme that synthesises new DNA strands.",
    },
  ],
  concepts: [
    {
      id: "cial-b-u3-dna-structure",
      title: "DNA structure",
      skill: "Describe the double helix and base pairing rules.",
      lesson: {
        sections: [
          {
            heading: "Nucleotides and the helix",
            body: "DNA is a polymer of nucleotides: phosphate, deoxyribose sugar, and one of four bases (A, T, G, C). Two strands wind into a double helix — antiparallel (run in opposite directions).",
          },
          {
            heading: "Base pairing",
            body: "Adenine pairs with thymine (2 H-bonds); guanine pairs with cytosine (3 H-bonds). This complementarity enables replication and information storage. The sequence of bases encodes genetic information.",
          },
          {
            heading: "Why DNA?",
            body: "DNA is stable (deoxyribose lacks reactive OH group), can store vast information (4^n sequences), and replicates accurately. RNA is used for protein synthesis because it's more versatile.",
          },
        ],
        keyFormulas: [
          {
            name: "DNA",
            statement: "Nucleotide=phosphate+sugar+base; A-T, G-C pairing.",
          },
        ],
        workedExample: {
          problem:
            "If one DNA strand is ATGCCG, what is the complementary strand?",
          solution: "TACGGC — A→T, T→A, G→C, C→G, C→G, G→C.",
        },
      },
      questions: [
        {
          id: "cial-b-u3-ds-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which bases pair together in DNA?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A-A and T-T" },
              { id: "b", text: "A-T and G-C" },
              { id: "c", text: "A-G and T-C" },
              { id: "d", text: "A-C and G-T" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Base pairing",
                statement: "A-T (2 H-bonds), G-C (3 H-bonds).",
              },
            ],
            steps: [
              { reasoning: "A-T and G-C pair.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** A-T and G-C",
            commonErrors: ["Confusing with RNA (A-U)."],
          },
        },
        {
          id: "cial-b-u3-ds-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name the three components of a DNA nucleotide.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Nucleotide",
                statement: "Phosphate + deoxyribose + base.",
              },
            ],
            steps: [
              {
                reasoning: "Any two of phosphate, deoxyribose, base.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "All three named.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Phosphate, deoxyribose sugar, nitrogenous base.",
            commonErrors: ["Saying ribose — that's RNA."],
          },
        },
        {
          id: "cial-b-u3-ds-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why DNA is described as a 'double helix'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Double helix",
                statement:
                  "Two antiparallel strands wound into spiral; bases paired inside.",
              },
            ],
            steps: [
              {
                reasoning: "Two strands run antiparallel.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Wound into spiral shape.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Bases paired inside via H-bonds.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Two antiparallel strands wound into spiral with paired bases inside.",
            commonErrors: ["Saying strands are parallel."],
          },
        },
        {
          id: "cial-b-u3-ds-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "DNA structure.",
          parts: [
            { label: "a", prompt: "Base pairing rules?", marks: 2 },
            { label: "b", prompt: "Nucleotide components?", marks: 1 },
            { label: "c", prompt: "Why 'double helix'?", marks: 3 },
            {
              label: "d",
              prompt: "Why is DNA more stable than RNA?",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "DNA",
                statement: "Pairing+nucleotide+structure+stability.",
              },
            ],
            steps: [
              { part: "a", reasoning: "A-T, G-C.", marks: 1, markCode: "M" },
              {
                part: "a",
                reasoning: "H-bond counts noted.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Phosphate+sugar+base.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Two antiparallel strands.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Wound spiral.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Bases paired inside.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Deoxyribose lacks OH group.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Less reactive/more stable.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Double strand protection.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) A-T/G-C (b) 3 components (c) antiparallel spiral (d) stable sugar+dsDNA",
          },
        },
        {
          id: "cial-b-u3-ds-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "If one DNA strand has sequence $5'-ATGCCG-3'$, what is the complementary base sequence?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$5'-ATGCCG-3'$" },
              { id: "b", text: "$5'-TACGGC-3'$" },
              { id: "c", text: "$5'-UACGGC-3'$" },
              { id: "d", text: "$5'-GCCGTA-3'$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Complementary strand",
                statement: "A pairs with T and G pairs with C.",
              },
            ],
            steps: [
              { reasoning: "The complement of ATGCCG is TACGGC.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $5'-TACGGC-3'$",
            commonErrors: ["Writing the complement in the opposite direction."],
          },
        },
        {
          id: "cial-b-u3-ds-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which sugar is present in a DNA nucleotide?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Fructose" },
              { id: "b", text: "Ribose" },
              { id: "c", text: "Deoxyribose" },
              { id: "d", text: "Glucose" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "DNA nucleotide",
                statement: "DNA nucleotides contain phosphate, deoxyribose and a base.",
              },
            ],
            steps: [
              { reasoning: "DNA uses deoxyribose, not ribose.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Deoxyribose",
            commonErrors: ["Confusing DNA with RNA."],
          },
        },
        {
          id: "cial-b-u3-ds-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which base pair is held by three hydrogen bonds?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A-T" },
              { id: "b", text: "T-C" },
              { id: "c", text: "G-C" },
              { id: "d", text: "A-G" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Base pairing",
                statement: "A-T forms two hydrogen bonds; G-C forms three.",
              },
            ],
            steps: [
              { reasoning: "G-C has three hydrogen bonds.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** G-C",
            commonErrors: ["Thinking A-T has three bonds."],
          },
        },
        {
          id: "cial-b-u3-ds-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does 'antiparallel' mean for the two DNA strands?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They are parallel polymers" },
              { id: "b", text: "They are not base paired" },
              { id: "c", text: "They run in opposite $5'\\rightarrow3'$ directions" },
              { id: "d", text: "They are identical sequences" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Antiparallel",
                statement: "The strands have opposite polarity and run in opposite directions.",
              },
            ],
            steps: [
              { reasoning: "One strand is $5'\\rightarrow3'$ while the other is $3'\\rightarrow5'$.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Opposite directions",
            commonErrors: ["Thinking antiparallel means unpaired."],
          },
        },
        {
          id: "cial-b-u3-ds-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Why is DNA chemically more stable than RNA?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "DNA has no bases" },
              { id: "b", text: "Deoxyribose lacks the reactive hydroxyl group found on ribose" },
              { id: "c", text: "DNA is always single-stranded" },
              { id: "d", text: "RNA contains phosphate" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "DNA stability",
                statement: "Deoxyribose lacks the 2' hydroxyl group present in ribose, making DNA less reactive.",
              },
            ],
            steps: [
              { reasoning: "The missing OH group reduces chemical reactivity.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Deoxyribose lacks reactive OH",
            commonErrors: ["Claiming DNA has no chemical bonds."],
          },
        },
        {
          id: "cial-b-u3-ds-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "What is the main reason DNA is suited to storing genetic information?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It cannot be copied accurately" },
              { id: "b", text: "It is always single-stranded" },
              { id: "c", text: "It contains only two bases" },
              { id: "d", text: "The order of bases can encode a vast number of sequences" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Information storage",
                statement: "Four bases allow many possible sequences that can encode information.",
              },
            ],
            steps: [
              { reasoning: "Base sequence variation stores information.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Base sequence encodes information",
            commonErrors: ["Thinking DNA stores information chemically rather than by sequence."],
          },
        },
        {
          id: "cial-b-u3-ds-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "A DNA template strand contains 8 nucleotide bases. How many bases are present in the complementary strand?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 8 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Complementary strand",
                statement: "Each template base has one complementary partner.",
              },
            ],
            steps: [
              { reasoning: "Complementary pairing is one-to-one.", marks: 1, markCode: "M" },
              { reasoning: "The complementary strand also has 8 bases.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "8 bases",
            commonErrors: ["Adding extra bases for pairing."],
          },
        },
        {
          id: "cial-b-u3-ds-q12",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "In a DNA molecule, adenine makes up $20\\%$ of all bases. Assuming normal base pairing, calculate the percentage of bases that are guanine.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 30 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Base composition",
                statement: "A $=$ T and G $=$ C; therefore G $= (100-2A)/2$.",
              },
            ],
            steps: [
              { reasoning: "A $=20\\%$, so T $=20\\%$; G+C $=60\\%$.", marks: 1, markCode: "M" },
              { reasoning: "G $=$ C $=30\\%$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "30%",
            commonErrors: ["Answering 20% by confusing guanine with thymine."],
          },
        },
        {
          id: "cial-b-u3-ds-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A short DNA sequence contains the triplet $ATG$. How many hydrogen bonds hold the three complementary base pairs together?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 7 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Hydrogen bonds",
                statement: "A-T has 2 hydrogen bonds and G-C has 3.",
              },
            ],
            steps: [
              { reasoning: "ATG pairs with TAC: A-T, T-A and G-C.", marks: 1, markCode: "M" },
              { reasoning: "$2+2+3=7$ hydrogen bonds.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "7 hydrogen bonds",
            commonErrors: ["Counting one bond per base pair."],
          },
        },
        {
          id: "cial-b-u3-ds-q14",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "State the number of components in one DNA nucleotide.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 3 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Nucleotide",
                statement: "A nucleotide contains phosphate, deoxyribose and a nitrogenous base.",
              },
            ],
            steps: [
              { reasoning: "List phosphate, sugar and base.", marks: 1, markCode: "M" },
              { reasoning: "There are three components.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "3 components",
            commonErrors: ["Counting hydrogen and oxygen atoms as components."],
          },
        },
        {
          id: "cial-b-u3-ds-q15",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "In a DNA sample, G and C together make up $58\\%$ of bases and A makes up $21\\%$. Assuming A $=$ T, calculate the percentage of cytosine.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 29 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Base composition",
                statement: "G $=$ C and A $=$ T, so C $=$ (G+C percentage) $\\div 2$.",
              },
            ],
            steps: [
              { reasoning: "G+C $=58\\%$, so each contributes half if G $=$ C.", marks: 1, markCode: "M" },
              { reasoning: "C $=58\\div2=29\\%$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "29%",
            commonErrors: ["Using the A percentage to calculate cytosine."],
          },
        },
        {
          id: "cial-b-u3-ds-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain how complementary base pairing allows DNA to act as a template for replication.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Template pairing",
                statement: "Each base has a specific partner, so the original strand determines the new sequence.",
              },
            ],
            steps: [
              { reasoning: "A pairs only with T and G pairs only with C.", marks: 1, markCode: "M" },
              { reasoning: "Each original strand therefore specifies the sequence of its complementary strand.", marks: 1, markCode: "M" },
              { reasoning: "This allows accurate copying of the genetic information.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Complementary pairing makes each strand a template for a matching new strand.",
            commonErrors: ["Saying bases pair randomly."],
          },
        },
      ],
    },
    {
      id: "cial-b-u3-dna-replication",
      title: "DNA replication",
      skill: "Describe semi-conservative replication and the enzymes involved.",
      lesson: {
        sections: [
          {
            heading: "Semi-conservative model",
            body: "Each daughter DNA molecule contains one original strand and one newly synthesised strand. This ensures accurate copying — the original serves as a template.",
          },
          {
            heading: "Replication enzymes",
            body: "Helicase unwinds the helix. DNA polymerase adds complementary nucleotides (A-T, G-C). Primase makes RNA primers. Ligase seals gaps. The process is called semi-conservative because half of each new molecule is old.",
          },
          {
            heading: "Directionality",
            body: "DNA polymerase only works in the 5'→3' direction. The leading strand is synthesised continuously; the lagging strand in fragments (Okazaki fragments) later joined by ligase.",
          },
        ],
        keyFormulas: [
          {
            name: "Replication",
            statement:
              "Helicase unwinds; polymerase builds; semi-conservative.",
          },
        ],
        workedExample: {
          problem: "What does 'semi-conservative' mean?",
          solution:
            "Each new DNA molecule has one old strand and one new strand — half conserved.",
        },
      },
      questions: [
        {
          id: "cial-b-u3-dr-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does 'semi-conservative' replication mean?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "DNA is destroyed after replication" },
              { id: "b", text: "Replication happens twice" },
              { id: "c", text: "Only half the DNA replicates" },
              { id: "d", text: "Each new DNA has one old and one new strand" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Semi-conservative",
                statement: "One old + one new strand per daughter.",
              },
            ],
            steps: [
              {
                reasoning: "Semi = half old, half new.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(d)** One old + one new strand",
            commonErrors: ["Thinking only half replicates."],
          },
        },
        {
          id: "cial-b-u3-dr-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the function of helicase?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Helicase",
                statement: "Unwinds the DNA double helix.",
              },
            ],
            steps: [
              {
                reasoning: "Unwinds/unzips the helix.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Allows strands to separate.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Unwinds the DNA double helix.",
            commonErrors: ["Confusing with polymerase (builds strand)."],
          },
        },
        {
          id: "cial-b-u3-dr-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why is the lagging strand synthesised in fragments?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Lagging strand",
                statement:
                  "DNA polymerase works 5'→3'; lagging strand runs opposite → fragments.",
              },
            ],
            steps: [
              {
                reasoning: "Polymerase only works 5'→3'.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Lagging strand runs 3'→5' relative to fork.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Must synthesise in fragments (Okazaki).",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Ligase joins fragments.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Polymerase direction forces fragment synthesis on lagging strand.",
            commonErrors: ["Thinking both strands are continuous."],
          },
        },
        {
          id: "cial-b-u3-dr-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "DNA replication.",
          parts: [
            { label: "a", prompt: "Semi-conservative meaning?", marks: 1 },
            { label: "b", prompt: "Helicase function?", marks: 1 },
            { label: "c", prompt: "Why lagging strand fragments?", marks: 3 },
            {
              label: "d",
              prompt: "Name two other replication enzymes and their roles.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Replication",
                statement: "Semi-conservative+enzymes+fragments.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "One old + one new strand.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Unwinds helix.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Polymerase 5'→3' only.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Lagging runs opposite.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Fragments + ligase.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "DNA polymerase named.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Builds new strand.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Primase or ligase named.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Role described.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) semi-conservative (b) helicase (c) 5'→3' direction (d) polymerase+primase/ligase",
          },
        },
        {
          id: "cial-b-u3-dr-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which statement best defines semi-conservative replication?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Each daughter molecule contains one old strand and one new strand" },
              { id: "b", text: "Both strands are completely new" },
              { id: "c", text: "DNA is copied twice before division" },
              { id: "d", text: "Only half of each chromosome replicates" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Semi-conservative replication",
                statement: "Each new double helix retains one parental strand.",
              },
            ],
            steps: [
              { reasoning: "One strand is conserved in each daughter molecule.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** One old and one new strand",
            commonErrors: ["Thinking only half the DNA replicates."],
          },
        },
        {
          id: "cial-b-u3-dr-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which enzyme unwinds the DNA double helix before replication?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Catalase" },
              { id: "b", text: "Lipase" },
              { id: "c", text: "Helicase" },
              { id: "d", text: "Amylase" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Helicase",
                statement: "Helicase breaks hydrogen bonds and unwinds the double helix.",
              },
            ],
            steps: [
              { reasoning: "Helicase separates the two strands.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Helicase",
            commonErrors: ["Confusing helicase with DNA polymerase."],
          },
        },
        {
          id: "cial-b-u3-dr-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "In which direction does DNA polymerase synthesise the new strand?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only in the nucleus" },
              { id: "b", text: "$3'\\rightarrow5'$" },
              { id: "c", text: "In both directions equally" },
              { id: "d", text: "$5'\\rightarrow3'$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "DNA polymerase direction",
                statement: "DNA polymerase adds nucleotides only in the $5'\\rightarrow3'$ direction.",
              },
            ],
            steps: [
              { reasoning: "Synthesis occurs $5'\\rightarrow3'$.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** $5'\\rightarrow3'$",
            commonErrors: ["Reversing the direction of synthesis."],
          },
        },
        {
          id: "cial-b-u3-dr-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is the function of primase during replication?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It proofreads DNA" },
              { id: "b", text: "It joins Okazaki fragments" },
              { id: "c", text: "It synthesises a short RNA primer" },
              { id: "d", text: "It unwinds the helix" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Primase",
                statement: "Primase synthesises RNA primers required for DNA polymerase to begin.",
              },
            ],
            steps: [
              { reasoning: "Primase provides the starting point for polymerase.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Synthesises RNA primer",
            commonErrors: ["Confusing primase with ligase."],
          },
        },
        {
          id: "cial-b-u3-dr-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which enzyme seals gaps between Okazaki fragments?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Lipase" },
              { id: "b", text: "Amylase" },
              { id: "c", text: "Helicase" },
              { id: "d", text: "Ligase" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Ligase",
                statement: "DNA ligase joins Okazaki fragments by forming phosphodiester bonds.",
              },
            ],
            steps: [
              { reasoning: "Ligase seals nicks between fragments.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Ligase",
            commonErrors: ["Confusing ligase with polymerase."],
          },
        },
        {
          id: "cial-b-u3-dr-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Why is the lagging strand synthesised as Okazaki fragments?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Helicase only unwinds one strand" },
              { id: "b", text: "Ligase cannot join continuous strands" },
              { id: "c", text: "The lagging strand contains no bases" },
              { id: "d", text: "DNA polymerase only works $5'\\rightarrow3'$ while the template runs opposite" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Lagging strand",
                statement: "Opposite template polarity forces discontinuous synthesis in fragments.",
              },
            ],
            steps: [
              { reasoning: "Polymerase directionality prevents continuous synthesis on the lagging strand.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Polymerase direction forces fragments",
            commonErrors: ["Thinking both strands are synthesised continuously."],
          },
        },
        {
          id: "cial-b-u3-dr-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "Starting with one DNA molecule, calculate the number of DNA molecules after two complete rounds of replication.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 4 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Replication doubling",
                statement: "Each round doubles the number of DNA molecules: $N=2^n$.",
              },
            ],
            steps: [
              { reasoning: "After one round there are 2 molecules; after two rounds there are 4.", marks: 1, markCode: "M" },
              { reasoning: "$2^2=4$ molecules.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "4 molecules",
            commonErrors: ["Adding two molecules each round instead of doubling."],
          },
        },
        {
          id: "cial-b-u3-dr-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "Starting with one DNA molecule, calculate the number of DNA molecules after three rounds of replication.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 8 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Replication doubling",
                statement: "Number of molecules $=2^n$ after $n$ rounds.",
              },
            ],
            steps: [
              { reasoning: "Three rounds double the number three times.", marks: 1, markCode: "M" },
              { reasoning: "$2^3=8$ molecules.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "8 molecules",
            commonErrors: ["Answering 6 by adding three rounds."],
          },
        },
        {
          id: "cial-b-u3-dr-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A DNA molecule contains 600 base pairs. After one semi-conservative replication, how many newly synthesised nucleotide bases are present across all daughter molecules?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 1200 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Semi-conservative replication",
                statement: "Two daughter molecules are produced, each with one new strand.",
              },
            ],
            steps: [
              { reasoning: "Two daughter molecules contain two new strands of 600 bases each.", marks: 1, markCode: "M" },
              { reasoning: "$600 \\times 2 = 1200$ new bases.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1200 newly synthesised bases",
            commonErrors: ["Counting both strands in both daughters as new."],
          },
        },
        {
          id: "cial-b-u3-dr-q14",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A lagging strand of 2000 nucleotides is synthesised as Okazaki fragments averaging 200 nucleotides each. How many fragments are produced?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 10 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Fragment number",
                statement: "Number of fragments $=$ total nucleotides $\\div$ average fragment length.",
              },
            ],
            steps: [
              { reasoning: "$2000 \\div 200 = 10$ fragments.", marks: 1, markCode: "M" },
              { reasoning: "The strand is made from 10 Okazaki fragments.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "10 fragments",
            commonErrors: ["Dividing by 2 because DNA is double-stranded."],
          },
        },
        {
          id: "cial-b-u3-dr-q15",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A DNA molecule has 4000 base pairs. After replication, how many DNA double helices are present if the original molecule was the only starting molecule?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 2 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Replication product",
                statement: "One replication event produces two daughter double helices.",
              },
            ],
            steps: [
              { reasoning: "Replication is semiconservative and produces two molecules.", marks: 1, markCode: "M" },
              { reasoning: "The answer is 2 double helices.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2 double helices",
            commonErrors: ["Thinking chromosome number changes during replication."],
          },
        },
        {
          id: "cial-b-u3-dr-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain why semi-conservative replication is described as accurate copying.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Semi-conservative accuracy",
                statement: "The parental strand remains intact as a template for complementary synthesis.",
              },
            ],
            steps: [
              { reasoning: "Each parental strand separates and remains unchanged.", marks: 1, markCode: "M" },
              { reasoning: "Complementary base pairing ensures the new strand matches the template.", marks: 1, markCode: "M" },
              { reasoning: "Each daughter molecule therefore contains an exact copy of the original sequence.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Parent strands template complementary strands, preserving sequence accurately.",
            commonErrors: ["Saying replication is random or error-free without template pairing."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cial-b-u3-dna-notes",
      title: "DNA structure and replication — revision notes",
      summary:
        "Double helix, base pairing, semi-conservative replication and enzymes.",
      sections: [
        {
          heading: "Structure",
          body: "Nucleotide = phosphate + deoxyribose + base. Double helix, antiparallel. A-T (2 H-bonds), G-C (3 H-bonds).",
        },
        {
          heading: "Replication",
          body: "Semi-conservative: one old + one new strand. Helicase unwinds; polymerase builds 5'→3'; lagging strand in Okazaki fragments; ligase seals.",
        },
        {
          heading: "Exam checklist",
          body: "Can you write complementary strand? Name replication enzymes? Explain semi-conservative? Explain lagging strand fragments?",
        },
      ],
    },
  ],
};
