import type { Lesson } from "../../../types.ts";

export const lesson42: Lesson = {
  id: "biosl-u4-lesson-4-2",
  code: "4-2",
  title: "Speciation, Classification and Biodiversity",
  goal: "I CAN describe how reproductive isolation leads to speciation, classify organisms using binomial nomenclature and evolutionary trees, and explain what biodiversity is.",
  standards: ["Topic A.5", "Topic A.5.2", "Paper 1", "Paper 2"],
  vocabulary: [
    {
      term: "Species",
      definition:
        "A group of organisms that can interbreed to produce fertile offspring.",
    },
    {
      term: "Speciation",
      definition:
        "The formation of new species when populations become reproductively isolated and diverge genetically.",
    },
    {
      term: "Reproductive isolation",
      definition:
        "Barriers that prevent interbreeding between populations, including geographical, behavioural and genetic barriers.",
    },
    {
      term: "Binomial nomenclature",
      definition:
        "The two-part naming system for species using genus and species, e.g. Homo sapiens.",
    },
    {
      term: "Phylogenetic tree",
      definition:
        "A branching diagram showing the evolutionary relationships and common ancestors of species.",
    },
    {
      term: "Biodiversity",
      definition:
        "The variety of life at genetic, species and ecosystem levels; often measured by species richness.",
    },
  ],
  concepts: [
    {
      id: "biosl-u4-speciation",
      title: "Speciation and reproductive isolation",
      skill:
        "Explain how geographical or reproductive barriers lead to the formation of new species.",
      lesson: {
        sections: [
          {
            heading: "What is a species?",
            body: "The biological species concept defines a species as a group of populations whose members can interbreed in nature to produce **fertile** offspring. Populations that cannot interbreed — or whose hybrids are sterile — are separate species. Mules (horse × donkey) are fertile neither way, so horses and donkeys are different species.",
          },
          {
            heading: "Allopatric speciation",
            body: "In **allopatric speciation** a physical barrier — a river, mountain range or sea — splits a population. The separated groups experience different selection pressures and mutations, so their gene pools diverge. If the barrier later disappears, the groups may no longer interbreed successfully because of accumulated differences: they are reproductively isolated and have speciated. Island species such as Darwin's finches are classic examples.",
          },
          {
            heading: "Other isolation mechanisms",
            body: "**Sympatric speciation** occurs without a physical barrier, for example through polyploidy in plants or shifts in mating behaviour. Isolation can be **pre-zygotic** (different mating seasons, courtship behaviours or habitats that prevent fertilisation) or **post-zygotic** (hybrid inviability, sterility or breakdown in later generations).",
          },
        ],
        keyFormulas: [
          {
            name: "Species definition",
            statement:
              "Group of populations that can interbreed to produce fertile offspring",
          },
          {
            name: "Allopatric speciation",
            statement:
              "Geographical barrier → isolated gene pools → divergence → reproductive isolation",
          },
          {
            name: "Isolation types",
            statement:
              "Pre-zygotic = prevents fertilisation; post-zygotic = hybrid fails or is sterile",
          },
        ],
        workedExample: {
          problem:
            "A population of snails is split by a new river valley. After 20 generations the barrier is removed but the two groups no longer produce fertile offspring when they meet. Name the process and explain each step.",
          solution:
            "Allopatric speciation. The valley isolated the gene pools; different selection pressures and mutations caused divergence; when the barrier was removed the populations had become reproductively isolated, so they behaved as separate species.",
        },
      },
      questions: [
        {
          id: "biosl-u4-speciation-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 1,
          stem: "Two populations of birds can interbreed, but their offspring are always sterile. According to the biological species concept, what does this show?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "The populations are different species because fertile offspring are not produced",
              },
              {
                id: "b",
                text: "The populations are different subspecies with no genetic difference",
              },
              {
                id: "c",
                text: "The populations belong to the same species because they can interbreed",
              },
              {
                id: "d",
                text: "The birds are the same species because sterility is not inherited",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Biological species concept",
                statement:
                  "A species is a group that can interbreed to produce fertile offspring.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Sterile offspring fail the 'fertile offspring' criterion, so the populations are separate species.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** They are different species",
            commonErrors: [
              "Stopping at 'can interbreed' and ignoring the fertility requirement.",
            ],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "biosl-u4-speciation-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A volcanic eruption creates a new sea channel that permanently separates a mainland population of lizards from an island population. Which type of speciation is most likely?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Artificial selection by humans" },
              {
                id: "b",
                text: "Allopatric speciation through geographical isolation",
              },
              { id: "c", text: "Sympatric speciation through polyploidy" },
              { id: "d", text: "Convergent evolution" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Allopatric speciation",
                statement:
                  "Speciation caused by a physical barrier dividing a population into isolated gene pools.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A sea channel is a physical/geographical barrier separating the populations.",
                working: "physical barrier present",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Isolated populations diverge genetically and may become reproductively isolated — allopatric speciation.",
                working: "divergence → isolation",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Allopatric speciation",
            commonErrors: [
              "Choosing sympatric — that requires no physical barrier.",
            ],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "biosl-u4-speciation-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "Two species of tree frog live in the same rainforest. One mates in temporary pools during the wet season and the other in permanent pools during the dry season; they never meet to breed. What type of reproductive isolation is this, and what is its effect?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Pre-zygotic isolation by habitat and timing, preventing fertilisation",
              },
              { id: "b", text: "Post-zygotic isolation; hybrids are sterile" },
              { id: "c", text: "Geographical isolation by a physical barrier" },
              { id: "d", text: "No isolation, because they share a habitat" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Pre-zygotic isolation",
                statement:
                  "Barriers that prevent fertilisation, such as different habitats or breeding seasons.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The frogs share a forest but use different breeding sites and seasons, so they never meet to mate.",
                working: "different time + place of breeding",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Because no fertilisation occurs, this is pre-zygotic isolation.",
                working: "pre-zygotic = before fertilisation",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Gene flow between the populations is prevented, allowing them to remain distinct species.",
                working: "no gene flow",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(b)** Pre-zygotic isolation by habitat and breeding season",
            commonErrors: [
              "Calling it post-zygotic — there is no hybrid at all.",
            ],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "biosl-u4-speciation-q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "A group of finches colonises an island chain. On one island, birds with large beaks thrive where only large hard seeds are available; on a neighbouring island, birds with small beaks thrive where only small soft seeds are available. The islands are separated by 30 km of open sea, and the birds do not fly between them.",
          parts: [
            {
              label: "a",
              prompt: "State the biological species concept.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Explain how the two finch populations could diverge genetically.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Describe two barriers that could maintain reproductive isolation if the birds later came into contact.",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "Evaluate whether this scenario describes speciation, and what additional evidence would be needed.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Biological species concept",
                statement:
                  "A group of populations that can interbreed to produce fertile offspring.",
              },
              {
                kind: "principle",
                name: "Allopatric speciation",
                statement:
                  "Geographical isolation → divergent selection → genetic divergence → reproductive isolation.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "A species is a group of populations whose members can interbreed in nature.",
                working: "interbreeding populations",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Crucially, the offspring must be fertile.",
                working: "fertile offspring",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Different food supplies select for different beak sizes, and no gene flow occurs across 30 km of sea.",
                working: "selection + no gene flow",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Over generations the isolated gene pools accumulate different alleles, so the populations diverge.",
                working: "allele frequencies diverge",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Any two valid barriers, e.g. different courtship displays or mating calls, different breeding seasons, or hybrid sterility.",
                working: "e.g. courtship or season",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Both barriers must prevent gene flow between the populations.",
                working: "prevents interbreeding",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning:
                  "Plausible: isolation plus divergent selection is the classic recipe for allopatric speciation.",
                working: "meets speciation criteria",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning:
                  "But speciation is only confirmed if the populations cannot produce fertile offspring — that requires breeding experiments or genetic evidence of reproductive isolation.",
                working: "need evidence of isolation",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) Groups that interbreed to produce fertile offspring. (b) Different seed supplies select for different beaks; no gene flow across the sea lets the gene pools diverge. (c) E.g. different courtship behaviour or breeding season. (d) Possibly, but only if reproductive isolation can be demonstrated.",
            commonErrors: [
              "Claiming speciation has definitely occurred without evidence of reproductive isolation.",
              "Describing the barrier removal as automatic speciation.",
            ],
            examinerNote:
              "M1 A1 (a); M1 A1 (b); M1 A1 (c); M1 R1 (d). Accept any two valid isolation mechanisms in (c).",
          },
        },
        {
          id: "biosl-u4-speciation-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 1,
          stem: "According to the biological species concept, two populations are the same species only if:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They look identical in appearance" },
              { id: "b", text: "They live in the same habitat" },
              {
                id: "c",
                text: "They can interbreed in nature to produce fertile offspring",
              },
              { id: "d", text: "They have the same chromosome number" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Biological species concept",
                statement:
                  "A species is a group of populations that can interbreed to produce fertile offspring.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The defining criterion is successful interbreeding producing fertile offspring — appearance, habitat and chromosome number alone are insufficient.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer:
              "**(b)** They can interbreed to produce fertile offspring",
            commonErrors: [
              "Using physical similarity or shared habitat as the definition instead of reproductive compatibility.",
            ],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "biosl-u4-speciation-q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A new plant species arises within the same field as its parent species when a hybrid doubles its chromosome number, making it unable to breed with the parent. Which type of speciation is this?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Artificial selection" },
              { id: "b", text: "Convergent evolution" },
              { id: "c", text: "Allopatric speciation" },
              { id: "d", text: "Sympatric speciation through polyploidy" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Sympatric speciation",
                statement:
                  "Speciation without a physical barrier, e.g. through polyploidy in plants.",
              },
            ],
            steps: [
              {
                reasoning:
                  "No physical barrier is involved — the new species arises in the same area as its parent.",
                working: "no geographical barrier",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Chromosome doubling (polyploidy) instantly creates reproductive isolation — a classic sympatric mechanism in plants.",
                working: "polyploidy → instant isolation",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Sympatric speciation through polyploidy",
            commonErrors: [
              "Choosing allopatric — there is no barrier separating the populations.",
            ],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "biosl-u4-speciation-q7",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "In a pond community, 260 of 400 frogs breed in the north shallows and 140 breed in the south shallows; the two groups never interbreed. Calculate the percentage of frogs breeding in each area.",
          response: {
            type: "numeric",
            parts: [
              { label: "North shallows (%)", answer: 65 },
              { label: "South shallows (%)", answer: 35 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Percentage frequency",
                statement:
                  "$\\% = \\frac{\\text{part}}{\\text{total}} \\times 100$",
              },
            ],
            steps: [
              {
                reasoning: "North: $\\frac{260}{400} \\times 100 = 65\\%$.",
                working: "\\frac{260}{400} \\times 100 = 65\\%",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "South: $\\frac{140}{400} \\times 100 = 35\\%$; the two percentages sum to 100%.",
                working: "\\frac{140}{400} \\times 100 = 35\\%",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "North: 65%; South: 35%",
            commonErrors: ["Dividing by 260 or 140 instead of the total 400."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "biosl-u4-speciation-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Cross-fertilisation between two plant varieties produces hybrids: cross A yields 80% viable offspring and cross B yields 35% viable offspring. Calculate the difference in viability between the two crosses.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "Difference in viability (percentage points)",
                answer: 45,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Difference",
                statement:
                  "$\\Delta = \\text{value}_1 - \\text{value}_2$ in percentage points",
              },
            ],
            steps: [
              {
                reasoning: "Subtract the smaller viability from the larger.",
                working: "80 - 35",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "The difference is 45 percentage points.",
                working: "\\Delta = 45\\%",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "45 percentage points",
            commonErrors: [
              "Dividing 80 by 35 instead of subtracting — a difference, not a ratio, is asked for.",
            ],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "biosl-u4-speciation-q9",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 3,
          stem: "A population of 1000 insects is split by a river into a group of 600 and a group of 400. For a particular allele, the frequency is 0.30 in the first group and 0.55 in the second. Calculate the number of copies of the allele in each group.",
          response: {
            type: "numeric",
            parts: [
              { label: "Allele copies in group of 600", answer: 360 },
              { label: "Allele copies in group of 400", answer: 440 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Allele count",
                statement:
                  "$\\text{copies} = 2N \\times f$ where $N$ is the number of diploid individuals and $f$ the allele frequency",
              },
            ],
            steps: [
              {
                reasoning:
                  "Group of 600: each individual carries 2 alleles, so copies $= 2 \\times 600 \\times 0.30$.",
                working: "2 \\times 600 \\times 0.30 = 360",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Group of 400: copies $= 2 \\times 400 \\times 0.55$.",
                working: "2 \\times 400 \\times 0.55 = 440",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The different allele frequencies show the isolated gene pools are diverging.",
                working: "0.30 \\neq 0.55 → divergence",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Group of 600: 360 copies; group of 400: 440 copies",
            commonErrors: [
              "Forgetting the factor of 2 for diploid individuals — 600 × 0.30 = 180 is half the correct answer.",
            ],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "biosl-u4-speciation-q10",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "Which of the following is an example of post-zygotic reproductive isolation?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Two plant species flowering in different seasons",
              },
              {
                id: "b",
                text: "Two cricket species using different mating calls",
              },
              { id: "c", text: "Two frog species breeding in different ponds" },
              {
                id: "d",
                text: "Hybrid offspring of two species that are sterile",
              },
            ],
            dorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Post-zygotic isolation",
                statement:
                  "Reproductive barriers acting after fertilisation, such as hybrid inviability or sterility.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Post-zygotic barriers act after a zygote forms — sterility of hybrids fits this category.",
                working: "after fertilisation",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Options a, b and d all prevent fertilisation from occurring, so they are pre-zygotic barriers.",
                working: "options a,b,d prevent mating",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Only sterile hybrids act after the zygote has formed.",
                working: "hybrid sterility = post-zygotic",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** Sterile hybrid offspring",
            commonErrors: [
              "Confusing pre-zygotic barriers (prevent mating) with post-zygotic barriers (hybrid failure).",
            ],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "biosl-u4-speciation-q11",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "When two fish populations are crossed in an experiment, 25 of 100 hybrid offspring survive to adulthood. Calculate the percentage hybrid viability.",
          response: {
            type: "numeric",
            parts: [{ label: "Hybrid viability (%)", answer: 25 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Percentage viability",
                statement:
                  "$\\% = \\frac{\\text{viable hybrids}}{\\text{total hybrids}} \\times 100$",
              },
            ],
            steps: [
              {
                reasoning:
                  "Set up the ratio of surviving hybrids to all hybrids produced.",
                working: "\\frac{25}{100}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Convert to a percentage.",
                working: "0.25 \\times 100 = 25\\%",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "25%",
            commonErrors: ["Using 75 (the non-survivors) instead of 25."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "biosl-u4-speciation-q12",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Two species of crickets share the same meadow, but each male's song attracts only females of his own species. This is an example of:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Polyploid speciation" },
              { id: "b", text: "Geographical isolation" },
              { id: "c", text: "Post-zygotic reproductive isolation" },
              { id: "d", text: "Behavioural pre-zygotic isolation" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Behavioural isolation",
                statement:
                  "A pre-zygotic barrier where differences in courtship behaviour or signals prevent mating.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Different songs prevent mating entirely — fertilisation never occurs, so this is pre-zygotic.",
                working: "prevents mating",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The barrier is behavioural (mating signals), not geographical or genetic, and the crickets share the same meadow.",
                working: "same habitat, different signals",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Behavioural pre-zygotic isolation",
            commonErrors: [
              "Calling it geographical isolation — the species share the same meadow.",
            ],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "biosl-u4-speciation-q13",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 6,
          stem: "A population of alpine flowers is divided by a newly rising mountain range. Describe, with reference to selection and gene flow, how the two populations could eventually become separate species.",
          parts: [
            {
              label: "a",
              prompt:
                "Explain how the barrier affects gene flow between the two populations.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Explain how the two gene pools could diverge while isolated.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Describe what must happen for the populations to count as separate species.",
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
                  "Geographical barrier → isolated gene pools → divergent selection → reproductive isolation.",
              },
              {
                kind: "definition",
                name: "Gene flow",
                statement:
                  "The movement of alleles between populations through interbreeding.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "The mountain range physically prevents interbreeding, so gene flow between the populations stops.",
                working: "barrier stops gene flow",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Each population is now an independent gene pool — mutations and selection cannot be shared.",
                working: "independent gene pools",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Different environments on each side of the range impose different selection pressures, favouring different alleles.",
                working: "different selection pressures",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Without gene flow, allele frequencies drift apart through selection, mutation and drift until the populations are genetically distinct.",
                working: "allele frequencies diverge",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Reproductive isolation must be established — hybrids must be inviable or sterile, or mating must be prevented.",
                working: "reproductive isolation needed",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Only then do they satisfy the species definition: unable to interbreed to produce fertile offspring.",
                working: "fails fertile-offspring criterion",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) The barrier stops gene flow, isolating the gene pools. (b) Different selection pressures and mutations make the pools diverge. (c) Reproductive isolation must evolve so hybrids are unfit or mating is blocked.",
            commonErrors: [
              "Claiming speciation occurs automatically once the barrier forms — divergence and isolation take time.",
              "Ignoring that gene flow must actually stop for divergence to occur.",
            ],
            examinerNote: "M1 A1 (a); M1 A1 (b); M1 A1 (c).",
          },
        },
        {
          id: "biosl-u4-speciation-q14",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Pre-zygotic reproductive isolation is best described as a barrier that:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Requires a physical barrier such as a mountain range",
              },
              { id: "b", text: "Produces hybrid offspring that are sterile" },
              { id: "c", text: "Only acts after a zygote has formed" },
              {
                id: "d",
                text: "Prevents fertilisation from occurring between the populations",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Pre-zygotic isolation",
                statement:
                  "Barriers acting before fertilisation — different seasons, habitats, calls or behaviours prevent mating.",
              },
            ],
            steps: [
              {
                reasoning:
                  "'Pre-zygotic' means before the zygote forms, so fertilisation must be prevented.",
                working: "pre-zygotic = before fertilisation",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Sterile hybrids are post-zygotic, and no physical barrier is required — behavioural barriers count.",
                working: "not post-zygotic; no barrier needed",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** Prevents fertilisation from occurring",
            commonErrors: ["Reversing pre- and post-zygotic isolation."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "biosl-u4-speciation-q15",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 3,
          stem: "When two diverged plant populations are crossed experimentally, 80% of hybrid embryos fail to develop. Of the hybrids that do survive, half are sterile. Calculate the percentage of all hybrid offspring that are both viable and fertile.",
          response: {
            type: "numeric",
            parts: [{ label: "Viable and fertile hybrids (%)", answer: 10 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Sequential percentages",
                statement:
                  "Apply each survival/fertility filter to the remaining fraction.",
              },
            ],
            steps: [
              {
                reasoning:
                  "80% die as embryos, so 20% survive to the next stage.",
                working: "100 - 80 = 20\\% survive",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Half of survivors are sterile, so only half of the 20% are fertile.",
                working: "20\\% \\times 0.5 = 10\\%",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The percentage of all hybrids that are viable AND fertile is 10%.",
                working: "10\\%",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "10%",
            commonErrors: [
              "Computing 20% − 50% instead of 20% × 50% — the percentages apply to different bases.",
            ],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "biosl-u4-speciation-q16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 7,
          stem: "Two populations of mice on neighbouring islands look similar but never come into contact. A student claims they have speciated. Evaluate what evidence would be needed to support this claim.",
          parts: [
            {
              label: "a",
              prompt: "State the biological species concept.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Explain why divergence in appearance alone does not prove speciation.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Describe experiments or observations that would test whether the populations are reproductively isolated.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Biological species concept",
                statement:
                  "A species is a group that can interbreed to produce fertile offspring.",
              },
              {
                kind: "principle",
                name: "Speciation requires isolation",
                statement:
                  "Speciation is only confirmed when reproductive isolation is demonstrated.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "A species is a group of populations whose members can interbreed in nature.",
                working: "interbreeding populations",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "The offspring must be fertile — sterility means separate species.",
                working: "fertile offspring required",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Similar or different appearance is not the criterion — populations can look alike yet be separate species.",
                working: "appearance ≠ species status",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Since the mice never meet, reproductive compatibility is unknown; divergence could be incomplete.",
                working: "isolation untested",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Breed individuals from the two populations together and assess whether offspring are produced.",
                working: "breeding experiment",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Test the fertility of any hybrids produced — sterile hybrids mean post-zygotic isolation.",
                working: "hybrid fertility test",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Supplement with genetic evidence (e.g. fixed differences between populations) to show the gene pools have diverged.",
                working: "genetic divergence evidence",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Groups that interbreed to produce fertile offspring. (b) Appearance does not define species and the populations never meet, so compatibility is unknown. (c) Cross-breed the populations, test hybrid fertility, and check for genetic divergence.",
            commonErrors: [
              "Accepting the student's claim without noting that reproductive isolation is untested.",
              "Suggesting appearance alone settles the question.",
            ],
            examinerNote:
              "M1 A1 (a); M1 A1 (b); M1 M1 A1 (c). Accept alternative valid tests of reproductive isolation in (c).",
          },
        },
      ],
    },
    {
      id: "biosl-u4-classification-biodiversity",
      title: "Classification, evolutionary trees and biodiversity",
      skill:
        "Use binomial nomenclature and phylogenetic trees to classify organisms and describe biodiversity.",
      lesson: {
        sections: [
          {
            heading: "Naming and hierarchy",
            body: "Linnaeus's **binomial nomenclature** gives each species a two-part Latin name: genus (capitalised) plus species (lowercase), e.g. *Homo sapiens*. Organisms are grouped into a hierarchy — domain, kingdom, phylum, class, order, family, genus, species — where each level contains more diverse organisms than the one below. Modern classification is **evolutionary**: groups reflect common ancestry.",
          },
          {
            heading: "Reading evolutionary trees",
            body: "A **phylogenetic tree** (cladogram) shows branching points where lineages diverged. Species that share a more recent common ancestor sit closer together on the tree. The position of the branches, not the order of the tips, carries the information — rotating branches around a node changes nothing.",
          },
          {
            heading: "Biodiversity",
            body: "**Biodiversity** includes genetic diversity within species, species diversity (often measured simply as **species richness**, the number of species present) and ecosystem diversity. High biodiversity generally indicates a healthy, resilient ecosystem; low biodiversity makes ecosystems vulnerable to change and disease.",
          },
        ],
        keyFormulas: [
          {
            name: "Binomial name",
            statement:
              "Genus species — e.g. Homo sapiens; genus capitalised, species lowercase, both italicised",
          },
          {
            name: "Taxonomic hierarchy",
            statement:
              "Domain → kingdom → phylum → class → order → family → genus → species",
          },
          {
            name: "Species richness",
            statement:
              "The number of different species in an area — a simple measure of biodiversity",
          },
        ],
        workedExample: {
          problem:
            "On a phylogenetic tree, species P and Q share a branch point more recently than either shares with species R. Which pair is most closely related?",
          solution:
            "P and Q — a more recent common ancestor means a closer evolutionary relationship. R branched off earlier, so it is more distantly related to both.",
        },
      },
      questions: [
        {
          id: "biosl-u4-classification-biodiversity-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 1,
          stem: "Which of the following is written correctly in binomial nomenclature?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Homo sapiens" },
              { id: "b", text: "HOMO SAPIENS" },
              { id: "c", text: "homo sapiens" },
              { id: "d", text: "Homo Sapiens" },
            ],
            aorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Binomial nomenclature",
                statement:
                  "Genus capitalised, species lowercase, both italicised or underlined.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Only option (c) capitalises the genus and lowercases the species correctly.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(c)** Homo sapiens",
            commonErrors: ["Capitalising both words or lowercasing both."],
            examinerNote: "B1 for (c).",
          },
        },
        {
          id: "biosl-u4-classification-biodiversity-q2",
          difficulty: "core",
          paper: "2",
          totalMarks: 2,
          stem: "On an evolutionary tree, species A and B diverged from a common ancestor 10 million years ago, while species C diverged from their common ancestor 40 million years ago. Which statement is correct?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "A and C are most closely related because C is listed last",
              },
              {
                id: "b",
                text: "A and B are most closely related because they share the more recent common ancestor",
              },
              { id: "c", text: "All three species are equally related" },
              {
                id: "d",
                text: "C is most closely related to A because they are furthest apart on the diagram",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Phylogenetic tree",
                statement:
                  "Branching diagram where more recent common ancestors indicate closer relationships.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A and B share an ancestor only 10 million years old; C shares an ancestor 40 million years old.",
                working: "10 Ma vs 40 Ma",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "A more recent common ancestor means a closer evolutionary relationship.",
                working: "recent ancestor → close relation",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** A and B are most closely related",
            commonErrors: [
              "Reading the horizontal position of tips rather than the branch points.",
            ],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "biosl-u4-classification-biodiversity-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "A nature reserve contains 140 bird species, 60 mammal species and 25 reptile species. A second reserve of the same size contains 60 bird species, 30 mammal species and 10 reptile species. Which reserve has greater biodiversity, and why?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "The first reserve, because it has greater species richness (225 vs 100 species)",
              },
              {
                id: "b",
                text: "Cannot be determined without counting individuals",
              },
              {
                id: "c",
                text: "The second reserve, because it has fewer competitors",
              },
              {
                id: "d",
                text: "They are equal because they have the same area",
              },
            ],
            aorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Species richness",
                statement:
                  "The number of different species present — a basic measure of biodiversity.",
              },
            ],
            steps: [
              {
                reasoning: "Count total species in each reserve.",
                working: "140+60+25 = 225; 60+30+10 = 100",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Greater species richness means greater biodiversity, assuming similar sampling effort.",
                working: "225 > 100",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Area alone does not determine biodiversity — the number and variety of species does.",
                working: "species count matters",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "**(c)** First reserve — higher species richness",
            commonErrors: ["Assuming equal area means equal biodiversity."],
            examinerNote: "M1 A1 R1.",
          },
        },
        {
          id: "biosl-u4-classification-biodiversity-q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "A phylogenetic tree of six mammal species is described as follows. Species W and X share the most recent common ancestor. Species Y branches next, sharing an ancestor with the W+X pair. Species Z branches before that, and species V and U are the earliest-diverging pair. A museum labels the species in alphabetical order W, X, Y, Z, V, U along the top of the tree.",
          parts: [
            {
              label: "a",
              prompt:
                "State which pair of species shares the most recent common ancestor.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Explain what a branch point on the tree represents.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "A student claims species U and V are the most closely related because their names are last on the diagram. Evaluate this claim.",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "Explain why modern classification is based on evolutionary relationships rather than physical appearance alone.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Phylogenetic tree",
                statement:
                  "A branching diagram in which each branch point is a common ancestor.",
              },
              {
                kind: "principle",
                name: "Evolutionary classification",
                statement:
                  "Groups are defined by common ancestry, not just shared appearance.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Read the description: W and X share the most recent common ancestor.",
                working: "W and X",
                marks: 1,
                markCode: "B",
              },
              {
                part: "a",
                reasoning:
                  "Correctly identified from the branching pattern, not alphabetical order.",
                working: "branch points not labels",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "A branch point represents the common ancestor from which the descendant lineages diverged.",
                working: "branch point = common ancestor",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Species sharing a more recent branch point are more closely related.",
                working: "recent ancestor → close relation",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "The claim confuses position on the diagram with relatedness; branch points, not tip order, determine relationships.",
                working: "tip order is arbitrary",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "In fact V and U are the earliest-diverging pair, so they are among the least closely related to the others.",
                working: "earliest divergence",
                marks: 1,
                markCode: "R",
              },
              {
                part: "d",
                reasoning:
                  "Similar appearance can arise by convergent evolution, so anatomy alone may mislead; common ancestry is the true basis of classification.",
                working: "convergence misleads",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning:
                  "DNA and other evidence reveal true relatedness and produce a consistent, predictive classification.",
                working: "molecular evidence",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) W and X. (b) A branch point is a common ancestor; closer branch points mean closer relationships. (c) Incorrect — relatedness is set by branch points, not tip order; V and U diverged earliest. (d) Appearance can converge misleadingly; evolutionary relationships give a true, consistent classification.",
            commonErrors: [
              "Reading tip order instead of branch points.",
              "Justifying classification by looks rather than ancestry.",
            ],
            examinerNote: "B1 A1 (a); M1 A1 (b); M1 R1 (c); M1 A1 (d).",
          },
        },
        {
          id: "biosl-u4-classification-biodiversity-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 1,
          stem: "In the binomial name Felis catus, which part is the genus?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Neither part" },
              { id: "b", text: "catus" },
              { id: "c", text: "Felis" },
              { id: "d", text: "Both parts together" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Binomial nomenclature",
                statement:
                  "The first word is the genus (capitalised), the second is the species (lowercase).",
              },
            ],
            steps: [
              {
                reasoning:
                  "The genus is the first word of the binomial name — Felis.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** Felis",
            commonErrors: [
              "Choosing catus — that is the species name, not the genus.",
            ],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "biosl-u4-classification-biodiversity-q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "In the taxonomic hierarchy (domain → kingdom → phylum → class → order → family → genus → species), which level contains the greatest diversity of organisms?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Kingdom" },
              { id: "b", text: "Species" },
              { id: "c", text: "Family" },
              { id: "d", text: "Genus" },
            ],
            aorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Taxonomic hierarchy",
                statement:
                  "Each higher level contains more diverse organisms than the levels below it.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Levels nearer the top of the hierarchy group more organisms — kingdom sits above genus, family and species.",
                working: "higher level = more diversity",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Species is the lowest and most exclusive level, containing the least diversity.",
                working: "species = least diverse",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** Kingdom",
            commonErrors: [
              "Choosing species — it is the most specific, least diverse level.",
            ],
            examinerNote: "M1 A1. Accept 'domain' as also correct if offered.",
          },
        },
        {
          id: "biosl-u4-classification-biodiversity-q7",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A biodiversity survey of a rainforest plot records 12 families, 45 genera and 120 different species. What is the species richness of the plot?",
          response: {
            type: "numeric",
            parts: [{ label: "Species richness", answer: 120 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Species richness",
                statement:
                  "The number of different species present in an area.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Species richness counts species only — families and genera are higher taxonomic levels.",
                working: "richness = species count",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "The plot contains 120 species.",
                working: "120 species",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "120 species",
            commonErrors: [
              "Adding families, genera and species together — richness uses species only.",
            ],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "biosl-u4-classification-biodiversity-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Reserve A contains 150 species and reserve B contains 100 species, and both reserves cover the same area. Calculate the percentage by which reserve A's species richness exceeds reserve B's.",
          response: {
            type: "numeric",
            parts: [{ label: "Percentage excess", answer: 50 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Percentage difference",
                statement:
                  "$\\% = \\frac{\\text{difference}}{\\text{reference value}} \\times 100$; the reference is reserve B",
              },
            ],
            steps: [
              {
                reasoning:
                  "Difference = $150 - 100 = 50$ species; express relative to reserve B.",
                working: "\\frac{50}{100}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Convert to a percentage.",
                working: "0.5 \\times 100 = 50\\%",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "50%",
            commonErrors: [
              "Dividing by 150 (reserve A) instead of 100 (reserve B) — 'exceeds B' makes B the reference.",
            ],
            examinerNote: "M1 A1. Accept 50% or 0.5 expressed correctly.",
          },
        },
        {
          id: "biosl-u4-classification-biodiversity-q9",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 3,
          stem: "Using quadrats, a student counts the number of plant species per 1 m² quadrat. At site P the counts are 18, 22, 20, 24 and 16; at site Q they are 10, 8, 12, 9 and 11. Calculate the mean species richness per quadrat at each site.",
          response: {
            type: "numeric",
            parts: [
              { label: "Site P mean richness", answer: 20 },
              { label: "Site Q mean richness", answer: 10 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Mean",
                statement: "$\\bar{x} = \\frac{\\sum x}{n}$",
              },
            ],
            steps: [
              {
                reasoning:
                  "Site P: $\\frac{18+22+20+24+16}{5} = \\frac{100}{5} = 20$ species per quadrat.",
                working: "\\frac{100}{5} = 20",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Site Q: $\\frac{10+8+12+9+11}{5} = \\frac{50}{5} = 10$ species per quadrat.",
                working: "\\frac{50}{5} = 10",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Site P has twice the species richness of site Q per unit area, suggesting greater biodiversity.",
                working: "20 vs 10 per m²",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Site P: 20 species per m²; site Q: 10 species per m²",
            commonErrors: [
              "Comparing totals instead of means — both sites have 5 quadrats so it happens to give the same ranking here, but means are the correct statistic.",
            ],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "biosl-u4-classification-biodiversity-q10",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 3,
          stem: "A student redraws a phylogenetic tree with the order of species at the branch tips rearranged, but keeps the same branch points and branch lengths. What is the effect on the tree's meaning?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "The relationships are unchanged, because branch points — not tip order — determine relatedness",
              },
              {
                id: "b",
                text: "The tree becomes invalid and cannot be interpreted",
              },
              {
                id: "c",
                text: "The most recent common ancestor of the species changes",
              },
              {
                id: "d",
                text: "All relationships on the tree change completely",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Reading cladograms",
                statement:
                  "The information in a phylogenetic tree lies in the branch points, not the left-to-right order of the tips.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Branch points represent common ancestors; rearranging tips without moving branch points changes nothing.",
                working: "branch points carry the information",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Rotating or reordering tips around a node is a standard way to redraw the same tree.",
                working: "tip order is arbitrary",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Relationships and common ancestors are therefore unchanged.",
                working: "same tree, different layout",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(b)** Relationships are unchanged — branch points determine relatedness",
            commonErrors: [
              "Reading horizontal position of tips as a measure of relatedness.",
            ],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "biosl-u4-classification-biodiversity-q11",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A 100 m² grassland plot contains 600 grass plants, 300 herb plants and 100 shrub plants. Calculate the percentage of plants that are grasses.",
          response: {
            type: "numeric",
            parts: [{ label: "Percentage grasses", answer: 60 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Percentage frequency",
                statement:
                  "$\\% = \\frac{\\text{part}}{\\text{total}} \\times 100$",
              },
            ],
            steps: [
              {
                reasoning:
                  "Total plants = $600 + 300 + 100 = 1000$; grasses = 600.",
                working: "\\frac{600}{1000}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Convert to a percentage.",
                working: "0.6 \\times 100 = 60\\%",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "60%",
            commonErrors: [
              "Using 600 as the total instead of summing all three groups.",
            ],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "biosl-u4-classification-biodiversity-q12",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 1,
          stem: "Biodiversity is measured at which three levels?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Genetic, species and ecosystem diversity" },
              { id: "b", text: "Primary, secondary and climax diversity" },
              {
                id: "c",
                text: "Birth rate, death rate and migration diversity",
              },
              { id: "d", text: "Producer, consumer and decomposer diversity" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Biodiversity",
                statement:
                  "The variety of life measured at genetic, species and ecosystem levels.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The three recognised levels are genetic diversity within species, species diversity between species, and ecosystem diversity across habitats.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** Genetic, species and ecosystem diversity",
            commonErrors: [
              "Confusing trophic levels or succession stages with levels of biodiversity.",
            ],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "biosl-u4-classification-biodiversity-q13",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 6,
          stem: "Two nature reserves each cover 500 hectares. Reserve X has 220 species, including 15 found nowhere else; reserve Y has 140 species but much larger populations of each species. Evaluate which reserve has greater biodiversity and why.",
          parts: [
            {
              label: "a",
              prompt: "Define biodiversity and state how it can be measured.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Compare the two reserves using species richness and endemism.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Evaluate the argument that population size matters more than species count for biodiversity.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Biodiversity",
                statement:
                  "The variety of life at genetic, species and ecosystem levels; often measured by species richness.",
              },
              {
                kind: "definition",
                name: "Endemic species",
                statement: "Species found naturally only in one place.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Biodiversity is the variety of life at genetic, species and ecosystem levels.",
                working: "three levels of diversity",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Species richness — the number of species — is the simplest measure.",
                working: "species richness",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Reserve X has higher species richness (220 vs 140) and more endemic species (15).",
                working: "220 > 140; 15 endemics",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Both reserves have equal area, so the difference in species count is not explained by size.",
                working: "equal area, different richness",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Larger populations can buffer species against extinction and maintain genetic diversity — a valid point.",
                working: "population size buffers extinction",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "However biodiversity is defined by variety, not abundance; a reserve with more species, especially endemics, generally has greater biodiversity overall.",
                working: "variety > abundance",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Variety of life at genetic, species and ecosystem levels; measured by species richness. (b) Reserve X has greater richness (220 vs 140) and 15 endemics; equal area makes the comparison fair. (c) Population size aids persistence but biodiversity is about variety — Reserve X is more biodiverse.",
            commonErrors: [
              "Declaring reserve Y more biodiverse because individuals are more numerous — abundance is not diversity.",
              "Ignoring the endemic species when comparing.",
            ],
            examinerNote:
              "M1 A1 (a); M1 A1 (b); M1 A1 (c). Accept a balanced judgement if justified.",
          },
        },
        {
          id: "biosl-u4-classification-biodiversity-q14",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "Two insect species look almost identical, but DNA analysis shows they diverged millions of years ago and they cannot interbreed. How should they be classified?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "As separate species, because modern classification reflects evolutionary relationships",
              },
              { id: "b", text: "As the same species, because they look alike" },
              {
                id: "c",
                text: "They cannot be classified without more information",
              },
              {
                id: "d",
                text: "As the same genus only, regardless of species status",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Evolutionary classification",
                statement:
                  "Modern classification groups organisms by common ancestry, using molecular evidence where available.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Appearance can mislead — convergent evolution produces look-alikes; DNA and breeding tests reveal true relationships.",
                working: "appearance can converge",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Deep divergence plus inability to interbreed means they are separate species under both the biological and evolutionary views.",
                working: "diverged + cannot interbreed",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(b)** Separate species, based on evolutionary relationships",
            commonErrors: [
              "Classifying by looks alone — the whole point of modern classification is ancestry.",
            ],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "biosl-u4-classification-biodiversity-q15",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 3,
          stem: "In a survey of a tropical forest, one genus accounts for 30 species, a second genus for 12 species and a third for 8 species; these are the only genera recorded. Calculate the percentage of all recorded species belonging to the largest genus.",
          response: {
            type: "numeric",
            parts: [{ label: "Percentage in largest genus", answer: 60 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Percentage frequency",
                statement:
                  "$\\% = \\frac{\\text{part}}{\\text{total}} \\times 100$",
              },
            ],
            steps: [
              {
                reasoning: "Total species = $30 + 12 + 8 = 50$.",
                working: "30 + 12 + 8 = 50",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The largest genus contributes $\\frac{30}{50} = 0.6$ of the species.",
                working: "\\frac{30}{50}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Convert to a percentage.",
                working: "0.6 \\times 100 = 60\\%",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "60%",
            commonErrors: [
              "Comparing 30 to 12+8 = 20 instead of the total 50.",
            ],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "biosl-u4-classification-biodiversity-q16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 7,
          stem: "Explain the three levels of biodiversity, giving a named example of each, and explain why loss of biodiversity at one level can affect the others.",
          parts: [
            {
              label: "a",
              prompt: "Define and exemplify genetic diversity.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Define and exemplify species diversity.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Define and exemplify ecosystem diversity.",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "Explain how loss at one level can affect the other levels.",
              marks: 1,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Genetic diversity",
                statement:
                  "The variety of alleles within a species — e.g. different fur colours in a mouse population.",
              },
              {
                kind: "definition",
                name: "Species diversity",
                statement:
                  "The number and variety of species in an area — often measured by species richness.",
              },
              {
                kind: "definition",
                name: "Ecosystem diversity",
                statement:
                  "The variety of habitats and communities in a region — e.g. rainforest, wetland and grassland.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Genetic diversity = variety of alleles within a species, e.g. different fur colours or blood groups.",
                working: "allele variety within species",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Correct named example given.",
                working: "e.g. fur colour variants",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Species diversity = number and variety of species in an area, e.g. species richness of a reserve.",
                working: "species variety in area",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Correct named example given.",
                working: "e.g. 225 species in a reserve",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Ecosystem diversity = variety of habitats/communities in a region, e.g. forest, lake and meadow.",
                working: "habitat variety in region",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Correct named example given.",
                working: "e.g. rainforest + wetland + grassland",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning:
                  "Losing species reduces genetic diversity within remaining species and can collapse ecosystems; losing a habitat removes all its species at once — the levels are interdependent.",
                working: "levels are interdependent",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Allele variety within a species, e.g. fur colour variants. (b) Variety of species in an area, e.g. species richness. (c) Variety of habitats in a region, e.g. forest + wetland + grassland. (d) Losses cascade: fewer species → less genetic variety; lost habitat → all its species gone.",
            commonErrors: [
              "Giving only definitions without examples.",
              "Treating the three levels as unrelated rather than interdependent.",
            ],
            examinerNote:
              "M1 A1 per part (a)-(c); A1 for (d). Accept any valid example for each level.",
          },
        },
      ],
    },
  ],
};
