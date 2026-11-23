import type { Lesson } from "../../../types.ts";

export const lesson92: Lesson = {
  id: "s7-u9-lesson-9-2",
  code: "9-2",
  title: "Plate Tectonics and Earth's Interior",
  goal: "I CAN describe Earth's internal structure, explain plate tectonics and how it causes earthquakes, volcanoes and mountain building.",
  standards: [
    "MS-ESS2-2",
    "MS-ESS2-3",
    "SEP: Developing and Using Models",
    "SEP: Constructing Explanations",
  ],
  vocabulary: [
    {
      term: "Crust",
      definition:
        "The thin, outermost layer of Earth; continental and oceanic crust.",
    },
    {
      term: "Mantle",
      definition:
        "The thick layer of hot, semi-solid rock between crust and core.",
    },
    {
      term: "Core",
      definition:
        "The central part of Earth: outer core (liquid) and inner core (solid).",
    },
    {
      term: "Tectonic plate",
      definition:
        "A large piece of Earth's crust and upper mantle that moves slowly.",
    },
    {
      term: "Convergent boundary",
      definition:
        "Where plates collide; causes mountains, volcanoes, earthquakes.",
    },
    {
      term: "Divergent boundary",
      definition:
        "Where plates move apart; causes mid-ocean ridges and rift valleys.",
    },
    {
      term: "Transform boundary",
      definition: "Where plates slide past each other; causes earthquakes.",
    },
  ],
  concepts: [
    {
      id: "s7-u9-earth-interior",
      title: "Earth's internal structure",
      skill:
        "Describe the layers of Earth: crust, mantle, outer core and inner core.",
      lesson: {
        sections: [
          {
            heading: "Layers of Earth",
            body: "Earth has distinct layers:\n\n- **Crust**: thin outermost layer (5-70 km); continental (thick, granite) and oceanic (thin, basalt).\n- **Mantle**: thick layer (~2,900 km) of hot, semi-solid rock; convects like thick syrup.\n- **Outer core**: liquid iron and nickel (~2,200 km thick); generates Earth's magnetic field through convection.\n- **Inner core**: solid iron and nickel (~1,200 km radius); extremely hot (~5,500°C) but solid due to pressure.",
          },
          {
            heading: "How we know",
            body: "Scientists study Earth's interior using **seismic waves** from earthquakes. These waves travel at different speeds through different materials, revealing the layered structure. Drilling and volcanoes also provide samples.",
          },
        ],
        keyFormulas: [
          {
            name: "Crust",
            statement: "Thin outermost layer; continental and oceanic.",
          },
          { name: "Mantle", statement: "Hot semi-solid rock; convects." },
          {
            name: "Core",
            statement: "Outer = liquid (magnetic field); inner = solid.",
          },
        ],
        workedExample: {
          problem: "Which layer generates Earth's magnetic field?",
          solution:
            "The outer core — liquid iron and nickel convect, generating the magnetic field.",
        },
      },
      questions: [
        {
          id: "s7-u9-interior-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which layer of Earth is the outermost?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Mantle" },
              { id: "b", text: "Outer core" },
              { id: "c", text: "Crust" },
              { id: "d", text: "Inner core" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Crust",
                statement: "Thin outermost layer of Earth.",
              },
            ],
            steps: [
              {
                reasoning: "The crust is the thin, outermost layer.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(c)** Crust.",
            commonErrors: ["Choosing (a): mantle is below crust."],
          },
        },
        {
          id: "s7-u9-interior-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe the four main layers of Earth.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Earth's layers",
                statement: "Crust, mantle, outer core, inner core.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Crust: thin outermost layer (continental and oceanic).",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Mantle: thick layer of hot semi-solid rock.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Outer core: liquid iron/nickel; inner core: solid iron/nickel.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer:
              "Crust, mantle, outer core (liquid), inner core (solid).",
            commonErrors: ["Missing a layer or mixing up core states."],
          },
        },
        {
          id: "s7-u9-interior-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How do scientists study Earth's interior?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Seismic waves",
                statement: "Earthquake waves reveal internal structure.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Seismic waves from earthquakes travel through Earth.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "They travel at different speeds through different materials.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "By measuring wave speeds, scientists infer the layered structure.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Drilling and volcanic samples also provide direct evidence.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Seismic waves reveal structure; drilling and volcanoes provide samples.",
            commonErrors: ["Saying we can drill to the core."],
          },
        },
        {
          id: "s7-u9-interior-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Compare continental crust and oceanic crust.",
          parts: [
            { label: "a", prompt: "Which is thicker?", marks: 2 },
            { label: "b", prompt: "Which is denser?", marks: 2 },
            { label: "c", prompt: "What rocks compose each?", marks: 2 },
            {
              label: "d",
              prompt: "Why do continents 'float' higher?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Crust types",
                statement:
                  "Continental = thick, light (granite); oceanic = thin, dense (basalt).",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Continental crust is thicker (30-70 km vs 5-10 km).",
                marks: 2,
                markCode: "B",
              },
              {
                part: "b",
                reasoning: "Oceanic crust is denser.",
                marks: 2,
                markCode: "B",
              },
              {
                part: "c",
                reasoning: "Continental = granite; oceanic = basalt.",
                marks: 2,
                markCode: "B",
              },
              {
                part: "d",
                reasoning:
                  "Continental crust is less dense, so it floats higher on the mantle.",
                marks: 2,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) Continental thicker (b) Oceanic denser (c) Granite vs basalt (d) Less dense floats higher.",
            commonErrors: ["Saying oceanic crust is thicker."],
          },
        },
      ],
    },
    {
      id: "s7-u9-plate-boundaries",
      title: "Plate Boundaries and Interactions",
      skill:
        "Describe convergent, divergent and transform boundaries and their effects.",
      lesson: {
        sections: [
          {
            heading: "Types of boundaries",
            body: "Tectonic plates interact at boundaries:\n\n- **Convergent**: plates collide → mountains (Himalayas), volcanoes, deep-sea trenches, earthquakes.\n- **Divergent**: plates move apart → mid-ocean ridges, rift valleys, new crust.\n- **Transform**: plates slide past each other → earthquakes (San Andreas Fault).",
          },
          {
            heading: "Evidence for plate tectonics",
            body: "- **Continental drift**: continents fit together like puzzle pieces.\n- **Fossils**: same species found on separated continents.\n- **Mountain ranges**: align across oceans.\n- **Seafloor spreading**: new crust forms at mid-ocean ridges.\n- **Earthquake and volcano patterns**: follow plate boundaries.",
          },
        ],
        keyFormulas: [
          {
            name: "Convergent",
            statement: "Collide → mountains, volcanoes, earthquakes.",
          },
          {
            name: "Divergent",
            statement: "Move apart → mid-ocean ridges, rift valleys.",
          },
          { name: "Transform", statement: "Slide past → earthquakes." },
        ],
        workedExample: {
          problem:
            "The Himalayas are still growing. What type of boundary causes this?",
          solution:
            "Convergent boundary — the Indian plate collides with the Eurasian plate, pushing up the Himalayas.",
        },
      },
      questions: [
        {
          id: "s7-u9-boundaries-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What happens at a divergent boundary?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Plates collide" },
              { id: "b", text: "Plates move apart" },
              { id: "c", text: "Plates slide past" },
              { id: "d", text: "Nothing happens" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Divergent boundary",
                statement: "Plates move apart, creating new crust.",
              },
            ],
            steps: [
              {
                reasoning:
                  "At divergent boundaries, plates move apart, forming ridges and rift valleys.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Plates move apart.",
            commonErrors: ["Choosing (a): that's convergent."],
          },
        },
        {
          id: "s7-u9-boundaries-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe what happens at a convergent boundary.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Convergent boundary",
                statement: "Collision → mountains, volcanoes, earthquakes.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Plates collide and one may be forced under the other (subduction).",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Collision builds mountains; subduction causes volcanoes.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Intense pressure causes earthquakes.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Collision → mountains, volcanoes (subduction), earthquakes.",
            commonErrors: ["Saying convergent boundaries create rift valleys."],
          },
        },
        {
          id: "s7-u9-boundaries-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how plate tectonics causes earthquakes.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Earthquakes",
                statement: "Energy release at plate boundaries.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Plates move slowly but stick at boundaries due to friction.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Stress builds until it overcomes friction, releasing energy suddenly.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "This sudden release creates seismic waves = earthquake.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Most earthquakes occur at plate boundaries.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Stress builds at boundaries; sudden release creates earthquakes.",
            commonErrors: ["Saying plates move fast."],
          },
        },
        {
          id: "s7-u9-boundaries-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "The San Andreas Fault in California is a transform boundary.",
          parts: [
            {
              label: "a",
              prompt: "What happens at a transform boundary?",
              marks: 2,
            },
            { label: "b", prompt: "Why does it cause earthquakes?", marks: 2 },
            {
              label: "c",
              prompt: "Does it create mountains or volcanoes?",
              marks: 2,
            },
            {
              label: "d",
              prompt: "Compare to the Himalayas' boundary type.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Transform vs convergent",
                statement:
                  "Transform = slide past → earthquakes only. Convergent = collide → mountains + earthquakes.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Plates slide horizontally past each other.",
                marks: 2,
                markCode: "B",
              },
              {
                part: "b",
                reasoning:
                  "Friction builds stress; sudden release causes earthquakes.",
                marks: 2,
                markCode: "B",
              },
              {
                part: "c",
                reasoning:
                  "No — transform boundaries don't create mountains or volcanoes.",
                marks: 2,
                markCode: "R",
              },
              {
                part: "d",
                reasoning:
                  "Himalayas = convergent boundary (collision → mountains + earthquakes).",
                marks: 2,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) Slide past (b) Friction → earthquakes (c) No mountains/volcanoes (d) Convergent.",
            commonErrors: ["Saying transform boundaries create mountains."],
          },
        },
      ],
    },
    {
      id: "s7-u9-volcanoes",
      title: "Volcanoes and Earthquakes",
      skill:
        "Describe how volcanoes form, types of volcanoes, and how earthquakes are measured.",
      lesson: {
        sections: [
          {
            heading: "Volcano formation",
            body: "Volcanoes form where magma rises to the surface:\n\n- **Subduction zones**: one plate slides under another, melting rock → magma → volcanoes (e.g., Ring of Fire).\n- **Hot spots**: plumes of hot mantle material rise through the crust (e.g., Hawaii).\n- **Divergent boundaries**: magma rises at mid-ocean ridges.\n\nTypes: **shield** (broad, gentle slopes — basalt), **composite/stratovolcano** (steep, layered — andesite), **cinder cone** (small, steep — ash).",
          },
          {
            heading: "Earthquakes and measurement",
            body: "Earthquakes are measured by:\n\n- **Magnitude**: energy released (Richter scale; each whole number = 10× more energy).\n- **Intensity**: shaking felt at a location (Mercalli scale).\n\nSeismic waves: **P-waves** (primary, fastest, compressional), **S-waves** (secondary, slower, shear), **surface waves** (slowest, most destructive).",
          },
        ],
        keyFormulas: [
          {
            name: "Volcano types",
            statement:
              "Shield (gentle), composite (steep), cinder cone (small).",
          },
          {
            name: "Volcano locations",
            statement: "Subduction zones, hot spots, divergent boundaries.",
          },
          {
            name: "Earthquake scales",
            statement: "Magnitude (energy) vs intensity (shaking).",
          },
        ],
        workedExample: {
          problem: "Why does the Ring of Fire have many volcanoes?",
          solution:
            "It's located at subduction zones where oceanic plates slide under continental plates, melting rock and creating magma.",
        },
      },
      questions: [
        {
          id: "s7-u9-volcano-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What causes most volcanoes?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Plate collisions only" },
              {
                id: "b",
                text: "Subduction, hot spots, or divergent boundaries",
              },
              { id: "c", text: "Weather" },
              { id: "d", text: "Earthquakes only" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Volcano formation",
                statement:
                  "Magma rises at subduction zones, hot spots, divergent boundaries.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Volcanoes form where magma reaches the surface — subduction, hot spots, or divergent boundaries.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer:
              "**(b)** Subduction, hot spots, or divergent boundaries.",
            commonErrors: ["Saying only plate collisions cause volcanoes."],
          },
        },
        {
          id: "s7-u9-volcano-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Distinguish between magnitude and intensity of an earthquake.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Magnitude vs intensity",
                statement: "Magnitude = energy; intensity = shaking felt.",
              },
            ],
            steps: [
              {
                reasoning: "Magnitude measures energy released at the source.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Intensity measures shaking experienced at a location.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Same magnitude can have different intensities depending on distance and geology.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Magnitude = energy released; intensity = shaking felt locally.",
            commonErrors: ["Confusing the two terms."],
          },
        },
        {
          id: "s7-u9-volcano-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why shield volcanoes have gentle slopes while composite volcanoes are steep.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Volcano types",
                statement:
                  "Shield = fluid lava (gentle); composite = viscous lava + ash (steep).",
              },
            ],
            steps: [
              {
                reasoning:
                  "Shield volcanoes erupt fluid basaltic lava that flows far.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "This spreads lava over wide area, creating gentle slopes.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Composite volcanoes erupt viscous andesitic lava that doesn't flow far.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Lava piles up steeply, alternating with ash layers.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Shield = fluid lava → gentle slopes; composite = viscous lava → steep slopes.",
            commonErrors: ["Saying all volcanoes are the same shape."],
          },
        },
        {
          id: "s7-u9-volcano-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A major earthquake strikes a coastal city.",
          parts: [
            {
              label: "a",
              prompt: "What is the difference between P-waves and S-waves?",
              marks: 2,
            },
            { label: "b", prompt: "Which arrives first and why?", marks: 2 },
            {
              label: "c",
              prompt: "Why are surface waves most destructive?",
              marks: 2,
            },
            {
              label: "d",
              prompt: "What secondary hazards might occur?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Seismic waves",
                statement:
                  "P-waves fastest; S-waves shear; surface waves most destructive.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "P-waves are compressional (push-pull); S-waves are shear (side-to-side).",
                marks: 2,
                markCode: "B",
              },
              {
                part: "b",
                reasoning: "P-waves arrive first — they are faster.",
                marks: 2,
                markCode: "B",
              },
              {
                part: "c",
                reasoning:
                  "Surface waves cause the most ground shaking and damage.",
                marks: 2,
                markCode: "B",
              },
              {
                part: "d",
                reasoning: "Tsunamis, landslides, fires, liquefaction.",
                marks: 2,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) P=compressional, S=shear (b) P first, faster (c) Most shaking (d) Tsunami, landslide, fire.",
            commonErrors: ["Saying S-waves arrive first."],
          },
        },
      ],
    },
  ],
};
