import type { Lesson } from "../../../types.ts";

export const lesson42: Lesson = {
  id: "ess9-u4-lesson-4-2",
  code: "4-2",
  title: "Plate Tectonics Deep Dive",
  goal: "I CAN describe plate tectonic theory and explain how plates move and interact.",
  standards: [
    "HS-ESS2-1",
    "HS-ESS2-2",
    "SEP: Developing and Using Models",
    "SEP: Constructing Explanations",
  ],
  vocabulary: [
    {
      term: "Plate tectonics",
      definition:
        "Theory that Earth's lithosphere is broken into moving plates.",
    },
    {
      term: "Tectonic plate",
      definition: "Rigid section of lithosphere that moves independently.",
    },
    {
      term: "Convergent boundary",
      definition: "Plates move toward each other.",
    },
    { term: "Divergent boundary", definition: "Plates move apart." },
    { term: "Transform boundary", definition: "Plates slide past each other." },
    { term: "Subduction", definition: "One plate sinks beneath another." },
    {
      term: "Seafloor spreading",
      definition: "New crust formed at mid-ocean ridges.",
    },
  ],
  concepts: [
    {
      id: "ess9-u4-plates",
      title: "Plate tectonic theory",
      skill: "Explain the evidence and mechanisms of plate tectonics.",
      lesson: {
        sections: [
          {
            heading: "Plate tectonic theory",
            body: "Earth's lithosphere is divided into ~12 major plates that move slowly (cm/year).\n\n**Evidence**:\n- Continental drift (Wegener, 1912)\n- Seafloor spreading\n- Magnetic striping\n- Earthquake/volcano distribution\n- Matching fossils/coastlines",
          },
          {
            heading: "Plate movements",
            body: "Plates move due to mantle convection and slab pull.\n- **Divergent**: plates separate → new crust (mid-ocean ridges).\n- **Convergent**: plates collide → mountains, trenches, volcanoes.\n- **Transform**: plates slide → earthquakes (San Andreas).",
          },
        ],
        keyFormulas: [
          { name: "Plate movement", statement: "cm/year" },
          { name: "Boundaries", statement: "Convergent, divergent, transform" },
          { name: "Evidence", statement: "Multiple lines of evidence" },
        ],
        workedExample: {
          problem: "What evidence supports plate tectonics?",
          solution:
            "Continental drift, seafloor spreading, magnetic striping, earthquake patterns.",
        },
      },
      questions: [
        {
          id: "ess9-u4-plates-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is plate tectonics?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Study of plates" },
              { id: "b", text: "Theory of moving lithospheric plates" },
              { id: "c", text: "Plate collisions only" },
              { id: "d", text: "Earthquakes only" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Plate tectonics",
                statement: "Theory of moving plates.",
              },
            ],
            steps: [
              {
                reasoning: "Plate tectonics = moving lithosphere.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Theory of moving lithospheric plates",
            commonErrors: ["Study of plates."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "ess9-u4-plates-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name the three types of plate boundaries.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Boundaries",
                statement: "Convergent, divergent, transform.",
              },
            ],
            steps: [
              {
                reasoning: "Convergent, divergent, transform.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Convergent, divergent, transform.",
            commonErrors: ["Missing one."],
            examinerNote: "A1 for all three.",
          },
        },
        {
          id: "ess9-u4-plates-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "What evidence supports plate tectonics? Name three.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Evidence",
                statement: "Multiple lines of evidence.",
              },
            ],
            steps: [
              {
                reasoning: "Continental drift (coastlines, fossils).",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Seafloor spreading (magnetic striping).",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Earthquake/volcano distribution.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Answer: multiple evidence lines.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Continental drift, seafloor spreading, earthquake patterns.",
            commonErrors: ["One evidence only."],
            examinerNote: "B1 for each evidence + A1.",
          },
        },
        {
          id: "ess9-u4-plates-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Describe how plates move and what drives them.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Plate movement",
                statement: "cm/year movement.",
              },
              {
                kind: "property",
                name: "Driving forces",
                statement: "Convection, slab pull.",
              },
            ],
            steps: [
              { reasoning: "Plates move cm/year.", marks: 2, markCode: "B" },
              {
                reasoning: "Mantle convection provides driving force.",
                marks: 2,
                markCode: "B",
              },
              {
                reasoning: "Slab pull at subduction zones also drives.",
                marks: 2,
                markCode: "B",
              },
              {
                reasoning: "Answer: convection + slab pull.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Plates move cm/year driven by convection and slab pull.",
            commonErrors: ["Fast movement."],
            examinerNote: "B2 for movement + B2 for forces + A1.",
          },
        },
      ],
    },
    {
      id: "ess9-u4-boundaries",
      title: "Plate boundaries and features",
      skill: "Describe features formed at different plate boundaries.",
      lesson: {
        sections: [
          {
            heading: "Convergent boundaries",
            body: "Plates move toward each other:\n- Ocean-ocean: subduction → trench + volcanic arc.\n- Ocean-continent: subduction → trench + volcanoes + mountains.\n- Continent-continent: collision → mountain range.",
          },
          {
            heading: "Divergent and transform boundaries",
            body: "- **Divergent**: plates separate → mid-ocean ridge, rift valley, new crust.\n- **Transform**: plates slide → fault, earthquakes, offset features.",
          },
        ],
        keyFormulas: [
          { name: "Convergent", statement: "Subduction, mountains, volcanoes" },
          { name: "Divergent", statement: "Ridges, rifts, new crust" },
          { name: "Transform", statement: "Faults, earthquakes" },
        ],
        workedExample: {
          problem: "What forms at ocean-continent convergent boundary?",
          solution: "Trench, volcanic arc, coastal mountains.",
        },
      },
      questions: [
        {
          id: "ess9-u4-boundaries-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What forms at a convergent boundary?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Mid-ocean ridge" },
              { id: "b", text: "Mountain range" },
              { id: "c", text: "Rift valley" },
              { id: "d", text: "Transform fault" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Convergent",
                statement: "Mountains form.",
              },
            ],
            steps: [
              { reasoning: "Convergent → mountains.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Mountain range",
            commonErrors: ["Mid-ocean ridge."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "ess9-u4-boundaries-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What's subduction?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Subduction",
                statement: "One plate sinks beneath another.",
              },
            ],
            steps: [
              {
                reasoning: "One plate sinks beneath another.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "One plate sinks beneath another.",
            commonErrors: ["Collision."],
            examinerNote: "A1 for correct definition.",
          },
        },
        {
          id: "ess9-u4-boundaries-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "What features form at divergent boundaries?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Divergent",
                statement: "Ridges, rifts, new crust.",
              },
            ],
            steps: [
              { reasoning: "Mid-ocean ridge.", marks: 1, markCode: "B" },
              {
                reasoning: "Rift valley (continental).",
                marks: 1,
                markCode: "B",
              },
              { reasoning: "New crust formed.", marks: 1, markCode: "B" },
              {
                reasoning: "Answer: spreading features.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Mid-ocean ridge, rift valley, new crust.",
            commonErrors: ["Mountains."],
            examinerNote: "B1 for each feature + A1.",
          },
        },
        {
          id: "ess9-u4-boundaries-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Compare features at convergent vs divergent boundaries.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Convergent",
                statement: "Mountains, trenches, volcanoes.",
              },
              {
                kind: "property",
                name: "Divergent",
                statement: "Ridges, rifts, new crust.",
              },
            ],
            steps: [
              {
                reasoning: "Convergent: mountains, trenches, volcanoes.",
                marks: 3,
                markCode: "B",
              },
              {
                reasoning: "Divergent: ridges, rifts, new crust.",
                marks: 3,
                markCode: "B",
              },
              {
                reasoning: "Transform: faults, earthquakes.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer:
              "Convergent: mountains/trenches/volcanoes; divergent: ridges/rifts/crust; transform: faults/earthquakes.",
            commonErrors: ["Same features."],
            examinerNote:
              "B3 for convergent + B3 for divergent + B2 for transform.",
          },
        },
      ],
    },
    {
      id: "ess9-u4-earthquakes",
      title: "Earthquakes and volcanoes",
      skill: "Explain how plate tectonics causes earthquakes and volcanoes.",
      lesson: {
        sections: [
          {
            heading: "Earthquakes",
            body: "Plate boundaries cause earthquakes:\n- Stress builds at boundaries.\n- Rocks break → seismic waves.\n- Most earthquakes at plate boundaries.\n- Transform boundaries: frequent shallow quakes.",
          },
          {
            heading: "Volcanoes",
            body: "Volcanoes form at convergent boundaries (subduction) and divergent boundaries (ridges).\n- Subduction → magma rises → volcanoes.\n- Ridges → basaltic lava → undersea volcanoes.",
          },
        ],
        keyFormulas: [
          { name: "Earthquakes", statement: "Plate boundary stress" },
          { name: "Volcanoes", statement: "Magma from subduction/ridges" },
          { name: "Distribution", statement: "Ring of Fire" },
        ],
        workedExample: {
          problem: "Why are most earthquakes at plate boundaries?",
          solution:
            "Stress concentrates at plate boundaries where plates interact.",
        },
      },
      questions: [
        {
          id: "ess9-u4-eq-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Where do most earthquakes occur?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Plate interiors" },
              { id: "b", text: "Plate boundaries" },
              { id: "c", text: "Oceans only" },
              { id: "d", text: "Random" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Earthquakes",
                statement: "Plate boundaries.",
              },
            ],
            steps: [
              {
                reasoning: "Most earthquakes at boundaries.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Plate boundaries",
            commonErrors: ["Plate interiors."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "ess9-u4-eq-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What causes earthquakes?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Earthquakes",
                statement: "Stress release at plate boundaries.",
              },
            ],
            steps: [
              {
                reasoning: "Stress builds at boundaries.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Rocks break → seismic waves.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Stress release at plate boundaries.",
            commonErrors: ["Volcanic only."],
            examinerNote: "R1, A1.",
          },
        },
        {
          id: "ess9-u4-eq-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Where do most volcanoes form?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Volcanoes",
                statement: "Convergent and divergent boundaries.",
              },
            ],
            steps: [
              {
                reasoning: "Convergent: subduction → magma → volcanoes.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Divergent: ridges → basaltic lava → volcanoes.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Ring of Fire: Pacific convergent boundaries.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Answer: plate boundaries.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Convergent and divergent boundaries.",
            commonErrors: ["Random."],
            examinerNote: "B1 for each + A1.",
          },
        },
        {
          id: "ess9-u4-eq-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Explain the Ring of Fire.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Ring of Fire",
                statement: "Pacific convergent boundaries.",
              },
            ],
            steps: [
              {
                reasoning: "Pacific plate surrounded by convergent boundaries.",
                marks: 2,
                markCode: "B",
              },
              {
                reasoning: "Subduction → magma → volcanoes.",
                marks: 2,
                markCode: "B",
              },
              {
                reasoning: "Plate stress → earthquakes.",
                marks: 2,
                markCode: "B",
              },
              {
                reasoning: "Answer: volcanic arc + seismic activity.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Pacific convergent boundaries → volcanoes + earthquakes.",
            commonErrors: ["Random distribution."],
            examinerNote: "B2 for mechanism + B2 for features + A1.",
          },
        },
      ],
    },
  ],
};
