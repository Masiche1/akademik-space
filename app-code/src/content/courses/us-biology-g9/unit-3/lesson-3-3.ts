import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "bio9-u3-lesson-3-3",
  code: "3-3",
  title: "Inheritance",
  goal: "I CAN use Punnett squares and probability to predict the results of monohybrid and dihybrid crosses, and analyze patterns of inheritance including incomplete dominance, codominance, multiple alleles, sex-linked traits and pedigrees.",
  standards: [
    "HS-LS3-1",
    "HS-LS3-3",
    "SEP: Analyzing and Interpreting Data",
    "SEP: Using Mathematics and Computational Thinking",
    "CCC: Cause and Effect",
  ],
  vocabulary: [
    { term: "Allele", definition: "One of the alternative forms of a gene." },
    {
      term: "Homozygous",
      definition: "Having two identical alleles for a gene, such as AA or aa.",
    },
    {
      term: "Heterozygous",
      definition: "Having two different alleles for a gene, such as Aa.",
    },
    {
      term: "Incomplete dominance",
      definition:
        "A pattern in which the heterozygote has a phenotype intermediate between the two homozygotes.",
    },
    {
      term: "Codominance",
      definition:
        "A pattern in which both alleles are fully expressed in the heterozygote.",
    },
    {
      term: "Sex-linked trait",
      definition:
        "A trait whose gene is on a sex chromosome, usually the X chromosome.",
    },
    {
      term: "Pedigree",
      definition:
        "A family tree diagram that shows how a trait is inherited through generations.",
    },
  ],
  concepts: [
    {
      id: "bio9-u3-mono-dihybrid-crosses",
      title: "Monohybrid and dihybrid crosses",
      skill:
        "Use Punnett squares and the rules of probability to predict offspring genotype and phenotype ratios.",
      lesson: {
        sections: [
          {
            heading: "Monohybrid crosses",
            body: "A **monohybrid cross** follows one gene. Each parent has two alleles and gives one to each gamete at random (Mendel's law of segregation). A dominant allele (capital letter) is expressed if at least one copy is present; a recessive allele (lowercase) is expressed only when two copies are present.\n\nFor a cross between two heterozygotes, $\\text{Aa} \\times \\text{Aa}$, the Punnett square gives $\\text{AA} : \\text{Aa} : \\text{aa}$ in the ratio $1 : 2 : 1$. The phenotype ratio is $3 : 1$ (dominant : recessive). Each offspring has a $\\frac{1}{4}$ chance of being $\\text{aa}$. Each birth is **independent**: earlier offspring do not change the chances of later ones.",
          },
          {
            heading: "Dihybrid crosses and probability rules",
            body: "A **dihybrid cross** follows two genes at once. If the genes are on different chromosomes they are sorted into gametes independently (Mendel's law of independent assortment). A parent $\\text{RrYy}$ makes four gamete types in equal numbers: RY, Ry, rY and ry. The cross $\\text{RrYy} \\times \\text{RrYy}$ has 16 squares and gives the phenotype ratio $9 : 3 : 3 : 1$.\n\nYou can avoid drawing 16 squares with the **product rule**: the probability of two independent events both happening is the product of their probabilities. The **sum rule**: the probability of either of two mutually exclusive outcomes is the sum. For example, round and yellow (both dominant) has probability $\\frac{3}{4} \\times \\frac{3}{4} = \\frac{9}{16}$. A **test cross** with a homozygous recessive parent ($\\text{RrYy} \\times \\text{rryy}$) gives $1 : 1 : 1 : 1$.",
          },
        ],
        keyFormulas: [
          {
            name: "Monohybrid cross",
            statement:
              "$\\text{Aa} \\times \\text{Aa}$ gives $1\\,\\text{AA} : 2\\,\\text{Aa} : 1\\,\\text{aa}$, phenotypes $3 : 1$",
          },
          {
            name: "Dihybrid cross",
            statement:
              "$\\text{AaBb} \\times \\text{AaBb}$ gives phenotypes $9 : 3 : 3 : 1$",
          },
          {
            name: "Product rule",
            statement:
              "$P(A \\text{ and } B) = P(A) \\times P(B)$ for independent events",
          },
          {
            name: "Expected number",
            statement: "expected number $= P \\times \\text{total offspring}$",
          },
        ],
        workedExample: {
          problem:
            "In pea plants, tall (T) is dominant to short (t) and green pods (G) are dominant to yellow pods (g). Two plants with genotype TtGg are crossed. What is the probability that an offspring is short with green pods?",
          solution:
            "Treat each gene separately. For height, $\\text{Tt} \\times \\text{Tt}$ gives $P(\\text{tt}) = \\frac{1}{4}$. For pod color, $\\text{Gg} \\times \\text{Gg}$ gives $P(\\text{green}) = \\frac{3}{4}$. The genes are independent, so multiply: $\\frac{1}{4} \\times \\frac{3}{4} = \\frac{3}{16}$, or $18.75\\%$.",
        },
      },
      questions: [
        {
          id: "bio9-u3-mono-dihybrid-crosses-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Two plants that are both heterozygous for two independent genes ($\\text{AaBb} \\times \\text{AaBb}$) are crossed. What is the expected phenotype ratio of the offspring?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "9 : 3 : 3 : 1" },
              { id: "b", text: "1 : 1 : 1 : 1" },
              { id: "c", text: "1 : 2 : 1" },
              { id: "d", text: "3 : 1" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Independent assortment",
                statement:
                  "A dihybrid cross of two heterozygotes gives phenotypes in the ratio 9 : 3 : 3 : 1.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A 16-square Punnett square gives 9 double dominant, 3 + 3 with one recessive trait, and 1 double recessive.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** 9 : 3 : 3 : 1",
            commonErrors: [
              "Choosing 3 : 1, the monohybrid ratio.",
              "Choosing 1 : 1 : 1 : 1, the test cross ratio.",
            ],
            examinerNote: "B1 for (c).",
          },
        },
        {
          id: "bio9-u3-mono-dihybrid-crosses-q2",
          difficulty: "core",
          totalMarks: 4,
          stem: "Cystic fibrosis is caused by a recessive allele (c). Two parents are both carriers (genotype $\\text{Cc}$).\n\nCalculate the probability that a child has cystic fibrosis, and the probability that their first two children both have cystic fibrosis. Give both answers as percentages.",
          response: {
            type: "numeric",
            parts: [
              { label: "One child affected", answer: 25, unit: "%" },
              {
                label: "Both children affected",
                answer: 6.25,
                unit: "%",
                tolerance: 0.01,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Segregation",
                statement:
                  "Each parent passes on one allele at random, so Cc x Cc gives CC, Cc, Cc and cc.",
              },
              {
                kind: "formula",
                name: "Product rule",
                statement: "P(A and B) = P(A) x P(B) for independent events.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The Punnett square gives CC, Cc, Cc and cc. Only cc is affected.",
                working: "P(cc)=\\frac{1}{4}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Convert to a percentage.",
                working: "\\frac{1}{4}=25\\%",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "The two births are independent, so multiply the probabilities.",
                working: "\\frac{1}{4}\\times\\frac{1}{4}=\\frac{1}{16}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Convert to a percentage.",
                working: "\\frac{1}{16}=0.0625=6.25\\%",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$25\\%$; $6.25\\%$",
            commonErrors: [
              "Adding 25% + 25% = 50% for the two children.",
              "Thinking that after one affected child the next child is certain to be unaffected.",
            ],
            examinerNote:
              "M1 for 1/4 or correct Punnett square. A1 25. M1 for their probability squared or x 1/4. A1 6.25. Allow 1/16 or 0.0625 oe.",
          },
        },
        {
          id: "bio9-u3-mono-dihybrid-crosses-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "In pea plants, round seeds (R) are dominant to wrinkled (r), and yellow seeds (Y) are dominant to green (y). The genes are on different chromosomes. Two plants with genotype $\\text{RrYy}$ are crossed and produce 640 seeds.\n\nCalculate the expected number of round yellow seeds and the expected number of wrinkled green seeds.",
          response: {
            type: "numeric",
            parts: [
              { label: "Round yellow", answer: 360 },
              { label: "Wrinkled green", answer: 40 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Independent assortment",
                statement:
                  "The phenotype ratio of RrYy x RrYy is 9 : 3 : 3 : 1, out of 16.",
              },
              {
                kind: "formula",
                name: "Expected number",
                statement: "expected number = probability x total offspring",
              },
            ],
            steps: [
              {
                reasoning: "Round yellow is the 9 in 16 class.",
                working: "\\frac{9}{16}\\times640",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate.",
                working: "\\frac{9}{16}\\times640 = 9\\times40 = 360",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Wrinkled green (rryy) is the 1 in 16 class.",
                working: "\\frac{1}{16}\\times640",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate.",
                working: "40",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "360 round yellow; 40 wrinkled green",
            commonErrors: [
              "Using 3/16 for round yellow.",
              "Using 1/4 for wrinkled green (that is the probability of one recessive trait, not both).",
            ],
            examinerNote:
              "M1 9/16 x 640. A1 360. M1 1/16 x 640. A1 40. Allow ecf from an incorrect fraction.",
          },
        },
        {
          id: "bio9-u3-mono-dihybrid-crosses-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "In pea plants, round seeds (R) are dominant to wrinkled (r) and yellow seeds (Y) are dominant to green (y). The two genes are on different chromosomes. Two pea plants, both with genotype $\\text{RrYy}$, are crossed.",
          parts: [
            {
              label: "a",
              prompt:
                "List the four types of gamete that each parent can produce.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Calculate the probability that an offspring has wrinkled, yellow seeds. Give your answer as a fraction.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "The cross produces 160 offspring. Calculate the expected number with round, green seeds.",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                'Explain what "independent assortment" means and why it produces four gamete types in equal numbers.',
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Independent assortment",
                statement:
                  "Alleles of genes on different chromosomes are sorted into gametes independently.",
              },
              {
                kind: "formula",
                name: "Product rule",
                statement: "P(A and B) = P(A) x P(B) for independent events.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Each gamete gets one allele of each gene: any R or r with any Y or y.",
                working: "\\text{RY},\\ \\text{Ry},\\ \\text{rY},\\ \\text{ry}",
                marks: 2,
                markCode: "B",
              },
              {
                part: "b",
                reasoning:
                  "Wrinkled needs rr (1/4) and yellow needs at least one Y (3/4). Multiply the independent probabilities.",
                working: "\\frac{1}{4}\\times\\frac{3}{4}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Evaluate.",
                working: "\\frac{3}{16}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Round green needs at least one R (3/4) and yy (1/4), which is 3/16. Multiply by the number of offspring.",
                working: "\\frac{3}{16}\\times160",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Evaluate.",
                working: "30",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning:
                  "Independent assortment means the allele a gamete receives for one gene does not affect which allele it receives for the other gene.",
                marks: 1,
                markCode: "B",
              },
              {
                part: "d",
                reasoning:
                  "This happens because the two genes are on different pairs of homologous chromosomes, which line up randomly in metaphase I of meiosis.",
                marks: 1,
                markCode: "B",
              },
              {
                part: "d",
                reasoning:
                  "So each of the four combinations is equally likely, giving gametes in the ratio 1 : 1 : 1 : 1.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) RY, Ry, rY, ry (b) 3/16 (c) 30 (d) The allele for one gene is passed on independently of the other because the genes are on different chromosome pairs that line up randomly in meiosis, so all four combinations are equally likely.",
            commonErrors: [
              "In (a) listing Rr and Yy, which are not gametes (gametes have one allele per gene).",
              "In (b) using 1/16, the probability for rryy.",
              "In (c) using 9/16 or 1/16.",
            ],
            examinerNote:
              "(a) B2 all four, B1 for two or three correct, and none that contain two alleles of the same gene. (b)-(c) Allow ecf. (d) Allow 'random orientation of chromosome pairs'.",
          },
        },
      ],
    },
    {
      id: "bio9-u3-non-mendelian-pedigrees",
      title: "Non-Mendelian inheritance, sex linkage and pedigrees",
      skill:
        "Predict outcomes for incomplete dominance, codominance, multiple alleles and sex-linked traits, and interpret pedigrees.",
      lesson: {
        sections: [
          {
            heading: "Patterns that are not simple dominance",
            body: "- **Incomplete dominance:** the heterozygote shows a blend. In snapdragons, red ($\\text{C}^R\\text{C}^R$) crossed with white ($\\text{C}^W\\text{C}^W$) gives pink ($\\text{C}^R\\text{C}^W$). Two pink plants give red : pink : white in the ratio $1 : 2 : 1$.\n- **Codominance:** both alleles are fully expressed. In human ABO blood groups, $I^A$ and $I^B$ are codominant, so $I^A I^B$ gives type AB. Both $I^A$ and $I^B$ are dominant to $i$.\n- **Multiple alleles:** the gene has more than two alleles in the population (ABO has three), although each person has only two. Genotypes $I^A I^A$ or $I^A i$ give type A; $I^B I^B$ or $I^B i$ give type B; $ii$ gives type O.",
          },
          {
            heading: "Sex-linked traits and pedigrees",
            body: "Females are XX and males are XY. Many genes on the X chromosome have no matching gene on the short Y chromosome, so a male with one recessive allele on his X chromosome shows the trait. Red-green color blindness is **X-linked recessive** ($X^c$). A female needs two copies ($X^c X^c$) to be affected; a female with $X^C X^c$ is a **carrier**. A father passes his X to daughters and his Y to sons, so a son inherits an X-linked trait from his **mother**, never from his father.\n\nA **pedigree** uses squares for males and circles for females, with shaded symbols for affected people. Clues: if two unaffected parents have an affected child, the trait is **recessive** and both parents are carriers. If an affected daughter has an unaffected father, the trait cannot be X-linked recessive. Traits that appear mostly in males and skip generations suggest X-linked recessive inheritance.",
          },
        ],
        keyFormulas: [
          {
            name: "Incomplete dominance",
            statement:
              "Heterozygote has an intermediate phenotype (red x white = all pink)",
          },
          {
            name: "ABO blood groups",
            statement:
              "$I^A$ and $I^B$ codominant; both dominant to $i$; $ii$ = type O",
          },
          {
            name: "X-linked cross",
            statement:
              "$X^C X^c \\times X^C Y$ gives $X^C X^C : X^C X^c : X^C Y : X^c Y$ (1 : 1 : 1 : 1)",
          },
        ],
        workedExample: {
          problem:
            "A woman who is a carrier of color blindness ($X^C X^c$) has children with a man with normal vision ($X^C Y$). What is the probability that a son is color blind?",
          solution:
            "The mother's gametes are $X^C$ and $X^c$. The father gives $X^C$ to daughters and $Y$ to sons. A son always gets the father's Y, so his X comes from the mother. There is a $\\frac{1}{2}$ chance he gets $X^c$ and is color blind. The probability is $\\frac{1}{2}$, or $50\\%$.",
        },
      },
      questions: [
        {
          id: "bio9-u3-non-mendelian-pedigrees-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In snapdragons, flower color shows incomplete dominance. A red-flowered plant ($\\text{C}^R\\text{C}^R$) is crossed with a white-flowered plant ($\\text{C}^W\\text{C}^W$). What is the phenotype of all the offspring?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Pink" },
              { id: "b", text: "Red" },
              {
                id: "c",
                text: "Half red and half white petals on each flower",
              },
              { id: "d", text: "White" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Incomplete dominance",
                statement:
                  "The heterozygote has a phenotype intermediate between the two homozygotes.",
              },
            ],
            steps: [
              {
                reasoning:
                  "All offspring are C^R C^W, which have an intermediate (pink) phenotype.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** Pink",
            commonErrors: [
              "Choosing red, treating one allele as completely dominant.",
              "Choosing (d), which describes codominance rather than a blended phenotype.",
            ],
            examinerNote: "B1 for pink.",
          },
        },
        {
          id: "bio9-u3-non-mendelian-pedigrees-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A father has blood group A (genotype $I^A i$) and a mother has blood group B (genotype $I^B i$).\n\nCalculate the percent probability that a child has blood group AB, and the percent probability that a child has blood group A or B.",
          response: {
            type: "numeric",
            parts: [
              { label: "Group AB", answer: 25, unit: "%" },
              { label: "Group A or B", answer: 50, unit: "%" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Codominance and multiple alleles",
                statement:
                  "I^A and I^B are codominant and both dominant to i; I^A I^B gives group AB, ii gives group O.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Punnett square: the offspring are I^A I^B, I^A i, I^B i and ii, each with probability 1/4.",
                working: "I^AI^B,\\ I^Ai,\\ I^Bi,\\ ii",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "One of four squares is AB.",
                working: "P(AB)=\\frac{1}{4}=25\\%",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "I^A i is group A and I^B i is group B, so two of four squares.",
                working: "P(A\\text{ or }B)=\\frac{2}{4}=50\\%",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "AB: $25\\%$; A or B: $50\\%$",
            commonErrors: [
              "Thinking that two squares give AB.",
              "Forgetting that ii (group O) is possible.",
            ],
            examinerNote:
              "M1 correct Punnett square or four genotypes. A1 25. A1 50. Allow fractions.",
          },
        },
        {
          id: "bio9-u3-non-mendelian-pedigrees-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Red-green color blindness is caused by a recessive allele ($X^c$) on the X chromosome. A carrier woman ($X^C X^c$) and a man with normal vision ($X^C Y$) have 200 children.\n\nCalculate the percent probability that a randomly chosen child is color blind, the percent probability that a son is color blind, and the expected number of color blind children among the 200.",
          response: {
            type: "numeric",
            parts: [
              { label: "Any child color blind", answer: 25, unit: "%" },
              { label: "A son color blind", answer: 50, unit: "%" },
              { label: "Expected color blind children", answer: 50 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "X-linked recessive",
                statement:
                  "Males have one X, so one recessive allele on it causes the trait; females need two.",
              },
              {
                kind: "formula",
                name: "Expected number",
                statement: "expected number = probability x total offspring",
              },
            ],
            steps: [
              {
                reasoning:
                  "Punnett square gives X^C X^C, X^C X^c, X^C Y, X^c Y, equally likely. Only X^c Y is color blind.",
                working: "P=\\frac{1}{4}=25\\%",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Sons are X^C Y or X^c Y, equally likely, so half are color blind.",
                working: "\\frac{1}{2}=50\\%",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Multiply the probability for any child by the number of children.",
                working: "\\frac{1}{4}\\times200",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate.",
                working: "50",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$25\\%$; $50\\%$; 50 children",
            commonErrors: [
              "Saying 50% of all children are affected.",
              "Saying daughters can be color blind in this cross (they cannot, since the father gives them X^C).",
            ],
            examinerNote:
              "M1 correct Punnett square / 1/4. A1 for 25% and A1 for 50%. M1 for 1/4 x 200. A1 for 50. Allow ecf from an incorrect probability.",
          },
        },
        {
          id: "bio9-u3-non-mendelian-pedigrees-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "In a family pedigree, two unaffected parents have three children: an affected daughter, an unaffected son and an unaffected daughter. The affected condition is rare.",
          parts: [
            {
              label: "a",
              prompt:
                "State whether the allele for the condition is dominant or recessive, and give a reason.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Explain why the condition is autosomal and cannot be X-linked recessive.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Using the symbols A and a, give the genotype of both parents.",
              marks: 1,
            },
            {
              label: "d",
              prompt:
                "Calculate the probability that the parents' next child is affected. Give your answer as a percentage.",
              marks: 1,
            },
            {
              label: "e",
              prompt:
                "The unaffected son is chosen. Calculate the probability that he is a carrier. Give your answer as a fraction.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Reading pedigrees",
                statement:
                  "Unaffected parents with an affected child means the allele is recessive and both parents are carriers.",
              },
              {
                kind: "principle",
                name: "X-linked recessive",
                statement:
                  "An affected daughter must receive an X^c from her father, so her father must be affected.",
              },
            ],
            steps: [
              { part: "a", reasoning: "Recessive.", marks: 1, markCode: "B" },
              {
                part: "a",
                reasoning:
                  "Two unaffected parents have an affected child, so each parent carries a hidden recessive allele that was passed on.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "b",
                reasoning:
                  "If it were X-linked recessive, an affected daughter would be X^c X^c and would have inherited an X^c from her father.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "b",
                reasoning:
                  "Her father is unaffected (X^C Y), so he has no X^c to give her. The gene is therefore on an autosome.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning: "Both parents are carriers.",
                working: "\\text{Aa and Aa}",
                marks: 1,
                markCode: "B",
              },
              {
                part: "d",
                reasoning: "Aa x Aa gives aa with probability 1/4.",
                working: "\\frac{1}{4}=25\\%",
                marks: 1,
                markCode: "A",
              },
              {
                part: "e",
                reasoning:
                  "Unaffected offspring are AA, Aa or Aa, so there are three equally likely outcomes. Two are carriers.",
                working: "\\text{3 unaffected outcomes}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "e",
                reasoning: "Two of the three are Aa.",
                working: "\\frac{2}{3}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Recessive; unaffected parents had an affected child (b) The affected daughter would need an X^c from her unaffected father, which is impossible, so it is autosomal (c) Aa and Aa (d) 25% (e) 2/3",
            commonErrors: [
              "In (a) saying dominant because the condition skips a generation.",
              "In (e) answering 1/2 by treating the unaffected son as if aa were possible.",
            ],
            examinerNote:
              "(a) Reason must refer to unaffected parents having an affected child. (d) Allow 1/4. (e) Allow 0.67 or 66.7%; M1 for denominator 3.",
          },
        },
      ],
    },
  ],
};
