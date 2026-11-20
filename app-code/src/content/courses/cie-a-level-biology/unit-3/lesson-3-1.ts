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
              { id: "a", text: "A-T and G-C" },
              { id: "b", text: "A-G and T-C" },
              { id: "c", text: "A-C and G-T" },
              { id: "d", text: "A-A and T-T" },
            ],
            correctChoiceId: "a",
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
            finalAnswer: "**(a)** A-T and G-C",
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
              { id: "a", text: "Each new DNA has one old and one new strand" },
              { id: "b", text: "Only half the DNA replicates" },
              { id: "c", text: "Replication happens twice" },
              { id: "d", text: "DNA is destroyed after replication" },
            ],
            correctChoiceId: "a",
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
            finalAnswer: "**(a)** One old + one new strand",
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
