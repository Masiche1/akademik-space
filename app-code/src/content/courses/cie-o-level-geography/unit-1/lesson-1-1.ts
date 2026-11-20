import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "oleg-u1-lesson-1-1",
  code: "1-1",
  title: "River Landscapes and Processes",
  goal: "I CAN describe river processes and landforms in the upper, middle and lower course.",
  standards: ["2217: Physical geography — rivers"],
  vocabulary: [
    {
      term: "Erosion",
      definition: "Wearing away of land by water, wind or ice.",
    },
    {
      term: "Transportation",
      definition: "Movement of eroded material downstream.",
    },
    {
      term: "Deposition",
      definition: "Dropping of sediment when energy decreases.",
    },
    {
      term: "V-shaped valley",
      definition: "Narrow valley with steep sides in upper course.",
    },
    { term: "Meander", definition: "Sinuous bend in a river's course." },
    {
      term: "Floodplain",
      definition: "Flat land either side of a river built by deposition.",
    },
  ],
  concepts: [
    {
      id: "oleg-u1-river-processes",
      title: "River processes",
      skill: "Explain erosion, transportation and deposition in rivers.",
      lesson: {
        sections: [
          {
            heading: "River energy",
            body: "Rivers erode when energy is high (steep gradient, fast flow) and deposit when energy is low (gentle gradient, slow flow). The balance between erosion and deposition changes along the river's course.",
          },
          {
            heading: "Erosion types",
            body: "Hydraulic action: water force dislodges material. Abrasion: sediment grinds bed/ banks. Attrition: rocks collide and break into smaller pieces. Solution: minerals dissolve in water.",
          },
          {
            heading: "Transportation and deposition",
            body: "Transportation: dissolved load (invisible), suspended load (fine particles), bed load (large rocks bouncing). Deposition: when velocity drops — inside bends, at mouth, floodplains.",
          },
        ],
        keyFormulas: [
          {
            name: "River processes",
            statement: "Erosion=wear away; Transport=move; Deposition=drop.",
          },
        ],
        workedExample: {
          problem: "Why does a river erode more in its upper course?",
          solution:
            "Steep gradient → fast flow → high energy → erosion dominates over deposition.",
        },
      },
      questions: [
        {
          id: "oleg-u1-rp-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which river process wears away the bed and banks?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Erosion" },
              { id: "b", text: "Deposition" },
              { id: "c", text: "Transportation" },
              { id: "d", text: "Weathering" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Erosion",
                statement: "Wearing away of land.",
              },
            ],
            steps: [
              { reasoning: "Erosion = wear away.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Erosion",
            commonErrors: ["Confusing with weathering."],
          },
        },
        {
          id: "oleg-u1-rp-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two types of erosion.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Erosion types",
                statement: "Hydraulic action, abrasion, attrition, solution.",
              },
            ],
            steps: [
              { reasoning: "Any two types.", marks: 1, markCode: "AO1" },
              { reasoning: "Correctly named.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Hydraulic action, abrasion, attrition, solution.",
            commonErrors: ["Saying 'weathering'."],
          },
        },
        {
          id: "oleg-u1-rp-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why rivers deposit sediment in their lower course.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Deposition",
                statement: "Low energy → drops sediment.",
              },
            ],
            steps: [
              {
                reasoning: "Gentle gradient → slow flow.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Low energy → can't carry load.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Sediment drops → deposition.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Low energy → can't carry → deposition.",
            commonErrors: ["Saying energy is high."],
          },
        },
        {
          id: "oleg-u1-rp-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "River processes.",
          parts: [
            { label: "a", prompt: "Define erosion.", marks: 1 },
            { label: "b", prompt: "Name two erosion types.", marks: 1 },
            { label: "c", prompt: "Three types of load?", marks: 2 },
            { label: "d", prompt: "Why does lower course deposit?", marks: 2 },
            { label: "e", prompt: "Why does upper course erode?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "River processes",
                statement: "Definitions+types+explanations.",
              },
            ],
            steps: [
              { part: "a", reasoning: "Wear away.", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Any two.", marks: 1, markCode: "AO1" },
              {
                part: "c",
                reasoning: "Dissolved/suspended/bed.",
                marks: 1,
                markCode: "AO1",
              },
              { part: "c", reasoning: "All three.", marks: 1, markCode: "AO2" },
              {
                part: "d",
                reasoning: "Low energy.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Drops sediment.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "e",
                reasoning: "Steep gradient.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "e",
                reasoning: "Fast flow/high energy.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "e",
                reasoning: "Erosion dominates.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "(a) erosion (b) types (c) loads (d) low energy (e) high energy",
          },
        },
      ],
    },
    {
      id: "oleg-u1-landforms",
      title: "River landforms",
      skill: "Describe landforms in upper, middle and lower river courses.",
      lesson: {
        sections: [
          {
            heading: "Upper course landforms",
            body: "V-shaped valleys: steep sides from vertical erosion. Waterfalls: resistant rock over softer rock — undercutting creates plunge pool. Gorges: steep-sided valleys from rapid downcutting.",
          },
          {
            heading: "Middle course landforms",
            body: "Interlocking spurs: ridges projecting into valley. Meanders: lateral erosion creates sinuous bends — erosion on outside, deposition on inside. Oxbow lakes: meander neck cut off.",
          },
          {
            heading: "Lower course landforms",
            body: "Floodplains: wide flat land from deposition. Levees: raised banks from repeated flooding. Deltas: triangular deposits at river mouth — arcuate (Nile), cuspate (Tiber), bird's foot (Mississippi).",
          },
        ],
        keyFormulas: [
          {
            name: "Landforms",
            statement:
              "Upper=V-valley+waterfall; Middle=meander+oxbow; Lower=floodplain+delta.",
          },
        ],
        workedExample: {
          problem: "How is an oxbow lake formed?",
          solution:
            "Meander neck erodes through → river takes shortcut → old meander cut off → oxbow lake remains.",
        },
      },
      questions: [
        {
          id: "oleg-u1-rl-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which landform is found in the upper course?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "V-shaped valley" },
              { id: "b", text: "Delta" },
              { id: "c", text: "Floodplain" },
              { id: "d", text: "Meander" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "V-shaped valley",
                statement: "Upper course landform.",
              },
            ],
            steps: [
              {
                reasoning: "V-valley = upper course.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** V-shaped valley",
            commonErrors: ["Confusing with lower course."],
          },
        },
        {
          id: "oleg-u1-rl-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "How is a waterfall formed?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Waterfall",
                statement: "Resistant rock over softer rock → undercutting.",
              },
            ],
            steps: [
              {
                reasoning: "Resistant over softer rock.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Undercutting → collapse → retreat.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Resistant rock over softer → undercutting → retreat.",
            commonErrors: ["Saying it's from deposition."],
          },
        },
        {
          id: "oleg-u1-rl-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how a meander develops.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Meander",
                statement: "Lateral erosion outside, deposition inside.",
              },
            ],
            steps: [
              {
                reasoning: "Water swings → faster outside bend.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Erosion outside, deposition inside.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Amplifies → meander grows.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Outside erosion + inside deposition → meander grows.",
            commonErrors: ["Reversing erosion/deposition."],
          },
        },
        {
          id: "oleg-u1-rl-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "River landforms.",
          parts: [
            { label: "a", prompt: "Upper course landform?", marks: 1 },
            { label: "b", prompt: "Middle course landform?", marks: 1 },
            { label: "c", prompt: "Lower course landform?", marks: 1 },
            { label: "d", prompt: "How is waterfall formed?", marks: 3 },
            { label: "e", prompt: "How is delta formed?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Landforms",
                statement: "Courses+formation.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "V-valley/waterfall.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Meander/oxbow.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Floodplain/delta.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Resistant over softer.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Undercutting.",
                marks: 1,
                markCode: "AO1",
              },
              { part: "d", reasoning: "Retreat.", marks: 1, markCode: "AO2" },
              {
                part: "e",
                reasoning: "River reaches sea.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "e",
                reasoning: "Energy drops → deposition.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "e",
                reasoning: "Triangular deposit.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "(a) upper (b) middle (c) lower (d) waterfall (e) delta",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "oleg-u1-1-1-notes",
      title: "Rivers — notes",
      summary: "Erosion/transport/deposition; landforms by course.",
      sections: [
        {
          heading: "Processes",
          body: "Erosion (hydraulic, abrasion, attrition, solution); transport (dissolved, suspended, bed); deposition at low energy.",
        },
        {
          heading: "Landforms",
          body: "Upper: V-valley, waterfall. Middle: meander, oxbow. Lower: floodplain, delta.",
        },
      ],
    },
  ],
};
