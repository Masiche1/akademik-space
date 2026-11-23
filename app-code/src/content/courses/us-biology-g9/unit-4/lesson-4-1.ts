import type { Lesson } from "../../../types.ts";

export const lesson41: Lesson = {
  id: "bio9-u4-lesson-4-1",
  code: "4-1",
  title: "Evidence for Evolution",
  goal: "I CAN use fossils, comparative anatomy, DNA and protein evidence and cladograms to support common ancestry, and explain how natural selection changes populations over time.",
  standards: [
    "HS-LS4-1",
    "HS-LS4-2",
    "HS-LS4-3",
    "SEP: Engaging in Argument from Evidence",
    "CCC: Patterns",
  ],
  vocabulary: [
    {
      term: "Common ancestor",
      definition:
        "A species from which two or more different species have descended.",
    },
    {
      term: "Homologous structures",
      definition:
        "Body parts in different species that share the same underlying structure because they were inherited from a common ancestor, even if they now do different jobs.",
    },
    {
      term: "Cladogram",
      definition:
        "A branching diagram that shows evolutionary relationships based on shared derived characters.",
    },
    {
      term: "Natural selection",
      definition:
        "The process in which individuals with heritable traits that suit their environment survive and reproduce more than others, so those traits become more common.",
    },
    {
      term: "Heritable variation",
      definition:
        "Differences between individuals in a population that are caused by alleles and can be passed on to offspring.",
    },
    {
      term: "Fitness",
      definition:
        "How many fertile offspring an individual leaves in the next generation compared with others in the population.",
    },
    {
      term: "Fossil record",
      definition:
        "The ordered collection of preserved remains and traces of organisms found in rock layers.",
    },
  ],
  concepts: [
    {
      id: "bio9-u4-common-ancestry",
      title: "Evidence for common ancestry",
      skill:
        "Use fossils, comparative anatomy, DNA and protein sequences, and cladograms to infer evolutionary relationships.",
      lesson: {
        sections: [
          {
            heading: "Four lines of evidence",
            body: "Scientists test the claim that all life shares common ancestry with several independent lines of evidence that point to the same conclusion.\n\n- **Fossils**: rock layers show organisms in order of age. Transitional fossils such as *Tiktaalik* (fish with a neck and limb-like fins) show intermediate features between major groups.\n- **Comparative anatomy**: **homologous structures** have the same bone pattern but different functions. The forelimbs of a human, bat and whale all have one upper-arm bone, two lower-arm bones and finger bones, because they inherited the pattern from a common ancestor. **Analogous structures** (such as bird and insect wings) do the same job but evolved separately and do not show close ancestry. **Vestigial structures**, such as the tiny pelvis bones of whales, are reduced remnants of structures that were useful in ancestors.\n- **Embryology**: vertebrate embryos look very similar early in development, including pharyngeal pouches.\n- **Molecular evidence**: all living things use DNA and nearly the same genetic code.",
          },
          {
            heading: "Comparing DNA and protein sequences",
            body: "Mutations accumulate in DNA over time at a roughly steady rate. When two species split from a common ancestor, their sequences start identical and then **gradually differ**. Therefore:\n\n- **Fewer** differences in DNA bases or amino acids means the species share a **more recent** common ancestor.\n- **More** differences means the split happened **longer ago**.\n\nThis lets scientists compare species that look very different, and the results usually agree with the fossil and anatomical evidence.",
          },
          {
            heading: "Reading a cladogram",
            body: "A **cladogram** is a branching tree. Each branch point (node) represents a **most recent common ancestor**. Characters that appear for the first time in a group are **shared derived characters** and are used to define branches.\n\nTo judge how closely related two species are, find the node where their lineages join. The **more recent** that node, the more closely related the species. Position at the tip of the tree does not mean 'more advanced', and one living species does not evolve from another living species: they share an ancestor.",
          },
        ],
        keyFormulas: [
          {
            name: "Molecular clock idea",
            statement:
              "Fewer sequence differences $\\Rightarrow$ more recent common ancestor",
          },
          {
            name: "Homologous structures",
            statement:
              "Same structure, inherited from a common ancestor, possibly different function",
          },
          {
            name: "Cladogram node",
            statement:
              "A branch point = most recent common ancestor of the groups above it",
          },
        ],
        workedExample: {
          problem:
            "A protein has 0 amino acid differences between humans and chimpanzees, 12 between humans and cows, and 25 between humans and frogs. Rank the species by how closely related they are to humans, and explain.",
          solution:
            "Fewer differences means a more recent common ancestor, so the ranking from most to least closely related is chimpanzee (0), cow (12), frog (25). Mutations build up in each lineage after the split, so the frog lineage, with the most differences, split from the human lineage longest ago.",
        },
      },
      questions: [
        {
          id: "bio9-u4-common-ancestry-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which observation provides the strongest evidence that two species share a recent common ancestor?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Their DNA sequences are very similar." },
              { id: "b", text: "They eat the same food." },
              { id: "c", text: "They live in the same habitat." },
              { id: "d", text: "They are about the same body size." },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Molecular evidence",
                statement:
                  "The more similar the DNA sequences of two species, the more recently they shared a common ancestor.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Mutations accumulate after a split, so highly similar DNA indicates a recent split. Habitat, size and diet can be similar in unrelated species through convergent evolution.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** Their DNA sequences are very similar.",
            commonErrors: [
              "Choosing a shared habitat or similar body size, which unrelated species can also share.",
            ],
            examinerNote: "B1 for DNA sequence similarity.",
          },
        },
        {
          id: "bio9-u4-common-ancestry-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "The forelimbs of humans, bats and whales are used for grasping, flying and swimming. All three contain the same arrangement of bones.\n\nDescribe how this evidence supports common ancestry.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Homologous structures",
                statement:
                  "Homologous structures share the same underlying structure because they were inherited from a common ancestor.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The limbs have the same basic bone pattern (one upper bone, two lower bones, wrist and finger bones) despite different functions.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "The best explanation is that these species inherited the pattern from a common ancestor (homologous structures).",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Over time natural selection modified the limbs for different functions in different environments (divergent evolution).",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer:
              "Same bone arrangement in all three, inherited from a common ancestor, modified by natural selection for different uses.",
            commonErrors: [
              "Saying the limbs are similar because they do the same job; they do different jobs.",
              "Saying one species evolved from another living species.",
            ],
            examinerNote:
              "B1 same structure / bone pattern. B1 inherited from a common ancestor. B1 modified for different functions by selection. Allow 'homologous'. Reject 'whales evolved from bats'.",
          },
        },
        {
          id: "bio9-u4-common-ancestry-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "The data show the number of amino acid differences in the protein cytochrome c compared with the human sequence.\n\n- Chimpanzee: 0\n- Rhesus monkey: 1\n- Dog: 10\n- Chicken: 13\n\nUse the data to explain which species are most closely related to humans and what the data show about the dog and the chicken.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Molecular clock",
                statement:
                  "Differences in sequences accumulate over time, so fewer differences mean a more recent common ancestor.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The chimpanzee (0 differences) and the rhesus monkey (1 difference) are most closely related to humans.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Fewer differences means fewer mutations have accumulated since the lineages split.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Therefore these species share a more recent common ancestor with humans.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "The dog (10) is more closely related to humans than the chicken (13), because it has fewer differences, so its lineage split more recently.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Chimpanzee and rhesus monkey are closest; fewer differences means fewer accumulated mutations and a more recent common ancestor; dog is more closely related than chicken (10 < 13).",
            commonErrors: [
              "Saying the dog and chicken are 'not related'; all share an ancestor, only further back.",
              "Reversing the relationship: more differences means more distant, not closer.",
            ],
            examinerNote:
              "B1 chimpanzee and monkey identified. B1 fewer differences = fewer mutations (oe). B1 more recent common ancestor. R1 dog closer than chicken with data support. Allow 'less time since they diverged'.",
          },
        },
        {
          id: "bio9-u4-common-ancestry-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A cladogram of five animals shows the following branching pattern.\n\n- The lamprey branches off first and has no jaws.\n- All the other animals have jaws. The shark branches off next.\n- All the remaining animals have four limbs. The salamander branches off next.\n- The lizard and the mouse share an amniotic egg. They then split, and only the mouse lineage evolves hair.",
          parts: [
            {
              label: "a",
              prompt: "State which animal's lineage branched off first.",
              marks: 1,
            },
            {
              label: "b",
              prompt:
                "Identify a shared derived character found in the lizard and the mouse but not in the salamander, and explain why the cladogram places it where it does.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Decide whether the mouse is more closely related to the lizard or to the shark. Justify your answer.",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "A student claims that the cladogram shows the mouse evolved from the lizard. Evaluate this claim.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Cladogram",
                statement:
                  "A cladogram shows branching relationships. Each node is the most recent common ancestor of the groups above it.",
              },
              {
                kind: "principle",
                name: "Shared derived characters",
                statement:
                  "A trait that first appears in a common ancestor is shared by all its descendants.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "The lamprey is the first branch, so its lineage separated earliest.",
                marks: 1,
                markCode: "B",
              },
              {
                part: "b",
                reasoning:
                  "The amniotic egg is shared by the lizard and the mouse but absent in the salamander.",
                marks: 1,
                markCode: "B",
              },
              {
                part: "b",
                reasoning:
                  "It appeared once in their most recent common ancestor and was inherited by both lineages.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning: "The mouse is more closely related to the lizard.",
                marks: 1,
                markCode: "B",
              },
              {
                part: "c",
                reasoning:
                  "Their most recent common ancestor (node) is more recent than the node shared with the shark.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "d",
                reasoning:
                  "The claim is incorrect: the lizard and the mouse are on separate branches from a node.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "d",
                reasoning:
                  "They share a common ancestor that was neither a modern lizard nor a modern mouse.",
                marks: 1,
                markCode: "B",
              },
              {
                part: "d",
                reasoning:
                  "Both lineages have evolved for the same amount of time since the split, so neither is the ancestor of the other.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) Lamprey (b) Amniotic egg, inherited from their common ancestor (c) Lizard, since their shared node is more recent (d) Claim is wrong; they split from a common ancestor and both lineages have continued evolving.",
            commonErrors: [
              "Reading the cladogram as a ladder of progress.",
              "Saying the mouse descended from the lizard because they are next to each other.",
            ],
            examinerNote:
              "(b) Reject hair, which appears only in the mouse lineage. (d) Allow 'they are sister groups' oe.",
          },
        },
      ],
    },
    {
      id: "bio9-u4-natural-selection",
      title: "Natural selection",
      skill:
        "Explain how variation, heritability, competition and differential survival change a population over generations.",
      lesson: {
        sections: [
          {
            heading: "Four conditions",
            body: "Natural selection occurs when four things are true:\n\n1. **Variation**: individuals in a population differ in traits.\n2. **Heritability**: at least some of that variation is controlled by alleles passed to offspring.\n3. **Overproduction and competition**: more offspring are born than the environment can support, so individuals compete for food, mates and space.\n4. **Differential survival and reproduction**: individuals with traits that suit the environment are more likely to survive and leave more offspring.\n\nThe alleles that help survival become **more frequent** in the next generation. Variation originates from **mutations**, and sexual reproduction shuffles alleles into new combinations.",
          },
          {
            heading: "Common misconceptions",
            body: "- Individuals do **not** change their genes because they 'need' to. Selection acts on variation that already exists.\n- Natural selection acts on **individuals**, but it is **populations** that evolve.\n- Traits acquired during life, such as larger muscles from exercise, are not inherited.\n- 'Fitness' means reproductive success, not strength.\n- Selection depends on the environment: a trait that helps in one environment may harm in another. When the environment changes, the favored trait can change too.",
          },
          {
            heading: "Interpreting evidence",
            body: "Strong evidence for natural selection includes measured changes in trait frequency along with a clear environmental cause. In Galapagos finches, a drought left mostly large, hard seeds. Birds with deeper beaks could crack them and survived at higher rates. Their offspring also had deeper beaks, because beak depth is heritable, so the **average beak depth rose** in the next generation.\n\nFor percent calculations, use $\\text{percent survival}=\\dfrac{\\text{number surviving}}{\\text{starting number}}\\times100$ and $\\text{percent change}=\\dfrac{\\text{new}-\\text{old}}{\\text{old}}\\times100$.",
          },
        ],
        keyFormulas: [
          {
            name: "Natural selection",
            statement:
              "Heritable variation + competition + differential survival $\\Rightarrow$ change in allele frequencies",
          },
          {
            name: "Percent survival",
            statement:
              "$\\dfrac{\\text{number surviving}}{\\text{starting number}}\\times100$",
          },
          {
            name: "Percent change",
            statement:
              "$\\dfrac{\\text{new}-\\text{old}}{\\text{old}}\\times100$",
          },
        ],
        workedExample: {
          problem:
            "A population of 200 mice has 50 light mice and 150 dark mice on dark soil. Hawks eat 40 light mice and 30 dark mice. What percent of the survivors are light?",
          solution:
            "Light survivors: $50-40=10$. Dark survivors: $150-30=120$. Total survivors: $130$. Percent light: $\\dfrac{10}{130}\\times100\\approx7.7\\%$, down from $\\dfrac{50}{200}\\times100=25\\%$. Dark mice are better camouflaged, so they survive more and pass on their alleles.",
        },
      },
      questions: [
        {
          id: "bio9-u4-natural-selection-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which statement is required for natural selection to change a population?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Differences between individuals are caused only by the environment.",
              },
              {
                id: "b",
                text: "Some differences between individuals are heritable and affect survival or reproduction.",
              },
              {
                id: "c",
                text: "Individuals change their traits to meet the needs of the environment.",
              },
              { id: "d", text: "All offspring survive to adulthood." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Conditions for natural selection",
                statement:
                  "Heritable variation that affects survival or reproduction is needed.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Selection needs variation that is inherited and that affects fitness. Traits caused only by the environment are not passed on.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer:
              "**(b)** Some differences between individuals are heritable and affect survival or reproduction.",
            commonErrors: [
              "Choosing (a), the 'need' misconception.",
              "Choosing (b): natural selection requires that not all offspring survive.",
            ],
            examinerNote: "B1 for heritable variation affecting survival.",
          },
        },
        {
          id: "bio9-u4-natural-selection-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Before industrial pollution, most peppered moths in an English wood were pale and a few were dark. Soot then darkened the tree bark, and birds ate more of the pale moths. Years later most moths were dark.\n\nExplain the change using natural selection.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Natural selection",
                statement:
                  "Individuals with favorable heritable traits survive and reproduce more, increasing the frequency of those alleles.",
              },
            ],
            steps: [
              {
                reasoning:
                  "There was variation in wing color, controlled by alleles.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "On dark bark, dark moths were better camouflaged, so birds ate fewer of them and they survived and reproduced more.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "They passed on the allele for dark color, so its frequency increased over generations.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer:
              "Variation in color existed; dark moths were camouflaged, survived and reproduced more; the dark allele became more frequent.",
            commonErrors: [
              "Saying the moths changed color because they needed camouflage.",
              "Omitting the inheritance of the allele.",
            ],
            examinerNote:
              "B1 variation / alleles. B1 camouflage leading to higher survival and reproduction. B1 allele passed on, frequency rises. Reject 'the moths adapted themselves'.",
          },
        },
        {
          id: "bio9-u4-natural-selection-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A population of 400 beetles has 300 green beetles and 100 brown beetles on a brown forest floor. After one year of bird predation, 120 green beetles and 80 brown beetles are alive.\n\nCalculate the percent survival of green beetles, the percent survival of brown beetles, and the percent of the surviving beetles that are brown.",
          response: {
            type: "numeric",
            parts: [
              { label: "Green beetles surviving", answer: 40, unit: "%" },
              { label: "Brown beetles surviving", answer: 80, unit: "%" },
              { label: "Brown share of survivors", answer: 40, unit: "%" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Percent survival",
                statement:
                  "$\\dfrac{\\text{number surviving}}{\\text{starting number}}\\times100$",
              },
            ],
            steps: [
              {
                reasoning:
                  "Divide survivors by starting number for each color.",
                working:
                  "\\frac{120}{300}\\times100,\\ \\frac{80}{100}\\times100",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate both survival percentages.",
                working: "40\\%\\text{ (green)},\\ 80\\%\\text{ (brown)}",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Total survivors are 200. Divide the brown survivors by this total.",
                working: "\\frac{80}{120+80}\\times100",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Evaluate. Brown beetles rose from 25% to 40% of the population.",
                working: "40\\%",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Green 40%, brown 80%, brown beetles are 40% of the survivors (up from 25%).",
            commonErrors: [
              "Dividing 80 by 400 for the brown share of survivors, instead of by the 200 survivors.",
              "Subtracting rather than dividing.",
            ],
            examinerNote:
              "M1 for either survival division. A1 for both 40 and 80. M1 for 80 / 200 (oe). A1 for 40. Allow ecf from incorrect survivors total.",
          },
        },
        {
          id: "bio9-u4-natural-selection-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "During a long drought on a Galapagos island, small soft seeds became scarce and large hard seeds remained. Researchers measured beak depth in a medium ground finch population. The mean beak depth was 9.2 mm before the drought and 9.8 mm in the generation that hatched after the drought.",
          parts: [
            {
              label: "a",
              prompt: "Calculate the change in mean beak depth in mm.",
              marks: 1,
            },
            {
              label: "b",
              prompt:
                "Calculate the percent increase in mean beak depth. Give your answer to 2 significant figures.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Explain how natural selection produced this change.",
              marks: 3,
            },
            {
              label: "d",
              prompt:
                "A student says the finches grew deeper beaks during their lives because they needed to crack seeds. Describe the evidence that would show the change is genetic and heritable.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Percent change",
                statement:
                  "$\\dfrac{\\text{new}-\\text{old}}{\\text{old}}\\times100$",
              },
              {
                kind: "principle",
                name: "Natural selection",
                statement:
                  "Heritable traits that improve survival become more common.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Subtract the old mean from the new mean.",
                working: "9.8-9.2=0.6\\text{ mm}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Divide the change by the original value and multiply by 100.",
                working: "\\frac{0.6}{9.2}\\times100",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Evaluate to 2 significant figures.",
                working: "6.5\\%",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Beak depth varies between birds, and this variation is inherited.",
                marks: 1,
                markCode: "B",
              },
              {
                part: "c",
                reasoning:
                  "In the drought, birds with deeper beaks could crack the hard seeds, so they survived and reproduced more.",
                marks: 1,
                markCode: "B",
              },
              {
                part: "c",
                reasoning:
                  "They passed on alleles for deeper beaks, so the mean beak depth rose in the next generation.",
                marks: 1,
                markCode: "B",
              },
              {
                part: "d",
                reasoning:
                  "Changes during an individual's life (acquired traits) are not passed on, so a change in the next generation must have a genetic basis.",
                marks: 1,
                markCode: "B",
              },
              {
                part: "d",
                reasoning:
                  "Measure the beak depth of parents and their offspring.",
                marks: 1,
                markCode: "B",
              },
              {
                part: "d",
                reasoning:
                  "A positive relationship (deep-beaked parents have deep-beaked offspring) shows the trait is heritable.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) 0.6 mm (b) 6.5% (c) Variation, deeper beaks survive and reproduce more, alleles passed on (d) Compare parents' and offspring's beak depth; a positive relationship shows heritability.",
            commonErrors: [
              "In (b) dividing by 9.8 instead of 9.2, giving 6.1%.",
              "In (c) saying birds evolved deeper beaks because they needed them.",
            ],
            examinerNote:
              "(b) Allow 6.52 or 6.5. M1 for 0.6 / 9.2 (oe). Allow ecf from (a). (d) Allow 'raise chicks in the same conditions' for a controlled comparison.",
          },
        },
      ],
    },
  ],
};
