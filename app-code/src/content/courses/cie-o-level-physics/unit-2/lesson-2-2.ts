import type { Lesson } from "../../../types.ts";

export const lessonp22: Lesson = {
  id: "olphys-u2-lesson-2-2",
  code: "2-2",
  title: "Newton's Laws and Friction",
  goal: "I CAN state and apply Newton's three laws and describe friction.",
  standards: ["5054 2.2"],
  vocabulary: [
    { term: "Newton's first law", definition: "Object stays at rest/uniform motion unless resultant force acts." },
    { term: "Newton's second law", definition: "F = ma — force = mass × acceleration." },
    { term: "Newton's third law", definition: "Every action has equal and opposite reaction." },
    { term: "Resultant force", definition: "Vector sum of all forces." },
    { term: "Inertia", definition: "Resistance of object to change in motion — related to mass." },
    { term: "Friction", definition: "Force opposing relative motion between surfaces." },
    { term: "Normal reaction", definition: "Force surface exerts perpendicular to object." },
    { term: "Weight", definition: "W = mg downward force." },
  ],
  concepts: [
    {
      id: "olphys-u2-newtons-laws",
      title: "Newton's three laws",
      skill: "State and apply Newton's laws to motion problems.",
      lesson: {
        sections: [
          {
            heading: "First law",
            body: "An object remains at rest or in uniform motion **unless a resultant force acts**.\n\nExamples: book on table stays; car continues forward when brakes off (until friction stops).",
          },
          {
            heading: "Second law",
            body: "**F = ma** — resultant force = mass × acceleration.\n\n- Larger force → more acceleration\n- Larger mass → less acceleration for same force\n- F in newtons (N), m in kg, a in m/s²",
          },
          {
            heading: "Third law",
            body: "Every action has an **equal and opposite reaction**.\n\nExamples: walking (foot pushes ground, ground pushes back); rocket (gas down, rocket up); book on table (book pushes table down, table pushes up).",
          },
        ],
        keyFormulas: [
          { name: "Newton's 2nd", statement: "$F = ma$" },
          { name: "Weight", statement: "$W = mg$" },
        ],
        workedExample: {
          problem: "A 2 kg mass accelerates at 5 m/s². Find resultant force.",
          solution: "F = ma = 2 × 5 = 10 N.",
        },
      },
      questions: [
        {
          id: "olphys-u2-newtons-laws-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "State Newton's second law.",
          response: { type: "mcq", choices: [
            { id: "a", text: "F = m/a" }, { id: "b", text: "F = ma" }, { id: "c", text: "F = mv" }, { id: "d", text: "a = F/m²" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "law", name: "Newton's 2nd", statement: "F = ma." }],
            steps: [{ reasoning: "Recall.", working: "F = ma", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** F = ma",
            commonErrors: ["Inverting to F=m/a."],
          },
        },
        {
          id: "olphys-u2-newtons-laws-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A resultant force of 20 N acts on a 4 kg mass. Find acceleration.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "F=ma", statement: "a = F/m." }],
            steps: [
              { reasoning: "a = 20/4.", working: "a = \\frac{20}{4}", marks: 1, markCode: "M" },
              { reasoning: "= 5 m/s².", marks: 1, markCode: "A" },
            ],
            finalAnswer: "5 m/s²",
            commonErrors: ["Multiplying instead of dividing."],
          },
        },
        {
          id: "olphys-u2-newtons-laws-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain Newton's third law using the example of walking.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "law", name: "Newton's 3rd", statement: "Action = opposite reaction." }],
            steps: [
              { reasoning: "Foot pushes ground backward.", marks: 1, markCode: "M" },
              { reasoning: "Ground pushes foot forward.", marks: 1, markCode: "M" },
              { reasoning: "Equal and opposite.", marks: 1, markCode: "M" },
              { reasoning: "Conclude motion.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "When walking, your foot pushes backward on the ground (action); the ground pushes forward on your foot with equal force (reaction) — this forward force propels you.",
            commonErrors: ["Saying 'forces cancel' — they're on different objects."],
          },
        },
        {
          id: "olphys-u2-newtons-laws-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "State and apply Newton's three laws.",
          parts: [
            { label: "a", prompt: "State first law.", marks: 3 },
            { label: "b", prompt: "State second law with equation.", marks: 3 },
            { label: "c", prompt: "State third law with example.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "law", name: "Newton's laws", statement: "1st: no force no change; 2nd: F=ma; 3rd: action-reaction." }],
            steps: [
              { part: "a", reasoning: "Rest/uniform unless force.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Resultant force condition.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Complete.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "F=ma.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "F resultant force.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Units N,kg,m/s².", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Equal opposite reaction.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Example: walking/rocket.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Different objects.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) no force→no change (b) F=ma (c) action=reaction diff objects",
            commonErrors: ["In (c) saying forces cancel — different objects."],
          },
        },
      ],
    },
    {
      id: "olphys-u2-friction",
      title: "Friction and resultant forces",
      skill: "Describe friction, resolve forces and apply to motion.",
      lesson: {
        sections: [
          {
            heading: "Friction",
            body: "Force opposing relative motion between surfaces.\n- Depends on surfaces and normal force\n- Acts opposite to motion (or attempted motion)\n- Useful: walking, braking; harmful: engine wear",
          },
          {
            heading: "Resultant force",
            body: "Vector sum of all forces. If zero → no acceleration (Newton's 1st). If non-zero → F=ma.",
          },
          {
            heading: "Free body analysis",
            body: "Draw all forces: weight (down), normal (up), friction (opposes motion), applied force. Find resultant → apply F=ma.",
          },
        ],
        keyFormulas: [
          { name: "Newton's 2nd", statement: "$F_{resultant} = ma$" },
        ],
        workedExample: {
          problem: "A 10 kg box on horizontal surface: weight=98N, normal=98N, applied=30N, friction=10N. Find acceleration.",
          solution: "Resultant = 30−10 = 20N. a = F/m = 20/10 = 2 m/s².",
        },
      },
      questions: [
        {
          id: "olphys-u2-friction-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does friction oppose?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Gravity" }, { id: "b", text: "Relative motion between surfaces" }, { id: "c", text: "Acceleration" }, { id: "d", text: "Weight" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Friction", statement: "Opposes relative motion." }],
            steps: [{ reasoning: "Recall.", working: "\\text{relative motion}", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Relative motion between surfaces",
            commonErrors: ["Friction opposes motion not gravity."],
          },
        },
        {
          id: "olphys-u2-friction-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A car experiences 2000 N driving force and 500 N friction. What is the resultant force?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Resultant", statement: "Vector sum of forces." }],
            steps: [
              { reasoning: "2000 − 500.", working: "2000 - 500", marks: 1, markCode: "M" },
              { reasoning: "= 1500 N.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1500 N",
            commonErrors: ["Adding instead of subtracting opposing forces."],
          },
        },
        {
          id: "olphys-u2-friction-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A 1500 kg car accelerates at 2 m/s² with 500 N friction. Find driving force.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "F=ma", statement: "F = ma; include friction." }],
            steps: [
              { reasoning: "F_resultant = 1500 × 2 = 3000 N.", marks: 1, markCode: "M" },
              { reasoning: "Driving = 3000 + 500.", marks: 1, markCode: "M" },
              { reasoning: "= 3500 N.", marks: 1, markCode: "A" },
              { reasoning: "Unit N.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "3500 N",
            commonErrors: ["Forgetting to add friction back."],
          },
        },
        {
          id: "olphys-u2-friction-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Explain friction and its effects on motion.",
          parts: [
            { label: "a", prompt: "Define friction.", marks: 2 },
            { label: "b", prompt: "Explain useful friction.", marks: 3 },
            { label: "c", prompt: "Explain harmful friction and reduction.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Friction", statement: "Opposes relative motion; useful/harmful." }],
            steps: [
              { part: "a", reasoning: "Force opposing relative motion.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Complete.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Walking/braking.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Enables grip.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Complete.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Wastes energy/wears.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Lubricants/ball bearings.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Streamlining.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) opposes motion (b) walking/braking (c) lubricants/streamline",
            commonErrors: ["Only negative view — friction useful too."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "olphys-u2-newtons-friction-notes",
      title: "Newton's laws and friction — revision notes",
      summary: "Three laws, F=ma, friction, resultant forces.",
      sections: [
        {
          heading: "Key facts",
          body: "1st: no force→no change. 2nd: F=ma. 3rd: action=reaction (different objects). Friction opposes relative motion. Resultant=vector sum.",
        },
        {
          heading: "Exam technique",
          body: "- F=ma uses RESULTANT force.\n- Include friction in force balance.\n- 3rd law pairs on different objects.",
        },
      ],
    },
  ],
};
