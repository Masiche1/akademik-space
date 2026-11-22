import type { Lesson } from "../../../types.ts";

export const lesson51: Lesson = {
  id: "ciealegeo-u5-lesson-5-1",
  code: "5-1",
  title: "River Processes, Landforms and Management",
  goal: "I CAN explain fluvial processes, identify river landforms and evaluate flood management strategies.",
  standards: [
    "Cambridge A Level Geography 9696",
    "Unit 5: physical geography in depth",
  ],
  vocabulary: [
    {
      term: "Hydraulic action",
      definition: "Force of water eroding bed/banks.",
    },
    { term: "Abrasion", definition: "Sediment grinding bedrock." },
    {
      term: "Attrition",
      definition: "Sediment particles colliding and rounding.",
    },
    { term: "Solution", definition: "Chemical dissolution of rock." },
    {
      term: "Lateral erosion",
      definition: "Sideways erosion widening valley.",
    },
    {
      term: "Vertical erosion",
      definition: "Downward erosion deepening channel.",
    },
  ],
  concepts: [
    {
      id: "ciealegeo-u5l1-c1-processes",
      title: "Fluvial processes",
      skill:
        "Explain erosion, transportation and deposition processes in river systems.",
      lesson: {
        sections: [
          {
            heading: "Erosion processes",
            body: "**Hydraulic action**: force of water removes material. **Abrasion**: sediment grinds bedrock. **Attrition**: particles collide, round, reduce in size. **Solution**: chemical dissolution (limestone, calcite). Erosion dominant in upper course where gradient steep, discharge variable.",
          },
          {
            heading: "Transportation and deposition",
            body: "**Transportation**: traction (large particles rolled), saltation (bouncing), suspension (fine particles), solution (dissolved). **Deposition**: when velocity falls below threshold — in estuaries, inside bends, floods. Load capacity determined by discharge and gradient.",
          },
        ],
        keyFormulas: [
          {
            name: "Load capacity",
            statement: "Discharge × velocity determines load",
          },
          { name: "Deposition", statement: "Velocity drops below threshold" },
          {
            name: "Erosion dominance",
            statement: "Upper course, steep gradient",
          },
        ],
        workedExample: {
          problem: "Why does a river deposit sediment at the mouth?",
          solution:
            "Velocity falls sharply entering sea — load exceeds capacity → deposition; finer particles travel further (sorting), forming deltas or estuaries.",
        },
      },
      questions: [
        {
          id: "ciealegeo-q-u5l1c1-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Hydraulic action refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sediment grinding rock" },
              { id: "b", text: "Force of water eroding bed/banks" },
              { id: "c", text: "Particle collision" },
              { id: "d", text: "Chemical dissolution" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Hydraulic action",
                statement: "Water force.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Water force",
            commonErrors: ["Confusing abrasion."],
          },
        },
        {
          id: "ciealegeo-q-u5l1c1-2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name two river transportation processes.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Transport",
                statement: "Traction, saltation, suspension, solution.",
              },
            ],
            steps: [
              { reasoning: "Two named.", marks: 1, markCode: "M" },
              { reasoning: "Each defined.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "e.g. traction (large particles rolled along bed) and suspension (fine particles carried in water column).",
            commonErrors: ["Erosion processes."],
          },
        },
        {
          id: "ciealegeo-q-u5l1c1-3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why erosion dominates in the upper course but deposition in the lower course.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Course change",
                statement: "Gradient → velocity.",
              },
            ],
            steps: [
              { reasoning: "Upper course steep.", marks: 1, markCode: "M" },
              {
                reasoning: "Velocity high → erosion.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Lower course flat.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Upper: steep gradient, high velocity → erosion. Lower: gentle gradient, low velocity → deposition; velocity determines process dominance.",
            commonErrors: ["Reversed."],
          },
        },
        {
          id: "ciealegeo-q-u5l1c1-4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Distinguish vertical from lateral erosion and their landforms.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Erosion direction",
                statement: "Down vs sideways.",
              },
            ],
            steps: [
              { reasoning: "Vertical defined.", marks: 1, markCode: "M" },
              { reasoning: "Lateral defined.", marks: 1, markCode: "M" },
              { reasoning: "Landforms.", marks: 2, markCode: "A" },
            ],
            finalAnswer:
              "Vertical: downwards → V-shaped valleys, gorges, waterfalls. Lateral: sideways → meanders, floodplains, bluffs — dominant in middle/lower course.",
            commonErrors: ["Same landforms."],
          },
        },
        {
          id: "ciealegeo-q-u5l1c1-5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Analyse how discharge affects a river's capacity to erode and transport.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Discharge",
                statement: "Flow × velocity.",
              },
            ],
            steps: [
              { reasoning: "High discharge effect.", marks: 1, markCode: "M" },
              { reasoning: "Low discharge effect.", marks: 1, markCode: "M" },
              { reasoning: "Landform link.", marks: 1, markCode: "A" },
              { reasoning: "Weighs factors.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Higher discharge → higher velocity → greater erosion and load capacity → larger channels, more erosion features; low discharge → deposition dominates — flood events reshape channels dramatically.",
            commonErrors: ["No link."],
          },
        },
        {
          id: "ciealegeo-q-u5l1c1-6",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'attrition' in river processes?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Attrition",
                statement: "Particle collision.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Result.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Sediment particles collide with each other → round and reduce in size → smoother, smaller load carried further downstream.",
            commonErrors: ["Confusing abrasion."],
          },
        },
        {
          id: "ciealegeo-q-u5l1c1-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Solution erosion is most effective on:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sandstone" },
              { id: "b", text: "Limestone and soluble rocks" },
              { id: "c", text: "Granite" },
              { id: "d", text: "Basalt" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "fact", name: "Solution", statement: "Soluble rocks." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Limestone",
            commonErrors: ["Insoluble rocks."],
          },
        },
        {
          id: "ciealegeo-q-u5l1c1-8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two factors that increase a river's load capacity.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Load factors",
                statement: "Discharge, velocity, gradient.",
              },
            ],
            steps: [
              { reasoning: "Two valid factors.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 2, markCode: "A" },
            ],
            finalAnswer:
              "e.g. higher discharge (more water to carry) and steeper gradient (higher velocity) — also more turbulent flow.",
            commonErrors: ["Factors reducing load."],
          },
        },
        {
          id: "ciealegeo-q-u5l1c1-9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why do rivers sort their load?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Sorting",
                statement: "Size-based deposition.",
              },
            ],
            steps: [
              { reasoning: "Mechanism.", marks: 1, markCode: "M" },
              { reasoning: "Pattern.", marks: 1, markCode: "M" },
              { reasoning: "Landform.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Larger/heavier particles deposit first (need more energy), finer particles travel further — creates downstream fining and sorted deposits like deltas.",
            commonErrors: ["Random deposition."],
          },
        },
        {
          id: "ciealegeo-q-u5l1c1-10",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate the role of human activity in altering river processes.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Human impact",
                statement: "Channel modification.",
              },
            ],
            steps: [
              { reasoning: "Alterations.", marks: 1, markCode: "M" },
              { reasoning: "Consequences.", marks: 1, markCode: "M" },
              { reasoning: "Examples.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Dams, channelisation, urbanisation change discharge, sediment supply and velocity — reduce flooding locally but increase downstream erosion/sediment starvation; trade-offs complex.",
            commonErrors: ["No effect."],
          },
        },
        {
          id: "ciealegeo-q-u5l1c1-11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Traction is the transportation of sediment by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Dissolving in water" },
              { id: "b", text: "Bouncing through the water column" },
              { id: "c", text: "Floating permanently on the surface" },
              { id: "d", text: "Rolling or sliding along the river bed" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Traction",
                statement: "Large particles move along the bed.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Rolling along the bed",
            commonErrors: ["Confusing with saltation."],
          },
        },
        {
          id: "ciealegeo-q-u5l1c1-12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Deposition in a river channel is most likely when:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The channel gradient becomes steeper" },
              { id: "b", text: "Discharge reaches its maximum possible value" },
              { id: "c", text: "Sediment particles become smaller" },
              { id: "d", text: "Velocity falls below the threshold needed to carry the load" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Deposition",
                statement: "Load exceeds transport capacity.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Velocity falls below threshold",
            commonErrors: ["Reversing erosion and deposition."],
          },
        },
        {
          id: "ciealegeo-q-u5l1c1-13",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why deposition is concentrated on the inside of a meander bend.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Helicoid flow",
                statement: "Secondary currents redistribute velocity across the channel.",
              },
            ],
            steps: [
              { reasoning: "Flow is fastest on the outside of the bend.", marks: 1, markCode: "M" },
              {
                reasoning: "Velocity is slower on the inside, reducing transport capacity.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Sediment settles and builds a point bar.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Slower flow on the inside of the bend reduces capacity, so sediment is deposited as a point bar while the outside bank is eroded.",
            commonErrors: ["Ignoring secondary circulation."],
          },
        },
        {
          id: "ciealegeo-q-u5l1c1-14",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A gauging station records daily sediment loads of 12, 18, 25, 30 and 45 tonnes. (a) What is the mean daily load? (b) What is the median daily load?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 26, unit: "tonnes/day" },
              { label: "b", answer: 25, unit: "tonnes/day" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Sediment statistics",
                statement: "Mean = sum / count; median is the middle ordered value.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "(12 + 18 + 25 + 30 + 45) / 5 = 130 / 5 = 26 tonnes/day.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Ordered values are 12, 18, 25, 30, 45; middle value = 25 tonnes/day.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "a) 26 tonnes/day; b) 25 tonnes/day",
            commonErrors: ["Confusing mean with median."],
          },
        },
        {
          id: "ciealegeo-q-u5l1c1-15",
          difficulty: "core",
          totalMarks: 2,
          stem: "A river has discharge 25 m3/s and mean velocity 2 m/s. (a) Calculate the approximate cross-sectional area of the channel. (b) If discharge doubles while velocity remains 2 m/s, what is the new cross-sectional area?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 12.5, unit: "m2" },
              { label: "b", answer: 25, unit: "m2" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Channel geometry",
                statement: "Q = A v, so A = Q / v.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "A = Q / v = 25 / 2 = 12.5 m2.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "New discharge = 50 m3/s; A = 50 / 2 = 25 m2.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "a) 12.5 m2; b) 25 m2",
            commonErrors: ["Multiplying discharge by velocity."],
          },
        },
        {
          id: "ciealegeo-q-u5l1c1-16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Analyse how a prolonged flood can change a river's channel and sediment regime.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Flood disturbance",
                statement: "High discharge increases energy, erosion, transport and deposition.",
              },
            ],
            steps: [
              { reasoning: "Floodwater raises discharge and velocity.", marks: 1, markCode: "M" },
              {
                reasoning: "Greater energy erodes banks and bed, enlarging the channel.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Load capacity rises, moving coarse and fine sediment downstream.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "As flow recedes, sediment is deposited on floodplains and bars.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Floods increase erosion and transport during high flow, then deposit sediment as discharge falls, reshaping channel and floodplain.",
            commonErrors: ["Only describing deposition."],
          },
        },
      ],
    },
    {
      id: "ciealegeo-u5l1-c2-landforms",
      title: "River landforms and hydrographs",
      skill: "Identify fluvial landforms and interpret discharge hydrographs.",
      lesson: {
        sections: [
          {
            heading: "Erosional landforms",
            body: "**Waterfalls**: hard/soft rock differential erosion → plunge pool. **Gorges**: continued undercutting. **V-shaped valleys**: vertical erosion dominant. **Potholes**: abrasion in bedrock. **Interlocking spurs**: lateral erosion in upper course.",
          },
          {
            heading: "Depositional landforms and hydrographs",
            body: "**Meanders**: lateral erosion creates bends; **oxbow lakes**: neck cut-off. **Floodplains**: lateral migration + deposition. **Levees**: coarse sediment deposited near channel during floods. **Deltas**: deposition at mouth. **Hydrograph**: discharge vs time — steep = impermeable/urban, gentle = permeable/rural.",
          },
        ],
        keyFormulas: [
          { name: "Waterfall", statement: "Hard over soft rock" },
          { name: "Meander", statement: "Lateral erosion + deposition" },
          { name: "Hydrograph", statement: "Steep = fast response" },
        ],
        workedExample: {
          problem:
            "Why do urban areas have steeper hydrographs than rural areas?",
          solution:
            "Urban surfaces impermeable → less infiltration, faster overland flow → quicker, higher peak discharge; rural areas have vegetation/soil storage → slower, lower peak.",
        },
      },
      questions: [
        {
          id: "ciealegeo-q-u5l1c2-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A waterfall forms where:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Meander neck cut off" },
              { id: "b", text: "Hard rock overlies softer rock" },
              { id: "c", text: "River meets sea" },
              { id: "d", text: "Sediment deposits" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Waterfall",
                statement: "Differential erosion.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Hard over soft",
            commonErrors: ["Wrong landform."],
          },
        },
        {
          id: "ciealegeo-q-u5l1c2-2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is an 'oxbow lake'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Oxbow lake",
                statement: "Abandoned meander.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Formation.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Former meander loop cut off when river takes shortcut across neck — abandoned channel becomes crescent-shaped lake.",
            commonErrors: ["Confusing with meander."],
          },
        },
        {
          id: "ciealegeo-q-u5l1c2-3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how meanders form through erosion and deposition.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Meander formation",
                statement: "Helicoid flow.",
              },
            ],
            steps: [
              { reasoning: "Flow pattern.", marks: 1, markCode: "M" },
              { reasoning: "Erosion side.", marks: 1, markCode: "M" },
              { reasoning: "Deposition side.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Helicoid flow: faster current on outside of bend → erosion (cut bank); slower inside → deposition (point bar) → bend migrates laterally.",
            commonErrors: ["Random formation."],
          },
        },
        {
          id: "ciealegeo-q-u5l1c2-4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Interpret a discharge hydrograph: what makes the peak higher and earlier?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Hydrograph",
                statement: "Surface vs baseflow.",
              },
            ],
            steps: [
              { reasoning: "Steep factors.", marks: 1, markCode: "M" },
              { reasoning: "Urban example.", marks: 1, markCode: "M" },
              { reasoning: "Rural contrast.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Higher earlier peak = faster surface runoff — impermeable surfaces, steep slope, intense rain; lower delayed peak = infiltration, vegetation storage, gentle slope.",
            commonErrors: ["Can't interpret."],
          },
        },
        {
          id: "ciealegeo-q-u5l1c2-5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate 'hard' vs 'soft' flood management strategies.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Flood management",
                statement: "Structural vs non-structural.",
              },
            ],
            steps: [
              { reasoning: "Hard strategies.", marks: 1, markCode: "M" },
              { reasoning: "Soft strategies.", marks: 1, markCode: "M" },
              { reasoning: "Comparison.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Hard (embankments, dams): immediate protection but costly, may worsen downstream. Soft (floodplain zoning, warning, insurance): sustainable, cheaper long-term but less certain protection.",
            commonErrors: ["One type only."],
          },
        },
        {
          id: "ciealegeo-q-u5l1c2-6",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is a 'levee'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Levee",
                statement: "Natural embankment.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Formation.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Natural ridge of sediment deposited along river banks during floods — coarse material settles first near channel, building up banks over time.",
            commonErrors: ["Artificial only."],
          },
        },
        {
          id: "ciealegeo-q-u5l1c2-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Deltas form where:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "River meets sea/lake and deposits sediment" },
              { id: "b", text: "Meander migrates" },
              { id: "c", text: "River cuts through rock" },
              { id: "d", text: "Waterfall erodes" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Delta",
                statement: "Deposition at mouth.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Mouth deposition",
            commonErrors: ["Wrong landform."],
          },
        },
        {
          id: "ciealegeo-q-u5l1c2-8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two factors that make flood hydrographs 'flashy' vs 'subdued'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Hydrograph shape",
                statement: "Surface runoff factors.",
              },
            ],
            steps: [
              { reasoning: "Flashy factors.", marks: 1, markCode: "M" },
              { reasoning: "Subdued factors.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Flashy: impermeable surfaces, steep gradient, intense convectional rain, deforestation. Subdued: permeable soil, vegetation, flat terrain, gentle rain.",
            commonErrors: ["Same factors."],
          },
        },
        {
          id: "ciealegeo-q-u5l1c2-9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why do floodplains form alongside meandering rivers?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Floodplain",
                statement: "Lateral migration + deposition.",
              },
            ],
            steps: [
              { reasoning: "Mechanism.", marks: 1, markCode: "M" },
              { reasoning: "Sediment source.", marks: 1, markCode: "M" },
              { reasoning: "Result.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Meanders migrate laterally across valley floor; during floods, sediment spreads over valley → flat depositional surface built up over time.",
            commonErrors: ["Only vertical erosion."],
          },
        },
        {
          id: "ciealegeo-q-u5l1c2-10",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Analyse the relationship between river landforms and human settlement.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Settlement & rivers",
                statement: "Resources vs risk.",
              },
            ],
            steps: [
              { reasoning: "Benefits.", marks: 1, markCode: "M" },
              { reasoning: "Risks.", marks: 1, markCode: "M" },
              { reasoning: "Examples.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Rivers provide water, transport, fertile soil, power — but flood risk; settlements cluster on floodplains despite risk, requiring management; trade-off between resource and hazard.",
            commonErrors: ["One-sided."],
          },
        },
        {
          id: "ciealegeo-q-u5l1c2-11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "An oxbow lake forms when:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sediment deposits where a river meets the sea" },
              { id: "b", text: "A meander neck is cut off and the loop abandoned" },
              { id: "c", text: "A glacier retreats leaving a meltwater lake" },
              { id: "d", text: "A waterfall collapses into a plunge pool" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Oxbow lake",
                statement: "Cut-off meander.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Cut-off meander",
            commonErrors: ["Confusing with delta."],
          },
        },
        {
          id: "ciealegeo-q-u5l1c2-12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how a delta forms at a river mouth.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Delta formation",
                statement: "Velocity loss → deposition.",
              },
            ],
            steps: [
              { reasoning: "Velocity falls.", marks: 1, markCode: "M" },
              { reasoning: "Load exceeds capacity.", marks: 1, markCode: "M" },
              { reasoning: "Delta shape/types.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "River enters sea/lake → velocity drops sharply → sediment deposits; distributary channels split flow → fan-shaped delta (bird's foot, cuspate or arcuate depending on wave/tide energy).",
            commonErrors: ["Erosion at mouth."],
          },
        },
        {
          id: "ciealegeo-q-u5l1c2-13",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a 'gorge'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Gorge",
                statement: "Deep narrow valley.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Formation.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Deep, narrow steep-sided valley — formed by continued vertical/lateral erosion after waterfall retreat or river incision through resistant rock.",
            commonErrors: ["Confusing with V-valley."],
          },
        },
        {
          id: "ciealegeo-q-u5l1c2-14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how vegetation influences flood hydrographs.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Vegetation & runoff",
                statement: "Interception + infiltration.",
              },
            ],
            steps: [
              { reasoning: "Mechanisms.", marks: 1, markCode: "M" },
              { reasoning: "Hydrograph effect.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Vegetation intercepts rainfall, promotes infiltration and slows overland flow → lower, later peak discharge and higher baseflow — forests produce 'subdued' hydrographs.",
            commonErrors: ["Increases flooding."],
          },
        },
        {
          id: "ciealegeo-q-u5l1c2-15",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate the value of flood forecasting as a management strategy.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Flood forecasting",
                statement: "Prediction + response.",
              },
            ],
            steps: [
              { reasoning: "Benefits.", marks: 1, markCode: "M" },
              { reasoning: "Limitations.", marks: 1, markCode: "M" },
              { reasoning: "Effectiveness conditions.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Forecasts enable evacuation, property protection, reservoir drawdown — dramatically reduce deaths/damage; but accuracy varies, requires infrastructure and public response — best combined with structural measures.",
            commonErrors: ["Forecasting alone suffices."],
          },
        },
        {
          id: "ciealegeo-q-u5l1c2-16",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is a 'pothole' in a river bed?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Pothole",
                statement: "Eroded bed hollow.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Formation.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Circular/oval hollow in bedrock — formed by abrasion as swirling eddies grind stones against the bed; common in upper/middle course rapids.",
            commonErrors: ["Depositional feature."],
          },
        },
      ],
    },
    {
      id: "ciealegeo-u5l1-c3-management",
      title: "Flood management and river restoration",
      skill:
        "Evaluate flood management strategies and river restoration approaches.",
      lesson: {
        sections: [
          {
            heading: "Hard engineering",
            body: "**Dams/reservoirs**: store floodwater upstream — expensive, displace people, sedimentation. **Levees/embankments**: contain river — may increase velocity/flood risk downstream. **Channelisation**: straighten/deepen — faster flow, more erosion. **Diversion channels**: redirect floodwater.",
          },
          {
            heading: "Soft engineering and restoration",
            body: "**Floodplain zoning**: restrict development in flood zones. **Flood warnings**: evacuate before floods. **Insurance**: spread risk. **River restoration**: remove dams, re-meander channels, restore wetlands — 'room for the river' approach; slower but sustainable and ecosystem-friendly.",
          },
        ],
        keyFormulas: [
          { name: "Hard engineering", statement: "Structural control" },
          {
            name: "Soft engineering",
            statement: "Non-structural, sustainable",
          },
          { name: "Restoration", statement: "Working with natural processes" },
        ],
        workedExample: {
          problem:
            "A city floods repeatedly. Compare hard vs soft engineering solutions.",
          solution:
            "Hard (levees, channelisation): immediate protection but costly, may worsen downstream, ecosystem damage. Soft (zoning, warnings, insurance): cheaper long-term, sustainable, but less certain protection — often combined.",
        },
      },
      questions: [
        {
          id: "ciealegeo-q-u5l1c3-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Hard' flood engineering includes:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Flood warnings" },
              { id: "b", text: "Insurance" },
              { id: "c", text: "Dams and levees" },
              { id: "d", text: "Zoning" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Hard engineering",
                statement: "Structural.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Structural",
            commonErrors: ["Soft confused."],
          },
        },
        {
          id: "ciealegeo-q-u5l1c3-2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Give two disadvantages of dams for flood control.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Dam limits",
                statement: "Cost, displacement, sediment.",
              },
            ],
            steps: [
              { reasoning: "Two valid.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "e.g. expensive construction and displacement of communities; also sedimentation reduces capacity over time.",
            commonErrors: ["Advantages only."],
          },
        },
        {
          id: "ciealegeo-q-u5l1c3-3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why channelisation can worsen flooding downstream.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Channelisation",
                statement: "Faster flow.",
              },
            ],
            steps: [
              { reasoning: "Mechanism.", marks: 1, markCode: "M" },
              { reasoning: "Downstream effect.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Straightening/deepening increases velocity → floodwave travels faster with less attenuation → higher peak discharge downstream → worse flooding.",
            commonErrors: ["Always improves."],
          },
        },
        {
          id: "ciealegeo-q-u5l1c3-4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Evaluate 'river restoration' as a flood management strategy.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Restoration",
                statement: "Natural processes.",
              },
            ],
            steps: [
              { reasoning: "Mechanism.", marks: 1, markCode: "M" },
              { reasoning: "Benefits.", marks: 1, markCode: "M" },
              { reasoning: "Limitations.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Re-meandering, wetland restoration slows floodwater, increases storage — sustainable, ecosystem benefits; but requires land, time, and may not protect existing development adequately.",
            commonErrors: ["Always superior."],
          },
        },
        {
          id: "ciealegeo-q-u5l1c3-5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Analyse the trade-offs between hard and soft flood management for a developing country.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Management choice",
                statement: "Cost vs protection.",
              },
            ],
            steps: [
              { reasoning: "Hard constraints.", marks: 1, markCode: "M" },
              { reasoning: "Soft constraints.", marks: 1, markCode: "M" },
              { reasoning: "Development context.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Developing countries often lack funds for hard engineering → soft measures (warnings, zoning, community preparedness) more feasible; but informal settlements on floodplains need structural protection too.",
            commonErrors: ["Same for all."],
          },
        },
        {
          id: "ciealegeo-q-u5l1c3-6",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'floodplain zoning'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Floodplain zoning",
                statement: "Land use restriction.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Effect.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Restricting development in flood-prone areas — prevents new buildings in high-risk zones, reducing potential damage and allowing floodwater to spread safely.",
            commonErrors: ["Hard engineering."],
          },
        },
        {
          id: "ciealegeo-q-u5l1c3-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Soft' flood engineering includes:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Levees" },
              { id: "b", text: "Dams" },
              { id: "c", text: "Flood warnings and insurance" },
              { id: "d", text: "Channelisation" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Soft engineering",
                statement: "Non-structural.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Non-structural",
            commonErrors: ["Hard confused."],
          },
        },
        {
          id: "ciealegeo-q-u5l1c3-8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two advantages of flood warnings.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Warnings",
                statement: "Life-saving, cheap.",
              },
            ],
            steps: [
              { reasoning: "Two valid.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 2, markCode: "A" },
            ],
            finalAnswer:
              "e.g. saves lives by enabling evacuation; relatively cheap to implement vs structural measures — also allows preparation (moving goods, sandbags).",
            commonErrors: ["Disadvantages only."],
          },
        },
        {
          id: "ciealegeo-q-u5l1c3-9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why might 'room for the river' be better than levees?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Room for river",
                statement: "Floodplain storage.",
              },
            ],
            steps: [
              { reasoning: "Mechanism.", marks: 1, markCode: "M" },
              { reasoning: "Comparison.", marks: 1, markCode: "M" },
              { reasoning: "Benefit.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Allowing floodwater to spread over floodplain reduces peak height/velocity; levees force water higher → catastrophic failure risk; natural approach sustainable long-term.",
            commonErrors: ["Levees better."],
          },
        },
        {
          id: "ciealegeo-q-u5l1c3-10",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate the sustainability of hard engineering flood management.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Sustainability",
                statement: "Long-term viability.",
              },
            ],
            steps: [
              { reasoning: "Short-term benefits.", marks: 1, markCode: "M" },
              { reasoning: "Long-term costs.", marks: 1, markCode: "M" },
              { reasoning: "Ecosystem impact.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Hard engineering gives immediate protection but costs escalate, sedimentation reduces effectiveness, ecosystem damage accumulates — soft approaches increasingly preferred for sustainability.",
            commonErrors: ["Always sustainable."],
          },
        },
        {
          id: "ciealegeo-q-u5l1c3-11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Channelisation involves:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Issuing flood warnings" },
              { id: "b", text: "Restoring wetlands" },
              { id: "c", text: "Building levees on the banks" },
              { id: "d", text: "Straightening and deepening the river channel" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Channelisation",
                statement: "Channel modification.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Straightening/deepening",
            commonErrors: ["Levees confused."],
          },
        },
        {
          id: "ciealegeo-q-u5l1c3-12",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is a 'diversion channel'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Diversion channel",
                statement: "Floodwater bypass.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Purpose.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Artificial channel carrying floodwater around a city/protected area — reduces peak flow through the main channel; part of hard engineering.",
            commonErrors: ["Natural feature."],
          },
        },
        {
          id: "ciealegeo-q-u5l1c3-13",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is meant by 'floodplain storage'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Floodplain storage",
                statement: "Natural attenuation.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Effect.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Allowing floodwater to spread over the floodplain, reducing peak height and velocity — natural flood attenuation, central to 'room for the river' management.",
            commonErrors: ["Confined channel."],
          },
        },
        {
          id: "ciealegeo-q-u5l1c3-14",
          difficulty: "core",
          totalMarks: 4,
          stem: "Compare dams and levees as flood management strategies.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Dams vs levees",
                statement: "Storage vs confinement.",
              },
            ],
            steps: [
              { reasoning: "Dams: mechanism/effects.", marks: 1, markCode: "M" },
              { reasoning: "Levees: mechanism/effects.", marks: 1, markCode: "M" },
              { reasoning: "Comparison.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Dams store floodwater upstream — effective but costly, displace people, sedimentation reduces capacity. Levees contain the channel — cheaper but raise flood levels, risk catastrophic failure, don't reduce flood volume.",
            commonErrors: ["Same mechanism."],
          },
        },
        {
          id: "ciealegeo-q-u5l1c3-15",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Analyse the social impacts of flood management decisions on local communities.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Social impacts",
                statement: "Displacement, equity, livelihoods.",
              },
            ],
            steps: [
              { reasoning: "Displacement.", marks: 1, markCode: "M" },
              { reasoning: "Equity issues.", marks: 1, markCode: "M" },
              { reasoning: "Livelihood impacts.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Dams/reservoirs displace communities and destroy farmland; protection often favours wealthy areas; but unmanaged floods harm the poor most — management must weigh protection vs social cost and involve communities.",
            commonErrors: ["Only technical view."],
          },
        },
        {
          id: "ciealegeo-q-u5l1c3-16",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how urbanisation increases flood risk.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Urbanisation & flooding",
                statement: "Impermeable surfaces.",
              },
            ],
            steps: [
              { reasoning: "Mechanism.", marks: 1, markCode: "M" },
              { reasoning: "Hydrograph effect.", marks: 1, markCode: "M" },
              { reasoning: "Compounding factors.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Impermeable surfaces reduce infiltration → faster surface runoff, higher peak discharge → 'flashier' hydrographs; plus drainage overload and settlement on floodplains amplify flood damage.",
            commonErrors: ["Reduces flooding."],
          },
        },
      ],
    },
  ],
};
