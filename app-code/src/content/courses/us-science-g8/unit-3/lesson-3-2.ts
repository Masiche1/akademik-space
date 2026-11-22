import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "s8-u3-lesson-3-2",
  code: "3-2",
  title: "Evolution",
  goal: "I CAN use fossil, anatomical and embryological evidence to show common ancestry, and explain how natural selection and artificial selection change populations over time.",
  standards: ["MS-LS4-1", "MS-LS4-2", "MS-LS4-3", "MS-LS4-4", "MS-LS4-5", "MS-LS4-6", "SEP: Analyzing and Interpreting Data", "SEP: Constructing Explanations"],
  vocabulary: [
    { term: "Fossil record", definition: "The collection of all known fossils, arranged by the age of the rock layers where they were found." },
    { term: "Homologous structures", definition: "Body parts in different species that have a similar structure because they were inherited from a common ancestor, even if they have different functions." },
    { term: "Embryo", definition: "An organism at an early stage of development, before birth or hatching." },
    { term: "Natural selection", definition: "The process in which organisms with traits better suited to their environment tend to survive and reproduce more." },
    { term: "Adaptation", definition: "An inherited trait that helps an organism survive and reproduce in its environment." },
    { term: "Artificial selection", definition: "Selective breeding in which humans choose which organisms reproduce in order to pass on desired traits." },
    { term: "Common ancestor", definition: "A species from which two or more different species descended." },
  ],
  concepts: [
    {
      id: "s8-u3-evolution-evidence",
      title: "Evidence for evolution",
      skill: "Use the fossil record and anatomical and embryological similarities to infer relationships between organisms.",
      lesson: {
        sections: [
          {
            heading: "The fossil record",
            body: "Fossils are the preserved remains or traces of organisms. Older fossils are found in deeper rock layers, so layers show the order in which organisms lived. The fossil record shows that:\n\n- Simple organisms appear in older layers and more complex ones in younger layers.\n- Many species that lived long ago are now extinct.\n- Some fossils show **transitional features** between groups, such as *Tiktaalik*, which had fish and limb-like features.\n\nGaps remain because few organisms become fossils, but new finds keep filling them in.",
          },
          {
            heading: "Anatomy and embryos",
            body: "**Homologous structures** have the same basic bone pattern but different uses. The arm of a human, the wing of a bat, and the flipper of a whale all have an upper arm bone, forearm bones, wrist and finger bones. The best explanation is that they inherited the pattern from a **common ancestor**.\n\nEmbryos of fish, chickens and humans look very alike in early development, and all have tail-like and throat-pouch structures. The more similar the embryos and anatomy, the more recently two species likely shared a common ancestor.\n\nStrong scientific conclusions use several lines of evidence together.",
          },
        ],
        keyFormulas: [
          { name: "Fossil layers", statement: "Deeper rock layers usually hold older fossils" },
          { name: "Homologous structures", statement: "Similar structure, possibly different function: evidence of a common ancestor" },
          { name: "Embryology", statement: "Similar early embryos suggest a recent common ancestor" },
        ],
        workedExample: {
          problem: "Species X and Y have embryos that are almost identical until late in development. Species X and Z have embryos that differ early on. Which pair is more closely related, and why?",
          solution: "X and Y are more closely related. Their embryos stay similar for longer, which suggests they share a more recent common ancestor than X and Z.",
        },
      },
      questions: [
        {
          id: "s8-u3-evolution-evidence-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A human arm, a bat wing and a whale flipper have the same basic bone arrangement. What is the best explanation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They were inherited from a common ancestor." },
              { id: "b", text: "Each animal grew the bones it needed during its life." },
              { id: "c", text: "The animals all live in the same habitat." },
              { id: "d", text: "They all do the same job." },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Homologous structures", statement: "Homologous structures share a similar structure because they were inherited from a common ancestor." },
            ],
            steps: [
              { reasoning: "The same bone pattern with different functions points to inheritance from a common ancestor.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** They were inherited from a common ancestor.",
            commonErrors: ["Choosing (a): the limbs have different functions (grasping, flying, swimming).", "Choosing (d): traits gained during life are not inherited."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "s8-u3-evolution-evidence-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A scientist finds fossil A in a rock layer 40 meters deep and fossil B in a layer 15 meters deep in the same undisturbed rock sequence.\n\nCompare the ages of the fossils and explain how you know.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Superposition", statement: "In undisturbed rock, deeper layers are older than layers above them." },
            ],
            steps: [
              { reasoning: "Fossil A is older than fossil B.", marks: 1, markCode: "B" },
              { reasoning: "Layers form one on top of another, so the lower layers were deposited first.", marks: 1, markCode: "B" },
              { reasoning: "The rock is undisturbed, so the order of the layers shows the order in which the organisms lived.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Fossil A (40 m) is older than fossil B (15 m) because deeper layers in undisturbed rock were deposited earlier.",
            commonErrors: ["Saying the deeper fossil is younger.", "Saying larger fossils are older."],
            examinerNote: "B1 A older. B1 deeper layers deposited first oe. R1 undisturbed / order of layers gives order of life. Allow 'bottom layers are oldest'.",
          },
        },
        {
          id: "s8-u3-evolution-evidence-q3",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "The table shows the number of differences in a short section of DNA, compared with a human.\n\nChimpanzee: 2. Gorilla: 6. Mouse: 48.\n\nConstruct an explanation, using this data and one other type of evidence, for which animal shares the most recent common ancestor with humans.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Common ancestry", statement: "The fewer the differences in DNA, anatomy and embryos, the more recently two species shared a common ancestor." },
            ],
            steps: [
              { reasoning: "Claim: the chimpanzee shares the most recent common ancestor with humans.", marks: 1, markCode: "R" },
              { reasoning: "Evidence: the chimpanzee has only 2 DNA differences, fewer than gorilla (6) and mouse (48).", marks: 1, markCode: "B" },
              { reasoning: "Reasoning: fewer DNA changes have accumulated since the lineages separated, meaning less time has passed.", marks: 1, markCode: "R" },
              { reasoning: "Another type of evidence, such as similar anatomy (homologous bones) or similar embryo development.", marks: 1, markCode: "B" },
              { reasoning: "This independent evidence points to the same conclusion, which strengthens the claim.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "The chimpanzee: it has the fewest DNA differences (2), and anatomical and embryological similarities also support a recent common ancestor.",
            commonErrors: ["Choosing the mouse because it has the most differences.", "Citing only appearance rather than structural evidence."],
            examinerNote: "R1 claim chimpanzee. B1 data quoted. R1 fewer differences = more recent ancestor. B1 second evidence type. R1 consistent evidence strengthens conclusion.",
          },
        },
        {
          id: "s8-u3-evolution-evidence-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Scientists studied the fossils of a group of animals found in rock layers of different ages. The oldest layer holds fish-like fossils with fins. A younger layer holds an animal with fins and the beginnings of limbs. The youngest layer holds animals with four legs and no fins.",
          parts: [
            { label: "a", prompt: "State what is meant by the fossil record.", marks: 1 },
            { label: "b", prompt: "Describe the pattern shown by the three layers.", marks: 2 },
            { label: "c", prompt: "Explain why the animal in the middle layer is useful evidence for evolution.", marks: 2 },
            { label: "d", prompt: "Suggest why the fossil record is incomplete.", marks: 2 },
            { label: "e", prompt: "Give one type of evidence, other than fossils, that scientists use to show that two species are related.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Fossil record", statement: "The fossil record is the collection of all known fossils, arranged by the age of the rock layers." },
              { kind: "principle", name: "Transitional fossils", statement: "A transitional fossil shows features of both an ancestral group and a descendant group." },
            ],
            steps: [
              { part: "a", reasoning: "All known fossils, arranged by the age of the layers they are found in.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Older layers contain fish-like animals with fins, and younger layers hold animals with limbs.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "The organisms change gradually over time, from fins towards four legs.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "It is a transitional fossil with features of both fins and limbs.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "It shows that one group can change into another, supporting descent with modification from a common ancestor.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Very few organisms become fossils because most are eaten or decay before they are buried.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Fossils may be destroyed by erosion or heat and pressure, or may not yet have been found.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "Named evidence: similar anatomy (homologous structures), similar embryos, or DNA similarities.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "Link to relatedness: more similarity means a more recent common ancestor.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) All known fossils arranged by age of rock layers (b) Fins in the oldest layer, then fins with limbs, then four legs in the youngest: gradual change (c) A transitional fossil showing both features (d) Few organisms fossilize; fossils are destroyed or not yet found (e) Homologous structures, embryos or DNA; more similarity means a more recent ancestor.",
            commonErrors: ["In (c) saying the middle animal is 'the missing link' that proves humans came from fish.", "In (d) saying fossils are incomplete because evolution did not happen."],
            examinerNote: "(b) Allow 'change from water animals to land animals'. (d) Any two from: rarely fossilized, decay, scavenged, destroyed by geological processes, not yet found. (e) Allow biochemical evidence.",
          },
        },
      ],
    },
    {
      id: "s8-u3-natural-selection",
      title: "Natural selection and artificial selection",
      skill: "Explain how natural selection changes traits in populations over time and compare it with artificial selection.",
      lesson: {
        sections: [
          {
            heading: "Natural selection",
            body: "Natural selection explains how populations adapt. It has four steps:\n\n- **Variation:** individuals in a population have different traits, caused by differences in their genes.\n- **Competition:** more offspring are born than the environment can support, so individuals compete for food, space and mates.\n- **Survival and reproduction:** individuals with traits better suited to the environment are more likely to survive and reproduce.\n- **Inheritance:** they pass the helpful genes to offspring, so over many generations the helpful trait becomes more common.\n\nIndividuals do not change during their lives to adapt. The **population** changes over generations. For example, if a few bacteria in a population carry a gene for resistance to an antibiotic, the antibiotic kills the others, and the resistant bacteria multiply.",
          },
          {
            heading: "Artificial selection",
            body: "In **artificial selection**, humans choose which organisms breed, picking those with desired traits such as larger fruit, more milk or a calm temperament. Over many generations the desired trait becomes more common. Dogs, corn and cattle have been changed this way.\n\nThe key difference is the selecting agent: in natural selection the **environment** selects, while in artificial selection **humans** select. Humans can also use gene technologies, such as inserting a gene from one organism into another, to change traits directly.",
          },
        ],
        keyFormulas: [
          { name: "Natural selection", statement: "Variation, competition, survival and reproduction of the best adapted, inheritance" },
          { name: "Artificial selection", statement: "Humans choose which organisms breed" },
          { name: "Percent change", statement: "$\\dfrac{\\text{new} - \\text{old}}{\\text{old}} \\times 100\\%$" },
        ],
        workedExample: {
          problem: "In a population of 200 beetles, 20 are brown and the rest are green. Birds see brown beetles easily on green leaves. After many generations, brown beetles are 5 of 200. Explain the change.",
          solution: "Brown beetles are easier for birds to see, so fewer survive to reproduce. Green beetles survive more often and pass on their color genes, so the green trait becomes more common and brown becomes less common (from 10% to 2.5% of the population).",
        },
      },
      questions: [
        {
          id: "s8-u3-natural-selection-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the main difference between natural selection and artificial selection?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "In natural selection the environment selects, and in artificial selection humans select." },
              { id: "b", text: "In artificial selection, the environment decides which organisms reproduce." },
              { id: "c", text: "Only artificial selection involves genetic variation." },
              { id: "d", text: "In natural selection, individuals change their traits on purpose." },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Selection", statement: "Natural selection is by the environment; artificial selection is by humans choosing breeding organisms." },
            ],
            steps: [
              { reasoning: "The selecting agent is the environment in natural selection and humans in artificial selection.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** In natural selection the environment selects, and in artificial selection humans select.",
            commonErrors: ["Choosing (a): organisms do not change on purpose; variation exists already.", "Choosing (d): both processes need variation."],
            examinerNote: "B1 for (c).",
          },
        },
        {
          id: "s8-u3-natural-selection-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A population of 400 moths contains 40 dark moths. After a factory covers trees with dark soot, the number of dark moths in the next population of 400 is 240.\n\nCalculate the percent of dark moths before and after, and give the change in percentage points.",
          response: {
            type: "numeric",
            parts: [
              { label: "Percent dark before", answer: 10, unit: "%" },
              { label: "Percent dark after", answer: 60, unit: "%" },
              { label: "Change", answer: 50, unit: "percentage points" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage", statement: "$\\text{percent} = \\dfrac{\\text{part}}{\\text{whole}} \\times 100\\%$" },
            ],
            steps: [
              { reasoning: "Before: 40 of 400.", working: "\\frac{40}{400}\\times100=10\\%", marks: 1, markCode: "M" },
              { reasoning: "After: 240 of 400.", working: "\\frac{240}{400}\\times100=60\\%", marks: 1, markCode: "A" },
              { reasoning: "Subtract the percentages.", working: "60-10=50\\text{ percentage points}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "10% before, 60% after, an increase of 50 percentage points",
            commonErrors: ["Using 240 - 40 = 200 as a percentage.", "Calculating 60% of 10 instead of subtracting."],
            examinerNote: "M1 40/400 x 100. A1 60%. A1 50. Allow ecf.",
          },
        },
        {
          id: "s8-u3-natural-selection-q3",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A farmer sprays a field with a pesticide. Most insects die, but a few survive. The farmer finds that after several years of spraying, most of the insects in the field survive the spray.\n\nConstruct an explanation for this change using natural selection.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Natural selection", statement: "Variation, differential survival and reproduction, inheritance of helpful traits." },
            ],
            steps: [
              { reasoning: "The insects vary, and a few have a gene (from a mutation) that makes them resistant to the pesticide.", marks: 1, markCode: "B" },
              { reasoning: "The pesticide kills the non-resistant insects.", marks: 1, markCode: "B" },
              { reasoning: "Resistant insects survive and reproduce, with less competition.", marks: 1, markCode: "B" },
              { reasoning: "They pass the resistance gene to their offspring.", marks: 1, markCode: "B" },
              { reasoning: "Over several generations the proportion of resistant insects increases, so the population changes, not individual insects.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Resistant insects survive, reproduce and pass on the resistance gene, so the resistant trait becomes more common over generations.",
            commonErrors: ["Saying individual insects became resistant by getting used to the pesticide.", "Saying the pesticide caused the resistance mutation."],
            examinerNote: "B1 variation / resistance gene already present. B1 non-resistant die. B1 resistant survive and breed. B1 pass on gene. R1 proportion increases over generations. Reject 'adapted to the pesticide' for individuals.",
          },
        },
        {
          id: "s8-u3-natural-selection-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Wild mustard plants have small flower buds. Over thousands of years, farmers saved seeds only from plants with larger flower buds. Today this has produced broccoli. A student also studies a population of 500 finches on an island. The average beak depth was 9.0 mm. After a drought that killed most small seeds, the survivors had an average beak depth of 10.5 mm.",
          parts: [
            { label: "a", prompt: "Name the process that produced broccoli from wild mustard.", marks: 1 },
            { label: "b", prompt: "Calculate the increase in average beak depth of the finches as a percent of the original depth.", marks: 2 },
            { label: "c", prompt: "Explain how the drought led to a change in beak depth in the finch population.", marks: 4 },
            { label: "d", prompt: "Compare how the two changes (broccoli and finch beaks) happened, identifying one similarity and one difference.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Artificial selection", statement: "Humans choose which organisms breed to make a desired trait more common." },
              { kind: "principle", name: "Natural selection", statement: "Organisms with helpful traits survive and reproduce more, passing on those traits." },
              { kind: "formula", name: "Percent increase", statement: "$\\text{percent increase} = \\dfrac{\\text{increase}}{\\text{original}} \\times 100\\%$" },
            ],
            steps: [
              { part: "a", reasoning: "Humans chose which plants to breed, so this is artificial selection (selective breeding).", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Find the increase and divide by the original: 10.5 - 9.0 = 1.5 mm.", working: "\\frac{10.5-9.0}{9.0}\\times100", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate (to 3 significant figures).", working: "\\frac{1.5}{9.0}\\times100=16.7\\%", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Finches vary in beak depth, because of differences in their genes.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "In the drought, only large hard seeds were left, which finches with deeper beaks can crack.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Deep-beaked finches survived and reproduced more, passing on the genes for deeper beaks.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Over generations the average beak depth of the population increased.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Similarity: in both, individuals with certain traits reproduce more, so the trait becomes more common over generations (oe).", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Difference: in broccoli, humans chose which plants reproduced.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "In the finches, the environment (the drought and seed supply) selected which survived.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) Artificial selection (b) 16.7% (c) Variation in beak depth; deep beaks cracked the remaining hard seeds; those finches survived and bred, passing on genes, so average depth rose (d) Both change traits through selective reproduction; humans select in broccoli but the environment selects in the finches.",
            commonErrors: ["In (b) dividing by the new value 10.5, giving 14.3%.", "In (c) saying the finches' beaks grew deeper because they needed to."],
            examinerNote: "(b) Allow 16.7 or 17 or 16.67 with or without %. Allow M1 for 1.5/9. (c) Reject 'finches changed their beaks to survive'. (d) Similarity and difference must be clearly stated.",
          },
        },
      ],
    },
  ],
};
