import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "edialbio-u1-lesson-1-3",
  code: "1-3",
  title: "Enzymes and Cell Division",
  goal: "I CAN explain enzyme action and factors affecting rate, and describe mitosis and meiosis.",
  standards: ["IB1 Cell biology", "Enzymes", "Cell division"],
  vocabulary: [
    { term: "Active site", definition: "Region of an enzyme where the substrate binds; shape is complementary to substrate." },
    { term: "Denature / optimum", definition: "Loss of enzyme shape at extremes / pH and temperature giving maximum rate." },
    { term: "Mitosis", definition: "Nuclear division producing two genetically identical diploid daughter cells." },
    { term: "Meiosis", definition: "Two divisions producing four genetically different haploid gametes." },
  ],
  concepts: [
    {
      id: "edialbio-u1-enzymes",
      title: "Enzyme action and rate of reaction",
      skill: "Explain the lock-and-key / induced-fit model and factors affecting enzyme rate.",
      lesson: {
        sections: [
          {
            heading: "How enzymes work",
            body: "Enzymes are biological catalysts (usually proteins) lowering activation energy. Substrate binds at active site (lock-and-key or induced-fit model) → enzyme-substrate complex → products released, enzyme unchanged. One enzyme catalyses one specific reaction.",
          },
          {
            heading: "Factors affecting rate",
            body: "Temperature: rate rises to optimum (~37°C humans) then falls as enzymes denature. pH: each enzyme has an optimum (e.g. pepsin pH 2, trypsin pH 8); extremes denature. Substrate/enzyme concentration: rate rises then plateaus at saturation. Inhibitors reduce rate.",
          },
          {
            heading: "Applications",
            body: "Enzymes in washing powders (proteases), lactose-free milk (lactase), and industrial fermentations. Immobilised enzymes allow reuse.",
          },
        ],
        keyFormulas: [
          { name: "Key formula", statement: "Rate ∝ collisions between enzyme and substrate below saturation" },
        ],
        workedExample: {
          problem: "Why does the rate of an enzyme reaction plateau at high substrate concentration?",
          solution: "All active sites become occupied (saturation); rate limited by enzyme concentration, not substrate availability.",
        },
      },
      questions: [
        {
          id: "edialbio-enz-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the role of an enzyme in a reaction?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It is consumed as a reactant" },
              { id: "b", text: "It shifts equilibrium" },
              { id: "c", text: "It lowers activation energy" },
              { id: "d", text: "It increases temperature" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Enzyme", statement: "Biological catalyst lowering activation energy." }],
            steps: [{ reasoning: "Enzymes are unchanged at the end and catalyse specific reactions.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Lowers activation energy",
          },
        },
        {
          id: "edialbio-enz-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe how pH affects enzyme activity.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Enzyme pH", statement: "Each enzyme has an optimum pH." }],
            steps: [
              { reasoning: "Each enzyme has an optimum pH for maximum activity.", marks: 1, markCode: "A" },
              { reasoning: "Away from optimum, H⁺/OH⁻ ions disrupt ionic bonds → active site changes shape.", marks: 1, markCode: "M" },
              { reasoning: "Extreme pH denatures enzyme → rate falls to zero.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Optimum pH; extremes denature",
            commonErrors: ["Saying all enzymes prefer pH 7."],
          },
        },
        {
          id: "edialbio-enz-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the plateau in an enzyme rate curve at high substrate concentration.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Saturation", statement: "Rate limited by enzyme amount when all sites occupied." }],
            steps: [
              { reasoning: "At low [S] rate ∝ [S] as more collisions occur.", marks: 1, markCode: "M" },
              { reasoning: "At high [S] all active sites are occupied — enzyme saturated.", marks: 1, markCode: "M" },
              { reasoning: "Further substrate cannot increase rate; limited by enzyme concentration.", marks: 1, markCode: "A" },
              { reasoning: "Conclude Vmax is reached.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Enzyme saturation → Vmax",
            commonErrors: ["Saying reaction 'stops' — it continues at max rate."],
          },
        },
        {
          id: "edialbio-enz-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Explain how temperature affects the rate of an enzyme-catalysed reaction.",
          parts: [
            { label: "a", prompt: "Describe the shape of the rate-temperature curve.", marks: 3 },
            { label: "b", prompt: "Explain the rise in rate below the optimum.", marks: 3 },
            { label: "c", prompt: "Explain the fall above the optimum.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Temperature & enzymes", statement: "Collision frequency vs denaturation." }],
            steps: [
              { part: "a", reasoning: "Rate rises steeply to optimum (~37°C for human enzymes), then falls sharply to zero.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Optimum where activity is maximal.", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Describe curve shape.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Higher temperature → more kinetic energy → more frequent enzyme-substrate collisions.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Molecules move faster → more exceed activation energy.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Rate increases until optimum.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Above optimum, heat disrupts bonds maintaining tertiary structure.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Active site deforms → substrate no longer binds.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Denaturation is irreversible; more molecules denature as T rises.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Rate falls to zero at high T.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Rise to optimum, then denaturation causes fall",
            commonErrors: ["Ignoring denaturation; describing Q10 only."],
          },
        },
      ],
    },
    {
      id: "edialbio-u1-cell-division",
      title: "Mitosis and meiosis",
      skill: "Describe the stages of mitosis and meiosis and compare their outcomes.",
      lesson: {
        sections: [
          {
            heading: "Mitosis",
            body: "Stages: prophase (chromosomes condense), metaphase (align at equator), anaphase (sister chromatids separate), telophase/cytokinesis (two nuclei form). Produces two diploid, genetically identical cells used for growth, repair and asexual reproduction.",
          },
          {
            heading: "Meiosis",
            body: "Two divisions. Meiosis I: homologous chromosomes pair (synapsis), crossing over exchanges segments, then separate → two haploid cells. Meiosis II: sister chromatids separate → four haploid gametes, genetically different due to crossing over and independent assortment.",
          },
          {
            heading: "Comparison",
            body: "Mitosis: 1 division, 2 diploid identical cells. Meiosis: 2 divisions, 4 haploid varied cells. Errors like non-disjunction cause abnormal chromosome numbers (e.g. Down syndrome).",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Why are gametes haploid?",
          solution: "Meiosis halves chromosome number so fertilisation restores diploid number in the zygote.",
        },
      },
      questions: [
        {
          id: "edialbio-div-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many daughter cells does meiosis produce, and what is their chromosome number?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "2 diploid" },
              { id: "b", text: "2 haploid" },
              { id: "c", text: "4 diploid" },
              { id: "d", text: "4 haploid" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Meiosis", statement: "Two divisions → 4 haploid gametes." }],
            steps: [{ reasoning: "Direct fact.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** 4 haploid",
          },
        },
        {
          id: "edialbio-div-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "State two differences between mitosis and meiosis.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Mitosis vs meiosis", statement: "Division count, ploidy, genetic identity." }],
            steps: [
              { reasoning: "Mitosis: one division → 2 diploid cells; meiosis: two divisions → 4 haploid cells.", marks: 1, markCode: "A" },
              { reasoning: "Mitosis produces genetically identical cells; meiosis produces genetically different gametes (crossing over, independent assortment).", marks: 1, markCode: "A" },
              { reasoning: "Mitosis for growth/repair; meiosis for gamete formation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Any two valid differences",
            commonErrors: ["Saying meiosis produces identical cells."],
          },
        },
        {
          id: "edialbio-div-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the significance of crossing over in meiosis.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Variation", statement: "Crossing over creates new allele combinations." }],
            steps: [
              { reasoning: "During prophase I, homologous chromosomes exchange segments at chiasmata.", marks: 1, markCode: "M" },
              { reasoning: "Creates gametes with new combinations of alleles.", marks: 1, markCode: "M" },
              { reasoning: "Increases genetic variation in offspring → adaptation and evolution.", marks: 1, markCode: "A" },
              { reasoning: "Conclude.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "New allele combinations → genetic variation",
            commonErrors: ["Confusing crossing over with mutation."],
          },
        },
        {
          id: "edialbio-div-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Describe the stages of mitosis.",
          parts: [
            { label: "a", prompt: "Prophase and metaphase.", marks: 4 },
            { label: "b", prompt: "Anaphase and telophase/cytokinesis.", marks: 4 },
            { label: "c", prompt: "State two roles of mitosis in organisms.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Mitosis stages", statement: "PMAT." }],
            steps: [
              { part: "a", reasoning: "Prophase: chromosomes condense, nuclear envelope breaks down, spindle forms.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Metaphase: chromosomes line up at equator (metaphase plate), spindle fibres attach.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Describe both stages.", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Correct terminology.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Anaphase: sister chromatids separate, pulled to opposite poles.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Telophase: nuclear envelopes reform, chromosomes decondense.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Cytokinesis: cytoplasm divides → two daughter cells.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Describe both.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Growth / repair / asexual reproduction (any two).", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Second valid role.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "PMAT + cytokinesis → two identical diploid cells",
            commonErrors: ["Saying chromatids separate in metaphase."],
          },
        },
      ],
    },
  ],
};
