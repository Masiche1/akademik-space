import type { Lesson } from "../../../types.ts";

export const lesson72: Lesson = {
  id: "cialfm-u7-lesson-7-2",
  code: "7-2",
  title: "Forces, Friction and Connected Particles",
  goal: "I CAN apply Newton's laws with friction and connected systems.",
  standards: ["Cambridge A Level Further Mathematics 9231 Paper 4: Mechanics"],
  vocabulary: [
    { term: "Newton's second law", definition: "$F = ma$: net force equals mass times acceleration." },
    { term: "Limiting friction", definition: "Maximum friction $\\mu R$ before slipping." },
    { term: "Connected particles", definition: "Bodies joined by a string over a pulley sharing acceleration." },
    { term: "Tension", definition: "Force transmitted through a string or rod." },
    { term: "Normal reaction", definition: "Contact force perpendicular to a surface." },
  ],
  concepts: [
    {
      id: "cialfm-u7-s2-forces",
      title: "Newton's laws with friction and connections",
      skill: "Resolve forces, apply $F=ma$, and handle pulley systems.",
      lesson: {
        sections: [
          {
            heading: "Newton's second law",
            body: "Draw a free-body diagram for each body. Resolve vertically to find the normal reaction $R$, then apply $F_{\\text{net}} = ma$ horizontally. Friction acts opposite motion: $F \\le \\mu R$, with equality at the limiting case.",
          },
          {
            heading: "Connected particles",
            body: "For two masses joined over a smooth pulley, both share the same acceleration magnitude $a$. Write $F = ma$ for each mass in the direction of motion (the hanging mass accelerates down, the surface mass accelerates toward the pulley). Solve the simultaneous equations for $a$ and tension $T$.",
          },
        ],
        keyFormulas: [
          { name: "Newton II", statement: "$F_{\\text{net}} = ma$" },
          { name: "Limiting friction", statement: "$F_{\\max} = \\mu R$" },
        ],
        workedExample: {
          problem: "A 4 kg mass on a rough horizontal table ($\\mu = 0.3$) is pulled by a 10 N horizontal force. Find its acceleration (g = 9.8).",
          solution: "$R = 4 \\times 9.8 = 39.2$ N; friction $= 0.3 \\times 39.2 = 11.76$ N — exceeds the 10 N pull, so the mass does not move; $a = 0$.",
        },
      },
      questions: [
        {
          id: "cialfm-u7-f-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does Newton's second law state?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$F = ma$" }, { id: "b", text: "$F = mv$" }, { id: "c", text: "$E = mc^2$" }, { id: "d", text: "$p = mv^2$" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "theorem", name: "Newton II", statement: "Net force = mass × acceleration." }],
            steps: [{ reasoning: "$F = ma$.", marks: 1, markCode: "A" }],
            finalAnswer: "$F = ma$",
          },
        },
        {
          id: "cialfm-u7-f-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A 2 kg mass experiences a net force of 10 N. Find its acceleration.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "F = ma", statement: "a = F/m." }],
            steps: [
              { reasoning: "$a = 10/2 = 5$ m/s².", marks: 1, markCode: "M" },
              { reasoning: "Answer: 5 m/s².", marks: 1, markCode: "A" },
            ],
            finalAnswer: "5 m/s²",
          },
        },
        {
          id: "cialfm-u7-f-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "A 3 kg block on a smooth horizontal table is pulled by a 12 N horizontal force. Find its acceleration.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Smooth surface", statement: "No friction; net force = applied force." }],
            steps: [
              { reasoning: "Smooth ⇒ friction = 0.", marks: 1, markCode: "M" },
              { reasoning: "$F_{\\text{net}} = 12$ N.", marks: 1, markCode: "M" },
              { reasoning: "$a = 12/3 = 4$ m/s².", marks: 1, markCode: "M" },
              { reasoning: "Answer stated.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "4 m/s²",
          },
        },
        {
          id: "cialfm-u7-f-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Two masses 3 kg and 5 kg are joined by a light inextensible string over a smooth pulley, the 5 kg hanging freely. Find the acceleration of the system (g = 9.8).",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Connected particles", statement: "Same a for both; write F=ma each." }],
            steps: [
              { reasoning: "Hanging mass: $5g - T = 5a$; table mass: $T = 3a$.", marks: 1, markCode: "M" },
              { reasoning: "Substitute: $49 - 3a = 5a$ ⇒ $8a = 49$.", marks: 1, markCode: "M" },
              { reasoning: "$a = 6.125$ m/s².", marks: 1, markCode: "M" },
              { reasoning: "$T = 3 \\times 6.125 = 18.375$ N.", marks: 1, markCode: "M" },
              { reasoning: "Answer: a ≈ 6.13 m/s².", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$a \\approx 6.13$ m/s²",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cialfm-u7-f-notes",
      title: "Forces — revision notes",
      summary: "FBD → resolve → F=ma; friction limit μR; shared acceleration on pulleys.",
      sections: [
        { heading: "Method", body: "Free-body diagram, resolve vertically for R, then F=ma along motion." },
        { heading: "Pulleys", body: "Both masses share a; tension equal throughout a light string." },
      ],
    },
  ],
};
