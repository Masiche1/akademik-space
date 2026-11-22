import type { Lesson } from "../../../types.ts";

export const lesson305: Lesson = {
  id: "cieigeo-u1-lesson-1-5",
  code: "1-5",
  title: "Coasts and Glaciation",
  goal: "I CAN describe coastal processes and glacial landforms.",
  standards: ["Cambridge IGCSE Geography 0460", "Paper 1: coastal/glacial"],

  vocabulary: [
    { term: "Coastal erosion", definition: "Wearing away of coastline." },
    {
      term: "Longshore drift",
      definition: "Movement of sediment along coast.",
    },
    { term: "Beach", definition: "Deposited sediment at shoreline." },
    { term: "Cliff", definition: "Steep coastal slope." },
    { term: "Glacier", definition: "Large mass of moving ice." },
    { term: "Moraine", definition: "Glacial deposit of rock debris." },
  ],
  concepts: [
    {
      id: "cieigeo-u1-s5-coast",
      title: "Coasts and glaciation",
      skill: "Understand coastal and glacial processes.",
      lesson: {
        sections: [
          {
            heading: "Coastal processes",
            body: "Erosion: hydraulic action, abrasion, attrition, corrosion. Transportation: longshore drift. Deposition: beaches, spits, bars. Landforms: cliffs, wave-cut platforms, headlands, bays.",
          },
          {
            heading: "Glaciation",
            body: "Glaciers erode (abrasion, plucking) and deposit (moraines, till). Landforms: U-shaped valleys, cirques, arêtes, hanging valleys, drumlins, eskers.",
          },
        ],
        keyFormulas: [
          {
            name: "Erosion",
            statement: "hydraulic, abrasion, attrition, corrosion",
          },
          { name: "Longshore drift", statement: "sediment along coast" },
          {
            name: "Glacial landforms",
            statement: "U-valleys, cirques, moraines",
          },
        ],
        workedExample: {
          problem: "How does longshore drift create a spit?",
          solution:
            "Waves approach at angle, sediment moves along coast. When coastline changes direction, sediment deposits forming a spit.",
        },
      },
      questions: [
        {
          id: "cieigeo-u1-cg-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is longshore drift?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "A weather system",
              },
              {
                id: "b",
                text: "A landform",
              },
              {
                id: "c",
                text: "Movement of sediment along coast",
              },
              {
                id: "d",
                text: "A type of wave",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Longshore drift",
                statement: "Coastal sediment movement.",
              },
            ],
            steps: [
              {
                reasoning: "Sediment moves along coast by waves.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Coastal sediment movement",
          },
        },
        {
          id: "cieigeo-u1-cg-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a glacier?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Glacier",
                statement: "Moving ice mass.",
              },
            ],
            steps: [
              {
                reasoning: "Large mass of moving ice.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Erodes and deposits material.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Moving ice mass",
          },
        },
        {
          id: "cieigeo-u1-cg-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What are coastal erosion processes?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Coastal erosion",
                statement: "Erosion types.",
              },
            ],
            steps: [
              {
                reasoning: "Hydraulic action, abrasion, attrition, corrosion.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "All four correctly identified.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Each process explained.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Hydraulic, abrasion, attrition, corrosion",
          },
        },
        {
          id: "cieigeo-u1-cg-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define coastal erosion, longshore drift, beach, cliff, glacier, moraine. (b) What is longshore drift? (c) What is a glacier? (d) What are coastal erosion processes? (e) What landforms does glaciation create? (f) What is a spit? (g) What is a U-shaped valley? (h) Explain how coasts and glaciers shape landscapes.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Coasts/glaciation",
                statement: "Processes, landforms.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All six definitions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) Sediment movement along coast.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) Moving ice mass.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(d) Four erosion processes.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(e) U-valleys, cirques, moraines, drumlins.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(f) Deposited sediment extending into sea.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(g) Glacially eroded valley.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(h) Valid landscape explanation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Coastal and glacial processes.",
          },
        },
        {
          id: "cieigeo-u1-cg-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which coastal erosion process is caused by the force of breaking waves driving air into cracks?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Corrosion" },
              { id: "b", text: "Hydraulic action" },
              { id: "c", text: "Longshore drift" },
              { id: "d", text: "Attrition" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Hydraulic action",
                statement: "Force of water erodes rock.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Breaking waves compress air into joints and weaknesses.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Hydraulic action",
          },
        },
        {
          id: "cieigeo-u1-cg-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A cliff retreats at 1.5 m per year. How far will it retreat in 20 years?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 30, unit: "m" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Erosion rate",
                statement: "Distance = rate x time.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Multiply the annual retreat rate by the time period.",
                working: "1.5 \\times 20 = 30",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "30 m",
          },
        },
        {
          id: "cieigeo-u1-cg-q7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name two landforms created mainly by glacial deposition.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Glacial deposition",
                statement: "Sediment dropped by moving ice.",
              },
            ],
            steps: [
              {
                reasoning: "Any two of moraines, drumlins, eskers or erratics.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Both are identified as depositional rather than erosional features.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "e.g. moraines and drumlins",
          },
        },
        {
          id: "cieigeo-u1-cg-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "In longshore drift, sediment is moved mainly by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "River currents carrying sediment offshore" },
              {
                id: "b",
                text: "The swash of waves breaking at an angle to the coast",
              },
              { id: "c", text: "Wind blowing directly out to sea" },
              { id: "d", text: "Tides flowing parallel to the beach" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Longshore drift",
                statement: "Sediment moves alongshore by angled wave swash.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Waves approach obliquely and move sediment along the coast.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Angled wave swash",
          },
        },
        {
          id: "cieigeo-u1-cg-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "A beach receives 1 200 m³ of sediment and loses 450 m³ to the sea in one year. (a) Calculate the net gain. (b) If losses rise to 900 m³ while input remains 1 200 m³, calculate the net change.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Net gain (m³)", answer: 750, unit: "m^3" },
              { label: "(b) New net change (m³)", answer: 300, unit: "m^3" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Sediment budget",
                statement: "Net change = inputs - outputs.",
              },
            ],
            steps: [
              {
                reasoning: "(a) 1 200 - 450 = 750 m³ net gain.",
                working: "1200 - 450 = 750",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) 1 200 - 900 = 300 m³ net gain.",
                working: "1200 - 900 = 300",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) 750 m³ (b) 300 m³",
          },
        },
        {
          id: "cieigeo-u1-cg-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how longshore drift can create a spit.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Spit formation",
                statement: "Deposited sediment extends from a coast.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Waves approach at an angle and move sediment along the shore.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Where the coastline changes direction or energy falls, sediment is deposited.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Repeated deposition builds a narrow projection into the sea.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Sediment deposited where coastline direction changes",
          },
        },
        {
          id: "cieigeo-u1-cg-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which feature is produced mainly by glacial deposition rather than glacial erosion?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Cirque" },
              { id: "b", text: "U-shaped valley" },
              { id: "c", text: "Arête" },
              { id: "d", text: "Drumlin" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Drumlin",
                statement: "Elongated mound of glacial till.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Drumlins are depositional; the other features are erosional.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Drumlin",
          },
        },
        {
          id: "cieigeo-u1-cg-q12",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how erosion and deposition produce both coastal and glacial landforms.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "Process-landform links",
                statement: "Processes leave diagnostic landforms.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Coastal erosion by waves creates cliffs, platforms and headlands.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Longshore drift transports and deposits sediment as beaches and spits.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Glacial abrasion and plucking erode U-shaped valleys and cirques.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Ice deposits till and sorted sediment as moraines, eskers and drumlins.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Erosion and deposition create distinctive coastal and glacial landforms",
          },
        },
        {
          id: "cieigeo-u1-cg-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A spit grows by longshore drift at 25 m per year. (a) How long will it be after 8 years? (b) How many years will it take to reach 1.5 km?",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Length after 8 years (m)", answer: 200, unit: "m" },
              {
                label: "(b) Time to reach 1.5 km (years)",
                answer: 60,
                unit: "years",
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Rate calculation",
                statement: "Distance = rate x time; time = distance ÷ rate.",
              },
            ],
            steps: [
              {
                reasoning: "(a) 25 x 8 = 200 m.",
                working: "25 \\times 8 = 200",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) 1 500 ÷ 25 = 60 years.",
                working: "1500 / 25 = 60",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) 200 m (b) 60 years",
          },
        },
        {
          id: "cieigeo-u1-cg-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which explanation best describes the formation of a wave-cut platform?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Waves deposit sediment at the cliff base until it becomes flat",
              },
              {
                id: "b",
                text: "Abrasion and hydraulic action undercut the cliff until it collapses, leaving a flat rock surface",
              },
              {
                id: "c",
                text: "Tides transport material away from the shoreline",
              },
              {
                id: "d",
                text: "Longshore drift erodes the cliff from one side only",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Wave-cut platform",
                statement:
                  "Eroded flat surface exposed as sea level or cliff retreats.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Undercutting causes cliff collapse and exposes the eroded platform.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Cliff undercutting exposes a flat eroded surface",
          },
        },
        {
          id: "cieigeo-u1-cg-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how differences in rock resistance can produce headlands and bays on the same stretch of coast.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Differential erosion",
                statement: "Rock resistance controls coastal erosion.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Hard rock such as granite resists wave erosion more effectively.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Soft rock such as clay is eroded more rapidly by waves.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Rapid erosion of soft rock forms recessed bays.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Resistant rock remains projecting as a headland between bays.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Hard rock forms headlands; soft rock is eroded into bays",
          },
        },
        {
          id: "cieigeo-u1-cg-q16",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Name four coastal erosion processes. (b) Explain how longshore drift moves sediment. (c) Describe how a spit forms. (d) Explain how glaciers erode U-shaped valleys. (e) Name two depositional glacial landforms. (f) Explain how a wave-cut platform forms. (g) Compare erosion by waves with erosion by ice. (h) Explain why landforms reveal former processes.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Coasts and glaciation",
                statement: "Processes and their landforms.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Hydraulic action, abrasion, attrition and corrosion.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(b) Angled wave swash moves sediment along the coast.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(c) Sediment is deposited where the coast changes direction or energy falls.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(d) Glacial abrasion and plucking deepen and widen the valley floor.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(e) e.g. moraines and eskers.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(f) Undercutting collapses the cliff and exposes a flat surface.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(g) Waves erode vertically and laterally; ice erodes by abrasion and plucking.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(h) Landforms preserve evidence of the dominant processes that shaped them.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Coastal and glacial processes and their landforms.",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieigeo-u1-cg-notes",
      title: "Coasts/glaciation — notes",
      summary:
        "Coasts: erosion→transport→deposition. Glaciers: erosion→deposition. Landforms reflect processes.",
      sections: [
        {
          heading: "Key idea",
          body: "Both coasts and glaciers shape landscapes through erosion and deposition.",
        },
        {
          heading: "Landforms",
          body: "Coastal: cliffs, beaches, spits. Glacial: U-valleys, cirques, moraines.",
        },
      ],
    },
  ],
};
