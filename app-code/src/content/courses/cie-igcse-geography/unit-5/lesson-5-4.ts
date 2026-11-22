import type { Lesson } from "../../../types.ts";

export const lesson54: Lesson = {
  id: "cieigeo-u5-lesson-5-4",
  code: "5-4",
  title: "Natural Hazards and Climate Systems",
  goal: "I CAN explain hazard distribution, risk factors and climate classification.",
  standards: [
    "Cambridge IGCSE Geography 0460",
    "Unit 5: physical geography depth",
  ],
  vocabulary: [
    {
      term: "Tectonic hazard",
      definition: "Earthquake/volcano risk from plate movement.",
    },
    {
      term: "Hydrometeorological hazard",
      definition: "Weather/climate-driven hazard.",
    },
    { term: "Risk", definition: "Hazard × vulnerability × exposure." },
    { term: "Köppen climate", definition: "Climate classification system." },
    { term: "Monsoon", definition: "Seasonal wind reversal bringing rain." },
    {
      term: "El Niño",
      definition: "Pacific warming affecting global weather.",
    },
  ],
  concepts: [
    {
      id: "cieigeo-u5l4-c1-hazards",
      title: "Hazard distribution and risk",
      skill: "Explain hazard patterns and calculate/assess risk.",
      lesson: {
        sections: [
          {
            heading: "Hazard types and distribution",
            body: "**Tectonic**: earthquakes/volcanoes at plate boundaries — Pacific Ring of Fire. **Hydrometeorological**: floods, droughts, storms, heatwaves — global distribution, climate-linked. **Distribution patterns**: earthquakes along plate margins, volcanoes at subduction zones, floods in low-lying floodplains, droughts in subtropical belts.",
          },
          {
            heading: "Risk assessment",
            body: "**Risk = Hazard × Vulnerability × Exposure**. Hazard = magnitude/frequency. Vulnerability = susceptibility (poverty, weak buildings). Exposure = people/assets in hazard zone. High hazard + high vulnerability + high exposure = high risk — why same earthquake kills more in poor countries.",
          },
        ],
        keyFormulas: [
          {
            name: "Risk formula",
            statement: "Hazard × Vulnerability × Exposure",
          },
          { name: "Ring of Fire", statement: "Pacific plate boundary" },
          { name: "Vulnerability", statement: "Susceptibility" },
        ],
        workedExample: {
          problem:
            "Why did the 2010 Haiti earthquake kill 200,000+ while 2011 Japan quake killed ~20,000?",
          solution:
            "Similar magnitude but Haiti: poor buildings (high vulnerability), dense informal housing (high exposure), weak infrastructure/emergency response; Japan: strict building codes, preparedness — same hazard, vastly different risk.",
        },
      },
      questions: [
        {
          id: "cieigeo-q-u5l4c1-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The 'Ring of Fire' is associated with:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Tsunamis only" },
              { id: "b", text: "Only floods" },
              { id: "c", text: "Earthquakes and volcanoes" },
              { id: "d", text: "Only droughts" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "fact", name: "Ring of Fire", statement: "Tectonic." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Quakes+volcanoes",
            commonErrors: ["Weather hazards."],
          },
        },
        {
          id: "cieigeo-q-u5l4c1-2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is 'risk' in hazard geography?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Risk", statement: "Formula." },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Formula.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Likelihood of harm — Risk = Hazard × Vulnerability × Exposure; combines event magnitude, susceptibility of people/assets, and numbers exposed.",
            commonErrors: ["Same as hazard."],
          },
        },
        {
          id: "cieigeo-q-u5l4c1-3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why the same earthquake causes more damage in poor countries.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Vulnerability",
                statement: "Wealth effect.",
              },
            ],
            steps: [
              { reasoning: "Buildings.", marks: 1, markCode: "M" },
              { reasoning: "Infrastructure.", marks: 1, markCode: "M" },
              { reasoning: "Response.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Weaker buildings collapse, poor infrastructure fails, limited emergency services/warning systems, higher population density in unsafe housing — high vulnerability amplifies hazard impact.",
            commonErrors: ["Same damage."],
          },
        },
        {
          id: "cieigeo-q-u5l4c1-4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Distinguish 'hazard', 'vulnerability' and 'exposure'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Risk components",
                statement: "Three factors.",
              },
            ],
            steps: [
              { reasoning: "Hazard.", marks: 1, markCode: "M" },
              { reasoning: "Vulnerability.", marks: 1, markCode: "M" },
              { reasoning: "Exposure.", marks: 1, markCode: "M" },
              { reasoning: "Relation.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Hazard: event itself (magnitude, frequency). Vulnerability: susceptibility (poverty, weak buildings). Exposure: people/assets in hazard zone; risk multiplies all three.",
            commonErrors: ["Same."],
          },
        },
        {
          id: "cieigeo-q-u5l4c1-5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Analyse factors affecting flood hazard distribution globally.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Flood distribution",
                statement: "Patterns.",
              },
            ],
            steps: [
              { reasoning: "Natural factors.", marks: 1, markCode: "M" },
              { reasoning: "Human factors.", marks: 1, markCode: "M" },
              { reasoning: "Evidence.", marks: 1, markCode: "A" },
              { reasoning: "Weighs all.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Natural: low-lying floodplains, monsoon climates, snowmelt regions, coastal deltas. Human: urbanisation increases runoff, deforestation, poor drainage, settlement in flood zones — both physical and human factors determine distribution.",
            commonErrors: ["Random."],
          },
        },
        {
          id: "cieigeo-q-u5l4c1-6",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is a 'hydrometeorological hazard'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Hydromet",
                statement: "Weather-driven.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Examples.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Hazards driven by weather/climate — floods, droughts, storms, heatwaves, wildfires; climate change increasing frequency/intensity; global distribution unlike tectonic hazards.",
            commonErrors: ["Tectonic."],
          },
        },
        {
          id: "cieigeo-q-u5l4c1-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Volcanoes are most concentrated along:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Plate boundaries" },
              { id: "b", text: "Deserts" },
              { id: "c", text: "Equator only" },
              { id: "d", text: "Poles" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Volcano distribution",
                statement: "Plate margins.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Plate boundaries",
            commonErrors: ["Random."],
          },
        },
        {
          id: "cieigeo-q-u5l4c1-8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two factors increasing flood risk in urban areas.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Urban flood risk",
                statement: "Human factors.",
              },
            ],
            steps: [
              { reasoning: "Two valid.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 2, markCode: "A" },
            ],
            finalAnswer:
              "e.g. impermeable surfaces (concrete/asphalt → more runoff) and inadequate drainage (clogged/undersized drains) — also building on floodplains, deforestation upstream.",
            commonErrors: ["No factors."],
          },
        },
        {
          id: "cieigeo-q-u5l4c1-9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how climate change affects hazard frequency.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Climate-hazard",
                statement: "Increasing.",
              },
            ],
            steps: [
              { reasoning: "Mechanism.", marks: 1, markCode: "M" },
              { reasoning: "Example.", marks: 1, markCode: "M" },
              { reasoning: "Implication.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Warmer atmosphere holds more moisture → heavier rainfall/floods; more heat → droughts/wildfires; sea level rise → coastal flooding; hazards becoming more frequent/intense — 'new normal' of extreme events.",
            commonErrors: ["No effect."],
          },
        },
        {
          id: "cieigeo-q-u5l4c1-10",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate the effectiveness of early warning systems for hazard mitigation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Early warning",
                statement: "Preparedness.",
              },
            ],
            steps: [
              { reasoning: "Benefits.", marks: 1, markCode: "M" },
              { reasoning: "Limitations.", marks: 1, markCode: "M" },
              { reasoning: "Evidence.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Reduce casualties significantly (evacuation time) — but requires infrastructure, communication, public response; false alarms cause complacency; most effective combined with preparedness planning and resilient infrastructure.",
            commonErrors: ["Perfect system."],
          },
        },
        {
          id: "cieigeo-q-u5l4c1-11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Tsunamis are most commonly triggered by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Soil erosion" },
              { id: "b", text: "Underwater earthquakes" },
              { id: "c", text: "Desert storms" },
              { id: "d", text: "River flooding only" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Tsunami",
                statement: "Seismic sea wave.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Underwater earthquakes",
            commonErrors: ["Weather hazard."],
          },
        },
        {
          id: "cieigeo-q-u5l4c1-12",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name two examples of tectonic hazards.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Tectonic hazards",
                statement: "Plate-driven events.",
              },
            ],
            steps: [
              { reasoning: "Two valid.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "e.g. earthquakes (ground shaking from plate movement) and volcanic eruptions (magma reaching surface) — tsunamis can also result from tectonic events.",
            commonErrors: ["Floods."],
          },
        },
        {
          id: "cieigeo-q-u5l4c1-13",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why drought is classified as a hydrometeorological hazard.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Hydrometeorological",
                statement: "Weather-driven.",
              },
            ],
            steps: [
              { reasoning: "Definition.", marks: 1, markCode: "M" },
              { reasoning: "Drought link.", marks: 1, markCode: "M" },
              { reasoning: "Contrast.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Hydrometeorological hazards are driven by weather and climate systems, not plate movement — drought results from prolonged rainfall deficit linked to atmospheric/oceanic patterns (e.g. El Niño); unlike tectonic hazards it is climate-controlled.",
            commonErrors: ["Tectonic cause."],
          },
        },
        {
          id: "cieigeo-q-u5l4c1-14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how building regulations reduce earthquake risk.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Building codes",
                statement: "Structural resilience.",
              },
            ],
            steps: [
              { reasoning: "Mechanism.", marks: 1, markCode: "M" },
              { reasoning: "Effect on risk.", marks: 1, markCode: "M" },
              { reasoning: "Example/limitation.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Codes require earthquake-resistant design — reinforced frames, flexible joints, deep foundations — buildings survive shaking, reducing casualties and damage; effective only where enforced (contrast Japan vs Haiti); informal/unregulated construction remains vulnerable.",
            commonErrors: ["No effect."],
          },
        },
        {
          id: "cieigeo-q-u5l4c1-15",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Analyse why hazard risk is generally higher in low-income countries despite similar hazard exposure.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Development and risk",
                statement: "Vulnerability differential.",
              },
            ],
            steps: [
              { reasoning: "Vulnerability.", marks: 1, markCode: "M" },
              { reasoning: "Exposure.", marks: 1, markCode: "M" },
              { reasoning: "Evidence.", marks: 1, markCode: "A" },
              { reasoning: "Weighs all.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Same hazard magnitude but weak building materials, poor infrastructure, dense informal housing on unsafe land, limited warning systems and emergency capacity — high vulnerability and exposure multiply risk; development level, not hazard itself, determines outcomes (Haiti vs Japan).",
            commonErrors: ["Hazard only."],
          },
        },
        {
          id: "cieigeo-q-u5l4c1-16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate the role of land-use planning in reducing flood risk.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Land-use planning",
                statement: "Exposure reduction.",
              },
            ],
            steps: [
              { reasoning: "Benefits.", marks: 1, markCode: "M" },
              { reasoning: "Limitations.", marks: 1, markCode: "M" },
              { reasoning: "Evidence.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Zoning keeps development out of floodplains, reserves floodways, requires raised foundations — reduces exposure and damage. But enforcement is hard in rapidly growing cities, informal settlements ignore plans, and existing development is costly to relocate — effective only combined with engineering and warning systems.",
            commonErrors: ["Perfect solution."],
          },
        },
      ],
    },
    {
      id: "cieigeo-u5l4-c2-climate",
      title: "Climate systems and classification",
      skill: "Explain climate controls, classification and variability.",
      lesson: {
        sections: [
          {
            heading: "Climate controls",
            body: "**Latitude**: solar energy varies — tropics hot, poles cold. **Altitude**: temperature decreases ~6.5°C/km — mountains cooler. **Distance from sea**: maritime (mild) vs continental (extreme) climates. **Ocean currents**: warm currents warm coasts, cold currents cool. **Prevailing winds**: bring moisture or dryness. **Relief**: mountains block rain (rain shadow).",
          },
          {
            heading: "Climate classification and variability",
            body: "**Köppen system**: classifies by temperature/precipitation — tropical (A), dry (B), temperate (C), continental (D), polar (E). **El Niño/La Niña**: Pacific temperature shifts altering global weather — floods/droughts shift. **Monsoon**: seasonal wind reversal — summer rain for agriculture (India). Climate variability = year-to-year changes; climate change = long-term trend.",
          },
        ],
        keyFormulas: [
          { name: "Lapse rate", statement: "~6.5°C/km" },
          { name: "Köppen", statement: "Temp+precip classes" },
          { name: "El Niño", statement: "Pacific warming" },
        ],
        workedExample: {
          problem:
            "Why is it colder on a mountain than at sea level at same latitude?",
          solution:
            "Altitude — air cools ~6.5°C per km risen; less dense air, less heat retention; mountains create own microclimates regardless of latitude.",
        },
      },
      questions: [
        {
          id: "cieigeo-q-u5l4c2-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Temperature generally decreases with altitude at about:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1°C per km" },
              { id: "b", text: "No change" },
              { id: "c", text: "6.5°C per km" },
              { id: "d", text: "20°C per km" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "fact", name: "Lapse rate", statement: "6.5°C/km." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** 6.5°C/km",
            commonErrors: ["Wrong rate."],
          },
        },
        {
          id: "cieigeo-q-u5l4c2-2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name two factors controlling climate.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Climate controls",
                statement: "Latitude+altitude.",
              },
            ],
            steps: [
              { reasoning: "Two valid.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "e.g. latitude (solar energy varies — tropics hot, poles cold) and altitude (cooler with height — lapse rate) — also distance from sea, ocean currents, winds, relief.",
            commonErrors: ["One factor."],
          },
        },
        {
          id: "cieigeo-q-u5l4c2-3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the difference between 'maritime' and 'continental' climates.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Maritime vs continental",
                statement: "Sea influence.",
              },
            ],
            steps: [
              { reasoning: "Maritime.", marks: 1, markCode: "M" },
              { reasoning: "Continental.", marks: 1, markCode: "M" },
              { reasoning: "Reason.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Maritime: near sea — mild winters, cool summers, higher rainfall (sea moderates temperature). Continental: inland — hot summers, cold winters, lower rainfall (no sea influence).",
            commonErrors: ["Same."],
          },
        },
        {
          id: "cieigeo-q-u5l4c2-4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain how ocean currents affect coastal climates.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Currents", statement: "Warm/cold." },
            ],
            steps: [
              { reasoning: "Warm current.", marks: 1, markCode: "M" },
              { reasoning: "Cold current.", marks: 1, markCode: "M" },
              { reasoning: "Example.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Warm currents (Gulf Stream → NW Europe) warm coasts, increase rainfall. Cold currents (Peru/Humboldt) cool coasts, create deserts (Atacama); currents redistribute heat globally affecting climate far inland too.",
            commonErrors: ["No effect."],
          },
        },
        {
          id: "cieigeo-q-u5l4c2-5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Analyse the global impacts of El Niño events.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "El Niño",
                statement: "Global effects.",
              },
            ],
            steps: [
              { reasoning: "Pacific effect.", marks: 1, markCode: "M" },
              { reasoning: "Global effects.", marks: 1, markCode: "M" },
              { reasoning: "Evidence.", marks: 1, markCode: "A" },
              { reasoning: "Weighs all.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Warm Pacific water shifts rainfall patterns — floods in Peru/Ecuador, droughts in Australia/Indonesia, altered hurricane patterns; affects agriculture, fisheries, economies globally — climate variability with worldwide consequences.",
            commonErrors: ["Local only."],
          },
        },
        {
          id: "cieigeo-q-u5l4c2-6",
          difficulty: "core",
          totalMarks: 2,
          stem: "What does the Köppen climate classification use?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Köppen", statement: "Temp+precip." },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Categories.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Classifies climates by temperature and precipitation patterns — tropical (A), dry (B), temperate (C), continental (D), polar (E); each letter indicates climate type.",
            commonErrors: ["Wind only."],
          },
        },
        {
          id: "cieigeo-q-u5l4c2-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'monsoon' is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A desert wind" },
              { id: "b", text: "A mountain range" },
              { id: "c", text: "A type of ocean current" },
              { id: "d", text: "Seasonal wind reversal bringing rain" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "fact", name: "Monsoon", statement: "Seasonal winds." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Seasonal reversal",
            commonErrors: ["Other."],
          },
        },
        {
          id: "cieigeo-q-u5l4c2-8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two reasons why altitude affects climate.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "fact", name: "Altitude", statement: "Cooling." },
            ],
            steps: [
              { reasoning: "Two valid.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 2, markCode: "A" },
            ],
            finalAnswer:
              "e.g. temperature decreases ~6.5°C per km (lapse rate) and thinner air holds less heat/moisture — mountains create own microclimates; snow line shows altitude effect clearly.",
            commonErrors: ["No effect."],
          },
        },
        {
          id: "cieigeo-q-u5l4c2-9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the 'rain shadow' effect.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Rain shadow",
                statement: "Mountain barrier.",
              },
            ],
            steps: [
              { reasoning: "Mechanism.", marks: 1, markCode: "M" },
              { reasoning: "Result.", marks: 1, markCode: "M" },
              { reasoning: "Example.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Mountains force moist air upward → cools, condenses, rains on windward side; dry air descends leeward side → little rain, creates desert (e.g. Atacama behind Andes); relief strongly affects precipitation.",
            commonErrors: ["Equal rain."],
          },
        },
        {
          id: "cieigeo-q-u5l4c2-10",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate the usefulness of climate classification systems.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Classification",
                statement: "Organisation vs limits.",
              },
            ],
            steps: [
              { reasoning: "Benefits.", marks: 1, markCode: "M" },
              { reasoning: "Limitations.", marks: 1, markCode: "M" },
              { reasoning: "Evidence.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Organises complex climate data, enables comparison, predicts patterns — but boundaries arbitrary, oversimplifies local variation, static classification vs dynamic climate; useful framework but needs local data for decisions.",
            commonErrors: ["Perfect system."],
          },
        },
        {
          id: "cieigeo-q-u5l4c2-11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In the Köppen system, 'A' climates are:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Polar" },
              { id: "b", text: "Desert" },
              { id: "c", text: "Tropical" },
              { id: "d", text: "Continental" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Köppen letters",
                statement: "A = tropical.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Tropical",
            commonErrors: ["Wrong letter."],
          },
        },
        {
          id: "cieigeo-q-u5l4c2-12",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name two causes of climate variability.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Climate variability",
                statement: "Year-to-year change.",
              },
            ],
            steps: [
              { reasoning: "Two valid.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "e.g. El Niño/La Niña (Pacific temperature shifts altering global weather) and volcanic eruptions (aerosols cooling climate temporarily) — also solar output changes.",
            commonErrors: ["Long-term trend only."],
          },
        },
        {
          id: "cieigeo-q-u5l4c2-13",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how prevailing winds influence climate.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Prevailing winds",
                statement: "Moisture transport.",
              },
            ],
            steps: [
              { reasoning: "Mechanism.", marks: 1, markCode: "M" },
              { reasoning: "Moist effect.", marks: 1, markCode: "M" },
              { reasoning: "Dry effect.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Winds transport air masses — onshore winds bring moisture from sea → higher rainfall near coasts; offshore winds bring dry continental air → drier conditions inland; wind direction determines which areas get rain.",
            commonErrors: ["No effect."],
          },
        },
        {
          id: "cieigeo-q-u5l4c2-14",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain the importance of the monsoon for agriculture in South Asia.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Monsoon agriculture",
                statement: "Rain-dependent farming.",
              },
            ],
            steps: [
              { reasoning: "Mechanism.", marks: 1, markCode: "M" },
              { reasoning: "Benefit.", marks: 1, markCode: "M" },
              { reasoning: "Risk.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Summer monsoon brings months of heavy rain — rice and other crops need this water; supports dense population and farming. But timing/intensity varies — late or weak monsoon causes drought and crop failure; irrigation and storage reduce risk.",
            commonErrors: ["No importance."],
          },
        },
        {
          id: "cieigeo-q-u5l4c2-15",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Analyse the global impacts of La Niña events.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "La Niña",
                statement: "Pacific cooling effects.",
              },
            ],
            steps: [
              { reasoning: "Pacific effect.", marks: 1, markCode: "M" },
              { reasoning: "Global effects.", marks: 1, markCode: "M" },
              { reasoning: "Evidence.", marks: 1, markCode: "A" },
              { reasoning: "Weighs all.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Cooler-than-normal eastern Pacific — opposite pattern to El Niño: drought/fires in western US, heavy rain and flooding in Australia/Indonesia, stronger Atlantic hurricanes; shifts agriculture and economies worldwide — ocean-atmosphere coupling drives global weather.",
            commonErrors: ["Same as El Niño."],
          },
        },
        {
          id: "cieigeo-q-u5l4c2-16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Analyse why two locations at the same latitude can have very different climates.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Climate controls interaction",
                statement: "Latitude not sole factor.",
              },
            ],
            steps: [
              { reasoning: "Controls.", marks: 1, markCode: "M" },
              { reasoning: "Interaction.", marks: 1, markCode: "M" },
              { reasoning: "Evidence.", marks: 1, markCode: "A" },
              { reasoning: "Weighs all.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Latitude fixes solar input but altitude (mountains cooler), distance from sea (maritime vs continental), ocean currents (warm/cold), prevailing winds and relief/rain shadow all modify it — e.g. coastal city vs inland plateau at same latitude differ hugely.",
            commonErrors: ["Latitude only."],
          },
        },
      ],
    },
  ],
};
