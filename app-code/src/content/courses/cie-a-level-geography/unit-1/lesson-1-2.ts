import type { Lesson } from "../../../types.ts";

export const lesson512: Lesson = {
  id: "ciealgeo-u1-lesson-1-2",
  code: "1-2",
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
  concepts: [
    {
      id: "ciealgeo-u1-s2-volc",
      title: "Volcanoes",
      skill: "Analyse volcanic hazards.",
      lesson: {
        sections: [
          {
            heading: "Volcano types",
            body: "Composite: steep, explosive, viscous magma — dangerous. Shield: gentle, effusive, fluid basalt — less dangerous but vast. Calderas: collapsed craters — supervolcanoes rare but catastrophic.",
          },
          {
            heading: "Hazards",
            body: "Lava flows, pyroclastic flows, lahars, ash fall, toxic gases. Secondary: tsunamis, landslides, crop failure, climate change.",
          },
          {
            heading: "Management",
            body: "Monitoring: seismic, gas, ground deformation. Evacuation, exclusion zones. Iceland/Philippines examples.",
          },
        ],
        keyFormulas: [
          { name: "Composite", statement: "explosive" },
          { name: "Shield", statement: "effusive" },
          { name: "Pyroclastic", statement: "hot gas cloud" },
        ],
        workedExample: {
          problem:
            "Why are composite volcanoes more dangerous than shield volcanoes?",
          solution:
            "Viscous magma → explosive eruptions → pyroclastic flows, ash, lahars. Steep slopes → landslides. Shield volcanoes produce fluid lava flows — slower, less explosive.",
        },
      },
      questions: [
        {
          id: "ciealgeo-u1-vol-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the difference between magma and lava?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Lava is underground",
              },
              {
                id: "b",
                text: "Magma underground, lava on surface",
              },
              {
                id: "c",
                text: "Same thing",
              },
              {
                id: "d",
                text: "Magma is cooler",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Magma vs lava",
                statement: "Location.",
              },
            ],
            steps: [
              {
                reasoning: "Magma underground, lava on surface.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Underground vs surface",
          },
        },
        {
          id: "ciealgeo-u1-vol-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a pyroclastic flow?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Pyroclastic",
                statement: "Hot gas cloud.",
              },
            ],
            steps: [
              {
                reasoning: "Fast-moving hot gas/ash cloud.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Extremely dangerous — kills by heat/asphyxiation.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Hot gas cloud",
          },
        },
        {
          id: "ciealgeo-u1-vol-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why are composite volcanoes more dangerous than shield volcanoes?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Volcano types",
                statement: "Hazard comparison.",
              },
            ],
            steps: [
              {
                reasoning: "Viscous magma → explosive eruptions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Pyroclastic flows, ash, lahars.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Steep slopes → landslides.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Explosive vs effusive",
          },
        },
        {
          id: "ciealgeo-u1-vol-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define magma, lava, composite, shield, pyroclastic flow, lahar. (b) What is magma vs lava? (c) What is composite volcano? (d) What is shield? (e) What is pyroclastic flow? (f) What are volcanic hazards? (g) Why are composite more dangerous? (h) Evaluate effectiveness of volcanic hazard management.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Volcanoes",
                statement: "Hazards, management.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All six definitions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) Underground vs surface.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) Explosive, steep.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(d) Effusive, gentle.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(e) Hot gas cloud.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(f) Lava, pyroclastic, lahar, ash.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(g) Viscous magma explosive.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(h) Monitoring, evacuation effective but costly.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Volcanic hazards analysis.",
          },
        },
        {
          id: "ciealgeo-u1-vol-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which magma property most strongly controls whether an eruption is explosive?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Colour" },
              { id: "b", text: "Amount of rainfall" },
              { id: "c", text: "Depth of the magma chamber only" },
              { id: "d", text: "Viscosity" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Viscosity", statement: "Viscous magma traps gas and erupts explosively." },
            ],
            steps: [{ reasoning: "High viscosity traps gas; low viscosity allows gentle effusion.", marks: 1, markCode: "M" }],
            finalAnswer: "Viscosity",
            commonErrors: ["Confusing temperature with viscosity."],
          },
        },
        {
          id: "ciealgeo-u1-vol-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Describe two characteristics of lava flows from a shield volcano.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Shield volcanoes", statement: "Fluid basaltic lava and gentle slopes." },
            ],
            steps: [
              { reasoning: "Lava is fluid and basaltic.", marks: 1, markCode: "M" },
              { reasoning: "Flows are slow-moving and create gentle slopes.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Fluid basaltic lava; slow flows and gentle slopes.",
            commonErrors: ["Describing composite-volcano hazards."],
          },
        },
        {
          id: "ciealgeo-u1-vol-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A lahar is best described as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A hot ash cloud" },
              { id: "b", text: "A volcanic mudflow" },
              { id: "c", text: "A type of lava dome" },
              { id: "d", text: "A gas emitted at the crater" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Lahar", statement: "Volcanic mudflow." }],
            steps: [{ reasoning: "Lahars are mixtures of water, ash and debris moving downslope.", marks: 1, markCode: "M" }],
            finalAnswer: "Volcanic mudflow",
          },
        },
        {
          id: "ciealgeo-u1-vol-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how ground deformation monitoring can warn of a possible eruption.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Volcano monitoring", statement: "Magma movement changes the ground surface." },
            ],
            steps: [
              { reasoning: "Rising magma can inflate the volcano.", marks: 1, markCode: "M" },
              { reasoning: "Tiltmeters, GPS and satellite data detect deformation.", marks: 1, markCode: "M" },
              { reasoning: "Rising deformation with seismic and gas changes raises eruption risk.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Magma intrusion deforms the ground; monitoring detects the warning signal.",
            commonErrors: ["Listing hazards rather than monitoring evidence."],
          },
        },
        {
          id: "ciealgeo-u1-vol-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which secondary hazard may follow a submarine volcanic eruption near a coast?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Tsunami" },
              { id: "b", text: "Ozone depletion" },
              { id: "c", text: "Only ash fall" },
              { id: "d", text: "Only lava flow" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Secondary hazards", statement: "Submarine eruptions can displace water." }],
            steps: [{ reasoning: "Seafloor displacement can generate a tsunami.", marks: 1, markCode: "M" }],
            finalAnswer: "Tsunami",
          },
        },
        {
          id: "ciealgeo-u1-vol-q10",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "An evacuation zone contains 120,000 people. (a) If 65% are evacuated, how many people leave? (b) If 30,000 remain, what percentage of the zone's population remains?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 78000, unit: "people" },
              { label: "b", answer: 25, unit: "%" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evacuation calculation", statement: "Apply percentages to population." },
            ],
            steps: [
              { part: "a", reasoning: "120000 x 0.65 = 78000.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "30000 / 120000 x 100 = 25%.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "a) 78000; b) 25%",
            commonErrors: ["Using evacuated number as the denominator."],
          },
        },
        {
          id: "ciealgeo-u1-vol-q11",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the use of permanent exclusion zones in volcanic hazard management.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Hazard management", statement: "Exclusion zones reduce risk but create social and economic costs." },
            ],
            steps: [
              { reasoning: "They reduce exposure to pyroclastic flows, lahars and ash.", marks: 1, markCode: "M" },
              { reasoning: "They displace communities and restrict farming and tourism.", marks: 1, markCode: "M" },
              { reasoning: "Monitoring may allow zones to be adjusted as risk changes.", marks: 1, markCode: "A" },
              { reasoning: "Effectiveness depends on enforcement and alternative livelihoods.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Exclusion zones protect lives but impose displacement and economic costs; flexible management is needed.",
            commonErrors: ["One-sided evaluation."],
          },
        },
        {
          id: "ciealgeo-u1-vol-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "Ash fall can damage crops mainly because it:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Immediately creates lahars everywhere" },
              { id: "b", text: "Removes all topsoil instantly" },
              { id: "c", text: "Coats leaves and reduces photosynthesis" },
              { id: "d", text: "Raises sea level" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Ash fall", statement: "Ash smothers vegetation and machinery." }],
            steps: [{ reasoning: "A thick ash layer blocks light and damages plant tissue.", marks: 1, markCode: "M" }],
            finalAnswer: "It coats leaves and reduces photosynthesis.",
          },
        },
        {
          id: "ciealgeo-u1-vol-q13",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A volcano map is drawn at 1:600,000. (a) What map distance represents 18 km on the ground? (b) What ground distance is represented by 2.5 cm on the map?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 3, unit: "cm" },
              { label: "b", answer: 15, unit: "km" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Map scale", statement: "1 cm on map = 600,000 cm = 6 km on ground." },
            ],
            steps: [
              { part: "a", reasoning: "1800000 cm / 600000 = 3 cm.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "2.5 x 6 km = 15 km.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "a) 3 cm; b) 15 km",
            commonErrors: ["Failing to convert centimetres to kilometres."],
          },
        },
        {
          id: "ciealgeo-u1-vol-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why lahars are often more dangerous after heavy rainfall following an eruption.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Lahar formation", statement: "Loose ash and debris are mobilised by water." },
            ],
            steps: [
              { reasoning: "Eruptions deposit loose ash and debris on slopes.", marks: 1, markCode: "M" },
              { reasoning: "Heavy rain saturates the material and adds water.", marks: 1, markCode: "M" },
              { reasoning: "The mixture moves rapidly downstream, burying settlements and infrastructure.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Rain mobilises volcanic debris into fast-moving mudflows.",
            commonErrors: ["Treating lahars as lava."],
          },
        },
        {
          id: "ciealgeo-u1-vol-q15",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "A pyroclastic deposit covers 600 km² with an average thickness of 6 mm. Calculate its volume in cubic metres, using $1\\ \\text{mm} = 0.001\\ \\text{m}$.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 3600000, unit: "m3" }],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Volume calculation", statement: "Convert area and thickness to consistent units before multiplying." },
            ],
            steps: [
              { part: "a", reasoning: "600 km2 = 600,000,000 m2; 6 mm = 0.006 m; volume = 600000000 x 0.006 = 3600000 m3.", marks: 3, markCode: "M" },
            ],
            finalAnswer: "3600000 m3",
            commonErrors: ["Multiplying without unit conversion."],
          },
        },
        {
          id: "ciealgeo-u1-vol-q16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Compare monitoring, evacuation and engineering responses to a composite-volcano eruption.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Volcanic management", statement: "Different responses reduce different stages of risk." },
            ],
            steps: [
              { reasoning: "Monitoring predicts eruptions using seismic, gas and deformation data.", marks: 1, markCode: "M" },
              { reasoning: "Evacuation removes people from pyroclastic, lahar and ash hazards.", marks: 1, markCode: "M" },
              { reasoning: "Engineering can divert lahars or protect infrastructure but is costly.", marks: 1, markCode: "M" },
              { reasoning: "The approaches are most effective when combined.", marks: 1, markCode: "A" },
              { reasoning: "A justified conclusion links methods to hazard type and timing.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Monitoring predicts, evacuation protects people, and engineering reduces damage; integration gives the best protection.",
            commonErrors: ["Describing hazards without evaluating responses."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciealgeo-u1-vol-notes",
      title: "Volcanoes — notes",
      summary:
        "Composite=explosive dangerous; shield=effusive less dangerous. Pyroclastic flows deadly.",
      sections: [
        {
          heading: "Key idea",
          body: "Volcano type determines eruption style and hazard severity.",
        },
        {
          heading: "Management",
          body: "Monitoring seismic/gas/deformation enables prediction and evacuation.",
        },
      ],
    },
  ],
};
