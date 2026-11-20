import type { Lesson } from "../../../types.ts";

export const lesson1113: Lesson = {
  id: "olchem-u11-lesson-11-3",
  code: "11-3",
  title: "Tests for Organic Compounds",
  goal: "I CAN perform chemical tests for organic compounds: unsaturation, sugars, starch, proteins and lipids.",
  standards: ["5070 11.3"],
  vocabulary: [
    { term: "Benedict's test", definition: "Tests for reducing sugars — blue→orange/red precipitate on heating." },
    { term: "Iodine test", definition: "Tests for starch — brown→blue-black." },
    { term: "Biuret test", definition: "Tests for protein — blue→purple with NaOH + CuSO₄." },
    { term: "Emulsion test", definition: "Tests for lipids — cloudy white emulsion with ethanol." },
    { term: "Bromine water test", definition: "Tests unsaturation — orange→colourless." },
    { term: "Reducing sugar", definition: "Sugar that reduces Benedict's reagent (glucose, maltose)." },
    { term: "Non-reducing sugar", definition: "Sucrose — needs hydrolysis first before Benedict's." },
    { term: "Denaturation", definition: "Protein unfolding — Biuret still positive but structure lost." },
  ],
  concepts: [
    {
      id: "olchem-u11-food-tests",
      title: "Food tests",
      skill: "Perform and interpret tests for starch, sugars, protein and lipids.",
      lesson: {
        sections: [
          {
            heading: "Test table",
            body: "| Substance | Reagent | Positive result |\n|---|---|---|\n| Starch | Iodine | blue-black |\n| Reducing sugar | Benedict's + heat | orange/red ppt |\n| Protein | Biuret (NaOH+CuSO₄) | purple |\n| Lipid | Ethanol + water | cloudy emulsion |\n| Unsaturation | Bromine water | decolourises |",
          },
          {
            heading: "Benedict's detail",
            body: "Blue Cu²⁺ → green → yellow → orange → red precipitate depending on sugar concentration. Must heat in water bath ~80°C. Non-reducing sugars (sucrose) give negative until hydrolysed.",
          },
          {
            heading: "Biuret detail",
            body: "Add NaOH then few drops CuSO₄. Peptide bonds form purple complex. Denatured proteins still give positive (peptide bonds intact).",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "A food sample turns Benedict's orange on heating and gives purple with Biuret. What does it contain?",
          solution: "Reducing sugar (orange Benedict's) and protein (purple Biuret).",
        },
      },
      questions: [
        {
          id: "olchem-u11-food-tests-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which reagent tests for starch?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Benedict's" }, { id: "b", text: "Iodine" }, { id: "c", text: "Biuret" }, { id: "d", text: "Ethanol" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "technique", name: "Starch test", statement: "Iodine → blue-black." }],
            steps: [{ reasoning: "Recall.", working: "\\text{iodine}", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Iodine",
            commonErrors: ["Benedict's is for sugars."],
          },
        },
        {
          id: "olchem-u11-food-tests-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What colour does Benedict's turn for a positive reducing sugar test?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "property", name: "Benedict's", statement: "Blue→orange/red." }],
            steps: [
              { reasoning: "Colour change.", marks: 1, markCode: "M" },
              { reasoning: "Complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "From blue to orange/red precipitate (green/yellow intermediate depending on concentration).",
            commonErrors: ["Saying 'stays blue' — that's negative."],
          },
        },
        {
          id: "olchem-u11-food-tests-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Describe the Biuret test for protein.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Biuret", statement: "NaOH+CuSO₄→purple." }],
            steps: [
              { reasoning: "Add NaOH first.", marks: 1, markCode: "M" },
              { reasoning: "Then few drops CuSO₄.", marks: 1, markCode: "M" },
              { reasoning: "Purple = positive.", marks: 1, markCode: "M" },
              { reasoning: "Complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Add sodium hydroxide then a few drops of copper(II) sulfate; a purple colour indicates peptide bonds (protein present).",
            commonErrors: ["Adding CuSO₄ first — NaOH must be first."],
          },
        },
        {
          id: "olchem-u11-food-tests-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Describe food tests for starch, reducing sugar, protein and lipid.",
          parts: [
            { label: "a", prompt: "Starch and reducing sugar tests.", marks: 4 },
            { label: "b", prompt: "Protein test.", marks: 2 },
            { label: "c", prompt: "Lipid test.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Food tests", statement: "Iodine/Benedict's/Biuret/ethanol." }],
            steps: [
              { part: "a", reasoning: "Starch: iodine→blue-black.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Sugar: Benedict's+heat→orange.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Complete.", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Both correct.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Biuret: NaOH+CuSO₄→purple.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Complete.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Ethanol dissolve→add water.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Cloudy emulsion=positive.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) iodine/Benedict's (b) Biuret purple (c) ethanol→emulsion",
            commonErrors: ["In (c) using iodine — that's starch."],
          },
        },
      ],
    },
    {
      id: "olchem-u11-unsaturation-test",
      title: "Test for unsaturation",
      skill: "Use bromine water to test for C=C bonds in organic compounds.",
      lesson: {
        sections: [
          {
            heading: "The test",
            body: "Add bromine water (orange) to compound.\n- Unsaturated (alkene/alkyne): Br₂ adds across C=C → orange colour disappears\n- Saturated (alkane): no reaction → stays orange",
          },
          {
            heading: "Chemistry",
            body: "C₂H₄ + Br₂ → C₂H₄Br₂ — addition reaction. The orange Br₂ colour is consumed forming colourless dibromo compound.",
          },
          {
            heading: "Distinguishing",
            body: "Bromine water distinguishes unsaturated from saturated compounds — more specific than combustion tests.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Propene decolourises bromine water but propane doesn't. Explain.",
          solution: "Propene has C=C → Br₂ adds across it; propane saturated → no reaction.",
        },
      },
      questions: [
        {
          id: "olchem-u11-unsaturation-test-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What colour is bromine water?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Colourless" }, { id: "b", text: "Orange" }, { id: "c", text: "Blue" }, { id: "d", text: "Green" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "property", name: "Bromine water", statement: "Orange." }],
            steps: [{ reasoning: "Recall.", working: "\\text{orange}", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Orange",
            commonErrors: ["Colourless is the positive result."],
          },
        },
        {
          id: "olchem-u11-unsaturation-test-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What does decolourisation of bromine water indicate?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "property", name: "Unsaturation test", statement: "C=C present." }],
            steps: [
              { reasoning: "Unsaturation indicated.", marks: 1, markCode: "M" },
              { reasoning: "Complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The compound is unsaturated — contains C=C or C≡C bonds that react with Br₂ by addition.",
            commonErrors: ["Saying 'contains bromine' — it consumed it."],
          },
        },
        {
          id: "olchem-u11-unsaturation-test-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why ethene decolourises bromine water but ethane doesn't.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Unsaturation", statement: "C=C allows addition of Br₂." }],
            steps: [
              { reasoning: "Ethene has C=C.", marks: 1, markCode: "M" },
              { reasoning: "Br₂ adds across bond.", marks: 1, markCode: "M" },
              { reasoning: "Ethane saturated — no C=C.", marks: 1, markCode: "M" },
              { reasoning: "Conclude.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Ethene's C=C double bond undergoes addition with Br₂, consuming the orange colour; ethane is saturated (single bonds only) so no reaction occurs.",
            commonErrors: ["Saying 'ethane is weaker' — it's saturation."],
          },
        },
        {
          id: "olchem-u11-unsaturation-test-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Describe and explain the bromine water test for unsaturation.",
          parts: [
            { label: "a", prompt: "Describe the test.", marks: 3 },
            { label: "b", prompt: "Explain positive result.", marks: 3 },
            { label: "c", prompt: "Contrast with saturated compound.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Bromine test", statement: "Orange→colourless if unsaturated." }],
            steps: [
              { part: "a", reasoning: "Add bromine water.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Shake/observe.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Complete.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Colourless=Br₂ consumed.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "C=C addition reaction.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Unsaturated.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Saturated: stays orange.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "No C=C to react.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Conclude.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) add+observe (b) colourless=C=C addition (c) orange stays=saturated",
            commonErrors: ["In (b) not linking to addition reaction."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "olchem-u11-organic-tests-notes",
      title: "Tests for organic compounds — revision notes",
      summary: "Iodine/Benedict's/Biuret/ethanol tests, bromine water for unsaturation.",
      sections: [
        {
          heading: "Key facts",
          body: "Starch: iodine→blue-black. Reducing sugar: Benedict's+heat→orange/red. Protein: Biuret→purple. Lipid: ethanol→emulsion. Unsaturation: Br₂ water→colourless.",
        },
        {
          heading: "Exam technique",
          body: "- Benedict's needs heating.\n- Biuret: NaOH before CuSO₄.\n- Bromine water: colourless=unsaturated.",
        },
      ],
    },
  ],
};
