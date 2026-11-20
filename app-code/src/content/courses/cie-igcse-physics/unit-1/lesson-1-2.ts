import type { Lesson } from "../../../types.ts";

export const lessonp12: Lesson = {
  id: "ciep-u1-lesson-1-2",
  code: "1-2",
  title: "Scalars, Vectors and Free Fall",
  goal: "I CAN distinguish scalars from vectors and describe free fall and gravity.",
  standards: ["0655 1.2"],
  vocabulary: [
    { term: "Scalar", definition: "Quantity with magnitude only (speed, distance, mass, time)." },
    { term: "Vector", definition: "Quantity with magnitude and direction (velocity, acceleration, force, displacement)." },
    { term: "Displacement", definition: "Distance in a given direction — vector." },
    { term: "Free fall", definition: "Motion under gravity only, ignoring air resistance." },
    { term: "Acceleration of free fall (g)", definition: "9.8 m/s² downward — all objects fall at same rate in vacuum." },
    { term: "Weight", definition: "Force of gravity on mass: W = mg (newtons)." },
    { term: "Terminal velocity", definition: "Constant velocity when drag equals weight." },
    { term: "Resultant force", definition: "Single force equivalent to all forces acting." },
  ],
  concepts: [
    {
      id: "ciep-u1-scalars-vectors",
      title: "Scalars and vectors",
      skill: "Distinguish scalars from vectors and resolve simple vector quantities.",
      lesson: {
        sections: [
          {
            heading: "Comparison",
            body: "| Scalar | Vector |\n|---|---|\n| Speed | Velocity |\n| Distance | Displacement |\n| Mass | Weight |\n| Time | Acceleration |\n| Energy | Force |\n\nScalars: magnitude only. Vectors: magnitude + direction.",
          },
          {
            heading: "Vector examples",
            body: "Velocity 20 m/s **east**; force 50 N **downward**; displacement 100 m **north**. Direction essential — 20 m/s east ≠ 20 m/s west.",
          },
          {
            heading: "Weight vs mass",
            body: "Mass = amount of matter (kg, scalar). Weight = force of gravity = mg (N, vector). Weight changes with g; mass doesn't.",
          },
        ],
        keyFormulas: [
          { name: "Weight", statement: "$W = mg$" },
          { name: "g", statement: "$g = 9.8\\ \\text{m/s}^2$" },
        ],
        workedExample: {
          problem: "Calculate the weight of a 5 kg mass. (g=9.8)",
          solution: "W = mg = 5 × 9.8 = 49 N.",
        },
      },
      questions: [
        {
          id: "ciep-u1-scalars-vectors-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is a vector quantity?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Speed" }, { id: "b", text: "Mass" }, { id: "c", text: "Velocity" }, { id: "d", text: "Time" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Vector", statement: "Magnitude + direction." }],
            steps: [{ reasoning: "Recall.", working: "\\text{velocity}", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** Velocity",
            commonErrors: ["Speed is scalar — velocity is vector."],
          },
        },
        {
          id: "ciep-u1-scalars-vectors-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Distinguish between mass and weight.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "property", name: "Mass vs weight", statement: "Mass scalar kg; weight vector N = mg." }],
            steps: [
              { reasoning: "Mass: amount of matter, kg.", marks: 1, markCode: "M" },
              { reasoning: "Weight: force of gravity, N, = mg.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Mass is the amount of matter in kg (scalar, constant); weight is the force of gravity on that mass in newtons (vector, W=mg, varies with g).",
            commonErrors: ["Saying 'weight is measured in kg'."],
          },
        },
        {
          id: "ciep-u1-scalars-vectors-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Calculate the weight of a 60 kg person on Earth. (g=9.8)",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "W=mg", statement: "W = mg." }],
            steps: [
              { reasoning: "W = 60 × 9.8.", working: "W = 60 \\times 9.8", marks: 1, markCode: "M" },
              { reasoning: "= 588 N.", marks: 1, markCode: "A" },
              { reasoning: "Unit N.", marks: 1, markCode: "M" },
              { reasoning: "Complete.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "588 N",
            commonErrors: ["Using kg instead of N."],
          },
        },
        {
          id: "ciep-u1-scalars-vectors-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Explain the difference between scalars and vectors with examples.",
          parts: [
            { label: "a", prompt: "Define scalar and vector.", marks: 3 },
            { label: "b", prompt: "Give two examples of each.", marks: 3 },
            { label: "c", prompt: "Explain why direction matters for vectors.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Scalar/vector", statement: "Scalar: magnitude; vector: magnitude+direction." }],
            steps: [
              { part: "a", reasoning: "Scalar definition.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Vector definition.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Complete.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Scalars: speed/mass/time.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Vectors: velocity/force/acceleration.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Two each.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Direction essential.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "20 m/s east ≠ west.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Conclude.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) scalar mag only/vector mag+dir (b) speed/mass vs velocity/force (c) direction matters",
            commonErrors: ["In (b) mixing scalar/vector examples."],
          },
        },
      ],
    },
    {
      id: "ciep-u1-free-fall",
      title: "Free fall and gravity",
      skill: "Describe free fall, weight and acceleration due to gravity.",
      lesson: {
        sections: [
          {
            heading: "Free fall",
            body: "Objects fall under gravity alone (ignoring air). All objects accelerate at **g = 9.8 m/s²** downward regardless of mass — in vacuum, feather and hammer fall together (Apollo 15 demo).",
          },
          {
            heading: "Weight and gravity",
            body: "Weight W = mg — force pulling object toward Earth. On Moon g ≈ 1.6 m/s² → weight less, mass same.",
          },
          {
            heading: "Air resistance",
            body: "In air, lighter objects with large surface area experience more drag → terminal velocity reached sooner. Parachutes increase drag to slow descent.",
          },
        ],
        keyFormulas: [
          { name: "Weight", statement: "$W = mg$" },
          { name: "g", statement: "$g = 9.8\\ \\text{m/s}^2$" },
        ],
        workedExample: {
          problem: "Why do all objects fall at the same rate in a vacuum?",
          solution: "Weight and inertia both proportional to mass — gravitational acceleration g is independent of mass.",
        },
      },
      questions: [
        {
          id: "ciep-u1-free-fall-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the acceleration of free fall on Earth?",
          response: { type: "mcq", choices: [
            { id: "a", text: "1.6 m/s²" }, { id: "b", text: "9.8 m/s²" }, { id: "c", text: "10 m/s² exactly" }, { id: "d", text: "98 m/s²" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "property", name: "g", statement: "9.8 m/s²." }],
            steps: [{ reasoning: "Recall.", working: "9.8", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** 9.8 m/s²",
            commonErrors: ["10 is approximation, 9.8 is standard."],
          },
        },
        {
          id: "ciep-u1-free-fall-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why does a heavy object not fall faster than a light one in a vacuum?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Free fall", statement: "g independent of mass." }],
            steps: [
              { reasoning: "Gravity ∝ mass; inertia ∝ mass.", marks: 1, markCode: "M" },
              { reasoning: "They cancel → same acceleration.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Gravitational force and inertia are both proportional to mass, so they cancel — all objects accelerate at g = 9.8 m/s² regardless of mass in a vacuum.",
            commonErrors: ["Saying 'no gravity on light objects'."],
          },
        },
        {
          id: "ciep-u1-free-fall-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why a parachutist reaches terminal velocity.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Terminal velocity", statement: "Drag = weight → constant speed." }],
            steps: [
              { reasoning: "Falls → speed increases.", marks: 1, markCode: "M" },
              { reasoning: "Air resistance increases with speed.", marks: 1, markCode: "M" },
              { reasoning: "When drag = weight → no acceleration.", marks: 1, markCode: "M" },
              { reasoning: "Constant velocity reached.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "As the parachutist speeds up, air resistance increases until it equals weight — resultant force becomes zero, acceleration stops, and terminal velocity is reached.",
            commonErrors: ["Saying 'gravity stops' — forces balance."],
          },
        },
        {
          id: "ciep-u1-free-fall-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Describe free fall and factors affecting falling objects.",
          parts: [
            { label: "a", prompt: "Define free fall.", marks: 2 },
            { label: "b", prompt: "State g value and meaning.", marks: 3 },
            { label: "c", prompt: "Explain terminal velocity.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Free fall", statement: "g=9.8; terminal when drag=weight." }],
            steps: [
              { part: "a", reasoning: "Motion under gravity only.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "No air resistance.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "g=9.8 m/s².", marks: 1, markCode: "M" },
              { part: "b", reasoning: "All objects same rate.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Independent of mass.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Speed↑→drag↑.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Drag=weight→no accel.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Constant velocity.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) gravity only (b) g=9.8 all same (c) drag=weight→terminal",
            commonErrors: ["In (c) saying 'falls forever accelerating'."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciep-u1-scalars-vectors-notes",
      title: "Scalars, vectors and free fall — revision notes",
      summary: "Scalar vs vector, W=mg, free fall g=9.8, terminal velocity.",
      sections: [
        {
          heading: "Key facts",
          body: "Scalars: magnitude only. Vectors: magnitude+direction. W=mg. Free fall g=9.8 m/s² all masses. Terminal velocity when drag=weight.",
        },
        {
          heading: "Exam technique",
          body: "- Speed scalar, velocity vector.\n- Weight in N not kg.\n- Vacuum: all fall same rate.",
        },
      ],
    },
  ],
};
