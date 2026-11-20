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
              { id: "a", text: "Thinking" },
              { id: "b", text: "Nutrition" },
              { id: "c", text: "Respiration" },
              { id: "d", text: "Reproduction" },
            ],
            correctChoiceId: "a",
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
              { id: "a", text: "Kingdom, Phylum, Class, Order, Family, Genus, Species" },
              { id: "b", text: "Species, Genus, Family, Order, Class, Phylum, Kingdom" },
              { id: "c", text: "Kingdom, Class, Phylum, Order, Family, Genus, Species" },
              { id: "d", text: "Phylum, Kingdom, Class, Order, Family, Genus, Species" },
            ],
            correctChoiceId: "a",
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
              { id: "a", text: "Plantae" },
              { id: "b", text: "Animalia" },
              { id: "c", text: "Fungi" },
              { id: "d", text: "Prokaryotes" },
            ],
            correctChoiceId: "a",
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
