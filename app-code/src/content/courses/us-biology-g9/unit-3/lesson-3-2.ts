import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "bio9-u3-lesson-3-2",
  code: "3-2",
  title: "Cell Division",
  goal: "I CAN describe the cell cycle, mitosis and cancer, and explain how meiosis, crossing over and independent assortment create genetic variation.",
  standards: ["HS-LS1-4", "HS-LS3-2", "SEP: Developing and Using Models", "SEP: Analyzing and Interpreting Data", "CCC: Patterns"],
  vocabulary: [
    { term: "Cell cycle", definition: "The repeating sequence of growth (interphase), DNA copying and division that a cell goes through." },
    { term: "Mitosis", definition: "Nuclear division that produces two genetically identical nuclei, each with the same chromosome number as the parent cell." },
    { term: "Diploid", definition: "Having two sets of chromosomes, written 2n (46 in human body cells)." },
    { term: "Haploid", definition: "Having one set of chromosomes, written n (23 in human gametes)." },
    { term: "Homologous chromosomes", definition: "A pair of chromosomes, one from each parent, with the same genes in the same order but possibly different alleles." },
    { term: "Crossing over", definition: "The exchange of segments between homologous chromosomes during prophase I of meiosis." },
    { term: "Independent assortment", definition: "The random orientation of homologous pairs at metaphase I, which shuffles maternal and paternal chromosomes into gametes." },
  ],
  concepts: [
    {
      id: "bio9-u3-mitosis-cell-cycle-cancer",
      title: "Mitosis, the cell cycle and cancer",
      skill: "Order the stages of the cell cycle and mitosis, and explain how uncontrolled division causes cancer.",
      lesson: {
        sections: [
          {
            heading: "The cell cycle and mitosis",
            body: "Body cells grow and divide in the **cell cycle**. Most of the cycle is **interphase**, made up of G1 (growth), S (DNA is replicated, so each chromosome becomes two identical **sister chromatids**) and G2 (more growth and preparation). Then **mitosis** (M phase) divides the nucleus, and **cytokinesis** divides the cytoplasm.\n\nThe stages of mitosis are:\n\n- **Prophase:** chromosomes condense and become visible; the nuclear envelope breaks down.\n- **Metaphase:** chromosomes line up along the middle (equator) of the cell.\n- **Anaphase:** sister chromatids are pulled apart to opposite poles.\n- **Telophase:** two new nuclei form and the chromosomes uncoil.\n\nThe result is two **genetically identical** diploid daughter cells. Mitosis is used for growth, repair and asexual reproduction.",
          },
          {
            heading: "Control of the cycle and cancer",
            body: "Checkpoints in the cell cycle, controlled by proteins, make sure DNA is undamaged and fully copied before a cell divides. **Cancer** happens when mutations in genes that control the cell cycle let cells ignore these checkpoints and divide without control. The cells form a mass called a **tumor**. A benign tumor stays in one place; a malignant tumor can invade other tissues and spread (metastasize).\n\nCarcinogens such as tobacco smoke and ultraviolet radiation raise the mutation rate. Because cancer cells divide more often, a larger proportion of them are found in mitosis in a tissue sample. If in a sample of cells counted under a microscope $m$ are in mitosis out of $N$ cells, the **mitotic index** is $\\dfrac{m}{N}$.",
          },
        ],
        keyFormulas: [
          { name: "Order of mitosis", statement: "Prophase, metaphase, anaphase, telophase (then cytokinesis)" },
          { name: "Mitotic index", statement: "$\\text{mitotic index} = \\dfrac{\\text{cells in mitosis}}{\\text{total cells counted}}$" },
          { name: "Mitosis result", statement: "2 genetically identical diploid cells from 1" },
        ],
        workedExample: {
          problem: "A student counts 250 cells in a root tip. 40 are in mitosis. Calculate the mitotic index as a percentage.",
          solution: "Mitotic index $= \\dfrac{40}{250} = 0.16$, which is $16\\%$.",
        },
      },
      questions: [
        {
          id: "bio9-u3-mitosis-cell-cycle-cancer-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "During which stage of mitosis are sister chromatids pulled apart to opposite poles of the cell?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Prophase" },
              { id: "b", text: "Metaphase" },
              { id: "c", text: "Anaphase" },
              { id: "d", text: "Telophase" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Anaphase", statement: "In anaphase the sister chromatids separate and move to opposite poles." },
            ],
            steps: [
              { reasoning: "Spindle fibers shorten and pull the chromatids apart during anaphase.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Anaphase",
            commonErrors: ["Choosing metaphase, when chromosomes line up at the equator but have not yet separated.", "Choosing telophase, when the new nuclei form."],
            examinerNote: "B1 for anaphase.",
          },
        },
        {
          id: "bio9-u3-mitosis-cell-cycle-cancer-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A student examines 400 cells from a tumor biopsy and finds that 88 are in mitosis. In normal tissue from the same organ, the mitotic index is 6%.\n\nCalculate the mitotic index of the tumor sample as a percentage, and calculate how many times greater it is than the normal tissue. Give the second answer to 1 decimal place.",
          response: {
            type: "numeric",
            parts: [
              { label: "Mitotic index of tumor", answer: 22, unit: "%" },
              { label: "Times greater than normal", answer: 3.7, tolerance: 0.05 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Mitotic index", statement: "mitotic index = cells in mitosis / total cells counted" },
            ],
            steps: [
              { reasoning: "Divide the cells in mitosis by the total counted and convert to a percentage.", working: "\\frac{88}{400}\\times100 = 22\\%", marks: 1, markCode: "M" },
              { reasoning: "Divide by the normal value.", working: "\\frac{22}{6}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate to 1 decimal place.", working: "3.67\\ldots \\approx 3.7", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Mitotic index $22\\%$; about $3.7$ times greater than normal",
            commonErrors: ["Dividing 88 by the number of cells not in mitosis (312).", "Subtracting 6 from 22 to get 16 instead of dividing."],
            examinerNote: "M1 for 88/400 (x 100). M1 for their 22 / 6. A1 for 3.7. Allow 22 and 3.7 as separate answers.",
          },
        },
        {
          id: "bio9-u3-mitosis-cell-cycle-cancer-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A student claims: \"Cancer is caused by a virus that makes cells divide, so it cannot be caused by a change in a person's own genes.\"\n\nConstruct an explanation, using evidence about the cell cycle, to evaluate this claim.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Cancer and mutation", statement: "Cancer results from mutations in genes controlling the cell cycle, which allow uncontrolled division." },
            ],
            steps: [
              { reasoning: "Claim: the statement is incorrect (or only partly correct), because cancer is usually caused by mutations in a person's own cells' genes.", marks: 1, markCode: "R" },
              { reasoning: "Evidence: mutations in genes that code for checkpoint or growth-control proteins stop the cell cycle being regulated, and the cell divides repeatedly.", marks: 1, markCode: "B" },
              { reasoning: "Evidence: mutation rate is raised by carcinogens such as tobacco smoke or UV radiation, which damage DNA (some viruses also cause cancer by altering these genes).", marks: 1, markCode: "B" },
              { reasoning: "Reasoning: the mutated cells divide by mitosis without control, producing a tumor of identical cells that may spread.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "The claim is wrong or incomplete. Cancer arises when mutations in a person's own cell-cycle control genes (often caused by carcinogens) allow uncontrolled mitosis; only some cancers involve viruses.",
            commonErrors: ["Saying cancer is always inherited from parents.", "Saying cancer cells do not go through mitosis."],
            examinerNote: "R1 for rejecting or qualifying claim. B1 for mutation of control genes / loss of regulation. B1 for a named carcinogen or cause of mutation. R1 for uncontrolled mitosis forming a tumor. Allow 'some viruses can cause cancer' as credit for qualifying the claim.",
          },
        },
        {
          id: "bio9-u3-mitosis-cell-cycle-cancer-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Human body cells have 46 chromosomes. A scientist studies a population of skin cells that divide by mitosis.",
          parts: [
            { label: "a", prompt: "State the number of chromosomes in each daughter cell after mitosis.", marks: 1 },
            { label: "b", prompt: "Describe what happens to the chromosomes during metaphase and anaphase.", marks: 2 },
            { label: "c", prompt: "A skin cell starts with 1 cell. Each cell completes the cell cycle in 24 hours. Calculate the number of cells after 6 days.", marks: 2 },
            { label: "d", prompt: "State the number of chromatids in one chromosome after the S phase of interphase, and explain why.", marks: 2 },
            { label: "e", prompt: "Explain why mitosis is important for a person after a cut to the skin.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Mitosis", statement: "Mitosis produces two genetically identical daughter cells with the same chromosome number as the parent." },
              { kind: "formula", name: "Doubling", statement: "Number of cells after n divisions $= 2^n$ (from one cell)." },
            ],
            steps: [
              { part: "a", reasoning: "Mitosis keeps the chromosome number the same.", working: "46", marks: 1, markCode: "B" },
              { part: "b", reasoning: "In metaphase, the chromosomes line up along the equator of the cell.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "In anaphase, the sister chromatids are separated and pulled to opposite poles.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "6 days is 6 divisions, each doubling the number of cells.", working: "2^6", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "2^6 = 64\\text{ cells}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Each chromosome has 2 chromatids after S phase.", working: "2", marks: 1, markCode: "B" },
              { part: "d", reasoning: "DNA has been replicated, so the two sister chromatids are identical copies joined at the centromere.", marks: 1, markCode: "R" },
              { part: "e", reasoning: "Mitosis makes new cells to replace damaged ones and close the wound.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "The new cells are genetically identical to the originals, so they have the same function as the skin cells they replace.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) 46 (b) Chromosomes line up at the equator in metaphase; sister chromatids are pulled apart to opposite poles in anaphase (c) 64 cells (d) 2 chromatids, because DNA was replicated in S phase (e) Mitosis produces genetically identical cells for repair and growth.",
            commonErrors: ["In (a) giving 23 (that is the number in a gamete).", "In (c) multiplying 2 x 6 = 12.", "In (d) giving 4, or 1."],
            examinerNote: "(b) Do not accept 'chromosomes' for 'chromatids' in anaphase if the idea of separation is clear; allow 'chromosomes split'. (c) Allow ecf for A1 if 2 to the power of their number of days is used. (e) Allow 'growth' only with 'repair'.",
          },
        },
      ],
    },
    {
      id: "bio9-u3-meiosis-variation",
      title: "Meiosis and genetic variation",
      skill: "Describe meiosis and explain how crossing over and independent assortment produce genetic variation.",
      lesson: {
        sections: [
          {
            heading: "Meiosis: halving the chromosome number",
            body: "**Meiosis** makes gametes (sperm and eggs) in the reproductive organs. A diploid cell ($2n = 46$ in humans) divides twice, after one round of DNA replication, to produce **four genetically different haploid cells** ($n = 23$).\n\n- **Meiosis I:** homologous chromosomes pair up, then are separated, so each cell receives one chromosome from each pair. This halves the chromosome number.\n- **Meiosis II:** sister chromatids are separated, like mitosis, giving four haploid cells.\n\nAt fertilization, two haploid gametes fuse to form a diploid **zygote**, which restores the chromosome number: $23 + 23 = 46$. Without meiosis, the chromosome number would double in every generation.",
          },
          {
            heading: "Sources of variation",
            body: "Meiosis creates new combinations of alleles in three ways.\n\n- **Crossing over:** in prophase I, homologous chromosomes swap segments, creating chromosomes with new combinations of alleles (recombinants).\n- **Independent assortment:** each homologous pair lines up at the equator in a random orientation at metaphase I, so maternal and paternal chromosomes are shuffled into gametes. With $n$ pairs, there are $2^n$ possible combinations (ignoring crossing over). In humans $n = 23$, so $2^{23} = 8\\,388\\,608$.\n- **Random fertilization:** any sperm can fuse with any egg.\n\nErrors can occur. In **nondisjunction**, chromosomes fail to separate, giving gametes with an extra or missing chromosome. Trisomy 21 (Down syndrome) is caused by an extra copy of chromosome 21.",
          },
        ],
        keyFormulas: [
          { name: "Meiosis result", statement: "1 diploid cell gives 4 genetically different haploid cells" },
          { name: "Chromosome combinations", statement: "$2^n$ combinations from independent assortment ($n$ = number of homologous pairs)" },
          { name: "Fertilization", statement: "haploid gamete + haploid gamete = diploid zygote" },
        ],
        workedExample: {
          problem: "A fruit fly has a diploid number of 8. How many different combinations of chromosomes are possible in its gametes from independent assortment alone?",
          solution: "The diploid number is 8, so there are $8 \\div 2 = 4$ homologous pairs. The number of combinations is $2^4 = 16$.",
        },
      },
      questions: [
        {
          id: "bio9-u3-meiosis-variation-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A human cell undergoes meiosis. How many cells are produced, and how many chromosomes does each have?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "2 cells, each with 46 chromosomes" },
              { id: "b", text: "2 cells, each with 23 chromosomes" },
              { id: "c", text: "4 cells, each with 46 chromosomes" },
              { id: "d", text: "4 cells, each with 23 chromosomes" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Meiosis", statement: "Meiosis produces four genetically different haploid cells from one diploid cell." },
            ],
            steps: [
              { reasoning: "Two divisions give four cells, and the chromosome number is halved from 46 to 23.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** 4 cells, each with 23 chromosomes",
            commonErrors: ["Choosing (a), which describes mitosis.", "Choosing (b), forgetting that meiosis II happens."],
            examinerNote: "B1 for (d).",
          },
        },
        {
          id: "bio9-u3-meiosis-variation-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A species of plant has a diploid number of 12 chromosomes.\n\nCalculate the number of homologous pairs, and the number of different combinations of chromosomes possible in the gametes from independent assortment alone (ignore crossing over).",
          response: {
            type: "numeric",
            parts: [
              { label: "Homologous pairs", answer: 6 },
              { label: "Possible combinations", answer: 64 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Independent assortment", statement: "Number of combinations $= 2^n$, where n is the number of homologous pairs." },
            ],
            steps: [
              { reasoning: "Homologous pairs are half the diploid number.", working: "n = \\frac{12}{2} = 6", marks: 1, markCode: "B" },
              { reasoning: "Use the formula with n = 6.", working: "2^6", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "2^6 = 64", marks: 1, markCode: "A" },
            ],
            finalAnswer: "6 pairs; 64 combinations",
            commonErrors: ["Using 2^12 = 4096 by using the diploid number.", "Calculating 6^2 = 36."],
            examinerNote: "B1 for 6. M1 for 2 to the power of their n. A1 for 64.",
          },
        },
        {
          id: "bio9-u3-meiosis-variation-q3",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Siblings with the same two parents are genetically different from each other, but identical twins are almost genetically identical.\n\nExplain, using meiosis and fertilization, why siblings differ, and why identical twins do not.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Sources of variation", statement: "Crossing over, independent assortment and random fertilization create genetic variation; identical twins form from one zygote by mitosis." },
            ],
            steps: [
              { reasoning: "Crossing over in prophase I swaps segments between homologous chromosomes, creating new allele combinations.", marks: 1, markCode: "B" },
              { reasoning: "Independent assortment: homologous pairs orient randomly at metaphase I, so each gamete has a different mix of maternal and paternal chromosomes.", marks: 1, markCode: "B" },
              { reasoning: "Random fertilization: any one of millions of different sperm can fuse with any egg, giving different combinations.", marks: 1, markCode: "B" },
              { reasoning: "Identical twins come from a single fertilized egg (one zygote), which splits into two embryos.", marks: 1, markCode: "B" },
              { reasoning: "The embryos grow by mitosis, which copies DNA exactly, so twins have the same genes (small differences are due to mutations or the environment).", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Siblings differ because of crossing over, independent assortment and random fertilization. Identical twins develop from one zygote that splits, and mitosis makes genetically identical cells.",
            commonErrors: ["Saying siblings differ because meiosis copies DNA with mistakes.", "Saying identical twins come from two eggs."],
            examinerNote: "Any three from crossing over, independent assortment, random fertilization for 3 marks. B1 for one zygote / one fertilization. R1 for identical copies by mitosis. Allow 'genetic differences are due to chance' only with a named process.",
          },
        },
        {
          id: "bio9-u3-meiosis-variation-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Nondisjunction is an error in meiosis in which a pair of chromosomes fails to separate. A woman produces an egg with 24 chromosomes because both copies of chromosome 21 went into the same egg. The egg is fertilized by a normal sperm.",
          parts: [
            { label: "a", prompt: "State the normal number of chromosomes in a human sperm cell.", marks: 1 },
            { label: "b", prompt: "Calculate the number of chromosomes in the zygote formed.", marks: 1 },
            { label: "c", prompt: "Explain why the resulting child will have three copies of chromosome 21.", marks: 2 },
            { label: "d", prompt: "Describe the difference between what happens to chromosomes in anaphase I of meiosis and in anaphase of mitosis.", marks: 3 },
            { label: "e", prompt: "Evaluate whether meiosis or mitosis is more suited to producing the cells needed for sexual reproduction, giving two reasons.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Meiosis", statement: "Meiosis halves the chromosome number and produces genetically different gametes." },
              { kind: "principle", name: "Nondisjunction", statement: "Failure of chromosomes to separate produces gametes with an extra or a missing chromosome." },
            ],
            steps: [
              { part: "a", reasoning: "A gamete is haploid.", working: "23", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Add the egg and sperm chromosome numbers.", working: "24 + 23 = 47", marks: 1, markCode: "A" },
              { part: "c", reasoning: "The egg carries two copies of chromosome 21 instead of one.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "The sperm contributes one more copy, giving three copies in total (trisomy 21).", marks: 1, markCode: "R" },
              { part: "d", reasoning: "In anaphase I, whole homologous chromosomes (each still made of two chromatids) are separated.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "In anaphase of mitosis, the sister chromatids are separated.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "So anaphase I halves the chromosome number, while mitosis keeps it the same.", marks: 1, markCode: "R" },
              { part: "e", reasoning: "Meiosis is more suited because it halves the chromosome number, so fertilization restores 46 rather than doubling it each generation.", marks: 1, markCode: "R" },
              { part: "e", reasoning: "Meiosis produces genetically different gametes (crossing over and independent assortment), giving variation among offspring.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "Mitosis would produce identical diploid cells, which would give no variation and the wrong chromosome number.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) 23 (b) 47 (c) The egg has two copies of chromosome 21 and the sperm adds a third (d) Anaphase I separates homologous chromosomes; mitotic anaphase separates sister chromatids (e) Meiosis halves the number so fertilization restores 46, and gives variation; mitosis would give identical diploid cells.",
            commonErrors: ["In (b) giving 46 or 48.", "In (d) saying chromatids separate in both.", "In (e) saying mitosis is better because it is faster."],
            examinerNote: "(d) Allow homologous pairs / chromosome pairs for homologous chromosomes. (e) Credit any two reasons plus the evaluative conclusion for 3 marks.",
          },
        },
      ],
    },
  ],
};
