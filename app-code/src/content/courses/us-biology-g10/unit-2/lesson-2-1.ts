import type { Lesson } from "../../../types.ts";

export const lesson121: Lesson = {
  id: "bio10-u2-lesson-2-1",
  code: "2-1",
  title: "DNA Structure and Replication",
  goal: "I CAN describe the structure of DNA, explain semiconservative replication, and predict the products of replication.",
  standards: ["HS-LS1-1", "HS-LS3-1"],
  vocabulary: [
    { term: "DNA", definition: "Deoxyribonucleic acid; the molecule storing genetic information as a double helix." },
    { term: "Nucleotide", definition: "The monomer of DNA: a sugar (deoxyribose), phosphate group, and nitrogenous base." },
    { term: "Base pairing", definition: "Adenine pairs with thymine; guanine pairs with cytosine via hydrogen bonds." },
    { term: "Semiconservative replication", definition: "Each new DNA molecule contains one original strand and one new strand." },
    { term: "Helicase", definition: "Enzyme that unwinds the DNA double helix." },
    { term: "DNA polymerase", definition: "Enzyme that synthesizes new DNA strands by adding nucleotides." },
    { term: "Gene", definition: "A segment of DNA that codes for a specific protein or RNA." },
  ],
  concepts: [
    {
      id: "bio10-u2-dna-structure",
      title: "DNA structure",
      skill: "Describe the molecular structure of DNA and explain base pairing rules.",
      lesson: {
        sections: [
          {
            heading: "The double helix",
            body: "DNA is a **double helix** — two strands wound around each other like a twisted ladder:\n\n- **Sugar-phosphate backbone**: alternating deoxyribose sugars and phosphate groups form the sides\n- **Base pairs**: nitrogenous bases form the rungs, held by hydrogen bonds\n- **Antiparallel**: strands run in opposite directions (5'→3' and 3'→5')",
          },
          {
            heading: "Base pairing rules",
            body: "Chargaff's rules: A=T and G≡C in any DNA sample.\n\n- **Adenine (A)** pairs with **Thymine (T)**: 2 hydrogen bonds\n- **Guanine (G)** pairs with **Cytosine (C)**: 3 hydrogen bonds\n\nThis complementary pairing allows DNA to replicate accurately.",
          },
          {
            heading: "DNA as information storage",
            body: "The sequence of bases along a strand encodes genetic information. A **gene** is a segment coding for a functional product (usually a protein). The human genome has ~3 billion base pairs; only ~1-2% codes for proteins, the rest is regulatory or noncoding.",
          },
        ],
        keyFormulas: [
          { name: "Base pairing", statement: "A=T (2 H-bonds); G≡C (3 H-bonds)" },
          { name: "Chargaff", statement: "A% = T%, G% = C%, A+G = T+C = 50%" },
        ],
        workedExample: {
          problem: "A DNA sample contains 22% adenine. What percentages of thymine, guanine and cytosine does it contain?",
          solution: "A = T = 22%. Remaining 56% split equally: G = C = 28%. Check: 22+22+28+28 = 100%.",
        },
      },
      questions: [
        {
          id: "bio10-u2-dna-structure-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which base pairs with adenine in DNA?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Guanine" },
              { id: "b", text: "Cytosine" },
              { id: "c", text: "Thymine" },
              { id: "d", text: "Uracil" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Base pairing", statement: "A pairs with T; G pairs with C." }],
            steps: [{ reasoning: "Adenine pairs with thymine via 2 hydrogen bonds.", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** Thymine",
            commonErrors: ["Confusing with RNA pairing (A-U)."],
            examinerNote: "B1 for (c).",
          },
        },
        {
          id: "bio10-u2-dna-structure-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A DNA molecule has 30% guanine. Calculate the percentages of adenine, thymine and cytosine.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Chargaff's rules", statement: "G=C and A=T." }],
            steps: [
              { reasoning: "G = C = 30%.", marks: 1, markCode: "M" },
              { reasoning: "A + T = 100% - 60% = 40%, so A = T = 20%.", working: "A=T=20", marks: 1, markCode: "M" },
              { reasoning: "A = 20%, T = 20%, C = 30%.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "A=20%, T=20%, C=30%",
            commonErrors: ["Forgetting G=C pairing."],
            examinerNote: "M2, A1.",
          },
        },
        {
          id: "bio10-u2-dna-structure-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why DNA's double helix structure is well-suited for storing genetic information.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Complementary strands", statement: "Each strand can serve as template for the other." },
              { kind: "principle", name: "Stability", statement: "Hydrogen bonds allow unwinding without breaking covalent backbone." },
            ],
            steps: [
              { reasoning: "The two strands are complementary — knowing one determines the other.", marks: 1, markCode: "R" },
              { reasoning: "This allows accurate replication: each strand serves as template.", marks: 1, markCode: "B" },
              { reasoning: "Hydrogen bonds between bases are weak enough to unzip but strong enough to maintain structure.", marks: 1, markCode: "B" },
              { reasoning: "The sugar-phosphate backbone provides stability while protecting the information in bases.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Complementary strands enable replication; structure balances stability and accessibility.",
            commonErrors: ["Thinking hydrogen bonds are covalent."],
            examinerNote: "R1, B2, A1.",
          },
        },
        {
          id: "bio10-u2-dna-structure-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A DNA strand has the sequence 5'-ATGCGTAC-3'.",
          parts: [
            { label: "a", prompt: "Write the complementary strand in the correct 5'→3' direction.", marks: 2 },
            { label: "b", prompt: "If this DNA replicates, what are the sequences of the two daughter DNA molecules?", marks: 3 },
            { label: "c", prompt: "What percentage of the original strand's bases remain in each daughter molecule? Explain.", marks: 2 },
            { label: "d", prompt: "Explain why replication is called 'semiconservative'.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Complementary base pairing", statement: "A-T, G-C; antiparallel strands." },
              { kind: "principle", name: "Semiconservative replication", statement: "Each daughter has one old + one new strand." },
            ],
            steps: [
              { reasoning: "Complementary strand: 3'-TACGCATG-5' (read 5'→3': 5'-GTACGCAT-3').", marks: 2, markCode: "B", part: "a" },
              { reasoning: "Daughter 1: original 5'-ATGCGTAC-3' + new complementary 3'-TACGCATG-5' (or 5'-GTACGCAT-3').", marks: 1, markCode: "B", part: "b" },
              { reasoning: "Daughter 2: new complementary 5'-GTACGCAT-3' + new complementary of original... each daughter has one parental and one new strand.", marks: 1, markCode: "R", part: "b" },
              { reasoning: "Both daughters have identical sequence 5'-ATGCGTAC-3' / 3'-TACGCATG-5'.", marks: 1, markCode: "A", part: "b" },
              { reasoning: "100% of original bases remain in each daughter (as one of the two strands).", marks: 1, markCode: "B", part: "c" },
              { reasoning: "Each daughter molecule contains one original (parental) strand and one newly synthesized strand.", marks: 1, markCode: "R", part: "c" },
              { reasoning: "'Semiconservative' means each daughter conserves half of the original molecule.", marks: 1, markCode: "R", part: "d" },
              { reasoning: "This was proven by Meselson-Stahl experiment using heavy nitrogen isotope.", marks: 1, markCode: "B", part: "d" },
              { reasoning: "Alternative models (conservative, dispersive) were ruled out by density gradient centrifugation.", marks: 1, markCode: "A", part: "d" },
            ],
            finalAnswer: "(a) 5'-GTACGCAT-3' (b) both daughters identical sequence (c) 100% original retained (d) one old + one new strand per daughter.",
            commonErrors: ["Forgetting antiparallel direction.", "Thinking both strands are new."],
            examinerNote: "2+3+2+3 = 10.",
          },
        },
      ],
    },
    {
      id: "bio10-u2-dna-replication",
      title: "DNA replication",
      skill: "Describe the steps and enzymes of DNA replication and explain its accuracy.",
      lesson: {
        sections: [
          {
            heading: "Replication steps",
            body: "1. **Initiation**: helicase unwinds DNA at origins of replication, creating replication forks\n2. **Elongation**: DNA polymerase adds nucleotides to the 3' end of new strands\n   - Leading strand: synthesized continuously toward the fork\n   - Lagging strand: synthesized discontinuously as Okazaki fragments, later joined by ligase\n3. **Termination**: replication complete when forks meet",
          },
          {
            heading: "Key enzymes",
            body: "- **Helicase**: unwinds double helix\n- **DNA polymerase**: adds nucleotides (5'→3' only)\n- **Primase**: makes RNA primer to start synthesis\n- **Ligase**: joins Okazaki fragments\n- **Single-strand binding proteins**: keep strands separated",
          },
          {
            heading: "Accuracy",
            body: "DNA polymerase has proofreading ability — it checks each nucleotide and removes mismatches (error rate ~1 in 10^9 bases). This accuracy is crucial: errors become mutations.",
          },
        ],
        keyFormulas: [
          { name: "Replication direction", statement: "DNA polymerase synthesizes 5'→3' only" },
          { name: "Lagging strand", statement: "Synthesized as Okazaki fragments, joined by ligase" },
        ],
        workedExample: {
          problem: "Why does the lagging strand require Okazaki fragments while the leading strand doesn't?",
          solution: "DNA polymerase can only add nucleotides to a 3' OH end and moves 5'→3'. At the replication fork, the leading strand template runs 3'→5', allowing continuous synthesis toward the fork. The lagging strand template runs 5'→3', so polymerase must synthesize away from the fork in short fragments that are later joined.",
        },
      },
      questions: [
        {
          id: "bio10-u2-dna-replication-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which enzyme unwinds the DNA double helix during replication?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "DNA polymerase" },
              { id: "b", text: "Helicase" },
              { id: "c", text: "Ligase" },
              { id: "d", text: "Primase" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Helicase", statement: "Unwinds DNA double helix." }],
            steps: [{ reasoning: "Helicase breaks hydrogen bonds to separate the two strands.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Helicase",
            commonErrors: ["Confusing helicase with polymerase."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "bio10-u2-dna-replication-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why is the lagging strand synthesized in fragments (Okazaki fragments)?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Lagging strand", statement: "Polymerase moves 5'→3' away from fork; fragments joined by ligase." }],
            steps: [
              { reasoning: "DNA polymerase can only synthesize in the 5'→3' direction.", marks: 1, markCode: "B" },
              { reasoning: "The lagging strand template is oriented 5'→3', so polymerase must move away from the fork.", marks: 1, markCode: "R" },
              { reasoning: "This produces short Okazaki fragments later joined by DNA ligase.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Polymerase directionality forces discontinuous synthesis on lagging strand.",
            commonErrors: ["Thinking fragments are due to damage."],
            examinerNote: "B1, R1, A1.",
          },
        },
        {
          id: "bio10-u2-dna-replication-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how DNA polymerase's proofreading improves replication accuracy.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Proofreading", statement: "Polymerase checks each nucleotide before proceeding." },
              { kind: "principle", name: "Error correction", statement: "Mismatched nucleotides are removed and replaced." },
            ],
            steps: [
              { reasoning: "DNA polymerase has 3'→5' exonuclease activity.", marks: 1, markCode: "B" },
              { reasoning: "It detects mismatched base pairs by shape/energy differences.", marks: 1, markCode: "R" },
              { reasoning: "It removes the incorrect nucleotide and replaces it with the correct one.", marks: 1, markCode: "B" },
              { reasoning: "This reduces error rate to ~1 per billion bases.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Proofreading removes mismatches, achieving ~1 error per 10⁹ bases.",
            commonErrors: ["Thinking errors are always corrected."],
            examinerNote: "B2, R1, A1.",
          },
        },
        {
          id: "bio10-u2-dna-replication-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A cell is replicating its DNA. The replication fork has opened and helicase is active.",
          parts: [
            { label: "a", prompt: "Draw/describe the structure at the replication fork (strands, direction of synthesis).", marks: 3 },
            { label: "b", prompt: "List the enzymes involved and their roles.", marks: 3 },
            { label: "c", prompt: "Explain why one strand is synthesized continuously and the other in fragments.", marks: 2 },
            { label: "d", prompt: "If the original DNA has 4×10⁶ base pairs, how many base pairs will each daughter DNA have?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Replication fork", statement: "Two strands separate; each serves as template." },
              { kind: "principle", name: "Enzyme roles", statement: "Helicase unwinds; polymerase synthesizes; primase primes; ligase joins." },
            ],
            steps: [
              { reasoning: "Two parental strands separate, each serving as template for new complementary strand.", marks: 1, markCode: "B", part: "a" },
              { reasoning: "Leading strand template runs 3'→5', allowing continuous 5'→3' synthesis.", marks: 1, markCode: "R", part: "a" },
              { reasoning: "Lagging strand template runs 5'→3', requiring discontinuous Okazaki fragments.", marks: 1, markCode: "R", part: "a" },
              { reasoning: "Helicase unwinds; primase makes RNA primer; DNA polymerase adds nucleotides; ligase joins fragments.", marks: 2, markCode: "B", part: "b" },
              { reasoning: "Single-strand binding proteins keep strands apart; proofreading exonuclease ensures accuracy.", marks: 1, markCode: "B", part: "b" },
              { reasoning: "Polymerase synthesizes only 5'→3'; directionality relative to fork determines continuous vs discontinuous.", marks: 2, markCode: "R", part: "c" },
              { reasoning: "Each daughter DNA has 4×10⁶ base pairs (same as parent).", marks: 1, markCode: "B", part: "d" },
              { reasoning: "Replication is semiconservative — each daughter has one old + one new strand.", marks: 1, markCode: "A", part: "d" },
            ],
            finalAnswer: "(a) fork described (b) enzymes listed (c) polymerase directionality (d) 4×10⁶ bp each.",
            commonErrors: ["Forgetting primase is needed.", "Thinking each daughter has half the bases."],
            examinerNote: "3+3+2+2 = 10.",
          },
        },
      ],
    },
  ],
};
