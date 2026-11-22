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
            { id: "a", text: "Magnetism" },
            { id: "b", text: "Friction" },
            { id: "c", text: "Buoyancy" },
            { id: "d", text: "Gravity" },
          ], correctChoiceId: "d" },
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
        {
          id: "cips-u1-ph-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which force slows a ball rolling on grass?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Buoyancy" },
            { id: "b", text: "Friction" },
            { id: "c", text: "Magnetism" },
            { id: "d", text: "Gravity" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Friction", statement: "Slows sliding surfaces rubbing together." }],
            steps: [{ reasoning: "Friction between ball and grass slows it.", marks: 1, markCode: "M" }],
            finalAnswer: "Friction",
          },
        },
        {
          id: "cips-u1-ph-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Light travels in a straight line. What forms when an object blocks the light?",
          response: { type: "mcq", choices: [
            { id: "a", text: "A rainbow" },
            { id: "b", text: "A vibration" },
            { id: "c", text: "A reflection" },
            { id: "d", text: "A shadow" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "definition", name: "Shadow", statement: "Dark shape where light is blocked." }],
            steps: [{ reasoning: "Blocked light makes a shadow.", marks: 1, markCode: "A" }],
            finalAnswer: "A shadow",
          },
        },
        {
          id: "cips-u1-ph-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A magnet has two ends. How many poles does it have?",
          response: { type: "numeric", parts: [{ label: "a", answer: 2, unit: "poles" }] },
          markscheme: {
            principles: [{ kind: "definition", name: "Poles", statement: "Every magnet has a north and south pole." }],
            steps: [{ reasoning: "Two poles: north and south.", marks: 1, markCode: "M" }],
            finalAnswer: "2",
          },
        },
        {
          id: "cips-u1-ph-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "You test 4 objects with a magnet: nail, paper, plastic ruler, steel spoon. The nail and spoon are attracted. What is the total number of magnetic objects found?",
          response: { type: "numeric", parts: [{ label: "a", answer: 2, unit: "objects" }] },
          markscheme: {
            principles: [{ kind: "definition", name: "Magnetic materials", statement: "Magnets attract iron and steel only." }],
            steps: [
              { reasoning: "Nail (iron) and steel spoon are attracted.", marks: 1, markCode: "M" },
              { reasoning: "Paper and plastic are not magnetic → 2 objects.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2",
          },
        },
        {
          id: "cips-u1-ph-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Two magnets have their N poles facing each other. What do they do?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Nothing happens" },
            { id: "b", text: "They stick together" },
            { id: "c", text: "They repel" },
            { id: "d", text: "They attract" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Magnet poles", statement: "Like poles repel; unlike attract." }],
            steps: [{ reasoning: "N-N are like poles → repel.", marks: 1, markCode: "A" }],
            finalAnswer: "They repel",
          },
        },
        {
          id: "cips-u1-ph-q10",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Give two examples of things that make sound by vibrating.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Vibration", statement: "Rapid back-and-forth movement that makes sound." }],
            steps: [
              { reasoning: "First valid example (e.g. drum, guitar string, ruler plucked).", marks: 1, markCode: "M" },
              { reasoning: "Second valid example.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "e.g. drum and guitar string",
          },
        },
        {
          id: "cips-u1-ph-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "A ball is thrown and slows down before stopping. Explain which forces act on it at each stage: while moving fast, and as it slows.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Forces", statement: "Gravity, friction, air resistance." }],
            steps: [
              { reasoning: "While moving: gravity pulls down, air resistance slows it.", marks: 1, markCode: "M" },
              { reasoning: "As it slows: friction with the ground/air acts against motion.", marks: 1, markCode: "M" },
              { reasoning: "Eventually all motion stops when forces balance/overcome it.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Gravity + air resistance slow it; friction stops it",
          },
        },
        {
          id: "cips-u1-ph-q12",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which material would a magnet NOT attract?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Steel" },
            { id: "b", text: "A paperclip" },
            { id: "c", text: "Iron" },
            { id: "d", text: "Copper" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "definition", name: "Magnetic materials", statement: "Only iron and steel are attracted." }],
            steps: [{ reasoning: "Copper is not magnetic; iron, steel and paperclips are.", marks: 1, markCode: "A" }],
            finalAnswer: "Copper",
          },
        },
        {
          id: "cips-u1-ph-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "In three shadow tests a stick casts shadows of lengths 4 cm, 5 cm and 4 cm. What is the total length of all three shadows?",
          response: { type: "numeric", parts: [{ label: "a", answer: 13, unit: "cm" }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Shadow experiments", statement: "Repeat and total results." }],
            steps: [
              { reasoning: "$4 + 5 + 4 = 13$.", marks: 1, markCode: "M" },
              { reasoning: "Total is 13 cm.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "13",
          },
        },
        {
          id: "cips-u1-ph-q14",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain why a shadow is smaller when the light source is directly above the object, using the idea that light travels in straight lines.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Light and shadows", statement: "Light travels straight; blocked light makes shadows." }],
            steps: [
              { reasoning: "Light travels in straight lines from the source.", marks: 1, markCode: "M" },
              { reasoning: "Light directly above means the object blocks light in a small area below.", marks: 1, markCode: "M" },
              { reasoning: "So the shadow is small and directly underneath.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Straight light blocked in small area → small shadow below",
          },
        },
        {
          id: "cips-u1-ph-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "What makes a louder sound?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Smaller vibrations" },
            { id: "b", text: "Bigger vibrations" },
            { id: "c", text: "No vibrations" },
            { id: "d", text: "Softer vibrations" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Loudness", statement: "Louder sounds come from bigger vibrations." }],
            steps: [{ reasoning: "Bigger vibrations → louder sound.", marks: 1, markCode: "A" }],
            finalAnswer: "Bigger vibrations",
          },
        },
        {
          id: "cips-u1-ph-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "(a) Name the three forces that can slow a moving object and give an example of each. (b) Explain how a shadow forms and what happens if the light source moves. (c) How do you find the north pole of an unmarked magnet? (d) Which two pole combinations attract and which repel? (e) Why does a paperclip jump toward a magnet but a plastic ruler does not? (f) Describe how to make a ruler vibrate and produce sound. (g) What is the difference between gravity and friction? (h) Give one real-life use of magnets.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Physics — forces, light, magnets, sound", statement: "Integrated Stage 3 physics answer." }],
            steps: [
              { reasoning: "(a) Friction (sliding), air resistance (falling), gravity component (rolling uphill).", marks: 1, markCode: "M" },
              { reasoning: "(b) Light blocked by object → dark area; moving light changes shadow size/position.", marks: 1, markCode: "M" },
              { reasoning: "(c) Use a marked magnet: N attracts the unknown's S pole; the other end is N.", marks: 1, markCode: "M" },
              { reasoning: "(d) Unlike (N-S) attract; like (N-N, S-S) repel.", marks: 1, markCode: "M" },
              { reasoning: "(e) Paperclip is iron/steel (magnetic); plastic is not.", marks: 1, markCode: "M" },
              { reasoning: "(f) Pluck/hold ruler over edge and flick → vibration → sound.", marks: 1, markCode: "M" },
              { reasoning: "(g) Gravity pulls toward Earth; friction opposes sliding between surfaces.", marks: 1, markCode: "M" },
              { reasoning: "(h) e.g. fridge door seal, compass, picking up pins.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Slowing forces, shadow formation, pole finding, attract/repel, magnetic materials, vibration sound, gravity vs friction, magnet use.",
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
