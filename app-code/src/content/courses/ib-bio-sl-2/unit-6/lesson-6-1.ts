import type { Lesson } from "../../../types.ts";

export const lesson61: Lesson = {
  id: "biosl-u6-lesson-6-1",
  code: "6-1",
  title: "Pedigrees and Inheritance Patterns",
  goal: "I CAN interpret pedigrees to deduce inheritance patterns, and apply non-Mendelian inheritance including codominance, multiple alleles and sex linkage.",
  standards: ["Topic A.3", "Topic A.3.1", "Paper 1", "Paper 2"],
  vocabulary: [
    { term: "Pedigree", definition: "A family tree diagram using symbols to show the inheritance of a trait across generations." },
    { term: "Genotype", definition: "The genetic constitution of an individual, e.g. AA, Aa or aa." },
    { term: "Phenotype", definition: "The observable characteristics of an individual, resulting from genotype and environment." },
    { term: "Carrier", definition: "A heterozygous individual who does not show a recessive trait but can pass the allele to offspring." },
    { term: "Codominance", definition: "Inheritance where both alleles are fully expressed in the heterozygote, e.g. AB blood group." },
    { term: "Sex-linked trait", definition: "A trait controlled by a gene on a sex chromosome, usually the X chromosome, e.g. colour blindness." },
  ],
  concepts: [
    {
      id: "biosl-u6-pedigrees",
      title: "Reading pedigrees",
      skill: "Interpret pedigree symbols and deduce whether a trait is dominant, recessive or sex-linked, and identify carriers.",
      lesson: {
        sections: [
          {
            heading: "Pedigree symbols and conventions",
            body: "In a pedigree, circles are females and squares are males; filled symbols show affected individuals; horizontal lines join parents and vertical lines drop to children. Roman numerals mark generations and Arabic numerals identify individuals. A pedigree lets us deduce an inheritance pattern even when we cannot genotype every member.",
          },
          {
            heading: "Deduction rules",
            body: "Key logic: **two unaffected parents have an affected child** → the trait is recessive, and both parents are carriers. **Affected child of unaffected parents** rules out dominant inheritance. If only males are affected and the trait passes from mother to son, suspect **sex-linked (X-linked) recessive**. An affected father cannot pass an X-linked allele to his sons (he gives them Y).",
          },
          {
            heading: "Carriers and probabilities",
            body: "Carriers are heterozygotes for a recessive allele and are usually unaffected. Once a pattern is deduced, Punnett squares or conditional probabilities can predict the genotype of at-risk relatives. Pedigree analysis is used in genetic counselling for conditions such as cystic fibrosis or haemophilia.",
          },
        ],
        keyFormulas: [
          { name: "Recessive indicator", statement: "Unaffected parents + affected child → recessive trait; parents are carriers" },
          { name: "Sex-linked indicator", statement: "Mostly males affected, passed mother → son → X-linked recessive" },
          { name: "Carrier genotype", statement: "Aa for a recessive disorder; AA and aa are not carriers" },
        ],
        workedExample: {
          problem: "In a pedigree, unaffected parents I-1 and I-2 have an affected daughter II-3. What is the inheritance pattern and the parents' genotypes?",
          solution: "Recessive — affected child of unaffected parents means both parents are heterozygous carriers (Aa × Aa), and the child is aa. Because a daughter is affected, sex-linkage is unlikely; the trait is autosomal recessive.",
        },
      },
      questions: [
        {
          id: "biosl-u6-pedigrees-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 1,
          stem: "In a pedigree, what does a filled circle represent?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A carrier female" },
              { id: "b", text: "An unaffected male" },
              { id: "c", text: "An affected female" },
              { id: "d", text: "An unaffected female" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Pedigree symbols", statement: "Circles = females, squares = males; filled = affected, open = unaffected." },
            ],
            steps: [
              { reasoning: "Filled symbols denote affected individuals; circles denote females.", working: "filled circle = affected female", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** An affected female",
            commonErrors: ["Confusing filled vs open symbols or circles vs squares."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "biosl-u6-pedigrees-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Unaffected parents have an affected child. What does this tell us about the inheritance of the trait?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The trait is recessive and both parents are carriers" },
              { id: "b", text: "The child has a new mutation unrelated to the parents" },
              { id: "c", text: "The trait must be dominant" },
              { id: "d", text: "The trait is sex-linked" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Pedigree deduction", statement: "Affected child of unaffected parents implies recessive inheritance with heterozygous (carrier) parents." },
            ],
            steps: [
              { reasoning: "If the trait were dominant, unaffected parents could not produce an affected child.", working: "rules out dominant", marks: 1, markCode: "M" },
              { reasoning: "Both parents must carry one recessive allele each, so they are heterozygous carriers.", working: "Aa × Aa → aa child", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Recessive; both parents are carriers",
            commonErrors: ["Choosing dominant — an affected child of unaffected parents is impossible for a fully dominant trait."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "biosl-u6-pedigrees-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "In a pedigree for colour blindness, only males are affected. An affected father has only unaffected sons, and an unaffected mother can have affected sons if her father was affected. Which inheritance pattern is most consistent?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Autosomal recessive" },
              { id: "b", text: "Y-linked" },
              { id: "c", text: "Autosomal dominant" },
              { id: "d", text: "X-linked recessive" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "X-linked recessive", statement: "Trait on the X chromosome; males (XY) are affected more often, and fathers cannot pass it to sons." },
            ],
            steps: [
              { reasoning: "Only males affected and mother-to-son transmission fits a gene on the X chromosome.", working: "X-linked pattern", marks: 1, markCode: "M" },
              { reasoning: "Affected father gives his Y to sons, so sons are unaffected — matching the pedigree.", working: "father → Y to sons", marks: 1, markCode: "M" },
              { reasoning: "The mother can be a carrier (XcX) and pass Xc to a son, producing an affected male — X-linked recessive.", working: "carrier mother → affected son", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** X-linked recessive",
            commonErrors: ["Choosing Y-linked — Y-linked traits pass father to son, the opposite of the observed pattern."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "biosl-u6-pedigrees-q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "A pedigree shows a rare condition. Generation I: unaffected parents (I-1 male, I-2 female) have three children — an affected son (II-1), an unaffected daughter (II-2) and an unaffected son (II-3). Generation II: II-2 marries an unaffected unrelated man (II-4); they have an affected daughter (III-1) and an unaffected son (III-2).",
          parts: [
            { label: "a", prompt: "Deduce the inheritance pattern and explain your reasoning.", marks: 2 },
            { label: "b", prompt: "State the genotypes of I-1, I-2 and II-1.", marks: 2 },
            { label: "c", prompt: "Calculate the probability that a child of II-2 and II-4 will be affected.", marks: 2 },
            { label: "d", prompt: "Evaluate whether the pedigree is consistent with the condition being X-linked recessive.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Pedigree deduction", statement: "Unaffected parents with affected children indicate recessive inheritance; affected daughters of unaffected parents rule out X-linked recessive." },
            ],
            steps: [
              { part: "a", reasoning: "Unaffected parents I-1 and I-2 produced an affected child, so the trait is recessive and both parents are carriers.", working: "recessive, Aa × Aa", marks: 1, markCode: "M" },
              { part: "a", reasoning: "An affected daughter (III-1) of an unaffected father rules out X-linked recessive; the trait is autosomal recessive.", working: "affected daughter → autosomal", marks: 1, markCode: "A" },
              { part: "b", reasoning: "I-1 = Aa, I-2 = Aa (both carriers).", working: "Aa and Aa", marks: 1, markCode: "M" },
              { part: "b", reasoning: "II-1 = aa (affected).", working: "aa", marks: 1, markCode: "A" },
              { part: "c", reasoning: "II-2 is unaffected but must be a carrier (Aa), because she has an affected daughter; II-4 is unaffected and unrelated, so most likely AA — but to be safe evaluate both.", working: "II-2 = Aa; II-4 = AA", marks: 1, markCode: "M" },
              { part: "c", reasoning: "If II-4 = AA, no child can be aa, so probability = 0. If II-4 were a carrier, probability = 1/4.", working: "0 if II-4 = AA", marks: 1, markCode: "A" },
              { part: "d", reasoning: "X-linked recessive cannot explain an affected daughter with an unaffected father, because daughters need the allele on both X chromosomes.", working: "daughter affected → not X-linked", marks: 1, markCode: "M" },
              { part: "d", reasoning: "The pedigree is therefore inconsistent with X-linked recessive; autosomal recessive fits all observations.", working: "autosomal recessive fits", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Autosomal recessive — affected child of unaffected parents, and an affected daughter rules out X-linkage. (b) I-1 = Aa, I-2 = Aa, II-1 = aa. (c) 0 if II-4 is AA (most likely); 1/4 only if II-4 were also a carrier. (d) Not consistent — X-linked recessive cannot produce an affected daughter of an unaffected father.",
            commonErrors: ["Forgetting II-2 must be a carrier to have an affected child.", "Assuming every unaffected person with an affected relative is a carrier — probability depends on the partner's genotype."],
            examinerNote: "M1 A1 (a); M1 A1 (b); M1 A1 (c); M1 R1 (d). Accept 'carrier probability' discussion in (c).",
          },
        },
        {
          id: "biosl-u6-pedigrees-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "In a pedigree, a horizontal line joins a circle and a square, and a vertical line drops from its midpoint to symbols below. What does this represent?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Two siblings in the same generation" },
              { id: "b", text: "Two unrelated individuals" },
              { id: "c", text: "Identical twins" },
              { id: "d", text: "A mating pair and their offspring" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Pedigree symbols", statement: "Horizontal line = mating; vertical line dropping to symbols = their children." },
            ],
            steps: [
              { reasoning: "The horizontal line links two parents (female circle and male square).", marks: 1, markCode: "M" },
              { reasoning: "The vertical line with symbols below shows their offspring.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** A mating pair and their offspring",
            commonErrors: ["Reading the vertical line as a sibling link rather than a descent line."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "biosl-u6-pedigrees-q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Unaffected parents have an affected daughter. For which inheritance pattern is this pedigree impossible?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "X-linked recessive" },
              { id: "b", text: "Autosomal dominant" },
              { id: "c", text: "Codominance" },
              { id: "d", text: "Autosomal recessive" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "X-linked recessive", statement: "A daughter needs the recessive allele on both X chromosomes; an unaffected father always gives a normal X." },
            ],
            steps: [
              { reasoning: "Under X-linked recessive inheritance, an affected daughter must receive the allele from both parents; the father would have to be affected.", marks: 1, markCode: "M" },
              { reasoning: "The father is unaffected, so he gives a normal X and the daughter cannot be affected — the pattern is ruled out.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** X-linked recessive",
            commonErrors: ["Forgetting that a daughter needs two copies of an X-linked recessive allele."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "biosl-u6-pedigrees-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "For an X-linked recessive disorder, an affected father and an unaffected mother who is not a carrier have children. What is the genotype of their daughters?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "All carriers (XBXb)" },
              { id: "b", text: "All affected sons" },
              { id: "c", text: "Half carriers and half unaffected" },
              { id: "d", text: "All affected (XbXb)" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "X-linked transmission", statement: "A father passes his X chromosome to all daughters and his Y to all sons." },
            ],
            steps: [
              { reasoning: "The affected father (XbY) gives Xb to every daughter; sons receive his Y instead.", marks: 1, markCode: "M" },
              { reasoning: "The non-carrier mother gives only XB, so every daughter is XBXb — an unaffected carrier.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** All carriers (XBXb)",
            commonErrors: ["Thinking daughters of an affected father are all affected — they are carriers if the mother is not a carrier."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "biosl-u6-pedigrees-q8",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 2,
          stem: "Two carriers (Aa) for an autosomal recessive disorder have a child who is known to be unaffected. What is the probability that this child is a carrier (Aa)?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1/4" },
              { id: "b", text: "3/4" },
              { id: "c", text: "1/3" },
              { id: "d", text: "2/3" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Conditional probability", statement: "Restrict the sample space to the given condition before calculating probability." },
            ],
            steps: [
              { reasoning: "Aa × Aa gives 1 AA : 2 Aa : 1 aa; knowing the child is unaffected removes the aa possibility.", marks: 1, markCode: "M" },
              { reasoning: "Of the three remaining equally likely genotypes (AA, Aa, Aa), two are carriers, so P = 2/3.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** 2/3",
            commonErrors: ["Answering 1/2 — that ignores the condition that the child is unaffected."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "biosl-u6-pedigrees-q9",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "For an autosomal recessive disorder, two heterozygous carriers (Aa × Aa) have one child. Calculate the probability that the child is: (a) affected (aa); (b) a carrier (Aa); (c) homozygous dominant (AA). Give each answer as a decimal.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) P(aa)", answer: 0.25 },
              { label: "(b) P(Aa)", answer: 0.5 },
              { label: "(c) P(AA)", answer: 0.25 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Monohybrid cross", statement: "Aa × Aa → 1 AA : 2 Aa : 1 aa (genotypic ratio)." },
            ],
            steps: [
              { reasoning: "The Punnett square for Aa × Aa gives a 1:2:1 genotypic ratio, so probabilities are 1/4, 1/2 and 1/4.", working: "1:2:1 -> 0.25, 0.5, 0.25", marks: 1, markCode: "M" },
              { reasoning: "(a) aa is one of four equally likely outcomes.", working: "0.25", marks: 1, markCode: "A" },
              { reasoning: "(b) Aa is two of four outcomes.", working: "0.5", marks: 1, markCode: "A" },
              { reasoning: "(c) AA is one of four outcomes.", working: "0.25", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 0.25; (b) 0.5; (c) 0.25",
            commonErrors: ["Giving 0.5 for the affected probability — aa is only one quarter of outcomes."],
            examinerNote: "M1 A1 A1 A1.",
          },
        },
        {
          id: "biosl-u6-pedigrees-q10",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A carrier mother (XBXb) and an unaffected father (XBY) have children. Calculate: (a) the probability that a son is affected; (b) the probability that a daughter is a carrier.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) P(affected son)", answer: 0.5 },
              { label: "(b) P(carrier daughter)", answer: 0.5 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "X-linked inheritance", statement: "Sons receive their X chromosome only from the mother; daughters receive one X from each parent." },
            ],
            steps: [
              { reasoning: "A son gets his X from his mother (XB or Xb, each 0.5) and his Y from his father.", working: "X from mother only", marks: 1, markCode: "M" },
              { reasoning: "(a) P(son receives Xb) = 0.5, so P(affected son) = 0.5.", working: "0.5", marks: 1, markCode: "A" },
              { reasoning: "(b) A daughter always gets XB from her father and XB or Xb from her mother, so she is a carrier with probability 0.5.", working: "0.5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 0.5; (b) 0.5",
            commonErrors: ["Giving 0.25 — sex is already fixed when asking about a son or daughter."],
            examinerNote: "M1 A1 A1.",
          },
        },
        {
          id: "biosl-u6-pedigrees-q11",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "A carrier mother (XBXb) for an X-linked recessive disorder has two sons. Calculate: (a) the probability that both sons are affected; (b) the probability that at least one son is affected; (c) the probability that neither son is affected.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) P(both affected)", answer: 0.25 },
              { label: "(b) P(at least one affected)", answer: 0.75 },
              { label: "(c) P(neither affected)", answer: 0.25 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Independent events", statement: "Each son's inheritance is independent, with P(affected) = 0.5." },
            ],
            steps: [
              { reasoning: "Each son independently has a 0.5 chance of inheriting Xb from his carrier mother.", working: "p = 0.5 per son", marks: 1, markCode: "M" },
              { reasoning: "(a) Both affected: 0.5 × 0.5 = 0.25.", working: "0.25", marks: 1, markCode: "A" },
              { reasoning: "(b) At least one affected is the complement of neither: 1 − 0.25 = 0.75.", working: "1 - 0.25 = 0.75", marks: 1, markCode: "A" },
              { reasoning: "(c) Neither affected: both receive XB, so 0.5 × 0.5 = 0.25.", working: "0.25", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 0.25; (b) 0.75; (c) 0.25",
            commonErrors: ["Adding probabilities incorrectly for 'at least one' — use the complement."],
            examinerNote: "M1 A1 A1 A1.",
          },
        },
        {
          id: "biosl-u6-pedigrees-q12",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Two carriers (Aa × Aa) for an autosomal recessive disorder plan to have two children. Calculate: (a) the probability that exactly one child is affected; (b) the probability that neither child is affected; (c) the probability that both children are affected.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) P(exactly one affected)", answer: 0.375 },
              { label: "(b) P(neither affected)", answer: 0.5625 },
              { label: "(c) P(both affected)", answer: 0.0625 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Independent events", statement: "Each child has P(affected) = 0.25 and P(not affected) = 0.75, independently." },
            ],
            steps: [
              { reasoning: "For each child, P(aa) = 0.25 and P(not aa) = 0.75; the two children are independent.", working: "p = 0.25, q = 0.75", marks: 1, markCode: "M" },
              { reasoning: "(a) Exactly one affected: affected-then-unaffected or unaffected-then-affected: 2 × 0.25 × 0.75 = 0.375.", working: "2 × 0.25 × 0.75 = 0.375", marks: 1, markCode: "A" },
              { reasoning: "(b) Neither affected: 0.75 × 0.75 = 0.5625.", working: "0.5625", marks: 1, markCode: "A" },
              { reasoning: "(c) Both affected: 0.25 × 0.25 = 0.0625.", working: "0.0625", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 0.375; (b) 0.5625; (c) 0.0625",
            commonErrors: ["Forgetting the factor of 2 for 'exactly one' — either child could be the affected one."],
            examinerNote: "M1 A1 A1 A1.",
          },
        },
        {
          id: "biosl-u6-pedigrees-q13",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 3,
          stem: "An autosomal dominant disorder is caused by allele A; unaffected individuals are aa. An affected heterozygote (Aa) marries an unaffected person (aa). Calculate: (a) the probability a child is affected; (b) the probability a child is unaffected.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) P(affected)", answer: 0.5 },
              { label: "(b) P(unaffected)", answer: 0.5 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Monohybrid cross", statement: "Aa × aa → 1 Aa : 1 aa." },
            ],
            steps: [
              { reasoning: "The cross Aa × aa produces Aa and aa offspring in equal proportions.", working: "1:1 ratio", marks: 1, markCode: "M" },
              { reasoning: "(a) Aa children show the dominant disorder, so P(affected) = 0.5.", working: "0.5", marks: 1, markCode: "A" },
              { reasoning: "(b) aa children are unaffected, so P(unaffected) = 0.5.", working: "0.5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 0.5; (b) 0.5",
            commonErrors: ["Assuming all children of an affected parent are affected — the unaffected parent contributes a."],
            examinerNote: "M1 A1 A1.",
          },
        },
        {
          id: "biosl-u6-pedigrees-q14",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "For an X-linked recessive disorder, a carrier mother (XBXb) and an affected father (XbY) have a daughter. Calculate: (a) the probability the daughter is affected; (b) the probability the daughter is a carrier; (c) the probability the daughter is unaffected.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) P(affected)", answer: 0.5 },
              { label: "(b) P(carrier)", answer: 0.5 },
              { label: "(c) P(unaffected)", answer: 0 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "X-linked transmission", statement: "The father always gives Xb to a daughter; the carrier mother gives XB or Xb with equal probability." },
            ],
            steps: [
              { reasoning: "A daughter receives Xb from her affected father with certainty, and XB or Xb from her mother each with probability 0.5.", working: "Xb from father; XB or Xb from mother", marks: 1, markCode: "M" },
              { reasoning: "(a) XbXb (affected) occurs when the mother gives Xb: P = 0.5.", working: "0.5", marks: 1, markCode: "A" },
              { reasoning: "(b) XBXb (carrier) occurs when the mother gives XB: P = 0.5.", working: "0.5", marks: 1, markCode: "A" },
              { reasoning: "(c) Every daughter receives Xb from her father, so none can be unaffected: P = 0.", working: "0", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 0.5; (b) 0.5; (c) 0",
            commonErrors: ["Thinking some daughters could be unaffected — the father's Xb guarantees at least carrier status."],
            examinerNote: "M1 A1 A1 A1.",
          },
        },
        {
          id: "biosl-u6-pedigrees-q15",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 6,
          stem: "In a pedigree for a rare disorder, unaffected parents I-1 (male) and I-2 (female) have three children: an affected son II-1, an unaffected daughter II-2 and an affected daughter II-3. II-2 marries an unaffected unrelated man II-4, and they have an affected son III-1.",
          parts: [
            { label: "a", prompt: "Deduce the inheritance pattern and explain your reasoning.", marks: 2 },
            { label: "b", prompt: "State the genotypes of I-1, I-2, II-1 and II-2.", marks: 2 },
            { label: "c", prompt: "Evaluate whether this pedigree is consistent with the disorder being X-linked recessive.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Pedigree deduction", statement: "Affected children of unaffected parents indicate recessive inheritance; an affected daughter of an unaffected father rules out X-linked recessive." },
            ],
            steps: [
              { part: "a", reasoning: "Unaffected parents produced affected children, so the trait is recessive and both parents are carriers.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Affected daughter II-3 with an unaffected father rules out X-linked recessive; the disorder is autosomal recessive.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "I-1 = Aa and I-2 = Aa (both carriers).", marks: 1, markCode: "M" },
              { part: "b", reasoning: "II-1 = aa (affected); II-2 = Aa (unaffected carrier, since she later has an affected son).", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Under X-linked recessive, an affected daughter needs the allele on both X chromosomes, so her father would have to be affected — but I-1 is unaffected.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "The pedigree is therefore inconsistent with X-linked recessive; autosomal recessive fits all the data.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Autosomal recessive — affected children of unaffected parents, and an affected daughter rules out X-linkage. (b) I-1 = Aa, I-2 = Aa, II-1 = aa, II-2 = Aa. (c) Not consistent with X-linked recessive because an affected daughter requires an affected father.",
            commonErrors: ["Forgetting that II-2 must be a carrier to have an affected son.", "Claiming X-linked recessive is possible because sons are affected — the affected daughter contradicts it."],
            examinerNote: "M1 A1 (a); M1 A1 (b); M1 R1 (c).",
          },
        },
        {
          id: "biosl-u6-pedigrees-q16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "In a pedigree, generation I has an unaffected couple (I-1 male, I-2 female). They have an affected son (II-1), an unaffected son (II-2) and an affected daughter (II-3). II-2 marries an unaffected woman II-4 who is known to be a carrier, and they have an affected son (III-1) and an unaffected daughter (III-2).",
          parts: [
            { label: "a", prompt: "Deduce the most likely inheritance pattern.", marks: 2 },
            { label: "b", prompt: "Write the genotypes of I-1, I-2, II-1, II-2 and II-4.", marks: 2 },
            { label: "c", prompt: "Calculate the probability that the next child of II-2 and II-4 will be affected.", marks: 2 },
            { label: "d", prompt: "Discuss one limitation of drawing firm conclusions from a single pedigree.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Pedigree deduction", statement: "Unaffected parents with affected children imply recessive inheritance; affected daughters of unaffected fathers exclude X-linked recessive." },
            ],
            steps: [
              { part: "a", reasoning: "Affected children of unaffected parents indicate a recessive trait with carrier parents.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Affected daughter II-3 with unaffected father I-1 rules out X-linked recessive, so the trait is autosomal recessive.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "I-1 = Aa, I-2 = Aa (carriers); II-1 = aa and II-3 = aa (affected).", marks: 1, markCode: "M" },
              { part: "b", reasoning: "II-2 = Aa (unaffected carrier); II-4 = Aa (known carrier).", marks: 1, markCode: "A" },
              { part: "c", reasoning: "II-2 (Aa) × II-4 (Aa) gives a 1:2:1 ratio, so P(affected child) = P(aa) = 0.25.", working: "0.25", marks: 1, markCode: "M" },
              { part: "c", reasoning: "The probability is 1/4 (25%) for each child, independent of previous children.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Small pedigrees give limited data — genotypes of unaffected individuals cannot always be confirmed, and rare events (new mutations, non-paternity, misdiagnosis) can mislead.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Conclusions should be treated as probabilistic and confirmed with genetic testing or larger family data.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Autosomal recessive. (b) I-1 = Aa, I-2 = Aa, II-1 = aa, II-2 = Aa, II-4 = Aa. (c) 0.25 (25%). (d) Small samples give uncertainty; unaffected genotypes are inferred, not proven.",
            commonErrors: ["Assigning II-4 = AA despite being told she is a carrier.", "Assuming previous children affect the probability of the next child."],
            examinerNote: "M1 A1 (a); M1 A1 (b); M1 A1 (c); M1 R1 (d).",
          },
        },
      ],
    },
    {
      id: "biosl-u6-inheritance-patterns",
      title: "Codominance, multiple alleles and sex linkage",
      skill: "Apply non-Mendelian inheritance patterns — codominance, multiple alleles and X-linked traits — to predict offspring.",
      lesson: {
        sections: [
          {
            heading: "Codominance and multiple alleles",
            body: "In **codominance**, both alleles are fully expressed in the heterozygote — ABO blood group: IA and IB are codominant, so an IAIB person has blood group AB expressing both antigens; i is recessive (group O). **Multiple alleles** means more than two alleles exist in the population (IA, IB, i for ABO), though each individual still carries only two.",
          },
          {
            heading: "Sex linkage",
            body: "Females are XX and males XY, so a male with a recessive allele on his single X always expresses it. Colour blindness and haemophilia are **X-linked recessive**: an unaffected carrier mother (XBXb) has a 50% chance of passing Xb to a son, who will be affected. Affected fathers pass the allele to all daughters (who become carriers) but no sons.",
          },
          {
            heading: "Applying the patterns",
            body: "For any cross, write genotypes first, then use a Punnett square. For ABO, check all three alleles. For X-linked traits, write X and Y explicitly (e.g. XBY unaffected male, XbY affected male). Conditional probability questions ask for outcomes 'given' an event — restrict the Punnett square to that event first.",
          },
        ],
        keyFormulas: [
          { name: "ABO blood groups", statement: "IA and IB codominant; i recessive; genotypes IAIA/IAi = A, IBIB/IBi = B, IAIB = AB, ii = O" },
          { name: "X-linked cross", statement: "Carrier mother XBXb × unaffected father XBY → 50% carrier daughters, 50% normal daughters, 50% unaffected sons, 50% affected sons" },
          { name: "Codominance", statement: "Heterozygote expresses both alleles fully — no blending" },
        ],
        workedExample: {
          problem: "A mother with blood group AB and a father with blood group O have children. What blood groups are possible?",
          solution: "Mother IAIB, father ii. Gametes: IA or IB from mother, i from father. Offspring: IAi (group A) or IBi (group B) — 50% A, 50% B; never AB or O.",
        },
      },
      questions: [
        {
          id: "biosl-u6-inheritance-patterns-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 1,
          stem: "In ABO blood groups, what is the phenotype of a person with genotype IAIB?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Group O" },
              { id: "b", text: "Group A" },
              { id: "c", text: "Group AB" },
              { id: "d", text: "Group B" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Codominance", statement: "Both alleles are fully expressed in the heterozygote." },
            ],
            steps: [
              { reasoning: "IA and IB are codominant, so IAIB expresses both antigens — blood group AB.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Group AB",
            commonErrors: ["Choosing A or B — codominance means both antigens are produced."],
            examinerNote: "B1 for (c).",
          },
        },
        {
          id: "biosl-u6-inheritance-patterns-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A carrier mother (XBXb) and an unaffected father (XBY) have a son. What is the probability that the son is colour blind?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "50%" },
              { id: "b", text: "100%" },
              { id: "c", text: "0%" },
              { id: "d", text: "25%" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "X-linked inheritance", statement: "A son receives X from mother and Y from father; a carrier mother passes Xb to half her sons." },
            ],
            steps: [
              { reasoning: "Son gets X from mother (XB or Xb, 50:50) and Y from father.", working: "X from mother, Y from father", marks: 1, markCode: "M" },
              { reasoning: "Half the sons receive Xb and are affected; probability = 50%.", working: "0.5 × 1 = 0.5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** 50%",
            commonErrors: ["Giving 25% — that would apply if conditioning on all children, but a son already fixes the sex."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "biosl-u6-inheritance-patterns-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "A person with blood group A has a child with a person of blood group B. Which blood groups could the child have?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A, B, AB or O" },
              { id: "b", text: "Only A or only B" },
              { id: "c", text: "Only AB" },
              { id: "d", text: "A, B or AB" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "ABO genotypes", statement: "A parent can be IAIA or IAi; B parent IBIB or IBi; O parent ii." },
            ],
            steps: [
              { reasoning: "Without knowing if the A or B parent carries i, possible gametes include IA, IB and i.", working: "gametes: IA/IB/i possible", marks: 1, markCode: "M" },
              { reasoning: "Possible offspring genotypes: IAIB (AB), IAi (A), IBi (B) — but not ii, because neither parent is group O.", working: "no ii possible", marks: 1, markCode: "M" },
              { reasoning: "Therefore A, B or AB are possible; O is impossible.", working: "A, B, AB", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** A, B or AB",
            commonErrors: ["Including O — that requires both parents to contribute i, impossible since neither is group O."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "biosl-u6-inheritance-patterns-q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Haemophilia is an X-linked recessive disorder. A woman whose father had haemophilia marries a man with no family history of the disorder.",
          parts: [
            { label: "a", prompt: "State the woman's genotype for the haemophilia allele, using appropriate symbols.", marks: 2 },
            { label: "b", prompt: "Calculate the probability that their first child is an affected male.", marks: 2 },
            { label: "c", prompt: "Calculate the probability that their first child is an affected female.", marks: 2 },
            { label: "d", prompt: "Evaluate why haemophilia is far more common in males than in females.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "X-linked recessive", statement: "Recessive allele on X chromosome; males need only one copy to be affected." },
            ],
            steps: [
              { part: "a", reasoning: "Her father was affected (XhY), so he gave her Xh; her mother is unaffected, so the woman is XHXh — a carrier.", working: "XHXh", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Using H for normal allele and h for haemophilia: XHXh.", working: "carrier genotype", marks: 1, markCode: "A" },
              { part: "b", reasoning: "A son is male with probability 0.5 and inherits Xh from his carrier mother with probability 0.5, so P(affected male) = 0.5 × 0.5 = 0.25 (25% of all children).", working: "0.5 × 0.5 = 0.25", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Equivalently, half of her sons will be affected.", working: "50% of sons", marks: 1, markCode: "A" },
              { part: "c", reasoning: "A daughter gets X from mother (XH or Xh) and X from father (XH, since father is unaffected).", working: "father gives XH always", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Daughter is at most XHXh (carrier) — never XhXh, so probability of affected female = 0.", working: "0 affected daughters", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Males have only one X, so a single recessive allele is expressed; females need two copies, which is rare.", working: "one X in males", marks: 1, markCode: "M" },
              { part: "d", reasoning: "An affected father can produce carrier daughters but no affected sons, further skewing the sex ratio of cases.", working: "father → daughters carriers", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) XHXh (carrier). (b) 25% of all children — or 50% of sons. (c) 0%. (d) Males need only one recessive allele; females need two.",
            commonErrors: ["Forgetting the father gives XH to all daughters, making affected daughters impossible here.", "Quoting 50% for affected males without conditioning on sex."],
            examinerNote: "M1 A1 (a); M1 A1 (b); M1 A1 (c); M1 R1 (d). Accept 50% for sons of carrier mothers in (b) if clearly conditioned.",
          },
        },
        {
          id: "biosl-u6-inheritance-patterns-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "What is the genotype of a person with ABO blood group O?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "IAIB" },
              { id: "b", text: "IAi" },
              { id: "c", text: "ii" },
              { id: "d", text: "IBi" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "ABO blood groups", statement: "i is recessive to IA and IB; only the homozygote ii produces group O." },
            ],
            steps: [
              { reasoning: "Group O requires two recessive i alleles.", working: "ii only", marks: 1, markCode: "M" },
              { reasoning: "IAi is group A and IBi is group B; IAIB is group AB — none is O.", working: "exclude others", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** ii",
            commonErrors: ["Choosing IAi or IBi — a single i allele is masked by a dominant allele."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "biosl-u6-inheritance-patterns-q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A person with blood group AB has a child with a person of blood group O. Which blood groups can the child have?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Any of A, B, AB or O" },
              { id: "b", text: "Group AB or group O" },
              { id: "c", text: "Group A or group B" },
              { id: "d", text: "Only group A" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "ABO genotypes", statement: "AB parent = IAIB gives IA or IB gametes; O parent = ii gives only i." },
            ],
            steps: [
              { reasoning: "Offspring genotypes are IAi (group A) or IBi (group B) in equal proportions.", working: "IAi or IBi", marks: 1, markCode: "M" },
              { reasoning: "Neither IAIB nor ii is possible, so only A or B.", working: "no AB, no O", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Group A or group B",
            commonErrors: ["Including O — the AB parent cannot supply an i allele."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "biosl-u6-inheritance-patterns-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "A mother with blood group A has genotype IAi and a father with blood group B has genotype IBi. They have one child. Calculate: (a) the probability the child has blood group AB; (b) the probability the child has blood group O; (c) the probability the child has blood group A or B.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) P(AB)", answer: 0.25 },
              { label: "(b) P(O)", answer: 0.25 },
              { label: "(c) P(A or B)", answer: 0.5 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Punnett square for ABO", statement: "IAi × IBi gives 1 IAIB : 1 IAi : 1 IBi : 1 ii." },
            ],
            steps: [
              { reasoning: "Each parent produces two gametes (IA, i and IB, i), giving four equally likely genotypes.", working: "1:1:1:1", marks: 1, markCode: "M" },
              { reasoning: "(a) IAIB occurs once in four → P(AB) = 0.25.", working: "0.25", marks: 1, markCode: "A" },
              { reasoning: "(b) ii occurs once in four → P(O) = 0.25.", working: "0.25", marks: 1, markCode: "A" },
              { reasoning: "(c) IAi (A) and IBi (B) are two of four outcomes → P = 0.5.", working: "0.5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 0.25; (b) 0.25; (c) 0.5",
            commonErrors: ["Assuming group A or B parents are always homozygous — IAi and IBi are possible and change the outcome."],
            examinerNote: "M1 A1 A1 A1.",
          },
        },
        {
          id: "biosl-u6-inheritance-patterns-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A carrier mother for an X-linked recessive disorder (XBXb) has a daughter with an unaffected father (XBY). What is the probability that the daughter is affected?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "25%" },
              { id: "b", text: "100%" },
              { id: "c", text: "0%" },
              { id: "d", text: "50%" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "X-linked inheritance", statement: "A daughter always receives a normal XB from an unaffected father, so she cannot be affected by an X-linked recessive allele." },
            ],
            steps: [
              { reasoning: "The father contributes XB to every daughter regardless of the mother's allele.", working: "father gives XB", marks: 1, markCode: "M" },
              { reasoning: "Daughters are either XBXB or XBXb — affected (XbXb) is impossible, so P = 0%.", working: "P = 0", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** 0%",
            commonErrors: ["Applying the 50% son-risk figure to daughters — daughters need Xb from both parents."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "biosl-u6-inheritance-patterns-q9",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "For an X-linked recessive disorder, a carrier mother (XBXb) and an unaffected father (XBY) have one child. Calculate: (a) the probability that a son is affected; (b) the probability that a daughter is a carrier; (c) the probability that a daughter is affected.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) P(affected son)", answer: 0.5 },
              { label: "(b) P(carrier daughter)", answer: 0.5 },
              { label: "(c) P(affected daughter)", answer: 0 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "X-linked inheritance", statement: "Sons get X only from mother; daughters get X from both parents." },
            ],
            steps: [
              { reasoning: "The mother passes XB or Xb with equal probability; the father passes XB to daughters and Y to sons.", working: "0.5 each allele", marks: 1, markCode: "M" },
              { reasoning: "(a) A son receiving Xb is affected: P = 0.5.", working: "0.5", marks: 1, markCode: "A" },
              { reasoning: "(b) A daughter is XBXb when the mother passes Xb: P = 0.5.", working: "0.5", marks: 1, markCode: "A" },
              { reasoning: "(c) A daughter always gets XB from her unaffected father, so she cannot be XbXb: P = 0.", working: "0", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 0.5; (b) 0.5; (c) 0",
            commonErrors: ["Counting daughters among all children instead of conditioning on the child being a daughter."],
            examinerNote: "M1 A1 A1 A1.",
          },
        },
        {
          id: "biosl-u6-inheritance-patterns-q10",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 3,
          stem: "In a codominant system, allele R produces red pigment and allele W produces white pigment; the heterozygote RW produces both pigments and appears speckled. A red plant (RR) is crossed with a white plant (WW). Calculate: (a) the probability a child is speckled; (b) the probability a child is red; (c) the probability a child is white.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) P(speckled)", answer: 1 },
              { label: "(b) P(red)", answer: 0 },
              { label: "(c) P(white)", answer: 0 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Monohybrid cross", statement: "RR × WW gives only RW offspring." },
            ],
            steps: [
              { reasoning: "RR produces only R gametes and WW produces only W gametes, so every offspring is RW (speckled).", working: "all RW", marks: 1, markCode: "M" },
              { reasoning: "(a) All children are speckled: P = 1.", working: "1", marks: 1, markCode: "A" },
              { reasoning: "(b) and (c) No RR or WW offspring are possible: P = 0 each.", working: "0 and 0", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 1; (b) 0; (c) 0",
            commonErrors: ["Assuming a 3:1 or 1:2:1 ratio — a cross between two different homozygotes gives a single genotype."],
            examinerNote: "M1 A1 A1.",
          },
        },
        {
          id: "biosl-u6-inheritance-patterns-q11",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "ABO blood groups are described as 'multiple alleles'. What does this mean?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The trait is controlled by three different genes" },
              { id: "b", text: "Each individual carries all three alleles IA, IB and i" },
              { id: "c", text: "Each gene has three copies in every cell" },
              { id: "d", text: "Three alleles exist in the population, but each individual carries only two" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Multiple alleles", statement: "More than two alleles exist in the population for a gene, but each individual inherits only two." },
            ],
            steps: [
              { reasoning: "IA, IB and i all occur in the human population for the ABO gene.", working: "IA, IB, i", marks: 1, markCode: "M" },
              { reasoning: "Diploid individuals still carry only two alleles — e.g. IAi or IBi.", working: "two per individual", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Three alleles in the population; two per individual",
            commonErrors: ["Thinking 'multiple alleles' means an individual has more than two copies."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "biosl-u6-inheritance-patterns-q12",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "For haemophilia (X-linked recessive), an affected father (XhY) has a daughter with a non-carrier mother (XHXH). Evaluate the statement: 'This daughter is guaranteed to be a carrier, and she can never have an affected daughter of her own unless her partner is affected.'",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The statement is correct — she is XHXh and affected daughters require an affected father" },
              { id: "b", text: "The statement is wrong — she cannot be a carrier" },
              { id: "c", text: "The statement is wrong — she will have all affected sons" },
              { id: "d", text: "The statement is wrong — she is affected herself" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "X-linked inheritance", statement: "Father gives Xh to all daughters; mother gives XH, so daughters are carriers." },
            ],
            steps: [
              { reasoning: "Daughter receives Xh from her affected father and XH from her non-carrier mother, so she is XHXh — a carrier, not affected.", working: "XHXh carrier", marks: 1, markCode: "M" },
              { reasoning: "Her daughters can only be affected if their father contributes Xh, i.e. the father is affected.", working: "affected father needed", marks: 1, markCode: "M" },
              { reasoning: "Both parts of the statement are correct.", working: "statement correct", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** The statement is correct",
            commonErrors: ["Thinking daughters of affected fathers are themselves affected — they are carriers if the mother is unaffected."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "biosl-u6-inheritance-patterns-q13",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "For an X-linked recessive disorder, a carrier mother (XBXb) and an affected father (XbY) have one child. Calculate: (a) the probability a son is affected; (b) the probability a daughter is affected; (c) the probability a daughter is a carrier; (d) the probability a son is unaffected.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) P(affected son)", answer: 0.5 },
              { label: "(b) P(affected daughter)", answer: 0.5 },
              { label: "(c) P(carrier daughter)", answer: 0.5 },
              { label: "(d) P(unaffected son)", answer: 0.5 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "X-linked transmission", statement: "Affected father gives Xb to all daughters and Y to all sons; carrier mother gives XB or Xb." },
            ],
            steps: [
              { reasoning: "Sons receive Y from father and XB or Xb from mother; daughters receive Xb from father and XB or Xb from mother.", working: "father: Xb to daughters, Y to sons", marks: 1, markCode: "M" },
              { reasoning: "(a) P(son gets Xb) = 0.5; (d) P(son gets XB) = 0.5.", working: "0.5 each", marks: 1, markCode: "A" },
              { reasoning: "(b) Daughter is XbXb (affected) when mother gives Xb: P = 0.5.", working: "0.5", marks: 1, markCode: "A" },
              { reasoning: "(c) Daughter is XBXb (carrier) when mother gives XB: P = 0.5.", working: "0.5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 0.5; (b) 0.5; (c) 0.5; (d) 0.5",
            commonErrors: ["Assuming all daughters of an affected father are affected — half are carriers when the mother is a carrier."],
            examinerNote: "M1 A1 A1 A1.",
          },
        },
        {
          id: "biosl-u6-inheritance-patterns-q14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "A couple are planning a family. The woman has blood group A but her parents were groups O and A; the man has blood group B but his parents were groups O and B. Neither partner has a family history of X-linked disorders.",
          parts: [
            { label: "a", prompt: "Deduce the most likely genotypes of both partners for the ABO blood group system.", marks: 2 },
            { label: "b", prompt: "Calculate the probability that their first child has blood group O.", marks: 2 },
            { label: "c", prompt: "Calculate the probability that their first child has blood group AB.", marks: 2 },
            { label: "d", prompt: "Explain why ABO blood groups are a poor choice for blood transfusion between unrelated people without testing.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "ABO genotypes", statement: "Group A = IAIA or IAi; group B = IBIB or IBi; group O = ii." },
            ],
            steps: [
              { part: "a", reasoning: "The woman must be IAi (group O parent can only give i; group A parent gives IA or i), similarly the man is IBi.", working: "IAi and IBi", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Both are heterozygous: woman IAi, man IBi.", working: "genotypes stated", marks: 1, markCode: "A" },
              { part: "b", reasoning: "IAi × IBi gives 1 IAIB : 1 IAi : 1 IBi : 1 ii, so P(ii) = 0.25.", working: "0.25", marks: 1, markCode: "M" },
              { part: "b", reasoning: "The probability is 1/4 (25%) for each child.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "IAIB occurs once in four outcomes, so P(AB) = 0.25.", working: "0.25", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Correct probability stated with the genotype basis.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Antibodies against A or B antigens cause agglutination; transfusing incompatible blood triggers immune attack and can be fatal.", working: "antibodies → agglutination", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Blood must always be cross-matched/tested because phenotypes do not fully predict safe transfusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Woman IAi, man IBi. (b) 0.25. (c) 0.25. (d) ABO antibodies cause agglutination — transfusion must be tested/cross-matched.",
            commonErrors: ["Assuming group A parents with an O parent must be IAIA — the O parent forces the A parent to give i, making the child IAi.", "Ignoring the immune basis of transfusion incompatibility."],
            examinerNote: "M1 A1 (a); M1 A1 (b); M1 A1 (c); M1 A1 (d).",
          },
        },
        {
          id: "biosl-u6-inheritance-patterns-q15",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 6,
          stem: "Red-green colour blindness is X-linked recessive. A colour-blind man marries a woman with normal colour vision whose father was colour blind.",
          parts: [
            { label: "a", prompt: "Write the genotypes of the man and the woman.", marks: 2 },
            { label: "b", prompt: "Calculate the probability that their first son is colour blind.", marks: 2 },
            { label: "c", prompt: "Calculate the probability that their first daughter is colour blind.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "X-linked inheritance", statement: "Carrier females pass the allele to half their sons; affected fathers pass it to all daughters." },
            ],
            steps: [
              { part: "a", reasoning: "Man is XcY (affected male has only one X).", working: "XcY", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Woman's father was XcY so she inherited Xc; her mother was unaffected, so she is XCXc — a carrier.", working: "XCXc carrier", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Son gets Y from father and XC or Xc from mother; P(Xc) = 0.5.", working: "0.5", marks: 1, markCode: "M" },
              { part: "b", reasoning: "P(colour-blind son) = 0.5 (50% of sons).", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Daughter always gets Xc from her affected father and XC or Xc from her carrier mother.", working: "Xc from father certain", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Daughter is XCXc or XcXc with equal probability → P(colour blind) = 0.5.", working: "0.5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Man XcY; woman XCXc. (b) 0.5. (c) 0.5.",
            commonErrors: ["Forgetting the woman's father being affected makes her a carrier.", "Assuming daughters of affected fathers are never affected — here the mother is also a carrier, so half the daughters are XcXc."],
            examinerNote: "M1 A1 (a); M1 A1 (b); M1 A1 (c).",
          },
        },
        {
          id: "biosl-u6-inheritance-patterns-q16",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 4,
          stem: "A carrier mother (XBXb) for an X-linked recessive disorder has two sons. Calculate: (a) the probability that both sons are affected; (b) the probability that exactly one son is affected; (c) the probability that neither son is affected.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) P(both affected)", answer: 0.25 },
              { label: "(b) P(exactly one affected)", answer: 0.5 },
              { label: "(c) P(neither affected)", answer: 0.25 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Independent events", statement: "Each son independently has P(affected) = 0.5 and P(unaffected) = 0.5." },
            ],
            steps: [
              { reasoning: "Each son's outcome is independent with p = 0.5 for inheriting Xb.", working: "p = 0.5 per son", marks: 1, markCode: "M" },
              { reasoning: "(a) Both affected: 0.5 × 0.5 = 0.25.", working: "0.25", marks: 1, markCode: "A" },
              { reasoning: "(b) Exactly one affected: two orders × 0.5 × 0.5 = 0.5.", working: "2 × 0.25 = 0.5", marks: 1, markCode: "A" },
              { reasoning: "(c) Neither affected: 0.5 × 0.5 = 0.25.", working: "0.25", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 0.25; (b) 0.5; (c) 0.25",
            commonErrors: ["Forgetting the factor of 2 for 'exactly one' — either son could be the affected one."],
            examinerNote: "M1 A1 A1 A1.",
          },
        },
      ],
    },
  ],
};
