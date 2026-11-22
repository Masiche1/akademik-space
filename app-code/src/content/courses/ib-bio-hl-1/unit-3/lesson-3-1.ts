import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "biohl-u3-lesson-3-1",
  code: "3-1",
  title: "Chromosomes, Meiosis and Inheritance in Detail",
  goal: "I CAN describe chromosome structure and the stages of meiosis, and analyse non-Mendelian inheritance patterns including linkage, codominance and sex linkage.",
  standards: ["Paper 1", "Paper 2", "AHL E.1"],
  vocabulary: [
    { term: "Chromatid", definition: "One of the two identical copies of a duplicated chromosome joined at the centromere; sister chromatids separate in mitosis and meiosis II." },
    { term: "Crossing over", definition: "The exchange of genetic material between non-sister chromatids of homologous chromosomes during prophase I of meiosis." },
    { term: "Nondisjunction", definition: "The failure of homologous chromosomes (meiosis I) or sister chromatids (meiosis II) to separate, producing gametes with abnormal chromosome numbers." },
    { term: "Linkage", definition: "The tendency of genes located close together on the same chromosome to be inherited together." },
    { term: "Recombination frequency", definition: "The proportion of offspring showing recombination between two linked genes; used to estimate map distance in centimorgans." },
    { term: "Codominance", definition: "A relationship in which two different alleles of a gene are both fully expressed in the heterozygote, producing a distinct phenotype." },
  ],
  concepts: [
    {
      id: "biohl-u3-chromosome-meiosis",
      title: "Chromosome structure, meiosis and nondisjunction",
      skill: "Describe the structure of chromosomes and explain how meiosis generates genetic variation, including the consequences of nondisjunction.",
      lesson: {
        sections: [
          {
            heading: "Chromosome structure",
            body: "DNA is wrapped around histone proteins to form nucleosomes, which coil into chromatin and condense into visible chromosomes during cell division. A duplicated chromosome consists of two identical sister chromatids joined at the centromere. Homologous chromosomes carry the same genes at the same loci but may carry different alleles. Humans have 46 chromosomes (23 pairs): 22 autosomal pairs and one pair of sex chromosomes.",
          },
          {
            heading: "Meiosis and nondisjunction",
            body: "Meiosis I separates homologous chromosomes; meiosis II separates sister chromatids, producing four genetically different haploid gametes. Crossing over in prophase I and independent assortment in metaphase I generate variation. Nondisjunction — the failure of chromosomes to separate — produces gametes with an extra or missing chromosome; fertilisation of such a gamete yields aneuploidy such as trisomy 21 (Down syndrome).",
          },
          {
            heading: "The stages of meiosis",
            body: "Meiosis I is reductional: homologous chromosomes pair at the spindle equator, crossing over occurs, then homologues separate so each daughter cell receives one of each pair. Meiosis II is equational: sister chromatids align and separate, producing four haploid cells. Fertilisation of two gametes restores the diploid number. The two divisions together halve the chromosome number and generate genetic diversity.",
          },
        ],
        keyFormulas: [
          { name: "Chromosome number", statement: "Diploid cells have $2n$ chromosomes; gametes have $n$; fertilisation restores $2n$." },
          { name: "Aneuploidy", statement: "Nondisjunction gives gametes with $n+1$ or $n-1$ chromosomes, producing $2n+1$ or $2n-1$ zygotes." },
          { name: "Map distance", statement: "Recombination frequency $\\times 100$ gives approximate map distance in centimorgans (cM)." },
        ],
        workedExample: {
          problem: "Two genes on the same chromosome show a recombination frequency of 12%. Estimate their map distance and state whether they are linked.",
          solution: "Map distance $= 12 \\times 1 = 12$ cM (recombination frequency $\\times 100 = 12$ cM). Since the frequency is well below 50%, the genes are linked.",
        },
      },
      questions: [
        {
          id: "biohl-u3-chromosome-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "At which stage of meiosis does crossing over between non-sister chromatids of homologous chromosomes occur?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Metaphase II" },
              { id: "b", text: "Telophase II" },
              { id: "c", text: "Anaphase I" },
              { id: "d", text: "Prophase I" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Crossing over", statement: "Exchange of segments between non-sister chromatids during prophase I of meiosis." },
            ],
            steps: [
              { reasoning: "Crossing over occurs while homologous chromosomes pair at chiasmata in prophase I.", marks: 1, markCode: "M" },
              { reasoning: "Metaphase and anaphase stages are too late for exchange.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Prophase I",
            commonErrors: ["Choosing prophase II, which has no homologous pairing."],
          },
        },
        {
          id: "biohl-u3-chromosome-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "In humans, a gamete is fertilised by a sperm carrying an extra copy of chromosome 21. State the chromosome number of the resulting zygote and name the condition it causes.",
          response: { type: "numeric", parts: [{ label: "Zygote chromosome number", answer: 47 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Aneuploidy", statement: "An extra chromosome gives $2n+1 = 47$ chromosomes in humans." },
              { kind: "definition", name: "Down syndrome", statement: "Trisomy 21 — three copies of chromosome 21." },
            ],
            steps: [
              { reasoning: "A normal egg has 23 chromosomes; the abnormal sperm carries 24.", working: "23 + 24", marks: 1, markCode: "M" },
              { reasoning: "Evaluate the zygote chromosome number.", working: "47", marks: 1, markCode: "A" },
              { reasoning: "Three copies of chromosome 21 produce trisomy 21 (Down syndrome).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$47$ chromosomes — trisomy 21 (Down syndrome)",
            commonErrors: ["Answering 46 — forgetting the extra chromosome from nondisjunction."],
          },
        },
        {
          id: "biohl-u3-chromosome-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Explain how nondisjunction during meiosis can produce a gamete with an abnormal chromosome number, and describe one consequence for the offspring.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Nondisjunction", statement: "Failure of homologous chromosomes (meiosis I) or sister chromatids (meiosis II) to separate." },
              { kind: "principle", name: "Aneuploidy", statement: "Gametes with $n+1$ or $n-1$ chromosomes produce $2n+1$ or $2n-1$ zygotes." },
            ],
            steps: [
              { reasoning: "During anaphase of meiosis I or II, chromosomes fail to move to opposite poles.", marks: 1, markCode: "R" },
              { reasoning: "One daughter cell receives both copies and the other none.", marks: 1, markCode: "M" },
              { reasoning: "Gametes therefore have an extra or missing chromosome.", marks: 1, markCode: "A" },
              { reasoning: "Fertilisation yields aneuploid offspring such as trisomy 21, with developmental and health consequences.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Nondisjunction produces gametes with $n+1$ or $n-1$ chromosomes, leading to aneuploidy such as trisomy 21.",
            commonErrors: ["Confusing nondisjunction with crossing over — crossing over does not change chromosome number."],
          },
        },
        {
          id: "biohl-u3-chromosome-q4",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 8,
          stem: "Two genes, $A$ and $B$, are located on the same chromosome. In a test cross, 1 000 offspring are produced: 420 show both dominant phenotypes, 430 show both recessive phenotypes, 80 show $A$ dominant/$b$ recessive, and 70 show $a$ recessive/$B$ dominant.",
          parts: [
            { label: "a", prompt: "Identify which offspring classes are recombinant and which are parental.", marks: 2 },
            { label: "b", prompt: "Calculate the recombination frequency between genes $A$ and $B$.", marks: 2 },
            { label: "c", prompt: "Estimate the map distance between the two genes in centimorgans.", marks: 2 },
            { label: "d", prompt: "State what recombination frequency of 50% would imply about the relationship between the genes.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Recombination frequency", statement: "Recombinant offspring are the minority classes produced by crossing over." },
              { kind: "formula", name: "Map distance", statement: "Recombination frequency $\\times 100$ gives map distance in cM." },
            ],
            steps: [
              { part: "a", reasoning: "The two large classes ($AB$ and $ab$ phenotypes) are parental; the two small classes are recombinant.", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Recombinant classes are the 80 and 70 offspring.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Recombinants total $80 + 70 = 150$ out of 1 000.", working: "150 \\div 1000", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate the frequency.", working: "0.15 \\text{ or } 15\\%", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Map distance $= 15 \\times 1 = 15$ cM.", working: "15 \\text{ cM}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "50% recombination is the maximum and equals independent assortment.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "It implies the genes are on different chromosomes or very far apart, so they assort independently.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 80 and 70 are recombinant. (b) $15\\%$. (c) $15$ cM. (d) Independent assortment — not linked.",
            commonErrors: ["In (b), dividing by the parental count instead of the total.", "In (d), claiming 50% means the genes are on the same chromosome."],
            examinerNote: "Accept 0.15 or 15% for the recombination frequency.",
          },
        },
        {
          id: "biohl-u3-chromosome-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Which event occurs during meiosis I but not during meiosis II?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Division of the cytoplasm" },
              { id: "b", text: "Separation of sister chromatids" },
              { id: "c", text: "Alignment of chromosomes at the equator" },
              { id: "d", text: "Pairing and crossing over of homologous chromosomes" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Meiosis I vs meiosis II", statement: "Meiosis I separates homologous chromosomes; meiosis II separates sister chromatids." },
            ],
            steps: [
              { reasoning: "Homologous chromosomes pair as bivalents and exchange segments at chiasmata during prophase I.", marks: 1, markCode: "M" },
              { reasoning: "Sister chromatid separation, equatorial alignment and cytokinesis also occur in meiosis II.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Pairing and crossing over of homologous chromosomes",
            commonErrors: ["Choosing sister chromatid separation — that occurs in anaphase II."],
          },
        },
        {
          id: "biohl-u3-chromosome-q6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Homologous chromosomes are best described as chromosomes that",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "always carry identical alleles" },
              { id: "b", text: "are identical copies joined at the centromere" },
              { id: "c", text: "are found only in gametes" },
              { id: "d", text: "carry the same genes at the same loci but may carry different alleles" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Homologous chromosomes", statement: "A matched pair (one maternal, one paternal) carrying the same genes at the same loci, possibly with different alleles." },
            ],
            steps: [
              { reasoning: "Homologous chromosomes share the same gene loci but may carry different alleles.", marks: 1, markCode: "M" },
              { reasoning: "Identical copies joined at the centromere are sister chromatids, not homologues.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Same genes at the same loci, possibly different alleles",
            commonErrors: ["Confusing homologous chromosomes with sister chromatids."],
          },
        },
        {
          id: "biohl-u3-chromosome-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "During anaphase II of meiosis, the structures pulled apart toward opposite poles are",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "homologous chromosomes" },
              { id: "b", text: "centromeres" },
              { id: "c", text: "non-sister chromatids" },
              { id: "d", text: "sister chromatids" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Meiosis II", statement: "Meiosis II is equational: sister chromatids separate, as in mitosis." },
            ],
            steps: [
              { reasoning: "In anaphase II the centromeres divide and sister chromatids move to opposite poles.", marks: 1, markCode: "M" },
              { reasoning: "Homologous chromosomes separated earlier, in anaphase I.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Sister chromatids",
            commonErrors: ["Choosing homologous chromosomes — they separate in anaphase I."],
          },
        },
        {
          id: "biohl-u3-chromosome-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Nondisjunction of homologous chromosomes during meiosis I is expected to affect",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "only two of the four products" },
              { id: "b", text: "all four products of the meiosis" },
              { id: "c", text: "only the egg cells, never sperm" },
              { id: "d", text: "none of the resulting gametes" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Nondisjunction timing", statement: "Meiosis I nondisjunction affects all products; meiosis II nondisjunction affects only two of the four." },
            ],
            steps: [
              { reasoning: "If homologues fail to separate in meiosis I, both daughter cells of the first division are abnormal.", marks: 1, markCode: "M" },
              { reasoning: "Meiosis II then produces four gametes, all carrying the same chromosome imbalance.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** All four products of the meiosis",
            commonErrors: ["Assuming only two gametes are affected — that pattern results from meiosis II nondisjunction."],
          },
        },
        {
          id: "biohl-u3-chromosome-q9",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "Two genes show a recombination frequency of 50%. This indicates that the genes",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "cannot possibly be on the same chromosome" },
              { id: "b", text: "are located very close together on one chromosome" },
              { id: "c", text: "assort independently, as if located on different chromosomes" },
              { id: "d", text: "are tightly linked on the same chromosome" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Recombination maximum", statement: "A recombination frequency of 50% is the maximum and equals independent assortment." },
            ],
            steps: [
              { reasoning: "50% recombination means crossing over separates the genes as often as chance would.", marks: 1, markCode: "M" },
              { reasoning: "This is the signature of independent assortment — genes on different chromosomes or very far apart.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Assort independently",
            commonErrors: ["Interpreting 50% as tight linkage — tight linkage gives a frequency near 0%."],
          },
        },
        {
          id: "biohl-u3-chromosome-q10",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A normal human sperm cell contains how many chromosomes?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$23$" },
              { id: "b", text: "$24$" },
              { id: "c", text: "$46$" },
              { id: "d", text: "$22$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Haploid number", statement: "Human gametes are haploid with $n = 23$ chromosomes; body cells are diploid with $2n = 46$." },
            ],
            steps: [
              { reasoning: "Gametes are produced by meiosis and carry half the diploid number.", marks: 1, markCode: "M" },
              { reasoning: "Humans have $2n = 46$, so $n = 23$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $23$",
            commonErrors: ["Answering 46 — that is the diploid number in body cells."],
          },
        },
        {
          id: "biohl-u3-chromosome-q11",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "In a test cross, 800 offspring are produced and 120 show recombinant phenotypes. Calculate the recombination frequency and the map distance between the two genes.",
          response: { type: "numeric", parts: [{ label: "Recombination frequency", answer: 0.15 }, { label: "Map distance (cM)", answer: 15 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Recombination frequency", statement: "Recombinant offspring $\\div$ total offspring." },
              { kind: "formula", name: "Map distance", statement: "Recombination frequency $\\times 100$ gives centimorgans." },
            ],
            steps: [
              { reasoning: "Recombination frequency is the fraction of offspring showing recombinant phenotypes.", working: "120 \\div 800", marks: 1, markCode: "M" },
              { reasoning: "Evaluate the frequency.", working: "0.15", marks: 1, markCode: "A" },
              { reasoning: "Map distance equals recombination frequency times 100.", working: "0.15 \\times 100", marks: 1, markCode: "M" },
              { reasoning: "Evaluate the map distance.", working: "15 \\text{ cM}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$0.15$ ($15\\%$); $15$ cM",
            commonErrors: ["Dividing by the number of parental offspring instead of the total.", "Giving 0.015 for the map distance — multiply by 100."],
          },
        },
        {
          id: "biohl-u3-chromosome-q12",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A species has a diploid chromosome number $2n = 20$. A gamete produced by nondisjunction carries one extra chromosome. If this gamete is fertilised by a normal gamete, how many chromosomes will the zygote have?",
          response: { type: "numeric", parts: [{ label: "Zygote chromosome number", answer: 21 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Aneuploidy", statement: "An $(n+1)$ gamete fertilising an $n$ gamete gives a $2n+1$ zygote." },
            ],
            steps: [
              { reasoning: "The haploid number is $n = 10$; the abnormal gamete carries $n + 1 = 11$ chromosomes.", working: "20 \\div 2 + 1 = 11", marks: 1, markCode: "M" },
              { reasoning: "The normal gamete carries $n = 10$ chromosomes.", working: "10", marks: 1, markCode: "M" },
              { reasoning: "Add the two contributions.", working: "11 + 10 = 21", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$21$ chromosomes ($2n + 1$)",
            commonErrors: ["Answering 20 — forgetting the extra chromosome from nondisjunction."],
          },
        },
        {
          id: "biohl-u3-chromosome-q13",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "A test cross produces 500 offspring, of which 60 show recombinant phenotypes. Calculate the recombination frequency and the map distance between the genes.",
          response: { type: "numeric", parts: [{ label: "Recombination frequency", answer: 0.12 }, { label: "Map distance (cM)", answer: 12 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Recombination frequency", statement: "Recombinant offspring $\\div$ total offspring." },
              { kind: "formula", name: "Map distance", statement: "Recombination frequency $\\times 100$ gives centimorgans." },
            ],
            steps: [
              { reasoning: "Set up the frequency calculation.", working: "60 \\div 500", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "0.12", marks: 1, markCode: "A" },
              { reasoning: "Convert to map distance.", working: "0.12 \\times 100", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "12 \\text{ cM}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$0.12$ ($12\\%$); $12$ cM",
            commonErrors: ["Reporting 12% as 0.012 for the frequency.", "Confusing map distance with the percentage value."],
          },
        },
        {
          id: "biohl-u3-chromosome-q14",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 3,
          stem: "Genes $C$ and $D$ are 8 cM apart on the same chromosome. In a test cross producing 600 offspring, how many offspring are expected to show recombinant phenotypes?",
          response: { type: "numeric", parts: [{ label: "Expected recombinant offspring", answer: 48 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Recombination frequency", statement: "Recombinant offspring $=$ recombination frequency $\\times$ total offspring." },
            ],
            steps: [
              { reasoning: "An 8 cM distance corresponds to a recombination frequency of $8 \\div 100 = 0.08$.", working: "8 \\div 100 = 0.08", marks: 1, markCode: "M" },
              { reasoning: "Apply the frequency to the total number of offspring.", working: "0.08 \\times 600", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "48", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$48$ offspring",
            commonErrors: ["Multiplying 8 by 600 directly instead of using the frequency 0.08."],
          },
        },
        {
          id: "biohl-u3-chromosome-q15",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 3,
          stem: "Three genes lie on the same chromosome. The map distance $A$–$B$ is 10 cM and the map distance $B$–$C$ is 15 cM. Assuming there is no interference, estimate the map distance $A$–$C$.",
          response: { type: "numeric", parts: [{ label: "Map distance $A$–$C$ (cM)", answer: 25 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Additive map distances", statement: "Map distances between genes on the same chromosome are approximately additive." },
            ],
            steps: [
              { reasoning: "Because $A$, $B$ and $C$ lie on one chromosome, the $A$–$C$ distance is the sum of the two intervening intervals.", working: "10 + 15", marks: 1, markCode: "M" },
              { reasoning: "Add the distances.", working: "25", marks: 1, markCode: "M" },
              { reasoning: "State the result with units.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$25$ cM",
            commonErrors: ["Multiplying or averaging the distances instead of adding them."],
          },
        },
        {
          id: "biohl-u3-chromosome-q16",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 3,
          stem: "In a species with $2n = 14$, a gamete carrying $n + 1$ chromosomes is fertilised by a gamete carrying $n - 1$ chromosomes. How many chromosomes will the zygote have?",
          response: { type: "numeric", parts: [{ label: "Zygote chromosome number", answer: 14 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Aneuploidy", statement: "An $(n+1)$ gamete fertilising an $(n-1)$ gamete restores the diploid number $2n$." },
            ],
            steps: [
              { reasoning: "The haploid number is $n = 7$, so the two gametes carry 8 and 6 chromosomes.", working: "14 \\div 2 = 7;\\ 7 + 1 = 8;\\ 7 - 1 = 6", marks: 1, markCode: "M" },
              { reasoning: "Add the contributions: $(n+1) + (n-1) = 2n$.", working: "8 + 6 = 14", marks: 1, markCode: "M" },
              { reasoning: "Evaluate — the zygote is diploid.", working: "14", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$14$ chromosomes",
            commonErrors: ["Answering 15 or 13 by adding only one abnormal gamete to a normal one."],
          },
        },
        {
          id: "biohl-u3-chromosome-q17",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 3,
          stem: "Two genes $G$ and $H$ are linked. In a test cross of 750 offspring, 120 show recombinant phenotypes. Calculate the recombination frequency and state the map distance in centimorgans.",
          response: { type: "numeric", parts: [{ label: "Recombination frequency", answer: 0.16 }, { label: "Map distance (cM)", answer: 16 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Recombination frequency", statement: "Recombinant offspring $\\div$ total offspring." },
              { kind: "formula", name: "Map distance", statement: "Map distance in cM $=$ recombination frequency $\\times 100$." },
            ],
            steps: [
              { reasoning: "Compute the recombination frequency.", working: "120 \\div 750", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "0.16", marks: 1, markCode: "A" },
              { reasoning: "Convert the frequency to centimorgans.", working: "0.16 \\times 100 = 16 \\text{ cM}", marks: 1, markCode: "M" },
            ],
            finalAnswer: "$0.16$; $16$ cM",
            commonErrors: ["Using 120 as the denominator instead of 750."],
          },
        },
        {
          id: "biohl-u3-chromosome-q18",
          difficulty: "core",
          paper: "2",
          totalMarks: 5,
          stem: "Describe the difference between sister chromatids and homologous chromosomes, and state when each pair separates during meiosis.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Sister chromatids", statement: "Two identical copies of one duplicated chromosome joined at the centromere." },
              { kind: "definition", name: "Homologous chromosomes", statement: "A matched pair (one maternal, one paternal) carrying the same genes at the same loci." },
            ],
            steps: [
              { reasoning: "Sister chromatids are identical copies produced by DNA replication before division.", marks: 1, markCode: "M" },
              { reasoning: "Homologous chromosomes come as a pair with the same loci but possibly different alleles.", marks: 1, markCode: "M" },
              { reasoning: "Sister chromatids separate during anaphase II.", marks: 1, markCode: "M" },
              { reasoning: "Homologous chromosomes separate during anaphase I.", marks: 1, markCode: "M" },
              { reasoning: "The two divisions together halve the chromosome number and generate haploid gametes.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Sister chromatids are identical copies of one chromosome and separate in anaphase II; homologous chromosomes are a matched pair and separate in anaphase I.",
            commonErrors: ["Swapping the timing of the two separations."],
          },
        },
        {
          id: "biohl-u3-chromosome-q19",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 6,
          stem: "Explain how meiosis generates genetic variation in the gametes it produces.",
          parts: [
            { label: "a", prompt: "Explain the role of crossing over during prophase I.", marks: 3 },
            { label: "b", prompt: "Explain the role of independent assortment during metaphase I.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Crossing over", statement: "Exchange of segments between non-sister chromatids creates new allele combinations." },
              { kind: "principle", name: "Independent assortment", statement: "Each homologous pair aligns independently, giving $2^n$ possible combinations." },
            ],
            steps: [
              { part: "a", reasoning: "During prophase I, non-sister chromatids of homologous chromosomes exchange segments at chiasmata.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "This creates new allele combinations on each chromatid.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "The resulting chromatids carry mixtures of maternal and paternal alleles.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "In metaphase I each homologous pair aligns independently at the equator.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "For $n$ chromosome pairs there are $2^n$ possible arrangements.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Different gametes therefore receive different combinations of maternal and paternal chromosomes.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Crossing over reshuffles alleles within chromosomes; independent assortment shuffles whole chromosomes, together producing genetically different gametes.",
            commonErrors: ["Claiming crossing over occurs in meiosis II or that independent assortment separates sister chromatids."],
          },
        },
        {
          id: "biohl-u3-chromosome-q20",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 10,
          stem: "In a test cross, a doubly heterozygous parent ($AaBb$) is crossed with a double recessive ($aabb$). Of 1 000 offspring: 410 show the $AB$ phenotype, 390 show the $ab$ phenotype, 110 show the $Ab$ phenotype and 90 show the $aB$ phenotype.",
          parts: [
            { label: "a", prompt: "Identify the parental and recombinant phenotype classes.", marks: 2 },
            { label: "b", prompt: "Calculate the recombination frequency between the two genes.", marks: 2 },
            { label: "c", prompt: "Estimate the map distance between the genes in centimorgans.", marks: 2 },
            { label: "d", prompt: "State what the recombination frequency indicates about the linkage of the genes.", marks: 2 },
            { label: "e", prompt: "Explain, with reference to meiosis, why the recombinant classes are less frequent than the parental classes.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Recombination frequency", statement: "Recombinant offspring are the minority classes produced by crossing over between linked genes." },
              { kind: "principle", name: "Linkage", statement: "Genes on the same chromosome are inherited together unless crossing over separates them." },
            ],
            steps: [
              { part: "a", reasoning: "The two large classes ($AB$ and $ab$ phenotypes) are parental.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "The two small classes ($Ab$ and $aB$ phenotypes) are recombinant.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Recombinants total $110 + 90 = 200$ out of 1 000.", working: "110 + 90 = 200", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Recombination frequency $= 200 \\div 1000 = 0.20$.", working: "200 \\div 1000 = 0.20", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Map distance $= 0.20 \\times 100 = 20$ cM.", working: "0.20 \\times 100 = 20", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate: $20$ cM.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "A frequency below 50% indicates the genes are linked on the same chromosome.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "They assort together more often than they assort independently.", marks: 1, markCode: "M" },
              { part: "e", reasoning: "Linked genes are separated only when a chiasma forms between them during prophase I.", marks: 1, markCode: "M" },
              { part: "e", reasoning: "Non-recombinant chromatids are therefore more common, so parental combinations predominate among gametes.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) $AB$ and $ab$ parental; $Ab$ and $aB$ recombinant. (b) $0.20$ ($20\\%$). (c) $20$ cM. (d) Linked on the same chromosome. (e) Crossing over between linked loci is relatively rare.",
            commonErrors: ["In (b), dividing by the parental count instead of the total.", "In (e), claiming recombinants are produced by independent assortment."],
            examinerNote: "Accept 0.2 or 20% for the recombination frequency.",
          },
        },
      ],
    },
    {
      id: "biohl-u3-inheritance",
      title: "Linkage, codominance and sex-linked inheritance",
      skill: "Analyse crosses involving linked genes, codominant alleles and sex-linked traits, and calculate expected phenotypic ratios.",
      lesson: {
        sections: [
          {
            heading: "Linkage and recombination",
            body: "Genes on the same chromosome tend to be inherited together because they are physically linked. However, crossing over during meiosis can separate them, producing recombinant gametes. The closer two genes are, the lower the recombination frequency. A recombination frequency of 50% indicates independent assortment (genes on different chromosomes or very far apart).",
          },
          {
            heading: "Codominance and sex linkage",
            body: "In codominance both alleles are fully expressed in the heterozygote, giving a distinct phenotype — e.g. the $AB$ blood group expresses both $A$ and $B$ antigens. Sex-linked genes are carried on the X or Y chromosome; X-linked recessive traits (such as haemophilia or colour blindness) are far more common in males because they have only one X chromosome to mask the recessive allele.",
          },
          {
            heading: "Multiple alleles and polygenic traits",
            body: "Some genes have more than two alleles in a population — the ABO blood group system has $I^A$, $I^B$ and $i$ — producing more than three phenotypes. Traits controlled by several genes (polygenic inheritance), such as height or skin colour, show continuous variation rather than discrete categories, because each contributing allele adds a small effect.",
          },
        ],
        keyFormulas: [
          { name: "Codominant ratio", statement: "A codominant cross of two heterozygotes gives a $1:2:1$ phenotypic ratio (both homozygotes plus the dual-expression heterozygote)." },
          { name: "X-linked recessive", statement: "A carrier mother ($X^AX^a$) and unaffected father ($X^AY$) produce $50\\%$ affected sons and $50\\%$ carrier daughters." },
          { name: "Recombination", statement: "Recombination frequency $=$ recombinant offspring $\\div$ total offspring." },
        ],
        workedExample: {
          problem: "A woman who is a carrier for haemophilia ($X^HX^h$) has a son with an unaffected man ($X^HY$). What is the probability the son has haemophilia?",
          solution: "The son receives $Y$ from his father and either $X^H$ or $X^h$ from his mother with equal probability, so the probability is $0.5$ ($50\\%$).",
        },
      },
      questions: [
        {
          id: "biohl-u3-inheritance-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "In codominance, a heterozygote carrying two different alleles of a gene shows:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A phenotype identical to one homozygote" },
              { id: "b", text: "No phenotype" },
              { id: "c", text: "A phenotype that is an intermediate blend of the two" },
              { id: "d", text: "A phenotype expressing both alleles equally" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Codominance", statement: "Both alleles are fully and equally expressed in the heterozygote." },
            ],
            steps: [
              { reasoning: "Codominant alleles produce a distinct phenotype showing both products.", marks: 1, markCode: "M" },
              { reasoning: "This differs from incomplete dominance (blending) or dominance (one allele masks the other).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Both alleles expressed equally",
            commonErrors: ["Confusing codominance with incomplete dominance."],
          },
        },
        {
          id: "biohl-u3-inheritance-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "In the ABO blood group system, alleles $I^A$ and $I^B$ are codominant and both are dominant to $i$. A cross between two people of blood group AB ($I^AI^B \\times I^AI^B$) is carried out. Calculate the expected proportion of offspring with blood group AB.",
          response: { type: "numeric", parts: [{ label: "Proportion with AB", answer: 0.5 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Punnett ratio", statement: "The cross gives genotypes $I^AI^A$, $I^AI^B$, $I^BI^A$ and $I^BI^B$ in a $1:2:1$ ratio." },
            ],
            steps: [
              { reasoning: "Each parent produces $I^A$ and $I^B$ gametes equally, giving four equally likely genotype combinations.", working: "1 : 2 : 1", marks: 1, markCode: "M" },
              { reasoning: "Both heterozygous arrangements produce blood group AB, which is $2$ of the $4$ equally likely outcomes.", working: "2 \\div 4", marks: 1, markCode: "A" },
              { reasoning: "Evaluate the proportion.", working: "0.5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$0.5$ ($50\\%$)",
            commonErrors: ["Answering $0.25$ by counting only one heterozygous arrangement — $I^AI^B$ and $I^BI^A$ are the same genotype and together make up half the offspring."],
          },
        },
        {
          id: "biohl-u3-inheritance-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Haemophilia is caused by a recessive allele on the X chromosome. A carrier woman ($X^HX^h$) has children with an unaffected man ($X^HY$). Explain the expected phenotypes of sons and daughters.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "X-linked recessive", statement: "Males have one X, so a single recessive allele is expressed; females need two copies." },
            ],
            steps: [
              { reasoning: "Sons receive $Y$ from the father and either $X^H$ or $X^h$ from the mother.", marks: 1, markCode: "M" },
              { reasoning: "Half the sons receive $X^h$ and are affected; half receive $X^H$ and are unaffected.", marks: 1, markCode: "A" },
              { reasoning: "Daughters receive $X^H$ from the father and either $X^H$ or $X^h$ from the mother.", marks: 1, markCode: "M" },
              { reasoning: "All daughters are unaffected: half are $X^HX^H$ and half are carriers $X^HX^h$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Sons: $50\\%$ affected. Daughters: all unaffected, $50\\%$ carriers.",
            commonErrors: ["Predicting affected daughters — they need two recessive alleles."],
          },
        },
        {
          id: "biohl-u3-inheritance-q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "In sweet peas, flower colour shows codominance: allele $R$ produces red pigment and allele $W$ produces white pigment; heterozygotes $RW$ produce pink flowers.",
          parts: [
            { label: "a", prompt: "State the phenotype of a plant with genotype $RR$ and of one with genotype $RW$.", marks: 2 },
            { label: "b", prompt: "A cross between a red-flowered plant and a white-flowered plant produces offspring. Predict the phenotypic ratio of the $F_1$ generation.", marks: 2 },
            { label: "c", prompt: "Two $F_1$ plants are crossed. Predict the phenotypic ratio of the $F_2$ generation.", marks: 2 },
            { label: "d", prompt: "Explain why codominance gives a different $F_2$ ratio from incomplete dominance, even though both heterozygotes look different from either homozygote.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Codominance", statement: "Both alleles are fully expressed; heterozygote shows a distinct third phenotype (here pink)." },
              { kind: "principle", name: "Punnett ratios", statement: "A $1:2:1$ genotypic ratio underlies the codominant phenotypic ratio." },
            ],
            steps: [
              { part: "a", reasoning: "$RR$ produces red flowers (only red pigment).", marks: 1, markCode: "A" },
              { part: "a", reasoning: "$RW$ produces pink flowers (both pigments expressed).", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$RR \\times WW$ gives all $RW$ offspring.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "All $F_1$ are pink — ratio $1$ pink.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$RW \\times RW$ gives $RR : RW : WW = 1:2:1$ genotypes.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Phenotypes: $1$ red : $2$ pink : $1$ white.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "In codominance the heterozygote expresses both alleles fully, giving a distinct phenotype counted as its own class.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "In incomplete dominance the heterozygote is an intermediate blend, but both still give $1:2:1$; the difference is the nature of the heterozygote phenotype — here both pigments are produced rather than diluted.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $RR$ red; $RW$ pink. (b) All pink. (c) $1:2:1$ red:pink:white. (d) Both alleles fully expressed vs blended.",
            commonErrors: ["In (c), giving a $3:1$ ratio — that applies to complete dominance, not codominance.", "In (d), claiming the ratios differ — the phenotypic ratio is the same $1:2:1$; the heterozygote phenotype differs."],
          },
        },
        {
          id: "biohl-u3-inheritance-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Two genes are located close together on the same chromosome. In a test cross, most offspring show the two parental phenotypes because",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "the genes assort independently of each other" },
              { id: "b", text: "nondisjunction always increases the parental classes" },
              { id: "c", text: "crossing over occurs during every single meiosis" },
              { id: "d", text: "linked genes on the same chromosome are inherited together unless crossing over separates them" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Linkage", statement: "Genes on the same chromosome are inherited together unless crossing over produces recombinant gametes." },
            ],
            steps: [
              { reasoning: "Physical linkage means the parental allele combinations are transmitted together most of the time.", marks: 1, markCode: "M" },
              { reasoning: "Only crossing over between the loci creates the minority recombinant classes.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Linked genes are inherited together unless crossing over separates them",
            commonErrors: ["Claiming independent assortment produces parental predominance — independent assortment gives equal parental and recombinant classes."],
          },
        },
        {
          id: "biohl-u3-inheritance-q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "X-linked recessive disorders such as haemophilia and colour blindness are expressed far more frequently in males than in females because",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "males carry two X chromosomes and therefore two recessive alleles" },
              { id: "b", text: "males have only one X chromosome, so a single recessive allele is expressed without a second X to mask it" },
              { id: "c", text: "the recessive allele behaves as dominant in males" },
              { id: "d", text: "females do not carry the gene at all" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "X-linked recessive", statement: "Males are hemizygous for X-linked genes, so one recessive allele is expressed; females need two copies." },
            ],
            steps: [
              { reasoning: "Males are $XY$, so they have a single X chromosome carrying one allele at each X-linked locus.", marks: 1, markCode: "M" },
              { reasoning: "With no second X allele, a recessive allele on the single X is expressed directly; females usually need two recessive alleles.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Males have one X, so a single recessive allele is expressed",
            commonErrors: ["Suggesting males have two X chromosomes — they have one X and one Y."],
          },
        },
        {
          id: "biohl-u3-inheritance-q7",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "In the ABO blood group system, an individual with genotype $I^A i$ has which blood group?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "AB" },
              { id: "b", text: "A" },
              { id: "c", text: "B" },
              { id: "d", text: "O" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "ABO alleles", statement: "$I^A$ and $I^B$ are codominant and both dominant to $i$; $ii$ gives group O." },
            ],
            steps: [
              { reasoning: "$I^A$ is dominant to $i$, so the $i$ allele is masked.", marks: 1, markCode: "M" },
              { reasoning: "Only the $A$ antigen is produced, giving blood group A.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Blood group A",
            commonErrors: ["Choosing AB — that requires both $I^A$ and $I^B$ alleles."],
          },
        },
        {
          id: "biohl-u3-inheritance-q8",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "Codominance differs from incomplete dominance in that",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "in codominance both alleles are fully expressed, producing a distinct phenotype, whereas in incomplete dominance the heterozygote shows an intermediate blend" },
              { id: "b", text: "incomplete dominance never produces a $1:2:1$ phenotypic ratio" },
              { id: "c", text: "codominant alleles are always located on the X chromosome" },
              { id: "d", text: "codominance can only occur when a gene has more than two alleles" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Codominance vs incomplete dominance", statement: "Codominance: both alleles fully expressed; incomplete dominance: heterozygote phenotype is intermediate." },
            ],
            steps: [
              { reasoning: "In codominance the heterozygote expresses both alleles fully, giving a phenotype distinct from either homozygote (e.g. AB blood group, roan cattle).", marks: 1, markCode: "M" },
              { reasoning: "In incomplete dominance the heterozygote is a blend or dilution of the two parental phenotypes.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Both alleles fully expressed vs an intermediate blend",
            commonErrors: ["Claiming the phenotypic ratios differ — both typically give $1:2:1$; the difference is the heterozygote phenotype."],
          },
        },
        {
          id: "biohl-u3-inheritance-q9",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "In the ABO blood group system, $I^A$ and $I^B$ are codominant and both are dominant to $i$. A cross between individuals of genotypes $I^A i$ and $I^B i$ is carried out. Calculate the expected proportion of offspring with blood group AB.",
          response: { type: "numeric", parts: [{ label: "Proportion with blood group AB", answer: 0.25 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Punnett ratio", statement: "Each parent produces two gamete types, giving four equally likely genotype combinations." },
            ],
            steps: [
              { reasoning: "Gametes are $I^A$, $i$ from one parent and $I^B$, $i$ from the other, giving four equally likely combinations.", working: "1 : 1 : 1 : 1", marks: 1, markCode: "M" },
              { reasoning: "Only the combination $I^A I^B$ gives blood group AB — one of the four outcomes.", working: "1 \\div 4", marks: 1, markCode: "M" },
              { reasoning: "Evaluate the proportion.", working: "0.25", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$0.25$ ($25\\%$)",
            commonErrors: ["Answering 0.5 by treating $I^A I^B$ and $I^B I^A$ as different — they are the same genotype."],
          },
        },
        {
          id: "biohl-u3-inheritance-q10",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Haemophilia is caused by a recessive allele on the X chromosome. A carrier woman ($X^H X^h$) has a daughter with an unaffected man ($X^H Y$). What is the probability that the daughter is a carrier ($X^H X^h$)?",
          response: { type: "numeric", parts: [{ label: "Probability daughter is a carrier", answer: 0.5 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "X-linked inheritance", statement: "A daughter receives her father's only X and one of her mother's two X chromosomes at random." },
            ],
            steps: [
              { reasoning: "The father is unaffected, so he always contributes $X^H$.", marks: 1, markCode: "M" },
              { reasoning: "The mother contributes $X^H$ or $X^h$ with equal probability.", working: "0.5", marks: 1, markCode: "M" },
              { reasoning: "Only $X^H$ from the mother gives a non-carrier; $X^h$ gives a carrier, so the probability is $0.5$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$0.5$ ($50\\%$)",
            commonErrors: ["Answering 0.25 — forgetting the father always gives $X^H$, so only the mother's contribution matters."],
          },
        },
        {
          id: "biohl-u3-inheritance-q11",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 4,
          stem: "Two linked genes are 20 cM apart on the same chromosome. In a test cross producing 400 offspring, calculate the expected number of offspring showing recombinant phenotypes.",
          response: { type: "numeric", parts: [{ label: "Expected recombinant offspring", answer: 80 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Map distance and recombination", statement: "Recombination frequency $=$ map distance in cM $\\div 100$; recombinant offspring $=$ frequency $\\times$ total offspring." },
            ],
            steps: [
              { reasoning: "Convert the map distance to a recombination frequency.", working: "20 \\div 100 = 0.20", marks: 1, markCode: "M" },
              { reasoning: "Evaluate the frequency.", working: "0.20", marks: 1, markCode: "A" },
              { reasoning: "Apply the frequency to the total number of offspring.", working: "0.20 \\times 400", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "80", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$80$ offspring",
            commonErrors: ["Multiplying 20 by 400 directly instead of using the frequency 0.20."],
          },
        },
        {
          id: "biohl-u3-inheritance-q12",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 3,
          stem: "Two genes assort independently. In a test cross of a double heterozygote ($AaBb \\times aabb$), what proportion of offspring are expected to show the dominant phenotype for both genes?",
          response: { type: "numeric", parts: [{ label: "Proportion with both dominant phenotypes", answer: 0.25 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Independent assortment", statement: "Unlinked genes produce all four gamete types in equal proportions." },
            ],
            steps: [
              { reasoning: "Independent assortment gives four equally likely gamete types: $AB$, $Ab$, $aB$, $ab$.", marks: 1, markCode: "M" },
              { reasoning: "Only the $AB$ gamete gives both dominant phenotypes — one of the four equally likely outcomes.", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "1 \\div 4 = 0.25", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$0.25$ ($25\\%$)",
            commonErrors: ["Answering 0.5 by assuming the two dominant phenotypes assort independently of each other."],
          },
        },
        {
          id: "biohl-u3-inheritance-q13",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 4,
          stem: "In a test cross, 800 offspring are produced and 96 show recombinant phenotypes. Calculate the recombination frequency and the map distance between the two genes.",
          response: { type: "numeric", parts: [{ label: "Recombination frequency", answer: 0.12 }, { label: "Map distance (cM)", answer: 12 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Recombination frequency", statement: "Recombination frequency $=$ recombinant offspring $\\div$ total offspring." },
              { kind: "formula", name: "Map distance", statement: "Map distance in cM $=$ recombination frequency $\\times 100$." },
            ],
            steps: [
              { reasoning: "Set up the recombination frequency calculation.", working: "96 \\div 800", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "0.12", marks: 1, markCode: "A" },
              { reasoning: "Convert to map distance.", working: "0.12 \\times 100", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "12 \\text{ cM}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$0.12$ ($12\\%$); $12$ cM",
            commonErrors: ["Dividing by the number of parental offspring instead of the total of 800."],
          },
        },
        {
          id: "biohl-u3-inheritance-q14",
          difficulty: "core",
          paper: "2",
          totalMarks: 5,
          stem: "Explain why X-linked recessive traits are expressed far more frequently in males than in females.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Hemizygosity", statement: "Males have one X chromosome, so a single recessive allele on it is expressed." },
            ],
            steps: [
              { reasoning: "Males have the sex chromosome complement $XY$ — only one X chromosome.", marks: 1, markCode: "M" },
              { reasoning: "A recessive allele on that single X has no second X allele to mask it, so it is expressed.", marks: 1, markCode: "M" },
              { reasoning: "Females have two X chromosomes and need two copies of the recessive allele to be affected.", marks: 1, markCode: "M" },
              { reasoning: "Heterozygous females are carriers and are usually unaffected, so affected females are rare.", marks: 1, markCode: "A" },
              { reasoning: "Consequently affected males are much more common, though affected females can arise from an affected father and carrier mother.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Males are hemizygous for X-linked genes, so one recessive allele is expressed; females need two recessive alleles and are usually carriers.",
            commonErrors: ["Claiming females cannot be affected — they can, though it is rare."],
          },
        },
        {
          id: "biohl-u3-inheritance-q15",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 8,
          stem: "Genes $C$ and $D$ are investigated using a test cross of a double heterozygote. Of 500 offspring: 210 show both dominant phenotypes, 200 show both recessive phenotypes, 45 show $C$ dominant/$d$ recessive, and 45 show $c$ recessive/$D$ dominant.",
          parts: [
            { label: "a", prompt: "Identify which offspring classes are parental and which are recombinant.", marks: 2 },
            { label: "b", prompt: "Calculate the recombination frequency between genes $C$ and $D$.", marks: 2 },
            { label: "c", prompt: "Estimate the map distance between the genes in centimorgans.", marks: 2 },
            { label: "d", prompt: "State what the recombination frequency indicates about the linkage of the genes.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Recombination frequency", statement: "Recombinant offspring are the minority classes produced by crossing over between linked genes." },
              { kind: "formula", name: "Map distance", statement: "Map distance in cM $=$ recombination frequency $\\times 100$." },
            ],
            steps: [
              { part: "a", reasoning: "The two large classes (both dominant and both recessive phenotypes) are parental.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "The two small classes ($Cd$ and $cD$ phenotypes) are recombinant.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Recombinants total $45 + 45 = 90$ out of 500.", working: "90 \\div 500", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate the frequency.", working: "0.18", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Map distance $= 0.18 \\times 100 = 18$ cM.", working: "18 \\text{ cM}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "A frequency below 50% indicates the genes are linked on the same chromosome.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "They are approximately 18 cM apart, since map distance approximates recombination frequency.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Both-dominant and both-recessive are parental; $Cd$ and $cD$ are recombinant. (b) $0.18$. (c) $18$ cM. (d) Linked on the same chromosome.",
            commonErrors: ["In (b), dividing by the parental count instead of the total.", "In (d), claiming the genes assort independently — independent assortment gives 50%."],
            examinerNote: "Accept 0.18 or 18% for the recombination frequency.",
          },
        },
      ],
    },
  ],
};
