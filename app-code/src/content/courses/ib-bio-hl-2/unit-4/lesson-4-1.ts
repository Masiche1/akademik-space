import type { Lesson } from "../../../types.ts";

export const lesson41: Lesson = {
  id: "biohl-u4-lesson-4-1",
  code: "4-1",
  title: "Modes of Natural Selection",
  goal: "I CAN distinguish directional, stabilising, disruptive, sexual and balancing selection, and explain selection outcomes using allele-frequency and fitness reasoning.",
  standards: ["Paper 1", "Paper 2", "AHL D.2"],
  vocabulary: [
    {
      term: "Directional selection",
      definition:
        "Selection that favours one extreme phenotype, shifting the mean of the population in that direction over generations.",
    },
    {
      term: "Stabilising selection",
      definition:
        "Selection that favours intermediate phenotypes and selects against both extremes, reducing phenotypic variance.",
    },
    {
      term: "Disruptive selection",
      definition:
        "Selection that favours both extreme phenotypes over intermediates, which can increase variance and contribute to speciation.",
    },
    {
      term: "Sexual selection",
      definition:
        "Selection arising from competition for mates: intrasexual (contest between same-sex individuals) or intersexual (mate choice).",
    },
    {
      term: "Balancing selection",
      definition:
        "Selection that maintains more than one allele in a population, such as heterozygote advantage or frequency-dependent selection.",
    },
    {
      term: "Industrial melanism",
      definition:
        "The classic example of directional selection in which dark moth morphs increased in frequency on soot-darkened trees.",
    },
  ],
  concepts: [
    {
      id: "biohl-u4-selection-modes",
      title: "Directional, stabilising and disruptive selection",
      skill:
        "Identify the mode of selection acting on a phenotype distribution and predict its effect on mean and variance.",
      lesson: {
        sections: [
          {
            heading: "The three modes of phenotypic selection",
            body: "When a population's phenotype distribution is bell-shaped, selection can act in three ways. **Directional selection** favours one extreme, so the distribution mean shifts while variance is roughly maintained — antibiotic resistance in bacteria and larger beaks in Galápagos finches during drought are examples. **Stabilising selection** favours intermediates and selects against both extremes, narrowing the distribution — human birth mass is a classic case, since very small and very large babies have lower survival. **Disruptive selection** favours both extremes and selects against intermediates, widening the distribution — it can eventually split a population into two forms and is thought to contribute to speciation.",
          },
          {
            heading: "Fitness and the response to selection",
            body: "Selection acts on **relative fitness** $w$, the survival and reproductive success of a variant compared with the fittest variant in the population. The mean fitness of the population is $\\bar{w}=\\sum w_i f_i$, where $f_i$ is the frequency of genotype $i$. When selection favours one allele, its frequency rises and the less fit allele is removed — unless it is maintained by another force such as mutation or heterozygote advantage.",
          },
          {
            heading: "Industrial melanism and antibiotic resistance",
            body: "The peppered moth is the textbook case of **directional selection**: before industrialisation the pale morph was camouflaged on lichen-covered bark; after soot blackened trees, bird predation selected against pale moths and the dark morph rose from about $1\\%$ to over $90\\%$ in some areas. The same logic explains **antibiotic resistance**: susceptible bacteria are killed while resistant mutants survive and reproduce, so resistance alleles spread rapidly through horizontal gene transfer as well as selection.",
          },
        ],
        keyFormulas: [
          {
            name: "Directional selection",
            statement: "Favours one extreme: mean shifts, variance maintained",
          },
          {
            name: "Stabilising selection",
            statement:
              "Favours intermediates: mean unchanged, variance reduced",
          },
          {
            name: "Disruptive selection",
            statement:
              "Favours both extremes: variance increased; possible route to speciation",
          },
        ],
        workedExample: {
          problem:
            "In a population of 2000 snails, shell colour ranges from pale to dark. After a drought that kills dark-shelled snails (which overheat) but favours pale shells, the proportion of dark morphs falls from $60\\%$ to $20\\%$ in one generation. Identify the mode of selection and explain the change.",
          solution:
            "This is **directional selection**: the environment (drought/heat) favoured one extreme phenotype — pale shells — over the other. Dark-shelled snails had lower relative fitness, so fewer survived to reproduce and the frequency of the dark phenotype fell from $0.60$ to $0.20$ in one generation, shifting the distribution mean towards paleness.",
        },
      },
      questions: [
        {
          id: "biohl-u4-selection-modes-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A population of lizards shows a bell-shaped distribution of body size. After several generations, both very small and very large individuals are more common while medium-sized individuals have declined. Which mode of selection is occurring?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Artificial selection only" },
              { id: "b", text: "Disruptive selection" },
              { id: "c", text: "Stabilising selection" },
              { id: "d", text: "Directional selection" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Disruptive selection",
                statement:
                  "Selection that favours both extremes of a phenotype distribution over intermediates.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Recall that disruptive selection removes intermediates and favours both extremes.",
                working: "\\text{extremes favoured}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The described pattern — small and large rising, medium falling — matches disruptive selection exactly.",
                working: "\\text{variance increases}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Disruptive selection",
            commonErrors: [
              "Choosing directional selection — that would shift the mean towards one extreme only, not both.",
            ],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "biohl-u4-selection-modes-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "In a human population, babies of very low and very high birth mass have higher mortality, while babies near the average mass survive best. Which statement correctly describes the selection acting here?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Stabilising selection favouring average birth mass",
              },
              { id: "b", text: "Disruptive selection favouring both extremes" },
              {
                id: "c",
                text: "No selection because birth mass is not inherited",
              },
              {
                id: "d",
                text: "Directional selection favouring larger babies",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Stabilising selection",
                statement:
                  "Selection that favours the intermediate phenotype and selects against both extremes, reducing variance.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Identify which phenotype has highest fitness: the average birth mass.",
                working: "\\text{intermediate favoured}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Selection against both extremes while the mean stays fixed is the definition of stabilising selection.",
                working: "\\text{variance reduced}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "This keeps birth mass near the population mean — consistent with option (b).",
                working: "\\text{mean unchanged}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(a)** Stabilising selection favouring average birth mass",
            commonErrors: [
              "Confusing stabilising with directional selection; note that the extremes are both disadvantaged here.",
            ],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "biohl-u4-selection-modes-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "In parts of Africa, individuals heterozygous for the sickle-cell allele have higher resistance to malaria than either homozygote. Over many generations the sickle-cell allele persists at frequencies of roughly $5-15\\%$ rather than being eliminated. What best explains this pattern?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Directional selection against the sickle-cell allele",
              },
              {
                id: "b",
                text: "Balancing selection via heterozygote advantage maintaining the polymorphism",
              },
              {
                id: "c",
                text: "Genetic drift alone in a very large population",
              },
              {
                id: "d",
                text: "Disruptive selection favouring both homozygotes",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Heterozygote advantage",
                statement:
                  "When the heterozygote has higher fitness than either homozygote, selection maintains both alleles — a form of balancing selection.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Heterozygotes resist malaria better, so they have the highest fitness.",
                working: "w_{Aa} > w_{AA}, w_{aa}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Homozygous sickle-cell individuals suffer sickle-cell anaemia, so the allele is also selected against at high frequency.",
                working: "w_{aa} < w_{AA}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Opposing selective pressures on the allele maintain a stable intermediate frequency — balancing selection.",
                working: "\\text{polymorphism maintained}",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Therefore option (b) is correct; drift cannot maintain a consistent frequency across regions.",
                working: "\\text{balancing selection}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(b)** Balancing selection via heterozygote advantage maintaining the polymorphism",
            commonErrors: [
              "Suggesting the allele should be eliminated — ignoring the heterozygote's malaria resistance.",
              "Attributing the pattern to drift, which is random rather than consistently maintaining frequencies.",
            ],
            examinerNote: "M1 M1 R1 A1.",
          },
        },
        {
          id: "biohl-u4-selection-modes-q4",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 8,
          stem: "A hospital reports rising resistance to a commonly used antibiotic in a bacterial pathogen. Initially $2\\%$ of isolates were resistant; after five years of heavy antibiotic use, $40\\%$ are resistant. Horizontal gene transfer can spread resistance plasmids between cells.",
          parts: [
            {
              label: "a",
              prompt:
                "Identify the mode of natural selection acting on the bacterial population and explain your reasoning.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Explain how antibiotic use changes the relative fitness of resistant and susceptible bacteria.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Describe two ways in which the resistance allele frequency could spread beyond the descendants of a single resistant mutant.",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "Evaluate the long-term evolutionary consequences of continued heavy antibiotic use for both the bacteria and human health, and suggest a management strategy.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Directional selection",
                statement:
                  "Antibiotics kill susceptible cells while resistant cells survive and reproduce, shifting the population towards resistance.",
              },
              {
                kind: "property",
                name: "Horizontal gene transfer",
                statement:
                  "Plasmids carrying resistance genes can move between bacteria by conjugation, accelerating spread beyond simple inheritance.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Antibiotics kill susceptible bacteria while resistant variants survive — selection favours one extreme (resistance).",
                working: "\\text{resistance favoured}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "The population mean shifts towards resistance: this is directional selection.",
                working: "\\text{directional selection}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "In the presence of antibiotic, susceptible bacteria have fitness near zero while resistant bacteria reproduce normally.",
                working:
                  "w_{\\text{sus}} \\approx 0,\\ w_{\\text{res}} \\approx 1",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Resistance therefore rises rapidly even from a low starting frequency.",
                working: "\\text{fitness advantage}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Conjugation transfers resistance plasmids directly between living bacteria.",
                working: "\\text{conjugation}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Transduction by bacteriophages or transformation by uptake of free DNA can also spread the gene.",
                working: "\\text{transduction/transformation}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning:
                  "Continued use selects for multi-drug resistance, shrinking treatment options and increasing mortality — an evolutionary arms race.",
                working: "\\text{arms race}",
                marks: 1,
                markCode: "R",
              },
              {
                part: "d",
                reasoning:
                  "Management: antibiotic stewardship — reserve last-line drugs, complete courses, develop new agents and alternative therapies.",
                working: "\\text{stewardship}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) directional selection — antibiotics favour resistant variants; (b) susceptible fitness falls to near zero while resistant fitness stays high; (c) conjugation, transduction or transformation spread resistance genes horizontally; (d) continued use drives multi-drug resistance; stewardship, new drug development and phage/alternative therapies are needed",
            commonErrors: [
              "Describing resistance as a mutation 'caused' by antibiotics — the mutation pre-exists; antibiotics only select for it.",
            ],
            examinerNote: "M1 A1 (a), M1 A1 (b), M1 A1 (c), R1 A1 (d).",
          },
        },
        {
          id: "biohl-u4-selection-modes-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "In a population of peppered moths living on soot-blackened trees, bird predation removes pale moths while dark morphs survive and reproduce. After many generations the dark morph makes up over $90\\%$ of the population. Which mode of selection is acting?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Stabilising selection" },
              { id: "b", text: "Directional selection" },
              { id: "c", text: "Sexual selection" },
              { id: "d", text: "Disruptive selection" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Directional selection",
                statement:
                  "Selection that favours one extreme phenotype, shifting the population mean in that direction.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Bird predation kills pale moths while dark morphs survive — one extreme phenotype is favoured.",
                working: "\\text{dark morph favoured}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The dark morph rises from rare to over $90\\%$, so the population mean shifts — directional selection.",
                working: "\\text{mean shifts towards dark}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Directional selection",
            commonErrors: [
              "Choosing stabilising selection — the pale morph is being removed, not protected alongside intermediates.",
            ],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "biohl-u4-selection-modes-q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Which statement about relative fitness $w$ is correct?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Relative fitness can exceed $1$ for advantageous alleles",
              },
              {
                id: "b",
                text: "The fittest variant in a population is always assigned $w = 1$",
              },
              {
                id: "c",
                text: "Relative fitness is the absolute number of offspring an individual produces",
              },
              {
                id: "d",
                text: "Relative fitness can only be measured for heterozygous genotypes",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Relative fitness",
                statement:
                  "The survival and reproductive success of a variant relative to the fittest variant, which is set to $w = 1$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Recall the definition: fitness is measured relative to the best-performing variant, which is normalised to $w = 1$.",
                working: "w_{\\max} = 1",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "No variant can exceed $w = 1$ by definition, and $w$ is a rate not an absolute count; it applies to all genotypes.",
                working: "w \\le 1",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(b)** The fittest variant in a population is always assigned $w = 1$",
            commonErrors: [
              "Thinking $w$ counts offspring directly — it is a relative measure, so the maximum is always $1$.",
            ],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "biohl-u4-selection-modes-q7",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A bacterial culture is treated with an antibiotic. Susceptible cells are killed while a few resistant mutants survive and multiply. What best describes the evolutionary change?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Directional selection increases the frequency of the resistance allele",
              },
              {
                id: "b",
                text: "No evolution occurs because bacteria reproduce asexually",
              },
              {
                id: "c",
                text: "Balancing selection maintains both types at stable frequencies",
              },
              {
                id: "d",
                text: "Stabilising selection removes genetic variation",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Directional selection",
                statement:
                  "When one extreme phenotype has higher fitness, its frequency rises and the population mean shifts.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Resistant cells survive and reproduce while susceptible cells die — resistant variants have higher fitness.",
                working: "w_{\\text{res}} > w_{\\text{sus}}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The resistant allele frequency rises over generations: this is directional selection, not balancing or stabilising.",
                working: "q_{\\text{res}} \\uparrow",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(a)** Directional selection increases the frequency of the resistance allele",
            commonErrors: [
              "Claiming asexual reproduction prevents evolution — selection still changes allele frequencies in clonal populations.",
            ],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "biohl-u4-selection-modes-q8",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "A diploid population of $500$ beetles has recessive allele frequency $q = 0.30$. After one generation of selection, $q$ has risen to $0.45$. Calculate the number of copies of the recessive allele in the gene pool before selection, after selection, and the increase in copies.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Copies before selection", answer: 300 },
              { label: "(b) Copies after selection", answer: 450 },
              { label: "(c) Increase in copies", answer: 150 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Gene pool size",
                statement:
                  "A diploid population of $N$ individuals carries $2N$ alleles at a locus; allele copies $= 2Nq$.",
              },
            ],
            steps: [
              {
                reasoning: "The gene pool contains $2N = 1000$ allele copies.",
                working: "2 \\times 500 = 1000",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Before selection: $1000 \\times 0.30 = 300$ copies; after: $1000 \\times 0.45 = 450$ copies.",
                working: "1000(0.30)=300;\\ 1000(0.45)=450",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "The increase is $450 - 300 = 150$ copies.",
                working: "450 - 300 = 150",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) $300$ copies; (b) $450$ copies; (c) increase of $150$ copies",
            commonErrors: [
              "Using $N$ instead of $2N$ — diploid individuals carry two alleles per locus.",
            ],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "biohl-u4-selection-modes-q9",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Genotype frequencies are $AA = 0.25$, $Aa = 0.50$, $aa = 0.25$ with fitnesses $w_{AA} = 1.00$, $w_{Aa} = 0.90$, $w_{aa} = 0.80$. Calculate the mean fitness $\\bar{w}$ of the population.",
          response: {
            type: "numeric",
            parts: [{ label: "$\\bar{w}$", answer: 0.9 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Mean fitness",
                statement:
                  "$\\bar{w} = \\sum w_i f_i$, the sum of each genotype's fitness weighted by its frequency.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Substitute each genotype's frequency times its fitness into the sum.",
                working: "\\bar{w} = 0.25(1.00) + 0.50(0.90) + 0.25(0.80)",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate: $0.25 + 0.45 + 0.20 = 0.90$.",
                working: "= 0.90",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\bar{w} = 0.90$",
            commonErrors: [
              "Adding fitnesses without weighting by genotype frequency.",
            ],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "biohl-u4-selection-modes-q10",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "In a moth population, pale morphs produce on average $120$ offspring per female per generation and dark morphs produce $84$, with equal survival to adulthood. Calculate the relative fitness of the dark morph and the percentage reduction in its reproductive output compared with the pale morph.",
          response: {
            type: "numeric",
            parts: [
              { label: "Relative fitness of dark morph", answer: 0.7 },
              {
                label: "Percentage reduction in output",
                answer: 30,
                unit: "%",
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Relative fitness",
                statement:
                  "Fitness of a variant divided by the fitness of the fittest variant; the pale morph sets $w = 1$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Relative fitness is the ratio of offspring production: $84 / 120$.",
                working: "w_{\\text{dark}} = \\frac{84}{120}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "This gives $w = 0.70$.",
                working: "= 0.70",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "The reduction is $(120 - 84) / 120 = 0.30$, or $30\\%$.",
                working: "\\frac{36}{120} = 0.30",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Relative fitness $= 0.70$; reproductive output is $30\\%$ lower",
            commonErrors: [
              "Reporting $0.30$ as fitness — that is the selection coefficient (reduction), not relative fitness.",
            ],
            examinerNote: "M1 A1 A1.",
          },
        },
        {
          id: "biohl-u4-selection-modes-q11",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "Disruptive selection in a population of Darwin's finches has produced two distinct beak-size clusters with very few intermediates. Which statement best links this pattern to speciation?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Speciation is impossible without a geographic barrier",
              },
              {
                id: "b",
                text: "Gene flow between the clusters will inevitably merge them into one species",
              },
              {
                id: "c",
                text: "Both extremes have higher fitness than intermediates, increasing variance and potentially isolating the forms",
              },
              {
                id: "d",
                text: "The intermediate beak size is favoured, narrowing the distribution",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Disruptive selection and speciation",
                statement:
                  "When both extremes are favoured, variance increases and the population can split into forms that evolve reproductive isolation.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Disruptive selection favours both extremes and removes intermediates — variance increases rather than the mean shifting.",
                working: "\\text{variance increases}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "If the two clusters experience different selection pressures and gene flow between them is reduced, reproductive isolation can evolve.",
                working: "\\text{divergence + isolation}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Option (b) correctly captures both the increased variance and the potential route to speciation.",
                working: "\\text{option b}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(c)** Both extremes have higher fitness than intermediates, increasing variance and potentially isolating the forms",
            commonErrors: [
              "Confusing disruptive with stabilising selection, which would favour the intermediates instead.",
            ],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "biohl-u4-selection-modes-q12",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "In a soot-darkened wood, $360$ of $400$ moths are the dark morph; in a nearby unpolluted wood, $10$ of $200$ moths are dark. Calculate the frequency of the dark morph in each wood and the difference between the two frequencies.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Dark morph frequency, darkened wood", answer: 0.9 },
              {
                label: "(b) Dark morph frequency, unpolluted wood",
                answer: 0.05,
              },
              { label: "(c) Difference between frequencies", answer: 0.85 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Phenotype frequency",
                statement:
                  "Frequency of a morph is the number carrying it divided by the total number of individuals sampled.",
              },
            ],
            steps: [
              {
                reasoning: "Darkened wood: $360 / 400 = 0.90$.",
                working: "\\frac{360}{400} = 0.90",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Unpolluted wood: $10 / 200 = 0.05$.",
                working: "\\frac{10}{200} = 0.05",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Difference: $0.90 - 0.05 = 0.85$.",
                working: "0.90 - 0.05 = 0.85",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) $0.90$; (b) $0.05$; (c) $0.85$",
            commonErrors: [
              "Reporting percentages (90 and 5) where frequencies are required — frequencies are proportions between $0$ and $1$.",
            ],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "biohl-u4-selection-modes-q13",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 8,
          stem: "During a drought on the Galápagos Islands, small soft seeds become scarce while large hard seeds remain available. Finches with larger, deeper beaks can crack the hard seeds and survive; smaller-beaked finches starve. Over two generations the mean beak depth of the surviving population rose from $9.4\\text{ mm}$ to $10.1\\text{ mm}$.",
          parts: [
            {
              label: "a",
              prompt:
                "Identify the mode of natural selection acting on beak depth and explain your reasoning.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Explain how beak depth affects fitness and predict the direction of allele-frequency change for alleles producing deeper beaks.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Describe how prolonged isolation of finch populations with different beak sizes could contribute to speciation.",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "Evaluate whether this example demonstrates natural selection, sexual selection, or both, and discuss one limitation of the two-generation dataset.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Directional selection",
                statement:
                  "Selection favouring one extreme phenotype shifts the population mean in that direction.",
              },
              {
                kind: "principle",
                name: "Selection and speciation",
                statement:
                  "Sustained divergent selection between isolated populations can produce reproductive isolation and new species.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "The drought removed small seeds, so deeper-beaked finches had higher survival — one extreme phenotype is favoured.",
                working: "\\text{deep beaks favoured}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Mean beak depth increased from $9.4$ to $10.1\\text{ mm}$ — the distribution mean shifted: directional selection.",
                working: "\\text{mean } 9.4 \\to 10.1",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Beak depth determines access to the only remaining food, so deeper-beaked individuals have higher fitness and leave more offspring.",
                working: "w_{\\text{deep}} > w_{\\text{shallow}}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Alleles for deeper beaks therefore rise in frequency while shallow-beak alleles decline.",
                working: "p_{\\text{deep}} \\uparrow",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "If populations become isolated on different islands with different seed types, divergent selection favours different beak sizes in each.",
                working: "\\text{divergent selection}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Over time the populations accumulate genetic differences and may evolve prezygotic or postzygotic barriers, completing speciation.",
                working: "\\text{reproductive isolation}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning:
                  "This is natural selection — the selecting agent is food availability and survival, not mate choice; sexual selection is not demonstrated.",
                working: "\\text{natural selection}",
                marks: 1,
                markCode: "R",
              },
              {
                part: "d",
                reasoning:
                  "Limitation: two generations is short — the change could partly reflect plasticity or sampling; longer data would confirm a genetic response.",
                working: "\\text{short timescale}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) directional selection — one extreme (deep beaks) is favoured and the mean shifts; (b) deeper beaks give access to hard seeds so their alleles rise in frequency; (c) isolation plus divergent selection can produce reproductive isolation and speciation; (d) this is natural selection only, and two generations is too short to rule out non-genetic effects",
            commonErrors: [
              "Claiming sexual selection is involved — no mate choice is described; the selecting agent is food availability.",
            ],
            examinerNote: "M1 A1 (a), M1 A1 (b), M1 A1 (c), R1 A1 (d).",
          },
        },
        {
          id: "biohl-u4-selection-modes-q14",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A recessive lethal allele $a$ is lethal when homozygous. In a large population in Hardy-Weinberg proportions, the frequency of allele $a$ is $q = 0.20$. What proportion of individuals are expected to die each generation because they are homozygous $aa$?",
          response: {
            type: "numeric",
            parts: [{ label: "Proportion of $aa$ individuals", answer: 0.04 }],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Hardy-Weinberg equation",
                statement:
                  "Recessive homozygote frequency $= q^2$; with $q = 0.20$, $aa = 0.04$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "In Hardy-Weinberg proportions the frequency of $aa$ is $q^2$.",
                working: "q^2 = 0.20^2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "This gives $0.04$, i.e. $4\\%$ of individuals are lethal homozygotes.",
                working: "= 0.04",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$0.04$ ($4\\%$)",
            commonErrors: [
              "Using $q$ instead of $q^2$ — the proportion of homozygotes is the square of the allele frequency.",
            ],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "biohl-u4-selection-modes-q15",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Under directional selection, the frequency of allele $a$ in a population falls from $0.40$ to $0.30$ in one generation. Calculate the change in allele frequency, express it as a percentage-point decrease, and state the frequencies of the dominant allele $A$ before and after selection.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Change in frequency of $a$", answer: -0.1 },
              {
                label: "(b) Percentage-point decrease",
                answer: 10,
                unit: "percentage points",
              },
              { label: "(c) Frequency of $A$ before selection", answer: 0.6 },
              { label: "(d) Frequency of $A$ after selection", answer: 0.7 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Allele frequency change",
                statement:
                  "$\\Delta q = q_{\\text{after}} - q_{\\text{before}}$; allele frequencies sum to $1$, so $p = 1 - q$.",
              },
            ],
            steps: [
              {
                reasoning: "Change in $q$: $0.30 - 0.40 = -0.10$.",
                working: "\\Delta q = 0.30 - 0.40 = -0.10",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "A decrease of $0.10$ equals $10$ percentage points.",
                working: "0.10 = 10\\text{ pp}",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Before selection $p = 1 - 0.40 = 0.60$; after, $p = 1 - 0.30 = 0.70$.",
                working: "p: 0.60 \\to 0.70",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The dominant allele frequency rose as the recessive allele was selected against — consistent with directional selection.",
                working: "p_{\\text{after}} = 0.70",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) $-0.10$; (b) $10$ percentage points; (c) $0.60$; (d) $0.70$",
            commonErrors: [
              "Giving the change as $+0.10$ — the allele frequency fell, so the change is negative.",
            ],
            examinerNote: "M1 A1 M1 A1.",
          },
        },
        {
          id: "biohl-u4-selection-modes-q16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "A population of snails shows a continuous distribution of shell thickness. Thick shells resist predation by crabs but are costly to produce; thin shells are cheap but vulnerable. Crab numbers have recently declined in the habitat, and over ten generations the distribution of shell thickness has shifted towards thinner shells.",
          parts: [
            {
              label: "a",
              prompt:
                "Identify the mode of selection acting on shell thickness and predict its effect on the mean and variance of the distribution.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Explain the trade-off between shell thickness and fitness using relative fitness reasoning.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Discuss whether this scenario could contribute to speciation if crab and crab-free habitats remain separated for many generations.",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "Evaluate whether genetic drift could produce the same observed shift, and what evidence would distinguish drift from selection.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Directional selection",
                statement:
                  "Falling crab numbers relax predation on thin shells, so thin-shelled snails have higher fitness and the mean shifts.",
              },
              {
                kind: "principle",
                name: "Drift versus selection",
                statement:
                  "Drift causes random frequency changes strongest in small populations; selection causes consistent adaptive change regardless of size.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "With fewer crabs, thin shells are favoured — one extreme of the distribution gains fitness, so this is directional selection.",
                working: "\\text{thin shells favoured}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "The mean shifts towards thinner shells while variance is roughly maintained.",
                working: "\\text{mean shifts, variance kept}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Thick shells cost resources to produce but resist predation; thin shells are cheaper but risky when crabs are abundant.",
                working: "\\text{cost vs protection}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "As crabs decline, the protective benefit falls below the production cost, so thin-shelled snails gain higher relative fitness.",
                working: "w_{\\text{thin}} > w_{\\text{thick}}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "If crab-free and crab-rich habitats stay separated, divergent selection favours thin shells in one and thick shells in the other.",
                working: "\\text{divergent selection}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Sustained divergence plus reduced gene flow could produce reproductive isolation — but speciation is not guaranteed, only possible.",
                working: "\\text{possible speciation}",
                marks: 1,
                markCode: "R",
              },
              {
                part: "d",
                reasoning:
                  "Drift could mimic the shift only by chance, especially in small populations; selection predicts a consistent directional response to the environmental change.",
                working: "\\text{drift is random}",
                marks: 1,
                markCode: "R",
              },
              {
                part: "d",
                reasoning:
                  "Evidence distinguishing them: repeatability across populations, correlation with crab density, and whether the shift reverses if crabs return — drift would not track the environment.",
                working: "\\text{environment correlation}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) directional selection — thin shells gain fitness as crabs decline, shifting the mean while variance is maintained; (b) thin shells are cheaper but lose protection, so fitness depends on crab density; (c) prolonged habitat separation could drive divergent selection toward speciation, but is not certain; (d) drift could mimic the shift randomly, but a repeatable response tracking crab numbers indicates selection",
            commonErrors: [
              "Ignoring that the same trait can be favoured in one environment and selected against in another — fitness is environment-dependent.",
            ],
            examinerNote: "M1 A1 (a), M1 A1 (b), M1 R1 (c), R1 A1 (d).",
          },
        },
      ],
    },
    {
      id: "biohl-u4-sexual-balancing",
      title: "Sexual and balancing selection",
      skill:
        "Explain how mate competition and mate choice drive sexual selection, and how heterozygote advantage maintains genetic polymorphism.",
      lesson: {
        sections: [
          {
            heading: "Sexual selection",
            body: "**Intrasexual selection** is competition between members of the same sex for access to mates — stag beetle horns and elephant seal fights are examples where large weapons win. **Intersexual selection** arises when one sex (usually females) chooses mates based on traits such as bright plumage or elaborate tails; the peacock's tail is the classic case. These traits can evolve even when they reduce survival — the **runaway selection** hypothesis explains this via a genetic correlation between the trait and preference. The **handicap principle** argues that a costly trait honestly signals genetic quality because only high-quality males can afford it.",
          },
          {
            heading: "Balancing selection",
            body: "When two or more alleles are maintained at stable frequencies, the cause is usually **balancing selection**. **Heterozygote advantage** occurs when the heterozygote outperforms both homozygotes — sickle-cell trait and malaria resistance is the standard example, maintaining the $HbS$ allele at $5-15\\%$ in endemic regions. **Frequency-dependent selection** favours whichever variant is currently rare, as in left- and right-mouthed scale-eating cichlid fish, where rare mouth morphs enjoy an advantage because prey fish are adapted to the common morph.",
          },
          {
            heading: "Sexual selection versus natural selection",
            body: "Sexual selection can oppose natural selection: a bright tail attracts predators but also mates. Because it acts on one sex only, it produces **sexual dimorphism** — large differences between males and females. Evaluations should note that sexual selection is still a form of natural selection (it is differential reproductive success), but the selecting agent is mates rather than the environment.",
          },
        ],
        keyFormulas: [
          {
            name: "Intrasexual selection",
            statement:
              "Same-sex competition for mates; winners gain reproductive access",
          },
          {
            name: "Intersexual selection",
            statement:
              "Mate choice by the opposite sex; ornaments and displays evolve",
          },
          {
            name: "Heterozygote advantage",
            statement:
              "$w_{Aa} > w_{AA}$ and $w_{Aa} > w_{aa}$ maintains both alleles",
          },
        ],
        workedExample: {
          problem:
            "In a lake, cichlid fish exist as left-mouthed and right-mouthed morphs. When left-mouthed fish dominate, most prey approach from the right side, so right-mouthed predators catch more prey. Explain how this maintains both morphs.",
          solution:
            "This is **frequency-dependent selection**: the rarer mouth morph has higher fitness because prey are adapted to evade the common morph's attack direction. As one morph becomes rare it gains an advantage, its frequency rises, then the other morph becomes rare and gains the advantage — oscillating around an equilibrium so both morphs persist.",
        },
      },
      questions: [
        {
          id: "biohl-u4-sexual-balancing-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Male peacocks grow long, brightly coloured tails that make them conspicuous to predators, yet the trait persists because females preferentially mate with tailed males. This is best described as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Disruptive selection between tail lengths" },
              { id: "b", text: "Stabilising selection on tail length" },
              { id: "c", text: "Directional natural selection against tails" },
              {
                id: "d",
                text: "Intersexual selection driven by female mate choice",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Intersexual selection",
                statement:
                  "Selection arising from mate choice by members of the opposite sex.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Females choosing tailed males is mate choice by one sex for the other — intersexual selection.",
                working: "\\text{mate choice}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The tail persists because the reproductive benefit outweighs the survival cost.",
                working: "\\text{reproductive benefit}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(d)** Intersexual selection driven by female mate choice",
            commonErrors: [
              "Calling it directional selection — the selecting agent is female preference, not survival.",
            ],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "biohl-u4-sexual-balancing-q2",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "Two male deer antler types exist: large antlers used in male-male combat and small antlers. Large-antlered males win fights and mate more often, but they are also more visible to predators. Which statement is correct?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "This is intrasexual selection because males compete directly for mating access",
              },
              {
                id: "b",
                text: "This is intersexual selection because antlers attract females",
              },
              {
                id: "c",
                text: "Large antlers will inevitably be eliminated by predators",
              },
              {
                id: "d",
                text: "This is balancing selection because two types persist",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Intrasexual selection",
                statement:
                  "Competition between members of the same sex for access to mates.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Antler contests are fights between males — same-sex competition for mates.",
                working: "\\text{male-male contest}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Winning fights grants reproductive access, so this is intrasexual (not intersexual) selection.",
                working: "\\text{intrasexual}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The predation cost shows the trait is costly but not necessarily lethal to the allele.",
                working: "\\text{costly trait}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(a)** This is intrasexual selection because males compete directly for mating access",
            commonErrors: [
              "Confusing intrasexual with intersexual selection — check who is competing versus who is choosing.",
            ],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "biohl-u4-sexual-balancing-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "In a bird population, a rare colour morph is eaten less often because predators have a search image for the common morph. As the rare morph increases in frequency, its advantage declines. What does this illustrate about the maintenance of polymorphism?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Directional selection that will fix the rare morph",
              },
              {
                id: "b",
                text: "Disruptive selection favouring the common morph",
              },
              { id: "c", text: "Stabilising selection removing all variation" },
              {
                id: "d",
                text: "Frequency-dependent selection maintaining both morphs at intermediate frequencies",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Frequency-dependent selection",
                statement:
                  "The fitness of a variant depends on its frequency; rare variants can have higher fitness, maintaining polymorphism.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Predators form a search image for the common morph, so rare morphs are eaten less — rare variants are favoured.",
                working: "\\text{rare advantage}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "As a morph becomes common, predation on it rises and its frequency falls — fitness is frequency-dependent.",
                working: "\\text{frequency-dependent}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Opposing frequency-dependent pressures prevent either morph being lost — a form of balancing selection.",
                working: "\\text{polymorphism maintained}",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Option (b) correctly identifies the mechanism and outcome.",
                working: "\\text{option b}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(d)** Frequency-dependent selection maintaining both morphs at intermediate frequencies",
            commonErrors: [
              "Describing it as directional selection — the favoured phenotype alternates rather than shifting steadily.",
            ],
            examinerNote: "M1 M1 R1 A1.",
          },
        },
        {
          id: "biohl-u4-sexual-balancing-q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "On a remote island, a species of bird has males with two tail types: long ornamental tails and short plain tails. Females prefer long-tailed males, but long tails reduce flight efficiency and increase predation risk. Over generations, both tail types persist.",
          parts: [
            {
              label: "a",
              prompt:
                "Classify the selection maintaining the long-tail trait and explain the opposing forces acting on it.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Explain how the handicap principle or runaway selection could account for females preferring costly tails.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Suggest why the short-tail morph is not eliminated from the population.",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "Evaluate whether sexual selection always increases the mean fitness of a population, using this example.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Sexual selection",
                statement:
                  "Mate choice can favour traits that reduce survival; the net effect on allele frequency depends on the balance of mating success and viability.",
              },
              {
                kind: "principle",
                name: "Handicap principle",
                statement:
                  "A costly ornament can honestly signal genetic quality because only high-quality individuals can bear the cost.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Female preference for long tails is intersexual selection; predation and flight costs are natural selection against the trait.",
                working: "\\text{intersexual vs natural}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Both forces act on the same trait, so persistence reflects a balance between mating advantage and survival cost.",
                working: "\\text{opposing forces}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Runaway selection: females with a preference for long tails produce long-tailed sons that are themselves preferred, amplifying the trait.",
                working: "\\text{runaway}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Handicap principle: only high-quality males can survive with long tails, so the tail honestly signals genetic fitness to choosy females.",
                working: "\\text{handicap}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Short-tailed males survive better and may still mate when long-tailed males are rare or exhausted.",
                working: "\\text{viability advantage}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Predation removes some long-tailed males, so short tails retain a selective advantage — the morph persists.",
                working: "\\text{predation balance}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning:
                  "Sexual selection can reduce mean fitness because the tail lowers survival even though it raises mating success — it does not always increase fitness.",
                working: "\\text{fitness trade-off}",
                marks: 1,
                markCode: "R",
              },
              {
                part: "d",
                reasoning:
                  "Evaluation should weigh mating benefit against survival cost; here both tail types persist at an evolutionary balance.",
                working: "\\text{balanced}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) intersexual selection favours long tails while natural selection (predation, flight cost) opposes them; (b) runaway selection amplifies trait and preference together, or the handicap principle makes the tail an honest quality signal; (c) short tails survive better and still mate, so predation maintains them; (d) sexual selection need not raise mean fitness — it trades survival for mating success, and here an equilibrium keeps both morphs",
            commonErrors: [
              "Claiming sexual selection always increases fitness — it can reduce survival; that is precisely why it can be costly.",
            ],
            examinerNote: "M1 A1 (a), M1 A1 (b), M1 A1 (c), R1 A1 (d).",
          },
        },
        {
          id: "biohl-u4-sexual-balancing-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Male elephant seals fight violently for access to females; the largest, strongest males win territories and mate with many females. What type of selection is this?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Intrasexual selection" },
              { id: "b", text: "Frequency-dependent selection" },
              { id: "c", text: "Intersexual selection" },
              { id: "d", text: "Stabilising selection" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Intrasexual selection",
                statement:
                  "Competition between members of the same sex for access to mates.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Males are competing directly with other males for mating access — same-sex competition.",
                working: "\\text{male vs male}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Competition within one sex for mates defines intrasexual selection.",
                working: "\\text{intrasexual}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** Intrasexual selection",
            commonErrors: [
              "Confusing it with intersexual selection — no female choice is described; the competition is between males.",
            ],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "biohl-u4-sexual-balancing-q6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Heterozygote advantage is best defined as:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "The heterozygote has higher fitness than either homozygote, maintaining both alleles",
              },
              { id: "b", text: "Both homozygotes outcompete the heterozygote" },
              {
                id: "c",
                text: "Allele frequencies change randomly each generation",
              },
              {
                id: "d",
                text: "Heterozygotes always have the highest mutation rate",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Heterozygote advantage",
                statement:
                  "When the heterozygote has higher fitness than either homozygote, selection maintains a stable polymorphism — a form of balancing selection.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Recall that heterozygote advantage requires $w_{Aa} > w_{AA}$ and $w_{Aa} > w_{aa}$.",
                working: "w_{Aa} > w_{AA},\\ w_{aa}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Because neither allele is ever fully eliminated, both persist at intermediate frequencies.",
                working: "\\text{polymorphism maintained}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(a)** The heterozygote has higher fitness than either homozygote, maintaining both alleles",
            commonErrors: [
              "Confusing heterozygote advantage with heterozygote disadvantage (inbreeding depression), where the heterozygote is worse.",
            ],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "biohl-u4-sexual-balancing-q7",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "In a lake of scale-eating cichlid fish, left-mouthed and right-mouthed morphs coexist. When one morph becomes common, prey fish evolve to evade attacks from that side, so the now-rare morph catches more prey. What maintains both morphs?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Stabilising selection fixing an intermediate mouth shape",
              },
              {
                id: "b",
                text: "Frequency-dependent selection giving the rare morph an advantage",
              },
              {
                id: "c",
                text: "Directional selection favouring the larger morph",
              },
              {
                id: "d",
                text: "Disruptive selection removing all intermediates",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Frequency-dependent selection",
                statement:
                  "The fitness of a variant depends on its frequency; rare variants can have higher fitness, maintaining polymorphism.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Prey are adapted to evade the common morph's attack direction, so the rare morph catches more prey.",
                working: "\\text{rare morph advantaged}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "As a morph becomes rare it gains advantage, its frequency rises, and then the other morph becomes rare — oscillation around an equilibrium.",
                working: "\\text{negative frequency dependence}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "This is frequency-dependent balancing selection; option (b) is correct.",
                working: "\\text{option b}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(b)** Frequency-dependent selection giving the rare morph an advantage",
            commonErrors: [
              "Describing it as directional selection — the favoured morph alternates rather than shifting steadily in one direction.",
            ],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "biohl-u4-sexual-balancing-q8",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "In a malaria-endemic region in Hardy-Weinberg proportions, the frequency of the sickle-cell allele $HbS$ is $q = 0.10$. Calculate the frequency of heterozygous carriers ($HbAS$), the frequency of sickle-cell anaemia homozygotes ($HbSS$), and the difference between these frequencies.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Carrier frequency $HbAS$", answer: 0.18 },
              { label: "(b) Affected frequency $HbSS$", answer: 0.01 },
              { label: "(c) Difference", answer: 0.17 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Hardy-Weinberg equation",
                statement:
                  "Heterozygote frequency $= 2pq$; recessive homozygote frequency $= q^2$; with $p = 0.90$, $q = 0.10$.",
              },
            ],
            steps: [
              {
                reasoning: "Carriers: $2pq = 2(0.90)(0.10) = 0.18$.",
                working: "2(0.9)(0.1) = 0.18",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Affected homozygotes: $q^2 = 0.10^2 = 0.01$.",
                working: "0.1^2 = 0.01",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Difference: $0.18 - 0.01 = 0.17$.",
                working: "0.18 - 0.01 = 0.17",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) $0.18$; (b) $0.01$; (c) $0.17$",
            commonErrors: [
              "Reporting $0.10$ as the carrier frequency — carriers are heterozygotes with frequency $2pq$, not $q$.",
            ],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "biohl-u4-sexual-balancing-q9",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A sample of $250$ cichlid fish from a lake contains $200$ left-mouthed and $50$ right-mouthed individuals. Calculate the frequency of each mouth morph.",
          response: {
            type: "numeric",
            parts: [
              { label: "Left-mouthed frequency", answer: 0.8 },
              { label: "Right-mouthed frequency", answer: 0.2 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Morph frequency",
                statement:
                  "The frequency of a morph is its count divided by the total sample size.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Left-mouthed: $200 / 250 = 0.80$; right-mouthed: $50 / 250 = 0.20$.",
                working: "\\frac{200}{250} = 0.80;\\ \\frac{50}{250} = 0.20",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The two frequencies sum to $1$, confirming the calculation.",
                working: "0.80 + 0.20 = 1",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Left-mouthed $= 0.80$; right-mouthed $= 0.20$",
            commonErrors: [
              "Swapping the frequencies — check which count belongs to which morph.",
            ],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "biohl-u4-sexual-balancing-q10",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "Male birds carrying an ornament allele have $90\\%$ of the survival of unornamented males because predators target them more often, but ornamented males achieve $1.5$ times as many matings. Assuming survival and mating success act independently, estimate the net relative fitness of ornamented males compared with unornamented males.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "Net relative fitness of ornamented males",
                answer: 1.35,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Components of fitness",
                statement:
                  "Net fitness combines survival (viability) and reproductive success; a costly ornament can still be favoured if the mating advantage outweighs the survival cost.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Net relative fitness is viability times mating success relative to the unornamented male: $0.90 \\times 1.5$.",
                working: "0.90 \\times 1.5",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "This gives $1.35$, so ornamented males are estimated to be $35\\%$ fitter overall.",
                working: "= 1.35",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Because net fitness exceeds $1$, the ornament allele can increase in frequency despite its survival cost — sexual selection can overcome natural selection.",
                working: "w = 1.35 > 1",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Net relative fitness $= 1.35$ — the ornament is favoured overall",
            commonErrors: [
              "Adding the effects ($0.90 + 1.5$) — fitness components multiply, they do not add.",
            ],
            examinerNote: "M1 A1 R1.",
          },
        },
        {
          id: "biohl-u4-sexual-balancing-q11",
          difficulty: "core",
          paper: "2",
          totalMarks: 2,
          stem: "The runaway selection hypothesis explains the evolution of elaborate ornaments such as the peacock's tail because:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Ornaments always improve survival by camouflaging the bearer",
              },
              {
                id: "b",
                text: "Ornaments are maintained only by mutation pressure",
              },
              {
                id: "c",
                text: "A genetic correlation between the ornament and female preference amplifies both over generations",
              },
              {
                id: "d",
                text: "Females choose mates randomly, so ornaments cannot evolve",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Runaway selection",
                statement:
                  "When females prefer a trait and the trait is heritable, sons inherit both trait and daughters inherit preference, creating a self-reinforcing genetic correlation.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Runaway selection requires a heritable female preference for a heritable male trait.",
                working: "\\text{trait + preference heritable}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Each generation strengthens the correlation between ornament and preference, exaggerating the trait even if it is costly.",
                working: "\\text{positive feedback}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(c)** A genetic correlation between the ornament and female preference amplifies both over generations",
            commonErrors: [
              "Confusing runaway selection with the handicap principle — runaway relies on correlation, handicap on honest signalling of quality.",
            ],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "biohl-u4-sexual-balancing-q12",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "In a population with heterozygote advantage, genotype frequencies are $AA = 0.25$, $Aa = 0.50$, $aa = 0.25$ and fitnesses are $w_{AA} = 0.80$, $w_{Aa} = 1.00$, $w_{aa} = 0.60$. Calculate the mean fitness $\\bar{w}$ of the population.",
          response: {
            type: "numeric",
            parts: [{ label: "$\\bar{w}$", answer: 0.85 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Mean fitness",
                statement:
                  "$\\bar{w} = \\sum w_i f_i$; here the heterozygote contributes the most to mean fitness.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Weight each fitness by its genotype frequency: $0.25(0.80) + 0.50(1.00) + 0.25(0.60)$.",
                working: "0.20 + 0.50 + 0.15",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "The sum is $0.85$.",
                working: "= 0.85",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Mean fitness is below the heterozygote's $1.00$ because half the population are lower-fitness homozygotes — heterozygote advantage maintains the polymorphism.",
                working: "\\bar{w} = 0.85 < w_{Aa}",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "$\\bar{w} = 0.85$",
            commonErrors: [
              "Averaging fitnesses without weighting by genotype frequency.",
            ],
            examinerNote: "M1 A1 R1.",
          },
        },
        {
          id: "biohl-u4-sexual-balancing-q13",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 8,
          stem: "Male swordtail fish carry a long 'sword' extension of the tail fin. Females preferentially mate with long-sworded males, but the sword reduces swimming speed and makes males more visible to predators. Both long-sworded and short-sworded males persist in the population.",
          parts: [
            {
              label: "a",
              prompt:
                "Classify the type(s) of selection acting on sword length and explain the opposing forces.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Explain how the handicap principle could account for female preference for long swords.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Suggest two reasons why the short-sword morph is not eliminated from the population.",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "Evaluate whether sexual selection in this species is likely to increase or decrease the population's mean fitness.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Sexual selection",
                statement:
                  "Mate choice can favour traits that reduce survival; net effect depends on the balance of mating success and viability.",
              },
              {
                kind: "principle",
                name: "Handicap principle",
                statement:
                  "A costly ornament honestly signals genetic quality because only high-quality males can bear the cost.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Female preference for long swords is intersexual selection; predation and reduced swimming speed are natural selection against the trait.",
                working: "\\text{intersexual vs natural}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Both forces act on the same trait, so the equilibrium reflects a balance between mating advantage and survival cost.",
                working: "\\text{opposing forces}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Only males in good condition can afford the survival cost of a long sword, so the sword honestly signals genetic quality to choosy females.",
                working: "\\text{honest signal}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Females therefore gain indirect genetic benefits by preferring long-sworded mates.",
                working: "\\text{indirect benefit}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Reason 1: short-sworded males survive better, so when long-sworded males are rare or predated, short swords still mate successfully.",
                working: "\\text{viability advantage}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Reason 2: predation removes some long-sworded males each generation, maintaining a selective advantage for the short-sword morph.",
                working: "\\text{predation balance}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning:
                  "Sexual selection can reduce mean fitness because the sword lowers survival even though it raises mating success — it does not necessarily increase fitness.",
                working: "\\text{fitness trade-off}",
                marks: 1,
                markCode: "R",
              },
              {
                part: "d",
                reasoning:
                  "The persistence of both morphs suggests an evolutionary equilibrium where mating benefits balance survival costs; evaluating net fitness requires field data on both components.",
                working: "\\text{equilibrium}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) intersexual selection favours long swords while natural selection (predation, swimming cost) opposes them; (b) the handicap principle makes the sword an honest quality signal affordable only by fit males; (c) short-sword males survive better and still mate, and predation continually removes long-sworded males; (d) sexual selection likely reduces mean fitness by trading survival for mating success, with both morphs persisting at a balance",
            commonErrors: [
              "Assuming the ornament must be beneficial — costly ornaments persist because mating success can outweigh survival costs.",
            ],
            examinerNote: "M1 A1 (a), M1 A1 (b), M1 A1 (c), R1 A1 (d).",
          },
        },
        {
          id: "biohl-u4-sexual-balancing-q14",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 3,
          stem: "In a population of $200$ birds, $180$ carry the common colour morph and $20$ carry a rare morph. Predators have a search image for the common morph: about $40\\%$ of common-morph birds and $5\\%$ of rare-morph birds are eaten each season. Calculate the expected number of deaths from predation for each morph and the total deaths.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Common-morph deaths", answer: 72 },
              { label: "(b) Rare-morph deaths", answer: 1 },
              { label: "(c) Total deaths", answer: 73 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Frequency-dependent predation",
                statement:
                  "Predators form a search image for the common morph, so rare morphs suffer lower predation — an example of balancing selection.",
              },
            ],
            steps: [
              {
                reasoning: "Common morph: $180 \\times 0.40 = 72$ deaths.",
                working: "180 \\times 0.40 = 72",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Rare morph: $20 \\times 0.05 = 1$ death.",
                working: "20 \\times 0.05 = 1",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Total deaths: $72 + 1 = 73$.",
                working: "72 + 1 = 73",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) $72$; (b) $1$; (c) $73$",
            commonErrors: [
              "Applying the common-morph predation rate to both morphs — the rates differ because predators target the common form.",
            ],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "biohl-u4-sexual-balancing-q15",
          difficulty: "core",
          paper: "2",
          totalMarks: 2,
          stem: "In a population of ungulates, adult males have a mean mass of $45\\text{ kg}$ and adult females a mean mass of $30\\text{ kg}$. Calculate the absolute difference in mean mass and express the male mean as a percentage above the female mean.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "Absolute difference in mean mass",
                answer: 15,
                unit: "kg",
              },
              {
                label: "Male mean as percentage above female mean",
                answer: 50,
                unit: "%",
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Sexual dimorphism",
                statement:
                  "Marked differences between males and females in size or ornamentation, often driven by sexual selection.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Difference: $45 - 30 = 15\\text{ kg}$; percentage above: $(15 / 30) \\times 100 = 50\\%$.",
                working: "45 - 30 = 15;\\ \\frac{15}{30} = 0.50",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The male mean is $15\\text{ kg}$ ($50\\%$) above the female mean — pronounced sexual dimorphism.",
                working: "15\\text{ kg},\\ 50\\%",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$15\\text{ kg}$; $50\\%$ above",
            commonErrors: [
              "Dividing by the male mean — the percentage increase is relative to the female (baseline) mean.",
            ],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "biohl-u4-sexual-balancing-q16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 6,
          stem: "Peacocks grow long, brightly coloured tails that are attractive to females but make the birds conspicuous to predators and reduce flight efficiency. The tail persists in the population despite these costs.",
          parts: [
            {
              label: "a",
              prompt:
                "Explain why a trait that reduces survival can nevertheless increase in frequency in a population.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Distinguish between the handicap principle and runaway selection as explanations for the peacock's tail.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Evaluate the claim that sexual selection is 'wasteful' evolution.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Sexual selection",
                statement:
                  "Traits can spread when the reproductive benefit of attracting mates outweighs the survival cost — fitness includes mating success, not just survival.",
              },
              {
                kind: "principle",
                name: "Costly signalling",
                statement:
                  "Ornaments may honestly signal genetic quality (handicap) or become exaggerated through trait-preference correlation (runaway).",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Fitness is the product of survival and reproductive success; a costly ornament that greatly increases matings can raise overall fitness even while lowering survival.",
                working: "w = \\text{survival} \\times \\text{mating success}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Because females preferentially mate with tailed males, the tail allele spreads despite its predation cost.",
                working: "\\text{mating advantage}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Handicap principle: only high-quality males can afford the tail's cost, so the tail honestly signals genetic fitness.",
                working: "\\text{handicap}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Runaway selection: heritable female preference and heritable tail create a self-reinforcing correlation that exaggerates the trait regardless of signalling value.",
                working: "\\text{runaway}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "From a survival standpoint the tail looks wasteful — energy spent on feathers that attract predators — and it can reduce mean fitness.",
                working: "\\text{survival cost}",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "But 'wasteful' is too strong: the tail improves mating success, may signal quality, and persists at an equilibrium — sexual selection is a real adaptive force, just one that can trade survival for reproduction.",
                working: "\\text{balanced trade-off}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) fitness combines survival and reproduction, so mating benefits can outweigh survival costs; (b) handicap = honest quality signal affordable only by fit males, runaway = self-reinforcing trait-preference correlation; (c) 'wasteful' is misleading — the tail costs survival but buys mating success and persists at a balance, so it is costly rather than useless",
            commonErrors: [
              "Calling the trait useless — persistence implies a net selective benefit through reproduction.",
            ],
            examinerNote: "M1 A1 (a), M1 A1 (b), R1 A1 (c).",
          },
        },
      ],
    },
  ],
};
