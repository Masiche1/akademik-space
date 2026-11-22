import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "cils-u2-lesson-2-1",
  code: "2-1",
  title: "Characteristics of living things",
  goal: "I CAN identify the seven characteristics of living things and apply them to classify organisms.",
  standards: ["0893 Biology: characteristics of living things"],
  vocabulary: [
    { term: "Nutrition", definition: "Obtaining food/energy — eating or photosynthesising." },
    { term: "Respiration", definition: "Releasing energy from food using oxygen." },
    { term: "Sensitivity", definition: "Detecting and responding to changes in surroundings." },
    { term: "Growth", definition: "Permanent increase in size or cell number." },
    { term: "Reproduction", definition: "Producing offspring to continue the species." },
    { term: "Excretion", definition: "Removing waste products from the body." },
    { term: "Movement", definition: "Changing position — whole organism or parts of it." },
  ],
  concepts: [
    {
      id: "cils-u2-characteristics",
      title: "Seven characteristics (MRS GREN)",
      skill: "Recall and apply the seven life processes to distinguish living from non-living.",
      lesson: {
        sections: [
          {
            heading: "MRS GREN",
            body: "**M**ovement, **R**espiration, **S**ensitivity, **G**rowth, **R**eproduction, **E**xcretion, **N**utrition.\n\nAll seven needed for 'living'. Missing one → not fully living (e.g. viruses reproduce but don't respire independently).",
          },
          {
            heading: "Movement vs growth",
            body: "Movement = changing position (animals walk, plants grow towards light). Growth = permanent size increase. A balloon inflating isn't growth — air isn't living tissue.",
          },
          {
            heading: "Tricky cases",
            body: "Fire 'grows' and 'moves' but isn't alive — no cells, no reproduction, no nutrition. Seeds are dormant but alive — they respire slowly and can grow when conditions are right.",
          },
        ],
        keyFormulas: [
          { name: "MRS GREN", statement: "Movement, Respiration, Sensitivity, Growth, Reproduction, Excretion, Nutrition." },
        ],
        workedExample: {
          problem: "Is a car alive? Test against MRS GREN.",
          solution: "No — cars don't respire, reproduce, excrete, or show sensitivity. They move and 'consume' fuel but lack life processes.",
        },
      },
      questions: [
        {
          id: "cils-u2-char-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is NOT one of the seven characteristics of living things?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Reproduction" },
              { id: "b", text: "Thinking" },
              { id: "c", text: "Respiration" },
              { id: "d", text: "Nutrition" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "MRS GREN", statement: "Thinking isn't a life process — some organisms lack nervous systems." },
            ],
            steps: [
              { reasoning: "MRS GREN doesn't include thinking; bacteria live without it.", working: "not MRS GREN", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Thinking",
            commonErrors: ["Choosing a life process — thinking is cognitive, not vital."],
          },
        },
        {
          id: "cils-u2-char-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain the difference between movement and growth.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Movement vs growth", statement: "Movement = position change; growth = permanent size increase." },
            ],
            steps: [
              { reasoning: "Movement: whole organism or parts change position (e.g. walking, leaf tracking sun).", working: "position", marks: 1, markCode: "M" },
              { reasoning: "Growth: permanent increase in mass/size through cell division/expansion.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Movement changes position; growth is permanent increase in size — an ice cube melting 'shrinks' but isn't growth.",
            commonErrors: ["Conflating them — a growing child also moves."],
          },
        },
        {
          id: "cils-u2-char-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A seed in a dark cupboard hasn't grown for months. Is it dead? Use MRS GREN to justify.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Dormancy", statement: "Seeds are alive but dormant — life processes slow, not stopped." },
            ],
            steps: [
              { reasoning: "Seed is dormant — metabolic processes at minimum.", working: "dormant", marks: 1, markCode: "M" },
              { reasoning: "Still alive: contains living cells, can respire slowly, will germinate with water/light.", working: "living cells", marks: 1, markCode: "M" },
              { reasoning: "No growth ≠ dead — growth requires conditions.", working: "conditions", marks: 1, markCode: "M" },
              { reasoning: "Justified with MRS GREN.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "No — dormant seeds are alive; life processes are slowed, not stopped. They'll grow when conditions are right.",
            commonErrors: ["Saying dead because no visible growth — dormancy isn't death."],
          },
        },
        {
          id: "cils-u2-char-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Classify these as living or non-living with justification: (i) a virus, (ii) a flame, (iii) a fern spore.",
          parts: [
            { label: "a", prompt: "Virus — living or non-living?", marks: 3 },
            { label: "b", prompt: "Flame — living or non-living?", marks: 3 },
            { label: "c", prompt: "Fern spore — living or non-living?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Edge cases", statement: "Viruses borderline (reproduce but no independent respiration); flames clearly non-living; spores alive but dormant." },
            ],
            steps: [
              { part: "a", reasoning: "Virus: reproduces but can't respire/eat independently — borderline, often classified non-living.", working: "borderline", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Lacks most MRS GREN independently.", working: "MRS GREN", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Reasoned classification.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Flame: 'moves', 'grows', uses 'fuel' — but no cells, reproduction, excretion, sensitivity.", working: "no cells", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Superficial similarities only.", working: "superficial", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Clearly non-living.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Spore: dormant but alive — single cell capable of growing into new fern.", working: "dormant alive", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Will germinate with water.", working: "germinate", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Living.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) virus: borderline/non-living (b) flame: non-living (c) spore: living (dormant)",
            levels: [
              { level: "Level 3", marks: "2-3", descriptor: "Virus reasoned.", part: "a" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "a" },
              { level: "Level 3", marks: "2-3", descriptor: "Flame explained.", part: "b" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "b" },
              { level: "Level 2", marks: "2-3", descriptor: "Spore correct.", part: "c" },
              { level: "Level 1", marks: "0-1", descriptor: "Wrong.", part: "c" },
            ],
            commonErrors: ["Calling flame alive due to 'movement' — life processes required."],
          },
        },
        {
          id: "cils-u2-char-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which characteristic of living things is removing waste products from the body?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Excretion" },
              { id: "b", text: "Sensitivity" },
              { id: "c", text: "Movement" },
              { id: "d", text: "Nutrition" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Excretion", statement: "Excretion removes waste products from an organism." }],
            steps: [{ reasoning: "Removing waste is excretion.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Excretion",
          },
        },
        {
          id: "cils-u2-char-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many life processes are represented by MRS GREN? Enter the number.",
          response: { type: "numeric", parts: [{ label: "Number", answer: 7 }] },
          markscheme: {
            principles: [{ kind: "convention", name: "MRS GREN", statement: "There are seven characteristics of living things." }],
            steps: [{ reasoning: "M, R, S, G, R, E and N represent seven processes.", marks: 1, markCode: "A" }],
            finalAnswer: "7",
          },
        },
        {
          id: "cils-u2-char-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain what is meant by nutrition in living organisms.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Nutrition", statement: "Obtaining nutrients or energy for life processes." }],
            steps: [
              { reasoning: "Animals eat food; plants make food by photosynthesis.", marks: 1, markCode: "M" },
              { reasoning: "Nutrition supplies materials and energy for growth and repair.", marks: 1, markCode: "A" }],
            finalAnswer: "Nutrition is obtaining nutrients or energy needed for life processes.",
          },
        },
        {
          id: "cils-u2-char-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A plant bends towards a window because of light. Which characteristic is this?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Excretion" },
              { id: "b", text: "Nutrition" },
              { id: "c", text: "Reproduction" },
              { id: "d", text: "Sensitivity" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Sensitivity", statement: "Detecting and responding to environmental changes." }],
            steps: [{ reasoning: "The plant detects light and responds by growing towards it.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Sensitivity",
          },
        },
        {
          id: "cils-u2-char-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "A list contains movement, respiration, sensitivity and nutrition. Enter the number of MRS GREN processes shown.",
          response: { type: "numeric", parts: [{ label: "Count", answer: 4 }] },
          markscheme: {
            principles: [{ kind: "convention", name: "MRS GREN", statement: "Each listed life process counts once." }],
            steps: [{ reasoning: "Four processes are listed.", marks: 1, markCode: "A" }],
            finalAnswer: "4",
          },
        },
        {
          id: "cils-u2-char-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain why a flame is not living even though it appears to grow and move.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Life processes", statement: "Living things must carry out all MRS GREN processes." }],
            steps: [
              { reasoning: "A flame has no cells and does not respire, reproduce, excrete or show sensitivity.", marks: 1, markCode: "M" },
              { reasoning: "Its apparent movement and growth are physical, not biological processes.", marks: 1, markCode: "M" },
              { reasoning: "Therefore it fails the criteria for being living.", marks: 1, markCode: "A" }],
            finalAnswer: "A flame lacks cells and most life processes, so it is not living.",
          },
        },
        {
          id: "cils-u2-char-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which characteristic allows a species to produce offspring?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sensitivity" },
              { id: "b", text: "Reproduction" },
              { id: "c", text: "Movement" },
              { id: "d", text: "Nutrition" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Reproduction", statement: "Producing offspring to continue the species." }],
            steps: [{ reasoning: "Reproduction is the production of offspring.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Reproduction",
          },
        },
        {
          id: "cils-u2-char-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "From this list — movement, thinking, respiration, growth, reproduction, excretion — enter the number that are characteristics of living things.",
          response: { type: "numeric", parts: [{ label: "Count", answer: 5 }] },
          markscheme: {
            principles: [{ kind: "convention", name: "MRS GREN", statement: "Thinking is not one of the seven characteristics." }],
            steps: [{ reasoning: "All except thinking are MRS GREN processes.", marks: 1, markCode: "A" }],
            finalAnswer: "5",
          },
        },
        {
          id: "cils-u2-char-q13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which statement correctly distinguishes growth from movement?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Growth and movement are identical" },
              { id: "b", text: "Growth is permanent increase in size; movement changes position" },
              { id: "c", text: "Growth is only movement of limbs" },
              { id: "d", text: "Movement always increases size" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Growth vs movement", statement: "Growth is permanent size increase; movement is position change." }],
            steps: [{ reasoning: "Growth changes size permanently, while movement changes position.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Growth is permanent increase in size; movement changes position",
          },
        },
        {
          id: "cils-u2-char-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "An organism shows all MRS GREN processes except reproduction and excretion. Enter the number of missing processes.",
          response: { type: "numeric", parts: [{ label: "Missing", answer: 2 }] },
          markscheme: {
            principles: [{ kind: "convention", name: "MRS GREN", statement: "All seven characteristics are required for a fully living organism." }],
            steps: [{ reasoning: "Two processes are missing: reproduction and excretion.", marks: 1, markCode: "A" }],
            finalAnswer: "2",
          },
        },
        {
          id: "cils-u2-char-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain why viruses are difficult to classify as fully living.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Viruses", statement: "Viruses reproduce but cannot carry out all life processes independently." }],
            steps: [
              { reasoning: "Viruses can reproduce inside host cells.", marks: 1, markCode: "M" },
              { reasoning: "They cannot respire, feed or respond independently outside a host.", marks: 1, markCode: "M" },
              { reasoning: "They therefore lack several MRS GREN processes and are borderline.", marks: 1, markCode: "A" }],
            finalAnswer: "Viruses reproduce but lack independent respiration, nutrition and other life processes.",
          },
        },
        {
          id: "cils-u2-char-q16",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is essential for an organism to be considered fully living?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It is large" },
              { id: "b", text: "It carries out all seven MRS GREN processes" },
              { id: "c", text: "It has a nucleus" },
              { id: "d", text: "It can move quickly" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Living criteria", statement: "All seven life processes are needed for full classification as living." }],
            steps: [{ reasoning: "Missing any MRS GREN process means the organism is not fully living.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** It carries out all seven MRS GREN processes",
          },
        },
      ],
    },
    {
      id: "cils-u2-classification",
      title: "Classification of organisms",
      skill: "Use classification systems to group organisms by shared features.",
      lesson: {
        sections: [
          {
            heading: "Classification hierarchy",
            body: "Kingdom → Phylum → Class → Order → Family → Genus → Species.\n\nHumans: Animalia → Chordata → Mammalia → Primates → Hominidae → Homo → sapiens.",
          },
          {
            heading: "Why classify?",
            body: "Groups organisms by evolutionary relationships and shared characteristics — helps identify, study and conserve species.",
          },
          {
            heading: "Binomial naming",
            body: "Scientific names: Genus + species, italicised, e.g. *Homo sapiens*. Universal naming avoids confusion from common names.",
          },
        ],
        keyFormulas: [
          { name: "Hierarchy", statement: "Kingdom > Phylum > Class > Order > Family > Genus > Species." },
        ],
        workedExample: {
          problem: "A new organism has backbone, hair, and produces milk. Where does it belong?",
          solution: "Animalia (has backbone → Chordata; hair/milk → Mammalia).",
        },
      },
      questions: [
        {
          id: "cils-u2-class-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the correct order of classification levels from broadest to most specific?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Species, Genus, Family, Order, Class, Phylum, Kingdom" },
              { id: "b", text: "Kingdom, Class, Phylum, Order, Family, Genus, Species" },
              { id: "c", text: "Kingdom, Phylum, Class, Order, Family, Genus, Species" },
              { id: "d", text: "Phylum, Kingdom, Class, Order, Family, Genus, Species" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Hierarchy", statement: "KPCOFGS — Kingdom to Species." },
            ],
            steps: [
              { reasoning: "Correct sequence: Kingdom, Phylum, Class, Order, Family, Genus, Species.", working: "KPCOFGS", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Kingdom, Phylum, Class, Order, Family, Genus, Species",
            commonErrors: ["Choosing (c) — Class before Phylum is wrong."],
          },
        },
        {
          id: "cils-u2-class-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why do scientists use binomial names like *Homo sapiens* instead of common names?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Binomial nomenclature", statement: "Universal, unambiguous naming across languages." },
            ],
            steps: [
              { reasoning: "Common names vary by region/language — 'cougar' = 'puma' = 'mountain lion'.", working: "varies", marks: 1, markCode: "M" },
              { reasoning: "Scientific name is unique and universal.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Binomial names are universal and unambiguous; common names vary and cause confusion.",
            commonErrors: ["Saying 'it's tradition' — practical reason is clarity."],
          },
        },
        {
          id: "cils-u2-class-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Two species share the same genus but different species names. How closely related are they? Explain using classification.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Classification reasoning", statement: "Same genus = closely related; species is most specific level." },
            ],
            steps: [
              { reasoning: "Genus is second-most specific — sharing it means close evolutionary relationship.", working: "close", marks: 1, markCode: "M" },
              { reasoning: "Different species = cannot interbreed successfully (usually).", working: "species", marks: 1, markCode: "M" },
              { reasoning: "Example: *Panthera leo* (lion) and *Panthera tigris* (tiger) — same genus, different species.", working: "example", marks: 1, markCode: "M" },
              { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Closely related — same genus but different species means they share a recent common ancestor but are distinct species.",
            commonErrors: ["Saying 'identical' — same genus ≠ same species."],
          },
        },
        {
          id: "cils-u2-class-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "You discover a new organism in a rainforest.",
          parts: [
            { label: "a", prompt: "List three features you'd observe to begin classification.", marks: 3 },
            { label: "b", prompt: "Explain how you'd decide its kingdom.", marks: 2 },
            { label: "c", prompt: "Why give it a binomial name?", marks: 2 },
            { label: "d", prompt: "What other information would help place it accurately?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Classification application", statement: "Observe features → assign kingdom → name binomially → gather more data." },
            ],
            steps: [
              { part: "a", reasoning: "Cell structure (nucleus?), movement, nutrition method, reproduction type.", working: "features", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Three valid.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Accurate.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Cell type (prokaryote/eukaryote), nutrition (autotroph/heterotroph), body plan.", working: "kingdom criteria", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Method clear.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Unique universal name; avoids confusion; follows convention.", working: "binomial", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Reason valid.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "DNA analysis, detailed anatomy, reproductive behaviour, habitat.", working: "more data", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Helpful info.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) cell type, movement, nutrition (b) by cell structure/nutrition (c) unique universal name (d) DNA, anatomy, behaviour",
            levels: [
              { level: "Level 2", marks: "2-3", descriptor: "Features good.", part: "a" },
              { level: "Level 1", marks: "0-1", descriptor: "Few.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Method clear.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Reasoned.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Missing.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Helpful.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Irrelevant.", part: "d" },
            ],
            commonErrors: ["Naming without observation — classification needs evidence."],
          },
        },
        {
          id: "cils-u2-class-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is the most specific level in the classification hierarchy?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Kingdom" },
              { id: "b", text: "Family" },
              { id: "c", text: "Genus" },
              { id: "d", text: "Species" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "convention", name: "Hierarchy", statement: "Species is the most specific major classification level." }],
            steps: [{ reasoning: "Species comes after genus and groups the most similar organisms.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Species",
          },
        },
        {
          id: "cils-u2-class-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many main levels are shown in Kingdom–Phylum–Class–Order–Family–Genus–Species? Enter the number.",
          response: { type: "numeric", parts: [{ label: "Levels", answer: 7 }] },
          markscheme: {
            principles: [{ kind: "convention", name: "Hierarchy", statement: "The hierarchy has seven levels." }],
            steps: [{ reasoning: "Kingdom, phylum, class, order, family, genus and species make seven.", marks: 1, markCode: "A" }],
            finalAnswer: "7",
          },
        },
        {
          id: "cils-u2-class-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain the correct format of a binomial scientific name.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "convention", name: "Binomial nomenclature", statement: "A scientific name has genus followed by species." }],
            steps: [
              { reasoning: "The first name is the genus and the second is the species.", marks: 1, markCode: "M" },
              { reasoning: "The name is usually italicised or underlined.", marks: 1, markCode: "A" }],
            finalAnswer: "Genus + species, written in italics or underlined, e.g. Homo sapiens.",
          },
        },
        {
          id: "cils-u2-class-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In Homo sapiens, which part is the genus?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Homo sapiens" },
              { id: "b", text: "Homo" },
              { id: "c", text: "sapiens" },
              { id: "d", text: "Neither part" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "convention", name: "Binomial nomenclature", statement: "The genus name comes first." }],
            steps: [{ reasoning: "Homo is the genus; sapiens is the species.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Homo",
          },
        },
        {
          id: "cils-u2-class-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "A classification key has seven levels. Enter the number of levels more specific than genus.",
          response: { type: "numeric", parts: [{ label: "Levels", answer: 1 }] },
          markscheme: {
            principles: [{ kind: "convention", name: "Hierarchy", statement: "Only species is more specific than genus." }],
            steps: [{ reasoning: "Species is the single level after genus.", marks: 1, markCode: "A" }],
            finalAnswer: "1",
          },
        },
        {
          id: "cils-u2-class-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain two reasons why scientists classify organisms.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Classification purpose", statement: "Classification organises organisms and shows relationships." }],
            steps: [
              { reasoning: "It groups organisms by shared features and evolutionary relationships.", marks: 1, markCode: "M" },
              { reasoning: "It helps identify species and communicate information clearly.", marks: 1, markCode: "M" },
              { reasoning: "It supports conservation and study of biodiversity.", marks: 1, markCode: "A" }],
            finalAnswer: "Classification groups related organisms, aids identification and supports conservation.",
          },
        },
        {
          id: "cils-u2-class-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How should a scientific name such as Homo sapiens normally be written?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "In inverted commas" },
              { id: "b", text: "In quotation marks" },
              { id: "c", text: "In italics or underlined" },
              { id: "d", text: "In bold capitals" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "convention", name: "Binomial nomenclature", statement: "Scientific names are italicised or underlined." }],
            steps: [{ reasoning: "Italicising distinguishes the scientific name from common names.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** In italics or underlined",
          },
        },
        {
          id: "cils-u2-class-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "Organisms listed: lion Panthera leo, tiger Panthera tigris, domestic cat Felis catus. Enter the number sharing the same genus as the lion.",
          response: { type: "numeric", parts: [{ label: "Count", answer: 1 }] },
          markscheme: {
            principles: [{ kind: "convention", name: "Genus", statement: "The genus is the first part of the binomial name." }],
            steps: [{ reasoning: "Only the tiger shares the genus Panthera.", marks: 1, markCode: "A" }],
            finalAnswer: "1",
          },
        },
        {
          id: "cils-u2-class-q13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which pair is in the correct order from broader to narrower classification?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Species then Genus" },
              { id: "b", text: "Order then Class" },
              { id: "c", text: "Family then Order" },
              { id: "d", text: "Class then Phylum" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "convention", name: "Hierarchy", statement: "Order comes before class in the hierarchy." }],
            steps: [{ reasoning: "Class is broader than order, so order must come first.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Order then Class",
          },
        },
        {
          id: "cils-u2-class-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Two species are in the same family but different genera. Excluding species, enter the number of classification levels they share.",
          response: { type: "numeric", parts: [{ label: "Shared levels", answer: 5 }] },
          markscheme: {
            principles: [{ kind: "convention", name: "Hierarchy", statement: "Shared family implies shared order, class, phylum and kingdom." }],
            steps: [{ reasoning: "They share family, order, class, phylum and kingdom: five levels.", marks: 1, markCode: "A" }],
            finalAnswer: "5",
          },
        },
        {
          id: "cils-u2-class-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain what information a binomial name provides that a common name may not.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Binomial nomenclature", statement: "Scientific names are universal and indicate genus and species." }],
            steps: [
              { reasoning: "It identifies the genus and species precisely.", marks: 1, markCode: "M" },
              { reasoning: "It avoids confusion from regional or language differences.", marks: 1, markCode: "M" },
              { reasoning: "It is used consistently by scientists worldwide.", marks: 1, markCode: "A" }],
            finalAnswer: "A binomial name gives a unique, universal identification of genus and species.",
          },
        },
        {
          id: "cils-u2-class-q16",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which taxonomic rank is broader than family?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Genus" },
              { id: "b", text: "Order" },
              { id: "c", text: "Species" },
              { id: "d", text: "No listed rank" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "convention", name: "Hierarchy", statement: "Order is broader than family." }],
            steps: [{ reasoning: "Order comes before family in the classification sequence.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Order",
          },
        },
      ],
    },
    {
      id: "cils-u2-kingdoms",
      title: "Kingdoms of life",
      skill: "Distinguish the main kingdoms: animals, plants, fungi, protoctists, prokaryotes.",
      lesson: {
        sections: [
          {
            heading: "Animalia",
            body: "Multicellular, eukaryotic, heterotrophic (eat others), no cell walls, usually move. Examples: mammals, birds, insects.",
          },
          {
            heading: "Plantae",
            body: "Multicellular, eukaryotic, autotrophic (photosynthesis), cell walls of cellulose. Examples: trees, flowers, mosses.",
          },
          {
            heading: "Fungi, Protoctists, Prokaryotes",
            body: "- **Fungi**: eukaryotic, heterotrophic, cell walls of chitin (mushrooms, yeast)\n- **Protoctists**: mostly unicellular eukaryotes (amoeba, algae)\n- **Prokaryotes**: no nucleus, unicellular (bacteria)",
          },
        ],
        keyFormulas: [
          { name: "Kingdoms", statement: "Animals, Plants, Fungi, Protoctists, Prokaryotes (Monera)." },
        ],
        workedExample: {
          problem: "A mushroom decomposes dead wood. Which kingdom?",
          solution: "Fungi — heterotrophic, chitin cell walls, decomposer role.",
        },
      },
      questions: [
        {
          id: "cils-u2-king-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which kingdom contains organisms that photosynthesise?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Prokaryotes" },
              { id: "b", text: "Fungi" },
              { id: "c", text: "Animalia" },
              { id: "d", text: "Plantae" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Plantae", statement: "Plants photosynthesise — autotrophic." },
            ],
            steps: [
              { reasoning: "Plants make their own food via photosynthesis.", working: "autotrophic", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Plantae",
            commonErrors: ["Choosing (d) — some bacteria photosynthesise but plants are the main group."],
          },
        },
        {
          id: "cils-u2-king-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the key difference between prokaryotes and eukaryotes?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Prokaryote vs eukaryote", statement: "Prokaryotes lack a nucleus; eukaryotes have membrane-bound nucleus." },
            ],
            steps: [
              { reasoning: "Prokaryotes: DNA loose in cell, no nucleus (bacteria).", working: "no nucleus", marks: 1, markCode: "M" },
              { reasoning: "Eukaryotes: DNA inside nucleus (plants, animals, fungi).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Prokaryotes have no nucleus; eukaryotes have a membrane-bound nucleus containing DNA.",
            commonErrors: ["Saying size — both can be similar; nucleus is the key."],
          },
        },
        {
          id: "cils-u2-king-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Yeast is a single-celled organism that feeds on sugar. Which kingdom? Justify.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Kingdom identification", statement: "Yeast = Fungi: eukaryotic, heterotrophic, chitin walls." },
            ],
            steps: [
              { reasoning: "Yeast is eukaryotic (has nucleus).", working: "eukaryotic", marks: 1, markCode: "M" },
              { reasoning: "Feeds on sugar — heterotrophic, not photosynthetic.", working: "heterotrophic", marks: 1, markCode: "M" },
              { reasoning: "Fungal cell walls (chitin) → Fungi kingdom.", working: "Fungi", marks: 1, markCode: "M" },
              { reasoning: "Justified.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Fungi — eukaryotic, heterotrophic, chitin cell walls.",
            commonErrors: ["Choosing Protoctists — yeast has chitin walls like fungi."],
          },
        },
        {
          id: "cils-u2-king-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Create a classification key for: oak tree, mushroom, bacterium, dog, amoeba.",
          parts: [
            { label: "a", prompt: "First question: does it have a nucleus?", marks: 2 },
            { label: "b", prompt: "For eukaryotes: does it photosynthesise?", marks: 2 },
            { label: "c", prompt: "For non-photosynthesising eukaryotes: multicellular or unicellular?", marks: 2 },
            { label: "d", prompt: "Place all five organisms using the key.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Classification key", statement: "Dichotomous key using cell type, nutrition, complexity." },
            ],
            steps: [
              { part: "a", reasoning: "Yes → eukaryote; No → prokaryote (bacterium).", working: "nucleus?", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Correct split.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Yes → Plantae (oak); No → continue.", working: "photosynthesise?", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Multicellular → Animalia or Fungi; unicellular → Protoctists (amoeba).", working: "multi/uni", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Key branch correct.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Bacterium→Prokaryotes; oak→Plantae; mushroom→Fungi; dog→Animalia; amoeba→Protoctists.", working: "all placed", marks: 1, markCode: "M" },
              { part: "d", reasoning: "All correct.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Accurate.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Key: nucleus? → photosynthesis? → multicellular? Places: bacterium→Prokaryotes, oak→Plantae, mushroom→Fungi, dog→Animalia, amoeba→Protoctists",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "First split correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Second split correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Branch correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "All placed.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "d" },
            ],
            commonErrors: ["Putting mushroom in Plantae — fungi aren't plants."],
          },
        },
        {
          id: "cils-u2-king-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which substance forms the cell walls of fungi?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Keratin" },
              { id: "b", text: "Cellulose" },
              { id: "c", text: "Collagen" },
              { id: "d", text: "Chitin" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Fungi", statement: "Fungal cell walls contain chitin." }],
            steps: [{ reasoning: "Chitin distinguishes fungal walls from plant cellulose walls.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Chitin",
          },
        },
        {
          id: "cils-u2-king-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many main kingdoms are listed in this classification? Enter the number.",
          response: { type: "numeric", parts: [{ label: "Kingdoms", answer: 5 }] },
          markscheme: {
            principles: [{ kind: "convention", name: "Kingdoms", statement: "Animalia, Plantae, Fungi, Protoctists and Prokaryotes are five kingdoms." }],
            steps: [{ reasoning: "There are five main groups.", marks: 1, markCode: "A" }],
            finalAnswer: "5",
          },
        },
        {
          id: "cils-u2-king-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain the difference between autotrophic and heterotrophic nutrition.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Nutrition", statement: "Autotrophs make food; heterotrophs obtain food from other organisms." }],
            steps: [
              { reasoning: "Autotrophs such as plants make their own food by photosynthesis.", marks: 1, markCode: "M" },
              { reasoning: "Heterotrophs such as animals and fungi obtain nutrients by consuming or decomposing other organisms.", marks: 1, markCode: "A" }],
            finalAnswer: "Autotrophs make food; heterotrophs obtain food from other sources.",
          },
        },
        {
          id: "cils-u2-king-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which kingdom usually contains amoeba?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Plantae" },
              { id: "b", text: "Animalia" },
              { id: "c", text: "Protoctists" },
              { id: "d", text: "Fungi" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Protoctists", statement: "Protoctists are mostly unicellular eukaryotes." }],
            steps: [{ reasoning: "Amoeba is a unicellular eukaryotic protoctist.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Protoctists",
          },
        },
        {
          id: "cils-u2-king-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Among the five kingdoms, enter the number that have cells containing a nucleus.",
          response: { type: "numeric", parts: [{ label: "Kingdoms", answer: 4 }] },
          markscheme: {
            principles: [{ kind: "definition", name: "Eukaryotes", statement: "All kingdoms except Prokaryotes have a nucleus." }],
            steps: [{ reasoning: "Animalia, Plantae, Fungi and Protoctists are eukaryotic.", marks: 1, markCode: "A" }],
            finalAnswer: "4",
          },
        },
        {
          id: "cils-u2-king-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain why yeast belongs to Fungi rather than Plantae.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Kingdom identification", statement: "Yeast is eukaryotic, heterotrophic and has chitin walls." }],
            steps: [
              { reasoning: "Yeast feeds on sugars, so it is heterotrophic rather than photosynthetic.", marks: 1, markCode: "M" },
              { reasoning: "Its cell walls contain chitin, a fungal feature.", marks: 1, markCode: "M" },
              { reasoning: "Therefore it is placed in Fungi, not Plantae.", marks: 1, markCode: "A" }],
            finalAnswer: "Yeast is heterotrophic and has chitin cell walls, so it belongs to Fungi.",
          },
        },
        {
          id: "cils-u2-king-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the main component of plant cell walls?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Cellulose" },
              { id: "b", text: "Collagen" },
              { id: "c", text: "Keratin" },
              { id: "d", text: "Chitin" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Plantae", statement: "Plant cell walls are made mainly of cellulose." }],
            steps: [{ reasoning: "Cellulose gives plant cells rigid support.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Cellulose",
          },
        },
        {
          id: "cils-u2-king-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "Of the five kingdoms, enter the number that are eukaryotic.",
          response: { type: "numeric", parts: [{ label: "Kingdoms", answer: 4 }] },
          markscheme: {
            principles: [{ kind: "definition", name: "Eukaryotes", statement: "Eukaryotic cells have a membrane-bound nucleus." }],
            steps: [{ reasoning: "All except Prokaryotes are eukaryotic.", marks: 1, markCode: "A" }],
            finalAnswer: "4",
          },
        },
        {
          id: "cils-u2-king-q13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Bacteria are placed in which kingdom?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Plantae" },
              { id: "b", text: "Prokaryotes" },
              { id: "c", text: "Fungi" },
              { id: "d", text: "Protoctists" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Prokaryotes", statement: "Bacteria lack a nucleus and are prokaryotic." }],
            steps: [{ reasoning: "Bacteria are unicellular prokaryotes.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Prokaryotes",
          },
        },
        {
          id: "cils-u2-king-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Enter the number of the five kingdoms whose cells lack a nucleus.",
          response: { type: "numeric", parts: [{ label: "Kingdoms", answer: 1 }] },
          markscheme: {
            principles: [{ kind: "definition", name: "Prokaryotes", statement: "Only Prokaryotes lack a nucleus." }],
            steps: [{ reasoning: "Only one kingdom is prokaryotic.", marks: 1, markCode: "A" }],
            finalAnswer: "1",
          },
        },
        {
          id: "cils-u2-king-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Compare fungi and plants in terms of nutrition and cell walls.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "comparison", name: "Fungi vs plants", statement: "Fungi are heterotrophic with chitin walls; plants are autotrophic with cellulose walls." }],
            steps: [
              { reasoning: "Plants photosynthesise, while fungi obtain nutrients from other organisms or decomposition.", marks: 1, markCode: "M" },
              { reasoning: "Plant walls contain cellulose; fungal walls contain chitin.", marks: 1, markCode: "M" },
              { reasoning: "Both are eukaryotic but belong to different kingdoms.", marks: 1, markCode: "A" }],
            finalAnswer: "Plants are autotrophic with cellulose walls; fungi are heterotrophic with chitin walls.",
          },
        },
        {
          id: "cils-u2-king-q16",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which feature is most useful for placing an organism in a kingdom?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Name only" },
              { id: "b", text: "Colour alone" },
              { id: "c", text: "Size only" },
              { id: "d", text: "Cell structure and nutrition" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "skill", name: "Classification key", statement: "Kingdoms are distinguished by cell type, structure and nutrition." }],
            steps: [{ reasoning: "Cell structure and nutrition provide reliable kingdom criteria.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Cell structure and nutrition",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cils-u2-classification-notes",
      title: "Classification — revision notes",
      summary: "MRS GREN, hierarchy, binomial names, kingdoms.",
      sections: [
        {
          heading: "Living things",
          body: "MRS GREN: Movement, Respiration, Sensitivity, Growth, Reproduction, Excretion, Nutrition. All seven required.",
        },
        {
          heading: "Classification",
          body: "KPCOFGS hierarchy; binomial = Genus + species. Kingdoms: Animalia, Plantae, Fungi, Protoctists, Prokaryotes. Prokaryotes lack nucleus.",
        },
      ],
    },
  ],
};
