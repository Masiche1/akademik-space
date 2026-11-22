import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "ebi11-u2-lesson-2-2",
  code: "2-2",
  title: "DNA, Cell Division and Inheritance",
  goal: "I CAN describe the structure of DNA, compare mitosis and meiosis, and use genetic diagrams and pedigree charts to predict and explain inheritance.",
  standards: ["4BI1 3.12", "4BI1 3.13", "4BI1 3.14", "4BI1 3.15", "4BI1 3.16", "4BI1 3.17", "4BI1 3.18", "4BI1 3.19", "4BI1 3.20", "4BI1 3.21", "4BI1 3.22"],
  vocabulary: [
    { term: "Gene", definition: "A section of DNA that codes for a protein and so controls a characteristic." },
    { term: "Allele", definition: "A different version of the same gene." },
    { term: "Genotype", definition: "The combination of alleles an organism has, e.g. Tt." },
    { term: "Phenotype", definition: "The observable characteristic of an organism, produced by its genotype and the environment." },
    { term: "Homozygous", definition: "Having two identical alleles of a gene, e.g. TT or tt." },
    { term: "Heterozygous", definition: "Having two different alleles of a gene, e.g. Tt." },
    { term: "Haploid and diploid", definition: "Haploid cells have one set of chromosomes (n), as in gametes. Diploid cells have two sets (2n), as in body cells." },
  ],
  concepts: [
    {
      id: "ebi11-u2-dna-mitosis-meiosis",
      title: "DNA, genes, mitosis and meiosis",
      skill: "Describe the structure of DNA, relate genes to proteins, and compare mitosis and meiosis.",
      lesson: {
        sections: [
          {
            heading: "DNA, genes and chromosomes",
            body: "The nucleus contains **chromosomes**, each made of one long molecule of **DNA**. DNA is a double helix: two strands twisted together and held by pairs of bases. There are four bases, **A, T, C and G**. They pair in a fixed way (**complementary base pairing**): **A with T** and **C with G**. So in double-stranded DNA, the amount of A equals T and the amount of C equals G.\n\nA **gene** is a section of DNA that codes for a protein. A sequence of three bases codes for one amino acid, and the order of bases determines the order of amino acids in the protein. Humans have 46 chromosomes (23 pairs) in body cells, so body cells are **diploid** ($2n$). Gametes have 23 and are **haploid** ($n$).",
          },
          {
            heading: "Mitosis",
            body: "**Mitosis** produces two daughter cells that are genetically identical to the parent cell, with the same number of chromosomes. Before mitosis the DNA is copied (replicated), so each chromosome has two identical copies. In mitosis these are separated into the two new nuclei.\n\nMitosis is used for **growth**, **repair** of damaged tissue, replacing cells, and **asexual reproduction**. Cancer is uncontrolled cell division by mitosis.",
          },
          {
            heading: "Meiosis",
            body: "**Meiosis** happens only in the reproductive organs (ovaries and testes, or anthers and ovules) to make gametes. It involves two divisions and produces **four** cells that are **haploid** and **genetically different** from each other. Variation arises because chromosomes are shuffled at random. Fertilisation restores the diploid number and gives a new combination of alleles.\n\nThe number of cells after $n$ rounds of mitosis from one cell is $2^n$.",
          },
        ],
        keyFormulas: [
          { name: "Base pairing", statement: "A pairs with T; C pairs with G" },
          { name: "Mitosis", statement: "1 diploid cell $\\rightarrow$ 2 genetically identical diploid cells (growth, repair, asexual reproduction)" },
          { name: "Meiosis", statement: "1 diploid cell $\\rightarrow$ 4 genetically different haploid cells (gametes)" },
          { name: "Cells after mitosis", statement: "$\\text{number of cells} = 2^n$ after $n$ divisions from one cell" },
        ],
        workedExample: {
          problem: "A section of one DNA strand has the base sequence ATGCCA. Write the sequence of the complementary strand.",
          solution: "Apply A-T and C-G pairing to each base in turn: A pairs with T, T with A, G with C, C with G, C with G, A with T. The complementary strand is **TACGGT**.",
        },
      },
      questions: [
        {
          id: "ebi11-u2-dna-mitosis-meiosis-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which row correctly shows the number of cells produced and the type of cell division that makes gametes?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "2 cells, meiosis" },
              { id: "b", text: "4 cells, meiosis" },
              { id: "c", text: "2 cells, mitosis" },
              { id: "d", text: "4 cells, mitosis" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Meiosis", statement: "Meiosis is cell division in the reproductive organs that produces four genetically different haploid gametes." },
            ],
            steps: [
              { reasoning: "Gametes are made by meiosis, which gives four haploid cells from one diploid cell.", working: "\\text{4 cells, meiosis}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)**",
            commonErrors: ["Choosing mitosis because it is the more familiar division.", "Remembering 'meiosis' but forgetting that it gives four cells rather than two."],
            examinerNote: "B1 for (d).",
          },
        },
        {
          id: "ebi11-u2-dna-mitosis-meiosis-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A sample of double-stranded DNA contains 1000 bases. $28\\%$ of the bases are thymine (T). Calculate the number of cytosine (C) bases in the sample.",
          response: { type: "numeric", parts: [{ label: "Number of cytosine bases", answer: 220 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Complementary base pairing", statement: "A pairs with T and C pairs with G, so in double-stranded DNA %A = %T and %C = %G." },
            ],
            steps: [
              { reasoning: "A pairs with T, so the percentage of adenine is also $28\\%$.", working: "\\%A = \\%T = 28\\%", marks: 1, markCode: "M" },
              { reasoning: "The remaining bases are C and G in equal amounts, so C is half of the rest.", working: "\\%C = \\frac{100 - 28 - 28}{2} = 22\\%", marks: 1, markCode: "M" },
              { reasoning: "Convert to a number of bases.", working: "0.22 \\times 1000 = 220", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$220$ cytosine bases",
            commonErrors: ["Taking C as $72\\%$ or $36\\%$ by not accounting for A = T.", "Assuming C = T."],
            examinerNote: "M1 for %A = 28. M1 for (100 - 56)/2 or 22%. A1 cao.",
          },
        },
        {
          id: "ebi11-u2-dna-mitosis-meiosis-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why meiosis is necessary for sexual reproduction, and why the gametes produced by one person are not all genetically identical.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Maintaining chromosome number", statement: "Gametes are haploid, so that fertilisation restores the diploid number in the zygote." },
            ],
            steps: [
              { reasoning: "Meiosis halves the number of chromosomes, producing haploid gametes (23 in humans).", marks: 1, markCode: "B" },
              { reasoning: "At fertilisation two gametes fuse, restoring the diploid number (46). Without meiosis the chromosome number would double each generation.", marks: 1, markCode: "B" },
              { reasoning: "In meiosis the pairs of chromosomes separate at random, so each gamete receives a different mixture of the maternal and paternal chromosomes.", marks: 1, markCode: "B" },
              { reasoning: "So the gametes have different combinations of alleles, which produces genetic variation in the offspring.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Meiosis halves chromosome number so fertilisation restores the diploid number; random shuffling of chromosomes makes each gamete genetically different.",
            commonErrors: ["Saying meiosis makes identical cells.", "Saying that gametes are diploid.", "Confusing fertilisation with meiosis."],
            examinerNote: "Allow 'half the chromosomes' for haploid. Reject 'meiosis makes the chromosomes different' without reference to random assortment or mixing. Allow 'shuffled' oe.",
          },
        },
        {
          id: "ebi11-u2-dna-mitosis-meiosis-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A pea plant has 14 chromosomes in each of its root cells. Peas grow by mitosis and make gametes by meiosis.",
          parts: [
            { label: "a", prompt: "State the number of chromosomes in a pea pollen nucleus.", marks: 1 },
            { label: "b", prompt: "Compare mitosis and meiosis. Give three differences.", marks: 3 },
            { label: "c", prompt: "A single root cell divides by mitosis once every 6 hours with no cells dying. Calculate the number of cells produced from this cell after 24 hours.", marks: 2 },
            { label: "d", prompt: "Explain why the cells produced by mitosis in the root are genetically identical to the original cell.", marks: 2 },
            { label: "e", prompt: "A gene codes for an enzyme. Explain how a gene controls a characteristic.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Mitosis and meiosis", statement: "Mitosis gives two identical diploid cells; meiosis gives four genetically different haploid cells." },
              { kind: "formula", name: "Cells after mitosis", statement: "$\\text{number of cells} = 2^n$ after $n$ divisions" },
            ],
            steps: [
              { part: "a", reasoning: "Pollen nuclei are gametes made by meiosis, so they have half the number of chromosomes.", working: "14 \\div 2 = 7", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Mitosis produces two cells; meiosis produces four.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Mitosis produces genetically identical cells; meiosis produces genetically different cells.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Mitosis keeps the chromosome number the same (diploid); meiosis halves it (haploid). Allow also: mitosis is for growth/repair, meiosis for gametes only.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Find the number of divisions in 24 hours.", working: "24 \\div 6 = 4\\text{ divisions}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "The number of cells doubles each division.", working: "2^4 = 16\\text{ cells}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "The DNA is copied (replicated) exactly before the cell divides.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Each daughter cell receives one complete copy of each chromosome, so it has the same alleles.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "The gene is a section of DNA whose base sequence codes for the order of amino acids in a protein (the enzyme).", marks: 1, markCode: "B" },
              { part: "e", reasoning: "The enzyme controls a chemical reaction in the cell, which produces the characteristic.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) 7 (b) 2 vs 4 cells; identical vs different; diploid vs haploid (c) 16 cells (d) DNA replicated and shared equally (e) gene codes for amino acid order in the enzyme which controls a reaction",
            commonErrors: ["Giving 14 chromosomes for the pollen nucleus.", "Calculating $4 \\times 2 = 8$ cells instead of $2^4$.", "Giving 4 cells (the number of divisions) instead of $2^4$."],
            examinerNote: "(b) Each difference must be a comparison. (c) Allow ecf from the number of divisions. Reject 8 (but M1 for 4 divisions). (e) Allow 'sequence of bases' for the base order.",
          },
        },
      ],
    },
    {
      id: "ebi11-u2-monohybrid-inheritance",
      title: "Monohybrid inheritance and pedigree charts",
      skill: "Use genetic diagrams to predict ratios and probabilities, and interpret pedigree charts.",
      lesson: {
        sections: [
          {
            heading: "Alleles and genetic diagrams",
            body: "Each body cell has two alleles of a gene, one from each parent. A **dominant** allele (capital letter) shows in the phenotype when present once. A **recessive** allele (lower case) shows only when two copies are present. An organism with two identical alleles is **homozygous** (TT or tt); one with two different alleles is **heterozygous** (Tt).\n\nTo predict a cross: write the parents' genotypes, the gametes each can make (one allele per gamete), then combine them in a **Punnett square**. For Tt $\\times$ Tt the offspring genotypes are TT, Tt, Tt, tt: a genotype ratio of $1:2:1$, a phenotype ratio of $3:1$ dominant to recessive, and a probability of $\\frac{1}{4}$ for tt. These are **probabilities**, not guarantees: each child is independent of the others.",
          },
          {
            heading: "Test crosses, sex determination and genetic disorders",
            body: "An organism showing the dominant phenotype may be TT or Tt. A **test cross** with a homozygous recessive (tt) shows which: if any offspring show the recessive phenotype, the parent was Tt.\n\nHuman sex is determined by the sex chromosomes: females are **XX** and males are **XY**. All eggs carry X; half of sperm carry X and half carry Y, so the chance of a boy or a girl is $50\\%$ each time.\n\n**Cystic fibrosis** is caused by a recessive allele, so people with the disorder are homozygous recessive (ff) and carriers are heterozygous (Ff). **Huntington's disease** is caused by a dominant allele.",
          },
          {
            heading: "Pedigree charts",
            body: "A **pedigree chart** is a family tree showing who has a characteristic. Squares are males and circles are females; shaded symbols show the affected phenotype.\n\nTo work out the inheritance: if two **unaffected** parents have an **affected** child, the allele must be **recessive** and both parents are carriers. If the characteristic is dominant, every affected person has at least one affected parent. Use the genotypes of the parents to work out the probabilities for their children. When multiplying probabilities for independent events (e.g. two children, or a parent being a carrier and passing on the allele), multiply the fractions.",
          },
        ],
        keyFormulas: [
          { name: "Monohybrid cross Tt $\\times$ Tt", statement: "Genotypes $1\\text{ TT} : 2\\text{ Tt} : 1\\text{ tt}$; phenotypes $3:1$; $P(\\text{tt}) = \\frac{1}{4}$" },
          { name: "Combined probability", statement: "$P(\\text{A and B}) = P(\\text{A}) \\times P(\\text{B})$ for independent events" },
          { name: "Test cross", statement: "Unknown dominant phenotype $\\times$ tt: any recessive offspring shows the parent is heterozygous" },
          { name: "Sex determination", statement: "Female XX, male XY; $P(\\text{boy}) = P(\\text{girl}) = \\frac{1}{2}$" },
        ],
        workedExample: {
          problem: "Tall pea plants (T) are dominant to dwarf (t). Two heterozygous tall plants are crossed. What is the probability that an offspring is dwarf, and what is the expected number of dwarf plants among 200 offspring?",
          solution: "Parents Tt $\\times$ Tt. Gametes: T or t from each. Offspring: TT, Tt, Tt, tt. Only tt is dwarf, so the probability is $\\frac{1}{4} = 25\\%$.\n\nExpected number $= \\frac{1}{4} \\times 200 = 50$ dwarf plants. The real number will usually be close to 50 but not exactly 50, because fertilisation is random.",
        },
      },
      questions: [
        {
          id: "ebi11-u2-monohybrid-inheritance-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A person has the genotype Ff for cystic fibrosis. F is the dominant allele and f is the recessive allele. Which word describes this genotype?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Haploid" },
              { id: "b", text: "Heterozygous" },
              { id: "c", text: "Homozygous dominant" },
              { id: "d", text: "Homozygous recessive" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Heterozygous", statement: "An organism with two different alleles of a gene is heterozygous." },
            ],
            steps: [
              { reasoning: "Ff has two different alleles, so the person is heterozygous (a carrier).", working: "\\text{Ff = heterozygous}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Heterozygous",
            commonErrors: ["Choosing homozygous because the alleles are the same letter.", "Confusing genotype words with haploid/diploid."],
            examinerNote: "B1 for (c).",
          },
        },
        {
          id: "ebi11-u2-monohybrid-inheritance-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "In tomato plants, red fruit (R) is dominant to yellow fruit (r). Two heterozygous red-fruited plants are crossed. Calculate the percentage of the offspring that are expected to have yellow fruit.",
          response: { type: "numeric", parts: [{ label: "Percentage with yellow fruit", answer: 25, unit: "%" }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Monohybrid cross", statement: "Rr $\\times$ Rr gives RR, Rr, Rr, rr in a 1:2:1 genotype ratio; only rr is recessive." },
            ],
            steps: [
              { reasoning: "Each parent is Rr and makes gametes R and r in equal numbers.", working: "\\text{Rr} \\times \\text{Rr}:\\ \\text{R, r} \\times \\text{R, r}", marks: 1, markCode: "M" },
              { reasoning: "Combine the gametes: RR, Rr, Rr, rr. One of the four is rr (yellow).", working: "P(\\text{rr}) = \\frac{1}{4}", marks: 1, markCode: "M" },
              { reasoning: "Convert to a percentage.", working: "\\frac{1}{4} \\times 100 = 25\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$25\\%$",
            commonErrors: ["Giving 50% by thinking half the offspring carry the recessive allele.", "Giving 75% (the percentage showing the dominant phenotype)."],
            examinerNote: "M1 for correct gametes or Punnett square. M1 for 1 in 4 identified. A1 for 25. Allow 25%.",
          },
        },
        {
          id: "ebi11-u2-monohybrid-inheritance-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Two parents are both carriers of the recessive allele that causes cystic fibrosis. They plan to have two children. Calculate the probability that both children have cystic fibrosis. Give your answer as a decimal.",
          response: { type: "numeric", parts: [{ label: "Probability both children have cystic fibrosis", answer: 0.0625, tolerance: 0.0001 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Monohybrid cross", statement: "Ff $\\times$ Ff gives a $\\frac{1}{4}$ chance of ff at each birth." },
              { kind: "formula", name: "Independent events", statement: "$P(\\text{A and B}) = P(\\text{A}) \\times P(\\text{B})$" },
            ],
            steps: [
              { reasoning: "Both parents are Ff, giving gametes F or f. The Punnett square gives FF, Ff, Ff, ff.", working: "\\text{Ff} \\times \\text{Ff}", marks: 1, markCode: "M" },
              { reasoning: "The probability a child has cystic fibrosis (ff) is one in four.", working: "P(\\text{ff}) = \\frac{1}{4}", marks: 1, markCode: "A" },
              { reasoning: "Each child is an independent event, so multiply the probabilities.", working: "\\frac{1}{4} \\times \\frac{1}{4}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate as a decimal.", working: "\\frac{1}{16} = 0.0625", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$0.0625$ ($\\frac{1}{16}$)",
            commonErrors: ["Adding the probabilities to get $\\frac{1}{2}$.", "Thinking that if the first child has cystic fibrosis, the next cannot.", "Giving $\\frac{1}{8}$ by doubling instead of squaring."],
            examinerNote: "Allow $\\frac{1}{16}$ or 6.25%. ecf from a wrong single-child probability for the final M1 and A1.",
          },
        },
        {
          id: "ebi11-u2-monohybrid-inheritance-q4",
          difficulty: "challenge",
          totalMarks: 11,
          stem: "The pedigree chart below shows the inheritance of cystic fibrosis in a family. Squares are males and circles are females. Shaded symbols show people with cystic fibrosis. The allele for cystic fibrosis is recessive.\n\n- Generation I: a man (I-1) and a woman (I-2) are both unaffected.\n- Generation II: they have two children, a daughter (II-1) who has cystic fibrosis and a son (II-2) who is unaffected.\n\nUse F for the dominant allele and f for the recessive allele.",
          parts: [
            { label: "a", prompt: "State the genotypes of I-1 and I-2 and explain how the chart shows that the allele for cystic fibrosis is recessive.", marks: 3 },
            { label: "b", prompt: "Complete a genetic diagram (Punnett square) for the cross between I-1 and I-2 and state the probability that a child of these parents has cystic fibrosis.", marks: 3 },
            { label: "c", prompt: "II-2 is unaffected. Calculate the probability that II-2 is a carrier. Give your answer as a fraction.", marks: 2 },
            { label: "d", prompt: "II-2 has a child with a woman who is a carrier. Calculate the probability that the child has cystic fibrosis. Give your answer as a fraction.", marks: 2 },
            { label: "e", prompt: "Calculate the probability that the next child of I-1 and I-2 is a girl with cystic fibrosis. Give your answer as a fraction.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Recessive inheritance", statement: "Two unaffected parents can have an affected child only if both are heterozygous carriers of a recessive allele." },
              { kind: "formula", name: "Independent events", statement: "$P(\\text{A and B}) = P(\\text{A}) \\times P(\\text{B})$" },
            ],
            steps: [
              { part: "a", reasoning: "II-1 is affected, so she is ff and received one f allele from each parent.", marks: 1, markCode: "B" },
              { part: "a", reasoning: "The parents are unaffected, so each also has an F allele. Both are Ff.", working: "\\text{I-1 = Ff},\\ \\text{I-2 = Ff}", marks: 1, markCode: "B" },
              { part: "a", reasoning: "Two unaffected parents have an affected child, so the allele is hidden in the parents: it must be recessive.", marks: 1, markCode: "R" },
              { part: "b", reasoning: "Gametes: F and f from each parent.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Punnett square gives FF, Ff, Ff and ff.", working: "\\text{FF},\\ \\text{Ff},\\ \\text{Ff},\\ \\text{ff}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Only ff has cystic fibrosis.", working: "P = \\frac{1}{4}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "II-2 is unaffected, so he cannot be ff. He is one of FF, Ff or Ff (3 possibilities).", working: "\\text{FF, Ff, Ff}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Two of the three possibilities are carriers.", working: "P(\\text{carrier}) = \\frac{2}{3}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "The woman is a carrier, so the child has ff only if II-2 is also a carrier (probability $\\frac{2}{3}$) and both pass on f (probability $\\frac{1}{4}$). Multiply.", working: "\\frac{2}{3} \\times \\frac{1}{4}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Evaluate.", working: "\\frac{2}{12} = \\frac{1}{6}", marks: 1, markCode: "A" },
              { part: "e", reasoning: "The probability of ff is $\\frac{1}{4}$ and the probability of a girl is $\\frac{1}{2}$ (XX); the events are independent, so multiply.", working: "\\frac{1}{4} \\times \\frac{1}{2} = \\frac{1}{8}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) both Ff; unaffected parents with affected child so recessive (b) FF, Ff, Ff, ff; $\\frac{1}{4}$ (c) $\\frac{2}{3}$ (d) $\\frac{1}{6}$ (e) $\\frac{1}{8}$",
            commonErrors: ["Stating that II-2 is a carrier with probability $\\frac{1}{2}$ (forgetting that ff is excluded).", "Giving $\\frac{1}{4}$ for (d), forgetting the chance that II-2 is not a carrier.", "Saying the allele is dominant because the child is affected."],
            examinerNote: "(a) Allow 'both heterozygous'. (b) A completed Punnett square showing all four genotypes gains M1 A1. (c) Allow ecf only for reducing fractions. (d) ecf from (c): $\\frac{1}{4}$ of the answer to (c), as a fraction. (e) Allow 0.125 or 12.5%.",
          },
        },
      ],
    },
  ],
};
