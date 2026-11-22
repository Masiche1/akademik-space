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
            { id: "a", text: "Circulatory" },
            { id: "b", text: "Nervous" },
            { id: "c", text: "Respiratory" },
            { id: "d", text: "Digestive" },
          ], correctChoiceId: "a" },
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
        {
          id: "cips-u2-sr-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which system takes in oxygen and removes carbon dioxide?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Circulatory" },
            { id: "b", text: "Muscular" },
            { id: "c", text: "Digestive" },
            { id: "d", text: "Respiratory" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "definition", name: "Respiratory system", statement: "Lungs exchange gases." }],
            steps: [{ reasoning: "The lungs (respiratory system) exchange oxygen and carbon dioxide.", marks: 1, markCode: "A" }],
            finalAnswer: "Respiratory",
          },
        },
        {
          id: "cips-u2-sr-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which rock type forms from cooled magma?",
          response: { type: "mcq", choices: [
            { id: "a", text: "All of them" },
            { id: "b", text: "Igneous" },
            { id: "c", text: "Sedimentary" },
            { id: "d", text: "Metamorphic" },
          ], borrectChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Igneous", statement: "Formed from cooled magma/lava." }],
            steps: [{ reasoning: "Cooled magma → igneous rock.", marks: 1, markCode: "A" }],
            finalAnswer: "Igneous",
          },
        },
        {
          id: "cips-u2-sr-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many main rock types are there?",
          response: { type: "numeric", parts: [{ label: "a", answer: 3, unit: "types" }] },
          markscheme: {
            principles: [{ kind: "definition", name: "Rock types", statement: "Igneous, sedimentary, metamorphic." }],
            steps: [{ reasoning: "There are 3 rock types.", marks: 1, markCode: "M" }],
            finalAnswer: "3",
          },
        },
        {
          id: "cips-u2-sr-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "In a reaction test, 4 out of 6 samples show a colour change. How many samples show NO colour change?",
          response: { type: "numeric", parts: [{ label: "a", answer: 2, unit: "samples" }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Reactions", statement: "Subtract to find no change." }],
            steps: [
              { reasoning: "$6 - 4 = 2$.", marks: 1, markCode: "M" },
              { reasoning: "2 samples show no colour change.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2",
          },
        },
        {
          id: "cips-u2-sr-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which rock often contains fossils?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Obsidian" },
            { id: "b", text: "Slate" },
            { id: "c", text: "Limestone" },
            { id: "d", text: "Granite" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Sedimentary", statement: "May contain fossils." }],
            steps: [{ reasoning: "Limestone is sedimentary — may contain fossils.", marks: 1, markCode: "A" }],
            finalAnswer: "Limestone",
          },
        },
        {
          id: "cips-u2-sr-q10",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name two things the circulatory system transports.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Circulatory", statement: "Transports oxygen, nutrients, waste." }],
            steps: [
              { reasoning: "First item (e.g. oxygen).", marks: 1, markCode: "M" },
              { reasoning: "Second (e.g. nutrients or waste).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "e.g. oxygen and nutrients",
          },
        },
        {
          id: "cips-u2-sr-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how the heart and lungs work together during breathing.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Body systems", statement: "Respiratory + circulatory linked." }],
            steps: [
              { reasoning: "Lungs take in oxygen and remove carbon dioxide.", marks: 1, markCode: "M" },
              { reasoning: "Oxygen enters blood in the lungs.", marks: 1, markCode: "M" },
              { reasoning: "Heart pumps that blood to body cells.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Lungs oxygenate blood; heart pumps it to cells",
          },
        },
        {
          id: "cips-u2-sr-q12",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "What evidence shows a chemical reaction has happened?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Gas bubbles or colour change appear" },
            { id: "b", text: "The material gets colder only" },
            { id: "c", text: "It becomes heavier" },
            { id: "d", text: "Nothing changes" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Reaction evidence", statement: "Gas, colour, temperature changes." }],
            steps: [{ reasoning: "Gas bubbles or colour change are evidence of a reaction.", marks: 1, markCode: "A" }],
            finalAnswer: "Gas bubbles or colour change",
          },
        },
        {
          id: "cips-u2-sr-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "A rock collection has 9 rocks: 4 igneous, 3 sedimentary and 2 metamorphic. How many rocks are NOT igneous?",
          response: { type: "numeric", parts: [{ label: "a", answer: 5, unit: "rocks" }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Rock types", statement: "Subtract igneous from total." }],
            steps: [
              { reasoning: "$9 - 4 = 5$ (or $3 + 2 = 5$).", marks: 1, markCode: "M" },
              { reasoning: "5 rocks are not igneous.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "5",
          },
        },
        {
          id: "cips-u2-sr-q14",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A rock has crystals and forms from cooled lava. Identify its type and explain.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Rock identification", statement: "Crystals + cooled lava = igneous." }],
            steps: [
              { reasoning: "Crystals suggest cooled molten rock.", marks: 1, markCode: "M" },
              { reasoning: "Cooled lava = igneous formation.", marks: 1, markCode: "M" },
              { reasoning: "Answer: igneous rock.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Igneous — cooled lava with crystals",
          },
        },
        {
          id: "cips-u2-sr-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "What changes existing rock into metamorphic rock?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Heat and pressure" },
            { id: "b", text: "Wind only" },
            { id: "c", text: "Water only" },
            { id: "d", text: "Sunlight" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Metamorphic", statement: "Heat + pressure change rock." }],
            steps: [{ reasoning: "Heat and pressure form metamorphic rocks.", marks: 1, markCode: "A" }],
            finalAnswer: "Heat and pressure",
          },
        },
        {
          id: "cips-u2-sr-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "(a) What does the circulatory system transport? (b) What does the respiratory system do? (c) Name two signs of a chemical reaction. (d) Is rusting reversible? Why? (e) Name the three rock types. (f) How does each rock type form? (g) Give an example of each rock type. (h) Why do sedimentary rocks contain fossils?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Body systems, reactions, rocks", statement: "Integrated Stage 6 answer." }],
            steps: [
              { reasoning: "(a) Oxygen, nutrients, waste via heart/blood.", marks: 1, markCode: "M" },
              { reasoning: "(b) Lungs take in O2, remove CO2.", marks: 1, markCode: "M" },
              { reasoning: "(c) e.g. gas bubbles, colour change, temperature change.", marks: 1, markCode: "M" },
              { reasoning: "(d) No — new substance (rust) forms permanently.", marks: 1, markCode: "M" },
              { reasoning: "(e) Igneous, sedimentary, metamorphic.", marks: 1, markCode: "M" },
              { reasoning: "(f) Igneous=cool magma; sedimentary=compress sediment; metamorphic=heat+pressure.", marks: 1, markCode: "M" },
              { reasoning: "(g) e.g. granite/basalt; sandstone/limestone; marble/slate.", marks: 1, markCode: "M" },
              { reasoning: "(h) Shells/skeletons are sediment trapped in layers.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Body systems, reaction evidence, reversibility, rock types/formations/examples, fossils.",
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
