module.exports = [
  {
    file: "lesson-1-1.ts", exportName: "lesson301",
    lesson: {
      id: "cieigeo-u1-lesson-1-1", code: "1-1",
      title: "Freshwater Systems and Drainage Basins",
      goal: "I CAN describe the water cycle, drainage basins and river processes.",
      standards: ["Cambridge IGCSE Geography 0460", "Paper 1: physical geography"],
      vocabulary: [
        { term: "Water cycle", definition: "Continuous movement of water between atmosphere, land, oceans." },
        { term: "Drainage basin", definition: "Area drained by a river and its tributaries." },
        { term: "Watershed", definition: "Boundary separating drainage basins." },
        { term: "Tributary", definition: "Smaller river joining a main river." },
        { term: "Erosion", definition: "Wearing away of land surface." },
        { term: "Deposition", definition: "Dropping of sediment by water." },
      ],
      concept: {
        id: "cieigeo-u1-s1-water", title: "Freshwater systems",
        skill: "Understand water cycle and drainage basins.",
        sections: [
          { heading: "Water cycle", body: "Evaporation→condensation→precipitation→collection. Oceans evaporate; water falls as rain/snow; flows back to oceans via rivers. Energy from sun drives cycle." },
          { heading: "Drainage basin", body: "Area drained by river system. Processes: erosion (upper course), transportation (middle), deposition (lower course). Landforms: V-shaped valleys, meanders, oxbow lakes, deltas, floodplains." },
        ],
        keyFormulas: [
          { name: "Water cycle", statement: "evaporation→condensation→precipitation" },
          { name: "Drainage basin", statement: "river system area" },
        ],
        workedExample: {
          problem: "Why does a river erode more in upper course and deposit in lower course?",
          solution: "Upper: steep gradient, fast flow, high energy → erosion. Lower: gentle gradient, slow flow, low energy → deposition.",
        },
        questions: [
          {
            id: "cieigeo-u1-wt-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is the water cycle?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Continuous movement of water between atmosphere, land, oceans" }, { id: "b", text: "A type of river" }, { id: "c", text: "A weather pattern" }, { id: "d", text: "A landform" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Water cycle", statement: "Water movement." }],
              steps: [{ reasoning: "Water cycle = continuous water movement.", marks: 1, markCode: "M" }],
              finalAnswer: "Water movement cycle",
            },
          },
          {
            id: "cieigeo-u1-wt-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What is a drainage basin?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Drainage basin", statement: "River system area." }],
              steps: [
                { reasoning: "Area drained by river and tributaries.", marks: 1, markCode: "M" },
                { reasoning: "Bounded by watershed.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "River system area",
            },
          },
          {
            id: "cieigeo-u1-wt-q3", difficulty: "core", totalMarks: 3,
            stem: "What processes occur in the upper, middle and lower course of a river?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "River processes", statement: "Erosion/transport/deposition." }],
              steps: [
                { reasoning: "Upper: erosion, V-shaped valley.", marks: 1, markCode: "M" },
                { reasoning: "Middle: transportation, meanders.", marks: 1, markCode: "M" },
                { reasoning: "Lower: deposition, floodplains/deltas.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Erosion→transport→deposition",
            },
          },
          {
            id: "cieigeo-u1-wt-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define water cycle, drainage basin, watershed, tributary, erosion, deposition. (b) What is the water cycle? (c) What is a drainage basin? (d) What is a watershed? (e) What processes occur in upper course? (f) What processes occur in lower course? (g) Name 3 river landforms. (h) Draw a cross-section of a river showing erosion and deposition.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Freshwater", statement: "Water cycle, rivers." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Continuous water movement.", marks: 1, markCode: "M" },
                { reasoning: "(c) River system area.", marks: 1, markCode: "M" },
                { reasoning: "(d) Basin boundary.", marks: 1, markCode: "M" },
                { reasoning: "(e) Erosion, V-shaped valley.", marks: 1, markCode: "M" },
                { reasoning: "(f) Deposition, floodplains/deltas.", marks: 1, markCode: "M" },
                { reasoning: "(g) Three valid landforms.", marks: 1, markCode: "M" },
                { reasoning: "(h) Valid cross-section.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Freshwater systems and rivers.",
            },
          },
        ],
      },
    },
    notes: {
      id: "cieigeo-u1-wt-notes", title: "Freshwater — notes",
      summary: "Water cycle=evaporation→condensation→precipitation. Rivers erode upper, deposit lower course.",
      sections: [
        { heading: "Key idea", body: "River processes change from erosion (upper) to deposition (lower) course." },
        { heading: "Landforms", body: "V-shaped valleys, meanders, oxbow lakes, floodplains, deltas." },
      ],
    },
  },
  {
    file: "lesson-1-2.ts", exportName: "lesson302",
    lesson: {
      id: "cieigeo-u1-lesson-1-2", code: "1-2",
      title: "Weather and Climate",
      goal: "I CAN distinguish weather from climate and describe atmospheric circulation.",
      standards: ["Cambridge IGCSE Geography 0460", "Paper 1: weather and climate"],
      vocabulary: [
        { term: "Weather", definition: "Atmospheric conditions at a specific time/place." },
        { term: "Climate", definition: "Average weather conditions over long period." },
        { term: "Atmospheric circulation", definition: "Global air movement patterns." },
        { term: "Jet stream", definition: "Fast-moving air currents in upper atmosphere." },
        { term: "Monsoon", definition: "Seasonal wind reversal bringing rain." },
        { term: "El Niño", definition: "Periodic warming of Pacific Ocean affecting global weather." },
      ],
      concept: {
        id: "cieigeo-u1-s2-clim", title: "Weather and climate",
        skill: "Understand weather systems and climate patterns.",
        sections: [
          { heading: "Weather vs climate", body: "Weather: daily conditions (temperature, precipitation, wind). Climate: long-term averages (30+ years). Weather is what you experience; climate is what you expect." },
          { heading: "Atmospheric circulation", body: "Global air movement: Hadley cells (equator), Ferrel cells (mid-latitudes), Polar cells. Creates trade winds, westerlies, polar easterlies. Jet streams affect weather systems." },
          { heading: "Climate influences", body: "Latitude (solar energy), altitude, distance from sea, ocean currents, prevailing winds." },
        ],
        keyFormulas: [
          { name: "Weather", statement: "daily conditions" },
          { name: "Climate", statement: "long-term averages" },
          { name: "Circulation", statement: "Hadley/Ferrel/Polar cells" },
        ],
        workedExample: {
          problem: "Why is it warmer at equator than poles?",
          solution: "Sun's rays hit equator more directly — more concentrated solar energy. Less atmospheric absorption.",
        },
        questions: [
          {
            id: "cieigeo-u1-wc-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is the difference between weather and climate?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Weather=daily conditions; climate=long-term averages" }, { id: "b", text: "They're the same" }, { id: "c", text: "Weather is long-term" }, { id: "d", text: "Climate is daily" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Weather vs climate", statement: "Daily vs average." }],
              steps: [{ reasoning: "Weather=daily; climate=long-term average.", marks: 1, markCode: "M" }],
              finalAnswer: "Daily vs long-term",
            },
          },
          {
            id: "cieigeo-u1-wc-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What drives global atmospheric circulation?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Circulation", statement: "Global air movement." }],
              steps: [
                { reasoning: "Uneven solar heating creates pressure differences.", marks: 1, markCode: "M" },
                { reasoning: "Air moves from high to low pressure.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Uneven solar heating",
            },
          },
          {
            id: "cieigeo-u1-wc-q3", difficulty: "core", totalMarks: 3,
            stem: "What factors influence climate?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Climate factors", statement: "Influences on climate." }],
              steps: [
                { reasoning: "Latitude, altitude, distance from sea.", marks: 1, markCode: "M" },
                { reasoning: "Ocean currents, prevailing winds.", marks: 1, markCode: "M" },
                { reasoning: "All major factors identified.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Latitude, altitude, proximity to sea",
            },
          },
          {
            id: "cieigeo-u1-wc-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define weather, climate, atmospheric circulation, jet stream, monsoon, El Niño. (b) What is weather? (c) What is climate? (d) What drives atmospheric circulation? (e) What factors influence climate? (f) What is the jet stream? (g) What is El Niño? (h) Explain why coastal areas have milder climates than inland.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Weather/climate", statement: "Systems, factors." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Daily conditions.", marks: 1, markCode: "M" },
                { reasoning: "(c) Long-term averages.", marks: 1, markCode: "M" },
                { reasoning: "(d) Uneven solar heating.", marks: 1, markCode: "M" },
                { reasoning: "(e) Latitude, altitude, distance from sea.", marks: 1, markCode: "M" },
                { reasoning: "(f) Fast upper-atmosphere winds.", marks: 1, markCode: "M" },
                { reasoning: "(g) Pacific warming affecting weather.", marks: 1, markCode: "M" },
                { reasoning: "(h) Sea moderates temperature.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Weather and climate systems.",
            },
          },
        ],
      },
    },
    notes: {
      id: "cieigeo-u1-wc-notes", title: "Weather/climate — notes",
      summary: "Weather=daily, climate=long-term. Circulation driven by solar heating. Latitude, altitude, sea proximity affect climate.",
      sections: [
        { heading: "Key idea", body: "Climate = weather averaged over 30+ years." },
        { heading: "Factors", body: "Latitude, altitude, distance from sea, ocean currents, winds." },
      ],
    },
  },
  {
    file: "lesson-1-3.ts", exportName: "lesson303",
    lesson: {
      id: "cieigeo-u1-lesson-1-3", code: "1-3",
      title: "Rocks and Weathering",
      goal: "I CAN describe rock types, weathering processes and landform formation.",
      standards: ["Cambridge IGCSE Geography 0460", "Paper 1: rocks and weathering"],
      vocabulary: [
        { term: "Weathering", definition: "Breakdown of rocks in situ." },
        { term: "Erosion", definition: "Removal of weathered material." },
        { term: "Igneous rock", definition: "Rock formed from cooled magma/lava." },
        { term: "Sedimentary rock", definition: "Rock formed from deposited sediments." },
        { term: "Metamorphic rock", definition: "Rock changed by heat/pressure." },
        { term: "Physical weathering", definition: "Breakdown without chemical change." },
      ],
      concept: {
        id: "cieigeo-u1-s3-rock", title: "Rocks and weathering",
        skill: "Understand rock cycle and weathering.",
        sections: [
          { heading: "Rock types", body: "Igneous: granite, basalt — from magma. Sedimentary: limestone, sandstone — from sediments. Metamorphic: marble, slate — from heat/pressure. Rock cycle: igneous→sedimentary→metamorphic→igneous." },
          { heading: "Weathering", body: "Physical: freeze-thaw, exfoliation, pressure release. Chemical: dissolution, oxidation, hydrolysis. Biological: root action, burrowing. Weathering prepares material for erosion." },
        ],
        keyFormulas: [
          { name: "Igneous", statement: "magma/lava" },
          { name: "Sedimentary", statement: "deposited sediments" },
          { name: "Metamorphic", statement: "heat/pressure" },
        ],
        workedExample: {
          problem: "Why does limestone dissolve in rainwater?",
          solution: "Chemical weathering — rainwater contains carbonic acid which dissolves calcium carbonate.",
        },
        questions: [
          {
            id: "cieigeo-u1-rk-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is weathering?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Breakdown of rocks in situ" }, { id: "b", text: "Removal of material" }, { id: "c", text: "Rock formation" }, { id: "d", text: "A type of erosion" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Weathering", statement: "In-situ breakdown." }],
              steps: [{ reasoning: "Weathering = rock breakdown in place.", marks: 1, markCode: "M" }],
              finalAnswer: "In-situ rock breakdown",
            },
          },
          {
            id: "cieigeo-u1-rk-q2", difficulty: "foundation", totalMarks: 2,
            stem: "Name the three rock types.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Rock types", statement: "Igneous, sedimentary, metamorphic." }],
              steps: [
                { reasoning: "Igneous, sedimentary, metamorphic.", marks: 1, markCode: "M" },
                { reasoning: "All three correctly named.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Igneous, sedimentary, metamorphic",
            },
          },
          {
            id: "cieigeo-u1-rk-q3", difficulty: "core", totalMarks: 3,
            stem: "What is freeze-thaw weathering?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Freeze-thaw", statement: "Physical weathering." }],
              steps: [
                { reasoning: "Water enters cracks, freezes, expands.", marks: 1, markCode: "M" },
                { reasoning: "Repeated cycles break rock apart.", marks: 1, markCode: "M" },
                { reasoning: "Common in cold climates.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Ice expansion breaks rocks",
            },
          },
          {
            id: "cieigeo-u1-rk-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define weathering, erosion, igneous rock, sedimentary rock, metamorphic rock, physical weathering, chemical weathering. (b) What is weathering? (c) What are the three rock types? (d) Give an example of each rock type. (e) What is freeze-thaw weathering? (f) What is chemical weathering? Give an example. (g) What is the rock cycle? (h) Explain how weathering leads to erosion.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Rocks", statement: "Types, weathering, cycle." }],
              steps: [
                { reasoning: "(a) All seven definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) In-situ rock breakdown.", marks: 1, markCode: "M" },
                { reasoning: "(c) Igneous, sedimentary, metamorphic.", marks: 1, markCode: "M" },
                { reasoning: "(d) Valid examples for each.", marks: 1, markCode: "M" },
                { reasoning: "(e) Ice expansion breaks rocks.", marks: 1, markCode: "M" },
                { reasoning: "(f) Chemical breakdown; e.g. limestone dissolution.", marks: 1, markCode: "M" },
                { reasoning: "(g) Igneous→sedimentary→metamorphic→igneous.", marks: 1, markCode: "M" },
                { reasoning: "(h) Weathering weakens → erosion removes.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Rocks and weathering.",
            },
          },
        ],
      },
    },
    notes: {
      id: "cieigeo-u1-rk-notes", title: "Rocks — notes",
      summary: "Three rock types: igneous/sedimentary/metamorphic. Weathering=breakdown; physical vs chemical.",
      sections: [
        { heading: "Key idea", body: "Rock cycle shows how rocks transform over geological time." },
        { heading: "Weathering", body: "Physical (freeze-thaw) vs chemical (dissolution, oxidation)." },
      ],
    },
  },
  {
    file: "lesson-1-4.ts", exportName: "lesson304",
    lesson: {
      id: "cieigeo-u1-lesson-1-4", code: "1-4",
      title: "Natural Hazards: Earthquakes and Volcanoes",
      goal: "I CAN explain tectonic plate movement and assess earthquake/volcano impacts.",
      standards: ["Cambridge IGCSE Geography 0460", "Paper 1: natural hazards"],
      vocabulary: [
        { term: "Tectonic plate", definition: "Large slab of Earth's lithosphere." },
        { term: "Plate boundary", definition: "Edge where plates meet." },
        { term: "Earthquake", definition: "Sudden release of energy in Earth's crust." },
        { term: "Volcano", definition: "Opening in Earth's crust allowing magma escape." },
        { term: "Epicentre", definition: "Point on surface directly above earthquake focus." },
        { term: "Richter scale", definition: "Scale measuring earthquake magnitude." },
      ],
      concept: {
        id: "cieigeo-u1-s4-haz", title: "Natural hazards",
        skill: "Understand tectonic hazards and impacts.",
        sections: [
          { heading: "Plate tectonics", body: "Earth's crust divided into plates. Boundaries: constructive (plates move apart — volcanoes), destructive (plates collide — earthquakes/volcanoes), conservative (plates slide — earthquakes)." },
          { heading: "Impacts", body: "Earthquakes: building collapse, fires, tsunamis, landslides. Volcanoes: ash fall, lava flows, pyroclastic flows, lahars. Impacts vary by magnitude, preparedness, development level." },
        ],
        keyFormulas: [
          { name: "Constructive", statement: "plates apart — volcanoes" },
          { name: "Destructive", statement: "plates collide — quakes/volcanoes" },
          { name: "Conservative", statement: "plates slide — quakes" },
        ],
        workedExample: {
          problem: "Why do earthquakes occur at destructive plate boundaries?",
          solution: "Plates collide — friction builds until sudden release of energy causes seismic waves.",
        },
        questions: [
          {
            id: "cieigeo-u1-nh-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is a tectonic plate?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Large slab of Earth's lithosphere" }, { id: "b", text: "A type of rock" }, { id: "c", text: "A weather system" }, { id: "d", text: "An ocean current" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Tectonic plate", statement: "Earth's crust slab." }],
              steps: [{ reasoning: "Plate = large lithosphere slab.", marks: 1, markCode: "M" }],
              finalAnswer: "Earth's crust slab",
            },
          },
          {
            id: "cieigeo-u1-nh-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What is an earthquake?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Earthquake", statement: "Sudden energy release." }],
              steps: [
                { reasoning: "Sudden release of energy in Earth's crust.", marks: 1, markCode: "M" },
                { reasoning: "Causes seismic waves.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Sudden energy release",
            },
          },
          {
            id: "cieigeo-u1-nh-q3", difficulty: "core", totalMarks: 3,
            stem: "What are the three types of plate boundary?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Plate boundaries", statement: "Constructive/destructive/conservative." }],
              steps: [
                { reasoning: "Constructive (apart), destructive (collide), conservative (slide).", marks: 1, markCode: "M" },
                { reasoning: "All three correctly identified.", marks: 1, markCode: "M" },
                { reasoning: "Hazards associated with each.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Constructive, destructive, conservative",
            },
          },
          {
            id: "cieigeo-u1-nh-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define tectonic plate, plate boundary, earthquake, volcano, epicentre, Richter scale. (b) What is a tectonic plate? (c) What is an earthquake? (d) What is a volcano? (e) What are the three plate boundary types? (f) What hazards occur at constructive boundaries? (g) What hazards occur at destructive boundaries? (h) Evaluate how countries can reduce earthquake impacts.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Natural hazards", statement: "Plates, impacts." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Earth's crust slab.", marks: 1, markCode: "M" },
                { reasoning: "(c) Sudden energy release.", marks: 1, markCode: "M" },
                { reasoning: "(d) Crust opening for magma.", marks: 1, markCode: "M" },
                { reasoning: "(e) Constructive, destructive, conservative.", marks: 1, markCode: "M" },
                { reasoning: "(f) Volcanoes, new land.", marks: 1, markCode: "M" },
                { reasoning: "(g) Earthquakes, volcanoes, tsunamis.", marks: 1, markCode: "M" },
                { reasoning: "(h) Valid impact reduction strategies.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Tectonic hazards and impacts.",
            },
          },
        ],
      },
    },
    notes: {
      id: "cieigeo-u1-nh-notes", title: "Natural hazards — notes",
      summary: "Plates move → boundaries create hazards. Constructive=volcanoes; destructive=quakes/volcanoes; conservative=quakes.",
      sections: [
        { heading: "Key idea", body: "Plate movement drives most geological hazards." },
        { heading: "Impacts", body: "Severity depends on magnitude, preparedness, development level." },
      ],
    },
  },
  {
    file: "lesson-1-5.ts", exportName: "lesson305",
    lesson: {
      id: "cieigeo-u1-lesson-1-5", code: "1-5",
      title: "Coasts and Glaciation",
      goal: "I CAN describe coastal processes and glacial landforms.",
      standards: ["Cambridge IGCSE Geography 0460", "Paper 1: coastal/glacial"],
      vocabulary: [
        { term: "Coastal erosion", definition: "Wearing away of coastline." },
        { term: "Longshore drift", definition: "Movement of sediment along coast." },
        { term: "Beach", definition: "Deposited sediment at shoreline." },
        { term: "Cliff", definition: "Steep coastal slope." },
        { term: "Glacier", definition: "Large mass of moving ice." },
        { term: "Moraine", definition: "Glacial deposit of rock debris." },
      ],
      concept: {
        id: "cieigeo-u1-s5-coast", title: "Coasts and glaciation",
        skill: "Understand coastal and glacial processes.",
        sections: [
          { heading: "Coastal processes", body: "Erosion: hydraulic action, abrasion, attrition, corrosion. Transportation: longshore drift. Deposition: beaches, spits, bars. Landforms: cliffs, wave-cut platforms, headlands, bays." },
          { heading: "Glaciation", body: "Glaciers erode (abrasion, plucking) and deposit (moraines, till). Landforms: U-shaped valleys, cirques, arêtes, hanging valleys, drumlins, eskers." },
        ],
        keyFormulas: [
          { name: "Erosion", statement: "hydraulic, abrasion, attrition, corrosion" },
          { name: "Longshore drift", statement: "sediment along coast" },
          { name: "Glacial landforms", statement: "U-valleys, cirques, moraines" },
        ],
        workedExample: {
          problem: "How does longshore drift create a spit?",
          solution: "Waves approach at angle, sediment moves along coast. When coastline changes direction, sediment deposits forming a spit.",
        },
        questions: [
          {
            id: "cieigeo-u1-cg-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is longshore drift?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Movement of sediment along coast" }, { id: "b", text: "A type of wave" }, { id: "c", text: "A landform" }, { id: "d", text: "A weather system" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Longshore drift", statement: "Coastal sediment movement." }],
              steps: [{ reasoning: "Sediment moves along coast by waves.", marks: 1, markCode: "M" }],
              finalAnswer: "Coastal sediment movement",
            },
          },
          {
            id: "cieigeo-u1-cg-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What is a glacier?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Glacier", statement: "Moving ice mass." }],
              steps: [
                { reasoning: "Large mass of moving ice.", marks: 1, markCode: "M" },
                { reasoning: "Erodes and deposits material.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Moving ice mass",
            },
          },
          {
            id: "cieigeo-u1-cg-q3", difficulty: "core", totalMarks: 3,
            stem: "What are coastal erosion processes?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Coastal erosion", statement: "Erosion types." }],
              steps: [
                { reasoning: "Hydraulic action, abrasion, attrition, corrosion.", marks: 1, markCode: "M" },
                { reasoning: "All four correctly identified.", marks: 1, markCode: "M" },
                { reasoning: "Each process explained.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Hydraulic, abrasion, attrition, corrosion",
            },
          },
          {
            id: "cieigeo-u1-cg-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define coastal erosion, longshore drift, beach, cliff, glacier, moraine. (b) What is longshore drift? (c) What is a glacier? (d) What are coastal erosion processes? (e) What landforms does glaciation create? (f) What is a spit? (g) What is a U-shaped valley? (h) Explain how coasts and glaciers shape landscapes.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Coasts/glaciation", statement: "Processes, landforms." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Sediment movement along coast.", marks: 1, markCode: "M" },
                { reasoning: "(c) Moving ice mass.", marks: 1, markCode: "M" },
                { reasoning: "(d) Four erosion processes.", marks: 1, markCode: "M" },
                { reasoning: "(e) U-valleys, cirques, moraines, drumlins.", marks: 1, markCode: "M" },
                { reasoning: "(f) Deposited sediment extending into sea.", marks: 1, markCode: "M" },
                { reasoning: "(g) Glacially eroded valley.", marks: 1, markCode: "M" },
                { reasoning: "(h) Valid landscape explanation.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Coastal and glacial processes.",
            },
          },
        ],
      },
    },
    notes: {
      id: "cieigeo-u1-cg-notes", title: "Coasts/glaciation — notes",
      summary: "Coasts: erosion→transport→deposition. Glaciers: erosion→deposition. Landforms reflect processes.",
      sections: [
        { heading: "Key idea", body: "Both coasts and glaciers shape landscapes through erosion and deposition." },
        { heading: "Landforms", body: "Coastal: cliffs, beaches, spits. Glacial: U-valleys, cirques, moraines." },
      ],
    },
  },
];
