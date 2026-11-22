import type { Lesson } from "../../../types.ts";

export const lesson52: Lesson = {
  id: "ciealegeo-u5-lesson-5-2",
  code: "5-2",
  title: "Coastal Processes, Landforms and Management",
  goal: "I CAN explain coastal erosion and deposition, identify coastal landforms and evaluate coastal management.",
  standards: [
    "Cambridge A Level Geography 9696",
    "Unit 5: physical geography in depth",
  ],
  vocabulary: [
    {
      term: "Hydraulic action",
      definition: "Wave force compressing air in rock joints.",
    },
    { term: "Abrasion", definition: "Sediment grinding rock surface." },
    {
      term: "Attrition",
      definition: "Sediment particles colliding and rounding.",
    },
    { term: "Corrosion", definition: "Chemical dissolution of rock." },
    {
      term: "Longshore drift",
      definition: "Sediment transport along coast by waves.",
    },
    {
      term: "Headland and bay",
      definition: "Hard rock point vs sheltered indentation.",
    },
  ],
  concepts: [
    {
      id: "ciealegeo-u5l2-c1-processes",
      title: "Coastal processes",
      skill:
        "Explain wave erosion, transportation and deposition and their controlling factors.",
      lesson: {
        sections: [
          {
            heading: "Erosion processes",
            body: "**Hydraulic action**: wave force compresses air in joints → rock breaks. **Abrasion**: sediment grinds rock (needs sediment load). **Attrition**: particles collide → round, reduce. **Corrosion**: chemical dissolution (limestone). **Solution**: weak acids dissolve carbonate rocks. Dominant on exposed coasts with high energy waves.",
          },
          {
            heading: "Transportation and deposition",
            body: "**Longshore drift**: waves approach at angle → swash moves sediment along shore, backwash returns perpendicular → net drift. **Deposition**: when wave energy falls — sheltered bays, estuaries, where longshore drift loses energy. Factors: wave energy, sediment supply, coastal gradient, fetch.",
          },
        ],
        keyFormulas: [
          {
            name: "Longshore drift",
            statement: "Angled waves → net transport",
          },
          { name: "Deposition", statement: "Wave energy < threshold" },
          { name: "Fetch", statement: "Distance waves travel over sea" },
        ],
        workedExample: {
          problem: "Why does longshore drift move sediment along a coast?",
          solution:
            "Waves approach at angle to shore → swash carries sediment diagonally up beach → backwash returns at right angles → net movement along coast over time.",
        },
      },
      questions: [
        {
          id: "ciealegeo-q-u5l2c1-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Hydraulic action in coastal erosion is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Chemical dissolution" },
              { id: "b", text: "Particle collision" },
              { id: "c", text: "Wave force compressing air in rock joints" },
              { id: "d", text: "Sediment grinding rock" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Hydraulic action",
                statement: "Air compression.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** Air compression",
            commonErrors: ["Confusing abrasion."],
          },
        },
        {
          id: "ciealegeo-q-u5l2c1-2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name two factors controlling coastal erosion rates.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Erosion factors",
                statement: "Wave energy, rock type.",
              },
            ],
            steps: [
              { reasoning: "Two valid.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "e.g. wave energy/fetch (bigger waves erode more) and rock type (hard vs soft, jointed vs massive).",
            commonErrors: ["Only one factor."],
          },
        },
        {
          id: "ciealegeo-q-u5l2c1-3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how longshore drift transports sediment.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Longshore drift",
                statement: "Angled waves.",
              },
            ],
            steps: [
              { reasoning: "Wave angle.", marks: 1, markCode: "M" },
              { reasoning: "Swash/backwash.", marks: 1, markCode: "M" },
              { reasoning: "Net movement.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Waves approach at angle → swash moves sediment up beach diagonally → backwash returns perpendicular → net alongshore transport each wave cycle.",
            commonErrors: ["No net movement."],
          },
        },
        {
          id: "ciealegeo-q-u5l2c1-4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Why do bays form between headlands?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Bay formation",
                statement: "Differential erosion.",
              },
            ],
            steps: [
              { reasoning: "Hard rock headland.", marks: 1, markCode: "M" },
              { reasoning: "Soft rock bay.", marks: 1, markCode: "M" },
              { reasoning: "Wave refraction.", marks: 1, markCode: "M" },
              { reasoning: "Result.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Hard rock resists erosion → headlands; soft rock erodes → bays; wave refraction focuses energy on headlands, dissipates in bays → bays sheltered, headlands exposed.",
            commonErrors: ["Random formation."],
          },
        },
        {
          id: "ciealegeo-q-u5l2c1-5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Analyse how wave energy determines coastal landform type.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Energy & landforms",
                statement: "High vs low energy.",
              },
            ],
            steps: [
              { reasoning: "High energy.", marks: 1, markCode: "M" },
              { reasoning: "Low energy.", marks: 1, markCode: "M" },
              { reasoning: "Landforms.", marks: 1, markCode: "A" },
              { reasoning: "Weighs factors.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "High energy → erosion dominant → cliffs, caves, stacks. Low energy → deposition → beaches, spits, salt marshes — energy determines process dominance.",
            commonErrors: ["No link."],
          },
        },
        {
          id: "ciealegeo-q-u5l2c1-6",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'fetch'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Fetch", statement: "Sea distance." },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Effect.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Distance waves travel over open sea — longer fetch → bigger, more powerful waves → greater erosion potential.",
            commonErrors: ["Confusing with wave height."],
          },
        },
        {
          id: "ciealegeo-q-u5l2c1-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Corrosion is most effective on:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sand dunes" },
              { id: "b", text: "Limestone coasts" },
              { id: "c", text: "Basalt" },
              { id: "d", text: "Granite cliffs" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "fact", name: "Corrosion", statement: "Soluble rocks." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Limestone",
            commonErrors: ["Insoluble rocks."],
          },
        },
        {
          id: "ciealegeo-q-u5l2c1-8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two factors that cause coastal deposition.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Deposition factors",
                statement: "Low energy, sediment supply.",
              },
            ],
            steps: [
              { reasoning: "Two valid.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 2, markCode: "A" },
            ],
            finalAnswer:
              "e.g. sheltered bays (wave energy dissipates) and abundant sediment supply from rivers/longshore drift.",
            commonErrors: ["Erosion factors."],
          },
        },
        {
          id: "ciealegeo-q-u5l2c1-9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain 'wave refraction' and its effect on coastal erosion.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Refraction",
                statement: "Wave bending.",
              },
            ],
            steps: [
              { reasoning: "Mechanism.", marks: 1, markCode: "M" },
              { reasoning: "Headland effect.", marks: 1, markCode: "M" },
              { reasoning: "Bay effect.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Waves bend as they approach shore (shoaling) → energy concentrates on headlands (focused erosion) and disperses in bays (deposition) — creates headland/bay coastline.",
            commonErrors: ["No bending."],
          },
        },
        {
          id: "ciealegeo-q-u5l2c1-10",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate the role of human activity in coastal processes.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Human impact",
                statement: "Sediment disruption.",
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
              "Sea walls, groynes, dredging change sediment supply and wave energy — protect locally but starve downdrift beaches, accelerate erosion elsewhere — 'coastal squeeze'.",
            commonErrors: ["No effect."],
          },
        },
        {
          id: "ciealegeo-q-u5l2c1-11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Longshore drift is caused by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Waves approaching the shore at an angle" },
              { id: "b", text: "Tidal currents alone" },
              { id: "c", text: "Wind blowing offshore" },
              { id: "d", text: "Rivers flowing into the sea" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Longshore drift",
                statement: "Angled wave approach.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Angled approach",
            commonErrors: ["Perpendicular waves."],
          },
        },
        {
          id: "ciealegeo-q-u5l2c1-12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Distinguish 'swash' from 'backwash'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Swash/backwash",
                statement: "Uphill vs return flow.",
              },
            ],
            steps: [
              { reasoning: "Swash defined.", marks: 1, markCode: "M" },
              { reasoning: "Backwash defined.", marks: 1, markCode: "M" },
              { reasoning: "Role in drift.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Swash: water rushing up the beach carrying sediment. Backwash: water draining back down — returns more perpendicular → net alongshore drift.",
            commonErrors: ["Same process."],
          },
        },
        {
          id: "ciealegeo-q-u5l2c1-13",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a 'headland'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Headland",
                statement: "Exposed hard rock.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Formation.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Point of land projecting into the sea — underlain by resistant rock that resists erosion while adjacent softer rock forms bays; exposed to full wave energy.",
            commonErrors: ["Confusing with bay."],
          },
        },
        {
          id: "ciealegeo-q-u5l2c1-14",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain how 'fetch' affects wave energy and coastal erosion.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Fetch & erosion",
                statement: "Distance → wave power.",
              },
            ],
            steps: [
              { reasoning: "Fetch defined.", marks: 1, markCode: "M" },
              { reasoning: "Effect on waves.", marks: 1, markCode: "M" },
              { reasoning: "Erosion link.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Long fetch → wind has more time/distance to build waves → larger, more energetic waves → greater erosion; short fetch (enclosed seas) → smaller waves, depositional coasts.",
            commonErrors: ["No link to energy."],
          },
        },
        {
          id: "ciealegeo-q-u5l2c1-15",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate 'coastal cells' as a unit for coastal management.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Coastal cells",
                statement: "Self-contained sediment systems.",
              },
            ],
            steps: [
              { reasoning: "Concept.", marks: 1, markCode: "M" },
              { reasoning: "Benefits for management.", marks: 1, markCode: "M" },
              { reasoning: "Limitations.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Coastal cells (bounded by headlands) contain sediment flows — management within one cell doesn't starve others; but boundaries are artificial, cells interlink via longshore drift — holistic approach still needed.",
            commonErrors: ["Cells are independent."],
          },
        },
        {
          id: "ciealegeo-q-u5l2c1-16",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why does abrasion require sediment in the water?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Abrasion",
                statement: "Tool + target needed.",
              },
            ],
            steps: [
              { reasoning: "Mechanism.", marks: 1, markCode: "M" },
              { reasoning: "Sediment source.", marks: 1, markCode: "M" },
              { reasoning: "Implication.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Abrasion = sediment particles grinding rock — needs load in water; sand/gravel from rivers, longshore drift, attrition supplies tools → where sediment scarce, abrasion weak and other processes dominate.",
            commonErrors: ["Water alone erodes."],
          },
        },
      ],
    },
    {
      id: "ciealegeo-u5l2-c2-landforms",
      title: "Coastal landforms and management",
      skill:
        "Identify erosional and depositional coastal landforms and evaluate management.",
      lesson: {
        sections: [
          {
            heading: "Erosional landforms",
            body: "**Cliffs**: wave undercutting → collapse. **Caves**: joint erosion → arch → **stack** → **stump** (collapse sequence). **Wave-cut platform**: exposed rock at cliff base. **Geo**: narrow inlet cut through headland. **Stacks/stumps**: isolated rock remnants.",
          },
          {
            heading: "Depositional landforms and management",
            body: "**Beaches**: sand/pebbles deposited. **Spits**: elongated ridges from longshore drift. **Bars**: ridges across bays → lagoons. **Salt marshes**: mudflats colonised by vegetation. **Management**: hard (seawalls, groynes, breakwaters) vs soft (beach nourishment, managed retreat) — trade-offs cost vs sustainability.",
          },
        ],
        keyFormulas: [
          { name: "Cliff sequence", statement: "Cave → arch → stack → stump" },
          { name: "Spit", statement: "Longshore drift deposit" },
          { name: "Managed retreat", statement: "Let coast erode" },
        ],
        workedExample: {
          problem: "Why do coastal towns face 'coastal squeeze'?",
          solution:
            "Seawalls protect landward development but prevent natural erosion → beach narrows/disappears → wave energy attacks wall directly → no sediment buffer → wall failure risk increases.",
        },
      },
      questions: [
        {
          id: "ciealegeo-q-u5l2c2-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The sequence of erosional features from cave to stump is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Cave → arch → stack → stump" },
              { id: "b", text: "Arch → cave → stump → stack" },
              { id: "c", text: "Stump → stack → arch → cave" },
              { id: "d", text: "Stack → arch → cave → stump" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Erosion sequence",
                statement: "Cave first.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Cave→arch→stack→stump",
            commonErrors: ["Wrong order."],
          },
        },
        {
          id: "ciealegeo-q-u5l2c2-2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a 'spit'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Spit",
                statement: "Depositional ridge.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Formation.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Elongated ridge of sand/gravel extending from coast into sea — formed by longshore drift depositing sediment where coast changes direction or energy drops.",
            commonErrors: ["Erosional feature."],
          },
        },
        {
          id: "ciealegeo-q-u5l2c2-3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how a wave-cut platform forms.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Platform",
                statement: "Erosion at cliff base.",
              },
            ],
            steps: [
              { reasoning: "Mechanism.", marks: 1, markCode: "M" },
              { reasoning: "Cliff retreat.", marks: 1, markCode: "M" },
              { reasoning: "Result.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Waves erode rock at cliff base → undercutting → cliff collapses → cliff retreats inland → exposed rock platform at low tide, often with rock pools.",
            commonErrors: ["Depositional."],
          },
        },
        {
          id: "ciealegeo-q-u5l2c2-4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Compare 'hard' and 'soft' coastal management strategies.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Coastal management",
                statement: "Structural vs adaptive.",
              },
            ],
            steps: [
              { reasoning: "Hard strategies.", marks: 1, markCode: "M" },
              { reasoning: "Soft strategies.", marks: 1, markCode: "M" },
              { reasoning: "Comparison.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Hard (seawalls, groynes): immediate protection, costly, ecosystem damage, may worsen erosion. Soft (beach nourishment, managed retreat): sustainable, cheaper, but less certain protection.",
            commonErrors: ["Same type."],
          },
        },
        {
          id: "ciealegeo-q-u5l2c2-5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate 'managed retreat' as a coastal management strategy.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Managed retreat",
                statement: "Let coast erode.",
              },
            ],
            steps: [
              { reasoning: "Mechanism.", marks: 1, markCode: "M" },
              { reasoning: "Benefits.", marks: 1, markCode: "M" },
              { reasoning: "Costs.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Remove defences, let coast erode naturally — creates salt marshes, absorbs wave energy, sustainable; but requires land sacrifice, may displace communities, politically difficult.",
            commonErrors: ["Always best."],
          },
        },
        {
          id: "ciealegeo-q-u5l2c2-6",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is a 'bar'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Bar",
                statement: "Ridge across bay.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Formation.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Ridge of sand/gravel extending across bay or estuary mouth — may enclose lagoon; formed by longshore drift where coast curves or energy drops.",
            commonErrors: ["Spit confused."],
          },
        },
        {
          id: "ciealegeo-q-u5l2c2-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Groynes are used to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Stop all erosion" },
              { id: "b", text: "Deepen harbours" },
              { id: "c", text: "Trap sediment and widen beaches" },
              { id: "d", text: "Block waves completely" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "fact", name: "Groynes", statement: "Sediment traps." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** Trap sediment",
            commonErrors: ["Wave barriers."],
          },
        },
        {
          id: "ciealegeo-q-u5l2c2-8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two disadvantages of sea walls.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Sea wall limits",
                statement: "Cost, reflection, squeeze.",
              },
            ],
            steps: [
              { reasoning: "Two valid.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 2, markCode: "A" },
            ],
            finalAnswer:
              "e.g. expensive to build/maintain and reflect wave energy → scour at base, accelerate erosion; also cause 'coastal squeeze' (beach disappears).",
            commonErrors: ["Advantages only."],
          },
        },
        {
          id: "ciealegeo-q-u5l2c2-9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why do salt marshes develop behind spits or bars?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Salt marsh",
                statement: "Sheltered mudflat.",
              },
            ],
            steps: [
              { reasoning: "Conditions.", marks: 1, markCode: "M" },
              { reasoning: "Vegetation.", marks: 1, markCode: "M" },
              { reasoning: "Value.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Spits/bars shelter shallow water → mud deposition → salt-tolerant vegetation colonises → marsh forms; valuable habitat, flood buffer, carbon sink.",
            commonErrors: ["Exposed coast."],
          },
        },
        {
          id: "ciealegeo-q-u5l2c2-10",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Analyse the concept of 'coastal squeeze' and its implications.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Coastal squeeze",
                statement: "Defence vs sea level.",
              },
            ],
            steps: [
              { reasoning: "Mechanism.", marks: 1, markCode: "M" },
              { reasoning: "Consequences.", marks: 1, markCode: "M" },
              { reasoning: "Implications.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Sea level rise + fixed defences → beach squeezed between wall and sea → sediment loss → wall undermined; requires beach nourishment, managed retreat, or rising defences — escalating costs.",
            commonErrors: ["No problem."],
          },
        },
        {
          id: "ciealegeo-q-u5l2c2-11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'stack' is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "An isolated pillar of rock separated from the headland" },
              { id: "b", text: "A collapsed arch section" },
              { id: "c", text: "A ridge of sand across a bay" },
              { id: "d", text: "A submerged rock shelf" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Stack", statement: "Isolated pillar." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Isolated pillar",
            commonErrors: ["Stump confused."],
          },
        },
        {
          id: "ciealegeo-q-u5l2c2-12",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is a 'geo'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Geo",
                statement: "Narrow sea inlet.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Formation.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Narrow inlet or cleft cut through a headland by wave erosion along joints/faults — often leads to caves or arches on the headland.",
            commonErrors: ["Depositional feature."],
          },
        },
        {
          id: "ciealegeo-q-u5l2c2-13",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is 'beach nourishment'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Beach nourishment",
                statement: "Sediment addition.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Purpose.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Adding sand/gravel to beaches — replenishes eroded sediment, widens protective buffer against waves; soft engineering, needs ongoing renewal.",
            commonErrors: ["Hard engineering."],
          },
        },
        {
          id: "ciealegeo-q-u5l2c2-14",
          difficulty: "core",
          totalMarks: 4,
          stem: "Compare groynes and breakwaters as coastal management.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Groynes vs breakwaters",
                statement: "Beach trap vs wave barrier.",
              },
            ],
            steps: [
              { reasoning: "Groynes: function/effects.", marks: 1, markCode: "M" },
              { reasoning: "Breakwaters: function/effects.", marks: 1, markCode: "M" },
              { reasoning: "Comparison.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Groynes trap longshore-drift sediment to widen beaches but starve downdrift areas. Breakwaters shelter harbours/coasts by dissipating wave energy but can cause lee-side deposition and downdrift erosion.",
            commonErrors: ["Same structure."],
          },
        },
        {
          id: "ciealegeo-q-u5l2c2-15",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Analyse how longshore drift can both benefit and harm coastal areas.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Longshore drift impacts",
                statement: "Transport + redistribution.",
              },
            ],
            steps: [
              { reasoning: "Benefits.", marks: 1, markCode: "M" },
              { reasoning: "Harms.", marks: 1, markCode: "M" },
              { reasoning: "Examples.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Builds beaches, spits, dunes (natural protection) and replenishes eroded areas; but causes downdrift erosion when trapped by defences, silts harbours, requires management — redistribution not loss.",
            commonErrors: ["Only damage."],
          },
        },
        {
          id: "ciealegeo-q-u5l2c2-16",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how storm events affect coastal landforms.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Storm impacts",
                statement: "Energy spikes.",
              },
            ],
            steps: [
              { reasoning: "Erosion effect.", marks: 1, markCode: "M" },
              { reasoning: "Deposition effect.", marks: 1, markCode: "M" },
              { reasoning: "Long-term role.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Storm waves deliver exceptional energy → rapid cliff retreat, platform erosion, overwash of barriers; but also deposit sediment, rebuilding beaches/spits — episodic events shape coasts over time.",
            commonErrors: ["Only erosion."],
          },
        },
      ],
    },
  ],
};
