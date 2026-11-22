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
              { id: "a", text: "Conservative" },
              { id: "b", text: "Constructive" },
              { id: "c", text: "Collision" },
              { id: "d", text: "Destructive" },
            ],
            correctChoiceId: "b",
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
        { id: "oleg-u3-pb-q5", difficulty: "foundation", totalMarks: 1,
          stem: "At a destructive boundary, the typical process is...",
          response: { type: "mcq", choices: [ { id: "a", text: "plates slide sideways only" }, { id: "b", text: "one plate is subducted beneath another" }, { id: "c", text: "new crust forms at a ridge" }, { id: "d", text: "plates move apart" } ], correctChoiceId: "b" },
          markscheme: { principles: [ { kind: "definition", name: "Destructive boundary", statement: "Convergent boundary with subduction." } ], steps: [ { reasoning: "Destructive boundaries involve subduction.", marks: 1, markCode: "AO1" } ], finalAnswer: "**(a)** one plate is subducted beneath another", commonErrors: ["Confusing with constructive boundary."] } },
        { id: "oleg-u3-pb-q6", difficulty: "core", totalMarks: 2,
          stem: "An earthquake has magnitude 7.2 and another has magnitude 5.8. Calculate the difference in magnitude.",
          response: { type: "numeric", parts: [ { label: "Difference", answer: 1.4 } ] },
          markscheme: { principles: [ { kind: "formula", name: "Magnitude difference", statement: "Subtract the two magnitudes." } ], steps: [ { reasoning: "7.2 - 5.8 = 1.4.", marks: 2, markCode: "AO1" } ], finalAnswer: "1.4", commonErrors: ["Adding instead of subtracting."] } },
        { id: "oleg-u3-pb-q7", difficulty: "core", totalMarks: 1,
          stem: "A deep ocean trench is most likely to form at which boundary?",
          response: { type: "mcq", choices: [ { id: "a", text: "Conservative" }, { id: "b", text: "Destructive" }, { id: "c", text: "Constructive" }, { id: "d", text: "None" } ], correctChoiceId: "b" },
          markscheme: { principles: [ { kind: "property", name: "Ocean trenches", statement: "Subduction creates deep trenches." } ], steps: [ { reasoning: "Trenches form where plates subduct.", marks: 1, markCode: "AO1" } ], finalAnswer: "**(a)** Destructive", commonErrors: ["Choosing constructive boundary."] } },
        { id: "oleg-u3-pb-q8", difficulty: "foundation", totalMarks: 2,
          stem: "The focus of an earthquake is 12 km below the surface and the epicentre is directly above it. Calculate the depth of the focus.",
          response: { type: "numeric", parts: [ { label: "Depth", answer: 12, unit: "km" } ] },
          markscheme: { principles: [ { kind: "definition", name: "Focus", statement: "Focus depth is measured vertically below the surface." } ], steps: [ { reasoning: "Depth is given directly below surface: 12 km.", marks: 2, markCode: "AO1" } ], finalAnswer: "12 km", commonErrors: ["Confusing focus depth with epicentre distance."] } },
        { id: "oleg-u3-pb-q9", difficulty: "core", totalMarks: 4,
          stem: "Describe the three main types of plate boundary and one hazard found at each.",
          response: { type: "open" },
          markscheme: { principles: [ { kind: "definition", name: "Boundary types", statement: "Movement determines hazard type." } ], steps: [ { reasoning: "Name destructive, constructive and conservative boundaries.", marks: 1, markCode: "AO1" }, { reasoning: "Give the movement for each.", marks: 1, markCode: "AO1" }, { reasoning: "Link each to a hazard/landform.", marks: 1, markCode: "AO2" }, { reasoning: "Conclude clearly.", marks: 1, markCode: "AO3" } ], finalAnswer: "Destructive=subduction/volcanoes, constructive=ridges/volcanoes, conservative=shallow earthquakes.", commonErrors: ["Only naming boundaries without hazards."] } },
        { id: "oleg-u3-pb-q10", difficulty: "core", totalMarks: 1,
          stem: "Shield volcanoes are associated with...",
          response: { type: "mcq", choices: [ { id: "a", text: "sticky lava at destructive boundaries" }, { id: "b", text: "runny lava at constructive boundaries" }, { id: "c", text: "no plate boundaries" }, { id: "d", text: "earthquakes only" } ], correctChoiceId: "b" },
          markscheme: { principles: [ { kind: "property", name: "Shield volcano", statement: "Runny basaltic lava builds gentle shield volcanoes." } ], steps: [ { reasoning: "Runny lava forms gentle shield volcanoes.", marks: 1, markCode: "AO1" } ], finalAnswer: "**(a)** runny lava at constructive boundaries", commonErrors: ["Confusing with composite volcanoes."] } },
        { id: "oleg-u3-pb-q11", difficulty: "core", totalMarks: 2,
          stem: "A class records 8 explosive and 2 gentle eruptions. Calculate the percentage that are explosive.",
          response: { type: "numeric", parts: [ { label: "Percentage", answer: 80, unit: "%" } ] },
          markscheme: { principles: [ { kind: "formula", name: "Percentage", statement: "Part/whole x 100." } ], steps: [ { reasoning: "8 / (8 + 2) x 100 = 80%.", marks: 2, markCode: "AO1" } ], finalAnswer: "80 %", commonErrors: ["Dividing by wrong total."] } },
        { id: "oleg-u3-pb-q12", difficulty: "challenge", totalMarks: 1,
          stem: "Why is the 'Ring of Fire' rich in earthquakes and volcanoes?",
          response: { type: "mcq", choices: [ { id: "a", text: "It has no plates" }, { id: "b", text: "It is a conservative boundary only" }, { id: "c", text: "It follows destructive plate boundaries around the Pacific" }, { id: "d", text: "It is at the Equator" } ], correctChoiceId: "c" },
          markscheme: { principles: [ { kind: "principle", name: "Ring of Fire", statement: "Destructive boundaries cause most hazards." } ], steps: [ { reasoning: "The Ring of Fire follows subduction zones.", marks: 1, markCode: "AO1" } ], finalAnswer: "**(a)** It follows destructive plate boundaries around the Pacific", commonErrors: ["Vague location-based answer."] } },
        { id: "oleg-u3-pb-q13", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why earthquakes occur at conservative plate boundaries.",
          response: { type: "open" },
          markscheme: { principles: [ { kind: "principle", name: "Conservative boundary", statement: "Friction and sudden slip cause earthquakes." } ], steps: [ { reasoning: "State that plates slide past each other.", marks: 1, markCode: "AO1" }, { reasoning: "Explain that friction stores energy.", marks: 1, markCode: "AO1" }, { reasoning: "Explain sudden release as seismic waves causes shallow quakes.", marks: 1, markCode: "AO2" }, { reasoning: "Give an example such as San Andreas.", marks: 1, markCode: "AO3" } ], finalAnswer: "Plates slide past each other; friction builds then releases suddenly, producing shallow earthquakes.", commonErrors: ["Saying plates collide."] } },
        { id: "oleg-u3-pb-q14", difficulty: "core", totalMarks: 1,
          stem: "The Mercalli scale measures...",
          response: { type: "mcq", choices: [ { id: "a", text: "earthquake intensity/effects" }, { id: "b", text: "volcano height" }, { id: "c", text: "population density" }, { id: "d", text: "wind speed" } ], correctChoiceId: "a" },
          markscheme: { principles: [ { kind: "definition", name: "Mercalli scale", statement: "Measures observed intensity/effects." } ], steps: [ { reasoning: "Mercalli measures effects, not energy.", marks: 1, markCode: "AO1" } ], finalAnswer: "**(a)** earthquake intensity/effects", commonErrors: ["Confusing with magnitude scale."] } },
        { id: "oleg-u3-pb-q15", difficulty: "foundation", totalMarks: 2,
          stem: "A plate moves 5 cm per year. Calculate the distance moved in 200 000 years, in km.",
          response: { type: "numeric", parts: [ { label: "Distance", answer: 10, unit: "km" } ] },
          markscheme: { principles: [ { kind: "formula", name: "Distance = speed x time", statement: "Convert units carefully." } ], steps: [ { reasoning: "5 x 200 000 = 1 000 000 cm = 10 km.", marks: 2, markCode: "AO1" } ], finalAnswer: "10 km", commonErrors: ["Unit conversion errors."] } },
        { id: "oleg-u3-pb-q16", difficulty: "core", totalMarks: 1,
          stem: "At a constructive boundary, new crust is formed mainly because...",
          response: { type: "mcq", choices: [ { id: "a", text: "sediment is compressed only" }, { id: "b", text: "plates collide" }, { id: "c", text: "one plate sinks" }, { id: "d", text: "magma rises as plates move apart" } ], correctChoiceId: "d" },
          markscheme: { principles: [ { kind: "principle", name: "Constructive boundary", statement: "Divergence allows magma to rise and form crust." } ], steps: [ { reasoning: "Plates apart let magma rise to form new crust.", marks: 1, markCode: "AO1" } ], finalAnswer: "**(a)** magma rises as plates move apart", commonErrors: ["Confusing with subduction."] } },
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
              { id: "b", text: "Anemometer" },
              { id: "c", text: "Thermometer" },
              { id: "d", text: "Barometer" },
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
        { id: "oleg-u3-rs-q5", difficulty: "foundation", totalMarks: 1,
          stem: "GPS is used in hazard monitoring mainly to...",
          response: { type: "mcq", choices: [ { id: "a", text: "measure temperature" }, { id: "b", text: "record wind speed" }, { id: "c", text: "track small movements of the ground or plates" }, { id: "d", text: "predict rainfall" } ], correctChoiceId: "c" },
          markscheme: { principles: [ { kind: "definition", name: "Monitoring", statement: "GPS detects ground/plate movement." } ], steps: [ { reasoning: "GPS tracks deformation and plate movement.", marks: 1, markCode: "AO1" } ], finalAnswer: "**(a)** track small movements of the ground or plates", commonErrors: ["Confusing with weather instruments."] } },
        { id: "oleg-u3-rs-q6", difficulty: "core", totalMarks: 2,
          stem: "A rescue team travels 120 km to an earthquake zone at 60 km/h. Calculate the travel time in hours.",
          response: { type: "numeric", parts: [ { label: "Time", answer: 2, unit: "hours" } ] },
          markscheme: { principles: [ { kind: "formula", name: "Time = distance/speed", statement: "Use consistent units." } ], steps: [ { reasoning: "120 / 60 = 2 hours.", marks: 2, markCode: "AO1" } ], finalAnswer: "2 hours", commonErrors: ["Dividing speed by distance."] } },
        { id: "oleg-u3-rs-q7", difficulty: "core", totalMarks: 1,
          stem: "Which building feature improves earthquake resistance?",
          response: { type: "mcq", choices: [ { id: "a", text: "flexible frame or shock absorbers" }, { id: "b", text: "no foundations" }, { id: "c", text: "very heavy unreinforced walls" }, { id: "d", text: "tall rigid tower only" } ], correctChoiceId: "a" },
          markscheme: { principles: [ { kind: "property", name: "Earthquake-proofing", statement: "Flexible design absorbs seismic energy." } ], steps: [ { reasoning: "Flexible structures and absorbers reduce damage.", marks: 1, markCode: "AO1" } ], finalAnswer: "**(a)** flexible frame or shock absorbers", commonErrors: ["Choosing rigid brittle design."] } },
        { id: "oleg-u3-rs-q8", difficulty: "core", totalMarks: 2,
          stem: "A city inspects 800 buildings after an earthquake and finds 120 unsafe. Calculate the percentage found unsafe.",
          response: { type: "numeric", parts: [ { label: "Percentage", answer: 15, unit: "%" } ] },
          markscheme: { principles: [ { kind: "formula", name: "Percentage", statement: "Part/whole x 100." } ], steps: [ { reasoning: "120 / 800 x 100 = 15%.", marks: 2, markCode: "AO1" } ], finalAnswer: "15 %", commonErrors: ["Using wrong denominator."] } },
        { id: "oleg-u3-rs-q9", difficulty: "core", totalMarks: 4,
          stem: "Explain why exact prediction of earthquakes is difficult.",
          response: { type: "open" },
          markscheme: { principles: [ { kind: "principle", name: "Prediction limits", statement: "Monitoring gives warning, not precise timing." } ], steps: [ { reasoning: "State that seismometers detect tremors but not future timing.", marks: 1, markCode: "AO1" }, { reasoning: "Mention stress build-up underground is hard to measure.", marks: 1, markCode: "AO1" }, { reasoning: "State that risk zones can be forecast but not exact events.", marks: 1, markCode: "AO2" }, { reasoning: "Conclude clearly.", marks: 1, markCode: "AO3" } ], finalAnswer: "Monitoring detects movement but cannot reliably predict exact timing, only risk zones.", commonErrors: ["Claiming exact prediction is possible."] } },
        { id: "oleg-u3-rs-q10", difficulty: "core", totalMarks: 1,
          stem: "Land-use planning reduces earthquake risk mainly by...",
          response: { type: "mcq", choices: [ { id: "a", text: "increasing population density" }, { id: "b", text: "ignoring soil type" }, { id: "c", text: "building taller everywhere" }, { id: "d", text: "avoiding building in hazard-prone zones" } ], correctChoiceId: "d" },
          markscheme: { principles: [ { kind: "principle", name: "Land-use planning", statement: "Avoiding high-risk areas reduces exposure." } ], steps: [ { reasoning: "Keeping people away from hazard zones reduces risk.", marks: 1, markCode: "AO1" } ], finalAnswer: "**(a)** avoiding building in hazard-prone zones", commonErrors: ["Thinking height alone is protection."] } },
        { id: "oleg-u3-rs-q11", difficulty: "foundation", totalMarks: 2,
          stem: "In a drill, 450 of 600 students take part. Calculate the participation percentage.",
          response: { type: "numeric", parts: [ { label: "Participation", answer: 75, unit: "%" } ] },
          markscheme: { principles: [ { kind: "formula", name: "Percentage", statement: "Part/whole x 100." } ], steps: [ { reasoning: "450 / 600 x 100 = 75%.", marks: 2, markCode: "AO1" } ], finalAnswer: "75 %", commonErrors: ["Forgetting to multiply by 100."] } },
        { id: "oleg-u3-rs-q12", difficulty: "challenge", totalMarks: 1,
          stem: "Why did Haiti 2010 suffer more damage than Japan 2011 despite similar hazards?",
          response: { type: "mcq", choices: [ { id: "a", text: "Weaker buildings, less preparedness and slower aid increased vulnerability" }, { id: "b", text: "Haiti had better insurance" }, { id: "c", text: "Japan had no earthquake" }, { id: "d", text: "The earthquake was larger only" } ], correctChoiceId: "a" },
          markscheme: { principles: [ { kind: "principle", name: "Vulnerability", statement: "Vulnerability depends on preparedness and wealth." } ], steps: [ { reasoning: "Haiti had weaker buildings and less aid capacity.", marks: 1, markCode: "AO1" } ], finalAnswer: "**(a)** Weaker buildings, less preparedness and slower aid increased vulnerability", commonErrors: ["Comparing only hazard magnitude."] } },
        { id: "oleg-u3-rs-q13", difficulty: "challenge", totalMarks: 4,
          stem: "Evaluate responses to tectonic hazards in LEDCs compared with MEDCs.",
          response: { type: "open" },
          markscheme: { principles: [ { kind: "principle", name: "Hazard responses", statement: "Wealth affects preparedness and relief." } ], steps: [ { reasoning: "State that LEDCs have weaker buildings and less insurance.", marks: 1, markCode: "AO1" }, { reasoning: "State that aid may be slower and preparedness lower.", marks: 1, markCode: "AO1" }, { reasoning: "Explain why this raises vulnerability.", marks: 1, markCode: "AO2" }, { reasoning: "Reach a balanced judgement.", marks: 1, markCode: "AO3" } ], finalAnswer: "LEDCs suffer more because weaker buildings, less insurance and slower aid increase vulnerability.", commonErrors: ["Ignoring vulnerability."] } },
        { id: "oleg-u3-rs-q14", difficulty: "core", totalMarks: 1,
          stem: "Immediate relief after an earthquake includes...",
          response: { type: "mcq", choices: [ { id: "a", text: "building codes" }, { id: "b", text: "long-term reconstruction only" }, { id: "c", text: "search and rescue and medical aid" }, { id: "d", text: "insurance policies" } ], correctChoiceId: "c" },
          markscheme: { principles: [ { kind: "definition", name: "Relief", statement: "Immediate aid saves lives first." } ], steps: [ { reasoning: "Immediate relief is rescue and medical care.", marks: 1, markCode: "AO1" } ], finalAnswer: "**(a)** search and rescue and medical aid", commonErrors: ["Confusing relief with long-term planning."] } },
        { id: "oleg-u3-rs-q15", difficulty: "core", totalMarks: 2,
          stem: "A relief budget of 80 million dollars is split equally between 4 regions. Calculate the budget per region.",
          response: { type: "numeric", parts: [ { label: "Budget", answer: 20, unit: "million dollars" } ] },
          markscheme: { principles: [ { kind: "formula", name: "Per unit", statement: "Total / number of groups." } ], steps: [ { reasoning: "80 / 4 = 20 million dollars.", marks: 2, markCode: "AO1" } ], finalAnswer: "20 million dollars", commonErrors: ["Multiplying instead of dividing."] } },
        { id: "oleg-u3-rs-q16", difficulty: "foundation", totalMarks: 1,
          stem: "A tiltmeter is used to monitor...",
          response: { type: "mcq", choices: [ { id: "a", text: "ground deformation before an eruption" }, { id: "b", text: "rainfall" }, { id: "c", text: "population" }, { id: "d", text: "wind speed" } ], correctChoiceId: "a" },
          markscheme: { principles: [ { kind: "definition", name: "Tiltmeter", statement: "Measures small changes in ground tilt/deformation." } ], steps: [ { reasoning: "Tiltmeters detect ground deformation.", marks: 1, markCode: "AO1" } ], finalAnswer: "**(a)** ground deformation before an eruption", commonErrors: ["Confusing with seismometer."] } },
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
