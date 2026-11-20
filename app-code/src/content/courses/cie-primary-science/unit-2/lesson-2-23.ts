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
            { id: "a", text: "Crust" }, { id: "b", text: "Mantle" }, { id: "c", text: "Core" }, { id: "d", text: "Atmosphere" },
          ], correctChoiceId: "a" },
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
