import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "oleg-u3-lesson-3-1",
  code: "3-1",
  title: "Tectonic Hazards",
  goal: "I CAN explain tectonic plate boundaries and evaluate responses to earthquakes and volcanic eruptions.",
  standards: ["2217: Tectonic hazards"],
  vocabulary: [
    {
      term: "Tectonic plate",
      definition: "Large slab of Earth's lithosphere that moves slowly.",
    },
    {
      term: "Destructive boundary",
      definition: "Where plates collide and one is subducted.",
    },
    {
      term: "Constructive boundary",
      definition: "Where plates move apart and magma rises.",
    },
    {
      term: "Conservative boundary",
      definition: "Where plates slide past each other.",
    },
    {
      term: "Focus",
      definition: "Point underground where an earthquake originates.",
    },
    {
      term: "Epicentre",
      definition: "Point on Earth's surface directly above the focus.",
    },
  ],
  concepts: [
    {
      id: "oleg-u3-plate-boundaries",
      title: "Plate boundaries and hazard formation",
      skill: "Describe plate boundary types and how they create hazards.",
      lesson: {
        sections: [
          {
            heading: "Boundary types",
            body: "Destructive (convergent): oceanic plate subducts under continental — earthquakes, volcanoes, trenches, fold mountains (Andes). Constructive (divergent): plates pull apart — mid-ocean ridges, shield volcanoes, new crust. Conservative (transform): plates slide past — shallow earthquakes (San Andreas).",
          },
          {
            heading: "Earthquakes and volcanoes",
            body: "Earthquake: sudden release of stored energy at plate boundaries; measured by Richter/Moment magnitude and Mercalli intensity. Volcanic eruption: magma reaches surface — types: shield (runny lava, Hawaii), composite/strato (sticky lava, explosive, e.g. Fuji, Vesuvius).",
          },
          {
            heading: "Distribution",
            body: "'Ring of Fire' around Pacific — most earthquakes/volcanoes at destructive boundaries. Mid-Atlantic Ridge — constructive. Earthquake belts along conservative boundaries.",
          },
        ],
        keyFormulas: [
          {
            name: "Tectonics",
            statement:
              "Destructive=quakes+volcanoes; Constructive=ridges; Conservative=shallow quakes.",
          },
        ],
        workedExample: {
          problem: "Why do earthquakes happen at conservative boundaries?",
          solution:
            "Plates slide past each other; friction builds then releases suddenly as seismic waves.",
        },
      },
      questions: [
        {
          id: "oleg-u3-pb-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "At which boundary do plates move apart?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Constructive" },
              { id: "b", text: "Destructive" },
              { id: "c", text: "Conservative" },
              { id: "d", text: "Collision" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Constructive",
                statement: "Plates move apart.",
              },
            ],
            steps: [
              { reasoning: "Constructive = apart.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Constructive",
            commonErrors: ["Confusing with destructive."],
          },
        },
        {
          id: "oleg-u3-pb-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the difference between focus and epicentre?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Focus/epicentre",
                statement: "Underground origin vs surface point.",
              },
            ],
            steps: [
              { reasoning: "Focus underground.", marks: 1, markCode: "AO1" },
              {
                reasoning: "Epicentre on surface above.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Focus is underground origin; epicentre is surface point above it.",
            commonErrors: ["Swapping them."],
          },
        },
        {
          id: "oleg-u3-pb-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the 'Ring of Fire'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Ring of Fire",
                statement: "Destructive boundaries around Pacific.",
              },
            ],
            steps: [
              {
                reasoning: "Destructive boundaries.",
                marks: 1,
                markCode: "AO1",
              },
              { reasoning: "Subduction zones.", marks: 1, markCode: "AO1" },
              {
                reasoning: "Most quakes/volcanoes occur there.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Ring of destructive boundaries around Pacific where subduction causes most quakes and volcanoes.",
            commonErrors: ["Vague answer."],
          },
        },
        {
          id: "oleg-u3-pb-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Tectonic hazards.",
          parts: [
            { label: "a", prompt: "Three boundary types?", marks: 3 },
            { label: "b", prompt: "Focus vs epicentre?", marks: 2 },
            { label: "c", prompt: "Shield vs composite volcano?", marks: 2 },
            { label: "d", prompt: "Ring of Fire?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Tectonics",
                statement: "Boundaries+terms+volcanoes+distribution.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Any three types.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Correct descriptions.",
                marks: 1,
                markCode: "AO1",
              },
              { part: "a", reasoning: "Clear.", marks: 1, markCode: "AO2" },
              {
                part: "b",
                reasoning: "Focus underground.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Epicentre surface.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Runny vs sticky lava.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Gentle vs explosive.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Destructive boundaries.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Most hazards occur there.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "(a) boundaries (b) focus/epicentre (c) volcano types (d) Ring of Fire",
          },
        },
      ],
    },
    {
      id: "oleg-u3-responses",
      title: "Responses to Tectonic Hazards",
      skill:
        "Evaluate prediction, protection and relief responses to earthquakes and eruptions.",
      lesson: {
        sections: [
          {
            heading: "Prediction and monitoring",
            body: "Seismometers detect tremors; GPS tracks plate movement; tiltmeters measure ground deformation; gas monitoring predicts eruptions. Earthquake prediction remains unreliable — can forecast risk zones but not exact timing.",
          },
          {
            heading: "Protection and planning",
            body: "Building codes (flexible structures, shock absorbers in Japan), land-use planning (avoid hazard zones), education/drills, insurance. Poor countries lack resources for such measures.",
          },
          {
            heading: "Relief",
            body: "Immediate: search and rescue, medical aid, shelter. Long-term: reconstruction, livelihood support. LEDCs suffer more — weaker buildings, less insurance, slower aid. Case study contrast: Japan (well prepared) vs Haiti 2010 (devastated).",
          },
        ],
        keyFormulas: [
          {
            name: "Hazard responses",
            statement:
              "Predict=monitoring; Protect=building codes; Relief=aid; LEDC impact worse.",
          },
        ],
        workedExample: {
          problem:
            "Why was Haiti 2010 more devastating than Japan's 2011 earthquake?",
          solution:
            "Weak buildings, no insurance, limited preparedness and slow aid — vulnerability matters as much as hazard magnitude.",
        },
      },
      questions: [
        {
          id: "oleg-u3-rs-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which device detects earthquakes?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Seismometer" },
              { id: "b", text: "Barometer" },
              { id: "c", text: "Thermometer" },
              { id: "d", text: "Anemometer" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Seismometer",
                statement: "Detects seismic waves.",
              },
            ],
            steps: [
              { reasoning: "Seismometer = quakes.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Seismometer",
            commonErrors: ["Weather instrument."],
          },
        },
        {
          id: "oleg-u3-rs-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two ways buildings can be made earthquake-resistant.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Earthquake-proofing",
                statement: "Flexible design, shock absorbers.",
              },
            ],
            steps: [
              { reasoning: "Any two methods.", marks: 1, markCode: "AO1" },
              { reasoning: "Correct.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer:
              "Flexible structures, shock absorbers, reinforced materials, land-use planning.",
            commonErrors: ["Only one method."],
          },
        },
        {
          id: "oleg-u3-rs-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why do LEDCs suffer more from tectonic hazards?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Vulnerability",
                statement: "Weaker buildings, less preparedness.",
              },
            ],
            steps: [
              {
                reasoning: "Poorer building quality.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Less insurance/resources.",
                marks: 1,
                markCode: "AO1",
              },
              { reasoning: "Slower aid response.", marks: 1, markCode: "AO2" },
              { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Weaker buildings, less preparedness and slower aid increase vulnerability.",
            commonErrors: ["Blaming the hazard only."],
          },
        },
        {
          id: "oleg-u3-rs-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Hazard responses.",
          parts: [
            { label: "a", prompt: "Prediction methods?", marks: 2 },
            { label: "b", prompt: "Protection methods?", marks: 3 },
            { label: "c", prompt: "Relief phases?", marks: 2 },
            { label: "d", prompt: "Why LEDCs suffer more?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Responses",
                statement: "Predict+protect+relief+vulnerability.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Seismometers/GPS.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Limits of prediction.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Building codes.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Land-use planning.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Education/drills.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Immediate vs long-term.",
                marks: 1,
                markCode: "AO1",
              },
              { part: "c", reasoning: "Examples.", marks: 1, markCode: "AO2" },
              {
                part: "d",
                reasoning: "Vulnerability factors.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Clear comparison.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "(a) prediction (b) protection (c) relief (d) LEDC impact",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "oleg-u3-3-1-notes",
      title: "Tectonic hazards — notes",
      summary:
        "Plate boundaries, earthquakes, volcanoes, prediction, protection, relief.",
      sections: [
        {
          heading: "Boundaries",
          body: "Destructive=quakes+volcanoes; constructive=ridges; conservative=shallow quakes. Ring of Fire.",
        },
        {
          heading: "Responses",
          body: "Monitoring→prediction limits; building codes/planning; relief immediate+long-term; LEDCs more vulnerable.",
        },
      ],
    },
  ],
};
