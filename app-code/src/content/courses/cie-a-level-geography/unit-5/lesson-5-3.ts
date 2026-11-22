import type { Lesson } from "../../../types.ts";

export const lesson53: Lesson = {
  id: "ciealegeo-u5-lesson-5-3",
  code: "5-3",
  title: "Glaciation, Glacial Landforms and Periglacial Processes",
  goal: "I CAN explain glacial erosion and deposition, identify glacial landforms and analyse periglacial processes.",
  standards: [
    "Cambridge A Level Geography 9696",
    "Unit 5: physical geography in depth",
  ],
  vocabulary: [
    {
      term: "Glacial erosion",
      definition: "Plucking and abrasion by moving ice.",
    },
    {
      term: "Plucking",
      definition: "Ice freezes onto bedrock and pulls it away.",
    },
    { term: "Abrasion", definition: "Embedded debris grinds bedrock." },
    { term: "Moraine", definition: "Glacial sediment deposit." },
    { term: "Drumlin", definition: "Streamlined hill of glacial till." },
    {
      term: "Periglacial",
      definition: "Cold, non-glacial environments near ice.",
    },
  ],
  concepts: [
    {
      id: "ciealegeo-u5l3-c1-erosion",
      title: "Glacial erosion and transport",
      skill: "Explain plucking, abrasion and glacial transport processes.",
      lesson: {
        sections: [
          {
            heading: "Erosion processes",
            body: "**Plucking**: meltwater freezes onto jointed bedrock → ice moves → pulls rock fragments away. Most effective on jointed rock. **Abrasion**: debris embedded in ice base grinds bedrock → polished surfaces, striations. Both dominant where ice is thick, fast-moving, and debris-rich.",
          },
          {
            heading: "Transport and deposition",
            body: "Ice transports debris (till) — supraglacial (on surface), englacial (within), subglacial (at base). Deposition occurs when ice melts: **terminal moraine** (ice margin), **lateral moraine** (valley sides), **medial moraine** (merged glaciers), **ground moraine** (beneath ice). Till is unsorted, unstratified.",
          },
        ],
        keyFormulas: [
          { name: "Plucking", statement: "Freeze-on + pull-away" },
          {
            name: "Abrasion",
            statement: "Debris grinding → polish/striations",
          },
          { name: "Till", statement: "Unsorted glacial sediment" },
        ],
        workedExample: {
          problem:
            "Why are glacial valleys U-shaped while river valleys are V-shaped?",
          solution:
            "Glaciers erode laterally AND vertically → wide flat floor, steep sides → U-shape; rivers erode vertically → V-shape.",
        },
      },
      questions: [
        {
          id: "ciealegeo-q-u5l3c1-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Plucking occurs when:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Wind erodes" },
              { id: "b", text: "Debris grinds rock" },
              { id: "c", text: "Water dissolves rock" },
              { id: "d", text: "Ice freezes onto bedrock and pulls it away" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Plucking",
                statement: "Freeze-pull.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Freeze-pull",
            commonErrors: ["Confusing abrasion."],
          },
        },
        {
          id: "ciealegeo-q-u5l3c1-2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Distinguish plucking from abrasion.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Erosion types",
                statement: "Pull vs grind.",
              },
            ],
            steps: [
              { reasoning: "Plucking defined.", marks: 1, markCode: "M" },
              { reasoning: "Abrasion defined.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Plucking: ice freezes onto jointed rock, pulls fragments away. Abrasion: embedded debris grinds bedrock → polish, striations.",
            commonErrors: ["Conflating."],
          },
        },
        {
          id: "ciealegeo-q-u5l3c1-3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why glacial valleys are U-shaped.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "U-shaped valley",
                statement: "Lateral + vertical erosion.",
              },
            ],
            steps: [
              { reasoning: "Mechanism.", marks: 1, markCode: "M" },
              { reasoning: "Contrast river.", marks: 1, markCode: "M" },
              { reasoning: "Result.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Glaciers erode laterally AND vertically → wide flat floor, steep sides → U-shape; rivers erode mainly vertically → V-shape.",
            commonErrors: ["Same as river."],
          },
        },
        {
          id: "ciealegeo-q-u5l3c1-4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Name and describe three types of moraine.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Moraines",
                statement: "Lateral, medial, terminal.",
              },
            ],
            steps: [
              { reasoning: "Three named.", marks: 1, markCode: "M" },
              { reasoning: "Each described.", marks: 3, markCode: "A" },
            ],
            finalAnswer:
              "Lateral: valley sides. Medial: merged glaciers centre. Terminal: ice margin at maximum advance — all unsorted till.",
            commonErrors: ["Less than three."],
          },
        },
        {
          id: "ciealegeo-q-u5l3c1-5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Analyse the conditions needed for effective glacial erosion.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Erosion conditions",
                statement: "Ice thickness, debris, joints.",
              },
            ],
            steps: [
              { reasoning: "Conditions.", marks: 1, markCode: "M" },
              { reasoning: "Rock factors.", marks: 1, markCode: "M" },
              { reasoning: "Ice factors.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Thick fast-moving ice, abundant basal debris, jointed/fractured bedrock → maximum erosion; thin stagnant ice or massive rock → limited erosion.",
            commonErrors: ["Any ice erodes."],
          },
        },
        {
          id: "ciealegeo-q-u5l3c1-6",
          difficulty: "core",
          totalMarks: 2,
          stem: "What are 'striations'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Striations",
                statement: "Scratch marks.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Cause.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Linear scratches on bedrock — caused by debris embedded in glacier base grinding as ice moves; indicate former ice flow direction.",
            commonErrors: ["Depositional feature."],
          },
        },
        {
          id: "ciealegeo-q-u5l3c1-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Abrasion produces:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Drumlins" },
              { id: "b", text: "Polished surfaces and striations" },
              { id: "c", text: "Eskers" },
              { id: "d", text: "Moraines" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Abrasion",
                statement: "Polish + striations.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Polish + striations",
            commonErrors: ["Wrong feature."],
          },
        },
        {
          id: "ciealegeo-q-u5l3c1-8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two types of glacial till deposit.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Till types",
                statement: "Basal vs ablation.",
              },
            ],
            steps: [
              { reasoning: "Two named.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 2, markCode: "A" },
            ],
            finalAnswer:
              "e.g. basal till (deposited beneath moving ice, compacted) and ablation till (deposited as ice melts at surface, loose).",
            commonErrors: ["Sorted deposits."],
          },
        },
        {
          id: "ciealegeo-q-u5l3c1-9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why is glacial till 'unsorted' and 'unstratified'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Till",
                statement: "No water sorting.",
              },
            ],
            steps: [
              { reasoning: "Mechanism.", marks: 1, markCode: "M" },
              { reasoning: "Contrast fluvial.", marks: 1, markCode: "M" },
              { reasoning: "Implication.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Deposited directly by ice without water transport — no sorting by size, no layering; mixed clay to boulders in random arrangement.",
            commonErrors: ["Sorted like river."],
          },
        },
        {
          id: "ciealegeo-q-u5l3c1-10",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate the role of meltwater in glacial erosion and deposition.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Meltwater",
                statement: "Subglacial streams.",
              },
            ],
            steps: [
              { reasoning: "Erosion role.", marks: 1, markCode: "M" },
              { reasoning: "Deposition role.", marks: 1, markCode: "M" },
              { reasoning: "Landforms.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Meltwater erodes beneath ice (subglacial channels → eskers, tunnels) and deposits sorted sediment (outwash plains, kames) — distinct from unsorted till; significant landscape shaping.",
            commonErrors: ["Ice only."],
          },
        },
        {
          id: "ciealegeo-q-u5l3c1-11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Glacial till is best described as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Layered lake sediments" },
              { id: "b", text: "Wind-blown loess" },
              { id: "c", text: "Unsorted, unstratified sediment deposited by ice" },
              { id: "d", text: "Sorted sand and gravel from meltwater" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "fact", name: "Till", statement: "Unsorted deposit." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Unsorted till",
            commonErrors: ["Outwash confused."],
          },
        },
        {
          id: "ciealegeo-q-u5l3c1-12",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'supraglacial transport'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Supraglacial transport",
                statement: "Debris on ice surface.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Contrast.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Debris carried on the glacier surface — includes medial/lateral moraine material; contrasts with englacial (within) and subglacial (at base) transport.",
            commonErrors: ["Basal transport."],
          },
        },
        {
          id: "ciealegeo-q-u5l3c1-13",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a 'cirque' (corrie)?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Cirque",
                statement: "Hollow at valley head.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Formation.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Bowl-shaped hollow at the head of a valley — excavated by ice plucking/abrasion; often contains a tarn (lake) behind a moraine dam.",
            commonErrors: ["Depositional feature."],
          },
        },
        {
          id: "ciealegeo-q-u5l3c1-14",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain how the structure of bedrock affects glacial erosion.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Bedrock control",
                statement: "Joints vs massive rock.",
              },
            ],
            steps: [
              { reasoning: "Jointed rock effect.", marks: 1, markCode: "M" },
              { reasoning: "Massive rock effect.", marks: 1, markCode: "M" },
              { reasoning: "Process link.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Jointed/fractured rock → meltwater penetrates, freezes → plucking effective, blocks quarried out. Massive rock → plucking limited, abrasion produces polish/striations instead.",
            commonErrors: ["No rock control."],
          },
        },
        {
          id: "ciealegeo-q-u5l3c1-15",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate the relative importance of plucking and abrasion in glacial erosion.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Plucking vs abrasion",
                statement: "Volume vs surface.",
              },
            ],
            steps: [
              { reasoning: "Plucking contribution.", marks: 1, markCode: "M" },
              { reasoning: "Abrasion contribution.", marks: 1, markCode: "M" },
              { reasoning: "Conditions.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Plucking removes large blocks — dominant where rock is jointed, produces U-valleys, cirques; abrasion grinds surfaces — dominant with debris-rich ice, produces polish/striations. Both essential, relative importance varies with conditions.",
            commonErrors: ["One process only."],
          },
        },
        {
          id: "ciealegeo-q-u5l3c1-16",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why can glaciers transport sediment of all sizes?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Glacial transport",
                statement: "No sorting by water.",
              },
            ],
            steps: [
              { reasoning: "Mechanism.", marks: 1, markCode: "M" },
              { reasoning: "Contrast fluvial.", marks: 1, markCode: "M" },
              { reasoning: "Implication.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Ice moves as a solid — carries clay to boulders frozen into it; no water sorting → produces unsorted till; contrasted with rivers which sort by competence.",
            commonErrors: ["Sorted transport."],
          },
        },
      ],
    },
    {
      id: "ciealegeo-u5l3-c2-landforms",
      title: "Glacial depositional landforms and periglacial",
      skill:
        "Identify glacial depositional landforms and analyse periglacial processes.",
      lesson: {
        sections: [
          {
            heading: "Depositional landforms",
            body: "**Drumlins**: streamlined hills of till aligned with ice flow. **Eskers**: winding ridges of sorted sand/gravel from subglacial meltwater. **Kames**: mounds of sorted sediment. **Outwash plains**: braided river deposits beyond ice margin. **Erratics**: boulders transported far from source.",
          },
          {
            heading: "Periglacial processes",
            body: "**Freeze-thaw**: water expands in cracks → mechanical weathering → scree. **Solifluction**: saturated soil flows downhill over frozen layer → lobes/terraces. **Pingos**: ice-cored hills from frozen groundwater. **Patterned ground**: sorting by freeze-thaw → polygons, stripes.",
          },
        ],
        keyFormulas: [
          { name: "Drumlin", statement: "Streamlined till hill" },
          { name: "Esker", statement: "Subglacial meltwater ridge" },
          { name: "Solifluction", statement: "Soil flow over frozen ground" },
        ],
        workedExample: {
          problem: "What causes drumlins to be elongated?",
          solution:
            "Ice moulds till into streamlined shapes aligned with flow direction — steep upstream (stoss), gentle downstream (lee) — like inverted spoon.",
        },
      },
      questions: [
        {
          id: "ciealegeo-q-u5l3c2-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Drumlins are:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Meltwater channels" },
              { id: "b", text: "Volcanic features" },
              { id: "c", text: "Erosional valleys" },
              { id: "d", text: "Streamlined hills of glacial till" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Drumlin", statement: "Till hill." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Till hills",
            commonErrors: ["Wrong feature."],
          },
        },
        {
          id: "ciealegeo-q-u5l3c2-2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is an 'esker'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Esker",
                statement: "Meltwater ridge.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Formation.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Winding ridge of sorted sand/gravel — deposited by meltwater flowing in subglacial tunnel; may extend many km.",
            commonErrors: ["Till deposit."],
          },
        },
        {
          id: "ciealegeo-q-u5l3c2-3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain 'solifluction' and where it occurs.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Solifluction",
                statement: "Soil flow.",
              },
            ],
            steps: [
              { reasoning: "Mechanism.", marks: 1, markCode: "M" },
              { reasoning: "Conditions.", marks: 1, markCode: "M" },
              { reasoning: "Landforms.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Saturated soil flows slowly downhill over impermeable frozen layer — occurs in periglacial areas; creates lobes, sheets, terraced slopes.",
            commonErrors: ["Rapid flow."],
          },
        },
        {
          id: "ciealegeo-q-u5l3c2-4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Distinguish 'till' from 'outwash' deposits.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Till vs outwash",
                statement: "Unsorted vs sorted.",
              },
            ],
            steps: [
              { reasoning: "Till defined.", marks: 1, markCode: "M" },
              { reasoning: "Outwash defined.", marks: 1, markCode: "M" },
              { reasoning: "Comparison.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Till: unsorted, unstratified, deposited by ice directly. Outwash: sorted, stratified, deposited by meltwater streams — finer downstream.",
            commonErrors: ["Same deposit."],
          },
        },
        {
          id: "ciealegeo-q-u5l3c2-5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate periglacial processes as indicators of past climate.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Periglacial indicators",
                statement: "Past cold climates.",
              },
            ],
            steps: [
              { reasoning: "Features.", marks: 1, markCode: "M" },
              { reasoning: "Interpretation.", marks: 1, markCode: "M" },
              { reasoning: "Limitations.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Periglacial features (patterned ground, solifluction lobes) indicate past mean annual temps below 0°C — useful palaeoclimate proxies but require careful dating.",
            commonErrors: ["Current climate only."],
          },
        },
        {
          id: "ciealegeo-q-u5l3c2-6",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is a 'pingo'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Pingo",
                statement: "Ice-cored hill.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Formation.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Hilly mound with ice core — forms when groundwater freezes and expands, pushing soil upward; occurs in permafrost areas.",
            commonErrors: ["Volcanic feature."],
          },
        },
        {
          id: "ciealegeo-q-u5l3c2-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Patterned ground forms by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Freeze-thaw sorting of stones" },
              { id: "b", text: "River deposition" },
              { id: "c", text: "Glacial deposition" },
              { id: "d", text: "Wind erosion" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Patterned ground",
                statement: "Freeze-thaw sorting.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Freeze-thaw",
            commonErrors: ["Wrong process."],
          },
        },
        {
          id: "ciealegeo-q-u5l3c2-8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two differences between drumlins and eskers.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Drumlin vs esker",
                statement: "Till vs sorted.",
              },
            ],
            steps: [
              { reasoning: "Two differences.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 2, markCode: "A" },
            ],
            finalAnswer:
              "Drumlins: unsorted till, streamlined hills. Eskers: sorted sand/gravel, winding ridges — former from ice moulding, latter from meltwater deposition.",
            commonErrors: ["Same feature."],
          },
        },
        {
          id: "ciealegeo-q-u5l3c2-9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why do erratics indicate former ice movement?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Erratics",
                statement: "Transported boulders.",
              },
            ],
            steps: [
              { reasoning: "Mechanism.", marks: 1, markCode: "M" },
              { reasoning: "Evidence.", marks: 1, markCode: "M" },
              { reasoning: "Use.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Boulders of rock type foreign to local geology — transported by ice from distant source; indicate ice flow direction and former ice extent.",
            commonErrors: ["Local origin."],
          },
        },
        {
          id: "ciealegeo-q-u5l3c2-10",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Analyse the human impacts of glaciation and deglaciation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Glacial impacts",
                statement: "Landscape + resources.",
              },
            ],
            steps: [
              { reasoning: "Positive impacts.", marks: 1, markCode: "M" },
              { reasoning: "Negative impacts.", marks: 1, markCode: "M" },
              { reasoning: "Examples.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Glaciation created fertile soils, water resources, scenic landscapes, aggregate deposits; deglaciation caused sea level rise, flooding, loss of land — long-term consequences persist.",
            commonErrors: ["One-sided."],
          },
        },
        {
          id: "ciealegeo-q-u5l3c2-11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "An esker is formed by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Ice moulding of till into hills" },
              { id: "b", text: "Meltwater deposition in subglacial channels" },
              { id: "c", text: "Solifluction flow" },
              { id: "d", text: "Freeze-thaw sorting" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Esker",
                statement: "Meltwater ridge.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Meltwater channels",
            commonErrors: ["Drumlin confused."],
          },
        },
        {
          id: "ciealegeo-q-u5l3c2-12",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is an 'outwash plain'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Outwash plain",
                statement: "Meltwater deposits.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Formation.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Flat plain of sorted sand/gravel beyond the ice margin — deposited by braided meltwater streams; often pitted with kettle holes where buried ice melted.",
            commonErrors: ["Till plain."],
          },
        },
        {
          id: "ciealegeo-q-u5l3c2-13",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is 'freeze-thaw' weathering?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Freeze-thaw",
                statement: "Ice expansion.",
              },
            ],
            steps: [
              { reasoning: "Mechanism.", marks: 1, markCode: "M" },
              { reasoning: "Result.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Water in cracks freezes → expands ~9% → prises rock apart; repeated cycles → angular fragments, scree — dominant periglacial weathering process.",
            commonErrors: ["Chemical weathering."],
          },
        },
        {
          id: "ciealegeo-q-u5l3c2-14",
          difficulty: "core",
          totalMarks: 4,
          stem: "Compare kames and eskers.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Kames vs eskers",
                statement: "Mounds vs ridges.",
              },
            ],
            steps: [
              { reasoning: "Kames defined.", marks: 1, markCode: "M" },
              { reasoning: "Eskers defined.", marks: 1, markCode: "M" },
              { reasoning: "Comparison.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Both sorted meltwater deposits; kames are irregular mounds/hills from ice-marginal ponds, eskers are long winding ridges from subglacial tunnel streams — different depositional environments.",
            commonErrors: ["Same feature."],
          },
        },
        {
          id: "ciealegeo-q-u5l3c2-15",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Analyse the human impacts of glacial and periglacial landforms.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Landform-human link",
                statement: "Resources vs hazards.",
              },
            ],
            steps: [
              { reasoning: "Opportunities.", marks: 1, markCode: "M" },
              { reasoning: "Hazards/constraints.", marks: 1, markCode: "M" },
              { reasoning: "Examples.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Glacial deposits provide fertile soils, aggregates, water (tarns), hydroelectric sites; but U-valleys constrain transport, erratics complicate farming, permafrost limits construction — mixed legacy.",
            commonErrors: ["One-sided."],
          },
        },
        {
          id: "ciealegeo-q-u5l3c2-16",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the formation of a 'kame'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Kame",
                statement: "Ice-marginal deposition.",
              },
            ],
            steps: [
              { reasoning: "Mechanism.", marks: 1, markCode: "M" },
              { reasoning: "Sediment type.", marks: 1, markCode: "M" },
              { reasoning: "Result.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Sediment-laden meltwater ponds at ice margin deposit sorted sand/gravel in deltas/mounds as ice retreats → irregular hills of stratified sediment, often with kettle holes.",
            commonErrors: ["Till deposit."],
          },
        },
      ],
    },
  ],
};
