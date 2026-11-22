import type { Lesson } from "../../../types.ts";

export const lesson54: Lesson = {
  id: "ciealegeo-u5-lesson-5-4",
  code: "5-4",
  title: "Atmospheric Hazards and Climate Change Impacts",
  goal: "I CAN analyse tropical storms, drought and the geographical impacts of climate change.",
  standards: [
    "Cambridge A Level Geography 9696",
    "Unit 5: physical geography in depth",
  ],
  vocabulary: [
    {
      term: "Tropical cyclone",
      definition: "Rotating storm system over warm oceans.",
    },
    {
      term: "Storm surge",
      definition: "Abnormal sea level rise during storm.",
    },
    { term: "Drought", definition: "Prolonged precipitation deficit." },
    {
      term: "ENSO",
      definition: "El Niño-Southern Oscillation climate pattern.",
    },
    {
      term: "Sea level rise",
      definition: "Ocean volume/thermal expansion increase.",
    },
    {
      term: "Climate change",
      definition: "Long-term shift in climate patterns.",
    },
  ],
  concepts: [
    {
      id: "ciealegeo-u5l4-c1-storms",
      title: "Tropical storms and ENSO",
      skill:
        "Explain tropical cyclone formation, impacts and ENSO effects on weather.",
      lesson: {
        sections: [
          {
            heading: "Tropical cyclone formation",
            body: "Forms over warm ocean (>26.5°C), moist air, low pressure, Coriolis force (not equator), weak vertical wind shear. Structure: eye (calm), eyewall (violent winds), rainbands. Categories 1-5 by wind speed. Decay over land/cool water.",
          },
          {
            heading: "Impacts and ENSO",
            body: "**Impacts**: storm surge (deadliest), high winds, flooding, landslides. **ENSO**: El Niño (warm Pacific → drought Australia/SE Asia, rain S. America) vs La Niña (opposite). Affects global weather patterns, agriculture, disaster risk.",
          },
        ],
        keyFormulas: [
          {
            name: "Formation",
            statement: "Warm water + low pressure + Coriolis",
          },
          { name: "Storm surge", statement: "Deadliest impact" },
          { name: "ENSO", statement: "Pacific temperature oscillation" },
        ],
        workedExample: {
          problem: "Why don't tropical cyclones form at the equator?",
          solution:
            "Coriolis force is zero at equator — needed to create rotation; storms need at least 5° latitude to develop spin.",
        },
      },
      questions: [
        {
          id: "ciealegeo-q-u5l4c1-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Tropical cyclones require:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Dry air" },
              { id: "b", text: "Cold water" },
              { id: "c", text: "High latitude" },
              { id: "d", text: "Warm ocean water and Coriolis force" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Formation",
                statement: "Warm + Coriolis.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(d)** Warm + Coriolis",
            commonErrors: ["Wrong conditions."],
          },
        },
        {
          id: "ciealegeo-q-u5l4c1-2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the 'eye' of a tropical cyclone?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Eye", statement: "Calm centre." },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Surroundings.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Central calm area surrounded by eyewall (most violent winds) — sinking air creates clear skies, brief respite before eyewall hits.",
            commonErrors: ["Strongest part."],
          },
        },
        {
          id: "ciealegeo-q-u5l4c1-3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why storm surge is the deadliest tropical cyclone impact.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Storm surge",
                statement: "Sea level rise.",
              },
            ],
            steps: [
              { reasoning: "Mechanism.", marks: 1, markCode: "M" },
              { reasoning: "Why deadly.", marks: 1, markCode: "M" },
              { reasoning: "Example.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Low pressure + wind push water inland → rapid sea level rise (3-8m) → catastrophic flooding of coastal areas — accounts for most cyclone deaths.",
            commonErrors: ["Wind damage."],
          },
        },
        {
          id: "ciealegeo-q-u5l4c1-4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain El Niño and its global weather effects.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "El Niño",
                statement: "Warm Pacific.",
              },
            ],
            steps: [
              { reasoning: "Mechanism.", marks: 1, markCode: "M" },
              { reasoning: "Regional effects.", marks: 1, markCode: "M" },
              { reasoning: "Global effects.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Warm water in E. Pacific → weakened trade winds → rainfall shifts east → drought Australia/SE Asia, heavy rain/rains Peru coast, cooler Atlantic hurricane season.",
            commonErrors: ["Local only."],
          },
        },
        {
          id: "ciealegeo-q-u5l4c1-5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate the predictability of tropical cyclone impacts on different countries.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Impact variation",
                statement: "Wealth + geography.",
              },
            ],
            steps: [
              { reasoning: "Wealth factor.", marks: 1, markCode: "M" },
              { reasoning: "Geography factor.", marks: 1, markCode: "M" },
              { reasoning: "Examples.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Rich countries: better forecasting, evacuation, infrastructure → lower deaths despite storms. Poor countries: weak infrastructure, informal housing, no warning → catastrophic losses — same storm, different impacts.",
            commonErrors: ["Same impact."],
          },
        },
        {
          id: "ciealegeo-q-u5l4c1-6",
          difficulty: "core",
          totalMarks: 2,
          stem: "What causes tropical cyclones to decay over land?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Decay", statement: "No warm water." },
            ],
            steps: [
              { reasoning: "Mechanism.", marks: 1, markCode: "M" },
              { reasoning: "Result.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Land cut off from warm ocean moisture source → energy supply removed → winds weaken rapidly, though heavy rain may persist.",
            commonErrors: ["Strengthens."],
          },
        },
        {
          id: "ciealegeo-q-u5l4c1-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "La Niña is characterised by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Stronger El Niño" },
              { id: "b", text: "Warmer Pacific" },
              { id: "c", text: "No ENSO" },
              { id: "d", text: "Cooler-than-normal Pacific waters" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "fact", name: "La Niña", statement: "Cool Pacific." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(d)** Cool Pacific",
            commonErrors: ["El Niño confused."],
          },
        },
        {
          id: "ciealegeo-q-u5l4c1-8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two impacts of El Niño on agriculture.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "ENSO impacts",
                statement: "Drought/flood.",
              },
            ],
            steps: [
              { reasoning: "Two valid.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 2, markCode: "A" },
            ],
            finalAnswer:
              "e.g. drought in Australia/SE Asia reduces crops; heavy rain/flooding in Peru damages crops and infrastructure.",
            commonErrors: ["Only one region."],
          },
        },
        {
          id: "ciealegeo-q-u5l4c1-9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why are low-lying coastal areas most vulnerable to storm surge?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Vulnerability",
                statement: "Elevation + exposure.",
              },
            ],
            steps: [
              { reasoning: "Mechanism.", marks: 1, markCode: "M" },
              { reasoning: "Compounding factors.", marks: 1, markCode: "M" },
              { reasoning: "Example.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Low elevation → surge easily inundates; poor drainage → water persists; dense informal housing → high casualties; delta regions most at risk.",
            commonErrors: ["High ground."],
          },
        },
        {
          id: "ciealegeo-q-u5l4c1-10",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate early warning systems for tropical cyclones.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Early warning",
                statement: "Forecast + response.",
              },
            ],
            steps: [
              { reasoning: "Benefits.", marks: 1, markCode: "M" },
              { reasoning: "Challenges.", marks: 1, markCode: "M" },
              { reasoning: "Effectiveness.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "EWS dramatically reduce deaths when paired with evacuation capacity — but 'last mile' delivery, trust, and shelter availability determine success; technology alone insufficient.",
            commonErrors: ["Technology solves all."],
          },
        },
        {
          id: "ciealegeo-q-u5l4c1-11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The 'eyewall' of a tropical cyclone is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The calm centre of the storm" },
              { id: "b", text: "The dissipating trailing edge" },
              { id: "c", text: "The ring of most violent winds and heaviest rain" },
              { id: "d", text: "The outermost rainband" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "fact", name: "Eyewall", statement: "Violent core ring." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** Violent wind ring",
            commonErrors: ["Eye confused."],
          },
        },
        {
          id: "ciealegeo-q-u5l4c1-12",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'vertical wind shear' and why does it inhibit cyclone formation?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Wind shear",
                statement: "Wind change with height.",
              },
            ],
            steps: [
              { reasoning: "Definition.", marks: 1, markCode: "M" },
              { reasoning: "Effect on storms.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Change in wind speed/direction with height — tears apart the developing storm's vertical structure, preventing the organised rotation needed for cyclone formation.",
            commonErrors: ["Surface wind only."],
          },
        },
        {
          id: "ciealegeo-q-u5l4c1-13",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name two oceanic conditions needed for tropical cyclone formation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Formation conditions",
                statement: "Warm water, moisture, Coriolis.",
              },
            ],
            steps: [
              { reasoning: "Two named.", marks: 1, markCode: "M" },
              { reasoning: "Each linked.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "e.g. sea surface temperature above 26.5°C (fuels evaporation/energy) and low-pressure moist air with weak wind shear — plus Coriolis force away from equator.",
            commonErrors: ["Cold water."],
          },
        },
        {
          id: "ciealegeo-q-u5l4c1-14",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain how ENSO influences Atlantic hurricane seasons.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "ENSO & hurricanes",
                statement: "Wind shear link.",
              },
            ],
            steps: [
              { reasoning: "El Niño mechanism.", marks: 1, markCode: "M" },
              { reasoning: "Effect on hurricanes.", marks: 1, markCode: "M" },
              { reasoning: "La Niña contrast.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "El Niño → stronger upper-level winds/wind shear over Atlantic → suppresses hurricane formation; La Niña → weaker shear → more favourable conditions → busier hurricane seasons.",
            commonErrors: ["No ENSO link."],
          },
        },
        {
          id: "ciealegeo-q-u5l4c1-15",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate the use of cyclone category scales in disaster preparedness.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Cyclone categories",
                statement: "Wind speed vs impacts.",
              },
            ],
            steps: [
              { reasoning: "Benefits.", marks: 1, markCode: "M" },
              { reasoning: "Limitations.", marks: 1, markCode: "M" },
              { reasoning: "Impact variation.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Categories (1-5 by wind speed) give clear public communication and trigger response levels; but ignore storm surge, rain/flooding — the deadliest hazards — so category alone misrepresents true risk.",
            commonErrors: ["Category = full risk."],
          },
        },
        {
          id: "ciealegeo-q-u5l4c1-16",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how sea surface temperature controls cyclone intensity.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "SST & intensity",
                statement: "Heat engine.",
              },
            ],
            steps: [
              { reasoning: "Energy source.", marks: 1, markCode: "M" },
              { reasoning: "Threshold.", marks: 1, markCode: "M" },
              { reasoning: "Cooling effect.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Cyclones are heat engines — warm ocean (>26.5°C) evaporates moisture fuelling convection and wind speeds; cooler water or land removes energy supply → rapid weakening.",
            commonErrors: ["Wind-driven only."],
          },
        },
      ],
    },
    {
      id: "ciealegeo-u5l4-c2-climate",
      title: "Drought and climate change impacts",
      skill:
        "Analyse drought types, climate change mechanisms and geographical impacts.",
      lesson: {
        sections: [
          {
            heading: "Drought types",
            body: "**Meteorological**: below-average rainfall. **Agricultural**: soil moisture insufficient for crops. **Hydrological**: surface/groundwater depleted. **Socio-economic**: water scarcity affects people. Causes: climate variability, land-use change, over-extraction, climate change.",
          },
          {
            heading: "Climate change impacts",
            body: "**Physical**: sea level rise (thermal expansion + ice melt), extreme weather intensification, ocean acidification, glacier retreat. **Human**: water stress, food insecurity, displacement, health impacts, economic losses. **Geographical variation**: polar amplification, tropics face extreme heat, small islands face inundation.",
          },
        ],
        keyFormulas: [
          {
            name: "Drought types",
            statement: "Meteorological → socio-economic",
          },
          { name: "Sea level rise", statement: "Thermal expansion + ice melt" },
          {
            name: "Polar amplification",
            statement: "Arctic warming 2-3x global",
          },
        ],
        workedExample: {
          problem:
            "Why are small island states most vulnerable to sea level rise?",
          solution:
            "Low elevation → inundation; limited land for retreat; freshwater salinisation; storm surge amplified; no adaptation space — existential threat.",
        },
      },
      questions: [
        {
          id: "ciealegeo-q-u5l4c2-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Agricultural drought refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Water rationing" },
              { id: "b", text: "Low rainfall only" },
              { id: "c", text: "Soil moisture insufficient for crops" },
              { id: "d", text: "River levels fall" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Agricultural drought",
                statement: "Soil moisture.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** Soil moisture",
            commonErrors: ["Meteorological."],
          },
        },
        {
          id: "ciealegeo-q-u5l4c2-2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name two causes of sea level rise.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "fact", name: "SLR causes", statement: "Thermal + ice." },
            ],
            steps: [
              { reasoning: "Two named.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "e.g. thermal expansion (warm water expands) and melting ice sheets/glaciers adding water volume.",
            commonErrors: ["Only one."],
          },
        },
        {
          id: "ciealegeo-q-u5l4c2-3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain 'polar amplification' of climate change.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Polar amplification",
                statement: "Arctic warming faster.",
              },
            ],
            steps: [
              { reasoning: "Mechanism.", marks: 1, markCode: "M" },
              { reasoning: "Feedback.", marks: 1, markCode: "M" },
              { reasoning: "Consequences.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Ice-albedo feedback: melting ice exposes dark ocean → absorbs more heat → more melting; Arctic warming 2-3x global average → ice loss, sea level rise, ecosystem disruption.",
            commonErrors: ["Same as global."],
          },
        },
        {
          id: "ciealegeo-q-u5l4c2-4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Distinguish meteorological from hydrological drought.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Drought types",
                statement: "Rain vs water stores.",
              },
            ],
            steps: [
              { reasoning: "Meteorological defined.", marks: 1, markCode: "M" },
              { reasoning: "Hydrological defined.", marks: 1, markCode: "M" },
              { reasoning: "Relationship.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Meteorological: rainfall below average (immediate). Hydrological: surface/groundwater depleted (lags, persists longer) — can occur even after rain returns.",
            commonErrors: ["Same drought."],
          },
        },
        {
          id: "ciealegeo-q-u5l4c2-5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate the geographical unevenness of climate change impacts.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Uneven impacts",
                statement: "Vulnerability varies.",
              },
            ],
            steps: [
              { reasoning: "Physical variation.", marks: 1, markCode: "M" },
              { reasoning: "Human variation.", marks: 1, markCode: "M" },
              { reasoning: "Examples.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Polar regions amplify warming; tropics face extreme heat; small islands face inundation; poor countries least able to adapt — impacts geographically and socially uneven.",
            commonErrors: ["Uniform impact."],
          },
        },
        {
          id: "ciealegeo-q-u5l4c2-6",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'ocean acidification'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Acidification",
                statement: "pH decline.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Cause.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Ocean pH decreases as CO₂ dissolves forming carbonic acid — threatens coral reefs, shellfish, marine food chains.",
            commonErrors: ["Water pollution."],
          },
        },
        {
          id: "ciealegeo-q-u5l4c2-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Climate change is primarily caused by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Greenhouse gas emissions" },
              { id: "b", text: "Ozone depletion" },
              { id: "c", text: "Solar cycles" },
              { id: "d", text: "Volcanic eruptions" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "fact", name: "Cause", statement: "GHG." }],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** GHG",
            commonErrors: ["Natural causes."],
          },
        },
        {
          id: "ciealegeo-q-u5l4c2-8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two ways climate change affects food security.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Food security",
                statement: "Yield + access.",
              },
            ],
            steps: [
              { reasoning: "Two valid.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 2, markCode: "A" },
            ],
            finalAnswer:
              "e.g. changing rainfall patterns reduce crop yields; extreme events destroy harvests; fisheries decline from warming/acidification.",
            commonErrors: ["Only one."],
          },
        },
        {
          id: "ciealegeo-q-u5l4c2-9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why are 'climate refugees' a growing concern?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Climate migration",
                statement: "Displacement.",
              },
            ],
            steps: [
              { reasoning: "Causes.", marks: 1, markCode: "M" },
              { reasoning: "Examples.", marks: 1, markCode: "M" },
              { reasoning: "Challenges.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Sea level rise, desertification, extreme weather force migration — but 'climate refugee' lacks legal status; attribution complex (multiple causes) → protection gaps.",
            commonErrors: ["Not a concern."],
          },
        },
        {
          id: "ciealegeo-q-u5l4c2-10",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Analyse the relationship between climate change and disaster risk.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Risk = hazard × vulnerability",
                statement: "Compound.",
              },
            ],
            steps: [
              { reasoning: "Hazard increase.", marks: 1, markCode: "M" },
              { reasoning: "Vulnerability.", marks: 1, markCode: "M" },
              { reasoning: "Compound effect.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Climate change intensifies hazards (stronger storms, droughts) AND increases exposure (coastal settlement, population growth) → disaster risk rises disproportionately for poor, exposed populations.",
            commonErrors: ["Only hazard."],
          },
        },
        {
          id: "ciealegeo-q-u5l4c2-11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Hydrological drought refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Depletion of surface water and groundwater stores" },
              { id: "b", text: "Soil moisture loss for crops" },
              { id: "c", text: "Rainfall below average only" },
              { id: "d", text: "Water rationing by authorities" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Hydrological drought",
                statement: "Water stores depleted.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Water stores depleted",
            commonErrors: ["Meteorological confused."],
          },
        },
        {
          id: "ciealegeo-q-u5l4c2-12",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'desertification'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Desertification",
                statement: "Land degradation.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Causes.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Degradation of land in arid/semi-arid areas into desert-like conditions — caused by climate variability, overgrazing, deforestation, poor irrigation — reduces productivity and livelihoods.",
            commonErrors: ["Desert expansion only."],
          },
        },
        {
          id: "ciealegeo-q-u5l4c2-13",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is 'thermal expansion' in sea level rise?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Thermal expansion",
                statement: "Warm water expands.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Contribution.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Water expands as it warms — warming oceans increase volume without adding water; accounts for roughly half of observed sea level rise.",
            commonErrors: ["Ice melt only."],
          },
        },
        {
          id: "ciealegeo-q-u5l4c2-14",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain how climate change can intensify drought.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Climate & drought",
                statement: "Precipitation + evaporation.",
              },
            ],
            steps: [
              { reasoning: "Precipitation change.", marks: 1, markCode: "M" },
              { reasoning: "Evaporation effect.", marks: 1, markCode: "M" },
              { reasoning: "Feedbacks.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Shifting rainfall patterns reduce precipitation in some regions; higher temperatures increase evaporation and soil moisture loss; reduced snowpack and earlier melt shorten water availability → more frequent/severe droughts.",
            commonErrors: ["Only less rain."],
          },
        },
        {
          id: "ciealegeo-q-u5l4c2-15",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Analyse the differing impacts of climate change on rural and urban areas.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Rural vs urban",
                statement: "Exposure + capacity.",
              },
            ],
            steps: [
              { reasoning: "Rural impacts.", marks: 1, markCode: "M" },
              { reasoning: "Urban impacts.", marks: 1, markCode: "M" },
              { reasoning: "Capacity contrast.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Rural: direct agricultural losses, water stress, livelihood collapse; urban: heat island amplification, flooding of infrastructure, food price shocks — rural areas often more exposed but urban areas concentrate population risk.",
            commonErrors: ["Uniform impact."],
          },
        },
        {
          id: "ciealegeo-q-u5l4c2-16",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why does thawing permafrost amplify climate change?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Permafrost feedback",
                statement: "Carbon release.",
              },
            ],
            steps: [
              { reasoning: "Mechanism.", marks: 1, markCode: "M" },
              { reasoning: "Feedback loop.", marks: 1, markCode: "M" },
              { reasoning: "Scale.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Permafrost stores vast carbon; thawing releases CO₂ and methane — potent greenhouse gases → further warming → more thawing — a dangerous positive feedback loop.",
            commonErrors: ["Cooling effect."],
          },
        },
      ],
    },
  ],
};
