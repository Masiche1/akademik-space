import type { Lesson } from "../../../types.ts";

export const lesson81: Lesson = {
  id: "cils-u8-lesson-8-1",
  code: "8-1",
  title: "Earth's structure and rocks",
  goal: "I CAN describe Earth's layers, rock types and the rock cycle.",
  standards: ["0893 Earth science: geology"],
  vocabulary: [
    { term: "Crust", definition: "Thin outer layer of Earth — solid rock." },
    { term: "Mantle", definition: "Thick semi-solid layer below crust — very hot." },
    { term: "Core", definition: "Centre of Earth — outer liquid, inner solid." },
    { term: "Igneous rock", definition: "Formed from cooled magma/lava — e.g. granite, basalt." },
    { term: "Sedimentary rock", definition: "Formed from compressed sediments — e.g. limestone, sandstone." },
    { term: "Metamorphic rock", definition: "Formed by heat/pressure on existing rock — e.g. marble, slate." },
  ],
  concepts: [
    {
      id: "cils-u8-earth",
      title: "Earth's structure",
      skill: "Describe Earth's layers and how they affect surface features.",
      lesson: {
        sections: [
          {
            heading: "Earth's layers",
            body: "- **Crust**: 5-70 km thick, solid rock\n- **Mantle**: ~2900 km, semi-solid hot rock — convection currents\n- **Outer core**: liquid iron/nickel — generates magnetic field\n- **Inner core**: solid iron/nickel — extremely hot",
          },
          {
            heading: "Plate tectonics",
            body: "Crust broken into plates floating on mantle. Convection currents move plates — causing earthquakes, volcanoes, mountain formation.",
          },
          {
            heading: "Evidence",
            body: "Continents fit together (Pangaea), fossil distribution, earthquake/volcano locations at plate boundaries.",
          },
        ],
        keyFormulas: [
          { name: "Earth structure", statement: "Crust→mantle→outer core→inner core; plates move on convection currents." },
        ],
        workedExample: {
          problem: "Why do earthquakes happen at plate boundaries?",
          solution: "Plates grind/pull apart/collide — stress builds until released as seismic waves.",
        },
      },
      questions: [
        {
          id: "cils-u8-earth-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the outermost layer of Earth called?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Core" },
              { id: "b", text: "Atmosphere" },
              { id: "c", text: "Crust" },
              { id: "d", text: "Mantle" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Crust", statement: "Outermost solid layer." },
            ],
            steps: [
              { reasoning: "Crust = outermost.", working: "crust", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Crust",
            commonErrors: ["Choosing (d) — atmosphere is above crust, not part of Earth structure."],
          },
        },
        {
          id: "cils-u8-earth-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name the three main layers of Earth.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Earth layers", statement: "Crust, mantle, core." },
            ],
            steps: [
              { reasoning: "Crust, mantle, core.", working: "layers", marks: 1, markCode: "M" },
              { reasoning: "All three.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Crust, mantle, core.",
            commonErrors: ["Missing core or mantle."],
          },
        },
        {
          id: "cils-u8-earth-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how plate tectonics causes earthquakes.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Plate tectonics", statement: "Plates move on convection currents — boundaries create stress → earthquakes." },
            ],
            steps: [
              { reasoning: "Convection currents in mantle move tectonic plates.", working: "convection", marks: 1, markCode: "M" },
              { reasoning: "Plates collide/separate/grind at boundaries.", working: "boundaries", marks: 1, markCode: "M" },
              { reasoning: "Stress builds until released suddenly → seismic waves = earthquake.", working: "stress release", marks: 1, markCode: "M" },
              { reasoning: "Mechanism explained.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Plate movement creates stress at boundaries → sudden release = earthquake.",
            commonErrors: ["Saying 'Earth shakes randomly' — it's plate movement."],
          },
        },
        {
          id: "cils-u8-earth-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Investigate Earth's structure.",
          parts: [
            { label: "a", prompt: "Describe Earth's layers.", marks: 3 },
            { label: "b", prompt: "What is the lithosphere?", marks: 2 },
            { label: "c", prompt: "Explain plate tectonics.", marks: 2 },
            { label: "d", prompt: "Give evidence for continental drift.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Earth structure", statement: "Crust/mantle/core; plates on mantle; continental drift evidence." },
            ],
            steps: [
              { part: "a", reasoning: "Crust (thin solid), mantle (hot semi-solid), core (liquid outer, solid inner).", working: "layers", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Accurate descriptions.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Clear.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Crust + rigid upper mantle — broken into plates.", working: "lithosphere", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Plates move on convection currents — collide/separate at boundaries.", working: "tectonics", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Continents fit together; matching fossils; similar rock types across oceans.", working: "evidence", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Two+ valid.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) crust/mantle/core (b) crust+upper mantle, plates (c) convection moves plates (d) continents fit, fossils match",
            levels: [
              { level: "Level 3", marks: "2-3", descriptor: "Layers accurate.", part: "a" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Two+ evidence.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Few.", part: "d" },
            ],
            commonErrors: ["Thinking core is all solid — outer is liquid."],
          },
        },
        {
          id: "cils-u8-earth-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which layer of Earth is the hottest?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Atmosphere" },
              { id: "b", text: "Inner core" },
              { id: "c", text: "Mantle" },
              { id: "d", text: "Crust" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Inner core", statement: "Centre of Earth — extremely hot, solid iron/nickel." }],
            steps: [{ reasoning: "Temperature rises towards centre.", working: "inner core", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Inner core",
            commonErrors: ["Choosing (b) — crust is the coolest."],
          },
        },
        {
          id: "cils-u8-earth-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The outer core of Earth is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Hot gas" },
              { id: "b", text: "Ice" },
              { id: "c", text: "Liquid iron and nickel" },
              { id: "d", text: "Solid rock" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Outer core", statement: "Liquid iron/nickel — generates Earth's magnetic field." }],
            steps: [{ reasoning: "Outer core is molten metal.", working: "liquid Fe/Ni", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Liquid iron and nickel",
          },
        },
        {
          id: "cils-u8-earth-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What moves Earth's tectonic plates?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Solar wind" },
              { id: "b", text: "Ocean tides" },
              { id: "c", text: "Convection currents in the mantle" },
              { id: "d", text: "The Moon's gravity" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "skill", name: "Plate movement", statement: "Convection currents in hot mantle rock move plates." }],
            steps: [{ reasoning: "Convection in mantle drives plates.", working: "convection", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Convection currents",
          },
        },
        {
          id: "cils-u8-earth-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Earth's magnetic field is generated mainly by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The Sun's rays" },
              { id: "b", text: "Movement of liquid metal in the outer core" },
              { id: "c", text: "Ocean currents" },
              { id: "d", text: "The atmosphere" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Magnetic field", statement: "Liquid outer core motion creates Earth's magnetic field." }],
            steps: [{ reasoning: "Outer core metal flow → magnetic field.", working: "outer core", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Liquid metal in outer core",
          },
        },
        {
          id: "cils-u8-earth-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Most earthquakes and volcanoes occur:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only in the ocean" },
              { id: "b", text: "In the centre of plates" },
              { id: "c", text: "At or near tectonic plate boundaries" },
              { id: "d", text: "Randomly everywhere" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "skill", name: "Plate boundaries", statement: "Boundaries concentrate stress → earthquakes and volcanoes." }],
            steps: [{ reasoning: "Plate edges are zones of activity.", working: "boundaries", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Plate boundaries",
          },
        },
        {
          id: "cils-u8-earth-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which evidence supports continental drift?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Rocks are hard" },
              { id: "b", text: "Continents fit together like puzzle pieces" },
              { id: "c", text: "The Moon orbits Earth" },
              { id: "d", text: "Earth has water" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "context", name: "Continental drift", statement: "Fitting coastlines, matching fossils and rocks across oceans." }],
            steps: [{ reasoning: "Pangaea fit is classic evidence.", working: "fit", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Continents fit together",
          },
        },
        {
          id: "cils-u8-earth-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "The lithosphere consists of:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only the crust" },
              { id: "b", text: "The core" },
              { id: "c", text: "The entire mantle" },
              { id: "d", text: "Crust plus rigid upper mantle" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Lithosphere", statement: "Crust + rigid upper mantle — broken into plates." }],
            steps: [{ reasoning: "Lithosphere = crust + upper mantle.", working: "crust+mantle", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Crust + rigid upper mantle",
          },
        },
        {
          id: "cils-u8-earth-q12",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "How many main layers does Earth have: crust, mantle, outer core, inner core? Enter the number only.",
          response: { type: "numeric", parts: [{ label: "Layers", answer: 4 }] },
          markscheme: {
            principles: [{ kind: "convention", name: "Earth layers", statement: "Crust, mantle, outer core, inner core — four layers." }],
            steps: [
              { reasoning: "Count the layers.", working: "4", marks: 1, markCode: "M" },
              { reasoning: "Four layers.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$4$",
          },
        },
        {
          id: "cils-u8-earth-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "Earth's crust is about $5$–$70\\ \\text{km}$ thick. What is the approximate thickness of the mantle in km? Enter the number only.",
          response: { type: "numeric", parts: [{ label: "Thickness", answer: 2900, unit: "km" }] },
          markscheme: {
            principles: [{ kind: "convention", name: "Mantle", statement: "Mantle is ~2900 km thick." }],
            steps: [
              { reasoning: "Mantle thickness ≈ 2900 km.", working: "2900", marks: 1, markCode: "M" },
              { reasoning: "Answer = 2900 km.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2900\\ \\text{km}$",
          },
        },
        {
          id: "cils-u8-earth-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "Of the four layers — crust, mantle, outer core, inner core — how many are solid rock/metal? Enter the number only.",
          response: { type: "numeric", parts: [{ label: "Solid layers", answer: 3 }] },
          markscheme: {
            principles: [{ kind: "definition", name: "Layers state", statement: "Crust solid, mantle semi-solid, outer core liquid, inner core solid." }],
            steps: [
              { reasoning: "Crust + mantle (semi-solid) + inner core = 3 solid-ish.", working: "3", marks: 1, markCode: "M" },
              { reasoning: "Outer core is the only liquid layer.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$3$",
          },
        },
        {
          id: "cils-u8-earth-q15",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Pangaea, the ancient supercontinent, broke apart roughly how many years ago (in millions)? Enter the number only.",
          response: { type: "numeric", parts: [{ label: "Millions of years", answer: 200 }] },
          markscheme: {
            principles: [{ kind: "context", name: "Pangaea", statement: "Supercontinent broke apart ~200 million years ago." }],
            steps: [
              { reasoning: "Pangaea split ≈ 200 million years ago.", working: "200", marks: 1, markCode: "M" },
              { reasoning: "Answer ≈ 200.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$200\\ \\text{million years}$",
          },
        },
        {
          id: "cils-u8-earth-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Describe Earth's layers from outside to inside, stating the state (solid/liquid) of each.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Earth structure", statement: "Crust solid; mantle semi-solid; outer core liquid; inner core solid." }],
            steps: [
              { reasoning: "Crust: thin solid rock (5–70 km).", working: "crust", marks: 1, markCode: "M" },
              { reasoning: "Mantle: thick semi-solid hot rock (~2900 km).", working: "mantle", marks: 1, markCode: "M" },
              { reasoning: "Outer core liquid metal; inner core solid metal.", working: "core", marks: 1, markCode: "M" },
              { reasoning: "Order and states all correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Crust (solid) → mantle (semi-solid) → outer core (liquid) → inner core (solid).",
          },
        },
      ],
    },
    {
      id: "cils-u8-rocks",
      title: "Rocks and the rock cycle",
      skill: "Describe rock types, formation and the rock cycle.",
      lesson: {
        sections: [
          {
            heading: "Three rock types",
            body: "- **Igneous**: cooled magma/lava — granite (slow cool), basalt (fast cool)\n- **Sedimentary**: compressed sediments — limestone, sandstone\n- **Metamorphic**: heat/pressure transformed — marble, slate, gneiss",
          },
          {
            heading: "The rock cycle",
            body: "Igneous → weathering/erosion → sediments → compaction → sedimentary → heat/pressure → metamorphic → melting → magma → igneous.",
          },
          {
            heading: "Weathering",
            body: "Physical (freeze-thaw, abrasion), chemical (acid rain, oxidation), biological (roots, burrowing). Breaks rock into sediments.",
          },
        ],
        keyFormulas: [
          { name: "Rock cycle", statement: "Igneous→sedimentary→metamorphic→magma→igneous; weathering breaks down." },
        ],
        workedExample: {
          problem: "How does limestone form?",
          solution: "Sediments (shells, calcium carbonate) compressed over millions of years → sedimentary limestone.",
        },
      },
      questions: [
        {
          id: "cils-u8-rock-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which rock type forms from cooled lava?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Metamorphic" },
              { id: "b", text: "All of them" },
              { id: "c", text: "Igneous" },
              { id: "d", text: "Sedimentary" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Igneous", statement: "Formed from cooled magma/lava." },
            ],
            steps: [
              { reasoning: "Igneous = from magma.", working: "igneous", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Igneous",
            commonErrors: ["Choosing (b) — sedimentary is from sediments."],
          },
        },
        {
          id: "cils-u8-rock-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name three rock types.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Rock types", statement: "Igneous, sedimentary, metamorphic." },
            ],
            steps: [
              { reasoning: "Three types.", working: "types", marks: 1, markCode: "M" },
              { reasoning: "All correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Igneous, sedimentary, metamorphic.",
            commonErrors: ["Missing one or adding invalid type."],
          },
        },
        {
          id: "cils-u8-rock-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Describe the rock cycle.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Rock cycle", statement: "Igneous→sedimentary→metamorphic→magma→igneous; continuous." },
            ],
            steps: [
              { reasoning: "Igneous rocks weather → sediments → sedimentary.", working: "weathering", marks: 1, markCode: "M" },
              { reasoning: "Heat/pressure → metamorphic; melting → magma → igneous.", working: "transformation", marks: 1, markCode: "M" },
              { reasoning: "Cycle continuous — rocks transform over time.", working: "cycle", marks: 1, markCode: "M" },
              { reasoning: "Clear description.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Igneous→weathering→sedimentary→heat→metamorphic→melt→igneous.",
            commonErrors: ["One-way sequence — it's a cycle."],
          },
        },
        {
          id: "cils-u8-rock-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Investigate rocks and the rock cycle.",
          parts: [
            { label: "a", prompt: "Name three rock types with examples.", marks: 3 },
            { label: "b", prompt: "How does each form?", marks: 3 },
            { label: "c", prompt: "Describe weathering.", marks: 2 },
            { label: "d", prompt: "Explain why rocks are important.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Rocks", statement: "Igneous/sedimentary/metamorphic; weathering breaks down; rocks form landscapes." },
            ],
            steps: [
              { part: "a", reasoning: "Igneous (granite), sedimentary (limestone), metamorphic (marble).", working: "types", marks: 1, markCode: "M" },
              { part: "a", reasoning: "All three with examples.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Accurate.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Igneous=cool magma; sedimentary=compress sediments; metamorphic=heat/pressure.", working: "formation", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Accurate.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Physical (freeze-thaw), chemical (acid), biological (roots).", working: "weathering", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Two+ types.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Form landscapes, provide minerals, fossils record history.", working: "importance", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) igneous/sedimentary/metamorphic (b) magma/sediments/heat+pressure (c) physical/chemical/biological (d) landscapes/minerals",
            levels: [
              { level: "Level 3", marks: "2-3", descriptor: "Types+examples.", part: "a" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "a" },
              { level: "Level 3", marks: "2-3", descriptor: "Formation correct.", part: "b" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Types correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 2", marks: "1", descriptor: "Valid.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "d" },
            ],
            commonErrors: ["Metamorphic = heat/pressure, not magma cooling."],
          },
        },
        {
          id: "cils-u8-rock-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which rock forms from compressed sediments?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Volcanic" },
              { id: "b", text: "Metamorphic" },
              { id: "c", text: "Igneous" },
              { id: "d", text: "Sedimentary" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Sedimentary", statement: "Sediments compacted and cemented → sedimentary rock." }],
            steps: [{ reasoning: "Sediments → sedimentary.", working: "sedimentary", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Sedimentary",
          },
        },
        {
          id: "cils-u8-rock-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Marble forms when limestone is changed by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Cooling lava" },
              { id: "b", text: "Wind erosion" },
              { id: "c", text: "Water only" },
              { id: "d", text: "Heat and pressure" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Metamorphic", statement: "Heat + pressure transform existing rock → metamorphic." }],
            steps: [{ reasoning: "Marble = metamorphosed limestone.", working: "heat+pressure", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Heat and pressure",
          },
        },
        {
          id: "cils-u8-rock-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Basalt forms when lava cools:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "In water" },
              { id: "b", text: "Under pressure" },
              { id: "c", text: "Slowly underground" },
              { id: "d", text: "Quickly at the surface" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "skill", name: "Igneous texture", statement: "Fast cooling (lava) → fine-grained basalt; slow (magma) → granite." }],
            steps: [{ reasoning: "Surface lava cools fast → basalt.", working: "fast cool", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Quickly at the surface",
          },
        },
        {
          id: "cils-u8-rock-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which of these is a type of weathering?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Freeze-thaw breaking rock" },
              { id: "b", text: "Cementation" },
              { id: "c", text: "Melting rock" },
              { id: "d", text: "Compaction" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Weathering", statement: "Physical, chemical or biological breakdown of rock." }],
            steps: [{ reasoning: "Freeze-thaw is physical weathering.", working: "freeze-thaw", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Freeze-thaw",
          },
        },
        {
          id: "cils-u8-rock-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "In the rock cycle, metamorphic rock becomes magma by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Compaction" },
              { id: "b", text: "Erosion" },
              { id: "c", text: "Freezing" },
              { id: "d", text: "Melting" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "skill", name: "Rock cycle", statement: "Metamorphic → melt → magma → igneous." }],
            steps: [{ reasoning: "Melting turns rock to magma.", working: "melt", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Melting",
          },
        },
        {
          id: "cils-u8-rock-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Sedimentary rocks often contain fossils because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They form in fire" },
              { id: "b", text: "They are always soft" },
              { id: "c", text: "Remains are buried and preserved in compressed sediments" },
              { id: "d", text: "They are made of metal" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "context", name: "Fossils", statement: "Organisms buried in sediment can be preserved as fossils." }],
            steps: [{ reasoning: "Sediment burial preserves remains.", working: "burial", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Remains preserved in sediments",
          },
        },
        {
          id: "cils-u8-rock-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which process turns igneous rock into sediment?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Melting" },
              { id: "b", text: "Weathering and erosion" },
              { id: "c", text: "Freezing" },
              { id: "d", text: "Pressure alone" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "skill", name: "Rock cycle", statement: "Igneous → weathering/erosion → sediments → sedimentary." }],
            steps: [{ reasoning: "Weathering breaks rock; erosion carries it away.", working: "weathering", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Weathering and erosion",
          },
        },
        {
          id: "cils-u8-rock-q12",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "How many main types of rock are there? Enter the number only.",
          response: { type: "numeric", parts: [{ label: "Types", answer: 3 }] },
          markscheme: {
            principles: [{ kind: "convention", name: "Rock types", statement: "Igneous, sedimentary, metamorphic — three types." }],
            steps: [
              { reasoning: "Count rock types.", working: "3", marks: 1, markCode: "M" },
              { reasoning: "Three types.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$3$",
          },
        },
        {
          id: "cils-u8-rock-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "Limestone forms when sediments are compressed over roughly how many years? Enter the number only.",
          response: { type: "numeric", parts: [{ label: "Millions of years", answer: 300 }] },
          markscheme: {
            principles: [{ kind: "context", name: "Sedimentary time", statement: "Sedimentary rocks take millions of years to form." }],
            steps: [
              { reasoning: "Sedimentation is very slow — millions of years.", working: "millions", marks: 1, markCode: "M" },
              { reasoning: "Accept ~300 (any millions-scale figure).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\sim 300\\ \\text{million years}$",
          },
        },
        {
          id: "cils-u8-rock-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name the three stages of the rock cycle in order after igneous rock: weathering → ? → ?. Enter the two missing names separated by a comma.",
          response: { type: "numeric", parts: [{ label: "Stages", answer: 2 }] },
          markscheme: {
            principles: [{ kind: "skill", name: "Rock cycle", statement: "Igneous → weathering → sediment → sedimentary → metamorphic → magma → igneous." }],
            steps: [
              { reasoning: "After weathering: sedimentation and metamorphism.", working: "2 stages", marks: 1, markCode: "M" },
              { reasoning: "Two transformations follow.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "sedimentation, metamorphism",
          },
        },
        {
          id: "cils-u8-rock-q15",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "How many of these rocks are igneous: granite, basalt, limestone, sandstone, marble? Enter the number only.",
          response: { type: "numeric", parts: [{ label: "Igneous count", answer: 2 }] },
          markscheme: {
            principles: [{ kind: "context", name: "Rock examples", statement: "Granite and basalt are igneous; limestone/sandstone sedimentary; marble metamorphic." }],
            steps: [
              { reasoning: "Granite + basalt = 2 igneous.", working: "2", marks: 1, markCode: "M" },
              { reasoning: "Others are sedimentary/metamorphic.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2$",
          },
        },
        {
          id: "cils-u8-rock-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the rock cycle, naming each transformation.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Rock cycle", statement: "Igneous → weathering/erosion → sediment → compaction → sedimentary → heat/pressure → metamorphic → melting → magma → igneous." }],
            steps: [
              { reasoning: "Igneous weathered/eroded into sediments.", working: "weathering", marks: 1, markCode: "M" },
              { reasoning: "Sediments compacted → sedimentary rock.", working: "compaction", marks: 1, markCode: "M" },
              { reasoning: "Heat/pressure → metamorphic; melting → magma → igneous.", working: "transform", marks: 1, markCode: "M" },
              { reasoning: "Cycle described correctly as continuous.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Igneous → weathering → sediments → sedimentary → metamorphic → magma → igneous.",
          },
        },
      ],
    },
    {
      id: "cils-u8-atmosphere",
      title: "Atmosphere and weather",
      skill: "Describe atmospheric layers, weather and climate.",
      lesson: {
        sections: [
          {
            heading: "Atmospheric layers",
            body: "- **Troposphere**: weather, ~10 km — where we live\n- **Stratosphere**: ozone layer absorbs UV\n- **Mesosphere**: meteors burn up\n- **Thermosphere**: auroras, satellites\n- **Exosphere**: fades to space",
          },
          {
            heading: "Weather vs climate",
            body: "Weather = short-term conditions (today's temperature, rain). Climate = long-term patterns (average over decades).",
          },
          {
            heading: "Weather systems",
            body: "Air pressure differences → wind. High pressure = clear; low pressure = rain. Fronts = boundary between air masses.",
          },
        ],
        keyFormulas: [
          { name: "Atmosphere", statement: "Troposphere=weather; stratosphere=ozone; pressure differences→wind/weather." },
        ],
        workedExample: {
          problem: "Why is it warmer near equator?",
          solution: "Sun's rays hit more directly — more solar energy per area → higher temperatures.",
        },
      },
      questions: [
        {
          id: "cils-u8-atm-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which layer contains most weather?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Stratosphere" },
              { id: "b", text: "Troposphere" },
              { id: "c", text: "Mesosphere" },
              { id: "d", text: "Thermosphere" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Troposphere", statement: "Lowest layer — contains weather." },
            ],
            steps: [
              { reasoning: "Troposphere = weather layer.", working: "troposphere", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Troposphere",
            commonErrors: ["Choosing (b) — stratosphere has ozone, not weather."],
          },
        },
        {
          id: "cils-u8-atm-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the difference between weather and climate?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Weather vs climate", statement: "Weather=short-term; climate=long-term average." },
            ],
            steps: [
              { reasoning: "Weather = today's conditions; climate = decades average.", working: "difference", marks: 1, markCode: "M" },
              { reasoning: "Correct distinction.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Weather = short-term conditions; climate = long-term patterns.",
            commonErrors: ["Using them interchangeably."],
          },
        },
        {
          id: "cils-u8-atm-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how air pressure affects weather.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Pressure systems", statement: "High pressure=clear; low pressure=rain; pressure differences→wind." },
            ],
            steps: [
              { reasoning: "High pressure: sinking air → clear skies.", working: "high", marks: 1, markCode: "M" },
              { reasoning: "Low pressure: rising air → clouds/rain.", working: "low", marks: 1, markCode: "M" },
              { reasoning: "Pressure differences drive wind — air flows high→low.", working: "wind", marks: 1, markCode: "M" },
              { reasoning: "Mechanism explained.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "High=clear, low=rain; pressure differences drive wind and weather.",
            commonErrors: ["Saying 'pressure causes rain directly' — it's via air movement."],
          },
        },
        {
          id: "cils-u8-atm-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Investigate Earth's atmosphere.",
          parts: [
            { label: "a", prompt: "Name atmospheric layers.", marks: 3 },
            { label: "b", prompt: "What is in each layer?", marks: 3 },
            { label: "c", prompt: "Explain weather vs climate.", marks: 2 },
            { label: "d", prompt: "How does the ozone layer protect us?", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Atmosphere", statement: "Layers: troposphere/stratosphere/mesosphere/thermosphere/exosphere; ozone protects." },
            ],
            steps: [
              { part: "a", reasoning: "Troposphere, stratosphere, mesosphere, thermosphere, exosphere.", working: "layers", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Four+ correct.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "All five.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Troposphere=weather; stratosphere=ozone; mesosphere=meteors; thermosphere=auroras.", working: "contents", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Mostly correct.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Accurate.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Weather=short-term; climate=long-term average.", working: "difference", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Absorbs harmful UV radiation — prevents skin damage.", working: "ozone", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) 5 layers (b) weather/ozone/meteors/auroras (c) short vs long-term (d) absorbs UV",
            levels: [
              { level: "Level 3", marks: "2-3", descriptor: "All layers.", part: "a" },
              { level: "Level 2", marks: "1", descriptor: "Four.", part: "a" },
              { level: "Level 3", marks: "2-3", descriptor: "Contents correct.", part: "b" },
              { level: "Level 2", marks: "1", descriptor: "Mostly.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 2", marks: "1", descriptor: "Correct.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "d" },
            ],
            commonErrors: ["Ozone layer in troposphere — it's in stratosphere."],
          },
        },
        {
          id: "cils-u8-atm-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which layer contains the ozone layer?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Troposphere" },
              { id: "b", text: "Stratosphere" },
              { id: "c", text: "Mesosphere" },
              { id: "d", text: "Exosphere" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Ozone", statement: "Ozone layer sits in the stratosphere and absorbs UV." }],
            steps: [{ reasoning: "Ozone is in stratosphere.", working: "stratosphere", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Stratosphere",
          },
        },
        {
          id: "cils-u8-atm-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Meteors usually burn up in which layer?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Stratosphere" },
              { id: "b", text: "Mesosphere" },
              { id: "c", text: "Troposphere" },
              { id: "d", text: "Thermosphere" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Mesosphere", statement: "Meteors burn up in the mesosphere." }],
            steps: [{ reasoning: "Mesosphere = meteor layer.", working: "mesosphere", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Mesosphere",
          },
        },
        {
          id: "cils-u8-atm-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Auroras are found mainly in the:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Troposphere" },
              { id: "b", text: "Thermosphere" },
              { id: "c", text: "Stratosphere" },
              { id: "d", text: "Exosphere" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Thermosphere", statement: "Auroras and satellites occur in the thermosphere." }],
            steps: [{ reasoning: "Thermosphere hosts auroras.", working: "thermosphere", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Thermosphere",
          },
        },
        {
          id: "cils-u8-atm-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Wind is caused by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Ocean waves" },
              { id: "b", text: "The Moon's gravity" },
              { id: "c", text: "Earth's rotation only" },
              { id: "d", text: "Differences in air pressure" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "skill", name: "Wind", statement: "Air flows from high to low pressure → wind." }],
            steps: [{ reasoning: "Pressure gradient drives wind.", working: "pressure diff", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Pressure differences",
          },
        },
        {
          id: "cils-u8-atm-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A 'front' is best described as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A weather station" },
              { id: "b", text: "The boundary between two air masses" },
              { id: "c", text: "A wind direction" },
              { id: "d", text: "A type of cloud" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Front", statement: "Boundary where warm and cold air masses meet." }],
            steps: [{ reasoning: "Front = air mass boundary.", working: "boundary", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Boundary between air masses",
          },
        },
        {
          id: "cils-u8-atm-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Low pressure systems usually bring:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "No wind" },
              { id: "b", text: "Frost" },
              { id: "c", text: "Clear skies" },
              { id: "d", text: "Cloudy, wet weather" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "skill", name: "Pressure systems", statement: "Low pressure → rising air → clouds and rain." }],
            steps: [{ reasoning: "Low pressure brings rain.", working: "low P", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Cloudy, wet weather",
          },
        },
        {
          id: "cils-u8-atm-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "'Climate' refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Long-term average weather patterns" },
              { id: "b", text: "Hourly rainfall" },
              { id: "c", text: "A single storm" },
              { id: "d", text: "Today's temperature" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Climate", statement: "Average conditions over decades." }],
            steps: [{ reasoning: "Climate = long-term average.", working: "long-term", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Long-term average",
          },
        },
        {
          id: "cils-u8-atm-q12",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "How many main layers does Earth's atmosphere have (troposphere to exosphere)? Enter the number only.",
          response: { type: "numeric", parts: [{ label: "Layers", answer: 5 }] },
          markscheme: {
            principles: [{ kind: "convention", name: "Atmosphere layers", statement: "Troposphere, stratosphere, mesosphere, thermosphere, exosphere — five." }],
            steps: [
              { reasoning: "Count layers.", working: "5", marks: 1, markCode: "M" },
              { reasoning: "Five layers.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$5$",
          },
        },
        {
          id: "cils-u8-atm-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "The troposphere extends to roughly what height in km? Enter the number only.",
          response: { type: "numeric", parts: [{ label: "Height", answer: 10, unit: "km" }] },
          markscheme: {
            principles: [{ kind: "convention", name: "Troposphere", statement: "Troposphere is about 10 km thick (varies with latitude)." }],
            steps: [
              { reasoning: "Troposphere ≈ 10 km.", working: "10", marks: 1, markCode: "M" },
              { reasoning: "Answer ≈ 10 km.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\approx 10\\ \\text{km}$",
          },
        },
        {
          id: "cils-u8-atm-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "If weather is measured daily and climate is measured over decades, roughly how many years minimum define 'climate'? Enter the number only.",
          response: { type: "numeric", parts: [{ label: "Years", answer: 30 }] },
          markscheme: {
            principles: [{ kind: "convention", name: "Climate period", statement: "Climate averages typically use 30-year periods." }],
            steps: [
              { reasoning: "Climate uses ~30-year averages.", working: "30", marks: 1, markCode: "M" },
              { reasoning: "Accept ~30 years.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\approx 30\\ \\text{years}$",
          },
        },
        {
          id: "cils-u8-atm-q15",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Of these, how many are atmospheric layers: crust, troposphere, mantle, mesosphere, core? Enter the number only.",
          response: { type: "numeric", parts: [{ label: "Layers", answer: 2 }] },
          markscheme: {
            principles: [{ kind: "context", name: "Atmosphere vs Earth", statement: "Troposphere and mesosphere are atmospheric; crust/mantle/core are Earth's interior." }],
            steps: [
              { reasoning: "Troposphere + mesosphere = 2.", working: "2", marks: 1, markCode: "M" },
              { reasoning: "Crust/mantle/core are not atmosphere.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2$",
          },
        },
        {
          id: "cils-u8-atm-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how air pressure differences create wind and affect weather.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Pressure systems", statement: "Air flows high→low pressure = wind; low pressure → rising air → rain; high pressure → sinking → clear." }],
            steps: [
              { reasoning: "Pressure differences cause air to flow from high to low.", working: "wind", marks: 1, markCode: "M" },
              { reasoning: "Low pressure: air rises, cools, forms clouds/rain.", working: "low", marks: 1, markCode: "M" },
              { reasoning: "High pressure: air sinks, warms, gives clear skies.", working: "high", marks: 1, markCode: "M" },
              { reasoning: "Complete mechanism explained.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Air flows high→low pressure (wind); low pressure brings rain, high pressure brings clear weather.",
          },
        },
      ],
    },
    {
      id: "cils-u8-space",
      title: "Space and the solar system",
      skill: "Describe the solar system, planets and space phenomena.",
      lesson: {
        sections: [
          {
            heading: "The solar system",
            body: "Sun at centre; 8 planets orbit. Terrestrial (Mercury, Venus, Earth, Mars) = rocky; gas giants (Jupiter, Saturn, Uranus, Neptune) = gas/ice.",
          },
          {
            heading: "Earth's position",
            body: "Third planet — right distance for liquid water. Atmosphere protects, magnetic field shields radiation.",
          },
          {
            heading: "Space phenomena",
            body: "Day/night = rotation; seasons = tilt + orbit; eclipses = alignment; tides = Moon's gravity.",
          },
        ],
        keyFormulas: [
          { name: "Solar system", statement: "8 planets; Earth 3rd — conditions for life; rotation→day/night; orbit+tilt→seasons." },
        ],
        workedExample: {
          problem: "Why do we have seasons?",
          solution: "Earth's tilted axis means different hemispheres get more direct sunlight at different times of year.",
        },
      },
      questions: [
        {
          id: "cils-u8-space-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many planets are in our solar system?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "10" },
              { id: "b", text: "9" },
              { id: "c", text: "8" },
              { id: "d", text: "7" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Solar system", statement: "8 planets — Pluto reclassified as dwarf planet." },
            ],
            steps: [
              { reasoning: "8 planets.", working: "8", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** 8",
            commonErrors: ["Choosing (c) — Pluto is dwarf planet now."],
          },
        },
        {
          id: "cils-u8-space-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What causes day and night?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Day/night", statement: "Earth's rotation on axis — different parts face Sun." },
            ],
            steps: [
              { reasoning: "Rotation — one side faces Sun (day), other away (night).", working: "rotation", marks: 1, markCode: "M" },
              { reasoning: "Correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Earth's rotation — one side faces Sun at a time.",
            commonErrors: ["Saying 'orbit' — that's for seasons/year, not day/night."],
          },
        },
        {
          id: "cils-u8-space-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why Earth can support life.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Habitability", statement: "Right distance for liquid water, atmosphere, magnetic field, temperature." },
            ],
            steps: [
              { reasoning: "Right distance from Sun — liquid water possible.", working: "distance", marks: 1, markCode: "M" },
              { reasoning: "Atmosphere with oxygen + protective ozone.", working: "atmosphere", marks: 1, markCode: "M" },
              { reasoning: "Magnetic field shields harmful radiation.", working: "magnetic", marks: 1, markCode: "M" },
              { reasoning: "Multiple factors explained.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Right distance (water), atmosphere, magnetic field — conditions for life.",
            commonErrors: ["Only mentioning water — need multiple factors."],
          },
        },
        {
          id: "cils-u8-space-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Investigate the solar system.",
          parts: [
            { label: "a", prompt: "Name planets in order.", marks: 3 },
            { label: "b", prompt: "Describe terrestrial vs gas giants.", marks: 2 },
            { label: "c", prompt: "Explain day/night and seasons.", marks: 2 },
            { label: "d", prompt: "Why is Earth unique?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Solar system", statement: "8 planets; terrestrial vs gas giants; Earth habitable." },
            ],
            steps: [
              { part: "a", reasoning: "Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune.", working: "order", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Mostly correct.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "All eight.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Terrestrial: rocky, small, inner. Gas giants: gas/ice, large, outer.", working: "types", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Day/night=rotation; seasons=tilt+orbit.", working: "motion", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Liquid water, atmosphere, magnetic field, right distance — life possible.", working: "unique", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Multiple factors.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 8 planets in order (b) rocky vs gas (c) rotation+tilt (d) water/atmosphere/magnetic field",
            levels: [
              { level: "Level 3", marks: "2-3", descriptor: "Order correct.", part: "a" },
              { level: "Level 2", marks: "1", descriptor: "Mostly.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Partial.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Factors listed.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Few.", part: "d" },
            ],
            commonErrors: ["Pluto as planet — it's a dwarf planet now."],
          },
        },
        {
          id: "cils-u8-space-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is at the centre of our solar system?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The Sun" },
              { id: "b", text: "Jupiter" },
              { id: "c", text: "The Moon" },
              { id: "d", text: "Earth" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "convention", name: "Solar system", statement: "Sun at centre; planets orbit it." }],
            steps: [{ reasoning: "Sun is the centre.", working: "sun", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** The Sun",
          },
        },
        {
          id: "cils-u8-space-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Earth is which planet from the Sun?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Third" },
              { id: "b", text: "Fifth" },
              { id: "c", text: "Eighth" },
              { id: "d", text: "First" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "convention", name: "Earth's position", statement: "Mercury, Venus, Earth — third planet." }],
            steps: [{ reasoning: "Earth is third.", working: "3rd", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Third",
          },
        },
        {
          id: "cils-u8-space-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which group contains rocky planets?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Jupiter, Saturn, Uranus, Neptune" },
              { id: "b", text: "Mercury, Venus, Earth, Mars" },
              { id: "c", text: "Only Jupiter" },
              { id: "d", text: "The Moon and asteroids" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "convention", name: "Planet types", statement: "Terrestrial planets are rocky and inner." }],
            steps: [{ reasoning: "First four are rocky.", working: "terrestrial", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Mercury–Mars",
          },
        },
        {
          id: "cils-u8-space-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Seasons on Earth are caused mainly by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Ocean tides" },
              { id: "b", text: "Earth's distance from the Sun changing" },
              { id: "c", text: "The tilt of Earth's axis during its orbit" },
              { id: "d", text: "The Moon's phases" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "skill", name: "Seasons", statement: "Axial tilt means hemispheres get different sunlight through the year." }],
            steps: [{ reasoning: "Tilt + orbit → seasons.", working: "tilt", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Axial tilt",
          },
        },
        {
          id: "cils-u8-space-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A solar eclipse occurs when:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The Sun moves behind Earth" },
              { id: "b", text: "Earth passes between Sun and Moon" },
              { id: "c", text: "The Moon passes between Earth and the Sun" },
              { id: "d", text: "Mars blocks the Sun" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Solar eclipse", statement: "Moon blocks sunlight reaching Earth." }],
            steps: [{ reasoning: "Moon between Sun and Earth.", working: "moon", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Moon passes between Earth and Sun",
          },
        },
        {
          id: "cils-u8-space-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Ocean tides are mainly caused by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Earth's rotation" },
              { id: "b", text: "The Moon's gravitational pull" },
              { id: "c", text: "Wind pushing water" },
              { id: "d", text: "Rainfall" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "skill", name: "Tides", statement: "Moon's gravity pulls on oceans → tides." }],
            steps: [{ reasoning: "Moon gravity → tides.", working: "moon gravity", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Moon's gravitational pull",
          },
        },
        {
          id: "cils-u8-space-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which is NOT a gas giant?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Saturn" },
              { id: "b", text: "Mars" },
              { id: "c", text: "Jupiter" },
              { id: "d", text: "Neptune" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "convention", name: "Gas giants", statement: "Jupiter, Saturn, Uranus, Neptune are gas/ice giants." }],
            steps: [{ reasoning: "Mars is terrestrial.", working: "mars", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Mars",
          },
        },
        {
          id: "cils-u8-space-q12",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "How many planets orbit the Sun? Enter the number only.",
          response: { type: "numeric", parts: [{ label: "Planets", answer: 8 }] },
          markscheme: {
            principles: [{ kind: "convention", name: "Planets", statement: "Eight planets orbit the Sun." }],
            steps: [
              { reasoning: "Count planets.", working: "8", marks: 1, markCode: "M" },
              { reasoning: "Eight planets.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$8$",
          },
        },
        {
          id: "cils-u8-space-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "How many terrestrial (rocky) planets are there? Enter the number only.",
          response: { type: "numeric", parts: [{ label: "Terrestrial", answer: 4 }] },
          markscheme: {
            principles: [{ kind: "convention", name: "Terrestrial planets", statement: "Mercury, Venus, Earth, Mars — four rocky planets." }],
            steps: [
              { reasoning: "Four rocky planets.", working: "4", marks: 1, markCode: "M" },
              { reasoning: "Answer = 4.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$4$",
          },
        },
        {
          id: "cils-u8-space-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "Earth takes about how many days to rotate once (day length)? Enter the number only.",
          response: { type: "numeric", parts: [{ label: "Days", answer: 1 }] },
          markscheme: {
            principles: [{ kind: "convention", name: "Rotation", statement: "Earth rotates once every ~24 hours = 1 day." }],
            steps: [
              { reasoning: "One rotation = one day ≈ 24 h.", working: "1", marks: 1, markCode: "M" },
              { reasoning: "Answer ≈ 1 day.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$1\\ \\text{day}$",
          },
        },
        {
          id: "cils-u8-space-q15",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Earth's axis is tilted at about how many degrees? Enter the number only.",
          response: { type: "numeric", parts: [{ label: "Degrees", answer: 23 }] },
          markscheme: {
            principles: [{ kind: "convention", name: "Axial tilt", statement: "Earth's axis tilts ~23.5° — causes seasons." }],
            steps: [
              { reasoning: "Tilt ≈ 23.5°.", working: "23.5", marks: 1, markCode: "M" },
              { reasoning: "Answer ≈ 23 (accept 23.5).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\approx 23.5^\\circ$",
          },
        },
        {
          id: "cils-u8-space-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why Earth can support life but other planets cannot.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Habitability", statement: "Right distance (liquid water), atmosphere with oxygen, magnetic field, suitable temperature." }],
            steps: [
              { reasoning: "Right distance from Sun → liquid water possible.", working: "distance", marks: 1, markCode: "M" },
              { reasoning: "Atmosphere protects and provides oxygen; ozone blocks UV.", working: "atmosphere", marks: 1, markCode: "M" },
              { reasoning: "Magnetic field shields harmful solar radiation.", working: "magnetic", marks: 1, markCode: "M" },
              { reasoning: "Multiple factors linked to life.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Liquid water, atmosphere and magnetic field — conditions other planets lack.",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cils-u8-earth-notes",
      title: "Earth and space — revision notes",
      summary: "Earth's layers, rock cycle, atmosphere, solar system.",
      sections: [
        {
          heading: "Earth",
          body: "Layers: crust/mantle/core. Plates move → earthquakes/volcanoes. Rocks: igneous/sedimentary/metamorphic cycle. Atmosphere: troposphere=weather, ozone protects.",
        },
        {
          heading: "Space",
          body: "8 planets; Earth 3rd — habitable. Day/night=rotation; seasons=tilt+orbit. Life needs water, atmosphere, magnetic field.",
        },
      ],
    },
  ],
};
