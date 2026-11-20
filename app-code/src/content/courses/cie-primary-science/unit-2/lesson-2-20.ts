import type { Lesson } from "../../../types.ts";

export const lesson220: Lesson = {
  id: "cips-u2-lesson-2-20",
  code: "2-20",
  title: "Stage 6 — Body Systems, Reactions and Rock Types",
  goal: "I CAN describe body systems, chemical reactions and classify rocks.",
  standards: ["Cambridge Primary Science 0097 Stage 6: biology, chemistry and Earth",
  "Cambridge Primary Science 0097 framework substrands: 6Bs, 6Bp, 6Cc, 6ESp, 6TWSa"],
  stage: 6,
  vocabulary: [
    { term: "Circulatory system", definition: "Heart, blood vessels and blood transporting materials." },
    { term: "Respiratory system", definition: "Lungs taking in oxygen and removing carbon dioxide." },
    { term: "Chemical reaction", definition: "Process producing new substances." },
    { term: "Igneous rock", definition: "Rock formed from cooled magma or lava." },
    { term: "Sedimentary rock", definition: "Rock formed from compressed sediments." },
  ],
  concepts: [
    {
      id: "cips-u2-s20-systems-rocks",
      title: "Body systems, reactions and rock types",
      skill: "Describe human body systems, identify chemical reactions and classify rocks at Stage 6 level.",
      lesson: {
        sections: [
          {
            heading: "Body systems and reactions",
            body: "The circulatory system (heart, blood vessels, blood) transports oxygen, nutrients and waste. The respiratory system (lungs) takes in oxygen and removes carbon dioxide. Chemical reactions produce new substances — evidence includes gas bubbles, colour change, temperature change. Burning, rusting and cooking are irreversible chemical changes.",
          },
          {
            heading: "Rock types",
            body: "Igneous rocks form from cooled magma/lava (granite, basalt) — hard and crystalline. Sedimentary rocks form from layers of sediment compressed over time (sandstone, limestone) — often layered with fossils. Metamorphic rocks form when existing rocks are changed by heat and pressure (marble, slate) — harder and often striped.",
          },
        ],
        keyFormulas: [
          { name: "Body systems", statement: "circulatory transports; respiratory exchanges gases" },
          { name: "Reactions", statement: "new substances; evidence = gas/colour/temp change" },
          { name: "Rocks", statement: "igneous=magma, sedimentary=sediment, metamorphic=heat+pressure" },
        ],
        workedExample: {
          problem: "A rock has layers and contains fossils — what type is it?",
          solution: "Sedimentary — formed from compressed sediment layers.",
        },
      },
      questions: [
        {
          id: "cips-u2-sr-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which system transports oxygen around the body?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Respiratory" }, { id: "b", text: "Circulatory" }, { id: "c", text: "Digestive" }, { id: "d", text: "Nervous" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Circulatory system", statement: "Heart+blood transport." }],
            steps: [{ reasoning: "Blood carries oxygen via circulatory system.", marks: 1, markCode: "A" }],
            finalAnswer: "Circulatory",
          },
        },
        {
          id: "cips-u2-sr-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name two signs that a chemical reaction has occurred.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Reaction evidence", statement: "Gas, colour change, temperature change." }],
            steps: [
              { reasoning: "Any two: gas bubbles, colour change, temp change, precipitate.", marks: 1, markCode: "M" },
              { reasoning: "Answer stated.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "e.g. gas bubbles and colour change",
          },
        },
        {
          id: "cips-u2-sr-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Classify: granite, sandstone, marble — igneous, sedimentary or metamorphic?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Rock types", statement: "Formation determines type." }],
            steps: [
              { reasoning: "Granite = igneous (magma).", marks: 1, markCode: "M" },
              { reasoning: "Sandstone = sedimentary (layers).", marks: 1, markCode: "M" },
              { reasoning: "Marble = metamorphic (heat/pressure).", marks: 1, markCode: "M" },
            ],
            finalAnswer: "granite=igneous, sandstone=sedimentary, marble=metamorphic",
          },
        },
        {
          id: "cips-u2-sr-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Describe the function of the heart in the circulatory system. (b) Give two pieces of evidence that rusting is a chemical reaction. (c) Explain how igneous and sedimentary rocks form differently. Show reasoning.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Body systems, reactions, rocks", statement: "Functions + evidence + formation." }],
            steps: [
              { reasoning: "(a) Pumps blood around body carrying oxygen/nutrients.", marks: 1, markCode: "M" },
              { reasoning: "(b) Colour changes (orange→brown); new substance forms.", marks: 1, markCode: "M" },
              { reasoning: "(c) Igneous: magma/lava cools; sedimentary: sediment compresses.", marks: 1, markCode: "M" },
              { reasoning: "Different formation processes explained.", marks: 1, markCode: "M" },
              { reasoning: "Heart function accurate.", marks: 1, markCode: "M" },
              { reasoning: "Reaction evidence correctly identified.", marks: 1, markCode: "M" },
              { reasoning: "All parts attempted.", marks: 1, markCode: "M" },
              { reasoning: "All answers correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) pumps blood (b) colour change + new substance (c) igneous=cooling magma, sedimentary=compressed sediment",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cips-u2-sr-notes",
      title: "Systems, reactions, rocks — notes",
      summary: "Circulatory transports, respiratory exchanges; reactions produce new substances; 3 rock types by formation.",
      sections: [
        { heading: "Body/reactions", body: "Heart pumps blood; lungs exchange gases; reactions = new substances with evidence." },
        { heading: "Rocks", body: "Igneous=magma cooled; sedimentary=layers; metamorphic=heat+pressure." },
      ],
    },
  ],
};
