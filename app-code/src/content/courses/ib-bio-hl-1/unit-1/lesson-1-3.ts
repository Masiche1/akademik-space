import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "biohl-u1-lesson-1-3",
  code: "1-3",
  title: "Gene Expression Regulation",
  goal: "I CAN explain how transcription factors, enhancers and silencers regulate gene expression, and how epigenetic mechanisms and RNA interference provide additional control.",
  standards: ["Paper 2", "AHL D.2", "Paper 3"],
  vocabulary: [
    { term: "Transcription factor", definition: "A protein that binds to specific DNA sequences to activate or repress transcription of a gene." },
    { term: "Enhancer", definition: "A DNA sequence, often distant from the gene, that increases transcription when bound by activator proteins." },
    { term: "Silencer", definition: "A DNA sequence that decreases or represses transcription when bound by repressor proteins." },
    { term: "DNA methylation", definition: "The addition of methyl groups to cytosine bases, typically repressing gene expression when present in promoter regions." },
    { term: "Histone modification", definition: "Chemical changes (e.g. acetylation, methylation) to histone proteins that alter chromatin packing and hence gene accessibility." },
    { term: "RNA interference (RNAi)", definition: "A mechanism in which small RNA molecules (siRNA or miRNA) bind to mRNA and prevent its translation or promote its degradation." },
  ],
  concepts: [
    {
      id: "biohl-u1-transcriptional-control",
      title: "Transcriptional control: factors, enhancers and silencers",
      skill: "Explain how transcription factors, enhancers and silencers combine to switch genes on or off in response to signals.",
      lesson: {
        sections: [
          {
            heading: "Transcription factors and the promoter",
            body: "For RNA polymerase II to transcribe a gene efficiently, a set of general transcription factors must assemble at the promoter, and gene-specific activators bind nearby regulatory sequences. Repressor proteins can bind to operator or silencer sequences to block or reduce transcription. Because a cell contains the same genome in every nucleus, differential gene expression — which genes are switched on in which cells — is the basis of cell differentiation.",
          },
          {
            heading: "Enhancers and silencers",
            body: "Enhancers are regulatory DNA sequences that can lie thousands of base pairs away from the gene they control, either upstream or downstream, or even within introns. When activator proteins bind an enhancer, DNA looping brings the enhancer close to the promoter so that the activators can interact with the transcription machinery and strongly increase transcription. Silencers work in the opposite way: bound repressors reduce or abolish transcription. The same gene can therefore be expressed at different levels in different tissues depending on which transcription factors are present.",
          },
          {
            heading: "Combinatorial control",
            body: "Real genes are controlled by combinations of inputs: several enhancers, silencers and the promoter-proximal elements all contribute. An activator may be tissue-specific, a repressor may respond to a hormone or metabolite, and the net output is the integrated result. This combinatorial logic allows a relatively small number of transcription factors to generate highly specific expression patterns during development.",
          },
        ],
        keyFormulas: [
          { name: "Regulatory logic", statement: "A gene is expressed only when the correct combination of activators is present and repressors are absent or displaced." },
          { name: "Distance independence", statement: "Enhancers act over long distances because DNA looping physically juxtaposes them with the promoter." },
          { name: "Expression logic", statement: "Expression $=$ activators bound AND repressors absent AND basal machinery assembled." },
        ],
        workedExample: {
          problem: "A gene has an enhancer 50 000 bp upstream of its promoter. Explain how binding of an activator to this distant enhancer can still increase transcription of the gene.",
          solution: "The DNA between the enhancer and promoter loops so that the bound activator is brought into contact with transcription factors assembled at the promoter, recruiting or stabilising RNA polymerase II and boosting transcription.",
        },
      },
      questions: [
        {
          id: "biohl-u1-tf-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Which type of DNA sequence increases the rate of transcription of a gene when bound by activator proteins, even when located far from the promoter?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Telomere" },
              { id: "b", text: "Operator only" },
              { id: "c", text: "Enhancer" },
              { id: "d", text: "Silencer" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Enhancer", statement: "A regulatory DNA sequence that increases transcription when bound by activators, acting over long distances via DNA looping." },
            ],
            steps: [
              { reasoning: "Activators bound at enhancers stimulate transcription from a distance.", marks: 1, markCode: "M" },
              { reasoning: "Silencers repress; operators and telomeres do not fit the description.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Enhancer",
            commonErrors: ["Choosing silencer, which decreases rather than increases transcription."],
          },
        },
        {
          id: "biohl-u1-tf-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A particular gene is transcribed only when activator protein X is bound at its enhancer and repressor protein Y is absent. In cell type A, protein X is present but protein Y is also present; in cell type B, X is present and Y is absent. Predict and explain the pattern of gene expression in the two cell types.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Combinatorial control", statement: "Gene expression depends on the combination of activators present and repressors absent at regulatory sequences." },
            ],
            steps: [
              { reasoning: "Both conditions are required: activator X bound and repressor Y absent.", marks: 1, markCode: "R" },
              { reasoning: "In cell type A, Y is present and represses transcription even though X is bound, so the gene is off.", marks: 1, markCode: "M" },
              { reasoning: "In cell type B, X is present and Y is absent, so both conditions are met and the gene is expressed.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Off in cell type A (repressor present); on in cell type B (activator present, repressor absent).",
            commonErrors: ["Ignoring the repressor and predicting expression in both cell types."],
          },
        },
        {
          id: "biohl-u1-tf-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Explain how two genetically identical cells can express different sets of genes and therefore differentiate into different cell types.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Differential gene expression", statement: "All cells of an organism share the same genome; cell identity is determined by which genes are transcribed." },
              { kind: "principle", name: "Regulatory combinations", statement: "Different combinations of transcription factors, enhancers and silencers produce tissue-specific expression patterns." },
            ],
            steps: [
              { reasoning: "Every nucleus contains the same DNA, so the difference must lie in gene regulation rather than genome content.", marks: 1, markCode: "R" },
              { reasoning: "During development, signalling molecules induce different transcription factors in different cell lineages.", marks: 1, markCode: "M" },
              { reasoning: "Each cell type expresses only the subset of genes whose regulatory sequences match its transcription-factor profile.", marks: 1, markCode: "A" },
              { reasoning: "The resulting different proteins give each cell type its specialised structure and function.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Identical genomes are differentially expressed through cell-specific transcription-factor combinations, producing different cell types.",
            commonErrors: ["Claiming different cells contain different genes — they contain the same genome."],
          },
        },
        {
          id: "biohl-u1-tf-q4",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 8,
          stem: "A gene $G$ has an enhancer located 80 000 bp away from its promoter. Activator protein $A$ binds the enhancer; repressor protein $R$ can bind a silencer near the promoter.",
          parts: [
            { label: "a", prompt: "Explain how the enhancer can influence transcription even though it is 80 000 bp from the promoter.", marks: 2 },
            { label: "b", prompt: "State the effect on transcription of (i) activator $A$ binding alone, and (ii) repressor $R$ binding alone.", marks: 2 },
            { label: "c", prompt: "In a particular tissue neither $A$ nor $R$ is produced. Predict the likely level of transcription of gene $G$ and justify your prediction.", marks: 2 },
            { label: "d", prompt: "Suggest one advantage to an organism of regulating genes through distant enhancers rather than only through promoter-proximal sequences.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "DNA looping", statement: "DNA can loop so that a distant enhancer is physically juxtaposed with the promoter and its bound activators." },
              { kind: "principle", name: "Combinatorial regulation", statement: "Multiple regulatory inputs (activators and repressors at different sites) integrate to set expression level." },
            ],
            steps: [
              { part: "a", reasoning: "The intervening DNA loops, bringing the enhancer-bound activator into contact with the promoter region.", marks: 1, markCode: "R" },
              { part: "a", reasoning: "The activator then interacts with the transcription machinery to increase transcription.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "(i) $A$ binding alone increases transcription of $G$.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "(ii) $R$ binding alone decreases or represses transcription of $G$.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "With neither factor present, the gene is expressed only at its basal level.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "There is no activator to boost transcription and no repressor to silence it, so a low background level results.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Distant enhancers allow several regulatory inputs to be integrated independently of the promoter.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "This gives finer, tissue-specific control — different enhancers can be used in different cell types.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) DNA looping juxtaposes enhancer and promoter. (b) (i) increased; (ii) decreased. (c) Basal/low expression. (d) Independent, combinatorial tissue-specific control.",
            commonErrors: ["Claiming enhancers must be adjacent to the promoter to work.", "In (c), predicting zero expression — basal transcription still occurs."],
          },
        },
        {
          id: "biohl-u1-tf-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A silencer is a DNA sequence that:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Codes for a transcription factor" },
              { id: "b", text: "Increases transcription when bound by activators" },
              { id: "c", text: "Decreases or represses transcription when bound by repressors" },
              { id: "d", text: "Is removed during mRNA splicing" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Silencer", statement: "A regulatory DNA sequence that reduces or represses transcription when bound by repressor proteins." },
            ],
            steps: [
              { reasoning: "Silencers are bound by repressors rather than activators.", marks: 1, markCode: "M" },
              { reasoning: "Their effect is inhibitory, so choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Decreases or represses transcription",
            commonErrors: ["Confusing silencers with enhancers."],
          },
        },
        {
          id: "biohl-u1-tf-q6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Transcription factors regulate genes primarily by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Splicing introns from mRNA" },
              { id: "b", text: "Binding specific DNA sequences and altering transcription" },
              { id: "c", text: "Adding telomeric repeats" },
              { id: "d", text: "Changing the DNA sequence of the gene" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Transcription factor", statement: "A protein that binds specific regulatory DNA sequences to activate or repress transcription." },
            ],
            steps: [
              { reasoning: "Transcription factors are sequence-specific DNA-binding proteins.", marks: 1, markCode: "M" },
              { reasoning: "They regulate expression without changing the DNA sequence, so (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Binding specific DNA sequences to alter transcription",
            commonErrors: ["Claiming transcription factors mutate the gene."],
          },
        },
        {
          id: "biohl-u1-tf-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "DNA looping allows a distant enhancer to affect transcription because it:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Moves the enhancer physically close to the promoter" },
              { id: "b", text: "Changes the promoter into an exon" },
              { id: "c", text: "Prevents RNA polymerase from binding" },
              { id: "d", text: "Deletes the introns between enhancer and gene" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "DNA looping", statement: "The intervening DNA can loop so enhancer-bound activators contact the promoter region." },
            ],
            steps: [
              { reasoning: "Looping brings distant regulatory elements into three-dimensional proximity.", marks: 1, markCode: "M" },
              { reasoning: "This lets enhancer-bound activators influence the transcription machinery, so (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** It brings the enhancer close to the promoter",
            commonErrors: ["Thinking enhancers must be adjacent in linear sequence to work."],
          },
        },
        {
          id: "biohl-u1-tf-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Basal transcription of a gene refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The low level of transcription occurring without specific activators" },
              { id: "b", text: "Maximum transcription driven by all enhancers" },
              { id: "c", text: "Transcription after all introns are removed" },
              { id: "d", text: "Replication of telomeric DNA" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Basal transcription", statement: "The minimal transcription that occurs when general factors are present but specific activators are absent." },
            ],
            steps: [
              { reasoning: "Basal expression is the background level set by the core promoter machinery.", marks: 1, markCode: "M" },
              { reasoning: "Activators increase above basal and repressors decrease below it, so (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Low transcription without specific activators",
            commonErrors: ["Confusing basal transcription with activated transcription."],
          },
        },
        {
          id: "biohl-u1-tf-q9",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Two cells in the same organism contain identical DNA but produce different proteins. The most likely explanation is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The genetic code differs between cell types" },
              { id: "b", text: "One cell has lost all its introns" },
              { id: "c", text: "They have different numbers of chromosomes" },
              { id: "d", text: "Different transcription-factor combinations regulate different genes" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Differential gene expression", statement: "Cell identity arises from which genes are transcribed, not from differences in genome sequence." },
            ],
            steps: [
              { reasoning: "The genome is the same in all cells of the organism.", marks: 1, markCode: "M" },
              { reasoning: "Cell-specific regulators switch different genes on, so (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Different transcription-factor combinations",
            commonErrors: ["Claiming differentiated cells contain different genes."],
          },
        },
        {
          id: "biohl-u1-tf-q10",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "A gene is controlled by 4 activator binding sites and 2 repressor binding sites. Each site is either bound or unbound. Calculate (i) the total number of possible binding states and (ii) the number of states in which all activators are bound and no repressors are bound.",
          response: { type: "numeric", parts: [{ label: "Total binding states", answer: 64 }, { label: "Fully activated states", answer: 1 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Combinatorial states", statement: "For $a$ binary activator sites and $r$ binary repressor sites, total states $= 2^{a+r}$." },
            ],
            steps: [
              { reasoning: "There are six binary sites in total.", working: "4 + 2", marks: 1, markCode: "M" },
              { reasoning: "Each site has two states, giving $2^6$ combinations.", working: "2^6", marks: 1, markCode: "M" },
              { reasoning: "Evaluate the total states.", working: "64", marks: 1, markCode: "A" },
              { reasoning: "The fully activated state requires all four activators bound and both repressors unbound: one state.", working: "1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$64$ states; $1$ fully activated state",
            commonErrors: ["Using $2^4 + 2^2$ instead of multiplying the independent binary choices."],
          },
        },
        {
          id: "biohl-u1-tf-q11",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "A gene has a basal transcription rate of 2 units per minute. Binding of an activator at an enhancer increases transcription 8-fold. A repressor can then reduce the activated rate to 25% of its value. Calculate (i) the activated transcription rate and (ii) the final rate when the repressor is also bound.",
          response: { type: "numeric", parts: [{ label: "Activated rate (units/min)", answer: 16 }, { label: "Final rate (units/min)", answer: 4 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Regulatory arithmetic", statement: "Activated rate $= $ basal $\\times$ fold increase; repressed rate $= $ activated $\\times$ remaining fraction." },
            ],
            steps: [
              { reasoning: "Multiply basal rate by the enhancer fold increase.", working: "2 * 8", marks: 1, markCode: "M" },
              { reasoning: "Evaluate the activated rate.", working: "16", marks: 1, markCode: "A" },
              { reasoning: "Multiply the activated rate by 0.25 for the repressor.", working: "16 * 0.25", marks: 1, markCode: "M" },
              { reasoning: "Evaluate the final rate.", working: "4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$16$ units/min activated; $4$ units/min with repressor bound",
            commonErrors: ["Applying the 25% reduction to the basal rate rather than the activated rate."],
          },
        },
        {
          id: "biohl-u1-tf-q12",
          difficulty: "foundation",
          paper: "2",
          totalMarks: 2,
          stem: "Three genes can each be either switched on or off in a cell. Assuming all combinations are possible, calculate the number of possible gene-expression patterns.",
          response: { type: "numeric", parts: [{ label: "Number of expression patterns", answer: 8 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Binary expression patterns", statement: "For $n$ genes with two states each, patterns $= 2^n$." },
            ],
            steps: [
              { reasoning: "Each of the three genes has two possible states.", working: "2^3", marks: 1, markCode: "M" },
              { reasoning: "Evaluate the number of combinations.", working: "8", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$8$ possible patterns",
            commonErrors: ["Adding the gene numbers instead of raising 2 to the power of 3."],
          },
        },
        {
          id: "biohl-u1-tf-q13",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Without repression, a gene is transcribed at 500 units per minute. A silencer-bound repressor reduces transcription by 60%. Calculate (i) the percentage of transcription remaining and (ii) the final transcription rate.",
          response: { type: "numeric", parts: [{ label: "Percentage remaining", answer: 40 }, { label: "Final rate (units/min)", answer: 200 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Repression arithmetic", statement: "Remaining fraction $= 1 - $ fractional reduction; final rate $= $ original rate $\\times$ remaining fraction." },
            ],
            steps: [
              { reasoning: "A 60% reduction leaves 40% activity.", working: "100 - 60", marks: 1, markCode: "M" },
              { reasoning: "Evaluate the percentage.", working: "40", marks: 1, markCode: "A" },
              { reasoning: "Multiply 500 by 0.40.", working: "500 * 0.40", marks: 1, markCode: "M" },
              { reasoning: "Evaluate the rate.", working: "200", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$40\\%$ remains; final rate $200$ units/min",
            commonErrors: ["Answering 60% remaining instead of 40%."],
          },
        },
        {
          id: "biohl-u1-tf-q14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "A gene requires at least 2 of 4 different activators to be bound for full expression. Calculate (i) the number of ways exactly 2 activators can be bound, and (ii) the total number of activator-binding combinations that meet the threshold.",
          response: { type: "numeric", parts: [{ label: "Exactly two activators bound", answer: 6 }, { label: "At least two activators bound", answer: 11 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Combinations", statement: "The number of ways to choose $k$ activators from $n$ is $C(n,k) = n!/(k!(n-k)!)$." },
            ],
            steps: [
              { reasoning: "Exactly two of four activators can be chosen in $C(4,2)$ ways.", working: "C(4,2)", marks: 1, markCode: "M" },
              { reasoning: "Evaluate $C(4,2) = 6$.", working: "6", marks: 1, markCode: "A" },
              { reasoning: "At least two includes exactly two, three or four: $6 + 4 + 1$.", working: "6 + 4 + 1", marks: 1, markCode: "M" },
              { reasoning: "Evaluate the threshold total.", working: "11", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$6$ ways for exactly two; $11$ combinations meet the threshold",
            commonErrors: ["Answering only 6 for part (ii) and forgetting three- and four-activator combinations."],
          },
        },
        {
          id: "biohl-u1-tf-q15",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 6,
          stem: "Explain how transcription factors, enhancers and silencers cooperate to regulate the expression of a eukaryotic gene.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Combinatorial regulation", statement: "Multiple regulatory inputs integrate at a gene to set its expression level in a cell type." },
            ],
            steps: [
              { reasoning: "General transcription factors assemble at the promoter to position RNA polymerase II.", marks: 1, markCode: "M" },
              { reasoning: "Gene-specific activators bind enhancers and can increase transcription strongly.", marks: 1, markCode: "M" },
              { reasoning: "DNA looping brings distant enhancer-bound activators into contact with the promoter machinery.", marks: 1, markCode: "A" },
              { reasoning: "Repressors bound at silencers reduce or block transcription.", marks: 1, markCode: "M" },
              { reasoning: "The final expression level depends on which activators and repressors are present in that cell.", marks: 1, markCode: "A" },
              { reasoning: "This combinatorial control produces tissue-specific and signal-responsive gene expression.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Promoter factors set basal transcription; enhancers activate and silencers repress, with looping enabling distant inputs to integrate.",
            commonErrors: ["Treating enhancers and silencers as coding sequences rather than regulatory elements."],
          },
        },
        {
          id: "biohl-u1-tf-q16",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 8,
          stem: "Gene $H$ has an enhancer 60 000 bp upstream and a silencer 5 000 bp downstream of its promoter. Activator $A$ is produced only in liver cells; repressor $R$ is produced only after a hormone signal.",
          parts: [
            { label: "a", prompt: "Explain how the distant enhancer can regulate gene $H$.", marks: 2 },
            { label: "b", prompt: "Predict the expression of $H$ in a liver cell before the hormone signal and justify your answer.", marks: 2 },
            { label: "c", prompt: "Predict the effect of the hormone signal on $H$ in the same liver cell.", marks: 2 },
            { label: "d", prompt: "Explain why the same gene can be expressed differently in liver and muscle cells.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "DNA looping", statement: "Distant enhancers act by bringing bound activators into proximity with the promoter." },
              { kind: "principle", name: "Signal-dependent repression", statement: "Hormone-induced repressors can override activator-driven expression." },
            ],
            steps: [
              { part: "a", reasoning: "DNA between the enhancer and promoter loops to juxtapose the bound activator with promoter factors.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "The activator then recruits or stabilises RNA polymerase II to increase transcription.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "In liver cells activator $A$ is present and binds the enhancer.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Repressor $R$ is absent before the hormone signal, so $H$ is activated.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "The hormone induces $R$, which binds the silencer.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Repression reduces or switches off transcription despite the enhancer.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Muscle cells lack liver-specific activator $A$, so the enhancer cannot activate $H$.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Different transcription-factor profiles therefore produce tissue-specific expression.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Looping brings enhancer activator to promoter. (b) Expressed. (c) Repressed after hormone. (d) Tissue-specific factors differ.",
            commonErrors: ["Ignoring distance dependence of enhancers or assuming all cells express $A$."],
          },
        },
      ],
    },
    {
      id: "biohl-u1-epigenetic-control",
      title: "Epigenetic and post-transcriptional control",
      skill: "Describe how DNA methylation, histone modification and RNA interference regulate gene expression without changing the DNA sequence.",
      lesson: {
        sections: [
          {
            heading: "Epigenetic marks",
            body: "Epigenetic regulation alters gene accessibility without changing the DNA sequence. Methylation of cytosine bases, especially in CpG islands of promoters, generally represses transcription by blocking transcription-factor binding and promoting compact chromatin. Histone proteins can be chemically modified — acetylation of histones loosens chromatin and activates genes, while methylation can activate or repress depending on the site. These marks can be inherited through cell division (and sometimes transgenerationally), making epigenetics central to development and disease.",
          },
          {
            heading: "RNA interference",
            body: "Small interfering RNAs (siRNAs) and microRNAs (miRNAs) provide post-transcriptional control. siRNAs are perfectly complementary to a target mRNA and direct its cleavage; miRNAs are partially complementary and typically repress translation or promote deadenylation and decay of the mRNA. Because one miRNA can target many mRNAs, RNAi is a powerful mechanism for fine-tuning gene expression and is exploited experimentally to knock down genes.",
          },
          {
            heading: "Epigenetic inheritance",
            body: "Epigenetic marks are copied when cells divide: maintenance methyltransferases recognise the methylated parent strand and methylate the corresponding cytosine on the new strand, preserving the pattern through mitosis. This means a cell's gene-expression state can be transmitted to its daughter cells — the basis of cellular memory in development. Environmental factors can sometimes alter these marks, linking environment to long-term gene regulation.",
          },
        ],
        keyFormulas: [
          { name: "Methylation effect", statement: "Methylated promoter CpG islands are associated with condensed chromatin and transcriptional repression." },
          { name: "RNAi specificity", statement: "siRNA targets one mRNA by perfect complementarity; miRNAs repress many targets by partial complementarity." },
          { name: "Maintenance methylation", statement: "Methylation patterns are copied to daughter strands during DNA replication, preserving expression states through cell division." },
        ],
        workedExample: {
          problem: "A researcher treats cells with a drug that increases histone acetylation. Predict the effect on the expression of genes whose promoters were previously repressed by condensed chromatin, and justify the prediction.",
          solution: "Histone acetylation neutralises positive charges on histones, loosening chromatin and exposing promoter DNA to transcription factors. Previously repressed genes should show increased transcription.",
        },
      },
      questions: [
        {
          id: "biohl-u1-epigenetic-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Which epigenetic modification is most strongly associated with transcriptional repression when present in the CpG islands of a gene promoter?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Histone acetylation" },
              { id: "b", text: "DNA methylation" },
              { id: "c", text: "Poly-A tailing" },
              { id: "d", text: "Alternative splicing" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "DNA methylation", statement: "Addition of methyl groups to cytosine, typically repressing genes when occurring in promoter CpG islands." },
            ],
            steps: [
              { reasoning: "Methylated promoter CpG islands recruit proteins that compact chromatin and block transcription factors.", marks: 1, markCode: "M" },
              { reasoning: "Histone acetylation activates; splicing and tailing are unrelated to this repression.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** DNA methylation",
            commonErrors: ["Choosing histone acetylation, which generally activates transcription."],
          },
        },
        {
          id: "biohl-u1-epigenetic-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A sample of genomic DNA is found to have 30% of its cytosine bases methylated. A particular gene promoter contains 400 cytosine bases in its CpG island. Assuming the same methylation frequency applies, calculate the expected number of methylated cytosines in that promoter.",
          response: { type: "numeric", parts: [{ label: "Expected methylated cytosines", answer: 120 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Expected count", statement: "$N = f \\times T$ for methylation frequency $f$ and total cytosines $T$." },
            ],
            steps: [
              { reasoning: "Multiply the total cytosines by the methylation frequency.", working: "0.30 \\times 400", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "120", marks: 1, markCode: "A" },
              { reasoning: "State the assumption that the global frequency applies locally.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "$120$ methylated cytosines",
            commonErrors: ["Using 30 instead of 0.30 as the frequency, giving 12 000.", "Assuming every cytosine in a CpG island is methylated."],
          },
        },
        {
          id: "biohl-u1-epigenetic-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Compare and contrast DNA methylation and histone acetylation as mechanisms of epigenetic gene regulation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "DNA methylation", statement: "Methylation of cytosine bases, usually at CpG sites, which represses transcription." },
              { kind: "definition", name: "Histone acetylation", statement: "Acetylation of histone tails neutralises positive charge, loosening chromatin and activating transcription." },
            ],
            steps: [
              { reasoning: "Both are epigenetic marks: they alter gene expression without changing the DNA sequence.", marks: 1, markCode: "R" },
              { reasoning: "DNA methylation acts directly on DNA and is generally associated with repression.", marks: 1, markCode: "A" },
              { reasoning: "Histone acetylation acts on histone proteins and generally opens chromatin to activate genes.", marks: 1, markCode: "A" },
              { reasoning: "They differ in target (DNA vs protein) and typical effect (repression vs activation), though context matters for both.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Both are sequence-independent epigenetic controls; methylation of DNA represses, while histone acetylation opens chromatin and activates.",
            commonErrors: ["Treating the two mechanisms as having identical effects.", "Claiming epigenetic changes alter the DNA sequence."],
          },
        },
        {
          id: "biohl-u1-epigenetic-q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "A researcher introduces small interfering RNAs (siRNAs) that are perfectly complementary to the mRNA of gene $X$ into a cell culture.",
          parts: [
            { label: "a", prompt: "Explain the mechanism by which siRNA reduces expression of gene $X$.", marks: 2 },
            { label: "b", prompt: "Distinguish between siRNA and miRNA in terms of complementarity and typical effect.", marks: 2 },
            { label: "c", prompt: "After treatment, the level of protein X falls to 25% of its original value. Calculate the percentage reduction in protein X.", marks: 2 },
            { label: "d", prompt: "Suggest why RNA interference is a useful experimental tool for studying gene function.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "RNA interference", statement: "Small RNAs guide the cell to destroy or silence complementary mRNA molecules." },
              { kind: "principle", name: "Post-transcriptional control", statement: "Reducing mRNA levels or translation lowers the amount of protein produced." },
            ],
            steps: [
              { part: "a", reasoning: "The siRNA is loaded into the RISC complex, which uses it as a guide.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Perfect complementarity directs cleavage of the target mRNA, so less protein X is made.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "siRNAs are perfectly complementary to a single target and usually cause mRNA cleavage.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "miRNAs are partially complementary, can target many mRNAs, and typically repress translation or promote decay.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "The reduction is $100 - 25 = 75$%.", working: "100 - 25", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "75\\%", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Knocking down a specific gene lets researchers observe the resulting loss of function.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Because the DNA is unchanged, the effect is reversible and specific to the targeted mRNA.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) RISC-guided cleavage of target mRNA. (b) siRNA perfect/single target vs miRNA partial/many targets. (c) $75\\%$ reduction. (d) Specific, reversible gene knockdown.",
            commonErrors: ["In (c), answering 25% — that is the remaining level, not the reduction.", "Claiming siRNA changes the DNA sequence of gene X."],
          },
        },
        {
          id: "biohl-u1-epigenetic-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Histone acetylation generally affects transcription by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Methylating cytosine bases in the promoter" },
              { id: "b", text: "Loosening chromatin and increasing access for transcription factors" },
              { id: "c", text: "Removing exons from mRNA" },
              { id: "d", text: "Shortening telomeres" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Histone acetylation", statement: "Acetylation of histone tails neutralises positive charge, loosening chromatin and usually activating transcription." },
            ],
            steps: [
              { reasoning: "Acetyl groups reduce histone–DNA attraction and open chromatin.", marks: 1, markCode: "M" },
              { reasoning: "Open chromatin exposes promoters to transcription factors, so (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Loosens chromatin and increases transcription-factor access",
            commonErrors: ["Confusing histone acetylation with DNA methylation."],
          },
        },
        {
          id: "biohl-u1-epigenetic-q6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Highly condensed heterochromatin is usually associated with:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Active transcription of all genes" },
              { id: "b", text: "Increased translation of mRNA" },
              { id: "c", text: "Removal of RNA primers" },
              { id: "d", text: "Transcriptional repression because DNA is less accessible" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Chromatin accessibility", statement: "Condensed chromatin limits transcription-factor access and generally represses transcription." },
            ],
            steps: [
              { reasoning: "Heterochromatin is tightly packed and less accessible.", marks: 1, markCode: "M" },
              { reasoning: "Reduced access represses genes, so choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Transcriptional repression",
            commonErrors: ["Assuming all chromatin is equally accessible to transcription factors."],
          },
        },
        {
          id: "biohl-u1-epigenetic-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "siRNA differs from miRNA mainly because siRNA is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Perfectly complementary and typically directs cleavage of a target mRNA" },
              { id: "b", text: "Partially complementary and targets many mRNAs" },
              { id: "c", text: "Synthesised only in the nucleus" },
              { id: "d", text: "A DNA methyltransferase" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "siRNA", statement: "A small interfering RNA perfectly complementary to a target mRNA, directing its cleavage by RISC." },
            ],
            steps: [
              { reasoning: "Perfect complementarity makes siRNA highly specific.", marks: 1, markCode: "M" },
              { reasoning: "The RISC complex cleaves the perfectly matched mRNA, so (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Perfectly complementary and directs cleavage",
            commonErrors: ["Reversing siRNA and miRNA properties."],
          },
        },
        {
          id: "biohl-u1-epigenetic-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "miRNAs typically regulate gene expression by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Binding perfectly to one mRNA and cleaving it immediately" },
              { id: "b", text: "Adding introns to pre-mRNA" },
              { id: "c", text: "Partially pairing with many mRNAs and repressing translation or promoting decay" },
              { id: "d", text: "Methylating promoter CpG islands" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "miRNA", statement: "A microRNA that partially base-pairs with target mRNAs to repress translation or promote degradation." },
            ],
            steps: [
              { reasoning: "miRNA pairing is usually incomplete, especially at the $5'$ end.", marks: 1, markCode: "M" },
              { reasoning: "It can regulate many targets and typically lowers protein output, so (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Partial pairing represses translation or promotes decay",
            commonErrors: ["Claiming miRNAs cleave a single perfectly matched target like siRNAs."],
          },
        },
        {
          id: "biohl-u1-epigenetic-q9",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Epigenetic marks such as DNA methylation can be inherited through cell division because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The DNA sequence itself is changed" },
              { id: "b", text: "Telomerase adds methyl groups" },
              { id: "c", text: "mRNA is reverse-transcribed into DNA" },
              { id: "d", text: "Maintenance enzymes copy methylation patterns to daughter strands" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Maintenance methylation", statement: "After replication, methyltransferases recognise methylated parental strands and methylate corresponding cytosines on new strands." },
            ],
            steps: [
              { reasoning: "The sequence is unchanged; only chemical marks are copied.", marks: 1, markCode: "M" },
              { reasoning: "Maintenance methylation preserves expression states through mitosis, so (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Maintenance enzymes copy methylation patterns",
            commonErrors: ["Confusing epigenetic inheritance with mutation of the DNA sequence."],
          },
        },
        {
          id: "biohl-u1-epigenetic-q10",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "A genome contains 2 500 cytosine bases. If 18% of cytosines are methylated, calculate the expected number of methylated cytosines.",
          response: { type: "numeric", parts: [{ label: "Methylated cytosines", answer: 450 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Expected methylation", statement: "$N = fC$ where $f$ is the methylation fraction and $C$ the cytosine count." },
            ],
            steps: [
              { reasoning: "Convert 18% to a decimal and multiply by 2 500.", working: "0.18 * 2500", marks: 1, markCode: "M" },
              { reasoning: "Evaluate the product.", working: "450", marks: 1, markCode: "A" },
              { reasoning: "State that this assumes the global frequency applies uniformly.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "$450$ methylated cytosines",
            commonErrors: ["Using 18 instead of 0.18 as the fraction."],
          },
        },
        {
          id: "biohl-u1-epigenetic-q11",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Histone acetylation increases transcription of gene $P$ from 40 units to three times its basal level. Separately, promoter methylation reduces gene $Q$ from 200 units to 50% of its original level. Calculate (i) the activated rate of $P$ and (ii) the final rate of $Q$.",
          response: { type: "numeric", parts: [{ label: "Activated rate of P", answer: 120 }, { label: "Final rate of Q", answer: 100 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Fold-change arithmetic", statement: "New rate $= $ basal rate $\\times$ fold change or remaining fraction." },
            ],
            steps: [
              { reasoning: "Multiply the basal rate of $P$ by 3.", working: "40 * 3", marks: 1, markCode: "M" },
              { reasoning: "Evaluate the activated rate.", working: "120", marks: 1, markCode: "A" },
              { reasoning: "Multiply the rate of $Q$ by 0.50.", working: "200 * 0.50", marks: 1, markCode: "M" },
              { reasoning: "Evaluate the final rate.", working: "100", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$P = 120$ units; $Q = 100$ units",
            commonErrors: ["Applying methylation as a fold increase rather than a 50% reduction."],
          },
        },
        {
          id: "biohl-u1-epigenetic-q12",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "A 10 000 bp region contains one CpG site every 200 bp. If 20% of CpG sites are methylated, calculate (i) the number of CpG sites and (ii) the number of methylated CpG sites.",
          response: { type: "numeric", parts: [{ label: "Number of CpG sites", answer: 50 }, { label: "Methylated CpG sites", answer: 10 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Site counts", statement: "CpG sites $= L/d$; methylated sites $= 0.20 \\times$ CpG sites." },
            ],
            steps: [
              { reasoning: "Divide the region length by the spacing between CpG sites.", working: "10000 / 200", marks: 1, markCode: "M" },
              { reasoning: "Evaluate the site count.", working: "50", marks: 1, markCode: "A" },
              { reasoning: "Multiply the site count by 0.20.", working: "50 * 0.20", marks: 1, markCode: "M" },
              { reasoning: "Evaluate the methylated count.", working: "10", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$50$ CpG sites; $10$ methylated CpG sites",
            commonErrors: ["Counting every cytosine rather than only CpG dinucleotides."],
          },
        },
        {
          id: "biohl-u1-epigenetic-q13",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "A cell contains 500 molecules of target mRNA. Treatment with siRNA reduces the mRNA level to 30% of the original amount. Calculate (i) the number of mRNA molecules remaining and (ii) the number degraded.",
          response: { type: "numeric", parts: [{ label: "mRNA molecules remaining", answer: 150 }, { label: "mRNA molecules degraded", answer: 350 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Remaining fraction", statement: "Remaining $= f \\times N_0$; degraded $= N_0 - $ remaining." },
            ],
            steps: [
              { reasoning: "Multiply the original mRNA count by 0.30.", working: "500 * 0.30", marks: 1, markCode: "M" },
              { reasoning: "Evaluate the remaining molecules.", working: "150", marks: 1, markCode: "A" },
              { reasoning: "Subtract remaining from the original count.", working: "500 - 150", marks: 1, markCode: "M" },
              { reasoning: "Evaluate the degraded molecules.", working: "350", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$150$ mRNA molecules remain; $350$ degraded",
            commonErrors: ["Answering 30 molecules instead of 30% of 500."],
          },
        },
        {
          id: "biohl-u1-epigenetic-q14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "A drug increases histone acetylation, raising gene $R$ transcription four-fold from 25 units per minute. Promoter methylation can then reduce the rate to 60% of the acetylated value. Calculate (i) the acetylated rate and (ii) the rate if methylation is also present.",
          response: { type: "numeric", parts: [{ label: "Acetylated rate", answer: 100 }, { label: "Rate with methylation", answer: 60 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Sequential regulation", statement: "Apply fold changes in order: acetylated rate $= 4 \\times$ basal; methylated rate $= 0.60 \\times$ acetylated." },
            ],
            steps: [
              { reasoning: "Multiply the basal rate by 4.", working: "25 * 4", marks: 1, markCode: "M" },
              { reasoning: "Evaluate the acetylated rate.", working: "100", marks: 1, markCode: "A" },
              { reasoning: "Multiply the acetylated rate by 0.60.", working: "100 * 0.60", marks: 1, markCode: "M" },
              { reasoning: "Evaluate the combined rate.", working: "60", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$100$ units/min acetylated; $60$ units/min with methylation",
            commonErrors: ["Applying the 60% reduction to the basal 25 instead of the acetylated 100."],
          },
        },
        {
          id: "biohl-u1-epigenetic-q15",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 6,
          stem: "Compare DNA methylation and histone modification as epigenetic mechanisms that control gene expression without altering the DNA sequence.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "comparison", name: "Epigenetic marks", statement: "DNA methylation acts on cytosine bases, whereas histone modifications act on chromatin proteins; both alter accessibility without changing sequence." },
            ],
            steps: [
              { reasoning: "Both are epigenetic because they change gene expression without changing the DNA sequence.", marks: 1, markCode: "M" },
              { reasoning: "DNA methylation adds methyl groups to cytosine, especially at promoter CpG islands.", marks: 1, markCode: "M" },
              { reasoning: "Methylated promoters are generally associated with condensed chromatin and repression.", marks: 1, markCode: "A" },
              { reasoning: "Histone acetylation loosens chromatin and usually activates transcription.", marks: 1, markCode: "M" },
              { reasoning: "Histone methylation can activate or repress depending on the residue and site.", marks: 1, markCode: "A" },
              { reasoning: "Both can be copied through cell division, allowing stable gene-expression states.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Methylation targets DNA and usually represses; histone modifications target chromatin and can activate or repress depending on the mark.",
            commonErrors: ["Claiming epigenetic marks change the DNA sequence or treating all histone methylation as activating."],
          },
        },
        {
          id: "biohl-u1-epigenetic-q16",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 8,
          stem: "A promoter CpG island has 200 cytosine bases. Normally 25% are methylated. A drug reduces methylation so only 5% are methylated.",
          parts: [
            { label: "a", prompt: "Calculate the number of methylated cytosines before and after drug treatment.", marks: 2 },
            { label: "b", prompt: "Explain the likely effect of the drug on transcription of the gene.", marks: 2 },
            { label: "c", prompt: "Distinguish siRNA from miRNA.", marks: 2 },
            { label: "d", prompt: "Explain how an epigenetic mark can be inherited by daughter cells.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Methylation count", statement: "Methylated cytosines $= $ fraction $\\times 200$." },
              { kind: "principle", name: "Epigenetic inheritance", statement: "Methylation patterns are copied to daughter strands during DNA replication." },
            ],
            steps: [
              { part: "a", reasoning: "Before treatment, $0.25 \\times 200 = 50$ methylated cytosines.", working: "0.25 * 200", marks: 1, markCode: "M" },
              { part: "a", reasoning: "After treatment, $0.05 \\times 200 = 10$ methylated cytosines.", working: "0.05 * 200", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Less promoter methylation reduces repression and opens chromatin.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Transcription of the gene should therefore increase.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "siRNA is perfectly complementary to one target mRNA and usually causes cleavage.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "miRNA is partially complementary, can target many mRNAs and mainly represses translation or promotes decay.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Maintenance methyltransferases recognise methylated parental strands after replication.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "They methylate the corresponding cytosines on new strands, preserving the expression pattern.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $50$ before, $10$ after. (b) Transcription likely increases. (c) siRNA perfect/specific vs miRNA partial/broad. (d) Maintenance methylation copies marks.",
            commonErrors: ["In (a), reporting percentages rather than cytosine counts."],
          },
        },
      ],
    },
  ],
};
