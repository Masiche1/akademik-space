import type { Lesson } from "../../../types.ts";

export const lesson115: Lesson = {
  id: "cips-u1-lesson-1-15",
  code: "1-15",
  title: "Stage 3 — Forces, Light and Magnetism",
  goal: "I CAN explain how forces affect motion, describe how light travels and shadows form, and describe magnets' poles and effects.",
  standards: ["Cambridge Primary Science 0097 Stage 3: physics",
  "Cambridge Primary Science 0097 framework substrands: 3Pf, 3Ps, 3Pe"],
  stage: 3,
  vocabulary: [
    { term: "Gravity", definition: "The force that pulls objects towards the Earth." },
    { term: "Friction", definition: "A force that slows moving objects when surfaces rub together." },
    { term: "Shadow", definition: "The dark shape made when an object blocks light." },
    { term: "Vibration", definition: "A rapid back-and-forth movement that makes sound." },
    { term: "Magnet", definition: "An object that attracts iron and steel." },
    { term: "Pole", definition: "The ends of a magnet — north (N) and south (S)." },
  ],
  concepts: [
    {
      id: "cips-u1-s15-physics",
      title: "Forces, light, sound and magnets",
      skill: "Explain forces on motion, light and shadows, sound vibrations and magnet poles at Stage 3 level.",
      lesson: {
        sections: [
          {
            heading: "Forces, light and sound",
            body: "Gravity pulls objects down; friction slows sliding objects; air resistance slows falling objects. Light travels in straight lines — when blocked, it makes shadows. Sound is made by vibrations: pluck a ruler, it wiggles and makes sound. Louder sounds come from bigger vibrations.",
          },
          {
            heading: "Magnets",
            body: "Magnets attract iron and steel but not most other materials. Every magnet has a north and south pole. Like poles (N-N or S-S) repel; unlike poles (N-S) attract. You can find poles by seeing which end attracts/repels a known magnet.",
          },
        ],
        keyFormulas: [
          { name: "Forces", statement: "gravity pulls down; friction slows; air resistance slows" },
          { name: "Light", statement: "travels straight; blocked → shadow" },
          { name: "Magnets", statement: "like poles repel, unlike attract; attracts iron/steel" },
        ],
        workedExample: {
          problem: "Why does a ball eventually stop rolling? Two magnets with N poles facing — what happens?",
          solution: "Friction between ball and ground slows it to a stop. N-N poles repel — the magnets push apart.",
        },
      },
      questions: [
        {
          id: "cips-u1-ph-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What force pulls objects towards the ground?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Gravity" }, { id: "b", text: "Friction" }, { id: "c", text: "Magnetism" }, { id: "d", text: "Buoyancy" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Gravity", statement: "Pulls objects to Earth." }],
            steps: [{ reasoning: "Gravity pulls everything towards the ground.", marks: 1, markCode: "M" }],
            finalAnswer: "Gravity",
          },
        },
        {
          id: "cips-u1-ph-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What are the two poles of a magnet called, and what happens when N meets S?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Poles", statement: "N and S; unlike attract." }],
            steps: [
              { reasoning: "North and south poles.", marks: 1, markCode: "M" },
              { reasoning: "N-S attract (unlike poles attract).", marks: 1, markCode: "M" },
            ],
            finalAnswer: "North/south; N-S attract",
          },
        },
        {
          id: "cips-u1-ph-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A candle flame makes a shadow on a screen. (a) Why does the shadow form? (b) What happens to the shadow if you move the candle closer to the screen? (c) How is sound made when you tap a drum?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Light, sound, magnets", statement: "Light blocked → shadow; vibration → sound." }],
            steps: [
              { reasoning: "(a) Flame blocks light; light travels straight → dark area.", marks: 1, markCode: "M" },
              { reasoning: "(b) Shadow gets larger/sharper as distance changes.", marks: 1, markCode: "M" },
              { reasoning: "(c) Drum skin vibrates, pushing air → sound.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Light blocked; shadow changes size; vibration makes sound",
          },
        },
        {
          id: "cips-u1-ph-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Name three forces that slow moving objects and what causes each. (b) Explain why a shadow forms behind an object. (c) Describe how to find the north pole of an unmarked magnet using a marked one. (d) A paperclip is attracted to a magnet but a plastic ruler is not — why? (e) What happens when two south poles face each other? (f) How does a guitar string make sound?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Physics concepts", statement: "Forces, light, magnets, sound." }],
            steps: [
              { reasoning: "(a) Friction (surface rub), air resistance (air), gravity component.", marks: 1, markCode: "M" },
              { reasoning: "(b) Object blocks straight-travelling light.", marks: 1, markCode: "M" },
              { reasoning: "(c) Marked magnet's N attracts unmarked's S → that end is S, other is N.", marks: 1, markCode: "M" },
              { reasoning: "(d) Magnet attracts iron/steel; plastic isn't magnetic.", marks: 1, markCode: "M" },
              { reasoning: "(e) S-S repel (like poles).", marks: 1, markCode: "M" },
              { reasoning: "(f) String vibrates when plucked → sound waves.", marks: 1, markCode: "M" },
              { reasoning: "Reasoning uses correct physics vocabulary.", marks: 1, markCode: "M" },
              { reasoning: "All parts addressed.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Slowing forces, shadow=blocked light, pole-finding, magnetic materials, S-S repel, vibration→sound.",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cips-u1-ph-notes",
      title: "Physics — notes",
      summary: "Forces slow/change motion. Light straight → shadows. Sound = vibration. Magnets: like repel, unlike attract, iron only.",
      sections: [
        { heading: "Forces", body: "Gravity, friction, air resistance — all can slow objects." },
        { heading: "Magnets", body: "N/S poles; test attraction to identify poles and magnetic materials." },
      ],
    },
  ],
};
