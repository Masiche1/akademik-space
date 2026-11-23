import type { Lesson } from "../../../types.ts";

export const lesson141: Lesson = {
  id: "bio10-u4-lesson-4-1",
  code: "4-1",
  title: "Natural Selection and Evidence",
  goal: "I CAN explain natural selection, identify evidence for evolution, and describe how populations change over time.",
  standards: ["HS-LS4-1", "HS-LS4-2", "HS-LS4-4", "HS-LS4-5"],
  vocabulary: [
    { term: "Evolution", definition: "Change in allele frequencies in a population over generations." },
    { term: "Natural selection", definition: "Differential survival and reproduction of individuals with advantageous traits." },
    { term: "Fitness", definition: "An organism's ability to survive and reproduce in its environment." },
    { term: "Adaptation", definition: "A trait that increases fitness, shaped by natural selection." },
    { term: "Fossil record", definition: "Preserved remains showing organisms changed over time." },
    { term: "Homologous structures", definition: "Structures with common ancestry but different functions (e.g., whale flipper, bat wing)." },
    { term: "Population", definition: "A group of organisms of the same species in a given area." },
  ],
  concepts: [
    {
      id: "bio10-u4-natural-selection",
      title: "Natural selection",
      skill: "Explain how natural selection produces adaptations and increases fitness.",
      lesson: {
        sections: [
          {
            heading: "Darwin's mechanism",
            body: "Natural selection requires:\n1. **Variation**: individuals differ in traits\n2. **Heritability**: traits pass to offspring\n3. **Differential fitness**: some traits improve survival/reproduction\n4. **Time**: advantageous traits become more common\n\nOver generations, populations become better adapted to their environment.",
          },
          {
            heading: "Types of selection",
            body: "- **Directional**: favors one extreme (e.g., larger beaks during drought)\n- **Stabilizing**: favors intermediate (e.g., average birth weight)\n- **Disruptive**: favors both extremes (e.g., light and dark moths, not medium)",
          },
          {
            heading: "Examples",
            body: "- **Peppered moths**: dark morph increased during industrial revolution as soot darkened trees\n- **Antibiotic resistance**: bacteria with resistance genes survive antibiotic treatment\n- **Darwin's finches**: beak shapes adapted to different food sources on Galápagos Islands",
          },
        ],
        keyFormulas: [
          { name: "Natural selection", statement: "Variation + heritability + differential fitness → adaptation" },
          { name: "Types", statement: "Directional, stabilizing, disruptive" },
        ],
        workedExample: {
          problem: "During a drought, finches with larger beaks survive better because they can crack harder seeds. Predict the effect on the population.",
          solution: "Large-beaked individuals have higher fitness → more offspring with large-beak alleles → frequency of large-beak trait increases over generations (directional selection).",
        },
      },
      questions: [
        {
          id: "bio10-u4-natural-selection-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is natural selection?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Organisms choose their traits" },
              { id: "b", text: "Differential survival and reproduction of individuals with advantageous traits" },
              { id: "c", text: "Random changes in DNA" },
              { id: "d", text: "All individuals survive equally" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Natural selection", statement: "Differential survival/reproduction of advantageous traits." }],
            steps: [{ reasoning: "Natural selection favors traits that improve fitness.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Differential survival of advantageous traits",
            commonErrors: ["Thinking organisms 'choose' adaptations."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "bio10-u4-natural-selection-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "What are the four requirements for natural selection to occur?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Requirements", statement: "Variation, heritability, differential fitness, time." }],
            steps: [
              { reasoning: "Variation: individuals differ in traits.", marks: 1, markCode: "B" },
              { reasoning: "Heritability: traits pass to offspring.", marks: 1, markCode: "B" },
              { reasoning: "Differential fitness: some traits improve survival/reproduction.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Variation, heritability, differential fitness (and time).",
            commonErrors: ["Missing heritability requirement."],
            examinerNote: "B2, A1.",
          },
        },
        {
          id: "bio10-u4-natural-selection-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how antibiotic resistance evolves in bacteria.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Selection pressure", statement: "Antibiotics kill susceptible bacteria." },
              { kind: "principle", name: "Resistance genes", statement: "Pre-existing mutations confer resistance." },
            ],
            steps: [
              { reasoning: "Bacterial population has genetic variation; some have resistance genes.", marks: 1, markCode: "B" },
              { reasoning: "Antibiotic kills susceptible bacteria; resistant ones survive.", marks: 1, markCode: "R" },
              { reasoning: "Resistant bacteria reproduce, passing resistance genes to offspring.", marks: 1, markCode: "B" },
              { reasoning: "Over time, resistant strain dominates population.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Antibiotics select for resistant bacteria; resistance genes spread.",
            commonErrors: ["Thinking bacteria 'learn' resistance."],
            examinerNote: "B2, R1, A1.",
          },
        },
        {
          id: "bio10-u4-natural-selection-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A population of beetles has variation in shell color: 60% brown, 30% green, 10% black.",
          parts: [
            { label: "a", prompt: "If birds preferentially eat green beetles, predict the effect on allele frequencies.", marks: 3 },
            { label: "b", prompt: "What type of selection is this?", marks: 2 },
            { label: "c", prompt: "After several generations, the population is 80% brown, 15% green, 5% black. Explain this result.", marks: 3 },
            { label: "d", prompt: "What would happen if the environment changed so green beetles were camouflaged?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Selection", statement: "Predation pressure changes allele frequencies." },
              { kind: "principle", name: "Directional selection", statement: "Favors one extreme phenotype." },
            ],
            steps: [
              { reasoning: "Green beetles eaten → fewer green alleles passed on.", marks: 1, markCode: "R", part: "a" },
              { reasoning: "Brown and black beetles survive better → their alleles increase.", marks: 1, markCode: "B", part: "a" },
              { reasoning: "Allele frequencies shift toward brown/black over generations.", marks: 1, markCode: "A", part: "a" },
              { reasoning: "This is directional selection favoring brown/black (non-green).", marks: 2, markCode: "B", part: "b" },
              { reasoning: "Brown beetles have highest fitness (camouflage + less predation).", marks: 1, markCode: "R", part: "c" },
              { reasoning: "Their alleles increase; green and black decrease.", marks: 1, markCode: "B", part: "c" },
              { reasoning: "Population adapts to predation pressure.", marks: 1, markCode: "A", part: "c" },
              { reasoning: "Green beetles would have higher fitness (camouflage).", marks: 1, markCode: "R", part: "d" },
              { reasoning: "Green allele frequency would increase over generations.", marks: 1, markCode: "A", part: "d" },
            ],
            finalAnswer: "(a) green alleles decrease, brown/black increase (b) directional (c) brown has highest fitness (d) green would increase.",
            commonErrors: ["Thinking selection is random."],
            examinerNote: "3+2+3+2 = 10.",
          },
        },
      ],
    },
    {
      id: "bio10-u4-evidence",
      title: "Evidence for evolution",
      skill: "Identify and explain the major lines of evidence supporting evolution.",
      lesson: {
        sections: [
          {
            heading: "Fossil record",
            body: "Fossils show organisms changed over time:\n- Transitional fossils (e.g., Archaeopteryx — dinosaur-bird intermediate)\n- Fossils in rock layers show sequence of forms\n- Extinct species resemble living ones",
          },
          {
            heading: "Comparative anatomy",
            body: "- **Homologous structures**: common ancestry, different function (whale flipper, bat wing, human arm — same bone structure)\n- **Analogous structures**: similar function, different ancestry (insect wing, bird wing — convergent evolution)\n- **Vestigial structures**: reduced features (human appendix, whale pelvis)",
          },
          {
            heading: "Molecular evidence",
            body: "- **DNA/protein similarity**: closely related species have similar genes\n- **Molecular clocks**: mutation rates estimate divergence times\n- **Universal genetic code**: evidence of common ancestry",
          },
        ],
        keyFormulas: [
          { name: "Homologous", statement: "Common ancestry, different function" },
          { name: "Analogous", statement: "Similar function, different ancestry" },
        ],
        workedExample: {
          problem: "Why are homologous structures evidence for evolution?",
          solution: "They suggest descent from a common ancestor — the same basic structure was modified for different functions over time.",
        },
      },
      questions: [
        {
          id: "bio10-u4-evidence-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What are homologous structures?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Structures with similar function but different ancestry" },
              { id: "b", text: "Structures with common ancestry but different functions" },
              { id: "c", text: "Structures that are identical in all species" },
              { id: "d", text: "Structures with no function" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Homologous", statement: "Common ancestry, different function." }],
            steps: [{ reasoning: "Homologous structures share evolutionary origin despite different functions.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Common ancestry, different functions",
            commonErrors: ["Confusing homologous with analogous."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "bio10-u4-evidence-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two examples of evidence for evolution from the fossil record.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Fossil evidence", statement: "Fossils show change over time." }],
            steps: [
              { reasoning: "Transitional fossils (e.g., Archaeopteryx) show intermediate forms.", marks: 1, markCode: "B" },
              { reasoning: "Fossils in rock layers show sequence of forms over time.", marks: 1, markCode: "B" },
              { reasoning: "Extinct species resemble living ones, suggesting common ancestry.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Transitional fossils and rock layer sequences.",
            commonErrors: ["Thinking fossils are random."],
            examinerNote: "B2, A1.",
          },
        },
        {
          id: "bio10-u4-evidence-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how DNA evidence supports evolution.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "DNA similarity", statement: "Closely related species share similar genes." },
              { kind: "principle", name: "Molecular clocks", statement: "Mutation rates estimate divergence." },
            ],
            steps: [
              { reasoning: "Closely related species have similar DNA sequences.", marks: 1, markCode: "B" },
              { reasoning: "More distant relatives have more differences.", marks: 1, markCode: "R" },
              { reasoning: "Mutation rates act as molecular clock to estimate when species diverged.", marks: 1, markCode: "B" },
              { reasoning: "Universal genetic code suggests all life shares common ancestor.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "DNA similarity shows relatedness; mutation rates estimate divergence times.",
            commonErrors: ["Thinking DNA is identical in all species."],
            examinerNote: "B2, R1, A1.",
          },
        },
        {
          id: "bio10-u4-evidence-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Compare homologous and analogous structures, then explain which provides stronger evidence for evolution.",
          parts: [
            { label: "a", prompt: "Define homologous and analogous structures with examples.", marks: 4 },
            { label: "b", prompt: "Explain why homologous structures are stronger evidence.", marks: 3 },
            { label: "c", prompt: "Give an example of convergent evolution and explain it.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Homologous", statement: "Common ancestry, different function (whale flipper, human arm)." },
              { kind: "principle", name: "Analogous", statement: "Similar function, different ancestry (insect wing, bird wing)." },
            ],
            steps: [
              { reasoning: "Homologous: common ancestry, different function — whale flipper, bat wing, human arm.", marks: 2, markCode: "B", part: "a" },
              { reasoning: "Analogous: similar function, different ancestry — insect wing, bird wing, bat wing.", marks: 2, markCode: "B", part: "a" },
              { reasoning: "Homologous shows descent with modification — same structure adapted for different uses.", marks: 1, markCode: "R", part: "b" },
              { reasoning: "Analogous shows convergent evolution — similar solutions to same problem independently.", marks: 1, markCode: "B", part: "b" },
              { reasoning: "Homologous is stronger evidence because it directly shows common ancestry.", marks: 1, markCode: "A", part: "b" },
              { example: "Convergent evolution: wings in insects, birds, bats evolved independently.", marks: 1, markCode: "B", part: "c" },
              { reasoning: "All solve flight but from different ancestral structures.", marks: 1, markCode: "R", part: "c" },
              { reasoning: "Similar environment → similar adaptations despite different ancestry.", marks: 1, markCode: "A", part: "c" },
          ],
            finalAnswer: "(a) homologous/analogous defined (b) homologous shows common ancestry (c) convergent evolution example.",
            commonErrors: ["Confusing the two terms."],
            examinerNote: "4+3+3 = 10.",
          },
        },
      ],
    },
  ],
};
