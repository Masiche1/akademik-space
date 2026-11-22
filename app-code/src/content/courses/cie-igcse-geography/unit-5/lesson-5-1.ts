import type { Lesson } from "../../../types.ts";

export const lesson51: Lesson = {
  id: "cieigeo-u5-lesson-5-1",
  code: "5-1",
  title: "Rivers: Processes, Landforms and Management",
  goal: "I CAN explain fluvial processes, identify landforms and evaluate flood management.",
  standards: [
    "Cambridge IGCSE Geography 0460",
    "Unit 5: physical geography depth",
  ],
  vocabulary: [
    { term: "Erosion", definition: "Wearing away of river bed/banks." },
    { term: "Transportation", definition: "Movement of sediment downstream." },
    { term: "Deposition", definition: "Sediment laid down when energy drops." },
    { term: "Meander", definition: "Sinuous curve in river channel." },
    { term: "Ox-bow lake", definition: "Abandoned meander loop." },
    {
      term: "Flood plain",
      definition: "Flat land beside river prone to flooding.",
    },
  ],
  concepts: [
    {
      id: "cieigeo-u5l1-c1-processes",
      title: "Fluvial processes and landforms",
      skill:
        "Explain erosion, transportation, deposition and resulting landforms.",
      lesson: {
        sections: [
          {
            heading: "Fluvial processes",
            body: "**Erosion**: hydraulic action (force of water), abrasion (sediment scrapes bed/banks), attrition (rocks collide, round off), solution (dissolves rock). **Transportation**: traction (large load rolls), saltation (bounces), suspension (fine particles carried), solution (dissolved). **Deposition**: when velocity/energy drops — sediment settles.",
          },
          {
            heading: "Landforms",
            body: "Upper course: **V-shaped valleys**, **waterfalls** (hard/soft rock erosion difference), **gorges**. Middle: **meanders** (lateral erosion outer bank, deposition inner), **ox-bow lakes** (meander cutoff). Lower: **flood plains**, **levees** (deposition at flood edges), **deltas** (deposition at mouth), **estuaries**.",
          },
        ],
        keyFormulas: [
          {
            name: "Erosion types",
            statement: "Hydraulic+abrasion+attrition+solution",
          },
          {
            name: "Transport",
            statement: "Traction+saltation+suspension+solution",
          },
          { name: "Meander", statement: "Erosion outer, deposit inner" },
        ],
        workedExample: {
          problem: "Why do meanders form?",
          solution:
            "Water flows faster on outside of bend → lateral erosion outer bank; slower inside → deposition builds point bar; over time bend migrates downstream, extreme erosion → ox-bow lake.",
        },
      },
      questions: [
        {
          id: "cieigeo-q-u5l1c1-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Hydraulic action is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Dissolving rock" },
              { id: "b", text: "Force of water eroding bed/banks" },
              { id: "c", text: "Rocks colliding" },
              { id: "d", text: "Sediment scraping rock" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "fact", name: "Hydraulic", statement: "Force." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Force of water",
            commonErrors: ["Abrasion."],
          },
        },
        {
          id: "cieigeo-q-u5l1c1-2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name two types of fluvial erosion.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "fact", name: "Erosion types", statement: "Four." },
            ],
            steps: [
              { reasoning: "Two valid.", marks: 1, markCode: "M" },
              { reasoning: "Each defined.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "e.g. hydraulic action (force of water) and abrasion (sediment scrapes bed/banks) — also attrition, solution.",
            commonErrors: ["One type."],
          },
        },
        {
          id: "cieigeo-q-u5l1c1-3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how a waterfall forms.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Waterfall",
                statement: "Hard/soft rock.",
              },
            ],
            steps: [
              { reasoning: "Mechanism.", marks: 1, markCode: "M" },
              { reasoning: "Process.", marks: 1, markCode: "M" },
              { reasoning: "Result.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "River flows over hard rock (resists erosion) onto soft rock (erodes faster) — creates step; undercutting forms plunge pool, retreat creates gorge; abrasion deepens plunge pool.",
            commonErrors: ["Erosion equal."],
          },
        },
        {
          id: "cieigeo-q-u5l1c1-4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain the formation of a meander and ox-bow lake.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Meander→oxbow",
                statement: "Process.",
              },
            ],
            steps: [
              { reasoning: "Meander formation.", marks: 1, markCode: "M" },
              { reasoning: "Migration.", marks: 1, markCode: "M" },
              { reasoning: "Ox-bow.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Fast water erodes outer bank, deposits inner (point bar) — bend grows; extreme erosion narrows neck; flood cuts through → abandoned loop = ox-bow lake.",
            commonErrors: ["Random bends."],
          },
        },
        {
          id: "cieigeo-q-u5l1c1-5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate the effectiveness of river management strategies for flood control.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Flood mgmt",
                statement: "Hard vs soft.",
              },
            ],
            steps: [
              { reasoning: "Hard eng.", marks: 1, markCode: "M" },
              { reasoning: "Soft eng.", marks: 1, markCode: "M" },
              { reasoning: "Evidence.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Hard engineering (dams, levees) immediate but costly, environmental damage; soft engineering (floodplains, warning systems) sustainable but less absolute protection; best combines both + land-use planning.",
            commonErrors: ["One perfect."],
          },
        },
        {
          id: "cieigeo-q-u5l1c1-6",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'saltation' in river transport?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Saltation", statement: "Bouncing." },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Load size.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Sediment bounces along river bed — intermediate load size between traction (large, rolls) and suspension (fine, carried); caused by turbulence.",
            commonErrors: ["Suspension."],
          },
        },
        {
          id: "cieigeo-q-u5l1c1-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "An ox-bow lake forms when:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A meander is cut off from the river" },
              { id: "b", text: "A dam is built" },
              { id: "c", text: "River changes course randomly" },
              { id: "d", text: "Sediment deposits at mouth" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "fact", name: "Ox-bow", statement: "Meander cutoff." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Meander cutoff",
            commonErrors: ["Other cause."],
          },
        },
        {
          id: "cieigeo-q-u5l1c1-8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two landforms found in the lower course of a river.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "fact", name: "Lower course", statement: "Deposition." },
            ],
            steps: [
              { reasoning: "Two valid.", marks: 1, markCode: "M" },
              { reasoning: "Each defined.", marks: 2, markCode: "A" },
            ],
            finalAnswer:
              "e.g. flood plain (flat deposition area) and levees (natural embankments from flood deposition) — also deltas, estuaries; deposition dominates lower course.",
            commonErrors: ["Upper course."],
          },
        },
        {
          id: "cieigeo-q-u5l1c1-9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why deposition occurs in the lower course.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Deposition",
                statement: "Energy drop.",
              },
            ],
            steps: [
              { reasoning: "Reason.", marks: 1, markCode: "M" },
              { reasoning: "Process.", marks: 1, markCode: "M" },
              { reasoning: "Result.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "River velocity decreases downstream (gentler gradient, wider channel) — energy drops below threshold needed to carry load; sediment settles — creates flood plains, deltas, levees.",
            commonErrors: ["More energy."],
          },
        },
        {
          id: "cieigeo-q-u5l1c1-10",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Analyse the impact of human activities on river systems.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Human impact",
                statement: "Modification.",
              },
            ],
            steps: [
              { reasoning: "Impact 1.", marks: 1, markCode: "M" },
              { reasoning: "Impact 2.", marks: 1, markCode: "M" },
              { reasoning: "Impact 3.", marks: 1, markCode: "A" },
              { reasoning: "Weighs all.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Dams alter flow regimes, pollution degrades water quality, deforestation increases erosion/flooding, urbanisation increases runoff — rivers heavily modified; management balances human needs with ecosystem health.",
            commonErrors: ["No impact."],
          },
        },
        { id: "cieigeo-q-u5l1c1-11", difficulty: "foundation", totalMarks: 1, stem: "In river transportation, suspension refers to:", response: { type: "mcq", choices: [ { id: "a", text: "Large rocks rolling along the bed" }, { id: "b", text: "Fine sediment carried within the water" }, { id: "c", text: "Material deposited on a flood plain" }, { id: "d", text: "Sediment dissolved in water" } ], correctChoiceId: "b" }, markscheme: { principles: [{ kind: "definition", name: "Suspension", statement: "Fine load carried in water." }], steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }], finalAnswer: "**(b)** Fine sediment carried within water", commonErrors: ["Traction."] } },
        { id: "cieigeo-q-u5l1c1-12", difficulty: "core", totalMarks: 2, stem: "A river transports 600 tonnes of sediment: 30% by traction and 50% by suspension. (a) Calculate the mass moved by traction. (b) Calculate the mass moved by suspension.", response: { type: "numeric", parts: [ { label: "(a) Traction load (tonnes)", answer: 180, unit: "tonnes" }, { label: "(b) Suspended load (tonnes)", answer: 300, unit: "tonnes" } ] }, markscheme: { principles: [{ kind: "formula", name: "Load share", statement: "Load = total x percentage." }], steps: [{ reasoning: "(a) 600 x 0.30 = 180 tonnes.", working: "600 \\times 0.30 = 180", marks: 1, markCode: "M" }, { reasoning: "(b) 600 x 0.50 = 300 tonnes.", working: "600 \\times 0.50 = 300", marks: 1, markCode: "M" }], finalAnswer: "(a) 180 tonnes (b) 300 tonnes", commonErrors: ["Using wrong percentages."] } },
        { id: "cieigeo-q-u5l1c1-13", difficulty: "foundation", totalMarks: 2, stem: "Name two landforms found in the upper course of a river.", response: { type: "open" }, markscheme: { principles: [{ kind: "definition", name: "Upper course", statement: "Erosional landforms." }], steps: [{ reasoning: "Two valid landforms.", marks: 1, markCode: "M" }, { reasoning: "Each correctly placed in upper course.", marks: 1, markCode: "M" }], finalAnswer: "e.g. V-shaped valley and waterfall — also gorges, rapids; steep gradient and erosion dominate.", commonErrors: ["Lower course forms."] } },
        { id: "cieigeo-q-u5l1c1-14", difficulty: "challenge", totalMarks: 4, stem: "Explain how a delta forms at the mouth of a river.", response: { type: "open" }, markscheme: { principles: [{ kind: "principle", name: "Delta", statement: "Deposition at river mouth." }], steps: [{ reasoning: "River carries sediment downstream.", marks: 1, markCode: "M" }, { reasoning: "Velocity decreases at mouth due to wider/deeper water.", marks: 1, markCode: "M" }, { reasoning: "Energy falls below transport threshold so sediment is deposited.", marks: 1, markCode: "M" }, { reasoning: "Repeated deposition builds distributary channels and delta lobes.", marks: 1, markCode: "A" }], finalAnswer: "Energy loss at mouth deposits sediment into a delta.", commonErrors: ["Erosion at mouth."] } },
        { id: "cieigeo-q-u5l1c1-15", difficulty: "core", totalMarks: 1, stem: "Attrition in a river mainly causes sediment to:", response: { type: "mcq", choices: [ { id: "a", text: "Move only by traction" }, { id: "b", text: "Dissolve into solution" }, { id: "c", text: "Become rounded as particles collide" }, { id: "d", text: "Stick to the river banks" } ], correctChoiceId: "c" }, markscheme: { principles: [{ kind: "definition", name: "Attrition", statement: "Particle collision rounds load." }], steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }], finalAnswer: "**(c)** Rounded by collisions", commonErrors: ["Solution."] } },
        { id: "cieigeo-q-u5l1c1-16", difficulty: "challenge", totalMarks: 5, stem: "Analyse how fluvial processes change from the upper to the lower course of a river.", response: { type: "open" }, markscheme: { principles: [{ kind: "principle", name: "Long profile", statement: "Erosion→transport→deposition downstream." }], steps: [{ reasoning: "Upper course: steep gradient, high energy, vertical/lateral erosion.", marks: 1, markCode: "M" }, { reasoning: "Middle course: meanders form through lateral erosion and point-bar deposition.", marks: 1, markCode: "M" }, { reasoning: "Lower course: gentle gradient and wide channel reduce velocity.", marks: 1, markCode: "M" }, { reasoning: "Deposition dominates, creating flood plains, levees and deltas.", marks: 1, markCode: "M" }, { reasoning: "Conclusion: process balance shifts from erosion to deposition downstream.", marks: 1, markCode: "A" }], finalAnswer: "Erosion dominates upstream; deposition dominates downstream.", commonErrors: ["No change downstream."] } },
      ],
    },
    {
      id: "cieigeo-u5l1-c2-management",
      title: "Flood management strategies",
      skill:
        "Evaluate hard and soft engineering approaches to flood management.",
      lesson: {
        sections: [
          {
            heading: "Hard engineering",
            body: "**Dams/reservoirs**: store water upstream, release controlled amounts — also generate hydroelectric power. **Levees**: raised banks contain floodwater. **Channel straightening**: faster flow reduces flood risk. **Flood walls**: concrete barriers protect urban areas. **Effective** but expensive, can increase downstream flooding, environmental damage.",
          },
          {
            heading: "Soft engineering",
            body: "**Floodplain zoning**: prevent building on flood-prone land. **Warning systems**: alert residents, evacuate. **Afforestation**: trees absorb water, slow runoff. **River restoration**: reconnect floodplains, natural meanders. **Sustainable** but less absolute protection — relies on cooperation, doesn't guarantee safety.",
          },
        ],
        keyFormulas: [
          { name: "Hard eng", statement: "Dams+levees+walls" },
          { name: "Soft eng", statement: "Zoning+warnings+trees" },
          { name: "Trade-off", statement: "Cost vs protection" },
        ],
        workedExample: {
          problem:
            "Why might soft engineering be preferred over hard engineering?",
          solution:
            "Lower cost, environmentally sustainable, works with natural processes — but less absolute protection; often combined with hard engineering for comprehensive flood defence.",
        },
      },
      questions: [
        {
          id: "cieigeo-q-u5l1c2-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is 'hard engineering' for flood control?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Floodplain zoning" },
              { id: "b", text: "Afforestation" },
              { id: "c", text: "Building a dam" },
              { id: "d", text: "Early warning system" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "fact", name: "Hard eng", statement: "Structures." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** Dam",
            commonErrors: ["Soft eng."],
          },
        },
        {
          id: "cieigeo-q-u5l1c2-2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Give two examples of 'soft engineering' flood management.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "fact", name: "Soft eng", statement: "Natural." },
            ],
            steps: [
              { reasoning: "Two valid.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "e.g. floodplain zoning (prevent building in flood zones) and early warning systems (alert residents to evacuate) — also afforestation, river restoration.",
            commonErrors: ["Dams."],
          },
        },
        {
          id: "cieigeo-q-u5l1c2-3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two advantages of dams for flood control.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Dam advantages",
                statement: "Control+power.",
              },
            ],
            steps: [
              { reasoning: "Two valid.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 2, markCode: "A" },
            ],
            finalAnswer:
              "e.g. store water upstream releasing controlled amounts during floods, and generate hydroelectric power (multi-purpose) — also water supply, recreation; effective immediate protection.",
            commonErrors: ["Only costs."],
          },
        },
        {
          id: "cieigeo-q-u5l1c2-4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Evaluate hard engineering versus soft engineering for flood management.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Hard vs soft",
                statement: "Trade-offs.",
              },
            ],
            steps: [
              { reasoning: "Hard eng.", marks: 1, markCode: "M" },
              { reasoning: "Soft eng.", marks: 1, markCode: "M" },
              { reasoning: "Evidence.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Hard: immediate, absolute protection but costly, environmental damage, downstream flooding. Soft: sustainable, cheaper, works with nature — but less certain protection; best combines both + land-use planning.",
            commonErrors: ["One better."],
          },
        },
        {
          id: "cieigeo-q-u5l1c2-5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Analyse why flood management is difficult in developing countries.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Developing country",
                statement: "Constraints.",
              },
            ],
            steps: [
              { reasoning: "Constraint 1.", marks: 1, markCode: "M" },
              { reasoning: "Constraint 2.", marks: 1, markCode: "M" },
              { reasoning: "Constraint 3.", marks: 1, markCode: "A" },
              { reasoning: "Weighs all.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Limited funds for engineering, weak infrastructure/governance, rapid urbanisation into floodplains without planning — floods hit harder; need international aid, community-based approaches, affordable soft engineering.",
            commonErrors: ["Same as rich."],
          },
        },
        {
          id: "cieigeo-q-u5l1c2-6",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'floodplain zoning'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Zoning", statement: "Land use." },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Purpose.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Regulating land use on floodplains — preventing construction in high-risk areas, allowing only flood-compatible uses (parks, agriculture); reduces flood damage by keeping people/assets away.",
            commonErrors: ["Building walls."],
          },
        },
        {
          id: "cieigeo-q-u5l1c2-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Levees are:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Dams" },
              { id: "b", text: "Tree planting" },
              { id: "c", text: "Raised banks containing floodwater" },
              { id: "d", text: "Warning systems" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "fact", name: "Levees", statement: "Banks." }],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** Raised banks",
            commonErrors: ["Other structure."],
          },
        },
        {
          id: "cieigeo-q-u5l1c2-8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two disadvantages of hard engineering flood control.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "fact", name: "Hard eng limits", statement: "Cost+env." },
            ],
            steps: [
              { reasoning: "Two valid.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 2, markCode: "A" },
            ],
            finalAnswer:
              "e.g. very expensive to build/maintain, and can increase downstream flooding (water diverted elsewhere) — also environmental damage (habitat loss, sediment trapping).",
            commonErrors: ["No disadvantages."],
          },
        },
        {
          id: "cieigeo-q-u5l1c2-9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how afforestation helps reduce flood risk.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Afforestation",
                statement: "Natural defence.",
              },
            ],
            steps: [
              { reasoning: "Mechanism.", marks: 1, markCode: "M" },
              { reasoning: "Effect.", marks: 1, markCode: "M" },
              { reasoning: "Benefit.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Tree roots absorb water, canopy intercepts rain, soil holds more water — slows runoff into rivers, reduces peak flood levels; sustainable, low-cost soft engineering.",
            commonErrors: ["No effect."],
          },
        },
        {
          id: "cieigeo-q-u5l1c2-10",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate the role of international aid in flood management for developing countries.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Aid eval",
                statement: "Help vs dependency.",
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
              "Funds engineering, training, early warning systems — but often tied to donor conditions, may not match local needs, short-term focus; best aid builds local capacity for sustainable management.",
            commonErrors: ["Perfect solution."],
          },
        },
        { id: "cieigeo-q-u5l1c2-11", difficulty: "foundation", totalMarks: 1, stem: "Which is an example of soft engineering flood management?", response: { type: "mcq", choices: [ { id: "a", text: "Constructing a dam" }, { id: "b", text: "Building a concrete flood wall" }, { id: "c", text: "Channel straightening" }, { id: "d", text: "Floodplain zoning" } ], correctChoiceId: "d" }, markscheme: { principles: [{ kind: "definition", name: "Soft engineering", statement: "Works with natural systems." }], steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }], finalAnswer: "**(d)** Floodplain zoning", commonErrors: ["Hard engineering."] } },
        { id: "cieigeo-q-u5l1c2-12", difficulty: "core", totalMarks: 2, stem: "A warning system reaches 75% of a town's 80 000 residents. (a) How many residents receive warnings? (b) How many do not receive warnings?", response: { type: "numeric", parts: [ { label: "(a) Residents warned", answer: 60000, unit: "people" }, { label: "(b) Residents not warned", answer: 20000, unit: "people" } ] }, markscheme: { principles: [{ kind: "formula", name: "Coverage", statement: "Reach = total x percentage; remainder = total - reach." }], steps: [{ reasoning: "(a) 80 000 x 0.75 = 60 000.", working: "80000 \\times 0.75 = 60000", marks: 1, markCode: "M" }, { reasoning: "(b) 80 000 - 60 000 = 20 000.", working: "80000 - 60000 = 20000", marks: 1, markCode: "M" }], finalAnswer: "(a) 60 000 (b) 20 000", commonErrors: ["Using 75 as people."] } },
        { id: "cieigeo-q-u5l1c2-13", difficulty: "foundation", totalMarks: 2, stem: "Give two advantages of an early warning system for floods.", response: { type: "open" }, markscheme: { principles: [{ kind: "definition", name: "Warning system", statement: "Soft engineering." }], steps: [{ reasoning: "Two valid advantages.", marks: 1, markCode: "M" }, { reasoning: "Each explained, e.g. saves lives/allows evacuation.", marks: 1, markCode: "M" }], finalAnswer: "e.g. allows evacuation and protects property — also cheap compared with engineering structures.", commonErrors: ["Only one advantage."] } },
        { id: "cieigeo-q-u5l1c2-14", difficulty: "challenge", totalMarks: 4, stem: "Analyse why flood management should combine hard and soft engineering rather than relying on one approach.", response: { type: "open" }, markscheme: { principles: [{ kind: "principle", name: "Integrated management", statement: "Complementary approaches." }], steps: [{ reasoning: "Hard engineering gives immediate structural protection.", marks: 1, markCode: "M" }, { reasoning: "Soft engineering reduces risk sustainably and supports communities.", marks: 1, markCode: "M" }, { reasoning: "Either alone has weaknesses: cost/environmental damage versus less certainty.", marks: 1, markCode: "M" }, { reasoning: "Conclusion: combining approaches gives more reliable and sustainable protection.", marks: 1, markCode: "A" }], finalAnswer: "Hard engineering protects; soft engineering sustains.", commonErrors: ["One method perfect."] } },
        { id: "cieigeo-q-u5l1c2-15", difficulty: "core", totalMarks: 1, stem: "Channel straightening can increase flood risk downstream because it:", response: { type: "mcq", choices: [ { id: "a", text: "Always stores all floodwater" }, { id: "b", text: "Reduces river velocity everywhere" }, { id: "c", text: "Speeds up flow, transferring floodwater downstream more quickly" }, { id: "d", text: "Creates natural levees" } ], correctChoiceId: "c" }, markscheme: { principles: [{ kind: "principle", name: "Channel straightening", statement: "Faster flow can worsen downstream flooding." }], steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }], finalAnswer: "**(c)** Faster flow downstream", commonErrors: ["Only local benefit."] } },
        { id: "cieigeo-q-u5l1c2-16", difficulty: "challenge", totalMarks: 5, stem: "Evaluate a flood management plan for a low-income urban area.", response: { type: "open" }, markscheme: { principles: [{ kind: "principle", name: "Plan evaluation", statement: "Feasibility, equity and sustainability." }], steps: [{ reasoning: "Hard engineering may be too expensive for the municipality.", marks: 1, markCode: "M" }, { reasoning: "Soft engineering such as zoning, warnings and drainage is more affordable.", marks: 1, markCode: "M" }, { reasoning: "Community participation improves evacuation and maintenance.", marks: 1, markCode: "M" }, { reasoning: "Risks include informal settlements on floodplains and weak enforcement.", marks: 1, markCode: "A" }, { reasoning: "Conclusion: affordable, community-based integrated management is most realistic.", marks: 1, markCode: "A" }], finalAnswer: "Affordable integrated strategies suit low-income cities.", commonErrors: ["Only expensive dams."] } },
      ],
    },
  ],
};
