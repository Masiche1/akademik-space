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
              { id: "b", text: "River flowing to sea" },
              { id: "c", text: "Waves hitting cliff directly" },
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
        {
          id: "oleg-u1-cp-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which coastal erosion process involves waves throwing sediment at cliffs?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Abrasion" },
              { id: "b", text: "Solution" },
              { id: "c", text: "Attrition" },
              { id: "d", text: "Hydraulic action" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Abrasion",
                statement: "Waves hurl sediment at cliffs.",
              },
            ],
            steps: [
              { reasoning: "Abrasion = grinding by sediment.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Abrasion",
            commonErrors: ["Confusing with hydraulic action."],
          },
        },
        {
          id: "oleg-u1-cp-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is the net movement of sediment along a coast called?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Longshore drift" },
              { id: "b", text: "Traction" },
              { id: "c", text: "Tidal flow" },
              { id: "d", text: "Backwash" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Longshore drift",
                statement: "Net along-coast sediment movement.",
              },
            ],
            steps: [
              {
                reasoning: "Longshore drift = along coast.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Longshore drift",
            commonErrors: ["Confusing with river transport."],
          },
        },
        {
          id: "oleg-u1-cp-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Coastal deposition occurs mainly where:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Wave energy is low or sheltered" },
              { id: "b", text: "Cliffs are steep" },
              { id: "c", text: "Wave energy is high" },
              { id: "d", text: "Headlands are exposed" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Deposition",
                statement: "Low energy/sheltered → deposition.",
              },
            ],
            steps: [
              {
                reasoning: "Low energy = deposition.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Low or sheltered energy",
            commonErrors: ["Reversing erosion/deposition."],
          },
        },
        {
          id: "oleg-u1-cp-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "The zigzag movement of swash and backwash produces:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Wave refraction only" },
              { id: "b", text: "Coastal erosion" },
              { id: "c", text: "Longshore drift" },
              { id: "d", text: "Tidal deposition" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Swash/backwash",
                statement: "Zigzag transport → longshore drift.",
              },
            ],
            steps: [
              {
                reasoning: "Zigzag = longshore drift.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(c)** Longshore drift",
            commonErrors: ["Naming the wrong process."],
          },
        },
        {
          id: "oleg-u1-cp-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of these is built by coastal deposition?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sea stack" },
              { id: "b", text: "Arch" },
              { id: "c", text: "Wave-cut platform" },
              { id: "d", text: "Spit" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Depositional landforms",
                statement: "Beach, spit, bar, tombolo.",
              },
            ],
            steps: [
              { reasoning: "Spit = depositional.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(d)** Spit",
            commonErrors: ["Confusing erosional/depositional."],
          },
        },
        {
          id: "oleg-u1-cp-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Coastal erosion is concentrated mainly on:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Beaches" },
              { id: "b", text: "Sheltered bays" },
              { id: "c", text: "River mouths" },
              { id: "d", text: "Headlands" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Erosion focus",
                statement: "Exposed headlands erode; bays deposit.",
              },
            ],
            steps: [
              {
                reasoning: "Headlands = high energy.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(d)** Headlands",
            commonErrors: ["Confusing with bays."],
          },
        },
        {
          id: "oleg-u1-cp-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two coastal depositional landforms.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Depositional landforms",
                statement: "Beach, spit, bar, tombolo.",
              },
            ],
            steps: [
              { reasoning: "Any two depositional.", marks: 1, markCode: "AO1" },
              { reasoning: "Correctly named.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Beach, spit, bar, tombolo.",
            commonErrors: ["Naming erosional landforms."],
          },
        },
        {
          id: "oleg-u1-cp-q12",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how longshore drift transports sediment along a coast.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Longshore drift",
                statement: "Angled swash, perpendicular backwash → net movement.",
              },
            ],
            steps: [
              {
                reasoning: "Waves approach at an angle to coast.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Swash carries sediment up beach at angle.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Backwash returns perpendicular to sea.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Net zigzag movement along coast.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Angled swash + perpendicular backwash → drift.",
            commonErrors: ["Ignoring the angle of waves."],
          },
        },
        {
          id: "oleg-u1-cp-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is a wave-cut platform?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Wave-cut platform",
                statement: "Flat rocky area at cliff base from erosion.",
              },
            ],
            steps: [
              {
                reasoning: "Flat rocky area at cliff base.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Formed by wave erosion at high tide.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Flat rocky area at cliff base.",
            commonErrors: ["Confusing with beach."],
          },
        },
        {
          id: "oleg-u1-cp-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why bays are areas of coastal deposition.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Bays",
                statement: "Sheltered → low energy → deposition.",
              },
            ],
            steps: [
              {
                reasoning: "Bays sheltered by headlands.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Wave energy reduced inside bay.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Sediment carried by drift is dropped.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Builds beaches and smooths coast.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Sheltered bays → low energy → deposition.",
            commonErrors: ["Saying bays erode faster."],
          },
        },
        {
          id: "oleg-u1-cp-q15",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Give two factors that reduce wave energy at the coast.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Energy reduction",
                statement: "Shelter, shallow water, headlands.",
              },
            ],
            steps: [
              { reasoning: "Any two valid factors.", marks: 1, markCode: "AO1" },
              { reasoning: "Correctly explained.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "E.g. sheltered bays, shallow water, headlands.",
            commonErrors: ["Repeating the same factor."],
          },
        },
        {
          id: "oleg-u1-cp-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Coastal processes.",
          parts: [
            { label: "a", prompt: "Define longshore drift.", marks: 1 },
            { label: "b", prompt: "Two erosion types?", marks: 1 },
            { label: "c", prompt: "How does deposition occur?", marks: 2 },
            { label: "d", prompt: "Why headlands erode faster?", marks: 2 },
            { label: "e", prompt: "How does longshore drift work?", marks: 3 },
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
              { part: "b", reasoning: "Any two types.", marks: 1, markCode: "AO1" },
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
                reasoning: "Concentrated wave energy.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "e",
                reasoning: "Waves at angle.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "e",
                reasoning: "Swash angled, backwash perpendicular.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "e",
                reasoning: "Net along-coast movement.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "(a) drift (b) erosion types (c) low energy (d) exposed (e) zigzag",
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
              { id: "a", text: "Isolated pillar" },
              { id: "b", text: "Flat rocky platform" },
              { id: "c", text: "Steep rock face" },
              { id: "d", text: "Narrow ridge of sand extending into sea" },
            ],
            correctChoiceId: "d",
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
            finalAnswer: "**(d)** Sand ridge into sea",
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
        {
          id: "oleg-u1-cl-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "An isolated pillar of rock left standing offshore after an arch collapses is called a:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Bar" },
              { id: "b", text: "Cave" },
              { id: "c", text: "Stack" },
              { id: "d", text: "Spit" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Stack",
                statement: "Isolated pillar of rock offshore.",
              },
            ],
            steps: [
              { reasoning: "Stack = isolated pillar.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(c)** Stack",
            commonErrors: ["Confusing stack with stump."],
          },
        },
        {
          id: "oleg-u1-cl-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "A ridge of sand and shingle extending across a bay with a sheltered lagoon behind it is a:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Spit" },
              { id: "b", text: "Stack" },
              { id: "c", text: "Bar" },
              { id: "d", text: "Tombolo" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Bar",
                statement: "Ridge across bay with lagoon behind.",
              },
            ],
            steps: [
              { reasoning: "Bar = ridge across bay.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(c)** Bar",
            commonErrors: ["Confusing bar with spit."],
          },
        },
        {
          id: "oleg-u1-cl-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A wave-cut platform forms at the base of which landform?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Tombolo" },
              { id: "b", text: "Spit" },
              { id: "c", text: "Bar" },
              { id: "d", text: "Cliff" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Wave-cut platform",
                statement: "Flat rocky area at cliff base.",
              },
            ],
            steps: [
              { reasoning: "Platform at cliff base.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(d)** Cliff",
            commonErrors: ["Confusing with beach."],
          },
        },
        {
          id: "oleg-u1-cl-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which landform forms first in the classic sequence of coastal erosion?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Stump" },
              { id: "b", text: "Cave" },
              { id: "c", text: "Arch" },
              { id: "d", text: "Stack" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Erosion sequence",
                statement: "Cave is the first landform.",
              },
            ],
            steps: [
              { reasoning: "Cave forms first.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** Cave",
            commonErrors: ["Wrong order of sequence."],
          },
        },
        {
          id: "oleg-u1-cl-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A tombolo is a ridge of sediment that connects:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A river mouth to a spit" },
              { id: "b", text: "Two bays together" },
              { id: "c", text: "A cliff to a beach" },
              { id: "d", text: "An island to the mainland" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Tombolo",
                statement: "Ridge connecting island to mainland.",
              },
            ],
            steps: [
              {
                reasoning: "Tombolo = island-mainland link.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(d)** Island to mainland",
            commonErrors: ["Confusing with bar."],
          },
        },
        {
          id: "oleg-u1-cl-q10",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name two depositional coastal landforms.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Depositional landforms",
                statement: "Beach, spit, bar, tombolo.",
              },
            ],
            steps: [
              { reasoning: "Any two depositional.", marks: 1, markCode: "AO1" },
              { reasoning: "Correctly named.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Beach, spit, bar, tombolo.",
            commonErrors: ["Naming erosional landforms."],
          },
        },
        {
          id: "oleg-u1-cl-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is a wave-cut platform?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Wave-cut platform",
                statement: "Flat rocky area at cliff base from erosion.",
              },
            ],
            steps: [
              {
                reasoning: "Flat rocky area at cliff base.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Formed by wave erosion at high tide.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Flat rocky area at cliff base.",
            commonErrors: ["Confusing with beach."],
          },
        },
        {
          id: "oleg-u1-cl-q12",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain how a spit forms.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Spit formation",
                statement: "Longshore drift deposits sand at coast end.",
              },
            ],
            steps: [
              {
                reasoning: "Longshore drift moves sediment along coast.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Sediment builds up at end of headland or bay.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Wave energy drops and deposition occurs.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Narrow ridge extends into sea.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Longshore drift → deposition → ridge into sea.",
            commonErrors: ["Saying spit is erosional."],
          },
        },
        {
          id: "oleg-u1-cl-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how a bar and lagoon form.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Bar formation",
                statement: "Deposition across bay → lagoon behind.",
              },
            ],
            steps: [
              {
                reasoning: "Longshore drift carries sediment along coast.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Sediment deposited across bay entrance.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Ridge builds across bay → bar.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Sheltered water behind → lagoon.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Deposition across bay → bar + lagoon.",
            commonErrors: ["Confusing bar with spit."],
          },
        },
        {
          id: "oleg-u1-cl-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Name one landform formed at the base of an eroding cliff.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Cliff-base landform",
                statement: "Wave-cut platform.",
              },
            ],
            steps: [
              {
                reasoning: "Wave-cut platform.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "Wave-cut platform.",
            commonErrors: ["Naming a beach instead."],
          },
        },
        {
          id: "oleg-u1-cl-q15",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Explain the full sequence of coastal erosion from cave to stump.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Erosion sequence",
                statement: "Cave→arch→stack→stump via wave erosion.",
              },
            ],
            steps: [
              {
                reasoning: "Waves erode a weakness in cliff → cave.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Cave erodes through headland → arch.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Arch roof collapses → isolated stack.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Stack continues eroding → stump.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Correct order explained.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Cave→arch→stack→stump.",
            commonErrors: ["Wrong order or missing stage."],
          },
        },
        {
          id: "oleg-u1-cl-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Coastal landforms.",
          parts: [
            { label: "a", prompt: "Define spit.", marks: 1 },
            { label: "b", prompt: "Two depositional landforms?", marks: 1 },
            { label: "c", prompt: "Erosion sequence?", marks: 3 },
            { label: "d", prompt: "How is a bar formed?", marks: 2 },
            { label: "e", prompt: "Why do headlands erode?", marks: 2 },
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
                reasoning: "Sand ridge into sea.",
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
                reasoning: "Ridge across bay → lagoon.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "e",
                reasoning: "Protrude into sea.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "e",
                reasoning: "Concentrated wave energy.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "(a) spit (b) depositional (c) sequence (d) bar (e) exposed",
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
