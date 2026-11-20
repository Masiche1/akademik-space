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
            { id: "a", text: "Heart" }, { id: "b", text: "Brain" }, { id: "c", text: "Lungs" }, { id: "d", text: "Spine" },
          ], correctChoiceId: "b" },
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
