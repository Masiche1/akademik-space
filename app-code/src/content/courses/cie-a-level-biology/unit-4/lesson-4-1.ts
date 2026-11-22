import type { Lesson } from "../../../types.ts";

export const lesson411: Lesson = {
  id: "cial-b-u4-lesson-4-1",
  code: "4-1",
  title: "Transport in plants: xylem and phloem",
  goal: "I CAN describe xylem and phloem transport and factors affecting transpiration.",
  standards: ["9700 Unit 8: transport in plants"],
  vocabulary: [
    {
      term: "Xylem",
      definition:
        "Vascular tissue transporting water and minerals from roots to leaves.",
    },
    {
      term: "Phloem",
      definition:
        "Vascular tissue transporting sugars and amino acids (translocation).",
    },
    {
      term: "Transpiration",
      definition: "Loss of water vapour from leaves through stomata.",
    },
    {
      term: "Translocation",
      definition:
        "Transport of organic compounds in phloem from source to sink.",
    },
    {
      term: "Cohesion-tension",
      definition:
        "Water molecules stick together (cohesion) and to xylem walls (adhesion), pulled by transpiration.",
    },
    {
      term: "Stomata",
      definition:
        "Pores in leaf epidermis controlling gas exchange and water loss.",
    },
  ],
  concepts: [
    {
      id: "cial-b-u4-xylem",
      title: "Xylem transport",
      skill: "Explain how water moves from roots to leaves.",
      lesson: {
        sections: [
          {
            heading: "Xylem structure",
            body: "Xylem vessels are dead, hollow tubes with lignified walls — no end walls, continuous tubes. Lignin provides support and waterproofing. Water and dissolved minerals move upward.",
          },
          {
            heading: "Cohesion-tension theory",
            body: "Transpiration pulls water up: evaporation from leaf mesophyll creates tension; water molecules cohere (H-bonds) forming a continuous column; adhesion to xylem walls prevents breaking. Root pressure assists in some plants.",
          },
          {
            heading: "Factors affecting transpiration",
            body: "Rate increases with: light intensity (stomata open), temperature (faster evaporation), wind (removes humid air), low humidity. Decreases with: darkness, still air, high humidity.",
          },
        ],
        keyFormulas: [
          {
            name: "Xylem",
            statement: "Transpiration pulls water up via cohesion-tension.",
          },
        ],
        workedExample: {
          problem: "Why does wind increase transpiration rate?",
          solution:
            "Wind removes humid air near leaf surface, increasing water potential gradient → faster evaporation.",
        },
      },
      questions: [
        {
          id: "cial-b-u4-xy-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does xylem transport?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Hormones" },
              { id: "b", text: "Water and dissolved minerals" },
              { id: "c", text: "Sugars and amino acids" },
              { id: "d", text: "Oxygen" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Xylem",
                statement: "Water + minerals, roots to leaves.",
              },
            ],
            steps: [
              { reasoning: "Xylem = water/minerals.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Water and minerals",
            commonErrors: ["Confusing with phloem (sugars)."],
          },
        },
        {
          id: "cial-b-u4-xy-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is transpiration?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Transpiration",
                statement: "Loss of water vapour from leaves through stomata.",
              },
            ],
            steps: [
              {
                reasoning: "Water vapour lost from leaves.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Through stomata.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Loss of water vapour from leaves via stomata.",
            commonErrors: ["Confusing with translocation (phloem)."],
          },
        },
        {
          id: "cial-b-u4-xy-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the cohesion-tension theory of water transport.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Cohesion-tension",
                statement:
                  "Transpiration pulls water up; H-bonds hold column together.",
              },
            ],
            steps: [
              {
                reasoning: "Transpiration creates tension at top.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Water molecules cohere via H-bonds.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Adhesion to xylem walls prevents break.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Continuous column pulled upward.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Transpiration pulls water up; cohesion holds column.",
            commonErrors: ["Saying water is pushed up (that's root pressure)."],
          },
        },
        {
          id: "cial-b-u4-xy-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Xylem transport.",
          parts: [
            { label: "a", prompt: "What does xylem transport?", marks: 1 },
            { label: "b", prompt: "What is transpiration?", marks: 2 },
            { label: "c", prompt: "Explain cohesion-tension.", marks: 3 },
            {
              label: "d",
              prompt: "Name three factors increasing transpiration rate.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Xylem",
                statement: "Transport+transpiration+cohesion+factors.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Water + minerals.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Water vapour lost from leaves.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Through stomata.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Transpiration creates tension.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Cohesion via H-bonds.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Continuous column pulled up.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Any three of light, temp, wind, low humidity.",
                marks: 1,
                markCode: "M",
              },
              { part: "d", reasoning: "Three named.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "(a) water+minerals (b) water loss via stomata (c) cohesion-tension (d) light/temp/wind/humidity",
          },
        },
        {
          id: "cial-b-u4-xy-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which structural feature of xylem vessels best explains how they transport water efficiently?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They are living cells packed with cytoplasm" },
              { id: "b", text: "They are narrow and blocked by sieve plates" },
              { id: "c", text: "They are dead, hollow tubes with lignified walls and no end walls" },
              { id: "d", text: "They contain chloroplasts for photosynthesis" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Xylem vessel", statement: "Dead, hollow, lignified, continuous tubes." },
            ],
            steps: [
              { reasoning: "Xylem vessels are dead hollow tubes with lignified walls and no end walls.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Dead, hollow tubes with lignified walls",
            commonErrors: ["Confusing xylem vessels with living phloem cells."],
          },
        },
        {
          id: "cial-b-u4-xy-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is root pressure and how does it assist water transport in xylem?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Root pressure", statement: "Pressure from active ion uptake in roots pushing water up xylem." },
            ],
            steps: [
              { reasoning: "Active transport of ions into root cells lowers water potential.", marks: 1, markCode: "M" },
              { reasoning: "Water enters by osmosis, creating positive pressure that pushes sap upward.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Root pressure is osmotic pressure from ion uptake that pushes water up the xylem; it assists but is not the main force.",
            commonErrors: ["Saying root pressure is the main mechanism for tall trees."],
          },
        },
        {
          id: "cial-b-u4-xy-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Distinguish between cohesion and adhesion in the cohesion-tension theory.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Cohesion/adhesion", statement: "Cohesion = water-water attraction; adhesion = water-xylem wall attraction." },
            ],
            steps: [
              { reasoning: "Cohesion: hydrogen bonds between water molecules hold the column together.", marks: 1, markCode: "M" },
              { reasoning: "Adhesion: attraction between water and lignified xylem walls prevents the column breaking.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Cohesion holds the water column together; adhesion attaches it to xylem walls.",
            commonErrors: ["Reversing cohesion and adhesion."],
          },
        },
        {
          id: "cial-b-u4-xy-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which condition would DECREASE the rate of transpiration?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Strong wind" },
              { id: "b", text: "Bright light" },
              { id: "c", text: "High humidity" },
              { id: "d", text: "High temperature" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Transpiration factors", statement: "Rate falls in high humidity, darkness and still air." },
            ],
            steps: [
              { reasoning: "High humidity reduces the water potential gradient, slowing transpiration.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** High humidity",
            commonErrors: ["Picking a factor that increases transpiration."],
          },
        },
        {
          id: "cial-b-u4-xy-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain how increasing temperature affects the rate of transpiration.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Temperature and transpiration", statement: "Higher temperature increases evaporation rate." },
            ],
            steps: [
              { reasoning: "Higher temperature increases the kinetic energy of water molecules.", marks: 1, markCode: "M" },
              { reasoning: "Faster evaporation from mesophyll cells and stomata increases transpiration rate.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Higher temperature speeds evaporation, so transpiration rate increases.",
            commonErrors: ["Saying temperature has no effect on transpiration."],
          },
        },
        {
          id: "cial-b-u4-xy-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In bright daylight, stomata are usually open. What is the effect on transpiration?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Transpiration rate decreases" },
              { id: "b", text: "Transpiration rate increases" },
              { id: "c", text: "Transpiration is unaffected" },
              { id: "d", text: "Transpiration stops completely" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Stomata and transpiration", statement: "Open stomata allow water vapour loss." },
            ],
            steps: [
              { reasoning: "Open stomata in light increase water vapour loss, raising transpiration rate.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Transpiration rate increases",
            commonErrors: ["Thinking open stomata reduce water loss."],
          },
        },
        {
          id: "cial-b-u4-xy-q11",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how wind increases the rate of transpiration.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Wind and transpiration", statement: "Wind removes humid air, steepening the water potential gradient." },
            ],
            steps: [
              { reasoning: "Wind blows away the layer of humid air next to the leaf surface.", marks: 1, markCode: "M" },
              { reasoning: "This maintains a steep water potential gradient between leaf and air.", marks: 1, markCode: "M" },
              { reasoning: "Faster evaporation from mesophyll cells follows.", marks: 1, markCode: "M" },
              { reasoning: "Increased water loss through stomata raises transpiration rate.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Wind removes humid air → steeper gradient → faster evaporation → higher transpiration.",
            commonErrors: ["Saying wind 'pushes' water up the plant."],
          },
        },
        {
          id: "cial-b-u4-xy-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is the role of lignin in the walls of xylem vessels?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It carries sucrose between cells" },
              { id: "b", text: "It provides support and waterproofing" },
              { id: "c", text: "It catalyses the breakdown of glucose" },
              { id: "d", text: "It absorbs light for photosynthesis" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Lignin", statement: "Strengthens and waterproofs xylem walls." },
            ],
            steps: [
              { reasoning: "Lignin provides mechanical support and prevents water leaking from xylem.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Support and waterproofing",
            commonErrors: ["Confusing lignin with chlorophyll."],
          },
        },
        {
          id: "cial-b-u4-xy-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A student claims that water is 'pushed' up the xylem mainly by root pressure. Evaluate this claim.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Water transport forces", statement: "Cohesion-tension (transpiration pull) is the main force; root pressure assists." },
            ],
            steps: [
              { reasoning: "Root pressure exists and can push sap a short distance.", marks: 1, markCode: "M" },
              { reasoning: "However it is too weak to lift water to the top of tall trees.", marks: 1, markCode: "M" },
              { reasoning: "Transpiration pull via cohesion-tension is the dominant mechanism.", marks: 1, markCode: "M" },
              { reasoning: "Claim is therefore largely incorrect — transpiration pull, not root pressure.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Incorrect — transpiration pull (cohesion-tension) is the main force; root pressure only assists.",
            commonErrors: ["Agreeing with the claim without evidence."],
          },
        },
        {
          id: "cial-b-u4-xy-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which plant tissue is mainly responsible for transporting water from roots to leaves?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Phloem" },
              { id: "b", text: "Epidermis" },
              { id: "c", text: "Palisade mesophyll" },
              { id: "d", text: "Xylem" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Xylem", statement: "Transports water and minerals upward." },
            ],
            steps: [
              { reasoning: "Xylem carries water and dissolved minerals from roots to leaves.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Xylem",
            commonErrors: ["Confusing with phloem."],
          },
        },
        {
          id: "cial-b-u4-xy-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Describe the pathway of water from the soil to the leaf mesophyll cells.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Water pathway", statement: "Soil→root hair→root cortex→xylem→leaf mesophyll." },
            ],
            steps: [
              { reasoning: "Water enters root hair cells by osmosis.", marks: 1, markCode: "M" },
              { reasoning: "It passes through root cortex cells to the xylem vessels.", marks: 1, markCode: "M" },
              { reasoning: "It moves up the xylem by cohesion-tension to the leaf.", marks: 1, markCode: "M" },
              { reasoning: "It diffuses into mesophyll cells for photosynthesis.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Soil→root hair→root cortex→xylem→leaf mesophyll.",
            commonErrors: ["Stopping at the xylem or skipping the root hairs."],
          },
        },
        {
          id: "cial-b-u4-xy-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Xylem and transpiration.",
          parts: [
            { label: "a", prompt: "What does xylem transport?", marks: 1 },
            { label: "b", prompt: "Name two structural features of xylem vessels.", marks: 2 },
            { label: "c", prompt: "Explain how cohesion and adhesion move water upward.", marks: 3 },
            { label: "d", prompt: "Describe how wind and humidity affect transpiration rate.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Xylem", statement: "Transport+structure+cohesion-tension+factors." },
            ],
            steps: [
              { part: "a", reasoning: "Water and dissolved minerals.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Any two of dead/hollow/lignified/no end walls.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Two named correctly.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Transpiration creates tension at leaf.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Cohesion via H-bonds holds column.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Adhesion to walls prevents break; column pulled up.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Wind removes humid air → faster transpiration.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "High humidity lowers gradient → slower.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Both effects correctly linked to gradient.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) water+minerals (b) lignified/hollow (c) cohesion+adhesion pull (d) wind↑, humidity↓",
          },
        },
      ],
    },
    {
      id: "cial-b-u4-phloem",
      title: "Phloem transport and translocation",
      skill: "Explain how sugars are transported from source to sink.",
      lesson: {
        sections: [
          {
            heading: "Phloem structure",
            body: "Phloem consists of sieve tube elements (living, no nucleus, companion cells) and sieve plates. Transports sucrose, amino acids and other organic compounds bidirectionally.",
          },
          {
            heading: "Translocation mechanism",
            body: "Source (leaf) → sink (root, fruit). Sucrose loaded into phloem by active transport (companion cells). High solute concentration creates osmotic gradient → water enters → hydrostatic pressure pushes sap toward sink.",
          },
          {
            heading: "Source and sink",
            body: "Source: where sucrose is produced (photosynthesis) or released (storage organs). Sink: where sucrose is used or stored (roots, fruits, growing tissues). Direction can change seasonally.",
          },
        ],
        keyFormulas: [
          {
            name: "Phloem",
            statement: "Source→sink via osmotic pressure gradient.",
          },
        ],
        workedExample: {
          problem: "Why do companion cells matter in phloem?",
          solution:
            "They provide energy (mitochondria) and regulate loading of sucrose into sieve tubes via active transport.",
        },
      },
      questions: [
        {
          id: "cial-b-u4-ph-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does phloem transport?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Oxygen" },
              { id: "b", text: "Carbon dioxide" },
              { id: "c", text: "Sugars and amino acids" },
              { id: "d", text: "Water and minerals" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Phloem",
                statement: "Organic compounds: sucrose, amino acids.",
              },
            ],
            steps: [
              {
                reasoning: "Phloem = sugars/amino acids.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(c)** Sugars and amino acids",
            commonErrors: ["Confusing with xylem (water)."],
          },
        },
        {
          id: "cial-b-u4-ph-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is a 'source' and 'sink' in phloem transport?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Source/sink",
                statement: "Source produces sucrose; sink uses or stores it.",
              },
            ],
            steps: [
              {
                reasoning: "Source = production site.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Sink = use/storage site.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Source produces; sink consumes or stores.",
            commonErrors: ["Reversing source and sink."],
          },
        },
        {
          id: "cial-b-u4-ph-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how phloem loading creates a pressure gradient.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Phloem loading",
                statement:
                  "Active transport loads sucrose → osmotic water entry → pressure gradient.",
              },
            ],
            steps: [
              {
                reasoning: "Sucrose loaded by active transport.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "High solute → water enters by osmosis.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Hydrostatic pressure builds at source.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Pressure pushes sap to sink.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Sucrose loading → osmotic water entry → pressure gradient drives flow.",
            commonErrors: ["Thinking it's simple diffusion."],
          },
        },
        {
          id: "cial-b-u4-ph-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Phloem transport.",
          parts: [
            { label: "a", prompt: "What does phloem transport?", marks: 1 },
            { label: "b", prompt: "Source vs sink?", marks: 2 },
            {
              label: "c",
              prompt: "How does loading create pressure?",
              marks: 3,
            },
            {
              label: "d",
              prompt: "Why are companion cells important?",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Phloem",
                statement: "Transport+source/sink+pressure+companion cells.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Sugars + amino acids.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Source produces.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Sink uses/stores.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Active transport loading.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Osmotic water entry.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Pressure gradient drives flow.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Provide energy via mitochondria.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Regulate loading.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Support sieve tubes.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) sugars+amino acids (b) source/sink (c) osmotic pressure (d) energy+regulation",
          },
        },
        {
          id: "cial-b-u4-ph-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which cells in phloem provide the energy needed for active loading of sucrose?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Xylem vessels" },
              { id: "b", text: "Root hair cells" },
              { id: "c", text: "Guard cells" },
              { id: "d", text: "Companion cells" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Companion cells", statement: "Provide ATP and regulate loading in phloem." },
            ],
            steps: [
              { reasoning: "Companion cells contain many mitochondria and power active transport.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Companion cells",
            commonErrors: ["Thinking sieve tube elements have nuclei to supply energy."],
          },
        },
        {
          id: "cial-b-u4-ph-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is a 'sieve plate' and where is it found?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Sieve plate", statement: "Porous end walls between sieve tube elements allowing sap flow." },
            ],
            steps: [
              { reasoning: "Sieve plates are the perforated end walls of sieve tube elements.", marks: 1, markCode: "M" },
              { reasoning: "They are found in phloem and allow cytoplasm/sap to pass between elements.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Perforated end walls of phloem sieve tube elements.",
            commonErrors: ["Describing xylem pits instead."],
          },
        },
        {
          id: "cial-b-u4-ph-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why is active transport needed to load sucrose into phloem at the source?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Phloem loading", statement: "Sucrose moved against its gradient using ATP from companion cells." },
            ],
            steps: [
              { reasoning: "Sucrose concentration is higher in phloem than in surrounding cells.", marks: 1, markCode: "M" },
              { reasoning: "Active transport (using ATP) is required to move it against the gradient.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Sucrose moves against its concentration gradient, so ATP-dependent active transport is needed.",
            commonErrors: ["Saying sucrose diffuses passively into phloem."],
          },
        },
        {
          id: "cial-b-u4-ph-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of these is most likely to be a phloem 'sink'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A developing fruit" },
              { id: "b", text: "A mature photosynthesising leaf in summer" },
              { id: "c", text: "A leaf exporting sucrose" },
              { id: "d", text: "A source leaf at midday" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Sink", statement: "Tissue that uses or stores sucrose." },
            ],
            steps: [
              { reasoning: "Sinks consume or store sucrose — developing fruits, roots and growing tissues qualify.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** A developing fruit",
            commonErrors: ["Confusing source leaves with sinks."],
          },
        },
        {
          id: "cial-b-u4-ph-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain how the hydrostatic pressure gradient drives phloem sap from source to sink.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Pressure flow", statement: "High pressure at source pushes sap to low pressure at sink." },
            ],
            steps: [
              { reasoning: "Sucrose loading at source lowers water potential → water enters by osmosis → pressure rises.", marks: 1, markCode: "M" },
              { reasoning: "Sap flows along the pressure gradient to the sink, where sucrose is unloaded.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Osmotic water entry at source raises hydrostatic pressure, pushing sap to the sink.",
            commonErrors: ["Describing it as simple diffusion."],
          },
        },
        {
          id: "cial-b-u4-ph-q10",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why the direction of translocation in phloem can change with the seasons.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Source/sink shift", statement: "Sources and sinks change as plant needs change." },
            ],
            steps: [
              { reasoning: "In summer, leaves are sources exporting sucrose to roots/fruits.", marks: 1, markCode: "M" },
              { reasoning: "In winter, stored sucrose in roots/stems becomes the source.", marks: 1, markCode: "M" },
              { reasoning: "Growing shoots or developing fruits act as sinks depending on season.", marks: 1, markCode: "M" },
              { reasoning: "Flow direction follows wherever sources and sinks are located.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Sources and sinks change seasonally, so translocation direction reverses accordingly.",
            commonErrors: ["Saying phloem transport is always leaf-to-root."],
          },
        },
        {
          id: "cial-b-u4-ph-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is the main solute transported in phloem sap?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Oxygen" },
              { id: "b", text: "Sucrose" },
              { id: "c", text: "Water" },
              { id: "d", text: "Chlorophyll" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Translocation", statement: "Sucrose and amino acids are the main translocated solutes." },
            ],
            steps: [
              { reasoning: "Sucrose is the principal sugar transported in phloem sap.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Sucrose",
            commonErrors: ["Saying glucose is the main transported sugar."],
          },
        },
        {
          id: "cial-b-u4-ph-q12",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Compare the transport of substances in xylem and phloem.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "comparison", name: "Xylem vs phloem", statement: "Xylem: water/minerals, unidirectional, dead vessels, transpiration pull. Phloem: sucrose/amino acids, source→sink, living sieve tubes, pressure flow." },
            ],
            steps: [
              { reasoning: "Xylem transports water and minerals; phloem transports sucrose and amino acids.", marks: 1, markCode: "M" },
              { reasoning: "Xylem vessels are dead; phloem sieve tubes are living with companion cells.", marks: 1, markCode: "M" },
              { reasoning: "Xylem moves upward only; phloem moves source→sink and can reverse.", marks: 1, markCode: "M" },
              { reasoning: "Xylem driven by transpiration pull; phloem by hydrostatic pressure gradient.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Xylem = water up via transpiration pull; phloem = sugars source→sink via pressure flow.",
            commonErrors: ["Only comparing what they carry, not mechanism or structure."],
          },
        },
        {
          id: "cial-b-u4-ph-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which statement about phloem sieve tube elements is correct?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They have no nucleus but are living and associated with companion cells" },
              { id: "b", text: "They are dead at maturity with no cytoplasm" },
              { id: "c", text: "They have thick lignified walls" },
              { id: "d", text: "They form continuous tubes with no end walls" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Sieve tube elements", statement: "Living but enucleate; rely on companion cells." },
            ],
            steps: [
              { reasoning: "Sieve tubes are living cells that lack nuclei and depend on companion cells.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Living, no nucleus, with companion cells",
            commonErrors: ["Calling them dead like xylem vessels."],
          },
        },
        {
          id: "cial-b-u4-ph-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Describe how sucrose unloading at a sink contributes to the flow of phloem sap.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Sink unloading", statement: "Sucrose removed at sink lowers osmotic pressure, drawing water out and maintaining the gradient." },
            ],
            steps: [
              { reasoning: "Sucrose is removed from phloem into sink cells by diffusion or active transport.", marks: 1, markCode: "M" },
              { reasoning: "Lower solute concentration lowers osmotic pressure at the sink.", marks: 1, markCode: "M" },
              { reasoning: "Water leaves the phloem by osmosis into surrounding cells.", marks: 1, markCode: "M" },
              { reasoning: "This maintains the pressure difference that keeps sap flowing source→sink.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Unloading lowers sink osmotic pressure → water leaves → pressure gradient sustained.",
            commonErrors: ["Saying unloading stops the flow."],
          },
        },
        {
          id: "cial-b-u4-ph-q15",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Phloem transport.",
          parts: [
            { label: "a", prompt: "What substances does phloem transport?", marks: 1 },
            { label: "b", prompt: "Define 'source' and 'sink'.", marks: 2 },
            { label: "c", prompt: "Explain how loading creates a pressure gradient.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Phloem", statement: "Substances+source/sink+pressure gradient." },
            ],
            steps: [
              { part: "a", reasoning: "Sucrose, amino acids and other organic compounds.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Source produces/exports sucrose.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Sink uses or stores sucrose.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Sucrose loaded by active transport using companion-cell ATP.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "High solute → water enters by osmosis → hydrostatic pressure rises.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Pressure gradient pushes sap toward the sink.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) sucrose/amino acids (b) source/sink (c) loading→osmotic pressure→flow",
          },
        },
        {
          id: "cial-b-u4-ph-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Translocation.",
          parts: [
            { label: "a", prompt: "Name the main cell types in phloem.", marks: 2 },
            { label: "b", prompt: "Give one example of a source and one of a sink.", marks: 2 },
            { label: "c", prompt: "Explain the pressure-flow mechanism of translocation.", marks: 3 },
            { label: "d", prompt: "Why can translocation occur in both directions?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Translocation", statement: "Cells+source/sink+pressure flow+bidirectionality." },
            ],
            steps: [
              { part: "a", reasoning: "Sieve tube elements named.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Companion cells named.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Source e.g. photosynthesising leaf.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Sink e.g. root/fruit/seed.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Active loading of sucrose at source.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Osmotic water entry → hydrostatic pressure gradient.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Sap flows to sink where sucrose unloaded.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Any region can become source or sink.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Direction follows the source-sink gradient.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) sieve tubes+companion (b) leaf/root (c) pressure flow (d) source-sink changes",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cial-b-u4-plant-transport-notes",
      title: "Plant transport — revision notes",
      summary:
        "Xylem (water), phloem (sugars), transpiration and translocation.",
      sections: [
        {
          heading: "Xylem",
          body: "Water + minerals, roots→leaves. Cohesion-tension: transpiration pulls water up. Factors: light, temp, wind, humidity.",
        },
        {
          heading: "Phloem",
          body: "Sugars + amino acids, source→sink. Active loading → osmotic pressure → flow. Companion cells provide energy and regulation.",
        },
        {
          heading: "Exam checklist",
          body: "Can you explain cohesion-tension? Describe phloem loading? Name transpiration factors? Distinguish xylem/phloem?",
        },
      ],
    },
  ],
};
