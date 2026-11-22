import type { Lesson } from "../../../types.ts";

export const lesson101: Lesson = {
  id: "cieb-u10-lesson-10-1",
  code: "10-1",
  title: "Natural Selection and Evolution",
  goal: "I CAN explain natural selection, adaptation, and evidence for evolution.",
  standards: ["0653 10.1", "0653 10.2"],
  vocabulary: [
    { term: "Variation", definition: "Differences between individuals of a species." },
    { term: "Natural selection", definition: "Process where individuals best adapted survive and reproduce, passing on advantageous alleles." },
    { term: "Adaptation", definition: "Inherited feature that improves survival/reproduction in a given environment." },
    { term: "Speciation", definition: "Formation of new species when populations become isolated and evolve separately." },
    { term: "Selective breeding", definition: "Humans choosing which organisms reproduce to enhance desired traits." },
    { term: "Fossil", definition: "Preserved remains of ancient organisms; evidence of change over time." },
    { term: "Extinction", definition: "Permanent loss of a species." },
  ],
  concepts: [
    {
      id: "cieb-u10-natural-selection",
      title: "Natural selection",
      skill: "Explain natural selection, adaptation and speciation.",
      lesson: {
        sections: [
          {
            heading: "Mechanism",
            body: "1. **Variation** exists within a population (mutation, meiosis).\n2. **Selection pressure** (e.g. predators, climate) favours some variants.\n3. **Best adapted** survive and reproduce more.\n4. **Advantageous alleles** increase in frequency over generations.\n\nOver time the population becomes better adapted — evolution.",
          },
          {
            heading: "Adaptation examples",
            body: "- Camouflage (peppered moth)\n- Antibiotic resistance in bacteria\n- Darwin's finches (beak shapes for different foods)\n- Industrial melanism",
          },
          {
            heading: "Speciation",
            body: "When a population is split (geographic barrier), each group evolves differently. If they can no longer interbreed → new species.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Explain how antibiotic resistance evolves in bacteria.",
          solution: "Random mutation gives some bacteria resistance; antibiotic kills susceptible ones; resistant survivors reproduce → resistance allele spreads.",
        },
      },
      questions: [
        {
          id: "cieb-u10-natural-selection-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Natural selection acts on:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Variation within a population" },
              { id: "b", text: "Individual organisms changing during their lifetime" },
              { id: "c", text: "The environment becoming stronger" },
              { id: "d", text: "Species deciding to adapt" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Natural selection", statement: "Acts on existing variation in a population." },
            ],
            steps: [
              { reasoning: "Recall what selection acts on.", working: "\\text{variation}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Variation within a population",
            commonErrors: ["Choosing 'individuals change' — acquired characteristics are NOT inherited (Lamarck's error)."],
          },
        },
        {
          id: "cieb-u10-natural-selection-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Define 'adaptation'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Adaptation", statement: "Inherited feature improving survival/reproduction." },
            ],
            steps: [
              { reasoning: "Give definition.", working: "\\text{inherited feature}", marks: 1, markCode: "M" },
              { reasoning: "Complete: survival/reproduction.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "An inherited feature that improves an organism's survival or reproduction in its environment.",
            commonErrors: ["Saying 'any useful feature' — must be inherited/genetic."],
          },
        },
        {
          id: "cieb-u10-natural-selection-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how antibiotic resistance evolves in a bacterial population.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Antibiotic resistance", statement: "Random mutation → selection → resistant allele spreads." },
            ],
            steps: [
              { reasoning: "Mutation creates resistance in some bacteria.", working: "\\text{mutation}", marks: 1, markCode: "M" },
              { reasoning: "Antibiotic kills susceptible bacteria.", working: "\\text{selection pressure}", marks: 1, markCode: "M" },
              { reasoning: "Resistant bacteria survive and reproduce.", working: "\\text{survive/reproduce}", marks: 1, markCode: "M" },
              { reasoning: "Resistance allele increases in frequency.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Random mutation gives some bacteria antibiotic resistance; the antibiotic kills susceptible bacteria while resistant ones survive and reproduce, spreading the resistance allele.",
            commonErrors: ["Saying 'bacteria develop resistance to survive' — mutation is random, not directed."],
          },
        },
        {
          id: "cieb-u10-natural-selection-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Explain the process of natural selection using an example.",
          parts: [
            { label: "a", prompt: "State the four stages of natural selection.", marks: 4 },
            { label: "b", prompt: "Give one real example.", marks: 2 },
            { label: "c", prompt: "Explain how the example illustrates each stage.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Natural selection", statement: "Variation → selection pressure → differential survival → allele frequency change." },
            ],
            steps: [
              { part: "a", reasoning: "Variation exists.", working: "\\text{variation}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Selection pressure.", working: "\\text{selection pressure}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Best adapted survive/reproduce.", working: "\\text{differential survival}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Allele frequency changes.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Give example (peppered moth, finches, resistance).", working: "\\text{example}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Name it clearly.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Variation: different beak shapes/colours.", working: "\\text{variation}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Selection: environment favours one type.", working: "\\text{selection}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Result: advantageous type increases.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) variation→pressure→survival→allele change (b) e.g. peppered moth (c) illustrated stages",
            commonErrors: ["In (a) saying 'organisms try to adapt' — selection is passive, not goal-directed."],
          },
        },
        {
          id: "cieb-u10-natural-selection-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which statement best describes natural selection?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The strongest individuals always win" },
              { id: "b", text: "All individuals change to suit the environment" },
              { id: "c", text: "Best adapted individuals survive and reproduce more" },
              { id: "d", text: "Species choose which traits to develop" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Natural selection", statement: "Differential survival and reproduction of better-adapted variants." },
            ],
            steps: [
              { reasoning: "Recall the definition.", working: "\\text{differential survival}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Best adapted individuals survive and reproduce more",
            commonErrors: ["Choosing 'all individuals change' — individuals do not change; allele frequencies do."],
          },
        },
        {
          id: "cieb-u10-natural-selection-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is NOT a source of variation within a population?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Temperature experienced during an organism's lifetime" },
              { id: "b", text: "Mutation" },
              { id: "c", text: "Crossing over during meiosis" },
              { id: "d", text: "Random fertilisation" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Variation", statement: "Genetic sources: mutation, meiosis, random fertilisation." },
            ],
            steps: [
              { reasoning: "Identify the non-genetic factor.", working: "\\text{environmental effect}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Temperature experienced during an organism's lifetime",
            commonErrors: ["Choosing mutation — it IS a source of variation."],
          },
        },
        {
          id: "cieb-u10-natural-selection-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "In industrial melanism, dark peppered moths increased in frequency because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Birds preferred eating light moths" },
              { id: "b", text: "Soot darkened trees, so dark moths were camouflaged and eaten less" },
              { id: "c", text: "Dark moths were stronger and fought better" },
              { id: "d", text: "Light moths migrated away" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Industrial melanism", statement: "Camouflage advantage → differential survival → allele frequency change." },
            ],
            steps: [
              { reasoning: "Link environment to survival.", working: "\\text{camouflage} \\to \\text{survival}", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(b)** Soot darkened trees, so dark moths were camouflaged and eaten less",
            commonErrors: ["Saying 'moths chose to be dark' — selection is passive."],
          },
        },
        {
          id: "cieb-u10-natural-selection-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Speciation is most likely to occur when:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A species reproduces very quickly" },
              { id: "b", text: "A population is split by a barrier and the groups evolve separately until they cannot interbreed" },
              { id: "c", text: "All members of a species migrate together" },
              { id: "d", text: "Individuals within a population fight each other" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Speciation", statement: "Isolation → separate evolution → reproductive isolation." },
            ],
            steps: [
              { reasoning: "Recall the speciation mechanism.", working: "\\text{isolation} \\to \\text{new species}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** A population is split by a barrier and the groups evolve separately until they cannot interbreed",
            commonErrors: ["Confusing speciation with extinction — speciation creates new species."],
          },
        },
        {
          id: "cieb-u10-natural-selection-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Antibiotic resistance spreads through a bacterial population because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Resistant bacteria reproduce more slowly" },
              { id: "b", text: "The antibiotic creates resistance in all bacteria equally" },
              { id: "c", text: "Bacteria learn to resist antibiotics during treatment" },
              { id: "d", text: "Resistant bacteria survive the antibiotic and pass the allele to their offspring" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Antibiotic resistance", statement: "Random mutation + selection → resistant allele frequency rises." },
            ],
            steps: [
              { reasoning: "Recall selection mechanism.", working: "\\text{survive} \\to \\text{reproduce} \\to \\text{allele spreads}", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(d)** Resistant bacteria survive the antibiotic and pass the allele to their offspring",
            commonErrors: ["Choosing 'bacteria learn' — resistance arises by random mutation, not learning."],
          },
        },
        {
          id: "cieb-u10-natural-selection-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Lamarck suggested giraffes stretched their necks and passed the longer neck to offspring. Why is this rejected?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Acquired characteristics are not inherited; selection acts on existing genetic variation" },
              { id: "b", text: "Giraffes cannot reach leaves" },
              { id: "c", text: "Evolution does not occur" },
              { id: "d", text: "Necks cannot change length" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Lamarck vs Darwin", statement: "Only inherited (genetic) changes are passed on; selection acts on pre-existing variation." },
            ],
            steps: [
              { reasoning: "Identify the flaw.", working: "\\text{acquired traits not inherited}", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(a)** Acquired characteristics are not inherited; selection acts on existing genetic variation",
            commonErrors: ["Saying 'weasels became weasels by squeezing' — same Lamarckian error."],
          },
        },
        {
          id: "cieb-u10-natural-selection-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "In a population of 1200 bacteria, 300 carry the resistance allele. What percentage of the population carries it?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 25, unit: "%" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage", statement: "$\\text{percentage} = \\dfrac{\\text{part}}{\\text{total}} \\times 100$" },
            ],
            steps: [
              { reasoning: "Apply the formula.", working: "\\frac{300}{1200} \\times 100", marks: 1, markCode: "M" },
            ],
            finalAnswer: "25%",
            commonErrors: ["Giving 300/1200 = 0.25 without converting to a percentage."],
          },
        },
        {
          id: "cieb-u10-natural-selection-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "After antibiotic treatment, 450 of 900 surviving bacteria are resistant. Calculate the percentage of survivors that are resistant.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 50, unit: "%" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage", statement: "$\\text{percentage} = \\dfrac{\\text{part}}{\\text{total}} \\times 100$" },
            ],
            steps: [
              { reasoning: "Use survivors as the total.", working: "\\frac{450}{900} \\times 100 = 50", marks: 1, markCode: "M" },
            ],
            finalAnswer: "50%",
            commonErrors: ["Dividing by the original population instead of the survivors."],
          },
        },
        {
          id: "cieb-u10-natural-selection-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "In a sample of 500 finches, 125 show the large-beak variant. What percentage show this variant?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 25, unit: "%" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage", statement: "$\\text{percentage} = \\dfrac{\\text{part}}{\\text{total}} \\times 100$" },
            ],
            steps: [
              { reasoning: "Apply the formula.", working: "\\frac{125}{500} \\times 100 = 25", marks: 1, markCode: "M" },
            ],
            finalAnswer: "25%",
            commonErrors: ["Answering 125 — the question asks for a percentage."],
          },
        },
        {
          id: "cieb-u10-natural-selection-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Of 640 beetles sampled from a population, 96 show the dark variant. Calculate the percentage showing the dark variant.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 15, unit: "%" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage", statement: "$\\text{percentage} = \\dfrac{\\text{part}}{\\text{total}} \\times 100$" },
            ],
            steps: [
              { reasoning: "Apply the formula.", working: "\\frac{96}{640} \\times 100 = 15", marks: 1, markCode: "M" },
            ],
            finalAnswer: "15%",
            commonErrors: ["Simplifying incorrectly — 96/640 = 0.15 = 15%."],
          },
        },
        {
          id: "cieb-u10-natural-selection-q15",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain the difference between natural selection and selective breeding.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Selection types", statement: "Natural = environment selects; artificial = humans select." },
            ],
            steps: [
              { reasoning: "Natural selection: environment/selection pressure acts.", working: "\\text{environment selects}", marks: 1, markCode: "M" },
              { reasoning: "Selective breeding: humans choose which organisms reproduce.", working: "\\text{humans select}", marks: 1, markCode: "M" },
              { reasoning: "Both change allele frequencies over generations.", working: "\\text{allele frequency change}", marks: 1, markCode: "M" },
              { reasoning: "Conclude: same mechanism, different agent.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Natural selection is driven by the environment — better-adapted organisms survive and reproduce. Selective breeding is driven by humans choosing which organisms breed for desired traits. Both operate by changing allele frequencies, but the selecting agent differs.",
            commonErrors: ["Saying selective breeding is 'unnatural so not evolution' — it uses the same selection mechanism."],
          },
        },
        {
          id: "cieb-u10-natural-selection-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Describe how speciation can produce a new species.",
          parts: [
            { label: "a", prompt: "Explain how a population can become divided.", marks: 3 },
            { label: "b", prompt: "Explain how the two groups evolve differently.", marks: 3 },
            { label: "c", prompt: "State what must happen for them to be considered separate species.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Speciation", statement: "Isolation → divergent evolution → reproductive isolation." },
            ],
            steps: [
              { part: "a", reasoning: "Geographic barrier splits population.", working: "\\text{barrier}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "No gene flow between groups.", working: "\\text{no gene flow}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Each group adapts separately.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Different selection pressures in each area.", working: "\\text{different pressures}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Allele frequencies diverge.", working: "\\text{diverge}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Groups become increasingly different.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "They can no longer interbreed successfully.", working: "\\text{cannot interbreed}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Or offspring are infertile.", working: "\\text{infertile offspring}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Two distinct species result.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) barrier splits population, no gene flow (b) different selection pressures → allele frequencies diverge (c) groups can no longer interbreed or produce fertile offspring",
            commonErrors: ["In (c) saying 'they look different' — speciation requires reproductive isolation."],
          },
        },
      ],
    },
    {
      id: "cieb-u10-evidence",
      title: "Evidence for evolution",
      skill: "Describe evidence for evolution: fossils, selective breeding, and homologous structures.",
      lesson: {
        sections: [
          {
            heading: "Fossils",
            body: "Preserved remains show organisms changed over millions of years. Transitional fossils show intermediate forms. Rock layers give relative dates; radioactive dating gives absolute ages.",
          },
          {
            heading: "Selective breeding",
            body: "Humans have produced dramatic changes in domestic animals/crops (dogs, wheat) — proves artificial selection can change species rapidly.",
          },
          {
            heading: "Other evidence",
            body: "- **Homologous structures**: similar anatomy (limb bones) → common ancestry.\n- **DNA similarities**: closely related species have similar DNA.\n- **Biogeography**: species on islands resemble nearest mainland species.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "How do fossils provide evidence for evolution?",
          solution: "They show a sequence of forms over geological time, with simpler/older forms differing from complex/recent ones — demonstrating change.",
        },
      },
      questions: [
        {
          id: "cieb-u10-evidence-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is evidence for evolution?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Species never changing" },
              { id: "b", text: "All organisms looking identical" },
              { id: "c", text: "Fossils showing change over time" },
              { id: "d", text: "Individual adaptation during life" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Evolution evidence", statement: "Fossils, selective breeding, homologous structures, DNA." },
            ],
            steps: [
              { reasoning: "Recall evidence type.", working: "\\text{fossils}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Fossils showing change over time",
            commonErrors: ["Choosing 'individual adaptation' — that's not inherited."],
          },
        },
        {
          id: "cieb-u10-evidence-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "State two pieces of evidence for evolution.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Evolution evidence", statement: "Fossils, selective breeding, homologous structures, DNA similarities." },
            ],
            steps: [
              { reasoning: "Give two types.", working: "\\text{fossils, breeding, homologous, DNA}", marks: 1, markCode: "M" },
              { reasoning: "State them clearly.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Fossils showing change over time, selective breeding producing new varieties, homologous structures, or DNA similarities.",
            commonErrors: ["Listing 'organisms trying to adapt' — not evidence."],
          },
        },
        {
          id: "cieb-u10-evidence-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how selective breeding provides evidence for evolution.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Selective breeding", statement: "Artificial selection mimics natural selection; produces rapid change." },
            ],
            steps: [
              { reasoning: "Humans select for desired traits.", working: "\\text{select desired traits}", marks: 1, markCode: "M" },
              { reasoning: "Over generations, traits become exaggerated.", working: "\\text{exaggerated traits}", marks: 1, markCode: "M" },
              { reasoning: "Same mechanism as natural selection but faster.", working: "\\text{same mechanism}", marks: 1, markCode: "M" },
              { reasoning: "Conclude: proves selection can change populations.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Selective breeding applies the same selection principle as natural selection but faster — humans choose which organisms reproduce, producing dramatic changes (e.g. dog breeds) that demonstrate evolution is possible.",
            commonErrors: ["Saying 'it's not natural so doesn't count' — it demonstrates the mechanism."],
          },
        },
        {
          id: "cieb-u10-evidence-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Describe three types of evidence for evolution.",
          parts: [
            { label: "a", prompt: "Describe fossil evidence.", marks: 3 },
            { label: "b", prompt: "Describe selective breeding evidence.", marks: 3 },
            { label: "c", prompt: "Describe homologous structure evidence.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Evolution evidence", statement: "Fossils, artificial selection, homologous/DNA evidence." },
            ],
            steps: [
              { part: "a", reasoning: "Fossils in rock layers show sequence.", working: "\\text{rock layers}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Older = simpler, recent = complex.", working: "\\text{simple to complex}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Transitional forms exist.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Humans select desired traits.", working: "\\text{select traits}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Rapid change over generations.", working: "\\text{rapid change}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Shows selection mechanism works.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Similar bone structure in different species.", working: "\\text{similar bones}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Suggests common ancestor.", working: "\\text{common ancestor}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Despite different functions.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) fossils in layers show change (b) selective breeding shows rapid change (c) homologous structures → common ancestor",
            commonErrors: ["In (c) describing analogous structures — those are similar function, different origin."],
          },
        },
        {
          id: "cieb-u10-evidence-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Fossils are most commonly found preserved in:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Metamorphic rock" },
              { id: "b", text: "Magma" },
              { id: "c", text: "Sedimentary rock layers" },
              { id: "d", text: "Igneous rock" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Fossils", statement: "Preserved in sedimentary layers; give relative dating." },
            ],
            steps: [
              { reasoning: "Recall where fossils form.", working: "\\text{sedimentary rock}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Sedimentary rock layers",
            commonErrors: ["Choosing igneous — it forms from cooled magma and destroys remains."],
          },
        },
        {
          id: "cieb-u10-evidence-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which provides evidence of a common ancestor between species?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "All species living in the same habitat" },
              { id: "b", text: "Species having the same colour" },
              { id: "c", text: "Organisms moving to new areas" },
              { id: "d", text: "Homologous structures such as similar limb bones" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Homologous structures", statement: "Similar anatomy despite different function → shared ancestry." },
            ],
            steps: [
              { reasoning: "Recall the evidence type.", working: "\\text{homologous structures}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Homologous structures such as similar limb bones",
            commonErrors: ["Choosing 'same habitat' — that is not evidence of ancestry."],
          },
        },
        {
          id: "cieb-u10-evidence-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "DNA evidence for evolution shows that:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "All species have identical DNA" },
              { id: "b", text: "Only humans have DNA" },
              { id: "c", text: "Closely related species have more similar DNA sequences" },
              { id: "d", text: "DNA cannot change between species" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "DNA evidence", statement: "Degree of similarity reflects relatedness." },
            ],
            steps: [
              { reasoning: "Recall the pattern.", working: "\\text{similarity} \\propto \\text{relatedness}", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(c)** Closely related species have more similar DNA sequences",
            commonErrors: ["Saying 'identical DNA' — related species share similar, not identical, sequences."],
          },
        },
        {
          id: "cieb-u10-evidence-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Transitional fossils are important because they:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Prove species never change" },
              { id: "b", text: "Are the oldest rocks on Earth" },
              { id: "c", text: "Only contain modern species" },
              { id: "d", text: "Show intermediate forms linking different groups of organisms" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Transitional fossils", statement: "Intermediate forms between ancestral and descendant groups." },
            ],
            steps: [
              { reasoning: "Recall their significance.", working: "\\text{intermediate forms}", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(d)** Show intermediate forms linking different groups of organisms",
            commonErrors: ["Confusing transitional fossils with index fossils."],
          },
        },
        {
          id: "cieb-u10-evidence-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Why does selective breeding count as evidence for evolution?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It proves natural selection does not exist" },
              { id: "b", text: "It shows that selection can produce rapid, dramatic change in populations" },
              { id: "c", text: "It creates entirely new genes from nothing" },
              { id: "d", text: "It only works on plants" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Selective breeding", statement: "Artificial selection demonstrates the mechanism of evolution." },
            ],
            steps: [
              { reasoning: "Link to evolution mechanism.", working: "\\text{same selection mechanism}", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(b)** It shows that selection can produce rapid, dramatic change in populations",
            commonErrors: ["Saying 'it's artificial so irrelevant' — it demonstrates selection works."],
          },
        },
        {
          id: "cieb-u10-evidence-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "Biogeographical evidence shows that island species most closely resemble:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Species living in the same ocean" },
              { id: "b", text: "Species on the nearest mainland" },
              { id: "c", text: "Species on the most distant continent" },
              { id: "d", text: "No species anywhere else" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Biogeography", statement: "Island species derive from nearby mainland ancestors." },
            ],
            steps: [
              { reasoning: "Recall the pattern.", working: "\\text{nearest mainland}", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(b)** Species on the nearest mainland",
            commonErrors: ["Choosing 'same ocean' — distribution follows proximity, not environment."],
          },
        },
        {
          id: "cieb-u10-evidence-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "Rock layer A is dated at 250 million years old and layer B at 65 million years old. How many million years apart are they?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 185, unit: "million years" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Time difference", statement: "$\\text{difference} = \\text{older} - \\text{younger}$" },
            ],
            steps: [
              { reasoning: "Subtract the ages.", working: "250 - 65 = 185", marks: 1, markCode: "M" },
            ],
            finalAnswer: "185 million years",
            commonErrors: ["Adding the ages instead of subtracting."],
          },
        },
        {
          id: "cieb-u10-evidence-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "Species X shares 92% DNA similarity with humans and species Y shares 85%. Calculate the difference in similarity between the two species.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 7, unit: "%" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Difference", statement: "$92 - 85 = 7$" },
            ],
            steps: [
              { reasoning: "Subtract the percentages.", working: "92 - 85 = 7", marks: 1, markCode: "M" },
            ],
            finalAnswer: "7%",
            commonErrors: ["Dividing instead of subtracting — the question asks for a difference."],
          },
        },
        {
          id: "cieb-u10-evidence-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "A fossil sequence spans rock layers dated from 300 million years ago to 10 million years ago. Calculate the time span covered by the sequence.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 290, unit: "million years" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Time span", statement: "$300 - 10 = 290$" },
            ],
            steps: [
              { reasoning: "Subtract the youngest from the oldest date.", working: "300 - 10 = 290", marks: 1, markCode: "M" },
            ],
            finalAnswer: "290 million years",
            commonErrors: ["Adding 300 + 10 = 310."],
          },
        },
        {
          id: "cieb-u10-evidence-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A wheat variety originally yielded 2 tonnes per hectare. After 20 generations of selective breeding it yields 8 tonnes per hectare. Calculate the percentage increase in yield.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 300, unit: "%" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage increase", statement: "$\\%\\text{ increase} = \\dfrac{\\text{new} - \\text{old}}{\\text{old}} \\times 100$" },
            ],
            steps: [
              { reasoning: "Apply the formula.", working: "\\frac{8 - 2}{2} \\times 100 = 300", marks: 1, markCode: "M" },
            ],
            finalAnswer: "300%",
            commonErrors: ["Computing 8/2 = 400% — that's the new value as a percentage of old, not the increase."],
          },
        },
        {
          id: "cieb-u10-evidence-q15",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how similarities in DNA provide evidence for evolution.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "DNA evidence", statement: "Closely related species share more DNA sequence similarity." },
            ],
            steps: [
              { reasoning: "Related species have similar DNA sequences.", working: "\\text{similar sequences}", marks: 1, markCode: "M" },
              { reasoning: "Greater similarity = more recent common ancestor.", working: "\\text{common ancestor}", marks: 1, markCode: "M" },
              { reasoning: "Conclude: pattern matches evolutionary tree.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Closely related species inherit DNA from a recent common ancestor, so their DNA sequences are more similar. The degree of similarity reflects how recently species diverged, supporting the pattern of evolution.",
            commonErrors: ["Saying 'all DNA is the same' — similarity differs between species."],
          },
        },
        {
          id: "cieb-u10-evidence-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Evaluate fossils as evidence for evolution.",
          parts: [
            { label: "a", prompt: "Explain how fossils form and what they show.", marks: 3 },
            { label: "b", prompt: "Explain how fossils are dated.", marks: 3 },
            { label: "c", prompt: "State one limitation of the fossil record.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Fossils", statement: "Preserved remains in sedimentary layers; dated by position/radioactivity; record is incomplete." },
            ],
            steps: [
              { part: "a", reasoning: "Remains buried in sediment and mineralised.", working: "\\text{buried/mineralised}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Sequence in rock layers shows change over time.", working: "\\text{layers = time}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Older layers simpler, recent more complex.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Relative dating: position in layers.", working: "\\text{relative dating}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Absolute dating: radioactive isotopes.", working: "\\text{radioactive dating}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Gives age in years.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Most organisms never fossilise.", working: "\\text{incomplete record}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Soft-bodied organisms rarely preserved.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Gaps make evidence patchy.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) remains buried/mineralised in sediment; layers show change over time (b) relative dating by position, absolute by radioactive isotopes (c) incomplete record — most organisms never fossilise",
            commonErrors: ["In (b) only mentioning relative dating — absolute dating gives real ages."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieb-u10-evolution-notes",
      title: "Natural selection and evidence — revision notes",
      summary: "Natural selection mechanism, adaptation, evidence for evolution.",
      sections: [
        {
          heading: "Natural selection",
          body: "Variation → selection pressure → best adapted survive/reproduce → advantageous alleles increase → evolution. Examples: antibiotic resistance, peppered moth, Darwin's finches.",
        },
        {
          heading: "Evidence",
          body: "Fossils (sequence in rock layers), selective breeding (rapid change), homologous structures (common ancestor), DNA similarities.",
        },
        {
          heading: "Exam technique",
          body: "- Selection acts on VARIATION, not on individuals changing.\n- Adaptation must be INHERITED.\n- Speciation: isolation → separate evolution → can't interbreed.",
        },
      ],
    },
  ],
};
