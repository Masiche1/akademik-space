import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "oleg-u1-lesson-1-2",
  code: "1-2",
  title: "Coastal Landscapes and Processes",
  goal: "I CAN describe coastal erosion, transportation, deposition and landforms.",
  standards: ["2217: Physical geography — coasts"],
  vocabulary: [
    {
      term: "Longshore drift",
      definition: "Movement of sediment along coast by waves at angle.",
    },
    { term: "Cliff", definition: "Steep rock face formed by coastal erosion." },
    {
      term: "Wave-cut platform",
      definition: "Flat rocky area at cliff base from erosion.",
    },
    {
      term: "Headland",
      definition: "Land projecting into sea — exposed to waves.",
    },
    { term: "Cave", definition: "Opening in cliff from wave erosion." },
    {
      term: "Spit",
      definition:
        "Narrow ridge of sand extending into sea from longshore drift.",
    },
  ],
  concepts: [
    {
      id: "oleg-u1-coastal-processes",
      title: "Coastal processes",
      skill: "Explain coastal erosion, transportation and deposition.",
      lesson: {
        sections: [
          {
            heading: "Coastal erosion",
            body: "Hydraulic action: wave force compresses air in cracks. Abrasion: waves throw sediment at cliffs. Attrition: rocks collide and break. Solution: limestone dissolves. Concentrated on headlands.",
          },
          {
            heading: "Coastal transportation",
            body: "Longshore drift: waves approach at angle, deposit sediment, return perpendicular — net movement along coast. Beach material moves in zigzag pattern. Also suspension and traction.",
          },
          {
            heading: "Coastal deposition",
            body: "When wave energy drops: sheltered bays, behind headlands, at river mouths. Deposition builds beaches, spits, bars, tombolos. Swash pushes material up beach; backwash pulls down.",
          },
        ],
        keyFormulas: [
          {
            name: "Coastal processes",
            statement:
              "Erosion=headlands; Transport=longshore drift; Deposition=bays+beaches.",
          },
        ],
        workedExample: {
          problem: "Why do headlands erode more than bays?",
          solution:
            "Headlands protrude into sea — waves concentrate energy; bays are sheltered → deposition.",
        },
      },
      questions: [
        {
          id: "oleg-u1-cp-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is longshore drift?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Movement of sediment along coast by angled waves",
              },
              { id: "b", text: "Waves hitting cliff directly" },
              { id: "c", text: "River flowing to sea" },
              { id: "d", text: "Wind blowing sand inland" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Longshore drift",
                statement: "Sediment moves along coast.",
              },
            ],
            steps: [
              {
                reasoning: "Longshore drift = along coast.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Sediment along coast",
            commonErrors: ["Confusing with river transport."],
          },
        },
        {
          id: "oleg-u1-cp-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two types of coastal erosion.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Coastal erosion",
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
          id: "oleg-u1-cp-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why headlands erode faster than bays.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Headland vs bay",
                statement: "Concentrated wave energy vs sheltered.",
              },
            ],
            steps: [
              {
                reasoning: "Headlands protrude into sea.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Waves concentrate energy.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Bays sheltered → deposition.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Headlands exposed; bays sheltered → erosion vs deposition.",
            commonErrors: ["Ignoring wave energy."],
          },
        },
        {
          id: "oleg-u1-cp-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Coastal processes.",
          parts: [
            { label: "a", prompt: "Define longshore drift.", marks: 1 },
            { label: "b", prompt: "Two erosion types?", marks: 1 },
            { label: "c", prompt: "How does deposition occur?", marks: 2 },
            { label: "d", prompt: "Why headlands erode faster?", marks: 2 },
            { label: "e", prompt: "Why bays deposit?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Coastal processes",
                statement: "Definitions+mechanisms.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Sediment along coast.",
                marks: 1,
                markCode: "AO1",
              },
              { part: "b", reasoning: "Any two.", marks: 1, markCode: "AO1" },
              {
                part: "c",
                reasoning: "Energy drops.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Sediment drops.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Exposed/protruding.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Concentrated energy.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "e",
                reasoning: "Sheltered by headlands.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "e",
                reasoning: "Reduced wave energy.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "e",
                reasoning: "Deposition occurs.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "(a) drift (b) erosion types (c) low energy (d) exposed (e) sheltered",
          },
        },
      ],
    },
    {
      id: "oleg-u1-coastal-landforms",
      title: "Coastal landforms",
      skill: "Describe erosional and depositional coastal landforms.",
      lesson: {
        sections: [
          {
            heading: "Erosional landforms",
            body: "Cliffs: steep faces from wave erosion. Wave-cut platform: flat rocky area at cliff base. Caves: openings in cliffs → arches → stacks → stumps as erosion continues. Headlands: exposed promontories.",
          },
          {
            heading: "Depositional landforms",
            body: "Beaches: sand/pebbles deposited by waves. Spits: ridges extending from headlands — e.g. Spurn Head. Bars: ridges across bays — lagoon behind. Tombolo: ridge connecting island to mainland — Chesil Beach.",
          },
          {
            heading: "Sequence of erosion",
            body: "Cave forms → arch (cave breaks through) → stack (arch collapses leaving pillar) → stump (stack erodes down). Classic coastal erosion sequence.",
          },
        ],
        keyFormulas: [
          {
            name: "Coastal landforms",
            statement:
              "Erosional=cliff+cave+stack; Depositional=beach+spit+bar+tombolo.",
          },
        ],
        workedExample: {
          problem: "How does a stack form?",
          solution:
            "Cave → arch → arch collapses → stack (isolated pillar) → erodes to stump.",
        },
      },
      questions: [
        {
          id: "oleg-u1-cl-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a spit?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Narrow ridge of sand extending into sea" },
              { id: "b", text: "Steep rock face" },
              { id: "c", text: "Flat rocky platform" },
              { id: "d", text: "Isolated pillar" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Spit",
                statement: "Sand ridge extending into sea.",
              },
            ],
            steps: [
              { reasoning: "Spit = sand ridge.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Sand ridge into sea",
            commonErrors: ["Confusing with bar."],
          },
        },
        {
          id: "oleg-u1-cl-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two erosional coastal landforms.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Erosional landforms",
                statement: "Cliff, cave, arch, stack, stump.",
              },
            ],
            steps: [
              { reasoning: "Any two erosional.", marks: 1, markCode: "AO1" },
              { reasoning: "Correctly named.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Cliff, cave, arch, stack, stump.",
            commonErrors: ["Naming depositional."],
          },
        },
        {
          id: "oleg-u1-cl-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the sequence of coastal erosion landforms.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Erosion sequence",
                statement: "Cave→arch→stack→stump.",
              },
            ],
            steps: [
              { reasoning: "Cave forms in cliff.", marks: 1, markCode: "AO1" },
              {
                reasoning: "Arch forms when cave breaks through.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Stack→stump as erosion continues.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Clear sequence.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Cave→arch→stack→stump.",
            commonErrors: ["Wrong order."],
          },
        },
        {
          id: "oleg-u1-cl-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Coastal landforms.",
          parts: [
            { label: "a", prompt: "Define spit.", marks: 1 },
            { label: "b", prompt: "Two erosional landforms?", marks: 1 },
            { label: "c", prompt: "Erosion sequence?", marks: 3 },
            { label: "d", prompt: "How is tombolo formed?", marks: 2 },
            { label: "e", prompt: "Why are bays sheltered?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Landforms",
                statement: "Definitions+sequence+formation.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Sand ridge.",
                marks: 1,
                markCode: "AO1",
              },
              { part: "b", reasoning: "Any two.", marks: 1, markCode: "AO1" },
              {
                part: "c",
                reasoning: "Cave→arch→stack→stump.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Correct order.",
                marks: 1,
                markCode: "AO2",
              },
              { part: "c", reasoning: "Clear.", marks: 1, markCode: "AO3" },
              {
                part: "d",
                reasoning: "Longshore drift deposits.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Connects island to mainland.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "e",
                reasoning: "Protected by headlands.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "e",
                reasoning: "Reduced wave energy.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "(a) spit (b) erosional (c) sequence (d) tombolo (e) sheltered",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "oleg-u1-1-2-notes",
      title: "Coasts — notes",
      summary: "Erosion/transport/deposition; landforms by type.",
      sections: [
        {
          heading: "Processes",
          body: "Erosion (hydraulic, abrasion, attrition, solution); transport=longshore drift; deposition at low energy/sheltered.",
        },
        {
          heading: "Landforms",
          body: "Erosional: cliff, cave, arch, stack, stump. Depositional: beach, spit, bar, tombolo.",
        },
      ],
    },
  ],
};
