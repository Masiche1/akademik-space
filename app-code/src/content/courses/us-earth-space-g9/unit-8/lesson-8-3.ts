import type { Lesson } from "../../../types.ts";

export const lesson83: Lesson = {
  id: "ess9-u8-lesson-8-3",
  code: "8-3",
  title: "Volcanoes and Volcanic Hazards",
  goal: "I CAN describe volcano types, eruption styles, and hazards.",
  standards: [
    "HS-ESS2-2",
    "HS-ESS3-2",
    "SEP: Constructing Explanations",
    "SEP: Developing and Using Models",
  ],
  vocabulary: [
    { term: "Magma", definition: "Molten rock underground." },
    { term: "Lava", definition: "Magma that reaches the surface." },
    {
      term: "Volcano",
      definition: "Opening in Earth's crust where magma erupts.",
    },
    {
      term: "Shield volcano",
      definition: "Broad, gentle slopes; basaltic lava (e.g., Mauna Loa).",
    },
    {
      term: "Composite volcano",
      definition: "Steep, layered; explosive (e.g., Mount St. Helens).",
    },
    {
      term: "Caldera",
      definition: "Large depression from collapsed magma chamber.",
    },
    { term: "Pyroclastic flow", definition: "Fast-moving hot ash/gas cloud." },
  ],
  concepts: [
    {
      id: "ess9-u8-volcanoes",
      title: "Volcano types and formation",
      skill: "Classify volcano types and describe formation.",
      lesson: {
        sections: [
          {
            heading: "Formation",
            body: "Magma rises through crust → erupts at surface.\nMost volcanoes at plate boundaries (convergent, divergent) or hotspots.",
          },
          {
            heading: "Types",
            body: "- **Shield**: broad, gentle; fluid basaltic lava.\n- **Composite**: steep, layered; alternating lava/ash.\n- **Cinder cone**: small, steep; pyroclastic material.\n- **Caldera**: collapsed crater.",
          },
        ],
        keyFormulas: [
          { name: "Shield", statement: "Broad, gentle, basaltic" },
          { name: "Composite", statement: "Steep, explosive" },
          { name: "Caldera", statement: "Collapsed crater" },
        ],
        workedExample: {
          problem: "Which volcano type is most explosive?",
          solution: "Composite — steep, layered, gas-rich magma.",
        },
      },
      questions: [
        {
          id: "ess9-u8-volcanoes-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What's the difference between magma and lava?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Same thing" },
              { id: "b", text: "Magma underground, lava on surface" },
              { id: "c", text: "Lava underground, magma on surface" },
              { id: "d", text: "Magma is rock, lava is water" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Magma vs lava",
                statement: "Underground vs surface.",
              },
            ],
            steps: [
              {
                reasoning: "Magma = underground; lava = surface.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Magma underground, lava surface",
            commonErrors: ["Same."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "ess9-u8-volcanoes-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two volcano types.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "fact", name: "Types", statement: "Multiple types." },
            ],
            steps: [
              {
                reasoning: "Shield, composite, cinder cone, caldera.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Shield, composite, cinder cone, caldera.",
            commonErrors: ["One type."],
            examinerNote: "A1 for two.",
          },
        },
        {
          id: "ess9-u8-volcanoes-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why are composite volcanoes explosive?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Composite",
                statement: "Gas-rich magma.",
              },
            ],
            steps: [
              { reasoning: "Thick, gas-rich magma.", marks: 1, markCode: "R" },
              {
                reasoning: "Pressure builds → explosive eruption.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Alternating lava/ash layers.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Answer: viscous, gas-rich magma.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Thick gas-rich magma → explosive.",
            commonErrors: ["Gentle."],
            examinerNote: "R3, A1.",
          },
        },
        {
          id: "ess9-u8-volcanoes-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Compare shield and composite volcanoes.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Types",
                statement: "Different characteristics.",
              },
            ],
            steps: [
              {
                reasoning: "Shield: broad, gentle, basaltic, non-explosive.",
                marks: 3,
                markCode: "B",
              },
              {
                reasoning: "Composite: steep, layered, explosive.",
                marks: 3,
                markCode: "B",
              },
              {
                reasoning: "Answer: shape + eruption style differ.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Shield = broad/gentle; composite = steep/explosive.",
            commonErrors: ["Same."],
            examinerNote: "B3 for each + A1.",
          },
        },
      ],
    },
    {
      id: "ess9-u8-eruptions",
      title: "Eruption styles and volcanic hazards",
      skill: "Describe eruption styles and associated hazards.",
      lesson: {
        sections: [
          {
            heading: "Eruption styles",
            body: "- **Effusive**: gentle lava flows (shield volcanoes).\n- **Explosive**: ash, pyroclastic flows, lahars (composite).\n- Depends on magma viscosity + gas content.",
          },
          {
            heading: "Hazards",
            body: "- Lava flows, ash fall, pyroclastic flows.\n- Lahars (mudflows), volcanic gases.\n- Secondary: tsunamis, landslides.",
          },
        ],
        keyFormulas: [
          { name: "Effusive", statement: "Gentle lava flows" },
          { name: "Explosive", statement: "Ash, pyroclastic" },
          { name: "Lahar", statement: "Volcanic mudflow" },
        ],
        workedExample: {
          problem: "What's a lahar?",
          solution: "Volcanic mudflow from ash + water.",
        },
      },
      questions: [
        {
          id: "ess9-u8-eruptions-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What's a lahar?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Lava flow" },
              { id: "b", text: "Volcanic mudflow" },
              { id: "c", text: "Ash cloud" },
              { id: "d", text: "Earthquake" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Lahar",
                statement: "Volcanic mudflow.",
              },
            ],
            steps: [{ reasoning: "Lahar = mudflow.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Volcanic mudflow",
            commonErrors: ["Lava flow."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "ess9-u8-eruptions-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two volcanic hazards.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Hazards",
                statement: "Multiple hazards.",
              },
            ],
            steps: [
              {
                reasoning: "Lava, ash, pyroclastic, lahars.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Lava, ash, pyroclastic flows, lahars.",
            commonErrors: ["One hazard."],
            examinerNote: "A1 for two.",
          },
        },
        {
          id: "ess9-u8-eruptions-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "What determines eruption style?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Eruption",
                statement: "Magma properties.",
              },
            ],
            steps: [
              {
                reasoning: "Magma viscosity (thickness).",
                marks: 1,
                markCode: "R",
              },
              { reasoning: "Gas content.", marks: 1, markCode: "R" },
              {
                reasoning: "Answer: viscosity + gas → style.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Viscosity + gas content determine style.",
            commonErrors: ["Random."],
            examinerNote: "R2, A1.",
          },
        },
        {
          id: "ess9-u8-eruptions-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Compare effusive and explosive eruptions.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Styles",
                statement: "Different characteristics.",
              },
            ],
            steps: [
              {
                reasoning: "Effusive: gentle, fluid lava flows.",
                marks: 3,
                markCode: "B",
              },
              {
                reasoning: "Explosive: ash, pyroclastic, lahars.",
                marks: 3,
                markCode: "B",
              },
              {
                reasoning: "Answer: gentle vs violent.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Effusive = gentle flows; explosive = violent ash.",
            commonErrors: ["Same."],
            examinerNote: "B3 for each + A1.",
          },
        },
      ],
    },
    {
      id: "ess9-u8-volcanic-mitigation",
      title: "Volcanic monitoring and hazards",
      skill: "Describe volcanic monitoring and hazard mitigation.",
      lesson: {
        sections: [
          {
            heading: "Monitoring",
            body: "- Seismometers detect magma movement.\n- Gas emissions monitored.\n- Ground deformation (GPS, tiltmeters).\n- Satellite observations.",
          },
          {
            heading: "Hazards",
            body: "Lahars, ash fall, pyroclastic flows, lava.\nSecondary: tsunamis, landslides, climate effects (ash → cooling).",
          },
        ],
        keyFormulas: [
          { name: "Monitoring", statement: "Seismic, gas, deformation" },
          { name: "Hazards", statement: "Lahars, ash, pyroclastic" },
          { name: "Effects", statement: "Climate cooling possible" },
        ],
        workedExample: {
          problem: "How do volcanoes affect climate?",
          solution: "Ash/aerosols reflect sunlight → temporary cooling.",
        },
      },
      questions: [
        {
          id: "ess9-u8-volcanic-mitigation-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What instrument monitors volcanic activity?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Barometer" },
              { id: "b", text: "Seismometer" },
              { id: "c", text: "Thermometer" },
              { id: "d", text: "Anemometer" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Seismometer",
                statement: "Detects magma movement.",
              },
            ],
            steps: [
              {
                reasoning: "Seismometer monitors volcanoes.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Seismometer",
            commonErrors: ["Barometer."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "ess9-u8-volcanic-mitigation-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "How can volcanoes affect climate?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Climate",
                statement: "Ash → cooling.",
              },
            ],
            steps: [
              {
                reasoning: "Ash/aerosols reflect sunlight → cooling.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Ash → temporary cooling.",
            commonErrors: ["Warming."],
            examinerNote: "A1 for answer.",
          },
        },
        {
          id: "ess9-u8-volcanic-mitigation-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "What signs indicate a volcano may erupt?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Signs",
                statement: "Multiple indicators.",
              },
            ],
            steps: [
              {
                reasoning: "Increased seismic activity.",
                marks: 1,
                markCode: "R",
              },
              { reasoning: "Ground deformation.", marks: 1, markCode: "R" },
              { reasoning: "Gas emission changes.", marks: 1, markCode: "R" },
              {
                reasoning: "Answer: multiple warning signs.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Seismic activity, deformation, gas changes.",
            commonErrors: ["No signs."],
            examinerNote: "R3, A1.",
          },
        },
        {
          id: "ess9-u8-volcanic-mitigation-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Describe volcanic monitoring methods.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Monitoring",
                statement: "Multiple methods.",
              },
            ],
            steps: [
              {
                reasoning: "Seismometers: detect magma movement.",
                marks: 2,
                markCode: "B",
              },
              {
                reasoning: "Gas monitoring: emission changes.",
                marks: 2,
                markCode: "B",
              },
              {
                reasoning: "Ground deformation: GPS, tiltmeters.",
                marks: 2,
                markCode: "B",
              },
              {
                reasoning: "Answer: multiple monitoring tools.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Seismic, gas, deformation monitoring.",
            commonErrors: ["One method."],
            examinerNote: "B2 for each method.",
          },
        },
      ],
    },
  ],
};
