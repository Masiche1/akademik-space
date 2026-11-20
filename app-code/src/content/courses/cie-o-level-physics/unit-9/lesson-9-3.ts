import type { Lesson } from "../../../types.ts";

export const lessonp93: Lesson = {
  id: "olphys-u9-lesson-9-3",
  code: "9-3",
  title: "Solids, Liquids and Gases Comparison",
  goal: "I CAN compare the properties of solids, liquids and gases.",
  standards: ["5054 9.3"],
  vocabulary: [
    { term: "Fixed shape", definition: "Solid — particles vibrate in fixed positions." },
    { term: "Fixed volume", definition: "Solid and liquid — nearly incompressible." },
    { term: "Flow", definition: "Liquids and gases — take container shape." },
    { term: "Compressibility", definition: "Gases compress easily; solids/liquids barely." },
    { term: "Diffusion", definition: "Particles spreading — fastest in gases." },
    { term: "Meniscus", definition: "Curved liquid surface in container." },
    { term: "Surface tension", definition: "Liquid surface behaves like stretched film." },
    { term: "Brownian motion", definition: "Random particle motion observable in liquids/gases." },
  ],
  concepts: [
    {
      id: "olphys-u9-states-comparison",
      title: "States of matter comparison",
      skill: "Compare solids, liquids and gases using particle theory.",
      lesson: {
        sections: [
          {
            heading: "Particle arrangement",
            body: "- **Solid**: tightly packed, fixed positions, vibrate only\n- **Liquid**: close but can slide past each other\n- **Gas**: far apart, random fast motion",
          },
          {
            heading: "Properties comparison",
            body: "| Property | Solid | Liquid | Gas |\n|---|---|---|---|\n| Shape | Fixed | Container | Container |\n| Volume | Fixed | Fixed | Fills container |\n| Compressible | No | Barely | Yes |\n| Diffusion | Very slow | Slow | Fast |",
          },
          {
            heading: "Transitions",
            body: "Solid→liquid: melting (absorb heat). Liquid→gas: boiling/evaporation. Reverse on cooling.\n\nLatent heat needed for transitions without temp change.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Why do gases diffuse faster than liquids?",
          solution: "Gas particles move faster and have more space — collisions spread them quickly.",
        },
      },
      questions: [
        {
          id: "olphys-u9-states-comparison-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which state has fixed shape and volume?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Gas" }, { id: "b", text: "Liquid" }, { id: "c", text: "Solid" }, { id: "d", text: "All" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "property", name: "States", statement: "Solid fixed both." }],
            steps: [{ reasoning: "Recall.", working: "\\text{solid}", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** Solid",
            commonErrors: ["Liquid fixed volume only."],
          },
        },
        {
          id: "olphys-u9-states-comparison-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which state is most compressible?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "property", name: "States", statement: "Gas most compressible." }],
            steps: [
              { reasoning: "Gas.", marks: 1, markCode: "M" },
              { reasoning: "Complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Gas — particles far apart with empty space between them.",
            commonErrors: ["Liquid compresses slightly."],
          },
        },
        {
          id: "olphys-u9-states-comparison-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why diffusion is fastest in gases.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Diffusion", statement: "Fast random motion+space." }],
            steps: [
              { reasoning: "Gas particles move fast.", marks: 1, markCode: "M" },
              { reasoning: "Large spaces between particles.", marks: 1, markCode: "M" },
              { reasoning: "Quick spreading.", marks: 1, markCode: "M" },
              { reasoning: "Complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Gas particles have high kinetic energy and large spaces between them — they mix rapidly through random motion.",
            commonErrors: ["Not mentioning particle speed."],
          },
        },
        {
          id: "olphys-u9-states-comparison-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Compare solids, liquids and gases.",
          parts: [
            { label: "a", prompt: "Particle arrangement.", marks: 3 },
            { label: "b", prompt: "Physical properties.", marks: 3 },
            { label: "c", prompt: "State transitions.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "States", statement: "Arrangement/properties/transitions." }],
            steps: [
              { part: "a", reasoning: "Solid fixed, liquid slide, gas random.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Spacing differences.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Complete.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Shape/volume/compressibility.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Compare all three.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Complete.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Melting/boiling.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Latent heat.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) arrangement (b) shape/volume/compress (c) melting/boiling+latent heat",
            commonErrors: ["In (b) only comparing two states."],
          },
        },
      ],
    },
    {
      id: "olphys-u9-brownian",
      title: "Brownian motion and diffusion",
      skill: "Explain Brownian motion and diffusion in different states.",
      lesson: {
        sections: [
          {
            heading: "Brownian motion",
            body: "Random zigzag movement of particles suspended in fluid — caused by collisions with invisible fast-moving particles.\n\nEvidence for particle theory: pollen grains in water jitter randomly.",
          },
          {
            heading: "Diffusion",
            body: "Net movement of particles from high to low concentration.\n\n- Gases: fast (perfume spreads quickly)\n- Liquids: slower\n- Solids: very slow (years)",
          },
          {
            heading: "Factors",
            body: "Diffusion faster with: higher temperature (faster particles), gases vs liquids, lighter particles.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Why does perfume smell spread faster in summer?",
          solution: "Higher temperature → faster particles → faster diffusion.",
        },
      },
      questions: [
        {
          id: "olphys-u9-brownian-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is Brownian motion?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Ordered movement" }, { id: "b", text: "Random particle motion from collisions" }, { id: "c", text: "Magnetic movement" }, { id: "d", text: "Gravitational pull" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Brownian", statement: "Random collisions." }],
            steps: [{ reasoning: "Recall.", working: "\\text{random}", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Random particle motion from collisions",
            commonErrors: ["Not random — it's random."],
          },
        },
        {
          id: "olphys-u9-brownian-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What does Brownian motion provide evidence for?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Brownian", statement: "Evidence for particle theory." }],
            steps: [
              { reasoning: "Invisible particles exist.", marks: 1, markCode: "M" },
              { reasoning: "Complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "It provides evidence that matter is made of tiny particles in constant random motion.",
            commonErrors: ["Not linking to theory."],
          },
        },
        {
          id: "olphys-u9-brownian-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why diffusion is faster at higher temperatures.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Diffusion", statement: "Higher T→faster particles." }],
            steps: [
              { reasoning: "Heat→more kinetic energy.", marks: 1, markCode: "M" },
              { reasoning: "Faster random motion.", marks: 1, markCode: "M" },
              { reasoning: "Quick mixing.", marks: 1, markCode: "M" },
              { reasoning: "Complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Higher temperature gives particles more kinetic energy — they move faster and spread more quickly through diffusion.",
            commonErrors: ["Not linking T to speed."],
          },
        },
        {
          id: "olphys-u9-brownian-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Explain Brownian motion and diffusion.",
          parts: [
            { label: "a", prompt: "Define Brownian motion.", marks: 3 },
            { label: "b", prompt: "Define diffusion.", marks: 3 },
            { label: "c", prompt: "Compare in states.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Brownian/Diffusion", statement: "Random motion; spreading; gas>liquid>solid." }],
            steps: [
              { part: "a", reasoning: "Random zigzag.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "From collisions.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Complete.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "High→low conc.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Net movement.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Complete.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Gas fastest.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Solid slowest.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) random collisions (b) high→low (c) gas>liquid>solid",
            commonErrors: ["Swapping definitions."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "olphys-u9-states-notes",
      title: "States of matter and diffusion — revision notes",
      summary: "Particle arrangement, properties, Brownian motion, diffusion.",
      sections: [
        {
          heading: "Key facts",
          body: "Solid: fixed. Liquid: fixed volume. Gas: fills container. Brownian=random collisions. Diffusion: gas>liquid>solid.",
        },
        {
          heading: "Exam technique",
          body: "- Compare all three states.\n- Diffusion needs no energy input.\n- Temperature increases diffusion.",
        },
      ],
    },
  ],
};
