import type { Lesson } from "../../../types.ts";

export const lesson1101: Lesson = {
  id: "ciecy-u10-lesson-10-1",
  code: "10-1",
  title: "Organic Chemistry",
  goal: "I CAN describe hydrocarbons, homologous series, functional groups and common organic reactions.",
  standards: ["0654 10.1", "0654 10.2"],
  vocabulary: [
    { term: "Organic compound", definition: "Compound containing C-H bonds; based on carbon chains." },
    { term: "Hydrocarbon", definition: "Compound of only C and H (alkanes, alkenes, alkynes)." },
    { term: "Alkane", definition: "Saturated hydrocarbon CnH2n+2; single bonds only (methane, ethane)." },
    { term: "Alkene", definition: "Unsaturated hydrocarbon CnH2n; contains C=C double bond (ethene, propene)." },
    { term: "Homologous series", definition: "Family with same general formula and similar properties." },
    { term: "Functional group", definition: "Atom/group responsible for characteristic reactions (–OH alcohol, –COOH acid)." },
    { term: "Ethanol", definition: "CH₃CH₂OH — alcohol used in drinks, fuel, solvents." },
    { term: "Ethanoic acid", definition: "CH₃COOH — carboxylic acid in vinegar." },
  ],
  concepts: [
    {
      id: "ciecy-u10-hydrocarbons",
      title: "Hydrocarbons and homologous series",
      skill: "Distinguish alkanes and alkenes and describe their properties and reactions.",
      lesson: {
        sections: [
          {
            heading: "Alkanes vs alkenes",
            body: "| | Alkane | Alkene |\n|---|---|---|\n| Formula | CnH2n+2 | CnH2n |\n| Bonds | single only (saturated) | C=C (unsaturated) |\n| Examples | methane CH₄, ethane C₂H₆ | ethene C₂H₄, propene C₃H₆ |\n| Reactivity | unreactive | undergo addition reactions |",
          },
          {
            heading: "Alkene reactions",
            body: "- **Addition**: C=C opens → adds across (H₂, Br₂, steam).\n- **Bromine water test**: orange → colourless = unsaturated (alkene).\n- Combustion: incomplete → CO (toxic); complete → CO₂ + H₂O.",
          },
          {
            heading: "Cracking",
            body: "Breaking long-chain alkanes into shorter alkanes + alkenes using heat/catalyst — makes more useful fuels (petrol) and alkenes for plastics.",
          },
        ],
        keyFormulas: [
          { name: "Alkane formula", statement: "$C_nH_{2n+2}$" },
          { name: "Alkene formula", statement: "$C_nH_{2n}$" },
        ],
        workedExample: {
          problem: "What is the molecular formula of an alkene with 4 carbons?",
          solution: "CnH2n with n=4 → C₄H₈ (butene).",
        },
      },
      questions: [
        {
          id: "ciecy-u10-hydrocarbons-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the general formula of alkenes?",
          response: { type: "mcq", choices: [
            { id: "a", text: "CnH2n+2" }, { id: "b", text: "CnH2n" }, { id: "c", text: "CnH2n-2" }, { id: "d", text: "CnHn" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "property", name: "Alkene formula", statement: "CnH2n." }],
            steps: [{ reasoning: "Recall.", working: "C_nH_{2n}", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** CnH2n",
            commonErrors: ["Confusing with alkane CnH2n+2."],
          },
        },
        {
          id: "ciecy-u10-hydrocarbons-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "State the test for an unsaturated hydrocarbon.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "property", name: "Bromine water test", statement: "Orange → colourless = alkene." }],
            steps: [
              { reasoning: "Method.", marks: 1, markCode: "M" },
              { reasoning: "Result interpretation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Bromine water: orange colour disappears (becomes colourless) if the hydrocarbon is unsaturated (alkene).",
            commonErrors: ["Saying 'turns blue' — it decolourises."],
          },
        },
        {
          id: "ciecy-u10-hydrocarbons-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why alkenes are more reactive than alkanes.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Alkene reactivity", statement: "C=C bond weaker/easier to break → addition reactions." }],
            steps: [
              { reasoning: "Alkenes have C=C double bond.", marks: 1, markCode: "M" },
              { reasoning: "Double bond weaker than single → breaks easily.", marks: 1, markCode: "M" },
              { reasoning: "Allows addition reactions.", marks: 1, markCode: "M" },
              { reasoning: "Conclude.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The C=C double bond in alkenes is weaker and more accessible than single bonds in alkanes, allowing addition reactions — making alkenes more reactive.",
            commonErrors: ["Saying alkanes are 'inert' — they're just less reactive."],
          },
        },
        {
          id: "ciecy-u10-hydrocarbons-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Describe cracking and its industrial importance.",
          parts: [
            { label: "a", prompt: "Define cracking.", marks: 2 },
            { label: "b", prompt: "Explain the conditions needed.", marks: 3 },
            { label: "c", prompt: "State two products and their uses.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "property", name: "Cracking", statement: "Break long alkanes → shorter alkanes + alkenes." }],
            steps: [
              { part: "a", reasoning: "Breaking long-chain hydrocarbons.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Into shorter chains.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "High temperature.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Catalyst (silica/alumina).", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Complete conditions.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Shorter alkanes → petrol.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Alkenes → plastics/chemicals.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Any valid uses.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) break long chains (b) heat+catalyst (c) short alkanes→petrol, alkenes→plastics",
            commonErrors: ["In (c) not linking products to uses."],
          },
        },
      ],
    },
    {
      id: "ciecy-u10-functional-groups",
      title: "Functional groups: alcohols and carboxylic acids",
      skill: "Describe alcohols and carboxylic acids, their properties and reactions.",
      lesson: {
        sections: [
          {
            heading: "Alcohols (–OH)",
            body: "General formula CnH2n+1OH. Ethanol CH₃CH₂OH.\n- Uses: drinks, fuel, solvent, antiseptic.\n- Reactions: combustion, fermentation (yeast: glucose → ethanol + CO₂), oxidation → ethanoic acid.",
          },
          {
            heading: "Carboxylic acids (–COOH)",
            body: "Ethanoic acid CH₃COOH (vinegar).\n- Weak acids (pH 4-5), react with carbonates → CO₂.\n- React with alcohols → esters (fruity smells, flavourings).",
          },
          {
            heading: "Esterification",
            body: "Carboxylic acid + alcohol → **ester + water** (catalyst: acid). E.g. ethanoic acid + ethanol → ethyl ethanoate (pear flavour).",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "What is produced when ethanol is oxidised?",
          solution: "Ethanoic acid (CH₃COOH) — the –OH group oxidises to –COOH.",
        },
      },
      questions: [
        {
          id: "ciecy-u10-functional-groups-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the functional group of alcohols?",
          response: { type: "mcq", choices: [
            { id: "a", text: "–COOH" }, { id: "b", text: "–OH" }, { id: "c", text: "C=C" }, { id: "d", text: "–CHO" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "property", name: "Alcohol group", statement: "–OH hydroxyl." }],
            steps: [{ reasoning: "Recall.", working: "-OH", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** –OH",
            commonErrors: ["–COOH is carboxylic acid."],
          },
        },
        {
          id: "ciecy-u10-functional-groups-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "State two uses of ethanol.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "property", name: "Ethanol uses", statement: "Fuel, solvent, drinks, antiseptic." }],
            steps: [
              { reasoning: "Any two uses.", marks: 1, markCode: "M" },
              { reasoning: "Complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Fuel (bioethanol), solvent, alcoholic drinks, antiseptic.",
            commonErrors: ["Only one use."],
          },
        },
        {
          id: "ciecy-u10-functional-groups-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the fermentation of glucose to ethanol.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "property", name: "Fermentation", statement: "Yeast converts glucose → ethanol + CO₂." }],
            steps: [
              { reasoning: "Yeast enzymes.", marks: 1, markCode: "M" },
              { reasoning: "Anaerobic conditions.", marks: 1, markCode: "M" },
              { reasoning: "Products: ethanol + CO₂.", marks: 1, markCode: "M" },
              { reasoning: "Conclude.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Yeast enzymes ferment glucose anaerobically to produce ethanol and carbon dioxide — used in brewing and biofuel production.",
            commonErrors: ["Including oxygen — fermentation is anaerobic."],
          },
        },
        {
          id: "ciecy-u10-functional-groups-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Describe the reaction between a carboxylic acid and an alcohol.",
          parts: [
            { label: "a", prompt: "Name the reaction and products.", marks: 2 },
            { label: "b", prompt: "Give the general equation.", marks: 2 },
            { label: "c", prompt: "State two uses of esters.", marks: 2 },
            { label: "d", prompt: "Give a specific example.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "property", name: "Esterification", statement: "Acid + alcohol → ester + water." }],
            steps: [
              { part: "a", reasoning: "Esterification.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Ester + water.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "RCOOH + R'OH → RCOOR' + H₂O.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct general equation.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Flavourings/fragrances.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Solvents/plastics.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Ethanoic acid + ethanol.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "→ ethyl ethanoate (pear smell).", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Complete example.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) esterification→ester+water (b) RCOOH+R'OH→RCOOR'+H₂O (c) flavourings/solvents (d) ethyl ethanoate",
            commonErrors: ["In (d) wrong ester name — it's ethyl ethanoate."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciecy-u10-organic-notes",
      title: "Organic chemistry — revision notes",
      summary: "Alkanes CnH2n+2, alkenes CnH2n, functional groups, fermentation, esterification.",
      sections: [
        {
          heading: "Key facts",
          body: "Alkane: saturated, unreactive. Alkene: C=C, addition rxns, bromine water test. Alcohol –OH, carboxylic acid –COOH. Fermentation: glucose→ethanol+CO₂ (yeast, anaerobic). Esterification: acid+alcohol→ester+water.",
        },
        {
          heading: "Exam technique",
          body: "- Match functional group to compound type.\n- Unsaturated test: bromine water decolourises.",
        },
      ],
    },
  ],
};
