import type { Lesson } from "../../../types.ts";

export const lesson42: Lesson = {
  id: "biohl-u4-lesson-4-2",
  code: "4-2",
  title: "Speciation and Adaptive Radiation",
  goal: "I CAN distinguish allopatric and sympatric speciation, classify reproductive isolating mechanisms, and explain adaptive radiation, convergent evolution and extinction.",
  standards: ["Paper 1", "Paper 2", "AHL D.2", "AHL D.3"],
  vocabulary: [
    {
      term: "Speciation",
      definition:
        "The formation of a new species when a population becomes reproductively isolated from other populations and diverges genetically.",
    },
    {
      term: "Allopatric speciation",
      definition:
        "Speciation driven by geographic isolation, such as a mountain range or island, that prevents gene flow between populations.",
    },
    {
      term: "Sympatric speciation",
      definition:
        "Speciation occurring within a continuously distributed population without geographic isolation, often via polyploidy or host shifts.",
    },
    {
      term: "Reproductive isolation",
      definition:
        "Mechanisms that prevent interbreeding between populations, classified as prezygotic or postzygotic.",
    },
    {
      term: "Prezygotic isolation",
      definition:
        "Barriers acting before fertilisation: temporal, behavioural, mechanical or gametic isolation.",
    },
    {
      term: "Adaptive radiation",
      definition:
        "Rapid diversification of one ancestor into many species that occupy different ecological niches.",
    },
  ],
  concepts: [
    {
      id: "biohl-u4-speciation-mechanisms",
      title: "Mechanisms of speciation",
      skill:
        "Distinguish allopatric from sympatric speciation and classify prezygotic and postzygotic isolating mechanisms.",
      lesson: {
        sections: [
          {
            heading: "Allopatric and sympatric speciation",
            body: "Speciation requires **reproductive isolation** plus genetic divergence. In **allopatric speciation** a physical barrier — a river, mountain range or sea — splits a population; isolated gene pools diverge under different selection pressures and drift until hybrids are inviable or infertile. Island faunas are classic examples. In **sympatric speciation** populations diverge without geographic separation: most famously by **polyploidy** in plants, where chromosome doubling instantly creates a reproductively isolated form, and by host shifts in insects.",
          },
          {
            heading: "Prezygotic and postzygotic barriers",
            body: "**Prezygotic barriers** prevent fertilisation: *temporal* (different breeding seasons), *behavioural* (different courtship displays), *mechanical* (incompatible genitalia) and *gametic* (sperm cannot fertilise eggs). **Postzygotic barriers** act after fertilisation: hybrid inviability (embryo dies), hybrid infertility (the mule, sterile because parents have different chromosome numbers) and hybrid breakdown (F2 generation fails).",
          },
          {
            heading: "Evidence and timescale",
            body: "Ring species such as the Ensatina salamanders show a gradient of populations where neighbouring forms interbreed but the ends of the ring cannot — a living snapshot of speciation in progress. Speciation is usually gradual but can be rapid after environmental change or colonisation of empty niches.",
          },
        ],
        keyFormulas: [
          {
            name: "Allopatric speciation",
            statement:
              "Geographic barrier → isolation → divergence → speciation",
          },
          {
            name: "Prezygotic barriers",
            statement:
              "Temporal, behavioural, mechanical, gametic — before fertilisation",
          },
          {
            name: "Postzygotic barriers",
            statement:
              "Hybrid inviability, hybrid sterility, hybrid breakdown — after fertilisation",
          },
        ],
        workedExample: {
          problem:
            "A mainland bird population is split by a new river. After thousands of years the two populations differ in song and plumage and produce infertile hybrids when artificially crossed. Identify the speciation type and the isolating barriers.",
          solution:
            "This is **allopatric speciation**: the river provided geographic isolation, allowing the populations to diverge. Differences in song act as a **behavioural (prezygotic) barrier** in the wild, while hybrid infertility is a **postzygotic barrier** — together they maintain the species boundary.",
        },
      },
      questions: [
        {
          id: "biohl-u4-speciation-mechanisms-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Two populations of a plant species occupy the same valley but one flowers in spring and the other in autumn. They never interbreed. What type of reproductive isolation is this?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Temporal prezygotic isolation" },
              { id: "b", text: "Mechanical prezygotic isolation" },
              { id: "c", text: "Postzygotic hybrid sterility" },
              { id: "d", text: "Behavioural postzygotic isolation" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Temporal isolation",
                statement:
                  "Prezygotic barrier where populations breed at different times, preventing gamete meeting.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Different flowering seasons mean the two groups never produce gametes at the same time.",
                working: "\\text{different seasons}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Acting before fertilisation, this is a temporal prezygotic barrier.",
                working: "\\text{prezygotic}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Temporal prezygotic isolation",
            commonErrors: [
              "Calling it postzygotic — no zygote is ever formed.",
            ],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "biohl-u4-speciation-mechanisms-q2",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "A horse and a donkey can mate to produce a mule, but the mule is sterile. Which classification of isolating mechanism does this represent?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Postzygotic hybrid inviability" },
              { id: "b", text: "Prezygotic behavioural isolation" },
              { id: "c", text: "Prezygotic gametic isolation" },
              { id: "d", text: "Postzygotic hybrid sterility" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Hybrid sterility",
                statement:
                  "Postzygotic barrier where the hybrid develops but cannot produce functional gametes.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The mule forms and develops — fertilisation and development succeed.",
                working: "\\text{zygote viable}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The barrier acts at reproduction: the hybrid cannot produce fertile offspring.",
                working: "\\text{sterile hybrid}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "A post-fertilisation failure of reproduction is postzygotic hybrid sterility.",
                working: "\\text{postzygotic}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Postzygotic hybrid sterility",
            commonErrors: [
              "Confusing sterility with inviability — the mule is born healthy; only its gametes fail.",
            ],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "biohl-u4-speciation-mechanisms-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "On the same island, two species of fruit fly originally fed on the same fruit. One population shifted to a different host plant and, over generations, evolved different courtship signals and can no longer produce fertile hybrids with the other. No geographic barrier exists. What best explains the origin of the second species?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Sympatric speciation driven by divergent selection on host use, reinforced by reproductive isolation",
              },
              {
                id: "b",
                text: "Allopatric speciation followed by secondary contact",
              },
              {
                id: "c",
                text: "Adaptive radiation caused by a mass extinction",
              },
              { id: "d", text: "Genetic drift in a small founder population" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Sympatric speciation",
                statement:
                  "Divergence within a continuously distributed population, often via ecological niche specialisation or host shifts.",
              },
            ],
            steps: [
              {
                reasoning:
                  "No geographic barrier is present, so allopatric speciation is ruled out.",
                working: "\\text{no barrier}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The host shift created divergent selection, splitting gene flow ecologically within the same area — sympatric speciation.",
                working: "\\text{sympatric}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Courtship differences and hybrid infertility are isolating mechanisms that completed the speciation.",
                working: "\\text{isolation mechanisms}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Option (b) correctly links niche divergence, sympatry and isolation.",
                working: "\\text{option b}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(b)** Sympatric speciation driven by divergent selection on host use, reinforced by reproductive isolation",
            commonErrors: [
              "Assuming speciation requires geographic isolation — sympatric speciation via host shifts is documented in insects.",
            ],
            examinerNote: "M1 M1 M1 A1.",
          },
        },
        {
          id: "biohl-u4-speciation-mechanisms-q4",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 8,
          stem: "A population of fish lives in a large lake. A volcanic eruption raises a lava flow that splits the lake into two separate basins with different water temperatures and food supplies. Over 50 000 years the two populations diverge.",
          parts: [
            {
              label: "a",
              prompt:
                "Identify the type of speciation most likely occurring and describe the role of the lava flow.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Explain how divergent selection in the two basins could lead to genetic differences between the populations.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Describe two prezygotic and one postzygotic barrier that could eventually complete speciation if the basins reconnected.",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "Evaluate whether speciation would still occur if the lava flow formed only 500 years ago, considering timescales of evolutionary change.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Allopatric speciation",
                statement:
                  "Geographic isolation stops gene flow; divergent selection and drift then differentiate the gene pools until reproductive isolation evolves.",
              },
              {
                kind: "property",
                name: "Timescale of speciation",
                statement:
                  "Speciation typically requires many generations; very recent isolation may not yet produce isolating barriers.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "The lava flow is a geographic barrier splitting the lake — this sets up allopatric speciation.",
                working: "\\text{geographic isolation}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Gene flow between basins stops, so each population evolves independently.",
                working: "\\text{no gene flow}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Different temperatures and food select for different traits (e.g. metabolism, body size, feeding structures) in each basin.",
                working: "\\text{divergent selection}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Different allele frequencies accumulate in the two gene pools through selection and drift.",
                working: "\\text{allele divergence}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Prezygotic examples: different spawning seasons/timing, different courtship displays or incompatible gametes.",
                working: "\\text{prezygotic}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Postzygotic example: hybrids develop but are sterile or die early.",
                working: "\\text{postzygotic}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning:
                  "In 500 years only a few dozen fish generations occur — likely insufficient for isolating barriers to evolve; populations would probably still interbreed if reunited.",
                working: "\\text{insufficient time}",
                marks: 1,
                markCode: "R",
              },
              {
                part: "d",
                reasoning:
                  "Speciation timescale depends on generation time and selection strength; rapid speciation is possible but not guaranteed.",
                working: "\\text{timescale judgement}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) allopatric speciation — the lava flow is a geographic barrier halting gene flow; (b) different temperatures and food drive divergent selection and allele-frequency divergence; (c) e.g. different spawning times or courtship (prezygotic) and hybrid sterility (postzygotic); (d) 500 years is probably too short for isolating barriers to evolve, so the populations may remain one species",
            commonErrors: [
              "Assuming isolation instantly creates a new species — isolation alone is not speciation; divergence and reproductive barriers must evolve.",
            ],
            examinerNote: "M1 A1 (a), M1 A1 (b), M1 A1 (c), R1 A1 (d).",
          },
        },
        {
          id: "biohl-u4-speciation-mechanisms-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Allopatric speciation is best described as:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Speciation within a continuously distributed population with no barrier",
              },
              { id: "b", text: "Speciation caused only by sexual selection" },
              {
                id: "c",
                text: "The instant formation of a new species by hybridisation",
              },
              {
                id: "d",
                text: "Speciation caused by a geographic barrier that stops gene flow between populations",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Allopatric speciation",
                statement:
                  "Speciation driven by geographic isolation — a physical barrier prevents gene flow while populations diverge.",
              },
            ],
            steps: [
              {
                reasoning:
                  "'Allo-' refers to other/different places: a geographic barrier separates the populations.",
                working: "\\text{geographic barrier}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "With gene flow stopped, the isolated gene pools diverge until reproductive isolation evolves.",
                working: "\\text{divergence + isolation}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(a)** Speciation caused by a geographic barrier that stops gene flow between populations",
            commonErrors: [
              "Confusing allopatric with sympatric — sympatric speciation occurs without geographic separation.",
            ],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "biohl-u4-speciation-mechanisms-q6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Prezygotic isolating mechanisms are barriers that:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Act after fertilisation to produce sterile hybrids",
              },
              { id: "b", text: "Require a geographic barrier to operate" },
              { id: "c", text: "Only occur in plants via polyploidy" },
              { id: "d", text: "Prevent fertilisation from occurring at all" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Prezygotic isolation",
                statement:
                  "Barriers acting before fertilisation — temporal, behavioural, mechanical or gametic — that prevent zygote formation.",
              },
            ],
            steps: [
              {
                reasoning:
                  "'Pre-zygotic' means before the zygote forms; these barriers stop gametes meeting or fusing.",
                working: "\\text{before fertilisation}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Examples include different breeding seasons, incompatible courtship and gametic incompatibility — no zygote is produced.",
                working: "\\text{no zygote formed}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Prevent fertilisation from occurring at all",
            commonErrors: [
              "Describing postzygotic barriers — those act after fertilisation on hybrid viability or fertility.",
            ],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "biohl-u4-speciation-mechanisms-q7",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "A glacier advances and splits a deer population into two valleys. Thousands of years later, deer from the two valleys can be crossed artificially but produce sterile offspring. What is the most accurate description of what has occurred?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Sympatric speciation via behavioural isolation",
              },
              {
                id: "b",
                text: "Only genetic drift — no speciation has occurred",
              },
              {
                id: "c",
                text: "Adaptive radiation caused by the glacier directly",
              },
              {
                id: "d",
                text: "Allopatric speciation completed by a postzygotic barrier",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Allopatric speciation",
                statement:
                  "Geographic isolation stops gene flow; divergence and the evolution of reproductive barriers then produce new species.",
              },
              {
                kind: "definition",
                name: "Postzygotic isolation",
                statement:
                  "Barriers acting after fertilisation, such as hybrid sterility.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The glacier is a geographic barrier separating the two populations — allopatric speciation.",
                working: "\\text{allopatric}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Sterile hybrids mean a postzygotic barrier (hybrid sterility) now maintains the species boundary.",
                working: "\\text{postzygotic barrier}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Isolation plus evolved reproductive barriers constitutes completed speciation — option (b).",
                working: "\\text{option b}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(b)** Allopatric speciation completed by a postzygotic barrier",
            commonErrors: [
              "Saying no speciation has occurred — sterile hybrids demonstrate reproductive isolation, which defines separate species.",
            ],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "biohl-u4-speciation-mechanisms-q8",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "When two diverged populations are crossed, $400$ hybrid embryos are produced. Of these, $25\\%$ die during development (inviable), $60\\%$ develop but are sterile, and $15\\%$ are fertile. Calculate the expected number of embryos in each category.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Inviable embryos", answer: 100 },
              { label: "(b) Sterile but viable embryos", answer: 240 },
              { label: "(c) Fertile hybrids", answer: 60 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Postzygotic barriers",
                statement:
                  "Hybrid inviability kills embryos; hybrid sterility produces viable but infertile adults; both prevent gene flow.",
              },
            ],
            steps: [
              {
                reasoning: "Inviable: $400 \\times 0.25 = 100$.",
                working: "400 \\times 0.25 = 100",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Sterile but viable: $400 \\times 0.60 = 240$.",
                working: "400 \\times 0.60 = 240",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Fertile: $400 \\times 0.15 = 60$; the three categories sum to $400$.",
                working: "400 \\times 0.15 = 60",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) $100$; (b) $240$; (c) $60$",
            commonErrors: [
              "Adding the percentages incorrectly — $25 + 60 + 15 = 100\\%$, so the categories must partition the $400$ embryos.",
            ],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "biohl-u4-speciation-mechanisms-q9",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "In a ring species of salamanders, neighbouring populations interbreed freely but the two populations at the ends of the ring cannot interbreed. In a survey, $230$ of $250$ neighbouring population pairs produced fertile hybrids. Calculate the proportion and percentage of neighbouring pairs that interbreed successfully.",
          response: {
            type: "numeric",
            parts: [
              { label: "Proportion interbreeding successfully", answer: 0.92 },
              { label: "Percentage", answer: 92, unit: "%" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Ring species",
                statement:
                  "A chain of populations where adjacent forms interbreed but the terminal forms are reproductively isolated — evidence of speciation in progress.",
              },
            ],
            steps: [
              {
                reasoning: "Proportion: $230 / 250 = 0.92$.",
                working: "\\frac{230}{250} = 0.92",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Percentage: $0.92 \\times 100 = 92\\%$.",
                working: "= 92\\%",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$0.92$ ($92\\%$)",
            commonErrors: [
              "Reporting $0.92$ as a percentage (92%) vs proportion — check which unit is requested.",
            ],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "biohl-u4-speciation-mechanisms-q10",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "Species A has a diploid chromosome number of $2n = 46$ and species B has $2n = 44$. Calculate the haploid chromosome number ($n$) of each species and the chromosome number of a hybrid zygote formed between them.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Haploid number of species A", answer: 23 },
              { label: "(b) Haploid number of species B", answer: 22 },
              { label: "(c) Hybrid zygote chromosome number", answer: 45 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Haploid and diploid numbers",
                statement:
                  "Diploid cells carry $2n$ chromosomes; gametes carry $n$; a zygote receives one haploid set from each parent.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Species A: $n = 46 / 2 = 23$; species B: $n = 44 / 2 = 22$.",
                working: "n_A = 23;\\ n_B = 22",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "A hybrid zygote receives $23 + 22 = 45$ chromosomes — an odd number.",
                working: "23 + 22 = 45",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The odd chromosome number disrupts meiosis in the hybrid, contributing to postzygotic isolation.",
                working: "\\text{odd } 2n \\Rightarrow \\text{sterile}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) $23$; (b) $22$; (c) $45$",
            commonErrors: [
              "Using $2n$ values directly — gametes carry the haploid number $n = 2n/2$.",
            ],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "biohl-u4-speciation-mechanisms-q11",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "Polyploidy is a common mechanism of sympatric speciation in plants. Which statement best explains why chromosome doubling creates a new species instantly?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "The doubled plant is immediately sterile with all other plants",
              },
              { id: "b", text: "Polyploid plants cannot reproduce at all" },
              {
                id: "c",
                text: "It requires a geographic barrier to take effect",
              },
              {
                id: "d",
                text: "The polyploid produces gametes with an extra chromosome set, so hybrids with the diploid parent are triploid and usually sterile — instant reproductive isolation",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Polyploid speciation",
                statement:
                  "Chromosome doubling produces a reproductively isolated form because crosses with the diploid parent yield triploid, usually sterile, offspring.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A tetraploid produces diploid (2n) gametes; a diploid parent produces haploid (n) gametes.",
                working: "2n \\times n \\to 3n",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Triploid offspring cannot produce balanced gametes, so they are sterile — a postzygotic barrier appears immediately.",
                working: "\\text{triploid sterile}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "No geographic barrier is needed — reproductive isolation arises in the same location: sympatric speciation.",
                working: "\\text{sympatric}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(b)** The polyploid produces gametes with an extra chromosome set, so hybrids with the diploid parent are triploid and usually sterile — instant reproductive isolation",
            commonErrors: [
              "Thinking polyploids are always sterile — many plant polyploids are fertile with each other; they are isolated from the diploid parent.",
            ],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "biohl-u4-speciation-mechanisms-q12",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "In a garden containing $300$ plants, $270$ are diploid and $30$ are tetraploid, and mating is random. Calculate the frequency of tetraploid plants, the probability that a random mating pair is tetraploid $\\times$ tetraploid, and the expected percentage of such matings.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Frequency of tetraploids", answer: 0.1 },
              {
                label:
                  "(b) Probability of tetraploid $\\times$ tetraploid mating",
                answer: 0.01,
              },
              {
                label: "(c) Expected percentage of such matings",
                answer: 1,
                unit: "%",
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Random mating",
                statement:
                  "Under random mating the probability of a pairing is the product of the two individuals' frequencies: $p \\times p = p^2$.",
              },
            ],
            steps: [
              {
                reasoning: "Tetraploid frequency: $30 / 300 = 0.10$.",
                working: "\\frac{30}{300} = 0.10",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Random tetraploid $\\times$ tetraploid probability: $0.10 \\times 0.10 = 0.01$.",
                working: "0.10^2 = 0.01",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "As a percentage this is $1\\%$ of matings.",
                working: "= 1\\%",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) $0.10$; (b) $0.01$; (c) $1\\%$",
            commonErrors: [
              "Multiplying by $2$ — for two randomly chosen individuals the pairing probability is $p^2$, not $2p^2$.",
            ],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "biohl-u4-speciation-mechanisms-q13",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 8,
          stem: "Ten finches colonise a remote volcanic island. Three million years later the island supports fifteen finch species with different beak shapes, while the mainland ancestor species remains unchanged. The island species cannot interbreed with each other or with the mainland form.",
          parts: [
            {
              label: "a",
              prompt:
                "Describe the sequence of events that produced the fifteen island species, naming the speciation type.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Give one example of a prezygotic and one example of a postzygotic barrier that could isolate the island species.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Explain why islands are particularly favourable for rapid speciation.",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "Evaluate the evidence that this represents completed speciation rather than one highly variable species.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Allopatric speciation",
                statement:
                  "Geographic isolation halts gene flow; divergent selection and drift differentiate gene pools until reproductive isolation evolves.",
              },
              {
                kind: "principle",
                name: "Adaptive radiation",
                statement:
                  "Empty niches on islands allow a single colonist lineage to diversify into many species.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "The ten colonists were isolated from the mainland gene pool — allopatric speciation began.",
                working: "\\text{isolation}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "On the island, different beak niches were exploited by different lineages; over millions of years reproductive isolation completed speciation — an adaptive radiation.",
                working: "\\text{divergence + radiation}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Prezygotic example: different courtship songs or breeding seasons prevent mating.",
                working: "\\text{prezygotic}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Postzygotic example: hybrids are inviable or sterile because of accumulated genetic differences.",
                working: "\\text{postzygotic}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Islands offer empty niches with no competitors, so a single lineage can diversify rapidly into many ecological roles.",
                working: "\\text{empty niches}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Isolation prevents gene flow from the mainland, so divergence is not swamped by immigration.",
                working: "\\text{no gene flow}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning:
                  "Reproductive isolation between all island species and the mainland form indicates completed speciation — they cannot exchange genes.",
                working: "\\text{isolation complete}",
                marks: 1,
                markCode: "R",
              },
              {
                part: "d",
                reasoning:
                  "However, fifteen distinct breeding populations with different beaks could still be subspecies if some gene flow existed; the claim of full speciation is strongest given the reported hybrid inviability.",
                working: "\\text{evaluate evidence}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) isolation of colonists → divergent selection into different beak niches → reproductive isolation: allopatric speciation via adaptive radiation; (b) e.g. different songs or breeding times (prezygotic), hybrid sterility (postzygotic); (c) empty niches and no gene flow accelerate divergence; (d) complete reproductive isolation supports fifteen species, though the claim depends on evidence of hybrid failure rather than morphology alone",
            commonErrors: [
              "Confusing speciation with adaptive radiation — radiation is the pattern of many species from one ancestor; speciation is the process creating each species boundary.",
            ],
            examinerNote: "M1 A1 (a), M1 A1 (b), M1 A1 (c), R1 A1 (d).",
          },
        },
        {
          id: "biohl-u4-speciation-mechanisms-q14",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Two populations of a fish species attempt to interbreed, but gametic incompatibility prevents fertilisation: only $12$ of $500$ attempted fertilisations succeed. Calculate the fertilisation success rate as a proportion and a percentage.",
          response: {
            type: "numeric",
            parts: [
              { label: "Success rate as a proportion", answer: 0.024 },
              { label: "Success rate as a percentage", answer: 2.4, unit: "%" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Gametic isolation",
                statement:
                  "A prezygotic barrier where sperm cannot fertilise eggs of the other population, preventing zygote formation.",
              },
            ],
            steps: [
              {
                reasoning: "Rate: $12 / 500 = 0.024$.",
                working: "\\frac{12}{500} = 0.024",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "As a percentage: $0.024 \\times 100 = 2.4\\%$ — gametic isolation is nearly complete.",
                working: "= 2.4\\%",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$0.024$ ($2.4\\%$)",
            commonErrors: [
              "Reporting $2.4$ as a proportion — percentages must be divided by $100$ to give proportions.",
            ],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "biohl-u4-speciation-mechanisms-q15",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "Hybrids between two bird species have relative fitness $w = 0.60$ compared with pure-bred parents ($w = 1$). If $500$ hybrid offspring are produced in a breeding programme, calculate the expected number surviving to reproduce, the fitness deficit relative to pure-breds, and the relative fitness as a percentage of the parental value.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Expected surviving hybrids", answer: 300 },
              { label: "(b) Fitness deficit", answer: 0.4 },
              {
                label: "(c) Relative fitness as percentage",
                answer: 60,
                unit: "%",
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Hybrid fitness",
                statement:
                  "Relative fitness $w$ scales survival and reproduction; $w = 0.60$ means hybrids contribute $60\\%$ as much to the next generation.",
              },
            ],
            steps: [
              {
                reasoning: "Expected survivors: $500 \\times 0.60 = 300$.",
                working: "500 \\times 0.60 = 300",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Deficit: $1 - 0.60 = 0.40$ (or $200$ fewer effective offspring out of $500$).",
                working: "1 - 0.60 = 0.40",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "As a percentage: $0.60 \\times 100 = 60\\%$ of the parental fitness.",
                working: "= 60\\%",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) $300$; (b) $0.40$; (c) $60\\%$",
            commonErrors: [
              "Reporting $0.40$ as the number of survivors — that is the deficit; survivors are $300$.",
            ],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "biohl-u4-speciation-mechanisms-q16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "A butterfly species is split by the Alps into northern and southern populations. The two populations look nearly identical but have different wing patterns and courtship displays. When individuals from the two populations are bred together in the laboratory, the female offspring are normal but all male offspring are sterile — a pattern known as Haldane's rule.",
          parts: [
            {
              label: "a",
              prompt:
                "Identify the type of speciation most likely occurring and explain the role of the Alps.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Classify the prezygotic and postzygotic barriers suggested by the described differences and hybrid sterility.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Explain Haldane's rule and why hybrid sterility in one sex only still counts as postzygotic isolation.",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "Evaluate whether the two populations should be considered separate species, and what additional evidence would strengthen the case.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Allopatric speciation",
                statement:
                  "A geographic barrier (the Alps) isolates populations; divergence produces reproductive isolation over time.",
              },
              {
                kind: "principle",
                name: "Haldane's rule",
                statement:
                  "When hybrids of two species are inviable or sterile, it is usually the heterogametic sex (XY males in many animals) that is affected.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "The Alps act as a geographic barrier preventing gene flow — allopatric speciation.",
                working: "\\text{geographic isolation}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Different wing patterns and courtship displays suggest the populations have diverged genetically.",
                working: "\\text{divergence}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Different courtship displays and possibly wing-pattern recognition are behavioural prezygotic barriers.",
                working: "\\text{behavioural prezygotic}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Male hybrid sterility is a postzygotic barrier — the zygote forms but cannot reproduce.",
                working: "\\text{postzygotic sterility}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Haldane's rule states that the heterogametic sex (males in XY systems) suffers more in hybrids because recessive deleterious alleles on the X chromosome are unmasked.",
                working: "\\text{heterogametic sex}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Even partial hybrid sterility blocks gene flow between the populations, so it functions as postzygotic isolation.",
                working: "\\text{blocks gene flow}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning:
                  "The evidence supports separate species: prezygotic differences plus postzygotic male sterility indicate strong reproductive isolation.",
                working: "\\text{strong isolation}",
                marks: 1,
                markCode: "R",
              },
              {
                part: "d",
                reasoning:
                  "Strengthening evidence: field data on whether the forms interbreed in nature, genetic divergence measures, and hybrid breakdown in the F2 generation.",
                working: "\\text{more evidence needed}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) allopatric speciation — the Alps isolate the populations and divergence follows; (b) courtship/wing-pattern differences are behavioural prezygotic barriers and male hybrid sterility is postzygotic; (c) Haldane's rule reflects unmasking of recessive X-linked alleles in the heterogametic sex, and any hybrid sterility blocks gene flow; (d) they are likely separate species, strengthened by natural hybridisation data and genetic divergence",
            commonErrors: [
              "Claiming one-sex sterility means the populations are still one species — any consistent hybrid sterility is a postzygotic barrier.",
            ],
            examinerNote: "M1 A1 (a), M1 A1 (b), M1 A1 (c), R1 A1 (d).",
          },
        },
      ],
    },
    {
      id: "biohl-u4-adaptive-radiation",
      title: "Adaptive radiation, convergence and extinction",
      skill:
        "Explain adaptive radiation after colonisation or mass extinction, distinguish convergent from divergent evolution, and describe extinction mechanisms.",
      lesson: {
        sections: [
          {
            heading: "Adaptive radiation",
            body: "**Adaptive radiation** is the rapid evolution of many species from one ancestor when new niches become available. Darwin's finches of the Galápagos diversified into seed-eaters, insect-eaters and tool-users with differently shaped beaks after colonising an island with empty niches. Hawaiian honeycreepers and African cichlid fishes show the same pattern, producing hundreds of species in isolated lakes or islands.",
          },
          {
            heading: "Convergent and divergent evolution",
            body: "**Divergent evolution** is the splitting of related lineages into different forms — the opposite of convergence. **Convergent evolution** produces similar adaptations in unrelated lineages facing similar pressures: the wings of bats and birds, the streamlined bodies of sharks and dolphins, and marsupial versus placental wolves are classic cases. Convergent traits arise because similar environments impose similar selective solutions, not because of shared ancestry — a key distinction from homologous structures.",
          },
          {
            heading: "Extinction",
            body: "**Background extinction** is the steady low rate of species loss. **Mass extinctions** remove a large fraction of species in a short time — the end-Permian event (about 252 million years ago) killed about $95\\%$ of marine species, and the end-Cretaceous event (about 66 million years ago) ended the non-avian dinosaurs. Extinctions empty niches that survivors radiate into; some groups such as mammals expanded dramatically after the Cretaceous extinction.",
          },
        ],
        keyFormulas: [
          {
            name: "Adaptive radiation",
            statement: "One ancestor → many species filling empty niches",
          },
          {
            name: "Convergent evolution",
            statement:
              "Unrelated lineages evolve similar traits under similar selection",
          },
          {
            name: "Divergent evolution",
            statement:
              "Related lineages evolve different traits in different environments",
          },
        ],
        workedExample: {
          problem:
            "After a mass extinction removed most large herbivores, the few surviving mammal lineages rapidly diversified into grazers, browsers and burrowers filling different plant niches. Name the process and explain it.",
          solution:
            "This is **adaptive radiation**: the extinction emptied ecological niches, and surviving lineages diversified to exploit them. With reduced competition and abundant resources, selection favoured different feeding and locomotor adaptations, producing many new species from few ancestors.",
        },
      },
      questions: [
        {
          id: "biohl-u4-adaptive-radiation-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Darwin's finches on the Galápagos show beaks adapted for seed-crushing, insect-catching and cactus-probing. All descend from one ancestral species. What is this pattern called?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Adaptive radiation" },
              { id: "b", text: "Convergent evolution" },
              { id: "c", text: "Stabilising selection" },
              { id: "d", text: "Genetic drift" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Adaptive radiation",
                statement:
                  "Rapid diversification of one ancestor into multiple species exploiting different niches.",
              },
            ],
            steps: [
              {
                reasoning:
                  "One ancestor produced many species with different beak adaptations for different foods.",
                working: "\\text{one ancestor, many niches}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Divergence into distinct ecological roles is the definition of adaptive radiation.",
                working: "\\text{adaptive radiation}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Adaptive radiation",
            commonErrors: [
              "Choosing convergent evolution — the finches are related and diverged; convergence applies to unrelated lineages.",
            ],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "biohl-u4-adaptive-radiation-q2",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "Sharks (fish) and dolphins (mammals) both have streamlined bodies, dorsal fins and tail flukes for fast swimming, yet they are only distantly related. What does this similarity demonstrate?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Convergent evolution driven by similar selective pressures in water",
              },
              {
                id: "b",
                text: "Homologous structures from a recent common ancestor",
              },
              { id: "c", text: "Disruptive selection on body shape" },
              { id: "d", text: "Adaptive radiation within a single lineage" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Convergent evolution",
                statement:
                  "Unrelated lineages evolve similar traits because similar environments impose similar selective solutions.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Sharks and dolphins are unrelated (fish vs mammal) but share the same aquatic lifestyle.",
                working: "\\text{unrelated lineages}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Fast-swimming demands produced similar body plans independently — convergent evolution.",
                working: "\\text{convergent}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The shared traits are analogous, not homologous, because they arose separately.",
                working: "\\text{analogous traits}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(b)** Convergent evolution driven by similar selective pressures in water",
            commonErrors: [
              "Calling the traits homologous — they have different embryonic origins despite similar function.",
            ],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "biohl-u4-adaptive-radiation-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "The end-Permian extinction removed about 95% of marine species. Afterwards, surviving lineages such as early reptiles and synapsids diversified rapidly into many terrestrial forms. What is the most accurate explanation?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "The extinction directly created new species by mutating survivors",
              },
              {
                id: "b",
                text: "The surviving species were already maximally diverse before the extinction",
              },
              {
                id: "c",
                text: "Survivors became more diverse because extinction increased mutation rates permanently",
              },
              {
                id: "d",
                text: "Mass extinction emptied niches, and surviving lineages underwent adaptive radiation into vacated ecological roles",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Post-extinction adaptive radiation",
                statement:
                  "Mass extinction removes competitors and opens niches; survivors diversify into the empty ecological space.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Extinction removes species and their niches — it does not create species directly.",
                working: "\\text{niches emptied}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "With competitors gone and resources abundant, surviving lineages face relaxed competition and diversifying selection.",
                working: "\\text{relaxed competition}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Different lineages exploit different vacated roles — this is adaptive radiation after a mass extinction.",
                working: "\\text{adaptive radiation}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Option (b) captures the niche-release mechanism correctly.",
                working: "\\text{option b}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(b)** Mass extinction emptied niches, and surviving lineages underwent adaptive radiation into vacated ecological roles",
            commonErrors: [
              "Thinking extinction itself causes speciation — extinction only creates the ecological opportunity; selection does the rest.",
            ],
            examinerNote: "M1 M1 M1 A1.",
          },
        },
        {
          id: "biohl-u4-adaptive-radiation-q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "A volcanic island emerges in the Pacific. Within 10 000 years, a single ancestral finch-like bird has given rise to 14 species with beaks specialised for seeds, insects, nectar and fruit. On a nearby island, an unrelated group of birds evolved similar beak shapes for the same foods.",
          parts: [
            {
              label: "a",
              prompt:
                "Name the process that produced the 14 species on the first island and explain why it occurred there.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Distinguish between the similar beaks on the two islands being homologous and analogous structures.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Explain how divergent selection produced different beak shapes within the island radiation.",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "Evaluate the role of isolation and empty niches in driving such rapid diversification, and discuss one limitation of the 'island' model for explaining adaptive radiation.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Adaptive radiation",
                statement:
                  "Colonisation of an island with unoccupied niches drives rapid diversification from a single ancestor.",
              },
              {
                kind: "principle",
                name: "Convergent evolution",
                statement:
                  "Similar environments select for similar traits in unrelated lineages, producing analogous structures.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "This is adaptive radiation: one ancestor diversified into many species exploiting empty niches on a newly formed island.",
                working: "\\text{adaptive radiation}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Isolation and absence of competitors released the lineage from niche constraints, enabling rapid divergence.",
                working: "\\text{empty niches}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "The beaks are analogous: similar function and appearance but different evolutionary origins on separate islands.",
                working: "\\text{analogous}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Homologous structures would share a recent common ancestor; these birds diverged long ago, so the resemblance is convergent.",
                working: "\\text{convergent}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Different foods impose different mechanical demands; beaks suited to each food gave their bearers higher fitness.",
                working: "\\text{beak-food matching}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Over generations selection shifted beak morphology in each lineage, reducing competition between them — character displacement.",
                working: "\\text{character displacement}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning:
                  "Isolation prevents gene flow so lineages diverge independently; empty niches remove competition and allow niche specialisation.",
                working: "\\text{isolation + niches}",
                marks: 1,
                markCode: "R",
              },
              {
                part: "d",
                reasoning:
                  "Limitation: adaptive radiation also occurs on continents after extinctions or climatic shifts — islands are a model, not a requirement.",
                working: "\\text{not islands only}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) adaptive radiation — isolation and empty niches let one ancestor diversify rapidly; (b) the beaks are analogous (convergent), not homologous, since they arose independently on different islands; (c) food-specific mechanical demands selected for different beak shapes, reducing competition; (d) isolation plus vacant niches drive radiation, but radiations also occur on continents after extinctions or climate change — islands are just the classic case",
            commonErrors: [
              "Describing convergent traits as homologous — check ancestry, not just appearance.",
            ],
            examinerNote: "M1 A1 (a), M1 A1 (b), M1 A1 (c), R1 A1 (d).",
          },
        },
        {
          id: "biohl-u4-adaptive-radiation-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Adaptive radiation is best defined as:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "The migration of a single species to a new habitat",
              },
              {
                id: "b",
                text: "The convergence of unrelated species in similar environments",
              },
              {
                id: "c",
                text: "The rapid diversification of one ancestor into many species that occupy different ecological niches",
              },
              {
                id: "d",
                text: "The gradual extinction of species over geological time",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Adaptive radiation",
                statement:
                  "Rapid evolution of many species from one ancestor when new ecological niches become available.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Key features: one ancestor, rapid diversification, and different niches occupied by the descendants.",
                working: "\\text{one ancestor, many niches}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Option (b) captures all three features; convergence and extinction are different processes.",
                working: "\\text{option b}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(b)** The rapid diversification of one ancestor into many species that occupy different ecological niches",
            commonErrors: [
              "Confusing adaptive radiation with convergent evolution — radiation is divergence within a lineage; convergence is similarity across unrelated lineages.",
            ],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "biohl-u4-adaptive-radiation-q6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Which of the following is an example of convergent evolution?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "The different beak shapes of Darwin's finches",
              },
              {
                id: "b",
                text: "The divergence of mammals after the dinosaur extinction",
              },
              {
                id: "c",
                text: "The radiation of cichlid fishes in a single lake",
              },
              {
                id: "d",
                text: "The wings of bats and birds evolving independently for flight",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Convergent evolution",
                statement:
                  "Unrelated lineages evolve similar traits because similar environments impose similar selective solutions.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Bats (mammals) and birds (dinosaurs) are unrelated but both evolved wings for flight — similar trait, different ancestry.",
                working: "\\text{unrelated, similar trait}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The other options describe divergence or radiation within related lineages, not convergence.",
                working: "\\text{option b}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(b)** The wings of bats and birds evolving independently for flight",
            commonErrors: [
              "Choosing finch beaks — those are homologous structures diverging from a common ancestor, not convergent traits.",
            ],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "biohl-u4-adaptive-radiation-q7",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "A researcher compares two groups of lizards: (1) several species descended from one ancestor that now occupy different islands and eat different foods; (2) an unrelated group of lizards on another continent that evolved similar body shapes for the same foods. Which statement correctly classifies these patterns?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Both groups show stabilising selection" },
              {
                id: "b",
                text: "Group 1 shows adaptive radiation (divergent evolution); group 2 shows convergent evolution",
              },
              {
                id: "c",
                text: "Group 1 shows convergent evolution; group 2 shows adaptive radiation",
              },
              {
                id: "d",
                text: "Both groups show identical evolutionary mechanisms",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Divergent versus convergent evolution",
                statement:
                  "Related lineages splitting into different forms is divergence (often via adaptive radiation); unrelated lineages becoming similar is convergence.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Group 1: one ancestor produced multiple species in different niches — adaptive radiation, a form of divergent evolution.",
                working: "\\text{radiation/divergence}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Group 2: unrelated lizards evolved similar shapes for similar foods — convergent evolution.",
                working: "\\text{convergence}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Option (b) assigns each pattern correctly; the key test is ancestry — related vs unrelated.",
                working: "\\text{option b}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(b)** Group 1 shows adaptive radiation (divergent evolution); group 2 shows convergent evolution",
            commonErrors: [
              "Swapping the terms — check whether the lineages are related (divergence) or unrelated (convergence).",
            ],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "biohl-u4-adaptive-radiation-q8",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "A mass extinction reduced a marine group from $100$ species to $25$ survivors. Calculate the number of species lost, the fraction of species surviving, and the percentage of species lost.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Species lost", answer: 75 },
              { label: "(b) Fraction surviving", answer: 0.25 },
              { label: "(c) Percentage lost", answer: 75, unit: "%" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Mass extinction",
                statement:
                  "A short event removing a large fraction of species — here $75\\%$ of the group.",
              },
            ],
            steps: [
              {
                reasoning: "Lost: $100 - 25 = 75$ species.",
                working: "100 - 25 = 75",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Surviving fraction: $25 / 100 = 0.25$.",
                working: "\\frac{25}{100} = 0.25",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Percentage lost: $0.75 \\times 100 = 75\\%$.",
                working: "= 75\\%",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) $75$; (b) $0.25$; (c) $75\\%$",
            commonErrors: [
              "Reporting the surviving fraction as the percentage lost — $25\\%$ survive, so $75\\%$ are lost.",
            ],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "biohl-u4-adaptive-radiation-q9",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The end-Permian mass extinction killed about $95\\%$ of marine species. If a marine group contained $200$ species before the event, how many are expected to have survived?",
          response: {
            type: "numeric",
            parts: [{ label: "Species surviving", answer: 10 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Mass extinction magnitude",
                statement:
                  "The end-Permian event (about $252$ million years ago) removed approximately $95\\%$ of marine species.",
              },
            ],
            steps: [
              {
                reasoning:
                  "If $95\\%$ are lost, $5\\%$ survive: $200 \\times 0.05$.",
                working: "200 \\times 0.05",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "This gives $10$ surviving species.",
                working: "= 10",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$10$ species",
            commonErrors: [
              "Calculating $95\\%$ of $200$ ($190$) — that is the number lost, not the number surviving.",
            ],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "biohl-u4-adaptive-radiation-q10",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "On one Galápagos island, a sample of $100$ Darwin's finches contains $60$ seed-eaters, $25$ insect-eaters and $15$ nectar-feeders. Calculate the proportion of the sample in each feeding niche.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Seed-eaters", answer: 0.6 },
              { label: "(b) Insect-eaters", answer: 0.25 },
              { label: "(c) Nectar-feeders", answer: 0.15 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Niche partitioning",
                statement:
                  "Different species exploit different resources; the proportions show how the community's niche space is divided.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Seed-eaters: $60 / 100 = 0.60$; insect-eaters: $25 / 100 = 0.25$; nectar-feeders: $15 / 100 = 0.15$.",
                working: "0.60,\\ 0.25,\\ 0.15",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "The three proportions sum to $1.00$, as required.",
                working: "0.60 + 0.25 + 0.15 = 1",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Seed-eaters dominate the sample, consistent with the seed-rich diet of most finch species.",
                working: "\\text{seed-eaters most common}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) $0.60$; (b) $0.25$; (c) $0.15$",
            commonErrors: [
              "Reporting counts (60, 25, 15) instead of proportions — divide each count by the sample size.",
            ],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "biohl-u4-adaptive-radiation-q11",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "Marsupial wolves (thylacines) and placental wolves have similar skull shapes, dentition and body plans, yet their lineages diverged over 100 million years ago. What does this similarity demonstrate?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Homologous structures inherited from a recent common ancestor",
              },
              { id: "b", text: "Adaptive radiation within a single lineage" },
              {
                id: "c",
                text: "Stabilising selection maintaining an optimal body plan",
              },
              {
                id: "d",
                text: "Convergent evolution — similar selective pressures produced similar adaptations in unrelated lineages",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Convergent evolution",
                statement:
                  "Similar environments select for similar traits in unrelated lineages, producing analogous rather than homologous structures.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Marsupial and placental mammals diverged before the Cretaceous — they are not recently related.",
                working: "\\text{unrelated lineages}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Both evolved wolf-like skulls and dentition for similar hunting niches — convergent evolution.",
                working: "\\text{convergent}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The resemblance is analogous, not homologous, because it arose independently.",
                working: "\\text{analogous traits}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(b)** Convergent evolution — similar selective pressures produced similar adaptations in unrelated lineages",
            commonErrors: [
              "Calling the skulls homologous — check ancestry first; convergent traits look alike but have different origins.",
            ],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "biohl-u4-adaptive-radiation-q12",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "After a mass extinction emptied many niches, four surviving mammal lineages diversified into $60$ species over $10$ million years. Calculate the average number of species produced per lineage and the speciation rate per lineage per million years.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Species per lineage", answer: 15 },
              {
                label: "(b) Speciation rate per lineage per million years",
                answer: 1.5,
                unit: "species/Myr",
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Post-extinction radiation",
                statement:
                  "Empty niches released by extinction allow surviving lineages to diversify rapidly — adaptive radiation.",
              },
            ],
            steps: [
              {
                reasoning: "Species per lineage: $60 / 4 = 15$.",
                working: "\\frac{60}{4} = 15",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Rate per lineage per million years: $15 / 10 = 1.5$ species per lineage per Myr.",
                working: "\\frac{15}{10} = 1.5",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "This rapid rate is characteristic of adaptive radiation into vacated niches.",
                working: "\\text{radiation rate}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) $15$ species per lineage; (b) $1.5$ species per lineage per million years",
            commonErrors: [
              "Dividing by the total time only once — the rate is per lineage AND per unit time.",
            ],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "biohl-u4-adaptive-radiation-q13",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 8,
          stem: "Hawaiian honeycreepers descended from a single finch-like ancestor that colonised the islands millions of years ago. About $50$ species now exist, with beaks specialised for seeds, insects, nectar and bark-gleaning. On a separate Pacific island, an unrelated group of birds evolved similar beak shapes for the same foods.",
          parts: [
            {
              label: "a",
              prompt:
                "Name the process that produced the honeycreeper radiation and describe the role of the Hawaiian islands.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Distinguish between the similar beaks on the two islands as homologous or analogous structures.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Explain how divergent selection produced the range of beak shapes within the honeycreeper radiation.",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "Evaluate the claim that adaptive radiation requires islands, citing one counter-example.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Adaptive radiation",
                statement:
                  "One ancestor diversifies into many species exploiting different niches when ecological opportunity arises.",
              },
              {
                kind: "principle",
                name: "Convergent evolution",
                statement:
                  "Similar environments select for similar traits in unrelated lineages — analogous structures.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "This is adaptive radiation: one colonist ancestor diversified into about $50$ species.",
                working: "\\text{adaptive radiation}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "The islands offered isolation and many unoccupied niches, releasing the lineage from competition and enabling rapid divergence.",
                working: "\\text{islands = niches + isolation}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "The beaks are analogous: they serve the same function but arose independently on different islands in unrelated lineages.",
                working: "\\text{analogous}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Homologous structures would share a recent common ancestor; here the resemblance is convergent, not inherited.",
                working: "\\text{convergent}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Different foods impose different mechanical demands; beak shapes suited to each food gave their bearers higher fitness.",
                working: "\\text{beak-food matching}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Selection shifted beak morphology in each lineage, reducing competition between them — character displacement reinforces divergence.",
                working: "\\text{character displacement}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning:
                  "Islands are the classic setting because isolation and empty niches coincide, but they are not required.",
                working: "\\text{islands not required}",
                marks: 1,
                markCode: "R",
              },
              {
                part: "d",
                reasoning:
                  "Counter-example: mammals radiated on continents after the Cretaceous extinction, and cichlids radiated in African lakes — radiation follows empty niches wherever they occur.",
                working: "\\text{continental radiation}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) adaptive radiation — island isolation and empty niches let one ancestor diversify into ~50 species; (b) the beaks are analogous (convergent), not homologous, since they arose independently; (c) food-specific demands selected different beak shapes, reducing competition; (d) islands are typical but not required — post-extinction mammal radiation on continents is a clear counter-example",
            commonErrors: [
              "Assuming all similar traits are homologous — analogous structures arise independently and are evidence of convergence.",
            ],
            examinerNote: "M1 A1 (a), M1 A1 (b), M1 A1 (c), R1 A1 (d).",
          },
        },
        {
          id: "biohl-u4-adaptive-radiation-q14",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The beak depths of five finch species on an island are $8$, $9$, $10$, $11$ and $12\\text{ mm}$. Calculate the range and the mean beak depth.",
          response: {
            type: "numeric",
            parts: [
              { label: "Range of beak depths", answer: 4, unit: "mm" },
              { label: "Mean beak depth", answer: 10, unit: "mm" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Range and mean",
                statement: "Range $= \\max - \\min$; mean $= \\sum x_i / n$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Range: $12 - 8 = 4\\text{ mm}$; mean: $(8 + 9 + 10 + 11 + 12) / 5 = 50 / 5 = 10\\text{ mm}$.",
                working: "12 - 8 = 4;\\ \\frac{50}{5} = 10",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The $4\\text{ mm}$ range across five species illustrates the divergence of beak morphology in a radiation.",
                working: "\\text{divergence shown}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Range $= 4\\text{ mm}$; mean $= 10\\text{ mm}$",
            commonErrors: [
              "Averaging without checking the sum — $8+9+10+11+12 = 50$, divided by $5$ species gives $10$.",
            ],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "biohl-u4-adaptive-radiation-q15",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "Two islands are colonised by finches. Island X is founded by $3$ individuals and later supports $9$ species; Island Y is founded by $30$ individuals and later supports $12$ species. Calculate the number of species produced per founding individual on each island and the ratio between them.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Species per founder, Island X", answer: 3 },
              { label: "(b) Species per founder, Island Y", answer: 0.4 },
              { label: "(c) Ratio X : Y", answer: 7.5 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Founder effect and radiation",
                statement:
                  "Small founding populations carry limited genetic variation but can radiate rapidly into empty niches; larger founder pools may diversify less extremely.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Island X: $9 / 3 = 3.0$ species per founder; Island Y: $12 / 30 = 0.4$ species per founder.",
                working: "\\frac{9}{3} = 3.0;\\ \\frac{12}{30} = 0.4",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Ratio: $3.0 / 0.4 = 7.5$.",
                working: "\\frac{3.0}{0.4} = 7.5",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The smaller founder group produced far more species per individual — consistent with strong drift and rapid niche divergence on Island X.",
                working: "\\text{X diversified more per founder}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) $3.0$; (b) $0.4$; (c) $7.5$",
            commonErrors: [
              "Comparing raw species counts (9 vs 12) — the question asks per founding individual, so divide by founder numbers.",
            ],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "biohl-u4-adaptive-radiation-q16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Thylacines (marsupial wolves) and grey wolves (placental mammals) share similar body plans, skull shapes and dentition adapted for hunting, yet their lineages separated before the extinction of the dinosaurs. Both groups occupied similar predator niches in Australia and North America respectively.",
          parts: [
            {
              label: "a",
              prompt:
                "Name the evolutionary process that produced the similar wolf-like traits and explain the mechanism.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Distinguish between analogous and homologous structures, and classify the thylacine and wolf skulls.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Explain why convergent evolution does not imply recent common ancestry.",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "Evaluate the usefulness of convergent traits for reconstructing evolutionary relationships, and mention one limitation.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Convergent evolution",
                statement:
                  "Similar environments impose similar selective solutions, so unrelated lineages evolve similar traits independently.",
              },
              {
                kind: "definition",
                name: "Analogous structures",
                statement:
                  "Structures with similar function and appearance but different evolutionary origins; homologous structures share a common ancestor.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "This is convergent evolution: similar predator niches selected for similar skulls and dentition in both lineages.",
                working: "\\text{convergent evolution}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "The similarity arose independently because both faced the same functional demands — pursuit predation on similar prey.",
                working: "\\text{same selective pressure}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Analogous structures have similar function but different origins; homologous structures share ancestry despite possibly different functions.",
                working: "\\text{analogous vs homologous}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Thylacine and wolf skulls are analogous — they evolved separately in marsupial and placental lineages.",
                working: "\\text{analogous}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Convergent traits reflect similar environments, not shared descent — ancestry is shown by homologous structures and genetic evidence, not by appearance alone.",
                working: "\\text{appearance }\\neq\\text{ ancestry}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "The lineages separated over 100 million years ago, far too early for the wolf-like form to be inherited from a common ancestor.",
                working: "\\text{deep divergence}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning:
                  "Convergent traits are misleading if used alone — they suggest relationships that do not exist.",
                working: "\\text{misleading alone}",
                marks: 1,
                markCode: "R",
              },
              {
                part: "d",
                reasoning:
                  "They remain useful for inferring past environments and ecological roles, and molecular data override morphological similarity when reconstructing phylogenies.",
                working: "\\text{ecological inference}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) convergent evolution — similar niches selected similar adaptations independently; (b) the skulls are analogous, not homologous, because they have different evolutionary origins; (c) convergence reflects shared environment, not shared descent — the lineages split before the dinosaurs died out; (d) convergent traits mislead phylogenies if used alone but are useful for inferring ecology, and molecular evidence takes precedence",
            commonErrors: [
              "Inferring close relatedness from similar appearance — convergence is precisely the exception that proves ancestry must be tested, not assumed.",
            ],
            examinerNote: "M1 A1 (a), M1 A1 (b), M1 A1 (c), R1 A1 (d).",
          },
        },
      ],
    },
  ],
};
