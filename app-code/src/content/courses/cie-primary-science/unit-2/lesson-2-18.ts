import type { Lesson } from "../../../types.ts";

export const lesson218: Lesson = {
  id: "cips-u2-lesson-2-18",
  code: "2-18",
  title: "Stage 4 — The Skeleton, Energy and the Solar System",
  goal: "I CAN describe the skeleton's role, energy transfers and the Solar System.",
  standards: ["Cambridge Primary Science 0097 Stage 4: biology, physics and Earth/space",
  "Cambridge Primary Science 0097 framework substrands: 4Bs, 4Pf, 4ESs, 4TWSm, 4SIC"],
  stage: 4,
  vocabulary: [
    { term: "Skeleton", definition: "Framework of bones supporting the body." },
    { term: "Muscle", definition: "Tissue that contracts to move bones." },
    { term: "Energy transfer", definition: "Energy changing form: chemical→movement+heat." },
    { term: "Solar System", definition: "Sun and planets orbiting it." },
    { term: "Rotation", definition: "Earth spinning on its axis causing day/night." },
  ],
  concepts: [
    {
      id: "cips-u2-s18-skeleton-space",
      title: "Skeleton, energy and the Solar System",
      skill: "Describe skeleton functions, energy transfers and Solar System structure at Stage 4 level.",
      lesson: {
        sections: [
          {
            heading: "Skeleton and energy",
            body: "The skeleton supports the body, protects organs (skull protects brain, ribs protect heart/lungs), allows movement with muscles, and gives body shape. Energy exists in matter, sound, light and heat — it can't be created or destroyed, only transferred. When you move, chemical energy from food becomes movement energy plus wasted heat.",
          },
          {
            heading: "Solar System",
            body: "The Sun is at the centre of the Solar System; eight planets orbit it. Earth's rotation on its axis causes day and night — the side facing the Sun has day, the other night. Planets have different distances from the Sun and take different times to orbit.",
          },
        ],
        keyFormulas: [
          { name: "Skeleton", statement: "support, protect, movement, shape" },
          { name: "Energy", statement: "transfers between forms; never created/destroyed" },
          { name: "Solar System", statement: "Sun centre; planets orbit; rotation = day/night" },
        ],
        workedExample: {
          problem: "Why do we have day and night?",
          solution: "Earth rotates on its axis — the sunlit side experiences day, the dark side night.",
        },
      },
      questions: [
        {
          id: "cips-u2-sx-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which body part does the skull protect?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Lungs" },
            { id: "b", text: "Heart" },
            { id: "c", text: "Spine" },
            { id: "d", text: "Brain" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "definition", name: "Skeleton protection", statement: "Skull protects brain." }],
            steps: [{ reasoning: "Skull encloses and protects the brain.", marks: 1, markCode: "A" }],
            finalAnswer: "Brain",
          },
        },
        {
          id: "cips-u2-sx-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name two functions of the skeleton.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Skeleton functions", statement: "Support, protect, move, shape." }],
            steps: [
              { reasoning: "Any two correct functions.", marks: 1, markCode: "M" },
              { reasoning: "Answer stated.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "e.g. support and protect",
          },
        },
        {
          id: "cips-u2-sx-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What causes day and night on Earth?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Earth's rotation", statement: "Spin on axis → day/night." }],
            steps: [
              { reasoning: "Earth rotates on its axis once every 24 hours.", marks: 1, markCode: "M" },
              { reasoning: "Sunlit side = day; dark side = night.", marks: 1, markCode: "M" },
              { reasoning: "Answer explained.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Earth's rotation on its axis",
          },
        },
        {
          id: "cips-u2-sx-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) List three ways the skeleton helps the body. (b) Trace energy in a torch: battery → light. What other form is produced? (c) Name the planets in order from the Sun. (d) Explain why energy can't be 'used up'. Show reasoning.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Skeleton, energy, space", statement: "Functions + transfers + Solar System." }],
            steps: [
              { reasoning: "(a) Support, protect organs, allow movement.", marks: 1, markCode: "M" },
              { reasoning: "(b) Chemical → light + heat (wasted).", marks: 1, markCode: "M" },
              { reasoning: "(c) Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune.", marks: 1, markCode: "M" },
              { reasoning: "(d) Energy transfers between forms, never destroyed.", marks: 1, markCode: "M" },
              { reasoning: "Skeleton functions correctly listed.", marks: 1, markCode: "M" },
              { reasoning: "Energy transfer chain accurate.", marks: 1, markCode: "M" },
              { reasoning: "All parts attempted.", marks: 1, markCode: "M" },
              { reasoning: "All answers correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) support/protect/move (b) chemical→light+heat (c) 8 planets listed (d) energy transfers, not destroyed",
          },
        },
        {
          id: "cips-u2-sx-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which organs does the rib cage protect?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Brain and heart" },
            { id: "b", text: "Legs" },
            { id: "c", text: "Stomach only" },
            { id: "d", text: "Heart and lungs" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "definition", name: "Skeleton protection", statement: "Ribs protect heart and lungs." }],
            steps: [{ reasoning: "The rib cage protects the heart and lungs.", marks: 1, markCode: "A" }],
            finalAnswer: "Heart and lungs",
          },
        },
        {
          id: "cips-u2-sx-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What causes day and night?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Clouds" },
            { id: "b", text: "Earth rotating on its axis" },
            { id: "c", text: "The Moon blocking light" },
            { id: "d", text: "The Sun moving" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Rotation", statement: "Earth spins → day/night." }],
            steps: [{ reasoning: "Earth's rotation causes day and night.", marks: 1, markCode: "A" }],
            finalAnswer: "Earth rotating on its axis",
          },
        },
        {
          id: "cips-u2-sx-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many planets orbit the Sun?",
          response: { type: "numeric", parts: [{ label: "a", answer: 8, unit: "planets" }] },
          markscheme: {
            principles: [{ kind: "definition", name: "Solar System", statement: "Eight planets." }],
            steps: [{ reasoning: "There are 8 planets.", marks: 1, markCode: "M" }],
            finalAnswer: "8",
          },
        },
        {
          id: "cips-u2-sx-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "In a model with 9 planets, one is removed as the dwarf planet Pluto. How many major planets remain?",
          response: { type: "numeric", parts: [{ label: "a", answer: 8, unit: "planets" }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Solar System", statement: "8 major planets remain." }],
            steps: [
              { reasoning: "$9 - 1 = 8$.", marks: 1, markCode: "M" },
              { reasoning: "8 planets remain.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "8",
          },
        },
        {
          id: "cips-u2-sx-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which planet is closest to the Sun?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Earth" },
            { id: "b", text: "Mars" },
            { id: "c", text: "Venus" },
            { id: "d", text: "Mercury" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "definition", name: "Solar System", statement: "Mercury is closest." }],
            steps: [{ reasoning: "Mercury is the closest planet to the Sun.", marks: 1, markCode: "A" }],
            finalAnswer: "Mercury",
          },
        },
        {
          id: "cips-u2-sx-q10",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name two things the skeleton does for the body.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Skeleton", statement: "Support, protect, move, shape." }],
            steps: [
              { reasoning: "First function (e.g. support).", marks: 1, markCode: "M" },
              { reasoning: "Second (e.g. protect organs).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "e.g. support and protect",
          },
        },
        {
          id: "cips-u2-sx-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why energy can't be 'used up' or destroyed.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Energy conservation", statement: "Energy transfers between forms." }],
            steps: [
              { reasoning: "Energy exists in many forms — movement, heat, light, sound, chemical.", marks: 1, markCode: "M" },
              { reasoning: "It changes from one form to another.", marks: 1, markCode: "M" },
              { reasoning: "It can't be created or destroyed — only transferred.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Energy transfers between forms; never destroyed",
          },
        },
        {
          id: "cips-u2-sx-q12",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "What is at the centre of the Solar System?",
          response: { type: "mcq", choices: [
            { id: "a", text: "The Sun" },
            { id: "b", text: "The Moon" },
            { id: "c", text: "Earth" },
            { id: "d", text: "Mars" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Solar System", statement: "Sun is at the centre." }],
            steps: [{ reasoning: "The Sun is at the centre of the Solar System.", marks: 1, markCode: "A" }],
            finalAnswer: "The Sun",
          },
        },
        {
          id: "cips-u2-sx-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "If a model shows 8 planets orbiting the Sun and 2 moons orbiting Earth, how many total orbiting bodies are shown?",
          response: { type: "numeric", parts: [{ label: "a", answer: 10, unit: "bodies" }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Solar System", statement: "Add planets + moons." }],
            steps: [
              { reasoning: "$8 + 2 = 10$.", marks: 1, markCode: "M" },
              { reasoning: "Total = 10 orbiting bodies.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "10",
          },
        },
        {
          id: "cips-u2-sx-q14",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain what happens to the energy in your body when you walk.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Energy transfer", statement: "Chemical → movement + heat." }],
            steps: [
              { reasoning: "Chemical energy from food powers muscles.", marks: 1, markCode: "M" },
              { reasoning: "It becomes movement energy as you walk.", marks: 1, markCode: "M" },
              { reasoning: "Some becomes wasted heat — you warm up.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Chemical → movement + heat",
          },
        },
        {
          id: "cips-u2-sx-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which planet is known as Earth's 'sister' because of similar size?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Mars" },
            { id: "b", text: "Jupiter" },
            { id: "c", text: "Mercury" },
            { id: "d", text: "Venus" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "definition", name: "Solar System", statement: "Venus similar to Earth." }],
            steps: [{ reasoning: "Venus is Earth's sister planet — similar size.", marks: 1, markCode: "A" }],
            finalAnswer: "Venus",
          },
        },
        {
          id: "cips-u2-sx-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "(a) Name three skeleton functions. (b) Which bones protect the brain and heart/lungs? (c) What causes day/night? (d) How often does Earth rotate? (e) Name the eight planets in order. (f) What is at the centre of the Solar System? (g) Trace energy in a torch. (h) Why can't energy be destroyed?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Skeleton, energy, Solar System", statement: "Integrated Stage 4 answer." }],
            steps: [
              { reasoning: "(a) Support, protect, movement (also shape).", marks: 1, markCode: "M" },
              { reasoning: "(b) Skull protects brain; ribs protect heart/lungs.", marks: 1, markCode: "M" },
              { reasoning: "(c) Earth's rotation on its axis.", marks: 1, markCode: "M" },
              { reasoning: "(d) Once every 24 hours.", marks: 1, markCode: "M" },
              { reasoning: "(e) Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune.", marks: 1, markCode: "M" },
              { reasoning: "(f) The Sun.", marks: 1, markCode: "M" },
              { reasoning: "(g) Chemical (battery) → light + heat.", marks: 1, markCode: "M" },
              { reasoning: "(h) Energy transfers between forms, never created/destroyed.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Skeleton functions, protections, day/night, planets order, Sun centre, energy transfer, conservation.",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cips-u2-sx-notes",
      title: "Skeleton, energy, space — notes",
      summary: "Skeleton supports/protects/moves; energy transfers not destroyed; rotation = day/night.",
      sections: [
        { heading: "Body/energy", body: "Bones protect organs; energy changes form but is never lost." },
        { heading: "Space", body: "Sun centre; 8 planets orbit; Earth spins → day/night." },
      ],
    },
  ],
};
