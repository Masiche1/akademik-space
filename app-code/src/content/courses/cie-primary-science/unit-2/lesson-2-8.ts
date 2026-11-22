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
            { id: "a", text: "Gold" },
            { id: "b", text: "Aluminium" },
            { id: "c", text: "Copper" },
            { id: "d", text: "Iron" },
          ], correctChoiceId: "d" },
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
        {
          id: "cips-u2-fm-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What pulls everything towards the Earth?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Buoyancy" },
            { id: "b", text: "Friction" },
            { id: "c", text: "Magnetism" },
            { id: "d", text: "Gravity" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "definition", name: "Gravity", statement: "Pulls objects toward Earth." }],
            steps: [{ reasoning: "Gravity pulls everything towards Earth.", marks: 1, markCode: "A" }],
            finalAnswer: "Gravity",
          },
        },
        {
          id: "cips-u2-fm-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Two magnets have unlike poles facing (N to S). What happens?",
          response: { type: "mcq", choices: [
            { id: "a", text: "They break" },
            { id: "b", text: "They attract" },
            { id: "c", text: "Nothing" },
            { id: "d", text: "They repel" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "theorem", name: "Magnetic poles", statement: "Unlike poles attract." }],
            steps: [{ reasoning: "N-S are unlike poles → attract.", marks: 1, markCode: "A" }],
            finalAnswer: "They attract",
          },
        },
        {
          id: "cips-u2-fm-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many poles does every magnet have?",
          response: { type: "numeric", parts: [{ label: "a", answer: 2, unit: "poles" }] },
          markscheme: {
            principles: [{ kind: "definition", name: "Poles", statement: "North and south." }],
            steps: [{ reasoning: "Every magnet has 2 poles.", marks: 1, markCode: "M" }],
            finalAnswer: "2",
          },
        },
        {
          id: "cips-u2-fm-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "You test 6 metals with a magnet: 2 are attracted and 4 are not. What is the total number of magnetic metals found?",
          response: { type: "numeric", parts: [{ label: "a", answer: 2, unit: "metals" }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Magnetic test", statement: "Attracted = magnetic." }],
            steps: [
              { reasoning: "2 metals were attracted.", marks: 1, markCode: "M" },
              { reasoning: "Total magnetic = 2.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2",
          },
        },
        {
          id: "cips-u2-fm-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which surface gives the LEAST friction?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Concrete" },
            { id: "b", text: "Smooth ice" },
            { id: "c", text: "Sandpaper" },
            { id: "d", text: "Rough carpet" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Friction", statement: "Smooth surfaces = less friction." }],
            steps: [{ reasoning: "Ice is very smooth → least friction.", marks: 1, markCode: "A" }],
            finalAnswer: "Smooth ice",
          },
        },
        {
          id: "cips-u2-fm-q10",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name two ways friction is useful.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Friction uses", statement: "Grip, brakes, walking." }],
            steps: [
              { reasoning: "First use (e.g. walking without slipping).", marks: 1, markCode: "M" },
              { reasoning: "Second use (e.g. brakes, writing with a pen).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "e.g. walking and brakes",
          },
        },
        {
          id: "cips-u2-fm-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why a magnet can pick up a steel paperclip but not an aluminium can.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Magnetic materials", statement: "Magnets attract iron and steel only." }],
            steps: [
              { reasoning: "Magnets attract iron and steel.", marks: 1, markCode: "M" },
              { reasoning: "The paperclip is steel — magnetic.", marks: 1, markCode: "M" },
              { reasoning: "Aluminium is not magnetic — the can is not attracted.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Steel attracted; aluminium not magnetic",
          },
        },
        {
          id: "cips-u2-fm-q12",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which pair of poles will REPEL each other?",
          response: { type: "mcq", choices: [
            { id: "a", text: "N and S" },
            { id: "b", text: "S and any N" },
            { id: "c", text: "S and N" },
            { id: "d", text: "N and N" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "theorem", name: "Magnetic poles", statement: "Like poles repel." }],
            steps: [{ reasoning: "N-N are like poles → repel.", marks: 1, markCode: "A" }],
            finalAnswer: "N and N",
          },
        },
        {
          id: "cips-u2-fm-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "In three friction tests, a block slides 10 cm, 12 cm and 11 cm. What is the total distance slid?",
          response: { type: "numeric", parts: [{ label: "a", answer: 33, unit: "cm" }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Friction tests", statement: "Add distances for total." }],
            steps: [
              { reasoning: "$10 + 12 + 11 = 33$.", marks: 1, markCode: "M" },
              { reasoning: "Total distance = 33 cm.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "33",
          },
        },
        {
          id: "cips-u2-fm-q14",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain why adding oil to a machine's moving parts reduces friction.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Friction", statement: "Lubricants reduce surface rubbing." }],
            steps: [
              { reasoning: "Oil is a lubricant that coats the surfaces.", marks: 1, markCode: "M" },
              { reasoning: "It makes surfaces smoother so they rub less.", marks: 1, markCode: "M" },
              { reasoning: "Less friction means less wear and smoother movement.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Oil lubricates surfaces → less friction",
          },
        },
        {
          id: "cips-u2-fm-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Without gravity, what would happen to objects?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Nothing changes" },
            { id: "b", text: "They would fall faster" },
            { id: "c", text: "They would float away" },
            { id: "d", text: "They would become magnetic" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Gravity", statement: "Pulls objects to Earth; without it we'd float." }],
            steps: [{ reasoning: "Without gravity objects would float away.", marks: 1, markCode: "A" }],
            finalAnswer: "They would float away",
          },
        },
        {
          id: "cips-u2-fm-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "(a) Define force, gravity and friction. (b) Name two uses of friction. (c) Why is friction greater on rough surfaces? (d) Which metals does a magnet attract? (e) What are the two poles of a magnet called? (f) What happens when like poles meet? Unlike poles? (g) How could you find the north pole of an unmarked magnet? (h) Why do ice skates slide easily but shoes grip?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Forces, friction, magnets", statement: "Integrated Stage 5 answer." }],
            steps: [
              { reasoning: "(a) Force=push/pull; gravity=pulls to Earth; friction=slows rubbing surfaces.", marks: 1, markCode: "M" },
              { reasoning: "(b) e.g. walking, brakes, writing.", marks: 1, markCode: "M" },
              { reasoning: "(c) Rough surfaces rub more → more friction.", marks: 1, markCode: "M" },
              { reasoning: "(d) Iron and steel.", marks: 1, markCode: "M" },
              { reasoning: "(e) North and south.", marks: 1, markCode: "M" },
              { reasoning: "(f) Like repel; unlike attract.", marks: 1, markCode: "M" },
              { reasoning: "(g) Use a marked magnet: N attracts unknown's S → other end is N.", marks: 1, markCode: "M" },
              { reasoning: "(h) Ice smooth = little friction; shoe soles rough = grip.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Force/gravity/friction defs, friction uses, rough surfaces, magnetic metals, poles, repel/attract, pole finding, ice vs shoes.",
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
