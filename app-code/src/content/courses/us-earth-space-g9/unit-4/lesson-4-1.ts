import type { Lesson } from "../../../types.ts";

export const lesson41: Lesson = {
  id: "ess9-u4-lesson-4-1",
  code: "4-1",
  title: "Earth's Interior Structure",
  goal: "I CAN describe Earth's internal layers and explain how seismic waves reveal Earth's interior.",
  standards: [
    "HS-ESS2-3",
    "SEP: Developing and Using Models",
    "SEP: Analyzing and Interpreting Data",
  ],
  vocabulary: [
    {
      term: "Crust",
      definition: "Earth's thin outermost layer, 5-70 km thick.",
    },
    {
      term: "Mantle",
      definition: "Thick layer between crust and core, ~2900 km thick.",
    },
    {
      term: "Core",
      definition:
        "Central layer, divided into outer (liquid) and inner (solid).",
    },
    {
      term: "Lithosphere",
      definition: "Rigid outer layer: crust + upper mantle.",
    },
    {
      term: "Asthenosphere",
      definition: "Partially molten layer below lithosphere.",
    },
    {
      term: "Seismic waves",
      definition: "Waves from earthquakes used to study Earth's interior.",
    },
    {
      term: "P-waves",
      definition: "Primary waves that travel through solids and liquids.",
    },
    {
      term: "S-waves",
      definition: "Secondary waves that travel only through solids.",
    },
  ],
  concepts: [
    {
      id: "ess9-u4-interior",
      title: "Earth's internal layers",
      skill: "Describe the structure and properties of Earth's layers.",
      lesson: {
        sections: [
          {
            heading: "Earth's layers",
            body: "Earth has distinct layers based on composition and physical state:\n\n- **Crust**: thin, solid outer layer. Oceanic crust ~7 km, continental ~35-70 km.\n- **Mantle**: thickest layer (~2900 km). Solid but can flow slowly (plastic).\n- **Outer core**: liquid iron-nickel, ~2200 km thick. Generates magnetic field.\n- **Inner core**: solid iron-nickel, ~1200 km radius. Extremely hot and pressurized.",
          },
          {
            heading: "Lithosphere and asthenosphere",
            body: "The **lithosphere** (crust + upper mantle) is rigid and broken into plates. The **asthenosphere** below is partially molten and allows plates to move. This is the basis of plate tectonics.",
          },
        ],
        keyFormulas: [
          { name: "Crust", statement: "5-70 km thick" },
          { name: "Mantle", statement: "~2900 km thick" },
          { name: "Core", statement: "Outer liquid, inner solid" },
        ],
        workedExample: {
          problem: "Which layer is liquid?",
          solution:
            "Outer core is liquid iron-nickel. Inner core is solid due to extreme pressure.",
        },
      },
      questions: [
        {
          id: "ess9-u4-interior-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which layer of Earth is liquid?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Crust" },
              { id: "b", text: "Mantle" },
              { id: "c", text: "Outer core" },
              { id: "d", text: "Inner core" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Outer core",
                statement: "Liquid iron-nickel.",
              },
            ],
            steps: [
              { reasoning: "Outer core is liquid.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Outer core",
            commonErrors: ["Inner core."],
            examinerNote: "B1 for (c).",
          },
        },
        {
          id: "ess9-u4-interior-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What's the difference between lithosphere and asthenosphere?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Lithosphere/asthenosphere",
                statement: "Rigid vs partially molten.",
              },
            ],
            steps: [
              {
                reasoning: "Lithosphere: rigid, crust + upper mantle.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Asthenosphere: partially molten, allows plate movement.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Lithosphere rigid; asthenosphere partially molten.",
            commonErrors: ["Same thing."],
            examinerNote: "R1, A1.",
          },
        },
        {
          id: "ess9-u4-interior-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why is the inner core solid despite being hottest?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Inner core",
                statement: "Extreme pressure keeps it solid.",
              },
            ],
            steps: [
              {
                reasoning: "Inner core extremely hot.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Extreme pressure prevents melting.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Pressure > melting point effect.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Answer: pressure keeps solid.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Extreme pressure keeps inner core solid.",
            commonErrors: ["Temperature only."],
            examinerNote: "R3, A1.",
          },
        },
        {
          id: "ess9-u4-interior-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Describe Earth's layers from surface to center.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Layers",
                statement: "Crust → mantle → outer core → inner core.",
              },
            ],
            steps: [
              {
                reasoning: "Crust: thin, solid, 5-70 km.",
                marks: 2,
                markCode: "B",
              },
              {
                reasoning: "Mantle: thick, ~2900 km, solid but flows.",
                marks: 2,
                markCode: "B",
              },
              {
                reasoning: "Outer core: liquid iron-nickel, ~2200 km.",
                marks: 2,
                markCode: "B",
              },
              {
                reasoning: "Inner core: solid iron-nickel, ~1200 km radius.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer:
              "Crust → mantle → outer core (liquid) → inner core (solid).",
            commonErrors: ["Wrong order."],
            examinerNote: "B2 for each layer description.",
          },
        },
      ],
    },
    {
      id: "ess9-u4-seismic",
      title: "Seismic waves and Earth's interior",
      skill: "Explain how seismic waves reveal Earth's internal structure.",
      lesson: {
        sections: [
          {
            heading: "Seismic waves",
            body: "Earthquakes produce waves that travel through Earth:\n\n- **P-waves** (primary): compressional, travel through solids AND liquids. Fastest.\n- **S-waves** (secondary): shear, travel ONLY through solids. Slower.\n- **Surface waves**: travel along surface, most destructive.",
          },
          {
            heading: "What waves reveal",
            body: "S-waves cannot pass through liquid → outer core must be liquid.\nP-waves slow down and bend at boundaries → reveals layer interfaces.\nSeismic shadow zones → confirms liquid outer core.",
          },
        ],
        keyFormulas: [
          { name: "P-waves", statement: "Through solids and liquids" },
          { name: "S-waves", statement: "Solids only" },
          { name: "Surface waves", statement: "Along surface" },
        ],
        workedExample: {
          problem: "Why can't S-waves pass through outer core?",
          solution: "Outer core is liquid; S-waves need solid medium.",
        },
      },
      questions: [
        {
          id: "ess9-u4-seismic-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which seismic wave travels only through solids?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "P-waves" },
              { id: "b", text: "S-waves" },
              { id: "c", text: "Surface waves" },
              { id: "d", text: "All of them" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "S-waves", statement: "Solids only." },
            ],
            steps: [
              {
                reasoning: "S-waves need solid medium.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** S-waves",
            commonErrors: ["P-waves."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "ess9-u4-seismic-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "How do seismic waves reveal Earth's interior?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Seismic waves",
                statement: "Wave behavior reveals layers.",
              },
            ],
            steps: [
              {
                reasoning: "S-waves blocked by liquid → outer core liquid.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "P-waves bend at boundaries → reveals interfaces.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Wave behavior reveals layer boundaries and states.",
            commonErrors: ["Direct observation."],
            examinerNote: "R1, A1.",
          },
        },
        {
          id: "ess9-u4-seismic-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "What is a seismic shadow zone? What does it reveal?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Shadow zone",
                statement: "Area where S-waves don't arrive.",
              },
            ],
            steps: [
              {
                reasoning: "S-waves blocked by liquid outer core.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Creates shadow zone on opposite side.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Reveals outer core is liquid.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Answer: liquid outer core evidence.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Shadow zone proves outer core is liquid.",
            commonErrors: ["No shadow zone."],
            examinerNote: "R3, A1.",
          },
        },
        {
          id: "ess9-u4-seismic-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Compare P-waves and S-waves.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "P-waves",
                statement: "Compressional, faster, through all media.",
              },
              {
                kind: "property",
                name: "S-waves",
                statement: "Shear, slower, solids only.",
              },
            ],
            steps: [
              {
                reasoning:
                  "P-waves: compressional, ~6 km/s, through solids+liquids.",
                marks: 2,
                markCode: "B",
              },
              {
                reasoning: "S-waves: shear, ~3.5 km/s, solids only.",
                marks: 2,
                markCode: "B",
              },
              {
                reasoning: "P-waves arrive first (primary).",
                marks: 2,
                markCode: "B",
              },
              {
                reasoning: "S-waves more destructive at surface.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer:
              "P: compressional, fast, all media; S: shear, slow, solids only.",
            commonErrors: ["Same properties."],
            examinerNote: "B2 for each comparison.",
          },
        },
      ],
    },
    {
      id: "ess9-u4-heat",
      title: "Heat transfer in Earth's interior",
      skill: "Explain how heat moves through Earth's interior.",
      lesson: {
        sections: [
          {
            heading: "Heat transfer mechanisms",
            body: "Heat moves through Earth's interior by:\n\n- **Conduction**: direct contact (slow in mantle).\n- **Convection**: hot material rises, cold sinks (main mechanism in mantle).\n- **Radiation**: electromagnetic waves (minor role).",
          },
          {
            heading: "Mantle convection",
            body: "Radioactive decay in core/mantle generates heat.\nHot mantle material rises → cools → sinks → convection cells.\nThis drives plate tectonics.",
          },
        ],
        keyFormulas: [
          { name: "Conduction", statement: "Direct contact" },
          { name: "Convection", statement: "Fluid movement" },
          { name: "Radiation", statement: "EM waves" },
        ],
        workedExample: {
          problem: "What drives mantle convection?",
          solution:
            "Radioactive decay heat → temperature differences → convection.",
        },
      },
      questions: [
        {
          id: "ess9-u4-heat-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the main heat transfer mechanism in Earth's mantle?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Conduction" },
              { id: "b", text: "Convection" },
              { id: "c", text: "Radiation" },
              { id: "d", text: "All equally" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Mantle convection",
                statement: "Convection dominates.",
              },
            ],
            steps: [{ reasoning: "Mantle convects.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Convection",
            commonErrors: ["Conduction."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "ess9-u4-heat-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What drives mantle convection?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Mantle convection",
                statement: "Radioactive decay heat.",
              },
            ],
            steps: [
              {
                reasoning: "Radioactive decay generates heat.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Heat → convection → plate movement.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Radioactive decay heat drives convection.",
            commonErrors: ["Sun's heat."],
            examinerNote: "R1, A1.",
          },
        },
        {
          id: "ess9-u4-heat-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How does mantle convection drive plate tectonics?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Convection",
                statement: "Convection cells move plates.",
              },
            ],
            steps: [
              {
                reasoning: "Hot mantle rises at ridges.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Cold mantle sinks at trenches.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Drag on lithosphere → plate movement.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Answer: convection drives plates.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Convection cells move lithospheric plates.",
            commonErrors: ["Random movement."],
            examinerNote: "R3, A1.",
          },
        },
        {
          id: "ess9-u4-heat-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Explain the three heat transfer mechanisms in Earth's interior.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Conduction",
                statement: "Direct contact transfer.",
              },
              {
                kind: "property",
                name: "Convection",
                statement: "Fluid movement transfer.",
              },
              {
                kind: "property",
                name: "Radiation",
                statement: "EM wave transfer.",
              },
            ],
            steps: [
              {
                reasoning: "Conduction: direct contact, slow in mantle.",
                marks: 2,
                markCode: "B",
              },
              {
                reasoning: "Convection: hot rises, cold sinks, main mechanism.",
                marks: 3,
                markCode: "B",
              },
              {
                reasoning: "Radiation: EM waves, minor role.",
                marks: 2,
                markCode: "B",
              },
              {
                reasoning: "Convection dominates mantle heat transfer.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Conduction (slow), convection (main), radiation (minor).",
            commonErrors: ["Wrong mechanisms."],
            examinerNote: "B2 for each mechanism + B1 for dominance.",
          },
        },
      ],
    },
  ],
};
