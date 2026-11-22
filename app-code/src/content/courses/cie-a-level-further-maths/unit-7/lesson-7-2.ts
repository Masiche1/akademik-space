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
            { id: "a", text: "$F = ma$" },
            { id: "b", text: "$p = mv^2$" },
            { id: "c", text: "$E = mc^2$" },
            { id: "d", text: "$F = mv$" },
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
        {
          id: "cialfm-u7-f-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The limiting friction between a body and a rough surface is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\mu R$" },
            { id: "b", text: "$\\mu m$" },
            { id: "c", text: "$mg$" },
            { id: "d", text: "$R/\\mu$" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "formula", name: "Limiting friction", statement: "$F_{\\max} = \\mu R$." }],
            steps: [{ reasoning: "Maximum friction equals coefficient of friction times normal reaction.", marks: 1, markCode: "A" }],
            finalAnswer: "$\\mu R$",
          },
        },
        {
          id: "cialfm-u7-f-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A 5 kg box on a smooth horizontal floor is pushed with a 20 N horizontal force. Find its acceleration.",
          response: { type: "numeric", parts: [{ label: "a", answer: 4 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Smooth surface", statement: "No friction; net force = applied force." }],
            steps: [
              { reasoning: "$a = F/m = 20/5 = 4$ m/s².", marks: 1, markCode: "M" },
              { reasoning: "Answer: 4 m/s².", marks: 1, markCode: "A" },
            ],
            finalAnswer: "4 m/s²",
          },
        },
        {
          id: "cialfm-u7-f-q7",
          difficulty: "core",
          totalMarks: 3,
          stem: "A 3 kg block slides down a smooth plane inclined at 30° to the horizontal. Find its acceleration (g = 9.8).",
          response: { type: "numeric", parts: [{ label: "a", answer: 4.9 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Inclined plane", statement: "Resolve weight: $mg\\sin\\theta$ down the plane, $mg\\cos\\theta$ into it." }],
            steps: [
              { reasoning: "Smooth ⇒ friction = 0; net force down plane $= mg\\sin30°$.", marks: 1, markCode: "M" },
              { reasoning: "$a = g\\sin30° = 9.8 \\times 0.5 = 4.9$ m/s².", marks: 1, markCode: "M" },
              { reasoning: "Answer: 4.9 m/s².", marks: 1, markCode: "A" },
            ],
            finalAnswer: "4.9 m/s²",
          },
        },
        {
          id: "cialfm-u7-f-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "The force of friction between two surfaces in contact always acts…",
          response: { type: "mcq", choices: [
            { id: "a", text: "opposite to the motion or tendency to move" },
            { id: "b", text: "only when the body is accelerating" },
            { id: "c", text: "vertically upwards" },
            { id: "d", text: "in the direction of motion" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Friction", statement: "Opposes relative motion/tendency." }],
            steps: [{ reasoning: "Friction always opposes sliding or the tendency to slide.", marks: 1, markCode: "A" }],
            finalAnswer: "opposite to the motion or tendency to move",
          },
        },
        {
          id: "cialfm-u7-f-q9",
          difficulty: "core",
          totalMarks: 5,
          stem: "A 5 kg crate on a rough plane inclined at 30° to the horizontal ($\\mu = 0.2$) is pulled up the plane by a 40 N force parallel to the plane. Find its acceleration (g = 9.8).",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Inclined plane with friction", statement: "Resolve perpendicular for R, then along the plane." }],
            steps: [
              { reasoning: "$R = mg\\cos30° = 5 \\times 9.8 \\times 0.866 \\approx 42.4$ N.", marks: 1, markCode: "M" },
              { reasoning: "Friction $= \\mu R = 0.2 \\times 42.4 \\approx 8.49$ N, acting down the plane.", marks: 1, markCode: "M" },
              { reasoning: "Weight component down plane $= mg\\sin30° = 24.5$ N.", marks: 1, markCode: "M" },
              { reasoning: "Net force $= 40 - 24.5 - 8.49 \\approx 7.01$ N up the plane.", marks: 1, markCode: "M" },
              { reasoning: "$a = 7.01/5 \\approx 1.40$ m/s² up the plane.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$a \\approx 1.40$ m/s² up the plane",
          },
        },
        {
          id: "cialfm-u7-f-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Two particles are joined by a light inextensible string passing over a smooth pulley. The tension in the string is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "equal to the weight of the lighter mass" },
            { id: "b", text: "zero" },
            { id: "c", text: "the same throughout" },
            { id: "d", text: "greater on the heavier side" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "principle", name: "Light string", statement: "Tension is uniform in a light inextensible string." }],
            steps: [{ reasoning: "A light inextensible string transmits the same tension throughout.", marks: 1, markCode: "A" }],
            finalAnswer: "the same throughout",
          },
        },
        {
          id: "cialfm-u7-f-q11",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Two masses of 4 kg and 6 kg hang freely on a light inextensible string over a smooth pulley. Find (a) the acceleration of the system and (b) the tension in the string (g = 9.8).",
          response: { type: "numeric", parts: [
            { label: "a", answer: 1.96, tolerance: 0.01 },
            { label: "b", answer: 47.04, tolerance: 0.01 },
          ] },
          markscheme: {
            principles: [{ kind: "technique", name: "Atwood machine", statement: "Net force = total mass × a." }],
            steps: [
              { reasoning: "For the 6 kg mass: $6g - T = 6a$; for the 4 kg mass: $T - 4g = 4a$.", marks: 1, markCode: "M" },
              { reasoning: "Adding: $2g = 10a \\Rightarrow a = 19.6/10 = 1.96$ m/s².", marks: 1, markCode: "M" },
              { reasoning: "$T = 4(9.8 + 1.96) = 47.04$ N.", marks: 1, markCode: "M" },
              { reasoning: "Answers: (a) 1.96 m/s², (b) 47.04 N.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 1.96 m/s²; (b) 47.04 N",
          },
        },
        {
          id: "cialfm-u7-f-q12",
          difficulty: "core",
          totalMarks: 4,
          stem: "A 2 kg block on a smooth horizontal table is joined by a light inextensible string over a smooth pulley to a 1 kg mass hanging freely. Find (a) the acceleration and (b) the tension (g = 9.8).",
          response: { type: "numeric", parts: [
            { label: "a", answer: 3.27, tolerance: 0.01 },
            { label: "b", answer: 6.53, tolerance: 0.01 },
          ] },
          markscheme: {
            principles: [{ kind: "technique", name: "Connected particles", statement: "Table: $T = 2a$; hanging: $g - T = a$." }],
            steps: [
              { reasoning: "Table mass: $T = 2a$; hanging mass: $1 \\times 9.8 - T = 1 \\times a$.", marks: 1, markCode: "M" },
              { reasoning: "Substitute: $9.8 - 2a = a \\Rightarrow a = 9.8/3 \\approx 3.27$ m/s².", marks: 1, markCode: "M" },
              { reasoning: "$T = 2 \\times 3.27 \\approx 6.53$ N (or $T = 9.8 - 3.27$).", marks: 1, markCode: "M" },
              { reasoning: "Answers: (a) ≈ 3.27 m/s², (b) ≈ 6.53 N.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) ≈ 3.27 m/s²; (b) ≈ 6.53 N",
          },
        },
        {
          id: "cialfm-u7-f-q13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A block rests on a horizontal surface. The normal reaction $R$ is equal to…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$mg$" },
            { id: "b", text: "$\\mu mg$" },
            { id: "c", text: "zero" },
            { id: "d", text: "$ma$" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Normal reaction", statement: "Vertical equilibrium on horizontal surface." }],
            steps: [{ reasoning: "No vertical acceleration ⇒ $R = mg$.", marks: 1, markCode: "A" }],
            finalAnswer: "$mg$",
          },
        },
        {
          id: "cialfm-u7-f-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "A crate of mass 8 kg rests on a rough horizontal floor with $\\mu = 0.35$. Find the minimum horizontal force needed to move it (g = 9.8).",
          response: { type: "numeric", parts: [{ label: "a", answer: 27.44 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Limiting friction", statement: "Minimum force = $\\mu R$; $R = mg$." }],
            steps: [
              { reasoning: "$R = 8 \\times 9.8 = 78.4$ N; $F_{\\min} = 0.35 \\times 78.4 = 27.44$ N.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 27.44 N.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "27.44 N",
          },
        },
        {
          id: "cialfm-u7-f-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Friction acting on a body at rest on a rough surface…",
          response: { type: "mcq", choices: [
            { id: "a", text: "acts in the direction of the applied force" },
            { id: "b", text: "is always zero" },
            { id: "c", text: "always equals $\\mu R$" },
            { id: "d", text: "has magnitude up to $\\mu R$ and opposes the tendency to move" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "definition", name: "Static friction", statement: "Varies from 0 to $\\mu R$." }],
            steps: [{ reasoning: "Static friction matches the applied force up to the limiting value $\\mu R$.", marks: 1, markCode: "A" }],
            finalAnswer: "has magnitude up to $\\mu R$ and opposes the tendency to move",
          },
        },
        {
          id: "cialfm-u7-f-q16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A 4 kg box on a rough plane inclined at 30° to the horizontal ($\\mu = 0.6$) is pulled up the plane by a force $P$ parallel to the plane. Find the minimum $P$ needed to start the box moving, and state whether the box moves when $P$ is removed (g = 9.8).",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Impending motion", statement: "At the point of slipping, friction = $\\mu R$." }],
            steps: [
              { reasoning: "$R = mg\\cos30° = 4 \\times 9.8 \\times 0.866 \\approx 33.9$ N.", marks: 1, markCode: "M" },
              { reasoning: "Limiting friction $= 0.6 \\times 33.9 \\approx 20.4$ N.", marks: 1, markCode: "M" },
              { reasoning: "Weight component down plane $= mg\\sin30° = 19.6$ N.", marks: 1, markCode: "M" },
              { reasoning: "$P_{\\min} = 19.6 + 20.4 \\approx 40.0$ N.", marks: 1, markCode: "M" },
              { reasoning: "Since $\\mu = 0.6 > \\tan30° \\approx 0.577$, friction alone holds the box; it does not move when $P$ is removed. $P_{\\min} \\approx 40.0$ N.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$P_{\\min} \\approx 40.0$ N; box stays at rest when $P$ is removed",
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
