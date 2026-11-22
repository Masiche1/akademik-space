import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "biohl-u3-lesson-3-3",
  code: "3-3",
  title: "DNA Technology: PCR, Gel Electrophoresis and Genetic Modification",
  goal: "I CAN explain the mechanism of the polymerase chain reaction, interpret gel electrophoresis results, and describe the steps of genetic modification using restriction enzymes and vectors.",
  standards: ["Paper 1", "Paper 2", "AHL D.3"],
  vocabulary: [
    { term: "Polymerase chain reaction (PCR)", definition: "An in vitro technique that amplifies a specific DNA sequence exponentially through repeated cycles of denaturation, annealing and extension." },
    { term: "Taq polymerase", definition: "A heat-stable DNA polymerase from the bacterium Thermus aquaticus used in PCR because it survives the high denaturation temperatures." },
    { term: "Gel electrophoresis", definition: "A technique that separates DNA fragments by size as they migrate through a gel toward the positive electrode; smaller fragments travel further." },
    { term: "Restriction enzyme", definition: "An enzyme that cuts DNA at specific palindromic recognition sequences, producing fragments with sticky or blunt ends." },
    { term: "Plasmid vector", definition: "A small circular DNA molecule used to carry foreign DNA into a host cell during genetic modification." },
    { term: "Selectable marker", definition: "A gene (e.g. antibiotic resistance) included in a vector so that successfully transformed cells can be identified and selected." },
  ],
  concepts: [
    {
      id: "biohl-u3-pcr-gel",
      title: "PCR amplification and gel electrophoresis",
      skill: "Explain the three PCR steps and the exponential $2^n$ yield, and interpret gel electrophoresis band patterns and fragment sizes.",
      lesson: {
        sections: [
          {
            heading: "The PCR cycle",
            body: "PCR amplifies a target DNA sequence in vitro. Each cycle has three steps at controlled temperatures: denaturation at about $95^\\circ$C separates the strands; annealing at about $55^\\circ$C allows primers to bind their complementary sequences; extension at about $72^\\circ$C lets Taq polymerase synthesise new strands. Because both strands of each product serve as templates in the next cycle, the number of copies doubles each cycle: after $n$ cycles starting from one molecule there are $2^n$ copies.",
          },
          {
            heading: "Gel electrophoresis",
            body: "DNA fragments are negatively charged, so in an agarose gel they migrate toward the positive electrode. Smaller fragments move through the pores faster and travel further. The resulting bands can be compared with a DNA ladder of known sizes to estimate fragment lengths, and band intensity reflects the amount of DNA present. This is used to check PCR products, genotype individuals and analyse restriction digests.",
          },
          {
            heading: "Applications of PCR and electrophoresis",
            body: "PCR can amplify trace amounts of DNA for forensic identification, disease diagnosis and ancient DNA analysis, while gel electrophoresis confirms the size of the product against a ladder. Together they form the standard workflow for genotyping: amplify a locus, separate the products by size, and read the band pattern to infer the genotype.",
          },
        ],
        keyFormulas: [
          { name: "PCR yield", statement: "$N = N_0 \\times 2^n$ for $N_0$ starting molecules after $n$ cycles." },
          { name: "Restriction fragments", statement: "A linear DNA cut at $k$ sites yields $k + 1$ fragments; a circular plasmid cut at $k$ sites yields $k$ fragments." },
          { name: "Migration", statement: "In gel electrophoresis, smaller fragments migrate further toward the positive electrode." },
        ],
        workedExample: {
          problem: "A PCR begins with a single DNA molecule and runs for 20 cycles. How many copies of the target are produced?",
          solution: "$N = 1 \\times 2^{20} = 1\\,048\\,576$ copies.",
        },
      },
      questions: [
        {
          id: "biohl-u3-pcr-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "During the annealing step of PCR, what happens?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Primers bind to their complementary sequences on the separated template strands" },
              { id: "b", text: "The DNA strands are separated by heat" },
              { id: "c", text: "The DNA is cut with restriction enzymes" },
              { id: "d", text: "Taq polymerase synthesises new DNA strands" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "PCR steps", statement: "Denaturation separates strands; annealing lets primers bind; extension synthesises new DNA." },
            ],
            steps: [
              { reasoning: "Annealing is the primer-binding step at about $55^\\circ$C.", marks: 1, markCode: "M" },
              { reasoning: "Strand separation is denaturation and synthesis is extension.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Primers bind to complementary sequences",
            commonErrors: ["Confusing annealing with denaturation or extension."],
          },
        },
        {
          id: "biohl-u3-pcr-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A PCR reaction starts with 4 copies of the target DNA and is run for 15 cycles. Assuming 100% efficiency, calculate the number of DNA molecules at the end.",
          response: { type: "numeric", parts: [{ label: "Number of molecules", answer: 131072 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "PCR yield", statement: "$N = N_0 \\times 2^n$." },
            ],
            steps: [
              { reasoning: "Set up the exponential expression.", working: "4 \\times 2^{15}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate $2^{15}$.", working: "32768", marks: 1, markCode: "M" },
              { reasoning: "Multiply by the starting number.", working: "4 \\times 32768 = 131072", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$131\\,072$ molecules",
            commonErrors: ["Multiplying by $n$ instead of $2^n$.", "Forgetting the initial 4 copies."],
          },
        },
        {
          id: "biohl-u3-pcr-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Explain why Taq polymerase, rather than a typical DNA polymerase, is used in PCR, and describe what happens to the DNA during the denaturation step.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Taq polymerase", statement: "A heat-stable polymerase from Thermus aquaticus that survives repeated heating to $95^\\circ$C." },
              { kind: "principle", name: "Denaturation", statement: "Heating to about $95^\\circ$C breaks hydrogen bonds and separates the two DNA strands." },
            ],
            steps: [
              { reasoning: "PCR repeatedly heats the mixture to about $95^\\circ$C each cycle.", marks: 1, markCode: "M" },
              { reasoning: "A typical polymerase would denature and lose activity after the first cycle.", marks: 1, markCode: "R" },
              { reasoning: "Taq polymerase is thermostable and remains active through all cycles.", marks: 1, markCode: "A" },
              { reasoning: "During denaturation the hydrogen bonds between strands break, yielding single-stranded templates for primer binding.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Taq polymerase withstands the repeated high temperatures; denaturation separates the strands so primers can bind.",
            commonErrors: ["Saying denaturation cuts the DNA — it only separates the strands."],
          },
        },
        {
          id: "biohl-u3-pcr-q4",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 8,
          stem: "A student analyses a PCR product by gel electrophoresis. The gel shows three bands in lane 2: one near the well, one in the middle, and one near the bottom. A DNA ladder in lane 1 shows bands at 100, 250, 500 and 1 000 base pairs.",
          parts: [
            { label: "a", prompt: "Explain why DNA fragments move through the gel toward the positive electrode.", marks: 2 },
            { label: "b", prompt: "Predict which of the three bands corresponds to the smallest fragment and justify your answer.", marks: 2 },
            { label: "c", prompt: "A second PCR product cut with a restriction enzyme yields fragments of 500 bp and 250 bp. Predict the number of bands expected in that lane.", marks: 2 },
            { label: "d", prompt: "Explain why the band near the bottom of the gel indicates a smaller fragment than the band near the well.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Gel electrophoresis", statement: "DNA is negatively charged and migrates toward the anode; smaller fragments move faster through the gel matrix." },
              { kind: "principle", name: "Band position", statement: "Distance migrated is inversely related to fragment size." },
            ],
            steps: [
              { part: "a", reasoning: "DNA fragments carry negative charges on their phosphate backbone.", marks: 1, markCode: "A" },
              { part: "a", reasoning: "They are attracted to the positive electrode (anode) and migrate through the gel pores.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "The band nearest the bottom (furthest from the well) is the smallest fragment.", marks: 1, markCode: "R" },
              { part: "b", reasoning: "Smaller fragments navigate the gel pores more easily and travel further.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Two fragments of different sizes (500 bp and 250 bp) give two bands.", working: "2 \\text{ bands}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate: two distinct bands appear.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "The gel acts as a sieve; small fragments move faster and further.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Therefore the lowest band (smallest fragment) has migrated furthest from the well.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Negative DNA moves to the anode. (b) Bottom band = smallest. (c) Two bands. (d) Smaller fragments migrate further.",
            commonErrors: ["Reversing the direction — DNA moves toward the positive electrode, not the negative.", "In (b), choosing the top band as smallest."],
          },
        },
        {
          id: "biohl-u3-pcr-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "During the denaturation step of PCR, the mixture is heated to about $95^\\circ$C in order to",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "allow primers to bind to the template" },
              { id: "b", text: "separate the two DNA strands so they can act as templates" },
              { id: "c", text: "enable Taq polymerase to synthesise new strands" },
              { id: "d", text: "digest the DNA with restriction enzymes" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "PCR denaturation", statement: "Heating to about $95^\\circ$C breaks hydrogen bonds, separating the DNA strands." },
            ],
            steps: [
              { reasoning: "Denaturation is the strand-separation step at about $95^\\circ$C.", marks: 1, markCode: "M" },
              { reasoning: "Primer binding is annealing and synthesis is extension — both occur at lower temperatures.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Separate the two DNA strands",
            commonErrors: ["Confusing denaturation with annealing or extension."],
          },
        },
        {
          id: "biohl-u3-pcr-q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "The extension step of PCR is carried out at about $72^\\circ$C so that",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Taq polymerase can synthesise new DNA strands from the primers" },
              { id: "b", text: "the primers can anneal to the template" },
              { id: "c", text: "the amplified DNA is cut into fragments" },
              { id: "d", text: "the DNA double helix denatures" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "PCR extension", statement: "At about $72^\\circ$C, Taq polymerase extends the primers to synthesise complementary strands." },
            ],
            steps: [
              { reasoning: "Extension is the synthesis step, optimal for Taq polymerase at about $72^\\circ$C.", marks: 1, markCode: "M" },
              { reasoning: "Annealing occurs at about $55^\\circ$C and denaturation at about $95^\\circ$C.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Taq polymerase synthesises new strands",
            commonErrors: ["Assigning the annealing or denaturation description to the extension step."],
          },
        },
        {
          id: "biohl-u3-pcr-q7",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Primers are essential in PCR because they",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "join the amplified fragments together" },
              { id: "b", text: "cut the DNA at specific recognition sites" },
              { id: "c", text: "bind to complementary sequences on the template and define the region that is amplified" },
              { id: "d", text: "separate the two DNA strands at high temperature" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Primers", statement: "Primers are short single-stranded DNA sequences complementary to the target region; polymerase extends them." },
            ],
            steps: [
              { reasoning: "Primers anneal to the template and provide the 3$'$ end from which Taq polymerase extends.", marks: 1, markCode: "M" },
              { reasoning: "Because they match only the target sequence, they ensure only that region is amplified.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** They bind the target and define the amplified region",
            commonErrors: ["Saying primers cut or join DNA — those are restriction enzymes and ligase."],
          },
        },
        {
          id: "biohl-u3-pcr-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "In gel electrophoresis of DNA, smaller fragments migrate",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "only when the gel is heated" },
              { id: "b", text: "less far than larger fragments" },
              { id: "c", text: "further toward the positive electrode than larger fragments" },
              { id: "d", text: "toward the negative electrode" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Gel migration", statement: "DNA is negatively charged and moves toward the anode; smaller fragments pass through the gel pores more easily and travel further." },
            ],
            steps: [
              { reasoning: "The negatively charged DNA migrates toward the positive electrode.", marks: 1, markCode: "M" },
              { reasoning: "Smaller fragments move faster through the gel matrix, so they end up further from the well.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Further toward the positive electrode",
            commonErrors: ["Reversing the size relationship or the direction of migration."],
          },
        },
        {
          id: "biohl-u3-pcr-q9",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A PCR reaction starts with a single copy of the target DNA and is run for 10 cycles with 100% efficiency. How many copies of the target are produced?",
          response: { type: "numeric", parts: [{ label: "Number of copies", answer: 1024 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "PCR yield", statement: "$N = N_0 \\times 2^n$." },
            ],
            steps: [
              { reasoning: "Each cycle doubles the number of molecules.", working: "N = 1 \\times 2^{10}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "1024", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$1024$ copies",
            commonErrors: ["Multiplying by 10 instead of raising 2 to the power 10."],
          },
        },
        {
          id: "biohl-u3-pcr-q10",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A PCR reaction begins with 3 copies of the target DNA and is run for 8 cycles at 100% efficiency. Calculate the number of DNA molecules at the end.",
          response: { type: "numeric", parts: [{ label: "Number of molecules", answer: 768 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "PCR yield", statement: "$N = N_0 \\times 2^n$." },
            ],
            steps: [
              { reasoning: "Set up the exponential expression.", working: "N = 3 \\times 2^{8}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate $2^8$.", working: "256", marks: 1, markCode: "M" },
              { reasoning: "Multiply by the starting number.", working: "3 \\times 256 = 768", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$768$ molecules",
            commonErrors: ["Forgetting the initial 3 molecules."],
          },
        },
        {
          id: "biohl-u3-pcr-q11",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 4,
          stem: "A PCR reaction starts with a single target molecule. Assuming 100% efficiency, what is the minimum number of cycles needed to produce more than 1 000 000 copies?",
          response: { type: "numeric", parts: [{ label: "Minimum number of cycles", answer: 20 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "PCR yield", statement: "$N = N_0 \\times 2^n$; copies double each cycle." },
            ],
            steps: [
              { reasoning: "Test $n = 19$ cycles.", working: "2^{19} = 524288", marks: 1, markCode: "M" },
              { reasoning: "This is below 1 000 000, so one more cycle is needed.", marks: 1, markCode: "A" },
              { reasoning: "Test $n = 20$ cycles.", working: "2^{20} = 1048576", marks: 1, markCode: "M" },
              { reasoning: "This exceeds 1 000 000, so the minimum is 20 cycles.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$20$ cycles",
            commonErrors: ["Answering 19 — $2^{19} = 524\\,288$ is less than 1 000 000."],
          },
        },
        {
          id: "biohl-u3-pcr-q12",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 4,
          stem: "A PCR reaction begins with 8 copies of the target DNA and is run for 10 cycles at 100% efficiency. Calculate the number of DNA molecules produced.",
          response: { type: "numeric", parts: [{ label: "Number of molecules", answer: 8192 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "PCR yield", statement: "$N = N_0 \\times 2^n$." },
            ],
            steps: [
              { reasoning: "Set up the exponential expression.", working: "N = 8 \\times 2^{10}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate $2^{10}$.", working: "1024", marks: 1, markCode: "M" },
              { reasoning: "Multiply by the starting number.", working: "8 \\times 1024", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "8192", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$8192$ molecules",
            commonErrors: ["Using $2^{10} = 100$ or forgetting the factor of 8."],
          },
        },
        {
          id: "biohl-u3-pcr-q13",
          difficulty: "core",
          paper: "2",
          totalMarks: 5,
          stem: "Describe the three steps of a single PCR cycle, naming the approximate temperature of each and what happens to the DNA.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "PCR cycle", statement: "Denaturation ($\\approx 95^\\circ$C), annealing ($\\approx 55^\\circ$C), extension ($\\approx 72^\\circ$C)." },
            ],
            steps: [
              { reasoning: "Denaturation at about $95^\\circ$C: heat breaks hydrogen bonds, separating the two DNA strands.", marks: 1, markCode: "M" },
              { reasoning: "Annealing at about $55^\\circ$C: primers bind to their complementary sequences on the single-stranded templates.", marks: 1, markCode: "M" },
              { reasoning: "Extension at about $72^\\circ$C: Taq polymerase synthesises new complementary strands from the primers.", marks: 1, markCode: "M" },
              { reasoning: "Each new double-stranded product then serves as a template in the next cycle, doubling the copy number.", marks: 1, markCode: "A" },
              { reasoning: "The three steps repeat for $n$ cycles, giving $2^n$ amplification.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Denaturation separates strands at $95^\\circ$C; primers anneal at $55^\\circ$C; Taq polymerase extends at $72^\\circ$C, doubling copies each cycle.",
            commonErrors: ["Swapping the order of the steps or the temperatures."],
          },
        },
        {
          id: "biohl-u3-pcr-q14",
          difficulty: "core",
          paper: "2",
          totalMarks: 6,
          stem: "Explain how gel electrophoresis can be used to distinguish between different genotypes at a genetic locus.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Gel electrophoresis", statement: "DNA fragments are separated by size; different alleles or allelic variants often produce fragments of different lengths." },
            ],
            steps: [
              { reasoning: "DNA fragments are negatively charged and migrate through an agarose gel toward the positive electrode.", marks: 1, markCode: "M" },
              { reasoning: "Smaller fragments travel further, so fragment size determines band position.", marks: 1, markCode: "M" },
              { reasoning: "Different alleles may differ in length — for example through insertions, deletions or different restriction sites.", marks: 1, markCode: "M" },
              { reasoning: "After amplification or digestion, each genotype produces a characteristic band pattern.", marks: 1, markCode: "M" },
              { reasoning: "A DNA ladder of known sizes allows the band positions to be converted into fragment sizes.", marks: 1, markCode: "A" },
              { reasoning: "Matching the observed pattern to expected genotypes identifies the genotype of each individual.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Alleles of different lengths produce bands at different positions; comparing patterns with a ladder distinguishes genotypes.",
            commonErrors: ["Claiming band intensity indicates genotype — intensity reflects DNA amount, not identity."],
          },
        },
        {
          id: "biohl-u3-pcr-q15",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 8,
          stem: "A forensic sample contains only trace amounts of DNA. PCR is run for 25 cycles starting from 2 target molecules, and the product is then analysed by gel electrophoresis.",
          parts: [
            { label: "a", prompt: "Calculate the number of target molecules produced after 25 cycles, assuming 100% efficiency.", marks: 2 },
            { label: "b", prompt: "Explain why PCR is able to amplify such a tiny starting amount of DNA.", marks: 2 },
            { label: "c", prompt: "Explain why gel electrophoresis is used after PCR.", marks: 2 },
            { label: "d", prompt: "State the role of a DNA ladder loaded in a separate lane.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "PCR yield", statement: "$N = N_0 \\times 2^n$ — amplification is exponential." },
              { kind: "principle", name: "Gel electrophoresis", statement: "Fragments are separated by size; a ladder provides known size standards." },
            ],
            steps: [
              { part: "a", reasoning: "Apply $N = N_0 \\times 2^n$ with $N_0 = 2$ and $n = 25$.", working: "N = 2 \\times 2^{25}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate.", working: "67\\,108\\,864", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Each cycle doubles the number of molecules, so growth is exponential rather than linear.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Even two starting molecules yield millions of copies after enough cycles.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Electrophoresis separates the amplified fragments by size, confirming a product of the expected length.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "It verifies that the correct target sequence was amplified before further analysis.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "The ladder contains fragments of known sizes run in parallel.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Comparing band positions with the ladder estimates the size of the unknown fragments.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $67\\,108\\,864$ molecules. (b) Exponential doubling each cycle. (c) Confirms product size. (d) Size standards for comparison.",
            commonErrors: ["In (a), computing $2^{25}$ without multiplying by the 2 starting molecules."],
          },
        },
      ],
    },
    {
      id: "biohl-u3-gm-mechanisms",
      title: "Genetic modification mechanisms",
      skill: "Describe how restriction enzymes, vectors and selectable markers are used to insert foreign DNA into host cells to produce genetically modified organisms.",
      lesson: {
        sections: [
          {
            heading: "Cutting and joining DNA",
            body: "Restriction enzymes recognise specific palindromic DNA sequences and cut both strands, producing fragments with sticky ends (overhangs) or blunt ends. A plasmid vector is cut with the same enzyme so its ends are complementary; DNA ligase then joins the foreign gene into the plasmid, creating a recombinant DNA molecule.",
          },
          {
            heading: "Transformation and selection",
            body: "The recombinant plasmid is introduced into host cells — bacteria by transformation or electroporation, plants via Agrobacterium or the gene gun. Not all cells take up the plasmid, so the vector carries a selectable marker such as an antibiotic-resistance gene. Cells grown on the antibiotic survive only if they contain the plasmid, allowing transformed cells to be identified and cultured.",
          },
          {
            heading: "From bacteria to crops",
            body: "The same principles extend beyond bacteria: Agrobacterium tumefaciens naturally transfers T-DNA into plant cells, and the gene gun bombards plant tissues with DNA-coated particles. Once a gene of interest — such as one for pest resistance or enhanced nutrition — is expressed in the host, the organism is described as genetically modified. Regulatory and ethical considerations surround the release of GM organisms into the environment.",
          },
        ],
        keyFormulas: [
          { name: "Sticky ends", statement: "Restriction enzymes that cut staggered leave complementary overhangs that anneal with matching ends." },
          { name: "Fragment count", statement: "A linear DNA molecule cut at $k$ sites produces $k + 1$ fragments; a circular plasmid cut at $k$ sites yields $k$ fragments." },
          { name: "Transformation efficiency", statement: "Only a fraction of cells take up foreign DNA, so selectable markers enrich the transformed population." },
        ],
        workedExample: {
          problem: "A linear DNA fragment has 3 recognition sites for a restriction enzyme. How many fragments are produced after complete digestion?",
          solution: "A linear molecule cut at $k$ sites yields $k + 1$ fragments, so $3 + 1 = 4$ fragments.",
        },
      },
      questions: [
        {
          id: "biohl-u3-gm-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "What is the role of a selectable marker gene in a plasmid vector used for genetic modification?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It allows transformed cells to be identified and selected" },
              { id: "b", text: "It unwinds the DNA double helix" },
              { id: "c", text: "It joins DNA fragments together" },
              { id: "d", text: "It cuts the plasmid DNA at a specific sequence" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Selectable marker", statement: "A gene such as antibiotic resistance that lets transformed cells survive under selective conditions." },
            ],
            steps: [
              { reasoning: "The marker lets only cells containing the plasmid survive selection.", marks: 1, markCode: "M" },
              { reasoning: "Cutting is done by restriction enzymes and joining by ligase.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Identifies transformed cells",
            commonErrors: ["Confusing selectable markers with restriction enzymes or ligase."],
          },
        },
        {
          id: "biohl-u3-gm-q2",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "A circular plasmid is cut by a restriction enzyme at 2 sites. How many DNA fragments are produced?",
          response: { type: "numeric", parts: [{ label: "Number of fragments", answer: 2 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Circular fragment count", statement: "A circular DNA cut at $k$ sites yields $k$ fragments." },
            ],
            steps: [
              { reasoning: "For a circular molecule, each cut increases the fragment count by one but the molecule remains circular until linearised.", working: "k = 2", marks: 1, markCode: "M" },
              { reasoning: "A circular plasmid cut at 2 sites gives 2 linear fragments.", working: "2", marks: 1, markCode: "A" },
              { reasoning: "Recognise the difference from linear DNA, which would give $k+1 = 3$.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "$2$ fragments",
            commonErrors: ["Using $k+1$ (the linear formula) and answering 3 — a circular plasmid cut at $k$ sites gives $k$ fragments."],
          },
        },
        {
          id: "biohl-u3-gm-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Explain why the same restriction enzyme is used to cut both the plasmid vector and the foreign DNA fragment during construction of a recombinant plasmid.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Complementary sticky ends", statement: "Using the same enzyme produces matching overhangs that anneal, allowing DNA ligase to join the fragments." },
            ],
            steps: [
              { reasoning: "The same restriction enzyme recognises the same palindromic sequence in both DNAs.", marks: 1, markCode: "M" },
              { reasoning: "It generates identical sticky ends on the plasmid and the insert.", marks: 1, markCode: "A" },
              { reasoning: "Complementary overhangs anneal via base pairing.", marks: 1, markCode: "R" },
              { reasoning: "DNA ligase seals the backbone, producing a stable recombinant plasmid.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The same enzyme creates complementary sticky ends so the insert and vector can be ligated together.",
            commonErrors: ["Claiming any enzyme can be used — ends must be compatible."],
          },
        },
        {
          id: "biohl-u3-gm-q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "A scientist wants to produce bacteria that synthesise human insulin. She cuts a plasmid and a human insulin gene with the same restriction enzyme, ligates them together, and introduces the recombinant plasmid into E. coli.",
          parts: [
            { label: "a", prompt: "Explain why both the plasmid and the insulin gene are cut with the same restriction enzyme.", marks: 2 },
            { label: "b", prompt: "State the role of DNA ligase in forming the recombinant plasmid.", marks: 2 },
            { label: "c", prompt: "A linear DNA fragment has 4 restriction sites. Calculate the number of fragments produced after complete digestion.", marks: 2 },
            { label: "d", prompt: "Explain why a selectable marker is needed and how it is used to identify transformed bacteria.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Recombinant DNA", statement: "Compatible ends from the same restriction enzyme allow insertion of the foreign gene into the vector." },
              { kind: "formula", name: "Fragment count", statement: "Linear DNA cut at $k$ sites yields $k + 1$ fragments." },
            ],
            steps: [
              { part: "a", reasoning: "The same enzyme produces matching sticky ends on both molecules.", marks: 1, markCode: "R" },
              { part: "a", reasoning: "This allows the insulin gene to be inserted in the correct orientation for ligation.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "DNA ligase forms phosphodiester bonds to seal the nicks.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "It covalently joins the insert to the plasmid backbone, creating a stable recombinant molecule.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "For linear DNA, fragments $= k + 1$.", working: "4 + 1", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "5 \\text{ fragments}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Not all bacteria take up the plasmid, so a marker distinguishes transformed from untransformed cells.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Cells grown on the selective agent (e.g. antibiotic) survive only if they carry the resistance gene on the plasmid.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Compatible ends for insertion. (b) Ligase seals the recombinant plasmid. (c) $5$ fragments. (d) Marker selects transformed cells.",
            commonErrors: ["In (c), using the circular formula $k$ and answering 4.", "In (d), suggesting all bacteria are transformed — selection is needed because uptake is inefficient."],
          },
        },
        {
          id: "biohl-u3-gm-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Restriction enzymes are used in genetic modification because they",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "select cells that have taken up foreign DNA" },
              { id: "b", text: "cut DNA at specific recognition sequences to generate fragments that can be joined" },
              { id: "c", text: "join DNA fragments together" },
              { id: "d", text: "copy DNA sequences" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Restriction enzyme", statement: "An enzyme that cuts DNA at specific palindromic recognition sequences." },
            ],
            steps: [
              { reasoning: "Restriction enzymes generate defined DNA fragments with compatible ends.", marks: 1, markCode: "M" },
              { reasoning: "Joining is done by DNA ligase and selection by marker genes.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Cut DNA at specific sequences",
            commonErrors: ["Confusing restriction enzymes with ligase or selectable markers."],
          },
        },
        {
          id: "biohl-u3-gm-q6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Sticky ends produced by some restriction enzymes are",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "short single-stranded overhangs that can base-pair with complementary sticky ends" },
              { id: "b", text: "blunt ends with no overhang" },
              { id: "c", text: "RNA primers bound to the template" },
              { id: "d", text: "protein sequences attached to the DNA" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Sticky ends", statement: "Staggered cuts leave complementary single-stranded overhangs that anneal with matching ends." },
            ],
            steps: [
              { reasoning: "Sticky ends are overhangs produced when the enzyme cuts the two strands at offset positions.", marks: 1, markCode: "M" },
              { reasoning: "Complementary overhangs anneal by base pairing, allowing ligase to seal the junction.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Single-stranded overhangs that base-pair with complementary ends",
            commonErrors: ["Describing blunt ends — those have no overhang and are less efficient for cloning."],
          },
        },
        {
          id: "biohl-u3-gm-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "The enzyme DNA ligase is used in genetic modification to",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "separate the two DNA strands" },
              { id: "b", text: "form phosphodiester bonds that join DNA fragments together" },
              { id: "c", text: "add a selectable marker to the plasmid" },
              { id: "d", text: "cut DNA at recognition sequences" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "DNA ligase", statement: "An enzyme that seals nicks in the DNA backbone by forming phosphodiester bonds." },
            ],
            steps: [
              { reasoning: "Ligase covalently joins the insert to the vector backbone.", marks: 1, markCode: "M" },
              { reasoning: "Cutting is done by restriction enzymes; markers are added as genes, not by ligase.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Join DNA fragments via phosphodiester bonds",
            commonErrors: ["Confusing ligase with restriction enzymes."],
          },
        },
        {
          id: "biohl-u3-gm-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Which method is commonly used to introduce recombinant DNA into plant cells for genetic modification?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Gel electrophoresis" },
              { id: "b", text: "PCR amplification" },
              { id: "c", text: "Agrobacterium-mediated transformation or the gene gun" },
              { id: "d", text: "Heat shock of bacterial cells only" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Plant transformation", statement: "Agrobacterium transfers T-DNA naturally; the gene gun bombards tissues with DNA-coated particles." },
            ],
            steps: [
              { reasoning: "Plants lack the natural competence of bacteria, so specialised delivery methods are used.", marks: 1, markCode: "M" },
              { reasoning: "Agrobacterium and biolistics (gene gun) are the standard plant delivery routes.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Agrobacterium or the gene gun",
            commonErrors: ["Suggesting heat shock works for plant cells — it is used mainly for bacteria."],
          },
        },
        {
          id: "biohl-u3-gm-q9",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A linear DNA molecule is completely digested by a restriction enzyme that cuts at 5 recognition sites. How many DNA fragments are produced?",
          response: { type: "numeric", parts: [{ label: "Number of fragments", answer: 6 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Linear fragment count", statement: "Linear DNA cut at $k$ sites yields $k + 1$ fragments." },
            ],
            steps: [
              { reasoning: "For a linear molecule each cut adds one fragment.", working: "k = 5", marks: 1, markCode: "M" },
              { reasoning: "Fragments $= k + 1$.", working: "5 + 1 = 6", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$6$ fragments",
            commonErrors: ["Answering 5 — the linear formula is $k + 1$, not $k$."],
          },
        },
        {
          id: "biohl-u3-gm-q10",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A circular plasmid is cut by a restriction enzyme at 3 sites. How many linear DNA fragments are produced?",
          response: { type: "numeric", parts: [{ label: "Number of fragments", answer: 3 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Circular fragment count", statement: "Circular DNA cut at $k$ sites yields $k$ fragments." },
            ],
            steps: [
              { reasoning: "A circular molecule cut at $k$ sites produces $k$ linear fragments — one fewer than linear DNA.", working: "k = 3", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$3$ fragments",
            commonErrors: ["Using $k + 1$ and answering 4 — that formula applies to linear DNA only."],
          },
        },
        {
          id: "biohl-u3-gm-q11",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 4,
          stem: "A restriction enzyme cuts at 6 sites. Calculate the number of fragments produced when it completely digests (a) a linear DNA molecule and (b) a circular plasmid.",
          response: { type: "numeric", parts: [{ label: "Linear fragments", answer: 7 }, { label: "Circular fragments", answer: 6 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Fragment count", statement: "Linear DNA: $k + 1$ fragments; circular DNA: $k$ fragments." },
            ],
            steps: [
              { reasoning: "For linear DNA, fragments $= k + 1$.", working: "6 + 1", marks: 1, markCode: "M" },
              { reasoning: "Evaluate the linear count.", working: "7", marks: 1, markCode: "A" },
              { reasoning: "For circular DNA, fragments $= k$.", working: "6", marks: 1, markCode: "M" },
              { reasoning: "Evaluate the circular count.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $7$ fragments. (b) $6$ fragments.",
            commonErrors: ["Applying the same formula to both — circular DNA gives one fewer fragment."],
          },
        },
        {
          id: "biohl-u3-gm-q12",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 4,
          stem: "After transformation, 2 000 bacteria are plated on medium containing an antibiotic. Only 50 colonies grow. Calculate the transformation efficiency as a percentage.",
          response: { type: "numeric", parts: [{ label: "Transformation efficiency (%)", answer: 2.5 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Transformation efficiency", statement: "Only cells that took up the plasmid survive antibiotic selection; efficiency $=$ survivors $\\div$ total plated $\\times 100$." },
            ],
            steps: [
              { reasoning: "Only plasmid-bearing cells survive on the antibiotic, so the 50 colonies represent transformed cells.", marks: 1, markCode: "M" },
              { reasoning: "Set up the percentage calculation.", working: "50 \\div 2000 \\times 100", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "2.5", marks: 1, markCode: "A" },
              { reasoning: "State the efficiency with units.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2.5\\%$",
            commonErrors: ["Dividing 2000 by 50 or forgetting to multiply by 100."],
          },
        },
        {
          id: "biohl-u3-gm-q13",
          difficulty: "core",
          paper: "2",
          totalMarks: 5,
          stem: "Describe the steps involved in constructing a recombinant plasmid containing a foreign gene.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Recombinant DNA", statement: "The same restriction enzyme cuts vector and insert to give compatible ends; ligase joins them." },
            ],
            steps: [
              { reasoning: "Select a plasmid vector carrying a selectable marker and origin of replication.", marks: 1, markCode: "M" },
              { reasoning: "Cut both the plasmid and the foreign DNA with the same restriction enzyme to produce complementary sticky ends.", marks: 1, markCode: "M" },
              { reasoning: "Mix the fragments so the insert anneals to the vector via base pairing of the overhangs.", marks: 1, markCode: "M" },
              { reasoning: "Use DNA ligase to seal the nicks, forming a stable recombinant plasmid.", marks: 1, markCode: "M" },
              { reasoning: "Introduce the recombinant plasmid into host cells, which are then selected using the marker.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Cut vector and insert with the same enzyme, anneal compatible ends, ligate, then transform and select.",
            commonErrors: ["Omitting the selectable marker or using different enzymes for vector and insert."],
          },
        },
        {
          id: "biohl-u3-gm-q14",
          difficulty: "core",
          paper: "2",
          totalMarks: 6,
          stem: "Explain how a selectable marker and antibiotic selection are used to identify bacteria that have taken up a recombinant plasmid.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Selectable marker", statement: "A marker gene (e.g. antibiotic resistance) is carried on the plasmid and expressed only in transformed cells." },
            ],
            steps: [
              { reasoning: "Not all bacteria take up the plasmid during transformation, so transformed and untransformed cells must be distinguished.", marks: 1, markCode: "M" },
              { reasoning: "The plasmid carries a marker gene such as antibiotic resistance.", marks: 1, markCode: "M" },
              { reasoning: "Bacteria are plated on medium containing the antibiotic.", marks: 1, markCode: "M" },
              { reasoning: "Only cells containing the plasmid express the resistance gene and survive.", marks: 1, markCode: "M" },
              { reasoning: "Untransformed cells lacking the plasmid are killed by the antibiotic.", marks: 1, markCode: "A" },
              { reasoning: "Each surviving colony therefore arises from a transformed cell and can be cultured for further work.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The marker confers antibiotic resistance; only plasmid-bearing cells survive on selective medium, so colonies identify transformed bacteria.",
            commonErrors: ["Claiming all bacteria are transformed — selection is needed because uptake is inefficient."],
          },
        },
        {
          id: "biohl-u3-gm-q15",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 8,
          stem: "A scientist inserts a human insulin gene into a bacterial plasmid to produce insulin in E. coli.",
          parts: [
            { label: "a", prompt: "Explain why the plasmid and the insulin gene are cut with the same restriction enzyme.", marks: 2 },
            { label: "b", prompt: "State the role of DNA ligase in forming the recombinant plasmid.", marks: 2 },
            { label: "c", prompt: "A linear DNA fragment has 3 restriction sites. Calculate the number of fragments produced after complete digestion.", marks: 2 },
            { label: "d", prompt: "Outline how transformed bacteria are identified and cultured.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Recombinant DNA", statement: "Compatible sticky ends from the same enzyme allow insertion of the foreign gene into the vector." },
              { kind: "formula", name: "Fragment count", statement: "Linear DNA cut at $k$ sites yields $k + 1$ fragments." },
            ],
            steps: [
              { part: "a", reasoning: "The same enzyme recognises the same sequence and produces matching sticky ends on both molecules.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Complementary ends allow the insulin gene to anneal into the plasmid for ligation.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "DNA ligase forms phosphodiester bonds to seal the nicks.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "This covalently joins the insert to the plasmid backbone, creating a stable recombinant molecule.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Linear DNA gives $k + 1$ fragments.", working: "3 + 1", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "4 \\text{ fragments}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Bacteria are plated on selective medium containing the antibiotic matching the marker gene.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Only transformed cells survive and form colonies, which are then cultured to produce insulin.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Compatible ends for insertion. (b) Ligase seals the recombinant plasmid. (c) $4$ fragments. (d) Antibiotic selection identifies transformed cells.",
            commonErrors: ["In (c), using the circular formula $k$ and answering 3."],
          },
        },
      ],
    },
  ],
};
