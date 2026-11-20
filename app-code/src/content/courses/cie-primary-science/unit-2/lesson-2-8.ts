import type { Lesson } from "../../../types.ts";

export const lesson28: Lesson = {
  id: "cips-u2-lesson-2-8",
  code: "2-8",
  title: "Stage 5 — Forces, Magnets and Friction",
  goal: "I CAN describe forces, magnetism and friction.",
  standards: ["Cambridge Primary Science 0097 Stage 5: forces",
  "Cambridge Primary Science 0097 framework substrands: 5Pf, 5Pe"],
  stage: 5,
  vocabulary: [
    { term: "Force", definition: "A push or pull that can change motion." },
    { term: "Gravity", definition: "Force pulling objects toward the Earth." },
    { term: "Friction", definition: "Force that slows objects rubbing together." },
    { term: "Magnet", definition: "Object that attracts iron and steel." },
    { term: "Poles", definition: "Ends of a magnet — north and south." },
  ],
  concepts: [
    {
      id: "cips-u2-s8-forces-magnets",
      title: "Forces, friction and magnetism",
      skill: "Describe forces, friction effects and magnetic behaviour at Stage 5 level.",
      lesson: {
        sections: [
          {
            heading: "Forces and friction",
            body: "Forces are pushes and pulls — they can start motion, stop it, speed it up or change direction. Gravity pulls everything toward Earth; without it we'd float away. Friction acts when surfaces rub — it slows motion and creates heat. More friction on rough surfaces; less on smooth or oily ones.",
          },
          {
            heading: "Magnets",
            body: "Magnets attract iron and steel but not other metals like aluminium or copper. Every magnet has two poles — north and south. Like poles repel (push apart); unlike poles attract (pull together). You can find poles by seeing which end attracts another magnet's known pole.",
          },
        ],
        keyFormulas: [
          { name: "Forces", statement: "Push or pull; changes motion" },
          { name: "Magnets", statement: "N+N repel, N+S attract; only iron/steel" },
        ],
        workedExample: {
          problem: "Why do ice skates slide easily but shoes grip?",
          solution: "Ice is very smooth → little friction; shoe soles are rough → more friction for grip.",
        },
      },
      questions: [
        {
          id: "cips-u2-fm-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which metal is attracted by a magnet?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Aluminium" }, { id: "b", text: "Copper" }, { id: "c", text: "Iron" }, { id: "d", text: "Gold" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Magnetic materials", statement: "Iron and steel are magnetic." }],
            steps: [{ reasoning: "Only iron (and steel) is magnetic here.", marks: 1, markCode: "A" }],
            finalAnswer: "Iron",
          },
        },
        {
          id: "cips-u2-fm-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does friction do when two surfaces rub?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Friction", statement: "Slows rubbing surfaces." }],
            steps: [
              { reasoning: "It slows the moving object.", marks: 1, markCode: "M" },
              { reasoning: "Answer: slows motion / creates heat.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Slows motion (and creates heat)",
          },
        },
        {
          id: "cips-u2-fm-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Two magnets are brought close — one north pole to another north pole. What happens?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "theorem", name: "Magnetic poles", statement: "Like poles repel." }],
            steps: [
              { reasoning: "Same poles = repel.", marks: 1, markCode: "M" },
              { reasoning: "They push apart, not attract.", marks: 1, markCode: "M" },
              { reasoning: "Answer: they repel.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "They repel (push apart)",
          },
        },
        {
          id: "cips-u2-fm-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Why do cyclists wear padded gloves and why do car tyres have tread?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Friction applications", statement: "Grip vs cushioning uses friction." }],
            steps: [
              { reasoning: "Gloves protect hands on falls / grip handlebars.", marks: 1, markCode: "M" },
              { reasoning: "Tread increases friction for grip on road.", marks: 1, markCode: "M" },
              { reasoning: "Both relate to friction/grip.", marks: 1, markCode: "M" },
              { reasoning: "Answer links both to friction.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Gloves cushion falls; tyre tread increases friction for grip",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cips-u2-fm-notes",
      title: "Forces and magnets — revision notes",
      summary: "Force = push/pull; friction slows; gravity pulls down; like poles repel.",
      sections: [
        { heading: "Forces", body: "Friction opposes motion; rough surfaces = more friction; smooth = less." },
        { heading: "Magnets", body: "Only iron/steel; N+N or S+S repel; N+S attract." },
      ],
    },
  ],
};
