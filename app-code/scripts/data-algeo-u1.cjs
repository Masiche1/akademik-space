module.exports = [
  {
    file: "lesson-1-1.ts", exportName: "lesson511",
    lesson: {
      id: "ciealgeo-u1-lesson-1-1", code: "1-1",
      title: "Plate Tectonics and Earthquakes",
      goal: "I CAN explain plate boundaries and earthquake hazards/management.",
      standards: ["Cambridge A Level Geography 9696", "Paper 1: physical"],
      vocabulary: [
        { term: "Plate tectonics", definition: "Theory of Earth's moving lithospheric plates." },
        { term: "Convergent boundary", definition: "Plates moving towards each other." },
        { term: "Divergent boundary", definition: "Plates moving apart." },
        { term: "Transform boundary", definition: "Plates sliding past each other." },
        { term: "Focus", definition: "Point underground where earthquake originates." },
        { term: "Epicentre", definition: "Point on surface directly above focus." },
      ],
      concept: {
        id: "ciealgeo-u1-s1-tect", title: "Plate tectonics",
        skill: "Analyse tectonic hazards.",
        sections: [
          { heading: "Plate boundaries", body: "Convergent: subduction → trenches, volcanoes, earthquakes. Divergent: mid-ocean ridges, rift valleys. Transform: strike-slip faults, shallow earthquakes." },
          { heading: "Earthquakes", body: "Focus depth affects intensity. Richter/Moment magnitude scales. Tsunamis from underwater quakes. Buildings collapse, fires, landslides, liquefaction." },
          { heading: "Management", body: "Prediction difficult. Preparedness: building codes, early warning, evacuation. Japan/Turkey examples show effectiveness." },
        ],
        keyFormulas: [
          { name: "Convergent", statement: "plates collide" },
          { name: "Divergent", statement: "plates separate" },
          { name: "Transform", statement: "plates slide" },
        ],
        workedExample: {
          problem: "Why are earthquakes more destructive in some areas than others?",
          solution: "Population density, building quality, preparedness, wealth for response, secondary hazards (tsunami, landslide).",
        },
        questions: [
          {
            id: "ciealgeo-u1-tect-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is a convergent boundary?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Plates moving towards each other" }, { id: "b", text: "Plates moving apart" }, { id: "c", text: "Plates sliding past" }, { id: "d", text: "Plates stationary" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Convergent", statement: "Plates collide." }],
              steps: [{ reasoning: "Convergent = plates move towards.", marks: 1, markCode: "M" }],
              finalAnswer: "Plates collide",
            },
          },
          {
            id: "ciealgeo-u1-tect-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What is the difference between focus and epicentre?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Focus vs epicentre", statement: "Location." }],
              steps: [
                { reasoning: "Focus: underground origin point.", marks: 1, markCode: "M" },
                { reasoning: "Epicentre: surface point above focus.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Underground vs surface",
            },
          },
          {
            id: "ciealgeo-u1-tect-q3", difficulty: "core", totalMarks: 3,
            stem: "Why are earthquakes more destructive in some areas?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Hazard impact", statement: "Vulnerability." }],
              steps: [
                { reasoning: "Population density + building quality.", marks: 1, markCode: "M" },
                { reasoning: "Wealth for preparedness/response.", marks: 1, markCode: "M" },
                { reasoning: "Secondary hazards (tsunami, landslide).", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Vulnerability factors",
            },
          },
          {
            id: "ciealgeo-u1-tect-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define plate tectonics, convergent, divergent, transform, focus, epicentre. (b) What is convergent boundary? (c) What is divergent? (d) What is transform? (e) What is focus vs epicentre? (f) What causes earthquakes? (g) What are earthquake hazards? (h) Evaluate effectiveness of earthquake management strategies.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Tectonics", statement: "Hazards, management." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Plates collide.", marks: 1, markCode: "M" },
                { reasoning: "(c) Plates separate.", marks: 1, markCode: "M" },
                { reasoning: "(d) Plates slide.", marks: 1, markCode: "M" },
                { reasoning: "(e) Underground vs surface.", marks: 1, markCode: "M" },
                { reasoning: "(f) Plate movement, subduction.", marks: 1, markCode: "M" },
                { reasoning: "(g) Collapse, fire, tsunami, landslide.", marks: 1, markCode: "M" },
                { reasoning: "(h) Building codes, early warning effective.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Plate tectonics and earthquakes.",
            },
          },
        ],
      },
    },
    notes: {
      id: "ciealgeo-u1-tect-notes", title: "Tectonics — notes",
      summary: "Convergent/divergent/transform boundaries. Focus=underground, epicentre=surface.",
      sections: [
        { heading: "Key idea", body: "Plate boundaries determine hazard types and distribution." },
        { heading: "Management", body: "Building codes, early warning, preparedness reduce impact." },
      ],
    },
  },
  {
    file: "lesson-1-2.ts", exportName: "lesson512",
    lesson: {
      id: "ciealgeo-u1-lesson-1-2", code: "1-2",
      title: "Volcanoes and Volcanic Hazards",
      goal: "I CAN explain volcano types, eruption styles and hazard management.",
      standards: ["Cambridge A Level Geography 9696", "Paper 1: physical"],
      vocabulary: [
        { term: "Magma", definition: "Molten rock underground." },
        { term: "Lava", definition: "Molten rock on surface." },
        { term: "Composite volcano", definition: "Steep, explosive, layered." },
        { term: "Shield volcano", definition: "Gentle, effusive, basaltic." },
        { term: "Pyroclastic flow", definition: "Fast-moving hot gas/ash cloud." },
        { term: "Lahar", definition: "Volcanic mudflow." },
      ],
      concept: {
        id: "ciealgeo-u1-s2-volc", title: "Volcanoes",
        skill: "Analyse volcanic hazards.",
        sections: [
          { heading: "Volcano types", body: "Composite: steep, explosive, viscous magma — dangerous. Shield: gentle, effusive, fluid basalt — less dangerous but vast. Calderas: collapsed craters — supervolcanoes rare but catastrophic." },
          { heading: "Hazards", body: "Lava flows, pyroclastic flows, lahars, ash fall, toxic gases. Secondary: tsunamis, landslides, crop failure, climate change." },
          { heading: "Management", body: "Monitoring: seismic, gas, ground deformation. Evacuation, exclusion zones. Iceland/Philippines examples." },
        ],
        keyFormulas: [
          { name: "Composite", statement: "explosive" },
          { name: "Shield", statement: "effusive" },
          { name: "Pyroclastic", statement: "hot gas cloud" },
        ],
        workedExample: {
          problem: "Why are composite volcanoes more dangerous than shield volcanoes?",
          solution: "Viscous magma → explosive eruptions → pyroclastic flows, ash, lahars. Steep slopes → landslides. Shield volcanoes produce fluid lava flows — slower, less explosive.",
        },
        questions: [
          {
            id: "ciealgeo-u1-vol-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is the difference between magma and lava?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Magma underground, lava on surface" }, { id: "b", text: "Same thing" }, { id: "c", text: "Magma is cooler" }, { id: "d", text: "Lava is underground" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Magma vs lava", statement: "Location." }],
              steps: [{ reasoning: "Magma underground, lava on surface.", marks: 1, markCode: "M" }],
              finalAnswer: "Underground vs surface",
            },
          },
          {
            id: "ciealgeo-u1-vol-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What is a pyroclastic flow?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Pyroclastic", statement: "Hot gas cloud." }],
              steps: [
                { reasoning: "Fast-moving hot gas/ash cloud.", marks: 1, markCode: "M" },
                { reasoning: "Extremely dangerous — kills by heat/asphyxiation.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Hot gas cloud",
            },
          },
          {
            id: "ciealgeo-u1-vol-q3", difficulty: "core", totalMarks: 3,
            stem: "Why are composite volcanoes more dangerous than shield volcanoes?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Volcano types", statement: "Hazard comparison." }],
              steps: [
                { reasoning: "Viscous magma → explosive eruptions.", marks: 1, markCode: "M" },
                { reasoning: "Pyroclastic flows, ash, lahars.", marks: 1, markCode: "M" },
                { reasoning: "Steep slopes → landslides.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Explosive vs effusive",
            },
          },
          {
            id: "ciealgeo-u1-vol-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define magma, lava, composite, shield, pyroclastic flow, lahar. (b) What is magma vs lava? (c) What is composite volcano? (d) What is shield? (e) What is pyroclastic flow? (f) What are volcanic hazards? (g) Why are composite more dangerous? (h) Evaluate effectiveness of volcanic hazard management.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Volcanoes", statement: "Hazards, management." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Underground vs surface.", marks: 1, markCode: "M" },
                { reasoning: "(c) Explosive, steep.", marks: 1, markCode: "M" },
                { reasoning: "(d) Effusive, gentle.", marks: 1, markCode: "M" },
                { reasoning: "(e) Hot gas cloud.", marks: 1, markCode: "M" },
                { reasoning: "(f) Lava, pyroclastic, lahar, ash.", marks: 1, markCode: "M" },
                { reasoning: "(g) Viscous magma explosive.", marks: 1, markCode: "M" },
                { reasoning: "(h) Monitoring, evacuation effective but costly.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Volcanic hazards analysis.",
            },
          },
        ],
      },
    },
    notes: {
      id: "ciealgeo-u1-vol-notes", title: "Volcanoes — notes",
      summary: "Composite=explosive dangerous; shield=effusive less dangerous. Pyroclastic flows deadly.",
      sections: [
        { heading: "Key idea", body: "Volcano type determines eruption style and hazard severity." },
        { heading: "Management", body: "Monitoring seismic/gas/deformation enables prediction and evacuation." },
      ],
    },
  },
  {
    file: "lesson-1-3.ts", exportName: "lesson513",
    lesson: {
      id: "ciealgeo-u1-lesson-1-3", code: "1-3",
      title: "Weather and Climate Systems",
      goal: "I CAN explain global atmospheric circulation, pressure systems and climate zones.",
      standards: ["Cambridge A Level Geography 9696", "Paper 1: physical"],
      vocabulary: [
        { term: "Hadley cell", definition: "Tropical atmospheric circulation cell." },
        { term: "Ferrel cell", definition: "Mid-latitude circulation cell." },
        { term: "Polar cell", definition: "High-latitude circulation cell." },
        { term: "Intertropical Convergence Zone (ITCZ)", definition: "Low-pressure belt near equator." },
        { term: "Jet stream", definition: "Fast-moving air current in upper atmosphere." },
        { term: "El Niño", definition: "Pacific warming event affecting global climate." },
      ],
      concept: {
        id: "ciealgeo-u1-s3-weather", title: "Weather and climate",
        skill: "Analyse atmospheric systems.",
        sections: [
          { heading: "Global circulation", body: "Hadley (0-30°), Ferrel (30-60°), Polar (60-90°). ITCZ: rising air, low pressure, heavy rain near equator. Descending air at 30° → deserts." },
          { heading: "Pressure systems", body: "Low pressure: rising air, clouds, rain. High pressure: descending air, clear, dry. Jet streams steer weather systems." },
          { heading: "Climate zones", body: "Tropical: hot, wet/dry seasons. Temperate: distinct seasons. Polar: cold, low precipitation. Monsoon, Mediterranean, continental climates." },
        ],
        keyFormulas: [
          { name: "Hadley", statement: "0-30°" },
          { name: "ITCZ", statement: "equatorial low pressure" },
          { name: "Jet stream", statement: "upper air current" },
        ],
        workedExample: {
          problem: "Why are deserts found at 30° latitude?",
          solution: "Hadley cell descending air at 30° → high pressure, dry conditions → deserts (Sahara, Arabian).",
        },
        questions: [
          {
            id: "ciealgeo-u1-wx-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is the ITCZ?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Low-pressure belt near equator" }, { id: "b", text: "High-pressure zone" }, { id: "c", text: "A jet stream" }, { id: "d", text: "A climate type" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "ITCZ", statement: "Equatorial low pressure." }],
              steps: [{ reasoning: "ITCZ = equatorial convergence zone.", marks: 1, markCode: "M" }],
              finalAnswer: "Equatorial low pressure",
            },
          },
          {
            id: "ciealgeo-u1-wx-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What causes deserts at 30° latitude?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Climate zones", statement: "Desert formation." }],
              steps: [
                { reasoning: "Hadley cell descending air.", marks: 1, markCode: "M" },
                { reasoning: "High pressure, dry conditions.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Descending air deserts",
            },
          },
          {
            id: "ciealgeo-u1-wx-q3", difficulty: "core", totalMarks: 3,
            stem: "What are the three global circulation cells?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Circulation cells", statement: "Hadley, Ferrel, Polar." }],
              steps: [
                { reasoning: "Hadley (0-30°), Ferrel (30-60°), Polar (60-90°).", marks: 1, markCode: "M" },
                { reasoning: "Different temperature/pressure patterns.", marks: 1, markCode: "M" },
                { reasoning: "Determine global climate zones.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Three circulation cells",
            },
          },
          {
            id: "ciealgeo-u1-wx-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define Hadley cell, Ferrel cell, Polar cell, ITCZ, jet stream, El Niño. (b) What is ITCZ? (c) What causes deserts? (d) What are circulation cells? (e) What is jet stream? (f) What is El Niño? (g) What are climate zones? (h) Evaluate impact of climate change on weather systems.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Weather/climate", statement: "Systems, impacts." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Equatorial low pressure.", marks: 1, markCode: "M" },
                { reasoning: "(c) Descending air at 30°.", marks: 1, markCode: "M" },
                { reasoning: "(d) Hadley, Ferrel, Polar.", marks: 1, markCode: "M" },
                { reasoning: "(e) Upper air current.", marks: 1, markCode: "M" },
                { reasoning: "(f) Pacific warming event.", marks: 1, markCode: "M" },
                { reasoning: "(g) Tropical, temperate, polar.", marks: 1, markCode: "M" },
                { reasoning: "(h) Extreme weather, shifting patterns.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Weather and climate systems.",
            },
          },
        ],
      },
    },
    notes: {
      id: "ciealgeo-u1-wx-notes", title: "Weather/climate — notes",
      summary: "Hadley/Ferrel/Polar cells. ITCZ equatorial low pressure. Jet streams steer weather.",
      sections: [
        { heading: "Key idea", body: "Global circulation determines climate zones and weather patterns." },
        { heading: "Climate change", body: "Shifting patterns, extreme weather, sea level rise." },
      ],
    },
  },
  {
    file: "lesson-1-4.ts", exportName: "lesson514",
    lesson: {
      id: "ciealgeo-u1-lesson-1-4", code: "1-4",
      title: "Ecosystems and Biodiversity",
      goal: "I CAN explain ecosystem structure, succession and conservation.",
      standards: ["Cambridge A Level Geography 9696", "Paper 1: ecosystems"],
      vocabulary: [
        { term: "Ecosystem", definition: "Community of organisms + environment." },
        { term: "Food chain", definition: "Sequence of who eats whom." },
        { term: "Food web", definition: "Interconnected food chains." },
        { term: "Succession", definition: "Change in ecosystem over time." },
        { term: "Biodiversity", definition: "Variety of life in ecosystem." },
        { term: "Carrying capacity", definition: "Max population environment supports." },
      ],
      concept: {
        id: "ciealgeo-u1-s4-eco", title: "Ecosystems",
        skill: "Analyse ecosystem structure and conservation.",
        sections: [
          { heading: "Ecosystem structure", body: "Producers → primary consumers → secondary consumers → decomposers. Energy flow through trophic levels. Nutrient cycles (carbon, nitrogen)." },
          { heading: "Succession", body: "Pioneer species → intermediate → climax community. Primary (new land) vs secondary (after disturbance)." },
          { heading: "Biodiversity", body: "Species richness, evenness, genetic diversity. Hotspots: tropical rainforests, coral reefs. Threats: habitat loss, climate change, invasive species." },
        ],
        keyFormulas: [
          { name: "Ecosystem", statement: "organisms + environment" },
          { name: "Succession", statement: "ecosystem change" },
          { name: "Biodiversity", statement: "life variety" },
        ],
        workedExample: {
          problem: "Why is biodiversity important for ecosystem stability?",
          solution: "More species = more redundancy, better resistance to disturbance, greater ecosystem services.",
        },
        questions: [
          {
            id: "ciealgeo-u1-eco-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is an ecosystem?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Community of organisms + environment" }, { id: "b", text: "Just animals" }, { id: "c", text: "Just plants" }, { id: "d", text: "A type of climate" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Ecosystem", statement: "Organisms + environment." }],
              steps: [{ reasoning: "Ecosystem = organisms + environment.", marks: 1, markCode: "M" }],
              finalAnswer: "Organisms + environment",
            },
          },
          {
            id: "ciealgeo-u1-eco-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What is succession?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Succession", statement: "Ecosystem change." }],
              steps: [
                { reasoning: "Change in ecosystem over time.", marks: 1, markCode: "M" },
                { reasoning: "Pioneer → climax community.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Ecosystem change",
            },
          },
          {
            id: "ciealgeo-u1-eco-q3", difficulty: "core", totalMarks: 3,
            stem: "Why is biodiversity important?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Biodiversity", statement: "Importance." }],
              steps: [
                { reasoning: "Ecosystem stability/resilience.", marks: 1, markCode: "M" },
                { reasoning: "Ecosystem services (pollination, water).", marks: 1, markCode: "M" },
                { reasoning: "Genetic resources, potential medicines.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Stability, services, resources",
            },
          },
          {
            id: "ciealgeo-u1-eco-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define ecosystem, food chain, food web, succession, biodiversity, carrying capacity. (b) What is ecosystem? (c) What is succession? (d) What is biodiversity? (e) Why is biodiversity important? (f) What are ecosystem services? (g) What threatens biodiversity? (h) Evaluate conservation strategies.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Ecosystems", statement: "Analysis." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Organisms + environment.", marks: 1, markCode: "M" },
                { reasoning: "(c) Ecosystem change.", marks: 1, markCode: "M" },
                { reasoning: "(d) Life variety.", marks: 1, markCode: "M" },
                { reasoning: "(e) Stability, services.", marks: 1, markCode: "M" },
                { reasoning: "(f) Pollination, water, climate.", marks: 1, markCode: "M" },
                { reasoning: "(g) Habitat loss, climate, invasive.", marks: 1, markCode: "M" },
                { reasoning: "(h) Protected areas, sustainable use effective.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Ecosystem analysis.",
            },
          },
        ],
      },
    },
    notes: {
      id: "ciealgeo-u1-eco-notes", title: "Ecosystems — notes",
      summary: "Ecosystem=organisms+environment. Succession=pioneer→climax. Biodiversity crucial.",
      sections: [
        { heading: "Key idea", body: "Biodiversity provides ecosystem services and resilience." },
        { heading: "Threats", body: "Habitat loss, climate change, invasive species reduce biodiversity." },
      ],
    },
  },
];
