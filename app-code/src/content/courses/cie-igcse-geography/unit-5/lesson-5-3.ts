import type { Lesson } from "../../../types.ts";

export const lesson53: Lesson = {
  id: "cieigeo-u5-lesson-5-3",
  code: "5-3",
  title: "Glaciation and Periglacial Processes",
  goal: "I CAN explain glacial erosion, transport, deposition and periglacial landforms.",
  standards: [
    "Cambridge IGCSE Geography 0460",
    "Unit 5: physical geography depth",
  ],
  vocabulary: [
    { term: "Glacier", definition: "Slow-moving mass of ice and snow." },
    {
      term: "Plucking",
      definition: "Ice freezes onto rock and pulls it away.",
    },
    { term: "Abrasion", definition: "Rock debris scrapes glacier bed." },
    { term: "Till", definition: "Unsorted glacial sediment." },
    { term: "Moraine", definition: "Ridge of glacial debris." },
    {
      term: "Periglacial",
      definition: "Areas near glaciers with freeze-thaw.",
    },
  ],
  concepts: [
    {
      id: "cieigeo-u5l3-c1-processes",
      title: "Glacial processes and landforms",
      skill: "Explain glacial erosion, transport and depositional landforms.",
      lesson: {
        sections: [
          {
            heading: "Glacial erosion and transport",
            body: "**Plucking**: meltwater freezes onto bedrock, glacier pulls rock fragments away — jagged surfaces. **Abrasion**: debris frozen in ice scrapes/smooths bedrock — polished surfaces with striations. **Transport**: debris carried on surface (supraglacial), inside (englacial), or at base (subglacial); sorted by size.",
          },
          {
            heading: "Landforms",
            body: "Erosional: **cirques** (armchair hollows), **aretes** (knife-edge ridges), **pyramidal peaks**, **U-shaped valleys**, **truncated spurs**, **hanging valleys**. Depositional: **moraines** (lateral, medial, terminal, recessional), **drumlins** (egg-shaped hills), **erratics** (boulders from distant sources), **outwash plains**.",
          },
        ],
        keyFormulas: [
          { name: "Plucking", statement: "Ice pulls rock" },
          { name: "Abrasion", statement: "Debris scrapes bed" },
          { name: "Till", statement: "Unsorted deposit" },
        ],
        workedExample: {
          problem: "How does plucking differ from abrasion?",
          solution:
            "Plucking: ice freezes onto rock, pulls fragments away — leaves jagged surface. Abrasion: embedded debris scrapes/smooths bedrock — polished surface with striations.",
        },
      },
      questions: [
        {
          id: "cieigeo-q-u5l3c1-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Plucking' in glaciation is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Debris scraping bedrock" },
              { id: "b", text: "Ice freezing onto rock and pulling it away" },
              { id: "c", text: "Meltwater flow" },
              { id: "d", text: "Sediment sorting" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "fact", name: "Plucking", statement: "Ice pulls rock." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Ice pulls rock",
            commonErrors: ["Abrasion."],
          },
        },
        {
          id: "cieigeo-q-u5l3c1-2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name two glacial erosional landforms.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Erosional",
                statement: "Cirques+valleys.",
              },
            ],
            steps: [
              { reasoning: "Two valid.", marks: 1, markCode: "M" },
              { reasoning: "Each defined.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "e.g. cirque (armchair hollow at glacier head) and U-shaped valley (glacial trough) — also aretes, pyramidal peaks, truncated spurs.",
            commonErrors: ["Depositional."],
          },
        },
        {
          id: "cieigeo-q-u5l3c1-3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the difference between plucking and abrasion.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Plucking vs abrasion",
                statement: "Two mechanisms.",
              },
            ],
            steps: [
              { reasoning: "Plucking.", marks: 1, markCode: "M" },
              { reasoning: "Abrasion.", marks: 1, markCode: "M" },
              { reasoning: "Surface difference.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Plucking: meltwater freezes rock to ice, glacier pulls fragments — jagged surface. Abrasion: debris embedded in ice scrapes bedrock — smooth/polished surface with striations.",
            commonErrors: ["Same process."],
          },
        },
        {
          id: "cieigeo-q-u5l3c1-4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain how a U-shaped valley forms.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "U-valley",
                statement: "Glacial erosion.",
              },
            ],
            steps: [
              { reasoning: "Mechanism.", marks: 1, markCode: "M" },
              { reasoning: "Process.", marks: 1, markCode: "M" },
              { reasoning: "Result.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Glacier flows down existing V-shaped river valley — plucking erodes back walls, abrasion smooths/floors bed; valley widens and deepens into U-shape; hanging valleys where tributary glaciers didn't erode as deep.",
            commonErrors: ["River forms."],
          },
        },
        {
          id: "cieigeo-q-u5l3c1-5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate the evidence for past glaciation in temperate regions.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Glacial evidence",
                statement: "Landforms.",
              },
            ],
            steps: [
              { reasoning: "Erosional evidence.", marks: 1, markCode: "M" },
              { reasoning: "Depositional evidence.", marks: 1, markCode: "M" },
              { reasoning: "Limitations.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "U-shaped valleys, cirques, polished rock, moraines, erratics, drumlins — clear signatures; but distinguishing glacial vs other erosion can be difficult; multiple lines of evidence needed for confidence.",
            commonErrors: ["No evidence."],
          },
        },
        {
          id: "cieigeo-q-u5l3c1-6",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'till' in glaciation?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Till", statement: "Unsorted." },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Characteristic.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Unsorted glacial sediment deposited directly by ice — mixture of boulders to clay, unstratified; forms moraines, drumlins; contrast with sorted outwash.",
            commonErrors: ["Sorted sediment."],
          },
        },
        {
          id: "cieigeo-q-u5l3c1-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'cirque' is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A ridge between valleys" },
              { id: "b", text: "An armchair-shaped hollow at glacier head" },
              { id: "c", text: "A depositional hill" },
              { id: "d", text: "A meltwater channel" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "fact", name: "Cirque", statement: "Hollow." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Armchair hollow",
            commonErrors: ["Other feature."],
          },
        },
        {
          id: "cieigeo-q-u5l3c1-8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two depositional glacial landforms.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Depositional",
                statement: "Moraines+drumlins.",
              },
            ],
            steps: [
              { reasoning: "Two valid.", marks: 1, markCode: "M" },
              { reasoning: "Each defined.", marks: 2, markCode: "A" },
            ],
            finalAnswer:
              "e.g. moraine (ridge of glacial debris) and drumlin (egg-shaped streamlined hill) — also erratics, outwash plains; formed when ice melts/deposits till.",
            commonErrors: ["Erosional."],
          },
        },
        {
          id: "cieigeo-q-u5l3c1-9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how 'erratics' provide evidence of glaciation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Erratics",
                statement: "Transported rocks.",
              },
            ],
            steps: [
              { reasoning: "Definition.", marks: 1, markCode: "M" },
              { reasoning: "Evidence.", marks: 1, markCode: "M" },
              { reasoning: "Implication.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Boulders of rock type different from local geology — must have been transported by glacier from distant source; proves ice moved across area, indicates direction and extent.",
            commonErrors: ["Local rocks."],
          },
        },
        {
          id: "cieigeo-q-u5l3c1-10",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Analyse the impact of glaciation on landscapes and human settlement.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Glacial impact",
                statement: "Landform+settlement.",
              },
            ],
            steps: [
              { reasoning: "Landscape.", marks: 1, markCode: "M" },
              { reasoning: "Settlement.", marks: 1, markCode: "M" },
              { reasoning: "Evidence.", marks: 1, markCode: "A" },
              { reasoning: "Weighs all.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Creates dramatic landscapes (fjords, lakes, valleys) — fertile soils from till, good drainage; but thin soils in mountains, limited arable land; glaciated areas often sparsely populated except valleys.",
            commonErrors: ["No impact."],
          },
        },
        {
          id: "cieigeo-q-u5l3c1-11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Drumlins' are:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Ridges of debris at glacier edge" },
              { id: "b", text: "Egg-shaped streamlined hills of till" },
              { id: "c", text: "Frozen boulders" },
              { id: "d", text: "Meltwater channels" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Drumlin",
                statement: "Streamlined till hill.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Egg-shaped till hills",
            commonErrors: ["Moraine."],
          },
        },
        {
          id: "cieigeo-q-u5l3c1-12",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name two types of moraine.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Moraine types",
                statement: "Debris ridges.",
              },
            ],
            steps: [
              { reasoning: "Two valid.", marks: 1, markCode: "M" },
              { reasoning: "Each defined.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "e.g. lateral moraine (debris along glacier edges) and terminal moraine (ridge marking glacier's maximum advance) — also medial, recessional.",
            commonErrors: ["Erosional features."],
          },
        },
        {
          id: "cieigeo-q-u5l3c1-13",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the difference between lateral and terminal moraines.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "Moraine types",
                statement: "Position and origin.",
              },
            ],
            steps: [
              { reasoning: "Lateral.", marks: 1, markCode: "M" },
              { reasoning: "Terminal.", marks: 1, markCode: "M" },
              { reasoning: "Contrast.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Lateral moraine: debris accumulated along sides of glacier from valley walls — runs parallel to ice flow. Terminal moraine: ridge of till deposited at glacier's snout marking maximum advance — perpendicular to flow.",
            commonErrors: ["Same thing."],
          },
        },
        {
          id: "cieigeo-q-u5l3c1-14",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain how hanging valleys form.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Hanging valley",
                statement: "Tributary erosion difference.",
              },
            ],
            steps: [
              { reasoning: "Mechanism.", marks: 1, markCode: "M" },
              { reasoning: "Process.", marks: 1, markCode: "M" },
              { reasoning: "Result.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Main glacier erodes deeper and wider than tributary glaciers — tributary valleys are left perched above the main U-shaped trough; waterfalls often form where tributary streams drop into the main valley.",
            commonErrors: ["River erosion only."],
          },
        },
        {
          id: "cieigeo-q-u5l3c1-15",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate the reliability of glacial landforms as evidence of past climates.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Palaeo-evidence",
                statement: "Landforms record ice extent.",
              },
            ],
            steps: [
              { reasoning: "Reliability.", marks: 1, markCode: "M" },
              { reasoning: "Limitations.", marks: 1, markCode: "M" },
              { reasoning: "Evidence.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Cirques, U-valleys, moraines and erratics clearly record ice extent and direction — strong evidence. But landforms may be modified by later erosion/weathering, dating is difficult, and similar features can form by other processes — best used with multiple lines of evidence.",
            commonErrors: ["Perfect record."],
          },
        },
        {
          id: "cieigeo-q-u5l3c1-16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Analyse how glacial deposition influences farming in formerly glaciated regions.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Till and farming",
                statement: "Soil fertility vs constraints.",
              },
            ],
            steps: [
              { reasoning: "Benefits.", marks: 1, markCode: "M" },
              { reasoning: "Constraints.", marks: 1, markCode: "M" },
              { reasoning: "Evidence.", marks: 1, markCode: "A" },
              { reasoning: "Weighs all.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Glacial till weathers into fertile, well-drained soils — good for crops and pasture in lowlands; but deposits are often thin, stony and poorly sorted in uplands, limiting arable land; drainage can be excessive on sandy outwash — farming success depends on deposit type and relief.",
            commonErrors: ["Uniform fertility."],
          },
        },
      ],
    },
    {
      id: "cieigeo-u5l3-c2-periglacial",
      title: "Periglacial processes and landforms",
      skill: "Explain freeze-thaw weathering and periglacial landforms.",
      lesson: {
        sections: [
          {
            heading: "Freeze-thaw weathering",
            body: "Water seeps into rock cracks, freezes and expands (~9% volume increase) — repeated freeze-thaw cycles widen cracks, break rock into angular fragments (**frost shattering**). Produces **scree/talus** slopes below cliffs. Requires temperatures fluctuating around 0°C — periglacial zones near ice margins.",
          },
          {
            heading: "Periglacial landforms",
            body: "**Patterned ground**: sorted stones in circles/polygons from freeze-thaw sorting. **Pingos**: ice-cored hills from frozen water expanding. **Thermokarst**: irregular terrain from thawing permafrost. **Nivation hollows**: small depressions from snow patch erosion. Periglacial processes shape cold, non-glaciated landscapes.",
          },
        ],
        keyFormulas: [
          { name: "Freeze-thaw", statement: "Ice expands 9%" },
          { name: "Scree", statement: "Frost-shattered debris" },
          { name: "Pingo", statement: "Ice-cored hill" },
        ],
        workedExample: {
          problem: "Why does freeze-thaw require temperatures around 0°C?",
          solution:
            "Needs repeated freezing AND thawing — water must freeze (expand, crack rock) then thaw (repeat); constant cold (permafrost) or constant warmth doesn't create cycles; periglacial zones have seasonal fluctuations.",
        },
      },
      questions: [
        {
          id: "cieigeo-q-u5l3c2-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Freeze-thaw weathering occurs because water:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Expands when it freezes" },
              { id: "b", text: "Flows downhill" },
              { id: "c", text: "Evaporates quickly" },
              { id: "d", text: "Dissolves rock" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "fact", name: "Freeze-thaw", statement: "Expansion." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Expands freezing",
            commonErrors: ["Other process."],
          },
        },
        {
          id: "cieigeo-q-u5l3c2-2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is 'periglacial'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Periglacial",
                statement: "Near-glacier.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Conditions.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Areas adjacent to glaciers/ice sheets with cold climate and freeze-thaw cycles — not glaciated but affected by cold processes; shaped by frost weathering, patterned ground.",
            commonErrors: ["Glaciated."],
          },
        },
        {
          id: "cieigeo-q-u5l3c2-3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how freeze-thaw produces scree slopes.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Scree", statement: "Frost debris." },
            ],
            steps: [
              { reasoning: "Mechanism.", marks: 1, markCode: "M" },
              { reasoning: "Process.", marks: 1, markCode: "M" },
              { reasoning: "Result.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Freeze-thaw breaks rock fragments from cliff — gravity pulls debris downhill accumulating at base as angular scree/talus slope; repeated cycles widen and build slope.",
            commonErrors: ["Water erosion."],
          },
        },
        {
          id: "cieigeo-q-u5l3c2-4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Describe two periglacial landforms.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Periglacial",
                statement: "Pingos+patterned.",
              },
            ],
            steps: [
              { reasoning: "Two valid.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 3, markCode: "A" },
            ],
            finalAnswer:
              "e.g. pingos (ice-cored hills from expanding frozen water) and patterned ground (sorted stones in circles/polygons from freeze-thaw) — also thermokarst, nivation hollows.",
            commonErrors: ["Glacial landforms."],
          },
        },
        {
          id: "cieigeo-q-u5l3c2-5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Analyse the impact of climate change on periglacial environments.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Climate change",
                statement: "Thawing.",
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
              "Rising temperatures reduce freeze-thaw cycles → less frost shattering; permafrost thaws → thermokarst, infrastructure damage, released methane (greenhouse gas); periglacial processes slow/change — landscape destabilises.",
            commonErrors: ["No impact."],
          },
        },
        {
          id: "cieigeo-q-u5l3c2-6",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is a 'pingo'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Pingo", statement: "Ice hill." },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Formation.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Ice-cored hill formed when frozen water expands pushing ground up — can grow to 70m high; found in periglacial areas (e.g. Arctic Canada); collapses when ice melts.",
            commonErrors: ["Sand dune."],
          },
        },
        {
          id: "cieigeo-q-u5l3c2-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Freeze-thaw weathering is most effective when temperatures:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Stay below -10°C" },
              { id: "b", text: "Fluctuate around 0°C" },
              { id: "c", text: "Never change" },
              { id: "d", text: "Stay above 30°C" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "fact", name: "Freeze-thaw", statement: "Cycles." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Around 0°C",
            commonErrors: ["Constant temp."],
          },
        },
        {
          id: "cieigeo-q-u5l3c2-8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two reasons permafrost is vulnerable to climate change.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "fact", name: "Permafrost", statement: "Thawing." },
            ],
            steps: [
              { reasoning: "Two valid.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 2, markCode: "A" },
            ],
            finalAnswer:
              "e.g. thawing ground destabilises infrastructure (buildings, roads collapse) and releases stored methane/CO2 (greenhouse gases) accelerating warming — positive feedback loop.",
            commonErrors: ["Stable."],
          },
        },
        {
          id: "cieigeo-q-u5l3c2-9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain 'patterned ground' formation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Patterned ground",
                statement: "Sorting.",
              },
            ],
            steps: [
              { reasoning: "Mechanism.", marks: 1, markCode: "M" },
              { reasoning: "Process.", marks: 1, markCode: "M" },
              { reasoning: "Pattern.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Freeze-thaw cycles sort stones by size — larger stones pushed to edges, fines centre; repeated cycles create circles, polygons, stripes; distinctive periglacial feature.",
            commonErrors: ["Random."],
          },
        },
        {
          id: "cieigeo-q-u5l3c2-10",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate the importance of periglacial processes in shaping cold landscapes.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Periglacial importance",
                statement: "Process significance.",
              },
            ],
            steps: [
              { reasoning: "Erosion.", marks: 1, markCode: "M" },
              { reasoning: "Deposition.", marks: 1, markCode: "M" },
              { reasoning: "Evidence.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Freeze-thaw produces scree slopes, patterned ground, pingos, thermokarst — shapes entire periglacial landscapes; slower than glacial but significant over time; prepares ground for glacial erosion when ice advances.",
            commonErrors: ["Minor role."],
          },
        },
        {
          id: "cieigeo-q-u5l3c2-11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Scree slopes are mainly composed of:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Organic soil" },
              { id: "b", text: "Fine silt only" },
              { id: "c", text: "Angular rock fragments" },
              { id: "d", text: "Rounded river pebbles" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Scree",
                statement: "Frost-shattered debris.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Angular fragments",
            commonErrors: ["River gravel."],
          },
        },
        {
          id: "cieigeo-q-u5l3c2-12",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is 'permafrost' and why is it important in periglacial areas?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Permafrost",
                statement: "Permanently frozen ground.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Importance.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Ground that remains frozen year-round — shapes periglacial landscapes, supports infrastructure, stores carbon; thawing causes thermokarst and infrastructure collapse.",
            commonErrors: ["Seasonal frost only."],
          },
        },
        {
          id: "cieigeo-q-u5l3c2-13",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how thermokarst terrain forms.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Thermokarst",
                statement: "Thaw irregularity.",
              },
            ],
            steps: [
              { reasoning: "Mechanism.", marks: 1, markCode: "M" },
              { reasoning: "Process.", marks: 1, markCode: "M" },
              { reasoning: "Result.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Permafrost thaws — ground subsides irregularly, collapsing into hummocks and depressions; water collects forming ponds/bogs; landscape becomes chaotic 'thermokarst' terrain.",
            commonErrors: ["Erosion by water."],
          },
        },
        {
          id: "cieigeo-q-u5l3c2-14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two conditions needed for effective freeze-thaw weathering.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Freeze-thaw conditions",
                statement: "Temperature + moisture.",
              },
            ],
            steps: [
              { reasoning: "Two valid.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 2, markCode: "A" },
            ],
            finalAnswer:
              "e.g. temperatures fluctuating around 0°C (repeated freeze-thaw cycles) and water available in rock cracks/joints — also frequent cycles over time; constant cold or warm prevents the process.",
            commonErrors: ["Any cold."],
          },
        },
        {
          id: "cieigeo-q-u5l3c2-15",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate the threats that permafrost thaw poses to human infrastructure.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Permafrost and infrastructure",
                statement: "Subsidence risk.",
              },
            ],
            steps: [
              { reasoning: "Building damage.", marks: 1, markCode: "M" },
              { reasoning: "Transport damage.", marks: 1, markCode: "M" },
              { reasoning: "Evidence.", marks: 1, markCode: "A" },
              { reasoning: "Weighs all.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Thawing ground loses strength — buildings tilt/collapse, roads and pipelines deform and break, foundations fail; costly repairs and engineering solutions (piles, refrigeration) needed; accelerating as climate warms — major challenge for Arctic communities.",
            commonErrors: ["No threat."],
          },
        },
        {
          id: "cieigeo-q-u5l3c2-16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Analyse the relationship between periglacial and glacial processes in cold environments.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Periglacial-glacial link",
                statement: "Sequential processes.",
              },
            ],
            steps: [
              { reasoning: "Periglacial role.", marks: 1, markCode: "M" },
              { reasoning: "Glacial role.", marks: 1, markCode: "M" },
              { reasoning: "Evidence.", marks: 1, markCode: "A" },
              { reasoning: "Weighs all.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Freeze-thaw breaks rock and produces debris/scree — supplies loose material that glaciers later erode, transport and deposit; periglacial zones often border ice margins; when climate cools, periglacial processes prepare landscapes for glaciation — sequential, complementary cold-climate processes.",
            commonErrors: ["Unrelated."],
          },
        },
      ],
    },
  ],
};
