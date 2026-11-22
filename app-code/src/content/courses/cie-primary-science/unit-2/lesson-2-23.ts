import type { Lesson } from "../../../types.ts";

export const lesson223: Lesson = {
  id: "cips-u2-lesson-2-23",
  code: "2-23",
  title: "Stage 4 — Earth's Changes: Volcanoes and Earthquakes",
  goal: "I CAN describe Earth's structure, explain volcanoes and earthquakes, and describe how the Earth moves.",
  standards: ["Cambridge Primary Science 0097 Stage 4: Earth and space",
  "Cambridge Primary Science 0097 framework substrands: 4ESp"],
  stage: 4,
  vocabulary: [
    { term: "Core", definition: "The hot centre of the Earth." },
    { term: "Mantle", definition: "The thick layer of hot rock between core and crust." },
    { term: "Crust", definition: "The thin outer layer of the Earth we live on." },
    { term: "Volcano", definition: "An opening in the crust where molten rock (magma/lava) erupts." },
    { term: "Earthquake", definition: "A sudden shaking of the ground when crustal plates move." },
    { term: "Tectonic plates", definition: "Huge slabs of Earth's crust that slowly move." },
  ],
  concepts: [
    {
      id: "cips-u2-s23-earth",
      title: "Earth's structure, volcanoes and earthquakes",
      skill: "Describe Earth's layers and explain volcanic eruptions and earthquakes at Stage 4 level.",
      lesson: {
        sections: [
          {
            heading: "Earth's structure",
            body: "Earth has three layers: the crust (thin, solid outer shell), the mantle (thick, hot semi-liquid rock), and the core (hot centre). The crust is broken into tectonic plates that slowly move on the mantle.",
          },
          {
            heading: "Volcanoes and earthquakes",
            body: "At breaks in the crust, magma can rise and erupt as lava — a volcano. When plates suddenly grind or slip past each other, the ground shakes — an earthquake. Both happen where plates meet or break. Volcanoes and earthquakes are most common along plate boundaries (e.g. the 'Ring of Fire').",
          },
        ],
        keyFormulas: [
          { name: "Layers", statement: "crust → mantle → core" },
          { name: "Volcano", statement: "magma rises through crust break → erupts as lava" },
          { name: "Earthquake", statement: "plates slip suddenly → ground shakes" },
        ],
        workedExample: {
          problem: "Why do volcanoes and earthquakes often happen in the same regions?",
          solution: "Both occur at plate boundaries where the crust is weak or breaking — magma can escape (volcano) and plates can slip (earthquake).",
        },
      },
      questions: [
        {
          id: "cips-u2-ee-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is the outermost layer of the Earth?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Atmosphere" },
            { id: "b", text: "Core" },
            { id: "c", text: "Crust" },
            { id: "d", text: "Mantle" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Crust", statement: "Thin outer layer." }],
            steps: [{ reasoning: "Crust is the outermost solid layer.", marks: 1, markCode: "M" }],
            finalAnswer: "Crust",
          },
        },
        {
          id: "cips-u2-ee-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name the three layers of the Earth from outside to inside.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Earth's layers", statement: "Crust, mantle, core." }],
            steps: [
              { reasoning: "Crust (outer), mantle (middle), core (centre).", marks: 1, markCode: "M" },
              { reasoning: "Correct order.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Crust, mantle, core",
          },
        },
        {
          id: "cips-u2-ee-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the difference between magma and lava, and describe what causes an earthquake.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Volcanoes and earthquakes", statement: "Magma underground, lava on surface; plates slip." }],
            steps: [
              { reasoning: "Magma = molten rock underground; lava = when it erupts on surface.", marks: 1, markCode: "M" },
              { reasoning: "Earthquake = sudden plate movement/slip.", marks: 1, markCode: "M" },
              { reasoning: "Both linked to crustal movement.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Magma underground/lava surface; plates slip → quake",
          },
        },
        {
          id: "cips-u2-ee-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Describe Earth's three layers with one fact about each. (b) What are tectonic plates and how do they move? (c) Explain how a volcano forms. (d) Explain how an earthquake forms. (e) Why do volcanoes and earthquakes cluster in certain regions? (f) Name one real region famous for volcanic/earthquake activity.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Earth science", statement: "Layers, plates, volcanoes, earthquakes." }],
            steps: [
              { reasoning: "(a) Crust thin solid; mantle hot rock; core hottest centre.", marks: 1, markCode: "M" },
              { reasoning: "(b) Plates = crust slabs; slowly move on mantle.", marks: 1, markCode: "M" },
              { reasoning: "(c) Magma rises through crust break → erupts as lava.", marks: 1, markCode: "M" },
              { reasoning: "(d) Plates slip/grind suddenly → ground shakes.", marks: 1, markCode: "M" },
              { reasoning: "(e) Both occur at plate boundaries where crust is weak.", marks: 1, markCode: "M" },
              { reasoning: "(f) e.g. Ring of Fire / Japan / Indonesia.", marks: 1, markCode: "M" },
              { reasoning: "Reasoning links structure to events.", marks: 1, markCode: "M" },
              { reasoning: "All parts addressed.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Layers, plates move, magma→lava, plate slip→quake, boundaries cluster, e.g. Ring of Fire.",
          },
        },
        {
          id: "cips-u2-ee-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is the HOTTEST layer of the Earth?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Crust" },
            { id: "b", text: "Mantle" },
            { id: "c", text: "Atmosphere" },
            { id: "d", text: "Core" },
          ], dorrectChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Core", statement: "Hottest centre of Earth." }],
            steps: [{ reasoning: "The core is the hottest layer.", marks: 1, markCode: "A" }],
            finalAnswer: "Core",
          },
        },
        {
          id: "cips-u2-ee-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is molten rock underground called?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Rock" },
            { id: "b", text: "Soil" },
            { id: "c", text: "Magma" },
            { id: "d", text: "Lava" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Magma", statement: "Molten rock underground." }],
            steps: [{ reasoning: "Magma is molten rock underground; lava is on the surface.", marks: 1, markCode: "A" }],
            finalAnswer: "Magma",
          },
        },
        {
          id: "cips-u2-ee-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many layers does the Earth have: crust, mantle, core?",
          response: { type: "numeric", parts: [{ label: "a", answer: 3, unit: "layers" }] },
          markscheme: {
            principles: [{ kind: "definition", name: "Earth's layers", statement: "Three layers." }],
            steps: [{ reasoning: "There are 3 layers.", marks: 1, markCode: "M" }],
            finalAnswer: "3",
          },
        },
        {
          id: "cips-u2-ee-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "In a study of 7 volcanoes, 5 erupt along plate boundaries. How many erupt elsewhere?",
          response: { type: "numeric", parts: [{ label: "a", answer: 2, unit: "volcanoes" }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Volcanoes", statement: "Subtract from total." }],
            steps: [
              { reasoning: "$7 - 5 = 2$.", marks: 1, markCode: "M" },
              { reasoning: "2 erupt elsewhere.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2",
          },
        },
        {
          id: "cips-u2-ee-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "What are tectonic plates made of?",
          response: { type: "mcq", choices: [
            { id: "a", text: "The atmosphere" },
            { id: "b", text: "Water" },
            { id: "c", text: "Rock and soil only" },
            { id: "d", text: "The Earth's crust" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "definition", name: "Tectonic plates", statement: "Slabs of Earth's crust." }],
            steps: [{ reasoning: "Tectonic plates are huge slabs of Earth's crust.", marks: 1, markCode: "A" }],
            finalAnswer: "The Earth's crust",
          },
        },
        {
          id: "cips-u2-ee-q10",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name the three layers of the Earth from outside to inside.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Earth's layers", statement: "Crust, mantle, core." }],
            steps: [
              { reasoning: "Crust (outer).", marks: 1, markCode: "M" },
              { reasoning: "Mantle then core (inside).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Crust, mantle, core",
          },
        },
        {
          id: "cips-u2-ee-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe what happens during a volcanic eruption.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Volcano", statement: "Magma escapes through crust." }],
            steps: [
              { reasoning: "Magma rises through a break in the crust.", marks: 1, markCode: "M" },
              { reasoning: "It reaches the surface as lava.", marks: 1, markCode: "M" },
              { reasoning: "Erupts out — ash, lava, gases released.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Magma rises → erupts as lava/ash/gases",
          },
        },
        {
          id: "cips-u2-ee-q12",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "What causes an earthquake?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Heavy rain" },
            { id: "b", text: "Wind storms" },
            { id: "c", text: "Tectonic plates suddenly slipping/grinding" },
            { id: "d", text: "Volcanoes only" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Earthquake", statement: "Plates slip suddenly." }],
            steps: [{ reasoning: "Sudden plate movement causes the ground to shake.", marks: 1, markCode: "A" }],
            finalAnswer: "Plates suddenly slipping/grinding",
          },
        },
        {
          id: "cips-u2-ee-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "A region has 10 earthquakes recorded in a year: 7 near plate boundaries and 3 away from them. What is the total number of earthquakes?",
          response: { type: "numeric", parts: [{ label: "a", answer: 10, unit: "earthquakes" }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Earthquakes", statement: "Add boundary + non-boundary." }],
            steps: [
              { reasoning: "$7 + 3 = 10$.", marks: 1, markCode: "M" },
              { reasoning: "Total = 10.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "10",
          },
        },
        {
          id: "cips-u2-ee-q14",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Why do volcanoes and earthquakes often happen in the same regions?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Plate boundaries", statement: "Weak crust allows both events." }],
            steps: [
              { reasoning: "Both happen where tectonic plates meet or break.", marks: 1, markCode: "M" },
              { reasoning: "At boundaries the crust is weak — magma can escape and plates can slip.", marks: 1, markCode: "M" },
              { reasoning: "So volcanoes and earthquakes cluster together.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Both occur at weak plate boundaries",
          },
        },
        {
          id: "cips-u2-ee-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is the mantle?",
          response: { type: "mcq", choices: [
            { id: "a", text: "The air around Earth" },
            { id: "b", text: "The hottest centre" },
            { id: "c", text: "The thick layer of hot rock between crust and core" },
            { id: "d", text: "The outermost layer" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Mantle", statement: "Hot rock layer between crust and core." }],
            steps: [{ reasoning: "The mantle is the thick hot rock layer in the middle.", marks: 1, markCode: "A" }],
            finalAnswer: "Hot rock layer between crust and core",
          },
        },
        {
          id: "cips-u2-ee-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "(a) Name Earth's three layers and one fact each. (b) What are tectonic plates? (c) How do they move? (d) What is magma vs lava? (e) What causes an earthquake? (f) What causes a volcano? (g) Why do volcanoes and earthquakes cluster? (h) Name one region famous for this activity.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Earth's changes", statement: "Integrated Stage 4 Earth science answer." }],
            steps: [
              { reasoning: "(a) Crust=thin solid; mantle=hot rock; core=hottest centre.", marks: 1, markCode: "M" },
              { reasoning: "(b) Huge slabs of Earth's crust.", marks: 1, markCode: "M" },
              { reasoning: "(c) Slowly move on the mantle.", marks: 1, markCode: "M" },
              { reasoning: "(d) Magma=underground; lava=on surface.", marks: 1, markCode: "M" },
              { reasoning: "(e) Plates suddenly slip/grind.", marks: 1, markCode: "M" },
              { reasoning: "(f) Magma rises through crust break and erupts.", marks: 1, markCode: "M" },
              { reasoning: "(g) Both occur at weak plate boundaries.", marks: 1, markCode: "M" },
              { reasoning: "(h) e.g. Ring of Fire / Japan / Indonesia.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Layers, plates, magma/lava, earthquake/volcano causes, boundary clustering, example region.",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cips-u2-ee-notes",
      title: "Earth's changes — notes",
      summary: "Crust/mantle/core. Plates move slowly; sudden slips = earthquakes; magma escape = volcanoes. Cluster at boundaries.",
      sections: [
        { heading: "Structure", body: "Thin crust on hot mantle over hot core; crust in moving plates." },
        { heading: "Events", body: "Volcano = magma erupts; earthquake = plates slip. Both at boundaries." },
      ],
    },
  ],
};
