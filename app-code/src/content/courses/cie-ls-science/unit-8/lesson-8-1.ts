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
              { id: "a", text: "Crust" },
              { id: "b", text: "Mantle" },
              { id: "c", text: "Core" },
              { id: "d", text: "Atmosphere" },
            ],
            correctChoiceId: "a",
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
              { id: "a", text: "Igneous" },
              { id: "b", text: "Sedimentary" },
              { id: "c", text: "Metamorphic" },
              { id: "d", text: "All of them" },
            ],
            correctChoiceId: "a",
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
              { id: "a", text: "Troposphere" },
              { id: "b", text: "Stratosphere" },
              { id: "c", text: "Mesosphere" },
              { id: "d", text: "Thermosphere" },
            ],
            correctChoiceId: "a",
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
              { id: "a", text: "8" },
              { id: "b", text: "7" },
              { id: "c", text: "9" },
              { id: "d", text: "10" },
            ],
            correctChoiceId: "a",
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
