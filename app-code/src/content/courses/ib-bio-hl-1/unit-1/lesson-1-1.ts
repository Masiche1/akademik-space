import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "biohl-u1-lesson-1-1",
  code: "1-1",
  title: "DNA Replication in Detail",
  goal: "I CAN describe the enzymes and events of semiconservative replication, including RNA priming, leading and lagging strand synthesis, Okazaki fragments, proofreading and the end-replication problem.",
  standards: ["Paper 1", "Paper 2", "AHL A.1"],
  vocabulary: [
    { term: "Origin of replication", definition: "A specific DNA sequence where the replication machinery assembles; eukaryotic chromosomes contain many origins so that replication finishes quickly." },
    { term: "RNA primer", definition: "A short RNA strand synthesised by primase that provides a free $3'$ hydroxyl group to which DNA polymerase can add nucleotides." },
    { term: "Okazaki fragment", definition: "A short, discontinuously synthesised DNA segment on the lagging strand, typically 100-200 nucleotides long in eukaryotes." },
    { term: "DNA polymerase I", definition: "An enzyme that removes RNA primers and replaces them with DNA nucleotides, working in the $5' \\to 3'$ direction." },
    { term: "Proofreading exonuclease", definition: "The $3' \\to 5'$ exonuclease activity of DNA polymerase that removes a mismatched nucleotide immediately after it has been inserted." },
    { term: "Telomerase", definition: "A ribonucleoprotein enzyme that adds telomeric DNA repeats to chromosome ends, compensating for the end-replication problem." },
  ],
  concepts: [
    {
      id: "biohl-u1-replication-fork",
      title: "The replication fork and its enzymes",
      skill: "Identify the roles of helicase, single-stranded binding proteins, primase, DNA polymerases and ligase in bidirectional semiconservative replication.",
      lesson: {
        sections: [
          {
            heading: "Unwinding the helix",
            body: "Replication begins at origins of replication. Helicase breaks the hydrogen bonds between base pairs and separates the two strands, creating a Y-shaped replication fork. Single-stranded binding proteins coat the exposed strands to prevent them re-annealing or forming secondary structure, while topoisomerase relieves the torsional stress ahead of the fork. Replication is bidirectional: two forks move away from each origin in opposite directions.",
          },
          {
            heading: "Primers, polymerases and Okazaki fragments",
            body: "DNA polymerase cannot start a strand de novo; it needs a free $3'$ hydroxyl group. Primase synthesises a short RNA primer, and DNA polymerase III then extends it in the $5' \\to 3'$ direction. On the leading strand synthesis is continuous towards the fork; on the lagging strand it is discontinuous, producing Okazaki fragments that are later joined by DNA polymerase I (which also replaces the RNA primers with DNA) and DNA ligase, which seals the remaining nicks.",
          },
          {
            heading: "Semiconservative and bidirectional",
            body: "Replication is semiconservative: each daughter duplex contains one original parental strand and one newly synthesised strand. At each origin two replication forks move away from each other, so a single origin produces two replication bubbles that eventually merge. The Meselson-Stahl experiment confirmed semiconservative replication by showing that after one generation all DNA had intermediate density and after two generations equal amounts of hybrid and light DNA.",
          },
        ],
        keyFormulas: [
          { name: "Complementary pairing", statement: "Each $A$ pairs with $T$ and each $G$ pairs with $C$; the two new strands are complementary to their templates." },
          { name: "Okazaki fragment number", statement: "$n = \\frac{L}{\\ell}$, where $L$ is the length of the lagging strand copied and $\\ell$ the mean fragment length." },
          { name: "Synthesis direction", statement: "DNA polymerases add nucleotides only to a free $3'$ end, so all synthesis proceeds $5' \\to 3'$." },
        ],
        workedExample: {
          problem: "A replication fork copies a stretch of DNA 90 000 base pairs long. The mean length of each Okazaki fragment on the lagging strand is 150 nucleotides. How many Okazaki fragments are required?",
          solution: "The lagging strand spans the whole 90 000 bp stretch, so $n = \\frac{90\\,000}{150} = 600$ Okazaki fragments.",
        },
      },
      questions: [
        {
          id: "biohl-u1-replication-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Which enzyme is responsible for synthesising the short RNA primers that DNA polymerase requires before it can begin replication?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "DNA polymerase III" },
              { id: "b", text: "Primase" },
              { id: "c", text: "DNA ligase" },
              { id: "d", text: "Helicase" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "RNA primer", statement: "A short RNA strand made by primase that provides a free $3'$ hydroxyl group for DNA polymerase." },
            ],
            steps: [
              { reasoning: "Primase is the only enzyme in the list that synthesises RNA primers.", working: "primase", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Primase",
            commonErrors: ["Confusing primase with DNA polymerase III, which extends the primer with DNA."],
          },
        },
        {
          id: "biohl-u1-replication-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A single replication fork copies a stretch of DNA 48 000 base pairs long. Okazaki fragments on the lagging strand average 160 nucleotides, and each fragment is initiated by one RNA primer 10 nucleotides long. Calculate the number of Okazaki fragments required, and the total number of nucleotides contributed by all the RNA primers.",
          response: { type: "numeric", parts: [{ label: "Number of Okazaki fragments", answer: 300 }, { label: "Total primer nucleotides", answer: 3000 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Fragment number", statement: "$n = L / \\ell$ where $L$ is the lagging-strand length and $\\ell$ the mean fragment length." },
            ],
            steps: [
              { reasoning: "The lagging strand spans the full 48 000 bp stretch; divide by the mean fragment length.", working: "48000 \\div 160", marks: 1, markCode: "M" },
              { reasoning: "Evaluate the number of fragments.", working: "300", marks: 1, markCode: "A" },
              { reasoning: "Each fragment needs one 10-nt primer, so multiply the fragment count by 10.", working: "300 \\times 10 = 3000", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$300$ fragments; $3000$ primer nucleotides",
            commonErrors: ["Dividing the whole duplex length by two before dividing (the lagging strand is one full-length template).", "Forgetting to multiply by the primer length for the second answer."],
          },
        },
        {
          id: "biohl-u1-replication-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Explain why DNA polymerase cannot begin synthesis of a new DNA strand without a primer, and describe how the cell deals with the discontinuity this creates on the lagging strand.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Primer requirement", statement: "DNA polymerase can only add nucleotides to an existing free $3'$ hydroxyl end; it cannot initiate a strand de novo." },
              { kind: "principle", name: "Discontinuous synthesis", statement: "Because the lagging strand template runs $3' \\to 5'$ relative to fork movement, synthesis occurs away from the fork in short Okazaki fragments." },
            ],
            steps: [
              { reasoning: "DNA polymerase requires a free $3'$ OH group to which the incoming nucleotide's phosphate can be joined.", marks: 1, markCode: "R" },
              { reasoning: "Primase synthesises short RNA primers that supply this $3'$ end at each start point.", marks: 1, markCode: "M" },
              { reasoning: "On the lagging strand each primer initiates an Okazaki fragment, so synthesis is discontinuous.", marks: 1, markCode: "M" },
              { reasoning: "DNA polymerase I removes the RNA and fills the gaps with DNA; DNA ligase then seals the nicks between fragments.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Primers provide the required $3'$ OH; lagging-strand synthesis is discontinuous (Okazaki fragments) and is later joined after primer removal.",
            commonErrors: ["Saying DNA polymerase 'cannot read' the template — the real limitation is the need for a $3'$ OH.", "Omitting DNA ligase as the enzyme that seals nicks."],
          },
        },
        {
          id: "biohl-u1-replication-q4",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 8,
          stem: "A linear DNA molecule is replicated. On the lagging strand, Okazaki fragments have a mean length of 250 nucleotides, and each RNA primer is 12 nucleotides long.",
          parts: [
            { label: "a", prompt: "State the two main functions of DNA helicase during replication.", marks: 2 },
            { label: "b", prompt: "Explain why Okazaki fragments are necessary on the lagging strand but not on the leading strand.", marks: 2 },
            { label: "c", prompt: "A single replication fork copies a 50 000 bp stretch of DNA. Calculate the number of Okazaki fragments produced on the lagging strand.", marks: 2 },
            { label: "d", prompt: "After replication, DNA polymerase I and DNA ligase process the fragments. Explain the role of each enzyme.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Helicase", statement: "An enzyme that unwinds the double helix by breaking hydrogen bonds between base pairs." },
              { kind: "formula", name: "Fragment number", statement: "$n = L / \\ell$ for the lagging strand of length $L$ and mean fragment length $\\ell$." },
            ],
            steps: [
              { part: "a", reasoning: "Helicase unwinds/unzips the double helix at the origin of replication.", marks: 1, markCode: "A" },
              { part: "a", reasoning: "It moves the replication fork bidirectionally so both template strands are exposed for copying.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Synthesis is always $5' \\to 3'$, so on the lagging strand the template runs in the opposite direction to fork movement.", marks: 1, markCode: "R" },
              { part: "b", reasoning: "Each time the fork opens enough template, a new primer is needed, producing discontinuous Okazaki fragments; the leading strand is synthesised continuously towards the fork.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Divide the lagging-strand length by the mean fragment length.", working: "50000 \\div 250", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "200", marks: 1, markCode: "A" },
              { part: "d", reasoning: "DNA polymerase I removes the RNA primers and replaces them with DNA nucleotides.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "DNA ligase forms phosphodiester bonds to seal the nicks between adjacent DNA fragments.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Unwinds the helix and opens bidirectional forks. (b) Lagging template runs antiparallel to fork movement, so synthesis restarts at each primer. (c) $200$ fragments. (d) Pol I replaces primers; ligase seals nicks.",
            commonErrors: ["Saying helicase 'copies' DNA — its role is unwinding only.", "Using 100 000 or 25 000 bp in part (c) instead of the single-fork lagging-strand length 50 000."],
            examinerNote: "Part (c) requires recognising that one fork's lagging strand is the full 50 000 bp stretch given.",
          },
        },
        {
          id: "biohl-u1-replication-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Which enzyme relieves the torsional stress (supercoiling) that builds up in the DNA ahead of the replication fork?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Topoisomerase" },
              { id: "b", text: "Primase" },
              { id: "c", text: "Helicase" },
              { id: "d", text: "DNA ligase" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Topoisomerase", statement: "An enzyme that cuts and rejoins DNA strands to relieve supercoiling ahead of the replication fork." },
            ],
            steps: [
              { reasoning: "Supercoiling generated ahead of the fork is relieved by topoisomerase.", marks: 1, markCode: "M" },
              { reasoning: "Helicase unwinds, primase makes primers and ligase seals nicks, so (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Topoisomerase",
            commonErrors: ["Confusing topoisomerase with helicase — helicase unwinds the helix but does not relieve supercoiling."],
          },
        },
        {
          id: "biohl-u1-replication-q6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "DNA polymerase can add nucleotides to a growing strand only when that strand has:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A fully double-stranded template" },
              { id: "b", text: "A $5'$ cap structure" },
              { id: "c", text: "A free $5'$ phosphate group" },
              { id: "d", text: "A free $3'$ hydroxyl group" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Primer requirement", statement: "DNA polymerase can only extend a strand from a free $3'$ hydroxyl end; it cannot initiate de novo." },
            ],
            steps: [
              { reasoning: "The incoming nucleotide is joined to the free $3'$ OH of the growing strand.", marks: 1, markCode: "M" },
              { reasoning: "A $5'$ phosphate, double-stranded template or cap do not provide the required $3'$ end, so (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** A free $3'$ hydroxyl group",
            commonErrors: ["Thinking DNA polymerase can start a strand without a primer."],
          },
        },
        {
          id: "biohl-u1-replication-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Okazaki fragments are synthesised on which template strand at the replication fork?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Both strands equally" },
              { id: "b", text: "Neither — they form on the RNA primer" },
              { id: "c", text: "The lagging strand" },
              { id: "d", text: "The leading strand" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Discontinuous synthesis", statement: "The lagging template runs antiparallel to fork movement, so DNA is synthesised in short Okazaki fragments." },
            ],
            steps: [
              { reasoning: "Because synthesis is always $5' \\to 3'$, the lagging strand must be made in pieces.", marks: 1, markCode: "M" },
              { reasoning: "The leading strand is synthesised continuously, so (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** The lagging strand",
            commonErrors: ["Reversing leading and lagging — Okazaki fragments belong to the lagging strand."],
          },
        },
        {
          id: "biohl-u1-replication-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Single-stranded binding proteins coat the separated template strands primarily to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Prevent the strands re-annealing or forming secondary structures" },
              { id: "b", text: "Proofread mismatched bases" },
              { id: "c", text: "Add nucleotides to the new strand" },
              { id: "d", text: "Remove RNA primers" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Single-stranded binding proteins", statement: "Proteins that stabilise exposed single-stranded DNA so it cannot re-anneal or fold into secondary structure." },
            ],
            steps: [
              { reasoning: "SSBs keep template strands extended and available for polymerase.", marks: 1, markCode: "M" },
              { reasoning: "They do not synthesise, remove primers or proofread, so (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Prevent re-annealing and secondary structure",
            commonErrors: ["Attributing polymerase or proofreading functions to SSBs."],
          },
        },
        {
          id: "biohl-u1-replication-q9",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Which enzyme seals the nicks between adjacent Okazaki fragments after the RNA primers have been replaced by DNA?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "DNA ligase" },
              { id: "b", text: "Helicase" },
              { id: "c", text: "DNA polymerase III" },
              { id: "d", text: "Primase" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "DNA ligase", statement: "An enzyme that forms phosphodiester bonds to join the sugar-phosphate backbones of adjacent DNA fragments." },
            ],
            steps: [
              { reasoning: "Ligase joins the nicks between Okazaki fragments.", marks: 1, markCode: "M" },
              { reasoning: "Polymerase III extends strands, helicase unwinds and primase makes primers, so (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** DNA ligase",
            commonErrors: ["Confusing ligase with DNA polymerase I, which replaces primers but does not seal the final nick."],
          },
        },
        {
          id: "biohl-u1-replication-q10",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "A single replication fork copies a stretch of DNA 96 000 base pairs long. The mean length of each Okazaki fragment on the lagging strand is 160 nucleotides, and each fragment begins with one RNA primer 10 nucleotides long.",
          response: { type: "numeric", parts: [{ label: "Number of Okazaki fragments", answer: 600 }, { label: "Total primer nucleotides", answer: 6000 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Fragment number", statement: "$n = L / \\ell$ for lagging-strand length $L$ and mean fragment length $\\ell$." },
            ],
            steps: [
              { reasoning: "Divide the lagging-strand length by the mean fragment length.", working: "96000 \\div 160", marks: 1, markCode: "M" },
              { reasoning: "Evaluate the fragment count.", working: "600", marks: 1, markCode: "A" },
              { reasoning: "Each fragment needs one 10-nt primer, so multiply the fragment count by 10.", working: "600 \\times 10 = 6000", marks: 1, markCode: "M" },
              { reasoning: "Evaluate the total primer nucleotides.", working: "6000", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$600$ fragments; $6000$ primer nucleotides",
            commonErrors: ["Halving the 96 000 bp before dividing — one fork's lagging strand is the full stretch."],
          },
        },
        {
          id: "biohl-u1-replication-q11",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "A lagging strand 75 000 nucleotides long is copied using Okazaki fragments of mean length 250 nucleotides. Each fragment requires one RNA primer 12 nucleotides long. Calculate the number of Okazaki fragments produced and the total number of nucleotides contributed by all the RNA primers.",
          response: { type: "numeric", parts: [{ label: "Number of Okazaki fragments", answer: 300 }, { label: "Total primer nucleotides", answer: 3600 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Fragment number", statement: "$n = L / \\ell$; total primer nucleotides $= n \\times p$ where $p$ is primer length." },
            ],
            steps: [
              { reasoning: "Divide the lagging-strand length by the mean fragment length.", working: "75000 \\div 250", marks: 1, markCode: "M" },
              { reasoning: "Evaluate the fragment count.", working: "300", marks: 1, markCode: "A" },
              { reasoning: "Multiply the fragment count by the primer length.", working: "300 \\times 12 = 3600", marks: 1, markCode: "M" },
              { reasoning: "Evaluate the total primer nucleotides.", working: "3600", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$300$ fragments; $3600$ primer nucleotides",
            commonErrors: ["Using the primer length as the fragment length in the first division."],
          },
        },
        {
          id: "biohl-u1-replication-q12",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "A circular bacterial chromosome of 4 800 000 base pairs is replicated bidirectionally from a single origin of replication. The two replication forks move in opposite directions at equal rates. Calculate the number of replication forks formed and the distance each fork travels before the forks meet.",
          response: { type: "numeric", parts: [{ label: "Number of replication forks", answer: 2 }, { label: "Distance travelled by each fork (bp)", answer: 2400000 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Bidirectional replication", statement: "Each origin nucleates two replication forks that move away from each other in opposite directions." },
            ],
            steps: [
              { reasoning: "A single origin produces two forks moving in opposite directions.", working: "2", marks: 1, markCode: "M" },
              { reasoning: "State the fork count.", working: "2", marks: 1, markCode: "A" },
              { reasoning: "The forks meet after together copying the whole chromosome, so each travels half the circumference.", working: "4800000 \\div 2", marks: 1, markCode: "M" },
              { reasoning: "Evaluate the distance.", working: "2400000", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2$ forks; each travels $2 400 000$ bp",
            commonErrors: ["Dividing the chromosome length by four instead of two — each fork covers half."],
          },
        },
        {
          id: "biohl-u1-replication-q13",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Okazaki fragments on a lagging strand average 200 nucleotides in length. How many fragments are required to copy a lagging strand 40 000 nucleotides long?",
          response: { type: "numeric", parts: [{ label: "Number of Okazaki fragments", answer: 200 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Fragment number", statement: "$n = L / \\ell$ for lagging-strand length $L$ and mean fragment length $\\ell$." },
            ],
            steps: [
              { reasoning: "Divide the strand length by the mean fragment length.", working: "40000 \\div 200", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "200", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$200$ fragments",
            commonErrors: ["Multiplying instead of dividing."],
          },
        },
        {
          id: "biohl-u1-replication-q14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 5,
          stem: "Explain why the lagging strand must be synthesised discontinuously as Okazaki fragments while the leading strand is synthesised continuously.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Antiparallel templates", statement: "The two template strands run in opposite directions, but DNA polymerase can only synthesise $5' \\to 3'$." },
              { kind: "principle", name: "Discontinuous synthesis", statement: "On the lagging strand the template runs opposite to fork movement, so synthesis restarts repeatedly behind the fork." },
            ],
            steps: [
              { reasoning: "The two parental strands are antiparallel and DNA polymerase adds nucleotides only in the $5' \\to 3'$ direction.", marks: 1, markCode: "M" },
              { reasoning: "On the leading strand the template orientation lets polymerase synthesise continuously towards the fork.", marks: 1, markCode: "A" },
              { reasoning: "On the lagging strand the template runs the other way, so polymerase must synthesise short stretches moving away from the fork.", marks: 1, markCode: "M" },
              { reasoning: "Each new stretch requires a fresh RNA primer, so the lagging strand is made discontinuously as Okazaki fragments.", marks: 1, markCode: "A" },
              { reasoning: "DNA polymerase I then removes the primers and fills the gaps, and DNA ligase seals the nicks to give one continuous strand.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Antiparallel templates plus $5' \\to 3'$ synthesis force discontinuous Okazaki-fragment synthesis on the lagging strand; fragments are later joined after primer removal.",
            commonErrors: ["Claiming the lagging strand polymerase 'runs backwards' — synthesis is still $5' \\to 3'$ on both strands."],
          },
        },
        {
          id: "biohl-u1-replication-q15",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 8,
          stem: "A replication fork copies a stretch of DNA 120 000 base pairs long. Okazaki fragments on the lagging strand average 240 nucleotides, and each RNA primer is 10 nucleotides long.",
          parts: [
            { label: "a", prompt: "State the function of primase during replication.", marks: 2 },
            { label: "b", prompt: "Explain what is meant by semiconservative replication.", marks: 2 },
            { label: "c", prompt: "Calculate the number of Okazaki fragments produced on the lagging strand.", marks: 2 },
            { label: "d", prompt: "Calculate the total number of nucleotides contributed by all the RNA primers.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Primase", statement: "An enzyme that synthesises short RNA primers providing a free $3'$ OH for DNA polymerase." },
              { kind: "formula", name: "Fragment number", statement: "$n = L / \\ell$ for lagging-strand length $L$ and mean fragment length $\\ell$." },
            ],
            steps: [
              { part: "a", reasoning: "Primase synthesises short RNA primers at the start of each new strand or fragment.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "The primer supplies the free $3'$ hydroxyl end that DNA polymerase requires.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Each daughter duplex contains one parental strand and one newly synthesised strand.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "This was demonstrated by the Meselson-Stahl density experiment.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Divide the lagging-strand length by the mean fragment length.", working: "120000 \\div 240", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "500", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Each fragment uses one 10-nt primer.", working: "500 \\times 10", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Evaluate.", working: "5000", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Makes RNA primers. (b) One old + one new strand per duplex. (c) $500$ fragments. (d) $5000$ primer nucleotides.",
            commonErrors: ["In (c), dividing by 2 first — one fork's lagging strand is the full 120 000 bp."],
          },
        },
        {
          id: "biohl-u1-replication-q16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Bacteria are grown for many generations in a $^{15}$N medium and then transferred to a $^{14}$N medium. After each round of replication, the fraction of hybrid-density DNA halves.",
          response: { type: "numeric", parts: [{ label: "Percentage of DNA containing $^{15}$N after three rounds", answer: 25 }, { label: "Percentage of DNA entirely $^{14}$N after three rounds", answer: 75 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Semiconservative dilution", statement: "After transfer to $^{14}$N, each generation of replication halves the proportion of hybrid DNA." },
            ],
            steps: [
              { reasoning: "After the first generation all DNA is hybrid; after the third generation the hybrid fraction is $(1/2)^2 = 1/4$.", working: "(1/2)^2 = 0.25", marks: 1, markCode: "M" },
              { reasoning: "Convert to a percentage containing $^{15}$N.", working: "25\\%", marks: 1, markCode: "A" },
              { reasoning: "The remainder is entirely $^{14}$N light DNA.", working: "100 - 25", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "75\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$25\\%$ hybrid (contains $^{15}$N); $75\\%$ light",
            commonErrors: ["Counting the transfer generation as generation zero and answering 50%."],
          },
        },
      ],
    },
    {
      id: "biohl-u1-fidelity-telomeres",
      title: "Fidelity, proofreading and telomeres",
      skill: "Explain how proofreading and mismatch repair maintain fidelity, describe the end-replication problem, and calculate expected errors and telomere attrition.",
      lesson: {
        sections: [
          {
            heading: "Keeping errors rare",
            body: "DNA polymerase III has a $3' \\to 5'$ exonuclease domain that proofreads each newly added nucleotide and removes a mismatch immediately — this drops the error rate roughly 100-fold. A further mismatch repair system scans newly replicated DNA after synthesis and excises remaining errors using the methylation state of the old strand as a guide. Together these mechanisms keep the mutation rate extremely low.",
          },
          {
            heading: "The end-replication problem",
            body: "Because DNA polymerase needs a primer and synthesises only $5' \\to 3'$, the extreme $5'$ end of each new strand cannot be completed after the final primer is removed. Each round of replication therefore shortens the chromosome by a small amount. Eukaryotic chromosomes protect their ends with telomeres — long repeats of a short sequence such as TTAGGG — and the enzyme telomerase adds these repeats back in germ cells and some stem cells, but telomerase is largely absent from most somatic cells.",
          },
          {
            heading: "The Hayflick limit",
            body: "Because telomeres shorten with each division, most somatic cells can divide only a limited number of times — the Hayflick limit — before telomeres become critically short and the cell enters senescence or apoptosis. Cancer cells often reactivate telomerase, which maintains telomere length and removes this built-in limit on proliferation.",
          },
        ],
        keyFormulas: [
          { name: "Expected errors", statement: "$E = L \\times r$, where $L$ is the number of base pairs replicated and $r$ the error rate per nucleotide." },
          { name: "Telomere attrition", statement: "Telomere length after $n$ divisions is $L_0 - n\\delta$, where $\\delta$ is the length lost per division." },
          { name: "End-replication loss", statement: "Each replication leaves an unfilled gap at each $5'$ end, so telomeres shorten by roughly the length of one primer per division." },
        ],
        workedExample: {
          problem: "A chromosome of 2.4 million base pairs is replicated with a polymerase error rate of $1 \\times 10^{-7}$ per nucleotide. How many errors are expected per replication?",
          solution: "$E = 2.4 \\times 10^{6} \\times 1 \\times 10^{-7} = 0.24$ errors per replication, i.e. roughly one error every four replications of that chromosome.",
        },
      },
      questions: [
        {
          id: "biohl-u1-fidelity-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The $3' \\to 5'$ exonuclease activity of DNA polymerase III is best described as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Primer removal — degrading the RNA primer after Okazaki fragment synthesis" },
              { id: "b", text: "Proofreading — removing a mismatched nucleotide straight after insertion" },
              { id: "c", text: "Chain elongation — adding nucleotides to the growing strand" },
              { id: "d", text: "Ligation — joining Okazaki fragments together" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Proofreading exonuclease", statement: "A $3' \\to 5'$ exonuclease domain that excises a wrongly paired nucleotide immediately after insertion." },
            ],
            steps: [
              { reasoning: "The $3' \\to 5'$ exonuclease acts on the newly synthesised strand to remove mismatches.", marks: 1, markCode: "M" },
              { reasoning: "This is proofreading; the other functions belong to different enzymes.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Proofreading",
            commonErrors: ["Confusing exonuclease proofreading with primer removal (DNA polymerase I) or nick sealing (ligase)."],
          },
        },
        {
          id: "biohl-u1-fidelity-q2",
          difficulty: "core",
          paper: "2",
          totalMarks: 2,
          stem: "A chromosome contains 2.4 million base pairs. A DNA polymerase copies it with an error rate of $1 \\times 10^{-7}$ per nucleotide incorporated. Calculate the expected number of errors per replication of that chromosome.",
          response: { type: "numeric", parts: [{ label: "Expected errors", answer: 0.24, tolerance: 0.001 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Expected errors", statement: "$E = L \\times r$ for $L$ base pairs and error rate $r$ per nucleotide." },
            ],
            steps: [
              { reasoning: "Multiply the number of base pairs by the error rate.", working: "2.4 \\times 10^{6} \\times 1 \\times 10^{-7}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "0.24", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$0.24$ errors per replication",
            commonErrors: ["Multiplying by $10^{7}$ instead of $10^{-7}.", "Using the diploid genome size instead of the chromosome length given."],
          },
        },
        {
          id: "biohl-u1-fidelity-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Explain the end-replication problem and why it causes chromosome ends to become progressively shorter in cells that lack telomerase.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "End-replication problem", statement: "The final RNA primer on each new strand lies at the very end of the template and cannot be replaced by DNA, so a short stretch is lost each round." },
              { kind: "principle", name: "Telomere protection", statement: "Telomeres are disposable repetitive sequences that absorb this loss so that coding DNA is not eroded." },
            ],
            steps: [
              { reasoning: "DNA polymerase needs a primer and can only extend a $3'$ end; the extreme $5'$ end of each daughter strand cannot be completed.", marks: 1, markCode: "R" },
              { reasoning: "After the terminal primer is removed, the gap cannot be filled, so each replication removes a short segment.", marks: 1, markCode: "R" },
              { reasoning: "Without telomerase nothing replaces the lost telomeric repeats, so the ends shorten with every division.", marks: 1, markCode: "M" },
              { reasoning: "Eventually critically short telomeres trigger senescence or apoptosis; telomerase in germ and stem cells counteracts this.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Each replication leaves an unfillable gap at the $5'$ end; without telomerase the telomeres shorten until the cell stops dividing.",
            commonErrors: ["Claiming the whole chromosome shortens from both ends equally — loss occurs at the $5'$ ends of new strands.", "Confusing telomere shortening with mutation of coding genes."],
          },
        },
        {
          id: "biohl-u1-fidelity-q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Telomerase activity is high in many cancer cells but low in most normal somatic cells. A normal human cell begins life with telomeres of about 8 000 base pairs and loses roughly 100 base pairs per division.",
          parts: [
            { label: "a", prompt: "Define the term telomere.", marks: 2 },
            { label: "b", prompt: "Explain why telomeres shorten with each round of replication in cells that lack telomerase.", marks: 2 },
            { label: "c", prompt: "Calculate the number of divisions after which the telomeres would be reduced from 8 000 bp to 4 000 bp.", marks: 2 },
            { label: "d", prompt: "Suggest why elevated telomerase activity contributes to the progression of a tumour.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Telomere", statement: "Repetitive non-coding DNA sequences (e.g. TTAGGG repeats in humans) at the ends of chromosomes that protect coding DNA." },
              { kind: "formula", name: "Attrition", statement: "$L_n = L_0 - n\\delta$; divisions needed $n = (L_0 - L_n)/\\delta$." },
            ],
            steps: [
              { part: "a", reasoning: "Telomeres are the repetitive DNA sequences at chromosome ends.", marks: 1, markCode: "A" },
              { part: "a", reasoning: "They are non-coding and protect the chromosome from degradation and end-to-end fusion.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "The end-replication problem leaves an unfillable gap at each $5'$ end each cycle.", marks: 1, markCode: "R" },
              { part: "b", reasoning: "Without telomerase the lost telomeric repeats are not replaced, so telomeres shorten progressively.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Length to be lost is $8000 - 4000 = 4000$ bp.", working: "4000 \\div 100", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "40 \\text{ divisions}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Telomerase maintains telomere length, so cancer cells can divide indefinitely without entering senescence.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "This removes a normal brake on proliferation and allows tumours to grow large.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Repetitive end sequences protecting chromosome ends. (b) End-replication loss is not replaced. (c) $40$ divisions. (d) Immortalisation of cancer cells by maintaining telomeres.",
            commonErrors: ["In (c), dividing 8000 by 100 instead of the length lost.", "In (d), claiming telomerase repairs gene mutations rather than maintaining chromosome ends."],
            examinerNote: "Award the method mark in (c) for setting up $(8000-4000)/100$ even if the arithmetic slips.",
          },
        },
        {
          id: "biohl-u1-fidelity-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Which statement best describes the role of the $3' \\to 5'$ exonuclease activity of DNA polymerase?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It unwinds the double helix at the replication fork" },
              { id: "b", text: "It removes a mismatched nucleotide immediately after insertion" },
              { id: "c", text: "It joins Okazaki fragments by forming a phosphodiester bond" },
              { id: "d", text: "It adds the next nucleotide to the $3'$ end of the new strand" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Proofreading exonuclease", statement: "A $3' \\to 5'$ exonuclease activity that excises a wrongly incorporated nucleotide directly after insertion." },
            ],
            steps: [
              { reasoning: "The exonuclease checks the newly synthesised strand from its $3'$ end.", marks: 1, markCode: "M" },
              { reasoning: "It removes a mismatch before synthesis continues, so choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** It removes a mismatched nucleotide immediately after insertion",
            commonErrors: ["Confusing polymerase proofreading with ligase joining or helicase unwinding."],
          },
        },
        {
          id: "biohl-u1-fidelity-q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "In mismatch repair, which feature is used to identify the newly synthesised strand so that the incorrect base can be removed?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The methylation state of the parental strand" },
              { id: "b", text: "The direction of helicase movement" },
              { id: "c", text: "The presence of RNA primers at every Okazaki fragment" },
              { id: "d", text: "The telomeric repeats at each chromosome end" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Mismatch repair", statement: "After replication, repair enzymes distinguish old and new strands, often using methylation, and excise the error in the new strand." },
            ],
            steps: [
              { reasoning: "The parental strand carries the methylation mark used as a reference.", marks: 1, markCode: "M" },
              { reasoning: "The unmethylated new strand is therefore the one corrected, so (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** The methylation state of the parental strand",
            commonErrors: ["Saying the repair system removes bases randomly from both strands."],
          },
        },
        {
          id: "biohl-u1-fidelity-q7",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "What is the primary protective function of telomeres at chromosome ends?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They recruit RNA polymerase to gene promoters" },
              { id: "b", text: "They provide a buffer that is lost instead of coding DNA during end-replication" },
              { id: "c", text: "They hold sister chromatids together during mitosis" },
              { id: "d", text: "They code for the proteins needed in DNA replication" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Telomere", statement: "Repetitive non-coding DNA at chromosome ends that protects internal sequences from the end-replication problem." },
            ],
            steps: [
              { reasoning: "Telomeres are non-coding repetitive sequences.", marks: 1, markCode: "M" },
              { reasoning: "They absorb the small loss at each replication, so choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** They provide a buffer lost instead of coding DNA",
            commonErrors: ["Describing telomeres as genes rather than protective repetitive ends."],
          },
        },
        {
          id: "biohl-u1-fidelity-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "The Hayflick limit refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The maximum size a chromosome can reach before it breaks" },
              { id: "b", text: "The number of Okazaki fragments produced per replication fork" },
              { id: "c", text: "The maximum error rate tolerated by DNA polymerase" },
              { id: "d", text: "The maximum number of cell divisions before telomeres become critically short" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Hayflick limit", statement: "The finite number of divisions a normal somatic cell can undergo before telomere shortening induces senescence or apoptosis." },
            ],
            steps: [
              { reasoning: "Telomeres shorten after each division in most somatic cells.", marks: 1, markCode: "M" },
              { reasoning: "The division limit imposed by critical telomere shortening is the Hayflick limit, so (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Maximum divisions before telomeres become critically short",
            commonErrors: ["Confusing the Hayflick limit with chromosome size or mutation rate."],
          },
        },
        {
          id: "biohl-u1-fidelity-q9",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Many cancer cells maintain telomere length by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Using RNA interference against telomere RNA" },
              { id: "b", text: "Eliminating all mismatch repair" },
              { id: "c", text: "Reactivating telomerase" },
              { id: "d", text: "Increasing DNA methylation of telomeric repeats" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Telomerase in cancer", statement: "Telomerase adds telomeric repeats and can immortalise cells by preventing telomere attrition." },
            ],
            steps: [
              { reasoning: "Telomerase directly extends telomeric DNA.", marks: 1, markCode: "M" },
              { reasoning: "Reactivation removes the normal division limit, so choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Reactivating telomerase",
            commonErrors: ["Claiming cancer cells repair telomeres through mismatch repair rather than telomerase."],
          },
        },
        {
          id: "biohl-u1-fidelity-q10",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "A DNA polymerase copies a chromosome containing $5 \\times 10^{6}$ base pairs. Its error rate is $2 \\times 10^{-8}$ per nucleotide incorporated. Calculate the expected number of errors per replication.",
          response: { type: "numeric", parts: [{ label: "Expected errors", answer: 0.1, tolerance: 0.001 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Expected errors", statement: "$E = L \\times r$ for $L$ replicated base pairs and error rate $r$." },
            ],
            steps: [
              { reasoning: "Multiply the chromosome length by the error rate.", working: "5000000 * 2e-8", marks: 1, markCode: "M" },
              { reasoning: "Evaluate the product.", working: "0.1", marks: 1, markCode: "A" },
              { reasoning: "State the expected value as errors per replication.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "$0.1$ expected errors per replication",
            commonErrors: ["Using the diploid genome size rather than the chromosome length given."],
          },
        },
        {
          id: "biohl-u1-fidelity-q11",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "A eukaryotic cell begins with telomeres 9 000 base pairs long. Each division without telomerase activity removes 75 base pairs. Calculate (i) the telomere length remaining after 60 divisions, and (ii) the number of divisions required to reduce the telomeres to 3 000 base pairs.",
          response: { type: "numeric", parts: [{ label: "Telomere length after 60 divisions (bp)", answer: 4500 }, { label: "Divisions to reach 3 000 bp", answer: 80 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Telomere attrition", statement: "$L_n = L_0 - n\\delta$ where $\\delta$ is the loss per division." },
            ],
            steps: [
              { reasoning: "For 60 divisions, subtract $60 \\times 75$ from 9 000.", working: "9000 - 60 * 75", marks: 1, markCode: "M" },
              { reasoning: "Evaluate the remaining length.", working: "4500", marks: 1, markCode: "A" },
              { reasoning: "For part (ii), the length lost is $9000 - 3000 = 6000$ bp, so divide by 75.", working: "(9000 - 3000) / 75", marks: 1, markCode: "M" },
              { reasoning: "Evaluate the number of divisions.", working: "80", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$4500$ bp after 60 divisions; $80$ divisions to reach $3000$ bp",
            commonErrors: ["Dividing the initial length by 75 instead of the length lost for part (ii)."],
          },
        },
        {
          id: "biohl-u1-fidelity-q12",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Before proofreading, DNA polymerase III inserts bases with an error rate of $1 \\times 10^{-5}$. Proofreading improves fidelity about 100-fold. A genome of $3 \\times 10^{9}$ base pairs is replicated. Calculate (i) the expected errors if proofreading did not occur, and (ii) the expected errors after proofreading.",
          response: { type: "numeric", parts: [{ label: "Errors without proofreading", answer: 30000 }, { label: "Errors after proofreading", answer: 300 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Error rate after proofreading", statement: "If proofreading improves fidelity $k$-fold, the new rate is $r/k$ and $E = Lr/k$." },
            ],
            steps: [
              { reasoning: "Without proofreading, multiply genome length by $10^{-5}$.", working: "3e9 * 1e-5", marks: 1, markCode: "M" },
              { reasoning: "Evaluate the uncorrected error count.", working: "30000", marks: 1, markCode: "A" },
              { reasoning: "Proofreading lowers the rate to $10^{-7}$, so multiply $3 \\times 10^{9}$ by $10^{-7}$.", working: "3e9 * 1e-7", marks: 1, markCode: "M" },
              { reasoning: "Evaluate the corrected error count.", working: "300", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$30000$ errors without proofreading; $300$ after proofreading",
            commonErrors: ["Adding 100 to the error count rather than dividing the rate by 100."],
          },
        },
        {
          id: "biohl-u1-fidelity-q13",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "A chromosome end has telomeric repeats six base pairs long. The telomere region is 7 200 base pairs long. Calculate the number of complete telomeric repeats present.",
          response: { type: "numeric", parts: [{ label: "Number of telomeric repeats", answer: 1200 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Repeat count", statement: "$n = L / r$ where $L$ is telomere length and $r$ the repeat length." },
            ],
            steps: [
              { reasoning: "Divide the telomere length by the repeat length.", working: "7200 / 6", marks: 1, markCode: "M" },
              { reasoning: "Evaluate the number of repeats.", working: "1200", marks: 1, markCode: "A" },
              { reasoning: "State that the repeats are complete copies of the telomeric sequence.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "$1200$ telomeric repeats",
            commonErrors: ["Multiplying 7 200 by 6 instead of dividing."],
          },
        },
        {
          id: "biohl-u1-fidelity-q14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Telomeres are initially 10 000 base pairs long and lose 120 base pairs per division. Calculate (i) the telomere length after 25 divisions, and (ii) the percentage of the original telomere length that remains.",
          response: { type: "numeric", parts: [{ label: "Telomere length after 25 divisions (bp)", answer: 7000 }, { label: "Percentage remaining", answer: 70 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Attrition and percentage", statement: "$L_n = L_0 - n\\delta$ and percentage remaining $= 100L_n/L_0$." },
            ],
            steps: [
              { reasoning: "Subtract $25 \\times 120$ from 10 000.", working: "10000 - 25 * 120", marks: 1, markCode: "M" },
              { reasoning: "Evaluate the remaining length.", working: "7000", marks: 1, markCode: "A" },
              { reasoning: "Divide the remaining length by the initial length and multiply by 100.", working: "7000 / 10000 * 100", marks: 1, markCode: "M" },
              { reasoning: "Evaluate the percentage.", working: "70", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$7000$ bp remains, which is $70\\%$ of the original length",
            commonErrors: ["Reporting the percentage lost ($30\\%$) instead of the percentage remaining."],
          },
        },
        {
          id: "biohl-u1-fidelity-q15",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 6,
          stem: "Explain how DNA polymerase proofreading and mismatch repair work together to keep the mutation rate low during DNA replication.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Two-stage fidelity", statement: "Immediate proofreading removes most incorporation errors, while post-replicative mismatch repair removes errors that escape." },
            ],
            steps: [
              { reasoning: "DNA polymerase III has a $3' \\to 5'$ exonuclease domain that acts immediately after nucleotide insertion.", marks: 1, markCode: "M" },
              { reasoning: "If the newly added base is mismatched, the exonuclease removes it before chain extension continues.", marks: 1, markCode: "A" },
              { reasoning: "This immediate check reduces the error rate roughly 100-fold but cannot remove every mistake.", marks: 1, markCode: "B" },
              { reasoning: "After replication, mismatch repair scans the newly made duplex for remaining mismatches.", marks: 1, markCode: "M" },
              { reasoning: "The parental strand's methylation state identifies which strand is new and therefore which base should be replaced.", marks: 1, markCode: "A" },
              { reasoning: "Together the two systems reduce mutations to a very low level, preserving genome stability.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Proofreading removes most errors during synthesis; mismatch repair removes remaining errors after replication using strand discrimination.",
            commonErrors: ["Describing only one repair system or saying proofreading repairs the parental strand."],
          },
        },
        {
          id: "biohl-u1-fidelity-q16",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 8,
          stem: "A cell line has telomeres 8 500 base pairs long and loses 50 base pairs per division. A second cell line expresses telomerase and maintains a constant telomere length.",
          parts: [
            { label: "a", prompt: "Define the term end-replication problem.", marks: 2 },
            { label: "b", prompt: "Explain why telomeres shorten in cells without telomerase.", marks: 2 },
            { label: "c", prompt: "Calculate the number of divisions required for the first cell line to lose 3 000 base pairs of telomere.", marks: 2 },
            { label: "d", prompt: "Predict and justify the likely division behaviour of the two cell lines.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "End-replication problem", statement: "The inability to complete the extreme $5'$ end of a new strand after the final RNA primer is removed." },
              { kind: "formula", name: "Attrition", statement: "Divisions for a given loss $= (L_0 - L_n)/\\delta$." },
            ],
            steps: [
              { part: "a", reasoning: "DNA polymerase needs a primer and cannot fill the final gap at each chromosome end.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "After the terminal primer is removed, a short stretch cannot be replaced, so ends shorten.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Each replication leaves an unfillable gap at the $5'$ end of each new strand.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Without telomerase these losses accumulate in the telomeric repeats rather than coding DNA.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Use $3000 / 50$ divisions.", working: "3000 / 50", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "60", marks: 1, markCode: "A" },
              { part: "d", reasoning: "The first line will approach senescence after telomeres become critically short.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "The telomerase line can keep dividing because telomere length is maintained.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Unfillable terminal gaps shorten chromosome ends. (b) Losses accumulate in telomeres. (c) $60$ divisions. (d) First line senesces; telomerase line persists.",
            commonErrors: ["In (c), dividing 8 500 by 50 rather than using the 3 000 bp loss."],
          },
        },
      ],
    },
  ],
};
