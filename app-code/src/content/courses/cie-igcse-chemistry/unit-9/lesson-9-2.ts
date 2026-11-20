import type { Lesson } from "../../../types.ts";

export const lesson192: Lesson = {
  id: "ciecy-u9-lesson-9-2",
  code: "9-2",
  title: "The Nitrogen Cycle",
  goal: "I CAN describe how nitrogen cycles through the atmosphere, soil and living organisms.",
  standards: ["0654 9.2"],
  vocabulary: [
    { term: "Nitrogen fixation", definition: "Converting atmospheric N₂ to usable compounds (nitrates/ammonium)." },
    { term: "Nitrogen-fixing bacteria", definition: "Bacteria converting N₂ → ammonia/nitrates (e.g. Rhizobium)." },
    { term: "Lightning fixation", definition: "N₂ + O₂ → NOx during storms — natural fixation." },
    { term: "Nitrification", definition: "Bacteria oxidising ammonia → nitrite → nitrate." },
    { term: "Denitrification", definition: "Bacteria converting nitrates → N₂ gas (anaerobic)." },
    { term: "Assimilation", definition: "Plants absorb nitrates → amino acids/proteins." },
    { term: "Ammonification", definition: "Decomposers converting proteins → ammonia." },
    { term: "Haber process", definition: "Industrial nitrogen fixation for fertilisers." },
  ],
  concepts: [
    {
      id: "ciecy-u9-nitrogen-cycle",
      title: "Nitrogen cycle processes",
      skill: "Describe fixation, nitrification, assimilation, ammonification and denitrification.",
      lesson: {
        sections: [
          {
            heading: "The cycle",
            body: "**Fixation**: N₂ → nitrates/ammonia (bacteria, lightning, Haber)\n**Nitrification**: NH₃ → NO₂⁻ → NO₃⁻ (Nitrosomonas, Nitrobacter)\n**Assimilation**: plants absorb NO₃⁻/NH₄⁺ → proteins\n**Ammonification**: decomposers → proteins to NH₃\n**Denitrification**: NO₃⁻ → N₂ (Pseudomonas, anaerobic)",
          },
          {
            heading: "Why it matters",
            body: "Plants need nitrogen for proteins/chlorophyll/DNA but cannot use N₂ gas directly. The cycle converts atmospheric N₂ into usable forms. Fertilisers (Haber) add extra nitrogen.",
          },
          {
            heading: "Human impact",
            body: "Excess fertiliser runoff → eutrophication of water bodies (algal blooms → deoxygenation).",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Why can't plants use atmospheric nitrogen directly?",
          solution: "N₂ has a strong triple bond — plants lack enzymes to break it; they need nitrates/ammonium ions absorbed from soil.",
        },
      },
      questions: [
        {
          id: "ciecy-u9-nitrogen-cycle-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is nitrogen fixation?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Removing nitrogen from soil" }, { id: "b", text: "Converting N₂ gas to usable compounds" }, { id: "c", text: "Plants absorbing nitrogen" }, { id: "d", text: "Bacteria dying" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Nitrogen fixation", statement: "N₂ → usable compounds." }],
            steps: [{ reasoning: "Recall.", working: "N_2 \\to \\text{nitrates}", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Converting N₂ gas to usable compounds",
            commonErrors: ["Confusing with denitrification (reverse)."],
          },
        },
        {
          id: "ciecy-u9-nitrogen-cycle-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is denitrification?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Denitrification", statement: "Nitrates → N₂ gas." }],
            steps: [
              { reasoning: "Definition.", marks: 1, markCode: "M" },
              { reasoning: "Complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Denitrification is the conversion of nitrates/nitrites back to nitrogen gas by bacteria (e.g. Pseudomonas) in anaerobic conditions — returning N₂ to atmosphere.",
            commonErrors: ["Saying 'removes nitrogen' — returns to atmosphere."],
          },
        },
        {
          id: "ciecy-u9-nitrogen-cycle-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why plants cannot use atmospheric nitrogen directly.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "N₂ stability", statement: "Triple bond too strong to break." }],
            steps: [
              { reasoning: "N₂ has triple bond.", marks: 1, markCode: "M" },
              { reasoning: "Very stable/strong.", marks: 1, markCode: "M" },
              { reasoning: "Plants lack enzymes to break it.", marks: 1, markCode: "M" },
              { reasoning: "Need nitrates instead.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Atmospheric N₂ has a strong triple bond that plants cannot break — they lack the enzymes; nitrogen must first be fixed into nitrates/ammonium ions by bacteria or industrially.",
            commonErrors: ["Saying 'N₂ is poisonous' — it's inert/stable."],
          },
        },
        {
          id: "ciecy-u9-nitrogen-cycle-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Describe the nitrogen cycle processes.",
          parts: [
            { label: "a", prompt: "Describe nitrogen fixation.", marks: 3 },
            { label: "b", prompt: "Describe nitrification and assimilation.", marks: 3 },
            { label: "c", prompt: "Describe ammonification and denitrification.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Nitrogen cycle", statement: "Fixation→nitrification→assimilation→ammonification→denitrification." }],
            steps: [
              { part: "a", reasoning: "N₂→nitrates/ammonia.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "By bacteria/lightning/Haber.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Complete.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "NH₃→NO₂⁻→NO₃⁻ nitrification.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Plants absorb NO₃⁻→proteins.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Complete.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Decomposers→NH₃ ammonification.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "NO₃⁻→N₂ denitrification.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) N₂→usable (b) nitrification+assimilation (c) ammonification+denitrification",
            commonErrors: ["In (c) mixing up ammonification and denitrification."],
          },
        },
      ],
    },
    {
      id: "ciecy-u9-nitrogen-human",
      title: "Human impact on nitrogen cycle",
      skill: "Explain fertiliser use, eutrophication and solutions.",
      lesson: {
        sections: [
          {
            heading: "Fertilisers",
            body: "Haber process makes NH₃ → fertilisers (NH₄NO₃, (NH₄)₂SO₄, urea). Boost crop yields but excess runoff causes problems.",
          },
          {
            heading: "Eutrophication",
            body: "Excess nitrates/phosphates in water → algal bloom → algae die → decomposers use O₂ → fish die from deoxygenation.",
          },
          {
            heading: "Solutions",
            body: "- Controlled fertiliser application\n- Buffer strips along waterways\n- Sewage treatment removing nitrates\n- Precision farming",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Explain how fertiliser runoff causes fish deaths.",
          solution: "Nitrates → algal bloom → algae die → bacteria decompose using O₂ → dissolved O₂ falls → fish suffocate.",
        },
      },
      questions: [
        {
          id: "ciecy-u9-nitrogen-human-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What causes eutrophication?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Oil spills" }, { id: "b", text: "Excess nitrates/phosphates" }, { id: "c", text: "Acid rain" }, { id: "d", text: "Plastics" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Eutrophication", statement: "Excess nutrients → algal bloom." }],
            steps: [{ reasoning: "Recall.", working: "\\text{nitrates/phosphates}", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Excess nitrates/phosphates",
            commonErrors: ["Oil spills cause different problems."],
          },
        },
        {
          id: "ciecy-u9-nitrogen-human-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the role of decomposers in eutrophication?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Eutrophication", statement: "Decomposers use O₂ breaking down dead algae." }],
            steps: [
              { reasoning: "Decompose dead algae.", marks: 1, markCode: "M" },
              { reasoning: "Consume dissolved O₂.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Decomposers break down the dead algal bloom using oxygen for respiration, depleting dissolved oxygen so fish and other aquatic life suffocate.",
            commonErrors: ["Saying 'algae use the oxygen' — decomposers do."],
          },
        },
        {
          id: "ciecy-u9-nitrogen-human-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the sequence of events in eutrophication.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Eutrophication", statement: "Nutrients→bloom→decompose→O₂ depleted." }],
            steps: [
              { reasoning: "Excess nitrates enter water.", marks: 1, markCode: "M" },
              { reasoning: "Algal bloom forms.", marks: 1, markCode: "M" },
              { reasoning: "Algae die→decomposers use O₂.", marks: 1, markCode: "M" },
              { reasoning: "Fish die from lack of O₂.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Excess nitrates → rapid algal growth (bloom) → algae die → decomposers consume dissolved oxygen → oxygen depleted → fish and aquatic life die.",
            commonErrors: ["Order wrong — bloom before death/decomposition."],
          },
        },
        {
          id: "ciecy-u9-nitrogen-human-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Explain the human impact on the nitrogen cycle and solutions.",
          parts: [
            { label: "a", prompt: "Describe fertiliser use and problem.", marks: 3 },
            { label: "b", prompt: "Describe eutrophication mechanism.", marks: 3 },
            { label: "c", prompt: "State two solutions.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Nitrogen pollution", statement: "Fertilisers→eutrophication→solutions needed." }],
            steps: [
              { part: "a", reasoning: "Haber fertilisers boost crops.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Runoff carries excess nitrates.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Problem stated.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Nitrates→bloom.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Decomposers deplete O₂.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Fish die.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Controlled application.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Sewage treatment/buffer strips.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Two valid.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) fertilisers→runoff (b) bloom→decompose→O₂↓ (c) control application/treatment",
            commonErrors: ["In (c) only one solution."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciecy-u9-nitrogen-notes",
      title: "Nitrogen cycle — revision notes",
      summary: "Fixation, nitrification, assimilation, ammonification, denitrification, eutrophication.",
      sections: [
        {
          heading: "Key facts",
          body: "Fixation: N₂→nitrates (bacteria/lightning/Haber). Nitrification: NH₃→NO₂⁻→NO₃⁻. Assimilation: plants absorb. Ammonification: decomposers→NH₃. Denitrification: →N₂. Eutrophication: excess nutrients→bloom→O₂ depletion.",
        },
        {
          heading: "Exam technique",
          body: "- Plants can't use N₂ (triple bond too strong).\n- Eutrophication sequence: nutrients→bloom→death→decompose→O₂↓.\n- Solutions: controlled fertilisers, sewage treatment.",
        },
      ],
    },
  ],
};
